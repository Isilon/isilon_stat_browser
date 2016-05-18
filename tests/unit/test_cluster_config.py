import logging
from mock import patch
import pytest
import stat_key_browser.cluster_config as cluster_config

class TestClusterConfig(object):

    @patch('stat_key_browser.cluster_config._get_cluster_version')
    def test_0_get_cluster_release(self, get_cluster_version):
        get_cluster_version.return_value = '2.0'
        results = cluster_config.get_release('4.3.2.1', 'u', 'p')
        assert results == '2.0'

    @patch('stat_key_browser.cluster_config._get_cluster_version')
    def test_0_get_cluster_release(self, get_cluster_version):
        get_cluster_version.return_value = '1.0'
        results = cluster_config.get_release('4.3.2.1', 'u', 'p')
        assert results == '1.0'


    @patch('isi_sdk.ClusterApi.get_cluster_config')
    def test_1_get_cluster_version(self, cluster_vers):
        canned = {'onefs_version': {'release': '1.0'}}
        response = MockClusterVersionResponse(canned)
        cluster_vers.return_value = response
        results = cluster_config._get_cluster_version('4.3.2.1', 'u', 'p')
        assert results == '1.0'

    @patch('isi_sdk.ClusterApi.get_cluster_config')
    def test_3_get_cluster_versions_bug_169014(self, cluster_vers):
        response = MockClusterVersionResponse({})
        cluster_vers.return_value = response
        with pytest.raises(cluster_config.ApiException):
            cluster_config._get_cluster_version('4.3.2.1', 'u', 'p')



class MockClusterVersionResponse(object):
    def __init__(self, response):
        self.response = response

    def to_dict(self):
        return self.response
