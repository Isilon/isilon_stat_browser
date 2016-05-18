#stat-key-browser

A single page web app that provides a browsable, searchable view of Isilon statistics keys. A Python script generates the html by querying an Isilon cluster for the list of statistics keys, then organizing and categorizing the keys before outputting the html app to web_app.

##requirements
Python 2.7 or 3.5

Dependencies listed in requirements-dev.txt

Isilon SDK Python language bindings

[`https://github.com/isilon/`](https://github.com/isilon)

##Development getting started

Clone this repo:

`git clone <repo>`

`cd isilon_stat_browser`

Install the dependencies:

`pip install -r requirements-dev.txt`

Build the html and js output.

`make html`


###run unit tests

`make unittests`

###Run the page building tool

`./build_stat_browser.py -c <cluster IP>`

# Files

* `README-dev.md`

The developer facing readme that you are reading now.

* `README.md`

The user-facing readme.

* `stat_key_browser/data/key_cats.hexa`

A human written and readable file that defines which categories and subcategories are to be applied to lists of key names. Parsed into json by hexaparse.py during `make tags`.

* `stat_key_browser/data/key_cats.json`:

The automatically generated JSON that results when hexaparse.py parses key\_cats.hexa during the build process. This file is referenced by build\_stat\_browser.py to categorize stat keys received from PAPI.

* `stat_key_browser/data/key_tags.hexa`

A human written and readable file that defines which tags are to be applied to lists of key names. Parsed into json by hexaparse.py during the build process.

* `stat_key_browser/data/key_tags.json`:

The automatically generated JSON that results when hexaparse.py parsed key\_tags.hexa during the build process. This file is referenced by build\_stat\_browser.py to tag stat keys received from PAPI.

* `keys.js`

JSON formatted stat keys with tags and categories attached. This is created by build\_stat\_browser.py and read by the html app's JavaScript.

* `stat_key_browser/templates/app_template.html`

The main template for the app. Contains the main html plus categories.

* `stat_key_browser/template/key_template.html`

Contains a template representing a single key and all of its info, including its extra info.

* `web_app/index.html`

This is the file opened by the user to view the stat browser. This file is rendered by build_stat_browser.py from the templates, the definitions in key_tags.json and from the PAPI supplied list of keys.
