[![Master Build Status](https://travis-ci.org/Isilon/isilon_stat_browser.svg?branch=master)](https://travis-ci.org/Isilon/isilon_stat_browser)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/isilon/isilon_stat_browser.svg)](http://isitmaintained.com/project/isilon/isilon_stat_browser "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/isilon/isilon_stat_browser.svg)](http://isitmaintained.com/project/isilon/isilon_stat_browser "Percentage of issues still open")

#stat-key-browser

A single page web app that provides a browsable, searchable view of Isilon statistics keys. A Python script generates the html by querying an Isilon cluster for the list of statistics keys, then organizing and categorizing the keys before outputting the html app to web_app.

##requirements
Python: 2.7, 3.3, 3.4, 3.5

Dependencies listed in requirements-dev.txt

Isilon SDK Python language bindings

[`https://github.com/isilon/`](https://github.com/isilon)

##Development getting started

###Clone this repo:

`git clone <repo>`

`cd isilon_stat_browser`

### Install the dependencies:

`pip install -r requirements-dev.txt`

### Build the html and js output in ./webapp:

`./build_stat_browser`

### Build a distributable zip file:
The build will pause to request cluster IP, username and password.

`make dist`

### Build a distributable zip file non-interactively:

Supply the cluster IP, username and password when building via automation.

`make dist BUILD_BROWSER_ARGS='-c <cluster IP> -u <username> -p <password>'`

### Run unit tests:

`make unittests`

### Run functional tests:
The functional tests are only a stub currently.

`make functional_tests`

###Run the page building tool

`./build_stat_browser.py -c <cluster IP>`

# Release process

**Note:**
This is a temporary manual process to be used by repo owners to cut a release until automated build/release is implemented.


Once the master branch is in a state ready for a release, tag the current commit
with a version number.

`git tag -a v0.0.1 -m 'version 0.0.1'`

Push the tag to git

`git push origin v0.0.1`

This creates a release in [isilon\_stat\_browser/releases](../../releases)

Create the distribution for release

`make dist BUILD_BROWSER_ARGS='-c <cluster IP> -u <username> -p <password>'`

This creates a .zip file in the top-level project directory. The file will be
automatically named with the version specified in the tag. If no version number
appears in the file name something has gone wrong.

Go to [isilon\_stat\_browser/releases](../../releases) and draft a new release.
Enter the tag into the tag version box and the tag should be recognized as an
existing tag.

Enter any needed release notes

Attach the zipped release distribution to the release.

Publish the release.

# Files

* `README-dev.md`

The developer facing readme that you are reading now.

* `README.md`

The user-facing readme that gets packaged into the distributable zip.

* `stat_key_browser/data/key_cats.hexa`

A human written and readable file that defines which categories and subcategories are to be applied to lists of key names. Parsed into json by hexaparse.py during `make tags`.

* `stat_key_browser/data/key_cats.json`:

The automatically generated JSON that results when hexaparse.py parses key\_cats.hexa during the build process. This file is referenced by build\_stat\_browser.py to categorize stat keys received from PAPI.

* `stat_key_browser/data/key_tags.hexa`

A human written and readable file that defines which tags are to be applied to lists of key names. Parsed into json by hexaparse.py during the build process.

* `stat_key_browser/data/key_tags.json`:

The automatically generated JSON that results when hexaparse.py parsed key\_tags.hexa during the build process. This file is referenced by build\_stat\_browser.py to tag stat keys received from PAPI and is part of the distributable zip.

* `keys.js`

JSON formatted stat keys with tags and categories attached. This is created by build\_stat\_browser.py and read by the html app's JavaScript.

* `stat_key_browser/templates/app_template.html`

The main template for the app. Contains the main html plus categories.

* `stat_key_browser/template/key_template.html`

Contains a template representing a single key and all of its info, including its extra info.

* `web_app/index.html`

This is the file opened by the user to view the stat browser. This file is rendered by build_stat_browser.py from the templates, the definitions in key_tags.json and from the PAPI supplied list of keys.
