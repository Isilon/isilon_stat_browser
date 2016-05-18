"""
Provide access to the category definitions and utilities.

Reads and parses into a dict the json category def file. Provides access to this dict.
Takes a key_dict and applies category attributes per the tag definitions.
"""
import logging
import json
import os
import re
import sys
import stat_key_browser

CAT_TAG_DEFS_FILENAME = 'key_cats.json'
DEFAULT_CATEGORY = 'Uncategorized'
DEFAULT_CAT_DESC = 'Statistics that have not been assigned a category.'



class Categorizer(object):
    """Categorizer object."""

    def __init__(self, defs=None):
        """Instantiate a Categorizer."""
        self.default_category = DEFAULT_CATEGORY
        if defs is None:
            def_path = self._get_defs_path()
            try:
                with open(def_path, 'r') as def_file:
                    defs = json.load(def_file)
            except IOError as err:
                logging.error('Unable to open {0}: {1}'.format(def_path, err))
                logging.error("Try running 'make tags' to create the categories file")
                sys.exit(1)
        self.validate_defs(defs)
        self.cat_defs = self._flatten_uni_attrs(defs)

    def _get_defs_path(self):
        """Return path to category definitions file."""
        basedir = stat_key_browser.__path__[0]
        defs_path = os.path.join(basedir, 'data', CAT_TAG_DEFS_FILENAME)
        return defs_path

    def _flatten_uni_attrs(self, defins):
        """
        Flatten the super, sub, subsub, description lists into strings.
        """
        for defin in defins:
            defin['super'] = defin['super'][0]
            if 'sub' in defin:
                defin['sub'] = defin['sub'][0]
            if 'subsub' in defin:
                defin['subsub'] = defin['subsub'][0]
            if 'category description' in defin:
                defin['category description'] = defin['category description'][0]
        return defins

    def validate_defs(self, defins):
        """
        Check a cat definitions list for proper structure.

        Each defnitition:
         - must only have attrs in the valid attrs list
         - must have one super attr
         - may have zero or one sub attr
         - should have a category_description attr
        """
        errors = []
        valid_attrs = ['super', 'sub', 'subsub', 'keys', 're-keys', 'category description']
        for defin in defins:
            for key in defin:
                if key not in valid_attrs:
                    raise ValueError('Key "{0}" is not a valid category definition attr in {1}'.format(key, defin))
            if 'super' not in defin:
                raise ValueError ('Attr "super" must be defined when attr "sub" is defined in {0}'.format(defin))
            if len(defin['super']) != 1:
                raise ValueError('{0} is illegal. Only 1 "super" category is '
                                 'allowed in definition {1}'.format(defin['super'], defin))
            if 'sub' in defin:
                if len(defin['sub']) != 1:
                    raise ValueError('{0} is illegal. Only 1 "sub" category is '
                                  'allowed in definition {1}'.format(defin['sub'], defin))
            if 'subsub' in defin:
                if len(defin['subsub']) != 1:
                    raise ValueError('{0} is illegal. Only 1 "subsub" category is '
                                  'allowed in definition {1}'.format(defin['subsub'], defin))

    def get_categories_list(self):
        """Return a list of category names."""
        cats = []
        for defin in self.cat_defs:
            if defin['super'] not in cats:
                cats.append(defin['super'])
            if 'sub' in defin:
                if defin['sub'] not in cats:
                    cats.append(defin['sub'])
        return cats

    def _insert_keys(self, key_dict, cat_dict):
        """Insert keys into cat_dict according to key and re-key attrs."""
        for (key, data) in key_dict.items():
            supercat = data['super']
            subcat = None if not 'sub' in data else data['sub']
            subsubcat = None if not 'subsub' in data else data['subsub']
            if subcat is None:
                cat_dict[supercat]['keys'].append(key)
            elif subsubcat is None:
                cat_dict[supercat]['categories'][subcat]['keys'].append(key)
            else:
                cat_dict[supercat]['categories'][subcat]['categories'][subsubcat]['keys'].append(key)
        return cat_dict

    def categorize(self, key_dict):
        """
        Add super and sub category tags to key_dict and return a cat_dict.

        See design/data_formats/cat_dict.json
        """
        # Need to apply super and sub attrs to key_dict
        key_dict = self._apply_categories(key_dict)
        cat_dict = {}
        for defin in self.cat_defs:
            supercat = defin['super']
            cat_dict.setdefault(supercat, {})
            cat_dict[supercat].setdefault('categories', {})
            cat_dict[supercat].setdefault('keys', [])
            if 'category description' in defin and 'sub' not in defin:
                cat_dict[supercat]['description'] = defin['category description']
            if 'sub' in defin:
                subcat = defin['sub']
                cat_dict[supercat]['categories'].setdefault(subcat, {})
                cat_dict[supercat]['categories'][subcat].setdefault('categories', {})
                cat_dict[supercat]['categories'][subcat].setdefault('keys', [])
                if 'category description' in defin and 'subsub' not in defin:
                    cat_dict[supercat]['categories'][subcat]['description'] = \
                        defin['category description']
                if 'subsub' in defin:
                    subsubcat = defin['subsub']
                    basesub = cat_dict[supercat]['categories'][subcat]
                    basesub['categories'].setdefault(subsubcat, {})
                    basesub['categories'][subsubcat].setdefault('categories', {})
                    basesub['categories'][subsubcat].setdefault('keys', [])
                    if 'category description' in defin:
                        basesub['categories'][subsubcat]['description'] = \
                            defin['category description']
        # Special setup for default (uncategorized)
        cat_dict[DEFAULT_CATEGORY] = {}
        cat_dict[DEFAULT_CATEGORY]['categories'] = {}
        cat_dict[DEFAULT_CATEGORY]['keys'] = []
        cat_dict[DEFAULT_CATEGORY]['description'] = DEFAULT_CAT_DESC
        cat_dict_n_keys = self._insert_keys(key_dict, cat_dict)
        return cat_dict_n_keys

    def _match_key_to_cat(self, key):
        # If no match is found, these serve as defaults
        supercat = DEFAULT_CATEGORY
        subcat = None
        subsubcat = None

        for defin in self.cat_defs:
            # Check for exact matches
            if 'keys' in defin:
                if key in defin['keys']:
                    supercat = defin['super']
                    if 'sub' in defin:
                        subcat = defin['sub']
                        if 'subsub' in defin:
                            subsubcat = defin['subsub']
                    # Use the first match we find
                    return (supercat, subcat, subsubcat)
            # Check for regex matches
            if 're-keys' in defin:
                for re_key in defin['re-keys']:
                    if re.search(re_key, key):
                        supercat = defin['super']
                        if 'sub' in defin:
                            subcat = defin['sub']
                            if 'subsub' in defin:
                                subsubcat = defin['subsub']
                        return (supercat, subcat, subsubcat)
        return (supercat, subcat, subsubcat)

    def _apply_categories(self, key_dict):
        """Apply super and sub category attributes to keys in a key_dict."""
        for (key, data) in key_dict.items():
            (supercat, subcat, subsubcat) = self._match_key_to_cat(key)
            data['super'] = supercat
            data['sub'] = subcat
            data['subsub'] = subsubcat
        return key_dict
