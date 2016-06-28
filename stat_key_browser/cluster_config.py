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


class ApiException(Exception):
    def __init__(self, msg):
        self.msg = msg

    def __str__(self):
        return repr(self.msg)


def _get_cluster_version(cluster_ip, username, password):
    isi_sdk.configuration.username = username
    isi_sdk.configuration.password = password
    isi_sdk.configuration.verify_ssl = False
    host = 'https://' + cluster_ip + ':8080'
    papi = isi_sdk.ApiClient(host)
    cluster_api = isi_sdk.ClusterApi(papi)
    response = cluster_api.get_cluster_config().to_dict()
    if 'onefs_version' not in response:
        raise ApiException('Could not find onefs_version in API response: {0}'
                           .format(response))
    release = response['onefs_version']['release']
    return release


def get_release(cluster_ip, username, password):
    version = _get_cluster_version(cluster_ip, username, password)
    return version
