import unittest
import stat_key_browser.tagger as tagger
from stat_key_browser.tagger import Tagger

class TestTagger(unittest.TestCase):


    def test_dedupe_list_00(self):
        l = [1, 1]
        result = tagger.dedupe_list(l)
        assert result == [1]

    def test_dedupe_list_01(self):
        l = [1]
        result = tagger.dedupe_list(l)
        assert result == [1]

    def test_dedupe_list_02(self):
        l = [1, 2, 1, 2]
        result = tagger.dedupe_list(l)
        assert 1 in result
        assert 2 in result
        assert len(result) == 2

    def test_dedupe_list_03(self):
        l = [1, 2, 3]
        result = tagger.dedupe_list(l)
        assert 1 in result
        assert 2 in result
        assert 3 in result
        assert len(result) == 3

    def test_dedupe_tag_lists_00(self):
        tg = Tagger([])
        result = tg._dedupe_tag_lists({'a': {'tags': ['a', 'a', 'b', 'c']}})
        rtl = result['a']['tags']
        assert 'a' in rtl
        assert 'b' in rtl
        assert 'c' in rtl
        assert len(rtl) == 3

    def test_tag_list_00(self):
        tg = Tagger([{'tags': ['a', 'b', 'c']}, {'tags': ['d', 'e']}])
        result = tg.tag_list()
        assert 'a' in result
        assert 'b' in result
        assert 'c' in result
        assert 'd' in result
        assert 'e' in result
        assert len(result) == 5

    def test_tag_keys_00(self):
        tg = Tagger([{'keys': ['g', 'h'], 'tags': ['a', 'b']}])
        result = tg.tag_keys({'g': {}, 'h': {}, 'i': {}})
        assert 'tags' in result['g']
        assert 'tags' in result['h']
        assert 'tags' not in result['i']
        assert 'a' in result['g']['tags']
        assert 'b' in result['g']['tags']
        assert 'a' in result['h']['tags']
        assert 'b' in result['h']['tags']

    def test_tag_keys_re_00(self):
        tg = Tagger([{'re-keys': ['g', 'h'], 'tags': ['a', 'b']}])
        result = tg.tag_keys({'ogo': {}, 'oho': {}, 'i': {}})
        assert 'tags' in result['ogo']
        assert 'tags' in result['oho']
        assert 'tags' not in result['i']
        assert 'a' in result['ogo']['tags']
        assert 'b' in result['ogo']['tags']
        assert 'a' in result['oho']['tags']
        assert 'b' in result['oho']['tags']

    def test_pop_keys_00(self):
        tg = Tagger([{'re-keys': ['g', 'h'], 'tags': ['a', 'b']}])
        data = {'a': 1, 'b': 2}
        result = tg._pop_keys(data, 'b', 'c')
        assert 'a' in result
        assert len(result) == 1

    def test_get_arb_attrs_00(self):
        tg = Tagger([{'re-keys': ['g', 'h'], 'tags': ['a', 'b']}])

        defin = {'re-keys': ['g', 'h'], 'tags': ['a', 'b']}
        result = tg._get_extra_attrs(defin)
        assert len(result) == 0
        assert result == {}

    def test_get_arb_attrs_01(self):
        tg = Tagger([{'re-keys': ['g', 'h'], 'tags': ['a', 'b']}])

        defin = {'re-keys': ['g', 'h'], 'tags': ['a', 'b'], 'arb': ['arbarb']}
        result = tg._get_extra_attrs(defin)
        assert result == {'arb': 'arbarb'}

    def test_get_arb_attrs_01(self):
        tg = Tagger([{'re-keys': ['g', 'h'], 'tags': ['a', 'b']}])

        defin = {'re-keys': ['g', 'h'], 'tags': ['a', 'b'], 'arb': ['arbarb', 'arbTWO']}
        self.assertRaises(ValueError, tg._get_extra_attrs, defin)
