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
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Reset */ "./js/Reset.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Tabs */ "./js/Tabs.js");















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

new _Reset__WEBPACK_IMPORTED_MODULE_13__["default"]();
var $tabs = Array.from(document.querySelectorAll('.tabs'));

for (var _i10 = 0, _$tabs = $tabs; _i10 < _$tabs.length; _i10++) {
  var $tab = _$tabs[_i10];
  new _Tabs__WEBPACK_IMPORTED_MODULE_14__["default"]($tab);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DdXN0b21GaWxlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVJhbmdlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9SZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9UYWJzLmpzIiwid2VicGFjazovLy8uL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvcG9seWZpbGxzL0FycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vanMvcG9seWZpbGxzL2ludGVyc2VjdGlvbk9ic2VydmVyLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsIiRhY2NvcmRpb24iLCIkIiwiYWNjb3JkaW9uIiwiX2luaXRET00iLCJfaW5pdFBhcmFtcyIsIl9pbml0aWFsaXplIiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXNNdWx0aXBsZSIsImRhdGFzZXQiLCJtdWx0aXBsZSIsIiRpdGVtIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCIkY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJwdXNoIiwiaXRlbSIsIl9ldmVudHMiLCIkYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwicmVtb3ZlIiwiYWRkIiwiQW5pbWF0aW9uIiwiaW5pdCIsImFuaW1hdGVkVGl0bGVzIiwiZG9jdW1lbnQiLCJhbmltYXRlZFRpdGxlIiwid3JhcHBlclRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsIndyYXBwZXJUaXRsZTIiLCJzZXRET00iLCJldmVudHMiLCJ0aXRsZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2YWJsZXMiLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJDYXJvdXNlbCIsIiRjYXJvdXNlbCIsImNhcm91c2VsIiwibmF2aWdhdGlvbiIsImxlZnQiLCJyaWdodCIsImlzVG91Y2hEZXZpY2UiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsInR5cGUiLCJhY3RpdmVJdGVtIiwicGFnaW5hdGlvbiIsImRyYWciLCJhdXRvIiwibW9iaWxlTnVtYmVyIiwidGFibGV0TnVtYmVyIiwibGFwdG9wTnVtYmVyIiwibnVtYmVySXRlbXMiLCJsZW5ndGgiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwic2NyZWVuTnVtYmVyIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCIkcGFnaW5hdGlvbiIsImkiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJbnRlcnZhbCIsIl9tb3ZlUmlnaHQiLCJwYXJzZUludCIsIl9tb3ZlTGVmdCIsImtleUNvZGUiLCIkYnVsbGV0IiwiX21vdmVJdGVtcyIsImFjdHVhbFBvc2l0aW9uIiwidG91Y2hlcyIsImNsaWVudFgiLCJwcmVzc0l0ZW1zIiwidHJhbnNsYXRlIiwiZHJhZ0NyZXRhZWRJdGVtIiwiX2RyYWdJdGVtcyIsImNoYW5nZWRUb3VjaGVzIiwic2V0VGltZW91dCIsInJlbW92ZUNoaWxkIiwiJGxhc3RJdGVtIiwiZHVwbGljYXRlTGFzdEl0ZW0iLCJjbG9uZU5vZGUiLCJ0cmFuc2Zvcm0iLCJwb3NpdGlvbiIsIiRmaXJzdEl0ZW0iLCJkdXBsaWNhdGVGaXJzdEl0ZW0iLCJjb25zb2xlIiwibG9nIiwieCIsInQiLCJjbGVhclRpbWVvdXQiLCJ0cmFuc2l0aW9uIiwiQ3VzdG9tRmlsZSIsIiRjdXN0b21GaWxlIiwiY3VzdG9tRmlsZSIsImxhYmVsIiwiaXNCdXR0b24iLCJidXR0b24iLCJpc0J1dHRvblBvc2l0aW9uIiwiYnV0dG9ucG9zIiwiaXNTaXplIiwic2l6ZSIsImlubmVyVGV4dCIsImlubmVySFRNTCIsImNvbnRhaW5lciIsImlucHV0IiwibmFtZSIsImRpc3BsYXkiLCJjbGljayIsInNpemVDb252ZXJ0IiwiYnl0ZXMiLCJzaXplcyIsIk1hdGgiLCJmbG9vciIsImNvbnZlcnQiLCJyb3VuZCIsInBvdyIsImZpbGUiLCJmaWxlcyIsImNsb3NlIiwic3RvcFByb3BhZ2F0aW9uIiwidmFsdWUiLCIkZmlsZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCIkZmlsZSIsIm5ld0ZpbGVzIiwiRGF0YVRyYW5zZmVyIiwiQ3VzdG9tUmFuZ2UiLCIkY3VzdG9tUmFuZ2UiLCJjdXN0b21SYW5nZSIsInZpZXdUb3RhbCIsInN0ZXAiLCJnZXRBdHRyaWJ1dGUiLCIkY3JlYXRlQ3VzdG9tUmFuZ2UiLCJyZXBsYWNlQ2hpbGQiLCJ0b3RhbFZpZXciLCJ0b0xvY2FsZVN0cmluZyIsIkN1c3RvbVNlbGVjdCIsIiRjdXN0b21TZWxlY3QiLCJjdXN0b21TZWxlY3QiLCJpbml0UGFyYW1zIiwiaW5pdGlhbGl6ZSIsImlzRmlsdGVycyIsImZpbHRlcnMiLCJpc09uTW9iaWxlIiwibW9iaWxlIiwiZGVmYXVsdExhYmVsIiwidmlydHVhbExhYmVsIiwiJGNyZWF0ZUN1c3RvbVNlbGVjdCIsIiRzZWxlY3QiLCIkZGVmYXVsdE9wdGlvbiIsIiRvcHRpb24iLCJjaG9vc2UiLCIkY29udGFpbmVyIiwiZmlsdGVyIiwidG9nZ2xlIiwiY2hhbmdlVmFsdWUiLCIkbmV3SXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJEcm9wZG93biIsIiRkcm9wZG93biIsImRyb3Bkb3duIiwiSlNPTiIsInBhcnNlIiwiRm9ybVZhbGlkYXRpb24iLCIkZm9ybSIsImZvcm0iLCJub0luc3RhbnQiLCJub2luc3RhbnQiLCJub1N1Ym1pdCIsIm5vc3VibWl0IiwiZm9ybUVycm9yIiwiaW5wdXRHcm91cHMiLCIkaW5wdXRHcm91cCIsIiRpbnB1dCIsInZhbGlkYXRlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dFR5cGUiLCJydWxlcyIsInJlcXVpcmVkIiwibWlubGVuZ3RoIiwibWluTGVuZ3RoIiwibWF4bGVuZ3RoIiwibWF4TGVuZ3RoIiwicmVxdWlyZWRtZXNzYWdlIiwicmVxdWlyZWRNZXNzYWdlIiwiZXJyb3JtaW5sZW5ndGgiLCJlcnJvck1pbkxlbmd0aCIsImVycm9ybWF4bGVuZ3RoIiwiZXJyb3JNYXhMZW5ndGgiLCJlcnJvcm1lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvciIsImNsZWFyRXJyb3IiLCJtYXRjaCIsImVycm9yIiwiJGVycm9yIiwiSGVhZGVyIiwiaGVhZGVyIiwib3BlbiIsInN1YiIsIklucHV0R3JvdXAiLCJpbnB1dEdyb3VwIiwiY29udGVudCIsIk1vZGFsIiwiJG1vZGFsIiwibW9kYWwiLCJSZXNldCIsInRlc3QiLCJrZXkiLCJib2R5IiwiVGFicyIsIiR0YWJzIiwidGFicyIsImhlYWRlckl0ZW1zIiwiJGhlYWRlckl0ZW0iLCIkY29udGVudEl0ZW0iLCIkYWNjb3JkaW9ucyIsIiRjYXJvdXNlbHMiLCIkY3VzdG9tRmlsZXMiLCIkY3VzdG9tUmFuZ2VzIiwiJGN1c3RvbVNlbGVjdHMiLCIkZHJvcGRvd25zIiwiJGlucHV0R3JvdXBzIiwiJGZvcm1zIiwiJG1vZGFscyIsIiR0YWIiLCJ0b1N0ciIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaXNDYWxsYWJsZSIsImZuIiwiY2FsbCIsInRvSW50ZWdlciIsIm51bWJlciIsIk51bWJlciIsImlzTmFOIiwiaXNGaW5pdGUiLCJhYnMiLCJtYXhTYWZlSW50ZWdlciIsInRvTGVuZ3RoIiwibGVuIiwibWluIiwibWF4IiwiYXJyYXlMaWtlIiwiQyIsIlR5cGVFcnJvciIsIm1hcEZuIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiVCIsIkEiLCJrIiwia1ZhbHVlIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiZ2V0RnJhbWVFbGVtZW50IiwiZG9jIiwiZGVmYXVsdFZpZXciLCJmcmFtZUVsZW1lbnQiLCJlIiwic3RhcnREb2MiLCJmcmFtZSIsIm93bmVyRG9jdW1lbnQiLCJyZWdpc3RyeSIsImNyb3NzT3JpZ2luVXBkYXRlciIsImNyb3NzT3JpZ2luUmVjdCIsImVudHJ5IiwidGltZSIsInJvb3RCb3VuZHMiLCJlbnN1cmVET01SZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiaW50ZXJzZWN0aW9uUmVjdCIsImdldEVtcHR5UmVjdCIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0UmVjdCIsInRhcmdldEFyZWEiLCJpbnRlcnNlY3Rpb25BcmVhIiwidG9GaXhlZCIsImNhbGxiYWNrIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwiRXJyb3IiLCJyb290Iiwibm9kZVR5cGUiLCJfY2hlY2tGb3JJbnRlcnNlY3Rpb25zIiwidGhyb3R0bGUiLCJiaW5kIiwiVEhST1RUTEVfVElNRU9VVCIsIl9jYWxsYmFjayIsIl9vYnNlcnZhdGlvblRhcmdldHMiLCJfcXVldWVkRW50cmllcyIsIl9yb290TWFyZ2luVmFsdWVzIiwiX3BhcnNlUm9vdE1hcmdpbiIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGRzIiwiX2luaXRUaHJlc2hvbGRzIiwibWFwIiwibWFyZ2luIiwidW5pdCIsImpvaW4iLCJfbW9uaXRvcmluZ0RvY3VtZW50cyIsIl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzIiwiUE9MTF9JTlRFUlZBTCIsIlVTRV9NVVRBVElPTl9PQlNFUlZFUiIsIl9zZXR1cENyb3NzT3JpZ2luVXBkYXRlciIsImNvbnZlcnRGcm9tUGFyZW50UmVjdCIsIm9ic2VydmVyIiwiX3Jlc2V0Q3Jvc3NPcmlnaW5VcGRhdGVyIiwiaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQiLCJzb21lIiwiZWxlbWVudCIsIl9yZWdpc3Rlckluc3RhbmNlIiwiX21vbml0b3JJbnRlcnNlY3Rpb25zIiwiX3VubW9uaXRvckludGVyc2VjdGlvbnMiLCJfdW5yZWdpc3Rlckluc3RhbmNlIiwiZGlzY29ubmVjdCIsIl91bm1vbml0b3JBbGxJbnRlcnNlY3Rpb25zIiwidGFrZVJlY29yZHMiLCJyZWNvcmRzIiwic2xpY2UiLCJvcHRfdGhyZXNob2xkIiwiaXNBcnJheSIsInNvcnQiLCJhIiwib3B0X3Jvb3RNYXJnaW4iLCJtYXJnaW5TdHJpbmciLCJtYXJnaW5zIiwic3BsaXQiLCJwYXJ0cyIsImV4ZWMiLCJwYXJzZUZsb2F0Iiwid2luIiwiaW5kZXhPZiIsIm1vbml0b3JpbmdJbnRlcnZhbCIsImRvbU9ic2VydmVyIiwiYWRkRXZlbnQiLCJNdXRhdGlvbk9ic2VydmVyIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJzdWJ0cmVlIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50Iiwicm9vdERvYyIsImhhc0RlcGVuZGVudFRhcmdldHMiLCJpdGVtRG9jIiwidW5zdWJzY3JpYmUiLCJzcGxpY2UiLCJ1bnN1YnNjcmliZXMiLCJyb290SXNJbkRvbSIsIl9yb290SXNJbkRvbSIsInJvb3RSZWN0IiwiX2dldFJvb3RSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwicm9vdENvbnRhaW5zVGFyZ2V0IiwiX3Jvb3RDb250YWluc1RhcmdldCIsIm9sZEVudHJ5IiwiX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uIiwibmV3RW50cnkiLCJub3ciLCJfaGFzQ3Jvc3NlZFRocmVzaG9sZCIsImdldENvbXB1dGVkU3R5bGUiLCJwYXJlbnQiLCJnZXRQYXJlbnROb2RlIiwiYXRSb290IiwicGFyZW50UmVjdCIsInBhcmVudENvbXB1dGVkU3R5bGUiLCJmcmFtZVJlY3QiLCJmcmFtZUludGVyc2VjdCIsImRvY3VtZW50RWxlbWVudCIsIm92ZXJmbG93IiwiY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24iLCJpc0RvYyIsImh0bWwiLCJ0b3AiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImNsaWVudEhlaWdodCIsIl9leHBhbmRSZWN0QnlSb290TWFyZ2luIiwicmVjdCIsIm5ld1JlY3QiLCJvbGRSYXRpbyIsIm5ld1JhdGlvIiwiY29udGFpbnNEZWVwIiwicGVyZm9ybWFuY2UiLCJ0aW1lb3V0IiwidGltZXIiLCJub2RlIiwib3B0X3VzZUNhcHR1cmUiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhdGNoRXZlbnQiLCJyZWN0MSIsInJlY3QyIiwiZWwiLCJlcnIiLCJ5IiwicGFyZW50Qm91bmRpbmdSZWN0IiwicGFyZW50SW50ZXJzZWN0aW9uUmVjdCIsImNoaWxkIiwiYXNzaWduZWRTbG90IiwiaG9zdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FB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LFdBQU92QyxNQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFdBQVNVLEtBQVQsQ0FBZWUsSUFBZixFQUFxQjtBQUNuQixXQUFPQSxJQUFJLElBQUlBLElBQUksQ0FBQ3hHLFFBQUwsS0FBa0IsQ0FBakM7QUFDRCxHQWwrQlUsQ0FvK0JYOzs7QUFDQXZQLFFBQU0sQ0FBQ2Isb0JBQVAsR0FBOEJBLG9CQUE5QjtBQUNBYSxRQUFNLENBQUN3Tix5QkFBUCxHQUFtQ0EseUJBQW5DO0FBQ0QsQ0F2K0JBLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi5qc1wiKTtcbiIsIi8qKioqKioqKioqXG4gKiBBY2NvcmRpb25cbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIEFjY29yZGlvbiB7XG4gIGNvbnN0cnVjdG9yKCRhY2NvcmRpb24pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmFjY29yZGlvbiA9ICRhY2NvcmRpb24gLy8gQWRkIGFjY29yZGlvbiBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19pdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHRoaXMuJC5hY2NvcmRpb24uZGF0YXNldC5tdWx0aXBsZSAvLyBTZXQgaXMgbXVsdGlwbGUgaXRlbSBvcGVuLlxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgIGlmICgkaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7Y29udGVudEhlaWdodH1weGBcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgaXRlbTogJGl0ZW0sIGhlaWdodDogY29udGVudEhlaWdodCB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9ICRjb250ZW50Lm9mZnNldEhlaWdodFxuICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCB7IGl0ZW0sIGhlaWdodCB9IG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1CdXR0b24nKVxuICAgICAgY29uc3QgJGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHsgaXRlbSB9IG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKS5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXG4iLCJjbGFzcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiQgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRET00oKSB7XG4gICAgdGhpcy4kLmFuaW1hdGVkVGl0bGVzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlZC10aXRsZScpXG4gICAgKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBmb3IgKGNvbnN0IGFuaW1hdGVkVGl0bGUgb2YgQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlZC10aXRsZScpXG4gICAgKSkge1xuICAgICAgYW5pbWF0ZWRUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZC10aXRsZScpXG4gICAgICBjb25zdCB3cmFwcGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgd3JhcHBlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkLXRpdGxlX190ZXh0JylcbiAgICAgIGFuaW1hdGVkVGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlclRpdGxlLCBhbmltYXRlZFRpdGxlKVxuICAgICAgd3JhcHBlclRpdGxlLmFwcGVuZENoaWxkKGFuaW1hdGVkVGl0bGUpXG5cbiAgICAgIGNvbnN0IHdyYXBwZXJUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgd3JhcHBlclRpdGxlMi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC10aXRsZScpXG4gICAgICB3cmFwcGVyVGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlclRpdGxlMiwgd3JhcHBlclRpdGxlKVxuICAgICAgd3JhcHBlclRpdGxlMi5hcHBlbmRDaGlsZCh3cmFwcGVyVGl0bGUpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRET00oKVxuICAgIHRoaXMuZXZlbnRzKClcbiAgfVxuXG4gIGV2ZW50cygpIHtcbiAgICBsZXQgdGl0bGUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICBvYnNlcnZhYmxlcyA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBvYnNlcnZhYmxlcykge1xuICAgICAgICAgIGlmIChpdGVtLmludGVyc2VjdGlvblJhdGlvID4gMC41KSB7XG4gICAgICAgICAgICBpdGVtLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC10aXRsZS0tdmlzaWJsZScpXG4gICAgICAgICAgICB0aXRsZS51bm9ic2VydmUoaXRlbS50YXJnZXQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aHJlc2hvbGQ6IFswLjVdXG4gICAgICB9XG4gICAgKVxuXG4gICAgZm9yIChjb25zdCBhbmltYXRlZFRpdGxlIG9mIHRoaXMuJC5hbmltYXRlZFRpdGxlcykge1xuICAgICAgdGl0bGUub2JzZXJ2ZShhbmltYXRlZFRpdGxlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25cbiIsIi8qKioqKioqKioqXG4gKiBDYXJvdXNlbFxuICogdjEuMC4xXG4gKi9cblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBjb25zdHJ1Y3RvcigkY2Fyb3VzZWwpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmNhcm91c2VsID0gJGNhcm91c2VsIC8vIEFkZCBjYXJvdXNlbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQubmF2aWdhdGlvbiA9IHtcbiAgICAgIGxlZnQ6IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2J1dHRvbi0tbGVmdCcpLFxuICAgICAgcmlnaHQ6IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2J1dHRvbi0tcmlnaHQnKVxuICAgIH1cbiAgICB0aGlzLiQuaXRlbXMgPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtcycpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNUb3VjaERldmljZSA9ICEhKFxuICAgICAgJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50c1xuICAgIClcbiAgICB0aGlzLnR5cGUgPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50eXBlXG4gICAgICA/IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnR5cGVcbiAgICAgIDogJ25vcm1hbCdcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgdGhpcy5wYWdpbmF0aW9uID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQucGFnaW5hdGlvblxuICAgIHRoaXMuZHJhZyA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmRyYWdcbiAgICB0aGlzLmF1dG8gPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5hdXRvXG4gICAgdGhpcy5tb2JpbGVOdW1iZXIgPSAxIHx8IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0Lm1vYmlsZU51bWJlclxuICAgIHRoaXMudGFibGV0TnVtYmVyID0gMiB8fCB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50YWJsZXROdW1iZXJcbiAgICB0aGlzLmxhcHRvcE51bWJlciA9IDQgfHwgdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQubGFwdG9wTnVtYmVyXG4gICAgdGhpcy5udW1iZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJylcbiAgICApLmxlbmd0aFxuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gJ211bHRpJykge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy5zY3JlZW5OdW1iZXIgPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykub2Zmc2V0V2lkdGhcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykge1xuICAgICAgICB0aGlzLnNjcmVlbk51bWJlciA9IHRoaXMubGFwdG9wTnVtYmVyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjhweCknKS5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gdGhpcy50YWJsZXROdW1iZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gdGhpcy5tb2JpbGVOdW1iZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCAkcGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkcGFnaW5hdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbicpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJJdGVtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5pdGVtID0gaSArIDFcblxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgJHBhZ2luYXRpb24uYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9XG4gICAgICB0aGlzLiQuY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoJHBhZ2luYXRpb24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0bykge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgICAgfSwgcGFyc2VJbnQodGhpcy5hdXRvKSlcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQubmF2aWdhdGlvbi5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5fbW92ZUxlZnQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQubmF2aWdhdGlvbi5yaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVSaWdodCgpXG4gICAgfSlcblxuICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHRoaXMuX21vdmVSaWdodCgpXG4gICAgfSlcblxuICAgIGZvciAoY29uc3QgJGJ1bGxldCBvZiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgKSkge1xuICAgICAgJGJ1bGxldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICRidWxsZXQuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygkYnVsbGV0LmRhdGFzZXQuaXRlbSAtIDEpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHBhcnNlSW50KCRidWxsZXQuZGF0YXNldC5pdGVtKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kcmFnKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRGV2aWNlKSB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPiB0aGlzLmFjdHVhbFBvc2l0aW9uKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA8IHRoaXMuYWN0dWFsUG9zaXRpb24pXG4gICAgICAgICAgICAgIHRoaXMuX21vdmVSaWdodCgpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcyAmJlxuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMSAmJlxuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IHRydWVcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IDBcbiAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLl9kcmFnSXRlbXMoZXZlbnQuY2xpZW50WClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuJC5pdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9faXRlbXMtLWRyYWcnKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjApIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gMjApIHRoaXMuX21vdmVSaWdodCgpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24gKyAyMCB8fFxuICAgICAgICAgICAgICBldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcyAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMSAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RyYWdJdGVtcyhjbGllbnRYKSB7XG4gICAgdGhpcy4kLml0ZW1zLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19pdGVtcy0tZHJhZycpXG4gICAgaWYgKHRoaXMucHJlc3NJdGVtcykge1xuICAgICAgaWYgKGNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gY2xpZW50WCAtIHRoaXMuYWN0dWFsUG9zaXRpb25cblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdDcmV0YWVkSXRlbSkge1xuICAgICAgICAgICAgICBjb25zdCAkbGFzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlTGFzdEl0ZW0gPSAkbGFzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0sXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggK1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdGhpcy5hY3R1YWxQb3NpdGlvbiAtIGNsaWVudFhcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICAgIGNvbnN0ICRmaXJzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmNhcm91c2VsX19pdGVtJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVGaXJzdEl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5udW1iZXJJdGVtcyAtXG4gICAgICAgICAgICAgIDEpICpcbiAgICAgICAgICAgICAgLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVMZWZ0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnIHx8IHRoaXMudHlwZSA9PT0gJ211bHRpJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2xvb3AnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMubnVtYmVySXRlbXMgLSAxLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMubnVtYmVySXRlbXNcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICBjb25zdCAkbGFzdEl0ZW0gPSB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgZHVwbGljYXRlTGFzdEl0ZW0gPSAkbGFzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUxhc3RJdGVtKVxuICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpLFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICApXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygtMSwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA8PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVSaWdodCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbm9ybWFsJyB8fCB0aGlzLnR5cGUgPT09ICdtdWx0aScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zIC0gKHRoaXMuc2NyZWVuTnVtYmVyIC0gMSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29rJylcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2xvb3AnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKDAsICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRmaXJzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgY29uc3QgZHVwbGljYXRlRmlyc3RJdGVtID0gJGZpcnN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUZpcnN0SXRlbSlcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlSXRlbXMoeCwgcG9zaXRpb24gPSBudWxsKSB7XG4gICAgbGV0IHRcbiAgICBjbGVhclRpbWVvdXQodClcbiAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQnXG4gICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7eCAqIC10aGlzLndpZHRofXB4KWBcblxuICAgIHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgIHBvc2l0aW9uID09PSAncmlnaHQnICYmXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZCh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykpXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJyksXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICBwb3NpdGlvbiA9PT0gJ2xlZnQnICYmXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZCh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLm51bWJlckl0ZW1zIC0gMSkgKlxuICAgICAgICAgIC10aGlzLndpZHRofSlgXG4gICAgICB9XG4gICAgfSwgMTAwMClcblxuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bnRoLWNoaWxkKCR7dGhpcy5hY3RpdmVJdGVtIC0gMX0pYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcylcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpudGgtY2hpbGQoJHt0aGlzLmFjdGl2ZUl0ZW0gKyAxfSlgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tRmlsZVxuICogdjEuMS4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tRmlsZSB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21GaWxlKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21GaWxlID0gJGN1c3RvbUZpbGUgLy8gQWRkIGN1c3RvbS1zZWxlY3QgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQubGFiZWxcbiAgICB0aGlzLmlzQnV0dG9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25cbiAgICB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgOiAncmlnaHQnXG4gICAgdGhpcy50eXBlID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC50eXBlXG4gICAgICA/IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQudHlwZVxuICAgICAgOiAnZmlsZSdcbiAgICB0aGlzLmlzU2l6ZSA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuc2l6ZVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMuaXNCdXR0b24pIHtcbiAgICAgIHRoaXMuJC5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuaXNCdXR0b25cbiAgICB9XG5cbiAgICB0aGlzLiQuY3VzdG9tRmlsZS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgaWYgKHRoaXMuaXNTaXplKSB7XG4gICAgICB0aGlzLiQuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2NvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuaXNTaXplXG4gICAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGxhYmVsXG4gICAgdGhpcy4kLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGhpcy4kLmxhYmVsLmlubmVyVGV4dCA9IHRoaXMubGFiZWxcbiAgICB0aGlzLiQubGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2xhYmVsJylcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmxhYmVsKVxuXG4gICAgLy8gQ3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0Lm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJylcbiAgICBpZiAodGhpcy50eXBlID09PSAnZmlsZXMnKSB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsIHRydWUpXG4gICAgZWxzZSBpZiAodGhpcy50eXBlID09PSAnZm9sZGVyJykge1xuICAgICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnd2Via2l0ZGlyZWN0b3J5JywgdHJ1ZSlcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2RpcmVjdG9yeXMnLCB0cnVlKVxuICAgIH1cbiAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuaXNTaXplXG4gICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICBpZiAodGhpcy5pc0J1dHRvbiAmJiB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuaXNTaXplXG4gICAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTaXplKSB7XG4gICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuY29udGFpbmVyKVxuXG4gICAgICAvLyBDcmVhdGUgc2l6ZSBpbmZvXG4gICAgICB0aGlzLiQuc2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgdGhpcy4kLnNpemUuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX3NpemUnKVxuICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gJzAgbWInXG4gICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuc2l6ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0LmNsaWNrKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2l6ZUNvbnZlcnQgPSBzaXplID0+IHtcbiAgICAgIGNvbnN0IGJ5dGVzID0gc2l6ZVxuICAgICAgY29uc3Qgc2l6ZXMgPSBbJ2J5dGVzJywgJ2tiJywgJ21iJywgJ2diJywgJ3RiJ11cbiAgICAgIGNvbnN0IGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSlcbiAgICAgIGNvbnN0IGNvbnZlcnQgPSBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpXG4gICAgICByZXR1cm4gYCR7Y29udmVydH0gJHtzaXplc1tpXX1gXG4gICAgfVxuXG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZUNsb3NlJylcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJyZ0aW1lczsnXG4gICAgICAgIHRoaXMuJC5jb250YWluZXIuaW5zZXJ0QmVmb3JlKGNsb3NlLCB0aGlzLiQuYnV0dG9uKVxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9IG51bGxcbiAgICAgICAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5sYWJlbFxuICAgICAgICAgIHRoaXMuJC5jb250YWluZXIucmVtb3ZlQ2hpbGQoY2xvc2UpXG4gICAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gJzAgbWInXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KGZpbGUuc2l6ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlc1xuXG4gICAgICAgIGNvbnN0ICRmaWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCBzaXplID0gMFxuXG4gICAgICAgIEFycmF5LmZyb20oZmlsZXMpLmZvckVhY2goKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgJGZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICRmaWxlLmlubmVyVGV4dCA9IGZpbGUubmFtZVxuICAgICAgICAgICRmaWxlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19maWxlJylcblxuICAgICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZUNsb3NlJylcbiAgICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnJnRpbWVzOydcblxuICAgICAgICAgICRmaWxlLmFwcGVuZENoaWxkKGNsb3NlKVxuICAgICAgICAgICRmaWxlcy5hcHBlbmRDaGlsZCgkZmlsZSlcblxuICAgICAgICAgIHNpemUgKz0gZmlsZS5zaXplXG5cbiAgICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzaXplID0gMFxuICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBuZXcgRGF0YVRyYW5zZmVyKClcbiAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgICAgICAgaWYgKGZpbGUgIT09IGZpbGVzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIG5ld0ZpbGVzLml0ZW1zLmFkZChmaWxlKVxuICAgICAgICAgICAgICAgIHNpemUgKz0gZmlsZS5zaXplXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KHNpemUpXG4gICAgICAgICAgICB0aGlzLiQuaW5wdXQuZmlsZXMgPSBuZXdGaWxlcy5maWxlc1xuICAgICAgICAgICAgJGZpbGVzLnJlbW92ZUNoaWxkKCRmaWxlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gc2l6ZUNvbnZlcnQoc2l6ZSlcblxuICAgICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCgkZmlsZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21GaWxlXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tUmFuZ2VcbiAqIHYxLjEuMVxuICovXG5cbmNsYXNzIEN1c3RvbVJhbmdlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVJhbmdlKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21SYW5nZSA9ICRjdXN0b21SYW5nZSAvLyBBZGQgY3VzdG9tUmFuZ2UgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy52aWV3VG90YWwgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC52aWV3VG90YWxcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZ2V0QXR0cmlidXRlKCdzdGVwJylcbiAgICB0aGlzLm5hbWUgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIC8vIGNyZWF0ZSBjb21wb25lbnRcbiAgICBjb25zdCAkY3JlYXRlQ3VzdG9tUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjcmVhdGVDdXN0b21SYW5nZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2UnKVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChcbiAgICAgICRjcmVhdGVDdXN0b21SYW5nZSxcbiAgICAgIHRoaXMuJC5jdXN0b21SYW5nZVxuICAgIClcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UgPSAkY3JlYXRlQ3VzdG9tUmFuZ2VcblxuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKVxuXG4gICAgLy8gQ3JlYXRlIHRvdGFsIHZpZXcuXG4gICAgaWYgKHRoaXMudmlld1RvdGFsKSB7XG4gICAgICB0aGlzLiQudG90YWxWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC50b3RhbFZpZXcuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX190b3RhbCcpXG4gICAgICB0aGlzLiQudG90YWxWaWV3LmlubmVyVGV4dCA9IChcbiAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlICogdGhpcy5zdGVwXG4gICAgICApLnRvTG9jYWxlU3RyaW5nKClcbiAgICB9XG5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQudG90YWxWaWV3KVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgdGhpcy4kLnRvdGFsVmlldy5pbm5lclRleHQgPSAoXG4gICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSAqIHRoaXMuc3RlcFxuICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgfSlcblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLiQudG90YWxWaWV3LmlubmVyVGV4dCA9IChcbiAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlICogdGhpcy5zdGVwXG4gICAgICApLnRvTG9jYWxlU3RyaW5nKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJhbmdlXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tU2VsZWN0XG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBDdXN0b21TZWxlY3Qge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tU2VsZWN0KSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QgPSAkY3VzdG9tU2VsZWN0IC8vIEFkZCBjdXN0b20tc2VsZWN0IGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5pbml0UGFyYW1zKClcbiAgICB0aGlzLmluaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBpbml0UGFyYW1zKCkge1xuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICB0aGlzLmlzRmlsdGVycyA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5maWx0ZXJzIC8vIFNldCBmaWx0ZXJzIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubW9iaWxlIC8vIFNldCBjdXN0b20gbW9iaWxlIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmRlZmF1bHRMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgZGVmYXVsdCBsYWJlbC5cbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgYWN0aXZhdGVkIGxhYmVsLlxuICAgIHRoaXMuaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpIC8vIEdldCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgLy8gY3JlYXRlIGNvbXBvbmVudFxuICAgIGNvbnN0ICRjcmVhdGVDdXN0b21TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjcmVhdGVDdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdCcpXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChcbiAgICAgICRjcmVhdGVDdXN0b21TZWxlY3QsXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0XG4gICAgKVxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QgPSAkY3JlYXRlQ3VzdG9tU2VsZWN0XG5cbiAgICBpZiAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlcykge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICAgIGNvbnN0ICRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgJHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZGVmYXVsdCBzZWxlY3Qgb3B0aW9uLlxuICAgICAgY29uc3QgJGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgJGRlZmF1bHRPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKVxuICAgICAgJGRlZmF1bHRPcHRpb24uaW5uZXJUZXh0ID0gdGhpcy5kZWZhdWx0TGFiZWxcbiAgICAgICRzZWxlY3QuYXBwZW5kQ2hpbGQoJGRlZmF1bHRPcHRpb24pXG5cbiAgICAgIC8vIENyZWF0ZSBzZWxlY3Qgb3B0aW9ucy5cbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgJG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgICRvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGl0ZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0uaW5uZXJUZXh0XG4gICAgICAgICRzZWxlY3QuYXBwZW5kQ2hpbGQoJG9wdGlvbilcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJHNlbGVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tZmlsdGVycycpXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCB3aXRoIGVsZW1lbnRzLlxuICAgICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY29udGVudCcpXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5sYWJlbCA9IGl0ZW0uaW5uZXJUZXh0XG4gICAgICAgICRpdGVtLmRhdGFzZXQudmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgICAgICAkaXRlbS5pbm5lclRleHQgPSBpdGVtLmlubmVyVGV4dFxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9KVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbi5cbiAgICAgIHRoaXMuJC5jaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLmNob29zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jaG9vc2UnKVxuICAgICAgaWYgKCF0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuZGVmYXVsdExhYmVsXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY29udGFpbmVyJylcbiAgICAgICRjb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm5hbWUpXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuY2hvb3NlKVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgICAvLyBDcmVhdGUgaW5wdXQgZm9yIHNlbGVjdCB2YWx1ZS5cbiAgICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3RfX2l0ZW0nKVxuICAgICAgKSAvLyBHZXQgYWxsIGl0ZW1zIGluIGFycmF5LlxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGZpbHRlciBpbnB1dC5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy5kZWZhdWx0TGFiZWxcbiAgICAgICAgdGhpcy4kLmNob29zZS5hcHBlbmRDaGlsZCh0aGlzLiQuZmlsdGVyKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzKClcbiAgfVxuXG4gIGV2ZW50cygpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykgfHxcbiAgICAgIHRoaXMuaXNPbk1vYmlsZVxuICAgICkge1xuICAgICAgdGhpcy4kLmNob29zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXN0b20tc2VsZWN0LS1vcGVuJykpIHtcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG4gICAgICAgICAgfSwgMjAwKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB0aGlzLiQuaXRlbXMuZm9yRWFjaCgkaXRlbSA9PiB7XG4gICAgICAgICRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoJGl0ZW0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gJydcbiAgICAgICAgICB0aGlzLiQuZmlsdGVyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0aGlzLnZpcnR1YWxMYWJlbClcbiAgICAgICAgICB0aGlzLiQuaXRlbXMuZm9yRWFjaCgkaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICRpdGVtXG4gICAgICAgICAgICAkbmV3SXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCRpdGVtLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuJC5maWx0ZXIudmFsdWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJGl0ZW1cbiAgICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJGl0ZW1cbiAgICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5jdXN0b21TZWxlY3QuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG5cbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG5cbiAgICAgICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQuZmlsdGVyLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLnZpcnR1YWxMYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbml0aWFsaXplKClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlVmFsdWUoJGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAkaXRlbS5pbm5lclRleHRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNob29zZS5pbm5lclRleHQgPSAkaXRlbS5pbm5lclRleHRcbiAgICB9XG5cbiAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSAkaXRlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9ICRpdGVtLmlubmVyVGV4dFxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdFxuIiwiLyoqKioqKioqKipcbiAqIERyb3Bkb3duXG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKCRkcm9wZG93bikge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZHJvcGRvd24gPSAkZHJvcGRvd24gLy8gQWRkIGRyb3Bkb3duIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNPbk1vYmlsZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQubmFtZVxuICAgIHRoaXMuaXRlbXMgPVxuICAgICAgdGhpcy50eXBlID09PSAnbGluaycgPyBKU09OLnBhcnNlKHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lml0ZW1zKSA6IG51bGwgLy8gQ3JlYXRlIEpTT04gb2JqZWN0IHdpdGggaXRlbXMuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9faXRlbScpXG4gICAgKVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IHdpdGggZWxlbWVudHMuXG4gICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jb250ZW50JylcblxuICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAkY29udGVudC5hcHBlbmRDaGlsZCgkaXRlbSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbi5cbiAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLiQuY2hvb3NlLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jaG9vc2UnKVxuICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJIVE1MID0gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQubGFiZWxcbiAgICB0aGlzLiQuY2hvb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWUpXG5cbiAgICAvLyBDcmVhdGUgd3JhcHBpbmcgY29udGFpbmVyIGZvciBjb250ZW50LlxuICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRhaW5lcicpXG4gICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICAkY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy5uYW1lKVxuICAgIHRoaXMuJC5kcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuICAgIHRoaXMuJC5kcm9wZG93bi5hcHBlbmRDaGlsZCh0aGlzLiQuY2hvb3NlKVxuICAgIHRoaXMuJC5kcm9wZG93bi5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmNob29zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bi0tb3BlbicpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKCF0aGlzLiQuZHJvcGRvd24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tLW9wZW4nKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqKioqKioqKipcbiAqIEZvcm1WYWxpZGF0aW9uXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBGb3JtVmFsaWRhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCRmb3JtKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5mb3JtID0gJGZvcm0gLy8gQWRkIGZvcm0gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5ub0luc3RhbnQgPSAhIXRoaXMuJC5mb3JtLmRhdGFzZXQubm9pbnN0YW50XG4gICAgdGhpcy5ub1N1Ym1pdCA9ICEhdGhpcy4kLmZvcm0uZGF0YXNldC5ub3N1Ym1pdFxuICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmlucHV0R3JvdXBzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCAkaW5wdXRHcm91cCBvZiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJylcbiAgICApKSB7XG4gICAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG5cbiAgICAgICRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubm9JbnN0YW50KSB7XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZSgkaW5wdXRHcm91cClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubm9TdWJtaXQpIHtcbiAgICAgIHRoaXMuJC5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZVxuICAgICAgICBmb3IgKGNvbnN0ICRpbnB1dEdyb3VwIG9mIEFycmF5LmZyb20oXG4gICAgICAgICAgdGhpcy4kLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJylcbiAgICAgICAgKSkge1xuICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZSgkaW5wdXRHcm91cCkpIHRoaXMuZm9ybUVycm9yID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybUVycm9yKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKCRpbnB1dEdyb3VwKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIGNvbnN0IHZhbHVlID0gJGlucHV0LnZhbHVlXG4gICAgY29uc3QgaW5wdXRUeXBlID0gJGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpXG5cbiAgICAvLyBydWxlc1xuICAgIGNvbnN0IHJ1bGVzID0ge31cbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZClcbiAgICAgIHJ1bGVzLnJlcXVpcmVkID0gJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZFxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0Lm1pbmxlbmd0aClcbiAgICAgIHJ1bGVzLm1pbkxlbmd0aCA9IHBhcnNlSW50KCRpbnB1dEdyb3VwLmRhdGFzZXQubWlubGVuZ3RoKVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0Lm1heGxlbmd0aClcbiAgICAgIHJ1bGVzLm1heExlbmd0aCA9IHBhcnNlSW50KCRpbnB1dEdyb3VwLmRhdGFzZXQubWF4bGVuZ3RoKVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkbWVzc2FnZSlcbiAgICAgIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSA9ICRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRtZXNzYWdlXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtaW5sZW5ndGgpXG4gICAgICBydWxlcy5lcnJvck1pbkxlbmd0aCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtaW5sZW5ndGhcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1heGxlbmd0aClcbiAgICAgIHJ1bGVzLmVycm9yTWF4TGVuZ3RoID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1heGxlbmd0aFxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWVzc2FnZSlcbiAgICAgIHJ1bGVzLmVycm9yTWVzc2FnZSA9ICRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtZXNzYWdlXG5cbiAgICBpZiAoaW5wdXRUeXBlID09PSAndGV4dCcpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5taW5MZW5ndGggJiYgdmFsdWUubGVuZ3RoIDwgcnVsZXMubWluTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWluTGVuZ3RoIHx8ICd0b28gbG93JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1heExlbmd0aCAmJiB2YWx1ZS5sZW5ndGggPiBydWxlcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNYXhMZW5ndGggfHwgJ3RvbyBiaWcnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5taW5MZW5ndGggJiYgdmFsdWUgPCBydWxlcy5taW5MZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNaW5MZW5ndGggfHwgJ3RvbyBsb3cnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWF4TGVuZ3RoICYmIHZhbHVlID4gcnVsZXMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWF4TGVuZ3RoIHx8ICd0b28gYmlnJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdlbWFpbCcpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXZhbHVlLm1hdGNoKFxuICAgICAgICAgIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1lc3NhZ2UgfHwgJ25vdCBhIHZhbGlkIGVtYWlsJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICd0ZWwnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF2YWx1ZS5tYXRjaCgvXig/Oig/OlxcK3wwMCkzM3wwKVxccypbMS05XSg/OltcXHMuLV0qXFxkezJ9KXs0fSQvKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWVzc2FnZSB8fCAnbm90IGEgdmFsaWQgZW1haWwnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRFcnJvcigkaW5wdXRHcm91cCwgZXJyb3IpIHtcbiAgICBsZXQgJGVycm9yID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignLmlucHV0LWdyb3VwX19lcnJvcicpXG4gICAgaWYgKCRlcnJvcikge1xuICAgICAgJGVycm9yLmlubmVyVGV4dCA9IGVycm9yXG4gICAgfSBlbHNlIHtcbiAgICAgICRlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgJGVycm9yLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwX19lcnJvcicpXG4gICAgICAkZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JcbiAgICAgICRpbnB1dEdyb3VwLmFwcGVuZENoaWxkKCRlcnJvcilcbiAgICB9XG4gIH1cblxuICBjbGVhckVycm9yKCRpbnB1dEdyb3VwKSB7XG4gICAgY29uc3QgJGVycm9yID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignLmlucHV0LWdyb3VwX19lcnJvcicpXG4gICAgaWYgKCRlcnJvcikge1xuICAgICAgJGlucHV0R3JvdXAucmVtb3ZlQ2hpbGQoJGVycm9yKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdGlvblxuIiwiLyoqKioqKioqKipcbiAqIEhlYWRlclxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykgLy8gQWRkIGhlYWRlciBpbiBET00gb2JqZWN0cy5cbiAgICB0aGlzLiQuY2xvc2UgPSB0aGlzLiQuaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RvZ2dsZS0tY2xvc2UnKVxuICAgIHRoaXMuJC5vcGVuID0gdGhpcy4kLmhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b2dnbGUtLW9wZW4nKVxuICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX21lbnVJdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMjAwcHgpJykubWF0Y2hlcykge1xuICAgICAgdGhpcy4kLm9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuJC5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy4kLmhlYWRlci5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICAgICAgIHRoaXMuJC5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICAgY29uc3Qgc3ViID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51SXRlbVN1YicpXG4gICAgICAgIGlmIChzdWIpIHtcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnVJdGVtQnV0dG9uJylcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBzdWIub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgc3ViLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICBzdWIuc3R5bGUudHJhbnNpdGlvbiA9ICdoZWlnaHQgMC4zcyBlYXNlLWluLW91dCdcblxuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX21lbnVJdGVtU3ViLS1vcGVuJykpIHtcbiAgICAgICAgICAgICAgc3ViLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICAgICAgc3ViLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbWVudUl0ZW1TdWItLW9wZW4nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3ViLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcbiAgICAgICAgICAgICAgc3ViLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbWVudUl0ZW1TdWItLW9wZW4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iLCIvKioqKioqKioqKlxuICogSW5wdXRHcm91cFxuICogdjEuMC4xXG4gKi9cblxuY2xhc3MgSW5wdXRHcm91cCB7XG4gIGNvbnN0cnVjdG9yKCRpbnB1dEdyb3VwKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5pbnB1dEdyb3VwID0gJGlucHV0R3JvdXAgLy8gQWRkIGlucHV0R3JvdXAgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiQuaW5wdXRHcm91cC5pbm5lckhUTUxcbiAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXBfX2NvbnRlbnQnKVxuICAgICRjb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICB0aGlzLiQuaW5wdXQgPSAkY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0R3JvdXAuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLiQuaW5wdXRHcm91cC5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuaW5wdXRHcm91cC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cC0tYWN0aXZlJylcbiAgICB9KVxuXG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuJC5pbnB1dC52YWx1ZSlcbiAgICAgICAgdGhpcy4kLmlucHV0R3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZ3JvdXAtLWFjdGl2ZScpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEdyb3VwXG4iLCIvKioqKioqKioqKlxuICogTW9kYWxcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoJG1vZGFsKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5tb2RhbCA9ICRtb2RhbCAvLyBBZGQgbW9kYWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubW9kYWwtYnV0dG9uW2RhdGEtbW9kYWw9XCIke3RoaXMuJC5tb2RhbC5kYXRhc2V0Lm1vZGFsfVwiXWBcbiAgICAgIClcbiAgICApXG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5tb2RhbC1idXR0b25bZGF0YS1tb2RhbD1cIiR7dGhpcy4kLm1vZGFsLmRhdGFzZXQubW9kYWx9XCJdYFxuICAgICAgKVxuICAgIGlmICh0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpKVxuICAgICAgdGhpcy4kLmNsb3NlID0gdGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtLWFjdGl2ZScpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGVudCcpLmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLiQuYnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLiQuY2xvc2UpIHtcbiAgICAgIHRoaXMuJC5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsImNsYXNzIFJlc2V0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgIGlmICghL15bYS16MC05XSQvaS50ZXN0KGV2ZW50LmtleSkpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQnKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2tleWJvYXJkJylcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0XG4iLCIvKioqKioqKioqKlxuICogVGFic1xuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgVGFicyB7XG4gIGNvbnN0cnVjdG9yKCR0YWJzKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC50YWJzID0gJHRhYnMgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5oZWFkZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faGVhZGVySXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCAkaGVhZGVySXRlbSBvZiB0aGlzLiQuaGVhZGVySXRlbXMpIHtcbiAgICAgIGNvbnN0ICRjb250ZW50SXRlbSA9IHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGFic19fY29udGVudEl0ZW1bZGF0YS1pdGVtPVwiJHskaGVhZGVySXRlbS5kYXRhc2V0Lml0ZW19XCJdYFxuICAgICAgKVxuICAgICAgJGhlYWRlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19faGVhZGVySXRlbS0tYWN0aXZlJykpXG4gICAgICAgICAgdGhpcy4kLnRhYnNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICBpZiAodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgICAgJGhlYWRlckl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgJGNvbnRlbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuIiwiaW1wb3J0ICcuL3BvbHlmaWxscy9BcnJheS5mcm9tJ1xuaW1wb3J0ICcuL3BvbHlmaWxscy9pbnRlcnNlY3Rpb25PYnNlcnZlcidcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4vQW5pbWF0aW9uJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnXG5pbXBvcnQgQ3VzdG9tRmlsZSBmcm9tICcuL0N1c3RvbUZpbGUnXG5pbXBvcnQgQ3VzdG9tUmFuZ2UgZnJvbSAnLi9DdXN0b21SYW5nZSdcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnLi9DdXN0b21TZWxlY3QnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuL0lucHV0R3JvdXAnXG5pbXBvcnQgRm9ybVZhbGlkYXRpb24gZnJvbSAnLi9Gb3JtVmFsaWRhdGlvbidcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFJlc2V0IGZyb20gJy4vUmVzZXQnXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5cbmNvbnN0ICRhY2NvcmRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpXG5mb3IgKGNvbnN0ICRhY2NvcmRpb24gb2YgJGFjY29yZGlvbnMpIHtcbiAgbmV3IEFjY29yZGlvbigkYWNjb3JkaW9uKVxufVxuXG5uZXcgQW5pbWF0aW9uKClcblxuY29uc3QgJGNhcm91c2VscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsJykpXG5mb3IgKGNvbnN0ICRjYXJvdXNlbCBvZiAkY2Fyb3VzZWxzKSB7XG4gIG5ldyBDYXJvdXNlbCgkY2Fyb3VzZWwpXG59XG5cbmNvbnN0ICRjdXN0b21GaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1maWxlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21GaWxlIG9mICRjdXN0b21GaWxlcykge1xuICBuZXcgQ3VzdG9tRmlsZSgkY3VzdG9tRmlsZSlcbn1cblxuY29uc3QgJGN1c3RvbVJhbmdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYW5nZScpKVxuZm9yIChjb25zdCAkY3VzdG9tUmFuZ2Ugb2YgJGN1c3RvbVJhbmdlcykge1xuICBuZXcgQ3VzdG9tUmFuZ2UoJGN1c3RvbVJhbmdlKVxufVxuXG5jb25zdCAkY3VzdG9tU2VsZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3QnKSlcbmZvciAoY29uc3QgJGN1c3RvbVNlbGVjdCBvZiAkY3VzdG9tU2VsZWN0cykge1xuICBuZXcgQ3VzdG9tU2VsZWN0KCRjdXN0b21TZWxlY3QpXG59XG5cbmNvbnN0ICRkcm9wZG93bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpKVxuZm9yIChjb25zdCAkZHJvcGRvd24gb2YgJGRyb3Bkb3ducykge1xuICBuZXcgRHJvcGRvd24oJGRyb3Bkb3duKVxufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpKSBuZXcgSGVhZGVyKClcblxuY29uc3QgJGlucHV0R3JvdXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKSlcbmZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgJGlucHV0R3JvdXBzKSB7XG4gIG5ldyBJbnB1dEdyb3VwKCRpbnB1dEdyb3VwKVxufVxuXG5jb25zdCAkZm9ybXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWxpZGF0aW9uJykpXG5mb3IgKGNvbnN0ICRmb3JtIG9mICRmb3Jtcykge1xuICBuZXcgRm9ybVZhbGlkYXRpb24oJGZvcm0pXG59XG5cbmNvbnN0ICRtb2RhbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpKVxuZm9yIChjb25zdCAkbW9kYWwgb2YgJG1vZGFscykge1xuICBuZXcgTW9kYWwoJG1vZGFsKVxufVxuXG5uZXcgUmVzZXQoKVxuXG5jb25zdCAkdGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSlcbmZvciAoY29uc3QgJHRhYiBvZiAkdGFicykge1xuICBuZXcgVGFicygkdGFiKVxufVxuIiwiaWYgKCFBcnJheS5mcm9tKSB7XG4gIEFycmF5LmZyb20gPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuICAgIHZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICB9XG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKVxuICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChudW1iZXIgPT09IDAgfHwgIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlclxuICAgICAgfVxuICAgICAgcmV0dXJuIChudW1iZXIgPiAwID8gMSA6IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSlcbiAgICB9XG4gICAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMVxuICAgIHZhciB0b0xlbmd0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKHZhbHVlKVxuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGxlbiwgMCksIG1heFNhZmVJbnRlZ2VyKVxuICAgIH1cblxuICAgIC8vIFRoZSBsZW5ndGggcHJvcGVydHkgb2YgdGhlIGZyb20gbWV0aG9kIGlzIDEuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgICAgLy8gMS4gTGV0IEMgYmUgdGhlIHRoaXMgdmFsdWUuXG4gICAgICB2YXIgQyA9IHRoaXNcblxuICAgICAgLy8gMi4gTGV0IGl0ZW1zIGJlIFRvT2JqZWN0KGFycmF5TGlrZSkuXG4gICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKVxuXG4gICAgICAvLyAzLiBSZXR1cm5JZkFicnVwdChpdGVtcykuXG4gICAgICBpZiAoYXJyYXlMaWtlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAnQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCdcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyA0LiBJZiBtYXBmbiBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IG1hcHBpbmcgYmUgZmFsc2UuXG4gICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkXG4gICAgICB2YXIgVFxuICAgICAgaWYgKHR5cGVvZiBtYXBGbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gNS4gZWxzZVxuICAgICAgICAvLyA1LiBhIElmIElzQ2FsbGFibGUobWFwZm4pIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG4gICAgICAgIGlmICghaXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDUuIGIuIElmIHRoaXNBcmcgd2FzIHN1cHBsaWVkLCBsZXQgVCBiZSB0aGlzQXJnOyBlbHNlIGxldCBUIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgVCA9IGFyZ3VtZW50c1syXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDEwLiBMZXQgbGVuVmFsdWUgYmUgR2V0KGl0ZW1zLCBcImxlbmd0aFwiKS5cbiAgICAgIC8vIDExLiBMZXQgbGVuIGJlIFRvTGVuZ3RoKGxlblZhbHVlKS5cbiAgICAgIHZhciBsZW4gPSB0b0xlbmd0aChpdGVtcy5sZW5ndGgpXG5cbiAgICAgIC8vIDEzLiBJZiBJc0NvbnN0cnVjdG9yKEMpIGlzIHRydWUsIHRoZW5cbiAgICAgIC8vIDEzLiBhLiBMZXQgQSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIEMgd2l0aCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGxlbi5cbiAgICAgIC8vIDE0LiBhLiBFbHNlLCBMZXQgQSBiZSBBcnJheUNyZWF0ZShsZW4pLlxuICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbilcblxuICAgICAgLy8gMTYuIExldCBrIGJlIDAuXG4gICAgICB2YXIgayA9IDBcbiAgICAgIC8vIDE3LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW7igKYgKGFsc28gc3RlcHMgYSAtIGgpXG4gICAgICB2YXIga1ZhbHVlXG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXVxuICAgICAgICBpZiAobWFwRm4pIHtcbiAgICAgICAgICBBW2tdID1cbiAgICAgICAgICAgIHR5cGVvZiBUID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA/IG1hcEZuKGtWYWx1ZSwgaylcbiAgICAgICAgICAgICAgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgaylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBW2tdID0ga1ZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgayArPSAxXG4gICAgICB9XG4gICAgICAvLyAxOC4gTGV0IHB1dFN0YXR1cyBiZSBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cbiAgICAgIEEubGVuZ3RoID0gbGVuXG4gICAgICAvLyAyMC4gUmV0dXJuIEEuXG4gICAgICByZXR1cm4gQVxuICAgIH1cbiAgfSkoKVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU09GVFdBUkUgQU5EIERPQ1VNRU5UIE5PVElDRSBBTkQgTElDRU5TRS5cbiAqXG4gKiAgaHR0cHM6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50XG4gKlxuICovXG47KGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCdcblxuICAvLyBFeGl0IGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluIGEgYnJvd3Nlci5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBFeGl0IGVhcmx5IGlmIGFsbCBJbnRlcnNlY3Rpb25PYnNlcnZlciBhbmQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVxuICAvLyBmZWF0dXJlcyBhcmUgbmF0aXZlbHkgc3VwcG9ydGVkLlxuICBpZiAoXG4gICAgJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgJiZcbiAgICAnSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeScgaW4gd2luZG93ICYmXG4gICAgJ2ludGVyc2VjdGlvblJhdGlvJyBpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGVcbiAgKSB7XG4gICAgLy8gTWluaW1hbCBwb2x5ZmlsbCBmb3IgRWRnZSAxNSdzIGxhY2sgb2YgYGlzSW50ZXJzZWN0aW5nYFxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9pc3N1ZXMvMjExXG4gICAgaWYgKCEoJ2lzSW50ZXJzZWN0aW5nJyBpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSxcbiAgICAgICAgJ2lzSW50ZXJzZWN0aW5nJyxcbiAgICAgICAge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZW1iZWRkaW5nIGZyYW1lIGVsZW1lbnQsIGlmIGFueS5cbiAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY1xuICAgKiBAcmV0dXJuIHshRWxlbWVudH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEZyYW1lRWxlbWVudChkb2MpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChkb2MuZGVmYXVsdFZpZXcgJiYgZG9jLmRlZmF1bHRWaWV3LmZyYW1lRWxlbWVudCkgfHwgbnVsbFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElnbm9yZSB0aGUgZXJyb3IuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBkb2N1bWVudC5cbiAgICovXG4gIHZhciBkb2N1bWVudCA9IChmdW5jdGlvbihzdGFydERvYykge1xuICAgIHZhciBkb2MgPSBzdGFydERvY1xuICAgIHZhciBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChkb2MpXG4gICAgd2hpbGUgKGZyYW1lKSB7XG4gICAgICBkb2MgPSBmcmFtZS5vd25lckRvY3VtZW50XG4gICAgICBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChkb2MpXG4gICAgfVxuICAgIHJldHVybiBkb2NcbiAgfSkod2luZG93LmRvY3VtZW50KVxuXG4gIC8qKlxuICAgKiBBbiBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS4gVGhpcyByZWdpc3RyeSBleGlzdHMgdG8gaG9sZCBhIHN0cm9uZ1xuICAgKiByZWZlcmVuY2UgdG8gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2VzIGN1cnJlbnRseSBvYnNlcnZpbmcgYSB0YXJnZXRcbiAgICogZWxlbWVudC4gV2l0aG91dCB0aGlzIHJlZ2lzdHJ5LCBpbnN0YW5jZXMgd2l0aG91dCBhbm90aGVyIHJlZmVyZW5jZSBtYXkgYmVcbiAgICogZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAqL1xuICB2YXIgcmVnaXN0cnkgPSBbXVxuXG4gIC8qKlxuICAgKiBUaGUgc2lnbmFsIHVwZGF0ZXIgZm9yIGNyb3NzLW9yaWdpbiBpbnRlcnNlY3Rpb24uIFdoZW4gbm90IG51bGwsIGl0IG1lYW5zXG4gICAqIHRoYXQgdGhlIHBvbHlmaWxsIGlzIGNvbmZpZ3VyZWQgdG8gd29yayBpbiBhIGNyb3NzLW9yaWdpbiBtb2RlLlxuICAgKiBAdHlwZSB7ZnVuY3Rpb24oRE9NUmVjdHxDbGllbnRSZWN0LCBET01SZWN0fENsaWVudFJlY3QpfVxuICAgKi9cbiAgdmFyIGNyb3NzT3JpZ2luVXBkYXRlciA9IG51bGxcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgY3Jvc3Mtb3JpZ2luIGludGVyc2VjdGlvbi4gT25seSB1c2VkIGluIHRoZSBjcm9zcy1vcmlnaW4gbW9kZS5cbiAgICogQHR5cGUge0RPTVJlY3R8Q2xpZW50UmVjdH1cbiAgICovXG4gIHZhciBjcm9zc09yaWdpblJlY3QgPSBudWxsXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IGNvbnN0cnVjdG9yLlxuICAgKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2ludGVyc2VjdGlvbi1vYnNlcnZlci1lbnRyeVxuICAgKiBAcGFyYW0ge09iamVjdH0gZW50cnkgQSBkaWN0aW9uYXJ5IG9mIGluc3RhbmNlIHByb3BlcnRpZXMuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeShlbnRyeSkge1xuICAgIHRoaXMudGltZSA9IGVudHJ5LnRpbWVcbiAgICB0aGlzLnRhcmdldCA9IGVudHJ5LnRhcmdldFxuICAgIHRoaXMucm9vdEJvdW5kcyA9IGVuc3VyZURPTVJlY3QoZW50cnkucm9vdEJvdW5kcylcbiAgICB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdCA9IGVuc3VyZURPTVJlY3QoZW50cnkuYm91bmRpbmdDbGllbnRSZWN0KVxuICAgIHRoaXMuaW50ZXJzZWN0aW9uUmVjdCA9IGVuc3VyZURPTVJlY3QoXG4gICAgICBlbnRyeS5pbnRlcnNlY3Rpb25SZWN0IHx8IGdldEVtcHR5UmVjdCgpXG4gICAgKVxuICAgIHRoaXMuaXNJbnRlcnNlY3RpbmcgPSAhIWVudHJ5LmludGVyc2VjdGlvblJlY3RcblxuICAgIC8vIENhbGN1bGF0ZXMgdGhlIGludGVyc2VjdGlvbiByYXRpby5cbiAgICB2YXIgdGFyZ2V0UmVjdCA9IHRoaXMuYm91bmRpbmdDbGllbnRSZWN0XG4gICAgdmFyIHRhcmdldEFyZWEgPSB0YXJnZXRSZWN0LndpZHRoICogdGFyZ2V0UmVjdC5oZWlnaHRcbiAgICB2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHRoaXMuaW50ZXJzZWN0aW9uUmVjdFxuICAgIHZhciBpbnRlcnNlY3Rpb25BcmVhID0gaW50ZXJzZWN0aW9uUmVjdC53aWR0aCAqIGludGVyc2VjdGlvblJlY3QuaGVpZ2h0XG5cbiAgICAvLyBTZXRzIGludGVyc2VjdGlvbiByYXRpby5cbiAgICBpZiAodGFyZ2V0QXJlYSkge1xuICAgICAgLy8gUm91bmQgdGhlIGludGVyc2VjdGlvbiByYXRpbyB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBtYXRoIGlzc3VlczpcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvaXNzdWVzLzMyNFxuICAgICAgdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IE51bWJlcihcbiAgICAgICAgKGludGVyc2VjdGlvbkFyZWEgLyB0YXJnZXRBcmVhKS50b0ZpeGVkKDQpXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIGFyZWEgaXMgemVybyBhbmQgaXMgaW50ZXJzZWN0aW5nLCBzZXRzIHRvIDEsIG90aGVyd2lzZSB0byAwXG4gICAgICB0aGlzLmludGVyc2VjdGlvblJhdGlvID0gdGhpcy5pc0ludGVyc2VjdGluZyA/IDEgOiAwXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciBjb25zdHJ1Y3Rvci5cbiAgICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItaW50ZXJmYWNlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIGludGVyc2VjdGlvblxuICAgKiAgICAgY2hhbmdlcyBoYXZlIHF1ZXVlZC4gVGhlIGZ1bmN0aW9uIGlzIG5vdCBpbnZva2VkIGlmIHRoZSBxdWV1ZSBoYXNcbiAgICogICAgIGJlZW4gZW1wdGllZCBieSBjYWxsaW5nIHRoZSBgdGFrZVJlY29yZHNgIG1ldGhvZC5cbiAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfb3B0aW9ucyBPcHRpb25hbCBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMucm9vdCAmJlxuICAgICAgb3B0aW9ucy5yb290Lm5vZGVUeXBlICE9IDEgJiZcbiAgICAgIG9wdGlvbnMucm9vdC5ub2RlVHlwZSAhPSA5XG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jvb3QgbXVzdCBiZSBhIERvY3VtZW50IG9yIEVsZW1lbnQnKVxuICAgIH1cblxuICAgIC8vIEJpbmRzIGFuZCB0aHJvdHRsZXMgYHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9uc2AuXG4gICAgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gdGhyb3R0bGUoXG4gICAgICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuVEhST1RUTEVfVElNRU9VVFxuICAgIClcblxuICAgIC8vIFByaXZhdGUgcHJvcGVydGllcy5cbiAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW11cbiAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzID0gW11cbiAgICB0aGlzLl9yb290TWFyZ2luVmFsdWVzID0gdGhpcy5fcGFyc2VSb290TWFyZ2luKG9wdGlvbnMucm9vdE1hcmdpbilcblxuICAgIC8vIFB1YmxpYyBwcm9wZXJ0aWVzLlxuICAgIHRoaXMudGhyZXNob2xkcyA9IHRoaXMuX2luaXRUaHJlc2hvbGRzKG9wdGlvbnMudGhyZXNob2xkKVxuICAgIHRoaXMucm9vdCA9IG9wdGlvbnMucm9vdCB8fCBudWxsXG4gICAgdGhpcy5yb290TWFyZ2luID0gdGhpcy5fcm9vdE1hcmdpblZhbHVlc1xuICAgICAgLm1hcChmdW5jdGlvbihtYXJnaW4pIHtcbiAgICAgICAgcmV0dXJuIG1hcmdpbi52YWx1ZSArIG1hcmdpbi51bml0XG4gICAgICB9KVxuICAgICAgLmpvaW4oJyAnKVxuXG4gICAgLyoqIEBwcml2YXRlIEBjb25zdCB7IUFycmF5PCFEb2N1bWVudD59ICovXG4gICAgdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cyA9IFtdXG4gICAgLyoqIEBwcml2YXRlIEBjb25zdCB7IUFycmF5PGZ1bmN0aW9uKCk+fSAqL1xuICAgIHRoaXMuX21vbml0b3JpbmdVbnN1YnNjcmliZXMgPSBbXVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGludGVydmFsIHdpdGhpbiB3aGljaCB0aGUgZG9jdW1lbnQgd2lsbCBiZSBjaGVja2VkIGZvclxuICAgKiBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5USFJPVFRMRV9USU1FT1VUID0gMTAwXG5cbiAgLyoqXG4gICAqIFRoZSBmcmVxdWVuY3kgaW4gd2hpY2ggdGhlIHBvbHlmaWxsIHBvbGxzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICogdGhpcyBjYW4gYmUgdXBkYXRlZCBvbiBhIHBlciBpbnN0YW5jZSBiYXNpcyBhbmQgbXVzdCBiZSBzZXQgcHJpb3IgdG9cbiAgICogY2FsbGluZyBgb2JzZXJ2ZWAgb24gdGhlIGZpcnN0IHRhcmdldC5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5QT0xMX0lOVEVSVkFMID0gbnVsbFxuXG4gIC8qKlxuICAgKiBVc2UgYSBtdXRhdGlvbiBvYnNlcnZlciBvbiB0aGUgcm9vdCBlbGVtZW50XG4gICAqIHRvIGRldGVjdCBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5VU0VfTVVUQVRJT05fT0JTRVJWRVIgPSB0cnVlXG5cbiAgLyoqXG4gICAqIFNldHMgdXAgdGhlIHBvbHlmaWxsIGluIHRoZSBjcm9zcy1vcmlnaW4gbW9kZS4gVGhlIHJlc3VsdCBpcyB0aGVcbiAgICogdXBkYXRlciBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgdHdvIGFyZ3VtZW50czogYGJvdW5kaW5nQ2xpZW50UmVjdGAgYW5kXG4gICAqIGBpbnRlcnNlY3Rpb25SZWN0YCAtIGp1c3QgYXMgdGhlc2UgZmllbGRzIHdvdWxkIGJlIGF2YWlsYWJsZSB0byB0aGVcbiAgICogcGFyZW50IHZpYSBgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeWAuIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZFxuICAgKiBlYWNoIHRpbWUgdGhlIGlmcmFtZSByZWNlaXZlcyBpbnRlcnNlY3Rpb24gaW5mb3JtYXRpb24gZnJvbSB0aGUgcGFyZW50XG4gICAqIHdpbmRvdywgZS5nLiB2aWEgbWVzc2FnaW5nLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbihET01SZWN0fENsaWVudFJlY3QsIERPTVJlY3R8Q2xpZW50UmVjdCl9XG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5fc2V0dXBDcm9zc09yaWdpblVwZGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWNyb3NzT3JpZ2luVXBkYXRlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge0RPTVJlY3R8Q2xpZW50UmVjdH0gYm91bmRpbmdDbGllbnRSZWN0XG4gICAgICAgKiBAcGFyYW0ge0RPTVJlY3R8Q2xpZW50UmVjdH0gaW50ZXJzZWN0aW9uUmVjdFxuICAgICAgICovXG4gICAgICBjcm9zc09yaWdpblVwZGF0ZXIgPSBmdW5jdGlvbihib3VuZGluZ0NsaWVudFJlY3QsIGludGVyc2VjdGlvblJlY3QpIHtcbiAgICAgICAgaWYgKCFib3VuZGluZ0NsaWVudFJlY3QgfHwgIWludGVyc2VjdGlvblJlY3QpIHtcbiAgICAgICAgICBjcm9zc09yaWdpblJlY3QgPSBnZXRFbXB0eVJlY3QoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNyb3NzT3JpZ2luUmVjdCA9IGNvbnZlcnRGcm9tUGFyZW50UmVjdChcbiAgICAgICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCxcbiAgICAgICAgICAgIGludGVyc2VjdGlvblJlY3RcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmVnaXN0cnkuZm9yRWFjaChmdW5jdGlvbihvYnNlcnZlcikge1xuICAgICAgICAgIG9ic2VydmVyLl9jaGVja0ZvckludGVyc2VjdGlvbnMoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3Jvc3NPcmlnaW5VcGRhdGVyXG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBjcm9zcy1vcmlnaW4gbW9kZS5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLl9yZXNldENyb3NzT3JpZ2luVXBkYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGNyb3NzT3JpZ2luVXBkYXRlciA9IG51bGxcbiAgICBjcm9zc09yaWdpblJlY3QgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIG9ic2VydmluZyBhIHRhcmdldCBlbGVtZW50IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBiYXNlZCBvblxuICAgKiB0aGUgdGhyZXNob2xkcyB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB2YXIgaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQgPSB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuc29tZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5lbGVtZW50ID09IHRhcmdldFxuICAgIH0pXG5cbiAgICBpZiAoaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghKHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT0gMSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gRWxlbWVudCcpXG4gICAgfVxuXG4gICAgdGhpcy5fcmVnaXN0ZXJJbnN0YW5jZSgpXG4gICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnB1c2goeyBlbGVtZW50OiB0YXJnZXQsIGVudHJ5OiBudWxsIH0pXG4gICAgdGhpcy5fbW9uaXRvckludGVyc2VjdGlvbnModGFyZ2V0Lm93bmVyRG9jdW1lbnQpXG4gICAgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudCAhPSB0YXJnZXRcbiAgICB9KVxuICAgIHRoaXMuX3VubW9uaXRvckludGVyc2VjdGlvbnModGFyZ2V0Lm93bmVyRG9jdW1lbnQpXG4gICAgaWYgKHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgb2JzZXJ2aW5nIGFsbCB0YXJnZXQgZWxlbWVudHMgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSBbXVxuICAgIHRoaXMuX3VubW9uaXRvckFsbEludGVyc2VjdGlvbnMoKVxuICAgIHRoaXMuX3VucmVnaXN0ZXJJbnN0YW5jZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbnkgcXVldWUgZW50cmllcyB0aGF0IGhhdmUgbm90IHlldCBiZWVuIHJlcG9ydGVkIHRvIHRoZVxuICAgKiBjYWxsYmFjayBhbmQgY2xlYXJzIHRoZSBxdWV1ZS4gVGhpcyBjYW4gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZVxuICAgKiBjYWxsYmFjayB0byBvYnRhaW4gdGhlIGFic29sdXRlIG1vc3QgdXAtdG8tZGF0ZSBpbnRlcnNlY3Rpb24gaW5mb3JtYXRpb24uXG4gICAqIEByZXR1cm4ge0FycmF5fSBUaGUgY3VycmVudGx5IHF1ZXVlZCBlbnRyaWVzLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLnRha2VSZWNvcmRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlY29yZHMgPSB0aGlzLl9xdWV1ZWRFbnRyaWVzLnNsaWNlKClcbiAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzID0gW11cbiAgICByZXR1cm4gcmVjb3Jkc1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgdGhlIHRocmVzaG9sZCB2YWx1ZSBmcm9tIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGFuZFxuICAgKiByZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHVuaXF1ZSB0aHJlc2hvbGQgdmFsdWVzLiBJZiBhIHZhbHVlIGlzIG5vdFxuICAgKiBiZXR3ZWVuIDAgYW5kIDEgYW5kIGVycm9yIGlzIHRocm93bi5cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtBcnJheXxudW1iZXI9fSBvcHRfdGhyZXNob2xkIEFuIG9wdGlvbmFsIHRocmVzaG9sZCB2YWx1ZSBvclxuICAgKiAgICAgYSBsaXN0IG9mIHRocmVzaG9sZCB2YWx1ZXMsIGRlZmF1bHRpbmcgdG8gWzBdLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gQSBzb3J0ZWQgbGlzdCBvZiB1bmlxdWUgYW5kIHZhbGlkIHRocmVzaG9sZCB2YWx1ZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2luaXRUaHJlc2hvbGRzID0gZnVuY3Rpb24ob3B0X3RocmVzaG9sZCkge1xuICAgIHZhciB0aHJlc2hvbGQgPSBvcHRfdGhyZXNob2xkIHx8IFswXVxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aHJlc2hvbGQpKSB0aHJlc2hvbGQgPSBbdGhyZXNob2xkXVxuXG4gICAgcmV0dXJuIHRocmVzaG9sZC5zb3J0KCkuZmlsdGVyKGZ1bmN0aW9uKHQsIGksIGEpIHtcbiAgICAgIGlmICh0eXBlb2YgdCAhPT0gJ251bWJlcicgfHwgaXNOYU4odCkgfHwgdCA8IDAgfHwgdCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICd0aHJlc2hvbGQgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5jbHVzaXZlbHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ICE9PSBhW2kgLSAxXVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyB0aGUgcm9vdE1hcmdpbiB2YWx1ZSBmcm9tIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAqIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBmb3VyIG1hcmdpbiB2YWx1ZXMgYXMgYW4gb2JqZWN0IGNvbnRhaW5pbmdcbiAgICogdGhlIHZhbHVlIGFuZCB1bml0IHByb3BlcnRpZXMuIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBub3QgcHJvcGVybHlcbiAgICogZm9ybWF0dGVkIG9yIHVzZSBhIHVuaXQgb3RoZXIgdGhhbiBweCBvciAlLCBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdF9yb290TWFyZ2luIEFuIG9wdGlvbmFsIHJvb3RNYXJnaW4gdmFsdWUsXG4gICAqICAgICBkZWZhdWx0aW5nIHRvICcwcHgnLlxuICAgKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fSBBbiBhcnJheSBvZiBtYXJnaW4gb2JqZWN0cyB3aXRoIHRoZSBrZXlzXG4gICAqICAgICB2YWx1ZSBhbmQgdW5pdC5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcGFyc2VSb290TWFyZ2luID0gZnVuY3Rpb24ob3B0X3Jvb3RNYXJnaW4pIHtcbiAgICB2YXIgbWFyZ2luU3RyaW5nID0gb3B0X3Jvb3RNYXJnaW4gfHwgJzBweCdcbiAgICB2YXIgbWFyZ2lucyA9IG1hcmdpblN0cmluZy5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihtYXJnaW4pIHtcbiAgICAgIHZhciBwYXJ0cyA9IC9eKC0/XFxkKlxcLj9cXGQrKShweHwlKSQvLmV4ZWMobWFyZ2luKVxuICAgICAgaWYgKCFwYXJ0cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jvb3RNYXJnaW4gbXVzdCBiZSBzcGVjaWZpZWQgaW4gcGl4ZWxzIG9yIHBlcmNlbnQnKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgdmFsdWU6IHBhcnNlRmxvYXQocGFydHNbMV0pLCB1bml0OiBwYXJ0c1syXSB9XG4gICAgfSlcblxuICAgIC8vIEhhbmRsZXMgc2hvcnRoYW5kLlxuICAgIG1hcmdpbnNbMV0gPSBtYXJnaW5zWzFdIHx8IG1hcmdpbnNbMF1cbiAgICBtYXJnaW5zWzJdID0gbWFyZ2luc1syXSB8fCBtYXJnaW5zWzBdXG4gICAgbWFyZ2luc1szXSA9IG1hcmdpbnNbM10gfHwgbWFyZ2luc1sxXVxuXG4gICAgcmV0dXJuIG1hcmdpbnNcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgaWYgdGhlIHBvbGxpbmcgaXMgbm90IGFscmVhZHlcbiAgICogaGFwcGVuaW5nLCBhbmQgaWYgdGhlIHBhZ2UncyB2aXNpYmlsaXR5IHN0YXRlIGlzIHZpc2libGUuXG4gICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2NcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fbW9uaXRvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbihkb2MpIHtcbiAgICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3XG4gICAgaWYgKCF3aW4pIHtcbiAgICAgIC8vIEFscmVhZHkgZGVzdHJveWVkLlxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLl9tb25pdG9yaW5nRG9jdW1lbnRzLmluZGV4T2YoZG9jKSAhPSAtMSkge1xuICAgICAgLy8gQWxyZWFkeSBtb25pdG9yaW5nLlxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBzdGF0ZSBmb3IgbW9uaXRvcmluZy5cbiAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnNcbiAgICB2YXIgbW9uaXRvcmluZ0ludGVydmFsID0gbnVsbFxuICAgIHZhciBkb21PYnNlcnZlciA9IG51bGxcblxuICAgIC8vIElmIGEgcG9sbCBpbnRlcnZhbCBpcyBzZXQsIHVzZSBwb2xsaW5nIGluc3RlYWQgb2YgbGlzdGVuaW5nIHRvXG4gICAgLy8gcmVzaXplIGFuZCBzY3JvbGwgZXZlbnRzIG9yIERPTSBtdXRhdGlvbnMuXG4gICAgaWYgKHRoaXMuUE9MTF9JTlRFUlZBTCkge1xuICAgICAgbW9uaXRvcmluZ0ludGVydmFsID0gd2luLnNldEludGVydmFsKGNhbGxiYWNrLCB0aGlzLlBPTExfSU5URVJWQUwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZEV2ZW50KHdpbiwgJ3Jlc2l6ZScsIGNhbGxiYWNrLCB0cnVlKVxuICAgICAgYWRkRXZlbnQoZG9jLCAnc2Nyb2xsJywgY2FsbGJhY2ssIHRydWUpXG4gICAgICBpZiAodGhpcy5VU0VfTVVUQVRJT05fT0JTRVJWRVIgJiYgJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbikge1xuICAgICAgICBkb21PYnNlcnZlciA9IG5ldyB3aW4uTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaylcbiAgICAgICAgZG9tT2JzZXJ2ZXIub2JzZXJ2ZShkb2MsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9tb25pdG9yaW5nRG9jdW1lbnRzLnB1c2goZG9jKVxuICAgIHRoaXMuX21vbml0b3JpbmdVbnN1YnNjcmliZXMucHVzaChmdW5jdGlvbigpIHtcbiAgICAgIC8vIEdldCB0aGUgd2luZG93IG9iamVjdCBhZ2Fpbi4gV2hlbiBhIGZyaWVuZGx5IGlmcmFtZSBpcyBkZXN0cm95ZWQsIGl0XG4gICAgICAvLyB3aWxsIGJlIG51bGwuXG4gICAgICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3XG5cbiAgICAgIGlmICh3aW4pIHtcbiAgICAgICAgaWYgKG1vbml0b3JpbmdJbnRlcnZhbCkge1xuICAgICAgICAgIHdpbi5jbGVhckludGVydmFsKG1vbml0b3JpbmdJbnRlcnZhbClcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVFdmVudCh3aW4sICdyZXNpemUnLCBjYWxsYmFjaywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgcmVtb3ZlRXZlbnQoZG9jLCAnc2Nyb2xsJywgY2FsbGJhY2ssIHRydWUpXG4gICAgICBpZiAoZG9tT2JzZXJ2ZXIpIHtcbiAgICAgICAgZG9tT2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIEFsc28gbW9uaXRvciB0aGUgcGFyZW50LlxuICAgIHZhciByb290RG9jID1cbiAgICAgICh0aGlzLnJvb3QgJiYgKHRoaXMucm9vdC5vd25lckRvY3VtZW50IHx8IHRoaXMucm9vdCkpIHx8IGRvY3VtZW50XG4gICAgaWYgKGRvYyAhPSByb290RG9jKSB7XG4gICAgICB2YXIgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZG9jKVxuICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgIHRoaXMuX21vbml0b3JJbnRlcnNlY3Rpb25zKGZyYW1lLm93bmVyRG9jdW1lbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VubW9uaXRvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbihkb2MpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9tb25pdG9yaW5nRG9jdW1lbnRzLmluZGV4T2YoZG9jKVxuICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIHJvb3REb2MgPVxuICAgICAgKHRoaXMucm9vdCAmJiAodGhpcy5yb290Lm93bmVyRG9jdW1lbnQgfHwgdGhpcy5yb290KSkgfHwgZG9jdW1lbnRcblxuICAgIC8vIENoZWNrIGlmIGFueSBkZXBlbmRlbnQgdGFyZ2V0cyBhcmUgc3RpbGwgcmVtYWluaW5nLlxuICAgIHZhciBoYXNEZXBlbmRlbnRUYXJnZXRzID0gdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnNvbWUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGl0ZW1Eb2MgPSBpdGVtLmVsZW1lbnQub3duZXJEb2N1bWVudFxuICAgICAgLy8gVGFyZ2V0IGlzIGluIHRoaXMgY29udGV4dC5cbiAgICAgIGlmIChpdGVtRG9jID09IGRvYykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgLy8gVGFyZ2V0IGlzIG5lc3RlZCBpbiB0aGlzIGNvbnRleHQuXG4gICAgICB3aGlsZSAoaXRlbURvYyAmJiBpdGVtRG9jICE9IHJvb3REb2MpIHtcbiAgICAgICAgdmFyIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGl0ZW1Eb2MpXG4gICAgICAgIGl0ZW1Eb2MgPSBmcmFtZSAmJiBmcmFtZS5vd25lckRvY3VtZW50XG4gICAgICAgIGlmIChpdGVtRG9jID09IGRvYykge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gICAgaWYgKGhhc0RlcGVuZGVudFRhcmdldHMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFVuc3Vic2NyaWJlLlxuICAgIHZhciB1bnN1YnNjcmliZSA9IHRoaXMuX21vbml0b3JpbmdVbnN1YnNjcmliZXNbaW5kZXhdXG4gICAgdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgdW5zdWJzY3JpYmUoKVxuXG4gICAgLy8gQWxzbyB1bm1vbml0b3IgdGhlIHBhcmVudC5cbiAgICBpZiAoZG9jICE9IHJvb3REb2MpIHtcbiAgICAgIHZhciBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChkb2MpXG4gICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgdGhpcy5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyhmcmFtZS5vd25lckRvY3VtZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bm1vbml0b3JBbGxJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHVuc3Vic2NyaWJlcyA9IHRoaXMuX21vbml0b3JpbmdVbnN1YnNjcmliZXMuc2xpY2UoMClcbiAgICB0aGlzLl9tb25pdG9yaW5nRG9jdW1lbnRzLmxlbmd0aCA9IDBcbiAgICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLmxlbmd0aCA9IDBcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVuc3Vic2NyaWJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdW5zdWJzY3JpYmVzW2ldKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2NhbnMgZWFjaCBvYnNlcnZhdGlvbiB0YXJnZXQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGFuZCBhZGRzIHRoZW1cbiAgICogdG8gdGhlIGludGVybmFsIGVudHJpZXMgcXVldWUuIElmIG5ldyBlbnRyaWVzIGFyZSBmb3VuZCwgaXRcbiAgICogc2NoZWR1bGVzIHRoZSBjYWxsYmFjayB0byBiZSBpbnZva2VkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucm9vdCAmJiBjcm9zc09yaWdpblVwZGF0ZXIgJiYgIWNyb3NzT3JpZ2luUmVjdCkge1xuICAgICAgLy8gQ3Jvc3Mgb3JpZ2luIG1vbml0b3JpbmcsIGJ1dCBubyBpbml0aWFsIGRhdGEgYXZhaWxhYmxlIHlldC5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciByb290SXNJbkRvbSA9IHRoaXMuX3Jvb3RJc0luRG9tKClcbiAgICB2YXIgcm9vdFJlY3QgPSByb290SXNJbkRvbSA/IHRoaXMuX2dldFJvb3RSZWN0KCkgOiBnZXRFbXB0eVJlY3QoKVxuXG4gICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIHRhcmdldCA9IGl0ZW0uZWxlbWVudFxuICAgICAgdmFyIHRhcmdldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGFyZ2V0KVxuICAgICAgdmFyIHJvb3RDb250YWluc1RhcmdldCA9IHRoaXMuX3Jvb3RDb250YWluc1RhcmdldCh0YXJnZXQpXG4gICAgICB2YXIgb2xkRW50cnkgPSBpdGVtLmVudHJ5XG4gICAgICB2YXIgaW50ZXJzZWN0aW9uUmVjdCA9XG4gICAgICAgIHJvb3RJc0luRG9tICYmXG4gICAgICAgIHJvb3RDb250YWluc1RhcmdldCAmJlxuICAgICAgICB0aGlzLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbih0YXJnZXQsIHRhcmdldFJlY3QsIHJvb3RSZWN0KVxuXG4gICAgICB2YXIgcm9vdEJvdW5kcyA9IG51bGxcbiAgICAgIGlmICghdGhpcy5fcm9vdENvbnRhaW5zVGFyZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgcm9vdEJvdW5kcyA9IGdldEVtcHR5UmVjdCgpXG4gICAgICB9IGVsc2UgaWYgKCFjcm9zc09yaWdpblVwZGF0ZXIgfHwgdGhpcy5yb290KSB7XG4gICAgICAgIHJvb3RCb3VuZHMgPSByb290UmVjdFxuICAgICAgfVxuXG4gICAgICB2YXIgbmV3RW50cnkgPSAoaXRlbS5lbnRyeSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KHtcbiAgICAgICAgdGltZTogbm93KCksXG4gICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3Q6IHRhcmdldFJlY3QsXG4gICAgICAgIHJvb3RCb3VuZHM6IHJvb3RCb3VuZHMsXG4gICAgICAgIGludGVyc2VjdGlvblJlY3Q6IGludGVyc2VjdGlvblJlY3RcbiAgICAgIH0pKVxuXG4gICAgICBpZiAoIW9sZEVudHJ5KSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSlcbiAgICAgIH0gZWxzZSBpZiAocm9vdElzSW5Eb20gJiYgcm9vdENvbnRhaW5zVGFyZ2V0KSB7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgZW50cnkgaW50ZXJzZWN0aW9uIHJhdGlvIGhhcyBjcm9zc2VkIGFueSBvZiB0aGVcbiAgICAgICAgLy8gdGhyZXNob2xkcywgYWRkIGEgbmV3IGVudHJ5LlxuICAgICAgICBpZiAodGhpcy5faGFzQ3Jvc3NlZFRocmVzaG9sZChvbGRFbnRyeSwgbmV3RW50cnkpKSB7XG4gICAgICAgICAgdGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgcm9vdCBpcyBub3QgaW4gdGhlIERPTSBvciB0YXJnZXQgaXMgbm90IGNvbnRhaW5lZCB3aXRoaW5cbiAgICAgICAgLy8gcm9vdCBidXQgdGhlIHByZXZpb3VzIGVudHJ5IGZvciB0aGlzIHRhcmdldCBoYWQgYW4gaW50ZXJzZWN0aW9uLFxuICAgICAgICAvLyBhZGQgYSBuZXcgcmVjb3JkIGluZGljYXRpbmcgcmVtb3ZhbC5cbiAgICAgICAgaWYgKG9sZEVudHJ5ICYmIG9sZEVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdGhpcylcblxuICAgIGlmICh0aGlzLl9xdWV1ZWRFbnRyaWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fY2FsbGJhY2sodGhpcy50YWtlUmVjb3JkcygpLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIGEgdGFyZ2V0IGFuZCByb290IHJlY3QgY29tcHV0ZXMgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIHRoZW5cbiAgICogZm9sbG93aW5nIHRoZSBhbGdvcml0aG0gaW4gdGhlIHNwZWMuXG4gICAqIFRPRE8ocGhpbGlwd2FsdG9uKTogYXQgdGhpcyB0aW1lIGNsaXAtcGF0aCBpcyBub3QgY29uc2lkZXJlZC5cbiAgICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNjYWxjdWxhdGUtaW50ZXJzZWN0aW9uLXJlY3QtYWxnb1xuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgdGFyZ2V0IERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRSZWN0IFRoZSBib3VuZGluZyByZWN0IG9mIHRoZSB0YXJnZXQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByb290UmVjdCBUaGUgYm91bmRpbmcgcmVjdCBvZiB0aGUgcm9vdCBhZnRlciBiZWluZ1xuICAgKiAgICAgZXhwYW5kZWQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gICAqIEByZXR1cm4gez9PYmplY3R9IFRoZSBmaW5hbCBpbnRlcnNlY3Rpb24gcmVjdCBvYmplY3Qgb3IgdW5kZWZpbmVkIGlmIG5vXG4gICAqICAgICBpbnRlcnNlY3Rpb24gaXMgZm91bmQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oXG4gICAgdGFyZ2V0LFxuICAgIHRhcmdldFJlY3QsXG4gICAgcm9vdFJlY3RcbiAgKSB7XG4gICAgLy8gSWYgdGhlIGVsZW1lbnQgaXNuJ3QgZGlzcGxheWVkLCBhbiBpbnRlcnNlY3Rpb24gY2FuJ3QgaGFwcGVuLlxuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm5cblxuICAgIHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gdGFyZ2V0UmVjdFxuICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKHRhcmdldClcbiAgICB2YXIgYXRSb290ID0gZmFsc2VcblxuICAgIHdoaWxlICghYXRSb290ICYmIHBhcmVudCkge1xuICAgICAgdmFyIHBhcmVudFJlY3QgPSBudWxsXG4gICAgICB2YXIgcGFyZW50Q29tcHV0ZWRTdHlsZSA9XG4gICAgICAgIHBhcmVudC5ub2RlVHlwZSA9PSAxID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KSA6IHt9XG5cbiAgICAgIC8vIElmIHRoZSBwYXJlbnQgaXNuJ3QgZGlzcGxheWVkLCBhbiBpbnRlcnNlY3Rpb24gY2FuJ3QgaGFwcGVuLlxuICAgICAgaWYgKHBhcmVudENvbXB1dGVkU3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHJldHVybiBudWxsXG5cbiAgICAgIGlmIChwYXJlbnQgPT0gdGhpcy5yb290IHx8IHBhcmVudC5ub2RlVHlwZSA9PSAvKiBET0NVTUVOVCAqLyA5KSB7XG4gICAgICAgIGF0Um9vdCA9IHRydWVcbiAgICAgICAgaWYgKHBhcmVudCA9PSB0aGlzLnJvb3QgfHwgcGFyZW50ID09IGRvY3VtZW50KSB7XG4gICAgICAgICAgaWYgKGNyb3NzT3JpZ2luVXBkYXRlciAmJiAhdGhpcy5yb290KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICFjcm9zc09yaWdpblJlY3QgfHxcbiAgICAgICAgICAgICAgKGNyb3NzT3JpZ2luUmVjdC53aWR0aCA9PSAwICYmIGNyb3NzT3JpZ2luUmVjdC5oZWlnaHQgPT0gMClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBBIDAtc2l6ZSBjcm9zcy1vcmlnaW4gaW50ZXJzZWN0aW9uIG1lYW5zIG5vLWludGVyc2VjdGlvbi5cbiAgICAgICAgICAgICAgcGFyZW50ID0gbnVsbFxuICAgICAgICAgICAgICBwYXJlbnRSZWN0ID0gbnVsbFxuICAgICAgICAgICAgICBpbnRlcnNlY3Rpb25SZWN0ID0gbnVsbFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50UmVjdCA9IGNyb3NzT3JpZ2luUmVjdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRSZWN0ID0gcm9vdFJlY3RcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUncyBhIGZyYW1lIHRoYXQgY2FuIGJlIG5hdmlnYXRlZCB0by5cbiAgICAgICAgICB2YXIgZnJhbWUgPSBnZXRQYXJlbnROb2RlKHBhcmVudClcbiAgICAgICAgICB2YXIgZnJhbWVSZWN0ID0gZnJhbWUgJiYgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGZyYW1lKVxuICAgICAgICAgIHZhciBmcmFtZUludGVyc2VjdCA9XG4gICAgICAgICAgICBmcmFtZSAmJlxuICAgICAgICAgICAgdGhpcy5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24oZnJhbWUsIGZyYW1lUmVjdCwgcm9vdFJlY3QpXG4gICAgICAgICAgaWYgKGZyYW1lUmVjdCAmJiBmcmFtZUludGVyc2VjdCkge1xuICAgICAgICAgICAgcGFyZW50ID0gZnJhbWVcbiAgICAgICAgICAgIHBhcmVudFJlY3QgPSBjb252ZXJ0RnJvbVBhcmVudFJlY3QoZnJhbWVSZWN0LCBmcmFtZUludGVyc2VjdClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50ID0gbnVsbFxuICAgICAgICAgICAgaW50ZXJzZWN0aW9uUmVjdCA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIG5vbi12aXNpYmxlIG92ZXJmbG93LCBhbmQgaXQncyBub3QgdGhlIDxib2R5PlxuICAgICAgICAvLyBvciA8aHRtbD4gZWxlbWVudCwgdXBkYXRlIHRoZSBpbnRlcnNlY3Rpb24gcmVjdC5cbiAgICAgICAgLy8gTm90ZTogPGJvZHk+IGFuZCA8aHRtbD4gY2Fubm90IGJlIGNsaXBwZWQgdG8gYSByZWN0IHRoYXQncyBub3QgYWxzb1xuICAgICAgICAvLyB0aGUgZG9jdW1lbnQgcmVjdCwgc28gbm8gbmVlZCB0byBjb21wdXRlIGEgbmV3IGludGVyc2VjdGlvbi5cbiAgICAgICAgdmFyIGRvYyA9IHBhcmVudC5vd25lckRvY3VtZW50XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwYXJlbnQgIT0gZG9jLmJvZHkgJiZcbiAgICAgICAgICBwYXJlbnQgIT0gZG9jLmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAgIHBhcmVudENvbXB1dGVkU3R5bGUub3ZlcmZsb3cgIT0gJ3Zpc2libGUnXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGVpdGhlciBvZiB0aGUgYWJvdmUgY29uZGl0aW9uYWxzIHNldCBhIG5ldyBwYXJlbnRSZWN0LFxuICAgICAgLy8gY2FsY3VsYXRlIG5ldyBpbnRlcnNlY3Rpb24gZGF0YS5cbiAgICAgIGlmIChwYXJlbnRSZWN0KSB7XG4gICAgICAgIGludGVyc2VjdGlvblJlY3QgPSBjb21wdXRlUmVjdEludGVyc2VjdGlvbihwYXJlbnRSZWN0LCBpbnRlcnNlY3Rpb25SZWN0KVxuICAgICAgfVxuICAgICAgaWYgKCFpbnRlcnNlY3Rpb25SZWN0KSBicmVha1xuICAgICAgcGFyZW50ID0gcGFyZW50ICYmIGdldFBhcmVudE5vZGUocGFyZW50KVxuICAgIH1cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9uUmVjdFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvb3QgcmVjdCBhZnRlciBiZWluZyBleHBhbmRlZCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAgICogQHJldHVybiB7Q2xpZW50UmVjdH0gVGhlIGV4cGFuZGVkIHJvb3QgcmVjdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fZ2V0Um9vdFJlY3QgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcm9vdFJlY3RcbiAgICBpZiAodGhpcy5yb290ICYmICFpc0RvYyh0aGlzLnJvb3QpKSB7XG4gICAgICByb290UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0aGlzLnJvb3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZSA8aHRtbD4vPGJvZHk+IGluc3RlYWQgb2Ygd2luZG93IHNpbmNlIHNjcm9sbCBiYXJzIGFmZmVjdCBzaXplLlxuICAgICAgdmFyIGRvYyA9IGlzRG9jKHRoaXMucm9vdCkgPyB0aGlzLnJvb3QgOiBkb2N1bWVudFxuICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50XG4gICAgICB2YXIgYm9keSA9IGRvYy5ib2R5XG4gICAgICByb290UmVjdCA9IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICByaWdodDogaHRtbC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoLFxuICAgICAgICB3aWR0aDogaHRtbC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoLFxuICAgICAgICBib3R0b206IGh0bWwuY2xpZW50SGVpZ2h0IHx8IGJvZHkuY2xpZW50SGVpZ2h0LFxuICAgICAgICBoZWlnaHQ6IGh0bWwuY2xpZW50SGVpZ2h0IHx8IGJvZHkuY2xpZW50SGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHBhbmRSZWN0QnlSb290TWFyZ2luKHJvb3RSZWN0KVxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYSByZWN0IGFuZCBleHBhbmRzIGl0IGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICAgKiBAcGFyYW0ge0RPTVJlY3R8Q2xpZW50UmVjdH0gcmVjdCBUaGUgcmVjdCBvYmplY3QgdG8gZXhwYW5kLlxuICAgKiBAcmV0dXJuIHtDbGllbnRSZWN0fSBUaGUgZXhwYW5kZWQgcmVjdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fZXhwYW5kUmVjdEJ5Um9vdE1hcmdpbiA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgICB2YXIgbWFyZ2lucyA9IHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMubWFwKGZ1bmN0aW9uKG1hcmdpbiwgaSkge1xuICAgICAgcmV0dXJuIG1hcmdpbi51bml0ID09ICdweCdcbiAgICAgICAgPyBtYXJnaW4udmFsdWVcbiAgICAgICAgOiAobWFyZ2luLnZhbHVlICogKGkgJSAyID8gcmVjdC53aWR0aCA6IHJlY3QuaGVpZ2h0KSkgLyAxMDBcbiAgICB9KVxuICAgIHZhciBuZXdSZWN0ID0ge1xuICAgICAgdG9wOiByZWN0LnRvcCAtIG1hcmdpbnNbMF0sXG4gICAgICByaWdodDogcmVjdC5yaWdodCArIG1hcmdpbnNbMV0sXG4gICAgICBib3R0b206IHJlY3QuYm90dG9tICsgbWFyZ2luc1syXSxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCAtIG1hcmdpbnNbM11cbiAgICB9XG4gICAgbmV3UmVjdC53aWR0aCA9IG5ld1JlY3QucmlnaHQgLSBuZXdSZWN0LmxlZnRcbiAgICBuZXdSZWN0LmhlaWdodCA9IG5ld1JlY3QuYm90dG9tIC0gbmV3UmVjdC50b3BcblxuICAgIHJldHVybiBuZXdSZWN0XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhbiBvbGQgYW5kIG5ldyBlbnRyeSBhbmQgcmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGVcbiAgICogdGhyZXNob2xkIHZhbHVlcyBoYXMgYmVlbiBjcm9zc2VkLlxuICAgKiBAcGFyYW0gez9JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5fSBvbGRFbnRyeSBUaGUgcHJldmlvdXMgZW50cnkgZm9yIGFcbiAgICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudCBvciBudWxsIGlmIG5vIHByZXZpb3VzIGVudHJ5IGV4aXN0cy5cbiAgICogQHBhcmFtIHtJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5fSBuZXdFbnRyeSBUaGUgY3VycmVudCBlbnRyeSBmb3IgYVxuICAgKiAgICBwYXJ0aWN1bGFyIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgYSBhbnkgdGhyZXNob2xkIGhhcyBiZWVuIGNyb3NzZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2hhc0Nyb3NzZWRUaHJlc2hvbGQgPSBmdW5jdGlvbihcbiAgICBvbGRFbnRyeSxcbiAgICBuZXdFbnRyeVxuICApIHtcbiAgICAvLyBUbyBtYWtlIGNvbXBhcmluZyBlYXNpZXIsIGFuIGVudHJ5IHRoYXQgaGFzIGEgcmF0aW8gb2YgMFxuICAgIC8vIGJ1dCBkb2VzIG5vdCBhY3R1YWxseSBpbnRlcnNlY3QgaXMgZ2l2ZW4gYSB2YWx1ZSBvZiAtMVxuICAgIHZhciBvbGRSYXRpbyA9XG4gICAgICBvbGRFbnRyeSAmJiBvbGRFbnRyeS5pc0ludGVyc2VjdGluZyA/IG9sZEVudHJ5LmludGVyc2VjdGlvblJhdGlvIHx8IDAgOiAtMVxuICAgIHZhciBuZXdSYXRpbyA9IG5ld0VudHJ5LmlzSW50ZXJzZWN0aW5nXG4gICAgICA/IG5ld0VudHJ5LmludGVyc2VjdGlvblJhdGlvIHx8IDBcbiAgICAgIDogLTFcblxuICAgIC8vIElnbm9yZSB1bmNoYW5nZWQgcmF0aW9zXG4gICAgaWYgKG9sZFJhdGlvID09PSBuZXdSYXRpbykgcmV0dXJuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGhyZXNob2xkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkc1tpXVxuXG4gICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiBhbiBlbnRyeSBtYXRjaGVzIGEgdGhyZXNob2xkIG9yIGlmIHRoZSBuZXcgcmF0aW9cbiAgICAgIC8vIGFuZCB0aGUgb2xkIHJhdGlvIGFyZSBvbiB0aGUgb3Bwb3NpdGUgc2lkZXMgb2YgYSB0aHJlc2hvbGQuXG4gICAgICBpZiAoXG4gICAgICAgIHRocmVzaG9sZCA9PSBvbGRSYXRpbyB8fFxuICAgICAgICB0aHJlc2hvbGQgPT0gbmV3UmF0aW8gfHxcbiAgICAgICAgdGhyZXNob2xkIDwgb2xkUmF0aW8gIT09IHRocmVzaG9sZCA8IG5ld1JhdGlvXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcm9vdCBlbGVtZW50IGlzIGFuIGVsZW1lbnQgYW5kIGlzIGluIHRoZSBET00uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yb290SXNJbkRvbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhdGhpcy5yb290IHx8IGNvbnRhaW5zRGVlcChkb2N1bWVudCwgdGhpcy5yb290KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2Ygcm9vdC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBlbGVtZW50IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RDb250YWluc1RhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHZhciByb290RG9jID1cbiAgICAgICh0aGlzLnJvb3QgJiYgKHRoaXMucm9vdC5vd25lckRvY3VtZW50IHx8IHRoaXMucm9vdCkpIHx8IGRvY3VtZW50XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbnRhaW5zRGVlcChyb290RG9jLCB0YXJnZXQpICYmXG4gICAgICAoIXRoaXMucm9vdCB8fCByb290RG9jID09IHRhcmdldC5vd25lckRvY3VtZW50KVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBpbnN0YW5jZSB0byB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5IGlmIGl0IGlzbid0XG4gICAqIGFscmVhZHkgcHJlc2VudC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcmVnaXN0ZXJJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyZWdpc3RyeS5pbmRleE9mKHRoaXMpIDwgMCkge1xuICAgICAgcmVnaXN0cnkucHVzaCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBpbnN0YW5jZSBmcm9tIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VucmVnaXN0ZXJJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmRleCA9IHJlZ2lzdHJ5LmluZGV4T2YodGhpcylcbiAgICBpZiAoaW5kZXggIT0gLTEpIHJlZ2lzdHJ5LnNwbGljZShpbmRleCwgMSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHBlcmZvcm1hbmNlLm5vdygpIG1ldGhvZCBvciBudWxsIGluIGJyb3dzZXJzXG4gICAqIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgQVBJLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBlbGFwc2VkIHRpbWUgc2luY2UgdGhlIHBhZ2Ugd2FzIHJlcXVlc3RlZC5cbiAgICovXG4gIGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlLm5vdyAmJiBwZXJmb3JtYW5jZS5ub3coKVxuICB9XG5cbiAgLyoqXG4gICAqIFRocm90dGxlcyBhIGZ1bmN0aW9uIGFuZCBkZWxheXMgaXRzIGV4ZWN1dGlvbiwgc28gaXQncyBvbmx5IGNhbGxlZCBhdCBtb3N0XG4gICAqIG9uY2Ugd2l0aGluIGEgZ2l2ZW4gdGltZSBwZXJpb2QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXQgVGhlIGFtb3VudCBvZiB0aW1lIHRoYXQgbXVzdCBwYXNzIGJlZm9yZSB0aGVcbiAgICogICAgIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgYWdhaW4uXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHRpbWVvdXQpIHtcbiAgICB2YXIgdGltZXIgPSBudWxsXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aW1lcikge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZm4oKVxuICAgICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgICB9LCB0aW1lb3V0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGhhbmRsZXIgdG8gYSBET00gbm9kZSBlbnN1cmluZyBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkuXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gYWRkIHRoZSBldmVudCBoYW5kbGVyIHRvLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBldmVudCBoYW5kbGVyIHRvIGFkZC5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRfdXNlQ2FwdHVyZSBPcHRpb25hbGx5IGFkZHMgdGhlIGV2ZW4gdG8gdGhlIGNhcHR1cmVcbiAgICogICAgIHBoYXNlLiBOb3RlOiB0aGlzIG9ubHkgd29ya3MgaW4gbW9kZXJuIGJyb3dzZXJzLlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZS5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSB8fCBmYWxzZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlLmF0dGFjaEV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBwcmV2aW91c2x5IGFkZGVkIGV2ZW50IGhhbmRsZXIgZnJvbSBhIERPTSBub2RlLlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIERPTSBub2RlIHRvIHJlbW92ZSB0aGUgZXZlbnQgaGFuZGxlciBmcm9tLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBldmVudCBoYW5kbGVyIHRvIHJlbW92ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRfdXNlQ2FwdHVyZSBJZiB0aGUgZXZlbnQgaGFuZGxlciB3YXMgYWRkZWQgd2l0aCB0aGlzXG4gICAqICAgICBmbGFnIHNldCB0byB0cnVlLCBpdCBzaG91bGQgYmUgc2V0IHRvIHRydWUgaGVyZSBpbiBvcmRlciB0byByZW1vdmUgaXQuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVFdmVudChub2RlLCBldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUuZGV0YXRjaEV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlLmRldGF0Y2hFdmVudCgnb24nICsgZXZlbnQsIGZuKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0d28gcmVjdCBvYmplY3RzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdDEgVGhlIGZpcnN0IHJlY3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWN0MiBUaGUgc2Vjb25kIHJlY3QuXG4gICAqIEByZXR1cm4gez9PYmplY3R8P0NsaWVudFJlY3R9IFRoZSBpbnRlcnNlY3Rpb24gcmVjdCBvciB1bmRlZmluZWQgaWYgbm9cbiAgICogICAgIGludGVyc2VjdGlvbiBpcyBmb3VuZC5cbiAgICovXG4gIGZ1bmN0aW9uIGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHJlY3QxLCByZWN0Mikge1xuICAgIHZhciB0b3AgPSBNYXRoLm1heChyZWN0MS50b3AsIHJlY3QyLnRvcClcbiAgICB2YXIgYm90dG9tID0gTWF0aC5taW4ocmVjdDEuYm90dG9tLCByZWN0Mi5ib3R0b20pXG4gICAgdmFyIGxlZnQgPSBNYXRoLm1heChyZWN0MS5sZWZ0LCByZWN0Mi5sZWZ0KVxuICAgIHZhciByaWdodCA9IE1hdGgubWluKHJlY3QxLnJpZ2h0LCByZWN0Mi5yaWdodClcbiAgICB2YXIgd2lkdGggPSByaWdodCAtIGxlZnRcbiAgICB2YXIgaGVpZ2h0ID0gYm90dG9tIC0gdG9wXG5cbiAgICByZXR1cm4gKFxuICAgICAgKHdpZHRoID49IDAgJiZcbiAgICAgICAgaGVpZ2h0ID49IDAgJiYge1xuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9KSB8fFxuICAgICAgbnVsbFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGltcyB0aGUgbmF0aXZlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIElFLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFRoZSBlbGVtZW50IHdob3NlIGJvdW5kaW5nIHJlY3QgdG8gZ2V0LlxuICAgKiBAcmV0dXJuIHtET01SZWN0fENsaWVudFJlY3R9IFRoZSAocG9zc2libHkgc2hpbW1lZCkgcmVjdCBvZiB0aGUgZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbCkge1xuICAgIHZhciByZWN0XG5cbiAgICB0cnkge1xuICAgICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZ25vcmUgV2luZG93cyA3IElFMTEgXCJVbnNwZWNpZmllZCBlcnJvclwiXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL3B1bGwvMjA1XG4gICAgfVxuXG4gICAgaWYgKCFyZWN0KSByZXR1cm4gZ2V0RW1wdHlSZWN0KClcblxuICAgIC8vIE9sZGVyIElFXG4gICAgaWYgKCEocmVjdC53aWR0aCAmJiByZWN0LmhlaWdodCkpIHtcbiAgICAgIHJlY3QgPSB7XG4gICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgICAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVtcHR5IHJlY3Qgb2JqZWN0LiBBbiBlbXB0eSByZWN0IGlzIHJldHVybmVkIHdoZW4gYW4gZWxlbWVudFxuICAgKiBpcyBub3QgaW4gdGhlIERPTS5cbiAgICogQHJldHVybiB7Q2xpZW50UmVjdH0gVGhlIGVtcHR5IHJlY3QuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRFbXB0eVJlY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZSB0aGF0IHRoZSByZXN1bHQgaGFzIGFsbCBvZiB0aGUgbmVjZXNzYXJ5IGZpZWxkcyBvZiB0aGUgRE9NUmVjdC5cbiAgICogU3BlY2lmaWNhbGx5IHRoaXMgZW5zdXJlcyB0aGF0IGB4YCBhbmQgYHlgIGZpZWxkcyBhcmUgc2V0LlxuICAgKlxuICAgKiBAcGFyYW0gez9ET01SZWN0fD9DbGllbnRSZWN0fSByZWN0XG4gICAqIEByZXR1cm4gez9ET01SZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gZW5zdXJlRE9NUmVjdChyZWN0KSB7XG4gICAgLy8gQSBgRE9NUmVjdGAgb2JqZWN0IGhhcyBgeGAgYW5kIGB5YCBmaWVsZHMuXG4gICAgaWYgKCFyZWN0IHx8ICd4JyBpbiByZWN0KSB7XG4gICAgICByZXR1cm4gcmVjdFxuICAgIH1cbiAgICAvLyBBIElFJ3MgYENsaWVudFJlY3RgIHR5cGUgZG9lcyBub3QgaGF2ZSBgeGAgYW5kIGB5YC4gVGhlIHNhbWUgaXMgdGhlIGNhc2VcbiAgICAvLyBmb3IgaW50ZXJuYWxseSBjYWxjdWxhdGVkIFJlY3Qgb2JqZWN0cy4gRm9yIHRoZSBwdXJwb3NlcyBvZlxuICAgIC8vIGBJbnRlcnNlY3Rpb25PYnNlcnZlcmAsIGl0J3Mgc3VmZmljaWVudCB0byBzaW1wbHkgbWlycm9yIGBsZWZ0YCBhbmQgYHRvcGBcbiAgICAvLyBmb3IgdGhlc2UgZmllbGRzLlxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgeTogcmVjdC50b3AsXG4gICAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgeDogcmVjdC5sZWZ0LFxuICAgICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52ZXJ0cyB0aGUgaW50ZXJzZWN0aW9uIGFuZCBib3VuZGluZyByZWN0IGZyb20gdGhlIHBhcmVudCAoZnJhbWUpIEJDUiB0b1xuICAgKiB0aGUgbG9jYWwgQkNSIHNwYWNlLlxuICAgKiBAcGFyYW0ge0RPTVJlY3R8Q2xpZW50UmVjdH0gcGFyZW50Qm91bmRpbmdSZWN0IFRoZSBwYXJlbnQncyBib3VuZCBjbGllbnQgcmVjdC5cbiAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IHBhcmVudEludGVyc2VjdGlvblJlY3QgVGhlIHBhcmVudCdzIG93biBpbnRlcnNlY3Rpb24gcmVjdC5cbiAgICogQHJldHVybiB7Q2xpZW50UmVjdH0gVGhlIGxvY2FsIHJvb3QgYm91bmRpbmcgcmVjdCBmb3IgdGhlIHBhcmVudCdzIGNoaWxkcmVuLlxuICAgKi9cbiAgZnVuY3Rpb24gY29udmVydEZyb21QYXJlbnRSZWN0KHBhcmVudEJvdW5kaW5nUmVjdCwgcGFyZW50SW50ZXJzZWN0aW9uUmVjdCkge1xuICAgIHZhciB0b3AgPSBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LnRvcCAtIHBhcmVudEJvdW5kaW5nUmVjdC50b3BcbiAgICB2YXIgbGVmdCA9IHBhcmVudEludGVyc2VjdGlvblJlY3QubGVmdCAtIHBhcmVudEJvdW5kaW5nUmVjdC5sZWZ0XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdG9wLFxuICAgICAgbGVmdDogbGVmdCxcbiAgICAgIGhlaWdodDogcGFyZW50SW50ZXJzZWN0aW9uUmVjdC5oZWlnaHQsXG4gICAgICB3aWR0aDogcGFyZW50SW50ZXJzZWN0aW9uUmVjdC53aWR0aCxcbiAgICAgIGJvdHRvbTogdG9wICsgcGFyZW50SW50ZXJzZWN0aW9uUmVjdC5oZWlnaHQsXG4gICAgICByaWdodDogbGVmdCArIHBhcmVudEludGVyc2VjdGlvblJlY3Qud2lkdGhcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiBhIHBhcmVudCBlbGVtZW50IGNvbnRhaW5zIGEgY2hpbGQgZWxlbWVudCAoaW5jbHVkaW5nIGluc2lkZVxuICAgKiBzaGFkb3cgRE9NKS5cbiAgICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgVGhlIHBhcmVudCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge05vZGV9IGNoaWxkIFRoZSBjaGlsZCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXJlbnQgbm9kZSBjb250YWlucyB0aGUgY2hpbGQgbm9kZS5cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnRhaW5zRGVlcChwYXJlbnQsIGNoaWxkKSB7XG4gICAgdmFyIG5vZGUgPSBjaGlsZFxuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAobm9kZSA9PSBwYXJlbnQpIHJldHVybiB0cnVlXG5cbiAgICAgIG5vZGUgPSBnZXRQYXJlbnROb2RlKG5vZGUpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHBhcmVudCBub2RlIG9mIGFuIGVsZW1lbnQgb3IgaXRzIGhvc3QgZWxlbWVudCBpZiB0aGUgcGFyZW50IG5vZGVcbiAgICogaXMgYSBzaGFkb3cgcm9vdC5cbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHdob3NlIHBhcmVudCB0byBnZXQuXG4gICAqIEByZXR1cm4ge05vZGV8bnVsbH0gVGhlIHBhcmVudCBub2RlIG9yIG51bGwgaWYgbm8gcGFyZW50IGV4aXN0cy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFBhcmVudE5vZGUobm9kZSkge1xuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGVcblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09IC8qIERPQ1VNRU5UICovIDkgJiYgbm9kZSAhPSBkb2N1bWVudCkge1xuICAgICAgLy8gSWYgdGhpcyBub2RlIGlzIGEgZG9jdW1lbnQgbm9kZSwgbG9vayBmb3IgdGhlIGVtYmVkZGluZyBmcmFtZS5cbiAgICAgIHJldHVybiBnZXRGcmFtZUVsZW1lbnQobm9kZSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgcGFyZW50IGhhcyBlbGVtZW50IHRoYXQgaXMgYXNzaWduZWQgdGhyb3VnaCBzaGFkb3cgcm9vdCBzbG90XG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuYXNzaWduZWRTbG90LnBhcmVudE5vZGVcbiAgICB9XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSA9PSAxMSAmJiBwYXJlbnQuaG9zdCkge1xuICAgICAgLy8gSWYgdGhlIHBhcmVudCBpcyBhIHNoYWRvdyByb290LCByZXR1cm4gdGhlIGhvc3QgZWxlbWVudC5cbiAgICAgIHJldHVybiBwYXJlbnQuaG9zdFxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYG5vZGVgIGlzIGEgRG9jdW1lbnQuXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc0RvYyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gOVxuICB9XG5cbiAgLy8gRXhwb3NlcyB0aGUgY29uc3RydWN0b3JzIGdsb2JhbGx5LlxuICB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSA9IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlcbn0pKClcbiJdLCJzb3VyY2VSb290IjoiIn0=