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
 * v1.0.0
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
 * v1.0.0s
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

    this._initParams();

    this._initialize();
  }
  /**
   * Initialize params
   */


  _createClass(CustomSelect, [{
    key: "_initParams",
    value: function _initParams() {
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
    key: "_initialize",
    value: function _initialize() {
      if (!this.isOnMobile && window.matchMedia('(max-width: 991px)').matches) {
        // Create the select element.
        var $select = document.createElement('select');
        $select.setAttribute('name', this.name); // Create the default select option.

        var $option = document.createElement('option');
        $option.setAttribute('value', '');
        $option.innerText = this.$.customSelect.dataset.label;
        $select.appendChild($option); // Create select options.

        var _iterator = _createForOfIteratorHelper(this.items),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            var _$option = document.createElement('option');

            _$option.setAttribute('value', item.value);

            _$option.innerText = item.label;
            $select.appendChild(_$option);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.$.customSelect.innerHTML = '';
        this.$.customSelect.appendChild($select);
      } else {
        if (this.isFilters) this.$.customSelect.classList.add('custom-select--filters'); // Create the content with elements.

        var $content = document.createElement('div');
        $content.classList.add('custom-select__content');

        var _iterator2 = _createForOfIteratorHelper(this.items),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            var $item = document.createElement('div');
            $item.dataset.label = _item.label;
            $item.dataset.value = _item.value;
            $item.innerText = _item.label;
            $item.classList.add('custom-select__item');
            $content.appendChild($item);
          } // Create the button.

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this.$.choose = document.createElement('div');
        this.$.choose.setAttribute('id', this.name);
        this.$.choose.classList.add('custom-select__choose');
        if (!this.isFilters) this.$.choose.innerHTML = this.$.customSelect.dataset.label; // Create wrapping container for content.

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

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      if (!this.isOnMobile && window.matchMedia('(min-width: 992px)').matches || this.isOnMobile) {
        this.$.choose.addEventListener('click', function () {
          _this.$.customSelect.classList.toggle('custom-select--open');
        });

        if (this.isFilters) {
          this.$.filter.addEventListener('click', function (event) {
            event.stopPropagation();

            _this.$.customSelect.classList.add('custom-select--open');
          });
        }

        var _iterator3 = _createForOfIteratorHelper(this.$.items),
            _step3;

        try {
          var _loop = function _loop() {
            var $item = _step3.value;
            $item.addEventListener('click', function () {
              _this._changeValue($item);
            });
          };

          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (this.isFilters) {
          this.$.filter.addEventListener('click', function () {
            _this.$.filter.value = '';

            _this.$.filter.setAttribute('placeholder', _this.virtualLabel);

            var _iterator4 = _createForOfIteratorHelper(_this.$.items),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var $item = _step4.value;
                $item.style.display = 'block';
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          });
          this.$.filter.addEventListener('input', function () {
            var _iterator5 = _createForOfIteratorHelper(_this.$.items),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var $item = _step5.value;
                if ($item.innerText.toLowerCase().includes(_this.$.filter.value)) $item.style.display = 'block';else $item.style.display = 'none';
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          });
        }

        document.addEventListener('click', function (event) {
          if (!_this.$.customSelect.contains(event.target)) {
            _this.$.customSelect.classList.remove('custom-select--open');

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
        _this._initialize();
      });
    }
  }, {
    key: "_changeValue",
    value: function _changeValue($item) {
      if (this.isFilters) {
        this.$.filter.value = $item.dataset.label;
      } else {
        this.$.choose.innerText = $item.dataset.label;
      }

      this.$.input.value = $item.dataset.value;
      this.virtualLabel = $item.dataset.label;
      this.$.customSelect.classList.remove('custom-select--open');
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

  document.addEventListener('keydown', function () {
    document.body.classList.add('keyboard');
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
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion */ "./js/Accordion.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel */ "./js/Carousel.js");
/* harmony import */ var _CustomFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomFile */ "./js/CustomFile.js");
/* harmony import */ var _CustomRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomRange */ "./js/CustomRange.js");
/* harmony import */ var _CustomSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomSelect */ "./js/CustomSelect.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dropdown */ "./js/Dropdown.js");
/* harmony import */ var _FormValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormValidation */ "./js/FormValidation.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal */ "./js/Modal.js");
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Reset */ "./js/Reset.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tabs */ "./js/Tabs.js");










var $accordions = Array.from(document.querySelectorAll('.accordion'));

for (var _i = 0, _$accordions = $accordions; _i < _$accordions.length; _i++) {
  var $accordion = _$accordions[_i];
  new _Accordion__WEBPACK_IMPORTED_MODULE_0__["default"]($accordion);
}

var $carousels = Array.from(document.querySelectorAll('.carousel'));

for (var _i2 = 0, _$carousels = $carousels; _i2 < _$carousels.length; _i2++) {
  var $carousel = _$carousels[_i2];
  new _Carousel__WEBPACK_IMPORTED_MODULE_1__["default"]($carousel);
}

var $customFiles = Array.from(document.querySelectorAll('.custom-file'));

for (var _i3 = 0, _$customFiles = $customFiles; _i3 < _$customFiles.length; _i3++) {
  var $customFile = _$customFiles[_i3];
  new _CustomFile__WEBPACK_IMPORTED_MODULE_2__["default"]($customFile);
}

var $customRanges = Array.from(document.querySelectorAll('.custom-range'));

for (var _i4 = 0, _$customRanges = $customRanges; _i4 < _$customRanges.length; _i4++) {
  var $customRange = _$customRanges[_i4];
  new _CustomRange__WEBPACK_IMPORTED_MODULE_3__["default"]($customRange);
}

var $customSelects = Array.from(document.querySelectorAll('.custom-select'));

for (var _i5 = 0, _$customSelects = $customSelects; _i5 < _$customSelects.length; _i5++) {
  var $customSelect = _$customSelects[_i5];
  new _CustomSelect__WEBPACK_IMPORTED_MODULE_4__["default"]($customSelect);
}

var $dropdowns = Array.from(document.querySelectorAll('.dropdown'));

for (var _i6 = 0, _$dropdowns = $dropdowns; _i6 < _$dropdowns.length; _i6++) {
  var $dropdown = _$dropdowns[_i6];
  new _Dropdown__WEBPACK_IMPORTED_MODULE_5__["default"]($dropdown);
}

var $forms = Array.from(document.querySelectorAll('.validation'));

for (var _i7 = 0, _$forms = $forms; _i7 < _$forms.length; _i7++) {
  var $form = _$forms[_i7];
  new _FormValidation__WEBPACK_IMPORTED_MODULE_6__["default"]($form);
}

var $modals = Array.from(document.querySelectorAll('.modal'));

for (var _i8 = 0, _$modals = $modals; _i8 < _$modals.length; _i8++) {
  var $modal = _$modals[_i8];
  new _Modal__WEBPACK_IMPORTED_MODULE_7__["default"]($modal);
}

new _Reset__WEBPACK_IMPORTED_MODULE_8__["default"]();
var $tabs = Array.from(document.querySelectorAll('.tabs'));

for (var _i9 = 0, _$tabs = $tabs; _i9 < _$tabs.length; _i9++) {
  var $tab = _$tabs[_i9];
  new _Tabs__WEBPACK_IMPORTED_MODULE_9__["default"]($tab);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbUZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2pzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2pzL0Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL1Jlc2V0LmpzIiwid2VicGFjazovLy8uL2pzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInB1c2giLCJpdGVtIiwiaGVpZ2h0Iiwic3R5bGUiLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkNhcm91c2VsIiwiJGNhcm91c2VsIiwiY2Fyb3VzZWwiLCJuYXZpZ2F0aW9uIiwibGVmdCIsInJpZ2h0IiwiaXNUb3VjaERldmljZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwidHlwZSIsImFjdGl2ZUl0ZW0iLCJwYWdpbmF0aW9uIiwiZHJhZyIsImF1dG8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibnVtYmVySXRlbXMiLCJsZW5ndGgiLCIkcGFnaW5hdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInNldEludGVydmFsIiwiX21vdmVSaWdodCIsInBhcnNlSW50IiwiX21vdmVMZWZ0Iiwia2V5Q29kZSIsIiRidWxsZXQiLCJfbW92ZUl0ZW1zIiwiYWN0dWFsUG9zaXRpb24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsInByZXNzSXRlbXMiLCJ0cmFuc2xhdGUiLCJkcmFnQ3JldGFlZEl0ZW0iLCJfZHJhZ0l0ZW1zIiwiY2hhbmdlZFRvdWNoZXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCIkbGFzdEl0ZW0iLCJkdXBsaWNhdGVMYXN0SXRlbSIsImNsb25lTm9kZSIsInRyYW5zZm9ybSIsInBvc2l0aW9uIiwiaW5zZXJ0QmVmb3JlIiwiVHdlZW5MaXRlIiwidG8iLCJ4IiwiJGZpcnN0SXRlbSIsImR1cGxpY2F0ZUZpcnN0SXRlbSIsInQiLCJjbGVhclRpbWVvdXQiLCJ0cmFuc2l0aW9uIiwiQ3VzdG9tRmlsZSIsIiRjdXN0b21GaWxlIiwiY3VzdG9tRmlsZSIsImxhYmVsIiwiaXNCdXR0b24iLCJidXR0b24iLCJpc0J1dHRvblBvc2l0aW9uIiwiYnV0dG9ucG9zIiwiaXNTaXplIiwic2l6ZSIsImlubmVyVGV4dCIsImlubmVySFRNTCIsImNvbnRhaW5lciIsImlucHV0IiwibmFtZSIsImRpc3BsYXkiLCJjbGljayIsInNpemVDb252ZXJ0IiwiYnl0ZXMiLCJzaXplcyIsIk1hdGgiLCJmbG9vciIsImxvZyIsImNvbnZlcnQiLCJyb3VuZCIsInBvdyIsImZpbGUiLCJmaWxlcyIsImNsb3NlIiwic3RvcFByb3BhZ2F0aW9uIiwidmFsdWUiLCIkZmlsZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCIkZmlsZSIsIm5ld0ZpbGVzIiwiRGF0YVRyYW5zZmVyIiwiQ3VzdG9tUmFuZ2UiLCIkY3VzdG9tUmFuZ2UiLCJjdXN0b21SYW5nZSIsImN1cnNvclByZXNzIiwidG90YWwiLCJzdGVwIiwidHJhbnNmb3JtQ3Vyc29yIiwiYWN0dWFsU3RlcCIsImJhY2tncm91bmRCYXIiLCJwbGFpbkJhciIsImN1cnNvciIsIm51bWJlclN0ZXBzIiwicmF0aW8iLCJldiIsImNsaWNrU3RlcCIsIkN1c3RvbVNlbGVjdCIsIiRjdXN0b21TZWxlY3QiLCJjdXN0b21TZWxlY3QiLCJpc0ZpbHRlcnMiLCJmaWx0ZXJzIiwiaXNPbk1vYmlsZSIsIm1vYmlsZSIsInZpcnR1YWxMYWJlbCIsIkpTT04iLCJwYXJzZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiJHNlbGVjdCIsIiRvcHRpb24iLCJjaG9vc2UiLCIkY29udGFpbmVyIiwiZmlsdGVyIiwidG9nZ2xlIiwiX2NoYW5nZVZhbHVlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkRyb3Bkb3duIiwiJGRyb3Bkb3duIiwiZHJvcGRvd24iLCJzZWxlY3QiLCJsaW5rIiwibG9jYXRpb24iLCJGb3JtVmFsaWRhdGlvbiIsIiRmb3JtIiwiZm9ybSIsIm5vSW5zdGFudCIsIm5vaW5zdGFudCIsIm5vU3VibWl0Iiwibm9zdWJtaXQiLCJmb3JtRXJyb3IiLCJpbnB1dEdyb3VwcyIsIiRpbnB1dEdyb3VwIiwiJGlucHV0IiwidmFsaWRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0VHlwZSIsImdldEF0dHJpYnV0ZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJtaW5MZW5ndGgiLCJtYXhsZW5ndGgiLCJtYXhMZW5ndGgiLCJyZXF1aXJlZG1lc3NhZ2UiLCJyZXF1aXJlZE1lc3NhZ2UiLCJlcnJvcm1pbmxlbmd0aCIsImVycm9yTWluTGVuZ3RoIiwiZXJyb3JtYXhsZW5ndGgiLCJlcnJvck1heExlbmd0aCIsImVycm9ybWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yIiwiY2xlYXJFcnJvciIsIm1hdGNoIiwiZXJyb3IiLCIkZXJyb3IiLCJNb2RhbCIsIiRtb2RhbCIsIm1vZGFsIiwiUmVzZXQiLCJib2R5IiwiVGFicyIsIiR0YWJzIiwidGFicyIsImhlYWRlckl0ZW1zIiwiJGhlYWRlckl0ZW0iLCIkY29udGVudEl0ZW0iLCIkYWNjb3JkaW9ucyIsIiRjYXJvdXNlbHMiLCIkY3VzdG9tRmlsZXMiLCIkY3VzdG9tUmFuZ2VzIiwiJGN1c3RvbVNlbGVjdHMiLCIkZHJvcGRvd25zIiwiJGZvcm1zIiwiJG1vZGFscyIsIiR0YWIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7O0lBS01BLFM7QUFDSixxQkFBWUMsVUFBWixFQUF3QjtBQUFBOztBQUN0QixTQUFLQyxDQUFMLEdBQVMsRUFBVCxDQURzQixDQUNWOztBQUNaLFNBQUtBLENBQUwsQ0FBT0MsU0FBUCxHQUFtQkYsVUFBbkIsQ0FGc0IsQ0FFUTs7QUFFOUIsU0FBS0csUUFBTDs7QUFDQSxTQUFLQyxX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OztBQUVELElBQU13RCxNQUFNLEdBQUdsTixLQUFLLENBQUNDLElBQU4sQ0FBVzJDLFFBQVEsQ0FBQzFDLGdCQUFULENBQTBCLGFBQTFCLENBQVgsQ0FBZjs7QUFDQSw0QkFBb0JnTixNQUFwQiwrQkFBNEI7QUFBdkIsTUFBTWxELEtBQUssZUFBWDtBQUNILE1BQUlELHVEQUFKLENBQW1CQyxLQUFuQjtBQUNEOztBQUVELElBQU1tRCxPQUFPLEdBQUduTixLQUFLLENBQUNDLElBQU4sQ0FBVzJDLFFBQVEsQ0FBQzFDLGdCQUFULENBQTBCLFFBQTFCLENBQVgsQ0FBaEI7O0FBQ0EsNkJBQXFCaU4sT0FBckIsZ0NBQThCO0FBQXpCLE1BQU1qQixNQUFNLGdCQUFaO0FBQ0gsTUFBSUQsOENBQUosQ0FBVUMsTUFBVjtBQUNEOztBQUVELElBQUlFLDhDQUFKO0FBRUEsSUFBTUcsS0FBSyxHQUFHdk0sS0FBSyxDQUFDQyxJQUFOLENBQVcyQyxRQUFRLENBQUMxQyxnQkFBVCxDQUEwQixPQUExQixDQUFYLENBQWQ7O0FBQ0EsMkJBQW1CcU0sS0FBbkIsOEJBQTBCO0FBQXJCLE1BQU1hLElBQUksY0FBVjtBQUNILE1BQUlkLDZDQUFKLENBQVNjLElBQVQ7QUFDRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCIvKioqKioqKioqKlxuICogQWNjb3JkaW9uXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBBY2NvcmRpb24ge1xuICBjb25zdHJ1Y3RvcigkYWNjb3JkaW9uKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5hY2NvcmRpb24gPSAkYWNjb3JkaW9uIC8vIEFkZCBhY2NvcmRpb24gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5hY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB0aGlzLiQuYWNjb3JkaW9uLmRhdGFzZXQubXVsdGlwbGUgLy8gU2V0IGlzIG11bHRpcGxlIGl0ZW0gb3Blbi5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICBpZiAoJGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpdGVtOiAkaXRlbSwgaGVpZ2h0OiBjb250ZW50SGVpZ2h0IH0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgeyBpdGVtLCBoZWlnaHQgfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQnV0dG9uJylcbiAgICAgIGNvbnN0ICRjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB7IGl0ZW0gfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvblxuIiwiLyoqKioqKioqKipcbiAqIENhcm91c2VsXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKCRjYXJvdXNlbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY2Fyb3VzZWwgPSAkY2Fyb3VzZWwgLy8gQWRkIGNhcm91c2VsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5uYXZpZ2F0aW9uID0ge1xuICAgICAgbGVmdDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1sZWZ0JyksXG4gICAgICByaWdodDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1yaWdodCcpXG4gICAgfVxuICAgIHRoaXMuJC5pdGVtcyA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW1zJylcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pc1RvdWNoRGV2aWNlID0gISEoXG4gICAgICAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzXG4gICAgKVxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbm9ybWFsJ1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICB0aGlzLnBhZ2luYXRpb24gPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5wYWdpbmF0aW9uXG4gICAgdGhpcy5kcmFnID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuZHJhZ1xuICAgIHRoaXMuYXV0byA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmF1dG9cbiAgICB0aGlzLndpZHRoID0gdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoXG4gICAgdGhpcy5udW1iZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJylcbiAgICApLmxlbmd0aFxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgJHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJHBhZ2luYXRpb24uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb24nKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVySXRlbXM7IGkrKykge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgICAgICRpdGVtLmRhdGFzZXQuaXRlbSA9IGkgKyAxXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgICRwYWdpbmF0aW9uLmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfVxuICAgICAgdGhpcy4kLmNhcm91c2VsLmFwcGVuZENoaWxkKCRwYWdpbmF0aW9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG8pIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICAgIH0sIHBhcnNlSW50KHRoaXMuYXV0bykpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24ubGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVMZWZ0KClcbiAgICB9KVxuXG4gICAgdGhpcy4kLm5hdmlnYXRpb24ucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICBmb3IgKGNvbnN0ICRidWxsZXQgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICkpIHtcbiAgICAgICRidWxsZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAkYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoJGJ1bGxldC5kYXRhc2V0Lml0ZW0gLSAxKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBwYXJzZUludCgkYnVsbGV0LmRhdGFzZXQuaXRlbSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHJhZykge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaERldmljZSkge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gdHJ1ZVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlID0gMFxuICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYWdJdGVtcyhldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdID4gdGhpcy5hY3R1YWxQb3NpdGlvbikgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPCB0aGlzLmFjdHVhbFBvc2l0aW9uKVxuICAgICAgICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiArIDIwKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwKSB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjAgfHxcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gLSAyMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9kcmFnSXRlbXMoY2xpZW50WCkge1xuICAgIGlmICh0aGlzLnByZXNzSXRlbXMpIHtcbiAgICAgIGlmIChjbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IGNsaWVudFggLSB0aGlzLmFjdHVhbFBvc2l0aW9uXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLiQuaXRlbXMsIDAuMSwgeyB4OiB0aGlzLnRyYW5zbGF0ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlSXRlbSAtIDEpICogLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCArXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdGhpcy5hY3R1YWxQb3NpdGlvbiAtIGNsaWVudFhcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLiQuaXRlbXMsIDAuMSwge1xuICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgICh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0NyZXRhZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gdHJ1ZVxuICAgICAgICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMubnVtYmVySXRlbXMgLSAxKSAqIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlSXRlbSAtIDEpICogLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVMZWZ0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbG9vcCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5udW1iZXJJdGVtcyAtIDEsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgIGNvbnN0ICRsYXN0SXRlbSA9IHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCdcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBkdXBsaWNhdGVMYXN0SXRlbSA9ICRsYXN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcblxuICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlTGFzdEl0ZW0pXG4gICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJyksXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKC0xLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMubnVtYmVySXRlbXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtIDw9IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbG9vcCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoMCwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgY29uc3QgJGZpcnN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVJdGVtcyh4LCBwb3NpdGlvbiA9IG51bGwpIHtcbiAgICBsZXQgdFxuICAgIGNsZWFyVGltZW91dCh0KVxuICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAxcyBlYXNlLWluLW91dCdcbiAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt4ICogLXRoaXMud2lkdGh9cHgpYFxuXG4gICAgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdyaWdodCcgJiZcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcblxuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKSxcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgIHBvc2l0aW9uID09PSAnbGVmdCcgJiZcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMubnVtYmVySXRlbXMgLSAxKSAqXG4gICAgICAgICAgLXRoaXMud2lkdGh9KWBcbiAgICAgIH1cbiAgICB9LCAxMDAwKVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKVxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Omxhc3QtY2hpbGQnKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Om50aC1jaGlsZCgke3RoaXMuYWN0aXZlSXRlbSAtIDF9KWBcbiAgICAgICAgICApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKVxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpudGgtY2hpbGQoJHt0aGlzLmFjdGl2ZUl0ZW0gKyAxfSlgXG4gICAgICAgICAgKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21GaWxlXG4gKiB2MS4wLjBzXG4gKi9cblxuY2xhc3MgQ3VzdG9tRmlsZSB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21GaWxlKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21GaWxlID0gJGN1c3RvbUZpbGUgLy8gQWRkIGN1c3RvbS1zZWxlY3QgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQubGFiZWxcbiAgICB0aGlzLmlzQnV0dG9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25cbiAgICB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgOiAncmlnaHQnXG4gICAgdGhpcy50eXBlID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC50eXBlXG4gICAgICA/IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQudHlwZVxuICAgICAgOiAnZmlsZSdcbiAgICB0aGlzLmlzU2l6ZSA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuc2l6ZVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMuaXNCdXR0b24pIHtcbiAgICAgIHRoaXMuJC5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuaXNCdXR0b25cbiAgICB9XG5cbiAgICB0aGlzLiQuY3VzdG9tRmlsZS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgaWYgKHRoaXMuaXNTaXplKSB7XG4gICAgICB0aGlzLiQuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2NvbnRhaW5lcicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuaXNTaXplXG4gICAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGxhYmVsXG4gICAgdGhpcy4kLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGhpcy4kLmxhYmVsLmlubmVyVGV4dCA9IHRoaXMubGFiZWxcbiAgICB0aGlzLiQubGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2xhYmVsJylcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmxhYmVsKVxuXG4gICAgLy8gQ3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0Lm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJylcbiAgICBpZiAodGhpcy50eXBlID09PSAnZmlsZXMnKSB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsIHRydWUpXG4gICAgZWxzZSBpZiAodGhpcy50eXBlID09PSAnZm9sZGVyJykge1xuICAgICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnd2Via2l0ZGlyZWN0b3J5JywgdHJ1ZSlcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2RpcmVjdG9yeXMnLCB0cnVlKVxuICAgIH1cbiAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuaXNTaXplXG4gICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICBpZiAodGhpcy5pc0J1dHRvbiAmJiB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuaXNTaXplXG4gICAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTaXplKSB7XG4gICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuY29udGFpbmVyKVxuXG4gICAgICAvLyBDcmVhdGUgc2l6ZSBpbmZvXG4gICAgICB0aGlzLiQuc2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgdGhpcy4kLnNpemUuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX3NpemUnKVxuICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gJzAgbWInXG4gICAgICB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuc2l6ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0LmNsaWNrKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2l6ZUNvbnZlcnQgPSBzaXplID0+IHtcbiAgICAgIGNvbnN0IGJ5dGVzID0gc2l6ZVxuICAgICAgY29uc3Qgc2l6ZXMgPSBbJ2J5dGVzJywgJ2tiJywgJ21iJywgJ2diJywgJ3RiJ11cbiAgICAgIGNvbnN0IGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSlcbiAgICAgIGNvbnN0IGNvbnZlcnQgPSBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpXG4gICAgICByZXR1cm4gYCR7Y29udmVydH0gJHtzaXplc1tpXX1gXG4gICAgfVxuXG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZUNsb3NlJylcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJyZ0aW1lczsnXG4gICAgICAgIHRoaXMuJC5jb250YWluZXIuaW5zZXJ0QmVmb3JlKGNsb3NlLCB0aGlzLiQuYnV0dG9uKVxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9IG51bGxcbiAgICAgICAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5sYWJlbFxuICAgICAgICAgIHRoaXMuJC5jb250YWluZXIucmVtb3ZlQ2hpbGQoY2xvc2UpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KGZpbGUuc2l6ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlc1xuXG4gICAgICAgIGNvbnN0ICRmaWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCBzaXplID0gMFxuXG4gICAgICAgIEFycmF5LmZyb20oZmlsZXMpLmZvckVhY2goKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgJGZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICRmaWxlLmlubmVyVGV4dCA9IGZpbGUubmFtZVxuICAgICAgICAgICRmaWxlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19maWxlJylcblxuICAgICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fZmlsZUNsb3NlJylcbiAgICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnJnRpbWVzOydcblxuICAgICAgICAgICRmaWxlLmFwcGVuZENoaWxkKGNsb3NlKVxuICAgICAgICAgICRmaWxlcy5hcHBlbmRDaGlsZCgkZmlsZSlcblxuICAgICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBuZXcgRGF0YVRyYW5zZmVyKClcbiAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgICAgICAgaWYgKGZpbGUgIT09IGZpbGVzW2luZGV4XSkgbmV3RmlsZXMuaXRlbXMuYWRkKGZpbGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiQuaW5wdXQuZmlsZXMgPSBuZXdGaWxlcy5maWxlc1xuICAgICAgICAgICAgJGZpbGVzLnJlbW92ZUNoaWxkKCRmaWxlKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzaXplICs9IGZpbGUuc2l6ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IHNpemVDb252ZXJ0KHNpemUpXG5cbiAgICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQoJGZpbGVzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRmlsZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVJhbmdlXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBDdXN0b21SYW5nZSB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21SYW5nZSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UgPSAkY3VzdG9tUmFuZ2UgLy8gQWRkIGN1c3RvbVJhbmdlIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuY3Vyc29yUHJlc3MgPSBmYWxzZVxuICAgIHRoaXMudG90YWwgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC50b3RhbFxuICAgIHRoaXMuc3RlcCA9IHRoaXMuJC5jdXN0b21SYW5nZS5kYXRhc2V0LnN0ZXBcbiAgICB0aGlzLnRyYW5zZm9ybUN1cnNvciA9IDBcbiAgICB0aGlzLmFjdHVhbFN0ZXAgPSAwXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBDcmVhdGUgaW5wdXRcbiAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuJC5jdXN0b21SYW5nZS5kYXRhc2V0Lm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIC8vIENyZWF0ZSBiYWNrZ3JvdW5kIGJhci5cbiAgICB0aGlzLiQuYmFja2dyb3VuZEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLmJhY2tncm91bmRCYXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19iYXInKVxuICAgIHRoaXMuJC5iYWNrZ3JvdW5kQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyLS1iYWNrZ3JvdW5kJylcblxuICAgIC8vIENyZWF0ZSBwbGFpbiBiYXIuXG4gICAgdGhpcy4kLnBsYWluQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLiQucGxhaW5CYXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19iYXInKVxuICAgIHRoaXMuJC5wbGFpbkJhci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2Jhci0tcGxhaW4nKVxuXG4gICAgLy8gQ3JlYXRlIGN1c3Jvci5cbiAgICB0aGlzLiQuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLiQuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fY3Vyc29yJylcblxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQuYmFja2dyb3VuZEJhcilcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLnBsYWluQmFyKVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQuY3Vyc29yKVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICB0aGlzLiQuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC01MCUpYFxuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuJC5jdXN0b21SYW5nZS5vZmZzZXRXaWR0aFxuICAgIHRoaXMubnVtYmVyU3RlcHMgPSB0aGlzLnRvdGFsIC8gdGhpcy5zdGVwIC8vIG5vbWJyZSBkZSBmb2lzIHBvdXIgYXJyaXZlciBhIHRvdGFsXG4gICAgdGhpcy5yYXRpbyA9IHRoaXMud2lkdGggLyB0aGlzLm51bWJlclN0ZXBzIC8vIHBpeGVsIGRlIGxhcmdldXIgcG91ciAxJSBkdSB0b3RhbFxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5jdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5jdXJzb3JQcmVzcyA9IHRydWVcbiAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC5jbGllbnRYXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBldiA9PiB7XG4gICAgICB0aGlzLmN1cnNvclByZXNzID0gZmFsc2VcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuY3Vyc29yUHJlc3MpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICYmXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCA+PSAodGhpcy5hY3R1YWxTdGVwICsgMSkgKiB0aGlzLnJhdGlvICYmXG4gICAgICAgICAgdGhpcy5hY3R1YWxTdGVwIDwgdGhpcy5udW1iZXJTdGVwc1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnRyYW5zZm9ybUN1cnNvciA9XG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwICsgMSkgKiB0aGlzLnJhdGlvIC0gdGhpcy4kLmN1cnNvci5vZmZzZXRXaWR0aCAvIDJcbiAgICAgICAgICB0aGlzLiQuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy50cmFuc2Zvcm1DdXJzb3J9cHgpYFxuICAgICAgICAgIHRoaXMuJC5wbGFpbkJhci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7KDEgLyB0aGlzLm51bWJlclN0ZXBzKSAqXG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwICsgMSl9KWBcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcCsrXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gJiZcbiAgICAgICAgICBldmVudC5jbGllbnRYIDw9ICh0aGlzLmFjdHVhbFN0ZXAgLSAxKSAqIHRoaXMucmF0aW8gJiZcbiAgICAgICAgICB0aGlzLmFjdHVhbFN0ZXAgPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudHJhbnNmb3JtQ3Vyc29yID1cbiAgICAgICAgICAgICh0aGlzLmFjdHVhbFN0ZXAgLSAxKSAqIHRoaXMucmF0aW8gLSB0aGlzLiQuY3Vyc29yLm9mZnNldFdpZHRoIC8gMlxuICAgICAgICAgIHRoaXMuJC5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zZm9ybUN1cnNvcn1weClgXG4gICAgICAgICAgdGhpcy4kLnBsYWluQmFyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHsoMSAvIHRoaXMubnVtYmVyU3RlcHMpICpcbiAgICAgICAgICAgICh0aGlzLmFjdHVhbFN0ZXAgLSAxKX0pYFxuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC5jbGllbnRYXG4gICAgICAgICAgdGhpcy5hY3R1YWxTdGVwLS1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBsZXQgY2xpY2tTdGVwID0gMFxuICAgICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPD0gdGhpcy5udW1iZXJTdGVwczsgc3RlcCsrKSB7XG4gICAgICAgIGlmIChldmVudC5jbGllbnRYID4gc3RlcCAqIHRoaXMucmF0aW8gLSAyMCkgY2xpY2tTdGVwID0gc3RlcFxuICAgICAgfVxuXG4gICAgICB0aGlzLnRyYW5zZm9ybUN1cnNvciA9XG4gICAgICAgIGNsaWNrU3RlcCAqIHRoaXMucmF0aW8gLSB0aGlzLiQuY3Vyc29yLm9mZnNldFdpZHRoIC8gMlxuICAgICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNmb3JtQ3Vyc29yfXB4KWBcbiAgICAgIHRoaXMuJC5wbGFpbkJhci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7KDEgLyB0aGlzLm51bWJlclN0ZXBzKSAqXG4gICAgICAgIGNsaWNrU3RlcH0pYFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUmFuZ2VcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21TZWxlY3RcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEN1c3RvbVNlbGVjdCB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21TZWxlY3QpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdCA9ICRjdXN0b21TZWxlY3QgLy8gQWRkIGN1c3RvbS1zZWxlY3QgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lm5hbWVcbiAgICB0aGlzLmlzRmlsdGVycyA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5maWx0ZXJzIC8vIFNldCBmaWx0ZXJzIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubW9iaWxlIC8vIFNldCBjdXN0b20gbW9iaWxlIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgYWN0aXZhdGVkIGxhYmVsLlxuICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5pdGVtcykgLy8gQ3JlYXRlIEpTT04gb2JqZWN0IHdpdGggaXRlbXMuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlcykge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICAgIGNvbnN0ICRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgJHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZGVmYXVsdCBzZWxlY3Qgb3B0aW9uLlxuICAgICAgY29uc3QgJG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJylcbiAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmxhYmVsXG4gICAgICAkc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG5cbiAgICAgIC8vIENyZWF0ZSBzZWxlY3Qgb3B0aW9ucy5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLnZhbHVlKVxuICAgICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0ubGFiZWxcbiAgICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkb3B0aW9uKVxuICAgICAgfVxuXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmlubmVySFRNTCA9ICcnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKCRzZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycylcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1maWx0ZXJzJylcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IHdpdGggZWxlbWVudHMuXG4gICAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jb250ZW50JylcblxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAkaXRlbS5kYXRhc2V0LmxhYmVsID0gaXRlbS5sYWJlbFxuICAgICAgICAkaXRlbS5kYXRhc2V0LnZhbHVlID0gaXRlbS52YWx1ZVxuICAgICAgICAkaXRlbS5pbm5lclRleHQgPSBpdGVtLmxhYmVsXG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2l0ZW0nKVxuICAgICAgICAkY29udGVudC5hcHBlbmRDaGlsZCgkaXRlbSlcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jaG9vc2Uuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY2hvb3NlJylcbiAgICAgIGlmICghdGhpcy5pc0ZpbHRlcnMpXG4gICAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJIVE1MID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmxhYmVsXG5cbiAgICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY29udGFpbmVyJylcbiAgICAgICRjb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm5hbWUpXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuY2hvb3NlKVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgICAvLyBDcmVhdGUgaW5wdXQgZm9yIHNlbGVjdCB2YWx1ZS5cbiAgICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3RfX2l0ZW0nKVxuICAgICAgKSAvLyBHZXQgYWxsIGl0ZW1zIGluIGFycmF5LlxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGZpbHRlciBpbnB1dC5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmxhYmVsXG4gICAgICAgIHRoaXMuJC5jaG9vc2UuYXBwZW5kQ2hpbGQodGhpcy4kLmZpbHRlcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykgfHxcbiAgICAgIHRoaXMuaXNPbk1vYmlsZVxuICAgICkge1xuICAgICAgdGhpcy4kLmNob29zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlVmFsdWUoJGl0ZW0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAnJ1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRoaXMudmlydHVhbExhYmVsKVxuICAgICAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICAgICAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgICAgICAgaWYgKCRpdGVtLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuJC5maWx0ZXIudmFsdWUpKVxuICAgICAgICAgICAgICAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgZWxzZSAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuY3VzdG9tU2VsZWN0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuXG4gICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kLmZpbHRlci52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMudmlydHVhbExhYmVsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cblxuICBfY2hhbmdlVmFsdWUoJGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAkaXRlbS5kYXRhc2V0LmxhYmVsXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJUZXh0ID0gJGl0ZW0uZGF0YXNldC5sYWJlbFxuICAgIH1cblxuICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9ICRpdGVtLmRhdGFzZXQudmFsdWVcbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9ICRpdGVtLmRhdGFzZXQubGFiZWxcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdFxuIiwiLyoqKioqKioqKipcbiAqIERyb3Bkb3duXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKCRkcm9wZG93bikge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZHJvcGRvd24gPSAkZHJvcGRvd24gLy8gQWRkIGRyb3Bkb3duIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNPbk1vYmlsZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQubmFtZVxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbGluaycgLy8gU2V0IHR5cGUgb2YgZHJvcGRvd24uXG4gICAgdGhpcy5pdGVtcyA9XG4gICAgICB0aGlzLnR5cGUgPT09ICdsaW5rJyA/IEpTT04ucGFyc2UodGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQuaXRlbXMpIDogbnVsbCAvLyBDcmVhdGUgSlNPTiBvYmplY3Qgd2l0aCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmlzT25Nb2JpbGUgJiZcbiAgICAgIHRoaXMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlc1xuICAgICkge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICAgIHRoaXMuJC5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG4gICAgICB0aGlzLiQuc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG5cbiAgICAgIC8vIENyZWF0ZSBzZWxlY3Qgb3B0aW9ucy5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLmxpbmspXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICB0aGlzLiQuc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5kcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuJC5zZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjb250ZW50JylcbiAgICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pdGVtJylcbiAgICAgICAgKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jb250ZW50JylcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAkaXRlbS5pbm5lclRleHQgPSBpdGVtLmxhYmVsXG4gICAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCdocmVmJywgaXRlbS5saW5rKVxuXG4gICAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2l0ZW0nKVxuICAgICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2Nob29zZScpXG4gICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG4gICAgICB0aGlzLiQuY2hvb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWUpXG5cbiAgICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRhaW5lcicpXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICAgJGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuJC5jaG9vc2UpXG4gICAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9faXRlbScpXG4gICAgICApIC8vIEdldCBhbGwgaXRlbXMgaW4gYXJyYXkuXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHx8XG4gICAgICB0aGlzLmlzT25Nb2JpbGUgfHxcbiAgICAgICghdGhpcy5pc09uTW9iaWxlICYmIHRoaXMudHlwZSA9PT0gJ2NvbnRlbnQnKVxuICAgICkge1xuICAgICAgdGhpcy4kLmNob29zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5kcm9wZG93bi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIXRoaXMuaXNPbk1vYmlsZSAmJlxuICAgICAgdGhpcy50eXBlID09PSAnbGluaycgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5OTFweCknKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICB0aGlzLiQuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy4kLnNlbGVjdC52YWx1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqKioqKioqKipcbiAqIEZvcm1WYWxpZGF0aW9uXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBGb3JtVmFsaWRhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCRmb3JtKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5mb3JtID0gJGZvcm0gLy8gQWRkIGZvcm0gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5ub0luc3RhbnQgPSAhIXRoaXMuJC5mb3JtLmRhdGFzZXQubm9pbnN0YW50XG4gICAgdGhpcy5ub1N1Ym1pdCA9ICEhdGhpcy4kLmZvcm0uZGF0YXNldC5ub3N1Ym1pdFxuICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmlucHV0R3JvdXBzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCAkaW5wdXRHcm91cCBvZiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJylcbiAgICApKSB7XG4gICAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm5vSW5zdGFudCkge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGUoJGlucHV0R3JvdXApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm5vU3VibWl0KSB7XG4gICAgICB0aGlzLiQuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2VcbiAgICAgICAgZm9yIChjb25zdCAkaW5wdXRHcm91cCBvZiBBcnJheS5mcm9tKFxuICAgICAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgICAgICkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUoJGlucHV0R3JvdXApKSB0aGlzLmZvcm1FcnJvciA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1FcnJvcikgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZSgkaW5wdXRHcm91cCkge1xuICAgIGNvbnN0ICRpbnB1dCA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICBjb25zdCB2YWx1ZSA9ICRpbnB1dC52YWx1ZVxuICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuXG4gICAgLy8gcnVsZXNcbiAgICBjb25zdCBydWxlcyA9IHt9XG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWQpXG4gICAgICBydWxlcy5yZXF1aXJlZCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5taW5sZW5ndGgpXG4gICAgICBydWxlcy5taW5MZW5ndGggPSBwYXJzZUludCgkaW5wdXRHcm91cC5kYXRhc2V0Lm1pbmxlbmd0aClcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5tYXhsZW5ndGgpXG4gICAgICBydWxlcy5tYXhMZW5ndGggPSBwYXJzZUludCgkaW5wdXRHcm91cC5kYXRhc2V0Lm1heGxlbmd0aClcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZG1lc3NhZ2UpXG4gICAgICBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgPSAkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkbWVzc2FnZVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWlubGVuZ3RoKVxuICAgICAgcnVsZXMuZXJyb3JNaW5MZW5ndGggPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWlubGVuZ3RoXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtYXhsZW5ndGgpXG4gICAgICBydWxlcy5lcnJvck1heExlbmd0aCA9ICRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtYXhsZW5ndGhcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1lc3NhZ2UpXG4gICAgICBydWxlcy5lcnJvck1lc3NhZ2UgPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWVzc2FnZVxuXG4gICAgaWYgKGlucHV0VHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA8IHJ1bGVzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gcnVsZXMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWF4TGVuZ3RoIHx8ICd0b28gYmlnJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlIDwgcnVsZXMubWluTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWluTGVuZ3RoIHx8ICd0b28gbG93JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1heExlbmd0aCAmJiB2YWx1ZSA+IHJ1bGVzLm1heExlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1heExlbmd0aCB8fCAndG9vIGJpZycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnZW1haWwnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF2YWx1ZS5tYXRjaChcbiAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNZXNzYWdlIHx8ICdub3QgYSB2YWxpZCBlbWFpbCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAndGVsJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhdmFsdWUubWF0Y2goL14oPzooPzpcXCt8MDApMzN8MClcXHMqWzEtOV0oPzpbXFxzLi1dKlxcZHsyfSl7NH0kLylcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1lc3NhZ2UgfHwgJ25vdCBhIHZhbGlkIGVtYWlsJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3IoJGlucHV0R3JvdXApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RXJyb3IoJGlucHV0R3JvdXAsIGVycm9yKSB7XG4gICAgbGV0ICRlcnJvciA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncm91cF9fZXJyb3InKVxuICAgIGlmICgkZXJyb3IpIHtcbiAgICAgICRlcnJvci5pbm5lclRleHQgPSBlcnJvclxuICAgIH0gZWxzZSB7XG4gICAgICAkZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICRlcnJvci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cF9fZXJyb3InKVxuICAgICAgJGVycm9yLmlubmVyVGV4dCA9IGVycm9yXG4gICAgICAkaW5wdXRHcm91cC5hcHBlbmRDaGlsZCgkZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY2xlYXJFcnJvcigkaW5wdXRHcm91cCkge1xuICAgIGNvbnN0ICRlcnJvciA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncm91cF9fZXJyb3InKVxuICAgIGlmICgkZXJyb3IpIHtcbiAgICAgICRpbnB1dEdyb3VwLnJlbW92ZUNoaWxkKCRlcnJvcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRpb25cbiIsIi8qKioqKioqKioqXG4gKiBNb2RhbFxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcigkbW9kYWwpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLm1vZGFsID0gJG1vZGFsIC8vIEFkZCBtb2RhbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5tb2RhbC1idXR0b25bZGF0YS1tb2RhbD1cIiR7dGhpcy4kLm1vZGFsLmRhdGFzZXQubW9kYWx9XCJdYFxuICAgICAgKVxuICAgIClcbiAgICAgIHRoaXMuJC5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1vZGFsLWJ1dHRvbltkYXRhLW1vZGFsPVwiJHt0aGlzLiQubW9kYWwuZGF0YXNldC5tb2RhbH1cIl1gXG4gICAgICApXG4gICAgaWYgKHRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJykpXG4gICAgICB0aGlzLiQuY2xvc2UgPSB0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpXG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLiQubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC0tYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jb250ZW50JykuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuJC5idXR0b24pIHtcbiAgICAgIHRoaXMuJC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJC5jbG9zZSkge1xuICAgICAgdGhpcy4kLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiY2xhc3MgUmVzZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgna2V5Ym9hcmQnKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRcbiIsIi8qKioqKioqKioqXG4gKiBUYWJzXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBUYWJzIHtcbiAgY29uc3RydWN0b3IoJHRhYnMpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLnRhYnMgPSAkdGFicyAvLyBBZGQgbW9kYWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmhlYWRlckl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19oZWFkZXJJdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0ICRoZWFkZXJJdGVtIG9mIHRoaXMuJC5oZWFkZXJJdGVtcykge1xuICAgICAgY29uc3QgJGNvbnRlbnRJdGVtID0gdGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50YWJzX19jb250ZW50SXRlbVtkYXRhLWl0ZW09XCIkeyRoZWFkZXJJdGVtLmRhdGFzZXQuaXRlbX1cIl1gXG4gICAgICApXG4gICAgICAkaGVhZGVySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpKVxuICAgICAgICAgIHRoaXMuJC50YWJzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkaGVhZGVySXRlbS5jbGFzc0xpc3QuYWRkKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkY29udGVudEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vQWNjb3JkaW9uJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnXG5pbXBvcnQgQ3VzdG9tRmlsZSBmcm9tICcuL0N1c3RvbUZpbGUnXG5pbXBvcnQgQ3VzdG9tUmFuZ2UgZnJvbSAnLi9DdXN0b21SYW5nZSdcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnLi9DdXN0b21TZWxlY3QnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bidcbmltcG9ydCBGb3JtVmFsaWRhdGlvbiBmcm9tICcuL0Zvcm1WYWxpZGF0aW9uJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgUmVzZXQgZnJvbSAnLi9SZXNldCdcbmltcG9ydCBUYWJzIGZyb20gJy4vVGFicydcblxuY29uc3QgJGFjY29yZGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24nKSlcbmZvciAoY29uc3QgJGFjY29yZGlvbiBvZiAkYWNjb3JkaW9ucykge1xuICBuZXcgQWNjb3JkaW9uKCRhY2NvcmRpb24pXG59XG5cbmNvbnN0ICRjYXJvdXNlbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbCcpKVxuZm9yIChjb25zdCAkY2Fyb3VzZWwgb2YgJGNhcm91c2Vscykge1xuICBuZXcgQ2Fyb3VzZWwoJGNhcm91c2VsKVxufVxuXG5jb25zdCAkY3VzdG9tRmlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZmlsZScpKVxuZm9yIChjb25zdCAkY3VzdG9tRmlsZSBvZiAkY3VzdG9tRmlsZXMpIHtcbiAgbmV3IEN1c3RvbUZpbGUoJGN1c3RvbUZpbGUpXG59XG5cbmNvbnN0ICRjdXN0b21SYW5nZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFuZ2UnKSlcbmZvciAoY29uc3QgJGN1c3RvbVJhbmdlIG9mICRjdXN0b21SYW5nZXMpIHtcbiAgbmV3IEN1c3RvbVJhbmdlKCRjdXN0b21SYW5nZSlcbn1cblxuY29uc3QgJGN1c3RvbVNlbGVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tc2VsZWN0JykpXG5mb3IgKGNvbnN0ICRjdXN0b21TZWxlY3Qgb2YgJGN1c3RvbVNlbGVjdHMpIHtcbiAgbmV3IEN1c3RvbVNlbGVjdCgkY3VzdG9tU2VsZWN0KVxufVxuXG5jb25zdCAkZHJvcGRvd25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKSlcbmZvciAoY29uc3QgJGRyb3Bkb3duIG9mICRkcm9wZG93bnMpIHtcbiAgbmV3IERyb3Bkb3duKCRkcm9wZG93bilcbn1cblxuY29uc3QgJGZvcm1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsaWRhdGlvbicpKVxuZm9yIChjb25zdCAkZm9ybSBvZiAkZm9ybXMpIHtcbiAgbmV3IEZvcm1WYWxpZGF0aW9uKCRmb3JtKVxufVxuXG5jb25zdCAkbW9kYWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKSlcbmZvciAoY29uc3QgJG1vZGFsIG9mICRtb2RhbHMpIHtcbiAgbmV3IE1vZGFsKCRtb2RhbClcbn1cblxubmV3IFJlc2V0KClcblxuY29uc3QgJHRhYnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpXG5mb3IgKGNvbnN0ICR0YWIgb2YgJHRhYnMpIHtcbiAgbmV3IFRhYnMoJHRhYilcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=