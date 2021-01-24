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
      this.width = this.$.carousel.offsetWidth;
      this.numberItems = Array.from(this.$.carousel.querySelectorAll('.carousel__item')).length;
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

              TweenLite.to(this.$.items, 0.1, {
                x: this.translate
              });
            }
          } else {
            if (this.activeItem > 1) {
              TweenLite.to(this.$.items, 0.1, {
                x: (this.activeItem - 1) * -this.$.carousel.offsetWidth + this.translate
              });
            }
          }
        } else if (clientX < this.actualPosition) {
          this.translate = this.actualPosition - clientX;

          if (this.type === 'infinite') {
            if (this.activeItem < this.numberItems) {
              TweenLite.to(this.$.items, 0.1, {
                x: (this.activeItem - 1) * -this.$.carousel.offsetWidth - this.translate
              });
            } else if (this.activeItem === this.numberItems) {
              if (!this.dragCretaedItem) {
                this.dragCretaedItem = true;
                var $firstItem = this.$.carousel.querySelector('.carousel__item');
                var duplicateFirstItem = $firstItem.cloneNode(true);
                this.$.items.appendChild(duplicateFirstItem);
              }

              TweenLite.to(this.$.items, 0.1, {
                x: (this.numberItems - 1) * -this.$.carousel.offsetWidth - this.translate
              });
            }
          } else {
            if (this.activeItem < this.numberItems) {
              TweenLite.to(this.$.items, 0.1, {
                x: (this.activeItem - 1) * -this.$.carousel.offsetWidth - this.translate
              });
            }
          }
        }
      }
    }
  }, {
    key: "_moveLeft",
    value: function _moveLeft() {
      if (this.type === 'normal') {
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
      if (this.type === 'normal') {
        if (this.activeItem < this.numberItems) {
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

      if (position === 'left') {
        this.$.carousel.querySelector('.carousel__paginationBullet--active').classList.remove('carousel__paginationBullet--active');
        if (this.activeItem === 1) this.$.carousel.querySelector('.carousel__paginationBullet:last-child').classList.add('carousel__paginationBullet--active');else this.$.carousel.querySelector(".carousel__paginationBullet:nth-child(".concat(this.activeItem - 1, ")")).classList.add('carousel__paginationBullet--active');
      } else if (position === 'right') {
        this.$.carousel.querySelector('.carousel__paginationBullet--active').classList.remove('carousel__paginationBullet--active');
        if (this.activeItem === this.numberItems) this.$.carousel.querySelector('.carousel__paginationBullet').classList.add('carousel__paginationBullet--active');else this.$.carousel.querySelector(".carousel__paginationBullet:nth-child(".concat(this.activeItem + 1, ")")).classList.add('carousel__paginationBullet--active');
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
            close.addEventListener('click', function () {
              var newFiles = new DataTransfer();

              var _iterator = _createForOfIteratorHelper(files),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _file = _step.value;
                  if (_file !== files[index]) newFiles.items.add(_file);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this.$.input.files = newFiles.files;
              $files.removeChild($file);
            });
            size += file.size;
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
      this.cursorPress = false;
      this.total = this.$.customRange.dataset.total;
      this.step = this.$.customRange.dataset.step;
      this.transformCursor = 0;
      this.actualStep = 0;
    }
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      // Create input
      this.$.input = document.createElement('input');
      this.$.input.setAttribute('name', this.$.customRange.dataset.name);
      this.$.input.style.display = 'none'; // Create background bar.

      this.$.backgroundBar = document.createElement('div');
      this.$.backgroundBar.classList.add('custom-range__bar');
      this.$.backgroundBar.classList.add('custom-range__bar--background'); // Create plain bar.

      this.$.plainBar = document.createElement('div');
      this.$.plainBar.classList.add('custom-range__bar');
      this.$.plainBar.classList.add('custom-range__bar--plain'); // Create cusror.

      this.$.cursor = document.createElement('div');
      this.$.cursor.classList.add('custom-range__cursor');
      this.$.customRange.appendChild(this.$.backgroundBar);
      this.$.customRange.appendChild(this.$.plainBar);
      this.$.customRange.appendChild(this.$.cursor);
      this.$.customRange.appendChild(this.$.input);
      this.$.cursor.style.transform = "translateX(-50%)";
      this.width = this.$.customRange.offsetWidth;
      this.numberSteps = this.total / this.step; // nombre de fois pour arriver a total

      this.ratio = this.width / this.numberSteps; // pixel de largeur pour 1% du total

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$.cursor.addEventListener('mousedown', function (event) {
        _this.cursorPress = true;
        _this.actualPosition = event.clientX;
      });
      document.addEventListener('mouseup', function (ev) {
        _this.cursorPress = false;
      });
      document.addEventListener('mousemove', function (event) {
        if (_this.cursorPress) {
          if (event.clientX > _this.actualPosition && event.clientX >= (_this.actualStep + 1) * _this.ratio && _this.actualStep < _this.numberSteps) {
            _this.transformCursor = (_this.actualStep + 1) * _this.ratio - _this.$.cursor.offsetWidth / 2;
            _this.$.cursor.style.transform = "translateX(".concat(_this.transformCursor, "px)");
            _this.$.plainBar.style.transform = "scaleX(".concat(1 / _this.numberSteps * (_this.actualStep + 1), ")");
            _this.actualPosition = event.clientX;
            _this.actualStep++;
          } else if (event.clientX < _this.actualPosition && event.clientX <= (_this.actualStep - 1) * _this.ratio && _this.actualStep > 0) {
            _this.transformCursor = (_this.actualStep - 1) * _this.ratio - _this.$.cursor.offsetWidth / 2;
            _this.$.cursor.style.transform = "translateX(".concat(_this.transformCursor, "px)");
            _this.$.plainBar.style.transform = "scaleX(".concat(1 / _this.numberSteps * (_this.actualStep - 1), ")");
            _this.actualPosition = event.clientX;
            _this.actualStep--;
          }
        }
      });
      this.$.customRange.addEventListener('click', function (event) {
        var clickStep = 0;

        for (var step = 0; step <= _this.numberSteps; step++) {
          if (event.clientX > step * _this.ratio - 20) clickStep = step;
        }

        _this.transformCursor = clickStep * _this.ratio - _this.$.cursor.offsetWidth / 2;
        _this.$.cursor.style.transform = "translateX(".concat(_this.transformCursor, "px)");
        _this.$.plainBar.style.transform = "scaleX(".concat(1 / _this.numberSteps * clickStep, ")");
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
 * v1.0.0
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
      this.name = this.$.customSelect.dataset.name;
      this.isFilters = this.$.customSelect.dataset.filters; // Set filters is activated.

      this.isOnMobile = this.$.customSelect.dataset.mobile; // Set custom mobile is activated.

      this.virtualLabel = this.$.customSelect.dataset.label; // Set activated label.

      this.items = JSON.parse(this.$.customSelect.dataset.items); // Create JSON object with items.
    }
    /**
     * Initialize component.
     */

  }, {
    key: "initialize",
    value: function initialize() {
      if (!this.isOnMobile && window.matchMedia('(max-width: 991px)').matches) {
        // Create the select element.
        var $select = document.createElement('select');
        $select.setAttribute('name', this.name); // Create the default select option.

        var $defaultOption = document.createElement('option');
        $defaultOption.setAttribute('value', '');
        $defaultOption.innerText = this.$.customSelect.dataset.label;
        $select.appendChild($defaultOption); // Create select options.

        this.items.forEach(function (item) {
          var $option = document.createElement('option');
          $option.setAttribute('value', item.value);
          $option.innerText = item.label;
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
          $item.dataset.label = item.label;
          $item.dataset.value = item.value;
          $item.innerText = item.label;
          $item.classList.add('custom-select__item');
          $content.appendChild($item);
        }); // Create the button.

        this.$.choose = document.createElement('div');
        this.$.choose.setAttribute('id', this.name);
        this.$.choose.classList.add('custom-select__choose');

        if (!this.isFilters) {
          this.$.choose.innerHTML = this.$.customSelect.dataset.label;
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
          this.$.filter.value = this.$.customSelect.dataset.label;
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
        this.$.filter.value = $item.dataset.label;
      } else {
        this.$.choose.innerText = $item.dataset.label;
      }

      this.$.input.value = $item.dataset.value;
      this.virtualLabel = $item.dataset.label;
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
 * v1.0.0
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
      this.type = this.$.dropdown.dataset.type ? this.$.dropdown.dataset.type : 'link'; // Set type of dropdown.

      this.items = this.type === 'link' ? JSON.parse(this.$.dropdown.dataset.items) : null; // Create JSON object with items.
    }
    /**
     * Initialize component.
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      if (!this.isOnMobile && this.type === 'link' && window.matchMedia('(max-width: 991px)').matches) {
        // Create the select element.
        this.$.select = document.createElement('select'); // Create the default select option.

        var $option = document.createElement('option');
        $option.setAttribute('value', '');
        $option.innerText = this.$.dropdown.dataset.label;
        this.$.select.appendChild($option); // Create select options.

        var _iterator = _createForOfIteratorHelper(this.items),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            var _$option = document.createElement('option');

            _$option.setAttribute('value', item.link);

            _$option.innerText = item.label;
            this.$.select.appendChild(_$option);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.$.dropdown.innerHTML = '';
        this.$.dropdown.appendChild(this.$.select);
      } else {
        if (this.type === 'content') this.$.items = Array.from(this.$.dropdown.querySelectorAll('.dropdown__item')); // Create the content with elements.

        var $content = document.createElement('div');
        $content.classList.add('dropdown__content');

        if (this.type === 'link') {
          var _iterator2 = _createForOfIteratorHelper(this.items),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _item = _step2.value;
              var $item = document.createElement('a');
              $item.innerText = _item.label;
              $item.setAttribute('href', _item.link);
              $item.classList.add('dropdown__item');
              $content.appendChild($item);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else if (this.type === 'content') {
          var _iterator3 = _createForOfIteratorHelper(this.$.items),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _$item = _step3.value;
              $content.appendChild(_$item);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } // Create the button.


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
        this.$.items = Array.from(this.$.dropdown.querySelectorAll('.dropdown__item')); // Get all items in array.
      }

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      if (!this.isOnMobile && window.matchMedia('(min-width: 992px)').matches || this.isOnMobile || !this.isOnMobile && this.type === 'content') {
        this.$.choose.addEventListener('click', function () {
          _this.$.dropdown.classList.toggle('dropdown--open');
        });
        document.addEventListener('click', function (event) {
          if (!_this.$.dropdown.contains(event.target)) {
            _this.$.dropdown.classList.remove('dropdown--open');
          }
        });
      } else if (!this.isOnMobile && this.type === 'link' && window.matchMedia('(max-width: 991px)').matches) {
        this.$.select.addEventListener('change', function () {
          window.location = _this.$.select.value;
        });
      }

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
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ "./js/Carousel.js");
/* harmony import */ var _CustomFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomFile */ "./js/CustomFile.js");
/* harmony import */ var _CustomRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomRange */ "./js/CustomRange.js");
/* harmony import */ var _CustomSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomSelect */ "./js/CustomSelect.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dropdown */ "./js/Dropdown.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./js/Header.js");
/* harmony import */ var _InputGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InputGroup */ "./js/InputGroup.js");
/* harmony import */ var _FormValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormValidation */ "./js/FormValidation.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modal */ "./js/Modal.js");
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Reset */ "./js/Reset.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Tabs */ "./js/Tabs.js");













var $accordions = Array.from(document.querySelectorAll('.accordion'));

for (var _i = 0, _$accordions = $accordions; _i < _$accordions.length; _i++) {
  var $accordion = _$accordions[_i];
  new _Accordion__WEBPACK_IMPORTED_MODULE_1__["default"]($accordion);
}

var $carousels = Array.from(document.querySelectorAll('.carousel'));

for (var _i2 = 0, _$carousels = $carousels; _i2 < _$carousels.length; _i2++) {
  var $carousel = _$carousels[_i2];
  new _Carousel__WEBPACK_IMPORTED_MODULE_2__["default"]($carousel);
}

var $customFiles = Array.from(document.querySelectorAll('.custom-file'));

for (var _i3 = 0, _$customFiles = $customFiles; _i3 < _$customFiles.length; _i3++) {
  var $customFile = _$customFiles[_i3];
  new _CustomFile__WEBPACK_IMPORTED_MODULE_3__["default"]($customFile);
}

var $customRanges = Array.from(document.querySelectorAll('.custom-range'));

for (var _i4 = 0, _$customRanges = $customRanges; _i4 < _$customRanges.length; _i4++) {
  var $customRange = _$customRanges[_i4];
  new _CustomRange__WEBPACK_IMPORTED_MODULE_4__["default"]($customRange);
}

var $customSelects = Array.from(document.querySelectorAll('.custom-select'));

for (var _i5 = 0, _$customSelects = $customSelects; _i5 < _$customSelects.length; _i5++) {
  var $customSelect = _$customSelects[_i5];
  new _CustomSelect__WEBPACK_IMPORTED_MODULE_5__["default"]($customSelect);
}

var $dropdowns = Array.from(document.querySelectorAll('.dropdown'));

for (var _i6 = 0, _$dropdowns = $dropdowns; _i6 < _$dropdowns.length; _i6++) {
  var $dropdown = _$dropdowns[_i6];
  new _Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"]($dropdown);
}

new _Header__WEBPACK_IMPORTED_MODULE_7__["default"]();
var $inputGroups = Array.from(document.querySelectorAll('.input-group'));

for (var _i7 = 0, _$inputGroups = $inputGroups; _i7 < _$inputGroups.length; _i7++) {
  var $inputGroup = _$inputGroups[_i7];
  new _InputGroup__WEBPACK_IMPORTED_MODULE_8__["default"]($inputGroup);
}

var $forms = Array.from(document.querySelectorAll('.validation'));

for (var _i8 = 0, _$forms = $forms; _i8 < _$forms.length; _i8++) {
  var $form = _$forms[_i8];
  new _FormValidation__WEBPACK_IMPORTED_MODULE_9__["default"]($form);
}

var $modals = Array.from(document.querySelectorAll('.modal'));

for (var _i9 = 0, _$modals = $modals; _i9 < _$modals.length; _i9++) {
  var $modal = _$modals[_i9];
  new _Modal__WEBPACK_IMPORTED_MODULE_10__["default"]($modal);
}

new _Reset__WEBPACK_IMPORTED_MODULE_11__["default"]();
var $tabs = Array.from(document.querySelectorAll('.tabs'));

for (var _i10 = 0, _$tabs = $tabs; _i10 < _$tabs.length; _i10++) {
  var $tab = _$tabs[_i10];
  new _Tabs__WEBPACK_IMPORTED_MODULE_12__["default"]($tab);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbUZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2pzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2pzL0Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9JbnB1dEdyb3VwLmpzIiwid2VicGFjazovLy8uL2pzL01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL1Jlc2V0LmpzIiwid2VicGFjazovLy8uL2pzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wb2x5ZmlsbHMvQXJyYXkuZnJvbS5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwicHVzaCIsIml0ZW0iLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkNhcm91c2VsIiwiJGNhcm91c2VsIiwiY2Fyb3VzZWwiLCJuYXZpZ2F0aW9uIiwibGVmdCIsInJpZ2h0IiwiaXNUb3VjaERldmljZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwidHlwZSIsImFjdGl2ZUl0ZW0iLCJwYWdpbmF0aW9uIiwiZHJhZyIsImF1dG8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibnVtYmVySXRlbXMiLCJsZW5ndGgiLCIkcGFnaW5hdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInNldEludGVydmFsIiwiX21vdmVSaWdodCIsInBhcnNlSW50IiwiX21vdmVMZWZ0Iiwia2V5Q29kZSIsIiRidWxsZXQiLCJfbW92ZUl0ZW1zIiwiYWN0dWFsUG9zaXRpb24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsInByZXNzSXRlbXMiLCJ0cmFuc2xhdGUiLCJkcmFnQ3JldGFlZEl0ZW0iLCJfZHJhZ0l0ZW1zIiwiY2hhbmdlZFRvdWNoZXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCIkbGFzdEl0ZW0iLCJkdXBsaWNhdGVMYXN0SXRlbSIsImNsb25lTm9kZSIsInRyYW5zZm9ybSIsInBvc2l0aW9uIiwiaW5zZXJ0QmVmb3JlIiwiVHdlZW5MaXRlIiwidG8iLCJ4IiwiJGZpcnN0SXRlbSIsImR1cGxpY2F0ZUZpcnN0SXRlbSIsInQiLCJjbGVhclRpbWVvdXQiLCJ0cmFuc2l0aW9uIiwiQ3VzdG9tRmlsZSIsIiRjdXN0b21GaWxlIiwiY3VzdG9tRmlsZSIsImxhYmVsIiwiaXNCdXR0b24iLCJidXR0b24iLCJpc0J1dHRvblBvc2l0aW9uIiwiYnV0dG9ucG9zIiwiaXNTaXplIiwic2l6ZSIsImlubmVyVGV4dCIsImlubmVySFRNTCIsImNvbnRhaW5lciIsImlucHV0IiwibmFtZSIsImRpc3BsYXkiLCJjbGljayIsInNpemVDb252ZXJ0IiwiYnl0ZXMiLCJzaXplcyIsIk1hdGgiLCJmbG9vciIsImxvZyIsImNvbnZlcnQiLCJyb3VuZCIsInBvdyIsImZpbGUiLCJmaWxlcyIsImNsb3NlIiwic3RvcFByb3BhZ2F0aW9uIiwidmFsdWUiLCIkZmlsZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCIkZmlsZSIsIm5ld0ZpbGVzIiwiRGF0YVRyYW5zZmVyIiwiQ3VzdG9tUmFuZ2UiLCIkY3VzdG9tUmFuZ2UiLCJjdXN0b21SYW5nZSIsImN1cnNvclByZXNzIiwidG90YWwiLCJzdGVwIiwidHJhbnNmb3JtQ3Vyc29yIiwiYWN0dWFsU3RlcCIsImJhY2tncm91bmRCYXIiLCJwbGFpbkJhciIsImN1cnNvciIsIm51bWJlclN0ZXBzIiwicmF0aW8iLCJldiIsImNsaWNrU3RlcCIsIkN1c3RvbVNlbGVjdCIsIiRjdXN0b21TZWxlY3QiLCJjdXN0b21TZWxlY3QiLCJpbml0UGFyYW1zIiwiaW5pdGlhbGl6ZSIsImlzRmlsdGVycyIsImZpbHRlcnMiLCJpc09uTW9iaWxlIiwibW9iaWxlIiwidmlydHVhbExhYmVsIiwiSlNPTiIsInBhcnNlIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCIkc2VsZWN0IiwiJGRlZmF1bHRPcHRpb24iLCIkb3B0aW9uIiwiY2hvb3NlIiwiJGNvbnRhaW5lciIsImZpbHRlciIsImV2ZW50cyIsInRvZ2dsZSIsImNoYW5nZVZhbHVlIiwiJG5ld0l0ZW0iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiRHJvcGRvd24iLCIkZHJvcGRvd24iLCJkcm9wZG93biIsInNlbGVjdCIsImxpbmsiLCJsb2NhdGlvbiIsIkZvcm1WYWxpZGF0aW9uIiwiJGZvcm0iLCJmb3JtIiwibm9JbnN0YW50Iiwibm9pbnN0YW50Iiwibm9TdWJtaXQiLCJub3N1Ym1pdCIsImZvcm1FcnJvciIsImlucHV0R3JvdXBzIiwiJGlucHV0R3JvdXAiLCIkaW5wdXQiLCJ2YWxpZGF0ZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRUeXBlIiwiZ2V0QXR0cmlidXRlIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsIm1pbkxlbmd0aCIsIm1heGxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkbWVzc2FnZSIsInJlcXVpcmVkTWVzc2FnZSIsImVycm9ybWlubGVuZ3RoIiwiZXJyb3JNaW5MZW5ndGgiLCJlcnJvcm1heGxlbmd0aCIsImVycm9yTWF4TGVuZ3RoIiwiZXJyb3JtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJjbGVhckVycm9yIiwibWF0Y2giLCJlcnJvciIsIiRlcnJvciIsIkhlYWRlciIsImhlYWRlciIsIm9wZW4iLCJzdWIiLCJJbnB1dEdyb3VwIiwiaW5wdXRHcm91cCIsImNvbnRlbnQiLCJNb2RhbCIsIiRtb2RhbCIsIm1vZGFsIiwiUmVzZXQiLCJ0ZXN0Iiwia2V5IiwiYm9keSIsIlRhYnMiLCIkdGFicyIsInRhYnMiLCJoZWFkZXJJdGVtcyIsIiRoZWFkZXJJdGVtIiwiJGNvbnRlbnRJdGVtIiwiJGFjY29yZGlvbnMiLCIkY2Fyb3VzZWxzIiwiJGN1c3RvbUZpbGVzIiwiJGN1c3RvbVJhbmdlcyIsIiRjdXN0b21TZWxlY3RzIiwiJGRyb3Bkb3ducyIsIiRpbnB1dEdyb3VwcyIsIiRmb3JtcyIsIiRtb2RhbHMiLCIkdGFiIiwidG9TdHIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImlzQ2FsbGFibGUiLCJmbiIsImNhbGwiLCJ0b0ludGVnZXIiLCJudW1iZXIiLCJOdW1iZXIiLCJpc05hTiIsImlzRmluaXRlIiwiYWJzIiwibWF4U2FmZUludGVnZXIiLCJ0b0xlbmd0aCIsImxlbiIsIm1pbiIsIm1heCIsImFycmF5TGlrZSIsIkMiLCJUeXBlRXJyb3IiLCJtYXBGbiIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIlQiLCJBIiwiayIsImtWYWx1ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdD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Q0FELE9BQUMsQ0FBQ25OLE1BQUYsR0FBV3lNLEdBQVgsQ0ExRG9ELENBMkRwRDs7QUFDQSxhQUFPVSxDQUFQO0FBQ0QsS0E3REQ7QUE4REQsR0FwRlksRUFBYjtBQXFGRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCIvKioqKioqKioqKlxuICogQWNjb3JkaW9uXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBBY2NvcmRpb24ge1xuICBjb25zdHJ1Y3RvcigkYWNjb3JkaW9uKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5hY2NvcmRpb24gPSAkYWNjb3JkaW9uIC8vIEFkZCBhY2NvcmRpb24gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5hY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB0aGlzLiQuYWNjb3JkaW9uLmRhdGFzZXQubXVsdGlwbGUgLy8gU2V0IGlzIG11bHRpcGxlIGl0ZW0gb3Blbi5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICBpZiAoJGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2NvbnRlbnRIZWlnaHR9cHhgXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpdGVtOiAkaXRlbSwgaGVpZ2h0OiBjb250ZW50SGVpZ2h0IH0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgeyBpdGVtLCBoZWlnaHQgfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQnV0dG9uJylcbiAgICAgIGNvbnN0ICRjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB7IGl0ZW0gfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvblxuIiwiLyoqKioqKioqKipcbiAqIENhcm91c2VsXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKCRjYXJvdXNlbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY2Fyb3VzZWwgPSAkY2Fyb3VzZWwgLy8gQWRkIGNhcm91c2VsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5uYXZpZ2F0aW9uID0ge1xuICAgICAgbGVmdDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1sZWZ0JyksXG4gICAgICByaWdodDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1yaWdodCcpXG4gICAgfVxuICAgIHRoaXMuJC5pdGVtcyA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW1zJylcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pc1RvdWNoRGV2aWNlID0gISEoXG4gICAgICAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzXG4gICAgKVxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbm9ybWFsJ1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICB0aGlzLnBhZ2luYXRpb24gPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5wYWdpbmF0aW9uXG4gICAgdGhpcy5kcmFnID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuZHJhZ1xuICAgIHRoaXMuYXV0byA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmF1dG9cbiAgICB0aGlzLndpZHRoID0gdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoXG4gICAgdGhpcy5udW1iZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJylcbiAgICApLmxlbmd0aFxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgJHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJHBhZ2luYXRpb24uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb24nKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVySXRlbXM7IGkrKykge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgICAgICRpdGVtLmRhdGFzZXQuaXRlbSA9IGkgKyAxXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgICRwYWdpbmF0aW9uLmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfVxuICAgICAgdGhpcy4kLmNhcm91c2VsLmFwcGVuZENoaWxkKCRwYWdpbmF0aW9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG8pIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICAgIH0sIHBhcnNlSW50KHRoaXMuYXV0bykpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24ubGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVMZWZ0KClcbiAgICB9KVxuXG4gICAgdGhpcy4kLm5hdmlnYXRpb24ucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICBmb3IgKGNvbnN0ICRidWxsZXQgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICkpIHtcbiAgICAgICRidWxsZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAkYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoJGJ1bGxldC5kYXRhc2V0Lml0ZW0gLSAxKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBwYXJzZUludCgkYnVsbGV0LmRhdGFzZXQuaXRlbSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHJhZykge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaERldmljZSkge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gdHJ1ZVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlID0gMFxuICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYWdJdGVtcyhldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdID4gdGhpcy5hY3R1YWxQb3NpdGlvbikgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPCB0aGlzLmFjdHVhbFBvc2l0aW9uKVxuICAgICAgICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiArIDIwKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwKSB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjAgfHxcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gLSAyMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9kcmFnSXRlbXMoY2xpZW50WCkge1xuICAgIGlmICh0aGlzLnByZXNzSXRlbXMpIHtcbiAgICAgIGlmIChjbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IGNsaWVudFggLSB0aGlzLmFjdHVhbFBvc2l0aW9uXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLiQuaXRlbXMsIDAuMSwgeyB4OiB0aGlzLnRyYW5zbGF0ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlSXRlbSAtIDEpICogLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCArXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdGhpcy5hY3R1YWxQb3NpdGlvbiAtIGNsaWVudFhcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLiQuaXRlbXMsIDAuMSwge1xuICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgICh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0NyZXRhZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gdHJ1ZVxuICAgICAgICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMubnVtYmVySXRlbXMgLSAxKSAqIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlSXRlbSAtIDEpICogLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVMZWZ0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbG9vcCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5udW1iZXJJdGVtcyAtIDEsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgIGNvbnN0ICRsYXN0SXRlbSA9IHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCdcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBkdXBsaWNhdGVMYXN0SXRlbSA9ICRsYXN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcblxuICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlTGFzdEl0ZW0pXG4gICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJyksXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKC0xLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMubnVtYmVySXRlbXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtIDw9IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbG9vcCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoMCwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgY29uc3QgJGZpcnN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVJdGVtcyh4LCBwb3NpdGlvbiA9IG51bGwpIHtcbiAgICBsZXQgdFxuICAgIGNsZWFyVGltZW91dCh0KVxuICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAxcyBlYXNlLWluLW91dCdcbiAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt4ICogLXRoaXMud2lkdGh9cHgpYFxuXG4gICAgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdyaWdodCcgJiZcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcblxuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKSxcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgIHBvc2l0aW9uID09PSAnbGVmdCcgJiZcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMubnVtYmVySXRlbXMgLSAxKSAqXG4gICAgICAgICAgLXRoaXMud2lkdGh9KWBcbiAgICAgIH1cbiAgICB9LCAxMDAwKVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKVxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Omxhc3QtY2hpbGQnKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Om50aC1jaGlsZCgke3RoaXMuYWN0aXZlSXRlbSAtIDF9KWBcbiAgICAgICAgICApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKVxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpudGgtY2hpbGQoJHt0aGlzLmFjdGl2ZUl0ZW0gKyAxfSlgXG4gICAgICAgICAgKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21GaWxlXG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBDdXN0b21GaWxlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbUZpbGUpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUgPSAkY3VzdG9tRmlsZSAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmxhYmVsID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5sYWJlbFxuICAgIHRoaXMuaXNCdXR0b24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvblxuICAgIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuYnV0dG9ucG9zXG4gICAgICA/IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuYnV0dG9ucG9zXG4gICAgICA6ICdyaWdodCdcbiAgICB0aGlzLnR5cGUgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC50eXBlXG4gICAgICA6ICdmaWxlJ1xuICAgIHRoaXMuaXNTaXplID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5zaXplXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5pc0J1dHRvbikge1xuICAgICAgdGhpcy4kLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19idXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uaW5uZXJUZXh0ID0gdGhpcy5pc0J1dHRvblxuICAgIH1cblxuICAgIHRoaXMuJC5jdXN0b21GaWxlLmlubmVySFRNTCA9ICcnXG5cbiAgICBpZiAodGhpcy5pc1NpemUpIHtcbiAgICAgIHRoaXMuJC5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fY29udGFpbmVyJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0J1dHRvbiAmJiB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5pc1NpemVcbiAgICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGFiZWxcbiAgICB0aGlzLiQubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5sYWJlbFxuICAgIHRoaXMuJC5sYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fbGFiZWwnKVxuICAgIHRoaXMuaXNTaXplXG4gICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmxhYmVsKVxuICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG5cbiAgICAvLyBDcmVhdGUgaW5wdXRcbiAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQubmFtZSlcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdmaWxlcycpIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgdHJ1ZSlcbiAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdmb2xkZXInKSB7XG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCd3ZWJraXRkaXJlY3RvcnknLCB0cnVlKVxuICAgICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlyZWN0b3J5cycsIHRydWUpXG4gICAgfVxuICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5pc1NpemVcbiAgICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1NpemUpIHtcbiAgICAgIHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5jb250YWluZXIpXG5cbiAgICAgIC8vIENyZWF0ZSBzaXplIGluZm9cbiAgICAgIHRoaXMuJC5zaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICB0aGlzLiQuc2l6ZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fc2l6ZScpXG4gICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSAnMCBtYidcbiAgICAgIHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5zaXplKVxuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuaW5wdXQuY2xpY2soKVxuICAgIH0pXG5cbiAgICBjb25zdCBzaXplQ29udmVydCA9IHNpemUgPT4ge1xuICAgICAgY29uc3QgYnl0ZXMgPSBzaXplXG4gICAgICBjb25zdCBzaXplcyA9IFsnYnl0ZXMnLCAna2InLCAnbWInLCAnZ2InLCAndGInXVxuICAgICAgY29uc3QgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKVxuICAgICAgY29uc3QgY29udmVydCA9IE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMilcbiAgICAgIHJldHVybiBgJHtjb252ZXJ0fSAke3NpemVzW2ldfWBcbiAgICB9XG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgdGhpcy4kLmxhYmVsLmlubmVyVGV4dCA9IGZpbGUubmFtZVxuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19maWxlQ2xvc2UnKVxuICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnJnRpbWVzOydcbiAgICAgICAgdGhpcy4kLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY2xvc2UsIHRoaXMuJC5idXR0b24pXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlID0gbnVsbFxuICAgICAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSB0aGlzLmxhYmVsXG4gICAgICAgICAgdGhpcy4kLmNvbnRhaW5lci5yZW1vdmVDaGlsZChjbG9zZSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gc2l6ZUNvbnZlcnQoZmlsZS5zaXplKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzXG5cbiAgICAgICAgY29uc3QgJGZpbGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGV0IHNpemUgPSAwXG5cbiAgICAgICAgQXJyYXkuZnJvbShmaWxlcykuZm9yRWFjaCgoZmlsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCAkZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgJGZpbGUuaW5uZXJUZXh0ID0gZmlsZS5uYW1lXG4gICAgICAgICAgJGZpbGUuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2ZpbGUnKVxuXG4gICAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19maWxlQ2xvc2UnKVxuICAgICAgICAgIGNsb3NlLmlubmVySFRNTCA9ICcmdGltZXM7J1xuXG4gICAgICAgICAgJGZpbGUuYXBwZW5kQ2hpbGQoY2xvc2UpXG4gICAgICAgICAgJGZpbGVzLmFwcGVuZENoaWxkKCRmaWxlKVxuXG4gICAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBEYXRhVHJhbnNmZXIoKVxuICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICAgICAgICBpZiAoZmlsZSAhPT0gZmlsZXNbaW5kZXhdKSBuZXdGaWxlcy5pdGVtcy5hZGQoZmlsZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJC5pbnB1dC5maWxlcyA9IG5ld0ZpbGVzLmZpbGVzXG4gICAgICAgICAgICAkZmlsZXMucmVtb3ZlQ2hpbGQoJGZpbGUpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHNpemUgKz0gZmlsZS5zaXplXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gc2l6ZUNvbnZlcnQoc2l6ZSlcblxuICAgICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCgkZmlsZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21GaWxlXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tUmFuZ2VcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEN1c3RvbVJhbmdlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVJhbmdlKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21SYW5nZSA9ICRjdXN0b21SYW5nZSAvLyBBZGQgY3VzdG9tUmFuZ2UgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5jdXJzb3JQcmVzcyA9IGZhbHNlXG4gICAgdGhpcy50b3RhbCA9IHRoaXMuJC5jdXN0b21SYW5nZS5kYXRhc2V0LnRvdGFsXG4gICAgdGhpcy5zdGVwID0gdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQuc3RlcFxuICAgIHRoaXMudHJhbnNmb3JtQ3Vyc29yID0gMFxuICAgIHRoaXMuYWN0dWFsU3RlcCA9IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQubmFtZSlcbiAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgLy8gQ3JlYXRlIGJhY2tncm91bmQgYmFyLlxuICAgIHRoaXMuJC5iYWNrZ3JvdW5kQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLiQuYmFja2dyb3VuZEJhci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2JhcicpXG4gICAgdGhpcy4kLmJhY2tncm91bmRCYXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19iYXItLWJhY2tncm91bmQnKVxuXG4gICAgLy8gQ3JlYXRlIHBsYWluIGJhci5cbiAgICB0aGlzLiQucGxhaW5CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuJC5wbGFpbkJhci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2JhcicpXG4gICAgdGhpcy4kLnBsYWluQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyLS1wbGFpbicpXG5cbiAgICAvLyBDcmVhdGUgY3Vzcm9yLlxuICAgIHRoaXMuJC5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuJC5jdXJzb3IuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19jdXJzb3InKVxuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5iYWNrZ3JvdW5kQmFyKVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQucGxhaW5CYXIpXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5jdXJzb3IpXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgIHRoaXMuJC5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLTUwJSlgXG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy4kLmN1c3RvbVJhbmdlLm9mZnNldFdpZHRoXG4gICAgdGhpcy5udW1iZXJTdGVwcyA9IHRoaXMudG90YWwgLyB0aGlzLnN0ZXAgLy8gbm9tYnJlIGRlIGZvaXMgcG91ciBhcnJpdmVyIGEgdG90YWxcbiAgICB0aGlzLnJhdGlvID0gdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyU3RlcHMgLy8gcGl4ZWwgZGUgbGFyZ2V1ciBwb3VyIDElIGR1IHRvdGFsXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICB0aGlzLmN1cnNvclByZXNzID0gdHJ1ZVxuICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ID0+IHtcbiAgICAgIHRoaXMuY3Vyc29yUHJlc3MgPSBmYWxzZVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5jdXJzb3JQcmVzcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24gJiZcbiAgICAgICAgICBldmVudC5jbGllbnRYID49ICh0aGlzLmFjdHVhbFN0ZXAgKyAxKSAqIHRoaXMucmF0aW8gJiZcbiAgICAgICAgICB0aGlzLmFjdHVhbFN0ZXAgPCB0aGlzLm51bWJlclN0ZXBzXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudHJhbnNmb3JtQ3Vyc29yID1cbiAgICAgICAgICAgICh0aGlzLmFjdHVhbFN0ZXAgKyAxKSAqIHRoaXMucmF0aW8gLSB0aGlzLiQuY3Vyc29yLm9mZnNldFdpZHRoIC8gMlxuICAgICAgICAgIHRoaXMuJC5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zZm9ybUN1cnNvcn1weClgXG4gICAgICAgICAgdGhpcy4kLnBsYWluQmFyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHsoMSAvIHRoaXMubnVtYmVyU3RlcHMpICpcbiAgICAgICAgICAgICh0aGlzLmFjdHVhbFN0ZXAgKyAxKX0pYFxuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC5jbGllbnRYXG4gICAgICAgICAgdGhpcy5hY3R1YWxTdGVwKytcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAmJlxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPD0gKHRoaXMuYWN0dWFsU3RlcCAtIDEpICogdGhpcy5yYXRpbyAmJlxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPVxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCAtIDEpICogdGhpcy5yYXRpbyAtIHRoaXMuJC5jdXJzb3Iub2Zmc2V0V2lkdGggLyAyXG4gICAgICAgICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNmb3JtQ3Vyc29yfXB4KWBcbiAgICAgICAgICB0aGlzLiQucGxhaW5CYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgkeygxIC8gdGhpcy5udW1iZXJTdGVwcykgKlxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCAtIDEpfSlgXG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLmFjdHVhbFN0ZXAtLVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGxldCBjbGlja1N0ZXAgPSAwXG4gICAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8PSB0aGlzLm51bWJlclN0ZXBzOyBzdGVwKyspIHtcbiAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPiBzdGVwICogdGhpcy5yYXRpbyAtIDIwKSBjbGlja1N0ZXAgPSBzdGVwXG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhbnNmb3JtQ3Vyc29yID1cbiAgICAgICAgY2xpY2tTdGVwICogdGhpcy5yYXRpbyAtIHRoaXMuJC5jdXJzb3Iub2Zmc2V0V2lkdGggLyAyXG4gICAgICB0aGlzLiQuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy50cmFuc2Zvcm1DdXJzb3J9cHgpYFxuICAgICAgdGhpcy4kLnBsYWluQmFyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHsoMSAvIHRoaXMubnVtYmVyU3RlcHMpICpcbiAgICAgICAgY2xpY2tTdGVwfSlgXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SYW5nZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVNlbGVjdFxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVNlbGVjdCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0ID0gJGN1c3RvbVNlbGVjdCAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuaW5pdFBhcmFtcygpXG4gICAgdGhpcy5pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubmFtZVxuICAgIHRoaXMuaXNGaWx0ZXJzID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmZpbHRlcnMgLy8gU2V0IGZpbHRlcnMgaXMgYWN0aXZhdGVkLlxuICAgIHRoaXMuaXNPbk1vYmlsZSA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5tb2JpbGUgLy8gU2V0IGN1c3RvbSBtb2JpbGUgaXMgYWN0aXZhdGVkLlxuICAgIHRoaXMudmlydHVhbExhYmVsID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmxhYmVsIC8vIFNldCBhY3RpdmF0ZWQgbGFiZWwuXG4gICAgdGhpcy5pdGVtcyA9IEpTT04ucGFyc2UodGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lml0ZW1zKSAvLyBDcmVhdGUgSlNPTiBvYmplY3Qgd2l0aCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk5MXB4KScpLm1hdGNoZXMpIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAgICBjb25zdCAkc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICRzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICRkZWZhdWx0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJylcbiAgICAgICRkZWZhdWx0T3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbFxuICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkZGVmYXVsdE9wdGlvbilcblxuICAgICAgLy8gQ3JlYXRlIHNlbGVjdCBvcHRpb25zLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbS52YWx1ZSlcbiAgICAgICAgJG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLmxhYmVsXG4gICAgICAgICRzZWxlY3QuYXBwZW5kQ2hpbGQoJG9wdGlvbilcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJHNlbGVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tZmlsdGVycycpXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCB3aXRoIGVsZW1lbnRzLlxuICAgICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY29udGVudCcpXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5sYWJlbCA9IGl0ZW0ubGFiZWxcbiAgICAgICAgJGl0ZW0uZGF0YXNldC52YWx1ZSA9IGl0ZW0udmFsdWVcbiAgICAgICAgJGl0ZW0uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9KVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbi5cbiAgICAgIHRoaXMuJC5jaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLmNob29zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jaG9vc2UnKVxuICAgICAgaWYgKCF0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbFxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgd3JhcHBpbmcgY29udGFpbmVyIGZvciBjb250ZW50LlxuICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRhaW5lcicpXG4gICAgICAkY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy5uYW1lKVxuICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIGlucHV0IGZvciBzZWxlY3QgdmFsdWUuXG4gICAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgICkgLy8gR2V0IGFsbCBpdGVtcyBpbiBhcnJheS5cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBmaWx0ZXIgaW5wdXQuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbFxuICAgICAgICB0aGlzLiQuY2hvb3NlLmFwcGVuZENoaWxkKHRoaXMuJC5maWx0ZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHMoKVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIGlmIChcbiAgICAgICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKS5tYXRjaGVzKSB8fFxuICAgICAgdGhpcy5pc09uTW9iaWxlXG4gICAgKSB7XG4gICAgICB0aGlzLiQuY2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKSkge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG4gICAgICAgICAgfSwgMjAwKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgICAgICAgICB9LCAyMDApXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5pdGVtcy5mb3JFYWNoKCRpdGVtID0+IHtcbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSgkaXRlbSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAnJ1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRoaXMudmlydHVhbExhYmVsKVxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5mb3JFYWNoKCRpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJGl0ZW1cbiAgICAgICAgICAgICRuZXdJdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLiQuaXRlbXMuZm9yRWFjaCgkaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoJGl0ZW0uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy4kLmZpbHRlci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgJG5ld0l0ZW0gPSAkaXRlbVxuICAgICAgICAgICAgICAkbmV3SXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgJG5ld0l0ZW0gPSAkaXRlbVxuICAgICAgICAgICAgICAkbmV3SXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy4kLmN1c3RvbVNlbGVjdC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcblxuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcblxuICAgICAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJC5maWx0ZXIudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLnZpcnR1YWxMYWJlbFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMudmlydHVhbExhYmVsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VWYWx1ZSgkaXRlbSkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9ICRpdGVtLmRhdGFzZXQubGFiZWxcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNob29zZS5pbm5lclRleHQgPSAkaXRlbS5kYXRhc2V0LmxhYmVsXG4gICAgfVxuXG4gICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJGl0ZW0uZGF0YXNldC52YWx1ZVxuICAgIHRoaXMudmlydHVhbExhYmVsID0gJGl0ZW0uZGF0YXNldC5sYWJlbFxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdFxuIiwiLyoqKioqKioqKipcbiAqIERyb3Bkb3duXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKCRkcm9wZG93bikge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZHJvcGRvd24gPSAkZHJvcGRvd24gLy8gQWRkIGRyb3Bkb3duIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNPbk1vYmlsZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQubmFtZVxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbGluaycgLy8gU2V0IHR5cGUgb2YgZHJvcGRvd24uXG4gICAgdGhpcy5pdGVtcyA9XG4gICAgICB0aGlzLnR5cGUgPT09ICdsaW5rJyA/IEpTT04ucGFyc2UodGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQuaXRlbXMpIDogbnVsbCAvLyBDcmVhdGUgSlNPTiBvYmplY3Qgd2l0aCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmlzT25Nb2JpbGUgJiZcbiAgICAgIHRoaXMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlc1xuICAgICkge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICAgIHRoaXMuJC5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG4gICAgICB0aGlzLiQuc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG5cbiAgICAgIC8vIENyZWF0ZSBzZWxlY3Qgb3B0aW9ucy5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLmxpbmspXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICB0aGlzLiQuc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5kcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuJC5zZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjb250ZW50JylcbiAgICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pdGVtJylcbiAgICAgICAgKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jb250ZW50JylcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAkaXRlbS5pbm5lclRleHQgPSBpdGVtLmxhYmVsXG4gICAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCdocmVmJywgaXRlbS5saW5rKVxuXG4gICAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2l0ZW0nKVxuICAgICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2Nob29zZScpXG4gICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG4gICAgICB0aGlzLiQuY2hvb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWUpXG5cbiAgICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRhaW5lcicpXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICAgJGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuJC5jaG9vc2UpXG4gICAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9faXRlbScpXG4gICAgICApIC8vIEdldCBhbGwgaXRlbXMgaW4gYXJyYXkuXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHx8XG4gICAgICB0aGlzLmlzT25Nb2JpbGUgfHxcbiAgICAgICghdGhpcy5pc09uTW9iaWxlICYmIHRoaXMudHlwZSA9PT0gJ2NvbnRlbnQnKVxuICAgICkge1xuICAgICAgdGhpcy4kLmNob29zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5kcm9wZG93bi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIXRoaXMuaXNPbk1vYmlsZSAmJlxuICAgICAgdGhpcy50eXBlID09PSAnbGluaycgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5OTFweCknKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICB0aGlzLiQuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy4kLnNlbGVjdC52YWx1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqKioqKioqKipcbiAqIEZvcm1WYWxpZGF0aW9uXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBGb3JtVmFsaWRhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCRmb3JtKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5mb3JtID0gJGZvcm0gLy8gQWRkIGZvcm0gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5ub0luc3RhbnQgPSAhIXRoaXMuJC5mb3JtLmRhdGFzZXQubm9pbnN0YW50XG4gICAgdGhpcy5ub1N1Ym1pdCA9ICEhdGhpcy4kLmZvcm0uZGF0YXNldC5ub3N1Ym1pdFxuICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmlucHV0R3JvdXBzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCAkaW5wdXRHcm91cCBvZiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJylcbiAgICApKSB7XG4gICAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG5cbiAgICAgICRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubm9JbnN0YW50KSB7XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZSgkaW5wdXRHcm91cClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubm9TdWJtaXQpIHtcbiAgICAgIHRoaXMuJC5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZVxuICAgICAgICBmb3IgKGNvbnN0ICRpbnB1dEdyb3VwIG9mIEFycmF5LmZyb20oXG4gICAgICAgICAgdGhpcy4kLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJylcbiAgICAgICAgKSkge1xuICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZSgkaW5wdXRHcm91cCkpIHRoaXMuZm9ybUVycm9yID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybUVycm9yKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKCRpbnB1dEdyb3VwKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIGNvbnN0IHZhbHVlID0gJGlucHV0LnZhbHVlXG4gICAgY29uc3QgaW5wdXRUeXBlID0gJGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpXG5cbiAgICAvLyBydWxlc1xuICAgIGNvbnN0IHJ1bGVzID0ge31cbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZClcbiAgICAgIHJ1bGVzLnJlcXVpcmVkID0gJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZFxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0Lm1pbmxlbmd0aClcbiAgICAgIHJ1bGVzLm1pbkxlbmd0aCA9IHBhcnNlSW50KCRpbnB1dEdyb3VwLmRhdGFzZXQubWlubGVuZ3RoKVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0Lm1heGxlbmd0aClcbiAgICAgIHJ1bGVzLm1heExlbmd0aCA9IHBhcnNlSW50KCRpbnB1dEdyb3VwLmRhdGFzZXQubWF4bGVuZ3RoKVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkbWVzc2FnZSlcbiAgICAgIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSA9ICRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRtZXNzYWdlXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtaW5sZW5ndGgpXG4gICAgICBydWxlcy5lcnJvck1pbkxlbmd0aCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtaW5sZW5ndGhcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1heGxlbmd0aClcbiAgICAgIHJ1bGVzLmVycm9yTWF4TGVuZ3RoID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1heGxlbmd0aFxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWVzc2FnZSlcbiAgICAgIHJ1bGVzLmVycm9yTWVzc2FnZSA9ICRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtZXNzYWdlXG5cbiAgICBpZiAoaW5wdXRUeXBlID09PSAndGV4dCcpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5taW5MZW5ndGggJiYgdmFsdWUubGVuZ3RoIDwgcnVsZXMubWluTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWluTGVuZ3RoIHx8ICd0b28gbG93JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1heExlbmd0aCAmJiB2YWx1ZS5sZW5ndGggPiBydWxlcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNYXhMZW5ndGggfHwgJ3RvbyBiaWcnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5taW5MZW5ndGggJiYgdmFsdWUgPCBydWxlcy5taW5MZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNaW5MZW5ndGggfHwgJ3RvbyBsb3cnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWF4TGVuZ3RoICYmIHZhbHVlID4gcnVsZXMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWF4TGVuZ3RoIHx8ICd0b28gYmlnJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdlbWFpbCcpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXZhbHVlLm1hdGNoKFxuICAgICAgICAgIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1lc3NhZ2UgfHwgJ25vdCBhIHZhbGlkIGVtYWlsJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICd0ZWwnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF2YWx1ZS5tYXRjaCgvXig/Oig/OlxcK3wwMCkzM3wwKVxccypbMS05XSg/OltcXHMuLV0qXFxkezJ9KXs0fSQvKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWVzc2FnZSB8fCAnbm90IGEgdmFsaWQgZW1haWwnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRFcnJvcigkaW5wdXRHcm91cCwgZXJyb3IpIHtcbiAgICBsZXQgJGVycm9yID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignLmlucHV0LWdyb3VwX19lcnJvcicpXG4gICAgaWYgKCRlcnJvcikge1xuICAgICAgJGVycm9yLmlubmVyVGV4dCA9IGVycm9yXG4gICAgfSBlbHNlIHtcbiAgICAgICRlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgJGVycm9yLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwX19lcnJvcicpXG4gICAgICAkZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JcbiAgICAgICRpbnB1dEdyb3VwLmFwcGVuZENoaWxkKCRlcnJvcilcbiAgICB9XG4gIH1cblxuICBjbGVhckVycm9yKCRpbnB1dEdyb3VwKSB7XG4gICAgY29uc3QgJGVycm9yID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignLmlucHV0LWdyb3VwX19lcnJvcicpXG4gICAgaWYgKCRlcnJvcikge1xuICAgICAgJGlucHV0R3JvdXAucmVtb3ZlQ2hpbGQoJGVycm9yKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdGlvblxuIiwiLyoqKioqKioqKipcbiAqIEhlYWRlclxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykgLy8gQWRkIGhlYWRlciBpbiBET00gb2JqZWN0cy5cbiAgICB0aGlzLiQuY2xvc2UgPSB0aGlzLiQuaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RvZ2dsZS0tY2xvc2UnKVxuICAgIHRoaXMuJC5vcGVuID0gdGhpcy4kLmhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b2dnbGUtLW9wZW4nKVxuICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX21lbnVJdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMjAwcHgpJykubWF0Y2hlcykge1xuICAgICAgdGhpcy4kLm9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuJC5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy4kLmhlYWRlci5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICAgICAgIHRoaXMuJC5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICAgY29uc3Qgc3ViID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51SXRlbVN1YicpXG4gICAgICAgIGlmIChzdWIpIHtcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnVJdGVtQnV0dG9uJylcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBzdWIub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgc3ViLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICBzdWIuc3R5bGUudHJhbnNpdGlvbiA9ICdoZWlnaHQgMC4zcyBlYXNlLWluLW91dCdcblxuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX21lbnVJdGVtU3ViLS1vcGVuJykpIHtcbiAgICAgICAgICAgICAgc3ViLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICAgICAgc3ViLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbWVudUl0ZW1TdWItLW9wZW4nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3ViLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcbiAgICAgICAgICAgICAgc3ViLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbWVudUl0ZW1TdWItLW9wZW4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iLCIvKioqKioqKioqKlxuICogSW5wdXRHcm91cFxuICogdjEuMC4xXG4gKi9cblxuY2xhc3MgSW5wdXRHcm91cCB7XG4gIGNvbnN0cnVjdG9yKCRpbnB1dEdyb3VwKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5pbnB1dEdyb3VwID0gJGlucHV0R3JvdXAgLy8gQWRkIGlucHV0R3JvdXAgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiQuaW5wdXRHcm91cC5pbm5lckhUTUxcbiAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXBfX2NvbnRlbnQnKVxuICAgICRjb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICB0aGlzLiQuaW5wdXQgPSAkY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0R3JvdXAuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLiQuaW5wdXRHcm91cC5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuaW5wdXRHcm91cC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cC0tYWN0aXZlJylcbiAgICB9KVxuXG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuJC5pbnB1dC52YWx1ZSlcbiAgICAgICAgdGhpcy4kLmlucHV0R3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZ3JvdXAtLWFjdGl2ZScpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEdyb3VwXG4iLCIvKioqKioqKioqKlxuICogTW9kYWxcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoJG1vZGFsKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5tb2RhbCA9ICRtb2RhbCAvLyBBZGQgbW9kYWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubW9kYWwtYnV0dG9uW2RhdGEtbW9kYWw9XCIke3RoaXMuJC5tb2RhbC5kYXRhc2V0Lm1vZGFsfVwiXWBcbiAgICAgIClcbiAgICApXG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5tb2RhbC1idXR0b25bZGF0YS1tb2RhbD1cIiR7dGhpcy4kLm1vZGFsLmRhdGFzZXQubW9kYWx9XCJdYFxuICAgICAgKVxuICAgIGlmICh0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpKVxuICAgICAgdGhpcy4kLmNsb3NlID0gdGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtLWFjdGl2ZScpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGVudCcpLmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLiQuYnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLiQuY2xvc2UpIHtcbiAgICAgIHRoaXMuJC5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsImNsYXNzIFJlc2V0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgIGlmICghL15bYS16MC05XSQvaS50ZXN0KGV2ZW50LmtleSkpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQnKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2tleWJvYXJkJylcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0XG4iLCIvKioqKioqKioqKlxuICogVGFic1xuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgVGFicyB7XG4gIGNvbnN0cnVjdG9yKCR0YWJzKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC50YWJzID0gJHRhYnMgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5oZWFkZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faGVhZGVySXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCAkaGVhZGVySXRlbSBvZiB0aGlzLiQuaGVhZGVySXRlbXMpIHtcbiAgICAgIGNvbnN0ICRjb250ZW50SXRlbSA9IHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGFic19fY29udGVudEl0ZW1bZGF0YS1pdGVtPVwiJHskaGVhZGVySXRlbS5kYXRhc2V0Lml0ZW19XCJdYFxuICAgICAgKVxuICAgICAgJGhlYWRlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19faGVhZGVySXRlbS0tYWN0aXZlJykpXG4gICAgICAgICAgdGhpcy4kLnRhYnNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICBpZiAodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgICAgJGhlYWRlckl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgJGNvbnRlbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuIiwiaW1wb3J0ICcuL3BvbHlmaWxscy9BcnJheS5mcm9tJ1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbidcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL0Nhcm91c2VsJ1xuaW1wb3J0IEN1c3RvbUZpbGUgZnJvbSAnLi9DdXN0b21GaWxlJ1xuaW1wb3J0IEN1c3RvbVJhbmdlIGZyb20gJy4vQ3VzdG9tUmFuZ2UnXG5pbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gJy4vQ3VzdG9tU2VsZWN0J1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnLi9JbnB1dEdyb3VwJ1xuaW1wb3J0IEZvcm1WYWxpZGF0aW9uIGZyb20gJy4vRm9ybVZhbGlkYXRpb24nXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCBSZXNldCBmcm9tICcuL1Jlc2V0J1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJ1xuXG5jb25zdCAkYWNjb3JkaW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpKVxuZm9yIChjb25zdCAkYWNjb3JkaW9uIG9mICRhY2NvcmRpb25zKSB7XG4gIG5ldyBBY2NvcmRpb24oJGFjY29yZGlvbilcbn1cblxuY29uc3QgJGNhcm91c2VscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsJykpXG5mb3IgKGNvbnN0ICRjYXJvdXNlbCBvZiAkY2Fyb3VzZWxzKSB7XG4gIG5ldyBDYXJvdXNlbCgkY2Fyb3VzZWwpXG59XG5cbmNvbnN0ICRjdXN0b21GaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1maWxlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21GaWxlIG9mICRjdXN0b21GaWxlcykge1xuICBuZXcgQ3VzdG9tRmlsZSgkY3VzdG9tRmlsZSlcbn1cblxuY29uc3QgJGN1c3RvbVJhbmdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYW5nZScpKVxuZm9yIChjb25zdCAkY3VzdG9tUmFuZ2Ugb2YgJGN1c3RvbVJhbmdlcykge1xuICBuZXcgQ3VzdG9tUmFuZ2UoJGN1c3RvbVJhbmdlKVxufVxuXG5jb25zdCAkY3VzdG9tU2VsZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3QnKSlcbmZvciAoY29uc3QgJGN1c3RvbVNlbGVjdCBvZiAkY3VzdG9tU2VsZWN0cykge1xuICBuZXcgQ3VzdG9tU2VsZWN0KCRjdXN0b21TZWxlY3QpXG59XG5cbmNvbnN0ICRkcm9wZG93bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpKVxuZm9yIChjb25zdCAkZHJvcGRvd24gb2YgJGRyb3Bkb3ducykge1xuICBuZXcgRHJvcGRvd24oJGRyb3Bkb3duKVxufVxuXG5uZXcgSGVhZGVyKClcblxuY29uc3QgJGlucHV0R3JvdXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKSlcbmZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgJGlucHV0R3JvdXBzKSB7XG4gIG5ldyBJbnB1dEdyb3VwKCRpbnB1dEdyb3VwKVxufVxuXG5jb25zdCAkZm9ybXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWxpZGF0aW9uJykpXG5mb3IgKGNvbnN0ICRmb3JtIG9mICRmb3Jtcykge1xuICBuZXcgRm9ybVZhbGlkYXRpb24oJGZvcm0pXG59XG5cbmNvbnN0ICRtb2RhbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpKVxuZm9yIChjb25zdCAkbW9kYWwgb2YgJG1vZGFscykge1xuICBuZXcgTW9kYWwoJG1vZGFsKVxufVxuXG5uZXcgUmVzZXQoKVxuXG5jb25zdCAkdGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSlcbmZvciAoY29uc3QgJHRhYiBvZiAkdGFicykge1xuICBuZXcgVGFicygkdGFiKVxufVxuIiwiaWYgKCFBcnJheS5mcm9tKSB7XG4gIEFycmF5LmZyb20gPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuICAgIHZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICB9XG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKVxuICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChudW1iZXIgPT09IDAgfHwgIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlclxuICAgICAgfVxuICAgICAgcmV0dXJuIChudW1iZXIgPiAwID8gMSA6IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSlcbiAgICB9XG4gICAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMVxuICAgIHZhciB0b0xlbmd0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKHZhbHVlKVxuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGxlbiwgMCksIG1heFNhZmVJbnRlZ2VyKVxuICAgIH1cblxuICAgIC8vIFRoZSBsZW5ndGggcHJvcGVydHkgb2YgdGhlIGZyb20gbWV0aG9kIGlzIDEuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgICAgLy8gMS4gTGV0IEMgYmUgdGhlIHRoaXMgdmFsdWUuXG4gICAgICB2YXIgQyA9IHRoaXNcblxuICAgICAgLy8gMi4gTGV0IGl0ZW1zIGJlIFRvT2JqZWN0KGFycmF5TGlrZSkuXG4gICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKVxuXG4gICAgICAvLyAzLiBSZXR1cm5JZkFicnVwdChpdGVtcykuXG4gICAgICBpZiAoYXJyYXlMaWtlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAnQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCdcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyA0LiBJZiBtYXBmbiBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IG1hcHBpbmcgYmUgZmFsc2UuXG4gICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkXG4gICAgICB2YXIgVFxuICAgICAgaWYgKHR5cGVvZiBtYXBGbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gNS4gZWxzZVxuICAgICAgICAvLyA1LiBhIElmIElzQ2FsbGFibGUobWFwZm4pIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG4gICAgICAgIGlmICghaXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDUuIGIuIElmIHRoaXNBcmcgd2FzIHN1cHBsaWVkLCBsZXQgVCBiZSB0aGlzQXJnOyBlbHNlIGxldCBUIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgVCA9IGFyZ3VtZW50c1syXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDEwLiBMZXQgbGVuVmFsdWUgYmUgR2V0KGl0ZW1zLCBcImxlbmd0aFwiKS5cbiAgICAgIC8vIDExLiBMZXQgbGVuIGJlIFRvTGVuZ3RoKGxlblZhbHVlKS5cbiAgICAgIHZhciBsZW4gPSB0b0xlbmd0aChpdGVtcy5sZW5ndGgpXG5cbiAgICAgIC8vIDEzLiBJZiBJc0NvbnN0cnVjdG9yKEMpIGlzIHRydWUsIHRoZW5cbiAgICAgIC8vIDEzLiBhLiBMZXQgQSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIEMgd2l0aCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGxlbi5cbiAgICAgIC8vIDE0LiBhLiBFbHNlLCBMZXQgQSBiZSBBcnJheUNyZWF0ZShsZW4pLlxuICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbilcblxuICAgICAgLy8gMTYuIExldCBrIGJlIDAuXG4gICAgICB2YXIgayA9IDBcbiAgICAgIC8vIDE3LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW7igKYgKGFsc28gc3RlcHMgYSAtIGgpXG4gICAgICB2YXIga1ZhbHVlXG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXVxuICAgICAgICBpZiAobWFwRm4pIHtcbiAgICAgICAgICBBW2tdID1cbiAgICAgICAgICAgIHR5cGVvZiBUID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA/IG1hcEZuKGtWYWx1ZSwgaylcbiAgICAgICAgICAgICAgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgaylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBW2tdID0ga1ZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgayArPSAxXG4gICAgICB9XG4gICAgICAvLyAxOC4gTGV0IHB1dFN0YXR1cyBiZSBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cbiAgICAgIEEubGVuZ3RoID0gbGVuXG4gICAgICAvLyAyMC4gUmV0dXJuIEEuXG4gICAgICByZXR1cm4gQVxuICAgIH1cbiAgfSkoKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==