"""
Provide access to the tag definitions and utilities.

Reads and parses into a dict the json tag def file. Provides access to this dict.
Takes a key_dict and applies tags per the tag definations.
"""
import logging
import json
import os
import re
import sys
import stat_key_browser

KEY_TAG_DEFS_FILENAME = 'key_tags.json'
EXTRA_ATTRS = 'xtra_attrs'

def dedupe_list(l):
    s = set(l)
    deduped_l = [x for x in s]
    return deduped_l


class Tagger(object):
    def __init__(self, defs=None):
        if defs is None:
            def_path = self.get_defs_path()
            try:
                with open(def_path, 'r') as def_file:
                    defs = json.load(def_file)
            except IOError as err:
                logging.error('Unable to open {0}: {1}'.format(def_path, err))
                logging.error("Try running 'make tags' to create the tag file")
                sys.exit(1)
        self.tag_defs = defs

    def _add_tags(self, key, tags):
        key.setdefault('tags', [])
        key['tags'] += tags

    def _dedupe_tag_lists(self, key_dict):
        for data in key_dict.values():
            if 'tags' in data:
                data['tags'] = dedupe_list(data['tags'])
        return key_dict

    def _pop_keys(self, dictionary, *args):
        di = dictionary.copy()
        for key in args:
            try:
                di.pop(key)
            except KeyError:
                pass
        return di

    def _get_extra_attrs(self, defin):
        arb_attrs = self._pop_keys(defin.copy(), 'keys', 're-keys', 'tags')
        for (extra_attr, val) in arb_attrs.items():
            if len(val) != 1:
                msg = 'Extra attibute must have a single value. {0} has value {1}'
                raise ValueError(msg.format(extra_attr, val))
        return arb_attrs

    def _add_extra_attrs(self, key, extra_attrs):
        """Add extra attrs to a key."""
        for (attr_name, val) in extra_attrs.items():
            key.setdefault(EXTRA_ATTRS, {})
            key[EXTRA_ATTRS][attr_name] = '\n'.join(val)

    def get_defs_path(self):
        """Return path to tag definitions file."""
        basedir = stat_key_browser.__path__[0]
        defs_path = os.path.join(basedir, 'data', KEY_TAG_DEFS_FILENAME)
        logging.debug('Expect key tag definitions at ', path=defs_path)
        return defs_path

    def tag_list(self):
        """Return a list of all the tags that appear in the definations."""
        tags = []
        for defin in self.tag_defs:
            tags += defin['tags']
        tags = dedupe_list(tags)
        tags.sort()
        return tags

    def tag_keys(self, key_dict):
        """Apply tags to keys in key_dict."""
        for defin in self.tag_defs:
            extra_attrs = self._get_extra_attrs(defin)
            for key in defin.get('keys', []):
                self._add_tags(key_dict[key], defin['tags'])
                self._add_extra_attrs(key_dict[key], extra_attrs)
            if 're-keys' in defin:
                for (key, data) in key_dict.items():
                    for re_key in defin['re-keys']:
                        if re.search(re_key, key):
                            self._add_tags(data, defin['tags'])
                            self._add_extra_attrs(key_dict[key], extra_attrs)
        # Fix multiply matching keys that have duplicated tags.
        key_dict = self._dedupe_tag_lists(key_dict)
        return key_dict
