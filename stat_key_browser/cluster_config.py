import logging
import sys
try:
    import isi_sdk
except ImportError as err:
    print('Unable to import isi_sdk. Please install the Isilon SDK.')
    print('See https://github.com/isilon')
    print(err)
    sys.exit(1)


class ApiException(Exception):
    def __init__(self, msg):
        self.msg = msg

    def __str__(self):
        return repr(self.msg)

def _get_cluster_versions(cluster_ip, username, password):
    isi_sdk.configuration.username = username
    isi_sdk.configuration.password = password
    isi_sdk.configuration.verify_ssl = False
    host = 'https://' + cluster_ip + ':8080'
    papi = isi_sdk.ApiClient(host)
    cluster_api = isi_sdk.ClusterApi(papi)
    response = cluster_api.get_cluster_version().to_dict()
    if 'nodes' not in response:
        raise ApiException('Could not find nodes in API response: {0}'
                           .format(response))
    versions = [v['release'] for v in response['nodes']]
    return [x for x in set(versions)]


def get_release(cluster_ip, username, password):
    versions = _get_cluster_versions(cluster_ip, username, password)
    if len(versions) > 1:
        logging.error('Cluster is running mixed OneFS versions: {0}'
                      .format(versions))
    return versions[0]
