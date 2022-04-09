.PHONY: install
install:
	npm i

.PHONY: dev
dev:
	npm run dev

# create an optimized production build
.PHONY: build
build:
	npm run build

# prettier + eslint + tsc
.PHONY: lint
lint:
	npm run format
	npm run lint
	npm run type-check
