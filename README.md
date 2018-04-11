[![Master Build Status](https://travis-ci.org/Isilon/isilon_stat_browser.svg?branch=master)](https://travis-ci.org/Isilon/isilon_stat_browser)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/isilon/isilon_stat_browser.svg)](http://isitmaintained.com/project/isilon/isilon_stat_browser "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/isilon/isilon_stat_browser.svg)](http://isitmaintained.com/project/isilon/isilon_stat_browser "Percentage of issues still open")

# Statistics Key Browser

This repository is part of the Isilon SDK, which is an evolving package of documents and files. This README describes how to use the statistics key browser (stat browser) to browse the statistics keys that an Isilon cluster exposes. The stat browser is a Python script-generated web browser that provides a searchable list of OneFS statistics keys, organized by functional categories.

## Requirements

A compatible web browser:

* Google Chrome
* Firefox
* Safari
* Internet Explorer 11
* Microsoft Edge

## Installation
You can obtain the files for the stat browser by downloading a release zip file from this Github repository:

[isilon\_stat\_browser/releases](../../releases)

## Development

Developers can view the development readme for information about stat browser development.

[isilon\_stat\_browser/README-dev.md](README-dev.md)


## View statistics keys with the stat browser
Once the files and directories in the zip file are extracted, you will see a stat_key_browser directory. Open the web_app/index.html file in a web browser to browse the statistics keys available in the distribution package.

## Generate the stat browser

You can also generate the stat browser from your OneFS cluster by running the build\_stat\_browser.py Python script. You may want to perform this step on your version of OneFS because available statistics keys can vary between OneFS versions, so generating the keys will provide the most accurate list for your implementation. During the generation process, your cluster will be queried for its list of statistc keys to generate the stat browser.

### Requirements
Python: 2.7, 3.3, 3.4, 3.5

Isilon SDK Python Language Bindings installed

### Generating the stat browser

First unpack the zip file as described above and then install the requirements.

`pip install -r requirements.txt`

Next run the page builder:

`./build_stat_browser.py --cluster <hostname-or-ip-address>`

For help on build\_stat\_browser.py usage, run:

`./build_stat_browser.py --help`

The script will prompt you for a username and password, and will create the browsable web\_app/index.html page and key\_cats.json Java script which contains the statistics keys categories.

## Install SDK Python language bindings

You can use the SDK Python language bindings to automate the configuration, maintenance, and monitoring of your Isilon cluster. For information on how to install the Python language bindings and write Python scripts to access the OneFS API, refer to the following Github sites:

[`https://github.com/Isilon/isilon_sdk_7_2_python`](https://github.com/Isilon/isilon_sdk_7_2_python)
[`https://github.com/Isilon/isilon_sdk_8_0_python`](https://github.com/Isilon/isilon_sdk_8_0_python)


Copyright (c) 2016 EMC Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
