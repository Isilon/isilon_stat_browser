"""Generate key/category to id mappings."""

import hashlib


def _convert_to_id(name):
    """Convert a string to a suitable form for html attributes and ids."""
    hasher = hashlib.md5()
    hasher.update(name.encode('utf-8'))
    return hasher.hexdigest()


def cat_join(*args):
    """Join super, sub, subsub cats into consolidated category name."""
    return '-'.join(args)


def cat_id(category):
    """Return a category ID for a category name."""
    return 'cat_' + _convert_to_id(category)


def key_ids(key_dict, prefix='key_'):
    """Iterate through key_dict and map key names to key IDs."""
    mapping = {}
    for key_name in key_dict:
        mapping[key_name] = prefix + _convert_to_id(key_name)
    return mapping


def category_ids(key_dict):
    """Iterate through key_dict and map category names to category IDs."""
    mapping = {}
    for (key, value) in key_dict.items():
        if 'super' in value and value['super'] is not None:
            supercat = cat_join(value['super'])
            mapping.setdefault(supercat, cat_id(supercat))
            if 'sub' in value and value['sub'] is not None:
                subcat = cat_join(value['super'], value['sub'])
                mapping.setdefault(subcat, cat_id(subcat))
                if 'subsub' in value and value['subsub'] is not None:
                    subsubcat = cat_join(value['super'], value['sub'], value['subsub'])
                    mapping.setdefault(subsubcat, cat_id(subsubcat))
    return mapping
