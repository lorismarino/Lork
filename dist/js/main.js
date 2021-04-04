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
      var $createCustomSelect = document.createElement('div');
      $createCustomSelect.classList.add('custom-select');
      this.$.customSelect.parentNode.replaceChild($createCustomSelect, this.$.customSelect);
      this.$.customSelect = $createCustomSelect;
      console.log(this.$.customSelect);

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

if (document.querySelector('.header')) new _Header__WEBPACK_IMPORTED_MODULE_7__["default"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbUZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2pzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2pzL0Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9JbnB1dEdyb3VwLmpzIiwid2VicGFjazovLy8uL2pzL01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL1Jlc2V0LmpzIiwid2VicGFjazovLy8uL2pzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wb2x5ZmlsbHMvQXJyYXkuZnJvbS5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwicHVzaCIsIml0ZW0iLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkNhcm91c2VsIiwiJGNhcm91c2VsIiwiY2Fyb3VzZWwiLCJuYXZpZ2F0aW9uIiwibGVmdCIsInJpZ2h0IiwiaXNUb3VjaERldmljZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwidHlwZSIsImFjdGl2ZUl0ZW0iLCJwYWdpbmF0aW9uIiwiZHJhZyIsImF1dG8iLCJtb2JpbGVOdW1iZXIiLCJ0YWJsZXROdW1iZXIiLCJsYXB0b3BOdW1iZXIiLCJudW1iZXJJdGVtcyIsImxlbmd0aCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJzY3JlZW5OdW1iZXIiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIiRwYWdpbmF0aW9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwic2V0SW50ZXJ2YWwiLCJfbW92ZVJpZ2h0IiwicGFyc2VJbnQiLCJfbW92ZUxlZnQiLCJrZXlDb2RlIiwiJGJ1bGxldCIsIl9tb3ZlSXRlbXMiLCJhY3R1YWxQb3NpdGlvbiIsInRvdWNoZXMiLCJjbGllbnRYIiwicHJlc3NJdGVtcyIsInRyYW5zbGF0ZSIsImRyYWdDcmV0YWVkSXRlbSIsIl9kcmFnSXRlbXMiLCJjaGFuZ2VkVG91Y2hlcyIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIiRsYXN0SXRlbSIsImR1cGxpY2F0ZUxhc3RJdGVtIiwiY2xvbmVOb2RlIiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCJpbnNlcnRCZWZvcmUiLCIkZmlyc3RJdGVtIiwiZHVwbGljYXRlRmlyc3RJdGVtIiwiY29uc29sZSIsImxvZyIsIngiLCJ0IiwiY2xlYXJUaW1lb3V0IiwidHJhbnNpdGlvbiIsIkN1c3RvbUZpbGUiLCIkY3VzdG9tRmlsZSIsImN1c3RvbUZpbGUiLCJsYWJlbCIsImlzQnV0dG9uIiwiYnV0dG9uIiwiaXNCdXR0b25Qb3NpdGlvbiIsImJ1dHRvbnBvcyIsImlzU2l6ZSIsInNpemUiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJjb250YWluZXIiLCJpbnB1dCIsIm5hbWUiLCJkaXNwbGF5IiwiY2xpY2siLCJzaXplQ29udmVydCIsImJ5dGVzIiwic2l6ZXMiLCJNYXRoIiwiZmxvb3IiLCJjb252ZXJ0Iiwicm91bmQiLCJwb3ciLCJmaWxlIiwiZmlsZXMiLCJjbG9zZSIsInN0b3BQcm9wYWdhdGlvbiIsInZhbHVlIiwiJGZpbGVzIiwiZm9yRWFjaCIsImluZGV4IiwiJGZpbGUiLCJuZXdGaWxlcyIsIkRhdGFUcmFuc2ZlciIsIkN1c3RvbVJhbmdlIiwiJGN1c3RvbVJhbmdlIiwiY3VzdG9tUmFuZ2UiLCJjdXJzb3JQcmVzcyIsInRvdGFsIiwic3RlcCIsInRyYW5zZm9ybUN1cnNvciIsImFjdHVhbFN0ZXAiLCJiYWNrZ3JvdW5kQmFyIiwicGxhaW5CYXIiLCJjdXJzb3IiLCJudW1iZXJTdGVwcyIsInJhdGlvIiwiZXYiLCJjbGlja1N0ZXAiLCJDdXN0b21TZWxlY3QiLCIkY3VzdG9tU2VsZWN0IiwiY3VzdG9tU2VsZWN0IiwiaW5pdFBhcmFtcyIsImluaXRpYWxpemUiLCJnZXRBdHRyaWJ1dGUiLCJpc0ZpbHRlcnMiLCJmaWx0ZXJzIiwiaXNPbk1vYmlsZSIsIm1vYmlsZSIsImRlZmF1bHRMYWJlbCIsInZpcnR1YWxMYWJlbCIsIiRjcmVhdGVDdXN0b21TZWxlY3QiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiJHNlbGVjdCIsIiRkZWZhdWx0T3B0aW9uIiwiJG9wdGlvbiIsImNob29zZSIsIiRjb250YWluZXIiLCJmaWx0ZXIiLCJldmVudHMiLCJ0b2dnbGUiLCJjaGFuZ2VWYWx1ZSIsIiRuZXdJdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkRyb3Bkb3duIiwiJGRyb3Bkb3duIiwiZHJvcGRvd24iLCJKU09OIiwicGFyc2UiLCJGb3JtVmFsaWRhdGlvbiIsIiRmb3JtIiwiZm9ybSIsIm5vSW5zdGFudCIsIm5vaW5zdGFudCIsIm5vU3VibWl0Iiwibm9zdWJtaXQiLCJmb3JtRXJyb3IiLCJpbnB1dEdyb3VwcyIsIiRpbnB1dEdyb3VwIiwiJGlucHV0IiwidmFsaWRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0VHlwZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJtaW5MZW5ndGgiLCJtYXhsZW5ndGgiLCJtYXhMZW5ndGgiLCJyZXF1aXJlZG1lc3NhZ2UiLCJyZXF1aXJlZE1lc3NhZ2UiLCJlcnJvcm1pbmxlbmd0aCIsImVycm9yTWluTGVuZ3RoIiwiZXJyb3JtYXhsZW5ndGgiLCJlcnJvck1heExlbmd0aCIsImVycm9ybWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yIiwiY2xlYXJFcnJvciIsIm1hdGNoIiwiZXJyb3IiLCIkZXJyb3IiLCJIZWFkZXIiLCJoZWFkZXIiLCJvcGVuIiwic3ViIiwiSW5wdXRHcm91cCIsImlucHV0R3JvdXAiLCJjb250ZW50IiwiTW9kYWwiLCIkbW9kYWwiLCJtb2RhbCIsIlJlc2V0IiwidGVzdCIsImtleSIsImJvZHkiLCJUYWJzIiwiJHRhYnMiLCJ0YWJzIiwiaGVhZGVySXRlbXMiLCIkaGVhZGVySXRlbSIsIiRjb250ZW50SXRlbSIsIiRhY2NvcmRpb25zIiwiJGNhcm91c2VscyIsIiRjdXN0b21GaWxlcyIsIiRjdXN0b21SYW5nZXMiLCIkY3VzdG9tU2VsZWN0cyIsIiRkcm9wZG93bnMiLCIkaW5wdXRHcm91cHMiLCIkZm9ybXMiLCIkbW9kYWxzIiwiJHRhYiIsInRvU3RyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJpc0NhbGxhYmxlIiwiZm4iLCJjYWxsIiwidG9JbnRlZ2VyIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJpc0Zpbml0ZSIsImFicyIsIm1heFNhZmVJbnRlZ2VyIiwidG9MZW5ndGgiLCJsZW4iLCJtaW4iLCJtYXgiLCJhcnJheUxpa2UiLCJDIiwiVHlwZUVycm9yIiwibWFwRm4iLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJUIiwiQSIsImsiLCJrVmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7O0lBS01BLFM7QUFDSixxQkFBWUMsVUFBWixFQUF3QjtBQUFBOztBQUN0QixTQUFLQyxDQUFMLEdBQVMsRUFBVCxDQURzQixDQUNWOztBQUNaLFNBQUtBLENBQUwsQ0FBT0MsU0FBUCxHQUFtQkYsVUFBbkIsQ0FGc0IsQ0FFUTs7QUFFOUIsU0FBS0csUUFBTDs7QUFDQSxTQUFLQyxXQUFMOztBQUNBLFNBQUtDLFdBQUw7QUFDRDtBQUVEOzs7Ozs7OytCQUdXO0FBQ1QsV0FBS0osQ0FBTCxDQUFPSyxLQUFQLEdBQWVDLEtBQUssQ0FBQ0MsSUFBTixDQUNiLEtBQUtQLENBQUwsQ0FBT0MsU0FBUCxDQUFpQk8sZ0JBQWpCLENBQWtDLGtCQUFsQyxDQURhLENBQWY7QUFHRDtBQUVEOzs7Ozs7a0NBR2M7QUFDWixXQUFLSCxLQUFMLEdBQWEsRUFBYjtBQUNBLFdBQUtJLFVBQUwsR0FBa0IsS0FBS1QsQ0FBTCxDQUFPQyxTQUFQLENBQWlCUyxPQUFqQixDQUF5QkMsUUFBM0MsQ0FGWSxDQUV3QztBQUNyRDtBQUVEOzs7Ozs7a0NBR2M7QUFBQSxpREFDUSxLQUFLWCxDQUFMLENBQU9LLEtBRGY7QUFBQTs7QUFBQTtBQUNaLDREQUFrQztBQUFBLGNBQXZCTyxLQUF1Qjs7QUFDaEMsY0FBSUEsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxRQUFoQixDQUF5Qix1QkFBekIsQ0FBSixFQUF1RDtBQUNyRCxnQkFBTUMsUUFBUSxHQUFHSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0IsMkJBQXBCLENBQWpCO0FBQ0EsZ0JBQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDRyxZQUEvQjtBQUNBSCxvQkFBUSxDQUFDSSxLQUFULENBQWVDLE1BQWYsYUFBMkJILGFBQTNCO0FBQ0EsaUJBQUtaLEtBQUwsQ0FBV2dCLElBQVgsQ0FBZ0I7QUFBRUMsa0JBQUksRUFBRVYsS0FBUjtBQUFlUSxvQkFBTSxFQUFFSDtBQUF2QixhQUFoQjtBQUNELFdBTEQsTUFLTztBQUNMLGdCQUFNRixTQUFRLEdBQUdILEtBQUssQ0FBQ0ksYUFBTixDQUFvQiwyQkFBcEIsQ0FBakI7O0FBQ0EsZ0JBQU1DLGNBQWEsR0FBR0YsU0FBUSxDQUFDRyxZQUEvQjtBQUNBSCxxQkFBUSxDQUFDSSxLQUFULENBQWVDLE1BQWYsR0FBd0IsQ0FBeEI7QUFDQSxpQkFBS2YsS0FBTCxDQUFXZ0IsSUFBWCxDQUFnQjtBQUFFQyxrQkFBSSxFQUFFVixLQUFSO0FBQWVRLG9CQUFNLEVBQUVIO0FBQXZCLGFBQWhCO0FBQ0Q7QUFDRjtBQWJXO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY1osV0FBS00sT0FBTDtBQUNEOzs7OEJBRVM7QUFBQTs7QUFBQSxrREFDdUIsS0FBS2xCLEtBRDVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDS2lCLElBREwsZ0JBQ0tBLElBREw7QUFBQSxjQUNXRixNQURYLGdCQUNXQSxNQURYO0FBRU4sY0FBTUksT0FBTyxHQUFHRixJQUFJLENBQUNOLGFBQUwsQ0FBbUIsd0JBQW5CLENBQWhCO0FBQ0EsY0FBTUQsUUFBUSxHQUFHTyxJQUFJLENBQUNOLGFBQUwsQ0FBbUIsMkJBQW5CLENBQWpCO0FBQ0FRLGlCQUFPLENBQUNDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUFDLEtBQUssRUFBSTtBQUN6QyxnQkFBSSxDQUFDLEtBQUksQ0FBQ2pCLFVBQVYsRUFBc0I7QUFBQSwwREFDRyxLQUFJLENBQUNKLEtBRFI7QUFBQTs7QUFBQTtBQUNwQix1RUFBbUM7QUFBQSxzQkFBdEJpQixLQUFzQixnQkFBdEJBLElBQXNCOztBQUNqQyxzQkFBSSxDQUFDQSxLQUFJLENBQUNSLFFBQUwsQ0FBY1ksS0FBSyxDQUFDQyxNQUFwQixDQUFMLEVBQWtDO0FBQ2hDLHdCQUFJTCxLQUFJLENBQUNULFNBQUwsQ0FBZUMsUUFBZixDQUF3Qix1QkFBeEIsQ0FBSixFQUFzRDtBQUNwRFEsMkJBQUksQ0FBQ04sYUFBTCxDQUFtQiwyQkFBbkIsRUFBZ0RHLEtBQWhELENBQXNEQyxNQUF0RCxHQUErRCxDQUEvRDs7QUFDQUUsMkJBQUksQ0FBQ1QsU0FBTCxDQUFlZSxNQUFmLENBQXNCLHVCQUF0QjtBQUNEO0FBQ0Y7QUFDRjtBQVJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU3JCOztBQUVELGdCQUFJTixJQUFJLENBQUNULFNBQUwsQ0FBZUMsUUFBZixDQUF3Qix1QkFBeEIsQ0FBSixFQUFzRDtBQUNwREMsc0JBQVEsQ0FBQ0ksS0FBVCxDQUFlQyxNQUFmLEdBQXdCLENBQXhCO0FBQ0FFLGtCQUFJLENBQUNULFNBQUwsQ0FBZWUsTUFBZixDQUFzQix1QkFBdEI7QUFDRCxhQUhELE1BR087QUFDTGIsc0JBQVEsQ0FBQ0ksS0FBVCxDQUFlQyxNQUFmLGFBQTJCQSxNQUEzQjtBQUNBRSxrQkFBSSxDQUFDVCxTQUFMLENBQWVnQixHQUFmLENBQW1CLHVCQUFuQjtBQUNEO0FBQ0YsV0FuQkQ7QUFKTTs7QUFDUiwrREFBMkM7QUFBQTtBQXVCMUM7QUF4Qk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlCVDs7Ozs7O0FBR1kvQix3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBOzs7O0lBS01nQyxRO0FBQ0osb0JBQVlDLFNBQVosRUFBdUI7QUFBQTs7QUFDckIsU0FBSy9CLENBQUwsR0FBUyxFQUFULENBRHFCLENBQ1Q7O0FBQ1osU0FBS0EsQ0FBTCxDQUFPZ0MsUUFBUCxHQUFrQkQsU0FBbEIsQ0FGcUIsQ0FFTzs7QUFFNUIsU0FBSzdCLFFBQUw7O0FBQ0EsU0FBS0MsV0FBTDs7QUFDQSxTQUFLQyxXQUFMO0FBQ0Q7QUFFRDs7Ozs7OzsrQkFHVztBQUNULFdBQUtKLENBQUwsQ0FBT2lDLFVBQVAsR0FBb0I7QUFDbEJDLFlBQUksRUFBRSxLQUFLbEMsQ0FBTCxDQUFPZ0MsUUFBUCxDQUFnQmhCLGFBQWhCLENBQThCLHlCQUE5QixDQURZO0FBRWxCbUIsYUFBSyxFQUFFLEtBQUtuQyxDQUFMLENBQU9nQyxRQUFQLENBQWdCaEIsYUFBaEIsQ0FBOEIsMEJBQTlCO0FBRlcsT0FBcEI7QUFJQSxXQUFLaEIsQ0FBTCxDQUFPSyxLQUFQLEdBQWUsS0FBS0wsQ0FBTCxDQUFPZ0MsUUFBUCxDQUFnQmhCLGFBQWhCLENBQThCLGtCQUE5QixDQUFmO0FBQ0Q7QUFFRDs7Ozs7O2tDQUdjO0FBQ1osV0FBS29CLGFBQUwsR0FBcUIsQ0FBQyxFQUNwQixrQkFBa0JDLE1BQWxCLElBQTRCQyxTQUFTLENBQUNDLGNBRGxCLENBQXRCO0FBR0EsV0FBS0MsSUFBTCxHQUFZLEtBQUt4QyxDQUFMLENBQU9nQyxRQUFQLENBQWdCdEIsT0FBaEIsQ0FBd0I4QixJQUF4QixHQUNSLEtBQUt4QyxDQUFMLENBQU9nQyxRQUFQLENBQWdCdEIsT0FBaEIsQ0FBd0I4QixJQURoQixHQUVSLFFBRko7QUFHQSxXQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixLQUFLMUMsQ0FBTCxDQUFPZ0MsUUFBUCxDQUFnQnRCLE9BQWhCLENBQXdCZ0MsVUFBMUM7QUFDQSxXQUFLQyxJQUFMLEdBQVksS0FBSzNDLENBQUwsQ0FBT2dDLFFBQVAsQ0FBZ0J0QixPQUFoQixDQUF3QmlDLElBQXBDO0FBQ0EsV0FBS0MsSUFBTCxHQUFZLEtBQUs1QyxDQUFMLENBQU9nQyxRQUFQLENBQWdCdEIsT0FBaEIsQ0FBd0JrQyxJQUFwQztBQUNBLFdBQUtDLFlBQUwsR0FBb0IsS0FBSyxLQUF6QjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsS0FBSyxLQUF6QjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsS0FBSyxLQUF6QjtBQUNBLFdBQUtDLFdBQUwsR0FBbUIxQyxLQUFLLENBQUNDLElBQU4sQ0FDakIsS0FBS1AsQ0FBTCxDQUFPZ0MsUUFBUCxDQUFnQnhCLGdCQUFoQixDQUFpQyxpQkFBakMsQ0FEaUIsRUFFakJ5QyxNQUZGOztBQUlBLFVBQUksS0FBS1QsSUFBTCxLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCLGFBQUtVLEtBQUwsR0FBYSxLQUFLbEQsQ0FBTCxDQUFPZ0MsUUFBUCxDQUFnQm1CLFdBQTdCO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtGLEtBQUwsR0FBYSxLQUFLbEQsQ0FBTCxDQUFPZ0MsUUFBUCxDQUFnQmhCLGFBQWhCLENBQThCLGlCQUE5QixFQUFpRG1DLFdBQTlEOztBQUNBLFlBQUlkLE1BQU0sQ0FBQ2dCLFVBQVAsQ0FBa0Isb0JBQWxCLEVBQXdDQyxPQUE1QyxFQUFxRDtBQUNuRCxlQUFLRixZQUFMLEdBQW9CLEtBQUtMLFlBQXpCO0FBQ0QsU0FGRCxNQUVPLElBQUlWLE1BQU0sQ0FBQ2dCLFVBQVAsQ0FBa0Isb0JBQWxCLEVBQXdDQyxPQUE1QyxFQUFxRDtBQUMxRCxlQUFLRixZQUFMLEdBQW9CLEtBQUtOLFlBQXpCO0FBQ0QsU0FGTSxNQUVBO0FBQ0wsZUFBS00sWUFBTCxHQUFvQixLQUFLUCxZQUF6QjtBQUNEO0FBQ0Y7QUFDRjtBQUVEOzs7Ozs7a0NBR2M7QUFBQTs7QUFDWixVQUFJLEtBQUtILFVBQVQsRUFBcUI7QUFDbkIsWUFBTWEsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQUYsbUJBQVcsQ0FBQzFDLFNBQVosQ0FBc0JnQixHQUF0QixDQUEwQixzQkFBMUI7O0FBRUEsYUFBSyxJQUFJNkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLVixXQUF6QixFQUFzQ1UsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxjQUFNOUMsS0FBSyxHQUFHNEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQTdDLGVBQUssQ0FBQytDLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsUUFBM0I7QUFDQS9DLGVBQUssQ0FBQ0MsU0FBTixDQUFnQmdCLEdBQWhCLENBQW9CLDRCQUFwQjtBQUNBakIsZUFBSyxDQUFDRixPQUFOLENBQWNZLElBQWQsR0FBcUJvQyxDQUFDLEdBQUcsQ0FBekI7O0FBRUEsY0FBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNYOUMsaUJBQUssQ0FBQ0MsU0FBTixDQUFnQmdCLEdBQWhCLENBQW9CLG9DQUFwQjtBQUNEOztBQUVEMEIscUJBQVcsQ0FBQ0ssV0FBWixDQUF3QmhELEtBQXhCO0FBQ0Q7O0FBQ0QsYUFBS1osQ0FBTCxDQUFPZ0MsUUFBUCxDQUFnQjRCLFdBQWhCLENBQTRCTCxXQUE1QjtBQUNEOztBQUVELFVBQUksS0FBS1gsSUFBVCxFQUFlO0FBQ2JpQixtQkFBVyxDQUFDLFlBQU07QUFDaEIsZUFBSSxDQUFDQyxVQUFMO0FBQ0QsU0FGVSxFQUVSQyxRQUFRLENBQUMsS0FBS25CLElBQU4sQ0FGQSxDQUFYO0FBR0Q7O0FBRUQsV0FBS3JCLE9BQUw7QUFDRDs7OzhCQUVTO0FBQUE7O0FBQ1IsV0FBS3ZCLENBQUwsQ0FBT2lDLFVBQVAsQ0FBa0JDLElBQWxCLENBQXVCVCxnQkFBdkIsQ0FBd0MsT0FBeEMsRUFBaUQsWUFBTTtBQUNyRCxjQUFJLENBQUN1QyxTQUFMO0FBQ0QsT0FGRDtBQUlBLFdBQUtoRSxDQUFMLENBQU9pQyxVQUFQLENBQWtCRSxLQUFsQixDQUF3QlYsZ0JBQXhCLENBQXlDLE9BQXpDLEVBQWtELFlBQU07QUFDdEQsY0FBSSxDQUFDcUMsVUFBTDtBQUNELE9BRkQ7QUFJQSxXQUFLOUQsQ0FBTCxDQUFPZ0MsUUFBUCxDQUFnQlAsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQUFDLEtBQUssRUFBSTtBQUNqRCxZQUFJQSxLQUFLLENBQUN1QyxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCLE1BQUksQ0FBQ0QsU0FBTCxHQUExQixLQUNLLElBQUl0QyxLQUFLLENBQUN1QyxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCLE1BQUksQ0FBQ0gsVUFBTDtBQUNoQyxPQUhEOztBQVRRO0FBY0gsWUFBTUksT0FBTyxrQkFBYjtBQUdIQSxlQUFPLENBQUN6QyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3RDLGdCQUFJLENBQUN6QixDQUFMLENBQU9nQyxRQUFQLENBQ0doQixhQURILENBQ2lCLHFDQURqQixFQUVHSCxTQUZILENBRWFlLE1BRmIsQ0FFb0Isb0NBRnBCOztBQUdBc0MsaUJBQU8sQ0FBQ3JELFNBQVIsQ0FBa0JnQixHQUFsQixDQUFzQixvQ0FBdEI7O0FBQ0EsZ0JBQUksQ0FBQ3NDLFVBQUwsQ0FBZ0JELE9BQU8sQ0FBQ3hELE9BQVIsQ0FBZ0JZLElBQWhCLEdBQXVCLENBQXZDOztBQUNBLGdCQUFJLENBQUNtQixVQUFMLEdBQWtCc0IsUUFBUSxDQUFDRyxPQUFPLENBQUN4RCxPQUFSLENBQWdCWSxJQUFqQixDQUExQjtBQUNELFNBUEQ7QUFqQk07O0FBY1IscUNBQXNCaEIsS0FBSyxDQUFDQyxJQUFOLENBQ3BCLEtBQUtQLENBQUwsQ0FBT2dDLFFBQVAsQ0FBZ0J4QixnQkFBaEIsQ0FBaUMsNkJBQWpDLENBRG9CLENBQXRCLGlDQUVHO0FBQUE7QUFTRjs7QUFFRCxVQUFJLEtBQUttQyxJQUFULEVBQWU7QUFDYixZQUFJLEtBQUtQLGFBQVQsRUFBd0I7QUFDdEIsZUFBS3BDLENBQUwsQ0FBT2dDLFFBQVAsQ0FBZ0JQLGdCQUFoQixDQUFpQyxZQUFqQyxFQUErQyxVQUFBQyxLQUFLLEVBQUk7QUFDdEQsa0JBQUksQ0FBQzBDLGNBQUwsR0FBc0IxQyxLQUFLLENBQUMyQyxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsT0FBdkM7QUFDQSxrQkFBSSxDQUFDQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Esa0JBQUksQ0FBQ0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLGtCQUFJLENBQUNDLGVBQUwsR0FBdUIsS0FBdkI7QUFDRCxXQUxEO0FBT0EsZUFBS3pFLENBQUwsQ0FBT2dDLFFBQVAsQ0FBZ0JQLGdCQUFoQixDQUFpQyxXQUFqQyxFQUE4QyxVQUFBQyxLQUFLLEVBQUk7QUFDckQsa0JBQUksQ0FBQ2dELFVBQUwsQ0FBZ0JoRCxLQUFLLENBQUNpRCxjQUFOLENBQXFCLENBQXJCLEVBQXdCTCxPQUF4QztBQUNELFdBRkQ7QUFJQWQsa0JBQVEsQ0FBQy9CLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLFVBQUFDLEtBQUssRUFBSTtBQUM3Q2tELHNCQUFVLENBQUMsWUFBTTtBQUNmLG9CQUFJLENBQUNMLFVBQUwsR0FBa0IsS0FBbEI7QUFFQSxrQkFBSTdDLEtBQUssQ0FBQ2lELGNBQU4sQ0FBcUIsQ0FBckIsSUFBMEIsTUFBSSxDQUFDUCxjQUFuQyxFQUFtRCxNQUFJLENBQUNKLFNBQUwsR0FBbkQsS0FDSyxJQUFJdEMsS0FBSyxDQUFDaUQsY0FBTixDQUFxQixDQUFyQixJQUEwQixNQUFJLENBQUNQLGNBQW5DLEVBQ0gsTUFBSSxDQUFDTixVQUFMOztBQUVGLGtCQUNFLE1BQUksQ0FBQ3RCLElBQUwsS0FBYyxVQUFkLElBQ0EsTUFBSSxDQUFDQyxVQUFMLEtBQW9CLE1BQUksQ0FBQ08sV0FEekIsSUFFQTFDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLE1BQUksQ0FBQ1AsQ0FBTCxDQUFPSyxLQUFQLENBQWFHLGdCQUFiLENBQThCLGlCQUE5QixDQUFYLEVBQ0d5QyxNQURILEdBQ1ksTUFBSSxDQUFDRCxXQUpuQixFQUtFO0FBQ0Esc0JBQUksQ0FBQ2hELENBQUwsQ0FBT0ssS0FBUCxDQUFhd0UsV0FBYixDQUNFLE1BQUksQ0FBQzdFLENBQUwsQ0FBT0ssS0FBUCxDQUFhVyxhQUFiLENBQTJCLGlCQUEzQixDQURGO0FBR0QsZUFURCxNQVNPLElBQ0wsTUFBSSxDQUFDd0IsSUFBTCxLQUFjLFVBQWQsSUFDQSxNQUFJLENBQUNDLFVBQUwsS0FBb0IsQ0FEcEIsSUFFQW5DLEtBQUssQ0FBQ0MsSUFBTixDQUFXLE1BQUksQ0FBQ1AsQ0FBTCxDQUFPSyxLQUFQLENBQWFHLGdCQUFiLENBQThCLGlCQUE5QixDQUFYLEVBQ0d5QyxNQURILEdBQ1ksTUFBSSxDQUFDRCxXQUpaLEVBS0w7QUFDQSxzQkFBSSxDQUFDaEQsQ0FBTCxDQUFPSyxLQUFQLENBQWF3RSxXQUFiLENBQ0UsTUFBSSxDQUFDN0UsQ0FBTCxDQUFPSyxLQUFQLENBQWFXLGFBQWIsQ0FBMkIsNEJBQTNCLENBREY7QUFHRDtBQUNGLGFBMUJTLEVBMEJQLEdBMUJPLENBQVY7QUEyQkQsV0E1QkQ7QUE2QkQsU0F6Q0QsTUF5Q087QUFDTCxlQUFLaEIsQ0FBTCxDQUFPSyxLQUFQLENBQWFvQixnQkFBYixDQUE4QixXQUE5QixFQUEyQyxVQUFBQyxLQUFLLEVBQUk7QUFDbEQsa0JBQUksQ0FBQzBDLGNBQUwsR0FBc0IxQyxLQUFLLENBQUM0QyxPQUE1QjtBQUNBLGtCQUFJLENBQUNDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxrQkFBSSxDQUFDQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0Esa0JBQUksQ0FBQ0MsZUFBTCxHQUF1QixLQUF2QjtBQUNELFdBTEQ7QUFPQSxlQUFLekUsQ0FBTCxDQUFPSyxLQUFQLENBQWFvQixnQkFBYixDQUE4QixXQUE5QixFQUEyQyxVQUFBQyxLQUFLLEVBQUk7QUFDbEQsa0JBQUksQ0FBQ2dELFVBQUwsQ0FBZ0JoRCxLQUFLLENBQUM0QyxPQUF0QjtBQUNELFdBRkQ7QUFJQWQsa0JBQVEsQ0FBQy9CLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUFDLEtBQUssRUFBSTtBQUM1QyxrQkFBSSxDQUFDMUIsQ0FBTCxDQUFPSyxLQUFQLENBQWFRLFNBQWIsQ0FBdUJlLE1BQXZCLENBQThCLHVCQUE5Qjs7QUFDQWdELHNCQUFVLENBQUMsWUFBTTtBQUNmLG9CQUFJLENBQUNMLFVBQUwsR0FBa0IsS0FBbEI7QUFFQSxrQkFBSTdDLEtBQUssQ0FBQzRDLE9BQU4sR0FBZ0IsTUFBSSxDQUFDRixjQUFMLEdBQXNCLEVBQTFDLEVBQThDLE1BQUksQ0FBQ0osU0FBTCxHQUE5QyxLQUNLLElBQUl0QyxLQUFLLENBQUM0QyxPQUFOLEdBQWdCLE1BQUksQ0FBQ0YsY0FBTCxHQUFzQixFQUExQyxFQUE4QyxNQUFJLENBQUNOLFVBQUw7O0FBRW5ELGtCQUNFcEMsS0FBSyxDQUFDNEMsT0FBTixHQUFnQixNQUFJLENBQUNGLGNBQUwsR0FBc0IsRUFBdEMsSUFDQTFDLEtBQUssQ0FBQzRDLE9BQU4sR0FBZ0IsTUFBSSxDQUFDRixjQUFMLEdBQXNCLEVBRnhDLEVBR0U7QUFDQSxvQkFDRSxNQUFJLENBQUM1QixJQUFMLEtBQWMsVUFBZCxJQUNBLE1BQUksQ0FBQ0MsVUFBTCxLQUFvQixNQUFJLENBQUNPLFdBRHpCLElBRUExQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxNQUFJLENBQUNQLENBQUwsQ0FBT0ssS0FBUCxDQUFhRyxnQkFBYixDQUE4QixpQkFBOUIsQ0FBWCxFQUNHeUMsTUFESCxHQUNZLE1BQUksQ0FBQ0QsV0FKbkIsRUFLRTtBQUNBLHdCQUFJLENBQUNoRCxDQUFMLENBQU9LLEtBQVAsQ0FBYXdFLFdBQWIsQ0FDRSxNQUFJLENBQUM3RSxDQUFMLENBQU9LLEtBQVAsQ0FBYVcsYUFBYixDQUEyQixpQkFBM0IsQ0FERjtBQUdELGlCQVRELE1BU08sSUFDTCxNQUFJLENBQUN3QixJQUFMLEtBQWMsVUFBZCxJQUNBLE1BQUksQ0FBQ0MsVUFBTCxLQUFvQixDQURwQixJQUVBbkMsS0FBSyxDQUFDQyxJQUFOLENBQVcsTUFBSSxDQUFDUCxDQUFMLENBQU9LLEtBQVAsQ0FBYUcsZ0JBQWIsQ0FBOEIsaUJBQTlCLENBQVgsRUFDR3lDLE1BREgsR0FDWSxNQUFJLENBQUNELFdBSlosRUFLTDtBQUNBLHdCQUFJLENBQUNoRCxDQUFMLENBQU9LLEtBQVAsQ0FBYXdFLFdBQWIsQ0FDRSxNQUFJLENBQUM3RSxDQUFMLENBQU9LLEtBQVAsQ0FBYVcsYUFBYixDQUEyQiw0QkFBM0IsQ0FERjtBQUdEO0FBQ0Y7QUFDRixhQTlCUyxFQThCUCxHQTlCTyxDQUFWO0FBK0JELFdBakNEO0FBa0NEO0FBQ0Y7QUFDRjs7OytCQUVVc0QsTyxFQUFTO0FBQ2xCLFdBQUt0RSxDQUFMLENBQU9LLEtBQVAsQ0FBYVEsU0FBYixDQUF1QmdCLEdBQXZCLENBQTJCLHVCQUEzQjs7QUFDQSxVQUFJLEtBQUswQyxVQUFULEVBQXFCO0FBQ25CLFlBQUlELE9BQU8sR0FBRyxLQUFLRixjQUFuQixFQUFtQztBQUNqQyxlQUFLSSxTQUFMLEdBQWlCRixPQUFPLEdBQUcsS0FBS0YsY0FBaEM7O0FBRUEsY0FBSSxLQUFLNUIsSUFBTCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCLGdCQUFJLEtBQUtDLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDekIsa0JBQUksQ0FBQyxLQUFLZ0MsZUFBVixFQUEyQjtBQUN6QixvQkFBTUssU0FBUyxHQUFHLEtBQUs5RSxDQUFMLENBQU9nQyxRQUFQLENBQWdCaEIsYUFBaEIsQ0FDaEIsNEJBRGdCLENBQWxCO0FBR0Esb0JBQU0rRCxpQkFBaUIsR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CLElBQXBCLENBQTFCO0FBQ0FELGlDQUFpQixDQUFDNUQsS0FBbEIsQ0FBd0I4RCxTQUF4QixHQUFvQyxtQkFBcEM7QUFDQUYsaUNBQWlCLENBQUM1RCxLQUFsQixDQUF3QitELFFBQXhCLEdBQW1DLFVBQW5DO0FBQ0EscUJBQUtsRixDQUFMLENBQU9LLEtBQVAsQ0FBYThFLFlBQWIsQ0FDRUosaUJBREYsRUFFRSxLQUFLL0UsQ0FBTCxDQUFPSyxLQUFQLENBQWFXLGFBQWIsQ0FBMkIsaUJBQTNCLENBRkY7QUFLQSxxQkFBS3lELGVBQUwsR0FBdUIsSUFBdkI7QUFDRDs7QUFDRCxtQkFBS3pFLENBQUwsQ0FBT0ssS0FBUCxDQUFhYyxLQUFiLENBQW1COEQsU0FBbkIsd0JBQTZDLEtBQUtULFNBQWxEO0FBQ0Q7QUFDRixXQWxCRCxNQWtCTztBQUNMLGdCQUFJLEtBQUsvQixVQUFMLEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLG1CQUFLekMsQ0FBTCxDQUFPSyxLQUFQLENBQWFjLEtBQWIsQ0FBbUI4RCxTQUFuQix3QkFBNkMsQ0FBQyxLQUFLeEMsVUFBTCxHQUFrQixDQUFuQixJQUMzQyxDQUFDLEtBQUt6QyxDQUFMLENBQU9nQyxRQUFQLENBQWdCbUIsV0FEMEIsR0FFM0MsS0FBS3FCLFNBRlA7QUFHRDtBQUNGO0FBQ0YsU0E1QkQsTUE0Qk8sSUFBSUYsT0FBTyxHQUFHLEtBQUtGLGNBQW5CLEVBQW1DO0FBQ3hDLGVBQUtJLFNBQUwsR0FBaUIsS0FBS0osY0FBTCxHQUFzQkUsT0FBdkM7O0FBRUEsY0FBSSxLQUFLOUIsSUFBTCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCLGdCQUFJLEtBQUtDLFVBQUwsR0FBa0IsS0FBS08sV0FBM0IsRUFBd0M7QUFDdEMsbUJBQUtoRCxDQUFMLENBQU9LLEtBQVAsQ0FBYWMsS0FBYixDQUFtQjhELFNBQW5CLHdCQUE2QyxDQUFDLEtBQUt4QyxVQUFMLEdBQWtCLENBQW5CLElBQzNDLENBQUMsS0FBS3pDLENBQUwsQ0FBT2dDLFFBQVAsQ0FBZ0JtQixXQUQwQixHQUUzQyxLQUFLcUIsU0FGUDtBQUdELGFBSkQsTUFJTyxJQUFJLEtBQUsvQixVQUFMLEtBQW9CLEtBQUtPLFdBQTdCLEVBQTBDO0FBQy9DLGtCQUFJLENBQUMsS0FBS3lCLGVBQVYsRUFBMkI7QUFDekIscUJBQUtBLGVBQUwsR0FBdUIsSUFBdkI7QUFDQSxvQkFBTVcsVUFBVSxHQUFHLEtBQUtwRixDQUFMLENBQU9nQyxRQUFQLENBQWdCaEIsYUFBaEIsQ0FDakIsaUJBRGlCLENBQW5CO0FBR0Esb0JBQU1xRSxrQkFBa0IsR0FBR0QsVUFBVSxDQUFDSixTQUFYLENBQXFCLElBQXJCLENBQTNCO0FBQ0EscUJBQUtoRixDQUFMLENBQU9LLEtBQVAsQ0FBYXVELFdBQWIsQ0FBeUJ5QixrQkFBekI7QUFDRDs7QUFDRCxtQkFBS3JGLENBQUwsQ0FBT0ssS0FBUCxDQUFhYyxLQUFiLENBQW1COEQsU0FBbkIsd0JBQTZDLENBQUMsS0FBS2pDLFdBQUwsR0FDNUMsQ0FEMkMsSUFFM0MsQ0FBQyxLQUFLaEQsQ0FBTCxDQUFPZ0MsUUFBUCxDQUFnQm1CLFdBRjBCLEdBRzNDLEtBQUtxQixTQUhQO0FBSUQ7QUFDRixXQW5CRCxNQW1CTztBQUNMLGdCQUFJLEtBQUsvQixVQUFMLEdBQWtCLEtBQUtPLFdBQTNCLEVBQXdDO0FBQ3RDLG1CQUFLaEQsQ0FBTCxDQUFPSyxLQUFQLENBQWFjLEtBQWIsQ0FBbUI4RCxTQUFuQix3QkFBNkMsQ0FBQyxLQUFLeEMsVUFBTCxHQUFrQixDQUFuQixJQUMzQyxDQUFDLEtBQUt6QyxDQUFMLENBQU9nQyxRQUFQLENBQWdCbUIsV0FEMEIsR0FFM0MsS0FBS3FCLFNBRlA7QUFHRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGOzs7Z0NBRVc7QUFDVixVQUFJLEtBQUtoQyxJQUFMLEtBQWMsUUFBZCxJQUEwQixLQUFLQSxJQUFMLEtBQWMsT0FBNUMsRUFBcUQ7QUFDbkQsWUFBSSxLQUFLQyxVQUFMLEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLGVBQUswQixVQUFMLENBQWdCLEtBQUsxQixVQUFMLEdBQWtCLENBQWxDLEVBQXFDLE1BQXJDOztBQUNBLGVBQUtBLFVBQUw7QUFDRDtBQUNGLE9BTEQsTUFLTyxJQUFJLEtBQUtELElBQUwsS0FBYyxNQUFsQixFQUEwQjtBQUMvQixZQUFJLEtBQUtDLFVBQUwsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsZUFBSzBCLFVBQUwsQ0FBZ0IsS0FBSzFCLFVBQUwsR0FBa0IsQ0FBbEMsRUFBcUMsTUFBckM7O0FBQ0EsZUFBS0EsVUFBTDtBQUNELFNBSEQsTUFHTyxJQUFJLEtBQUtBLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDaEMsZUFBSzBCLFVBQUwsQ0FBZ0IsS0FBS25CLFdBQUwsR0FBbUIsQ0FBbkMsRUFBc0MsTUFBdEM7O0FBQ0EsZUFBS1AsVUFBTCxHQUFrQixLQUFLTyxXQUF2QjtBQUNEO0FBQ0YsT0FSTSxNQVFBLElBQUksS0FBS1IsSUFBTCxLQUFjLFVBQWxCLEVBQThCO0FBQ25DLFlBQUksS0FBS0MsVUFBTCxLQUFvQixDQUF4QixFQUEyQjtBQUN6QixjQUFNcUMsU0FBUyxHQUFHLEtBQUs5RSxDQUFMLENBQU9LLEtBQVAsQ0FBYVcsYUFBYixDQUNoQiw0QkFEZ0IsQ0FBbEI7QUFHQSxjQUFNK0QsaUJBQWlCLEdBQUdELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQixJQUFwQixDQUExQjtBQUNBRCwyQkFBaUIsQ0FBQzVELEtBQWxCLENBQXdCOEQsU0FBeEIsR0FBb0MsbUJBQXBDO0FBQ0FGLDJCQUFpQixDQUFDNUQsS0FBbEIsQ0FBd0IrRCxRQUF4QixHQUFtQyxVQUFuQztBQUVBLGVBQUtsRixDQUFMLENBQU9LLEtBQVAsQ0FBYXVELFdBQWIsQ0FBeUJtQixpQkFBekI7QUFDQSxlQUFLL0UsQ0FBTCxDQUFPSyxLQUFQLENBQWE4RSxZQUFiLENBQ0UsS0FBS25GLENBQUwsQ0FBT0ssS0FBUCxDQUFhVyxhQUFiLENBQTJCLDRCQUEzQixDQURGLEVBRUUsS0FBS2hCLENBQUwsQ0FBT0ssS0FBUCxDQUFhVyxhQUFiLENBQTJCLGlCQUEzQixDQUZGOztBQUlBLGVBQUttRCxVQUFMLENBQWdCLENBQUMsQ0FBakIsRUFBb0IsTUFBcEI7O0FBQ0EsZUFBSzFCLFVBQUwsR0FBa0IsS0FBS08sV0FBdkI7QUFDRCxTQWZELE1BZU8sSUFBSSxLQUFLUCxVQUFMLElBQW1CLEtBQUtPLFdBQTVCLEVBQXlDO0FBQzlDLGVBQUttQixVQUFMLENBQWdCLEtBQUsxQixVQUFMLEdBQWtCLENBQWxDLEVBQXFDLE1BQXJDOztBQUNBLGVBQUtBLFVBQUw7QUFDRDtBQUNGO0FBQ0Y7OztpQ0FFWTtBQUNYLFVBQUksS0FBS0QsSUFBTCxLQUFjLFFBQWQsSUFBMEIsS0FBS0EsSUFBTCxLQUFjLE9BQTVDLEVBQXFEO0FBQ25ELFlBQUksS0FBS0MsVUFBTCxHQUFrQixLQUFLTyxXQUFMLElBQW9CLEtBQUtJLFlBQUwsR0FBb0IsQ0FBeEMsQ0FBdEIsRUFBa0U7QUFDaEVrQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjs7QUFDQSxlQUFLcEIsVUFBTCxDQUFnQixLQUFLMUIsVUFBckIsRUFBaUMsT0FBakM7O0FBQ0EsZUFBS0EsVUFBTDtBQUNEO0FBQ0YsT0FORCxNQU1PLElBQUksS0FBS0QsSUFBTCxLQUFjLE1BQWxCLEVBQTBCO0FBQy9CLFlBQUksS0FBS0MsVUFBTCxHQUFrQixLQUFLTyxXQUEzQixFQUF3QztBQUN0QyxlQUFLbUIsVUFBTCxDQUFnQixLQUFLMUIsVUFBckIsRUFBaUMsT0FBakM7O0FBQ0EsZUFBS0EsVUFBTDtBQUNELFNBSEQsTUFHTyxJQUFJLEtBQUtBLFVBQUwsS0FBb0IsS0FBS08sV0FBN0IsRUFBMEM7QUFDL0MsZUFBS21CLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsT0FBbkI7O0FBQ0EsZUFBSzFCLFVBQUwsR0FBa0IsQ0FBbEI7QUFDRDtBQUNGLE9BUk0sTUFRQSxJQUFJLEtBQUtELElBQUwsS0FBYyxVQUFsQixFQUE4QjtBQUNuQyxZQUFJLEtBQUtDLFVBQUwsR0FBa0IsS0FBS08sV0FBM0IsRUFBd0M7QUFDdEMsZUFBS21CLFVBQUwsQ0FBZ0IsS0FBSzFCLFVBQXJCLEVBQWlDLE9BQWpDOztBQUNBLGVBQUtBLFVBQUw7QUFDRCxTQUhELE1BR08sSUFBSSxLQUFLQSxVQUFMLEtBQW9CLEtBQUtPLFdBQTdCLEVBQTBDO0FBQy9DLGNBQU1vQyxVQUFVLEdBQUcsS0FBS3BGLENBQUwsQ0FBT2dDLFFBQVAsQ0FBZ0JoQixhQUFoQixDQUE4QixpQkFBOUIsQ0FBbkI7QUFDQSxjQUFNcUUsa0JBQWtCLEdBQUdELFVBQVUsQ0FBQ0osU0FBWCxDQUFxQixJQUFyQixDQUEzQjtBQUNBLGVBQUtoRixDQUFMLENBQU9LLEtBQVAsQ0FBYXVELFdBQWIsQ0FBeUJ5QixrQkFBekI7O0FBQ0EsZUFBS2xCLFVBQUwsQ0FBZ0IsS0FBSzFCLFVBQXJCLEVBQWlDLE9BQWpDOztBQUNBLGVBQUtBLFVBQUwsR0FBa0IsQ0FBbEI7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFVStDLEMsRUFBb0I7QUFBQTs7QUFBQSxVQUFqQk4sUUFBaUIsdUVBQU4sSUFBTTtBQUM3QixVQUFJTyxDQUFKO0FBQ0FDLGtCQUFZLENBQUNELENBQUQsQ0FBWjtBQUNBLFdBQUt6RixDQUFMLENBQU9LLEtBQVAsQ0FBYWMsS0FBYixDQUFtQndFLFVBQW5CLEdBQWdDLDBCQUFoQztBQUNBLFdBQUszRixDQUFMLENBQU9LLEtBQVAsQ0FBYWMsS0FBYixDQUFtQjhELFNBQW5CLHdCQUE2Q08sQ0FBQyxHQUFHLENBQUMsS0FBS3RDLEtBQXZEO0FBRUF1QyxPQUFDLEdBQUdiLFVBQVUsQ0FBQyxZQUFNO0FBQ25CLFlBQ0UsTUFBSSxDQUFDcEMsSUFBTCxLQUFjLFVBQWQsSUFDQTBDLFFBQVEsS0FBSyxPQURiLElBRUEsTUFBSSxDQUFDekMsVUFBTCxLQUFvQixDQUh0QixFQUlFO0FBQ0EsZ0JBQUksQ0FBQ3pDLENBQUwsQ0FBT0ssS0FBUCxDQUFhd0UsV0FBYixDQUF5QixNQUFJLENBQUM3RSxDQUFMLENBQU9LLEtBQVAsQ0FBYVcsYUFBYixDQUEyQixpQkFBM0IsQ0FBekI7O0FBRUEsZ0JBQUksQ0FBQ2hCLENBQUwsQ0FBT0ssS0FBUCxDQUFhYyxLQUFiLENBQW1Cd0UsVUFBbkIsR0FBZ0MsTUFBaEM7QUFDQSxnQkFBSSxDQUFDM0YsQ0FBTCxDQUFPSyxLQUFQLENBQWFjLEtBQWIsQ0FBbUI4RCxTQUFuQixHQUErQixNQUEvQjs7QUFFQSxnQkFBSSxDQUFDakYsQ0FBTCxDQUFPSyxLQUFQLENBQWE4RSxZQUFiLENBQ0UsTUFBSSxDQUFDbkYsQ0FBTCxDQUFPSyxLQUFQLENBQWFXLGFBQWIsQ0FBMkIsNEJBQTNCLENBREYsRUFFRSxNQUFJLENBQUNoQixDQUFMLENBQU9LLEtBQVAsQ0FBYVcsYUFBYixDQUEyQixpQkFBM0IsQ0FGRjtBQUlELFNBZEQsTUFjTyxJQUNMLE1BQUksQ0FBQ3dCLElBQUwsS0FBYyxVQUFkLElBQ0EwQyxRQUFRLEtBQUssTUFEYixJQUVBLE1BQUksQ0FBQ3pDLFVBQUwsS0FBb0IsTUFBSSxDQUFDTyxXQUhwQixFQUlMO0FBQ0EsZ0JBQUksQ0FBQ2hELENBQUwsQ0FBT0ssS0FBUCxDQUFhd0UsV0FBYixDQUF5QixNQUFJLENBQUM3RSxDQUFMLENBQU9LLEtBQVAsQ0FBYVcsYUFBYixDQUEyQixpQkFBM0IsQ0FBekI7O0FBQ0EsZ0JBQUksQ0FBQ2hCLENBQUwsQ0FBT0ssS0FBUCxDQUFhYyxLQUFiLENBQW1Cd0UsVUFBbkIsR0FBZ0MsTUFBaEM7QUFDQSxnQkFBSSxDQUFDM0YsQ0FBTCxDQUFPSyxLQUFQLENBQWFjLEtBQWIsQ0FBbUI4RCxTQUFuQix3QkFBNkMsQ0FBQyxNQUFJLENBQUNqQyxXQUFMLEdBQW1CLENBQXBCLElBQzNDLENBQUMsTUFBSSxDQUFDRSxLQURSO0FBRUQ7QUFDRixPQXpCYSxFQXlCWCxJQXpCVyxDQUFkOztBQTJCQSxVQUFJLEtBQUtSLFVBQVQsRUFBcUI7QUFDbkIsWUFBSXdDLFFBQVEsS0FBSyxNQUFqQixFQUF5QjtBQUN2QixlQUFLbEYsQ0FBTCxDQUFPZ0MsUUFBUCxDQUNHaEIsYUFESCxDQUNpQixxQ0FEakIsRUFFR0gsU0FGSCxDQUVhZSxNQUZiLENBRW9CLG9DQUZwQjtBQUdBLGNBQUksS0FBS2EsVUFBTCxLQUFvQixDQUF4QixFQUNFLEtBQUt6QyxDQUFMLENBQU9nQyxRQUFQLENBQ0doQixhQURILENBQ2lCLHdDQURqQixFQUVHSCxTQUZILENBRWFnQixHQUZiLENBRWlCLG9DQUZqQixFQURGLEtBS0UsS0FBSzdCLENBQUwsQ0FBT2dDLFFBQVAsQ0FDR2hCLGFBREgsaURBRTZDLEtBQUt5QixVQUFMLEdBQWtCLENBRi9ELFFBSUc1QixTQUpILENBSWFnQixHQUpiLENBSWlCLG9DQUpqQjtBQUtILFNBZEQsTUFjTyxJQUFJcUQsUUFBUSxLQUFLLE9BQWpCLEVBQTBCO0FBQy9CLGVBQUtsRixDQUFMLENBQU9nQyxRQUFQLENBQ0doQixhQURILENBQ2lCLHFDQURqQixFQUVHSCxTQUZILENBRWFlLE1BRmIsQ0FFb0Isb0NBRnBCO0FBR0EsY0FBSSxLQUFLYSxVQUFMLEtBQW9CLEtBQUtPLFdBQTdCLEVBQ0UsS0FBS2hELENBQUwsQ0FBT2dDLFFBQVAsQ0FDR2hCLGFBREgsQ0FDaUIsNkJBRGpCLEVBRUdILFNBRkgsQ0FFYWdCLEdBRmIsQ0FFaUIsb0NBRmpCLEVBREYsS0FLRSxLQUFLN0IsQ0FBTCxDQUFPZ0MsUUFBUCxDQUNHaEIsYUFESCxpREFFNkMsS0FBS3lCLFVBQUwsR0FBa0IsQ0FGL0QsUUFJRzVCLFNBSkgsQ0FJYWdCLEdBSmIsQ0FJaUIsb0NBSmpCO0FBS0g7QUFDRjtBQUNGOzs7Ozs7QUFHWUMsdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFaQTs7OztJQUtNOEQsVTtBQUNKLHNCQUFZQyxXQUFaLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUs3RixDQUFMLEdBQVMsRUFBVCxDQUR1QixDQUNYOztBQUNaLFNBQUtBLENBQUwsQ0FBTzhGLFVBQVAsR0FBb0JELFdBQXBCLENBRnVCLENBRVM7O0FBRWhDLFNBQUsxRixXQUFMOztBQUNBLFNBQUtDLFdBQUw7QUFDRDtBQUVEOzs7Ozs7O2tDQUdjO0FBQ1osV0FBSzJGLEtBQUwsR0FBYSxLQUFLL0YsQ0FBTCxDQUFPOEYsVUFBUCxDQUFrQnBGLE9BQWxCLENBQTBCcUYsS0FBdkM7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLEtBQUtoRyxDQUFMLENBQU84RixVQUFQLENBQWtCcEYsT0FBbEIsQ0FBMEJ1RixNQUExQztBQUNBLFdBQUtDLGdCQUFMLEdBQXdCLEtBQUtsRyxDQUFMLENBQU84RixVQUFQLENBQWtCcEYsT0FBbEIsQ0FBMEJ5RixTQUExQixHQUNwQixLQUFLbkcsQ0FBTCxDQUFPOEYsVUFBUCxDQUFrQnBGLE9BQWxCLENBQTBCeUYsU0FETixHQUVwQixPQUZKO0FBR0EsV0FBSzNELElBQUwsR0FBWSxLQUFLeEMsQ0FBTCxDQUFPOEYsVUFBUCxDQUFrQnBGLE9BQWxCLENBQTBCOEIsSUFBMUIsR0FDUixLQUFLeEMsQ0FBTCxDQUFPOEYsVUFBUCxDQUFrQnBGLE9BQWxCLENBQTBCOEIsSUFEbEIsR0FFUixNQUZKO0FBR0EsV0FBSzRELE1BQUwsR0FBYyxLQUFLcEcsQ0FBTCxDQUFPOEYsVUFBUCxDQUFrQnBGLE9BQWxCLENBQTBCMkYsSUFBeEM7QUFDRDtBQUVEOzs7Ozs7a0NBR2M7QUFDWixVQUFJLEtBQUtMLFFBQVQsRUFBbUI7QUFDakIsYUFBS2hHLENBQUwsQ0FBT2lHLE1BQVAsR0FBZ0J6QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBaEI7QUFDQSxhQUFLekQsQ0FBTCxDQUFPaUcsTUFBUCxDQUFjcEYsU0FBZCxDQUF3QmdCLEdBQXhCLENBQTRCLHFCQUE1QjtBQUNBLGFBQUs3QixDQUFMLENBQU9pRyxNQUFQLENBQWN0QyxZQUFkLENBQTJCLE1BQTNCLEVBQW1DLFFBQW5DO0FBQ0EsYUFBSzNELENBQUwsQ0FBT2lHLE1BQVAsQ0FBY0ssU0FBZCxHQUEwQixLQUFLTixRQUEvQjtBQUNEOztBQUVELFdBQUtoRyxDQUFMLENBQU84RixVQUFQLENBQWtCUyxTQUFsQixHQUE4QixFQUE5Qjs7QUFFQSxVQUFJLEtBQUtILE1BQVQsRUFBaUI7QUFDZixhQUFLcEcsQ0FBTCxDQUFPd0csU0FBUCxHQUFtQmhELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLGFBQUt6RCxDQUFMLENBQU93RyxTQUFQLENBQWlCM0YsU0FBakIsQ0FBMkJnQixHQUEzQixDQUErQix3QkFBL0I7QUFDRDs7QUFFRCxVQUFJLEtBQUttRSxRQUFMLElBQWlCLEtBQUtFLGdCQUFMLEtBQTBCLE1BQS9DLEVBQXVEO0FBQ3JELGFBQUtFLE1BQUwsR0FDSSxLQUFLcEcsQ0FBTCxDQUFPd0csU0FBUCxDQUFpQjVDLFdBQWpCLENBQTZCLEtBQUs1RCxDQUFMLENBQU9pRyxNQUFwQyxDQURKLEdBRUksS0FBS2pHLENBQUwsQ0FBTzhGLFVBQVAsQ0FBa0JsQyxXQUFsQixDQUE4QixLQUFLNUQsQ0FBTCxDQUFPaUcsTUFBckMsQ0FGSjtBQUdELE9BbkJXLENBcUJaOzs7QUFDQSxXQUFLakcsQ0FBTCxDQUFPK0YsS0FBUCxHQUFldkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWY7QUFDQSxXQUFLekQsQ0FBTCxDQUFPK0YsS0FBUCxDQUFhTyxTQUFiLEdBQXlCLEtBQUtQLEtBQTlCO0FBQ0EsV0FBSy9GLENBQUwsQ0FBTytGLEtBQVAsQ0FBYWxGLFNBQWIsQ0FBdUJnQixHQUF2QixDQUEyQixvQkFBM0I7QUFDQSxXQUFLdUUsTUFBTCxHQUNJLEtBQUtwRyxDQUFMLENBQU93RyxTQUFQLENBQWlCNUMsV0FBakIsQ0FBNkIsS0FBSzVELENBQUwsQ0FBTytGLEtBQXBDLENBREosR0FFSSxLQUFLL0YsQ0FBTCxDQUFPOEYsVUFBUCxDQUFrQmxDLFdBQWxCLENBQThCLEtBQUs1RCxDQUFMLENBQU8rRixLQUFyQyxDQUZKLENBekJZLENBNkJaOztBQUNBLFdBQUsvRixDQUFMLENBQU95RyxLQUFQLEdBQWVqRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZjtBQUNBLFdBQUt6RCxDQUFMLENBQU95RyxLQUFQLENBQWE5QyxZQUFiLENBQTBCLE1BQTFCLEVBQWtDLEtBQUszRCxDQUFMLENBQU84RixVQUFQLENBQWtCcEYsT0FBbEIsQ0FBMEJnRyxJQUE1RDtBQUNBLFdBQUsxRyxDQUFMLENBQU95RyxLQUFQLENBQWE5QyxZQUFiLENBQTBCLE1BQTFCLEVBQWtDLE1BQWxDO0FBQ0EsVUFBSSxLQUFLbkIsSUFBTCxLQUFjLE9BQWxCLEVBQTJCLEtBQUt4QyxDQUFMLENBQU95RyxLQUFQLENBQWE5QyxZQUFiLENBQTBCLFVBQTFCLEVBQXNDLElBQXRDLEVBQTNCLEtBQ0ssSUFBSSxLQUFLbkIsSUFBTCxLQUFjLFFBQWxCLEVBQTRCO0FBQy9CLGFBQUt4QyxDQUFMLENBQU95RyxLQUFQLENBQWE5QyxZQUFiLENBQTBCLGlCQUExQixFQUE2QyxJQUE3QztBQUNBLGFBQUszRCxDQUFMLENBQU95RyxLQUFQLENBQWE5QyxZQUFiLENBQTBCLFlBQTFCLEVBQXdDLElBQXhDO0FBQ0Q7QUFDRCxXQUFLM0QsQ0FBTCxDQUFPeUcsS0FBUCxDQUFhdEYsS0FBYixDQUFtQndGLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0EsV0FBS1AsTUFBTCxHQUNJLEtBQUtwRyxDQUFMLENBQU93RyxTQUFQLENBQWlCNUMsV0FBakIsQ0FBNkIsS0FBSzVELENBQUwsQ0FBT3lHLEtBQXBDLENBREosR0FFSSxLQUFLekcsQ0FBTCxDQUFPOEYsVUFBUCxDQUFrQmxDLFdBQWxCLENBQThCLEtBQUs1RCxDQUFMLENBQU95RyxLQUFyQyxDQUZKOztBQUlBLFVBQUksS0FBS1QsUUFBTCxJQUFpQixLQUFLRSxnQkFBTCxLQUEwQixPQUEvQyxFQUF3RDtBQUN0RCxhQUFLRSxNQUFMLEdBQ0ksS0FBS3BHLENBQUwsQ0FBT3dHLFNBQVAsQ0FBaUI1QyxXQUFqQixDQUE2QixLQUFLNUQsQ0FBTCxDQUFPaUcsTUFBcEMsQ0FESixHQUVJLEtBQUtqRyxDQUFMLENBQU84RixVQUFQLENBQWtCbEMsV0FBbEIsQ0FBOEIsS0FBSzVELENBQUwsQ0FBT2lHLE1BQXJDLENBRko7QUFHRDs7QUFFRCxVQUFJLEtBQUtHLE1BQVQsRUFBaUI7QUFDZixhQUFLcEcsQ0FBTCxDQUFPOEYsVUFBUCxDQUFrQmxDLFdBQWxCLENBQThCLEtBQUs1RCxDQUFMLENBQU93RyxTQUFyQyxFQURlLENBR2Y7O0FBQ0EsYUFBS3hHLENBQUwsQ0FBT3FHLElBQVAsR0FBYzdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFkO0FBQ0EsYUFBS3pELENBQUwsQ0FBT3FHLElBQVAsQ0FBWXhGLFNBQVosQ0FBc0JnQixHQUF0QixDQUEwQixtQkFBMUI7QUFDQSxhQUFLN0IsQ0FBTCxDQUFPcUcsSUFBUCxDQUFZQyxTQUFaLEdBQXdCLE1BQXhCO0FBQ0EsYUFBS3RHLENBQUwsQ0FBTzhGLFVBQVAsQ0FBa0JsQyxXQUFsQixDQUE4QixLQUFLNUQsQ0FBTCxDQUFPcUcsSUFBckM7QUFDRDs7QUFFRCxXQUFLOUUsT0FBTDtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUixXQUFLdkIsQ0FBTCxDQUFPd0csU0FBUCxDQUFpQi9FLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNO0FBQy9DLGFBQUksQ0FBQ3pCLENBQUwsQ0FBT3lHLEtBQVAsQ0FBYUcsS0FBYjtBQUNELE9BRkQ7O0FBSUEsVUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQVIsSUFBSSxFQUFJO0FBQzFCLFlBQU1TLEtBQUssR0FBR1QsSUFBZDtBQUNBLFlBQU1VLEtBQUssR0FBRyxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLENBQWQ7QUFDQSxZQUFNckQsQ0FBQyxHQUFHSyxRQUFRLENBQUNpRCxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDekIsR0FBTCxDQUFTdUIsS0FBVCxJQUFrQkUsSUFBSSxDQUFDekIsR0FBTCxDQUFTLElBQVQsQ0FBN0IsQ0FBRCxDQUFsQjtBQUNBLFlBQU0yQixPQUFPLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXTCxLQUFLLEdBQUdFLElBQUksQ0FBQ0ksR0FBTCxDQUFTLElBQVQsRUFBZTFELENBQWYsQ0FBbkIsRUFBc0MsQ0FBdEMsQ0FBaEI7QUFDQSx5QkFBVXdELE9BQVYsY0FBcUJILEtBQUssQ0FBQ3JELENBQUQsQ0FBMUI7QUFDRCxPQU5EOztBQVFBLFdBQUsxRCxDQUFMLENBQU95RyxLQUFQLENBQWFoRixnQkFBYixDQUE4QixRQUE5QixFQUF3QyxVQUFBQyxLQUFLLEVBQUk7QUFDL0MsWUFBSSxLQUFJLENBQUNjLElBQUwsS0FBYyxNQUFsQixFQUEwQjtBQUN4QixjQUFNNkUsSUFBSSxHQUFHM0YsS0FBSyxDQUFDQyxNQUFOLENBQWEyRixLQUFiLENBQW1CLENBQW5CLENBQWI7QUFDQSxlQUFJLENBQUN0SCxDQUFMLENBQU8rRixLQUFQLENBQWFPLFNBQWIsR0FBeUJlLElBQUksQ0FBQ1gsSUFBOUI7QUFDQSxjQUFNYSxLQUFLLEdBQUcvRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBOEQsZUFBSyxDQUFDMUcsU0FBTixDQUFnQmdCLEdBQWhCLENBQW9CLHdCQUFwQjtBQUNBMEYsZUFBSyxDQUFDaEIsU0FBTixHQUFrQixTQUFsQjs7QUFDQSxlQUFJLENBQUN2RyxDQUFMLENBQU93RyxTQUFQLENBQWlCckIsWUFBakIsQ0FBOEJvQyxLQUE5QixFQUFxQyxLQUFJLENBQUN2SCxDQUFMLENBQU9pRyxNQUE1Qzs7QUFDQXNCLGVBQUssQ0FBQzlGLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUFDLEtBQUssRUFBSTtBQUN2Q0EsaUJBQUssQ0FBQzhGLGVBQU47QUFDQSxpQkFBSSxDQUFDeEgsQ0FBTCxDQUFPeUcsS0FBUCxDQUFhZ0IsS0FBYixHQUFxQixJQUFyQjtBQUNBLGlCQUFJLENBQUN6SCxDQUFMLENBQU8rRixLQUFQLENBQWFPLFNBQWIsR0FBeUIsS0FBSSxDQUFDUCxLQUE5Qjs7QUFDQSxpQkFBSSxDQUFDL0YsQ0FBTCxDQUFPd0csU0FBUCxDQUFpQjNCLFdBQWpCLENBQTZCMEMsS0FBN0I7O0FBQ0EsaUJBQUksQ0FBQ3ZILENBQUwsQ0FBT3FHLElBQVAsQ0FBWUMsU0FBWixHQUF3QixNQUF4QjtBQUNELFdBTkQ7QUFPQSxlQUFJLENBQUN0RyxDQUFMLENBQU9xRyxJQUFQLENBQVlDLFNBQVosR0FBd0JPLFdBQVcsQ0FBQ1EsSUFBSSxDQUFDaEIsSUFBTixDQUFuQztBQUNELFNBZkQsTUFlTztBQUNMLGNBQUlpQixLQUFLLEdBQUc1RixLQUFLLENBQUNDLE1BQU4sQ0FBYTJGLEtBQXpCO0FBRUEsY0FBTUksTUFBTSxHQUFHbEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxjQUFJNEMsSUFBSSxHQUFHLENBQVg7QUFFQS9GLGVBQUssQ0FBQ0MsSUFBTixDQUFXK0csS0FBWCxFQUFrQkssT0FBbEIsQ0FBMEIsVUFBQ04sSUFBRCxFQUFPTyxLQUFQLEVBQWlCO0FBQ3pDLGdCQUFNQyxLQUFLLEdBQUdyRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBb0UsaUJBQUssQ0FBQ3ZCLFNBQU4sR0FBa0JlLElBQUksQ0FBQ1gsSUFBdkI7QUFDQW1CLGlCQUFLLENBQUNoSCxTQUFOLENBQWdCZ0IsR0FBaEIsQ0FBb0IsbUJBQXBCO0FBRUEsZ0JBQU0wRixLQUFLLEdBQUcvRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBOEQsaUJBQUssQ0FBQzFHLFNBQU4sQ0FBZ0JnQixHQUFoQixDQUFvQix3QkFBcEI7QUFDQTBGLGlCQUFLLENBQUNoQixTQUFOLEdBQWtCLFNBQWxCO0FBRUFzQixpQkFBSyxDQUFDakUsV0FBTixDQUFrQjJELEtBQWxCO0FBQ0FHLGtCQUFNLENBQUM5RCxXQUFQLENBQW1CaUUsS0FBbkI7QUFFQXhCLGdCQUFJLElBQUlnQixJQUFJLENBQUNoQixJQUFiO0FBRUFrQixpQkFBSyxDQUFDOUYsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtBQUNwQyxrQkFBSTRFLElBQUksR0FBRyxDQUFYO0FBQ0Esa0JBQU15QixRQUFRLEdBQUcsSUFBSUMsWUFBSixFQUFqQjs7QUFGb0MseURBR25CVCxLQUhtQjtBQUFBOztBQUFBO0FBR3BDLG9FQUF3QjtBQUFBLHNCQUFmRCxLQUFlOztBQUN0QixzQkFBSUEsS0FBSSxLQUFLQyxLQUFLLENBQUNNLEtBQUQsQ0FBbEIsRUFBMkI7QUFDekJFLDRCQUFRLENBQUN6SCxLQUFULENBQWV3QixHQUFmLENBQW1Cd0YsS0FBbkI7QUFDQWhCLHdCQUFJLElBQUlnQixLQUFJLENBQUNoQixJQUFiO0FBQ0Q7QUFDRjtBQVJtQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNwQyxtQkFBSSxDQUFDckcsQ0FBTCxDQUFPcUcsSUFBUCxDQUFZQyxTQUFaLEdBQXdCTyxXQUFXLENBQUNSLElBQUQsQ0FBbkM7QUFDQSxtQkFBSSxDQUFDckcsQ0FBTCxDQUFPeUcsS0FBUCxDQUFhYSxLQUFiLEdBQXFCUSxRQUFRLENBQUNSLEtBQTlCO0FBQ0FJLG9CQUFNLENBQUM3QyxXQUFQLENBQW1CZ0QsS0FBbkI7QUFDRCxhQVpEO0FBYUQsV0EzQkQ7QUE2QkEsZUFBSSxDQUFDN0gsQ0FBTCxDQUFPcUcsSUFBUCxDQUFZQyxTQUFaLEdBQXdCTyxXQUFXLENBQUNSLElBQUQsQ0FBbkM7O0FBRUEsZUFBSSxDQUFDckcsQ0FBTCxDQUFPOEYsVUFBUCxDQUFrQmxDLFdBQWxCLENBQThCOEQsTUFBOUI7QUFDRDtBQUNGLE9BdkREO0FBd0REOzs7Ozs7QUFHWTlCLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0S0E7Ozs7SUFLTW9DLFc7QUFDSix1QkFBWUMsWUFBWixFQUEwQjtBQUFBOztBQUN4QixTQUFLakksQ0FBTCxHQUFTLEVBQVQsQ0FEd0IsQ0FDWjs7QUFDWixTQUFLQSxDQUFMLENBQU9rSSxXQUFQLEdBQXFCRCxZQUFyQixDQUZ3QixDQUVVOztBQUVsQyxTQUFLOUgsV0FBTDs7QUFDQSxTQUFLQyxXQUFMO0FBQ0Q7QUFFRDs7Ozs7OztrQ0FHYztBQUNaLFdBQUsrSCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLEtBQUtwSSxDQUFMLENBQU9rSSxXQUFQLENBQW1CeEgsT0FBbkIsQ0FBMkIwSCxLQUF4QztBQUNBLFdBQUtDLElBQUwsR0FBWSxLQUFLckksQ0FBTCxDQUFPa0ksV0FBUCxDQUFtQnhILE9BQW5CLENBQTJCMkgsSUFBdkM7QUFDQSxXQUFLQyxlQUFMLEdBQXVCLENBQXZCO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNEO0FBRUQ7Ozs7OztrQ0FHYztBQUNaO0FBQ0EsV0FBS3ZJLENBQUwsQ0FBT3lHLEtBQVAsR0FBZWpELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFmO0FBQ0EsV0FBS3pELENBQUwsQ0FBT3lHLEtBQVAsQ0FBYTlDLFlBQWIsQ0FBMEIsTUFBMUIsRUFBa0MsS0FBSzNELENBQUwsQ0FBT2tJLFdBQVAsQ0FBbUJ4SCxPQUFuQixDQUEyQmdHLElBQTdEO0FBQ0EsV0FBSzFHLENBQUwsQ0FBT3lHLEtBQVAsQ0FBYXRGLEtBQWIsQ0FBbUJ3RixPQUFuQixHQUE2QixNQUE3QixDQUpZLENBTVo7O0FBQ0EsV0FBSzNHLENBQUwsQ0FBT3dJLGFBQVAsR0FBdUJoRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdkI7QUFDQSxXQUFLekQsQ0FBTCxDQUFPd0ksYUFBUCxDQUFxQjNILFNBQXJCLENBQStCZ0IsR0FBL0IsQ0FBbUMsbUJBQW5DO0FBQ0EsV0FBSzdCLENBQUwsQ0FBT3dJLGFBQVAsQ0FBcUIzSCxTQUFyQixDQUErQmdCLEdBQS9CLENBQW1DLCtCQUFuQyxFQVRZLENBV1o7O0FBQ0EsV0FBSzdCLENBQUwsQ0FBT3lJLFFBQVAsR0FBa0JqRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQSxXQUFLekQsQ0FBTCxDQUFPeUksUUFBUCxDQUFnQjVILFNBQWhCLENBQTBCZ0IsR0FBMUIsQ0FBOEIsbUJBQTlCO0FBQ0EsV0FBSzdCLENBQUwsQ0FBT3lJLFFBQVAsQ0FBZ0I1SCxTQUFoQixDQUEwQmdCLEdBQTFCLENBQThCLDBCQUE5QixFQWRZLENBZ0JaOztBQUNBLFdBQUs3QixDQUFMLENBQU8wSSxNQUFQLEdBQWdCbEYsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0EsV0FBS3pELENBQUwsQ0FBTzBJLE1BQVAsQ0FBYzdILFNBQWQsQ0FBd0JnQixHQUF4QixDQUE0QixzQkFBNUI7QUFFQSxXQUFLN0IsQ0FBTCxDQUFPa0ksV0FBUCxDQUFtQnRFLFdBQW5CLENBQStCLEtBQUs1RCxDQUFMLENBQU93SSxhQUF0QztBQUNBLFdBQUt4SSxDQUFMLENBQU9rSSxXQUFQLENBQW1CdEUsV0FBbkIsQ0FBK0IsS0FBSzVELENBQUwsQ0FBT3lJLFFBQXRDO0FBQ0EsV0FBS3pJLENBQUwsQ0FBT2tJLFdBQVAsQ0FBbUJ0RSxXQUFuQixDQUErQixLQUFLNUQsQ0FBTCxDQUFPMEksTUFBdEM7QUFDQSxXQUFLMUksQ0FBTCxDQUFPa0ksV0FBUCxDQUFtQnRFLFdBQW5CLENBQStCLEtBQUs1RCxDQUFMLENBQU95RyxLQUF0QztBQUVBLFdBQUt6RyxDQUFMLENBQU8wSSxNQUFQLENBQWN2SCxLQUFkLENBQW9COEQsU0FBcEI7QUFFQSxXQUFLL0IsS0FBTCxHQUFhLEtBQUtsRCxDQUFMLENBQU9rSSxXQUFQLENBQW1CL0UsV0FBaEM7QUFDQSxXQUFLd0YsV0FBTCxHQUFtQixLQUFLUCxLQUFMLEdBQWEsS0FBS0MsSUFBckMsQ0E1QlksQ0E0QjhCOztBQUMxQyxXQUFLTyxLQUFMLEdBQWEsS0FBSzFGLEtBQUwsR0FBYSxLQUFLeUYsV0FBL0IsQ0E3QlksQ0E2QitCOztBQUMzQyxXQUFLcEgsT0FBTDtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUixXQUFLdkIsQ0FBTCxDQUFPMEksTUFBUCxDQUFjakgsZ0JBQWQsQ0FBK0IsV0FBL0IsRUFBNEMsVUFBQUMsS0FBSyxFQUFJO0FBQ25ELGFBQUksQ0FBQ3lHLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxhQUFJLENBQUMvRCxjQUFMLEdBQXNCMUMsS0FBSyxDQUFDNEMsT0FBNUI7QUFDRCxPQUhEO0FBS0FkLGNBQVEsQ0FBQy9CLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUFvSCxFQUFFLEVBQUk7QUFDekMsYUFBSSxDQUFDVixXQUFMLEdBQW1CLEtBQW5CO0FBQ0QsT0FGRDtBQUlBM0UsY0FBUSxDQUFDL0IsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQUMsS0FBSyxFQUFJO0FBQzlDLFlBQUksS0FBSSxDQUFDeUcsV0FBVCxFQUFzQjtBQUNwQixjQUNFekcsS0FBSyxDQUFDNEMsT0FBTixHQUFnQixLQUFJLENBQUNGLGNBQXJCLElBQ0ExQyxLQUFLLENBQUM0QyxPQUFOLElBQWlCLENBQUMsS0FBSSxDQUFDaUUsVUFBTCxHQUFrQixDQUFuQixJQUF3QixLQUFJLENBQUNLLEtBRDlDLElBRUEsS0FBSSxDQUFDTCxVQUFMLEdBQWtCLEtBQUksQ0FBQ0ksV0FIekIsRUFJRTtBQUNBLGlCQUFJLENBQUNMLGVBQUwsR0FDRSxDQUFDLEtBQUksQ0FBQ0MsVUFBTCxHQUFrQixDQUFuQixJQUF3QixLQUFJLENBQUNLLEtBQTdCLEdBQXFDLEtBQUksQ0FBQzVJLENBQUwsQ0FBTzBJLE1BQVAsQ0FBY3ZGLFdBQWQsR0FBNEIsQ0FEbkU7QUFFQSxpQkFBSSxDQUFDbkQsQ0FBTCxDQUFPMEksTUFBUCxDQUFjdkgsS0FBZCxDQUFvQjhELFNBQXBCLHdCQUE4QyxLQUFJLENBQUNxRCxlQUFuRDtBQUNBLGlCQUFJLENBQUN0SSxDQUFMLENBQU95SSxRQUFQLENBQWdCdEgsS0FBaEIsQ0FBc0I4RCxTQUF0QixvQkFBNkMsSUFBSSxLQUFJLENBQUMwRCxXQUFWLElBQ3pDLEtBQUksQ0FBQ0osVUFBTCxHQUFrQixDQUR1QixDQUE1QztBQUVBLGlCQUFJLENBQUNuRSxjQUFMLEdBQXNCMUMsS0FBSyxDQUFDNEMsT0FBNUI7QUFDQSxpQkFBSSxDQUFDaUUsVUFBTDtBQUNELFdBWkQsTUFZTyxJQUNMN0csS0FBSyxDQUFDNEMsT0FBTixHQUFnQixLQUFJLENBQUNGLGNBQXJCLElBQ0ExQyxLQUFLLENBQUM0QyxPQUFOLElBQWlCLENBQUMsS0FBSSxDQUFDaUUsVUFBTCxHQUFrQixDQUFuQixJQUF3QixLQUFJLENBQUNLLEtBRDlDLElBRUEsS0FBSSxDQUFDTCxVQUFMLEdBQWtCLENBSGIsRUFJTDtBQUNBLGlCQUFJLENBQUNELGVBQUwsR0FDRSxDQUFDLEtBQUksQ0FBQ0MsVUFBTCxHQUFrQixDQUFuQixJQUF3QixLQUFJLENBQUNLLEtBQTdCLEdBQXFDLEtBQUksQ0FBQzVJLENBQUwsQ0FBTzBJLE1BQVAsQ0FBY3ZGLFdBQWQsR0FBNEIsQ0FEbkU7QUFFQSxpQkFBSSxDQUFDbkQsQ0FBTCxDQUFPMEksTUFBUCxDQUFjdkgsS0FBZCxDQUFvQjhELFNBQXBCLHdCQUE4QyxLQUFJLENBQUNxRCxlQUFuRDtBQUNBLGlCQUFJLENBQUN0SSxDQUFMLENBQU95SSxRQUFQLENBQWdCdEgsS0FBaEIsQ0FBc0I4RCxTQUF0QixvQkFBNkMsSUFBSSxLQUFJLENBQUMwRCxXQUFWLElBQ3pDLEtBQUksQ0FBQ0osVUFBTCxHQUFrQixDQUR1QixDQUE1QztBQUVBLGlCQUFJLENBQUNuRSxjQUFMLEdBQXNCMUMsS0FBSyxDQUFDNEMsT0FBNUI7QUFDQSxpQkFBSSxDQUFDaUUsVUFBTDtBQUNEO0FBQ0Y7QUFDRixPQTVCRDtBQThCQSxXQUFLdkksQ0FBTCxDQUFPa0ksV0FBUCxDQUFtQnpHLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QyxVQUFBQyxLQUFLLEVBQUk7QUFDcEQsWUFBSW9ILFNBQVMsR0FBRyxDQUFoQjs7QUFDQSxhQUFLLElBQUlULElBQUksR0FBRyxDQUFoQixFQUFtQkEsSUFBSSxJQUFJLEtBQUksQ0FBQ00sV0FBaEMsRUFBNkNOLElBQUksRUFBakQsRUFBcUQ7QUFDbkQsY0FBSTNHLEtBQUssQ0FBQzRDLE9BQU4sR0FBZ0IrRCxJQUFJLEdBQUcsS0FBSSxDQUFDTyxLQUFaLEdBQW9CLEVBQXhDLEVBQTRDRSxTQUFTLEdBQUdULElBQVo7QUFDN0M7O0FBRUQsYUFBSSxDQUFDQyxlQUFMLEdBQ0VRLFNBQVMsR0FBRyxLQUFJLENBQUNGLEtBQWpCLEdBQXlCLEtBQUksQ0FBQzVJLENBQUwsQ0FBTzBJLE1BQVAsQ0FBY3ZGLFdBQWQsR0FBNEIsQ0FEdkQ7QUFFQSxhQUFJLENBQUNuRCxDQUFMLENBQU8wSSxNQUFQLENBQWN2SCxLQUFkLENBQW9COEQsU0FBcEIsd0JBQThDLEtBQUksQ0FBQ3FELGVBQW5EO0FBQ0EsYUFBSSxDQUFDdEksQ0FBTCxDQUFPeUksUUFBUCxDQUFnQnRILEtBQWhCLENBQXNCOEQsU0FBdEIsb0JBQTZDLElBQUksS0FBSSxDQUFDMEQsV0FBVixHQUMxQ0csU0FERjtBQUVELE9BWEQ7QUFZRDs7Ozs7O0FBR1lkLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7Ozs7SUFLTWUsWTtBQUNKLHdCQUFZQyxhQUFaLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtoSixDQUFMLEdBQVMsRUFBVCxDQUR5QixDQUNiOztBQUNaLFNBQUtBLENBQUwsQ0FBT2lKLFlBQVAsR0FBc0JELGFBQXRCLENBRnlCLENBRVc7O0FBRXBDLFNBQUtFLFVBQUw7QUFDQSxTQUFLQyxVQUFMO0FBQ0Q7QUFFRDs7Ozs7OztpQ0FHYTtBQUNYLFdBQUt6QyxJQUFMLEdBQVksS0FBSzFHLENBQUwsQ0FBT2lKLFlBQVAsQ0FBb0JHLFlBQXBCLENBQWlDLE1BQWpDLENBQVo7QUFDQSxXQUFLQyxTQUFMLEdBQWlCLEtBQUtySixDQUFMLENBQU9pSixZQUFQLENBQW9CdkksT0FBcEIsQ0FBNEI0SSxPQUE3QyxDQUZXLENBRTBDOztBQUNyRCxXQUFLQyxVQUFMLEdBQWtCLEtBQUt2SixDQUFMLENBQU9pSixZQUFQLENBQW9CdkksT0FBcEIsQ0FBNEI4SSxNQUE5QyxDQUhXLENBRzBDOztBQUNyRCxXQUFLQyxZQUFMLEdBQW9CLEtBQUt6SixDQUFMLENBQU9pSixZQUFQLENBQW9CdkksT0FBcEIsQ0FBNEJxRixLQUFoRCxDQUpXLENBSTJDOztBQUN0RCxXQUFLMkQsWUFBTCxHQUFvQixLQUFLMUosQ0FBTCxDQUFPaUosWUFBUCxDQUFvQnZJLE9BQXBCLENBQTRCcUYsS0FBaEQsQ0FMVyxDQUsyQzs7QUFDdEQsV0FBSzFGLEtBQUwsR0FBYUMsS0FBSyxDQUFDQyxJQUFOLENBQVcsS0FBS1AsQ0FBTCxDQUFPaUosWUFBUCxDQUFvQnpJLGdCQUFwQixDQUFxQyxRQUFyQyxDQUFYLENBQWIsQ0FOVyxDQU02RDtBQUN6RTtBQUVEOzs7Ozs7aUNBR2E7QUFDWCxVQUFNbUosbUJBQW1CLEdBQUduRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBNUI7QUFDQWtHLHlCQUFtQixDQUFDOUksU0FBcEIsQ0FBOEJnQixHQUE5QixDQUFrQyxlQUFsQztBQUNBLFdBQUs3QixDQUFMLENBQU9pSixZQUFQLENBQW9CVyxVQUFwQixDQUErQkMsWUFBL0IsQ0FDRUYsbUJBREYsRUFFRSxLQUFLM0osQ0FBTCxDQUFPaUosWUFGVDtBQUlBLFdBQUtqSixDQUFMLENBQU9pSixZQUFQLEdBQXNCVSxtQkFBdEI7QUFDQXJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt2RixDQUFMLENBQU9pSixZQUFuQjs7QUFDQSxVQUFJLENBQUMsS0FBS00sVUFBTixJQUFvQmxILE1BQU0sQ0FBQ2dCLFVBQVAsQ0FBa0Isb0JBQWxCLEVBQXdDQyxPQUFoRSxFQUF5RTtBQUN2RTtBQUNBLFlBQU13RyxPQUFPLEdBQUd0RyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBaEI7QUFDQXFHLGVBQU8sQ0FBQ25HLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkIsS0FBSytDLElBQWxDLEVBSHVFLENBS3ZFOztBQUNBLFlBQU1xRCxjQUFjLEdBQUd2RyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdkI7QUFDQXNHLHNCQUFjLENBQUNwRyxZQUFmLENBQTRCLE9BQTVCLEVBQXFDLEVBQXJDO0FBQ0FvRyxzQkFBYyxDQUFDekQsU0FBZixHQUEyQixLQUFLbUQsWUFBaEM7QUFDQUssZUFBTyxDQUFDbEcsV0FBUixDQUFvQm1HLGNBQXBCLEVBVHVFLENBV3ZFOztBQUNBLGFBQUsxSixLQUFMLENBQVdzSCxPQUFYLENBQW1CLFVBQUFyRyxJQUFJLEVBQUk7QUFDekIsY0FBTTBJLE9BQU8sR0FBR3hHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFoQjtBQUNBdUcsaUJBQU8sQ0FBQ3JHLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEJyQyxJQUFJLENBQUM4SCxZQUFMLENBQWtCLE9BQWxCLENBQTlCO0FBQ0FZLGlCQUFPLENBQUMxRCxTQUFSLEdBQW9CaEYsSUFBSSxDQUFDZ0YsU0FBekI7QUFDQXdELGlCQUFPLENBQUNsRyxXQUFSLENBQW9Cb0csT0FBcEI7QUFDRCxTQUxEO0FBT0EsYUFBS2hLLENBQUwsQ0FBT2lKLFlBQVAsQ0FBb0IxQyxTQUFwQixHQUFnQyxFQUFoQztBQUNBLGFBQUt2RyxDQUFMLENBQU9pSixZQUFQLENBQW9CckYsV0FBcEIsQ0FBZ0NrRyxPQUFoQztBQUNELE9BckJELE1BcUJPO0FBQ0wsWUFBSSxLQUFLVCxTQUFULEVBQW9CO0FBQ2xCLGVBQUtySixDQUFMLENBQU9pSixZQUFQLENBQW9CcEksU0FBcEIsQ0FBOEJnQixHQUE5QixDQUFrQyx3QkFBbEM7QUFDRCxTQUhJLENBS0w7OztBQUNBLFlBQU1kLFFBQVEsR0FBR3lDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBMUMsZ0JBQVEsQ0FBQ0YsU0FBVCxDQUFtQmdCLEdBQW5CLENBQXVCLHdCQUF2QjtBQUNBLGFBQUt4QixLQUFMLENBQVdzSCxPQUFYLENBQW1CLFVBQUFyRyxJQUFJLEVBQUk7QUFDekIsY0FBTVYsS0FBSyxHQUFHNEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQTdDLGVBQUssQ0FBQ0YsT0FBTixDQUFjcUYsS0FBZCxHQUFzQnpFLElBQUksQ0FBQ2dGLFNBQTNCO0FBQ0ExRixlQUFLLENBQUNGLE9BQU4sQ0FBYytHLEtBQWQsR0FBc0JuRyxJQUFJLENBQUM4SCxZQUFMLENBQWtCLE9BQWxCLENBQXRCO0FBQ0F4SSxlQUFLLENBQUMwRixTQUFOLEdBQWtCaEYsSUFBSSxDQUFDZ0YsU0FBdkI7QUFDQTFGLGVBQUssQ0FBQ0MsU0FBTixDQUFnQmdCLEdBQWhCLENBQW9CLHFCQUFwQjtBQUNBZCxrQkFBUSxDQUFDNkMsV0FBVCxDQUFxQmhELEtBQXJCO0FBQ0QsU0FQRCxFQVJLLENBaUJMOztBQUNBLGFBQUtaLENBQUwsQ0FBT2lLLE1BQVAsR0FBZ0J6RyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxhQUFLekQsQ0FBTCxDQUFPaUssTUFBUCxDQUFjdEcsWUFBZCxDQUEyQixJQUEzQixFQUFpQyxLQUFLK0MsSUFBdEM7QUFDQSxhQUFLMUcsQ0FBTCxDQUFPaUssTUFBUCxDQUFjcEosU0FBZCxDQUF3QmdCLEdBQXhCLENBQTRCLHVCQUE1Qjs7QUFDQSxZQUFJLENBQUMsS0FBS3dILFNBQVYsRUFBcUI7QUFDbkIsZUFBS3JKLENBQUwsQ0FBT2lLLE1BQVAsQ0FBYzFELFNBQWQsR0FBMEIsS0FBS2tELFlBQS9CO0FBQ0QsU0F2QkksQ0F5Qkw7OztBQUNBLFlBQU1TLFVBQVUsR0FBRzFHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBeUcsa0JBQVUsQ0FBQ3JKLFNBQVgsQ0FBcUJnQixHQUFyQixDQUF5QiwwQkFBekI7QUFDQXFJLGtCQUFVLENBQUN2RyxZQUFYLENBQXdCLGlCQUF4QixFQUEyQyxLQUFLK0MsSUFBaEQ7QUFDQXdELGtCQUFVLENBQUN0RyxXQUFYLENBQXVCN0MsUUFBdkI7QUFDQSxhQUFLZixDQUFMLENBQU9pSixZQUFQLENBQW9CMUMsU0FBcEIsR0FBZ0MsRUFBaEM7QUFDQSxhQUFLdkcsQ0FBTCxDQUFPaUosWUFBUCxDQUFvQnJGLFdBQXBCLENBQWdDLEtBQUs1RCxDQUFMLENBQU9pSyxNQUF2QztBQUNBLGFBQUtqSyxDQUFMLENBQU9pSixZQUFQLENBQW9CckYsV0FBcEIsQ0FBZ0NzRyxVQUFoQyxFQWhDSyxDQWtDTDs7QUFDQSxhQUFLbEssQ0FBTCxDQUFPeUcsS0FBUCxHQUFlakQsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWY7QUFDQSxhQUFLekQsQ0FBTCxDQUFPeUcsS0FBUCxDQUFhOUMsWUFBYixDQUEwQixNQUExQixFQUFrQyxLQUFLK0MsSUFBdkM7QUFDQSxhQUFLMUcsQ0FBTCxDQUFPeUcsS0FBUCxDQUFhdEYsS0FBYixDQUFtQndGLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0EsYUFBSzNHLENBQUwsQ0FBT2lKLFlBQVAsQ0FBb0JyRixXQUFwQixDQUFnQyxLQUFLNUQsQ0FBTCxDQUFPeUcsS0FBdkM7QUFFQSxhQUFLekcsQ0FBTCxDQUFPSyxLQUFQLEdBQWVDLEtBQUssQ0FBQ0MsSUFBTixDQUNiLEtBQUtQLENBQUwsQ0FBT2lKLFlBQVAsQ0FBb0J6SSxnQkFBcEIsQ0FBcUMsc0JBQXJDLENBRGEsQ0FBZixDQXhDSyxDQTBDSDtBQUVGOztBQUNBLFlBQUksS0FBSzZJLFNBQVQsRUFBb0I7QUFDbEIsZUFBS3JKLENBQUwsQ0FBT21LLE1BQVAsR0FBZ0IzRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBaEI7QUFDQSxlQUFLekQsQ0FBTCxDQUFPbUssTUFBUCxDQUFjMUMsS0FBZCxHQUFzQixLQUFLZ0MsWUFBM0I7QUFDQSxlQUFLekosQ0FBTCxDQUFPaUssTUFBUCxDQUFjckcsV0FBZCxDQUEwQixLQUFLNUQsQ0FBTCxDQUFPbUssTUFBakM7QUFDRDtBQUNGOztBQUVELFdBQUtDLE1BQUw7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFDRyxDQUFDLEtBQUtiLFVBQU4sSUFBb0JsSCxNQUFNLENBQUNnQixVQUFQLENBQWtCLG9CQUFsQixFQUF3Q0MsT0FBN0QsSUFDQSxLQUFLaUcsVUFGUCxFQUdFO0FBQ0EsYUFBS3ZKLENBQUwsQ0FBT2lLLE1BQVAsQ0FBY3hJLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDNUMsY0FBSSxLQUFJLENBQUN6QixDQUFMLENBQU9pSixZQUFQLENBQW9CcEksU0FBcEIsQ0FBOEJDLFFBQTlCLENBQXVDLHFCQUF2QyxDQUFKLEVBQW1FO0FBQ2pFLGlCQUFJLENBQUNkLENBQUwsQ0FBT2lKLFlBQVAsQ0FBb0JwSSxTQUFwQixDQUE4QmUsTUFBOUIsQ0FBcUMscUJBQXJDOztBQUNBLGlCQUFJLENBQUM1QixDQUFMLENBQU9pSixZQUFQLENBQW9CcEksU0FBcEIsQ0FBOEJlLE1BQTlCLENBQXFDLHVCQUFyQztBQUNELFdBSEQsTUFHTztBQUNMLGlCQUFJLENBQUM1QixDQUFMLENBQU9pSixZQUFQLENBQW9CcEksU0FBcEIsQ0FBOEJnQixHQUE5QixDQUFrQyxxQkFBbEM7O0FBQ0ErQyxzQkFBVSxDQUFDLFlBQU07QUFDZixtQkFBSSxDQUFDNUUsQ0FBTCxDQUFPaUosWUFBUCxDQUFvQnBJLFNBQXBCLENBQThCd0osTUFBOUIsQ0FBcUMsdUJBQXJDO0FBQ0QsYUFGUyxFQUVQLEdBRk8sQ0FBVjtBQUdEO0FBQ0YsU0FWRDs7QUFZQSxZQUFJLEtBQUtoQixTQUFULEVBQW9CO0FBQ2xCLGVBQUtySixDQUFMLENBQU9tSyxNQUFQLENBQWMxSSxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxVQUFBQyxLQUFLLEVBQUk7QUFDL0NBLGlCQUFLLENBQUM4RixlQUFOOztBQUNBLGlCQUFJLENBQUN4SCxDQUFMLENBQU9pSixZQUFQLENBQW9CcEksU0FBcEIsQ0FBOEJnQixHQUE5QixDQUFrQyxxQkFBbEM7O0FBRUErQyxzQkFBVSxDQUFDLFlBQU07QUFDZixtQkFBSSxDQUFDNUUsQ0FBTCxDQUFPaUosWUFBUCxDQUFvQnBJLFNBQXBCLENBQThCZ0IsR0FBOUIsQ0FBa0MsdUJBQWxDO0FBQ0QsYUFGUyxFQUVQLEdBRk8sQ0FBVjtBQUdELFdBUEQ7QUFRRDs7QUFFRCxhQUFLN0IsQ0FBTCxDQUFPSyxLQUFQLENBQWFzSCxPQUFiLENBQXFCLFVBQUEvRyxLQUFLLEVBQUk7QUFDNUJBLGVBQUssQ0FBQ2EsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtBQUNwQyxpQkFBSSxDQUFDNkksV0FBTCxDQUFpQjFKLEtBQWpCO0FBQ0QsV0FGRDtBQUdELFNBSkQ7O0FBTUEsWUFBSSxLQUFLeUksU0FBVCxFQUFvQjtBQUNsQixlQUFLckosQ0FBTCxDQUFPbUssTUFBUCxDQUFjMUksZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUM1QyxpQkFBSSxDQUFDekIsQ0FBTCxDQUFPbUssTUFBUCxDQUFjMUMsS0FBZCxHQUFzQixFQUF0Qjs7QUFDQSxpQkFBSSxDQUFDekgsQ0FBTCxDQUFPbUssTUFBUCxDQUFjeEcsWUFBZCxDQUEyQixhQUEzQixFQUEwQyxLQUFJLENBQUMrRixZQUEvQzs7QUFDQSxpQkFBSSxDQUFDMUosQ0FBTCxDQUFPSyxLQUFQLENBQWFzSCxPQUFiLENBQXFCLFVBQUEvRyxLQUFLLEVBQUk7QUFDNUIsa0JBQU0ySixRQUFRLEdBQUczSixLQUFqQjtBQUNBMkosc0JBQVEsQ0FBQ3BKLEtBQVQsQ0FBZXdGLE9BQWYsR0FBeUIsT0FBekI7QUFDRCxhQUhEO0FBSUQsV0FQRDtBQVFBLGVBQUszRyxDQUFMLENBQU9tSyxNQUFQLENBQWMxSSxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzVDLGlCQUFJLENBQUN6QixDQUFMLENBQU9LLEtBQVAsQ0FBYXNILE9BQWIsQ0FBcUIsVUFBQS9HLEtBQUssRUFBSTtBQUM1QixrQkFBSUEsS0FBSyxDQUFDMEYsU0FBTixDQUFnQmtFLFdBQWhCLEdBQThCQyxRQUE5QixDQUF1QyxLQUFJLENBQUN6SyxDQUFMLENBQU9tSyxNQUFQLENBQWMxQyxLQUFyRCxDQUFKLEVBQWlFO0FBQy9ELG9CQUFNOEMsUUFBUSxHQUFHM0osS0FBakI7QUFDQTJKLHdCQUFRLENBQUNwSixLQUFULENBQWV3RixPQUFmLEdBQXlCLE9BQXpCO0FBQ0QsZUFIRCxNQUdPO0FBQ0wsb0JBQU00RCxTQUFRLEdBQUczSixLQUFqQjtBQUNBMkoseUJBQVEsQ0FBQ3BKLEtBQVQsQ0FBZXdGLE9BQWYsR0FBeUIsTUFBekI7QUFDRDtBQUNGLGFBUkQ7QUFTRCxXQVZEO0FBV0Q7O0FBRURuRCxnQkFBUSxDQUFDL0IsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQUMsS0FBSyxFQUFJO0FBQzFDLGNBQUksQ0FBQyxLQUFJLENBQUMxQixDQUFMLENBQU9pSixZQUFQLENBQW9CbkksUUFBcEIsQ0FBNkJZLEtBQUssQ0FBQ0MsTUFBbkMsQ0FBTCxFQUFpRDtBQUMvQyxpQkFBSSxDQUFDM0IsQ0FBTCxDQUFPaUosWUFBUCxDQUFvQnBJLFNBQXBCLENBQThCZSxNQUE5QixDQUFxQyxxQkFBckM7O0FBRUEsaUJBQUksQ0FBQzVCLENBQUwsQ0FBT2lKLFlBQVAsQ0FBb0JwSSxTQUFwQixDQUE4QmUsTUFBOUIsQ0FBcUMsdUJBQXJDOztBQUVBLGdCQUFJLEtBQUksQ0FBQ3lILFNBQVQsRUFBb0I7QUFDbEIsa0JBQUksS0FBSSxDQUFDckosQ0FBTCxDQUFPbUssTUFBUCxDQUFjMUMsS0FBZCxLQUF3QixFQUE1QixFQUFnQztBQUM5QixxQkFBSSxDQUFDekgsQ0FBTCxDQUFPeUcsS0FBUCxDQUFhZ0IsS0FBYixHQUFxQixFQUFyQjtBQUNBLHFCQUFJLENBQUN6SCxDQUFMLENBQU9tSyxNQUFQLENBQWMxQyxLQUFkLEdBQXNCLEtBQUksQ0FBQ2lDLFlBQTNCO0FBQ0QsZUFIRCxNQUdPO0FBQ0wscUJBQUksQ0FBQzFKLENBQUwsQ0FBT21LLE1BQVAsQ0FBYzFDLEtBQWQsR0FBc0IsS0FBSSxDQUFDaUMsWUFBM0I7QUFDRDtBQUNGO0FBQ0Y7QUFDRixTQWZEO0FBZ0JEOztBQUVEckgsWUFBTSxDQUFDWixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDLGFBQUksQ0FBQzBILFVBQUw7QUFDRCxPQUZEO0FBR0Q7OztnQ0FFV3ZJLEssRUFBTztBQUNqQixVQUFJLEtBQUt5SSxTQUFULEVBQW9CO0FBQ2xCLGFBQUtySixDQUFMLENBQU9tSyxNQUFQLENBQWMxQyxLQUFkLEdBQXNCN0csS0FBSyxDQUFDMEYsU0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLdEcsQ0FBTCxDQUFPaUssTUFBUCxDQUFjM0QsU0FBZCxHQUEwQjFGLEtBQUssQ0FBQzBGLFNBQWhDO0FBQ0Q7O0FBRUQsV0FBS3RHLENBQUwsQ0FBT3lHLEtBQVAsQ0FBYWdCLEtBQWIsR0FBcUI3RyxLQUFLLENBQUN3SSxZQUFOLENBQW1CLE9BQW5CLENBQXJCO0FBQ0EsV0FBS00sWUFBTCxHQUFvQjlJLEtBQUssQ0FBQzBGLFNBQTFCO0FBQ0EsV0FBS3RHLENBQUwsQ0FBT2lKLFlBQVAsQ0FBb0JwSSxTQUFwQixDQUE4QmUsTUFBOUIsQ0FBcUMscUJBQXJDO0FBQ0EsV0FBSzVCLENBQUwsQ0FBT2lKLFlBQVAsQ0FBb0JwSSxTQUFwQixDQUE4QmUsTUFBOUIsQ0FBcUMsdUJBQXJDO0FBQ0Q7Ozs7OztBQUdZbUgsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9NQTs7OztJQUtNMkIsUTtBQUNKLG9CQUFZQyxTQUFaLEVBQXVCO0FBQUE7O0FBQ3JCLFNBQUszSyxDQUFMLEdBQVMsRUFBVCxDQURxQixDQUNUOztBQUNaLFNBQUtBLENBQUwsQ0FBTzRLLFFBQVAsR0FBa0JELFNBQWxCLENBRnFCLENBRU87O0FBRTVCLFNBQUt4SyxXQUFMOztBQUNBLFNBQUtDLFdBQUw7QUFDRDtBQUVEOzs7Ozs7O2tDQUdjO0FBQ1osV0FBS21KLFVBQUwsR0FBa0IsS0FBS3ZKLENBQUwsQ0FBTzRLLFFBQVAsQ0FBZ0JsSyxPQUFoQixDQUF3QjhJLE1BQTFDLENBRFksQ0FDcUM7O0FBQ2pELFdBQUs5QyxJQUFMLEdBQVksS0FBSzFHLENBQUwsQ0FBTzRLLFFBQVAsQ0FBZ0JsSyxPQUFoQixDQUF3QmdHLElBQXBDO0FBQ0EsV0FBS3JHLEtBQUwsR0FDRSxLQUFLbUMsSUFBTCxLQUFjLE1BQWQsR0FBdUJxSSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLOUssQ0FBTCxDQUFPNEssUUFBUCxDQUFnQmxLLE9BQWhCLENBQXdCTCxLQUFuQyxDQUF2QixHQUFtRSxJQURyRSxDQUhZLENBSThEO0FBQzNFO0FBRUQ7Ozs7OztrQ0FHYztBQUNaLFdBQUtMLENBQUwsQ0FBT0ssS0FBUCxHQUFlQyxLQUFLLENBQUNDLElBQU4sQ0FDYixLQUFLUCxDQUFMLENBQU80SyxRQUFQLENBQWdCcEssZ0JBQWhCLENBQWlDLGlCQUFqQyxDQURhLENBQWYsQ0FEWSxDQUtaOztBQUNBLFVBQU1PLFFBQVEsR0FBR3lDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBMUMsY0FBUSxDQUFDRixTQUFULENBQW1CZ0IsR0FBbkIsQ0FBdUIsbUJBQXZCOztBQVBZLGlEQVNRLEtBQUs3QixDQUFMLENBQU9LLEtBVGY7QUFBQTs7QUFBQTtBQVNaLDREQUFrQztBQUFBLGNBQXZCTyxLQUF1QjtBQUNoQ0csa0JBQVEsQ0FBQzZDLFdBQVQsQ0FBcUJoRCxLQUFyQjtBQUNELFNBWFcsQ0FhWjs7QUFiWTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNaLFdBQUtaLENBQUwsQ0FBT2lLLE1BQVAsR0FBZ0J6RyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxXQUFLekQsQ0FBTCxDQUFPaUssTUFBUCxDQUFjcEosU0FBZCxDQUF3QmdCLEdBQXhCLENBQTRCLGtCQUE1QjtBQUNBLFdBQUs3QixDQUFMLENBQU9pSyxNQUFQLENBQWMxRCxTQUFkLEdBQTBCLEtBQUt2RyxDQUFMLENBQU80SyxRQUFQLENBQWdCbEssT0FBaEIsQ0FBd0JxRixLQUFsRDtBQUNBLFdBQUsvRixDQUFMLENBQU9pSyxNQUFQLENBQWN0RyxZQUFkLENBQTJCLElBQTNCLEVBQWlDLEtBQUsrQyxJQUF0QyxFQWpCWSxDQW1CWjs7QUFDQSxVQUFNd0QsVUFBVSxHQUFHMUcsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0F5RyxnQkFBVSxDQUFDckosU0FBWCxDQUFxQmdCLEdBQXJCLENBQXlCLHFCQUF6QjtBQUNBcUksZ0JBQVUsQ0FBQ3RHLFdBQVgsQ0FBdUI3QyxRQUF2QjtBQUNBbUosZ0JBQVUsQ0FBQ3ZHLFlBQVgsQ0FBd0IsaUJBQXhCLEVBQTJDLEtBQUsrQyxJQUFoRDtBQUNBLFdBQUsxRyxDQUFMLENBQU80SyxRQUFQLENBQWdCckUsU0FBaEIsR0FBNEIsRUFBNUI7QUFDQSxXQUFLdkcsQ0FBTCxDQUFPNEssUUFBUCxDQUFnQmhILFdBQWhCLENBQTRCLEtBQUs1RCxDQUFMLENBQU9pSyxNQUFuQztBQUNBLFdBQUtqSyxDQUFMLENBQU80SyxRQUFQLENBQWdCaEgsV0FBaEIsQ0FBNEJzRyxVQUE1Qjs7QUFFQSxXQUFLM0ksT0FBTDtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUixXQUFLdkIsQ0FBTCxDQUFPaUssTUFBUCxDQUFjeEksZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUM1QyxhQUFJLENBQUN6QixDQUFMLENBQU80SyxRQUFQLENBQWdCL0osU0FBaEIsQ0FBMEJ3SixNQUExQixDQUFpQyxnQkFBakM7QUFDRCxPQUZEO0FBSUE3RyxjQUFRLENBQUMvQixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFBQyxLQUFLLEVBQUk7QUFDMUMsWUFBSSxDQUFDLEtBQUksQ0FBQzFCLENBQUwsQ0FBTzRLLFFBQVAsQ0FBZ0I5SixRQUFoQixDQUF5QlksS0FBSyxDQUFDQyxNQUEvQixDQUFMLEVBQTZDO0FBQzNDLGVBQUksQ0FBQzNCLENBQUwsQ0FBTzRLLFFBQVAsQ0FBZ0IvSixTQUFoQixDQUEwQmUsTUFBMUIsQ0FBaUMsZ0JBQWpDO0FBQ0Q7QUFDRixPQUpEO0FBTUFTLFlBQU0sQ0FBQ1osZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0QyxhQUFJLENBQUNyQixXQUFMO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHWXNLLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7Ozs7SUFLTUssYztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtoTCxDQUFMLEdBQVMsRUFBVCxDQURpQixDQUNMOztBQUNaLFNBQUtBLENBQUwsQ0FBT2lMLElBQVAsR0FBY0QsS0FBZCxDQUZpQixDQUVHOztBQUVwQixTQUFLN0ssV0FBTDs7QUFDQSxTQUFLRCxRQUFMOztBQUNBLFNBQUtFLFdBQUw7QUFDRDtBQUVEOzs7Ozs7O2tDQUdjO0FBQ1osV0FBSzhLLFNBQUwsR0FBaUIsQ0FBQyxDQUFDLEtBQUtsTCxDQUFMLENBQU9pTCxJQUFQLENBQVl2SyxPQUFaLENBQW9CeUssU0FBdkM7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLENBQUMsQ0FBQyxLQUFLcEwsQ0FBTCxDQUFPaUwsSUFBUCxDQUFZdkssT0FBWixDQUFvQjJLLFFBQXRDO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNEO0FBRUQ7Ozs7OzsrQkFHVztBQUNULFdBQUt0TCxDQUFMLENBQU91TCxXQUFQLEdBQXFCakwsS0FBSyxDQUFDQyxJQUFOLENBQ25CLEtBQUtQLENBQUwsQ0FBT2lMLElBQVAsQ0FBWXpLLGdCQUFaLENBQTZCLGNBQTdCLENBRG1CLENBQXJCO0FBR0Q7QUFFRDs7Ozs7O2tDQUdjO0FBQ1osV0FBS2UsT0FBTDtBQUNEOzs7OEJBRVM7QUFBQTs7QUFBQTtBQUNILFlBQU1pSyxXQUFXLGtCQUFqQjtBQUdILFlBQU1DLE1BQU0sR0FBR0QsV0FBVyxDQUFDeEssYUFBWixDQUEwQixPQUExQixDQUFmO0FBRUF5SyxjQUFNLENBQUNoSyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3BDLGNBQUksQ0FBQyxLQUFJLENBQUN5SixTQUFWLEVBQXFCO0FBQ25CLGlCQUFJLENBQUNRLFFBQUwsQ0FBY0YsV0FBZDtBQUNEO0FBQ0YsU0FKRDtBQU5NOztBQUNSLHFDQUEwQmxMLEtBQUssQ0FBQ0MsSUFBTixDQUN4QixLQUFLUCxDQUFMLENBQU9pTCxJQUFQLENBQVl6SyxnQkFBWixDQUE2QixjQUE3QixDQUR3QixDQUExQixpQ0FFRztBQUFBO0FBUUY7O0FBRUQsVUFBSSxDQUFDLEtBQUs0SyxRQUFWLEVBQW9CO0FBQ2xCLGFBQUtwTCxDQUFMLENBQU9pTCxJQUFQLENBQVl4SixnQkFBWixDQUE2QixRQUE3QixFQUF1QyxVQUFBQyxLQUFLLEVBQUk7QUFDOUMsZUFBSSxDQUFDNEosU0FBTCxHQUFpQixLQUFqQjs7QUFDQSwyQ0FBMEJoTCxLQUFLLENBQUNDLElBQU4sQ0FDeEIsS0FBSSxDQUFDUCxDQUFMLENBQU9pTCxJQUFQLENBQVl6SyxnQkFBWixDQUE2QixjQUE3QixDQUR3QixDQUExQixvQ0FFRztBQUZFLGdCQUFNZ0wsV0FBVyxvQkFBakI7QUFHSCxnQkFBSSxDQUFDLEtBQUksQ0FBQ0UsUUFBTCxDQUFjRixXQUFkLENBQUwsRUFBaUMsS0FBSSxDQUFDRixTQUFMLEdBQWlCLElBQWpCO0FBQ2xDOztBQUVELGNBQUksS0FBSSxDQUFDQSxTQUFULEVBQW9CNUosS0FBSyxDQUFDaUssY0FBTjtBQUNyQixTQVREO0FBVUQ7QUFDRjs7OzZCQUVRSCxXLEVBQWE7QUFDcEIsVUFBTUMsTUFBTSxHQUFHRCxXQUFXLENBQUN4SyxhQUFaLENBQTBCLE9BQTFCLENBQWY7QUFDQSxVQUFNeUcsS0FBSyxHQUFHZ0UsTUFBTSxDQUFDaEUsS0FBckI7QUFDQSxVQUFNbUUsU0FBUyxHQUFHSCxNQUFNLENBQUNyQyxZQUFQLENBQW9CLE1BQXBCLENBQWxCLENBSG9CLENBS3BCOztBQUNBLFVBQU15QyxLQUFLLEdBQUcsRUFBZDtBQUNBLFVBQUlMLFdBQVcsQ0FBQzlLLE9BQVosQ0FBb0JvTCxRQUF4QixFQUNFRCxLQUFLLENBQUNDLFFBQU4sR0FBaUJOLFdBQVcsQ0FBQzlLLE9BQVosQ0FBb0JvTCxRQUFyQztBQUNGLFVBQUlOLFdBQVcsQ0FBQzlLLE9BQVosQ0FBb0JxTCxTQUF4QixFQUNFRixLQUFLLENBQUNHLFNBQU4sR0FBa0JqSSxRQUFRLENBQUN5SCxXQUFXLENBQUM5SyxPQUFaLENBQW9CcUwsU0FBckIsQ0FBMUI7QUFDRixVQUFJUCxXQUFXLENBQUM5SyxPQUFaLENBQW9CdUwsU0FBeEIsRUFDRUosS0FBSyxDQUFDSyxTQUFOLEdBQWtCbkksUUFBUSxDQUFDeUgsV0FBVyxDQUFDOUssT0FBWixDQUFvQnVMLFNBQXJCLENBQTFCO0FBQ0YsVUFBSVQsV0FBVyxDQUFDOUssT0FBWixDQUFvQnlMLGVBQXhCLEVBQ0VOLEtBQUssQ0FBQ08sZUFBTixHQUF3QlosV0FBVyxDQUFDOUssT0FBWixDQUFvQnlMLGVBQTVDO0FBQ0YsVUFBSVgsV0FBVyxDQUFDOUssT0FBWixDQUFvQjJMLGNBQXhCLEVBQ0VSLEtBQUssQ0FBQ1MsY0FBTixHQUF1QmQsV0FBVyxDQUFDOUssT0FBWixDQUFvQjJMLGNBQTNDO0FBQ0YsVUFBSWIsV0FBVyxDQUFDOUssT0FBWixDQUFvQjZMLGNBQXhCLEVBQ0VWLEtBQUssQ0FBQ1csY0FBTixHQUF1QmhCLFdBQVcsQ0FBQzlLLE9BQVosQ0FBb0I2TCxjQUEzQztBQUNGLFVBQUlmLFdBQVcsQ0FBQzlLLE9BQVosQ0FBb0IrTCxZQUF4QixFQUNFWixLQUFLLENBQUNhLFlBQU4sR0FBcUJsQixXQUFXLENBQUM5SyxPQUFaLENBQW9CK0wsWUFBekM7O0FBRUYsVUFBSWIsU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQ3hCLFlBQUlDLEtBQUssQ0FBQ0MsUUFBTixJQUFrQixDQUFDckUsS0FBdkIsRUFBOEI7QUFDNUIsZUFBS2tGLFFBQUwsQ0FBY25CLFdBQWQsRUFBMkJLLEtBQUssQ0FBQ08sZUFBTixJQUF5QixVQUFwRDtBQUNBLGlCQUFPLEtBQVA7QUFDRCxTQUhELE1BR08sSUFBSVAsS0FBSyxDQUFDRyxTQUFOLElBQW1CdkUsS0FBSyxDQUFDeEUsTUFBTixHQUFlNEksS0FBSyxDQUFDRyxTQUE1QyxFQUF1RDtBQUM1RCxlQUFLVyxRQUFMLENBQWNuQixXQUFkLEVBQTJCSyxLQUFLLENBQUNTLGNBQU4sSUFBd0IsU0FBbkQ7QUFDQSxpQkFBTyxLQUFQO0FBQ0QsU0FITSxNQUdBLElBQUlULEtBQUssQ0FBQ0ssU0FBTixJQUFtQnpFLEtBQUssQ0FBQ3hFLE1BQU4sR0FBZTRJLEtBQUssQ0FBQ0ssU0FBNUMsRUFBdUQ7QUFDNUQsZUFBS1MsUUFBTCxDQUFjbkIsV0FBZCxFQUEyQkssS0FBSyxDQUFDVyxjQUFOLElBQXdCLFNBQW5EO0FBQ0EsaUJBQU8sS0FBUDtBQUNELFNBSE0sTUFHQTtBQUNMLGVBQUtJLFVBQUwsQ0FBZ0JwQixXQUFoQjtBQUNBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BZEQsTUFjTyxJQUFJSSxTQUFTLEtBQUssUUFBbEIsRUFBNEI7QUFDakMsWUFBSUMsS0FBSyxDQUFDQyxRQUFOLElBQWtCLENBQUNyRSxLQUF2QixFQUE4QjtBQUM1QixlQUFLa0YsUUFBTCxDQUFjbkIsV0FBZCxFQUEyQkssS0FBSyxDQUFDTyxlQUFOLElBQXlCLFVBQXBEO0FBQ0EsaUJBQU8sS0FBUDtBQUNELFNBSEQsTUFHTyxJQUFJUCxLQUFLLENBQUNHLFNBQU4sSUFBbUJ2RSxLQUFLLEdBQUdvRSxLQUFLLENBQUNHLFNBQXJDLEVBQWdEO0FBQ3JELGVBQUtXLFFBQUwsQ0FBY25CLFdBQWQsRUFBMkJLLEtBQUssQ0FBQ1MsY0FBTixJQUF3QixTQUFuRDtBQUNBLGlCQUFPLEtBQVA7QUFDRCxTQUhNLE1BR0EsSUFBSVQsS0FBSyxDQUFDSyxTQUFOLElBQW1CekUsS0FBSyxHQUFHb0UsS0FBSyxDQUFDSyxTQUFyQyxFQUFnRDtBQUNyRCxlQUFLUyxRQUFMLENBQWNuQixXQUFkLEVBQTJCSyxLQUFLLENBQUNXLGNBQU4sSUFBd0IsU0FBbkQ7QUFDQSxpQkFBTyxLQUFQO0FBQ0QsU0FITSxNQUdBO0FBQ0wsZUFBS0ksVUFBTCxDQUFnQnBCLFdBQWhCO0FBQ0EsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FkTSxNQWNBLElBQUlJLFNBQVMsS0FBSyxPQUFsQixFQUEyQjtBQUNoQyxZQUFJQyxLQUFLLENBQUNDLFFBQU4sSUFBa0IsQ0FBQ3JFLEtBQXZCLEVBQThCO0FBQzVCLGVBQUtrRixRQUFMLENBQWNuQixXQUFkLEVBQTJCSyxLQUFLLENBQUNPLGVBQU4sSUFBeUIsVUFBcEQ7QUFDQSxpQkFBTyxLQUFQO0FBQ0QsU0FIRCxNQUdPLElBQ0wsQ0FBQzNFLEtBQUssQ0FBQ29GLEtBQU4sQ0FDQyx3SkFERCxDQURJLEVBSUw7QUFDQSxlQUFLRixRQUFMLENBQWNuQixXQUFkLEVBQTJCSyxLQUFLLENBQUNhLFlBQU4sSUFBc0IsbUJBQWpEO0FBQ0EsaUJBQU8sS0FBUDtBQUNELFNBUE0sTUFPQTtBQUNMLGVBQUtFLFVBQUwsQ0FBZ0JwQixXQUFoQjtBQUNBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BZk0sTUFlQSxJQUFJSSxTQUFTLEtBQUssS0FBbEIsRUFBeUI7QUFDOUIsWUFBSUMsS0FBSyxDQUFDQyxRQUFOLElBQWtCLENBQUNyRSxLQUF2QixFQUE4QjtBQUM1QixlQUFLa0YsUUFBTCxDQUFjbkIsV0FBZCxFQUEyQkssS0FBSyxDQUFDTyxlQUFOLElBQXlCLFVBQXBEO0FBQ0EsaUJBQU8sS0FBUDtBQUNELFNBSEQsTUFHTyxJQUNMLENBQUMzRSxLQUFLLENBQUNvRixLQUFOLENBQVksZ0RBQVosQ0FESSxFQUVMO0FBQ0EsZUFBS0YsUUFBTCxDQUFjbkIsV0FBZCxFQUEyQkssS0FBSyxDQUFDYSxZQUFOLElBQXNCLG1CQUFqRDtBQUNBLGlCQUFPLEtBQVA7QUFDRCxTQUxNLE1BS0E7QUFDTCxlQUFLRSxVQUFMLENBQWdCcEIsV0FBaEI7QUFDQSxpQkFBTyxJQUFQO0FBQ0Q7QUFDRjtBQUNGOzs7NkJBRVFBLFcsRUFBYXNCLEssRUFBTztBQUMzQixVQUFJQyxNQUFNLEdBQUd2QixXQUFXLENBQUN4SyxhQUFaLENBQTBCLHFCQUExQixDQUFiOztBQUNBLFVBQUkrTCxNQUFKLEVBQVk7QUFDVkEsY0FBTSxDQUFDekcsU0FBUCxHQUFtQndHLEtBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0xDLGNBQU0sR0FBR3ZKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFUO0FBQ0FzSixjQUFNLENBQUNsTSxTQUFQLENBQWlCZ0IsR0FBakIsQ0FBcUIsb0JBQXJCO0FBQ0FrTCxjQUFNLENBQUN6RyxTQUFQLEdBQW1Cd0csS0FBbkI7QUFDQXRCLG1CQUFXLENBQUM1SCxXQUFaLENBQXdCbUosTUFBeEI7QUFDRDtBQUNGOzs7K0JBRVV2QixXLEVBQWE7QUFDdEIsVUFBTXVCLE1BQU0sR0FBR3ZCLFdBQVcsQ0FBQ3hLLGFBQVosQ0FBMEIscUJBQTFCLENBQWY7O0FBQ0EsVUFBSStMLE1BQUosRUFBWTtBQUNWdkIsbUJBQVcsQ0FBQzNHLFdBQVosQ0FBd0JrSSxNQUF4QjtBQUNEO0FBQ0Y7Ozs7OztBQUdZaEMsNkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLQTs7OztJQUtNaUMsTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBS2hOLENBQUwsR0FBUyxFQUFULENBRFksQ0FDQTs7QUFFWixTQUFLRSxRQUFMOztBQUNBLFNBQUtDLFdBQUw7O0FBQ0EsU0FBS0MsV0FBTDtBQUNEO0FBRUQ7Ozs7Ozs7K0JBR1c7QUFDVCxXQUFLSixDQUFMLENBQU9pTixNQUFQLEdBQWdCekosUUFBUSxDQUFDeEMsYUFBVCxDQUF1QixTQUF2QixDQUFoQixDQURTLENBQ3lDOztBQUNsRCxXQUFLaEIsQ0FBTCxDQUFPdUgsS0FBUCxHQUFlLEtBQUt2SCxDQUFMLENBQU9pTixNQUFQLENBQWNqTSxhQUFkLENBQTRCLHdCQUE1QixDQUFmO0FBQ0EsV0FBS2hCLENBQUwsQ0FBT2tOLElBQVAsR0FBYyxLQUFLbE4sQ0FBTCxDQUFPaU4sTUFBUCxDQUFjak0sYUFBZCxDQUE0Qix1QkFBNUIsQ0FBZDtBQUNBLFdBQUtoQixDQUFMLENBQU9LLEtBQVAsR0FBZUMsS0FBSyxDQUFDQyxJQUFOLENBQ2IsS0FBS1AsQ0FBTCxDQUFPaU4sTUFBUCxDQUFjek0sZ0JBQWQsQ0FBK0IsbUJBQS9CLENBRGEsQ0FBZjtBQUdEO0FBRUQ7Ozs7OztrQ0FHYyxDQUFFO0FBRWhCOzs7Ozs7a0NBR2M7QUFDWixXQUFLZSxPQUFMO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSLFVBQUksQ0FBQ2MsTUFBTSxDQUFDZ0IsVUFBUCxDQUFrQixxQkFBbEIsRUFBeUNDLE9BQTlDLEVBQXVEO0FBQ3JELGFBQUt0RCxDQUFMLENBQU9rTixJQUFQLENBQVl6TCxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO0FBQzFDLGVBQUksQ0FBQ3pCLENBQUwsQ0FBT2lOLE1BQVAsQ0FBY3BNLFNBQWQsQ0FBd0JnQixHQUF4QixDQUE0QixjQUE1QjtBQUNELFNBRkQ7QUFJQSxhQUFLN0IsQ0FBTCxDQUFPdUgsS0FBUCxDQUFhOUYsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUMzQyxlQUFJLENBQUN6QixDQUFMLENBQU9pTixNQUFQLENBQWNwTSxTQUFkLENBQXdCZSxNQUF4QixDQUErQixjQUEvQjtBQUNELFNBRkQ7QUFJQTRCLGdCQUFRLENBQUMvQixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFBQyxLQUFLLEVBQUk7QUFDMUMsY0FBSSxDQUFDLEtBQUksQ0FBQzFCLENBQUwsQ0FBT2lOLE1BQVAsQ0FBY25NLFFBQWQsQ0FBdUJZLEtBQUssQ0FBQ0MsTUFBN0IsQ0FBTCxFQUNFLEtBQUksQ0FBQzNCLENBQUwsQ0FBT2lOLE1BQVAsQ0FBY3BNLFNBQWQsQ0FBd0JlLE1BQXhCLENBQStCLGNBQS9CO0FBQ0gsU0FIRDs7QUFUcUQsbURBY2xDLEtBQUs1QixDQUFMLENBQU9LLEtBZDJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGdCQWMxQ2lCLElBZDBDO0FBZW5ELGdCQUFNNkwsR0FBRyxHQUFHN0wsSUFBSSxDQUFDTixhQUFMLENBQW1CLHNCQUFuQixDQUFaOztBQUNBLGdCQUFJbU0sR0FBSixFQUFTO0FBQ1Asa0JBQU1sSCxNQUFNLEdBQUczRSxJQUFJLENBQUNOLGFBQUwsQ0FBbUIseUJBQW5CLENBQWY7QUFDQSxrQkFBTUksTUFBTSxHQUFHK0wsR0FBRyxDQUFDak0sWUFBbkI7QUFDQWlNLGlCQUFHLENBQUNoTSxLQUFKLENBQVVDLE1BQVYsR0FBbUIsQ0FBbkI7QUFDQStMLGlCQUFHLENBQUNoTSxLQUFKLENBQVV3RSxVQUFWLEdBQXVCLHlCQUF2QjtBQUVBTSxvQkFBTSxDQUFDeEUsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNyQyxvQkFBSTBMLEdBQUcsQ0FBQ3RNLFNBQUosQ0FBY0MsUUFBZCxDQUF1QiwyQkFBdkIsQ0FBSixFQUF5RDtBQUN2RHFNLHFCQUFHLENBQUNoTSxLQUFKLENBQVVDLE1BQVYsR0FBbUIsQ0FBbkI7QUFDQStMLHFCQUFHLENBQUN0TSxTQUFKLENBQWNlLE1BQWQsQ0FBcUIsMkJBQXJCO0FBQ0QsaUJBSEQsTUFHTztBQUNMdUwscUJBQUcsQ0FBQ2hNLEtBQUosQ0FBVUMsTUFBVixhQUFzQkEsTUFBdEI7QUFDQStMLHFCQUFHLENBQUN0TSxTQUFKLENBQWNnQixHQUFkLENBQWtCLDJCQUFsQjtBQUNEO0FBQ0YsZUFSRDtBQVNEO0FBL0JrRDs7QUFjckQsOERBQWlDO0FBQUE7QUFrQmhDO0FBaENvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUN0RDtBQUNGOzs7Ozs7QUFHWW1MLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7Ozs7SUFLTUksVTtBQUNKLHNCQUFZNUIsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLeEwsQ0FBTCxHQUFTLEVBQVQsQ0FEdUIsQ0FDWDs7QUFDWixTQUFLQSxDQUFMLENBQU9xTixVQUFQLEdBQW9CN0IsV0FBcEIsQ0FGdUIsQ0FFUzs7QUFFaEMsU0FBS3BMLFdBQUw7QUFDRDtBQUVEOzs7Ozs7O2tDQUdjO0FBQ1osVUFBTWtOLE9BQU8sR0FBRyxLQUFLdE4sQ0FBTCxDQUFPcU4sVUFBUCxDQUFrQjlHLFNBQWxDO0FBQ0EsVUFBTXhGLFFBQVEsR0FBR3lDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBMUMsY0FBUSxDQUFDRixTQUFULENBQW1CZ0IsR0FBbkIsQ0FBdUIsc0JBQXZCO0FBQ0FkLGNBQVEsQ0FBQ3dGLFNBQVQsR0FBcUIrRyxPQUFyQjtBQUNBLFdBQUt0TixDQUFMLENBQU95RyxLQUFQLEdBQWUxRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZjtBQUNBLFdBQUtoQixDQUFMLENBQU9xTixVQUFQLENBQWtCOUcsU0FBbEIsR0FBOEIsRUFBOUI7QUFDQSxXQUFLdkcsQ0FBTCxDQUFPcU4sVUFBUCxDQUFrQnpKLFdBQWxCLENBQThCN0MsUUFBOUI7O0FBQ0EsV0FBS1EsT0FBTDtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUixXQUFLdkIsQ0FBTCxDQUFPeUcsS0FBUCxDQUFhaEYsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUMzQyxhQUFJLENBQUN6QixDQUFMLENBQU9xTixVQUFQLENBQWtCeE0sU0FBbEIsQ0FBNEJnQixHQUE1QixDQUFnQyxxQkFBaEM7QUFDRCxPQUZEO0FBSUEsV0FBSzdCLENBQUwsQ0FBT3lHLEtBQVAsQ0FBYWhGLGdCQUFiLENBQThCLE1BQTlCLEVBQXNDLFlBQU07QUFDMUMsWUFBSSxDQUFDLEtBQUksQ0FBQ3pCLENBQUwsQ0FBT3lHLEtBQVAsQ0FBYWdCLEtBQWxCLEVBQ0UsS0FBSSxDQUFDekgsQ0FBTCxDQUFPcU4sVUFBUCxDQUFrQnhNLFNBQWxCLENBQTRCZSxNQUE1QixDQUFtQyxxQkFBbkM7QUFDSCxPQUhEO0FBSUQ7Ozs7OztBQUdZd0wseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTs7OztJQUtNRyxLO0FBQ0osaUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS3hOLENBQUwsR0FBUyxFQUFULENBRGtCLENBQ047O0FBQ1osU0FBS0EsQ0FBTCxDQUFPeU4sS0FBUCxHQUFlRCxNQUFmLENBRmtCLENBRUk7O0FBRXRCLFNBQUtyTixXQUFMOztBQUNBLFNBQUtDLFdBQUw7QUFDRDtBQUVEOzs7Ozs7O2tDQUdjLENBQUU7QUFFaEI7Ozs7OztrQ0FHYztBQUNaLFVBQ0VvRCxRQUFRLENBQUN4QyxhQUFULHNDQUMrQixLQUFLaEIsQ0FBTCxDQUFPeU4sS0FBUCxDQUFhL00sT0FBYixDQUFxQitNLEtBRHBELFNBREYsRUFLRSxLQUFLek4sQ0FBTCxDQUFPaUcsTUFBUCxHQUFnQnpDLFFBQVEsQ0FBQ3hDLGFBQVQsc0NBQ2UsS0FBS2hCLENBQUwsQ0FBT3lOLEtBQVAsQ0FBYS9NLE9BQWIsQ0FBcUIrTSxLQURwQyxTQUFoQjtBQUdGLFVBQUksS0FBS3pOLENBQUwsQ0FBT3lOLEtBQVAsQ0FBYXpNLGFBQWIsQ0FBMkIsZUFBM0IsQ0FBSixFQUNFLEtBQUtoQixDQUFMLENBQU91SCxLQUFQLEdBQWUsS0FBS3ZILENBQUwsQ0FBT3lOLEtBQVAsQ0FBYXpNLGFBQWIsQ0FBMkIsZUFBM0IsQ0FBZjs7QUFFRixXQUFLTyxPQUFMO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSaUMsY0FBUSxDQUFDL0IsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQUMsS0FBSyxFQUFJO0FBQzFDLFlBQUksS0FBSSxDQUFDMUIsQ0FBTCxDQUFPeU4sS0FBUCxDQUFhNU0sU0FBYixDQUF1QkMsUUFBdkIsQ0FBZ0MsZUFBaEMsQ0FBSixFQUFzRDtBQUNwRCxjQUNFLENBQUMsS0FBSSxDQUFDZCxDQUFMLENBQU95TixLQUFQLENBQWF6TSxhQUFiLENBQTJCLGlCQUEzQixFQUE4Q0YsUUFBOUMsQ0FBdURZLEtBQUssQ0FBQ0MsTUFBN0QsQ0FESCxFQUVFO0FBQ0EsaUJBQUksQ0FBQzNCLENBQUwsQ0FBT3lOLEtBQVAsQ0FBYTVNLFNBQWIsQ0FBdUJlLE1BQXZCLENBQThCLGVBQTlCO0FBQ0Q7QUFDRjtBQUNGLE9BUkQ7O0FBVUEsVUFBSSxLQUFLNUIsQ0FBTCxDQUFPaUcsTUFBWCxFQUFtQjtBQUNqQixhQUFLakcsQ0FBTCxDQUFPaUcsTUFBUCxDQUFjeEUsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBQUMsS0FBSyxFQUFJO0FBQy9DQSxlQUFLLENBQUM4RixlQUFOOztBQUNBLGVBQUksQ0FBQ3hILENBQUwsQ0FBT3lOLEtBQVAsQ0FBYTVNLFNBQWIsQ0FBdUJnQixHQUF2QixDQUEyQixlQUEzQjtBQUNELFNBSEQ7QUFJRDs7QUFFRCxVQUFJLEtBQUs3QixDQUFMLENBQU91SCxLQUFYLEVBQWtCO0FBQ2hCLGFBQUt2SCxDQUFMLENBQU91SCxLQUFQLENBQWE5RixnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzNDLGVBQUksQ0FBQ3pCLENBQUwsQ0FBT3lOLEtBQVAsQ0FBYTVNLFNBQWIsQ0FBdUJlLE1BQXZCLENBQThCLGVBQTlCO0FBQ0QsU0FGRDtBQUdEO0FBQ0Y7Ozs7OztBQUdZMkwsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0lDL0RNRyxLLEdBQ0osaUJBQWM7QUFBQTs7QUFDWmxLLFVBQVEsQ0FBQy9CLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUFDLEtBQUssRUFBSTtBQUM1QyxRQUFJLENBQUMsY0FBY2lNLElBQWQsQ0FBbUJqTSxLQUFLLENBQUNrTSxHQUF6QixDQUFMLEVBQ0VwSyxRQUFRLENBQUNxSyxJQUFULENBQWNoTixTQUFkLENBQXdCZ0IsR0FBeEIsQ0FBNEIsVUFBNUI7QUFDSCxHQUhEO0FBS0EyQixVQUFRLENBQUMvQixnQkFBVCxDQUEwQixXQUExQixFQUF1QyxZQUFNO0FBQzNDK0IsWUFBUSxDQUFDcUssSUFBVCxDQUFjaE4sU0FBZCxDQUF3QmUsTUFBeEIsQ0FBK0IsVUFBL0I7QUFDRCxHQUZEO0FBR0QsQzs7QUFHWThMLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7OztJQUtNSSxJO0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBSy9OLENBQUwsR0FBUyxFQUFULENBRGlCLENBQ0w7O0FBQ1osU0FBS0EsQ0FBTCxDQUFPZ08sSUFBUCxHQUFjRCxLQUFkLENBRmlCLENBRUc7O0FBRXBCLFNBQUs3TixRQUFMOztBQUNBLFNBQUtDLFdBQUw7O0FBQ0EsU0FBS0MsV0FBTDtBQUNEO0FBRUQ7Ozs7Ozs7K0JBR1c7QUFDVCxXQUFLSixDQUFMLENBQU9pTyxXQUFQLEdBQXFCM04sS0FBSyxDQUFDQyxJQUFOLENBQ25CLEtBQUtQLENBQUwsQ0FBT2dPLElBQVAsQ0FBWXhOLGdCQUFaLENBQTZCLG1CQUE3QixDQURtQixDQUFyQjtBQUdEO0FBRUQ7Ozs7OztrQ0FHYyxDQUFFO0FBRWhCOzs7Ozs7a0NBR2M7QUFDWixXQUFLZSxPQUFMO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUFBLGlEQUNrQixLQUFLdkIsQ0FBTCxDQUFPaU8sV0FEekI7QUFBQTs7QUFBQTtBQUFBO0FBQUEsY0FDR0MsV0FESDs7QUFFTixjQUFNQyxZQUFZLEdBQUcsS0FBSSxDQUFDbk8sQ0FBTCxDQUFPZ08sSUFBUCxDQUFZaE4sYUFBWiwwQ0FDY2tOLFdBQVcsQ0FBQ3hOLE9BQVosQ0FBb0JZLElBRGxDLFNBQXJCOztBQUdBNE0scUJBQVcsQ0FBQ3pNLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07QUFDMUMsZ0JBQUksS0FBSSxDQUFDekIsQ0FBTCxDQUFPZ08sSUFBUCxDQUFZaE4sYUFBWixDQUEwQiwyQkFBMUIsQ0FBSixFQUNFLEtBQUksQ0FBQ2hCLENBQUwsQ0FBT2dPLElBQVAsQ0FDR2hOLGFBREgsQ0FDaUIsMkJBRGpCLEVBRUdILFNBRkgsQ0FFYWUsTUFGYixDQUVvQiwwQkFGcEI7QUFHRixnQkFBSSxLQUFJLENBQUM1QixDQUFMLENBQU9nTyxJQUFQLENBQVloTixhQUFaLENBQTBCLDRCQUExQixDQUFKLEVBQ0UsS0FBSSxDQUFDaEIsQ0FBTCxDQUFPZ08sSUFBUCxDQUNHaE4sYUFESCxDQUNpQiw0QkFEakIsRUFFR0gsU0FGSCxDQUVhZSxNQUZiLENBRW9CLDJCQUZwQjtBQUdGc00sdUJBQVcsQ0FBQ3JOLFNBQVosQ0FBc0JnQixHQUF0QixDQUEwQiwwQkFBMUI7QUFDQXNNLHdCQUFZLENBQUN0TixTQUFiLENBQXVCZ0IsR0FBdkIsQ0FBMkIsMkJBQTNCO0FBQ0QsV0FYRDtBQUxNOztBQUNSLDREQUE4QztBQUFBO0FBZ0I3QztBQWpCTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JUOzs7Ozs7QUFHWWlNLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1NLFdBQVcsR0FBRzlOLEtBQUssQ0FBQ0MsSUFBTixDQUFXaUQsUUFBUSxDQUFDaEQsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBWCxDQUFwQjs7QUFDQSxnQ0FBeUI0TixXQUF6QixrQ0FBc0M7QUFBakMsTUFBTXJPLFVBQVUsbUJBQWhCO0FBQ0gsTUFBSUQsa0RBQUosQ0FBY0MsVUFBZDtBQUNEOztBQUVELElBQU1zTyxVQUFVLEdBQUcvTixLQUFLLENBQUNDLElBQU4sQ0FBV2lELFFBQVEsQ0FBQ2hELGdCQUFULENBQTBCLFdBQTFCLENBQVgsQ0FBbkI7O0FBQ0EsZ0NBQXdCNk4sVUFBeEIsbUNBQW9DO0FBQS9CLE1BQU10TSxTQUFTLG1CQUFmO0FBQ0gsTUFBSUQsaURBQUosQ0FBYUMsU0FBYjtBQUNEOztBQUVELElBQU11TSxZQUFZLEdBQUdoTyxLQUFLLENBQUNDLElBQU4sQ0FBV2lELFFBQVEsQ0FBQ2hELGdCQUFULENBQTBCLGNBQTFCLENBQVgsQ0FBckI7O0FBQ0Esa0NBQTBCOE4sWUFBMUIscUNBQXdDO0FBQW5DLE1BQU16SSxXQUFXLHFCQUFqQjtBQUNILE1BQUlELG1EQUFKLENBQWVDLFdBQWY7QUFDRDs7QUFFRCxJQUFNMEksYUFBYSxHQUFHak8sS0FBSyxDQUFDQyxJQUFOLENBQVdpRCxRQUFRLENBQUNoRCxnQkFBVCxDQUEwQixlQUExQixDQUFYLENBQXRCOztBQUNBLG1DQUEyQitOLGFBQTNCLHNDQUEwQztBQUFyQyxNQUFNdEcsWUFBWSxzQkFBbEI7QUFDSCxNQUFJRCxvREFBSixDQUFnQkMsWUFBaEI7QUFDRDs7QUFFRCxJQUFNdUcsY0FBYyxHQUFHbE8sS0FBSyxDQUFDQyxJQUFOLENBQVdpRCxRQUFRLENBQUNoRCxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBWCxDQUF2Qjs7QUFDQSxvQ0FBNEJnTyxjQUE1Qix1Q0FBNEM7QUFBdkMsTUFBTXhGLGFBQWEsdUJBQW5CO0FBQ0gsTUFBSUQscURBQUosQ0FBaUJDLGFBQWpCO0FBQ0Q7O0FBRUQsSUFBTXlGLFVBQVUsR0FBR25PLEtBQUssQ0FBQ0MsSUFBTixDQUFXaUQsUUFBUSxDQUFDaEQsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBWCxDQUFuQjs7QUFDQSxnQ0FBd0JpTyxVQUF4QixtQ0FBb0M7QUFBL0IsTUFBTTlELFNBQVMsbUJBQWY7QUFDSCxNQUFJRCxpREFBSixDQUFhQyxTQUFiO0FBQ0Q7O0FBRUQsSUFBSW5ILFFBQVEsQ0FBQ3hDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBSixFQUF1QyxJQUFJZ00sK0NBQUo7QUFFdkMsSUFBTTBCLFlBQVksR0FBR3BPLEtBQUssQ0FBQ0MsSUFBTixDQUFXaUQsUUFBUSxDQUFDaEQsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBWCxDQUFyQjs7QUFDQSxrQ0FBMEJrTyxZQUExQixxQ0FBd0M7QUFBbkMsTUFBTWxELFdBQVcscUJBQWpCO0FBQ0gsTUFBSTRCLG1EQUFKLENBQWU1QixXQUFmO0FBQ0Q7O0FBRUQsSUFBTW1ELE1BQU0sR0FBR3JPLEtBQUssQ0FBQ0MsSUFBTixDQUFXaUQsUUFBUSxDQUFDaEQsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBWCxDQUFmOztBQUNBLDRCQUFvQm1PLE1BQXBCLCtCQUE0QjtBQUF2QixNQUFNM0QsS0FBSyxlQUFYO0FBQ0gsTUFBSUQsdURBQUosQ0FBbUJDLEtBQW5CO0FBQ0Q7O0FBRUQsSUFBTTRELE9BQU8sR0FBR3RPLEtBQUssQ0FBQ0MsSUFBTixDQUFXaUQsUUFBUSxDQUFDaEQsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBWCxDQUFoQjs7QUFDQSw2QkFBcUJvTyxPQUFyQixnQ0FBOEI7QUFBekIsTUFBTXBCLE1BQU0sZ0JBQVo7QUFDSCxNQUFJRCwrQ0FBSixDQUFVQyxNQUFWO0FBQ0Q7O0FBRUQsSUFBSUUsK0NBQUo7QUFFQSxJQUFNSyxLQUFLLEdBQUd6TixLQUFLLENBQUNDLElBQU4sQ0FBV2lELFFBQVEsQ0FBQ2hELGdCQUFULENBQTBCLE9BQTFCLENBQVgsQ0FBZDs7QUFDQSw0QkFBbUJ1TixLQUFuQixnQ0FBMEI7QUFBckIsTUFBTWMsSUFBSSxlQUFWO0FBQ0gsTUFBSWYsOENBQUosQ0FBU2UsSUFBVDtBQUNELEM7Ozs7Ozs7Ozs7O0FDbEVELElBQUksQ0FBQ3ZPLEtBQUssQ0FBQ0MsSUFBWCxFQUFpQjtBQUNmRCxPQUFLLENBQUNDLElBQU4sR0FBYyxZQUFXO0FBQ3ZCLFFBQUl1TyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBN0I7O0FBQ0EsUUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBU0MsRUFBVCxFQUFhO0FBQzVCLGFBQU8sT0FBT0EsRUFBUCxLQUFjLFVBQWQsSUFBNEJMLEtBQUssQ0FBQ00sSUFBTixDQUFXRCxFQUFYLE1BQW1CLG1CQUF0RDtBQUNELEtBRkQ7O0FBR0EsUUFBSUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBUzVILEtBQVQsRUFBZ0I7QUFDOUIsVUFBSTZILE1BQU0sR0FBR0MsTUFBTSxDQUFDOUgsS0FBRCxDQUFuQjs7QUFDQSxVQUFJK0gsS0FBSyxDQUFDRixNQUFELENBQVQsRUFBbUI7QUFDakIsZUFBTyxDQUFQO0FBQ0Q7O0FBQ0QsVUFBSUEsTUFBTSxLQUFLLENBQVgsSUFBZ0IsQ0FBQ0csUUFBUSxDQUFDSCxNQUFELENBQTdCLEVBQXVDO0FBQ3JDLGVBQU9BLE1BQVA7QUFDRDs7QUFDRCxhQUFPLENBQUNBLE1BQU0sR0FBRyxDQUFULEdBQWEsQ0FBYixHQUFpQixDQUFDLENBQW5CLElBQXdCdEksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQzBJLEdBQUwsQ0FBU0osTUFBVCxDQUFYLENBQS9CO0FBQ0QsS0FURDs7QUFVQSxRQUFJSyxjQUFjLEdBQUczSSxJQUFJLENBQUNJLEdBQUwsQ0FBUyxDQUFULEVBQVksRUFBWixJQUFrQixDQUF2Qzs7QUFDQSxRQUFJd0ksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU25JLEtBQVQsRUFBZ0I7QUFDN0IsVUFBSW9JLEdBQUcsR0FBR1IsU0FBUyxDQUFDNUgsS0FBRCxDQUFuQjtBQUNBLGFBQU9ULElBQUksQ0FBQzhJLEdBQUwsQ0FBUzlJLElBQUksQ0FBQytJLEdBQUwsQ0FBU0YsR0FBVCxFQUFjLENBQWQsQ0FBVCxFQUEyQkYsY0FBM0IsQ0FBUDtBQUNELEtBSEQsQ0FoQnVCLENBcUJ2Qjs7O0FBQ0EsV0FBTyxTQUFTcFAsSUFBVCxDQUFjeVA7QUFBVTtBQUF4QixNQUErQztBQUNwRDtBQUNBLFVBQUlDLENBQUMsR0FBRyxJQUFSLENBRm9ELENBSXBEOztBQUNBLFVBQUk1UCxLQUFLLEdBQUcwTyxNQUFNLENBQUNpQixTQUFELENBQWxCLENBTG9ELENBT3BEOztBQUNBLFVBQUlBLFNBQVMsSUFBSSxJQUFqQixFQUF1QjtBQUNyQixjQUFNLElBQUlFLFNBQUosQ0FDSixrRUFESSxDQUFOO0FBR0QsT0FabUQsQ0FjcEQ7OztBQUNBLFVBQUlDLEtBQUssR0FBR0MsU0FBUyxDQUFDbk4sTUFBVixHQUFtQixDQUFuQixHQUF1Qm1OLFNBQVMsQ0FBQyxDQUFELENBQWhDLEdBQXNDLEtBQUtDLFNBQXZEO0FBQ0EsVUFBSUMsQ0FBSjs7QUFDQSxVQUFJLE9BQU9ILEtBQVAsS0FBaUIsV0FBckIsRUFBa0M7QUFDaEM7QUFDQTtBQUNBLFlBQUksQ0FBQ2pCLFVBQVUsQ0FBQ2lCLEtBQUQsQ0FBZixFQUF3QjtBQUN0QixnQkFBTSxJQUFJRCxTQUFKLENBQ0osbUVBREksQ0FBTjtBQUdELFNBUCtCLENBU2hDOzs7QUFDQSxZQUFJRSxTQUFTLENBQUNuTixNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3hCcU4sV0FBQyxHQUFHRixTQUFTLENBQUMsQ0FBRCxDQUFiO0FBQ0Q7QUFDRixPQTlCbUQsQ0FnQ3BEO0FBQ0E7OztBQUNBLFVBQUlQLEdBQUcsR0FBR0QsUUFBUSxDQUFDdlAsS0FBSyxDQUFDNEMsTUFBUCxDQUFsQixDQWxDb0QsQ0FvQ3BEO0FBQ0E7QUFDQTs7QUFDQSxVQUFJc04sQ0FBQyxHQUFHckIsVUFBVSxDQUFDZSxDQUFELENBQVYsR0FBZ0JsQixNQUFNLENBQUMsSUFBSWtCLENBQUosQ0FBTUosR0FBTixDQUFELENBQXRCLEdBQXFDLElBQUl2UCxLQUFKLENBQVV1UCxHQUFWLENBQTdDLENBdkNvRCxDQXlDcEQ7O0FBQ0EsVUFBSVcsQ0FBQyxHQUFHLENBQVIsQ0ExQ29ELENBMkNwRDs7QUFDQSxVQUFJQyxNQUFKOztBQUNBLGFBQU9ELENBQUMsR0FBR1gsR0FBWCxFQUFnQjtBQUNkWSxjQUFNLEdBQUdwUSxLQUFLLENBQUNtUSxDQUFELENBQWQ7O0FBQ0EsWUFBSUwsS0FBSixFQUFXO0FBQ1RJLFdBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQ0UsT0FBT0YsQ0FBUCxLQUFhLFdBQWIsR0FDSUgsS0FBSyxDQUFDTSxNQUFELEVBQVNELENBQVQsQ0FEVCxHQUVJTCxLQUFLLENBQUNmLElBQU4sQ0FBV2tCLENBQVgsRUFBY0csTUFBZCxFQUFzQkQsQ0FBdEIsQ0FITjtBQUlELFNBTEQsTUFLTztBQUNMRCxXQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPQyxNQUFQO0FBQ0Q7O0FBQ0RELFNBQUMsSUFBSSxDQUFMO0FBQ0QsT0F4RG1ELENBeURwRDs7O0FBQ0FELE9BQUMsQ0FBQ3ROLE1BQUYsR0FBVzRNLEdBQVgsQ0ExRG9ELENBMkRwRDs7QUFDQSxhQUFPVSxDQUFQO0FBQ0QsS0E3REQ7QUE4REQsR0FwRlksRUFBYjtBQXFGRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCIvKioqKioqKioqKlxuICogQWNjb3JkaW9uXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBBY2NvcmRpb24ge1xuICBjb25zdHJ1Y3RvcigkYWNjb3JkaW9uKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5hY2NvcmRpb24gPSAkYWNjb3JkaW9uIC8vIEFkZCBhY2NvcmRpb24gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5hY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB0aGlzLiQuYWNjb3JkaW9uLmRhdGFzZXQubXVsdGlwbGUgLy8gU2V0IGlzIG11bHRpcGxlIGl0ZW0gb3Blbi5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICBpZiAoJGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2NvbnRlbnRIZWlnaHR9cHhgXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpdGVtOiAkaXRlbSwgaGVpZ2h0OiBjb250ZW50SGVpZ2h0IH0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgeyBpdGVtLCBoZWlnaHQgfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQnV0dG9uJylcbiAgICAgIGNvbnN0ICRjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB7IGl0ZW0gfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvblxuIiwiLyoqKioqKioqKipcbiAqIENhcm91c2VsXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKCRjYXJvdXNlbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY2Fyb3VzZWwgPSAkY2Fyb3VzZWwgLy8gQWRkIGNhcm91c2VsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5uYXZpZ2F0aW9uID0ge1xuICAgICAgbGVmdDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1sZWZ0JyksXG4gICAgICByaWdodDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1yaWdodCcpXG4gICAgfVxuICAgIHRoaXMuJC5pdGVtcyA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW1zJylcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pc1RvdWNoRGV2aWNlID0gISEoXG4gICAgICAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzXG4gICAgKVxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbm9ybWFsJ1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICB0aGlzLnBhZ2luYXRpb24gPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5wYWdpbmF0aW9uXG4gICAgdGhpcy5kcmFnID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuZHJhZ1xuICAgIHRoaXMuYXV0byA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmF1dG9cbiAgICB0aGlzLm1vYmlsZU51bWJlciA9IDEgfHwgdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQubW9iaWxlTnVtYmVyXG4gICAgdGhpcy50YWJsZXROdW1iZXIgPSAyIHx8IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnRhYmxldE51bWJlclxuICAgIHRoaXMubGFwdG9wTnVtYmVyID0gNCB8fCB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5sYXB0b3BOdW1iZXJcbiAgICB0aGlzLm51bWJlckl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICkubGVuZ3RoXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSAnbXVsdGknKSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoXG4gICAgICB0aGlzLnNjcmVlbk51bWJlciA9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKS5vZmZzZXRXaWR0aFxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKS5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuTnVtYmVyID0gdGhpcy5sYXB0b3BOdW1iZXJcbiAgICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OHB4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5OdW1iZXIgPSB0aGlzLnRhYmxldE51bWJlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zY3JlZW5OdW1iZXIgPSB0aGlzLm1vYmlsZU51bWJlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0ICRwYWdpbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRwYWdpbmF0aW9uLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uJylcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlckl0ZW1zOyBpKyspIHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAkaXRlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICAgICAkaXRlbS5kYXRhc2V0Lml0ZW0gPSBpICsgMVxuXG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIH1cblxuICAgICAgICAkcGFnaW5hdGlvbi5hcHBlbmRDaGlsZCgkaXRlbSlcbiAgICAgIH1cbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5hcHBlbmRDaGlsZCgkcGFnaW5hdGlvbilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRvKSB7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX21vdmVSaWdodCgpXG4gICAgICB9LCBwYXJzZUludCh0aGlzLmF1dG8pKVxuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5uYXZpZ2F0aW9uLmxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgfSlcblxuICAgIHRoaXMuJC5uYXZpZ2F0aW9uLnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICB9KVxuXG4gICAgdGhpcy4kLmNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICB9KVxuXG4gICAgZm9yIChjb25zdCAkYnVsbGV0IG9mIEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICApKSB7XG4gICAgICAkYnVsbGV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgJGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKCRidWxsZXQuZGF0YXNldC5pdGVtIC0gMSlcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gcGFyc2VJbnQoJGJ1bGxldC5kYXRhc2V0Lml0ZW0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYWcpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hEZXZpY2UpIHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IHRydWVcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IDBcbiAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLmNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLl9kcmFnSXRlbXMoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA+IHRoaXMuYWN0dWFsUG9zaXRpb24pIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDwgdGhpcy5hY3R1YWxQb3NpdGlvbilcbiAgICAgICAgICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zICYmXG4gICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxICYmXG4gICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiQuaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC5jbGllbnRYXG4gICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gdHJ1ZVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlID0gMFxuICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYWdJdGVtcyhldmVudC5jbGllbnRYKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy4kLml0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19pdGVtcy0tZHJhZycpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24gKyAyMCkgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gLSAyMCkgdGhpcy5fbW92ZVJpZ2h0KClcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiArIDIwIHx8XG4gICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gMjBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zICYmXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxICYmXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZHJhZ0l0ZW1zKGNsaWVudFgpIHtcbiAgICB0aGlzLiQuaXRlbXMuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX2l0ZW1zLS1kcmFnJylcbiAgICBpZiAodGhpcy5wcmVzc0l0ZW1zKSB7XG4gICAgICBpZiAoY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSBjbGllbnRYIC0gdGhpcy5hY3R1YWxQb3NpdGlvblxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0NyZXRhZWRJdGVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRsYXN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVMYXN0SXRlbSA9ICRsYXN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbSxcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMuYWN0aXZlSXRlbSAtIDEpICpcbiAgICAgICAgICAgICAgLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCArXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gY2xpZW50WFxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMuYWN0aXZlSXRlbSAtIDEpICpcbiAgICAgICAgICAgICAgLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdDcmV0YWVkSXRlbSkge1xuICAgICAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IHRydWVcbiAgICAgICAgICAgICAgY29uc3QgJGZpcnN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW0nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlRmlyc3RJdGVtID0gJGZpcnN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUZpcnN0SXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLm51bWJlckl0ZW1zIC1cbiAgICAgICAgICAgICAgMSkgKlxuICAgICAgICAgICAgICAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGV9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMuYWN0aXZlSXRlbSAtIDEpICpcbiAgICAgICAgICAgICAgLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUxlZnQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ25vcm1hbCcgfHwgdGhpcy50eXBlID09PSAnbXVsdGknKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbG9vcCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5udW1iZXJJdGVtcyAtIDEsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgIGNvbnN0ICRsYXN0SXRlbSA9IHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCdcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBkdXBsaWNhdGVMYXN0SXRlbSA9ICRsYXN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcblxuICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlTGFzdEl0ZW0pXG4gICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJyksXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKC0xLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMubnVtYmVySXRlbXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtIDw9IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnIHx8IHRoaXMudHlwZSA9PT0gJ211bHRpJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMgLSAodGhpcy5zY3JlZW5OdW1iZXIgLSAxKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb2snKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbG9vcCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoMCwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgY29uc3QgJGZpcnN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVJdGVtcyh4LCBwb3NpdGlvbiA9IG51bGwpIHtcbiAgICBsZXQgdFxuICAgIGNsZWFyVGltZW91dCh0KVxuICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAxcyBlYXNlLWluLW91dCdcbiAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt4ICogLXRoaXMud2lkdGh9cHgpYFxuXG4gICAgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdyaWdodCcgJiZcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcblxuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKSxcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgIHBvc2l0aW9uID09PSAnbGVmdCcgJiZcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMubnVtYmVySXRlbXMgLSAxKSAqXG4gICAgICAgICAgLXRoaXMud2lkdGh9KWBcbiAgICAgIH1cbiAgICB9LCAxMDAwKVxuXG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpXG4gICAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Omxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpudGgtY2hpbGQoJHt0aGlzLmFjdGl2ZUl0ZW0gLSAxfSlgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKVxuICAgICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Om50aC1jaGlsZCgke3RoaXMuYWN0aXZlSXRlbSArIDF9KWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21GaWxlXG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBDdXN0b21GaWxlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbUZpbGUpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUgPSAkY3VzdG9tRmlsZSAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmxhYmVsID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5sYWJlbFxuICAgIHRoaXMuaXNCdXR0b24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvblxuICAgIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuYnV0dG9ucG9zXG4gICAgICA/IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuYnV0dG9ucG9zXG4gICAgICA6ICdyaWdodCdcbiAgICB0aGlzLnR5cGUgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC50eXBlXG4gICAgICA6ICdmaWxlJ1xuICAgIHRoaXMuaXNTaXplID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5zaXplXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5pc0J1dHRvbikge1xuICAgICAgdGhpcy4kLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19idXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uaW5uZXJUZXh0ID0gdGhpcy5pc0J1dHRvblxuICAgIH1cblxuICAgIHRoaXMuJC5jdXN0b21GaWxlLmlubmVySFRNTCA9ICcnXG5cbiAgICBpZiAodGhpcy5pc1NpemUpIHtcbiAgICAgIHRoaXMuJC5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fY29udGFpbmVyJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0J1dHRvbiAmJiB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5pc1NpemVcbiAgICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGFiZWxcbiAgICB0aGlzLiQubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5sYWJlbFxuICAgIHRoaXMuJC5sYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fbGFiZWwnKVxuICAgIHRoaXMuaXNTaXplXG4gICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmxhYmVsKVxuICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG5cbiAgICAvLyBDcmVhdGUgaW5wdXRcbiAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQubmFtZSlcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdmaWxlcycpIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgdHJ1ZSlcbiAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdmb2xkZXInKSB7XG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCd3ZWJraXRkaXJlY3RvcnknLCB0cnVlKVxuICAgICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlyZWN0b3J5cycsIHRydWUpXG4gICAgfVxuICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5pc1NpemVcbiAgICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1NpemUpIHtcbiAgICAgIHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5jb250YWluZXIpXG5cbiAgICAgIC8vIENyZWF0ZSBzaXplIGluZm9cbiAgICAgIHRoaXMuJC5zaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICB0aGlzLiQuc2l6ZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fc2l6ZScpXG4gICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSAnMCBtYidcbiAgICAgIHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5zaXplKVxuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuaW5wdXQuY2xpY2soKVxuICAgIH0pXG5cbiAgICBjb25zdCBzaXplQ29udmVydCA9IHNpemUgPT4ge1xuICAgICAgY29uc3QgYnl0ZXMgPSBzaXplXG4gICAgICBjb25zdCBzaXplcyA9IFsnYnl0ZXMnLCAna2InLCAnbWInLCAnZ2InLCAndGInXVxuICAgICAgY29uc3QgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKVxuICAgICAgY29uc3QgY29udmVydCA9IE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMilcbiAgICAgIHJldHVybiBgJHtjb252ZXJ0fSAke3NpemVzW2ldfWBcbiAgICB9XG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgdGhpcy4kLmxhYmVsLmlubmVyVGV4dCA9IGZpbGUubmFtZVxuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19maWxlQ2xvc2UnKVxuICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnJnRpbWVzOydcbiAgICAgICAgdGhpcy4kLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY2xvc2UsIHRoaXMuJC5idXR0b24pXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlID0gbnVsbFxuICAgICAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSB0aGlzLmxhYmVsXG4gICAgICAgICAgdGhpcy4kLmNvbnRhaW5lci5yZW1vdmVDaGlsZChjbG9zZSlcbiAgICAgICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSAnMCBtYidcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gc2l6ZUNvbnZlcnQoZmlsZS5zaXplKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzXG5cbiAgICAgICAgY29uc3QgJGZpbGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGV0IHNpemUgPSAwXG5cbiAgICAgICAgQXJyYXkuZnJvbShmaWxlcykuZm9yRWFjaCgoZmlsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCAkZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgJGZpbGUuaW5uZXJUZXh0ID0gZmlsZS5uYW1lXG4gICAgICAgICAgJGZpbGUuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2ZpbGUnKVxuXG4gICAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19maWxlQ2xvc2UnKVxuICAgICAgICAgIGNsb3NlLmlubmVySFRNTCA9ICcmdGltZXM7J1xuXG4gICAgICAgICAgJGZpbGUuYXBwZW5kQ2hpbGQoY2xvc2UpXG4gICAgICAgICAgJGZpbGVzLmFwcGVuZENoaWxkKCRmaWxlKVxuXG4gICAgICAgICAgc2l6ZSArPSBmaWxlLnNpemVcblxuICAgICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNpemUgPSAwXG4gICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBEYXRhVHJhbnNmZXIoKVxuICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICAgICAgICBpZiAoZmlsZSAhPT0gZmlsZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgbmV3RmlsZXMuaXRlbXMuYWRkKGZpbGUpXG4gICAgICAgICAgICAgICAgc2l6ZSArPSBmaWxlLnNpemVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kLnNpemUuaW5uZXJUZXh0ID0gc2l6ZUNvbnZlcnQoc2l6ZSlcbiAgICAgICAgICAgIHRoaXMuJC5pbnB1dC5maWxlcyA9IG5ld0ZpbGVzLmZpbGVzXG4gICAgICAgICAgICAkZmlsZXMucmVtb3ZlQ2hpbGQoJGZpbGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSBzaXplQ29udmVydChzaXplKVxuXG4gICAgICAgIHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKCRmaWxlcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUZpbGVcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21SYW5nZVxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tUmFuZ2Uge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tUmFuZ2UpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlID0gJGN1c3RvbVJhbmdlIC8vIEFkZCBjdXN0b21SYW5nZSBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmN1cnNvclByZXNzID0gZmFsc2VcbiAgICB0aGlzLnRvdGFsID0gdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQudG90YWxcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC5zdGVwXG4gICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPSAwXG4gICAgdGhpcy5hY3R1YWxTdGVwID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgLy8gQ3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAvLyBDcmVhdGUgYmFja2dyb3VuZCBiYXIuXG4gICAgdGhpcy4kLmJhY2tncm91bmRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuJC5iYWNrZ3JvdW5kQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyJylcbiAgICB0aGlzLiQuYmFja2dyb3VuZEJhci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2Jhci0tYmFja2dyb3VuZCcpXG5cbiAgICAvLyBDcmVhdGUgcGxhaW4gYmFyLlxuICAgIHRoaXMuJC5wbGFpbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLnBsYWluQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyJylcbiAgICB0aGlzLiQucGxhaW5CYXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19iYXItLXBsYWluJylcblxuICAgIC8vIENyZWF0ZSBjdXNyb3IuXG4gICAgdGhpcy4kLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2N1cnNvcicpXG5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmJhY2tncm91bmRCYXIpXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5wbGFpbkJhcilcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmN1cnNvcilcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtNTAlKWBcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY3VzdG9tUmFuZ2Uub2Zmc2V0V2lkdGhcbiAgICB0aGlzLm51bWJlclN0ZXBzID0gdGhpcy50b3RhbCAvIHRoaXMuc3RlcCAvLyBub21icmUgZGUgZm9pcyBwb3VyIGFycml2ZXIgYSB0b3RhbFxuICAgIHRoaXMucmF0aW8gPSB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJTdGVwcyAvLyBwaXhlbCBkZSBsYXJnZXVyIHBvdXIgMSUgZHUgdG90YWxcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuY3Vyc29yUHJlc3MgPSB0cnVlXG4gICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXYgPT4ge1xuICAgICAgdGhpcy5jdXJzb3JQcmVzcyA9IGZhbHNlXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmN1cnNvclByZXNzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiAmJlxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPj0gKHRoaXMuYWN0dWFsU3RlcCArIDEpICogdGhpcy5yYXRpbyAmJlxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcCA8IHRoaXMubnVtYmVyU3RlcHNcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPVxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCArIDEpICogdGhpcy5yYXRpbyAtIHRoaXMuJC5jdXJzb3Iub2Zmc2V0V2lkdGggLyAyXG4gICAgICAgICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNmb3JtQ3Vyc29yfXB4KWBcbiAgICAgICAgICB0aGlzLiQucGxhaW5CYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgkeygxIC8gdGhpcy5udW1iZXJTdGVwcykgKlxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCArIDEpfSlgXG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLmFjdHVhbFN0ZXArK1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uICYmXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSAodGhpcy5hY3R1YWxTdGVwIC0gMSkgKiB0aGlzLnJhdGlvICYmXG4gICAgICAgICAgdGhpcy5hY3R1YWxTdGVwID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnRyYW5zZm9ybUN1cnNvciA9XG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwIC0gMSkgKiB0aGlzLnJhdGlvIC0gdGhpcy4kLmN1cnNvci5vZmZzZXRXaWR0aCAvIDJcbiAgICAgICAgICB0aGlzLiQuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy50cmFuc2Zvcm1DdXJzb3J9cHgpYFxuICAgICAgICAgIHRoaXMuJC5wbGFpbkJhci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7KDEgLyB0aGlzLm51bWJlclN0ZXBzKSAqXG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwIC0gMSl9KWBcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcC0tXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgbGV0IGNsaWNrU3RlcCA9IDBcbiAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDw9IHRoaXMubnVtYmVyU3RlcHM7IHN0ZXArKykge1xuICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA+IHN0ZXAgKiB0aGlzLnJhdGlvIC0gMjApIGNsaWNrU3RlcCA9IHN0ZXBcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPVxuICAgICAgICBjbGlja1N0ZXAgKiB0aGlzLnJhdGlvIC0gdGhpcy4kLmN1cnNvci5vZmZzZXRXaWR0aCAvIDJcbiAgICAgIHRoaXMuJC5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zZm9ybUN1cnNvcn1weClgXG4gICAgICB0aGlzLiQucGxhaW5CYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgkeygxIC8gdGhpcy5udW1iZXJTdGVwcykgKlxuICAgICAgICBjbGlja1N0ZXB9KWBcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJhbmdlXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tU2VsZWN0XG4gKiB2MS4xLjBcbiAqL1xuXG5jbGFzcyBDdXN0b21TZWxlY3Qge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tU2VsZWN0KSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QgPSAkY3VzdG9tU2VsZWN0IC8vIEFkZCBjdXN0b20tc2VsZWN0IGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5pbml0UGFyYW1zKClcbiAgICB0aGlzLmluaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBpbml0UGFyYW1zKCkge1xuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICB0aGlzLmlzRmlsdGVycyA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5maWx0ZXJzIC8vIFNldCBmaWx0ZXJzIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubW9iaWxlIC8vIFNldCBjdXN0b20gbW9iaWxlIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmRlZmF1bHRMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgZGVmYXVsdCBsYWJlbC5cbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgYWN0aXZhdGVkIGxhYmVsLlxuICAgIHRoaXMuaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpIC8vIEdldCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgY29uc3QgJGNyZWF0ZUN1c3RvbVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNyZWF0ZUN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0JylcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuICAgICAgJGNyZWF0ZUN1c3RvbVNlbGVjdCxcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3RcbiAgICApXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdCA9ICRjcmVhdGVDdXN0b21TZWxlY3RcbiAgICBjb25zb2xlLmxvZyh0aGlzLiQuY3VzdG9tU2VsZWN0KVxuICAgIGlmICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5OTFweCknKS5tYXRjaGVzKSB7XG4gICAgICAvLyBDcmVhdGUgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgICAgY29uc3QgJHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAkc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSlcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IHNlbGVjdCBvcHRpb24uXG4gICAgICBjb25zdCAkZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAkZGVmYXVsdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkZGVmYXVsdE9wdGlvbi5pbm5lclRleHQgPSB0aGlzLmRlZmF1bHRMYWJlbFxuICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkZGVmYXVsdE9wdGlvbilcblxuICAgICAgLy8gQ3JlYXRlIHNlbGVjdCBvcHRpb25zLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5pbm5lclRleHRcbiAgICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkb3B0aW9uKVxuICAgICAgfSlcblxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkc2VsZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1maWx0ZXJzJylcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IHdpdGggZWxlbWVudHMuXG4gICAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jb250ZW50JylcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAkaXRlbS5kYXRhc2V0LmxhYmVsID0gaXRlbS5pbm5lclRleHRcbiAgICAgICAgJGl0ZW0uZGF0YXNldC52YWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgICRpdGVtLmlubmVyVGV4dCA9IGl0ZW0uaW5uZXJUZXh0XG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2l0ZW0nKVxuICAgICAgICAkY29udGVudC5hcHBlbmRDaGlsZCgkaXRlbSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uLlxuICAgICAgdGhpcy4kLmNob29zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY2hvb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLiQuY2hvb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2Nob29zZScpXG4gICAgICBpZiAoIXRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJIVE1MID0gdGhpcy5kZWZhdWx0TGFiZWxcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHdyYXBwaW5nIGNvbnRhaW5lciBmb3IgY29udGVudC5cbiAgICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jb250YWluZXInKVxuICAgICAgJGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMubmFtZSlcbiAgICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGNvbnRlbnQpXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmlubmVySFRNTCA9ICcnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKHRoaXMuJC5jaG9vc2UpXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKCRjb250YWluZXIpXG5cbiAgICAgIC8vIENyZWF0ZSBpbnB1dCBmb3Igc2VsZWN0IHZhbHVlLlxuICAgICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXNlbGVjdF9faXRlbScpXG4gICAgICApIC8vIEdldCBhbGwgaXRlbXMgaW4gYXJyYXkuXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZmlsdGVyIGlucHV0LlxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5maWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLmRlZmF1bHRMYWJlbFxuICAgICAgICB0aGlzLiQuY2hvb3NlLmFwcGVuZENoaWxkKHRoaXMuJC5maWx0ZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHMoKVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIGlmIChcbiAgICAgICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKS5tYXRjaGVzKSB8fFxuICAgICAgdGhpcy5pc09uTW9iaWxlXG4gICAgKSB7XG4gICAgICB0aGlzLiQuY2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKSkge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1maW5pc2gnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG4gICAgICAgICAgfSwgMjAwKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcbiAgICAgICAgICB9LCAyMDApXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5pdGVtcy5mb3JFYWNoKCRpdGVtID0+IHtcbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSgkaXRlbSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAnJ1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRoaXMudmlydHVhbExhYmVsKVxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5mb3JFYWNoKCRpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJGl0ZW1cbiAgICAgICAgICAgICRuZXdJdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLiQuaXRlbXMuZm9yRWFjaCgkaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoJGl0ZW0uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy4kLmZpbHRlci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgJG5ld0l0ZW0gPSAkaXRlbVxuICAgICAgICAgICAgICAkbmV3SXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgJG5ld0l0ZW0gPSAkaXRlbVxuICAgICAgICAgICAgICAkbmV3SXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy4kLmN1c3RvbVNlbGVjdC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcblxuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tZmluaXNoJylcblxuICAgICAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJC5maWx0ZXIudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLnZpcnR1YWxMYWJlbFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMudmlydHVhbExhYmVsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VWYWx1ZSgkaXRlbSkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9ICRpdGVtLmlubmVyVGV4dFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiQuY2hvb3NlLmlubmVyVGV4dCA9ICRpdGVtLmlubmVyVGV4dFxuICAgIH1cblxuICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9ICRpdGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgIHRoaXMudmlydHVhbExhYmVsID0gJGl0ZW0uaW5uZXJUZXh0XG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLWZpbmlzaCcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tU2VsZWN0XG4iLCIvKioqKioqKioqKlxuICogRHJvcGRvd25cbiAqIHYxLjEuMFxuICovXG5cbmNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoJGRyb3Bkb3duKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5kcm9wZG93biA9ICRkcm9wZG93biAvLyBBZGQgZHJvcGRvd24gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pc09uTW9iaWxlID0gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQubW9iaWxlIC8vIFNldCBjdXN0b20gbW9iaWxlIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLm5hbWUgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5uYW1lXG4gICAgdGhpcy5pdGVtcyA9XG4gICAgICB0aGlzLnR5cGUgPT09ICdsaW5rJyA/IEpTT04ucGFyc2UodGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQuaXRlbXMpIDogbnVsbCAvLyBDcmVhdGUgSlNPTiBvYmplY3Qgd2l0aCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pdGVtJylcbiAgICApXG5cbiAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRlbnQnKVxuXG4gICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uLlxuICAgIHRoaXMuJC5jaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2Nob29zZScpXG4gICAgdGhpcy4kLmNob29zZS5pbm5lckhUTUwgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5sYWJlbFxuICAgIHRoaXMuJC5jaG9vc2Uuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMubmFtZSlcblxuICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgJGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY29udGFpbmVyJylcbiAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICRjb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm5hbWUpXG4gICAgdGhpcy4kLmRyb3Bkb3duLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuJC5jaG9vc2UpXG4gICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKCRjb250YWluZXIpXG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuY2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBpZiAoIXRoaXMuJC5kcm9wZG93bi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuJC5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi0tb3BlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKioqKioqKioqKlxuICogRm9ybVZhbGlkYXRpb25cbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEZvcm1WYWxpZGF0aW9uIHtcbiAgY29uc3RydWN0b3IoJGZvcm0pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmZvcm0gPSAkZm9ybSAvLyBBZGQgZm9ybSBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLm5vSW5zdGFudCA9ICEhdGhpcy4kLmZvcm0uZGF0YXNldC5ub2luc3RhbnRcbiAgICB0aGlzLm5vU3VibWl0ID0gISF0aGlzLiQuZm9ybS5kYXRhc2V0Lm5vc3VibWl0XG4gICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaW5wdXRHcm91cHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0ICRpbnB1dEdyb3VwIG9mIEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgICkpIHtcbiAgICAgIGNvbnN0ICRpbnB1dCA9ICRpbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5ub0luc3RhbnQpIHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlKCRpbnB1dEdyb3VwKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5ub1N1Ym1pdCkge1xuICAgICAgdGhpcy4kLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlXG4gICAgICAgIGZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgQXJyYXkuZnJvbShcbiAgICAgICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgICAgICApKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKCRpbnB1dEdyb3VwKSkgdGhpcy5mb3JtRXJyb3IgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtRXJyb3IpIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoJGlucHV0R3JvdXApIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgY29uc3QgdmFsdWUgPSAkaW5wdXQudmFsdWVcbiAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJylcblxuICAgIC8vIHJ1bGVzXG4gICAgY29uc3QgcnVsZXMgPSB7fVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkKVxuICAgICAgcnVsZXMucmVxdWlyZWQgPSAkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQubWlubGVuZ3RoKVxuICAgICAgcnVsZXMubWluTGVuZ3RoID0gcGFyc2VJbnQoJGlucHV0R3JvdXAuZGF0YXNldC5taW5sZW5ndGgpXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQubWF4bGVuZ3RoKVxuICAgICAgcnVsZXMubWF4TGVuZ3RoID0gcGFyc2VJbnQoJGlucHV0R3JvdXAuZGF0YXNldC5tYXhsZW5ndGgpXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRtZXNzYWdlKVxuICAgICAgcnVsZXMucmVxdWlyZWRNZXNzYWdlID0gJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZG1lc3NhZ2VcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1pbmxlbmd0aClcbiAgICAgIHJ1bGVzLmVycm9yTWluTGVuZ3RoID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1pbmxlbmd0aFxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWF4bGVuZ3RoKVxuICAgICAgcnVsZXMuZXJyb3JNYXhMZW5ndGggPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWF4bGVuZ3RoXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtZXNzYWdlKVxuICAgICAgcnVsZXMuZXJyb3JNZXNzYWdlID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1lc3NhZ2VcblxuICAgIGlmIChpbnB1dFR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1pbkxlbmd0aCAmJiB2YWx1ZS5sZW5ndGggPCBydWxlcy5taW5MZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNaW5MZW5ndGggfHwgJ3RvbyBsb3cnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWF4TGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA+IHJ1bGVzLm1heExlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1heExlbmd0aCB8fCAndG9vIGJpZycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1pbkxlbmd0aCAmJiB2YWx1ZSA8IHJ1bGVzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUgPiBydWxlcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNYXhMZW5ndGggfHwgJ3RvbyBiaWcnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ2VtYWlsJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhdmFsdWUubWF0Y2goXG4gICAgICAgICAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWVzc2FnZSB8fCAnbm90IGEgdmFsaWQgZW1haWwnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ3RlbCcpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXZhbHVlLm1hdGNoKC9eKD86KD86XFwrfDAwKTMzfDApXFxzKlsxLTldKD86W1xccy4tXSpcXGR7Mn0pezR9JC8pXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNZXNzYWdlIHx8ICdub3QgYSB2YWxpZCBlbWFpbCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEVycm9yKCRpbnB1dEdyb3VwLCBlcnJvcikge1xuICAgIGxldCAkZXJyb3IgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICBpZiAoJGVycm9yKSB7XG4gICAgICAkZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JcbiAgICB9IGVsc2Uge1xuICAgICAgJGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAkZXJyb3IuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICAgICRlcnJvci5pbm5lclRleHQgPSBlcnJvclxuICAgICAgJGlucHV0R3JvdXAuYXBwZW5kQ2hpbGQoJGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyRXJyb3IoJGlucHV0R3JvdXApIHtcbiAgICBjb25zdCAkZXJyb3IgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICBpZiAoJGVycm9yKSB7XG4gICAgICAkaW5wdXRHcm91cC5yZW1vdmVDaGlsZCgkZXJyb3IpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0aW9uXG4iLCIvKioqKioqKioqKlxuICogSGVhZGVyXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSAvLyBBZGQgaGVhZGVyIGluIERPTSBvYmplY3RzLlxuICAgIHRoaXMuJC5jbG9zZSA9IHRoaXMuJC5oZWFkZXIucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdG9nZ2xlLS1jbG9zZScpXG4gICAgdGhpcy4kLm9wZW4gPSB0aGlzLiQuaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RvZ2dsZS0tb3BlbicpXG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5oZWFkZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbWVudUl0ZW0nKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGlmICghd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEyMDBweCknKS5tYXRjaGVzKSB7XG4gICAgICB0aGlzLiQub3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgdGhpcy4kLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuaGVhZGVyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXG4gICAgICAgICAgdGhpcy4kLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgICBjb25zdCBzdWIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnVJdGVtU3ViJylcbiAgICAgICAgaWYgKHN1Yikge1xuICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudUl0ZW1CdXR0b24nKVxuICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHN1Yi5vZmZzZXRIZWlnaHRcbiAgICAgICAgICBzdWIuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgIHN1Yi5zdHlsZS50cmFuc2l0aW9uID0gJ2hlaWdodCAwLjNzIGVhc2UtaW4tb3V0J1xuXG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Yi5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fbWVudUl0ZW1TdWItLW9wZW4nKSkge1xuICAgICAgICAgICAgICBzdWIuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICBzdWIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51SXRlbVN1Yi0tb3BlbicpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWIuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgICAgICBzdWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19tZW51SXRlbVN1Yi0tb3BlbicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiIsIi8qKioqKioqKioqXG4gKiBJbnB1dEdyb3VwXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBJbnB1dEdyb3VwIHtcbiAgY29uc3RydWN0b3IoJGlucHV0R3JvdXApIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmlucHV0R3JvdXAgPSAkaW5wdXRHcm91cCAvLyBBZGQgaW5wdXRHcm91cCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuJC5pbnB1dEdyb3VwLmlubmVySFRNTFxuICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cF9fY29udGVudCcpXG4gICAgJGNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudFxuICAgIHRoaXMuJC5pbnB1dCA9ICRjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXRHcm91cC5pbm5lckhUTUwgPSAnJ1xuICAgIHRoaXMuJC5pbnB1dEdyb3VwLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMuJC5pbnB1dEdyb3VwLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwLS1hY3RpdmUnKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy4kLmlucHV0LnZhbHVlKVxuICAgICAgICB0aGlzLiQuaW5wdXRHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1ncm91cC0tYWN0aXZlJylcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0R3JvdXBcbiIsIi8qKioqKioqKioqXG4gKiBNb2RhbFxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcigkbW9kYWwpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLm1vZGFsID0gJG1vZGFsIC8vIEFkZCBtb2RhbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5tb2RhbC1idXR0b25bZGF0YS1tb2RhbD1cIiR7dGhpcy4kLm1vZGFsLmRhdGFzZXQubW9kYWx9XCJdYFxuICAgICAgKVxuICAgIClcbiAgICAgIHRoaXMuJC5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1vZGFsLWJ1dHRvbltkYXRhLW1vZGFsPVwiJHt0aGlzLiQubW9kYWwuZGF0YXNldC5tb2RhbH1cIl1gXG4gICAgICApXG4gICAgaWYgKHRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJykpXG4gICAgICB0aGlzLiQuY2xvc2UgPSB0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpXG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLiQubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC0tYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jb250ZW50JykuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuJC5idXR0b24pIHtcbiAgICAgIHRoaXMuJC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJC5jbG9zZSkge1xuICAgICAgdGhpcy4kLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiY2xhc3MgUmVzZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKCEvXlthLXowLTldJC9pLnRlc3QoZXZlbnQua2V5KSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgna2V5Ym9hcmQnKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRcbiIsIi8qKioqKioqKioqXG4gKiBUYWJzXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBUYWJzIHtcbiAgY29uc3RydWN0b3IoJHRhYnMpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLnRhYnMgPSAkdGFicyAvLyBBZGQgbW9kYWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmhlYWRlckl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19oZWFkZXJJdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0ICRoZWFkZXJJdGVtIG9mIHRoaXMuJC5oZWFkZXJJdGVtcykge1xuICAgICAgY29uc3QgJGNvbnRlbnRJdGVtID0gdGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50YWJzX19jb250ZW50SXRlbVtkYXRhLWl0ZW09XCIkeyRoZWFkZXJJdGVtLmRhdGFzZXQuaXRlbX1cIl1gXG4gICAgICApXG4gICAgICAkaGVhZGVySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpKVxuICAgICAgICAgIHRoaXMuJC50YWJzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkaGVhZGVySXRlbS5jbGFzc0xpc3QuYWRkKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkY29udGVudEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG4iLCJpbXBvcnQgJy4vcG9seWZpbGxzL0FycmF5LmZyb20nXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vQWNjb3JkaW9uJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnXG5pbXBvcnQgQ3VzdG9tRmlsZSBmcm9tICcuL0N1c3RvbUZpbGUnXG5pbXBvcnQgQ3VzdG9tUmFuZ2UgZnJvbSAnLi9DdXN0b21SYW5nZSdcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnLi9DdXN0b21TZWxlY3QnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuL0lucHV0R3JvdXAnXG5pbXBvcnQgRm9ybVZhbGlkYXRpb24gZnJvbSAnLi9Gb3JtVmFsaWRhdGlvbidcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFJlc2V0IGZyb20gJy4vUmVzZXQnXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5cbmNvbnN0ICRhY2NvcmRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpXG5mb3IgKGNvbnN0ICRhY2NvcmRpb24gb2YgJGFjY29yZGlvbnMpIHtcbiAgbmV3IEFjY29yZGlvbigkYWNjb3JkaW9uKVxufVxuXG5jb25zdCAkY2Fyb3VzZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwnKSlcbmZvciAoY29uc3QgJGNhcm91c2VsIG9mICRjYXJvdXNlbHMpIHtcbiAgbmV3IENhcm91c2VsKCRjYXJvdXNlbClcbn1cblxuY29uc3QgJGN1c3RvbUZpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWZpbGUnKSlcbmZvciAoY29uc3QgJGN1c3RvbUZpbGUgb2YgJGN1c3RvbUZpbGVzKSB7XG4gIG5ldyBDdXN0b21GaWxlKCRjdXN0b21GaWxlKVxufVxuXG5jb25zdCAkY3VzdG9tUmFuZ2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhbmdlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21SYW5nZSBvZiAkY3VzdG9tUmFuZ2VzKSB7XG4gIG5ldyBDdXN0b21SYW5nZSgkY3VzdG9tUmFuZ2UpXG59XG5cbmNvbnN0ICRjdXN0b21TZWxlY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXNlbGVjdCcpKVxuZm9yIChjb25zdCAkY3VzdG9tU2VsZWN0IG9mICRjdXN0b21TZWxlY3RzKSB7XG4gIG5ldyBDdXN0b21TZWxlY3QoJGN1c3RvbVNlbGVjdClcbn1cblxuY29uc3QgJGRyb3Bkb3ducyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJykpXG5mb3IgKGNvbnN0ICRkcm9wZG93biBvZiAkZHJvcGRvd25zKSB7XG4gIG5ldyBEcm9wZG93bigkZHJvcGRvd24pXG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykpIG5ldyBIZWFkZXIoKVxuXG5jb25zdCAkaW5wdXRHcm91cHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpKVxuZm9yIChjb25zdCAkaW5wdXRHcm91cCBvZiAkaW5wdXRHcm91cHMpIHtcbiAgbmV3IElucHV0R3JvdXAoJGlucHV0R3JvdXApXG59XG5cbmNvbnN0ICRmb3JtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbGlkYXRpb24nKSlcbmZvciAoY29uc3QgJGZvcm0gb2YgJGZvcm1zKSB7XG4gIG5ldyBGb3JtVmFsaWRhdGlvbigkZm9ybSlcbn1cblxuY29uc3QgJG1vZGFscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJykpXG5mb3IgKGNvbnN0ICRtb2RhbCBvZiAkbW9kYWxzKSB7XG4gIG5ldyBNb2RhbCgkbW9kYWwpXG59XG5cbm5ldyBSZXNldCgpXG5cbmNvbnN0ICR0YWJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpKVxuZm9yIChjb25zdCAkdGFiIG9mICR0YWJzKSB7XG4gIG5ldyBUYWJzKCR0YWIpXG59XG4iLCJpZiAoIUFycmF5LmZyb20pIHtcbiAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG4gICAgdmFyIGlzQ2FsbGFibGUgPSBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICAgIH1cbiAgICB2YXIgdG9JbnRlZ2VyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBudW1iZXIgPSBOdW1iZXIodmFsdWUpXG4gICAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gbnVtYmVyXG4gICAgICB9XG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKVxuICAgIH1cbiAgICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxXG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBsZW4gPSB0b0ludGVnZXIodmFsdWUpXG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobGVuLCAwKSwgbWF4U2FmZUludGVnZXIpXG4gICAgfVxuXG4gICAgLy8gVGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiB0aGUgZnJvbSBtZXRob2QgaXMgMS5cbiAgICByZXR1cm4gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyosIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgICAvLyAxLiBMZXQgQyBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgIHZhciBDID0gdGhpc1xuXG4gICAgICAvLyAyLiBMZXQgaXRlbXMgYmUgVG9PYmplY3QoYXJyYXlMaWtlKS5cbiAgICAgIHZhciBpdGVtcyA9IE9iamVjdChhcnJheUxpa2UpXG5cbiAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cbiAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICdBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkJ1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8vIDQuIElmIG1hcGZuIGlzIHVuZGVmaW5lZCwgdGhlbiBsZXQgbWFwcGluZyBiZSBmYWxzZS5cbiAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWRcbiAgICAgIHZhciBUXG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA1LiBlbHNlXG4gICAgICAgIC8vIDUuIGEgSWYgSXNDYWxsYWJsZShtYXBmbikgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKCFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnQXJyYXkuZnJvbTogd2hlbiBwcm92aWRlZCwgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gNS4gYi4gSWYgdGhpc0FyZyB3YXMgc3VwcGxpZWQsIGxldCBUIGJlIHRoaXNBcmc7IGVsc2UgbGV0IFQgYmUgdW5kZWZpbmVkLlxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICBUID0gYXJndW1lbnRzWzJdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgLy8gMTEuIExldCBsZW4gYmUgVG9MZW5ndGgobGVuVmFsdWUpLlxuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aClcblxuICAgICAgLy8gMTMuIElmIElzQ29uc3RydWN0b3IoQykgaXMgdHJ1ZSwgdGhlblxuICAgICAgLy8gMTMuIGEuIExldCBBIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2Qgb2YgQyB3aXRoIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW0gbGVuLlxuICAgICAgLy8gMTQuIGEuIEVsc2UsIExldCBBIGJlIEFycmF5Q3JlYXRlKGxlbikuXG4gICAgICB2YXIgQSA9IGlzQ2FsbGFibGUoQykgPyBPYmplY3QobmV3IEMobGVuKSkgOiBuZXcgQXJyYXkobGVuKVxuXG4gICAgICAvLyAxNi4gTGV0IGsgYmUgMC5cbiAgICAgIHZhciBrID0gMFxuICAgICAgLy8gMTcuIFJlcGVhdCwgd2hpbGUgayA8IGxlbuKApiAoYWxzbyBzdGVwcyBhIC0gaClcbiAgICAgIHZhciBrVmFsdWVcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIGtWYWx1ZSA9IGl0ZW1zW2tdXG4gICAgICAgIGlmIChtYXBGbikge1xuICAgICAgICAgIEFba10gPVxuICAgICAgICAgICAgdHlwZW9mIFQgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgID8gbWFwRm4oa1ZhbHVlLCBrKVxuICAgICAgICAgICAgICA6IG1hcEZuLmNhbGwoVCwga1ZhbHVlLCBrKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEFba10gPSBrVmFsdWVcbiAgICAgICAgfVxuICAgICAgICBrICs9IDFcbiAgICAgIH1cbiAgICAgIC8vIDE4LiBMZXQgcHV0U3RhdHVzIGJlIFB1dChBLCBcImxlbmd0aFwiLCBsZW4sIHRydWUpLlxuICAgICAgQS5sZW5ndGggPSBsZW5cbiAgICAgIC8vIDIwLiBSZXR1cm4gQS5cbiAgICAgIHJldHVybiBBXG4gICAgfVxuICB9KSgpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9