from mock import patch
import isi_sdk
import unittest
import stat_key_browser.key_collector as key_collector


class TestKeyCollector(unittest.TestCase):

    def test_key_list_to_dict(self):
        as_list = [{'key': 'keyname', 'data': 'stuff'}]
        as_dict = key_collector._key_list_to_dict(as_list)
        assert(as_dict['keyname'] == {'key': 'keyname', 'data': 'stuff'})

    def test_squash_keys_1(self):
        keys = {'a.a': {}, 'a.b': {}, 'a.1': {}, 'a.2': {}, 'c.1.a': {}}
        expected = {'a.a': {}, 'a.b': {}, 'a.N': {}, 'c.1.a': {}}
        results = key_collector._squash_keys(keys)
        assert(results == expected)

    def test_squash_keys_2(self):
        keys = {'a.a': {}, 'a.b': {}, 'a.1': {}, 'a.2': {}, 'c.1.a': {},
                'a.4': {}, 'a.9999999': {}}
        expected = {'a.a': {}, 'a.b': {}, 'a.N': {}, 'c.1.a': {}}
        results = key_collector._squash_keys(keys)
        assert(results == expected)

    def test_squash_keys_desc_1(self):
        keys = {'a.a': {}, 'a.1': {'key': 'a.1', 'description': 'index 1'}, 'a.2': {'key': 'a.2', 'description': 'index 2'}}
        expected = {'a.a': {}, 'a.N': {'key': 'a.N', 'description': 'index N'}}
        results = key_collector._squash_keys(keys)
        assert(results == expected)

    def test_get_indexed_key_names(self):
        keys = {'a.a': {}, 'a.b': {}, 'a.1': {}, 'a.2': {}, 'c.1.a': {}}
        expected = ['a.1', 'a.2']
        results = key_collector._get_indexed_key_names(keys)
        assert(results.sort() == expected.sort())

    def test_basename_1(self):
        assert('a.b.c' == key_collector._basename('a.b.c.1'))

    def test_basename_2(self):
        assert('a.b' == key_collector._basename('a.b.c'))

    def test_basename_3(self):
        assert('a' == key_collector._basename('a.b'))

    def test_basename_4(self):
        assert('' == key_collector._basename('a'))

    def test_basename_5(self):
        assert('a!,___' == key_collector._basename('a!,___.!!$#'))

    def test_squash_description_1(self):
        desc = 'Input transfers per second for disk with index 10'
        expected = 'Input transfers per second for disk with index N'
        results = key_collector._squash_description(desc)
        assert(results == expected)

    def test_squash_description_2(self):
        desc = 'Input errors per second for interface 15'
        expected = 'Input errors per second for interface N'
        results = key_collector._squash_description(desc)
        assert(results == expected)

    def test_squash_description_3(self):
        desc = 'no: of read accesses in bin 4 44'
        expected = 'no: of read accesses in bin 4 N'
        results = key_collector._squash_description(desc)
        assert(results == expected)

    def test_squash_description_4(self):
        desc = 'Reading in Celsius of temperature sensor number 25'
        expected = 'Reading in Celsius of temperature sensor number N'
        results = key_collector._squash_description(desc)
        assert(results == expected)

    def test_squash_description_5(self):
        desc = 'missing stat'
        expected = 'missing stat'
        results = key_collector._squash_description(desc)
        assert(results == expected)

    def test_squash_description_6(self):
        desc = 'True if interface number 10 is internal'
        expected = 'True if interface number N is internal'
        results = key_collector._squash_description(desc)
        assert(results == expected)

    def test_squash_description_7(self):
        desc = 'Status of battery with index 1. 0 = Unknown, 1 = Unable to communicate with battery charger, 2 = Charger unable to operate, 3 = Battery pack disconnected, 4 = Charge paused due to temperature error, 5 = Charge C/10 paused due to temperature error, 6 = Good, 7 = Battery unable to accept charge, 8 = Battery charging normally, 9 = Good, 10 = Good, 11 = Battery charge circuit shutdown, 12 = Good, 13 = Battery tray removed, 14 = Battery failed, 15 = Battery overcharged'
        expected = 'Status of battery with index N. 0 = Unknown, 1 = Unable to communicate with battery charger, 2 = Charger unable to operate, 3 = Battery pack disconnected, 4 = Charge paused due to temperature error, 5 = Charge C/10 paused due to temperature error, 6 = Good, 7 = Battery unable to accept charge, 8 = Battery charging normally, 9 = Good, 10 = Good, 11 = Battery charge circuit shutdown, 12 = Good, 13 = Battery tray removed, 14 = Battery failed, 15 = Battery overcharged'
        results = key_collector._squash_description(desc)
        assert(results == expected)

    def test_deabbreviate_1(self):
        key_dict = {'a': {'aggregation_type': 'avg'}}
        key_collector.deabbreviate(key_dict)
        self.assertEqual('average', key_dict['a']['aggregation_type'])

    def test_deabbreviate_2(self):
        key_dict = {'a': {'aggregation_type': 'max'}}
        key_collector.deabbreviate(key_dict)
        self.assertEqual('maximum', key_dict['a']['aggregation_type'])

    def test_deabbreviate_3(self):
        key_dict = {'a': {'key': 'max'}}
        key_collector.deabbreviate(key_dict)
        self.assertEqual('max', key_dict['a']['key'])

    @patch('stat_key_browser.key_collector._get_key_list')
    def test_get_key_dict_1(self, mock_method):
        mock_method.return_value = [{'key': 'a.a'}]
        result = key_collector._get_key_dict('testing123', 'user1', 'pass1')
        assert 'a.a' in result
        mock_method.assert_called_with('testing123', 'user1', 'pass1')

    @patch.object(isi_sdk, 'ApiClient')
    def test_get_key_list_1(self, mock_method):
        key_collector._get_key_list('testing123', 'user', 'pass')
        mock_method.assert_called_with('https://testing123:8080')

    @patch('stat_key_browser.key_collector._get_key_dict')
    def test_get_tagged_squashed(self, mock_method):
        mock_method.return_value = {'a.a': {}, 'a.b': {}}
        results = key_collector.get_tagged_squashed_dict('testing123', 'user1',
                                                         'pass1')
        assert 'a.a' in results
        assert 'a.b' in results
        mock_method.assert_called_with('testing123', 'user1', 'pass1')
