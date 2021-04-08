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
      var $createCustomSelect = document.createElement('div');
      $createCustomSelect.setAttribute('tabindex', '0');
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
          $option.setAttribute('value', item.getAttribute('value'));
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
        $content.setAttribute('aria-labelledby', this.name);
        this.items.forEach(function (item) {
          var $item = document.createElement('li');
          $item.dataset.label = item.innerText;
          $item.dataset.value = item.getAttribute('value');
          $item.setAttribute('tabindex', '0');
          $item.innerText = item.innerText;
          $item.classList.add('custom-select__item');
          $content.appendChild($item);
        }); // Create the button.

        this.$.choose = document.createElement('div');
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
        this.$.items = Array.from(this.$.customSelect.querySelectorAll('.custom-select__item')); // Get all items in array.
        // Create the filter input.

        if (this.isFilters) {
          this.$.filter = document.createElement('input');
          this.$.filter.value = this.defaultLabel;
          this.$.choose.appendChild(this.$.filter);
        }
      }

      this.events();
    }
  }, {
    key: "toggleCustomSelect",
    value: function toggleCustomSelect() {
      var _this = this;

      if (this.$.customSelect.classList.contains('custom-select--open')) {
        this.$.customSelect.classList.remove('custom-select--open');
        this.$.customSelect.classList.remove('custom-select--finish');
      } else {
        this.$.customSelect.classList.add('custom-select--open');
        setTimeout(function () {
          _this.$.customSelect.classList.toggle('custom-select--finish');
        }, 200);
      }
    }
  }, {
    key: "events",
    value: function events() {
      var _this2 = this;

      // keyboard navigation
      this.$.customSelect.addEventListener('keyup', function (event) {
        event.preventDefault();
        if (event.code === 'Enter') _this2.toggleCustomSelect();
      });

      if (!this.isOnMobile && window.matchMedia('(min-width: 992px)').matches || this.isOnMobile) {
        this.$.choose.addEventListener('click', function () {
          _this2.toggleCustomSelect();
        });

        if (this.isFilters) {
          this.$.filter.addEventListener('click', function (event) {
            event.stopPropagation();

            _this2.$.customSelect.classList.add('custom-select--open');

            setTimeout(function () {
              _this2.$.customSelect.classList.add('custom-select--finish');
            }, 200);
          });
        }

        this.$.items.forEach(function ($item) {
          $item.addEventListener('click', function () {
            _this2.changeValue($item);
          }); // keyboard navigation

          $item.addEventListener('keyup', function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (event.code === 'Enter') _this2.changeValue($item);
          });
        });

        if (this.isFilters) {
          this.$.filter.addEventListener('click', function () {
            _this2.$.filter.value = '';

            _this2.$.filter.setAttribute('placeholder', _this2.virtualLabel);

            _this2.$.items.forEach(function ($item) {
              var $newItem = $item;
              $newItem.style.display = 'block';
            });
          });
          this.$.filter.addEventListener('input', function () {
            _this2.$.items.forEach(function ($item) {
              if ($item.innerText.toLowerCase().includes(_this2.$.filter.value)) {
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
          if (!_this2.$.customSelect.contains(event.target)) {
            _this2.$.customSelect.classList.remove('custom-select--open');

            _this2.$.customSelect.classList.remove('custom-select--finish');

            if (_this2.isFilters) {
              if (_this2.$.filter.value === '') {
                _this2.$.input.value = '';
                _this2.$.filter.value = _this2.virtualLabel;
              } else {
                _this2.$.filter.value = _this2.virtualLabel;
              }
            }
          }
        });
      }

      window.addEventListener('resize', function () {
        _this2.initialize();
      });
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

      this.$.choose = document.createElement('div');
      this.$.choose.classList.add('dropdown__choose');
      this.$.choose.innerHTML = this.$.dropdown.dataset.label;
      this.$.choose.setAttribute('id', this.name); // Create wrapping container for content.

      var $container = document.createElement('div');
      $container.classList.add('dropdown__container');
      $container.appendChild($content);
      $container.setAttribute('aria-labelledby', this.name);
      this.$.dropdown.innerHTML = '';
      this.$.dropdown.appendChild(this.$.choose);
      this.$.dropdown.appendChild($container);

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

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

    this.$ = {}; // Initialize object of DOM elements.

    this.$["switch"] = $switch; // Add switch in DOM objects.

    this.initParams();
    this.initialize();
  }
  /**
   * Initialize params
   */


  _createClass(Switch, [{
    key: "initParams",
    value: function initParams() {
      this.active = this.$["switch"].checked;
      this.name = this.$["switch"].getAttribute('name');
    }
    /**
     * Initialize component.
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
      this.$["switch"] = $createSwitch; // create input

      this.$.input = document.createElement('input');
      this.$.input.setAttribute('name', this.name);
      this.$.input.setAttribute('type', 'checkbox');
      if (this.active) this.$.input.checked = true;
      this.$.input.style.display = 'none';
      this.$["switch"].appendChild(this.$.input);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DdXN0b21GaWxlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVJhbmdlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9SZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vanMvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2pzL3BvbHlmaWxscy9BcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL2pzL3BvbHlmaWxscy9pbnRlcnNlY3Rpb25PYnNlcnZlci5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwicHVzaCIsIml0ZW0iLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkFuaW1hdGlvbiIsImluaXQiLCJhbmltYXRlZFRpdGxlcyIsImRvY3VtZW50IiwiYW5pbWF0ZWRUaXRsZSIsIndyYXBwZXJUaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJ3cmFwcGVyVGl0bGUyIiwic2V0RE9NIiwiZXZlbnRzIiwidGl0bGUiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmFibGVzIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiQ2Fyb3VzZWwiLCIkY2Fyb3VzZWwiLCJjYXJvdXNlbCIsIm5hdmlnYXRpb24iLCJsZWZ0IiwicmlnaHQiLCJpc1RvdWNoRGV2aWNlIiwid2luZG93IiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJ0eXBlIiwiYWN0aXZlSXRlbSIsInBhZ2luYXRpb24iLCJkcmFnIiwiYXV0byIsIm1vYmlsZU51bWJlciIsInRhYmxldE51bWJlciIsImxhcHRvcE51bWJlciIsIm51bWJlckl0ZW1zIiwibGVuZ3RoIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInNjcmVlbk51bWJlciIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiJHBhZ2luYXRpb24iLCJpIiwic2V0QXR0cmlidXRlIiwic2V0SW50ZXJ2YWwiLCJfbW92ZVJpZ2h0IiwicGFyc2VJbnQiLCJfbW92ZUxlZnQiLCJrZXlDb2RlIiwiJGJ1bGxldCIsIl9tb3ZlSXRlbXMiLCJhY3R1YWxQb3NpdGlvbiIsInRvdWNoZXMiLCJjbGllbnRYIiwicHJlc3NJdGVtcyIsInRyYW5zbGF0ZSIsImRyYWdDcmV0YWVkSXRlbSIsIl9kcmFnSXRlbXMiLCJjaGFuZ2VkVG91Y2hlcyIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIiRsYXN0SXRlbSIsImR1cGxpY2F0ZUxhc3RJdGVtIiwiY2xvbmVOb2RlIiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCIkZmlyc3RJdGVtIiwiZHVwbGljYXRlRmlyc3RJdGVtIiwiY29uc29sZSIsImxvZyIsIngiLCJ0IiwiY2xlYXJUaW1lb3V0IiwidHJhbnNpdGlvbiIsIkN1c3RvbUZpbGUiLCIkY3VzdG9tRmlsZSIsImN1c3RvbUZpbGUiLCJsYWJlbCIsImlzQnV0dG9uIiwiYnV0dG9uIiwiaXNCdXR0b25Qb3NpdGlvbiIsImJ1dHRvbnBvcyIsImlzU2l6ZSIsInNpemUiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJjb250YWluZXIiLCJpbnB1dCIsIm5hbWUiLCJkaXNwbGF5IiwiY2xpY2siLCJzaXplQ29udmVydCIsImJ5dGVzIiwic2l6ZXMiLCJNYXRoIiwiZmxvb3IiLCJjb252ZXJ0Iiwicm91bmQiLCJwb3ciLCJmaWxlIiwiZmlsZXMiLCJjbG9zZSIsInN0b3BQcm9wYWdhdGlvbiIsInZhbHVlIiwiJGZpbGVzIiwiZm9yRWFjaCIsImluZGV4IiwiJGZpbGUiLCJuZXdGaWxlcyIsIkRhdGFUcmFuc2ZlciIsIkN1c3RvbVJhbmdlIiwiJGN1c3RvbVJhbmdlIiwiY3VzdG9tUmFuZ2UiLCJ2aWV3VG90YWwiLCJzdGVwIiwiZ2V0QXR0cmlidXRlIiwiJGNyZWF0ZUN1c3RvbVJhbmdlIiwicmVwbGFjZUNoaWxkIiwidG90YWxWaWV3IiwidG9Mb2NhbGVTdHJpbmciLCJiYWNrZ3JvdW5kIiwiQ3VzdG9tU2VsZWN0IiwiJGN1c3RvbVNlbGVjdCIsImN1c3RvbVNlbGVjdCIsImluaXRQYXJhbXMiLCJpbml0aWFsaXplIiwiaXNGaWx0ZXJzIiwiZmlsdGVycyIsImlzT25Nb2JpbGUiLCJtb2JpbGUiLCJkZWZhdWx0TGFiZWwiLCJ2aXJ0dWFsTGFiZWwiLCIkY3JlYXRlQ3VzdG9tU2VsZWN0IiwiJHNlbGVjdCIsIiRkZWZhdWx0T3B0aW9uIiwiJG9wdGlvbiIsImNob29zZSIsIiRjb250YWluZXIiLCJmaWx0ZXIiLCJ0b2dnbGUiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiLCJ0b2dnbGVDdXN0b21TZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsIiRuZXdJdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkRyb3Bkb3duIiwiJGRyb3Bkb3duIiwiZHJvcGRvd24iLCJGb3JtVmFsaWRhdGlvbiIsIiRmb3JtIiwiZm9ybSIsIm5vSW5zdGFudCIsIm5vaW5zdGFudCIsIm5vU3VibWl0Iiwibm9zdWJtaXQiLCJmb3JtRXJyb3IiLCJpbnB1dEdyb3VwcyIsIiRpbnB1dEdyb3VwIiwiJGlucHV0IiwidmFsaWRhdGUiLCJpbnB1dFR5cGUiLCJydWxlcyIsInJlcXVpcmVkIiwibWlubGVuZ3RoIiwibWluTGVuZ3RoIiwibWF4bGVuZ3RoIiwibWF4TGVuZ3RoIiwicmVxdWlyZWRtZXNzYWdlIiwicmVxdWlyZWRNZXNzYWdlIiwiZXJyb3JtaW5sZW5ndGgiLCJlcnJvck1pbkxlbmd0aCIsImVycm9ybWF4bGVuZ3RoIiwiZXJyb3JNYXhMZW5ndGgiLCJlcnJvcm1lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvciIsImNsZWFyRXJyb3IiLCJtYXRjaCIsImVycm9yIiwiJGVycm9yIiwiSGVhZGVyIiwiaGVhZGVyIiwib3BlbiIsInN1YiIsIklucHV0R3JvdXAiLCJpbnB1dEdyb3VwIiwiY29udGVudCIsIk1vZGFsIiwiJG1vZGFsIiwibW9kYWwiLCJSZXNldCIsInRlc3QiLCJrZXkiLCJib2R5IiwiU3dpdGNoIiwiJHN3aXRjaCIsImFjdGl2ZSIsImNoZWNrZWQiLCIkY3JlYXRlU3dpdGNoIiwiVGFicyIsIiR0YWJzIiwidGFicyIsImhlYWRlckl0ZW1zIiwiJGhlYWRlckl0ZW0iLCIkY29udGVudEl0ZW0iLCIkYWNjb3JkaW9ucyIsIiRjYXJvdXNlbHMiLCIkY3VzdG9tRmlsZXMiLCIkY3VzdG9tUmFuZ2VzIiwiJGN1c3RvbVNlbGVjdHMiLCIkZHJvcGRvd25zIiwiJGlucHV0R3JvdXBzIiwiJGZvcm1zIiwiJG1vZGFscyIsIiRzd2l0Y2hzIiwiJHRhYiIsInRvU3RyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJpc0NhbGxhYmxlIiwiZm4iLCJjYWxsIiwidG9JbnRlZ2VyIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJpc0Zpbml0ZSIsImFicyIsIm1heFNhZmVJbnRlZ2VyIiwidG9MZW5ndGgiLCJsZW4iLCJtaW4iLCJtYXgiLCJhcnJheUxpa2UiLCJDIiwiVHlwZUVycm9yIiwibWFwRm4iLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJUIiwiQSIsImsiLCJrVmFsdWUiLCJJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJnZXRGcmFtZUVsZW1lbnQiLCJkb2MiLCJkZWZhdWx0VmlldyIsImZyYW1lRWxlbWVudCIsImUiLCJzdGFydERvYyIsImZyYW1lIiwib3duZXJEb2N1bWVudCIsInJlZ2lzdHJ5IiwiY3Jvc3NPcmlnaW5VcGRhdGVyIiwiY3Jvc3NPcmlnaW5SZWN0IiwiZW50cnkiLCJ0aW1lIiwicm9vdEJvdW5kcyIsImVuc3VyZURPTVJlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJpbnRlcnNlY3Rpb25SZWN0IiwiZ2V0RW1wdHlSZWN0IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXRSZWN0IiwidGFyZ2V0QXJlYSIsImludGVyc2VjdGlvbkFyZWEiLCJ0b0ZpeGVkIiwiY2FsbGJhY2siLCJvcHRfb3B0aW9ucyIsIm9wdGlvbnMiLCJFcnJvciIsInJvb3QiLCJub2RlVHlwZSIsIl9jaGVja0ZvckludGVyc2VjdGlvbnMiLCJ0aHJvdHRsZSIsImJpbmQiLCJUSFJPVFRMRV9USU1FT1VUIiwiX2NhbGxiYWNrIiwiX29ic2VydmF0aW9uVGFyZ2V0cyIsIl9xdWV1ZWRFbnRyaWVzIiwiX3Jvb3RNYXJnaW5WYWx1ZXMiLCJfcGFyc2VSb290TWFyZ2luIiwicm9vdE1hcmdpbiIsInRocmVzaG9sZHMiLCJfaW5pdFRocmVzaG9sZHMiLCJtYXAiLCJtYXJnaW4iLCJ1bml0Iiwiam9pbiIsIl9tb25pdG9yaW5nRG9jdW1lbnRzIiwiX21vbml0b3JpbmdVbnN1YnNjcmliZXMiLCJQT0xMX0lOVEVSVkFMIiwiVVNFX01VVEFUSU9OX09CU0VSVkVSIiwiX3NldHVwQ3Jvc3NPcmlnaW5VcGRhdGVyIiwiY29udmVydEZyb21QYXJlbnRSZWN0Iiwib2JzZXJ2ZXIiLCJfcmVzZXRDcm9zc09yaWdpblVwZGF0ZXIiLCJpc1RhcmdldEFscmVhZHlPYnNlcnZlZCIsInNvbWUiLCJlbGVtZW50IiwiX3JlZ2lzdGVySW5zdGFuY2UiLCJfbW9uaXRvckludGVyc2VjdGlvbnMiLCJfdW5tb25pdG9ySW50ZXJzZWN0aW9ucyIsIl91bnJlZ2lzdGVySW5zdGFuY2UiLCJkaXNjb25uZWN0IiwiX3VubW9uaXRvckFsbEludGVyc2VjdGlvbnMiLCJ0YWtlUmVjb3JkcyIsInJlY29yZHMiLCJzbGljZSIsIm9wdF90aHJlc2hvbGQiLCJpc0FycmF5Iiwic29ydCIsImEiLCJvcHRfcm9vdE1hcmdpbiIsIm1hcmdpblN0cmluZyIsIm1hcmdpbnMiLCJzcGxpdCIsInBhcnRzIiwiZXhlYyIsInBhcnNlRmxvYXQiLCJ3aW4iLCJpbmRleE9mIiwibW9uaXRvcmluZ0ludGVydmFsIiwiZG9tT2JzZXJ2ZXIiLCJhZGRFdmVudCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJjbGVhckludGVydmFsIiwicmVtb3ZlRXZlbnQiLCJyb290RG9jIiwiaGFzRGVwZW5kZW50VGFyZ2V0cyIsIml0ZW1Eb2MiLCJ1bnN1YnNjcmliZSIsInNwbGljZSIsInVuc3Vic2NyaWJlcyIsInJvb3RJc0luRG9tIiwiX3Jvb3RJc0luRG9tIiwicm9vdFJlY3QiLCJfZ2V0Um9vdFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyb290Q29udGFpbnNUYXJnZXQiLCJfcm9vdENvbnRhaW5zVGFyZ2V0Iiwib2xkRW50cnkiLCJfY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24iLCJuZXdFbnRyeSIsIm5vdyIsIl9oYXNDcm9zc2VkVGhyZXNob2xkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcmVudCIsImdldFBhcmVudE5vZGUiLCJhdFJvb3QiLCJwYXJlbnRSZWN0IiwicGFyZW50Q29tcHV0ZWRTdHlsZSIsImZyYW1lUmVjdCIsImZyYW1lSW50ZXJzZWN0IiwiZG9jdW1lbnRFbGVtZW50Iiwib3ZlcmZsb3ciLCJjb21wdXRlUmVjdEludGVyc2VjdGlvbiIsImlzRG9jIiwiaHRtbCIsInRvcCIsImNsaWVudFdpZHRoIiwiYm90dG9tIiwiY2xpZW50SGVpZ2h0IiwiX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4iLCJyZWN0IiwibmV3UmVjdCIsIm9sZFJhdGlvIiwibmV3UmF0aW8iLCJjb250YWluc0RlZXAiLCJwZXJmb3JtYW5jZSIsInRpbWVvdXQiLCJ0aW1lciIsIm5vZGUiLCJvcHRfdXNlQ2FwdHVyZSIsImF0dGFjaEV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGF0Y2hFdmVudCIsInJlY3QxIiwicmVjdDIiLCJlbCIsImVyciIsInkiLCJwYXJlbnRCb3VuZGluZ1JlY3QiLCJwYXJlbnRJbnRlcnNlY3Rpb25SZWN0IiwiY2hpbGQiLCJhc3NpZ25lZFNsb3QiLCJob3N0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlD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QixhQUFhLENBQUN3QixJQUFELENBQXBCO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNQSxXQUFTeEIsYUFBVCxDQUF1QndCLElBQXZCLEVBQTZCO0FBQzNCLFFBQUl6QixNQUFNLEdBQUd5QixJQUFJLENBQUMxWCxVQUFsQjs7QUFFQSxRQUFJMFgsSUFBSSxDQUFDeEcsUUFBTDtBQUFpQjtBQUFlLEtBQWhDLElBQXFDd0csSUFBSSxJQUFJOVgsUUFBakQsRUFBMkQ7QUFDekQ7QUFDQSxhQUFPMFAsZUFBZSxDQUFDb0ksSUFBRCxDQUF0QjtBQUNELEtBTjBCLENBUTNCOzs7QUFDQSxRQUFJekIsTUFBTSxJQUFJQSxNQUFNLENBQUNzQyxZQUFyQixFQUFtQztBQUNqQ3RDLFlBQU0sR0FBR0EsTUFBTSxDQUFDc0MsWUFBUCxDQUFvQnZZLFVBQTdCO0FBQ0Q7O0FBRUQsUUFBSWlXLE1BQU0sSUFBSUEsTUFBTSxDQUFDL0UsUUFBUCxJQUFtQixFQUE3QixJQUFtQytFLE1BQU0sQ0FBQ3VDLElBQTlDLEVBQW9EO0FBQ2xEO0FBQ0EsYUFBT3ZDLE1BQU0sQ0FBQ3VDLElBQWQ7QUFDRDs7QUFFRCxXQUFPdkMsTUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFLQSxXQUFTVSxLQUFULENBQWVlLElBQWYsRUFBcUI7QUFDbkIsV0FBT0EsSUFBSSxJQUFJQSxJQUFJLENBQUN4RyxRQUFMLEtBQWtCLENBQWpDO0FBQ0QsR0FsK0JVLENBbytCWDs7O0FBQ0E5UCxRQUFNLENBQUNiLG9CQUFQLEdBQThCQSxvQkFBOUI7QUFDQWEsUUFBTSxDQUFDK04seUJBQVAsR0FBbUNBLHlCQUFuQztBQUNELENBditCQSxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCIvKioqKioqKioqKlxuICogQWNjb3JkaW9uXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBBY2NvcmRpb24ge1xuICBjb25zdHJ1Y3RvcigkYWNjb3JkaW9uKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5hY2NvcmRpb24gPSAkYWNjb3JkaW9uIC8vIEFkZCBhY2NvcmRpb24gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5hY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB0aGlzLiQuYWNjb3JkaW9uLmRhdGFzZXQubXVsdGlwbGUgLy8gU2V0IGlzIG11bHRpcGxlIGl0ZW0gb3Blbi5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICBpZiAoJGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2NvbnRlbnRIZWlnaHR9cHhgXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpdGVtOiAkaXRlbSwgaGVpZ2h0OiBjb250ZW50SGVpZ2h0IH0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgeyBpdGVtLCBoZWlnaHQgfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQnV0dG9uJylcbiAgICAgIGNvbnN0ICRjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB7IGl0ZW0gfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvblxuIiwiY2xhc3MgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc2V0RE9NKCkge1xuICAgIHRoaXMuJC5hbmltYXRlZFRpdGxlcyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZWQtdGl0bGUnKVxuICAgIClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgZm9yIChjb25zdCBhbmltYXRlZFRpdGxlIG9mIEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZWQtdGl0bGUnKVxuICAgICkpIHtcbiAgICAgIGFuaW1hdGVkVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQtdGl0bGUnKVxuICAgICAgY29uc3Qgd3JhcHBlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHdyYXBwZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC10aXRsZV9fdGV4dCcpXG4gICAgICBhbmltYXRlZFRpdGxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXJUaXRsZSwgYW5pbWF0ZWRUaXRsZSlcbiAgICAgIHdyYXBwZXJUaXRsZS5hcHBlbmRDaGlsZChhbmltYXRlZFRpdGxlKVxuXG4gICAgICBjb25zdCB3cmFwcGVyVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHdyYXBwZXJUaXRsZTIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtdGl0bGUnKVxuICAgICAgd3JhcHBlclRpdGxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXJUaXRsZTIsIHdyYXBwZXJUaXRsZSlcbiAgICAgIHdyYXBwZXJUaXRsZTIuYXBwZW5kQ2hpbGQod3JhcHBlclRpdGxlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0RE9NKClcbiAgICB0aGlzLmV2ZW50cygpXG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgbGV0IHRpdGxlID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgb2JzZXJ2YWJsZXMgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb2JzZXJ2YWJsZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5pbnRlcnNlY3Rpb25SYXRpbyA+IDAuNSkge1xuICAgICAgICAgICAgaXRlbS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtdGl0bGUtLXZpc2libGUnKVxuICAgICAgICAgICAgdGl0bGUudW5vYnNlcnZlKGl0ZW0udGFyZ2V0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkOiBbMC41XVxuICAgICAgfVxuICAgIClcblxuICAgIGZvciAoY29uc3QgYW5pbWF0ZWRUaXRsZSBvZiB0aGlzLiQuYW5pbWF0ZWRUaXRsZXMpIHtcbiAgICAgIHRpdGxlLm9ic2VydmUoYW5pbWF0ZWRUaXRsZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uXG4iLCIvKioqKioqKioqKlxuICogQ2Fyb3VzZWxcbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIENhcm91c2VsIHtcbiAgY29uc3RydWN0b3IoJGNhcm91c2VsKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jYXJvdXNlbCA9ICRjYXJvdXNlbCAvLyBBZGQgY2Fyb3VzZWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24gPSB7XG4gICAgICBsZWZ0OiB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLWxlZnQnKSxcbiAgICAgIHJpZ2h0OiB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLXJpZ2h0JylcbiAgICB9XG4gICAgdGhpcy4kLml0ZW1zID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbXMnKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzVG91Y2hEZXZpY2UgPSAhIShcbiAgICAgICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHNcbiAgICApXG4gICAgdGhpcy50eXBlID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgPyB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50eXBlXG4gICAgICA6ICdub3JtYWwnXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgIHRoaXMucGFnaW5hdGlvbiA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnBhZ2luYXRpb25cbiAgICB0aGlzLmRyYWcgPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5kcmFnXG4gICAgdGhpcy5hdXRvID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuYXV0b1xuICAgIHRoaXMubW9iaWxlTnVtYmVyID0gMSB8fCB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5tb2JpbGVOdW1iZXJcbiAgICB0aGlzLnRhYmxldE51bWJlciA9IDIgfHwgdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudGFibGV0TnVtYmVyXG4gICAgdGhpcy5sYXB0b3BOdW1iZXIgPSA0IHx8IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmxhcHRvcE51bWJlclxuICAgIHRoaXMubnVtYmVySXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgKS5sZW5ndGhcblxuICAgIGlmICh0aGlzLnR5cGUgIT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGhcbiAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gMVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpLm9mZnNldFdpZHRoXG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5OdW1iZXIgPSB0aGlzLmxhcHRvcE51bWJlclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzY4cHgpJykubWF0Y2hlcykge1xuICAgICAgICB0aGlzLnNjcmVlbk51bWJlciA9IHRoaXMudGFibGV0TnVtYmVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjcmVlbk51bWJlciA9IHRoaXMubW9iaWxlTnVtYmVyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgJHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJHBhZ2luYXRpb24uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb24nKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVySXRlbXM7IGkrKykge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgICAgICRpdGVtLmRhdGFzZXQuaXRlbSA9IGkgKyAxXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgICRwYWdpbmF0aW9uLmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfVxuICAgICAgdGhpcy4kLmNhcm91c2VsLmFwcGVuZENoaWxkKCRwYWdpbmF0aW9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG8pIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICAgIH0sIHBhcnNlSW50KHRoaXMuYXV0bykpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24ubGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVMZWZ0KClcbiAgICB9KVxuXG4gICAgdGhpcy4kLm5hdmlnYXRpb24ucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICBmb3IgKGNvbnN0ICRidWxsZXQgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICkpIHtcbiAgICAgICRidWxsZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAkYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoJGJ1bGxldC5kYXRhc2V0Lml0ZW0gLSAxKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBwYXJzZUludCgkYnVsbGV0LmRhdGFzZXQuaXRlbSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHJhZykge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaERldmljZSkge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gdHJ1ZVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlID0gMFxuICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYWdJdGVtcyhldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdID4gdGhpcy5hY3R1YWxQb3NpdGlvbikgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPCB0aGlzLmFjdHVhbFBvc2l0aW9uKVxuICAgICAgICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLiQuaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX2l0ZW1zLS1kcmFnJylcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiArIDIwKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwKSB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjAgfHxcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gLSAyMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9kcmFnSXRlbXMoY2xpZW50WCkge1xuICAgIHRoaXMuJC5pdGVtcy5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9faXRlbXMtLWRyYWcnKVxuICAgIGlmICh0aGlzLnByZXNzSXRlbXMpIHtcbiAgICAgIGlmIChjbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IGNsaWVudFggLSB0aGlzLmFjdHVhbFBvc2l0aW9uXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5hY3RpdmVJdGVtIC0gMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoICtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IHRoaXMuYWN0dWFsUG9zaXRpb24gLSBjbGllbnRYXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5hY3RpdmVJdGVtIC0gMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0NyZXRhZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gdHJ1ZVxuICAgICAgICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMubnVtYmVySXRlbXMgLVxuICAgICAgICAgICAgICAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5hY3RpdmVJdGVtIC0gMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlTGVmdCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbm9ybWFsJyB8fCB0aGlzLnR5cGUgPT09ICdtdWx0aScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdsb29wJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLm51bWJlckl0ZW1zIC0gMSwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVMYXN0SXRlbSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKSxcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoLTEsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPD0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ25vcm1hbCcgfHwgdGhpcy50eXBlID09PSAnbXVsdGknKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcyAtICh0aGlzLnNjcmVlbk51bWJlciAtIDEpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdsb29wJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygwLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVGaXJzdEl0ZW0pXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUl0ZW1zKHgsIHBvc2l0aW9uID0gbnVsbCkge1xuICAgIGxldCB0XG4gICAgY2xlYXJUaW1lb3V0KHQpXG4gICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0J1xuICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3ggKiAtdGhpcy53aWR0aH1weClgXG5cbiAgICB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJlxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDFcbiAgICAgICkge1xuICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQodGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpKVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcblxuICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpLFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdsZWZ0JyAmJlxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICkge1xuICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQodGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5udW1iZXJJdGVtcyAtIDEpICpcbiAgICAgICAgICAtdGhpcy53aWR0aH0pYFxuICAgICAgfVxuICAgIH0sIDEwMDApXG5cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSlcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Om50aC1jaGlsZCgke3RoaXMuYWN0aXZlSXRlbSAtIDF9KWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpXG4gICAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bnRoLWNoaWxkKCR7dGhpcy5hY3RpdmVJdGVtICsgMX0pYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbUZpbGVcbiAqIHYxLjEuMFxuICovXG5cbmNsYXNzIEN1c3RvbUZpbGUge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tRmlsZSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tRmlsZSA9ICRjdXN0b21GaWxlIC8vIEFkZCBjdXN0b20tc2VsZWN0IGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmxhYmVsXG4gICAgdGhpcy5pc0J1dHRvbiA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuYnV0dG9uXG4gICAgdGhpcy5pc0J1dHRvblBvc2l0aW9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25wb3NcbiAgICAgID8gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25wb3NcbiAgICAgIDogJ3JpZ2h0J1xuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQudHlwZVxuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnR5cGVcbiAgICAgIDogJ2ZpbGUnXG4gICAgdGhpcy5pc1NpemUgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnNpemVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmlzQnV0dG9uXG4gICAgfVxuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuaW5uZXJIVE1MID0gJydcblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19jb250YWluZXInKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBsYWJlbFxuICAgIHRoaXMuJC5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSB0aGlzLmxhYmVsXG4gICAgdGhpcy4kLmxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19sYWJlbCcpXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcblxuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2ZpbGVzJykgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB0cnVlKVxuICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2ZvbGRlcicpIHtcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3dlYmtpdGRpcmVjdG9yeScsIHRydWUpXG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXJlY3RvcnlzJywgdHJ1ZSlcbiAgICB9XG4gICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIHNpemUgaW5mb1xuICAgICAgdGhpcy4kLnNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHRoaXMuJC5zaXplLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19zaXplJylcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9ICcwIG1iJ1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLnNpemUpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuJC5pbnB1dC5jbGljaygpXG4gICAgfSlcblxuICAgIGNvbnN0IHNpemVDb252ZXJ0ID0gc2l6ZSA9PiB7XG4gICAgICBjb25zdCBieXRlcyA9IHNpemVcbiAgICAgIGNvbnN0IHNpemVzID0gWydieXRlcycsICdrYicsICdtYicsICdnYicsICd0YiddXG4gICAgICBjb25zdCBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpXG4gICAgICBjb25zdCBjb252ZXJ0ID0gTWF0aC5yb3VuZChieXRlcyAvIE1hdGgucG93KDEwMjQsIGkpLCAyKVxuICAgICAgcmV0dXJuIGAke2NvbnZlcnR9ICR7c2l6ZXNbaV19YFxuICAgIH1cblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gZmlsZS5uYW1lXG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2ZpbGVDbG9zZScpXG4gICAgICAgIGNsb3NlLmlubmVySFRNTCA9ICcmdGltZXM7J1xuICAgICAgICB0aGlzLiQuY29udGFpbmVyLmluc2VydEJlZm9yZShjbG9zZSwgdGhpcy4kLmJ1dHRvbilcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSBudWxsXG4gICAgICAgICAgdGhpcy4kLmxhYmVsLmlubmVyVGV4dCA9IHRoaXMubGFiZWxcbiAgICAgICAgICB0aGlzLiQuY29udGFpbmVyLnJlbW92ZUNoaWxkKGNsb3NlKVxuICAgICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9ICcwIG1iJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSBzaXplQ29udmVydChmaWxlLnNpemUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXNcblxuICAgICAgICBjb25zdCAkZmlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgc2l6ZSA9IDBcblxuICAgICAgICBBcnJheS5mcm9tKGZpbGVzKS5mb3JFYWNoKChmaWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0ICRmaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAkZmlsZS5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgICAgICAkZmlsZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZScpXG5cbiAgICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2ZpbGVDbG9zZScpXG4gICAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJyZ0aW1lczsnXG5cbiAgICAgICAgICAkZmlsZS5hcHBlbmRDaGlsZChjbG9zZSlcbiAgICAgICAgICAkZmlsZXMuYXBwZW5kQ2hpbGQoJGZpbGUpXG5cbiAgICAgICAgICBzaXplICs9IGZpbGUuc2l6ZVxuXG4gICAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGVzID0gbmV3IERhdGFUcmFuc2ZlcigpXG4gICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgICAgICAgIGlmIChmaWxlICE9PSBmaWxlc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBuZXdGaWxlcy5pdGVtcy5hZGQoZmlsZSlcbiAgICAgICAgICAgICAgICBzaXplICs9IGZpbGUuc2l6ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSBzaXplQ29udmVydChzaXplKVxuICAgICAgICAgICAgdGhpcy4kLmlucHV0LmZpbGVzID0gbmV3RmlsZXMuZmlsZXNcbiAgICAgICAgICAgICRmaWxlcy5yZW1vdmVDaGlsZCgkZmlsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KHNpemUpXG5cbiAgICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQoJGZpbGVzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRmlsZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVJhbmdlXG4gKiB2MS4xLjFcbiAqL1xuXG5jbGFzcyBDdXN0b21SYW5nZSB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21SYW5nZSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UgPSAkY3VzdG9tUmFuZ2UgLy8gQWRkIGN1c3RvbVJhbmdlIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMudmlld1RvdGFsID0gdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQudmlld1RvdGFsXG4gICAgdGhpcy5zdGVwID0gdGhpcy4kLmN1c3RvbVJhbmdlLmdldEF0dHJpYnV0ZSgnc3RlcCcpXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmN1c3RvbVJhbmdlLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBjcmVhdGUgY29tcG9uZW50XG4gICAgY29uc3QgJGNyZWF0ZUN1c3RvbVJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY3JlYXRlQ3VzdG9tUmFuZ2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlJylcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXG4gICAgICAkY3JlYXRlQ3VzdG9tUmFuZ2UsXG4gICAgICB0aGlzLiQuY3VzdG9tUmFuZ2VcbiAgICApXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlID0gJGNyZWF0ZUN1c3RvbVJhbmdlXG5cbiAgICAvLyBDcmVhdGUgaW5wdXRcbiAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSlcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJylcblxuICAgIC8vIENyZWF0ZSB0b3RhbCB2aWV3LlxuICAgIGlmICh0aGlzLnZpZXdUb3RhbCkge1xuICAgICAgdGhpcy4kLnRvdGFsVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQudG90YWxWaWV3LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fdG90YWwnKVxuICAgICAgdGhpcy4kLnRvdGFsVmlldy5pbm5lclRleHQgPSAoXG4gICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSAqIHRoaXMuc3RlcFxuICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgfVxuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLnRvdGFsVmlldylcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHRoaXMuJC50b3RhbFZpZXcuaW5uZXJUZXh0ID0gKFxuICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgKiB0aGlzLnN0ZXBcbiAgICAgICkudG9Mb2NhbGVTdHJpbmcoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLnRvdGFsVmlldy5pbm5lclRleHQgPSAoXG4gICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSAqIHRoaXMuc3RlcFxuICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgfSlcblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRBQTY5MSAwJSwgIzRBQTY5MSAke3RoaXMuJC5pbnB1dC52YWx1ZX0lLCAjQ0NDQ0NDICR7dGhpcy4kLmlucHV0LnZhbHVlfSUsICNDQ0NDQ0MgMTAwJSlgXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SYW5nZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVNlbGVjdFxuICogdjEuMS4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVNlbGVjdCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0ID0gJGN1c3RvbVNlbGVjdCAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuaW5pdFBhcmFtcygpXG4gICAgdGhpcy5pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICAgdGhpcy5pc0ZpbHRlcnMgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQuZmlsdGVycyAvLyBTZXQgZmlsdGVycyBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5pc09uTW9iaWxlID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5kZWZhdWx0TGFiZWwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWwgLy8gU2V0IGRlZmF1bHQgbGFiZWwuXG4gICAgdGhpcy52aXJ0dWFsTGFiZWwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWwgLy8gU2V0IGFjdGl2YXRlZCBsYWJlbC5cbiAgICB0aGlzLml0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKSAvLyBHZXQgaXRlbXMuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIC8vIGNyZWF0ZSBjb21wb25lbnRcbiAgICBjb25zdCAkY3JlYXRlQ3VzdG9tU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY3JlYXRlQ3VzdG9tU2VsZWN0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpXG4gICAgJGNyZWF0ZUN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0JylcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuICAgICAgJGNyZWF0ZUN1c3RvbVNlbGVjdCxcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3RcbiAgICApXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdCA9ICRjcmVhdGVDdXN0b21TZWxlY3RcblxuICAgIGlmICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5OTFweCknKS5tYXRjaGVzKSB7XG4gICAgICAvLyBDcmVhdGUgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgICAgY29uc3QgJHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAkc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSlcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IHNlbGVjdCBvcHRpb24uXG4gICAgICBjb25zdCAkZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAkZGVmYXVsdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkZGVmYXVsdE9wdGlvbi5pbm5lclRleHQgPSB0aGlzLmRlZmF1bHRMYWJlbFxuICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkZGVmYXVsdE9wdGlvbilcblxuICAgICAgLy8gQ3JlYXRlIHNlbGVjdCBvcHRpb25zLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5pbm5lclRleHRcbiAgICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkb3B0aW9uKVxuICAgICAgfSlcblxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkc2VsZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1maWx0ZXJzJylcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IHdpdGggZWxlbWVudHMuXG4gICAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRlbnQnKVxuICAgICAgJGNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAkaXRlbS5kYXRhc2V0LmxhYmVsID0gaXRlbS5pbm5lclRleHRcbiAgICAgICAgJGl0ZW0uZGF0YXNldC52YWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgICRpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpXG4gICAgICAgICRpdGVtLmlubmVyVGV4dCA9IGl0ZW0uaW5uZXJUZXh0XG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2l0ZW0nKVxuICAgICAgICAkY29udGVudC5hcHBlbmRDaGlsZCgkaXRlbSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uLlxuICAgICAgdGhpcy4kLmNob29zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY2hvb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLiQuY2hvb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2Nob29zZScpXG4gICAgICBpZiAoIXRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJIVE1MID0gdGhpcy5kZWZhdWx0TGFiZWxcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHdyYXBwaW5nIGNvbnRhaW5lciBmb3IgY29udGVudC5cbiAgICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jb250YWluZXInKVxuICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIGlucHV0IGZvciBzZWxlY3QgdmFsdWUuXG4gICAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgICkgLy8gR2V0IGFsbCBpdGVtcyBpbiBhcnJheS5cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBmaWx0ZXIgaW5wdXQuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMuZGVmYXVsdExhYmVsXG4gICAgICAgIHRoaXMuJC5jaG9vc2UuYXBwZW5kQ2hpbGQodGhpcy4kLmZpbHRlcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50cygpXG4gIH1cblxuICB0b2dnbGVDdXN0b21TZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXN0b20tc2VsZWN0LS1vcGVuJykpIHtcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgICAgfSwgMjAwKVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cygpIHtcbiAgICAvLyBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB0aGlzLnRvZ2dsZUN1c3RvbVNlbGVjdCgpXG4gICAgfSlcblxuICAgIGlmIChcbiAgICAgICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKS5tYXRjaGVzKSB8fFxuICAgICAgdGhpcy5pc09uTW9iaWxlXG4gICAgKSB7XG4gICAgICB0aGlzLiQuY2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZUN1c3RvbVNlbGVjdCgpXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgICAgICAgICB9LCAyMDApXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5pdGVtcy5mb3JFYWNoKCRpdGVtID0+IHtcbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSgkaXRlbSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICAgICRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB0aGlzLmNoYW5nZVZhbHVlKCRpdGVtKVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9ICcnXG4gICAgICAgICAgdGhpcy4kLmZpbHRlci5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdGhpcy52aXJ0dWFsTGFiZWwpXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5ld0l0ZW0gPSAkaXRlbVxuICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJC5pdGVtcy5mb3JFYWNoKCRpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICgkaXRlbS5pbm5lclRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLiQuZmlsdGVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICRpdGVtXG4gICAgICAgICAgICAgICRuZXdJdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICRpdGVtXG4gICAgICAgICAgICAgICRuZXdJdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuY3VzdG9tU2VsZWN0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuXG4gICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kLmZpbHRlci52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMudmlydHVhbExhYmVsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKCRpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gJGl0ZW0uaW5uZXJUZXh0XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJUZXh0ID0gJGl0ZW0uaW5uZXJUZXh0XG4gICAgfVxuXG4gICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJGl0ZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgdGhpcy52aXJ0dWFsTGFiZWwgPSAkaXRlbS5pbm5lclRleHRcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21TZWxlY3RcbiIsIi8qKioqKioqKioqXG4gKiBEcm9wZG93blxuICogdjEuMS4wXG4gKi9cblxuY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3RvcigkZHJvcGRvd24pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmRyb3Bkb3duID0gJGRyb3Bkb3duIC8vIEFkZCBkcm9wZG93biBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5tb2JpbGUgLy8gU2V0IGN1c3RvbSBtb2JpbGUgaXMgYWN0aXZhdGVkLlxuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm5hbWVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pdGVtJylcbiAgICApXG5cbiAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRlbnQnKVxuXG4gICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uLlxuICAgIHRoaXMuJC5jaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2Nob29zZScpXG4gICAgdGhpcy4kLmNob29zZS5pbm5lckhUTUwgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5sYWJlbFxuICAgIHRoaXMuJC5jaG9vc2Uuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMubmFtZSlcblxuICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY29udGFpbmVyJylcbiAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICRjb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm5hbWUpXG4gICAgdGhpcy4kLmRyb3Bkb3duLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuJC5jaG9vc2UpXG4gICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKCRjb250YWluZXIpXG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuY2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBpZiAoIXRoaXMuJC5kcm9wZG93bi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuJC5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi0tb3BlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKioqKioqKioqKlxuICogRm9ybVZhbGlkYXRpb25cbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEZvcm1WYWxpZGF0aW9uIHtcbiAgY29uc3RydWN0b3IoJGZvcm0pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmZvcm0gPSAkZm9ybSAvLyBBZGQgZm9ybSBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLm5vSW5zdGFudCA9ICEhdGhpcy4kLmZvcm0uZGF0YXNldC5ub2luc3RhbnRcbiAgICB0aGlzLm5vU3VibWl0ID0gISF0aGlzLiQuZm9ybS5kYXRhc2V0Lm5vc3VibWl0XG4gICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaW5wdXRHcm91cHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0ICRpbnB1dEdyb3VwIG9mIEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgICkpIHtcbiAgICAgIGNvbnN0ICRpbnB1dCA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5ub0luc3RhbnQpIHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlKCRpbnB1dEdyb3VwKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5ub1N1Ym1pdCkge1xuICAgICAgdGhpcy4kLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlXG4gICAgICAgIGZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgQXJyYXkuZnJvbShcbiAgICAgICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgICAgICApKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKCRpbnB1dEdyb3VwKSkgdGhpcy5mb3JtRXJyb3IgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtRXJyb3IpIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoJGlucHV0R3JvdXApIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgY29uc3QgdmFsdWUgPSAkaW5wdXQudmFsdWVcbiAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJylcblxuICAgIC8vIHJ1bGVzXG4gICAgY29uc3QgcnVsZXMgPSB7fVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkKVxuICAgICAgcnVsZXMucmVxdWlyZWQgPSAkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQubWlubGVuZ3RoKVxuICAgICAgcnVsZXMubWluTGVuZ3RoID0gcGFyc2VJbnQoJGlucHV0R3JvdXAuZGF0YXNldC5taW5sZW5ndGgpXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQubWF4bGVuZ3RoKVxuICAgICAgcnVsZXMubWF4TGVuZ3RoID0gcGFyc2VJbnQoJGlucHV0R3JvdXAuZGF0YXNldC5tYXhsZW5ndGgpXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRtZXNzYWdlKVxuICAgICAgcnVsZXMucmVxdWlyZWRNZXNzYWdlID0gJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZG1lc3NhZ2VcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1pbmxlbmd0aClcbiAgICAgIHJ1bGVzLmVycm9yTWluTGVuZ3RoID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1pbmxlbmd0aFxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWF4bGVuZ3RoKVxuICAgICAgcnVsZXMuZXJyb3JNYXhMZW5ndGggPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWF4bGVuZ3RoXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtZXNzYWdlKVxuICAgICAgcnVsZXMuZXJyb3JNZXNzYWdlID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1lc3NhZ2VcblxuICAgIGlmIChpbnB1dFR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1pbkxlbmd0aCAmJiB2YWx1ZS5sZW5ndGggPCBydWxlcy5taW5MZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNaW5MZW5ndGggfHwgJ3RvbyBsb3cnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWF4TGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA+IHJ1bGVzLm1heExlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1heExlbmd0aCB8fCAndG9vIGJpZycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1pbkxlbmd0aCAmJiB2YWx1ZSA8IHJ1bGVzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUgPiBydWxlcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNYXhMZW5ndGggfHwgJ3RvbyBiaWcnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ2VtYWlsJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhdmFsdWUubWF0Y2goXG4gICAgICAgICAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWVzc2FnZSB8fCAnbm90IGEgdmFsaWQgZW1haWwnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ3RlbCcpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXZhbHVlLm1hdGNoKC9eKD86KD86XFwrfDAwKTMzfDApXFxzKlsxLTldKD86W1xccy4tXSpcXGR7Mn0pezR9JC8pXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNZXNzYWdlIHx8ICdub3QgYSB2YWxpZCBlbWFpbCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEVycm9yKCRpbnB1dEdyb3VwLCBlcnJvcikge1xuICAgIGxldCAkZXJyb3IgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICBpZiAoJGVycm9yKSB7XG4gICAgICAkZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JcbiAgICB9IGVsc2Uge1xuICAgICAgJGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAkZXJyb3IuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICAgICRlcnJvci5pbm5lclRleHQgPSBlcnJvclxuICAgICAgJGlucHV0R3JvdXAuYXBwZW5kQ2hpbGQoJGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyRXJyb3IoJGlucHV0R3JvdXApIHtcbiAgICBjb25zdCAkZXJyb3IgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICBpZiAoJGVycm9yKSB7XG4gICAgICAkaW5wdXRHcm91cC5yZW1vdmVDaGlsZCgkZXJyb3IpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0aW9uXG4iLCIvKioqKioqKioqKlxuICogSGVhZGVyXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSAvLyBBZGQgaGVhZGVyIGluIERPTSBvYmplY3RzLlxuICAgIHRoaXMuJC5jbG9zZSA9IHRoaXMuJC5oZWFkZXIucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdG9nZ2xlLS1jbG9zZScpXG4gICAgdGhpcy4kLm9wZW4gPSB0aGlzLiQuaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RvZ2dsZS0tb3BlbicpXG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5oZWFkZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbWVudUl0ZW0nKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGlmICghd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEyMDBweCknKS5tYXRjaGVzKSB7XG4gICAgICB0aGlzLiQub3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgdGhpcy4kLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuaGVhZGVyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXG4gICAgICAgICAgdGhpcy4kLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgICBjb25zdCBzdWIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnVJdGVtU3ViJylcbiAgICAgICAgaWYgKHN1Yikge1xuICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudUl0ZW1CdXR0b24nKVxuICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHN1Yi5vZmZzZXRIZWlnaHRcbiAgICAgICAgICBzdWIuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgIHN1Yi5zdHlsZS50cmFuc2l0aW9uID0gJ2hlaWdodCAwLjNzIGVhc2UtaW4tb3V0J1xuXG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Yi5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fbWVudUl0ZW1TdWItLW9wZW4nKSkge1xuICAgICAgICAgICAgICBzdWIuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICBzdWIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51SXRlbVN1Yi0tb3BlbicpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWIuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgICAgICBzdWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19tZW51SXRlbVN1Yi0tb3BlbicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiIsIi8qKioqKioqKioqXG4gKiBJbnB1dEdyb3VwXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBJbnB1dEdyb3VwIHtcbiAgY29uc3RydWN0b3IoJGlucHV0R3JvdXApIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmlucHV0R3JvdXAgPSAkaW5wdXRHcm91cCAvLyBBZGQgaW5wdXRHcm91cCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuJC5pbnB1dEdyb3VwLmlubmVySFRNTFxuICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cF9fY29udGVudCcpXG4gICAgJGNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudFxuICAgIHRoaXMuJC5pbnB1dCA9ICRjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXRHcm91cC5pbm5lckhUTUwgPSAnJ1xuICAgIHRoaXMuJC5pbnB1dEdyb3VwLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMuJC5pbnB1dEdyb3VwLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwLS1hY3RpdmUnKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy4kLmlucHV0LnZhbHVlKVxuICAgICAgICB0aGlzLiQuaW5wdXRHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1ncm91cC0tYWN0aXZlJylcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0R3JvdXBcbiIsIi8qKioqKioqKioqXG4gKiBNb2RhbFxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcigkbW9kYWwpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLm1vZGFsID0gJG1vZGFsIC8vIEFkZCBtb2RhbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5tb2RhbC1idXR0b25bZGF0YS1tb2RhbD1cIiR7dGhpcy4kLm1vZGFsLmRhdGFzZXQubW9kYWx9XCJdYFxuICAgICAgKVxuICAgIClcbiAgICAgIHRoaXMuJC5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1vZGFsLWJ1dHRvbltkYXRhLW1vZGFsPVwiJHt0aGlzLiQubW9kYWwuZGF0YXNldC5tb2RhbH1cIl1gXG4gICAgICApXG4gICAgaWYgKHRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJykpXG4gICAgICB0aGlzLiQuY2xvc2UgPSB0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpXG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLiQubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC0tYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jb250ZW50JykuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuJC5idXR0b24pIHtcbiAgICAgIHRoaXMuJC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJC5jbG9zZSkge1xuICAgICAgdGhpcy4kLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiY2xhc3MgUmVzZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKCEvXlthLXowLTldJC9pLnRlc3QoZXZlbnQua2V5KSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgna2V5Ym9hcmQnKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRcbiIsIi8qKlxuICogU3dpdGNoXG4gKi9cblxuY2xhc3MgU3dpdGNoIHtcbiAgY29uc3RydWN0b3IoJHN3aXRjaCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuc3dpdGNoID0gJHN3aXRjaCAvLyBBZGQgc3dpdGNoIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5pbml0UGFyYW1zKClcbiAgICB0aGlzLmluaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBpbml0UGFyYW1zKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy4kLnN3aXRjaC5jaGVja2VkXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLnN3aXRjaC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBjcmVhdGUgY29tcG9uZW50XG4gICAgY29uc3QgJGNyZWF0ZVN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNyZWF0ZVN3aXRjaC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKVxuICAgICRjcmVhdGVTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICBpZiAodGhpcy5hY3RpdmUpICRjcmVhdGVTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoLS1hY3RpdmUnKVxuICAgIHRoaXMuJC5zd2l0Y2gucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoJGNyZWF0ZVN3aXRjaCwgdGhpcy4kLnN3aXRjaClcbiAgICB0aGlzLiQuc3dpdGNoID0gJGNyZWF0ZVN3aXRjaFxuXG4gICAgLy8gY3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB0aGlzLiQuaW5wdXQuY2hlY2tlZCA9IHRydWVcbiAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuJC5zd2l0Y2guYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgdGhpcy5ldmVudHMoKVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIHRoaXMuJC5zd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy4kLnN3aXRjaC5jbGFzc0xpc3QudG9nZ2xlKCdzd2l0Y2gtLWFjdGl2ZScpXG4gICAgICB0aGlzLiQuaW5wdXQuY2hlY2tlZCA9ICF0aGlzLiQuaW5wdXQuY2hlY2tlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoXG4iLCIvKioqKioqKioqKlxuICogVGFic1xuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgVGFicyB7XG4gIGNvbnN0cnVjdG9yKCR0YWJzKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC50YWJzID0gJHRhYnMgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5oZWFkZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faGVhZGVySXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCAkaGVhZGVySXRlbSBvZiB0aGlzLiQuaGVhZGVySXRlbXMpIHtcbiAgICAgIGNvbnN0ICRjb250ZW50SXRlbSA9IHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGFic19fY29udGVudEl0ZW1bZGF0YS1pdGVtPVwiJHskaGVhZGVySXRlbS5kYXRhc2V0Lml0ZW19XCJdYFxuICAgICAgKVxuICAgICAgJGhlYWRlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19faGVhZGVySXRlbS0tYWN0aXZlJykpXG4gICAgICAgICAgdGhpcy4kLnRhYnNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICBpZiAodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgICAgJGhlYWRlckl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgJGNvbnRlbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuIiwiaW1wb3J0ICcuL3BvbHlmaWxscy9BcnJheS5mcm9tJ1xuaW1wb3J0ICcuL3BvbHlmaWxscy9pbnRlcnNlY3Rpb25PYnNlcnZlcidcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4vQW5pbWF0aW9uJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnXG5pbXBvcnQgQ3VzdG9tRmlsZSBmcm9tICcuL0N1c3RvbUZpbGUnXG5pbXBvcnQgQ3VzdG9tUmFuZ2UgZnJvbSAnLi9DdXN0b21SYW5nZSdcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnLi9DdXN0b21TZWxlY3QnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuL0lucHV0R3JvdXAnXG5pbXBvcnQgRm9ybVZhbGlkYXRpb24gZnJvbSAnLi9Gb3JtVmFsaWRhdGlvbidcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFN3aXRjaCBmcm9tICcuL1N3aXRjaCdcbmltcG9ydCBSZXNldCBmcm9tICcuL1Jlc2V0J1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJ1xuXG5jb25zdCAkYWNjb3JkaW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpKVxuZm9yIChjb25zdCAkYWNjb3JkaW9uIG9mICRhY2NvcmRpb25zKSB7XG4gIG5ldyBBY2NvcmRpb24oJGFjY29yZGlvbilcbn1cblxubmV3IEFuaW1hdGlvbigpXG5cbmNvbnN0ICRjYXJvdXNlbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbCcpKVxuZm9yIChjb25zdCAkY2Fyb3VzZWwgb2YgJGNhcm91c2Vscykge1xuICBuZXcgQ2Fyb3VzZWwoJGNhcm91c2VsKVxufVxuXG5jb25zdCAkY3VzdG9tRmlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZmlsZScpKVxuZm9yIChjb25zdCAkY3VzdG9tRmlsZSBvZiAkY3VzdG9tRmlsZXMpIHtcbiAgbmV3IEN1c3RvbUZpbGUoJGN1c3RvbUZpbGUpXG59XG5cbmNvbnN0ICRjdXN0b21SYW5nZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFuZ2UnKSlcbmZvciAoY29uc3QgJGN1c3RvbVJhbmdlIG9mICRjdXN0b21SYW5nZXMpIHtcbiAgbmV3IEN1c3RvbVJhbmdlKCRjdXN0b21SYW5nZSlcbn1cblxuY29uc3QgJGN1c3RvbVNlbGVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tc2VsZWN0JykpXG5mb3IgKGNvbnN0ICRjdXN0b21TZWxlY3Qgb2YgJGN1c3RvbVNlbGVjdHMpIHtcbiAgbmV3IEN1c3RvbVNlbGVjdCgkY3VzdG9tU2VsZWN0KVxufVxuXG5jb25zdCAkZHJvcGRvd25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKSlcbmZvciAoY29uc3QgJGRyb3Bkb3duIG9mICRkcm9wZG93bnMpIHtcbiAgbmV3IERyb3Bkb3duKCRkcm9wZG93bilcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSkgbmV3IEhlYWRlcigpXG5cbmNvbnN0ICRpbnB1dEdyb3VwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJykpXG5mb3IgKGNvbnN0ICRpbnB1dEdyb3VwIG9mICRpbnB1dEdyb3Vwcykge1xuICBuZXcgSW5wdXRHcm91cCgkaW5wdXRHcm91cClcbn1cblxuY29uc3QgJGZvcm1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsaWRhdGlvbicpKVxuZm9yIChjb25zdCAkZm9ybSBvZiAkZm9ybXMpIHtcbiAgbmV3IEZvcm1WYWxpZGF0aW9uKCRmb3JtKVxufVxuXG5jb25zdCAkbW9kYWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKSlcbmZvciAoY29uc3QgJG1vZGFsIG9mICRtb2RhbHMpIHtcbiAgbmV3IE1vZGFsKCRtb2RhbClcbn1cblxuY29uc3QgJHN3aXRjaHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2l0Y2gnKSlcbmZvciAoY29uc3QgJHN3aXRjaCBvZiAkc3dpdGNocykge1xuICBuZXcgU3dpdGNoKCRzd2l0Y2gpXG59XG5cbm5ldyBSZXNldCgpXG5cbmNvbnN0ICR0YWJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpKVxuZm9yIChjb25zdCAkdGFiIG9mICR0YWJzKSB7XG4gIG5ldyBUYWJzKCR0YWIpXG59XG4iLCJpZiAoIUFycmF5LmZyb20pIHtcbiAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG4gICAgdmFyIGlzQ2FsbGFibGUgPSBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICAgIH1cbiAgICB2YXIgdG9JbnRlZ2VyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBudW1iZXIgPSBOdW1iZXIodmFsdWUpXG4gICAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gbnVtYmVyXG4gICAgICB9XG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKVxuICAgIH1cbiAgICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxXG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBsZW4gPSB0b0ludGVnZXIodmFsdWUpXG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobGVuLCAwKSwgbWF4U2FmZUludGVnZXIpXG4gICAgfVxuXG4gICAgLy8gVGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiB0aGUgZnJvbSBtZXRob2QgaXMgMS5cbiAgICByZXR1cm4gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyosIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgICAvLyAxLiBMZXQgQyBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgIHZhciBDID0gdGhpc1xuXG4gICAgICAvLyAyLiBMZXQgaXRlbXMgYmUgVG9PYmplY3QoYXJyYXlMaWtlKS5cbiAgICAgIHZhciBpdGVtcyA9IE9iamVjdChhcnJheUxpa2UpXG5cbiAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cbiAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICdBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkJ1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8vIDQuIElmIG1hcGZuIGlzIHVuZGVmaW5lZCwgdGhlbiBsZXQgbWFwcGluZyBiZSBmYWxzZS5cbiAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWRcbiAgICAgIHZhciBUXG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA1LiBlbHNlXG4gICAgICAgIC8vIDUuIGEgSWYgSXNDYWxsYWJsZShtYXBmbikgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKCFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnQXJyYXkuZnJvbTogd2hlbiBwcm92aWRlZCwgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gNS4gYi4gSWYgdGhpc0FyZyB3YXMgc3VwcGxpZWQsIGxldCBUIGJlIHRoaXNBcmc7IGVsc2UgbGV0IFQgYmUgdW5kZWZpbmVkLlxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICBUID0gYXJndW1lbnRzWzJdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgLy8gMTEuIExldCBsZW4gYmUgVG9MZW5ndGgobGVuVmFsdWUpLlxuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aClcblxuICAgICAgLy8gMTMuIElmIElzQ29uc3RydWN0b3IoQykgaXMgdHJ1ZSwgdGhlblxuICAgICAgLy8gMTMuIGEuIExldCBBIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2Qgb2YgQyB3aXRoIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW0gbGVuLlxuICAgICAgLy8gMTQuIGEuIEVsc2UsIExldCBBIGJlIEFycmF5Q3JlYXRlKGxlbikuXG4gICAgICB2YXIgQSA9IGlzQ2FsbGFibGUoQykgPyBPYmplY3QobmV3IEMobGVuKSkgOiBuZXcgQXJyYXkobGVuKVxuXG4gICAgICAvLyAxNi4gTGV0IGsgYmUgMC5cbiAgICAgIHZhciBrID0gMFxuICAgICAgLy8gMTcuIFJlcGVhdCwgd2hpbGUgayA8IGxlbuKApiAoYWxzbyBzdGVwcyBhIC0gaClcbiAgICAgIHZhciBrVmFsdWVcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIGtWYWx1ZSA9IGl0ZW1zW2tdXG4gICAgICAgIGlmIChtYXBGbikge1xuICAgICAgICAgIEFba10gPVxuICAgICAgICAgICAgdHlwZW9mIFQgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgID8gbWFwRm4oa1ZhbHVlLCBrKVxuICAgICAgICAgICAgICA6IG1hcEZuLmNhbGwoVCwga1ZhbHVlLCBrKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEFba10gPSBrVmFsdWVcbiAgICAgICAgfVxuICAgICAgICBrICs9IDFcbiAgICAgIH1cbiAgICAgIC8vIDE4LiBMZXQgcHV0U3RhdHVzIGJlIFB1dChBLCBcImxlbmd0aFwiLCBsZW4sIHRydWUpLlxuICAgICAgQS5sZW5ndGggPSBsZW5cbiAgICAgIC8vIDIwLiBSZXR1cm4gQS5cbiAgICAgIHJldHVybiBBXG4gICAgfVxuICB9KSgpXG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFczQyBTT0ZUV0FSRSBBTkQgRE9DVU1FTlQgTk9USUNFIEFORCBMSUNFTlNFLlxuICpcbiAqICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcbiAqXG4gKi9cbjsoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8vIEV4aXQgZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW4gYSBicm93c2VyLlxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEV4aXQgZWFybHkgaWYgYWxsIEludGVyc2VjdGlvbk9ic2VydmVyIGFuZCBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XG4gIC8vIGZlYXR1cmVzIGFyZSBuYXRpdmVseSBzdXBwb3J0ZWQuXG4gIGlmIChcbiAgICAnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyAmJlxuICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5JyBpbiB3aW5kb3cgJiZcbiAgICAnaW50ZXJzZWN0aW9uUmF0aW8nIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZVxuICApIHtcbiAgICAvLyBNaW5pbWFsIHBvbHlmaWxsIGZvciBFZGdlIDE1J3MgbGFjayBvZiBgaXNJbnRlcnNlY3RpbmdgXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL2lzc3Vlcy8yMTFcbiAgICBpZiAoISgnaXNJbnRlcnNlY3RpbmcnIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlLFxuICAgICAgICAnaXNJbnRlcnNlY3RpbmcnLFxuICAgICAgICB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbWJlZGRpbmcgZnJhbWUgZWxlbWVudCwgaWYgYW55LlxuICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jXG4gICAqIEByZXR1cm4geyFFbGVtZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RnJhbWVFbGVtZW50KGRvYykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGRvYy5kZWZhdWx0VmlldyAmJiBkb2MuZGVmYXVsdFZpZXcuZnJhbWVFbGVtZW50KSB8fCBudWxsXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWdub3JlIHRoZSBlcnJvci5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSByb290IGRvY3VtZW50LlxuICAgKi9cbiAgdmFyIGRvY3VtZW50ID0gKGZ1bmN0aW9uKHN0YXJ0RG9jKSB7XG4gICAgdmFyIGRvYyA9IHN0YXJ0RG9jXG4gICAgdmFyIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGRvYylcbiAgICB3aGlsZSAoZnJhbWUpIHtcbiAgICAgIGRvYyA9IGZyYW1lLm93bmVyRG9jdW1lbnRcbiAgICAgIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGRvYylcbiAgICB9XG4gICAgcmV0dXJuIGRvY1xuICB9KSh3aW5kb3cuZG9jdW1lbnQpXG5cbiAgLyoqXG4gICAqIEFuIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LiBUaGlzIHJlZ2lzdHJ5IGV4aXN0cyB0byBob2xkIGEgc3Ryb25nXG4gICAqIHJlZmVyZW5jZSB0byBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZXMgY3VycmVudGx5IG9ic2VydmluZyBhIHRhcmdldFxuICAgKiBlbGVtZW50LiBXaXRob3V0IHRoaXMgcmVnaXN0cnksIGluc3RhbmNlcyB3aXRob3V0IGFub3RoZXIgcmVmZXJlbmNlIG1heSBiZVxuICAgKiBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgICovXG4gIHZhciByZWdpc3RyeSA9IFtdXG5cbiAgLyoqXG4gICAqIFRoZSBzaWduYWwgdXBkYXRlciBmb3IgY3Jvc3Mtb3JpZ2luIGludGVyc2VjdGlvbi4gV2hlbiBub3QgbnVsbCwgaXQgbWVhbnNcbiAgICogdGhhdCB0aGUgcG9seWZpbGwgaXMgY29uZmlndXJlZCB0byB3b3JrIGluIGEgY3Jvc3Mtb3JpZ2luIG1vZGUuXG4gICAqIEB0eXBlIHtmdW5jdGlvbihET01SZWN0fENsaWVudFJlY3QsIERPTVJlY3R8Q2xpZW50UmVjdCl9XG4gICAqL1xuICB2YXIgY3Jvc3NPcmlnaW5VcGRhdGVyID0gbnVsbFxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBjcm9zcy1vcmlnaW4gaW50ZXJzZWN0aW9uLiBPbmx5IHVzZWQgaW4gdGhlIGNyb3NzLW9yaWdpbiBtb2RlLlxuICAgKiBAdHlwZSB7RE9NUmVjdHxDbGllbnRSZWN0fVxuICAgKi9cbiAgdmFyIGNyb3NzT3JpZ2luUmVjdCA9IG51bGxcblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgY29uc3RydWN0b3IuXG4gICAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWVudHJ5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbnRyeSBBIGRpY3Rpb25hcnkgb2YgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KGVudHJ5KSB7XG4gICAgdGhpcy50aW1lID0gZW50cnkudGltZVxuICAgIHRoaXMudGFyZ2V0ID0gZW50cnkudGFyZ2V0XG4gICAgdGhpcy5yb290Qm91bmRzID0gZW5zdXJlRE9NUmVjdChlbnRyeS5yb290Qm91bmRzKVxuICAgIHRoaXMuYm91bmRpbmdDbGllbnRSZWN0ID0gZW5zdXJlRE9NUmVjdChlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QpXG4gICAgdGhpcy5pbnRlcnNlY3Rpb25SZWN0ID0gZW5zdXJlRE9NUmVjdChcbiAgICAgIGVudHJ5LmludGVyc2VjdGlvblJlY3QgfHwgZ2V0RW1wdHlSZWN0KClcbiAgICApXG4gICAgdGhpcy5pc0ludGVyc2VjdGluZyA9ICEhZW50cnkuaW50ZXJzZWN0aW9uUmVjdFxuXG4gICAgLy8gQ2FsY3VsYXRlcyB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvLlxuICAgIHZhciB0YXJnZXRSZWN0ID0gdGhpcy5ib3VuZGluZ0NsaWVudFJlY3RcbiAgICB2YXIgdGFyZ2V0QXJlYSA9IHRhcmdldFJlY3Qud2lkdGggKiB0YXJnZXRSZWN0LmhlaWdodFxuICAgIHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gdGhpcy5pbnRlcnNlY3Rpb25SZWN0XG4gICAgdmFyIGludGVyc2VjdGlvbkFyZWEgPSBpbnRlcnNlY3Rpb25SZWN0LndpZHRoICogaW50ZXJzZWN0aW9uUmVjdC5oZWlnaHRcblxuICAgIC8vIFNldHMgaW50ZXJzZWN0aW9uIHJhdGlvLlxuICAgIGlmICh0YXJnZXRBcmVhKSB7XG4gICAgICAvLyBSb3VuZCB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IG1hdGggaXNzdWVzOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9pc3N1ZXMvMzI0XG4gICAgICB0aGlzLmludGVyc2VjdGlvblJhdGlvID0gTnVtYmVyKFxuICAgICAgICAoaW50ZXJzZWN0aW9uQXJlYSAvIHRhcmdldEFyZWEpLnRvRml4ZWQoNClcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgYXJlYSBpcyB6ZXJvIGFuZCBpcyBpbnRlcnNlY3RpbmcsIHNldHMgdG8gMSwgb3RoZXJ3aXNlIHRvIDBcbiAgICAgIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSB0aGlzLmlzSW50ZXJzZWN0aW5nID8gMSA6IDBcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIGNvbnN0cnVjdG9yLlxuICAgKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2ludGVyc2VjdGlvbi1vYnNlcnZlci1pbnRlcmZhY2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgaW50ZXJzZWN0aW9uXG4gICAqICAgICBjaGFuZ2VzIGhhdmUgcXVldWVkLiBUaGUgZnVuY3Rpb24gaXMgbm90IGludm9rZWQgaWYgdGhlIHF1ZXVlIGhhc1xuICAgKiAgICAgYmVlbiBlbXB0aWVkIGJ5IGNhbGxpbmcgdGhlIGB0YWtlUmVjb3Jkc2AgbWV0aG9kLlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0X29wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy5yb290ICYmXG4gICAgICBvcHRpb25zLnJvb3Qubm9kZVR5cGUgIT0gMSAmJlxuICAgICAgb3B0aW9ucy5yb290Lm5vZGVUeXBlICE9IDlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncm9vdCBtdXN0IGJlIGEgRG9jdW1lbnQgb3IgRWxlbWVudCcpXG4gICAgfVxuXG4gICAgLy8gQmluZHMgYW5kIHRocm90dGxlcyBgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zYC5cbiAgICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSB0aHJvdHRsZShcbiAgICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucy5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5USFJPVFRMRV9USU1FT1VUXG4gICAgKVxuXG4gICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzLlxuICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSBbXVxuICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXVxuICAgIHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMgPSB0aGlzLl9wYXJzZVJvb3RNYXJnaW4ob3B0aW9ucy5yb290TWFyZ2luKVxuXG4gICAgLy8gUHVibGljIHByb3BlcnRpZXMuXG4gICAgdGhpcy50aHJlc2hvbGRzID0gdGhpcy5faW5pdFRocmVzaG9sZHMob3B0aW9ucy50aHJlc2hvbGQpXG4gICAgdGhpcy5yb290ID0gb3B0aW9ucy5yb290IHx8IG51bGxcbiAgICB0aGlzLnJvb3RNYXJnaW4gPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzXG4gICAgICAubWFwKGZ1bmN0aW9uKG1hcmdpbikge1xuICAgICAgICByZXR1cm4gbWFyZ2luLnZhbHVlICsgbWFyZ2luLnVuaXRcbiAgICAgIH0pXG4gICAgICAuam9pbignICcpXG5cbiAgICAvKiogQHByaXZhdGUgQGNvbnN0IHshQXJyYXk8IURvY3VtZW50Pn0gKi9cbiAgICB0aGlzLl9tb25pdG9yaW5nRG9jdW1lbnRzID0gW11cbiAgICAvKiogQHByaXZhdGUgQGNvbnN0IHshQXJyYXk8ZnVuY3Rpb24oKT59ICovXG4gICAgdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gaW50ZXJ2YWwgd2l0aGluIHdoaWNoIHRoZSBkb2N1bWVudCB3aWxsIGJlIGNoZWNrZWQgZm9yXG4gICAqIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlRIUk9UVExFX1RJTUVPVVQgPSAxMDBcblxuICAvKipcbiAgICogVGhlIGZyZXF1ZW5jeSBpbiB3aGljaCB0aGUgcG9seWZpbGwgcG9sbHMgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKiB0aGlzIGNhbiBiZSB1cGRhdGVkIG9uIGEgcGVyIGluc3RhbmNlIGJhc2lzIGFuZCBtdXN0IGJlIHNldCBwcmlvciB0b1xuICAgKiBjYWxsaW5nIGBvYnNlcnZlYCBvbiB0aGUgZmlyc3QgdGFyZ2V0LlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlBPTExfSU5URVJWQUwgPSBudWxsXG5cbiAgLyoqXG4gICAqIFVzZSBhIG11dGF0aW9uIG9ic2VydmVyIG9uIHRoZSByb290IGVsZW1lbnRcbiAgICogdG8gZGV0ZWN0IGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlVTRV9NVVRBVElPTl9PQlNFUlZFUiA9IHRydWVcblxuICAvKipcbiAgICogU2V0cyB1cCB0aGUgcG9seWZpbGwgaW4gdGhlIGNyb3NzLW9yaWdpbiBtb2RlLiBUaGUgcmVzdWx0IGlzIHRoZVxuICAgKiB1cGRhdGVyIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyB0d28gYXJndW1lbnRzOiBgYm91bmRpbmdDbGllbnRSZWN0YCBhbmRcbiAgICogYGludGVyc2VjdGlvblJlY3RgIC0ganVzdCBhcyB0aGVzZSBmaWVsZHMgd291bGQgYmUgYXZhaWxhYmxlIHRvIHRoZVxuICAgKiBwYXJlbnQgdmlhIGBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5YC4gVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkXG4gICAqIGVhY2ggdGltZSB0aGUgaWZyYW1lIHJlY2VpdmVzIGludGVyc2VjdGlvbiBpbmZvcm1hdGlvbiBmcm9tIHRoZSBwYXJlbnRcbiAgICogd2luZG93LCBlLmcuIHZpYSBtZXNzYWdpbmcuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9uKERPTVJlY3R8Q2xpZW50UmVjdCwgRE9NUmVjdHxDbGllbnRSZWN0KX1cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLl9zZXR1cENyb3NzT3JpZ2luVXBkYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghY3Jvc3NPcmlnaW5VcGRhdGVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSBib3VuZGluZ0NsaWVudFJlY3RcbiAgICAgICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSBpbnRlcnNlY3Rpb25SZWN0XG4gICAgICAgKi9cbiAgICAgIGNyb3NzT3JpZ2luVXBkYXRlciA9IGZ1bmN0aW9uKGJvdW5kaW5nQ2xpZW50UmVjdCwgaW50ZXJzZWN0aW9uUmVjdCkge1xuICAgICAgICBpZiAoIWJvdW5kaW5nQ2xpZW50UmVjdCB8fCAhaW50ZXJzZWN0aW9uUmVjdCkge1xuICAgICAgICAgIGNyb3NzT3JpZ2luUmVjdCA9IGdldEVtcHR5UmVjdCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3Jvc3NPcmlnaW5SZWN0ID0gY29udmVydEZyb21QYXJlbnRSZWN0KFxuICAgICAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0LFxuICAgICAgICAgICAgaW50ZXJzZWN0aW9uUmVjdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZWdpc3RyeS5mb3JFYWNoKGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcm9zc09yaWdpblVwZGF0ZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGNyb3NzLW9yaWdpbiBtb2RlLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIuX3Jlc2V0Q3Jvc3NPcmlnaW5VcGRhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgY3Jvc3NPcmlnaW5VcGRhdGVyID0gbnVsbFxuICAgIGNyb3NzT3JpZ2luUmVjdCA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGJhc2VkIG9uXG4gICAqIHRoZSB0aHJlc2hvbGRzIHZhbHVlcy5cbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHZhciBpc1RhcmdldEFscmVhZHlPYnNlcnZlZCA9IHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQgPT0gdGFyZ2V0XG4gICAgfSlcblxuICAgIGlmIChpc1RhcmdldEFscmVhZHlPYnNlcnZlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCEodGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PSAxKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0YXJnZXQgbXVzdCBiZSBhbiBFbGVtZW50JylcbiAgICB9XG5cbiAgICB0aGlzLl9yZWdpc3Rlckluc3RhbmNlKClcbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMucHVzaCh7IGVsZW1lbnQ6IHRhcmdldCwgZW50cnk6IG51bGwgfSlcbiAgICB0aGlzLl9tb25pdG9ySW50ZXJzZWN0aW9ucyh0YXJnZXQub3duZXJEb2N1bWVudClcbiAgICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIG9ic2VydmluZyBhIHRhcmdldCBlbGVtZW50IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5lbGVtZW50ICE9IHRhcmdldFxuICAgIH0pXG4gICAgdGhpcy5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyh0YXJnZXQub3duZXJEb2N1bWVudClcbiAgICBpZiAodGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBvYnNlcnZpbmcgYWxsIHRhcmdldCBlbGVtZW50cyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fdW5tb25pdG9yQWxsSW50ZXJzZWN0aW9ucygpXG4gICAgdGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFueSBxdWV1ZSBlbnRyaWVzIHRoYXQgaGF2ZSBub3QgeWV0IGJlZW4gcmVwb3J0ZWQgdG8gdGhlXG4gICAqIGNhbGxiYWNrIGFuZCBjbGVhcnMgdGhlIHF1ZXVlLiBUaGlzIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gICAqIGNhbGxiYWNrIHRvIG9idGFpbiB0aGUgYWJzb2x1dGUgbW9zdCB1cC10by1kYXRlIGludGVyc2VjdGlvbiBpbmZvcm1hdGlvbi5cbiAgICogQHJldHVybiB7QXJyYXl9IFRoZSBjdXJyZW50bHkgcXVldWVkIGVudHJpZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudGFrZVJlY29yZHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVjb3JkcyA9IHRoaXMuX3F1ZXVlZEVudHJpZXMuc2xpY2UoKVxuICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXVxuICAgIHJldHVybiByZWNvcmRzXG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyB0aGUgdGhyZXNob2xkIHZhbHVlIGZyb20gdGhlIHVzZXIgY29uZmlndXJhdGlvbiBvYmplY3QgYW5kXG4gICAqIHJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdW5pcXVlIHRocmVzaG9sZCB2YWx1ZXMuIElmIGEgdmFsdWUgaXMgbm90XG4gICAqIGJldHdlZW4gMCBhbmQgMSBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fG51bWJlcj19IG9wdF90aHJlc2hvbGQgQW4gb3B0aW9uYWwgdGhyZXNob2xkIHZhbHVlIG9yXG4gICAqICAgICBhIGxpc3Qgb2YgdGhyZXNob2xkIHZhbHVlcywgZGVmYXVsdGluZyB0byBbMF0uXG4gICAqIEByZXR1cm4ge0FycmF5fSBBIHNvcnRlZCBsaXN0IG9mIHVuaXF1ZSBhbmQgdmFsaWQgdGhyZXNob2xkIHZhbHVlcy5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faW5pdFRocmVzaG9sZHMgPSBmdW5jdGlvbihvcHRfdGhyZXNob2xkKSB7XG4gICAgdmFyIHRocmVzaG9sZCA9IG9wdF90aHJlc2hvbGQgfHwgWzBdXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRocmVzaG9sZCkpIHRocmVzaG9sZCA9IFt0aHJlc2hvbGRdXG5cbiAgICByZXR1cm4gdGhyZXNob2xkLnNvcnQoKS5maWx0ZXIoZnVuY3Rpb24odCwgaSwgYSkge1xuICAgICAgaWYgKHR5cGVvZiB0ICE9PSAnbnVtYmVyJyB8fCBpc05hTih0KSB8fCB0IDwgMCB8fCB0ID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ3RocmVzaG9sZCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmVseSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHQgIT09IGFbaSAtIDFdXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIHRoZSByb290TWFyZ2luIHZhbHVlIGZyb20gdGhlIHVzZXIgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICogYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGZvdXIgbWFyZ2luIHZhbHVlcyBhcyBhbiBvYmplY3QgY29udGFpbmluZ1xuICAgKiB0aGUgdmFsdWUgYW5kIHVuaXQgcHJvcGVydGllcy4gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIG5vdCBwcm9wZXJseVxuICAgKiBmb3JtYXR0ZWQgb3IgdXNlIGEgdW5pdCBvdGhlciB0aGFuIHB4IG9yICUsIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3Jvb3RNYXJnaW4gQW4gb3B0aW9uYWwgcm9vdE1hcmdpbiB2YWx1ZSxcbiAgICogICAgIGRlZmF1bHRpbmcgdG8gJzBweCcuXG4gICAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59IEFuIGFycmF5IG9mIG1hcmdpbiBvYmplY3RzIHdpdGggdGhlIGtleXNcbiAgICogICAgIHZhbHVlIGFuZCB1bml0LlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9wYXJzZVJvb3RNYXJnaW4gPSBmdW5jdGlvbihvcHRfcm9vdE1hcmdpbikge1xuICAgIHZhciBtYXJnaW5TdHJpbmcgPSBvcHRfcm9vdE1hcmdpbiB8fCAnMHB4J1xuICAgIHZhciBtYXJnaW5zID0gbWFyZ2luU3RyaW5nLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKG1hcmdpbikge1xuICAgICAgdmFyIHBhcnRzID0gL14oLT9cXGQqXFwuP1xcZCspKHB4fCUpJC8uZXhlYyhtYXJnaW4pXG4gICAgICBpZiAoIXBhcnRzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncm9vdE1hcmdpbiBtdXN0IGJlIHNwZWNpZmllZCBpbiBwaXhlbHMgb3IgcGVyY2VudCcpXG4gICAgICB9XG4gICAgICByZXR1cm4geyB2YWx1ZTogcGFyc2VGbG9hdChwYXJ0c1sxXSksIHVuaXQ6IHBhcnRzWzJdIH1cbiAgICB9KVxuXG4gICAgLy8gSGFuZGxlcyBzaG9ydGhhbmQuXG4gICAgbWFyZ2luc1sxXSA9IG1hcmdpbnNbMV0gfHwgbWFyZ2luc1swXVxuICAgIG1hcmdpbnNbMl0gPSBtYXJnaW5zWzJdIHx8IG1hcmdpbnNbMF1cbiAgICBtYXJnaW5zWzNdID0gbWFyZ2luc1szXSB8fCBtYXJnaW5zWzFdXG5cbiAgICByZXR1cm4gbWFyZ2luc1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBpZiB0aGUgcG9sbGluZyBpcyBub3QgYWxyZWFkeVxuICAgKiBoYXBwZW5pbmcsIGFuZCBpZiB0aGUgcGFnZSdzIHZpc2liaWxpdHkgc3RhdGUgaXMgdmlzaWJsZS5cbiAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKGRvYykge1xuICAgIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXdcbiAgICBpZiAoIXdpbikge1xuICAgICAgLy8gQWxyZWFkeSBkZXN0cm95ZWQuXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMuaW5kZXhPZihkb2MpICE9IC0xKSB7XG4gICAgICAvLyBBbHJlYWR5IG1vbml0b3JpbmcuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIHN0YXRlIGZvciBtb25pdG9yaW5nLlxuICAgIHZhciBjYWxsYmFjayA9IHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9uc1xuICAgIHZhciBtb25pdG9yaW5nSW50ZXJ2YWwgPSBudWxsXG4gICAgdmFyIGRvbU9ic2VydmVyID0gbnVsbFxuXG4gICAgLy8gSWYgYSBwb2xsIGludGVydmFsIGlzIHNldCwgdXNlIHBvbGxpbmcgaW5zdGVhZCBvZiBsaXN0ZW5pbmcgdG9cbiAgICAvLyByZXNpemUgYW5kIHNjcm9sbCBldmVudHMgb3IgRE9NIG11dGF0aW9ucy5cbiAgICBpZiAodGhpcy5QT0xMX0lOVEVSVkFMKSB7XG4gICAgICBtb25pdG9yaW5nSW50ZXJ2YWwgPSB3aW4uc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIHRoaXMuUE9MTF9JTlRFUlZBTClcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkRXZlbnQod2luLCAncmVzaXplJywgY2FsbGJhY2ssIHRydWUpXG4gICAgICBhZGRFdmVudChkb2MsICdzY3JvbGwnLCBjYWxsYmFjaywgdHJ1ZSlcbiAgICAgIGlmICh0aGlzLlVTRV9NVVRBVElPTl9PQlNFUlZFUiAmJiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luKSB7XG4gICAgICAgIGRvbU9ic2VydmVyID0gbmV3IHdpbi5NdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKVxuICAgICAgICBkb21PYnNlcnZlci5vYnNlcnZlKGRvYywge1xuICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMucHVzaChkb2MpXG4gICAgdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcy5wdXNoKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gR2V0IHRoZSB3aW5kb3cgb2JqZWN0IGFnYWluLiBXaGVuIGEgZnJpZW5kbHkgaWZyYW1lIGlzIGRlc3Ryb3llZCwgaXRcbiAgICAgIC8vIHdpbGwgYmUgbnVsbC5cbiAgICAgIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXdcblxuICAgICAgaWYgKHdpbikge1xuICAgICAgICBpZiAobW9uaXRvcmluZ0ludGVydmFsKSB7XG4gICAgICAgICAgd2luLmNsZWFySW50ZXJ2YWwobW9uaXRvcmluZ0ludGVydmFsKVxuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUV2ZW50KHdpbiwgJ3Jlc2l6ZScsIGNhbGxiYWNrLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICByZW1vdmVFdmVudChkb2MsICdzY3JvbGwnLCBjYWxsYmFjaywgdHJ1ZSlcbiAgICAgIGlmIChkb21PYnNlcnZlcikge1xuICAgICAgICBkb21PYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gQWxzbyBtb25pdG9yIHRoZSBwYXJlbnQuXG4gICAgdmFyIHJvb3REb2MgPVxuICAgICAgKHRoaXMucm9vdCAmJiAodGhpcy5yb290Lm93bmVyRG9jdW1lbnQgfHwgdGhpcy5yb290KSkgfHwgZG9jdW1lbnRcbiAgICBpZiAoZG9jICE9IHJvb3REb2MpIHtcbiAgICAgIHZhciBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChkb2MpXG4gICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgdGhpcy5fbW9uaXRvckludGVyc2VjdGlvbnMoZnJhbWUub3duZXJEb2N1bWVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2NcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKGRvYykge1xuICAgIHZhciBpbmRleCA9IHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMuaW5kZXhPZihkb2MpXG4gICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgcm9vdERvYyA9XG4gICAgICAodGhpcy5yb290ICYmICh0aGlzLnJvb3Qub3duZXJEb2N1bWVudCB8fCB0aGlzLnJvb3QpKSB8fCBkb2N1bWVudFxuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGRlcGVuZGVudCB0YXJnZXRzIGFyZSBzdGlsbCByZW1haW5pbmcuXG4gICAgdmFyIGhhc0RlcGVuZGVudFRhcmdldHMgPSB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuc29tZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIgaXRlbURvYyA9IGl0ZW0uZWxlbWVudC5vd25lckRvY3VtZW50XG4gICAgICAvLyBUYXJnZXQgaXMgaW4gdGhpcyBjb250ZXh0LlxuICAgICAgaWYgKGl0ZW1Eb2MgPT0gZG9jKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICAvLyBUYXJnZXQgaXMgbmVzdGVkIGluIHRoaXMgY29udGV4dC5cbiAgICAgIHdoaWxlIChpdGVtRG9jICYmIGl0ZW1Eb2MgIT0gcm9vdERvYykge1xuICAgICAgICB2YXIgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoaXRlbURvYylcbiAgICAgICAgaXRlbURvYyA9IGZyYW1lICYmIGZyYW1lLm93bmVyRG9jdW1lbnRcbiAgICAgICAgaWYgKGl0ZW1Eb2MgPT0gZG9jKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcbiAgICBpZiAoaGFzRGVwZW5kZW50VGFyZ2V0cykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVW5zdWJzY3JpYmUuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlc1tpbmRleF1cbiAgICB0aGlzLl9tb25pdG9yaW5nRG9jdW1lbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLnNwbGljZShpbmRleCwgMSlcbiAgICB1bnN1YnNjcmliZSgpXG5cbiAgICAvLyBBbHNvIHVubW9uaXRvciB0aGUgcGFyZW50LlxuICAgIGlmIChkb2MgIT0gcm9vdERvYykge1xuICAgICAgdmFyIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGRvYylcbiAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICB0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKGZyYW1lLm93bmVyRG9jdW1lbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VubW9uaXRvckFsbEludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdW5zdWJzY3JpYmVzID0gdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcy5zbGljZSgwKVxuICAgIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMubGVuZ3RoID0gMFxuICAgIHRoaXMuX21vbml0b3JpbmdVbnN1YnNjcmliZXMubGVuZ3RoID0gMFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5zdWJzY3JpYmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB1bnN1YnNjcmliZXNbaV0oKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTY2FucyBlYWNoIG9ic2VydmF0aW9uIHRhcmdldCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYW5kIGFkZHMgdGhlbVxuICAgKiB0byB0aGUgaW50ZXJuYWwgZW50cmllcyBxdWV1ZS4gSWYgbmV3IGVudHJpZXMgYXJlIGZvdW5kLCBpdFxuICAgKiBzY2hlZHVsZXMgdGhlIGNhbGxiYWNrIHRvIGJlIGludm9rZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yb290ICYmIGNyb3NzT3JpZ2luVXBkYXRlciAmJiAhY3Jvc3NPcmlnaW5SZWN0KSB7XG4gICAgICAvLyBDcm9zcyBvcmlnaW4gbW9uaXRvcmluZywgYnV0IG5vIGluaXRpYWwgZGF0YSBhdmFpbGFibGUgeWV0LlxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIHJvb3RJc0luRG9tID0gdGhpcy5fcm9vdElzSW5Eb20oKVxuICAgIHZhciByb290UmVjdCA9IHJvb3RJc0luRG9tID8gdGhpcy5fZ2V0Um9vdFJlY3QoKSA6IGdldEVtcHR5UmVjdCgpXG5cbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gaXRlbS5lbGVtZW50XG4gICAgICB2YXIgdGFyZ2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0YXJnZXQpXG4gICAgICB2YXIgcm9vdENvbnRhaW5zVGFyZ2V0ID0gdGhpcy5fcm9vdENvbnRhaW5zVGFyZ2V0KHRhcmdldClcbiAgICAgIHZhciBvbGRFbnRyeSA9IGl0ZW0uZW50cnlcbiAgICAgIHZhciBpbnRlcnNlY3Rpb25SZWN0ID1cbiAgICAgICAgcm9vdElzSW5Eb20gJiZcbiAgICAgICAgcm9vdENvbnRhaW5zVGFyZ2V0ICYmXG4gICAgICAgIHRoaXMuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uKHRhcmdldCwgdGFyZ2V0UmVjdCwgcm9vdFJlY3QpXG5cbiAgICAgIHZhciByb290Qm91bmRzID0gbnVsbFxuICAgICAgaWYgKCF0aGlzLl9yb290Q29udGFpbnNUYXJnZXQodGFyZ2V0KSkge1xuICAgICAgICByb290Qm91bmRzID0gZ2V0RW1wdHlSZWN0KClcbiAgICAgIH0gZWxzZSBpZiAoIWNyb3NzT3JpZ2luVXBkYXRlciB8fCB0aGlzLnJvb3QpIHtcbiAgICAgICAgcm9vdEJvdW5kcyA9IHJvb3RSZWN0XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdFbnRyeSA9IChpdGVtLmVudHJ5ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoe1xuICAgICAgICB0aW1lOiBub3coKSxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdDogdGFyZ2V0UmVjdCxcbiAgICAgICAgcm9vdEJvdW5kczogcm9vdEJvdW5kcyxcbiAgICAgICAgaW50ZXJzZWN0aW9uUmVjdDogaW50ZXJzZWN0aW9uUmVjdFxuICAgICAgfSkpXG5cbiAgICAgIGlmICghb2xkRW50cnkpIHtcbiAgICAgICAgdGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KVxuICAgICAgfSBlbHNlIGlmIChyb290SXNJbkRvbSAmJiByb290Q29udGFpbnNUYXJnZXQpIHtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyBlbnRyeSBpbnRlcnNlY3Rpb24gcmF0aW8gaGFzIGNyb3NzZWQgYW55IG9mIHRoZVxuICAgICAgICAvLyB0aHJlc2hvbGRzLCBhZGQgYSBuZXcgZW50cnkuXG4gICAgICAgIGlmICh0aGlzLl9oYXNDcm9zc2VkVGhyZXNob2xkKG9sZEVudHJ5LCBuZXdFbnRyeSkpIHtcbiAgICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSByb290IGlzIG5vdCBpbiB0aGUgRE9NIG9yIHRhcmdldCBpcyBub3QgY29udGFpbmVkIHdpdGhpblxuICAgICAgICAvLyByb290IGJ1dCB0aGUgcHJldmlvdXMgZW50cnkgZm9yIHRoaXMgdGFyZ2V0IGhhZCBhbiBpbnRlcnNlY3Rpb24sXG4gICAgICAgIC8vIGFkZCBhIG5ldyByZWNvcmQgaW5kaWNhdGluZyByZW1vdmFsLlxuICAgICAgICBpZiAob2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB0aGlzKVxuXG4gICAgaWYgKHRoaXMuX3F1ZXVlZEVudHJpZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9jYWxsYmFjayh0aGlzLnRha2VSZWNvcmRzKCksIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYSB0YXJnZXQgYW5kIHJvb3QgcmVjdCBjb21wdXRlcyB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gdGhlblxuICAgKiBmb2xsb3dpbmcgdGhlIGFsZ29yaXRobSBpbiB0aGUgc3BlYy5cbiAgICogVE9ETyhwaGlsaXB3YWx0b24pOiBhdCB0aGlzIHRpbWUgY2xpcC1wYXRoIGlzIG5vdCBjb25zaWRlcmVkLlxuICAgKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2NhbGN1bGF0ZS1pbnRlcnNlY3Rpb24tcmVjdC1hbGdvXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFJlY3QgVGhlIGJvdW5kaW5nIHJlY3Qgb2YgdGhlIHRhcmdldC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHJvb3RSZWN0IFRoZSBib3VuZGluZyByZWN0IG9mIHRoZSByb290IGFmdGVyIGJlaW5nXG4gICAqICAgICBleHBhbmRlZCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAgICogQHJldHVybiB7P09iamVjdH0gVGhlIGZpbmFsIGludGVyc2VjdGlvbiByZWN0IG9iamVjdCBvciB1bmRlZmluZWQgaWYgbm9cbiAgICogICAgIGludGVyc2VjdGlvbiBpcyBmb3VuZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbihcbiAgICB0YXJnZXQsXG4gICAgdGFyZ2V0UmVjdCxcbiAgICByb290UmVjdFxuICApIHtcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PSAnbm9uZScpIHJldHVyblxuXG4gICAgdmFyIGludGVyc2VjdGlvblJlY3QgPSB0YXJnZXRSZWN0XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudE5vZGUodGFyZ2V0KVxuICAgIHZhciBhdFJvb3QgPSBmYWxzZVxuXG4gICAgd2hpbGUgKCFhdFJvb3QgJiYgcGFyZW50KSB7XG4gICAgICB2YXIgcGFyZW50UmVjdCA9IG51bGxcbiAgICAgIHZhciBwYXJlbnRDb21wdXRlZFN0eWxlID1cbiAgICAgICAgcGFyZW50Lm5vZGVUeXBlID09IDEgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpIDoge31cblxuICAgICAgLy8gSWYgdGhlIHBhcmVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG4gICAgICBpZiAocGFyZW50Q29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuIG51bGxcblxuICAgICAgaWYgKHBhcmVudCA9PSB0aGlzLnJvb3QgfHwgcGFyZW50Lm5vZGVUeXBlID09IC8qIERPQ1VNRU5UICovIDkpIHtcbiAgICAgICAgYXRSb290ID0gdHJ1ZVxuICAgICAgICBpZiAocGFyZW50ID09IHRoaXMucm9vdCB8fCBwYXJlbnQgPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICBpZiAoY3Jvc3NPcmlnaW5VcGRhdGVyICYmICF0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIWNyb3NzT3JpZ2luUmVjdCB8fFxuICAgICAgICAgICAgICAoY3Jvc3NPcmlnaW5SZWN0LndpZHRoID09IDAgJiYgY3Jvc3NPcmlnaW5SZWN0LmhlaWdodCA9PSAwKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIC8vIEEgMC1zaXplIGNyb3NzLW9yaWdpbiBpbnRlcnNlY3Rpb24gbWVhbnMgbm8taW50ZXJzZWN0aW9uLlxuICAgICAgICAgICAgICBwYXJlbnQgPSBudWxsXG4gICAgICAgICAgICAgIHBhcmVudFJlY3QgPSBudWxsXG4gICAgICAgICAgICAgIGludGVyc2VjdGlvblJlY3QgPSBudWxsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJlbnRSZWN0ID0gY3Jvc3NPcmlnaW5SZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudFJlY3QgPSByb290UmVjdFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSdzIGEgZnJhbWUgdGhhdCBjYW4gYmUgbmF2aWdhdGVkIHRvLlxuICAgICAgICAgIHZhciBmcmFtZSA9IGdldFBhcmVudE5vZGUocGFyZW50KVxuICAgICAgICAgIHZhciBmcmFtZVJlY3QgPSBmcmFtZSAmJiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZnJhbWUpXG4gICAgICAgICAgdmFyIGZyYW1lSW50ZXJzZWN0ID1cbiAgICAgICAgICAgIGZyYW1lICYmXG4gICAgICAgICAgICB0aGlzLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbihmcmFtZSwgZnJhbWVSZWN0LCByb290UmVjdClcbiAgICAgICAgICBpZiAoZnJhbWVSZWN0ICYmIGZyYW1lSW50ZXJzZWN0KSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBmcmFtZVxuICAgICAgICAgICAgcGFyZW50UmVjdCA9IGNvbnZlcnRGcm9tUGFyZW50UmVjdChmcmFtZVJlY3QsIGZyYW1lSW50ZXJzZWN0KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBudWxsXG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25SZWN0ID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgbm9uLXZpc2libGUgb3ZlcmZsb3csIGFuZCBpdCdzIG5vdCB0aGUgPGJvZHk+XG4gICAgICAgIC8vIG9yIDxodG1sPiBlbGVtZW50LCB1cGRhdGUgdGhlIGludGVyc2VjdGlvbiByZWN0LlxuICAgICAgICAvLyBOb3RlOiA8Ym9keT4gYW5kIDxodG1sPiBjYW5ub3QgYmUgY2xpcHBlZCB0byBhIHJlY3QgdGhhdCdzIG5vdCBhbHNvXG4gICAgICAgIC8vIHRoZSBkb2N1bWVudCByZWN0LCBzbyBubyBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgaW50ZXJzZWN0aW9uLlxuICAgICAgICB2YXIgZG9jID0gcGFyZW50Lm93bmVyRG9jdW1lbnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBhcmVudCAhPSBkb2MuYm9keSAmJlxuICAgICAgICAgIHBhcmVudCAhPSBkb2MuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAgICAgcGFyZW50Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyAhPSAndmlzaWJsZSdcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgZWl0aGVyIG9mIHRoZSBhYm92ZSBjb25kaXRpb25hbHMgc2V0IGEgbmV3IHBhcmVudFJlY3QsXG4gICAgICAvLyBjYWxjdWxhdGUgbmV3IGludGVyc2VjdGlvbiBkYXRhLlxuICAgICAgaWYgKHBhcmVudFJlY3QpIHtcbiAgICAgICAgaW50ZXJzZWN0aW9uUmVjdCA9IGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHBhcmVudFJlY3QsIGludGVyc2VjdGlvblJlY3QpXG4gICAgICB9XG4gICAgICBpZiAoIWludGVyc2VjdGlvblJlY3QpIGJyZWFrXG4gICAgICBwYXJlbnQgPSBwYXJlbnQgJiYgZ2V0UGFyZW50Tm9kZShwYXJlbnQpXG4gICAgfVxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25SZWN0XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcm9vdCByZWN0IGFmdGVyIGJlaW5nIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtDbGllbnRSZWN0fSBUaGUgZXhwYW5kZWQgcm9vdCByZWN0LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9nZXRSb290UmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByb290UmVjdFxuICAgIGlmICh0aGlzLnJvb3QgJiYgIWlzRG9jKHRoaXMucm9vdCkpIHtcbiAgICAgIHJvb3RSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRoaXMucm9vdClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIDxodG1sPi88Ym9keT4gaW5zdGVhZCBvZiB3aW5kb3cgc2luY2Ugc2Nyb2xsIGJhcnMgYWZmZWN0IHNpemUuXG4gICAgICB2YXIgZG9jID0gaXNEb2ModGhpcy5yb290KSA/IHRoaXMucm9vdCA6IGRvY3VtZW50XG4gICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnRcbiAgICAgIHZhciBib2R5ID0gZG9jLmJvZHlcbiAgICAgIHJvb3RSZWN0ID0ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG4gICAgICAgIHdpZHRoOiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG4gICAgICAgIGJvdHRvbTogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHQsXG4gICAgICAgIGhlaWdodDogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4ocm9vdFJlY3QpXG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhIHJlY3QgYW5kIGV4cGFuZHMgaXQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSByZWN0IFRoZSByZWN0IG9iamVjdCB0byBleHBhbmQuXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBleHBhbmRlZCByZWN0LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9leHBhbmRSZWN0QnlSb290TWFyZ2luID0gZnVuY3Rpb24ocmVjdCkge1xuICAgIHZhciBtYXJnaW5zID0gdGhpcy5fcm9vdE1hcmdpblZhbHVlcy5tYXAoZnVuY3Rpb24obWFyZ2luLCBpKSB7XG4gICAgICByZXR1cm4gbWFyZ2luLnVuaXQgPT0gJ3B4J1xuICAgICAgICA/IG1hcmdpbi52YWx1ZVxuICAgICAgICA6IChtYXJnaW4udmFsdWUgKiAoaSAlIDIgPyByZWN0LndpZHRoIDogcmVjdC5oZWlnaHQpKSAvIDEwMFxuICAgIH0pXG4gICAgdmFyIG5ld1JlY3QgPSB7XG4gICAgICB0b3A6IHJlY3QudG9wIC0gbWFyZ2luc1swXSxcbiAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0ICsgbWFyZ2luc1sxXSxcbiAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20gKyBtYXJnaW5zWzJdLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0IC0gbWFyZ2luc1szXVxuICAgIH1cbiAgICBuZXdSZWN0LndpZHRoID0gbmV3UmVjdC5yaWdodCAtIG5ld1JlY3QubGVmdFxuICAgIG5ld1JlY3QuaGVpZ2h0ID0gbmV3UmVjdC5ib3R0b20gLSBuZXdSZWN0LnRvcFxuXG4gICAgcmV0dXJuIG5ld1JlY3RcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIGFuIG9sZCBhbmQgbmV3IGVudHJ5IGFuZCByZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZVxuICAgKiB0aHJlc2hvbGQgdmFsdWVzIGhhcyBiZWVuIGNyb3NzZWQuXG4gICAqIEBwYXJhbSB7P0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG9sZEVudHJ5IFRoZSBwcmV2aW91cyBlbnRyeSBmb3IgYVxuICAgKiAgICBwYXJ0aWN1bGFyIHRhcmdldCBlbGVtZW50IG9yIG51bGwgaWYgbm8gcHJldmlvdXMgZW50cnkgZXhpc3RzLlxuICAgKiBAcGFyYW0ge0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG5ld0VudHJ5IFRoZSBjdXJyZW50IGVudHJ5IGZvciBhXG4gICAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhIGFueSB0aHJlc2hvbGQgaGFzIGJlZW4gY3Jvc3NlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faGFzQ3Jvc3NlZFRocmVzaG9sZCA9IGZ1bmN0aW9uKFxuICAgIG9sZEVudHJ5LFxuICAgIG5ld0VudHJ5XG4gICkge1xuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIGVhc2llciwgYW4gZW50cnkgdGhhdCBoYXMgYSByYXRpbyBvZiAwXG4gICAgLy8gYnV0IGRvZXMgbm90IGFjdHVhbGx5IGludGVyc2VjdCBpcyBnaXZlbiBhIHZhbHVlIG9mIC0xXG4gICAgdmFyIG9sZFJhdGlvID1cbiAgICAgIG9sZEVudHJ5ICYmIG9sZEVudHJ5LmlzSW50ZXJzZWN0aW5nID8gb2xkRW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gfHwgMCA6IC0xXG4gICAgdmFyIG5ld1JhdGlvID0gbmV3RW50cnkuaXNJbnRlcnNlY3RpbmdcbiAgICAgID8gbmV3RW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gfHwgMFxuICAgICAgOiAtMVxuXG4gICAgLy8gSWdub3JlIHVuY2hhbmdlZCByYXRpb3NcbiAgICBpZiAob2xkUmF0aW8gPT09IG5ld1JhdGlvKSByZXR1cm5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50aHJlc2hvbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdGhyZXNob2xkID0gdGhpcy50aHJlc2hvbGRzW2ldXG5cbiAgICAgIC8vIFJldHVybiB0cnVlIGlmIGFuIGVudHJ5IG1hdGNoZXMgYSB0aHJlc2hvbGQgb3IgaWYgdGhlIG5ldyByYXRpb1xuICAgICAgLy8gYW5kIHRoZSBvbGQgcmF0aW8gYXJlIG9uIHRoZSBvcHBvc2l0ZSBzaWRlcyBvZiBhIHRocmVzaG9sZC5cbiAgICAgIGlmIChcbiAgICAgICAgdGhyZXNob2xkID09IG9sZFJhdGlvIHx8XG4gICAgICAgIHRocmVzaG9sZCA9PSBuZXdSYXRpbyB8fFxuICAgICAgICB0aHJlc2hvbGQgPCBvbGRSYXRpbyAhPT0gdGhyZXNob2xkIDwgbmV3UmF0aW9cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGlzIGFuIGVsZW1lbnQgYW5kIGlzIGluIHRoZSBET00uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RJc0luRG9tID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLnJvb3QgfHwgY29udGFpbnNEZWVwKGRvY3VtZW50LCB0aGlzLnJvb3QpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgdGFyZ2V0IGVsZW1lbnQgdG8gY2hlY2suXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2Ygcm9vdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdENvbnRhaW5zVGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdmFyIHJvb3REb2MgPVxuICAgICAgKHRoaXMucm9vdCAmJiAodGhpcy5yb290Lm93bmVyRG9jdW1lbnQgfHwgdGhpcy5yb290KSkgfHwgZG9jdW1lbnRcbiAgICByZXR1cm4gKFxuICAgICAgY29udGFpbnNEZWVwKHJvb3REb2MsIHRhcmdldCkgJiZcbiAgICAgICghdGhpcy5yb290IHx8IHJvb3REb2MgPT0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGluc3RhbmNlIHRvIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkgaWYgaXQgaXNuJ3RcbiAgICogYWxyZWFkeSBwcmVzZW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHJlZ2lzdHJ5LmluZGV4T2YodGhpcykgPCAwKSB7XG4gICAgICByZWdpc3RyeS5wdXNoKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGluc3RhbmNlIGZyb20gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZGV4ID0gcmVnaXN0cnkuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCAhPSAtMSkgcmVnaXN0cnkuc3BsaWNlKGluZGV4LCAxKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgcGVyZm9ybWFuY2Uubm93KCkgbWV0aG9kIG9yIG51bGwgaW4gYnJvd3NlcnNcbiAgICogdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBBUEkuXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgcGFnZSB3YXMgcmVxdWVzdGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2Uubm93ICYmIHBlcmZvcm1hbmNlLm5vdygpXG4gIH1cblxuICAvKipcbiAgICogVGhyb3R0bGVzIGEgZnVuY3Rpb24gYW5kIGRlbGF5cyBpdHMgZXhlY3V0aW9uLCBzbyBpdCdzIG9ubHkgY2FsbGVkIGF0IG1vc3RcbiAgICogb25jZSB3aXRoaW4gYSBnaXZlbiB0aW1lIHBlcmlvZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dCBUaGUgYW1vdW50IG9mIHRpbWUgdGhhdCBtdXN0IHBhc3MgYmVmb3JlIHRoZVxuICAgKiAgICAgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCBhZ2Fpbi5cbiAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiB0aHJvdHRsZShmbiwgdGltZW91dCkge1xuICAgIHZhciB0aW1lciA9IG51bGxcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRpbWVyKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBmbigpXG4gICAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICAgIH0sIHRpbWVvdXQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlciB0byBhIERPTSBub2RlIGVuc3VyaW5nIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBET00gbm9kZSB0byBhZGQgdGhlIGV2ZW50IGhhbmRsZXIgdG8uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYWRkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIE9wdGlvbmFsbHkgYWRkcyB0aGUgZXZlbiB0byB0aGUgY2FwdHVyZVxuICAgKiAgICAgcGhhc2UuIE5vdGU6IHRoaXMgb25seSB3b3JrcyBpbiBtb2Rlcm4gYnJvd3NlcnMuXG4gICAqL1xuICBmdW5jdGlvbiBhZGRFdmVudChub2RlLCBldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUuYXR0YWNoRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHByZXZpb3VzbHkgYWRkZWQgZXZlbnQgaGFuZGxlciBmcm9tIGEgRE9NIG5vZGUuXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVyIGZyb20uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gcmVtb3ZlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIElmIHRoZSBldmVudCBoYW5kbGVyIHdhcyBhZGRlZCB3aXRoIHRoaXNcbiAgICogICAgIGZsYWcgc2V0IHRvIHRydWUsIGl0IHNob3VsZCBiZSBzZXQgdG8gdHJ1ZSBoZXJlIGluIG9yZGVyIHRvIHJlbW92ZSBpdC5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZS5kZXRhdGNoRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUuZGV0YXRjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIHR3byByZWN0IG9iamVjdHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWN0MSBUaGUgZmlyc3QgcmVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QyIFRoZSBzZWNvbmQgcmVjdC5cbiAgICogQHJldHVybiB7P09iamVjdHw/Q2xpZW50UmVjdH0gVGhlIGludGVyc2VjdGlvbiByZWN0IG9yIHVuZGVmaW5lZCBpZiBub1xuICAgKiAgICAgaW50ZXJzZWN0aW9uIGlzIGZvdW5kLlxuICAgKi9cbiAgZnVuY3Rpb24gY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24ocmVjdDEsIHJlY3QyKSB7XG4gICAgdmFyIHRvcCA9IE1hdGgubWF4KHJlY3QxLnRvcCwgcmVjdDIudG9wKVxuICAgIHZhciBib3R0b20gPSBNYXRoLm1pbihyZWN0MS5ib3R0b20sIHJlY3QyLmJvdHRvbSlcbiAgICB2YXIgbGVmdCA9IE1hdGgubWF4KHJlY3QxLmxlZnQsIHJlY3QyLmxlZnQpXG4gICAgdmFyIHJpZ2h0ID0gTWF0aC5taW4ocmVjdDEucmlnaHQsIHJlY3QyLnJpZ2h0KVxuICAgIHZhciB3aWR0aCA9IHJpZ2h0IC0gbGVmdFxuICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3BcblxuICAgIHJldHVybiAoXG4gICAgICAod2lkdGggPj0gMCAmJlxuICAgICAgICBoZWlnaHQgPj0gMCAmJiB7XG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH0pIHx8XG4gICAgICBudWxsXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFNoaW1zIHRoZSBuYXRpdmUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZvciBjb21wYXRpYmlsaXR5IHdpdGggb2xkZXIgSUUuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgVGhlIGVsZW1lbnQgd2hvc2UgYm91bmRpbmcgcmVjdCB0byBnZXQuXG4gICAqIEByZXR1cm4ge0RPTVJlY3R8Q2xpZW50UmVjdH0gVGhlIChwb3NzaWJseSBzaGltbWVkKSByZWN0IG9mIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG4gICAgdmFyIHJlY3RcblxuICAgIHRyeSB7XG4gICAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElnbm9yZSBXaW5kb3dzIDcgSUUxMSBcIlVuc3BlY2lmaWVkIGVycm9yXCJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvcHVsbC8yMDVcbiAgICB9XG5cbiAgICBpZiAoIXJlY3QpIHJldHVybiBnZXRFbXB0eVJlY3QoKVxuXG4gICAgLy8gT2xkZXIgSUVcbiAgICBpZiAoIShyZWN0LndpZHRoICYmIHJlY3QuaGVpZ2h0KSkge1xuICAgICAgcmVjdCA9IHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZW1wdHkgcmVjdCBvYmplY3QuIEFuIGVtcHR5IHJlY3QgaXMgcmV0dXJuZWQgd2hlbiBhbiBlbGVtZW50XG4gICAqIGlzIG5vdCBpbiB0aGUgRE9NLlxuICAgKiBAcmV0dXJuIHtDbGllbnRSZWN0fSBUaGUgZW1wdHkgcmVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEVtcHR5UmVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlIHRoYXQgdGhlIHJlc3VsdCBoYXMgYWxsIG9mIHRoZSBuZWNlc3NhcnkgZmllbGRzIG9mIHRoZSBET01SZWN0LlxuICAgKiBTcGVjaWZpY2FsbHkgdGhpcyBlbnN1cmVzIHRoYXQgYHhgIGFuZCBgeWAgZmllbGRzIGFyZSBzZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7P0RPTVJlY3R8P0NsaWVudFJlY3R9IHJlY3RcbiAgICogQHJldHVybiB7P0RPTVJlY3R9XG4gICAqL1xuICBmdW5jdGlvbiBlbnN1cmVET01SZWN0KHJlY3QpIHtcbiAgICAvLyBBIGBET01SZWN0YCBvYmplY3QgaGFzIGB4YCBhbmQgYHlgIGZpZWxkcy5cbiAgICBpZiAoIXJlY3QgfHwgJ3gnIGluIHJlY3QpIHtcbiAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIC8vIEEgSUUncyBgQ2xpZW50UmVjdGAgdHlwZSBkb2VzIG5vdCBoYXZlIGB4YCBhbmQgYHlgLiBUaGUgc2FtZSBpcyB0aGUgY2FzZVxuICAgIC8vIGZvciBpbnRlcm5hbGx5IGNhbGN1bGF0ZWQgUmVjdCBvYmplY3RzLiBGb3IgdGhlIHB1cnBvc2VzIG9mXG4gICAgLy8gYEludGVyc2VjdGlvbk9ic2VydmVyYCwgaXQncyBzdWZmaWNpZW50IHRvIHNpbXBseSBtaXJyb3IgYGxlZnRgIGFuZCBgdG9wYFxuICAgIC8vIGZvciB0aGVzZSBmaWVsZHMuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICB5OiByZWN0LnRvcCxcbiAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICB4OiByZWN0LmxlZnQsXG4gICAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZlcnRzIHRoZSBpbnRlcnNlY3Rpb24gYW5kIGJvdW5kaW5nIHJlY3QgZnJvbSB0aGUgcGFyZW50IChmcmFtZSkgQkNSIHRvXG4gICAqIHRoZSBsb2NhbCBCQ1Igc3BhY2UuXG4gICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSBwYXJlbnRCb3VuZGluZ1JlY3QgVGhlIHBhcmVudCdzIGJvdW5kIGNsaWVudCByZWN0LlxuICAgKiBAcGFyYW0ge0RPTVJlY3R8Q2xpZW50UmVjdH0gcGFyZW50SW50ZXJzZWN0aW9uUmVjdCBUaGUgcGFyZW50J3Mgb3duIGludGVyc2VjdGlvbiByZWN0LlxuICAgKiBAcmV0dXJuIHtDbGllbnRSZWN0fSBUaGUgbG9jYWwgcm9vdCBib3VuZGluZyByZWN0IGZvciB0aGUgcGFyZW50J3MgY2hpbGRyZW4uXG4gICAqL1xuICBmdW5jdGlvbiBjb252ZXJ0RnJvbVBhcmVudFJlY3QocGFyZW50Qm91bmRpbmdSZWN0LCBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0KSB7XG4gICAgdmFyIHRvcCA9IHBhcmVudEludGVyc2VjdGlvblJlY3QudG9wIC0gcGFyZW50Qm91bmRpbmdSZWN0LnRvcFxuICAgIHZhciBsZWZ0ID0gcGFyZW50SW50ZXJzZWN0aW9uUmVjdC5sZWZ0IC0gcGFyZW50Qm91bmRpbmdSZWN0LmxlZnRcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0b3AsXG4gICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgaGVpZ2h0OiBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LmhlaWdodCxcbiAgICAgIHdpZHRoOiBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LndpZHRoLFxuICAgICAgYm90dG9tOiB0b3AgKyBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LmhlaWdodCxcbiAgICAgIHJpZ2h0OiBsZWZ0ICsgcGFyZW50SW50ZXJzZWN0aW9uUmVjdC53aWR0aFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIGEgcGFyZW50IGVsZW1lbnQgY29udGFpbnMgYSBjaGlsZCBlbGVtZW50IChpbmNsdWRpbmcgaW5zaWRlXG4gICAqIHNoYWRvdyBET00pLlxuICAgKiBAcGFyYW0ge05vZGV9IHBhcmVudCBUaGUgcGFyZW50IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7Tm9kZX0gY2hpbGQgVGhlIGNoaWxkIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhcmVudCBub2RlIGNvbnRhaW5zIHRoZSBjaGlsZCBub2RlLlxuICAgKi9cbiAgZnVuY3Rpb24gY29udGFpbnNEZWVwKHBhcmVudCwgY2hpbGQpIHtcbiAgICB2YXIgbm9kZSA9IGNoaWxkXG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChub2RlID09IHBhcmVudCkgcmV0dXJuIHRydWVcblxuICAgICAgbm9kZSA9IGdldFBhcmVudE5vZGUobm9kZSlcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcGFyZW50IG5vZGUgb2YgYW4gZWxlbWVudCBvciBpdHMgaG9zdCBlbGVtZW50IGlmIHRoZSBwYXJlbnQgbm9kZVxuICAgKiBpcyBhIHNoYWRvdyByb290LlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIG5vZGUgd2hvc2UgcGFyZW50IHRvIGdldC5cbiAgICogQHJldHVybiB7Tm9kZXxudWxsfSBUaGUgcGFyZW50IG5vZGUgb3IgbnVsbCBpZiBubyBwYXJlbnQgZXhpc3RzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZVxuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gLyogRE9DVU1FTlQgKi8gOSAmJiBub2RlICE9IGRvY3VtZW50KSB7XG4gICAgICAvLyBJZiB0aGlzIG5vZGUgaXMgYSBkb2N1bWVudCBub2RlLCBsb29rIGZvciB0aGUgZW1iZWRkaW5nIGZyYW1lLlxuICAgICAgcmV0dXJuIGdldEZyYW1lRWxlbWVudChub2RlKVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBwYXJlbnQgaGFzIGVsZW1lbnQgdGhhdCBpcyBhc3NpZ25lZCB0aHJvdWdoIHNoYWRvdyByb290IHNsb3RcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5hc3NpZ25lZFNsb3QucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09IDExICYmIHBhcmVudC5ob3N0KSB7XG4gICAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGEgc2hhZG93IHJvb3QsIHJldHVybiB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAgcmV0dXJuIHBhcmVudC5ob3N0XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBgbm9kZWAgaXMgYSBEb2N1bWVudC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzRG9jKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSA5XG4gIH1cblxuICAvLyBFeHBvc2VzIHRoZSBjb25zdHJ1Y3RvcnMgZ2xvYmFsbHkuXG4gIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA9IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5ID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVxufSkoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==