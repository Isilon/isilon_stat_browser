from stat_key_browser.categorizer import Categorizer
import pytest

class TestCategorizer(object):

    @pytest.fixture
    def cat(self):
        """Return a new Categorizer."""

        # Has 3 definitions, 4 categories
        cat_defs_3 = [
                    {
                    "category description": [
                      "Power sensor information."
                    ],
                    "super": [
                      "Sensors"
                    ],
                    "sub": [
                      "Power"
                    ],
                    "re-keys": [
                      "^node.sensor.power"
                    ]
                    },
                    {
                    "category description": [
                      "Walrus sensor information."
                    ],
                    "super": [
                      "Walruses"
                    ],
                    "sub": [
                      "Tusks"
                    ],
                    "keys": [
                      "^node.sensor.walrus.tusk"
                    ]
                    },
                    {
                    "category description": [
                      "Altitude sensor information (if node so equipped)."
                    ],
                    "super": [
                      "Sensors"
                    ],
                    "sub": [
                      "Power"
                    ],
                    "subsub": [
                      "A"
                    ],
                    "re-keys": [
                      "^node.sensor.altitude"
                    ],
                    "keys": [
                      "node.sensor.power.A"
                    ]
                    },
                    {
                    "keys": [
                    "node.protostats.smb1",
                    "node.protostats.smb2"
                    ],
                    "category description": [
                    "Per protocol performance"
                    ],
                    "super": [
                    "Protocols"
                    ]
                    }
                   ]
        return cat_defs_3

    @pytest.fixture
    def key_dict(self):
        """Return a key_dict."""
        key_dict_3= {
                        "node.sensor.power.A": {},
                        "node.sensor.power.B": {},
                        "node.sensor.altitude.A": {},
                        "node.sensor.altitude.B": {},
                        "node.protostats.smb1": {},
                        "node.protostats.smb2": {},
                        "node.protostats.smb3": {},
                        "node.sensor.walrus.tusk": {}
                    }
        return key_dict_3


    def assert_is_string(self, subject):
        assert isinstance(subject, (str, unicode))


    def test_categorizer_init_00(self, cat):
        categorizer = Categorizer(cat)
        assert len(categorizer.cat_defs) == len(cat)
        for defin in categorizer.cat_defs:
            assert defin['super'] is not None
            if 'sub' in defin:
                assert defin['sub'] is not None

    def test_validate_defs_00(self):
        Categorizer([{'super': ['a']}])

    def test_validate_defs_01(self):
        with pytest.raises(ValueError):
            Categorizer([{'badkey': None, 'super': ['a']}])

    def test_validate_defs_02(self):
        with pytest.raises(ValueError):
            Categorizer([{'super': ['a', 'b']}])

    def test_validate_defs_03(self):
        with pytest.raises(ValueError):
            Categorizer([{'sub': ['a']}])

    def test_validate_defs_04(self):
        with pytest.raises(ValueError):
            Categorizer([{'super': 'a', 'sub': ['a', 'b']}])

    def test_defs_path(self, cat):
        categorizer = Categorizer(cat)
        results = categorizer._get_defs_path()
        assert(results is not None)


    def test_categories_list_00(self, cat):
        categorizer = Categorizer(cat)
        expected = ['Power', 'Sensors', 'Protocols', 'Walruses', 'Tusks']
        results = categorizer.get_categories_list()
        assert len(results) == len(expected)
        for cat in results:
            assert cat in expected
        for exp in expected:
            assert exp in results

    def test_categories_dict(self, cat, key_dict):
        categorizer = Categorizer(cat)
        expected_supers = ['Sensors', 'Protocols', 'Walruses', categorizer.default_category]
        expected_subs = ['Power', 'Altitude', 'Tusks']
        expected_subsubs = ['A']
        results = categorizer.categorize(key_dict)
        for res_super in results.values():
            # Each super category should have categories and keys
            assert 'categories' in res_super
            assert 'keys' in res_super
            for res_sub in res_super['categories'].values():
                # Each sub should have categories and keys
                assert 'categories' in res_sub
                assert 'keys' in res_sub
                # Sub cats should be as expected
                for sub_cat in res_sub['categories']:
                    assert sub_cat in expected_subsubs
                for subsub_cat in res_sub['categories'].values():
                    assert 'keys' in subsub_cat
                    assert subsub_cat['keys'] is not None
                for subsub_cat in res_sub['categories']:
                    assert subsub_cat in expected_subsubs
        for super_cat in results:
            assert super_cat in expected_supers
        for expected_super in expected_supers:
            assert expected_super in results
        assert 'Sensors' in results
        assert 'Power' in results['Sensors']['categories']
        assert 'A' in results['Sensors']['categories']['Power']['categories']
