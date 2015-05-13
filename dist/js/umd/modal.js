(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', './util'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('./util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.Util);
    global.modal = mod.exports;
  }
})(this, function (exports, module, _util) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Util = _interopRequire(_util);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Modal = (function ($) {

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'modal';
    var VERSION = '4.0.0';
    var DATA_KEY = 'bs.modal';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 300;
    var BACKDROP_TRANSITION_DURATION = 150;

    var Default = {
      backdrop: true,
      keyboard: true,
      show: true
    };

    var Event = {
      HIDE: 'hide.bs.modal',
      HIDDEN: 'hidden.bs.modal',
      SHOW: 'show.bs.modal',
      SHOWN: 'shown.bs.modal',
      DISMISS: 'click.dismiss.bs.modal',
      KEYDOWN: 'keydown.dismiss.bs.modal',
      FOCUSIN: 'focusin.bs.modal',
      RESIZE: 'resize.bs.modal',
      CLICK: 'click.bs.modal.data-api',
      MOUSEDOWN: 'mousedown.dismiss.bs.modal',
      MOUSEUP: 'mouseup.dismiss.bs.modal'
    };

    var ClassName = {
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      IN: 'in'
    };

    var Selector = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure'
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Modal = (function () {
      function Modal(element, config) {
        _classCallCheck(this, Modal);

        this._config = config;
        this._element = element;
        this._dialog = $(element).find(Selector.DIALOG)[0];
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._originalBodyPadding = 0;
        this._scrollbarWidth = 0;
      }

      _createClass(Modal, [{
        key: 'toggle',

        // public

        value: function toggle(relatedTarget) {
          return this._isShown ? this.hide() : this.show(relatedTarget);
        }
      }, {
        key: 'show',
        value: function show(relatedTarget) {
          var _this = this;

          var showEvent = $.Event(Event.SHOW, {
            relatedTarget: relatedTarget
          });

          $(this._element).trigger(showEvent);

          if (this._isShown || showEvent.isDefaultPrevented()) {
            return;
          }

          this._isShown = true;

          this._checkScrollbar();
          this._setScrollbar();

          $(document.body).addClass(ClassName.OPEN);

          this._setEscapeEvent();
          this._setResizeEvent();

          $(this._element).on(Event.DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

          $(this._dialog).on(Event.MOUSEDOWN, function () {
            $(_this._element).one(Event.MOUSEUP, function (event) {
              if ($(event.target).is(_this._element)) {
                that._ignoreBackdropClick = true;
              }
            });
          });

          this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
        }
      }, {
        key: 'hide',
        value: function hide(event) {
          if (event) {
            event.preventDefault();
          }

          var hideEvent = $.Event(Event.HIDE);

          $(this._element).trigger(hideEvent);

          if (!this._isShown || hideEvent.isDefaultPrevented()) {
            return;
          }

          this._isShown = false;

          this._setEscapeEvent();
          this._setResizeEvent();

          $(document).off(Event.FOCUSIN);

          $(this._element).removeClass(ClassName.IN);

          $(this._element).off(Event.DISMISS);
          $(this._dialog).off(Event.MOUSEDOWN);

          if (_Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {

            $(this._element).one(_Util.TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
          } else {
            this._hideModal();
          }
        }
      }, {
        key: '_showElement',

        // private

        value: function _showElement(relatedTarget) {
          var _this2 = this;

          var transition = _Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

          if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            document.body.appendChild(this._element);
          }

          this._element.style.display = 'block';
          this._element.scrollTop = 0;

          if (transition) {
            _Util.reflow(this._element);
          }

          $(this._element).addClass(ClassName.IN);

          this._enforceFocus();

          var shownEvent = $.Event(Event.SHOWN, {
            relatedTarget: relatedTarget
          });

          var transitionComplete = function transitionComplete() {
            _this2._element.focus();
            $(_this2._element).trigger(shownEvent);
          };

          if (transition) {
            $(this._dialog).one(_Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
          } else {
            transitionComplete();
          }
        }
      }, {
        key: '_enforceFocus',
        value: function _enforceFocus() {
          var _this3 = this;

          $(document).off(Event.FOCUSIN) // guard against infinite focus loop
          .on(Event.FOCUSIN, function (event) {
            if (_this3._element !== event.target && !$(_this3._element).has(event.target).length) {
              _this3._element.focus();
            }
          });
        }
      }, {
        key: '_setEscapeEvent',
        value: function _setEscapeEvent() {
          var _this4 = this;

          if (this._isShown && this._config.keyboard) {
            $(this._element).on(Event.KEYDOWN, function (event) {
              if (event.which === 27) {
                _this4.hide();
              }
            });
          } else if (!this._isShown) {
            $(this._element).off(Event.KEYDOWN);
          }
        }
      }, {
        key: '_setResizeEvent',
        value: function _setResizeEvent() {
          if (this._isShown) {
            $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));
          } else {
            $(window).off(Event.RESIZE);
          }
        }
      }, {
        key: '_hideModal',
        value: function _hideModal() {
          var _this5 = this;

          this._element.style.display = 'none';
          this._showBackdrop(function () {
            $(document.body).removeClass(ClassName.OPEN);
            _this5._resetAdjustments();
            _this5._resetScrollbar();
            $(_this5._element).trigger(Event.HIDDEN);
          });
        }
      }, {
        key: '_removeBackdrop',
        value: function _removeBackdrop() {
          if (this._backdrop) {
            $(this._backdrop).remove();
            this._backdrop = null;
          }
        }
      }, {
        key: '_showBackdrop',
        value: function _showBackdrop(callback) {
          var _this6 = this;

          var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

          if (this._isShown && this._config.backdrop) {
            var doAnimate = _Util.supportsTransitionEnd() && animate;

            this._backdrop = document.createElement('div');
            this._backdrop.className = ClassName.BACKDROP;

            if (animate) {
              $(this._backdrop).addClass(animate);
            }

            $(this._backdrop).appendTo(this.$body);

            $(this._element).on(Event.DISMISS, function (event) {
              if (_this6._ignoreBackdropClick) {
                _this6._ignoreBackdropClick = false;
                return;
              }
              if (event.target !== event.currentTarget) {
                return;
              }
              if (_this6._config.backdrop === 'static') {
                _this6._element.focus();
              } else {
                _this6.hide();
              }
            });

            if (doAnimate) {
              _Util.reflow(this._backdrop);
            }

            $(this._backdrop).addClass(ClassName.IN);

            if (!callback) {
              return;
            }

            if (!doAnimate) {
              callback();
              return;
            }

            $(this._backdrop).one(_Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
          } else if (!this._isShown && this._backdrop) {
            $(this._backdrop).removeClass(ClassName.IN);

            var callbackRemove = function callbackRemove() {
              _this6._removeBackdrop();
              if (callback) {
                callback();
              }
            };

            if (_Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
              $(this._backdrop).one(_Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
            } else {
              callbackRemove();
            }
          } else if (callback) {
            callback();
          }
        }
      }, {
        key: '_handleUpdate',

        // ----------------------------------------------------------------------
        // the following methods are used to handle overflowing modals
        // todo (fat): these should probably be refactored out of modal.js
        // ----------------------------------------------------------------------

        value: function _handleUpdate() {
          this._adjustDialog();
        }
      }, {
        key: '_adjustDialog',
        value: function _adjustDialog() {
          var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

          if (!this._isBodyOverflowing && isModalOverflowing) {
            this._element.style.paddingLeft = this._scrollbarWidth + 'px';
          }

          if (this._isBodyOverflowing && !isModalOverflowing) {
            this._element.style.paddingRight = this._scrollbarWidth + 'px';
          }
        }
      }, {
        key: '_resetAdjustments',
        value: function _resetAdjustments() {
          this._element.style.paddingLeft = '';
          this._element.style.paddingRight = '';
        }
      }, {
        key: '_checkScrollbar',
        value: function _checkScrollbar() {
          var fullWindowWidth = window.innerWidth;
          if (!fullWindowWidth) {
            // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect();
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
          }
          this._isBodyOverflowing = document.body.clientWidth < fullWindowWidth;
          this._scrollbarWidth = this._getScrollbarWidth();
        }
      }, {
        key: '_setScrollbar',
        value: function _setScrollbar() {
          var bodyPadding = parseInt($(document.body).css('padding-right') || 0, 10);

          this._originalBodyPadding = document.body.style.paddingRight || '';

          if (this._isBodyOverflowing) {
            document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';
          }
        }
      }, {
        key: '_resetScrollbar',
        value: function _resetScrollbar() {
          document.body.style.paddingRight = this._originalBodyPadding;
        }
      }, {
        key: '_getScrollbarWidth',
        value: function _getScrollbarWidth() {
          // thx d.walsh
          var scrollDiv = document.createElement('div');
          scrollDiv.className = Selector.SCROLLBAR_MEASURER;
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        }
      }], [{
        key: 'VERSION',

        // getters

        get: function () {
          return VERSION;
        }
      }, {
        key: 'Default',
        get: function () {
          return Default;
        }
      }, {
        key: '_jQueryInterface',

        // static

        value: function _jQueryInterface(config, relatedTarget) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY);
            var _config = $.extend({}, Modal.Default, $(this).data(), typeof config === 'object' && config);

            if (!data) {
              data = new Modal(this, _config);
              $(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              data[config](relatedTarget);
            } else if (_config.show) {
              data.show(relatedTarget);
            }
          });
        }
      }]);

      return Modal;
    })();

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK, Selector.DATA_TOGGLE, function (event) {
      var _this7 = this;

      var target = undefined;
      var selector = _Util.getSelectorFromElement(this);

      if (selector) {
        target = $(selector)[0];
      }

      var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

      if (this.tagName === 'A') {
        event.preventDefault();
      }

      var $target = $(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // only register focus restorer if modal will actually get shown
          return;
        }

        $target.one(Event.HIDDEN, function () {
          if ($(_this7).is(':visible')) {
            _this7.focus();
          }
        });
      });

      Modal._jQueryInterface.call($(target), config, this);
    });

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface;
    };

    return Modal;
  })(jQuery);

  module.exports = Modal;
});