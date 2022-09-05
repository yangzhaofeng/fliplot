all: production

prepare:
	mkdir -p dist/js
	cp index.html dist/
	cp defaults.json dist/
	cp favicon.ico dist/
	cp js/jquery.ui.touch-punch.min.js dist/js/
	cp -r css dist/
	cp -r test dist/

dev: prepare
	$(MAKE) -C js dev
	cp js/dist/main.js dist/js/main.js

production: prepare
	$(MAKE) -C js production
	cp js/dist/main.js dist/js/main.js

clean:
	rm -rf dist/
	$(MAKE) -C js clean
