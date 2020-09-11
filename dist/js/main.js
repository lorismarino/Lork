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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbUZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2pzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2pzL0Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL1Jlc2V0LmpzIiwid2VicGFjazovLy8uL2pzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInB1c2giLCJpdGVtIiwiaGVpZ2h0Iiwic3R5bGUiLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkNhcm91c2VsIiwiJGNhcm91c2VsIiwiY2Fyb3VzZWwiLCJuYXZpZ2F0aW9uIiwibGVmdCIsInJpZ2h0IiwiaXNUb3VjaERldmljZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwidHlwZSIsImFjdGl2ZUl0ZW0iLCJwYWdpbmF0aW9uIiwiZHJhZyIsImF1dG8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibnVtYmVySXRlbXMiLCJsZW5ndGgiLCIkcGFnaW5hdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInNldEludGVydmFsIiwiX21vdmVSaWdodCIsInBhcnNlSW50IiwiX21vdmVMZWZ0Iiwia2V5Q29kZSIsIiRidWxsZXQiLCJfbW92ZUl0ZW1zIiwiYWN0dWFsUG9zaXRpb24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsInByZXNzSXRlbXMiLCJ0cmFuc2xhdGUiLCJkcmFnQ3JldGFlZEl0ZW0iLCJfZHJhZ0l0ZW1zIiwiY2hhbmdlZFRvdWNoZXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCIkbGFzdEl0ZW0iLCJkdXBsaWNhdGVMYXN0SXRlbSIsImNsb25lTm9kZSIsInRyYW5zZm9ybSIsInBvc2l0aW9uIiwiaW5zZXJ0QmVmb3JlIiwiVHdlZW5MaXRlIiwidG8iLCJ4IiwiJGZpcnN0SXRlbSIsImR1cGxpY2F0ZUZpcnN0SXRlbSIsInQiLCJjbGVhclRpbWVvdXQiLCJ0cmFuc2l0aW9uIiwiQ3VzdG9tRmlsZSIsIiRjdXN0b21GaWxlIiwiY3VzdG9tRmlsZSIsImlzQnV0dG9uIiwiYnV0dG9uIiwiaXNCdXR0b25Qb3NpdGlvbiIsImJ1dHRvbnBvcyIsImlzU2l6ZSIsInNpemUiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJjb250YWluZXIiLCJsYWJlbCIsImlucHV0IiwibmFtZSIsImRpc3BsYXkiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwiZmlsZXMiLCJieXRlcyIsInNpemVzIiwiTWF0aCIsImZsb29yIiwiY29udmVydCIsInJvdW5kIiwicG93IiwiQ3VzdG9tUmFuZ2UiLCIkY3VzdG9tUmFuZ2UiLCJjdXN0b21SYW5nZSIsImN1cnNvclByZXNzIiwidG90YWwiLCJzdGVwIiwidHJhbnNmb3JtQ3Vyc29yIiwiYWN0dWFsU3RlcCIsImJhY2tncm91bmRCYXIiLCJwbGFpbkJhciIsImN1cnNvciIsIm51bWJlclN0ZXBzIiwicmF0aW8iLCJldiIsImNsaWNrU3RlcCIsIkN1c3RvbVNlbGVjdCIsIiRjdXN0b21TZWxlY3QiLCJjdXN0b21TZWxlY3QiLCJpc0ZpbHRlcnMiLCJmaWx0ZXJzIiwiaXNPbk1vYmlsZSIsIm1vYmlsZSIsInZpcnR1YWxMYWJlbCIsIkpTT04iLCJwYXJzZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiJHNlbGVjdCIsIiRvcHRpb24iLCJ2YWx1ZSIsImNob29zZSIsIiRjb250YWluZXIiLCJmaWx0ZXIiLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJfY2hhbmdlVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiRHJvcGRvd24iLCIkZHJvcGRvd24iLCJkcm9wZG93biIsInNlbGVjdCIsImxpbmsiLCJsb2NhdGlvbiIsIkZvcm1WYWxpZGF0aW9uIiwiJGZvcm0iLCJmb3JtIiwibm9JbnN0YW50Iiwibm9pbnN0YW50Iiwibm9TdWJtaXQiLCJub3N1Ym1pdCIsImZvcm1FcnJvciIsImlucHV0R3JvdXBzIiwiJGlucHV0R3JvdXAiLCIkaW5wdXQiLCJ2YWxpZGF0ZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRUeXBlIiwiZ2V0QXR0cmlidXRlIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsIm1pbkxlbmd0aCIsIm1heGxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkbWVzc2FnZSIsInJlcXVpcmVkTWVzc2FnZSIsImVycm9ybWlubGVuZ3RoIiwiZXJyb3JNaW5MZW5ndGgiLCJlcnJvcm1heGxlbmd0aCIsImVycm9yTWF4TGVuZ3RoIiwiZXJyb3JtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3IiLCJjbGVhckVycm9yIiwibWF0Y2giLCJlcnJvciIsIiRlcnJvciIsIk1vZGFsIiwiJG1vZGFsIiwibW9kYWwiLCJjbG9zZSIsIlJlc2V0IiwiYm9keSIsIlRhYnMiLCIkdGFicyIsInRhYnMiLCJoZWFkZXJJdGVtcyIsIiRoZWFkZXJJdGVtIiwiJGNvbnRlbnRJdGVtIiwiJGFjY29yZGlvbnMiLCIkY2Fyb3VzZWxzIiwiJGN1c3RvbUZpbGVzIiwiJGN1c3RvbVJhbmdlcyIsIiRjdXN0b21TZWxlY3RzIiwiJGRyb3Bkb3ducyIsIiRmb3JtcyIsIiRtb2RhbHMiLCIkdGFiIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztJQUtNQSxTO0FBQ0oscUJBQVlDLFVBQVosRUFBd0I7QUFBQTs7QUFDdEIsU0FBS0MsQ0FBTCxHQUFTLEVBQVQsQ0FEc0IsQ0FDVjs7QUFDWixTQUFLQSxDQUFMLENBQU9DLFNBQVAsR0FBbUJGLFVBQW5CLENBRnNCLENBRVE7O0FBRTlCLFNBQUtHLFFBQUw7O0FBQ0EsU0FBS0MsV0FBTDs7QUFDQSxTQUFLQyxXQUFMO0FBQ0Q7QUFFRDs7Ozs7OzsrQkFHVztBQUNULFdBQUtKLENBQUwsQ0FBT0ss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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCIvKioqKioqKioqKlxuICogQWNjb3JkaW9uXG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBBY2NvcmRpb24ge1xuICBjb25zdHJ1Y3RvcigkYWNjb3JkaW9uKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5hY2NvcmRpb24gPSAkYWNjb3JkaW9uIC8vIEFkZCBhY2NvcmRpb24gaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5hY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB0aGlzLiQuYWNjb3JkaW9uLmRhdGFzZXQubXVsdGlwbGUgLy8gU2V0IGlzIG11bHRpcGxlIGl0ZW0gb3Blbi5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICBpZiAoJGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IGl0ZW06ICRpdGVtLCBoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpdGVtOiAkaXRlbSwgaGVpZ2h0OiBjb250ZW50SGVpZ2h0IH0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgeyBpdGVtLCBoZWlnaHQgfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQnV0dG9uJylcbiAgICAgIGNvbnN0ICRjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB7IGl0ZW0gfSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvblxuIiwiLyoqKioqKioqKipcbiAqIENhcm91c2VsXG4gKiB2MS4wLjFcbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKCRjYXJvdXNlbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY2Fyb3VzZWwgPSAkY2Fyb3VzZWwgLy8gQWRkIGNhcm91c2VsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5uYXZpZ2F0aW9uID0ge1xuICAgICAgbGVmdDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1sZWZ0JyksXG4gICAgICByaWdodDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1yaWdodCcpXG4gICAgfVxuICAgIHRoaXMuJC5pdGVtcyA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW1zJylcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pc1RvdWNoRGV2aWNlID0gISEoXG4gICAgICAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzXG4gICAgKVxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbm9ybWFsJ1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICB0aGlzLnBhZ2luYXRpb24gPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5wYWdpbmF0aW9uXG4gICAgdGhpcy5kcmFnID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuZHJhZ1xuICAgIHRoaXMuYXV0byA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmF1dG9cbiAgICB0aGlzLndpZHRoID0gdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoXG4gICAgdGhpcy5udW1iZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJylcbiAgICApLmxlbmd0aFxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgJHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJHBhZ2luYXRpb24uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb24nKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVySXRlbXM7IGkrKykge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgICAgICRpdGVtLmRhdGFzZXQuaXRlbSA9IGkgKyAxXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgICRwYWdpbmF0aW9uLmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfVxuICAgICAgdGhpcy4kLmNhcm91c2VsLmFwcGVuZENoaWxkKCRwYWdpbmF0aW9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG8pIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICAgIH0sIHBhcnNlSW50KHRoaXMuYXV0bykpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24ubGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVMZWZ0KClcbiAgICB9KVxuXG4gICAgdGhpcy4kLm5hdmlnYXRpb24ucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgIH0pXG5cbiAgICBmb3IgKGNvbnN0ICRidWxsZXQgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICkpIHtcbiAgICAgICRidWxsZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAkYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoJGJ1bGxldC5kYXRhc2V0Lml0ZW0gLSAxKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBwYXJzZUludCgkYnVsbGV0LmRhdGFzZXQuaXRlbSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHJhZykge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaERldmljZSkge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gdHJ1ZVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlID0gMFxuICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYWdJdGVtcyhldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdID4gdGhpcy5hY3R1YWxQb3NpdGlvbikgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPCB0aGlzLmFjdHVhbFBvc2l0aW9uKVxuICAgICAgICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiArIDIwKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwKSB0aGlzLl9tb3ZlUmlnaHQoKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjAgfHxcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gLSAyMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDEgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9kcmFnSXRlbXMoY2xpZW50WCkge1xuICAgIGlmICh0aGlzLnByZXNzSXRlbXMpIHtcbiAgICAgIGlmIChjbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IGNsaWVudFggLSB0aGlzLmFjdHVhbFBvc2l0aW9uXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLiQuaXRlbXMsIDAuMSwgeyB4OiB0aGlzLnRyYW5zbGF0ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlSXRlbSAtIDEpICogLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCArXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdGhpcy5hY3R1YWxQb3NpdGlvbiAtIGNsaWVudFhcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLiQuaXRlbXMsIDAuMSwge1xuICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgICh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0NyZXRhZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gdHJ1ZVxuICAgICAgICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5jYXJvdXNlbF9faXRlbSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMubnVtYmVySXRlbXMgLSAxKSAqIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlSXRlbSAtIDEpICogLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVMZWZ0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbG9vcCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5udW1iZXJJdGVtcyAtIDEsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgIGNvbnN0ICRsYXN0SXRlbSA9IHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCdcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBkdXBsaWNhdGVMYXN0SXRlbSA9ICRsYXN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcblxuICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlTGFzdEl0ZW0pXG4gICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJyksXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKC0xLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMubnVtYmVySXRlbXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtIDw9IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWwnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbG9vcCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoMCwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgY29uc3QgJGZpcnN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICBjb25zdCBkdXBsaWNhdGVGaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICB0aGlzLiQuaXRlbXMuYXBwZW5kQ2hpbGQoZHVwbGljYXRlRmlyc3RJdGVtKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVJdGVtcyh4LCBwb3NpdGlvbiA9IG51bGwpIHtcbiAgICBsZXQgdFxuICAgIGNsZWFyVGltZW91dCh0KVxuICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAxcyBlYXNlLWluLW91dCdcbiAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt4ICogLXRoaXMud2lkdGh9cHgpYFxuXG4gICAgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdyaWdodCcgJiZcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcblxuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKSxcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgIHBvc2l0aW9uID09PSAnbGVmdCcgJiZcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHRoaXMubnVtYmVySXRlbXMgLSAxKSAqXG4gICAgICAgICAgLXRoaXMud2lkdGh9KWBcbiAgICAgIH1cbiAgICB9LCAxMDAwKVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKVxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Omxhc3QtY2hpbGQnKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Om50aC1jaGlsZCgke3RoaXMuYWN0aXZlSXRlbSAtIDF9KWBcbiAgICAgICAgICApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKVxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpudGgtY2hpbGQoJHt0aGlzLmFjdGl2ZUl0ZW0gKyAxfSlgXG4gICAgICAgICAgKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21GaWxlXG4gKiB2MS4wLjBzXG4gKi9cblxuY2xhc3MgQ3VzdG9tRmlsZSB7XG4gIGNvbnN0cnVjdG9yKCRjdXN0b21GaWxlKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21GaWxlID0gJGN1c3RvbUZpbGUgLy8gQWRkIGN1c3RvbS1zZWxlY3QgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pc0J1dHRvbiA9IHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQuYnV0dG9uXG4gICAgdGhpcy5pc0J1dHRvblBvc2l0aW9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25wb3NcbiAgICAgID8gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25wb3NcbiAgICAgIDogJ3JpZ2h0J1xuICAgIHRoaXMuaXNTaXplID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5zaXplXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5pc0J1dHRvbikge1xuICAgICAgdGhpcy4kLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19idXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uaW5uZXJUZXh0ID0gdGhpcy5pc0J1dHRvblxuICAgIH1cblxuICAgIHRoaXMuJC5jdXN0b21GaWxlLmlubmVySFRNTCA9ICcnXG5cbiAgICBpZiAodGhpcy5pc1NpemUpIHtcbiAgICAgIHRoaXMuJC5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fY29udGFpbmVyJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0J1dHRvbiAmJiB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5pc1NpemVcbiAgICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGFiZWxcbiAgICB0aGlzLiQubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5sYWJlbFxuICAgIHRoaXMuJC5sYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fbGFiZWwnKVxuICAgIHRoaXMuaXNTaXplXG4gICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmxhYmVsKVxuICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG5cbiAgICAvLyBDcmVhdGUgaW5wdXRcbiAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy4kLmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuJC5jdXN0b21GaWxlLmRhdGFzZXQubmFtZSlcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKVxuICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5pc1NpemVcbiAgICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5idXR0b24pXG4gICAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1NpemUpIHtcbiAgICAgIHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5jb250YWluZXIpXG5cbiAgICAgIC8vIENyZWF0ZSBzaXplIGluZm9cbiAgICAgIHRoaXMuJC5zaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICB0aGlzLiQuc2l6ZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tZmlsZV9fc2l6ZScpXG4gICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSAnMCBtYidcbiAgICAgIHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5zaXplKVxuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJC5jdXN0b21GaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4kLmlucHV0LmNsaWNrKClcbiAgICB9KVxuXG4gICAgdGhpcy4kLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd0ZScpXG4gICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICB0aGlzLiQubGFiZWwuaW5uZXJUZXh0ID0gZmlsZS5uYW1lXG4gICAgICBjb25zdCBieXRlcyA9IGZpbGUuc2l6ZVxuICAgICAgY29uc3Qgc2l6ZXMgPSBbJ2J5dGVzJywgJ2tiJywgJ21iJywgJ2diJywgJ3RiJ11cbiAgICAgIGNvbnN0IGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSlcbiAgICAgIGNvbnN0IGNvbnZlcnQgPSBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpXG4gICAgICB0aGlzLiQuc2l6ZS5pbm5lclRleHQgPSBgJHtjb252ZXJ0fSAke3NpemVzW2ldfWBcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUZpbGVcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21SYW5nZVxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgQ3VzdG9tUmFuZ2Uge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tUmFuZ2UpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlID0gJGN1c3RvbVJhbmdlIC8vIEFkZCBjdXN0b21SYW5nZSBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmN1cnNvclByZXNzID0gZmFsc2VcbiAgICB0aGlzLnRvdGFsID0gdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQudG90YWxcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC5zdGVwXG4gICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPSAwXG4gICAgdGhpcy5hY3R1YWxTdGVwID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgLy8gQ3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAvLyBDcmVhdGUgYmFja2dyb3VuZCBiYXIuXG4gICAgdGhpcy4kLmJhY2tncm91bmRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuJC5iYWNrZ3JvdW5kQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyJylcbiAgICB0aGlzLiQuYmFja2dyb3VuZEJhci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2Jhci0tYmFja2dyb3VuZCcpXG5cbiAgICAvLyBDcmVhdGUgcGxhaW4gYmFyLlxuICAgIHRoaXMuJC5wbGFpbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLnBsYWluQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyJylcbiAgICB0aGlzLiQucGxhaW5CYXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19iYXItLXBsYWluJylcblxuICAgIC8vIENyZWF0ZSBjdXNyb3IuXG4gICAgdGhpcy4kLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2N1cnNvcicpXG5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmJhY2tncm91bmRCYXIpXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5wbGFpbkJhcilcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmN1cnNvcilcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtNTAlKWBcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY3VzdG9tUmFuZ2Uub2Zmc2V0V2lkdGhcbiAgICB0aGlzLm51bWJlclN0ZXBzID0gdGhpcy50b3RhbCAvIHRoaXMuc3RlcCAvLyBub21icmUgZGUgZm9pcyBwb3VyIGFycml2ZXIgYSB0b3RhbFxuICAgIHRoaXMucmF0aW8gPSB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJTdGVwcyAvLyBwaXhlbCBkZSBsYXJnZXVyIHBvdXIgMSUgZHUgdG90YWxcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuY3Vyc29yUHJlc3MgPSB0cnVlXG4gICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXYgPT4ge1xuICAgICAgdGhpcy5jdXJzb3JQcmVzcyA9IGZhbHNlXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmN1cnNvclByZXNzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiAmJlxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPj0gKHRoaXMuYWN0dWFsU3RlcCArIDEpICogdGhpcy5yYXRpbyAmJlxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcCA8IHRoaXMubnVtYmVyU3RlcHNcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPVxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCArIDEpICogdGhpcy5yYXRpbyAtIHRoaXMuJC5jdXJzb3Iub2Zmc2V0V2lkdGggLyAyXG4gICAgICAgICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNmb3JtQ3Vyc29yfXB4KWBcbiAgICAgICAgICB0aGlzLiQucGxhaW5CYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgkeygxIC8gdGhpcy5udW1iZXJTdGVwcykgKlxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCArIDEpfSlgXG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLmFjdHVhbFN0ZXArK1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uICYmXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSAodGhpcy5hY3R1YWxTdGVwIC0gMSkgKiB0aGlzLnJhdGlvICYmXG4gICAgICAgICAgdGhpcy5hY3R1YWxTdGVwID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnRyYW5zZm9ybUN1cnNvciA9XG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwIC0gMSkgKiB0aGlzLnJhdGlvIC0gdGhpcy4kLmN1cnNvci5vZmZzZXRXaWR0aCAvIDJcbiAgICAgICAgICB0aGlzLiQuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy50cmFuc2Zvcm1DdXJzb3J9cHgpYFxuICAgICAgICAgIHRoaXMuJC5wbGFpbkJhci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7KDEgLyB0aGlzLm51bWJlclN0ZXBzKSAqXG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwIC0gMSl9KWBcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcC0tXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgbGV0IGNsaWNrU3RlcCA9IDBcbiAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDw9IHRoaXMubnVtYmVyU3RlcHM7IHN0ZXArKykge1xuICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA+IHN0ZXAgKiB0aGlzLnJhdGlvIC0gMjApIGNsaWNrU3RlcCA9IHN0ZXBcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPVxuICAgICAgICBjbGlja1N0ZXAgKiB0aGlzLnJhdGlvIC0gdGhpcy4kLmN1cnNvci5vZmZzZXRXaWR0aCAvIDJcbiAgICAgIHRoaXMuJC5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zZm9ybUN1cnNvcn1weClgXG4gICAgICB0aGlzLiQucGxhaW5CYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgkeygxIC8gdGhpcy5udW1iZXJTdGVwcykgKlxuICAgICAgICBjbGlja1N0ZXB9KWBcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJhbmdlXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tU2VsZWN0XG4gKiB2MS4wLjBcbiAqL1xuXG5jbGFzcyBDdXN0b21TZWxlY3Qge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tU2VsZWN0KSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QgPSAkY3VzdG9tU2VsZWN0IC8vIEFkZCBjdXN0b20tc2VsZWN0IGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5uYW1lXG4gICAgdGhpcy5pc0ZpbHRlcnMgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQuZmlsdGVycyAvLyBTZXQgZmlsdGVycyBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy5pc09uTW9iaWxlID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lm1vYmlsZSAvLyBTZXQgY3VzdG9tIG1vYmlsZSBpcyBhY3RpdmF0ZWQuXG4gICAgdGhpcy52aXJ0dWFsTGFiZWwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWwgLy8gU2V0IGFjdGl2YXRlZCBsYWJlbC5cbiAgICB0aGlzLml0ZW1zID0gSlNPTi5wYXJzZSh0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQuaXRlbXMpIC8vIENyZWF0ZSBKU09OIG9iamVjdCB3aXRoIGl0ZW1zLlxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk5MXB4KScpLm1hdGNoZXMpIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAgICBjb25zdCAkc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICRzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbFxuICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkb3B0aW9uKVxuXG4gICAgICAvLyBDcmVhdGUgc2VsZWN0IG9wdGlvbnMuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbS52YWx1ZSlcbiAgICAgICAgJG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLmxhYmVsXG4gICAgICAgICRzZWxlY3QuYXBwZW5kQ2hpbGQoJG9wdGlvbilcbiAgICAgIH1cblxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkc2VsZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpXG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tZmlsdGVycycpXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCB3aXRoIGVsZW1lbnRzLlxuICAgICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY29udGVudCcpXG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5sYWJlbCA9IGl0ZW0ubGFiZWxcbiAgICAgICAgJGl0ZW0uZGF0YXNldC52YWx1ZSA9IGl0ZW0udmFsdWVcbiAgICAgICAgJGl0ZW0uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uLlxuICAgICAgdGhpcy4kLmNob29zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY2hvb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLiQuY2hvb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2Nob29zZScpXG4gICAgICBpZiAoIXRoaXMuaXNGaWx0ZXJzKVxuICAgICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbFxuXG4gICAgICAvLyBDcmVhdGUgd3JhcHBpbmcgY29udGFpbmVyIGZvciBjb250ZW50LlxuICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRhaW5lcicpXG4gICAgICAkY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy5uYW1lKVxuICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIGlucHV0IGZvciBzZWxlY3QgdmFsdWUuXG4gICAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgICkgLy8gR2V0IGFsbCBpdGVtcyBpbiBhcnJheS5cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBmaWx0ZXIgaW5wdXQuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbFxuICAgICAgICB0aGlzLiQuY2hvb3NlLmFwcGVuZENoaWxkKHRoaXMuJC5maWx0ZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzT25Nb2JpbGUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpLm1hdGNoZXMpIHx8XG4gICAgICB0aGlzLmlzT25Nb2JpbGVcbiAgICApIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NoYW5nZVZhbHVlKCRpdGVtKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gJydcbiAgICAgICAgICB0aGlzLiQuZmlsdGVyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0aGlzLnZpcnR1YWxMYWJlbClcbiAgICAgICAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgICAgICAgJGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICgkaXRlbS5pbm5lclRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLiQuZmlsdGVyLnZhbHVlKSlcbiAgICAgICAgICAgICAgJGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgIGVsc2UgJGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy4kLmN1c3RvbVNlbGVjdC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcblxuICAgICAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJC5maWx0ZXIudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLnZpcnR1YWxMYWJlbFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMudmlydHVhbExhYmVsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgICB9KVxuICB9XG5cbiAgX2NoYW5nZVZhbHVlKCRpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gJGl0ZW0uZGF0YXNldC5sYWJlbFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiQuY2hvb3NlLmlubmVyVGV4dCA9ICRpdGVtLmRhdGFzZXQubGFiZWxcbiAgICB9XG5cbiAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSAkaXRlbS5kYXRhc2V0LnZhbHVlXG4gICAgdGhpcy52aXJ0dWFsTGFiZWwgPSAkaXRlbS5kYXRhc2V0LmxhYmVsXG4gICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21TZWxlY3RcbiIsIi8qKioqKioqKioqXG4gKiBEcm9wZG93blxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3RvcigkZHJvcGRvd24pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmRyb3Bkb3duID0gJGRyb3Bkb3duIC8vIEFkZCBkcm9wZG93biBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5tb2JpbGUgLy8gU2V0IGN1c3RvbSBtb2JpbGUgaXMgYWN0aXZhdGVkLlxuICAgIHRoaXMubmFtZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lm5hbWVcbiAgICB0aGlzLnR5cGUgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC50eXBlXG4gICAgICA/IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LnR5cGVcbiAgICAgIDogJ2xpbmsnIC8vIFNldCB0eXBlIG9mIGRyb3Bkb3duLlxuICAgIHRoaXMuaXRlbXMgPVxuICAgICAgdGhpcy50eXBlID09PSAnbGluaycgPyBKU09OLnBhcnNlKHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0Lml0ZW1zKSA6IG51bGwgLy8gQ3JlYXRlIEpTT04gb2JqZWN0IHdpdGggaXRlbXMuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5pc09uTW9iaWxlICYmXG4gICAgICB0aGlzLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk5MXB4KScpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAgICB0aGlzLiQuc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IHNlbGVjdCBvcHRpb24uXG4gICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICRvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKVxuICAgICAgJG9wdGlvbi5pbm5lclRleHQgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5sYWJlbFxuICAgICAgdGhpcy4kLnNlbGVjdC5hcHBlbmRDaGlsZCgkb3B0aW9uKVxuXG4gICAgICAvLyBDcmVhdGUgc2VsZWN0IG9wdGlvbnMuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbS5saW5rKVxuICAgICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0ubGFiZWxcbiAgICAgICAgdGhpcy4kLnNlbGVjdC5hcHBlbmRDaGlsZCgkb3B0aW9uKVxuICAgICAgfVxuXG4gICAgICB0aGlzLiQuZHJvcGRvd24uaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5hcHBlbmRDaGlsZCh0aGlzLiQuc2VsZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSAnY29udGVudCcpXG4gICAgICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgdGhpcy4kLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9faXRlbScpXG4gICAgICAgIClcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IHdpdGggZWxlbWVudHMuXG4gICAgICBjb25zdCAkY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkY29udGVudC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fY29udGVudCcpXG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgICAgJGl0ZW0uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICAgICRpdGVtLnNldEF0dHJpYnV0ZSgnaHJlZicsIGl0ZW0ubGluaylcblxuICAgICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19pdGVtJylcbiAgICAgICAgICAkY29udGVudC5hcHBlbmRDaGlsZCgkaXRlbSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdjb250ZW50Jykge1xuICAgICAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uLlxuICAgICAgdGhpcy4kLmNob29zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY2hvb3NlLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jaG9vc2UnKVxuICAgICAgdGhpcy4kLmNob29zZS5pbm5lckhUTUwgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5sYWJlbFxuICAgICAgdGhpcy4kLmNob29zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5uYW1lKVxuXG4gICAgICAvLyBDcmVhdGUgd3JhcHBpbmcgY29udGFpbmVyIGZvciBjb250ZW50LlxuICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jb250YWluZXInKVxuICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICAgICRjb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLiQuZHJvcGRvd24uaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5hcHBlbmRDaGlsZCh0aGlzLiQuY2hvb3NlKVxuICAgICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKCRjb250YWluZXIpXG5cbiAgICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICAgIHRoaXMuJC5kcm9wZG93bi5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2l0ZW0nKVxuICAgICAgKSAvLyBHZXQgYWxsIGl0ZW1zIGluIGFycmF5LlxuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGlmIChcbiAgICAgICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKS5tYXRjaGVzKSB8fFxuICAgICAgdGhpcy5pc09uTW9iaWxlIHx8XG4gICAgICAoIXRoaXMuaXNPbk1vYmlsZSAmJiB0aGlzLnR5cGUgPT09ICdjb250ZW50JylcbiAgICApIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5kcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bi0tb3BlbicpXG4gICAgICB9KVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuZHJvcGRvd24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHRoaXMuJC5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi0tb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChcbiAgICAgICF0aGlzLmlzT25Nb2JpbGUgJiZcbiAgICAgIHRoaXMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlc1xuICAgICkge1xuICAgICAgdGhpcy4kLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuJC5zZWxlY3QudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKioqKioqKioqXG4gKiBGb3JtVmFsaWRhdGlvblxuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgRm9ybVZhbGlkYXRpb24ge1xuICBjb25zdHJ1Y3RvcigkZm9ybSkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuZm9ybSA9ICRmb3JtIC8vIEFkZCBmb3JtIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMubm9JbnN0YW50ID0gISF0aGlzLiQuZm9ybS5kYXRhc2V0Lm5vaW5zdGFudFxuICAgIHRoaXMubm9TdWJtaXQgPSAhIXRoaXMuJC5mb3JtLmRhdGFzZXQubm9zdWJtaXRcbiAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5pbnB1dEdyb3VwcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncm91cCcpXG4gICAgKSkge1xuICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5ub0luc3RhbnQpIHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlKCRpbnB1dEdyb3VwKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5ub1N1Ym1pdCkge1xuICAgICAgdGhpcy4kLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlXG4gICAgICAgIGZvciAoY29uc3QgJGlucHV0R3JvdXAgb2YgQXJyYXkuZnJvbShcbiAgICAgICAgICB0aGlzLiQuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JvdXAnKVxuICAgICAgICApKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKCRpbnB1dEdyb3VwKSkgdGhpcy5mb3JtRXJyb3IgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtRXJyb3IpIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoJGlucHV0R3JvdXApIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgY29uc3QgdmFsdWUgPSAkaW5wdXQudmFsdWVcbiAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJylcblxuICAgIC8vIHJ1bGVzXG4gICAgY29uc3QgcnVsZXMgPSB7fVxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkKVxuICAgICAgcnVsZXMucmVxdWlyZWQgPSAkaW5wdXRHcm91cC5kYXRhc2V0LnJlcXVpcmVkXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQubWlubGVuZ3RoKVxuICAgICAgcnVsZXMubWluTGVuZ3RoID0gcGFyc2VJbnQoJGlucHV0R3JvdXAuZGF0YXNldC5taW5sZW5ndGgpXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQubWF4bGVuZ3RoKVxuICAgICAgcnVsZXMubWF4TGVuZ3RoID0gcGFyc2VJbnQoJGlucHV0R3JvdXAuZGF0YXNldC5tYXhsZW5ndGgpXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQucmVxdWlyZWRtZXNzYWdlKVxuICAgICAgcnVsZXMucmVxdWlyZWRNZXNzYWdlID0gJGlucHV0R3JvdXAuZGF0YXNldC5yZXF1aXJlZG1lc3NhZ2VcbiAgICBpZiAoJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1pbmxlbmd0aClcbiAgICAgIHJ1bGVzLmVycm9yTWluTGVuZ3RoID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1pbmxlbmd0aFxuICAgIGlmICgkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWF4bGVuZ3RoKVxuICAgICAgcnVsZXMuZXJyb3JNYXhMZW5ndGggPSAkaW5wdXRHcm91cC5kYXRhc2V0LmVycm9ybWF4bGVuZ3RoXG4gICAgaWYgKCRpbnB1dEdyb3VwLmRhdGFzZXQuZXJyb3JtZXNzYWdlKVxuICAgICAgcnVsZXMuZXJyb3JNZXNzYWdlID0gJGlucHV0R3JvdXAuZGF0YXNldC5lcnJvcm1lc3NhZ2VcblxuICAgIGlmIChpbnB1dFR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1pbkxlbmd0aCAmJiB2YWx1ZS5sZW5ndGggPCBydWxlcy5taW5MZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNaW5MZW5ndGggfHwgJ3RvbyBsb3cnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAocnVsZXMubWF4TGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA+IHJ1bGVzLm1heExlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1heExlbmd0aCB8fCAndG9vIGJpZycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHJ1bGVzLm1pbkxlbmd0aCAmJiB2YWx1ZSA8IHJ1bGVzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5lcnJvck1pbkxlbmd0aCB8fCAndG9vIGxvdycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChydWxlcy5tYXhMZW5ndGggJiYgdmFsdWUgPiBydWxlcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNYXhMZW5ndGggfHwgJ3RvbyBiaWcnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ2VtYWlsJykge1xuICAgICAgaWYgKHJ1bGVzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9yKCRpbnB1dEdyb3VwLCBydWxlcy5yZXF1aXJlZE1lc3NhZ2UgfHwgJ3JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhdmFsdWUubWF0Y2goXG4gICAgICAgICAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJGlucHV0R3JvdXAsIHJ1bGVzLmVycm9yTWVzc2FnZSB8fCAnbm90IGEgdmFsaWQgZW1haWwnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJFcnJvcigkaW5wdXRHcm91cClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ3RlbCcpIHtcbiAgICAgIGlmIChydWxlcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMucmVxdWlyZWRNZXNzYWdlIHx8ICdyZXF1aXJlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXZhbHVlLm1hdGNoKC9eKD86KD86XFwrfDAwKTMzfDApXFxzKlsxLTldKD86W1xccy4tXSpcXGR7Mn0pezR9JC8pXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcigkaW5wdXRHcm91cCwgcnVsZXMuZXJyb3JNZXNzYWdlIHx8ICdub3QgYSB2YWxpZCBlbWFpbCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckVycm9yKCRpbnB1dEdyb3VwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEVycm9yKCRpbnB1dEdyb3VwLCBlcnJvcikge1xuICAgIGxldCAkZXJyb3IgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICBpZiAoJGVycm9yKSB7XG4gICAgICAkZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JcbiAgICB9IGVsc2Uge1xuICAgICAgJGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAkZXJyb3IuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICAgICRlcnJvci5pbm5lclRleHQgPSBlcnJvclxuICAgICAgJGlucHV0R3JvdXAuYXBwZW5kQ2hpbGQoJGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyRXJyb3IoJGlucHV0R3JvdXApIHtcbiAgICBjb25zdCAkZXJyb3IgPSAkaW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZ3JvdXBfX2Vycm9yJylcbiAgICBpZiAoJGVycm9yKSB7XG4gICAgICAkaW5wdXRHcm91cC5yZW1vdmVDaGlsZCgkZXJyb3IpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0aW9uXG4iLCIvKioqKioqKioqKlxuICogTW9kYWxcbiAqIHYxLjAuMFxuICovXG5cbmNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoJG1vZGFsKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5tb2RhbCA9ICRtb2RhbCAvLyBBZGQgbW9kYWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubW9kYWwtYnV0dG9uW2RhdGEtbW9kYWw9XCIke3RoaXMuJC5tb2RhbC5kYXRhc2V0Lm1vZGFsfVwiXWBcbiAgICAgIClcbiAgICApXG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5tb2RhbC1idXR0b25bZGF0YS1tb2RhbD1cIiR7dGhpcy4kLm1vZGFsLmRhdGFzZXQubW9kYWx9XCJdYFxuICAgICAgKVxuICAgIGlmICh0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpKVxuICAgICAgdGhpcy4kLmNsb3NlID0gdGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtLWFjdGl2ZScpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGVudCcpLmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLiQuYnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLiQuY2xvc2UpIHtcbiAgICAgIHRoaXMuJC5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsImNsYXNzIFJlc2V0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQnKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2tleWJvYXJkJylcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0XG4iLCIvKioqKioqKioqKlxuICogVGFic1xuICogdjEuMC4wXG4gKi9cblxuY2xhc3MgVGFicyB7XG4gIGNvbnN0cnVjdG9yKCR0YWJzKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC50YWJzID0gJHRhYnMgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5oZWFkZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faGVhZGVySXRlbScpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZm9yIChjb25zdCAkaGVhZGVySXRlbSBvZiB0aGlzLiQuaGVhZGVySXRlbXMpIHtcbiAgICAgIGNvbnN0ICRjb250ZW50SXRlbSA9IHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGFic19fY29udGVudEl0ZW1bZGF0YS1pdGVtPVwiJHskaGVhZGVySXRlbS5kYXRhc2V0Lml0ZW19XCJdYFxuICAgICAgKVxuICAgICAgJGhlYWRlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19faGVhZGVySXRlbS0tYWN0aXZlJykpXG4gICAgICAgICAgdGhpcy4kLnRhYnNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICBpZiAodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19jb250ZW50SXRlbS0tYWN0aXZlJylcbiAgICAgICAgJGhlYWRlckl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19faGVhZGVySXRlbS0tYWN0aXZlJylcbiAgICAgICAgJGNvbnRlbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbidcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL0Nhcm91c2VsJ1xuaW1wb3J0IEN1c3RvbUZpbGUgZnJvbSAnLi9DdXN0b21GaWxlJ1xuaW1wb3J0IEN1c3RvbVJhbmdlIGZyb20gJy4vQ3VzdG9tUmFuZ2UnXG5pbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gJy4vQ3VzdG9tU2VsZWN0J1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nXG5pbXBvcnQgRm9ybVZhbGlkYXRpb24gZnJvbSAnLi9Gb3JtVmFsaWRhdGlvbidcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFJlc2V0IGZyb20gJy4vUmVzZXQnXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5cbmNvbnN0ICRhY2NvcmRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpXG5mb3IgKGNvbnN0ICRhY2NvcmRpb24gb2YgJGFjY29yZGlvbnMpIHtcbiAgbmV3IEFjY29yZGlvbigkYWNjb3JkaW9uKVxufVxuXG5jb25zdCAkY2Fyb3VzZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwnKSlcbmZvciAoY29uc3QgJGNhcm91c2VsIG9mICRjYXJvdXNlbHMpIHtcbiAgbmV3IENhcm91c2VsKCRjYXJvdXNlbClcbn1cblxuY29uc3QgJGN1c3RvbUZpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWZpbGUnKSlcbmZvciAoY29uc3QgJGN1c3RvbUZpbGUgb2YgJGN1c3RvbUZpbGVzKSB7XG4gIG5ldyBDdXN0b21GaWxlKCRjdXN0b21GaWxlKVxufVxuXG5jb25zdCAkY3VzdG9tUmFuZ2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhbmdlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21SYW5nZSBvZiAkY3VzdG9tUmFuZ2VzKSB7XG4gIG5ldyBDdXN0b21SYW5nZSgkY3VzdG9tUmFuZ2UpXG59XG5cbmNvbnN0ICRjdXN0b21TZWxlY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXNlbGVjdCcpKVxuZm9yIChjb25zdCAkY3VzdG9tU2VsZWN0IG9mICRjdXN0b21TZWxlY3RzKSB7XG4gIG5ldyBDdXN0b21TZWxlY3QoJGN1c3RvbVNlbGVjdClcbn1cblxuY29uc3QgJGRyb3Bkb3ducyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJykpXG5mb3IgKGNvbnN0ICRkcm9wZG93biBvZiAkZHJvcGRvd25zKSB7XG4gIG5ldyBEcm9wZG93bigkZHJvcGRvd24pXG59XG5cbmNvbnN0ICRmb3JtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbGlkYXRpb24nKSlcbmZvciAoY29uc3QgJGZvcm0gb2YgJGZvcm1zKSB7XG4gIG5ldyBGb3JtVmFsaWRhdGlvbigkZm9ybSlcbn1cblxuY29uc3QgJG1vZGFscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJykpXG5mb3IgKGNvbnN0ICRtb2RhbCBvZiAkbW9kYWxzKSB7XG4gIG5ldyBNb2RhbCgkbW9kYWwpXG59XG5cbm5ldyBSZXNldCgpXG5cbmNvbnN0ICR0YWJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpKVxuZm9yIChjb25zdCAkdGFiIG9mICR0YWJzKSB7XG4gIG5ldyBUYWJzKCR0YWIpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9