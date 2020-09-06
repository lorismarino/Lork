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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/CustomFile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/CustomFile.js":
/*!*****************************************!*\
  !*** ./src/js/components/CustomFile.js ***!
  \*****************************************/
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
var $customFiles = Array.from(document.querySelectorAll('.custom-file'));

for (var _i = 0, _$customFiles = $customFiles; _i < _$customFiles.length; _i++) {
  var $customFile = _$customFiles[_i];
  new CustomFile($customFile);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQ3VzdG9tRmlsZS5qcyJdLCJuYW1lcyI6WyJDdXN0b21GaWxlIiwiJGN1c3RvbUZpbGUiLCIkIiwiY3VzdG9tRmlsZSIsIl9pbml0UGFyYW1zIiwiX2luaXRpYWxpemUiLCJpc0J1dHRvbiIsImRhdGFzZXQiLCJidXR0b24iLCJpc0J1dHRvblBvc2l0aW9uIiwiYnV0dG9ucG9zIiwiaXNTaXplIiwic2l6ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImlubmVySFRNTCIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwibGFiZWwiLCJpbnB1dCIsIm5hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJfZXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiYnl0ZXMiLCJzaXplcyIsImkiLCJwYXJzZUludCIsIk1hdGgiLCJmbG9vciIsImNvbnZlcnQiLCJyb3VuZCIsInBvdyIsIiRjdXN0b21GaWxlcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LENBQUQsQ0FBbEI7QUFDQSxZQUFNVSxPQUFPLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXUCxLQUFLLEdBQUdJLElBQUksQ0FBQ0ksR0FBTCxDQUFTLElBQVQsRUFBZU4sQ0FBZixDQUFuQixFQUFzQyxDQUF0QyxDQUFoQjtBQUNBLGFBQUksQ0FBQ3BDLENBQUwsQ0FBT1UsSUFBUCxDQUFZTSxTQUFaLGFBQTJCd0IsT0FBM0IsY0FBc0NMLEtBQUssQ0FBQ0MsQ0FBRCxDQUEzQztBQUNELE9BVEQ7QUFVRDs7Ozs7O0FBR1l0Qyx5RUFBZjtBQUVBLElBQU02QyxZQUFZLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXbEMsUUFBUSxDQUFDbUMsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBWCxDQUFyQjs7QUFDQSxpQ0FBMEJILFlBQTFCLG1DQUF3QztBQUFuQyxNQUFNNUMsV0FBVyxvQkFBakI7QUFDSCxNQUFJRCxVQUFKLENBQWVDLFdBQWY7QUFDRCxDIiwiZmlsZSI6IkN1c3RvbUZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9jb21wb25lbnRzL0N1c3RvbUZpbGUuanNcIik7XG4iLCIvKioqKioqKioqKlxuICogQ3VzdG9tRmlsZVxuICogTWFkZSBieSBMb3JpcyBNYXJpbm8gPGxvcmlzLm1yb0BnbWFpbC5jb20+XG4gKiBodHRwczovL2dpdGh1Yi5jb20vTG9yaXNNYXJpbm9cbiAqIGh0dHBzOi8vbG9yaXNtYXJpbm8uZnJcbiAqL1xuXG5jbGFzcyBDdXN0b21GaWxlIHtcbiAgY29uc3RydWN0b3IoJGN1c3RvbUZpbGUpIHtcbiAgICB0aGlzLiQgPSB7fSAvLyBJbml0aWFsaXplIG9iamVjdCBvZiBET00gZWxlbWVudHMuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUgPSAkY3VzdG9tRmlsZSAvLyBBZGQgY3VzdG9tLXNlbGVjdCBpbiBET00gb2JqZWN0cy5cblxuICAgIHRoaXMuX2luaXRQYXJhbXMoKVxuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGFyYW1zXG4gICAqL1xuICBfaW5pdFBhcmFtcygpIHtcbiAgICB0aGlzLmlzQnV0dG9uID0gdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5idXR0b25cbiAgICB0aGlzLmlzQnV0dG9uUG9zaXRpb24gPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgPyB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmJ1dHRvbnBvc1xuICAgICAgOiAncmlnaHQnXG4gICAgdGhpcy5pc1NpemUgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LnNpemVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudC5cbiAgICovXG4gIF9pbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnV0dG9uKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHRoaXMuJC5idXR0b24uY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWZpbGVfX2J1dHRvbicpXG4gICAgICB0aGlzLiQuYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgdGhpcy4kLmJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmlzQnV0dG9uXG4gICAgfVxuXG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuaW5uZXJIVE1MID0gJydcblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19jb250YWluZXInKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQnV0dG9uICYmIHRoaXMuaXNCdXR0b25Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBsYWJlbFxuICAgIHRoaXMuJC5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSB0aGlzLiQuY3VzdG9tRmlsZS5kYXRhc2V0LmxhYmVsXG4gICAgdGhpcy4kLmxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19sYWJlbCcpXG4gICAgdGhpcy5pc1NpemVcbiAgICAgID8gdGhpcy4kLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiQubGFiZWwpXG4gICAgICA6IHRoaXMuJC5jdXN0b21GaWxlLmFwcGVuZENoaWxkKHRoaXMuJC5sYWJlbClcblxuICAgIC8vIENyZWF0ZSBpbnB1dFxuICAgIHRoaXMuJC5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLiQuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy4kLmN1c3RvbUZpbGUuZGF0YXNldC5uYW1lKVxuICAgIHRoaXMuJC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpXG4gICAgdGhpcy4kLmlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLmlzU2l6ZVxuICAgICAgPyB0aGlzLiQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJC5pbnB1dClcbiAgICAgIDogdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmlucHV0KVxuXG4gICAgaWYgKHRoaXMuaXNCdXR0b24gJiYgdGhpcy5pc0J1dHRvblBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLmlzU2l6ZVxuICAgICAgICA/IHRoaXMuJC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kLmJ1dHRvbilcbiAgICAgICAgOiB0aGlzLiQuY3VzdG9tRmlsZS5hcHBlbmRDaGlsZCh0aGlzLiQuYnV0dG9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2l6ZSkge1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLmNvbnRhaW5lcilcblxuICAgICAgLy8gQ3JlYXRlIHNpemUgaW5mb1xuICAgICAgdGhpcy4kLnNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHRoaXMuJC5zaXplLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1maWxlX19zaXplJylcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9ICcwIG1iJ1xuICAgICAgdGhpcy4kLmN1c3RvbUZpbGUuYXBwZW5kQ2hpbGQodGhpcy4kLnNpemUpXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKClcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kLmN1c3RvbUZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiQuaW5wdXQuY2xpY2soKVxuICAgIH0pXG5cbiAgICB0aGlzLiQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3RlJylcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgIHRoaXMuJC5sYWJlbC5pbm5lclRleHQgPSBmaWxlLm5hbWVcbiAgICAgIGNvbnN0IGJ5dGVzID0gZmlsZS5zaXplXG4gICAgICBjb25zdCBzaXplcyA9IFsnYnl0ZXMnLCAna2InLCAnbWInLCAnZ2InLCAndGInXVxuICAgICAgY29uc3QgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKVxuICAgICAgY29uc3QgY29udmVydCA9IE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMilcbiAgICAgIHRoaXMuJC5zaXplLmlubmVyVGV4dCA9IGAke2NvbnZlcnR9ICR7c2l6ZXNbaV19YFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRmlsZVxuXG5jb25zdCAkY3VzdG9tRmlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZmlsZScpKVxuZm9yIChjb25zdCAkY3VzdG9tRmlsZSBvZiAkY3VzdG9tRmlsZXMpIHtcbiAgbmV3IEN1c3RvbUZpbGUoJGN1c3RvbUZpbGUpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9