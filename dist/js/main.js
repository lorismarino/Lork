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
 * v1.0.0
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
        console.log('ch');
        _this.$.totalView.innerText = (_this.$.input.value * _this.step).toLocaleString();
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


        var $content = document.createElement('div');
        $content.classList.add('custom-select__content');
        this.items.forEach(function (item) {
          var $item = document.createElement('div');
          $item.dataset.label = item.innerText;
          $item.dataset.value = item.getAttribute('value');
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
        $container.setAttribute('aria-labelledby', this.name);
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
    key: "events",
    value: function events() {
      var _this = this;

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
      }

      window.addEventListener('resize', function () {
        _this.initialize();
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
      this.items = this.type === 'link' ? JSON.parse(this.$.dropdown.dataset.items) : null; // Create JSON object with items.
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
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accordion */ "./js/Accordion.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animation */ "./js/Animation.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel */ "./js/Carousel.js");
/* harmony import */ var _CustomFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomFile */ "./js/CustomFile.js");
/* harmony import */ var _CustomRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomRange */ "./js/CustomRange.js");
/* harmony import */ var _CustomSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomSelect */ "./js/CustomSelect.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dropdown */ "./js/Dropdown.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ "./js/Header.js");
/* harmony import */ var _InputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InputGroup */ "./js/InputGroup.js");
/* harmony import */ var _FormValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormValidation */ "./js/FormValidation.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modal */ "./js/Modal.js");
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Reset */ "./js/Reset.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tabs */ "./js/Tabs.js");














var $accordions = Array.from(document.querySelectorAll('.accordion'));

for (var _i = 0, _$accordions = $accordions; _i < _$accordions.length; _i++) {
  var $accordion = _$accordions[_i];
  new _Accordion__WEBPACK_IMPORTED_MODULE_1__["default"]($accordion);
}

new _Animation__WEBPACK_IMPORTED_MODULE_2__["default"]();
var $carousels = Array.from(document.querySelectorAll('.carousel'));

for (var _i2 = 0, _$carousels = $carousels; _i2 < _$carousels.length; _i2++) {
  var $carousel = _$carousels[_i2];
  new _Carousel__WEBPACK_IMPORTED_MODULE_3__["default"]($carousel);
}

var $customFiles = Array.from(document.querySelectorAll('.custom-file'));

for (var _i3 = 0, _$customFiles = $customFiles; _i3 < _$customFiles.length; _i3++) {
  var $customFile = _$customFiles[_i3];
  new _CustomFile__WEBPACK_IMPORTED_MODULE_4__["default"]($customFile);
}

var $customRanges = Array.from(document.querySelectorAll('.custom-range'));

for (var _i4 = 0, _$customRanges = $customRanges; _i4 < _$customRanges.length; _i4++) {
  var $customRange = _$customRanges[_i4];
  new _CustomRange__WEBPACK_IMPORTED_MODULE_5__["default"]($customRange);
}

var $customSelects = Array.from(document.querySelectorAll('.custom-select'));

for (var _i5 = 0, _$customSelects = $customSelects; _i5 < _$customSelects.length; _i5++) {
  var $customSelect = _$customSelects[_i5];
  new _CustomSelect__WEBPACK_IMPORTED_MODULE_6__["default"]($customSelect);
}

var $dropdowns = Array.from(document.querySelectorAll('.dropdown'));

for (var _i6 = 0, _$dropdowns = $dropdowns; _i6 < _$dropdowns.length; _i6++) {
  var $dropdown = _$dropdowns[_i6];
  new _Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"]($dropdown);
}

if (document.querySelector('.header')) new _Header__WEBPACK_IMPORTED_MODULE_8__["default"]();
var $inputGroups = Array.from(document.querySelectorAll('.input-group'));

for (var _i7 = 0, _$inputGroups = $inputGroups; _i7 < _$inputGroups.length; _i7++) {
  var $inputGroup = _$inputGroups[_i7];
  new _InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"]($inputGroup);
}

var $forms = Array.from(document.querySelectorAll('.validation'));

for (var _i8 = 0, _$forms = $forms; _i8 < _$forms.length; _i8++) {
  var $form = _$forms[_i8];
  new _FormValidation__WEBPACK_IMPORTED_MODULE_10__["default"]($form);
}

var $modals = Array.from(document.querySelectorAll('.modal'));

for (var _i9 = 0, _$modals = $modals; _i9 < _$modals.length; _i9++) {
  var $modal = _$modals[_i9];
  new _Modal__WEBPACK_IMPORTED_MODULE_11__["default"]($modal);
}

new _Reset__WEBPACK_IMPORTED_MODULE_12__["default"]();
var $tabs = Array.from(document.querySelectorAll('.tabs'));

for (var _i10 = 0, _$tabs = $tabs; _i10 < _$tabs.length; _i10++) {
  var $tab = _$tabs[_i10];
  new _Tabs__WEBPACK_IMPORTED_MODULE_13__["default"]($tab);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DdXN0b21GaWxlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVJhbmdlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9SZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9UYWJzLmpzIiwid2VicGFjazovLy8uL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvcG9seWZpbGxzL0FycmF5LmZyb20uanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiJGFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb24iLCJfaW5pdERPTSIsIl9pbml0UGFyYW1zIiwiX2luaXRpYWxpemUiLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpc011bHRpcGxlIiwiZGF0YXNldCIsIm11bHRpcGxlIiwiJGl0ZW0iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIiRjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsInB1c2giLCJpdGVtIiwiX2V2ZW50cyIsIiRidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZW1vdmUiLCJhZGQiLCJBbmltYXRpb24iLCJpbml0IiwiYW5pbWF0ZWRUaXRsZXMiLCJkb2N1bWVudCIsImFuaW1hdGVkVGl0bGUiLCJ3cmFwcGVyVGl0bGUiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwid3JhcHBlclRpdGxlMiIsInNldERPTSIsImV2ZW50cyIsInRpdGxlIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZhYmxlcyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsIkNhcm91c2VsIiwiJGNhcm91c2VsIiwiY2Fyb3VzZWwiLCJuYXZpZ2F0aW9uIiwibGVmdCIsInJpZ2h0IiwiaXNUb3VjaERldmljZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwidHlwZSIsImFjdGl2ZUl0ZW0iLCJwYWdpbmF0aW9uIiwiZHJhZyIsImF1dG8iLCJtb2JpbGVOdW1iZXIiLCJ0YWJsZXROdW1iZXIiLCJsYXB0b3BOdW1iZXIiLCJudW1iZXJJdGVtcyIsImxlbmd0aCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJzY3JlZW5OdW1iZXIiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIiRwYWdpbmF0aW9uIiwiaSIsInNldEF0dHJpYnV0ZSIsInNldEludGVydmFsIiwiX21vdmVSaWdodCIsInBhcnNlSW50IiwiX21vdmVMZWZ0Iiwia2V5Q29kZSIsIiRidWxsZXQiLCJfbW92ZUl0ZW1zIiwiYWN0dWFsUG9zaXRpb24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsInByZXNzSXRlbXMiLCJ0cmFuc2xhdGUiLCJkcmFnQ3JldGFlZEl0ZW0iLCJfZHJhZ0l0ZW1zIiwiY2hhbmdlZFRvdWNoZXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCIkbGFzdEl0ZW0iLCJkdXBsaWNhdGVMYXN0SXRlbSIsImNsb25lTm9kZSIsInRyYW5zZm9ybSIsInBvc2l0aW9uIiwiJGZpcnN0SXRlbSIsImR1cGxpY2F0ZUZpcnN0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ4IiwidCIsImNsZWFyVGltZW91dCIsInRyYW5zaXRpb24iLCJDdXN0b21GaWxlIiwiJGN1c3RvbUZpbGUiLCJjdXN0b21GaWxlIiwibGFiZWwiLCJpc0J1dHRvbiIsImJ1dHRvbiIsImlzQnV0dG9uUG9zaXRpb24iLCJidXR0b25wb3MiLCJpc1NpemUiLCJzaXplIiwiaW5uZXJUZXh0IiwiaW5uZXJIVE1MIiwiY29udGFpbmVyIiwiaW5wdXQiLCJuYW1lIiwiZGlzcGxheSIsImNsaWNrIiwic2l6ZUNvbnZlcnQiLCJieXRlcyIsInNpemVzIiwiTWF0aCIsImZsb29yIiwiY29udmVydCIsInJvdW5kIiwicG93IiwiZmlsZSIsImZpbGVzIiwiY2xvc2UiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YWx1ZSIsIiRmaWxlcyIsImZvckVhY2giLCJpbmRleCIsIiRmaWxlIiwibmV3RmlsZXMiLCJEYXRhVHJhbnNmZXIiLCJDdXN0b21SYW5nZSIsIiRjdXN0b21SYW5nZSIsImN1c3RvbVJhbmdlIiwidmlld1RvdGFsIiwic3RlcCIsImdldEF0dHJpYnV0ZSIsIiRjcmVhdGVDdXN0b21SYW5nZSIsInJlcGxhY2VDaGlsZCIsInRvdGFsVmlldyIsInRvTG9jYWxlU3RyaW5nIiwiQ3VzdG9tU2VsZWN0IiwiJGN1c3RvbVNlbGVjdCIsImN1c3RvbVNlbGVjdCIsImluaXRQYXJhbXMiLCJpbml0aWFsaXplIiwiaXNGaWx0ZXJzIiwiZmlsdGVycyIsImlzT25Nb2JpbGUiLCJtb2JpbGUiLCJkZWZhdWx0TGFiZWwiLCJ2aXJ0dWFsTGFiZWwiLCIkY3JlYXRlQ3VzdG9tU2VsZWN0IiwiJHNlbGVjdCIsIiRkZWZhdWx0T3B0aW9uIiwiJG9wdGlvbiIsImNob29zZSIsIiRjb250YWluZXIiLCJmaWx0ZXIiLCJ0b2dnbGUiLCJjaGFuZ2VWYWx1ZSIsIiRuZXdJdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkRyb3Bkb3duIiwiJGRyb3Bkb3duIiwiZHJvcGRvd24iLCJKU09OIiwicGFyc2UiLCJGb3JtVmFsaWRhdGlvbiIsIiRmb3JtIiwiZm9ybSIsIm5vSW5zdGFudCIsIm5vaW5zdGFudCIsIm5vU3VibWl0Iiwibm9zdWJtaXQiLCJmb3JtRXJyb3IiLCJpbnB1dEdyb3VwcyIsIiRpbnB1dEdyb3VwIiwiJGlucHV0IiwidmFsaWRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0VHlwZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJtaW5MZW5ndGgiLCJtYXhsZW5ndGgiLCJtYXhMZW5ndGgiLCJyZXF1aXJlZG1lc3NhZ2UiLCJyZXF1aXJlZE1lc3NhZ2UiLCJlcnJvcm1pbmxlbmd0aCIsImVycm9yTWluTGVuZ3RoIiwiZXJyb3JtYXhsZW5ndGgiLCJlcnJvck1heExlbmd0aCIsImVycm9ybWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yIiwiY2xlYXJFcnJvciIsIm1hdGNoIiwiZXJyb3IiLCIkZXJyb3IiLCJIZWFkZXIiLCJoZWFkZXIiLCJvcGVuIiwic3ViIiwiSW5wdXRHcm91cCIsImlucHV0R3JvdXAiLCJjb250ZW50IiwiTW9kYWwiLCIkbW9kYWwiLCJtb2RhbCIsIlJlc2V0IiwidGVzdCIsImtleSIsImJvZHkiLCJUYWJzIiwiJHRhYnMiLCJ0YWJzIiwiaGVhZGVySXRlbXMiLCIkaGVhZGVySXRlbSIsIiRjb250ZW50SXRlbSIsIiRhY2NvcmRpb25zIiwiJGNhcm91c2VscyIsIiRjdXN0b21GaWxlcyIsIiRjdXN0b21SYW5nZXMiLCIkY3VzdG9tU2VsZWN0cyIsIiRkcm9wZG93bnMiLCIkaW5wdXRHcm91cHMiLCIkZm9ybXMiLCIkbW9kYWxzIiwiJHRhYiIsInRvU3RyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJpc0NhbGxhYmxlIiwiZm4iLCJjYWxsIiwidG9JbnRlZ2VyIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJpc0Zpbml0ZSIsImFicyIsIm1heFNhZmVJbnRlZ2VyIiwidG9MZW5ndGgiLCJsZW4iLCJtaW4iLCJtYXgiLCJhcnJheUxpa2UiLCJDIiwiVHlwZUVycm9yIiwibWFwRm4iLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJUIiwiQSIsImsiLCJrVmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7O0lBS01BLFM7QUFDSixxQkFBWUMsVUFBWixFQUF3QjtBQUFBOztBQUN0QixTQUFLQyxDQUFMLEdBQVMsRUFBVCxDQURzQixDQUNWOztBQUNaLFNBQUtBLENBQUwsQ0FBT0MsU0FBUCxHQUFtQkYsVUFBbkIsQ0FGc0IsQ0FFUTs7QUFFOUIsU0FBS0csUUFBTDs7QUFDQSxTQUFLQyxXQUFMOztBQUNBLFNBQUtDLFdBQUw7QUFDRDtBQUVEOzs7Ozs7OytCQUdXO0FBQ1QsV0FBS0osQ0FBTCxDQUFPSyxLQUFQLEdBQWVDLEtBQUssQ0FBQ0MsSUFBTixDQUNiLEtBQUtQLENBQUwsQ0FBT0MsU0FBUCxDQUFpQk8sZ0JBQWpCLENBQWtDLGtCQUFsQyxD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R0FBT0MsTUFBUDtBQUNEOztBQUNERCxTQUFDLElBQUksQ0FBTDtBQUNELE9BeERtRCxDQXlEcEQ7OztBQUNBRCxPQUFDLENBQUN6TSxNQUFGLEdBQVcrTCxHQUFYLENBMURvRCxDQTJEcEQ7O0FBQ0EsYUFBT1UsQ0FBUDtBQUNELEtBN0REO0FBOERELEdBcEZZLEVBQWI7QUFxRkQsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9tYWluLmpzXCIpO1xuIiwiLyoqKioqKioqKipcbiAqIEFjY29yZGlvblxuICogdjEuMC4xXG4gKi9cblxuY2xhc3MgQWNjb3JkaW9uIHtcbiAgY29uc3RydWN0b3IoJGFjY29yZGlvbikge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuYWNjb3JkaW9uID0gJGFjY29yZGlvbiAvLyBBZGQgYWNjb3JkaW9uIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2l0ZW0nKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdXG4gICAgdGhpcy5pc011bHRpcGxlID0gdGhpcy4kLmFjY29yZGlvbi5kYXRhc2V0Lm11bHRpcGxlIC8vIFNldCBpcyBtdWx0aXBsZSBpdGVtIG9wZW4uXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgaWYgKCRpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9ICRjb250ZW50Lm9mZnNldEhlaWdodFxuICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtjb250ZW50SGVpZ2h0fXB4YFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpdGVtOiAkaXRlbSwgaGVpZ2h0OiBjb250ZW50SGVpZ2h0IH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgaXRlbTogJGl0ZW0sIGhlaWdodDogY29udGVudEhlaWdodCB9KVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0IHsgaXRlbSwgaGVpZ2h0IH0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgY29uc3QgJGJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUJ1dHRvbicpXG4gICAgICBjb25zdCAkY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAkYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICAgIGZvciAoY29uc3QgeyBpdGVtIH0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25cbiIsImNsYXNzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJCA9IHt9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHNldERPTSgpIHtcbiAgICB0aGlzLiQuYW5pbWF0ZWRUaXRsZXMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGVkLXRpdGxlJylcbiAgICApXG4gIH1cblxuICBpbml0KCkge1xuICAgIGZvciAoY29uc3QgYW5pbWF0ZWRUaXRsZSBvZiBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGVkLXRpdGxlJylcbiAgICApKSB7XG4gICAgICBhbmltYXRlZFRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkLXRpdGxlJylcbiAgICAgIGNvbnN0IHdyYXBwZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB3cmFwcGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtdGl0bGVfX3RleHQnKVxuICAgICAgYW5pbWF0ZWRUaXRsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyVGl0bGUsIGFuaW1hdGVkVGl0bGUpXG4gICAgICB3cmFwcGVyVGl0bGUuYXBwZW5kQ2hpbGQoYW5pbWF0ZWRUaXRsZSlcblxuICAgICAgY29uc3Qgd3JhcHBlclRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB3cmFwcGVyVGl0bGUyLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkLXRpdGxlJylcbiAgICAgIHdyYXBwZXJUaXRsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyVGl0bGUyLCB3cmFwcGVyVGl0bGUpXG4gICAgICB3cmFwcGVyVGl0bGUyLmFwcGVuZENoaWxkKHdyYXBwZXJUaXRsZSlcbiAgICB9XG5cbiAgICB0aGlzLnNldERPTSgpXG4gICAgdGhpcy5ldmVudHMoKVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIGxldCB0aXRsZSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIG9ic2VydmFibGVzID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9ic2VydmFibGVzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uaW50ZXJzZWN0aW9uUmF0aW8gPiAwLjUpIHtcbiAgICAgICAgICAgIGl0ZW0udGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkLXRpdGxlLS12aXNpYmxlJylcbiAgICAgICAgICAgIHRpdGxlLnVub2JzZXJ2ZShpdGVtLnRhcmdldClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRocmVzaG9sZDogWzAuNV1cbiAgICAgIH1cbiAgICApXG5cbiAgICBmb3IgKGNvbnN0IGFuaW1hdGVkVGl0bGUgb2YgdGhpcy4kLmFuaW1hdGVkVGl0bGVzKSB7XG4gICAgICB0aXRsZS5vYnNlcnZlKGFuaW1hdGVkVGl0bGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvblxuIiwiLyoqKioqKioqKipcbiAqIENhcm91c2VsXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKCRjYXJvdXNlbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY2Fyb3VzZWwgPSAkY2Fyb3VzZWwgLy8gQWRkIGNhcm91c2VsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5uYXZpZ2F0aW9uID0ge1xuICAgICAgbGVmdDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1sZWZ0JyksXG4gICAgICByaWdodDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1yaWdodCcpXG4gICAgfVxuICAgIHRoaXMuJC5pdGVtcyA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW1zJylcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pc1RvdWNoRGV2aWNlID0gISEoXG4gICAgICAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzXG4gICAgKVxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbm9ybWFsJ1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICB0aGlzLnBhZ2luYXRpb24gPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5wYWdpbmF0aW9uXG4gICAgdGhpcy5kcmFnID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuZHJhZ1xuICAgIHRoaXMuYXV0byA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmF1dG9cbiAgICB0aGlzLm1vYmlsZU51bWJlciA9IDEgfHwgdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQubW9iaWxlTnVtYmVyXG4gICAgdGhpcy50YWJsZXROdW1iZXIgPSAyIHx8IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnRhYmxldE51bWJlclxuICAgIHRoaXMubGFwdG9wTnVtYmVyID0gNCB8fCB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5sYXB0b3BOdW1iZXJcbiAgICB0aGlzLm51bWJlckl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICkubGVuZ3RoXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSAnbXVsdGknKSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoXG4gICAgICB0aGlzLnNjcmVlbk51bWJlciA9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKS5vZmZzZXRXaWR0aFxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKS5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gdGhpcy5sYXB0b3BOdW1iZXJcbiAgICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OHB4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5OdW1iZXIgPSB0aGlzLnRhYmxldE51bWJlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zY3JlZW5OdW1iZXIgPSB0aGlzLm1vYmlsZU51bWJlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0ICRwYWdpbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRwYWdpbmF0aW9uLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uJylcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlckl0ZW1zOyBpKyspIHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAkaXRlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICAgICAkaXRlbS5kYXRhc2V0Lml0ZW0gPSBpICsgMVxuXG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIH1cblxuICAgICAgICAkcGFnaW5hdGlvbi5hcHBlbmRDaGlsZCgkaXRlbSlcbiAgICAgIH1cbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5hcHBlbmRDaGlsZCgkcGFnaW5hdGlvbilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRvKSB7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX21vdmVSaWdodCgpXG4gICAgICB9LCBwYXJzZUludCh0aGlzLmF1dG8pKVxuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5uYXZpZ2F0aW9uLmxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgfSlcblxuICAgIHRoaXMuJC5uYXZpZ2F0aW9uLnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICB9KVxuXG4gICAgdGhpcy4kLmNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICB9KVxuXG4gICAgZm9yIChjb25zdCAkYnVsbGV0IG9mIEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICApKSB7XG4gICAgICAkYnVsbGV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgJGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKCRidWxsZXQuZGF0YXNldC5pdGVtIC0gMSlcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gcGFyc2VJbnQoJGJ1bGxldC5kYXRhc2V0Lml0ZW0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYWcpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hEZXZpY2UpIHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IHRydWVcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IDBcbiAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLmNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLl9kcmFnSXRlbXMoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA+IHRoaXMuYWN0dWFsUG9zaXRpb24pIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDwgdGhpcy5hY3R1YWxQb3NpdGlvbilcbiAgICAgICAgICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zICYmXG4gICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxICYmXG4gICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiQuaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC5jbGllbnRYXG4gICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gdHJ1ZVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlID0gMFxuICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYWdJdGVtcyhldmVudC5jbGllbnRYKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy4kLml0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19pdGVtcy0tZHJhZycpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24gKyAyMCkgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gLSAyMCkgdGhpcy5fbW92ZVJpZ2h0KClcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiArIDIwIHx8XG4gICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gMjBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zICYmXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxICYmXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZHJhZ0l0ZW1zKGNsaWVudFgpIHtcbiAgICB0aGlzLiQuaXRlbXMuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX2l0ZW1zLS1kcmFnJylcbiAgICBpZiAodGhpcy5wcmVzc0l0ZW1zKSB7XG4gICAgICBpZiAoY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSBjbGllbnRYIC0gdGhpcy5hY3R1YWxQb3NpdGlvblxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0NyZXRhZWRJdGVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRsYXN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVMYXN0SXRlbSA9ICRsYXN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbSxcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMuYWN0aXZlSXRlbSAtIDEpICpcbiAgICAgICAgICAgICAgLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCArXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gY2xpZW50WFxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMuYWN0aXZlSXRlbSAtIDEpICpcbiAgICAgICAgICAgICAgLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdDcmV0YWVkSXRlbSkge1xuICAgICAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IHRydWVcbiAgICAgICAgICAgICAgY29uc3QgJGZpcnN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW0nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlRmlyc3RJdGVtID0gJGZpcnN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUZpcnN0SXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLm51bWJlckl0ZW1zIC1cbiAgICAgICAgICAgICAgMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMuYWN0aXZlSXRlbSAtIDEpICpcbiAgICAgICAgICAgICAgLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUxlZnQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ25vcm1hbCcgfHwgdGhpcy50eXBlID09PSAnbXVsdGknKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbG9vcCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5udW1iZXJJdGVtcyAtIDEsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgIGNvbnN0ICRsYXN0SXRlbSA9IHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCdcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBkdXBsaWNhdGVMYXN0SXRlbSA9ICRsYXN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcblxuICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlTGFzdEl0ZW0pXG4gICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJyksXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKC0xLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMubnVtYmVySXRlbXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtIDw9IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnIHx8IHRoaXMudHlwZSA9PT0gJ211bHRpJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMgLSAodGhpcy5zY3JlZW5OdW1iZXIgLSAxKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb2snKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbG9vcCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoMCwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgY29uc3QgJGZpcnN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVJdGVtcyh4LCBwb3NpdGlvbiA9IG51bGwpIHtcbiAgICBsZXQgdFxuICAgIGNsZWFyVGltZW91dCh0KVxuICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAxcyBlYXNlLWluLW91dCdcbiAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt4ICogLXRoaXMud2lkdGh9cHgpYFxuXG4gICAgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdyaWdodCcgJiZcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcblxuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKSxcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgIHBvc2l0aW9uID09PSAnbGVmdCcgJiZcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMubnVtYmVySXRlbXMgLSAxKSAqXG4gICAgICAgICAgLXRoaXMud2lkdGh9KWBcbiAgICAgIH1cbiAgICB9LCAxMDAwKVxuXG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpXG4gICAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Omxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpudGgtY2hpbGQoJHt0aGlzLmFjdGl2ZUl0ZW0gLSAxfSlgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Om50aC1jaGlsZCgke3RoaXMuYWN0aXZlSXRlbSArIDF9KWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21GaWxlXG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBDdXN0b21GaWxlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbUZpbGUpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUgPSAkY3VzdG9tRmlsZSAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmxhYmVsID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5sYWJlbFxuICAgIHRoaXMuaXNCdXR0b24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvblxuICAgIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuYnV0dG9ucG9zXG4gICAgICA/IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuYnV0dG9ucG9zXG4gICAgICA6ICdyaWdodCdcbiAgICB0aGlzLnR5cGUgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC50eXBlXG4gICAgICA6ICdmaWxlJ1xuICAgIHRoaXMuaXNTaXplID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5zaXplXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5pc0J1dHRvbikge1xuICAgICAgdGhpcy4kLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19idXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uaW5uZXJUZXh0ID0gdGhpcy5pc0J1dHRvblxuICAgIH1cblxuICAgIHRoaXMuJC5jdXN0b21GaWxlLmlubmVySFRNTCA9ICcnXG5cbiAgICBpZiAodGhpcy5pc1NpemUpIHtcbiAgICAgIHRoaXMuJC5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fY29udGFpbmVyJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0J1dHRvbiAmJiB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5pc1NpemVcbiAgICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGFiZWxcbiAgICB0aGlzLiQubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5sYWJlbFxuICAgIHRoaXMuJC5sYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fbGFiZWwnKVxuICAgIHRoaXMuaXNTaXplXG4gICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmxhYmVsKVxuICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG5cbiAgICAvLyBDcmVhdGUgaW5wdXRcbiAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQubmFtZSlcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdmaWxlcycpIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgdHJ1ZSlcbiAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdmb2xkZXInKSB7XG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCd3ZWJraXRkaXJlY3RvcnknLCB0cnVlKVxuICAgICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlyZWN0b3J5cycsIHRydWUpXG4gICAgfVxuICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5pc1NpemVcbiAgICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1NpemUpIHtcbiAgICAgIHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5jb250YWluZXIpXG5cbiAgICAgIC8vIENyZWF0ZSBzaXplIGluZm9cbiAgICAgIHRoaXMuJC5zaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICB0aGlzLiQuc2l6ZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fc2l6ZScpXG4gICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSAnMCBtYidcbiAgICAgIHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5zaXplKVxuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuaW5wdXQuY2xpY2soKVxuICAgIH0pXG5cbiAgICBjb25zdCBzaXplQ29udmVydCA9IHNpemUgPT4ge1xuICAgICAgY29uc3QgYnl0ZXMgPSBzaXplXG4gICAgICBjb25zdCBzaXplcyA9IFsnYnl0ZXMnLCAna2InLCAnbWInLCAnZ2InLCAndGInXVxuICAgICAgY29uc3QgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKVxuICAgICAgY29uc3QgY29udmVydCA9IE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMilcbiAgICAgIHJldHVybiBgJHtjb252ZXJ0fSAke3NpemVzW2ldfWBcbiAgICB9XG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgdGhpcy4kLmxhYmVsLmlubmVyVGV4dCA9IGZpbGUubmFtZVxuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19maWxlQ2xvc2UnKVxuICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnJnRpbWVzOydcbiAgICAgICAgdGhpcy4kLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY2xvc2UsIHRoaXMuJC5idXR0b24pXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlID0gbnVsbFxuICAgICAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSB0aGlzLmxhYmVsXG4gICAgICAgICAgdGhpcy4kLmNvbnRhaW5lci5yZW1vdmVDaGlsZChjbG9zZSlcbiAgICAgICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSAnMCBtYidcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gc2l6ZUNvbnZlcnQoZmlsZS5zaXplKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzXG5cbiAgICAgICAgY29uc3QgJGZpbGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGV0IHNpemUgPSAwXG5cbiAgICAgICAgQXJyYXkuZnJvbShmaWxlcykuZm9yRWFjaCgoZmlsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCAkZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgJGZpbGUuaW5uZXJUZXh0ID0gZmlsZS5uYW1lXG4gICAgICAgICAgJGZpbGUuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2ZpbGUnKVxuXG4gICAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19maWxlQ2xvc2UnKVxuICAgICAgICAgIGNsb3NlLmlubmVySFRNTCA9ICcmdGltZXM7J1xuXG4gICAgICAgICAgJGZpbGUuYXBwZW5kQ2hpbGQoY2xvc2UpXG4gICAgICAgICAgJGZpbGVzLmFwcGVuZENoaWxkKCRmaWxlKVxuXG4gICAgICAgICAgc2l6ZSArPSBmaWxlLnNpemVcblxuICAgICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNpemUgPSAwXG4gICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBEYXRhVHJhbnNmZXIoKVxuICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICAgICAgICBpZiAoZmlsZSAhPT0gZmlsZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgbmV3RmlsZXMuaXRlbXMuYWRkKGZpbGUpXG4gICAgICAgICAgICAgICAgc2l6ZSArPSBmaWxlLnNpemVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gc2l6ZUNvbnZlcnQoc2l6ZSlcbiAgICAgICAgICAgIHRoaXMuJC5pbnB1dC5maWxlcyA9IG5ld0ZpbGVzLmZpbGVzXG4gICAgICAgICAgICAkZmlsZXMucmVtb3ZlQ2hpbGQoJGZpbGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSBzaXplQ29udmVydChzaXplKVxuXG4gICAgICAgIHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKCRmaWxlcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUZpbGVcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21SYW5nZVxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tUmFuZ2Uge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tUmFuZ2UpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlID0gJGN1c3RvbVJhbmdlIC8vIEFkZCBjdXN0b21SYW5nZSBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLnZpZXdUb3RhbCA9IHRoaXMuJC5jdXN0b21SYW5nZS5kYXRhc2V0LnZpZXdUb3RhbFxuICAgIHRoaXMuc3RlcCA9IHRoaXMuJC5jdXN0b21SYW5nZS5nZXRBdHRyaWJ1dGUoJ3N0ZXAnKVxuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5jdXN0b21SYW5nZS5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgLy8gY3JlYXRlIGNvbXBvbmVudFxuICAgIGNvbnN0ICRjcmVhdGVDdXN0b21SYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNyZWF0ZUN1c3RvbVJhbmdlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZScpXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuICAgICAgJGNyZWF0ZUN1c3RvbVJhbmdlLFxuICAgICAgdGhpcy4kLmN1c3RvbVJhbmdlXG4gICAgKVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZSA9ICRjcmVhdGVDdXN0b21SYW5nZVxuXG4gICAgLy8gQ3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYW5nZScpXG5cbiAgICAvLyBDcmVhdGUgdG90YWwgdmlldy5cbiAgICBpZiAodGhpcy52aWV3VG90YWwpIHtcbiAgICAgIHRoaXMuJC50b3RhbFZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLnRvdGFsVmlldy5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX3RvdGFsJylcbiAgICAgIHRoaXMuJC50b3RhbFZpZXcuaW5uZXJUZXh0ID0gKFxuICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgKiB0aGlzLnN0ZXBcbiAgICAgICkudG9Mb2NhbGVTdHJpbmcoKVxuICAgIH1cblxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC50b3RhbFZpZXcpXG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2gnKVxuICAgICAgdGhpcy4kLnRvdGFsVmlldy5pbm5lclRleHQgPSAoXG4gICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSAqIHRoaXMuc3RlcFxuICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SYW5nZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVNlbGVjdFxuICogdjEuMS4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVNlbGVjdCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0ID0gJGN1c3RvbVNlbGVjdCAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuaW5pdFBhcmFtcygpXG4gICAgdGhpcy5pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICAgdGhpcy5pc0ZpbHRlcnMgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQuZmlsdGVycyAvLyBTZXQgZmlsdGVycyBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5pc09uTW9iaWxlID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5kZWZhdWx0TGFiZWwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWwgLy8gU2V0IGRlZmF1bHQgbGFiZWwuXG4gICAgdGhpcy52aXJ0dWFsTGFiZWwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWwgLy8gU2V0IGFjdGl2YXRlZCBsYWJlbC5cbiAgICB0aGlzLml0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKSAvLyBHZXQgaXRlbXMuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIC8vIGNyZWF0ZSBjb21wb25lbnRcbiAgICBjb25zdCAkY3JlYXRlQ3VzdG9tU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY3JlYXRlQ3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QnKVxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXG4gICAgICAkY3JlYXRlQ3VzdG9tU2VsZWN0LFxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdFxuICAgIClcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0ID0gJGNyZWF0ZUN1c3RvbVNlbGVjdFxuXG4gICAgaWYgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk5MXB4KScpLm1hdGNoZXMpIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAgICBjb25zdCAkc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICRzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICRkZWZhdWx0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJylcbiAgICAgICRkZWZhdWx0T3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuZGVmYXVsdExhYmVsXG4gICAgICAkc2VsZWN0LmFwcGVuZENoaWxkKCRkZWZhdWx0T3B0aW9uKVxuXG4gICAgICAvLyBDcmVhdGUgc2VsZWN0IG9wdGlvbnMuXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgJG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLmlubmVyVGV4dFxuICAgICAgICAkc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG4gICAgICB9KVxuXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmlubmVySFRNTCA9ICcnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKCRzZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLWZpbHRlcnMnKVxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRlbnQnKVxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICRpdGVtLmRhdGFzZXQubGFiZWwgPSBpdGVtLmlubmVyVGV4dFxuICAgICAgICAkaXRlbS5kYXRhc2V0LnZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICAgICAgJGl0ZW0uaW5uZXJUZXh0ID0gaXRlbS5pbm5lclRleHRcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9faXRlbScpXG4gICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfSlcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jaG9vc2Uuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY2hvb3NlJylcbiAgICAgIGlmICghdGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmNob29zZS5pbm5lckhUTUwgPSB0aGlzLmRlZmF1bHRMYWJlbFxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgd3JhcHBpbmcgY29udGFpbmVyIGZvciBjb250ZW50LlxuICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRhaW5lcicpXG4gICAgICAkY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy5uYW1lKVxuICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIGlucHV0IGZvciBzZWxlY3QgdmFsdWUuXG4gICAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgICkgLy8gR2V0IGFsbCBpdGVtcyBpbiBhcnJheS5cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBmaWx0ZXIgaW5wdXQuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMuZGVmYXVsdExhYmVsXG4gICAgICAgIHRoaXMuJC5jaG9vc2UuYXBwZW5kQ2hpbGQodGhpcy4kLmZpbHRlcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50cygpXG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHx8XG4gICAgICB0aGlzLmlzT25Nb2JpbGVcbiAgICApIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnY3VzdG9tLXNlbGVjdC0tb3BlbicpKSB7XG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgICAgICAgICB9LCAyMDApXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAkaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKCRpdGVtKVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9ICcnXG4gICAgICAgICAgdGhpcy4kLmZpbHRlci5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdGhpcy52aXJ0dWFsTGFiZWwpXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5ld0l0ZW0gPSAkaXRlbVxuICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJC5pdGVtcy5mb3JFYWNoKCRpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICgkaXRlbS5pbm5lclRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLiQuZmlsdGVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICRpdGVtXG4gICAgICAgICAgICAgICRuZXdJdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICRpdGVtXG4gICAgICAgICAgICAgICRuZXdJdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuY3VzdG9tU2VsZWN0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuXG4gICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kLmZpbHRlci52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMudmlydHVhbExhYmVsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKCRpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gJGl0ZW0uaW5uZXJUZXh0XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJUZXh0ID0gJGl0ZW0uaW5uZXJUZXh0XG4gICAgfVxuXG4gICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJGl0ZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgdGhpcy52aXJ0dWFsTGFiZWwgPSAkaXRlbS5pbm5lclRleHRcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21TZWxlY3RcbiIsIi8qKioqKioqKioqXG4gKiBEcm9wZG93blxuICogdjEuMS4wXG4gKi9cblxuY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3RvcigkZHJvcGRvd24pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmRyb3Bkb3duID0gJGRyb3Bkb3duIC8vIEFkZCBkcm9wZG93biBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5tb2JpbGUgLy8gU2V0IGN1c3RvbSBtb2JpbGUgaXMgYWN0aXZhdGVkLlxuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm5hbWVcbiAgICB0aGlzLml0ZW1zID1cbiAgICAgIHRoaXMudHlwZSA9PT0gJ2xpbmsnID8gSlNPTi5wYXJzZSh0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5pdGVtcykgOiBudWxsIC8vIENyZWF0ZSBKU09OIG9iamVjdCB3aXRoIGl0ZW1zLlxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2l0ZW0nKVxuICAgIClcblxuICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCB3aXRoIGVsZW1lbnRzLlxuICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY29udGVudCcpXG5cbiAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgdGhpcy4kLmNob29zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY2hvb3NlJylcbiAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG4gICAgdGhpcy4kLmNob29zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5uYW1lKVxuXG4gICAgLy8gQ3JlYXRlIHdyYXBwaW5nIGNvbnRhaW5lciBmb3IgY29udGVudC5cbiAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jb250YWluZXInKVxuICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGNvbnRlbnQpXG4gICAgJGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMubmFtZSlcbiAgICB0aGlzLiQuZHJvcGRvd24uaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5jaG9vc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tLW9wZW4nKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy4kLmRyb3Bkb3duLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKioqKioqKioqXG4gKiBGb3JtVmFsaWRhdGlvblxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgRm9ybVZhbGlkYXRpb24ge1xuICBjb25zdHJ1Y3RvcigkZm9ybSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZm9ybSA9ICRmb3JtIC8vIEFkZCBmb3JtIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMubm9JbnN0YW50ID0gISF0aGlzLiQuZm9ybS5kYXRhc2V0Lm5vaW5zdGFudFxuICAgIHRoaXMubm9TdWJtaXQgPSAhIXRoaXMuJC5mb3JtLmRhdGFzZXQubm9zdWJtaXRcbiAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5pbnB1dEdyb3VwcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgKSkge1xuICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuXG4gICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm5vSW5zdGFudCkge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGUoJGlucHV0R3JvdXApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm5vU3VibWl0KSB7XG4gICAgICB0aGlzLiQuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2VcbiAgICAgICAgZm9yIChjb25zdCAkaW5wdXRHcm91cCBvZiBBcnJheS5mcm9tKFxuICAgICAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgICAgICkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUoJGlucHV0R3JvdXApKSB0aGlzLmZvcm1FcnJvciA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1FcnJvcikgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZSgkaW5wdXRHcm91cCkge1xuICAgIGNvbnN0ICRpbnB1dCA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICBjb25zdCB2YWx1ZSA9ICRpbnB1dC52YWx1ZVxuICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuXG4gICAgLy8gcnVsZXNcbiAgICBjb25zdCBydWxlcyA9IHt9XG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWQpXG4gICAgICBydWxlcy5yZXF1aXJlZCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5taW5sZW5ndGgpXG4gICAgICBydWxlcy5taW5MZW5ndGggPSBwYXJzZUludCgkaW5wdXRHcm91cC5kYXRhc2V0Lm1pbmxlbmd0aClcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5tYXhsZW5ndGgpXG4gICAgICBydWxlcy5tYXhMZW5ndGggPSBwYXJzZUludCgkaW5wdXRHcm91cC5kYXRhc2V0Lm1heGxlbmd0aClcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZG1lc3NhZ2UpXG4gICAgICBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgPSAkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkbWVzc2FnZVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWlubGVuZ3RoKVxuICAgICAgcnVsZXMuZXJyb3JNaW5MZW5ndGggPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWlubGVuZ3RoXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtYXhsZW5ndGgpXG4gICAgICBydWxlcy5lcnJvck1heExlbmd0aCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtYXhsZW5ndGhcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1lc3NhZ2UpXG4gICAgICBydWxlcy5lcnJvck1lc3NhZ2UgPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWVzc2FnZVxuXG4gICAgaWYgKGlucHV0VHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA8IHJ1bGVzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gcnVsZXMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWF4TGVuZ3RoIHx8ICd0b28gYmlnJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlIDwgcnVsZXMubWluTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWluTGVuZ3RoIHx8ICd0b28gbG93JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1heExlbmd0aCAmJiB2YWx1ZSA+IHJ1bGVzLm1heExlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1heExlbmd0aCB8fCAndG9vIGJpZycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnZW1haWwnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF2YWx1ZS5tYXRjaChcbiAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNZXNzYWdlIHx8ICdub3QgYSB2YWxpZCBlbWFpbCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAndGVsJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhdmFsdWUubWF0Y2goL14oPzooPzpcXCt8MDApMzN8MClcXHMqWzEtOV0oPzpbXFxzLi1dKlxcZHsyfSl7NH0kLylcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1lc3NhZ2UgfHwgJ25vdCBhIHZhbGlkIGVtYWlsJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RXJyb3IoJGlucHV0R3JvdXAsIGVycm9yKSB7XG4gICAgbGV0ICRlcnJvciA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncm91cF9fZXJyb3InKVxuICAgIGlmICgkZXJyb3IpIHtcbiAgICAgICRlcnJvci5pbm5lclRleHQgPSBlcnJvclxuICAgIH0gZWxzZSB7XG4gICAgICAkZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICRlcnJvci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cF9fZXJyb3InKVxuICAgICAgJGVycm9yLmlubmVyVGV4dCA9IGVycm9yXG4gICAgICAkaW5wdXRHcm91cC5hcHBlbmRDaGlsZCgkZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY2xlYXJFcnJvcigkaW5wdXRHcm91cCkge1xuICAgIGNvbnN0ICRlcnJvciA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncm91cF9fZXJyb3InKVxuICAgIGlmICgkZXJyb3IpIHtcbiAgICAgICRpbnB1dEdyb3VwLnJlbW92ZUNoaWxkKCRlcnJvcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRpb25cbiIsIi8qKioqKioqKioqXG4gKiBIZWFkZXJcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpIC8vIEFkZCBoZWFkZXIgaW4gRE9NIG9iamVjdHMuXG4gICAgdGhpcy4kLmNsb3NlID0gdGhpcy4kLmhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b2dnbGUtLWNsb3NlJylcbiAgICB0aGlzLiQub3BlbiA9IHRoaXMuJC5oZWFkZXIucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdG9nZ2xlLS1vcGVuJylcbiAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19tZW51SXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTIwMHB4KScpLm1hdGNoZXMpIHtcbiAgICAgIHRoaXMuJC5vcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLiQuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5oZWFkZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHN1YiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudUl0ZW1TdWInKVxuICAgICAgICBpZiAoc3ViKSB7XG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51SXRlbUJ1dHRvbicpXG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gc3ViLm9mZnNldEhlaWdodFxuICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgc3ViLnN0eWxlLnRyYW5zaXRpb24gPSAnaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQnXG5cbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3ViLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19tZW51SXRlbVN1Yi0tb3BlbicpKSB7XG4gICAgICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgICAgIHN1Yi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnVJdGVtU3ViLS1vcGVuJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG4gICAgICAgICAgICAgIHN1Yi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX21lbnVJdGVtU3ViLS1vcGVuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiLyoqKioqKioqKipcbiAqIElucHV0R3JvdXBcbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIElucHV0R3JvdXAge1xuICBjb25zdHJ1Y3RvcigkaW5wdXRHcm91cCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuaW5wdXRHcm91cCA9ICRpbnB1dEdyb3VwIC8vIEFkZCBpbnB1dEdyb3VwIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kLmlucHV0R3JvdXAuaW5uZXJIVE1MXG4gICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwX19jb250ZW50JylcbiAgICAkY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50XG4gICAgdGhpcy4kLmlucHV0ID0gJGNvbnRlbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dEdyb3VwLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy4kLmlucHV0R3JvdXAuYXBwZW5kQ2hpbGQoJGNvbnRlbnQpXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0R3JvdXAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXAtLWFjdGl2ZScpXG4gICAgfSlcblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLiQuaW5wdXQudmFsdWUpXG4gICAgICAgIHRoaXMuJC5pbnB1dEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWdyb3VwLS1hY3RpdmUnKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cFxuIiwiLyoqKioqKioqKipcbiAqIE1vZGFsXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKCRtb2RhbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQubW9kYWwgPSAkbW9kYWwgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1vZGFsLWJ1dHRvbltkYXRhLW1vZGFsPVwiJHt0aGlzLiQubW9kYWwuZGF0YXNldC5tb2RhbH1cIl1gXG4gICAgICApXG4gICAgKVxuICAgICAgdGhpcy4kLmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubW9kYWwtYnV0dG9uW2RhdGEtbW9kYWw9XCIke3RoaXMuJC5tb2RhbC5kYXRhc2V0Lm1vZGFsfVwiXWBcbiAgICAgIClcbiAgICBpZiAodGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKSlcbiAgICAgIHRoaXMuJC5jbG9zZSA9IHRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJylcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLS1hY3RpdmUnKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKS5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy4kLmJ1dHRvbikge1xuICAgICAgdGhpcy4kLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kLmNsb3NlKSB7XG4gICAgICB0aGlzLiQuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCJjbGFzcyBSZXNldCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICBpZiAoIS9eW2EtejAtOV0kL2kudGVzdChldmVudC5rZXkpKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdrZXlib2FyZCcpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNldFxuIiwiLyoqKioqKioqKipcbiAqIFRhYnNcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIFRhYnMge1xuICBjb25zdHJ1Y3RvcigkdGFicykge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQudGFicyA9ICR0YWJzIC8vIEFkZCBtb2RhbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaGVhZGVySXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2hlYWRlckl0ZW0nKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgJGhlYWRlckl0ZW0gb2YgdGhpcy4kLmhlYWRlckl0ZW1zKSB7XG4gICAgICBjb25zdCAkY29udGVudEl0ZW0gPSB0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnRhYnNfX2NvbnRlbnRJdGVtW2RhdGEtaXRlbT1cIiR7JGhlYWRlckl0ZW0uZGF0YXNldC5pdGVtfVwiXWBcbiAgICAgIClcbiAgICAgICRoZWFkZXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcignLnRhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpKVxuICAgICAgICAgIHRoaXMuJC50YWJzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgndGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgaWYgKHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJykpXG4gICAgICAgICAgdGhpcy4kLnRhYnNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgndGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICAgICRoZWFkZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgICRjb250ZW50SXRlbS5jbGFzc0xpc3QuYWRkKCd0YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNcbiIsImltcG9ydCAnLi9wb2x5ZmlsbHMvQXJyYXkuZnJvbSdcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4vQW5pbWF0aW9uJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnXG5pbXBvcnQgQ3VzdG9tRmlsZSBmcm9tICcuL0N1c3RvbUZpbGUnXG5pbXBvcnQgQ3VzdG9tUmFuZ2UgZnJvbSAnLi9DdXN0b21SYW5nZSdcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnLi9DdXN0b21TZWxlY3QnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuL0lucHV0R3JvdXAnXG5pbXBvcnQgRm9ybVZhbGlkYXRpb24gZnJvbSAnLi9Gb3JtVmFsaWRhdGlvbidcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFJlc2V0IGZyb20gJy4vUmVzZXQnXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5cbmNvbnN0ICRhY2NvcmRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpXG5mb3IgKGNvbnN0ICRhY2NvcmRpb24gb2YgJGFjY29yZGlvbnMpIHtcbiAgbmV3IEFjY29yZGlvbigkYWNjb3JkaW9uKVxufVxuXG5uZXcgQW5pbWF0aW9uKClcblxuY29uc3QgJGNhcm91c2VscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsJykpXG5mb3IgKGNvbnN0ICRjYXJvdXNlbCBvZiAkY2Fyb3VzZWxzKSB7XG4gIG5ldyBDYXJvdXNlbCgkY2Fyb3VzZWwpXG59XG5cbmNvbnN0ICRjdXN0b21GaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1maWxlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21GaWxlIG9mICRjdXN0b21GaWxlcykge1xuICBuZXcgQ3VzdG9tRmlsZSgkY3VzdG9tRmlsZSlcbn1cblxuY29uc3QgJGN1c3RvbVJhbmdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYW5nZScpKVxuZm9yIChjb25zdCAkY3VzdG9tUmFuZ2Ugb2YgJGN1c3RvbVJhbmdlcykge1xuICBuZXcgQ3VzdG9tUmFuZ2UoJGN1c3RvbVJhbmdlKVxufVxuXG5jb25zdCAkY3VzdG9tU2VsZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3QnKSlcbmZvciAoY29uc3QgJGN1c3RvbVNlbGVjdCBvZiAkY3VzdG9tU2VsZWN0cykge1xuICBuZXcgQ3VzdG9tU2VsZWN0KCRjdXN0b21TZWxlY3QpXG59XG5cbmNvbnN0ICRkcm9wZG93bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpKVxuZm9yIChjb25zdCAkZHJvcGRvd24gb2YgJGRyb3Bkb3ducykge1xuICBuZXcgRHJvcGRvd24oJGRyb3Bkb3duKVxufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpKSBuZXcgSGVhZGVyKClcblxuY29uc3QgJGlucHV0R3JvdXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKSlcbmZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgJGlucHV0R3JvdXBzKSB7XG4gIG5ldyBJbnB1dEdyb3VwKCRpbnB1dEdyb3VwKVxufVxuXG5jb25zdCAkZm9ybXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWxpZGF0aW9uJykpXG5mb3IgKGNvbnN0ICRmb3JtIG9mICRmb3Jtcykge1xuICBuZXcgRm9ybVZhbGlkYXRpb24oJGZvcm0pXG59XG5cbmNvbnN0ICRtb2RhbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpKVxuZm9yIChjb25zdCAkbW9kYWwgb2YgJG1vZGFscykge1xuICBuZXcgTW9kYWwoJG1vZGFsKVxufVxuXG5uZXcgUmVzZXQoKVxuXG5jb25zdCAkdGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSlcbmZvciAoY29uc3QgJHRhYiBvZiAkdGFicykge1xuICBuZXcgVGFicygkdGFiKVxufVxuIiwiaWYgKCFBcnJheS5mcm9tKSB7XG4gIEFycmF5LmZyb20gPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuICAgIHZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICB9XG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKVxuICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChudW1iZXIgPT09IDAgfHwgIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlclxuICAgICAgfVxuICAgICAgcmV0dXJuIChudW1iZXIgPiAwID8gMSA6IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSlcbiAgICB9XG4gICAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMVxuICAgIHZhciB0b0xlbmd0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKHZhbHVlKVxuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGxlbiwgMCksIG1heFNhZmVJbnRlZ2VyKVxuICAgIH1cblxuICAgIC8vIFRoZSBsZW5ndGggcHJvcGVydHkgb2YgdGhlIGZyb20gbWV0aG9kIGlzIDEuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgICAgLy8gMS4gTGV0IEMgYmUgdGhlIHRoaXMgdmFsdWUuXG4gICAgICB2YXIgQyA9IHRoaXNcblxuICAgICAgLy8gMi4gTGV0IGl0ZW1zIGJlIFRvT2JqZWN0KGFycmF5TGlrZSkuXG4gICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKVxuXG4gICAgICAvLyAzLiBSZXR1cm5JZkFicnVwdChpdGVtcykuXG4gICAgICBpZiAoYXJyYXlMaWtlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAnQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCdcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyA0LiBJZiBtYXBmbiBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IG1hcHBpbmcgYmUgZmFsc2UuXG4gICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkXG4gICAgICB2YXIgVFxuICAgICAgaWYgKHR5cGVvZiBtYXBGbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gNS4gZWxzZVxuICAgICAgICAvLyA1LiBhIElmIElzQ2FsbGFibGUobWFwZm4pIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG4gICAgICAgIGlmICghaXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDUuIGIuIElmIHRoaXNBcmcgd2FzIHN1cHBsaWVkLCBsZXQgVCBiZSB0aGlzQXJnOyBlbHNlIGxldCBUIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgVCA9IGFyZ3VtZW50c1syXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDEwLiBMZXQgbGVuVmFsdWUgYmUgR2V0KGl0ZW1zLCBcImxlbmd0aFwiKS5cbiAgICAgIC8vIDExLiBMZXQgbGVuIGJlIFRvTGVuZ3RoKGxlblZhbHVlKS5cbiAgICAgIHZhciBsZW4gPSB0b0xlbmd0aChpdGVtcy5sZW5ndGgpXG5cbiAgICAgIC8vIDEzLiBJZiBJc0NvbnN0cnVjdG9yKEMpIGlzIHRydWUsIHRoZW5cbiAgICAgIC8vIDEzLiBhLiBMZXQgQSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIEMgd2l0aCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGxlbi5cbiAgICAgIC8vIDE0LiBhLiBFbHNlLCBMZXQgQSBiZSBBcnJheUNyZWF0ZShsZW4pLlxuICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbilcblxuICAgICAgLy8gMTYuIExldCBrIGJlIDAuXG4gICAgICB2YXIgayA9IDBcbiAgICAgIC8vIDE3LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW7igKYgKGFsc28gc3RlcHMgYSAtIGgpXG4gICAgICB2YXIga1ZhbHVlXG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXVxuICAgICAgICBpZiAobWFwRm4pIHtcbiAgICAgICAgICBBW2tdID1cbiAgICAgICAgICAgIHR5cGVvZiBUID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA/IG1hcEZuKGtWYWx1ZSwgaylcbiAgICAgICAgICAgICAgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgaylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBW2tdID0ga1ZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgayArPSAxXG4gICAgICB9XG4gICAgICAvLyAxOC4gTGV0IHB1dFN0YXR1cyBiZSBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cbiAgICAgIEEubGVuZ3RoID0gbGVuXG4gICAgICAvLyAyMC4gUmV0dXJuIEEuXG4gICAgICByZXR1cm4gQVxuICAgIH1cbiAgfSkoKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==