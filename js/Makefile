all: production

npmi:
	npm i

test: npmi
	npm run test

dev: npmi
	npm run dev

production: test
	npm run build

clean:
	rm -rf package-lock.json dist/ node_modules/
