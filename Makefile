BOOTSTRAP = ./docs/assets/css/bootstrap.css
BOOTSTRAP_LESS = ./less/bootstrap.less
BOOTSTRAP_RESPONSIVE = ./docs/assets/css/bootstrap-responsive.css
BOOTSTRAP_RESPONSIVE_LESS = ./less/responsive.less
LESS_COMPRESSOR ?= `which lessc`
WATCHR ?= `which watchr`

#
# BUILD DOCS
#

docs: dist
	cp -r dist bootstrap
	zip -r docs/assets/bootstrap.zip bootstrap
	rm -r bootstrap
	lessc ${BOOTSTRAP_LESS} > ${BOOTSTRAP}
	lessc ${BOOTSTRAP_RESPONSIVE_LESS} > ${BOOTSTRAP_RESPONSIVE}
	node docs/build
	cp img/* docs/assets/img/

#
# BUILD SIMPLE DIST DIRECTORY
# lessc & uglifyjs are required
#

dist:
	mkdir -p dist/img
	mkdir -p dist/css
	mkdir -p dist/js
	cp img/* dist/img/
	lessc ${BOOTSTRAP_LESS} > dist/css/bootstrap.css
	lessc --compress ${BOOTSTRAP_LESS} > dist/css/bootstrap.min.css
	lessc ${BOOTSTRAP_RESPONSIVE_LESS} > dist/css/bootstrap.responsive
	lessc --compress ${BOOTSTRAP_RESPONSIVE_LESS} > dist/css/bootstrap.min.responsive
	cat js/bootstrap-transition.js js/bootstrap-alert.js js/bootstrap-button.js js/bootstrap-carousel.js js/bootstrap-collapse.js js/bootstrap-dropdown.js js/bootstrap-modal.js js/bootstrap-tooltip.js js/bootstrap-popover.js js/bootstrap-scrollspy.js js/bootstrap-tab.js js/bootstrap-typeahead.js > dist/js/bootstrap.js
	uglifyjs -nc dist/js/bootstrap.js > dist/js/bootstrap.min.js

#
# WATCH LESS FILES
#

watch:
	echo "Watching less files..."; \
	watchr -e "watch('less/.*\.less') { system 'make' }"


.PHONY: dist docs watch