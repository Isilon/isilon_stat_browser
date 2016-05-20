import stat_key_browser.mapper as mapper

class TestKeyMapper(object):

    def test_key_ids_00(self):
        key_dict = {'a': 1, 'b': 2, 'c': 3}
        results = mapper.key_ids(key_dict)
        assert(len(results) == len(key_dict))
        for key in key_dict:
            assert(key in results)
        assert(results['a'] != results['b'])
        assert(results['a'] != results['c'])
        assert(results['b'] != results['c'])

    def test_key_ids_01(self):
        key_dict = {'a b.c': 1}
        results = mapper.key_ids(key_dict)
        assert(' ' not in results['a b.c'])
        assert('.' not in results['a b.c'])

    def test_cat_ids_00(self):
        key_dict = {'a': {'super': 'cat1', 'sub': 'cat2', 'subsub': 'cat3'}}
        results = mapper.category_ids(key_dict)
        assert('cat1' in results)
        assert('cat1-cat2' in results)
        assert('cat1-cat2-cat3' in results)
        assert('a' not in results)
        assert(results['cat1'] is not None)
        assert(results['cat1-cat2'] != results['cat1'])
        assert(results['cat1-cat2-cat3'] != results['cat1'])
        assert(results['cat1-cat2-cat3'] != results['cat1-cat2'])

    def test_cat_ids_01(self):
        key_dict = {'a': {'super': 'cat1'}}
        results = mapper.category_ids(key_dict)
        assert('cat1' in results)
