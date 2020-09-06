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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/CustomRange.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/CustomRange.js":
/*!******************************************!*\
  !*** ./src/js/components/CustomRange.js ***!
  \******************************************/
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
var $customRanges = Array.from(document.querySelectorAll('.custom-range'));

for (var _i = 0, _$customRanges = $customRanges; _i < _$customRanges.length; _i++) {
  var $customRange = _$customRanges[_i];
  new CustomRange($customRange);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQ3VzdG9tUmFuZ2UuanMiXSwibmFtZXMiOlsiQ3VzdG9tUmFuZ2UiLCIkY3VzdG9tUmFuZ2UiLCIkIiwiY3VzdG9tUmFuZ2UiLCJfaW5pdFBhcmFtcyIsIl9pbml0aWFsaXplIiwiY3Vyc29yUHJlc3MiLCJ0b3RhbCIsImRhdGFzZXQiLCJzdGVwIiwidHJhbnNmb3JtQ3Vyc29yIiwiYWN0dWFsU3RlcCIsImlucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibmFtZSIsInN0eWxlIiwiZGlzcGxheSIsImJhY2tncm91bmRCYXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJwbGFpbkJhciIsImN1cnNvciIsImFwcGVuZENoaWxkIiwidHJhbnNmb3JtIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm51bWJlclN0ZXBzIiwicmF0aW8iLCJfZXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYWN0dWFsUG9zaXRpb24iLCJjbGllbnRYIiwiZXYiLCJjbGlja1N0ZXAiLCIkY3VzdG9tUmFuZ2VzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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aGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2NvbXBvbmVudHMvQ3VzdG9tUmFuZ2UuanNcIik7XG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tUmFuZ2VcbiAqIE1hZGUgYnkgTG9yaXMgTWFyaW5vIDxsb3Jpcy5tcm9AZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL0xvcmlzTWFyaW5vXG4gKiBodHRwczovL2xvcmlzbWFyaW5vLmZyXG4gKi9cblxuY2xhc3MgQ3VzdG9tUmFuZ2Uge1xuICBjb25zdHJ1Y3RvcigkY3VzdG9tUmFuZ2UpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlID0gJGN1c3RvbVJhbmdlIC8vIEFkZCBjdXN0b21SYW5nZSBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmN1cnNvclByZXNzID0gZmFsc2VcbiAgICB0aGlzLnRvdGFsID0gdGhpcy4kLmN1c3RvbVJhbmdlLmRhdGFzZXQudG90YWxcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC5zdGVwXG4gICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPSAwXG4gICAgdGhpcy5hY3R1YWxTdGVwID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50LlxuICAgKi9cbiAgX2luaXRpYWxpemUoKSB7XG4gICAgLy8gQ3JlYXRlIGlucHV0XG4gICAgdGhpcy4kLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLiQuY3VzdG9tUmFuZ2UuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAvLyBDcmVhdGUgYmFja2dyb3VuZCBiYXIuXG4gICAgdGhpcy4kLmJhY2tncm91bmRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuJC5iYWNrZ3JvdW5kQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyJylcbiAgICB0aGlzLiQuYmFja2dyb3VuZEJhci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2Jhci0tYmFja2dyb3VuZCcpXG5cbiAgICAvLyBDcmVhdGUgcGxhaW4gYmFyLlxuICAgIHRoaXMuJC5wbGFpbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLnBsYWluQmFyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1yYW5nZV9fYmFyJylcbiAgICB0aGlzLiQucGxhaW5CYXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXJhbmdlX19iYXItLXBsYWluJylcblxuICAgIC8vIENyZWF0ZSBjdXNyb3IuXG4gICAgdGhpcy4kLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy4kLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdjdXN0b20tcmFuZ2VfX2N1cnNvcicpXG5cbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmJhY2tncm91bmRCYXIpXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFwcGVuZENoaWxkKHRoaXMuJC5wbGFpbkJhcilcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmN1cnNvcilcbiAgICB0aGlzLiQuY3VzdG9tUmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtNTAlKWBcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLiQuY3VzdG9tUmFuZ2Uub2Zmc2V0V2lkdGhcbiAgICB0aGlzLm51bWJlclN0ZXBzID0gdGhpcy50b3RhbCAvIHRoaXMuc3RlcCAvLyBub21icmUgZGUgZm9pcyBwb3VyIGFycml2ZXIgYSB0b3RhbFxuICAgIHRoaXMucmF0aW8gPSB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJTdGVwcyAvLyBwaXhlbCBkZSBsYXJnZXVyIHBvdXIgMSUgZHUgdG90YWxcbiAgICB0aGlzLl9ldmVudHMoKVxuICB9XG5cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiQuY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuY3Vyc29yUHJlc3MgPSB0cnVlXG4gICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXYgPT4ge1xuICAgICAgdGhpcy5jdXJzb3JQcmVzcyA9IGZhbHNlXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmN1cnNvclByZXNzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudC5jbGllbnRYID4gdGhpcy5hY3R1YWxQb3NpdGlvbiAmJlxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPj0gKHRoaXMuYWN0dWFsU3RlcCArIDEpICogdGhpcy5yYXRpbyAmJlxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcCA8IHRoaXMubnVtYmVyU3RlcHNcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPVxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCArIDEpICogdGhpcy5yYXRpbyAtIHRoaXMuJC5jdXJzb3Iub2Zmc2V0V2lkdGggLyAyXG4gICAgICAgICAgdGhpcy4kLmN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMudHJhbnNmb3JtQ3Vyc29yfXB4KWBcbiAgICAgICAgICB0aGlzLiQucGxhaW5CYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgkeygxIC8gdGhpcy5udW1iZXJTdGVwcykgKlxuICAgICAgICAgICAgKHRoaXMuYWN0dWFsU3RlcCArIDEpfSlgXG4gICAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IGV2ZW50LmNsaWVudFhcbiAgICAgICAgICB0aGlzLmFjdHVhbFN0ZXArK1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPCB0aGlzLmFjdHVhbFBvc2l0aW9uICYmXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSAodGhpcy5hY3R1YWxTdGVwIC0gMSkgKiB0aGlzLnJhdGlvICYmXG4gICAgICAgICAgdGhpcy5hY3R1YWxTdGVwID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnRyYW5zZm9ybUN1cnNvciA9XG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwIC0gMSkgKiB0aGlzLnJhdGlvIC0gdGhpcy4kLmN1cnNvci5vZmZzZXRXaWR0aCAvIDJcbiAgICAgICAgICB0aGlzLiQuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy50cmFuc2Zvcm1DdXJzb3J9cHgpYFxuICAgICAgICAgIHRoaXMuJC5wbGFpbkJhci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7KDEgLyB0aGlzLm51bWJlclN0ZXBzKSAqXG4gICAgICAgICAgICAodGhpcy5hY3R1YWxTdGVwIC0gMSl9KWBcbiAgICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gZXZlbnQuY2xpZW50WFxuICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcC0tXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy4kLmN1c3RvbVJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgbGV0IGNsaWNrU3RlcCA9IDBcbiAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDw9IHRoaXMubnVtYmVyU3RlcHM7IHN0ZXArKykge1xuICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA+IHN0ZXAgKiB0aGlzLnJhdGlvIC0gMjApIGNsaWNrU3RlcCA9IHN0ZXBcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmFuc2Zvcm1DdXJzb3IgPVxuICAgICAgICBjbGlja1N0ZXAgKiB0aGlzLnJhdGlvIC0gdGhpcy4kLmN1cnNvci5vZmZzZXRXaWR0aCAvIDJcbiAgICAgIHRoaXMuJC5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnRyYW5zZm9ybUN1cnNvcn1weClgXG4gICAgICB0aGlzLiQucGxhaW5CYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgkeygxIC8gdGhpcy5udW1iZXJTdGVwcykgKlxuICAgICAgICBjbGlja1N0ZXB9KWBcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJhbmdlXG5cbmNvbnN0ICRjdXN0b21SYW5nZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFuZ2UnKSlcbmZvciAoY29uc3QgJGN1c3RvbVJhbmdlIG9mICRjdXN0b21SYW5nZXMpIHtcbiAgbmV3IEN1c3RvbVJhbmdlKCRjdXN0b21SYW5nZSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=