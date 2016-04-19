"""Manage the creation of the key browser."""

import json
from jinja2 import Environment, PackageLoader
import logging
import os
import stat_key_browser.cluster_config as cluster_config
import stat_key_browser.search_terms as search_terms
from stat_key_browser.tagger import Tagger
from stat_key_browser.categorizer import Categorizer
import stat_key_browser.key_collector as key_collector
import stat_key_browser.mapper as mapper
from stat_key_browser.cluster_config import ApiException

OUTPUT_DIR = 'web_app'
JS_DIR = 'js'
HTML_FNAME = 'index.html'
JSKEYS_FNAME = 'keys.js'

UNKNOWN_RELEASE = 'unknown'

class BrowserBuilder(object):
    """
    Generate an html file representing the key browser app.

    Inputs: List of keys from cluster via PAPI, key tag definitions via file.
    Outputs: an .html file + .js key data file
    """

    def __init__(self, cluster_ip, username, password, store_ip):
        """
        Instantiate a BrowserBuilder.

        :param cluster_ip: IP to make PAPI queries against
        :param username: PAPI username
        :param password: PAPI password
        :param store_ip: If false cluster IP is not displayed in output
        """
        self.cluster_ip = cluster_ip
        self.username = username
        self.password = password
        self.store_ip = store_ip

    def _get_cluster_info(self):
        info = {}
        try:
            info['release'] = cluster_config.get_release(self.cluster_ip,
                                                         self.username,
                                                         self.password)
        except ApiException as exp:
            logging.warning('Unable to determine OneFS version via SDK')
            info['release'] = UNKNOWN_RELEASE
        if self.store_ip:
            info['host'] = self.cluster_ip
        else:
            info['host'] = None
        return info

    def _get_categories(self, key_dict):
        categorizer = Categorizer()
        categories = categorizer.categorize(key_dict)
        return categories

    def _get_mappings(self, key_dict):
        mappings = {}
        mappings['keys'] = mapper.key_ids(key_dict)
        mappings['categories'] = mapper.category_ids(key_dict)
        return mappings

    def _get_tags(self, key_dict):
        tagger = Tagger()
        tags = tagger.tag_list()
        return tags

    def _get_cluster(self):
        cluster = self._get_cluster_info()
        return cluster

    def _get_dataset(self, key_dict):
        data = {}
        data['categories'] = self._get_categories(key_dict)
        data['mappings'] = self._get_mappings(key_dict)
        data['tags'] = self._get_tags(key_dict)
        data['cluster'] = self._get_cluster()
        data['keys'] = key_dict
        return data

    def _transform_key_dict(self, key_dict):
        tagger = Tagger()
        key_dict = tagger.tag_keys(key_dict)
        search_terms.add_to_dict(key_dict)
        return key_dict

    def _write_key_data_json(self, output_path):
        """
        Write the parsed keys to keys.js for use by js app.

        :returns: The key_dict written to file.
        """
        key_dict = key_collector.get_tagged_squashed_dict(self.cluster_ip,
                                                          self.username,
                                                          self.password)
        key_dict = self._transform_key_dict(key_dict)
        data = self._get_dataset(key_dict)

        with open(output_path, 'w') as keyfile:
            keyfile.write('var keyDict = ' + json.dumps(data, indent=2))
        return data

    def _render_app(self, key_data, output_path):
        jinloader = PackageLoader('stat_key_browser', 'templates')
        jinenviro = Environment(loader=jinloader)
        jintemplate = jinenviro.get_template('app_template.html')
        # pylint: disable=maybe-no-member
        app_html = jintemplate.render(categories=key_data['categories'],
                                      keys=key_data['keys'],
                                      cat_mappings=key_data['mappings']['categories'],
                                      key_mappings=key_data['mappings']['keys'],
                                      tags=key_data['tags'],
                                      cluster=key_data['cluster'])
        logging.info('Writing html to {0}'.format(output_path))
        with open(output_path, 'w') as htmlfile:
            htmlfile.write(app_html)
        return app_html

    def build_browser(self):
        """Kick off the html app generation."""
        html_path = os.path.join(OUTPUT_DIR, HTML_FNAME)
        jskeys_path = os.path.join(OUTPUT_DIR, JS_DIR, JSKEYS_FNAME)
        key_data = self._write_key_data_json(jskeys_path)
        html = self._render_app(key_data, html_path)
