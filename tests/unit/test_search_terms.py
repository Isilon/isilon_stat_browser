import unittest
from stat_key_browser.search_terms import list_search_terms, add_to_dict
from stat_key_browser.search_terms import DESCRIPTION, TAGS, KEY
from stat_key_browser.search_terms import XTRA_ATTRS, SEARCH_TERMS

class TestSearchTerms(unittest.TestCase):

    def setUp(self, *args, **kawgs):
        self.keyname = {KEY: 'one.space here.CAPITAL'}
        self.key_desc = {DESCRIPTION: 'A b C'}

        self.tags = ['ap', 'ba', 'ch', 'da']
        self.key_tags = {TAGS: self.tags}

        tags = ['aa' for x in range(6)]
        self.key_tags_dup = {TAGS: tags}

        xtra_attrs = {'attr1': 'value1', 'attr2': 'value2'}
        self.key_xtra_attrs = {XTRA_ATTRS: xtra_attrs}
        print('key_xtra_attrs: {0}'.format(self.key_xtra_attrs))

    def test_search_terms_01_empty(self):
        results = list_search_terms({})
        self.assertEqual(results, [])

    def test_search_terms_02_keyname(self):
        results = list_search_terms(self.keyname)
        self.assertEqual(len(results), 4)
        self.assertIn('one', results)
        self.assertIn('space here', results)
        self.assertIn('capital', results)
        self.assertIn('one.space here.capital', results)


    def test_search_terms_04_description(self):
        data = self.key_desc
        results = list_search_terms(data)
        self.assertEqual(len(results), 3)
        self.assertIn('a', results)
        self.assertIn('b', results)
        self.assertIn('c', results)

    def test_search_terms_05_tags(self):
        data = self.key_tags
        results = list_search_terms(data)
        self.assertEqual(len(results), len(self.tags))
        for tag in self.tags:
            self.assertIn(tag, results)

    def test_search_terms_06_tags_dup(self):
        data = self.key_tags_dup
        results = list_search_terms(data)
        self.assertEqual(len(results), 1)
        self.assertIn('aa', results)

    def test_search_terms_10_xtra_attr(self):
        data = self.key_xtra_attrs
        results = list_search_terms(data)
        self.assertEqual(len(results), 2)
        self.assertIn('value1', results)
        self.assertIn('value2', results)

    def test_search_terms_20_multi(self):
        expected = ['a', 'b', 'c', 'ap', 'ba', 'ch', 'da',
                    'value1', 'value2']
        data = {}
        data.update(self.key_desc)
        data.update(self.key_tags)
        data.update(self.key_xtra_attrs)
        results = list_search_terms(data)
        self.assertEqual(len(results), len(expected),
                         'expected {0} but got {1}'.format(expected, results))
        for expect in expected:
            self.assertIn(expect, results)

    def test_search_terms_30_add_attr(self):
        key_dict = {'key1': self.key_desc}
        add_to_dict(key_dict)
        self.assertTrue(len(key_dict), 1)
        result_key = list(key_dict.values())[0]
        self.assertIn(SEARCH_TERMS, result_key)
        for term in ['a', 'b', 'c']:
            self.assertIn(term, result_key[SEARCH_TERMS])
