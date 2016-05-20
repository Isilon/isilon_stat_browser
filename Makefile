PYTHON=`which python`
PIP=`which pip`
PYLINT=`which pylint`
HEXAPARSE=./hexaparse.py

DIST_DIR=dist
BROWSER_VERS_STRING=`git describe --exact-match --abbrev=0 || git rev-parse --short HEAD`


clean:
	-rm -rf $(DIST_DIR)
	-rm -rf test_results
	-rm stat_key_browser/data/key_tags.json
	-rm stat_key_browser/data/key_cats.json
	-rm web_app/js/keys.js
	-rm web_app/index.html
	-rm isilon_stat_browser_v*.zip

tags:
	$(HEXAPARSE) stat_key_browser/data/key_tags.hexa > stat_key_browser/data/key_tags.json
	$(HEXAPARSE) stat_key_browser/data/key_cats.hexa > stat_key_browser/data/key_cats.json

lint:
	$(PYLINT) -E -f colorized -r n stat_key_browser bin/ tests/

unittests: lint
	$(PYTHON) -m pytest -v tests/unit/ *.py

coverage: lint
	$(PYTHON) -m pytest -v --cov=stat_key_browser --cov-report term-missing --cov-config tests/unit/.coveragerc tests/unit/ *.py

travis-ci: tags lint
	$(PYTHON) -m pytest -v tests/unit/ hexaparse.py

check_cluster:
	if [ -z $$BUILD_BROWSER_ARGS ]; then echo BUILD_BROWSER_ARGS not set, builder will pause for input; fi

functional_tests: check_cluster clean unittests tags
	$(PYTHON) -m pytest -v tests/functional/

dist: check_cluster clean unittests tags
	./build_stat_browser.py -x $(BUILD_BROWSER_ARGS)
	mkdir -p $(DIST_DIR)
	cp build_stat_browser.py $(DIST_DIR)
	cp requirements.txt $(DIST_DIR)
	cp README.md $(DIST_DIR)
	cp -r stat_key_browser $(DIST_DIR)
	cp -r web_app $(DIST_DIR)
	zip -r isilon_stat_browser_$(BROWSER_VERS_STRING).zip dist/*
