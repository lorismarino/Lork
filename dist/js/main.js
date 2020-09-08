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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * Accordion
 * v1.0.0
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */
var Accordion =
/*#__PURE__*/
function () {
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.$.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._events();
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var _step2$value = _step2.value,
              item = _step2$value.item,
              height = _step2$value.height;
          var $button = item.querySelector('.accordion__itemButton');
          var $content = item.querySelector('.accordion__itemContainer');
          $button.addEventListener('click', function (event) {
            if (!_this.isMultiple) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = _this.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _item = _step3.value.item;

                  if (!_item.contains(event.target)) {
                    if (_item.classList.contains('accordion__item--open')) {
                      _item.querySelector('.accordion__itemContainer').style.height = 0;

                      _item.classList.remove('accordion__item--open');
                    }
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
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

        for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
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
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */
var Carousel =
/*#__PURE__*/
function () {
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
 * v1.0.0
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */
var CustomFile =
/*#__PURE__*/
function () {
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
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */
var CustomRange =
/*#__PURE__*/
function () {
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
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */
var CustomSelect =
/*#__PURE__*/
function () {
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
        $select.setAttribute('name', this.$.customSelect.dataset.name); // Create the default select option.

        var $option = document.createElement('option');
        $option.setAttribute('value', '');
        $option.innerText = this.$.customSelect.dataset.label;
        $select.appendChild($option); // Create select options.

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            var _$option = document.createElement('option');

            _$option.setAttribute('value', item.value);

            _$option.innerText = item.label;
            $select.appendChild(_$option);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.$.customSelect.innerHTML = '';
        this.$.customSelect.appendChild($select);
      } else {
        if (this.isFilters) this.$.customSelect.classList.add('custom-select--filters'); // Create the content with elements.

        var $content = document.createElement('div');
        $content.classList.add('custom-select__content');
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _item = _step2.value;
            var $item = document.createElement('div');
            $item.dataset.label = _item.label;
            $item.dataset.value = _item.value;
            $item.innerText = _item.label;
            $item.classList.add('custom-select__item');
            $content.appendChild($item);
          } // Create the button.

        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        this.$.choose = document.createElement('div');
        this.$.choose.classList.add('custom-select__choose');
        if (!this.isFilters) this.$.choose.innerHTML = this.$.customSelect.dataset.label; // Create wrapping container for content.

        var $container = document.createElement('div');
        $container.classList.add('custom-select__container');
        $container.appendChild($content);
        this.$.customSelect.innerHTML = '';
        this.$.customSelect.appendChild(this.$.choose);
        this.$.customSelect.appendChild($container); // Create input for select value.

        this.$.input = document.createElement('input');
        this.$.input.setAttribute('name', this.$.customSelect.dataset.name);
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

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          var _loop = function _loop() {
            var $item = _step3.value;
            $item.addEventListener('click', function () {
              _this._changeValue($item);
            });
          };

          for (var _iterator3 = this.$.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        if (this.isFilters) {
          this.$.filter.addEventListener('click', function () {
            _this.$.filter.value = '';

            _this.$.filter.setAttribute('placeholder', _this.virtualLabel);

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = _this.$.items[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var $item = _step4.value;
                $item.style.display = 'block';
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          });
          this.$.filter.addEventListener('input', function () {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = _this.$.items[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var $item = _step5.value;
                if ($item.innerText.toLowerCase().includes(_this.$.filter.value)) $item.style.display = 'block';else $item.style.display = 'none';
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                  _iterator5["return"]();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * Dropdown
 * v1.0.0
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */
var Dropdown =
/*#__PURE__*/
function () {
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

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            var _$option = document.createElement('option');

            _$option.setAttribute('value', item.link);

            _$option.innerText = item.label;
            this.$.select.appendChild(_$option);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.$.dropdown.innerHTML = '';
        this.$.dropdown.appendChild(this.$.select);
      } else {
        if (this.type === 'content') this.$.items = Array.from(this.$.dropdown.querySelectorAll('.dropdown__item')); // Create the content with elements.

        var $content = document.createElement('div');
        $content.classList.add('dropdown__content');

        if (this.type === 'link') {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _item = _step2.value;
              var $item = document.createElement('a');
              $item.innerText = _item.label;
              $item.setAttribute('href', _item.link);
              $item.classList.add('dropdown__item');
              $content.appendChild($item);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } else if (this.type === 'content') {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.$.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _$item = _step3.value;
              $content.appendChild(_$item);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        } // Create the button.


        this.$.choose = document.createElement('div');
        this.$.choose.classList.add('dropdown__choose');
        this.$.choose.innerHTML = this.$.dropdown.dataset.label; // Create wrapping container for content.

        var $container = document.createElement('div');
        $container.classList.add('dropdown__container');
        $container.appendChild($content);
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
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */
var Modal =
/*#__PURE__*/
function () {
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**********
 * Tabs
 * v1.0.0
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */
var Tabs =
/*#__PURE__*/
function () {
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

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

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

        for (var _iterator = this.$.headerItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
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
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal */ "./js/Modal.js");
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Reset */ "./js/Reset.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tabs */ "./js/Tabs.js");









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

var $modals = Array.from(document.querySelectorAll('.modal'));

for (var _i7 = 0, _$modals = $modals; _i7 < _$modals.length; _i7++) {
  var $modal = _$modals[_i7];
  new _Modal__WEBPACK_IMPORTED_MODULE_6__["default"]($modal);
}

new _Reset__WEBPACK_IMPORTED_MODULE_7__["default"]();
var $tabs = Array.from(document.querySelectorAll('.tabs'));

for (var _i8 = 0, _$tabs = $tabs; _i8 < _$tabs.length; _i8++) {
  var $tab = _$tabs[_i8];
  new _Tabs__WEBPACK_IMPORTED_MODULE_8__["default"]($tab);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbUZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2pzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2pzL01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL1Jlc2V0LmpzIiwid2VicGFjazovLy8uL2pzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInB1c2giLCJpdGVtIiwiaGVpZ2h0Iiwic3R5bGUiLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkNhcm91c2VsIiwiJGNhcm91c2VsIiwiY2Fyb3VzZWwiLCJuYXZpZ2F0aW9uIiwibGVmdCIsInJpZ2h0IiwiaXNUb3VjaERldmljZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwidHlwZSIsImFjdGl2ZUl0ZW0iLCJwYWdpbmF0aW9uIiwiZHJhZyIsImF1dG8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibnVtYmVySXRlbXMiLCJsZW5ndGgiLCIkcGFnaW5hdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInNldEludGVydmFsIiwiX21vdmVSaWdodCIsInBhcnNlSW50IiwiX21vdmVMZWZ0Iiwia2V5Q29kZSIsIiRidWxsZXQiLCJfbW92ZUl0ZW1zIiwiYWN0dWFsUG9zaXRpb24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsInByZXNzSXRlbXMiLCJ0cmFuc2xhdGUiLCJkcmFnQ3JldGFlZEl0ZW0iLCJfZHJhZ0l0ZW1zIiwiY2hhbmdlZFRvdWNoZXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCIkbGFzdEl0ZW0iLCJkdXBsaWNhdGVMYXN0SXRlbSIsImNsb25lTm9kZSIsInRyYW5zZm9ybSIsInBvc2l0aW9uIiwiaW5zZXJ0QmVmb3JlIiwiVHdlZW5MaXRlIiwidG8iLCJ4IiwiJGZpcnN0SXRlbSIsImR1cGxpY2F0ZUZpcnN0SXRlbSIsInQiLCJjbGVhclRpbWVvdXQiLCJ0cmFuc2l0aW9uIiwiQ3VzdG9tRmlsZSIsIiRjdXN0b21GaWxlIiwiY3VzdG9tRmlsZSIsImlzQnV0dG9uIiwiYnV0dG9uIiwiaXNCdXR0b25Qb3NpdGlvbiIsImJ1dHRvbnBvcyIsImlzU2l6ZSIsInNpemUiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJjb250YWluZXIiLCJsYWJlbCIsImlucHV0IiwibmFtZSIsImRpc3BsYXkiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwiZmlsZXMiLCJieXRlcyIsInNpemVzIiwiTWF0aCIsImZsb29yIiwiY29udmVydCIsInJvdW5kIiwicG93IiwiQ3VzdG9tUmFuZ2UiLCIkY3VzdG9tUmFuZ2UiLCJjdXN0b21SYW5nZSIsImN1cnNvclByZXNzIiwidG90YWwiLCJzdGVwIiwidHJhbnNmb3JtQ3Vyc29yIiwiYWN0dWFsU3RlcCIsImJhY2tncm91bmRCYXIiLCJwbGFpbkJhciIsImN1cnNvciIsIm51bWJlclN0ZXBzIiwicmF0aW8iLCJldiIsImNsaWNrU3RlcCIsIkN1c3RvbVNlbGVjdCIsIiRjdXN0b21TZWxlY3QiLCJjdXN0b21TZWxlY3QiLCJpc0ZpbHRlcnMiLCJmaWx0ZXJzIiwiaXNPbk1vYmlsZSIsIm1vYmlsZSIsInZpcnR1YWxMYWJlbCIsIkpTT04iLCJwYXJzZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiJHNlbGVjdCIsIiRvcHRpb24iLCJ2YWx1ZSIsImNob29zZSIsIiRjb250YWluZXIiLCJmaWx0ZXIiLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJfY2hhbmdlVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiRHJvcGRvd24iLCIkZHJvcGRvd24iLCJkcm9wZG93biIsInNlbGVjdCIsImxpbmsiLCJsb2NhdGlvbiIsIk1vZGFsIiwiJG1vZGFsIiwibW9kYWwiLCJjbG9zZSIsIlJlc2V0IiwiYm9keSIsIlRhYnMiLCIkdGFicyIsInRhYnMiLCJoZWFkZXJJdGVtcyIsIiRoZWFkZXJJdGVtIiwiJGNvbnRlbnRJdGVtIiwiJGFjY29yZGlvbnMiLCIkY2Fyb3VzZWxzIiwiJGN1c3RvbUZpbGVzIiwiJGN1c3RvbVJhbmdlcyIsIiRjdXN0b21TZWxlY3RzIiwiJGRyb3Bkb3ducyIsIiRtb2RhbHMiLCIkdGFiIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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QUlHLDhDQUFKO0FBRUEsSUFBTUcsS0FBSyxHQUFHL0osS0FBSyxDQUFDQyxJQUFOLENBQVcyQyxRQUFRLENBQUMxQyxnQkFBVCxDQUEwQixPQUExQixDQUFYLENBQWQ7O0FBQ0EsMkJBQW1CNkosS0FBbkIsOEJBQTBCO0FBQXJCLE1BQU1ZLElBQUksY0FBVjtBQUNILE1BQUliLDZDQUFKLENBQVNhLElBQVQ7QUFDRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCIvKioqKioqKioqKlxuICogQWNjb3JkaW9uXG4gKiB2MS4wLjBcbiAqIE1hZGUgYnkgTG9yaXMgTWFyaW5vIDxsb3Jpcy5tcm9AZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL0xvcmlzTWFyaW5vXG4gKiBodHRwczovL2xvcmlzbWFyaW5vLmZyXG4gKi9cblxuY2xhc3MgQWNjb3JkaW9uIHtcbiAgY29uc3RydWN0b3IoJGFjY29yZGlvbikge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuYWNjb3JkaW9uID0gJGFjY29yZGlvbiAvLyBBZGQgYWNjb3JkaW9uIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2l0ZW0nKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdXG4gICAgdGhpcy5pc011bHRpcGxlID0gdGhpcy4kLmFjY29yZGlvbi5kYXRhc2V0Lm11bHRpcGxlIC8vIFNldCBpcyBtdWx0aXBsZSBpdGVtIG9wZW4uXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgaWYgKCRpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9ICRjb250ZW50Lm9mZnNldEhlaWdodFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpdGVtOiAkaXRlbSwgaGVpZ2h0OiBjb250ZW50SGVpZ2h0IH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgaXRlbTogJGl0ZW0sIGhlaWdodDogY29udGVudEhlaWdodCB9KVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0IHsgaXRlbSwgaGVpZ2h0IH0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgY29uc3QgJGJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUJ1dHRvbicpXG4gICAgICBjb25zdCAkY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAkYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICAgIGZvciAoY29uc3QgeyBpdGVtIH0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25cbiIsIi8qKioqKioqKioqXG4gKiBDYXJvdXNlbFxuICogdjEuMC4xXG4gKiBNYWRlIGJ5IExvcmlzIE1hcmlubyA8bG9yaXMubXJvQGdtYWlsLmNvbT5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Mb3Jpc01hcmlub1xuICogaHR0cHM6Ly9sb3Jpc21hcmluby5mclxuICovXG5cbmNsYXNzIENhcm91c2VsIHtcbiAgY29uc3RydWN0b3IoJGNhcm91c2VsKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jYXJvdXNlbCA9ICRjYXJvdXNlbCAvLyBBZGQgY2Fyb3VzZWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24gPSB7XG4gICAgICBsZWZ0OiB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLWxlZnQnKSxcbiAgICAgIHJpZ2h0OiB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLXJpZ2h0JylcbiAgICB9XG4gICAgdGhpcy4kLml0ZW1zID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbXMnKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzVG91Y2hEZXZpY2UgPSAhIShcbiAgICAgICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHNcbiAgICApXG4gICAgdGhpcy50eXBlID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgPyB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC50eXBlXG4gICAgICA6ICdub3JtYWwnXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgIHRoaXMucGFnaW5hdGlvbiA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnBhZ2luYXRpb25cbiAgICB0aGlzLmRyYWcgPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5kcmFnXG4gICAgdGhpcy5hdXRvID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuYXV0b1xuICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGhcbiAgICB0aGlzLm51bWJlckl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICkubGVuZ3RoXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCAkcGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkcGFnaW5hdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbicpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJJdGVtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5pdGVtID0gaSArIDFcblxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgJHBhZ2luYXRpb24uYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9XG4gICAgICB0aGlzLiQuY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoJHBhZ2luYXRpb24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0bykge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9tb3ZlUmlnaHQoKVxuICAgICAgfSwgcGFyc2VJbnQodGhpcy5hdXRvKSlcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQubmF2aWdhdGlvbi5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5fbW92ZUxlZnQoKVxuICAgIH0pXG5cbiAgICB0aGlzLiQubmF2aWdhdGlvbi5yaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVSaWdodCgpXG4gICAgfSlcblxuICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHRoaXMuX21vdmVSaWdodCgpXG4gICAgfSlcblxuICAgIGZvciAoY29uc3QgJGJ1bGxldCBvZiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgKSkge1xuICAgICAgJGJ1bGxldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgICRidWxsZXQuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygkYnVsbGV0LmRhdGFzZXQuaXRlbSAtIDEpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHBhcnNlSW50KCRidWxsZXQuZGF0YXNldC5pdGVtKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kcmFnKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRGV2aWNlKSB7XG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAwXG4gICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJhZ0l0ZW1zKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gPiB0aGlzLmFjdHVhbFBvc2l0aW9uKSB0aGlzLl9tb3ZlTGVmdCgpXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA8IHRoaXMuYWN0dWFsUG9zaXRpb24pXG4gICAgICAgICAgICAgIHRoaXMuX21vdmVSaWdodCgpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcyAmJlxuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMSAmJlxuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IHRydWVcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IDBcbiAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLl9kcmFnSXRlbXMoZXZlbnQuY2xpZW50WClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uICsgMjApIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gMjApIHRoaXMuX21vdmVSaWdodCgpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24gKyAyMCB8fFxuICAgICAgICAgICAgICBldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAtIDIwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcyAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMSAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RyYWdJdGVtcyhjbGllbnRYKSB7XG4gICAgaWYgKHRoaXMucHJlc3NJdGVtcykge1xuICAgICAgaWYgKGNsaWVudFggPiB0aGlzLmFjdHVhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gY2xpZW50WCAtIHRoaXMuYWN0dWFsUG9zaXRpb25cblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnaW5maW5pdGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdDcmV0YWVkSXRlbSkge1xuICAgICAgICAgICAgICBjb25zdCAkbGFzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlTGFzdEl0ZW0gPSAkbGFzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0sXG4gICAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7IHg6IHRoaXMudHJhbnNsYXRlIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgICAgICBUd2VlbkxpdGUudG8odGhpcy4kLml0ZW1zLCAwLjEsIHtcbiAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICAodGhpcy5hY3RpdmVJdGVtIC0gMSkgKiAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoICtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gY2xpZW50WFxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRoaXMuJC5pdGVtcywgMC4xLCB7XG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlSXRlbSAtIDEpICogLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQ3JldGFlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnQ3JldGFlZEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICAgIGNvbnN0ICRmaXJzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmNhcm91c2VsX19pdGVtJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVGaXJzdEl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUd2VlbkxpdGUudG8odGhpcy4kLml0ZW1zLCAwLjEsIHtcbiAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICAodGhpcy5udW1iZXJJdGVtcyAtIDEpICogLXRoaXMuJC5jYXJvdXNlbC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICBUd2VlbkxpdGUudG8odGhpcy4kLml0ZW1zLCAwLjEsIHtcbiAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICAodGhpcy5hY3RpdmVJdGVtIC0gMSkgKiAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUxlZnQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPiAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdsb29wJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLm51bWJlckl0ZW1zIC0gMSwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgY29uc3QgJGxhc3RJdGVtID0gdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJ1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUxhc3RJdGVtID0gJGxhc3RJdGVtLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknXG4gICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVMYXN0SXRlbSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKSxcbiAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgKVxuICAgICAgICB0aGlzLl9tb3ZlSXRlbXMoLTEsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPD0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdsb29wJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygwLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAxXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSsrXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZUZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIHRoaXMuJC5pdGVtcy5hcHBlbmRDaGlsZChkdXBsaWNhdGVGaXJzdEl0ZW0pXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0sICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUl0ZW1zKHgsIHBvc2l0aW9uID0gbnVsbCkge1xuICAgIGxldCB0XG4gICAgY2xlYXJUaW1lb3V0KHQpXG4gICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0J1xuICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3ggKiAtdGhpcy53aWR0aH1weClgXG5cbiAgICB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJlxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDFcbiAgICAgICkge1xuICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQodGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpKVxuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcblxuICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpLFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdsZWZ0JyAmJlxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXNcbiAgICAgICkge1xuICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQodGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsodGhpcy5udW1iZXJJdGVtcyAtIDEpICpcbiAgICAgICAgICAtdGhpcy53aWR0aH0pYFxuICAgICAgfVxuICAgIH0sIDEwMDApXG5cbiAgICBpZiAocG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bGFzdC1jaGlsZCcpXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bnRoLWNoaWxkKCR7dGhpcy5hY3RpdmVJdGVtIC0gMX0pYFxuICAgICAgICAgIClcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQnKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0Om50aC1jaGlsZCgke3RoaXMuYWN0aXZlSXRlbSArIDF9KWBcbiAgICAgICAgICApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbUZpbGVcbiAqIHYxLjAuMFxuICogTWFkZSBieSBMb3JpcyBNYXJpbm8gPGxvcmlzLm1yb0BnbWFpbC5jb20+XG4gKiBodHRwczovL2dpdGh1Yi5jb20vTG9yaXNNYXJpbm9cbiAqIGh0dHBzOi8vbG9yaXNtYXJpbm8uZnJcbiAqL1xuXG5jbGFzcyBDdXN0b21GaWxlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbUZpbGUpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUgPSAkY3VzdG9tRmlsZSAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzQnV0dG9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25cbiAgICB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgOiAncmlnaHQnXG4gICAgdGhpcy5pc1NpemUgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnNpemVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmlzQnV0dG9uXG4gICAgfVxuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuaW5uZXJIVE1MID0gJydcblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19jb250YWluZXInKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBsYWJlbFxuICAgIHRoaXMuJC5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmxhYmVsXG4gICAgdGhpcy4kLmxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19sYWJlbCcpXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcblxuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpXG4gICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIHNpemUgaW5mb1xuICAgICAgdGhpcy4kLnNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHRoaXMuJC5zaXplLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19zaXplJylcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9ICcwIG1iJ1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLnNpemUpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuaW5wdXQuY2xpY2soKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3RlJylcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgIGNvbnN0IGJ5dGVzID0gZmlsZS5zaXplXG4gICAgICBjb25zdCBzaXplcyA9IFsnYnl0ZXMnLCAna2InLCAnbWInLCAnZ2InLCAndGInXVxuICAgICAgY29uc3QgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKVxuICAgICAgY29uc3QgY29udmVydCA9IE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMilcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IGAke2NvbnZlcnR9ICR7c2l6ZXNbaV19YFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRmlsZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVJhbmdlXG4gKiB2MS4wLjBcbiAqIE1hZGUgYnkgTG9yaXMgTWFyaW5vIDxsb3Jpcy5tcm9AZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL0xvcmlzTWFyaW5vXG4gKiBodHRwczovL2xvcmlzbWFyaW5vLmZyXG4gKi9cblxuY2xhc3MgQ3VzdG9tUmFuZ2Uge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tUmFuZ2UpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlID0gJGN1c3RvbVJhbmdlIC8vIEFkZCBjdXN0b21SYW5nZSBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmN1cnNvclByZXNzID0gZmFsc2VcbiAgICB0aGlzLnRvdGFsID0gdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQudG90YWxcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC5zdGVwXG4gICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPSAwXG4gICAgdGhpcy5hY3R1YWxTdGVwID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgLy8gQ3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAvLyBDcmVhdGUgYmFja2dyb3VuZCBiYXIuXG4gICAgdGhpcy4kLmJhY2tncm91bmRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuJC5iYWNrZ3JvdW5kQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyJylcbiAgICB0aGlzLiQuYmFja2dyb3VuZEJhci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2Jhci0tYmFja2dyb3VuZCcpXG5cbiAgICAvLyBDcmVhdGUgcGxhaW4gYmFyLlxuICAgIHRoaXMuJC5wbGFpbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLnBsYWluQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyJylcbiAgICB0aGlzLiQucGxhaW5CYXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19iYXItLXBsYWluJylcblxuICAgIC8vIENyZWF0ZSBjdXNyb3IuXG4gICAgdGhpcy4kLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2N1cnNvcicpXG5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmJhY2tncm91bmRCYXIpXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5wbGFpbkJhcilcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmN1cnNvcilcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtNTAlKWBcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY3VzdG9tUmFuZ2Uub2Zmc2V0V2lkdGhcbiAgICB0aGlzLm51bWJlclN0ZXBzID0gdGhpcy50b3RhbCAvIHRoaXMuc3RlcCAvLyBub21icmUgZGUgZm9pcyBwb3VyIGFycml2ZXIgYSB0b3RhbFxuICAgIHRoaXMucmF0aW8gPSB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJTdGVwcyAvLyBwaXhlbCBkZSBsYXJnZXVyIHBvdXIgMSUgZHUgdG90YWxcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuY3Vyc29yUHJlc3MgPSB0cnVlXG4gICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXYgPT4ge1xuICAgICAgdGhpcy5jdXJzb3JQcmVzcyA9IGZhbHNlXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmN1cnNvclByZXNzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiAmJlxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPj0gKHRoaXMuYWN0dWFsU3RlcCArIDEpICogdGhpcy5yYXRpbyAmJlxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcCA8IHRoaXMubnVtYmVyU3RlcHNcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPVxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCArIDEpICogdGhpcy5yYXRpbyAtIHRoaXMuJC5jdXJzb3Iub2Zmc2V0V2lkdGggLyAyXG4gICAgICAgICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNmb3JtQ3Vyc29yfXB4KWBcbiAgICAgICAgICB0aGlzLiQucGxhaW5CYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgkeygxIC8gdGhpcy5udW1iZXJTdGVwcykgKlxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCArIDEpfSlgXG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLmFjdHVhbFN0ZXArK1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uICYmXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSAodGhpcy5hY3R1YWxTdGVwIC0gMSkgKiB0aGlzLnJhdGlvICYmXG4gICAgICAgICAgdGhpcy5hY3R1YWxTdGVwID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnRyYW5zZm9ybUN1cnNvciA9XG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwIC0gMSkgKiB0aGlzLnJhdGlvIC0gdGhpcy4kLmN1cnNvci5vZmZzZXRXaWR0aCAvIDJcbiAgICAgICAgICB0aGlzLiQuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy50cmFuc2Zvcm1DdXJzb3J9cHgpYFxuICAgICAgICAgIHRoaXMuJC5wbGFpbkJhci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7KDEgLyB0aGlzLm51bWJlclN0ZXBzKSAqXG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwIC0gMSl9KWBcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcC0tXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgbGV0IGNsaWNrU3RlcCA9IDBcbiAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDw9IHRoaXMubnVtYmVyU3RlcHM7IHN0ZXArKykge1xuICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA+IHN0ZXAgKiB0aGlzLnJhdGlvIC0gMjApIGNsaWNrU3RlcCA9IHN0ZXBcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPVxuICAgICAgICBjbGlja1N0ZXAgKiB0aGlzLnJhdGlvIC0gdGhpcy4kLmN1cnNvci5vZmZzZXRXaWR0aCAvIDJcbiAgICAgIHRoaXMuJC5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zZm9ybUN1cnNvcn1weClgXG4gICAgICB0aGlzLiQucGxhaW5CYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgkeygxIC8gdGhpcy5udW1iZXJTdGVwcykgKlxuICAgICAgICBjbGlja1N0ZXB9KWBcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJhbmdlXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tU2VsZWN0XG4gKiB2MS4wLjBcbiAqIE1hZGUgYnkgTG9yaXMgTWFyaW5vIDxsb3Jpcy5tcm9AZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL0xvcmlzTWFyaW5vXG4gKiBodHRwczovL2xvcmlzbWFyaW5vLmZyXG4gKi9cblxuY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVNlbGVjdCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0ID0gJGN1c3RvbVNlbGVjdCAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzRmlsdGVycyA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5maWx0ZXJzIC8vIFNldCBmaWx0ZXJzIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubW9iaWxlIC8vIFNldCBjdXN0b20gbW9iaWxlIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgYWN0aXZhdGVkIGxhYmVsLlxuICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5pdGVtcykgLy8gQ3JlYXRlIEpTT04gb2JqZWN0IHdpdGggaXRlbXMuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlcykge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICAgIGNvbnN0ICRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgJHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubmFtZSlcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IHNlbGVjdCBvcHRpb24uXG4gICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICRvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKVxuICAgICAgJG9wdGlvbi5pbm5lclRleHQgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWxcbiAgICAgICRzZWxlY3QuYXBwZW5kQ2hpbGQoJG9wdGlvbilcblxuICAgICAgLy8gQ3JlYXRlIHNlbGVjdCBvcHRpb25zLlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgY29uc3QgJG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgICRvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGl0ZW0udmFsdWUpXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICAkc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJHNlbGVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKVxuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLWZpbHRlcnMnKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRlbnQnKVxuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICRpdGVtLmRhdGFzZXQubGFiZWwgPSBpdGVtLmxhYmVsXG4gICAgICAgICRpdGVtLmRhdGFzZXQudmFsdWUgPSBpdGVtLnZhbHVlXG4gICAgICAgICRpdGVtLmlubmVyVGV4dCA9IGl0ZW0ubGFiZWxcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9faXRlbScpXG4gICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbi5cbiAgICAgIHRoaXMuJC5jaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jaG9vc2UnKVxuICAgICAgaWYgKCF0aGlzLmlzRmlsdGVycylcbiAgICAgICAgdGhpcy4kLmNob29zZS5pbm5lckhUTUwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWxcblxuICAgICAgLy8gQ3JlYXRlIHdyYXBwaW5nIGNvbnRhaW5lciBmb3IgY29udGVudC5cbiAgICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jb250YWluZXInKVxuICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIGlucHV0IGZvciBzZWxlY3QgdmFsdWUuXG4gICAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lm5hbWUpXG4gICAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3RfX2l0ZW0nKVxuICAgICAgKSAvLyBHZXQgYWxsIGl0ZW1zIGluIGFycmF5LlxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGZpbHRlciBpbnB1dC5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmxhYmVsXG4gICAgICAgIHRoaXMuJC5jaG9vc2UuYXBwZW5kQ2hpbGQodGhpcy4kLmZpbHRlcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykgfHxcbiAgICAgIHRoaXMuaXNPbk1vYmlsZVxuICAgICkge1xuICAgICAgdGhpcy4kLmNob29zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlVmFsdWUoJGl0ZW0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAnJ1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRoaXMudmlydHVhbExhYmVsKVxuICAgICAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICAgICAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgICAgICAgaWYgKCRpdGVtLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuJC5maWx0ZXIudmFsdWUpKVxuICAgICAgICAgICAgICAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgZWxzZSAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuY3VzdG9tU2VsZWN0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuXG4gICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kLmZpbHRlci52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMudmlydHVhbExhYmVsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cblxuICBfY2hhbmdlVmFsdWUoJGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAkaXRlbS5kYXRhc2V0LmxhYmVsXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJUZXh0ID0gJGl0ZW0uZGF0YXNldC5sYWJlbFxuICAgIH1cblxuICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9ICRpdGVtLmRhdGFzZXQudmFsdWVcbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9ICRpdGVtLmRhdGFzZXQubGFiZWxcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdFxuIiwiLyoqKioqKioqKipcbiAqIERyb3Bkb3duXG4gKiB2MS4wLjBcbiAqIE1hZGUgYnkgTG9yaXMgTWFyaW5vIDxsb3Jpcy5tcm9AZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL0xvcmlzTWFyaW5vXG4gKiBodHRwczovL2xvcmlzbWFyaW5vLmZyXG4gKi9cblxuY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3RvcigkZHJvcGRvd24pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmRyb3Bkb3duID0gJGRyb3Bkb3duIC8vIEFkZCBkcm9wZG93biBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5tb2JpbGUgLy8gU2V0IGN1c3RvbSBtb2JpbGUgaXMgYWN0aXZhdGVkLlxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbGluaycgLy8gU2V0IHR5cGUgb2YgZHJvcGRvd24uXG4gICAgdGhpcy5pdGVtcyA9XG4gICAgICB0aGlzLnR5cGUgPT09ICdsaW5rJyA/IEpTT04ucGFyc2UodGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQuaXRlbXMpIDogbnVsbCAvLyBDcmVhdGUgSlNPTiBvYmplY3Qgd2l0aCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmlzT25Nb2JpbGUgJiZcbiAgICAgIHRoaXMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlc1xuICAgICkge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICAgIHRoaXMuJC5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG4gICAgICB0aGlzLiQuc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG5cbiAgICAgIC8vIENyZWF0ZSBzZWxlY3Qgb3B0aW9ucy5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLmxpbmspXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICB0aGlzLiQuc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5kcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuJC5zZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjb250ZW50JylcbiAgICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pdGVtJylcbiAgICAgICAgKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jb250ZW50JylcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAkaXRlbS5pbm5lclRleHQgPSBpdGVtLmxhYmVsXG4gICAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCdocmVmJywgaXRlbS5saW5rKVxuXG4gICAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2l0ZW0nKVxuICAgICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2Nob29zZScpXG4gICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG5cbiAgICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRhaW5lcicpXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICAgdGhpcy4kLmRyb3Bkb3duLmlubmVySFRNTCA9ICcnXG4gICAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pdGVtJylcbiAgICAgICkgLy8gR2V0IGFsbCBpdGVtcyBpbiBhcnJheS5cbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykgfHxcbiAgICAgIHRoaXMuaXNPbk1vYmlsZSB8fFxuICAgICAgKCF0aGlzLmlzT25Nb2JpbGUgJiYgdGhpcy50eXBlID09PSAnY29udGVudCcpXG4gICAgKSB7XG4gICAgICB0aGlzLiQuY2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy4kLmRyb3Bkb3duLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tLW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhdGhpcy5pc09uTW9iaWxlICYmXG4gICAgICB0aGlzLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk5MXB4KScpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIHRoaXMuJC5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLiQuc2VsZWN0LnZhbHVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKioqKioqKioqKlxuICogTW9kYWxcbiAqIHYxLjAuMFxuICogTWFkZSBieSBMb3JpcyBNYXJpbm8gPGxvcmlzLm1yb0BnbWFpbC5jb20+XG4gKiBodHRwczovL2dpdGh1Yi5jb20vTG9yaXNNYXJpbm9cbiAqIGh0dHBzOi8vbG9yaXNtYXJpbm8uZnJcbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKCRtb2RhbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQubW9kYWwgPSAkbW9kYWwgLy8gQWRkIG1vZGFsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1vZGFsLWJ1dHRvbltkYXRhLW1vZGFsPVwiJHt0aGlzLiQubW9kYWwuZGF0YXNldC5tb2RhbH1cIl1gXG4gICAgICApXG4gICAgKVxuICAgICAgdGhpcy4kLmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubW9kYWwtYnV0dG9uW2RhdGEtbW9kYWw9XCIke3RoaXMuJC5tb2RhbC5kYXRhc2V0Lm1vZGFsfVwiXWBcbiAgICAgIClcbiAgICBpZiAodGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKSlcbiAgICAgIHRoaXMuJC5jbG9zZSA9IHRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJylcblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLS1hY3RpdmUnKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuJC5tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKS5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy4kLmJ1dHRvbikge1xuICAgICAgdGhpcy4kLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kLmNsb3NlKSB7XG4gICAgICB0aGlzLiQuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCJjbGFzcyBSZXNldCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdrZXlib2FyZCcpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNldFxuIiwiLyoqKioqKioqKipcbiAqIFRhYnNcbiAqIHYxLjAuMFxuICogTWFkZSBieSBMb3JpcyBNYXJpbm8gPGxvcmlzLm1yb0BnbWFpbC5jb20+XG4gKiBodHRwczovL2dpdGh1Yi5jb20vTG9yaXNNYXJpbm9cbiAqIGh0dHBzOi8vbG9yaXNtYXJpbm8uZnJcbiAqL1xuXG5jbGFzcyBUYWJzIHtcbiAgY29uc3RydWN0b3IoJHRhYnMpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLnRhYnMgPSAkdGFicyAvLyBBZGQgbW9kYWwgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0RE9NKClcbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTVxuICAgKi9cbiAgX2luaXRET00oKSB7XG4gICAgdGhpcy4kLmhlYWRlckl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19oZWFkZXJJdGVtJylcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0ICRoZWFkZXJJdGVtIG9mIHRoaXMuJC5oZWFkZXJJdGVtcykge1xuICAgICAgY29uc3QgJGNvbnRlbnRJdGVtID0gdGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50YWJzX19jb250ZW50SXRlbVtkYXRhLWl0ZW09XCIkeyRoZWFkZXJJdGVtLmRhdGFzZXQuaXRlbX1cIl1gXG4gICAgICApXG4gICAgICAkaGVhZGVySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpKVxuICAgICAgICAgIHRoaXMuJC50YWJzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkaGVhZGVySXRlbS5jbGFzc0xpc3QuYWRkKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkY29udGVudEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vQWNjb3JkaW9uJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnXG5pbXBvcnQgQ3VzdG9tRmlsZSBmcm9tICcuL0N1c3RvbUZpbGUnXG5pbXBvcnQgQ3VzdG9tUmFuZ2UgZnJvbSAnLi9DdXN0b21SYW5nZSdcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnLi9DdXN0b21TZWxlY3QnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bidcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFJlc2V0IGZyb20gJy4vUmVzZXQnXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5cbmNvbnN0ICRhY2NvcmRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpXG5mb3IgKGNvbnN0ICRhY2NvcmRpb24gb2YgJGFjY29yZGlvbnMpIHtcbiAgbmV3IEFjY29yZGlvbigkYWNjb3JkaW9uKVxufVxuXG5jb25zdCAkY2Fyb3VzZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwnKSlcbmZvciAoY29uc3QgJGNhcm91c2VsIG9mICRjYXJvdXNlbHMpIHtcbiAgbmV3IENhcm91c2VsKCRjYXJvdXNlbClcbn1cblxuY29uc3QgJGN1c3RvbUZpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWZpbGUnKSlcbmZvciAoY29uc3QgJGN1c3RvbUZpbGUgb2YgJGN1c3RvbUZpbGVzKSB7XG4gIG5ldyBDdXN0b21GaWxlKCRjdXN0b21GaWxlKVxufVxuXG5jb25zdCAkY3VzdG9tUmFuZ2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhbmdlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21SYW5nZSBvZiAkY3VzdG9tUmFuZ2VzKSB7XG4gIG5ldyBDdXN0b21SYW5nZSgkY3VzdG9tUmFuZ2UpXG59XG5cbmNvbnN0ICRjdXN0b21TZWxlY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXNlbGVjdCcpKVxuZm9yIChjb25zdCAkY3VzdG9tU2VsZWN0IG9mICRjdXN0b21TZWxlY3RzKSB7XG4gIG5ldyBDdXN0b21TZWxlY3QoJGN1c3RvbVNlbGVjdClcbn1cblxuY29uc3QgJGRyb3Bkb3ducyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJykpXG5mb3IgKGNvbnN0ICRkcm9wZG93biBvZiAkZHJvcGRvd25zKSB7XG4gIG5ldyBEcm9wZG93bigkZHJvcGRvd24pXG59XG5cbmNvbnN0ICRtb2RhbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpKVxuZm9yIChjb25zdCAkbW9kYWwgb2YgJG1vZGFscykge1xuICBuZXcgTW9kYWwoJG1vZGFsKVxufVxuXG5uZXcgUmVzZXQoKVxuXG5jb25zdCAkdGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSlcbmZvciAoY29uc3QgJHRhYiBvZiAkdGFicykge1xuICBuZXcgVGFicygkdGFiKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==