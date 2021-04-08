/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Accordion.js":
/*!*************************!*\
  !*** ./js/Accordion.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * Accordion
 * v1.0.1
 */
var Accordion = /*#__PURE__*/function () {
  function Accordion($accordion) {
    _classCallCheck(this, Accordion);

    this.$ = {}; // Initialize object of DOM elements.

    this.$.accordion = $accordion; // Add accordion in DOM objects.

    this._initDOM();

    this._initParams();

    this._initialize();
  }
  /**
   * Initialize DOM
   */


  _createClass(Accordion, [{
    key: "_initDOM",
    value: function _initDOM() {
      this.$.items = Array.from(this.$.accordion.querySelectorAll('.accordion__item'));
    }
    /**
     * Initialize params
     */

  }, {
    key: "_initParams",
    value: function _initParams() {
      this.items = [];
      this.isMultiple = this.$.accordion.dataset.multiple; // Set is multiple item open.
    }
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      var _iterator = _createForOfIteratorHelper(this.$.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var $item = _step.value;

          if ($item.classList.contains('accordion__item--open')) {
            var $content = $item.querySelector('.accordion__itemContainer');
            var contentHeight = $content.offsetHeight;
            $content.style.height = "".concat(contentHeight, "px");
            this.items.push({
              item: $item,
              height: contentHeight
            });
          } else {
            var _$content = $item.querySelector('.accordion__itemContainer');

            var _contentHeight = _$content.offsetHeight;
            _$content.style.height = 0;
            this.items.push({
              item: $item,
              height: _contentHeight
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      var _iterator2 = _createForOfIteratorHelper(this.items),
          _step2;

      try {
        var _loop = function _loop() {
          var _step2$value = _step2.value,
              item = _step2$value.item,
              height = _step2$value.height;
          var $button = item.querySelector('.accordion__itemButton');
          var $content = item.querySelector('.accordion__itemContainer');
          $button.addEventListener('click', function (event) {
            if (!_this.isMultiple) {
              var _iterator3 = _createForOfIteratorHelper(_this.items),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _item = _step3.value.item;

                  if (!_item.contains(event.target)) {
                    if (_item.classList.contains('accordion__item--open')) {
                      _item.querySelector('.accordion__itemContainer').style.height = 0;

                      _item.classList.remove('accordion__item--open');
                    }
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            if (item.classList.contains('accordion__item--open')) {
              $content.style.height = 0;
              item.classList.remove('accordion__item--open');
            } else {
              $content.style.height = "".concat(height, "px");
              item.classList.add('accordion__item--open');
            }
          });
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return Accordion;
}();

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./js/Animation.js":
/*!*************************!*\
  !*** ./js/Animation.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animation = /*#__PURE__*/function () {
  function Animation() {
    _classCallCheck(this, Animation);

    this.$ = {};
    this.init();
  }

  _createClass(Animation, [{
    key: "setDOM",
    value: function setDOM() {
      this.$.animatedTitles = Array.from(document.querySelectorAll('.animated-title'));
    }
  }, {
    key: "init",
    value: function init() {
      for (var _i = 0, _Array$from = Array.from(document.querySelectorAll('.animated-title')); _i < _Array$from.length; _i++) {
        var animatedTitle = _Array$from[_i];
        animatedTitle.classList.remove('animated-title');
        var wrapperTitle = document.createElement('div');
        wrapperTitle.classList.add('animated-title__text');
        animatedTitle.parentNode.insertBefore(wrapperTitle, animatedTitle);
        wrapperTitle.appendChild(animatedTitle);
        var wrapperTitle2 = document.createElement('div');
        wrapperTitle2.classList.add('animated-title');
        wrapperTitle.parentNode.insertBefore(wrapperTitle2, wrapperTitle);
        wrapperTitle2.appendChild(wrapperTitle);
      }

      this.setDOM();
      this.events();
    }
  }, {
    key: "events",
    value: function events() {
      var title = new IntersectionObserver(function (observables) {
        var _iterator = _createForOfIteratorHelper(observables),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (item.intersectionRatio > 0.5) {
              item.target.classList.add('animated-title--visible');
              title.unobserve(item.target);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }, {
        threshold: [0.5]
      });

      var _iterator2 = _createForOfIteratorHelper(this.$.animatedTitles),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var animatedTitle = _step2.value;
          title.observe(animatedTitle);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return Animation;
}();

/* harmony default export */ __webpack_exports__["default"] = (Animation);

/***/ }),

/***/ "./js/Carousel.js":
/*!************************!*\
  !*** ./js/Carousel.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * Carousel
 * v1.0.1
 */
var Carousel = /*#__PURE__*/function () {
  function Carousel($carousel) {
    _classCallCheck(this, Carousel);

    this.$ = {}; // Initialize object of DOM elements.

    this.$.carousel = $carousel; // Add carousel in DOM objects.

    this._initDOM();

    this._initParams();

    this._initialize();
  }
  /**
   * Initialize DOM
   */


  _createClass(Carousel, [{
    key: "_initDOM",
    value: function _initDOM() {
      this.$.navigation = {
        left: this.$.carousel.querySelector('.carousel__button--left'),
        right: this.$.carousel.querySelector('.carousel__button--right')
      };
      this.$.items = this.$.carousel.querySelector('.carousel__items');
    }
    /**
     * Initialize params
     */

  }, {
    key: "_initParams",
    value: function _initParams() {
      this.isTouchDevice = !!('ontouchstart' in window || navigator.maxTouchPoints);
      this.type = this.$.carousel.dataset.type ? this.$.carousel.dataset.type : 'normal';
      this.activeItem = 1;
      this.pagination = this.$.carousel.dataset.pagination;
      this.drag = this.$.carousel.dataset.drag;
      this.auto = this.$.carousel.dataset.auto;
      this.mobileNumber = 1 || false;
      this.tabletNumber = 2 || false;
      this.laptopNumber = 4 || false;
      this.numberItems = Array.from(this.$.carousel.querySelectorAll('.carousel__item')).length;

      if (this.type !== 'multi') {
        this.width = this.$.carousel.offsetWidth;
        this.screenNumber = 1;
      } else {
        this.width = this.$.carousel.querySelector('.carousel__item').offsetWidth;

        if (window.matchMedia('(min-width: 992px)').matches) {
          this.screenNumber = this.laptopNumber;
        } else if (window.matchMedia('(min-width: 768px)').matches) {
          this.screenNumber = this.tabletNumber;
        } else {
          this.screenNumber = this.mobileNumber;
        }
      }
    }
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      var _this = this;

      if (this.pagination) {
        var $pagination = document.createElement('div');
        $pagination.classList.add('carousel__pagination');

        for (var i = 0; i < this.numberItems; i++) {
          var $item = document.createElement('button');
          $item.setAttribute('type', 'button');
          $item.classList.add('carousel__paginationBullet');
          $item.dataset.item = i + 1;

          if (i === 0) {
            $item.classList.add('carousel__paginationBullet--active');
          }

          $pagination.appendChild($item);
        }

        this.$.carousel.appendChild($pagination);
      }

      if (this.auto) {
        setInterval(function () {
          _this._moveRight();
        }, parseInt(this.auto));
      }

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this2 = this;

      this.$.navigation.left.addEventListener('click', function () {
        _this2._moveLeft();
      });
      this.$.navigation.right.addEventListener('click', function () {
        _this2._moveRight();
      });
      this.$.carousel.addEventListener('keyup', function (event) {
        if (event.keyCode === 37) _this2._moveLeft();else if (event.keyCode === 39) _this2._moveRight();
      });

      var _loop = function _loop() {
        var $bullet = _Array$from[_i];
        $bullet.addEventListener('click', function () {
          _this2.$.carousel.querySelector('.carousel__paginationBullet--active').classList.remove('carousel__paginationBullet--active');

          $bullet.classList.add('carousel__paginationBullet--active');

          _this2._moveItems($bullet.dataset.item - 1);

          _this2.activeItem = parseInt($bullet.dataset.item);
        });
      };

      for (var _i = 0, _Array$from = Array.from(this.$.carousel.querySelectorAll('.carousel__paginationBullet')); _i < _Array$from.length; _i++) {
        _loop();
      }

      if (this.drag) {
        if (this.isTouchDevice) {
          this.$.carousel.addEventListener('touchstart', function (event) {
            _this2.actualPosition = event.touches[0].clientX;
            _this2.pressItems = true;
            _this2.translate = 0;
            _this2.dragCretaedItem = false;
          });
          this.$.carousel.addEventListener('touchmove', function (event) {
            _this2._dragItems(event.changedTouches[0].clientX);
          });
          document.addEventListener('touchend', function (event) {
            setTimeout(function () {
              _this2.pressItems = false;
              if (event.changedTouches[0] > _this2.actualPosition) _this2._moveLeft();else if (event.changedTouches[0] < _this2.actualPosition) _this2._moveRight();

              if (_this2.type === 'infinite' && _this2.activeItem === _this2.numberItems && Array.from(_this2.$.items.querySelectorAll('.carousel__item')).length > _this2.numberItems) {
                _this2.$.items.removeChild(_this2.$.items.querySelector('.carousel__item'));
              } else if (_this2.type === 'infinite' && _this2.activeItem === 1 && Array.from(_this2.$.items.querySelectorAll('.carousel__item')).length > _this2.numberItems) {
                _this2.$.items.removeChild(_this2.$.items.querySelector('.carousel__item:last-child'));
              }
            }, 100);
          });
        } else {
          this.$.items.addEventListener('mousedown', function (event) {
            _this2.actualPosition = event.clientX;
            _this2.pressItems = true;
            _this2.translate = 0;
            _this2.dragCretaedItem = false;
          });
          this.$.items.addEventListener('mousemove', function (event) {
            _this2._dragItems(event.clientX);
          });
          document.addEventListener('mouseup', function (event) {
            _this2.$.items.classList.remove('carousel__items--drag');

            setTimeout(function () {
              _this2.pressItems = false;
              if (event.clientX > _this2.actualPosition + 20) _this2._moveLeft();else if (event.clientX < _this2.actualPosition - 20) _this2._moveRight();

              if (event.clientX > _this2.actualPosition + 20 || event.clientX < _this2.actualPosition - 20) {
                if (_this2.type === 'infinite' && _this2.activeItem === _this2.numberItems && Array.from(_this2.$.items.querySelectorAll('.carousel__item')).length > _this2.numberItems) {
                  _this2.$.items.removeChild(_this2.$.items.querySelector('.carousel__item'));
                } else if (_this2.type === 'infinite' && _this2.activeItem === 1 && Array.from(_this2.$.items.querySelectorAll('.carousel__item')).length > _this2.numberItems) {
                  _this2.$.items.removeChild(_this2.$.items.querySelector('.carousel__item:last-child'));
                }
              }
            }, 100);
          });
        }
      }
    }
  }, {
    key: "_dragItems",
    value: function _dragItems(clientX) {
      this.$.items.classList.add('carousel__items--drag');

      if (this.pressItems) {
        if (clientX > this.actualPosition) {
          this.translate = clientX - this.actualPosition;

          if (this.type === 'infinite') {
            if (this.activeItem === 1) {
              if (!this.dragCretaedItem) {
                var $lastItem = this.$.carousel.querySelector('.carousel__item:last-child');
                var duplicateLastItem = $lastItem.cloneNode(true);
                duplicateLastItem.style.transform = 'translateX(-100%)';
                duplicateLastItem.style.position = 'absolute';
                this.$.items.insertBefore(duplicateLastItem, this.$.items.querySelector('.carousel__item'));
                this.dragCretaedItem = true;
              }

              this.$.items.style.transform = "translateX(".concat(this.translate, "px)");
            }
          } else {
            if (this.activeItem > 1) {
              this.$.items.style.transform = "translateX(".concat((this.activeItem - 1) * -this.$.carousel.offsetWidth + this.translate, "px)");
            }
          }
        } else if (clientX < this.actualPosition) {
          this.translate = this.actualPosition - clientX;

          if (this.type === 'infinite') {
            if (this.activeItem < this.numberItems) {
              this.$.items.style.transform = "translateX(".concat((this.activeItem - 1) * -this.$.carousel.offsetWidth - this.translate, "px)");
            } else if (this.activeItem === this.numberItems) {
              if (!this.dragCretaedItem) {
                this.dragCretaedItem = true;
                var $firstItem = this.$.carousel.querySelector('.carousel__item');
                var duplicateFirstItem = $firstItem.cloneNode(true);
                this.$.items.appendChild(duplicateFirstItem);
              }

              this.$.items.style.transform = "translateX(".concat((this.numberItems - 1) * -this.$.carousel.offsetWidth - this.translate, "px)");
            }
          } else {
            if (this.activeItem < this.numberItems) {
              this.$.items.style.transform = "translateX(".concat((this.activeItem - 1) * -this.$.carousel.offsetWidth - this.translate, "px)");
            }
          }
        }
      }
    }
  }, {
    key: "_moveLeft",
    value: function _moveLeft() {
      if (this.type === 'normal' || this.type === 'multi') {
        if (this.activeItem > 1) {
          this._moveItems(this.activeItem - 2, 'left');

          this.activeItem--;
        }
      } else if (this.type === 'loop') {
        if (this.activeItem > 1) {
          this._moveItems(this.activeItem - 2, 'left');

          this.activeItem--;
        } else if (this.activeItem === 1) {
          this._moveItems(this.numberItems - 1, 'left');

          this.activeItem = this.numberItems;
        }
      } else if (this.type === 'infinite') {
        if (this.activeItem === 1) {
          var $lastItem = this.$.items.querySelector('.carousel__item:last-child');
          var duplicateLastItem = $lastItem.cloneNode(true);
          duplicateLastItem.style.transform = 'translateX(-100%)';
          duplicateLastItem.style.position = 'absolute';
          this.$.items.appendChild(duplicateLastItem);
          this.$.items.insertBefore(this.$.items.querySelector('.carousel__item:last-child'), this.$.items.querySelector('.carousel__item'));

          this._moveItems(-1, 'left');

          this.activeItem = this.numberItems;
        } else if (this.activeItem <= this.numberItems) {
          this._moveItems(this.activeItem - 2, 'left');

          this.activeItem--;
        }
      }
    }
  }, {
    key: "_moveRight",
    value: function _moveRight() {
      if (this.type === 'normal' || this.type === 'multi') {
        if (this.activeItem < this.numberItems - (this.screenNumber - 1)) {
          console.log('ok');

          this._moveItems(this.activeItem, 'right');

          this.activeItem++;
        }
      } else if (this.type === 'loop') {
        if (this.activeItem < this.numberItems) {
          this._moveItems(this.activeItem, 'right');

          this.activeItem++;
        } else if (this.activeItem === this.numberItems) {
          this._moveItems(0, 'right');

          this.activeItem = 1;
        }
      } else if (this.type === 'infinite') {
        if (this.activeItem < this.numberItems) {
          this._moveItems(this.activeItem, 'right');

          this.activeItem++;
        } else if (this.activeItem === this.numberItems) {
          var $firstItem = this.$.carousel.querySelector('.carousel__item');
          var duplicateFirstItem = $firstItem.cloneNode(true);
          this.$.items.appendChild(duplicateFirstItem);

          this._moveItems(this.activeItem, 'right');

          this.activeItem = 1;
        }
      }
    }
  }, {
    key: "_moveItems",
    value: function _moveItems(x) {
      var _this3 = this;

      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var t;
      clearTimeout(t);
      this.$.items.style.transition = 'transform 1s ease-in-out';
      this.$.items.style.transform = "translateX(".concat(x * -this.width, "px)");
      t = setTimeout(function () {
        if (_this3.type === 'infinite' && position === 'right' && _this3.activeItem === 1) {
          _this3.$.items.removeChild(_this3.$.items.querySelector('.carousel__item'));

          _this3.$.items.style.transition = 'none';
          _this3.$.items.style.transform = 'none';

          _this3.$.items.insertBefore(_this3.$.items.querySelector('.carousel__item:last-child'), _this3.$.items.querySelector('.carousel__item'));
        } else if (_this3.type === 'infinite' && position === 'left' && _this3.activeItem === _this3.numberItems) {
          _this3.$.items.removeChild(_this3.$.items.querySelector('.carousel__item'));

          _this3.$.items.style.transition = 'none';
          _this3.$.items.style.transform = "translateX(".concat((_this3.numberItems - 1) * -_this3.width, ")");
        }
      }, 1000);

      if (this.pagination) {
        if (position === 'left') {
          this.$.carousel.querySelector('.carousel__paginationBullet--active').classList.remove('carousel__paginationBullet--active');
          if (this.activeItem === 1) this.$.carousel.querySelector('.carousel__paginationBullet:last-child').classList.add('carousel__paginationBullet--active');else this.$.carousel.querySelector(".carousel__paginationBullet:nth-child(".concat(this.activeItem - 1, ")")).classList.add('carousel__paginationBullet--active');
        } else if (position === 'right') {
          this.$.carousel.querySelector('.carousel__paginationBullet--active').classList.remove('carousel__paginationBullet--active');
          if (this.activeItem === this.numberItems) this.$.carousel.querySelector('.carousel__paginationBullet').classList.add('carousel__paginationBullet--active');else this.$.carousel.querySelector(".carousel__paginationBullet:nth-child(".concat(this.activeItem + 1, ")")).classList.add('carousel__paginationBullet--active');
        }
      }
    }
  }]);

  return Carousel;
}();

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./js/CustomFile.js":
/*!**************************!*\
  !*** ./js/CustomFile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * CustomFile
 * v1.1.0
 */
var CustomFile = /*#__PURE__*/function () {
  function CustomFile($customFile) {
    _classCallCheck(this, CustomFile);

    this.$ = {}; // Initialize object of DOM elements.

    this.$.customFile = $customFile; // Add custom-select in DOM objects.

    this._initParams();

    this._initialize();
  }
  /**
   * Initialize params
   */


  _createClass(CustomFile, [{
    key: "_initParams",
    value: function _initParams() {
      this.label = this.$.customFile.dataset.label;
      this.isButton = this.$.customFile.dataset.button;
      this.isButtonPosition = this.$.customFile.dataset.buttonpos ? this.$.customFile.dataset.buttonpos : 'right';
      this.type = this.$.customFile.dataset.type ? this.$.customFile.dataset.type : 'file';
      this.isSize = this.$.customFile.dataset.size;
    }
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      if (this.isButton) {
        this.$.button = document.createElement('button');
        this.$.button.classList.add('custom-file__button');
        this.$.button.setAttribute('type', 'button');
        this.$.button.innerText = this.isButton;
      }

      this.$.customFile.innerHTML = '';

      if (this.isSize) {
        this.$.container = document.createElement('div');
        this.$.container.classList.add('custom-file__container');
      }

      if (this.isButton && this.isButtonPosition === 'left') {
        this.isSize ? this.$.container.appendChild(this.$.button) : this.$.customFile.appendChild(this.$.button);
      } // Create label


      this.$.label = document.createElement('p');
      this.$.label.innerText = this.label;
      this.$.label.classList.add('custom-file__label');
      this.isSize ? this.$.container.appendChild(this.$.label) : this.$.customFile.appendChild(this.$.label); // Create input

      this.$.input = document.createElement('input');
      this.$.input.setAttribute('name', this.$.customFile.dataset.name);
      this.$.input.setAttribute('type', 'file');
      if (this.type === 'files') this.$.input.setAttribute('multiple', true);else if (this.type === 'folder') {
        this.$.input.setAttribute('webkitdirectory', true);
        this.$.input.setAttribute('directorys', true);
      }
      this.$.input.style.display = 'none';
      this.isSize ? this.$.container.appendChild(this.$.input) : this.$.customFile.appendChild(this.$.input);

      if (this.isButton && this.isButtonPosition === 'right') {
        this.isSize ? this.$.container.appendChild(this.$.button) : this.$.customFile.appendChild(this.$.button);
      }

      if (this.isSize) {
        this.$.customFile.appendChild(this.$.container); // Create size info

        this.$.size = document.createElement('p');
        this.$.size.classList.add('custom-file__size');
        this.$.size.innerText = '0 mb';
        this.$.customFile.appendChild(this.$.size);
      }

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$.container.addEventListener('click', function () {
        _this.$.input.click();
      });

      var sizeConvert = function sizeConvert(size) {
        var bytes = size;
        var sizes = ['bytes', 'kb', 'mb', 'gb', 'tb'];
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        var convert = Math.round(bytes / Math.pow(1024, i), 2);
        return "".concat(convert, " ").concat(sizes[i]);
      };

      this.$.input.addEventListener('change', function (event) {
        if (_this.type === 'file') {
          var file = event.target.files[0];
          _this.$.label.innerText = file.name;
          var close = document.createElement('div');
          close.classList.add('custom-file__fileClose');
          close.innerHTML = '&times;';

          _this.$.container.insertBefore(close, _this.$.button);

          close.addEventListener('click', function (event) {
            event.stopPropagation();
            _this.$.input.value = null;
            _this.$.label.innerText = _this.label;

            _this.$.container.removeChild(close);

            _this.$.size.innerText = '0 mb';
          });
          _this.$.size.innerText = sizeConvert(file.size);
        } else {
          var files = event.target.files;
          var $files = document.createElement('div');
          var size = 0;
          Array.from(files).forEach(function (file, index) {
            var $file = document.createElement('div');
            $file.innerText = file.name;
            $file.classList.add('custom-file__file');
            var close = document.createElement('div');
            close.classList.add('custom-file__fileClose');
            close.innerHTML = '&times;';
            $file.appendChild(close);
            $files.appendChild($file);
            size += file.size;
            close.addEventListener('click', function () {
              var size = 0;
              var newFiles = new DataTransfer();

              var _iterator = _createForOfIteratorHelper(files),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _file = _step.value;

                  if (_file !== files[index]) {
                    newFiles.items.add(_file);
                    size += _file.size;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this.$.size.innerText = sizeConvert(size);
              _this.$.input.files = newFiles.files;
              $files.removeChild($file);
            });
          });
          _this.$.size.innerText = sizeConvert(size);

          _this.$.customFile.appendChild($files);
        }
      });
    }
  }]);

  return CustomFile;
}();

/* harmony default export */ __webpack_exports__["default"] = (CustomFile);

/***/ }),

/***/ "./js/CustomRange.js":
/*!***************************!*\
  !*** ./js/CustomRange.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * CustomRange
 * v1.1.1
 */
var CustomRange = /*#__PURE__*/function () {
  function CustomRange($customRange) {
    _classCallCheck(this, CustomRange);

    this.$ = {}; // Initialize object of DOM elements.

    this.$.customRange = $customRange; // Add customRange in DOM objects.

    this._initParams();

    this._initialize();
  }
  /**
   * Initialize params
   */


  _createClass(CustomRange, [{
    key: "_initParams",
    value: function _initParams() {
      this.viewTotal = this.$.customRange.dataset.viewTotal;
      this.step = this.$.customRange.getAttribute('step');
      this.name = this.$.customRange.getAttribute('name');
    }
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      // create component
      var $createCustomRange = document.createElement('div');
      $createCustomRange.classList.add('custom-range');
      this.$.customRange.parentNode.replaceChild($createCustomRange, this.$.customRange);
      this.$.customRange = $createCustomRange; // Create input

      this.$.input = document.createElement('input');
      this.$.input.setAttribute('name', this.name);
      this.$.input.setAttribute('type', 'range'); // Create total view.

      if (this.viewTotal) {
        this.$.totalView = document.createElement('div');
        this.$.totalView.classList.add('custom-range__total');
        this.$.totalView.innerText = (this.$.input.value * this.step).toLocaleString();
      }

      this.$.customRange.appendChild(this.$.input);
      this.$.customRange.appendChild(this.$.totalView);

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$.input.addEventListener('input', function () {
        _this.$.totalView.innerText = (_this.$.input.value * _this.step).toLocaleString();
      });
      this.$.input.addEventListener('change', function () {
        _this.$.totalView.innerText = (_this.$.input.value * _this.step).toLocaleString();
      });
      this.$.input.addEventListener('input', function () {
        _this.$.input.style.background = "linear-gradient(to right, #4AA691 0%, #4AA691 ".concat(_this.$.input.value, "%, #CCCCCC ").concat(_this.$.input.value, "%, #CCCCCC 100%)");
      });
    }
  }]);

  return CustomRange;
}();

/* harmony default export */ __webpack_exports__["default"] = (CustomRange);

/***/ }),

/***/ "./js/CustomSelect.js":
/*!****************************!*\
  !*** ./js/CustomSelect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * CustomSelect
 * v1.1.0
 */
var CustomSelect = /*#__PURE__*/function () {
  function CustomSelect($customSelect) {
    _classCallCheck(this, CustomSelect);

    this.$ = {}; // Initialize object of DOM elements.

    this.$.customSelect = $customSelect; // Add custom-select in DOM objects.

    this.initParams();
    this.initialize();
  }
  /**
   * Initialize params
   */


  _createClass(CustomSelect, [{
    key: "initParams",
    value: function initParams() {
      this.name = this.$.customSelect.getAttribute('name');
      this.isFilters = this.$.customSelect.dataset.filters; // Set filters is activated.

      this.isOnMobile = this.$.customSelect.dataset.mobile; // Set custom mobile is activated.

      this.defaultLabel = this.$.customSelect.dataset.label; // Set default label.

      this.virtualLabel = this.$.customSelect.dataset.label; // Set activated label.

      this.items = Array.from(this.$.customSelect.querySelectorAll('option')); // Get items.
    }
    /**
     * Initialize component.
     */

  }, {
    key: "initialize",
    value: function initialize() {
      // create component
      var $createCustomSelect = document.createElement('div'); // $createCustomSelect.setAttribute('tabindex', '0')

      $createCustomSelect.classList.add('custom-select');
      this.$.customSelect.parentNode.replaceChild($createCustomSelect, this.$.customSelect);
      this.$.customSelect = $createCustomSelect;

      if (!this.isOnMobile && window.matchMedia('(max-width: 991px)').matches) {
        // Create the select element.
        var $select = document.createElement('select');
        $select.setAttribute('name', this.name); // Create the default select option.

        var $defaultOption = document.createElement('option');
        $defaultOption.setAttribute('value', '');
        $defaultOption.innerText = this.defaultLabel;
        $select.appendChild($defaultOption); // Create select options.

        this.items.forEach(function (item) {
          var $option = document.createElement('option');
          $option.setAttribute('value', item.value);
          $option.setAttribute('role', 'button');
          $option.innerText = item.innerText;
          $select.appendChild($option);
        });
        this.$.customSelect.innerHTML = '';
        this.$.customSelect.appendChild($select);
      } else {
        if (this.isFilters) {
          this.$.customSelect.classList.add('custom-select--filters');
        } // Create the content with elements.


        var $content = document.createElement('ul');
        $content.classList.add('custom-select__content');
        this.items.forEach(function (item) {
          var $item = document.createElement('li');
          $item.dataset.label = item.innerText;
          $item.dataset.value = item.value;
          $item.setAttribute('role', 'button');
          $item.setAttribute('tabindex', '0');
          $item.innerText = item.innerText;
          $item.classList.add('custom-select__item');
          $content.appendChild($item);
        }); // Create the button.

        this.$.choose = document.createElement('button');
        this.$.choose.setAttribute('type', 'button');
        this.$.choose.setAttribute('id', this.name);
        this.$.choose.classList.add('custom-select__choose');

        if (!this.isFilters) {
          this.$.choose.innerHTML = this.defaultLabel;
        } // Create wrapping container for content.


        var $container = document.createElement('div');
        $container.classList.add('custom-select__container');
        $container.appendChild($content);
        this.$.customSelect.innerHTML = '';
        this.$.customSelect.appendChild(this.$.choose);
        this.$.customSelect.appendChild($container); // Create input for select value.

        this.$.input = document.createElement('input');
        this.$.input.setAttribute('name', this.name);
        this.$.input.style.display = 'none';
        this.$.customSelect.appendChild(this.$.input);
        this.$.items = Array.from(this.$.customSelect.querySelectorAll('.custom-select__item')); // Create the filter input.

        if (this.isFilters) {
          this.$.filter = document.createElement('input');
          this.$.filter.value = this.defaultLabel;
          this.$.choose.appendChild(this.$.filter);
        }
      }

      this.setPosition();
      this.events();
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      if (window.innerHeight - (this.$.customSelect.getBoundingClientRect().top + this.$.customSelect.querySelector('.custom-select__choose').offsetHeight) < this.$.customSelect.querySelector('.custom-select__content').offsetHeight) {
        this.$.customSelect.classList.add('custom-select--top');
      } else {
        this.$.customSelect.classList.remove('custom-select--top');
      }
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      document.addEventListener('scroll', function () {
        _this.setPosition();
      });

      if (!this.isOnMobile && window.matchMedia('(min-width: 992px)').matches || this.isOnMobile) {
        this.$.choose.addEventListener('click', function () {
          if (_this.$.customSelect.classList.contains('custom-select--open')) {
            _this.$.customSelect.classList.remove('custom-select--open');

            _this.$.customSelect.classList.remove('custom-select--finish');
          } else {
            _this.$.customSelect.classList.add('custom-select--open');

            setTimeout(function () {
              _this.$.customSelect.classList.toggle('custom-select--finish');
            }, 200);
          }
        });

        if (this.isFilters) {
          this.$.filter.addEventListener('click', function (event) {
            event.stopPropagation();

            _this.$.customSelect.classList.add('custom-select--open');

            setTimeout(function () {
              _this.$.customSelect.classList.add('custom-select--finish');
            }, 200);
          });
        }

        this.$.items.forEach(function ($item) {
          $item.addEventListener('click', function () {
            _this.changeValue($item);
          }); // keyboard navigation

          $item.addEventListener('keyup', function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (event.code === 'Enter') _this.changeValue($item);
          });
        });

        if (this.isFilters) {
          this.$.filter.addEventListener('click', function () {
            _this.$.filter.value = '';

            _this.$.filter.setAttribute('placeholder', _this.virtualLabel);

            _this.$.items.forEach(function ($item) {
              var $newItem = $item;
              $newItem.style.display = 'block';
            });
          });
          this.$.filter.addEventListener('input', function () {
            _this.$.items.forEach(function ($item) {
              if ($item.innerText.toLowerCase().includes(_this.$.filter.value)) {
                var $newItem = $item;
                $newItem.style.display = 'block';
              } else {
                var _$newItem = $item;
                _$newItem.style.display = 'none';
              }
            });
          });
        }

        document.addEventListener('click', function (event) {
          if (!_this.$.customSelect.contains(event.target)) {
            _this.$.customSelect.classList.remove('custom-select--open');

            _this.$.customSelect.classList.remove('custom-select--finish');

            if (_this.isFilters) {
              if (_this.$.filter.value === '') {
                _this.$.input.value = '';
                _this.$.filter.value = _this.virtualLabel;
              } else {
                _this.$.filter.value = _this.virtualLabel;
              }
            }
          }
        });
      } // window.addEventListener('resize', () => {
      //   this.initialize()
      // })

    }
  }, {
    key: "changeValue",
    value: function changeValue($item) {
      if (this.isFilters) {
        this.$.filter.value = $item.innerText;
      } else {
        this.$.choose.innerText = $item.innerText;
      }

      this.$.input.value = $item.getAttribute('value');
      this.virtualLabel = $item.innerText;
      this.$.customSelect.classList.remove('custom-select--open');
      this.$.customSelect.classList.remove('custom-select--finish');
    }
  }]);

  return CustomSelect;
}();

/* harmony default export */ __webpack_exports__["default"] = (CustomSelect);

/***/ }),

/***/ "./js/Dropdown.js":
/*!************************!*\
  !*** ./js/Dropdown.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * Dropdown
 * v1.1.0
 */
var Dropdown = /*#__PURE__*/function () {
  function Dropdown($dropdown) {
    _classCallCheck(this, Dropdown);

    this.$ = {}; // Initialize object of DOM elements.

    this.$.dropdown = $dropdown; // Add dropdown in DOM objects.

    this._initParams();

    this._initialize();
  }
  /**
   * Initialize params
   */


  _createClass(Dropdown, [{
    key: "_initParams",
    value: function _initParams() {
      this.isOnMobile = this.$.dropdown.dataset.mobile; // Set custom mobile is activated.

      this.name = this.$.dropdown.dataset.name;
    }
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      this.$.items = Array.from(this.$.dropdown.querySelectorAll('.dropdown__item')); // Create the content with elements.

      var $content = document.createElement('div');
      $content.classList.add('dropdown__content');

      var _iterator = _createForOfIteratorHelper(this.$.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var $item = _step.value;
          $content.appendChild($item);
        } // Create the button.

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.$.choose = document.createElement('button');
      this.$.choose.setAttribute('type', 'button');
      this.$.choose.classList.add('dropdown__choose');
      this.$.choose.innerHTML = this.$.dropdown.dataset.label; // Create wrapping container for content.

      var $container = document.createElement('div');
      $container.classList.add('dropdown__container');
      $container.appendChild($content);
      this.$.dropdown.innerHTML = '';
      this.$.dropdown.appendChild(this.$.choose);
      this.$.dropdown.appendChild($container);
      this.setPosition();

      this._events();
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      if (window.innerHeight - (this.$.dropdown.getBoundingClientRect().top + this.$.dropdown.querySelector('.dropdown__choose').offsetHeight) < this.$.dropdown.querySelector('.dropdown__content').offsetHeight) {
        this.$.dropdown.classList.add('dropdown--top');
      } else {
        this.$.dropdown.classList.remove('dropdown--top');
      }
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      document.addEventListener('scroll', function () {
        _this.setPosition();
      });
      this.$.choose.addEventListener('click', function () {
        _this.$.dropdown.classList.toggle('dropdown--open');
      });
      document.addEventListener('click', function (event) {
        if (!_this.$.dropdown.contains(event.target)) {
          _this.$.dropdown.classList.remove('dropdown--open');
        }
      });
      window.addEventListener('resize', function () {
        _this._initialize();
      });
    }
  }]);

  return Dropdown;
}();

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./js/FormValidation.js":
/*!******************************!*\
  !*** ./js/FormValidation.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * FormValidation
 * v1.0.0
 */
var FormValidation = /*#__PURE__*/function () {
  function FormValidation($form) {
    _classCallCheck(this, FormValidation);

    this.$ = {}; // Initialize object of DOM elements.

    this.$.form = $form; // Add form in DOM objects.

    this._initParams();

    this._initDOM();

    this._initialize();
  }
  /**
   * Initialize params
   */


  _createClass(FormValidation, [{
    key: "_initParams",
    value: function _initParams() {
      this.noInstant = !!this.$.form.dataset.noinstant;
      this.noSubmit = !!this.$.form.dataset.nosubmit;
      this.formError = false;
    }
    /**
     * Initialize DOM
     */

  }, {
    key: "_initDOM",
    value: function _initDOM() {
      this.$.inputGroups = Array.from(this.$.form.querySelectorAll('.input-group'));
    }
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      var _loop = function _loop() {
        var $inputGroup = _Array$from[_i];
        var $input = $inputGroup.querySelector('input');
        $input.addEventListener('blur', function () {
          if (!_this.noInstant) {
            _this.validate($inputGroup);
          }
        });
      };

      for (var _i = 0, _Array$from = Array.from(this.$.form.querySelectorAll('.input-group')); _i < _Array$from.length; _i++) {
        _loop();
      }

      if (!this.noSubmit) {
        this.$.form.addEventListener('submit', function (event) {
          _this.formError = false;

          for (var _i2 = 0, _Array$from2 = Array.from(_this.$.form.querySelectorAll('.input-group')); _i2 < _Array$from2.length; _i2++) {
            var $inputGroup = _Array$from2[_i2];
            if (!_this.validate($inputGroup)) _this.formError = true;
          }

          if (_this.formError) event.preventDefault();
        });
      }
    }
  }, {
    key: "validate",
    value: function validate($inputGroup) {
      var $input = $inputGroup.querySelector('input');
      var value = $input.value;
      var inputType = $input.getAttribute('type'); // rules

      var rules = {};
      if ($inputGroup.dataset.required) rules.required = $inputGroup.dataset.required;
      if ($inputGroup.dataset.minlength) rules.minLength = parseInt($inputGroup.dataset.minlength);
      if ($inputGroup.dataset.maxlength) rules.maxLength = parseInt($inputGroup.dataset.maxlength);
      if ($inputGroup.dataset.requiredmessage) rules.requiredMessage = $inputGroup.dataset.requiredmessage;
      if ($inputGroup.dataset.errorminlength) rules.errorMinLength = $inputGroup.dataset.errorminlength;
      if ($inputGroup.dataset.errormaxlength) rules.errorMaxLength = $inputGroup.dataset.errormaxlength;
      if ($inputGroup.dataset.errormessage) rules.errorMessage = $inputGroup.dataset.errormessage;

      if (inputType === 'text') {
        if (rules.required && !value) {
          this.setError($inputGroup, rules.requiredMessage || 'required');
          return false;
        } else if (rules.minLength && value.length < rules.minLength) {
          this.setError($inputGroup, rules.errorMinLength || 'too low');
          return false;
        } else if (rules.maxLength && value.length > rules.maxLength) {
          this.setError($inputGroup, rules.errorMaxLength || 'too big');
          return false;
        } else {
          this.clearError($inputGroup);
          return true;
        }
      } else if (inputType === 'number') {
        if (rules.required && !value) {
          this.setError($inputGroup, rules.requiredMessage || 'required');
          return false;
        } else if (rules.minLength && value < rules.minLength) {
          this.setError($inputGroup, rules.errorMinLength || 'too low');
          return false;
        } else if (rules.maxLength && value > rules.maxLength) {
          this.setError($inputGroup, rules.errorMaxLength || 'too big');
          return false;
        } else {
          this.clearError($inputGroup);
          return true;
        }
      } else if (inputType === 'email') {
        if (rules.required && !value) {
          this.setError($inputGroup, rules.requiredMessage || 'required');
          return false;
        } else if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
          this.setError($inputGroup, rules.errorMessage || 'not a valid email');
          return false;
        } else {
          this.clearError($inputGroup);
          return true;
        }
      } else if (inputType === 'tel') {
        if (rules.required && !value) {
          this.setError($inputGroup, rules.requiredMessage || 'required');
          return false;
        } else if (!value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)) {
          this.setError($inputGroup, rules.errorMessage || 'not a valid email');
          return false;
        } else {
          this.clearError($inputGroup);
          return true;
        }
      }
    }
  }, {
    key: "setError",
    value: function setError($inputGroup, error) {
      var $error = $inputGroup.querySelector('.input-group__error');

      if ($error) {
        $error.innerText = error;
      } else {
        $error = document.createElement('p');
        $error.classList.add('input-group__error');
        $error.innerText = error;
        $inputGroup.appendChild($error);
      }
    }
  }, {
    key: "clearError",
    value: function clearError($inputGroup) {
      var $error = $inputGroup.querySelector('.input-group__error');

      if ($error) {
        $inputGroup.removeChild($error);
      }
    }
  }]);

  return FormValidation;
}();

/* harmony default export */ __webpack_exports__["default"] = (FormValidation);

/***/ }),

/***/ "./js/Header.js":
/*!**********************!*\
  !*** ./js/Header.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * Header
 * v1.0.0
 */
var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);

    this.$ = {}; // Initialize object of DOM elements.

    this._initDOM();

    this._initParams();

    this._initialize();
  }
  /**
   * Initialize DOM
   */


  _createClass(Header, [{
    key: "_initDOM",
    value: function _initDOM() {
      this.$.header = document.querySelector('.header'); // Add header in DOM objects.

      this.$.close = this.$.header.querySelector('.header__toggle--close');
      this.$.open = this.$.header.querySelector('.header__toggle--open');
      this.$.items = Array.from(this.$.header.querySelectorAll('.header__menuItem'));
    }
    /**
     * Initialize params
     */

  }, {
    key: "_initParams",
    value: function _initParams() {}
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      if (!window.matchMedia('(min-width: 1200px)').matches) {
        this.$.open.addEventListener('click', function () {
          _this.$.header.classList.add('header--open');
        });
        this.$.close.addEventListener('click', function () {
          _this.$.header.classList.remove('header--open');
        });
        document.addEventListener('click', function (event) {
          if (!_this.$.header.contains(event.target)) _this.$.header.classList.remove('header--open');
        });

        var _iterator = _createForOfIteratorHelper(this.$.items),
            _step;

        try {
          var _loop = function _loop() {
            var item = _step.value;
            var sub = item.querySelector('.header__menuItemSub');

            if (sub) {
              var button = item.querySelector('.header__menuItemButton');
              var height = sub.offsetHeight;
              sub.style.height = 0;
              sub.style.transition = 'height 0.3s ease-in-out';
              button.addEventListener('click', function () {
                if (sub.classList.contains('header__menuItemSub--open')) {
                  sub.style.height = 0;
                  sub.classList.remove('header__menuItemSub--open');
                } else {
                  sub.style.height = "".concat(height, "px");
                  sub.classList.add('header__menuItemSub--open');
                }
              });
            }
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }]);

  return Header;
}();

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./js/InputGroup.js":
/*!**************************!*\
  !*** ./js/InputGroup.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * InputGroup
 * v1.0.1
 */
var InputGroup = /*#__PURE__*/function () {
  function InputGroup($inputGroup) {
    _classCallCheck(this, InputGroup);

    this.$ = {}; // Initialize object of DOM elements.

    this.$.inputGroup = $inputGroup; // Add inputGroup in DOM objects.

    this._initialize();
  }
  /**
   * Initialize component.
   */


  _createClass(InputGroup, [{
    key: "_initialize",
    value: function _initialize() {
      var content = this.$.inputGroup.innerHTML;
      var $content = document.createElement('div');
      $content.classList.add('input-group__content');
      $content.innerHTML = content;
      this.$.input = $content.querySelector('input');
      this.$.inputGroup.innerHTML = '';
      this.$.inputGroup.appendChild($content);

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$.input.addEventListener('focus', function () {
        _this.$.inputGroup.classList.add('input-group--active');
      });
      this.$.input.addEventListener('blur', function () {
        if (!_this.$.input.value) _this.$.inputGroup.classList.remove('input-group--active');
      });
    }
  }]);

  return InputGroup;
}();

/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

/***/ }),

/***/ "./js/Modal.js":
/*!*********************!*\
  !*** ./js/Modal.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * Modal
 * v1.0.0
 */
var Modal = /*#__PURE__*/function () {
  function Modal($modal) {
    _classCallCheck(this, Modal);

    this.$ = {}; // Initialize object of DOM elements.

    this.$.modal = $modal; // Add modal in DOM objects.

    this._initParams();

    this._initialize();
  }
  /**
   * Initialize params
   */


  _createClass(Modal, [{
    key: "_initParams",
    value: function _initParams() {}
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      if (document.querySelector(".modal-button[data-modal=\"".concat(this.$.modal.dataset.modal, "\"]"))) this.$.button = document.querySelector(".modal-button[data-modal=\"".concat(this.$.modal.dataset.modal, "\"]"));
      if (this.$.modal.querySelector('.modal__close')) this.$.close = this.$.modal.querySelector('.modal__close');

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      document.addEventListener('click', function (event) {
        if (_this.$.modal.classList.contains('modal--active')) {
          if (!_this.$.modal.querySelector('.modal__content').contains(event.target)) {
            _this.$.modal.classList.remove('modal--active');
          }
        }
      });

      if (this.$.button) {
        this.$.button.addEventListener('click', function (event) {
          event.stopPropagation();

          _this.$.modal.classList.add('modal--active');
        });
      }

      if (this.$.close) {
        this.$.close.addEventListener('click', function () {
          _this.$.modal.classList.remove('modal--active');
        });
      }
    }
  }]);

  return Modal;
}();

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./js/Reset.js":
/*!*********************!*\
  !*** ./js/Reset.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reset = function Reset() {
  _classCallCheck(this, Reset);

  document.addEventListener('keydown', function (event) {
    if (!/^[a-z0-9]$/i.test(event.key)) document.body.classList.add('keyboard');
  });
  document.addEventListener('mousedown', function () {
    document.body.classList.remove('keyboard');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Reset);

/***/ }),

/***/ "./js/Switch.js":
/*!**********************!*\
  !*** ./js/Switch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Switch
 */
var Switch = /*#__PURE__*/function () {
  function Switch($switch) {
    _classCallCheck(this, Switch);

    this.$ = {}; // initialize object of DOM elements

    this.$["switch"] = $switch; // add switch in DOM objects

    this.initParams();
    this.initialize();
  }
  /**
   * initialize params
   */


  _createClass(Switch, [{
    key: "initParams",
    value: function initParams() {
      this.active = this.$["switch"].checked;
      this.label = this.$["switch"].dataset.label;
      this.name = this.$["switch"].getAttribute('name');
    }
    /**
     * initialize component
     */

  }, {
    key: "initialize",
    value: function initialize() {
      // create component
      var $createSwitch = document.createElement('div');
      $createSwitch.setAttribute('tabindex', '0');
      $createSwitch.classList.add('switch');
      if (this.active) $createSwitch.classList.add('switch--active');
      this.$["switch"].parentNode.replaceChild($createSwitch, this.$["switch"]);
      this.$["switch"] = $createSwitch; // create container

      var $container = document.createElement('div');
      $container.classList.add('switch__container'); // create input

      this.$.input = document.createElement('input');
      this.$.input.setAttribute('name', this.name);
      this.$.input.setAttribute('type', 'checkbox');
      if (this.active) this.$.input.checked = true;
      this.$.input.style.display = 'none';
      $container.appendChild(this.$.input);
      this.$["switch"].appendChild($container); // create label

      if (this.label) {
        var $label = document.createElement('label');
        $label.setAttribute('for', this.name);
        $label.classList.add('switch__label');
        $label.innerText = this.label;
        this.$["switch"].appendChild($label);
      }

      this.events();
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      this.$["switch"].addEventListener('click', function (event) {
        event.stopPropagation();

        _this.$["switch"].classList.toggle('switch--active');

        _this.$.input.checked = !_this.$.input.checked;
      });
    }
  }]);

  return Switch;
}();

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./js/Tabs.js":
/*!********************!*\
  !*** ./js/Tabs.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * Tabs
 * v1.0.0
 */
var Tabs = /*#__PURE__*/function () {
  function Tabs($tabs) {
    _classCallCheck(this, Tabs);

    this.$ = {}; // Initialize object of DOM elements.

    this.$.tabs = $tabs; // Add modal in DOM objects.

    this._initDOM();

    this._initParams();

    this._initialize();
  }
  /**
   * Initialize DOM
   */


  _createClass(Tabs, [{
    key: "_initDOM",
    value: function _initDOM() {
      this.$.headerItems = Array.from(this.$.tabs.querySelectorAll('.tabs__headerItem'));
    }
    /**
     * Initialize params
     */

  }, {
    key: "_initParams",
    value: function _initParams() {}
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      var _iterator = _createForOfIteratorHelper(this.$.headerItems),
          _step;

      try {
        var _loop = function _loop() {
          var $headerItem = _step.value;

          var $contentItem = _this.$.tabs.querySelector(".tabs__contentItem[data-item=\"".concat($headerItem.dataset.item, "\"]"));

          $headerItem.addEventListener('click', function () {
            if (_this.$.tabs.querySelector('.tabs__headerItem--active')) _this.$.tabs.querySelector('.tabs__headerItem--active').classList.remove('tabs__headerItem--active');
            if (_this.$.tabs.querySelector('.tabs__contentItem--active')) _this.$.tabs.querySelector('.tabs__contentItem--active').classList.remove('tabs__contentItem--active');
            $headerItem.classList.add('tabs__headerItem--active');
            $contentItem.classList.add('tabs__contentItem--active');
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Tabs;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_Array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/Array.from */ "./js/polyfills/Array.from.js");
/* harmony import */ var _polyfills_Array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_Array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfills_intersectionObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills/intersectionObserver */ "./js/polyfills/intersectionObserver.js");
/* harmony import */ var _polyfills_intersectionObserver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polyfills_intersectionObserver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Accordion */ "./js/Accordion.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Animation */ "./js/Animation.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Carousel */ "./js/Carousel.js");
/* harmony import */ var _CustomFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomFile */ "./js/CustomFile.js");
/* harmony import */ var _CustomRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomRange */ "./js/CustomRange.js");
/* harmony import */ var _CustomSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomSelect */ "./js/CustomSelect.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dropdown */ "./js/Dropdown.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ "./js/Header.js");
/* harmony import */ var _InputGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InputGroup */ "./js/InputGroup.js");
/* harmony import */ var _FormValidation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormValidation */ "./js/FormValidation.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Modal */ "./js/Modal.js");
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Switch */ "./js/Switch.js");
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Reset */ "./js/Reset.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Tabs */ "./js/Tabs.js");
















var $accordions = Array.from(document.querySelectorAll('.accordion'));

for (var _i = 0, _$accordions = $accordions; _i < _$accordions.length; _i++) {
  var $accordion = _$accordions[_i];
  new _Accordion__WEBPACK_IMPORTED_MODULE_2__["default"]($accordion);
}

new _Animation__WEBPACK_IMPORTED_MODULE_3__["default"]();
var $carousels = Array.from(document.querySelectorAll('.carousel'));

for (var _i2 = 0, _$carousels = $carousels; _i2 < _$carousels.length; _i2++) {
  var $carousel = _$carousels[_i2];
  new _Carousel__WEBPACK_IMPORTED_MODULE_4__["default"]($carousel);
}

var $customFiles = Array.from(document.querySelectorAll('.custom-file'));

for (var _i3 = 0, _$customFiles = $customFiles; _i3 < _$customFiles.length; _i3++) {
  var $customFile = _$customFiles[_i3];
  new _CustomFile__WEBPACK_IMPORTED_MODULE_5__["default"]($customFile);
}

var $customRanges = Array.from(document.querySelectorAll('.custom-range'));

for (var _i4 = 0, _$customRanges = $customRanges; _i4 < _$customRanges.length; _i4++) {
  var $customRange = _$customRanges[_i4];
  new _CustomRange__WEBPACK_IMPORTED_MODULE_6__["default"]($customRange);
}

var $customSelects = Array.from(document.querySelectorAll('.custom-select'));

for (var _i5 = 0, _$customSelects = $customSelects; _i5 < _$customSelects.length; _i5++) {
  var $customSelect = _$customSelects[_i5];
  new _CustomSelect__WEBPACK_IMPORTED_MODULE_7__["default"]($customSelect);
}

var $dropdowns = Array.from(document.querySelectorAll('.dropdown'));

for (var _i6 = 0, _$dropdowns = $dropdowns; _i6 < _$dropdowns.length; _i6++) {
  var $dropdown = _$dropdowns[_i6];
  new _Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"]($dropdown);
}

if (document.querySelector('.header')) new _Header__WEBPACK_IMPORTED_MODULE_9__["default"]();
var $inputGroups = Array.from(document.querySelectorAll('.input-group'));

for (var _i7 = 0, _$inputGroups = $inputGroups; _i7 < _$inputGroups.length; _i7++) {
  var $inputGroup = _$inputGroups[_i7];
  new _InputGroup__WEBPACK_IMPORTED_MODULE_10__["default"]($inputGroup);
}

var $forms = Array.from(document.querySelectorAll('.validation'));

for (var _i8 = 0, _$forms = $forms; _i8 < _$forms.length; _i8++) {
  var $form = _$forms[_i8];
  new _FormValidation__WEBPACK_IMPORTED_MODULE_11__["default"]($form);
}

var $modals = Array.from(document.querySelectorAll('.modal'));

for (var _i9 = 0, _$modals = $modals; _i9 < _$modals.length; _i9++) {
  var $modal = _$modals[_i9];
  new _Modal__WEBPACK_IMPORTED_MODULE_12__["default"]($modal);
}

var $switchs = Array.from(document.querySelectorAll('.switch'));

for (var _i10 = 0, _$switchs = $switchs; _i10 < _$switchs.length; _i10++) {
  var $switch = _$switchs[_i10];
  new _Switch__WEBPACK_IMPORTED_MODULE_13__["default"]($switch);
}

new _Reset__WEBPACK_IMPORTED_MODULE_14__["default"]();
var $tabs = Array.from(document.querySelectorAll('.tabs'));

for (var _i11 = 0, _$tabs = $tabs; _i11 < _$tabs.length; _i11++) {
  var $tab = _$tabs[_i11];
  new _Tabs__WEBPACK_IMPORTED_MODULE_15__["default"]($tab);
}

/***/ }),

/***/ "./js/polyfills/Array.from.js":
/*!************************************!*\
  !*** ./js/polyfills/Array.from.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
}

/***/ }),

/***/ "./js/polyfills/intersectionObserver.js":
/*!**********************************************!*\
  !*** ./js/polyfills/intersectionObserver.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
;

(function () {
  'use strict'; // Exit early if we're not running in a browser.

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object') {
    return;
  } // Exit early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.


  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }

    return;
  }
  /**
   * Returns the embedding frame element, if any.
   * @param {!Document} doc
   * @return {!Element}
   */


  function getFrameElement(doc) {
    try {
      return doc.defaultView && doc.defaultView.frameElement || null;
    } catch (e) {
      // Ignore the error.
      return null;
    }
  }
  /**
   * A local reference to the root document.
   */


  var document = function (startDoc) {
    var doc = startDoc;
    var frame = getFrameElement(doc);

    while (frame) {
      doc = frame.ownerDocument;
      frame = getFrameElement(doc);
    }

    return doc;
  }(window.document);
  /**
   * An IntersectionObserver registry. This registry exists to hold a strong
   * reference to IntersectionObserver instances currently observing a target
   * element. Without this registry, instances without another reference may be
   * garbage collected.
   */


  var registry = [];
  /**
   * The signal updater for cross-origin intersection. When not null, it means
   * that the polyfill is configured to work in a cross-origin mode.
   * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
   */

  var crossOriginUpdater = null;
  /**
   * The current cross-origin intersection. Only used in the cross-origin mode.
   * @type {DOMRect|ClientRect}
   */

  var crossOriginRect = null;
  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */

  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = ensureDOMRect(entry.rootBounds);
    this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
    this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
    this.isIntersecting = !!entry.intersectionRect; // Calculates the intersection ratio.

    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height; // Sets intersection ratio.

    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */


  function IntersectionObserver(callback, opt_options) {
    var options = opt_options || {};

    if (typeof callback !== 'function') {
      throw new Error('callback must be a function');
    }

    if (options.root && options.root.nodeType != 1 && options.root.nodeType != 9) {
      throw new Error('root must be a Document or Element');
    } // Binds and throttles `this._checkForIntersections`.


    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT); // Private properties.

    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin); // Public properties.

    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function (margin) {
      return margin.value + margin.unit;
    }).join(' ');
    /** @private @const {!Array<!Document>} */

    this._monitoringDocuments = [];
    /** @private @const {!Array<function()>} */

    this._monitoringUnsubscribes = [];
  }
  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */


  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */

  IntersectionObserver.prototype.POLL_INTERVAL = null;
  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */

  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
  /**
   * Sets up the polyfill in the cross-origin mode. The result is the
   * updater function that accepts two arguments: `boundingClientRect` and
   * `intersectionRect` - just as these fields would be available to the
   * parent via `IntersectionObserverEntry`. This function should be called
   * each time the iframe receives intersection information from the parent
   * window, e.g. via messaging.
   * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
   */

  IntersectionObserver._setupCrossOriginUpdater = function () {
    if (!crossOriginUpdater) {
      /**
       * @param {DOMRect|ClientRect} boundingClientRect
       * @param {DOMRect|ClientRect} intersectionRect
       */
      crossOriginUpdater = function crossOriginUpdater(boundingClientRect, intersectionRect) {
        if (!boundingClientRect || !intersectionRect) {
          crossOriginRect = getEmptyRect();
        } else {
          crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
        }

        registry.forEach(function (observer) {
          observer._checkForIntersections();
        });
      };
    }

    return crossOriginUpdater;
  };
  /**
   * Resets the cross-origin mode.
   */


  IntersectionObserver._resetCrossOriginUpdater = function () {
    crossOriginUpdater = null;
    crossOriginRect = null;
  };
  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */


  IntersectionObserver.prototype.observe = function (target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
      return item.element == target;
    });

    if (isTargetAlreadyObserved) {
      return;
    }

    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }

    this._registerInstance();

    this._observationTargets.push({
      element: target,
      entry: null
    });

    this._monitorIntersections(target.ownerDocument);

    this._checkForIntersections();
  };
  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */


  IntersectionObserver.prototype.unobserve = function (target) {
    this._observationTargets = this._observationTargets.filter(function (item) {
      return item.element != target;
    });

    this._unmonitorIntersections(target.ownerDocument);

    if (this._observationTargets.length == 0) {
      this._unregisterInstance();
    }
  };
  /**
   * Stops observing all target elements for intersection changes.
   */


  IntersectionObserver.prototype.disconnect = function () {
    this._observationTargets = [];

    this._unmonitorAllIntersections();

    this._unregisterInstance();
  };
  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */


  IntersectionObserver.prototype.takeRecords = function () {
    var records = this._queuedEntries.slice();

    this._queuedEntries = [];
    return records;
  };
  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */


  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];
    return threshold.sort().filter(function (t, i, a) {
      if (typeof t !== 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }

      return t !== a[i - 1];
    });
  };
  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */


  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function (margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);

      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }

      return {
        value: parseFloat(parts[1]),
        unit: parts[2]
      };
    }); // Handles shorthand.

    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @param {!Document} doc
   * @private
   */


  IntersectionObserver.prototype._monitorIntersections = function (doc) {
    var win = doc.defaultView;

    if (!win) {
      // Already destroyed.
      return;
    }

    if (this._monitoringDocuments.indexOf(doc) != -1) {
      // Already monitoring.
      return;
    } // Private state for monitoring.


    var callback = this._checkForIntersections;
    var monitoringInterval = null;
    var domObserver = null; // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.

    if (this.POLL_INTERVAL) {
      monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
    } else {
      addEvent(win, 'resize', callback, true);
      addEvent(doc, 'scroll', callback, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
        domObserver = new win.MutationObserver(callback);
        domObserver.observe(doc, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }

    this._monitoringDocuments.push(doc);

    this._monitoringUnsubscribes.push(function () {
      // Get the window object again. When a friendly iframe is destroyed, it
      // will be null.
      var win = doc.defaultView;

      if (win) {
        if (monitoringInterval) {
          win.clearInterval(monitoringInterval);
        }

        removeEvent(win, 'resize', callback, true);
      }

      removeEvent(doc, 'scroll', callback, true);

      if (domObserver) {
        domObserver.disconnect();
      }
    }); // Also monitor the parent.


    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;

    if (doc != rootDoc) {
      var frame = getFrameElement(doc);

      if (frame) {
        this._monitorIntersections(frame.ownerDocument);
      }
    }
  };
  /**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */


  IntersectionObserver.prototype._unmonitorIntersections = function (doc) {
    var index = this._monitoringDocuments.indexOf(doc);

    if (index == -1) {
      return;
    }

    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document; // Check if any dependent targets are still remaining.

    var hasDependentTargets = this._observationTargets.some(function (item) {
      var itemDoc = item.element.ownerDocument; // Target is in this context.

      if (itemDoc == doc) {
        return true;
      } // Target is nested in this context.


      while (itemDoc && itemDoc != rootDoc) {
        var frame = getFrameElement(itemDoc);
        itemDoc = frame && frame.ownerDocument;

        if (itemDoc == doc) {
          return true;
        }
      }

      return false;
    });

    if (hasDependentTargets) {
      return;
    } // Unsubscribe.


    var unsubscribe = this._monitoringUnsubscribes[index];

    this._monitoringDocuments.splice(index, 1);

    this._monitoringUnsubscribes.splice(index, 1);

    unsubscribe(); // Also unmonitor the parent.

    if (doc != rootDoc) {
      var frame = getFrameElement(doc);

      if (frame) {
        this._unmonitorIntersections(frame.ownerDocument);
      }
    }
  };
  /**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */


  IntersectionObserver.prototype._unmonitorAllIntersections = function () {
    var unsubscribes = this._monitoringUnsubscribes.slice(0);

    this._monitoringDocuments.length = 0;
    this._monitoringUnsubscribes.length = 0;

    for (var i = 0; i < unsubscribes.length; i++) {
      unsubscribes[i]();
    }
  };
  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */


  IntersectionObserver.prototype._checkForIntersections = function () {
    if (!this.root && crossOriginUpdater && !crossOriginRect) {
      // Cross origin monitoring, but no initial data available yet.
      return;
    }

    var rootIsInDom = this._rootIsInDom();

    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

    this._observationTargets.forEach(function (item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);

      var rootContainsTarget = this._rootContainsTarget(target);

      var oldEntry = item.entry;

      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);

      var rootBounds = null;

      if (!this._rootContainsTarget(target)) {
        rootBounds = getEmptyRect();
      } else if (!crossOriginUpdater || this.root) {
        rootBounds = rootRect;
      }

      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootBounds,
        intersectionRect: intersectionRect
      });

      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);

    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} targetRect The bounding rect of the target.
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */


  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, targetRect, rootRect) {
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display == 'none') return;
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;

    while (!atRoot && parent) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {}; // If the parent isn't displayed, an intersection can't happen.

      if (parentComputedStyle.display == 'none') return null;

      if (parent == this.root || parent.nodeType ==
      /* DOCUMENT */
      9) {
        atRoot = true;

        if (parent == this.root || parent == document) {
          if (crossOriginUpdater && !this.root) {
            if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
              // A 0-size cross-origin intersection means no-intersection.
              parent = null;
              parentRect = null;
              intersectionRect = null;
            } else {
              parentRect = crossOriginRect;
            }
          } else {
            parentRect = rootRect;
          }
        } else {
          // Check if there's a frame that can be navigated to.
          var frame = getParentNode(parent);
          var frameRect = frame && getBoundingClientRect(frame);

          var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);

          if (frameRect && frameIntersect) {
            parent = frame;
            parentRect = convertFromParentRect(frameRect, frameIntersect);
          } else {
            parent = null;
            intersectionRect = null;
          }
        }
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        var doc = parent.ownerDocument;

        if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      } // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.


      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
      }

      if (!intersectionRect) break;
      parent = parent && getParentNode(parent);
    }

    return intersectionRect;
  };
  /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {ClientRect} The expanded root rect.
   * @private
   */


  IntersectionObserver.prototype._getRootRect = function () {
    var rootRect;

    if (this.root && !isDoc(this.root)) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var doc = isDoc(this.root) ? this.root : document;
      var html = doc.documentElement;
      var body = doc.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }

    return this._expandRectByRootMargin(rootRect);
  };
  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {DOMRect|ClientRect} rect The rect object to expand.
   * @return {ClientRect} The expanded rect.
   * @private
   */


  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
    var margins = this._rootMarginValues.map(function (margin, i) {
      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });

    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */


  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1; // Ignore unchanged ratios

    if (oldRatio === newRatio) return;

    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i]; // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.

      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */


  IntersectionObserver.prototype._rootIsInDom = function () {
    return !this.root || containsDeep(document, this.root);
  };
  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */


  IntersectionObserver.prototype._rootContainsTarget = function (target) {
    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;
    return containsDeep(rootDoc, target) && (!this.root || rootDoc == target.ownerDocument);
  };
  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */


  IntersectionObserver.prototype._registerInstance = function () {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };
  /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */


  IntersectionObserver.prototype._unregisterInstance = function () {
    var index = registry.indexOf(this);
    if (index != -1) registry.splice(index, 1);
  };
  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */


  function now() {
    return window.performance && performance.now && performance.now();
  }
  /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */


  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }
  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */


  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener === 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent === 'function') {
      node.attachEvent('on' + event, fn);
    }
  }
  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */


  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener === 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent === 'function') {
      node.detatchEvent('on' + event, fn);
    }
  }
  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object|?ClientRect} The intersection rect or undefined if no
   *     intersection is found.
   */


  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    } || null;
  }
  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
   */


  function getBoundingClientRect(el) {
    var rect;

    try {
      rect = el.getBoundingClientRect();
    } catch (err) {// Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }

    if (!rect) return getEmptyRect(); // Older IE

    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }

    return rect;
  }
  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {ClientRect} The empty rect.
   */


  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  /**
   * Ensure that the result has all of the necessary fields of the DOMRect.
   * Specifically this ensures that `x` and `y` fields are set.
   *
   * @param {?DOMRect|?ClientRect} rect
   * @return {?DOMRect}
   */


  function ensureDOMRect(rect) {
    // A `DOMRect` object has `x` and `y` fields.
    if (!rect || 'x' in rect) {
      return rect;
    } // A IE's `ClientRect` type does not have `x` and `y`. The same is the case
    // for internally calculated Rect objects. For the purposes of
    // `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
    // for these fields.


    return {
      top: rect.top,
      y: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      right: rect.right,
      width: rect.width,
      height: rect.height
    };
  }
  /**
   * Inverts the intersection and bounding rect from the parent (frame) BCR to
   * the local BCR space.
   * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
   * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
   * @return {ClientRect} The local root bounding rect for the parent's children.
   */


  function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
    var top = parentIntersectionRect.top - parentBoundingRect.top;
    var left = parentIntersectionRect.left - parentBoundingRect.left;
    return {
      top: top,
      left: left,
      height: parentIntersectionRect.height,
      width: parentIntersectionRect.width,
      bottom: top + parentIntersectionRect.height,
      right: left + parentIntersectionRect.width
    };
  }
  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */


  function containsDeep(parent, child) {
    var node = child;

    while (node) {
      if (node == parent) return true;
      node = getParentNode(node);
    }

    return false;
  }
  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */


  function getParentNode(node) {
    var parent = node.parentNode;

    if (node.nodeType ==
    /* DOCUMENT */
    9 && node != document) {
      // If this node is a document node, look for the embedding frame.
      return getFrameElement(node);
    } // If the parent has element that is assigned through shadow root slot


    if (parent && parent.assignedSlot) {
      parent = parent.assignedSlot.parentNode;
    }

    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }

    return parent;
  }
  /**
   * Returns true if `node` is a Document.
   * @param {!Node} node
   * @returns {boolean}
   */


  function isDoc(node) {
    return node && node.nodeType === 9;
  } // Exposes the constructors globally.


  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DdXN0b21GaWxlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVJhbmdlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9SZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vanMvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2pzL3BvbHlmaWxscy9BcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL2pzL3BvbHlmaWxscy9pbnRlcnNlY3Rpb25PYnNlcnZlci5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwicHVzaCIsIml0ZW0iLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkFuaW1hdGlvbiIsImluaXQiLCJhbmltYXRlZFRpdGxlcyIsImRvY3VtZW50IiwiYW5pbWF0ZWRUaXRsZSIsIndyYXBwZXJUaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJ3cmFwcGVyVGl0bGUyIiwic2V0RE9NIiwiZXZlbnRzIiwidGl0bGUiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmFibGVzIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiQ2Fyb3VzZWwiLCIkY2Fyb3VzZWwiLCJjYXJvdXNlbCIsIm5hdmlnYXRpb24iLCJsZWZ0IiwicmlnaHQiLCJpc1RvdWNoRGV2aWNlIiwid2luZG93IiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJ0eXBlIiwiYWN0aXZlSXRlbSIsInBhZ2luYXRpb24iLCJkcmFnIiwiYXV0byIsIm1vYmlsZU51bWJlciIsInRhYmxldE51bWJlciIsImxhcHRvcE51bWJlciIsIm51bWJlckl0ZW1zIiwibGVuZ3RoIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInNjcmVlbk51bWJlciIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiJHBhZ2luYXRpb24iLCJpIiwic2V0QXR0cmlidXRlIiwic2V0SW50ZXJ2YWwiLCJfbW92ZVJpZ2h0IiwicGFyc2VJbnQiLCJfbW92ZUxlZnQiLCJrZXlDb2RlIiwiJGJ1bGxldCIsIl9tb3ZlSXRlbXMiLCJhY3R1YWxQb3NpdGlvbiIsInRvdWNoZXMiLCJjbGllbnRYIiwicHJlc3NJdGVtcyIsInRyYW5zbGF0ZSIsImRyYWdDcmV0YWVkSXRlbSIsIl9kcmFnSXRlbXMiLCJjaGFuZ2VkVG91Y2hlcyIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIiRsYXN0SXRlbSIsImR1cGxpY2F0ZUxhc3RJdGVtIiwiY2xvbmVOb2RlIiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCIkZmlyc3RJdGVtIiwiZHVwbGljYXRlRmlyc3RJdGVtIiwiY29uc29sZSIsImxvZyIsIngiLCJ0IiwiY2xlYXJUaW1lb3V0IiwidHJhbnNpdGlvbiIsIkN1c3RvbUZpbGUiLCIkY3VzdG9tRmlsZSIsImN1c3RvbUZpbGUiLCJsYWJlbCIsImlzQnV0dG9uIiwiYnV0dG9uIiwiaXNCdXR0b25Qb3NpdGlvbiIsImJ1dHRvbnBvcyIsImlzU2l6ZSIsInNpemUiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJjb250YWluZXIiLCJpbnB1dCIsIm5hbWUiLCJkaXNwbGF5IiwiY2xpY2siLCJzaXplQ29udmVydCIsImJ5dGVzIiwic2l6ZXMiLCJNYXRoIiwiZmxvb3IiLCJjb252ZXJ0Iiwicm91bmQiLCJwb3ciLCJmaWxlIiwiZmlsZXMiLCJjbG9zZSIsInN0b3BQcm9wYWdhdGlvbiIsInZhbHVlIiwiJGZpbGVzIiwiZm9yRWFjaCIsImluZGV4IiwiJGZpbGUiLCJuZXdGaWxlcyIsIkRhdGFUcmFuc2ZlciIsIkN1c3RvbVJhbmdlIiwiJGN1c3RvbVJhbmdlIiwiY3VzdG9tUmFuZ2UiLCJ2aWV3VG90YWwiLCJzdGVwIiwiZ2V0QXR0cmlidXRlIiwiJGNyZWF0ZUN1c3RvbVJhbmdlIiwicmVwbGFjZUNoaWxkIiwidG90YWxWaWV3IiwidG9Mb2NhbGVTdHJpbmciLCJiYWNrZ3JvdW5kIiwiQ3VzdG9tU2VsZWN0IiwiJGN1c3RvbVNlbGVjdCIsImN1c3RvbVNlbGVjdCIsImluaXRQYXJhbXMiLCJpbml0aWFsaXplIiwiaXNGaWx0ZXJzIiwiZmlsdGVycyIsImlzT25Nb2JpbGUiLCJtb2JpbGUiLCJkZWZhdWx0TGFiZWwiLCJ2aXJ0dWFsTGFiZWwiLCIkY3JlYXRlQ3VzdG9tU2VsZWN0IiwiJHNlbGVjdCIsIiRkZWZhdWx0T3B0aW9uIiwiJG9wdGlvbiIsImNob29zZSIsIiRjb250YWluZXIiLCJmaWx0ZXIiLCJzZXRQb3NpdGlvbiIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwidG9nZ2xlIiwiY2hhbmdlVmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiLCIkbmV3SXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJEcm9wZG93biIsIiRkcm9wZG93biIsImRyb3Bkb3duIiwiRm9ybVZhbGlkYXRpb24iLCIkZm9ybSIsImZvcm0iLCJub0luc3RhbnQiLCJub2luc3RhbnQiLCJub1N1Ym1pdCIsIm5vc3VibWl0IiwiZm9ybUVycm9yIiwiaW5wdXRHcm91cHMiLCIkaW5wdXRHcm91cCIsIiRpbnB1dCIsInZhbGlkYXRlIiwiaW5wdXRUeXBlIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsIm1pbkxlbmd0aCIsIm1heGxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkbWVzc2FnZSIsInJlcXVpcmVkTWVzc2FnZSIsImVycm9ybWlubGVuZ3RoIiwiZXJyb3JNaW5MZW5ndGgiLCJlcnJvcm1heGxlbmd0aCIsImVycm9yTWF4TGVuZ3RoIiwiZXJyb3JtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJjbGVhckVycm9yIiwibWF0Y2giLCJlcnJvciIsIiRlcnJvciIsIkhlYWRlciIsImhlYWRlciIsIm9wZW4iLCJzdWIiLCJJbnB1dEdyb3VwIiwiaW5wdXRHcm91cCIsImNvbnRlbnQiLCJNb2RhbCIsIiRtb2RhbCIsIm1vZGFsIiwiUmVzZXQiLCJ0ZXN0Iiwia2V5IiwiYm9keSIsIlN3aXRjaCIsIiRzd2l0Y2giLCJhY3RpdmUiLCJjaGVja2VkIiwiJGNyZWF0ZVN3aXRjaCIsIiRsYWJlbCIsIlRhYnMiLCIkdGFicyIsInRhYnMiLCJoZWFkZXJJdGVtcyIsIiRoZWFkZXJJdGVtIiwiJGNvbnRlbnRJdGVtIiwiJGFjY29yZGlvbnMiLCIkY2Fyb3VzZWxzIiwiJGN1c3RvbUZpbGVzIiwiJGN1c3RvbVJhbmdlcyIsIiRjdXN0b21TZWxlY3RzIiwiJGRyb3Bkb3ducyIsIiRpbnB1dEdyb3VwcyIsIiRmb3JtcyIsIiRtb2RhbHMiLCIkc3dpdGNocyIsIiR0YWIiLCJ0b1N0ciIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaXNDYWxsYWJsZSIsImZuIiwiY2FsbCIsInRvSW50ZWdlciIsIm51bWJlciIsIk51bWJlciIsImlzTmFOIiwiaXNGaW5pdGUiLCJhYnMiLCJtYXhTYWZlSW50ZWdlciIsInRvTGVuZ3RoIiwibGVuIiwibWluIiwibWF4IiwiYXJyYXlMaWtlIiwiQyIsIlR5cGVFcnJvciIsIm1hcEZuIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiVCIsIkEiLCJrIiwia1ZhbHVlIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiZ2V0RnJhbWVFbGVtZW50IiwiZG9jIiwiZGVmYXVsdFZpZXciLCJmcmFtZUVsZW1lbnQiLCJlIiwic3RhcnREb2MiLCJmcmFtZSIsIm93bmVyRG9jdW1lbnQiLCJyZWdpc3RyeSIsImNyb3NzT3JpZ2luVXBkYXRlciIsImNyb3NzT3JpZ2luUmVjdCIsImVudHJ5IiwidGltZSIsInJvb3RCb3VuZHMiLCJlbnN1cmVET01SZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiaW50ZXJzZWN0aW9uUmVjdCIsImdldEVtcHR5UmVjdCIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0UmVjdCIsInRhcmdldEFyZWEiLCJpbnRlcnNlY3Rpb25BcmVhIiwidG9GaXhlZCIsImNhbGxiYWNrIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwiRXJyb3IiLCJyb290Iiwibm9kZVR5cGUiLCJfY2hlY2tGb3JJbnRlcnNlY3Rpb25zIiwidGhyb3R0bGUiLCJiaW5kIiwiVEhST1RUTEVfVElNRU9VVCIsIl9jYWxsYmFjayIsIl9vYnNlcnZhdGlvblRhcmdldHMiLCJfcXVldWVkRW50cmllcyIsIl9yb290TWFyZ2luVmFsdWVzIiwiX3BhcnNlUm9vdE1hcmdpbiIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGRzIiwiX2luaXRUaHJlc2hvbGRzIiwibWFwIiwibWFyZ2luIiwidW5pdCIsImpvaW4iLCJfbW9uaXRvcmluZ0RvY3VtZW50cyIsIl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzIiwiUE9MTF9JTlRFUlZBTCIsIlVTRV9NVVRBVElPTl9PQlNFUlZFUiIsIl9zZXR1cENyb3NzT3JpZ2luVXBkYXRlciIsImNvbnZlcnRGcm9tUGFyZW50UmVjdCIsIm9ic2VydmVyIiwiX3Jlc2V0Q3Jvc3NPcmlnaW5VcGRhdGVyIiwiaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQiLCJzb21lIiwiZWxlbWVudCIsIl9yZWdpc3Rlckluc3RhbmNlIiwiX21vbml0b3JJbnRlcnNlY3Rpb25zIiwiX3VubW9uaXRvckludGVyc2VjdGlvbnMiLCJfdW5yZWdpc3Rlckluc3RhbmNlIiwiZGlzY29ubmVjdCIsIl91bm1vbml0b3JBbGxJbnRlcnNlY3Rpb25zIiwidGFrZVJlY29yZHMiLCJyZWNvcmRzIiwic2xpY2UiLCJvcHRfdGhyZXNob2xkIiwiaXNBcnJheSIsInNvcnQiLCJhIiwib3B0X3Jvb3RNYXJnaW4iLCJtYXJnaW5TdHJpbmciLCJtYXJnaW5zIiwic3BsaXQiLCJwYXJ0cyIsImV4ZWMiLCJwYXJzZUZsb2F0Iiwid2luIiwiaW5kZXhPZiIsIm1vbml0b3JpbmdJbnRlcnZhbCIsImRvbU9ic2VydmVyIiwiYWRkRXZlbnQiLCJNdXRhdGlvbk9ic2VydmVyIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJzdWJ0cmVlIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50Iiwicm9vdERvYyIsImhhc0RlcGVuZGVudFRhcmdldHMiLCJpdGVtRG9jIiwidW5zdWJzY3JpYmUiLCJzcGxpY2UiLCJ1bnN1YnNjcmliZXMiLCJyb290SXNJbkRvbSIsIl9yb290SXNJbkRvbSIsInJvb3RSZWN0IiwiX2dldFJvb3RSZWN0Iiwicm9vdENvbnRhaW5zVGFyZ2V0IiwiX3Jvb3RDb250YWluc1RhcmdldCIsIm9sZEVudHJ5IiwiX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uIiwibmV3RW50cnkiLCJub3ciLCJfaGFzQ3Jvc3NlZFRocmVzaG9sZCIsImdldENvbXB1dGVkU3R5bGUiLCJwYXJlbnQiLCJnZXRQYXJlbnROb2RlIiwiYXRSb290IiwicGFyZW50UmVjdCIsInBhcmVudENvbXB1dGVkU3R5bGUiLCJmcmFtZVJlY3QiLCJmcmFtZUludGVyc2VjdCIsImRvY3VtZW50RWxlbWVudCIsIm92ZXJmbG93IiwiY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24iLCJpc0RvYyIsImh0bWwiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImNsaWVudEhlaWdodCIsIl9leHBhbmRSZWN0QnlSb290TWFyZ2luIiwicmVjdCIsIm5ld1JlY3QiLCJvbGRSYXRpbyIsIm5ld1JhdGlvIiwiY29udGFpbnNEZWVwIiwicGVyZm9ybWFuY2UiLCJ0aW1lb3V0IiwidGltZXIiLCJub2RlIiwib3B0X3VzZUNhcHR1cmUiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhdGNoRXZlbnQiLCJyZWN0MSIsInJlY3QyIiwiZWwiLCJlcnIiLCJ5IiwicGFyZW50Qm91bmRpbmdSZWN0IiwicGFyZW50SW50ZXJzZWN0aW9uUmVjdCIsImNoaWxkIiwiYXNzaWduZWRTbG90IiwiaG9zdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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ZWMsSUFBZixFQUFxQjtBQUNuQixXQUFPQSxJQUFJLElBQUlBLElBQUksQ0FBQ3RHLFFBQUwsS0FBa0IsQ0FBakM7QUFDRCxHQWwrQlUsQ0FvK0JYOzs7QUFDQWxRLFFBQU0sQ0FBQ2Isb0JBQVAsR0FBOEJBLG9CQUE5QjtBQUNBYSxRQUFNLENBQUNtTyx5QkFBUCxHQUFtQ0EseUJBQW5DO0FBQ0QsQ0F2K0JBLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi5qc1wiKTtcbiIsIi8qKioqKioqKioqXG4gKiBBY2NvcmRpb25cbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIEFjY29yZGlvbiB7XG4gIGNvbnN0cnVjdG9yKCRhY2NvcmRpb24pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmFjY29yZGlvbiA9ICRhY2NvcmRpb24gLy8gQWRkIGFjY29yZGlvbiBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19pdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHRoaXMuJC5hY2NvcmRpb24uZGF0YXNldC5tdWx0aXBsZSAvLyBTZXQgaXMgbXVsdGlwbGUgaXRlbSBvcGVuLlxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgIGlmICgkaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7Y29udGVudEhlaWdodH1weGBcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgaXRlbTogJGl0ZW0sIGhlaWdodDogY29udGVudEhlaWdodCB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9ICRjb250ZW50Lm9mZnNldEhlaWdodFxuICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCB7IGl0ZW0sIGhlaWdodCB9IG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1CdXR0b24nKVxuICAgICAgY29uc3QgJGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHsgaXRlbSB9IG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKS5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXG4iLCJjbGFzcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiQgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRET00oKSB7XG4gICAgdGhpcy4kLmFuaW1hdGVkVGl0bGVzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlZC10aXRsZScpXG4gICAgKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBmb3IgKGNvbnN0IGFuaW1hdGVkVGl0bGUgb2YgQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlZC10aXRsZScpXG4gICAgKSkge1xuICAgICAgYW5pbWF0ZWRUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZC10aXRsZScpXG4gICAgICBjb25zdCB3cmFwcGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgd3JhcHBlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkLXRpdGxlX190ZXh0JylcbiAgICAgIGFuaW1hdGVkVGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlclRpdGxlLCBhbmltYXRlZFRpdGxlKVxuICAgICAgd3JhcHBlclRpdGxlLmFwcGVuZENoaWxkKGFuaW1hdGVkVGl0bGUpXG5cbiAgICAgIGNvbnN0IHdyYXBwZXJUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgd3JhcHBlclRpdGxlMi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC10aXRsZScpXG4gICAgICB3cmFwcGVyVGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlclRpdGxlMiwgd3JhcHBlclRpdGxlKVxuICAgICAgd3JhcHBlclRpdGxlMi5hcHBlbmRDaGlsZCh3cmFwcGVyVGl0bGUpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRET00oKVxuICAgIHRoaXMuZXZlbnRzKClcbiAgfVxuXG4gIGV2ZW50cygpIHtcbiAgICBsZXQgdGl0bGUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICBvYnNlcnZhYmxlcyA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBvYnNlcnZhYmxlcykge1xuICAgICAgICAgIGlmIChpdGVtLmludGVyc2VjdGlvblJhdGlvID4gMC41KSB7XG4gICAgICAgICAgICBpdGVtLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC10aXRsZS0tdmlzaWJsZScpXG4gICAgICAgICAgICB0aXRsZS51bm9ic2VydmUoaXRlbS50YXJnZXQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aHJlc2hvbGQ6IFswLjVdXG4gICAgICB9XG4gICAgKVxuXG4gICAgZm9yIChjb25zdCBhbmltYXRlZFRpdGxlIG9mIHRoaXMuJC5hbmltYXRlZFRpdGxlcykge1xuICAgICAgdGl0bGUub2JzZXJ2ZShhbmltYXRlZFRpdGxlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25cbiIsIi8qKioqKioqKioqXG4gKiBDYXJvdXNlbFxuICogdjEuMC4xXG4gKi9cblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBjb25zdHJ1Y3RvcigkY2Fyb3VzZWwpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmNhcm91c2VsID0gJGNhcm91c2VsIC8vIEFkZCBjYXJvdXNlbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQubmF2aWdhdGlvbiA9IHtcbiAgICAgIGxlZnQ6IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2J1dHRvbi0tbGVmdCcpLFxuICAgICAgcmlnaHQ6IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2J1dHRvbi0tcmlnaHQnKVxuICAgIH1cbiAgICB0aGlzLiQuaXRlbXMgPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtcycpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNUb3VjaERldmljZSA9ICEhKFxuICAgICAgJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50c1xuICAgIClcbiAgICB0aGlzLnR5cGUgPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50eXBlXG4gICAgICA/IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnR5cGVcbiAgICAgIDogJ25vcm1hbCdcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgdGhpcy5wYWdpbmF0aW9uID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQucGFnaW5hdGlvblxuICAgIHRoaXMuZHJhZyA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmRyYWdcbiAgICB0aGlzLmF1dG8gPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5hdXRvXG4gICAgdGhpcy5tb2JpbGVOdW1iZXIgPSAxIHx8IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0Lm1vYmlsZU51bWJlclxuICAgIHRoaXMudGFibGV0TnVtYmVyID0gMiB8fCB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50YWJsZXROdW1iZXJcbiAgICB0aGlzLmxhcHRvcE51bWJlciA9IDQgfHwgdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQubGFwdG9wTnVtYmVyXG4gICAgdGhpcy5udW1iZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJylcbiAgICApLmxlbmd0aFxuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gJ211bHRpJykge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy5zY3JlZW5OdW1iZXIgPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykub2Zmc2V0V2lkdGhcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykge1xuICAgICAgICB0aGlzLnNjcmVlbk51bWJlciA9IHRoaXMubGFwdG9wTnVtYmVyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjhweCknKS5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gdGhpcy50YWJsZXROdW1iZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gdGhpcy5tb2JpbGVOdW1iZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCAkcGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkcGFnaW5hdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbicpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJJdGVtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5pdGVtID0gaSArIDFcblxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgJHBhZ2luYXRpb24uYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9XG4gICAgICB0aGlzLiQuY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoJHBhZ2luYXRpb24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0bykge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgICAgfSwgcGFyc2VJbnQodGhpcy5hdXRvKSlcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQubmF2aWdhdGlvbi5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5fbW92ZUxlZnQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQubmF2aWdhdGlvbi5yaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVSaWdodCgpXG4gICAgfSlcblxuICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHRoaXMuX21vdmVSaWdodCgpXG4gICAgfSlcblxuICAgIGZvciAoY29uc3QgJGJ1bGxldCBvZiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgKSkge1xuICAgICAgJGJ1bGxldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICRidWxsZXQuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygkYnVsbGV0LmRhdGFzZXQuaXRlbSAtIDEpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHBhcnNlSW50KCRidWxsZXQuZGF0YXNldC5pdGVtKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kcmFnKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRGV2aWNlKSB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPiB0aGlzLmFjdHVhbFBvc2l0aW9uKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA8IHRoaXMuYWN0dWFsUG9zaXRpb24pXG4gICAgICAgICAgICAgIHRoaXMuX21vdmVSaWdodCgpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcyAmJlxuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMSAmJlxuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IHRydWVcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IDBcbiAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLl9kcmFnSXRlbXMoZXZlbnQuY2xpZW50WClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuJC5pdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9faXRlbXMtLWRyYWcnKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjApIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gMjApIHRoaXMuX21vdmVSaWdodCgpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24gKyAyMCB8fFxuICAgICAgICAgICAgICBldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcyAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMSAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RyYWdJdGVtcyhjbGllbnRYKSB7XG4gICAgdGhpcy4kLml0ZW1zLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19pdGVtcy0tZHJhZycpXG4gICAgaWYgKHRoaXMucHJlc3NJdGVtcykge1xuICAgICAgaWYgKGNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gY2xpZW50WCAtIHRoaXMuYWN0dWFsUG9zaXRpb25cblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdDcmV0YWVkSXRlbSkge1xuICAgICAgICAgICAgICBjb25zdCAkbGFzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlTGFzdEl0ZW0gPSAkbGFzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0sXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggK1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdGhpcy5hY3R1YWxQb3NpdGlvbiAtIGNsaWVudFhcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICAgIGNvbnN0ICRmaXJzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmNhcm91c2VsX19pdGVtJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVGaXJzdEl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5udW1iZXJJdGVtcyAtXG4gICAgICAgICAgICAgIDEpICpcbiAgICAgICAgICAgICAgLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVMZWZ0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnIHx8IHRoaXMudHlwZSA9PT0gJ211bHRpJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2xvb3AnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMubnVtYmVySXRlbXMgLSAxLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMubnVtYmVySXRlbXNcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICBjb25zdCAkbGFzdEl0ZW0gPSB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgZHVwbGljYXRlTGFzdEl0ZW0gPSAkbGFzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUxhc3RJdGVtKVxuICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpLFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICApXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygtMSwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA8PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVSaWdodCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbm9ybWFsJyB8fCB0aGlzLnR5cGUgPT09ICdtdWx0aScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zIC0gKHRoaXMuc2NyZWVuTnVtYmVyIC0gMSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29rJylcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2xvb3AnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKDAsICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRmaXJzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgY29uc3QgZHVwbGljYXRlRmlyc3RJdGVtID0gJGZpcnN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUZpcnN0SXRlbSlcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlSXRlbXMoeCwgcG9zaXRpb24gPSBudWxsKSB7XG4gICAgbGV0IHRcbiAgICBjbGVhclRpbWVvdXQodClcbiAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQnXG4gICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7eCAqIC10aGlzLndpZHRofXB4KWBcblxuICAgIHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgIHBvc2l0aW9uID09PSAncmlnaHQnICYmXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZCh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykpXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJyksXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICBwb3NpdGlvbiA9PT0gJ2xlZnQnICYmXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZCh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLm51bWJlckl0ZW1zIC0gMSkgKlxuICAgICAgICAgIC10aGlzLndpZHRofSlgXG4gICAgICB9XG4gICAgfSwgMTAwMClcblxuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bnRoLWNoaWxkKCR7dGhpcy5hY3RpdmVJdGVtIC0gMX0pYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcylcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpudGgtY2hpbGQoJHt0aGlzLmFjdGl2ZUl0ZW0gKyAxfSlgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tRmlsZVxuICogdjEuMS4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tRmlsZSB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21GaWxlKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21GaWxlID0gJGN1c3RvbUZpbGUgLy8gQWRkIGN1c3RvbS1zZWxlY3QgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQubGFiZWxcbiAgICB0aGlzLmlzQnV0dG9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25cbiAgICB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgOiAncmlnaHQnXG4gICAgdGhpcy50eXBlID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC50eXBlXG4gICAgICA/IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQudHlwZVxuICAgICAgOiAnZmlsZSdcbiAgICB0aGlzLmlzU2l6ZSA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuc2l6ZVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMuaXNCdXR0b24pIHtcbiAgICAgIHRoaXMuJC5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuaXNCdXR0b25cbiAgICB9XG5cbiAgICB0aGlzLiQuY3VzdG9tRmlsZS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgaWYgKHRoaXMuaXNTaXplKSB7XG4gICAgICB0aGlzLiQuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2NvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuaXNTaXplXG4gICAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGxhYmVsXG4gICAgdGhpcy4kLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGhpcy4kLmxhYmVsLmlubmVyVGV4dCA9IHRoaXMubGFiZWxcbiAgICB0aGlzLiQubGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2xhYmVsJylcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmxhYmVsKVxuXG4gICAgLy8gQ3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0Lm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJylcbiAgICBpZiAodGhpcy50eXBlID09PSAnZmlsZXMnKSB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsIHRydWUpXG4gICAgZWxzZSBpZiAodGhpcy50eXBlID09PSAnZm9sZGVyJykge1xuICAgICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnd2Via2l0ZGlyZWN0b3J5JywgdHJ1ZSlcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2RpcmVjdG9yeXMnLCB0cnVlKVxuICAgIH1cbiAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuaXNTaXplXG4gICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICBpZiAodGhpcy5pc0J1dHRvbiAmJiB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuaXNTaXplXG4gICAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTaXplKSB7XG4gICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuY29udGFpbmVyKVxuXG4gICAgICAvLyBDcmVhdGUgc2l6ZSBpbmZvXG4gICAgICB0aGlzLiQuc2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgdGhpcy4kLnNpemUuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX3NpemUnKVxuICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gJzAgbWInXG4gICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuc2l6ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0LmNsaWNrKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2l6ZUNvbnZlcnQgPSBzaXplID0+IHtcbiAgICAgIGNvbnN0IGJ5dGVzID0gc2l6ZVxuICAgICAgY29uc3Qgc2l6ZXMgPSBbJ2J5dGVzJywgJ2tiJywgJ21iJywgJ2diJywgJ3RiJ11cbiAgICAgIGNvbnN0IGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSlcbiAgICAgIGNvbnN0IGNvbnZlcnQgPSBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpXG4gICAgICByZXR1cm4gYCR7Y29udmVydH0gJHtzaXplc1tpXX1gXG4gICAgfVxuXG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZUNsb3NlJylcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJyZ0aW1lczsnXG4gICAgICAgIHRoaXMuJC5jb250YWluZXIuaW5zZXJ0QmVmb3JlKGNsb3NlLCB0aGlzLiQuYnV0dG9uKVxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9IG51bGxcbiAgICAgICAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5sYWJlbFxuICAgICAgICAgIHRoaXMuJC5jb250YWluZXIucmVtb3ZlQ2hpbGQoY2xvc2UpXG4gICAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gJzAgbWInXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KGZpbGUuc2l6ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlc1xuXG4gICAgICAgIGNvbnN0ICRmaWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCBzaXplID0gMFxuXG4gICAgICAgIEFycmF5LmZyb20oZmlsZXMpLmZvckVhY2goKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgJGZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICRmaWxlLmlubmVyVGV4dCA9IGZpbGUubmFtZVxuICAgICAgICAgICRmaWxlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19maWxlJylcblxuICAgICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZUNsb3NlJylcbiAgICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnJnRpbWVzOydcblxuICAgICAgICAgICRmaWxlLmFwcGVuZENoaWxkKGNsb3NlKVxuICAgICAgICAgICRmaWxlcy5hcHBlbmRDaGlsZCgkZmlsZSlcblxuICAgICAgICAgIHNpemUgKz0gZmlsZS5zaXplXG5cbiAgICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzaXplID0gMFxuICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBuZXcgRGF0YVRyYW5zZmVyKClcbiAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgICAgICAgaWYgKGZpbGUgIT09IGZpbGVzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIG5ld0ZpbGVzLml0ZW1zLmFkZChmaWxlKVxuICAgICAgICAgICAgICAgIHNpemUgKz0gZmlsZS5zaXplXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KHNpemUpXG4gICAgICAgICAgICB0aGlzLiQuaW5wdXQuZmlsZXMgPSBuZXdGaWxlcy5maWxlc1xuICAgICAgICAgICAgJGZpbGVzLnJlbW92ZUNoaWxkKCRmaWxlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gc2l6ZUNvbnZlcnQoc2l6ZSlcblxuICAgICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCgkZmlsZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21GaWxlXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tUmFuZ2VcbiAqIHYxLjEuMVxuICovXG5cbmNsYXNzIEN1c3RvbVJhbmdlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVJhbmdlKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21SYW5nZSA9ICRjdXN0b21SYW5nZSAvLyBBZGQgY3VzdG9tUmFuZ2UgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy52aWV3VG90YWwgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC52aWV3VG90YWxcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZ2V0QXR0cmlidXRlKCdzdGVwJylcbiAgICB0aGlzLm5hbWUgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIC8vIGNyZWF0ZSBjb21wb25lbnRcbiAgICBjb25zdCAkY3JlYXRlQ3VzdG9tUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjcmVhdGVDdXN0b21SYW5nZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2UnKVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChcbiAgICAgICRjcmVhdGVDdXN0b21SYW5nZSxcbiAgICAgIHRoaXMuJC5jdXN0b21SYW5nZVxuICAgIClcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UgPSAkY3JlYXRlQ3VzdG9tUmFuZ2VcblxuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKVxuXG4gICAgLy8gQ3JlYXRlIHRvdGFsIHZpZXcuXG4gICAgaWYgKHRoaXMudmlld1RvdGFsKSB7XG4gICAgICB0aGlzLiQudG90YWxWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC50b3RhbFZpZXcuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX190b3RhbCcpXG4gICAgICB0aGlzLiQudG90YWxWaWV3LmlubmVyVGV4dCA9IChcbiAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlICogdGhpcy5zdGVwXG4gICAgICApLnRvTG9jYWxlU3RyaW5nKClcbiAgICB9XG5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQudG90YWxWaWV3KVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgdGhpcy4kLnRvdGFsVmlldy5pbm5lclRleHQgPSAoXG4gICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSAqIHRoaXMuc3RlcFxuICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgfSlcblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLiQudG90YWxWaWV3LmlubmVyVGV4dCA9IChcbiAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlICogdGhpcy5zdGVwXG4gICAgICApLnRvTG9jYWxlU3RyaW5nKClcbiAgICB9KVxuXG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0LnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNEFBNjkxIDAlLCAjNEFBNjkxICR7dGhpcy4kLmlucHV0LnZhbHVlfSUsICNDQ0NDQ0MgJHt0aGlzLiQuaW5wdXQudmFsdWV9JSwgI0NDQ0NDQyAxMDAlKWBcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJhbmdlXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tU2VsZWN0XG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBDdXN0b21TZWxlY3Qge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tU2VsZWN0KSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QgPSAkY3VzdG9tU2VsZWN0IC8vIEFkZCBjdXN0b20tc2VsZWN0IGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5pbml0UGFyYW1zKClcbiAgICB0aGlzLmluaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBpbml0UGFyYW1zKCkge1xuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICB0aGlzLmlzRmlsdGVycyA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5maWx0ZXJzIC8vIFNldCBmaWx0ZXJzIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubW9iaWxlIC8vIFNldCBjdXN0b20gbW9iaWxlIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmRlZmF1bHRMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgZGVmYXVsdCBsYWJlbC5cbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgYWN0aXZhdGVkIGxhYmVsLlxuICAgIHRoaXMuaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpIC8vIEdldCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgLy8gY3JlYXRlIGNvbXBvbmVudFxuICAgIGNvbnN0ICRjcmVhdGVDdXN0b21TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vICRjcmVhdGVDdXN0b21TZWxlY3Quc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJylcbiAgICAkY3JlYXRlQ3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QnKVxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXG4gICAgICAkY3JlYXRlQ3VzdG9tU2VsZWN0LFxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdFxuICAgIClcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0ID0gJGNyZWF0ZUN1c3RvbVNlbGVjdFxuXG4gICAgaWYgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk5MXB4KScpLm1hdGNoZXMpIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAgICBjb25zdCAkc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICRzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICRkZWZhdWx0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJylcbiAgICAgICRkZWZhdWx0T3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuZGVmYXVsdExhYmVsXG4gICAgICAkc2VsZWN0LmFwcGVuZENoaWxkKCRkZWZhdWx0T3B0aW9uKVxuXG4gICAgICAvLyBDcmVhdGUgc2VsZWN0IG9wdGlvbnMuXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLnZhbHVlKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKVxuICAgICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0uaW5uZXJUZXh0XG4gICAgICAgICRzZWxlY3QuYXBwZW5kQ2hpbGQoJG9wdGlvbilcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJHNlbGVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tZmlsdGVycycpXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCB3aXRoIGVsZW1lbnRzLlxuICAgICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jb250ZW50JylcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICRpdGVtLmRhdGFzZXQubGFiZWwgPSBpdGVtLmlubmVyVGV4dFxuICAgICAgICAkaXRlbS5kYXRhc2V0LnZhbHVlID0gaXRlbS52YWx1ZVxuICAgICAgICAkaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJylcbiAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJylcbiAgICAgICAgJGl0ZW0uaW5uZXJUZXh0ID0gaXRlbS5pbm5lclRleHRcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9faXRlbScpXG4gICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfSlcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5jaG9vc2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICB0aGlzLiQuY2hvb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLiQuY2hvb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2Nob29zZScpXG4gICAgICBpZiAoIXRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJIVE1MID0gdGhpcy5kZWZhdWx0TGFiZWxcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHdyYXBwaW5nIGNvbnRhaW5lciBmb3IgY29udGVudC5cbiAgICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jb250YWluZXInKVxuICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIGlucHV0IGZvciBzZWxlY3QgdmFsdWUuXG4gICAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgIClcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBmaWx0ZXIgaW5wdXQuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMuZGVmYXVsdExhYmVsXG4gICAgICAgIHRoaXMuJC5jaG9vc2UuYXBwZW5kQ2hpbGQodGhpcy4kLmZpbHRlcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKClcbiAgICB0aGlzLmV2ZW50cygpXG4gIH1cblxuICBzZXRQb3NpdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLVxuICAgICAgICAodGhpcy4kLmN1c3RvbVNlbGVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgK1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX2Nob29zZScpXG4gICAgICAgICAgICAub2Zmc2V0SGVpZ2h0KSA8XG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X19jb250ZW50Jykub2Zmc2V0SGVpZ2h0XG4gICAgKSB7XG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLXRvcCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tdG9wJylcbiAgICB9XG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbigpXG4gICAgfSlcblxuICAgIGlmIChcbiAgICAgICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKS5tYXRjaGVzKSB8fFxuICAgICAgdGhpcy5pc09uTW9iaWxlXG4gICAgKSB7XG4gICAgICB0aGlzLiQuY2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKSkge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG4gICAgICAgICAgfSwgMjAwKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgICAgICAgICB9LCAyMDApXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5pdGVtcy5mb3JFYWNoKCRpdGVtID0+IHtcbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSgkaXRlbSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICAgICRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB0aGlzLmNoYW5nZVZhbHVlKCRpdGVtKVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9ICcnXG4gICAgICAgICAgdGhpcy4kLmZpbHRlci5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdGhpcy52aXJ0dWFsTGFiZWwpXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5ld0l0ZW0gPSAkaXRlbVxuICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJC5pdGVtcy5mb3JFYWNoKCRpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICgkaXRlbS5pbm5lclRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLiQuZmlsdGVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICRpdGVtXG4gICAgICAgICAgICAgICRuZXdJdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICRpdGVtXG4gICAgICAgICAgICAgICRuZXdJdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuY3VzdG9tU2VsZWN0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuXG4gICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kLmZpbHRlci52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMudmlydHVhbExhYmVsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAvLyAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgLy8gfSlcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKCRpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gJGl0ZW0uaW5uZXJUZXh0XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJUZXh0ID0gJGl0ZW0uaW5uZXJUZXh0XG4gICAgfVxuXG4gICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJGl0ZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgdGhpcy52aXJ0dWFsTGFiZWwgPSAkaXRlbS5pbm5lclRleHRcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21TZWxlY3RcbiIsIi8qKioqKioqKioqXG4gKiBEcm9wZG93blxuICogdjEuMS4wXG4gKi9cblxuY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3RvcigkZHJvcGRvd24pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmRyb3Bkb3duID0gJGRyb3Bkb3duIC8vIEFkZCBkcm9wZG93biBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5tb2JpbGUgLy8gU2V0IGN1c3RvbSBtb2JpbGUgaXMgYWN0aXZhdGVkLlxuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm5hbWVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pdGVtJylcbiAgICApXG5cbiAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRlbnQnKVxuXG4gICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uLlxuICAgIHRoaXMuJC5jaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMuJC5jaG9vc2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY2hvb3NlJylcbiAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG5cbiAgICAvLyBDcmVhdGUgd3JhcHBpbmcgY29udGFpbmVyIGZvciBjb250ZW50LlxuICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRhaW5lcicpXG4gICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICB0aGlzLiQuZHJvcGRvd24uaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgIHRoaXMuc2V0UG9zaXRpb24oKVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBzZXRQb3NpdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLVxuICAgICAgICAodGhpcy4kLmRyb3Bkb3duLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArXG4gICAgICAgICAgdGhpcy4kLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9fY2hvb3NlJykub2Zmc2V0SGVpZ2h0KSA8XG4gICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19jb250ZW50Jykub2Zmc2V0SGVpZ2h0XG4gICAgKSB7XG4gICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tLXRvcCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi0tdG9wJylcbiAgICB9XG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuY2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBpZiAoIXRoaXMuJC5kcm9wZG93bi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuJC5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi0tb3BlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKioqKioqKioqKlxuICogRm9ybVZhbGlkYXRpb25cbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEZvcm1WYWxpZGF0aW9uIHtcbiAgY29uc3RydWN0b3IoJGZvcm0pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmZvcm0gPSAkZm9ybSAvLyBBZGQgZm9ybSBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLm5vSW5zdGFudCA9ICEhdGhpcy4kLmZvcm0uZGF0YXNldC5ub2luc3RhbnRcbiAgICB0aGlzLm5vU3VibWl0ID0gISF0aGlzLiQuZm9ybS5kYXRhc2V0Lm5vc3VibWl0XG4gICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaW5wdXRHcm91cHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0ICRpbnB1dEdyb3VwIG9mIEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgICkpIHtcbiAgICAgIGNvbnN0ICRpbnB1dCA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5ub0luc3RhbnQpIHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlKCRpbnB1dEdyb3VwKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5ub1N1Ym1pdCkge1xuICAgICAgdGhpcy4kLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlXG4gICAgICAgIGZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgQXJyYXkuZnJvbShcbiAgICAgICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgICAgICApKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKCRpbnB1dEdyb3VwKSkgdGhpcy5mb3JtRXJyb3IgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtRXJyb3IpIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoJGlucHV0R3JvdXApIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgY29uc3QgdmFsdWUgPSAkaW5wdXQudmFsdWVcbiAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJylcblxuICAgIC8vIHJ1bGVzXG4gICAgY29uc3QgcnVsZXMgPSB7fVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkKVxuICAgICAgcnVsZXMucmVxdWlyZWQgPSAkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQubWlubGVuZ3RoKVxuICAgICAgcnVsZXMubWluTGVuZ3RoID0gcGFyc2VJbnQoJGlucHV0R3JvdXAuZGF0YXNldC5taW5sZW5ndGgpXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQubWF4bGVuZ3RoKVxuICAgICAgcnVsZXMubWF4TGVuZ3RoID0gcGFyc2VJbnQoJGlucHV0R3JvdXAuZGF0YXNldC5tYXhsZW5ndGgpXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRtZXNzYWdlKVxuICAgICAgcnVsZXMucmVxdWlyZWRNZXNzYWdlID0gJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZG1lc3NhZ2VcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1pbmxlbmd0aClcbiAgICAgIHJ1bGVzLmVycm9yTWluTGVuZ3RoID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1pbmxlbmd0aFxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWF4bGVuZ3RoKVxuICAgICAgcnVsZXMuZXJyb3JNYXhMZW5ndGggPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWF4bGVuZ3RoXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtZXNzYWdlKVxuICAgICAgcnVsZXMuZXJyb3JNZXNzYWdlID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1lc3NhZ2VcblxuICAgIGlmIChpbnB1dFR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1pbkxlbmd0aCAmJiB2YWx1ZS5sZW5ndGggPCBydWxlcy5taW5MZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNaW5MZW5ndGggfHwgJ3RvbyBsb3cnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWF4TGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA+IHJ1bGVzLm1heExlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1heExlbmd0aCB8fCAndG9vIGJpZycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1pbkxlbmd0aCAmJiB2YWx1ZSA8IHJ1bGVzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUgPiBydWxlcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNYXhMZW5ndGggfHwgJ3RvbyBiaWcnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ2VtYWlsJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhdmFsdWUubWF0Y2goXG4gICAgICAgICAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWVzc2FnZSB8fCAnbm90IGEgdmFsaWQgZW1haWwnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ3RlbCcpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXZhbHVlLm1hdGNoKC9eKD86KD86XFwrfDAwKTMzfDApXFxzKlsxLTldKD86W1xccy4tXSpcXGR7Mn0pezR9JC8pXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNZXNzYWdlIHx8ICdub3QgYSB2YWxpZCBlbWFpbCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEVycm9yKCRpbnB1dEdyb3VwLCBlcnJvcikge1xuICAgIGxldCAkZXJyb3IgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICBpZiAoJGVycm9yKSB7XG4gICAgICAkZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JcbiAgICB9IGVsc2Uge1xuICAgICAgJGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAkZXJyb3IuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICAgICRlcnJvci5pbm5lclRleHQgPSBlcnJvclxuICAgICAgJGlucHV0R3JvdXAuYXBwZW5kQ2hpbGQoJGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyRXJyb3IoJGlucHV0R3JvdXApIHtcbiAgICBjb25zdCAkZXJyb3IgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICBpZiAoJGVycm9yKSB7XG4gICAgICAkaW5wdXRHcm91cC5yZW1vdmVDaGlsZCgkZXJyb3IpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0aW9uXG4iLCIvKioqKioqKioqKlxuICogSGVhZGVyXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSAvLyBBZGQgaGVhZGVyIGluIERPTSBvYmplY3RzLlxuICAgIHRoaXMuJC5jbG9zZSA9IHRoaXMuJC5oZWFkZXIucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdG9nZ2xlLS1jbG9zZScpXG4gICAgdGhpcy4kLm9wZW4gPSB0aGlzLiQuaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RvZ2dsZS0tb3BlbicpXG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5oZWFkZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbWVudUl0ZW0nKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGlmICghd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEyMDBweCknKS5tYXRjaGVzKSB7XG4gICAgICB0aGlzLiQub3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgdGhpcy4kLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuaGVhZGVyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXG4gICAgICAgICAgdGhpcy4kLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgICBjb25zdCBzdWIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnVJdGVtU3ViJylcbiAgICAgICAgaWYgKHN1Yikge1xuICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudUl0ZW1CdXR0b24nKVxuICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHN1Yi5vZmZzZXRIZWlnaHRcbiAgICAgICAgICBzdWIuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgIHN1Yi5zdHlsZS50cmFuc2l0aW9uID0gJ2hlaWdodCAwLjNzIGVhc2UtaW4tb3V0J1xuXG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Yi5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fbWVudUl0ZW1TdWItLW9wZW4nKSkge1xuICAgICAgICAgICAgICBzdWIuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICBzdWIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51SXRlbVN1Yi0tb3BlbicpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWIuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgICAgICBzdWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19tZW51SXRlbVN1Yi0tb3BlbicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiIsIi8qKioqKioqKioqXG4gKiBJbnB1dEdyb3VwXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBJbnB1dEdyb3VwIHtcbiAgY29uc3RydWN0b3IoJGlucHV0R3JvdXApIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmlucHV0R3JvdXAgPSAkaW5wdXRHcm91cCAvLyBBZGQgaW5wdXRHcm91cCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuJC5pbnB1dEdyb3VwLmlubmVySFRNTFxuICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cF9fY29udGVudCcpXG4gICAgJGNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudFxuICAgIHRoaXMuJC5pbnB1dCA9ICRjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXRHcm91cC5pbm5lckhUTUwgPSAnJ1xuICAgIHRoaXMuJC5pbnB1dEdyb3VwLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMuJC5pbnB1dEdyb3VwLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwLS1hY3RpdmUnKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy4kLmlucHV0LnZhbHVlKVxuICAgICAgICB0aGlzLiQuaW5wdXRHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1ncm91cC0tYWN0aXZlJylcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0R3JvdXBcbiIsIi8qKioqKioqKioqXG4gKiBNb2RhbFxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcigkbW9kYWwpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLm1vZGFsID0gJG1vZGFsIC8vIEFkZCBtb2RhbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5tb2RhbC1idXR0b25bZGF0YS1tb2RhbD1cIiR7dGhpcy4kLm1vZGFsLmRhdGFzZXQubW9kYWx9XCJdYFxuICAgICAgKVxuICAgIClcbiAgICAgIHRoaXMuJC5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1vZGFsLWJ1dHRvbltkYXRhLW1vZGFsPVwiJHt0aGlzLiQubW9kYWwuZGF0YXNldC5tb2RhbH1cIl1gXG4gICAgICApXG4gICAgaWYgKHRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJykpXG4gICAgICB0aGlzLiQuY2xvc2UgPSB0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpXG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLiQubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC0tYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jb250ZW50JykuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuJC5idXR0b24pIHtcbiAgICAgIHRoaXMuJC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJC5jbG9zZSkge1xuICAgICAgdGhpcy4kLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiY2xhc3MgUmVzZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKCEvXlthLXowLTldJC9pLnRlc3QoZXZlbnQua2V5KSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgna2V5Ym9hcmQnKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRcbiIsIi8qKlxuICogU3dpdGNoXG4gKi9cblxuY2xhc3MgU3dpdGNoIHtcbiAgY29uc3RydWN0b3IoJHN3aXRjaCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIGluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50c1xuICAgIHRoaXMuJC5zd2l0Y2ggPSAkc3dpdGNoIC8vIGFkZCBzd2l0Y2ggaW4gRE9NIG9iamVjdHNcblxuICAgIHRoaXMuaW5pdFBhcmFtcygpXG4gICAgdGhpcy5pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuJC5zd2l0Y2guY2hlY2tlZFxuICAgIHRoaXMubGFiZWwgPSB0aGlzLiQuc3dpdGNoLmRhdGFzZXQubGFiZWxcbiAgICB0aGlzLm5hbWUgPSB0aGlzLiQuc3dpdGNoLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gIH1cblxuICAvKipcbiAgICogaW5pdGlhbGl6ZSBjb21wb25lbnRcbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgLy8gY3JlYXRlIGNvbXBvbmVudFxuICAgIGNvbnN0ICRjcmVhdGVTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjcmVhdGVTd2l0Y2guc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJylcbiAgICAkY3JlYXRlU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpXG4gICAgaWYgKHRoaXMuYWN0aXZlKSAkY3JlYXRlU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaC0tYWN0aXZlJylcbiAgICB0aGlzLiQuc3dpdGNoLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKCRjcmVhdGVTd2l0Y2gsIHRoaXMuJC5zd2l0Y2gpXG4gICAgdGhpcy4kLnN3aXRjaCA9ICRjcmVhdGVTd2l0Y2hcblxuICAgIC8vIGNyZWF0ZSBjb250YWluZXJcbiAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaF9fY29udGFpbmVyJylcblxuICAgIC8vIGNyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlmICh0aGlzLmFjdGl2ZSkgdGhpcy4kLmlucHV0LmNoZWNrZWQgPSB0cnVlXG4gICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgIHRoaXMuJC5zd2l0Y2guYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgIC8vIGNyZWF0ZSBsYWJlbFxuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICBjb25zdCAkbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAkbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLm5hbWUpXG4gICAgICAkbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoX19sYWJlbCcpXG4gICAgICAkbGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5sYWJlbFxuICAgICAgdGhpcy4kLnN3aXRjaC5hcHBlbmRDaGlsZCgkbGFiZWwpXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHMoKVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIHRoaXMuJC5zd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy4kLnN3aXRjaC5jbGFzc0xpc3QudG9nZ2xlKCdzd2l0Y2gtLWFjdGl2ZScpXG4gICAgICB0aGlzLiQuaW5wdXQuY2hlY2tlZCA9ICF0aGlzLiQuaW5wdXQuY2hlY2tlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoXG4iLCIvKioqKioqKioqKlxuICogVGFic1xuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgVGFicyB7XG4gIGNvbnN0cnVjdG9yKCR0YWJzKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC50YWJzID0gJHRhYnMgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5oZWFkZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faGVhZGVySXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCAkaGVhZGVySXRlbSBvZiB0aGlzLiQuaGVhZGVySXRlbXMpIHtcbiAgICAgIGNvbnN0ICRjb250ZW50SXRlbSA9IHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGFic19fY29udGVudEl0ZW1bZGF0YS1pdGVtPVwiJHskaGVhZGVySXRlbS5kYXRhc2V0Lml0ZW19XCJdYFxuICAgICAgKVxuICAgICAgJGhlYWRlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19faGVhZGVySXRlbS0tYWN0aXZlJykpXG4gICAgICAgICAgdGhpcy4kLnRhYnNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICBpZiAodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgICAgJGhlYWRlckl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgJGNvbnRlbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuIiwiaW1wb3J0ICcuL3BvbHlmaWxscy9BcnJheS5mcm9tJ1xuaW1wb3J0ICcuL3BvbHlmaWxscy9pbnRlcnNlY3Rpb25PYnNlcnZlcidcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4vQW5pbWF0aW9uJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnXG5pbXBvcnQgQ3VzdG9tRmlsZSBmcm9tICcuL0N1c3RvbUZpbGUnXG5pbXBvcnQgQ3VzdG9tUmFuZ2UgZnJvbSAnLi9DdXN0b21SYW5nZSdcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnLi9DdXN0b21TZWxlY3QnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuL0lucHV0R3JvdXAnXG5pbXBvcnQgRm9ybVZhbGlkYXRpb24gZnJvbSAnLi9Gb3JtVmFsaWRhdGlvbidcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFN3aXRjaCBmcm9tICcuL1N3aXRjaCdcbmltcG9ydCBSZXNldCBmcm9tICcuL1Jlc2V0J1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJ1xuXG5jb25zdCAkYWNjb3JkaW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpKVxuZm9yIChjb25zdCAkYWNjb3JkaW9uIG9mICRhY2NvcmRpb25zKSB7XG4gIG5ldyBBY2NvcmRpb24oJGFjY29yZGlvbilcbn1cblxubmV3IEFuaW1hdGlvbigpXG5cbmNvbnN0ICRjYXJvdXNlbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbCcpKVxuZm9yIChjb25zdCAkY2Fyb3VzZWwgb2YgJGNhcm91c2Vscykge1xuICBuZXcgQ2Fyb3VzZWwoJGNhcm91c2VsKVxufVxuXG5jb25zdCAkY3VzdG9tRmlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZmlsZScpKVxuZm9yIChjb25zdCAkY3VzdG9tRmlsZSBvZiAkY3VzdG9tRmlsZXMpIHtcbiAgbmV3IEN1c3RvbUZpbGUoJGN1c3RvbUZpbGUpXG59XG5cbmNvbnN0ICRjdXN0b21SYW5nZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFuZ2UnKSlcbmZvciAoY29uc3QgJGN1c3RvbVJhbmdlIG9mICRjdXN0b21SYW5nZXMpIHtcbiAgbmV3IEN1c3RvbVJhbmdlKCRjdXN0b21SYW5nZSlcbn1cblxuY29uc3QgJGN1c3RvbVNlbGVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tc2VsZWN0JykpXG5mb3IgKGNvbnN0ICRjdXN0b21TZWxlY3Qgb2YgJGN1c3RvbVNlbGVjdHMpIHtcbiAgbmV3IEN1c3RvbVNlbGVjdCgkY3VzdG9tU2VsZWN0KVxufVxuXG5jb25zdCAkZHJvcGRvd25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKSlcbmZvciAoY29uc3QgJGRyb3Bkb3duIG9mICRkcm9wZG93bnMpIHtcbiAgbmV3IERyb3Bkb3duKCRkcm9wZG93bilcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSkgbmV3IEhlYWRlcigpXG5cbmNvbnN0ICRpbnB1dEdyb3VwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJykpXG5mb3IgKGNvbnN0ICRpbnB1dEdyb3VwIG9mICRpbnB1dEdyb3Vwcykge1xuICBuZXcgSW5wdXRHcm91cCgkaW5wdXRHcm91cClcbn1cblxuY29uc3QgJGZvcm1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsaWRhdGlvbicpKVxuZm9yIChjb25zdCAkZm9ybSBvZiAkZm9ybXMpIHtcbiAgbmV3IEZvcm1WYWxpZGF0aW9uKCRmb3JtKVxufVxuXG5jb25zdCAkbW9kYWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKSlcbmZvciAoY29uc3QgJG1vZGFsIG9mICRtb2RhbHMpIHtcbiAgbmV3IE1vZGFsKCRtb2RhbClcbn1cblxuY29uc3QgJHN3aXRjaHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2l0Y2gnKSlcbmZvciAoY29uc3QgJHN3aXRjaCBvZiAkc3dpdGNocykge1xuICBuZXcgU3dpdGNoKCRzd2l0Y2gpXG59XG5cbm5ldyBSZXNldCgpXG5cbmNvbnN0ICR0YWJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpKVxuZm9yIChjb25zdCAkdGFiIG9mICR0YWJzKSB7XG4gIG5ldyBUYWJzKCR0YWIpXG59XG4iLCJpZiAoIUFycmF5LmZyb20pIHtcbiAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG4gICAgdmFyIGlzQ2FsbGFibGUgPSBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICAgIH1cbiAgICB2YXIgdG9JbnRlZ2VyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBudW1iZXIgPSBOdW1iZXIodmFsdWUpXG4gICAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gbnVtYmVyXG4gICAgICB9XG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKVxuICAgIH1cbiAgICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxXG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBsZW4gPSB0b0ludGVnZXIodmFsdWUpXG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobGVuLCAwKSwgbWF4U2FmZUludGVnZXIpXG4gICAgfVxuXG4gICAgLy8gVGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiB0aGUgZnJvbSBtZXRob2QgaXMgMS5cbiAgICByZXR1cm4gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyosIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgICAvLyAxLiBMZXQgQyBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgIHZhciBDID0gdGhpc1xuXG4gICAgICAvLyAyLiBMZXQgaXRlbXMgYmUgVG9PYmplY3QoYXJyYXlMaWtlKS5cbiAgICAgIHZhciBpdGVtcyA9IE9iamVjdChhcnJheUxpa2UpXG5cbiAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cbiAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICdBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkJ1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8vIDQuIElmIG1hcGZuIGlzIHVuZGVmaW5lZCwgdGhlbiBsZXQgbWFwcGluZyBiZSBmYWxzZS5cbiAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWRcbiAgICAgIHZhciBUXG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA1LiBlbHNlXG4gICAgICAgIC8vIDUuIGEgSWYgSXNDYWxsYWJsZShtYXBmbikgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKCFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnQXJyYXkuZnJvbTogd2hlbiBwcm92aWRlZCwgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gNS4gYi4gSWYgdGhpc0FyZyB3YXMgc3VwcGxpZWQsIGxldCBUIGJlIHRoaXNBcmc7IGVsc2UgbGV0IFQgYmUgdW5kZWZpbmVkLlxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICBUID0gYXJndW1lbnRzWzJdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgLy8gMTEuIExldCBsZW4gYmUgVG9MZW5ndGgobGVuVmFsdWUpLlxuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aClcblxuICAgICAgLy8gMTMuIElmIElzQ29uc3RydWN0b3IoQykgaXMgdHJ1ZSwgdGhlblxuICAgICAgLy8gMTMuIGEuIExldCBBIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2Qgb2YgQyB3aXRoIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW0gbGVuLlxuICAgICAgLy8gMTQuIGEuIEVsc2UsIExldCBBIGJlIEFycmF5Q3JlYXRlKGxlbikuXG4gICAgICB2YXIgQSA9IGlzQ2FsbGFibGUoQykgPyBPYmplY3QobmV3IEMobGVuKSkgOiBuZXcgQXJyYXkobGVuKVxuXG4gICAgICAvLyAxNi4gTGV0IGsgYmUgMC5cbiAgICAgIHZhciBrID0gMFxuICAgICAgLy8gMTcuIFJlcGVhdCwgd2hpbGUgayA8IGxlbuKApiAoYWxzbyBzdGVwcyBhIC0gaClcbiAgICAgIHZhciBrVmFsdWVcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIGtWYWx1ZSA9IGl0ZW1zW2tdXG4gICAgICAgIGlmIChtYXBGbikge1xuICAgICAgICAgIEFba10gPVxuICAgICAgICAgICAgdHlwZW9mIFQgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgID8gbWFwRm4oa1ZhbHVlLCBrKVxuICAgICAgICAgICAgICA6IG1hcEZuLmNhbGwoVCwga1ZhbHVlLCBrKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEFba10gPSBrVmFsdWVcbiAgICAgICAgfVxuICAgICAgICBrICs9IDFcbiAgICAgIH1cbiAgICAgIC8vIDE4LiBMZXQgcHV0U3RhdHVzIGJlIFB1dChBLCBcImxlbmd0aFwiLCBsZW4sIHRydWUpLlxuICAgICAgQS5sZW5ndGggPSBsZW5cbiAgICAgIC8vIDIwLiBSZXR1cm4gQS5cbiAgICAgIHJldHVybiBBXG4gICAgfVxuICB9KSgpXG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFczQyBTT0ZUV0FSRSBBTkQgRE9DVU1FTlQgTk9USUNFIEFORCBMSUNFTlNFLlxuICpcbiAqICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcbiAqXG4gKi9cbjsoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8vIEV4aXQgZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW4gYSBicm93c2VyLlxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEV4aXQgZWFybHkgaWYgYWxsIEludGVyc2VjdGlvbk9ic2VydmVyIGFuZCBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XG4gIC8vIGZlYXR1cmVzIGFyZSBuYXRpdmVseSBzdXBwb3J0ZWQuXG4gIGlmIChcbiAgICAnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyAmJlxuICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5JyBpbiB3aW5kb3cgJiZcbiAgICAnaW50ZXJzZWN0aW9uUmF0aW8nIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZVxuICApIHtcbiAgICAvLyBNaW5pbWFsIHBvbHlmaWxsIGZvciBFZGdlIDE1J3MgbGFjayBvZiBgaXNJbnRlcnNlY3RpbmdgXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL2lzc3Vlcy8yMTFcbiAgICBpZiAoISgnaXNJbnRlcnNlY3RpbmcnIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlLFxuICAgICAgICAnaXNJbnRlcnNlY3RpbmcnLFxuICAgICAgICB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbWJlZGRpbmcgZnJhbWUgZWxlbWVudCwgaWYgYW55LlxuICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jXG4gICAqIEByZXR1cm4geyFFbGVtZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RnJhbWVFbGVtZW50KGRvYykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGRvYy5kZWZhdWx0VmlldyAmJiBkb2MuZGVmYXVsdFZpZXcuZnJhbWVFbGVtZW50KSB8fCBudWxsXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWdub3JlIHRoZSBlcnJvci5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSByb290IGRvY3VtZW50LlxuICAgKi9cbiAgdmFyIGRvY3VtZW50ID0gKGZ1bmN0aW9uKHN0YXJ0RG9jKSB7XG4gICAgdmFyIGRvYyA9IHN0YXJ0RG9jXG4gICAgdmFyIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGRvYylcbiAgICB3aGlsZSAoZnJhbWUpIHtcbiAgICAgIGRvYyA9IGZyYW1lLm93bmVyRG9jdW1lbnRcbiAgICAgIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGRvYylcbiAgICB9XG4gICAgcmV0dXJuIGRvY1xuICB9KSh3aW5kb3cuZG9jdW1lbnQpXG5cbiAgLyoqXG4gICAqIEFuIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LiBUaGlzIHJlZ2lzdHJ5IGV4aXN0cyB0byBob2xkIGEgc3Ryb25nXG4gICAqIHJlZmVyZW5jZSB0byBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZXMgY3VycmVudGx5IG9ic2VydmluZyBhIHRhcmdldFxuICAgKiBlbGVtZW50LiBXaXRob3V0IHRoaXMgcmVnaXN0cnksIGluc3RhbmNlcyB3aXRob3V0IGFub3RoZXIgcmVmZXJlbmNlIG1heSBiZVxuICAgKiBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgICovXG4gIHZhciByZWdpc3RyeSA9IFtdXG5cbiAgLyoqXG4gICAqIFRoZSBzaWduYWwgdXBkYXRlciBmb3IgY3Jvc3Mtb3JpZ2luIGludGVyc2VjdGlvbi4gV2hlbiBub3QgbnVsbCwgaXQgbWVhbnNcbiAgICogdGhhdCB0aGUgcG9seWZpbGwgaXMgY29uZmlndXJlZCB0byB3b3JrIGluIGEgY3Jvc3Mtb3JpZ2luIG1vZGUuXG4gICAqIEB0eXBlIHtmdW5jdGlvbihET01SZWN0fENsaWVudFJlY3QsIERPTVJlY3R8Q2xpZW50UmVjdCl9XG4gICAqL1xuICB2YXIgY3Jvc3NPcmlnaW5VcGRhdGVyID0gbnVsbFxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBjcm9zcy1vcmlnaW4gaW50ZXJzZWN0aW9uLiBPbmx5IHVzZWQgaW4gdGhlIGNyb3NzLW9yaWdpbiBtb2RlLlxuICAgKiBAdHlwZSB7RE9NUmVjdHxDbGllbnRSZWN0fVxuICAgKi9cbiAgdmFyIGNyb3NzT3JpZ2luUmVjdCA9IG51bGxcblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgY29uc3RydWN0b3IuXG4gICAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWVudHJ5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbnRyeSBBIGRpY3Rpb25hcnkgb2YgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KGVudHJ5KSB7XG4gICAgdGhpcy50aW1lID0gZW50cnkudGltZVxuICAgIHRoaXMudGFyZ2V0ID0gZW50cnkudGFyZ2V0XG4gICAgdGhpcy5yb290Qm91bmRzID0gZW5zdXJlRE9NUmVjdChlbnRyeS5yb290Qm91bmRzKVxuICAgIHRoaXMuYm91bmRpbmdDbGllbnRSZWN0ID0gZW5zdXJlRE9NUmVjdChlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QpXG4gICAgdGhpcy5pbnRlcnNlY3Rpb25SZWN0ID0gZW5zdXJlRE9NUmVjdChcbiAgICAgIGVudHJ5LmludGVyc2VjdGlvblJlY3QgfHwgZ2V0RW1wdHlSZWN0KClcbiAgICApXG4gICAgdGhpcy5pc0ludGVyc2VjdGluZyA9ICEhZW50cnkuaW50ZXJzZWN0aW9uUmVjdFxuXG4gICAgLy8gQ2FsY3VsYXRlcyB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvLlxuICAgIHZhciB0YXJnZXRSZWN0ID0gdGhpcy5ib3VuZGluZ0NsaWVudFJlY3RcbiAgICB2YXIgdGFyZ2V0QXJlYSA9IHRhcmdldFJlY3Qud2lkdGggKiB0YXJnZXRSZWN0LmhlaWdodFxuICAgIHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gdGhpcy5pbnRlcnNlY3Rpb25SZWN0XG4gICAgdmFyIGludGVyc2VjdGlvbkFyZWEgPSBpbnRlcnNlY3Rpb25SZWN0LndpZHRoICogaW50ZXJzZWN0aW9uUmVjdC5oZWlnaHRcblxuICAgIC8vIFNldHMgaW50ZXJzZWN0aW9uIHJhdGlvLlxuICAgIGlmICh0YXJnZXRBcmVhKSB7XG4gICAgICAvLyBSb3VuZCB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IG1hdGggaXNzdWVzOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9pc3N1ZXMvMzI0XG4gICAgICB0aGlzLmludGVyc2VjdGlvblJhdGlvID0gTnVtYmVyKFxuICAgICAgICAoaW50ZXJzZWN0aW9uQXJlYSAvIHRhcmdldEFyZWEpLnRvRml4ZWQoNClcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgYXJlYSBpcyB6ZXJvIGFuZCBpcyBpbnRlcnNlY3RpbmcsIHNldHMgdG8gMSwgb3RoZXJ3aXNlIHRvIDBcbiAgICAgIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSB0aGlzLmlzSW50ZXJzZWN0aW5nID8gMSA6IDBcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIGNvbnN0cnVjdG9yLlxuICAgKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2ludGVyc2VjdGlvbi1vYnNlcnZlci1pbnRlcmZhY2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgaW50ZXJzZWN0aW9uXG4gICAqICAgICBjaGFuZ2VzIGhhdmUgcXVldWVkLiBUaGUgZnVuY3Rpb24gaXMgbm90IGludm9rZWQgaWYgdGhlIHF1ZXVlIGhhc1xuICAgKiAgICAgYmVlbiBlbXB0aWVkIGJ5IGNhbGxpbmcgdGhlIGB0YWtlUmVjb3Jkc2AgbWV0aG9kLlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0X29wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy5yb290ICYmXG4gICAgICBvcHRpb25zLnJvb3Qubm9kZVR5cGUgIT0gMSAmJlxuICAgICAgb3B0aW9ucy5yb290Lm5vZGVUeXBlICE9IDlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncm9vdCBtdXN0IGJlIGEgRG9jdW1lbnQgb3IgRWxlbWVudCcpXG4gICAgfVxuXG4gICAgLy8gQmluZHMgYW5kIHRocm90dGxlcyBgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zYC5cbiAgICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSB0aHJvdHRsZShcbiAgICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucy5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5USFJPVFRMRV9USU1FT1VUXG4gICAgKVxuXG4gICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzLlxuICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSBbXVxuICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXVxuICAgIHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMgPSB0aGlzLl9wYXJzZVJvb3RNYXJnaW4ob3B0aW9ucy5yb290TWFyZ2luKVxuXG4gICAgLy8gUHVibGljIHByb3BlcnRpZXMuXG4gICAgdGhpcy50aHJlc2hvbGRzID0gdGhpcy5faW5pdFRocmVzaG9sZHMob3B0aW9ucy50aHJlc2hvbGQpXG4gICAgdGhpcy5yb290ID0gb3B0aW9ucy5yb290IHx8IG51bGxcbiAgICB0aGlzLnJvb3RNYXJnaW4gPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzXG4gICAgICAubWFwKGZ1bmN0aW9uKG1hcmdpbikge1xuICAgICAgICByZXR1cm4gbWFyZ2luLnZhbHVlICsgbWFyZ2luLnVuaXRcbiAgICAgIH0pXG4gICAgICAuam9pbignICcpXG5cbiAgICAvKiogQHByaXZhdGUgQGNvbnN0IHshQXJyYXk8IURvY3VtZW50Pn0gKi9cbiAgICB0aGlzLl9tb25pdG9yaW5nRG9jdW1lbnRzID0gW11cbiAgICAvKiogQHByaXZhdGUgQGNvbnN0IHshQXJyYXk8ZnVuY3Rpb24oKT59ICovXG4gICAgdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gaW50ZXJ2YWwgd2l0aGluIHdoaWNoIHRoZSBkb2N1bWVudCB3aWxsIGJlIGNoZWNrZWQgZm9yXG4gICAqIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlRIUk9UVExFX1RJTUVPVVQgPSAxMDBcblxuICAvKipcbiAgICogVGhlIGZyZXF1ZW5jeSBpbiB3aGljaCB0aGUgcG9seWZpbGwgcG9sbHMgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKiB0aGlzIGNhbiBiZSB1cGRhdGVkIG9uIGEgcGVyIGluc3RhbmNlIGJhc2lzIGFuZCBtdXN0IGJlIHNldCBwcmlvciB0b1xuICAgKiBjYWxsaW5nIGBvYnNlcnZlYCBvbiB0aGUgZmlyc3QgdGFyZ2V0LlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlBPTExfSU5URVJWQUwgPSBudWxsXG5cbiAgLyoqXG4gICAqIFVzZSBhIG11dGF0aW9uIG9ic2VydmVyIG9uIHRoZSByb290IGVsZW1lbnRcbiAgICogdG8gZGV0ZWN0IGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlVTRV9NVVRBVElPTl9PQlNFUlZFUiA9IHRydWVcblxuICAvKipcbiAgICogU2V0cyB1cCB0aGUgcG9seWZpbGwgaW4gdGhlIGNyb3NzLW9yaWdpbiBtb2RlLiBUaGUgcmVzdWx0IGlzIHRoZVxuICAgKiB1cGRhdGVyIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyB0d28gYXJndW1lbnRzOiBgYm91bmRpbmdDbGllbnRSZWN0YCBhbmRcbiAgICogYGludGVyc2VjdGlvblJlY3RgIC0ganVzdCBhcyB0aGVzZSBmaWVsZHMgd291bGQgYmUgYXZhaWxhYmxlIHRvIHRoZVxuICAgKiBwYXJlbnQgdmlhIGBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5YC4gVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkXG4gICAqIGVhY2ggdGltZSB0aGUgaWZyYW1lIHJlY2VpdmVzIGludGVyc2VjdGlvbiBpbmZvcm1hdGlvbiBmcm9tIHRoZSBwYXJlbnRcbiAgICogd2luZG93LCBlLmcuIHZpYSBtZXNzYWdpbmcuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9uKERPTVJlY3R8Q2xpZW50UmVjdCwgRE9NUmVjdHxDbGllbnRSZWN0KX1cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLl9zZXR1cENyb3NzT3JpZ2luVXBkYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghY3Jvc3NPcmlnaW5VcGRhdGVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSBib3VuZGluZ0NsaWVudFJlY3RcbiAgICAgICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSBpbnRlcnNlY3Rpb25SZWN0XG4gICAgICAgKi9cbiAgICAgIGNyb3NzT3JpZ2luVXBkYXRlciA9IGZ1bmN0aW9uKGJvdW5kaW5nQ2xpZW50UmVjdCwgaW50ZXJzZWN0aW9uUmVjdCkge1xuICAgICAgICBpZiAoIWJvdW5kaW5nQ2xpZW50UmVjdCB8fCAhaW50ZXJzZWN0aW9uUmVjdCkge1xuICAgICAgICAgIGNyb3NzT3JpZ2luUmVjdCA9IGdldEVtcHR5UmVjdCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3Jvc3NPcmlnaW5SZWN0ID0gY29udmVydEZyb21QYXJlbnRSZWN0KFxuICAgICAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0LFxuICAgICAgICAgICAgaW50ZXJzZWN0aW9uUmVjdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZWdpc3RyeS5mb3JFYWNoKGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcm9zc09yaWdpblVwZGF0ZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGNyb3NzLW9yaWdpbiBtb2RlLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIuX3Jlc2V0Q3Jvc3NPcmlnaW5VcGRhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgY3Jvc3NPcmlnaW5VcGRhdGVyID0gbnVsbFxuICAgIGNyb3NzT3JpZ2luUmVjdCA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGJhc2VkIG9uXG4gICAqIHRoZSB0aHJlc2hvbGRzIHZhbHVlcy5cbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHZhciBpc1RhcmdldEFscmVhZHlPYnNlcnZlZCA9IHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQgPT0gdGFyZ2V0XG4gICAgfSlcblxuICAgIGlmIChpc1RhcmdldEFscmVhZHlPYnNlcnZlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCEodGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PSAxKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0YXJnZXQgbXVzdCBiZSBhbiBFbGVtZW50JylcbiAgICB9XG5cbiAgICB0aGlzLl9yZWdpc3Rlckluc3RhbmNlKClcbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMucHVzaCh7IGVsZW1lbnQ6IHRhcmdldCwgZW50cnk6IG51bGwgfSlcbiAgICB0aGlzLl9tb25pdG9ySW50ZXJzZWN0aW9ucyh0YXJnZXQub3duZXJEb2N1bWVudClcbiAgICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIG9ic2VydmluZyBhIHRhcmdldCBlbGVtZW50IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5lbGVtZW50ICE9IHRhcmdldFxuICAgIH0pXG4gICAgdGhpcy5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyh0YXJnZXQub3duZXJEb2N1bWVudClcbiAgICBpZiAodGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBvYnNlcnZpbmcgYWxsIHRhcmdldCBlbGVtZW50cyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fdW5tb25pdG9yQWxsSW50ZXJzZWN0aW9ucygpXG4gICAgdGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFueSBxdWV1ZSBlbnRyaWVzIHRoYXQgaGF2ZSBub3QgeWV0IGJlZW4gcmVwb3J0ZWQgdG8gdGhlXG4gICAqIGNhbGxiYWNrIGFuZCBjbGVhcnMgdGhlIHF1ZXVlLiBUaGlzIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gICAqIGNhbGxiYWNrIHRvIG9idGFpbiB0aGUgYWJzb2x1dGUgbW9zdCB1cC10by1kYXRlIGludGVyc2VjdGlvbiBpbmZvcm1hdGlvbi5cbiAgICogQHJldHVybiB7QXJyYXl9IFRoZSBjdXJyZW50bHkgcXVldWVkIGVudHJpZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudGFrZVJlY29yZHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVjb3JkcyA9IHRoaXMuX3F1ZXVlZEVudHJpZXMuc2xpY2UoKVxuICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXVxuICAgIHJldHVybiByZWNvcmRzXG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyB0aGUgdGhyZXNob2xkIHZhbHVlIGZyb20gdGhlIHVzZXIgY29uZmlndXJhdGlvbiBvYmplY3QgYW5kXG4gICAqIHJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdW5pcXVlIHRocmVzaG9sZCB2YWx1ZXMuIElmIGEgdmFsdWUgaXMgbm90XG4gICAqIGJldHdlZW4gMCBhbmQgMSBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fG51bWJlcj19IG9wdF90aHJlc2hvbGQgQW4gb3B0aW9uYWwgdGhyZXNob2xkIHZhbHVlIG9yXG4gICAqICAgICBhIGxpc3Qgb2YgdGhyZXNob2xkIHZhbHVlcywgZGVmYXVsdGluZyB0byBbMF0uXG4gICAqIEByZXR1cm4ge0FycmF5fSBBIHNvcnRlZCBsaXN0IG9mIHVuaXF1ZSBhbmQgdmFsaWQgdGhyZXNob2xkIHZhbHVlcy5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faW5pdFRocmVzaG9sZHMgPSBmdW5jdGlvbihvcHRfdGhyZXNob2xkKSB7XG4gICAgdmFyIHRocmVzaG9sZCA9IG9wdF90aHJlc2hvbGQgfHwgWzBdXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRocmVzaG9sZCkpIHRocmVzaG9sZCA9IFt0aHJlc2hvbGRdXG5cbiAgICByZXR1cm4gdGhyZXNob2xkLnNvcnQoKS5maWx0ZXIoZnVuY3Rpb24odCwgaSwgYSkge1xuICAgICAgaWYgKHR5cGVvZiB0ICE9PSAnbnVtYmVyJyB8fCBpc05hTih0KSB8fCB0IDwgMCB8fCB0ID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ3RocmVzaG9sZCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmVseSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHQgIT09IGFbaSAtIDFdXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIHRoZSByb290TWFyZ2luIHZhbHVlIGZyb20gdGhlIHVzZXIgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICogYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGZvdXIgbWFyZ2luIHZhbHVlcyBhcyBhbiBvYmplY3QgY29udGFpbmluZ1xuICAgKiB0aGUgdmFsdWUgYW5kIHVuaXQgcHJvcGVydGllcy4gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIG5vdCBwcm9wZXJseVxuICAgKiBmb3JtYXR0ZWQgb3IgdXNlIGEgdW5pdCBvdGhlciB0aGFuIHB4IG9yICUsIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3Jvb3RNYXJnaW4gQW4gb3B0aW9uYWwgcm9vdE1hcmdpbiB2YWx1ZSxcbiAgICogICAgIGRlZmF1bHRpbmcgdG8gJzBweCcuXG4gICAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59IEFuIGFycmF5IG9mIG1hcmdpbiBvYmplY3RzIHdpdGggdGhlIGtleXNcbiAgICogICAgIHZhbHVlIGFuZCB1bml0LlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9wYXJzZVJvb3RNYXJnaW4gPSBmdW5jdGlvbihvcHRfcm9vdE1hcmdpbikge1xuICAgIHZhciBtYXJnaW5TdHJpbmcgPSBvcHRfcm9vdE1hcmdpbiB8fCAnMHB4J1xuICAgIHZhciBtYXJnaW5zID0gbWFyZ2luU3RyaW5nLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKG1hcmdpbikge1xuICAgICAgdmFyIHBhcnRzID0gL14oLT9cXGQqXFwuP1xcZCspKHB4fCUpJC8uZXhlYyhtYXJnaW4pXG4gICAgICBpZiAoIXBhcnRzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncm9vdE1hcmdpbiBtdXN0IGJlIHNwZWNpZmllZCBpbiBwaXhlbHMgb3IgcGVyY2VudCcpXG4gICAgICB9XG4gICAgICByZXR1cm4geyB2YWx1ZTogcGFyc2VGbG9hdChwYXJ0c1sxXSksIHVuaXQ6IHBhcnRzWzJdIH1cbiAgICB9KVxuXG4gICAgLy8gSGFuZGxlcyBzaG9ydGhhbmQuXG4gICAgbWFyZ2luc1sxXSA9IG1hcmdpbnNbMV0gfHwgbWFyZ2luc1swXVxuICAgIG1hcmdpbnNbMl0gPSBtYXJnaW5zWzJdIHx8IG1hcmdpbnNbMF1cbiAgICBtYXJnaW5zWzNdID0gbWFyZ2luc1szXSB8fCBtYXJnaW5zWzFdXG5cbiAgICByZXR1cm4gbWFyZ2luc1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBpZiB0aGUgcG9sbGluZyBpcyBub3QgYWxyZWFkeVxuICAgKiBoYXBwZW5pbmcsIGFuZCBpZiB0aGUgcGFnZSdzIHZpc2liaWxpdHkgc3RhdGUgaXMgdmlzaWJsZS5cbiAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKGRvYykge1xuICAgIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXdcbiAgICBpZiAoIXdpbikge1xuICAgICAgLy8gQWxyZWFkeSBkZXN0cm95ZWQuXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMuaW5kZXhPZihkb2MpICE9IC0xKSB7XG4gICAgICAvLyBBbHJlYWR5IG1vbml0b3JpbmcuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIHN0YXRlIGZvciBtb25pdG9yaW5nLlxuICAgIHZhciBjYWxsYmFjayA9IHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9uc1xuICAgIHZhciBtb25pdG9yaW5nSW50ZXJ2YWwgPSBudWxsXG4gICAgdmFyIGRvbU9ic2VydmVyID0gbnVsbFxuXG4gICAgLy8gSWYgYSBwb2xsIGludGVydmFsIGlzIHNldCwgdXNlIHBvbGxpbmcgaW5zdGVhZCBvZiBsaXN0ZW5pbmcgdG9cbiAgICAvLyByZXNpemUgYW5kIHNjcm9sbCBldmVudHMgb3IgRE9NIG11dGF0aW9ucy5cbiAgICBpZiAodGhpcy5QT0xMX0lOVEVSVkFMKSB7XG4gICAgICBtb25pdG9yaW5nSW50ZXJ2YWwgPSB3aW4uc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIHRoaXMuUE9MTF9JTlRFUlZBTClcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkRXZlbnQod2luLCAncmVzaXplJywgY2FsbGJhY2ssIHRydWUpXG4gICAgICBhZGRFdmVudChkb2MsICdzY3JvbGwnLCBjYWxsYmFjaywgdHJ1ZSlcbiAgICAgIGlmICh0aGlzLlVTRV9NVVRBVElPTl9PQlNFUlZFUiAmJiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luKSB7XG4gICAgICAgIGRvbU9ic2VydmVyID0gbmV3IHdpbi5NdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKVxuICAgICAgICBkb21PYnNlcnZlci5vYnNlcnZlKGRvYywge1xuICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMucHVzaChkb2MpXG4gICAgdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcy5wdXNoKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gR2V0IHRoZSB3aW5kb3cgb2JqZWN0IGFnYWluLiBXaGVuIGEgZnJpZW5kbHkgaWZyYW1lIGlzIGRlc3Ryb3llZCwgaXRcbiAgICAgIC8vIHdpbGwgYmUgbnVsbC5cbiAgICAgIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXdcblxuICAgICAgaWYgKHdpbikge1xuICAgICAgICBpZiAobW9uaXRvcmluZ0ludGVydmFsKSB7XG4gICAgICAgICAgd2luLmNsZWFySW50ZXJ2YWwobW9uaXRvcmluZ0ludGVydmFsKVxuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUV2ZW50KHdpbiwgJ3Jlc2l6ZScsIGNhbGxiYWNrLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICByZW1vdmVFdmVudChkb2MsICdzY3JvbGwnLCBjYWxsYmFjaywgdHJ1ZSlcbiAgICAgIGlmIChkb21PYnNlcnZlcikge1xuICAgICAgICBkb21PYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gQWxzbyBtb25pdG9yIHRoZSBwYXJlbnQuXG4gICAgdmFyIHJvb3REb2MgPVxuICAgICAgKHRoaXMucm9vdCAmJiAodGhpcy5yb290Lm93bmVyRG9jdW1lbnQgfHwgdGhpcy5yb290KSkgfHwgZG9jdW1lbnRcbiAgICBpZiAoZG9jICE9IHJvb3REb2MpIHtcbiAgICAgIHZhciBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChkb2MpXG4gICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgdGhpcy5fbW9uaXRvckludGVyc2VjdGlvbnMoZnJhbWUub3duZXJEb2N1bWVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2NcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKGRvYykge1xuICAgIHZhciBpbmRleCA9IHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMuaW5kZXhPZihkb2MpXG4gICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgcm9vdERvYyA9XG4gICAgICAodGhpcy5yb290ICYmICh0aGlzLnJvb3Qub3duZXJEb2N1bWVudCB8fCB0aGlzLnJvb3QpKSB8fCBkb2N1bWVudFxuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGRlcGVuZGVudCB0YXJnZXRzIGFyZSBzdGlsbCByZW1haW5pbmcuXG4gICAgdmFyIGhhc0RlcGVuZGVudFRhcmdldHMgPSB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuc29tZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIgaXRlbURvYyA9IGl0ZW0uZWxlbWVudC5vd25lckRvY3VtZW50XG4gICAgICAvLyBUYXJnZXQgaXMgaW4gdGhpcyBjb250ZXh0LlxuICAgICAgaWYgKGl0ZW1Eb2MgPT0gZG9jKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICAvLyBUYXJnZXQgaXMgbmVzdGVkIGluIHRoaXMgY29udGV4dC5cbiAgICAgIHdoaWxlIChpdGVtRG9jICYmIGl0ZW1Eb2MgIT0gcm9vdERvYykge1xuICAgICAgICB2YXIgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoaXRlbURvYylcbiAgICAgICAgaXRlbURvYyA9IGZyYW1lICYmIGZyYW1lLm93bmVyRG9jdW1lbnRcbiAgICAgICAgaWYgKGl0ZW1Eb2MgPT0gZG9jKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcbiAgICBpZiAoaGFzRGVwZW5kZW50VGFyZ2V0cykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVW5zdWJzY3JpYmUuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlc1tpbmRleF1cbiAgICB0aGlzLl9tb25pdG9yaW5nRG9jdW1lbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLnNwbGljZShpbmRleCwgMSlcbiAgICB1bnN1YnNjcmliZSgpXG5cbiAgICAvLyBBbHNvIHVubW9uaXRvciB0aGUgcGFyZW50LlxuICAgIGlmIChkb2MgIT0gcm9vdERvYykge1xuICAgICAgdmFyIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGRvYylcbiAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICB0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKGZyYW1lLm93bmVyRG9jdW1lbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VubW9uaXRvckFsbEludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdW5zdWJzY3JpYmVzID0gdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcy5zbGljZSgwKVxuICAgIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMubGVuZ3RoID0gMFxuICAgIHRoaXMuX21vbml0b3JpbmdVbnN1YnNjcmliZXMubGVuZ3RoID0gMFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5zdWJzY3JpYmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB1bnN1YnNjcmliZXNbaV0oKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTY2FucyBlYWNoIG9ic2VydmF0aW9uIHRhcmdldCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYW5kIGFkZHMgdGhlbVxuICAgKiB0byB0aGUgaW50ZXJuYWwgZW50cmllcyBxdWV1ZS4gSWYgbmV3IGVudHJpZXMgYXJlIGZvdW5kLCBpdFxuICAgKiBzY2hlZHVsZXMgdGhlIGNhbGxiYWNrIHRvIGJlIGludm9rZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yb290ICYmIGNyb3NzT3JpZ2luVXBkYXRlciAmJiAhY3Jvc3NPcmlnaW5SZWN0KSB7XG4gICAgICAvLyBDcm9zcyBvcmlnaW4gbW9uaXRvcmluZywgYnV0IG5vIGluaXRpYWwgZGF0YSBhdmFpbGFibGUgeWV0LlxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIHJvb3RJc0luRG9tID0gdGhpcy5fcm9vdElzSW5Eb20oKVxuICAgIHZhciByb290UmVjdCA9IHJvb3RJc0luRG9tID8gdGhpcy5fZ2V0Um9vdFJlY3QoKSA6IGdldEVtcHR5UmVjdCgpXG5cbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gaXRlbS5lbGVtZW50XG4gICAgICB2YXIgdGFyZ2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0YXJnZXQpXG4gICAgICB2YXIgcm9vdENvbnRhaW5zVGFyZ2V0ID0gdGhpcy5fcm9vdENvbnRhaW5zVGFyZ2V0KHRhcmdldClcbiAgICAgIHZhciBvbGRFbnRyeSA9IGl0ZW0uZW50cnlcbiAgICAgIHZhciBpbnRlcnNlY3Rpb25SZWN0ID1cbiAgICAgICAgcm9vdElzSW5Eb20gJiZcbiAgICAgICAgcm9vdENvbnRhaW5zVGFyZ2V0ICYmXG4gICAgICAgIHRoaXMuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uKHRhcmdldCwgdGFyZ2V0UmVjdCwgcm9vdFJlY3QpXG5cbiAgICAgIHZhciByb290Qm91bmRzID0gbnVsbFxuICAgICAgaWYgKCF0aGlzLl9yb290Q29udGFpbnNUYXJnZXQodGFyZ2V0KSkge1xuICAgICAgICByb290Qm91bmRzID0gZ2V0RW1wdHlSZWN0KClcbiAgICAgIH0gZWxzZSBpZiAoIWNyb3NzT3JpZ2luVXBkYXRlciB8fCB0aGlzLnJvb3QpIHtcbiAgICAgICAgcm9vdEJvdW5kcyA9IHJvb3RSZWN0XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdFbnRyeSA9IChpdGVtLmVudHJ5ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoe1xuICAgICAgICB0aW1lOiBub3coKSxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdDogdGFyZ2V0UmVjdCxcbiAgICAgICAgcm9vdEJvdW5kczogcm9vdEJvdW5kcyxcbiAgICAgICAgaW50ZXJzZWN0aW9uUmVjdDogaW50ZXJzZWN0aW9uUmVjdFxuICAgICAgfSkpXG5cbiAgICAgIGlmICghb2xkRW50cnkpIHtcbiAgICAgICAgdGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KVxuICAgICAgfSBlbHNlIGlmIChyb290SXNJbkRvbSAmJiByb290Q29udGFpbnNUYXJnZXQpIHtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyBlbnRyeSBpbnRlcnNlY3Rpb24gcmF0aW8gaGFzIGNyb3NzZWQgYW55IG9mIHRoZVxuICAgICAgICAvLyB0aHJlc2hvbGRzLCBhZGQgYSBuZXcgZW50cnkuXG4gICAgICAgIGlmICh0aGlzLl9oYXNDcm9zc2VkVGhyZXNob2xkKG9sZEVudHJ5LCBuZXdFbnRyeSkpIHtcbiAgICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSByb290IGlzIG5vdCBpbiB0aGUgRE9NIG9yIHRhcmdldCBpcyBub3QgY29udGFpbmVkIHdpdGhpblxuICAgICAgICAvLyByb290IGJ1dCB0aGUgcHJldmlvdXMgZW50cnkgZm9yIHRoaXMgdGFyZ2V0IGhhZCBhbiBpbnRlcnNlY3Rpb24sXG4gICAgICAgIC8vIGFkZCBhIG5ldyByZWNvcmQgaW5kaWNhdGluZyByZW1vdmFsLlxuICAgICAgICBpZiAob2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB0aGlzKVxuXG4gICAgaWYgKHRoaXMuX3F1ZXVlZEVudHJpZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9jYWxsYmFjayh0aGlzLnRha2VSZWNvcmRzKCksIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYSB0YXJnZXQgYW5kIHJvb3QgcmVjdCBjb21wdXRlcyB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gdGhlblxuICAgKiBmb2xsb3dpbmcgdGhlIGFsZ29yaXRobSBpbiB0aGUgc3BlYy5cbiAgICogVE9ETyhwaGlsaXB3YWx0b24pOiBhdCB0aGlzIHRpbWUgY2xpcC1wYXRoIGlzIG5vdCBjb25zaWRlcmVkLlxuICAgKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2NhbGN1bGF0ZS1pbnRlcnNlY3Rpb24tcmVjdC1hbGdvXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFJlY3QgVGhlIGJvdW5kaW5nIHJlY3Qgb2YgdGhlIHRhcmdldC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHJvb3RSZWN0IFRoZSBib3VuZGluZyByZWN0IG9mIHRoZSByb290IGFmdGVyIGJlaW5nXG4gICAqICAgICBleHBhbmRlZCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAgICogQHJldHVybiB7P09iamVjdH0gVGhlIGZpbmFsIGludGVyc2VjdGlvbiByZWN0IG9iamVjdCBvciB1bmRlZmluZWQgaWYgbm9cbiAgICogICAgIGludGVyc2VjdGlvbiBpcyBmb3VuZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbihcbiAgICB0YXJnZXQsXG4gICAgdGFyZ2V0UmVjdCxcbiAgICByb290UmVjdFxuICApIHtcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PSAnbm9uZScpIHJldHVyblxuXG4gICAgdmFyIGludGVyc2VjdGlvblJlY3QgPSB0YXJnZXRSZWN0XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudE5vZGUodGFyZ2V0KVxuICAgIHZhciBhdFJvb3QgPSBmYWxzZVxuXG4gICAgd2hpbGUgKCFhdFJvb3QgJiYgcGFyZW50KSB7XG4gICAgICB2YXIgcGFyZW50UmVjdCA9IG51bGxcbiAgICAgIHZhciBwYXJlbnRDb21wdXRlZFN0eWxlID1cbiAgICAgICAgcGFyZW50Lm5vZGVUeXBlID09IDEgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpIDoge31cblxuICAgICAgLy8gSWYgdGhlIHBhcmVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG4gICAgICBpZiAocGFyZW50Q29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuIG51bGxcblxuICAgICAgaWYgKHBhcmVudCA9PSB0aGlzLnJvb3QgfHwgcGFyZW50Lm5vZGVUeXBlID09IC8qIERPQ1VNRU5UICovIDkpIHtcbiAgICAgICAgYXRSb290ID0gdHJ1ZVxuICAgICAgICBpZiAocGFyZW50ID09IHRoaXMucm9vdCB8fCBwYXJlbnQgPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICBpZiAoY3Jvc3NPcmlnaW5VcGRhdGVyICYmICF0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIWNyb3NzT3JpZ2luUmVjdCB8fFxuICAgICAgICAgICAgICAoY3Jvc3NPcmlnaW5SZWN0LndpZHRoID09IDAgJiYgY3Jvc3NPcmlnaW5SZWN0LmhlaWdodCA9PSAwKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIC8vIEEgMC1zaXplIGNyb3NzLW9yaWdpbiBpbnRlcnNlY3Rpb24gbWVhbnMgbm8taW50ZXJzZWN0aW9uLlxuICAgICAgICAgICAgICBwYXJlbnQgPSBudWxsXG4gICAgICAgICAgICAgIHBhcmVudFJlY3QgPSBudWxsXG4gICAgICAgICAgICAgIGludGVyc2VjdGlvblJlY3QgPSBudWxsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJlbnRSZWN0ID0gY3Jvc3NPcmlnaW5SZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudFJlY3QgPSByb290UmVjdFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSdzIGEgZnJhbWUgdGhhdCBjYW4gYmUgbmF2aWdhdGVkIHRvLlxuICAgICAgICAgIHZhciBmcmFtZSA9IGdldFBhcmVudE5vZGUocGFyZW50KVxuICAgICAgICAgIHZhciBmcmFtZVJlY3QgPSBmcmFtZSAmJiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZnJhbWUpXG4gICAgICAgICAgdmFyIGZyYW1lSW50ZXJzZWN0ID1cbiAgICAgICAgICAgIGZyYW1lICYmXG4gICAgICAgICAgICB0aGlzLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbihmcmFtZSwgZnJhbWVSZWN0LCByb290UmVjdClcbiAgICAgICAgICBpZiAoZnJhbWVSZWN0ICYmIGZyYW1lSW50ZXJzZWN0KSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBmcmFtZVxuICAgICAgICAgICAgcGFyZW50UmVjdCA9IGNvbnZlcnRGcm9tUGFyZW50UmVjdChmcmFtZVJlY3QsIGZyYW1lSW50ZXJzZWN0KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBudWxsXG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25SZWN0ID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgbm9uLXZpc2libGUgb3ZlcmZsb3csIGFuZCBpdCdzIG5vdCB0aGUgPGJvZHk+XG4gICAgICAgIC8vIG9yIDxodG1sPiBlbGVtZW50LCB1cGRhdGUgdGhlIGludGVyc2VjdGlvbiByZWN0LlxuICAgICAgICAvLyBOb3RlOiA8Ym9keT4gYW5kIDxodG1sPiBjYW5ub3QgYmUgY2xpcHBlZCB0byBhIHJlY3QgdGhhdCdzIG5vdCBhbHNvXG4gICAgICAgIC8vIHRoZSBkb2N1bWVudCByZWN0LCBzbyBubyBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgaW50ZXJzZWN0aW9uLlxuICAgICAgICB2YXIgZG9jID0gcGFyZW50Lm93bmVyRG9jdW1lbnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBhcmVudCAhPSBkb2MuYm9keSAmJlxuICAgICAgICAgIHBhcmVudCAhPSBkb2MuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAgICAgcGFyZW50Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyAhPSAndmlzaWJsZSdcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgZWl0aGVyIG9mIHRoZSBhYm92ZSBjb25kaXRpb25hbHMgc2V0IGEgbmV3IHBhcmVudFJlY3QsXG4gICAgICAvLyBjYWxjdWxhdGUgbmV3IGludGVyc2VjdGlvbiBkYXRhLlxuICAgICAgaWYgKHBhcmVudFJlY3QpIHtcbiAgICAgICAgaW50ZXJzZWN0aW9uUmVjdCA9IGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHBhcmVudFJlY3QsIGludGVyc2VjdGlvblJlY3QpXG4gICAgICB9XG4gICAgICBpZiAoIWludGVyc2VjdGlvblJlY3QpIGJyZWFrXG4gICAgICBwYXJlbnQgPSBwYXJlbnQgJiYgZ2V0UGFyZW50Tm9kZShwYXJlbnQpXG4gICAgfVxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25SZWN0XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcm9vdCByZWN0IGFmdGVyIGJlaW5nIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtDbGllbnRSZWN0fSBUaGUgZXhwYW5kZWQgcm9vdCByZWN0LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9nZXRSb290UmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByb290UmVjdFxuICAgIGlmICh0aGlzLnJvb3QgJiYgIWlzRG9jKHRoaXMucm9vdCkpIHtcbiAgICAgIHJvb3RSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRoaXMucm9vdClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIDxodG1sPi88Ym9keT4gaW5zdGVhZCBvZiB3aW5kb3cgc2luY2Ugc2Nyb2xsIGJhcnMgYWZmZWN0IHNpemUuXG4gICAgICB2YXIgZG9jID0gaXNEb2ModGhpcy5yb290KSA/IHRoaXMucm9vdCA6IGRvY3VtZW50XG4gICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnRcbiAgICAgIHZhciBib2R5ID0gZG9jLmJvZHlcbiAgICAgIHJvb3RSZWN0ID0ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG4gICAgICAgIHdpZHRoOiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG4gICAgICAgIGJvdHRvbTogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHQsXG4gICAgICAgIGhlaWdodDogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4ocm9vdFJlY3QpXG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhIHJlY3QgYW5kIGV4cGFuZHMgaXQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSByZWN0IFRoZSByZWN0IG9iamVjdCB0byBleHBhbmQuXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBleHBhbmRlZCByZWN0LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9leHBhbmRSZWN0QnlSb290TWFyZ2luID0gZnVuY3Rpb24ocmVjdCkge1xuICAgIHZhciBtYXJnaW5zID0gdGhpcy5fcm9vdE1hcmdpblZhbHVlcy5tYXAoZnVuY3Rpb24obWFyZ2luLCBpKSB7XG4gICAgICByZXR1cm4gbWFyZ2luLnVuaXQgPT0gJ3B4J1xuICAgICAgICA/IG1hcmdpbi52YWx1ZVxuICAgICAgICA6IChtYXJnaW4udmFsdWUgKiAoaSAlIDIgPyByZWN0LndpZHRoIDogcmVjdC5oZWlnaHQpKSAvIDEwMFxuICAgIH0pXG4gICAgdmFyIG5ld1JlY3QgPSB7XG4gICAgICB0b3A6IHJlY3QudG9wIC0gbWFyZ2luc1swXSxcbiAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0ICsgbWFyZ2luc1sxXSxcbiAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20gKyBtYXJnaW5zWzJdLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0IC0gbWFyZ2luc1szXVxuICAgIH1cbiAgICBuZXdSZWN0LndpZHRoID0gbmV3UmVjdC5yaWdodCAtIG5ld1JlY3QubGVmdFxuICAgIG5ld1JlY3QuaGVpZ2h0ID0gbmV3UmVjdC5ib3R0b20gLSBuZXdSZWN0LnRvcFxuXG4gICAgcmV0dXJuIG5ld1JlY3RcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIGFuIG9sZCBhbmQgbmV3IGVudHJ5IGFuZCByZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZVxuICAgKiB0aHJlc2hvbGQgdmFsdWVzIGhhcyBiZWVuIGNyb3NzZWQuXG4gICAqIEBwYXJhbSB7P0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG9sZEVudHJ5IFRoZSBwcmV2aW91cyBlbnRyeSBmb3IgYVxuICAgKiAgICBwYXJ0aWN1bGFyIHRhcmdldCBlbGVtZW50IG9yIG51bGwgaWYgbm8gcHJldmlvdXMgZW50cnkgZXhpc3RzLlxuICAgKiBAcGFyYW0ge0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG5ld0VudHJ5IFRoZSBjdXJyZW50IGVudHJ5IGZvciBhXG4gICAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhIGFueSB0aHJlc2hvbGQgaGFzIGJlZW4gY3Jvc3NlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faGFzQ3Jvc3NlZFRocmVzaG9sZCA9IGZ1bmN0aW9uKFxuICAgIG9sZEVudHJ5LFxuICAgIG5ld0VudHJ5XG4gICkge1xuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIGVhc2llciwgYW4gZW50cnkgdGhhdCBoYXMgYSByYXRpbyBvZiAwXG4gICAgLy8gYnV0IGRvZXMgbm90IGFjdHVhbGx5IGludGVyc2VjdCBpcyBnaXZlbiBhIHZhbHVlIG9mIC0xXG4gICAgdmFyIG9sZFJhdGlvID1cbiAgICAgIG9sZEVudHJ5ICYmIG9sZEVudHJ5LmlzSW50ZXJzZWN0aW5nID8gb2xkRW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gfHwgMCA6IC0xXG4gICAgdmFyIG5ld1JhdGlvID0gbmV3RW50cnkuaXNJbnRlcnNlY3RpbmdcbiAgICAgID8gbmV3RW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gfHwgMFxuICAgICAgOiAtMVxuXG4gICAgLy8gSWdub3JlIHVuY2hhbmdlZCByYXRpb3NcbiAgICBpZiAob2xkUmF0aW8gPT09IG5ld1JhdGlvKSByZXR1cm5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50aHJlc2hvbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdGhyZXNob2xkID0gdGhpcy50aHJlc2hvbGRzW2ldXG5cbiAgICAgIC8vIFJldHVybiB0cnVlIGlmIGFuIGVudHJ5IG1hdGNoZXMgYSB0aHJlc2hvbGQgb3IgaWYgdGhlIG5ldyByYXRpb1xuICAgICAgLy8gYW5kIHRoZSBvbGQgcmF0aW8gYXJlIG9uIHRoZSBvcHBvc2l0ZSBzaWRlcyBvZiBhIHRocmVzaG9sZC5cbiAgICAgIGlmIChcbiAgICAgICAgdGhyZXNob2xkID09IG9sZFJhdGlvIHx8XG4gICAgICAgIHRocmVzaG9sZCA9PSBuZXdSYXRpbyB8fFxuICAgICAgICB0aHJlc2hvbGQgPCBvbGRSYXRpbyAhPT0gdGhyZXNob2xkIDwgbmV3UmF0aW9cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGlzIGFuIGVsZW1lbnQgYW5kIGlzIGluIHRoZSBET00uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RJc0luRG9tID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLnJvb3QgfHwgY29udGFpbnNEZWVwKGRvY3VtZW50LCB0aGlzLnJvb3QpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgdGFyZ2V0IGVsZW1lbnQgdG8gY2hlY2suXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2Ygcm9vdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdENvbnRhaW5zVGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdmFyIHJvb3REb2MgPVxuICAgICAgKHRoaXMucm9vdCAmJiAodGhpcy5yb290Lm93bmVyRG9jdW1lbnQgfHwgdGhpcy5yb290KSkgfHwgZG9jdW1lbnRcbiAgICByZXR1cm4gKFxuICAgICAgY29udGFpbnNEZWVwKHJvb3REb2MsIHRhcmdldCkgJiZcbiAgICAgICghdGhpcy5yb290IHx8IHJvb3REb2MgPT0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGluc3RhbmNlIHRvIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkgaWYgaXQgaXNuJ3RcbiAgICogYWxyZWFkeSBwcmVzZW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHJlZ2lzdHJ5LmluZGV4T2YodGhpcykgPCAwKSB7XG4gICAgICByZWdpc3RyeS5wdXNoKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGluc3RhbmNlIGZyb20gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZGV4ID0gcmVnaXN0cnkuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCAhPSAtMSkgcmVnaXN0cnkuc3BsaWNlKGluZGV4LCAxKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgcGVyZm9ybWFuY2Uubm93KCkgbWV0aG9kIG9yIG51bGwgaW4gYnJvd3NlcnNcbiAgICogdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBBUEkuXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgcGFnZSB3YXMgcmVxdWVzdGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2Uubm93ICYmIHBlcmZvcm1hbmNlLm5vdygpXG4gIH1cblxuICAvKipcbiAgICogVGhyb3R0bGVzIGEgZnVuY3Rpb24gYW5kIGRlbGF5cyBpdHMgZXhlY3V0aW9uLCBzbyBpdCdzIG9ubHkgY2FsbGVkIGF0IG1vc3RcbiAgICogb25jZSB3aXRoaW4gYSBnaXZlbiB0aW1lIHBlcmlvZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dCBUaGUgYW1vdW50IG9mIHRpbWUgdGhhdCBtdXN0IHBhc3MgYmVmb3JlIHRoZVxuICAgKiAgICAgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCBhZ2Fpbi5cbiAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiB0aHJvdHRsZShmbiwgdGltZW91dCkge1xuICAgIHZhciB0aW1lciA9IG51bGxcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRpbWVyKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBmbigpXG4gICAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICAgIH0sIHRpbWVvdXQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlciB0byBhIERPTSBub2RlIGVuc3VyaW5nIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBET00gbm9kZSB0byBhZGQgdGhlIGV2ZW50IGhhbmRsZXIgdG8uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYWRkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIE9wdGlvbmFsbHkgYWRkcyB0aGUgZXZlbiB0byB0aGUgY2FwdHVyZVxuICAgKiAgICAgcGhhc2UuIE5vdGU6IHRoaXMgb25seSB3b3JrcyBpbiBtb2Rlcm4gYnJvd3NlcnMuXG4gICAqL1xuICBmdW5jdGlvbiBhZGRFdmVudChub2RlLCBldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUuYXR0YWNoRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHByZXZpb3VzbHkgYWRkZWQgZXZlbnQgaGFuZGxlciBmcm9tIGEgRE9NIG5vZGUuXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVyIGZyb20uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gcmVtb3ZlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIElmIHRoZSBldmVudCBoYW5kbGVyIHdhcyBhZGRlZCB3aXRoIHRoaXNcbiAgICogICAgIGZsYWcgc2V0IHRvIHRydWUsIGl0IHNob3VsZCBiZSBzZXQgdG8gdHJ1ZSBoZXJlIGluIG9yZGVyIHRvIHJlbW92ZSBpdC5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZS5kZXRhdGNoRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUuZGV0YXRjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIHR3byByZWN0IG9iamVjdHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWN0MSBUaGUgZmlyc3QgcmVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QyIFRoZSBzZWNvbmQgcmVjdC5cbiAgICogQHJldHVybiB7P09iamVjdHw/Q2xpZW50UmVjdH0gVGhlIGludGVyc2VjdGlvbiByZWN0IG9yIHVuZGVmaW5lZCBpZiBub1xuICAgKiAgICAgaW50ZXJzZWN0aW9uIGlzIGZvdW5kLlxuICAgKi9cbiAgZnVuY3Rpb24gY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24ocmVjdDEsIHJlY3QyKSB7XG4gICAgdmFyIHRvcCA9IE1hdGgubWF4KHJlY3QxLnRvcCwgcmVjdDIudG9wKVxuICAgIHZhciBib3R0b20gPSBNYXRoLm1pbihyZWN0MS5ib3R0b20sIHJlY3QyLmJvdHRvbSlcbiAgICB2YXIgbGVmdCA9IE1hdGgubWF4KHJlY3QxLmxlZnQsIHJlY3QyLmxlZnQpXG4gICAgdmFyIHJpZ2h0ID0gTWF0aC5taW4ocmVjdDEucmlnaHQsIHJlY3QyLnJpZ2h0KVxuICAgIHZhciB3aWR0aCA9IHJpZ2h0IC0gbGVmdFxuICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3BcblxuICAgIHJldHVybiAoXG4gICAgICAod2lkdGggPj0gMCAmJlxuICAgICAgICBoZWlnaHQgPj0gMCAmJiB7XG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH0pIHx8XG4gICAgICBudWxsXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFNoaW1zIHRoZSBuYXRpdmUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZvciBjb21wYXRpYmlsaXR5IHdpdGggb2xkZXIgSUUuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgVGhlIGVsZW1lbnQgd2hvc2UgYm91bmRpbmcgcmVjdCB0byBnZXQuXG4gICAqIEByZXR1cm4ge0RPTVJlY3R8Q2xpZW50UmVjdH0gVGhlIChwb3NzaWJseSBzaGltbWVkKSByZWN0IG9mIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG4gICAgdmFyIHJlY3RcblxuICAgIHRyeSB7XG4gICAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElnbm9yZSBXaW5kb3dzIDcgSUUxMSBcIlVuc3BlY2lmaWVkIGVycm9yXCJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvcHVsbC8yMDVcbiAgICB9XG5cbiAgICBpZiAoIXJlY3QpIHJldHVybiBnZXRFbXB0eVJlY3QoKVxuXG4gICAgLy8gT2xkZXIgSUVcbiAgICBpZiAoIShyZWN0LndpZHRoICYmIHJlY3QuaGVpZ2h0KSkge1xuICAgICAgcmVjdCA9IHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZW1wdHkgcmVjdCBvYmplY3QuIEFuIGVtcHR5IHJlY3QgaXMgcmV0dXJuZWQgd2hlbiBhbiBlbGVtZW50XG4gICAqIGlzIG5vdCBpbiB0aGUgRE9NLlxuICAgKiBAcmV0dXJuIHtDbGllbnRSZWN0fSBUaGUgZW1wdHkgcmVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEVtcHR5UmVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlIHRoYXQgdGhlIHJlc3VsdCBoYXMgYWxsIG9mIHRoZSBuZWNlc3NhcnkgZmllbGRzIG9mIHRoZSBET01SZWN0LlxuICAgKiBTcGVjaWZpY2FsbHkgdGhpcyBlbnN1cmVzIHRoYXQgYHhgIGFuZCBgeWAgZmllbGRzIGFyZSBzZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7P0RPTVJlY3R8P0NsaWVudFJlY3R9IHJlY3RcbiAgICogQHJldHVybiB7P0RPTVJlY3R9XG4gICAqL1xuICBmdW5jdGlvbiBlbnN1cmVET01SZWN0KHJlY3QpIHtcbiAgICAvLyBBIGBET01SZWN0YCBvYmplY3QgaGFzIGB4YCBhbmQgYHlgIGZpZWxkcy5cbiAgICBpZiAoIXJlY3QgfHwgJ3gnIGluIHJlY3QpIHtcbiAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIC8vIEEgSUUncyBgQ2xpZW50UmVjdGAgdHlwZSBkb2VzIG5vdCBoYXZlIGB4YCBhbmQgYHlgLiBUaGUgc2FtZSBpcyB0aGUgY2FzZVxuICAgIC8vIGZvciBpbnRlcm5hbGx5IGNhbGN1bGF0ZWQgUmVjdCBvYmplY3RzLiBGb3IgdGhlIHB1cnBvc2VzIG9mXG4gICAgLy8gYEludGVyc2VjdGlvbk9ic2VydmVyYCwgaXQncyBzdWZmaWNpZW50IHRvIHNpbXBseSBtaXJyb3IgYGxlZnRgIGFuZCBgdG9wYFxuICAgIC8vIGZvciB0aGVzZSBmaWVsZHMuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICB5OiByZWN0LnRvcCxcbiAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICB4OiByZWN0LmxlZnQsXG4gICAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZlcnRzIHRoZSBpbnRlcnNlY3Rpb24gYW5kIGJvdW5kaW5nIHJlY3QgZnJvbSB0aGUgcGFyZW50IChmcmFtZSkgQkNSIHRvXG4gICAqIHRoZSBsb2NhbCBCQ1Igc3BhY2UuXG4gICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSBwYXJlbnRCb3VuZGluZ1JlY3QgVGhlIHBhcmVudCdzIGJvdW5kIGNsaWVudCByZWN0LlxuICAgKiBAcGFyYW0ge0RPTVJlY3R8Q2xpZW50UmVjdH0gcGFyZW50SW50ZXJzZWN0aW9uUmVjdCBUaGUgcGFyZW50J3Mgb3duIGludGVyc2VjdGlvbiByZWN0LlxuICAgKiBAcmV0dXJuIHtDbGllbnRSZWN0fSBUaGUgbG9jYWwgcm9vdCBib3VuZGluZyByZWN0IGZvciB0aGUgcGFyZW50J3MgY2hpbGRyZW4uXG4gICAqL1xuICBmdW5jdGlvbiBjb252ZXJ0RnJvbVBhcmVudFJlY3QocGFyZW50Qm91bmRpbmdSZWN0LCBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0KSB7XG4gICAgdmFyIHRvcCA9IHBhcmVudEludGVyc2VjdGlvblJlY3QudG9wIC0gcGFyZW50Qm91bmRpbmdSZWN0LnRvcFxuICAgIHZhciBsZWZ0ID0gcGFyZW50SW50ZXJzZWN0aW9uUmVjdC5sZWZ0IC0gcGFyZW50Qm91bmRpbmdSZWN0LmxlZnRcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0b3AsXG4gICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgaGVpZ2h0OiBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LmhlaWdodCxcbiAgICAgIHdpZHRoOiBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LndpZHRoLFxuICAgICAgYm90dG9tOiB0b3AgKyBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LmhlaWdodCxcbiAgICAgIHJpZ2h0OiBsZWZ0ICsgcGFyZW50SW50ZXJzZWN0aW9uUmVjdC53aWR0aFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIGEgcGFyZW50IGVsZW1lbnQgY29udGFpbnMgYSBjaGlsZCBlbGVtZW50IChpbmNsdWRpbmcgaW5zaWRlXG4gICAqIHNoYWRvdyBET00pLlxuICAgKiBAcGFyYW0ge05vZGV9IHBhcmVudCBUaGUgcGFyZW50IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7Tm9kZX0gY2hpbGQgVGhlIGNoaWxkIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhcmVudCBub2RlIGNvbnRhaW5zIHRoZSBjaGlsZCBub2RlLlxuICAgKi9cbiAgZnVuY3Rpb24gY29udGFpbnNEZWVwKHBhcmVudCwgY2hpbGQpIHtcbiAgICB2YXIgbm9kZSA9IGNoaWxkXG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChub2RlID09IHBhcmVudCkgcmV0dXJuIHRydWVcblxuICAgICAgbm9kZSA9IGdldFBhcmVudE5vZGUobm9kZSlcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcGFyZW50IG5vZGUgb2YgYW4gZWxlbWVudCBvciBpdHMgaG9zdCBlbGVtZW50IGlmIHRoZSBwYXJlbnQgbm9kZVxuICAgKiBpcyBhIHNoYWRvdyByb290LlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIG5vZGUgd2hvc2UgcGFyZW50IHRvIGdldC5cbiAgICogQHJldHVybiB7Tm9kZXxudWxsfSBUaGUgcGFyZW50IG5vZGUgb3IgbnVsbCBpZiBubyBwYXJlbnQgZXhpc3RzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZVxuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gLyogRE9DVU1FTlQgKi8gOSAmJiBub2RlICE9IGRvY3VtZW50KSB7XG4gICAgICAvLyBJZiB0aGlzIG5vZGUgaXMgYSBkb2N1bWVudCBub2RlLCBsb29rIGZvciB0aGUgZW1iZWRkaW5nIGZyYW1lLlxuICAgICAgcmV0dXJuIGdldEZyYW1lRWxlbWVudChub2RlKVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBwYXJlbnQgaGFzIGVsZW1lbnQgdGhhdCBpcyBhc3NpZ25lZCB0aHJvdWdoIHNoYWRvdyByb290IHNsb3RcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5hc3NpZ25lZFNsb3QucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09IDExICYmIHBhcmVudC5ob3N0KSB7XG4gICAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGEgc2hhZG93IHJvb3QsIHJldHVybiB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAgcmV0dXJuIHBhcmVudC5ob3N0XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBgbm9kZWAgaXMgYSBEb2N1bWVudC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzRG9jKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSA5XG4gIH1cblxuICAvLyBFeHBvc2VzIHRoZSBjb25zdHJ1Y3RvcnMgZ2xvYmFsbHkuXG4gIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA9IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5ID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVxufSkoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==