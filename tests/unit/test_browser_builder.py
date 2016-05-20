from mock import patch
import stat_key_browser.browser_builder as browser_builder
from stat_key_browser.browser_builder import BrowserBuilder
import stat_key_browser.cluster_config as cluster_config


class TestBrowserBuilder(object):

    @patch('stat_key_browser.cluster_config.get_release')
    def test_bb_01_cluster_info_false(self, get_release):
        get_release.return_value('5.5')
        bb = BrowserBuilder('1.2.3.4', 'u', 'p', False)
        results = bb._get_cluster_info()
        assert results['host'] is None

    @patch('stat_key_browser.cluster_config.get_release')
    def test_bb_01_cluster_info_true(self, get_release):
        get_release.return_value('5.5')
        bb = BrowserBuilder('1.2.3.4', 'u', 'p', True)
        results = bb._get_cluster_info()
        assert results['host'] == '1.2.3.4'

    @patch('stat_key_browser.cluster_config.get_release')
    def test_bb_02_cluster_info_bug_169014(self, get_release):
        get_release.side_effect = cluster_config.ApiException('test')
        ip = '1.2.3.4'
        bb = BrowserBuilder(ip, 'u', 'p', True)
        results = bb._get_cluster_info()
        assert results['release'] == browser_builder.UNKNOWN_RELEASE
        assert results['host'] == ip
