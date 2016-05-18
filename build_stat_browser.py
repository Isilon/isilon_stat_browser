#! /usr/bin/env python

"""
Connects to PAPI to download list of current keys.

Outputs an html app that provides an interface to browse stat keys.
"""

from builtins import input
import getpass
import logging
import sys
from optparse import OptionParser
import urllib3
from stat_key_browser.browser_builder import BrowserBuilder


def get_parser():
    """Return a parser to parse CLI args."""
    parser = OptionParser()
    parser.add_option('-c', '--cluster', dest='cluster', type='string',
                      help='Cluster IP or hostname')
    parser.add_option('-u', '--user', dest='username', type='string',
                      help='Username to authenticate to PAPI or omit for prompt')
    parser.add_option('-p', '--password', dest='password', type='string',
                      help='Password to authenticate to PAPI or omit for prompt')
    parser.add_option('-l', '--log', dest='logfile', type='string',
                      help='Log to a file instead of STDERR')
    parser.add_option('-x', '--anon-ip', action='store_true', dest='anon_ip',
                      default=False, help='Do not store cluster IP in output')
    parser.add_option('--debug', action='store_true', dest='debug', default=False)
    return parser


def build_browser():
    """Parse opts and run a BrowerBuilder."""
    parser = get_parser()
    (opts, args) = parser.parse_args()

    if opts.cluster is None:
        opts.cluster = input('Cluster IP or hostname: ')

    if opts.debug:
        log_lvl = logging.DEBUG
        logging.getLogger("urllib3").setLevel(logging.INFO)
    else:
        log_lvl = logging.INFO
        logging.getLogger("urllib3").setLevel(logging.WARNING)
    if opts.logfile:
        logging.basicConfig(level=log_lvl, datefmt='%Y-%m-%dT%H:%M:%S',
                            format='%(asctime)s [%(levelname)s] %(message)s',
                            filename=opts.logfile)
    else:
        logging.basicConfig(level=log_lvl, datefmt='%Y-%m-%dT%H:%M:%S',
                            format='%(asctime)s [%(levelname)s] %(message)s')

    if not opts.username:
        opts.username = input('Cluster username: ')
    if not opts.password:
        opts.password = getpass.getpass()
    store_ip = not opts.anon_ip
    bb = BrowserBuilder(opts.cluster, opts.username, opts.password, store_ip)
    bb.build_browser()


if __name__ == '__main__':
    urllib3.disable_warnings()
    build_browser()
