#stat-key-browser

Provides a browsable view of Isilon statistics keys. Consists of a Python script that generates a key browser html page. The script queries PAPI for the list of stat keys, then applies categorization and optional additional tags and data attributes to the keys. The script then outputs a single page html and javascript app for browsing and searching the stat keys. 

###requirements

* Python 2.7
* [Isilon SDK](https://github.com/isilon) Python language bindings

## Getting started
### Viewing the stat-key-browser
Open `web_app/index.html` in your web browser.

### Regenerating the stat-key-browser from a particular Isilon cluster
`./build_stat_browser -c <cluster IP>`
