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
      this.isButton = this.$.customFile.dataset.button;
      this.isButtonPosition = this.$.customFile.dataset.buttonpos ? this.$.customFile.dataset.buttonpos : 'right';
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
      this.$.label.innerText = this.$.customFile.dataset.label;
      this.$.label.classList.add('custom-file__label');
      this.isSize ? this.$.container.appendChild(this.$.label) : this.$.customFile.appendChild(this.$.label); // Create input

      this.$.input = document.createElement('input');
      this.$.input.setAttribute('name', this.$.customFile.dataset.name);
      this.$.input.setAttribute('type', 'file');
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

      this.$.customFile.addEventListener('click', function () {
        _this.$.input.click();
      });
      this.$.input.addEventListener('change', function (event) {
        console.log('te');
        var file = event.target.files[0];
        _this.$.label.innerText = file.name;
        var bytes = file.size;
        var sizes = ['bytes', 'kb', 'mb', 'gb', 'tb'];
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        var convert = Math.round(bytes / Math.pow(1024, i), 2);
        _this.$.size.innerText = "".concat(convert, " ").concat(sizes[i]);
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

    this._initDOM();

    this._initialize();
  }
  /**
   * Initialize DOM
   */


  _createClass(FormValidation, [{
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
          _this.validate($inputGroup);
        });
      };

      for (var _i = 0, _Array$from = Array.from(this.$.form.querySelectorAll('.input-group')); _i < _Array$from.length; _i++) {
        _loop();
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
        if (rules.required && !value) this.setError($inputGroup, rules.requiredMessage || 'required');else if (rules.minLength && value.length < rules.minLength) this.setError($inputGroup, rules.errorMinLength || 'too low');else if (rules.maxLength && value.length > rules.maxLength) this.setError($inputGroup, rules.errorMaxLength || 'too big');else this.clearError($inputGroup);
      } else if (inputType === 'number') {
        if (rules.required && !value) this.setError($inputGroup, rules.requiredMessage || 'required');else if (rules.minLength && value < rules.minLength) this.setError($inputGroup, rules.errorMinLength || 'too low');else if (rules.maxLength && value > rules.maxLength) this.setError($inputGroup, rules.errorMaxLength || 'too big');else this.clearError($inputGroup);
      } else if (inputType === 'email') {
        if (rules.required && !value) this.setError($inputGroup, rules.requiredMessage || 'required');else if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) this.setError($inputGroup, rules.errorMessage || 'not a valid email');else this.clearError($inputGroup);
      } else if (inputType === 'tel') {
        if (rules.required && !value) this.setError($inputGroup, rules.requiredMessage || 'required');else this.clearError($inputGroup);
      }
    }
  }, {
    key: "setError",
    value: function setError($inputGroup, error) {
      var $error = $inputGroup.querySelector('.input-group--error');

      if ($error) {
        $error.innerText = error;
      } else {
        $error = document.createElement('p');
        $error.classList.add('input-group--error');
        $error.innerText = error;
        $inputGroup.appendChild($error);
      }
    }
  }, {
    key: "clearError",
    value: function clearError($inputGroup) {
      var $error = $inputGroup.querySelector('.input-group--error');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbUZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2pzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2pzL0Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL1Jlc2V0LmpzIiwid2VicGFjazovLy8uL2pzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInB1c2giLCJpdGVtIiwiaGVpZ2h0Iiwic3R5bGUiLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkNhcm91c2VsIiwiJGNhcm91c2VsIiwiY2Fyb3VzZWwiLCJuYXZpZ2F0aW9uIiwibGVmdCIsInJpZ2h0IiwiaXNUb3VjaERldmljZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwidHlwZSIsImFjdGl2ZUl0ZW0iLCJwYWdpbmF0aW9uIiwiZHJhZyIsImF1dG8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibnVtYmVySXRlbXMiLCJsZW5ndGgiLCIkcGFnaW5hdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInNldEludGVydmFsIiwiX21vdmVSaWdodCIsInBhcnNlSW50IiwiX21vdmVMZWZ0Iiwia2V5Q29kZSIsIiRidWxsZXQiLCJfbW92ZUl0ZW1zIiwiYWN0dWFsUG9zaXRpb24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsInByZXNzSXRlbXMiLCJ0cmFuc2xhdGUiLCJkcmFnQ3JldGFlZEl0ZW0iLCJfZHJhZ0l0ZW1zIiwiY2hhbmdlZFRvdWNoZXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCIkbGFzdEl0ZW0iLCJkdXBsaWNhdGVMYXN0SXRlbSIsImNsb25lTm9kZSIsInRyYW5zZm9ybSIsInBvc2l0aW9uIiwiaW5zZXJ0QmVmb3JlIiwiVHdlZW5MaXRlIiwidG8iLCJ4IiwiJGZpcnN0SXRlbSIsImR1cGxpY2F0ZUZpcnN0SXRlbSIsInQiLCJjbGVhclRpbWVvdXQiLCJ0cmFuc2l0aW9uIiwiQ3VzdG9tRmlsZSIsIiRjdXN0b21GaWxlIiwiY3VzdG9tRmlsZSIsImlzQnV0dG9uIiwiYnV0dG9uIiwiaXNCdXR0b25Qb3NpdGlvbiIsImJ1dHRvbnBvcyIsImlzU2l6ZSIsInNpemUiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJjb250YWluZXIiLCJsYWJlbCIsImlucHV0IiwibmFtZSIsImRpc3BsYXkiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwiZmlsZXMiLCJieXRlcyIsInNpemVzIiwiTWF0aCIsImZsb29yIiwiY29udmVydCIsInJvdW5kIiwicG93IiwiQ3VzdG9tUmFuZ2UiLCIkY3VzdG9tUmFuZ2UiLCJjdXN0b21SYW5nZSIsImN1cnNvclByZXNzIiwidG90YWwiLCJzdGVwIiwidHJhbnNmb3JtQ3Vyc29yIiwiYWN0dWFsU3RlcCIsImJhY2tncm91bmRCYXIiLCJwbGFpbkJhciIsImN1cnNvciIsIm51bWJlclN0ZXBzIiwicmF0aW8iLCJldiIsImNsaWNrU3RlcCIsIkN1c3RvbVNlbGVjdCIsIiRjdXN0b21TZWxlY3QiLCJjdXN0b21TZWxlY3QiLCJpc0ZpbHRlcnMiLCJmaWx0ZXJzIiwiaXNPbk1vYmlsZSIsIm1vYmlsZSIsInZpcnR1YWxMYWJlbCIsIkpTT04iLCJwYXJzZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiJHNlbGVjdCIsIiRvcHRpb24iLCJ2YWx1ZSIsImNob29zZSIsIiRjb250YWluZXIiLCJmaWx0ZXIiLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJfY2hhbmdlVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiRHJvcGRvd24iLCIkZHJvcGRvd24iLCJkcm9wZG93biIsInNlbGVjdCIsImxpbmsiLCJsb2NhdGlvbiIsIkZvcm1WYWxpZGF0aW9uIiwiJGZvcm0iLCJmb3JtIiwiaW5wdXRHcm91cHMiLCIkaW5wdXRHcm91cCIsIiRpbnB1dCIsInZhbGlkYXRlIiwiaW5wdXRUeXBlIiwiZ2V0QXR0cmlidXRlIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsIm1pbkxlbmd0aCIsIm1heGxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkbWVzc2FnZSIsInJlcXVpcmVkTWVzc2FnZSIsImVycm9ybWlubGVuZ3RoIiwiZXJyb3JNaW5MZW5ndGgiLCJlcnJvcm1heGxlbmd0aCIsImVycm9yTWF4TGVuZ3RoIiwiZXJyb3JtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJjbGVhckVycm9yIiwibWF0Y2giLCJlcnJvciIsIiRlcnJvciIsIk1vZGFsIiwiJG1vZGFsIiwibW9kYWwiLCJjbG9zZSIsIlJlc2V0IiwiYm9keSIsIlRhYnMiLCIkdGFicyIsInRhYnMiLCJoZWFkZXJJdGVtcyIsIiRoZWFkZXJJdGVtIiwiJGNvbnRlbnRJdGVtIiwiJGFjY29yZGlvbnMiLCIkY2Fyb3VzZWxzIiwiJGN1c3RvbUZpbGVzIiwiJGN1c3RvbVJhbmdlcyIsIiRjdXN0b21TZWxlY3RzIiwiJGRyb3Bkb3ducyIsIiRmb3JtcyIsIiRtb2RhbHMiLCIkdGFiIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztJQUtNQSxTO0FBQ0oscUJBQVlDLFVBQVosRUFBd0I7QUFBQTs7QUFDdEIsU0FBS0MsQ0FBTCxHQUFTLEVBQVQsQ0FEc0IsQ0FDVjs7QUFDWixTQUFLQSxDQUFMLENBQU9DLFNBQVAsR0FBbUJGLFVBQW5CLENBRnNCLENBRVE7O0FBRTlCLFNBQUtHLFFBQUw7O0FBQ0EsU0FBS0MsV0FBTDs7QUFDQSxTQUFLQyxXQUFMO0FBQ0Q7QUFFRDs7Ozs7OzsrQkFHVztBQUNULFdBQUtKLENBQUwsQ0FBT0ssS0FBUCxHQUFlQyxLQUFLLENBQUNDLElBQU4sQ0FDYixLQUFLUCxDQUFMLENBQU9DLFNBQVAsQ0FBaUJPLGdCQUFqQixDQUFrQyxr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Q0FBMEIsYUFBMUIsQ0FBWCxDQUFmOztBQUNBLDRCQUFvQm9NLE1BQXBCLCtCQUE0QjtBQUF2QixNQUFNN0MsS0FBSyxlQUFYO0FBQ0gsTUFBSUQsdURBQUosQ0FBbUJDLEtBQW5CO0FBQ0Q7O0FBRUQsSUFBTThDLE9BQU8sR0FBR3ZNLEtBQUssQ0FBQ0MsSUFBTixDQUFXMkMsUUFBUSxDQUFDMUMsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBWCxDQUFoQjs7QUFDQSw2QkFBcUJxTSxPQUFyQixnQ0FBOEI7QUFBekIsTUFBTWxCLE1BQU0sZ0JBQVo7QUFDSCxNQUFJRCw4Q0FBSixDQUFVQyxNQUFWO0FBQ0Q7O0FBRUQsSUFBSUcsOENBQUo7QUFFQSxJQUFNRyxLQUFLLEdBQUczTCxLQUFLLENBQUNDLElBQU4sQ0FBVzJDLFFBQVEsQ0FBQzFDLGdCQUFULENBQTBCLE9BQTFCLENBQVgsQ0FBZDs7QUFDQSwyQkFBbUJ5TCxLQUFuQiw4QkFBMEI7QUFBckIsTUFBTWEsSUFBSSxjQUFWO0FBQ0gsTUFBSWQsNkNBQUosQ0FBU2MsSUFBVDtBQUNELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi5qc1wiKTtcbiIsIi8qKioqKioqKioqXG4gKiBBY2NvcmRpb25cbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEFjY29yZGlvbiB7XG4gIGNvbnN0cnVjdG9yKCRhY2NvcmRpb24pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmFjY29yZGlvbiA9ICRhY2NvcmRpb24gLy8gQWRkIGFjY29yZGlvbiBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19pdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHRoaXMuJC5hY2NvcmRpb24uZGF0YXNldC5tdWx0aXBsZSAvLyBTZXQgaXMgbXVsdGlwbGUgaXRlbSBvcGVuLlxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgIGlmICgkaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgaXRlbTogJGl0ZW0sIGhlaWdodDogY29udGVudEhlaWdodCB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9ICRjb250ZW50Lm9mZnNldEhlaWdodFxuICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCB7IGl0ZW0sIGhlaWdodCB9IG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1CdXR0b24nKVxuICAgICAgY29uc3QgJGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHsgaXRlbSB9IG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKS5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXG4iLCIvKioqKioqKioqKlxuICogQ2Fyb3VzZWxcbiAqIHYxLjAuMVxuICovXG5cbmNsYXNzIENhcm91c2VsIHtcbiAgY29uc3RydWN0b3IoJGNhcm91c2VsKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jYXJvdXNlbCA9ICRjYXJvdXNlbCAvLyBBZGQgY2Fyb3VzZWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24gPSB7XG4gICAgICBsZWZ0OiB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLWxlZnQnKSxcbiAgICAgIHJpZ2h0OiB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLXJpZ2h0JylcbiAgICB9XG4gICAgdGhpcy4kLml0ZW1zID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbXMnKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzVG91Y2hEZXZpY2UgPSAhIShcbiAgICAgICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHNcbiAgICApXG4gICAgdGhpcy50eXBlID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgPyB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50eXBlXG4gICAgICA6ICdub3JtYWwnXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgIHRoaXMucGFnaW5hdGlvbiA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnBhZ2luYXRpb25cbiAgICB0aGlzLmRyYWcgPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5kcmFnXG4gICAgdGhpcy5hdXRvID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuYXV0b1xuICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGhcbiAgICB0aGlzLm51bWJlckl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICkubGVuZ3RoXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCAkcGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkcGFnaW5hdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbicpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJJdGVtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5pdGVtID0gaSArIDFcblxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgJHBhZ2luYXRpb24uYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9XG4gICAgICB0aGlzLiQuY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoJHBhZ2luYXRpb24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0bykge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgICAgfSwgcGFyc2VJbnQodGhpcy5hdXRvKSlcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQubmF2aWdhdGlvbi5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5fbW92ZUxlZnQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQubmF2aWdhdGlvbi5yaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVSaWdodCgpXG4gICAgfSlcblxuICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHRoaXMuX21vdmVSaWdodCgpXG4gICAgfSlcblxuICAgIGZvciAoY29uc3QgJGJ1bGxldCBvZiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgKSkge1xuICAgICAgJGJ1bGxldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICRidWxsZXQuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygkYnVsbGV0LmRhdGFzZXQuaXRlbSAtIDEpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHBhcnNlSW50KCRidWxsZXQuZGF0YXNldC5pdGVtKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kcmFnKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRGV2aWNlKSB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPiB0aGlzLmFjdHVhbFBvc2l0aW9uKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA8IHRoaXMuYWN0dWFsUG9zaXRpb24pXG4gICAgICAgICAgICAgIHRoaXMuX21vdmVSaWdodCgpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcyAmJlxuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMSAmJlxuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IHRydWVcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IDBcbiAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLl9kcmFnSXRlbXMoZXZlbnQuY2xpZW50WClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjApIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gMjApIHRoaXMuX21vdmVSaWdodCgpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24gKyAyMCB8fFxuICAgICAgICAgICAgICBldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcyAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMSAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RyYWdJdGVtcyhjbGllbnRYKSB7XG4gICAgaWYgKHRoaXMucHJlc3NJdGVtcykge1xuICAgICAgaWYgKGNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gY2xpZW50WCAtIHRoaXMuYWN0dWFsUG9zaXRpb25cblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdDcmV0YWVkSXRlbSkge1xuICAgICAgICAgICAgICBjb25zdCAkbGFzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlTGFzdEl0ZW0gPSAkbGFzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0sXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7IHg6IHRoaXMudHJhbnNsYXRlIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgICAgICBUd2VlbkxpdGUudG8odGhpcy4kLml0ZW1zLCAwLjEsIHtcbiAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICAodGhpcy5hY3RpdmVJdGVtIC0gMSkgKiAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoICtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gY2xpZW50WFxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlSXRlbSAtIDEpICogLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICAgIGNvbnN0ICRmaXJzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmNhcm91c2VsX19pdGVtJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVGaXJzdEl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUd2VlbkxpdGUudG8odGhpcy4kLml0ZW1zLCAwLjEsIHtcbiAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICAodGhpcy5udW1iZXJJdGVtcyAtIDEpICogLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICBUd2VlbkxpdGUudG8odGhpcy4kLml0ZW1zLCAwLjEsIHtcbiAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICAodGhpcy5hY3RpdmVJdGVtIC0gMSkgKiAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUxlZnQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdsb29wJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLm51bWJlckl0ZW1zIC0gMSwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVMYXN0SXRlbSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKSxcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoLTEsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPD0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdsb29wJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygwLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVGaXJzdEl0ZW0pXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUl0ZW1zKHgsIHBvc2l0aW9uID0gbnVsbCkge1xuICAgIGxldCB0XG4gICAgY2xlYXJUaW1lb3V0KHQpXG4gICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0J1xuICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3ggKiAtdGhpcy53aWR0aH1weClgXG5cbiAgICB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJlxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDFcbiAgICAgICkge1xuICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQodGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpKVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcblxuICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpLFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdsZWZ0JyAmJlxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICkge1xuICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQodGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5udW1iZXJJdGVtcyAtIDEpICpcbiAgICAgICAgICAtdGhpcy53aWR0aH0pYFxuICAgICAgfVxuICAgIH0sIDEwMDApXG5cbiAgICBpZiAocG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bGFzdC1jaGlsZCcpXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bnRoLWNoaWxkKCR7dGhpcy5hY3RpdmVJdGVtIC0gMX0pYFxuICAgICAgICAgIClcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Om50aC1jaGlsZCgke3RoaXMuYWN0aXZlSXRlbSArIDF9KWBcbiAgICAgICAgICApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbUZpbGVcbiAqIHYxLjAuMHNcbiAqL1xuXG5jbGFzcyBDdXN0b21GaWxlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbUZpbGUpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUgPSAkY3VzdG9tRmlsZSAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzQnV0dG9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25cbiAgICB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgOiAncmlnaHQnXG4gICAgdGhpcy5pc1NpemUgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnNpemVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmlzQnV0dG9uXG4gICAgfVxuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuaW5uZXJIVE1MID0gJydcblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19jb250YWluZXInKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBsYWJlbFxuICAgIHRoaXMuJC5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmxhYmVsXG4gICAgdGhpcy4kLmxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19sYWJlbCcpXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcblxuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpXG4gICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIHNpemUgaW5mb1xuICAgICAgdGhpcy4kLnNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHRoaXMuJC5zaXplLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19zaXplJylcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9ICcwIG1iJ1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLnNpemUpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuaW5wdXQuY2xpY2soKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3RlJylcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgIGNvbnN0IGJ5dGVzID0gZmlsZS5zaXplXG4gICAgICBjb25zdCBzaXplcyA9IFsnYnl0ZXMnLCAna2InLCAnbWInLCAnZ2InLCAndGInXVxuICAgICAgY29uc3QgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKVxuICAgICAgY29uc3QgY29udmVydCA9IE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMilcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IGAke2NvbnZlcnR9ICR7c2l6ZXNbaV19YFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRmlsZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVJhbmdlXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBDdXN0b21SYW5nZSB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21SYW5nZSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UgPSAkY3VzdG9tUmFuZ2UgLy8gQWRkIGN1c3RvbVJhbmdlIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuY3Vyc29yUHJlc3MgPSBmYWxzZVxuICAgIHRoaXMudG90YWwgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC50b3RhbFxuICAgIHRoaXMuc3RlcCA9IHRoaXMuJC5jdXN0b21SYW5nZS5kYXRhc2V0LnN0ZXBcbiAgICB0aGlzLnRyYW5zZm9ybUN1cnNvciA9IDBcbiAgICB0aGlzLmFjdHVhbFN0ZXAgPSAwXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBDcmVhdGUgaW5wdXRcbiAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuJC5jdXN0b21SYW5nZS5kYXRhc2V0Lm5hbWUpXG4gICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIC8vIENyZWF0ZSBiYWNrZ3JvdW5kIGJhci5cbiAgICB0aGlzLiQuYmFja2dyb3VuZEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLmJhY2tncm91bmRCYXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19iYXInKVxuICAgIHRoaXMuJC5iYWNrZ3JvdW5kQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyLS1iYWNrZ3JvdW5kJylcblxuICAgIC8vIENyZWF0ZSBwbGFpbiBiYXIuXG4gICAgdGhpcy4kLnBsYWluQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLiQucGxhaW5CYXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19iYXInKVxuICAgIHRoaXMuJC5wbGFpbkJhci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2Jhci0tcGxhaW4nKVxuXG4gICAgLy8gQ3JlYXRlIGN1c3Jvci5cbiAgICB0aGlzLiQuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLiQuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fY3Vyc29yJylcblxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQuYmFja2dyb3VuZEJhcilcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLnBsYWluQmFyKVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQuY3Vyc29yKVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICB0aGlzLiQuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC01MCUpYFxuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuJC5jdXN0b21SYW5nZS5vZmZzZXRXaWR0aFxuICAgIHRoaXMubnVtYmVyU3RlcHMgPSB0aGlzLnRvdGFsIC8gdGhpcy5zdGVwIC8vIG5vbWJyZSBkZSBmb2lzIHBvdXIgYXJyaXZlciBhIHRvdGFsXG4gICAgdGhpcy5yYXRpbyA9IHRoaXMud2lkdGggLyB0aGlzLm51bWJlclN0ZXBzIC8vIHBpeGVsIGRlIGxhcmdldXIgcG91ciAxJSBkdSB0b3RhbFxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5jdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5jdXJzb3JQcmVzcyA9IHRydWVcbiAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC5jbGllbnRYXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBldiA9PiB7XG4gICAgICB0aGlzLmN1cnNvclByZXNzID0gZmFsc2VcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuY3Vyc29yUHJlc3MpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICYmXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCA+PSAodGhpcy5hY3R1YWxTdGVwICsgMSkgKiB0aGlzLnJhdGlvICYmXG4gICAgICAgICAgdGhpcy5hY3R1YWxTdGVwIDwgdGhpcy5udW1iZXJTdGVwc1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnRyYW5zZm9ybUN1cnNvciA9XG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwICsgMSkgKiB0aGlzLnJhdGlvIC0gdGhpcy4kLmN1cnNvci5vZmZzZXRXaWR0aCAvIDJcbiAgICAgICAgICB0aGlzLiQuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy50cmFuc2Zvcm1DdXJzb3J9cHgpYFxuICAgICAgICAgIHRoaXMuJC5wbGFpbkJhci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7KDEgLyB0aGlzLm51bWJlclN0ZXBzKSAqXG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwICsgMSl9KWBcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcCsrXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gJiZcbiAgICAgICAgICBldmVudC5jbGllbnRYIDw9ICh0aGlzLmFjdHVhbFN0ZXAgLSAxKSAqIHRoaXMucmF0aW8gJiZcbiAgICAgICAgICB0aGlzLmFjdHVhbFN0ZXAgPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudHJhbnNmb3JtQ3Vyc29yID1cbiAgICAgICAgICAgICh0aGlzLmFjdHVhbFN0ZXAgLSAxKSAqIHRoaXMucmF0aW8gLSB0aGlzLiQuY3Vyc29yLm9mZnNldFdpZHRoIC8gMlxuICAgICAgICAgIHRoaXMuJC5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zZm9ybUN1cnNvcn1weClgXG4gICAgICAgICAgdGhpcy4kLnBsYWluQmFyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHsoMSAvIHRoaXMubnVtYmVyU3RlcHMpICpcbiAgICAgICAgICAgICh0aGlzLmFjdHVhbFN0ZXAgLSAxKX0pYFxuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC5jbGllbnRYXG4gICAgICAgICAgdGhpcy5hY3R1YWxTdGVwLS1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBsZXQgY2xpY2tTdGVwID0gMFxuICAgICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPD0gdGhpcy5udW1iZXJTdGVwczsgc3RlcCsrKSB7XG4gICAgICAgIGlmIChldmVudC5jbGllbnRYID4gc3RlcCAqIHRoaXMucmF0aW8gLSAyMCkgY2xpY2tTdGVwID0gc3RlcFxuICAgICAgfVxuXG4gICAgICB0aGlzLnRyYW5zZm9ybUN1cnNvciA9XG4gICAgICAgIGNsaWNrU3RlcCAqIHRoaXMucmF0aW8gLSB0aGlzLiQuY3Vyc29yLm9mZnNldFdpZHRoIC8gMlxuICAgICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNmb3JtQ3Vyc29yfXB4KWBcbiAgICAgIHRoaXMuJC5wbGFpbkJhci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7KDEgLyB0aGlzLm51bWJlclN0ZXBzKSAqXG4gICAgICAgIGNsaWNrU3RlcH0pYFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUmFuZ2VcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21TZWxlY3RcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIEN1c3RvbVNlbGVjdCB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21TZWxlY3QpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdCA9ICRjdXN0b21TZWxlY3QgLy8gQWRkIGN1c3RvbS1zZWxlY3QgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lm5hbWVcbiAgICB0aGlzLmlzRmlsdGVycyA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5maWx0ZXJzIC8vIFNldCBmaWx0ZXJzIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubW9iaWxlIC8vIFNldCBjdXN0b20gbW9iaWxlIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgYWN0aXZhdGVkIGxhYmVsLlxuICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5pdGVtcykgLy8gQ3JlYXRlIEpTT04gb2JqZWN0IHdpdGggaXRlbXMuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlcykge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICAgIGNvbnN0ICRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgJHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZGVmYXVsdCBzZWxlY3Qgb3B0aW9uLlxuICAgICAgY29uc3QgJG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJylcbiAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmxhYmVsXG4gICAgICAkc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG5cbiAgICAgIC8vIENyZWF0ZSBzZWxlY3Qgb3B0aW9ucy5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLnZhbHVlKVxuICAgICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0ubGFiZWxcbiAgICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkb3B0aW9uKVxuICAgICAgfVxuXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmlubmVySFRNTCA9ICcnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKCRzZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycylcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1maWx0ZXJzJylcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IHdpdGggZWxlbWVudHMuXG4gICAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jb250ZW50JylcblxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAkaXRlbS5kYXRhc2V0LmxhYmVsID0gaXRlbS5sYWJlbFxuICAgICAgICAkaXRlbS5kYXRhc2V0LnZhbHVlID0gaXRlbS52YWx1ZVxuICAgICAgICAkaXRlbS5pbm5lclRleHQgPSBpdGVtLmxhYmVsXG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2l0ZW0nKVxuICAgICAgICAkY29udGVudC5hcHBlbmRDaGlsZCgkaXRlbSlcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jaG9vc2Uuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY2hvb3NlJylcbiAgICAgIGlmICghdGhpcy5pc0ZpbHRlcnMpXG4gICAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJIVE1MID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmxhYmVsXG5cbiAgICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY29udGFpbmVyJylcbiAgICAgICRjb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm5hbWUpXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuY2hvb3NlKVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgICAvLyBDcmVhdGUgaW5wdXQgZm9yIHNlbGVjdCB2YWx1ZS5cbiAgICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3RfX2l0ZW0nKVxuICAgICAgKSAvLyBHZXQgYWxsIGl0ZW1zIGluIGFycmF5LlxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGZpbHRlciBpbnB1dC5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmxhYmVsXG4gICAgICAgIHRoaXMuJC5jaG9vc2UuYXBwZW5kQ2hpbGQodGhpcy4kLmZpbHRlcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykgfHxcbiAgICAgIHRoaXMuaXNPbk1vYmlsZVxuICAgICkge1xuICAgICAgdGhpcy4kLmNob29zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlVmFsdWUoJGl0ZW0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAnJ1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRoaXMudmlydHVhbExhYmVsKVxuICAgICAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICAgICAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgICAgICAgaWYgKCRpdGVtLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuJC5maWx0ZXIudmFsdWUpKVxuICAgICAgICAgICAgICAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgZWxzZSAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuY3VzdG9tU2VsZWN0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuXG4gICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kLmZpbHRlci52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMudmlydHVhbExhYmVsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cblxuICBfY2hhbmdlVmFsdWUoJGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAkaXRlbS5kYXRhc2V0LmxhYmVsXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJUZXh0ID0gJGl0ZW0uZGF0YXNldC5sYWJlbFxuICAgIH1cblxuICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9ICRpdGVtLmRhdGFzZXQudmFsdWVcbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9ICRpdGVtLmRhdGFzZXQubGFiZWxcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdFxuIiwiLyoqKioqKioqKipcbiAqIERyb3Bkb3duXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKCRkcm9wZG93bikge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZHJvcGRvd24gPSAkZHJvcGRvd24gLy8gQWRkIGRyb3Bkb3duIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNPbk1vYmlsZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5uYW1lID0gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQubmFtZVxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbGluaycgLy8gU2V0IHR5cGUgb2YgZHJvcGRvd24uXG4gICAgdGhpcy5pdGVtcyA9XG4gICAgICB0aGlzLnR5cGUgPT09ICdsaW5rJyA/IEpTT04ucGFyc2UodGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQuaXRlbXMpIDogbnVsbCAvLyBDcmVhdGUgSlNPTiBvYmplY3Qgd2l0aCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmlzT25Nb2JpbGUgJiZcbiAgICAgIHRoaXMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlc1xuICAgICkge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICAgIHRoaXMuJC5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG4gICAgICB0aGlzLiQuc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG5cbiAgICAgIC8vIENyZWF0ZSBzZWxlY3Qgb3B0aW9ucy5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLmxpbmspXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICB0aGlzLiQuc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5kcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuJC5zZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjb250ZW50JylcbiAgICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pdGVtJylcbiAgICAgICAgKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jb250ZW50JylcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAkaXRlbS5pbm5lclRleHQgPSBpdGVtLmxhYmVsXG4gICAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCdocmVmJywgaXRlbS5saW5rKVxuXG4gICAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2l0ZW0nKVxuICAgICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2Nob29zZScpXG4gICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG4gICAgICB0aGlzLiQuY2hvb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWUpXG5cbiAgICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRhaW5lcicpXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICAgJGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuJC5jaG9vc2UpXG4gICAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9faXRlbScpXG4gICAgICApIC8vIEdldCBhbGwgaXRlbXMgaW4gYXJyYXkuXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHx8XG4gICAgICB0aGlzLmlzT25Nb2JpbGUgfHxcbiAgICAgICghdGhpcy5pc09uTW9iaWxlICYmIHRoaXMudHlwZSA9PT0gJ2NvbnRlbnQnKVxuICAgICkge1xuICAgICAgdGhpcy4kLmNob29zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5kcm9wZG93bi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy4kLmRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIXRoaXMuaXNPbk1vYmlsZSAmJlxuICAgICAgdGhpcy50eXBlID09PSAnbGluaycgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5OTFweCknKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICB0aGlzLiQuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy4kLnNlbGVjdC52YWx1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqKioqKioqKipcbiAqIEZvcm1WYWxpZGF0aW9uXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBGb3JtVmFsaWRhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCRmb3JtKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5mb3JtID0gJGZvcm0gLy8gQWRkIGZvcm0gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmlucHV0R3JvdXBzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCAkaW5wdXRHcm91cCBvZiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyb3VwJylcbiAgICApKSB7XG4gICAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZSgkaW5wdXRHcm91cClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoJGlucHV0R3JvdXApIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgY29uc3QgdmFsdWUgPSAkaW5wdXQudmFsdWVcbiAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJylcblxuICAgIC8vIHJ1bGVzXG4gICAgY29uc3QgcnVsZXMgPSB7fVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkKVxuICAgICAgcnVsZXMucmVxdWlyZWQgPSAkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQubWlubGVuZ3RoKVxuICAgICAgcnVsZXMubWluTGVuZ3RoID0gcGFyc2VJbnQoJGlucHV0R3JvdXAuZGF0YXNldC5taW5sZW5ndGgpXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQubWF4bGVuZ3RoKVxuICAgICAgcnVsZXMubWF4TGVuZ3RoID0gcGFyc2VJbnQoJGlucHV0R3JvdXAuZGF0YXNldC5tYXhsZW5ndGgpXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRtZXNzYWdlKVxuICAgICAgcnVsZXMucmVxdWlyZWRNZXNzYWdlID0gJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZG1lc3NhZ2VcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1pbmxlbmd0aClcbiAgICAgIHJ1bGVzLmVycm9yTWluTGVuZ3RoID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1pbmxlbmd0aFxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWF4bGVuZ3RoKVxuICAgICAgcnVsZXMuZXJyb3JNYXhMZW5ndGggPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWF4bGVuZ3RoXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtZXNzYWdlKVxuICAgICAgcnVsZXMuZXJyb3JNZXNzYWdlID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1lc3NhZ2VcblxuICAgIGlmIChpbnB1dFR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSlcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICBlbHNlIGlmIChydWxlcy5taW5MZW5ndGggJiYgdmFsdWUubGVuZ3RoIDwgcnVsZXMubWluTGVuZ3RoKVxuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gcnVsZXMubWF4TGVuZ3RoKVxuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1heExlbmd0aCB8fCAndG9vIGJpZycpXG4gICAgICBlbHNlIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpXG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLnJlcXVpcmVkTWVzc2FnZSB8fCAncmVxdWlyZWQnKVxuICAgICAgZWxzZSBpZiAocnVsZXMubWluTGVuZ3RoICYmIHZhbHVlIDwgcnVsZXMubWluTGVuZ3RoKVxuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUgPiBydWxlcy5tYXhMZW5ndGgpXG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWF4TGVuZ3RoIHx8ICd0b28gYmlnJylcbiAgICAgIGVsc2UgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnZW1haWwnKSB7XG4gICAgICBpZiAocnVsZXMucmVxdWlyZWQgJiYgIXZhbHVlKVxuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICAhdmFsdWUubWF0Y2goXG4gICAgICAgICAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1lc3NhZ2UgfHwgJ25vdCBhIHZhbGlkIGVtYWlsJylcbiAgICAgIGVsc2UgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAndGVsJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSlcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICBlbHNlIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICB9XG4gIH1cblxuICBzZXRFcnJvcigkaW5wdXRHcm91cCwgZXJyb3IpIHtcbiAgICBsZXQgJGVycm9yID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignLmlucHV0LWdyb3VwLS1lcnJvcicpXG4gICAgaWYgKCRlcnJvcikge1xuICAgICAgJGVycm9yLmlubmVyVGV4dCA9IGVycm9yXG4gICAgfSBlbHNlIHtcbiAgICAgICRlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgJGVycm9yLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwLS1lcnJvcicpXG4gICAgICAkZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JcbiAgICAgICRpbnB1dEdyb3VwLmFwcGVuZENoaWxkKCRlcnJvcilcbiAgICB9XG4gIH1cblxuICBjbGVhckVycm9yKCRpbnB1dEdyb3VwKSB7XG4gICAgY29uc3QgJGVycm9yID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignLmlucHV0LWdyb3VwLS1lcnJvcicpXG4gICAgaWYgKCRlcnJvcikge1xuICAgICAgJGlucHV0R3JvdXAucmVtb3ZlQ2hpbGQoJGVycm9yKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdGlvblxuIiwiLyoqKioqKioqKipcbiAqIE1vZGFsXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKCRtb2RhbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQubW9kYWwgPSAkbW9kYWwgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1vZGFsLWJ1dHRvbltkYXRhLW1vZGFsPVwiJHt0aGlzLiQubW9kYWwuZGF0YXNldC5tb2RhbH1cIl1gXG4gICAgICApXG4gICAgKVxuICAgICAgdGhpcy4kLmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubW9kYWwtYnV0dG9uW2RhdGEtbW9kYWw9XCIke3RoaXMuJC5tb2RhbC5kYXRhc2V0Lm1vZGFsfVwiXWBcbiAgICAgIClcbiAgICBpZiAodGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKSlcbiAgICAgIHRoaXMuJC5jbG9zZSA9IHRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJylcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLS1hY3RpdmUnKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKS5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy4kLmJ1dHRvbikge1xuICAgICAgdGhpcy4kLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kLmNsb3NlKSB7XG4gICAgICB0aGlzLiQuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCJjbGFzcyBSZXNldCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdrZXlib2FyZCcpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNldFxuIiwiLyoqKioqKioqKipcbiAqIFRhYnNcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIFRhYnMge1xuICBjb25zdHJ1Y3RvcigkdGFicykge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQudGFicyA9ICR0YWJzIC8vIEFkZCBtb2RhbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaGVhZGVySXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2hlYWRlckl0ZW0nKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgJGhlYWRlckl0ZW0gb2YgdGhpcy4kLmhlYWRlckl0ZW1zKSB7XG4gICAgICBjb25zdCAkY29udGVudEl0ZW0gPSB0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnRhYnNfX2NvbnRlbnRJdGVtW2RhdGEtaXRlbT1cIiR7JGhlYWRlckl0ZW0uZGF0YXNldC5pdGVtfVwiXWBcbiAgICAgIClcbiAgICAgICRoZWFkZXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcignLnRhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpKVxuICAgICAgICAgIHRoaXMuJC50YWJzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgndGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgaWYgKHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJykpXG4gICAgICAgICAgdGhpcy4kLnRhYnNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgndGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICAgICRoZWFkZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgICRjb250ZW50SXRlbS5jbGFzc0xpc3QuYWRkKCd0YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNcbiIsImltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCdcbmltcG9ydCBDdXN0b21GaWxlIGZyb20gJy4vQ3VzdG9tRmlsZSdcbmltcG9ydCBDdXN0b21SYW5nZSBmcm9tICcuL0N1c3RvbVJhbmdlJ1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tICcuL0N1c3RvbVNlbGVjdCdcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duJ1xuaW1wb3J0IEZvcm1WYWxpZGF0aW9uIGZyb20gJy4vRm9ybVZhbGlkYXRpb24nXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCBSZXNldCBmcm9tICcuL1Jlc2V0J1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJ1xuXG5jb25zdCAkYWNjb3JkaW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpKVxuZm9yIChjb25zdCAkYWNjb3JkaW9uIG9mICRhY2NvcmRpb25zKSB7XG4gIG5ldyBBY2NvcmRpb24oJGFjY29yZGlvbilcbn1cblxuY29uc3QgJGNhcm91c2VscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsJykpXG5mb3IgKGNvbnN0ICRjYXJvdXNlbCBvZiAkY2Fyb3VzZWxzKSB7XG4gIG5ldyBDYXJvdXNlbCgkY2Fyb3VzZWwpXG59XG5cbmNvbnN0ICRjdXN0b21GaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1maWxlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21GaWxlIG9mICRjdXN0b21GaWxlcykge1xuICBuZXcgQ3VzdG9tRmlsZSgkY3VzdG9tRmlsZSlcbn1cblxuY29uc3QgJGN1c3RvbVJhbmdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYW5nZScpKVxuZm9yIChjb25zdCAkY3VzdG9tUmFuZ2Ugb2YgJGN1c3RvbVJhbmdlcykge1xuICBuZXcgQ3VzdG9tUmFuZ2UoJGN1c3RvbVJhbmdlKVxufVxuXG5jb25zdCAkY3VzdG9tU2VsZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3QnKSlcbmZvciAoY29uc3QgJGN1c3RvbVNlbGVjdCBvZiAkY3VzdG9tU2VsZWN0cykge1xuICBuZXcgQ3VzdG9tU2VsZWN0KCRjdXN0b21TZWxlY3QpXG59XG5cbmNvbnN0ICRkcm9wZG93bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpKVxuZm9yIChjb25zdCAkZHJvcGRvd24gb2YgJGRyb3Bkb3ducykge1xuICBuZXcgRHJvcGRvd24oJGRyb3Bkb3duKVxufVxuXG5jb25zdCAkZm9ybXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWxpZGF0aW9uJykpXG5mb3IgKGNvbnN0ICRmb3JtIG9mICRmb3Jtcykge1xuICBuZXcgRm9ybVZhbGlkYXRpb24oJGZvcm0pXG59XG5cbmNvbnN0ICRtb2RhbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpKVxuZm9yIChjb25zdCAkbW9kYWwgb2YgJG1vZGFscykge1xuICBuZXcgTW9kYWwoJG1vZGFsKVxufVxuXG5uZXcgUmVzZXQoKVxuXG5jb25zdCAkdGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSlcbmZvciAoY29uc3QgJHRhYiBvZiAkdGFicykge1xuICBuZXcgVGFicygkdGFiKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==