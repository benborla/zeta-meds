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
/******/ 	__webpack_require__.p = "/zetameds-theme/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./themes/ZetaMeds/assets/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(nextUniqueId());
  var clipId = "clip-".concat(nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.11.1\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fad', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    var headers = {};

    if (_typeof(WINDOW.FontAwesomeKitConfig) === 'object' && typeof window.FontAwesomeKitConfig.token === 'string') {
      headers['fa-kit-token'] = WINDOW.FontAwesomeKitConfig.token;
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        title: title,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily) {
      var content = styles.getPropertyValue('content');
      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/faCcMastercard.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faCcMastercard.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'cc-mastercard';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f1f1';
var svgPathData = 'M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCcMastercard = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/faCcPaypal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faCcPaypal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'cc-paypal';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f1f4';
var svgPathData = 'M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCcPaypal = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/faCcVisa.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faCcVisa.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'cc-visa';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f1f0';
var svgPathData = 'M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCcVisa = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'check';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f00c';
var svgPathData = 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCheck = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faChevronUp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faChevronUp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'chevron-up';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f077';
var svgPathData = 'M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faChevronUp = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCreditCard.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCreditCard.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'credit-card';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f09d';
var svgPathData = 'M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCreditCard = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamationCircle.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faExclamationCircle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'exclamation-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f06a';
var svgPathData = 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faExclamationCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faFlag.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faFlag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'flag';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f024';
var svgPathData = 'M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faFlag = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faInfoCircle.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faInfoCircle.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'info-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f05a';
var svgPathData = 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faInfoCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faMapMarkerAlt.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faMapMarkerAlt.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'map-marker-alt';
var width = 384;
var height = 512;
var ligatures = [];
var unicode = 'f3c5';
var svgPathData = 'M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faMapMarkerAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faPencilAlt.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faPencilAlt.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'pencil-alt';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f303';
var svgPathData = 'M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faPencilAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faPlus.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faPlus.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'plus';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f067';
var svgPathData = 'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faPlus = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'search';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f002';
var svgPathData = 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSearch = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faShoppingBag.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faShoppingBag.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'shopping-bag';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f290';
var svgPathData = 'M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faShoppingBag = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faShuttleVan.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faShuttleVan.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'shuttle-van';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f5b6';
var svgPathData = 'M628.88 210.65L494.39 49.27A48.01 48.01 0 0 0 457.52 32H32C14.33 32 0 46.33 0 64v288c0 17.67 14.33 32 32 32h32c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h32c17.67 0 32-14.33 32-32V241.38c0-11.23-3.94-22.1-11.12-30.73zM64 192V96h96v96H64zm96 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm160-240h-96V96h96v96zm160 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm-96-240V96h66.02l80 96H384z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faShuttleVan = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faStar.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faStar.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'star';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f005';
var svgPathData = 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faStar = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSyncAlt.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faSyncAlt.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'sync-alt';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f2f1';
var svgPathData = 'M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSyncAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'times';
var width = 352;
var height = 512;
var ligatures = [];
var unicode = 'f00d';
var svgPathData = 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTimes = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/bootstrap.native/dist/bootstrap-native-v4.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap.native/dist/bootstrap-native-v4.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Native Javascript for Bootstrap 4 v2.0.27 | © dnp_theme | MIT-License
(function (root, factory) {
  if (true) {
    // AMD support:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var bsn; }
}(this, function () {
  
  /* Native Javascript for Bootstrap 4 | Internal Utility Functions
  ----------------------------------------------------------------*/
  "use strict";
  
  // globals
  var globalObject = typeof global !== 'undefined' ? global : this||window,
    DOC = document, HTML = DOC.documentElement, body = 'body', // allow the library to be used in <head>
  
    // Native Javascript for Bootstrap Global Object
    BSN = globalObject.BSN = {},
    supports = BSN.supports = [],
  
    // function toggle attributes
    dataToggle    = 'data-toggle',
    dataDismiss   = 'data-dismiss',
    dataSpy       = 'data-spy',
    dataRide      = 'data-ride',
  
    // components
    stringAlert     = 'Alert',
    stringButton    = 'Button',
    stringCarousel  = 'Carousel',
    stringCollapse  = 'Collapse',
    stringDropdown  = 'Dropdown',
    stringModal     = 'Modal',
    stringPopover   = 'Popover',
    stringScrollSpy = 'ScrollSpy',
    stringTab       = 'Tab',
    stringTooltip   = 'Tooltip',
    stringToast     = 'Toast',
  
    // options DATA API
    dataAutohide      = 'data-autohide',
    databackdrop      = 'data-backdrop',
    dataKeyboard      = 'data-keyboard',
    dataTarget        = 'data-target',
    dataInterval      = 'data-interval',
    dataHeight        = 'data-height',
    dataPause         = 'data-pause',
    dataTitle         = 'data-title',
    dataOriginalTitle = 'data-original-title',
    dataDismissible   = 'data-dismissible',
    dataTrigger       = 'data-trigger',
    dataAnimation     = 'data-animation',
    dataContainer     = 'data-container',
    dataPlacement     = 'data-placement',
    dataDelay         = 'data-delay',
  
    // option keys
    backdrop = 'backdrop', keyboard = 'keyboard', delay = 'delay',
    content = 'content', target = 'target', currentTarget = 'currentTarget',
    interval = 'interval', pause = 'pause', animation = 'animation',
    placement = 'placement', container = 'container',
  
    // box model
    offsetTop    = 'offsetTop',      offsetBottom   = 'offsetBottom',
    offsetLeft   = 'offsetLeft',
    scrollTop    = 'scrollTop',      scrollLeft     = 'scrollLeft',
    clientWidth  = 'clientWidth',    clientHeight   = 'clientHeight',
    offsetWidth  = 'offsetWidth',    offsetHeight   = 'offsetHeight',
    innerWidth   = 'innerWidth',     innerHeight    = 'innerHeight',
    scrollHeight = 'scrollHeight',   scrollWidth    = 'scrollWidth',
    height         = 'height',
  
    // aria
    ariaExpanded = 'aria-expanded',
    ariaHidden   = 'aria-hidden',
    ariaSelected = 'aria-selected',
  
    // event names
    clickEvent    = 'click',
    focusEvent    = 'focus',
    hoverEvent    = 'hover',
    keydownEvent  = 'keydown',
    keyupEvent    = 'keyup',
    resizeEvent   = 'resize', // passive
    scrollEvent   = 'scroll', // passive
    mouseHover = ('onmouseleave' in DOC) ? [ 'mouseenter', 'mouseleave'] : [ 'mouseover', 'mouseout' ],
    // touch since 2.0.26
    touchEvents = { start: 'touchstart', end: 'touchend', move:'touchmove' }, // passive
    // originalEvents
    showEvent     = 'show',
    shownEvent    = 'shown',
    hideEvent     = 'hide',
    hiddenEvent   = 'hidden',
    closeEvent    = 'close',
    closedEvent   = 'closed',
    slidEvent     = 'slid',
    slideEvent    = 'slide',
    changeEvent   = 'change',
  
    // other
    getAttribute           = 'getAttribute',
    setAttribute           = 'setAttribute',
    hasAttribute           = 'hasAttribute',
    createElement          = 'createElement',
    appendChild            = 'appendChild',
    innerHTML              = 'innerHTML',
    getElementsByTagName   = 'getElementsByTagName',
    preventDefault         = 'preventDefault',
    getBoundingClientRect  = 'getBoundingClientRect',
    querySelectorAll       = 'querySelectorAll',
    getElementsByCLASSNAME = 'getElementsByClassName',
    getComputedStyle       = 'getComputedStyle',  
  
    indexOf      = 'indexOf',
    parentNode   = 'parentNode',
    length       = 'length',
    toLowerCase  = 'toLowerCase',
    Transition   = 'Transition',
    Duration     = 'Duration',
    Webkit       = 'Webkit',
    style        = 'style',
    push         = 'push',
    tabindex     = 'tabindex',
    contains     = 'contains',
  
    active     = 'active',
    showClass  = 'show',
    collapsing = 'collapsing',
    disabled   = 'disabled',
    loading    = 'loading',
    left       = 'left',
    right      = 'right',
    top        = 'top',
    bottom     = 'bottom',
  
    // tooltip / popover
    tipPositions = /\b(top|bottom|left|right)+/,
  
    // modal
    modalOverlay = 0,
    fixedTop = 'fixed-top',
    fixedBottom = 'fixed-bottom',
  
    // transitionEnd since 2.0.4
    supportTransitions = Webkit+Transition in HTML[style] || Transition[toLowerCase]() in HTML[style],
    transitionEndEvent = Webkit+Transition in HTML[style] ? Webkit[toLowerCase]()+Transition+'End' : Transition[toLowerCase]()+'end',
    transitionDuration = Webkit+Duration in HTML[style] ? Webkit[toLowerCase]()+Transition+Duration : Transition[toLowerCase]()+Duration,
  
    // set new focus element since 2.0.3
    setFocus = function(element){
      element.focus ? element.focus() : element.setActive();
    },
  
    // class manipulation, since 2.0.0 requires polyfill.js
    addClass = function(element,classNAME) {
      element.classList.add(classNAME);
    },
    removeClass = function(element,classNAME) {
      element.classList.remove(classNAME);
    },
    hasClass = function(element,classNAME){ // since 2.0.0
      return element.classList[contains](classNAME);
    },
  
    // selection methods
    getElementsByClassName = function(element,classNAME) { // returns Array
      return [].slice.call(element[getElementsByCLASSNAME]( classNAME ));
    },
    queryElement = function (selector, parent) {
      var lookUp = parent ? parent : DOC;
      return typeof selector === 'object' ? selector : lookUp.querySelector(selector);
    },
    getClosest = function (element, selector) { //element is the element and selector is for the closest parent element to find
      // source http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
      var firstChar = selector.charAt(0), selectorSubstring = selector.substr(1);
      if ( firstChar === '.' ) {// If selector is a class
        for ( ; element && element !== DOC; element = element[parentNode] ) { // Get closest match
          if ( queryElement(selector,element[parentNode]) !== null && hasClass(element,selectorSubstring) ) { return element; }
        }
      } else if ( firstChar === '#' ) { // If selector is an ID
        for ( ; element && element !== DOC; element = element[parentNode] ) { // Get closest match
          if ( element.id === selectorSubstring ) { return element; }
        }
      }
      return false;
    },
  
    // event attach jQuery style / trigger  since 1.2.0
    on = function (element, event, handler, options) {
      options = options || false;
      element.addEventListener(event, handler, options);
    },
    off = function(element, event, handler, options) {
      options = options || false;
      element.removeEventListener(event, handler, options);
    },
    one = function (element, event, handler, options) { // one since 2.0.4
      on(element, event, function handlerWrapper(e){
        handler(e);
        off(element, event, handlerWrapper, options);
      }, options);
    },
    // determine support for passive events
    supportPassive = (function(){
      // Test via a getter in the options object to see if the passive property is accessed
      var result = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function() {
            result = true;
          }
        });
        one(globalObject, 'testPassive', null, opts);
      } catch (e) {}
  
      return result;
    }()),
    // event options
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    passiveHandler = supportPassive ? { passive: true } : false,
    // transitions
    getTransitionDurationFromElement = function(element) {
      var duration = supportTransitions ? globalObject[getComputedStyle](element)[transitionDuration] : 0;
      duration = parseFloat(duration);
      duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
      return duration; // we take a short offset to make sure we fire on the next frame after animation
    },
    emulateTransitionEnd = function(element,handler){ // emulateTransitionEnd since 2.0.4
      var called = 0, duration = getTransitionDurationFromElement(element);
      duration ? one(element, transitionEndEvent, function(e){ !called && handler(e), called = 1; })
               : setTimeout(function() { !called && handler(), called = 1; }, 17);
    },
    bootstrapCustomEvent = function (eventName, componentName, related) {
      var OriginalCustomEvent = new CustomEvent( eventName + '.bs.' + componentName);
      OriginalCustomEvent.relatedTarget = related;
      this.dispatchEvent(OriginalCustomEvent);
    },
  
    // tooltip / popover stuff
    getScroll = function() { // also Affix and ScrollSpy uses it
      return {
        y : globalObject.pageYOffset || HTML[scrollTop],
        x : globalObject.pageXOffset || HTML[scrollLeft]
      }
    },
    styleTip = function(link,element,position,parent) { // both popovers and tooltips (target,tooltip,placement,elementToAppendTo)
      var elementDimensions = { w : element[offsetWidth], h: element[offsetHeight] },
          windowWidth = (HTML[clientWidth] || DOC[body][clientWidth]),
          windowHeight = (HTML[clientHeight] || DOC[body][clientHeight]),
          rect = link[getBoundingClientRect](),
          scroll = parent === DOC[body] ? getScroll() : { x: parent[offsetLeft] + parent[scrollLeft], y: parent[offsetTop] + parent[scrollTop] },
          linkDimensions = { w: rect[right] - rect[left], h: rect[bottom] - rect[top] },
          isPopover = hasClass(element,'popover'),
          topPosition, leftPosition,
  
          arrow = queryElement('.arrow',element),
          arrowTop, arrowLeft, arrowWidth, arrowHeight,
  
          halfTopExceed = rect[top] + linkDimensions.h/2 - elementDimensions.h/2 < 0,
          halfLeftExceed = rect[left] + linkDimensions.w/2 - elementDimensions.w/2 < 0,
          halfRightExceed = rect[left] + elementDimensions.w/2 + linkDimensions.w/2 >= windowWidth,
          halfBottomExceed = rect[top] + elementDimensions.h/2 + linkDimensions.h/2 >= windowHeight,
          topExceed = rect[top] - elementDimensions.h < 0,
          leftExceed = rect[left] - elementDimensions.w < 0,
          bottomExceed = rect[top] + elementDimensions.h + linkDimensions.h >= windowHeight,
          rightExceed = rect[left] + elementDimensions.w + linkDimensions.w >= windowWidth;
  
      // recompute position
      position = (position === left || position === right) && leftExceed && rightExceed ? top : position; // first, when both left and right limits are exceeded, we fall back to top|bottom
      position = position === top && topExceed ? bottom : position;
      position = position === bottom && bottomExceed ? top : position;
      position = position === left && leftExceed ? right : position;
      position = position === right && rightExceed ? left : position;
  
      // update tooltip/popover class
      element.className[indexOf](position) === -1 && (element.className = element.className.replace(tipPositions,position));
  
      // we check the computed width & height and update here
      arrowWidth = arrow[offsetWidth]; arrowHeight = arrow[offsetHeight];
  
      // apply styling to tooltip or popover
      if ( position === left || position === right ) { // secondary|side positions
        if ( position === left ) { // LEFT
          leftPosition = rect[left] + scroll.x - elementDimensions.w - ( isPopover ? arrowWidth : 0 );
        } else { // RIGHT
          leftPosition = rect[left] + scroll.x + linkDimensions.w;
        }
  
        // adjust top and arrow
        if (halfTopExceed) {
          topPosition = rect[top] + scroll.y;
          arrowTop = linkDimensions.h/2 - arrowWidth;
        } else if (halfBottomExceed) {
          topPosition = rect[top] + scroll.y - elementDimensions.h + linkDimensions.h;
          arrowTop = elementDimensions.h - linkDimensions.h/2 - arrowWidth;
        } else {
          topPosition = rect[top] + scroll.y - elementDimensions.h/2 + linkDimensions.h/2;
          arrowTop = elementDimensions.h/2 - (isPopover ? arrowHeight*0.9 : arrowHeight/2);
        }
      } else if ( position === top || position === bottom ) { // primary|vertical positions
        if ( position === top) { // TOP
          topPosition =  rect[top] + scroll.y - elementDimensions.h - ( isPopover ? arrowHeight : 0 );
        } else { // BOTTOM
          topPosition = rect[top] + scroll.y + linkDimensions.h;
        }
        // adjust left | right and also the arrow
        if (halfLeftExceed) {
          leftPosition = 0;
          arrowLeft = rect[left] + linkDimensions.w/2 - arrowWidth;
        } else if (halfRightExceed) {
          leftPosition = windowWidth - elementDimensions.w*1.01;
          arrowLeft = elementDimensions.w - ( windowWidth - rect[left] ) + linkDimensions.w/2 - arrowWidth/2;
        } else {
          leftPosition = rect[left] + scroll.x - elementDimensions.w/2 + linkDimensions.w/2;
          arrowLeft = elementDimensions.w/2 - ( isPopover ? arrowWidth : arrowWidth/2 );
        }
      }
  
      // apply style to tooltip/popover and its arrow
      element[style][top] = topPosition + 'px';
      element[style][left] = leftPosition + 'px';
  
      arrowTop && (arrow[style][top] = arrowTop + 'px');
      arrowLeft && (arrow[style][left] = arrowLeft + 'px');
    };
  
  BSN.version = '2.0.27';
  
  /* Native Javascript for Bootstrap 4 | Alert
  -------------------------------------------*/
  
  // ALERT DEFINITION
  // ================
  var Alert = function( element ) {
    
    // initialization element
    element = queryElement(element);
  
    // bind, target alert, duration and stuff
    var self = this, component = 'alert',
      alert = getClosest(element,'.'+component),
      triggerHandler = function(){ hasClass(alert,'fade') ? emulateTransitionEnd(alert,transitionEndHandler) : transitionEndHandler(); },
      // handlers
      clickHandler = function(e){
        alert = getClosest(e[target],'.'+component);
        element = queryElement('['+dataDismiss+'="'+component+'"]',alert);
        element && alert && (element === e[target] || element[contains](e[target])) && self.close();
      },
      transitionEndHandler = function(){
        bootstrapCustomEvent.call(alert, closedEvent, component);
        off(element, clickEvent, clickHandler); // detach it's listener
        alert[parentNode].removeChild(alert);
      };
    
    // public method
    this.close = function() {
      if ( alert && element && hasClass(alert,showClass) ) {
        bootstrapCustomEvent.call(alert, closeEvent, component);
        removeClass(alert,showClass);
        alert && triggerHandler();
      }
    };
  
    // init
    if ( !(stringAlert in element ) ) { // prevent adding event handlers twice
      on(element, clickEvent, clickHandler);
    }
    element[stringAlert] = self;
  };
  
  // ALERT DATA API
  // ==============
  supports[push]([stringAlert, Alert, '['+dataDismiss+'="alert"]']);
  
  
  /* Native Javascript for Bootstrap 4 | Button
  ---------------------------------------------*/
  
  // BUTTON DEFINITION
  // ===================
  var Button = function( element ) {
  
    // initialization element
    element = queryElement(element);
  
    // constant
    var toggled = false, // toggled makes sure to prevent triggering twice the change.bs.button events
  
        // strings
        component = 'button',
        checked = 'checked',
        LABEL = 'LABEL',
        INPUT = 'INPUT',
  
      // private methods
      keyHandler = function(e){ 
        var key = e.which || e.keyCode;
        key === 32 && e[target] === DOC.activeElement && toggle(e);
      },
      preventScroll = function(e){ 
        var key = e.which || e.keyCode;
        key === 32 && e[preventDefault]();
      },
      toggle = function(e) {
        var label = e[target].tagName === LABEL ? e[target] : e[target][parentNode].tagName === LABEL ? e[target][parentNode] : null; // the .btn label
        
        if ( !label ) return; //react if a label or its immediate child is clicked
  
        var labels = getElementsByClassName(label[parentNode],'btn'), // all the button group buttons
          input = label[getElementsByTagName](INPUT)[0];
  
        if ( !input ) return; // return if no input found
  
        // manage the dom manipulation
        if ( input.type === 'checkbox' ) { //checkboxes
          if ( !input[checked] ) {
            addClass(label,active);
            input[getAttribute](checked);
            input[setAttribute](checked,checked);
            input[checked] = true;
          } else {
            removeClass(label,active);
            input[getAttribute](checked);
            input.removeAttribute(checked);
            input[checked] = false;
          }
  
          if (!toggled) { // prevent triggering the event twice
            toggled = true;
            bootstrapCustomEvent.call(input, changeEvent, component); //trigger the change for the input
            bootstrapCustomEvent.call(element, changeEvent, component); //trigger the change for the btn-group
          }
        }
  
        if ( input.type === 'radio' && !toggled ) { // radio buttons
          // don't trigger if already active (the OR condition is a hack to check if the buttons were selected with key press and NOT mouse click)
          if ( !input[checked] || (e.screenX === 0 && e.screenY == 0) ) {
            addClass(label,active);
            addClass(label,focusEvent);
            input[setAttribute](checked,checked);
            input[checked] = true;
            bootstrapCustomEvent.call(input, changeEvent, component); //trigger the change for the input
            bootstrapCustomEvent.call(element, changeEvent, component); //trigger the change for the btn-group
  
            toggled = true;
            for (var i = 0, ll = labels[length]; i<ll; i++) {
              var otherLabel = labels[i], otherInput = otherLabel[getElementsByTagName](INPUT)[0];
              if ( otherLabel !== label && hasClass(otherLabel,active) )  {
                removeClass(otherLabel,active);
                otherInput.removeAttribute(checked);
                otherInput[checked] = false;
                bootstrapCustomEvent.call(otherInput, changeEvent, component); // trigger the change
              }
            }
          }
        }
        setTimeout( function() { toggled = false; }, 50 );
      },
      focusHandler = function(e) {
        addClass(e[target][parentNode],focusEvent);
      },
      blurHandler = function(e) {
        removeClass(e[target][parentNode],focusEvent);
      };
  
    // init
    if ( !( stringButton in element ) ) { // prevent adding event handlers twice
      on( element, clickEvent, toggle );
      on( element, keyupEvent, keyHandler ), on( element, keydownEvent, preventScroll );
  
      var allBtns = getElementsByClassName(element, 'btn');
      for (var i=0; i<allBtns.length; i++) {
        var input = allBtns[i][getElementsByTagName](INPUT)[0];
        on( input, focusEvent, focusHandler), on( input, 'blur', blurHandler);
      }    
    }
  
    // activate items on load
    var labelsToACtivate = getElementsByClassName(element, 'btn'), lbll = labelsToACtivate[length];
    for (var i=0; i<lbll; i++) {
      !hasClass(labelsToACtivate[i],active) && queryElement('input:checked',labelsToACtivate[i]) 
                                            && addClass(labelsToACtivate[i],active);
    }
    element[stringButton] = this;
  };
  
  // BUTTON DATA API
  // =================
  supports[push]( [ stringButton, Button, '['+dataToggle+'="buttons"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Carousel
  ----------------------------------------------*/
  
  // CAROUSEL DEFINITION
  // ===================
  var Carousel = function( element, options ) {
  
    // initialization element
    element = queryElement( element );
  
    // set options
    options = options || {};
  
    // DATA API
    var intervalAttribute = element[getAttribute](dataInterval),
        intervalOption = options[interval],
        intervalData = intervalAttribute === 'false' ? 0 : parseInt(intervalAttribute),  
        pauseData = element[getAttribute](dataPause) === hoverEvent || false,
        keyboardData = element[getAttribute](dataKeyboard) === 'true' || false,
      
        // strings
        component = 'carousel',
        paused = 'paused',
        direction = 'direction',
        carouselItem = 'carousel-item',
        dataSlideTo = 'data-slide-to'; 
  
    this[keyboard] = options[keyboard] === true || keyboardData;
    this[pause] = (options[pause] === hoverEvent || pauseData) ? hoverEvent : false; // false / hover
  
    this[interval] = typeof intervalOption === 'number' ? intervalOption
                   : intervalOption === false || intervalData === 0 || intervalData === false ? 0
                   : isNaN(intervalData) ? 5000 // bootstrap carousel default interval
                   : intervalData;
  
    // bind, event targets
    var self = this, index = element.index = 0, timer = element.timer = 0, 
      isSliding = false, // isSliding prevents click event handlers when animation is running
      isTouch = false, startXPosition = null, currentXPosition = null, endXPosition = null, // touch and event coordinates
      slides = getElementsByClassName(element,carouselItem), total = slides[length],
      slideDirection = this[direction] = left,
      leftArrow = getElementsByClassName(element,component+'-control-prev')[0], 
      rightArrow = getElementsByClassName(element,component+'-control-next')[0],
      indicator = queryElement( '.'+component+'-indicators', element ),
      indicators = indicator && indicator[getElementsByTagName]( "LI" ) || [];
  
    // invalidate when not enough items
    if (total < 2) { return; }
  
    // handlers
    var pauseHandler = function () {
        if ( self[interval] !==false && !hasClass(element,paused) ) {
          addClass(element,paused);
          !isSliding && ( clearInterval(timer), timer = null );
        }
      },
      resumeHandler = function() {
        if ( self[interval] !== false && hasClass(element,paused) ) {
          removeClass(element,paused);
          !isSliding && ( clearInterval(timer), timer = null );
          !isSliding && self.cycle();
        }
      },
      indicatorHandler = function(e) {
        e[preventDefault]();
        if (isSliding) return;
  
        var eventTarget = e[target]; // event target | the current active item
  
        if ( eventTarget && !hasClass(eventTarget,active) && eventTarget[getAttribute](dataSlideTo) ) {
          index = parseInt( eventTarget[getAttribute](dataSlideTo), 10 );
        } else { return false; }
  
        self.slideTo( index ); //Do the slide
      },
      controlsHandler = function (e) {
        e[preventDefault]();
        if (isSliding) return;
  
        var eventTarget = e.currentTarget || e.srcElement;
  
        if ( eventTarget === rightArrow ) {
          index++;
        } else if ( eventTarget === leftArrow ) {
          index--;
        }
  
        self.slideTo( index ); //Do the slide
      },
      keyHandler = function (e) {
        if (isSliding) return;
        switch (e.which) {
          case 39:
            index++;
            break;
          case 37:
            index--;
            break;
          default: return;
        }
        self.slideTo( index ); //Do the slide
      },
      // touch events
      toggleTouchEvents = function(toggle){
        toggle( element, touchEvents.move, touchMoveHandler, passiveHandler );
        toggle( element, touchEvents.end, touchEndHandler, passiveHandler );
    },  
      touchDownHandler = function(e) {
        if ( isTouch ) { return; } 
          
        startXPosition = parseInt(e.touches[0].pageX);
  
        if ( element.contains(e[target]) ) {
          isTouch = true;
          toggleTouchEvents(on);
        }
      },
      touchMoveHandler = function(e) {
        if ( !isTouch ) { e.preventDefault(); return; }
  
        currentXPosition = parseInt(e.touches[0].pageX);
        
        //cancel touch if more than one touches detected
        if ( e.type === 'touchmove' && e.touches[length] > 1 ) {
          e.preventDefault();
          return false;
        }
      },
      touchEndHandler = function(e) {
        if ( !isTouch || isSliding ) { return }
        
        endXPosition = currentXPosition || parseInt( e.touches[0].pageX );
  
        if ( isTouch ) {
          if ( (!element.contains(e[target]) || !element.contains(e.relatedTarget) ) && Math.abs(startXPosition - endXPosition) < 75 ) {
            return false;
          } else {
            if ( currentXPosition < startXPosition ) {
              index++;
            } else if ( currentXPosition > startXPosition ) {
              index--;        
            }
            isTouch = false;
            self.slideTo(index);
          }
          toggleTouchEvents(off);            
        }
      },
  
      // private methods
      isElementInScrollRange = function () {
        var rect = element[getBoundingClientRect](),
          viewportHeight = globalObject[innerHeight] || HTML[clientHeight]
        return rect[top] <= viewportHeight && rect[bottom] >= 0; // bottom && top
      },    
      setActivePage = function( pageIndex ) { //indicators
        for ( var i = 0, icl = indicators[length]; i < icl; i++ ) {
          removeClass(indicators[i],active);
        }
        if (indicators[pageIndex]) addClass(indicators[pageIndex], active);
      };
  
  
    // public methods
    this.cycle = function() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
  
      timer = setInterval(function() {
        isElementInScrollRange() && (index++, self.slideTo( index ) );
      }, this[interval]);
    };
    this.slideTo = function( next ) {
      if (isSliding) return; // when controled via methods, make sure to check again      
      
      var activeItem = this.getActiveIndex(), // the current active
          orientation;
      
      // first return if we're on the same item #227
      if ( activeItem === next ) {
        return;
      // or determine slideDirection
      } else if  ( (activeItem < next ) || (activeItem === 0 && next === total -1 ) ) {
        slideDirection = self[direction] = left; // next
      } else if  ( (activeItem > next) || (activeItem === total - 1 && next === 0 ) ) {
        slideDirection = self[direction] = right; // prev
      }
  
      // find the right next index 
      if ( next < 0 ) { next = total - 1; } 
      else if ( next >= total ){ next = 0; }
  
      // update index
      index = next;
  
      orientation = slideDirection === left ? 'next' : 'prev'; //determine type
      bootstrapCustomEvent.call(element, slideEvent, component, slides[next]); // here we go with the slide
  
      isSliding = true;
      clearInterval(timer);
      timer = null;
      setActivePage( next );
  
      if ( supportTransitions && hasClass(element,'slide') ) {
  
        addClass(slides[next],carouselItem +'-'+ orientation);
        slides[next][offsetWidth];
        addClass(slides[next],carouselItem +'-'+ slideDirection);
        addClass(slides[activeItem],carouselItem +'-'+ slideDirection);
  
        emulateTransitionEnd(slides[next], function(e) {
          var timeout = e && e[target] !== slides[next] ? e.elapsedTime*1000+100 : 20;
          
          isSliding && setTimeout(function(){
            isSliding = false;
  
            addClass(slides[next],active);
            removeClass(slides[activeItem],active);
  
            removeClass(slides[next],carouselItem +'-'+ orientation);
            removeClass(slides[next],carouselItem +'-'+ slideDirection);
            removeClass(slides[activeItem],carouselItem +'-'+ slideDirection);
  
            bootstrapCustomEvent.call(element, slidEvent, component, slides[next]);
  
            if ( !DOC.hidden && self[interval] && !hasClass(element,paused) ) {
              self.cycle();
            }
          }, timeout);
        });
  
      } else {
        addClass(slides[next],active);
        slides[next][offsetWidth];
        removeClass(slides[activeItem],active);
        setTimeout(function() {
          isSliding = false;
          if ( self[interval] && !hasClass(element,paused) ) {
            self.cycle();
          }
          bootstrapCustomEvent.call(element, slidEvent, component, slides[next]);
        }, 100 );
      }
    };
    this.getActiveIndex = function () {
      return slides[indexOf](getElementsByClassName(element,carouselItem+' active')[0]) || 0;
    };
  
    // init
    if ( !(stringCarousel in element ) ) { // prevent adding event handlers twice
  
      if ( self[pause] && self[interval] ) {
        on( element, mouseHover[0], pauseHandler );
        on( element, mouseHover[1], resumeHandler );
        on( element, touchEvents.start, pauseHandler, passiveHandler );
        on( element, touchEvents.end, resumeHandler, passiveHandler );
      }
    
      slides[length] > 1 && on( element, touchEvents.start, touchDownHandler, passiveHandler );
  
      rightArrow && on( rightArrow, clickEvent, controlsHandler );
      leftArrow && on( leftArrow, clickEvent, controlsHandler );
    
      indicator && on( indicator, clickEvent, indicatorHandler );
      self[keyboard] && on( globalObject, keydownEvent, keyHandler );
  
    }
    if (self.getActiveIndex()<0) {
      slides[length] && addClass(slides[0],active);
      indicators[length] && setActivePage(0);
    }
  
    if ( self[interval] ){ self.cycle(); }
    element[stringCarousel] = self;
  };
  
  // CAROUSEL DATA API
  // =================
  supports[push]( [ stringCarousel, Carousel, '['+dataRide+'="carousel"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Collapse
  -----------------------------------------------*/
  
  // COLLAPSE DEFINITION
  // ===================
  var Collapse = function( element, options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // event targets and constants
    var accordion = null, collapse = null, self = this, 
      accordionData = element[getAttribute]('data-parent'),
      activeCollapse, activeElement,
  
      // component strings
      component = 'collapse',
      collapsed = 'collapsed',
      isAnimating = 'isAnimating',
  
      // private methods
      openAction = function(collapseElement,toggle) {
        bootstrapCustomEvent.call(collapseElement, showEvent, component);
        collapseElement[isAnimating] = true;
        addClass(collapseElement,collapsing);
        removeClass(collapseElement,component);
        collapseElement[style][height] = collapseElement[scrollHeight] + 'px';
        
        emulateTransitionEnd(collapseElement, function() {
          collapseElement[isAnimating] = false;
          collapseElement[setAttribute](ariaExpanded,'true');
          toggle[setAttribute](ariaExpanded,'true');
          removeClass(collapseElement,collapsing);
          addClass(collapseElement, component);
          addClass(collapseElement,showClass);
          collapseElement[style][height] = '';
          bootstrapCustomEvent.call(collapseElement, shownEvent, component);
        });
      },
      closeAction = function(collapseElement,toggle) {
        bootstrapCustomEvent.call(collapseElement, hideEvent, component);
        collapseElement[isAnimating] = true;
        collapseElement[style][height] = collapseElement[scrollHeight] + 'px'; // set height first
        removeClass(collapseElement,component);
        removeClass(collapseElement,showClass);
        addClass(collapseElement,collapsing);
        collapseElement[offsetWidth]; // force reflow to enable transition
        collapseElement[style][height] = '0px';
        
        emulateTransitionEnd(collapseElement, function() {
          collapseElement[isAnimating] = false;
          collapseElement[setAttribute](ariaExpanded,'false');
          toggle[setAttribute](ariaExpanded,'false');
          removeClass(collapseElement,collapsing);
          addClass(collapseElement,component);
          collapseElement[style][height] = '';
          bootstrapCustomEvent.call(collapseElement, hiddenEvent, component);
        });
      },
      getTarget = function() {
        var href = element.href && element[getAttribute]('href'),
          parent = element[getAttribute](dataTarget),
          id = href || ( parent && parent.charAt(0) === '#' ) && parent;
        return id && queryElement(id);
      };
    
    // public methods
    this.toggle = function(e) {
      e[preventDefault]();
      if (!hasClass(collapse,showClass)) { self.show(); } 
      else { self.hide(); }
    };
    this.hide = function() {
      if ( collapse[isAnimating] ) return;    
      closeAction(collapse,element);
      addClass(element,collapsed);
    };
    this.show = function() {
      if ( accordion ) {
        activeCollapse = queryElement('.'+component+'.'+showClass,accordion);
        activeElement = activeCollapse && (queryElement('['+dataTarget+'="#'+activeCollapse.id+'"]',accordion)
                      || queryElement('[href="#'+activeCollapse.id+'"]',accordion) );
      }
  
      if ( !collapse[isAnimating] || activeCollapse && !activeCollapse[isAnimating] ) {
        if ( activeElement && activeCollapse !== collapse ) {
          closeAction(activeCollapse,activeElement); 
          addClass(activeElement,collapsed);
        }
        openAction(collapse,element);
        removeClass(element,collapsed);
      }
    };
  
    // init
    if ( !(stringCollapse in element ) ) { // prevent adding event handlers twice
      on(element, clickEvent, self.toggle);
    }
    collapse = getTarget();
    collapse[isAnimating] = false;  // when true it will prevent click handlers  
    accordion = queryElement(options.parent) || accordionData && getClosest(element, accordionData);
    element[stringCollapse] = self;
  };
  
  // COLLAPSE DATA API
  // =================
  supports[push]( [ stringCollapse, Collapse, '['+dataToggle+'="collapse"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Dropdown
  ----------------------------------------------*/
  
  // DROPDOWN DEFINITION
  // ===================
  var Dropdown = function( element, option ) {
      
    // initialization element
    element = queryElement(element);
  
    // set option
    this.persist = option === true || element[getAttribute]('data-persist') === 'true' || false;
  
    // constants, event targets, strings
    var self = this, children = 'children',
      parent = element[parentNode],
      component = 'dropdown', open = 'open',
      relatedTarget = null,
      menu = queryElement('.dropdown-menu', parent),
      menuItems = (function(){
        var set = menu[children], newSet = [];
        for ( var i=0; i<set[length]; i++ ){
          set[i][children][length] && (set[i][children][0].tagName === 'A' && newSet[push](set[i][children][0]));
          set[i].tagName === 'A' && newSet[push](set[i]);
        }
        return newSet;
      })(),
  
      // preventDefault on empty anchor links
      preventEmptyAnchor = function(anchor){
        (anchor.href && anchor.href.slice(-1) === '#' || anchor[parentNode] && anchor[parentNode].href 
          && anchor[parentNode].href.slice(-1) === '#') && this[preventDefault]();    
      },
  
      // toggle dismissible events
      toggleDismiss = function(){
        var type = element[open] ? on : off;
        type(DOC, clickEvent, dismissHandler); 
        type(DOC, keydownEvent, preventScroll);
        type(DOC, keyupEvent, keyHandler);
        type(DOC, focusEvent, dismissHandler, true);
      },
  
      // handlers
      dismissHandler = function(e) {
        var eventTarget = e[target], hasData = eventTarget && (eventTarget[getAttribute](dataToggle) 
                              || eventTarget[parentNode] && getAttribute in eventTarget[parentNode] 
                              && eventTarget[parentNode][getAttribute](dataToggle));
        if ( e.type === focusEvent && (eventTarget === element || eventTarget === menu || menu[contains](eventTarget) ) ) {
          return;
        }
        if ( (eventTarget === menu || menu[contains](eventTarget)) && (self.persist || hasData) ) { return; }
        else {
          relatedTarget = eventTarget === element || element[contains](eventTarget) ? element : null;
          hide();
        }
        preventEmptyAnchor.call(e,eventTarget);
      },
      clickHandler = function(e) {
        relatedTarget = element;
        show();
        preventEmptyAnchor.call(e,e[target]);
      },
      preventScroll = function(e){
        var key = e.which || e.keyCode;
        if( key === 38 || key === 40 ) { e[preventDefault](); }
      },
      keyHandler = function(e){
        var key = e.which || e.keyCode,
          activeItem = DOC.activeElement,
          idx = menuItems[indexOf](activeItem),
          isSameElement = activeItem === element,
          isInsideMenu = menu[contains](activeItem),
          isMenuItem = activeItem[parentNode] === menu || activeItem[parentNode][parentNode] === menu;          
  
        if ( isMenuItem ) { // navigate up | down
          idx = isSameElement ? 0 
                              : key === 38 ? (idx>1?idx-1:0)
                              : key === 40 ? (idx<menuItems[length]-1?idx+1:idx) : idx;
          menuItems[idx] && setFocus(menuItems[idx]);
        }
        if ( (menuItems[length] && isMenuItem // menu has items
              || !menuItems[length] && (isInsideMenu || isSameElement)  // menu might be a form
              || !isInsideMenu ) // or the focused element is not in the menu at all
              && element[open] && key === 27  // menu must be open
        ) {
          self.toggle();
          relatedTarget = null;
        }
      },
  
      // private methods
      show = function() {
        bootstrapCustomEvent.call(parent, showEvent, component, relatedTarget);
        addClass(menu,showClass);
        addClass(parent,showClass);
        element[setAttribute](ariaExpanded,true);
        bootstrapCustomEvent.call(parent, shownEvent, component, relatedTarget);
        element[open] = true;
        off(element, clickEvent, clickHandler);
        setTimeout(function(){
          setFocus( menu[getElementsByTagName]('INPUT')[0] || element ); // focus the first input item | element
          toggleDismiss();
        },1);
      },
      hide = function() {
        bootstrapCustomEvent.call(parent, hideEvent, component, relatedTarget);
        removeClass(menu,showClass);
        removeClass(parent,showClass);
        element[setAttribute](ariaExpanded,false);
        bootstrapCustomEvent.call(parent, hiddenEvent, component, relatedTarget);
        element[open] = false;
        toggleDismiss();
        setFocus(element);
        setTimeout(function(){ on(element, clickEvent, clickHandler); },1);
      };
  
    // set initial state to closed
    element[open] = false;
  
    // public methods
    this.toggle = function() {
      if (hasClass(parent,showClass) && element[open]) { hide(); } 
      else { show(); }
    };
  
    // init
    if ( !(stringDropdown in element) ) { // prevent adding event handlers twice
      !tabindex in menu && menu[setAttribute](tabindex, '0'); // Fix onblur on Chrome | Safari
      on(element, clickEvent, clickHandler);
    }
  
    element[stringDropdown] = self;
  };
  
  // DROPDOWN DATA API
  // =================
  supports[push]( [stringDropdown, Dropdown, '['+dataToggle+'="dropdown"]'] );
  
  
  /* Native Javascript for Bootstrap 4 | Modal
  -------------------------------------------*/
  
  // MODAL DEFINITION
  // ===============
  var Modal = function(element, options) { // element can be the modal/triggering button
  
    // the modal (both JavaScript / DATA API init) / triggering button element (DATA API)
    element = queryElement(element);
  
      // strings
      var component = 'modal',
        staticString = 'static',
        modalTrigger = 'modalTrigger',
        paddingRight = 'paddingRight',
        modalBackdropString = 'modal-backdrop',
        isAnimating = 'isAnimating',
        // determine modal, triggering element
        btnCheck = element[getAttribute](dataTarget)||element[getAttribute]('href'),
        checkModal = queryElement( btnCheck ),
        modal = hasClass(element,component) ? element : checkModal;
  
      if ( hasClass(element, component) ) { element = null; } // modal is now independent of it's triggering element
  
    if ( !modal ) { return; } // invalidate
  
    // set options
    options = options || {};
  
    this[keyboard] = options[keyboard] === false || modal[getAttribute](dataKeyboard) === 'false' ? false : true;
    this[backdrop] = options[backdrop] === staticString || modal[getAttribute](databackdrop) === staticString ? staticString : true;
    this[backdrop] = options[backdrop] === false || modal[getAttribute](databackdrop) === 'false' ? false : this[backdrop];
    this[animation] = hasClass(modal, 'fade') ? true : false;
    this[content]  = options[content]; // JavaScript only
  
    // set an initial state of the modal
    modal[isAnimating] = false;
    
    // bind, constants, event targets and other vars
    var self = this, relatedTarget = null,
      bodyIsOverflowing, scrollBarWidth, overlay, overlayDelay, modalTimer,
  
      // also find fixed-top / fixed-bottom items
      fixedItems = getElementsByClassName(HTML,fixedTop).concat(getElementsByClassName(HTML,fixedBottom)),
  
      // private methods
      getWindowWidth = function() {
        var htmlRect = HTML[getBoundingClientRect]();
        return globalObject[innerWidth] || (htmlRect[right] - Math.abs(htmlRect[left]));
      },
      setScrollbar = function () {
        var bodyStyle = globalObject[getComputedStyle](DOC[body]),
            bodyPad = parseInt((bodyStyle[paddingRight]), 10), itemPad;
        if (bodyIsOverflowing) {
          DOC[body][style][paddingRight] = (bodyPad + scrollBarWidth) + 'px';
          modal[style][paddingRight] = scrollBarWidth+'px';
          if (fixedItems[length]){
            for (var i = 0; i < fixedItems[length]; i++) {
              itemPad = globalObject[getComputedStyle](fixedItems[i])[paddingRight];
              fixedItems[i][style][paddingRight] = ( parseInt(itemPad) + scrollBarWidth) + 'px';
            }
          }
        }
      },
      resetScrollbar = function () {
        DOC[body][style][paddingRight] = '';
        modal[style][paddingRight] = '';
        if (fixedItems[length]){
          for (var i = 0; i < fixedItems[length]; i++) {
            fixedItems[i][style][paddingRight] = '';
          }
        }
      },
      measureScrollbar = function () { // thx walsh
        var scrollDiv = DOC[createElement]('div'), widthValue;
        scrollDiv.className = component+'-scrollbar-measure'; // this is here to stay
        DOC[body][appendChild](scrollDiv);
        widthValue = scrollDiv[offsetWidth] - scrollDiv[clientWidth];
        DOC[body].removeChild(scrollDiv);
        return widthValue;
      },
      checkScrollbar = function () {
        bodyIsOverflowing = DOC[body][clientWidth] < getWindowWidth();
        scrollBarWidth = measureScrollbar();
      },
      createOverlay = function() {
        var newOverlay = DOC[createElement]('div');
        overlay = queryElement('.'+modalBackdropString);
  
        if ( overlay === null ) {
          newOverlay[setAttribute]('class', modalBackdropString + (self[animation] ? ' fade' : ''));
          overlay = newOverlay;
          DOC[body][appendChild](overlay);
        }
        modalOverlay = 1;
      },
      removeOverlay = function() {
        overlay = queryElement('.'+modalBackdropString);
        if ( overlay && overlay !== null && typeof overlay === 'object' ) {
          modalOverlay = 0;
          DOC[body].removeChild(overlay); overlay = null;
        }
      },
      // triggers
      triggerShow = function() {
        setFocus(modal);
        modal[isAnimating] = false;
        bootstrapCustomEvent.call(modal, shownEvent, component, relatedTarget);
  
        on(globalObject, resizeEvent, self.update, passiveHandler);
        on(modal, clickEvent, dismissHandler);
        on(DOC, keydownEvent, keyHandler);      
      },
      triggerHide = function() {
        modal[style].display = '';
        element && (setFocus(element));
        bootstrapCustomEvent.call(modal, hiddenEvent, component);
  
        (function(){
          if (!getElementsByClassName(DOC,component+' '+showClass)[0]) {
            resetScrollbar();
            removeClass(DOC[body],component+'-open');
            overlay && hasClass(overlay,'fade') ? (removeClass(overlay,showClass), emulateTransitionEnd(overlay,removeOverlay))
            : removeOverlay();
  
            off(globalObject, resizeEvent, self.update, passiveHandler);
            off(modal, clickEvent, dismissHandler);
            off(DOC, keydownEvent, keyHandler);
          }
        }());
        modal[isAnimating] = false;
      },
      // handlers
      clickHandler = function(e) {
        if ( modal[isAnimating] ) return;
  
        var clickTarget = e[target];
        clickTarget = clickTarget[hasAttribute](dataTarget) || clickTarget[hasAttribute]('href') ? clickTarget : clickTarget[parentNode];
        if ( clickTarget === element && !hasClass(modal,showClass) ) {
          modal[modalTrigger] = element;
          relatedTarget = element;
          self.show();
          e[preventDefault]();
        }
      },
      keyHandler = function(e) {
        if ( modal[isAnimating] ) return;
  
        if (self[keyboard] && e.which == 27 && hasClass(modal,showClass) ) {
          self.hide();
        }
      },
      dismissHandler = function(e) {
        if ( modal[isAnimating] ) return;
        var clickTarget = e[target];
  
        if ( hasClass(modal,showClass) && ( clickTarget[parentNode][getAttribute](dataDismiss) === component
            || clickTarget[getAttribute](dataDismiss) === component
            || clickTarget === modal && self[backdrop] !== staticString ) ) {
          self.hide(); relatedTarget = null;
          e[preventDefault]();
        }
      };
  
    // public methods
    this.toggle = function() {
      if ( hasClass(modal,showClass) ) {this.hide();} else {this.show();}
    };
    this.show = function() {
      if ( hasClass(modal,showClass) || modal[isAnimating] ) {return}
  
      clearTimeout(modalTimer);
      modalTimer = setTimeout(function(){
        modal[isAnimating] = true;
        bootstrapCustomEvent.call(modal, showEvent, component, relatedTarget);
  
        // we elegantly hide any opened modal
        var currentOpen = getElementsByClassName(DOC,component+' '+showClass)[0];
        if (currentOpen && currentOpen !== modal) {
          modalTrigger in currentOpen && currentOpen[modalTrigger][stringModal].hide();
          stringModal in currentOpen && currentOpen[stringModal].hide();
        }
  
        if ( self[backdrop] ) {
          !modalOverlay && !overlay && createOverlay();
        }
  
        if ( overlay && !hasClass(overlay,showClass) ) {
          overlay[offsetWidth]; // force reflow to enable trasition
          overlayDelay = getTransitionDurationFromElement(overlay);
          addClass(overlay, showClass);
        }
  
        setTimeout( function() {
          modal[style].display = 'block';
  
          checkScrollbar();
          setScrollbar();
  
          addClass(DOC[body],component+'-open');
          addClass(modal,showClass);
          modal[setAttribute](ariaHidden, false);
  
          hasClass(modal,'fade') ? emulateTransitionEnd(modal, triggerShow) : triggerShow();
        }, supportTransitions && overlay && overlayDelay ? overlayDelay : 1);
      },1);
    };
    this.hide = function() {
      if ( modal[isAnimating] || !hasClass(modal,showClass) ) {return}
  
      clearTimeout(modalTimer);
      modalTimer = setTimeout(function(){
        modal[isAnimating] = true;    
        bootstrapCustomEvent.call(modal, hideEvent, component);
        overlay = queryElement('.'+modalBackdropString);
        overlayDelay = overlay && getTransitionDurationFromElement(overlay);
  
        removeClass(modal,showClass);
        modal[setAttribute](ariaHidden, true);
  
        setTimeout(function(){
          hasClass(modal,'fade') ? emulateTransitionEnd(modal, triggerHide) : triggerHide();
        }, supportTransitions && overlay && overlayDelay ? overlayDelay : 2);
      },2)
    };
    this.setContent = function( content ) {
      queryElement('.'+component+'-content',modal)[innerHTML] = content;
    };
    this.update = function() {
      if (hasClass(modal,showClass)) {
        checkScrollbar();
        setScrollbar();
      }
    };
  
    // init
    // prevent adding event handlers over and over
    // modal is independent of a triggering element
    if ( !!element && !(stringModal in element) ) {
      on(element, clickEvent, clickHandler);
    }
    if ( !!self[content] ) { self.setContent( self[content] ); }
    if (element) { element[stringModal] = self; modal[modalTrigger] = element; }
    else { modal[stringModal] = self; }
  };
  
  // DATA API
  supports[push]( [ stringModal, Modal, '['+dataToggle+'="modal"]' ] );
  
  /* Native Javascript for Bootstrap 4 | Popover
  ----------------------------------------------*/
  
  // POPOVER DEFINITION
  // ==================
  var Popover = function( element, options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // DATA API
    var triggerData = element[getAttribute](dataTrigger), // click / hover / focus
        animationData = element[getAttribute](dataAnimation), // true / false
        placementData = element[getAttribute](dataPlacement),
        dismissibleData = element[getAttribute](dataDismissible),
        delayData = element[getAttribute](dataDelay),
        containerData = element[getAttribute](dataContainer),
  
        // internal strings
        component = 'popover',
        template = 'template',
        trigger = 'trigger',
        classString = 'class',
        div = 'div',
        fade = 'fade',
        dataContent = 'data-content',
        dismissible = 'dismissible',
        closeBtn = '<button type="button" class="close">×</button>',
  
        // check container
        containerElement = queryElement(options[container]),
        containerDataElement = queryElement(containerData),       
        
        // maybe the element is inside a modal
        modal = getClosest(element,'.modal'),
        
        // maybe the element is inside a fixed navbar
        navbarFixedTop = getClosest(element,'.'+fixedTop),
        navbarFixedBottom = getClosest(element,'.'+fixedBottom);
  
    // set instance options
    this[template] = options[template] ? options[template] : null; // JavaScript only
    this[trigger] = options[trigger] ? options[trigger] : triggerData || hoverEvent;
    this[animation] = options[animation] && options[animation] !== fade ? options[animation] : animationData || fade;
    this[placement] = options[placement] ? options[placement] : placementData || top;
    this[delay] = parseInt(options[delay] || delayData) || 200;
    this[dismissible] = options[dismissible] || dismissibleData === 'true' ? true : false;
    this[container] = containerElement ? containerElement 
                    : containerDataElement ? containerDataElement 
                    : navbarFixedTop ? navbarFixedTop
                    : navbarFixedBottom ? navbarFixedBottom
                    : modal ? modal : DOC[body];
    
    // bind, content
    var self = this, 
        titleString = options.title || element[getAttribute](dataTitle) || null,
        contentString = options.content || element[getAttribute](dataContent) || null;
  
    if ( !contentString && !this[template] ) return; // invalidate
  
    // constants, vars
    var popover = null, timer = 0, placementSetting = this[placement],
      
      // handlers
      dismissibleHandler = function(e) {
        if (popover !== null && e[target] === queryElement('.close',popover)) {
          self.hide();
        }
      },
  
      // private methods
      removePopover = function() {
        self[container].removeChild(popover);
        timer = null; popover = null; 
      },
      createPopover = function() {
        titleString = options.title || element[getAttribute](dataTitle);
        contentString = options.content || element[getAttribute](dataContent);
        // fixing https://github.com/thednp/bootstrap.native/issues/233
        contentString = !!contentString ? contentString.trim() : null;
  
        popover = DOC[createElement](div);
  
        // popover arrow
        var popoverArrow = DOC[createElement](div);
        popoverArrow[setAttribute](classString,'arrow');
        popover[appendChild](popoverArrow);
  
        if ( contentString !== null && self[template] === null ) { //create the popover from data attributes
  
          popover[setAttribute]('role','tooltip');     
  
          if (titleString !== null) {
            var popoverTitle = DOC[createElement]('h3');
            popoverTitle[setAttribute](classString,component+'-header');
  
            popoverTitle[innerHTML] = self[dismissible] ? titleString + closeBtn : titleString;
            popover[appendChild](popoverTitle);
          }
  
          //set popover content
          var popoverContent = DOC[createElement](div);
          popoverContent[setAttribute](classString,component+'-body');
          popoverContent[innerHTML] = self[dismissible] && titleString === null ? contentString + closeBtn : contentString;
          popover[appendChild](popoverContent);
  
        } else {  // or create the popover from template
          var popoverTemplate = DOC[createElement](div);
          self[template] = self[template].trim();
          popoverTemplate[innerHTML] = self[template];
          popover[innerHTML] = popoverTemplate.firstChild[innerHTML];
        }
  
        //append to the container
        self[container][appendChild](popover);
        popover[style].display = 'block';
        popover[setAttribute](classString, component+ ' bs-' + component+'-'+placementSetting + ' ' + self[animation]);
      },
      showPopover = function () {
        !hasClass(popover,showClass) && ( addClass(popover,showClass) );
      },
      updatePopover = function() {
        styleTip(element, popover, placementSetting, self[container]);
      },
  
      // event toggle
      dismissHandlerToggle = function(type){
        if (clickEvent == self[trigger] || 'focus' == self[trigger]) {
          !self[dismissible] && type( element, 'blur', self.hide );
        }
        self[dismissible] && type( DOC, clickEvent, dismissibleHandler );     
        type( globalObject, resizeEvent, self.hide, passiveHandler );
      },
  
      // triggers
      showTrigger = function() {
        dismissHandlerToggle(on);
        bootstrapCustomEvent.call(element, shownEvent, component);
      },
      hideTrigger = function() {
        dismissHandlerToggle(off);
        removePopover();
        bootstrapCustomEvent.call(element, hiddenEvent, component);
      };
  
    // public methods / handlers
    this.toggle = function() {
      if (popover === null) { self.show(); } 
      else { self.hide(); }
    };
    this.show = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (popover === null) {
          placementSetting = self[placement]; // we reset placement in all cases
          createPopover();
          updatePopover();
          showPopover();
          bootstrapCustomEvent.call(element, showEvent, component);
          !!self[animation] ? emulateTransitionEnd(popover, showTrigger) : showTrigger();
        }
      }, 20 );
    };
    this.hide = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (popover && popover !== null && hasClass(popover,showClass)) {
          bootstrapCustomEvent.call(element, hideEvent, component);
          removeClass(popover,showClass);
          !!self[animation] ? emulateTransitionEnd(popover, hideTrigger) : hideTrigger();
        }
      }, self[delay] );
    };
  
    // init
    if ( !(stringPopover in element) ) { // prevent adding event handlers twice
      if (self[trigger] === hoverEvent) {
        on( element, mouseHover[0], self.show );
        if (!self[dismissible]) { on( element, mouseHover[1], self.hide ); }
      } else if (clickEvent == self[trigger] || 'focus' == self[trigger]) {
        on( element, self[trigger], self.toggle );
      }
    }
    element[stringPopover] = self;
  };
  
  // POPOVER DATA API
  // ================
  supports[push]( [ stringPopover, Popover, '['+dataToggle+'="popover"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | ScrollSpy
  -----------------------------------------------*/
  
  // SCROLLSPY DEFINITION
  // ====================
  var ScrollSpy = function(element, options) {
  
    // initialization element, the element we spy on
    element = queryElement(element); 
  
    // DATA API
    var targetData = queryElement(element[getAttribute](dataTarget)),
        offsetData = element[getAttribute]('data-offset');
  
    // set options
    options = options || {};
  
    // invalidate
    if ( !options[target] && !targetData ) { return; } 
  
    // event targets, constants
    var self = this, spyTarget = options[target] && queryElement(options[target]) || targetData,
        links = spyTarget && spyTarget[getElementsByTagName]('A'),
        offset = parseInt(options['offset'] || offsetData) || 10,      
        items = [], targetItems = [], scrollOffset,
        scrollTarget = element[offsetHeight] < element[scrollHeight] ? element : globalObject, // determine which is the real scrollTarget
        isWindow = scrollTarget === globalObject;  
  
    // populate items and targets
    for (var i=0, il=links[length]; i<il; i++) {
      var href = links[i][getAttribute]('href'), 
          targetItem = href && href.charAt(0) === '#' && href.slice(-1) !== '#' && queryElement(href);
      if ( !!targetItem ) {
        items[push](links[i]);
        targetItems[push](targetItem);
      }
    }
  
    // private methods
    var updateItem = function(index) {
        var item = items[index],
          targetItem = targetItems[index], // the menu item targets this element
          dropdown = item[parentNode][parentNode],
          dropdownLink = hasClass(dropdown,'dropdown') && dropdown[getElementsByTagName]('A')[0],
          targetRect = isWindow && targetItem[getBoundingClientRect](),
  
          isActive = hasClass(item,active) || false,
  
          topEdge = (isWindow ? targetRect[top] + scrollOffset : targetItem[offsetTop]) - offset,
          bottomEdge = isWindow ? targetRect[bottom] + scrollOffset - offset : targetItems[index+1] ? targetItems[index+1][offsetTop] - offset : element[scrollHeight],
  
          inside = scrollOffset >= topEdge && bottomEdge > scrollOffset;
  
        if ( !isActive && inside ) {
          if ( !hasClass(item,active) ) {
            addClass(item,active);
            if (dropdownLink && !hasClass(dropdownLink,active) ) {
              addClass(dropdownLink,active);
            }
            bootstrapCustomEvent.call(element, 'activate', 'scrollspy', items[index]);
          }
        } else if ( !inside ) {
          if ( hasClass(item,active) ) {
            removeClass(item,active);
            if (dropdownLink && hasClass(dropdownLink,active) && !getElementsByClassName(item[parentNode],active).length  ) {
              removeClass(dropdownLink,active);
            }
          }
        } else if ( !inside && !isActive || isActive && inside ) {
          return;
        }
      },
      updateItems = function(){
        scrollOffset = isWindow ? getScroll().y : element[scrollTop];
        for (var index=0, itl=items[length]; index<itl; index++) {
          updateItem(index)
        }
      };
  
    // public method
    this.refresh = function () {
      updateItems();
    }
  
    // init
    if ( !(stringScrollSpy in element) ) { // prevent adding event handlers twice
      on( scrollTarget, scrollEvent, self.refresh, passiveHandler );
      on( globalObject, resizeEvent, self.refresh, passiveHandler );
    }
    self.refresh();
    element[stringScrollSpy] = self;
  };
  
  // SCROLLSPY DATA API
  // ==================
  supports[push]( [ stringScrollSpy, ScrollSpy, '['+dataSpy+'="scroll"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Tab
  -----------------------------------------*/
  
  // TAB DEFINITION
  // ==============
  var Tab = function( element, options ) {
  
    // initialization element
    element = queryElement(element);
  
    // DATA API
    var heightData = element[getAttribute](dataHeight),
      
        // strings
        component = 'tab', height = 'height', float = 'float', isAnimating = 'isAnimating';
        
    // set options
    options = options || {};
    this[height] = supportTransitions ? (options[height] || heightData === 'true') : false;
  
    // bind, event targets
    var self = this, next,
      tabs = getClosest(element,'.nav'),
      tabsContentContainer = false,
      dropdown = tabs && queryElement('.dropdown-toggle',tabs),
      activeTab, activeContent, nextContent, containerHeight, equalContents, nextHeight,
      
      // trigger
      triggerEnd = function(){
        tabsContentContainer[style][height] = '';
        removeClass(tabsContentContainer,collapsing);
        tabs[isAnimating] = false;
      },
      triggerShow = function() {
        if (tabsContentContainer) { // height animation
          if ( equalContents ) {
            triggerEnd();
          } else {
            setTimeout(function(){ // enables height animation
              tabsContentContainer[style][height] = nextHeight + 'px'; // height animation
              tabsContentContainer[offsetWidth];
              emulateTransitionEnd(tabsContentContainer, triggerEnd);
            },50);
          }
        } else {
          tabs[isAnimating] = false; 
        }
        bootstrapCustomEvent.call(next, shownEvent, component, activeTab);
      },
      triggerHide = function() {
        if (tabsContentContainer) {
          activeContent[style][float] = left;
          nextContent[style][float] = left;        
          containerHeight = activeContent[scrollHeight];
        }
          
        addClass(nextContent,active);
        bootstrapCustomEvent.call(next, showEvent, component, activeTab);
  
        removeClass(activeContent,active);
        bootstrapCustomEvent.call(activeTab, hiddenEvent, component, next);
        
        if (tabsContentContainer) {
          nextHeight = nextContent[scrollHeight];
          equalContents = nextHeight === containerHeight;
          addClass(tabsContentContainer,collapsing);
          tabsContentContainer[style][height] = containerHeight + 'px'; // height animation
          tabsContentContainer[offsetHeight];
          activeContent[style][float] = '';
          nextContent[style][float] = '';
        }
  
        if ( hasClass(nextContent, 'fade') ) {
          setTimeout(function(){
            addClass(nextContent,showClass);
            emulateTransitionEnd(nextContent,triggerShow);
          },20);
        } else { triggerShow(); }        
      };
  
    if (!tabs) return; // invalidate
  
    // set default animation state
    tabs[isAnimating] = false;    
          
    // private methods
    var getActiveTab = function() {
        var activeTabs = getElementsByClassName(tabs,active), activeTab;
        if ( activeTabs[length] === 1 && !hasClass(activeTabs[0][parentNode],'dropdown') ) {
          activeTab = activeTabs[0];
        } else if ( activeTabs[length] > 1 ) {
          activeTab = activeTabs[activeTabs[length]-1];
        }
        return activeTab;
      },
      getActiveContent = function() {
        return queryElement(getActiveTab()[getAttribute]('href'));
      },
      // handler 
      clickHandler = function(e) {
        e[preventDefault]();
        next = e[currentTarget];
        !tabs[isAnimating] && !hasClass(next,active) && self.show();
      };
  
    // public method
    this.show = function() { // the tab we clicked is now the next tab
      next = next || element;
      nextContent = queryElement(next[getAttribute]('href')); //this is the actual object, the next tab content to activate
      activeTab = getActiveTab(); 
      activeContent = getActiveContent();
      
      tabs[isAnimating] = true;
      removeClass(activeTab,active);
      activeTab[setAttribute](ariaSelected,'false');
      addClass(next,active);
      next[setAttribute](ariaSelected,'true');    
  
      if ( dropdown ) {
        if ( !hasClass(element[parentNode],'dropdown-menu') ) {
          if (hasClass(dropdown,active)) removeClass(dropdown,active);
        } else {
          if (!hasClass(dropdown,active)) addClass(dropdown,active);
        }
      }
      
      bootstrapCustomEvent.call(activeTab, hideEvent, component, next);
  
      if (hasClass(activeContent, 'fade')) {
        removeClass(activeContent,showClass);
        emulateTransitionEnd(activeContent, triggerHide);
      } else { triggerHide(); }
    };
  
    // init
    if ( !(stringTab in element) ) { // prevent adding event handlers twice
      on(element, clickEvent, clickHandler);
    }
    if (self[height]) { tabsContentContainer = getActiveContent()[parentNode]; }
    element[stringTab] = self;
  };
  
  // TAB DATA API
  // ============
  supports[push]( [ stringTab, Tab, '['+dataToggle+'="tab"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Toast
  ---------------------------------------------*/
  
  // TOAST DEFINITION
  // ==================
  var Toast = function( element,options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // DATA API
    var animationData = element[getAttribute](dataAnimation),
        autohideData = element[getAttribute](dataAutohide),
        delayData = element[getAttribute](dataDelay),
        
        // strings
        component = 'toast',
        autohide = 'autohide',
        animation = 'animation',
        showing = 'showing',
        hide = 'hide',
        fade = 'fade';
  
    // set instance options
    this[animation] = options[animation] === false || animationData === 'false' ? 0 : 1; // true by default
    this[autohide] = options[autohide] === false || autohideData === 'false' ? 0 : 1; // true by default
    this[delay] = parseInt(options[delay] || delayData) || 500; // 500ms default
  
    // bind,toast and timer
    var self = this, timer = 0,
        // get the toast element
        toast = getClosest(element,'.toast');
  
    // private methods
    // animation complete
    var showComplete = function() {
        removeClass( toast, showing );
        addClass( toast, showClass );
        bootstrapCustomEvent.call(toast, shownEvent, component);
        if (self[autohide]) { self.hide(); }
      },
      hideComplete = function() {
        addClass( toast, hide );
        bootstrapCustomEvent.call(toast, hiddenEvent, component);
      },
      close = function() {
        removeClass( toast,showClass );
        self[animation] ? emulateTransitionEnd(toast, hideComplete) : hideComplete();
      },
      disposeComplete = function(){
        clearTimeout(timer); timer = null;
        addClass( toast, hide );
        off(element, clickEvent, self.hide);
        element[stringToast] = null;
        element = null;
        toast = null;
      };
  
    // public methods
    this.show = function() {
      if (toast) {
        bootstrapCustomEvent.call(toast, showEvent, component);
        self[animation] && addClass( toast,fade );
        removeClass( toast,hide );
        addClass( toast,showing );
  
        self[animation] ? emulateTransitionEnd(toast, showComplete) : showComplete();
      }
    };
    this.hide = function(noTimer) {
      if (toast && hasClass(toast,showClass)) {
        bootstrapCustomEvent.call(toast, hideEvent, component);
  
        if (noTimer) {
          close();
        } else {
          timer = setTimeout( close, self[delay]);
        }
      }
    };
    this.dispose = function() {
      if ( toast && hasClass(toast,showClass) ) {
        removeClass( toast,showClass );
        self[animation] ? emulateTransitionEnd(toast, disposeComplete) : disposeComplete();
      }
    };
  
    // init
    if ( !(stringToast in element) ) { // prevent adding event handlers twice
      on(element, clickEvent, self.hide);
    }
    element[stringToast] = self;
  };
  
  // TOAST DATA API
  // =================
  supports[push]( [ stringToast, Toast, '['+dataDismiss+'="toast"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Tooltip
  ---------------------------------------------*/
  
  // TOOLTIP DEFINITION
  // ==================
  var Tooltip = function( element,options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // DATA API
    var animationData = element[getAttribute](dataAnimation),
        placementData = element[getAttribute](dataPlacement),
        delayData = element[getAttribute](dataDelay),
        containerData = element[getAttribute](dataContainer),
        
        // strings
        component = 'tooltip',
        classString = 'class',
        title = 'title',
        fade = 'fade',
        div = 'div',
  
        // check container
        containerElement = queryElement(options[container]),
        containerDataElement = queryElement(containerData),      
  
        // maybe the element is inside a modal
        modal = getClosest(element,'.modal'),
        
        // maybe the element is inside a fixed navbar
        navbarFixedTop = getClosest(element,'.'+fixedTop),
        navbarFixedBottom = getClosest(element,'.'+fixedBottom);
  
    // set instance options
    this[animation] = options[animation] && options[animation] !== fade ? options[animation] : animationData || fade;
    this[placement] = options[placement] ? options[placement] : placementData || top;
    this[delay] = parseInt(options[delay] || delayData) || 200;
    this[container] = containerElement ? containerElement 
                    : containerDataElement ? containerDataElement
                    : navbarFixedTop ? navbarFixedTop
                    : navbarFixedBottom ? navbarFixedBottom
                    : modal ? modal : DOC[body];
  
    // bind, event targets, title and constants
    var self = this, timer = 0, placementSetting = this[placement], tooltip = null,
        titleString = element[getAttribute](title) || element[getAttribute](dataTitle) || element[getAttribute](dataOriginalTitle);
  
    if ( !titleString || titleString == "" ) return; // invalidate
  
    // private methods
    var removeToolTip = function() {
        self[container].removeChild(tooltip);
        tooltip = null; timer = null;
      },
      createToolTip = function() {
        titleString = element[getAttribute](title) || element[getAttribute](dataTitle) || element[getAttribute](dataOriginalTitle); // read the title again
  
        if ( titleString && titleString !== "" ) { // invalidate, maybe markup changed
          tooltip = DOC[createElement](div);
          tooltip[setAttribute]('role',component);
          tooltip[style][left] = '0';
          tooltip[style][top] = '0';        
  
          // tooltip arrow
          var tooltipArrow = DOC[createElement](div);
          tooltipArrow[setAttribute](classString,'arrow');
          tooltip[appendChild](tooltipArrow);
      
          var tooltipInner = DOC[createElement](div);
          tooltipInner[setAttribute](classString,component+'-inner');
          tooltip[appendChild](tooltipInner);
          tooltipInner[innerHTML] = titleString;
  
          self[container][appendChild](tooltip);
          tooltip[setAttribute](classString, component + ' bs-' + component+'-'+placementSetting + ' ' + self[animation]);
        }
      },
      updateTooltip = function () {
        styleTip(element, tooltip, placementSetting, self[container]);
      },
      showTooltip = function () {
        !hasClass(tooltip,showClass) && ( addClass(tooltip,showClass) );
      },
      // triggers
      showTrigger = function() {
        on( globalObject, resizeEvent, self.hide, passiveHandler );
        bootstrapCustomEvent.call(element, shownEvent, component);
      },
      hideTrigger = function() {
        off( globalObject, resizeEvent, self.hide, passiveHandler );
        removeToolTip();
        bootstrapCustomEvent.call(element, hiddenEvent, component);
      };
  
    // public methods
    this.show = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (tooltip === null) {
          placementSetting = self[placement]; // we reset placement in all cases
          // if(createToolTip() == false) return;
          if(createToolTip() !== false) {
            updateTooltip();
            showTooltip();
            bootstrapCustomEvent.call(element, showEvent, component);
            !!self[animation] ? emulateTransitionEnd(tooltip, showTrigger) : showTrigger();          
          }
        }
      }, 20 );
    };
    this.hide = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (tooltip && hasClass(tooltip,showClass)) {
          bootstrapCustomEvent.call(element, hideEvent, component);
          removeClass(tooltip,showClass);
          !!self[animation] ? emulateTransitionEnd(tooltip, hideTrigger) : hideTrigger();
        }
      }, self[delay]);
    };
    this.toggle = function() {
      if (!tooltip) { self.show(); } 
      else { self.hide(); }
    };
  
    // init
    if ( !(stringTooltip in element) ) { // prevent adding event handlers twice
      element[setAttribute](dataOriginalTitle,titleString);
      element.removeAttribute(title);
      on(element, mouseHover[0], self.show);
      on(element, mouseHover[1], self.hide);
    }
    element[stringTooltip] = self;
  };
  
  // TOOLTIP DATA API
  // =================
  supports[push]( [ stringTooltip, Tooltip, '['+dataToggle+'="tooltip"]' ] );
  
  
  
  /* Native Javascript for Bootstrap | Initialize Data API
  --------------------------------------------------------*/
  var initializeDataAPI = function( constructor, collection ){
      for (var i=0, l=collection[length]; i<l; i++) {
        new constructor(collection[i]);
      }
    },
    initCallback = BSN.initCallback = function(lookUp){
      lookUp = lookUp || DOC;
      for (var i=0, l=supports[length]; i<l; i++) {
        initializeDataAPI( supports[i][1], lookUp[querySelectorAll] (supports[i][2]) );
      }
    };
  
  // bulk initialize all components
  DOC[body] ? initCallback() : on( DOC, 'DOMContentLoaded', function(){ initCallback(); } );
  
  return {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Toast: Toast,
    Tooltip: Tooltip
  };
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/form-serialize/index.js":
/*!**********************************************!*\
  !*** ./node_modules/form-serialize/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// get successful control from form and assemble into object
// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2

// types which indicate a submit action and are not successful controls
// these will be ignored
var k_r_submitter = /^(?:submit|button|image|reset|file)$/i;

// node names which could be successful controls
var k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;

// Matches bracket notation.
var brackets = /(\[[^\[\]]*\])/g;

// serializes form fields
// @param form MUST be an HTMLForm element
// @param options is an optional argument to configure the serialization. Default output
// with no options specified is a url encoded string
//    - hash: [true | false] Configure the output type. If true, the output will
//    be a js object.
//    - serializer: [function] Optional serializer function to override the default one.
//    The function takes 3 arguments (result, key, value) and should return new result
//    hash and url encoded str serializers are provided with this module
//    - disabled: [true | false]. If true serialize disabled fields.
//    - empty: [true | false]. If true serialize empty fields
function serialize(form, options) {
    if (typeof options != 'object') {
        options = { hash: !!options };
    }
    else if (options.hash === undefined) {
        options.hash = true;
    }

    var result = (options.hash) ? {} : '';
    var serializer = options.serializer || ((options.hash) ? hash_serializer : str_serialize);

    var elements = form && form.elements ? form.elements : [];

    //Object store each radio and set if it's empty or not
    var radio_store = Object.create(null);

    for (var i=0 ; i<elements.length ; ++i) {
        var element = elements[i];

        // ingore disabled fields
        if ((!options.disabled && element.disabled) || !element.name) {
            continue;
        }
        // ignore anyhting that is not considered a success field
        if (!k_r_success_contrls.test(element.nodeName) ||
            k_r_submitter.test(element.type)) {
            continue;
        }

        var key = element.name;
        var val = element.value;

        // we can't just use element.value for checkboxes cause some browsers lie to us
        // they say "on" for value when the box isn't checked
        if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {
            val = undefined;
        }

        // If we want empty elements
        if (options.empty) {
            // for checkbox
            if (element.type === 'checkbox' && !element.checked) {
                val = '';
            }

            // for radio
            if (element.type === 'radio') {
                if (!radio_store[element.name] && !element.checked) {
                    radio_store[element.name] = false;
                }
                else if (element.checked) {
                    radio_store[element.name] = true;
                }
            }

            // if options empty is true, continue only if its radio
            if (val == undefined && element.type == 'radio') {
                continue;
            }
        }
        else {
            // value-less fields are ignored unless options.empty is true
            if (!val) {
                continue;
            }
        }

        // multi select boxes
        if (element.type === 'select-multiple') {
            val = [];

            var selectOptions = element.options;
            var isSelectedOptions = false;
            for (var j=0 ; j<selectOptions.length ; ++j) {
                var option = selectOptions[j];
                var allowedEmpty = options.empty && !option.value;
                var hasValue = (option.value || allowedEmpty);
                if (option.selected && hasValue) {
                    isSelectedOptions = true;

                    // If using a hash serializer be sure to add the
                    // correct notation for an array in the multi-select
                    // context. Here the name attribute on the select element
                    // might be missing the trailing bracket pair. Both names
                    // "foo" and "foo[]" should be arrays.
                    if (options.hash && key.slice(key.length - 2) !== '[]') {
                        result = serializer(result, key + '[]', option.value);
                    }
                    else {
                        result = serializer(result, key, option.value);
                    }
                }
            }

            // Serialize if no selected options and options.empty is true
            if (!isSelectedOptions && options.empty) {
                result = serializer(result, key, '');
            }

            continue;
        }

        result = serializer(result, key, val);
    }

    // Check for all empty radio buttons and serialize them with key=""
    if (options.empty) {
        for (var key in radio_store) {
            if (!radio_store[key]) {
                result = serializer(result, key, '');
            }
        }
    }

    return result;
}

function parse_keys(string) {
    var keys = [];
    var prefix = /^([^\[\]]*)/;
    var children = new RegExp(brackets);
    var match = prefix.exec(string);

    if (match[1]) {
        keys.push(match[1]);
    }

    while ((match = children.exec(string)) !== null) {
        keys.push(match[1]);
    }

    return keys;
}

function hash_assign(result, keys, value) {
    if (keys.length === 0) {
        result = value;
        return result;
    }

    var key = keys.shift();
    var between = key.match(/^\[(.+?)\]$/);

    if (key === '[]') {
        result = result || [];

        if (Array.isArray(result)) {
            result.push(hash_assign(null, keys, value));
        }
        else {
            // This might be the result of bad name attributes like "[][foo]",
            // in this case the original `result` object will already be
            // assigned to an object literal. Rather than coerce the object to
            // an array, or cause an exception the attribute "_values" is
            // assigned as an array.
            result._values = result._values || [];
            result._values.push(hash_assign(null, keys, value));
        }

        return result;
    }

    // Key is an attribute name and can be assigned directly.
    if (!between) {
        result[key] = hash_assign(result[key], keys, value);
    }
    else {
        var string = between[1];
        // +var converts the variable into a number
        // better than parseInt because it doesn't truncate away trailing
        // letters and actually fails if whole thing is not a number
        var index = +string;

        // If the characters between the brackets is not a number it is an
        // attribute name and can be assigned directly.
        if (isNaN(index)) {
            result = result || {};
            result[string] = hash_assign(result[string], keys, value);
        }
        else {
            result = result || [];
            result[index] = hash_assign(result[index], keys, value);
        }
    }

    return result;
}

// Object/hash encoding serializer.
function hash_serializer(result, key, value) {
    var matches = key.match(brackets);

    // Has brackets? Use the recursive assignment function to walk the keys,
    // construct any missing objects in the result tree and make the assignment
    // at the end of the chain.
    if (matches) {
        var keys = parse_keys(key);
        hash_assign(result, keys, value);
    }
    else {
        // Non bracket notation can make assignments directly.
        var existing = result[key];

        // If the value has been assigned already (for instance when a radio and
        // a checkbox have the same name attribute) convert the previous value
        // into an array before pushing into it.
        //
        // NOTE: If this requirement were removed all hash creation and
        // assignment could go through `hash_assign`.
        if (existing) {
            if (!Array.isArray(existing)) {
                result[key] = [ existing ];
            }

            result[key].push(value);
        }
        else {
            result[key] = value;
        }
    }

    return result;
}

// urlform encoding serializer
function str_serialize(result, key, value) {
    // encode newlines as \r\n cause the html spec says so
    value = value.replace(/(\r)?\n/g, '\r\n');
    value = encodeURIComponent(value);

    // spaces should be '+' rather than '%20'.
    value = value.replace(/%20/g, '+');
    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
}

module.exports = serialize;


/***/ }),

/***/ "./node_modules/glightbox/dist/js/glightbox.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/glightbox/dist/js/glightbox.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function l(t,e){var i=function(t,e){var i=o(t)*o(e);if(0===i)return 0;var n=function(t,e){return t.x*e.x+t.y*e.y}(t,e)/i;return n>1&&(n=1),Math.acos(n)}(t,e);return function(t,e){return t.x*e.y-e.x*t.y}(t,e)>0&&(i*=-1),180*i/Math.PI}var r=function(){function t(i){e(this,t),this.handlers=[],this.el=i}return n(t,[{key:"add",value:function(t){this.handlers.push(t)}},{key:"del",value:function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)}},{key:"dispatch",value:function(){for(var t=0,e=this.handlers.length;t<e;t++){var i=this.handlers[t];"function"==typeof i&&i.apply(this.el,arguments)}}}]),t}();function a(t,e){var i=new r(t);return i.add(e),i}var c=function(){function t(i,n){e(this,t),this.element="string"==typeof i?document.querySelector(i):i,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var s=function(){};this.rotate=a(this.element,n.rotate||s),this.touchStart=a(this.element,n.touchStart||s),this.multipointStart=a(this.element,n.multipointStart||s),this.multipointEnd=a(this.element,n.multipointEnd||s),this.pinch=a(this.element,n.pinch||s),this.swipe=a(this.element,n.swipe||s),this.tap=a(this.element,n.tap||s),this.doubleTap=a(this.element,n.doubleTap||s),this.longTap=a(this.element,n.longTap||s),this.singleTap=a(this.element,n.singleTap||s),this.pressMove=a(this.element,n.pressMove||s),this.twoFingerPressMove=a(this.element,n.twoFingerPressMove||s),this.touchMove=a(this.element,n.touchMove||s),this.touchEnd=a(this.element,n.touchEnd||s),this.touchCancel=a(this.element,n.touchCancel||s),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return n(t,[{key:"start",value:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV;if(t.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var i={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};e.x=i.x,e.y=i.y,this.pinchStartLen=o(e),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}}},{key:"move",value:function(t){if(t.touches){var e=this.preV,i=t.touches.length,n=t.touches[0].pageX,s=t.touches[0].pageY;if(this.isDoubleTap=!1,i>1){var r=t.touches[1].pageX,a=t.touches[1].pageY,c={x:t.touches[1].pageX-n,y:t.touches[1].pageY-s};null!==e.x&&(this.pinchStartLen>0&&(t.zoom=o(c)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=l(c,e),this.rotate.dispatch(t,this.element)),e.x=c.x,e.y=c.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(n-this.x2+r-this.sx2)/2,t.deltaY=(s-this.y2+a-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=r,this.sy2=a}else{if(null!==this.x2){t.deltaX=n-this.x2,t.deltaY=s-this.y2;var h=Math.abs(this.x1-this.x2),u=Math.abs(this.y1-this.y2);(h>10||u>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=n,this.y2=s,i>1&&t.preventDefault()}}},{key:"end",value:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){e.swipe.dispatch(t,e.element)},0)):(this.tapTimeout=setTimeout(function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)},0),e.isDoubleTap||(e.singleTapTimeout=setTimeout(function(){e.singleTap.dispatch(t,e.element)},250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(t,e,i,n){return Math.abs(t-e)>=Math.abs(i-n)?t-e>0?"Left":"Right":i-n>0?"Up":"Down"}},{key:"on",value:function(t,e){this[t]&&this[t].add(e)}},{key:"off",value:function(t,e){this[t]&&this[t].del(e)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),t}(),h=function(){function t(i,n){var s=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e(this,t),this.img=i,this.slide=n,this.onclose=o,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",function(t){return s.dragStart(t)},!1),this.img.addEventListener("mouseup",function(t){return s.dragEnd(t)},!1),this.img.addEventListener("mousemove",function(t){return s.drag(t)},!1),this.img.addEventListener("click",function(t){if(!s.zoomedIn)return s.zoomIn();s.zoomedIn&&!s.dragging&&s.zoomOut()},!1),this.img.setZoomEvents=!0}return n(t,[{key:"zoomIn",value:function(){var t=this.widowWidth();if(!(this.zoomedIn||t<=768)){var e=this.img;if(e.setAttribute("data-style",e.getAttribute("style")),e.style.maxWidth=e.naturalWidth+"px",e.style.maxHeight=e.naturalHeight+"px",e.naturalWidth>t){var i=t/2-e.naturalWidth/2;this.setTranslate(this.img.parentNode,i,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&"function"==typeof this.onclose&&this.onclose()}},{key:"dragStart",value:function(t){t.preventDefault(),this.zoomedIn?("touchstart"===t.type?(this.initialX=t.touches[0].clientX-this.xOffset,this.initialY=t.touches[0].clientY-this.yOffset):(this.initialX=t.clientX-this.xOffset,this.initialY=t.clientY-this.yOffset),t.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(t){var e=this;t.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout(function(){e.dragging=!1,e.img.isDragging=!1,e.img.classList.remove("dragging")},100)}},{key:"drag",value:function(t){this.active&&(t.preventDefault(),"touchmove"===t.type?(this.currentX=t.touches[0].clientX-this.initialX,this.currentY=t.touches[0].clientY-this.initialY):(this.currentX=t.clientX-this.initialX,this.currentY=t.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(t){if(this.zoomedIn){var e=t.clientX-this.img.naturalWidth/2,i=t.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,e,i)}}},{key:"setTranslate",value:function(t,e,i){t.style.transform="translate3d("+e+"px, "+i+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),t}(),u=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),d=null!==u||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,g=document.getElementsByTagName("html")[0],p=function(){var t,e=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(void 0!==e.style[t])return i[t]}(),v=function(){var t,e=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(t in i)if(void 0!==e.style[t])return i[t]}(),f=Date.now(),m={},y={selector:"glightbox",elements:null,skin:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,descPosition:"bottom",width:900,height:506,videosWidth:960,beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,onOpen:null,onClose:null,loopAtEnd:!1,touchNavigation:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plyr:{css:"https://cdn.plyr.io/3.5.6/plyr.css",js:"https://cdn.plyr.io/3.5.6/plyr.js",ratio:"16:9",config:{youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoomIn",closeEffect:"zoomOut",slideEffect:"slide",moreText:"See more",moreLength:60,lightboxHtml:"",cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slide_back:{in:"slideInLeft",out:"slideOutRight"}},svg:{close:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'}};y.slideHtml='<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';function b(){var t={},e=!1,i=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var s=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e&&"[object Object]"===Object.prototype.toString.call(i[n])?t[n]=b(!0,t[n],i[n]):t[n]=i[n])};i<n;i++){s(arguments[i])}return t}y.lightboxHtml='<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2">{closeSVG}</button>\n</div>\n</div>';var x={isFunction:function(t){return"function"==typeof t},isString:function(t){return"string"==typeof t},isNode:function(t){return!(!t||!t.nodeType||1!=t.nodeType)},isArray:function(t){return Array.isArray(t)},isArrayLike:function(t){return t&&t.length&&isFinite(t.length)},isObject:function(e){return"object"===t(e)&&null!=e&&!x.isFunction(e)&&!x.isArray(e)},isNil:function(t){return null==t},has:function(t,e){return null!==t&&hasOwnProperty.call(t,e)},size:function(t){if(x.isObject(t)){if(t.keys)return t.keys().length;var e=0;for(var i in t)x.has(t,i)&&e++;return e}return t.length},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}};function w(t,e){if((x.isNode(t)||t===window||t===document)&&(t=[t]),x.isArrayLike(t)||x.isObject(t)||(t=[t]),0!=x.size(t))if(x.isArrayLike(t)&&!x.isObject(t))for(var i=t.length,n=0;n<i&&!1!==e.call(t[n],t[n],n,t);n++);else if(x.isObject(t))for(var s in t)if(x.has(t,s)&&!1===e.call(t[s],t[s],s,t))break}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t[f]=t[f]||[],s={all:n,evt:null,found:null};return e&&i&&x.size(n)>0&&w(n,function(t,n){if(t.eventName==e&&t.fn.toString()==i.toString())return s.found=!0,s.evt=n,!1}),s}function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.onElement,n=e.withCallback,s=e.avoidDuplicate,o=void 0===s||s,l=e.once,r=void 0!==l&&l,a=e.useCapture,c=void 0!==a&&a,h=arguments.length>2?arguments[2]:void 0,u=i||[];function d(t){x.isFunction(n)&&n.call(h,t,this),r&&d.destroy()}return x.isString(u)&&(u=document.querySelectorAll(u)),d.destroy=function(){w(u,function(e){var i=S(e,t,d);i.found&&i.all.splice(i.evt,1),e.removeEventListener&&e.removeEventListener(t,d,c)})},w(u,function(e){var i=S(e,t,d);(e.addEventListener&&o&&!i.found||!o)&&(e.addEventListener(t,d,c),i.all.push({eventName:t,fn:d}))}),d}function k(t,e){w(e.split(" "),function(e){return t.classList.add(e)})}function E(t,e){w(e.split(" "),function(e){return t.classList.remove(e)})}function A(t,e){return t.classList.contains(e)}function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t||""===e)return!1;if("none"==e)return x.isFunction(i)&&i(),!1;var n=e.split(" ");w(n,function(e){k(t,"g"+e)}),T(v,{onElement:t,avoidDuplicate:!1,once:!0,withCallback:function(t,e){w(n,function(t){E(e,"g"+t)}),x.isFunction(i)&&i()}})}function L(t){var e=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=t;i.firstChild;)e.appendChild(i.firstChild);return e}function M(t,e){for(;t!==document.body;){if("function"==typeof(t=t.parentElement).matches?t.matches(e):t.msMatchesSelector(e))return t}}function O(t){t.style.display="block"}function z(t){t.style.display="none"}function q(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function N(t){if(A(t.target,"plyr--html5")){var e=M(t.target,".gslide-media");"enterfullscreen"==t.type&&k(e,"fullscreen"),"exitfullscreen"==t.type&&E(e,"fullscreen")}}var I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,i={href:"",title:"",type:"",description:"",descPosition:e.descPosition,effect:"",width:"",height:"",node:t};if(x.isObject(t)&&!x.isNode(t))return b(i,t);var n="",s=t.getAttribute("data-glightbox"),o=t.nodeName.toLowerCase();if("a"===o&&(n=t.href),"img"===o&&(n=t.src),i.href=n,w(i,function(n,s){x.has(e,s)&&"width"!==s&&(i[s]=e[s]);var o=t.dataset[s];x.isNil(o)||(i[s]=o)}),i.type||(i.type=W(n)),x.isNil(s)){if("a"==o){var l=t.title;x.isNil(l)||""===l||(i.title=l)}if("img"==o){var r=t.alt;x.isNil(r)||""===r||(i.title=r)}var a=t.getAttribute("data-description");x.isNil(a)||""===a||(i.description=a)}else{var c=[];w(i,function(t,e){c.push(";\\s?"+e)}),c=c.join("\\s?:|"),""!==s.trim()&&w(i,function(t,e){var n=s,o=new RegExp("s?"+e+"s?:s?(.*?)("+c+"s?:|$)"),l=n.match(o);if(l&&l.length&&l[1]){var r=l[1].trim().replace(/;\s*$/,"");i[e]=r}})}if(i.description&&"."==i.description.substring(0,1)&&document.querySelector(i.description))i.description=document.querySelector(i.description).innerHTML;else{var h=t.querySelector(".glightbox-desc");h&&(i.description=h.innerHTML)}var u="video"==i.type?e.videosWidth:e.width,d=e.height;return i.width=x.has(i,"width")&&""!==i.width?i.width:u,i.height=x.has(i,"height")&&""!==i.height?i.height:d,i},D=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(A(e,"loaded"))return!1;x.isFunction(this.settings.beforeSlideLoad)&&this.settings.beforeSlideLoad(e,i);var s=i.type,o=i.descPosition,l=e.querySelector(".gslide-media"),r=e.querySelector(".gslide-title"),a=e.querySelector(".gslide-desc"),c=e.querySelector(".gdesc-inner"),d=n;if(x.isFunction(this.settings.afterSlideLoad)&&(d=function(){x.isFunction(n)&&n(),t.settings.afterSlideLoad(e,i)}),""==i.title&&""==i.description?c&&c.parentNode.parentNode.removeChild(c.parentNode):(r&&""!==i.title?r.innerHTML=i.title:r.parentNode.removeChild(r),a&&""!==i.description?u&&this.settings.moreLength>0?(i.smallDescription=G(i.description,this.settings.moreLength,this.settings.moreText),a.innerHTML=i.smallDescription,Z.apply(this,[a,i])):a.innerHTML=i.description:a.parentNode.removeChild(a),k(l.parentNode,"desc-".concat(o)),k(c.parentNode,"description-".concat(o))),k(l,"gslide-".concat(s)),k(e,"loaded"),"video"===s)return k(l.parentNode,"gvideo-container"),l.insertBefore(L('<div class="gvideo-wrapper"></div>'),l.firstChild),void X.apply(this,[e,i,d]);if("external"===s){var g=Y({url:i.href,width:i.width,height:i.height,callback:d});return l.parentNode.style.maxWidth="".concat(i.width,"px"),void l.appendChild(g)}if("inline"!==s){if("image"===s){var p=new Image;return p.addEventListener("load",function(){!u&&p.naturalWidth>p.offsetWidth&&(k(p,"zoomable"),new h(p,e,function(){t.resize(e)})),x.isFunction(d)&&d()},!1),p.src=i.href,void l.insertBefore(p,l.firstChild)}x.isFunction(d)&&d()}else F.apply(this,[e,i,d])};function X(t,e,i){var n=this,s="gvideo"+e.index,o=t.querySelector(".gvideo-wrapper");B(this.settings.plyr.css);var l=e.href,r=location.protocol.replace(":",""),a="",c="",h=!1;"file"==r&&(r="http"),o.parentNode.style.maxWidth="".concat(e.width,"px"),B(this.settings.plyr.js,"Plyr",function(){if(l.match(/vimeo\.com\/([0-9]*)/)){var t=/vimeo.*\/(\d+)/i.exec(l);a="vimeo",c=t[1]}if(l.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||l.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||l.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)){var r=function(t){var e="";e=void 0!==(t=t.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?(e=t[2].split(/[^0-9a-z_\-]/i))[0]:t;return e}(l);a="youtube",c=r}if(null!==l.match(/\.(mp4|ogg|webm)$/)){a="local";var u='<video id="'+s+'" ';u+='style="background:#000; max-width: '.concat(e.width,'px;" '),u+='preload="metadata" ',u+='x-webkit-airplay="allow" ',u+='webkit-playsinline="" ',u+="controls ",u+='class="gvideo-local">';var d=l.toLowerCase().split(".").pop(),g={mp4:"",ogg:"",webm:""};for(var p in g[d]=l,g)if(g.hasOwnProperty(p)){var v=g[p];e.hasOwnProperty(p)&&(v=e[p]),""!==v&&(u+='<source src="'.concat(v,'" type="video/').concat(p,'">'))}h=L(u+="</video>")}var f=h||L('<div id="'.concat(s,'" data-plyr-provider="').concat(a,'" data-plyr-embed-id="').concat(c,'"></div>'));k(o,"".concat(a,"-video gvideo")),o.appendChild(f),o.setAttribute("data-id",s);var y=x.has(n.settings.plyr,"config")?n.settings.plyr.config:{},b=new Plyr("#"+s,y);b.on("ready",function(t){var e=t.detail.plyr;m[s]=e,x.isFunction(i)&&i()}),b.on("enterfullscreen",N),b.on("exitfullscreen",N)})}function Y(t){var e=t.url,i=t.width,n=t.height,s=t.allow,o=t.callback,l=t.appendTo,r=document.createElement("iframe"),a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return r.className="vimeo-video gvideo",r.src=e,n&&(r.style.height=u&&a<767?"":"".concat(n,"px")),i&&(r.style.width="".concat(i,"px")),s&&r.setAttribute("allow",s),r.onload=function(){k(r,"node-ready"),x.isFunction(o)&&o()},l&&l.appendChild(r),r}function B(t,e,i){if(x.isNil(t))console.error("Inject videos api error");else{var n;if(x.isFunction(e)&&(i=e,e=!1),-1!==t.indexOf(".css")){if((n=document.querySelectorAll('link[href="'+t+'"]'))&&n.length>0)return void(x.isFunction(i)&&i());var s=document.getElementsByTagName("head")[0],o=s.querySelectorAll('link[rel="stylesheet"]'),l=document.createElement("link");return l.rel="stylesheet",l.type="text/css",l.href=t,l.media="all",o?s.insertBefore(l,o[0]):s.appendChild(l),void(x.isFunction(i)&&i())}if((n=document.querySelectorAll('script[src="'+t+'"]'))&&n.length>0){if(x.isFunction(i)){if(x.isString(e))return P(function(){return void 0!==window[e]},function(){i()}),!1;i()}}else{var r=document.createElement("script");r.type="text/javascript",r.src=t,r.onload=function(){if(x.isFunction(i)){if(x.isString(e))return P(function(){return void 0!==window[e]},function(){i()}),!1;i()}},document.body.appendChild(r)}}}function P(t,e,i,n){if(t())e();else{var s;i||(i=100);var o=setInterval(function(){t()&&(clearInterval(o),s&&clearTimeout(s),e())},i);n&&(s=setTimeout(function(){clearInterval(o)},n))}}function F(t,e,i){var n=this,s=t.querySelector(".gslide-media"),o=e.href.split("#").pop().trim(),l=document.getElementById(o);if(!l)return!1;var r=l.cloneNode(!0);r.style.height=x.isNumber(e.height)?"".concat(e.height,"px"):e.height,r.style.maxWidth=x.isNumber(e.width)?"".concat(e.width,"px"):e.width,k(r,"ginlined-content"),s.appendChild(r),this.events["inlineclose"+o]=T("click",{onElement:s.querySelectorAll(".gtrigger-close"),withCallback:function(t){t.preventDefault(),n.close()}}),x.isFunction(i)&&i()}var W=function(t){var e=t;if(null!==(t=t.toLowerCase()).match(/\.(jpeg|jpg|gif|png|apn|webp|svg)$/))return"image";if(t.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||t.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||t.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))return"video";if(t.match(/vimeo\.com\/([0-9]*)/))return"video";if(null!==t.match(/\.(mp4|ogg|webm)$/))return"video";if(t.indexOf("#")>-1&&""!==e.split("#").pop().trim())return"inline";return t.includes("gajax=true")?"ajax":"external"};function _(){var t=this;if(this.events.hasOwnProperty("keyboard"))return!1;this.events.keyboard=T("keydown",{onElement:window,withCallback:function(e,i){var n=(e=e||window.event).keyCode;if(9==n){e.preventDefault();var o=document.querySelectorAll(".gbtn");if(!o||o.length<=0)return;var l=s(o).filter(function(t){return A(t,"focused")});if(!l.length){var r=document.querySelector('.gbtn[tabindex="0"]');return void(r&&(r.focus(),k(r,"focused")))}o.forEach(function(t){return E(t,"focused")});var a=l[0].getAttribute("tabindex");a=a||"0";var c=parseInt(a)+1;c>o.length-1&&(c="0");var h=document.querySelector('.gbtn[tabindex="'.concat(c,'"]'));h&&(h.focus(),k(h,"focused"))}39==n&&t.nextSlide(),37==n&&t.prevSlide(),27==n&&t.close()}})}function j(){var t=this;if(this.events.hasOwnProperty("touch"))return!1;var e,i,n,s=q(),o=s.width,l=s.height,r=!1,a=null,h=null,u=null,d=!1,g=1,p=1,v=!1,f=!1,m=null,y=null,b=null,x=null,w=0,S=0,T=!1,C=!1,L={},M={},O=0,z=0,N=this,I=document.getElementById("glightbox-slider"),D=document.querySelector(".goverlay"),X=new c(I,{touchStart:function(t){if(A(t.targetTouches[0].target,"ginner-container"))return r=!1,!1;r=!0,M=t.targetTouches[0],L.pageX=t.targetTouches[0].pageX,L.pageY=t.targetTouches[0].pageY,O=t.targetTouches[0].clientX,z=t.targetTouches[0].clientY,a=N.activeSlide,h=a.querySelector(".gslide-media"),n=a.querySelector(".gslide-inline"),u=null,A(h,"gslide-image")&&(u=h.querySelector("img")),E(D,"greset")},touchMove:function(t){if(r&&(M=t.targetTouches[0],!v&&!f)){if(n&&n.offsetHeight>l){var s=L.pageX-M.pageX;if(Math.abs(s)<=13)return!1}d=!0;var a,c=t.targetTouches[0].clientX,g=t.targetTouches[0].clientY,p=O-c,m=z-g;if(Math.abs(p)>Math.abs(m)?(T=!1,C=!0):(C=!1,T=!0),e=M.pageX-L.pageX,w=100*e/o,i=M.pageY-L.pageY,S=100*i/l,T&&u&&(a=1-Math.abs(i)/l,D.style.opacity=a),C&&(a=1-Math.abs(e)/o,h.style.opacity=a),!u)return H(h,"translate3d(".concat(w,"%, 0, 0)"));H(h,"translate3d(".concat(w,"%, ").concat(S,"%, 0)"))}},touchEnd:function(){if(r){if(d=!1,f||v)return b=m,void(x=y);var e=Math.abs(parseInt(S)),i=Math.abs(parseInt(w));if(!(e>35&&u))return e<35&&i<25?(k(D,"greset"),D.style.opacity=1,V(h)):void 0;t.close()}},multipointEnd:function(){setTimeout(function(){v=!1},50)},multipointStart:function(){v=!0,g=p||1},pinch:function(t){if(!u||d)return!1;v=!0,u.scaleX=u.scaleY=g*t.zoom;var e=g*t.zoom;if(f=!0,e<=1)return f=!1,e=1,x=null,b=null,m=null,y=null,void u.setAttribute("style","");e>4.5&&(e=4.5),u.style.transform="scale3d(".concat(e,", ").concat(e,", 1)"),p=e},pressMove:function(t){if(f&&!v){var e=M.pageX-L.pageX,i=M.pageY-L.pageY;b&&(e+=b),x&&(i+=x),m=e,y=i;var n="translate3d(".concat(e,"px, ").concat(i,"px, 0)");p&&(n+=" scale3d(".concat(p,", ").concat(p,", 1)")),H(u,n)}},swipe:function(e){if(!f)if(v)v=!1;else{if("Left"==e.direction){if(t.index==t.elements.length-1)return V(h);t.nextSlide()}if("Right"==e.direction){if(0==t.index)return V(h);t.prevSlide()}}}});this.events.touch=X}function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""==e)return t.style.webkitTransform="",t.style.MozTransform="",t.style.msTransform="",t.style.OTransform="",t.style.transform="",!1;t.style.webkitTransform=e,t.style.MozTransform=e,t.style.msTransform=e,t.style.OTransform=e,t.style.transform=e}function V(t){var e=A(t,"gslide-media")?t:t.querySelector(".gslide-media"),i=t.querySelector(".gslide-description");k(e,"greset"),H(e,"translate3d(0, 0, 0)");T(p,{onElement:e,once:!0,withCallback:function(t,i){E(e,"greset")}});e.style.opacity="",i&&(i.style.opacity="")}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=i;if((t=t.trim()).length<=e)return t;var s=t.substr(0,e-1);return n?s+'... <a href="#" class="desc-more">'+i+"</a>":s}function Z(t,e){var i=t.querySelector(".desc-more");if(!i)return!1;T("click",{onElement:i,withCallback:function(t,i){t.preventDefault();var n=document.body,s=M(i,".gslide-desc");if(!s)return!1;s.innerHTML=e.description,k(n,"gdesc-open");var o=T("click",{onElement:[n,M(s,".gslide-description")],withCallback:function(t,i){"a"!==t.target.nodeName.toLowerCase()&&(E(n,"gdesc-open"),k(n,"gdesc-closed"),s.innerHTML=e.smallDescription,Z(s,e),setTimeout(function(){E(n,"gdesc-closed")},400),o.destroy())}})}})}var R=function(){function t(i){e(this,t),this.settings=b(y,i||{}),this.effectsClasses=this.getAnimationClasses(),this.slidesData={}}return n(t,[{key:"init",value:function(){var t=this;this.baseEvents=T("click",{onElement:".".concat(this.settings.selector),withCallback:function(e,i){e.preventDefault(),t.open(i)}})}},{key:"open",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.elements=this.getElements(t),0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var e=this.settings.startAt;t&&x.isNil(e)&&(e=this.elements.indexOf(t))<0&&(e=0),x.isNil(e)&&(e=0),this.build(),C(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var i=document.body;if(i.style.width="".concat(i.offsetWidth,"px"),k(i,"glightbox-open"),k(g,"glightbox-open"),u&&(k(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(e,!0),1==this.elements.length?(z(this.prevButton),z(this.nextButton)):(O(this.prevButton),O(this.nextButton)),this.lightboxOpen=!0,x.isFunction(this.settings.onOpen)&&this.settings.onOpen(),u&&d&&this.settings.touchNavigation)return j.apply(this),!1;this.settings.keyboardNavigation&&_.apply(this)}},{key:"showSlide",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];O(this.loader),this.index=parseInt(e);var n=this.slidesContainer.querySelector(".current");n&&E(n,"current"),this.slideAnimateOut();var s=this.slidesContainer.querySelectorAll(".gslide")[e];if(A(s,"loaded"))this.slideAnimateIn(s,i),z(this.loader);else{O(this.loader);var o=I(this.elements[e],this.settings);o.index=e,this.slidesData[e]=o,D.apply(this,[s,o,function(){z(t.loader),t.resize(),t.slideAnimateIn(s,i)}])}this.slideDescription=s.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&A(this.slideDescription.parentNode,"gslide-media"),this.preloadSlide(e+1),this.preloadSlide(e-1),E(this.nextButton,"disabled"),E(this.prevButton,"disabled"),0===e?k(this.prevButton,"disabled"):e===this.elements.length-1&&!0!==this.settings.loopAtEnd&&k(this.nextButton,"disabled"),this.activeSlide=s}},{key:"preloadSlide",value:function(t){var e=this;if(t<0||t>this.elements.length)return!1;if(x.isNil(this.elements[t]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[t];if(A(i,"loaded"))return!1;var n=I(this.elements[t],this.settings);n.index=t,this.slidesData[t]=n;var s=n.sourcetype;"video"==s||"external"==s?setTimeout(function(){D.apply(e,[i,n])},200):D.apply(this,[i,n])}},{key:"prevSlide",value:function(){var t=this.index-1;if(t<0)return!1;this.goToSlide(t)}},{key:"nextSlide",value:function(){var t=this.index+1;if(t>this.elements.length)return!1;this.goToSlide(t)}},{key:"goToSlide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t>-1&&(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,t<this.elements.length?this.showSlide(t):!0===this.settings.loopAtEnd&&(t=0,this.showSlide(t)))}},{key:"slideAnimateIn",value:function(t,e){var i=this,n=t.querySelector(".gslide-media"),s=t.querySelector(".gslide-description"),o={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide},l={index:this.index,slide:this.activeSlide};if(n.offsetWidth>0&&s&&(z(s),s.style.display=""),E(t,this.effectsClasses),e)C(t,this.settings.openEffect,function(){!u&&i.settings.autoplayVideos&&i.playSlideVideo(t),x.isFunction(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[o,l])});else{var r=this.settings.slideEffect,a="none"!==r?this.settings.cssEfects[r].in:r;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(a=this.settings.cssEfects.slide_back.in),C(t,a,function(){!u&&i.settings.autoplayVideos&&i.playSlideVideo(t),x.isFunction(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[o,l])})}setTimeout(function(){i.resize(t)},100),k(t,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var t=this.prevActiveSlide;E(t,this.effectsClasses),k(t,"prev");var e=this.settings.slideEffect,i="none"!==e?this.settings.cssEfects[e].out:e;this.stopSlideVideo(t),x.isFunction(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide},{index:this.index,slide:this.activeSlide}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(i=this.settings.cssEfects.slide_back.out),C(t,i,function(){var e=t.querySelector(".gslide-media"),i=t.querySelector(".gslide-description");e.style.transform="",E(e,"greset"),e.style.opacity="",i&&(i.style.opacity=""),E(t,"prev")})}},{key:"stopSlideVideo",value:function(t){x.isNumber(t)&&(t=this.slidesContainer.querySelectorAll(".gslide")[t]);var e=t?t.querySelector(".gvideo"):null;if(!e)return!1;var i=e.getAttribute("data-id");if(m&&x.has(m,i)){var n=m[i];n&&n.play&&n.pause()}}},{key:"playSlideVideo",value:function(t){x.isNumber(t)&&(t=this.slidesContainer.querySelectorAll(".gslide")[t]);var e=t.querySelector(".gvideo");if(!e)return!1;var i=e.getAttribute("data-id");if(m&&x.has(m,i)){var n=m[i];n&&n.play&&n.play()}}},{key:"setElements",value:function(t){this.settings.elements=t}},{key:"getElements",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.elements=[],!x.isNil(this.settings.elements)&&x.isArray(this.settings.elements))return this.settings.elements;var e=!1;if(null!==t){var i=t.getAttribute("data-gallery");i&&""!==i&&(e=document.querySelectorAll('[data-gallery="'.concat(i,'"]')))}return 0==e&&(e=document.querySelectorAll(".".concat(this.settings.selector))),e=Array.prototype.slice.call(e)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var t=[];for(var e in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(e)){var i=this.settings.cssEfects[e];t.push("g".concat(i.in)),t.push("g".concat(i.out))}return t.join(" ")}},{key:"build",value:function(){var t=this;if(this.built)return!1;var e=x.has(this.settings.svg,"next")?this.settings.svg.next:"",i=x.has(this.settings.svg,"prev")?this.settings.svg.prev:"",n=x.has(this.settings.svg,"close")?this.settings.svg.close:"",s=this.settings.lightboxHtml;s=L(s=(s=(s=s.replace(/{nextSVG}/g,e)).replace(/{prevSVG}/g,i)).replace(/{closeSVG}/g,n)),document.body.appendChild(s);var o=document.getElementById("glightbox-body");this.modal=o;var l=o.querySelector(".gclose");this.prevButton=o.querySelector(".gprev"),this.nextButton=o.querySelector(".gnext"),this.overlay=o.querySelector(".goverlay"),this.loader=o.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.events={},k(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&l&&(this.events.close=T("click",{onElement:l,withCallback:function(e,i){e.preventDefault(),t.close()}})),l&&!this.settings.closeButton&&l.parentNode.removeChild(l),this.nextButton&&(this.events.next=T("click",{onElement:this.nextButton,withCallback:function(e,i){e.preventDefault(),t.nextSlide()}})),this.prevButton&&(this.events.prev=T("click",{onElement:this.prevButton,withCallback:function(e,i){e.preventDefault(),t.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=T("click",{onElement:o,withCallback:function(e,i){A(document.body,"glightbox-mobile")||M(e.target,".ginner-container")||M(e.target,".gbtn")||A(e.target,"gnext")||A(e.target,"gprev")||t.close()}})),w(this.elements,function(){var e=L(t.settings.slideHtml);t.slidesContainer.appendChild(e)}),d&&k(document.body,"glightbox-touch"),this.events.resize=T("resize",{onElement:window,withCallback:function(){t.resize()}}),this.built=!0}},{key:"resize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(t=t||this.activeSlide,document.body.style.width="",document.body.style.width="".concat(document.body.offsetWidth,"px"),t&&!A(t,"zoomed")){var e=q(),i=t.querySelector(".gvideo-wrapper"),n=t.querySelector(".gslide-image"),s=this.slideDescription,o=e.width,l=e.height;if(o<=768?k(document.body,"glightbox-mobile"):E(document.body,"glightbox-mobile"),i||n){var r=!1;if(s&&(A(s,"description-bottom")||A(s,"description-top"))&&!A(s,"gabsolute")&&(r=!0),n)if(o<=768){var a=n.querySelector("img");a.setAttribute("style","")}else if(r){var c=s.offsetHeight,h=this.slidesData[this.index].width;h=h<=o?h+"px":"100%";var u=n.querySelector("img");u.setAttribute("style","max-height: calc(100vh - ".concat(c,"px)")),s.setAttribute("style","max-width: ".concat(u.offsetWidth,"px;"))}if(i){var d=this.settings.plyr.ratio.split(":"),g=this.slidesData[this.index].width,p=g/(parseInt(d[0])/parseInt(d[1]));if(p=Math.floor(p),r&&(l-=s.offsetHeight),l<p&&o>g){var v=i.offsetWidth,f=i.offsetHeight,m=l/f,y={width:v*m,height:f*m};i.parentNode.setAttribute("style","max-width: ".concat(y.width,"px")),r&&s.setAttribute("style","max-width: ".concat(y.width,"px;"))}else i.parentNode.style.maxWidth="".concat(g,"px"),r&&s.setAttribute("style","max-width: ".concat(g,"px;"))}}}}},{key:"reload",value:function(){this.init()}},{key:"close",value:function(){var t=this;if(this.closing)return!1;this.closing=!0,this.stopSlideVideo(this.activeSlide),k(this.modal,"glightbox-closing"),C(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),C(this.activeSlide,this.settings.closeEffect,function(){if(t.activeSlide=null,t.prevActiveSlideIndex=null,t.prevActiveSlide=null,t.built=!1,t.events){for(var e in t.events)t.events.hasOwnProperty(e)&&t.events[e].destroy();t.events=null}var i=document.body;E(g,"glightbox-open"),E(i,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile"),i.style.width="",t.modal.parentNode.removeChild(t.modal),x.isFunction(t.settings.onClose)&&t.settings.onClose(),t.closing=null})}},{key:"destroy",value:function(){this.close(),this.baseEvents.destroy()}}]),t}();return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new R(t);return e.init(),e}});

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./themes/ZetaMeds/assets/app.js":
/*!***************************************!*\
  !*** ./themes/ZetaMeds/assets/app.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./js/index */ "./themes/ZetaMeds/assets/js/index.js");

__webpack_require__(/*! ./scss/index.scss */ "./themes/ZetaMeds/assets/scss/index.scss");

__webpack_require__(/*! ./media/sylius-logo.png */ "./themes/ZetaMeds/assets/media/sylius-logo.png");

__webpack_require__(/*! ./media/zetameds-white-logo.png */ "./themes/ZetaMeds/assets/media/zetameds-white-logo.png");

__webpack_require__(/*! ./js/fontawesome */ "./themes/ZetaMeds/assets/js/fontawesome.js");

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/fontawesome.js":
/*!**************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/fontawesome.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fontawesomeSvgCore = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");

var _faStar = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faStar */ "./node_modules/@fortawesome/free-solid-svg-icons/faStar.js");

var _faShoppingBag = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShoppingBag */ "./node_modules/@fortawesome/free-solid-svg-icons/faShoppingBag.js");

var _faCheck = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheck */ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js");

var _faExclamationCircle = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExclamationCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamationCircle.js");

var _faInfoCircle = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faInfoCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faInfoCircle.js");

var _faChevronUp = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronUp */ "./node_modules/@fortawesome/free-solid-svg-icons/faChevronUp.js");

var _faMapMarkerAlt = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMapMarkerAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faMapMarkerAlt.js");

var _faShuttleVan = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShuttleVan */ "./node_modules/@fortawesome/free-solid-svg-icons/faShuttleVan.js");

var _faCreditCard = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCreditCard */ "./node_modules/@fortawesome/free-solid-svg-icons/faCreditCard.js");

var _faFlag = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faFlag */ "./node_modules/@fortawesome/free-solid-svg-icons/faFlag.js");

var _faCcMastercard = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faCcMastercard */ "./node_modules/@fortawesome/free-brands-svg-icons/faCcMastercard.js");

var _faCcVisa = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faCcVisa */ "./node_modules/@fortawesome/free-brands-svg-icons/faCcVisa.js");

var _faCcPaypal = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faCcPaypal */ "./node_modules/@fortawesome/free-brands-svg-icons/faCcPaypal.js");

var _faTimes = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTimes */ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js");

var _faSearch = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ "./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js");

var _faPlus = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPlus */ "./node_modules/@fortawesome/free-solid-svg-icons/faPlus.js");

var _faPencilAlt = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPencilAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faPencilAlt.js");

var _faSyncAlt = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSyncAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faSyncAlt.js");

// FontAwesome Icons
// Import icons one by one to reduce size of the output
_fontawesomeSvgCore.library.add(_faStar.faStar, _faShoppingBag.faShoppingBag, _faCheck.faCheck, _faExclamationCircle.faExclamationCircle, _faInfoCircle.faInfoCircle, _faChevronUp.faChevronUp, _faMapMarkerAlt.faMapMarkerAlt, _faShuttleVan.faShuttleVan, _faCreditCard.faCreditCard, _faFlag.faFlag, _faCcMastercard.faCcMastercard, _faCcVisa.faCcVisa, _faCcPaypal.faCcPaypal, _faTimes.faTimes, _faSearch.faSearch, _faPlus.faPlus, _faPencilAlt.faPencilAlt, _faSyncAlt.faSyncAlt);

_fontawesomeSvgCore.dom.watch();

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/index.js":
/*!********************************************!*\
  !*** ./themes/ZetaMeds/assets/js/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _glightbox = __webpack_require__(/*! glightbox */ "./node_modules/glightbox/dist/js/glightbox.min.js");

var _glightbox2 = _interopRequireDefault(_glightbox);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

__webpack_require__(/*! bootstrap.native/dist/bootstrap-native-v4 */ "./node_modules/bootstrap.native/dist/bootstrap-native-v4.js");

var _syliusRating = __webpack_require__(/*! ./sylius-rating */ "./themes/ZetaMeds/assets/js/sylius-rating.js");

var _syliusRating2 = _interopRequireDefault(_syliusRating);

var _syliusToggle = __webpack_require__(/*! ./sylius-toggle */ "./themes/ZetaMeds/assets/js/sylius-toggle.js");

var _syliusToggle2 = _interopRequireDefault(_syliusToggle);

var _syliusAddToCart = __webpack_require__(/*! ./sylius-add-to-cart */ "./themes/ZetaMeds/assets/js/sylius-add-to-cart.js");

var _syliusAddToCart2 = _interopRequireDefault(_syliusAddToCart);

var _syliusRemoveFromCart = __webpack_require__(/*! ./sylius-remove-from-cart */ "./themes/ZetaMeds/assets/js/sylius-remove-from-cart.js");

var _syliusRemoveFromCart2 = _interopRequireDefault(_syliusRemoveFromCart);

var _syliusApiToggle = __webpack_require__(/*! ./sylius-api-toggle */ "./themes/ZetaMeds/assets/js/sylius-api-toggle.js");

var _syliusApiToggle2 = _interopRequireDefault(_syliusApiToggle);

var _syliusApiLogin = __webpack_require__(/*! ./sylius-api-login */ "./themes/ZetaMeds/assets/js/sylius-api-login.js");

var _syliusApiLogin2 = _interopRequireDefault(_syliusApiLogin);

var _syliusVariantsPrices = __webpack_require__(/*! ./sylius-variants-prices */ "./themes/ZetaMeds/assets/js/sylius-variants-prices.js");

var _syliusVariantsPrices2 = _interopRequireDefault(_syliusVariantsPrices);

var _syliusVariantImages = __webpack_require__(/*! ./sylius-variant-images */ "./themes/ZetaMeds/assets/js/sylius-variant-images.js");

var _syliusVariantImages2 = _interopRequireDefault(_syliusVariantImages);

var _syliusProvinceField = __webpack_require__(/*! ./sylius-province-field */ "./themes/ZetaMeds/assets/js/sylius-province-field.js");

var _syliusProvinceField2 = _interopRequireDefault(_syliusProvinceField);

var _syliusAddressBook = __webpack_require__(/*! ./sylius-address-book */ "./themes/ZetaMeds/assets/js/sylius-address-book.js");

var _syliusAddressBook2 = _interopRequireDefault(_syliusAddressBook);

var _syliusLoadableForms = __webpack_require__(/*! ./sylius-loadable-forms */ "./themes/ZetaMeds/assets/js/sylius-loadable-forms.js");

var _syliusLoadableForms2 = _interopRequireDefault(_syliusLoadableForms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
// Global axios settings
_axios2.default.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
_axios2.default.defaults.headers.post.accept = 'application/json, text/javascript, */*; q=0.01';
_axios2.default.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
document.addEventListener('DOMContentLoaded', () => {
  // Lightbox
  const glightbox = (0, _glightbox2.default)({
    selector: 'glightbox'
  }); // Add to cart

  document.querySelectorAll('[data-js-add-to-cart="form"]').forEach(el => (0, _syliusAddToCart2.default)(el)); // Remove from cart

  document.querySelectorAll('[data-js-remove-from-cart-button]').forEach(el => (0, _syliusRemoveFromCart2.default)(el)); // Province field

  (0, _syliusProvinceField2.default)(); // Address book

  const syliusShippingAddress = document.querySelector('[data-js-address-book="sylius-shipping-address"]');

  if (syliusShippingAddress && syliusShippingAddress.querySelector('.dropdown')) {
    (0, _syliusAddressBook2.default)(syliusShippingAddress);
  }

  const syliusBillingAddress = document.querySelector('[data-js-address-book="sylius-billing-address"]');

  if (syliusBillingAddress && syliusBillingAddress.querySelector('.dropdown')) {
    (0, _syliusAddressBook2.default)(syliusBillingAddress);
  } // Variant prices


  (0, _syliusVariantsPrices2.default)(); // Star rating

  document.querySelectorAll('[data-js-rating]').forEach(elem => {
    new _syliusRating2.default(elem, {
      onRate(value) {
        document.querySelector(`#sylius_product_review_rating_${value - 1}`).checked = true;
      }

    });
  }); // Toggle and login from checkout

  if (document.querySelector('[data-js-login]')) {
    (0, _syliusApiToggle2.default)(document.querySelector('[data-js-login="email"]'));
    (0, _syliusApiLogin2.default)(document.querySelector('[data-js-login]'));
  } // Toggle billing address on the checkout page


  document.querySelectorAll('[data-js-toggle]').forEach(elem => new _syliusToggle2.default(elem)); // Product images for variants

  if (document.querySelector('[data-variant-options], [data-variant-code]')) {
    new _syliusVariantImages2.default();
  } // Loadable forms


  (0, _syliusLoadableForms2.default)();
});

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-add-to-cart.js":
/*!*********************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-add-to-cart.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _formSerialize = __webpack_require__(/*! form-serialize */ "./node_modules/form-serialize/index.js");

var _formSerialize2 = _interopRequireDefault(_formSerialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusAddToCart = el => {
  const element = el;
  const url = element.getAttribute('action');
  const redirectUrl = element.getAttribute('data-redirect');
  const validationElement = element.querySelector('[data-js-add-to-cart="error"]');
  element.addEventListener('submit', e => {
    const request = _axios2.default.post(url, (0, _formSerialize2.default)(element));

    e.preventDefault();
    request.then(() => {
      validationElement.classList.add('d-none');
      window.location.href = redirectUrl;
    });
    request.catch(error => {
      validationElement.classList.remove('d-none');
      let validationMessage = '';
      Object.entries(error.response.data).forEach(([, message]) => {
        validationMessage += message;
      });
      validationElement.innerHTML = validationMessage;
      undefined.element.classList.remove('loading');
    });
  });
};

exports.default = SyliusAddToCart;

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-address-book.js":
/*!**********************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-address-book.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const parseKey = function parseKey(key) {
  return key.replace(/(_\w)/g, words => words[1].toUpperCase());
};

const SyliusAddressBook = function SyliusAddressBook(el) {
  const element = el;
  const select = element.querySelector('.dropdown');

  const findByName = function findByName(name) {
    return element.querySelector(`[name*=${parseKey(name)}]`);
  };

  const changeEvent = new Event('change');
  select.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', e => {
      const choice = e.currentTarget;
      const choiceData = {};
      [...choice.attributes].forEach(attr => {
        if (attr.name.startsWith('data-')) {
          const camelCased = attr.name.replace('data-', '').replace(/-([a-z])/g, g => g[1].toUpperCase());
          choiceData[camelCased] = attr.value;
        }
      });
      const provinceCode = choiceData.provinceCode,
            provinceName = choiceData.provinceName;
      const provinceContainer = select.closest('[data-js-address-book]').querySelector('.province-container');
      element.querySelectorAll('input, select').forEach(input => {
        input.value = '';
      });
      Object.entries(choiceData).forEach(([property, value]) => {
        const field = findByName(property);

        if (property.indexOf('countryCode') !== -1) {
          field.value = value;
          field.dispatchEvent(changeEvent);
          const exists = setInterval(() => {
            const provinceCodeField = findByName('provinceCode');
            const provinceNameField = findByName('provinceName');

            if (!provinceContainer.hasAttribute('data-loading')) {
              if (provinceCodeField && provinceCodeField.length !== 0 && (provinceCode !== '' || provinceCode != undefined)) {
                provinceCodeField.value = provinceCode;
                clearInterval(exists);
              } else if (provinceNameField && provinceNameField.length !== 0 && (provinceName !== '' || provinceName != undefined)) {
                provinceNameField.value = provinceName;
                clearInterval(exists);
              }
            }
          }, 100);
        } else if (field) {
          field.value = value;
        }
      });
    });
  });
};

exports.default = SyliusAddressBook;

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-api-login.js":
/*!*******************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-api-login.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusApiLogin = el => {
  const element = el;
  const signInButton = element.querySelector('.btn');
  const validationField = element.querySelector('.alert');
  const url = signInButton.getAttribute('data-js-login-url');
  const emailField = element.querySelector('input[type="email"]');
  const passwordField = element.querySelector('input[type="password"]');
  const csrfTokenField = element.querySelector('input[type="hidden"]');
  const csrfTokenName = csrfTokenField.getAttribute('name');
  signInButton.addEventListener('click', e => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('_username', emailField.value);
    params.append('_password', passwordField.value);
    params.append([csrfTokenName], csrfTokenField.value);

    _axios2.default.post(url, params).then(() => {
      window.location.reload();
    }).catch(error => {
      validationField.classList.remove('d-none');
      validationField.innerHTML = error.response.data.message;
    });
  });
};

exports.default = SyliusApiLogin;

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-api-toggle.js":
/*!********************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-api-toggle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusApiToggle = el => {
  const element = el;
  const url = element.getAttribute('data-js-login-check-email-url');
  const toggleableElement = document.querySelector('[data-js-login="form"]');
  element.addEventListener('keyup', (0, _lodash2.default)(e => {
    toggleableElement.classList.add('d-none');

    if (e.target.value.length > 3) {
      _axios2.default.get(url, {
        params: {
          email: e.target.value
        }
      }).then(() => {
        toggleableElement.classList.remove('d-none');
      }).catch(() => {
        toggleableElement.classList.add('d-none');
      });
    }
  }, 1500));
};

exports.default = SyliusApiToggle;

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-loadable-forms.js":
/*!************************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-loadable-forms.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusLoadableForms = function SyliusLoadableForms() {
  const overlay = document.querySelector('[data-js-loading-overlay]');
  document.querySelectorAll('form.loadable').forEach(form => {
    form.appendChild(overlay);
    form.addEventListener('submit', () => {
      form.classList.add('loading');
    });
  });
};

exports.default = SyliusLoadableForms;

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-province-field.js":
/*!************************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-province-field.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const getProvinceInputValue = function getProvinceInputValue(valueSelector) {
  const val = valueSelector ? valueSelector.value : null;
  return !val || val == undefined ? '' : `value="${val}"`;
};

const SyliusProvinceField = function SyliusProvinceField() {
  const countrySelect = document.querySelectorAll('select[name$="[countryCode]"]');
  const changeEvent = new Event('change');
  countrySelect.forEach(countrySelectItem => {
    countrySelectItem.addEventListener('change', event => {
      const select = event.currentTarget;
      const provinceContainer = select.closest('.form-group').nextElementSibling;
      const provinceSelectFieldName = select.getAttribute('name').replace('country', 'province');
      const provinceInputFieldName = select.getAttribute('name').replace('countryCode', 'provinceName');
      const provinceSelectFieldId = select.getAttribute('id').replace('country', 'province');
      const provinceInputFieldId = select.getAttribute('id').replace('countryCode', 'provinceName');

      if (select.value === '' || select.value == undefined) {
        provinceContainer.innerHTML = '';
        return;
      }

      provinceContainer.setAttribute('data-loading', '');

      _axios2.default.get(provinceContainer.getAttribute('data-url'), {
        params: {
          countryCode: select.value
        }
      }).then(response => {
        if (!response.data.content) {
          provinceContainer.removeAttribute('data-loading');
          provinceContainer.innerHTML = '';
        } else if (response.data.content.indexOf('select') !== -1) {
          const provinceSelectValue = getProvinceInputValue(provinceContainer.querySelector('select > option[selected$="selected"]'));
          provinceContainer.innerHTML = response.data.content.replace('name="sylius_address_province"', `name="${provinceSelectFieldName}"${provinceSelectValue}`).replace('id="sylius_address_province"', `id="${provinceSelectFieldId}"`).replace('option value="" selected="selected"', 'option value=""').replace(`option ${provinceSelectValue}`, `option ${provinceSelectValue}" selected="selected"`);
          provinceContainer.querySelector('select').classList.add('form-control');
          provinceContainer.removeAttribute('data-loading');
        } else {
          const provinceInputValue = getProvinceInputValue(provinceContainer.querySelector('input'));
          provinceContainer.innerHTML = response.data.content.replace('name="sylius_address_province"', `name="${provinceInputFieldName}"${provinceInputValue}`).replace('id="sylius_address_province"', `id="${provinceInputFieldId}"`);
          provinceContainer.querySelector('input').classList.add('form-control');
          provinceContainer.removeAttribute('data-loading');
        }
      });
    });

    if (countrySelectItem.value !== '') {
      countrySelectItem.dispatchEvent(changeEvent);
    }
  });
};

exports.default = SyliusProvinceField;

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-rating.js":
/*!****************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-rating.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class SyliusRating {
  constructor(container, settings) {
    this.container = container;
    this.settings = settings;

    if (this.container) {
      this.ratingMax = Number(this.container.dataset.jsRatingMax) || 5;
      this.ratingAverage = Number(this.container.dataset.jsRatingAverage) || 0;
      this.viewOnly = this.container.dataset.jsRatingViewonly !== 'false';
      this.btnOnElement = this.container.querySelector('[data-js-rating-btn-on]');
      this.btnOffElement = this.container.querySelector('[data-js-rating-btn-off]');
      this.render();
    }
  }

  render() {
    this.container.innerHTML = '';
    const renderElement = document.createElement('div');

    for (let i = 1; i <= this.ratingMax; i++) {
      const element = document.createElement('span');
      element.dataset.jsRatingValue = i;

      if (this.viewOnly === false) {
        element.addEventListener('click', this.changeInputValue.bind(this));
      }

      if (i <= this.ratingAverage) {
        element.innerHTML = this.btnOnElement.innerHTML;
      } else {
        element.innerHTML = this.btnOffElement.innerHTML;
      }

      renderElement.appendChild(element);
    }

    this.container.appendChild(renderElement);
  }

  changeInputValue(e) {
    const value = Number(e.currentTarget.dataset.jsRatingValue);
    this.ratingAverage = value;
    this.container.dataset.jsRatingAverage = value;
    this.render();
    this.settings.onRate(value);
  }

}

exports.default = SyliusRating;

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-remove-from-cart.js":
/*!**************************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-remove-from-cart.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusRemoveFromCart = el => {
  const element = el;
  const redirectUrl = element.getAttribute('data-js-remove-from-cart-redirect-url');
  const csrfToken = element.getAttribute('data-js-remove-from-cart-csrf-token');
  const url = element.getAttribute('data-js-remove-from-cart-api-url');
  element.addEventListener('click', e => {
    e.preventDefault();

    _axios2.default.delete(url, {
      data: {
        _csrf_token: csrfToken
      }
    }).then(() => {
      window.location.replace(redirectUrl);
    });
  });
};

exports.default = SyliusRemoveFromCart;

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-toggle.js":
/*!****************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-toggle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class SyliusToggle {
  constructor(trigger) {
    this.trigger = trigger;
    this.trigger.addEventListener('change', this.toggle.bind(this));
    this.toggleElement = document.querySelector(this.trigger.dataset.jsToggle);
    this.toggle();
  }

  toggle() {
    if (this.trigger.checked) {
      this.toggleElement.style.display = '';
    } else {
      this.toggleElement.style.display = 'none';
    }
  }

}

exports.default = SyliusToggle;

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-variant-images.js":
/*!************************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-variant-images.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
class SyliusVariantImages {
  constructor() {
    this.mainImageLink = document.querySelector('[data-js-product-image]');
    this.mainImage = this.mainImageLink.querySelector('img');
    this.defaultImageLink = this.mainImageLink.getAttribute('href');
    this.defaultImageSrc = this.mainImage.getAttribute('src');
    document.querySelectorAll('[name*="sylius_add_to_cart[cartItem][variant]"]').forEach(item => {
      item.addEventListener('change', () => this.setImage());
    });
    this.setImage();
  }

  getActiveVariant() {
    const items = document.querySelectorAll(`
      input[name="sylius_add_to_cart[cartItem][variant]"]:checked, 
      select[name*="sylius_add_to_cart[cartItem][variant]"] option:checked
    `);
    return [...items].map(el => el.value).join(' ');
  }

  getActiveImageSrc(variant) {
    let imageLink = this.defaultImageLink;
    let imageSrc = this.defaultImageSrc;
    const item = document.querySelector(`
      .sylius-image-variants [data-variant-code="${variant}"], 
      .sylius-image-variants [data-variant-options="${variant} "]
    `);

    if (item) {
      const parent = item.closest('[data-js-product-thumbnail]');
      imageLink = parent.querySelector('a').getAttribute('href');
      imageSrc = parent.querySelector('img').getAttribute('data-large-thumbnail');
    }

    return {
      imageLink,
      imageSrc
    };
  }

  setImage() {
    const img = this.getActiveImageSrc(this.getActiveVariant());
    this.mainImageLink.setAttribute('href', img.imageLink);
    this.mainImage.setAttribute('src', img.imageSrc);
  }

}

exports.default = SyliusVariantImages;

/***/ }),

/***/ "./themes/ZetaMeds/assets/js/sylius-variants-prices.js":
/*!*************************************************************!*\
  !*** ./themes/ZetaMeds/assets/js/sylius-variants-prices.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const handleProductOptionsChange = function handleProductOptionsChange() {
  document.querySelectorAll('[name*="sylius_add_to_cart[cartItem][variant]"]').forEach(item => {
    item.addEventListener('change', () => {
      let selector = '';
      document.querySelectorAll('#sylius-product-adding-to-cart select[data-option]').forEach(element => {
        const select = element;
        const option = select[select.selectedIndex].value;
        selector += `[data-${select.getAttribute('data-option')}="${option}"]`;
      });
      const price = document.querySelector('#sylius-variants-pricing').querySelector(selector).getAttribute('data-value');

      if (price !== undefined) {
        document.querySelector('[data-js-product-price]').innerHTML = price;
        document.querySelector('button[type=submit]').removeAttribute('disabled');
      } else {
        document.querySelector('[data-js-product-price]').innerHTML = document.querySelector('#sylius-variants-pricing').getAttribute('data-unavailable-text');
        document.querySelector('button[type=submit]').setAttribute('disabled', 'disabled');
      }
    });
  });
};

const handleProductVariantsChange = function handleProductVariantsChange() {
  document.querySelectorAll('[name="sylius_add_to_cart[cartItem][variant]"]').forEach(item => {
    item.addEventListener('change', e => {
      const price = item.closest('tr').querySelector('[data-js-product-variant-price]').innerHTML;
      document.querySelector('[data-js-product-price]').innerHTML = price;
    });
  });
};

const SyliusVariantsPrices = () => {
  const syliusVariantsPricing = document.getElementById('sylius-variants-pricing') || null;
  const syliusProductVariants = document.getElementById('sylius-product-variants') || null;

  if (syliusVariantsPricing) {
    handleProductOptionsChange();
  } else if (syliusProductVariants) {
    handleProductVariantsChange();
  }
};

exports.default = SyliusVariantsPrices;

/***/ }),

/***/ "./themes/ZetaMeds/assets/media/sylius-logo.png":
/*!******************************************************!*\
  !*** ./themes/ZetaMeds/assets/media/sylius-logo.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/zetameds-theme/images/sylius-logo.ac4ac094.png";

/***/ }),

/***/ "./themes/ZetaMeds/assets/media/zetameds-white-logo.png":
/*!**************************************************************!*\
  !*** ./themes/ZetaMeds/assets/media/zetameds-white-logo.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/zetameds-theme/images/zetameds-white-logo.f9fd3e95.png";

/***/ }),

/***/ "./themes/ZetaMeds/assets/scss/index.scss":
/*!************************************************!*\
  !*** ./themes/ZetaMeds/assets/scss/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hldnJvblVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmxhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFwTWFya2VyQWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQZW5jaWxBbHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdCYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNodXR0bGVWYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAubmF0aXZlL2Rpc3QvYm9vdHN0cmFwLW5hdGl2ZS12NC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybS1zZXJpYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsaWdodGJveC9kaXN0L2pzL2dsaWdodGJveC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC50aHJvdHRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9qcy9mb250YXdlc29tZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9aZXRhTWVkcy9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9aZXRhTWVkcy9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9aZXRhTWVkcy9hc3NldHMvbWVkaWEvc3lsaXVzLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9aZXRhTWVkcy9hc3NldHMvbWVkaWEvemV0YW1lZHMtd2hpdGUtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhU3RhciIsImZhU2hvcHBpbmdCYWciLCJmYUNoZWNrIiwiZmFFeGNsYW1hdGlvbkNpcmNsZSIsImZhSW5mb0NpcmNsZSIsImZhQ2hldnJvblVwIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNodXR0bGVWYW4iLCJmYUNyZWRpdENhcmQiLCJmYUZsYWciLCJmYUNjTWFzdGVyY2FyZCIsImZhQ2NWaXNhIiwiZmFDY1BheXBhbCIsImZhVGltZXMiLCJmYVNlYXJjaCIsImZhUGx1cyIsImZhUGVuY2lsQWx0IiwiZmFTeW5jQWx0IiwiZG9tIiwid2F0Y2giLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJhY2NlcHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnbGlnaHRib3giLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJzeWxpdXNTaGlwcGluZ0FkZHJlc3MiLCJxdWVyeVNlbGVjdG9yIiwic3lsaXVzQmlsbGluZ0FkZHJlc3MiLCJlbGVtIiwiU3lsaXVzUmF0aW5nIiwib25SYXRlIiwidmFsdWUiLCJjaGVja2VkIiwiU3lsaXVzVG9nZ2xlIiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIlN5bGl1c0FkZFRvQ2FydCIsImVsZW1lbnQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJyZWRpcmVjdFVybCIsInZhbGlkYXRpb25FbGVtZW50IiwiZSIsInJlcXVlc3QiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJjbGFzc0xpc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsImVycm9yIiwicmVtb3ZlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZSIsImlubmVySFRNTCIsInBhcnNlS2V5Iiwia2V5IiwicmVwbGFjZSIsIndvcmRzIiwidG9VcHBlckNhc2UiLCJTeWxpdXNBZGRyZXNzQm9vayIsInNlbGVjdCIsImZpbmRCeU5hbWUiLCJuYW1lIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsIml0ZW0iLCJjaG9pY2UiLCJjdXJyZW50VGFyZ2V0IiwiY2hvaWNlRGF0YSIsImF0dHJpYnV0ZXMiLCJhdHRyIiwic3RhcnRzV2l0aCIsImNhbWVsQ2FzZWQiLCJnIiwicHJvdmluY2VDb2RlIiwicHJvdmluY2VOYW1lIiwicHJvdmluY2VDb250YWluZXIiLCJjbG9zZXN0IiwiaW5wdXQiLCJwcm9wZXJ0eSIsImZpZWxkIiwiaW5kZXhPZiIsImRpc3BhdGNoRXZlbnQiLCJleGlzdHMiLCJzZXRJbnRlcnZhbCIsInByb3ZpbmNlQ29kZUZpZWxkIiwicHJvdmluY2VOYW1lRmllbGQiLCJoYXNBdHRyaWJ1dGUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjbGVhckludGVydmFsIiwiU3lsaXVzQXBpTG9naW4iLCJzaWduSW5CdXR0b24iLCJ2YWxpZGF0aW9uRmllbGQiLCJlbWFpbEZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwiY3NyZlRva2VuTmFtZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInJlbG9hZCIsIlN5bGl1c0FwaVRvZ2dsZSIsInRvZ2dsZWFibGVFbGVtZW50IiwidGFyZ2V0IiwiZ2V0IiwiZW1haWwiLCJTeWxpdXNMb2FkYWJsZUZvcm1zIiwib3ZlcmxheSIsImZvcm0iLCJhcHBlbmRDaGlsZCIsImdldFByb3ZpbmNlSW5wdXRWYWx1ZSIsInZhbHVlU2VsZWN0b3IiLCJ2YWwiLCJTeWxpdXNQcm92aW5jZUZpZWxkIiwiY291bnRyeVNlbGVjdCIsImNvdW50cnlTZWxlY3RJdGVtIiwiZXZlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSIsInByb3ZpbmNlSW5wdXRGaWVsZE5hbWUiLCJwcm92aW5jZVNlbGVjdEZpZWxkSWQiLCJwcm92aW5jZUlucHV0RmllbGRJZCIsInNldEF0dHJpYnV0ZSIsImNvdW50cnlDb2RlIiwiY29udGVudCIsInJlbW92ZUF0dHJpYnV0ZSIsInByb3ZpbmNlU2VsZWN0VmFsdWUiLCJwcm92aW5jZUlucHV0VmFsdWUiLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsInNldHRpbmdzIiwicmF0aW5nTWF4IiwiTnVtYmVyIiwiZGF0YXNldCIsImpzUmF0aW5nTWF4IiwicmF0aW5nQXZlcmFnZSIsImpzUmF0aW5nQXZlcmFnZSIsInZpZXdPbmx5IiwianNSYXRpbmdWaWV3b25seSIsImJ0bk9uRWxlbWVudCIsImJ0bk9mZkVsZW1lbnQiLCJyZW5kZXIiLCJyZW5kZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJqc1JhdGluZ1ZhbHVlIiwiY2hhbmdlSW5wdXRWYWx1ZSIsImJpbmQiLCJTeWxpdXNSZW1vdmVGcm9tQ2FydCIsImNzcmZUb2tlbiIsImRlbGV0ZSIsIl9jc3JmX3Rva2VuIiwidHJpZ2dlciIsInRvZ2dsZSIsInRvZ2dsZUVsZW1lbnQiLCJqc1RvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwic2V0SW1hZ2UiLCJnZXRBY3RpdmVWYXJpYW50IiwiaXRlbXMiLCJtYXAiLCJqb2luIiwiZ2V0QWN0aXZlSW1hZ2VTcmMiLCJ2YXJpYW50IiwiaW1hZ2VMaW5rIiwiaW1hZ2VTcmMiLCJwYXJlbnQiLCJpbWciLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsIm9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJwcmljZSIsImhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSIsIlN5bGl1c1ZhcmlhbnRzUHJpY2VzIiwic3lsaXVzVmFyaWFudHNQcmljaW5nIiwiZ2V0RWxlbWVudEJ5SWQiLCJzeWxpdXNQcm9kdWN0VmFyaWFudHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBb0I7QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5Qjs7QUFFQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxrQkFBa0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ2pDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxnQ0FBZ0M7QUFDaEMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUMzQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUMzQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUMzQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXVHOzs7Ozs7Ozs7Ozs7OztBQ3QyRTFGO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Q0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdGJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBTyxDQUFDLGlFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFHQTs7QUFHQTs7QUFDQTs7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dUJBQWhFLENBQTlEO0FBQ0FwQixnQkFBUSxDQUFDUSxhQUFULENBQXVCLHFCQUF2QixFQUE4Q3NHLFlBQTlDLENBQTJELFVBQTNELEVBQXVFLFVBQXZFO0FBQ0Q7QUFDRixLQWxCRDtBQW1CRCxHQXBCRDtBQXFCRCxDQXRCRDs7QUF3QkEsTUFBTXVELDJCQUEyQixHQUFHLFNBQVNBLDJCQUFULEdBQXVDO0FBQ3pFckssVUFBUSxDQUFDSSxnQkFBVCxDQUEwQixnREFBMUIsRUFBNEVDLE9BQTVFLENBQXFGK0MsSUFBRCxJQUFVO0FBQzVGQSxRQUFJLENBQUNuRCxnQkFBTCxDQUFzQixRQUF0QixFQUFpQ3NCLENBQUQsSUFBTztBQUNyQyxZQUFNNkksS0FBSyxHQUFHaEgsSUFBSSxDQUFDWSxPQUFMLENBQWEsSUFBYixFQUFtQnhELGFBQW5CLENBQWlDLGlDQUFqQyxFQUFvRWdDLFNBQWxGO0FBQ0F4QyxjQUFRLENBQUNRLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtEZ0MsU0FBbEQsR0FBOEQ0SCxLQUE5RDtBQUNELEtBSEQ7QUFJRCxHQUxEO0FBTUQsQ0FQRDs7QUFTQSxNQUFNRSxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDLFFBQU1DLHFCQUFxQixHQUFHdkssUUFBUSxDQUFDd0ssY0FBVCxDQUF3Qix5QkFBeEIsS0FBc0QsSUFBcEY7QUFDQSxRQUFNQyxxQkFBcUIsR0FBR3pLLFFBQVEsQ0FBQ3dLLGNBQVQsQ0FBd0IseUJBQXhCLEtBQXNELElBQXBGOztBQUVBLE1BQUlELHFCQUFKLEVBQTJCO0FBQ3pCTiw4QkFBMEI7QUFDM0IsR0FGRCxNQUVPLElBQUlRLHFCQUFKLEVBQTJCO0FBQ2hDSiwrQkFBMkI7QUFDNUI7QUFDRixDQVREOztrQkFXZUMsb0I7Ozs7Ozs7Ozs7O0FDdkRmLG1FOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3pldGFtZWRzLXRoZW1lL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RoZW1lcy9aZXRhTWVkcy9hc3NldHMvYXBwLmpzXCIpO1xuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgX1dJTkRPVyA9IHt9O1xudmFyIF9ET0NVTUVOVCA9IHt9O1xudmFyIF9NVVRBVElPTl9PQlNFUlZFUiA9IG51bGw7XG52YXIgX1BFUkZPUk1BTkNFID0ge1xuICBtYXJrOiBub29wLFxuICBtZWFzdXJlOiBub29wXG59O1xuXG50cnkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIF9XSU5ET1cgPSB3aW5kb3c7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSBfRE9DVU1FTlQgPSBkb2N1bWVudDtcbiAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykgX01VVEFUSU9OX09CU0VSVkVSID0gTXV0YXRpb25PYnNlcnZlcjtcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcpIF9QRVJGT1JNQU5DRSA9IHBlcmZvcm1hbmNlO1xufSBjYXRjaCAoZSkge31cblxudmFyIF9yZWYgPSBfV0lORE9XLm5hdmlnYXRvciB8fCB7fSxcbiAgICBfcmVmJHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50LFxuICAgIHVzZXJBZ2VudCA9IF9yZWYkdXNlckFnZW50ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdXNlckFnZW50O1xuXG52YXIgV0lORE9XID0gX1dJTkRPVztcbnZhciBET0NVTUVOVCA9IF9ET0NVTUVOVDtcbnZhciBNVVRBVElPTl9PQlNFUlZFUiA9IF9NVVRBVElPTl9PQlNFUlZFUjtcbnZhciBQRVJGT1JNQU5DRSA9IF9QRVJGT1JNQU5DRTtcbnZhciBJU19CUk9XU0VSID0gISFXSU5ET1cuZG9jdW1lbnQ7XG52YXIgSVNfRE9NID0gISFET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQgJiYgISFET0NVTUVOVC5oZWFkICYmIHR5cGVvZiBET0NVTUVOVC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBET0NVTUVOVC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xudmFyIElTX0lFID0gfnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgfHwgfnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50LycpO1xuXG52YXIgTkFNRVNQQUNFX0lERU5USUZJRVIgPSAnX19fRk9OVF9BV0VTT01FX19fJztcbnZhciBVTklUU19JTl9HUklEID0gMTY7XG52YXIgREVGQVVMVF9GQU1JTFlfUFJFRklYID0gJ2ZhJztcbnZhciBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTID0gJ3N2Zy1pbmxpbmUtLWZhJztcbnZhciBEQVRBX0ZBX0kyU1ZHID0gJ2RhdGEtZmEtaTJzdmcnO1xudmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlQgPSAnZGF0YS1mYS1wc2V1ZG8tZWxlbWVudCc7XG52YXIgREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQtcGVuZGluZyc7XG52YXIgREFUQV9QUkVGSVggPSAnZGF0YS1wcmVmaXgnO1xudmFyIERBVEFfSUNPTiA9ICdkYXRhLWljb24nO1xudmFyIEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUyA9ICdmb250YXdlc29tZS1pMnN2Zyc7XG52YXIgTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMgPSAnYXN5bmMnO1xudmFyIFRBR05BTUVTX1RPX1NLSVBfRk9SX1BTRVVET0VMRU1FTlRTID0gWydIVE1MJywgJ0hFQUQnLCAnU1RZTEUnLCAnU0NSSVBUJ107XG52YXIgUFJPRFVDVElPTiA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSgpO1xudmFyIFBSRUZJWF9UT19TVFlMRSA9IHtcbiAgJ2Zhcyc6ICdzb2xpZCcsXG4gICdmYXInOiAncmVndWxhcicsXG4gICdmYWwnOiAnbGlnaHQnLFxuICAnZmFkJzogJ2R1b3RvbmUnLFxuICAnZmFiJzogJ2JyYW5kcycsXG4gICdmYSc6ICdzb2xpZCdcbn07XG52YXIgU1RZTEVfVE9fUFJFRklYID0ge1xuICAnc29saWQnOiAnZmFzJyxcbiAgJ3JlZ3VsYXInOiAnZmFyJyxcbiAgJ2xpZ2h0JzogJ2ZhbCcsXG4gICdkdW90b25lJzogJ2ZhZCcsXG4gICdicmFuZHMnOiAnZmFiJ1xufTtcbnZhciBMQVlFUlNfVEVYVF9DTEFTU05BTUUgPSAnZmEtbGF5ZXJzLXRleHQnO1xudmFyIEZPTlRfRkFNSUxZX1BBVFRFUk4gPSAvRm9udCBBd2Vzb21lIDUgKFNvbGlkfFJlZ3VsYXJ8TGlnaHR8RHVvdG9uZXxCcmFuZHN8RnJlZXxQcm8pLztcbnZhciBGT05UX1dFSUdIVF9UT19QUkVGSVggPSB7XG4gICc5MDAnOiAnZmFzJyxcbiAgJzQwMCc6ICdmYXInLFxuICAnbm9ybWFsJzogJ2ZhcicsXG4gICczMDAnOiAnZmFsJ1xufTtcbnZhciBvbmVUb1RlbiA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG52YXIgb25lVG9Ud2VudHkgPSBvbmVUb1Rlbi5jb25jYXQoWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXSk7XG52YXIgQVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTiA9IFsnY2xhc3MnLCAnZGF0YS1wcmVmaXgnLCAnZGF0YS1pY29uJywgJ2RhdGEtZmEtdHJhbnNmb3JtJywgJ2RhdGEtZmEtbWFzayddO1xudmFyIERVT1RPTkVfQ0xBU1NFUyA9IHtcbiAgR1JPVVA6ICdncm91cCcsXG4gIFNXQVBfT1BBQ0lUWTogJ3N3YXAtb3BhY2l0eScsXG4gIFBSSU1BUlk6ICdwcmltYXJ5JyxcbiAgU0VDT05EQVJZOiAnc2Vjb25kYXJ5J1xufTtcbnZhciBSRVNFUlZFRF9DTEFTU0VTID0gWyd4cycsICdzbScsICdsZycsICdmdycsICd1bCcsICdsaScsICdib3JkZXInLCAncHVsbC1sZWZ0JywgJ3B1bGwtcmlnaHQnLCAnc3BpbicsICdwdWxzZScsICdyb3RhdGUtOTAnLCAncm90YXRlLTE4MCcsICdyb3RhdGUtMjcwJywgJ2ZsaXAtaG9yaXpvbnRhbCcsICdmbGlwLXZlcnRpY2FsJywgJ2ZsaXAtYm90aCcsICdzdGFjaycsICdzdGFjay0xeCcsICdzdGFjay0yeCcsICdpbnZlcnNlJywgJ2xheWVycycsICdsYXllcnMtdGV4dCcsICdsYXllcnMtY291bnRlcicsIERVT1RPTkVfQ0xBU1NFUy5HUk9VUCwgRFVPVE9ORV9DTEFTU0VTLlNXQVBfT1BBQ0lUWSwgRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlksIERVT1RPTkVfQ0xBU1NFUy5TRUNPTkRBUlldLmNvbmNhdChvbmVUb1Rlbi5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG4sIFwieFwiKTtcbn0pKS5jb25jYXQob25lVG9Ud2VudHkubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBcInctXCIuY29uY2F0KG4pO1xufSkpO1xuXG52YXIgaW5pdGlhbCA9IFdJTkRPVy5Gb250QXdlc29tZUNvbmZpZyB8fCB7fTtcblxuZnVuY3Rpb24gZ2V0QXR0ckNvbmZpZyhhdHRyKSB7XG4gIHZhciBlbGVtZW50ID0gRE9DVU1FTlQucXVlcnlTZWxlY3Rvcignc2NyaXB0WycgKyBhdHRyICsgJ10nKTtcblxuICBpZiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIC8vIEdldHRpbmcgYW4gZW1wdHkgc3RyaW5nIHdpbGwgb2NjdXIgaWYgdGhlIGF0dHJpYnV0ZSBpcyBzZXQgb24gdGhlIEhUTUwgdGFnIGJ1dCB3aXRob3V0IGEgdmFsdWVcbiAgLy8gV2UnbGwgYXNzdW1lIHRoYXQgdGhpcyBpcyBhbiBpbmRpY2F0aW9uIHRoYXQgaXQgc2hvdWxkIGJlIHRvZ2dsZWQgdG8gdHJ1ZVxuICAvLyBGb3IgZXhhbXBsZSA8c2NyaXB0IGRhdGEtc2VhcmNoLXBzZXVkby1lbGVtZW50cyBzcmM9XCIuLi5cIj48L3NjcmlwdD5cbiAgaWYgKHZhbCA9PT0gJycpIHJldHVybiB0cnVlO1xuICBpZiAodmFsID09PSAnZmFsc2UnKSByZXR1cm4gZmFsc2U7XG4gIGlmICh2YWwgPT09ICd0cnVlJykgcmV0dXJuIHRydWU7XG4gIHJldHVybiB2YWw7XG59XG5cbmlmIChET0NVTUVOVCAmJiB0eXBlb2YgRE9DVU1FTlQucXVlcnlTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICB2YXIgYXR0cnMgPSBbWydkYXRhLWZhbWlseS1wcmVmaXgnLCAnZmFtaWx5UHJlZml4J10sIFsnZGF0YS1yZXBsYWNlbWVudC1jbGFzcycsICdyZXBsYWNlbWVudENsYXNzJ10sIFsnZGF0YS1hdXRvLXJlcGxhY2Utc3ZnJywgJ2F1dG9SZXBsYWNlU3ZnJ10sIFsnZGF0YS1hdXRvLWFkZC1jc3MnLCAnYXV0b0FkZENzcyddLCBbJ2RhdGEtYXV0by1hMTF5JywgJ2F1dG9BMTF5J10sIFsnZGF0YS1zZWFyY2gtcHNldWRvLWVsZW1lbnRzJywgJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJ10sIFsnZGF0YS1vYnNlcnZlLW11dGF0aW9ucycsICdvYnNlcnZlTXV0YXRpb25zJ10sIFsnZGF0YS1tdXRhdGUtYXBwcm9hY2gnLCAnbXV0YXRlQXBwcm9hY2gnXSwgWydkYXRhLWtlZXAtb3JpZ2luYWwtc291cmNlJywgJ2tlZXBPcmlnaW5hbFNvdXJjZSddLCBbJ2RhdGEtbWVhc3VyZS1wZXJmb3JtYW5jZScsICdtZWFzdXJlUGVyZm9ybWFuY2UnXSwgWydkYXRhLXNob3ctbWlzc2luZy1pY29ucycsICdzaG93TWlzc2luZ0ljb25zJ11dO1xuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgIGF0dHIgPSBfcmVmMlswXSxcbiAgICAgICAga2V5ID0gX3JlZjJbMV07XG5cbiAgICB2YXIgdmFsID0gY29lcmNlKGdldEF0dHJDb25maWcoYXR0cikpO1xuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgaW5pdGlhbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZmFtaWx5UHJlZml4OiBERUZBVUxUX0ZBTUlMWV9QUkVGSVgsXG4gIHJlcGxhY2VtZW50Q2xhc3M6IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MsXG4gIGF1dG9SZXBsYWNlU3ZnOiB0cnVlLFxuICBhdXRvQWRkQ3NzOiB0cnVlLFxuICBhdXRvQTExeTogdHJ1ZSxcbiAgc2VhcmNoUHNldWRvRWxlbWVudHM6IGZhbHNlLFxuICBvYnNlcnZlTXV0YXRpb25zOiB0cnVlLFxuICBtdXRhdGVBcHByb2FjaDogJ2FzeW5jJyxcbiAga2VlcE9yaWdpbmFsU291cmNlOiB0cnVlLFxuICBtZWFzdXJlUGVyZm9ybWFuY2U6IGZhbHNlLFxuICBzaG93TWlzc2luZ0ljb25zOiB0cnVlXG59O1xuXG52YXIgX2NvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIF9kZWZhdWx0LCBpbml0aWFsKTtcblxuaWYgKCFfY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBfY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcblxudmFyIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIF9jb25maWcpO1xuXG5XSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgPSBjb25maWc7XG5cbnZhciB3ID0gV0lORE9XIHx8IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXSkgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0gPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMgPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLmhvb2tzID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcyA9IFtdO1xudmFyIG5hbWVzcGFjZSA9IHdbTkFNRVNQQUNFX0lERU5USUZJRVJdO1xuXG52YXIgZnVuY3Rpb25zID0gW107XG5cbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICBET0NVTUVOVC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xuICBsb2FkZWQgPSAxO1xuICBmdW5jdGlvbnMubWFwKGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBmbigpO1xuICB9KTtcbn07XG5cbnZhciBsb2FkZWQgPSBmYWxzZTtcblxuaWYgKElTX0RPTSkge1xuICBsb2FkZWQgPSAoRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KERPQ1VNRU5ULnJlYWR5U3RhdGUpO1xuICBpZiAoIWxvYWRlZCkgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gZG9tcmVhZHkgKGZuKSB7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZnVuY3Rpb25zLnB1c2goZm4pO1xufVxuXG52YXIgUEVORElORyA9ICdwZW5kaW5nJztcbnZhciBTRVRUTEVEID0gJ3NldHRsZWQnO1xudmFyIEZVTEZJTExFRCA9ICdmdWxmaWxsZWQnO1xudmFyIFJFSkVDVEVEID0gJ3JlamVjdGVkJztcblxudmFyIE5PT1AgPSBmdW5jdGlvbiBOT09QKCkge307XG5cbnZhciBpc05vZGUgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwucHJvY2Vzcy5lbWl0ID09PSAnZnVuY3Rpb24nO1xudmFyIGFzeW5jU2V0VGltZXIgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAndW5kZWZpbmVkJyA/IHNldFRpbWVvdXQgOiBzZXRJbW1lZGlhdGU7XG52YXIgYXN5bmNRdWV1ZSA9IFtdO1xudmFyIGFzeW5jVGltZXI7XG5cbmZ1bmN0aW9uIGFzeW5jRmx1c2goKSB7XG4gIC8vIHJ1biBwcm9taXNlIGNhbGxiYWNrc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFzeW5jUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBhc3luY1F1ZXVlW2ldWzBdKGFzeW5jUXVldWVbaV1bMV0pO1xuICB9IC8vIHJlc2V0IGFzeW5jIGFzeW5jUXVldWVcblxuXG4gIGFzeW5jUXVldWUgPSBbXTtcbiAgYXN5bmNUaW1lciA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhc3luY0NhbGwoY2FsbGJhY2ssIGFyZykge1xuICBhc3luY1F1ZXVlLnB1c2goW2NhbGxiYWNrLCBhcmddKTtcblxuICBpZiAoIWFzeW5jVGltZXIpIHtcbiAgICBhc3luY1RpbWVyID0gdHJ1ZTtcbiAgICBhc3luY1NldFRpbWVyKGFzeW5jRmx1c2gsIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZVJlc29sdmVyKHJlc29sdmVyLCBwcm9taXNlKSB7XG4gIGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKSB7XG4gICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXNvbHZlcihyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3RQcm9taXNlKGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKHN1YnNjcmliZXIpIHtcbiAgdmFyIG93bmVyID0gc3Vic2NyaWJlci5vd25lcjtcbiAgdmFyIHNldHRsZWQgPSBvd25lci5fc3RhdGU7XG4gIHZhciB2YWx1ZSA9IG93bmVyLl9kYXRhO1xuICB2YXIgY2FsbGJhY2sgPSBzdWJzY3JpYmVyW3NldHRsZWRdO1xuICB2YXIgcHJvbWlzZSA9IHN1YnNjcmliZXIudGhlbjtcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0dGxlZCA9IEZVTEZJTExFRDtcblxuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkpIHtcbiAgICBpZiAoc2V0dGxlZCA9PT0gRlVMRklMTEVEKSB7XG4gICAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2V0dGxlZCA9PT0gUkVKRUNURUQpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSB7XG4gIHZhciByZXNvbHZlZDtcblxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JykpIHtcbiAgICAgIC8vIHRoZW4gc2hvdWxkIGJlIHJldHJpZXZlZCBvbmx5IG9uY2VcbiAgICAgIHZhciB0aGVuID0gdmFsdWUudGhlbjtcblxuICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2YWwpIHtcbiAgICAgICAgICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZSA9PT0gdmFsdWUgfHwgIWhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgcHJvbWlzZS5fc3RhdGUgPSBTRVRUTEVEO1xuICAgIHByb21pc2UuX2RhdGEgPSB2YWx1ZTtcbiAgICBhc3luY0NhbGwocHVibGlzaEZ1bGZpbGxtZW50LCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgIHByb21pc2UuX3N0YXRlID0gU0VUVExFRDtcbiAgICBwcm9taXNlLl9kYXRhID0gcmVhc29uO1xuICAgIGFzeW5jQ2FsbChwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoKHByb21pc2UpIHtcbiAgcHJvbWlzZS5fdGhlbiA9IHByb21pc2UuX3RoZW4uZm9yRWFjaChpbnZva2VDYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hGdWxmaWxsbWVudChwcm9taXNlKSB7XG4gIHByb21pc2UuX3N0YXRlID0gRlVMRklMTEVEO1xuICBwdWJsaXNoKHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcbiAgcHVibGlzaChwcm9taXNlKTtcblxuICBpZiAoIXByb21pc2UuX2hhbmRsZWQgJiYgaXNOb2RlKSB7XG4gICAgZ2xvYmFsLnByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgcHJvbWlzZS5fZGF0YSwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5UmVqZWN0aW9uSGFuZGxlZChwcm9taXNlKSB7XG4gIGdsb2JhbC5wcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbn1cbi8qKlxuICogQGNsYXNzXG4gKi9cblxuXG5mdW5jdGlvbiBQKHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHJlc29sdmVyICcgKyByZXNvbHZlciArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgUCA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gY29uc3RydWN0IFxcJ1Byb21pc2VcXCc6IFBsZWFzZSB1c2UgdGhlIFxcJ25ld1xcJyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdGhpcy5fdGhlbiA9IFtdO1xuICBpbnZva2VSZXNvbHZlcihyZXNvbHZlciwgdGhpcyk7XG59XG5cblAucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogUCxcbiAgX3N0YXRlOiBQRU5ESU5HLFxuICBfdGhlbjogbnVsbCxcbiAgX2RhdGE6IHVuZGVmaW5lZCxcbiAgX2hhbmRsZWQ6IGZhbHNlLFxuICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSB7XG4gICAgICBvd25lcjogdGhpcyxcbiAgICAgIHRoZW46IG5ldyB0aGlzLmNvbnN0cnVjdG9yKE5PT1ApLFxuICAgICAgZnVsZmlsbGVkOiBvbkZ1bGZpbGxtZW50LFxuICAgICAgcmVqZWN0ZWQ6IG9uUmVqZWN0aW9uXG4gICAgfTtcblxuICAgIGlmICgob25SZWplY3Rpb24gfHwgb25GdWxmaWxsbWVudCkgJiYgIXRoaXMuX2hhbmRsZWQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFJFSkVDVEVEICYmIGlzTm9kZSkge1xuICAgICAgICBhc3luY0NhbGwobm90aWZ5UmVqZWN0aW9uSGFuZGxlZCwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBGVUxGSUxMRUQgfHwgdGhpcy5fc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICAvLyBhbHJlYWR5IHJlc29sdmVkLCBjYWxsIGNhbGxiYWNrIGFzeW5jXG4gICAgICBhc3luY0NhbGwoaW52b2tlQ2FsbGJhY2ssIHN1YnNjcmliZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdWJzY3JpYmVcbiAgICAgIHRoaXMuX3RoZW4ucHVzaChzdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic2NyaWJlci50aGVuO1xuICB9LFxuICBjYXRjaDogZnVuY3Rpb24gX2NhdGNoKG9uUmVqZWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gIH1cbn07XG5cblAuYWxsID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9taXNlcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UuYWxsKCkuJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHJlbWFpbmluZyA9IDA7XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcihpbmRleCkge1xuICAgICAgcmVtYWluaW5nKys7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCEgLS1yZW1haW5pbmcpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwLCBwcm9taXNlOyBpIDwgcHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlc1tpXTtcblxuICAgICAgaWYgKHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZXIoaSksIHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2ldID0gcHJvbWlzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlbWFpbmluZykge1xuICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICB9XG4gIH0pO1xufTtcblxuUC5yYWNlID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9taXNlcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UucmFjZSgpLicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcHJvbWlzZTsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZXNbaV07XG5cbiAgICAgIGlmIChwcm9taXNlICYmIHR5cGVvZiBwcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5QLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlICYmIF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9KTtcbn07XG5cblAucmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cbnZhciBwaWNrZWQgPSB0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyA/IFByb21pc2UgOiBQO1xuXG52YXIgZCA9IFVOSVRTX0lOX0dSSUQ7XG52YXIgbWVhbmluZ2xlc3NUcmFuc2Zvcm0gPSB7XG4gIHNpemU6IDE2LFxuICB4OiAwLFxuICB5OiAwLFxuICByb3RhdGU6IDAsXG4gIGZsaXBYOiBmYWxzZSxcbiAgZmxpcFk6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc1Jlc2VydmVkKG5hbWUpIHtcbiAgcmV0dXJuIH5SRVNFUlZFRF9DTEFTU0VTLmluZGV4T2YobmFtZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRDc3MoY3NzKSB7XG4gIGlmICghY3NzIHx8ICFJU19ET00pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICB2YXIgaGVhZENoaWxkcmVuID0gRE9DVU1FTlQuaGVhZC5jaGlsZE5vZGVzO1xuICB2YXIgYmVmb3JlQ2hpbGQgPSBudWxsO1xuXG4gIGZvciAodmFyIGkgPSBoZWFkQ2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICB2YXIgY2hpbGQgPSBoZWFkQ2hpbGRyZW5baV07XG4gICAgdmFyIHRhZ05hbWUgPSAoY2hpbGQudGFnTmFtZSB8fCAnJykudG9VcHBlckNhc2UoKTtcblxuICAgIGlmIChbJ1NUWUxFJywgJ0xJTksnXS5pbmRleE9mKHRhZ05hbWUpID4gLTEpIHtcbiAgICAgIGJlZm9yZUNoaWxkID0gY2hpbGQ7XG4gICAgfVxuICB9XG5cbiAgRE9DVU1FTlQuaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGJlZm9yZUNoaWxkKTtcbiAgcmV0dXJuIGNzcztcbn1cbnZhciBpZFBvb2wgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuZnVuY3Rpb24gbmV4dFVuaXF1ZUlkKCkge1xuICB2YXIgc2l6ZSA9IDEyO1xuICB2YXIgaWQgPSAnJztcblxuICB3aGlsZSAoc2l6ZS0tID4gMCkge1xuICAgIGlkICs9IGlkUG9vbFtNYXRoLnJhbmRvbSgpICogNjIgfCAwXTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAob2JqIHx8IFtdKS5sZW5ndGggPj4+IDA7IGktLTspIHtcbiAgICBhcnJheVtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNsYXNzQXJyYXkobm9kZSkge1xuICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICByZXR1cm4gdG9BcnJheShub2RlLmNsYXNzTGlzdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBnZXRJY29uTmFtZShmYW1pbHlQcmVmaXgsIGNscykge1xuICB2YXIgcGFydHMgPSBjbHMuc3BsaXQoJy0nKTtcbiAgdmFyIHByZWZpeCA9IHBhcnRzWzBdO1xuICB2YXIgaWNvbk5hbWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgaWYgKHByZWZpeCA9PT0gZmFtaWx5UHJlZml4ICYmIGljb25OYW1lICE9PSAnJyAmJiAhaXNSZXNlcnZlZChpY29uTmFtZSkpIHtcbiAgICByZXR1cm4gaWNvbk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGh0bWxFc2NhcGUoc3RyKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChzdHIpLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpLnJlcGxhY2UoLycvZywgJyYjMzk7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cbmZ1bmN0aW9uIGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgcmV0dXJuIGFjYyArIFwiXCIuY29uY2F0KGF0dHJpYnV0ZU5hbWUsIFwiPVxcXCJcIikuY29uY2F0KGh0bWxFc2NhcGUoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSksIFwiXFxcIiBcIik7XG4gIH0sICcnKS50cmltKCk7XG59XG5mdW5jdGlvbiBqb2luU3R5bGVzKHN0eWxlcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGVOYW1lKSB7XG4gICAgcmV0dXJuIGFjYyArIFwiXCIuY29uY2F0KHN0eWxlTmFtZSwgXCI6IFwiKS5jb25jYXQoc3R5bGVzW3N0eWxlTmFtZV0sIFwiO1wiKTtcbiAgfSwgJycpO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkge1xuICByZXR1cm4gdHJhbnNmb3JtLnNpemUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnNpemUgfHwgdHJhbnNmb3JtLnggIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnggfHwgdHJhbnNmb3JtLnkgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnkgfHwgdHJhbnNmb3JtLnJvdGF0ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ucm90YXRlIHx8IHRyYW5zZm9ybS5mbGlwWCB8fCB0cmFuc2Zvcm0uZmxpcFk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JTdmcoX3JlZikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBjb250YWluZXJXaWR0aCA9IF9yZWYuY29udGFpbmVyV2lkdGgsXG4gICAgICBpY29uV2lkdGggPSBfcmVmLmljb25XaWR0aDtcbiAgdmFyIG91dGVyID0ge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGNvbnRhaW5lcldpZHRoIC8gMiwgXCIgMjU2KVwiKVxuICB9O1xuICB2YXIgaW5uZXJUcmFuc2xhdGUgPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggKiAzMiwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgKiAzMiwgXCIpIFwiKTtcbiAgdmFyIGlubmVyU2NhbGUgPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgdmFyIGlubmVyUm90YXRlID0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiIDAgMClcIik7XG4gIHZhciBpbm5lciA9IHtcbiAgICB0cmFuc2Zvcm06IFwiXCIuY29uY2F0KGlubmVyVHJhbnNsYXRlLCBcIiBcIikuY29uY2F0KGlubmVyU2NhbGUsIFwiIFwiKS5jb25jYXQoaW5uZXJSb3RhdGUpXG4gIH07XG4gIHZhciBwYXRoID0ge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGljb25XaWR0aCAvIDIgKiAtMSwgXCIgLTI1NilcIilcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBvdXRlcjogb3V0ZXIsXG4gICAgaW5uZXI6IGlubmVyLFxuICAgIHBhdGg6IHBhdGhcbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUZvckNzcyhfcmVmMikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZjIudHJhbnNmb3JtLFxuICAgICAgX3JlZjIkd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgIHdpZHRoID0gX3JlZjIkd2lkdGggPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiR3aWR0aCxcbiAgICAgIF9yZWYyJGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgIGhlaWdodCA9IF9yZWYyJGhlaWdodCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJGhlaWdodCxcbiAgICAgIF9yZWYyJHN0YXJ0Q2VudGVyZWQgPSBfcmVmMi5zdGFydENlbnRlcmVkLFxuICAgICAgc3RhcnRDZW50ZXJlZCA9IF9yZWYyJHN0YXJ0Q2VudGVyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkc3RhcnRDZW50ZXJlZDtcbiAgdmFyIHZhbCA9ICcnO1xuXG4gIGlmIChzdGFydENlbnRlcmVkICYmIElTX0lFKSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQgLSB3aWR0aCAvIDIsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkIC0gaGVpZ2h0IC8gMiwgXCJlbSkgXCIpO1xuICB9IGVsc2UgaWYgKHN0YXJ0Q2VudGVyZWQpIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoY2FsYygtNTAlICsgXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCwgXCJlbSksIGNhbGMoLTUwJSArIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkLCBcImVtKSkgXCIpO1xuICB9IGVsc2Uge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkLCBcImVtLCBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCwgXCJlbSkgXCIpO1xuICB9XG5cbiAgdmFsICs9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gZCAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgdmFsICs9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcImRlZykgXCIpO1xuICByZXR1cm4gdmFsO1xufVxuXG52YXIgQUxMX1NQQUNFID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufTtcblxuZnVuY3Rpb24gZmlsbEJsYWNrKGFic3RyYWN0KSB7XG4gIHZhciBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICBpZiAoYWJzdHJhY3QuYXR0cmlidXRlcyAmJiAoYWJzdHJhY3QuYXR0cmlidXRlcy5maWxsIHx8IGZvcmNlKSkge1xuICAgIGFic3RyYWN0LmF0dHJpYnV0ZXMuZmlsbCA9ICdibGFjayc7XG4gIH1cblxuICByZXR1cm4gYWJzdHJhY3Q7XG59XG5cbmZ1bmN0aW9uIGRlR3JvdXAoYWJzdHJhY3QpIHtcbiAgaWYgKGFic3RyYWN0LnRhZyA9PT0gJ2cnKSB7XG4gICAgcmV0dXJuIGFic3RyYWN0LmNoaWxkcmVuO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbYWJzdHJhY3RdO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VJY29uTWFza2luZyAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG4gIHZhciBtYWluV2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgbWFpblBhdGggPSBtYWluLmljb247XG4gIHZhciBtYXNrV2lkdGggPSBtYXNrLndpZHRoLFxuICAgICAgbWFza1BhdGggPSBtYXNrLmljb247XG4gIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgY29udGFpbmVyV2lkdGg6IG1hc2tXaWR0aCxcbiAgICBpY29uV2lkdGg6IG1haW5XaWR0aFxuICB9KTtcbiAgdmFyIG1hc2tSZWN0ID0ge1xuICAgIHRhZzogJ3JlY3QnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFMTF9TUEFDRSwge1xuICAgICAgZmlsbDogJ3doaXRlJ1xuICAgIH0pXG4gIH07XG4gIHZhciBtYXNrSW5uZXJHcm91cENoaWxkcmVuTWl4aW4gPSBtYWluUGF0aC5jaGlsZHJlbiA/IHtcbiAgICBjaGlsZHJlbjogbWFpblBhdGguY2hpbGRyZW4ubWFwKGZpbGxCbGFjaylcbiAgfSA6IHt9O1xuICB2YXIgbWFza0lubmVyR3JvdXAgPSB7XG4gICAgdGFnOiAnZycsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMuaW5uZXIpLFxuICAgIGNoaWxkcmVuOiBbZmlsbEJsYWNrKF9vYmplY3RTcHJlYWQoe1xuICAgICAgdGFnOiBtYWluUGF0aC50YWcsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBtYWluUGF0aC5hdHRyaWJ1dGVzLCB0cmFucy5wYXRoKVxuICAgIH0sIG1hc2tJbm5lckdyb3VwQ2hpbGRyZW5NaXhpbikpXVxuICB9O1xuICB2YXIgbWFza091dGVyR3JvdXAgPSB7XG4gICAgdGFnOiAnZycsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMub3V0ZXIpLFxuICAgIGNoaWxkcmVuOiBbbWFza0lubmVyR3JvdXBdXG4gIH07XG4gIHZhciBtYXNrSWQgPSBcIm1hc2stXCIuY29uY2F0KG5leHRVbmlxdWVJZCgpKTtcbiAgdmFyIGNsaXBJZCA9IFwiY2xpcC1cIi5jb25jYXQobmV4dFVuaXF1ZUlkKCkpO1xuICB2YXIgbWFza1RhZyA9IHtcbiAgICB0YWc6ICdtYXNrJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBBTExfU1BBQ0UsIHtcbiAgICAgIGlkOiBtYXNrSWQsXG4gICAgICBtYXNrVW5pdHM6ICd1c2VyU3BhY2VPblVzZScsXG4gICAgICBtYXNrQ29udGVudFVuaXRzOiAndXNlclNwYWNlT25Vc2UnXG4gICAgfSksXG4gICAgY2hpbGRyZW46IFttYXNrUmVjdCwgbWFza091dGVyR3JvdXBdXG4gIH07XG4gIHZhciBkZWZzID0ge1xuICAgIHRhZzogJ2RlZnMnLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGFnOiAnY2xpcFBhdGgnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpZDogY2xpcElkXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IGRlR3JvdXAobWFza1BhdGgpXG4gICAgfSwgbWFza1RhZ11cbiAgfTtcbiAgY2hpbGRyZW4ucHVzaChkZWZzLCB7XG4gICAgdGFnOiAncmVjdCcsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7XG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICdjbGlwLXBhdGgnOiBcInVybCgjXCIuY29uY2F0KGNsaXBJZCwgXCIpXCIpLFxuICAgICAgbWFzazogXCJ1cmwoI1wiLmNvbmNhdChtYXNrSWQsIFwiKVwiKVxuICAgIH0sIEFMTF9TUEFDRSlcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUljb25TdGFuZGFyZCAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzO1xuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICB2YXIgdHJhbnMgPSB0cmFuc2Zvcm1Gb3JTdmcoe1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBjb250YWluZXJXaWR0aDogbWFpbi53aWR0aCxcbiAgICAgIGljb25XaWR0aDogbWFpbi53aWR0aFxuICAgIH0pO1xuICAgIGNoaWxkcmVuLnB1c2goe1xuICAgICAgdGFnOiAnZycsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5vdXRlciksXG4gICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLmlubmVyKSxcbiAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgdGFnOiBtYWluLmljb24udGFnLFxuICAgICAgICAgIGNoaWxkcmVuOiBtYWluLmljb24uY2hpbGRyZW4sXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgbWFpbi5pY29uLmF0dHJpYnV0ZXMsIHRyYW5zLnBhdGgpXG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkcmVuLnB1c2gobWFpbi5pY29uKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXNJY29uIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgbWFzayA9IF9yZWYubWFzayxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcyxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtO1xuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSAmJiBtYWluLmZvdW5kICYmICFtYXNrLmZvdW5kKSB7XG4gICAgdmFyIHdpZHRoID0gbWFpbi53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gbWFpbi5oZWlnaHQ7XG4gICAgdmFyIG9mZnNldCA9IHtcbiAgICAgIHg6IHdpZHRoIC8gaGVpZ2h0IC8gMixcbiAgICAgIHk6IDAuNVxuICAgIH07XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IGpvaW5TdHlsZXMoX29iamVjdFNwcmVhZCh7fSwgc3R5bGVzLCB7XG4gICAgICAndHJhbnNmb3JtLW9yaWdpbic6IFwiXCIuY29uY2F0KG9mZnNldC54ICsgdHJhbnNmb3JtLnggLyAxNiwgXCJlbSBcIikuY29uY2F0KG9mZnNldC55ICsgdHJhbnNmb3JtLnkgLyAxNiwgXCJlbVwiKVxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiBbe1xuICAgIHRhZzogJ3N2ZycsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfV07XG59XG5cbmZ1bmN0aW9uIGFzU3ltYm9sIChfcmVmKSB7XG4gIHZhciBwcmVmaXggPSBfcmVmLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gX3JlZi5pY29uTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBzeW1ib2wgPSBfcmVmLnN5bWJvbDtcbiAgdmFyIGlkID0gc3ltYm9sID09PSB0cnVlID8gXCJcIi5jb25jYXQocHJlZml4LCBcIi1cIikuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoaWNvbk5hbWUpIDogc3ltYm9sO1xuICByZXR1cm4gW3tcbiAgICB0YWc6ICdzdmcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIHN0eWxlOiAnZGlzcGxheTogbm9uZTsnXG4gICAgfSxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHRhZzogJ3N5bWJvbCcsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgIGlkOiBpZFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XVxuICB9XTtcbn1cblxuZnVuY3Rpb24gbWFrZUlubGluZVN2Z0Fic3RyYWN0KHBhcmFtcykge1xuICB2YXIgX3BhcmFtcyRpY29ucyA9IHBhcmFtcy5pY29ucyxcbiAgICAgIG1haW4gPSBfcGFyYW1zJGljb25zLm1haW4sXG4gICAgICBtYXNrID0gX3BhcmFtcyRpY29ucy5tYXNrLFxuICAgICAgcHJlZml4ID0gcGFyYW1zLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gcGFyYW1zLmljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IHBhcmFtcy5zeW1ib2wsXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGU7XG5cbiAgdmFyIF9yZWYgPSBtYXNrLmZvdW5kID8gbWFzayA6IG1haW4sXG4gICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICB2YXIgd2lkdGhDbGFzcyA9IFwiZmEtdy1cIi5jb25jYXQoTWF0aC5jZWlsKHdpZHRoIC8gaGVpZ2h0ICogMTYpKTtcbiAgdmFyIGF0dHJDbGFzcyA9IFtjb25maWcucmVwbGFjZW1lbnRDbGFzcywgaWNvbk5hbWUgPyBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KGljb25OYW1lKSA6ICcnLCB3aWR0aENsYXNzXS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gZXh0cmEuY2xhc3Nlcy5pbmRleE9mKGMpID09PSAtMTtcbiAgfSkuY29uY2F0KGV4dHJhLmNsYXNzZXMpLmpvaW4oJyAnKTtcbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLmF0dHJpYnV0ZXMsIHtcbiAgICAgICdkYXRhLXByZWZpeCc6IHByZWZpeCxcbiAgICAgICdkYXRhLWljb24nOiBpY29uTmFtZSxcbiAgICAgICdjbGFzcyc6IGF0dHJDbGFzcyxcbiAgICAgICdyb2xlJzogZXh0cmEuYXR0cmlidXRlcy5yb2xlIHx8ICdpbWcnLFxuICAgICAgJ3htbG5zJzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAgICd2aWV3Qm94JzogXCIwIDAgXCIuY29uY2F0KHdpZHRoLCBcIiBcIikuY29uY2F0KGhlaWdodClcbiAgICB9KVxuICB9O1xuXG4gIGlmICh3YXRjaGFibGUpIHtcbiAgICBjb250ZW50LmF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgfVxuXG4gIGlmICh0aXRsZSkgY29udGVudC5jaGlsZHJlbi5wdXNoKHtcbiAgICB0YWc6ICd0aXRsZScsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgaWQ6IGNvbnRlbnQuYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gfHwgXCJ0aXRsZS1cIi5jb25jYXQobmV4dFVuaXF1ZUlkKCkpXG4gICAgfSxcbiAgICBjaGlsZHJlbjogW3RpdGxlXVxuICB9KTtcblxuICB2YXIgYXJncyA9IF9vYmplY3RTcHJlYWQoe30sIGNvbnRlbnQsIHtcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgbWFpbjogbWFpbixcbiAgICBtYXNrOiBtYXNrLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIHN0eWxlczogZXh0cmEuc3R5bGVzXG4gIH0pO1xuXG4gIHZhciBfcmVmMiA9IG1hc2suZm91bmQgJiYgbWFpbi5mb3VuZCA/IG1ha2VJY29uTWFza2luZyhhcmdzKSA6IG1ha2VJY29uU3RhbmRhcmQoYXJncyksXG4gICAgICBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cbiAgYXJncy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICBhcmdzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXG4gIGlmIChzeW1ib2wpIHtcbiAgICByZXR1cm4gYXNTeW1ib2woYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFzSWNvbihhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFrZUxheWVyc1RleHRBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgIHdpZHRoID0gcGFyYW1zLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gcGFyYW1zLmhlaWdodCxcbiAgICAgIHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUyID0gcGFyYW1zLndhdGNoYWJsZSxcbiAgICAgIHdhdGNoYWJsZSA9IF9wYXJhbXMkd2F0Y2hhYmxlMiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTI7XG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB0aXRsZSA/IHtcbiAgICAndGl0bGUnOiB0aXRsZVxuICB9IDoge30sIHtcbiAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICB9KTtcblxuICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLnN0eWxlcyk7XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgc3R5bGVzWyd0cmFuc2Zvcm0nXSA9IHRyYW5zZm9ybUZvckNzcyh7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIHN0YXJ0Q2VudGVyZWQ6IHRydWUsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH0pO1xuICAgIHN0eWxlc1snLXdlYmtpdC10cmFuc2Zvcm0nXSA9IHN0eWxlc1sndHJhbnNmb3JtJ107XG4gIH1cblxuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICB2YXIgdmFsID0gW107XG4gIHZhbC5wdXNoKHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgfSk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgdmFsLnB1c2goe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnc3Itb25seSdcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cbmZ1bmN0aW9uIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gcGFyYW1zLmNvbnRlbnQsXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhO1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuYXR0cmlidXRlcywgdGl0bGUgPyB7XG4gICAgJ3RpdGxlJzogdGl0bGVcbiAgfSA6IHt9LCB7XG4gICAgJ2NsYXNzJzogZXh0cmEuY2xhc3Nlcy5qb2luKCcgJylcbiAgfSk7XG5cbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhleHRyYS5zdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgdmFyIHZhbCA9IFtdO1xuICB2YWwucHVzaCh7XG4gICAgdGFnOiAnc3BhbicsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gIH0pO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ3NyLW9ubHknXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBub29wJDEgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBwID0gY29uZmlnLm1lYXN1cmVQZXJmb3JtYW5jZSAmJiBQRVJGT1JNQU5DRSAmJiBQRVJGT1JNQU5DRS5tYXJrICYmIFBFUkZPUk1BTkNFLm1lYXN1cmUgPyBQRVJGT1JNQU5DRSA6IHtcbiAgbWFyazogbm9vcCQxLFxuICBtZWFzdXJlOiBub29wJDFcbn07XG52YXIgcHJlYW1ibGUgPSBcIkZBIFxcXCI1LjExLjFcXFwiXCI7XG5cbnZhciBiZWdpbiA9IGZ1bmN0aW9uIGJlZ2luKG5hbWUpIHtcbiAgcC5tYXJrKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGJlZ2luc1wiKSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVuZChuYW1lKTtcbiAgfTtcbn07XG5cbnZhciBlbmQgPSBmdW5jdGlvbiBlbmQobmFtZSkge1xuICBwLm1hcmsoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgZW5kc1wiKSk7XG4gIHAubWVhc3VyZShcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lKSwgXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbn07XG5cbnZhciBwZXJmID0ge1xuICBiZWdpbjogYmVnaW4sXG4gIGVuZDogZW5kXG59O1xuXG4vKipcbiAqIEludGVybmFsIGhlbHBlciB0byBiaW5kIGEgZnVuY3Rpb24ga25vd24gdG8gaGF2ZSA0IGFyZ3VtZW50c1xuICogdG8gYSBnaXZlbiBjb250ZXh0LlxuICovXG5cbnZhciBiaW5kSW50ZXJuYWw0ID0gZnVuY3Rpb24gYmluZEludGVybmFsNChmdW5jLCB0aGlzQ29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNDb250ZXh0LCBhLCBiLCBjLCBkKTtcbiAgfTtcbn07XG5cbi8qKlxuICogIyBSZWR1Y2VcbiAqXG4gKiBBIGZhc3Qgb2JqZWN0IGAucmVkdWNlKClgIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBzdWJqZWN0ICAgICAgVGhlIG9iamVjdCB0byByZWR1Y2Ugb3Zlci5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgICAgICAgVGhlIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0gIHttaXhlZH0gICAgaW5pdGlhbFZhbHVlIFRoZSBpbml0aWFsIHZhbHVlIGZvciB0aGUgcmVkdWNlciwgZGVmYXVsdHMgdG8gc3ViamVjdFswXS5cbiAqIEBwYXJhbSAge09iamVjdH0gICB0aGlzQ29udGV4dCAgVGhlIGNvbnRleHQgZm9yIHRoZSByZWR1Y2VyLlxuICogQHJldHVybiB7bWl4ZWR9ICAgICAgICAgICAgICAgICBUaGUgZmluYWwgcmVzdWx0LlxuICovXG5cblxudmFyIHJlZHVjZSA9IGZ1bmN0aW9uIGZhc3RSZWR1Y2VPYmplY3Qoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzdWJqZWN0KSxcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgaXRlcmF0b3IgPSB0aGlzQ29udGV4dCAhPT0gdW5kZWZpbmVkID8gYmluZEludGVybmFsNChmbiwgdGhpc0NvbnRleHQpIDogZm4sXG4gICAgICBpLFxuICAgICAga2V5LFxuICAgICAgcmVzdWx0O1xuXG4gIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGkgPSAxO1xuICAgIHJlc3VsdCA9IHN1YmplY3Rba2V5c1swXV07XG4gIH0gZWxzZSB7XG4gICAgaSA9IDA7XG4gICAgcmVzdWx0ID0gaW5pdGlhbFZhbHVlO1xuICB9XG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBzdWJqZWN0W2tleV0sIGtleSwgc3ViamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gdG9IZXgodW5pY29kZSkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmljb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGhleCA9IHVuaWNvZGUuY2hhckNvZGVBdChpKS50b1N0cmluZygxNik7XG4gICAgcmVzdWx0ICs9ICgnMDAwJyArIGhleCkuc2xpY2UoLTQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lSWNvbnMocHJlZml4LCBpY29ucykge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkc2tpcEhvb2tzID0gcGFyYW1zLnNraXBIb29rcyxcbiAgICAgIHNraXBIb29rcyA9IF9wYXJhbXMkc2tpcEhvb2tzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc2tpcEhvb2tzO1xuICB2YXIgbm9ybWFsaXplZCA9IE9iamVjdC5rZXlzKGljb25zKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaWNvbk5hbWUpIHtcbiAgICB2YXIgaWNvbiA9IGljb25zW2ljb25OYW1lXTtcbiAgICB2YXIgZXhwYW5kZWQgPSAhIWljb24uaWNvbjtcblxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgYWNjW2ljb24uaWNvbk5hbWVdID0gaWNvbi5pY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2NbaWNvbk5hbWVdID0gaWNvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgaWYgKHR5cGVvZiBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhc2tpcEhvb2tzKSB7XG4gICAgbmFtZXNwYWNlLmhvb2tzLmFkZFBhY2socHJlZml4LCBub3JtYWxpemVkKTtcbiAgfSBlbHNlIHtcbiAgICBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gPSBfb2JqZWN0U3ByZWFkKHt9LCBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gfHwge30sIG5vcm1hbGl6ZWQpO1xuICB9XG4gIC8qKlxuICAgKiBGb250IEF3ZXNvbWUgNCB1c2VkIHRoZSBwcmVmaXggb2YgYGZhYCBmb3IgYWxsIGljb25zLiBXaXRoIHRoZSBpbnRyb2R1Y3Rpb25cbiAgICogb2YgbmV3IHN0eWxlcyB3ZSBuZWVkZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIHRoZW0uIFByZWZpeCBgZmFgIGlzIG5vdyBhbiBhbGlhc1xuICAgKiBmb3IgYGZhc2Agc28gd2UnbGwgZWFzeSB0aGUgdXBncmFkZSBwcm9jZXNzIGZvciBvdXIgdXNlcnMgYnkgYXV0b21hdGljYWxseSBkZWZpbmluZ1xuICAgKiB0aGlzIGFzIHdlbGwuXG4gICAqL1xuXG5cbiAgaWYgKHByZWZpeCA9PT0gJ2ZhcycpIHtcbiAgICBkZWZpbmVJY29ucygnZmEnLCBpY29ucyk7XG4gIH1cbn1cblxudmFyIHN0eWxlcyA9IG5hbWVzcGFjZS5zdHlsZXMsXG4gICAgc2hpbXMgPSBuYW1lc3BhY2Uuc2hpbXM7XG52YXIgX2J5VW5pY29kZSA9IHt9O1xudmFyIF9ieUxpZ2F0dXJlID0ge307XG52YXIgX2J5T2xkTmFtZSA9IHt9O1xudmFyIGJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoKSB7XG4gIHZhciBsb29rdXAgPSBmdW5jdGlvbiBsb29rdXAocmVkdWNlcikge1xuICAgIHJldHVybiByZWR1Y2Uoc3R5bGVzLCBmdW5jdGlvbiAobywgc3R5bGUsIHByZWZpeCkge1xuICAgICAgb1twcmVmaXhdID0gcmVkdWNlKHN0eWxlLCByZWR1Y2VyLCB7fSk7XG4gICAgICByZXR1cm4gbztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgX2J5VW5pY29kZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgIGlmIChpY29uWzNdKSB7XG4gICAgICBhY2NbaWNvblszXV0gPSBpY29uTmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9KTtcbiAgX2J5TGlnYXR1cmUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICB2YXIgbGlnYXR1cmVzID0gaWNvblsyXTtcbiAgICBhY2NbaWNvbk5hbWVdID0gaWNvbk5hbWU7XG4gICAgbGlnYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGxpZ2F0dXJlKSB7XG4gICAgICBhY2NbbGlnYXR1cmVdID0gaWNvbk5hbWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSk7XG4gIHZhciBoYXNSZWd1bGFyID0gJ2ZhcicgaW4gc3R5bGVzO1xuICBfYnlPbGROYW1lID0gcmVkdWNlKHNoaW1zLCBmdW5jdGlvbiAoYWNjLCBzaGltKSB7XG4gICAgdmFyIG9sZE5hbWUgPSBzaGltWzBdO1xuICAgIHZhciBwcmVmaXggPSBzaGltWzFdO1xuICAgIHZhciBpY29uTmFtZSA9IHNoaW1bMl07XG5cbiAgICBpZiAocHJlZml4ID09PSAnZmFyJyAmJiAhaGFzUmVndWxhcikge1xuICAgICAgcHJlZml4ID0gJ2Zhcyc7XG4gICAgfVxuXG4gICAgYWNjW29sZE5hbWVdID0ge1xuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWVcbiAgICB9O1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07XG5idWlsZCgpO1xuZnVuY3Rpb24gYnlVbmljb2RlKHByZWZpeCwgdW5pY29kZSkge1xuICByZXR1cm4gKF9ieVVuaWNvZGVbcHJlZml4XSB8fCB7fSlbdW5pY29kZV07XG59XG5mdW5jdGlvbiBieUxpZ2F0dXJlKHByZWZpeCwgbGlnYXR1cmUpIHtcbiAgcmV0dXJuIChfYnlMaWdhdHVyZVtwcmVmaXhdIHx8IHt9KVtsaWdhdHVyZV07XG59XG5mdW5jdGlvbiBieU9sZE5hbWUobmFtZSkge1xuICByZXR1cm4gX2J5T2xkTmFtZVtuYW1lXSB8fCB7XG4gICAgcHJlZml4OiBudWxsLFxuICAgIGljb25OYW1lOiBudWxsXG4gIH07XG59XG5cbnZhciBzdHlsZXMkMSA9IG5hbWVzcGFjZS5zdHlsZXM7XG52YXIgZW1wdHlDYW5vbmljYWxJY29uID0gZnVuY3Rpb24gZW1wdHlDYW5vbmljYWxJY29uKCkge1xuICByZXR1cm4ge1xuICAgIHByZWZpeDogbnVsbCxcbiAgICBpY29uTmFtZTogbnVsbCxcbiAgICByZXN0OiBbXVxuICB9O1xufTtcbmZ1bmN0aW9uIGdldENhbm9uaWNhbEljb24odmFsdWVzKSB7XG4gIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNscykge1xuICAgIHZhciBpY29uTmFtZSA9IGdldEljb25OYW1lKGNvbmZpZy5mYW1pbHlQcmVmaXgsIGNscyk7XG5cbiAgICBpZiAoc3R5bGVzJDFbY2xzXSkge1xuICAgICAgYWNjLnByZWZpeCA9IGNscztcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5hdXRvRmV0Y2hTdmcgJiYgWydmYXMnLCAnZmFyJywgJ2ZhbCcsICdmYWQnLCAnZmFiJywgJ2ZhJ10uaW5kZXhPZihjbHMpID4gLTEpIHtcbiAgICAgIGFjYy5wcmVmaXggPSBjbHM7XG4gICAgfSBlbHNlIGlmIChpY29uTmFtZSkge1xuICAgICAgdmFyIHNoaW0gPSBhY2MucHJlZml4ID09PSAnZmEnID8gYnlPbGROYW1lKGljb25OYW1lKSA6IHt9O1xuICAgICAgYWNjLmljb25OYW1lID0gc2hpbS5pY29uTmFtZSB8fCBpY29uTmFtZTtcbiAgICAgIGFjYy5wcmVmaXggPSBzaGltLnByZWZpeCB8fCBhY2MucHJlZml4O1xuICAgIH0gZWxzZSBpZiAoY2xzICE9PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyAmJiBjbHMuaW5kZXhPZignZmEtdy0nKSAhPT0gMCkge1xuICAgICAgYWNjLnJlc3QucHVzaChjbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIGVtcHR5Q2Fub25pY2FsSWNvbigpKTtcbn1cbmZ1bmN0aW9uIGljb25Gcm9tTWFwcGluZyhtYXBwaW5nLCBwcmVmaXgsIGljb25OYW1lKSB7XG4gIGlmIChtYXBwaW5nICYmIG1hcHBpbmdbcHJlZml4XSAmJiBtYXBwaW5nW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgaWNvbjogbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9IdG1sKGFic3RyYWN0Tm9kZXMpIHtcbiAgdmFyIHRhZyA9IGFic3RyYWN0Tm9kZXMudGFnLFxuICAgICAgX2Fic3RyYWN0Tm9kZXMkYXR0cmliID0gYWJzdHJhY3ROb2Rlcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9PT0gdm9pZCAwID8ge30gOiBfYWJzdHJhY3ROb2RlcyRhdHRyaWIsXG4gICAgICBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPSBhYnN0cmFjdE5vZGVzLmNoaWxkcmVuLFxuICAgICAgY2hpbGRyZW4gPSBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPT09IHZvaWQgMCA/IFtdIDogX2Fic3RyYWN0Tm9kZXMkY2hpbGRyO1xuXG4gIGlmICh0eXBlb2YgYWJzdHJhY3ROb2RlcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gaHRtbEVzY2FwZShhYnN0cmFjdE5vZGVzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCI8XCIuY29uY2F0KHRhZywgXCIgXCIpLmNvbmNhdChqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSwgXCI+XCIpLmNvbmNhdChjaGlsZHJlbi5tYXAodG9IdG1sKS5qb2luKCcnKSwgXCI8L1wiKS5jb25jYXQodGFnLCBcIj5cIik7XG4gIH1cbn1cblxudmFyIG5vb3AkMiA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZnVuY3Rpb24gaXNXYXRjaGVkKG5vZGUpIHtcbiAgdmFyIGkyc3ZnID0gbm9kZS5nZXRBdHRyaWJ1dGUgPyBub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHKSA6IG51bGw7XG4gIHJldHVybiB0eXBlb2YgaTJzdmcgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBnZXRNdXRhdG9yKCkge1xuICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIG11dGF0b3JzLnJlcGxhY2U7XG4gIH1cblxuICB2YXIgbXV0YXRvciA9IG11dGF0b3JzW2NvbmZpZy5hdXRvUmVwbGFjZVN2Z107XG4gIHJldHVybiBtdXRhdG9yIHx8IG11dGF0b3JzLnJlcGxhY2U7XG59XG5cbnZhciBtdXRhdG9ycyA9IHtcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShtdXRhdGlvbikge1xuICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG4gICAgdmFyIGFic3RyYWN0ID0gbXV0YXRpb25bMV07XG4gICAgdmFyIG5ld091dGVySFRNTCA9IGFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5vdXRlckhUTUwpIHtcbiAgICAgIG5vZGUub3V0ZXJIVE1MID0gbmV3T3V0ZXJIVE1MICsgKGNvbmZpZy5rZWVwT3JpZ2luYWxTb3VyY2UgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdzdmcnID8gXCI8IS0tIFwiLmNvbmNhdChub2RlLm91dGVySFRNTCwgXCIgLS0+XCIpIDogJycpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSk7XG4gICAgICBuZXdOb2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTDtcbiAgICB9XG4gIH0sXG4gIG5lc3Q6IGZ1bmN0aW9uIG5lc3QobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdOyAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXBsYWNlZCBub2RlIHdlIGRvIG5vdCB3YW50IHRvIGNvbnRpbnVlIG5lc3Rpbmcgd2l0aGluIGl0LlxuICAgIC8vIFNob3J0LWNpcmN1aXQgdG8gdGhlIHN0YW5kYXJkIHJlcGxhY2VtZW50XG5cbiAgICBpZiAofmNsYXNzQXJyYXkobm9kZSkuaW5kZXhPZihjb25maWcucmVwbGFjZW1lbnRDbGFzcykpIHtcbiAgICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlKG11dGF0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgZm9yU3ZnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi0uKlwiKSk7XG4gICAgZGVsZXRlIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuc3R5bGU7XG4gICAgZGVsZXRlIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuaWQ7XG4gICAgdmFyIHNwbGl0Q2xhc3NlcyA9IGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3Muc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgICBpZiAoY2xzID09PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyB8fCBjbHMubWF0Y2goZm9yU3ZnKSkge1xuICAgICAgICBhY2MudG9TdmcucHVzaChjbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnRvTm9kZS5wdXNoKGNscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge1xuICAgICAgdG9Ob2RlOiBbXSxcbiAgICAgIHRvU3ZnOiBbXVxuICAgIH0pO1xuICAgIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3MgPSBzcGxpdENsYXNzZXMudG9Tdmcuam9pbignICcpO1xuICAgIHZhciBuZXdJbm5lckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgc3BsaXRDbGFzc2VzLnRvTm9kZS5qb2luKCcgJykpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcsICcnKTtcbiAgICBub2RlLmlubmVySFRNTCA9IG5ld0lubmVySFRNTDtcbiAgfVxufTtcblxuZnVuY3Rpb24gcGVyZm9ybU9wZXJhdGlvblN5bmMob3ApIHtcbiAgb3AoKTtcbn1cblxuZnVuY3Rpb24gcGVyZm9ybShtdXRhdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBjYWxsYmFja0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBub29wJDI7XG5cbiAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZyYW1lID0gcGVyZm9ybU9wZXJhdGlvblN5bmM7XG5cbiAgICBpZiAoY29uZmlnLm11dGF0ZUFwcHJvYWNoID09PSBNVVRBVElPTl9BUFBST0FDSF9BU1lOQykge1xuICAgICAgZnJhbWUgPSBXSU5ET1cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHBlcmZvcm1PcGVyYXRpb25TeW5jO1xuICAgIH1cblxuICAgIGZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtdXRhdG9yID0gZ2V0TXV0YXRvcigpO1xuICAgICAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdtdXRhdGUnKTtcbiAgICAgIG11dGF0aW9ucy5tYXAobXV0YXRvcik7XG4gICAgICBtYXJrKCk7XG4gICAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gICAgfSk7XG4gIH1cbn1cbnZhciBkaXNhYmxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gZGlzYWJsZU9ic2VydmF0aW9uKCkge1xuICBkaXNhYmxlZCA9IHRydWU7XG59XG5mdW5jdGlvbiBlbmFibGVPYnNlcnZhdGlvbigpIHtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbn1cbnZhciBtbyA9IG51bGw7XG5mdW5jdGlvbiBvYnNlcnZlKG9wdGlvbnMpIHtcbiAgaWYgKCFNVVRBVElPTl9PQlNFUlZFUikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghY29uZmlnLm9ic2VydmVNdXRhdGlvbnMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdHJlZUNhbGxiYWNrID0gb3B0aW9ucy50cmVlQ2FsbGJhY2ssXG4gICAgICBub2RlQ2FsbGJhY2sgPSBvcHRpb25zLm5vZGVDYWxsYmFjayxcbiAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sgPSBvcHRpb25zLnBzZXVkb0VsZW1lbnRzQ2FsbGJhY2ssXG4gICAgICBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPSBvcHRpb25zLm9ic2VydmVNdXRhdGlvbnNSb290LFxuICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX29wdGlvbnMkb2JzZXJ2ZU11dGF0O1xuICBtbyA9IG5ldyBNVVRBVElPTl9PQlNFUlZFUihmdW5jdGlvbiAob2JqZWN0cykge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRvQXJyYXkob2JqZWN0cykuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb25SZWNvcmQpIHtcbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzLmxlbmd0aCA+IDAgJiYgIWlzV2F0Y2hlZChtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzWzBdKSkge1xuICAgICAgICBpZiAoY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJlZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUgJiYgY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIGlzV2F0Y2hlZChtdXRhdGlvblJlY29yZC50YXJnZXQpICYmIH5BVFRSSUJVVEVTX1dBVENIRURfRk9SX01VVEFUSU9OLmluZGV4T2YobXV0YXRpb25SZWNvcmQuYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICB2YXIgX2dldENhbm9uaWNhbEljb24gPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobXV0YXRpb25SZWNvcmQudGFyZ2V0KSksXG4gICAgICAgICAgICAgIHByZWZpeCA9IF9nZXRDYW5vbmljYWxJY29uLnByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWUgPSBfZ2V0Q2Fub25pY2FsSWNvbi5pY29uTmFtZTtcblxuICAgICAgICAgIGlmIChwcmVmaXgpIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4JywgcHJlZml4KTtcbiAgICAgICAgICBpZiAoaWNvbk5hbWUpIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicsIGljb25OYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgbW8ub2JzZXJ2ZShvYnNlcnZlTXV0YXRpb25zUm9vdCwge1xuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9KTtcbn1cbmZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gIGlmICghbW8pIHJldHVybjtcbiAgbW8uZGlzY29ubmVjdCgpO1xufVxuXG5mdW5jdGlvbiBzdHlsZVBhcnNlciAobm9kZSkge1xuICB2YXIgc3R5bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgdmFyIHZhbCA9IFtdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHZhbCA9IHN0eWxlLnNwbGl0KCc7JykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlKSB7XG4gICAgICB2YXIgc3R5bGVzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgIHZhciBwcm9wID0gc3R5bGVzWzBdO1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVzLnNsaWNlKDEpO1xuXG4gICAgICBpZiAocHJvcCAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFjY1twcm9wXSA9IHZhbHVlLmpvaW4oJzonKS50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gY2xhc3NQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIGV4aXN0aW5nUHJlZml4ID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4Jyk7XG4gIHZhciBleGlzdGluZ0ljb25OYW1lID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpO1xuICB2YXIgaW5uZXJUZXh0ID0gbm9kZS5pbm5lclRleHQgIT09IHVuZGVmaW5lZCA/IG5vZGUuaW5uZXJUZXh0LnRyaW0oKSA6ICcnO1xuICB2YXIgdmFsID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG5vZGUpKTtcblxuICBpZiAoZXhpc3RpbmdQcmVmaXggJiYgZXhpc3RpbmdJY29uTmFtZSkge1xuICAgIHZhbC5wcmVmaXggPSBleGlzdGluZ1ByZWZpeDtcbiAgICB2YWwuaWNvbk5hbWUgPSBleGlzdGluZ0ljb25OYW1lO1xuICB9XG5cbiAgaWYgKHZhbC5wcmVmaXggJiYgaW5uZXJUZXh0Lmxlbmd0aCA+IDEpIHtcbiAgICB2YWwuaWNvbk5hbWUgPSBieUxpZ2F0dXJlKHZhbC5wcmVmaXgsIG5vZGUuaW5uZXJUZXh0KTtcbiAgfSBlbHNlIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPT09IDEpIHtcbiAgICB2YWwuaWNvbk5hbWUgPSBieVVuaWNvZGUodmFsLnByZWZpeCwgdG9IZXgobm9kZS5pbm5lclRleHQpKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBwYXJzZVRyYW5zZm9ybVN0cmluZyA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZykge1xuICB2YXIgdHJhbnNmb3JtID0ge1xuICAgIHNpemU6IDE2LFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBmbGlwWDogZmFsc2UsXG4gICAgZmxpcFk6IGZhbHNlLFxuICAgIHJvdGF0ZTogMFxuICB9O1xuXG4gIGlmICghdHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtU3RyaW5nLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbikge1xuICAgICAgdmFyIHBhcnRzID0gbi50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJyk7XG4gICAgICB2YXIgZmlyc3QgPSBwYXJ0c1swXTtcbiAgICAgIHZhciByZXN0ID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ2gnKSB7XG4gICAgICAgIGFjYy5mbGlwWCA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAndicpIHtcbiAgICAgICAgYWNjLmZsaXBZID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgcmVzdCA9IHBhcnNlRmxvYXQocmVzdCk7XG5cbiAgICAgIGlmIChpc05hTihyZXN0KSkge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGZpcnN0KSB7XG4gICAgICAgIGNhc2UgJ2dyb3cnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Nocmluayc6XG4gICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgYWNjLnggPSBhY2MueCAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55IC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyb3RhdGUnOlxuICAgICAgICAgIGFjYy5yb3RhdGUgPSBhY2Mucm90YXRlICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0cmFuc2Zvcm0pO1xuICB9XG59O1xuZnVuY3Rpb24gdHJhbnNmb3JtUGFyc2VyIChub2RlKSB7XG4gIHJldHVybiBwYXJzZVRyYW5zZm9ybVN0cmluZyhub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10cmFuc2Zvcm0nKSk7XG59XG5cbmZ1bmN0aW9uIHN5bWJvbFBhcnNlciAobm9kZSkge1xuICB2YXIgc3ltYm9sID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtc3ltYm9sJyk7XG4gIHJldHVybiBzeW1ib2wgPT09IG51bGwgPyBmYWxzZSA6IHN5bWJvbCA9PT0gJycgPyB0cnVlIDogc3ltYm9sO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzUGFyc2VyIChub2RlKSB7XG4gIHZhciBleHRyYUF0dHJpYnV0ZXMgPSB0b0FycmF5KG5vZGUuYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHIpIHtcbiAgICBpZiAoYWNjLm5hbWUgIT09ICdjbGFzcycgJiYgYWNjLm5hbWUgIT09ICdzdHlsZScpIHtcbiAgICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuXG4gIGlmIChjb25maWcuYXV0b0ExMXkpIHtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGV4dHJhQXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdChuZXh0VW5pcXVlSWQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4dHJhQXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgIGV4dHJhQXR0cmlidXRlc1snZm9jdXNhYmxlJ10gPSAnZmFsc2UnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleHRyYUF0dHJpYnV0ZXM7XG59XG5cbmZ1bmN0aW9uIG1hc2tQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIG1hc2sgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1tYXNrJyk7XG5cbiAgaWYgKCFtYXNrKSB7XG4gICAgcmV0dXJuIGVtcHR5Q2Fub25pY2FsSWNvbigpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRDYW5vbmljYWxJY29uKG1hc2suc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpLnRyaW0oKTtcbiAgICB9KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmxhbmtNZXRhKCkge1xuICByZXR1cm4ge1xuICAgIGljb25OYW1lOiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHByZWZpeDogbnVsbCxcbiAgICB0cmFuc2Zvcm06IG1lYW5pbmdsZXNzVHJhbnNmb3JtLFxuICAgIHN5bWJvbDogZmFsc2UsXG4gICAgbWFzazogbnVsbCxcbiAgICBleHRyYToge1xuICAgICAgY2xhc3NlczogW10sXG4gICAgICBzdHlsZXM6IHt9LFxuICAgICAgYXR0cmlidXRlczoge31cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZU1ldGEobm9kZSkge1xuICB2YXIgX2NsYXNzUGFyc2VyID0gY2xhc3NQYXJzZXIobm9kZSksXG4gICAgICBpY29uTmFtZSA9IF9jbGFzc1BhcnNlci5pY29uTmFtZSxcbiAgICAgIHByZWZpeCA9IF9jbGFzc1BhcnNlci5wcmVmaXgsXG4gICAgICBleHRyYUNsYXNzZXMgPSBfY2xhc3NQYXJzZXIucmVzdDtcblxuICB2YXIgZXh0cmFTdHlsZXMgPSBzdHlsZVBhcnNlcihub2RlKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHRyYW5zZm9ybVBhcnNlcihub2RlKTtcbiAgdmFyIHN5bWJvbCA9IHN5bWJvbFBhcnNlcihub2RlKTtcbiAgdmFyIGV4dHJhQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNQYXJzZXIobm9kZSk7XG4gIHZhciBtYXNrID0gbWFza1BhcnNlcihub2RlKTtcbiAgcmV0dXJuIHtcbiAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgdGl0bGU6IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpLFxuICAgIHByZWZpeDogcHJlZml4LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIG1hc2s6IG1hc2ssXG4gICAgZXh0cmE6IHtcbiAgICAgIGNsYXNzZXM6IGV4dHJhQ2xhc3NlcyxcbiAgICAgIHN0eWxlczogZXh0cmFTdHlsZXMsXG4gICAgICBhdHRyaWJ1dGVzOiBleHRyYUF0dHJpYnV0ZXNcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIE1pc3NpbmdJY29uKGVycm9yKSB7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nSWNvbic7XG4gIHRoaXMubWVzc2FnZSA9IGVycm9yIHx8ICdJY29uIHVuYXZhaWxhYmxlJztcbiAgdGhpcy5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xufVxuTWlzc2luZ0ljb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ0ljb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ0ljb247XG5cbnZhciBGSUxMID0ge1xuICBmaWxsOiAnY3VycmVudENvbG9yJ1xufTtcbnZhciBBTklNQVRJT05fQkFTRSA9IHtcbiAgYXR0cmlidXRlVHlwZTogJ1hNTCcsXG4gIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZScsXG4gIGR1cjogJzJzJ1xufTtcbnZhciBSSU5HID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIGQ6ICdNMTU2LjUsNDQ3LjdsLTEyLjYsMjkuNWMtMTguNy05LjUtMzUuOS0yMS4yLTUxLjUtMzQuOWwyMi43LTIyLjdDMTI3LjYsNDMwLjUsMTQxLjUsNDQwLDE1Ni41LDQ0Ny43eiBNNDAuNiwyNzJIOC41IGMxLjQsMjEuMiw1LjQsNDEuNywxMS43LDYxLjFMNTAsMzIxLjJDNDUuMSwzMDUuNSw0MS44LDI4OSw0MC42LDI3MnogTTQwLjYsMjQwYzEuNC0xOC44LDUuMi0zNywxMS4xLTU0LjFsLTI5LjUtMTIuNiBDMTQuNywxOTQuMywxMCwyMTYuNyw4LjUsMjQwSDQwLjZ6IE02NC4zLDE1Ni41YzcuOC0xNC45LDE3LjItMjguOCwyOC4xLTQxLjVMNjkuNyw5Mi4zYy0xMy43LDE1LjYtMjUuNSwzMi44LTM0LjksNTEuNSBMNjQuMywxNTYuNXogTTM5Nyw0MTkuNmMtMTMuOSwxMi0yOS40LDIyLjMtNDYuMSwzMC40bDExLjksMjkuOGMyMC43LTkuOSwzOS44LTIyLjYsNTYuOS0zNy42TDM5Nyw0MTkuNnogTTExNSw5Mi40IGMxMy45LTEyLDI5LjQtMjIuMyw0Ni4xLTMwLjRsLTExLjktMjkuOGMtMjAuNyw5LjktMzkuOCwyMi42LTU2LjgsMzcuNkwxMTUsOTIuNHogTTQ0Ny43LDM1NS41Yy03LjgsMTQuOS0xNy4yLDI4LjgtMjguMSw0MS41IGwyMi43LDIyLjdjMTMuNy0xNS42LDI1LjUtMzIuOSwzNC45LTUxLjVMNDQ3LjcsMzU1LjV6IE00NzEuNCwyNzJjLTEuNCwxOC44LTUuMiwzNy0xMS4xLDU0LjFsMjkuNSwxMi42IGM3LjUtMjEuMSwxMi4yLTQzLjUsMTMuNi02Ni44SDQ3MS40eiBNMzIxLjIsNDYyYy0xNS43LDUtMzIuMiw4LjItNDkuMiw5LjR2MzIuMWMyMS4yLTEuNCw0MS43LTUuNCw2MS4xLTExLjdMMzIxLjIsNDYyeiBNMjQwLDQ3MS40Yy0xOC44LTEuNC0zNy01LjItNTQuMS0xMS4xbC0xMi42LDI5LjVjMjEuMSw3LjUsNDMuNSwxMi4yLDY2LjgsMTMuNlY0NzEuNHogTTQ2MiwxOTAuOGM1LDE1LjcsOC4yLDMyLjIsOS40LDQ5LjJoMzIuMSBjLTEuNC0yMS4yLTUuNC00MS43LTExLjctNjEuMUw0NjIsMTkwLjh6IE05Mi40LDM5N2MtMTItMTMuOS0yMi4zLTI5LjQtMzAuNC00Ni4xbC0yOS44LDExLjljOS45LDIwLjcsMjIuNiwzOS44LDM3LjYsNTYuOSBMOTIuNCwzOTd6IE0yNzIsNDAuNmMxOC44LDEuNCwzNi45LDUuMiw1NC4xLDExLjFsMTIuNi0yOS41QzMxNy43LDE0LjcsMjk1LjMsMTAsMjcyLDguNVY0MC42eiBNMTkwLjgsNTAgYzE1LjctNSwzMi4yLTguMiw0OS4yLTkuNFY4LjVjLTIxLjIsMS40LTQxLjcsNS40LTYxLjEsMTEuN0wxOTAuOCw1MHogTTQ0Mi4zLDkyLjNMNDE5LjYsMTE1YzEyLDEzLjksMjIuMywyOS40LDMwLjUsNDYuMSBsMjkuOC0xMS45QzQ3MCwxMjguNSw0NTcuMywxMDkuNCw0NDIuMyw5Mi4zeiBNMzk3LDkyLjRsMjIuNy0yMi43Yy0xNS42LTEzLjctMzIuOC0yNS41LTUxLjUtMzQuOWwtMTIuNiwyOS41IEMzNzAuNCw3Mi4xLDM4NC40LDgxLjUsMzk3LDkyLjR6J1xuICB9KVxufTtcblxudmFyIE9QQUNJVFlfQU5JTUFURSA9IF9vYmplY3RTcHJlYWQoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gIGF0dHJpYnV0ZU5hbWU6ICdvcGFjaXR5J1xufSk7XG5cbnZhciBET1QgPSB7XG4gIHRhZzogJ2NpcmNsZScsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBjeDogJzI1NicsXG4gICAgY3k6ICczNjQnLFxuICAgIHI6ICcyOCdcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICB2YWx1ZXM6ICcyODsxNDsyODsyODsxNDsyODsnXG4gICAgfSlcbiAgfSwge1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMTswOzE7MTswOzE7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIFFVRVNUSU9OID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIG9wYWNpdHk6ICcxJyxcbiAgICBkOiAnTTI2My43LDMxMmgtMTZjLTYuNiwwLTEyLTUuNC0xMi0xMmMwLTcxLDc3LjQtNjMuOSw3Ny40LTEwNy44YzAtMjAtMTcuOC00MC4yLTU3LjQtNDAuMmMtMjkuMSwwLTQ0LjMsOS42LTU5LjIsMjguNyBjLTMuOSw1LTExLjEsNi0xNi4yLDIuNGwtMTMuMS05LjJjLTUuNi0zLjktNi45LTExLjgtMi42LTE3LjJjMjEuMi0yNy4yLDQ2LjQtNDQuNyw5MS4yLTQ0LjdjNTIuMywwLDk3LjQsMjkuOCw5Ny40LDgwLjIgYzAsNjcuNi03Ny40LDYzLjUtNzcuNCwxMDcuOEMyNzUuNywzMDYuNiwyNzAuMywzMTIsMjYzLjcsMzEyeidcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMTswOzA7MDswOzE7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIEVYQ0xBTUFUSU9OID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIG9wYWNpdHk6ICcwJyxcbiAgICBkOiAnTTIzMi41LDEzNC41bDcsMTY4YzAuMyw2LjQsNS42LDExLjUsMTIsMTEuNWg5YzYuNCwwLDExLjctNS4xLDEyLTExLjVsNy0xNjhjMC4zLTYuOC01LjItMTIuNS0xMi0xMi41aC0yMyBDMjM3LjcsMTIyLDIzMi4yLDEyNy43LDIzMi41LDEzNC41eidcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMDswOzE7MTswOzA7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIG1pc3NpbmcgPSB7XG4gIHRhZzogJ2cnLFxuICBjaGlsZHJlbjogW1JJTkcsIERPVCwgUVVFU1RJT04sIEVYQ0xBTUFUSU9OXVxufTtcblxudmFyIHN0eWxlcyQyID0gbmFtZXNwYWNlLnN0eWxlcztcbmZ1bmN0aW9uIGFzRm91bmRJY29uKGljb24pIHtcbiAgdmFyIHdpZHRoID0gaWNvblswXTtcbiAgdmFyIGhlaWdodCA9IGljb25bMV07XG5cbiAgdmFyIF9pY29uJHNsaWNlID0gaWNvbi5zbGljZSg0KSxcbiAgICAgIF9pY29uJHNsaWNlMiA9IF9zbGljZWRUb0FycmF5KF9pY29uJHNsaWNlLCAxKSxcbiAgICAgIHZlY3RvckRhdGEgPSBfaWNvbiRzbGljZTJbMF07XG5cbiAgdmFyIGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZlY3RvckRhdGEpKSB7XG4gICAgZWxlbWVudCA9IHtcbiAgICAgIHRhZzogJ2cnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuR1JPVVApXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlNFQ09OREFSWSksXG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgZDogdmVjdG9yRGF0YVswXVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlkpLFxuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMV1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQgPSB7XG4gICAgICB0YWc6ICdwYXRoJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgIGQ6IHZlY3RvckRhdGFcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3VuZDogdHJ1ZSxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgaWNvbjogZWxlbWVudFxuICB9O1xufVxuZnVuY3Rpb24gZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHZhbCA9IHtcbiAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgIHdpZHRoOiA1MTIsXG4gICAgICBoZWlnaHQ6IDUxMixcbiAgICAgIGljb246IG1pc3NpbmdcbiAgICB9O1xuXG4gICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiBzdHlsZXMkMltwcmVmaXhdICYmIHN0eWxlcyQyW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgICB2YXIgaWNvbiA9IHN0eWxlcyQyW3ByZWZpeF1baWNvbk5hbWVdO1xuICAgICAgcmV0dXJuIHJlc29sdmUoYXNGb3VuZEljb24oaWNvbikpO1xuICAgIH1cblxuICAgIHZhciBoZWFkZXJzID0ge307XG5cbiAgICBpZiAoX3R5cGVvZihXSU5ET1cuRm9udEF3ZXNvbWVLaXRDb25maWcpID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93LkZvbnRBd2Vzb21lS2l0Q29uZmlnLnRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgaGVhZGVyc1snZmEta2l0LXRva2VuJ10gPSBXSU5ET1cuRm9udEF3ZXNvbWVLaXRDb25maWcudG9rZW47XG4gICAgfVxuXG4gICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiAhY29uZmlnLnNob3dNaXNzaW5nSWNvbnMpIHtcbiAgICAgIHJlamVjdChuZXcgTWlzc2luZ0ljb24oXCJJY29uIGlzIG1pc3NpbmcgZm9yIHByZWZpeCBcIi5jb25jYXQocHJlZml4LCBcIiB3aXRoIGljb24gbmFtZSBcIikuY29uY2F0KGljb25OYW1lKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHZhbCk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIHN0eWxlcyQzID0gbmFtZXNwYWNlLnN0eWxlcztcblxuZnVuY3Rpb24gZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uKG5vZGUsIG5vZGVNZXRhKSB7XG4gIHZhciBpY29uTmFtZSA9IG5vZGVNZXRhLmljb25OYW1lLFxuICAgICAgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgIHByZWZpeCA9IG5vZGVNZXRhLnByZWZpeCxcbiAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IG5vZGVNZXRhLnN5bWJvbCxcbiAgICAgIG1hc2sgPSBub2RlTWV0YS5tYXNrLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHBpY2tlZC5hbGwoW2ZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLCBmaW5kSWNvbihtYXNrLmljb25OYW1lLCBtYXNrLnByZWZpeCldKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICBtYWluID0gX3JlZjJbMF0sXG4gICAgICAgICAgbWFzayA9IF9yZWYyWzFdO1xuXG4gICAgICByZXNvbHZlKFtub2RlLCBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgICBpY29uczoge1xuICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgbWFzazogbWFza1xuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgIG1hc2s6IG1hc2ssXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZXh0cmE6IGV4dHJhLFxuICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgIH0pXSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxheWVyc1RleHQobm9kZSwgbm9kZU1ldGEpIHtcbiAgdmFyIHRpdGxlID0gbm9kZU1ldGEudGl0bGUsXG4gICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuICB2YXIgd2lkdGggPSBudWxsO1xuICB2YXIgaGVpZ2h0ID0gbnVsbDtcblxuICBpZiAoSVNfSUUpIHtcbiAgICB2YXIgY29tcHV0ZWRGb250U2l6ZSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobm9kZSkuZm9udFNpemUsIDEwKTtcbiAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB3aWR0aCA9IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCAvIGNvbXB1dGVkRm9udFNpemU7XG4gICAgaGVpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCAvIGNvbXB1dGVkRm9udFNpemU7XG4gIH1cblxuICBpZiAoY29uZmlnLmF1dG9BMTF5ICYmICF0aXRsZSkge1xuICAgIGV4dHJhLmF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gIH1cblxuICByZXR1cm4gcGlja2VkLnJlc29sdmUoW25vZGUsIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgIGNvbnRlbnQ6IG5vZGUuaW5uZXJIVE1MLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZXh0cmE6IGV4dHJhLFxuICAgIHdhdGNoYWJsZTogdHJ1ZVxuICB9KV0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpIHtcbiAgdmFyIG5vZGVNZXRhID0gcGFyc2VNZXRhKG5vZGUpO1xuXG4gIGlmICh+bm9kZU1ldGEuZXh0cmEuY2xhc3Nlcy5pbmRleE9mKExBWUVSU19URVhUX0NMQVNTTkFNRSkpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVMYXllcnNUZXh0KG5vZGUsIG5vZGVNZXRhKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uKG5vZGUsIG5vZGVNZXRhKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvblRyZWUocm9vdCkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIHZhciBodG1sQ2xhc3NMaXN0ID0gRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdDtcblxuICB2YXIgaGNsQWRkID0gZnVuY3Rpb24gaGNsQWRkKHN1ZmZpeCkge1xuICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LmFkZChcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gIH07XG5cbiAgdmFyIGhjbFJlbW92ZSA9IGZ1bmN0aW9uIGhjbFJlbW92ZShzdWZmaXgpIHtcbiAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5yZW1vdmUoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICB9O1xuXG4gIHZhciBwcmVmaXhlcyA9IGNvbmZpZy5hdXRvRmV0Y2hTdmcgPyBPYmplY3Qua2V5cyhQUkVGSVhfVE9fU1RZTEUpIDogT2JqZWN0LmtleXMoc3R5bGVzJDMpO1xuICB2YXIgcHJlZml4ZXNEb21RdWVyeSA9IFtcIi5cIi5jb25jYXQoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKV0uY29uY2F0KHByZWZpeGVzLm1hcChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBcIi5cIi5jb25jYXQocCwgXCI6bm90KFtcIikuY29uY2F0KERBVEFfRkFfSTJTVkcsIFwiXSlcIik7XG4gIH0pKS5qb2luKCcsICcpO1xuXG4gIGlmIChwcmVmaXhlc0RvbVF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjYW5kaWRhdGVzID0gW107XG5cbiAgdHJ5IHtcbiAgICBjYW5kaWRhdGVzID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwocHJlZml4ZXNEb21RdWVyeSkpO1xuICB9IGNhdGNoIChlKSB7Ly8gbm9vcFxuICB9XG5cbiAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgIGhjbEFkZCgncGVuZGluZycpO1xuICAgIGhjbFJlbW92ZSgnY29tcGxldGUnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ29uVHJlZScpO1xuICB2YXIgbXV0YXRpb25zID0gY2FuZGlkYXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbXV0YXRpb24gPSBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpO1xuXG4gICAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgICAgYWNjLnB1c2gobXV0YXRpb24pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghUFJPRFVDVElPTikge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1pc3NpbmdJY29uKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHBpY2tlZC5hbGwobXV0YXRpb25zKS50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZE11dGF0aW9ucykge1xuICAgICAgcGVyZm9ybShyZXNvbHZlZE11dGF0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgICAgICBoY2xBZGQoJ2FjdGl2ZScpO1xuICAgICAgICBoY2xBZGQoJ2NvbXBsZXRlJyk7XG4gICAgICAgIGhjbFJlbW92ZSgncGVuZGluZycpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgICBtYXJrKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1hcmsoKTtcbiAgICAgIHJlamVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uTm9kZShub2RlKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgZ2VuZXJhdGVNdXRhdGlvbihub2RlKS50aGVuKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgcGVyZm9ybShbbXV0YXRpb25dLCBjYWxsYmFjayk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsIHBvc2l0aW9uKSB7XG4gIHZhciBwZW5kaW5nQXR0cmlidXRlID0gXCJcIi5jb25jYXQoREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HKS5jb25jYXQocG9zaXRpb24ucmVwbGFjZSgnOicsICctJykpO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpICE9PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIG5vZGUgaXMgYWxyZWFkeSBiZWluZyBwcm9jZXNzZWRcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdG9BcnJheShub2RlLmNoaWxkcmVuKTtcbiAgICB2YXIgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSA9PT0gcG9zaXRpb247XG4gICAgfSlbMF07XG4gICAgdmFyIHN0eWxlcyA9IFdJTkRPVy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBvc2l0aW9uKTtcbiAgICB2YXIgZm9udEZhbWlseSA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LWZhbWlseScpLm1hdGNoKEZPTlRfRkFNSUxZX1BBVFRFUk4pO1xuICAgIHZhciBmb250V2VpZ2h0ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtd2VpZ2h0Jyk7XG5cbiAgICBpZiAoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgJiYgIWZvbnRGYW1pbHkpIHtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIGl0IGJ1dCB0aGUgY3VycmVudCBjb21wdXRlZCBzdHlsZSBkb2VzIG5vdCByZXN1bHQgaW4gYSBmb250LWZhbWlseSxcbiAgICAgIC8vIHRoYXQgcHJvYmFibHkgbWVhbnMgdGhhdCBhIGNsYXNzIG5hbWUgdGhhdCB3YXMgcHJldmlvdXNseSBwcmVzZW50IHRvIG1ha2UgdGhlIGljb24gaGFzIGJlZW5cbiAgICAgIC8vIHJlbW92ZWQuIFNvIHdlIG5vdyBzaG91bGQgZGVsZXRlIHRoZSBpY29uLlxuICAgICAgbm9kZS5yZW1vdmVDaGlsZChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCk7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0gZWxzZSBpZiAoZm9udEZhbWlseSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuICAgICAgdmFyIHByZWZpeCA9IH5bJ1NvbGlkJywgJ1JlZ3VsYXInLCAnTGlnaHQnLCAnRHVvdG9uZScsICdCcmFuZHMnXS5pbmRleE9mKGZvbnRGYW1pbHlbMV0pID8gU1RZTEVfVE9fUFJFRklYW2ZvbnRGYW1pbHlbMV0udG9Mb3dlckNhc2UoKV0gOiBGT05UX1dFSUdIVF9UT19QUkVGSVhbZm9udFdlaWdodF07XG4gICAgICB2YXIgaGV4VmFsdWUgPSB0b0hleChjb250ZW50Lmxlbmd0aCA9PT0gMyA/IGNvbnRlbnQuc3Vic3RyKDEsIDEpIDogY29udGVudCk7XG4gICAgICB2YXIgaWNvbk5hbWUgPSBieVVuaWNvZGUocHJlZml4LCBoZXhWYWx1ZSk7XG4gICAgICB2YXIgaWNvbklkZW50aWZpZXIgPSBpY29uTmFtZTsgLy8gT25seSBjb252ZXJ0IHRoZSBwc2V1ZG8gZWxlbWVudCBpbiB0aGlzIDpiZWZvcmUvOmFmdGVyIHBvc2l0aW9uIGludG8gYW4gaWNvbiBpZiB3ZSBoYXZlbid0XG4gICAgICAvLyBhbHJlYWR5IGRvbmUgc28gd2l0aCB0aGUgc2FtZSBwcmVmaXggYW5kIGljb25OYW1lXG5cbiAgICAgIGlmIChpY29uTmFtZSAmJiAoIWFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCkgIT09IHByZWZpeCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9JQ09OKSAhPT0gaWNvbklkZW50aWZpZXIpKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUsIGljb25JZGVudGlmaWVyKTtcblxuICAgICAgICBpZiAoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpIHtcbiAgICAgICAgICAvLyBEZWxldGUgdGhlIG9sZCBvbmUsIHNpbmNlIHdlJ3JlIHJlcGxhY2luZyBpdCB3aXRoIGEgbmV3IG9uZVxuICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1ldGEgPSBibGFua01ldGEoKTtcbiAgICAgICAgdmFyIGV4dHJhID0gbWV0YS5leHRyYTtcbiAgICAgICAgZXh0cmEuYXR0cmlidXRlc1tEQVRBX0ZBX1BTRVVET19FTEVNRU5UXSA9IHBvc2l0aW9uO1xuICAgICAgICBmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KS50aGVuKGZ1bmN0aW9uIChtYWluKSB7XG4gICAgICAgICAgdmFyIGFic3RyYWN0ID0gbWFrZUlubGluZVN2Z0Fic3RyYWN0KF9vYmplY3RTcHJlYWQoe30sIG1ldGEsIHtcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgICAgIG1hc2s6IGVtcHR5Q2Fub25pY2FsSWNvbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICBpY29uTmFtZTogaWNvbklkZW50aWZpZXIsXG4gICAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJzpiZWZvcmUnKSB7XG4gICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBub2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsZW1lbnQub3V0ZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2Uobm9kZSkge1xuICByZXR1cm4gcGlja2VkLmFsbChbcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6YmVmb3JlJyksIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOmFmdGVyJyldKTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc2FibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5oZWFkICYmICF+VEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMuaW5kZXhPZihub2RlLnRhZ05hbWUudG9VcHBlckNhc2UoKSkgJiYgIW5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpICYmICghbm9kZS5wYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZS50YWdOYW1lICE9PSAnc3ZnJyk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFBzZXVkb0VsZW1lbnRzIChyb290KSB7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgb3BlcmF0aW9ucyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLmZpbHRlcihwcm9jZXNzYWJsZSkubWFwKHJlcGxhY2UpO1xuICAgIHZhciBlbmQgPSBwZXJmLmJlZ2luKCdzZWFyY2hQc2V1ZG9FbGVtZW50cycpO1xuICAgIGRpc2FibGVPYnNlcnZhdGlvbigpO1xuICAgIHBpY2tlZC5hbGwob3BlcmF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBlbmQoKTtcbiAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgZW5kKCk7XG4gICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgcmVqZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgYmFzZVN0eWxlcyA9IFwic3ZnOm5vdCg6cm9vdCkuc3ZnLWlubGluZS0tZmEge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtbGcge1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjIyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xIHtcXG4gIHdpZHRoOiAwLjA2MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMiB7XFxuICB3aWR0aDogMC4xMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMyB7XFxuICB3aWR0aDogMC4xODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTQge1xcbiAgd2lkdGg6IDAuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNSB7XFxuICB3aWR0aDogMC4zMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTYge1xcbiAgd2lkdGg6IDAuMzc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTcge1xcbiAgd2lkdGg6IDAuNDM3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy04IHtcXG4gIHdpZHRoOiAwLjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctOSB7XFxuICB3aWR0aDogMC41NjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEwIHtcXG4gIHdpZHRoOiAwLjYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xMSB7XFxuICB3aWR0aDogMC42ODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEyIHtcXG4gIHdpZHRoOiAwLjc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEzIHtcXG4gIHdpZHRoOiAwLjgxMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTQge1xcbiAgd2lkdGg6IDAuODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE1IHtcXG4gIHdpZHRoOiAwLjkzNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTYge1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTcge1xcbiAgd2lkdGg6IDEuMDYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xOCB7XFxuICB3aWR0aDogMS4xMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTkge1xcbiAgd2lkdGg6IDEuMTg3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0yMCB7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1ib3JkZXIge1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWxpIHtcXG4gIHdpZHRoOiAyZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1mdyB7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG5cXG4uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5mYS1sYXllcnMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxuICB3aWR0aDogMWVtO1xcbn1cXG4uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtY291bnRlciwgLmZhLWxheWVycy10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy10ZXh0IHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtY291bnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyNTNhO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXgtd2lkdGg6IDVlbTtcXG4gIG1pbi13aWR0aDogMS41ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgcmlnaHQ6IDA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtYm90dG9tLXJpZ2h0IHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiBhdXRvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy1ib3R0b20tbGVmdCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxuICB0b3A6IGF1dG87XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG59XFxuXFxuLmZhLWxheWVycy10b3AtcmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1sZWZ0IHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4uZmEtbGcge1xcbiAgZm9udC1zaXplOiAxLjMzMzMzMzMzMzNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMDY2N2VtO1xcbn1cXG5cXG4uZmEteHMge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbi5mYS1zbSB7XFxuICBmb250LXNpemU6IDAuODc1ZW07XFxufVxcblxcbi5mYS0xeCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmZhLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uZmEtM3gge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5mYS00eCB7XFxuICBmb250LXNpemU6IDRlbTtcXG59XFxuXFxuLmZhLTV4IHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG5cXG4uZmEtNngge1xcbiAgZm9udC1zaXplOiA2ZW07XFxufVxcblxcbi5mYS03eCB7XFxuICBmb250LXNpemU6IDdlbTtcXG59XFxuXFxuLmZhLTh4IHtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbn1cXG5cXG4uZmEtOXgge1xcbiAgZm9udC1zaXplOiA5ZW07XFxufVxcblxcbi5mYS0xMHgge1xcbiAgZm9udC1zaXplOiAxMGVtO1xcbn1cXG5cXG4uZmEtZncge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuXFxuLmZhLXVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuLmZhLXVsID4gbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZmEtbGkge1xcbiAgbGVmdDogLTJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyZW07XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmZhLWJvcmRlciB7XFxuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xZW07XFxuICBwYWRkaW5nOiAwLjJlbSAwLjI1ZW0gMC4xNWVtO1xcbn1cXG5cXG4uZmEtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4uZmEtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5mYS5mYS1wdWxsLWxlZnQsXFxuLmZhcy5mYS1wdWxsLWxlZnQsXFxuLmZhci5mYS1wdWxsLWxlZnQsXFxuLmZhbC5mYS1wdWxsLWxlZnQsXFxuLmZhYi5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcXG59XFxuLmZhLmZhLXB1bGwtcmlnaHQsXFxuLmZhcy5mYS1wdWxsLXJpZ2h0LFxcbi5mYXIuZmEtcHVsbC1yaWdodCxcXG4uZmFsLmZhLXB1bGwtcmlnaHQsXFxuLmZhYi5mYS1wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcXG59XFxuXFxuLmZhLXNwaW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG4uZmEtcHVsc2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4uZmEtcm90YXRlLTkwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTE4MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTI3MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxufVxcblxcbi5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxufVxcblxcbi5mYS1mbGlwLWJvdGgsIC5mYS1mbGlwLWhvcml6b250YWwuZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XFxufVxcblxcbjpyb290IC5mYS1yb3RhdGUtOTAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0xODAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0yNzAsXFxuOnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCxcXG46cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCxcXG46cm9vdCAuZmEtZmxpcC1ib3RoIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBub25lO1xcbiAgICAgICAgICBmaWx0ZXI6IG5vbmU7XFxufVxcblxcbi5mYS1zdGFjayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyLjVlbTtcXG59XFxuXFxuLmZhLXN0YWNrLTF4LFxcbi5mYS1zdGFjay0yeCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0xeCB7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0yeCB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyLjVlbTtcXG59XFxuXFxuLmZhLWludmVyc2Uge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5zci1vbmx5IHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSwgLnNyLW9ubHktZm9jdXNhYmxlOmZvY3VzIHtcXG4gIGNsaXA6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIC5mYS1wcmltYXJ5IHtcXG4gIGZpbGw6IHZhcigtLWZhLXByaW1hcnktY29sb3IsIGN1cnJlbnRDb2xvcik7XFxuICBvcGFjaXR5OiAxO1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LCAxKTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIC5mYS1zZWNvbmRhcnkge1xcbiAgZmlsbDogdmFyKC0tZmEtc2Vjb25kYXJ5LWNvbG9yLCBjdXJyZW50Q29sb3IpO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtc2Vjb25kYXJ5LW9wYWNpdHksIDAuNCk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zd2FwLW9wYWNpdHkgLmZhLXByaW1hcnkge1xcbiAgb3BhY2l0eTogMC40O1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtc2Vjb25kYXJ5LW9wYWNpdHksIDAuNCk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zd2FwLW9wYWNpdHkgLmZhLXNlY29uZGFyeSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LCAxKTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXByaW1hcnksXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXNlY29uZGFyeSB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXFxuLmZhZC5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIjtcblxuZnVuY3Rpb24gY3NzICgpIHtcbiAgdmFyIGRmcCA9IERFRkFVTFRfRkFNSUxZX1BSRUZJWDtcbiAgdmFyIGRyYyA9IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1M7XG4gIHZhciBmcCA9IGNvbmZpZy5mYW1pbHlQcmVmaXg7XG4gIHZhciByYyA9IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzO1xuICB2YXIgcyA9IGJhc2VTdHlsZXM7XG5cbiAgaWYgKGZwICE9PSBkZnAgfHwgcmMgIT09IGRyYykge1xuICAgIHZhciBkUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiLmNvbmNhdChkZnAsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgdmFyIGN1c3RvbVByb3BQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwtLVwiLmNvbmNhdChkZnAsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgdmFyIHJQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRyYyksICdnJyk7XG4gICAgcyA9IHMucmVwbGFjZShkUGF0dCwgXCIuXCIuY29uY2F0KGZwLCBcIi1cIikpLnJlcGxhY2UoY3VzdG9tUHJvcFBhdHQsIFwiLS1cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShyUGF0dCwgXCIuXCIuY29uY2F0KHJjKSk7XG4gIH1cblxuICByZXR1cm4gcztcbn1cblxudmFyIExpYnJhcnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMaWJyYXJ5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaWJyYXJ5KTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMaWJyYXJ5LCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRlZmluaXRpb25zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBkZWZpbml0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFkZGl0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZSh0aGlzLl9wdWxsRGVmaW5pdGlvbnMsIHt9KTtcbiAgICAgIE9iamVjdC5rZXlzKGFkZGl0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzLmRlZmluaXRpb25zW2tleV0gPSBfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5kZWZpbml0aW9uc1trZXldIHx8IHt9LCBhZGRpdGlvbnNba2V5XSk7XG4gICAgICAgIGRlZmluZUljb25zKGtleSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICBidWlsZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcHVsbERlZmluaXRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wdWxsRGVmaW5pdGlvbnMoYWRkaXRpb25zLCBkZWZpbml0aW9uKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZCA9IGRlZmluaXRpb24ucHJlZml4ICYmIGRlZmluaXRpb24uaWNvbk5hbWUgJiYgZGVmaW5pdGlvbi5pY29uID8ge1xuICAgICAgICAwOiBkZWZpbml0aW9uXG4gICAgICB9IDogZGVmaW5pdGlvbjtcbiAgICAgIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfbm9ybWFsaXplZCRrZXkgPSBub3JtYWxpemVkW2tleV0sXG4gICAgICAgICAgICBwcmVmaXggPSBfbm9ybWFsaXplZCRrZXkucHJlZml4LFxuICAgICAgICAgICAgaWNvbk5hbWUgPSBfbm9ybWFsaXplZCRrZXkuaWNvbk5hbWUsXG4gICAgICAgICAgICBpY29uID0gX25vcm1hbGl6ZWQka2V5Lmljb247XG4gICAgICAgIGlmICghYWRkaXRpb25zW3ByZWZpeF0pIGFkZGl0aW9uc1twcmVmaXhdID0ge307XG4gICAgICAgIGFkZGl0aW9uc1twcmVmaXhdW2ljb25OYW1lXSA9IGljb247XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhZGRpdGlvbnM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpYnJhcnk7XG59KCk7XG5cbmZ1bmN0aW9uIGVuc3VyZUNzcygpIHtcbiAgaWYgKGNvbmZpZy5hdXRvQWRkQ3NzICYmICFfY3NzSW5zZXJ0ZWQpIHtcbiAgICBpbnNlcnRDc3MoY3NzKCkpO1xuXG4gICAgX2Nzc0luc2VydGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcGlPYmplY3QodmFsLCBhYnN0cmFjdENyZWF0b3IpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2Fic3RyYWN0Jywge1xuICAgIGdldDogYWJzdHJhY3RDcmVhdG9yXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnaHRtbCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB2YWwuYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnbm9kZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgICB2YXIgY29udGFpbmVyID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gdmFsLmh0bWw7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGZpbmRJY29uRGVmaW5pdGlvbihpY29uTG9va3VwKSB7XG4gIHZhciBfaWNvbkxvb2t1cCRwcmVmaXggPSBpY29uTG9va3VwLnByZWZpeCxcbiAgICAgIHByZWZpeCA9IF9pY29uTG9va3VwJHByZWZpeCA9PT0gdm9pZCAwID8gJ2ZhJyA6IF9pY29uTG9va3VwJHByZWZpeCxcbiAgICAgIGljb25OYW1lID0gaWNvbkxvb2t1cC5pY29uTmFtZTtcbiAgaWYgKCFpY29uTmFtZSkgcmV0dXJuO1xuICByZXR1cm4gaWNvbkZyb21NYXBwaW5nKGxpYnJhcnkuZGVmaW5pdGlvbnMsIHByZWZpeCwgaWNvbk5hbWUpIHx8IGljb25Gcm9tTWFwcGluZyhuYW1lc3BhY2Uuc3R5bGVzLCBwcmVmaXgsIGljb25OYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUljb25zKG5leHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXliZUljb25EZWZpbml0aW9uKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIGljb25EZWZpbml0aW9uID0gKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pLmljb24gPyBtYXliZUljb25EZWZpbml0aW9uIDogZmluZEljb25EZWZpbml0aW9uKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pO1xuICAgIHZhciBtYXNrID0gcGFyYW1zLm1hc2s7XG5cbiAgICBpZiAobWFzaykge1xuICAgICAgbWFzayA9IChtYXNrIHx8IHt9KS5pY29uID8gbWFzayA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXNrIHx8IHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChpY29uRGVmaW5pdGlvbiwgX29iamVjdFNwcmVhZCh7fSwgcGFyYW1zLCB7XG4gICAgICBtYXNrOiBtYXNrXG4gICAgfSkpO1xuICB9O1xufVxuXG52YXIgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG52YXIgbm9BdXRvID0gZnVuY3Rpb24gbm9BdXRvKCkge1xuICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSBmYWxzZTtcbiAgY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcbiAgZGlzY29ubmVjdCgpO1xufTtcbnZhciBfY3NzSW5zZXJ0ZWQgPSBmYWxzZTtcbnZhciBkb20gPSB7XG4gIGkyc3ZnOiBmdW5jdGlvbiBpMnN2ZygpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGlmIChJU19ET00pIHtcbiAgICAgIGVuc3VyZUNzcygpO1xuICAgICAgdmFyIF9wYXJhbXMkbm9kZSA9IHBhcmFtcy5ub2RlLFxuICAgICAgICAgIG5vZGUgPSBfcGFyYW1zJG5vZGUgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRub2RlLFxuICAgICAgICAgIF9wYXJhbXMkY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgY2FsbGJhY2sgPSBfcGFyYW1zJGNhbGxiYWNrID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9wYXJhbXMkY2FsbGJhY2s7XG5cbiAgICAgIGlmIChjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgc2VhcmNoUHNldWRvRWxlbWVudHMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvblRyZWUobm9kZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGlja2VkLnJlamVjdCgnT3BlcmF0aW9uIHJlcXVpcmVzIGEgRE9NIG9mIHNvbWUga2luZC4nKTtcbiAgICB9XG4gIH0sXG4gIGNzczogY3NzLFxuICBpbnNlcnRDc3M6IGZ1bmN0aW9uIGluc2VydENzcyQkMSgpIHtcbiAgICBpZiAoIV9jc3NJbnNlcnRlZCkge1xuICAgICAgaW5zZXJ0Q3NzKGNzcygpKTtcblxuICAgICAgX2Nzc0luc2VydGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiBmdW5jdGlvbiB3YXRjaCgpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgYXV0b1JlcGxhY2VTdmdSb290ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdCxcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBwYXJhbXMub2JzZXJ2ZU11dGF0aW9uc1Jvb3Q7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSBmYWxzZSkge1xuICAgICAgY29uZmlnLmF1dG9SZXBsYWNlU3ZnID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IHRydWU7XG4gICAgZG9tcmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgYXV0b1JlcGxhY2Uoe1xuICAgICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3Q6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICAgICAgfSk7XG4gICAgICBvYnNlcnZlKHtcbiAgICAgICAgdHJlZUNhbGxiYWNrOiBvblRyZWUsXG4gICAgICAgIG5vZGVDYWxsYmFjazogb25Ob2RlLFxuICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrOiBzZWFyY2hQc2V1ZG9FbGVtZW50cyxcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3Q6IG9ic2VydmVNdXRhdGlvbnNSb290XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBwYXJzZSA9IHtcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZyk7XG4gIH1cbn07XG52YXIgaWNvbiA9IHJlc29sdmVJY29ucyhmdW5jdGlvbiAoaWNvbkRlZmluaXRpb24pIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybSxcbiAgICAgIF9wYXJhbXMkc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgIHN5bWJvbCA9IF9wYXJhbXMkc3ltYm9sID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc3ltYm9sLFxuICAgICAgX3BhcmFtcyRtYXNrID0gcGFyYW1zLm1hc2ssXG4gICAgICBtYXNrID0gX3BhcmFtcyRtYXNrID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyRtYXNrLFxuICAgICAgX3BhcmFtcyR0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUsXG4gICAgICBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzLFxuICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlcyxcbiAgICAgIF9wYXJhbXMkc3R5bGVzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzO1xuICBpZiAoIWljb25EZWZpbml0aW9uKSByZXR1cm47XG4gIHZhciBwcmVmaXggPSBpY29uRGVmaW5pdGlvbi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IGljb25EZWZpbml0aW9uLmljb25OYW1lLFxuICAgICAgaWNvbiA9IGljb25EZWZpbml0aW9uLmljb247XG4gIHJldHVybiBhcGlPYmplY3QoX29iamVjdFNwcmVhZCh7XG4gICAgdHlwZTogJ2ljb24nXG4gIH0sIGljb25EZWZpbml0aW9uKSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQTExeSkge1xuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddID0gXCJcIi5jb25jYXQoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIFwiLXRpdGxlLVwiKS5jb25jYXQobmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgICAgYXR0cmlidXRlc1snZm9jdXNhYmxlJ10gPSAnZmFsc2UnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgaWNvbnM6IHtcbiAgICAgICAgbWFpbjogYXNGb3VuZEljb24oaWNvbiksXG4gICAgICAgIG1hc2s6IG1hc2sgPyBhc0ZvdW5kSWNvbihtYXNrLmljb24pIDoge1xuICAgICAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgaWNvbjoge31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcbnZhciB0ZXh0ID0gZnVuY3Rpb24gdGV4dChjb250ZW50KSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0yID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtMiA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybTIsXG4gICAgICBfcGFyYW1zJHRpdGxlMiA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZTIgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlMixcbiAgICAgIF9wYXJhbXMkY2xhc3NlczIgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMyID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczIsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMyID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzMiA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMyLFxuICAgICAgX3BhcmFtcyRzdHlsZXMyID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzMiA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlczI7XG4gIHJldHVybiBhcGlPYmplY3Qoe1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjb250ZW50OiBjb250ZW50XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICByZXR1cm4gbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItbGF5ZXJzLXRleHRcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbnZhciBjb3VudGVyID0gZnVuY3Rpb24gY291bnRlcihjb250ZW50KSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0aXRsZTMgPSBwYXJhbXMudGl0bGUsXG4gICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUzID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZTMsXG4gICAgICBfcGFyYW1zJGNsYXNzZXMzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzMyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMzLFxuICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzMyA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlczMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzMyxcbiAgICAgIF9wYXJhbXMkc3R5bGVzMyA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlczMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXMzO1xuICByZXR1cm4gYXBpT2JqZWN0KHtcbiAgICB0eXBlOiAnY291bnRlcicsXG4gICAgY29udGVudDogY29udGVudFxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgcmV0dXJuIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3Qoe1xuICAgICAgY29udGVudDogY29udGVudC50b1N0cmluZygpLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnMtY291bnRlclwiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xudmFyIGxheWVyID0gZnVuY3Rpb24gbGF5ZXIoYXNzZW1ibGVyKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRjbGFzc2VzNCA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczQgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzNDtcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ2xheWVyJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgYXNzZW1ibGVyKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICBBcnJheS5pc0FycmF5KGFyZ3MpID8gYXJncy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYS5hYnN0cmFjdCk7XG4gICAgICB9KSA6IGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGFyZ3MuYWJzdHJhY3QpO1xuICAgIH0pO1xuICAgIHJldHVybiBbe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiBbXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItbGF5ZXJzXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKS5qb2luKCcgJylcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XTtcbiAgfSk7XG59O1xudmFyIGFwaSA9IHtcbiAgbm9BdXRvOiBub0F1dG8sXG4gIGNvbmZpZzogY29uZmlnLFxuICBkb206IGRvbSxcbiAgbGlicmFyeTogbGlicmFyeSxcbiAgcGFyc2U6IHBhcnNlLFxuICBmaW5kSWNvbkRlZmluaXRpb246IGZpbmRJY29uRGVmaW5pdGlvbixcbiAgaWNvbjogaWNvbixcbiAgdGV4dDogdGV4dCxcbiAgY291bnRlcjogY291bnRlcixcbiAgbGF5ZXI6IGxheWVyLFxuICB0b0h0bWw6IHRvSHRtbFxufTtcblxudmFyIGF1dG9SZXBsYWNlID0gZnVuY3Rpb24gYXV0b1JlcGxhY2UoKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdCxcbiAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdCA9IF9wYXJhbXMkYXV0b1JlcGxhY2VTdiA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJGF1dG9SZXBsYWNlU3Y7XG4gIGlmICgoT2JqZWN0LmtleXMobmFtZXNwYWNlLnN0eWxlcykubGVuZ3RoID4gMCB8fCBjb25maWcuYXV0b0ZldGNoU3ZnKSAmJiBJU19ET00gJiYgY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBhcGkuZG9tLmkyc3ZnKHtcbiAgICBub2RlOiBhdXRvUmVwbGFjZVN2Z1Jvb3RcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBpY29uLCBub0F1dG8sIGNvbmZpZywgdG9IdG1sLCBsYXllciwgdGV4dCwgY291bnRlciwgbGlicmFyeSwgZG9tLCBwYXJzZSwgZmluZEljb25EZWZpbml0aW9uIH07XG4iLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYWInO1xudmFyIGljb25OYW1lID0gJ2NjLW1hc3RlcmNhcmQnO1xudmFyIHdpZHRoID0gNTc2O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YxZjEnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000ODIuOSA0MTAuM2MwIDYuOC00LjYgMTEuNy0xMS4yIDExLjctNi44IDAtMTEuMi01LjItMTEuMi0xMS43IDAtNi41IDQuNC0xMS43IDExLjItMTEuNyA2LjYgMCAxMS4yIDUuMiAxMS4yIDExLjd6bS0zMTAuOC0xMS43Yy03LjEgMC0xMS4yIDUuMi0xMS4yIDExLjcgMCA2LjUgNC4xIDExLjcgMTEuMiAxMS43IDYuNSAwIDEwLjktNC45IDEwLjktMTEuNy0uMS02LjUtNC40LTExLjctMTAuOS0xMS43em0xMTcuNS0uM2MtNS40IDAtOC43IDMuNS05LjUgOC43aDE5LjFjLS45LTUuNy00LjQtOC43LTkuNi04Ljd6bTEwNy44LjNjLTYuOCAwLTEwLjkgNS4yLTEwLjkgMTEuNyAwIDYuNSA0LjEgMTEuNyAxMC45IDExLjcgNi44IDAgMTEuMi00LjkgMTEuMi0xMS43IDAtNi41LTQuNC0xMS43LTExLjItMTEuN3ptMTA1LjkgMjYuMWMwIC4zLjMuNS4zIDEuMSAwIC4zLS4zLjUtLjMgMS4xLS4zLjMtLjMuNS0uNS44LS4zLjMtLjUuNS0xLjEuNS0uMy4zLS41LjMtMS4xLjMtLjMgMC0uNSAwLTEuMS0uMy0uMyAwLS41LS4zLS44LS41LS4zLS4zLS41LS41LS41LS44LS4zLS41LS4zLS44LS4zLTEuMSAwLS41IDAtLjguMy0xLjEgMC0uNS4zLS44LjUtMS4xLjMtLjMuNS0uMy44LS41LjUtLjMuOC0uMyAxLjEtLjMuNSAwIC44IDAgMS4xLjMuNS4zLjguMyAxLjEuNXMuMi42LjUgMS4xem0tMi4yIDEuNGMuNSAwIC41LS4zLjgtLjMuMy0uMy4zLS41LjMtLjggMC0uMyAwLS41LS4zLS44LS4zIDAtLjUtLjMtMS4xLS4zaC0xLjZ2My41aC44VjQyNmguM2wxLjEgMS40aC44bC0xLjEtMS4zek01NzYgODF2MzUyYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY4MWMwLTI2LjUgMjEuNS00OCA0OC00OGg0ODBjMjYuNSAwIDQ4IDIxLjUgNDggNDh6TTY0IDIyMC42YzAgNzYuNSA2Mi4xIDEzOC41IDEzOC41IDEzOC41IDI3LjIgMCA1My45LTguMiA3Ni41LTIzLjEtNzIuOS01OS4zLTcyLjQtMTcxLjIgMC0yMzAuNS0yMi42LTE1LTQ5LjMtMjMuMS03Ni41LTIzLjEtNzYuNC0uMS0xMzguNSA2Mi0xMzguNSAxMzguMnptMjI0IDEwOC44YzcwLjUtNTUgNzAuMi0xNjIuMiAwLTIxNy41LTcwLjIgNTUuMy03MC41IDE2Mi42IDAgMjE3LjV6bS0xNDIuMyA3Ni4zYzAtOC43LTUuNy0xNC40LTE0LjctMTQuNy00LjYgMC05LjUgMS40LTEyLjggNi41LTIuNC00LjEtNi41LTYuNS0xMi4yLTYuNS0zLjggMC03LjYgMS40LTEwLjYgNS40VjM5MmgtOC4ydjM2LjdoOC4yYzAtMTguOS0yLjUtMzAuMiA5LTMwLjIgMTAuMiAwIDguMiAxMC4yIDguMiAzMC4yaDcuOWMwLTE4LjMtMi41LTMwLjIgOS0zMC4yIDEwLjIgMCA4LjIgMTAgOC4yIDMwLjJoOC4ydi0yM3ptNDQuOS0xMy43aC03Ljl2NC40Yy0yLjctMy4zLTYuNS01LjQtMTEuNy01LjQtMTAuMyAwLTE4LjIgOC4yLTE4LjIgMTkuMyAwIDExLjIgNy45IDE5LjMgMTguMiAxOS4zIDUuMiAwIDktMS45IDExLjctNS40djQuNmg3LjlWMzkyem00MC41IDI1LjZjMC0xNS0yMi45LTguMi0yMi45LTE1LjIgMC01LjcgMTEuOS00LjggMTguNS0xLjFsMy4zLTYuNWMtOS40LTYuMS0zMC4yLTYtMzAuMiA4LjIgMCAxNC4zIDIyLjkgOC4zIDIyLjkgMTUgMCA2LjMtMTMuNSA1LjgtMjAuNy44bC0zLjUgNi4zYzExLjIgNy42IDMyLjYgNiAzMi42LTcuNXptMzUuNCA5LjNsLTIuMi02LjhjLTMuOCAyLjEtMTIuMiA0LjQtMTIuMi00LjF2LTE2LjZoMTMuMVYzOTJoLTEzLjF2LTExLjJoLTguMlYzOTJoLTcuNnY3LjNoNy42VjQxNmMwIDE3LjYgMTcuMyAxNC40IDIyLjYgMTAuOXptMTMuMy0xMy40aDI3LjVjMC0xNi4yLTcuNC0yMi42LTE3LjQtMjIuNi0xMC42IDAtMTguMiA3LjktMTguMiAxOS4zIDAgMjAuNSAyMi42IDIzLjkgMzMuOCAxNC4ybC0zLjgtNmMtNy44IDYuNC0xOS42IDUuOC0yMS45LTQuOXptNTkuMS0yMS41Yy00LjYtMi0xMS42LTEuOC0xNS4yIDQuNFYzOTJoLTguMnYzNi43aDguMlY0MDhjMC0xMS42IDkuNS0xMC4xIDEyLjgtOC40bDIuNC03LjZ6bTEwLjYgMTguM2MwLTExLjQgMTEuNi0xNS4xIDIwLjctOC40bDMuOC02LjVjLTExLjYtOS4xLTMyLjctNC4xLTMyLjcgMTUgMCAxOS44IDIyLjQgMjMuOCAzMi43IDE1bC0zLjgtNi41Yy05LjIgNi41LTIwLjcgMi42LTIwLjctOC42em02Ni43LTE4LjNINDA4djQuNGMtOC4zLTExLTI5LjktNC44LTI5LjkgMTMuOSAwIDE5LjIgMjIuNCAyNC43IDI5LjkgMTMuOXY0LjZoOC4yVjM5MnptMzMuNyAwYy0yLjQtMS4yLTExLTIuOS0xNS4yIDQuNFYzOTJoLTcuOXYzNi43aDcuOVY0MDhjMC0xMSA5LTEwLjMgMTIuOC04LjRsMi40LTcuNnptNDAuMy0xNC45aC03Ljl2MTkuM2MtOC4yLTEwLjktMjkuOS01LjEtMjkuOSAxMy45IDAgMTkuNCAyMi41IDI0LjYgMjkuOSAxMy45djQuNmg3Ljl2LTUxLjd6bTcuNi03NS4xdjQuNmguOFYzMDJoMS45di0uOGgtNC42di44aDEuOXptNi42IDEyMy44YzAtLjUgMC0xLjEtLjMtMS42LS4zLS4zLS41LS44LS44LTEuMS0uMy0uMy0uOC0uNS0xLjEtLjgtLjUgMC0xLjEtLjMtMS42LS4zLS4zIDAtLjguMy0xLjQuMy0uNS4zLS44LjUtMS4xLjgtLjUuMy0uOC44LS44IDEuMS0uMy41LS4zIDEuMS0uMyAxLjYgMCAuMyAwIC44LjMgMS40IDAgLjMuMy44LjggMS4xLjMuMy41LjUgMS4xLjguNS4zIDEuMS4zIDEuNC4zLjUgMCAxLjEgMCAxLjYtLjMuMy0uMy44LS41IDEuMS0uOC4zLS4zLjUtLjguOC0xLjEuMy0uNi4zLTEuMS4zLTEuNHptMy4yLTEyNC43aC0xLjRsLTEuNiAzLjUtMS42LTMuNWgtMS40djUuNGguOHYtNC4xbDEuNiAzLjVoMS4xbDEuNC0zLjV2NC4xaDEuMXYtNS40em00LjQtODAuNWMwLTc2LjItNjIuMS0xMzguMy0xMzguNS0xMzguMy0yNy4yIDAtNTMuOSA4LjItNzYuNSAyMy4xIDcyLjEgNTkuMyA3My4yIDE3MS41IDAgMjMwLjUgMjIuNiAxNSA0OS41IDIzLjEgNzYuNSAyMy4xIDc2LjQuMSAxMzguNS02MS45IDEzOC41LTEzOC40eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUNjTWFzdGVyY2FyZCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFiJztcbnZhciBpY29uTmFtZSA9ICdjYy1wYXlwYWwnO1xudmFyIHdpZHRoID0gNTc2O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YxZjQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00xODYuMyAyNTguMmMwIDEyLjItOS43IDIxLjUtMjIgMjEuNS05LjIgMC0xNi01LjItMTYtMTUgMC0xMi4yIDkuNS0yMiAyMS43LTIyIDkuMyAwIDE2LjMgNS43IDE2LjMgMTUuNXpNODAuNSAyMDkuN2gtNC43Yy0xLjUgMC0zIDEtMy4yIDIuN2wtNC4zIDI2LjcgOC4yLS4zYzExIDAgMTkuNS0xLjUgMjEuNS0xNC4yIDIuMy0xMy40LTYuMi0xNC45LTE3LjUtMTQuOXptMjg0IDBIMzYwYy0xLjggMC0zIDEtMy4yIDIuN2wtNC4yIDI2LjcgOC0uM2MxMyAwIDIyLTMgMjItMTgtLjEtMTAuNi05LjYtMTEuMS0xOC4xLTExLjF6TTU3NiA4MHYzNTJjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDQ4MGMyNi41IDAgNDggMjEuNSA0OCA0OHpNMTI4LjMgMjE1LjRjMC0yMS0xNi4yLTI4LTM0LjctMjhoLTQwYy0yLjUgMC01IDItNS4yIDQuN0wzMiAyOTQuMmMtLjMgMiAxLjIgNCAzLjIgNGgxOWMyLjcgMCA1LjItMi45IDUuNS01LjdsNC41LTI2LjZjMS03LjIgMTMuMi00LjcgMTgtNC43IDI4LjYgMCA0Ni4xLTE3IDQ2LjEtNDUuOHptODQuMiA4LjhoLTE5Yy0zLjggMC00IDUuNS00LjIgOC4yLTUuOC04LjUtMTQuMi0xMC0yMy43LTEwLTI0LjUgMC00My4yIDIxLjUtNDMuMiA0NS4yIDAgMTkuNSAxMi4yIDMyLjIgMzEuNyAzMi4yIDkgMCAyMC4yLTQuOSAyNi41LTExLjktLjUgMS41LTEgNC43LTEgNi4yIDAgMi4zIDEgNCAzLjIgNEgyMDBjMi43IDAgNS0yLjkgNS41LTUuN2wxMC4yLTY0LjNjLjMtMS45LTEuMi0zLjktMy4yLTMuOXptNDAuNSA5Ny45bDYzLjctOTIuNmMuNS0uNS41LTEgLjUtMS43IDAtMS43LTEuNS0zLjUtMy4yLTMuNWgtMTkuMmMtMS43IDAtMy41IDEtNC41IDIuNWwtMjYuNSAzOS0xMS0zNy41Yy0uOC0yLjItMy00LTUuNS00aC0xOC43Yy0xLjcgMC0zLjIgMS44LTMuMiAzLjUgMCAxLjIgMTkuNSA1Ni44IDIxLjIgNjIuMS0yLjcgMy44LTIwLjUgMjguNi0yMC41IDMxLjYgMCAxLjggMS41IDMuMiAzLjIgMy4yaDE5LjJjMS44LS4xIDMuNS0xLjEgNC41LTIuNnptMTU5LjMtMTA2LjdjMC0yMS0xNi4yLTI4LTM0LjctMjhoLTM5LjdjLTIuNyAwLTUuMiAyLTUuNSA0LjdsLTE2LjIgMTAyYy0uMiAyIDEuMyA0IDMuMiA0aDIwLjVjMiAwIDMuNS0xLjUgNC0zLjJsNC41LTI5YzEtNy4yIDEzLjItNC43IDE4LTQuNyAyOC40IDAgNDUuOS0xNyA0NS45LTQ1Ljh6bTg0LjIgOC44aC0xOWMtMy44IDAtNCA1LjUtNC4zIDguMi01LjUtOC41LTE0LTEwLTIzLjctMTAtMjQuNSAwLTQzLjIgMjEuNS00My4yIDQ1LjIgMCAxOS41IDEyLjIgMzIuMiAzMS43IDMyLjIgOS4zIDAgMjAuNS00LjkgMjYuNS0xMS45LS4zIDEuNS0xIDQuNy0xIDYuMiAwIDIuMyAxIDQgMy4yIDRINDg0YzIuNyAwIDUtMi45IDUuNS01LjdsMTAuMi02NC4zYy4zLTEuOS0xLjItMy45LTMuMi0zLjl6bTQ3LjUtMzMuM2MwLTItMS41LTMuNS0zLjItMy41aC0xOC41Yy0xLjUgMC0zIDEuMi0zLjIgMi43bC0xNi4yIDEwNC0uMy41YzAgMS44IDEuNSAzLjUgMy41IDMuNWgxNi41YzIuNSAwIDUtMi45IDUuMi01LjdMNTQ0IDE5MS4ydi0uM3ptLTkwIDUxLjhjLTEyLjIgMC0yMS43IDkuNy0yMS43IDIyIDAgOS43IDcgMTUgMTYuMiAxNSAxMiAwIDIxLjctOS4yIDIxLjctMjEuNS4xLTkuOC02LjktMTUuNS0xNi4yLTE1LjV6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhQ2NQYXlwYWwgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2ZhYic7XG52YXIgaWNvbk5hbWUgPSAnY2MtdmlzYSc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjFmMCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQ3MC4xIDIzMS4zczcuNiAzNy4yIDkuMyA0NUg0NDZjMy4zLTguOSAxNi00My41IDE2LTQzLjUtLjIuMyAzLjMtOS4xIDUuMy0xNC45bDIuOCAxMy40ek01NzYgODB2MzUyYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY4MGMwLTI2LjUgMjEuNS00OCA0OC00OGg0ODBjMjYuNSAwIDQ4IDIxLjUgNDggNDh6TTE1Mi41IDMzMS4yTDIxNS43IDE3NmgtNDIuNWwtMzkuMyAxMDYtNC4zLTIxLjUtMTQtNzEuNGMtMi4zLTkuOS05LjQtMTIuNy0xOC4yLTEzLjFIMzIuN2wtLjcgMy4xYzE1LjggNCAyOS45IDkuOCA0Mi4yIDE3LjFsMzUuOCAxMzVoNDIuNXptOTQuNC4yTDI3Mi4xIDE3NmgtNDAuMmwtMjUuMSAxNTUuNGg0MC4xem0xMzkuOS01MC44Yy4yLTE3LjctMTAuNi0zMS4yLTMzLjctNDIuMy0xNC4xLTcuMS0yMi43LTExLjktMjIuNy0xOS4yLjItNi42IDcuMy0xMy40IDIzLjEtMTMuNCAxMy4xLS4zIDIyLjcgMi44IDI5LjkgNS45bDMuNiAxLjcgNS41LTMzLjZjLTcuOS0zLjEtMjAuNS02LjYtMzYtNi42LTM5LjcgMC02Ny42IDIxLjItNjcuOCA1MS40LS4zIDIyLjMgMjAgMzQuNyAzNS4yIDQyLjIgMTUuNSA3LjYgMjAuOCAxMi42IDIwLjggMTkuMy0uMiAxMC40LTEyLjYgMTUuMi0yNC4xIDE1LjItMTYgMC0yNC42LTIuNS0zNy43LTguM2wtNS4zLTIuNS01LjYgMzQuOWM5LjQgNC4zIDI2LjggOC4xIDQ0LjggOC4zIDQyLjIuMSA2OS43LTIwLjggNzAtNTN6TTUyOCAzMzEuNEw0OTUuNiAxNzZoLTMxLjFjLTkuNiAwLTE2LjkgMi44LTIxIDEyLjlsLTU5LjcgMTQyLjVINDI2czYuOS0xOS4yIDguNC0yMy4zSDQ4NmMxLjIgNS41IDQuOCAyMy4zIDQuOCAyMy4zSDUyOHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDY1Zpc2EgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnY2hlY2snO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMGMnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDaGVjayA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjaGV2cm9uLXVwJztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDc3JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjQwLjk3MSAxMzAuNTI0bDE5NC4zNDMgMTk0LjM0M2M5LjM3MyA5LjM3MyA5LjM3MyAyNC41NjkgMCAzMy45NDFsLTIyLjY2NyAyMi42NjdjLTkuMzU3IDkuMzU3LTI0LjUyMiA5LjM3NS0zMy45MDEuMDRMMjI0IDIyNy40OTUgNjkuMjU1IDM4MS41MTZjLTkuMzc5IDkuMzM1LTI0LjU0NCA5LjMxNy0zMy45MDEtLjA0bC0yMi42NjctMjIuNjY3Yy05LjM3My05LjM3My05LjM3My0yNC41NjkgMC0zMy45NDFMMjA3LjAzIDEzMC41MjVjOS4zNzItOS4zNzMgMjQuNTY4LTkuMzczIDMzLjk0MS0uMDAxeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUNoZXZyb25VcCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjcmVkaXQtY2FyZCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA5ZCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTAgNDMyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDQ4MGMyNi41IDAgNDgtMjEuNSA0OC00OFYyNTZIMHYxNzZ6bTE5Mi02OGMwLTYuNiA1LjQtMTIgMTItMTJoMTM2YzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJIMjA0Yy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0tMTI4IDBjMC02LjYgNS40LTEyIDEyLTEyaDcyYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTU3NiA4MHY0OEgwVjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDQ4MGMyNi41IDAgNDggMjEuNSA0OCA0OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDcmVkaXRDYXJkID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA2YSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTUwNCAyNTZjMCAxMzYuOTk3LTExMS4wNDMgMjQ4LTI0OCAyNDhTOCAzOTIuOTk3IDggMjU2QzggMTE5LjA4MyAxMTkuMDQzIDggMjU2IDhzMjQ4IDExMS4wODMgMjQ4IDI0OHptLTI0OCA1MGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUV4Y2xhbWF0aW9uQ2lyY2xlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2ZsYWcnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMjQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zNDkuNTY1IDk4Ljc4M0MyOTUuOTc4IDk4Ljc4MyAyNTEuNzIxIDY0IDE4NC4zNDggNjRjLTI0Ljk1NSAwLTQ3LjMwOSA0LjM4NC02OC4wNDUgMTIuMDEzYTU1Ljk0NyA1NS45NDcgMCAwIDAgMy41ODYtMjMuNTYyQzExOC4xMTcgMjQuMDE1IDk0LjgwNiAxLjIwNiA2Ni4zMzguMDQ4IDM0LjM0NS0xLjI1NCA4IDI0LjI5NiA4IDU2YzAgMTkuMDI2IDkuNDk3IDM1LjgyNSAyNCA0NS45NDVWNDg4YzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxNmMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTk0LjRjMjguMzExLTEyLjA2NCA2My41ODItMjIuMTIyIDExNC40MzUtMjIuMTIyIDUzLjU4OCAwIDk3Ljg0NCAzNC43ODMgMTY1LjIxNyAzNC43ODMgNDguMTY5IDAgODYuNjY3LTE2LjI5NCAxMjIuNTA1LTQwLjg1OEM1MDYuODQgMzU5LjQ1MiA1MTIgMzQ5LjU3MSA1MTIgMzM5LjA0NXYtMjQzLjFjMC0yMy4zOTMtMjQuMjY5LTM4Ljg3LTQ1LjQ4NS0yOS4wMTYtMzQuMzM4IDE1Ljk0OC03Ni40NTQgMzEuODU0LTExNi45NSAzMS44NTR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhRmxhZyA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdpbmZvLWNpcmNsZSc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA1YSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhSW5mb0NpcmNsZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdtYXAtbWFya2VyLWFsdCc7XG52YXIgd2lkdGggPSAzODQ7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjNjNSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE3Mi4yNjggNTAxLjY3QzI2Ljk3IDI5MS4wMzEgMCAyNjkuNDEzIDAgMTkyIDAgODUuOTYxIDg1Ljk2MSAwIDE5MiAwczE5MiA4NS45NjEgMTkyIDE5MmMwIDc3LjQxMy0yNi45NyA5OS4wMzEtMTcyLjI2OCAzMDkuNjctOS41MzUgMTMuNzc0LTI5LjkzIDEzLjc3My0zOS40NjQgMHpNMTkyIDI3MmM0NC4xODMgMCA4MC0zNS44MTcgODAtODBzLTM1LjgxNy04MC04MC04MC04MCAzNS44MTctODAgODAgMzUuODE3IDgwIDgwIDgweic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYU1hcE1hcmtlckFsdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdwZW5jaWwtYWx0JztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMzAzJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDk3LjkgMTQyLjFsLTQ2LjEgNDYuMWMtNC43IDQuNy0xMi4zIDQuNy0xNyAwbC0xMTEtMTExYy00LjctNC43LTQuNy0xMi4zIDAtMTdsNDYuMS00Ni4xYzE4LjctMTguNyA0OS4xLTE4LjcgNjcuOSAwbDYwLjEgNjAuMWMxOC44IDE4LjcgMTguOCA0OS4xIDAgNjcuOXpNMjg0LjIgOTkuOEwyMS42IDM2Mi40LjQgNDgzLjljLTIuOSAxNi40IDExLjQgMzAuNiAyNy44IDI3LjhsMTIxLjUtMjEuMyAyNjIuNi0yNjIuNmM0LjctNC43IDQuNy0xMi4zIDAtMTdsLTExMS0xMTFjLTQuOC00LjctMTIuNC00LjctMTcuMSAwek0xMjQuMSAzMzkuOWMtNS41LTUuNS01LjUtMTQuMyAwLTE5LjhsMTU0LTE1NGM1LjUtNS41IDE0LjMtNS41IDE5LjggMHM1LjUgMTQuMyAwIDE5LjhsLTE1NCAxNTRjLTUuNSA1LjUtMTQuMyA1LjUtMTkuOCAwek04OCA0MjRoNDh2MzYuM2wtNjQuNSAxMS4zLTMxLjEtMzEuMUw1MS43IDM3Nkg4OHY0OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFQZW5jaWxBbHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAncGx1cyc7XG52YXIgd2lkdGggPSA0NDg7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA2Nyc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQxNiAyMDhIMjcyVjY0YzAtMTcuNjctMTQuMzMtMzItMzItMzJoLTMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjE0NEgzMmMtMTcuNjcgMC0zMiAxNC4zMy0zMiAzMnYzMmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDE0NHYxNDRjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzMmMxNy42NyAwIDMyLTE0LjMzIDMyLTMyVjMwNGgxNDRjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFQbHVzID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3NlYXJjaCc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwMic7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTUwNSA0NDIuN0w0MDUuMyAzNDNjLTQuNS00LjUtMTAuNi03LTE3LTdIMzcyYzI3LjYtMzUuMyA0NC03OS43IDQ0LTEyOEM0MTYgOTMuMSAzMjIuOSAwIDIwOCAwUzAgOTMuMSAwIDIwOHM5My4xIDIwOCAyMDggMjA4YzQ4LjMgMCA5Mi43LTE2LjQgMTI4LTQ0djE2LjNjMCA2LjQgMi41IDEyLjUgNyAxN2w5OS43IDk5LjdjOS40IDkuNCAyNC42IDkuNCAzMy45IDBsMjguMy0yOC4zYzkuNC05LjQgOS40LTI0LjYuMS0zNHpNMjA4IDMzNmMtNzAuNyAwLTEyOC01Ny4yLTEyOC0xMjggMC03MC43IDU3LjItMTI4IDEyOC0xMjggNzAuNyAwIDEyOCA1Ny4yIDEyOCAxMjggMCA3MC43LTU3LjIgMTI4LTEyOCAxMjh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU2VhcmNoID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3Nob3BwaW5nLWJhZyc7XG52YXIgd2lkdGggPSA0NDg7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjI5MCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTM1MiAxNjB2LTMyQzM1MiA1Ny40MiAyOTQuNTc5IDAgMjI0IDAgMTUzLjQyIDAgOTYgNTcuNDIgOTYgMTI4djMySDB2MjcyYzAgNDQuMTgzIDM1LjgxNyA4MCA4MCA4MGgyODhjNDQuMTgzIDAgODAtMzUuODE3IDgwLTgwVjE2MGgtOTZ6bS0xOTItMzJjMC0zNS4yOSAyOC43MS02NCA2NC02NHM2NCAyOC43MSA2NCA2NHYzMkgxNjB2LTMyem0xNjAgMTIwYy0xMy4yNTUgMC0yNC0xMC43NDUtMjQtMjRzMTAuNzQ1LTI0IDI0LTI0IDI0IDEwLjc0NSAyNCAyNC0xMC43NDUgMjQtMjQgMjR6bS0xOTIgMGMtMTMuMjU1IDAtMjQtMTAuNzQ1LTI0LTI0czEwLjc0NS0yNCAyNC0yNCAyNCAxMC43NDUgMjQgMjQtMTAuNzQ1IDI0LTI0IDI0eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVNob3BwaW5nQmFnID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3NodXR0bGUtdmFuJztcbnZhciB3aWR0aCA9IDY0MDtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmNWI2JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNjI4Ljg4IDIxMC42NUw0OTQuMzkgNDkuMjdBNDguMDEgNDguMDEgMCAwIDAgNDU3LjUyIDMySDMyQzE0LjMzIDMyIDAgNDYuMzMgMCA2NHYyODhjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzMmMwIDUzLjAyIDQyLjk4IDk2IDk2IDk2czk2LTQyLjk4IDk2LTk2aDEyOGMwIDUzLjAyIDQyLjk4IDk2IDk2IDk2czk2LTQyLjk4IDk2LTk2aDMyYzE3LjY3IDAgMzItMTQuMzMgMzItMzJWMjQxLjM4YzAtMTEuMjMtMy45NC0yMi4xLTExLjEyLTMwLjczek02NCAxOTJWOTZoOTZ2OTZINjR6bTk2IDI0MGMtMjYuNTEgMC00OC0yMS40OS00OC00OHMyMS40OS00OCA0OC00OCA0OCAyMS40OSA0OCA0OC0yMS40OSA0OC00OCA0OHptMTYwLTI0MGgtOTZWOTZoOTZ2OTZ6bTE2MCAyNDBjLTI2LjUxIDAtNDgtMjEuNDktNDgtNDhzMjEuNDktNDggNDgtNDggNDggMjEuNDkgNDggNDgtMjEuNDkgNDgtNDggNDh6bS05Ni0yNDBWOTZoNjYuMDJsODAgOTZIMzg0eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVNodXR0bGVWYW4gPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc3Rhcic7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwNSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTI1OS4zIDE3LjhMMTk0IDE1MC4yIDQ3LjkgMTcxLjVjLTI2LjIgMy44LTM2LjcgMzYuMS0xNy43IDU0LjZsMTA1LjcgMTAzLTI1IDE0NS41Yy00LjUgMjYuMyAyMy4yIDQ2IDQ2LjQgMzMuN0wyODggNDM5LjZsMTMwLjcgNjguN2MyMy4yIDEyLjIgNTAuOS03LjQgNDYuNC0zMy43bC0yNS0xNDUuNSAxMDUuNy0xMDNjMTktMTguNSA4LjUtNTAuOC0xNy43LTU0LjZMMzgyIDE1MC4yIDMxNi43IDE3LjhjLTExLjctMjMuNi00NS42LTIzLjktNTcuNCAweic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVN0YXIgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc3luYy1hbHQnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YyZjEnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zNzAuNzIgMTMzLjI4QzMzOS40NTggMTA0LjAwOCAyOTguODg4IDg3Ljk2MiAyNTUuODQ4IDg4Yy03Ny40NTguMDY4LTE0NC4zMjggNTMuMTc4LTE2Mi43OTEgMTI2Ljg1LTEuMzQ0IDUuMzYzLTYuMTIyIDkuMTUtMTEuNjUxIDkuMTVIMjQuMTAzYy03LjQ5OCAwLTEzLjE5NC02LjgwNy0xMS44MDctMTQuMTc2QzMzLjkzMyA5NC45MjQgMTM0LjgxMyA4IDI1NiA4YzY2LjQ0OCAwIDEyNi43OTEgMjYuMTM2IDE3MS4zMTUgNjguNjg1TDQ2My4wMyA0MC45N0M0NzguMTQ5IDI1Ljg1MSA1MDQgMzYuNTU5IDUwNCA1Ny45NDFWMTkyYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNEgzNDUuOTQxYy0yMS4zODIgMC0zMi4wOS0yNS44NTEtMTYuOTcxLTQwLjk3MWw0MS43NS00MS43NDl6TTMyIDI5NmgxMzQuMDU5YzIxLjM4MiAwIDMyLjA5IDI1Ljg1MSAxNi45NzEgNDAuOTcxbC00MS43NSA0MS43NWMzMS4yNjIgMjkuMjczIDcxLjgzNSA0NS4zMTkgMTE0Ljg3NiA0NS4yOCA3Ny40MTgtLjA3IDE0NC4zMTUtNTMuMTQ0IDE2Mi43ODctMTI2Ljg0OSAxLjM0NC01LjM2MyA2LjEyMi05LjE1IDExLjY1MS05LjE1aDU3LjMwNGM3LjQ5OCAwIDEzLjE5NCA2LjgwNyAxMS44MDcgMTQuMTc2QzQ3OC4wNjcgNDE3LjA3NiAzNzcuMTg3IDUwNCAyNTYgNTA0Yy02Ni40NDggMC0xMjYuNzkxLTI2LjEzNi0xNzEuMzE1LTY4LjY4NUw0OC45NyA0NzEuMDNDMzMuODUxIDQ4Ni4xNDkgOCA0NzUuNDQxIDggNDU0LjA1OVYzMjBjMC0xMy4yNTUgMTAuNzQ1LTI0IDI0LTI0eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVN5bmNBbHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAndGltZXMnO1xudmFyIHdpZHRoID0gMzUyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMGQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFUaW1lcyA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCkgOiAnZ2V0JztcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHV0aWxzLmZvckVhY2goWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ10sIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J10sIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICh1dGlscy5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnbWF4Q29udGVudExlbmd0aCcsXG4gICAgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLCAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsXG4gICAgJ3NvY2tldFBhdGgnXG4gIF0sIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIC8vIE9ubHkgTm9kZS5KUyBoYXMgYSBwcm9jZXNzIHZhcmlhYmxlIHRoYXQgaXMgb2YgW1tDbGFzc11dIHByb2Nlc3NcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuICogdG8gb3JpZ2luYWwgb2JqZWN0cyBpcyBrZXB0LlxuICpcbiAqIEBzZWUgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGRlZXBNZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCIvLyBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgdjIuMC4yNyB8IMKpIGRucF90aGVtZSB8IE1JVC1MaWNlbnNlXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRCBzdXBwb3J0OlxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBDb21tb25KUy1saWtlOlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgdmFyIGJzbiA9IGZhY3RvcnkoKTtcbiAgICByb290LkFsZXJ0ID0gYnNuLkFsZXJ0O1xuICAgIHJvb3QuQnV0dG9uID0gYnNuLkJ1dHRvbjtcbiAgICByb290LkNhcm91c2VsID0gYnNuLkNhcm91c2VsO1xuICAgIHJvb3QuQ29sbGFwc2UgPSBic24uQ29sbGFwc2U7XG4gICAgcm9vdC5Ecm9wZG93biA9IGJzbi5Ecm9wZG93bjtcbiAgICByb290Lk1vZGFsID0gYnNuLk1vZGFsO1xuICAgIHJvb3QuUG9wb3ZlciA9IGJzbi5Qb3BvdmVyO1xuICAgIHJvb3QuU2Nyb2xsU3B5ID0gYnNuLlNjcm9sbFNweTtcbiAgICByb290LlRhYiA9IGJzbi5UYWI7XG4gICAgcm9vdC5Ub2FzdCA9IGJzbi5Ub2FzdDtcbiAgICByb290LlRvb2x0aXAgPSBic24uVG9vbHRpcDtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBJbnRlcm5hbCBVdGlsaXR5IEZ1bmN0aW9uc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICAvLyBnbG9iYWxzXG4gIHZhciBnbG9iYWxPYmplY3QgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHRoaXN8fHdpbmRvdyxcbiAgICBET0MgPSBkb2N1bWVudCwgSFRNTCA9IERPQy5kb2N1bWVudEVsZW1lbnQsIGJvZHkgPSAnYm9keScsIC8vIGFsbG93IHRoZSBsaWJyYXJ5IHRvIGJlIHVzZWQgaW4gPGhlYWQ+XG4gIFxuICAgIC8vIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgR2xvYmFsIE9iamVjdFxuICAgIEJTTiA9IGdsb2JhbE9iamVjdC5CU04gPSB7fSxcbiAgICBzdXBwb3J0cyA9IEJTTi5zdXBwb3J0cyA9IFtdLFxuICBcbiAgICAvLyBmdW5jdGlvbiB0b2dnbGUgYXR0cmlidXRlc1xuICAgIGRhdGFUb2dnbGUgICAgPSAnZGF0YS10b2dnbGUnLFxuICAgIGRhdGFEaXNtaXNzICAgPSAnZGF0YS1kaXNtaXNzJyxcbiAgICBkYXRhU3B5ICAgICAgID0gJ2RhdGEtc3B5JyxcbiAgICBkYXRhUmlkZSAgICAgID0gJ2RhdGEtcmlkZScsXG4gIFxuICAgIC8vIGNvbXBvbmVudHNcbiAgICBzdHJpbmdBbGVydCAgICAgPSAnQWxlcnQnLFxuICAgIHN0cmluZ0J1dHRvbiAgICA9ICdCdXR0b24nLFxuICAgIHN0cmluZ0Nhcm91c2VsICA9ICdDYXJvdXNlbCcsXG4gICAgc3RyaW5nQ29sbGFwc2UgID0gJ0NvbGxhcHNlJyxcbiAgICBzdHJpbmdEcm9wZG93biAgPSAnRHJvcGRvd24nLFxuICAgIHN0cmluZ01vZGFsICAgICA9ICdNb2RhbCcsXG4gICAgc3RyaW5nUG9wb3ZlciAgID0gJ1BvcG92ZXInLFxuICAgIHN0cmluZ1Njcm9sbFNweSA9ICdTY3JvbGxTcHknLFxuICAgIHN0cmluZ1RhYiAgICAgICA9ICdUYWInLFxuICAgIHN0cmluZ1Rvb2x0aXAgICA9ICdUb29sdGlwJyxcbiAgICBzdHJpbmdUb2FzdCAgICAgPSAnVG9hc3QnLFxuICBcbiAgICAvLyBvcHRpb25zIERBVEEgQVBJXG4gICAgZGF0YUF1dG9oaWRlICAgICAgPSAnZGF0YS1hdXRvaGlkZScsXG4gICAgZGF0YWJhY2tkcm9wICAgICAgPSAnZGF0YS1iYWNrZHJvcCcsXG4gICAgZGF0YUtleWJvYXJkICAgICAgPSAnZGF0YS1rZXlib2FyZCcsXG4gICAgZGF0YVRhcmdldCAgICAgICAgPSAnZGF0YS10YXJnZXQnLFxuICAgIGRhdGFJbnRlcnZhbCAgICAgID0gJ2RhdGEtaW50ZXJ2YWwnLFxuICAgIGRhdGFIZWlnaHQgICAgICAgID0gJ2RhdGEtaGVpZ2h0JyxcbiAgICBkYXRhUGF1c2UgICAgICAgICA9ICdkYXRhLXBhdXNlJyxcbiAgICBkYXRhVGl0bGUgICAgICAgICA9ICdkYXRhLXRpdGxlJyxcbiAgICBkYXRhT3JpZ2luYWxUaXRsZSA9ICdkYXRhLW9yaWdpbmFsLXRpdGxlJyxcbiAgICBkYXRhRGlzbWlzc2libGUgICA9ICdkYXRhLWRpc21pc3NpYmxlJyxcbiAgICBkYXRhVHJpZ2dlciAgICAgICA9ICdkYXRhLXRyaWdnZXInLFxuICAgIGRhdGFBbmltYXRpb24gICAgID0gJ2RhdGEtYW5pbWF0aW9uJyxcbiAgICBkYXRhQ29udGFpbmVyICAgICA9ICdkYXRhLWNvbnRhaW5lcicsXG4gICAgZGF0YVBsYWNlbWVudCAgICAgPSAnZGF0YS1wbGFjZW1lbnQnLFxuICAgIGRhdGFEZWxheSAgICAgICAgID0gJ2RhdGEtZGVsYXknLFxuICBcbiAgICAvLyBvcHRpb24ga2V5c1xuICAgIGJhY2tkcm9wID0gJ2JhY2tkcm9wJywga2V5Ym9hcmQgPSAna2V5Ym9hcmQnLCBkZWxheSA9ICdkZWxheScsXG4gICAgY29udGVudCA9ICdjb250ZW50JywgdGFyZ2V0ID0gJ3RhcmdldCcsIGN1cnJlbnRUYXJnZXQgPSAnY3VycmVudFRhcmdldCcsXG4gICAgaW50ZXJ2YWwgPSAnaW50ZXJ2YWwnLCBwYXVzZSA9ICdwYXVzZScsIGFuaW1hdGlvbiA9ICdhbmltYXRpb24nLFxuICAgIHBsYWNlbWVudCA9ICdwbGFjZW1lbnQnLCBjb250YWluZXIgPSAnY29udGFpbmVyJyxcbiAgXG4gICAgLy8gYm94IG1vZGVsXG4gICAgb2Zmc2V0VG9wICAgID0gJ29mZnNldFRvcCcsICAgICAgb2Zmc2V0Qm90dG9tICAgPSAnb2Zmc2V0Qm90dG9tJyxcbiAgICBvZmZzZXRMZWZ0ICAgPSAnb2Zmc2V0TGVmdCcsXG4gICAgc2Nyb2xsVG9wICAgID0gJ3Njcm9sbFRvcCcsICAgICAgc2Nyb2xsTGVmdCAgICAgPSAnc2Nyb2xsTGVmdCcsXG4gICAgY2xpZW50V2lkdGggID0gJ2NsaWVudFdpZHRoJywgICAgY2xpZW50SGVpZ2h0ICAgPSAnY2xpZW50SGVpZ2h0JyxcbiAgICBvZmZzZXRXaWR0aCAgPSAnb2Zmc2V0V2lkdGgnLCAgICBvZmZzZXRIZWlnaHQgICA9ICdvZmZzZXRIZWlnaHQnLFxuICAgIGlubmVyV2lkdGggICA9ICdpbm5lcldpZHRoJywgICAgIGlubmVySGVpZ2h0ICAgID0gJ2lubmVySGVpZ2h0JyxcbiAgICBzY3JvbGxIZWlnaHQgPSAnc2Nyb2xsSGVpZ2h0JywgICBzY3JvbGxXaWR0aCAgICA9ICdzY3JvbGxXaWR0aCcsXG4gICAgaGVpZ2h0ICAgICAgICAgPSAnaGVpZ2h0JyxcbiAgXG4gICAgLy8gYXJpYVxuICAgIGFyaWFFeHBhbmRlZCA9ICdhcmlhLWV4cGFuZGVkJyxcbiAgICBhcmlhSGlkZGVuICAgPSAnYXJpYS1oaWRkZW4nLFxuICAgIGFyaWFTZWxlY3RlZCA9ICdhcmlhLXNlbGVjdGVkJyxcbiAgXG4gICAgLy8gZXZlbnQgbmFtZXNcbiAgICBjbGlja0V2ZW50ICAgID0gJ2NsaWNrJyxcbiAgICBmb2N1c0V2ZW50ICAgID0gJ2ZvY3VzJyxcbiAgICBob3ZlckV2ZW50ICAgID0gJ2hvdmVyJyxcbiAgICBrZXlkb3duRXZlbnQgID0gJ2tleWRvd24nLFxuICAgIGtleXVwRXZlbnQgICAgPSAna2V5dXAnLFxuICAgIHJlc2l6ZUV2ZW50ICAgPSAncmVzaXplJywgLy8gcGFzc2l2ZVxuICAgIHNjcm9sbEV2ZW50ICAgPSAnc2Nyb2xsJywgLy8gcGFzc2l2ZVxuICAgIG1vdXNlSG92ZXIgPSAoJ29ubW91c2VsZWF2ZScgaW4gRE9DKSA/IFsgJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZSddIDogWyAnbW91c2VvdmVyJywgJ21vdXNlb3V0JyBdLFxuICAgIC8vIHRvdWNoIHNpbmNlIDIuMC4yNlxuICAgIHRvdWNoRXZlbnRzID0geyBzdGFydDogJ3RvdWNoc3RhcnQnLCBlbmQ6ICd0b3VjaGVuZCcsIG1vdmU6J3RvdWNobW92ZScgfSwgLy8gcGFzc2l2ZVxuICAgIC8vIG9yaWdpbmFsRXZlbnRzXG4gICAgc2hvd0V2ZW50ICAgICA9ICdzaG93JyxcbiAgICBzaG93bkV2ZW50ICAgID0gJ3Nob3duJyxcbiAgICBoaWRlRXZlbnQgICAgID0gJ2hpZGUnLFxuICAgIGhpZGRlbkV2ZW50ICAgPSAnaGlkZGVuJyxcbiAgICBjbG9zZUV2ZW50ICAgID0gJ2Nsb3NlJyxcbiAgICBjbG9zZWRFdmVudCAgID0gJ2Nsb3NlZCcsXG4gICAgc2xpZEV2ZW50ICAgICA9ICdzbGlkJyxcbiAgICBzbGlkZUV2ZW50ICAgID0gJ3NsaWRlJyxcbiAgICBjaGFuZ2VFdmVudCAgID0gJ2NoYW5nZScsXG4gIFxuICAgIC8vIG90aGVyXG4gICAgZ2V0QXR0cmlidXRlICAgICAgICAgICA9ICdnZXRBdHRyaWJ1dGUnLFxuICAgIHNldEF0dHJpYnV0ZSAgICAgICAgICAgPSAnc2V0QXR0cmlidXRlJyxcbiAgICBoYXNBdHRyaWJ1dGUgICAgICAgICAgID0gJ2hhc0F0dHJpYnV0ZScsXG4gICAgY3JlYXRlRWxlbWVudCAgICAgICAgICA9ICdjcmVhdGVFbGVtZW50JyxcbiAgICBhcHBlbmRDaGlsZCAgICAgICAgICAgID0gJ2FwcGVuZENoaWxkJyxcbiAgICBpbm5lckhUTUwgICAgICAgICAgICAgID0gJ2lubmVySFRNTCcsXG4gICAgZ2V0RWxlbWVudHNCeVRhZ05hbWUgICA9ICdnZXRFbGVtZW50c0J5VGFnTmFtZScsXG4gICAgcHJldmVudERlZmF1bHQgICAgICAgICA9ICdwcmV2ZW50RGVmYXVsdCcsXG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICA9ICdnZXRCb3VuZGluZ0NsaWVudFJlY3QnLFxuICAgIHF1ZXJ5U2VsZWN0b3JBbGwgICAgICAgPSAncXVlcnlTZWxlY3RvckFsbCcsXG4gICAgZ2V0RWxlbWVudHNCeUNMQVNTTkFNRSA9ICdnZXRFbGVtZW50c0J5Q2xhc3NOYW1lJyxcbiAgICBnZXRDb21wdXRlZFN0eWxlICAgICAgID0gJ2dldENvbXB1dGVkU3R5bGUnLCAgXG4gIFxuICAgIGluZGV4T2YgICAgICA9ICdpbmRleE9mJyxcbiAgICBwYXJlbnROb2RlICAgPSAncGFyZW50Tm9kZScsXG4gICAgbGVuZ3RoICAgICAgID0gJ2xlbmd0aCcsXG4gICAgdG9Mb3dlckNhc2UgID0gJ3RvTG93ZXJDYXNlJyxcbiAgICBUcmFuc2l0aW9uICAgPSAnVHJhbnNpdGlvbicsXG4gICAgRHVyYXRpb24gICAgID0gJ0R1cmF0aW9uJyxcbiAgICBXZWJraXQgICAgICAgPSAnV2Via2l0JyxcbiAgICBzdHlsZSAgICAgICAgPSAnc3R5bGUnLFxuICAgIHB1c2ggICAgICAgICA9ICdwdXNoJyxcbiAgICB0YWJpbmRleCAgICAgPSAndGFiaW5kZXgnLFxuICAgIGNvbnRhaW5zICAgICA9ICdjb250YWlucycsXG4gIFxuICAgIGFjdGl2ZSAgICAgPSAnYWN0aXZlJyxcbiAgICBzaG93Q2xhc3MgID0gJ3Nob3cnLFxuICAgIGNvbGxhcHNpbmcgPSAnY29sbGFwc2luZycsXG4gICAgZGlzYWJsZWQgICA9ICdkaXNhYmxlZCcsXG4gICAgbG9hZGluZyAgICA9ICdsb2FkaW5nJyxcbiAgICBsZWZ0ICAgICAgID0gJ2xlZnQnLFxuICAgIHJpZ2h0ICAgICAgPSAncmlnaHQnLFxuICAgIHRvcCAgICAgICAgPSAndG9wJyxcbiAgICBib3R0b20gICAgID0gJ2JvdHRvbScsXG4gIFxuICAgIC8vIHRvb2x0aXAgLyBwb3BvdmVyXG4gICAgdGlwUG9zaXRpb25zID0gL1xcYih0b3B8Ym90dG9tfGxlZnR8cmlnaHQpKy8sXG4gIFxuICAgIC8vIG1vZGFsXG4gICAgbW9kYWxPdmVybGF5ID0gMCxcbiAgICBmaXhlZFRvcCA9ICdmaXhlZC10b3AnLFxuICAgIGZpeGVkQm90dG9tID0gJ2ZpeGVkLWJvdHRvbScsXG4gIFxuICAgIC8vIHRyYW5zaXRpb25FbmQgc2luY2UgMi4wLjRcbiAgICBzdXBwb3J0VHJhbnNpdGlvbnMgPSBXZWJraXQrVHJhbnNpdGlvbiBpbiBIVE1MW3N0eWxlXSB8fCBUcmFuc2l0aW9uW3RvTG93ZXJDYXNlXSgpIGluIEhUTUxbc3R5bGVdLFxuICAgIHRyYW5zaXRpb25FbmRFdmVudCA9IFdlYmtpdCtUcmFuc2l0aW9uIGluIEhUTUxbc3R5bGVdID8gV2Via2l0W3RvTG93ZXJDYXNlXSgpK1RyYW5zaXRpb24rJ0VuZCcgOiBUcmFuc2l0aW9uW3RvTG93ZXJDYXNlXSgpKydlbmQnLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IFdlYmtpdCtEdXJhdGlvbiBpbiBIVE1MW3N0eWxlXSA/IFdlYmtpdFt0b0xvd2VyQ2FzZV0oKStUcmFuc2l0aW9uK0R1cmF0aW9uIDogVHJhbnNpdGlvblt0b0xvd2VyQ2FzZV0oKStEdXJhdGlvbixcbiAgXG4gICAgLy8gc2V0IG5ldyBmb2N1cyBlbGVtZW50IHNpbmNlIDIuMC4zXG4gICAgc2V0Rm9jdXMgPSBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgIGVsZW1lbnQuZm9jdXMgPyBlbGVtZW50LmZvY3VzKCkgOiBlbGVtZW50LnNldEFjdGl2ZSgpO1xuICAgIH0sXG4gIFxuICAgIC8vIGNsYXNzIG1hbmlwdWxhdGlvbiwgc2luY2UgMi4wLjAgcmVxdWlyZXMgcG9seWZpbGwuanNcbiAgICBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsY2xhc3NOQU1FKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOQU1FKTtcbiAgICB9LFxuICAgIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlbWVudCxjbGFzc05BTUUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05BTUUpO1xuICAgIH0sXG4gICAgaGFzQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LGNsYXNzTkFNRSl7IC8vIHNpbmNlIDIuMC4wXG4gICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3RbY29udGFpbnNdKGNsYXNzTkFNRSk7XG4gICAgfSxcbiAgXG4gICAgLy8gc2VsZWN0aW9uIG1ldGhvZHNcbiAgICBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gZnVuY3Rpb24oZWxlbWVudCxjbGFzc05BTUUpIHsgLy8gcmV0dXJucyBBcnJheVxuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoZWxlbWVudFtnZXRFbGVtZW50c0J5Q0xBU1NOQU1FXSggY2xhc3NOQU1FICkpO1xuICAgIH0sXG4gICAgcXVlcnlFbGVtZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwYXJlbnQpIHtcbiAgICAgIHZhciBsb29rVXAgPSBwYXJlbnQgPyBwYXJlbnQgOiBET0M7XG4gICAgICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSAnb2JqZWN0JyA/IHNlbGVjdG9yIDogbG9va1VwLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0sXG4gICAgZ2V0Q2xvc2VzdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBzZWxlY3RvcikgeyAvL2VsZW1lbnQgaXMgdGhlIGVsZW1lbnQgYW5kIHNlbGVjdG9yIGlzIGZvciB0aGUgY2xvc2VzdCBwYXJlbnQgZWxlbWVudCB0byBmaW5kXG4gICAgICAvLyBzb3VyY2UgaHR0cDovL2dvbWFrZXRoaW5ncy5jb20vY2xpbWJpbmctdXAtYW5kLWRvd24tdGhlLWRvbS10cmVlLXdpdGgtdmFuaWxsYS1qYXZhc2NyaXB0L1xuICAgICAgdmFyIGZpcnN0Q2hhciA9IHNlbGVjdG9yLmNoYXJBdCgwKSwgc2VsZWN0b3JTdWJzdHJpbmcgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XG4gICAgICBpZiAoIGZpcnN0Q2hhciA9PT0gJy4nICkgey8vIElmIHNlbGVjdG9yIGlzIGEgY2xhc3NcbiAgICAgICAgZm9yICggOyBlbGVtZW50ICYmIGVsZW1lbnQgIT09IERPQzsgZWxlbWVudCA9IGVsZW1lbnRbcGFyZW50Tm9kZV0gKSB7IC8vIEdldCBjbG9zZXN0IG1hdGNoXG4gICAgICAgICAgaWYgKCBxdWVyeUVsZW1lbnQoc2VsZWN0b3IsZWxlbWVudFtwYXJlbnROb2RlXSkgIT09IG51bGwgJiYgaGFzQ2xhc3MoZWxlbWVudCxzZWxlY3RvclN1YnN0cmluZykgKSB7IHJldHVybiBlbGVtZW50OyB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIGZpcnN0Q2hhciA9PT0gJyMnICkgeyAvLyBJZiBzZWxlY3RvciBpcyBhbiBJRFxuICAgICAgICBmb3IgKCA7IGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gRE9DOyBlbGVtZW50ID0gZWxlbWVudFtwYXJlbnROb2RlXSApIHsgLy8gR2V0IGNsb3Nlc3QgbWF0Y2hcbiAgICAgICAgICBpZiAoIGVsZW1lbnQuaWQgPT09IHNlbGVjdG9yU3Vic3RyaW5nICkgeyByZXR1cm4gZWxlbWVudDsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgXG4gICAgLy8gZXZlbnQgYXR0YWNoIGpRdWVyeSBzdHlsZSAvIHRyaWdnZXIgIHNpbmNlIDEuMi4wXG4gICAgb24gPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IGZhbHNlO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIG9mZiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCBmYWxzZTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSxcbiAgICBvbmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHsgLy8gb25lIHNpbmNlIDIuMC40XG4gICAgICBvbihlbGVtZW50LCBldmVudCwgZnVuY3Rpb24gaGFuZGxlcldyYXBwZXIoZSl7XG4gICAgICAgIGhhbmRsZXIoZSk7XG4gICAgICAgIG9mZihlbGVtZW50LCBldmVudCwgaGFuZGxlcldyYXBwZXIsIG9wdGlvbnMpO1xuICAgICAgfSwgb3B0aW9ucyk7XG4gICAgfSxcbiAgICAvLyBkZXRlcm1pbmUgc3VwcG9ydCBmb3IgcGFzc2l2ZSBldmVudHNcbiAgICBzdXBwb3J0UGFzc2l2ZSA9IChmdW5jdGlvbigpe1xuICAgICAgLy8gVGVzdCB2aWEgYSBnZXR0ZXIgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHRvIHNlZSBpZiB0aGUgcGFzc2l2ZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZFxuICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG9uZShnbG9iYWxPYmplY3QsICd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0oKSksXG4gICAgLy8gZXZlbnQgb3B0aW9uc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kI2ZlYXR1cmUtZGV0ZWN0aW9uXG4gICAgcGFzc2l2ZUhhbmRsZXIgPSBzdXBwb3J0UGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UsXG4gICAgLy8gdHJhbnNpdGlvbnNcbiAgICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBkdXJhdGlvbiA9IHN1cHBvcnRUcmFuc2l0aW9ucyA/IGdsb2JhbE9iamVjdFtnZXRDb21wdXRlZFN0eWxlXShlbGVtZW50KVt0cmFuc2l0aW9uRHVyYXRpb25dIDogMDtcbiAgICAgIGR1cmF0aW9uID0gcGFyc2VGbG9hdChkdXJhdGlvbik7XG4gICAgICBkdXJhdGlvbiA9IHR5cGVvZiBkdXJhdGlvbiA9PT0gJ251bWJlcicgJiYgIWlzTmFOKGR1cmF0aW9uKSA/IGR1cmF0aW9uICogMTAwMCA6IDA7XG4gICAgICByZXR1cm4gZHVyYXRpb247IC8vIHdlIHRha2UgYSBzaG9ydCBvZmZzZXQgdG8gbWFrZSBzdXJlIHdlIGZpcmUgb24gdGhlIG5leHQgZnJhbWUgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgfSxcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKGVsZW1lbnQsaGFuZGxlcil7IC8vIGVtdWxhdGVUcmFuc2l0aW9uRW5kIHNpbmNlIDIuMC40XG4gICAgICB2YXIgY2FsbGVkID0gMCwgZHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGR1cmF0aW9uID8gb25lKGVsZW1lbnQsIHRyYW5zaXRpb25FbmRFdmVudCwgZnVuY3Rpb24oZSl7ICFjYWxsZWQgJiYgaGFuZGxlcihlKSwgY2FsbGVkID0gMTsgfSlcbiAgICAgICAgICAgICAgIDogc2V0VGltZW91dChmdW5jdGlvbigpIHsgIWNhbGxlZCAmJiBoYW5kbGVyKCksIGNhbGxlZCA9IDE7IH0sIDE3KTtcbiAgICB9LFxuICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgY29tcG9uZW50TmFtZSwgcmVsYXRlZCkge1xuICAgICAgdmFyIE9yaWdpbmFsQ3VzdG9tRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoIGV2ZW50TmFtZSArICcuYnMuJyArIGNvbXBvbmVudE5hbWUpO1xuICAgICAgT3JpZ2luYWxDdXN0b21FdmVudC5yZWxhdGVkVGFyZ2V0ID0gcmVsYXRlZDtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPcmlnaW5hbEN1c3RvbUV2ZW50KTtcbiAgICB9LFxuICBcbiAgICAvLyB0b29sdGlwIC8gcG9wb3ZlciBzdHVmZlxuICAgIGdldFNjcm9sbCA9IGZ1bmN0aW9uKCkgeyAvLyBhbHNvIEFmZml4IGFuZCBTY3JvbGxTcHkgdXNlcyBpdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeSA6IGdsb2JhbE9iamVjdC5wYWdlWU9mZnNldCB8fCBIVE1MW3Njcm9sbFRvcF0sXG4gICAgICAgIHggOiBnbG9iYWxPYmplY3QucGFnZVhPZmZzZXQgfHwgSFRNTFtzY3JvbGxMZWZ0XVxuICAgICAgfVxuICAgIH0sXG4gICAgc3R5bGVUaXAgPSBmdW5jdGlvbihsaW5rLGVsZW1lbnQscG9zaXRpb24scGFyZW50KSB7IC8vIGJvdGggcG9wb3ZlcnMgYW5kIHRvb2x0aXBzICh0YXJnZXQsdG9vbHRpcCxwbGFjZW1lbnQsZWxlbWVudFRvQXBwZW5kVG8pXG4gICAgICB2YXIgZWxlbWVudERpbWVuc2lvbnMgPSB7IHcgOiBlbGVtZW50W29mZnNldFdpZHRoXSwgaDogZWxlbWVudFtvZmZzZXRIZWlnaHRdIH0sXG4gICAgICAgICAgd2luZG93V2lkdGggPSAoSFRNTFtjbGllbnRXaWR0aF0gfHwgRE9DW2JvZHldW2NsaWVudFdpZHRoXSksXG4gICAgICAgICAgd2luZG93SGVpZ2h0ID0gKEhUTUxbY2xpZW50SGVpZ2h0XSB8fCBET0NbYm9keV1bY2xpZW50SGVpZ2h0XSksXG4gICAgICAgICAgcmVjdCA9IGxpbmtbZ2V0Qm91bmRpbmdDbGllbnRSZWN0XSgpLFxuICAgICAgICAgIHNjcm9sbCA9IHBhcmVudCA9PT0gRE9DW2JvZHldID8gZ2V0U2Nyb2xsKCkgOiB7IHg6IHBhcmVudFtvZmZzZXRMZWZ0XSArIHBhcmVudFtzY3JvbGxMZWZ0XSwgeTogcGFyZW50W29mZnNldFRvcF0gKyBwYXJlbnRbc2Nyb2xsVG9wXSB9LFxuICAgICAgICAgIGxpbmtEaW1lbnNpb25zID0geyB3OiByZWN0W3JpZ2h0XSAtIHJlY3RbbGVmdF0sIGg6IHJlY3RbYm90dG9tXSAtIHJlY3RbdG9wXSB9LFxuICAgICAgICAgIGlzUG9wb3ZlciA9IGhhc0NsYXNzKGVsZW1lbnQsJ3BvcG92ZXInKSxcbiAgICAgICAgICB0b3BQb3NpdGlvbiwgbGVmdFBvc2l0aW9uLFxuICBcbiAgICAgICAgICBhcnJvdyA9IHF1ZXJ5RWxlbWVudCgnLmFycm93JyxlbGVtZW50KSxcbiAgICAgICAgICBhcnJvd1RvcCwgYXJyb3dMZWZ0LCBhcnJvd1dpZHRoLCBhcnJvd0hlaWdodCxcbiAgXG4gICAgICAgICAgaGFsZlRvcEV4Y2VlZCA9IHJlY3RbdG9wXSArIGxpbmtEaW1lbnNpb25zLmgvMiAtIGVsZW1lbnREaW1lbnNpb25zLmgvMiA8IDAsXG4gICAgICAgICAgaGFsZkxlZnRFeGNlZWQgPSByZWN0W2xlZnRdICsgbGlua0RpbWVuc2lvbnMudy8yIC0gZWxlbWVudERpbWVuc2lvbnMudy8yIDwgMCxcbiAgICAgICAgICBoYWxmUmlnaHRFeGNlZWQgPSByZWN0W2xlZnRdICsgZWxlbWVudERpbWVuc2lvbnMudy8yICsgbGlua0RpbWVuc2lvbnMudy8yID49IHdpbmRvd1dpZHRoLFxuICAgICAgICAgIGhhbGZCb3R0b21FeGNlZWQgPSByZWN0W3RvcF0gKyBlbGVtZW50RGltZW5zaW9ucy5oLzIgKyBsaW5rRGltZW5zaW9ucy5oLzIgPj0gd2luZG93SGVpZ2h0LFxuICAgICAgICAgIHRvcEV4Y2VlZCA9IHJlY3RbdG9wXSAtIGVsZW1lbnREaW1lbnNpb25zLmggPCAwLFxuICAgICAgICAgIGxlZnRFeGNlZWQgPSByZWN0W2xlZnRdIC0gZWxlbWVudERpbWVuc2lvbnMudyA8IDAsXG4gICAgICAgICAgYm90dG9tRXhjZWVkID0gcmVjdFt0b3BdICsgZWxlbWVudERpbWVuc2lvbnMuaCArIGxpbmtEaW1lbnNpb25zLmggPj0gd2luZG93SGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0RXhjZWVkID0gcmVjdFtsZWZ0XSArIGVsZW1lbnREaW1lbnNpb25zLncgKyBsaW5rRGltZW5zaW9ucy53ID49IHdpbmRvd1dpZHRoO1xuICBcbiAgICAgIC8vIHJlY29tcHV0ZSBwb3NpdGlvblxuICAgICAgcG9zaXRpb24gPSAocG9zaXRpb24gPT09IGxlZnQgfHwgcG9zaXRpb24gPT09IHJpZ2h0KSAmJiBsZWZ0RXhjZWVkICYmIHJpZ2h0RXhjZWVkID8gdG9wIDogcG9zaXRpb247IC8vIGZpcnN0LCB3aGVuIGJvdGggbGVmdCBhbmQgcmlnaHQgbGltaXRzIGFyZSBleGNlZWRlZCwgd2UgZmFsbCBiYWNrIHRvIHRvcHxib3R0b21cbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPT09IHRvcCAmJiB0b3BFeGNlZWQgPyBib3R0b20gOiBwb3NpdGlvbjtcbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPT09IGJvdHRvbSAmJiBib3R0b21FeGNlZWQgPyB0b3AgOiBwb3NpdGlvbjtcbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPT09IGxlZnQgJiYgbGVmdEV4Y2VlZCA/IHJpZ2h0IDogcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID09PSByaWdodCAmJiByaWdodEV4Y2VlZCA/IGxlZnQgOiBwb3NpdGlvbjtcbiAgXG4gICAgICAvLyB1cGRhdGUgdG9vbHRpcC9wb3BvdmVyIGNsYXNzXG4gICAgICBlbGVtZW50LmNsYXNzTmFtZVtpbmRleE9mXShwb3NpdGlvbikgPT09IC0xICYmIChlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UodGlwUG9zaXRpb25zLHBvc2l0aW9uKSk7XG4gIFxuICAgICAgLy8gd2UgY2hlY2sgdGhlIGNvbXB1dGVkIHdpZHRoICYgaGVpZ2h0IGFuZCB1cGRhdGUgaGVyZVxuICAgICAgYXJyb3dXaWR0aCA9IGFycm93W29mZnNldFdpZHRoXTsgYXJyb3dIZWlnaHQgPSBhcnJvd1tvZmZzZXRIZWlnaHRdO1xuICBcbiAgICAgIC8vIGFwcGx5IHN0eWxpbmcgdG8gdG9vbHRpcCBvciBwb3BvdmVyXG4gICAgICBpZiAoIHBvc2l0aW9uID09PSBsZWZ0IHx8IHBvc2l0aW9uID09PSByaWdodCApIHsgLy8gc2Vjb25kYXJ5fHNpZGUgcG9zaXRpb25zXG4gICAgICAgIGlmICggcG9zaXRpb24gPT09IGxlZnQgKSB7IC8vIExFRlRcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSByZWN0W2xlZnRdICsgc2Nyb2xsLnggLSBlbGVtZW50RGltZW5zaW9ucy53IC0gKCBpc1BvcG92ZXIgPyBhcnJvd1dpZHRoIDogMCApO1xuICAgICAgICB9IGVsc2UgeyAvLyBSSUdIVFxuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IHJlY3RbbGVmdF0gKyBzY3JvbGwueCArIGxpbmtEaW1lbnNpb25zLnc7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIGFkanVzdCB0b3AgYW5kIGFycm93XG4gICAgICAgIGlmIChoYWxmVG9wRXhjZWVkKSB7XG4gICAgICAgICAgdG9wUG9zaXRpb24gPSByZWN0W3RvcF0gKyBzY3JvbGwueTtcbiAgICAgICAgICBhcnJvd1RvcCA9IGxpbmtEaW1lbnNpb25zLmgvMiAtIGFycm93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFsZkJvdHRvbUV4Y2VlZCkge1xuICAgICAgICAgIHRvcFBvc2l0aW9uID0gcmVjdFt0b3BdICsgc2Nyb2xsLnkgLSBlbGVtZW50RGltZW5zaW9ucy5oICsgbGlua0RpbWVuc2lvbnMuaDtcbiAgICAgICAgICBhcnJvd1RvcCA9IGVsZW1lbnREaW1lbnNpb25zLmggLSBsaW5rRGltZW5zaW9ucy5oLzIgLSBhcnJvd1dpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvcFBvc2l0aW9uID0gcmVjdFt0b3BdICsgc2Nyb2xsLnkgLSBlbGVtZW50RGltZW5zaW9ucy5oLzIgKyBsaW5rRGltZW5zaW9ucy5oLzI7XG4gICAgICAgICAgYXJyb3dUb3AgPSBlbGVtZW50RGltZW5zaW9ucy5oLzIgLSAoaXNQb3BvdmVyID8gYXJyb3dIZWlnaHQqMC45IDogYXJyb3dIZWlnaHQvMik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIHBvc2l0aW9uID09PSB0b3AgfHwgcG9zaXRpb24gPT09IGJvdHRvbSApIHsgLy8gcHJpbWFyeXx2ZXJ0aWNhbCBwb3NpdGlvbnNcbiAgICAgICAgaWYgKCBwb3NpdGlvbiA9PT0gdG9wKSB7IC8vIFRPUFxuICAgICAgICAgIHRvcFBvc2l0aW9uID0gIHJlY3RbdG9wXSArIHNjcm9sbC55IC0gZWxlbWVudERpbWVuc2lvbnMuaCAtICggaXNQb3BvdmVyID8gYXJyb3dIZWlnaHQgOiAwICk7XG4gICAgICAgIH0gZWxzZSB7IC8vIEJPVFRPTVxuICAgICAgICAgIHRvcFBvc2l0aW9uID0gcmVjdFt0b3BdICsgc2Nyb2xsLnkgKyBsaW5rRGltZW5zaW9ucy5oO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkanVzdCBsZWZ0IHwgcmlnaHQgYW5kIGFsc28gdGhlIGFycm93XG4gICAgICAgIGlmIChoYWxmTGVmdEV4Y2VlZCkge1xuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgYXJyb3dMZWZ0ID0gcmVjdFtsZWZ0XSArIGxpbmtEaW1lbnNpb25zLncvMiAtIGFycm93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFsZlJpZ2h0RXhjZWVkKSB7XG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gd2luZG93V2lkdGggLSBlbGVtZW50RGltZW5zaW9ucy53KjEuMDE7XG4gICAgICAgICAgYXJyb3dMZWZ0ID0gZWxlbWVudERpbWVuc2lvbnMudyAtICggd2luZG93V2lkdGggLSByZWN0W2xlZnRdICkgKyBsaW5rRGltZW5zaW9ucy53LzIgLSBhcnJvd1dpZHRoLzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gcmVjdFtsZWZ0XSArIHNjcm9sbC54IC0gZWxlbWVudERpbWVuc2lvbnMudy8yICsgbGlua0RpbWVuc2lvbnMudy8yO1xuICAgICAgICAgIGFycm93TGVmdCA9IGVsZW1lbnREaW1lbnNpb25zLncvMiAtICggaXNQb3BvdmVyID8gYXJyb3dXaWR0aCA6IGFycm93V2lkdGgvMiApO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gYXBwbHkgc3R5bGUgdG8gdG9vbHRpcC9wb3BvdmVyIGFuZCBpdHMgYXJyb3dcbiAgICAgIGVsZW1lbnRbc3R5bGVdW3RvcF0gPSB0b3BQb3NpdGlvbiArICdweCc7XG4gICAgICBlbGVtZW50W3N0eWxlXVtsZWZ0XSA9IGxlZnRQb3NpdGlvbiArICdweCc7XG4gIFxuICAgICAgYXJyb3dUb3AgJiYgKGFycm93W3N0eWxlXVt0b3BdID0gYXJyb3dUb3AgKyAncHgnKTtcbiAgICAgIGFycm93TGVmdCAmJiAoYXJyb3dbc3R5bGVdW2xlZnRdID0gYXJyb3dMZWZ0ICsgJ3B4Jyk7XG4gICAgfTtcbiAgXG4gIEJTTi52ZXJzaW9uID0gJzIuMC4yNyc7XG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBBbGVydFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIEFMRVJUIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PVxuICB2YXIgQWxlcnQgPSBmdW5jdGlvbiggZWxlbWVudCApIHtcbiAgICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gYmluZCwgdGFyZ2V0IGFsZXJ0LCBkdXJhdGlvbiBhbmQgc3R1ZmZcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGNvbXBvbmVudCA9ICdhbGVydCcsXG4gICAgICBhbGVydCA9IGdldENsb3Nlc3QoZWxlbWVudCwnLicrY29tcG9uZW50KSxcbiAgICAgIHRyaWdnZXJIYW5kbGVyID0gZnVuY3Rpb24oKXsgaGFzQ2xhc3MoYWxlcnQsJ2ZhZGUnKSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKGFsZXJ0LHRyYW5zaXRpb25FbmRIYW5kbGVyKSA6IHRyYW5zaXRpb25FbmRIYW5kbGVyKCk7IH0sXG4gICAgICAvLyBoYW5kbGVyc1xuICAgICAgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIGFsZXJ0ID0gZ2V0Q2xvc2VzdChlW3RhcmdldF0sJy4nK2NvbXBvbmVudCk7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoJ1snK2RhdGFEaXNtaXNzKyc9XCInK2NvbXBvbmVudCsnXCJdJyxhbGVydCk7XG4gICAgICAgIGVsZW1lbnQgJiYgYWxlcnQgJiYgKGVsZW1lbnQgPT09IGVbdGFyZ2V0XSB8fCBlbGVtZW50W2NvbnRhaW5zXShlW3RhcmdldF0pKSAmJiBzZWxmLmNsb3NlKCk7XG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvbkVuZEhhbmRsZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGFsZXJ0LCBjbG9zZWRFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgb2ZmKGVsZW1lbnQsIGNsaWNrRXZlbnQsIGNsaWNrSGFuZGxlcik7IC8vIGRldGFjaCBpdCdzIGxpc3RlbmVyXG4gICAgICAgIGFsZXJ0W3BhcmVudE5vZGVdLnJlbW92ZUNoaWxkKGFsZXJ0KTtcbiAgICAgIH07XG4gICAgXG4gICAgLy8gcHVibGljIG1ldGhvZFxuICAgIHRoaXMuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggYWxlcnQgJiYgZWxlbWVudCAmJiBoYXNDbGFzcyhhbGVydCxzaG93Q2xhc3MpICkge1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGFsZXJ0LCBjbG9zZUV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICByZW1vdmVDbGFzcyhhbGVydCxzaG93Q2xhc3MpO1xuICAgICAgICBhbGVydCAmJiB0cmlnZ2VySGFuZGxlcigpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nQWxlcnQgaW4gZWxlbWVudCApICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgb24oZWxlbWVudCwgY2xpY2tFdmVudCwgY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgZWxlbWVudFtzdHJpbmdBbGVydF0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gQUxFUlQgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oW3N0cmluZ0FsZXJ0LCBBbGVydCwgJ1snK2RhdGFEaXNtaXNzKyc9XCJhbGVydFwiXSddKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBCdXR0b25cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIEJVVFRPTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT1cbiAgdmFyIEJ1dHRvbiA9IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gY29uc3RhbnRcbiAgICB2YXIgdG9nZ2xlZCA9IGZhbHNlLCAvLyB0b2dnbGVkIG1ha2VzIHN1cmUgdG8gcHJldmVudCB0cmlnZ2VyaW5nIHR3aWNlIHRoZSBjaGFuZ2UuYnMuYnV0dG9uIGV2ZW50c1xuICBcbiAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICBjb21wb25lbnQgPSAnYnV0dG9uJyxcbiAgICAgICAgY2hlY2tlZCA9ICdjaGVja2VkJyxcbiAgICAgICAgTEFCRUwgPSAnTEFCRUwnLFxuICAgICAgICBJTlBVVCA9ICdJTlBVVCcsXG4gIFxuICAgICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgICBrZXlIYW5kbGVyID0gZnVuY3Rpb24oZSl7IFxuICAgICAgICB2YXIga2V5ID0gZS53aGljaCB8fCBlLmtleUNvZGU7XG4gICAgICAgIGtleSA9PT0gMzIgJiYgZVt0YXJnZXRdID09PSBET0MuYWN0aXZlRWxlbWVudCAmJiB0b2dnbGUoZSk7XG4gICAgICB9LFxuICAgICAgcHJldmVudFNjcm9sbCA9IGZ1bmN0aW9uKGUpeyBcbiAgICAgICAgdmFyIGtleSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xuICAgICAgICBrZXkgPT09IDMyICYmIGVbcHJldmVudERlZmF1bHRdKCk7XG4gICAgICB9LFxuICAgICAgdG9nZ2xlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgbGFiZWwgPSBlW3RhcmdldF0udGFnTmFtZSA9PT0gTEFCRUwgPyBlW3RhcmdldF0gOiBlW3RhcmdldF1bcGFyZW50Tm9kZV0udGFnTmFtZSA9PT0gTEFCRUwgPyBlW3RhcmdldF1bcGFyZW50Tm9kZV0gOiBudWxsOyAvLyB0aGUgLmJ0biBsYWJlbFxuICAgICAgICBcbiAgICAgICAgaWYgKCAhbGFiZWwgKSByZXR1cm47IC8vcmVhY3QgaWYgYSBsYWJlbCBvciBpdHMgaW1tZWRpYXRlIGNoaWxkIGlzIGNsaWNrZWRcbiAgXG4gICAgICAgIHZhciBsYWJlbHMgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhYmVsW3BhcmVudE5vZGVdLCdidG4nKSwgLy8gYWxsIHRoZSBidXR0b24gZ3JvdXAgYnV0dG9uc1xuICAgICAgICAgIGlucHV0ID0gbGFiZWxbZ2V0RWxlbWVudHNCeVRhZ05hbWVdKElOUFVUKVswXTtcbiAgXG4gICAgICAgIGlmICggIWlucHV0ICkgcmV0dXJuOyAvLyByZXR1cm4gaWYgbm8gaW5wdXQgZm91bmRcbiAgXG4gICAgICAgIC8vIG1hbmFnZSB0aGUgZG9tIG1hbmlwdWxhdGlvblxuICAgICAgICBpZiAoIGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcgKSB7IC8vY2hlY2tib3hlc1xuICAgICAgICAgIGlmICggIWlucHV0W2NoZWNrZWRdICkge1xuICAgICAgICAgICAgYWRkQ2xhc3MobGFiZWwsYWN0aXZlKTtcbiAgICAgICAgICAgIGlucHV0W2dldEF0dHJpYnV0ZV0oY2hlY2tlZCk7XG4gICAgICAgICAgICBpbnB1dFtzZXRBdHRyaWJ1dGVdKGNoZWNrZWQsY2hlY2tlZCk7XG4gICAgICAgICAgICBpbnB1dFtjaGVja2VkXSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGxhYmVsLGFjdGl2ZSk7XG4gICAgICAgICAgICBpbnB1dFtnZXRBdHRyaWJ1dGVdKGNoZWNrZWQpO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKGNoZWNrZWQpO1xuICAgICAgICAgICAgaW5wdXRbY2hlY2tlZF0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGlmICghdG9nZ2xlZCkgeyAvLyBwcmV2ZW50IHRyaWdnZXJpbmcgdGhlIGV2ZW50IHR3aWNlXG4gICAgICAgICAgICB0b2dnbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoaW5wdXQsIGNoYW5nZUV2ZW50LCBjb21wb25lbnQpOyAvL3RyaWdnZXIgdGhlIGNoYW5nZSBmb3IgdGhlIGlucHV0XG4gICAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIGNoYW5nZUV2ZW50LCBjb21wb25lbnQpOyAvL3RyaWdnZXIgdGhlIGNoYW5nZSBmb3IgdGhlIGJ0bi1ncm91cFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCBpbnB1dC50eXBlID09PSAncmFkaW8nICYmICF0b2dnbGVkICkgeyAvLyByYWRpbyBidXR0b25zXG4gICAgICAgICAgLy8gZG9uJ3QgdHJpZ2dlciBpZiBhbHJlYWR5IGFjdGl2ZSAodGhlIE9SIGNvbmRpdGlvbiBpcyBhIGhhY2sgdG8gY2hlY2sgaWYgdGhlIGJ1dHRvbnMgd2VyZSBzZWxlY3RlZCB3aXRoIGtleSBwcmVzcyBhbmQgTk9UIG1vdXNlIGNsaWNrKVxuICAgICAgICAgIGlmICggIWlucHV0W2NoZWNrZWRdIHx8IChlLnNjcmVlblggPT09IDAgJiYgZS5zY3JlZW5ZID09IDApICkge1xuICAgICAgICAgICAgYWRkQ2xhc3MobGFiZWwsYWN0aXZlKTtcbiAgICAgICAgICAgIGFkZENsYXNzKGxhYmVsLGZvY3VzRXZlbnQpO1xuICAgICAgICAgICAgaW5wdXRbc2V0QXR0cmlidXRlXShjaGVja2VkLGNoZWNrZWQpO1xuICAgICAgICAgICAgaW5wdXRbY2hlY2tlZF0gPSB0cnVlO1xuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChpbnB1dCwgY2hhbmdlRXZlbnQsIGNvbXBvbmVudCk7IC8vdHJpZ2dlciB0aGUgY2hhbmdlIGZvciB0aGUgaW5wdXRcbiAgICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgY2hhbmdlRXZlbnQsIGNvbXBvbmVudCk7IC8vdHJpZ2dlciB0aGUgY2hhbmdlIGZvciB0aGUgYnRuLWdyb3VwXG4gIFxuICAgICAgICAgICAgdG9nZ2xlZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGwgPSBsYWJlbHNbbGVuZ3RoXTsgaTxsbDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBvdGhlckxhYmVsID0gbGFiZWxzW2ldLCBvdGhlcklucHV0ID0gb3RoZXJMYWJlbFtnZXRFbGVtZW50c0J5VGFnTmFtZV0oSU5QVVQpWzBdO1xuICAgICAgICAgICAgICBpZiAoIG90aGVyTGFiZWwgIT09IGxhYmVsICYmIGhhc0NsYXNzKG90aGVyTGFiZWwsYWN0aXZlKSApICB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Mob3RoZXJMYWJlbCxhY3RpdmUpO1xuICAgICAgICAgICAgICAgIG90aGVySW5wdXQucmVtb3ZlQXR0cmlidXRlKGNoZWNrZWQpO1xuICAgICAgICAgICAgICAgIG90aGVySW5wdXRbY2hlY2tlZF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKG90aGVySW5wdXQsIGNoYW5nZUV2ZW50LCBjb21wb25lbnQpOyAvLyB0cmlnZ2VyIHRoZSBjaGFuZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgdG9nZ2xlZCA9IGZhbHNlOyB9LCA1MCApO1xuICAgICAgfSxcbiAgICAgIGZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgYWRkQ2xhc3MoZVt0YXJnZXRdW3BhcmVudE5vZGVdLGZvY3VzRXZlbnQpO1xuICAgICAgfSxcbiAgICAgIGJsdXJIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICByZW1vdmVDbGFzcyhlW3RhcmdldF1bcGFyZW50Tm9kZV0sZm9jdXNFdmVudCk7XG4gICAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKCBzdHJpbmdCdXR0b24gaW4gZWxlbWVudCApICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgb24oIGVsZW1lbnQsIGNsaWNrRXZlbnQsIHRvZ2dsZSApO1xuICAgICAgb24oIGVsZW1lbnQsIGtleXVwRXZlbnQsIGtleUhhbmRsZXIgKSwgb24oIGVsZW1lbnQsIGtleWRvd25FdmVudCwgcHJldmVudFNjcm9sbCApO1xuICBcbiAgICAgIHZhciBhbGxCdG5zID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbGVtZW50LCAnYnRuJyk7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8YWxsQnRucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaW5wdXQgPSBhbGxCdG5zW2ldW2dldEVsZW1lbnRzQnlUYWdOYW1lXShJTlBVVClbMF07XG4gICAgICAgIG9uKCBpbnB1dCwgZm9jdXNFdmVudCwgZm9jdXNIYW5kbGVyKSwgb24oIGlucHV0LCAnYmx1cicsIGJsdXJIYW5kbGVyKTtcbiAgICAgIH0gICAgXG4gICAgfVxuICBcbiAgICAvLyBhY3RpdmF0ZSBpdGVtcyBvbiBsb2FkXG4gICAgdmFyIGxhYmVsc1RvQUN0aXZhdGUgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsZW1lbnQsICdidG4nKSwgbGJsbCA9IGxhYmVsc1RvQUN0aXZhdGVbbGVuZ3RoXTtcbiAgICBmb3IgKHZhciBpPTA7IGk8bGJsbDsgaSsrKSB7XG4gICAgICAhaGFzQ2xhc3MobGFiZWxzVG9BQ3RpdmF0ZVtpXSxhY3RpdmUpICYmIHF1ZXJ5RWxlbWVudCgnaW5wdXQ6Y2hlY2tlZCcsbGFiZWxzVG9BQ3RpdmF0ZVtpXSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFkZENsYXNzKGxhYmVsc1RvQUN0aXZhdGVbaV0sYWN0aXZlKTtcbiAgICB9XG4gICAgZWxlbWVudFtzdHJpbmdCdXR0b25dID0gdGhpcztcbiAgfTtcbiAgXG4gIC8vIEJVVFRPTiBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdCdXR0b24sIEJ1dHRvbiwgJ1snK2RhdGFUb2dnbGUrJz1cImJ1dHRvbnNcIl0nIF0gKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBDYXJvdXNlbFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIENBUk9VU0VMIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuICB2YXIgQ2Fyb3VzZWwgPSBmdW5jdGlvbiggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoIGVsZW1lbnQgKTtcbiAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXG4gICAgLy8gREFUQSBBUElcbiAgICB2YXIgaW50ZXJ2YWxBdHRyaWJ1dGUgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUludGVydmFsKSxcbiAgICAgICAgaW50ZXJ2YWxPcHRpb24gPSBvcHRpb25zW2ludGVydmFsXSxcbiAgICAgICAgaW50ZXJ2YWxEYXRhID0gaW50ZXJ2YWxBdHRyaWJ1dGUgPT09ICdmYWxzZScgPyAwIDogcGFyc2VJbnQoaW50ZXJ2YWxBdHRyaWJ1dGUpLCAgXG4gICAgICAgIHBhdXNlRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhUGF1c2UpID09PSBob3ZlckV2ZW50IHx8IGZhbHNlLFxuICAgICAgICBrZXlib2FyZERhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUtleWJvYXJkKSA9PT0gJ3RydWUnIHx8IGZhbHNlLFxuICAgICAgXG4gICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgY29tcG9uZW50ID0gJ2Nhcm91c2VsJyxcbiAgICAgICAgcGF1c2VkID0gJ3BhdXNlZCcsXG4gICAgICAgIGRpcmVjdGlvbiA9ICdkaXJlY3Rpb24nLFxuICAgICAgICBjYXJvdXNlbEl0ZW0gPSAnY2Fyb3VzZWwtaXRlbScsXG4gICAgICAgIGRhdGFTbGlkZVRvID0gJ2RhdGEtc2xpZGUtdG8nOyBcbiAgXG4gICAgdGhpc1trZXlib2FyZF0gPSBvcHRpb25zW2tleWJvYXJkXSA9PT0gdHJ1ZSB8fCBrZXlib2FyZERhdGE7XG4gICAgdGhpc1twYXVzZV0gPSAob3B0aW9uc1twYXVzZV0gPT09IGhvdmVyRXZlbnQgfHwgcGF1c2VEYXRhKSA/IGhvdmVyRXZlbnQgOiBmYWxzZTsgLy8gZmFsc2UgLyBob3ZlclxuICBcbiAgICB0aGlzW2ludGVydmFsXSA9IHR5cGVvZiBpbnRlcnZhbE9wdGlvbiA9PT0gJ251bWJlcicgPyBpbnRlcnZhbE9wdGlvblxuICAgICAgICAgICAgICAgICAgIDogaW50ZXJ2YWxPcHRpb24gPT09IGZhbHNlIHx8IGludGVydmFsRGF0YSA9PT0gMCB8fCBpbnRlcnZhbERhdGEgPT09IGZhbHNlID8gMFxuICAgICAgICAgICAgICAgICAgIDogaXNOYU4oaW50ZXJ2YWxEYXRhKSA/IDUwMDAgLy8gYm9vdHN0cmFwIGNhcm91c2VsIGRlZmF1bHQgaW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgICA6IGludGVydmFsRGF0YTtcbiAgXG4gICAgLy8gYmluZCwgZXZlbnQgdGFyZ2V0c1xuICAgIHZhciBzZWxmID0gdGhpcywgaW5kZXggPSBlbGVtZW50LmluZGV4ID0gMCwgdGltZXIgPSBlbGVtZW50LnRpbWVyID0gMCwgXG4gICAgICBpc1NsaWRpbmcgPSBmYWxzZSwgLy8gaXNTbGlkaW5nIHByZXZlbnRzIGNsaWNrIGV2ZW50IGhhbmRsZXJzIHdoZW4gYW5pbWF0aW9uIGlzIHJ1bm5pbmdcbiAgICAgIGlzVG91Y2ggPSBmYWxzZSwgc3RhcnRYUG9zaXRpb24gPSBudWxsLCBjdXJyZW50WFBvc2l0aW9uID0gbnVsbCwgZW5kWFBvc2l0aW9uID0gbnVsbCwgLy8gdG91Y2ggYW5kIGV2ZW50IGNvb3JkaW5hdGVzXG4gICAgICBzbGlkZXMgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsZW1lbnQsY2Fyb3VzZWxJdGVtKSwgdG90YWwgPSBzbGlkZXNbbGVuZ3RoXSxcbiAgICAgIHNsaWRlRGlyZWN0aW9uID0gdGhpc1tkaXJlY3Rpb25dID0gbGVmdCxcbiAgICAgIGxlZnRBcnJvdyA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWxlbWVudCxjb21wb25lbnQrJy1jb250cm9sLXByZXYnKVswXSwgXG4gICAgICByaWdodEFycm93ID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbGVtZW50LGNvbXBvbmVudCsnLWNvbnRyb2wtbmV4dCcpWzBdLFxuICAgICAgaW5kaWNhdG9yID0gcXVlcnlFbGVtZW50KCAnLicrY29tcG9uZW50KyctaW5kaWNhdG9ycycsIGVsZW1lbnQgKSxcbiAgICAgIGluZGljYXRvcnMgPSBpbmRpY2F0b3IgJiYgaW5kaWNhdG9yW2dldEVsZW1lbnRzQnlUYWdOYW1lXSggXCJMSVwiICkgfHwgW107XG4gIFxuICAgIC8vIGludmFsaWRhdGUgd2hlbiBub3QgZW5vdWdoIGl0ZW1zXG4gICAgaWYgKHRvdGFsIDwgMikgeyByZXR1cm47IH1cbiAgXG4gICAgLy8gaGFuZGxlcnNcbiAgICB2YXIgcGF1c2VIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIHNlbGZbaW50ZXJ2YWxdICE9PWZhbHNlICYmICFoYXNDbGFzcyhlbGVtZW50LHBhdXNlZCkgKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCxwYXVzZWQpO1xuICAgICAgICAgICFpc1NsaWRpbmcgJiYgKCBjbGVhckludGVydmFsKHRpbWVyKSwgdGltZXIgPSBudWxsICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZXN1bWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggc2VsZltpbnRlcnZhbF0gIT09IGZhbHNlICYmIGhhc0NsYXNzKGVsZW1lbnQscGF1c2VkKSApIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyhlbGVtZW50LHBhdXNlZCk7XG4gICAgICAgICAgIWlzU2xpZGluZyAmJiAoIGNsZWFySW50ZXJ2YWwodGltZXIpLCB0aW1lciA9IG51bGwgKTtcbiAgICAgICAgICAhaXNTbGlkaW5nICYmIHNlbGYuY3ljbGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGluZGljYXRvckhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGVbcHJldmVudERlZmF1bHRdKCk7XG4gICAgICAgIGlmIChpc1NsaWRpbmcpIHJldHVybjtcbiAgXG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGVbdGFyZ2V0XTsgLy8gZXZlbnQgdGFyZ2V0IHwgdGhlIGN1cnJlbnQgYWN0aXZlIGl0ZW1cbiAgXG4gICAgICAgIGlmICggZXZlbnRUYXJnZXQgJiYgIWhhc0NsYXNzKGV2ZW50VGFyZ2V0LGFjdGl2ZSkgJiYgZXZlbnRUYXJnZXRbZ2V0QXR0cmlidXRlXShkYXRhU2xpZGVUbykgKSB7XG4gICAgICAgICAgaW5kZXggPSBwYXJzZUludCggZXZlbnRUYXJnZXRbZ2V0QXR0cmlidXRlXShkYXRhU2xpZGVUbyksIDEwICk7XG4gICAgICAgIH0gZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICBcbiAgICAgICAgc2VsZi5zbGlkZVRvKCBpbmRleCApOyAvL0RvIHRoZSBzbGlkZVxuICAgICAgfSxcbiAgICAgIGNvbnRyb2xzSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVbcHJldmVudERlZmF1bHRdKCk7XG4gICAgICAgIGlmIChpc1NsaWRpbmcpIHJldHVybjtcbiAgXG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gIFxuICAgICAgICBpZiAoIGV2ZW50VGFyZ2V0ID09PSByaWdodEFycm93ICkge1xuICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50VGFyZ2V0ID09PSBsZWZ0QXJyb3cgKSB7XG4gICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgc2VsZi5zbGlkZVRvKCBpbmRleCApOyAvL0RvIHRoZSBzbGlkZVxuICAgICAgfSxcbiAgICAgIGtleUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoaXNTbGlkaW5nKSByZXR1cm47XG4gICAgICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OiByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5zbGlkZVRvKCBpbmRleCApOyAvL0RvIHRoZSBzbGlkZVxuICAgICAgfSxcbiAgICAgIC8vIHRvdWNoIGV2ZW50c1xuICAgICAgdG9nZ2xlVG91Y2hFdmVudHMgPSBmdW5jdGlvbih0b2dnbGUpe1xuICAgICAgICB0b2dnbGUoIGVsZW1lbnQsIHRvdWNoRXZlbnRzLm1vdmUsIHRvdWNoTW92ZUhhbmRsZXIsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgICAgIHRvZ2dsZSggZWxlbWVudCwgdG91Y2hFdmVudHMuZW5kLCB0b3VjaEVuZEhhbmRsZXIsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgfSwgIFxuICAgICAgdG91Y2hEb3duSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCBpc1RvdWNoICkgeyByZXR1cm47IH0gXG4gICAgICAgICAgXG4gICAgICAgIHN0YXJ0WFBvc2l0aW9uID0gcGFyc2VJbnQoZS50b3VjaGVzWzBdLnBhZ2VYKTtcbiAgXG4gICAgICAgIGlmICggZWxlbWVudC5jb250YWlucyhlW3RhcmdldF0pICkge1xuICAgICAgICAgIGlzVG91Y2ggPSB0cnVlO1xuICAgICAgICAgIHRvZ2dsZVRvdWNoRXZlbnRzKG9uKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvdWNoTW92ZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICggIWlzVG91Y2ggKSB7IGUucHJldmVudERlZmF1bHQoKTsgcmV0dXJuOyB9XG4gIFxuICAgICAgICBjdXJyZW50WFBvc2l0aW9uID0gcGFyc2VJbnQoZS50b3VjaGVzWzBdLnBhZ2VYKTtcbiAgICAgICAgXG4gICAgICAgIC8vY2FuY2VsIHRvdWNoIGlmIG1vcmUgdGhhbiBvbmUgdG91Y2hlcyBkZXRlY3RlZFxuICAgICAgICBpZiAoIGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50b3VjaGVzW2xlbmd0aF0gPiAxICkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b3VjaEVuZEhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICggIWlzVG91Y2ggfHwgaXNTbGlkaW5nICkgeyByZXR1cm4gfVxuICAgICAgICBcbiAgICAgICAgZW5kWFBvc2l0aW9uID0gY3VycmVudFhQb3NpdGlvbiB8fCBwYXJzZUludCggZS50b3VjaGVzWzBdLnBhZ2VYICk7XG4gIFxuICAgICAgICBpZiAoIGlzVG91Y2ggKSB7XG4gICAgICAgICAgaWYgKCAoIWVsZW1lbnQuY29udGFpbnMoZVt0YXJnZXRdKSB8fCAhZWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpICkgJiYgTWF0aC5hYnMoc3RhcnRYUG9zaXRpb24gLSBlbmRYUG9zaXRpb24pIDwgNzUgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICggY3VycmVudFhQb3NpdGlvbiA8IHN0YXJ0WFBvc2l0aW9uICkge1xuICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggY3VycmVudFhQb3NpdGlvbiA+IHN0YXJ0WFBvc2l0aW9uICkge1xuICAgICAgICAgICAgICBpbmRleC0tOyAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1RvdWNoID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLnNsaWRlVG8oaW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b2dnbGVUb3VjaEV2ZW50cyhvZmYpOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9LFxuICBcbiAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgICAgaXNFbGVtZW50SW5TY3JvbGxSYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtZW50W2dldEJvdW5kaW5nQ2xpZW50UmVjdF0oKSxcbiAgICAgICAgICB2aWV3cG9ydEhlaWdodCA9IGdsb2JhbE9iamVjdFtpbm5lckhlaWdodF0gfHwgSFRNTFtjbGllbnRIZWlnaHRdXG4gICAgICAgIHJldHVybiByZWN0W3RvcF0gPD0gdmlld3BvcnRIZWlnaHQgJiYgcmVjdFtib3R0b21dID49IDA7IC8vIGJvdHRvbSAmJiB0b3BcbiAgICAgIH0sICAgIFxuICAgICAgc2V0QWN0aXZlUGFnZSA9IGZ1bmN0aW9uKCBwYWdlSW5kZXggKSB7IC8vaW5kaWNhdG9yc1xuICAgICAgICBmb3IgKCB2YXIgaSA9IDAsIGljbCA9IGluZGljYXRvcnNbbGVuZ3RoXTsgaSA8IGljbDsgaSsrICkge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGluZGljYXRvcnNbaV0sYWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kaWNhdG9yc1twYWdlSW5kZXhdKSBhZGRDbGFzcyhpbmRpY2F0b3JzW3BhZ2VJbmRleF0sIGFjdGl2ZSk7XG4gICAgICB9O1xuICBcbiAgXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICB0aGlzLmN5Y2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgXG4gICAgICB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpc0VsZW1lbnRJblNjcm9sbFJhbmdlKCkgJiYgKGluZGV4KyssIHNlbGYuc2xpZGVUbyggaW5kZXggKSApO1xuICAgICAgfSwgdGhpc1tpbnRlcnZhbF0pO1xuICAgIH07XG4gICAgdGhpcy5zbGlkZVRvID0gZnVuY3Rpb24oIG5leHQgKSB7XG4gICAgICBpZiAoaXNTbGlkaW5nKSByZXR1cm47IC8vIHdoZW4gY29udHJvbGVkIHZpYSBtZXRob2RzLCBtYWtlIHN1cmUgdG8gY2hlY2sgYWdhaW4gICAgICBcbiAgICAgIFxuICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSB0aGlzLmdldEFjdGl2ZUluZGV4KCksIC8vIHRoZSBjdXJyZW50IGFjdGl2ZVxuICAgICAgICAgIG9yaWVudGF0aW9uO1xuICAgICAgXG4gICAgICAvLyBmaXJzdCByZXR1cm4gaWYgd2UncmUgb24gdGhlIHNhbWUgaXRlbSAjMjI3XG4gICAgICBpZiAoIGFjdGl2ZUl0ZW0gPT09IG5leHQgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIC8vIG9yIGRldGVybWluZSBzbGlkZURpcmVjdGlvblxuICAgICAgfSBlbHNlIGlmICAoIChhY3RpdmVJdGVtIDwgbmV4dCApIHx8IChhY3RpdmVJdGVtID09PSAwICYmIG5leHQgPT09IHRvdGFsIC0xICkgKSB7XG4gICAgICAgIHNsaWRlRGlyZWN0aW9uID0gc2VsZltkaXJlY3Rpb25dID0gbGVmdDsgLy8gbmV4dFxuICAgICAgfSBlbHNlIGlmICAoIChhY3RpdmVJdGVtID4gbmV4dCkgfHwgKGFjdGl2ZUl0ZW0gPT09IHRvdGFsIC0gMSAmJiBuZXh0ID09PSAwICkgKSB7XG4gICAgICAgIHNsaWRlRGlyZWN0aW9uID0gc2VsZltkaXJlY3Rpb25dID0gcmlnaHQ7IC8vIHByZXZcbiAgICAgIH1cbiAgXG4gICAgICAvLyBmaW5kIHRoZSByaWdodCBuZXh0IGluZGV4IFxuICAgICAgaWYgKCBuZXh0IDwgMCApIHsgbmV4dCA9IHRvdGFsIC0gMTsgfSBcbiAgICAgIGVsc2UgaWYgKCBuZXh0ID49IHRvdGFsICl7IG5leHQgPSAwOyB9XG4gIFxuICAgICAgLy8gdXBkYXRlIGluZGV4XG4gICAgICBpbmRleCA9IG5leHQ7XG4gIFxuICAgICAgb3JpZW50YXRpb24gPSBzbGlkZURpcmVjdGlvbiA9PT0gbGVmdCA/ICduZXh0JyA6ICdwcmV2JzsgLy9kZXRlcm1pbmUgdHlwZVxuICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBzbGlkZUV2ZW50LCBjb21wb25lbnQsIHNsaWRlc1tuZXh0XSk7IC8vIGhlcmUgd2UgZ28gd2l0aCB0aGUgc2xpZGVcbiAgXG4gICAgICBpc1NsaWRpbmcgPSB0cnVlO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgICBzZXRBY3RpdmVQYWdlKCBuZXh0ICk7XG4gIFxuICAgICAgaWYgKCBzdXBwb3J0VHJhbnNpdGlvbnMgJiYgaGFzQ2xhc3MoZWxlbWVudCwnc2xpZGUnKSApIHtcbiAgXG4gICAgICAgIGFkZENsYXNzKHNsaWRlc1tuZXh0XSxjYXJvdXNlbEl0ZW0gKyctJysgb3JpZW50YXRpb24pO1xuICAgICAgICBzbGlkZXNbbmV4dF1bb2Zmc2V0V2lkdGhdO1xuICAgICAgICBhZGRDbGFzcyhzbGlkZXNbbmV4dF0sY2Fyb3VzZWxJdGVtICsnLScrIHNsaWRlRGlyZWN0aW9uKTtcbiAgICAgICAgYWRkQ2xhc3Moc2xpZGVzW2FjdGl2ZUl0ZW1dLGNhcm91c2VsSXRlbSArJy0nKyBzbGlkZURpcmVjdGlvbik7XG4gIFxuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChzbGlkZXNbbmV4dF0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICB2YXIgdGltZW91dCA9IGUgJiYgZVt0YXJnZXRdICE9PSBzbGlkZXNbbmV4dF0gPyBlLmVsYXBzZWRUaW1lKjEwMDArMTAwIDogMjA7XG4gICAgICAgICAgXG4gICAgICAgICAgaXNTbGlkaW5nICYmIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlzU2xpZGluZyA9IGZhbHNlO1xuICBcbiAgICAgICAgICAgIGFkZENsYXNzKHNsaWRlc1tuZXh0XSxhY3RpdmUpO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGVzW2FjdGl2ZUl0ZW1dLGFjdGl2ZSk7XG4gIFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGVzW25leHRdLGNhcm91c2VsSXRlbSArJy0nKyBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzbGlkZXNbbmV4dF0sY2Fyb3VzZWxJdGVtICsnLScrIHNsaWRlRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlc1thY3RpdmVJdGVtXSxjYXJvdXNlbEl0ZW0gKyctJysgc2xpZGVEaXJlY3Rpb24pO1xuICBcbiAgICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2xpZEV2ZW50LCBjb21wb25lbnQsIHNsaWRlc1tuZXh0XSk7XG4gIFxuICAgICAgICAgICAgaWYgKCAhRE9DLmhpZGRlbiAmJiBzZWxmW2ludGVydmFsXSAmJiAhaGFzQ2xhc3MoZWxlbWVudCxwYXVzZWQpICkge1xuICAgICAgICAgICAgICBzZWxmLmN5Y2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIH0pO1xuICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZENsYXNzKHNsaWRlc1tuZXh0XSxhY3RpdmUpO1xuICAgICAgICBzbGlkZXNbbmV4dF1bb2Zmc2V0V2lkdGhdO1xuICAgICAgICByZW1vdmVDbGFzcyhzbGlkZXNbYWN0aXZlSXRlbV0sYWN0aXZlKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoIHNlbGZbaW50ZXJ2YWxdICYmICFoYXNDbGFzcyhlbGVtZW50LHBhdXNlZCkgKSB7XG4gICAgICAgICAgICBzZWxmLmN5Y2xlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2xpZEV2ZW50LCBjb21wb25lbnQsIHNsaWRlc1tuZXh0XSk7XG4gICAgICAgIH0sIDEwMCApO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5nZXRBY3RpdmVJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzbGlkZXNbaW5kZXhPZl0oZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbGVtZW50LGNhcm91c2VsSXRlbSsnIGFjdGl2ZScpWzBdKSB8fCAwO1xuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nQ2Fyb3VzZWwgaW4gZWxlbWVudCApICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICBcbiAgICAgIGlmICggc2VsZltwYXVzZV0gJiYgc2VsZltpbnRlcnZhbF0gKSB7XG4gICAgICAgIG9uKCBlbGVtZW50LCBtb3VzZUhvdmVyWzBdLCBwYXVzZUhhbmRsZXIgKTtcbiAgICAgICAgb24oIGVsZW1lbnQsIG1vdXNlSG92ZXJbMV0sIHJlc3VtZUhhbmRsZXIgKTtcbiAgICAgICAgb24oIGVsZW1lbnQsIHRvdWNoRXZlbnRzLnN0YXJ0LCBwYXVzZUhhbmRsZXIsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgICAgIG9uKCBlbGVtZW50LCB0b3VjaEV2ZW50cy5lbmQsIHJlc3VtZUhhbmRsZXIsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgICB9XG4gICAgXG4gICAgICBzbGlkZXNbbGVuZ3RoXSA+IDEgJiYgb24oIGVsZW1lbnQsIHRvdWNoRXZlbnRzLnN0YXJ0LCB0b3VjaERvd25IYW5kbGVyLCBwYXNzaXZlSGFuZGxlciApO1xuICBcbiAgICAgIHJpZ2h0QXJyb3cgJiYgb24oIHJpZ2h0QXJyb3csIGNsaWNrRXZlbnQsIGNvbnRyb2xzSGFuZGxlciApO1xuICAgICAgbGVmdEFycm93ICYmIG9uKCBsZWZ0QXJyb3csIGNsaWNrRXZlbnQsIGNvbnRyb2xzSGFuZGxlciApO1xuICAgIFxuICAgICAgaW5kaWNhdG9yICYmIG9uKCBpbmRpY2F0b3IsIGNsaWNrRXZlbnQsIGluZGljYXRvckhhbmRsZXIgKTtcbiAgICAgIHNlbGZba2V5Ym9hcmRdICYmIG9uKCBnbG9iYWxPYmplY3QsIGtleWRvd25FdmVudCwga2V5SGFuZGxlciApO1xuICBcbiAgICB9XG4gICAgaWYgKHNlbGYuZ2V0QWN0aXZlSW5kZXgoKTwwKSB7XG4gICAgICBzbGlkZXNbbGVuZ3RoXSAmJiBhZGRDbGFzcyhzbGlkZXNbMF0sYWN0aXZlKTtcbiAgICAgIGluZGljYXRvcnNbbGVuZ3RoXSAmJiBzZXRBY3RpdmVQYWdlKDApO1xuICAgIH1cbiAgXG4gICAgaWYgKCBzZWxmW2ludGVydmFsXSApeyBzZWxmLmN5Y2xlKCk7IH1cbiAgICBlbGVtZW50W3N0cmluZ0Nhcm91c2VsXSA9IHNlbGY7XG4gIH07XG4gIFxuICAvLyBDQVJPVVNFTCBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdDYXJvdXNlbCwgQ2Fyb3VzZWwsICdbJytkYXRhUmlkZSsnPVwiY2Fyb3VzZWxcIl0nIF0gKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBDb2xsYXBzZVxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBDT0xMQVBTRSBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT1cbiAgdmFyIENvbGxhcHNlID0gZnVuY3Rpb24oIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnRcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICBcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcbiAgICAvLyBldmVudCB0YXJnZXRzIGFuZCBjb25zdGFudHNcbiAgICB2YXIgYWNjb3JkaW9uID0gbnVsbCwgY29sbGFwc2UgPSBudWxsLCBzZWxmID0gdGhpcywgXG4gICAgICBhY2NvcmRpb25EYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKCdkYXRhLXBhcmVudCcpLFxuICAgICAgYWN0aXZlQ29sbGFwc2UsIGFjdGl2ZUVsZW1lbnQsXG4gIFxuICAgICAgLy8gY29tcG9uZW50IHN0cmluZ3NcbiAgICAgIGNvbXBvbmVudCA9ICdjb2xsYXBzZScsXG4gICAgICBjb2xsYXBzZWQgPSAnY29sbGFwc2VkJyxcbiAgICAgIGlzQW5pbWF0aW5nID0gJ2lzQW5pbWF0aW5nJyxcbiAgXG4gICAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAgIG9wZW5BY3Rpb24gPSBmdW5jdGlvbihjb2xsYXBzZUVsZW1lbnQsdG9nZ2xlKSB7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoY29sbGFwc2VFbGVtZW50LCBzaG93RXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudFtpc0FuaW1hdGluZ10gPSB0cnVlO1xuICAgICAgICBhZGRDbGFzcyhjb2xsYXBzZUVsZW1lbnQsY29sbGFwc2luZyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGNvbGxhcHNlRWxlbWVudCxjb21wb25lbnQpO1xuICAgICAgICBjb2xsYXBzZUVsZW1lbnRbc3R5bGVdW2hlaWdodF0gPSBjb2xsYXBzZUVsZW1lbnRbc2Nyb2xsSGVpZ2h0XSArICdweCc7XG4gICAgICAgIFxuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChjb2xsYXBzZUVsZW1lbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbGxhcHNlRWxlbWVudFtpc0FuaW1hdGluZ10gPSBmYWxzZTtcbiAgICAgICAgICBjb2xsYXBzZUVsZW1lbnRbc2V0QXR0cmlidXRlXShhcmlhRXhwYW5kZWQsJ3RydWUnKTtcbiAgICAgICAgICB0b2dnbGVbc2V0QXR0cmlidXRlXShhcmlhRXhwYW5kZWQsJ3RydWUnKTtcbiAgICAgICAgICByZW1vdmVDbGFzcyhjb2xsYXBzZUVsZW1lbnQsY29sbGFwc2luZyk7XG4gICAgICAgICAgYWRkQ2xhc3MoY29sbGFwc2VFbGVtZW50LCBjb21wb25lbnQpO1xuICAgICAgICAgIGFkZENsYXNzKGNvbGxhcHNlRWxlbWVudCxzaG93Q2xhc3MpO1xuICAgICAgICAgIGNvbGxhcHNlRWxlbWVudFtzdHlsZV1baGVpZ2h0XSA9ICcnO1xuICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoY29sbGFwc2VFbGVtZW50LCBzaG93bkV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBjbG9zZUFjdGlvbiA9IGZ1bmN0aW9uKGNvbGxhcHNlRWxlbWVudCx0b2dnbGUpIHtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChjb2xsYXBzZUVsZW1lbnQsIGhpZGVFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50W2lzQW5pbWF0aW5nXSA9IHRydWU7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudFtzdHlsZV1baGVpZ2h0XSA9IGNvbGxhcHNlRWxlbWVudFtzY3JvbGxIZWlnaHRdICsgJ3B4JzsgLy8gc2V0IGhlaWdodCBmaXJzdFxuICAgICAgICByZW1vdmVDbGFzcyhjb2xsYXBzZUVsZW1lbnQsY29tcG9uZW50KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoY29sbGFwc2VFbGVtZW50LHNob3dDbGFzcyk7XG4gICAgICAgIGFkZENsYXNzKGNvbGxhcHNlRWxlbWVudCxjb2xsYXBzaW5nKTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50W29mZnNldFdpZHRoXTsgLy8gZm9yY2UgcmVmbG93IHRvIGVuYWJsZSB0cmFuc2l0aW9uXG4gICAgICAgIGNvbGxhcHNlRWxlbWVudFtzdHlsZV1baGVpZ2h0XSA9ICcwcHgnO1xuICAgICAgICBcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoY29sbGFwc2VFbGVtZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb2xsYXBzZUVsZW1lbnRbaXNBbmltYXRpbmddID0gZmFsc2U7XG4gICAgICAgICAgY29sbGFwc2VFbGVtZW50W3NldEF0dHJpYnV0ZV0oYXJpYUV4cGFuZGVkLCdmYWxzZScpO1xuICAgICAgICAgIHRvZ2dsZVtzZXRBdHRyaWJ1dGVdKGFyaWFFeHBhbmRlZCwnZmFsc2UnKTtcbiAgICAgICAgICByZW1vdmVDbGFzcyhjb2xsYXBzZUVsZW1lbnQsY29sbGFwc2luZyk7XG4gICAgICAgICAgYWRkQ2xhc3MoY29sbGFwc2VFbGVtZW50LGNvbXBvbmVudCk7XG4gICAgICAgICAgY29sbGFwc2VFbGVtZW50W3N0eWxlXVtoZWlnaHRdID0gJyc7XG4gICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChjb2xsYXBzZUVsZW1lbnQsIGhpZGRlbkV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBnZXRUYXJnZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhyZWYgPSBlbGVtZW50LmhyZWYgJiYgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKCdocmVmJyksXG4gICAgICAgICAgcGFyZW50ID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUYXJnZXQpLFxuICAgICAgICAgIGlkID0gaHJlZiB8fCAoIHBhcmVudCAmJiBwYXJlbnQuY2hhckF0KDApID09PSAnIycgKSAmJiBwYXJlbnQ7XG4gICAgICAgIHJldHVybiBpZCAmJiBxdWVyeUVsZW1lbnQoaWQpO1xuICAgICAgfTtcbiAgICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24oZSkge1xuICAgICAgZVtwcmV2ZW50RGVmYXVsdF0oKTtcbiAgICAgIGlmICghaGFzQ2xhc3MoY29sbGFwc2Usc2hvd0NsYXNzKSkgeyBzZWxmLnNob3coKTsgfSBcbiAgICAgIGVsc2UgeyBzZWxmLmhpZGUoKTsgfVxuICAgIH07XG4gICAgdGhpcy5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIGNvbGxhcHNlW2lzQW5pbWF0aW5nXSApIHJldHVybjsgICAgXG4gICAgICBjbG9zZUFjdGlvbihjb2xsYXBzZSxlbGVtZW50KTtcbiAgICAgIGFkZENsYXNzKGVsZW1lbnQsY29sbGFwc2VkKTtcbiAgICB9O1xuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCBhY2NvcmRpb24gKSB7XG4gICAgICAgIGFjdGl2ZUNvbGxhcHNlID0gcXVlcnlFbGVtZW50KCcuJytjb21wb25lbnQrJy4nK3Nob3dDbGFzcyxhY2NvcmRpb24pO1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlQ29sbGFwc2UgJiYgKHF1ZXJ5RWxlbWVudCgnWycrZGF0YVRhcmdldCsnPVwiIycrYWN0aXZlQ29sbGFwc2UuaWQrJ1wiXScsYWNjb3JkaW9uKVxuICAgICAgICAgICAgICAgICAgICAgIHx8IHF1ZXJ5RWxlbWVudCgnW2hyZWY9XCIjJythY3RpdmVDb2xsYXBzZS5pZCsnXCJdJyxhY2NvcmRpb24pICk7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKCAhY29sbGFwc2VbaXNBbmltYXRpbmddIHx8IGFjdGl2ZUNvbGxhcHNlICYmICFhY3RpdmVDb2xsYXBzZVtpc0FuaW1hdGluZ10gKSB7XG4gICAgICAgIGlmICggYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVDb2xsYXBzZSAhPT0gY29sbGFwc2UgKSB7XG4gICAgICAgICAgY2xvc2VBY3Rpb24oYWN0aXZlQ29sbGFwc2UsYWN0aXZlRWxlbWVudCk7IFxuICAgICAgICAgIGFkZENsYXNzKGFjdGl2ZUVsZW1lbnQsY29sbGFwc2VkKTtcbiAgICAgICAgfVxuICAgICAgICBvcGVuQWN0aW9uKGNvbGxhcHNlLGVsZW1lbnQpO1xuICAgICAgICByZW1vdmVDbGFzcyhlbGVtZW50LGNvbGxhcHNlZCk7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdDb2xsYXBzZSBpbiBlbGVtZW50ICkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICBvbihlbGVtZW50LCBjbGlja0V2ZW50LCBzZWxmLnRvZ2dsZSk7XG4gICAgfVxuICAgIGNvbGxhcHNlID0gZ2V0VGFyZ2V0KCk7XG4gICAgY29sbGFwc2VbaXNBbmltYXRpbmddID0gZmFsc2U7ICAvLyB3aGVuIHRydWUgaXQgd2lsbCBwcmV2ZW50IGNsaWNrIGhhbmRsZXJzICBcbiAgICBhY2NvcmRpb24gPSBxdWVyeUVsZW1lbnQob3B0aW9ucy5wYXJlbnQpIHx8IGFjY29yZGlvbkRhdGEgJiYgZ2V0Q2xvc2VzdChlbGVtZW50LCBhY2NvcmRpb25EYXRhKTtcbiAgICBlbGVtZW50W3N0cmluZ0NvbGxhcHNlXSA9IHNlbGY7XG4gIH07XG4gIFxuICAvLyBDT0xMQVBTRSBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdDb2xsYXBzZSwgQ29sbGFwc2UsICdbJytkYXRhVG9nZ2xlKyc9XCJjb2xsYXBzZVwiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IERyb3Bkb3duXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gRFJPUERPV04gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09XG4gIHZhciBEcm9wZG93biA9IGZ1bmN0aW9uKCBlbGVtZW50LCBvcHRpb24gKSB7XG4gICAgICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gc2V0IG9wdGlvblxuICAgIHRoaXMucGVyc2lzdCA9IG9wdGlvbiA9PT0gdHJ1ZSB8fCBlbGVtZW50W2dldEF0dHJpYnV0ZV0oJ2RhdGEtcGVyc2lzdCcpID09PSAndHJ1ZScgfHwgZmFsc2U7XG4gIFxuICAgIC8vIGNvbnN0YW50cywgZXZlbnQgdGFyZ2V0cywgc3RyaW5nc1xuICAgIHZhciBzZWxmID0gdGhpcywgY2hpbGRyZW4gPSAnY2hpbGRyZW4nLFxuICAgICAgcGFyZW50ID0gZWxlbWVudFtwYXJlbnROb2RlXSxcbiAgICAgIGNvbXBvbmVudCA9ICdkcm9wZG93bicsIG9wZW4gPSAnb3BlbicsXG4gICAgICByZWxhdGVkVGFyZ2V0ID0gbnVsbCxcbiAgICAgIG1lbnUgPSBxdWVyeUVsZW1lbnQoJy5kcm9wZG93bi1tZW51JywgcGFyZW50KSxcbiAgICAgIG1lbnVJdGVtcyA9IChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgc2V0ID0gbWVudVtjaGlsZHJlbl0sIG5ld1NldCA9IFtdO1xuICAgICAgICBmb3IgKCB2YXIgaT0wOyBpPHNldFtsZW5ndGhdOyBpKysgKXtcbiAgICAgICAgICBzZXRbaV1bY2hpbGRyZW5dW2xlbmd0aF0gJiYgKHNldFtpXVtjaGlsZHJlbl1bMF0udGFnTmFtZSA9PT0gJ0EnICYmIG5ld1NldFtwdXNoXShzZXRbaV1bY2hpbGRyZW5dWzBdKSk7XG4gICAgICAgICAgc2V0W2ldLnRhZ05hbWUgPT09ICdBJyAmJiBuZXdTZXRbcHVzaF0oc2V0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3U2V0O1xuICAgICAgfSkoKSxcbiAgXG4gICAgICAvLyBwcmV2ZW50RGVmYXVsdCBvbiBlbXB0eSBhbmNob3IgbGlua3NcbiAgICAgIHByZXZlbnRFbXB0eUFuY2hvciA9IGZ1bmN0aW9uKGFuY2hvcil7XG4gICAgICAgIChhbmNob3IuaHJlZiAmJiBhbmNob3IuaHJlZi5zbGljZSgtMSkgPT09ICcjJyB8fCBhbmNob3JbcGFyZW50Tm9kZV0gJiYgYW5jaG9yW3BhcmVudE5vZGVdLmhyZWYgXG4gICAgICAgICAgJiYgYW5jaG9yW3BhcmVudE5vZGVdLmhyZWYuc2xpY2UoLTEpID09PSAnIycpICYmIHRoaXNbcHJldmVudERlZmF1bHRdKCk7ICAgIFxuICAgICAgfSxcbiAgXG4gICAgICAvLyB0b2dnbGUgZGlzbWlzc2libGUgZXZlbnRzXG4gICAgICB0b2dnbGVEaXNtaXNzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHR5cGUgPSBlbGVtZW50W29wZW5dID8gb24gOiBvZmY7XG4gICAgICAgIHR5cGUoRE9DLCBjbGlja0V2ZW50LCBkaXNtaXNzSGFuZGxlcik7IFxuICAgICAgICB0eXBlKERPQywga2V5ZG93bkV2ZW50LCBwcmV2ZW50U2Nyb2xsKTtcbiAgICAgICAgdHlwZShET0MsIGtleXVwRXZlbnQsIGtleUhhbmRsZXIpO1xuICAgICAgICB0eXBlKERPQywgZm9jdXNFdmVudCwgZGlzbWlzc0hhbmRsZXIsIHRydWUpO1xuICAgICAgfSxcbiAgXG4gICAgICAvLyBoYW5kbGVyc1xuICAgICAgZGlzbWlzc0hhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGVbdGFyZ2V0XSwgaGFzRGF0YSA9IGV2ZW50VGFyZ2V0ICYmIChldmVudFRhcmdldFtnZXRBdHRyaWJ1dGVdKGRhdGFUb2dnbGUpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRUYXJnZXRbcGFyZW50Tm9kZV0gJiYgZ2V0QXR0cmlidXRlIGluIGV2ZW50VGFyZ2V0W3BhcmVudE5vZGVdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZXZlbnRUYXJnZXRbcGFyZW50Tm9kZV1bZ2V0QXR0cmlidXRlXShkYXRhVG9nZ2xlKSk7XG4gICAgICAgIGlmICggZS50eXBlID09PSBmb2N1c0V2ZW50ICYmIChldmVudFRhcmdldCA9PT0gZWxlbWVudCB8fCBldmVudFRhcmdldCA9PT0gbWVudSB8fCBtZW51W2NvbnRhaW5zXShldmVudFRhcmdldCkgKSApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAoZXZlbnRUYXJnZXQgPT09IG1lbnUgfHwgbWVudVtjb250YWluc10oZXZlbnRUYXJnZXQpKSAmJiAoc2VsZi5wZXJzaXN0IHx8IGhhc0RhdGEpICkgeyByZXR1cm47IH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldCA9IGV2ZW50VGFyZ2V0ID09PSBlbGVtZW50IHx8IGVsZW1lbnRbY29udGFpbnNdKGV2ZW50VGFyZ2V0KSA/IGVsZW1lbnQgOiBudWxsO1xuICAgICAgICAgIGhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2ZW50RW1wdHlBbmNob3IuY2FsbChlLGV2ZW50VGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgICBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQgPSBlbGVtZW50O1xuICAgICAgICBzaG93KCk7XG4gICAgICAgIHByZXZlbnRFbXB0eUFuY2hvci5jYWxsKGUsZVt0YXJnZXRdKTtcbiAgICAgIH0sXG4gICAgICBwcmV2ZW50U2Nyb2xsID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcbiAgICAgICAgaWYoIGtleSA9PT0gMzggfHwga2V5ID09PSA0MCApIHsgZVtwcmV2ZW50RGVmYXVsdF0oKTsgfVxuICAgICAgfSxcbiAgICAgIGtleUhhbmRsZXIgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIGtleSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlLFxuICAgICAgICAgIGFjdGl2ZUl0ZW0gPSBET0MuYWN0aXZlRWxlbWVudCxcbiAgICAgICAgICBpZHggPSBtZW51SXRlbXNbaW5kZXhPZl0oYWN0aXZlSXRlbSksXG4gICAgICAgICAgaXNTYW1lRWxlbWVudCA9IGFjdGl2ZUl0ZW0gPT09IGVsZW1lbnQsXG4gICAgICAgICAgaXNJbnNpZGVNZW51ID0gbWVudVtjb250YWluc10oYWN0aXZlSXRlbSksXG4gICAgICAgICAgaXNNZW51SXRlbSA9IGFjdGl2ZUl0ZW1bcGFyZW50Tm9kZV0gPT09IG1lbnUgfHwgYWN0aXZlSXRlbVtwYXJlbnROb2RlXVtwYXJlbnROb2RlXSA9PT0gbWVudTsgICAgICAgICAgXG4gIFxuICAgICAgICBpZiAoIGlzTWVudUl0ZW0gKSB7IC8vIG5hdmlnYXRlIHVwIHwgZG93blxuICAgICAgICAgIGlkeCA9IGlzU2FtZUVsZW1lbnQgPyAwIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBrZXkgPT09IDM4ID8gKGlkeD4xP2lkeC0xOjApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGtleSA9PT0gNDAgPyAoaWR4PG1lbnVJdGVtc1tsZW5ndGhdLTE/aWR4KzE6aWR4KSA6IGlkeDtcbiAgICAgICAgICBtZW51SXRlbXNbaWR4XSAmJiBzZXRGb2N1cyhtZW51SXRlbXNbaWR4XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAobWVudUl0ZW1zW2xlbmd0aF0gJiYgaXNNZW51SXRlbSAvLyBtZW51IGhhcyBpdGVtc1xuICAgICAgICAgICAgICB8fCAhbWVudUl0ZW1zW2xlbmd0aF0gJiYgKGlzSW5zaWRlTWVudSB8fCBpc1NhbWVFbGVtZW50KSAgLy8gbWVudSBtaWdodCBiZSBhIGZvcm1cbiAgICAgICAgICAgICAgfHwgIWlzSW5zaWRlTWVudSApIC8vIG9yIHRoZSBmb2N1c2VkIGVsZW1lbnQgaXMgbm90IGluIHRoZSBtZW51IGF0IGFsbFxuICAgICAgICAgICAgICAmJiBlbGVtZW50W29wZW5dICYmIGtleSA9PT0gMjcgIC8vIG1lbnUgbXVzdCBiZSBvcGVuXG4gICAgICAgICkge1xuICAgICAgICAgIHNlbGYudG9nZ2xlKCk7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gIFxuICAgICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgICBzaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwocGFyZW50LCBzaG93RXZlbnQsIGNvbXBvbmVudCwgcmVsYXRlZFRhcmdldCk7XG4gICAgICAgIGFkZENsYXNzKG1lbnUsc2hvd0NsYXNzKTtcbiAgICAgICAgYWRkQ2xhc3MocGFyZW50LHNob3dDbGFzcyk7XG4gICAgICAgIGVsZW1lbnRbc2V0QXR0cmlidXRlXShhcmlhRXhwYW5kZWQsdHJ1ZSk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwocGFyZW50LCBzaG93bkV2ZW50LCBjb21wb25lbnQsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICBlbGVtZW50W29wZW5dID0gdHJ1ZTtcbiAgICAgICAgb2ZmKGVsZW1lbnQsIGNsaWNrRXZlbnQsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICBzZXRGb2N1cyggbWVudVtnZXRFbGVtZW50c0J5VGFnTmFtZV0oJ0lOUFVUJylbMF0gfHwgZWxlbWVudCApOyAvLyBmb2N1cyB0aGUgZmlyc3QgaW5wdXQgaXRlbSB8IGVsZW1lbnRcbiAgICAgICAgICB0b2dnbGVEaXNtaXNzKCk7XG4gICAgICAgIH0sMSk7XG4gICAgICB9LFxuICAgICAgaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKHBhcmVudCwgaGlkZUV2ZW50LCBjb21wb25lbnQsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICByZW1vdmVDbGFzcyhtZW51LHNob3dDbGFzcyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKHBhcmVudCxzaG93Q2xhc3MpO1xuICAgICAgICBlbGVtZW50W3NldEF0dHJpYnV0ZV0oYXJpYUV4cGFuZGVkLGZhbHNlKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChwYXJlbnQsIGhpZGRlbkV2ZW50LCBjb21wb25lbnQsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICBlbGVtZW50W29wZW5dID0gZmFsc2U7XG4gICAgICAgIHRvZ2dsZURpc21pc3MoKTtcbiAgICAgICAgc2V0Rm9jdXMoZWxlbWVudCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgb24oZWxlbWVudCwgY2xpY2tFdmVudCwgY2xpY2tIYW5kbGVyKTsgfSwxKTtcbiAgICAgIH07XG4gIFxuICAgIC8vIHNldCBpbml0aWFsIHN0YXRlIHRvIGNsb3NlZFxuICAgIGVsZW1lbnRbb3Blbl0gPSBmYWxzZTtcbiAgXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICB0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGhhc0NsYXNzKHBhcmVudCxzaG93Q2xhc3MpICYmIGVsZW1lbnRbb3Blbl0pIHsgaGlkZSgpOyB9IFxuICAgICAgZWxzZSB7IHNob3coKTsgfVxuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nRHJvcGRvd24gaW4gZWxlbWVudCkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICAhdGFiaW5kZXggaW4gbWVudSAmJiBtZW51W3NldEF0dHJpYnV0ZV0odGFiaW5kZXgsICcwJyk7IC8vIEZpeCBvbmJsdXIgb24gQ2hyb21lIHwgU2FmYXJpXG4gICAgICBvbihlbGVtZW50LCBjbGlja0V2ZW50LCBjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgXG4gICAgZWxlbWVudFtzdHJpbmdEcm9wZG93bl0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gRFJPUERPV04gREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFtzdHJpbmdEcm9wZG93biwgRHJvcGRvd24sICdbJytkYXRhVG9nZ2xlKyc9XCJkcm9wZG93blwiXSddICk7XG4gIFxuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgTW9kYWxcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBNT0RBTCBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PVxuICB2YXIgTW9kYWwgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7IC8vIGVsZW1lbnQgY2FuIGJlIHRoZSBtb2RhbC90cmlnZ2VyaW5nIGJ1dHRvblxuICBcbiAgICAvLyB0aGUgbW9kYWwgKGJvdGggSmF2YVNjcmlwdCAvIERBVEEgQVBJIGluaXQpIC8gdHJpZ2dlcmluZyBidXR0b24gZWxlbWVudCAoREFUQSBBUEkpXG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgICAvLyBzdHJpbmdzXG4gICAgICB2YXIgY29tcG9uZW50ID0gJ21vZGFsJyxcbiAgICAgICAgc3RhdGljU3RyaW5nID0gJ3N0YXRpYycsXG4gICAgICAgIG1vZGFsVHJpZ2dlciA9ICdtb2RhbFRyaWdnZXInLFxuICAgICAgICBwYWRkaW5nUmlnaHQgPSAncGFkZGluZ1JpZ2h0JyxcbiAgICAgICAgbW9kYWxCYWNrZHJvcFN0cmluZyA9ICdtb2RhbC1iYWNrZHJvcCcsXG4gICAgICAgIGlzQW5pbWF0aW5nID0gJ2lzQW5pbWF0aW5nJyxcbiAgICAgICAgLy8gZGV0ZXJtaW5lIG1vZGFsLCB0cmlnZ2VyaW5nIGVsZW1lbnRcbiAgICAgICAgYnRuQ2hlY2sgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRhcmdldCl8fGVsZW1lbnRbZ2V0QXR0cmlidXRlXSgnaHJlZicpLFxuICAgICAgICBjaGVja01vZGFsID0gcXVlcnlFbGVtZW50KCBidG5DaGVjayApLFxuICAgICAgICBtb2RhbCA9IGhhc0NsYXNzKGVsZW1lbnQsY29tcG9uZW50KSA/IGVsZW1lbnQgOiBjaGVja01vZGFsO1xuICBcbiAgICAgIGlmICggaGFzQ2xhc3MoZWxlbWVudCwgY29tcG9uZW50KSApIHsgZWxlbWVudCA9IG51bGw7IH0gLy8gbW9kYWwgaXMgbm93IGluZGVwZW5kZW50IG9mIGl0J3MgdHJpZ2dlcmluZyBlbGVtZW50XG4gIFxuICAgIGlmICggIW1vZGFsICkgeyByZXR1cm47IH0gLy8gaW52YWxpZGF0ZVxuICBcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcbiAgICB0aGlzW2tleWJvYXJkXSA9IG9wdGlvbnNba2V5Ym9hcmRdID09PSBmYWxzZSB8fCBtb2RhbFtnZXRBdHRyaWJ1dGVdKGRhdGFLZXlib2FyZCkgPT09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XG4gICAgdGhpc1tiYWNrZHJvcF0gPSBvcHRpb25zW2JhY2tkcm9wXSA9PT0gc3RhdGljU3RyaW5nIHx8IG1vZGFsW2dldEF0dHJpYnV0ZV0oZGF0YWJhY2tkcm9wKSA9PT0gc3RhdGljU3RyaW5nID8gc3RhdGljU3RyaW5nIDogdHJ1ZTtcbiAgICB0aGlzW2JhY2tkcm9wXSA9IG9wdGlvbnNbYmFja2Ryb3BdID09PSBmYWxzZSB8fCBtb2RhbFtnZXRBdHRyaWJ1dGVdKGRhdGFiYWNrZHJvcCkgPT09ICdmYWxzZScgPyBmYWxzZSA6IHRoaXNbYmFja2Ryb3BdO1xuICAgIHRoaXNbYW5pbWF0aW9uXSA9IGhhc0NsYXNzKG1vZGFsLCAnZmFkZScpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXNbY29udGVudF0gID0gb3B0aW9uc1tjb250ZW50XTsgLy8gSmF2YVNjcmlwdCBvbmx5XG4gIFxuICAgIC8vIHNldCBhbiBpbml0aWFsIHN0YXRlIG9mIHRoZSBtb2RhbFxuICAgIG1vZGFsW2lzQW5pbWF0aW5nXSA9IGZhbHNlO1xuICAgIFxuICAgIC8vIGJpbmQsIGNvbnN0YW50cywgZXZlbnQgdGFyZ2V0cyBhbmQgb3RoZXIgdmFyc1xuICAgIHZhciBzZWxmID0gdGhpcywgcmVsYXRlZFRhcmdldCA9IG51bGwsXG4gICAgICBib2R5SXNPdmVyZmxvd2luZywgc2Nyb2xsQmFyV2lkdGgsIG92ZXJsYXksIG92ZXJsYXlEZWxheSwgbW9kYWxUaW1lcixcbiAgXG4gICAgICAvLyBhbHNvIGZpbmQgZml4ZWQtdG9wIC8gZml4ZWQtYm90dG9tIGl0ZW1zXG4gICAgICBmaXhlZEl0ZW1zID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShIVE1MLGZpeGVkVG9wKS5jb25jYXQoZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShIVE1MLGZpeGVkQm90dG9tKSksXG4gIFxuICAgICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgICBnZXRXaW5kb3dXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbFJlY3QgPSBIVE1MW2dldEJvdW5kaW5nQ2xpZW50UmVjdF0oKTtcbiAgICAgICAgcmV0dXJuIGdsb2JhbE9iamVjdFtpbm5lcldpZHRoXSB8fCAoaHRtbFJlY3RbcmlnaHRdIC0gTWF0aC5hYnMoaHRtbFJlY3RbbGVmdF0pKTtcbiAgICAgIH0sXG4gICAgICBzZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBib2R5U3R5bGUgPSBnbG9iYWxPYmplY3RbZ2V0Q29tcHV0ZWRTdHlsZV0oRE9DW2JvZHldKSxcbiAgICAgICAgICAgIGJvZHlQYWQgPSBwYXJzZUludCgoYm9keVN0eWxlW3BhZGRpbmdSaWdodF0pLCAxMCksIGl0ZW1QYWQ7XG4gICAgICAgIGlmIChib2R5SXNPdmVyZmxvd2luZykge1xuICAgICAgICAgIERPQ1tib2R5XVtzdHlsZV1bcGFkZGluZ1JpZ2h0XSA9IChib2R5UGFkICsgc2Nyb2xsQmFyV2lkdGgpICsgJ3B4JztcbiAgICAgICAgICBtb2RhbFtzdHlsZV1bcGFkZGluZ1JpZ2h0XSA9IHNjcm9sbEJhcldpZHRoKydweCc7XG4gICAgICAgICAgaWYgKGZpeGVkSXRlbXNbbGVuZ3RoXSl7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpeGVkSXRlbXNbbGVuZ3RoXTsgaSsrKSB7XG4gICAgICAgICAgICAgIGl0ZW1QYWQgPSBnbG9iYWxPYmplY3RbZ2V0Q29tcHV0ZWRTdHlsZV0oZml4ZWRJdGVtc1tpXSlbcGFkZGluZ1JpZ2h0XTtcbiAgICAgICAgICAgICAgZml4ZWRJdGVtc1tpXVtzdHlsZV1bcGFkZGluZ1JpZ2h0XSA9ICggcGFyc2VJbnQoaXRlbVBhZCkgKyBzY3JvbGxCYXJXaWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBET0NbYm9keV1bc3R5bGVdW3BhZGRpbmdSaWdodF0gPSAnJztcbiAgICAgICAgbW9kYWxbc3R5bGVdW3BhZGRpbmdSaWdodF0gPSAnJztcbiAgICAgICAgaWYgKGZpeGVkSXRlbXNbbGVuZ3RoXSl7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaXhlZEl0ZW1zW2xlbmd0aF07IGkrKykge1xuICAgICAgICAgICAgZml4ZWRJdGVtc1tpXVtzdHlsZV1bcGFkZGluZ1JpZ2h0XSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7IC8vIHRoeCB3YWxzaFxuICAgICAgICB2YXIgc2Nyb2xsRGl2ID0gRE9DW2NyZWF0ZUVsZW1lbnRdKCdkaXYnKSwgd2lkdGhWYWx1ZTtcbiAgICAgICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IGNvbXBvbmVudCsnLXNjcm9sbGJhci1tZWFzdXJlJzsgLy8gdGhpcyBpcyBoZXJlIHRvIHN0YXlcbiAgICAgICAgRE9DW2JvZHldW2FwcGVuZENoaWxkXShzY3JvbGxEaXYpO1xuICAgICAgICB3aWR0aFZhbHVlID0gc2Nyb2xsRGl2W29mZnNldFdpZHRoXSAtIHNjcm9sbERpdltjbGllbnRXaWR0aF07XG4gICAgICAgIERPQ1tib2R5XS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgICByZXR1cm4gd2lkdGhWYWx1ZTtcbiAgICAgIH0sXG4gICAgICBjaGVja1Njcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYm9keUlzT3ZlcmZsb3dpbmcgPSBET0NbYm9keV1bY2xpZW50V2lkdGhdIDwgZ2V0V2luZG93V2lkdGgoKTtcbiAgICAgICAgc2Nyb2xsQmFyV2lkdGggPSBtZWFzdXJlU2Nyb2xsYmFyKCk7XG4gICAgICB9LFxuICAgICAgY3JlYXRlT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV3T3ZlcmxheSA9IERPQ1tjcmVhdGVFbGVtZW50XSgnZGl2Jyk7XG4gICAgICAgIG92ZXJsYXkgPSBxdWVyeUVsZW1lbnQoJy4nK21vZGFsQmFja2Ryb3BTdHJpbmcpO1xuICBcbiAgICAgICAgaWYgKCBvdmVybGF5ID09PSBudWxsICkge1xuICAgICAgICAgIG5ld092ZXJsYXlbc2V0QXR0cmlidXRlXSgnY2xhc3MnLCBtb2RhbEJhY2tkcm9wU3RyaW5nICsgKHNlbGZbYW5pbWF0aW9uXSA/ICcgZmFkZScgOiAnJykpO1xuICAgICAgICAgIG92ZXJsYXkgPSBuZXdPdmVybGF5O1xuICAgICAgICAgIERPQ1tib2R5XVthcHBlbmRDaGlsZF0ob3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kYWxPdmVybGF5ID0gMTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVPdmVybGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG92ZXJsYXkgPSBxdWVyeUVsZW1lbnQoJy4nK21vZGFsQmFja2Ryb3BTdHJpbmcpO1xuICAgICAgICBpZiAoIG92ZXJsYXkgJiYgb3ZlcmxheSAhPT0gbnVsbCAmJiB0eXBlb2Ygb3ZlcmxheSA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgbW9kYWxPdmVybGF5ID0gMDtcbiAgICAgICAgICBET0NbYm9keV0ucmVtb3ZlQ2hpbGQob3ZlcmxheSk7IG92ZXJsYXkgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gdHJpZ2dlcnNcbiAgICAgIHRyaWdnZXJTaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldEZvY3VzKG1vZGFsKTtcbiAgICAgICAgbW9kYWxbaXNBbmltYXRpbmddID0gZmFsc2U7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwobW9kYWwsIHNob3duRXZlbnQsIGNvbXBvbmVudCwgcmVsYXRlZFRhcmdldCk7XG4gIFxuICAgICAgICBvbihnbG9iYWxPYmplY3QsIHJlc2l6ZUV2ZW50LCBzZWxmLnVwZGF0ZSwgcGFzc2l2ZUhhbmRsZXIpO1xuICAgICAgICBvbihtb2RhbCwgY2xpY2tFdmVudCwgZGlzbWlzc0hhbmRsZXIpO1xuICAgICAgICBvbihET0MsIGtleWRvd25FdmVudCwga2V5SGFuZGxlcik7ICAgICAgXG4gICAgICB9LFxuICAgICAgdHJpZ2dlckhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWxbc3R5bGVdLmRpc3BsYXkgPSAnJztcbiAgICAgICAgZWxlbWVudCAmJiAoc2V0Rm9jdXMoZWxlbWVudCkpO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKG1vZGFsLCBoaWRkZW5FdmVudCwgY29tcG9uZW50KTtcbiAgXG4gICAgICAgIChmdW5jdGlvbigpe1xuICAgICAgICAgIGlmICghZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShET0MsY29tcG9uZW50KycgJytzaG93Q2xhc3MpWzBdKSB7XG4gICAgICAgICAgICByZXNldFNjcm9sbGJhcigpO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoRE9DW2JvZHldLGNvbXBvbmVudCsnLW9wZW4nKTtcbiAgICAgICAgICAgIG92ZXJsYXkgJiYgaGFzQ2xhc3Mob3ZlcmxheSwnZmFkZScpID8gKHJlbW92ZUNsYXNzKG92ZXJsYXksc2hvd0NsYXNzKSwgZW11bGF0ZVRyYW5zaXRpb25FbmQob3ZlcmxheSxyZW1vdmVPdmVybGF5KSlcbiAgICAgICAgICAgIDogcmVtb3ZlT3ZlcmxheSgpO1xuICBcbiAgICAgICAgICAgIG9mZihnbG9iYWxPYmplY3QsIHJlc2l6ZUV2ZW50LCBzZWxmLnVwZGF0ZSwgcGFzc2l2ZUhhbmRsZXIpO1xuICAgICAgICAgICAgb2ZmKG1vZGFsLCBjbGlja0V2ZW50LCBkaXNtaXNzSGFuZGxlcik7XG4gICAgICAgICAgICBvZmYoRE9DLCBrZXlkb3duRXZlbnQsIGtleUhhbmRsZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSgpKTtcbiAgICAgICAgbW9kYWxbaXNBbmltYXRpbmddID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgLy8gaGFuZGxlcnNcbiAgICAgIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCBtb2RhbFtpc0FuaW1hdGluZ10gKSByZXR1cm47XG4gIFxuICAgICAgICB2YXIgY2xpY2tUYXJnZXQgPSBlW3RhcmdldF07XG4gICAgICAgIGNsaWNrVGFyZ2V0ID0gY2xpY2tUYXJnZXRbaGFzQXR0cmlidXRlXShkYXRhVGFyZ2V0KSB8fCBjbGlja1RhcmdldFtoYXNBdHRyaWJ1dGVdKCdocmVmJykgPyBjbGlja1RhcmdldCA6IGNsaWNrVGFyZ2V0W3BhcmVudE5vZGVdO1xuICAgICAgICBpZiAoIGNsaWNrVGFyZ2V0ID09PSBlbGVtZW50ICYmICFoYXNDbGFzcyhtb2RhbCxzaG93Q2xhc3MpICkge1xuICAgICAgICAgIG1vZGFsW21vZGFsVHJpZ2dlcl0gPSBlbGVtZW50O1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQgPSBlbGVtZW50O1xuICAgICAgICAgIHNlbGYuc2hvdygpO1xuICAgICAgICAgIGVbcHJldmVudERlZmF1bHRdKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBrZXlIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIG1vZGFsW2lzQW5pbWF0aW5nXSApIHJldHVybjtcbiAgXG4gICAgICAgIGlmIChzZWxmW2tleWJvYXJkXSAmJiBlLndoaWNoID09IDI3ICYmIGhhc0NsYXNzKG1vZGFsLHNob3dDbGFzcykgKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNtaXNzSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCBtb2RhbFtpc0FuaW1hdGluZ10gKSByZXR1cm47XG4gICAgICAgIHZhciBjbGlja1RhcmdldCA9IGVbdGFyZ2V0XTtcbiAgXG4gICAgICAgIGlmICggaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSAmJiAoIGNsaWNrVGFyZ2V0W3BhcmVudE5vZGVdW2dldEF0dHJpYnV0ZV0oZGF0YURpc21pc3MpID09PSBjb21wb25lbnRcbiAgICAgICAgICAgIHx8IGNsaWNrVGFyZ2V0W2dldEF0dHJpYnV0ZV0oZGF0YURpc21pc3MpID09PSBjb21wb25lbnRcbiAgICAgICAgICAgIHx8IGNsaWNrVGFyZ2V0ID09PSBtb2RhbCAmJiBzZWxmW2JhY2tkcm9wXSAhPT0gc3RhdGljU3RyaW5nICkgKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKCk7IHJlbGF0ZWRUYXJnZXQgPSBudWxsO1xuICAgICAgICAgIGVbcHJldmVudERlZmF1bHRdKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSApIHt0aGlzLmhpZGUoKTt9IGVsc2Uge3RoaXMuc2hvdygpO31cbiAgICB9O1xuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCBoYXNDbGFzcyhtb2RhbCxzaG93Q2xhc3MpIHx8IG1vZGFsW2lzQW5pbWF0aW5nXSApIHtyZXR1cm59XG4gIFxuICAgICAgY2xlYXJUaW1lb3V0KG1vZGFsVGltZXIpO1xuICAgICAgbW9kYWxUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgbW9kYWxbaXNBbmltYXRpbmddID0gdHJ1ZTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChtb2RhbCwgc2hvd0V2ZW50LCBjb21wb25lbnQsIHJlbGF0ZWRUYXJnZXQpO1xuICBcbiAgICAgICAgLy8gd2UgZWxlZ2FudGx5IGhpZGUgYW55IG9wZW5lZCBtb2RhbFxuICAgICAgICB2YXIgY3VycmVudE9wZW4gPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKERPQyxjb21wb25lbnQrJyAnK3Nob3dDbGFzcylbMF07XG4gICAgICAgIGlmIChjdXJyZW50T3BlbiAmJiBjdXJyZW50T3BlbiAhPT0gbW9kYWwpIHtcbiAgICAgICAgICBtb2RhbFRyaWdnZXIgaW4gY3VycmVudE9wZW4gJiYgY3VycmVudE9wZW5bbW9kYWxUcmlnZ2VyXVtzdHJpbmdNb2RhbF0uaGlkZSgpO1xuICAgICAgICAgIHN0cmluZ01vZGFsIGluIGN1cnJlbnRPcGVuICYmIGN1cnJlbnRPcGVuW3N0cmluZ01vZGFsXS5oaWRlKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmICggc2VsZltiYWNrZHJvcF0gKSB7XG4gICAgICAgICAgIW1vZGFsT3ZlcmxheSAmJiAhb3ZlcmxheSAmJiBjcmVhdGVPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmICggb3ZlcmxheSAmJiAhaGFzQ2xhc3Mob3ZlcmxheSxzaG93Q2xhc3MpICkge1xuICAgICAgICAgIG92ZXJsYXlbb2Zmc2V0V2lkdGhdOyAvLyBmb3JjZSByZWZsb3cgdG8gZW5hYmxlIHRyYXNpdGlvblxuICAgICAgICAgIG92ZXJsYXlEZWxheSA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KG92ZXJsYXkpO1xuICAgICAgICAgIGFkZENsYXNzKG92ZXJsYXksIHNob3dDbGFzcyk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG1vZGFsW3N0eWxlXS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgXG4gICAgICAgICAgY2hlY2tTY3JvbGxiYXIoKTtcbiAgICAgICAgICBzZXRTY3JvbGxiYXIoKTtcbiAgXG4gICAgICAgICAgYWRkQ2xhc3MoRE9DW2JvZHldLGNvbXBvbmVudCsnLW9wZW4nKTtcbiAgICAgICAgICBhZGRDbGFzcyhtb2RhbCxzaG93Q2xhc3MpO1xuICAgICAgICAgIG1vZGFsW3NldEF0dHJpYnV0ZV0oYXJpYUhpZGRlbiwgZmFsc2UpO1xuICBcbiAgICAgICAgICBoYXNDbGFzcyhtb2RhbCwnZmFkZScpID8gZW11bGF0ZVRyYW5zaXRpb25FbmQobW9kYWwsIHRyaWdnZXJTaG93KSA6IHRyaWdnZXJTaG93KCk7XG4gICAgICAgIH0sIHN1cHBvcnRUcmFuc2l0aW9ucyAmJiBvdmVybGF5ICYmIG92ZXJsYXlEZWxheSA/IG92ZXJsYXlEZWxheSA6IDEpO1xuICAgICAgfSwxKTtcbiAgICB9O1xuICAgIHRoaXMuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCBtb2RhbFtpc0FuaW1hdGluZ10gfHwgIWhhc0NsYXNzKG1vZGFsLHNob3dDbGFzcykgKSB7cmV0dXJufVxuICBcbiAgICAgIGNsZWFyVGltZW91dChtb2RhbFRpbWVyKTtcbiAgICAgIG1vZGFsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIG1vZGFsW2lzQW5pbWF0aW5nXSA9IHRydWU7ICAgIFxuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKG1vZGFsLCBoaWRlRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIG92ZXJsYXkgPSBxdWVyeUVsZW1lbnQoJy4nK21vZGFsQmFja2Ryb3BTdHJpbmcpO1xuICAgICAgICBvdmVybGF5RGVsYXkgPSBvdmVybGF5ICYmIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KG92ZXJsYXkpO1xuICBcbiAgICAgICAgcmVtb3ZlQ2xhc3MobW9kYWwsc2hvd0NsYXNzKTtcbiAgICAgICAgbW9kYWxbc2V0QXR0cmlidXRlXShhcmlhSGlkZGVuLCB0cnVlKTtcbiAgXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICBoYXNDbGFzcyhtb2RhbCwnZmFkZScpID8gZW11bGF0ZVRyYW5zaXRpb25FbmQobW9kYWwsIHRyaWdnZXJIaWRlKSA6IHRyaWdnZXJIaWRlKCk7XG4gICAgICAgIH0sIHN1cHBvcnRUcmFuc2l0aW9ucyAmJiBvdmVybGF5ICYmIG92ZXJsYXlEZWxheSA/IG92ZXJsYXlEZWxheSA6IDIpO1xuICAgICAgfSwyKVxuICAgIH07XG4gICAgdGhpcy5zZXRDb250ZW50ID0gZnVuY3Rpb24oIGNvbnRlbnQgKSB7XG4gICAgICBxdWVyeUVsZW1lbnQoJy4nK2NvbXBvbmVudCsnLWNvbnRlbnQnLG1vZGFsKVtpbm5lckhUTUxdID0gY29udGVudDtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSkge1xuICAgICAgICBjaGVja1Njcm9sbGJhcigpO1xuICAgICAgICBzZXRTY3JvbGxiYXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgb3ZlciBhbmQgb3ZlclxuICAgIC8vIG1vZGFsIGlzIGluZGVwZW5kZW50IG9mIGEgdHJpZ2dlcmluZyBlbGVtZW50XG4gICAgaWYgKCAhIWVsZW1lbnQgJiYgIShzdHJpbmdNb2RhbCBpbiBlbGVtZW50KSApIHtcbiAgICAgIG9uKGVsZW1lbnQsIGNsaWNrRXZlbnQsIGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICAgIGlmICggISFzZWxmW2NvbnRlbnRdICkgeyBzZWxmLnNldENvbnRlbnQoIHNlbGZbY29udGVudF0gKTsgfVxuICAgIGlmIChlbGVtZW50KSB7IGVsZW1lbnRbc3RyaW5nTW9kYWxdID0gc2VsZjsgbW9kYWxbbW9kYWxUcmlnZ2VyXSA9IGVsZW1lbnQ7IH1cbiAgICBlbHNlIHsgbW9kYWxbc3RyaW5nTW9kYWxdID0gc2VsZjsgfVxuICB9O1xuICBcbiAgLy8gREFUQSBBUElcbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nTW9kYWwsIE1vZGFsLCAnWycrZGF0YVRvZ2dsZSsnPVwibW9kYWxcIl0nIF0gKTtcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IFBvcG92ZXJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBQT1BPVkVSIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09XG4gIHZhciBQb3BvdmVyID0gZnVuY3Rpb24oIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnRcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICBcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcbiAgICAvLyBEQVRBIEFQSVxuICAgIHZhciB0cmlnZ2VyRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhVHJpZ2dlciksIC8vIGNsaWNrIC8gaG92ZXIgLyBmb2N1c1xuICAgICAgICBhbmltYXRpb25EYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFBbmltYXRpb24pLCAvLyB0cnVlIC8gZmFsc2VcbiAgICAgICAgcGxhY2VtZW50RGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhUGxhY2VtZW50KSxcbiAgICAgICAgZGlzbWlzc2libGVEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFEaXNtaXNzaWJsZSksXG4gICAgICAgIGRlbGF5RGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhRGVsYXkpLFxuICAgICAgICBjb250YWluZXJEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFDb250YWluZXIpLFxuICBcbiAgICAgICAgLy8gaW50ZXJuYWwgc3RyaW5nc1xuICAgICAgICBjb21wb25lbnQgPSAncG9wb3ZlcicsXG4gICAgICAgIHRlbXBsYXRlID0gJ3RlbXBsYXRlJyxcbiAgICAgICAgdHJpZ2dlciA9ICd0cmlnZ2VyJyxcbiAgICAgICAgY2xhc3NTdHJpbmcgPSAnY2xhc3MnLFxuICAgICAgICBkaXYgPSAnZGl2JyxcbiAgICAgICAgZmFkZSA9ICdmYWRlJyxcbiAgICAgICAgZGF0YUNvbnRlbnQgPSAnZGF0YS1jb250ZW50JyxcbiAgICAgICAgZGlzbWlzc2libGUgPSAnZGlzbWlzc2libGUnLFxuICAgICAgICBjbG9zZUJ0biA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCI+w5c8L2J1dHRvbj4nLFxuICBcbiAgICAgICAgLy8gY2hlY2sgY29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQgPSBxdWVyeUVsZW1lbnQob3B0aW9uc1tjb250YWluZXJdKSxcbiAgICAgICAgY29udGFpbmVyRGF0YUVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoY29udGFpbmVyRGF0YSksICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gbWF5YmUgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIGEgbW9kYWxcbiAgICAgICAgbW9kYWwgPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy5tb2RhbCcpLFxuICAgICAgICBcbiAgICAgICAgLy8gbWF5YmUgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIGEgZml4ZWQgbmF2YmFyXG4gICAgICAgIG5hdmJhckZpeGVkVG9wID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcuJytmaXhlZFRvcCksXG4gICAgICAgIG5hdmJhckZpeGVkQm90dG9tID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcuJytmaXhlZEJvdHRvbSk7XG4gIFxuICAgIC8vIHNldCBpbnN0YW5jZSBvcHRpb25zXG4gICAgdGhpc1t0ZW1wbGF0ZV0gPSBvcHRpb25zW3RlbXBsYXRlXSA/IG9wdGlvbnNbdGVtcGxhdGVdIDogbnVsbDsgLy8gSmF2YVNjcmlwdCBvbmx5XG4gICAgdGhpc1t0cmlnZ2VyXSA9IG9wdGlvbnNbdHJpZ2dlcl0gPyBvcHRpb25zW3RyaWdnZXJdIDogdHJpZ2dlckRhdGEgfHwgaG92ZXJFdmVudDtcbiAgICB0aGlzW2FuaW1hdGlvbl0gPSBvcHRpb25zW2FuaW1hdGlvbl0gJiYgb3B0aW9uc1thbmltYXRpb25dICE9PSBmYWRlID8gb3B0aW9uc1thbmltYXRpb25dIDogYW5pbWF0aW9uRGF0YSB8fCBmYWRlO1xuICAgIHRoaXNbcGxhY2VtZW50XSA9IG9wdGlvbnNbcGxhY2VtZW50XSA/IG9wdGlvbnNbcGxhY2VtZW50XSA6IHBsYWNlbWVudERhdGEgfHwgdG9wO1xuICAgIHRoaXNbZGVsYXldID0gcGFyc2VJbnQob3B0aW9uc1tkZWxheV0gfHwgZGVsYXlEYXRhKSB8fCAyMDA7XG4gICAgdGhpc1tkaXNtaXNzaWJsZV0gPSBvcHRpb25zW2Rpc21pc3NpYmxlXSB8fCBkaXNtaXNzaWJsZURhdGEgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzW2NvbnRhaW5lcl0gPSBjb250YWluZXJFbGVtZW50ID8gY29udGFpbmVyRWxlbWVudCBcbiAgICAgICAgICAgICAgICAgICAgOiBjb250YWluZXJEYXRhRWxlbWVudCA/IGNvbnRhaW5lckRhdGFFbGVtZW50IFxuICAgICAgICAgICAgICAgICAgICA6IG5hdmJhckZpeGVkVG9wID8gbmF2YmFyRml4ZWRUb3BcbiAgICAgICAgICAgICAgICAgICAgOiBuYXZiYXJGaXhlZEJvdHRvbSA/IG5hdmJhckZpeGVkQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIDogbW9kYWwgPyBtb2RhbCA6IERPQ1tib2R5XTtcbiAgICBcbiAgICAvLyBiaW5kLCBjb250ZW50XG4gICAgdmFyIHNlbGYgPSB0aGlzLCBcbiAgICAgICAgdGl0bGVTdHJpbmcgPSBvcHRpb25zLnRpdGxlIHx8IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhVGl0bGUpIHx8IG51bGwsXG4gICAgICAgIGNvbnRlbnRTdHJpbmcgPSBvcHRpb25zLmNvbnRlbnQgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFDb250ZW50KSB8fCBudWxsO1xuICBcbiAgICBpZiAoICFjb250ZW50U3RyaW5nICYmICF0aGlzW3RlbXBsYXRlXSApIHJldHVybjsgLy8gaW52YWxpZGF0ZVxuICBcbiAgICAvLyBjb25zdGFudHMsIHZhcnNcbiAgICB2YXIgcG9wb3ZlciA9IG51bGwsIHRpbWVyID0gMCwgcGxhY2VtZW50U2V0dGluZyA9IHRoaXNbcGxhY2VtZW50XSxcbiAgICAgIFxuICAgICAgLy8gaGFuZGxlcnNcbiAgICAgIGRpc21pc3NpYmxlSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKHBvcG92ZXIgIT09IG51bGwgJiYgZVt0YXJnZXRdID09PSBxdWVyeUVsZW1lbnQoJy5jbG9zZScscG9wb3ZlcikpIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgXG4gICAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAgIHJlbW92ZVBvcG92ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZltjb250YWluZXJdLnJlbW92ZUNoaWxkKHBvcG92ZXIpO1xuICAgICAgICB0aW1lciA9IG51bGw7IHBvcG92ZXIgPSBudWxsOyBcbiAgICAgIH0sXG4gICAgICBjcmVhdGVQb3BvdmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpdGxlU3RyaW5nID0gb3B0aW9ucy50aXRsZSB8fCBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRpdGxlKTtcbiAgICAgICAgY29udGVudFN0cmluZyA9IG9wdGlvbnMuY29udGVudCB8fCBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUNvbnRlbnQpO1xuICAgICAgICAvLyBmaXhpbmcgaHR0cHM6Ly9naXRodWIuY29tL3RoZWRucC9ib290c3RyYXAubmF0aXZlL2lzc3Vlcy8yMzNcbiAgICAgICAgY29udGVudFN0cmluZyA9ICEhY29udGVudFN0cmluZyA/IGNvbnRlbnRTdHJpbmcudHJpbSgpIDogbnVsbDtcbiAgXG4gICAgICAgIHBvcG92ZXIgPSBET0NbY3JlYXRlRWxlbWVudF0oZGl2KTtcbiAgXG4gICAgICAgIC8vIHBvcG92ZXIgYXJyb3dcbiAgICAgICAgdmFyIHBvcG92ZXJBcnJvdyA9IERPQ1tjcmVhdGVFbGVtZW50XShkaXYpO1xuICAgICAgICBwb3BvdmVyQXJyb3dbc2V0QXR0cmlidXRlXShjbGFzc1N0cmluZywnYXJyb3cnKTtcbiAgICAgICAgcG9wb3ZlclthcHBlbmRDaGlsZF0ocG9wb3ZlckFycm93KTtcbiAgXG4gICAgICAgIGlmICggY29udGVudFN0cmluZyAhPT0gbnVsbCAmJiBzZWxmW3RlbXBsYXRlXSA9PT0gbnVsbCApIHsgLy9jcmVhdGUgdGhlIHBvcG92ZXIgZnJvbSBkYXRhIGF0dHJpYnV0ZXNcbiAgXG4gICAgICAgICAgcG9wb3ZlcltzZXRBdHRyaWJ1dGVdKCdyb2xlJywndG9vbHRpcCcpOyAgICAgXG4gIFxuICAgICAgICAgIGlmICh0aXRsZVN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHBvcG92ZXJUaXRsZSA9IERPQ1tjcmVhdGVFbGVtZW50XSgnaDMnKTtcbiAgICAgICAgICAgIHBvcG92ZXJUaXRsZVtzZXRBdHRyaWJ1dGVdKGNsYXNzU3RyaW5nLGNvbXBvbmVudCsnLWhlYWRlcicpO1xuICBcbiAgICAgICAgICAgIHBvcG92ZXJUaXRsZVtpbm5lckhUTUxdID0gc2VsZltkaXNtaXNzaWJsZV0gPyB0aXRsZVN0cmluZyArIGNsb3NlQnRuIDogdGl0bGVTdHJpbmc7XG4gICAgICAgICAgICBwb3BvdmVyW2FwcGVuZENoaWxkXShwb3BvdmVyVGl0bGUpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgLy9zZXQgcG9wb3ZlciBjb250ZW50XG4gICAgICAgICAgdmFyIHBvcG92ZXJDb250ZW50ID0gRE9DW2NyZWF0ZUVsZW1lbnRdKGRpdik7XG4gICAgICAgICAgcG9wb3ZlckNvbnRlbnRbc2V0QXR0cmlidXRlXShjbGFzc1N0cmluZyxjb21wb25lbnQrJy1ib2R5Jyk7XG4gICAgICAgICAgcG9wb3ZlckNvbnRlbnRbaW5uZXJIVE1MXSA9IHNlbGZbZGlzbWlzc2libGVdICYmIHRpdGxlU3RyaW5nID09PSBudWxsID8gY29udGVudFN0cmluZyArIGNsb3NlQnRuIDogY29udGVudFN0cmluZztcbiAgICAgICAgICBwb3BvdmVyW2FwcGVuZENoaWxkXShwb3BvdmVyQ29udGVudCk7XG4gIFxuICAgICAgICB9IGVsc2UgeyAgLy8gb3IgY3JlYXRlIHRoZSBwb3BvdmVyIGZyb20gdGVtcGxhdGVcbiAgICAgICAgICB2YXIgcG9wb3ZlclRlbXBsYXRlID0gRE9DW2NyZWF0ZUVsZW1lbnRdKGRpdik7XG4gICAgICAgICAgc2VsZlt0ZW1wbGF0ZV0gPSBzZWxmW3RlbXBsYXRlXS50cmltKCk7XG4gICAgICAgICAgcG9wb3ZlclRlbXBsYXRlW2lubmVySFRNTF0gPSBzZWxmW3RlbXBsYXRlXTtcbiAgICAgICAgICBwb3BvdmVyW2lubmVySFRNTF0gPSBwb3BvdmVyVGVtcGxhdGUuZmlyc3RDaGlsZFtpbm5lckhUTUxdO1xuICAgICAgICB9XG4gIFxuICAgICAgICAvL2FwcGVuZCB0byB0aGUgY29udGFpbmVyXG4gICAgICAgIHNlbGZbY29udGFpbmVyXVthcHBlbmRDaGlsZF0ocG9wb3Zlcik7XG4gICAgICAgIHBvcG92ZXJbc3R5bGVdLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBwb3BvdmVyW3NldEF0dHJpYnV0ZV0oY2xhc3NTdHJpbmcsIGNvbXBvbmVudCsgJyBicy0nICsgY29tcG9uZW50KyctJytwbGFjZW1lbnRTZXR0aW5nICsgJyAnICsgc2VsZlthbmltYXRpb25dKTtcbiAgICAgIH0sXG4gICAgICBzaG93UG9wb3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIWhhc0NsYXNzKHBvcG92ZXIsc2hvd0NsYXNzKSAmJiAoIGFkZENsYXNzKHBvcG92ZXIsc2hvd0NsYXNzKSApO1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZVBvcG92ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3R5bGVUaXAoZWxlbWVudCwgcG9wb3ZlciwgcGxhY2VtZW50U2V0dGluZywgc2VsZltjb250YWluZXJdKTtcbiAgICAgIH0sXG4gIFxuICAgICAgLy8gZXZlbnQgdG9nZ2xlXG4gICAgICBkaXNtaXNzSGFuZGxlclRvZ2dsZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICAgICAgICBpZiAoY2xpY2tFdmVudCA9PSBzZWxmW3RyaWdnZXJdIHx8ICdmb2N1cycgPT0gc2VsZlt0cmlnZ2VyXSkge1xuICAgICAgICAgICFzZWxmW2Rpc21pc3NpYmxlXSAmJiB0eXBlKCBlbGVtZW50LCAnYmx1cicsIHNlbGYuaGlkZSApO1xuICAgICAgICB9XG4gICAgICAgIHNlbGZbZGlzbWlzc2libGVdICYmIHR5cGUoIERPQywgY2xpY2tFdmVudCwgZGlzbWlzc2libGVIYW5kbGVyICk7ICAgICBcbiAgICAgICAgdHlwZSggZ2xvYmFsT2JqZWN0LCByZXNpemVFdmVudCwgc2VsZi5oaWRlLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgfSxcbiAgXG4gICAgICAvLyB0cmlnZ2Vyc1xuICAgICAgc2hvd1RyaWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZGlzbWlzc0hhbmRsZXJUb2dnbGUob24pO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNob3duRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICB9LFxuICAgICAgaGlkZVRyaWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZGlzbWlzc0hhbmRsZXJUb2dnbGUob2ZmKTtcbiAgICAgICAgcmVtb3ZlUG9wb3ZlcigpO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIGhpZGRlbkV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgfTtcbiAgXG4gICAgLy8gcHVibGljIG1ldGhvZHMgLyBoYW5kbGVyc1xuICAgIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocG9wb3ZlciA9PT0gbnVsbCkgeyBzZWxmLnNob3coKTsgfSBcbiAgICAgIGVsc2UgeyBzZWxmLmhpZGUoKTsgfVxuICAgIH07XG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHBvcG92ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICBwbGFjZW1lbnRTZXR0aW5nID0gc2VsZltwbGFjZW1lbnRdOyAvLyB3ZSByZXNldCBwbGFjZW1lbnQgaW4gYWxsIGNhc2VzXG4gICAgICAgICAgY3JlYXRlUG9wb3ZlcigpO1xuICAgICAgICAgIHVwZGF0ZVBvcG92ZXIoKTtcbiAgICAgICAgICBzaG93UG9wb3ZlcigpO1xuICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2hvd0V2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICAgICEhc2VsZlthbmltYXRpb25dID8gZW11bGF0ZVRyYW5zaXRpb25FbmQocG9wb3Zlciwgc2hvd1RyaWdnZXIpIDogc2hvd1RyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMjAgKTtcbiAgICB9O1xuICAgIHRoaXMuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChwb3BvdmVyICYmIHBvcG92ZXIgIT09IG51bGwgJiYgaGFzQ2xhc3MocG9wb3ZlcixzaG93Q2xhc3MpKSB7XG4gICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBoaWRlRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MocG9wb3ZlcixzaG93Q2xhc3MpO1xuICAgICAgICAgICEhc2VsZlthbmltYXRpb25dID8gZW11bGF0ZVRyYW5zaXRpb25FbmQocG9wb3ZlciwgaGlkZVRyaWdnZXIpIDogaGlkZVRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSwgc2VsZltkZWxheV0gKTtcbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKHN0cmluZ1BvcG92ZXIgaW4gZWxlbWVudCkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICBpZiAoc2VsZlt0cmlnZ2VyXSA9PT0gaG92ZXJFdmVudCkge1xuICAgICAgICBvbiggZWxlbWVudCwgbW91c2VIb3ZlclswXSwgc2VsZi5zaG93ICk7XG4gICAgICAgIGlmICghc2VsZltkaXNtaXNzaWJsZV0pIHsgb24oIGVsZW1lbnQsIG1vdXNlSG92ZXJbMV0sIHNlbGYuaGlkZSApOyB9XG4gICAgICB9IGVsc2UgaWYgKGNsaWNrRXZlbnQgPT0gc2VsZlt0cmlnZ2VyXSB8fCAnZm9jdXMnID09IHNlbGZbdHJpZ2dlcl0pIHtcbiAgICAgICAgb24oIGVsZW1lbnQsIHNlbGZbdHJpZ2dlcl0sIHNlbGYudG9nZ2xlICk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRbc3RyaW5nUG9wb3Zlcl0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gUE9QT1ZFUiBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ1BvcG92ZXIsIFBvcG92ZXIsICdbJytkYXRhVG9nZ2xlKyc9XCJwb3BvdmVyXCJdJyBdICk7XG4gIFxuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgU2Nyb2xsU3B5XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIFNDUk9MTFNQWSBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09XG4gIHZhciBTY3JvbGxTcHkgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG4gIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnQsIHRoZSBlbGVtZW50IHdlIHNweSBvblxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7IFxuICBcbiAgICAvLyBEQVRBIEFQSVxuICAgIHZhciB0YXJnZXREYXRhID0gcXVlcnlFbGVtZW50KGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhVGFyZ2V0KSksXG4gICAgICAgIG9mZnNldERhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oJ2RhdGEtb2Zmc2V0Jyk7XG4gIFxuICAgIC8vIHNldCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFxuICAgIC8vIGludmFsaWRhdGVcbiAgICBpZiAoICFvcHRpb25zW3RhcmdldF0gJiYgIXRhcmdldERhdGEgKSB7IHJldHVybjsgfSBcbiAgXG4gICAgLy8gZXZlbnQgdGFyZ2V0cywgY29uc3RhbnRzXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBzcHlUYXJnZXQgPSBvcHRpb25zW3RhcmdldF0gJiYgcXVlcnlFbGVtZW50KG9wdGlvbnNbdGFyZ2V0XSkgfHwgdGFyZ2V0RGF0YSxcbiAgICAgICAgbGlua3MgPSBzcHlUYXJnZXQgJiYgc3B5VGFyZ2V0W2dldEVsZW1lbnRzQnlUYWdOYW1lXSgnQScpLFxuICAgICAgICBvZmZzZXQgPSBwYXJzZUludChvcHRpb25zWydvZmZzZXQnXSB8fCBvZmZzZXREYXRhKSB8fCAxMCwgICAgICBcbiAgICAgICAgaXRlbXMgPSBbXSwgdGFyZ2V0SXRlbXMgPSBbXSwgc2Nyb2xsT2Zmc2V0LFxuICAgICAgICBzY3JvbGxUYXJnZXQgPSBlbGVtZW50W29mZnNldEhlaWdodF0gPCBlbGVtZW50W3Njcm9sbEhlaWdodF0gPyBlbGVtZW50IDogZ2xvYmFsT2JqZWN0LCAvLyBkZXRlcm1pbmUgd2hpY2ggaXMgdGhlIHJlYWwgc2Nyb2xsVGFyZ2V0XG4gICAgICAgIGlzV2luZG93ID0gc2Nyb2xsVGFyZ2V0ID09PSBnbG9iYWxPYmplY3Q7ICBcbiAgXG4gICAgLy8gcG9wdWxhdGUgaXRlbXMgYW5kIHRhcmdldHNcbiAgICBmb3IgKHZhciBpPTAsIGlsPWxpbmtzW2xlbmd0aF07IGk8aWw7IGkrKykge1xuICAgICAgdmFyIGhyZWYgPSBsaW5rc1tpXVtnZXRBdHRyaWJ1dGVdKCdocmVmJyksIFxuICAgICAgICAgIHRhcmdldEl0ZW0gPSBocmVmICYmIGhyZWYuY2hhckF0KDApID09PSAnIycgJiYgaHJlZi5zbGljZSgtMSkgIT09ICcjJyAmJiBxdWVyeUVsZW1lbnQoaHJlZik7XG4gICAgICBpZiAoICEhdGFyZ2V0SXRlbSApIHtcbiAgICAgICAgaXRlbXNbcHVzaF0obGlua3NbaV0pO1xuICAgICAgICB0YXJnZXRJdGVtc1twdXNoXSh0YXJnZXRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHZhciB1cGRhdGVJdGVtID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpbmRleF0sXG4gICAgICAgICAgdGFyZ2V0SXRlbSA9IHRhcmdldEl0ZW1zW2luZGV4XSwgLy8gdGhlIG1lbnUgaXRlbSB0YXJnZXRzIHRoaXMgZWxlbWVudFxuICAgICAgICAgIGRyb3Bkb3duID0gaXRlbVtwYXJlbnROb2RlXVtwYXJlbnROb2RlXSxcbiAgICAgICAgICBkcm9wZG93bkxpbmsgPSBoYXNDbGFzcyhkcm9wZG93biwnZHJvcGRvd24nKSAmJiBkcm9wZG93bltnZXRFbGVtZW50c0J5VGFnTmFtZV0oJ0EnKVswXSxcbiAgICAgICAgICB0YXJnZXRSZWN0ID0gaXNXaW5kb3cgJiYgdGFyZ2V0SXRlbVtnZXRCb3VuZGluZ0NsaWVudFJlY3RdKCksXG4gIFxuICAgICAgICAgIGlzQWN0aXZlID0gaGFzQ2xhc3MoaXRlbSxhY3RpdmUpIHx8IGZhbHNlLFxuICBcbiAgICAgICAgICB0b3BFZGdlID0gKGlzV2luZG93ID8gdGFyZ2V0UmVjdFt0b3BdICsgc2Nyb2xsT2Zmc2V0IDogdGFyZ2V0SXRlbVtvZmZzZXRUb3BdKSAtIG9mZnNldCxcbiAgICAgICAgICBib3R0b21FZGdlID0gaXNXaW5kb3cgPyB0YXJnZXRSZWN0W2JvdHRvbV0gKyBzY3JvbGxPZmZzZXQgLSBvZmZzZXQgOiB0YXJnZXRJdGVtc1tpbmRleCsxXSA/IHRhcmdldEl0ZW1zW2luZGV4KzFdW29mZnNldFRvcF0gLSBvZmZzZXQgOiBlbGVtZW50W3Njcm9sbEhlaWdodF0sXG4gIFxuICAgICAgICAgIGluc2lkZSA9IHNjcm9sbE9mZnNldCA+PSB0b3BFZGdlICYmIGJvdHRvbUVkZ2UgPiBzY3JvbGxPZmZzZXQ7XG4gIFxuICAgICAgICBpZiAoICFpc0FjdGl2ZSAmJiBpbnNpZGUgKSB7XG4gICAgICAgICAgaWYgKCAhaGFzQ2xhc3MoaXRlbSxhY3RpdmUpICkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoaXRlbSxhY3RpdmUpO1xuICAgICAgICAgICAgaWYgKGRyb3Bkb3duTGluayAmJiAhaGFzQ2xhc3MoZHJvcGRvd25MaW5rLGFjdGl2ZSkgKSB7XG4gICAgICAgICAgICAgIGFkZENsYXNzKGRyb3Bkb3duTGluayxhY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCAnYWN0aXZhdGUnLCAnc2Nyb2xsc3B5JywgaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoICFpbnNpZGUgKSB7XG4gICAgICAgICAgaWYgKCBoYXNDbGFzcyhpdGVtLGFjdGl2ZSkgKSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhpdGVtLGFjdGl2ZSk7XG4gICAgICAgICAgICBpZiAoZHJvcGRvd25MaW5rICYmIGhhc0NsYXNzKGRyb3Bkb3duTGluayxhY3RpdmUpICYmICFnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGl0ZW1bcGFyZW50Tm9kZV0sYWN0aXZlKS5sZW5ndGggICkge1xuICAgICAgICAgICAgICByZW1vdmVDbGFzcyhkcm9wZG93bkxpbmssYWN0aXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoICFpbnNpZGUgJiYgIWlzQWN0aXZlIHx8IGlzQWN0aXZlICYmIGluc2lkZSApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGVJdGVtcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHNjcm9sbE9mZnNldCA9IGlzV2luZG93ID8gZ2V0U2Nyb2xsKCkueSA6IGVsZW1lbnRbc2Nyb2xsVG9wXTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXg9MCwgaXRsPWl0ZW1zW2xlbmd0aF07IGluZGV4PGl0bDsgaW5kZXgrKykge1xuICAgICAgICAgIHVwZGF0ZUl0ZW0oaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH07XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RcbiAgICB0aGlzLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICB1cGRhdGVJdGVtcygpO1xuICAgIH1cbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdTY3JvbGxTcHkgaW4gZWxlbWVudCkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICBvbiggc2Nyb2xsVGFyZ2V0LCBzY3JvbGxFdmVudCwgc2VsZi5yZWZyZXNoLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgb24oIGdsb2JhbE9iamVjdCwgcmVzaXplRXZlbnQsIHNlbGYucmVmcmVzaCwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICB9XG4gICAgc2VsZi5yZWZyZXNoKCk7XG4gICAgZWxlbWVudFtzdHJpbmdTY3JvbGxTcHldID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIFNDUk9MTFNQWSBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nU2Nyb2xsU3B5LCBTY3JvbGxTcHksICdbJytkYXRhU3B5Kyc9XCJzY3JvbGxcIl0nIF0gKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBUYWJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gVEFCIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT1cbiAgdmFyIFRhYiA9IGZ1bmN0aW9uKCBlbGVtZW50LCBvcHRpb25zICkge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gREFUQSBBUElcbiAgICB2YXIgaGVpZ2h0RGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhSGVpZ2h0KSxcbiAgICAgIFxuICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgIGNvbXBvbmVudCA9ICd0YWInLCBoZWlnaHQgPSAnaGVpZ2h0JywgZmxvYXQgPSAnZmxvYXQnLCBpc0FuaW1hdGluZyA9ICdpc0FuaW1hdGluZyc7XG4gICAgICAgIFxuICAgIC8vIHNldCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpc1toZWlnaHRdID0gc3VwcG9ydFRyYW5zaXRpb25zID8gKG9wdGlvbnNbaGVpZ2h0XSB8fCBoZWlnaHREYXRhID09PSAndHJ1ZScpIDogZmFsc2U7XG4gIFxuICAgIC8vIGJpbmQsIGV2ZW50IHRhcmdldHNcbiAgICB2YXIgc2VsZiA9IHRoaXMsIG5leHQsXG4gICAgICB0YWJzID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcubmF2JyksXG4gICAgICB0YWJzQ29udGVudENvbnRhaW5lciA9IGZhbHNlLFxuICAgICAgZHJvcGRvd24gPSB0YWJzICYmIHF1ZXJ5RWxlbWVudCgnLmRyb3Bkb3duLXRvZ2dsZScsdGFicyksXG4gICAgICBhY3RpdmVUYWIsIGFjdGl2ZUNvbnRlbnQsIG5leHRDb250ZW50LCBjb250YWluZXJIZWlnaHQsIGVxdWFsQ29udGVudHMsIG5leHRIZWlnaHQsXG4gICAgICBcbiAgICAgIC8vIHRyaWdnZXJcbiAgICAgIHRyaWdnZXJFbmQgPSBmdW5jdGlvbigpe1xuICAgICAgICB0YWJzQ29udGVudENvbnRhaW5lcltzdHlsZV1baGVpZ2h0XSA9ICcnO1xuICAgICAgICByZW1vdmVDbGFzcyh0YWJzQ29udGVudENvbnRhaW5lcixjb2xsYXBzaW5nKTtcbiAgICAgICAgdGFic1tpc0FuaW1hdGluZ10gPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB0cmlnZ2VyU2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGFic0NvbnRlbnRDb250YWluZXIpIHsgLy8gaGVpZ2h0IGFuaW1hdGlvblxuICAgICAgICAgIGlmICggZXF1YWxDb250ZW50cyApIHtcbiAgICAgICAgICAgIHRyaWdnZXJFbmQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyAvLyBlbmFibGVzIGhlaWdodCBhbmltYXRpb25cbiAgICAgICAgICAgICAgdGFic0NvbnRlbnRDb250YWluZXJbc3R5bGVdW2hlaWdodF0gPSBuZXh0SGVpZ2h0ICsgJ3B4JzsgLy8gaGVpZ2h0IGFuaW1hdGlvblxuICAgICAgICAgICAgICB0YWJzQ29udGVudENvbnRhaW5lcltvZmZzZXRXaWR0aF07XG4gICAgICAgICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRhYnNDb250ZW50Q29udGFpbmVyLCB0cmlnZ2VyRW5kKTtcbiAgICAgICAgICAgIH0sNTApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWJzW2lzQW5pbWF0aW5nXSA9IGZhbHNlOyBcbiAgICAgICAgfVxuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKG5leHQsIHNob3duRXZlbnQsIGNvbXBvbmVudCwgYWN0aXZlVGFiKTtcbiAgICAgIH0sXG4gICAgICB0cmlnZ2VySGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGFic0NvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgICBhY3RpdmVDb250ZW50W3N0eWxlXVtmbG9hdF0gPSBsZWZ0O1xuICAgICAgICAgIG5leHRDb250ZW50W3N0eWxlXVtmbG9hdF0gPSBsZWZ0OyAgICAgICAgXG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0ID0gYWN0aXZlQ29udGVudFtzY3JvbGxIZWlnaHRdO1xuICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIGFkZENsYXNzKG5leHRDb250ZW50LGFjdGl2ZSk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwobmV4dCwgc2hvd0V2ZW50LCBjb21wb25lbnQsIGFjdGl2ZVRhYik7XG4gIFxuICAgICAgICByZW1vdmVDbGFzcyhhY3RpdmVDb250ZW50LGFjdGl2ZSk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoYWN0aXZlVGFiLCBoaWRkZW5FdmVudCwgY29tcG9uZW50LCBuZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0YWJzQ29udGVudENvbnRhaW5lcikge1xuICAgICAgICAgIG5leHRIZWlnaHQgPSBuZXh0Q29udGVudFtzY3JvbGxIZWlnaHRdO1xuICAgICAgICAgIGVxdWFsQ29udGVudHMgPSBuZXh0SGVpZ2h0ID09PSBjb250YWluZXJIZWlnaHQ7XG4gICAgICAgICAgYWRkQ2xhc3ModGFic0NvbnRlbnRDb250YWluZXIsY29sbGFwc2luZyk7XG4gICAgICAgICAgdGFic0NvbnRlbnRDb250YWluZXJbc3R5bGVdW2hlaWdodF0gPSBjb250YWluZXJIZWlnaHQgKyAncHgnOyAvLyBoZWlnaHQgYW5pbWF0aW9uXG4gICAgICAgICAgdGFic0NvbnRlbnRDb250YWluZXJbb2Zmc2V0SGVpZ2h0XTtcbiAgICAgICAgICBhY3RpdmVDb250ZW50W3N0eWxlXVtmbG9hdF0gPSAnJztcbiAgICAgICAgICBuZXh0Q29udGVudFtzdHlsZV1bZmxvYXRdID0gJyc7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmICggaGFzQ2xhc3MobmV4dENvbnRlbnQsICdmYWRlJykgKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgYWRkQ2xhc3MobmV4dENvbnRlbnQsc2hvd0NsYXNzKTtcbiAgICAgICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKG5leHRDb250ZW50LHRyaWdnZXJTaG93KTtcbiAgICAgICAgICB9LDIwKTtcbiAgICAgICAgfSBlbHNlIHsgdHJpZ2dlclNob3coKTsgfSAgICAgICAgXG4gICAgICB9O1xuICBcbiAgICBpZiAoIXRhYnMpIHJldHVybjsgLy8gaW52YWxpZGF0ZVxuICBcbiAgICAvLyBzZXQgZGVmYXVsdCBhbmltYXRpb24gc3RhdGVcbiAgICB0YWJzW2lzQW5pbWF0aW5nXSA9IGZhbHNlOyAgICBcbiAgICAgICAgICBcbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICB2YXIgZ2V0QWN0aXZlVGFiID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhY3RpdmVUYWJzID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0YWJzLGFjdGl2ZSksIGFjdGl2ZVRhYjtcbiAgICAgICAgaWYgKCBhY3RpdmVUYWJzW2xlbmd0aF0gPT09IDEgJiYgIWhhc0NsYXNzKGFjdGl2ZVRhYnNbMF1bcGFyZW50Tm9kZV0sJ2Ryb3Bkb3duJykgKSB7XG4gICAgICAgICAgYWN0aXZlVGFiID0gYWN0aXZlVGFic1swXTtcbiAgICAgICAgfSBlbHNlIGlmICggYWN0aXZlVGFic1tsZW5ndGhdID4gMSApIHtcbiAgICAgICAgICBhY3RpdmVUYWIgPSBhY3RpdmVUYWJzW2FjdGl2ZVRhYnNbbGVuZ3RoXS0xXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWN0aXZlVGFiO1xuICAgICAgfSxcbiAgICAgIGdldEFjdGl2ZUNvbnRlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5RWxlbWVudChnZXRBY3RpdmVUYWIoKVtnZXRBdHRyaWJ1dGVdKCdocmVmJykpO1xuICAgICAgfSxcbiAgICAgIC8vIGhhbmRsZXIgXG4gICAgICBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGVbcHJldmVudERlZmF1bHRdKCk7XG4gICAgICAgIG5leHQgPSBlW2N1cnJlbnRUYXJnZXRdO1xuICAgICAgICAhdGFic1tpc0FuaW1hdGluZ10gJiYgIWhhc0NsYXNzKG5leHQsYWN0aXZlKSAmJiBzZWxmLnNob3coKTtcbiAgICAgIH07XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RcbiAgICB0aGlzLnNob3cgPSBmdW5jdGlvbigpIHsgLy8gdGhlIHRhYiB3ZSBjbGlja2VkIGlzIG5vdyB0aGUgbmV4dCB0YWJcbiAgICAgIG5leHQgPSBuZXh0IHx8IGVsZW1lbnQ7XG4gICAgICBuZXh0Q29udGVudCA9IHF1ZXJ5RWxlbWVudChuZXh0W2dldEF0dHJpYnV0ZV0oJ2hyZWYnKSk7IC8vdGhpcyBpcyB0aGUgYWN0dWFsIG9iamVjdCwgdGhlIG5leHQgdGFiIGNvbnRlbnQgdG8gYWN0aXZhdGVcbiAgICAgIGFjdGl2ZVRhYiA9IGdldEFjdGl2ZVRhYigpOyBcbiAgICAgIGFjdGl2ZUNvbnRlbnQgPSBnZXRBY3RpdmVDb250ZW50KCk7XG4gICAgICBcbiAgICAgIHRhYnNbaXNBbmltYXRpbmddID0gdHJ1ZTtcbiAgICAgIHJlbW92ZUNsYXNzKGFjdGl2ZVRhYixhY3RpdmUpO1xuICAgICAgYWN0aXZlVGFiW3NldEF0dHJpYnV0ZV0oYXJpYVNlbGVjdGVkLCdmYWxzZScpO1xuICAgICAgYWRkQ2xhc3MobmV4dCxhY3RpdmUpO1xuICAgICAgbmV4dFtzZXRBdHRyaWJ1dGVdKGFyaWFTZWxlY3RlZCwndHJ1ZScpOyAgICBcbiAgXG4gICAgICBpZiAoIGRyb3Bkb3duICkge1xuICAgICAgICBpZiAoICFoYXNDbGFzcyhlbGVtZW50W3BhcmVudE5vZGVdLCdkcm9wZG93bi1tZW51JykgKSB7XG4gICAgICAgICAgaWYgKGhhc0NsYXNzKGRyb3Bkb3duLGFjdGl2ZSkpIHJlbW92ZUNsYXNzKGRyb3Bkb3duLGFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFoYXNDbGFzcyhkcm9wZG93bixhY3RpdmUpKSBhZGRDbGFzcyhkcm9wZG93bixhY3RpdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoYWN0aXZlVGFiLCBoaWRlRXZlbnQsIGNvbXBvbmVudCwgbmV4dCk7XG4gIFxuICAgICAgaWYgKGhhc0NsYXNzKGFjdGl2ZUNvbnRlbnQsICdmYWRlJykpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoYWN0aXZlQ29udGVudCxzaG93Q2xhc3MpO1xuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChhY3RpdmVDb250ZW50LCB0cmlnZ2VySGlkZSk7XG4gICAgICB9IGVsc2UgeyB0cmlnZ2VySGlkZSgpOyB9XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdUYWIgaW4gZWxlbWVudCkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICBvbihlbGVtZW50LCBjbGlja0V2ZW50LCBjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAoc2VsZltoZWlnaHRdKSB7IHRhYnNDb250ZW50Q29udGFpbmVyID0gZ2V0QWN0aXZlQ29udGVudCgpW3BhcmVudE5vZGVdOyB9XG4gICAgZWxlbWVudFtzdHJpbmdUYWJdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIFRBQiBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nVGFiLCBUYWIsICdbJytkYXRhVG9nZ2xlKyc9XCJ0YWJcIl0nIF0gKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBUb2FzdFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gVE9BU1QgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT1cbiAgdmFyIFRvYXN0ID0gZnVuY3Rpb24oIGVsZW1lbnQsb3B0aW9ucyApIHtcbiAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIHNldCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFxuICAgIC8vIERBVEEgQVBJXG4gICAgdmFyIGFuaW1hdGlvbkRhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUFuaW1hdGlvbiksXG4gICAgICAgIGF1dG9oaWRlRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQXV0b2hpZGUpLFxuICAgICAgICBkZWxheURhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YURlbGF5KSxcbiAgICAgICAgXG4gICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgY29tcG9uZW50ID0gJ3RvYXN0JyxcbiAgICAgICAgYXV0b2hpZGUgPSAnYXV0b2hpZGUnLFxuICAgICAgICBhbmltYXRpb24gPSAnYW5pbWF0aW9uJyxcbiAgICAgICAgc2hvd2luZyA9ICdzaG93aW5nJyxcbiAgICAgICAgaGlkZSA9ICdoaWRlJyxcbiAgICAgICAgZmFkZSA9ICdmYWRlJztcbiAgXG4gICAgLy8gc2V0IGluc3RhbmNlIG9wdGlvbnNcbiAgICB0aGlzW2FuaW1hdGlvbl0gPSBvcHRpb25zW2FuaW1hdGlvbl0gPT09IGZhbHNlIHx8IGFuaW1hdGlvbkRhdGEgPT09ICdmYWxzZScgPyAwIDogMTsgLy8gdHJ1ZSBieSBkZWZhdWx0XG4gICAgdGhpc1thdXRvaGlkZV0gPSBvcHRpb25zW2F1dG9oaWRlXSA9PT0gZmFsc2UgfHwgYXV0b2hpZGVEYXRhID09PSAnZmFsc2UnID8gMCA6IDE7IC8vIHRydWUgYnkgZGVmYXVsdFxuICAgIHRoaXNbZGVsYXldID0gcGFyc2VJbnQob3B0aW9uc1tkZWxheV0gfHwgZGVsYXlEYXRhKSB8fCA1MDA7IC8vIDUwMG1zIGRlZmF1bHRcbiAgXG4gICAgLy8gYmluZCx0b2FzdCBhbmQgdGltZXJcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHRpbWVyID0gMCxcbiAgICAgICAgLy8gZ2V0IHRoZSB0b2FzdCBlbGVtZW50XG4gICAgICAgIHRvYXN0ID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcudG9hc3QnKTtcbiAgXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgLy8gYW5pbWF0aW9uIGNvbXBsZXRlXG4gICAgdmFyIHNob3dDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVDbGFzcyggdG9hc3QsIHNob3dpbmcgKTtcbiAgICAgICAgYWRkQ2xhc3MoIHRvYXN0LCBzaG93Q2xhc3MgKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbCh0b2FzdCwgc2hvd25FdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgaWYgKHNlbGZbYXV0b2hpZGVdKSB7IHNlbGYuaGlkZSgpOyB9XG4gICAgICB9LFxuICAgICAgaGlkZUNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGFkZENsYXNzKCB0b2FzdCwgaGlkZSApO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKHRvYXN0LCBoaWRkZW5FdmVudCwgY29tcG9uZW50KTtcbiAgICAgIH0sXG4gICAgICBjbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVDbGFzcyggdG9hc3Qsc2hvd0NsYXNzICk7XG4gICAgICAgIHNlbGZbYW5pbWF0aW9uXSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRvYXN0LCBoaWRlQ29tcGxldGUpIDogaGlkZUNvbXBsZXRlKCk7XG4gICAgICB9LFxuICAgICAgZGlzcG9zZUNvbXBsZXRlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTsgdGltZXIgPSBudWxsO1xuICAgICAgICBhZGRDbGFzcyggdG9hc3QsIGhpZGUgKTtcbiAgICAgICAgb2ZmKGVsZW1lbnQsIGNsaWNrRXZlbnQsIHNlbGYuaGlkZSk7XG4gICAgICAgIGVsZW1lbnRbc3RyaW5nVG9hc3RdID0gbnVsbDtcbiAgICAgICAgZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRvYXN0ID0gbnVsbDtcbiAgICAgIH07XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodG9hc3QpIHtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbCh0b2FzdCwgc2hvd0V2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICBzZWxmW2FuaW1hdGlvbl0gJiYgYWRkQ2xhc3MoIHRvYXN0LGZhZGUgKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoIHRvYXN0LGhpZGUgKTtcbiAgICAgICAgYWRkQ2xhc3MoIHRvYXN0LHNob3dpbmcgKTtcbiAgXG4gICAgICAgIHNlbGZbYW5pbWF0aW9uXSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRvYXN0LCBzaG93Q29tcGxldGUpIDogc2hvd0NvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbihub1RpbWVyKSB7XG4gICAgICBpZiAodG9hc3QgJiYgaGFzQ2xhc3ModG9hc3Qsc2hvd0NsYXNzKSkge1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKHRvYXN0LCBoaWRlRXZlbnQsIGNvbXBvbmVudCk7XG4gIFxuICAgICAgICBpZiAobm9UaW1lcikge1xuICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCBjbG9zZSwgc2VsZltkZWxheV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggdG9hc3QgJiYgaGFzQ2xhc3ModG9hc3Qsc2hvd0NsYXNzKSApIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoIHRvYXN0LHNob3dDbGFzcyApO1xuICAgICAgICBzZWxmW2FuaW1hdGlvbl0gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0b2FzdCwgZGlzcG9zZUNvbXBsZXRlKSA6IGRpc3Bvc2VDb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nVG9hc3QgaW4gZWxlbWVudCkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICBvbihlbGVtZW50LCBjbGlja0V2ZW50LCBzZWxmLmhpZGUpO1xuICAgIH1cbiAgICBlbGVtZW50W3N0cmluZ1RvYXN0XSA9IHNlbGY7XG4gIH07XG4gIFxuICAvLyBUT0FTVCBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdUb2FzdCwgVG9hc3QsICdbJytkYXRhRGlzbWlzcysnPVwidG9hc3RcIl0nIF0gKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBUb29sdGlwXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBUT09MVElQIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09XG4gIHZhciBUb29sdGlwID0gZnVuY3Rpb24oIGVsZW1lbnQsb3B0aW9ucyApIHtcbiAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIHNldCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFxuICAgIC8vIERBVEEgQVBJXG4gICAgdmFyIGFuaW1hdGlvbkRhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUFuaW1hdGlvbiksXG4gICAgICAgIHBsYWNlbWVudERhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVBsYWNlbWVudCksXG4gICAgICAgIGRlbGF5RGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhRGVsYXkpLFxuICAgICAgICBjb250YWluZXJEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFDb250YWluZXIpLFxuICAgICAgICBcbiAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICBjb21wb25lbnQgPSAndG9vbHRpcCcsXG4gICAgICAgIGNsYXNzU3RyaW5nID0gJ2NsYXNzJyxcbiAgICAgICAgdGl0bGUgPSAndGl0bGUnLFxuICAgICAgICBmYWRlID0gJ2ZhZGUnLFxuICAgICAgICBkaXYgPSAnZGl2JyxcbiAgXG4gICAgICAgIC8vIGNoZWNrIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJFbGVtZW50ID0gcXVlcnlFbGVtZW50KG9wdGlvbnNbY29udGFpbmVyXSksXG4gICAgICAgIGNvbnRhaW5lckRhdGFFbGVtZW50ID0gcXVlcnlFbGVtZW50KGNvbnRhaW5lckRhdGEpLCAgICAgIFxuICBcbiAgICAgICAgLy8gbWF5YmUgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIGEgbW9kYWxcbiAgICAgICAgbW9kYWwgPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy5tb2RhbCcpLFxuICAgICAgICBcbiAgICAgICAgLy8gbWF5YmUgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIGEgZml4ZWQgbmF2YmFyXG4gICAgICAgIG5hdmJhckZpeGVkVG9wID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcuJytmaXhlZFRvcCksXG4gICAgICAgIG5hdmJhckZpeGVkQm90dG9tID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcuJytmaXhlZEJvdHRvbSk7XG4gIFxuICAgIC8vIHNldCBpbnN0YW5jZSBvcHRpb25zXG4gICAgdGhpc1thbmltYXRpb25dID0gb3B0aW9uc1thbmltYXRpb25dICYmIG9wdGlvbnNbYW5pbWF0aW9uXSAhPT0gZmFkZSA/IG9wdGlvbnNbYW5pbWF0aW9uXSA6IGFuaW1hdGlvbkRhdGEgfHwgZmFkZTtcbiAgICB0aGlzW3BsYWNlbWVudF0gPSBvcHRpb25zW3BsYWNlbWVudF0gPyBvcHRpb25zW3BsYWNlbWVudF0gOiBwbGFjZW1lbnREYXRhIHx8IHRvcDtcbiAgICB0aGlzW2RlbGF5XSA9IHBhcnNlSW50KG9wdGlvbnNbZGVsYXldIHx8IGRlbGF5RGF0YSkgfHwgMjAwO1xuICAgIHRoaXNbY29udGFpbmVyXSA9IGNvbnRhaW5lckVsZW1lbnQgPyBjb250YWluZXJFbGVtZW50IFxuICAgICAgICAgICAgICAgICAgICA6IGNvbnRhaW5lckRhdGFFbGVtZW50ID8gY29udGFpbmVyRGF0YUVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgOiBuYXZiYXJGaXhlZFRvcCA/IG5hdmJhckZpeGVkVG9wXG4gICAgICAgICAgICAgICAgICAgIDogbmF2YmFyRml4ZWRCb3R0b20gPyBuYXZiYXJGaXhlZEJvdHRvbVxuICAgICAgICAgICAgICAgICAgICA6IG1vZGFsID8gbW9kYWwgOiBET0NbYm9keV07XG4gIFxuICAgIC8vIGJpbmQsIGV2ZW50IHRhcmdldHMsIHRpdGxlIGFuZCBjb25zdGFudHNcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHRpbWVyID0gMCwgcGxhY2VtZW50U2V0dGluZyA9IHRoaXNbcGxhY2VtZW50XSwgdG9vbHRpcCA9IG51bGwsXG4gICAgICAgIHRpdGxlU3RyaW5nID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKHRpdGxlKSB8fCBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRpdGxlKSB8fCBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YU9yaWdpbmFsVGl0bGUpO1xuICBcbiAgICBpZiAoICF0aXRsZVN0cmluZyB8fCB0aXRsZVN0cmluZyA9PSBcIlwiICkgcmV0dXJuOyAvLyBpbnZhbGlkYXRlXG4gIFxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHZhciByZW1vdmVUb29sVGlwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGZbY29udGFpbmVyXS5yZW1vdmVDaGlsZCh0b29sdGlwKTtcbiAgICAgICAgdG9vbHRpcCA9IG51bGw7IHRpbWVyID0gbnVsbDtcbiAgICAgIH0sXG4gICAgICBjcmVhdGVUb29sVGlwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpdGxlU3RyaW5nID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKHRpdGxlKSB8fCBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRpdGxlKSB8fCBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YU9yaWdpbmFsVGl0bGUpOyAvLyByZWFkIHRoZSB0aXRsZSBhZ2FpblxuICBcbiAgICAgICAgaWYgKCB0aXRsZVN0cmluZyAmJiB0aXRsZVN0cmluZyAhPT0gXCJcIiApIHsgLy8gaW52YWxpZGF0ZSwgbWF5YmUgbWFya3VwIGNoYW5nZWRcbiAgICAgICAgICB0b29sdGlwID0gRE9DW2NyZWF0ZUVsZW1lbnRdKGRpdik7XG4gICAgICAgICAgdG9vbHRpcFtzZXRBdHRyaWJ1dGVdKCdyb2xlJyxjb21wb25lbnQpO1xuICAgICAgICAgIHRvb2x0aXBbc3R5bGVdW2xlZnRdID0gJzAnO1xuICAgICAgICAgIHRvb2x0aXBbc3R5bGVdW3RvcF0gPSAnMCc7ICAgICAgICBcbiAgXG4gICAgICAgICAgLy8gdG9vbHRpcCBhcnJvd1xuICAgICAgICAgIHZhciB0b29sdGlwQXJyb3cgPSBET0NbY3JlYXRlRWxlbWVudF0oZGl2KTtcbiAgICAgICAgICB0b29sdGlwQXJyb3dbc2V0QXR0cmlidXRlXShjbGFzc1N0cmluZywnYXJyb3cnKTtcbiAgICAgICAgICB0b29sdGlwW2FwcGVuZENoaWxkXSh0b29sdGlwQXJyb3cpO1xuICAgICAgXG4gICAgICAgICAgdmFyIHRvb2x0aXBJbm5lciA9IERPQ1tjcmVhdGVFbGVtZW50XShkaXYpO1xuICAgICAgICAgIHRvb2x0aXBJbm5lcltzZXRBdHRyaWJ1dGVdKGNsYXNzU3RyaW5nLGNvbXBvbmVudCsnLWlubmVyJyk7XG4gICAgICAgICAgdG9vbHRpcFthcHBlbmRDaGlsZF0odG9vbHRpcElubmVyKTtcbiAgICAgICAgICB0b29sdGlwSW5uZXJbaW5uZXJIVE1MXSA9IHRpdGxlU3RyaW5nO1xuICBcbiAgICAgICAgICBzZWxmW2NvbnRhaW5lcl1bYXBwZW5kQ2hpbGRdKHRvb2x0aXApO1xuICAgICAgICAgIHRvb2x0aXBbc2V0QXR0cmlidXRlXShjbGFzc1N0cmluZywgY29tcG9uZW50ICsgJyBicy0nICsgY29tcG9uZW50KyctJytwbGFjZW1lbnRTZXR0aW5nICsgJyAnICsgc2VsZlthbmltYXRpb25dKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVRvb2x0aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0eWxlVGlwKGVsZW1lbnQsIHRvb2x0aXAsIHBsYWNlbWVudFNldHRpbmcsIHNlbGZbY29udGFpbmVyXSk7XG4gICAgICB9LFxuICAgICAgc2hvd1Rvb2x0aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICFoYXNDbGFzcyh0b29sdGlwLHNob3dDbGFzcykgJiYgKCBhZGRDbGFzcyh0b29sdGlwLHNob3dDbGFzcykgKTtcbiAgICAgIH0sXG4gICAgICAvLyB0cmlnZ2Vyc1xuICAgICAgc2hvd1RyaWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgb24oIGdsb2JhbE9iamVjdCwgcmVzaXplRXZlbnQsIHNlbGYuaGlkZSwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBzaG93bkV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICAgIGhpZGVUcmlnZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG9mZiggZ2xvYmFsT2JqZWN0LCByZXNpemVFdmVudCwgc2VsZi5oaWRlLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgICByZW1vdmVUb29sVGlwKCk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgaGlkZGVuRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICB9O1xuICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0b29sdGlwID09PSBudWxsKSB7XG4gICAgICAgICAgcGxhY2VtZW50U2V0dGluZyA9IHNlbGZbcGxhY2VtZW50XTsgLy8gd2UgcmVzZXQgcGxhY2VtZW50IGluIGFsbCBjYXNlc1xuICAgICAgICAgIC8vIGlmKGNyZWF0ZVRvb2xUaXAoKSA9PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICAgIGlmKGNyZWF0ZVRvb2xUaXAoKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHVwZGF0ZVRvb2x0aXAoKTtcbiAgICAgICAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNob3dFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgICAgICEhc2VsZlthbmltYXRpb25dID8gZW11bGF0ZVRyYW5zaXRpb25FbmQodG9vbHRpcCwgc2hvd1RyaWdnZXIpIDogc2hvd1RyaWdnZXIoKTsgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAyMCApO1xuICAgIH07XG4gICAgdGhpcy5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRvb2x0aXAgJiYgaGFzQ2xhc3ModG9vbHRpcCxzaG93Q2xhc3MpKSB7XG4gICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBoaWRlRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModG9vbHRpcCxzaG93Q2xhc3MpO1xuICAgICAgICAgICEhc2VsZlthbmltYXRpb25dID8gZW11bGF0ZVRyYW5zaXRpb25FbmQodG9vbHRpcCwgaGlkZVRyaWdnZXIpIDogaGlkZVRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSwgc2VsZltkZWxheV0pO1xuICAgIH07XG4gICAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdG9vbHRpcCkgeyBzZWxmLnNob3coKTsgfSBcbiAgICAgIGVsc2UgeyBzZWxmLmhpZGUoKTsgfVxuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nVG9vbHRpcCBpbiBlbGVtZW50KSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgICAgIGVsZW1lbnRbc2V0QXR0cmlidXRlXShkYXRhT3JpZ2luYWxUaXRsZSx0aXRsZVN0cmluZyk7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aXRsZSk7XG4gICAgICBvbihlbGVtZW50LCBtb3VzZUhvdmVyWzBdLCBzZWxmLnNob3cpO1xuICAgICAgb24oZWxlbWVudCwgbW91c2VIb3ZlclsxXSwgc2VsZi5oaWRlKTtcbiAgICB9XG4gICAgZWxlbWVudFtzdHJpbmdUb29sdGlwXSA9IHNlbGY7XG4gIH07XG4gIFxuICAvLyBUT09MVElQIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ1Rvb2x0aXAsIFRvb2x0aXAsICdbJytkYXRhVG9nZ2xlKyc9XCJ0b29sdGlwXCJdJyBdICk7XG4gIFxuICBcbiAgXHJcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCB8IEluaXRpYWxpemUgRGF0YSBBUElcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgdmFyIGluaXRpYWxpemVEYXRhQVBJID0gZnVuY3Rpb24oIGNvbnN0cnVjdG9yLCBjb2xsZWN0aW9uICl7XHJcbiAgICAgIGZvciAodmFyIGk9MCwgbD1jb2xsZWN0aW9uW2xlbmd0aF07IGk8bDsgaSsrKSB7XHJcbiAgICAgICAgbmV3IGNvbnN0cnVjdG9yKGNvbGxlY3Rpb25baV0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdENhbGxiYWNrID0gQlNOLmluaXRDYWxsYmFjayA9IGZ1bmN0aW9uKGxvb2tVcCl7XHJcbiAgICAgIGxvb2tVcCA9IGxvb2tVcCB8fCBET0M7XHJcbiAgICAgIGZvciAodmFyIGk9MCwgbD1zdXBwb3J0c1tsZW5ndGhdOyBpPGw7IGkrKykge1xyXG4gICAgICAgIGluaXRpYWxpemVEYXRhQVBJKCBzdXBwb3J0c1tpXVsxXSwgbG9va1VwW3F1ZXJ5U2VsZWN0b3JBbGxdIChzdXBwb3J0c1tpXVsyXSkgKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAvLyBidWxrIGluaXRpYWxpemUgYWxsIGNvbXBvbmVudHNcclxuICBET0NbYm9keV0gPyBpbml0Q2FsbGJhY2soKSA6IG9uKCBET0MsICdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXsgaW5pdENhbGxiYWNrKCk7IH0gKTtcclxuICBcbiAgcmV0dXJuIHtcbiAgICBBbGVydDogQWxlcnQsXG4gICAgQnV0dG9uOiBCdXR0b24sXG4gICAgQ2Fyb3VzZWw6IENhcm91c2VsLFxuICAgIENvbGxhcHNlOiBDb2xsYXBzZSxcbiAgICBEcm9wZG93bjogRHJvcGRvd24sXG4gICAgTW9kYWw6IE1vZGFsLFxuICAgIFBvcG92ZXI6IFBvcG92ZXIsXG4gICAgU2Nyb2xsU3B5OiBTY3JvbGxTcHksXG4gICAgVGFiOiBUYWIsXG4gICAgVG9hc3Q6IFRvYXN0LFxuICAgIFRvb2x0aXA6IFRvb2x0aXBcbiAgfTtcbn0pKTtcbiIsIi8vIGdldCBzdWNjZXNzZnVsIGNvbnRyb2wgZnJvbSBmb3JtIGFuZCBhc3NlbWJsZSBpbnRvIG9iamVjdFxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDQwMS9pbnRlcmFjdC9mb3Jtcy5odG1sI2gtMTcuMTMuMlxuXG4vLyB0eXBlcyB3aGljaCBpbmRpY2F0ZSBhIHN1Ym1pdCBhY3Rpb24gYW5kIGFyZSBub3Qgc3VjY2Vzc2Z1bCBjb250cm9sc1xuLy8gdGhlc2Ugd2lsbCBiZSBpZ25vcmVkXG52YXIga19yX3N1Ym1pdHRlciA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaTtcblxuLy8gbm9kZSBuYW1lcyB3aGljaCBjb3VsZCBiZSBzdWNjZXNzZnVsIGNvbnRyb2xzXG52YXIga19yX3N1Y2Nlc3NfY29udHJscyA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtcblxuLy8gTWF0Y2hlcyBicmFja2V0IG5vdGF0aW9uLlxudmFyIGJyYWNrZXRzID0gLyhcXFtbXlxcW1xcXV0qXFxdKS9nO1xuXG4vLyBzZXJpYWxpemVzIGZvcm0gZmllbGRzXG4vLyBAcGFyYW0gZm9ybSBNVVNUIGJlIGFuIEhUTUxGb3JtIGVsZW1lbnRcbi8vIEBwYXJhbSBvcHRpb25zIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRvIGNvbmZpZ3VyZSB0aGUgc2VyaWFsaXphdGlvbi4gRGVmYXVsdCBvdXRwdXRcbi8vIHdpdGggbm8gb3B0aW9ucyBzcGVjaWZpZWQgaXMgYSB1cmwgZW5jb2RlZCBzdHJpbmdcbi8vICAgIC0gaGFzaDogW3RydWUgfCBmYWxzZV0gQ29uZmlndXJlIHRoZSBvdXRwdXQgdHlwZS4gSWYgdHJ1ZSwgdGhlIG91dHB1dCB3aWxsXG4vLyAgICBiZSBhIGpzIG9iamVjdC5cbi8vICAgIC0gc2VyaWFsaXplcjogW2Z1bmN0aW9uXSBPcHRpb25hbCBzZXJpYWxpemVyIGZ1bmN0aW9uIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9uZS5cbi8vICAgIFRoZSBmdW5jdGlvbiB0YWtlcyAzIGFyZ3VtZW50cyAocmVzdWx0LCBrZXksIHZhbHVlKSBhbmQgc2hvdWxkIHJldHVybiBuZXcgcmVzdWx0XG4vLyAgICBoYXNoIGFuZCB1cmwgZW5jb2RlZCBzdHIgc2VyaWFsaXplcnMgYXJlIHByb3ZpZGVkIHdpdGggdGhpcyBtb2R1bGVcbi8vICAgIC0gZGlzYWJsZWQ6IFt0cnVlIHwgZmFsc2VdLiBJZiB0cnVlIHNlcmlhbGl6ZSBkaXNhYmxlZCBmaWVsZHMuXG4vLyAgICAtIGVtcHR5OiBbdHJ1ZSB8IGZhbHNlXS4gSWYgdHJ1ZSBzZXJpYWxpemUgZW1wdHkgZmllbGRzXG5mdW5jdGlvbiBzZXJpYWxpemUoZm9ybSwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zID0geyBoYXNoOiAhIW9wdGlvbnMgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3B0aW9ucy5oYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9ucy5oYXNoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gKG9wdGlvbnMuaGFzaCkgPyB7fSA6ICcnO1xuICAgIHZhciBzZXJpYWxpemVyID0gb3B0aW9ucy5zZXJpYWxpemVyIHx8ICgob3B0aW9ucy5oYXNoKSA/IGhhc2hfc2VyaWFsaXplciA6IHN0cl9zZXJpYWxpemUpO1xuXG4gICAgdmFyIGVsZW1lbnRzID0gZm9ybSAmJiBmb3JtLmVsZW1lbnRzID8gZm9ybS5lbGVtZW50cyA6IFtdO1xuXG4gICAgLy9PYmplY3Qgc3RvcmUgZWFjaCByYWRpbyBhbmQgc2V0IGlmIGl0J3MgZW1wdHkgb3Igbm90XG4gICAgdmFyIHJhZGlvX3N0b3JlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIGZvciAodmFyIGk9MCA7IGk8ZWxlbWVudHMubGVuZ3RoIDsgKytpKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgICAgLy8gaW5nb3JlIGRpc2FibGVkIGZpZWxkc1xuICAgICAgICBpZiAoKCFvcHRpb25zLmRpc2FibGVkICYmIGVsZW1lbnQuZGlzYWJsZWQpIHx8ICFlbGVtZW50Lm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlnbm9yZSBhbnlodGluZyB0aGF0IGlzIG5vdCBjb25zaWRlcmVkIGEgc3VjY2VzcyBmaWVsZFxuICAgICAgICBpZiAoIWtfcl9zdWNjZXNzX2NvbnRybHMudGVzdChlbGVtZW50Lm5vZGVOYW1lKSB8fFxuICAgICAgICAgICAga19yX3N1Ym1pdHRlci50ZXN0KGVsZW1lbnQudHlwZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleSA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgdmFyIHZhbCA9IGVsZW1lbnQudmFsdWU7XG5cbiAgICAgICAgLy8gd2UgY2FuJ3QganVzdCB1c2UgZWxlbWVudC52YWx1ZSBmb3IgY2hlY2tib3hlcyBjYXVzZSBzb21lIGJyb3dzZXJzIGxpZSB0byB1c1xuICAgICAgICAvLyB0aGV5IHNheSBcIm9uXCIgZm9yIHZhbHVlIHdoZW4gdGhlIGJveCBpc24ndCBjaGVja2VkXG4gICAgICAgIGlmICgoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnIHx8IGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJykgJiYgIWVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2Ugd2FudCBlbXB0eSBlbGVtZW50c1xuICAgICAgICBpZiAob3B0aW9ucy5lbXB0eSkge1xuICAgICAgICAgICAgLy8gZm9yIGNoZWNrYm94XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnICYmICFlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZm9yIHJhZGlvXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyYWRpb19zdG9yZVtlbGVtZW50Lm5hbWVdICYmICFlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaW9fc3RvcmVbZWxlbWVudC5uYW1lXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaW9fc3RvcmVbZWxlbWVudC5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBvcHRpb25zIGVtcHR5IGlzIHRydWUsIGNvbnRpbnVlIG9ubHkgaWYgaXRzIHJhZGlvXG4gICAgICAgICAgICBpZiAodmFsID09IHVuZGVmaW5lZCAmJiBlbGVtZW50LnR5cGUgPT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdmFsdWUtbGVzcyBmaWVsZHMgYXJlIGlnbm9yZWQgdW5sZXNzIG9wdGlvbnMuZW1wdHkgaXMgdHJ1ZVxuICAgICAgICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG11bHRpIHNlbGVjdCBib3hlc1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xuICAgICAgICAgICAgdmFsID0gW107XG5cbiAgICAgICAgICAgIHZhciBzZWxlY3RPcHRpb25zID0gZWxlbWVudC5vcHRpb25zO1xuICAgICAgICAgICAgdmFyIGlzU2VsZWN0ZWRPcHRpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBqPTAgOyBqPHNlbGVjdE9wdGlvbnMubGVuZ3RoIDsgKytqKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHNlbGVjdE9wdGlvbnNbal07XG4gICAgICAgICAgICAgICAgdmFyIGFsbG93ZWRFbXB0eSA9IG9wdGlvbnMuZW1wdHkgJiYgIW9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzVmFsdWUgPSAob3B0aW9uLnZhbHVlIHx8IGFsbG93ZWRFbXB0eSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCAmJiBoYXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkT3B0aW9ucyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdXNpbmcgYSBoYXNoIHNlcmlhbGl6ZXIgYmUgc3VyZSB0byBhZGQgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcnJlY3Qgbm90YXRpb24gZm9yIGFuIGFycmF5IGluIHRoZSBtdWx0aS1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udGV4dC4gSGVyZSB0aGUgbmFtZSBhdHRyaWJ1dGUgb24gdGhlIHNlbGVjdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIG1pZ2h0IGJlIG1pc3NpbmcgdGhlIHRyYWlsaW5nIGJyYWNrZXQgcGFpci4gQm90aCBuYW1lc1xuICAgICAgICAgICAgICAgICAgICAvLyBcImZvb1wiIGFuZCBcImZvb1tdXCIgc2hvdWxkIGJlIGFycmF5cy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFzaCAmJiBrZXkuc2xpY2Uoa2V5Lmxlbmd0aCAtIDIpICE9PSAnW10nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzZXJpYWxpemVyKHJlc3VsdCwga2V5ICsgJ1tdJywgb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNlcmlhbGl6ZXIocmVzdWx0LCBrZXksIG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBpZiBubyBzZWxlY3RlZCBvcHRpb25zIGFuZCBvcHRpb25zLmVtcHR5IGlzIHRydWVcbiAgICAgICAgICAgIGlmICghaXNTZWxlY3RlZE9wdGlvbnMgJiYgb3B0aW9ucy5lbXB0eSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNlcmlhbGl6ZXIocmVzdWx0LCBrZXksICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBzZXJpYWxpemVyKHJlc3VsdCwga2V5LCB2YWwpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBhbGwgZW1wdHkgcmFkaW8gYnV0dG9ucyBhbmQgc2VyaWFsaXplIHRoZW0gd2l0aCBrZXk9XCJcIlxuICAgIGlmIChvcHRpb25zLmVtcHR5KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiByYWRpb19zdG9yZSkge1xuICAgICAgICAgICAgaWYgKCFyYWRpb19zdG9yZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc2VyaWFsaXplcihyZXN1bHQsIGtleSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcGFyc2Vfa2V5cyhzdHJpbmcpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciBwcmVmaXggPSAvXihbXlxcW1xcXV0qKS87XG4gICAgdmFyIGNoaWxkcmVuID0gbmV3IFJlZ0V4cChicmFja2V0cyk7XG4gICAgdmFyIG1hdGNoID0gcHJlZml4LmV4ZWMoc3RyaW5nKTtcblxuICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgICBrZXlzLnB1c2gobWF0Y2hbMV0pO1xuICAgIH1cblxuICAgIHdoaWxlICgobWF0Y2ggPSBjaGlsZHJlbi5leGVjKHN0cmluZykpICE9PSBudWxsKSB7XG4gICAgICAgIGtleXMucHVzaChtYXRjaFsxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIGhhc2hfYXNzaWduKHJlc3VsdCwga2V5cywgdmFsdWUpIHtcbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICB2YXIgYmV0d2VlbiA9IGtleS5tYXRjaCgvXlxcWyguKz8pXFxdJC8pO1xuXG4gICAgaWYgKGtleSA9PT0gJ1tdJykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgW107XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaGFzaF9hc3NpZ24obnVsbCwga2V5cywgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgbWlnaHQgYmUgdGhlIHJlc3VsdCBvZiBiYWQgbmFtZSBhdHRyaWJ1dGVzIGxpa2UgXCJbXVtmb29dXCIsXG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIG9yaWdpbmFsIGByZXN1bHRgIG9iamVjdCB3aWxsIGFscmVhZHkgYmVcbiAgICAgICAgICAgIC8vIGFzc2lnbmVkIHRvIGFuIG9iamVjdCBsaXRlcmFsLiBSYXRoZXIgdGhhbiBjb2VyY2UgdGhlIG9iamVjdCB0b1xuICAgICAgICAgICAgLy8gYW4gYXJyYXksIG9yIGNhdXNlIGFuIGV4Y2VwdGlvbiB0aGUgYXR0cmlidXRlIFwiX3ZhbHVlc1wiIGlzXG4gICAgICAgICAgICAvLyBhc3NpZ25lZCBhcyBhbiBhcnJheS5cbiAgICAgICAgICAgIHJlc3VsdC5fdmFsdWVzID0gcmVzdWx0Ll92YWx1ZXMgfHwgW107XG4gICAgICAgICAgICByZXN1bHQuX3ZhbHVlcy5wdXNoKGhhc2hfYXNzaWduKG51bGwsIGtleXMsIHZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIEtleSBpcyBhbiBhdHRyaWJ1dGUgbmFtZSBhbmQgY2FuIGJlIGFzc2lnbmVkIGRpcmVjdGx5LlxuICAgIGlmICghYmV0d2Vlbikge1xuICAgICAgICByZXN1bHRba2V5XSA9IGhhc2hfYXNzaWduKHJlc3VsdFtrZXldLCBrZXlzLCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgc3RyaW5nID0gYmV0d2VlblsxXTtcbiAgICAgICAgLy8gK3ZhciBjb252ZXJ0cyB0aGUgdmFyaWFibGUgaW50byBhIG51bWJlclxuICAgICAgICAvLyBiZXR0ZXIgdGhhbiBwYXJzZUludCBiZWNhdXNlIGl0IGRvZXNuJ3QgdHJ1bmNhdGUgYXdheSB0cmFpbGluZ1xuICAgICAgICAvLyBsZXR0ZXJzIGFuZCBhY3R1YWxseSBmYWlscyBpZiB3aG9sZSB0aGluZyBpcyBub3QgYSBudW1iZXJcbiAgICAgICAgdmFyIGluZGV4ID0gK3N0cmluZztcblxuICAgICAgICAvLyBJZiB0aGUgY2hhcmFjdGVycyBiZXR3ZWVuIHRoZSBicmFja2V0cyBpcyBub3QgYSBudW1iZXIgaXQgaXMgYW5cbiAgICAgICAgLy8gYXR0cmlidXRlIG5hbWUgYW5kIGNhbiBiZSBhc3NpZ25lZCBkaXJlY3RseS5cbiAgICAgICAgaWYgKGlzTmFOKGluZGV4KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IHt9O1xuICAgICAgICAgICAgcmVzdWx0W3N0cmluZ10gPSBoYXNoX2Fzc2lnbihyZXN1bHRbc3RyaW5nXSwga2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IFtdO1xuICAgICAgICAgICAgcmVzdWx0W2luZGV4XSA9IGhhc2hfYXNzaWduKHJlc3VsdFtpbmRleF0sIGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE9iamVjdC9oYXNoIGVuY29kaW5nIHNlcmlhbGl6ZXIuXG5mdW5jdGlvbiBoYXNoX3NlcmlhbGl6ZXIocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBrZXkubWF0Y2goYnJhY2tldHMpO1xuXG4gICAgLy8gSGFzIGJyYWNrZXRzPyBVc2UgdGhlIHJlY3Vyc2l2ZSBhc3NpZ25tZW50IGZ1bmN0aW9uIHRvIHdhbGsgdGhlIGtleXMsXG4gICAgLy8gY29uc3RydWN0IGFueSBtaXNzaW5nIG9iamVjdHMgaW4gdGhlIHJlc3VsdCB0cmVlIGFuZCBtYWtlIHRoZSBhc3NpZ25tZW50XG4gICAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgY2hhaW4uXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgdmFyIGtleXMgPSBwYXJzZV9rZXlzKGtleSk7XG4gICAgICAgIGhhc2hfYXNzaWduKHJlc3VsdCwga2V5cywgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTm9uIGJyYWNrZXQgbm90YXRpb24gY2FuIG1ha2UgYXNzaWdubWVudHMgZGlyZWN0bHkuXG4gICAgICAgIHZhciBleGlzdGluZyA9IHJlc3VsdFtrZXldO1xuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBoYXMgYmVlbiBhc3NpZ25lZCBhbHJlYWR5IChmb3IgaW5zdGFuY2Ugd2hlbiBhIHJhZGlvIGFuZFxuICAgICAgICAvLyBhIGNoZWNrYm94IGhhdmUgdGhlIHNhbWUgbmFtZSBhdHRyaWJ1dGUpIGNvbnZlcnQgdGhlIHByZXZpb3VzIHZhbHVlXG4gICAgICAgIC8vIGludG8gYW4gYXJyYXkgYmVmb3JlIHB1c2hpbmcgaW50byBpdC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gTk9URTogSWYgdGhpcyByZXF1aXJlbWVudCB3ZXJlIHJlbW92ZWQgYWxsIGhhc2ggY3JlYXRpb24gYW5kXG4gICAgICAgIC8vIGFzc2lnbm1lbnQgY291bGQgZ28gdGhyb3VnaCBgaGFzaF9hc3NpZ25gLlxuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShleGlzdGluZykpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IFsgZXhpc3RpbmcgXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gdXJsZm9ybSBlbmNvZGluZyBzZXJpYWxpemVyXG5mdW5jdGlvbiBzdHJfc2VyaWFsaXplKHJlc3VsdCwga2V5LCB2YWx1ZSkge1xuICAgIC8vIGVuY29kZSBuZXdsaW5lcyBhcyBcXHJcXG4gY2F1c2UgdGhlIGh0bWwgc3BlYyBzYXlzIHNvXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8oXFxyKT9cXG4vZywgJ1xcclxcbicpO1xuICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgIC8vIHNwYWNlcyBzaG91bGQgYmUgJysnIHJhdGhlciB0aGFuICclMjAnLlxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvJTIwL2csICcrJyk7XG4gICAgcmV0dXJuIHJlc3VsdCArIChyZXN1bHQgPyAnJicgOiAnJykgKyBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZTtcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PXR8fHNlbGYpLkdMaWdodGJveD1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KGUpe3JldHVybih0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KShlKX1mdW5jdGlvbiBlKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKHQsZSl7Zm9yKHZhciBpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciBuPWVbaV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4ua2V5LG4pfX1mdW5jdGlvbiBuKHQsZSxuKXtyZXR1cm4gZSYmaSh0LnByb3RvdHlwZSxlKSxuJiZpKHQsbiksdH1mdW5jdGlvbiBzKHQpe3JldHVybiBmdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IodmFyIGU9MCxpPW5ldyBBcnJheSh0Lmxlbmd0aCk7ZTx0Lmxlbmd0aDtlKyspaVtlXT10W2VdO3JldHVybiBpfX0odCl8fGZ1bmN0aW9uKHQpe2lmKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QodCl8fFwiW29iamVjdCBBcmd1bWVudHNdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpcmV0dXJuIEFycmF5LmZyb20odCl9KHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKX0oKX1mdW5jdGlvbiBvKHQpe3JldHVybiBNYXRoLnNxcnQodC54KnQueCt0LnkqdC55KX1mdW5jdGlvbiBsKHQsZSl7dmFyIGk9ZnVuY3Rpb24odCxlKXt2YXIgaT1vKHQpKm8oZSk7aWYoMD09PWkpcmV0dXJuIDA7dmFyIG49ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC54KmUueCt0LnkqZS55fSh0LGUpL2k7cmV0dXJuIG4+MSYmKG49MSksTWF0aC5hY29zKG4pfSh0LGUpO3JldHVybiBmdW5jdGlvbih0LGUpe3JldHVybiB0LngqZS55LWUueCp0Lnl9KHQsZSk+MCYmKGkqPS0xKSwxODAqaS9NYXRoLlBJfXZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChpKXtlKHRoaXMsdCksdGhpcy5oYW5kbGVycz1bXSx0aGlzLmVsPWl9cmV0dXJuIG4odCxbe2tleTpcImFkZFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuaGFuZGxlcnMucHVzaCh0KX19LHtrZXk6XCJkZWxcIix2YWx1ZTpmdW5jdGlvbih0KXt0fHwodGhpcy5oYW5kbGVycz1bXSk7Zm9yKHZhciBlPXRoaXMuaGFuZGxlcnMubGVuZ3RoO2U+PTA7ZS0tKXRoaXMuaGFuZGxlcnNbZV09PT10JiZ0aGlzLmhhbmRsZXJzLnNwbGljZShlLDEpfX0se2tleTpcImRpc3BhdGNoXCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MCxlPXRoaXMuaGFuZGxlcnMubGVuZ3RoO3Q8ZTt0Kyspe3ZhciBpPXRoaXMuaGFuZGxlcnNbdF07XCJmdW5jdGlvblwiPT10eXBlb2YgaSYmaS5hcHBseSh0aGlzLmVsLGFyZ3VtZW50cyl9fX1dKSx0fSgpO2Z1bmN0aW9uIGEodCxlKXt2YXIgaT1uZXcgcih0KTtyZXR1cm4gaS5hZGQoZSksaX12YXIgYz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoaSxuKXtlKHRoaXMsdCksdGhpcy5lbGVtZW50PVwic3RyaW5nXCI9PXR5cGVvZiBpP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaSk6aSx0aGlzLnN0YXJ0PXRoaXMuc3RhcnQuYmluZCh0aGlzKSx0aGlzLm1vdmU9dGhpcy5tb3ZlLmJpbmQodGhpcyksdGhpcy5lbmQ9dGhpcy5lbmQuYmluZCh0aGlzKSx0aGlzLmNhbmNlbD10aGlzLmNhbmNlbC5iaW5kKHRoaXMpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMuc3RhcnQsITEpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy5tb3ZlLCExKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy5lbmQsITEpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIix0aGlzLmNhbmNlbCwhMSksdGhpcy5wcmVWPXt4Om51bGwseTpudWxsfSx0aGlzLnBpbmNoU3RhcnRMZW49bnVsbCx0aGlzLnpvb209MSx0aGlzLmlzRG91YmxlVGFwPSExO3ZhciBzPWZ1bmN0aW9uKCl7fTt0aGlzLnJvdGF0ZT1hKHRoaXMuZWxlbWVudCxuLnJvdGF0ZXx8cyksdGhpcy50b3VjaFN0YXJ0PWEodGhpcy5lbGVtZW50LG4udG91Y2hTdGFydHx8cyksdGhpcy5tdWx0aXBvaW50U3RhcnQ9YSh0aGlzLmVsZW1lbnQsbi5tdWx0aXBvaW50U3RhcnR8fHMpLHRoaXMubXVsdGlwb2ludEVuZD1hKHRoaXMuZWxlbWVudCxuLm11bHRpcG9pbnRFbmR8fHMpLHRoaXMucGluY2g9YSh0aGlzLmVsZW1lbnQsbi5waW5jaHx8cyksdGhpcy5zd2lwZT1hKHRoaXMuZWxlbWVudCxuLnN3aXBlfHxzKSx0aGlzLnRhcD1hKHRoaXMuZWxlbWVudCxuLnRhcHx8cyksdGhpcy5kb3VibGVUYXA9YSh0aGlzLmVsZW1lbnQsbi5kb3VibGVUYXB8fHMpLHRoaXMubG9uZ1RhcD1hKHRoaXMuZWxlbWVudCxuLmxvbmdUYXB8fHMpLHRoaXMuc2luZ2xlVGFwPWEodGhpcy5lbGVtZW50LG4uc2luZ2xlVGFwfHxzKSx0aGlzLnByZXNzTW92ZT1hKHRoaXMuZWxlbWVudCxuLnByZXNzTW92ZXx8cyksdGhpcy50d29GaW5nZXJQcmVzc01vdmU9YSh0aGlzLmVsZW1lbnQsbi50d29GaW5nZXJQcmVzc01vdmV8fHMpLHRoaXMudG91Y2hNb3ZlPWEodGhpcy5lbGVtZW50LG4udG91Y2hNb3ZlfHxzKSx0aGlzLnRvdWNoRW5kPWEodGhpcy5lbGVtZW50LG4udG91Y2hFbmR8fHMpLHRoaXMudG91Y2hDYW5jZWw9YSh0aGlzLmVsZW1lbnQsbi50b3VjaENhbmNlbHx8cyksdGhpcy5fY2FuY2VsQWxsSGFuZGxlcj10aGlzLmNhbmNlbEFsbC5iaW5kKHRoaXMpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5fY2FuY2VsQWxsSGFuZGxlciksdGhpcy5kZWx0YT1udWxsLHRoaXMubGFzdD1udWxsLHRoaXMubm93PW51bGwsdGhpcy50YXBUaW1lb3V0PW51bGwsdGhpcy5zaW5nbGVUYXBUaW1lb3V0PW51bGwsdGhpcy5sb25nVGFwVGltZW91dD1udWxsLHRoaXMuc3dpcGVUaW1lb3V0PW51bGwsdGhpcy54MT10aGlzLngyPXRoaXMueTE9dGhpcy55Mj1udWxsLHRoaXMucHJlVGFwUG9zaXRpb249e3g6bnVsbCx5Om51bGx9fXJldHVybiBuKHQsW3trZXk6XCJzdGFydFwiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKHQudG91Y2hlcyl7dGhpcy5ub3c9RGF0ZS5ub3coKSx0aGlzLngxPXQudG91Y2hlc1swXS5wYWdlWCx0aGlzLnkxPXQudG91Y2hlc1swXS5wYWdlWSx0aGlzLmRlbHRhPXRoaXMubm93LSh0aGlzLmxhc3R8fHRoaXMubm93KSx0aGlzLnRvdWNoU3RhcnQuZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpLG51bGwhPT10aGlzLnByZVRhcFBvc2l0aW9uLngmJih0aGlzLmlzRG91YmxlVGFwPXRoaXMuZGVsdGE+MCYmdGhpcy5kZWx0YTw9MjUwJiZNYXRoLmFicyh0aGlzLnByZVRhcFBvc2l0aW9uLngtdGhpcy54MSk8MzAmJk1hdGguYWJzKHRoaXMucHJlVGFwUG9zaXRpb24ueS10aGlzLnkxKTwzMCx0aGlzLmlzRG91YmxlVGFwJiZjbGVhclRpbWVvdXQodGhpcy5zaW5nbGVUYXBUaW1lb3V0KSksdGhpcy5wcmVUYXBQb3NpdGlvbi54PXRoaXMueDEsdGhpcy5wcmVUYXBQb3NpdGlvbi55PXRoaXMueTEsdGhpcy5sYXN0PXRoaXMubm93O3ZhciBlPXRoaXMucHJlVjtpZih0LnRvdWNoZXMubGVuZ3RoPjEpe3RoaXMuX2NhbmNlbExvbmdUYXAoKSx0aGlzLl9jYW5jZWxTaW5nbGVUYXAoKTt2YXIgaT17eDp0LnRvdWNoZXNbMV0ucGFnZVgtdGhpcy54MSx5OnQudG91Y2hlc1sxXS5wYWdlWS10aGlzLnkxfTtlLng9aS54LGUueT1pLnksdGhpcy5waW5jaFN0YXJ0TGVuPW8oZSksdGhpcy5tdWx0aXBvaW50U3RhcnQuZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpfXRoaXMuX3ByZXZlbnRUYXA9ITEsdGhpcy5sb25nVGFwVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhpcy5sb25nVGFwLmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KSx0aGlzLl9wcmV2ZW50VGFwPSEwfS5iaW5kKHRoaXMpLDc1MCl9fX0se2tleTpcIm1vdmVcIix2YWx1ZTpmdW5jdGlvbih0KXtpZih0LnRvdWNoZXMpe3ZhciBlPXRoaXMucHJlVixpPXQudG91Y2hlcy5sZW5ndGgsbj10LnRvdWNoZXNbMF0ucGFnZVgscz10LnRvdWNoZXNbMF0ucGFnZVk7aWYodGhpcy5pc0RvdWJsZVRhcD0hMSxpPjEpe3ZhciByPXQudG91Y2hlc1sxXS5wYWdlWCxhPXQudG91Y2hlc1sxXS5wYWdlWSxjPXt4OnQudG91Y2hlc1sxXS5wYWdlWC1uLHk6dC50b3VjaGVzWzFdLnBhZ2VZLXN9O251bGwhPT1lLngmJih0aGlzLnBpbmNoU3RhcnRMZW4+MCYmKHQuem9vbT1vKGMpL3RoaXMucGluY2hTdGFydExlbix0aGlzLnBpbmNoLmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KSksdC5hbmdsZT1sKGMsZSksdGhpcy5yb3RhdGUuZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpKSxlLng9Yy54LGUueT1jLnksbnVsbCE9PXRoaXMueDImJm51bGwhPT10aGlzLnN4Mj8odC5kZWx0YVg9KG4tdGhpcy54MityLXRoaXMuc3gyKS8yLHQuZGVsdGFZPShzLXRoaXMueTIrYS10aGlzLnN5MikvMik6KHQuZGVsdGFYPTAsdC5kZWx0YVk9MCksdGhpcy50d29GaW5nZXJQcmVzc01vdmUuZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpLHRoaXMuc3gyPXIsdGhpcy5zeTI9YX1lbHNle2lmKG51bGwhPT10aGlzLngyKXt0LmRlbHRhWD1uLXRoaXMueDIsdC5kZWx0YVk9cy10aGlzLnkyO3ZhciBoPU1hdGguYWJzKHRoaXMueDEtdGhpcy54MiksdT1NYXRoLmFicyh0aGlzLnkxLXRoaXMueTIpOyhoPjEwfHx1PjEwKSYmKHRoaXMuX3ByZXZlbnRUYXA9ITApfWVsc2UgdC5kZWx0YVg9MCx0LmRlbHRhWT0wO3RoaXMucHJlc3NNb3ZlLmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KX10aGlzLnRvdWNoTW92ZS5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCksdGhpcy5fY2FuY2VsTG9uZ1RhcCgpLHRoaXMueDI9bix0aGlzLnkyPXMsaT4xJiZ0LnByZXZlbnREZWZhdWx0KCl9fX0se2tleTpcImVuZFwiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKHQuY2hhbmdlZFRvdWNoZXMpe3RoaXMuX2NhbmNlbExvbmdUYXAoKTt2YXIgZT10aGlzO3QudG91Y2hlcy5sZW5ndGg8MiYmKHRoaXMubXVsdGlwb2ludEVuZC5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCksdGhpcy5zeDI9dGhpcy5zeTI9bnVsbCksdGhpcy54MiYmTWF0aC5hYnModGhpcy54MS10aGlzLngyKT4zMHx8dGhpcy55MiYmTWF0aC5hYnModGhpcy55MS10aGlzLnkyKT4zMD8odC5kaXJlY3Rpb249dGhpcy5fc3dpcGVEaXJlY3Rpb24odGhpcy54MSx0aGlzLngyLHRoaXMueTEsdGhpcy55MiksdGhpcy5zd2lwZVRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2Uuc3dpcGUuZGlzcGF0Y2godCxlLmVsZW1lbnQpfSwwKSk6KHRoaXMudGFwVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5fcHJldmVudFRhcHx8ZS50YXAuZGlzcGF0Y2godCxlLmVsZW1lbnQpLGUuaXNEb3VibGVUYXAmJihlLmRvdWJsZVRhcC5kaXNwYXRjaCh0LGUuZWxlbWVudCksZS5pc0RvdWJsZVRhcD0hMSl9LDApLGUuaXNEb3VibGVUYXB8fChlLnNpbmdsZVRhcFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2Uuc2luZ2xlVGFwLmRpc3BhdGNoKHQsZS5lbGVtZW50KX0sMjUwKSkpLHRoaXMudG91Y2hFbmQuZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpLHRoaXMucHJlVi54PTAsdGhpcy5wcmVWLnk9MCx0aGlzLnpvb209MSx0aGlzLnBpbmNoU3RhcnRMZW49bnVsbCx0aGlzLngxPXRoaXMueDI9dGhpcy55MT10aGlzLnkyPW51bGx9fX0se2tleTpcImNhbmNlbEFsbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fcHJldmVudFRhcD0hMCxjbGVhclRpbWVvdXQodGhpcy5zaW5nbGVUYXBUaW1lb3V0KSxjbGVhclRpbWVvdXQodGhpcy50YXBUaW1lb3V0KSxjbGVhclRpbWVvdXQodGhpcy5sb25nVGFwVGltZW91dCksY2xlYXJUaW1lb3V0KHRoaXMuc3dpcGVUaW1lb3V0KX19LHtrZXk6XCJjYW5jZWxcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLmNhbmNlbEFsbCgpLHRoaXMudG91Y2hDYW5jZWwuZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpfX0se2tleTpcIl9jYW5jZWxMb25nVGFwXCIsdmFsdWU6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5sb25nVGFwVGltZW91dCl9fSx7a2V5OlwiX2NhbmNlbFNpbmdsZVRhcFwiLHZhbHVlOmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuc2luZ2xlVGFwVGltZW91dCl9fSx7a2V5OlwiX3N3aXBlRGlyZWN0aW9uXCIsdmFsdWU6ZnVuY3Rpb24odCxlLGksbil7cmV0dXJuIE1hdGguYWJzKHQtZSk+PU1hdGguYWJzKGktbik/dC1lPjA/XCJMZWZ0XCI6XCJSaWdodFwiOmktbj4wP1wiVXBcIjpcIkRvd25cIn19LHtrZXk6XCJvblwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dGhpc1t0XSYmdGhpc1t0XS5hZGQoZSl9fSx7a2V5Olwib2ZmXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt0aGlzW3RdJiZ0aGlzW3RdLmRlbChlKX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zaW5nbGVUYXBUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy5zaW5nbGVUYXBUaW1lb3V0KSx0aGlzLnRhcFRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLnRhcFRpbWVvdXQpLHRoaXMubG9uZ1RhcFRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLmxvbmdUYXBUaW1lb3V0KSx0aGlzLnN3aXBlVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMuc3dpcGVUaW1lb3V0KSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnN0YXJ0KSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMubW92ZSksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMuZW5kKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsdGhpcy5jYW5jZWwpLHRoaXMucm90YXRlLmRlbCgpLHRoaXMudG91Y2hTdGFydC5kZWwoKSx0aGlzLm11bHRpcG9pbnRTdGFydC5kZWwoKSx0aGlzLm11bHRpcG9pbnRFbmQuZGVsKCksdGhpcy5waW5jaC5kZWwoKSx0aGlzLnN3aXBlLmRlbCgpLHRoaXMudGFwLmRlbCgpLHRoaXMuZG91YmxlVGFwLmRlbCgpLHRoaXMubG9uZ1RhcC5kZWwoKSx0aGlzLnNpbmdsZVRhcC5kZWwoKSx0aGlzLnByZXNzTW92ZS5kZWwoKSx0aGlzLnR3b0ZpbmdlclByZXNzTW92ZS5kZWwoKSx0aGlzLnRvdWNoTW92ZS5kZWwoKSx0aGlzLnRvdWNoRW5kLmRlbCgpLHRoaXMudG91Y2hDYW5jZWwuZGVsKCksdGhpcy5wcmVWPXRoaXMucGluY2hTdGFydExlbj10aGlzLnpvb209dGhpcy5pc0RvdWJsZVRhcD10aGlzLmRlbHRhPXRoaXMubGFzdD10aGlzLm5vdz10aGlzLnRhcFRpbWVvdXQ9dGhpcy5zaW5nbGVUYXBUaW1lb3V0PXRoaXMubG9uZ1RhcFRpbWVvdXQ9dGhpcy5zd2lwZVRpbWVvdXQ9dGhpcy54MT10aGlzLngyPXRoaXMueTE9dGhpcy55Mj10aGlzLnByZVRhcFBvc2l0aW9uPXRoaXMucm90YXRlPXRoaXMudG91Y2hTdGFydD10aGlzLm11bHRpcG9pbnRTdGFydD10aGlzLm11bHRpcG9pbnRFbmQ9dGhpcy5waW5jaD10aGlzLnN3aXBlPXRoaXMudGFwPXRoaXMuZG91YmxlVGFwPXRoaXMubG9uZ1RhcD10aGlzLnNpbmdsZVRhcD10aGlzLnByZXNzTW92ZT10aGlzLnRvdWNoTW92ZT10aGlzLnRvdWNoRW5kPXRoaXMudG91Y2hDYW5jZWw9dGhpcy50d29GaW5nZXJQcmVzc01vdmU9bnVsbCx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMuX2NhbmNlbEFsbEhhbmRsZXIpLG51bGx9fV0pLHR9KCksaD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoaSxuKXt2YXIgcz10aGlzLG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7aWYoZSh0aGlzLHQpLHRoaXMuaW1nPWksdGhpcy5zbGlkZT1uLHRoaXMub25jbG9zZT1vLHRoaXMuaW1nLnNldFpvb21FdmVudHMpcmV0dXJuITE7dGhpcy5hY3RpdmU9ITEsdGhpcy56b29tZWRJbj0hMSx0aGlzLmRyYWdnaW5nPSExLHRoaXMuY3VycmVudFg9bnVsbCx0aGlzLmN1cnJlbnRZPW51bGwsdGhpcy5pbml0aWFsWD1udWxsLHRoaXMuaW5pdGlhbFk9bnVsbCx0aGlzLnhPZmZzZXQ9MCx0aGlzLnlPZmZzZXQ9MCx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZnVuY3Rpb24odCl7cmV0dXJuIHMuZHJhZ1N0YXJ0KHQpfSwhMSksdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixmdW5jdGlvbih0KXtyZXR1cm4gcy5kcmFnRW5kKHQpfSwhMSksdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGZ1bmN0aW9uKHQpe3JldHVybiBzLmRyYWcodCl9LCExKSx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbih0KXtpZighcy56b29tZWRJbilyZXR1cm4gcy56b29tSW4oKTtzLnpvb21lZEluJiYhcy5kcmFnZ2luZyYmcy56b29tT3V0KCl9LCExKSx0aGlzLmltZy5zZXRab29tRXZlbnRzPSEwfXJldHVybiBuKHQsW3trZXk6XCJ6b29tSW5cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMud2lkb3dXaWR0aCgpO2lmKCEodGhpcy56b29tZWRJbnx8dDw9NzY4KSl7dmFyIGU9dGhpcy5pbWc7aWYoZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlXCIsZS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSksZS5zdHlsZS5tYXhXaWR0aD1lLm5hdHVyYWxXaWR0aCtcInB4XCIsZS5zdHlsZS5tYXhIZWlnaHQ9ZS5uYXR1cmFsSGVpZ2h0K1wicHhcIixlLm5hdHVyYWxXaWR0aD50KXt2YXIgaT10LzItZS5uYXR1cmFsV2lkdGgvMjt0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLmltZy5wYXJlbnROb2RlLGksMCl9dGhpcy5zbGlkZS5jbGFzc0xpc3QuYWRkKFwiem9vbWVkXCIpLHRoaXMuem9vbWVkSW49ITB9fX0se2tleTpcInpvb21PdXRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaW1nLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIlwiKSx0aGlzLmltZy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLHRoaXMuaW1nLmdldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVcIikpLHRoaXMuc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcInpvb21lZFwiKSx0aGlzLnpvb21lZEluPSExLHRoaXMuY3VycmVudFg9bnVsbCx0aGlzLmN1cnJlbnRZPW51bGwsdGhpcy5pbml0aWFsWD1udWxsLHRoaXMuaW5pdGlhbFk9bnVsbCx0aGlzLnhPZmZzZXQ9MCx0aGlzLnlPZmZzZXQ9MCx0aGlzLm9uY2xvc2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub25jbG9zZSYmdGhpcy5vbmNsb3NlKCl9fSx7a2V5OlwiZHJhZ1N0YXJ0XCIsdmFsdWU6ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuem9vbWVkSW4/KFwidG91Y2hzdGFydFwiPT09dC50eXBlPyh0aGlzLmluaXRpYWxYPXQudG91Y2hlc1swXS5jbGllbnRYLXRoaXMueE9mZnNldCx0aGlzLmluaXRpYWxZPXQudG91Y2hlc1swXS5jbGllbnRZLXRoaXMueU9mZnNldCk6KHRoaXMuaW5pdGlhbFg9dC5jbGllbnRYLXRoaXMueE9mZnNldCx0aGlzLmluaXRpYWxZPXQuY2xpZW50WS10aGlzLnlPZmZzZXQpLHQudGFyZ2V0PT09dGhpcy5pbWcmJih0aGlzLmFjdGl2ZT0hMCx0aGlzLmltZy5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIikpKTp0aGlzLmFjdGl2ZT0hMX19LHtrZXk6XCJkcmFnRW5kXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt0LnByZXZlbnREZWZhdWx0KCksdGhpcy5pbml0aWFsWD10aGlzLmN1cnJlbnRYLHRoaXMuaW5pdGlhbFk9dGhpcy5jdXJyZW50WSx0aGlzLmFjdGl2ZT0hMSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5kcmFnZ2luZz0hMSxlLmltZy5pc0RyYWdnaW5nPSExLGUuaW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnZ2luZ1wiKX0sMTAwKX19LHtrZXk6XCJkcmFnXCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5hY3RpdmUmJih0LnByZXZlbnREZWZhdWx0KCksXCJ0b3VjaG1vdmVcIj09PXQudHlwZT8odGhpcy5jdXJyZW50WD10LnRvdWNoZXNbMF0uY2xpZW50WC10aGlzLmluaXRpYWxYLHRoaXMuY3VycmVudFk9dC50b3VjaGVzWzBdLmNsaWVudFktdGhpcy5pbml0aWFsWSk6KHRoaXMuY3VycmVudFg9dC5jbGllbnRYLXRoaXMuaW5pdGlhbFgsdGhpcy5jdXJyZW50WT10LmNsaWVudFktdGhpcy5pbml0aWFsWSksdGhpcy54T2Zmc2V0PXRoaXMuY3VycmVudFgsdGhpcy55T2Zmc2V0PXRoaXMuY3VycmVudFksdGhpcy5pbWcuaXNEcmFnZ2luZz0hMCx0aGlzLmRyYWdnaW5nPSEwLHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMuaW1nLHRoaXMuY3VycmVudFgsdGhpcy5jdXJyZW50WSkpfX0se2tleTpcIm9uTW92ZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKHRoaXMuem9vbWVkSW4pe3ZhciBlPXQuY2xpZW50WC10aGlzLmltZy5uYXR1cmFsV2lkdGgvMixpPXQuY2xpZW50WS10aGlzLmltZy5uYXR1cmFsSGVpZ2h0LzI7dGhpcy5zZXRUcmFuc2xhdGUodGhpcy5pbWcsZSxpKX19fSx7a2V5Olwic2V0VHJhbnNsYXRlXCIsdmFsdWU6ZnVuY3Rpb24odCxlLGkpe3Quc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIrZStcInB4LCBcIitpK1wicHgsIDApXCJ9fSx7a2V5Olwid2lkb3dXaWR0aFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5pbm5lcldpZHRofHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGh8fGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGh9fV0pLHR9KCksdT1uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBhZCl8KGlQaG9uZSl8KGlQb2QpfChBbmRyb2lkKXwoUGxheUJvb2spfChCQjEwKXwoQmxhY2tCZXJyeSl8KE9wZXJhIE1pbmkpfChJRU1vYmlsZSl8KHdlYk9TKXwoTWVlR28pL2kpLGQ9bnVsbCE9PXV8fHZvaWQgMCE9PWRvY3VtZW50LmNyZWF0ZVRvdWNofHxcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHxcIm9ubXNnZXN0dXJlY2hhbmdlXCJpbiB3aW5kb3d8fG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzLGc9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLHA9ZnVuY3Rpb24oKXt2YXIgdCxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKSxpPXt0cmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLE9UcmFuc2l0aW9uOlwib1RyYW5zaXRpb25FbmRcIixNb3pUcmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLFdlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9O2Zvcih0IGluIGkpaWYodm9pZCAwIT09ZS5zdHlsZVt0XSlyZXR1cm4gaVt0XX0oKSx2PWZ1bmN0aW9uKCl7dmFyIHQsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmFrZWVsZW1lbnRcIiksaT17YW5pbWF0aW9uOlwiYW5pbWF0aW9uZW5kXCIsT0FuaW1hdGlvbjpcIm9BbmltYXRpb25FbmRcIixNb3pBbmltYXRpb246XCJhbmltYXRpb25lbmRcIixXZWJraXRBbmltYXRpb246XCJ3ZWJraXRBbmltYXRpb25FbmRcIn07Zm9yKHQgaW4gaSlpZih2b2lkIDAhPT1lLnN0eWxlW3RdKXJldHVybiBpW3RdfSgpLGY9RGF0ZS5ub3coKSxtPXt9LHk9e3NlbGVjdG9yOlwiZ2xpZ2h0Ym94XCIsZWxlbWVudHM6bnVsbCxza2luOlwiY2xlYW5cIixjbG9zZUJ1dHRvbjohMCxzdGFydEF0Om51bGwsYXV0b3BsYXlWaWRlb3M6ITAsZGVzY1Bvc2l0aW9uOlwiYm90dG9tXCIsd2lkdGg6OTAwLGhlaWdodDo1MDYsdmlkZW9zV2lkdGg6OTYwLGJlZm9yZVNsaWRlQ2hhbmdlOm51bGwsYWZ0ZXJTbGlkZUNoYW5nZTpudWxsLGJlZm9yZVNsaWRlTG9hZDpudWxsLGFmdGVyU2xpZGVMb2FkOm51bGwsb25PcGVuOm51bGwsb25DbG9zZTpudWxsLGxvb3BBdEVuZDohMSx0b3VjaE5hdmlnYXRpb246ITAsa2V5Ym9hcmROYXZpZ2F0aW9uOiEwLGNsb3NlT25PdXRzaWRlQ2xpY2s6ITAscGx5cjp7Y3NzOlwiaHR0cHM6Ly9jZG4ucGx5ci5pby8zLjUuNi9wbHlyLmNzc1wiLGpzOlwiaHR0cHM6Ly9jZG4ucGx5ci5pby8zLjUuNi9wbHlyLmpzXCIscmF0aW86XCIxNjo5XCIsY29uZmlnOnt5b3V0dWJlOntub0Nvb2tpZTohMCxyZWw6MCxzaG93aW5mbzowLGl2X2xvYWRfcG9saWN5OjN9LHZpbWVvOntieWxpbmU6ITEscG9ydHJhaXQ6ITEsdGl0bGU6ITEsdHJhbnNwYXJlbnQ6ITF9fX0sb3BlbkVmZmVjdDpcInpvb21JblwiLGNsb3NlRWZmZWN0Olwiem9vbU91dFwiLHNsaWRlRWZmZWN0Olwic2xpZGVcIixtb3JlVGV4dDpcIlNlZSBtb3JlXCIsbW9yZUxlbmd0aDo2MCxsaWdodGJveEh0bWw6XCJcIixjc3NFZmVjdHM6e2ZhZGU6e2luOlwiZmFkZUluXCIsb3V0OlwiZmFkZU91dFwifSx6b29tOntpbjpcInpvb21JblwiLG91dDpcInpvb21PdXRcIn0sc2xpZGU6e2luOlwic2xpZGVJblJpZ2h0XCIsb3V0Olwic2xpZGVPdXRMZWZ0XCJ9LHNsaWRlX2JhY2s6e2luOlwic2xpZGVJbkxlZnRcIixvdXQ6XCJzbGlkZU91dFJpZ2h0XCJ9fSxzdmc6e2Nsb3NlOic8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxnPjxnPjxwYXRoIGQ9XCJNNTA1Ljk0Myw2LjA1OGMtOC4wNzctOC4wNzctMjEuMTcyLTguMDc3LTI5LjI0OSwwTDYuMDU4LDQ3Ni42OTNjLTguMDc3LDguMDc3LTguMDc3LDIxLjE3MiwwLDI5LjI0OUMxMC4wOTYsNTA5Ljk4MiwxNS4zOSw1MTIsMjAuNjgzLDUxMmM1LjI5MywwLDEwLjU4Ni0yLjAxOSwxNC42MjUtNi4wNTlMNTA1Ljk0MywzNS4zMDZDNTE0LjAxOSwyNy4yMyw1MTQuMDE5LDE0LjEzNSw1MDUuOTQzLDYuMDU4elwiLz48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XCJNNTA1Ljk0Miw0NzYuNjk0TDM1LjMwNiw2LjA1OWMtOC4wNzYtOC4wNzctMjEuMTcyLTguMDc3LTI5LjI0OCwwYy04LjA3Nyw4LjA3Ni04LjA3NywyMS4xNzEsMCwyOS4yNDhsNDcwLjYzNiw0NzAuNjM2YzQuMDM4LDQuMDM5LDkuMzMyLDYuMDU4LDE0LjYyNSw2LjA1OGM1LjI5MywwLDEwLjU4Ny0yLjAxOSwxNC42MjQtNi4wNTdDNTE0LjAxOCw0OTcuODY2LDUxNC4wMTgsNDg0Ljc3MSw1MDUuOTQyLDQ3Ni42OTR6XCIvPjwvZz48L2c+PC9zdmc+JyxuZXh0Oic8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNDc3LjE3NSA0NzcuMTc1XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj4gPGc+PHBhdGggZD1cIk0zNjAuNzMxLDIyOS4wNzVsLTIyNS4xLTIyNS4xYy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMHMtNS4zLDEzLjgsMCwxOS4xbDIxNS41LDIxNS41bC0yMTUuNSwyMTUuNWMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjFjMi42LDIuNiw2LjEsNCw5LjUsNGMzLjQsMCw2LjktMS4zLDkuNS00bDIyNS4xLTIyNS4xQzM2NS45MzEsMjQyLjg3NSwzNjUuOTMxLDIzNC4yNzUsMzYwLjczMSwyMjkuMDc1elwiLz48L2c+PC9zdmc+JyxwcmV2Oic8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNDc3LjE3NSA0NzcuMTc1XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48cGF0aCBkPVwiTTE0NS4xODgsMjM4LjU3NWwyMTUuNS0yMTUuNWM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMXMtMTMuOC01LjMtMTkuMSwwbC0yMjUuMSwyMjUuMWMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjFsMjI1LjEsMjI1YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMUwxNDUuMTg4LDIzOC41NzV6XCIvPjwvZz48L3N2Zz4nfX07eS5zbGlkZUh0bWw9JzxkaXYgY2xhc3M9XCJnc2xpZGVcIj5cXG4gICAgPGRpdiBjbGFzcz1cImdzbGlkZS1pbm5lci1jb250ZW50XCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2lubmVyLWNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnc2xpZGUtbWVkaWFcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3NsaWRlLWRlc2NyaXB0aW9uXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZGVzYy1pbm5lclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZ3NsaWRlLXRpdGxlXCI+PC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnc2xpZGUtZGVzY1wiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj4nO2Z1bmN0aW9uIGIoKXt2YXIgdD17fSxlPSExLGk9MCxuPWFyZ3VtZW50cy5sZW5ndGg7XCJbb2JqZWN0IEJvb2xlYW5dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzWzBdKSYmKGU9YXJndW1lbnRzWzBdLGkrKyk7Zm9yKHZhciBzPWZ1bmN0aW9uKGkpe2Zvcih2YXIgbiBpbiBpKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpLG4pJiYoZSYmXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpW25dKT90W25dPWIoITAsdFtuXSxpW25dKTp0W25dPWlbbl0pfTtpPG47aSsrKXtzKGFyZ3VtZW50c1tpXSl9cmV0dXJuIHR9eS5saWdodGJveEh0bWw9JzxkaXYgaWQ9XCJnbGlnaHRib3gtYm9keVwiIGNsYXNzPVwiZ2xpZ2h0Ym94LWNvbnRhaW5lclwiPlxcbiAgICA8ZGl2IGNsYXNzPVwiZ2xvYWRlciB2aXNpYmxlXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XCJnb3ZlcmxheVwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiZ2NvbnRhaW5lclwiPlxcbiAgICA8ZGl2IGlkPVwiZ2xpZ2h0Ym94LXNsaWRlclwiIGNsYXNzPVwiZ3NsaWRlclwiPjwvZGl2PlxcbiAgICA8YnV0dG9uIGNsYXNzPVwiZ25leHQgZ2J0blwiIHRhYmluZGV4PVwiMFwiPntuZXh0U1ZHfTwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGNsYXNzPVwiZ3ByZXYgZ2J0blwiIHRhYmluZGV4PVwiMVwiPntwcmV2U1ZHfTwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGNsYXNzPVwiZ2Nsb3NlIGdidG5cIiB0YWJpbmRleD1cIjJcIj57Y2xvc2VTVkd9PC9idXR0b24+XFxuPC9kaXY+XFxuPC9kaXY+Jzt2YXIgeD17aXNGdW5jdGlvbjpmdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fSxpc1N0cmluZzpmdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdH0saXNOb2RlOmZ1bmN0aW9uKHQpe3JldHVybiEoIXR8fCF0Lm5vZGVUeXBlfHwxIT10Lm5vZGVUeXBlKX0saXNBcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KX0saXNBcnJheUxpa2U6ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQubGVuZ3RoJiZpc0Zpbml0ZSh0Lmxlbmd0aCl9LGlzT2JqZWN0OmZ1bmN0aW9uKGUpe3JldHVyblwib2JqZWN0XCI9PT10KGUpJiZudWxsIT1lJiYheC5pc0Z1bmN0aW9uKGUpJiYheC5pc0FycmF5KGUpfSxpc05pbDpmdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dH0saGFzOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG51bGwhPT10JiZoYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LHNpemU6ZnVuY3Rpb24odCl7aWYoeC5pc09iamVjdCh0KSl7aWYodC5rZXlzKXJldHVybiB0LmtleXMoKS5sZW5ndGg7dmFyIGU9MDtmb3IodmFyIGkgaW4gdCl4Lmhhcyh0LGkpJiZlKys7cmV0dXJuIGV9cmV0dXJuIHQubGVuZ3RofSxpc051bWJlcjpmdW5jdGlvbih0KXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdCh0KSkmJmlzRmluaXRlKHQpfX07ZnVuY3Rpb24gdyh0LGUpe2lmKCh4LmlzTm9kZSh0KXx8dD09PXdpbmRvd3x8dD09PWRvY3VtZW50KSYmKHQ9W3RdKSx4LmlzQXJyYXlMaWtlKHQpfHx4LmlzT2JqZWN0KHQpfHwodD1bdF0pLDAhPXguc2l6ZSh0KSlpZih4LmlzQXJyYXlMaWtlKHQpJiYheC5pc09iamVjdCh0KSlmb3IodmFyIGk9dC5sZW5ndGgsbj0wO248aSYmITEhPT1lLmNhbGwodFtuXSx0W25dLG4sdCk7bisrKTtlbHNlIGlmKHguaXNPYmplY3QodCkpZm9yKHZhciBzIGluIHQpaWYoeC5oYXModCxzKSYmITE9PT1lLmNhbGwodFtzXSx0W3NdLHMsdCkpYnJlYWt9ZnVuY3Rpb24gUyh0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06bnVsbCxpPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsLG49dFtmXT10W2ZdfHxbXSxzPXthbGw6bixldnQ6bnVsbCxmb3VuZDpudWxsfTtyZXR1cm4gZSYmaSYmeC5zaXplKG4pPjAmJncobixmdW5jdGlvbih0LG4pe2lmKHQuZXZlbnROYW1lPT1lJiZ0LmZuLnRvU3RyaW5nKCk9PWkudG9TdHJpbmcoKSlyZXR1cm4gcy5mb3VuZD0hMCxzLmV2dD1uLCExfSksc31mdW5jdGlvbiBUKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxpPWUub25FbGVtZW50LG49ZS53aXRoQ2FsbGJhY2sscz1lLmF2b2lkRHVwbGljYXRlLG89dm9pZCAwPT09c3x8cyxsPWUub25jZSxyPXZvaWQgMCE9PWwmJmwsYT1lLnVzZUNhcHR1cmUsYz12b2lkIDAhPT1hJiZhLGg9YXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDAsdT1pfHxbXTtmdW5jdGlvbiBkKHQpe3guaXNGdW5jdGlvbihuKSYmbi5jYWxsKGgsdCx0aGlzKSxyJiZkLmRlc3Ryb3koKX1yZXR1cm4geC5pc1N0cmluZyh1KSYmKHU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh1KSksZC5kZXN0cm95PWZ1bmN0aW9uKCl7dyh1LGZ1bmN0aW9uKGUpe3ZhciBpPVMoZSx0LGQpO2kuZm91bmQmJmkuYWxsLnNwbGljZShpLmV2dCwxKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXImJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LGQsYyl9KX0sdyh1LGZ1bmN0aW9uKGUpe3ZhciBpPVMoZSx0LGQpOyhlLmFkZEV2ZW50TGlzdGVuZXImJm8mJiFpLmZvdW5kfHwhbykmJihlLmFkZEV2ZW50TGlzdGVuZXIodCxkLGMpLGkuYWxsLnB1c2goe2V2ZW50TmFtZTp0LGZuOmR9KSl9KSxkfWZ1bmN0aW9uIGsodCxlKXt3KGUuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUpe3JldHVybiB0LmNsYXNzTGlzdC5hZGQoZSl9KX1mdW5jdGlvbiBFKHQsZSl7dyhlLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlKXtyZXR1cm4gdC5jbGFzc0xpc3QucmVtb3ZlKGUpfSl9ZnVuY3Rpb24gQSh0LGUpe3JldHVybiB0LmNsYXNzTGlzdC5jb250YWlucyhlKX1mdW5jdGlvbiBDKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcIlwiLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtpZighdHx8XCJcIj09PWUpcmV0dXJuITE7aWYoXCJub25lXCI9PWUpcmV0dXJuIHguaXNGdW5jdGlvbihpKSYmaSgpLCExO3ZhciBuPWUuc3BsaXQoXCIgXCIpO3cobixmdW5jdGlvbihlKXtrKHQsXCJnXCIrZSl9KSxUKHYse29uRWxlbWVudDp0LGF2b2lkRHVwbGljYXRlOiExLG9uY2U6ITAsd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsZSl7dyhuLGZ1bmN0aW9uKHQpe0UoZSxcImdcIit0KX0pLHguaXNGdW5jdGlvbihpKSYmaSgpfX0pfWZ1bmN0aW9uIEwodCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmb3IoaS5pbm5lckhUTUw9dDtpLmZpcnN0Q2hpbGQ7KWUuYXBwZW5kQ2hpbGQoaS5maXJzdENoaWxkKTtyZXR1cm4gZX1mdW5jdGlvbiBNKHQsZSl7Zm9yKDt0IT09ZG9jdW1lbnQuYm9keTspe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKHQ9dC5wYXJlbnRFbGVtZW50KS5tYXRjaGVzP3QubWF0Y2hlcyhlKTp0Lm1zTWF0Y2hlc1NlbGVjdG9yKGUpKXJldHVybiB0fX1mdW5jdGlvbiBPKHQpe3Quc3R5bGUuZGlzcGxheT1cImJsb2NrXCJ9ZnVuY3Rpb24geih0KXt0LnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9ZnVuY3Rpb24gcSgpe3JldHVybnt3aWR0aDp3aW5kb3cuaW5uZXJXaWR0aHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRofHxkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLGhlaWdodDp3aW5kb3cuaW5uZXJIZWlnaHR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHR8fGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0fX1mdW5jdGlvbiBOKHQpe2lmKEEodC50YXJnZXQsXCJwbHlyLS1odG1sNVwiKSl7dmFyIGU9TSh0LnRhcmdldCxcIi5nc2xpZGUtbWVkaWFcIik7XCJlbnRlcmZ1bGxzY3JlZW5cIj09dC50eXBlJiZrKGUsXCJmdWxsc2NyZWVuXCIpLFwiZXhpdGZ1bGxzY3JlZW5cIj09dC50eXBlJiZFKGUsXCJmdWxsc2NyZWVuXCIpfX12YXIgST1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsLGU9YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsaT17aHJlZjpcIlwiLHRpdGxlOlwiXCIsdHlwZTpcIlwiLGRlc2NyaXB0aW9uOlwiXCIsZGVzY1Bvc2l0aW9uOmUuZGVzY1Bvc2l0aW9uLGVmZmVjdDpcIlwiLHdpZHRoOlwiXCIsaGVpZ2h0OlwiXCIsbm9kZTp0fTtpZih4LmlzT2JqZWN0KHQpJiYheC5pc05vZGUodCkpcmV0dXJuIGIoaSx0KTt2YXIgbj1cIlwiLHM9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdsaWdodGJveFwiKSxvPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtpZihcImFcIj09PW8mJihuPXQuaHJlZiksXCJpbWdcIj09PW8mJihuPXQuc3JjKSxpLmhyZWY9bix3KGksZnVuY3Rpb24obixzKXt4LmhhcyhlLHMpJiZcIndpZHRoXCIhPT1zJiYoaVtzXT1lW3NdKTt2YXIgbz10LmRhdGFzZXRbc107eC5pc05pbChvKXx8KGlbc109byl9KSxpLnR5cGV8fChpLnR5cGU9VyhuKSkseC5pc05pbChzKSl7aWYoXCJhXCI9PW8pe3ZhciBsPXQudGl0bGU7eC5pc05pbChsKXx8XCJcIj09PWx8fChpLnRpdGxlPWwpfWlmKFwiaW1nXCI9PW8pe3ZhciByPXQuYWx0O3guaXNOaWwocil8fFwiXCI9PT1yfHwoaS50aXRsZT1yKX12YXIgYT10LmdldEF0dHJpYnV0ZShcImRhdGEtZGVzY3JpcHRpb25cIik7eC5pc05pbChhKXx8XCJcIj09PWF8fChpLmRlc2NyaXB0aW9uPWEpfWVsc2V7dmFyIGM9W107dyhpLGZ1bmN0aW9uKHQsZSl7Yy5wdXNoKFwiO1xcXFxzP1wiK2UpfSksYz1jLmpvaW4oXCJcXFxccz86fFwiKSxcIlwiIT09cy50cmltKCkmJncoaSxmdW5jdGlvbih0LGUpe3ZhciBuPXMsbz1uZXcgUmVnRXhwKFwicz9cIitlK1wicz86cz8oLio/KShcIitjK1wicz86fCQpXCIpLGw9bi5tYXRjaChvKTtpZihsJiZsLmxlbmd0aCYmbFsxXSl7dmFyIHI9bFsxXS50cmltKCkucmVwbGFjZSgvO1xccyokLyxcIlwiKTtpW2VdPXJ9fSl9aWYoaS5kZXNjcmlwdGlvbiYmXCIuXCI9PWkuZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsMSkmJmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaS5kZXNjcmlwdGlvbikpaS5kZXNjcmlwdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGkuZGVzY3JpcHRpb24pLmlubmVySFRNTDtlbHNle3ZhciBoPXQucXVlcnlTZWxlY3RvcihcIi5nbGlnaHRib3gtZGVzY1wiKTtoJiYoaS5kZXNjcmlwdGlvbj1oLmlubmVySFRNTCl9dmFyIHU9XCJ2aWRlb1wiPT1pLnR5cGU/ZS52aWRlb3NXaWR0aDplLndpZHRoLGQ9ZS5oZWlnaHQ7cmV0dXJuIGkud2lkdGg9eC5oYXMoaSxcIndpZHRoXCIpJiZcIlwiIT09aS53aWR0aD9pLndpZHRoOnUsaS5oZWlnaHQ9eC5oYXMoaSxcImhlaWdodFwiKSYmXCJcIiE9PWkuaGVpZ2h0P2kuaGVpZ2h0OmQsaX0sRD1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbCxpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl07aWYoQShlLFwibG9hZGVkXCIpKXJldHVybiExO3guaXNGdW5jdGlvbih0aGlzLnNldHRpbmdzLmJlZm9yZVNsaWRlTG9hZCkmJnRoaXMuc2V0dGluZ3MuYmVmb3JlU2xpZGVMb2FkKGUsaSk7dmFyIHM9aS50eXBlLG89aS5kZXNjUG9zaXRpb24sbD1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLHI9ZS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS10aXRsZVwiKSxhPWUucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtZGVzY1wiKSxjPWUucXVlcnlTZWxlY3RvcihcIi5nZGVzYy1pbm5lclwiKSxkPW47aWYoeC5pc0Z1bmN0aW9uKHRoaXMuc2V0dGluZ3MuYWZ0ZXJTbGlkZUxvYWQpJiYoZD1mdW5jdGlvbigpe3guaXNGdW5jdGlvbihuKSYmbigpLHQuc2V0dGluZ3MuYWZ0ZXJTbGlkZUxvYWQoZSxpKX0pLFwiXCI9PWkudGl0bGUmJlwiXCI9PWkuZGVzY3JpcHRpb24/YyYmYy5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYy5wYXJlbnROb2RlKToociYmXCJcIiE9PWkudGl0bGU/ci5pbm5lckhUTUw9aS50aXRsZTpyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQociksYSYmXCJcIiE9PWkuZGVzY3JpcHRpb24/dSYmdGhpcy5zZXR0aW5ncy5tb3JlTGVuZ3RoPjA/KGkuc21hbGxEZXNjcmlwdGlvbj1HKGkuZGVzY3JpcHRpb24sdGhpcy5zZXR0aW5ncy5tb3JlTGVuZ3RoLHRoaXMuc2V0dGluZ3MubW9yZVRleHQpLGEuaW5uZXJIVE1MPWkuc21hbGxEZXNjcmlwdGlvbixaLmFwcGx5KHRoaXMsW2EsaV0pKTphLmlubmVySFRNTD1pLmRlc2NyaXB0aW9uOmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKSxrKGwucGFyZW50Tm9kZSxcImRlc2MtXCIuY29uY2F0KG8pKSxrKGMucGFyZW50Tm9kZSxcImRlc2NyaXB0aW9uLVwiLmNvbmNhdChvKSkpLGsobCxcImdzbGlkZS1cIi5jb25jYXQocykpLGsoZSxcImxvYWRlZFwiKSxcInZpZGVvXCI9PT1zKXJldHVybiBrKGwucGFyZW50Tm9kZSxcImd2aWRlby1jb250YWluZXJcIiksbC5pbnNlcnRCZWZvcmUoTCgnPGRpdiBjbGFzcz1cImd2aWRlby13cmFwcGVyXCI+PC9kaXY+JyksbC5maXJzdENoaWxkKSx2b2lkIFguYXBwbHkodGhpcyxbZSxpLGRdKTtpZihcImV4dGVybmFsXCI9PT1zKXt2YXIgZz1ZKHt1cmw6aS5ocmVmLHdpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0LGNhbGxiYWNrOmR9KTtyZXR1cm4gbC5wYXJlbnROb2RlLnN0eWxlLm1heFdpZHRoPVwiXCIuY29uY2F0KGkud2lkdGgsXCJweFwiKSx2b2lkIGwuYXBwZW5kQ2hpbGQoZyl9aWYoXCJpbmxpbmVcIiE9PXMpe2lmKFwiaW1hZ2VcIj09PXMpe3ZhciBwPW5ldyBJbWFnZTtyZXR1cm4gcC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7IXUmJnAubmF0dXJhbFdpZHRoPnAub2Zmc2V0V2lkdGgmJihrKHAsXCJ6b29tYWJsZVwiKSxuZXcgaChwLGUsZnVuY3Rpb24oKXt0LnJlc2l6ZShlKX0pKSx4LmlzRnVuY3Rpb24oZCkmJmQoKX0sITEpLHAuc3JjPWkuaHJlZix2b2lkIGwuaW5zZXJ0QmVmb3JlKHAsbC5maXJzdENoaWxkKX14LmlzRnVuY3Rpb24oZCkmJmQoKX1lbHNlIEYuYXBwbHkodGhpcyxbZSxpLGRdKX07ZnVuY3Rpb24gWCh0LGUsaSl7dmFyIG49dGhpcyxzPVwiZ3ZpZGVvXCIrZS5pbmRleCxvPXQucXVlcnlTZWxlY3RvcihcIi5ndmlkZW8td3JhcHBlclwiKTtCKHRoaXMuc2V0dGluZ3MucGx5ci5jc3MpO3ZhciBsPWUuaHJlZixyPWxvY2F0aW9uLnByb3RvY29sLnJlcGxhY2UoXCI6XCIsXCJcIiksYT1cIlwiLGM9XCJcIixoPSExO1wiZmlsZVwiPT1yJiYocj1cImh0dHBcIiksby5wYXJlbnROb2RlLnN0eWxlLm1heFdpZHRoPVwiXCIuY29uY2F0KGUud2lkdGgsXCJweFwiKSxCKHRoaXMuc2V0dGluZ3MucGx5ci5qcyxcIlBseXJcIixmdW5jdGlvbigpe2lmKGwubWF0Y2goL3ZpbWVvXFwuY29tXFwvKFswLTldKikvKSl7dmFyIHQ9L3ZpbWVvLipcXC8oXFxkKykvaS5leGVjKGwpO2E9XCJ2aW1lb1wiLGM9dFsxXX1pZihsLm1hdGNoKC8oeW91dHViZVxcLmNvbXx5b3V0dWJlLW5vY29va2llXFwuY29tKVxcL3dhdGNoXFw/dj0oW2EtekEtWjAtOVxcLV9dKykvKXx8bC5tYXRjaCgveW91dHVcXC5iZVxcLyhbYS16QS1aMC05XFwtX10rKS8pfHxsLm1hdGNoKC8oeW91dHViZVxcLmNvbXx5b3V0dWJlLW5vY29va2llXFwuY29tKVxcL2VtYmVkXFwvKFthLXpBLVowLTlcXC1fXSspLykpe3ZhciByPWZ1bmN0aW9uKHQpe3ZhciBlPVwiXCI7ZT12b2lkIDAhPT0odD10LnJlcGxhY2UoLyg+fDwpL2dpLFwiXCIpLnNwbGl0KC8odmlcXC98dj18XFwvdlxcL3x5b3V0dVxcLmJlXFwvfFxcL2VtYmVkXFwvKS8pKVsyXT8oZT10WzJdLnNwbGl0KC9bXjAtOWEtel9cXC1dL2kpKVswXTp0O3JldHVybiBlfShsKTthPVwieW91dHViZVwiLGM9cn1pZihudWxsIT09bC5tYXRjaCgvXFwuKG1wNHxvZ2d8d2VibSkkLykpe2E9XCJsb2NhbFwiO3ZhciB1PSc8dmlkZW8gaWQ9XCInK3MrJ1wiICc7dSs9J3N0eWxlPVwiYmFja2dyb3VuZDojMDAwOyBtYXgtd2lkdGg6ICcuY29uY2F0KGUud2lkdGgsJ3B4O1wiICcpLHUrPSdwcmVsb2FkPVwibWV0YWRhdGFcIiAnLHUrPSd4LXdlYmtpdC1haXJwbGF5PVwiYWxsb3dcIiAnLHUrPSd3ZWJraXQtcGxheXNpbmxpbmU9XCJcIiAnLHUrPVwiY29udHJvbHMgXCIsdSs9J2NsYXNzPVwiZ3ZpZGVvLWxvY2FsXCI+Jzt2YXIgZD1sLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIuXCIpLnBvcCgpLGc9e21wNDpcIlwiLG9nZzpcIlwiLHdlYm06XCJcIn07Zm9yKHZhciBwIGluIGdbZF09bCxnKWlmKGcuaGFzT3duUHJvcGVydHkocCkpe3ZhciB2PWdbcF07ZS5oYXNPd25Qcm9wZXJ0eShwKSYmKHY9ZVtwXSksXCJcIiE9PXYmJih1Kz0nPHNvdXJjZSBzcmM9XCInLmNvbmNhdCh2LCdcIiB0eXBlPVwidmlkZW8vJykuY29uY2F0KHAsJ1wiPicpKX1oPUwodSs9XCI8L3ZpZGVvPlwiKX12YXIgZj1ofHxMKCc8ZGl2IGlkPVwiJy5jb25jYXQocywnXCIgZGF0YS1wbHlyLXByb3ZpZGVyPVwiJykuY29uY2F0KGEsJ1wiIGRhdGEtcGx5ci1lbWJlZC1pZD1cIicpLmNvbmNhdChjLCdcIj48L2Rpdj4nKSk7ayhvLFwiXCIuY29uY2F0KGEsXCItdmlkZW8gZ3ZpZGVvXCIpKSxvLmFwcGVuZENoaWxkKGYpLG8uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLHMpO3ZhciB5PXguaGFzKG4uc2V0dGluZ3MucGx5cixcImNvbmZpZ1wiKT9uLnNldHRpbmdzLnBseXIuY29uZmlnOnt9LGI9bmV3IFBseXIoXCIjXCIrcyx5KTtiLm9uKFwicmVhZHlcIixmdW5jdGlvbih0KXt2YXIgZT10LmRldGFpbC5wbHlyO21bc109ZSx4LmlzRnVuY3Rpb24oaSkmJmkoKX0pLGIub24oXCJlbnRlcmZ1bGxzY3JlZW5cIixOKSxiLm9uKFwiZXhpdGZ1bGxzY3JlZW5cIixOKX0pfWZ1bmN0aW9uIFkodCl7dmFyIGU9dC51cmwsaT10LndpZHRoLG49dC5oZWlnaHQscz10LmFsbG93LG89dC5jYWxsYmFjayxsPXQuYXBwZW5kVG8scj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpLGE9d2luZG93LmlubmVyV2lkdGh8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aHx8ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtyZXR1cm4gci5jbGFzc05hbWU9XCJ2aW1lby12aWRlbyBndmlkZW9cIixyLnNyYz1lLG4mJihyLnN0eWxlLmhlaWdodD11JiZhPDc2Nz9cIlwiOlwiXCIuY29uY2F0KG4sXCJweFwiKSksaSYmKHIuc3R5bGUud2lkdGg9XCJcIi5jb25jYXQoaSxcInB4XCIpKSxzJiZyLnNldEF0dHJpYnV0ZShcImFsbG93XCIscyksci5vbmxvYWQ9ZnVuY3Rpb24oKXtrKHIsXCJub2RlLXJlYWR5XCIpLHguaXNGdW5jdGlvbihvKSYmbygpfSxsJiZsLmFwcGVuZENoaWxkKHIpLHJ9ZnVuY3Rpb24gQih0LGUsaSl7aWYoeC5pc05pbCh0KSljb25zb2xlLmVycm9yKFwiSW5qZWN0IHZpZGVvcyBhcGkgZXJyb3JcIik7ZWxzZXt2YXIgbjtpZih4LmlzRnVuY3Rpb24oZSkmJihpPWUsZT0hMSksLTEhPT10LmluZGV4T2YoXCIuY3NzXCIpKXtpZigobj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW2hyZWY9XCInK3QrJ1wiXScpKSYmbi5sZW5ndGg+MClyZXR1cm4gdm9pZCh4LmlzRnVuY3Rpb24oaSkmJmkoKSk7dmFyIHM9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLG89cy5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKSxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO3JldHVybiBsLnJlbD1cInN0eWxlc2hlZXRcIixsLnR5cGU9XCJ0ZXh0L2Nzc1wiLGwuaHJlZj10LGwubWVkaWE9XCJhbGxcIixvP3MuaW5zZXJ0QmVmb3JlKGwsb1swXSk6cy5hcHBlbmRDaGlsZChsKSx2b2lkKHguaXNGdW5jdGlvbihpKSYmaSgpKX1pZigobj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbc3JjPVwiJyt0KydcIl0nKSkmJm4ubGVuZ3RoPjApe2lmKHguaXNGdW5jdGlvbihpKSl7aWYoeC5pc1N0cmluZyhlKSlyZXR1cm4gUChmdW5jdGlvbigpe3JldHVybiB2b2lkIDAhPT13aW5kb3dbZV19LGZ1bmN0aW9uKCl7aSgpfSksITE7aSgpfX1lbHNle3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIsci5zcmM9dCxyLm9ubG9hZD1mdW5jdGlvbigpe2lmKHguaXNGdW5jdGlvbihpKSl7aWYoeC5pc1N0cmluZyhlKSlyZXR1cm4gUChmdW5jdGlvbigpe3JldHVybiB2b2lkIDAhPT13aW5kb3dbZV19LGZ1bmN0aW9uKCl7aSgpfSksITE7aSgpfX0sZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyKX19fWZ1bmN0aW9uIFAodCxlLGksbil7aWYodCgpKWUoKTtlbHNle3ZhciBzO2l8fChpPTEwMCk7dmFyIG89c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt0KCkmJihjbGVhckludGVydmFsKG8pLHMmJmNsZWFyVGltZW91dChzKSxlKCkpfSxpKTtuJiYocz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChvKX0sbikpfX1mdW5jdGlvbiBGKHQsZSxpKXt2YXIgbj10aGlzLHM9dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxvPWUuaHJlZi5zcGxpdChcIiNcIikucG9wKCkudHJpbSgpLGw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobyk7aWYoIWwpcmV0dXJuITE7dmFyIHI9bC5jbG9uZU5vZGUoITApO3Iuc3R5bGUuaGVpZ2h0PXguaXNOdW1iZXIoZS5oZWlnaHQpP1wiXCIuY29uY2F0KGUuaGVpZ2h0LFwicHhcIik6ZS5oZWlnaHQsci5zdHlsZS5tYXhXaWR0aD14LmlzTnVtYmVyKGUud2lkdGgpP1wiXCIuY29uY2F0KGUud2lkdGgsXCJweFwiKTplLndpZHRoLGsocixcImdpbmxpbmVkLWNvbnRlbnRcIikscy5hcHBlbmRDaGlsZChyKSx0aGlzLmV2ZW50c1tcImlubGluZWNsb3NlXCIrb109VChcImNsaWNrXCIse29uRWxlbWVudDpzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3RyaWdnZXItY2xvc2VcIiksd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxuLmNsb3NlKCl9fSkseC5pc0Z1bmN0aW9uKGkpJiZpKCl9dmFyIFc9ZnVuY3Rpb24odCl7dmFyIGU9dDtpZihudWxsIT09KHQ9dC50b0xvd2VyQ2FzZSgpKS5tYXRjaCgvXFwuKGpwZWd8anBnfGdpZnxwbmd8YXBufHdlYnB8c3ZnKSQvKSlyZXR1cm5cImltYWdlXCI7aWYodC5tYXRjaCgvKHlvdXR1YmVcXC5jb218eW91dHViZS1ub2Nvb2tpZVxcLmNvbSlcXC93YXRjaFxcP3Y9KFthLXpBLVowLTlcXC1fXSspLyl8fHQubWF0Y2goL3lvdXR1XFwuYmVcXC8oW2EtekEtWjAtOVxcLV9dKykvKXx8dC5tYXRjaCgvKHlvdXR1YmVcXC5jb218eW91dHViZS1ub2Nvb2tpZVxcLmNvbSlcXC9lbWJlZFxcLyhbYS16QS1aMC05XFwtX10rKS8pKXJldHVyblwidmlkZW9cIjtpZih0Lm1hdGNoKC92aW1lb1xcLmNvbVxcLyhbMC05XSopLykpcmV0dXJuXCJ2aWRlb1wiO2lmKG51bGwhPT10Lm1hdGNoKC9cXC4obXA0fG9nZ3x3ZWJtKSQvKSlyZXR1cm5cInZpZGVvXCI7aWYodC5pbmRleE9mKFwiI1wiKT4tMSYmXCJcIiE9PWUuc3BsaXQoXCIjXCIpLnBvcCgpLnRyaW0oKSlyZXR1cm5cImlubGluZVwiO3JldHVybiB0LmluY2x1ZGVzKFwiZ2FqYXg9dHJ1ZVwiKT9cImFqYXhcIjpcImV4dGVybmFsXCJ9O2Z1bmN0aW9uIF8oKXt2YXIgdD10aGlzO2lmKHRoaXMuZXZlbnRzLmhhc093blByb3BlcnR5KFwia2V5Ym9hcmRcIikpcmV0dXJuITE7dGhpcy5ldmVudHMua2V5Ym9hcmQ9VChcImtleWRvd25cIix7b25FbGVtZW50OndpbmRvdyx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24oZSxpKXt2YXIgbj0oZT1lfHx3aW5kb3cuZXZlbnQpLmtleUNvZGU7aWYoOT09bil7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBvPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2J0blwiKTtpZighb3x8by5sZW5ndGg8PTApcmV0dXJuO3ZhciBsPXMobykuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiBBKHQsXCJmb2N1c2VkXCIpfSk7aWYoIWwubGVuZ3RoKXt2YXIgcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2J0blt0YWJpbmRleD1cIjBcIl0nKTtyZXR1cm4gdm9pZChyJiYoci5mb2N1cygpLGsocixcImZvY3VzZWRcIikpKX1vLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIEUodCxcImZvY3VzZWRcIil9KTt2YXIgYT1sWzBdLmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpO2E9YXx8XCIwXCI7dmFyIGM9cGFyc2VJbnQoYSkrMTtjPm8ubGVuZ3RoLTEmJihjPVwiMFwiKTt2YXIgaD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2J0blt0YWJpbmRleD1cIicuY29uY2F0KGMsJ1wiXScpKTtoJiYoaC5mb2N1cygpLGsoaCxcImZvY3VzZWRcIikpfTM5PT1uJiZ0Lm5leHRTbGlkZSgpLDM3PT1uJiZ0LnByZXZTbGlkZSgpLDI3PT1uJiZ0LmNsb3NlKCl9fSl9ZnVuY3Rpb24gaigpe3ZhciB0PXRoaXM7aWYodGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkoXCJ0b3VjaFwiKSlyZXR1cm4hMTt2YXIgZSxpLG4scz1xKCksbz1zLndpZHRoLGw9cy5oZWlnaHQscj0hMSxhPW51bGwsaD1udWxsLHU9bnVsbCxkPSExLGc9MSxwPTEsdj0hMSxmPSExLG09bnVsbCx5PW51bGwsYj1udWxsLHg9bnVsbCx3PTAsUz0wLFQ9ITEsQz0hMSxMPXt9LE09e30sTz0wLHo9MCxOPXRoaXMsST1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsaWdodGJveC1zbGlkZXJcIiksRD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvdmVybGF5XCIpLFg9bmV3IGMoSSx7dG91Y2hTdGFydDpmdW5jdGlvbih0KXtpZihBKHQudGFyZ2V0VG91Y2hlc1swXS50YXJnZXQsXCJnaW5uZXItY29udGFpbmVyXCIpKXJldHVybiByPSExLCExO3I9ITAsTT10LnRhcmdldFRvdWNoZXNbMF0sTC5wYWdlWD10LnRhcmdldFRvdWNoZXNbMF0ucGFnZVgsTC5wYWdlWT10LnRhcmdldFRvdWNoZXNbMF0ucGFnZVksTz10LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCx6PXQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZLGE9Ti5hY3RpdmVTbGlkZSxoPWEucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIiksbj1hLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWlubGluZVwiKSx1PW51bGwsQShoLFwiZ3NsaWRlLWltYWdlXCIpJiYodT1oLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikpLEUoRCxcImdyZXNldFwiKX0sdG91Y2hNb3ZlOmZ1bmN0aW9uKHQpe2lmKHImJihNPXQudGFyZ2V0VG91Y2hlc1swXSwhdiYmIWYpKXtpZihuJiZuLm9mZnNldEhlaWdodD5sKXt2YXIgcz1MLnBhZ2VYLU0ucGFnZVg7aWYoTWF0aC5hYnMocyk8PTEzKXJldHVybiExfWQ9ITA7dmFyIGEsYz10LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCxnPXQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZLHA9Ty1jLG09ei1nO2lmKE1hdGguYWJzKHApPk1hdGguYWJzKG0pPyhUPSExLEM9ITApOihDPSExLFQ9ITApLGU9TS5wYWdlWC1MLnBhZ2VYLHc9MTAwKmUvbyxpPU0ucGFnZVktTC5wYWdlWSxTPTEwMCppL2wsVCYmdSYmKGE9MS1NYXRoLmFicyhpKS9sLEQuc3R5bGUub3BhY2l0eT1hKSxDJiYoYT0xLU1hdGguYWJzKGUpL28saC5zdHlsZS5vcGFjaXR5PWEpLCF1KXJldHVybiBIKGgsXCJ0cmFuc2xhdGUzZChcIi5jb25jYXQodyxcIiUsIDAsIDApXCIpKTtIKGgsXCJ0cmFuc2xhdGUzZChcIi5jb25jYXQodyxcIiUsIFwiKS5jb25jYXQoUyxcIiUsIDApXCIpKX19LHRvdWNoRW5kOmZ1bmN0aW9uKCl7aWYocil7aWYoZD0hMSxmfHx2KXJldHVybiBiPW0sdm9pZCh4PXkpO3ZhciBlPU1hdGguYWJzKHBhcnNlSW50KFMpKSxpPU1hdGguYWJzKHBhcnNlSW50KHcpKTtpZighKGU+MzUmJnUpKXJldHVybiBlPDM1JiZpPDI1PyhrKEQsXCJncmVzZXRcIiksRC5zdHlsZS5vcGFjaXR5PTEsVihoKSk6dm9pZCAwO3QuY2xvc2UoKX19LG11bHRpcG9pbnRFbmQ6ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dj0hMX0sNTApfSxtdWx0aXBvaW50U3RhcnQ6ZnVuY3Rpb24oKXt2PSEwLGc9cHx8MX0scGluY2g6ZnVuY3Rpb24odCl7aWYoIXV8fGQpcmV0dXJuITE7dj0hMCx1LnNjYWxlWD11LnNjYWxlWT1nKnQuem9vbTt2YXIgZT1nKnQuem9vbTtpZihmPSEwLGU8PTEpcmV0dXJuIGY9ITEsZT0xLHg9bnVsbCxiPW51bGwsbT1udWxsLHk9bnVsbCx2b2lkIHUuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIlwiKTtlPjQuNSYmKGU9NC41KSx1LnN0eWxlLnRyYW5zZm9ybT1cInNjYWxlM2QoXCIuY29uY2F0KGUsXCIsIFwiKS5jb25jYXQoZSxcIiwgMSlcIikscD1lfSxwcmVzc01vdmU6ZnVuY3Rpb24odCl7aWYoZiYmIXYpe3ZhciBlPU0ucGFnZVgtTC5wYWdlWCxpPU0ucGFnZVktTC5wYWdlWTtiJiYoZSs9YikseCYmKGkrPXgpLG09ZSx5PWk7dmFyIG49XCJ0cmFuc2xhdGUzZChcIi5jb25jYXQoZSxcInB4LCBcIikuY29uY2F0KGksXCJweCwgMClcIik7cCYmKG4rPVwiIHNjYWxlM2QoXCIuY29uY2F0KHAsXCIsIFwiKS5jb25jYXQocCxcIiwgMSlcIikpLEgodSxuKX19LHN3aXBlOmZ1bmN0aW9uKGUpe2lmKCFmKWlmKHYpdj0hMTtlbHNle2lmKFwiTGVmdFwiPT1lLmRpcmVjdGlvbil7aWYodC5pbmRleD09dC5lbGVtZW50cy5sZW5ndGgtMSlyZXR1cm4gVihoKTt0Lm5leHRTbGlkZSgpfWlmKFwiUmlnaHRcIj09ZS5kaXJlY3Rpb24pe2lmKDA9PXQuaW5kZXgpcmV0dXJuIFYoaCk7dC5wcmV2U2xpZGUoKX19fX0pO3RoaXMuZXZlbnRzLnRvdWNoPVh9ZnVuY3Rpb24gSCh0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06XCJcIjtpZihcIlwiPT1lKXJldHVybiB0LnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cIlwiLHQuc3R5bGUuTW96VHJhbnNmb3JtPVwiXCIsdC5zdHlsZS5tc1RyYW5zZm9ybT1cIlwiLHQuc3R5bGUuT1RyYW5zZm9ybT1cIlwiLHQuc3R5bGUudHJhbnNmb3JtPVwiXCIsITE7dC5zdHlsZS53ZWJraXRUcmFuc2Zvcm09ZSx0LnN0eWxlLk1velRyYW5zZm9ybT1lLHQuc3R5bGUubXNUcmFuc2Zvcm09ZSx0LnN0eWxlLk9UcmFuc2Zvcm09ZSx0LnN0eWxlLnRyYW5zZm9ybT1lfWZ1bmN0aW9uIFYodCl7dmFyIGU9QSh0LFwiZ3NsaWRlLW1lZGlhXCIpP3Q6dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxpPXQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtZGVzY3JpcHRpb25cIik7ayhlLFwiZ3Jlc2V0XCIpLEgoZSxcInRyYW5zbGF0ZTNkKDAsIDAsIDApXCIpO1QocCx7b25FbGVtZW50OmUsb25jZTohMCx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24odCxpKXtFKGUsXCJncmVzZXRcIil9fSk7ZS5zdHlsZS5vcGFjaXR5PVwiXCIsaSYmKGkuc3R5bGUub3BhY2l0eT1cIlwiKX1mdW5jdGlvbiBHKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTo1MCxpPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0sbj1pO2lmKCh0PXQudHJpbSgpKS5sZW5ndGg8PWUpcmV0dXJuIHQ7dmFyIHM9dC5zdWJzdHIoMCxlLTEpO3JldHVybiBuP3MrJy4uLiA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZGVzYy1tb3JlXCI+JytpK1wiPC9hPlwiOnN9ZnVuY3Rpb24gWih0LGUpe3ZhciBpPXQucXVlcnlTZWxlY3RvcihcIi5kZXNjLW1vcmVcIik7aWYoIWkpcmV0dXJuITE7VChcImNsaWNrXCIse29uRWxlbWVudDppLHdpdGhDYWxsYmFjazpmdW5jdGlvbih0LGkpe3QucHJldmVudERlZmF1bHQoKTt2YXIgbj1kb2N1bWVudC5ib2R5LHM9TShpLFwiLmdzbGlkZS1kZXNjXCIpO2lmKCFzKXJldHVybiExO3MuaW5uZXJIVE1MPWUuZGVzY3JpcHRpb24sayhuLFwiZ2Rlc2Mtb3BlblwiKTt2YXIgbz1UKFwiY2xpY2tcIix7b25FbGVtZW50OltuLE0ocyxcIi5nc2xpZGUtZGVzY3JpcHRpb25cIildLHdpdGhDYWxsYmFjazpmdW5jdGlvbih0LGkpe1wiYVwiIT09dC50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmKEUobixcImdkZXNjLW9wZW5cIiksayhuLFwiZ2Rlc2MtY2xvc2VkXCIpLHMuaW5uZXJIVE1MPWUuc21hbGxEZXNjcmlwdGlvbixaKHMsZSksc2V0VGltZW91dChmdW5jdGlvbigpe0UobixcImdkZXNjLWNsb3NlZFwiKX0sNDAwKSxvLmRlc3Ryb3koKSl9fSl9fSl9dmFyIFI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGkpe2UodGhpcyx0KSx0aGlzLnNldHRpbmdzPWIoeSxpfHx7fSksdGhpcy5lZmZlY3RzQ2xhc3Nlcz10aGlzLmdldEFuaW1hdGlvbkNsYXNzZXMoKSx0aGlzLnNsaWRlc0RhdGE9e319cmV0dXJuIG4odCxbe2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5iYXNlRXZlbnRzPVQoXCJjbGlja1wiLHtvbkVsZW1lbnQ6XCIuXCIuY29uY2F0KHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpLHdpdGhDYWxsYmFjazpmdW5jdGlvbihlLGkpe2UucHJldmVudERlZmF1bHQoKSx0Lm9wZW4oaSl9fSl9fSx7a2V5Olwib3BlblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGw7aWYodGhpcy5lbGVtZW50cz10aGlzLmdldEVsZW1lbnRzKHQpLDA9PXRoaXMuZWxlbWVudHMubGVuZ3RoKXJldHVybiExO3RoaXMuYWN0aXZlU2xpZGU9bnVsbCx0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4PW51bGwsdGhpcy5wcmV2QWN0aXZlU2xpZGU9bnVsbDt2YXIgZT10aGlzLnNldHRpbmdzLnN0YXJ0QXQ7dCYmeC5pc05pbChlKSYmKGU9dGhpcy5lbGVtZW50cy5pbmRleE9mKHQpKTwwJiYoZT0wKSx4LmlzTmlsKGUpJiYoZT0wKSx0aGlzLmJ1aWxkKCksQyh0aGlzLm92ZXJsYXksXCJub25lXCI9PXRoaXMuc2V0dGluZ3Mub3BlbkVmZmVjdD9cIm5vbmVcIjp0aGlzLnNldHRpbmdzLmNzc0VmZWN0cy5mYWRlLmluKTt2YXIgaT1kb2N1bWVudC5ib2R5O2lmKGkuc3R5bGUud2lkdGg9XCJcIi5jb25jYXQoaS5vZmZzZXRXaWR0aCxcInB4XCIpLGsoaSxcImdsaWdodGJveC1vcGVuXCIpLGsoZyxcImdsaWdodGJveC1vcGVuXCIpLHUmJihrKGRvY3VtZW50LmJvZHksXCJnbGlnaHRib3gtbW9iaWxlXCIpLHRoaXMuc2V0dGluZ3Muc2xpZGVFZmZlY3Q9XCJzbGlkZVwiKSx0aGlzLnNob3dTbGlkZShlLCEwKSwxPT10aGlzLmVsZW1lbnRzLmxlbmd0aD8oeih0aGlzLnByZXZCdXR0b24pLHoodGhpcy5uZXh0QnV0dG9uKSk6KE8odGhpcy5wcmV2QnV0dG9uKSxPKHRoaXMubmV4dEJ1dHRvbikpLHRoaXMubGlnaHRib3hPcGVuPSEwLHguaXNGdW5jdGlvbih0aGlzLnNldHRpbmdzLm9uT3BlbikmJnRoaXMuc2V0dGluZ3Mub25PcGVuKCksdSYmZCYmdGhpcy5zZXR0aW5ncy50b3VjaE5hdmlnYXRpb24pcmV0dXJuIGouYXBwbHkodGhpcyksITE7dGhpcy5zZXR0aW5ncy5rZXlib2FyZE5hdmlnYXRpb24mJl8uYXBwbHkodGhpcyl9fSx7a2V5Olwic2hvd1NsaWRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjAsaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO08odGhpcy5sb2FkZXIpLHRoaXMuaW5kZXg9cGFyc2VJbnQoZSk7dmFyIG49dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50XCIpO24mJkUobixcImN1cnJlbnRcIiksdGhpcy5zbGlkZUFuaW1hdGVPdXQoKTt2YXIgcz10aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmdzbGlkZVwiKVtlXTtpZihBKHMsXCJsb2FkZWRcIikpdGhpcy5zbGlkZUFuaW1hdGVJbihzLGkpLHoodGhpcy5sb2FkZXIpO2Vsc2V7Tyh0aGlzLmxvYWRlcik7dmFyIG89SSh0aGlzLmVsZW1lbnRzW2VdLHRoaXMuc2V0dGluZ3MpO28uaW5kZXg9ZSx0aGlzLnNsaWRlc0RhdGFbZV09byxELmFwcGx5KHRoaXMsW3MsbyxmdW5jdGlvbigpe3oodC5sb2FkZXIpLHQucmVzaXplKCksdC5zbGlkZUFuaW1hdGVJbihzLGkpfV0pfXRoaXMuc2xpZGVEZXNjcmlwdGlvbj1zLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWRlc2NyaXB0aW9uXCIpLHRoaXMuc2xpZGVEZXNjcmlwdGlvbkNvbnRhaW5lZD10aGlzLnNsaWRlRGVzY3JpcHRpb24mJkEodGhpcy5zbGlkZURlc2NyaXB0aW9uLnBhcmVudE5vZGUsXCJnc2xpZGUtbWVkaWFcIiksdGhpcy5wcmVsb2FkU2xpZGUoZSsxKSx0aGlzLnByZWxvYWRTbGlkZShlLTEpLEUodGhpcy5uZXh0QnV0dG9uLFwiZGlzYWJsZWRcIiksRSh0aGlzLnByZXZCdXR0b24sXCJkaXNhYmxlZFwiKSwwPT09ZT9rKHRoaXMucHJldkJ1dHRvbixcImRpc2FibGVkXCIpOmU9PT10aGlzLmVsZW1lbnRzLmxlbmd0aC0xJiYhMCE9PXRoaXMuc2V0dGluZ3MubG9vcEF0RW5kJiZrKHRoaXMubmV4dEJ1dHRvbixcImRpc2FibGVkXCIpLHRoaXMuYWN0aXZlU2xpZGU9c319LHtrZXk6XCJwcmVsb2FkU2xpZGVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKHQ8MHx8dD50aGlzLmVsZW1lbnRzLmxlbmd0aClyZXR1cm4hMTtpZih4LmlzTmlsKHRoaXMuZWxlbWVudHNbdF0pKXJldHVybiExO3ZhciBpPXRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3NsaWRlXCIpW3RdO2lmKEEoaSxcImxvYWRlZFwiKSlyZXR1cm4hMTt2YXIgbj1JKHRoaXMuZWxlbWVudHNbdF0sdGhpcy5zZXR0aW5ncyk7bi5pbmRleD10LHRoaXMuc2xpZGVzRGF0YVt0XT1uO3ZhciBzPW4uc291cmNldHlwZTtcInZpZGVvXCI9PXN8fFwiZXh0ZXJuYWxcIj09cz9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7RC5hcHBseShlLFtpLG5dKX0sMjAwKTpELmFwcGx5KHRoaXMsW2ksbl0pfX0se2tleTpcInByZXZTbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5pbmRleC0xO2lmKHQ8MClyZXR1cm4hMTt0aGlzLmdvVG9TbGlkZSh0KX19LHtrZXk6XCJuZXh0U2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuaW5kZXgrMTtpZih0PnRoaXMuZWxlbWVudHMubGVuZ3RoKXJldHVybiExO3RoaXMuZ29Ub1NsaWRlKHQpfX0se2tleTpcImdvVG9TbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTt0Pi0xJiYodGhpcy5wcmV2QWN0aXZlU2xpZGU9dGhpcy5hY3RpdmVTbGlkZSx0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4PXRoaXMuaW5kZXgsdDx0aGlzLmVsZW1lbnRzLmxlbmd0aD90aGlzLnNob3dTbGlkZSh0KTohMD09PXRoaXMuc2V0dGluZ3MubG9vcEF0RW5kJiYodD0wLHRoaXMuc2hvd1NsaWRlKHQpKSl9fSx7a2V5Olwic2xpZGVBbmltYXRlSW5cIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMsbj10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLHM9dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1kZXNjcmlwdGlvblwiKSxvPXtpbmRleDp0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4LHNsaWRlOnRoaXMucHJldkFjdGl2ZVNsaWRlfSxsPXtpbmRleDp0aGlzLmluZGV4LHNsaWRlOnRoaXMuYWN0aXZlU2xpZGV9O2lmKG4ub2Zmc2V0V2lkdGg+MCYmcyYmKHoocykscy5zdHlsZS5kaXNwbGF5PVwiXCIpLEUodCx0aGlzLmVmZmVjdHNDbGFzc2VzKSxlKUModCx0aGlzLnNldHRpbmdzLm9wZW5FZmZlY3QsZnVuY3Rpb24oKXshdSYmaS5zZXR0aW5ncy5hdXRvcGxheVZpZGVvcyYmaS5wbGF5U2xpZGVWaWRlbyh0KSx4LmlzRnVuY3Rpb24oaS5zZXR0aW5ncy5hZnRlclNsaWRlQ2hhbmdlKSYmaS5zZXR0aW5ncy5hZnRlclNsaWRlQ2hhbmdlLmFwcGx5KGksW28sbF0pfSk7ZWxzZXt2YXIgcj10aGlzLnNldHRpbmdzLnNsaWRlRWZmZWN0LGE9XCJub25lXCIhPT1yP3RoaXMuc2V0dGluZ3MuY3NzRWZlY3RzW3JdLmluOnI7dGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleD50aGlzLmluZGV4JiZcInNsaWRlXCI9PXRoaXMuc2V0dGluZ3Muc2xpZGVFZmZlY3QmJihhPXRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzLnNsaWRlX2JhY2suaW4pLEModCxhLGZ1bmN0aW9uKCl7IXUmJmkuc2V0dGluZ3MuYXV0b3BsYXlWaWRlb3MmJmkucGxheVNsaWRlVmlkZW8odCkseC5pc0Z1bmN0aW9uKGkuc2V0dGluZ3MuYWZ0ZXJTbGlkZUNoYW5nZSkmJmkuc2V0dGluZ3MuYWZ0ZXJTbGlkZUNoYW5nZS5hcHBseShpLFtvLGxdKX0pfXNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJlc2l6ZSh0KX0sMTAwKSxrKHQsXCJjdXJyZW50XCIpfX0se2tleTpcInNsaWRlQW5pbWF0ZU91dFwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoIXRoaXMucHJldkFjdGl2ZVNsaWRlKXJldHVybiExO3ZhciB0PXRoaXMucHJldkFjdGl2ZVNsaWRlO0UodCx0aGlzLmVmZmVjdHNDbGFzc2VzKSxrKHQsXCJwcmV2XCIpO3ZhciBlPXRoaXMuc2V0dGluZ3Muc2xpZGVFZmZlY3QsaT1cIm5vbmVcIiE9PWU/dGhpcy5zZXR0aW5ncy5jc3NFZmVjdHNbZV0ub3V0OmU7dGhpcy5zdG9wU2xpZGVWaWRlbyh0KSx4LmlzRnVuY3Rpb24odGhpcy5zZXR0aW5ncy5iZWZvcmVTbGlkZUNoYW5nZSkmJnRoaXMuc2V0dGluZ3MuYmVmb3JlU2xpZGVDaGFuZ2UuYXBwbHkodGhpcyxbe2luZGV4OnRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXgsc2xpZGU6dGhpcy5wcmV2QWN0aXZlU2xpZGV9LHtpbmRleDp0aGlzLmluZGV4LHNsaWRlOnRoaXMuYWN0aXZlU2xpZGV9XSksdGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleD50aGlzLmluZGV4JiZcInNsaWRlXCI9PXRoaXMuc2V0dGluZ3Muc2xpZGVFZmZlY3QmJihpPXRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzLnNsaWRlX2JhY2sub3V0KSxDKHQsaSxmdW5jdGlvbigpe3ZhciBlPXQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIiksaT10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWRlc2NyaXB0aW9uXCIpO2Uuc3R5bGUudHJhbnNmb3JtPVwiXCIsRShlLFwiZ3Jlc2V0XCIpLGUuc3R5bGUub3BhY2l0eT1cIlwiLGkmJihpLnN0eWxlLm9wYWNpdHk9XCJcIiksRSh0LFwicHJldlwiKX0pfX0se2tleTpcInN0b3BTbGlkZVZpZGVvXCIsdmFsdWU6ZnVuY3Rpb24odCl7eC5pc051bWJlcih0KSYmKHQ9dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbdF0pO3ZhciBlPXQ/dC5xdWVyeVNlbGVjdG9yKFwiLmd2aWRlb1wiKTpudWxsO2lmKCFlKXJldHVybiExO3ZhciBpPWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtpZihtJiZ4LmhhcyhtLGkpKXt2YXIgbj1tW2ldO24mJm4ucGxheSYmbi5wYXVzZSgpfX19LHtrZXk6XCJwbGF5U2xpZGVWaWRlb1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3guaXNOdW1iZXIodCkmJih0PXRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3NsaWRlXCIpW3RdKTt2YXIgZT10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3ZpZGVvXCIpO2lmKCFlKXJldHVybiExO3ZhciBpPWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtpZihtJiZ4LmhhcyhtLGkpKXt2YXIgbj1tW2ldO24mJm4ucGxheSYmbi5wbGF5KCl9fX0se2tleTpcInNldEVsZW1lbnRzXCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5zZXR0aW5ncy5lbGVtZW50cz10fX0se2tleTpcImdldEVsZW1lbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbDtpZih0aGlzLmVsZW1lbnRzPVtdLCF4LmlzTmlsKHRoaXMuc2V0dGluZ3MuZWxlbWVudHMpJiZ4LmlzQXJyYXkodGhpcy5zZXR0aW5ncy5lbGVtZW50cykpcmV0dXJuIHRoaXMuc2V0dGluZ3MuZWxlbWVudHM7dmFyIGU9ITE7aWYobnVsbCE9PXQpe3ZhciBpPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1nYWxsZXJ5XCIpO2kmJlwiXCIhPT1pJiYoZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1nYWxsZXJ5PVwiJy5jb25jYXQoaSwnXCJdJykpKX1yZXR1cm4gMD09ZSYmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIi5jb25jYXQodGhpcy5zZXR0aW5ncy5zZWxlY3RvcikpKSxlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUpfX0se2tleTpcImdldEFjdGl2ZVNsaWRlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbdGhpcy5pbmRleF19fSx7a2V5OlwiZ2V0QWN0aXZlU2xpZGVJbmRleFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5kZXh9fSx7a2V5OlwiZ2V0QW5pbWF0aW9uQ2xhc3Nlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9W107Zm9yKHZhciBlIGluIHRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzKWlmKHRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzLmhhc093blByb3BlcnR5KGUpKXt2YXIgaT10aGlzLnNldHRpbmdzLmNzc0VmZWN0c1tlXTt0LnB1c2goXCJnXCIuY29uY2F0KGkuaW4pKSx0LnB1c2goXCJnXCIuY29uY2F0KGkub3V0KSl9cmV0dXJuIHQuam9pbihcIiBcIil9fSx7a2V5OlwiYnVpbGRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7aWYodGhpcy5idWlsdClyZXR1cm4hMTt2YXIgZT14Lmhhcyh0aGlzLnNldHRpbmdzLnN2ZyxcIm5leHRcIik/dGhpcy5zZXR0aW5ncy5zdmcubmV4dDpcIlwiLGk9eC5oYXModGhpcy5zZXR0aW5ncy5zdmcsXCJwcmV2XCIpP3RoaXMuc2V0dGluZ3Muc3ZnLnByZXY6XCJcIixuPXguaGFzKHRoaXMuc2V0dGluZ3Muc3ZnLFwiY2xvc2VcIik/dGhpcy5zZXR0aW5ncy5zdmcuY2xvc2U6XCJcIixzPXRoaXMuc2V0dGluZ3MubGlnaHRib3hIdG1sO3M9TChzPShzPShzPXMucmVwbGFjZSgve25leHRTVkd9L2csZSkpLnJlcGxhY2UoL3twcmV2U1ZHfS9nLGkpKS5yZXBsYWNlKC97Y2xvc2VTVkd9L2csbikpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocyk7dmFyIG89ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbGlnaHRib3gtYm9keVwiKTt0aGlzLm1vZGFsPW87dmFyIGw9by5xdWVyeVNlbGVjdG9yKFwiLmdjbG9zZVwiKTt0aGlzLnByZXZCdXR0b249by5xdWVyeVNlbGVjdG9yKFwiLmdwcmV2XCIpLHRoaXMubmV4dEJ1dHRvbj1vLnF1ZXJ5U2VsZWN0b3IoXCIuZ25leHRcIiksdGhpcy5vdmVybGF5PW8ucXVlcnlTZWxlY3RvcihcIi5nb3ZlcmxheVwiKSx0aGlzLmxvYWRlcj1vLnF1ZXJ5U2VsZWN0b3IoXCIuZ2xvYWRlclwiKSx0aGlzLnNsaWRlc0NvbnRhaW5lcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsaWdodGJveC1zbGlkZXJcIiksdGhpcy5ldmVudHM9e30sayh0aGlzLm1vZGFsLFwiZ2xpZ2h0Ym94LVwiK3RoaXMuc2V0dGluZ3Muc2tpbiksdGhpcy5zZXR0aW5ncy5jbG9zZUJ1dHRvbiYmbCYmKHRoaXMuZXZlbnRzLmNsb3NlPVQoXCJjbGlja1wiLHtvbkVsZW1lbnQ6bCx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24oZSxpKXtlLnByZXZlbnREZWZhdWx0KCksdC5jbG9zZSgpfX0pKSxsJiYhdGhpcy5zZXR0aW5ncy5jbG9zZUJ1dHRvbiYmbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGwpLHRoaXMubmV4dEJ1dHRvbiYmKHRoaXMuZXZlbnRzLm5leHQ9VChcImNsaWNrXCIse29uRWxlbWVudDp0aGlzLm5leHRCdXR0b24sd2l0aENhbGxiYWNrOmZ1bmN0aW9uKGUsaSl7ZS5wcmV2ZW50RGVmYXVsdCgpLHQubmV4dFNsaWRlKCl9fSkpLHRoaXMucHJldkJ1dHRvbiYmKHRoaXMuZXZlbnRzLnByZXY9VChcImNsaWNrXCIse29uRWxlbWVudDp0aGlzLnByZXZCdXR0b24sd2l0aENhbGxiYWNrOmZ1bmN0aW9uKGUsaSl7ZS5wcmV2ZW50RGVmYXVsdCgpLHQucHJldlNsaWRlKCl9fSkpLHRoaXMuc2V0dGluZ3MuY2xvc2VPbk91dHNpZGVDbGljayYmKHRoaXMuZXZlbnRzLm91dENsb3NlPVQoXCJjbGlja1wiLHtvbkVsZW1lbnQ6byx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24oZSxpKXtBKGRvY3VtZW50LmJvZHksXCJnbGlnaHRib3gtbW9iaWxlXCIpfHxNKGUudGFyZ2V0LFwiLmdpbm5lci1jb250YWluZXJcIil8fE0oZS50YXJnZXQsXCIuZ2J0blwiKXx8QShlLnRhcmdldCxcImduZXh0XCIpfHxBKGUudGFyZ2V0LFwiZ3ByZXZcIil8fHQuY2xvc2UoKX19KSksdyh0aGlzLmVsZW1lbnRzLGZ1bmN0aW9uKCl7dmFyIGU9TCh0LnNldHRpbmdzLnNsaWRlSHRtbCk7dC5zbGlkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZSl9KSxkJiZrKGRvY3VtZW50LmJvZHksXCJnbGlnaHRib3gtdG91Y2hcIiksdGhpcy5ldmVudHMucmVzaXplPVQoXCJyZXNpemVcIix7b25FbGVtZW50OndpbmRvdyx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24oKXt0LnJlc2l6ZSgpfX0pLHRoaXMuYnVpbHQ9ITB9fSx7a2V5OlwicmVzaXplXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbDtpZih0PXR8fHRoaXMuYWN0aXZlU2xpZGUsZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aD1cIlwiLGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGg9XCJcIi5jb25jYXQoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCxcInB4XCIpLHQmJiFBKHQsXCJ6b29tZWRcIikpe3ZhciBlPXEoKSxpPXQucXVlcnlTZWxlY3RvcihcIi5ndmlkZW8td3JhcHBlclwiKSxuPXQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtaW1hZ2VcIikscz10aGlzLnNsaWRlRGVzY3JpcHRpb24sbz1lLndpZHRoLGw9ZS5oZWlnaHQ7aWYobzw9NzY4P2soZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC1tb2JpbGVcIik6RShkb2N1bWVudC5ib2R5LFwiZ2xpZ2h0Ym94LW1vYmlsZVwiKSxpfHxuKXt2YXIgcj0hMTtpZihzJiYoQShzLFwiZGVzY3JpcHRpb24tYm90dG9tXCIpfHxBKHMsXCJkZXNjcmlwdGlvbi10b3BcIikpJiYhQShzLFwiZ2Fic29sdXRlXCIpJiYocj0hMCksbilpZihvPD03Njgpe3ZhciBhPW4ucXVlcnlTZWxlY3RvcihcImltZ1wiKTthLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJcIil9ZWxzZSBpZihyKXt2YXIgYz1zLm9mZnNldEhlaWdodCxoPXRoaXMuc2xpZGVzRGF0YVt0aGlzLmluZGV4XS53aWR0aDtoPWg8PW8/aCtcInB4XCI6XCIxMDAlXCI7dmFyIHU9bi5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO3Uuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIm1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSBcIi5jb25jYXQoYyxcInB4KVwiKSkscy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwibWF4LXdpZHRoOiBcIi5jb25jYXQodS5vZmZzZXRXaWR0aCxcInB4O1wiKSl9aWYoaSl7dmFyIGQ9dGhpcy5zZXR0aW5ncy5wbHlyLnJhdGlvLnNwbGl0KFwiOlwiKSxnPXRoaXMuc2xpZGVzRGF0YVt0aGlzLmluZGV4XS53aWR0aCxwPWcvKHBhcnNlSW50KGRbMF0pL3BhcnNlSW50KGRbMV0pKTtpZihwPU1hdGguZmxvb3IocCksciYmKGwtPXMub2Zmc2V0SGVpZ2h0KSxsPHAmJm8+Zyl7dmFyIHY9aS5vZmZzZXRXaWR0aCxmPWkub2Zmc2V0SGVpZ2h0LG09bC9mLHk9e3dpZHRoOnYqbSxoZWlnaHQ6ZiptfTtpLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIm1heC13aWR0aDogXCIuY29uY2F0KHkud2lkdGgsXCJweFwiKSksciYmcy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwibWF4LXdpZHRoOiBcIi5jb25jYXQoeS53aWR0aCxcInB4O1wiKSl9ZWxzZSBpLnBhcmVudE5vZGUuc3R5bGUubWF4V2lkdGg9XCJcIi5jb25jYXQoZyxcInB4XCIpLHImJnMuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIm1heC13aWR0aDogXCIuY29uY2F0KGcsXCJweDtcIikpfX19fX0se2tleTpcInJlbG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5pbml0KCl9fSx7a2V5OlwiY2xvc2VcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7aWYodGhpcy5jbG9zaW5nKXJldHVybiExO3RoaXMuY2xvc2luZz0hMCx0aGlzLnN0b3BTbGlkZVZpZGVvKHRoaXMuYWN0aXZlU2xpZGUpLGsodGhpcy5tb2RhbCxcImdsaWdodGJveC1jbG9zaW5nXCIpLEModGhpcy5vdmVybGF5LFwibm9uZVwiPT10aGlzLnNldHRpbmdzLm9wZW5FZmZlY3Q/XCJub25lXCI6dGhpcy5zZXR0aW5ncy5jc3NFZmVjdHMuZmFkZS5vdXQpLEModGhpcy5hY3RpdmVTbGlkZSx0aGlzLnNldHRpbmdzLmNsb3NlRWZmZWN0LGZ1bmN0aW9uKCl7aWYodC5hY3RpdmVTbGlkZT1udWxsLHQucHJldkFjdGl2ZVNsaWRlSW5kZXg9bnVsbCx0LnByZXZBY3RpdmVTbGlkZT1udWxsLHQuYnVpbHQ9ITEsdC5ldmVudHMpe2Zvcih2YXIgZSBpbiB0LmV2ZW50cyl0LmV2ZW50cy5oYXNPd25Qcm9wZXJ0eShlKSYmdC5ldmVudHNbZV0uZGVzdHJveSgpO3QuZXZlbnRzPW51bGx9dmFyIGk9ZG9jdW1lbnQuYm9keTtFKGcsXCJnbGlnaHRib3gtb3BlblwiKSxFKGksXCJnbGlnaHRib3gtb3BlbiB0b3VjaGluZyBnZGVzYy1vcGVuIGdsaWdodGJveC10b3VjaCBnbGlnaHRib3gtbW9iaWxlXCIpLGkuc3R5bGUud2lkdGg9XCJcIix0Lm1vZGFsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodC5tb2RhbCkseC5pc0Z1bmN0aW9uKHQuc2V0dGluZ3Mub25DbG9zZSkmJnQuc2V0dGluZ3Mub25DbG9zZSgpLHQuY2xvc2luZz1udWxsfSl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5jbG9zZSgpLHRoaXMuYmFzZUV2ZW50cy5kZXN0cm95KCl9fV0pLHR9KCk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LGU9bmV3IFIodCk7cmV0dXJuIGUuaW5pdCgpLGV9fSk7IiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLy8gTWFpbiBzY3JpcHRzIGZpbGVcbmltcG9ydCAnLi9qcy9pbmRleCc7XG5cbi8vIE1haW4gc3R5bGVzIGZpbGVcbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuXG4vLyBJbWFnZXNcbmltcG9ydCAnLi9tZWRpYS9zeWxpdXMtbG9nby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3pldGFtZWRzLXdoaXRlLWxvZ28ucG5nJztcblxuLy8gRm9udCBhd2Vzb21lIGljb25zXG5pbXBvcnQgJy4vanMvZm9udGF3ZXNvbWUnO1xuIiwiLy8gRm9udEF3ZXNvbWUgSWNvbnNcbi8vIEltcG9ydCBpY29ucyBvbmUgYnkgb25lIHRvIHJlZHVjZSBzaXplIG9mIHRoZSBvdXRwdXRcbmltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXInO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNob3BwaW5nQmFnJztcbmltcG9ydCB7IGZhQ2hlY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjayc7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhjbGFtYXRpb25DaXJjbGUnO1xuaW1wb3J0IHsgZmFJbmZvQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25VcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZXZyb25VcCc7XG5pbXBvcnQgeyBmYU1hcE1hcmtlckFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1hcE1hcmtlckFsdCc7XG5pbXBvcnQgeyBmYVNodXR0bGVWYW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaHV0dGxlVmFuJztcbmltcG9ydCB7IGZhQ3JlZGl0Q2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNyZWRpdENhcmQnO1xuaW1wb3J0IHsgZmFGbGFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmxhZyc7XG5pbXBvcnQgeyBmYUNjTWFzdGVyY2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY01hc3RlcmNhcmQnO1xuaW1wb3J0IHsgZmFDY1Zpc2EgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhJztcbmltcG9ydCB7IGZhQ2NQYXlwYWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NQYXlwYWwnO1xuaW1wb3J0IHsgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzJztcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2VhcmNoJztcbmltcG9ydCB7IGZhUGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXMnO1xuaW1wb3J0IHsgZmFQZW5jaWxBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQZW5jaWxBbHQnO1xuaW1wb3J0IHsgZmFTeW5jQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY0FsdCc7XG5cbmxpYnJhcnkuYWRkKGZhU3RhciwgZmFTaG9wcGluZ0JhZywgZmFDaGVjaywgZmFFeGNsYW1hdGlvbkNpcmNsZSwgZmFJbmZvQ2lyY2xlLCBmYUNoZXZyb25VcCwgZmFNYXBNYXJrZXJBbHQsIGZhU2h1dHRsZVZhbiwgZmFDcmVkaXRDYXJkLCBmYUZsYWcsIGZhQ2NNYXN0ZXJjYXJkLCBmYUNjVmlzYSwgZmFDY1BheXBhbCwgZmFUaW1lcywgZmFTZWFyY2gsIGZhUGx1cywgZmFQZW5jaWxBbHQsIGZhU3luY0FsdCk7XG5kb20ud2F0Y2goKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgR0xpZ2h0Ym94IGZyb20gJ2dsaWdodGJveCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICdib290c3RyYXAubmF0aXZlL2Rpc3QvYm9vdHN0cmFwLW5hdGl2ZS12NCc7XG5cbmltcG9ydCBTeWxpdXNSYXRpbmcgZnJvbSAnLi9zeWxpdXMtcmF0aW5nJztcbmltcG9ydCBTeWxpdXNUb2dnbGUgZnJvbSAnLi9zeWxpdXMtdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBZGRUb0NhcnQgZnJvbSAnLi9zeWxpdXMtYWRkLXRvLWNhcnQnO1xuaW1wb3J0IFN5bGl1c1JlbW92ZUZyb21DYXJ0IGZyb20gJy4vc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQnO1xuaW1wb3J0IFN5bGl1c0FwaVRvZ2dsZSBmcm9tICcuL3N5bGl1cy1hcGktdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlMb2dpbiBmcm9tICcuL3N5bGl1cy1hcGktbG9naW4nO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzIGZyb20gJy4vc3lsaXVzLXZhcmlhbnRzLXByaWNlcyc7XG5pbXBvcnQgU3lsaXVzVmFyaWFudEltYWdlcyBmcm9tICcuL3N5bGl1cy12YXJpYW50LWltYWdlcyc7XG5pbXBvcnQgU3lsaXVzUHJvdmluY2VGaWVsZCBmcm9tICcuL3N5bGl1cy1wcm92aW5jZS1maWVsZCc7XG5pbXBvcnQgU3lsaXVzQWRkcmVzc0Jvb2sgZnJvbSAnLi9zeWxpdXMtYWRkcmVzcy1ib29rJztcbmltcG9ydCBTeWxpdXNMb2FkYWJsZUZvcm1zIGZyb20gJy4vc3lsaXVzLWxvYWRhYmxlLWZvcm1zJztcblxuLy8gR2xvYmFsIGF4aW9zIHNldHRpbmdzXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3QuYWNjZXB0ID0gJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBMaWdodGJveFxuICBjb25zdCBnbGlnaHRib3ggPSBHTGlnaHRib3goeyBzZWxlY3RvcjogJ2dsaWdodGJveCcgfSk7XG5cbiAgLy8gQWRkIHRvIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJmb3JtXCJdJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNBZGRUb0NhcnQoZWwpKTtcblxuICAvLyBSZW1vdmUgZnJvbSBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzUmVtb3ZlRnJvbUNhcnQoZWwpKTtcblxuICAvLyBQcm92aW5jZSBmaWVsZFxuICBTeWxpdXNQcm92aW5jZUZpZWxkKCk7XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gIGNvbnN0IHN5bGl1c1NoaXBwaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1zaGlwcGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNTaGlwcGluZ0FkZHJlc3MgJiYgc3lsaXVzU2hpcHBpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpKSB7XG4gICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzU2hpcHBpbmdBZGRyZXNzKTtcbiAgfVxuICBjb25zdCBzeWxpdXNCaWxsaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1iaWxsaW5nLWFkZHJlc3NcIl0nKTtcbiAgaWYgKHN5bGl1c0JpbGxpbmdBZGRyZXNzICYmIHN5bGl1c0JpbGxpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpKSB7XG4gICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzQmlsbGluZ0FkZHJlc3MpO1xuICB9XG5cbiAgLy8gVmFyaWFudCBwcmljZXNcbiAgU3lsaXVzVmFyaWFudHNQcmljZXMoKTtcblxuICAvLyBTdGFyIHJhdGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yYXRpbmddJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIG5ldyBTeWxpdXNSYXRpbmcoZWxlbSwge1xuICAgICAgb25SYXRlKHZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzeWxpdXNfcHJvZHVjdF9yZXZpZXdfcmF0aW5nXyR7dmFsdWUgLSAxfWApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVG9nZ2xlIGFuZCBsb2dpbiBmcm9tIGNoZWNrb3V0XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSkge1xuICAgIFN5bGl1c0FwaVRvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImVtYWlsXCJdJykpO1xuICAgIFN5bGl1c0FwaUxvZ2luKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBiaWxsaW5nIGFkZHJlc3Mgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtdG9nZ2xlXScpLmZvckVhY2goZWxlbSA9PiBuZXcgU3lsaXVzVG9nZ2xlKGVsZW0pKTtcblxuICAvLyBQcm9kdWN0IGltYWdlcyBmb3IgdmFyaWFudHNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhcmlhbnQtb3B0aW9uc10sIFtkYXRhLXZhcmlhbnQtY29kZV0nKSkgeyBuZXcgU3lsaXVzVmFyaWFudEltYWdlcygpOyB9XG5cbiAgLy8gTG9hZGFibGUgZm9ybXNcbiAgU3lsaXVzTG9hZGFibGVGb3JtcygpO1xufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuXG5jb25zdCBTeWxpdXNBZGRUb0NhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVkaXJlY3QnKTtcbiAgY29uc3QgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCBzZXJpYWxpemUoZWxlbWVudCkpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmVxdWVzdC50aGVuKCgpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdFVybDtcbiAgICB9KTtcblxuICAgIHJlcXVlc3QuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9ICcnO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhlcnJvci5yZXNwb25zZS5kYXRhKS5mb3JFYWNoKChbLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSArPSBtZXNzYWdlO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmlubmVySFRNTCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgcGFyc2VLZXkgPSBmdW5jdGlvbiBwYXJzZUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC8oX1xcdykvZywgd29yZHMgPT4gd29yZHNbMV0udG9VcHBlckNhc2UoKSk7XG59O1xuXG5jb25zdCBTeWxpdXNBZGRyZXNzQm9vayA9IGZ1bmN0aW9uIFN5bGl1c0FkZHJlc3NCb29rKGVsKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgY29uc3QgZmluZEJ5TmFtZSA9IGZ1bmN0aW9uIGZpbmRCeU5hbWUobmFtZSkge1xuICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lKj0ke3BhcnNlS2V5KG5hbWUpfV1gKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXG4gIHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNob2ljZSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGNob2ljZURhdGEgPSB7fTtcblxuICAgICAgWy4uLmNob2ljZS5hdHRyaWJ1dGVzXS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGlmIChhdHRyLm5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgIGNvbnN0IGNhbWVsQ2FzZWQgPSBhdHRyLm5hbWUucmVwbGFjZSgnZGF0YS0nLCAnJykucmVwbGFjZSgvLShbYS16XSkvZywgZyA9PiBnWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGNob2ljZURhdGFbY2FtZWxDYXNlZF0gPSBhdHRyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyBwcm92aW5jZUNvZGUsIHByb3ZpbmNlTmFtZSB9ID0gY2hvaWNlRGF0YTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJ1tkYXRhLWpzLWFkZHJlc3MtYm9va10nKS5xdWVyeVNlbGVjdG9yKCcucHJvdmluY2UtY29udGFpbmVyJyk7XG5cbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmVudHJpZXMoY2hvaWNlRGF0YSkuZm9yRWFjaCgoW3Byb3BlcnR5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaW5kQnlOYW1lKHByb3BlcnR5KTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignY291bnRyeUNvZGUnKSAhPT0gLTEpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG4gICAgICAgICAgY29uc3QgZXhpc3RzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VDb2RlRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZUNvZGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlTmFtZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvdmluY2VDb250YWluZXIuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKSkge1xuICAgICAgICAgICAgICBpZiAocHJvdmluY2VDb2RlRmllbGQgJiYgcHJvdmluY2VDb2RlRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZUNvZGUgIT09ICcnIHx8IHByb3ZpbmNlQ29kZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VDb2RlRmllbGQudmFsdWUgPSBwcm92aW5jZUNvZGU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvdmluY2VOYW1lRmllbGQgJiYgcHJvdmluY2VOYW1lRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZU5hbWUgIT09ICcnIHx8IHByb3ZpbmNlTmFtZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VOYW1lRmllbGQudmFsdWUgPSBwcm92aW5jZU5hbWU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkcmVzc0Jvb2s7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQXBpTG9naW4gPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzaWduSW5CdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgY29uc3QgdmFsaWRhdGlvbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKTtcbiAgY29uc3QgdXJsID0gc2lnbkluQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi11cmwnKTtcbiAgY29uc3QgZW1haWxGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5OYW1lID0gY3NyZlRva2VuRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3VzZXJuYW1lJywgZW1haWxGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3Bhc3N3b3JkJywgcGFzc3dvcmRGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZChbY3NyZlRva2VuTmFtZV0sIGNzcmZUb2tlbkZpZWxkLnZhbHVlKTtcblxuICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuaW5uZXJIVE1MID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpTG9naW47XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuXG5jb25zdCBTeWxpdXNBcGlUb2dnbGUgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi1jaGVjay1lbWFpbC11cmwnKTtcbiAgY29uc3QgdG9nZ2xlYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImZvcm1cIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhyb3R0bGUoKGUpID0+IHtcbiAgICB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICBheGlvcy5nZXQodXJsLCB7IHBhcmFtczogeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpOyB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTsgfSk7XG4gICAgfVxuICB9LCAxNTAwKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtcyA9IGZ1bmN0aW9uIFN5bGl1c0xvYWRhYmxlRm9ybXMoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5sb2FkYWJsZScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzTG9hZGFibGVGb3JtcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBnZXRQcm92aW5jZUlucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm92aW5jZUlucHV0VmFsdWUodmFsdWVTZWxlY3Rvcikge1xuICBjb25zdCB2YWwgPSB2YWx1ZVNlbGVjdG9yID8gdmFsdWVTZWxlY3Rvci52YWx1ZSA6IG51bGw7XG4gIHJldHVybiAhdmFsIHx8IHZhbCA9PSB1bmRlZmluZWQgPyAnJyA6IGB2YWx1ZT1cIiR7dmFsfVwiYDtcbn07XG5cblxuY29uc3QgU3lsaXVzUHJvdmluY2VGaWVsZCA9IGZ1bmN0aW9uIFN5bGl1c1Byb3ZpbmNlRmllbGQoKSB7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3RbbmFtZSQ9XCJbY291bnRyeUNvZGVdXCJdJyk7XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBjb3VudHJ5U2VsZWN0LmZvckVhY2goKGNvdW50cnlTZWxlY3RJdGVtKSA9PiB7XG4gICAgY291bnRyeVNlbGVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBpZiAoc2VsZWN0LnZhbHVlID09PSAnJyB8fCBzZWxlY3QudmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgJycpO1xuXG4gICAgICBheGlvcy5nZXQocHJvdmluY2VDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLCB7IHBhcmFtczogeyBjb3VudHJ5Q29kZTogc2VsZWN0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEuY29udGVudC5pbmRleE9mKCdzZWxlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUoKFxuICAgICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QgPiBvcHRpb25bc2VsZWN0ZWQkPVwic2VsZWN0ZWRcIl0nKVxuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZE5hbWV9XCIke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZElkfVwiYClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ29wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicsICdvcHRpb24gdmFsdWU9XCJcIicpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfWAsIGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZShwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZUlucHV0RmllbGROYW1lfVwiJHtwcm92aW5jZUlucHV0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VJbnB1dEZpZWxkSWR9XCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChjb3VudHJ5U2VsZWN0SXRlbS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvdW50cnlTZWxlY3RJdGVtLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNQcm92aW5jZUZpZWxkO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzUmF0aW5nIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBzZXR0aW5ncykge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yYXRpbmdNYXggPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ01heCkgfHwgNTtcbiAgICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSkgfHwgMDtcbiAgICAgIHRoaXMudmlld09ubHkgPSB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nVmlld29ubHkgIT09ICdmYWxzZSc7XG4gICAgICB0aGlzLmJ0bk9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb25dJyk7XG4gICAgICB0aGlzLmJ0bk9mZkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9mZl0nKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmdNYXg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlID0gaTtcblxuICAgICAgaWYgKHRoaXMudmlld09ubHkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUlucHV0VmFsdWUuYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDw9IHRoaXMucmF0aW5nQXZlcmFnZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT25FbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PZmZFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRWxlbWVudCk7XG4gIH1cblxuICBjaGFuZ2VJbnB1dFZhbHVlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlKTtcbiAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXR0aW5ncy5vblJhdGUodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JhdGluZztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNSZW1vdmVGcm9tQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1yZWRpcmVjdC11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1jc3JmLXRva2VuJyk7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYXBpLXVybCcpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHsgZGF0YTogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3RVcmwpOyB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSZW1vdmVGcm9tQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1RvZ2dsZSB7XG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIpIHtcbiAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRvZ2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudHJpZ2dlci5kYXRhc2V0LmpzVG9nZ2xlKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIuY2hlY2tlZCkge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1RvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jbGFzcyBTeWxpdXNWYXJpYW50SW1hZ2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1pbWFnZV0nKTtcbiAgICB0aGlzLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlTGluay5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZUxpbmsgPSB0aGlzLm1haW5JbWFnZUxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VTcmMgPSB0aGlzLm1haW5JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRJbWFnZSgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIGdldEFjdGl2ZVZhcmlhbnQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgIGlucHV0W25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdOmNoZWNrZWQsIFxuICAgICAgc2VsZWN0W25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXSBvcHRpb246Y2hlY2tlZFxuICAgIGApO1xuXG4gICAgcmV0dXJuIFsuLi5pdGVtc10ubWFwKGVsID0+IGVsLnZhbHVlKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRBY3RpdmVJbWFnZVNyYyh2YXJpYW50KSB7XG4gICAgbGV0IGltYWdlTGluayA9IHRoaXMuZGVmYXVsdEltYWdlTGluaztcbiAgICBsZXQgaW1hZ2VTcmMgPSB0aGlzLmRlZmF1bHRJbWFnZVNyYztcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtY29kZT1cIiR7dmFyaWFudH1cIl0sIFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LW9wdGlvbnM9XCIke3ZhcmlhbnR9IFwiXVxuICAgIGApO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtanMtcHJvZHVjdC10aHVtYm5haWxdJyk7XG4gICAgICBpbWFnZUxpbmsgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaW1hZ2VTcmMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWxhcmdlLXRodW1ibmFpbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGltYWdlTGluaywgaW1hZ2VTcmMgfTtcbiAgfVxuXG4gIHNldEltYWdlKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuZ2V0QWN0aXZlSW1hZ2VTcmModGhpcy5nZXRBY3RpdmVWYXJpYW50KCkpO1xuICAgIHRoaXMubWFpbkltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpbWcuaW1hZ2VMaW5rKTtcbiAgICB0aGlzLm1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5pbWFnZVNyYyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudEltYWdlcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCBzZWxlY3RbZGF0YS1vcHRpb25dJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Rbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBzZWxlY3RvciArPSBgW2RhdGEtJHtzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpfT1cIiR7b3B0aW9ufVwiXWA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblxuICAgICAgaWYgKHByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZ2V0QXR0cmlidXRlKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0uY2xvc2VzdCgndHInKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXZhcmlhbnQtcHJpY2VdJykuaW5uZXJIVE1MO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBTeWxpdXNWYXJpYW50c1ByaWNlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3lsaXVzVmFyaWFudHNQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykgfHwgbnVsbDtcbiAgY29uc3Qgc3lsaXVzUHJvZHVjdFZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy1wcm9kdWN0LXZhcmlhbnRzJykgfHwgbnVsbDtcblxuICBpZiAoc3lsaXVzVmFyaWFudHNQcmljaW5nKSB7XG4gICAgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKTtcbiAgfSBlbHNlIGlmIChzeWxpdXNQcm9kdWN0VmFyaWFudHMpIHtcbiAgICBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudHNQcmljZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL3pldGFtZWRzLXRoZW1lL2ltYWdlcy9zeWxpdXMtbG9nby5hYzRhYzA5NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL3pldGFtZWRzLXRoZW1lL2ltYWdlcy96ZXRhbWVkcy13aGl0ZS1sb2dvLmY5ZmQzZTk1LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=