"""
Query the cluster for keys and parse.

Queries the cluster via PAPI for the list of stat keys. Conversts the key_list
to a key_dict, squashes indexed keys.
"""

import re
import logging
import sys
try:
    import isi_sdk_7_2 as isi_sdk
except ImportError as err:
    try:
        # Try the original SDK library name
        import isi_sdk
    except ImportError as err:
        print('Unable to import isi_sdk_7_2. Please install the Isilon SDK.')
        print('See https://github.com/isilon')
        print(err)
        sys.exit(1)

PRIMARY = 0


def _basename(key):
    """
    Return the base name of a key name.

    a.b.c.1 -> a.b.c
    a.b.c -> a.b
    """
    return '.'.join(key.split('.')[:-1])


def _get_indexed_key_names(key_dict):
    indexed_key_names = [k for k in key_dict if re.match(r'^.*\.[0-9]+$', k)]
    return indexed_key_names


def _squash_description(desc):
    if re.search('[0-9]+$', desc):
        return re.sub('[0-9]+$', 'N', desc)
    if re.search('index [0-9]+', desc):
        return re.sub('index [0-9]+', 'index N', desc)
    if re.search('number [0-9]+', desc):
        return re.sub('number [0-9]+', 'number N', desc)
    # If we made it here, we don't know how to squash it so just return the original
    logging.warning('Did not know how to squash description: {0}'.format(desc))
    return desc


def _squash_keys(key_dict):
    """Squash indexed keys to .N."""
    indexed_key_names = _get_indexed_key_names(key_dict)
    indexed_key_bases = {_basename(k): key_dict.pop(k) for k in indexed_key_names}
    squashed_keys = {k + '.N': indexed_key_bases[k] for k in indexed_key_bases}
    for k in squashed_keys:
        key_dict[k] = squashed_keys[k]
        if 'key' in key_dict[k]:
            # If it has a key name inside squash it too
            key_dict[k]['key'] = k
        if 'description' in key_dict[k]:
            key_dict[k]['description'] = _squash_description(key_dict[k]['description'])
    return key_dict


def deabbreviate(key_dict):
    """De-abbreviate key values."""
    deabbreviations = {'aggregation_type':
                       {'avg': 'average',
                        'max': 'maximum',
                        'min': 'minimum'}}
    for key in key_dict.values():
        for (field, mappings) in deabbreviations.items():
            if field in key:
                if key[field] in mappings:
                    key[field] = mappings[key[field]]



def _key_list_to_dict(key_list):
    """Convert list of keys to dict keyed by stat key name."""
    key_dict = {}
    for key in key_list:
        key_name = key['key']
        key_dict[key_name] = key
    return key_dict


def _get_key_list(cluster_ip, username, password):
    """Query the cluster for keys and return as a list of keys."""
    isi_sdk.configuration.username = username
    isi_sdk.configuration.password = password
    isi_sdk.configuration.verify_ssl = False
    host = 'https://' + cluster_ip + ':8080'
    papi = isi_sdk.ApiClient(host)
    statistics = isi_sdk.StatisticsApi(papi)
    logging.debug('Querying cluster for stat key list')
    key_list = statistics.get_statistics_keys().to_dict()['keys']
    return key_list


def _get_key_dict(cluster_ip, username, password):
    """
    Query the cluster for keys and return as a dict.

    Each stat key name is a key, and the value is a dict containing the key's
    info.
    """
    key_list = _get_key_list(cluster_ip, username, password)
    key_dict = _key_list_to_dict(key_list)
    return key_dict


def get_tagged_squashed_dict(cluster_ip, username, password):
    """
    Query the cluster for keys and returns squashed keys as dict..

    Each stat key name is a key, and the value is a dict containing the key's
    info. Indexed keys are squashed to .N.
    """
    key_dict = _get_key_dict(cluster_ip, username, password)
    squashed_dict = _squash_keys(key_dict)
    deabbreviate(key_dict)

    return squashed_dict
