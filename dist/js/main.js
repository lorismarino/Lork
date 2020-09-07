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
      this.$.navigation.right.addEventListener('click', function (event) {
        event.stopImmediatePropagation();

        _this2._moveRight();
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
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tabs */ "./js/Tabs.js");








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

var $tabs = Array.from(document.querySelectorAll('.tabs'));

for (var _i8 = 0, _$tabs = $tabs; _i8 < _$tabs.length; _i8++) {
  var $tab = _$tabs[_i8];
  new _Tabs__WEBPACK_IMPORTED_MODULE_7__["default"]($tab);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2pzL0N1c3RvbUZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ3VzdG9tU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2pzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2pzL01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCIkYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbiIsIl9pbml0RE9NIiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlzTXVsdGlwbGUiLCJkYXRhc2V0IiwibXVsdGlwbGUiLCIkaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiJGNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInB1c2giLCJpdGVtIiwiaGVpZ2h0Iiwic3R5bGUiLCJfZXZlbnRzIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZSIsImFkZCIsIkNhcm91c2VsIiwiJGNhcm91c2VsIiwiY2Fyb3VzZWwiLCJuYXZpZ2F0aW9uIiwibGVmdCIsInJpZ2h0IiwiaXNUb3VjaERldmljZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwidHlwZSIsImFjdGl2ZUl0ZW0iLCJwYWdpbmF0aW9uIiwiZHJhZyIsImF1dG8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibnVtYmVySXRlbXMiLCJsZW5ndGgiLCIkcGFnaW5hdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInNldEludGVydmFsIiwiX21vdmVSaWdodCIsInBhcnNlSW50IiwiX21vdmVMZWZ0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiJGJ1bGxldCIsIl9tb3ZlSXRlbXMiLCJhY3R1YWxQb3NpdGlvbiIsInRvdWNoZXMiLCJjbGllbnRYIiwicHJlc3NJdGVtcyIsInRyYW5zbGF0ZSIsImRyYWdDcmV0YWVkSXRlbSIsIl9kcmFnSXRlbXMiLCJjaGFuZ2VkVG91Y2hlcyIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIiRsYXN0SXRlbSIsImR1cGxpY2F0ZUxhc3RJdGVtIiwiY2xvbmVOb2RlIiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCJpbnNlcnRCZWZvcmUiLCJUd2VlbkxpdGUiLCJ0byIsIngiLCIkZmlyc3RJdGVtIiwiZHVwbGljYXRlRmlyc3RJdGVtIiwidCIsImNsZWFyVGltZW91dCIsInRyYW5zaXRpb24iLCJDdXN0b21GaWxlIiwiJGN1c3RvbUZpbGUiLCJjdXN0b21GaWxlIiwiaXNCdXR0b24iLCJidXR0b24iLCJpc0J1dHRvblBvc2l0aW9uIiwiYnV0dG9ucG9zIiwiaXNTaXplIiwic2l6ZSIsImlubmVyVGV4dCIsImlubmVySFRNTCIsImNvbnRhaW5lciIsImxhYmVsIiwiaW5wdXQiLCJuYW1lIiwiZGlzcGxheSIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsImZpbGUiLCJmaWxlcyIsImJ5dGVzIiwic2l6ZXMiLCJNYXRoIiwiZmxvb3IiLCJjb252ZXJ0Iiwicm91bmQiLCJwb3ciLCJDdXN0b21SYW5nZSIsIiRjdXN0b21SYW5nZSIsImN1c3RvbVJhbmdlIiwiY3Vyc29yUHJlc3MiLCJ0b3RhbCIsInN0ZXAiLCJ0cmFuc2Zvcm1DdXJzb3IiLCJhY3R1YWxTdGVwIiwiYmFja2dyb3VuZEJhciIsInBsYWluQmFyIiwiY3Vyc29yIiwibnVtYmVyU3RlcHMiLCJyYXRpbyIsImV2IiwiY2xpY2tTdGVwIiwiQ3VzdG9tU2VsZWN0IiwiJGN1c3RvbVNlbGVjdCIsImN1c3RvbVNlbGVjdCIsImlzRmlsdGVycyIsImZpbHRlcnMiLCJpc09uTW9iaWxlIiwibW9iaWxlIiwidmlydHVhbExhYmVsIiwiSlNPTiIsInBhcnNlIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCIkc2VsZWN0IiwiJG9wdGlvbiIsInZhbHVlIiwiY2hvb3NlIiwiJGNvbnRhaW5lciIsImZpbHRlciIsInRvZ2dsZSIsInN0b3BQcm9wYWdhdGlvbiIsIl9jaGFuZ2VWYWx1ZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJEcm9wZG93biIsIiRkcm9wZG93biIsImRyb3Bkb3duIiwic2VsZWN0IiwibGluayIsImxvY2F0aW9uIiwiTW9kYWwiLCIkbW9kYWwiLCJtb2RhbCIsImNsb3NlIiwiVGFicyIsIiR0YWJzIiwidGFicyIsImhlYWRlckl0ZW1zIiwiJGhlYWRlckl0ZW0iLCIkY29udGVudEl0ZW0iLCIkYWNjb3JkaW9ucyIsIiRjYXJvdXNlbHMiLCIkY3VzdG9tRmlsZXMiLCIkY3VzdG9tUmFuZ2VzIiwiJGN1c3RvbVNlbGVjdHMiLCIkZHJvcGRvd25zIiwiJG1vZGFscyIsIiR0YWIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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LGFBQWpCO0FBQ0Q7O0FBRUQsSUFBTTJDLFVBQVUsR0FBR3ZLLEtBQUssQ0FBQ0MsSUFBTixDQUFXMkMsUUFBUSxDQUFDMUMsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBWCxDQUFuQjs7QUFDQSxnQ0FBd0JxSyxVQUF4QixtQ0FBb0M7QUFBL0IsTUFBTXBCLFNBQVMsbUJBQWY7QUFDSCxNQUFJRCxpREFBSixDQUFhQyxTQUFiO0FBQ0Q7O0FBRUQsSUFBTXFCLE9BQU8sR0FBR3hLLEtBQUssQ0FBQ0MsSUFBTixDQUFXMkMsUUFBUSxDQUFDMUMsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBWCxDQUFoQjs7QUFDQSw2QkFBcUJzSyxPQUFyQixnQ0FBOEI7QUFBekIsTUFBTWYsTUFBTSxnQkFBWjtBQUNILE1BQUlELDhDQUFKLENBQVVDLE1BQVY7QUFDRDs7QUFFRCxJQUFNSSxLQUFLLEdBQUc3SixLQUFLLENBQUNDLElBQU4sQ0FBVzJDLFFBQVEsQ0FBQzFDLGdCQUFULENBQTBCLE9BQTFCLENBQVgsQ0FBZDs7QUFDQSwyQkFBbUIySixLQUFuQiw4QkFBMEI7QUFBckIsTUFBTVksSUFBSSxjQUFWO0FBQ0gsTUFBSWIsNkNBQUosQ0FBU2EsSUFBVDtBQUNELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi5qc1wiKTtcbiIsIi8qKioqKioqKioqXG4gKiBBY2NvcmRpb25cbiAqIE1hZGUgYnkgTG9yaXMgTWFyaW5vIDxsb3Jpcy5tcm9AZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL0xvcmlzTWFyaW5vXG4gKiBodHRwczovL2xvcmlzbWFyaW5vLmZyXG4gKi9cblxuY2xhc3MgQWNjb3JkaW9uIHtcbiAgY29uc3RydWN0b3IoJGFjY29yZGlvbikge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuYWNjb3JkaW9uID0gJGFjY29yZGlvbiAvLyBBZGQgYWNjb3JkaW9uIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2l0ZW0nKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdXG4gICAgdGhpcy5pc011bHRpcGxlID0gdGhpcy4kLmFjY29yZGlvbi5kYXRhc2V0Lm11bHRpcGxlIC8vIFNldCBpcyBtdWx0aXBsZSBpdGVtIG9wZW4uXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgaWYgKCRpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLS1vcGVuJykpIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtQ29udGFpbmVyJylcbiAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9ICRjb250ZW50Lm9mZnNldEhlaWdodFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBpdGVtOiAkaXRlbSwgaGVpZ2h0OiBjb250ZW50SGVpZ2h0IH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICRjb250ZW50LnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgaXRlbTogJGl0ZW0sIGhlaWdodDogY29udGVudEhlaWdodCB9KVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0IHsgaXRlbSwgaGVpZ2h0IH0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgY29uc3QgJGJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUJ1dHRvbicpXG4gICAgICBjb25zdCAkY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpXG4gICAgICAkYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICAgIGZvciAoY29uc3QgeyBpdGVtIH0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbUNvbnRhaW5lcicpLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpKSB7XG4gICAgICAgICAgJGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkY29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25cbiIsIi8qKioqKioqKioqXG4gKiBDYXJvdXNlbFxuICogTWFkZSBieSBMb3JpcyBNYXJpbm8gPGxvcmlzLm1yb0BnbWFpbC5jb20+XG4gKiBodHRwczovL2dpdGh1Yi5jb20vTG9yaXNNYXJpbm9cbiAqIGh0dHBzOi8vbG9yaXNtYXJpbm8uZnJcbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKCRjYXJvdXNlbCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY2Fyb3VzZWwgPSAkY2Fyb3VzZWwgLy8gQWRkIGNhcm91c2VsIGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdERPTSgpXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET01cbiAgICovXG4gIF9pbml0RE9NKCkge1xuICAgIHRoaXMuJC5uYXZpZ2F0aW9uID0ge1xuICAgICAgbGVmdDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1sZWZ0JyksXG4gICAgICByaWdodDogdGhpcy4kLmNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYnV0dG9uLS1yaWdodCcpXG4gICAgfVxuICAgIHRoaXMuJC5pdGVtcyA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW1zJylcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5pc1RvdWNoRGV2aWNlID0gISEoXG4gICAgICAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzXG4gICAgKVxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbm9ybWFsJ1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICB0aGlzLnBhZ2luYXRpb24gPSB0aGlzLiQuY2Fyb3VzZWwuZGF0YXNldC5wYWdpbmF0aW9uXG4gICAgdGhpcy5kcmFnID0gdGhpcy4kLmNhcm91c2VsLmRhdGFzZXQuZHJhZ1xuICAgIHRoaXMuYXV0byA9IHRoaXMuJC5jYXJvdXNlbC5kYXRhc2V0LmF1dG9cbiAgICB0aGlzLndpZHRoID0gdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoXG4gICAgdGhpcy5udW1iZXJJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJylcbiAgICApLmxlbmd0aFxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgJHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJHBhZ2luYXRpb24uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb24nKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVySXRlbXM7IGkrKykge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICRpdGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgICAgICRpdGVtLmRhdGFzZXQuaXRlbSA9IGkgKyAxXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgICRwYWdpbmF0aW9uLmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfVxuICAgICAgdGhpcy4kLmNhcm91c2VsLmFwcGVuZENoaWxkKCRwYWdpbmF0aW9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG8pIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICAgIH0sIHBhcnNlSW50KHRoaXMuYXV0bykpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLm5hdmlnYXRpb24ubGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX21vdmVMZWZ0KClcbiAgICB9KVxuXG4gICAgdGhpcy4kLm5hdmlnYXRpb24ucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcbiAgICB9KVxuXG4gICAgZm9yIChjb25zdCAkYnVsbGV0IG9mIEFycmF5LmZyb20oXG4gICAgICB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0JylcbiAgICApKSB7XG4gICAgICAkYnVsbGV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgJGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKCRidWxsZXQuZGF0YXNldC5pdGVtIC0gMSlcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gcGFyc2VJbnQoJGJ1bGxldC5kYXRhc2V0Lml0ZW0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYWcpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hEZXZpY2UpIHtcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IHRydWVcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IDBcbiAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kLmNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLl9kcmFnSXRlbXMoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA+IHRoaXMuYWN0dWFsUG9zaXRpb24pIHRoaXMuX21vdmVMZWZ0KClcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDwgdGhpcy5hY3R1YWxQb3NpdGlvbilcbiAgICAgICAgICAgICAgdGhpcy5fbW92ZVJpZ2h0KClcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zICYmXG4gICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScgJiZcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxICYmXG4gICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpKVxuICAgICAgICAgICAgICAgIC5sZW5ndGggPiB0aGlzLm51bWJlckl0ZW1zXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiQuaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC5jbGllbnRYXG4gICAgICAgICAgdGhpcy5wcmVzc0l0ZW1zID0gdHJ1ZVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlID0gMFxuICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiQuaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYWdJdGVtcyhldmVudC5jbGllbnRYKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24gKyAyMCkgdGhpcy5fbW92ZUxlZnQoKVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuY2xpZW50WCA8IHRoaXMuYWN0dWFsUG9zaXRpb24gLSAyMCkgdGhpcy5fbW92ZVJpZ2h0KClcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiArIDIwIHx8XG4gICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uIC0gMjBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zICYmXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSAxICYmXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgICAgICAgICAgICAubGVuZ3RoID4gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZHJhZ0l0ZW1zKGNsaWVudFgpIHtcbiAgICBpZiAodGhpcy5wcmVzc0l0ZW1zKSB7XG4gICAgICBpZiAoY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSBjbGllbnRYIC0gdGhpcy5hY3R1YWxQb3NpdGlvblxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdpbmZpbml0ZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0NyZXRhZWRJdGVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0ICRsYXN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVMYXN0SXRlbSA9ICRsYXN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVMYXN0SXRlbSxcbiAgICAgICAgICAgICAgICB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0NyZXRhZWRJdGVtID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBUd2VlbkxpdGUudG8odGhpcy4kLml0ZW1zLCAwLjEsIHsgeDogdGhpcy50cmFuc2xhdGUgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLiQuaXRlbXMsIDAuMSwge1xuICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgICh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggK1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IHRoaXMuYWN0dWFsUG9zaXRpb24gLSBjbGllbnRYXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgICAgICBUd2VlbkxpdGUudG8odGhpcy4kLml0ZW1zLCAwLjEsIHtcbiAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICAodGhpcy5hY3RpdmVJdGVtIC0gMSkgKiAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdDcmV0YWVkSXRlbSkge1xuICAgICAgICAgICAgICB0aGlzLmRyYWdDcmV0YWVkSXRlbSA9IHRydWVcbiAgICAgICAgICAgICAgY29uc3QgJGZpcnN0SXRlbSA9IHRoaXMuJC5jYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcuY2Fyb3VzZWxfX2l0ZW0nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlRmlyc3RJdGVtID0gJGZpcnN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUZpcnN0SXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLiQuaXRlbXMsIDAuMSwge1xuICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgICh0aGlzLm51bWJlckl0ZW1zIC0gMSkgKiAtdGhpcy4kLmNhcm91c2VsLm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLiQuaXRlbXMsIDAuMSwge1xuICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgICh0aGlzLmFjdGl2ZUl0ZW0gLSAxKSAqIC10aGlzLiQuY2Fyb3VzZWwub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlTGVmdCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbm9ybWFsJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA+IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSAtIDIsICdsZWZ0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtLS1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2xvb3AnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID4gMSkge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtIC0gMiwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0tLVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IDEpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMubnVtYmVySXRlbXMgLSAxLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMubnVtYmVySXRlbXNcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSkge1xuICAgICAgICBjb25zdCAkbGFzdEl0ZW0gPSB0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnLmNhcm91c2VsX19pdGVtOmxhc3QtY2hpbGQnXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgZHVwbGljYXRlTGFzdEl0ZW0gPSAkbGFzdEl0ZW0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIGR1cGxpY2F0ZUxhc3RJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgICAgZHVwbGljYXRlTGFzdEl0ZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUxhc3RJdGVtKVxuICAgICAgICB0aGlzLiQuaXRlbXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCcpLFxuICAgICAgICAgIHRoaXMuJC5pdGVtcy5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2l0ZW0nKVxuICAgICAgICApXG4gICAgICAgIHRoaXMuX21vdmVJdGVtcygtMSwgJ2xlZnQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLm51bWJlckl0ZW1zXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlSXRlbSA8PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIHRoaXMuX21vdmVJdGVtcyh0aGlzLmFjdGl2ZUl0ZW0gLSAyLCAnbGVmdCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS0tXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVSaWdodCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbm9ybWFsJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2xvb3AnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgdGhpcy5udW1iZXJJdGVtcykge1xuICAgICAgICB0aGlzLl9tb3ZlSXRlbXModGhpcy5hY3RpdmVJdGVtLCAncmlnaHQnKVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKDAsICdyaWdodCcpXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDFcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMubnVtYmVySXRlbXMpIHtcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtKytcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLm51bWJlckl0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRmaXJzdEl0ZW0gPSB0aGlzLiQuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJylcbiAgICAgICAgY29uc3QgZHVwbGljYXRlRmlyc3RJdGVtID0gJGZpcnN0SXRlbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgdGhpcy4kLml0ZW1zLmFwcGVuZENoaWxkKGR1cGxpY2F0ZUZpcnN0SXRlbSlcbiAgICAgICAgdGhpcy5fbW92ZUl0ZW1zKHRoaXMuYWN0aXZlSXRlbSwgJ3JpZ2h0JylcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gMVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlSXRlbXMoeCwgcG9zaXRpb24gPSBudWxsKSB7XG4gICAgbGV0IHRcbiAgICBjbGVhclRpbWVvdXQodClcbiAgICB0aGlzLiQuaXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQnXG4gICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7eCAqIC10aGlzLndpZHRofXB4KWBcblxuICAgIHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy50eXBlID09PSAnaW5maW5pdGUnICYmXG4gICAgICAgIHBvc2l0aW9uID09PSAncmlnaHQnICYmXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gMVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZCh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykpXG5cbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xuXG4gICAgICAgIHRoaXMuJC5pdGVtcy5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkJyksXG4gICAgICAgICAgdGhpcy4kLml0ZW1zLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9faXRlbScpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMudHlwZSA9PT0gJ2luZmluaXRlJyAmJlxuICAgICAgICBwb3NpdGlvbiA9PT0gJ2xlZnQnICYmXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtc1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5yZW1vdmVDaGlsZCh0aGlzLiQuaXRlbXMucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19pdGVtJykpXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyh0aGlzLm51bWJlckl0ZW1zIC0gMSkgKlxuICAgICAgICAgIC10aGlzLndpZHRofSlgXG4gICAgICB9XG4gICAgfSwgMTAwMClcblxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gMSlcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpsYXN0LWNoaWxkJylcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuJC5jYXJvdXNlbFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldDpudGgtY2hpbGQoJHt0aGlzLmFjdGl2ZUl0ZW0gLSAxfSlgXG4gICAgICAgICAgKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldC0tYWN0aXZlJylcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gdGhpcy5udW1iZXJJdGVtcylcbiAgICAgICAgdGhpcy4kLmNhcm91c2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcGFnaW5hdGlvbkJ1bGxldCcpXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wYWdpbmF0aW9uQnVsbGV0LS1hY3RpdmUnKVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLiQuY2Fyb3VzZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQ6bnRoLWNoaWxkKCR7dGhpcy5hY3RpdmVJdGVtICsgMX0pYFxuICAgICAgICAgIClcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25CdWxsZXQtLWFjdGl2ZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tRmlsZVxuICogTWFkZSBieSBMb3JpcyBNYXJpbm8gPGxvcmlzLm1yb0BnbWFpbC5jb20+XG4gKiBodHRwczovL2dpdGh1Yi5jb20vTG9yaXNNYXJpbm9cbiAqIGh0dHBzOi8vbG9yaXNtYXJpbm8uZnJcbiAqL1xuXG5jbGFzcyBDdXN0b21GaWxlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbUZpbGUpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUgPSAkY3VzdG9tRmlsZSAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzQnV0dG9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25cbiAgICB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgOiAncmlnaHQnXG4gICAgdGhpcy5pc1NpemUgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnNpemVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmlzQnV0dG9uXG4gICAgfVxuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuaW5uZXJIVE1MID0gJydcblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19jb250YWluZXInKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBsYWJlbFxuICAgIHRoaXMuJC5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmxhYmVsXG4gICAgdGhpcy4kLmxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19sYWJlbCcpXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcblxuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpXG4gICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIHNpemUgaW5mb1xuICAgICAgdGhpcy4kLnNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHRoaXMuJC5zaXplLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19zaXplJylcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9ICcwIG1iJ1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLnNpemUpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuaW5wdXQuY2xpY2soKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3RlJylcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgIGNvbnN0IGJ5dGVzID0gZmlsZS5zaXplXG4gICAgICBjb25zdCBzaXplcyA9IFsnYnl0ZXMnLCAna2InLCAnbWInLCAnZ2InLCAndGInXVxuICAgICAgY29uc3QgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKVxuICAgICAgY29uc3QgY29udmVydCA9IE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMilcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IGAke2NvbnZlcnR9ICR7c2l6ZXNbaV19YFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRmlsZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVJhbmdlXG4gKiBNYWRlIGJ5IExvcmlzIE1hcmlubyA8bG9yaXMubXJvQGdtYWlsLmNvbT5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Mb3Jpc01hcmlub1xuICogaHR0cHM6Ly9sb3Jpc21hcmluby5mclxuICovXG5cbmNsYXNzIEN1c3RvbVJhbmdlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVJhbmdlKSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21SYW5nZSA9ICRjdXN0b21SYW5nZSAvLyBBZGQgY3VzdG9tUmFuZ2UgaW4gRE9NIG9iamVjdHMuXG5cbiAgICB0aGlzLl9pbml0UGFyYW1zKClcbiAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7XG4gICAgdGhpcy5jdXJzb3JQcmVzcyA9IGZhbHNlXG4gICAgdGhpcy50b3RhbCA9IHRoaXMuJC5jdXN0b21SYW5nZS5kYXRhc2V0LnRvdGFsXG4gICAgdGhpcy5zdGVwID0gdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQuc3RlcFxuICAgIHRoaXMudHJhbnNmb3JtQ3Vyc29yID0gMFxuICAgIHRoaXMuYWN0dWFsU3RlcCA9IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQubmFtZSlcbiAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgLy8gQ3JlYXRlIGJhY2tncm91bmQgYmFyLlxuICAgIHRoaXMuJC5iYWNrZ3JvdW5kQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLiQuYmFja2dyb3VuZEJhci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2JhcicpXG4gICAgdGhpcy4kLmJhY2tncm91bmRCYXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19iYXItLWJhY2tncm91bmQnKVxuXG4gICAgLy8gQ3JlYXRlIHBsYWluIGJhci5cbiAgICB0aGlzLiQucGxhaW5CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuJC5wbGFpbkJhci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2JhcicpXG4gICAgdGhpcy4kLnBsYWluQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyLS1wbGFpbicpXG5cbiAgICAvLyBDcmVhdGUgY3Vzcm9yLlxuICAgIHRoaXMuJC5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuJC5jdXJzb3IuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19jdXJzb3InKVxuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5iYWNrZ3JvdW5kQmFyKVxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hcHBlbmRDaGlsZCh0aGlzLiQucGxhaW5CYXIpXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5jdXJzb3IpXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgIHRoaXMuJC5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLTUwJSlgXG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy4kLmN1c3RvbVJhbmdlLm9mZnNldFdpZHRoXG4gICAgdGhpcy5udW1iZXJTdGVwcyA9IHRoaXMudG90YWwgLyB0aGlzLnN0ZXAgLy8gbm9tYnJlIGRlIGZvaXMgcG91ciBhcnJpdmVyIGEgdG90YWxcbiAgICB0aGlzLnJhdGlvID0gdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyU3RlcHMgLy8gcGl4ZWwgZGUgbGFyZ2V1ciBwb3VyIDElIGR1IHRvdGFsXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICB0aGlzLmN1cnNvclByZXNzID0gdHJ1ZVxuICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ID0+IHtcbiAgICAgIHRoaXMuY3Vyc29yUHJlc3MgPSBmYWxzZVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5jdXJzb3JQcmVzcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCA+IHRoaXMuYWN0dWFsUG9zaXRpb24gJiZcbiAgICAgICAgICBldmVudC5jbGllbnRYID49ICh0aGlzLmFjdHVhbFN0ZXAgKyAxKSAqIHRoaXMucmF0aW8gJiZcbiAgICAgICAgICB0aGlzLmFjdHVhbFN0ZXAgPCB0aGlzLm51bWJlclN0ZXBzXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudHJhbnNmb3JtQ3Vyc29yID1cbiAgICAgICAgICAgICh0aGlzLmFjdHVhbFN0ZXAgKyAxKSAqIHRoaXMucmF0aW8gLSB0aGlzLiQuY3Vyc29yLm9mZnNldFdpZHRoIC8gMlxuICAgICAgICAgIHRoaXMuJC5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zZm9ybUN1cnNvcn1weClgXG4gICAgICAgICAgdGhpcy4kLnBsYWluQmFyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHsoMSAvIHRoaXMubnVtYmVyU3RlcHMpICpcbiAgICAgICAgICAgICh0aGlzLmFjdHVhbFN0ZXAgKyAxKX0pYFxuICAgICAgICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSBldmVudC5jbGllbnRYXG4gICAgICAgICAgdGhpcy5hY3R1YWxTdGVwKytcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBldmVudC5jbGllbnRYIDwgdGhpcy5hY3R1YWxQb3NpdGlvbiAmJlxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPD0gKHRoaXMuYWN0dWFsU3RlcCAtIDEpICogdGhpcy5yYXRpbyAmJlxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPVxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCAtIDEpICogdGhpcy5yYXRpbyAtIHRoaXMuJC5jdXJzb3Iub2Zmc2V0V2lkdGggLyAyXG4gICAgICAgICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNmb3JtQ3Vyc29yfXB4KWBcbiAgICAgICAgICB0aGlzLiQucGxhaW5CYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgkeygxIC8gdGhpcy5udW1iZXJTdGVwcykgKlxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCAtIDEpfSlgXG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLmFjdHVhbFN0ZXAtLVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuJC5jdXN0b21SYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGxldCBjbGlja1N0ZXAgPSAwXG4gICAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8PSB0aGlzLm51bWJlclN0ZXBzOyBzdGVwKyspIHtcbiAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPiBzdGVwICogdGhpcy5yYXRpbyAtIDIwKSBjbGlja1N0ZXAgPSBzdGVwXG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhbnNmb3JtQ3Vyc29yID1cbiAgICAgICAgY2xpY2tTdGVwICogdGhpcy5yYXRpbyAtIHRoaXMuJC5jdXJzb3Iub2Zmc2V0V2lkdGggLyAyXG4gICAgICB0aGlzLiQuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy50cmFuc2Zvcm1DdXJzb3J9cHgpYFxuICAgICAgdGhpcy4kLnBsYWluQmFyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHsoMSAvIHRoaXMubnVtYmVyU3RlcHMpICpcbiAgICAgICAgY2xpY2tTdGVwfSlgXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SYW5nZVxuIiwiLyoqKioqKioqKipcbiAqIEN1c3RvbVNlbGVjdFxuICogTWFkZSBieSBMb3JpcyBNYXJpbm8gPGxvcmlzLm1yb0BnbWFpbC5jb20+XG4gKiBodHRwczovL2dpdGh1Yi5jb20vTG9yaXNNYXJpbm9cbiAqIGh0dHBzOi8vbG9yaXNtYXJpbm8uZnJcbiAqL1xuXG5jbGFzcyBDdXN0b21TZWxlY3Qge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tU2VsZWN0KSB7XG4gICAgdGhpcy4kID0ge30gLy8gSW5pdGlhbGl6ZSBvYmplY3Qgb2YgRE9NIGVsZW1lbnRzLlxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QgPSAkY3VzdG9tU2VsZWN0IC8vIEFkZCBjdXN0b20tc2VsZWN0IGluIERPTSBvYmplY3RzLlxuXG4gICAgdGhpcy5faW5pdFBhcmFtcygpXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwYXJhbXNcbiAgICovXG4gIF9pbml0UGFyYW1zKCkge1xuICAgIHRoaXMuaXNGaWx0ZXJzID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmZpbHRlcnMgLy8gU2V0IGZpbHRlcnMgaXMgYWN0aXZhdGVkLlxuICAgIHRoaXMuaXNPbk1vYmlsZSA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5tb2JpbGUgLy8gU2V0IGN1c3RvbSBtb2JpbGUgaXMgYWN0aXZhdGVkLlxuICAgIHRoaXMudmlydHVhbExhYmVsID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmxhYmVsIC8vIFNldCBhY3RpdmF0ZWQgbGFiZWwuXG4gICAgdGhpcy5pdGVtcyA9IEpTT04ucGFyc2UodGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lml0ZW1zKSAvLyBDcmVhdGUgSlNPTiBvYmplY3Qgd2l0aCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5OTFweCknKS5tYXRjaGVzKSB7XG4gICAgICAvLyBDcmVhdGUgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgICAgY29uc3QgJHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAkc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5uYW1lKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbFxuICAgICAgJHNlbGVjdC5hcHBlbmRDaGlsZCgkb3B0aW9uKVxuXG4gICAgICAvLyBDcmVhdGUgc2VsZWN0IG9wdGlvbnMuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbS52YWx1ZSlcbiAgICAgICAgJG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLmxhYmVsXG4gICAgICAgICRzZWxlY3QuYXBwZW5kQ2hpbGQoJG9wdGlvbilcbiAgICAgIH1cblxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkc2VsZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpXG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdC0tZmlsdGVycycpXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCB3aXRoIGVsZW1lbnRzLlxuICAgICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9fY29udGVudCcpXG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgJGl0ZW0uZGF0YXNldC5sYWJlbCA9IGl0ZW0ubGFiZWxcbiAgICAgICAgJGl0ZW0uZGF0YXNldC52YWx1ZSA9IGl0ZW0udmFsdWVcbiAgICAgICAgJGl0ZW0uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19pdGVtJylcbiAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uLlxuICAgICAgdGhpcy4kLmNob29zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY2hvb3NlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2Nob29zZScpXG4gICAgICBpZiAoIXRoaXMuaXNGaWx0ZXJzKVxuICAgICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbFxuXG4gICAgICAvLyBDcmVhdGUgd3JhcHBpbmcgY29udGFpbmVyIGZvciBjb250ZW50LlxuICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRhaW5lcicpXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuY2hvb3NlKVxuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgICAvLyBDcmVhdGUgaW5wdXQgZm9yIHNlbGVjdCB2YWx1ZS5cbiAgICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubmFtZSlcbiAgICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcblxuICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXNlbGVjdF9faXRlbScpXG4gICAgICApIC8vIEdldCBhbGwgaXRlbXMgaW4gYXJyYXkuXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZmlsdGVyIGlucHV0LlxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5maWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWxcbiAgICAgICAgdGhpcy4kLmNob29zZS5hcHBlbmRDaGlsZCh0aGlzLiQuZmlsdGVyKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpXG4gIH1cblxuICBfZXZlbnRzKCkge1xuICAgIGlmIChcbiAgICAgICghdGhpcy5pc09uTW9iaWxlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKS5tYXRjaGVzKSB8fFxuICAgICAgdGhpcy5pc09uTW9iaWxlXG4gICAgKSB7XG4gICAgICB0aGlzLiQuY2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgICAkaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VWYWx1ZSgkaXRlbSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuJC5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9ICcnXG4gICAgICAgICAgdGhpcy4kLmZpbHRlci5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdGhpcy52aXJ0dWFsTGFiZWwpXG4gICAgICAgICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICAgICAgICRpdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoJGl0ZW0uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy4kLmZpbHRlci52YWx1ZSkpXG4gICAgICAgICAgICAgICRpdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICBlbHNlICRpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuJC5jdXN0b21TZWxlY3QuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG5cbiAgICAgICAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQuZmlsdGVyLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICB0aGlzLiQuaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSB0aGlzLnZpcnR1YWxMYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9jaGFuZ2VWYWx1ZSgkaXRlbSkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9ICRpdGVtLmRhdGFzZXQubGFiZWxcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNob29zZS5pbm5lclRleHQgPSAkaXRlbS5kYXRhc2V0LmxhYmVsXG4gICAgfVxuXG4gICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJGl0ZW0uZGF0YXNldC52YWx1ZVxuICAgIHRoaXMudmlydHVhbExhYmVsID0gJGl0ZW0uZGF0YXNldC5sYWJlbFxuICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLXNlbGVjdC0tb3BlbicpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tU2VsZWN0XG4iLCIvKioqKioqKioqKlxuICogRHJvcGRvd25cbiAqIE1hZGUgYnkgTG9yaXMgTWFyaW5vIDxsb3Jpcy5tcm9AZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL0xvcmlzTWFyaW5vXG4gKiBodHRwczovL2xvcmlzbWFyaW5vLmZyXG4gKi9cblxuY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3RvcigkZHJvcGRvd24pIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmRyb3Bkb3duID0gJGRyb3Bkb3duIC8vIEFkZCBkcm9wZG93biBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuZHJvcGRvd24uZGF0YXNldC5tb2JpbGUgLy8gU2V0IGN1c3RvbSBtb2JpbGUgaXMgYWN0aXZhdGVkLlxuICAgIHRoaXMudHlwZSA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LnR5cGVcbiAgICAgID8gdGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQudHlwZVxuICAgICAgOiAnbGluaycgLy8gU2V0IHR5cGUgb2YgZHJvcGRvd24uXG4gICAgdGhpcy5pdGVtcyA9XG4gICAgICB0aGlzLnR5cGUgPT09ICdsaW5rJyA/IEpTT04ucGFyc2UodGhpcy4kLmRyb3Bkb3duLmRhdGFzZXQuaXRlbXMpIDogbnVsbCAvLyBDcmVhdGUgSlNPTiBvYmplY3Qgd2l0aCBpdGVtcy5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmlzT25Nb2JpbGUgJiZcbiAgICAgIHRoaXMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlc1xuICAgICkge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICAgIHRoaXMuJC5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgc2VsZWN0IG9wdGlvbi5cbiAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgJG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpXG4gICAgICAkb3B0aW9uLmlubmVyVGV4dCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG4gICAgICB0aGlzLiQuc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG5cbiAgICAgIC8vIENyZWF0ZSBzZWxlY3Qgb3B0aW9ucy5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAkb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtLmxpbmspXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICB0aGlzLiQuc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5kcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuJC5zZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjb250ZW50JylcbiAgICAgICAgdGhpcy4kLml0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pdGVtJylcbiAgICAgICAgKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19jb250ZW50JylcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAkaXRlbS5pbm5lclRleHQgPSBpdGVtLmxhYmVsXG4gICAgICAgICAgJGl0ZW0uc2V0QXR0cmlidXRlKCdocmVmJywgaXRlbS5saW5rKVxuXG4gICAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2l0ZW0nKVxuICAgICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJGl0ZW0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24uXG4gICAgICB0aGlzLiQuY2hvb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuJC5jaG9vc2UuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2Nob29zZScpXG4gICAgICB0aGlzLiQuY2hvb3NlLmlubmVySFRNTCA9IHRoaXMuJC5kcm9wZG93bi5kYXRhc2V0LmxhYmVsXG5cbiAgICAgIC8vIENyZWF0ZSB3cmFwcGluZyBjb250YWluZXIgZm9yIGNvbnRlbnQuXG4gICAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2NvbnRhaW5lcicpXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250ZW50KVxuICAgICAgdGhpcy4kLmRyb3Bkb3duLmlubmVySFRNTCA9ICcnXG4gICAgICB0aGlzLiQuZHJvcGRvd24uYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICAgIHRoaXMuJC5kcm9wZG93bi5hcHBlbmRDaGlsZCgkY29udGFpbmVyKVxuXG4gICAgICB0aGlzLiQuaXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgICB0aGlzLiQuZHJvcGRvd24ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pdGVtJylcbiAgICAgICkgLy8gR2V0IGFsbCBpdGVtcyBpbiBhcnJheS5cbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykgfHxcbiAgICAgIHRoaXMuaXNPbk1vYmlsZSB8fFxuICAgICAgKCF0aGlzLmlzT25Nb2JpbGUgJiYgdGhpcy50eXBlID09PSAnY29udGVudCcpXG4gICAgKSB7XG4gICAgICB0aGlzLiQuY2hvb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tLW9wZW4nKVxuICAgICAgfSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghdGhpcy4kLmRyb3Bkb3duLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiQuZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tLW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhdGhpcy5pc09uTW9iaWxlICYmXG4gICAgICB0aGlzLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk5MXB4KScpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIHRoaXMuJC5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLiQuc2VsZWN0LnZhbHVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKioqKioqKioqKlxuICogTW9kYWxcbiAqIE1hZGUgYnkgTG9yaXMgTWFyaW5vIDxsb3Jpcy5tcm9AZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL0xvcmlzTWFyaW5vXG4gKiBodHRwczovL2xvcmlzbWFyaW5vLmZyXG4gKi9cblxuY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcigkbW9kYWwpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLm1vZGFsID0gJG1vZGFsIC8vIEFkZCBtb2RhbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHsgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubW9kYWwtYnV0dG9uW2RhdGEtbW9kYWw9XCIke3RoaXMuJC5tb2RhbC5kYXRhc2V0Lm1vZGFsfVwiXWBcbiAgICAgIClcbiAgICApXG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5tb2RhbC1idXR0b25bZGF0YS1tb2RhbD1cIiR7dGhpcy4kLm1vZGFsLmRhdGFzZXQubW9kYWx9XCJdYFxuICAgICAgKVxuICAgIGlmICh0aGlzLiQubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpKVxuICAgICAgdGhpcy4kLmNsb3NlID0gdGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtLWFjdGl2ZScpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy4kLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGVudCcpLmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLiQuYnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLiQubW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLiQuY2xvc2UpIHtcbiAgICAgIHRoaXMuJC5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qKioqKioqKioqXG4gKiBUYWJzXG4gKiBNYWRlIGJ5IExvcmlzIE1hcmlubyA8bG9yaXMubXJvQGdtYWlsLmNvbT5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Mb3Jpc01hcmlub1xuICogaHR0cHM6Ly9sb3Jpc21hcmluby5mclxuICovXG5cbmNsYXNzIFRhYnMge1xuICBjb25zdHJ1Y3RvcigkdGFicykge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQudGFicyA9ICR0YWJzIC8vIEFkZCBtb2RhbCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRET00oKVxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NXG4gICAqL1xuICBfaW5pdERPTSgpIHtcbiAgICB0aGlzLiQuaGVhZGVySXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2hlYWRlckl0ZW0nKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhcmFtc1xuICAgKi9cbiAgX2luaXRQYXJhbXMoKSB7IH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0ICRoZWFkZXJJdGVtIG9mIHRoaXMuJC5oZWFkZXJJdGVtcykge1xuICAgICAgY29uc3QgJGNvbnRlbnRJdGVtID0gdGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50YWJzX19jb250ZW50SXRlbVtkYXRhLWl0ZW09XCIkeyRoZWFkZXJJdGVtLmRhdGFzZXQuaXRlbX1cIl1gXG4gICAgICApXG4gICAgICAkaGVhZGVySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKSlcbiAgICAgICAgICB0aGlzLiQudGFic1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2hlYWRlckl0ZW0tLWFjdGl2ZScpXG4gICAgICAgIGlmICh0aGlzLiQudGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpKVxuICAgICAgICAgIHRoaXMuJC50YWJzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2NvbnRlbnRJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkaGVhZGVySXRlbS5jbGFzc0xpc3QuYWRkKCd0YWJzX19oZWFkZXJJdGVtLS1hY3RpdmUnKVxuICAgICAgICAkY29udGVudEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFic19fY29udGVudEl0ZW0tLWFjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vQWNjb3JkaW9uJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnXG5pbXBvcnQgQ3VzdG9tRmlsZSBmcm9tICcuL0N1c3RvbUZpbGUnXG5pbXBvcnQgQ3VzdG9tUmFuZ2UgZnJvbSAnLi9DdXN0b21SYW5nZSdcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnLi9DdXN0b21TZWxlY3QnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bidcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJ1xuXG5jb25zdCAkYWNjb3JkaW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpKVxuZm9yIChjb25zdCAkYWNjb3JkaW9uIG9mICRhY2NvcmRpb25zKSB7XG4gIG5ldyBBY2NvcmRpb24oJGFjY29yZGlvbilcbn1cblxuY29uc3QgJGNhcm91c2VscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsJykpXG5mb3IgKGNvbnN0ICRjYXJvdXNlbCBvZiAkY2Fyb3VzZWxzKSB7XG4gIG5ldyBDYXJvdXNlbCgkY2Fyb3VzZWwpXG59XG5cbmNvbnN0ICRjdXN0b21GaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1maWxlJykpXG5mb3IgKGNvbnN0ICRjdXN0b21GaWxlIG9mICRjdXN0b21GaWxlcykge1xuICBuZXcgQ3VzdG9tRmlsZSgkY3VzdG9tRmlsZSlcbn1cblxuY29uc3QgJGN1c3RvbVJhbmdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYW5nZScpKVxuZm9yIChjb25zdCAkY3VzdG9tUmFuZ2Ugb2YgJGN1c3RvbVJhbmdlcykge1xuICBuZXcgQ3VzdG9tUmFuZ2UoJGN1c3RvbVJhbmdlKVxufVxuXG5jb25zdCAkY3VzdG9tU2VsZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3QnKSlcbmZvciAoY29uc3QgJGN1c3RvbVNlbGVjdCBvZiAkY3VzdG9tU2VsZWN0cykge1xuICBuZXcgQ3VzdG9tU2VsZWN0KCRjdXN0b21TZWxlY3QpXG59XG5cbmNvbnN0ICRkcm9wZG93bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpKVxuZm9yIChjb25zdCAkZHJvcGRvd24gb2YgJGRyb3Bkb3ducykge1xuICBuZXcgRHJvcGRvd24oJGRyb3Bkb3duKVxufVxuXG5jb25zdCAkbW9kYWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKSlcbmZvciAoY29uc3QgJG1vZGFsIG9mICRtb2RhbHMpIHtcbiAgbmV3IE1vZGFsKCRtb2RhbClcbn1cblxuY29uc3QgJHRhYnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpXG5mb3IgKGNvbnN0ICR0YWIgb2YgJHRhYnMpIHtcbiAgbmV3IFRhYnMoJHRhYilcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=