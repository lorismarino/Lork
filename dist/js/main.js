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
        $content.setAttribute('aria-labelledby', "".concat(this.name));
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
      $container.setAttribute('aria-labelledby', "#".concat(this.name));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DdXN0b21GaWxlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVJhbmdlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9SZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vanMvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2pzL3BvbHlmaWxscy9BcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL2pzL3BvbHlmaWxscy9pbnRlcnNlY3Rpb25PYnNlcnZlci5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwicHVzaCIsIml0ZW0iLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkFuaW1hdGlvbiIsImluaXQiLCJhbmltYXRlZFRpdGxlcyIsImRvY3VtZW50IiwiYW5pbWF0ZWRUaXRsZSIsIndyYXBwZXJUaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJ3cmFwcGVyVGl0bGUyIiwic2V0RE9NIiwiZXZlbnRzIiwidGl0bGUiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmFibGVzIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiQ2Fyb3VzZWwiLCIkY2Fyb3VzZWwiLCJjYXJvdXNlbCIsIm5hdmlnYXRpb24iLCJsZWZ0IiwicmlnaHQiLCJpc1RvdWNoRGV2aWNlIiwid2luZG93IiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJ0eXBlIiwiYWN0aXZlSXRlbSIsInBhZ2luYXRpb24iLCJkcmFnIiwiYXV0byIsIm1vYmlsZU51bWJlciIsInRhYmxldE51bWJlciIsImxhcHRvcE51bWJlciIsIm51bWJlckl0ZW1zIiwibGVuZ3RoIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInNjcmVlbk51bWJlciIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiJHBhZ2luYXRpb24iLCJpIiwic2V0QXR0cmlidXRlIiwic2V0SW50ZXJ2YWwiLCJfbW92ZVJpZ2h0IiwicGFyc2VJbnQiLCJfbW92ZUxlZnQiLCJrZXlDb2RlIiwiJGJ1bGxldCIsIl9tb3ZlSXRlbXMiLCJhY3R1YWxQb3NpdGlvbiIsInRvdWNoZXMiLCJjbGllbnRYIiwicHJlc3NJdGVtcyIsInRyYW5zbGF0ZSIsImRyYWdDcmV0YWVkSXRlbSIsIl9kcmFnSXRlbXMiLCJjaGFuZ2VkVG91Y2hlcyIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIiRsYXN0SXRlbSIsImR1cGxpY2F0ZUxhc3RJdGVtIiwiY2xvbmVOb2RlIiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCIkZmlyc3RJdGVtIiwiZHVwbGljYXRlRmlyc3RJdGVtIiwiY29uc29sZSIsImxvZyIsIngiLCJ0IiwiY2xlYXJUaW1lb3V0IiwidHJhbnNpdGlvbiIsIkN1c3RvbUZpbGUiLCIkY3VzdG9tRmlsZSIsImN1c3RvbUZpbGUiLCJsYWJlbCIsImlzQnV0dG9uIiwiYnV0dG9uIiwiaXNCdXR0b25Qb3NpdGlvbiIsImJ1dHRvbnBvcyIsImlzU2l6ZSIsInNpemUiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJjb250YWluZXIiLCJpbnB1dCIsIm5hbWUiLCJkaXNwbGF5IiwiY2xpY2siLCJzaXplQ29udmVydCIsImJ5dGVzIiwic2l6ZXMiLCJNYXRoIiwiZmxvb3IiLCJjb252ZXJ0Iiwicm91bmQiLCJwb3ciLCJmaWxlIiwiZmlsZXMiLCJjbG9zZSIsInN0b3BQcm9wYWdhdGlvbiIsInZhbHVlIiwiJGZpbGVzIiwiZm9yRWFjaCIsImluZGV4IiwiJGZpbGUiLCJuZXdGaWxlcyIsIkRhdGFUcmFuc2ZlciIsIkN1c3RvbVJhbmdlIiwiJGN1c3RvbVJhbmdlIiwiY3VzdG9tUmFuZ2UiLCJ2aWV3VG90YWwiLCJzdGVwIiwiZ2V0QXR0cmlidXRlIiwiJGNyZWF0ZUN1c3RvbVJhbmdlIiwicmVwbGFjZUNoaWxkIiwidG90YWxWaWV3IiwidG9Mb2NhbGVTdHJpbmciLCJiYWNrZ3JvdW5kIiwiQ3VzdG9tU2VsZWN0IiwiJGN1c3RvbVNlbGVjdCIsImN1c3RvbVNlbGVjdCIsImluaXRQYXJhbXMiLCJpbml0aWFsaXplIiwiaXNGaWx0ZXJzIiwiZmlsdGVycyIsImlzT25Nb2JpbGUiLCJtb2JpbGUiLCJkZWZhdWx0TGFiZWwiLCJ2aXJ0dWFsTGFiZWwiLCIkY3JlYXRlQ3VzdG9tU2VsZWN0IiwiJHNlbGVjdCIsIiRkZWZhdWx0T3B0aW9uIiwiJG9wdGlvbiIsImNob29zZSIsIiRjb250YWluZXIiLCJmaWx0ZXIiLCJ0b2dnbGUiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiLCJ0b2dnbGVDdXN0b21TZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsIiRuZXdJdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkRyb3Bkb3duIiwiJGRyb3Bkb3duIiwiZHJvcGRvd24iLCJGb3JtVmFsaWRhdGlvbiIsIiRmb3JtIiwiZm9ybSIsIm5vSW5zdGFudCIsIm5vaW5zdGFudCIsIm5vU3VibWl0Iiwibm9zdWJtaXQiLCJmb3JtRXJyb3IiLCJpbnB1dEdyb3VwcyIsIiRpbnB1dEdyb3VwIiwiJGlucHV0IiwidmFsaWRhdGUiLCJpbnB1dFR5cGUiLCJydWxlcyIsInJlcXVpcmVkIiwibWlubGVuZ3RoIiwibWluTGVuZ3RoIiwibWF4bGVuZ3RoIiwibWF4TGVuZ3RoIiwicmVxdWlyZWRtZXNzYWdlIiwicmVxdWlyZWRNZXNzYWdlIiwiZXJyb3JtaW5sZW5ndGgiLCJlcnJvck1pbkxlbmd0aCIsImVycm9ybWF4bGVuZ3RoIiwiZXJyb3JNYXhMZW5ndGgiLCJlcnJvcm1lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvciIsImNsZWFyRXJyb3IiLCJtYXRjaCIsImVycm9yIiwiJGVycm9yIiwiSGVhZGVyIiwiaGVhZGVyIiwib3BlbiIsInN1YiIsIklucHV0R3JvdXAiLCJpbnB1dEdyb3VwIiwiY29udGVudCIsIk1vZGFsIiwiJG1vZGFsIiwibW9kYWwiLCJSZXNldCIsInRlc3QiLCJrZXkiLCJib2R5IiwiU3dpdGNoIiwiJHN3aXRjaCIsImFjdGl2ZSIsImNoZWNrZWQiLCIkY3JlYXRlU3dpdGNoIiwiJGxhYmVsIiwiVGFicyIsIiR0YWJzIiwidGFicyIsImhlYWRlckl0ZW1zIiwiJGhlYWRlckl0ZW0iLCIkY29udGVudEl0ZW0iLCIkYWNjb3JkaW9ucyIsIiRjYXJvdXNlbHMiLCIkY3VzdG9tRmlsZXMiLCIkY3VzdG9tUmFuZ2VzIiwiJGN1c3RvbVNlbGVjdHMiLCIkZHJvcGRvd25zIiwiJGlucHV0R3JvdXBzIiwiJGZvcm1zIiwiJG1vZGFscyIsIiRzd2l0Y2hzIiwiJHRhYiIsInRvU3RyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJpc0NhbGxhYmxlIiwiZm4iLCJjYWxsIiwidG9JbnRlZ2VyIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJpc0Zpbml0ZSIsImFicyIsIm1heFNhZmVJbnRlZ2VyIiwidG9MZW5ndGgiLCJsZW4iLCJtaW4iLCJtYXgiLCJhcnJheUxpa2UiLCJDIiwiVHlwZUVycm9yIiwibWFwRm4iLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJUIiwiQSIsImsiLCJrVmFsdWUiLCJJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJnZXRGcmFtZUVsZW1lbnQiLCJkb2MiLCJkZWZhdWx0VmlldyIsImZyYW1lRWxlbWVudCIsImUiLCJzdGFydERvYyIsImZyYW1lIiwib3duZXJEb2N1bWVudCIsInJlZ2lzdHJ5IiwiY3Jvc3NPcmlnaW5VcGRhdGVyIiwiY3Jvc3NPcmlnaW5SZWN0IiwiZW50cnkiLCJ0aW1lIiwicm9vdEJvdW5kcyIsImVuc3VyZURPTVJlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJpbnRlcnNlY3Rpb25SZWN0IiwiZ2V0RW1wdHlSZWN0IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXRSZWN0IiwidGFyZ2V0QXJlYSIsImludGVyc2VjdGlvbkFyZWEiLCJ0b0ZpeGVkIiwiY2FsbGJhY2siLCJvcHRfb3B0aW9ucyIsIm9wdGlvbnMiLCJFcnJvciIsInJvb3QiLCJub2RlVHlwZSIsIl9jaGVja0ZvckludGVyc2VjdGlvbnMiLCJ0aHJvdHRsZSIsImJpbmQiLCJUSFJPVFRMRV9USU1FT1VUIiwiX2NhbGxiYWNrIiwiX29ic2VydmF0aW9uVGFyZ2V0cyIsIl9xdWV1ZWRFbnRyaWVzIiwiX3Jvb3RNYXJnaW5WYWx1ZXMiLCJfcGFyc2VSb290TWFyZ2luIiwicm9vdE1hcmdpbiIsInRocmVzaG9sZHMiLCJfaW5pdFRocmVzaG9sZHMiLCJtYXAiLCJtYXJnaW4iLCJ1bml0Iiwiam9pbiIsIl9tb25pdG9yaW5nRG9jdW1lbnRzIiwiX21vbml0b3JpbmdVbnN1YnNjcmliZXMiLCJQT0xMX0lOVEVSVkFMIiwiVVNFX01VVEFUSU9OX09CU0VSVkVSIiwiX3NldHVwQ3Jvc3NPcmlnaW5VcGRhdGVyIiwiY29udmVydEZyb21QYXJlbnRSZWN0Iiwib2JzZXJ2ZXIiLCJfcmVzZXRDcm9zc09yaWdpblVwZGF0ZXIiLCJpc1RhcmdldEFscmVhZHlPYnNlcnZlZCIsInNvbWUiLCJlbGVtZW50IiwiX3JlZ2lzdGVySW5zdGFuY2UiLCJfbW9uaXRvckludGVyc2VjdGlvbnMiLCJfdW5tb25pdG9ySW50ZXJzZWN0aW9ucyIsIl91bnJlZ2lzdGVySW5zdGFuY2UiLCJkaXNjb25uZWN0IiwiX3VubW9uaXRvckFsbEludGVyc2VjdGlvbnMiLCJ0YWtlUmVjb3JkcyIsInJlY29yZHMiLCJzbGljZSIsIm9wdF90aHJlc2hvbGQiLCJpc0FycmF5Iiwic29ydCIsImEiLCJvcHRfcm9vdE1hcmdpbiIsIm1hcmdpblN0cmluZyIsIm1hcmdpbnMiLCJzcGxpdCIsInBhcnRzIiwiZXhlYyIsInBhcnNlRmxvYXQiLCJ3aW4iLCJpbmRleE9mIiwibW9uaXRvcmluZ0ludGVydmFsIiwiZG9tT2JzZXJ2ZXIiLCJhZGRFdmVudCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJjbGVhckludGVydmFsIiwicmVtb3ZlRXZlbnQiLCJyb290RG9jIiwiaGFzRGVwZW5kZW50VGFyZ2V0cyIsIml0ZW1Eb2MiLCJ1bnN1YnNjcmliZSIsInNwbGljZSIsInVuc3Vic2NyaWJlcyIsInJvb3RJc0luRG9tIiwiX3Jvb3RJc0luRG9tIiwicm9vdFJlY3QiLCJfZ2V0Um9vdFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyb290Q29udGFpbnNUYXJnZXQiLCJfcm9vdENvbnRhaW5zVGFyZ2V0Iiwib2xkRW50cnkiLCJfY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24iLCJuZXdFbnRyeSIsIm5vdyIsIl9oYXNDcm9zc2VkVGhyZXNob2xkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcmVudCIsImdldFBhcmVudE5vZGUiLCJhdFJvb3QiLCJwYXJlbnRSZWN0IiwicGFyZW50Q29tcHV0ZWRTdHlsZSIsImZyYW1lUmVjdCIsImZyYW1lSW50ZXJzZWN0IiwiZG9jdW1lbnRFbGVtZW50Iiwib3ZlcmZsb3ciLCJjb21wdXRlUmVjdEludGVyc2VjdGlvbiIsImlzRG9jIiwiaHRtbCIsInRvcCIsImNsaWVudFdpZHRoIiwiYm90dG9tIiwiY2xpZW50SGVpZ2h0IiwiX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4iLCJyZWN0IiwibmV3UmVjdCIsIm9sZFJhdGlvIiwibmV3UmF0aW8iLCJjb250YWluc0RlZXAiLCJwZXJmb3JtYW5jZSIsInRpbWVvdXQiLCJ0aW1lciIsIm5vZGUiLCJvcHRfdXNlQ2FwdHVyZSIsImF0dGFjaEV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGF0Y2hFdmVudCIsInJlY3QxIiwicmVjdDIiLCJlbCIsImVyciIsInkiLCJwYXJlbnRCb3VuZGluZ1JlY3QiLCJwYXJlbnRJbnRlcnNlY3Rpb25SZWN0IiwiY2hpbGQiLCJhc3NpZ25lZFNsb3QiLCJob3N0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FB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O0FBRUQsUUFBSWtXLE1BQU0sSUFBSUEsTUFBTSxDQUFDL0UsUUFBUCxJQUFtQixFQUE3QixJQUFtQytFLE1BQU0sQ0FBQ3VDLElBQTlDLEVBQW9EO0FBQ2xEO0FBQ0EsYUFBT3ZDLE1BQU0sQ0FBQ3VDLElBQWQ7QUFDRDs7QUFFRCxXQUFPdkMsTUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFLQSxXQUFTVSxLQUFULENBQWVlLElBQWYsRUFBcUI7QUFDbkIsV0FBT0EsSUFBSSxJQUFJQSxJQUFJLENBQUN4RyxRQUFMLEtBQWtCLENBQWpDO0FBQ0QsR0FsK0JVLENBbytCWDs7O0FBQ0EvUCxRQUFNLENBQUNiLG9CQUFQLEdBQThCQSxvQkFBOUI7QUFDQWEsUUFBTSxDQUFDZ08seUJBQVAsR0FBbUNBLHlCQUFuQztBQUNELENBditCQSxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCIvKioqKioqKioqKlxuICogQWNjb3JkaW9uXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBBY2NvcmRpb24ge1xuICBjb25zdHJ1Y3RvcigkYWNjb3JkaW9uKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5hY2NvcmRpb24gPSAkYWNjb3JkaW9uIC8vIEFkZCBhY2NvcmRpb24gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5hY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB0aGlzLiQuYWNjb3JkaW9uLmRhdGFzZXQubXVsdGlwbGUgLy8gU2V0IGlzIG11bHRpcGxlIGl0ZW0gb3Blbi5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICBpZiAoJGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2NvbnRlbnRIZWlnaHR9cHhgXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpdGVtOiAkaXRlbSwgaGVpZ2h0OiBjb250ZW50SGVpZ2h0IH0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgeyBpdGVtLCBoZWlnaHQgfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQnV0dG9uJylcbiAgICAgIGNvbnN0ICRjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB7IGl0ZW0gfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvblxuIiwiY2xhc3MgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc2V0RE9NKCkge1xuICAgIHRoaXMuJC5hbmltYXRlZFRpdGxlcyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZWQtdGl0bGUnKVxuICAgIClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgZm9yIChjb25zdCBhbmltYXRlZFRpdGxlIG9mIEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZWQtdGl0bGUnKVxuICAgICkpIHtcbiAgICAgIGFuaW1hdGVkVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQtdGl0bGUnKVxuICAgICAgY29uc3Qgd3JhcHBlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHdyYXBwZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC10aXRsZV9fdGV4dCcpXG4gICAgICBhbmltYXRlZFRpdGxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXJUaXRsZSwgYW5pbWF0ZWRUaXRsZSlcbiAgICAgIHdyYXBwZXJUaXRsZS5hcHBlbmRDaGlsZChhbmltYXRlZFRpdGxlKVxuXG4gICAgICBjb25zdCB3cmFwcGVyVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHdyYXBwZXJUaXRsZTIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtdGl0bGUnKVxuICAgICAgd3JhcHBlclRpdGxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXJUaXRsZTIsIHdyYXBwZXJUaXRsZSlcbiAgICAgIHdyYXBwZXJUaXRsZTIuYXBwZW5kQ2hpbGQod3JhcHBlclRpdGxlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0RE9NKClcbiAgICB0aGlzLmV2ZW50cygpXG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgbGV0IHRpdGxlID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgb2JzZXJ2YWJsZXMgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb2JzZXJ2YWJsZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5pbnRlcnNlY3Rpb25SYXRpbyA+IDAuNSkge1xuICAgICAgICAgICAgaXRlbS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtdGl0bGUtLXZpc2libGUnKVxuICAgICAgICAgICAgdGl0bGUudW5vYnNlcnZlKGl0ZW0udGFyZ2V0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkOiBbMC41XVxuICAgICAgfVxuICAgIClcblxuICAgIGZvciAoY29uc3QgYW5pbWF0ZWRUaXRsZSBvZiB0aGlzLiQuYW5pbWF0ZWRUaXRsZXMpIHtcbiAgICAgIHRpdGxlLm9ic2VydmUoYW5pbWF0ZWRUaXRsZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uXG4iLCIvKioqKioqKioqKlxuICogQ2Fyb3VzZWxcbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIENhcm91c2VsIHtcbiAgY29uc3RydWN0b3IoJGNhcm91c2VsKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jYXJvdXNlbCA9ICRjYXJvdXNlbCAvLyBBZGQgY2Fyb3VzZWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24gPSB7XG4gICAgICBsZWZ0OiB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLWxlZnQnKSxcbiAgICAgIHJpZ2h0OiB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLXJpZ2h0JylcbiAgICB9XG4gICAgdGhpcy4kLml0ZW1zID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbXMnKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzVG91Y2hEZXZpY2UgPSAhIShcbiAgICAgICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHNcbiAgICApXG4gICAgdGhpcy50eXBlID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgPyB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50eXBlXG4gICAgICA6ICdub3JtYWwnXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgIHRoaXMucGFnaW5hdGlvbiA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnBhZ2luYXRpb25cbiAgICB0aGlzLmRyYWcgPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5kcmFnXG4gICAgdGhpcy5hdXRvID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuYXV0b1xuICAgIHRoaXMubW9iaWxlTnVtYmVyID0gMSB8fCB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5tb2JpbGVOdW1iZXJcbiAgICB0aGlzLnRhYmxldE51bWJlciA9IDIgfHwgdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudGFibGV0TnVtYmVyXG4gICAgdGhpcy5sYXB0b3BOdW1iZXIgPSA0IHx8IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmxhcHRvcE51bWJlclxuICAgIHRoaXMubnVtYmVySXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgKS5sZW5ndGhcblxuICAgIGlmICh0aGlzLnR5cGUgIT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGhcbiAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gMVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpLm9mZnNldFdpZHRoXG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5OdW1iZXIgPSB0aGlzLmxhcHRvcE51bWJlclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzY4cHgpJykubWF0Y2hlcykge1xuICAgICAgICB0aGlzLnNjcmVlbk51bWJlciA9IHRoaXMudGFibGV0TnVtYmVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjcmVlbk51bWJlciA9IHRoaXMubW9iaWxlTnVtYmVyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgJHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJHBhZ2luYXRpb24uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb24nKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVySXRlbXM7IGkrKykge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgICAgICRpdGVtLmRhdGFzZXQuaXRlbSA9IGkgKyAxXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgICRwYWdpbmF0aW9uLmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfVxuICAgICAgdGhpcy4kLmNhcm91c2VsLmFwcGVuZENoaWxkKCRwYWdpbmF0aW9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG8pIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICAgIH0sIHBhcnNlSW50KHRoaXMuYXV0bykpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24ubGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVMZWZ0KClcbiAgICB9KVxuXG4gICAgdGhpcy4kLm5hdmlnYXRpb24ucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICBmb3IgKGNvbnN0ICRidWxsZXQgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICkpIHtcbiAgICAgICRidWxsZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAkYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoJGJ1bGxldC5kYXRhc2V0Lml0ZW0gLSAxKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBwYXJzZUludCgkYnVsbGV0LmRhdGFzZXQuaXRlbSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHJhZykge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaERldmljZSkge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gdHJ1ZVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlID0gMFxuICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYWdJdGVtcyhldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdID4gdGhpcy5hY3R1YWxQb3NpdGlvbikgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPCB0aGlzLmFjdHVhbFBvc2l0aW9uKVxuICAgICAgICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLiQuaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX2l0ZW1zLS1kcmFnJylcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiArIDIwKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwKSB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjAgfHxcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gLSAyMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9kcmFnSXRlbXMoY2xpZW50WCkge1xuICAgIHRoaXMuJC5pdGVtcy5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9faXRlbXMtLWRyYWcnKVxuICAgIGlmICh0aGlzLnByZXNzSXRlbXMpIHtcbiAgICAgIGlmIChjbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IGNsaWVudFggLSB0aGlzLmFjdHVhbFBvc2l0aW9uXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5hY3RpdmVJdGVtIC0gMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoICtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IHRoaXMuYWN0dWFsUG9zaXRpb24gLSBjbGllbnRYXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5hY3RpdmVJdGVtIC0gMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0NyZXRhZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gdHJ1ZVxuICAgICAgICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMubnVtYmVySXRlbXMgLVxuICAgICAgICAgICAgICAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5hY3RpdmVJdGVtIC0gMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlTGVmdCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbm9ybWFsJyB8fCB0aGlzLnR5cGUgPT09ICdtdWx0aScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdsb29wJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLm51bWJlckl0ZW1zIC0gMSwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVMYXN0SXRlbSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKSxcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoLTEsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPD0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ25vcm1hbCcgfHwgdGhpcy50eXBlID09PSAnbXVsdGknKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcyAtICh0aGlzLnNjcmVlbk51bWJlciAtIDEpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdsb29wJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygwLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVGaXJzdEl0ZW0pXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUl0ZW1zKHgsIHBvc2l0aW9uID0gbnVsbCkge1xuICAgIGxldCB0XG4gICAgY2xlYXJUaW1lb3V0KHQpXG4gICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0J1xuICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3ggKiAtdGhpcy53aWR0aH1weClgXG5cbiAgICB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJlxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDFcbiAgICAgICkge1xuICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQodGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpKVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcblxuICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpLFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdsZWZ0JyAmJlxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICkge1xuICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQodGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5udW1iZXJJdGVtcyAtIDEpICpcbiAgICAgICAgICAtdGhpcy53aWR0aH0pYFxuICAgICAgfVxuICAgIH0sIDEwMDApXG5cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSlcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Om50aC1jaGlsZCgke3RoaXMuYWN0aXZlSXRlbSAtIDF9KWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpXG4gICAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bnRoLWNoaWxkKCR7dGhpcy5hY3RpdmVJdGVtICsgMX0pYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbUZpbGVcbiAqIHYxLjEuMFxuICovXG5cbmNsYXNzIEN1c3RvbUZpbGUge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tRmlsZSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tRmlsZSA9ICRjdXN0b21GaWxlIC8vIEFkZCBjdXN0b20tc2VsZWN0IGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmxhYmVsXG4gICAgdGhpcy5pc0J1dHRvbiA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuYnV0dG9uXG4gICAgdGhpcy5pc0J1dHRvblBvc2l0aW9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25wb3NcbiAgICAgID8gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25wb3NcbiAgICAgIDogJ3JpZ2h0J1xuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQudHlwZVxuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnR5cGVcbiAgICAgIDogJ2ZpbGUnXG4gICAgdGhpcy5pc1NpemUgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnNpemVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmlzQnV0dG9uXG4gICAgfVxuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuaW5uZXJIVE1MID0gJydcblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19jb250YWluZXInKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBsYWJlbFxuICAgIHRoaXMuJC5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSB0aGlzLmxhYmVsXG4gICAgdGhpcy4kLmxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19sYWJlbCcpXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcblxuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2ZpbGVzJykgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB0cnVlKVxuICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2ZvbGRlcicpIHtcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3dlYmtpdGRpcmVjdG9yeScsIHRydWUpXG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXJlY3RvcnlzJywgdHJ1ZSlcbiAgICB9XG4gICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIHNpemUgaW5mb1xuICAgICAgdGhpcy4kLnNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHRoaXMuJC5zaXplLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19zaXplJylcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9ICcwIG1iJ1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLnNpemUpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuJC5pbnB1dC5jbGljaygpXG4gICAgfSlcblxuICAgIGNvbnN0IHNpemVDb252ZXJ0ID0gc2l6ZSA9PiB7XG4gICAgICBjb25zdCBieXRlcyA9IHNpemVcbiAgICAgIGNvbnN0IHNpemVzID0gWydieXRlcycsICdrYicsICdtYicsICdnYicsICd0YiddXG4gICAgICBjb25zdCBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpXG4gICAgICBjb25zdCBjb252ZXJ0ID0gTWF0aC5yb3VuZChieXRlcyAvIE1hdGgucG93KDEwMjQsIGkpLCAyKVxuICAgICAgcmV0dXJuIGAke2NvbnZlcnR9ICR7c2l6ZXNbaV19YFxuICAgIH1cblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gZmlsZS5uYW1lXG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2ZpbGVDbG9zZScpXG4gICAgICAgIGNsb3NlLmlubmVySFRNTCA9ICcmdGltZXM7J1xuICAgICAgICB0aGlzLiQuY29udGFpbmVyLmluc2VydEJlZm9yZShjbG9zZSwgdGhpcy4kLmJ1dHRvbilcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSBudWxsXG4gICAgICAgICAgdGhpcy4kLmxhYmVsLmlubmVyVGV4dCA9IHRoaXMubGFiZWxcbiAgICAgICAgICB0aGlzLiQuY29udGFpbmVyLnJlbW92ZUNoaWxkKGNsb3NlKVxuICAgICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9ICcwIG1iJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSBzaXplQ29udmVydChmaWxlLnNpemUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXNcblxuICAgICAgICBjb25zdCAkZmlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgc2l6ZSA9IDBcblxuICAgICAgICBBcnJheS5mcm9tKGZpbGVzKS5mb3JFYWNoKChmaWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0ICRmaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAkZmlsZS5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgICAgICAkZmlsZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZScpXG5cbiAgICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2ZpbGVDbG9zZScpXG4gICAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJyZ0aW1lczsnXG5cbiAgICAgICAgICAkZmlsZS5hcHBlbmRDaGlsZChjbG9zZSlcbiAgICAgICAgICAkZmlsZXMuYXBwZW5kQ2hpbGQoJGZpbGUpXG5cbiAgICAgICAgICBzaXplICs9IGZpbGUuc2l6ZVxuXG4gICAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGVzID0gbmV3IERhdGFUcmFuc2ZlcigpXG4gICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgICAgICAgIGlmIChmaWxlICE9PSBmaWxlc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBuZXdGaWxlcy5pdGVtcy5hZGQoZmlsZSlcbiAgICAgICAgICAgICAgICBzaXplICs9IGZpbGUuc2l6ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSBzaXplQ29udmVydChzaXplKVxuICAgICAgICAgICAgdGhpcy4kLmlucHV0LmZpbGVzID0gbmV3RmlsZXMuZmlsZXNcbiAgICAgICAgICAgICRmaWxlcy5yZW1vdmVDaGlsZCgkZmlsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KHNpemUpXG5cbiAgICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQoJGZpbGVzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRmlsZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVJhbmdlXG4gKiB2MS4xLjFcbiAqL1xuXG5jbGFzcyBDdXN0b21SYW5nZSB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21SYW5nZSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UgPSAkY3VzdG9tUmFuZ2UgLy8gQWRkIGN1c3RvbVJhbmdlIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMudmlld1RvdGFsID0gdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQudmlld1RvdGFsXG4gICAgdGhpcy5zdGVwID0gdGhpcy4kLmN1c3RvbVJhbmdlLmdldEF0dHJpYnV0ZSgnc3RlcCcpXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmN1c3RvbVJhbmdlLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBjcmVhdGUgY29tcG9uZW50XG4gICAgY29uc3QgJGNyZWF0ZUN1c3RvbVJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY3JlYXRlQ3VzdG9tUmFuZ2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlJylcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXG4gICAgICAkY3JlYXRlQ3VzdG9tUmFuZ2UsXG4gICAgICB0aGlzLiQuY3VzdG9tUmFuZ2VcbiAgICApXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlID0gJGNyZWF0ZUN1c3RvbVJhbmdlXG5cbiAgICAvLyBDcmVhdGUgaW5wdXRcbiAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSlcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJylcblxuICAgIC8vIENyZWF0ZSB0b3RhbCB2aWV3LlxuICAgIGlmICh0aGlzLnZpZXdUb3RhbCkge1xuICAgICAgdGhpcy4kLnRvdGFsVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQudG90YWxWaWV3LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fdG90YWwnKVxuICAgICAgdGhpcy4kLnRvdGFsVmlldy5pbm5lclRleHQgPSAoXG4gICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSAqIHRoaXMuc3RlcFxuICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgfVxuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLnRvdGFsVmlldylcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHRoaXMuJC50b3RhbFZpZXcuaW5uZXJUZXh0ID0gKFxuICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgKiB0aGlzLnN0ZXBcbiAgICAgICkudG9Mb2NhbGVTdHJpbmcoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLnRvdGFsVmlldy5pbm5lclRleHQgPSAoXG4gICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSAqIHRoaXMuc3RlcFxuICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgfSlcblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRBQTY5MSAwJSwgIzRBQTY5MSAke3RoaXMuJC5pbnB1dC52YWx1ZX0lLCAjQ0NDQ0NDICR7dGhpcy4kLmlucHV0LnZhbHVlfSUsICNDQ0NDQ0MgMTAwJSlgXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SYW5nZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVNlbGVjdFxuICogdjEuMS4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVNlbGVjdCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0ID0gJGN1c3RvbVNlbGVjdCAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuaW5pdFBhcmFtcygpXG4gICAgdGhpcy5pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICAgdGhpcy5pc0ZpbHRlcnMgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQuZmlsdGVycyAvLyBTZXQgZmlsdGVycyBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5pc09uTW9iaWxlID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5kZWZhdWx0TGFiZWwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWwgLy8gU2V0IGRlZmF1bHQgbGFiZWwuXG4gICAgdGhpcy52aXJ0dWFsTGFiZWwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWwgLy8gU2V0IGFjdGl2YXRlZCBsYWJlbC5cbiAgICB0aGlzLml0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKSAvLyBHZXQgaXRlbXMuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIC8vIGNyZWF0ZSBjb21wb25lbnRcbiAgICBjb25zdCAkY3JlYXRlQ3VzdG9tU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY3JlYXRlQ3VzdG9tU2VsZWN0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpXG4gICAgJGNyZWF0ZUN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0JylcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuICAgICAgJGNyZWF0ZUN1c3RvbVNlbGVjdCxcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3RcbiAgICApXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdCA9ICRjcmVhdGVDdXN0b21TZWxlY3RcblxuICAgIGlmICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5OTFweCknKS5tYXRjaGVzKSB7XG4gICAgICAvLyBDcmVhdGUgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgICAgY29uc3QgJHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAkc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSlcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IHNlbGVjdCBvcHRpb24uXG4gICAgICBjb25zdCAkZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAkZGVmYXVsdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkZGVmYXVsdE9wdGlvbi5pbm5lclRleHQgPSB0aGlzLmRlZmF1bHRMYWJlbFxuICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkZGVmYXVsdE9wdGlvbilcblxuICAgICAgLy8gQ3JlYXRlIHNlbGVjdCBvcHRpb25zLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5pbm5lclRleHRcbiAgICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkb3B0aW9uKVxuICAgICAgfSlcblxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkc2VsZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1maWx0ZXJzJylcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IHdpdGggZWxlbWVudHMuXG4gICAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRlbnQnKVxuICAgICAgJGNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBgJHt0aGlzLm5hbWV9YClcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICRpdGVtLmRhdGFzZXQubGFiZWwgPSBpdGVtLmlubmVyVGV4dFxuICAgICAgICAkaXRlbS5kYXRhc2V0LnZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJylcbiAgICAgICAgJGl0ZW0uaW5uZXJUZXh0ID0gaXRlbS5pbm5lclRleHRcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9faXRlbScpXG4gICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfSlcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jaG9vc2Uuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY2hvb3NlJylcbiAgICAgIGlmICghdGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmNob29zZS5pbm5lckhUTUwgPSB0aGlzLmRlZmF1bHRMYWJlbFxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgd3JhcHBpbmcgY29udGFpbmVyIGZvciBjb250ZW50LlxuICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRhaW5lcicpXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuY2hvb3NlKVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgICAvLyBDcmVhdGUgaW5wdXQgZm9yIHNlbGVjdCB2YWx1ZS5cbiAgICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3RfX2l0ZW0nKVxuICAgICAgKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGZpbHRlciBpbnB1dC5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy5kZWZhdWx0TGFiZWxcbiAgICAgICAgdGhpcy4kLmNob29zZS5hcHBlbmRDaGlsZCh0aGlzLiQuZmlsdGVyKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzKClcbiAgfVxuXG4gIHRvZ2dsZUN1c3RvbVNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKSkge1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG4gICAgICB9LCAyMDApXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIC8vIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHRoaXMudG9nZ2xlQ3VzdG9tU2VsZWN0KClcbiAgICB9KVxuXG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHx8XG4gICAgICB0aGlzLmlzT25Nb2JpbGVcbiAgICApIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ3VzdG9tU2VsZWN0KClcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAkaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKCRpdGVtKVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHRoaXMuY2hhbmdlVmFsdWUoJGl0ZW0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gJydcbiAgICAgICAgICB0aGlzLiQuZmlsdGVyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0aGlzLnZpcnR1YWxMYWJlbClcbiAgICAgICAgICB0aGlzLiQuaXRlbXMuZm9yRWFjaCgkaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICRpdGVtXG4gICAgICAgICAgICAkbmV3SXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCRpdGVtLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuJC5maWx0ZXIudmFsdWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJGl0ZW1cbiAgICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJGl0ZW1cbiAgICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5jdXN0b21TZWxlY3QuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG5cbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG5cbiAgICAgICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQuZmlsdGVyLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLnZpcnR1YWxMYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbml0aWFsaXplKClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlVmFsdWUoJGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAkaXRlbS5pbm5lclRleHRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNob29zZS5pbm5lclRleHQgPSAkaXRlbS5pbm5lclRleHRcbiAgICB9XG5cbiAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSAkaXRlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9ICRpdGVtLmlubmVyVGV4dFxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdFxuIiwiLyoqKioqKioqKipcbiAqIERyb3Bkb3duXG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKCRkcm9wZG93bikge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZHJvcGRvd24gPSAkZHJvcGRvd24gLy8gQWRkIGRyb3Bkb3duIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNPbk1vYmlsZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQubmFtZVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2l0ZW0nKVxuICAgIClcblxuICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCB3aXRoIGVsZW1lbnRzLlxuICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY29udGVudCcpXG5cbiAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgdGhpcy4kLmNob29zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY2hvb3NlJylcbiAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG4gICAgdGhpcy4kLmNob29zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5uYW1lKVxuXG4gICAgLy8gQ3JlYXRlIHdyYXBwaW5nIGNvbnRhaW5lciBmb3IgY29udGVudC5cbiAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jb250YWluZXInKVxuICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGNvbnRlbnQpXG4gICAgJGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGAjJHt0aGlzLm5hbWV9YClcbiAgICB0aGlzLiQuZHJvcGRvd24uaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5jaG9vc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tLW9wZW4nKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy4kLmRyb3Bkb3duLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKioqKioqKioqXG4gKiBGb3JtVmFsaWRhdGlvblxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgRm9ybVZhbGlkYXRpb24ge1xuICBjb25zdHJ1Y3RvcigkZm9ybSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZm9ybSA9ICRmb3JtIC8vIEFkZCBmb3JtIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMubm9JbnN0YW50ID0gISF0aGlzLiQuZm9ybS5kYXRhc2V0Lm5vaW5zdGFudFxuICAgIHRoaXMubm9TdWJtaXQgPSAhIXRoaXMuJC5mb3JtLmRhdGFzZXQubm9zdWJtaXRcbiAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5pbnB1dEdyb3VwcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgKSkge1xuICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuXG4gICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm5vSW5zdGFudCkge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGUoJGlucHV0R3JvdXApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm5vU3VibWl0KSB7XG4gICAgICB0aGlzLiQuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2VcbiAgICAgICAgZm9yIChjb25zdCAkaW5wdXRHcm91cCBvZiBBcnJheS5mcm9tKFxuICAgICAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgICAgICkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUoJGlucHV0R3JvdXApKSB0aGlzLmZvcm1FcnJvciA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1FcnJvcikgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZSgkaW5wdXRHcm91cCkge1xuICAgIGNvbnN0ICRpbnB1dCA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICBjb25zdCB2YWx1ZSA9ICRpbnB1dC52YWx1ZVxuICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuXG4gICAgLy8gcnVsZXNcbiAgICBjb25zdCBydWxlcyA9IHt9XG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWQpXG4gICAgICBydWxlcy5yZXF1aXJlZCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5taW5sZW5ndGgpXG4gICAgICBydWxlcy5taW5MZW5ndGggPSBwYXJzZUludCgkaW5wdXRHcm91cC5kYXRhc2V0Lm1pbmxlbmd0aClcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5tYXhsZW5ndGgpXG4gICAgICBydWxlcy5tYXhMZW5ndGggPSBwYXJzZUludCgkaW5wdXRHcm91cC5kYXRhc2V0Lm1heGxlbmd0aClcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZG1lc3NhZ2UpXG4gICAgICBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgPSAkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkbWVzc2FnZVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWlubGVuZ3RoKVxuICAgICAgcnVsZXMuZXJyb3JNaW5MZW5ndGggPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWlubGVuZ3RoXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtYXhsZW5ndGgpXG4gICAgICBydWxlcy5lcnJvck1heExlbmd0aCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtYXhsZW5ndGhcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1lc3NhZ2UpXG4gICAgICBydWxlcy5lcnJvck1lc3NhZ2UgPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWVzc2FnZVxuXG4gICAgaWYgKGlucHV0VHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA8IHJ1bGVzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gcnVsZXMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWF4TGVuZ3RoIHx8ICd0b28gYmlnJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlIDwgcnVsZXMubWluTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWluTGVuZ3RoIHx8ICd0b28gbG93JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1heExlbmd0aCAmJiB2YWx1ZSA+IHJ1bGVzLm1heExlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1heExlbmd0aCB8fCAndG9vIGJpZycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnZW1haWwnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF2YWx1ZS5tYXRjaChcbiAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNZXNzYWdlIHx8ICdub3QgYSB2YWxpZCBlbWFpbCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAndGVsJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhdmFsdWUubWF0Y2goL14oPzooPzpcXCt8MDApMzN8MClcXHMqWzEtOV0oPzpbXFxzLi1dKlxcZHsyfSl7NH0kLylcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1lc3NhZ2UgfHwgJ25vdCBhIHZhbGlkIGVtYWlsJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RXJyb3IoJGlucHV0R3JvdXAsIGVycm9yKSB7XG4gICAgbGV0ICRlcnJvciA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncm91cF9fZXJyb3InKVxuICAgIGlmICgkZXJyb3IpIHtcbiAgICAgICRlcnJvci5pbm5lclRleHQgPSBlcnJvclxuICAgIH0gZWxzZSB7XG4gICAgICAkZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICRlcnJvci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cF9fZXJyb3InKVxuICAgICAgJGVycm9yLmlubmVyVGV4dCA9IGVycm9yXG4gICAgICAkaW5wdXRHcm91cC5hcHBlbmRDaGlsZCgkZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY2xlYXJFcnJvcigkaW5wdXRHcm91cCkge1xuICAgIGNvbnN0ICRlcnJvciA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncm91cF9fZXJyb3InKVxuICAgIGlmICgkZXJyb3IpIHtcbiAgICAgICRpbnB1dEdyb3VwLnJlbW92ZUNoaWxkKCRlcnJvcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRpb25cbiIsIi8qKioqKioqKioqXG4gKiBIZWFkZXJcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpIC8vIEFkZCBoZWFkZXIgaW4gRE9NIG9iamVjdHMuXG4gICAgdGhpcy4kLmNsb3NlID0gdGhpcy4kLmhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b2dnbGUtLWNsb3NlJylcbiAgICB0aGlzLiQub3BlbiA9IHRoaXMuJC5oZWFkZXIucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdG9nZ2xlLS1vcGVuJylcbiAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19tZW51SXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTIwMHB4KScpLm1hdGNoZXMpIHtcbiAgICAgIHRoaXMuJC5vcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLiQuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5oZWFkZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHN1YiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudUl0ZW1TdWInKVxuICAgICAgICBpZiAoc3ViKSB7XG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51SXRlbUJ1dHRvbicpXG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gc3ViLm9mZnNldEhlaWdodFxuICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgc3ViLnN0eWxlLnRyYW5zaXRpb24gPSAnaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQnXG5cbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3ViLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19tZW51SXRlbVN1Yi0tb3BlbicpKSB7XG4gICAgICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgICAgIHN1Yi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnVJdGVtU3ViLS1vcGVuJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG4gICAgICAgICAgICAgIHN1Yi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX21lbnVJdGVtU3ViLS1vcGVuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiLyoqKioqKioqKipcbiAqIElucHV0R3JvdXBcbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIElucHV0R3JvdXAge1xuICBjb25zdHJ1Y3RvcigkaW5wdXRHcm91cCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuaW5wdXRHcm91cCA9ICRpbnB1dEdyb3VwIC8vIEFkZCBpbnB1dEdyb3VwIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kLmlucHV0R3JvdXAuaW5uZXJIVE1MXG4gICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwX19jb250ZW50JylcbiAgICAkY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50XG4gICAgdGhpcy4kLmlucHV0ID0gJGNvbnRlbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dEdyb3VwLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy4kLmlucHV0R3JvdXAuYXBwZW5kQ2hpbGQoJGNvbnRlbnQpXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0R3JvdXAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXAtLWFjdGl2ZScpXG4gICAgfSlcblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLiQuaW5wdXQudmFsdWUpXG4gICAgICAgIHRoaXMuJC5pbnB1dEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWdyb3VwLS1hY3RpdmUnKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cFxuIiwiLyoqKioqKioqKipcbiAqIE1vZGFsXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKCRtb2RhbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQubW9kYWwgPSAkbW9kYWwgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1vZGFsLWJ1dHRvbltkYXRhLW1vZGFsPVwiJHt0aGlzLiQubW9kYWwuZGF0YXNldC5tb2RhbH1cIl1gXG4gICAgICApXG4gICAgKVxuICAgICAgdGhpcy4kLmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubW9kYWwtYnV0dG9uW2RhdGEtbW9kYWw9XCIke3RoaXMuJC5tb2RhbC5kYXRhc2V0Lm1vZGFsfVwiXWBcbiAgICAgIClcbiAgICBpZiAodGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKSlcbiAgICAgIHRoaXMuJC5jbG9zZSA9IHRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJylcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLS1hY3RpdmUnKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKS5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy4kLmJ1dHRvbikge1xuICAgICAgdGhpcy4kLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kLmNsb3NlKSB7XG4gICAgICB0aGlzLiQuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCJjbGFzcyBSZXNldCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICBpZiAoIS9eW2EtejAtOV0kL2kudGVzdChldmVudC5rZXkpKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdrZXlib2FyZCcpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNldFxuIiwiLyoqXG4gKiBTd2l0Y2hcbiAqL1xuXG5jbGFzcyBTd2l0Y2gge1xuICBjb25zdHJ1Y3Rvcigkc3dpdGNoKSB7XG4gICAgdGhpcy4kID0ge30gLy8gaW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzXG4gICAgdGhpcy4kLnN3aXRjaCA9ICRzd2l0Y2ggLy8gYWRkIHN3aXRjaCBpbiBET00gb2JqZWN0c1xuXG4gICAgdGhpcy5pbml0UGFyYW1zKClcbiAgICB0aGlzLmluaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIGluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBpbml0UGFyYW1zKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy4kLnN3aXRjaC5jaGVja2VkXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuJC5zd2l0Y2guZGF0YXNldC5sYWJlbFxuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5zd2l0Y2guZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0aWFsaXplIGNvbXBvbmVudFxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBjcmVhdGUgY29tcG9uZW50XG4gICAgY29uc3QgJGNyZWF0ZVN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNyZWF0ZVN3aXRjaC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKVxuICAgICRjcmVhdGVTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICBpZiAodGhpcy5hY3RpdmUpICRjcmVhdGVTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoLS1hY3RpdmUnKVxuICAgIHRoaXMuJC5zd2l0Y2gucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoJGNyZWF0ZVN3aXRjaCwgdGhpcy4kLnN3aXRjaClcbiAgICB0aGlzLiQuc3dpdGNoID0gJGNyZWF0ZVN3aXRjaFxuXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3dpdGNoX19jb250YWluZXInKVxuXG4gICAgLy8gY3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB0aGlzLiQuaW5wdXQuY2hlY2tlZCA9IHRydWVcbiAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgdGhpcy4kLnN3aXRjaC5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgLy8gY3JlYXRlIGxhYmVsXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIGNvbnN0ICRsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMubmFtZSlcbiAgICAgICRsYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2hfX2xhYmVsJylcbiAgICAgICRsYWJlbC5pbm5lclRleHQgPSB0aGlzLmxhYmVsXG4gICAgICB0aGlzLiQuc3dpdGNoLmFwcGVuZENoaWxkKCRsYWJlbClcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50cygpXG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgdGhpcy4kLnN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLiQuc3dpdGNoLmNsYXNzTGlzdC50b2dnbGUoJ3N3aXRjaC0tYWN0aXZlJylcbiAgICAgIHRoaXMuJC5pbnB1dC5jaGVja2VkID0gIXRoaXMuJC5pbnB1dC5jaGVja2VkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hcbiIsIi8qKioqKioqKioqXG4gKiBUYWJzXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBUYWJzIHtcbiAgY29uc3RydWN0b3IoJHRhYnMpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLnRhYnMgPSAkdGFicyAvLyBBZGQgbW9kYWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmhlYWRlckl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19oZWFkZXJJdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0ICRoZWFkZXJJdGVtIG9mIHRoaXMuJC5oZWFkZXJJdGVtcykge1xuICAgICAgY29uc3QgJGNvbnRlbnRJdGVtID0gdGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50YWJzX19jb250ZW50SXRlbVtkYXRhLWl0ZW09XCIkeyRoZWFkZXJJdGVtLmRhdGFzZXQuaXRlbX1cIl1gXG4gICAgICApXG4gICAgICAkaGVhZGVySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpKVxuICAgICAgICAgIHRoaXMuJC50YWJzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkaGVhZGVySXRlbS5jbGFzc0xpc3QuYWRkKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkY29udGVudEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG4iLCJpbXBvcnQgJy4vcG9seWZpbGxzL0FycmF5LmZyb20nXG5pbXBvcnQgJy4vcG9seWZpbGxzL2ludGVyc2VjdGlvbk9ic2VydmVyJ1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbidcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi9BbmltYXRpb24nXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCdcbmltcG9ydCBDdXN0b21GaWxlIGZyb20gJy4vQ3VzdG9tRmlsZSdcbmltcG9ydCBDdXN0b21SYW5nZSBmcm9tICcuL0N1c3RvbVJhbmdlJ1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tICcuL0N1c3RvbVNlbGVjdCdcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJy4vSW5wdXRHcm91cCdcbmltcG9ydCBGb3JtVmFsaWRhdGlvbiBmcm9tICcuL0Zvcm1WYWxpZGF0aW9uJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4vU3dpdGNoJ1xuaW1wb3J0IFJlc2V0IGZyb20gJy4vUmVzZXQnXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5cbmNvbnN0ICRhY2NvcmRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpXG5mb3IgKGNvbnN0ICRhY2NvcmRpb24gb2YgJGFjY29yZGlvbnMpIHtcbiAgbmV3IEFjY29yZGlvbigkYWNjb3JkaW9uKVxufVxuXG5uZXcgQW5pbWF0aW9uKClcblxuY29uc3QgJGNhcm91c2VscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsJykpXG5mb3IgKGNvbnN0ICRjYXJvdXNlbCBvZiAkY2Fyb3VzZWxzKSB7XG4gIG5ldyBDYXJvdXNlbCgkY2Fyb3VzZWwpXG59XG5cbmNvbnN0ICRjdXN0b21GaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1maWxlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21GaWxlIG9mICRjdXN0b21GaWxlcykge1xuICBuZXcgQ3VzdG9tRmlsZSgkY3VzdG9tRmlsZSlcbn1cblxuY29uc3QgJGN1c3RvbVJhbmdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYW5nZScpKVxuZm9yIChjb25zdCAkY3VzdG9tUmFuZ2Ugb2YgJGN1c3RvbVJhbmdlcykge1xuICBuZXcgQ3VzdG9tUmFuZ2UoJGN1c3RvbVJhbmdlKVxufVxuXG5jb25zdCAkY3VzdG9tU2VsZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3QnKSlcbmZvciAoY29uc3QgJGN1c3RvbVNlbGVjdCBvZiAkY3VzdG9tU2VsZWN0cykge1xuICBuZXcgQ3VzdG9tU2VsZWN0KCRjdXN0b21TZWxlY3QpXG59XG5cbmNvbnN0ICRkcm9wZG93bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpKVxuZm9yIChjb25zdCAkZHJvcGRvd24gb2YgJGRyb3Bkb3ducykge1xuICBuZXcgRHJvcGRvd24oJGRyb3Bkb3duKVxufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpKSBuZXcgSGVhZGVyKClcblxuY29uc3QgJGlucHV0R3JvdXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKSlcbmZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgJGlucHV0R3JvdXBzKSB7XG4gIG5ldyBJbnB1dEdyb3VwKCRpbnB1dEdyb3VwKVxufVxuXG5jb25zdCAkZm9ybXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWxpZGF0aW9uJykpXG5mb3IgKGNvbnN0ICRmb3JtIG9mICRmb3Jtcykge1xuICBuZXcgRm9ybVZhbGlkYXRpb24oJGZvcm0pXG59XG5cbmNvbnN0ICRtb2RhbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpKVxuZm9yIChjb25zdCAkbW9kYWwgb2YgJG1vZGFscykge1xuICBuZXcgTW9kYWwoJG1vZGFsKVxufVxuXG5jb25zdCAkc3dpdGNocyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXRjaCcpKVxuZm9yIChjb25zdCAkc3dpdGNoIG9mICRzd2l0Y2hzKSB7XG4gIG5ldyBTd2l0Y2goJHN3aXRjaClcbn1cblxubmV3IFJlc2V0KClcblxuY29uc3QgJHRhYnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpXG5mb3IgKGNvbnN0ICR0YWIgb2YgJHRhYnMpIHtcbiAgbmV3IFRhYnMoJHRhYilcbn1cbiIsImlmICghQXJyYXkuZnJvbSkge1xuICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbiAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICAgfVxuICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSlcbiAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAobnVtYmVyID09PSAwIHx8ICFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiBudW1iZXJcbiAgICAgIH1cbiAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpXG4gICAgfVxuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDFcbiAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSlcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcilcbiAgICB9XG5cbiAgICAvLyBUaGUgbGVuZ3RoIHByb3BlcnR5IG9mIHRoZSBmcm9tIG1ldGhvZCBpcyAxLlxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICAgIC8vIDEuIExldCBDIGJlIHRoZSB0aGlzIHZhbHVlLlxuICAgICAgdmFyIEMgPSB0aGlzXG5cbiAgICAgIC8vIDIuIExldCBpdGVtcyBiZSBUb09iamVjdChhcnJheUxpa2UpLlxuICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0KGFycmF5TGlrZSlcblxuICAgICAgLy8gMy4gUmV0dXJuSWZBYnJ1cHQoaXRlbXMpLlxuICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ0FycmF5LmZyb20gcmVxdWlyZXMgYW4gYXJyYXktbGlrZSBvYmplY3QgLSBub3QgbnVsbCBvciB1bmRlZmluZWQnXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gNC4gSWYgbWFwZm4gaXMgdW5kZWZpbmVkLCB0aGVuIGxldCBtYXBwaW5nIGJlIGZhbHNlLlxuICAgICAgdmFyIG1hcEZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIHVuZGVmaW5lZFxuICAgICAgdmFyIFRcbiAgICAgIGlmICh0eXBlb2YgbWFwRm4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDUuIGVsc2VcbiAgICAgICAgLy8gNS4gYSBJZiBJc0NhbGxhYmxlKG1hcGZuKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICdBcnJheS5mcm9tOiB3aGVuIHByb3ZpZGVkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbidcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICAvLyA1LiBiLiBJZiB0aGlzQXJnIHdhcyBzdXBwbGllZCwgbGV0IFQgYmUgdGhpc0FyZzsgZWxzZSBsZXQgVCBiZSB1bmRlZmluZWQuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAxMC4gTGV0IGxlblZhbHVlIGJlIEdldChpdGVtcywgXCJsZW5ndGhcIikuXG4gICAgICAvLyAxMS4gTGV0IGxlbiBiZSBUb0xlbmd0aChsZW5WYWx1ZSkuXG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKVxuXG4gICAgICAvLyAxMy4gSWYgSXNDb25zdHJ1Y3RvcihDKSBpcyB0cnVlLCB0aGVuXG4gICAgICAvLyAxMy4gYS4gTGV0IEEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZCBvZiBDIHdpdGggYW4gYXJndW1lbnQgbGlzdCBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbSBsZW4uXG4gICAgICAvLyAxNC4gYS4gRWxzZSwgTGV0IEEgYmUgQXJyYXlDcmVhdGUobGVuKS5cbiAgICAgIHZhciBBID0gaXNDYWxsYWJsZShDKSA/IE9iamVjdChuZXcgQyhsZW4pKSA6IG5ldyBBcnJheShsZW4pXG5cbiAgICAgIC8vIDE2LiBMZXQgayBiZSAwLlxuICAgICAgdmFyIGsgPSAwXG4gICAgICAvLyAxNy4gUmVwZWF0LCB3aGlsZSBrIDwgbGVu4oCmIChhbHNvIHN0ZXBzIGEgLSBoKVxuICAgICAgdmFyIGtWYWx1ZVxuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAga1ZhbHVlID0gaXRlbXNba11cbiAgICAgICAgaWYgKG1hcEZuKSB7XG4gICAgICAgICAgQVtrXSA9XG4gICAgICAgICAgICB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgPyBtYXBGbihrVmFsdWUsIGspXG4gICAgICAgICAgICAgIDogbWFwRm4uY2FsbChULCBrVmFsdWUsIGspXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQVtrXSA9IGtWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIGsgKz0gMVxuICAgICAgfVxuICAgICAgLy8gMTguIExldCBwdXRTdGF0dXMgYmUgUHV0KEEsIFwibGVuZ3RoXCIsIGxlbiwgdHJ1ZSkuXG4gICAgICBBLmxlbmd0aCA9IGxlblxuICAgICAgLy8gMjAuIFJldHVybiBBLlxuICAgICAgcmV0dXJuIEFcbiAgICB9XG4gIH0pKClcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNPRlRXQVJFIEFORCBET0NVTUVOVCBOT1RJQ0UgQU5EIExJQ0VOU0UuXG4gKlxuICogIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxuICpcbiAqL1xuOyhmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgLy8gRXhpdCBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbiBhIGJyb3dzZXIuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRXhpdCBlYXJseSBpZiBhbGwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgYW5kIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlcbiAgLy8gZmVhdHVyZXMgYXJlIG5hdGl2ZWx5IHN1cHBvcnRlZC5cbiAgaWYgKFxuICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93ICYmXG4gICAgJ0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnknIGluIHdpbmRvdyAmJlxuICAgICdpbnRlcnNlY3Rpb25SYXRpbycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlXG4gICkge1xuICAgIC8vIE1pbmltYWwgcG9seWZpbGwgZm9yIEVkZ2UgMTUncyBsYWNrIG9mIGBpc0ludGVyc2VjdGluZ2BcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvaXNzdWVzLzIxMVxuICAgIGlmICghKCdpc0ludGVyc2VjdGluZycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUsXG4gICAgICAgICdpc0ludGVyc2VjdGluZycsXG4gICAgICAgIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVtYmVkZGluZyBmcmFtZSBlbGVtZW50LCBpZiBhbnkuXG4gICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2NcbiAgICogQHJldHVybiB7IUVsZW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRGcmFtZUVsZW1lbnQoZG9jKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZG9jLmRlZmF1bHRWaWV3ICYmIGRvYy5kZWZhdWx0Vmlldy5mcmFtZUVsZW1lbnQpIHx8IG51bGxcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZ25vcmUgdGhlIGVycm9yLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgZG9jdW1lbnQuXG4gICAqL1xuICB2YXIgZG9jdW1lbnQgPSAoZnVuY3Rpb24oc3RhcnREb2MpIHtcbiAgICB2YXIgZG9jID0gc3RhcnREb2NcbiAgICB2YXIgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZG9jKVxuICAgIHdoaWxlIChmcmFtZSkge1xuICAgICAgZG9jID0gZnJhbWUub3duZXJEb2N1bWVudFxuICAgICAgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZG9jKVxuICAgIH1cbiAgICByZXR1cm4gZG9jXG4gIH0pKHdpbmRvdy5kb2N1bWVudClcblxuICAvKipcbiAgICogQW4gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkuIFRoaXMgcmVnaXN0cnkgZXhpc3RzIHRvIGhvbGQgYSBzdHJvbmdcbiAgICogcmVmZXJlbmNlIHRvIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlcyBjdXJyZW50bHkgb2JzZXJ2aW5nIGEgdGFyZ2V0XG4gICAqIGVsZW1lbnQuIFdpdGhvdXQgdGhpcyByZWdpc3RyeSwgaW5zdGFuY2VzIHdpdGhvdXQgYW5vdGhlciByZWZlcmVuY2UgbWF5IGJlXG4gICAqIGdhcmJhZ2UgY29sbGVjdGVkLlxuICAgKi9cbiAgdmFyIHJlZ2lzdHJ5ID0gW11cblxuICAvKipcbiAgICogVGhlIHNpZ25hbCB1cGRhdGVyIGZvciBjcm9zcy1vcmlnaW4gaW50ZXJzZWN0aW9uLiBXaGVuIG5vdCBudWxsLCBpdCBtZWFuc1xuICAgKiB0aGF0IHRoZSBwb2x5ZmlsbCBpcyBjb25maWd1cmVkIHRvIHdvcmsgaW4gYSBjcm9zcy1vcmlnaW4gbW9kZS5cbiAgICogQHR5cGUge2Z1bmN0aW9uKERPTVJlY3R8Q2xpZW50UmVjdCwgRE9NUmVjdHxDbGllbnRSZWN0KX1cbiAgICovXG4gIHZhciBjcm9zc09yaWdpblVwZGF0ZXIgPSBudWxsXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IGNyb3NzLW9yaWdpbiBpbnRlcnNlY3Rpb24uIE9ubHkgdXNlZCBpbiB0aGUgY3Jvc3Mtb3JpZ2luIG1vZGUuXG4gICAqIEB0eXBlIHtET01SZWN0fENsaWVudFJlY3R9XG4gICAqL1xuICB2YXIgY3Jvc3NPcmlnaW5SZWN0ID0gbnVsbFxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSBjb25zdHJ1Y3Rvci5cbiAgICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItZW50cnlcbiAgICogQHBhcmFtIHtPYmplY3R9IGVudHJ5IEEgZGljdGlvbmFyeSBvZiBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoZW50cnkpIHtcbiAgICB0aGlzLnRpbWUgPSBlbnRyeS50aW1lXG4gICAgdGhpcy50YXJnZXQgPSBlbnRyeS50YXJnZXRcbiAgICB0aGlzLnJvb3RCb3VuZHMgPSBlbnN1cmVET01SZWN0KGVudHJ5LnJvb3RCb3VuZHMpXG4gICAgdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QgPSBlbnN1cmVET01SZWN0KGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdClcbiAgICB0aGlzLmludGVyc2VjdGlvblJlY3QgPSBlbnN1cmVET01SZWN0KFxuICAgICAgZW50cnkuaW50ZXJzZWN0aW9uUmVjdCB8fCBnZXRFbXB0eVJlY3QoKVxuICAgIClcbiAgICB0aGlzLmlzSW50ZXJzZWN0aW5nID0gISFlbnRyeS5pbnRlcnNlY3Rpb25SZWN0XG5cbiAgICAvLyBDYWxjdWxhdGVzIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8uXG4gICAgdmFyIHRhcmdldFJlY3QgPSB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdFxuICAgIHZhciB0YXJnZXRBcmVhID0gdGFyZ2V0UmVjdC53aWR0aCAqIHRhcmdldFJlY3QuaGVpZ2h0XG4gICAgdmFyIGludGVyc2VjdGlvblJlY3QgPSB0aGlzLmludGVyc2VjdGlvblJlY3RcbiAgICB2YXIgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvblJlY3Qud2lkdGggKiBpbnRlcnNlY3Rpb25SZWN0LmhlaWdodFxuXG4gICAgLy8gU2V0cyBpbnRlcnNlY3Rpb24gcmF0aW8uXG4gICAgaWYgKHRhcmdldEFyZWEpIHtcbiAgICAgIC8vIFJvdW5kIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8gdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBpc3N1ZXM6XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL2lzc3Vlcy8zMjRcbiAgICAgIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSBOdW1iZXIoXG4gICAgICAgIChpbnRlcnNlY3Rpb25BcmVhIC8gdGFyZ2V0QXJlYSkudG9GaXhlZCg0KVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBhcmVhIGlzIHplcm8gYW5kIGlzIGludGVyc2VjdGluZywgc2V0cyB0byAxLCBvdGhlcndpc2UgdG8gMFxuICAgICAgdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IHRoaXMuaXNJbnRlcnNlY3RpbmcgPyAxIDogMFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgY29uc3RydWN0b3IuXG4gICAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWludGVyZmFjZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciBpbnRlcnNlY3Rpb25cbiAgICogICAgIGNoYW5nZXMgaGF2ZSBxdWV1ZWQuIFRoZSBmdW5jdGlvbiBpcyBub3QgaW52b2tlZCBpZiB0aGUgcXVldWUgaGFzXG4gICAqICAgICBiZWVuIGVtcHRpZWQgYnkgY2FsbGluZyB0aGUgYHRha2VSZWNvcmRzYCBtZXRob2QuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X29wdGlvbnMgT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRfb3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge31cblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLnJvb3QgJiZcbiAgICAgIG9wdGlvbnMucm9vdC5ub2RlVHlwZSAhPSAxICYmXG4gICAgICBvcHRpb25zLnJvb3Qubm9kZVR5cGUgIT0gOVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyb290IG11c3QgYmUgYSBEb2N1bWVudCBvciBFbGVtZW50JylcbiAgICB9XG5cbiAgICAvLyBCaW5kcyBhbmQgdGhyb3R0bGVzIGB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnNgLlxuICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyA9IHRocm90dGxlKFxuICAgICAgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLmJpbmQodGhpcyksXG4gICAgICB0aGlzLlRIUk9UVExFX1RJTUVPVVRcbiAgICApXG5cbiAgICAvLyBQcml2YXRlIHByb3BlcnRpZXMuXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fcXVldWVkRW50cmllcyA9IFtdXG4gICAgdGhpcy5fcm9vdE1hcmdpblZhbHVlcyA9IHRoaXMuX3BhcnNlUm9vdE1hcmdpbihvcHRpb25zLnJvb3RNYXJnaW4pXG5cbiAgICAvLyBQdWJsaWMgcHJvcGVydGllcy5cbiAgICB0aGlzLnRocmVzaG9sZHMgPSB0aGlzLl9pbml0VGhyZXNob2xkcyhvcHRpb25zLnRocmVzaG9sZClcbiAgICB0aGlzLnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgbnVsbFxuICAgIHRoaXMucm9vdE1hcmdpbiA9IHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXNcbiAgICAgIC5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgICAgIHJldHVybiBtYXJnaW4udmFsdWUgKyBtYXJnaW4udW5pdFxuICAgICAgfSlcbiAgICAgIC5qb2luKCcgJylcblxuICAgIC8qKiBAcHJpdmF0ZSBAY29uc3QgeyFBcnJheTwhRG9jdW1lbnQ+fSAqL1xuICAgIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMgPSBbXVxuICAgIC8qKiBAcHJpdmF0ZSBAY29uc3QgeyFBcnJheTxmdW5jdGlvbigpPn0gKi9cbiAgICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBpbnRlcnZhbCB3aXRoaW4gd2hpY2ggdGhlIGRvY3VtZW50IHdpbGwgYmUgY2hlY2tlZCBmb3JcbiAgICogaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVEhST1RUTEVfVElNRU9VVCA9IDEwMFxuXG4gIC8qKlxuICAgKiBUaGUgZnJlcXVlbmN5IGluIHdoaWNoIHRoZSBwb2x5ZmlsbCBwb2xscyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqIHRoaXMgY2FuIGJlIHVwZGF0ZWQgb24gYSBwZXIgaW5zdGFuY2UgYmFzaXMgYW5kIG11c3QgYmUgc2V0IHByaW9yIHRvXG4gICAqIGNhbGxpbmcgYG9ic2VydmVgIG9uIHRoZSBmaXJzdCB0YXJnZXQuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuUE9MTF9JTlRFUlZBTCA9IG51bGxcblxuICAvKipcbiAgICogVXNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgb24gdGhlIHJvb3QgZWxlbWVudFxuICAgKiB0byBkZXRlY3QgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVVNFX01VVEFUSU9OX09CU0VSVkVSID0gdHJ1ZVxuXG4gIC8qKlxuICAgKiBTZXRzIHVwIHRoZSBwb2x5ZmlsbCBpbiB0aGUgY3Jvc3Mtb3JpZ2luIG1vZGUuIFRoZSByZXN1bHQgaXMgdGhlXG4gICAqIHVwZGF0ZXIgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHR3byBhcmd1bWVudHM6IGBib3VuZGluZ0NsaWVudFJlY3RgIGFuZFxuICAgKiBgaW50ZXJzZWN0aW9uUmVjdGAgLSBqdXN0IGFzIHRoZXNlIGZpZWxkcyB3b3VsZCBiZSBhdmFpbGFibGUgdG8gdGhlXG4gICAqIHBhcmVudCB2aWEgYEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlgLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWRcbiAgICogZWFjaCB0aW1lIHRoZSBpZnJhbWUgcmVjZWl2ZXMgaW50ZXJzZWN0aW9uIGluZm9ybWF0aW9uIGZyb20gdGhlIHBhcmVudFxuICAgKiB3aW5kb3csIGUuZy4gdmlhIG1lc3NhZ2luZy5cbiAgICogQHJldHVybiB7ZnVuY3Rpb24oRE9NUmVjdHxDbGllbnRSZWN0LCBET01SZWN0fENsaWVudFJlY3QpfVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIuX3NldHVwQ3Jvc3NPcmlnaW5VcGRhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFjcm9zc09yaWdpblVwZGF0ZXIpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IGJvdW5kaW5nQ2xpZW50UmVjdFxuICAgICAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IGludGVyc2VjdGlvblJlY3RcbiAgICAgICAqL1xuICAgICAgY3Jvc3NPcmlnaW5VcGRhdGVyID0gZnVuY3Rpb24oYm91bmRpbmdDbGllbnRSZWN0LCBpbnRlcnNlY3Rpb25SZWN0KSB7XG4gICAgICAgIGlmICghYm91bmRpbmdDbGllbnRSZWN0IHx8ICFpbnRlcnNlY3Rpb25SZWN0KSB7XG4gICAgICAgICAgY3Jvc3NPcmlnaW5SZWN0ID0gZ2V0RW1wdHlSZWN0KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjcm9zc09yaWdpblJlY3QgPSBjb252ZXJ0RnJvbVBhcmVudFJlY3QoXG4gICAgICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25SZWN0XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJlZ2lzdHJ5LmZvckVhY2goZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcbiAgICAgICAgICBvYnNlcnZlci5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3NzT3JpZ2luVXBkYXRlclxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIG1vZGUuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5fcmVzZXRDcm9zc09yaWdpblVwZGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBjcm9zc09yaWdpblVwZGF0ZXIgPSBudWxsXG4gICAgY3Jvc3NPcmlnaW5SZWN0ID0gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYmFzZWQgb25cbiAgICogdGhlIHRocmVzaG9sZHMgdmFsdWVzLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdmFyIGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkID0gdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnNvbWUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudCA9PSB0YXJnZXRcbiAgICB9KVxuXG4gICAgaWYgKGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoISh0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVUeXBlID09IDEpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIEVsZW1lbnQnKVxuICAgIH1cblxuICAgIHRoaXMuX3JlZ2lzdGVySW5zdGFuY2UoKVxuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5wdXNoKHsgZWxlbWVudDogdGFyZ2V0LCBlbnRyeTogbnVsbCB9KVxuICAgIHRoaXMuX21vbml0b3JJbnRlcnNlY3Rpb25zKHRhcmdldC5vd25lckRvY3VtZW50KVxuICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucygpXG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQgIT0gdGFyZ2V0XG4gICAgfSlcbiAgICB0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKHRhcmdldC5vd25lckRvY3VtZW50KVxuICAgIGlmICh0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuX3VucmVnaXN0ZXJJbnN0YW5jZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIG9ic2VydmluZyBhbGwgdGFyZ2V0IGVsZW1lbnRzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW11cbiAgICB0aGlzLl91bm1vbml0b3JBbGxJbnRlcnNlY3Rpb25zKClcbiAgICB0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW55IHF1ZXVlIGVudHJpZXMgdGhhdCBoYXZlIG5vdCB5ZXQgYmVlbiByZXBvcnRlZCB0byB0aGVcbiAgICogY2FsbGJhY2sgYW5kIGNsZWFycyB0aGUgcXVldWUuIFRoaXMgY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogY2FsbGJhY2sgdG8gb2J0YWluIHRoZSBhYnNvbHV0ZSBtb3N0IHVwLXRvLWRhdGUgaW50ZXJzZWN0aW9uIGluZm9ybWF0aW9uLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIGN1cnJlbnRseSBxdWV1ZWQgZW50cmllcy5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS50YWtlUmVjb3JkcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWNvcmRzID0gdGhpcy5fcXVldWVkRW50cmllcy5zbGljZSgpXG4gICAgdGhpcy5fcXVldWVkRW50cmllcyA9IFtdXG4gICAgcmV0dXJuIHJlY29yZHNcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIHRoZSB0aHJlc2hvbGQgdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdCBhbmRcbiAgICogcmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB1bmlxdWUgdGhyZXNob2xkIHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBub3RcbiAgICogYmV0d2VlbiAwIGFuZCAxIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7QXJyYXl8bnVtYmVyPX0gb3B0X3RocmVzaG9sZCBBbiBvcHRpb25hbCB0aHJlc2hvbGQgdmFsdWUgb3JcbiAgICogICAgIGEgbGlzdCBvZiB0aHJlc2hvbGQgdmFsdWVzLCBkZWZhdWx0aW5nIHRvIFswXS5cbiAgICogQHJldHVybiB7QXJyYXl9IEEgc29ydGVkIGxpc3Qgb2YgdW5pcXVlIGFuZCB2YWxpZCB0aHJlc2hvbGQgdmFsdWVzLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9pbml0VGhyZXNob2xkcyA9IGZ1bmN0aW9uKG9wdF90aHJlc2hvbGQpIHtcbiAgICB2YXIgdGhyZXNob2xkID0gb3B0X3RocmVzaG9sZCB8fCBbMF1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZXNob2xkKSkgdGhyZXNob2xkID0gW3RocmVzaG9sZF1cblxuICAgIHJldHVybiB0aHJlc2hvbGQuc29ydCgpLmZpbHRlcihmdW5jdGlvbih0LCBpLCBhKSB7XG4gICAgICBpZiAodHlwZW9mIHQgIT09ICdudW1iZXInIHx8IGlzTmFOKHQpIHx8IHQgPCAwIHx8IHQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAndGhyZXNob2xkIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZWx5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gdCAhPT0gYVtpIC0gMV1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgdGhlIHJvb3RNYXJnaW4gdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgZm91ciBtYXJnaW4gdmFsdWVzIGFzIGFuIG9iamVjdCBjb250YWluaW5nXG4gICAqIHRoZSB2YWx1ZSBhbmQgdW5pdCBwcm9wZXJ0aWVzLiBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgbm90IHByb3Blcmx5XG4gICAqIGZvcm1hdHRlZCBvciB1c2UgYSB1bml0IG90aGVyIHRoYW4gcHggb3IgJSwgYW5kIGVycm9yIGlzIHRocm93bi5cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfcm9vdE1hcmdpbiBBbiBvcHRpb25hbCByb290TWFyZ2luIHZhbHVlLFxuICAgKiAgICAgZGVmYXVsdGluZyB0byAnMHB4Jy5cbiAgICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn0gQW4gYXJyYXkgb2YgbWFyZ2luIG9iamVjdHMgd2l0aCB0aGUga2V5c1xuICAgKiAgICAgdmFsdWUgYW5kIHVuaXQuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3BhcnNlUm9vdE1hcmdpbiA9IGZ1bmN0aW9uKG9wdF9yb290TWFyZ2luKSB7XG4gICAgdmFyIG1hcmdpblN0cmluZyA9IG9wdF9yb290TWFyZ2luIHx8ICcwcHgnXG4gICAgdmFyIG1hcmdpbnMgPSBtYXJnaW5TdHJpbmcuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgICB2YXIgcGFydHMgPSAvXigtP1xcZCpcXC4/XFxkKykocHh8JSkkLy5leGVjKG1hcmdpbilcbiAgICAgIGlmICghcGFydHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyb290TWFyZ2luIG11c3QgYmUgc3BlY2lmaWVkIGluIHBpeGVscyBvciBwZXJjZW50JylcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHZhbHVlOiBwYXJzZUZsb2F0KHBhcnRzWzFdKSwgdW5pdDogcGFydHNbMl0gfVxuICAgIH0pXG5cbiAgICAvLyBIYW5kbGVzIHNob3J0aGFuZC5cbiAgICBtYXJnaW5zWzFdID0gbWFyZ2luc1sxXSB8fCBtYXJnaW5zWzBdXG4gICAgbWFyZ2luc1syXSA9IG1hcmdpbnNbMl0gfHwgbWFyZ2luc1swXVxuICAgIG1hcmdpbnNbM10gPSBtYXJnaW5zWzNdIHx8IG1hcmdpbnNbMV1cblxuICAgIHJldHVybiBtYXJnaW5zXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGlmIHRoZSBwb2xsaW5nIGlzIG5vdCBhbHJlYWR5XG4gICAqIGhhcHBlbmluZywgYW5kIGlmIHRoZSBwYWdlJ3MgdmlzaWJpbGl0eSBzdGF0ZSBpcyB2aXNpYmxlLlxuICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX21vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oZG9jKSB7XG4gICAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0Vmlld1xuICAgIGlmICghd2luKSB7XG4gICAgICAvLyBBbHJlYWR5IGRlc3Ryb3llZC5cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5pbmRleE9mKGRvYykgIT0gLTEpIHtcbiAgICAgIC8vIEFscmVhZHkgbW9uaXRvcmluZy5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFByaXZhdGUgc3RhdGUgZm9yIG1vbml0b3JpbmcuXG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zXG4gICAgdmFyIG1vbml0b3JpbmdJbnRlcnZhbCA9IG51bGxcbiAgICB2YXIgZG9tT2JzZXJ2ZXIgPSBudWxsXG5cbiAgICAvLyBJZiBhIHBvbGwgaW50ZXJ2YWwgaXMgc2V0LCB1c2UgcG9sbGluZyBpbnN0ZWFkIG9mIGxpc3RlbmluZyB0b1xuICAgIC8vIHJlc2l6ZSBhbmQgc2Nyb2xsIGV2ZW50cyBvciBET00gbXV0YXRpb25zLlxuICAgIGlmICh0aGlzLlBPTExfSU5URVJWQUwpIHtcbiAgICAgIG1vbml0b3JpbmdJbnRlcnZhbCA9IHdpbi5zZXRJbnRlcnZhbChjYWxsYmFjaywgdGhpcy5QT0xMX0lOVEVSVkFMKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRFdmVudCh3aW4sICdyZXNpemUnLCBjYWxsYmFjaywgdHJ1ZSlcbiAgICAgIGFkZEV2ZW50KGRvYywgJ3Njcm9sbCcsIGNhbGxiYWNrLCB0cnVlKVxuICAgICAgaWYgKHRoaXMuVVNFX01VVEFUSU9OX09CU0VSVkVSICYmICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW4pIHtcbiAgICAgICAgZG9tT2JzZXJ2ZXIgPSBuZXcgd2luLk11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spXG4gICAgICAgIGRvbU9ic2VydmVyLm9ic2VydmUoZG9jLCB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5wdXNoKGRvYylcbiAgICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAvLyBHZXQgdGhlIHdpbmRvdyBvYmplY3QgYWdhaW4uIFdoZW4gYSBmcmllbmRseSBpZnJhbWUgaXMgZGVzdHJveWVkLCBpdFxuICAgICAgLy8gd2lsbCBiZSBudWxsLlxuICAgICAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0Vmlld1xuXG4gICAgICBpZiAod2luKSB7XG4gICAgICAgIGlmIChtb25pdG9yaW5nSW50ZXJ2YWwpIHtcbiAgICAgICAgICB3aW4uY2xlYXJJbnRlcnZhbChtb25pdG9yaW5nSW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlRXZlbnQod2luLCAncmVzaXplJywgY2FsbGJhY2ssIHRydWUpXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUV2ZW50KGRvYywgJ3Njcm9sbCcsIGNhbGxiYWNrLCB0cnVlKVxuICAgICAgaWYgKGRvbU9ic2VydmVyKSB7XG4gICAgICAgIGRvbU9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBBbHNvIG1vbml0b3IgdGhlIHBhcmVudC5cbiAgICB2YXIgcm9vdERvYyA9XG4gICAgICAodGhpcy5yb290ICYmICh0aGlzLnJvb3Qub3duZXJEb2N1bWVudCB8fCB0aGlzLnJvb3QpKSB8fCBkb2N1bWVudFxuICAgIGlmIChkb2MgIT0gcm9vdERvYykge1xuICAgICAgdmFyIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGRvYylcbiAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICB0aGlzLl9tb25pdG9ySW50ZXJzZWN0aW9ucyhmcmFtZS5vd25lckRvY3VtZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oZG9jKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5pbmRleE9mKGRvYylcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciByb290RG9jID1cbiAgICAgICh0aGlzLnJvb3QgJiYgKHRoaXMucm9vdC5vd25lckRvY3VtZW50IHx8IHRoaXMucm9vdCkpIHx8IGRvY3VtZW50XG5cbiAgICAvLyBDaGVjayBpZiBhbnkgZGVwZW5kZW50IHRhcmdldHMgYXJlIHN0aWxsIHJlbWFpbmluZy5cbiAgICB2YXIgaGFzRGVwZW5kZW50VGFyZ2V0cyA9IHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBpdGVtRG9jID0gaXRlbS5lbGVtZW50Lm93bmVyRG9jdW1lbnRcbiAgICAgIC8vIFRhcmdldCBpcyBpbiB0aGlzIGNvbnRleHQuXG4gICAgICBpZiAoaXRlbURvYyA9PSBkb2MpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIC8vIFRhcmdldCBpcyBuZXN0ZWQgaW4gdGhpcyBjb250ZXh0LlxuICAgICAgd2hpbGUgKGl0ZW1Eb2MgJiYgaXRlbURvYyAhPSByb290RG9jKSB7XG4gICAgICAgIHZhciBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChpdGVtRG9jKVxuICAgICAgICBpdGVtRG9jID0gZnJhbWUgJiYgZnJhbWUub3duZXJEb2N1bWVudFxuICAgICAgICBpZiAoaXRlbURvYyA9PSBkb2MpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuICAgIGlmIChoYXNEZXBlbmRlbnRUYXJnZXRzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBVbnN1YnNjcmliZS5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzW2luZGV4XVxuICAgIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuX21vbml0b3JpbmdVbnN1YnNjcmliZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHVuc3Vic2NyaWJlKClcblxuICAgIC8vIEFsc28gdW5tb25pdG9yIHRoZSBwYXJlbnQuXG4gICAgaWYgKGRvYyAhPSByb290RG9jKSB7XG4gICAgICB2YXIgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZG9jKVxuICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgIHRoaXMuX3VubW9uaXRvckludGVyc2VjdGlvbnMoZnJhbWUub3duZXJEb2N1bWVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2NcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5tb25pdG9yQWxsSW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB1bnN1YnNjcmliZXMgPSB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLnNsaWNlKDApXG4gICAgdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5sZW5ndGggPSAwXG4gICAgdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcy5sZW5ndGggPSAwXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bnN1YnNjcmliZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHVuc3Vic2NyaWJlc1tpXSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjYW5zIGVhY2ggb2JzZXJ2YXRpb24gdGFyZ2V0IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBhbmQgYWRkcyB0aGVtXG4gICAqIHRvIHRoZSBpbnRlcm5hbCBlbnRyaWVzIHF1ZXVlLiBJZiBuZXcgZW50cmllcyBhcmUgZm91bmQsIGl0XG4gICAqIHNjaGVkdWxlcyB0aGUgY2FsbGJhY2sgdG8gYmUgaW52b2tlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QgJiYgY3Jvc3NPcmlnaW5VcGRhdGVyICYmICFjcm9zc09yaWdpblJlY3QpIHtcbiAgICAgIC8vIENyb3NzIG9yaWdpbiBtb25pdG9yaW5nLCBidXQgbm8gaW5pdGlhbCBkYXRhIGF2YWlsYWJsZSB5ZXQuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgcm9vdElzSW5Eb20gPSB0aGlzLl9yb290SXNJbkRvbSgpXG4gICAgdmFyIHJvb3RSZWN0ID0gcm9vdElzSW5Eb20gPyB0aGlzLl9nZXRSb290UmVjdCgpIDogZ2V0RW1wdHlSZWN0KClcblxuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciB0YXJnZXQgPSBpdGVtLmVsZW1lbnRcbiAgICAgIHZhciB0YXJnZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRhcmdldClcbiAgICAgIHZhciByb290Q29udGFpbnNUYXJnZXQgPSB0aGlzLl9yb290Q29udGFpbnNUYXJnZXQodGFyZ2V0KVxuICAgICAgdmFyIG9sZEVudHJ5ID0gaXRlbS5lbnRyeVxuICAgICAgdmFyIGludGVyc2VjdGlvblJlY3QgPVxuICAgICAgICByb290SXNJbkRvbSAmJlxuICAgICAgICByb290Q29udGFpbnNUYXJnZXQgJiZcbiAgICAgICAgdGhpcy5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24odGFyZ2V0LCB0YXJnZXRSZWN0LCByb290UmVjdClcblxuICAgICAgdmFyIHJvb3RCb3VuZHMgPSBudWxsXG4gICAgICBpZiAoIXRoaXMuX3Jvb3RDb250YWluc1RhcmdldCh0YXJnZXQpKSB7XG4gICAgICAgIHJvb3RCb3VuZHMgPSBnZXRFbXB0eVJlY3QoKVxuICAgICAgfSBlbHNlIGlmICghY3Jvc3NPcmlnaW5VcGRhdGVyIHx8IHRoaXMucm9vdCkge1xuICAgICAgICByb290Qm91bmRzID0gcm9vdFJlY3RcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0VudHJ5ID0gKGl0ZW0uZW50cnkgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSh7XG4gICAgICAgIHRpbWU6IG5vdygpLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0OiB0YXJnZXRSZWN0LFxuICAgICAgICByb290Qm91bmRzOiByb290Qm91bmRzLFxuICAgICAgICBpbnRlcnNlY3Rpb25SZWN0OiBpbnRlcnNlY3Rpb25SZWN0XG4gICAgICB9KSlcblxuICAgICAgaWYgKCFvbGRFbnRyeSkge1xuICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpXG4gICAgICB9IGVsc2UgaWYgKHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCkge1xuICAgICAgICAvLyBJZiB0aGUgbmV3IGVudHJ5IGludGVyc2VjdGlvbiByYXRpbyBoYXMgY3Jvc3NlZCBhbnkgb2YgdGhlXG4gICAgICAgIC8vIHRocmVzaG9sZHMsIGFkZCBhIG5ldyBlbnRyeS5cbiAgICAgICAgaWYgKHRoaXMuX2hhc0Nyb3NzZWRUaHJlc2hvbGQob2xkRW50cnksIG5ld0VudHJ5KSkge1xuICAgICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHJvb3QgaXMgbm90IGluIHRoZSBET00gb3IgdGFyZ2V0IGlzIG5vdCBjb250YWluZWQgd2l0aGluXG4gICAgICAgIC8vIHJvb3QgYnV0IHRoZSBwcmV2aW91cyBlbnRyeSBmb3IgdGhpcyB0YXJnZXQgaGFkIGFuIGludGVyc2VjdGlvbixcbiAgICAgICAgLy8gYWRkIGEgbmV3IHJlY29yZCBpbmRpY2F0aW5nIHJlbW92YWwuXG4gICAgICAgIGlmIChvbGRFbnRyeSAmJiBvbGRFbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMpXG5cbiAgICBpZiAodGhpcy5fcXVldWVkRW50cmllcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2NhbGxiYWNrKHRoaXMudGFrZVJlY29yZHMoKSwgdGhpcylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhIHRhcmdldCBhbmQgcm9vdCByZWN0IGNvbXB1dGVzIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0aGVuXG4gICAqIGZvbGxvd2luZyB0aGUgYWxnb3JpdGhtIGluIHRoZSBzcGVjLlxuICAgKiBUT0RPKHBoaWxpcHdhbHRvbik6IGF0IHRoaXMgdGltZSBjbGlwLXBhdGggaXMgbm90IGNvbnNpZGVyZWQuXG4gICAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jY2FsY3VsYXRlLWludGVyc2VjdGlvbi1yZWN0LWFsZ29cbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBET00gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0UmVjdCBUaGUgYm91bmRpbmcgcmVjdCBvZiB0aGUgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gcm9vdFJlY3QgVGhlIGJvdW5kaW5nIHJlY3Qgb2YgdGhlIHJvb3QgYWZ0ZXIgYmVpbmdcbiAgICogICAgIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICAgKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgZmluYWwgaW50ZXJzZWN0aW9uIHJlY3Qgb2JqZWN0IG9yIHVuZGVmaW5lZCBpZiBub1xuICAgKiAgICAgaW50ZXJzZWN0aW9uIGlzIGZvdW5kLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKFxuICAgIHRhcmdldCxcbiAgICB0YXJnZXRSZWN0LFxuICAgIHJvb3RSZWN0XG4gICkge1xuICAgIC8vIElmIHRoZSBlbGVtZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuXG5cbiAgICB2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHRhcmdldFJlY3RcbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0YXJnZXQpXG4gICAgdmFyIGF0Um9vdCA9IGZhbHNlXG5cbiAgICB3aGlsZSAoIWF0Um9vdCAmJiBwYXJlbnQpIHtcbiAgICAgIHZhciBwYXJlbnRSZWN0ID0gbnVsbFxuICAgICAgdmFyIHBhcmVudENvbXB1dGVkU3R5bGUgPVxuICAgICAgICBwYXJlbnQubm9kZVR5cGUgPT0gMSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkgOiB7fVxuXG4gICAgICAvLyBJZiB0aGUgcGFyZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cbiAgICAgIGlmIChwYXJlbnRDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm4gbnVsbFxuXG4gICAgICBpZiAocGFyZW50ID09IHRoaXMucm9vdCB8fCBwYXJlbnQubm9kZVR5cGUgPT0gLyogRE9DVU1FTlQgKi8gOSkge1xuICAgICAgICBhdFJvb3QgPSB0cnVlXG4gICAgICAgIGlmIChwYXJlbnQgPT0gdGhpcy5yb290IHx8IHBhcmVudCA9PSBkb2N1bWVudCkge1xuICAgICAgICAgIGlmIChjcm9zc09yaWdpblVwZGF0ZXIgJiYgIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhY3Jvc3NPcmlnaW5SZWN0IHx8XG4gICAgICAgICAgICAgIChjcm9zc09yaWdpblJlY3Qud2lkdGggPT0gMCAmJiBjcm9zc09yaWdpblJlY3QuaGVpZ2h0ID09IDApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gQSAwLXNpemUgY3Jvc3Mtb3JpZ2luIGludGVyc2VjdGlvbiBtZWFucyBuby1pbnRlcnNlY3Rpb24uXG4gICAgICAgICAgICAgIHBhcmVudCA9IG51bGxcbiAgICAgICAgICAgICAgcGFyZW50UmVjdCA9IG51bGxcbiAgICAgICAgICAgICAgaW50ZXJzZWN0aW9uUmVjdCA9IG51bGxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcmVudFJlY3QgPSBjcm9zc09yaWdpblJlY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50UmVjdCA9IHJvb3RSZWN0XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlJ3MgYSBmcmFtZSB0aGF0IGNhbiBiZSBuYXZpZ2F0ZWQgdG8uXG4gICAgICAgICAgdmFyIGZyYW1lID0gZ2V0UGFyZW50Tm9kZShwYXJlbnQpXG4gICAgICAgICAgdmFyIGZyYW1lUmVjdCA9IGZyYW1lICYmIGdldEJvdW5kaW5nQ2xpZW50UmVjdChmcmFtZSlcbiAgICAgICAgICB2YXIgZnJhbWVJbnRlcnNlY3QgPVxuICAgICAgICAgICAgZnJhbWUgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uKGZyYW1lLCBmcmFtZVJlY3QsIHJvb3RSZWN0KVxuICAgICAgICAgIGlmIChmcmFtZVJlY3QgJiYgZnJhbWVJbnRlcnNlY3QpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IGZyYW1lXG4gICAgICAgICAgICBwYXJlbnRSZWN0ID0gY29udmVydEZyb21QYXJlbnRSZWN0KGZyYW1lUmVjdCwgZnJhbWVJbnRlcnNlY3QpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudCA9IG51bGxcbiAgICAgICAgICAgIGludGVyc2VjdGlvblJlY3QgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBub24tdmlzaWJsZSBvdmVyZmxvdywgYW5kIGl0J3Mgbm90IHRoZSA8Ym9keT5cbiAgICAgICAgLy8gb3IgPGh0bWw+IGVsZW1lbnQsIHVwZGF0ZSB0aGUgaW50ZXJzZWN0aW9uIHJlY3QuXG4gICAgICAgIC8vIE5vdGU6IDxib2R5PiBhbmQgPGh0bWw+IGNhbm5vdCBiZSBjbGlwcGVkIHRvIGEgcmVjdCB0aGF0J3Mgbm90IGFsc29cbiAgICAgICAgLy8gdGhlIGRvY3VtZW50IHJlY3QsIHNvIG5vIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBpbnRlcnNlY3Rpb24uXG4gICAgICAgIHZhciBkb2MgPSBwYXJlbnQub3duZXJEb2N1bWVudFxuICAgICAgICBpZiAoXG4gICAgICAgICAgcGFyZW50ICE9IGRvYy5ib2R5ICYmXG4gICAgICAgICAgcGFyZW50ICE9IGRvYy5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgICBwYXJlbnRDb21wdXRlZFN0eWxlLm92ZXJmbG93ICE9ICd2aXNpYmxlJ1xuICAgICAgICApIHtcbiAgICAgICAgICBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBlaXRoZXIgb2YgdGhlIGFib3ZlIGNvbmRpdGlvbmFscyBzZXQgYSBuZXcgcGFyZW50UmVjdCxcbiAgICAgIC8vIGNhbGN1bGF0ZSBuZXcgaW50ZXJzZWN0aW9uIGRhdGEuXG4gICAgICBpZiAocGFyZW50UmVjdCkge1xuICAgICAgICBpbnRlcnNlY3Rpb25SZWN0ID0gY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24ocGFyZW50UmVjdCwgaW50ZXJzZWN0aW9uUmVjdClcbiAgICAgIH1cbiAgICAgIGlmICghaW50ZXJzZWN0aW9uUmVjdCkgYnJlYWtcbiAgICAgIHBhcmVudCA9IHBhcmVudCAmJiBnZXRQYXJlbnROb2RlKHBhcmVudClcbiAgICB9XG4gICAgcmV0dXJuIGludGVyc2VjdGlvblJlY3RcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByb290IHJlY3QgYWZ0ZXIgYmVpbmcgZXhwYW5kZWQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBleHBhbmRlZCByb290IHJlY3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2dldFJvb3RSZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJvb3RSZWN0XG4gICAgaWYgKHRoaXMucm9vdCAmJiAhaXNEb2ModGhpcy5yb290KSkge1xuICAgICAgcm9vdFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGhpcy5yb290KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgPGh0bWw+Lzxib2R5PiBpbnN0ZWFkIG9mIHdpbmRvdyBzaW5jZSBzY3JvbGwgYmFycyBhZmZlY3Qgc2l6ZS5cbiAgICAgIHZhciBkb2MgPSBpc0RvYyh0aGlzLnJvb3QpID8gdGhpcy5yb290IDogZG9jdW1lbnRcbiAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudFxuICAgICAgdmFyIGJvZHkgPSBkb2MuYm9keVxuICAgICAgcm9vdFJlY3QgPSB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgd2lkdGg6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgYm90dG9tOiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodCxcbiAgICAgICAgaGVpZ2h0OiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kUmVjdEJ5Um9vdE1hcmdpbihyb290UmVjdClcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIGEgcmVjdCBhbmQgZXhwYW5kcyBpdCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IHJlY3QgVGhlIHJlY3Qgb2JqZWN0IHRvIGV4cGFuZC5cbiAgICogQHJldHVybiB7Q2xpZW50UmVjdH0gVGhlIGV4cGFuZGVkIHJlY3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4gPSBmdW5jdGlvbihyZWN0KSB7XG4gICAgdmFyIG1hcmdpbnMgPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzLm1hcChmdW5jdGlvbihtYXJnaW4sIGkpIHtcbiAgICAgIHJldHVybiBtYXJnaW4udW5pdCA9PSAncHgnXG4gICAgICAgID8gbWFyZ2luLnZhbHVlXG4gICAgICAgIDogKG1hcmdpbi52YWx1ZSAqIChpICUgMiA/IHJlY3Qud2lkdGggOiByZWN0LmhlaWdodCkpIC8gMTAwXG4gICAgfSlcbiAgICB2YXIgbmV3UmVjdCA9IHtcbiAgICAgIHRvcDogcmVjdC50b3AgLSBtYXJnaW5zWzBdLFxuICAgICAgcmlnaHQ6IHJlY3QucmlnaHQgKyBtYXJnaW5zWzFdLFxuICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSArIG1hcmdpbnNbMl0sXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgLSBtYXJnaW5zWzNdXG4gICAgfVxuICAgIG5ld1JlY3Qud2lkdGggPSBuZXdSZWN0LnJpZ2h0IC0gbmV3UmVjdC5sZWZ0XG4gICAgbmV3UmVjdC5oZWlnaHQgPSBuZXdSZWN0LmJvdHRvbSAtIG5ld1JlY3QudG9wXG5cbiAgICByZXR1cm4gbmV3UmVjdFxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYW4gb2xkIGFuZCBuZXcgZW50cnkgYW5kIHJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlXG4gICAqIHRocmVzaG9sZCB2YWx1ZXMgaGFzIGJlZW4gY3Jvc3NlZC5cbiAgICogQHBhcmFtIHs/SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gb2xkRW50cnkgVGhlIHByZXZpb3VzIGVudHJ5IGZvciBhXG4gICAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQgb3IgbnVsbCBpZiBubyBwcmV2aW91cyBlbnRyeSBleGlzdHMuXG4gICAqIEBwYXJhbSB7SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gbmV3RW50cnkgVGhlIGN1cnJlbnQgZW50cnkgZm9yIGFcbiAgICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGEgYW55IHRocmVzaG9sZCBoYXMgYmVlbiBjcm9zc2VkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9oYXNDcm9zc2VkVGhyZXNob2xkID0gZnVuY3Rpb24oXG4gICAgb2xkRW50cnksXG4gICAgbmV3RW50cnlcbiAgKSB7XG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgZWFzaWVyLCBhbiBlbnRyeSB0aGF0IGhhcyBhIHJhdGlvIG9mIDBcbiAgICAvLyBidXQgZG9lcyBub3QgYWN0dWFsbHkgaW50ZXJzZWN0IGlzIGdpdmVuIGEgdmFsdWUgb2YgLTFcbiAgICB2YXIgb2xkUmF0aW8gPVxuICAgICAgb2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcgPyBvbGRFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwIDogLTFcbiAgICB2YXIgbmV3UmF0aW8gPSBuZXdFbnRyeS5pc0ludGVyc2VjdGluZ1xuICAgICAgPyBuZXdFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwXG4gICAgICA6IC0xXG5cbiAgICAvLyBJZ25vcmUgdW5jaGFuZ2VkIHJhdGlvc1xuICAgIGlmIChvbGRSYXRpbyA9PT0gbmV3UmF0aW8pIHJldHVyblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRocmVzaG9sZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSB0aGlzLnRocmVzaG9sZHNbaV1cblxuICAgICAgLy8gUmV0dXJuIHRydWUgaWYgYW4gZW50cnkgbWF0Y2hlcyBhIHRocmVzaG9sZCBvciBpZiB0aGUgbmV3IHJhdGlvXG4gICAgICAvLyBhbmQgdGhlIG9sZCByYXRpbyBhcmUgb24gdGhlIG9wcG9zaXRlIHNpZGVzIG9mIGEgdGhyZXNob2xkLlxuICAgICAgaWYgKFxuICAgICAgICB0aHJlc2hvbGQgPT0gb2xkUmF0aW8gfHxcbiAgICAgICAgdGhyZXNob2xkID09IG5ld1JhdGlvIHx8XG4gICAgICAgIHRocmVzaG9sZCA8IG9sZFJhdGlvICE9PSB0aHJlc2hvbGQgPCBuZXdSYXRpb1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdElzSW5Eb20gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMucm9vdCB8fCBjb250YWluc0RlZXAoZG9jdW1lbnQsIHRoaXMucm9vdClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgZWxlbWVudCB0byBjaGVjay5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yb290Q29udGFpbnNUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB2YXIgcm9vdERvYyA9XG4gICAgICAodGhpcy5yb290ICYmICh0aGlzLnJvb3Qub3duZXJEb2N1bWVudCB8fCB0aGlzLnJvb3QpKSB8fCBkb2N1bWVudFxuICAgIHJldHVybiAoXG4gICAgICBjb250YWluc0RlZXAocm9vdERvYywgdGFyZ2V0KSAmJlxuICAgICAgKCF0aGlzLnJvb3QgfHwgcm9vdERvYyA9PSB0YXJnZXQub3duZXJEb2N1bWVudClcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgaW5zdGFuY2UgdG8gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeSBpZiBpdCBpc24ndFxuICAgKiBhbHJlYWR5IHByZXNlbnQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3JlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocmVnaXN0cnkuaW5kZXhPZih0aGlzKSA8IDApIHtcbiAgICAgIHJlZ2lzdHJ5LnB1c2godGhpcylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgaW5zdGFuY2UgZnJvbSB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bnJlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZXggPSByZWdpc3RyeS5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ICE9IC0xKSByZWdpc3RyeS5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBwZXJmb3JtYW5jZS5ub3coKSBtZXRob2Qgb3IgbnVsbCBpbiBicm93c2Vyc1xuICAgKiB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEFQSS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBwYWdlIHdhcyByZXF1ZXN0ZWQuXG4gICAqL1xuICBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZS5ub3cgJiYgcGVyZm9ybWFuY2Uubm93KClcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvdHRsZXMgYSBmdW5jdGlvbiBhbmQgZGVsYXlzIGl0cyBleGVjdXRpb24sIHNvIGl0J3Mgb25seSBjYWxsZWQgYXQgbW9zdFxuICAgKiBvbmNlIHdpdGhpbiBhIGdpdmVuIHRpbWUgcGVyaW9kLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IFRoZSBhbW91bnQgb2YgdGltZSB0aGF0IG11c3QgcGFzcyBiZWZvcmUgdGhlXG4gICAqICAgICBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIGFnYWluLlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHRocm90dGxlZCBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIHRocm90dGxlKGZuLCB0aW1lb3V0KSB7XG4gICAgdmFyIHRpbWVyID0gbnVsbFxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGltZXIpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZuKClcbiAgICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgfSwgdGltZW91dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBoYW5kbGVyIHRvIGEgRE9NIG5vZGUgZW5zdXJpbmcgY3Jvc3MtYnJvd3NlciBjb21wYXRpYmlsaXR5LlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIERPTSBub2RlIHRvIGFkZCB0aGUgZXZlbnQgaGFuZGxlciB0by5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byBhZGQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgT3B0aW9uYWxseSBhZGRzIHRoZSBldmVuIHRvIHRoZSBjYXB0dXJlXG4gICAqICAgICBwaGFzZS4gTm90ZTogdGhpcyBvbmx5IHdvcmtzIGluIG1vZGVybiBicm93c2Vycy5cbiAgICovXG4gIGZ1bmN0aW9uIGFkZEV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZS5hdHRhY2hFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZuKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgcHJldmlvdXNseSBhZGRlZCBldmVudCBoYW5kbGVyIGZyb20gYSBET00gbm9kZS5cbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBET00gbm9kZSB0byByZW1vdmUgdGhlIGV2ZW50IGhhbmRsZXIgZnJvbS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byByZW1vdmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgSWYgdGhlIGV2ZW50IGhhbmRsZXIgd2FzIGFkZGVkIHdpdGggdGhpc1xuICAgKiAgICAgZmxhZyBzZXQgdG8gdHJ1ZSwgaXQgc2hvdWxkIGJlIHNldCB0byB0cnVlIGhlcmUgaW4gb3JkZXIgdG8gcmVtb3ZlIGl0LlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSB8fCBmYWxzZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlLmRldGF0Y2hFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5kZXRhdGNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gdHdvIHJlY3Qgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QxIFRoZSBmaXJzdCByZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdDIgVGhlIHNlY29uZCByZWN0LlxuICAgKiBAcmV0dXJuIHs/T2JqZWN0fD9DbGllbnRSZWN0fSBUaGUgaW50ZXJzZWN0aW9uIHJlY3Qgb3IgdW5kZWZpbmVkIGlmIG5vXG4gICAqICAgICBpbnRlcnNlY3Rpb24gaXMgZm91bmQuXG4gICAqL1xuICBmdW5jdGlvbiBjb21wdXRlUmVjdEludGVyc2VjdGlvbihyZWN0MSwgcmVjdDIpIHtcbiAgICB2YXIgdG9wID0gTWF0aC5tYXgocmVjdDEudG9wLCByZWN0Mi50b3ApXG4gICAgdmFyIGJvdHRvbSA9IE1hdGgubWluKHJlY3QxLmJvdHRvbSwgcmVjdDIuYm90dG9tKVxuICAgIHZhciBsZWZ0ID0gTWF0aC5tYXgocmVjdDEubGVmdCwgcmVjdDIubGVmdClcbiAgICB2YXIgcmlnaHQgPSBNYXRoLm1pbihyZWN0MS5yaWdodCwgcmVjdDIucmlnaHQpXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0XG4gICAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcFxuXG4gICAgcmV0dXJuIChcbiAgICAgICh3aWR0aCA+PSAwICYmXG4gICAgICAgIGhlaWdodCA+PSAwICYmIHtcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICBib3R0b206IGJvdHRvbSxcbiAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfSkgfHxcbiAgICAgIG51bGxcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogU2hpbXMgdGhlIG5hdGl2ZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBvbGRlciBJRS5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZyByZWN0IHRvIGdldC5cbiAgICogQHJldHVybiB7RE9NUmVjdHxDbGllbnRSZWN0fSBUaGUgKHBvc3NpYmx5IHNoaW1tZWQpIHJlY3Qgb2YgdGhlIGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwpIHtcbiAgICB2YXIgcmVjdFxuXG4gICAgdHJ5IHtcbiAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWdub3JlIFdpbmRvd3MgNyBJRTExIFwiVW5zcGVjaWZpZWQgZXJyb3JcIlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9wdWxsLzIwNVxuICAgIH1cblxuICAgIGlmICghcmVjdCkgcmV0dXJuIGdldEVtcHR5UmVjdCgpXG5cbiAgICAvLyBPbGRlciBJRVxuICAgIGlmICghKHJlY3Qud2lkdGggJiYgcmVjdC5oZWlnaHQpKSB7XG4gICAgICByZWN0ID0ge1xuICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICAgICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlbXB0eSByZWN0IG9iamVjdC4gQW4gZW1wdHkgcmVjdCBpcyByZXR1cm5lZCB3aGVuIGFuIGVsZW1lbnRcbiAgICogaXMgbm90IGluIHRoZSBET00uXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBlbXB0eSByZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RW1wdHlSZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmUgdGhhdCB0aGUgcmVzdWx0IGhhcyBhbGwgb2YgdGhlIG5lY2Vzc2FyeSBmaWVsZHMgb2YgdGhlIERPTVJlY3QuXG4gICAqIFNwZWNpZmljYWxseSB0aGlzIGVuc3VyZXMgdGhhdCBgeGAgYW5kIGB5YCBmaWVsZHMgYXJlIHNldC5cbiAgICpcbiAgICogQHBhcmFtIHs/RE9NUmVjdHw/Q2xpZW50UmVjdH0gcmVjdFxuICAgKiBAcmV0dXJuIHs/RE9NUmVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGVuc3VyZURPTVJlY3QocmVjdCkge1xuICAgIC8vIEEgYERPTVJlY3RgIG9iamVjdCBoYXMgYHhgIGFuZCBgeWAgZmllbGRzLlxuICAgIGlmICghcmVjdCB8fCAneCcgaW4gcmVjdCkge1xuICAgICAgcmV0dXJuIHJlY3RcbiAgICB9XG4gICAgLy8gQSBJRSdzIGBDbGllbnRSZWN0YCB0eXBlIGRvZXMgbm90IGhhdmUgYHhgIGFuZCBgeWAuIFRoZSBzYW1lIGlzIHRoZSBjYXNlXG4gICAgLy8gZm9yIGludGVybmFsbHkgY2FsY3VsYXRlZCBSZWN0IG9iamVjdHMuIEZvciB0aGUgcHVycG9zZXMgb2ZcbiAgICAvLyBgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJgLCBpdCdzIHN1ZmZpY2llbnQgdG8gc2ltcGx5IG1pcnJvciBgbGVmdGAgYW5kIGB0b3BgXG4gICAgLy8gZm9yIHRoZXNlIGZpZWxkcy5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgIHk6IHJlY3QudG9wLFxuICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgIHg6IHJlY3QubGVmdCxcbiAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludmVydHMgdGhlIGludGVyc2VjdGlvbiBhbmQgYm91bmRpbmcgcmVjdCBmcm9tIHRoZSBwYXJlbnQgKGZyYW1lKSBCQ1IgdG9cbiAgICogdGhlIGxvY2FsIEJDUiBzcGFjZS5cbiAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IHBhcmVudEJvdW5kaW5nUmVjdCBUaGUgcGFyZW50J3MgYm91bmQgY2xpZW50IHJlY3QuXG4gICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0IFRoZSBwYXJlbnQncyBvd24gaW50ZXJzZWN0aW9uIHJlY3QuXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBsb2NhbCByb290IGJvdW5kaW5nIHJlY3QgZm9yIHRoZSBwYXJlbnQncyBjaGlsZHJlbi5cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnZlcnRGcm9tUGFyZW50UmVjdChwYXJlbnRCb3VuZGluZ1JlY3QsIHBhcmVudEludGVyc2VjdGlvblJlY3QpIHtcbiAgICB2YXIgdG9wID0gcGFyZW50SW50ZXJzZWN0aW9uUmVjdC50b3AgLSBwYXJlbnRCb3VuZGluZ1JlY3QudG9wXG4gICAgdmFyIGxlZnQgPSBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LmxlZnQgLSBwYXJlbnRCb3VuZGluZ1JlY3QubGVmdFxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCxcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICBoZWlnaHQ6IHBhcmVudEludGVyc2VjdGlvblJlY3QuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHBhcmVudEludGVyc2VjdGlvblJlY3Qud2lkdGgsXG4gICAgICBib3R0b206IHRvcCArIHBhcmVudEludGVyc2VjdGlvblJlY3QuaGVpZ2h0LFxuICAgICAgcmlnaHQ6IGxlZnQgKyBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LndpZHRoXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgYSBwYXJlbnQgZWxlbWVudCBjb250YWlucyBhIGNoaWxkIGVsZW1lbnQgKGluY2x1ZGluZyBpbnNpZGVcbiAgICogc2hhZG93IERPTSkuXG4gICAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IFRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtOb2RlfSBjaGlsZCBUaGUgY2hpbGQgZWxlbWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGFyZW50IG5vZGUgY29udGFpbnMgdGhlIGNoaWxkIG5vZGUuXG4gICAqL1xuICBmdW5jdGlvbiBjb250YWluc0RlZXAocGFyZW50LCBjaGlsZCkge1xuICAgIHZhciBub2RlID0gY2hpbGRcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKG5vZGUgPT0gcGFyZW50KSByZXR1cm4gdHJ1ZVxuXG4gICAgICBub2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBwYXJlbnQgbm9kZSBvZiBhbiBlbGVtZW50IG9yIGl0cyBob3N0IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBub2RlXG4gICAqIGlzIGEgc2hhZG93IHJvb3QuXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB3aG9zZSBwYXJlbnQgdG8gZ2V0LlxuICAgKiBAcmV0dXJuIHtOb2RlfG51bGx9IFRoZSBwYXJlbnQgbm9kZSBvciBudWxsIGlmIG5vIHBhcmVudCBleGlzdHMuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKG5vZGUpIHtcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlXG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSAvKiBET0NVTUVOVCAqLyA5ICYmIG5vZGUgIT0gZG9jdW1lbnQpIHtcbiAgICAgIC8vIElmIHRoaXMgbm9kZSBpcyBhIGRvY3VtZW50IG5vZGUsIGxvb2sgZm9yIHRoZSBlbWJlZGRpbmcgZnJhbWUuXG4gICAgICByZXR1cm4gZ2V0RnJhbWVFbGVtZW50KG5vZGUpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHBhcmVudCBoYXMgZWxlbWVudCB0aGF0IGlzIGFzc2lnbmVkIHRocm91Z2ggc2hhZG93IHJvb3Qgc2xvdFxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LmFzc2lnbmVkU2xvdC5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT0gMTEgJiYgcGFyZW50Lmhvc3QpIHtcbiAgICAgIC8vIElmIHRoZSBwYXJlbnQgaXMgYSBzaGFkb3cgcm9vdCwgcmV0dXJuIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgICByZXR1cm4gcGFyZW50Lmhvc3RcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGBub2RlYCBpcyBhIERvY3VtZW50LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNEb2Mobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDlcbiAgfVxuXG4gIC8vIEV4cG9zZXMgdGhlIGNvbnN0cnVjdG9ycyBnbG9iYWxseS5cbiAgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgPSBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XG59KSgpXG4iXSwic291cmNlUm9vdCI6IiJ9