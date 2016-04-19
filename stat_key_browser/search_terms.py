KEY = 'key'
DESCRIPTION = 'description'
TAGS = 'tags'
XTRA_ATTRS = 'xtra_attrs'
SEARCH_TERMS = 'search_terms'


def list_search_terms(key):
    '''Given a stat key, returns a list of search terms.'''
    terms = []
    if KEY in key:
        terms += key[KEY].lower().split('.')
        terms.append(key[KEY].lower())
    if DESCRIPTION in key:
        terms += key[DESCRIPTION].lower().split(' ')
    if TAGS in key:
        terms += [tag.lower() for tag in key[TAGS]]
    if XTRA_ATTRS in key:
        for attr in key[XTRA_ATTRS].values():
            terms += attr.lower().split(' ')
    # dedupe the terms
    terms = [x for x in set(terms)]
    return terms

def add_to_dict(key_dict):
    '''Add search terms attr to keys in dict.'''
    for key in key_dict.values():
        search_terms = list_search_terms(key)
        key[SEARCH_TERMS] = search_terms
