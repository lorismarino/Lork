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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/CustomSelect.js":
/*!*******************************************!*\
  !*** ./src/js/components/CustomSelect.js ***!
  \*******************************************/
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
var $customSelects = Array.from(document.querySelectorAll('.custom-select'));

for (var _i = 0, _$customSelects = $customSelects; _i < _$customSelects.length; _i++) {
  var $customSelect = _$customSelects[_i];
  new CustomSelect($customSelect);
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CustomSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CustomSelect */ "./src/js/components/CustomSelect.js");

var $customSelects = Array.from(document.querySelectorAll('.custom-select'));

for (var _i = 0, _$customSelects = $customSelects; _i < _$customSelects.length; _i++) {
  var $customSelect = _$customSelects[_i];
  new _components_CustomSelect__WEBPACK_IMPORTED_MODULE_0__["default"]($customSelect);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIkN1c3RvbVNlbGVjdCIsIiRjdXN0b21TZWxlY3QiLCIkIiwiY3VzdG9tU2VsZWN0IiwiX2luaXRQYXJhbXMiLCJfaW5pdGlhbGl6ZSIsImlzRmlsdGVycyIsImRhdGFzZXQiLCJmaWx0ZXJzIiwiaXNPbk1vYmlsZSIsIm1vYmlsZSIsInZpcnR1YWxMYWJlbCIsImxhYmVsIiwiaXRlbXMiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIiRzZWxlY3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwiJG9wdGlvbiIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiaXRlbSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwiJGNvbnRlbnQiLCIkaXRlbSIsImNob29zZSIsIiRjb250YWluZXIiLCJpbnB1dCIsInN0eWxlIiwiZGlzcGxheSIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaWx0ZXIiLCJfZXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiX2NoYW5nZVZhbHVlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNvbnRhaW5zIiwidGFyZ2V0IiwicmVtb3ZlIiwiJGN1c3RvbVNlbGVjdHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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TCxDQUFPd0MsTUFBUCxDQUFjZCxLQUFkLEdBQXNCSyxLQUFLLENBQUMxQixPQUFOLENBQWNLLEtBQXBDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS1YsQ0FBTCxDQUFPZ0MsTUFBUCxDQUFjVCxTQUFkLEdBQTBCUSxLQUFLLENBQUMxQixPQUFOLENBQWNLLEtBQXhDO0FBQ0Q7O0FBRUQsV0FBS1YsQ0FBTCxDQUFPa0MsS0FBUCxDQUFhUixLQUFiLEdBQXFCSyxLQUFLLENBQUMxQixPQUFOLENBQWNxQixLQUFuQztBQUNBLFdBQUtqQixZQUFMLEdBQW9Cc0IsS0FBSyxDQUFDMUIsT0FBTixDQUFjSyxLQUFsQztBQUNBLFdBQUtWLENBQUwsQ0FBT0MsWUFBUCxDQUFvQjJCLFNBQXBCLENBQThCdUIsTUFBOUIsQ0FBcUMscUJBQXJDO0FBQ0Q7Ozs7OztBQUdZckQsMkVBQWY7QUFFQSxJQUFNc0QsY0FBYyxHQUFHZixLQUFLLENBQUNDLElBQU4sQ0FBV3BCLFFBQVEsQ0FBQ3FCLGdCQUFULENBQTBCLGdCQUExQixDQUFYLENBQXZCOztBQUNBLG1DQUE0QmEsY0FBNUIscUNBQTRDO0FBQXZDLE1BQU1yRCxhQUFhLHNCQUFuQjtBQUNILE1BQUlELFlBQUosQ0FBaUJDLGFBQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDckxEO0FBQUE7QUFBQTtBQUVBLElBQU1xRCxjQUFjLEdBQUdmLEtBQUssQ0FBQ0MsSUFBTixDQUFXcEIsUUFBUSxDQUFDcUIsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQVgsQ0FBdkI7O0FBQ0EsbUNBQTRCYSxjQUE1QixxQ0FBNEM7QUFBdkMsTUFBTXJELGFBQWEsc0JBQW5CO0FBQ0gsTUFBSUQsZ0VBQUosQ0FBaUJDLGFBQWpCO0FBQ0QsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvbWFpbi5qc1wiKTtcbiIsIi8qKioqKioqKioqXG4gKiBDdXN0b21TZWxlY3RcbiAqIE1hZGUgYnkgTG9yaXMgTWFyaW5vIDxsb3Jpcy5tcm9AZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL0xvcmlzTWFyaW5vXG4gKiBodHRwczovL2xvcmlzbWFyaW5vLmZyXG4gKi9cblxuY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbVNlbGVjdCkge1xuICAgIHRoaXMuJCA9IHt9IC8vIEluaXRpYWxpemUgb2JqZWN0IG9mIERPTSBlbGVtZW50cy5cbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0ID0gJGN1c3RvbVNlbGVjdCAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzRmlsdGVycyA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5maWx0ZXJzIC8vIFNldCBmaWx0ZXJzIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLmlzT25Nb2JpbGUgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubW9iaWxlIC8vIFNldCBjdXN0b20gbW9iaWxlIGlzIGFjdGl2YXRlZC5cbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9IHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5sYWJlbCAvLyBTZXQgYWN0aXZhdGVkIGxhYmVsLlxuICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKHRoaXMuJC5jdXN0b21TZWxlY3QuZGF0YXNldC5pdGVtcykgLy8gQ3JlYXRlIEpTT04gb2JqZWN0IHdpdGggaXRlbXMuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnQuXG4gICAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTkxcHgpJykubWF0Y2hlcykge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICAgIGNvbnN0ICRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgJHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubmFtZSlcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IHNlbGVjdCBvcHRpb24uXG4gICAgICBjb25zdCAkb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICRvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKVxuICAgICAgJG9wdGlvbi5pbm5lclRleHQgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWxcbiAgICAgICRzZWxlY3QuYXBwZW5kQ2hpbGQoJG9wdGlvbilcblxuICAgICAgLy8gQ3JlYXRlIHNlbGVjdCBvcHRpb25zLlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgY29uc3QgJG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgICRvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGl0ZW0udmFsdWUpXG4gICAgICAgICRvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbFxuICAgICAgICAkc2VsZWN0LmFwcGVuZENoaWxkKCRvcHRpb24pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJHNlbGVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKVxuICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3QtLWZpbHRlcnMnKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgd2l0aCBlbGVtZW50cy5cbiAgICAgIGNvbnN0ICRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1zZWxlY3RfX2NvbnRlbnQnKVxuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICBjb25zdCAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICRpdGVtLmRhdGFzZXQubGFiZWwgPSBpdGVtLmxhYmVsXG4gICAgICAgICRpdGVtLmRhdGFzZXQudmFsdWUgPSBpdGVtLnZhbHVlXG4gICAgICAgICRpdGVtLmlubmVyVGV4dCA9IGl0ZW0ubGFiZWxcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXNlbGVjdF9faXRlbScpXG4gICAgICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRpdGVtKVxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbi5cbiAgICAgIHRoaXMuJC5jaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy4kLmNob29zZS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jaG9vc2UnKVxuICAgICAgaWYgKCF0aGlzLmlzRmlsdGVycylcbiAgICAgICAgdGhpcy4kLmNob29zZS5pbm5lckhUTUwgPSB0aGlzLiQuY3VzdG9tU2VsZWN0LmRhdGFzZXQubGFiZWxcblxuICAgICAgLy8gQ3JlYXRlIHdyYXBwaW5nIGNvbnRhaW5lciBmb3IgY29udGVudC5cbiAgICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgJGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0X19jb250YWluZXInKVxuICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGVudClcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy4kLmNob29zZSlcbiAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIGlucHV0IGZvciBzZWxlY3QgdmFsdWUuXG4gICAgICB0aGlzLiQuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0Lm5hbWUpXG4gICAgICB0aGlzLiQuaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLiQuaW5wdXQpXG5cbiAgICAgIHRoaXMuJC5pdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICAgIHRoaXMuJC5jdXN0b21TZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3RfX2l0ZW0nKVxuICAgICAgKSAvLyBHZXQgYWxsIGl0ZW1zIGluIGFycmF5LlxuXG4gICAgICAvLyBDcmVhdGUgdGhlIGZpbHRlciBpbnB1dC5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy4kLmN1c3RvbVNlbGVjdC5kYXRhc2V0LmxhYmVsXG4gICAgICAgIHRoaXMuJC5jaG9vc2UuYXBwZW5kQ2hpbGQodGhpcy4kLmZpbHRlcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNPbk1vYmlsZSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykgfHxcbiAgICAgIHRoaXMuaXNPbk1vYmlsZVxuICAgICkge1xuICAgICAgdGhpcy4kLmNob29zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy4kLmN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tc2VsZWN0LS1vcGVuJylcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCAkaXRlbSBvZiB0aGlzLiQuaXRlbXMpIHtcbiAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlVmFsdWUoJGl0ZW0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVycykge1xuICAgICAgICB0aGlzLiQuZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAnJ1xuICAgICAgICAgIHRoaXMuJC5maWx0ZXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRoaXMudmlydHVhbExhYmVsKVxuICAgICAgICAgIGZvciAoY29uc3QgJGl0ZW0gb2YgdGhpcy4kLml0ZW1zKSB7XG4gICAgICAgICAgICAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kLmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0ICRpdGVtIG9mIHRoaXMuJC5pdGVtcykge1xuICAgICAgICAgICAgaWYgKCRpdGVtLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuJC5maWx0ZXIudmFsdWUpKVxuICAgICAgICAgICAgICAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgZWxzZSAkaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLiQuY3VzdG9tU2VsZWN0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuXG4gICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kLmZpbHRlci52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgdGhpcy4kLmlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgICAgdGhpcy4kLmZpbHRlci52YWx1ZSA9IHRoaXMudmlydHVhbExhYmVsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLiQuZmlsdGVyLnZhbHVlID0gdGhpcy52aXJ0dWFsTGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH0pXG4gIH1cblxuICBfY2hhbmdlVmFsdWUoJGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlcnMpIHtcbiAgICAgIHRoaXMuJC5maWx0ZXIudmFsdWUgPSAkaXRlbS5kYXRhc2V0LmxhYmVsXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jaG9vc2UuaW5uZXJUZXh0ID0gJGl0ZW0uZGF0YXNldC5sYWJlbFxuICAgIH1cblxuICAgIHRoaXMuJC5pbnB1dC52YWx1ZSA9ICRpdGVtLmRhdGFzZXQudmFsdWVcbiAgICB0aGlzLnZpcnR1YWxMYWJlbCA9ICRpdGVtLmRhdGFzZXQubGFiZWxcbiAgICB0aGlzLiQuY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1zZWxlY3QtLW9wZW4nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdFxuXG5jb25zdCAkY3VzdG9tU2VsZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1zZWxlY3QnKSlcbmZvciAoY29uc3QgJGN1c3RvbVNlbGVjdCBvZiAkY3VzdG9tU2VsZWN0cykge1xuICBuZXcgQ3VzdG9tU2VsZWN0KCRjdXN0b21TZWxlY3QpXG59XG4iLCJpbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9DdXN0b21TZWxlY3QnXG5cbmNvbnN0ICRjdXN0b21TZWxlY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXNlbGVjdCcpKVxuZm9yIChjb25zdCAkY3VzdG9tU2VsZWN0IG9mICRjdXN0b21TZWxlY3RzKSB7XG4gIG5ldyBDdXN0b21TZWxlY3QoJGN1c3RvbVNlbGVjdClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=