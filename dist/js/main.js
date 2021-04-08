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
      var _this2 = this;

      // keyboard navigation
      this.$.customSelect.addEventListener('keyup', function (event) {
        event.preventDefault();
        if (event.code === 'Enter') _this2.toggleCustomSelect();
      });
      document.addEventListener('scroll', function () {
        _this2.setPosition();
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

      this.$.choose = document.createElement('div');
      this.$.choose.classList.add('dropdown__choose');
      this.$.choose.innerHTML = this.$.dropdown.dataset.label; // Create wrapping container for content.

      var $container = document.createElement('div');
      $container.classList.add('dropdown__container');
      $container.appendChild($content);
      this.$.dropdown.innerHTML = '';
      this.$.dropdown.setAttribute('tabindex', '0');
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

      // keyboard navigation
      this.$.dropdown.addEventListener('keyup', function (event) {
        event.preventDefault();
        if (event.code === 'Enter') _this.$.dropdown.classList.toggle('dropdown--open');
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DdXN0b21GaWxlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVJhbmdlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9SZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vanMvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2pzL3BvbHlmaWxscy9BcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL2pzL3BvbHlmaWxscy9pbnRlcnNlY3Rpb25PYnNlcnZlci5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwicHVzaCIsIml0ZW0iLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkFuaW1hdGlvbiIsImluaXQiLCJhbmltYXRlZFRpdGxlcyIsImRvY3VtZW50IiwiYW5pbWF0ZWRUaXRsZSIsIndyYXBwZXJUaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJ3cmFwcGVyVGl0bGUyIiwic2V0RE9NIiwiZXZlbnRzIiwidGl0bGUiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmFibGVzIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiQ2Fyb3VzZWwiLCIkY2Fyb3VzZWwiLCJjYXJvdXNlbCIsIm5hdmlnYXRpb24iLCJsZWZ0IiwicmlnaHQiLCJpc1RvdWNoRGV2aWNlIiwid2luZG93IiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJ0eXBlIiwiYWN0aXZlSXRlbSIsInBhZ2luYXRpb24iLCJkcmFnIiwiYXV0byIsIm1vYmlsZU51bWJlciIsInRhYmxldE51bWJlciIsImxhcHRvcE51bWJlciIsIm51bWJlckl0ZW1zIiwibGVuZ3RoIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInNjcmVlbk51bWJlciIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiJHBhZ2luYXRpb24iLCJpIiwic2V0QXR0cmlidXRlIiwic2V0SW50ZXJ2YWwiLCJfbW92ZVJpZ2h0IiwicGFyc2VJbnQiLCJfbW92ZUxlZnQiLCJrZXlDb2RlIiwiJGJ1bGxldCIsIl9tb3ZlSXRlbXMiLCJhY3R1YWxQb3NpdGlvbiIsInRvdWNoZXMiLCJjbGllbnRYIiwicHJlc3NJdGVtcyIsInRyYW5zbGF0ZSIsImRyYWdDcmV0YWVkSXRlbSIsIl9kcmFnSXRlbXMiLCJjaGFuZ2VkVG91Y2hlcyIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIiRsYXN0SXRlbSIsImR1cGxpY2F0ZUxhc3RJdGVtIiwiY2xvbmVOb2RlIiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCIkZmlyc3RJdGVtIiwiZHVwbGljYXRlRmlyc3RJdGVtIiwiY29uc29sZSIsImxvZyIsIngiLCJ0IiwiY2xlYXJUaW1lb3V0IiwidHJhbnNpdGlvbiIsIkN1c3RvbUZpbGUiLCIkY3VzdG9tRmlsZSIsImN1c3RvbUZpbGUiLCJsYWJlbCIsImlzQnV0dG9uIiwiYnV0dG9uIiwiaXNCdXR0b25Qb3NpdGlvbiIsImJ1dHRvbnBvcyIsImlzU2l6ZSIsInNpemUiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJjb250YWluZXIiLCJpbnB1dCIsIm5hbWUiLCJkaXNwbGF5IiwiY2xpY2siLCJzaXplQ29udmVydCIsImJ5dGVzIiwic2l6ZXMiLCJNYXRoIiwiZmxvb3IiLCJjb252ZXJ0Iiwicm91bmQiLCJwb3ciLCJmaWxlIiwiZmlsZXMiLCJjbG9zZSIsInN0b3BQcm9wYWdhdGlvbiIsInZhbHVlIiwiJGZpbGVzIiwiZm9yRWFjaCIsImluZGV4IiwiJGZpbGUiLCJuZXdGaWxlcyIsIkRhdGFUcmFuc2ZlciIsIkN1c3RvbVJhbmdlIiwiJGN1c3RvbVJhbmdlIiwiY3VzdG9tUmFuZ2UiLCJ2aWV3VG90YWwiLCJzdGVwIiwiZ2V0QXR0cmlidXRlIiwiJGNyZWF0ZUN1c3RvbVJhbmdlIiwicmVwbGFjZUNoaWxkIiwidG90YWxWaWV3IiwidG9Mb2NhbGVTdHJpbmciLCJiYWNrZ3JvdW5kIiwiQ3VzdG9tU2VsZWN0IiwiJGN1c3RvbVNlbGVjdCIsImN1c3RvbVNlbGVjdCIsImluaXRQYXJhbXMiLCJpbml0aWFsaXplIiwiaXNGaWx0ZXJzIiwiZmlsdGVycyIsImlzT25Nb2JpbGUiLCJtb2JpbGUiLCJkZWZhdWx0TGFiZWwiLCJ2aXJ0dWFsTGFiZWwiLCIkY3JlYXRlQ3VzdG9tU2VsZWN0IiwiJHNlbGVjdCIsIiRkZWZhdWx0T3B0aW9uIiwiJG9wdGlvbiIsImNob29zZSIsIiRjb250YWluZXIiLCJmaWx0ZXIiLCJzZXRQb3NpdGlvbiIsInRvZ2dsZSIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicHJldmVudERlZmF1bHQiLCJjb2RlIiwidG9nZ2xlQ3VzdG9tU2VsZWN0IiwiY2hhbmdlVmFsdWUiLCIkbmV3SXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJEcm9wZG93biIsIiRkcm9wZG93biIsImRyb3Bkb3duIiwiRm9ybVZhbGlkYXRpb24iLCIkZm9ybSIsImZvcm0iLCJub0luc3RhbnQiLCJub2luc3RhbnQiLCJub1N1Ym1pdCIsIm5vc3VibWl0IiwiZm9ybUVycm9yIiwiaW5wdXRHcm91cHMiLCIkaW5wdXRHcm91cCIsIiRpbnB1dCIsInZhbGlkYXRlIiwiaW5wdXRUeXBlIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsIm1pbkxlbmd0aCIsIm1heGxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkbWVzc2FnZSIsInJlcXVpcmVkTWVzc2FnZSIsImVycm9ybWlubGVuZ3RoIiwiZXJyb3JNaW5MZW5ndGgiLCJlcnJvcm1heGxlbmd0aCIsImVycm9yTWF4TGVuZ3RoIiwiZXJyb3JtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJjbGVhckVycm9yIiwibWF0Y2giLCJlcnJvciIsIiRlcnJvciIsIkhlYWRlciIsImhlYWRlciIsIm9wZW4iLCJzdWIiLCJJbnB1dEdyb3VwIiwiaW5wdXRHcm91cCIsImNvbnRlbnQiLCJNb2RhbCIsIiRtb2RhbCIsIm1vZGFsIiwiUmVzZXQiLCJ0ZXN0Iiwia2V5IiwiYm9keSIsIlN3aXRjaCIsIiRzd2l0Y2giLCJhY3RpdmUiLCJjaGVja2VkIiwiJGNyZWF0ZVN3aXRjaCIsIiRsYWJlbCIsIlRhYnMiLCIkdGFicyIsInRhYnMiLCJoZWFkZXJJdGVtcyIsIiRoZWFkZXJJdGVtIiwiJGNvbnRlbnRJdGVtIiwiJGFjY29yZGlvbnMiLCIkY2Fyb3VzZWxzIiwiJGN1c3RvbUZpbGVzIiwiJGN1c3RvbVJhbmdlcyIsIiRjdXN0b21TZWxlY3RzIiwiJGRyb3Bkb3ducyIsIiRpbnB1dEdyb3VwcyIsIiRmb3JtcyIsIiRtb2RhbHMiLCIkc3dpdGNocyIsIiR0YWIiLCJ0b1N0ciIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaXNDYWxsYWJsZSIsImZuIiwiY2FsbCIsInRvSW50ZWdlciIsIm51bWJlciIsIk51bWJlciIsImlzTmFOIiwiaXNGaW5pdGUiLCJhYnMiLCJtYXhTYWZlSW50ZWdlciIsInRvTGVuZ3RoIiwibGVuIiwibWluIiwibWF4IiwiYXJyYXlMaWtlIiwiQyIsIlR5cGVFcnJvciIsIm1hcEZuIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiVCIsIkEiLCJrIiwia1ZhbHVlIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiZ2V0RnJhbWVFbGVtZW50IiwiZG9jIiwiZGVmYXVsdFZpZXciLCJmcmFtZUVsZW1lbnQiLCJlIiwic3RhcnREb2MiLCJmcmFtZSIsIm93bmVyRG9jdW1lbnQiLCJyZWdpc3RyeSIsImNyb3NzT3JpZ2luVXBkYXRlciIsImNyb3NzT3JpZ2luUmVjdCIsImVudHJ5IiwidGltZSIsInJvb3RCb3VuZHMiLCJlbnN1cmVET01SZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiaW50ZXJzZWN0aW9uUmVjdCIsImdldEVtcHR5UmVjdCIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0UmVjdCIsInRhcmdldEFyZWEiLCJpbnRlcnNlY3Rpb25BcmVhIiwidG9GaXhlZCIsImNhbGxiYWNrIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwiRXJyb3IiLCJyb290Iiwibm9kZVR5cGUiLCJfY2hlY2tGb3JJbnRlcnNlY3Rpb25zIiwidGhyb3R0bGUiLCJiaW5kIiwiVEhST1RUTEVfVElNRU9VVCIsIl9jYWxsYmFjayIsIl9vYnNlcnZhdGlvblRhcmdldHMiLCJfcXVldWVkRW50cmllcyIsIl9yb290TWFyZ2luVmFsdWVzIiwiX3BhcnNlUm9vdE1hcmdpbiIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGRzIiwiX2luaXRUaHJlc2hvbGRzIiwibWFwIiwibWFyZ2luIiwidW5pdCIsImpvaW4iLCJfbW9uaXRvcmluZ0RvY3VtZW50cyIsIl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzIiwiUE9MTF9JTlRFUlZBTCIsIlVTRV9NVVRBVElPTl9PQlNFUlZFUiIsIl9zZXR1cENyb3NzT3JpZ2luVXBkYXRlciIsImNvbnZlcnRGcm9tUGFyZW50UmVjdCIsIm9ic2VydmVyIiwiX3Jlc2V0Q3Jvc3NPcmlnaW5VcGRhdGVyIiwiaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQiLCJzb21lIiwiZWxlbWVudCIsIl9yZWdpc3Rlckluc3RhbmNlIiwiX21vbml0b3JJbnRlcnNlY3Rpb25zIiwiX3VubW9uaXRvckludGVyc2VjdGlvbnMiLCJfdW5yZWdpc3Rlckluc3RhbmNlIiwiZGlzY29ubmVjdCIsIl91bm1vbml0b3JBbGxJbnRlcnNlY3Rpb25zIiwidGFrZVJlY29yZHMiLCJyZWNvcmRzIiwic2xpY2UiLCJvcHRfdGhyZXNob2xkIiwiaXNBcnJheSIsInNvcnQiLCJhIiwib3B0X3Jvb3RNYXJnaW4iLCJtYXJnaW5TdHJpbmciLCJtYXJnaW5zIiwic3BsaXQiLCJwYXJ0cyIsImV4ZWMiLCJwYXJzZUZsb2F0Iiwid2luIiwiaW5kZXhPZiIsIm1vbml0b3JpbmdJbnRlcnZhbCIsImRvbU9ic2VydmVyIiwiYWRkRXZlbnQiLCJNdXRhdGlvbk9ic2VydmVyIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJzdWJ0cmVlIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50Iiwicm9vdERvYyIsImhhc0RlcGVuZGVudFRhcmdldHMiLCJpdGVtRG9jIiwidW5zdWJzY3JpYmUiLCJzcGxpY2UiLCJ1bnN1YnNjcmliZXMiLCJyb290SXNJbkRvbSIsIl9yb290SXNJbkRvbSIsInJvb3RSZWN0IiwiX2dldFJvb3RSZWN0Iiwicm9vdENvbnRhaW5zVGFyZ2V0IiwiX3Jvb3RDb250YWluc1RhcmdldCIsIm9sZEVudHJ5IiwiX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uIiwibmV3RW50cnkiLCJub3ciLCJfaGFzQ3Jvc3NlZFRocmVzaG9sZCIsImdldENvbXB1dGVkU3R5bGUiLCJwYXJlbnQiLCJnZXRQYXJlbnROb2RlIiwiYXRSb290IiwicGFyZW50UmVjdCIsInBhcmVudENvbXB1dGVkU3R5bGUiLCJmcmFtZVJlY3QiLCJmcmFtZUludGVyc2VjdCIsImRvY3VtZW50RWxlbWVudCIsIm92ZXJmbG93IiwiY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24iLCJpc0RvYyIsImh0bWwiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImNsaWVudEhlaWdodCIsIl9leHBhbmRSZWN0QnlSb290TWFyZ2luIiwicmVjdCIsIm5ld1JlY3QiLCJvbGRSYXRpbyIsIm5ld1JhdGlvIiwiY29udGFpbnNEZWVwIiwicGVyZm9ybWFuY2UiLCJ0aW1lb3V0IiwidGltZXIiLCJub2RlIiwib3B0X3VzZUNhcHR1cmUiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhdGNoRXZlbnQiLCJyZWN0MSIsInJlY3QyIiwiZWwiLCJlcnIiLCJ5IiwicGFyZW50Qm91bmRpbmdSZWN0IiwicGFyZW50SW50ZXJzZWN0aW9uUmVjdCIsImNoaWxkIiwiYXNzaWduZWRTbG90IiwiaG9zdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QXFDc0csSUFBSSxJQUFJalksUUFBakQsRUFBMkQ7QUFDekQ7QUFDQSxhQUFPK1AsZUFBZSxDQUFDa0ksSUFBRCxDQUF0QjtBQUNELEtBTjBCLENBUTNCOzs7QUFDQSxRQUFJeEIsTUFBTSxJQUFJQSxNQUFNLENBQUNxQyxZQUFyQixFQUFtQztBQUNqQ3JDLFlBQU0sR0FBR0EsTUFBTSxDQUFDcUMsWUFBUCxDQUFvQjFZLFVBQTdCO0FBQ0Q7O0FBRUQsUUFBSXFXLE1BQU0sSUFBSUEsTUFBTSxDQUFDOUUsUUFBUCxJQUFtQixFQUE3QixJQUFtQzhFLE1BQU0sQ0FBQ3NDLElBQTlDLEVBQW9EO0FBQ2xEO0FBQ0EsYUFBT3RDLE1BQU0sQ0FBQ3NDLElBQWQ7QUFDRDs7QUFFRCxXQUFPdEMsTUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFLQSxXQUFTVSxLQUFULENBQWVjLElBQWYsRUFBcUI7QUFDbkIsV0FBT0EsSUFBSSxJQUFJQSxJQUFJLENBQUN0RyxRQUFMLEtBQWtCLENBQWpDO0FBQ0QsR0FsK0JVLENBbytCWDs7O0FBQ0FuUSxRQUFNLENBQUNiLG9CQUFQLEdBQThCQSxvQkFBOUI7QUFDQWEsUUFBTSxDQUFDb08seUJBQVAsR0FBbUNBLHlCQUFuQztBQUNELENBditCQSxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCIvKioqKioqKioqKlxuICogQWNjb3JkaW9uXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBBY2NvcmRpb24ge1xuICBjb25zdHJ1Y3RvcigkYWNjb3JkaW9uKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5hY2NvcmRpb24gPSAkYWNjb3JkaW9uIC8vIEFkZCBhY2NvcmRpb24gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5hY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB0aGlzLiQuYWNjb3JkaW9uLmRhdGFzZXQubXVsdGlwbGUgLy8gU2V0IGlzIG11bHRpcGxlIGl0ZW0gb3Blbi5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICBpZiAoJGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2NvbnRlbnRIZWlnaHR9cHhgXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpdGVtOiAkaXRlbSwgaGVpZ2h0OiBjb250ZW50SGVpZ2h0IH0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgeyBpdGVtLCBoZWlnaHQgfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQnV0dG9uJylcbiAgICAgIGNvbnN0ICRjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB7IGl0ZW0gfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvblxuIiwiY2xhc3MgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc2V0RE9NKCkge1xuICAgIHRoaXMuJC5hbmltYXRlZFRpdGxlcyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZWQtdGl0bGUnKVxuICAgIClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgZm9yIChjb25zdCBhbmltYXRlZFRpdGxlIG9mIEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZWQtdGl0bGUnKVxuICAgICkpIHtcbiAgICAgIGFuaW1hdGVkVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQtdGl0bGUnKVxuICAgICAgY29uc3Qgd3JhcHBlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHdyYXBwZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC10aXRsZV9fdGV4dCcpXG4gICAgICBhbmltYXRlZFRpdGxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXJUaXRsZSwgYW5pbWF0ZWRUaXRsZSlcbiAgICAgIHdyYXBwZXJUaXRsZS5hcHBlbmRDaGlsZChhbmltYXRlZFRpdGxlKVxuXG4gICAgICBjb25zdCB3cmFwcGVyVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHdyYXBwZXJUaXRsZTIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtdGl0bGUnKVxuICAgICAgd3JhcHBlclRpdGxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXJUaXRsZTIsIHdyYXBwZXJUaXRsZSlcbiAgICAgIHdyYXBwZXJUaXRsZTIuYXBwZW5kQ2hpbGQod3JhcHBlclRpdGxlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0RE9NKClcbiAgICB0aGlzLmV2ZW50cygpXG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgbGV0IHRpdGxlID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgb2JzZXJ2YWJsZXMgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb2JzZXJ2YWJsZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5pbnRlcnNlY3Rpb25SYXRpbyA+IDAuNSkge1xuICAgICAgICAgICAgaXRlbS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtdGl0bGUtLXZpc2libGUnKVxuICAgICAgICAgICAgdGl0bGUudW5vYnNlcnZlKGl0ZW0udGFyZ2V0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkOiBbMC41XVxuICAgICAgfVxuICAgIClcblxuICAgIGZvciAoY29uc3QgYW5pbWF0ZWRUaXRsZSBvZiB0aGlzLiQuYW5pbWF0ZWRUaXRsZXMpIHtcbiAgICAgIHRpdGxlLm9ic2VydmUoYW5pbWF0ZWRUaXRsZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uXG4iLCIvKioqKioqKioqKlxuICogQ2Fyb3VzZWxcbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIENhcm91c2VsIHtcbiAgY29uc3RydWN0b3IoJGNhcm91c2VsKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jYXJvdXNlbCA9ICRjYXJvdXNlbCAvLyBBZGQgY2Fyb3VzZWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24gPSB7XG4gICAgICBsZWZ0OiB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLWxlZnQnKSxcbiAgICAgIHJpZ2h0OiB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLXJpZ2h0JylcbiAgICB9XG4gICAgdGhpcy4kLml0ZW1zID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbXMnKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzVG91Y2hEZXZpY2UgPSAhIShcbiAgICAgICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHNcbiAgICApXG4gICAgdGhpcy50eXBlID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgPyB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50eXBlXG4gICAgICA6ICdub3JtYWwnXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgIHRoaXMucGFnaW5hdGlvbiA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnBhZ2luYXRpb25cbiAgICB0aGlzLmRyYWcgPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5kcmFnXG4gICAgdGhpcy5hdXRvID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuYXV0b1xuICAgIHRoaXMubW9iaWxlTnVtYmVyID0gMSB8fCB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5tb2JpbGVOdW1iZXJcbiAgICB0aGlzLnRhYmxldE51bWJlciA9IDIgfHwgdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudGFibGV0TnVtYmVyXG4gICAgdGhpcy5sYXB0b3BOdW1iZXIgPSA0IHx8IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmxhcHRvcE51bWJlclxuICAgIHRoaXMubnVtYmVySXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgKS5sZW5ndGhcblxuICAgIGlmICh0aGlzLnR5cGUgIT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGhcbiAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gMVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpLm9mZnNldFdpZHRoXG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5OdW1iZXIgPSB0aGlzLmxhcHRvcE51bWJlclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzY4cHgpJykubWF0Y2hlcykge1xuICAgICAgICB0aGlzLnNjcmVlbk51bWJlciA9IHRoaXMudGFibGV0TnVtYmVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjcmVlbk51bWJlciA9IHRoaXMubW9iaWxlTnVtYmVyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgJHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJHBhZ2luYXRpb24uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb24nKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVySXRlbXM7IGkrKykge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgICAgICRpdGVtLmRhdGFzZXQuaXRlbSA9IGkgKyAxXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgICRwYWdpbmF0aW9uLmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfVxuICAgICAgdGhpcy4kLmNhcm91c2VsLmFwcGVuZENoaWxkKCRwYWdpbmF0aW9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG8pIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICAgIH0sIHBhcnNlSW50KHRoaXMuYXV0bykpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24ubGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVMZWZ0KClcbiAgICB9KVxuXG4gICAgdGhpcy4kLm5hdmlnYXRpb24ucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICBmb3IgKGNvbnN0ICRidWxsZXQgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICkpIHtcbiAgICAgICRidWxsZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAkYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoJGJ1bGxldC5kYXRhc2V0Lml0ZW0gLSAxKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBwYXJzZUludCgkYnVsbGV0LmRhdGFzZXQuaXRlbSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHJhZykge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaERldmljZSkge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gdHJ1ZVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlID0gMFxuICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYWdJdGVtcyhldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdID4gdGhpcy5hY3R1YWxQb3NpdGlvbikgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPCB0aGlzLmFjdHVhbFBvc2l0aW9uKVxuICAgICAgICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLiQuaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX2l0ZW1zLS1kcmFnJylcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiArIDIwKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwKSB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjAgfHxcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gLSAyMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9kcmFnSXRlbXMoY2xpZW50WCkge1xuICAgIHRoaXMuJC5pdGVtcy5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9faXRlbXMtLWRyYWcnKVxuICAgIGlmICh0aGlzLnByZXNzSXRlbXMpIHtcbiAgICAgIGlmIChjbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IGNsaWVudFggLSB0aGlzLmFjdHVhbFBvc2l0aW9uXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5hY3RpdmVJdGVtIC0gMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoICtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IHRoaXMuYWN0dWFsUG9zaXRpb24gLSBjbGllbnRYXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5hY3RpdmVJdGVtIC0gMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0NyZXRhZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gdHJ1ZVxuICAgICAgICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMubnVtYmVySXRlbXMgLVxuICAgICAgICAgICAgICAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5hY3RpdmVJdGVtIC0gMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlTGVmdCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbm9ybWFsJyB8fCB0aGlzLnR5cGUgPT09ICdtdWx0aScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdsb29wJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLm51bWJlckl0ZW1zIC0gMSwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVMYXN0SXRlbSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKSxcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoLTEsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPD0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ25vcm1hbCcgfHwgdGhpcy50eXBlID09PSAnbXVsdGknKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcyAtICh0aGlzLnNjcmVlbk51bWJlciAtIDEpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdsb29wJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygwLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVGaXJzdEl0ZW0pXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUl0ZW1zKHgsIHBvc2l0aW9uID0gbnVsbCkge1xuICAgIGxldCB0XG4gICAgY2xlYXJUaW1lb3V0KHQpXG4gICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0J1xuICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3ggKiAtdGhpcy53aWR0aH1weClgXG5cbiAgICB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJlxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDFcbiAgICAgICkge1xuICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQodGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpKVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcblxuICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpLFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdsZWZ0JyAmJlxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICkge1xuICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQodGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5udW1iZXJJdGVtcyAtIDEpICpcbiAgICAgICAgICAtdGhpcy53aWR0aH0pYFxuICAgICAgfVxuICAgIH0sIDEwMDApXG5cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSlcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Om50aC1jaGlsZCgke3RoaXMuYWN0aXZlSXRlbSAtIDF9KWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpXG4gICAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bnRoLWNoaWxkKCR7dGhpcy5hY3RpdmVJdGVtICsgMX0pYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbUZpbGVcbiAqIHYxLjEuMFxuICovXG5cbmNsYXNzIEN1c3RvbUZpbGUge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tRmlsZSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tRmlsZSA9ICRjdXN0b21GaWxlIC8vIEFkZCBjdXN0b20tc2VsZWN0IGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmxhYmVsXG4gICAgdGhpcy5pc0J1dHRvbiA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuYnV0dG9uXG4gICAgdGhpcy5pc0J1dHRvblBvc2l0aW9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25wb3NcbiAgICAgID8gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25wb3NcbiAgICAgIDogJ3JpZ2h0J1xuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQudHlwZVxuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnR5cGVcbiAgICAgIDogJ2ZpbGUnXG4gICAgdGhpcy5pc1NpemUgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnNpemVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmlzQnV0dG9uXG4gICAgfVxuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuaW5uZXJIVE1MID0gJydcblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19jb250YWluZXInKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBsYWJlbFxuICAgIHRoaXMuJC5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSB0aGlzLmxhYmVsXG4gICAgdGhpcy4kLmxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19sYWJlbCcpXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcblxuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2ZpbGVzJykgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB0cnVlKVxuICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2ZvbGRlcicpIHtcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3dlYmtpdGRpcmVjdG9yeScsIHRydWUpXG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXJlY3RvcnlzJywgdHJ1ZSlcbiAgICB9XG4gICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIHNpemUgaW5mb1xuICAgICAgdGhpcy4kLnNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHRoaXMuJC5zaXplLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19zaXplJylcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9ICcwIG1iJ1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLnNpemUpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuJC5pbnB1dC5jbGljaygpXG4gICAgfSlcblxuICAgIGNvbnN0IHNpemVDb252ZXJ0ID0gc2l6ZSA9PiB7XG4gICAgICBjb25zdCBieXRlcyA9IHNpemVcbiAgICAgIGNvbnN0IHNpemVzID0gWydieXRlcycsICdrYicsICdtYicsICdnYicsICd0YiddXG4gICAgICBjb25zdCBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpXG4gICAgICBjb25zdCBjb252ZXJ0ID0gTWF0aC5yb3VuZChieXRlcyAvIE1hdGgucG93KDEwMjQsIGkpLCAyKVxuICAgICAgcmV0dXJuIGAke2NvbnZlcnR9ICR7c2l6ZXNbaV19YFxuICAgIH1cblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gZmlsZS5uYW1lXG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2ZpbGVDbG9zZScpXG4gICAgICAgIGNsb3NlLmlubmVySFRNTCA9ICcmdGltZXM7J1xuICAgICAgICB0aGlzLiQuY29udGFpbmVyLmluc2VydEJlZm9yZShjbG9zZSwgdGhpcy4kLmJ1dHRvbilcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSBudWxsXG4gICAgICAgICAgdGhpcy4kLmxhYmVsLmlubmVyVGV4dCA9IHRoaXMubGFiZWxcbiAgICAgICAgICB0aGlzLiQuY29udGFpbmVyLnJlbW92ZUNoaWxkKGNsb3NlKVxuICAgICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9ICcwIG1iJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSBzaXplQ29udmVydChmaWxlLnNpemUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXNcblxuICAgICAgICBjb25zdCAkZmlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgc2l6ZSA9IDBcblxuICAgICAgICBBcnJheS5mcm9tKGZpbGVzKS5mb3JFYWNoKChmaWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0ICRmaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAkZmlsZS5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgICAgICAkZmlsZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZScpXG5cbiAgICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2ZpbGVDbG9zZScpXG4gICAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJyZ0aW1lczsnXG5cbiAgICAgICAgICAkZmlsZS5hcHBlbmRDaGlsZChjbG9zZSlcbiAgICAgICAgICAkZmlsZXMuYXBwZW5kQ2hpbGQoJGZpbGUpXG5cbiAgICAgICAgICBzaXplICs9IGZpbGUuc2l6ZVxuXG4gICAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGVzID0gbmV3IERhdGFUcmFuc2ZlcigpXG4gICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgICAgICAgIGlmIChmaWxlICE9PSBmaWxlc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBuZXdGaWxlcy5pdGVtcy5hZGQoZmlsZSlcbiAgICAgICAgICAgICAgICBzaXplICs9IGZpbGUuc2l6ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSBzaXplQ29udmVydChzaXplKVxuICAgICAgICAgICAgdGhpcy4kLmlucHV0LmZpbGVzID0gbmV3RmlsZXMuZmlsZXNcbiAgICAgICAgICAgICRmaWxlcy5yZW1vdmVDaGlsZCgkZmlsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KHNpemUpXG5cbiAgICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQoJGZpbGVzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRmlsZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVJhbmdlXG4gKiB2MS4xLjFcbiAqL1xuXG5jbGFzcyBDdXN0b21SYW5nZSB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21SYW5nZSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UgPSAkY3VzdG9tUmFuZ2UgLy8gQWRkIGN1c3RvbVJhbmdlIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMudmlld1RvdGFsID0gdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQudmlld1RvdGFsXG4gICAgdGhpcy5zdGVwID0gdGhpcy4kLmN1c3RvbVJhbmdlLmdldEF0dHJpYnV0ZSgnc3RlcCcpXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmN1c3RvbVJhbmdlLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBjcmVhdGUgY29tcG9uZW50XG4gICAgY29uc3QgJGNyZWF0ZUN1c3RvbVJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY3JlYXRlQ3VzdG9tUmFuZ2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlJylcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXG4gICAgICAkY3JlYXRlQ3VzdG9tUmFuZ2UsXG4gICAgICB0aGlzLiQuY3VzdG9tUmFuZ2VcbiAgICApXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlID0gJGNyZWF0ZUN1c3RvbVJhbmdlXG5cbiAgICAvLyBDcmVhdGUgaW5wdXRcbiAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSlcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJylcblxuICAgIC8vIENyZWF0ZSB0b3RhbCB2aWV3LlxuICAgIGlmICh0aGlzLnZpZXdUb3RhbCkge1xuICAgICAgdGhpcy4kLnRvdGFsVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQudG90YWxWaWV3LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fdG90YWwnKVxuICAgICAgdGhpcy4kLnRvdGFsVmlldy5pbm5lclRleHQgPSAoXG4gICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSAqIHRoaXMuc3RlcFxuICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgfVxuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLnRvdGFsVmlldylcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHRoaXMuJC50b3RhbFZpZXcuaW5uZXJUZXh0ID0gKFxuICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgKiB0aGlzLnN0ZXBcbiAgICAgICkudG9Mb2NhbGVTdHJpbmcoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLnRvdGFsVmlldy5pbm5lclRleHQgPSAoXG4gICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSAqIHRoaXMuc3RlcFxuICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgfSlcblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRBQTY5MSAwJSwgIzRBQTY5MSAke3RoaXMuJC5pbnB1dC52YWx1ZX0lLCAjQ0NDQ0NDICR7dGhpcy4kLmlucHV0LnZhbHVlfSUsICNDQ0NDQ0MgMTAwJSlgXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SYW5nZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVNlbGVjdFxuICogdjEuMS4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVNlbGVjdCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0ID0gJGN1c3RvbVNlbGVjdCAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuaW5pdFBhcmFtcygpXG4gICAgdGhpcy5pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICAgdGhpcy5pc0ZpbHRlcnMgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQuZmlsdGVycyAvLyBTZXQgZmlsdGVycyBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5pc09uTW9iaWxlID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5kZWZhdWx0TGFiZWwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWwgLy8gU2V0IGRlZmF1bHQgbGFiZWwuXG4gICAgdGhpcy52aXJ0dWFsTGFiZWwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWwgLy8gU2V0IGFjdGl2YXRlZCBsYWJlbC5cbiAgICB0aGlzLml0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKSAvLyBHZXQgaXRlbXMuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIC8vIGNyZWF0ZSBjb21wb25lbnRcbiAgICBjb25zdCAkY3JlYXRlQ3VzdG9tU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY3JlYXRlQ3VzdG9tU2VsZWN0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpXG4gICAgJGNyZWF0ZUN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0JylcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuICAgICAgJGNyZWF0ZUN1c3RvbVNlbGVjdCxcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3RcbiAgICApXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdCA9ICRjcmVhdGVDdXN0b21TZWxlY3RcblxuICAgIGlmICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5OTFweCknKS5tYXRjaGVzKSB7XG4gICAgICAvLyBDcmVhdGUgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgICAgY29uc3QgJHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAkc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSlcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IHNlbGVjdCBvcHRpb24uXG4gICAgICBjb25zdCAkZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAkZGVmYXVsdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkZGVmYXVsdE9wdGlvbi5pbm5lclRleHQgPSB0aGlzLmRlZmF1bHRMYWJlbFxuICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkZGVmYXVsdE9wdGlvbilcblxuICAgICAgLy8gQ3JlYXRlIHNlbGVjdCBvcHRpb25zLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5pbm5lclRleHRcbiAgICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkb3B0aW9uKVxuICAgICAgfSlcblxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkc2VsZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1maWx0ZXJzJylcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IHdpdGggZWxlbWVudHMuXG4gICAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRlbnQnKVxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5sYWJlbCA9IGl0ZW0uaW5uZXJUZXh0XG4gICAgICAgICRpdGVtLmRhdGFzZXQudmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgICAgICAkaXRlbS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKVxuICAgICAgICAkaXRlbS5pbm5lclRleHQgPSBpdGVtLmlubmVyVGV4dFxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9KVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbi5cbiAgICAgIHRoaXMuJC5jaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLmNob29zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jaG9vc2UnKVxuICAgICAgaWYgKCF0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuZGVmYXVsdExhYmVsXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY29udGFpbmVyJylcbiAgICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGNvbnRlbnQpXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmlubmVySFRNTCA9ICcnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKHRoaXMuJC5jaG9vc2UpXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKCRjb250YWluZXIpXG5cbiAgICAgIC8vIENyZWF0ZSBpbnB1dCBmb3Igc2VsZWN0IHZhbHVlLlxuICAgICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXNlbGVjdF9faXRlbScpXG4gICAgICApXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZmlsdGVyIGlucHV0LlxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5maWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLmRlZmF1bHRMYWJlbFxuICAgICAgICB0aGlzLiQuY2hvb3NlLmFwcGVuZENoaWxkKHRoaXMuJC5maWx0ZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbigpXG4gICAgdGhpcy5ldmVudHMoKVxuICB9XG5cbiAgdG9nZ2xlQ3VzdG9tU2VsZWN0KCkge1xuICAgIGlmICh0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnY3VzdG9tLXNlbGVjdC0tb3BlbicpKSB7XG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgICAgIH0sIDIwMClcbiAgICB9XG4gIH1cblxuICBzZXRQb3NpdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLVxuICAgICAgICAodGhpcy4kLmN1c3RvbVNlbGVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgK1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX2Nob29zZScpXG4gICAgICAgICAgICAub2Zmc2V0SGVpZ2h0KSA8XG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X19jb250ZW50Jykub2Zmc2V0SGVpZ2h0XG4gICAgKSB7XG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLXRvcCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tdG9wJylcbiAgICB9XG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgLy8ga2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJykgdGhpcy50b2dnbGVDdXN0b21TZWxlY3QoKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFBvc2l0aW9uKClcbiAgICB9KVxuXG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHx8XG4gICAgICB0aGlzLmlzT25Nb2JpbGVcbiAgICApIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ3VzdG9tU2VsZWN0KClcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAkaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKCRpdGVtKVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHRoaXMuY2hhbmdlVmFsdWUoJGl0ZW0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gJydcbiAgICAgICAgICB0aGlzLiQuZmlsdGVyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0aGlzLnZpcnR1YWxMYWJlbClcbiAgICAgICAgICB0aGlzLiQuaXRlbXMuZm9yRWFjaCgkaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICRpdGVtXG4gICAgICAgICAgICAkbmV3SXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCRpdGVtLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuJC5maWx0ZXIudmFsdWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJGl0ZW1cbiAgICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJGl0ZW1cbiAgICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5jdXN0b21TZWxlY3QuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG5cbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG5cbiAgICAgICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQuZmlsdGVyLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLnZpcnR1YWxMYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIC8vICAgdGhpcy5pbml0aWFsaXplKClcbiAgICAvLyB9KVxuICB9XG5cbiAgY2hhbmdlVmFsdWUoJGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAkaXRlbS5pbm5lclRleHRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNob29zZS5pbm5lclRleHQgPSAkaXRlbS5pbm5lclRleHRcbiAgICB9XG5cbiAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSAkaXRlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9ICRpdGVtLmlubmVyVGV4dFxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdFxuIiwiLyoqKioqKioqKipcbiAqIERyb3Bkb3duXG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKCRkcm9wZG93bikge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZHJvcGRvd24gPSAkZHJvcGRvd24gLy8gQWRkIGRyb3Bkb3duIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNPbk1vYmlsZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQubmFtZVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2l0ZW0nKVxuICAgIClcblxuICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCB3aXRoIGVsZW1lbnRzLlxuICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY29udGVudCcpXG5cbiAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgdGhpcy4kLmNob29zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY2hvb3NlJylcbiAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG5cbiAgICAvLyBDcmVhdGUgd3JhcHBpbmcgY29udGFpbmVyIGZvciBjb250ZW50LlxuICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRhaW5lcicpXG4gICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICB0aGlzLiQuZHJvcGRvd24uaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLiQuZHJvcGRvd24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJylcbiAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgIHRoaXMuc2V0UG9zaXRpb24oKVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBzZXRQb3NpdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLVxuICAgICAgICAodGhpcy4kLmRyb3Bkb3duLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArXG4gICAgICAgICAgdGhpcy4kLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9fY2hvb3NlJykub2Zmc2V0SGVpZ2h0KSA8XG4gICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19jb250ZW50Jykub2Zmc2V0SGVpZ2h0XG4gICAgKSB7XG4gICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tLXRvcCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi0tdG9wJylcbiAgICB9XG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIC8vIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICB0aGlzLiQuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJylcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuJC5jaG9vc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tLW9wZW4nKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy4kLmRyb3Bkb3duLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKioqKioqKioqXG4gKiBGb3JtVmFsaWRhdGlvblxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgRm9ybVZhbGlkYXRpb24ge1xuICBjb25zdHJ1Y3RvcigkZm9ybSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZm9ybSA9ICRmb3JtIC8vIEFkZCBmb3JtIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMubm9JbnN0YW50ID0gISF0aGlzLiQuZm9ybS5kYXRhc2V0Lm5vaW5zdGFudFxuICAgIHRoaXMubm9TdWJtaXQgPSAhIXRoaXMuJC5mb3JtLmRhdGFzZXQubm9zdWJtaXRcbiAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5pbnB1dEdyb3VwcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgKSkge1xuICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuXG4gICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm5vSW5zdGFudCkge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGUoJGlucHV0R3JvdXApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm5vU3VibWl0KSB7XG4gICAgICB0aGlzLiQuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2VcbiAgICAgICAgZm9yIChjb25zdCAkaW5wdXRHcm91cCBvZiBBcnJheS5mcm9tKFxuICAgICAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgICAgICkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUoJGlucHV0R3JvdXApKSB0aGlzLmZvcm1FcnJvciA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1FcnJvcikgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZSgkaW5wdXRHcm91cCkge1xuICAgIGNvbnN0ICRpbnB1dCA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICBjb25zdCB2YWx1ZSA9ICRpbnB1dC52YWx1ZVxuICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuXG4gICAgLy8gcnVsZXNcbiAgICBjb25zdCBydWxlcyA9IHt9XG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWQpXG4gICAgICBydWxlcy5yZXF1aXJlZCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5taW5sZW5ndGgpXG4gICAgICBydWxlcy5taW5MZW5ndGggPSBwYXJzZUludCgkaW5wdXRHcm91cC5kYXRhc2V0Lm1pbmxlbmd0aClcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5tYXhsZW5ndGgpXG4gICAgICBydWxlcy5tYXhMZW5ndGggPSBwYXJzZUludCgkaW5wdXRHcm91cC5kYXRhc2V0Lm1heGxlbmd0aClcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZG1lc3NhZ2UpXG4gICAgICBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgPSAkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkbWVzc2FnZVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWlubGVuZ3RoKVxuICAgICAgcnVsZXMuZXJyb3JNaW5MZW5ndGggPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWlubGVuZ3RoXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtYXhsZW5ndGgpXG4gICAgICBydWxlcy5lcnJvck1heExlbmd0aCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtYXhsZW5ndGhcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1lc3NhZ2UpXG4gICAgICBydWxlcy5lcnJvck1lc3NhZ2UgPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWVzc2FnZVxuXG4gICAgaWYgKGlucHV0VHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA8IHJ1bGVzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gcnVsZXMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWF4TGVuZ3RoIHx8ICd0b28gYmlnJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlIDwgcnVsZXMubWluTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWluTGVuZ3RoIHx8ICd0b28gbG93JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1heExlbmd0aCAmJiB2YWx1ZSA+IHJ1bGVzLm1heExlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1heExlbmd0aCB8fCAndG9vIGJpZycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnZW1haWwnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF2YWx1ZS5tYXRjaChcbiAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNZXNzYWdlIHx8ICdub3QgYSB2YWxpZCBlbWFpbCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAndGVsJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhdmFsdWUubWF0Y2goL14oPzooPzpcXCt8MDApMzN8MClcXHMqWzEtOV0oPzpbXFxzLi1dKlxcZHsyfSl7NH0kLylcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1lc3NhZ2UgfHwgJ25vdCBhIHZhbGlkIGVtYWlsJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RXJyb3IoJGlucHV0R3JvdXAsIGVycm9yKSB7XG4gICAgbGV0ICRlcnJvciA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncm91cF9fZXJyb3InKVxuICAgIGlmICgkZXJyb3IpIHtcbiAgICAgICRlcnJvci5pbm5lclRleHQgPSBlcnJvclxuICAgIH0gZWxzZSB7XG4gICAgICAkZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICRlcnJvci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cF9fZXJyb3InKVxuICAgICAgJGVycm9yLmlubmVyVGV4dCA9IGVycm9yXG4gICAgICAkaW5wdXRHcm91cC5hcHBlbmRDaGlsZCgkZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY2xlYXJFcnJvcigkaW5wdXRHcm91cCkge1xuICAgIGNvbnN0ICRlcnJvciA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncm91cF9fZXJyb3InKVxuICAgIGlmICgkZXJyb3IpIHtcbiAgICAgICRpbnB1dEdyb3VwLnJlbW92ZUNoaWxkKCRlcnJvcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRpb25cbiIsIi8qKioqKioqKioqXG4gKiBIZWFkZXJcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpIC8vIEFkZCBoZWFkZXIgaW4gRE9NIG9iamVjdHMuXG4gICAgdGhpcy4kLmNsb3NlID0gdGhpcy4kLmhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b2dnbGUtLWNsb3NlJylcbiAgICB0aGlzLiQub3BlbiA9IHRoaXMuJC5oZWFkZXIucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdG9nZ2xlLS1vcGVuJylcbiAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19tZW51SXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTIwMHB4KScpLm1hdGNoZXMpIHtcbiAgICAgIHRoaXMuJC5vcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLiQuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5oZWFkZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHN1YiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudUl0ZW1TdWInKVxuICAgICAgICBpZiAoc3ViKSB7XG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51SXRlbUJ1dHRvbicpXG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gc3ViLm9mZnNldEhlaWdodFxuICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgc3ViLnN0eWxlLnRyYW5zaXRpb24gPSAnaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQnXG5cbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3ViLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19tZW51SXRlbVN1Yi0tb3BlbicpKSB7XG4gICAgICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgICAgIHN1Yi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnVJdGVtU3ViLS1vcGVuJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG4gICAgICAgICAgICAgIHN1Yi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX21lbnVJdGVtU3ViLS1vcGVuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiLyoqKioqKioqKipcbiAqIElucHV0R3JvdXBcbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIElucHV0R3JvdXAge1xuICBjb25zdHJ1Y3RvcigkaW5wdXRHcm91cCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuaW5wdXRHcm91cCA9ICRpbnB1dEdyb3VwIC8vIEFkZCBpbnB1dEdyb3VwIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kLmlucHV0R3JvdXAuaW5uZXJIVE1MXG4gICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwX19jb250ZW50JylcbiAgICAkY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50XG4gICAgdGhpcy4kLmlucHV0ID0gJGNvbnRlbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dEdyb3VwLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy4kLmlucHV0R3JvdXAuYXBwZW5kQ2hpbGQoJGNvbnRlbnQpXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0R3JvdXAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXAtLWFjdGl2ZScpXG4gICAgfSlcblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLiQuaW5wdXQudmFsdWUpXG4gICAgICAgIHRoaXMuJC5pbnB1dEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWdyb3VwLS1hY3RpdmUnKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cFxuIiwiLyoqKioqKioqKipcbiAqIE1vZGFsXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKCRtb2RhbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQubW9kYWwgPSAkbW9kYWwgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1vZGFsLWJ1dHRvbltkYXRhLW1vZGFsPVwiJHt0aGlzLiQubW9kYWwuZGF0YXNldC5tb2RhbH1cIl1gXG4gICAgICApXG4gICAgKVxuICAgICAgdGhpcy4kLmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubW9kYWwtYnV0dG9uW2RhdGEtbW9kYWw9XCIke3RoaXMuJC5tb2RhbC5kYXRhc2V0Lm1vZGFsfVwiXWBcbiAgICAgIClcbiAgICBpZiAodGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKSlcbiAgICAgIHRoaXMuJC5jbG9zZSA9IHRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJylcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLS1hY3RpdmUnKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKS5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy4kLmJ1dHRvbikge1xuICAgICAgdGhpcy4kLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kLmNsb3NlKSB7XG4gICAgICB0aGlzLiQuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCJjbGFzcyBSZXNldCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICBpZiAoIS9eW2EtejAtOV0kL2kudGVzdChldmVudC5rZXkpKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdrZXlib2FyZCcpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNldFxuIiwiLyoqXG4gKiBTd2l0Y2hcbiAqL1xuXG5jbGFzcyBTd2l0Y2gge1xuICBjb25zdHJ1Y3Rvcigkc3dpdGNoKSB7XG4gICAgdGhpcy4kID0ge30gLy8gaW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzXG4gICAgdGhpcy4kLnN3aXRjaCA9ICRzd2l0Y2ggLy8gYWRkIHN3aXRjaCBpbiBET00gb2JqZWN0c1xuXG4gICAgdGhpcy5pbml0UGFyYW1zKClcbiAgICB0aGlzLmluaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIGluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBpbml0UGFyYW1zKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy4kLnN3aXRjaC5jaGVja2VkXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuJC5zd2l0Y2guZGF0YXNldC5sYWJlbFxuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5zd2l0Y2guZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0aWFsaXplIGNvbXBvbmVudFxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBjcmVhdGUgY29tcG9uZW50XG4gICAgY29uc3QgJGNyZWF0ZVN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNyZWF0ZVN3aXRjaC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKVxuICAgICRjcmVhdGVTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICBpZiAodGhpcy5hY3RpdmUpICRjcmVhdGVTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoLS1hY3RpdmUnKVxuICAgIHRoaXMuJC5zd2l0Y2gucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoJGNyZWF0ZVN3aXRjaCwgdGhpcy4kLnN3aXRjaClcbiAgICB0aGlzLiQuc3dpdGNoID0gJGNyZWF0ZVN3aXRjaFxuXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3dpdGNoX19jb250YWluZXInKVxuXG4gICAgLy8gY3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB0aGlzLiQuaW5wdXQuY2hlY2tlZCA9IHRydWVcbiAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgdGhpcy4kLnN3aXRjaC5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgLy8gY3JlYXRlIGxhYmVsXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIGNvbnN0ICRsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMubmFtZSlcbiAgICAgICRsYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2hfX2xhYmVsJylcbiAgICAgICRsYWJlbC5pbm5lclRleHQgPSB0aGlzLmxhYmVsXG4gICAgICB0aGlzLiQuc3dpdGNoLmFwcGVuZENoaWxkKCRsYWJlbClcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50cygpXG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgdGhpcy4kLnN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLiQuc3dpdGNoLmNsYXNzTGlzdC50b2dnbGUoJ3N3aXRjaC0tYWN0aXZlJylcbiAgICAgIHRoaXMuJC5pbnB1dC5jaGVja2VkID0gIXRoaXMuJC5pbnB1dC5jaGVja2VkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hcbiIsIi8qKioqKioqKioqXG4gKiBUYWJzXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBUYWJzIHtcbiAgY29uc3RydWN0b3IoJHRhYnMpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLnRhYnMgPSAkdGFicyAvLyBBZGQgbW9kYWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmhlYWRlckl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19oZWFkZXJJdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0ICRoZWFkZXJJdGVtIG9mIHRoaXMuJC5oZWFkZXJJdGVtcykge1xuICAgICAgY29uc3QgJGNvbnRlbnRJdGVtID0gdGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50YWJzX19jb250ZW50SXRlbVtkYXRhLWl0ZW09XCIkeyRoZWFkZXJJdGVtLmRhdGFzZXQuaXRlbX1cIl1gXG4gICAgICApXG4gICAgICAkaGVhZGVySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpKVxuICAgICAgICAgIHRoaXMuJC50YWJzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkaGVhZGVySXRlbS5jbGFzc0xpc3QuYWRkKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkY29udGVudEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG4iLCJpbXBvcnQgJy4vcG9seWZpbGxzL0FycmF5LmZyb20nXG5pbXBvcnQgJy4vcG9seWZpbGxzL2ludGVyc2VjdGlvbk9ic2VydmVyJ1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbidcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi9BbmltYXRpb24nXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCdcbmltcG9ydCBDdXN0b21GaWxlIGZyb20gJy4vQ3VzdG9tRmlsZSdcbmltcG9ydCBDdXN0b21SYW5nZSBmcm9tICcuL0N1c3RvbVJhbmdlJ1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tICcuL0N1c3RvbVNlbGVjdCdcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJy4vSW5wdXRHcm91cCdcbmltcG9ydCBGb3JtVmFsaWRhdGlvbiBmcm9tICcuL0Zvcm1WYWxpZGF0aW9uJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4vU3dpdGNoJ1xuaW1wb3J0IFJlc2V0IGZyb20gJy4vUmVzZXQnXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5cbmNvbnN0ICRhY2NvcmRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpXG5mb3IgKGNvbnN0ICRhY2NvcmRpb24gb2YgJGFjY29yZGlvbnMpIHtcbiAgbmV3IEFjY29yZGlvbigkYWNjb3JkaW9uKVxufVxuXG5uZXcgQW5pbWF0aW9uKClcblxuY29uc3QgJGNhcm91c2VscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsJykpXG5mb3IgKGNvbnN0ICRjYXJvdXNlbCBvZiAkY2Fyb3VzZWxzKSB7XG4gIG5ldyBDYXJvdXNlbCgkY2Fyb3VzZWwpXG59XG5cbmNvbnN0ICRjdXN0b21GaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1maWxlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21GaWxlIG9mICRjdXN0b21GaWxlcykge1xuICBuZXcgQ3VzdG9tRmlsZSgkY3VzdG9tRmlsZSlcbn1cblxuY29uc3QgJGN1c3RvbVJhbmdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYW5nZScpKVxuZm9yIChjb25zdCAkY3VzdG9tUmFuZ2Ugb2YgJGN1c3RvbVJhbmdlcykge1xuICBuZXcgQ3VzdG9tUmFuZ2UoJGN1c3RvbVJhbmdlKVxufVxuXG5jb25zdCAkY3VzdG9tU2VsZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3QnKSlcbmZvciAoY29uc3QgJGN1c3RvbVNlbGVjdCBvZiAkY3VzdG9tU2VsZWN0cykge1xuICBuZXcgQ3VzdG9tU2VsZWN0KCRjdXN0b21TZWxlY3QpXG59XG5cbmNvbnN0ICRkcm9wZG93bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpKVxuZm9yIChjb25zdCAkZHJvcGRvd24gb2YgJGRyb3Bkb3ducykge1xuICBuZXcgRHJvcGRvd24oJGRyb3Bkb3duKVxufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpKSBuZXcgSGVhZGVyKClcblxuY29uc3QgJGlucHV0R3JvdXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKSlcbmZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgJGlucHV0R3JvdXBzKSB7XG4gIG5ldyBJbnB1dEdyb3VwKCRpbnB1dEdyb3VwKVxufVxuXG5jb25zdCAkZm9ybXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWxpZGF0aW9uJykpXG5mb3IgKGNvbnN0ICRmb3JtIG9mICRmb3Jtcykge1xuICBuZXcgRm9ybVZhbGlkYXRpb24oJGZvcm0pXG59XG5cbmNvbnN0ICRtb2RhbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpKVxuZm9yIChjb25zdCAkbW9kYWwgb2YgJG1vZGFscykge1xuICBuZXcgTW9kYWwoJG1vZGFsKVxufVxuXG5jb25zdCAkc3dpdGNocyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXRjaCcpKVxuZm9yIChjb25zdCAkc3dpdGNoIG9mICRzd2l0Y2hzKSB7XG4gIG5ldyBTd2l0Y2goJHN3aXRjaClcbn1cblxubmV3IFJlc2V0KClcblxuY29uc3QgJHRhYnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpXG5mb3IgKGNvbnN0ICR0YWIgb2YgJHRhYnMpIHtcbiAgbmV3IFRhYnMoJHRhYilcbn1cbiIsImlmICghQXJyYXkuZnJvbSkge1xuICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbiAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICAgfVxuICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSlcbiAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAobnVtYmVyID09PSAwIHx8ICFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiBudW1iZXJcbiAgICAgIH1cbiAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpXG4gICAgfVxuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDFcbiAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSlcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcilcbiAgICB9XG5cbiAgICAvLyBUaGUgbGVuZ3RoIHByb3BlcnR5IG9mIHRoZSBmcm9tIG1ldGhvZCBpcyAxLlxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICAgIC8vIDEuIExldCBDIGJlIHRoZSB0aGlzIHZhbHVlLlxuICAgICAgdmFyIEMgPSB0aGlzXG5cbiAgICAgIC8vIDIuIExldCBpdGVtcyBiZSBUb09iamVjdChhcnJheUxpa2UpLlxuICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0KGFycmF5TGlrZSlcblxuICAgICAgLy8gMy4gUmV0dXJuSWZBYnJ1cHQoaXRlbXMpLlxuICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ0FycmF5LmZyb20gcmVxdWlyZXMgYW4gYXJyYXktbGlrZSBvYmplY3QgLSBub3QgbnVsbCBvciB1bmRlZmluZWQnXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gNC4gSWYgbWFwZm4gaXMgdW5kZWZpbmVkLCB0aGVuIGxldCBtYXBwaW5nIGJlIGZhbHNlLlxuICAgICAgdmFyIG1hcEZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIHVuZGVmaW5lZFxuICAgICAgdmFyIFRcbiAgICAgIGlmICh0eXBlb2YgbWFwRm4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDUuIGVsc2VcbiAgICAgICAgLy8gNS4gYSBJZiBJc0NhbGxhYmxlKG1hcGZuKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICdBcnJheS5mcm9tOiB3aGVuIHByb3ZpZGVkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbidcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICAvLyA1LiBiLiBJZiB0aGlzQXJnIHdhcyBzdXBwbGllZCwgbGV0IFQgYmUgdGhpc0FyZzsgZWxzZSBsZXQgVCBiZSB1bmRlZmluZWQuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAxMC4gTGV0IGxlblZhbHVlIGJlIEdldChpdGVtcywgXCJsZW5ndGhcIikuXG4gICAgICAvLyAxMS4gTGV0IGxlbiBiZSBUb0xlbmd0aChsZW5WYWx1ZSkuXG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKVxuXG4gICAgICAvLyAxMy4gSWYgSXNDb25zdHJ1Y3RvcihDKSBpcyB0cnVlLCB0aGVuXG4gICAgICAvLyAxMy4gYS4gTGV0IEEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZCBvZiBDIHdpdGggYW4gYXJndW1lbnQgbGlzdCBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbSBsZW4uXG4gICAgICAvLyAxNC4gYS4gRWxzZSwgTGV0IEEgYmUgQXJyYXlDcmVhdGUobGVuKS5cbiAgICAgIHZhciBBID0gaXNDYWxsYWJsZShDKSA/IE9iamVjdChuZXcgQyhsZW4pKSA6IG5ldyBBcnJheShsZW4pXG5cbiAgICAgIC8vIDE2LiBMZXQgayBiZSAwLlxuICAgICAgdmFyIGsgPSAwXG4gICAgICAvLyAxNy4gUmVwZWF0LCB3aGlsZSBrIDwgbGVu4oCmIChhbHNvIHN0ZXBzIGEgLSBoKVxuICAgICAgdmFyIGtWYWx1ZVxuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAga1ZhbHVlID0gaXRlbXNba11cbiAgICAgICAgaWYgKG1hcEZuKSB7XG4gICAgICAgICAgQVtrXSA9XG4gICAgICAgICAgICB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgPyBtYXBGbihrVmFsdWUsIGspXG4gICAgICAgICAgICAgIDogbWFwRm4uY2FsbChULCBrVmFsdWUsIGspXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQVtrXSA9IGtWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIGsgKz0gMVxuICAgICAgfVxuICAgICAgLy8gMTguIExldCBwdXRTdGF0dXMgYmUgUHV0KEEsIFwibGVuZ3RoXCIsIGxlbiwgdHJ1ZSkuXG4gICAgICBBLmxlbmd0aCA9IGxlblxuICAgICAgLy8gMjAuIFJldHVybiBBLlxuICAgICAgcmV0dXJuIEFcbiAgICB9XG4gIH0pKClcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNPRlRXQVJFIEFORCBET0NVTUVOVCBOT1RJQ0UgQU5EIExJQ0VOU0UuXG4gKlxuICogIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxuICpcbiAqL1xuOyhmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgLy8gRXhpdCBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbiBhIGJyb3dzZXIuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRXhpdCBlYXJseSBpZiBhbGwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgYW5kIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlcbiAgLy8gZmVhdHVyZXMgYXJlIG5hdGl2ZWx5IHN1cHBvcnRlZC5cbiAgaWYgKFxuICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93ICYmXG4gICAgJ0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnknIGluIHdpbmRvdyAmJlxuICAgICdpbnRlcnNlY3Rpb25SYXRpbycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlXG4gICkge1xuICAgIC8vIE1pbmltYWwgcG9seWZpbGwgZm9yIEVkZ2UgMTUncyBsYWNrIG9mIGBpc0ludGVyc2VjdGluZ2BcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvaXNzdWVzLzIxMVxuICAgIGlmICghKCdpc0ludGVyc2VjdGluZycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUsXG4gICAgICAgICdpc0ludGVyc2VjdGluZycsXG4gICAgICAgIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVtYmVkZGluZyBmcmFtZSBlbGVtZW50LCBpZiBhbnkuXG4gICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2NcbiAgICogQHJldHVybiB7IUVsZW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRGcmFtZUVsZW1lbnQoZG9jKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZG9jLmRlZmF1bHRWaWV3ICYmIGRvYy5kZWZhdWx0Vmlldy5mcmFtZUVsZW1lbnQpIHx8IG51bGxcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZ25vcmUgdGhlIGVycm9yLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgZG9jdW1lbnQuXG4gICAqL1xuICB2YXIgZG9jdW1lbnQgPSAoZnVuY3Rpb24oc3RhcnREb2MpIHtcbiAgICB2YXIgZG9jID0gc3RhcnREb2NcbiAgICB2YXIgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZG9jKVxuICAgIHdoaWxlIChmcmFtZSkge1xuICAgICAgZG9jID0gZnJhbWUub3duZXJEb2N1bWVudFxuICAgICAgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZG9jKVxuICAgIH1cbiAgICByZXR1cm4gZG9jXG4gIH0pKHdpbmRvdy5kb2N1bWVudClcblxuICAvKipcbiAgICogQW4gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkuIFRoaXMgcmVnaXN0cnkgZXhpc3RzIHRvIGhvbGQgYSBzdHJvbmdcbiAgICogcmVmZXJlbmNlIHRvIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlcyBjdXJyZW50bHkgb2JzZXJ2aW5nIGEgdGFyZ2V0XG4gICAqIGVsZW1lbnQuIFdpdGhvdXQgdGhpcyByZWdpc3RyeSwgaW5zdGFuY2VzIHdpdGhvdXQgYW5vdGhlciByZWZlcmVuY2UgbWF5IGJlXG4gICAqIGdhcmJhZ2UgY29sbGVjdGVkLlxuICAgKi9cbiAgdmFyIHJlZ2lzdHJ5ID0gW11cblxuICAvKipcbiAgICogVGhlIHNpZ25hbCB1cGRhdGVyIGZvciBjcm9zcy1vcmlnaW4gaW50ZXJzZWN0aW9uLiBXaGVuIG5vdCBudWxsLCBpdCBtZWFuc1xuICAgKiB0aGF0IHRoZSBwb2x5ZmlsbCBpcyBjb25maWd1cmVkIHRvIHdvcmsgaW4gYSBjcm9zcy1vcmlnaW4gbW9kZS5cbiAgICogQHR5cGUge2Z1bmN0aW9uKERPTVJlY3R8Q2xpZW50UmVjdCwgRE9NUmVjdHxDbGllbnRSZWN0KX1cbiAgICovXG4gIHZhciBjcm9zc09yaWdpblVwZGF0ZXIgPSBudWxsXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IGNyb3NzLW9yaWdpbiBpbnRlcnNlY3Rpb24uIE9ubHkgdXNlZCBpbiB0aGUgY3Jvc3Mtb3JpZ2luIG1vZGUuXG4gICAqIEB0eXBlIHtET01SZWN0fENsaWVudFJlY3R9XG4gICAqL1xuICB2YXIgY3Jvc3NPcmlnaW5SZWN0ID0gbnVsbFxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSBjb25zdHJ1Y3Rvci5cbiAgICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItZW50cnlcbiAgICogQHBhcmFtIHtPYmplY3R9IGVudHJ5IEEgZGljdGlvbmFyeSBvZiBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoZW50cnkpIHtcbiAgICB0aGlzLnRpbWUgPSBlbnRyeS50aW1lXG4gICAgdGhpcy50YXJnZXQgPSBlbnRyeS50YXJnZXRcbiAgICB0aGlzLnJvb3RCb3VuZHMgPSBlbnN1cmVET01SZWN0KGVudHJ5LnJvb3RCb3VuZHMpXG4gICAgdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QgPSBlbnN1cmVET01SZWN0KGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdClcbiAgICB0aGlzLmludGVyc2VjdGlvblJlY3QgPSBlbnN1cmVET01SZWN0KFxuICAgICAgZW50cnkuaW50ZXJzZWN0aW9uUmVjdCB8fCBnZXRFbXB0eVJlY3QoKVxuICAgIClcbiAgICB0aGlzLmlzSW50ZXJzZWN0aW5nID0gISFlbnRyeS5pbnRlcnNlY3Rpb25SZWN0XG5cbiAgICAvLyBDYWxjdWxhdGVzIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8uXG4gICAgdmFyIHRhcmdldFJlY3QgPSB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdFxuICAgIHZhciB0YXJnZXRBcmVhID0gdGFyZ2V0UmVjdC53aWR0aCAqIHRhcmdldFJlY3QuaGVpZ2h0XG4gICAgdmFyIGludGVyc2VjdGlvblJlY3QgPSB0aGlzLmludGVyc2VjdGlvblJlY3RcbiAgICB2YXIgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvblJlY3Qud2lkdGggKiBpbnRlcnNlY3Rpb25SZWN0LmhlaWdodFxuXG4gICAgLy8gU2V0cyBpbnRlcnNlY3Rpb24gcmF0aW8uXG4gICAgaWYgKHRhcmdldEFyZWEpIHtcbiAgICAgIC8vIFJvdW5kIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8gdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBpc3N1ZXM6XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL2lzc3Vlcy8zMjRcbiAgICAgIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSBOdW1iZXIoXG4gICAgICAgIChpbnRlcnNlY3Rpb25BcmVhIC8gdGFyZ2V0QXJlYSkudG9GaXhlZCg0KVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBhcmVhIGlzIHplcm8gYW5kIGlzIGludGVyc2VjdGluZywgc2V0cyB0byAxLCBvdGhlcndpc2UgdG8gMFxuICAgICAgdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IHRoaXMuaXNJbnRlcnNlY3RpbmcgPyAxIDogMFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgY29uc3RydWN0b3IuXG4gICAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWludGVyZmFjZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciBpbnRlcnNlY3Rpb25cbiAgICogICAgIGNoYW5nZXMgaGF2ZSBxdWV1ZWQuIFRoZSBmdW5jdGlvbiBpcyBub3QgaW52b2tlZCBpZiB0aGUgcXVldWUgaGFzXG4gICAqICAgICBiZWVuIGVtcHRpZWQgYnkgY2FsbGluZyB0aGUgYHRha2VSZWNvcmRzYCBtZXRob2QuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X29wdGlvbnMgT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRfb3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge31cblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLnJvb3QgJiZcbiAgICAgIG9wdGlvbnMucm9vdC5ub2RlVHlwZSAhPSAxICYmXG4gICAgICBvcHRpb25zLnJvb3Qubm9kZVR5cGUgIT0gOVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyb290IG11c3QgYmUgYSBEb2N1bWVudCBvciBFbGVtZW50JylcbiAgICB9XG5cbiAgICAvLyBCaW5kcyBhbmQgdGhyb3R0bGVzIGB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnNgLlxuICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyA9IHRocm90dGxlKFxuICAgICAgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLmJpbmQodGhpcyksXG4gICAgICB0aGlzLlRIUk9UVExFX1RJTUVPVVRcbiAgICApXG5cbiAgICAvLyBQcml2YXRlIHByb3BlcnRpZXMuXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fcXVldWVkRW50cmllcyA9IFtdXG4gICAgdGhpcy5fcm9vdE1hcmdpblZhbHVlcyA9IHRoaXMuX3BhcnNlUm9vdE1hcmdpbihvcHRpb25zLnJvb3RNYXJnaW4pXG5cbiAgICAvLyBQdWJsaWMgcHJvcGVydGllcy5cbiAgICB0aGlzLnRocmVzaG9sZHMgPSB0aGlzLl9pbml0VGhyZXNob2xkcyhvcHRpb25zLnRocmVzaG9sZClcbiAgICB0aGlzLnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgbnVsbFxuICAgIHRoaXMucm9vdE1hcmdpbiA9IHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXNcbiAgICAgIC5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgICAgIHJldHVybiBtYXJnaW4udmFsdWUgKyBtYXJnaW4udW5pdFxuICAgICAgfSlcbiAgICAgIC5qb2luKCcgJylcblxuICAgIC8qKiBAcHJpdmF0ZSBAY29uc3QgeyFBcnJheTwhRG9jdW1lbnQ+fSAqL1xuICAgIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMgPSBbXVxuICAgIC8qKiBAcHJpdmF0ZSBAY29uc3QgeyFBcnJheTxmdW5jdGlvbigpPn0gKi9cbiAgICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBpbnRlcnZhbCB3aXRoaW4gd2hpY2ggdGhlIGRvY3VtZW50IHdpbGwgYmUgY2hlY2tlZCBmb3JcbiAgICogaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVEhST1RUTEVfVElNRU9VVCA9IDEwMFxuXG4gIC8qKlxuICAgKiBUaGUgZnJlcXVlbmN5IGluIHdoaWNoIHRoZSBwb2x5ZmlsbCBwb2xscyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqIHRoaXMgY2FuIGJlIHVwZGF0ZWQgb24gYSBwZXIgaW5zdGFuY2UgYmFzaXMgYW5kIG11c3QgYmUgc2V0IHByaW9yIHRvXG4gICAqIGNhbGxpbmcgYG9ic2VydmVgIG9uIHRoZSBmaXJzdCB0YXJnZXQuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuUE9MTF9JTlRFUlZBTCA9IG51bGxcblxuICAvKipcbiAgICogVXNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgb24gdGhlIHJvb3QgZWxlbWVudFxuICAgKiB0byBkZXRlY3QgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVVNFX01VVEFUSU9OX09CU0VSVkVSID0gdHJ1ZVxuXG4gIC8qKlxuICAgKiBTZXRzIHVwIHRoZSBwb2x5ZmlsbCBpbiB0aGUgY3Jvc3Mtb3JpZ2luIG1vZGUuIFRoZSByZXN1bHQgaXMgdGhlXG4gICAqIHVwZGF0ZXIgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHR3byBhcmd1bWVudHM6IGBib3VuZGluZ0NsaWVudFJlY3RgIGFuZFxuICAgKiBgaW50ZXJzZWN0aW9uUmVjdGAgLSBqdXN0IGFzIHRoZXNlIGZpZWxkcyB3b3VsZCBiZSBhdmFpbGFibGUgdG8gdGhlXG4gICAqIHBhcmVudCB2aWEgYEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlgLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWRcbiAgICogZWFjaCB0aW1lIHRoZSBpZnJhbWUgcmVjZWl2ZXMgaW50ZXJzZWN0aW9uIGluZm9ybWF0aW9uIGZyb20gdGhlIHBhcmVudFxuICAgKiB3aW5kb3csIGUuZy4gdmlhIG1lc3NhZ2luZy5cbiAgICogQHJldHVybiB7ZnVuY3Rpb24oRE9NUmVjdHxDbGllbnRSZWN0LCBET01SZWN0fENsaWVudFJlY3QpfVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIuX3NldHVwQ3Jvc3NPcmlnaW5VcGRhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFjcm9zc09yaWdpblVwZGF0ZXIpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IGJvdW5kaW5nQ2xpZW50UmVjdFxuICAgICAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IGludGVyc2VjdGlvblJlY3RcbiAgICAgICAqL1xuICAgICAgY3Jvc3NPcmlnaW5VcGRhdGVyID0gZnVuY3Rpb24oYm91bmRpbmdDbGllbnRSZWN0LCBpbnRlcnNlY3Rpb25SZWN0KSB7XG4gICAgICAgIGlmICghYm91bmRpbmdDbGllbnRSZWN0IHx8ICFpbnRlcnNlY3Rpb25SZWN0KSB7XG4gICAgICAgICAgY3Jvc3NPcmlnaW5SZWN0ID0gZ2V0RW1wdHlSZWN0KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjcm9zc09yaWdpblJlY3QgPSBjb252ZXJ0RnJvbVBhcmVudFJlY3QoXG4gICAgICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25SZWN0XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJlZ2lzdHJ5LmZvckVhY2goZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcbiAgICAgICAgICBvYnNlcnZlci5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3NzT3JpZ2luVXBkYXRlclxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIG1vZGUuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5fcmVzZXRDcm9zc09yaWdpblVwZGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBjcm9zc09yaWdpblVwZGF0ZXIgPSBudWxsXG4gICAgY3Jvc3NPcmlnaW5SZWN0ID0gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYmFzZWQgb25cbiAgICogdGhlIHRocmVzaG9sZHMgdmFsdWVzLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdmFyIGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkID0gdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnNvbWUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudCA9PSB0YXJnZXRcbiAgICB9KVxuXG4gICAgaWYgKGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoISh0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVUeXBlID09IDEpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIEVsZW1lbnQnKVxuICAgIH1cblxuICAgIHRoaXMuX3JlZ2lzdGVySW5zdGFuY2UoKVxuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5wdXNoKHsgZWxlbWVudDogdGFyZ2V0LCBlbnRyeTogbnVsbCB9KVxuICAgIHRoaXMuX21vbml0b3JJbnRlcnNlY3Rpb25zKHRhcmdldC5vd25lckRvY3VtZW50KVxuICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucygpXG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQgIT0gdGFyZ2V0XG4gICAgfSlcbiAgICB0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKHRhcmdldC5vd25lckRvY3VtZW50KVxuICAgIGlmICh0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuX3VucmVnaXN0ZXJJbnN0YW5jZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIG9ic2VydmluZyBhbGwgdGFyZ2V0IGVsZW1lbnRzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW11cbiAgICB0aGlzLl91bm1vbml0b3JBbGxJbnRlcnNlY3Rpb25zKClcbiAgICB0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW55IHF1ZXVlIGVudHJpZXMgdGhhdCBoYXZlIG5vdCB5ZXQgYmVlbiByZXBvcnRlZCB0byB0aGVcbiAgICogY2FsbGJhY2sgYW5kIGNsZWFycyB0aGUgcXVldWUuIFRoaXMgY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogY2FsbGJhY2sgdG8gb2J0YWluIHRoZSBhYnNvbHV0ZSBtb3N0IHVwLXRvLWRhdGUgaW50ZXJzZWN0aW9uIGluZm9ybWF0aW9uLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIGN1cnJlbnRseSBxdWV1ZWQgZW50cmllcy5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS50YWtlUmVjb3JkcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWNvcmRzID0gdGhpcy5fcXVldWVkRW50cmllcy5zbGljZSgpXG4gICAgdGhpcy5fcXVldWVkRW50cmllcyA9IFtdXG4gICAgcmV0dXJuIHJlY29yZHNcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIHRoZSB0aHJlc2hvbGQgdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdCBhbmRcbiAgICogcmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB1bmlxdWUgdGhyZXNob2xkIHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBub3RcbiAgICogYmV0d2VlbiAwIGFuZCAxIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7QXJyYXl8bnVtYmVyPX0gb3B0X3RocmVzaG9sZCBBbiBvcHRpb25hbCB0aHJlc2hvbGQgdmFsdWUgb3JcbiAgICogICAgIGEgbGlzdCBvZiB0aHJlc2hvbGQgdmFsdWVzLCBkZWZhdWx0aW5nIHRvIFswXS5cbiAgICogQHJldHVybiB7QXJyYXl9IEEgc29ydGVkIGxpc3Qgb2YgdW5pcXVlIGFuZCB2YWxpZCB0aHJlc2hvbGQgdmFsdWVzLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9pbml0VGhyZXNob2xkcyA9IGZ1bmN0aW9uKG9wdF90aHJlc2hvbGQpIHtcbiAgICB2YXIgdGhyZXNob2xkID0gb3B0X3RocmVzaG9sZCB8fCBbMF1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZXNob2xkKSkgdGhyZXNob2xkID0gW3RocmVzaG9sZF1cblxuICAgIHJldHVybiB0aHJlc2hvbGQuc29ydCgpLmZpbHRlcihmdW5jdGlvbih0LCBpLCBhKSB7XG4gICAgICBpZiAodHlwZW9mIHQgIT09ICdudW1iZXInIHx8IGlzTmFOKHQpIHx8IHQgPCAwIHx8IHQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAndGhyZXNob2xkIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZWx5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gdCAhPT0gYVtpIC0gMV1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgdGhlIHJvb3RNYXJnaW4gdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgZm91ciBtYXJnaW4gdmFsdWVzIGFzIGFuIG9iamVjdCBjb250YWluaW5nXG4gICAqIHRoZSB2YWx1ZSBhbmQgdW5pdCBwcm9wZXJ0aWVzLiBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgbm90IHByb3Blcmx5XG4gICAqIGZvcm1hdHRlZCBvciB1c2UgYSB1bml0IG90aGVyIHRoYW4gcHggb3IgJSwgYW5kIGVycm9yIGlzIHRocm93bi5cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfcm9vdE1hcmdpbiBBbiBvcHRpb25hbCByb290TWFyZ2luIHZhbHVlLFxuICAgKiAgICAgZGVmYXVsdGluZyB0byAnMHB4Jy5cbiAgICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn0gQW4gYXJyYXkgb2YgbWFyZ2luIG9iamVjdHMgd2l0aCB0aGUga2V5c1xuICAgKiAgICAgdmFsdWUgYW5kIHVuaXQuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3BhcnNlUm9vdE1hcmdpbiA9IGZ1bmN0aW9uKG9wdF9yb290TWFyZ2luKSB7XG4gICAgdmFyIG1hcmdpblN0cmluZyA9IG9wdF9yb290TWFyZ2luIHx8ICcwcHgnXG4gICAgdmFyIG1hcmdpbnMgPSBtYXJnaW5TdHJpbmcuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgICB2YXIgcGFydHMgPSAvXigtP1xcZCpcXC4/XFxkKykocHh8JSkkLy5leGVjKG1hcmdpbilcbiAgICAgIGlmICghcGFydHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyb290TWFyZ2luIG11c3QgYmUgc3BlY2lmaWVkIGluIHBpeGVscyBvciBwZXJjZW50JylcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHZhbHVlOiBwYXJzZUZsb2F0KHBhcnRzWzFdKSwgdW5pdDogcGFydHNbMl0gfVxuICAgIH0pXG5cbiAgICAvLyBIYW5kbGVzIHNob3J0aGFuZC5cbiAgICBtYXJnaW5zWzFdID0gbWFyZ2luc1sxXSB8fCBtYXJnaW5zWzBdXG4gICAgbWFyZ2luc1syXSA9IG1hcmdpbnNbMl0gfHwgbWFyZ2luc1swXVxuICAgIG1hcmdpbnNbM10gPSBtYXJnaW5zWzNdIHx8IG1hcmdpbnNbMV1cblxuICAgIHJldHVybiBtYXJnaW5zXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGlmIHRoZSBwb2xsaW5nIGlzIG5vdCBhbHJlYWR5XG4gICAqIGhhcHBlbmluZywgYW5kIGlmIHRoZSBwYWdlJ3MgdmlzaWJpbGl0eSBzdGF0ZSBpcyB2aXNpYmxlLlxuICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX21vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oZG9jKSB7XG4gICAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0Vmlld1xuICAgIGlmICghd2luKSB7XG4gICAgICAvLyBBbHJlYWR5IGRlc3Ryb3llZC5cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5pbmRleE9mKGRvYykgIT0gLTEpIHtcbiAgICAgIC8vIEFscmVhZHkgbW9uaXRvcmluZy5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFByaXZhdGUgc3RhdGUgZm9yIG1vbml0b3JpbmcuXG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zXG4gICAgdmFyIG1vbml0b3JpbmdJbnRlcnZhbCA9IG51bGxcbiAgICB2YXIgZG9tT2JzZXJ2ZXIgPSBudWxsXG5cbiAgICAvLyBJZiBhIHBvbGwgaW50ZXJ2YWwgaXMgc2V0LCB1c2UgcG9sbGluZyBpbnN0ZWFkIG9mIGxpc3RlbmluZyB0b1xuICAgIC8vIHJlc2l6ZSBhbmQgc2Nyb2xsIGV2ZW50cyBvciBET00gbXV0YXRpb25zLlxuICAgIGlmICh0aGlzLlBPTExfSU5URVJWQUwpIHtcbiAgICAgIG1vbml0b3JpbmdJbnRlcnZhbCA9IHdpbi5zZXRJbnRlcnZhbChjYWxsYmFjaywgdGhpcy5QT0xMX0lOVEVSVkFMKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRFdmVudCh3aW4sICdyZXNpemUnLCBjYWxsYmFjaywgdHJ1ZSlcbiAgICAgIGFkZEV2ZW50KGRvYywgJ3Njcm9sbCcsIGNhbGxiYWNrLCB0cnVlKVxuICAgICAgaWYgKHRoaXMuVVNFX01VVEFUSU9OX09CU0VSVkVSICYmICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW4pIHtcbiAgICAgICAgZG9tT2JzZXJ2ZXIgPSBuZXcgd2luLk11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spXG4gICAgICAgIGRvbU9ic2VydmVyLm9ic2VydmUoZG9jLCB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5wdXNoKGRvYylcbiAgICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAvLyBHZXQgdGhlIHdpbmRvdyBvYmplY3QgYWdhaW4uIFdoZW4gYSBmcmllbmRseSBpZnJhbWUgaXMgZGVzdHJveWVkLCBpdFxuICAgICAgLy8gd2lsbCBiZSBudWxsLlxuICAgICAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0Vmlld1xuXG4gICAgICBpZiAod2luKSB7XG4gICAgICAgIGlmIChtb25pdG9yaW5nSW50ZXJ2YWwpIHtcbiAgICAgICAgICB3aW4uY2xlYXJJbnRlcnZhbChtb25pdG9yaW5nSW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlRXZlbnQod2luLCAncmVzaXplJywgY2FsbGJhY2ssIHRydWUpXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUV2ZW50KGRvYywgJ3Njcm9sbCcsIGNhbGxiYWNrLCB0cnVlKVxuICAgICAgaWYgKGRvbU9ic2VydmVyKSB7XG4gICAgICAgIGRvbU9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBBbHNvIG1vbml0b3IgdGhlIHBhcmVudC5cbiAgICB2YXIgcm9vdERvYyA9XG4gICAgICAodGhpcy5yb290ICYmICh0aGlzLnJvb3Qub3duZXJEb2N1bWVudCB8fCB0aGlzLnJvb3QpKSB8fCBkb2N1bWVudFxuICAgIGlmIChkb2MgIT0gcm9vdERvYykge1xuICAgICAgdmFyIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGRvYylcbiAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICB0aGlzLl9tb25pdG9ySW50ZXJzZWN0aW9ucyhmcmFtZS5vd25lckRvY3VtZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oZG9jKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5pbmRleE9mKGRvYylcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciByb290RG9jID1cbiAgICAgICh0aGlzLnJvb3QgJiYgKHRoaXMucm9vdC5vd25lckRvY3VtZW50IHx8IHRoaXMucm9vdCkpIHx8IGRvY3VtZW50XG5cbiAgICAvLyBDaGVjayBpZiBhbnkgZGVwZW5kZW50IHRhcmdldHMgYXJlIHN0aWxsIHJlbWFpbmluZy5cbiAgICB2YXIgaGFzRGVwZW5kZW50VGFyZ2V0cyA9IHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBpdGVtRG9jID0gaXRlbS5lbGVtZW50Lm93bmVyRG9jdW1lbnRcbiAgICAgIC8vIFRhcmdldCBpcyBpbiB0aGlzIGNvbnRleHQuXG4gICAgICBpZiAoaXRlbURvYyA9PSBkb2MpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIC8vIFRhcmdldCBpcyBuZXN0ZWQgaW4gdGhpcyBjb250ZXh0LlxuICAgICAgd2hpbGUgKGl0ZW1Eb2MgJiYgaXRlbURvYyAhPSByb290RG9jKSB7XG4gICAgICAgIHZhciBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChpdGVtRG9jKVxuICAgICAgICBpdGVtRG9jID0gZnJhbWUgJiYgZnJhbWUub3duZXJEb2N1bWVudFxuICAgICAgICBpZiAoaXRlbURvYyA9PSBkb2MpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuICAgIGlmIChoYXNEZXBlbmRlbnRUYXJnZXRzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBVbnN1YnNjcmliZS5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzW2luZGV4XVxuICAgIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuX21vbml0b3JpbmdVbnN1YnNjcmliZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHVuc3Vic2NyaWJlKClcblxuICAgIC8vIEFsc28gdW5tb25pdG9yIHRoZSBwYXJlbnQuXG4gICAgaWYgKGRvYyAhPSByb290RG9jKSB7XG4gICAgICB2YXIgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZG9jKVxuICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgIHRoaXMuX3VubW9uaXRvckludGVyc2VjdGlvbnMoZnJhbWUub3duZXJEb2N1bWVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2NcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5tb25pdG9yQWxsSW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB1bnN1YnNjcmliZXMgPSB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLnNsaWNlKDApXG4gICAgdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5sZW5ndGggPSAwXG4gICAgdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcy5sZW5ndGggPSAwXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bnN1YnNjcmliZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHVuc3Vic2NyaWJlc1tpXSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjYW5zIGVhY2ggb2JzZXJ2YXRpb24gdGFyZ2V0IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBhbmQgYWRkcyB0aGVtXG4gICAqIHRvIHRoZSBpbnRlcm5hbCBlbnRyaWVzIHF1ZXVlLiBJZiBuZXcgZW50cmllcyBhcmUgZm91bmQsIGl0XG4gICAqIHNjaGVkdWxlcyB0aGUgY2FsbGJhY2sgdG8gYmUgaW52b2tlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QgJiYgY3Jvc3NPcmlnaW5VcGRhdGVyICYmICFjcm9zc09yaWdpblJlY3QpIHtcbiAgICAgIC8vIENyb3NzIG9yaWdpbiBtb25pdG9yaW5nLCBidXQgbm8gaW5pdGlhbCBkYXRhIGF2YWlsYWJsZSB5ZXQuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgcm9vdElzSW5Eb20gPSB0aGlzLl9yb290SXNJbkRvbSgpXG4gICAgdmFyIHJvb3RSZWN0ID0gcm9vdElzSW5Eb20gPyB0aGlzLl9nZXRSb290UmVjdCgpIDogZ2V0RW1wdHlSZWN0KClcblxuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciB0YXJnZXQgPSBpdGVtLmVsZW1lbnRcbiAgICAgIHZhciB0YXJnZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRhcmdldClcbiAgICAgIHZhciByb290Q29udGFpbnNUYXJnZXQgPSB0aGlzLl9yb290Q29udGFpbnNUYXJnZXQodGFyZ2V0KVxuICAgICAgdmFyIG9sZEVudHJ5ID0gaXRlbS5lbnRyeVxuICAgICAgdmFyIGludGVyc2VjdGlvblJlY3QgPVxuICAgICAgICByb290SXNJbkRvbSAmJlxuICAgICAgICByb290Q29udGFpbnNUYXJnZXQgJiZcbiAgICAgICAgdGhpcy5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24odGFyZ2V0LCB0YXJnZXRSZWN0LCByb290UmVjdClcblxuICAgICAgdmFyIHJvb3RCb3VuZHMgPSBudWxsXG4gICAgICBpZiAoIXRoaXMuX3Jvb3RDb250YWluc1RhcmdldCh0YXJnZXQpKSB7XG4gICAgICAgIHJvb3RCb3VuZHMgPSBnZXRFbXB0eVJlY3QoKVxuICAgICAgfSBlbHNlIGlmICghY3Jvc3NPcmlnaW5VcGRhdGVyIHx8IHRoaXMucm9vdCkge1xuICAgICAgICByb290Qm91bmRzID0gcm9vdFJlY3RcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0VudHJ5ID0gKGl0ZW0uZW50cnkgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSh7XG4gICAgICAgIHRpbWU6IG5vdygpLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0OiB0YXJnZXRSZWN0LFxuICAgICAgICByb290Qm91bmRzOiByb290Qm91bmRzLFxuICAgICAgICBpbnRlcnNlY3Rpb25SZWN0OiBpbnRlcnNlY3Rpb25SZWN0XG4gICAgICB9KSlcblxuICAgICAgaWYgKCFvbGRFbnRyeSkge1xuICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpXG4gICAgICB9IGVsc2UgaWYgKHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCkge1xuICAgICAgICAvLyBJZiB0aGUgbmV3IGVudHJ5IGludGVyc2VjdGlvbiByYXRpbyBoYXMgY3Jvc3NlZCBhbnkgb2YgdGhlXG4gICAgICAgIC8vIHRocmVzaG9sZHMsIGFkZCBhIG5ldyBlbnRyeS5cbiAgICAgICAgaWYgKHRoaXMuX2hhc0Nyb3NzZWRUaHJlc2hvbGQob2xkRW50cnksIG5ld0VudHJ5KSkge1xuICAgICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHJvb3QgaXMgbm90IGluIHRoZSBET00gb3IgdGFyZ2V0IGlzIG5vdCBjb250YWluZWQgd2l0aGluXG4gICAgICAgIC8vIHJvb3QgYnV0IHRoZSBwcmV2aW91cyBlbnRyeSBmb3IgdGhpcyB0YXJnZXQgaGFkIGFuIGludGVyc2VjdGlvbixcbiAgICAgICAgLy8gYWRkIGEgbmV3IHJlY29yZCBpbmRpY2F0aW5nIHJlbW92YWwuXG4gICAgICAgIGlmIChvbGRFbnRyeSAmJiBvbGRFbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMpXG5cbiAgICBpZiAodGhpcy5fcXVldWVkRW50cmllcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2NhbGxiYWNrKHRoaXMudGFrZVJlY29yZHMoKSwgdGhpcylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhIHRhcmdldCBhbmQgcm9vdCByZWN0IGNvbXB1dGVzIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0aGVuXG4gICAqIGZvbGxvd2luZyB0aGUgYWxnb3JpdGhtIGluIHRoZSBzcGVjLlxuICAgKiBUT0RPKHBoaWxpcHdhbHRvbik6IGF0IHRoaXMgdGltZSBjbGlwLXBhdGggaXMgbm90IGNvbnNpZGVyZWQuXG4gICAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jY2FsY3VsYXRlLWludGVyc2VjdGlvbi1yZWN0LWFsZ29cbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBET00gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0UmVjdCBUaGUgYm91bmRpbmcgcmVjdCBvZiB0aGUgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gcm9vdFJlY3QgVGhlIGJvdW5kaW5nIHJlY3Qgb2YgdGhlIHJvb3QgYWZ0ZXIgYmVpbmdcbiAgICogICAgIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICAgKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgZmluYWwgaW50ZXJzZWN0aW9uIHJlY3Qgb2JqZWN0IG9yIHVuZGVmaW5lZCBpZiBub1xuICAgKiAgICAgaW50ZXJzZWN0aW9uIGlzIGZvdW5kLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKFxuICAgIHRhcmdldCxcbiAgICB0YXJnZXRSZWN0LFxuICAgIHJvb3RSZWN0XG4gICkge1xuICAgIC8vIElmIHRoZSBlbGVtZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuXG5cbiAgICB2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHRhcmdldFJlY3RcbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0YXJnZXQpXG4gICAgdmFyIGF0Um9vdCA9IGZhbHNlXG5cbiAgICB3aGlsZSAoIWF0Um9vdCAmJiBwYXJlbnQpIHtcbiAgICAgIHZhciBwYXJlbnRSZWN0ID0gbnVsbFxuICAgICAgdmFyIHBhcmVudENvbXB1dGVkU3R5bGUgPVxuICAgICAgICBwYXJlbnQubm9kZVR5cGUgPT0gMSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkgOiB7fVxuXG4gICAgICAvLyBJZiB0aGUgcGFyZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cbiAgICAgIGlmIChwYXJlbnRDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm4gbnVsbFxuXG4gICAgICBpZiAocGFyZW50ID09IHRoaXMucm9vdCB8fCBwYXJlbnQubm9kZVR5cGUgPT0gLyogRE9DVU1FTlQgKi8gOSkge1xuICAgICAgICBhdFJvb3QgPSB0cnVlXG4gICAgICAgIGlmIChwYXJlbnQgPT0gdGhpcy5yb290IHx8IHBhcmVudCA9PSBkb2N1bWVudCkge1xuICAgICAgICAgIGlmIChjcm9zc09yaWdpblVwZGF0ZXIgJiYgIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhY3Jvc3NPcmlnaW5SZWN0IHx8XG4gICAgICAgICAgICAgIChjcm9zc09yaWdpblJlY3Qud2lkdGggPT0gMCAmJiBjcm9zc09yaWdpblJlY3QuaGVpZ2h0ID09IDApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gQSAwLXNpemUgY3Jvc3Mtb3JpZ2luIGludGVyc2VjdGlvbiBtZWFucyBuby1pbnRlcnNlY3Rpb24uXG4gICAgICAgICAgICAgIHBhcmVudCA9IG51bGxcbiAgICAgICAgICAgICAgcGFyZW50UmVjdCA9IG51bGxcbiAgICAgICAgICAgICAgaW50ZXJzZWN0aW9uUmVjdCA9IG51bGxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcmVudFJlY3QgPSBjcm9zc09yaWdpblJlY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50UmVjdCA9IHJvb3RSZWN0XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlJ3MgYSBmcmFtZSB0aGF0IGNhbiBiZSBuYXZpZ2F0ZWQgdG8uXG4gICAgICAgICAgdmFyIGZyYW1lID0gZ2V0UGFyZW50Tm9kZShwYXJlbnQpXG4gICAgICAgICAgdmFyIGZyYW1lUmVjdCA9IGZyYW1lICYmIGdldEJvdW5kaW5nQ2xpZW50UmVjdChmcmFtZSlcbiAgICAgICAgICB2YXIgZnJhbWVJbnRlcnNlY3QgPVxuICAgICAgICAgICAgZnJhbWUgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uKGZyYW1lLCBmcmFtZVJlY3QsIHJvb3RSZWN0KVxuICAgICAgICAgIGlmIChmcmFtZVJlY3QgJiYgZnJhbWVJbnRlcnNlY3QpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IGZyYW1lXG4gICAgICAgICAgICBwYXJlbnRSZWN0ID0gY29udmVydEZyb21QYXJlbnRSZWN0KGZyYW1lUmVjdCwgZnJhbWVJbnRlcnNlY3QpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudCA9IG51bGxcbiAgICAgICAgICAgIGludGVyc2VjdGlvblJlY3QgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBub24tdmlzaWJsZSBvdmVyZmxvdywgYW5kIGl0J3Mgbm90IHRoZSA8Ym9keT5cbiAgICAgICAgLy8gb3IgPGh0bWw+IGVsZW1lbnQsIHVwZGF0ZSB0aGUgaW50ZXJzZWN0aW9uIHJlY3QuXG4gICAgICAgIC8vIE5vdGU6IDxib2R5PiBhbmQgPGh0bWw+IGNhbm5vdCBiZSBjbGlwcGVkIHRvIGEgcmVjdCB0aGF0J3Mgbm90IGFsc29cbiAgICAgICAgLy8gdGhlIGRvY3VtZW50IHJlY3QsIHNvIG5vIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBpbnRlcnNlY3Rpb24uXG4gICAgICAgIHZhciBkb2MgPSBwYXJlbnQub3duZXJEb2N1bWVudFxuICAgICAgICBpZiAoXG4gICAgICAgICAgcGFyZW50ICE9IGRvYy5ib2R5ICYmXG4gICAgICAgICAgcGFyZW50ICE9IGRvYy5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgICBwYXJlbnRDb21wdXRlZFN0eWxlLm92ZXJmbG93ICE9ICd2aXNpYmxlJ1xuICAgICAgICApIHtcbiAgICAgICAgICBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBlaXRoZXIgb2YgdGhlIGFib3ZlIGNvbmRpdGlvbmFscyBzZXQgYSBuZXcgcGFyZW50UmVjdCxcbiAgICAgIC8vIGNhbGN1bGF0ZSBuZXcgaW50ZXJzZWN0aW9uIGRhdGEuXG4gICAgICBpZiAocGFyZW50UmVjdCkge1xuICAgICAgICBpbnRlcnNlY3Rpb25SZWN0ID0gY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24ocGFyZW50UmVjdCwgaW50ZXJzZWN0aW9uUmVjdClcbiAgICAgIH1cbiAgICAgIGlmICghaW50ZXJzZWN0aW9uUmVjdCkgYnJlYWtcbiAgICAgIHBhcmVudCA9IHBhcmVudCAmJiBnZXRQYXJlbnROb2RlKHBhcmVudClcbiAgICB9XG4gICAgcmV0dXJuIGludGVyc2VjdGlvblJlY3RcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByb290IHJlY3QgYWZ0ZXIgYmVpbmcgZXhwYW5kZWQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBleHBhbmRlZCByb290IHJlY3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2dldFJvb3RSZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJvb3RSZWN0XG4gICAgaWYgKHRoaXMucm9vdCAmJiAhaXNEb2ModGhpcy5yb290KSkge1xuICAgICAgcm9vdFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGhpcy5yb290KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgPGh0bWw+Lzxib2R5PiBpbnN0ZWFkIG9mIHdpbmRvdyBzaW5jZSBzY3JvbGwgYmFycyBhZmZlY3Qgc2l6ZS5cbiAgICAgIHZhciBkb2MgPSBpc0RvYyh0aGlzLnJvb3QpID8gdGhpcy5yb290IDogZG9jdW1lbnRcbiAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudFxuICAgICAgdmFyIGJvZHkgPSBkb2MuYm9keVxuICAgICAgcm9vdFJlY3QgPSB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgd2lkdGg6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgYm90dG9tOiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodCxcbiAgICAgICAgaGVpZ2h0OiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kUmVjdEJ5Um9vdE1hcmdpbihyb290UmVjdClcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIGEgcmVjdCBhbmQgZXhwYW5kcyBpdCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IHJlY3QgVGhlIHJlY3Qgb2JqZWN0IHRvIGV4cGFuZC5cbiAgICogQHJldHVybiB7Q2xpZW50UmVjdH0gVGhlIGV4cGFuZGVkIHJlY3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4gPSBmdW5jdGlvbihyZWN0KSB7XG4gICAgdmFyIG1hcmdpbnMgPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzLm1hcChmdW5jdGlvbihtYXJnaW4sIGkpIHtcbiAgICAgIHJldHVybiBtYXJnaW4udW5pdCA9PSAncHgnXG4gICAgICAgID8gbWFyZ2luLnZhbHVlXG4gICAgICAgIDogKG1hcmdpbi52YWx1ZSAqIChpICUgMiA/IHJlY3Qud2lkdGggOiByZWN0LmhlaWdodCkpIC8gMTAwXG4gICAgfSlcbiAgICB2YXIgbmV3UmVjdCA9IHtcbiAgICAgIHRvcDogcmVjdC50b3AgLSBtYXJnaW5zWzBdLFxuICAgICAgcmlnaHQ6IHJlY3QucmlnaHQgKyBtYXJnaW5zWzFdLFxuICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSArIG1hcmdpbnNbMl0sXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgLSBtYXJnaW5zWzNdXG4gICAgfVxuICAgIG5ld1JlY3Qud2lkdGggPSBuZXdSZWN0LnJpZ2h0IC0gbmV3UmVjdC5sZWZ0XG4gICAgbmV3UmVjdC5oZWlnaHQgPSBuZXdSZWN0LmJvdHRvbSAtIG5ld1JlY3QudG9wXG5cbiAgICByZXR1cm4gbmV3UmVjdFxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYW4gb2xkIGFuZCBuZXcgZW50cnkgYW5kIHJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlXG4gICAqIHRocmVzaG9sZCB2YWx1ZXMgaGFzIGJlZW4gY3Jvc3NlZC5cbiAgICogQHBhcmFtIHs/SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gb2xkRW50cnkgVGhlIHByZXZpb3VzIGVudHJ5IGZvciBhXG4gICAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQgb3IgbnVsbCBpZiBubyBwcmV2aW91cyBlbnRyeSBleGlzdHMuXG4gICAqIEBwYXJhbSB7SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gbmV3RW50cnkgVGhlIGN1cnJlbnQgZW50cnkgZm9yIGFcbiAgICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGEgYW55IHRocmVzaG9sZCBoYXMgYmVlbiBjcm9zc2VkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9oYXNDcm9zc2VkVGhyZXNob2xkID0gZnVuY3Rpb24oXG4gICAgb2xkRW50cnksXG4gICAgbmV3RW50cnlcbiAgKSB7XG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgZWFzaWVyLCBhbiBlbnRyeSB0aGF0IGhhcyBhIHJhdGlvIG9mIDBcbiAgICAvLyBidXQgZG9lcyBub3QgYWN0dWFsbHkgaW50ZXJzZWN0IGlzIGdpdmVuIGEgdmFsdWUgb2YgLTFcbiAgICB2YXIgb2xkUmF0aW8gPVxuICAgICAgb2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcgPyBvbGRFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwIDogLTFcbiAgICB2YXIgbmV3UmF0aW8gPSBuZXdFbnRyeS5pc0ludGVyc2VjdGluZ1xuICAgICAgPyBuZXdFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwXG4gICAgICA6IC0xXG5cbiAgICAvLyBJZ25vcmUgdW5jaGFuZ2VkIHJhdGlvc1xuICAgIGlmIChvbGRSYXRpbyA9PT0gbmV3UmF0aW8pIHJldHVyblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRocmVzaG9sZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSB0aGlzLnRocmVzaG9sZHNbaV1cblxuICAgICAgLy8gUmV0dXJuIHRydWUgaWYgYW4gZW50cnkgbWF0Y2hlcyBhIHRocmVzaG9sZCBvciBpZiB0aGUgbmV3IHJhdGlvXG4gICAgICAvLyBhbmQgdGhlIG9sZCByYXRpbyBhcmUgb24gdGhlIG9wcG9zaXRlIHNpZGVzIG9mIGEgdGhyZXNob2xkLlxuICAgICAgaWYgKFxuICAgICAgICB0aHJlc2hvbGQgPT0gb2xkUmF0aW8gfHxcbiAgICAgICAgdGhyZXNob2xkID09IG5ld1JhdGlvIHx8XG4gICAgICAgIHRocmVzaG9sZCA8IG9sZFJhdGlvICE9PSB0aHJlc2hvbGQgPCBuZXdSYXRpb1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdElzSW5Eb20gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMucm9vdCB8fCBjb250YWluc0RlZXAoZG9jdW1lbnQsIHRoaXMucm9vdClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgZWxlbWVudCB0byBjaGVjay5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yb290Q29udGFpbnNUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB2YXIgcm9vdERvYyA9XG4gICAgICAodGhpcy5yb290ICYmICh0aGlzLnJvb3Qub3duZXJEb2N1bWVudCB8fCB0aGlzLnJvb3QpKSB8fCBkb2N1bWVudFxuICAgIHJldHVybiAoXG4gICAgICBjb250YWluc0RlZXAocm9vdERvYywgdGFyZ2V0KSAmJlxuICAgICAgKCF0aGlzLnJvb3QgfHwgcm9vdERvYyA9PSB0YXJnZXQub3duZXJEb2N1bWVudClcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgaW5zdGFuY2UgdG8gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeSBpZiBpdCBpc24ndFxuICAgKiBhbHJlYWR5IHByZXNlbnQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3JlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocmVnaXN0cnkuaW5kZXhPZih0aGlzKSA8IDApIHtcbiAgICAgIHJlZ2lzdHJ5LnB1c2godGhpcylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgaW5zdGFuY2UgZnJvbSB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bnJlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZXggPSByZWdpc3RyeS5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ICE9IC0xKSByZWdpc3RyeS5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBwZXJmb3JtYW5jZS5ub3coKSBtZXRob2Qgb3IgbnVsbCBpbiBicm93c2Vyc1xuICAgKiB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEFQSS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBwYWdlIHdhcyByZXF1ZXN0ZWQuXG4gICAqL1xuICBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZS5ub3cgJiYgcGVyZm9ybWFuY2Uubm93KClcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvdHRsZXMgYSBmdW5jdGlvbiBhbmQgZGVsYXlzIGl0cyBleGVjdXRpb24sIHNvIGl0J3Mgb25seSBjYWxsZWQgYXQgbW9zdFxuICAgKiBvbmNlIHdpdGhpbiBhIGdpdmVuIHRpbWUgcGVyaW9kLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IFRoZSBhbW91bnQgb2YgdGltZSB0aGF0IG11c3QgcGFzcyBiZWZvcmUgdGhlXG4gICAqICAgICBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIGFnYWluLlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHRocm90dGxlZCBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIHRocm90dGxlKGZuLCB0aW1lb3V0KSB7XG4gICAgdmFyIHRpbWVyID0gbnVsbFxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGltZXIpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZuKClcbiAgICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgfSwgdGltZW91dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBoYW5kbGVyIHRvIGEgRE9NIG5vZGUgZW5zdXJpbmcgY3Jvc3MtYnJvd3NlciBjb21wYXRpYmlsaXR5LlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIERPTSBub2RlIHRvIGFkZCB0aGUgZXZlbnQgaGFuZGxlciB0by5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byBhZGQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgT3B0aW9uYWxseSBhZGRzIHRoZSBldmVuIHRvIHRoZSBjYXB0dXJlXG4gICAqICAgICBwaGFzZS4gTm90ZTogdGhpcyBvbmx5IHdvcmtzIGluIG1vZGVybiBicm93c2Vycy5cbiAgICovXG4gIGZ1bmN0aW9uIGFkZEV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZS5hdHRhY2hFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZuKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgcHJldmlvdXNseSBhZGRlZCBldmVudCBoYW5kbGVyIGZyb20gYSBET00gbm9kZS5cbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBET00gbm9kZSB0byByZW1vdmUgdGhlIGV2ZW50IGhhbmRsZXIgZnJvbS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byByZW1vdmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgSWYgdGhlIGV2ZW50IGhhbmRsZXIgd2FzIGFkZGVkIHdpdGggdGhpc1xuICAgKiAgICAgZmxhZyBzZXQgdG8gdHJ1ZSwgaXQgc2hvdWxkIGJlIHNldCB0byB0cnVlIGhlcmUgaW4gb3JkZXIgdG8gcmVtb3ZlIGl0LlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSB8fCBmYWxzZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlLmRldGF0Y2hFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5kZXRhdGNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gdHdvIHJlY3Qgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QxIFRoZSBmaXJzdCByZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdDIgVGhlIHNlY29uZCByZWN0LlxuICAgKiBAcmV0dXJuIHs/T2JqZWN0fD9DbGllbnRSZWN0fSBUaGUgaW50ZXJzZWN0aW9uIHJlY3Qgb3IgdW5kZWZpbmVkIGlmIG5vXG4gICAqICAgICBpbnRlcnNlY3Rpb24gaXMgZm91bmQuXG4gICAqL1xuICBmdW5jdGlvbiBjb21wdXRlUmVjdEludGVyc2VjdGlvbihyZWN0MSwgcmVjdDIpIHtcbiAgICB2YXIgdG9wID0gTWF0aC5tYXgocmVjdDEudG9wLCByZWN0Mi50b3ApXG4gICAgdmFyIGJvdHRvbSA9IE1hdGgubWluKHJlY3QxLmJvdHRvbSwgcmVjdDIuYm90dG9tKVxuICAgIHZhciBsZWZ0ID0gTWF0aC5tYXgocmVjdDEubGVmdCwgcmVjdDIubGVmdClcbiAgICB2YXIgcmlnaHQgPSBNYXRoLm1pbihyZWN0MS5yaWdodCwgcmVjdDIucmlnaHQpXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0XG4gICAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcFxuXG4gICAgcmV0dXJuIChcbiAgICAgICh3aWR0aCA+PSAwICYmXG4gICAgICAgIGhlaWdodCA+PSAwICYmIHtcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICBib3R0b206IGJvdHRvbSxcbiAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfSkgfHxcbiAgICAgIG51bGxcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogU2hpbXMgdGhlIG5hdGl2ZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBvbGRlciBJRS5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZyByZWN0IHRvIGdldC5cbiAgICogQHJldHVybiB7RE9NUmVjdHxDbGllbnRSZWN0fSBUaGUgKHBvc3NpYmx5IHNoaW1tZWQpIHJlY3Qgb2YgdGhlIGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwpIHtcbiAgICB2YXIgcmVjdFxuXG4gICAgdHJ5IHtcbiAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWdub3JlIFdpbmRvd3MgNyBJRTExIFwiVW5zcGVjaWZpZWQgZXJyb3JcIlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9wdWxsLzIwNVxuICAgIH1cblxuICAgIGlmICghcmVjdCkgcmV0dXJuIGdldEVtcHR5UmVjdCgpXG5cbiAgICAvLyBPbGRlciBJRVxuICAgIGlmICghKHJlY3Qud2lkdGggJiYgcmVjdC5oZWlnaHQpKSB7XG4gICAgICByZWN0ID0ge1xuICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICAgICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlbXB0eSByZWN0IG9iamVjdC4gQW4gZW1wdHkgcmVjdCBpcyByZXR1cm5lZCB3aGVuIGFuIGVsZW1lbnRcbiAgICogaXMgbm90IGluIHRoZSBET00uXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBlbXB0eSByZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RW1wdHlSZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmUgdGhhdCB0aGUgcmVzdWx0IGhhcyBhbGwgb2YgdGhlIG5lY2Vzc2FyeSBmaWVsZHMgb2YgdGhlIERPTVJlY3QuXG4gICAqIFNwZWNpZmljYWxseSB0aGlzIGVuc3VyZXMgdGhhdCBgeGAgYW5kIGB5YCBmaWVsZHMgYXJlIHNldC5cbiAgICpcbiAgICogQHBhcmFtIHs/RE9NUmVjdHw/Q2xpZW50UmVjdH0gcmVjdFxuICAgKiBAcmV0dXJuIHs/RE9NUmVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGVuc3VyZURPTVJlY3QocmVjdCkge1xuICAgIC8vIEEgYERPTVJlY3RgIG9iamVjdCBoYXMgYHhgIGFuZCBgeWAgZmllbGRzLlxuICAgIGlmICghcmVjdCB8fCAneCcgaW4gcmVjdCkge1xuICAgICAgcmV0dXJuIHJlY3RcbiAgICB9XG4gICAgLy8gQSBJRSdzIGBDbGllbnRSZWN0YCB0eXBlIGRvZXMgbm90IGhhdmUgYHhgIGFuZCBgeWAuIFRoZSBzYW1lIGlzIHRoZSBjYXNlXG4gICAgLy8gZm9yIGludGVybmFsbHkgY2FsY3VsYXRlZCBSZWN0IG9iamVjdHMuIEZvciB0aGUgcHVycG9zZXMgb2ZcbiAgICAvLyBgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJgLCBpdCdzIHN1ZmZpY2llbnQgdG8gc2ltcGx5IG1pcnJvciBgbGVmdGAgYW5kIGB0b3BgXG4gICAgLy8gZm9yIHRoZXNlIGZpZWxkcy5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgIHk6IHJlY3QudG9wLFxuICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgIHg6IHJlY3QubGVmdCxcbiAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludmVydHMgdGhlIGludGVyc2VjdGlvbiBhbmQgYm91bmRpbmcgcmVjdCBmcm9tIHRoZSBwYXJlbnQgKGZyYW1lKSBCQ1IgdG9cbiAgICogdGhlIGxvY2FsIEJDUiBzcGFjZS5cbiAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IHBhcmVudEJvdW5kaW5nUmVjdCBUaGUgcGFyZW50J3MgYm91bmQgY2xpZW50IHJlY3QuXG4gICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0IFRoZSBwYXJlbnQncyBvd24gaW50ZXJzZWN0aW9uIHJlY3QuXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBsb2NhbCByb290IGJvdW5kaW5nIHJlY3QgZm9yIHRoZSBwYXJlbnQncyBjaGlsZHJlbi5cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnZlcnRGcm9tUGFyZW50UmVjdChwYXJlbnRCb3VuZGluZ1JlY3QsIHBhcmVudEludGVyc2VjdGlvblJlY3QpIHtcbiAgICB2YXIgdG9wID0gcGFyZW50SW50ZXJzZWN0aW9uUmVjdC50b3AgLSBwYXJlbnRCb3VuZGluZ1JlY3QudG9wXG4gICAgdmFyIGxlZnQgPSBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LmxlZnQgLSBwYXJlbnRCb3VuZGluZ1JlY3QubGVmdFxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCxcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICBoZWlnaHQ6IHBhcmVudEludGVyc2VjdGlvblJlY3QuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHBhcmVudEludGVyc2VjdGlvblJlY3Qud2lkdGgsXG4gICAgICBib3R0b206IHRvcCArIHBhcmVudEludGVyc2VjdGlvblJlY3QuaGVpZ2h0LFxuICAgICAgcmlnaHQ6IGxlZnQgKyBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LndpZHRoXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgYSBwYXJlbnQgZWxlbWVudCBjb250YWlucyBhIGNoaWxkIGVsZW1lbnQgKGluY2x1ZGluZyBpbnNpZGVcbiAgICogc2hhZG93IERPTSkuXG4gICAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IFRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtOb2RlfSBjaGlsZCBUaGUgY2hpbGQgZWxlbWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGFyZW50IG5vZGUgY29udGFpbnMgdGhlIGNoaWxkIG5vZGUuXG4gICAqL1xuICBmdW5jdGlvbiBjb250YWluc0RlZXAocGFyZW50LCBjaGlsZCkge1xuICAgIHZhciBub2RlID0gY2hpbGRcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKG5vZGUgPT0gcGFyZW50KSByZXR1cm4gdHJ1ZVxuXG4gICAgICBub2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBwYXJlbnQgbm9kZSBvZiBhbiBlbGVtZW50IG9yIGl0cyBob3N0IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBub2RlXG4gICAqIGlzIGEgc2hhZG93IHJvb3QuXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB3aG9zZSBwYXJlbnQgdG8gZ2V0LlxuICAgKiBAcmV0dXJuIHtOb2RlfG51bGx9IFRoZSBwYXJlbnQgbm9kZSBvciBudWxsIGlmIG5vIHBhcmVudCBleGlzdHMuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKG5vZGUpIHtcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlXG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSAvKiBET0NVTUVOVCAqLyA5ICYmIG5vZGUgIT0gZG9jdW1lbnQpIHtcbiAgICAgIC8vIElmIHRoaXMgbm9kZSBpcyBhIGRvY3VtZW50IG5vZGUsIGxvb2sgZm9yIHRoZSBlbWJlZGRpbmcgZnJhbWUuXG4gICAgICByZXR1cm4gZ2V0RnJhbWVFbGVtZW50KG5vZGUpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHBhcmVudCBoYXMgZWxlbWVudCB0aGF0IGlzIGFzc2lnbmVkIHRocm91Z2ggc2hhZG93IHJvb3Qgc2xvdFxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LmFzc2lnbmVkU2xvdC5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT0gMTEgJiYgcGFyZW50Lmhvc3QpIHtcbiAgICAgIC8vIElmIHRoZSBwYXJlbnQgaXMgYSBzaGFkb3cgcm9vdCwgcmV0dXJuIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgICByZXR1cm4gcGFyZW50Lmhvc3RcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGBub2RlYCBpcyBhIERvY3VtZW50LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNEb2Mobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDlcbiAgfVxuXG4gIC8vIEV4cG9zZXMgdGhlIGNvbnN0cnVjdG9ycyBnbG9iYWxseS5cbiAgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgPSBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XG59KSgpXG4iXSwic291cmNlUm9vdCI6IiJ9