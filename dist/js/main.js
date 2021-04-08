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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DdXN0b21GaWxlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVJhbmdlLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9SZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vanMvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2pzL3BvbHlmaWxscy9BcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL2pzL3BvbHlmaWxscy9pbnRlcnNlY3Rpb25PYnNlcnZlci5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwicHVzaCIsIml0ZW0iLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkFuaW1hdGlvbiIsImluaXQiLCJhbmltYXRlZFRpdGxlcyIsImRvY3VtZW50IiwiYW5pbWF0ZWRUaXRsZSIsIndyYXBwZXJUaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJ3cmFwcGVyVGl0bGUyIiwic2V0RE9NIiwiZXZlbnRzIiwidGl0bGUiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmFibGVzIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiQ2Fyb3VzZWwiLCIkY2Fyb3VzZWwiLCJjYXJvdXNlbCIsIm5hdmlnYXRpb24iLCJsZWZ0IiwicmlnaHQiLCJpc1RvdWNoRGV2aWNlIiwid2luZG93IiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJ0eXBlIiwiYWN0aXZlSXRlbSIsInBhZ2luYXRpb24iLCJkcmFnIiwiYXV0byIsIm1vYmlsZU51bWJlciIsInRhYmxldE51bWJlciIsImxhcHRvcE51bWJlciIsIm51bWJlckl0ZW1zIiwibGVuZ3RoIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInNjcmVlbk51bWJlciIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiJHBhZ2luYXRpb24iLCJpIiwic2V0QXR0cmlidXRlIiwic2V0SW50ZXJ2YWwiLCJfbW92ZVJpZ2h0IiwicGFyc2VJbnQiLCJfbW92ZUxlZnQiLCJrZXlDb2RlIiwiJGJ1bGxldCIsIl9tb3ZlSXRlbXMiLCJhY3R1YWxQb3NpdGlvbiIsInRvdWNoZXMiLCJjbGllbnRYIiwicHJlc3NJdGVtcyIsInRyYW5zbGF0ZSIsImRyYWdDcmV0YWVkSXRlbSIsIl9kcmFnSXRlbXMiLCJjaGFuZ2VkVG91Y2hlcyIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIiRsYXN0SXRlbSIsImR1cGxpY2F0ZUxhc3RJdGVtIiwiY2xvbmVOb2RlIiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCIkZmlyc3RJdGVtIiwiZHVwbGljYXRlRmlyc3RJdGVtIiwiY29uc29sZSIsImxvZyIsIngiLCJ0IiwiY2xlYXJUaW1lb3V0IiwidHJhbnNpdGlvbiIsIkN1c3RvbUZpbGUiLCIkY3VzdG9tRmlsZSIsImN1c3RvbUZpbGUiLCJsYWJlbCIsImlzQnV0dG9uIiwiYnV0dG9uIiwiaXNCdXR0b25Qb3NpdGlvbiIsImJ1dHRvbnBvcyIsImlzU2l6ZSIsInNpemUiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJjb250YWluZXIiLCJpbnB1dCIsIm5hbWUiLCJkaXNwbGF5IiwiY2xpY2siLCJzaXplQ29udmVydCIsImJ5dGVzIiwic2l6ZXMiLCJNYXRoIiwiZmxvb3IiLCJjb252ZXJ0Iiwicm91bmQiLCJwb3ciLCJmaWxlIiwiZmlsZXMiLCJjbG9zZSIsInN0b3BQcm9wYWdhdGlvbiIsInZhbHVlIiwiJGZpbGVzIiwiZm9yRWFjaCIsImluZGV4IiwiJGZpbGUiLCJuZXdGaWxlcyIsIkRhdGFUcmFuc2ZlciIsIkN1c3RvbVJhbmdlIiwiJGN1c3RvbVJhbmdlIiwiY3VzdG9tUmFuZ2UiLCJ2aWV3VG90YWwiLCJzdGVwIiwiZ2V0QXR0cmlidXRlIiwiJGNyZWF0ZUN1c3RvbVJhbmdlIiwicmVwbGFjZUNoaWxkIiwidG90YWxWaWV3IiwidG9Mb2NhbGVTdHJpbmciLCJiYWNrZ3JvdW5kIiwiQ3VzdG9tU2VsZWN0IiwiJGN1c3RvbVNlbGVjdCIsImN1c3RvbVNlbGVjdCIsImluaXRQYXJhbXMiLCJpbml0aWFsaXplIiwiaXNGaWx0ZXJzIiwiZmlsdGVycyIsImlzT25Nb2JpbGUiLCJtb2JpbGUiLCJkZWZhdWx0TGFiZWwiLCJ2aXJ0dWFsTGFiZWwiLCIkY3JlYXRlQ3VzdG9tU2VsZWN0IiwiJHNlbGVjdCIsIiRkZWZhdWx0T3B0aW9uIiwiJG9wdGlvbiIsImNob29zZSIsIiRjb250YWluZXIiLCJmaWx0ZXIiLCJzZXRQb3NpdGlvbiIsInRvZ2dsZSIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicHJldmVudERlZmF1bHQiLCJjb2RlIiwidG9nZ2xlQ3VzdG9tU2VsZWN0IiwiY2hhbmdlVmFsdWUiLCIkbmV3SXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJEcm9wZG93biIsIiRkcm9wZG93biIsImRyb3Bkb3duIiwiRm9ybVZhbGlkYXRpb24iLCIkZm9ybSIsImZvcm0iLCJub0luc3RhbnQiLCJub2luc3RhbnQiLCJub1N1Ym1pdCIsIm5vc3VibWl0IiwiZm9ybUVycm9yIiwiaW5wdXRHcm91cHMiLCIkaW5wdXRHcm91cCIsIiRpbnB1dCIsInZhbGlkYXRlIiwiaW5wdXRUeXBlIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsIm1pbkxlbmd0aCIsIm1heGxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkbWVzc2FnZSIsInJlcXVpcmVkTWVzc2FnZSIsImVycm9ybWlubGVuZ3RoIiwiZXJyb3JNaW5MZW5ndGgiLCJlcnJvcm1heGxlbmd0aCIsImVycm9yTWF4TGVuZ3RoIiwiZXJyb3JtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJjbGVhckVycm9yIiwibWF0Y2giLCJlcnJvciIsIiRlcnJvciIsIkhlYWRlciIsImhlYWRlciIsIm9wZW4iLCJzdWIiLCJJbnB1dEdyb3VwIiwiaW5wdXRHcm91cCIsImNvbnRlbnQiLCJNb2RhbCIsIiRtb2RhbCIsIm1vZGFsIiwiUmVzZXQiLCJ0ZXN0Iiwia2V5IiwiYm9keSIsIlN3aXRjaCIsIiRzd2l0Y2giLCJhY3RpdmUiLCJjaGVja2VkIiwiJGNyZWF0ZVN3aXRjaCIsIiRsYWJlbCIsIlRhYnMiLCIkdGFicyIsInRhYnMiLCJoZWFkZXJJdGVtcyIsIiRoZWFkZXJJdGVtIiwiJGNvbnRlbnRJdGVtIiwiJGFjY29yZGlvbnMiLCIkY2Fyb3VzZWxzIiwiJGN1c3RvbUZpbGVzIiwiJGN1c3RvbVJhbmdlcyIsIiRjdXN0b21TZWxlY3RzIiwiJGRyb3Bkb3ducyIsIiRpbnB1dEdyb3VwcyIsIiRmb3JtcyIsIiRtb2RhbHMiLCIkc3dpdGNocyIsIiR0YWIiLCJ0b1N0ciIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaXNDYWxsYWJsZSIsImZuIiwiY2FsbCIsInRvSW50ZWdlciIsIm51bWJlciIsIk51bWJlciIsImlzTmFOIiwiaXNGaW5pdGUiLCJhYnMiLCJtYXhTYWZlSW50ZWdlciIsInRvTGVuZ3RoIiwibGVuIiwibWluIiwibWF4IiwiYXJyYXlMaWtlIiwiQyIsIlR5cGVFcnJvciIsIm1hcEZuIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiVCIsIkEiLCJrIiwia1ZhbHVlIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiZ2V0RnJhbWVFbGVtZW50IiwiZG9jIiwiZGVmYXVsdFZpZXciLCJmcmFtZUVsZW1lbnQiLCJlIiwic3RhcnREb2MiLCJmcmFtZSIsIm93bmVyRG9jdW1lbnQiLCJyZWdpc3RyeSIsImNyb3NzT3JpZ2luVXBkYXRlciIsImNyb3NzT3JpZ2luUmVjdCIsImVudHJ5IiwidGltZSIsInJvb3RCb3VuZHMiLCJlbnN1cmVET01SZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiaW50ZXJzZWN0aW9uUmVjdCIsImdldEVtcHR5UmVjdCIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0UmVjdCIsInRhcmdldEFyZWEiLCJpbnRlcnNlY3Rpb25BcmVhIiwidG9GaXhlZCIsImNhbGxiYWNrIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwiRXJyb3IiLCJyb290Iiwibm9kZVR5cGUiLCJfY2hlY2tGb3JJbnRlcnNlY3Rpb25zIiwidGhyb3R0bGUiLCJiaW5kIiwiVEhST1RUTEVfVElNRU9VVCIsIl9jYWxsYmFjayIsIl9vYnNlcnZhdGlvblRhcmdldHMiLCJfcXVldWVkRW50cmllcyIsIl9yb290TWFyZ2luVmFsdWVzIiwiX3BhcnNlUm9vdE1hcmdpbiIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGRzIiwiX2luaXRUaHJlc2hvbGRzIiwibWFwIiwibWFyZ2luIiwidW5pdCIsImpvaW4iLCJfbW9uaXRvcmluZ0RvY3VtZW50cyIsIl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzIiwiUE9MTF9JTlRFUlZBTCIsIlVTRV9NVVRBVElPTl9PQlNFUlZFUiIsIl9zZXR1cENyb3NzT3JpZ2luVXBkYXRlciIsImNvbnZlcnRGcm9tUGFyZW50UmVjdCIsIm9ic2VydmVyIiwiX3Jlc2V0Q3Jvc3NPcmlnaW5VcGRhdGVyIiwiaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQiLCJzb21lIiwiZWxlbWVudCIsIl9yZWdpc3Rlckluc3RhbmNlIiwiX21vbml0b3JJbnRlcnNlY3Rpb25zIiwiX3VubW9uaXRvckludGVyc2VjdGlvbnMiLCJfdW5yZWdpc3Rlckluc3RhbmNlIiwiZGlzY29ubmVjdCIsIl91bm1vbml0b3JBbGxJbnRlcnNlY3Rpb25zIiwidGFrZVJlY29yZHMiLCJyZWNvcmRzIiwic2xpY2UiLCJvcHRfdGhyZXNob2xkIiwiaXNBcnJheSIsInNvcnQiLCJhIiwib3B0X3Jvb3RNYXJnaW4iLCJtYXJnaW5TdHJpbmciLCJtYXJnaW5zIiwic3BsaXQiLCJwYXJ0cyIsImV4ZWMiLCJwYXJzZUZsb2F0Iiwid2luIiwiaW5kZXhPZiIsIm1vbml0b3JpbmdJbnRlcnZhbCIsImRvbU9ic2VydmVyIiwiYWRkRXZlbnQiLCJNdXRhdGlvbk9ic2VydmVyIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJzdWJ0cmVlIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50Iiwicm9vdERvYyIsImhhc0RlcGVuZGVudFRhcmdldHMiLCJpdGVtRG9jIiwidW5zdWJzY3JpYmUiLCJzcGxpY2UiLCJ1bnN1YnNjcmliZXMiLCJyb290SXNJbkRvbSIsIl9yb290SXNJbkRvbSIsInJvb3RSZWN0IiwiX2dldFJvb3RSZWN0Iiwicm9vdENvbnRhaW5zVGFyZ2V0IiwiX3Jvb3RDb250YWluc1RhcmdldCIsIm9sZEVudHJ5IiwiX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uIiwibmV3RW50cnkiLCJub3ciLCJfaGFzQ3Jvc3NlZFRocmVzaG9sZCIsImdldENvbXB1dGVkU3R5bGUiLCJwYXJlbnQiLCJnZXRQYXJlbnROb2RlIiwiYXRSb290IiwicGFyZW50UmVjdCIsInBhcmVudENvbXB1dGVkU3R5bGUiLCJmcmFtZVJlY3QiLCJmcmFtZUludGVyc2VjdCIsImRvY3VtZW50RWxlbWVudCIsIm92ZXJmbG93IiwiY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24iLCJpc0RvYyIsImh0bWwiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImNsaWVudEhlaWdodCIsIl9leHBhbmRSZWN0QnlSb290TWFyZ2luIiwicmVjdCIsIm5ld1JlY3QiLCJvbGRSYXRpbyIsIm5ld1JhdGlvIiwiY29udGFpbnNEZWVwIiwicGVyZm9ybWFuY2UiLCJ0aW1lb3V0IiwidGltZXIiLCJub2RlIiwib3B0X3VzZUNhcHR1cmUiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhdGNoRXZlbnQiLCJyZWN0MSIsInJlY3QyIiwiZWwiLCJlcnIiLCJ5IiwicGFyZW50Qm91bmRpbmdSZWN0IiwicGFyZW50SW50ZXJzZWN0aW9uUmVjdCIsImNoaWxkIiwiYXNzaWduZWRTbG90IiwiaG9zdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LFVBQWxCOztBQUVBLFFBQUk2WCxJQUFJLENBQUN0RyxRQUFMO0FBQWlCO0FBQWUsS0FBaEMsSUFBcUNzRyxJQUFJLElBQUlqWSxRQUFqRCxFQUEyRDtBQUN6RDtBQUNBLGFBQU8rUCxlQUFlLENBQUNrSSxJQUFELENBQXRCO0FBQ0QsS0FOMEIsQ0FRM0I7OztBQUNBLFFBQUl4QixNQUFNLElBQUlBLE1BQU0sQ0FBQ3FDLFlBQXJCLEVBQW1DO0FBQ2pDckMsWUFBTSxHQUFHQSxNQUFNLENBQUNxQyxZQUFQLENBQW9CMVksVUFBN0I7QUFDRDs7QUFFRCxRQUFJcVcsTUFBTSxJQUFJQSxNQUFNLENBQUM5RSxRQUFQLElBQW1CLEVBQTdCLElBQW1DOEUsTUFBTSxDQUFDc0MsSUFBOUMsRUFBb0Q7QUFDbEQ7QUFDQSxhQUFPdEMsTUFBTSxDQUFDc0MsSUFBZDtBQUNEOztBQUVELFdBQU90QyxNQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFdBQVNVLEtBQVQsQ0FBZWMsSUFBZixFQUFxQjtBQUNuQixXQUFPQSxJQUFJLElBQUlBLElBQUksQ0FBQ3RHLFFBQUwsS0FBa0IsQ0FBakM7QUFDRCxHQWwrQlUsQ0FvK0JYOzs7QUFDQW5RLFFBQU0sQ0FBQ2Isb0JBQVAsR0FBOEJBLG9CQUE5QjtBQUNBYSxRQUFNLENBQUNvTyx5QkFBUCxHQUFtQ0EseUJBQW5DO0FBQ0QsQ0F2K0JBLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi5qc1wiKTtcbiIsIi8qKioqKioqKioqXG4gKiBBY2NvcmRpb25cbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIEFjY29yZGlvbiB7XG4gIGNvbnN0cnVjdG9yKCRhY2NvcmRpb24pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmFjY29yZGlvbiA9ICRhY2NvcmRpb24gLy8gQWRkIGFjY29yZGlvbiBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19pdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHRoaXMuJC5hY2NvcmRpb24uZGF0YXNldC5tdWx0aXBsZSAvLyBTZXQgaXMgbXVsdGlwbGUgaXRlbSBvcGVuLlxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgIGlmICgkaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7Y29udGVudEhlaWdodH1weGBcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgaXRlbTogJGl0ZW0sIGhlaWdodDogY29udGVudEhlaWdodCB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9ICRjb250ZW50Lm9mZnNldEhlaWdodFxuICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCB7IGl0ZW0sIGhlaWdodCB9IG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1CdXR0b24nKVxuICAgICAgY29uc3QgJGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHsgaXRlbSB9IG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKS5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXG4iLCJjbGFzcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiQgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRET00oKSB7XG4gICAgdGhpcy4kLmFuaW1hdGVkVGl0bGVzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlZC10aXRsZScpXG4gICAgKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBmb3IgKGNvbnN0IGFuaW1hdGVkVGl0bGUgb2YgQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlZC10aXRsZScpXG4gICAgKSkge1xuICAgICAgYW5pbWF0ZWRUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZC10aXRsZScpXG4gICAgICBjb25zdCB3cmFwcGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgd3JhcHBlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkLXRpdGxlX190ZXh0JylcbiAgICAgIGFuaW1hdGVkVGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlclRpdGxlLCBhbmltYXRlZFRpdGxlKVxuICAgICAgd3JhcHBlclRpdGxlLmFwcGVuZENoaWxkKGFuaW1hdGVkVGl0bGUpXG5cbiAgICAgIGNvbnN0IHdyYXBwZXJUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgd3JhcHBlclRpdGxlMi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC10aXRsZScpXG4gICAgICB3cmFwcGVyVGl0bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlclRpdGxlMiwgd3JhcHBlclRpdGxlKVxuICAgICAgd3JhcHBlclRpdGxlMi5hcHBlbmRDaGlsZCh3cmFwcGVyVGl0bGUpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRET00oKVxuICAgIHRoaXMuZXZlbnRzKClcbiAgfVxuXG4gIGV2ZW50cygpIHtcbiAgICBsZXQgdGl0bGUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICBvYnNlcnZhYmxlcyA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBvYnNlcnZhYmxlcykge1xuICAgICAgICAgIGlmIChpdGVtLmludGVyc2VjdGlvblJhdGlvID4gMC41KSB7XG4gICAgICAgICAgICBpdGVtLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC10aXRsZS0tdmlzaWJsZScpXG4gICAgICAgICAgICB0aXRsZS51bm9ic2VydmUoaXRlbS50YXJnZXQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aHJlc2hvbGQ6IFswLjVdXG4gICAgICB9XG4gICAgKVxuXG4gICAgZm9yIChjb25zdCBhbmltYXRlZFRpdGxlIG9mIHRoaXMuJC5hbmltYXRlZFRpdGxlcykge1xuICAgICAgdGl0bGUub2JzZXJ2ZShhbmltYXRlZFRpdGxlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25cbiIsIi8qKioqKioqKioqXG4gKiBDYXJvdXNlbFxuICogdjEuMC4xXG4gKi9cblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBjb25zdHJ1Y3RvcigkY2Fyb3VzZWwpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmNhcm91c2VsID0gJGNhcm91c2VsIC8vIEFkZCBjYXJvdXNlbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQubmF2aWdhdGlvbiA9IHtcbiAgICAgIGxlZnQ6IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2J1dHRvbi0tbGVmdCcpLFxuICAgICAgcmlnaHQ6IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2J1dHRvbi0tcmlnaHQnKVxuICAgIH1cbiAgICB0aGlzLiQuaXRlbXMgPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtcycpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNUb3VjaERldmljZSA9ICEhKFxuICAgICAgJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50c1xuICAgIClcbiAgICB0aGlzLnR5cGUgPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50eXBlXG4gICAgICA/IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnR5cGVcbiAgICAgIDogJ25vcm1hbCdcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgdGhpcy5wYWdpbmF0aW9uID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQucGFnaW5hdGlvblxuICAgIHRoaXMuZHJhZyA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmRyYWdcbiAgICB0aGlzLmF1dG8gPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5hdXRvXG4gICAgdGhpcy5tb2JpbGVOdW1iZXIgPSAxIHx8IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0Lm1vYmlsZU51bWJlclxuICAgIHRoaXMudGFibGV0TnVtYmVyID0gMiB8fCB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50YWJsZXROdW1iZXJcbiAgICB0aGlzLmxhcHRvcE51bWJlciA9IDQgfHwgdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQubGFwdG9wTnVtYmVyXG4gICAgdGhpcy5udW1iZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJylcbiAgICApLmxlbmd0aFxuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gJ211bHRpJykge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy5zY3JlZW5OdW1iZXIgPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykub2Zmc2V0V2lkdGhcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykge1xuICAgICAgICB0aGlzLnNjcmVlbk51bWJlciA9IHRoaXMubGFwdG9wTnVtYmVyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjhweCknKS5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gdGhpcy50YWJsZXROdW1iZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gdGhpcy5tb2JpbGVOdW1iZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCAkcGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkcGFnaW5hdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbicpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJJdGVtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5pdGVtID0gaSArIDFcblxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgJHBhZ2luYXRpb24uYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9XG4gICAgICB0aGlzLiQuY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoJHBhZ2luYXRpb24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0bykge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgICAgfSwgcGFyc2VJbnQodGhpcy5hdXRvKSlcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQubmF2aWdhdGlvbi5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5fbW92ZUxlZnQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQubmF2aWdhdGlvbi5yaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVSaWdodCgpXG4gICAgfSlcblxuICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHRoaXMuX21vdmVSaWdodCgpXG4gICAgfSlcblxuICAgIGZvciAoY29uc3QgJGJ1bGxldCBvZiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgKSkge1xuICAgICAgJGJ1bGxldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICRidWxsZXQuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygkYnVsbGV0LmRhdGFzZXQuaXRlbSAtIDEpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHBhcnNlSW50KCRidWxsZXQuZGF0YXNldC5pdGVtKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kcmFnKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRGV2aWNlKSB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPiB0aGlzLmFjdHVhbFBvc2l0aW9uKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA8IHRoaXMuYWN0dWFsUG9zaXRpb24pXG4gICAgICAgICAgICAgIHRoaXMuX21vdmVSaWdodCgpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcyAmJlxuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMSAmJlxuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IHRydWVcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IDBcbiAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLl9kcmFnSXRlbXMoZXZlbnQuY2xpZW50WClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuJC5pdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9faXRlbXMtLWRyYWcnKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjApIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gMjApIHRoaXMuX21vdmVSaWdodCgpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24gKyAyMCB8fFxuICAgICAgICAgICAgICBldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcyAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMSAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RyYWdJdGVtcyhjbGllbnRYKSB7XG4gICAgdGhpcy4kLml0ZW1zLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19pdGVtcy0tZHJhZycpXG4gICAgaWYgKHRoaXMucHJlc3NJdGVtcykge1xuICAgICAgaWYgKGNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gY2xpZW50WCAtIHRoaXMuYWN0dWFsUG9zaXRpb25cblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdDcmV0YWVkSXRlbSkge1xuICAgICAgICAgICAgICBjb25zdCAkbGFzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlTGFzdEl0ZW0gPSAkbGFzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0sXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggK1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdGhpcy5hY3R1YWxQb3NpdGlvbiAtIGNsaWVudFhcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICAgIGNvbnN0ICRmaXJzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmNhcm91c2VsX19pdGVtJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVGaXJzdEl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5udW1iZXJJdGVtcyAtXG4gICAgICAgICAgICAgIDEpICpcbiAgICAgICAgICAgICAgLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqXG4gICAgICAgICAgICAgIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZX1weClgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVMZWZ0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnIHx8IHRoaXMudHlwZSA9PT0gJ211bHRpJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2xvb3AnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMubnVtYmVySXRlbXMgLSAxLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMubnVtYmVySXRlbXNcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICBjb25zdCAkbGFzdEl0ZW0gPSB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgZHVwbGljYXRlTGFzdEl0ZW0gPSAkbGFzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUxhc3RJdGVtKVxuICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpLFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICApXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygtMSwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA8PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVSaWdodCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbm9ybWFsJyB8fCB0aGlzLnR5cGUgPT09ICdtdWx0aScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zIC0gKHRoaXMuc2NyZWVuTnVtYmVyIC0gMSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29rJylcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2xvb3AnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKDAsICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRmaXJzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgY29uc3QgZHVwbGljYXRlRmlyc3RJdGVtID0gJGZpcnN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUZpcnN0SXRlbSlcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlSXRlbXMoeCwgcG9zaXRpb24gPSBudWxsKSB7XG4gICAgbGV0IHRcbiAgICBjbGVhclRpbWVvdXQodClcbiAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQnXG4gICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7eCAqIC10aGlzLndpZHRofXB4KWBcblxuICAgIHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgIHBvc2l0aW9uID09PSAncmlnaHQnICYmXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZCh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykpXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJyksXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICBwb3NpdGlvbiA9PT0gJ2xlZnQnICYmXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZCh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLm51bWJlckl0ZW1zIC0gMSkgKlxuICAgICAgICAgIC10aGlzLndpZHRofSlgXG4gICAgICB9XG4gICAgfSwgMTAwMClcblxuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bnRoLWNoaWxkKCR7dGhpcy5hY3RpdmVJdGVtIC0gMX0pYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcylcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpudGgtY2hpbGQoJHt0aGlzLmFjdGl2ZUl0ZW0gKyAxfSlgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tRmlsZVxuICogdjEuMS4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tRmlsZSB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21GaWxlKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21GaWxlID0gJGN1c3RvbUZpbGUgLy8gQWRkIGN1c3RvbS1zZWxlY3QgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQubGFiZWxcbiAgICB0aGlzLmlzQnV0dG9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25cbiAgICB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgOiAncmlnaHQnXG4gICAgdGhpcy50eXBlID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC50eXBlXG4gICAgICA/IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQudHlwZVxuICAgICAgOiAnZmlsZSdcbiAgICB0aGlzLmlzU2l6ZSA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuc2l6ZVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMuaXNCdXR0b24pIHtcbiAgICAgIHRoaXMuJC5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuaXNCdXR0b25cbiAgICB9XG5cbiAgICB0aGlzLiQuY3VzdG9tRmlsZS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgaWYgKHRoaXMuaXNTaXplKSB7XG4gICAgICB0aGlzLiQuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2NvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuaXNTaXplXG4gICAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGxhYmVsXG4gICAgdGhpcy4kLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGhpcy4kLmxhYmVsLmlubmVyVGV4dCA9IHRoaXMubGFiZWxcbiAgICB0aGlzLiQubGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2xhYmVsJylcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmxhYmVsKVxuXG4gICAgLy8gQ3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0Lm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJylcbiAgICBpZiAodGhpcy50eXBlID09PSAnZmlsZXMnKSB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsIHRydWUpXG4gICAgZWxzZSBpZiAodGhpcy50eXBlID09PSAnZm9sZGVyJykge1xuICAgICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnd2Via2l0ZGlyZWN0b3J5JywgdHJ1ZSlcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2RpcmVjdG9yeXMnLCB0cnVlKVxuICAgIH1cbiAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuaXNTaXplXG4gICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICBpZiAodGhpcy5pc0J1dHRvbiAmJiB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuaXNTaXplXG4gICAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTaXplKSB7XG4gICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuY29udGFpbmVyKVxuXG4gICAgICAvLyBDcmVhdGUgc2l6ZSBpbmZvXG4gICAgICB0aGlzLiQuc2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgdGhpcy4kLnNpemUuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX3NpemUnKVxuICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gJzAgbWInXG4gICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuc2l6ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0LmNsaWNrKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2l6ZUNvbnZlcnQgPSBzaXplID0+IHtcbiAgICAgIGNvbnN0IGJ5dGVzID0gc2l6ZVxuICAgICAgY29uc3Qgc2l6ZXMgPSBbJ2J5dGVzJywgJ2tiJywgJ21iJywgJ2diJywgJ3RiJ11cbiAgICAgIGNvbnN0IGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSlcbiAgICAgIGNvbnN0IGNvbnZlcnQgPSBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpXG4gICAgICByZXR1cm4gYCR7Y29udmVydH0gJHtzaXplc1tpXX1gXG4gICAgfVxuXG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZUNsb3NlJylcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJyZ0aW1lczsnXG4gICAgICAgIHRoaXMuJC5jb250YWluZXIuaW5zZXJ0QmVmb3JlKGNsb3NlLCB0aGlzLiQuYnV0dG9uKVxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9IG51bGxcbiAgICAgICAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5sYWJlbFxuICAgICAgICAgIHRoaXMuJC5jb250YWluZXIucmVtb3ZlQ2hpbGQoY2xvc2UpXG4gICAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gJzAgbWInXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KGZpbGUuc2l6ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlc1xuXG4gICAgICAgIGNvbnN0ICRmaWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCBzaXplID0gMFxuXG4gICAgICAgIEFycmF5LmZyb20oZmlsZXMpLmZvckVhY2goKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgJGZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICRmaWxlLmlubmVyVGV4dCA9IGZpbGUubmFtZVxuICAgICAgICAgICRmaWxlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19maWxlJylcblxuICAgICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZUNsb3NlJylcbiAgICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnJnRpbWVzOydcblxuICAgICAgICAgICRmaWxlLmFwcGVuZENoaWxkKGNsb3NlKVxuICAgICAgICAgICRmaWxlcy5hcHBlbmRDaGlsZCgkZmlsZSlcblxuICAgICAgICAgIHNpemUgKz0gZmlsZS5zaXplXG5cbiAgICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzaXplID0gMFxuICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBuZXcgRGF0YVRyYW5zZmVyKClcbiAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgICAgICAgaWYgKGZpbGUgIT09IGZpbGVzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIG5ld0ZpbGVzLml0ZW1zLmFkZChmaWxlKVxuICAgICAgICAgICAgICAgIHNpemUgKz0gZmlsZS5zaXplXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KHNpemUpXG4gICAgICAgICAgICB0aGlzLiQuaW5wdXQuZmlsZXMgPSBuZXdGaWxlcy5maWxlc1xuICAgICAgICAgICAgJGZpbGVzLnJlbW92ZUNoaWxkKCRmaWxlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gc2l6ZUNvbnZlcnQoc2l6ZSlcblxuICAgICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCgkZmlsZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21GaWxlXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tUmFuZ2VcbiAqIHYxLjEuMVxuICovXG5cbmNsYXNzIEN1c3RvbVJhbmdlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVJhbmdlKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21SYW5nZSA9ICRjdXN0b21SYW5nZSAvLyBBZGQgY3VzdG9tUmFuZ2UgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy52aWV3VG90YWwgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC52aWV3VG90YWxcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZ2V0QXR0cmlidXRlKCdzdGVwJylcbiAgICB0aGlzLm5hbWUgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIC8vIGNyZWF0ZSBjb21wb25lbnRcbiAgICBjb25zdCAkY3JlYXRlQ3VzdG9tUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjcmVhdGVDdXN0b21SYW5nZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2UnKVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChcbiAgICAgICRjcmVhdGVDdXN0b21SYW5nZSxcbiAgICAgIHRoaXMuJC5jdXN0b21SYW5nZVxuICAgIClcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UgPSAkY3JlYXRlQ3VzdG9tUmFuZ2VcblxuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKVxuXG4gICAgLy8gQ3JlYXRlIHRvdGFsIHZpZXcuXG4gICAgaWYgKHRoaXMudmlld1RvdGFsKSB7XG4gICAgICB0aGlzLiQudG90YWxWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC50b3RhbFZpZXcuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX190b3RhbCcpXG4gICAgICB0aGlzLiQudG90YWxWaWV3LmlubmVyVGV4dCA9IChcbiAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlICogdGhpcy5zdGVwXG4gICAgICApLnRvTG9jYWxlU3RyaW5nKClcbiAgICB9XG5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQudG90YWxWaWV3KVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgdGhpcy4kLnRvdGFsVmlldy5pbm5lclRleHQgPSAoXG4gICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSAqIHRoaXMuc3RlcFxuICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgfSlcblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLiQudG90YWxWaWV3LmlubmVyVGV4dCA9IChcbiAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlICogdGhpcy5zdGVwXG4gICAgICApLnRvTG9jYWxlU3RyaW5nKClcbiAgICB9KVxuXG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0LnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNEFBNjkxIDAlLCAjNEFBNjkxICR7dGhpcy4kLmlucHV0LnZhbHVlfSUsICNDQ0NDQ0MgJHt0aGlzLiQuaW5wdXQudmFsdWV9JSwgI0NDQ0NDQyAxMDAlKWBcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJhbmdlXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tU2VsZWN0XG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBDdXN0b21TZWxlY3Qge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tU2VsZWN0KSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QgPSAkY3VzdG9tU2VsZWN0IC8vIEFkZCBjdXN0b20tc2VsZWN0IGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5pbml0UGFyYW1zKClcbiAgICB0aGlzLmluaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBpbml0UGFyYW1zKCkge1xuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICB0aGlzLmlzRmlsdGVycyA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5maWx0ZXJzIC8vIFNldCBmaWx0ZXJzIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubW9iaWxlIC8vIFNldCBjdXN0b20gbW9iaWxlIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmRlZmF1bHRMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgZGVmYXVsdCBsYWJlbC5cbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgYWN0aXZhdGVkIGxhYmVsLlxuICAgIHRoaXMuaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpIC8vIEdldCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgLy8gY3JlYXRlIGNvbXBvbmVudFxuICAgIGNvbnN0ICRjcmVhdGVDdXN0b21TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjcmVhdGVDdXN0b21TZWxlY3Quc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJylcbiAgICAkY3JlYXRlQ3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QnKVxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXG4gICAgICAkY3JlYXRlQ3VzdG9tU2VsZWN0LFxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdFxuICAgIClcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0ID0gJGNyZWF0ZUN1c3RvbVNlbGVjdFxuXG4gICAgaWYgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk5MXB4KScpLm1hdGNoZXMpIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAgICBjb25zdCAkc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICRzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICRkZWZhdWx0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJylcbiAgICAgICRkZWZhdWx0T3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuZGVmYXVsdExhYmVsXG4gICAgICAkc2VsZWN0LmFwcGVuZENoaWxkKCRkZWZhdWx0T3B0aW9uKVxuXG4gICAgICAvLyBDcmVhdGUgc2VsZWN0IG9wdGlvbnMuXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgJG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLmlubmVyVGV4dFxuICAgICAgICAkc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG4gICAgICB9KVxuXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmlubmVySFRNTCA9ICcnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKCRzZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLWZpbHRlcnMnKVxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgJGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY29udGVudCcpXG4gICAgICAkY29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGAke3RoaXMubmFtZX1gKVxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5sYWJlbCA9IGl0ZW0uaW5uZXJUZXh0XG4gICAgICAgICRpdGVtLmRhdGFzZXQudmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgICAgICAkaXRlbS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKVxuICAgICAgICAkaXRlbS5pbm5lclRleHQgPSBpdGVtLmlubmVyVGV4dFxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9KVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbi5cbiAgICAgIHRoaXMuJC5jaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLmNob29zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jaG9vc2UnKVxuICAgICAgaWYgKCF0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuZGVmYXVsdExhYmVsXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY29udGFpbmVyJylcbiAgICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGNvbnRlbnQpXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmlubmVySFRNTCA9ICcnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKHRoaXMuJC5jaG9vc2UpXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKCRjb250YWluZXIpXG5cbiAgICAgIC8vIENyZWF0ZSBpbnB1dCBmb3Igc2VsZWN0IHZhbHVlLlxuICAgICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXNlbGVjdF9faXRlbScpXG4gICAgICApXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZmlsdGVyIGlucHV0LlxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5maWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLmRlZmF1bHRMYWJlbFxuICAgICAgICB0aGlzLiQuY2hvb3NlLmFwcGVuZENoaWxkKHRoaXMuJC5maWx0ZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbigpXG4gICAgdGhpcy5ldmVudHMoKVxuICB9XG5cbiAgdG9nZ2xlQ3VzdG9tU2VsZWN0KCkge1xuICAgIGlmICh0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnY3VzdG9tLXNlbGVjdC0tb3BlbicpKSB7XG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgICAgIH0sIDIwMClcbiAgICB9XG4gIH1cblxuICBzZXRQb3NpdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLVxuICAgICAgICAodGhpcy4kLmN1c3RvbVNlbGVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgK1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX2Nob29zZScpXG4gICAgICAgICAgICAub2Zmc2V0SGVpZ2h0KSA8XG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X19jb250ZW50Jykub2Zmc2V0SGVpZ2h0XG4gICAgKSB7XG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLXRvcCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tdG9wJylcbiAgICB9XG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgLy8ga2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJykgdGhpcy50b2dnbGVDdXN0b21TZWxlY3QoKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFBvc2l0aW9uKClcbiAgICB9KVxuXG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHx8XG4gICAgICB0aGlzLmlzT25Nb2JpbGVcbiAgICApIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ3VzdG9tU2VsZWN0KClcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAkaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKCRpdGVtKVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHRoaXMuY2hhbmdlVmFsdWUoJGl0ZW0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gJydcbiAgICAgICAgICB0aGlzLiQuZmlsdGVyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0aGlzLnZpcnR1YWxMYWJlbClcbiAgICAgICAgICB0aGlzLiQuaXRlbXMuZm9yRWFjaCgkaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmV3SXRlbSA9ICRpdGVtXG4gICAgICAgICAgICAkbmV3SXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kLml0ZW1zLmZvckVhY2goJGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCRpdGVtLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuJC5maWx0ZXIudmFsdWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJGl0ZW1cbiAgICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJGl0ZW1cbiAgICAgICAgICAgICAgJG5ld0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5jdXN0b21TZWxlY3QuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG5cbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG5cbiAgICAgICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQuZmlsdGVyLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLnZpcnR1YWxMYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIC8vICAgdGhpcy5pbml0aWFsaXplKClcbiAgICAvLyB9KVxuICB9XG5cbiAgY2hhbmdlVmFsdWUoJGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAkaXRlbS5pbm5lclRleHRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNob29zZS5pbm5lclRleHQgPSAkaXRlbS5pbm5lclRleHRcbiAgICB9XG5cbiAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSAkaXRlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9ICRpdGVtLmlubmVyVGV4dFxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdFxuIiwiLyoqKioqKioqKipcbiAqIERyb3Bkb3duXG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKCRkcm9wZG93bikge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZHJvcGRvd24gPSAkZHJvcGRvd24gLy8gQWRkIGRyb3Bkb3duIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNPbk1vYmlsZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQubmFtZVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2l0ZW0nKVxuICAgIClcblxuICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCB3aXRoIGVsZW1lbnRzLlxuICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY29udGVudCcpXG5cbiAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgdGhpcy4kLmNob29zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY2hvb3NlJylcbiAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG5cbiAgICAvLyBDcmVhdGUgd3JhcHBpbmcgY29udGFpbmVyIGZvciBjb250ZW50LlxuICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRhaW5lcicpXG4gICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICB0aGlzLiQuZHJvcGRvd24uaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLiQuZHJvcGRvd24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJylcbiAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgIHRoaXMuc2V0UG9zaXRpb24oKVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBzZXRQb3NpdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLVxuICAgICAgICAodGhpcy4kLmRyb3Bkb3duLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArXG4gICAgICAgICAgdGhpcy4kLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9fY2hvb3NlJykub2Zmc2V0SGVpZ2h0KSA8XG4gICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19jb250ZW50Jykub2Zmc2V0SGVpZ2h0XG4gICAgKSB7XG4gICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tLXRvcCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi0tdG9wJylcbiAgICB9XG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIC8vIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICB0aGlzLiQuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJylcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuJC5jaG9vc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tLW9wZW4nKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy4kLmRyb3Bkb3duLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKioqKioqKioqXG4gKiBGb3JtVmFsaWRhdGlvblxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgRm9ybVZhbGlkYXRpb24ge1xuICBjb25zdHJ1Y3RvcigkZm9ybSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZm9ybSA9ICRmb3JtIC8vIEFkZCBmb3JtIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMubm9JbnN0YW50ID0gISF0aGlzLiQuZm9ybS5kYXRhc2V0Lm5vaW5zdGFudFxuICAgIHRoaXMubm9TdWJtaXQgPSAhIXRoaXMuJC5mb3JtLmRhdGFzZXQubm9zdWJtaXRcbiAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5pbnB1dEdyb3VwcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgKSkge1xuICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuXG4gICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm5vSW5zdGFudCkge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGUoJGlucHV0R3JvdXApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm5vU3VibWl0KSB7XG4gICAgICB0aGlzLiQuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2VcbiAgICAgICAgZm9yIChjb25zdCAkaW5wdXRHcm91cCBvZiBBcnJheS5mcm9tKFxuICAgICAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgICAgICkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUoJGlucHV0R3JvdXApKSB0aGlzLmZvcm1FcnJvciA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1FcnJvcikgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZSgkaW5wdXRHcm91cCkge1xuICAgIGNvbnN0ICRpbnB1dCA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICBjb25zdCB2YWx1ZSA9ICRpbnB1dC52YWx1ZVxuICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuXG4gICAgLy8gcnVsZXNcbiAgICBjb25zdCBydWxlcyA9IHt9XG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWQpXG4gICAgICBydWxlcy5yZXF1aXJlZCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5taW5sZW5ndGgpXG4gICAgICBydWxlcy5taW5MZW5ndGggPSBwYXJzZUludCgkaW5wdXRHcm91cC5kYXRhc2V0Lm1pbmxlbmd0aClcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5tYXhsZW5ndGgpXG4gICAgICBydWxlcy5tYXhMZW5ndGggPSBwYXJzZUludCgkaW5wdXRHcm91cC5kYXRhc2V0Lm1heGxlbmd0aClcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZG1lc3NhZ2UpXG4gICAgICBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgPSAkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkbWVzc2FnZVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWlubGVuZ3RoKVxuICAgICAgcnVsZXMuZXJyb3JNaW5MZW5ndGggPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWlubGVuZ3RoXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtYXhsZW5ndGgpXG4gICAgICBydWxlcy5lcnJvck1heExlbmd0aCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtYXhsZW5ndGhcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1lc3NhZ2UpXG4gICAgICBydWxlcy5lcnJvck1lc3NhZ2UgPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWVzc2FnZVxuXG4gICAgaWYgKGlucHV0VHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA8IHJ1bGVzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gcnVsZXMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWF4TGVuZ3RoIHx8ICd0b28gYmlnJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlIDwgcnVsZXMubWluTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWluTGVuZ3RoIHx8ICd0b28gbG93JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1heExlbmd0aCAmJiB2YWx1ZSA+IHJ1bGVzLm1heExlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1heExlbmd0aCB8fCAndG9vIGJpZycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnZW1haWwnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF2YWx1ZS5tYXRjaChcbiAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNZXNzYWdlIHx8ICdub3QgYSB2YWxpZCBlbWFpbCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAndGVsJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhdmFsdWUubWF0Y2goL14oPzooPzpcXCt8MDApMzN8MClcXHMqWzEtOV0oPzpbXFxzLi1dKlxcZHsyfSl7NH0kLylcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1lc3NhZ2UgfHwgJ25vdCBhIHZhbGlkIGVtYWlsJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RXJyb3IoJGlucHV0R3JvdXAsIGVycm9yKSB7XG4gICAgbGV0ICRlcnJvciA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncm91cF9fZXJyb3InKVxuICAgIGlmICgkZXJyb3IpIHtcbiAgICAgICRlcnJvci5pbm5lclRleHQgPSBlcnJvclxuICAgIH0gZWxzZSB7XG4gICAgICAkZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICRlcnJvci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cF9fZXJyb3InKVxuICAgICAgJGVycm9yLmlubmVyVGV4dCA9IGVycm9yXG4gICAgICAkaW5wdXRHcm91cC5hcHBlbmRDaGlsZCgkZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY2xlYXJFcnJvcigkaW5wdXRHcm91cCkge1xuICAgIGNvbnN0ICRlcnJvciA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncm91cF9fZXJyb3InKVxuICAgIGlmICgkZXJyb3IpIHtcbiAgICAgICRpbnB1dEdyb3VwLnJlbW92ZUNoaWxkKCRlcnJvcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRpb25cbiIsIi8qKioqKioqKioqXG4gKiBIZWFkZXJcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpIC8vIEFkZCBoZWFkZXIgaW4gRE9NIG9iamVjdHMuXG4gICAgdGhpcy4kLmNsb3NlID0gdGhpcy4kLmhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b2dnbGUtLWNsb3NlJylcbiAgICB0aGlzLiQub3BlbiA9IHRoaXMuJC5oZWFkZXIucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdG9nZ2xlLS1vcGVuJylcbiAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19tZW51SXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTIwMHB4KScpLm1hdGNoZXMpIHtcbiAgICAgIHRoaXMuJC5vcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLiQuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5oZWFkZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHN1YiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudUl0ZW1TdWInKVxuICAgICAgICBpZiAoc3ViKSB7XG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51SXRlbUJ1dHRvbicpXG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gc3ViLm9mZnNldEhlaWdodFxuICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgc3ViLnN0eWxlLnRyYW5zaXRpb24gPSAnaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQnXG5cbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3ViLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19tZW51SXRlbVN1Yi0tb3BlbicpKSB7XG4gICAgICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgICAgIHN1Yi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnVJdGVtU3ViLS1vcGVuJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1Yi5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG4gICAgICAgICAgICAgIHN1Yi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX21lbnVJdGVtU3ViLS1vcGVuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiLyoqKioqKioqKipcbiAqIElucHV0R3JvdXBcbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIElucHV0R3JvdXAge1xuICBjb25zdHJ1Y3RvcigkaW5wdXRHcm91cCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuaW5wdXRHcm91cCA9ICRpbnB1dEdyb3VwIC8vIEFkZCBpbnB1dEdyb3VwIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kLmlucHV0R3JvdXAuaW5uZXJIVE1MXG4gICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwX19jb250ZW50JylcbiAgICAkY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50XG4gICAgdGhpcy4kLmlucHV0ID0gJGNvbnRlbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dEdyb3VwLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy4kLmlucHV0R3JvdXAuYXBwZW5kQ2hpbGQoJGNvbnRlbnQpXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0R3JvdXAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXAtLWFjdGl2ZScpXG4gICAgfSlcblxuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLiQuaW5wdXQudmFsdWUpXG4gICAgICAgIHRoaXMuJC5pbnB1dEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWdyb3VwLS1hY3RpdmUnKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cFxuIiwiLyoqKioqKioqKipcbiAqIE1vZGFsXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKCRtb2RhbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQubW9kYWwgPSAkbW9kYWwgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1vZGFsLWJ1dHRvbltkYXRhLW1vZGFsPVwiJHt0aGlzLiQubW9kYWwuZGF0YXNldC5tb2RhbH1cIl1gXG4gICAgICApXG4gICAgKVxuICAgICAgdGhpcy4kLmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubW9kYWwtYnV0dG9uW2RhdGEtbW9kYWw9XCIke3RoaXMuJC5tb2RhbC5kYXRhc2V0Lm1vZGFsfVwiXWBcbiAgICAgIClcbiAgICBpZiAodGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKSlcbiAgICAgIHRoaXMuJC5jbG9zZSA9IHRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJylcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLS1hY3RpdmUnKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKS5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy4kLmJ1dHRvbikge1xuICAgICAgdGhpcy4kLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kLmNsb3NlKSB7XG4gICAgICB0aGlzLiQuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCJjbGFzcyBSZXNldCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICBpZiAoIS9eW2EtejAtOV0kL2kudGVzdChldmVudC5rZXkpKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdrZXlib2FyZCcpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNldFxuIiwiLyoqXG4gKiBTd2l0Y2hcbiAqL1xuXG5jbGFzcyBTd2l0Y2gge1xuICBjb25zdHJ1Y3Rvcigkc3dpdGNoKSB7XG4gICAgdGhpcy4kID0ge30gLy8gaW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzXG4gICAgdGhpcy4kLnN3aXRjaCA9ICRzd2l0Y2ggLy8gYWRkIHN3aXRjaCBpbiBET00gb2JqZWN0c1xuXG4gICAgdGhpcy5pbml0UGFyYW1zKClcbiAgICB0aGlzLmluaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIGluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBpbml0UGFyYW1zKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy4kLnN3aXRjaC5jaGVja2VkXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuJC5zd2l0Y2guZGF0YXNldC5sYWJlbFxuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5zd2l0Y2guZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0aWFsaXplIGNvbXBvbmVudFxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBjcmVhdGUgY29tcG9uZW50XG4gICAgY29uc3QgJGNyZWF0ZVN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNyZWF0ZVN3aXRjaC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKVxuICAgICRjcmVhdGVTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICBpZiAodGhpcy5hY3RpdmUpICRjcmVhdGVTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoLS1hY3RpdmUnKVxuICAgIHRoaXMuJC5zd2l0Y2gucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoJGNyZWF0ZVN3aXRjaCwgdGhpcy4kLnN3aXRjaClcbiAgICB0aGlzLiQuc3dpdGNoID0gJGNyZWF0ZVN3aXRjaFxuXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3dpdGNoX19jb250YWluZXInKVxuXG4gICAgLy8gY3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB0aGlzLiQuaW5wdXQuY2hlY2tlZCA9IHRydWVcbiAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgdGhpcy4kLnN3aXRjaC5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgLy8gY3JlYXRlIGxhYmVsXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIGNvbnN0ICRsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMubmFtZSlcbiAgICAgICRsYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2hfX2xhYmVsJylcbiAgICAgICRsYWJlbC5pbm5lclRleHQgPSB0aGlzLmxhYmVsXG4gICAgICB0aGlzLiQuc3dpdGNoLmFwcGVuZENoaWxkKCRsYWJlbClcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50cygpXG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgdGhpcy4kLnN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLiQuc3dpdGNoLmNsYXNzTGlzdC50b2dnbGUoJ3N3aXRjaC0tYWN0aXZlJylcbiAgICAgIHRoaXMuJC5pbnB1dC5jaGVja2VkID0gIXRoaXMuJC5pbnB1dC5jaGVja2VkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hcbiIsIi8qKioqKioqKioqXG4gKiBUYWJzXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBUYWJzIHtcbiAgY29uc3RydWN0b3IoJHRhYnMpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLnRhYnMgPSAkdGFicyAvLyBBZGQgbW9kYWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmhlYWRlckl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19oZWFkZXJJdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0ICRoZWFkZXJJdGVtIG9mIHRoaXMuJC5oZWFkZXJJdGVtcykge1xuICAgICAgY29uc3QgJGNvbnRlbnRJdGVtID0gdGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50YWJzX19jb250ZW50SXRlbVtkYXRhLWl0ZW09XCIkeyRoZWFkZXJJdGVtLmRhdGFzZXQuaXRlbX1cIl1gXG4gICAgICApXG4gICAgICAkaGVhZGVySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpKVxuICAgICAgICAgIHRoaXMuJC50YWJzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkaGVhZGVySXRlbS5jbGFzc0xpc3QuYWRkKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkY29udGVudEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG4iLCJpbXBvcnQgJy4vcG9seWZpbGxzL0FycmF5LmZyb20nXG5pbXBvcnQgJy4vcG9seWZpbGxzL2ludGVyc2VjdGlvbk9ic2VydmVyJ1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbidcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi9BbmltYXRpb24nXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCdcbmltcG9ydCBDdXN0b21GaWxlIGZyb20gJy4vQ3VzdG9tRmlsZSdcbmltcG9ydCBDdXN0b21SYW5nZSBmcm9tICcuL0N1c3RvbVJhbmdlJ1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tICcuL0N1c3RvbVNlbGVjdCdcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJy4vSW5wdXRHcm91cCdcbmltcG9ydCBGb3JtVmFsaWRhdGlvbiBmcm9tICcuL0Zvcm1WYWxpZGF0aW9uJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4vU3dpdGNoJ1xuaW1wb3J0IFJlc2V0IGZyb20gJy4vUmVzZXQnXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5cbmNvbnN0ICRhY2NvcmRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpXG5mb3IgKGNvbnN0ICRhY2NvcmRpb24gb2YgJGFjY29yZGlvbnMpIHtcbiAgbmV3IEFjY29yZGlvbigkYWNjb3JkaW9uKVxufVxuXG5uZXcgQW5pbWF0aW9uKClcblxuY29uc3QgJGNhcm91c2VscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsJykpXG5mb3IgKGNvbnN0ICRjYXJvdXNlbCBvZiAkY2Fyb3VzZWxzKSB7XG4gIG5ldyBDYXJvdXNlbCgkY2Fyb3VzZWwpXG59XG5cbmNvbnN0ICRjdXN0b21GaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1maWxlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21GaWxlIG9mICRjdXN0b21GaWxlcykge1xuICBuZXcgQ3VzdG9tRmlsZSgkY3VzdG9tRmlsZSlcbn1cblxuY29uc3QgJGN1c3RvbVJhbmdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYW5nZScpKVxuZm9yIChjb25zdCAkY3VzdG9tUmFuZ2Ugb2YgJGN1c3RvbVJhbmdlcykge1xuICBuZXcgQ3VzdG9tUmFuZ2UoJGN1c3RvbVJhbmdlKVxufVxuXG5jb25zdCAkY3VzdG9tU2VsZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3QnKSlcbmZvciAoY29uc3QgJGN1c3RvbVNlbGVjdCBvZiAkY3VzdG9tU2VsZWN0cykge1xuICBuZXcgQ3VzdG9tU2VsZWN0KCRjdXN0b21TZWxlY3QpXG59XG5cbmNvbnN0ICRkcm9wZG93bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpKVxuZm9yIChjb25zdCAkZHJvcGRvd24gb2YgJGRyb3Bkb3ducykge1xuICBuZXcgRHJvcGRvd24oJGRyb3Bkb3duKVxufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpKSBuZXcgSGVhZGVyKClcblxuY29uc3QgJGlucHV0R3JvdXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKSlcbmZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgJGlucHV0R3JvdXBzKSB7XG4gIG5ldyBJbnB1dEdyb3VwKCRpbnB1dEdyb3VwKVxufVxuXG5jb25zdCAkZm9ybXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWxpZGF0aW9uJykpXG5mb3IgKGNvbnN0ICRmb3JtIG9mICRmb3Jtcykge1xuICBuZXcgRm9ybVZhbGlkYXRpb24oJGZvcm0pXG59XG5cbmNvbnN0ICRtb2RhbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpKVxuZm9yIChjb25zdCAkbW9kYWwgb2YgJG1vZGFscykge1xuICBuZXcgTW9kYWwoJG1vZGFsKVxufVxuXG5jb25zdCAkc3dpdGNocyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXRjaCcpKVxuZm9yIChjb25zdCAkc3dpdGNoIG9mICRzd2l0Y2hzKSB7XG4gIG5ldyBTd2l0Y2goJHN3aXRjaClcbn1cblxubmV3IFJlc2V0KClcblxuY29uc3QgJHRhYnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpXG5mb3IgKGNvbnN0ICR0YWIgb2YgJHRhYnMpIHtcbiAgbmV3IFRhYnMoJHRhYilcbn1cbiIsImlmICghQXJyYXkuZnJvbSkge1xuICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbiAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICAgfVxuICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSlcbiAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAobnVtYmVyID09PSAwIHx8ICFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiBudW1iZXJcbiAgICAgIH1cbiAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpXG4gICAgfVxuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDFcbiAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSlcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcilcbiAgICB9XG5cbiAgICAvLyBUaGUgbGVuZ3RoIHByb3BlcnR5IG9mIHRoZSBmcm9tIG1ldGhvZCBpcyAxLlxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICAgIC8vIDEuIExldCBDIGJlIHRoZSB0aGlzIHZhbHVlLlxuICAgICAgdmFyIEMgPSB0aGlzXG5cbiAgICAgIC8vIDIuIExldCBpdGVtcyBiZSBUb09iamVjdChhcnJheUxpa2UpLlxuICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0KGFycmF5TGlrZSlcblxuICAgICAgLy8gMy4gUmV0dXJuSWZBYnJ1cHQoaXRlbXMpLlxuICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ0FycmF5LmZyb20gcmVxdWlyZXMgYW4gYXJyYXktbGlrZSBvYmplY3QgLSBub3QgbnVsbCBvciB1bmRlZmluZWQnXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gNC4gSWYgbWFwZm4gaXMgdW5kZWZpbmVkLCB0aGVuIGxldCBtYXBwaW5nIGJlIGZhbHNlLlxuICAgICAgdmFyIG1hcEZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIHVuZGVmaW5lZFxuICAgICAgdmFyIFRcbiAgICAgIGlmICh0eXBlb2YgbWFwRm4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDUuIGVsc2VcbiAgICAgICAgLy8gNS4gYSBJZiBJc0NhbGxhYmxlKG1hcGZuKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICdBcnJheS5mcm9tOiB3aGVuIHByb3ZpZGVkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbidcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICAvLyA1LiBiLiBJZiB0aGlzQXJnIHdhcyBzdXBwbGllZCwgbGV0IFQgYmUgdGhpc0FyZzsgZWxzZSBsZXQgVCBiZSB1bmRlZmluZWQuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAxMC4gTGV0IGxlblZhbHVlIGJlIEdldChpdGVtcywgXCJsZW5ndGhcIikuXG4gICAgICAvLyAxMS4gTGV0IGxlbiBiZSBUb0xlbmd0aChsZW5WYWx1ZSkuXG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKVxuXG4gICAgICAvLyAxMy4gSWYgSXNDb25zdHJ1Y3RvcihDKSBpcyB0cnVlLCB0aGVuXG4gICAgICAvLyAxMy4gYS4gTGV0IEEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZCBvZiBDIHdpdGggYW4gYXJndW1lbnQgbGlzdCBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbSBsZW4uXG4gICAgICAvLyAxNC4gYS4gRWxzZSwgTGV0IEEgYmUgQXJyYXlDcmVhdGUobGVuKS5cbiAgICAgIHZhciBBID0gaXNDYWxsYWJsZShDKSA/IE9iamVjdChuZXcgQyhsZW4pKSA6IG5ldyBBcnJheShsZW4pXG5cbiAgICAgIC8vIDE2LiBMZXQgayBiZSAwLlxuICAgICAgdmFyIGsgPSAwXG4gICAgICAvLyAxNy4gUmVwZWF0LCB3aGlsZSBrIDwgbGVu4oCmIChhbHNvIHN0ZXBzIGEgLSBoKVxuICAgICAgdmFyIGtWYWx1ZVxuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAga1ZhbHVlID0gaXRlbXNba11cbiAgICAgICAgaWYgKG1hcEZuKSB7XG4gICAgICAgICAgQVtrXSA9XG4gICAgICAgICAgICB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgPyBtYXBGbihrVmFsdWUsIGspXG4gICAgICAgICAgICAgIDogbWFwRm4uY2FsbChULCBrVmFsdWUsIGspXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQVtrXSA9IGtWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIGsgKz0gMVxuICAgICAgfVxuICAgICAgLy8gMTguIExldCBwdXRTdGF0dXMgYmUgUHV0KEEsIFwibGVuZ3RoXCIsIGxlbiwgdHJ1ZSkuXG4gICAgICBBLmxlbmd0aCA9IGxlblxuICAgICAgLy8gMjAuIFJldHVybiBBLlxuICAgICAgcmV0dXJuIEFcbiAgICB9XG4gIH0pKClcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNPRlRXQVJFIEFORCBET0NVTUVOVCBOT1RJQ0UgQU5EIExJQ0VOU0UuXG4gKlxuICogIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxuICpcbiAqL1xuOyhmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgLy8gRXhpdCBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbiBhIGJyb3dzZXIuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRXhpdCBlYXJseSBpZiBhbGwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgYW5kIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlcbiAgLy8gZmVhdHVyZXMgYXJlIG5hdGl2ZWx5IHN1cHBvcnRlZC5cbiAgaWYgKFxuICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93ICYmXG4gICAgJ0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnknIGluIHdpbmRvdyAmJlxuICAgICdpbnRlcnNlY3Rpb25SYXRpbycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlXG4gICkge1xuICAgIC8vIE1pbmltYWwgcG9seWZpbGwgZm9yIEVkZ2UgMTUncyBsYWNrIG9mIGBpc0ludGVyc2VjdGluZ2BcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvaXNzdWVzLzIxMVxuICAgIGlmICghKCdpc0ludGVyc2VjdGluZycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUsXG4gICAgICAgICdpc0ludGVyc2VjdGluZycsXG4gICAgICAgIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVtYmVkZGluZyBmcmFtZSBlbGVtZW50LCBpZiBhbnkuXG4gICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2NcbiAgICogQHJldHVybiB7IUVsZW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRGcmFtZUVsZW1lbnQoZG9jKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZG9jLmRlZmF1bHRWaWV3ICYmIGRvYy5kZWZhdWx0Vmlldy5mcmFtZUVsZW1lbnQpIHx8IG51bGxcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZ25vcmUgdGhlIGVycm9yLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgZG9jdW1lbnQuXG4gICAqL1xuICB2YXIgZG9jdW1lbnQgPSAoZnVuY3Rpb24oc3RhcnREb2MpIHtcbiAgICB2YXIgZG9jID0gc3RhcnREb2NcbiAgICB2YXIgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZG9jKVxuICAgIHdoaWxlIChmcmFtZSkge1xuICAgICAgZG9jID0gZnJhbWUub3duZXJEb2N1bWVudFxuICAgICAgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZG9jKVxuICAgIH1cbiAgICByZXR1cm4gZG9jXG4gIH0pKHdpbmRvdy5kb2N1bWVudClcblxuICAvKipcbiAgICogQW4gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkuIFRoaXMgcmVnaXN0cnkgZXhpc3RzIHRvIGhvbGQgYSBzdHJvbmdcbiAgICogcmVmZXJlbmNlIHRvIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlcyBjdXJyZW50bHkgb2JzZXJ2aW5nIGEgdGFyZ2V0XG4gICAqIGVsZW1lbnQuIFdpdGhvdXQgdGhpcyByZWdpc3RyeSwgaW5zdGFuY2VzIHdpdGhvdXQgYW5vdGhlciByZWZlcmVuY2UgbWF5IGJlXG4gICAqIGdhcmJhZ2UgY29sbGVjdGVkLlxuICAgKi9cbiAgdmFyIHJlZ2lzdHJ5ID0gW11cblxuICAvKipcbiAgICogVGhlIHNpZ25hbCB1cGRhdGVyIGZvciBjcm9zcy1vcmlnaW4gaW50ZXJzZWN0aW9uLiBXaGVuIG5vdCBudWxsLCBpdCBtZWFuc1xuICAgKiB0aGF0IHRoZSBwb2x5ZmlsbCBpcyBjb25maWd1cmVkIHRvIHdvcmsgaW4gYSBjcm9zcy1vcmlnaW4gbW9kZS5cbiAgICogQHR5cGUge2Z1bmN0aW9uKERPTVJlY3R8Q2xpZW50UmVjdCwgRE9NUmVjdHxDbGllbnRSZWN0KX1cbiAgICovXG4gIHZhciBjcm9zc09yaWdpblVwZGF0ZXIgPSBudWxsXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IGNyb3NzLW9yaWdpbiBpbnRlcnNlY3Rpb24uIE9ubHkgdXNlZCBpbiB0aGUgY3Jvc3Mtb3JpZ2luIG1vZGUuXG4gICAqIEB0eXBlIHtET01SZWN0fENsaWVudFJlY3R9XG4gICAqL1xuICB2YXIgY3Jvc3NPcmlnaW5SZWN0ID0gbnVsbFxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSBjb25zdHJ1Y3Rvci5cbiAgICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItZW50cnlcbiAgICogQHBhcmFtIHtPYmplY3R9IGVudHJ5IEEgZGljdGlvbmFyeSBvZiBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoZW50cnkpIHtcbiAgICB0aGlzLnRpbWUgPSBlbnRyeS50aW1lXG4gICAgdGhpcy50YXJnZXQgPSBlbnRyeS50YXJnZXRcbiAgICB0aGlzLnJvb3RCb3VuZHMgPSBlbnN1cmVET01SZWN0KGVudHJ5LnJvb3RCb3VuZHMpXG4gICAgdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QgPSBlbnN1cmVET01SZWN0KGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdClcbiAgICB0aGlzLmludGVyc2VjdGlvblJlY3QgPSBlbnN1cmVET01SZWN0KFxuICAgICAgZW50cnkuaW50ZXJzZWN0aW9uUmVjdCB8fCBnZXRFbXB0eVJlY3QoKVxuICAgIClcbiAgICB0aGlzLmlzSW50ZXJzZWN0aW5nID0gISFlbnRyeS5pbnRlcnNlY3Rpb25SZWN0XG5cbiAgICAvLyBDYWxjdWxhdGVzIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8uXG4gICAgdmFyIHRhcmdldFJlY3QgPSB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdFxuICAgIHZhciB0YXJnZXRBcmVhID0gdGFyZ2V0UmVjdC53aWR0aCAqIHRhcmdldFJlY3QuaGVpZ2h0XG4gICAgdmFyIGludGVyc2VjdGlvblJlY3QgPSB0aGlzLmludGVyc2VjdGlvblJlY3RcbiAgICB2YXIgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvblJlY3Qud2lkdGggKiBpbnRlcnNlY3Rpb25SZWN0LmhlaWdodFxuXG4gICAgLy8gU2V0cyBpbnRlcnNlY3Rpb24gcmF0aW8uXG4gICAgaWYgKHRhcmdldEFyZWEpIHtcbiAgICAgIC8vIFJvdW5kIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8gdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBpc3N1ZXM6XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL2lzc3Vlcy8zMjRcbiAgICAgIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSBOdW1iZXIoXG4gICAgICAgIChpbnRlcnNlY3Rpb25BcmVhIC8gdGFyZ2V0QXJlYSkudG9GaXhlZCg0KVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBhcmVhIGlzIHplcm8gYW5kIGlzIGludGVyc2VjdGluZywgc2V0cyB0byAxLCBvdGhlcndpc2UgdG8gMFxuICAgICAgdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IHRoaXMuaXNJbnRlcnNlY3RpbmcgPyAxIDogMFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgY29uc3RydWN0b3IuXG4gICAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWludGVyZmFjZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciBpbnRlcnNlY3Rpb25cbiAgICogICAgIGNoYW5nZXMgaGF2ZSBxdWV1ZWQuIFRoZSBmdW5jdGlvbiBpcyBub3QgaW52b2tlZCBpZiB0aGUgcXVldWUgaGFzXG4gICAqICAgICBiZWVuIGVtcHRpZWQgYnkgY2FsbGluZyB0aGUgYHRha2VSZWNvcmRzYCBtZXRob2QuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X29wdGlvbnMgT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRfb3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge31cblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLnJvb3QgJiZcbiAgICAgIG9wdGlvbnMucm9vdC5ub2RlVHlwZSAhPSAxICYmXG4gICAgICBvcHRpb25zLnJvb3Qubm9kZVR5cGUgIT0gOVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyb290IG11c3QgYmUgYSBEb2N1bWVudCBvciBFbGVtZW50JylcbiAgICB9XG5cbiAgICAvLyBCaW5kcyBhbmQgdGhyb3R0bGVzIGB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnNgLlxuICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyA9IHRocm90dGxlKFxuICAgICAgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLmJpbmQodGhpcyksXG4gICAgICB0aGlzLlRIUk9UVExFX1RJTUVPVVRcbiAgICApXG5cbiAgICAvLyBQcml2YXRlIHByb3BlcnRpZXMuXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fcXVldWVkRW50cmllcyA9IFtdXG4gICAgdGhpcy5fcm9vdE1hcmdpblZhbHVlcyA9IHRoaXMuX3BhcnNlUm9vdE1hcmdpbihvcHRpb25zLnJvb3RNYXJnaW4pXG5cbiAgICAvLyBQdWJsaWMgcHJvcGVydGllcy5cbiAgICB0aGlzLnRocmVzaG9sZHMgPSB0aGlzLl9pbml0VGhyZXNob2xkcyhvcHRpb25zLnRocmVzaG9sZClcbiAgICB0aGlzLnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgbnVsbFxuICAgIHRoaXMucm9vdE1hcmdpbiA9IHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXNcbiAgICAgIC5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgICAgIHJldHVybiBtYXJnaW4udmFsdWUgKyBtYXJnaW4udW5pdFxuICAgICAgfSlcbiAgICAgIC5qb2luKCcgJylcblxuICAgIC8qKiBAcHJpdmF0ZSBAY29uc3QgeyFBcnJheTwhRG9jdW1lbnQ+fSAqL1xuICAgIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMgPSBbXVxuICAgIC8qKiBAcHJpdmF0ZSBAY29uc3QgeyFBcnJheTxmdW5jdGlvbigpPn0gKi9cbiAgICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBpbnRlcnZhbCB3aXRoaW4gd2hpY2ggdGhlIGRvY3VtZW50IHdpbGwgYmUgY2hlY2tlZCBmb3JcbiAgICogaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVEhST1RUTEVfVElNRU9VVCA9IDEwMFxuXG4gIC8qKlxuICAgKiBUaGUgZnJlcXVlbmN5IGluIHdoaWNoIHRoZSBwb2x5ZmlsbCBwb2xscyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqIHRoaXMgY2FuIGJlIHVwZGF0ZWQgb24gYSBwZXIgaW5zdGFuY2UgYmFzaXMgYW5kIG11c3QgYmUgc2V0IHByaW9yIHRvXG4gICAqIGNhbGxpbmcgYG9ic2VydmVgIG9uIHRoZSBmaXJzdCB0YXJnZXQuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuUE9MTF9JTlRFUlZBTCA9IG51bGxcblxuICAvKipcbiAgICogVXNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgb24gdGhlIHJvb3QgZWxlbWVudFxuICAgKiB0byBkZXRlY3QgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVVNFX01VVEFUSU9OX09CU0VSVkVSID0gdHJ1ZVxuXG4gIC8qKlxuICAgKiBTZXRzIHVwIHRoZSBwb2x5ZmlsbCBpbiB0aGUgY3Jvc3Mtb3JpZ2luIG1vZGUuIFRoZSByZXN1bHQgaXMgdGhlXG4gICAqIHVwZGF0ZXIgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHR3byBhcmd1bWVudHM6IGBib3VuZGluZ0NsaWVudFJlY3RgIGFuZFxuICAgKiBgaW50ZXJzZWN0aW9uUmVjdGAgLSBqdXN0IGFzIHRoZXNlIGZpZWxkcyB3b3VsZCBiZSBhdmFpbGFibGUgdG8gdGhlXG4gICAqIHBhcmVudCB2aWEgYEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlgLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWRcbiAgICogZWFjaCB0aW1lIHRoZSBpZnJhbWUgcmVjZWl2ZXMgaW50ZXJzZWN0aW9uIGluZm9ybWF0aW9uIGZyb20gdGhlIHBhcmVudFxuICAgKiB3aW5kb3csIGUuZy4gdmlhIG1lc3NhZ2luZy5cbiAgICogQHJldHVybiB7ZnVuY3Rpb24oRE9NUmVjdHxDbGllbnRSZWN0LCBET01SZWN0fENsaWVudFJlY3QpfVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIuX3NldHVwQ3Jvc3NPcmlnaW5VcGRhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFjcm9zc09yaWdpblVwZGF0ZXIpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IGJvdW5kaW5nQ2xpZW50UmVjdFxuICAgICAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IGludGVyc2VjdGlvblJlY3RcbiAgICAgICAqL1xuICAgICAgY3Jvc3NPcmlnaW5VcGRhdGVyID0gZnVuY3Rpb24oYm91bmRpbmdDbGllbnRSZWN0LCBpbnRlcnNlY3Rpb25SZWN0KSB7XG4gICAgICAgIGlmICghYm91bmRpbmdDbGllbnRSZWN0IHx8ICFpbnRlcnNlY3Rpb25SZWN0KSB7XG4gICAgICAgICAgY3Jvc3NPcmlnaW5SZWN0ID0gZ2V0RW1wdHlSZWN0KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjcm9zc09yaWdpblJlY3QgPSBjb252ZXJ0RnJvbVBhcmVudFJlY3QoXG4gICAgICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25SZWN0XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJlZ2lzdHJ5LmZvckVhY2goZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcbiAgICAgICAgICBvYnNlcnZlci5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3NzT3JpZ2luVXBkYXRlclxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIG1vZGUuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5fcmVzZXRDcm9zc09yaWdpblVwZGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBjcm9zc09yaWdpblVwZGF0ZXIgPSBudWxsXG4gICAgY3Jvc3NPcmlnaW5SZWN0ID0gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYmFzZWQgb25cbiAgICogdGhlIHRocmVzaG9sZHMgdmFsdWVzLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdmFyIGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkID0gdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnNvbWUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudCA9PSB0YXJnZXRcbiAgICB9KVxuXG4gICAgaWYgKGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoISh0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVUeXBlID09IDEpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIEVsZW1lbnQnKVxuICAgIH1cblxuICAgIHRoaXMuX3JlZ2lzdGVySW5zdGFuY2UoKVxuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5wdXNoKHsgZWxlbWVudDogdGFyZ2V0LCBlbnRyeTogbnVsbCB9KVxuICAgIHRoaXMuX21vbml0b3JJbnRlcnNlY3Rpb25zKHRhcmdldC5vd25lckRvY3VtZW50KVxuICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucygpXG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQgIT0gdGFyZ2V0XG4gICAgfSlcbiAgICB0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKHRhcmdldC5vd25lckRvY3VtZW50KVxuICAgIGlmICh0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuX3VucmVnaXN0ZXJJbnN0YW5jZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIG9ic2VydmluZyBhbGwgdGFyZ2V0IGVsZW1lbnRzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW11cbiAgICB0aGlzLl91bm1vbml0b3JBbGxJbnRlcnNlY3Rpb25zKClcbiAgICB0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW55IHF1ZXVlIGVudHJpZXMgdGhhdCBoYXZlIG5vdCB5ZXQgYmVlbiByZXBvcnRlZCB0byB0aGVcbiAgICogY2FsbGJhY2sgYW5kIGNsZWFycyB0aGUgcXVldWUuIFRoaXMgY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogY2FsbGJhY2sgdG8gb2J0YWluIHRoZSBhYnNvbHV0ZSBtb3N0IHVwLXRvLWRhdGUgaW50ZXJzZWN0aW9uIGluZm9ybWF0aW9uLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIGN1cnJlbnRseSBxdWV1ZWQgZW50cmllcy5cbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS50YWtlUmVjb3JkcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWNvcmRzID0gdGhpcy5fcXVldWVkRW50cmllcy5zbGljZSgpXG4gICAgdGhpcy5fcXVldWVkRW50cmllcyA9IFtdXG4gICAgcmV0dXJuIHJlY29yZHNcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIHRoZSB0aHJlc2hvbGQgdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdCBhbmRcbiAgICogcmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB1bmlxdWUgdGhyZXNob2xkIHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBub3RcbiAgICogYmV0d2VlbiAwIGFuZCAxIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7QXJyYXl8bnVtYmVyPX0gb3B0X3RocmVzaG9sZCBBbiBvcHRpb25hbCB0aHJlc2hvbGQgdmFsdWUgb3JcbiAgICogICAgIGEgbGlzdCBvZiB0aHJlc2hvbGQgdmFsdWVzLCBkZWZhdWx0aW5nIHRvIFswXS5cbiAgICogQHJldHVybiB7QXJyYXl9IEEgc29ydGVkIGxpc3Qgb2YgdW5pcXVlIGFuZCB2YWxpZCB0aHJlc2hvbGQgdmFsdWVzLlxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9pbml0VGhyZXNob2xkcyA9IGZ1bmN0aW9uKG9wdF90aHJlc2hvbGQpIHtcbiAgICB2YXIgdGhyZXNob2xkID0gb3B0X3RocmVzaG9sZCB8fCBbMF1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZXNob2xkKSkgdGhyZXNob2xkID0gW3RocmVzaG9sZF1cblxuICAgIHJldHVybiB0aHJlc2hvbGQuc29ydCgpLmZpbHRlcihmdW5jdGlvbih0LCBpLCBhKSB7XG4gICAgICBpZiAodHlwZW9mIHQgIT09ICdudW1iZXInIHx8IGlzTmFOKHQpIHx8IHQgPCAwIHx8IHQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAndGhyZXNob2xkIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZWx5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gdCAhPT0gYVtpIC0gMV1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgdGhlIHJvb3RNYXJnaW4gdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgZm91ciBtYXJnaW4gdmFsdWVzIGFzIGFuIG9iamVjdCBjb250YWluaW5nXG4gICAqIHRoZSB2YWx1ZSBhbmQgdW5pdCBwcm9wZXJ0aWVzLiBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgbm90IHByb3Blcmx5XG4gICAqIGZvcm1hdHRlZCBvciB1c2UgYSB1bml0IG90aGVyIHRoYW4gcHggb3IgJSwgYW5kIGVycm9yIGlzIHRocm93bi5cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfcm9vdE1hcmdpbiBBbiBvcHRpb25hbCByb290TWFyZ2luIHZhbHVlLFxuICAgKiAgICAgZGVmYXVsdGluZyB0byAnMHB4Jy5cbiAgICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn0gQW4gYXJyYXkgb2YgbWFyZ2luIG9iamVjdHMgd2l0aCB0aGUga2V5c1xuICAgKiAgICAgdmFsdWUgYW5kIHVuaXQuXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3BhcnNlUm9vdE1hcmdpbiA9IGZ1bmN0aW9uKG9wdF9yb290TWFyZ2luKSB7XG4gICAgdmFyIG1hcmdpblN0cmluZyA9IG9wdF9yb290TWFyZ2luIHx8ICcwcHgnXG4gICAgdmFyIG1hcmdpbnMgPSBtYXJnaW5TdHJpbmcuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgICB2YXIgcGFydHMgPSAvXigtP1xcZCpcXC4/XFxkKykocHh8JSkkLy5leGVjKG1hcmdpbilcbiAgICAgIGlmICghcGFydHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyb290TWFyZ2luIG11c3QgYmUgc3BlY2lmaWVkIGluIHBpeGVscyBvciBwZXJjZW50JylcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHZhbHVlOiBwYXJzZUZsb2F0KHBhcnRzWzFdKSwgdW5pdDogcGFydHNbMl0gfVxuICAgIH0pXG5cbiAgICAvLyBIYW5kbGVzIHNob3J0aGFuZC5cbiAgICBtYXJnaW5zWzFdID0gbWFyZ2luc1sxXSB8fCBtYXJnaW5zWzBdXG4gICAgbWFyZ2luc1syXSA9IG1hcmdpbnNbMl0gfHwgbWFyZ2luc1swXVxuICAgIG1hcmdpbnNbM10gPSBtYXJnaW5zWzNdIHx8IG1hcmdpbnNbMV1cblxuICAgIHJldHVybiBtYXJnaW5zXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGlmIHRoZSBwb2xsaW5nIGlzIG5vdCBhbHJlYWR5XG4gICAqIGhhcHBlbmluZywgYW5kIGlmIHRoZSBwYWdlJ3MgdmlzaWJpbGl0eSBzdGF0ZSBpcyB2aXNpYmxlLlxuICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX21vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oZG9jKSB7XG4gICAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0Vmlld1xuICAgIGlmICghd2luKSB7XG4gICAgICAvLyBBbHJlYWR5IGRlc3Ryb3llZC5cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5pbmRleE9mKGRvYykgIT0gLTEpIHtcbiAgICAgIC8vIEFscmVhZHkgbW9uaXRvcmluZy5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFByaXZhdGUgc3RhdGUgZm9yIG1vbml0b3JpbmcuXG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zXG4gICAgdmFyIG1vbml0b3JpbmdJbnRlcnZhbCA9IG51bGxcbiAgICB2YXIgZG9tT2JzZXJ2ZXIgPSBudWxsXG5cbiAgICAvLyBJZiBhIHBvbGwgaW50ZXJ2YWwgaXMgc2V0LCB1c2UgcG9sbGluZyBpbnN0ZWFkIG9mIGxpc3RlbmluZyB0b1xuICAgIC8vIHJlc2l6ZSBhbmQgc2Nyb2xsIGV2ZW50cyBvciBET00gbXV0YXRpb25zLlxuICAgIGlmICh0aGlzLlBPTExfSU5URVJWQUwpIHtcbiAgICAgIG1vbml0b3JpbmdJbnRlcnZhbCA9IHdpbi5zZXRJbnRlcnZhbChjYWxsYmFjaywgdGhpcy5QT0xMX0lOVEVSVkFMKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRFdmVudCh3aW4sICdyZXNpemUnLCBjYWxsYmFjaywgdHJ1ZSlcbiAgICAgIGFkZEV2ZW50KGRvYywgJ3Njcm9sbCcsIGNhbGxiYWNrLCB0cnVlKVxuICAgICAgaWYgKHRoaXMuVVNFX01VVEFUSU9OX09CU0VSVkVSICYmICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW4pIHtcbiAgICAgICAgZG9tT2JzZXJ2ZXIgPSBuZXcgd2luLk11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spXG4gICAgICAgIGRvbU9ic2VydmVyLm9ic2VydmUoZG9jLCB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5wdXNoKGRvYylcbiAgICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAvLyBHZXQgdGhlIHdpbmRvdyBvYmplY3QgYWdhaW4uIFdoZW4gYSBmcmllbmRseSBpZnJhbWUgaXMgZGVzdHJveWVkLCBpdFxuICAgICAgLy8gd2lsbCBiZSBudWxsLlxuICAgICAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0Vmlld1xuXG4gICAgICBpZiAod2luKSB7XG4gICAgICAgIGlmIChtb25pdG9yaW5nSW50ZXJ2YWwpIHtcbiAgICAgICAgICB3aW4uY2xlYXJJbnRlcnZhbChtb25pdG9yaW5nSW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlRXZlbnQod2luLCAncmVzaXplJywgY2FsbGJhY2ssIHRydWUpXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUV2ZW50KGRvYywgJ3Njcm9sbCcsIGNhbGxiYWNrLCB0cnVlKVxuICAgICAgaWYgKGRvbU9ic2VydmVyKSB7XG4gICAgICAgIGRvbU9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBBbHNvIG1vbml0b3IgdGhlIHBhcmVudC5cbiAgICB2YXIgcm9vdERvYyA9XG4gICAgICAodGhpcy5yb290ICYmICh0aGlzLnJvb3Qub3duZXJEb2N1bWVudCB8fCB0aGlzLnJvb3QpKSB8fCBkb2N1bWVudFxuICAgIGlmIChkb2MgIT0gcm9vdERvYykge1xuICAgICAgdmFyIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGRvYylcbiAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICB0aGlzLl9tb25pdG9ySW50ZXJzZWN0aW9ucyhmcmFtZS5vd25lckRvY3VtZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oZG9jKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5pbmRleE9mKGRvYylcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciByb290RG9jID1cbiAgICAgICh0aGlzLnJvb3QgJiYgKHRoaXMucm9vdC5vd25lckRvY3VtZW50IHx8IHRoaXMucm9vdCkpIHx8IGRvY3VtZW50XG5cbiAgICAvLyBDaGVjayBpZiBhbnkgZGVwZW5kZW50IHRhcmdldHMgYXJlIHN0aWxsIHJlbWFpbmluZy5cbiAgICB2YXIgaGFzRGVwZW5kZW50VGFyZ2V0cyA9IHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBpdGVtRG9jID0gaXRlbS5lbGVtZW50Lm93bmVyRG9jdW1lbnRcbiAgICAgIC8vIFRhcmdldCBpcyBpbiB0aGlzIGNvbnRleHQuXG4gICAgICBpZiAoaXRlbURvYyA9PSBkb2MpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIC8vIFRhcmdldCBpcyBuZXN0ZWQgaW4gdGhpcyBjb250ZXh0LlxuICAgICAgd2hpbGUgKGl0ZW1Eb2MgJiYgaXRlbURvYyAhPSByb290RG9jKSB7XG4gICAgICAgIHZhciBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChpdGVtRG9jKVxuICAgICAgICBpdGVtRG9jID0gZnJhbWUgJiYgZnJhbWUub3duZXJEb2N1bWVudFxuICAgICAgICBpZiAoaXRlbURvYyA9PSBkb2MpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuICAgIGlmIChoYXNEZXBlbmRlbnRUYXJnZXRzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBVbnN1YnNjcmliZS5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzW2luZGV4XVxuICAgIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuX21vbml0b3JpbmdVbnN1YnNjcmliZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHVuc3Vic2NyaWJlKClcblxuICAgIC8vIEFsc28gdW5tb25pdG9yIHRoZSBwYXJlbnQuXG4gICAgaWYgKGRvYyAhPSByb290RG9jKSB7XG4gICAgICB2YXIgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZG9jKVxuICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgIHRoaXMuX3VubW9uaXRvckludGVyc2VjdGlvbnMoZnJhbWUub3duZXJEb2N1bWVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2NcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5tb25pdG9yQWxsSW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB1bnN1YnNjcmliZXMgPSB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLnNsaWNlKDApXG4gICAgdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5sZW5ndGggPSAwXG4gICAgdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcy5sZW5ndGggPSAwXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bnN1YnNjcmliZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHVuc3Vic2NyaWJlc1tpXSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjYW5zIGVhY2ggb2JzZXJ2YXRpb24gdGFyZ2V0IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBhbmQgYWRkcyB0aGVtXG4gICAqIHRvIHRoZSBpbnRlcm5hbCBlbnRyaWVzIHF1ZXVlLiBJZiBuZXcgZW50cmllcyBhcmUgZm91bmQsIGl0XG4gICAqIHNjaGVkdWxlcyB0aGUgY2FsbGJhY2sgdG8gYmUgaW52b2tlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QgJiYgY3Jvc3NPcmlnaW5VcGRhdGVyICYmICFjcm9zc09yaWdpblJlY3QpIHtcbiAgICAgIC8vIENyb3NzIG9yaWdpbiBtb25pdG9yaW5nLCBidXQgbm8gaW5pdGlhbCBkYXRhIGF2YWlsYWJsZSB5ZXQuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgcm9vdElzSW5Eb20gPSB0aGlzLl9yb290SXNJbkRvbSgpXG4gICAgdmFyIHJvb3RSZWN0ID0gcm9vdElzSW5Eb20gPyB0aGlzLl9nZXRSb290UmVjdCgpIDogZ2V0RW1wdHlSZWN0KClcblxuICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciB0YXJnZXQgPSBpdGVtLmVsZW1lbnRcbiAgICAgIHZhciB0YXJnZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRhcmdldClcbiAgICAgIHZhciByb290Q29udGFpbnNUYXJnZXQgPSB0aGlzLl9yb290Q29udGFpbnNUYXJnZXQodGFyZ2V0KVxuICAgICAgdmFyIG9sZEVudHJ5ID0gaXRlbS5lbnRyeVxuICAgICAgdmFyIGludGVyc2VjdGlvblJlY3QgPVxuICAgICAgICByb290SXNJbkRvbSAmJlxuICAgICAgICByb290Q29udGFpbnNUYXJnZXQgJiZcbiAgICAgICAgdGhpcy5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24odGFyZ2V0LCB0YXJnZXRSZWN0LCByb290UmVjdClcblxuICAgICAgdmFyIHJvb3RCb3VuZHMgPSBudWxsXG4gICAgICBpZiAoIXRoaXMuX3Jvb3RDb250YWluc1RhcmdldCh0YXJnZXQpKSB7XG4gICAgICAgIHJvb3RCb3VuZHMgPSBnZXRFbXB0eVJlY3QoKVxuICAgICAgfSBlbHNlIGlmICghY3Jvc3NPcmlnaW5VcGRhdGVyIHx8IHRoaXMucm9vdCkge1xuICAgICAgICByb290Qm91bmRzID0gcm9vdFJlY3RcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0VudHJ5ID0gKGl0ZW0uZW50cnkgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSh7XG4gICAgICAgIHRpbWU6IG5vdygpLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0OiB0YXJnZXRSZWN0LFxuICAgICAgICByb290Qm91bmRzOiByb290Qm91bmRzLFxuICAgICAgICBpbnRlcnNlY3Rpb25SZWN0OiBpbnRlcnNlY3Rpb25SZWN0XG4gICAgICB9KSlcblxuICAgICAgaWYgKCFvbGRFbnRyeSkge1xuICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpXG4gICAgICB9IGVsc2UgaWYgKHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCkge1xuICAgICAgICAvLyBJZiB0aGUgbmV3IGVudHJ5IGludGVyc2VjdGlvbiByYXRpbyBoYXMgY3Jvc3NlZCBhbnkgb2YgdGhlXG4gICAgICAgIC8vIHRocmVzaG9sZHMsIGFkZCBhIG5ldyBlbnRyeS5cbiAgICAgICAgaWYgKHRoaXMuX2hhc0Nyb3NzZWRUaHJlc2hvbGQob2xkRW50cnksIG5ld0VudHJ5KSkge1xuICAgICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHJvb3QgaXMgbm90IGluIHRoZSBET00gb3IgdGFyZ2V0IGlzIG5vdCBjb250YWluZWQgd2l0aGluXG4gICAgICAgIC8vIHJvb3QgYnV0IHRoZSBwcmV2aW91cyBlbnRyeSBmb3IgdGhpcyB0YXJnZXQgaGFkIGFuIGludGVyc2VjdGlvbixcbiAgICAgICAgLy8gYWRkIGEgbmV3IHJlY29yZCBpbmRpY2F0aW5nIHJlbW92YWwuXG4gICAgICAgIGlmIChvbGRFbnRyeSAmJiBvbGRFbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMpXG5cbiAgICBpZiAodGhpcy5fcXVldWVkRW50cmllcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2NhbGxiYWNrKHRoaXMudGFrZVJlY29yZHMoKSwgdGhpcylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhIHRhcmdldCBhbmQgcm9vdCByZWN0IGNvbXB1dGVzIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0aGVuXG4gICAqIGZvbGxvd2luZyB0aGUgYWxnb3JpdGhtIGluIHRoZSBzcGVjLlxuICAgKiBUT0RPKHBoaWxpcHdhbHRvbik6IGF0IHRoaXMgdGltZSBjbGlwLXBhdGggaXMgbm90IGNvbnNpZGVyZWQuXG4gICAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jY2FsY3VsYXRlLWludGVyc2VjdGlvbi1yZWN0LWFsZ29cbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBET00gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0UmVjdCBUaGUgYm91bmRpbmcgcmVjdCBvZiB0aGUgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gcm9vdFJlY3QgVGhlIGJvdW5kaW5nIHJlY3Qgb2YgdGhlIHJvb3QgYWZ0ZXIgYmVpbmdcbiAgICogICAgIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICAgKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgZmluYWwgaW50ZXJzZWN0aW9uIHJlY3Qgb2JqZWN0IG9yIHVuZGVmaW5lZCBpZiBub1xuICAgKiAgICAgaW50ZXJzZWN0aW9uIGlzIGZvdW5kLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKFxuICAgIHRhcmdldCxcbiAgICB0YXJnZXRSZWN0LFxuICAgIHJvb3RSZWN0XG4gICkge1xuICAgIC8vIElmIHRoZSBlbGVtZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuXG5cbiAgICB2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHRhcmdldFJlY3RcbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0YXJnZXQpXG4gICAgdmFyIGF0Um9vdCA9IGZhbHNlXG5cbiAgICB3aGlsZSAoIWF0Um9vdCAmJiBwYXJlbnQpIHtcbiAgICAgIHZhciBwYXJlbnRSZWN0ID0gbnVsbFxuICAgICAgdmFyIHBhcmVudENvbXB1dGVkU3R5bGUgPVxuICAgICAgICBwYXJlbnQubm9kZVR5cGUgPT0gMSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkgOiB7fVxuXG4gICAgICAvLyBJZiB0aGUgcGFyZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cbiAgICAgIGlmIChwYXJlbnRDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm4gbnVsbFxuXG4gICAgICBpZiAocGFyZW50ID09IHRoaXMucm9vdCB8fCBwYXJlbnQubm9kZVR5cGUgPT0gLyogRE9DVU1FTlQgKi8gOSkge1xuICAgICAgICBhdFJvb3QgPSB0cnVlXG4gICAgICAgIGlmIChwYXJlbnQgPT0gdGhpcy5yb290IHx8IHBhcmVudCA9PSBkb2N1bWVudCkge1xuICAgICAgICAgIGlmIChjcm9zc09yaWdpblVwZGF0ZXIgJiYgIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhY3Jvc3NPcmlnaW5SZWN0IHx8XG4gICAgICAgICAgICAgIChjcm9zc09yaWdpblJlY3Qud2lkdGggPT0gMCAmJiBjcm9zc09yaWdpblJlY3QuaGVpZ2h0ID09IDApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gQSAwLXNpemUgY3Jvc3Mtb3JpZ2luIGludGVyc2VjdGlvbiBtZWFucyBuby1pbnRlcnNlY3Rpb24uXG4gICAgICAgICAgICAgIHBhcmVudCA9IG51bGxcbiAgICAgICAgICAgICAgcGFyZW50UmVjdCA9IG51bGxcbiAgICAgICAgICAgICAgaW50ZXJzZWN0aW9uUmVjdCA9IG51bGxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcmVudFJlY3QgPSBjcm9zc09yaWdpblJlY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50UmVjdCA9IHJvb3RSZWN0XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlJ3MgYSBmcmFtZSB0aGF0IGNhbiBiZSBuYXZpZ2F0ZWQgdG8uXG4gICAgICAgICAgdmFyIGZyYW1lID0gZ2V0UGFyZW50Tm9kZShwYXJlbnQpXG4gICAgICAgICAgdmFyIGZyYW1lUmVjdCA9IGZyYW1lICYmIGdldEJvdW5kaW5nQ2xpZW50UmVjdChmcmFtZSlcbiAgICAgICAgICB2YXIgZnJhbWVJbnRlcnNlY3QgPVxuICAgICAgICAgICAgZnJhbWUgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uKGZyYW1lLCBmcmFtZVJlY3QsIHJvb3RSZWN0KVxuICAgICAgICAgIGlmIChmcmFtZVJlY3QgJiYgZnJhbWVJbnRlcnNlY3QpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IGZyYW1lXG4gICAgICAgICAgICBwYXJlbnRSZWN0ID0gY29udmVydEZyb21QYXJlbnRSZWN0KGZyYW1lUmVjdCwgZnJhbWVJbnRlcnNlY3QpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudCA9IG51bGxcbiAgICAgICAgICAgIGludGVyc2VjdGlvblJlY3QgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBub24tdmlzaWJsZSBvdmVyZmxvdywgYW5kIGl0J3Mgbm90IHRoZSA8Ym9keT5cbiAgICAgICAgLy8gb3IgPGh0bWw+IGVsZW1lbnQsIHVwZGF0ZSB0aGUgaW50ZXJzZWN0aW9uIHJlY3QuXG4gICAgICAgIC8vIE5vdGU6IDxib2R5PiBhbmQgPGh0bWw+IGNhbm5vdCBiZSBjbGlwcGVkIHRvIGEgcmVjdCB0aGF0J3Mgbm90IGFsc29cbiAgICAgICAgLy8gdGhlIGRvY3VtZW50IHJlY3QsIHNvIG5vIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBpbnRlcnNlY3Rpb24uXG4gICAgICAgIHZhciBkb2MgPSBwYXJlbnQub3duZXJEb2N1bWVudFxuICAgICAgICBpZiAoXG4gICAgICAgICAgcGFyZW50ICE9IGRvYy5ib2R5ICYmXG4gICAgICAgICAgcGFyZW50ICE9IGRvYy5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgICBwYXJlbnRDb21wdXRlZFN0eWxlLm92ZXJmbG93ICE9ICd2aXNpYmxlJ1xuICAgICAgICApIHtcbiAgICAgICAgICBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBlaXRoZXIgb2YgdGhlIGFib3ZlIGNvbmRpdGlvbmFscyBzZXQgYSBuZXcgcGFyZW50UmVjdCxcbiAgICAgIC8vIGNhbGN1bGF0ZSBuZXcgaW50ZXJzZWN0aW9uIGRhdGEuXG4gICAgICBpZiAocGFyZW50UmVjdCkge1xuICAgICAgICBpbnRlcnNlY3Rpb25SZWN0ID0gY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24ocGFyZW50UmVjdCwgaW50ZXJzZWN0aW9uUmVjdClcbiAgICAgIH1cbiAgICAgIGlmICghaW50ZXJzZWN0aW9uUmVjdCkgYnJlYWtcbiAgICAgIHBhcmVudCA9IHBhcmVudCAmJiBnZXRQYXJlbnROb2RlKHBhcmVudClcbiAgICB9XG4gICAgcmV0dXJuIGludGVyc2VjdGlvblJlY3RcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByb290IHJlY3QgYWZ0ZXIgYmVpbmcgZXhwYW5kZWQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBleHBhbmRlZCByb290IHJlY3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2dldFJvb3RSZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJvb3RSZWN0XG4gICAgaWYgKHRoaXMucm9vdCAmJiAhaXNEb2ModGhpcy5yb290KSkge1xuICAgICAgcm9vdFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGhpcy5yb290KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgPGh0bWw+Lzxib2R5PiBpbnN0ZWFkIG9mIHdpbmRvdyBzaW5jZSBzY3JvbGwgYmFycyBhZmZlY3Qgc2l6ZS5cbiAgICAgIHZhciBkb2MgPSBpc0RvYyh0aGlzLnJvb3QpID8gdGhpcy5yb290IDogZG9jdW1lbnRcbiAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudFxuICAgICAgdmFyIGJvZHkgPSBkb2MuYm9keVxuICAgICAgcm9vdFJlY3QgPSB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgd2lkdGg6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgYm90dG9tOiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodCxcbiAgICAgICAgaGVpZ2h0OiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kUmVjdEJ5Um9vdE1hcmdpbihyb290UmVjdClcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIGEgcmVjdCBhbmQgZXhwYW5kcyBpdCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IHJlY3QgVGhlIHJlY3Qgb2JqZWN0IHRvIGV4cGFuZC5cbiAgICogQHJldHVybiB7Q2xpZW50UmVjdH0gVGhlIGV4cGFuZGVkIHJlY3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4gPSBmdW5jdGlvbihyZWN0KSB7XG4gICAgdmFyIG1hcmdpbnMgPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzLm1hcChmdW5jdGlvbihtYXJnaW4sIGkpIHtcbiAgICAgIHJldHVybiBtYXJnaW4udW5pdCA9PSAncHgnXG4gICAgICAgID8gbWFyZ2luLnZhbHVlXG4gICAgICAgIDogKG1hcmdpbi52YWx1ZSAqIChpICUgMiA/IHJlY3Qud2lkdGggOiByZWN0LmhlaWdodCkpIC8gMTAwXG4gICAgfSlcbiAgICB2YXIgbmV3UmVjdCA9IHtcbiAgICAgIHRvcDogcmVjdC50b3AgLSBtYXJnaW5zWzBdLFxuICAgICAgcmlnaHQ6IHJlY3QucmlnaHQgKyBtYXJnaW5zWzFdLFxuICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSArIG1hcmdpbnNbMl0sXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgLSBtYXJnaW5zWzNdXG4gICAgfVxuICAgIG5ld1JlY3Qud2lkdGggPSBuZXdSZWN0LnJpZ2h0IC0gbmV3UmVjdC5sZWZ0XG4gICAgbmV3UmVjdC5oZWlnaHQgPSBuZXdSZWN0LmJvdHRvbSAtIG5ld1JlY3QudG9wXG5cbiAgICByZXR1cm4gbmV3UmVjdFxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYW4gb2xkIGFuZCBuZXcgZW50cnkgYW5kIHJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlXG4gICAqIHRocmVzaG9sZCB2YWx1ZXMgaGFzIGJlZW4gY3Jvc3NlZC5cbiAgICogQHBhcmFtIHs/SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gb2xkRW50cnkgVGhlIHByZXZpb3VzIGVudHJ5IGZvciBhXG4gICAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQgb3IgbnVsbCBpZiBubyBwcmV2aW91cyBlbnRyeSBleGlzdHMuXG4gICAqIEBwYXJhbSB7SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gbmV3RW50cnkgVGhlIGN1cnJlbnQgZW50cnkgZm9yIGFcbiAgICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGEgYW55IHRocmVzaG9sZCBoYXMgYmVlbiBjcm9zc2VkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9oYXNDcm9zc2VkVGhyZXNob2xkID0gZnVuY3Rpb24oXG4gICAgb2xkRW50cnksXG4gICAgbmV3RW50cnlcbiAgKSB7XG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgZWFzaWVyLCBhbiBlbnRyeSB0aGF0IGhhcyBhIHJhdGlvIG9mIDBcbiAgICAvLyBidXQgZG9lcyBub3QgYWN0dWFsbHkgaW50ZXJzZWN0IGlzIGdpdmVuIGEgdmFsdWUgb2YgLTFcbiAgICB2YXIgb2xkUmF0aW8gPVxuICAgICAgb2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcgPyBvbGRFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwIDogLTFcbiAgICB2YXIgbmV3UmF0aW8gPSBuZXdFbnRyeS5pc0ludGVyc2VjdGluZ1xuICAgICAgPyBuZXdFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwXG4gICAgICA6IC0xXG5cbiAgICAvLyBJZ25vcmUgdW5jaGFuZ2VkIHJhdGlvc1xuICAgIGlmIChvbGRSYXRpbyA9PT0gbmV3UmF0aW8pIHJldHVyblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRocmVzaG9sZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSB0aGlzLnRocmVzaG9sZHNbaV1cblxuICAgICAgLy8gUmV0dXJuIHRydWUgaWYgYW4gZW50cnkgbWF0Y2hlcyBhIHRocmVzaG9sZCBvciBpZiB0aGUgbmV3IHJhdGlvXG4gICAgICAvLyBhbmQgdGhlIG9sZCByYXRpbyBhcmUgb24gdGhlIG9wcG9zaXRlIHNpZGVzIG9mIGEgdGhyZXNob2xkLlxuICAgICAgaWYgKFxuICAgICAgICB0aHJlc2hvbGQgPT0gb2xkUmF0aW8gfHxcbiAgICAgICAgdGhyZXNob2xkID09IG5ld1JhdGlvIHx8XG4gICAgICAgIHRocmVzaG9sZCA8IG9sZFJhdGlvICE9PSB0aHJlc2hvbGQgPCBuZXdSYXRpb1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdElzSW5Eb20gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMucm9vdCB8fCBjb250YWluc0RlZXAoZG9jdW1lbnQsIHRoaXMucm9vdClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgZWxlbWVudCB0byBjaGVjay5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yb290Q29udGFpbnNUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB2YXIgcm9vdERvYyA9XG4gICAgICAodGhpcy5yb290ICYmICh0aGlzLnJvb3Qub3duZXJEb2N1bWVudCB8fCB0aGlzLnJvb3QpKSB8fCBkb2N1bWVudFxuICAgIHJldHVybiAoXG4gICAgICBjb250YWluc0RlZXAocm9vdERvYywgdGFyZ2V0KSAmJlxuICAgICAgKCF0aGlzLnJvb3QgfHwgcm9vdERvYyA9PSB0YXJnZXQub3duZXJEb2N1bWVudClcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgaW5zdGFuY2UgdG8gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeSBpZiBpdCBpc24ndFxuICAgKiBhbHJlYWR5IHByZXNlbnQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBJbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3JlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocmVnaXN0cnkuaW5kZXhPZih0aGlzKSA8IDApIHtcbiAgICAgIHJlZ2lzdHJ5LnB1c2godGhpcylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgaW5zdGFuY2UgZnJvbSB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bnJlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZXggPSByZWdpc3RyeS5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ICE9IC0xKSByZWdpc3RyeS5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBwZXJmb3JtYW5jZS5ub3coKSBtZXRob2Qgb3IgbnVsbCBpbiBicm93c2Vyc1xuICAgKiB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEFQSS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBwYWdlIHdhcyByZXF1ZXN0ZWQuXG4gICAqL1xuICBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZS5ub3cgJiYgcGVyZm9ybWFuY2Uubm93KClcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvdHRsZXMgYSBmdW5jdGlvbiBhbmQgZGVsYXlzIGl0cyBleGVjdXRpb24sIHNvIGl0J3Mgb25seSBjYWxsZWQgYXQgbW9zdFxuICAgKiBvbmNlIHdpdGhpbiBhIGdpdmVuIHRpbWUgcGVyaW9kLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IFRoZSBhbW91bnQgb2YgdGltZSB0aGF0IG11c3QgcGFzcyBiZWZvcmUgdGhlXG4gICAqICAgICBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIGFnYWluLlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHRocm90dGxlZCBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIHRocm90dGxlKGZuLCB0aW1lb3V0KSB7XG4gICAgdmFyIHRpbWVyID0gbnVsbFxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGltZXIpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZuKClcbiAgICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgfSwgdGltZW91dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBoYW5kbGVyIHRvIGEgRE9NIG5vZGUgZW5zdXJpbmcgY3Jvc3MtYnJvd3NlciBjb21wYXRpYmlsaXR5LlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIERPTSBub2RlIHRvIGFkZCB0aGUgZXZlbnQgaGFuZGxlciB0by5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byBhZGQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgT3B0aW9uYWxseSBhZGRzIHRoZSBldmVuIHRvIHRoZSBjYXB0dXJlXG4gICAqICAgICBwaGFzZS4gTm90ZTogdGhpcyBvbmx5IHdvcmtzIGluIG1vZGVybiBicm93c2Vycy5cbiAgICovXG4gIGZ1bmN0aW9uIGFkZEV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZS5hdHRhY2hFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZuKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgcHJldmlvdXNseSBhZGRlZCBldmVudCBoYW5kbGVyIGZyb20gYSBET00gbm9kZS5cbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBET00gbm9kZSB0byByZW1vdmUgdGhlIGV2ZW50IGhhbmRsZXIgZnJvbS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byByZW1vdmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgSWYgdGhlIGV2ZW50IGhhbmRsZXIgd2FzIGFkZGVkIHdpdGggdGhpc1xuICAgKiAgICAgZmxhZyBzZXQgdG8gdHJ1ZSwgaXQgc2hvdWxkIGJlIHNldCB0byB0cnVlIGhlcmUgaW4gb3JkZXIgdG8gcmVtb3ZlIGl0LlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSB8fCBmYWxzZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlLmRldGF0Y2hFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZS5kZXRhdGNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gdHdvIHJlY3Qgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QxIFRoZSBmaXJzdCByZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdDIgVGhlIHNlY29uZCByZWN0LlxuICAgKiBAcmV0dXJuIHs/T2JqZWN0fD9DbGllbnRSZWN0fSBUaGUgaW50ZXJzZWN0aW9uIHJlY3Qgb3IgdW5kZWZpbmVkIGlmIG5vXG4gICAqICAgICBpbnRlcnNlY3Rpb24gaXMgZm91bmQuXG4gICAqL1xuICBmdW5jdGlvbiBjb21wdXRlUmVjdEludGVyc2VjdGlvbihyZWN0MSwgcmVjdDIpIHtcbiAgICB2YXIgdG9wID0gTWF0aC5tYXgocmVjdDEudG9wLCByZWN0Mi50b3ApXG4gICAgdmFyIGJvdHRvbSA9IE1hdGgubWluKHJlY3QxLmJvdHRvbSwgcmVjdDIuYm90dG9tKVxuICAgIHZhciBsZWZ0ID0gTWF0aC5tYXgocmVjdDEubGVmdCwgcmVjdDIubGVmdClcbiAgICB2YXIgcmlnaHQgPSBNYXRoLm1pbihyZWN0MS5yaWdodCwgcmVjdDIucmlnaHQpXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0XG4gICAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcFxuXG4gICAgcmV0dXJuIChcbiAgICAgICh3aWR0aCA+PSAwICYmXG4gICAgICAgIGhlaWdodCA+PSAwICYmIHtcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICBib3R0b206IGJvdHRvbSxcbiAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfSkgfHxcbiAgICAgIG51bGxcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogU2hpbXMgdGhlIG5hdGl2ZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBvbGRlciBJRS5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZyByZWN0IHRvIGdldC5cbiAgICogQHJldHVybiB7RE9NUmVjdHxDbGllbnRSZWN0fSBUaGUgKHBvc3NpYmx5IHNoaW1tZWQpIHJlY3Qgb2YgdGhlIGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwpIHtcbiAgICB2YXIgcmVjdFxuXG4gICAgdHJ5IHtcbiAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWdub3JlIFdpbmRvd3MgNyBJRTExIFwiVW5zcGVjaWZpZWQgZXJyb3JcIlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9wdWxsLzIwNVxuICAgIH1cblxuICAgIGlmICghcmVjdCkgcmV0dXJuIGdldEVtcHR5UmVjdCgpXG5cbiAgICAvLyBPbGRlciBJRVxuICAgIGlmICghKHJlY3Qud2lkdGggJiYgcmVjdC5oZWlnaHQpKSB7XG4gICAgICByZWN0ID0ge1xuICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICAgICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlbXB0eSByZWN0IG9iamVjdC4gQW4gZW1wdHkgcmVjdCBpcyByZXR1cm5lZCB3aGVuIGFuIGVsZW1lbnRcbiAgICogaXMgbm90IGluIHRoZSBET00uXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBlbXB0eSByZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RW1wdHlSZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmUgdGhhdCB0aGUgcmVzdWx0IGhhcyBhbGwgb2YgdGhlIG5lY2Vzc2FyeSBmaWVsZHMgb2YgdGhlIERPTVJlY3QuXG4gICAqIFNwZWNpZmljYWxseSB0aGlzIGVuc3VyZXMgdGhhdCBgeGAgYW5kIGB5YCBmaWVsZHMgYXJlIHNldC5cbiAgICpcbiAgICogQHBhcmFtIHs/RE9NUmVjdHw/Q2xpZW50UmVjdH0gcmVjdFxuICAgKiBAcmV0dXJuIHs/RE9NUmVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGVuc3VyZURPTVJlY3QocmVjdCkge1xuICAgIC8vIEEgYERPTVJlY3RgIG9iamVjdCBoYXMgYHhgIGFuZCBgeWAgZmllbGRzLlxuICAgIGlmICghcmVjdCB8fCAneCcgaW4gcmVjdCkge1xuICAgICAgcmV0dXJuIHJlY3RcbiAgICB9XG4gICAgLy8gQSBJRSdzIGBDbGllbnRSZWN0YCB0eXBlIGRvZXMgbm90IGhhdmUgYHhgIGFuZCBgeWAuIFRoZSBzYW1lIGlzIHRoZSBjYXNlXG4gICAgLy8gZm9yIGludGVybmFsbHkgY2FsY3VsYXRlZCBSZWN0IG9iamVjdHMuIEZvciB0aGUgcHVycG9zZXMgb2ZcbiAgICAvLyBgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJgLCBpdCdzIHN1ZmZpY2llbnQgdG8gc2ltcGx5IG1pcnJvciBgbGVmdGAgYW5kIGB0b3BgXG4gICAgLy8gZm9yIHRoZXNlIGZpZWxkcy5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgIHk6IHJlY3QudG9wLFxuICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgIHg6IHJlY3QubGVmdCxcbiAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludmVydHMgdGhlIGludGVyc2VjdGlvbiBhbmQgYm91bmRpbmcgcmVjdCBmcm9tIHRoZSBwYXJlbnQgKGZyYW1lKSBCQ1IgdG9cbiAgICogdGhlIGxvY2FsIEJDUiBzcGFjZS5cbiAgICogQHBhcmFtIHtET01SZWN0fENsaWVudFJlY3R9IHBhcmVudEJvdW5kaW5nUmVjdCBUaGUgcGFyZW50J3MgYm91bmQgY2xpZW50IHJlY3QuXG4gICAqIEBwYXJhbSB7RE9NUmVjdHxDbGllbnRSZWN0fSBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0IFRoZSBwYXJlbnQncyBvd24gaW50ZXJzZWN0aW9uIHJlY3QuXG4gICAqIEByZXR1cm4ge0NsaWVudFJlY3R9IFRoZSBsb2NhbCByb290IGJvdW5kaW5nIHJlY3QgZm9yIHRoZSBwYXJlbnQncyBjaGlsZHJlbi5cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnZlcnRGcm9tUGFyZW50UmVjdChwYXJlbnRCb3VuZGluZ1JlY3QsIHBhcmVudEludGVyc2VjdGlvblJlY3QpIHtcbiAgICB2YXIgdG9wID0gcGFyZW50SW50ZXJzZWN0aW9uUmVjdC50b3AgLSBwYXJlbnRCb3VuZGluZ1JlY3QudG9wXG4gICAgdmFyIGxlZnQgPSBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LmxlZnQgLSBwYXJlbnRCb3VuZGluZ1JlY3QubGVmdFxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCxcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICBoZWlnaHQ6IHBhcmVudEludGVyc2VjdGlvblJlY3QuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHBhcmVudEludGVyc2VjdGlvblJlY3Qud2lkdGgsXG4gICAgICBib3R0b206IHRvcCArIHBhcmVudEludGVyc2VjdGlvblJlY3QuaGVpZ2h0LFxuICAgICAgcmlnaHQ6IGxlZnQgKyBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LndpZHRoXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgYSBwYXJlbnQgZWxlbWVudCBjb250YWlucyBhIGNoaWxkIGVsZW1lbnQgKGluY2x1ZGluZyBpbnNpZGVcbiAgICogc2hhZG93IERPTSkuXG4gICAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IFRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtOb2RlfSBjaGlsZCBUaGUgY2hpbGQgZWxlbWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGFyZW50IG5vZGUgY29udGFpbnMgdGhlIGNoaWxkIG5vZGUuXG4gICAqL1xuICBmdW5jdGlvbiBjb250YWluc0RlZXAocGFyZW50LCBjaGlsZCkge1xuICAgIHZhciBub2RlID0gY2hpbGRcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKG5vZGUgPT0gcGFyZW50KSByZXR1cm4gdHJ1ZVxuXG4gICAgICBub2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBwYXJlbnQgbm9kZSBvZiBhbiBlbGVtZW50IG9yIGl0cyBob3N0IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBub2RlXG4gICAqIGlzIGEgc2hhZG93IHJvb3QuXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB3aG9zZSBwYXJlbnQgdG8gZ2V0LlxuICAgKiBAcmV0dXJuIHtOb2RlfG51bGx9IFRoZSBwYXJlbnQgbm9kZSBvciBudWxsIGlmIG5vIHBhcmVudCBleGlzdHMuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKG5vZGUpIHtcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlXG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSAvKiBET0NVTUVOVCAqLyA5ICYmIG5vZGUgIT0gZG9jdW1lbnQpIHtcbiAgICAgIC8vIElmIHRoaXMgbm9kZSBpcyBhIGRvY3VtZW50IG5vZGUsIGxvb2sgZm9yIHRoZSBlbWJlZGRpbmcgZnJhbWUuXG4gICAgICByZXR1cm4gZ2V0RnJhbWVFbGVtZW50KG5vZGUpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHBhcmVudCBoYXMgZWxlbWVudCB0aGF0IGlzIGFzc2lnbmVkIHRocm91Z2ggc2hhZG93IHJvb3Qgc2xvdFxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LmFzc2lnbmVkU2xvdC5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT0gMTEgJiYgcGFyZW50Lmhvc3QpIHtcbiAgICAgIC8vIElmIHRoZSBwYXJlbnQgaXMgYSBzaGFkb3cgcm9vdCwgcmV0dXJuIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgICByZXR1cm4gcGFyZW50Lmhvc3RcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGBub2RlYCBpcyBhIERvY3VtZW50LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNEb2Mobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDlcbiAgfVxuXG4gIC8vIEV4cG9zZXMgdGhlIGNvbnN0cnVjdG9ycyBnbG9iYWxseS5cbiAgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgPSBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XG59KSgpXG4iXSwic291cmNlUm9vdCI6IiJ9