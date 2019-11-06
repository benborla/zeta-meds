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
/******/ 	return __webpack_require__(__webpack_require__.s = "./themes/ZetaMedsTheme/assets/app.js");
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

/***/ "./themes/ZetaMedsTheme/assets/app.js":
/*!********************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/app.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./js/index */ "./themes/ZetaMedsTheme/assets/js/index.js");

__webpack_require__(/*! ./scss/index.scss */ "./themes/ZetaMedsTheme/assets/scss/index.scss");

__webpack_require__(/*! ./media/sylius-logo.png */ "./themes/ZetaMedsTheme/assets/media/sylius-logo.png");

__webpack_require__(/*! ./js/fontawesome */ "./themes/ZetaMedsTheme/assets/js/fontawesome.js");

/***/ }),

/***/ "./themes/ZetaMedsTheme/assets/js/fontawesome.js":
/*!*******************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/fontawesome.js ***!
  \*******************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/js/index.js":
/*!*************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _glightbox = __webpack_require__(/*! glightbox */ "./node_modules/glightbox/dist/js/glightbox.min.js");

var _glightbox2 = _interopRequireDefault(_glightbox);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

__webpack_require__(/*! bootstrap.native/dist/bootstrap-native-v4 */ "./node_modules/bootstrap.native/dist/bootstrap-native-v4.js");

var _syliusRating = __webpack_require__(/*! ./sylius-rating */ "./themes/ZetaMedsTheme/assets/js/sylius-rating.js");

var _syliusRating2 = _interopRequireDefault(_syliusRating);

var _syliusToggle = __webpack_require__(/*! ./sylius-toggle */ "./themes/ZetaMedsTheme/assets/js/sylius-toggle.js");

var _syliusToggle2 = _interopRequireDefault(_syliusToggle);

var _syliusAddToCart = __webpack_require__(/*! ./sylius-add-to-cart */ "./themes/ZetaMedsTheme/assets/js/sylius-add-to-cart.js");

var _syliusAddToCart2 = _interopRequireDefault(_syliusAddToCart);

var _syliusRemoveFromCart = __webpack_require__(/*! ./sylius-remove-from-cart */ "./themes/ZetaMedsTheme/assets/js/sylius-remove-from-cart.js");

var _syliusRemoveFromCart2 = _interopRequireDefault(_syliusRemoveFromCart);

var _syliusApiToggle = __webpack_require__(/*! ./sylius-api-toggle */ "./themes/ZetaMedsTheme/assets/js/sylius-api-toggle.js");

var _syliusApiToggle2 = _interopRequireDefault(_syliusApiToggle);

var _syliusApiLogin = __webpack_require__(/*! ./sylius-api-login */ "./themes/ZetaMedsTheme/assets/js/sylius-api-login.js");

var _syliusApiLogin2 = _interopRequireDefault(_syliusApiLogin);

var _syliusVariantsPrices = __webpack_require__(/*! ./sylius-variants-prices */ "./themes/ZetaMedsTheme/assets/js/sylius-variants-prices.js");

var _syliusVariantsPrices2 = _interopRequireDefault(_syliusVariantsPrices);

var _syliusVariantImages = __webpack_require__(/*! ./sylius-variant-images */ "./themes/ZetaMedsTheme/assets/js/sylius-variant-images.js");

var _syliusVariantImages2 = _interopRequireDefault(_syliusVariantImages);

var _syliusProvinceField = __webpack_require__(/*! ./sylius-province-field */ "./themes/ZetaMedsTheme/assets/js/sylius-province-field.js");

var _syliusProvinceField2 = _interopRequireDefault(_syliusProvinceField);

var _syliusAddressBook = __webpack_require__(/*! ./sylius-address-book */ "./themes/ZetaMedsTheme/assets/js/sylius-address-book.js");

var _syliusAddressBook2 = _interopRequireDefault(_syliusAddressBook);

var _syliusLoadableForms = __webpack_require__(/*! ./sylius-loadable-forms */ "./themes/ZetaMedsTheme/assets/js/sylius-loadable-forms.js");

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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-add-to-cart.js":
/*!**************************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-add-to-cart.js ***!
  \**************************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-address-book.js":
/*!***************************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-address-book.js ***!
  \***************************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-api-login.js":
/*!************************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-api-login.js ***!
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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-api-toggle.js":
/*!*************************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-api-toggle.js ***!
  \*************************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-loadable-forms.js":
/*!*****************************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-loadable-forms.js ***!
  \*****************************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-province-field.js":
/*!*****************************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-province-field.js ***!
  \*****************************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-rating.js":
/*!*********************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-rating.js ***!
  \*********************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-remove-from-cart.js":
/*!*******************************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-remove-from-cart.js ***!
  \*******************************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-toggle.js":
/*!*********************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-toggle.js ***!
  \*********************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-variant-images.js":
/*!*****************************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-variant-images.js ***!
  \*****************************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/js/sylius-variants-prices.js":
/*!******************************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/js/sylius-variants-prices.js ***!
  \******************************************************************/
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

/***/ "./themes/ZetaMedsTheme/assets/media/sylius-logo.png":
/*!***********************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/media/sylius-logo.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/zetameds-theme/images/sylius-logo.ac4ac094.png";

/***/ }),

/***/ "./themes/ZetaMedsTheme/assets/scss/index.scss":
/*!*****************************************************!*\
  !*** ./themes/ZetaMedsTheme/assets/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hldnJvblVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmxhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFwTWFya2VyQWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQZW5jaWxBbHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdCYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNodXR0bGVWYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAubmF0aXZlL2Rpc3QvYm9vdHN0cmFwLW5hdGl2ZS12NC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybS1zZXJpYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsaWdodGJveC9kaXN0L2pzL2dsaWdodGJveC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC50aHJvdHRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzVGhlbWUvYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHNUaGVtZS9hc3NldHMvanMvZm9udGF3ZXNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzVGhlbWUvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9aZXRhTWVkc1RoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkLXRvLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2suanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9aZXRhTWVkc1RoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtbG9hZGFibGUtZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHNUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHNUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHNUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnRzLXByaWNlcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHNUaGVtZS9hc3NldHMvbWVkaWEvc3lsaXVzLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9aZXRhTWVkc1RoZW1lL2Fzc2V0cy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhU3RhciIsImZhU2hvcHBpbmdCYWciLCJmYUNoZWNrIiwiZmFFeGNsYW1hdGlvbkNpcmNsZSIsImZhSW5mb0NpcmNsZSIsImZhQ2hldnJvblVwIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNodXR0bGVWYW4iLCJmYUNyZWRpdENhcmQiLCJmYUZsYWciLCJmYUNjTWFzdGVyY2FyZCIsImZhQ2NWaXNhIiwiZmFDY1BheXBhbCIsImZhVGltZXMiLCJmYVNlYXJjaCIsImZhUGx1cyIsImZhUGVuY2lsQWx0IiwiZmFTeW5jQWx0IiwiZG9tIiwid2F0Y2giLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJhY2NlcHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnbGlnaHRib3giLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJzeWxpdXNTaGlwcGluZ0FkZHJlc3MiLCJxdWVyeVNlbGVjdG9yIiwic3lsaXVzQmlsbGluZ0FkZHJlc3MiLCJlbGVtIiwiU3lsaXVzUmF0aW5nIiwib25SYXRlIiwidmFsdWUiLCJjaGVja2VkIiwiU3lsaXVzVG9nZ2xlIiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIlN5bGl1c0FkZFRvQ2FydCIsImVsZW1lbnQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJyZWRpcmVjdFVybCIsInZhbGlkYXRpb25FbGVtZW50IiwiZSIsInJlcXVlc3QiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJjbGFzc0xpc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsImVycm9yIiwicmVtb3ZlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZSIsImlubmVySFRNTCIsInBhcnNlS2V5Iiwia2V5IiwicmVwbGFjZSIsIndvcmRzIiwidG9VcHBlckNhc2UiLCJTeWxpdXNBZGRyZXNzQm9vayIsInNlbGVjdCIsImZpbmRCeU5hbWUiLCJuYW1lIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsIml0ZW0iLCJjaG9pY2UiLCJjdXJyZW50VGFyZ2V0IiwiY2hvaWNlRGF0YSIsImF0dHJpYnV0ZXMiLCJhdHRyIiwic3RhcnRzV2l0aCIsImNhbWVsQ2FzZWQiLCJnIiwicHJvdmluY2VDb2RlIiwicHJvdmluY2VOYW1lIiwicHJvdmluY2VDb250YWluZXIiLCJjbG9zZXN0IiwiaW5wdXQiLCJwcm9wZXJ0eSIsImZpZWxkIiwiaW5kZXhPZiIsImRpc3BhdGNoRXZlbnQiLCJleGlzdHMiLCJzZXRJbnRlcnZhbCIsInByb3ZpbmNlQ29kZUZpZWxkIiwicHJvdmluY2VOYW1lRmllbGQiLCJoYXNBdHRyaWJ1dGUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjbGVhckludGVydmFsIiwiU3lsaXVzQXBpTG9naW4iLCJzaWduSW5CdXR0b24iLCJ2YWxpZGF0aW9uRmllbGQiLCJlbWFpbEZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwiY3NyZlRva2VuTmFtZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInJlbG9hZCIsIlN5bGl1c0FwaVRvZ2dsZSIsInRvZ2dsZWFibGVFbGVtZW50IiwidGFyZ2V0IiwiZ2V0IiwiZW1haWwiLCJTeWxpdXNMb2FkYWJsZUZvcm1zIiwib3ZlcmxheSIsImZvcm0iLCJhcHBlbmRDaGlsZCIsImdldFByb3ZpbmNlSW5wdXRWYWx1ZSIsInZhbHVlU2VsZWN0b3IiLCJ2YWwiLCJTeWxpdXNQcm92aW5jZUZpZWxkIiwiY291bnRyeVNlbGVjdCIsImNvdW50cnlTZWxlY3RJdGVtIiwiZXZlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSIsInByb3ZpbmNlSW5wdXRGaWVsZE5hbWUiLCJwcm92aW5jZVNlbGVjdEZpZWxkSWQiLCJwcm92aW5jZUlucHV0RmllbGRJZCIsInNldEF0dHJpYnV0ZSIsImNvdW50cnlDb2RlIiwiY29udGVudCIsInJlbW92ZUF0dHJpYnV0ZSIsInByb3ZpbmNlU2VsZWN0VmFsdWUiLCJwcm92aW5jZUlucHV0VmFsdWUiLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsInNldHRpbmdzIiwicmF0aW5nTWF4IiwiTnVtYmVyIiwiZGF0YXNldCIsImpzUmF0aW5nTWF4IiwicmF0aW5nQXZlcmFnZSIsImpzUmF0aW5nQXZlcmFnZSIsInZpZXdPbmx5IiwianNSYXRpbmdWaWV3b25seSIsImJ0bk9uRWxlbWVudCIsImJ0bk9mZkVsZW1lbnQiLCJyZW5kZXIiLCJyZW5kZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJqc1JhdGluZ1ZhbHVlIiwiY2hhbmdlSW5wdXRWYWx1ZSIsImJpbmQiLCJTeWxpdXNSZW1vdmVGcm9tQ2FydCIsImNzcmZUb2tlbiIsImRlbGV0ZSIsIl9jc3JmX3Rva2VuIiwidHJpZ2dlciIsInRvZ2dsZSIsInRvZ2dsZUVsZW1lbnQiLCJqc1RvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwic2V0SW1hZ2UiLCJnZXRBY3RpdmVWYXJpYW50IiwiaXRlbXMiLCJtYXAiLCJqb2luIiwiZ2V0QWN0aXZlSW1hZ2VTcmMiLCJ2YXJpYW50IiwiaW1hZ2VMaW5rIiwiaW1hZ2VTcmMiLCJwYXJlbnQiLCJpbWciLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsIm9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJwcmljZSIsImhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSIsIlN5bGl1c1ZhcmlhbnRzUHJpY2VzIiwic3lsaXVzVmFyaWFudHNQcmljaW5nIiwiZ2V0RWxlbWVudEJ5SWQiLCJzeWxpdXNQcm9kdWN0VmFyaWFudHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBb0I7QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5Qjs7QUFFQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxrQkFBa0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ2pDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxnQ0FBZ0M7QUFDaEMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUMzQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUMzQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUMzQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXVHOzs7Ozs7Ozs7Ozs7OztBQ3QyRTFGO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdGJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBTyxDQUFDLGlFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFHQTs7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Q0FBZ0UsdUJBQWhFLENBQTlEO0FBQ0FwQixnQkFBUSxDQUFDUSxhQUFULENBQXVCLHFCQUF2QixFQUE4Q3NHLFlBQTlDLENBQTJELFVBQTNELEVBQXVFLFVBQXZFO0FBQ0Q7QUFDRixLQWxCRDtBQW1CRCxHQXBCRDtBQXFCRCxDQXRCRDs7QUF3QkEsTUFBTXVELDJCQUEyQixHQUFHLFNBQVNBLDJCQUFULEdBQXVDO0FBQ3pFckssVUFBUSxDQUFDSSxnQkFBVCxDQUEwQixnREFBMUIsRUFBNEVDLE9BQTVFLENBQXFGK0MsSUFBRCxJQUFVO0FBQzVGQSxRQUFJLENBQUNuRCxnQkFBTCxDQUFzQixRQUF0QixFQUFpQ3NCLENBQUQsSUFBTztBQUNyQyxZQUFNNkksS0FBSyxHQUFHaEgsSUFBSSxDQUFDWSxPQUFMLENBQWEsSUFBYixFQUFtQnhELGFBQW5CLENBQWlDLGlDQUFqQyxFQUFvRWdDLFNBQWxGO0FBQ0F4QyxjQUFRLENBQUNRLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtEZ0MsU0FBbEQsR0FBOEQ0SCxLQUE5RDtBQUNELEtBSEQ7QUFJRCxHQUxEO0FBTUQsQ0FQRDs7QUFTQSxNQUFNRSxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDLFFBQU1DLHFCQUFxQixHQUFHdkssUUFBUSxDQUFDd0ssY0FBVCxDQUF3Qix5QkFBeEIsS0FBc0QsSUFBcEY7QUFDQSxRQUFNQyxxQkFBcUIsR0FBR3pLLFFBQVEsQ0FBQ3dLLGNBQVQsQ0FBd0IseUJBQXhCLEtBQXNELElBQXBGOztBQUVBLE1BQUlELHFCQUFKLEVBQTJCO0FBQ3pCTiw4QkFBMEI7QUFDM0IsR0FGRCxNQUVPLElBQUlRLHFCQUFKLEVBQTJCO0FBQ2hDSiwrQkFBMkI7QUFDNUI7QUFDRixDQVREOztrQkFXZUMsb0I7Ozs7Ozs7Ozs7O0FDdkRmLG1FOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3pldGFtZWRzLXRoZW1lL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RoZW1lcy9aZXRhTWVkc1RoZW1lL2Fzc2V0cy9hcHAuanNcIik7XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBfV0lORE9XID0ge307XG52YXIgX0RPQ1VNRU5UID0ge307XG52YXIgX01VVEFUSU9OX09CU0VSVkVSID0gbnVsbDtcbnZhciBfUEVSRk9STUFOQ0UgPSB7XG4gIG1hcms6IG5vb3AsXG4gIG1lYXN1cmU6IG5vb3Bcbn07XG5cbnRyeSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgX1dJTkRPVyA9IHdpbmRvdztcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIF9ET0NVTUVOVCA9IGRvY3VtZW50O1xuICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSBfTVVUQVRJT05fT0JTRVJWRVIgPSBNdXRhdGlvbk9ic2VydmVyO1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJykgX1BFUkZPUk1BTkNFID0gcGVyZm9ybWFuY2U7XG59IGNhdGNoIChlKSB7fVxuXG52YXIgX3JlZiA9IF9XSU5ET1cubmF2aWdhdG9yIHx8IHt9LFxuICAgIF9yZWYkdXNlckFnZW50ID0gX3JlZi51c2VyQWdlbnQsXG4gICAgdXNlckFnZW50ID0gX3JlZiR1c2VyQWdlbnQgPT09IHZvaWQgMCA/ICcnIDogX3JlZiR1c2VyQWdlbnQ7XG5cbnZhciBXSU5ET1cgPSBfV0lORE9XO1xudmFyIERPQ1VNRU5UID0gX0RPQ1VNRU5UO1xudmFyIE1VVEFUSU9OX09CU0VSVkVSID0gX01VVEFUSU9OX09CU0VSVkVSO1xudmFyIFBFUkZPUk1BTkNFID0gX1BFUkZPUk1BTkNFO1xudmFyIElTX0JST1dTRVIgPSAhIVdJTkRPVy5kb2N1bWVudDtcbnZhciBJU19ET00gPSAhIURPQ1VNRU5ULmRvY3VtZW50RWxlbWVudCAmJiAhIURPQ1VNRU5ULmhlYWQgJiYgdHlwZW9mIERPQ1VNRU5ULmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbic7XG52YXIgSVNfSUUgPSB+dXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSB8fCB+dXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQvJyk7XG5cbnZhciBOQU1FU1BBQ0VfSURFTlRJRklFUiA9ICdfX19GT05UX0FXRVNPTUVfX18nO1xudmFyIFVOSVRTX0lOX0dSSUQgPSAxNjtcbnZhciBERUZBVUxUX0ZBTUlMWV9QUkVGSVggPSAnZmEnO1xudmFyIERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MgPSAnc3ZnLWlubGluZS0tZmEnO1xudmFyIERBVEFfRkFfSTJTVkcgPSAnZGF0YS1mYS1pMnN2Zyc7XG52YXIgREFUQV9GQV9QU0VVRE9fRUxFTUVOVCA9ICdkYXRhLWZhLXBzZXVkby1lbGVtZW50JztcbnZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UX1BFTkRJTkcgPSAnZGF0YS1mYS1wc2V1ZG8tZWxlbWVudC1wZW5kaW5nJztcbnZhciBEQVRBX1BSRUZJWCA9ICdkYXRhLXByZWZpeCc7XG52YXIgREFUQV9JQ09OID0gJ2RhdGEtaWNvbic7XG52YXIgSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTID0gJ2ZvbnRhd2Vzb21lLWkyc3ZnJztcbnZhciBNVVRBVElPTl9BUFBST0FDSF9BU1lOQyA9ICdhc3luYyc7XG52YXIgVEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMgPSBbJ0hUTUwnLCAnSEVBRCcsICdTVFlMRScsICdTQ1JJUFQnXTtcbnZhciBQUk9EVUNUSU9OID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59KCk7XG52YXIgUFJFRklYX1RPX1NUWUxFID0ge1xuICAnZmFzJzogJ3NvbGlkJyxcbiAgJ2Zhcic6ICdyZWd1bGFyJyxcbiAgJ2ZhbCc6ICdsaWdodCcsXG4gICdmYWQnOiAnZHVvdG9uZScsXG4gICdmYWInOiAnYnJhbmRzJyxcbiAgJ2ZhJzogJ3NvbGlkJ1xufTtcbnZhciBTVFlMRV9UT19QUkVGSVggPSB7XG4gICdzb2xpZCc6ICdmYXMnLFxuICAncmVndWxhcic6ICdmYXInLFxuICAnbGlnaHQnOiAnZmFsJyxcbiAgJ2R1b3RvbmUnOiAnZmFkJyxcbiAgJ2JyYW5kcyc6ICdmYWInXG59O1xudmFyIExBWUVSU19URVhUX0NMQVNTTkFNRSA9ICdmYS1sYXllcnMtdGV4dCc7XG52YXIgRk9OVF9GQU1JTFlfUEFUVEVSTiA9IC9Gb250IEF3ZXNvbWUgNSAoU29saWR8UmVndWxhcnxMaWdodHxEdW90b25lfEJyYW5kc3xGcmVlfFBybykvO1xudmFyIEZPTlRfV0VJR0hUX1RPX1BSRUZJWCA9IHtcbiAgJzkwMCc6ICdmYXMnLFxuICAnNDAwJzogJ2ZhcicsXG4gICdub3JtYWwnOiAnZmFyJyxcbiAgJzMwMCc6ICdmYWwnXG59O1xudmFyIG9uZVRvVGVuID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbnZhciBvbmVUb1R3ZW50eSA9IG9uZVRvVGVuLmNvbmNhdChbMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBdKTtcbnZhciBBVFRSSUJVVEVTX1dBVENIRURfRk9SX01VVEFUSU9OID0gWydjbGFzcycsICdkYXRhLXByZWZpeCcsICdkYXRhLWljb24nLCAnZGF0YS1mYS10cmFuc2Zvcm0nLCAnZGF0YS1mYS1tYXNrJ107XG52YXIgRFVPVE9ORV9DTEFTU0VTID0ge1xuICBHUk9VUDogJ2dyb3VwJyxcbiAgU1dBUF9PUEFDSVRZOiAnc3dhcC1vcGFjaXR5JyxcbiAgUFJJTUFSWTogJ3ByaW1hcnknLFxuICBTRUNPTkRBUlk6ICdzZWNvbmRhcnknXG59O1xudmFyIFJFU0VSVkVEX0NMQVNTRVMgPSBbJ3hzJywgJ3NtJywgJ2xnJywgJ2Z3JywgJ3VsJywgJ2xpJywgJ2JvcmRlcicsICdwdWxsLWxlZnQnLCAncHVsbC1yaWdodCcsICdzcGluJywgJ3B1bHNlJywgJ3JvdGF0ZS05MCcsICdyb3RhdGUtMTgwJywgJ3JvdGF0ZS0yNzAnLCAnZmxpcC1ob3Jpem9udGFsJywgJ2ZsaXAtdmVydGljYWwnLCAnZmxpcC1ib3RoJywgJ3N0YWNrJywgJ3N0YWNrLTF4JywgJ3N0YWNrLTJ4JywgJ2ludmVyc2UnLCAnbGF5ZXJzJywgJ2xheWVycy10ZXh0JywgJ2xheWVycy1jb3VudGVyJywgRFVPVE9ORV9DTEFTU0VTLkdST1VQLCBEVU9UT05FX0NMQVNTRVMuU1dBUF9PUEFDSVRZLCBEVU9UT05FX0NMQVNTRVMuUFJJTUFSWSwgRFVPVE9ORV9DTEFTU0VTLlNFQ09OREFSWV0uY29uY2F0KG9uZVRvVGVuLm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gXCJcIi5jb25jYXQobiwgXCJ4XCIpO1xufSkpLmNvbmNhdChvbmVUb1R3ZW50eS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIFwidy1cIi5jb25jYXQobik7XG59KSk7XG5cbnZhciBpbml0aWFsID0gV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnIHx8IHt9O1xuXG5mdW5jdGlvbiBnZXRBdHRyQ29uZmlnKGF0dHIpIHtcbiAgdmFyIGVsZW1lbnQgPSBET0NVTUVOVC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbJyArIGF0dHIgKyAnXScpO1xuXG4gIGlmIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgLy8gR2V0dGluZyBhbiBlbXB0eSBzdHJpbmcgd2lsbCBvY2N1ciBpZiB0aGUgYXR0cmlidXRlIGlzIHNldCBvbiB0aGUgSFRNTCB0YWcgYnV0IHdpdGhvdXQgYSB2YWx1ZVxuICAvLyBXZSdsbCBhc3N1bWUgdGhhdCB0aGlzIGlzIGFuIGluZGljYXRpb24gdGhhdCBpdCBzaG91bGQgYmUgdG9nZ2xlZCB0byB0cnVlXG4gIC8vIEZvciBleGFtcGxlIDxzY3JpcHQgZGF0YS1zZWFyY2gtcHNldWRvLWVsZW1lbnRzIHNyYz1cIi4uLlwiPjwvc2NyaXB0PlxuICBpZiAodmFsID09PSAnJykgcmV0dXJuIHRydWU7XG4gIGlmICh2YWwgPT09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcbiAgaWYgKHZhbCA9PT0gJ3RydWUnKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuaWYgKERPQ1VNRU5UICYmIHR5cGVvZiBET0NVTUVOVC5xdWVyeVNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gIHZhciBhdHRycyA9IFtbJ2RhdGEtZmFtaWx5LXByZWZpeCcsICdmYW1pbHlQcmVmaXgnXSwgWydkYXRhLXJlcGxhY2VtZW50LWNsYXNzJywgJ3JlcGxhY2VtZW50Q2xhc3MnXSwgWydkYXRhLWF1dG8tcmVwbGFjZS1zdmcnLCAnYXV0b1JlcGxhY2VTdmcnXSwgWydkYXRhLWF1dG8tYWRkLWNzcycsICdhdXRvQWRkQ3NzJ10sIFsnZGF0YS1hdXRvLWExMXknLCAnYXV0b0ExMXknXSwgWydkYXRhLXNlYXJjaC1wc2V1ZG8tZWxlbWVudHMnLCAnc2VhcmNoUHNldWRvRWxlbWVudHMnXSwgWydkYXRhLW9ic2VydmUtbXV0YXRpb25zJywgJ29ic2VydmVNdXRhdGlvbnMnXSwgWydkYXRhLW11dGF0ZS1hcHByb2FjaCcsICdtdXRhdGVBcHByb2FjaCddLCBbJ2RhdGEta2VlcC1vcmlnaW5hbC1zb3VyY2UnLCAna2VlcE9yaWdpbmFsU291cmNlJ10sIFsnZGF0YS1tZWFzdXJlLXBlcmZvcm1hbmNlJywgJ21lYXN1cmVQZXJmb3JtYW5jZSddLCBbJ2RhdGEtc2hvdy1taXNzaW5nLWljb25zJywgJ3Nob3dNaXNzaW5nSWNvbnMnXV07XG4gIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgYXR0ciA9IF9yZWYyWzBdLFxuICAgICAgICBrZXkgPSBfcmVmMlsxXTtcblxuICAgIHZhciB2YWwgPSBjb2VyY2UoZ2V0QXR0ckNvbmZpZyhhdHRyKSk7XG5cbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICBpbml0aWFsW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBmYW1pbHlQcmVmaXg6IERFRkFVTFRfRkFNSUxZX1BSRUZJWCxcbiAgcmVwbGFjZW1lbnRDbGFzczogREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyxcbiAgYXV0b1JlcGxhY2VTdmc6IHRydWUsXG4gIGF1dG9BZGRDc3M6IHRydWUsXG4gIGF1dG9BMTF5OiB0cnVlLFxuICBzZWFyY2hQc2V1ZG9FbGVtZW50czogZmFsc2UsXG4gIG9ic2VydmVNdXRhdGlvbnM6IHRydWUsXG4gIG11dGF0ZUFwcHJvYWNoOiAnYXN5bmMnLFxuICBrZWVwT3JpZ2luYWxTb3VyY2U6IHRydWUsXG4gIG1lYXN1cmVQZXJmb3JtYW5jZTogZmFsc2UsXG4gIHNob3dNaXNzaW5nSWNvbnM6IHRydWVcbn07XG5cbnZhciBfY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgX2RlZmF1bHQsIGluaXRpYWwpO1xuXG5pZiAoIV9jb25maWcuYXV0b1JlcGxhY2VTdmcpIF9jb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuXG52YXIgY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgX2NvbmZpZyk7XG5cbldJTkRPVy5Gb250QXdlc29tZUNvbmZpZyA9IGNvbmZpZztcblxudmFyIHcgPSBXSU5ET1cgfHwge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXSA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnN0eWxlcyA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MgPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zID0gW107XG52YXIgbmFtZXNwYWNlID0gd1tOQU1FU1BBQ0VfSURFTlRJRklFUl07XG5cbnZhciBmdW5jdGlvbnMgPSBbXTtcblxudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gIERPQ1VNRU5ULnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsaXN0ZW5lcik7XG4gIGxvYWRlZCA9IDE7XG4gIGZ1bmN0aW9ucy5tYXAoZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH0pO1xufTtcblxudmFyIGxvYWRlZCA9IGZhbHNlO1xuXG5pZiAoSVNfRE9NKSB7XG4gIGxvYWRlZCA9IChET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoRE9DVU1FTlQucmVhZHlTdGF0ZSk7XG4gIGlmICghbG9hZGVkKSBET0NVTUVOVC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBkb21yZWFkeSAoZm4pIHtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmdW5jdGlvbnMucHVzaChmbik7XG59XG5cbnZhciBQRU5ESU5HID0gJ3BlbmRpbmcnO1xudmFyIFNFVFRMRUQgPSAnc2V0dGxlZCc7XG52YXIgRlVMRklMTEVEID0gJ2Z1bGZpbGxlZCc7XG52YXIgUkVKRUNURUQgPSAncmVqZWN0ZWQnO1xuXG52YXIgTk9PUCA9IGZ1bmN0aW9uIE5PT1AoKSB7fTtcblxudmFyIGlzTm9kZSA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwucHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbC5wcm9jZXNzLmVtaXQgPT09ICdmdW5jdGlvbic7XG52YXIgYXN5bmNTZXRUaW1lciA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICd1bmRlZmluZWQnID8gc2V0VGltZW91dCA6IHNldEltbWVkaWF0ZTtcbnZhciBhc3luY1F1ZXVlID0gW107XG52YXIgYXN5bmNUaW1lcjtcblxuZnVuY3Rpb24gYXN5bmNGbHVzaCgpIHtcbiAgLy8gcnVuIHByb21pc2UgY2FsbGJhY2tzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXN5bmNRdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIGFzeW5jUXVldWVbaV1bMF0oYXN5bmNRdWV1ZVtpXVsxXSk7XG4gIH0gLy8gcmVzZXQgYXN5bmMgYXN5bmNRdWV1ZVxuXG5cbiAgYXN5bmNRdWV1ZSA9IFtdO1xuICBhc3luY1RpbWVyID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFzeW5jQ2FsbChjYWxsYmFjaywgYXJnKSB7XG4gIGFzeW5jUXVldWUucHVzaChbY2FsbGJhY2ssIGFyZ10pO1xuXG4gIGlmICghYXN5bmNUaW1lcikge1xuICAgIGFzeW5jVGltZXIgPSB0cnVlO1xuICAgIGFzeW5jU2V0VGltZXIoYXN5bmNGbHVzaCwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlUmVzb2x2ZXIocmVzb2x2ZXIsIHByb21pc2UpIHtcbiAgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpIHtcbiAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gIH1cblxuICB0cnkge1xuICAgIHJlc29sdmVyKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdFByb21pc2UoZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlQ2FsbGJhY2soc3Vic2NyaWJlcikge1xuICB2YXIgb3duZXIgPSBzdWJzY3JpYmVyLm93bmVyO1xuICB2YXIgc2V0dGxlZCA9IG93bmVyLl9zdGF0ZTtcbiAgdmFyIHZhbHVlID0gb3duZXIuX2RhdGE7XG4gIHZhciBjYWxsYmFjayA9IHN1YnNjcmliZXJbc2V0dGxlZF07XG4gIHZhciBwcm9taXNlID0gc3Vic2NyaWJlci50aGVuO1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXR0bGVkID0gRlVMRklMTEVEO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSkge1xuICAgIGlmIChzZXR0bGVkID09PSBGVUxGSUxMRUQpIHtcbiAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChzZXR0bGVkID09PSBSRUpFQ1RFRCkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpIHtcbiAgdmFyIHJlc29sdmVkO1xuXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICYmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnKSkge1xuICAgICAgLy8gdGhlbiBzaG91bGQgYmUgcmV0cmlldmVkIG9ubHkgb25jZVxuICAgICAgdmFyIHRoZW4gPSB2YWx1ZS50aGVuO1xuXG4gICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZhbCkge1xuICAgICAgICAgICAgICBmdWxmaWxsKHByb21pc2UsIHZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHByb21pc2UsIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlID09PSB2YWx1ZSB8fCAhaGFuZGxlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpKSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICBwcm9taXNlLl9zdGF0ZSA9IFNFVFRMRUQ7XG4gICAgcHJvbWlzZS5fZGF0YSA9IHZhbHVlO1xuICAgIGFzeW5jQ2FsbChwdWJsaXNoRnVsZmlsbG1lbnQsIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgcHJvbWlzZS5fc3RhdGUgPSBTRVRUTEVEO1xuICAgIHByb21pc2UuX2RhdGEgPSByZWFzb247XG4gICAgYXN5bmNDYWxsKHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2gocHJvbWlzZSkge1xuICBwcm9taXNlLl90aGVuID0gcHJvbWlzZS5fdGhlbi5mb3JFYWNoKGludm9rZUNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaEZ1bGZpbGxtZW50KHByb21pc2UpIHtcbiAgcHJvbWlzZS5fc3RhdGUgPSBGVUxGSUxMRUQ7XG4gIHB1Ymxpc2gocHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICBwcm9taXNlLl9zdGF0ZSA9IFJFSkVDVEVEO1xuICBwdWJsaXNoKHByb21pc2UpO1xuXG4gIGlmICghcHJvbWlzZS5faGFuZGxlZCAmJiBpc05vZGUpIHtcbiAgICBnbG9iYWwucHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCBwcm9taXNlLl9kYXRhLCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub3RpZnlSZWplY3Rpb25IYW5kbGVkKHByb21pc2UpIHtcbiAgZ2xvYmFsLnByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xufVxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuXG5cbmZ1bmN0aW9uIFAocmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UgcmVzb2x2ZXIgJyArIHJlc29sdmVyICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBQID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCB0byBjb25zdHJ1Y3QgXFwnUHJvbWlzZVxcJzogUGxlYXNlIHVzZSB0aGUgXFwnbmV3XFwnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB0aGlzLl90aGVuID0gW107XG4gIGludm9rZVJlc29sdmVyKHJlc29sdmVyLCB0aGlzKTtcbn1cblxuUC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBQLFxuICBfc3RhdGU6IFBFTkRJTkcsXG4gIF90aGVuOiBudWxsLFxuICBfZGF0YTogdW5kZWZpbmVkLFxuICBfaGFuZGxlZDogZmFsc2UsXG4gIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICB2YXIgc3Vic2NyaWJlciA9IHtcbiAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgdGhlbjogbmV3IHRoaXMuY29uc3RydWN0b3IoTk9PUCksXG4gICAgICBmdWxmaWxsZWQ6IG9uRnVsZmlsbG1lbnQsXG4gICAgICByZWplY3RlZDogb25SZWplY3Rpb25cbiAgICB9O1xuXG4gICAgaWYgKChvblJlamVjdGlvbiB8fCBvbkZ1bGZpbGxtZW50KSAmJiAhdGhpcy5faGFuZGxlZCkge1xuICAgICAgdGhpcy5faGFuZGxlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gUkVKRUNURUQgJiYgaXNOb2RlKSB7XG4gICAgICAgIGFzeW5jQ2FsbChub3RpZnlSZWplY3Rpb25IYW5kbGVkLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IEZVTEZJTExFRCB8fCB0aGlzLl9zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICAgIC8vIGFscmVhZHkgcmVzb2x2ZWQsIGNhbGwgY2FsbGJhY2sgYXN5bmNcbiAgICAgIGFzeW5jQ2FsbChpbnZva2VDYWxsYmFjaywgc3Vic2NyaWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN1YnNjcmliZVxuICAgICAgdGhpcy5fdGhlbi5wdXNoKHN1YnNjcmliZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzY3JpYmVyLnRoZW47XG4gIH0sXG4gIGNhdGNoOiBmdW5jdGlvbiBfY2F0Y2gob25SZWplY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgfVxufTtcblxuUC5hbGwgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHByb21pc2VzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5hbGwoKS4nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcmVtYWluaW5nID0gMDtcblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKGluZGV4KSB7XG4gICAgICByZW1haW5pbmcrKztcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoISAtLXJlbWFpbmluZykge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIHByb21pc2U7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2VzW2ldO1xuXG4gICAgICBpZiAocHJvbWlzZSAmJiB0eXBlb2YgcHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlcihpKSwgcmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNbaV0gPSBwcm9taXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcmVtYWluaW5nKSB7XG4gICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5QLnJhY2UgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHByb21pc2VzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5yYWNlKCkuJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBwcm9taXNlOyBpIDwgcHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlc1tpXTtcblxuICAgICAgaWYgKHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocHJvbWlzZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cblAucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgJiYgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUC5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxudmFyIHBpY2tlZCA9IHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nID8gUHJvbWlzZSA6IFA7XG5cbnZhciBkID0gVU5JVFNfSU5fR1JJRDtcbnZhciBtZWFuaW5nbGVzc1RyYW5zZm9ybSA9IHtcbiAgc2l6ZTogMTYsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIHJvdGF0ZTogMCxcbiAgZmxpcFg6IGZhbHNlLFxuICBmbGlwWTogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQobmFtZSkge1xuICByZXR1cm4gflJFU0VSVkVEX0NMQVNTRVMuaW5kZXhPZihuYW1lKTtcbn1cbmZ1bmN0aW9uIGluc2VydENzcyhjc3MpIHtcbiAgaWYgKCFjc3MgfHwgIUlTX0RPTSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICBzdHlsZS5pbm5lckhUTUwgPSBjc3M7XG4gIHZhciBoZWFkQ2hpbGRyZW4gPSBET0NVTUVOVC5oZWFkLmNoaWxkTm9kZXM7XG4gIHZhciBiZWZvcmVDaGlsZCA9IG51bGw7XG5cbiAgZm9yICh2YXIgaSA9IGhlYWRDaGlsZHJlbi5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgIHZhciBjaGlsZCA9IGhlYWRDaGlsZHJlbltpXTtcbiAgICB2YXIgdGFnTmFtZSA9IChjaGlsZC50YWdOYW1lIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgaWYgKFsnU1RZTEUnLCAnTElOSyddLmluZGV4T2YodGFnTmFtZSkgPiAtMSkge1xuICAgICAgYmVmb3JlQ2hpbGQgPSBjaGlsZDtcbiAgICB9XG4gIH1cblxuICBET0NVTUVOVC5oZWFkLmluc2VydEJlZm9yZShzdHlsZSwgYmVmb3JlQ2hpbGQpO1xuICByZXR1cm4gY3NzO1xufVxudmFyIGlkUG9vbCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG5mdW5jdGlvbiBuZXh0VW5pcXVlSWQoKSB7XG4gIHZhciBzaXplID0gMTI7XG4gIHZhciBpZCA9ICcnO1xuXG4gIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgaWQgKz0gaWRQb29sW01hdGgucmFuZG9tKCkgKiA2MiB8IDBdO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufVxuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgdmFyIGFycmF5ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IChvYmogfHwgW10pLmxlbmd0aCA+Pj4gMDsgaS0tOykge1xuICAgIGFycmF5W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuZnVuY3Rpb24gY2xhc3NBcnJheShub2RlKSB7XG4gIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgIHJldHVybiB0b0FycmF5KG5vZGUuY2xhc3NMaXN0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKG5vZGUuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEljb25OYW1lKGZhbWlseVByZWZpeCwgY2xzKSB7XG4gIHZhciBwYXJ0cyA9IGNscy5zcGxpdCgnLScpO1xuICB2YXIgcHJlZml4ID0gcGFydHNbMF07XG4gIHZhciBpY29uTmFtZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJy0nKTtcblxuICBpZiAocHJlZml4ID09PSBmYW1pbHlQcmVmaXggJiYgaWNvbk5hbWUgIT09ICcnICYmICFpc1Jlc2VydmVkKGljb25OYW1lKSkge1xuICAgIHJldHVybiBpY29uTmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gaHRtbEVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHN0cikucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuZnVuY3Rpb24gam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICByZXR1cm4gYWNjICsgXCJcIi5jb25jYXQoYXR0cmlidXRlTmFtZSwgXCI9XFxcIlwiKS5jb25jYXQoaHRtbEVzY2FwZShhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSwgXCJcXFwiIFwiKTtcbiAgfSwgJycpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIGpvaW5TdHlsZXMoc3R5bGVzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZU5hbWUpIHtcbiAgICByZXR1cm4gYWNjICsgXCJcIi5jb25jYXQoc3R5bGVOYW1lLCBcIjogXCIpLmNvbmNhdChzdHlsZXNbc3R5bGVOYW1lXSwgXCI7XCIpO1xuICB9LCAnJyk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0uc2l6ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0uc2l6ZSB8fCB0cmFuc2Zvcm0ueCAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueCB8fCB0cmFuc2Zvcm0ueSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueSB8fCB0cmFuc2Zvcm0ucm90YXRlICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5yb3RhdGUgfHwgdHJhbnNmb3JtLmZsaXBYIHx8IHRyYW5zZm9ybS5mbGlwWTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUZvclN2ZyhfcmVmKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIGNvbnRhaW5lcldpZHRoID0gX3JlZi5jb250YWluZXJXaWR0aCxcbiAgICAgIGljb25XaWR0aCA9IF9yZWYuaWNvbldpZHRoO1xuICB2YXIgb3V0ZXIgPSB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoY29udGFpbmVyV2lkdGggLyAyLCBcIiAyNTYpXCIpXG4gIH07XG4gIHZhciBpbm5lclRyYW5zbGF0ZSA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAqIDMyLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAqIDMyLCBcIikgXCIpO1xuICB2YXIgaW5uZXJTY2FsZSA9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpLCBcIikgXCIpO1xuICB2YXIgaW5uZXJSb3RhdGUgPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCIgMCAwKVwiKTtcbiAgdmFyIGlubmVyID0ge1xuICAgIHRyYW5zZm9ybTogXCJcIi5jb25jYXQoaW5uZXJUcmFuc2xhdGUsIFwiIFwiKS5jb25jYXQoaW5uZXJTY2FsZSwgXCIgXCIpLmNvbmNhdChpbm5lclJvdGF0ZSlcbiAgfTtcbiAgdmFyIHBhdGggPSB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoaWNvbldpZHRoIC8gMiAqIC0xLCBcIiAtMjU2KVwiKVxuICB9O1xuICByZXR1cm4ge1xuICAgIG91dGVyOiBvdXRlcixcbiAgICBpbm5lcjogaW5uZXIsXG4gICAgcGF0aDogcGF0aFxuICB9O1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtRm9yQ3NzKF9yZWYyKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSBfcmVmMi50cmFuc2Zvcm0sXG4gICAgICBfcmVmMiR3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgd2lkdGggPSBfcmVmMiR3aWR0aCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJHdpZHRoLFxuICAgICAgX3JlZjIkaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0LFxuICAgICAgaGVpZ2h0ID0gX3JlZjIkaGVpZ2h0ID09PSB2b2lkIDAgPyBVTklUU19JTl9HUklEIDogX3JlZjIkaGVpZ2h0LFxuICAgICAgX3JlZjIkc3RhcnRDZW50ZXJlZCA9IF9yZWYyLnN0YXJ0Q2VudGVyZWQsXG4gICAgICBzdGFydENlbnRlcmVkID0gX3JlZjIkc3RhcnRDZW50ZXJlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRzdGFydENlbnRlcmVkO1xuICB2YXIgdmFsID0gJyc7XG5cbiAgaWYgKHN0YXJ0Q2VudGVyZWQgJiYgSVNfSUUpIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCAtIHdpZHRoIC8gMiwgXCJlbSwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQgLSBoZWlnaHQgLyAyLCBcImVtKSBcIik7XG4gIH0gZWxzZSBpZiAoc3RhcnRDZW50ZXJlZCkge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShjYWxjKC01MCUgKyBcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkLCBcImVtKSwgY2FsYygtNTAlICsgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQsIFwiZW0pKSBcIik7XG4gIH0gZWxzZSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkLCBcImVtKSBcIik7XG4gIH1cblxuICB2YWwgKz0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyBkICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gZCAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpLCBcIikgXCIpO1xuICB2YWwgKz0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiZGVnKSBcIik7XG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBBTExfU1BBQ0UgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnXG59O1xuXG5mdW5jdGlvbiBmaWxsQmxhY2soYWJzdHJhY3QpIHtcbiAgdmFyIGZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gIGlmIChhYnN0cmFjdC5hdHRyaWJ1dGVzICYmIChhYnN0cmFjdC5hdHRyaWJ1dGVzLmZpbGwgfHwgZm9yY2UpKSB7XG4gICAgYWJzdHJhY3QuYXR0cmlidXRlcy5maWxsID0gJ2JsYWNrJztcbiAgfVxuXG4gIHJldHVybiBhYnN0cmFjdDtcbn1cblxuZnVuY3Rpb24gZGVHcm91cChhYnN0cmFjdCkge1xuICBpZiAoYWJzdHJhY3QudGFnID09PSAnZycpIHtcbiAgICByZXR1cm4gYWJzdHJhY3QuY2hpbGRyZW47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFthYnN0cmFjdF07XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUljb25NYXNraW5nIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcbiAgdmFyIG1haW5XaWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICBtYWluUGF0aCA9IG1haW4uaWNvbjtcbiAgdmFyIG1hc2tXaWR0aCA9IG1hc2sud2lkdGgsXG4gICAgICBtYXNrUGF0aCA9IG1hc2suaWNvbjtcbiAgdmFyIHRyYW5zID0gdHJhbnNmb3JtRm9yU3ZnKHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBjb250YWluZXJXaWR0aDogbWFza1dpZHRoLFxuICAgIGljb25XaWR0aDogbWFpbldpZHRoXG4gIH0pO1xuICB2YXIgbWFza1JlY3QgPSB7XG4gICAgdGFnOiAncmVjdCcsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQUxMX1NQQUNFLCB7XG4gICAgICBmaWxsOiAnd2hpdGUnXG4gICAgfSlcbiAgfTtcbiAgdmFyIG1hc2tJbm5lckdyb3VwQ2hpbGRyZW5NaXhpbiA9IG1haW5QYXRoLmNoaWxkcmVuID8ge1xuICAgIGNoaWxkcmVuOiBtYWluUGF0aC5jaGlsZHJlbi5tYXAoZmlsbEJsYWNrKVxuICB9IDoge307XG4gIHZhciBtYXNrSW5uZXJHcm91cCA9IHtcbiAgICB0YWc6ICdnJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5pbm5lciksXG4gICAgY2hpbGRyZW46IFtmaWxsQmxhY2soX29iamVjdFNwcmVhZCh7XG4gICAgICB0YWc6IG1haW5QYXRoLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIG1haW5QYXRoLmF0dHJpYnV0ZXMsIHRyYW5zLnBhdGgpXG4gICAgfSwgbWFza0lubmVyR3JvdXBDaGlsZHJlbk1peGluKSldXG4gIH07XG4gIHZhciBtYXNrT3V0ZXJHcm91cCA9IHtcbiAgICB0YWc6ICdnJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5vdXRlciksXG4gICAgY2hpbGRyZW46IFttYXNrSW5uZXJHcm91cF1cbiAgfTtcbiAgdmFyIG1hc2tJZCA9IFwibWFzay1cIi5jb25jYXQobmV4dFVuaXF1ZUlkKCkpO1xuICB2YXIgY2xpcElkID0gXCJjbGlwLVwiLmNvbmNhdChuZXh0VW5pcXVlSWQoKSk7XG4gIHZhciBtYXNrVGFnID0ge1xuICAgIHRhZzogJ21hc2snLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFMTF9TUEFDRSwge1xuICAgICAgaWQ6IG1hc2tJZCxcbiAgICAgIG1hc2tVbml0czogJ3VzZXJTcGFjZU9uVXNlJyxcbiAgICAgIG1hc2tDb250ZW50VW5pdHM6ICd1c2VyU3BhY2VPblVzZSdcbiAgICB9KSxcbiAgICBjaGlsZHJlbjogW21hc2tSZWN0LCBtYXNrT3V0ZXJHcm91cF1cbiAgfTtcbiAgdmFyIGRlZnMgPSB7XG4gICAgdGFnOiAnZGVmcycsXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICB0YWc6ICdjbGlwUGF0aCcsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGlkOiBjbGlwSWRcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogZGVHcm91cChtYXNrUGF0aClcbiAgICB9LCBtYXNrVGFnXVxuICB9O1xuICBjaGlsZHJlbi5wdXNoKGRlZnMsIHtcbiAgICB0YWc6ICdyZWN0JyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgJ2NsaXAtcGF0aCc6IFwidXJsKCNcIi5jb25jYXQoY2xpcElkLCBcIilcIiksXG4gICAgICBtYXNrOiBcInVybCgjXCIuY29uY2F0KG1hc2tJZCwgXCIpXCIpXG4gICAgfSwgQUxMX1NQQUNFKVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlSWNvblN0YW5kYXJkIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgc3R5bGVzID0gX3JlZi5zdHlsZXM7XG4gIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSkge1xuICAgIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIGNvbnRhaW5lcldpZHRoOiBtYWluLndpZHRoLFxuICAgICAgaWNvbldpZHRoOiBtYWluLndpZHRoXG4gICAgfSk7XG4gICAgY2hpbGRyZW4ucHVzaCh7XG4gICAgICB0YWc6ICdnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLm91dGVyKSxcbiAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMuaW5uZXIpLFxuICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICB0YWc6IG1haW4uaWNvbi50YWcsXG4gICAgICAgICAgY2hpbGRyZW46IG1haW4uaWNvbi5jaGlsZHJlbixcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBtYWluLmljb24uYXR0cmlidXRlcywgdHJhbnMucGF0aClcbiAgICAgICAgfV1cbiAgICAgIH1dXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGRyZW4ucHVzaChtYWluLmljb24pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBhc0ljb24gKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pICYmIG1haW4uZm91bmQgJiYgIW1hc2suZm91bmQpIHtcbiAgICB2YXIgd2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBtYWluLmhlaWdodDtcbiAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgeDogd2lkdGggLyBoZWlnaHQgLyAyLFxuICAgICAgeTogMC41XG4gICAgfTtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gam9pblN0eWxlcyhfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZXMsIHtcbiAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogXCJcIi5jb25jYXQob2Zmc2V0LnggKyB0cmFuc2Zvcm0ueCAvIDE2LCBcImVtIFwiKS5jb25jYXQob2Zmc2V0LnkgKyB0cmFuc2Zvcm0ueSAvIDE2LCBcImVtXCIpXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIFt7XG4gICAgdGFnOiAnc3ZnJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9XTtcbn1cblxuZnVuY3Rpb24gYXNTeW1ib2wgKF9yZWYpIHtcbiAgdmFyIHByZWZpeCA9IF9yZWYucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBfcmVmLmljb25OYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN5bWJvbCA9IF9yZWYuc3ltYm9sO1xuICB2YXIgaWQgPSBzeW1ib2wgPT09IHRydWUgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLVwiKS5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChpY29uTmFtZSkgOiBzeW1ib2w7XG4gIHJldHVybiBbe1xuICAgIHRhZzogJ3N2ZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgc3R5bGU6ICdkaXNwbGF5OiBub25lOydcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGFnOiAnc3ltYm9sJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dXG4gIH1dO1xufVxuXG5mdW5jdGlvbiBtYWtlSW5saW5lU3ZnQWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBfcGFyYW1zJGljb25zID0gcGFyYW1zLmljb25zLFxuICAgICAgbWFpbiA9IF9wYXJhbXMkaWNvbnMubWFpbixcbiAgICAgIG1hc2sgPSBfcGFyYW1zJGljb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBwYXJhbXMucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBwYXJhbXMuaWNvbk5hbWUsXG4gICAgICB0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICBfcGFyYW1zJHdhdGNoYWJsZSA9IHBhcmFtcy53YXRjaGFibGUsXG4gICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTtcblxuICB2YXIgX3JlZiA9IG1hc2suZm91bmQgPyBtYXNrIDogbWFpbixcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gIHZhciB3aWR0aENsYXNzID0gXCJmYS13LVwiLmNvbmNhdChNYXRoLmNlaWwod2lkdGggLyBoZWlnaHQgKiAxNikpO1xuICB2YXIgYXR0ckNsYXNzID0gW2NvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBpY29uTmFtZSA/IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoaWNvbk5hbWUpIDogJycsIHdpZHRoQ2xhc3NdLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBleHRyYS5jbGFzc2VzLmluZGV4T2YoYykgPT09IC0xO1xuICB9KS5jb25jYXQoZXh0cmEuY2xhc3Nlcykuam9pbignICcpO1xuICB2YXIgY29udGVudCA9IHtcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuYXR0cmlidXRlcywge1xuICAgICAgJ2RhdGEtcHJlZml4JzogcHJlZml4LFxuICAgICAgJ2RhdGEtaWNvbic6IGljb25OYW1lLFxuICAgICAgJ2NsYXNzJzogYXR0ckNsYXNzLFxuICAgICAgJ3JvbGUnOiBleHRyYS5hdHRyaWJ1dGVzLnJvbGUgfHwgJ2ltZycsXG4gICAgICAneG1sbnMnOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgICAgJ3ZpZXdCb3gnOiBcIjAgMCBcIi5jb25jYXQod2lkdGgsIFwiIFwiKS5jb25jYXQoaGVpZ2h0KVxuICAgIH0pXG4gIH07XG5cbiAgaWYgKHdhdGNoYWJsZSkge1xuICAgIGNvbnRlbnQuYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICB9XG5cbiAgaWYgKHRpdGxlKSBjb250ZW50LmNoaWxkcmVuLnB1c2goe1xuICAgIHRhZzogJ3RpdGxlJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBpZDogY29udGVudC5hdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSB8fCBcInRpdGxlLVwiLmNvbmNhdChuZXh0VW5pcXVlSWQoKSlcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbdGl0bGVdXG4gIH0pO1xuXG4gIHZhciBhcmdzID0gX29iamVjdFNwcmVhZCh7fSwgY29udGVudCwge1xuICAgIHByZWZpeDogcHJlZml4LFxuICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICBtYWluOiBtYWluLFxuICAgIG1hc2s6IG1hc2ssXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgc3R5bGVzOiBleHRyYS5zdHlsZXNcbiAgfSk7XG5cbiAgdmFyIF9yZWYyID0gbWFzay5mb3VuZCAmJiBtYWluLmZvdW5kID8gbWFrZUljb25NYXNraW5nKGFyZ3MpIDogbWFrZUljb25TdGFuZGFyZChhcmdzKSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblxuICBhcmdzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIGFyZ3MuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHJldHVybiBhc1N5bWJvbChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXNJY29uKGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgd2lkdGggPSBwYXJhbXMud2lkdGgsXG4gICAgICBoZWlnaHQgPSBwYXJhbXMuaGVpZ2h0LFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICBfcGFyYW1zJHdhdGNoYWJsZTIgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkd2F0Y2hhYmxlMjtcblxuICB2YXIgYXR0cmlidXRlcyA9IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLmF0dHJpYnV0ZXMsIHRpdGxlID8ge1xuICAgICd0aXRsZSc6IHRpdGxlXG4gIH0gOiB7fSwge1xuICAgICdjbGFzcyc6IGV4dHJhLmNsYXNzZXMuam9pbignICcpXG4gIH0pO1xuXG4gIGlmICh3YXRjaGFibGUpIHtcbiAgICBhdHRyaWJ1dGVzW0RBVEFfRkFfSTJTVkddID0gJyc7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuc3R5bGVzKTtcblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICBzdHlsZXNbJ3RyYW5zZm9ybSddID0gdHJhbnNmb3JtRm9yQ3NzKHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgc3RhcnRDZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfSk7XG4gICAgc3R5bGVzWyctd2Via2l0LXRyYW5zZm9ybSddID0gc3R5bGVzWyd0cmFuc2Zvcm0nXTtcbiAgfVxuXG4gIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgfVxuXG4gIHZhciB2YWwgPSBbXTtcbiAgdmFsLnB1c2goe1xuICAgIHRhZzogJ3NwYW4nLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IFtjb250ZW50XVxuICB9KTtcblxuICBpZiAodGl0bGUpIHtcbiAgICB2YWwucHVzaCh7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6ICdzci1vbmx5J1xuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbdGl0bGVdXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuZnVuY3Rpb24gbWFrZUxheWVyc0NvdW50ZXJBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmE7XG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB0aXRsZSA/IHtcbiAgICAndGl0bGUnOiB0aXRsZVxuICB9IDoge30sIHtcbiAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICB9KTtcblxuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKGV4dHJhLnN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICB2YXIgdmFsID0gW107XG4gIHZhbC5wdXNoKHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgfSk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgdmFsLnB1c2goe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnc3Itb25seSdcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIG5vb3AkMSA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIHAgPSBjb25maWcubWVhc3VyZVBlcmZvcm1hbmNlICYmIFBFUkZPUk1BTkNFICYmIFBFUkZPUk1BTkNFLm1hcmsgJiYgUEVSRk9STUFOQ0UubWVhc3VyZSA/IFBFUkZPUk1BTkNFIDoge1xuICBtYXJrOiBub29wJDEsXG4gIG1lYXN1cmU6IG5vb3AkMVxufTtcbnZhciBwcmVhbWJsZSA9IFwiRkEgXFxcIjUuMTEuMVxcXCJcIjtcblxudmFyIGJlZ2luID0gZnVuY3Rpb24gYmVnaW4obmFtZSkge1xuICBwLm1hcmsoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZW5kKG5hbWUpO1xuICB9O1xufTtcblxudmFyIGVuZCA9IGZ1bmN0aW9uIGVuZChuYW1lKSB7XG4gIHAubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbiAgcC5tZWFzdXJlKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIiksIFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xufTtcblxudmFyIHBlcmYgPSB7XG4gIGJlZ2luOiBiZWdpbixcbiAgZW5kOiBlbmRcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDQgYXJndW1lbnRzXG4gKiB0byBhIGdpdmVuIGNvbnRleHQuXG4gKi9cblxudmFyIGJpbmRJbnRlcm5hbDQgPSBmdW5jdGlvbiBiaW5kSW50ZXJuYWw0KGZ1bmMsIHRoaXNDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0NvbnRleHQsIGEsIGIsIGMsIGQpO1xuICB9O1xufTtcblxuLyoqXG4gKiAjIFJlZHVjZVxuICpcbiAqIEEgZmFzdCBvYmplY3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHN1YmplY3QgICAgICBUaGUgb2JqZWN0IHRvIHJlZHVjZSBvdmVyLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHRoaXNDb250ZXh0ICBUaGUgY29udGV4dCBmb3IgdGhlIHJlZHVjZXIuXG4gKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gKi9cblxuXG52YXIgcmVkdWNlID0gZnVuY3Rpb24gZmFzdFJlZHVjZU9iamVjdChzdWJqZWN0LCBmbiwgaW5pdGlhbFZhbHVlLCB0aGlzQ29udGV4dCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWw0KGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGksXG4gICAgICBrZXksXG4gICAgICByZXN1bHQ7XG5cbiAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IDE7XG4gICAgcmVzdWx0ID0gc3ViamVjdFtrZXlzWzBdXTtcbiAgfSBlbHNlIHtcbiAgICBpID0gMDtcbiAgICByZXN1bHQgPSBpbml0aWFsVmFsdWU7XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIHN1YmplY3Rba2V5XSwga2V5LCBzdWJqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiB0b0hleCh1bmljb2RlKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHVuaWNvZGUubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaGV4ID0gdW5pY29kZS5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KTtcbiAgICByZXN1bHQgKz0gKCcwMDAnICsgaGV4KS5zbGljZSgtNCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBkZWZpbmVJY29ucyhwcmVmaXgsIGljb25zKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRza2lwSG9va3MgPSBwYXJhbXMuc2tpcEhvb2tzLFxuICAgICAgc2tpcEhvb2tzID0gX3BhcmFtcyRza2lwSG9va3MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRza2lwSG9va3M7XG4gIHZhciBub3JtYWxpemVkID0gT2JqZWN0LmtleXMoaWNvbnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpY29uTmFtZSkge1xuICAgIHZhciBpY29uID0gaWNvbnNbaWNvbk5hbWVdO1xuICAgIHZhciBleHBhbmRlZCA9ICEhaWNvbi5pY29uO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBhY2NbaWNvbi5pY29uTmFtZV0gPSBpY29uLmljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY1tpY29uTmFtZV0gPSBpY29uO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICBpZiAodHlwZW9mIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrID09PSAnZnVuY3Rpb24nICYmICFza2lwSG9va3MpIHtcbiAgICBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayhwcmVmaXgsIG5vcm1hbGl6ZWQpO1xuICB9IGVsc2Uge1xuICAgIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSA9IF9vYmplY3RTcHJlYWQoe30sIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSB8fCB7fSwgbm9ybWFsaXplZCk7XG4gIH1cbiAgLyoqXG4gICAqIEZvbnQgQXdlc29tZSA0IHVzZWQgdGhlIHByZWZpeCBvZiBgZmFgIGZvciBhbGwgaWNvbnMuIFdpdGggdGhlIGludHJvZHVjdGlvblxuICAgKiBvZiBuZXcgc3R5bGVzIHdlIG5lZWRlZCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlbS4gUHJlZml4IGBmYWAgaXMgbm93IGFuIGFsaWFzXG4gICAqIGZvciBgZmFzYCBzbyB3ZSdsbCBlYXN5IHRoZSB1cGdyYWRlIHByb2Nlc3MgZm9yIG91ciB1c2VycyBieSBhdXRvbWF0aWNhbGx5IGRlZmluaW5nXG4gICAqIHRoaXMgYXMgd2VsbC5cbiAgICovXG5cblxuICBpZiAocHJlZml4ID09PSAnZmFzJykge1xuICAgIGRlZmluZUljb25zKCdmYScsIGljb25zKTtcbiAgfVxufVxuXG52YXIgc3R5bGVzID0gbmFtZXNwYWNlLnN0eWxlcyxcbiAgICBzaGltcyA9IG5hbWVzcGFjZS5zaGltcztcbnZhciBfYnlVbmljb2RlID0ge307XG52YXIgX2J5TGlnYXR1cmUgPSB7fTtcbnZhciBfYnlPbGROYW1lID0ge307XG52YXIgYnVpbGQgPSBmdW5jdGlvbiBidWlsZCgpIHtcbiAgdmFyIGxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cChyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIHJlZHVjZShzdHlsZXMsIGZ1bmN0aW9uIChvLCBzdHlsZSwgcHJlZml4KSB7XG4gICAgICBvW3ByZWZpeF0gPSByZWR1Y2Uoc3R5bGUsIHJlZHVjZXIsIHt9KTtcbiAgICAgIHJldHVybiBvO1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICBfYnlVbmljb2RlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgaWYgKGljb25bM10pIHtcbiAgICAgIGFjY1tpY29uWzNdXSA9IGljb25OYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0pO1xuICBfYnlMaWdhdHVyZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgIHZhciBsaWdhdHVyZXMgPSBpY29uWzJdO1xuICAgIGFjY1tpY29uTmFtZV0gPSBpY29uTmFtZTtcbiAgICBsaWdhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAobGlnYXR1cmUpIHtcbiAgICAgIGFjY1tsaWdhdHVyZV0gPSBpY29uTmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjO1xuICB9KTtcbiAgdmFyIGhhc1JlZ3VsYXIgPSAnZmFyJyBpbiBzdHlsZXM7XG4gIF9ieU9sZE5hbWUgPSByZWR1Y2Uoc2hpbXMsIGZ1bmN0aW9uIChhY2MsIHNoaW0pIHtcbiAgICB2YXIgb2xkTmFtZSA9IHNoaW1bMF07XG4gICAgdmFyIHByZWZpeCA9IHNoaW1bMV07XG4gICAgdmFyIGljb25OYW1lID0gc2hpbVsyXTtcblxuICAgIGlmIChwcmVmaXggPT09ICdmYXInICYmICFoYXNSZWd1bGFyKSB7XG4gICAgICBwcmVmaXggPSAnZmFzJztcbiAgICB9XG5cbiAgICBhY2Nbb2xkTmFtZV0gPSB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZVxuICAgIH07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbmJ1aWxkKCk7XG5mdW5jdGlvbiBieVVuaWNvZGUocHJlZml4LCB1bmljb2RlKSB7XG4gIHJldHVybiAoX2J5VW5pY29kZVtwcmVmaXhdIHx8IHt9KVt1bmljb2RlXTtcbn1cbmZ1bmN0aW9uIGJ5TGlnYXR1cmUocHJlZml4LCBsaWdhdHVyZSkge1xuICByZXR1cm4gKF9ieUxpZ2F0dXJlW3ByZWZpeF0gfHwge30pW2xpZ2F0dXJlXTtcbn1cbmZ1bmN0aW9uIGJ5T2xkTmFtZShuYW1lKSB7XG4gIHJldHVybiBfYnlPbGROYW1lW25hbWVdIHx8IHtcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgaWNvbk5hbWU6IG51bGxcbiAgfTtcbn1cblxudmFyIHN0eWxlcyQxID0gbmFtZXNwYWNlLnN0eWxlcztcbnZhciBlbXB0eUNhbm9uaWNhbEljb24gPSBmdW5jdGlvbiBlbXB0eUNhbm9uaWNhbEljb24oKSB7XG4gIHJldHVybiB7XG4gICAgcHJlZml4OiBudWxsLFxuICAgIGljb25OYW1lOiBudWxsLFxuICAgIHJlc3Q6IFtdXG4gIH07XG59O1xuZnVuY3Rpb24gZ2V0Q2Fub25pY2FsSWNvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgdmFyIGljb25OYW1lID0gZ2V0SWNvbk5hbWUoY29uZmlnLmZhbWlseVByZWZpeCwgY2xzKTtcblxuICAgIGlmIChzdHlsZXMkMVtjbHNdKSB7XG4gICAgICBhY2MucHJlZml4ID0gY2xzO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmF1dG9GZXRjaFN2ZyAmJiBbJ2ZhcycsICdmYXInLCAnZmFsJywgJ2ZhZCcsICdmYWInLCAnZmEnXS5pbmRleE9mKGNscykgPiAtMSkge1xuICAgICAgYWNjLnByZWZpeCA9IGNscztcbiAgICB9IGVsc2UgaWYgKGljb25OYW1lKSB7XG4gICAgICB2YXIgc2hpbSA9IGFjYy5wcmVmaXggPT09ICdmYScgPyBieU9sZE5hbWUoaWNvbk5hbWUpIDoge307XG4gICAgICBhY2MuaWNvbk5hbWUgPSBzaGltLmljb25OYW1lIHx8IGljb25OYW1lO1xuICAgICAgYWNjLnByZWZpeCA9IHNoaW0ucHJlZml4IHx8IGFjYy5wcmVmaXg7XG4gICAgfSBlbHNlIGlmIChjbHMgIT09IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzICYmIGNscy5pbmRleE9mKCdmYS13LScpICE9PSAwKSB7XG4gICAgICBhY2MucmVzdC5wdXNoKGNscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgZW1wdHlDYW5vbmljYWxJY29uKCkpO1xufVxuZnVuY3Rpb24gaWNvbkZyb21NYXBwaW5nKG1hcHBpbmcsIHByZWZpeCwgaWNvbk5hbWUpIHtcbiAgaWYgKG1hcHBpbmcgJiYgbWFwcGluZ1twcmVmaXhdICYmIG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICBpY29uOiBtYXBwaW5nW3ByZWZpeF1baWNvbk5hbWVdXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0h0bWwoYWJzdHJhY3ROb2Rlcykge1xuICB2YXIgdGFnID0gYWJzdHJhY3ROb2Rlcy50YWcsXG4gICAgICBfYWJzdHJhY3ROb2RlcyRhdHRyaWIgPSBhYnN0cmFjdE5vZGVzLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX2Fic3RyYWN0Tm9kZXMkYXR0cmliID09PSB2b2lkIDAgPyB7fSA6IF9hYnN0cmFjdE5vZGVzJGF0dHJpYixcbiAgICAgIF9hYnN0cmFjdE5vZGVzJGNoaWxkciA9IGFic3RyYWN0Tm9kZXMuY2hpbGRyZW4sXG4gICAgICBjaGlsZHJlbiA9IF9hYnN0cmFjdE5vZGVzJGNoaWxkciA9PT0gdm9pZCAwID8gW10gOiBfYWJzdHJhY3ROb2RlcyRjaGlsZHI7XG5cbiAgaWYgKHR5cGVvZiBhYnN0cmFjdE5vZGVzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBodG1sRXNjYXBlKGFic3RyYWN0Tm9kZXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIjxcIi5jb25jYXQodGFnLCBcIiBcIikuY29uY2F0KGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpLCBcIj5cIikuY29uY2F0KGNoaWxkcmVuLm1hcCh0b0h0bWwpLmpvaW4oJycpLCBcIjwvXCIpLmNvbmNhdCh0YWcsIFwiPlwiKTtcbiAgfVxufVxuXG52YXIgbm9vcCQyID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5mdW5jdGlvbiBpc1dhdGNoZWQobm9kZSkge1xuICB2YXIgaTJzdmcgPSBub2RlLmdldEF0dHJpYnV0ZSA/IG5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcpIDogbnVsbDtcbiAgcmV0dXJuIHR5cGVvZiBpMnN2ZyA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGdldE11dGF0b3IoKSB7XG4gIGlmIChjb25maWcuYXV0b1JlcGxhY2VTdmcgPT09IHRydWUpIHtcbiAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZTtcbiAgfVxuXG4gIHZhciBtdXRhdG9yID0gbXV0YXRvcnNbY29uZmlnLmF1dG9SZXBsYWNlU3ZnXTtcbiAgcmV0dXJuIG11dGF0b3IgfHwgbXV0YXRvcnMucmVwbGFjZTtcbn1cblxudmFyIG11dGF0b3JzID0ge1xuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKG11dGF0aW9uKSB7XG4gICAgdmFyIG5vZGUgPSBtdXRhdGlvblswXTtcbiAgICB2YXIgYWJzdHJhY3QgPSBtdXRhdGlvblsxXTtcbiAgICB2YXIgbmV3T3V0ZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgIH0pLmpvaW4oJ1xcbicpO1xuXG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLm91dGVySFRNTCkge1xuICAgICAgbm9kZS5vdXRlckhUTUwgPSBuZXdPdXRlckhUTUwgKyAoY29uZmlnLmtlZXBPcmlnaW5hbFNvdXJjZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3N2ZycgPyBcIjwhLS0gXCIuY29uY2F0KG5vZGUub3V0ZXJIVE1MLCBcIiAtLT5cIikgOiAnJyk7XG4gICAgfSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHZhciBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBub2RlKTtcbiAgICAgIG5ld05vZGUub3V0ZXJIVE1MID0gbmV3T3V0ZXJIVE1MO1xuICAgIH1cbiAgfSxcbiAgbmVzdDogZnVuY3Rpb24gbmVzdChtdXRhdGlvbikge1xuICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG4gICAgdmFyIGFic3RyYWN0ID0gbXV0YXRpb25bMV07IC8vIElmIHdlIGFscmVhZHkgaGF2ZSBhIHJlcGxhY2VkIG5vZGUgd2UgZG8gbm90IHdhbnQgdG8gY29udGludWUgbmVzdGluZyB3aXRoaW4gaXQuXG4gICAgLy8gU2hvcnQtY2lyY3VpdCB0byB0aGUgc3RhbmRhcmQgcmVwbGFjZW1lbnRcblxuICAgIGlmICh+Y2xhc3NBcnJheShub2RlKS5pbmRleE9mKGNvbmZpZy5yZXBsYWNlbWVudENsYXNzKSkge1xuICAgICAgcmV0dXJuIG11dGF0b3JzLnJlcGxhY2UobXV0YXRpb24pO1xuICAgIH1cblxuICAgIHZhciBmb3JTdmcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLS4qXCIpKTtcbiAgICBkZWxldGUgYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5zdHlsZTtcbiAgICBkZWxldGUgYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5pZDtcbiAgICB2YXIgc3BsaXRDbGFzc2VzID0gYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5jbGFzcy5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjbHMpIHtcbiAgICAgIGlmIChjbHMgPT09IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzIHx8IGNscy5tYXRjaChmb3JTdmcpKSB7XG4gICAgICAgIGFjYy50b1N2Zy5wdXNoKGNscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2MudG9Ob2RlLnB1c2goY2xzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7XG4gICAgICB0b05vZGU6IFtdLFxuICAgICAgdG9Tdmc6IFtdXG4gICAgfSk7XG4gICAgYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5jbGFzcyA9IHNwbGl0Q2xhc3Nlcy50b1N2Zy5qb2luKCcgJyk7XG4gICAgdmFyIG5ld0lubmVySFRNTCA9IGFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICB9KS5qb2luKCdcXG4nKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBzcGxpdENsYXNzZXMudG9Ob2RlLmpvaW4oJyAnKSk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRywgJycpO1xuICAgIG5vZGUuaW5uZXJIVE1MID0gbmV3SW5uZXJIVE1MO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwZXJmb3JtT3BlcmF0aW9uU3luYyhvcCkge1xuICBvcCgpO1xufVxuXG5mdW5jdGlvbiBwZXJmb3JtKG11dGF0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGNhbGxiYWNrRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG5vb3AkMjtcblxuICBpZiAobXV0YXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZnJhbWUgPSBwZXJmb3JtT3BlcmF0aW9uU3luYztcblxuICAgIGlmIChjb25maWcubXV0YXRlQXBwcm9hY2ggPT09IE1VVEFUSU9OX0FQUFJPQUNIX0FTWU5DKSB7XG4gICAgICBmcmFtZSA9IFdJTkRPVy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcGVyZm9ybU9wZXJhdGlvblN5bmM7XG4gICAgfVxuXG4gICAgZnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG11dGF0b3IgPSBnZXRNdXRhdG9yKCk7XG4gICAgICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ211dGF0ZScpO1xuICAgICAgbXV0YXRpb25zLm1hcChtdXRhdG9yKTtcbiAgICAgIG1hcmsoKTtcbiAgICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgICB9KTtcbiAgfVxufVxudmFyIGRpc2FibGVkID0gZmFsc2U7XG5mdW5jdGlvbiBkaXNhYmxlT2JzZXJ2YXRpb24oKSB7XG4gIGRpc2FibGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuYWJsZU9ic2VydmF0aW9uKCkge1xuICBkaXNhYmxlZCA9IGZhbHNlO1xufVxudmFyIG1vID0gbnVsbDtcbmZ1bmN0aW9uIG9ic2VydmUob3B0aW9ucykge1xuICBpZiAoIU1VVEFUSU9OX09CU0VSVkVSKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFjb25maWcub2JzZXJ2ZU11dGF0aW9ucykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0cmVlQ2FsbGJhY2sgPSBvcHRpb25zLnRyZWVDYWxsYmFjayxcbiAgICAgIG5vZGVDYWxsYmFjayA9IG9wdGlvbnMubm9kZUNhbGxiYWNrLFxuICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayA9IG9wdGlvbnMucHNldWRvRWxlbWVudHNDYWxsYmFjayxcbiAgICAgIF9vcHRpb25zJG9ic2VydmVNdXRhdCA9IG9wdGlvbnMub2JzZXJ2ZU11dGF0aW9uc1Jvb3QsXG4gICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdCA9IF9vcHRpb25zJG9ic2VydmVNdXRhdCA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfb3B0aW9ucyRvYnNlcnZlTXV0YXQ7XG4gIG1vID0gbmV3IE1VVEFUSU9OX09CU0VSVkVSKGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG4gICAgdG9BcnJheShvYmplY3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZCkge1xuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnICYmIG11dGF0aW9uUmVjb3JkLmFkZGVkTm9kZXMubGVuZ3RoID4gMCAmJiAhaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLmFkZGVkTm9kZXNbMF0pKSB7XG4gICAgICAgIGlmIChjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmVlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvblJlY29yZC50YXJnZXQucGFyZW50Tm9kZSAmJiBjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLnRhcmdldCkgJiYgfkFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04uaW5kZXhPZihtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgIHZhciBfZ2V0Q2Fub25pY2FsSWNvbiA9IGdldENhbm9uaWNhbEljb24oY2xhc3NBcnJheShtdXRhdGlvblJlY29yZC50YXJnZXQpKSxcbiAgICAgICAgICAgICAgcHJlZml4ID0gX2dldENhbm9uaWNhbEljb24ucHJlZml4LFxuICAgICAgICAgICAgICBpY29uTmFtZSA9IF9nZXRDYW5vbmljYWxJY29uLmljb25OYW1lO1xuXG4gICAgICAgICAgaWYgKHByZWZpeCkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnLCBwcmVmaXgpO1xuICAgICAgICAgIGlmIChpY29uTmFtZSkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1pY29uJywgaWNvbk5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICBtby5vYnNlcnZlKG9ic2VydmVNdXRhdGlvbnNSb290LCB7XG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlXG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgaWYgKCFtbykgcmV0dXJuO1xuICBtby5kaXNjb25uZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHN0eWxlUGFyc2VyIChub2RlKSB7XG4gIHZhciBzdHlsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICB2YXIgdmFsID0gW107XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgdmFsID0gc3R5bGUuc3BsaXQoJzsnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGUpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgdmFyIHByb3AgPSBzdHlsZXNbMF07XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZXMuc2xpY2UoMSk7XG5cbiAgICAgIGlmIChwcm9wICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWNjW3Byb3BdID0gdmFsdWUuam9pbignOicpLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBjbGFzc1BhcnNlciAobm9kZSkge1xuICB2YXIgZXhpc3RpbmdQcmVmaXggPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnKTtcbiAgdmFyIGV4aXN0aW5nSWNvbk5hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gIHZhciBpbm5lclRleHQgPSBub2RlLmlubmVyVGV4dCAhPT0gdW5kZWZpbmVkID8gbm9kZS5pbm5lclRleHQudHJpbSgpIDogJyc7XG4gIHZhciB2YWwgPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobm9kZSkpO1xuXG4gIGlmIChleGlzdGluZ1ByZWZpeCAmJiBleGlzdGluZ0ljb25OYW1lKSB7XG4gICAgdmFsLnByZWZpeCA9IGV4aXN0aW5nUHJlZml4O1xuICAgIHZhbC5pY29uTmFtZSA9IGV4aXN0aW5nSWNvbk5hbWU7XG4gIH1cblxuICBpZiAodmFsLnByZWZpeCAmJiBpbm5lclRleHQubGVuZ3RoID4gMSkge1xuICAgIHZhbC5pY29uTmFtZSA9IGJ5TGlnYXR1cmUodmFsLnByZWZpeCwgbm9kZS5pbm5lclRleHQpO1xuICB9IGVsc2UgaWYgKHZhbC5wcmVmaXggJiYgaW5uZXJUZXh0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHZhbC5pY29uTmFtZSA9IGJ5VW5pY29kZSh2YWwucHJlZml4LCB0b0hleChub2RlLmlubmVyVGV4dCkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIHBhcnNlVHJhbnNmb3JtU3RyaW5nID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgc2l6ZTogMTYsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGZsaXBYOiBmYWxzZSxcbiAgICBmbGlwWTogZmFsc2UsXG4gICAgcm90YXRlOiAwXG4gIH07XG5cbiAgaWYgKCF0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cmFuc2Zvcm1TdHJpbmcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuKSB7XG4gICAgICB2YXIgcGFydHMgPSBuLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy0nKTtcbiAgICAgIHZhciBmaXJzdCA9IHBhcnRzWzBdO1xuICAgICAgdmFyIHJlc3QgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAnaCcpIHtcbiAgICAgICAgYWNjLmZsaXBYID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0ICYmIHJlc3QgPT09ICd2Jykge1xuICAgICAgICBhY2MuZmxpcFkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICByZXN0ID0gcGFyc2VGbG9hdChyZXN0KTtcblxuICAgICAgaWYgKGlzTmFOKHJlc3QpKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZmlyc3QpIHtcbiAgICAgICAgY2FzZSAnZ3Jvdyc6XG4gICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc2hyaW5rJzpcbiAgICAgICAgICBhY2Muc2l6ZSA9IGFjYy5zaXplIC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBhY2MueCA9IGFjYy54IC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgYWNjLnggPSBhY2MueCArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgIGFjYy55ID0gYWNjLnkgLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgIGFjYy55ID0gYWNjLnkgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgICAgYWNjLnJvdGF0ZSA9IGFjYy5yb3RhdGUgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHRyYW5zZm9ybSk7XG4gIH1cbn07XG5mdW5jdGlvbiB0cmFuc2Zvcm1QYXJzZXIgKG5vZGUpIHtcbiAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtU3RyaW5nKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXRyYW5zZm9ybScpKTtcbn1cblxuZnVuY3Rpb24gc3ltYm9sUGFyc2VyIChub2RlKSB7XG4gIHZhciBzeW1ib2wgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1zeW1ib2wnKTtcbiAgcmV0dXJuIHN5bWJvbCA9PT0gbnVsbCA/IGZhbHNlIDogc3ltYm9sID09PSAnJyA/IHRydWUgOiBzeW1ib2w7XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIGV4dHJhQXR0cmlidXRlcyA9IHRvQXJyYXkobm9kZS5hdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cikge1xuICAgIGlmIChhY2MubmFtZSAhPT0gJ2NsYXNzJyAmJiBhY2MubmFtZSAhPT0gJ3N0eWxlJykge1xuICAgICAgYWNjW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIHRpdGxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG5cbiAgaWYgKGNvbmZpZy5hdXRvQTExeSkge1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IFwiXCIuY29uY2F0KGNvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBcIi10aXRsZS1cIikuY29uY2F0KG5leHRVbmlxdWVJZCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydmb2N1c2FibGUnXSA9ICdmYWxzZSc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4dHJhQXR0cmlidXRlcztcbn1cblxuZnVuY3Rpb24gbWFza1BhcnNlciAobm9kZSkge1xuICB2YXIgbWFzayA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLW1hc2snKTtcblxuICBpZiAoIW1hc2spIHtcbiAgICByZXR1cm4gZW1wdHlDYW5vbmljYWxJY29uKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldENhbm9uaWNhbEljb24obWFzay5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkudHJpbSgpO1xuICAgIH0pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBibGFua01ldGEoKSB7XG4gIHJldHVybiB7XG4gICAgaWNvbk5hbWU6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgcHJlZml4OiBudWxsLFxuICAgIHRyYW5zZm9ybTogbWVhbmluZ2xlc3NUcmFuc2Zvcm0sXG4gICAgc3ltYm9sOiBmYWxzZSxcbiAgICBtYXNrOiBudWxsLFxuICAgIGV4dHJhOiB7XG4gICAgICBjbGFzc2VzOiBbXSxcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlTWV0YShub2RlKSB7XG4gIHZhciBfY2xhc3NQYXJzZXIgPSBjbGFzc1BhcnNlcihub2RlKSxcbiAgICAgIGljb25OYW1lID0gX2NsYXNzUGFyc2VyLmljb25OYW1lLFxuICAgICAgcHJlZml4ID0gX2NsYXNzUGFyc2VyLnByZWZpeCxcbiAgICAgIGV4dHJhQ2xhc3NlcyA9IF9jbGFzc1BhcnNlci5yZXN0O1xuXG4gIHZhciBleHRyYVN0eWxlcyA9IHN0eWxlUGFyc2VyKG5vZGUpO1xuICB2YXIgdHJhbnNmb3JtID0gdHJhbnNmb3JtUGFyc2VyKG5vZGUpO1xuICB2YXIgc3ltYm9sID0gc3ltYm9sUGFyc2VyKG5vZGUpO1xuICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gYXR0cmlidXRlc1BhcnNlcihub2RlKTtcbiAgdmFyIG1hc2sgPSBtYXNrUGFyc2VyKG5vZGUpO1xuICByZXR1cm4ge1xuICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICB0aXRsZTogbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyksXG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgbWFzazogbWFzayxcbiAgICBleHRyYToge1xuICAgICAgY2xhc3NlczogZXh0cmFDbGFzc2VzLFxuICAgICAgc3R5bGVzOiBleHRyYVN0eWxlcyxcbiAgICAgIGF0dHJpYnV0ZXM6IGV4dHJhQXR0cmlidXRlc1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gTWlzc2luZ0ljb24oZXJyb3IpIHtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdJY29uJztcbiAgdGhpcy5tZXNzYWdlID0gZXJyb3IgfHwgJ0ljb24gdW5hdmFpbGFibGUnO1xuICB0aGlzLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG59XG5NaXNzaW5nSWNvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nSWNvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nSWNvbjtcblxudmFyIEZJTEwgPSB7XG4gIGZpbGw6ICdjdXJyZW50Q29sb3InXG59O1xudmFyIEFOSU1BVElPTl9CQVNFID0ge1xuICBhdHRyaWJ1dGVUeXBlOiAnWE1MJyxcbiAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJyxcbiAgZHVyOiAnMnMnXG59O1xudmFyIFJJTkcgPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgZDogJ00xNTYuNSw0NDcuN2wtMTIuNiwyOS41Yy0xOC43LTkuNS0zNS45LTIxLjItNTEuNS0zNC45bDIyLjctMjIuN0MxMjcuNiw0MzAuNSwxNDEuNSw0NDAsMTU2LjUsNDQ3Ljd6IE00MC42LDI3Mkg4LjUgYzEuNCwyMS4yLDUuNCw0MS43LDExLjcsNjEuMUw1MCwzMjEuMkM0NS4xLDMwNS41LDQxLjgsMjg5LDQwLjYsMjcyeiBNNDAuNiwyNDBjMS40LTE4LjgsNS4yLTM3LDExLjEtNTQuMWwtMjkuNS0xMi42IEMxNC43LDE5NC4zLDEwLDIxNi43LDguNSwyNDBINDAuNnogTTY0LjMsMTU2LjVjNy44LTE0LjksMTcuMi0yOC44LDI4LjEtNDEuNUw2OS43LDkyLjNjLTEzLjcsMTUuNi0yNS41LDMyLjgtMzQuOSw1MS41IEw2NC4zLDE1Ni41eiBNMzk3LDQxOS42Yy0xMy45LDEyLTI5LjQsMjIuMy00Ni4xLDMwLjRsMTEuOSwyOS44YzIwLjctOS45LDM5LjgtMjIuNiw1Ni45LTM3LjZMMzk3LDQxOS42eiBNMTE1LDkyLjQgYzEzLjktMTIsMjkuNC0yMi4zLDQ2LjEtMzAuNGwtMTEuOS0yOS44Yy0yMC43LDkuOS0zOS44LDIyLjYtNTYuOCwzNy42TDExNSw5Mi40eiBNNDQ3LjcsMzU1LjVjLTcuOCwxNC45LTE3LjIsMjguOC0yOC4xLDQxLjUgbDIyLjcsMjIuN2MxMy43LTE1LjYsMjUuNS0zMi45LDM0LjktNTEuNUw0NDcuNywzNTUuNXogTTQ3MS40LDI3MmMtMS40LDE4LjgtNS4yLDM3LTExLjEsNTQuMWwyOS41LDEyLjYgYzcuNS0yMS4xLDEyLjItNDMuNSwxMy42LTY2LjhINDcxLjR6IE0zMjEuMiw0NjJjLTE1LjcsNS0zMi4yLDguMi00OS4yLDkuNHYzMi4xYzIxLjItMS40LDQxLjctNS40LDYxLjEtMTEuN0wzMjEuMiw0NjJ6IE0yNDAsNDcxLjRjLTE4LjgtMS40LTM3LTUuMi01NC4xLTExLjFsLTEyLjYsMjkuNWMyMS4xLDcuNSw0My41LDEyLjIsNjYuOCwxMy42VjQ3MS40eiBNNDYyLDE5MC44YzUsMTUuNyw4LjIsMzIuMiw5LjQsNDkuMmgzMi4xIGMtMS40LTIxLjItNS40LTQxLjctMTEuNy02MS4xTDQ2MiwxOTAuOHogTTkyLjQsMzk3Yy0xMi0xMy45LTIyLjMtMjkuNC0zMC40LTQ2LjFsLTI5LjgsMTEuOWM5LjksMjAuNywyMi42LDM5LjgsMzcuNiw1Ni45IEw5Mi40LDM5N3ogTTI3Miw0MC42YzE4LjgsMS40LDM2LjksNS4yLDU0LjEsMTEuMWwxMi42LTI5LjVDMzE3LjcsMTQuNywyOTUuMywxMCwyNzIsOC41VjQwLjZ6IE0xOTAuOCw1MCBjMTUuNy01LDMyLjItOC4yLDQ5LjItOS40VjguNWMtMjEuMiwxLjQtNDEuNyw1LjQtNjEuMSwxMS43TDE5MC44LDUweiBNNDQyLjMsOTIuM0w0MTkuNiwxMTVjMTIsMTMuOSwyMi4zLDI5LjQsMzAuNSw0Ni4xIGwyOS44LTExLjlDNDcwLDEyOC41LDQ1Ny4zLDEwOS40LDQ0Mi4zLDkyLjN6IE0zOTcsOTIuNGwyMi43LTIyLjdjLTE1LjYtMTMuNy0zMi44LTI1LjUtNTEuNS0zNC45bC0xMi42LDI5LjUgQzM3MC40LDcyLjEsMzg0LjQsODEuNSwzOTcsOTIuNHonXG4gIH0pXG59O1xuXG52YXIgT1BBQ0lUWV9BTklNQVRFID0gX29iamVjdFNwcmVhZCh7fSwgQU5JTUFUSU9OX0JBU0UsIHtcbiAgYXR0cmlidXRlTmFtZTogJ29wYWNpdHknXG59KTtcblxudmFyIERPVCA9IHtcbiAgdGFnOiAnY2lyY2xlJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIGN4OiAnMjU2JyxcbiAgICBjeTogJzM2NCcsXG4gICAgcjogJzI4J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQU5JTUFUSU9OX0JBU0UsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIHZhbHVlczogJzI4OzE0OzI4OzI4OzE0OzI4OydcbiAgICB9KVxuICB9LCB7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7XG4gICAgICB2YWx1ZXM6ICcxOzA7MTsxOzA7MTsnXG4gICAgfSlcbiAgfV1cbn07XG52YXIgUVVFU1RJT04gPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgb3BhY2l0eTogJzEnLFxuICAgIGQ6ICdNMjYzLjcsMzEyaC0xNmMtNi42LDAtMTItNS40LTEyLTEyYzAtNzEsNzcuNC02My45LDc3LjQtMTA3LjhjMC0yMC0xNy44LTQwLjItNTcuNC00MC4yYy0yOS4xLDAtNDQuMyw5LjYtNTkuMiwyOC43IGMtMy45LDUtMTEuMSw2LTE2LjIsMi40bC0xMy4xLTkuMmMtNS42LTMuOS02LjktMTEuOC0yLjYtMTcuMmMyMS4yLTI3LjIsNDYuNC00NC43LDkxLjItNDQuN2M1Mi4zLDAsOTcuNCwyOS44LDk3LjQsODAuMiBjMCw2Ny42LTc3LjQsNjMuNS03Ny40LDEwNy44QzI3NS43LDMwNi42LDI3MC4zLDMxMiwyNjMuNywzMTJ6J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7XG4gICAgICB2YWx1ZXM6ICcxOzA7MDswOzA7MTsnXG4gICAgfSlcbiAgfV1cbn07XG52YXIgRVhDTEFNQVRJT04gPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgb3BhY2l0eTogJzAnLFxuICAgIGQ6ICdNMjMyLjUsMTM0LjVsNywxNjhjMC4zLDYuNCw1LjYsMTEuNSwxMiwxMS41aDljNi40LDAsMTEuNy01LjEsMTItMTEuNWw3LTE2OGMwLjMtNi44LTUuMi0xMi41LTEyLTEyLjVoLTIzIEMyMzcuNywxMjIsMjMyLjIsMTI3LjcsMjMyLjUsMTM0LjV6J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7XG4gICAgICB2YWx1ZXM6ICcwOzA7MTsxOzA7MDsnXG4gICAgfSlcbiAgfV1cbn07XG52YXIgbWlzc2luZyA9IHtcbiAgdGFnOiAnZycsXG4gIGNoaWxkcmVuOiBbUklORywgRE9ULCBRVUVTVElPTiwgRVhDTEFNQVRJT05dXG59O1xuXG52YXIgc3R5bGVzJDIgPSBuYW1lc3BhY2Uuc3R5bGVzO1xuZnVuY3Rpb24gYXNGb3VuZEljb24oaWNvbikge1xuICB2YXIgd2lkdGggPSBpY29uWzBdO1xuICB2YXIgaGVpZ2h0ID0gaWNvblsxXTtcblxuICB2YXIgX2ljb24kc2xpY2UgPSBpY29uLnNsaWNlKDQpLFxuICAgICAgX2ljb24kc2xpY2UyID0gX3NsaWNlZFRvQXJyYXkoX2ljb24kc2xpY2UsIDEpLFxuICAgICAgdmVjdG9yRGF0YSA9IF9pY29uJHNsaWNlMlswXTtcblxuICB2YXIgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmVjdG9yRGF0YSkpIHtcbiAgICBlbGVtZW50ID0ge1xuICAgICAgdGFnOiAnZycsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5HUk9VUClcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuU0VDT05EQVJZKSxcbiAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBkOiB2ZWN0b3JEYXRhWzBdXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuUFJJTUFSWSksXG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgZDogdmVjdG9yRGF0YVsxXVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudCA9IHtcbiAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgZDogdmVjdG9yRGF0YVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvdW5kOiB0cnVlLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBpY29uOiBlbGVtZW50XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KSB7XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgdmFsID0ge1xuICAgICAgZm91bmQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IDUxMixcbiAgICAgIGhlaWdodDogNTEyLFxuICAgICAgaWNvbjogbWlzc2luZ1xuICAgIH07XG5cbiAgICBpZiAoaWNvbk5hbWUgJiYgcHJlZml4ICYmIHN0eWxlcyQyW3ByZWZpeF0gJiYgc3R5bGVzJDJbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICAgIHZhciBpY29uID0gc3R5bGVzJDJbcHJlZml4XVtpY29uTmFtZV07XG4gICAgICByZXR1cm4gcmVzb2x2ZShhc0ZvdW5kSWNvbihpY29uKSk7XG4gICAgfVxuXG4gICAgdmFyIGhlYWRlcnMgPSB7fTtcblxuICAgIGlmIChfdHlwZW9mKFdJTkRPVy5Gb250QXdlc29tZUtpdENvbmZpZykgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuRm9udEF3ZXNvbWVLaXRDb25maWcudG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBoZWFkZXJzWydmYS1raXQtdG9rZW4nXSA9IFdJTkRPVy5Gb250QXdlc29tZUtpdENvbmZpZy50b2tlbjtcbiAgICB9XG5cbiAgICBpZiAoaWNvbk5hbWUgJiYgcHJlZml4ICYmICFjb25maWcuc2hvd01pc3NpbmdJY29ucykge1xuICAgICAgcmVqZWN0KG5ldyBNaXNzaW5nSWNvbihcIkljb24gaXMgbWlzc2luZyBmb3IgcHJlZml4IFwiLmNvbmNhdChwcmVmaXgsIFwiIHdpdGggaWNvbiBuYW1lIFwiKS5jb25jYXQoaWNvbk5hbWUpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUodmFsKTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgc3R5bGVzJDMgPSBuYW1lc3BhY2Uuc3R5bGVzO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24obm9kZSwgbm9kZU1ldGEpIHtcbiAgdmFyIGljb25OYW1lID0gbm9kZU1ldGEuaWNvbk5hbWUsXG4gICAgICB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgcHJlZml4ID0gbm9kZU1ldGEucHJlZml4LFxuICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgc3ltYm9sID0gbm9kZU1ldGEuc3ltYm9sLFxuICAgICAgbWFzayA9IG5vZGVNZXRhLm1hc2ssXG4gICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcGlja2VkLmFsbChbZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCksIGZpbmRJY29uKG1hc2suaWNvbk5hbWUsIG1hc2sucHJlZml4KV0pLnRoZW4oZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgIG1haW4gPSBfcmVmMlswXSxcbiAgICAgICAgICBtYXNrID0gX3JlZjJbMV07XG5cbiAgICAgIHJlc29sdmUoW25vZGUsIG1ha2VJbmxpbmVTdmdBYnN0cmFjdCh7XG4gICAgICAgIGljb25zOiB7XG4gICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICBtYXNrOiBtYXNrXG4gICAgICAgIH0sXG4gICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICAgICAgbWFzazogbWFzayxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgfSldKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTGF5ZXJzVGV4dChub2RlLCBub2RlTWV0YSkge1xuICB2YXIgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgIGV4dHJhID0gbm9kZU1ldGEuZXh0cmE7XG4gIHZhciB3aWR0aCA9IG51bGw7XG4gIHZhciBoZWlnaHQgPSBudWxsO1xuXG4gIGlmIChJU19JRSkge1xuICAgIHZhciBjb21wdXRlZEZvbnRTaXplID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5mb250U2l6ZSwgMTApO1xuICAgIHZhciBib3VuZGluZ0NsaWVudFJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHdpZHRoID0gYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIC8gY29tcHV0ZWRGb250U2l6ZTtcbiAgICBoZWlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IC8gY29tcHV0ZWRGb250U2l6ZTtcbiAgfVxuXG4gIGlmIChjb25maWcuYXV0b0ExMXkgJiYgIXRpdGxlKSB7XG4gICAgZXh0cmEuYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgfVxuXG4gIHJldHVybiBwaWNrZWQucmVzb2x2ZShbbm9kZSwgbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgY29udGVudDogbm9kZS5pbm5lckhUTUwsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBleHRyYTogZXh0cmEsXG4gICAgd2F0Y2hhYmxlOiB0cnVlXG4gIH0pXSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTXV0YXRpb24obm9kZSkge1xuICB2YXIgbm9kZU1ldGEgPSBwYXJzZU1ldGEobm9kZSk7XG5cbiAgaWYgKH5ub2RlTWV0YS5leHRyYS5jbGFzc2VzLmluZGV4T2YoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FKSkge1xuICAgIHJldHVybiBnZW5lcmF0ZUxheWVyc1RleHQobm9kZSwgbm9kZU1ldGEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24obm9kZSwgbm9kZU1ldGEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uVHJlZShyb290KSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgdmFyIGh0bWxDbGFzc0xpc3QgPSBET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0O1xuXG4gIHZhciBoY2xBZGQgPSBmdW5jdGlvbiBoY2xBZGQoc3VmZml4KSB7XG4gICAgcmV0dXJuIGh0bWxDbGFzc0xpc3QuYWRkKFwiXCIuY29uY2F0KEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUywgXCItXCIpLmNvbmNhdChzdWZmaXgpKTtcbiAgfTtcblxuICB2YXIgaGNsUmVtb3ZlID0gZnVuY3Rpb24gaGNsUmVtb3ZlKHN1ZmZpeCkge1xuICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LnJlbW92ZShcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gIH07XG5cbiAgdmFyIHByZWZpeGVzID0gY29uZmlnLmF1dG9GZXRjaFN2ZyA/IE9iamVjdC5rZXlzKFBSRUZJWF9UT19TVFlMRSkgOiBPYmplY3Qua2V5cyhzdHlsZXMkMyk7XG4gIHZhciBwcmVmaXhlc0RvbVF1ZXJ5ID0gW1wiLlwiLmNvbmNhdChMQVlFUlNfVEVYVF9DTEFTU05BTUUsIFwiOm5vdChbXCIpLmNvbmNhdChEQVRBX0ZBX0kyU1ZHLCBcIl0pXCIpXS5jb25jYXQocHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIFwiLlwiLmNvbmNhdChwLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKTtcbiAgfSkpLmpvaW4oJywgJyk7XG5cbiAgaWYgKHByZWZpeGVzRG9tUXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNhbmRpZGF0ZXMgPSBbXTtcblxuICB0cnkge1xuICAgIGNhbmRpZGF0ZXMgPSB0b0FycmF5KHJvb3QucXVlcnlTZWxlY3RvckFsbChwcmVmaXhlc0RvbVF1ZXJ5KSk7XG4gIH0gY2F0Y2ggKGUpIHsvLyBub29wXG4gIH1cblxuICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgaGNsQWRkKCdwZW5kaW5nJyk7XG4gICAgaGNsUmVtb3ZlKCdjb21wbGV0ZScpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtYXJrID0gcGVyZi5iZWdpbignb25UcmVlJyk7XG4gIHZhciBtdXRhdGlvbnMgPSBjYW5kaWRhdGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBtdXRhdGlvbiA9IGdlbmVyYXRlTXV0YXRpb24obm9kZSk7XG5cbiAgICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgICBhY2MucHVzaChtdXRhdGlvbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFQUk9EVUNUSU9OKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgTWlzc2luZ0ljb24pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcGlja2VkLmFsbChtdXRhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc29sdmVkTXV0YXRpb25zKSB7XG4gICAgICBwZXJmb3JtKHJlc29sdmVkTXV0YXRpb25zLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhjbEFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGhjbEFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgaGNsUmVtb3ZlKCdwZW5kaW5nJyk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgIG1hcmsoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgbWFyaygpO1xuICAgICAgcmVqZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25Ob2RlKG5vZGUpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpLnRoZW4oZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICBwZXJmb3JtKFttdXRhdGlvbl0sIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgcG9zaXRpb24pIHtcbiAgdmFyIHBlbmRpbmdBdHRyaWJ1dGUgPSBcIlwiLmNvbmNhdChEQVRBX0ZBX1BTRVVET19FTEVNRU5UX1BFTkRJTkcpLmNvbmNhdChwb3NpdGlvbi5yZXBsYWNlKCc6JywgJy0nKSk7XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSkgIT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgbm9kZSBpcyBhbHJlYWR5IGJlaW5nIHByb2Nlc3NlZFxuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0b0FycmF5KG5vZGUuY2hpbGRyZW4pO1xuICAgIHZhciBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpID09PSBwb3NpdGlvbjtcbiAgICB9KVswXTtcbiAgICB2YXIgc3R5bGVzID0gV0lORE9XLmdldENvbXB1dGVkU3R5bGUobm9kZSwgcG9zaXRpb24pO1xuICAgIHZhciBmb250RmFtaWx5ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtZmFtaWx5JykubWF0Y2goRk9OVF9GQU1JTFlfUEFUVEVSTik7XG4gICAgdmFyIGZvbnRXZWlnaHQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC13ZWlnaHQnKTtcblxuICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCAmJiAhZm9udEZhbWlseSkge1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgaXQgYnV0IHRoZSBjdXJyZW50IGNvbXB1dGVkIHN0eWxlIGRvZXMgbm90IHJlc3VsdCBpbiBhIGZvbnQtZmFtaWx5LFxuICAgICAgLy8gdGhhdCBwcm9iYWJseSBtZWFucyB0aGF0IGEgY2xhc3MgbmFtZSB0aGF0IHdhcyBwcmV2aW91c2x5IHByZXNlbnQgdG8gbWFrZSB0aGUgaWNvbiBoYXMgYmVlblxuICAgICAgLy8gcmVtb3ZlZC4gU28gd2Ugbm93IHNob3VsZCBkZWxldGUgdGhlIGljb24uXG4gICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSBlbHNlIGlmIChmb250RmFtaWx5KSB7XG4gICAgICB2YXIgY29udGVudCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG4gICAgICB2YXIgcHJlZml4ID0gflsnU29saWQnLCAnUmVndWxhcicsICdMaWdodCcsICdEdW90b25lJywgJ0JyYW5kcyddLmluZGV4T2YoZm9udEZhbWlseVsxXSkgPyBTVFlMRV9UT19QUkVGSVhbZm9udEZhbWlseVsxXS50b0xvd2VyQ2FzZSgpXSA6IEZPTlRfV0VJR0hUX1RPX1BSRUZJWFtmb250V2VpZ2h0XTtcbiAgICAgIHZhciBoZXhWYWx1ZSA9IHRvSGV4KGNvbnRlbnQubGVuZ3RoID09PSAzID8gY29udGVudC5zdWJzdHIoMSwgMSkgOiBjb250ZW50KTtcbiAgICAgIHZhciBpY29uTmFtZSA9IGJ5VW5pY29kZShwcmVmaXgsIGhleFZhbHVlKTtcbiAgICAgIHZhciBpY29uSWRlbnRpZmllciA9IGljb25OYW1lOyAvLyBPbmx5IGNvbnZlcnQgdGhlIHBzZXVkbyBlbGVtZW50IGluIHRoaXMgOmJlZm9yZS86YWZ0ZXIgcG9zaXRpb24gaW50byBhbiBpY29uIGlmIHdlIGhhdmVuJ3RcbiAgICAgIC8vIGFscmVhZHkgZG9uZSBzbyB3aXRoIHRoZSBzYW1lIHByZWZpeCBhbmQgaWNvbk5hbWVcblxuICAgICAgaWYgKGljb25OYW1lICYmICghYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgfHwgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfUFJFRklYKSAhPT0gcHJlZml4IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX0lDT04pICE9PSBpY29uSWRlbnRpZmllcikpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSwgaWNvbklkZW50aWZpZXIpO1xuXG4gICAgICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCkge1xuICAgICAgICAgIC8vIERlbGV0ZSB0aGUgb2xkIG9uZSwgc2luY2Ugd2UncmUgcmVwbGFjaW5nIGl0IHdpdGggYSBuZXcgb25lXG4gICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWV0YSA9IGJsYW5rTWV0YSgpO1xuICAgICAgICB2YXIgZXh0cmEgPSBtZXRhLmV4dHJhO1xuICAgICAgICBleHRyYS5hdHRyaWJ1dGVzW0RBVEFfRkFfUFNFVURPX0VMRU1FTlRdID0gcG9zaXRpb247XG4gICAgICAgIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLnRoZW4oZnVuY3Rpb24gKG1haW4pIHtcbiAgICAgICAgICB2YXIgYWJzdHJhY3QgPSBtYWtlSW5saW5lU3ZnQWJzdHJhY3QoX29iamVjdFNwcmVhZCh7fSwgbWV0YSwge1xuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICAgICAgbWFzazogZW1wdHlDYW5vbmljYWxJY29uKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgIGljb25OYW1lOiBpY29uSWRlbnRpZmllcixcbiAgICAgICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuXG4gICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAnOmJlZm9yZScpIHtcbiAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShub2RlKSB7XG4gIHJldHVybiBwaWNrZWQuYWxsKFtyZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgJzpiZWZvcmUnKSwgcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6YWZ0ZXInKV0pO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzYWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmhlYWQgJiYgIX5UQUdOQU1FU19UT19TS0lQX0ZPUl9QU0VVRE9FTEVNRU5UUy5pbmRleE9mKG5vZGUudGFnTmFtZS50b1VwcGVyQ2FzZSgpKSAmJiAhbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9QU0VVRE9fRUxFTUVOVCkgJiYgKCFub2RlLnBhcmVudE5vZGUgfHwgbm9kZS5wYXJlbnROb2RlLnRhZ05hbWUgIT09ICdzdmcnKTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoUHNldWRvRWxlbWVudHMgKHJvb3QpIHtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBvcGVyYXRpb25zID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSkuZmlsdGVyKHByb2Nlc3NhYmxlKS5tYXAocmVwbGFjZSk7XG4gICAgdmFyIGVuZCA9IHBlcmYuYmVnaW4oJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJyk7XG4gICAgZGlzYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgcGlja2VkLmFsbChvcGVyYXRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVuZCgpO1xuICAgICAgZW5hYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBlbmQoKTtcbiAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICByZWplY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciBiYXNlU3R5bGVzID0gXCJzdmc6bm90KDpyb290KS5zdmctaW5saW5lLS1mYSB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGhlaWdodDogMWVtO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1sZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEge1xcbiAgd2lkdGg6IDAuMDYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0yIHtcXG4gIHdpZHRoOiAwLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0zIHtcXG4gIHdpZHRoOiAwLjE4NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNCB7XFxuICB3aWR0aDogMC4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy01IHtcXG4gIHdpZHRoOiAwLjMxMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNiB7XFxuICB3aWR0aDogMC4zNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNyB7XFxuICB3aWR0aDogMC40Mzc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTgge1xcbiAgd2lkdGg6IDAuNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy05IHtcXG4gIHdpZHRoOiAwLjU2MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTAge1xcbiAgd2lkdGg6IDAuNjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTExIHtcXG4gIHdpZHRoOiAwLjY4NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTIge1xcbiAgd2lkdGg6IDAuNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTMge1xcbiAgd2lkdGg6IDAuODEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNCB7XFxuICB3aWR0aDogMC44NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTUge1xcbiAgd2lkdGg6IDAuOTM3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNiB7XFxuICB3aWR0aDogMWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNyB7XFxuICB3aWR0aDogMS4wNjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE4IHtcXG4gIHdpZHRoOiAxLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xOSB7XFxuICB3aWR0aDogMS4xODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTIwIHtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMC4zZW07XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWJvcmRlciB7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtbGkge1xcbiAgd2lkdGg6IDJlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWZ3IHtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcblxcbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmZhLWxheWVycyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4xMjVlbTtcXG4gIHdpZHRoOiAxZW07XFxufVxcbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy1jb3VudGVyLCAuZmEtbGF5ZXJzLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRleHQge1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy1jb3VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjI1M2E7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMS41ZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1heC13aWR0aDogNWVtO1xcbiAgbWluLXdpZHRoOiAxLjVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICByaWdodDogMDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy1ib3R0b20tcmlnaHQge1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGF1dG87XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWJvdHRvbS1sZWZ0IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1yaWdodCB7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtdG9wLWxlZnQge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi5mYS1sZyB7XFxuICBmb250LXNpemU6IDEuMzMzMzMzMzMzM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4wNjY3ZW07XFxufVxcblxcbi5mYS14cyB7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG59XFxuXFxuLmZhLXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcXG59XFxuXFxuLmZhLTF4IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uZmEtMngge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5mYS0zeCB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmZhLTR4IHtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbn1cXG5cXG4uZmEtNXgge1xcbiAgZm9udC1zaXplOiA1ZW07XFxufVxcblxcbi5mYS02eCB7XFxuICBmb250LXNpemU6IDZlbTtcXG59XFxuXFxuLmZhLTd4IHtcXG4gIGZvbnQtc2l6ZTogN2VtO1xcbn1cXG5cXG4uZmEtOHgge1xcbiAgZm9udC1zaXplOiA4ZW07XFxufVxcblxcbi5mYS05eCB7XFxuICBmb250LXNpemU6IDllbTtcXG59XFxuXFxuLmZhLTEweCB7XFxuICBmb250LXNpemU6IDEwZW07XFxufVxcblxcbi5mYS1mdyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG5cXG4uZmEtdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uZmEtdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mYS1saSB7XFxuICBsZWZ0OiAtMmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4uZmEtYm9yZGVyIHtcXG4gIGJvcmRlcjogc29saWQgMC4wOGVtICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiAwLjFlbTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuMjVlbSAwLjE1ZW07XFxufVxcblxcbi5mYS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5mYS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmZhLmZhLXB1bGwtbGVmdCxcXG4uZmFzLmZhLXB1bGwtbGVmdCxcXG4uZmFyLmZhLXB1bGwtbGVmdCxcXG4uZmFsLmZhLXB1bGwtbGVmdCxcXG4uZmFiLmZhLXB1bGwtbGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xcbn1cXG4uZmEuZmEtcHVsbC1yaWdodCxcXG4uZmFzLmZhLXB1bGwtcmlnaHQsXFxuLmZhci5mYS1wdWxsLXJpZ2h0LFxcbi5mYWwuZmEtcHVsbC1yaWdodCxcXG4uZmFiLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xcbn1cXG5cXG4uZmEtc3BpbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbi5mYS1wdWxzZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5mYS1yb3RhdGUtOTAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5mYS1yb3RhdGUtMTgwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5mYS1yb3RhdGUtMjcwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcblxcbi5mYS1mbGlwLWhvcml6b250YWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG59XFxuXFxuLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG59XFxuXFxuLmZhLWZsaXAtYm90aCwgLmZhLWZsaXAtaG9yaXpvbnRhbC5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIC0xKTtcXG59XFxuXFxuOnJvb3QgLmZhLXJvdGF0ZS05MCxcXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcXG46cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLFxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsLFxcbjpyb290IC5mYS1mbGlwLWJvdGgge1xcbiAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XFxuICAgICAgICAgIGZpbHRlcjogbm9uZTtcXG59XFxuXFxuLmZhLXN0YWNrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIuNWVtO1xcbn1cXG5cXG4uZmEtc3RhY2stMXgsXFxuLmZhLXN0YWNrLTJ4IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTF4IHtcXG4gIGhlaWdodDogMWVtO1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTJ4IHtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDIuNWVtO1xcbn1cXG5cXG4uZmEtaW52ZXJzZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnNyLW9ubHkge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLCAuc3Itb25seS1mb2N1c2FibGU6Zm9jdXMge1xcbiAgY2xpcDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgLmZhLXByaW1hcnkge1xcbiAgZmlsbDogdmFyKC0tZmEtcHJpbWFyeS1jb2xvciwgY3VycmVudENvbG9yKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1wcmltYXJ5LW9wYWNpdHksIDEpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgLmZhLXNlY29uZGFyeSB7XFxuICBmaWxsOiB2YXIoLS1mYS1zZWNvbmRhcnktY29sb3IsIGN1cnJlbnRDb2xvcik7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1zZWNvbmRhcnktb3BhY2l0eSwgMC40KTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN3YXAtb3BhY2l0eSAuZmEtcHJpbWFyeSB7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1zZWNvbmRhcnktb3BhY2l0eSwgMC40KTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN3YXAtb3BhY2l0eSAuZmEtc2Vjb25kYXJ5IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1wcmltYXJ5LW9wYWNpdHksIDEpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgbWFzayAuZmEtcHJpbWFyeSxcXG4uc3ZnLWlubGluZS0tZmEgbWFzayAuZmEtc2Vjb25kYXJ5IHtcXG4gIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4uZmFkLmZhLWludmVyc2Uge1xcbiAgY29sb3I6ICNmZmY7XFxufVwiO1xuXG5mdW5jdGlvbiBjc3MgKCkge1xuICB2YXIgZGZwID0gREVGQVVMVF9GQU1JTFlfUFJFRklYO1xuICB2YXIgZHJjID0gREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUztcbiAgdmFyIGZwID0gY29uZmlnLmZhbWlseVByZWZpeDtcbiAgdmFyIHJjID0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3M7XG4gIHZhciBzID0gYmFzZVN0eWxlcztcblxuICBpZiAoZnAgIT09IGRmcCB8fCByYyAhPT0gZHJjKSB7XG4gICAgdmFyIGRQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRmcCwgXCJcXFxcLVwiKSwgJ2cnKTtcbiAgICB2YXIgY3VzdG9tUHJvcFBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC0tXCIuY29uY2F0KGRmcCwgXCJcXFxcLVwiKSwgJ2cnKTtcbiAgICB2YXIgclBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIi5jb25jYXQoZHJjKSwgJ2cnKTtcbiAgICBzID0gcy5yZXBsYWNlKGRQYXR0LCBcIi5cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShjdXN0b21Qcm9wUGF0dCwgXCItLVwiLmNvbmNhdChmcCwgXCItXCIpKS5yZXBsYWNlKHJQYXR0LCBcIi5cIi5jb25jYXQocmMpKTtcbiAgfVxuXG4gIHJldHVybiBzO1xufVxuXG52YXIgTGlicmFyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExpYnJhcnkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpYnJhcnkpO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpYnJhcnksIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGRlZmluaXRpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWRkaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKHRoaXMuX3B1bGxEZWZpbml0aW9ucywge30pO1xuICAgICAgT2JqZWN0LmtleXMoYWRkaXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSA9IF9vYmplY3RTcHJlYWQoe30sIF90aGlzLmRlZmluaXRpb25zW2tleV0gfHwge30sIGFkZGl0aW9uc1trZXldKTtcbiAgICAgICAgZGVmaW5lSWNvbnMoa2V5LCBhZGRpdGlvbnNba2V5XSk7XG4gICAgICAgIGJ1aWxkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wdWxsRGVmaW5pdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3B1bGxEZWZpbml0aW9ucyhhZGRpdGlvbnMsIGRlZmluaXRpb24pIHtcbiAgICAgIHZhciBub3JtYWxpemVkID0gZGVmaW5pdGlvbi5wcmVmaXggJiYgZGVmaW5pdGlvbi5pY29uTmFtZSAmJiBkZWZpbml0aW9uLmljb24gPyB7XG4gICAgICAgIDA6IGRlZmluaXRpb25cbiAgICAgIH0gOiBkZWZpbml0aW9uO1xuICAgICAgT2JqZWN0LmtleXMobm9ybWFsaXplZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9ub3JtYWxpemVkJGtleSA9IG5vcm1hbGl6ZWRba2V5XSxcbiAgICAgICAgICAgIHByZWZpeCA9IF9ub3JtYWxpemVkJGtleS5wcmVmaXgsXG4gICAgICAgICAgICBpY29uTmFtZSA9IF9ub3JtYWxpemVkJGtleS5pY29uTmFtZSxcbiAgICAgICAgICAgIGljb24gPSBfbm9ybWFsaXplZCRrZXkuaWNvbjtcbiAgICAgICAgaWYgKCFhZGRpdGlvbnNbcHJlZml4XSkgYWRkaXRpb25zW3ByZWZpeF0gPSB7fTtcbiAgICAgICAgYWRkaXRpb25zW3ByZWZpeF1baWNvbk5hbWVdID0gaWNvbjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFkZGl0aW9ucztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlicmFyeTtcbn0oKTtcblxuZnVuY3Rpb24gZW5zdXJlQ3NzKCkge1xuICBpZiAoY29uZmlnLmF1dG9BZGRDc3MgJiYgIV9jc3NJbnNlcnRlZCkge1xuICAgIGluc2VydENzcyhjc3MoKSk7XG5cbiAgICBfY3NzSW5zZXJ0ZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwaU9iamVjdCh2YWwsIGFic3RyYWN0Q3JlYXRvcikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnYWJzdHJhY3QnLCB7XG4gICAgZ2V0OiBhYnN0cmFjdENyZWF0b3JcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdodG1sJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHZhbC5hYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdub2RlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgICAgIHZhciBjb250YWluZXIgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB2YWwuaHRtbDtcbiAgICAgIHJldHVybiBjb250YWluZXIuY2hpbGRyZW47XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gZmluZEljb25EZWZpbml0aW9uKGljb25Mb29rdXApIHtcbiAgdmFyIF9pY29uTG9va3VwJHByZWZpeCA9IGljb25Mb29rdXAucHJlZml4LFxuICAgICAgcHJlZml4ID0gX2ljb25Mb29rdXAkcHJlZml4ID09PSB2b2lkIDAgPyAnZmEnIDogX2ljb25Mb29rdXAkcHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBpY29uTG9va3VwLmljb25OYW1lO1xuICBpZiAoIWljb25OYW1lKSByZXR1cm47XG4gIHJldHVybiBpY29uRnJvbU1hcHBpbmcobGlicmFyeS5kZWZpbml0aW9ucywgcHJlZml4LCBpY29uTmFtZSkgfHwgaWNvbkZyb21NYXBwaW5nKG5hbWVzcGFjZS5zdHlsZXMsIHByZWZpeCwgaWNvbk5hbWUpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlSWNvbnMobmV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG1heWJlSWNvbkRlZmluaXRpb24pIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgaWNvbkRlZmluaXRpb24gPSAobWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSkuaWNvbiA/IG1heWJlSWNvbkRlZmluaXRpb24gOiBmaW5kSWNvbkRlZmluaXRpb24obWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSk7XG4gICAgdmFyIG1hc2sgPSBwYXJhbXMubWFzaztcblxuICAgIGlmIChtYXNrKSB7XG4gICAgICBtYXNrID0gKG1hc2sgfHwge30pLmljb24gPyBtYXNrIDogZmluZEljb25EZWZpbml0aW9uKG1hc2sgfHwge30pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KGljb25EZWZpbml0aW9uLCBfb2JqZWN0U3ByZWFkKHt9LCBwYXJhbXMsIHtcbiAgICAgIG1hc2s6IG1hc2tcbiAgICB9KSk7XG4gIH07XG59XG5cbnZhciBsaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcbnZhciBub0F1dG8gPSBmdW5jdGlvbiBub0F1dG8oKSB7XG4gIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9IGZhbHNlO1xuICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuICBkaXNjb25uZWN0KCk7XG59O1xudmFyIF9jc3NJbnNlcnRlZCA9IGZhbHNlO1xudmFyIGRvbSA9IHtcbiAgaTJzdmc6IGZ1bmN0aW9uIGkyc3ZnKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKElTX0RPTSkge1xuICAgICAgZW5zdXJlQ3NzKCk7XG4gICAgICB2YXIgX3BhcmFtcyRub2RlID0gcGFyYW1zLm5vZGUsXG4gICAgICAgICAgbm9kZSA9IF9wYXJhbXMkbm9kZSA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJG5vZGUsXG4gICAgICAgICAgX3BhcmFtcyRjYWxsYmFjayA9IHBhcmFtcy5jYWxsYmFjayxcbiAgICAgICAgICBjYWxsYmFjayA9IF9wYXJhbXMkY2FsbGJhY2sgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3BhcmFtcyRjYWxsYmFjaztcblxuICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICBzZWFyY2hQc2V1ZG9FbGVtZW50cyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9uVHJlZShub2RlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwaWNrZWQucmVqZWN0KCdPcGVyYXRpb24gcmVxdWlyZXMgYSBET00gb2Ygc29tZSBraW5kLicpO1xuICAgIH1cbiAgfSxcbiAgY3NzOiBjc3MsXG4gIGluc2VydENzczogZnVuY3Rpb24gaW5zZXJ0Q3NzJCQxKCkge1xuICAgIGlmICghX2Nzc0luc2VydGVkKSB7XG4gICAgICBpbnNlcnRDc3MoY3NzKCkpO1xuXG4gICAgICBfY3NzSW5zZXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IGZ1bmN0aW9uIHdhdGNoKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290LFxuICAgICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdCA9IHBhcmFtcy5vYnNlcnZlTXV0YXRpb25zUm9vdDtcblxuICAgIGlmIChjb25maWcuYXV0b1JlcGxhY2VTdmcgPT09IGZhbHNlKSB7XG4gICAgICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gdHJ1ZTtcbiAgICBkb21yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICBhdXRvUmVwbGFjZSh7XG4gICAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdDogYXV0b1JlcGxhY2VTdmdSb290XG4gICAgICB9KTtcbiAgICAgIG9ic2VydmUoe1xuICAgICAgICB0cmVlQ2FsbGJhY2s6IG9uVHJlZSxcbiAgICAgICAgbm9kZUNhbGxiYWNrOiBvbk5vZGUsXG4gICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2s6IHNlYXJjaFBzZXVkb0VsZW1lbnRzLFxuICAgICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdDogb2JzZXJ2ZU11dGF0aW9uc1Jvb3RcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xudmFyIHBhcnNlID0ge1xuICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKTtcbiAgfVxufTtcbnZhciBpY29uID0gcmVzb2x2ZUljb25zKGZ1bmN0aW9uIChpY29uRGVmaW5pdGlvbikge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtLFxuICAgICAgX3BhcmFtcyRzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgc3ltYm9sID0gX3BhcmFtcyRzeW1ib2wgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRzeW1ib2wsXG4gICAgICBfcGFyYW1zJG1hc2sgPSBwYXJhbXMubWFzayxcbiAgICAgIG1hc2sgPSBfcGFyYW1zJG1hc2sgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJG1hc2ssXG4gICAgICBfcGFyYW1zJHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZSxcbiAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG4gIGlmICghaWNvbkRlZmluaXRpb24pIHJldHVybjtcbiAgdmFyIHByZWZpeCA9IGljb25EZWZpbml0aW9uLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gaWNvbkRlZmluaXRpb24uaWNvbk5hbWUsXG4gICAgICBpY29uID0gaWNvbkRlZmluaXRpb24uaWNvbjtcbiAgcmV0dXJuIGFwaU9iamVjdChfb2JqZWN0U3ByZWFkKHtcbiAgICB0eXBlOiAnaWNvbidcbiAgfSwgaWNvbkRlZmluaXRpb24pLCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9BMTF5KSB7XG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdChuZXh0VW5pcXVlSWQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgICBhdHRyaWJ1dGVzWydmb2N1c2FibGUnXSA9ICdmYWxzZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbmxpbmVTdmdBYnN0cmFjdCh7XG4gICAgICBpY29uczoge1xuICAgICAgICBtYWluOiBhc0ZvdW5kSWNvbihpY29uKSxcbiAgICAgICAgbWFzazogbWFzayA/IGFzRm91bmRJY29uKG1hc2suaWNvbikgOiB7XG4gICAgICAgICAgZm91bmQ6IGZhbHNlLFxuICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgICBpY29uOiB7fVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtLCB0cmFuc2Zvcm0pLFxuICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogY2xhc3Nlc1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xudmFyIHRleHQgPSBmdW5jdGlvbiB0ZXh0KGNvbnRlbnQpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRyYW5zZm9ybTIgPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3BhcmFtcyR0cmFuc2Zvcm0yID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtMixcbiAgICAgIF9wYXJhbXMkdGl0bGUyID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlMiA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUyLFxuICAgICAgX3BhcmFtcyRjbGFzc2VzMiA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczIgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzMixcbiAgICAgIF9wYXJhbXMkYXR0cmlidXRlczIgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMyID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlczIsXG4gICAgICBfcGFyYW1zJHN0eWxlczIgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMyID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzMjtcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuICAgIHJldHVybiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtLCB0cmFuc2Zvcm0pLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnMtdGV4dFwiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xudmFyIGNvdW50ZXIgPSBmdW5jdGlvbiBjb3VudGVyKGNvbnRlbnQpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRpdGxlMyA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZTMgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlMyxcbiAgICAgIF9wYXJhbXMkY2xhc3NlczMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMzID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzMyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzMyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlczM7XG4gIHJldHVybiBhcGlPYmplY3Qoe1xuICAgIHR5cGU6ICdjb3VudGVyJyxcbiAgICBjb250ZW50OiBjb250ZW50XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICByZXR1cm4gbWFrZUxheWVyc0NvdW50ZXJBYnN0cmFjdCh7XG4gICAgICBjb250ZW50OiBjb250ZW50LnRvU3RyaW5nKCksXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogW1wiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVycy1jb3VudGVyXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG52YXIgbGF5ZXIgPSBmdW5jdGlvbiBsYXllcihhc3NlbWJsZXIpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJGNsYXNzZXM0ID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzNCA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXM0O1xuICByZXR1cm4gYXBpT2JqZWN0KHtcbiAgICB0eXBlOiAnbGF5ZXInXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICBhc3NlbWJsZXIoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIEFycmF5LmlzQXJyYXkoYXJncykgPyBhcmdzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhLmFic3RyYWN0KTtcbiAgICAgIH0pIDogY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYXJncy5hYnN0cmFjdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnNcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpLmpvaW4oJyAnKVxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dO1xuICB9KTtcbn07XG52YXIgYXBpID0ge1xuICBub0F1dG86IG5vQXV0byxcbiAgY29uZmlnOiBjb25maWcsXG4gIGRvbTogZG9tLFxuICBsaWJyYXJ5OiBsaWJyYXJ5LFxuICBwYXJzZTogcGFyc2UsXG4gIGZpbmRJY29uRGVmaW5pdGlvbjogZmluZEljb25EZWZpbml0aW9uLFxuICBpY29uOiBpY29uLFxuICB0ZXh0OiB0ZXh0LFxuICBjb3VudGVyOiBjb3VudGVyLFxuICBsYXllcjogbGF5ZXIsXG4gIHRvSHRtbDogdG9IdG1sXG59O1xuXG52YXIgYXV0b1JlcGxhY2UgPSBmdW5jdGlvbiBhdXRvUmVwbGFjZSgpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBfcGFyYW1zJGF1dG9SZXBsYWNlU3YgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290LFxuICAgICAgYXV0b1JlcGxhY2VTdmdSb290ID0gX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkYXV0b1JlcGxhY2VTdjtcbiAgaWYgKChPYmplY3Qua2V5cyhuYW1lc3BhY2Uuc3R5bGVzKS5sZW5ndGggPiAwIHx8IGNvbmZpZy5hdXRvRmV0Y2hTdmcpICYmIElTX0RPTSAmJiBjb25maWcuYXV0b1JlcGxhY2VTdmcpIGFwaS5kb20uaTJzdmcoe1xuICAgIG5vZGU6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGljb24sIG5vQXV0bywgY29uZmlnLCB0b0h0bWwsIGxheWVyLCB0ZXh0LCBjb3VudGVyLCBsaWJyYXJ5LCBkb20sIHBhcnNlLCBmaW5kSWNvbkRlZmluaXRpb24gfTtcbiIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2ZhYic7XG52YXIgaWNvbk5hbWUgPSAnY2MtbWFzdGVyY2FyZCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjFmMSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQ4Mi45IDQxMC4zYzAgNi44LTQuNiAxMS43LTExLjIgMTEuNy02LjggMC0xMS4yLTUuMi0xMS4yLTExLjcgMC02LjUgNC40LTExLjcgMTEuMi0xMS43IDYuNiAwIDExLjIgNS4yIDExLjIgMTEuN3ptLTMxMC44LTExLjdjLTcuMSAwLTExLjIgNS4yLTExLjIgMTEuNyAwIDYuNSA0LjEgMTEuNyAxMS4yIDExLjcgNi41IDAgMTAuOS00LjkgMTAuOS0xMS43LS4xLTYuNS00LjQtMTEuNy0xMC45LTExLjd6bTExNy41LS4zYy01LjQgMC04LjcgMy41LTkuNSA4LjdoMTkuMWMtLjktNS43LTQuNC04LjctOS42LTguN3ptMTA3LjguM2MtNi44IDAtMTAuOSA1LjItMTAuOSAxMS43IDAgNi41IDQuMSAxMS43IDEwLjkgMTEuNyA2LjggMCAxMS4yLTQuOSAxMS4yLTExLjcgMC02LjUtNC40LTExLjctMTEuMi0xMS43em0xMDUuOSAyNi4xYzAgLjMuMy41LjMgMS4xIDAgLjMtLjMuNS0uMyAxLjEtLjMuMy0uMy41LS41LjgtLjMuMy0uNS41LTEuMS41LS4zLjMtLjUuMy0xLjEuMy0uMyAwLS41IDAtMS4xLS4zLS4zIDAtLjUtLjMtLjgtLjUtLjMtLjMtLjUtLjUtLjUtLjgtLjMtLjUtLjMtLjgtLjMtMS4xIDAtLjUgMC0uOC4zLTEuMSAwLS41LjMtLjguNS0xLjEuMy0uMy41LS4zLjgtLjUuNS0uMy44LS4zIDEuMS0uMy41IDAgLjggMCAxLjEuMy41LjMuOC4zIDEuMS41cy4yLjYuNSAxLjF6bS0yLjIgMS40Yy41IDAgLjUtLjMuOC0uMy4zLS4zLjMtLjUuMy0uOCAwLS4zIDAtLjUtLjMtLjgtLjMgMC0uNS0uMy0xLjEtLjNoLTEuNnYzLjVoLjhWNDI2aC4zbDEuMSAxLjRoLjhsLTEuMS0xLjN6TTU3NiA4MXYzNTJjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjgxYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDQ4MGMyNi41IDAgNDggMjEuNSA0OCA0OHpNNjQgMjIwLjZjMCA3Ni41IDYyLjEgMTM4LjUgMTM4LjUgMTM4LjUgMjcuMiAwIDUzLjktOC4yIDc2LjUtMjMuMS03Mi45LTU5LjMtNzIuNC0xNzEuMiAwLTIzMC41LTIyLjYtMTUtNDkuMy0yMy4xLTc2LjUtMjMuMS03Ni40LS4xLTEzOC41IDYyLTEzOC41IDEzOC4yem0yMjQgMTA4LjhjNzAuNS01NSA3MC4yLTE2Mi4yIDAtMjE3LjUtNzAuMiA1NS4zLTcwLjUgMTYyLjYgMCAyMTcuNXptLTE0Mi4zIDc2LjNjMC04LjctNS43LTE0LjQtMTQuNy0xNC43LTQuNiAwLTkuNSAxLjQtMTIuOCA2LjUtMi40LTQuMS02LjUtNi41LTEyLjItNi41LTMuOCAwLTcuNiAxLjQtMTAuNiA1LjRWMzkyaC04LjJ2MzYuN2g4LjJjMC0xOC45LTIuNS0zMC4yIDktMzAuMiAxMC4yIDAgOC4yIDEwLjIgOC4yIDMwLjJoNy45YzAtMTguMy0yLjUtMzAuMiA5LTMwLjIgMTAuMiAwIDguMiAxMCA4LjIgMzAuMmg4LjJ2LTIzem00NC45LTEzLjdoLTcuOXY0LjRjLTIuNy0zLjMtNi41LTUuNC0xMS43LTUuNC0xMC4zIDAtMTguMiA4LjItMTguMiAxOS4zIDAgMTEuMiA3LjkgMTkuMyAxOC4yIDE5LjMgNS4yIDAgOS0xLjkgMTEuNy01LjR2NC42aDcuOVYzOTJ6bTQwLjUgMjUuNmMwLTE1LTIyLjktOC4yLTIyLjktMTUuMiAwLTUuNyAxMS45LTQuOCAxOC41LTEuMWwzLjMtNi41Yy05LjQtNi4xLTMwLjItNi0zMC4yIDguMiAwIDE0LjMgMjIuOSA4LjMgMjIuOSAxNSAwIDYuMy0xMy41IDUuOC0yMC43LjhsLTMuNSA2LjNjMTEuMiA3LjYgMzIuNiA2IDMyLjYtNy41em0zNS40IDkuM2wtMi4yLTYuOGMtMy44IDIuMS0xMi4yIDQuNC0xMi4yLTQuMXYtMTYuNmgxMy4xVjM5MmgtMTMuMXYtMTEuMmgtOC4yVjM5MmgtNy42djcuM2g3LjZWNDE2YzAgMTcuNiAxNy4zIDE0LjQgMjIuNiAxMC45em0xMy4zLTEzLjRoMjcuNWMwLTE2LjItNy40LTIyLjYtMTcuNC0yMi42LTEwLjYgMC0xOC4yIDcuOS0xOC4yIDE5LjMgMCAyMC41IDIyLjYgMjMuOSAzMy44IDE0LjJsLTMuOC02Yy03LjggNi40LTE5LjYgNS44LTIxLjktNC45em01OS4xLTIxLjVjLTQuNi0yLTExLjYtMS44LTE1LjIgNC40VjM5MmgtOC4ydjM2LjdoOC4yVjQwOGMwLTExLjYgOS41LTEwLjEgMTIuOC04LjRsMi40LTcuNnptMTAuNiAxOC4zYzAtMTEuNCAxMS42LTE1LjEgMjAuNy04LjRsMy44LTYuNWMtMTEuNi05LjEtMzIuNy00LjEtMzIuNyAxNSAwIDE5LjggMjIuNCAyMy44IDMyLjcgMTVsLTMuOC02LjVjLTkuMiA2LjUtMjAuNyAyLjYtMjAuNy04LjZ6bTY2LjctMTguM0g0MDh2NC40Yy04LjMtMTEtMjkuOS00LjgtMjkuOSAxMy45IDAgMTkuMiAyMi40IDI0LjcgMjkuOSAxMy45djQuNmg4LjJWMzkyem0zMy43IDBjLTIuNC0xLjItMTEtMi45LTE1LjIgNC40VjM5MmgtNy45djM2LjdoNy45VjQwOGMwLTExIDktMTAuMyAxMi44LTguNGwyLjQtNy42em00MC4zLTE0LjloLTcuOXYxOS4zYy04LjItMTAuOS0yOS45LTUuMS0yOS45IDEzLjkgMCAxOS40IDIyLjUgMjQuNiAyOS45IDEzLjl2NC42aDcuOXYtNTEuN3ptNy42LTc1LjF2NC42aC44VjMwMmgxLjl2LS44aC00LjZ2LjhoMS45em02LjYgMTIzLjhjMC0uNSAwLTEuMS0uMy0xLjYtLjMtLjMtLjUtLjgtLjgtMS4xLS4zLS4zLS44LS41LTEuMS0uOC0uNSAwLTEuMS0uMy0xLjYtLjMtLjMgMC0uOC4zLTEuNC4zLS41LjMtLjguNS0xLjEuOC0uNS4zLS44LjgtLjggMS4xLS4zLjUtLjMgMS4xLS4zIDEuNiAwIC4zIDAgLjguMyAxLjQgMCAuMy4zLjguOCAxLjEuMy4zLjUuNSAxLjEuOC41LjMgMS4xLjMgMS40LjMuNSAwIDEuMSAwIDEuNi0uMy4zLS4zLjgtLjUgMS4xLS44LjMtLjMuNS0uOC44LTEuMS4zLS42LjMtMS4xLjMtMS40em0zLjItMTI0LjdoLTEuNGwtMS42IDMuNS0xLjYtMy41aC0xLjR2NS40aC44di00LjFsMS42IDMuNWgxLjFsMS40LTMuNXY0LjFoMS4xdi01LjR6bTQuNC04MC41YzAtNzYuMi02Mi4xLTEzOC4zLTEzOC41LTEzOC4zLTI3LjIgMC01My45IDguMi03Ni41IDIzLjEgNzIuMSA1OS4zIDczLjIgMTcxLjUgMCAyMzAuNSAyMi42IDE1IDQ5LjUgMjMuMSA3Ni41IDIzLjEgNzYuNC4xIDEzOC41LTYxLjkgMTM4LjUtMTM4LjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhQ2NNYXN0ZXJjYXJkID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYWInO1xudmFyIGljb25OYW1lID0gJ2NjLXBheXBhbCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjFmNCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE4Ni4zIDI1OC4yYzAgMTIuMi05LjcgMjEuNS0yMiAyMS41LTkuMiAwLTE2LTUuMi0xNi0xNSAwLTEyLjIgOS41LTIyIDIxLjctMjIgOS4zIDAgMTYuMyA1LjcgMTYuMyAxNS41ek04MC41IDIwOS43aC00LjdjLTEuNSAwLTMgMS0zLjIgMi43bC00LjMgMjYuNyA4LjItLjNjMTEgMCAxOS41LTEuNSAyMS41LTE0LjIgMi4zLTEzLjQtNi4yLTE0LjktMTcuNS0xNC45em0yODQgMEgzNjBjLTEuOCAwLTMgMS0zLjIgMi43bC00LjIgMjYuNyA4LS4zYzEzIDAgMjItMyAyMi0xOC0uMS0xMC42LTkuNi0xMS4xLTE4LjEtMTEuMXpNNTc2IDgwdjM1MmMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWODBjMC0yNi41IDIxLjUtNDggNDgtNDhoNDgwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4ek0xMjguMyAyMTUuNGMwLTIxLTE2LjItMjgtMzQuNy0yOGgtNDBjLTIuNSAwLTUgMi01LjIgNC43TDMyIDI5NC4yYy0uMyAyIDEuMiA0IDMuMiA0aDE5YzIuNyAwIDUuMi0yLjkgNS41LTUuN2w0LjUtMjYuNmMxLTcuMiAxMy4yLTQuNyAxOC00LjcgMjguNiAwIDQ2LjEtMTcgNDYuMS00NS44em04NC4yIDguOGgtMTljLTMuOCAwLTQgNS41LTQuMiA4LjItNS44LTguNS0xNC4yLTEwLTIzLjctMTAtMjQuNSAwLTQzLjIgMjEuNS00My4yIDQ1LjIgMCAxOS41IDEyLjIgMzIuMiAzMS43IDMyLjIgOSAwIDIwLjItNC45IDI2LjUtMTEuOS0uNSAxLjUtMSA0LjctMSA2LjIgMCAyLjMgMSA0IDMuMiA0SDIwMGMyLjcgMCA1LTIuOSA1LjUtNS43bDEwLjItNjQuM2MuMy0xLjktMS4yLTMuOS0zLjItMy45em00MC41IDk3LjlsNjMuNy05Mi42Yy41LS41LjUtMSAuNS0xLjcgMC0xLjctMS41LTMuNS0zLjItMy41aC0xOS4yYy0xLjcgMC0zLjUgMS00LjUgMi41bC0yNi41IDM5LTExLTM3LjVjLS44LTIuMi0zLTQtNS41LTRoLTE4LjdjLTEuNyAwLTMuMiAxLjgtMy4yIDMuNSAwIDEuMiAxOS41IDU2LjggMjEuMiA2Mi4xLTIuNyAzLjgtMjAuNSAyOC42LTIwLjUgMzEuNiAwIDEuOCAxLjUgMy4yIDMuMiAzLjJoMTkuMmMxLjgtLjEgMy41LTEuMSA0LjUtMi42em0xNTkuMy0xMDYuN2MwLTIxLTE2LjItMjgtMzQuNy0yOGgtMzkuN2MtMi43IDAtNS4yIDItNS41IDQuN2wtMTYuMiAxMDJjLS4yIDIgMS4zIDQgMy4yIDRoMjAuNWMyIDAgMy41LTEuNSA0LTMuMmw0LjUtMjljMS03LjIgMTMuMi00LjcgMTgtNC43IDI4LjQgMCA0NS45LTE3IDQ1LjktNDUuOHptODQuMiA4LjhoLTE5Yy0zLjggMC00IDUuNS00LjMgOC4yLTUuNS04LjUtMTQtMTAtMjMuNy0xMC0yNC41IDAtNDMuMiAyMS41LTQzLjIgNDUuMiAwIDE5LjUgMTIuMiAzMi4yIDMxLjcgMzIuMiA5LjMgMCAyMC41LTQuOSAyNi41LTExLjktLjMgMS41LTEgNC43LTEgNi4yIDAgMi4zIDEgNCAzLjIgNEg0ODRjMi43IDAgNS0yLjkgNS41LTUuN2wxMC4yLTY0LjNjLjMtMS45LTEuMi0zLjktMy4yLTMuOXptNDcuNS0zMy4zYzAtMi0xLjUtMy41LTMuMi0zLjVoLTE4LjVjLTEuNSAwLTMgMS4yLTMuMiAyLjdsLTE2LjIgMTA0LS4zLjVjMCAxLjggMS41IDMuNSAzLjUgMy41aDE2LjVjMi41IDAgNS0yLjkgNS4yLTUuN0w1NDQgMTkxLjJ2LS4zem0tOTAgNTEuOGMtMTIuMiAwLTIxLjcgOS43LTIxLjcgMjIgMCA5LjcgNyAxNSAxNi4yIDE1IDEyIDAgMjEuNy05LjIgMjEuNy0yMS41LjEtOS44LTYuOS0xNS41LTE2LjItMTUuNXonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDY1BheXBhbCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFiJztcbnZhciBpY29uTmFtZSA9ICdjYy12aXNhJztcbnZhciB3aWR0aCA9IDU3NjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMWYwJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDcwLjEgMjMxLjNzNy42IDM3LjIgOS4zIDQ1SDQ0NmMzLjMtOC45IDE2LTQzLjUgMTYtNDMuNS0uMi4zIDMuMy05LjEgNS4zLTE0LjlsMi44IDEzLjR6TTU3NiA4MHYzNTJjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDQ4MGMyNi41IDAgNDggMjEuNSA0OCA0OHpNMTUyLjUgMzMxLjJMMjE1LjcgMTc2aC00Mi41bC0zOS4zIDEwNi00LjMtMjEuNS0xNC03MS40Yy0yLjMtOS45LTkuNC0xMi43LTE4LjItMTMuMUgzMi43bC0uNyAzLjFjMTUuOCA0IDI5LjkgOS44IDQyLjIgMTcuMWwzNS44IDEzNWg0Mi41em05NC40LjJMMjcyLjEgMTc2aC00MC4ybC0yNS4xIDE1NS40aDQwLjF6bTEzOS45LTUwLjhjLjItMTcuNy0xMC42LTMxLjItMzMuNy00Mi4zLTE0LjEtNy4xLTIyLjctMTEuOS0yMi43LTE5LjIuMi02LjYgNy4zLTEzLjQgMjMuMS0xMy40IDEzLjEtLjMgMjIuNyAyLjggMjkuOSA1LjlsMy42IDEuNyA1LjUtMzMuNmMtNy45LTMuMS0yMC41LTYuNi0zNi02LjYtMzkuNyAwLTY3LjYgMjEuMi02Ny44IDUxLjQtLjMgMjIuMyAyMCAzNC43IDM1LjIgNDIuMiAxNS41IDcuNiAyMC44IDEyLjYgMjAuOCAxOS4zLS4yIDEwLjQtMTIuNiAxNS4yLTI0LjEgMTUuMi0xNiAwLTI0LjYtMi41LTM3LjctOC4zbC01LjMtMi41LTUuNiAzNC45YzkuNCA0LjMgMjYuOCA4LjEgNDQuOCA4LjMgNDIuMi4xIDY5LjctMjAuOCA3MC01M3pNNTI4IDMzMS40TDQ5NS42IDE3NmgtMzEuMWMtOS42IDAtMTYuOSAyLjgtMjEgMTIuOWwtNTkuNyAxNDIuNUg0MjZzNi45LTE5LjIgOC40LTIzLjNINDg2YzEuMiA1LjUgNC44IDIzLjMgNC44IDIzLjNINTI4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUNjVmlzYSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjaGVjayc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwYyc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUNoZWNrID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2NoZXZyb24tdXAnO1xudmFyIHdpZHRoID0gNDQ4O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwNzcnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yNDAuOTcxIDEzMC41MjRsMTk0LjM0MyAxOTQuMzQzYzkuMzczIDkuMzczIDkuMzczIDI0LjU2OSAwIDMzLjk0MWwtMjIuNjY3IDIyLjY2N2MtOS4zNTcgOS4zNTctMjQuNTIyIDkuMzc1LTMzLjkwMS4wNEwyMjQgMjI3LjQ5NSA2OS4yNTUgMzgxLjUxNmMtOS4zNzkgOS4zMzUtMjQuNTQ0IDkuMzE3LTMzLjkwMS0uMDRsLTIyLjY2Ny0yMi42NjdjLTkuMzczLTkuMzczLTkuMzczLTI0LjU2OSAwLTMzLjk0MUwyMDcuMDMgMTMwLjUyNWM5LjM3Mi05LjM3MyAyNC41NjgtOS4zNzMgMzMuOTQxLS4wMDF6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhQ2hldnJvblVwID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2NyZWRpdC1jYXJkJztcbnZhciB3aWR0aCA9IDU3NjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDlkJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMCA0MzJjMCAyNi41IDIxLjUgNDggNDggNDhoNDgwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjI1NkgwdjE3NnptMTkyLTY4YzAtNi42IDUuNC0xMiAxMi0xMmgxMzZjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMkgyMDRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6bS0xMjggMGMwLTYuNiA1LjQtMTIgMTItMTJoNzJjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMkg3NmMtNi42IDAtMTItNS40LTEyLTEydi00MHpNNTc2IDgwdjQ4SDBWODBjMC0yNi41IDIxLjUtNDggNDgtNDhoNDgwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUNyZWRpdENhcmQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnZXhjbGFtYXRpb24tY2lyY2xlJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDZhJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNTA0IDI1NmMwIDEzNi45OTctMTExLjA0MyAyNDgtMjQ4IDI0OFM4IDM5Mi45OTcgOCAyNTZDOCAxMTkuMDgzIDExOS4wNDMgOCAyNTYgOHMyNDggMTExLjA4MyAyNDggMjQ4em0tMjQ4IDUwYy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhRXhjbGFtYXRpb25DaXJjbGUgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnZmxhZyc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAyNCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTM0OS41NjUgOTguNzgzQzI5NS45NzggOTguNzgzIDI1MS43MjEgNjQgMTg0LjM0OCA2NGMtMjQuOTU1IDAtNDcuMzA5IDQuMzg0LTY4LjA0NSAxMi4wMTNhNTUuOTQ3IDU1Ljk0NyAwIDAgMCAzLjU4Ni0yMy41NjJDMTE4LjExNyAyNC4wMTUgOTQuODA2IDEuMjA2IDY2LjMzOC4wNDggMzQuMzQ1LTEuMjU0IDggMjQuMjk2IDggNTZjMCAxOS4wMjYgOS40OTcgMzUuODI1IDI0IDQ1Ljk0NVY0ODhjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDE2YzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHYtOTQuNGMyOC4zMTEtMTIuMDY0IDYzLjU4Mi0yMi4xMjIgMTE0LjQzNS0yMi4xMjIgNTMuNTg4IDAgOTcuODQ0IDM0Ljc4MyAxNjUuMjE3IDM0Ljc4MyA0OC4xNjkgMCA4Ni42NjctMTYuMjk0IDEyMi41MDUtNDAuODU4QzUwNi44NCAzNTkuNDUyIDUxMiAzNDkuNTcxIDUxMiAzMzkuMDQ1di0yNDMuMWMwLTIzLjM5My0yNC4yNjktMzguODctNDUuNDg1LTI5LjAxNi0zNC4zMzggMTUuOTQ4LTc2LjQ1NCAzMS44NTQtMTE2Ljk1IDMxLjg1NHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFGbGFnID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2luZm8tY2lyY2xlJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDVhJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFJbmZvQ2lyY2xlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ21hcC1tYXJrZXItYWx0JztcbnZhciB3aWR0aCA9IDM4NDtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmM2M1JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMTcyLjI2OCA1MDEuNjdDMjYuOTcgMjkxLjAzMSAwIDI2OS40MTMgMCAxOTIgMCA4NS45NjEgODUuOTYxIDAgMTkyIDBzMTkyIDg1Ljk2MSAxOTIgMTkyYzAgNzcuNDEzLTI2Ljk3IDk5LjAzMS0xNzIuMjY4IDMwOS42Ny05LjUzNSAxMy43NzQtMjkuOTMgMTMuNzczLTM5LjQ2NCAwek0xOTIgMjcyYzQ0LjE4MyAwIDgwLTM1LjgxNyA4MC04MHMtMzUuODE3LTgwLTgwLTgwLTgwIDM1LjgxNy04MCA4MCAzNS44MTcgODAgODAgODB6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhTWFwTWFya2VyQWx0ID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3BlbmNpbC1hbHQnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YzMDMnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000OTcuOSAxNDIuMWwtNDYuMSA0Ni4xYy00LjcgNC43LTEyLjMgNC43LTE3IDBsLTExMS0xMTFjLTQuNy00LjctNC43LTEyLjMgMC0xN2w0Ni4xLTQ2LjFjMTguNy0xOC43IDQ5LjEtMTguNyA2Ny45IDBsNjAuMSA2MC4xYzE4LjggMTguNyAxOC44IDQ5LjEgMCA2Ny45ek0yODQuMiA5OS44TDIxLjYgMzYyLjQuNCA0ODMuOWMtMi45IDE2LjQgMTEuNCAzMC42IDI3LjggMjcuOGwxMjEuNS0yMS4zIDI2Mi42LTI2Mi42YzQuNy00LjcgNC43LTEyLjMgMC0xN2wtMTExLTExMWMtNC44LTQuNy0xMi40LTQuNy0xNy4xIDB6TTEyNC4xIDMzOS45Yy01LjUtNS41LTUuNS0xNC4zIDAtMTkuOGwxNTQtMTU0YzUuNS01LjUgMTQuMy01LjUgMTkuOCAwczUuNSAxNC4zIDAgMTkuOGwtMTU0IDE1NGMtNS41IDUuNS0xNC4zIDUuNS0xOS44IDB6TTg4IDQyNGg0OHYzNi4zbC02NC41IDExLjMtMzEuMS0zMS4xTDUxLjcgMzc2SDg4djQ4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVBlbmNpbEFsdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdwbHVzJztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDY3JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDE2IDIwOEgyNzJWNjRjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMmgtMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MTQ0SDMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMTQ0djE0NGMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyYzE3LjY3IDAgMzItMTQuMzMgMzItMzJWMzA0aDE0NGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi0zMmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVBsdXMgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc2VhcmNoJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDAyJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNTA1IDQ0Mi43TDQwNS4zIDM0M2MtNC41LTQuNS0xMC42LTctMTctN0gzNzJjMjcuNi0zNS4zIDQ0LTc5LjcgNDQtMTI4QzQxNiA5My4xIDMyMi45IDAgMjA4IDBTMCA5My4xIDAgMjA4czkzLjEgMjA4IDIwOCAyMDhjNDguMyAwIDkyLjctMTYuNCAxMjgtNDR2MTYuM2MwIDYuNCAyLjUgMTIuNSA3IDE3bDk5LjcgOTkuN2M5LjQgOS40IDI0LjYgOS40IDMzLjkgMGwyOC4zLTI4LjNjOS40LTkuNCA5LjQtMjQuNi4xLTM0ek0yMDggMzM2Yy03MC43IDAtMTI4LTU3LjItMTI4LTEyOCAwLTcwLjcgNTcuMi0xMjggMTI4LTEyOCA3MC43IDAgMTI4IDU3LjIgMTI4IDEyOCAwIDcwLjctNTcuMiAxMjgtMTI4IDEyOHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFTZWFyY2ggPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc2hvcHBpbmctYmFnJztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMjkwJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMzUyIDE2MHYtMzJDMzUyIDU3LjQyIDI5NC41NzkgMCAyMjQgMCAxNTMuNDIgMCA5NiA1Ny40MiA5NiAxMjh2MzJIMHYyNzJjMCA0NC4xODMgMzUuODE3IDgwIDgwIDgwaDI4OGM0NC4xODMgMCA4MC0zNS44MTcgODAtODBWMTYwaC05NnptLTE5Mi0zMmMwLTM1LjI5IDI4LjcxLTY0IDY0LTY0czY0IDI4LjcxIDY0IDY0djMySDE2MHYtMzJ6bTE2MCAxMjBjLTEzLjI1NSAwLTI0LTEwLjc0NS0yNC0yNHMxMC43NDUtMjQgMjQtMjQgMjQgMTAuNzQ1IDI0IDI0LTEwLjc0NSAyNC0yNCAyNHptLTE5MiAwYy0xMy4yNTUgMC0yNC0xMC43NDUtMjQtMjRzMTAuNzQ1LTI0IDI0LTI0IDI0IDEwLjc0NSAyNCAyNC0xMC43NDUgMjQtMjQgMjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU2hvcHBpbmdCYWcgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc2h1dHRsZS12YW4nO1xudmFyIHdpZHRoID0gNjQwO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2Y1YjYnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ002MjguODggMjEwLjY1TDQ5NC4zOSA0OS4yN0E0OC4wMSA0OC4wMSAwIDAgMCA0NTcuNTIgMzJIMzJDMTQuMzMgMzIgMCA0Ni4zMyAwIDY0djI4OGMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyYzAgNTMuMDIgNDIuOTggOTYgOTYgOTZzOTYtNDIuOTggOTYtOTZoMTI4YzAgNTMuMDIgNDIuOTggOTYgOTYgOTZzOTYtNDIuOTggOTYtOTZoMzJjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMlYyNDEuMzhjMC0xMS4yMy0zLjk0LTIyLjEtMTEuMTItMzAuNzN6TTY0IDE5MlY5Nmg5NnY5Nkg2NHptOTYgMjQwYy0yNi41MSAwLTQ4LTIxLjQ5LTQ4LTQ4czIxLjQ5LTQ4IDQ4LTQ4IDQ4IDIxLjQ5IDQ4IDQ4LTIxLjQ5IDQ4LTQ4IDQ4em0xNjAtMjQwaC05NlY5Nmg5NnY5NnptMTYwIDI0MGMtMjYuNTEgMC00OC0yMS40OS00OC00OHMyMS40OS00OCA0OC00OCA0OCAyMS40OSA0OCA0OC0yMS40OSA0OC00OCA0OHptLTk2LTI0MFY5Nmg2Ni4wMmw4MCA5NkgzODR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU2h1dHRsZVZhbiA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdzdGFyJztcbnZhciB3aWR0aCA9IDU3NjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDA1JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjU5LjMgMTcuOEwxOTQgMTUwLjIgNDcuOSAxNzEuNWMtMjYuMiAzLjgtMzYuNyAzNi4xLTE3LjcgNTQuNmwxMDUuNyAxMDMtMjUgMTQ1LjVjLTQuNSAyNi4zIDIzLjIgNDYgNDYuNCAzMy43TDI4OCA0MzkuNmwxMzAuNyA2OC43YzIzLjIgMTIuMiA1MC45LTcuNCA0Ni40LTMzLjdsLTI1LTE0NS41IDEwNS43LTEwM2MxOS0xOC41IDguNS01MC44LTE3LjctNTQuNkwzODIgMTUwLjIgMzE2LjcgMTcuOGMtMTEuNy0yMy42LTQ1LjYtMjMuOS01Ny40IDB6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU3RhciA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdzeW5jLWFsdCc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjJmMSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTM3MC43MiAxMzMuMjhDMzM5LjQ1OCAxMDQuMDA4IDI5OC44ODggODcuOTYyIDI1NS44NDggODhjLTc3LjQ1OC4wNjgtMTQ0LjMyOCA1My4xNzgtMTYyLjc5MSAxMjYuODUtMS4zNDQgNS4zNjMtNi4xMjIgOS4xNS0xMS42NTEgOS4xNUgyNC4xMDNjLTcuNDk4IDAtMTMuMTk0LTYuODA3LTExLjgwNy0xNC4xNzZDMzMuOTMzIDk0LjkyNCAxMzQuODEzIDggMjU2IDhjNjYuNDQ4IDAgMTI2Ljc5MSAyNi4xMzYgMTcxLjMxNSA2OC42ODVMNDYzLjAzIDQwLjk3QzQ3OC4xNDkgMjUuODUxIDUwNCAzNi41NTkgNTA0IDU3Ljk0MVYxOTJjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0SDM0NS45NDFjLTIxLjM4MiAwLTMyLjA5LTI1Ljg1MS0xNi45NzEtNDAuOTcxbDQxLjc1LTQxLjc0OXpNMzIgMjk2aDEzNC4wNTljMjEuMzgyIDAgMzIuMDkgMjUuODUxIDE2Ljk3MSA0MC45NzFsLTQxLjc1IDQxLjc1YzMxLjI2MiAyOS4yNzMgNzEuODM1IDQ1LjMxOSAxMTQuODc2IDQ1LjI4IDc3LjQxOC0uMDcgMTQ0LjMxNS01My4xNDQgMTYyLjc4Ny0xMjYuODQ5IDEuMzQ0LTUuMzYzIDYuMTIyLTkuMTUgMTEuNjUxLTkuMTVoNTcuMzA0YzcuNDk4IDAgMTMuMTk0IDYuODA3IDExLjgwNyAxNC4xNzZDNDc4LjA2NyA0MTcuMDc2IDM3Ny4xODcgNTA0IDI1NiA1MDRjLTY2LjQ0OCAwLTEyNi43OTEtMjYuMTM2LTE3MS4zMTUtNjguNjg1TDQ4Ljk3IDQ3MS4wM0MzMy44NTEgNDg2LjE0OSA4IDQ3NS40NDEgOCA0NTQuMDU5VjMyMGMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU3luY0FsdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICd0aW1lcyc7XG52YXIgd2lkdGggPSAzNTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwZCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVRpbWVzID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA6ICdnZXQnO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdXRpbHMuZm9yRWFjaChbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXSwgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXSwgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdtYXhDb250ZW50TGVuZ3RoJyxcbiAgICAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJyxcbiAgICAnc29ja2V0UGF0aCdcbiAgXSwgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgLy8gT25seSBOb2RlLkpTIGhhcyBhIHByb2Nlc3MgdmFyaWFibGUgdGhhdCBpcyBvZiBbW0NsYXNzXV0gcHJvY2Vzc1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cbiIsIi8vIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB2Mi4wLjI3IHwgwqkgZG5wX3RoZW1lIHwgTUlULUxpY2Vuc2VcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1EIHN1cHBvcnQ6XG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIC8vIENvbW1vbkpTLWxpa2U6XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICB2YXIgYnNuID0gZmFjdG9yeSgpO1xuICAgIHJvb3QuQWxlcnQgPSBic24uQWxlcnQ7XG4gICAgcm9vdC5CdXR0b24gPSBic24uQnV0dG9uO1xuICAgIHJvb3QuQ2Fyb3VzZWwgPSBic24uQ2Fyb3VzZWw7XG4gICAgcm9vdC5Db2xsYXBzZSA9IGJzbi5Db2xsYXBzZTtcbiAgICByb290LkRyb3Bkb3duID0gYnNuLkRyb3Bkb3duO1xuICAgIHJvb3QuTW9kYWwgPSBic24uTW9kYWw7XG4gICAgcm9vdC5Qb3BvdmVyID0gYnNuLlBvcG92ZXI7XG4gICAgcm9vdC5TY3JvbGxTcHkgPSBic24uU2Nyb2xsU3B5O1xuICAgIHJvb3QuVGFiID0gYnNuLlRhYjtcbiAgICByb290LlRvYXN0ID0gYnNuLlRvYXN0O1xuICAgIHJvb3QuVG9vbHRpcCA9IGJzbi5Ub29sdGlwO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IEludGVybmFsIFV0aWxpdHkgRnVuY3Rpb25zXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcInVzZSBzdHJpY3RcIjtcbiAgXG4gIC8vIGdsb2JhbHNcbiAgdmFyIGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdGhpc3x8d2luZG93LFxuICAgIERPQyA9IGRvY3VtZW50LCBIVE1MID0gRE9DLmRvY3VtZW50RWxlbWVudCwgYm9keSA9ICdib2R5JywgLy8gYWxsb3cgdGhlIGxpYnJhcnkgdG8gYmUgdXNlZCBpbiA8aGVhZD5cbiAgXG4gICAgLy8gTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCBHbG9iYWwgT2JqZWN0XG4gICAgQlNOID0gZ2xvYmFsT2JqZWN0LkJTTiA9IHt9LFxuICAgIHN1cHBvcnRzID0gQlNOLnN1cHBvcnRzID0gW10sXG4gIFxuICAgIC8vIGZ1bmN0aW9uIHRvZ2dsZSBhdHRyaWJ1dGVzXG4gICAgZGF0YVRvZ2dsZSAgICA9ICdkYXRhLXRvZ2dsZScsXG4gICAgZGF0YURpc21pc3MgICA9ICdkYXRhLWRpc21pc3MnLFxuICAgIGRhdGFTcHkgICAgICAgPSAnZGF0YS1zcHknLFxuICAgIGRhdGFSaWRlICAgICAgPSAnZGF0YS1yaWRlJyxcbiAgXG4gICAgLy8gY29tcG9uZW50c1xuICAgIHN0cmluZ0FsZXJ0ICAgICA9ICdBbGVydCcsXG4gICAgc3RyaW5nQnV0dG9uICAgID0gJ0J1dHRvbicsXG4gICAgc3RyaW5nQ2Fyb3VzZWwgID0gJ0Nhcm91c2VsJyxcbiAgICBzdHJpbmdDb2xsYXBzZSAgPSAnQ29sbGFwc2UnLFxuICAgIHN0cmluZ0Ryb3Bkb3duICA9ICdEcm9wZG93bicsXG4gICAgc3RyaW5nTW9kYWwgICAgID0gJ01vZGFsJyxcbiAgICBzdHJpbmdQb3BvdmVyICAgPSAnUG9wb3ZlcicsXG4gICAgc3RyaW5nU2Nyb2xsU3B5ID0gJ1Njcm9sbFNweScsXG4gICAgc3RyaW5nVGFiICAgICAgID0gJ1RhYicsXG4gICAgc3RyaW5nVG9vbHRpcCAgID0gJ1Rvb2x0aXAnLFxuICAgIHN0cmluZ1RvYXN0ICAgICA9ICdUb2FzdCcsXG4gIFxuICAgIC8vIG9wdGlvbnMgREFUQSBBUElcbiAgICBkYXRhQXV0b2hpZGUgICAgICA9ICdkYXRhLWF1dG9oaWRlJyxcbiAgICBkYXRhYmFja2Ryb3AgICAgICA9ICdkYXRhLWJhY2tkcm9wJyxcbiAgICBkYXRhS2V5Ym9hcmQgICAgICA9ICdkYXRhLWtleWJvYXJkJyxcbiAgICBkYXRhVGFyZ2V0ICAgICAgICA9ICdkYXRhLXRhcmdldCcsXG4gICAgZGF0YUludGVydmFsICAgICAgPSAnZGF0YS1pbnRlcnZhbCcsXG4gICAgZGF0YUhlaWdodCAgICAgICAgPSAnZGF0YS1oZWlnaHQnLFxuICAgIGRhdGFQYXVzZSAgICAgICAgID0gJ2RhdGEtcGF1c2UnLFxuICAgIGRhdGFUaXRsZSAgICAgICAgID0gJ2RhdGEtdGl0bGUnLFxuICAgIGRhdGFPcmlnaW5hbFRpdGxlID0gJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLFxuICAgIGRhdGFEaXNtaXNzaWJsZSAgID0gJ2RhdGEtZGlzbWlzc2libGUnLFxuICAgIGRhdGFUcmlnZ2VyICAgICAgID0gJ2RhdGEtdHJpZ2dlcicsXG4gICAgZGF0YUFuaW1hdGlvbiAgICAgPSAnZGF0YS1hbmltYXRpb24nLFxuICAgIGRhdGFDb250YWluZXIgICAgID0gJ2RhdGEtY29udGFpbmVyJyxcbiAgICBkYXRhUGxhY2VtZW50ICAgICA9ICdkYXRhLXBsYWNlbWVudCcsXG4gICAgZGF0YURlbGF5ICAgICAgICAgPSAnZGF0YS1kZWxheScsXG4gIFxuICAgIC8vIG9wdGlvbiBrZXlzXG4gICAgYmFja2Ryb3AgPSAnYmFja2Ryb3AnLCBrZXlib2FyZCA9ICdrZXlib2FyZCcsIGRlbGF5ID0gJ2RlbGF5JyxcbiAgICBjb250ZW50ID0gJ2NvbnRlbnQnLCB0YXJnZXQgPSAndGFyZ2V0JywgY3VycmVudFRhcmdldCA9ICdjdXJyZW50VGFyZ2V0JyxcbiAgICBpbnRlcnZhbCA9ICdpbnRlcnZhbCcsIHBhdXNlID0gJ3BhdXNlJywgYW5pbWF0aW9uID0gJ2FuaW1hdGlvbicsXG4gICAgcGxhY2VtZW50ID0gJ3BsYWNlbWVudCcsIGNvbnRhaW5lciA9ICdjb250YWluZXInLFxuICBcbiAgICAvLyBib3ggbW9kZWxcbiAgICBvZmZzZXRUb3AgICAgPSAnb2Zmc2V0VG9wJywgICAgICBvZmZzZXRCb3R0b20gICA9ICdvZmZzZXRCb3R0b20nLFxuICAgIG9mZnNldExlZnQgICA9ICdvZmZzZXRMZWZ0JyxcbiAgICBzY3JvbGxUb3AgICAgPSAnc2Nyb2xsVG9wJywgICAgICBzY3JvbGxMZWZ0ICAgICA9ICdzY3JvbGxMZWZ0JyxcbiAgICBjbGllbnRXaWR0aCAgPSAnY2xpZW50V2lkdGgnLCAgICBjbGllbnRIZWlnaHQgICA9ICdjbGllbnRIZWlnaHQnLFxuICAgIG9mZnNldFdpZHRoICA9ICdvZmZzZXRXaWR0aCcsICAgIG9mZnNldEhlaWdodCAgID0gJ29mZnNldEhlaWdodCcsXG4gICAgaW5uZXJXaWR0aCAgID0gJ2lubmVyV2lkdGgnLCAgICAgaW5uZXJIZWlnaHQgICAgPSAnaW5uZXJIZWlnaHQnLFxuICAgIHNjcm9sbEhlaWdodCA9ICdzY3JvbGxIZWlnaHQnLCAgIHNjcm9sbFdpZHRoICAgID0gJ3Njcm9sbFdpZHRoJyxcbiAgICBoZWlnaHQgICAgICAgICA9ICdoZWlnaHQnLFxuICBcbiAgICAvLyBhcmlhXG4gICAgYXJpYUV4cGFuZGVkID0gJ2FyaWEtZXhwYW5kZWQnLFxuICAgIGFyaWFIaWRkZW4gICA9ICdhcmlhLWhpZGRlbicsXG4gICAgYXJpYVNlbGVjdGVkID0gJ2FyaWEtc2VsZWN0ZWQnLFxuICBcbiAgICAvLyBldmVudCBuYW1lc1xuICAgIGNsaWNrRXZlbnQgICAgPSAnY2xpY2snLFxuICAgIGZvY3VzRXZlbnQgICAgPSAnZm9jdXMnLFxuICAgIGhvdmVyRXZlbnQgICAgPSAnaG92ZXInLFxuICAgIGtleWRvd25FdmVudCAgPSAna2V5ZG93bicsXG4gICAga2V5dXBFdmVudCAgICA9ICdrZXl1cCcsXG4gICAgcmVzaXplRXZlbnQgICA9ICdyZXNpemUnLCAvLyBwYXNzaXZlXG4gICAgc2Nyb2xsRXZlbnQgICA9ICdzY3JvbGwnLCAvLyBwYXNzaXZlXG4gICAgbW91c2VIb3ZlciA9ICgnb25tb3VzZWxlYXZlJyBpbiBET0MpID8gWyAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ10gOiBbICdtb3VzZW92ZXInLCAnbW91c2VvdXQnIF0sXG4gICAgLy8gdG91Y2ggc2luY2UgMi4wLjI2XG4gICAgdG91Y2hFdmVudHMgPSB7IHN0YXJ0OiAndG91Y2hzdGFydCcsIGVuZDogJ3RvdWNoZW5kJywgbW92ZTondG91Y2htb3ZlJyB9LCAvLyBwYXNzaXZlXG4gICAgLy8gb3JpZ2luYWxFdmVudHNcbiAgICBzaG93RXZlbnQgICAgID0gJ3Nob3cnLFxuICAgIHNob3duRXZlbnQgICAgPSAnc2hvd24nLFxuICAgIGhpZGVFdmVudCAgICAgPSAnaGlkZScsXG4gICAgaGlkZGVuRXZlbnQgICA9ICdoaWRkZW4nLFxuICAgIGNsb3NlRXZlbnQgICAgPSAnY2xvc2UnLFxuICAgIGNsb3NlZEV2ZW50ICAgPSAnY2xvc2VkJyxcbiAgICBzbGlkRXZlbnQgICAgID0gJ3NsaWQnLFxuICAgIHNsaWRlRXZlbnQgICAgPSAnc2xpZGUnLFxuICAgIGNoYW5nZUV2ZW50ICAgPSAnY2hhbmdlJyxcbiAgXG4gICAgLy8gb3RoZXJcbiAgICBnZXRBdHRyaWJ1dGUgICAgICAgICAgID0gJ2dldEF0dHJpYnV0ZScsXG4gICAgc2V0QXR0cmlidXRlICAgICAgICAgICA9ICdzZXRBdHRyaWJ1dGUnLFxuICAgIGhhc0F0dHJpYnV0ZSAgICAgICAgICAgPSAnaGFzQXR0cmlidXRlJyxcbiAgICBjcmVhdGVFbGVtZW50ICAgICAgICAgID0gJ2NyZWF0ZUVsZW1lbnQnLFxuICAgIGFwcGVuZENoaWxkICAgICAgICAgICAgPSAnYXBwZW5kQ2hpbGQnLFxuICAgIGlubmVySFRNTCAgICAgICAgICAgICAgPSAnaW5uZXJIVE1MJyxcbiAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSAgID0gJ2dldEVsZW1lbnRzQnlUYWdOYW1lJyxcbiAgICBwcmV2ZW50RGVmYXVsdCAgICAgICAgID0gJ3ByZXZlbnREZWZhdWx0JyxcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3QgID0gJ2dldEJvdW5kaW5nQ2xpZW50UmVjdCcsXG4gICAgcXVlcnlTZWxlY3RvckFsbCAgICAgICA9ICdxdWVyeVNlbGVjdG9yQWxsJyxcbiAgICBnZXRFbGVtZW50c0J5Q0xBU1NOQU1FID0gJ2dldEVsZW1lbnRzQnlDbGFzc05hbWUnLFxuICAgIGdldENvbXB1dGVkU3R5bGUgICAgICAgPSAnZ2V0Q29tcHV0ZWRTdHlsZScsICBcbiAgXG4gICAgaW5kZXhPZiAgICAgID0gJ2luZGV4T2YnLFxuICAgIHBhcmVudE5vZGUgICA9ICdwYXJlbnROb2RlJyxcbiAgICBsZW5ndGggICAgICAgPSAnbGVuZ3RoJyxcbiAgICB0b0xvd2VyQ2FzZSAgPSAndG9Mb3dlckNhc2UnLFxuICAgIFRyYW5zaXRpb24gICA9ICdUcmFuc2l0aW9uJyxcbiAgICBEdXJhdGlvbiAgICAgPSAnRHVyYXRpb24nLFxuICAgIFdlYmtpdCAgICAgICA9ICdXZWJraXQnLFxuICAgIHN0eWxlICAgICAgICA9ICdzdHlsZScsXG4gICAgcHVzaCAgICAgICAgID0gJ3B1c2gnLFxuICAgIHRhYmluZGV4ICAgICA9ICd0YWJpbmRleCcsXG4gICAgY29udGFpbnMgICAgID0gJ2NvbnRhaW5zJyxcbiAgXG4gICAgYWN0aXZlICAgICA9ICdhY3RpdmUnLFxuICAgIHNob3dDbGFzcyAgPSAnc2hvdycsXG4gICAgY29sbGFwc2luZyA9ICdjb2xsYXBzaW5nJyxcbiAgICBkaXNhYmxlZCAgID0gJ2Rpc2FibGVkJyxcbiAgICBsb2FkaW5nICAgID0gJ2xvYWRpbmcnLFxuICAgIGxlZnQgICAgICAgPSAnbGVmdCcsXG4gICAgcmlnaHQgICAgICA9ICdyaWdodCcsXG4gICAgdG9wICAgICAgICA9ICd0b3AnLFxuICAgIGJvdHRvbSAgICAgPSAnYm90dG9tJyxcbiAgXG4gICAgLy8gdG9vbHRpcCAvIHBvcG92ZXJcbiAgICB0aXBQb3NpdGlvbnMgPSAvXFxiKHRvcHxib3R0b218bGVmdHxyaWdodCkrLyxcbiAgXG4gICAgLy8gbW9kYWxcbiAgICBtb2RhbE92ZXJsYXkgPSAwLFxuICAgIGZpeGVkVG9wID0gJ2ZpeGVkLXRvcCcsXG4gICAgZml4ZWRCb3R0b20gPSAnZml4ZWQtYm90dG9tJyxcbiAgXG4gICAgLy8gdHJhbnNpdGlvbkVuZCBzaW5jZSAyLjAuNFxuICAgIHN1cHBvcnRUcmFuc2l0aW9ucyA9IFdlYmtpdCtUcmFuc2l0aW9uIGluIEhUTUxbc3R5bGVdIHx8IFRyYW5zaXRpb25bdG9Mb3dlckNhc2VdKCkgaW4gSFRNTFtzdHlsZV0sXG4gICAgdHJhbnNpdGlvbkVuZEV2ZW50ID0gV2Via2l0K1RyYW5zaXRpb24gaW4gSFRNTFtzdHlsZV0gPyBXZWJraXRbdG9Mb3dlckNhc2VdKCkrVHJhbnNpdGlvbisnRW5kJyA6IFRyYW5zaXRpb25bdG9Mb3dlckNhc2VdKCkrJ2VuZCcsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gV2Via2l0K0R1cmF0aW9uIGluIEhUTUxbc3R5bGVdID8gV2Via2l0W3RvTG93ZXJDYXNlXSgpK1RyYW5zaXRpb24rRHVyYXRpb24gOiBUcmFuc2l0aW9uW3RvTG93ZXJDYXNlXSgpK0R1cmF0aW9uLFxuICBcbiAgICAvLyBzZXQgbmV3IGZvY3VzIGVsZW1lbnQgc2luY2UgMi4wLjNcbiAgICBzZXRGb2N1cyA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgZWxlbWVudC5mb2N1cyA/IGVsZW1lbnQuZm9jdXMoKSA6IGVsZW1lbnQuc2V0QWN0aXZlKCk7XG4gICAgfSxcbiAgXG4gICAgLy8gY2xhc3MgbWFuaXB1bGF0aW9uLCBzaW5jZSAyLjAuMCByZXF1aXJlcyBwb2x5ZmlsbC5qc1xuICAgIGFkZENsYXNzID0gZnVuY3Rpb24oZWxlbWVudCxjbGFzc05BTUUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05BTUUpO1xuICAgIH0sXG4gICAgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LGNsYXNzTkFNRSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTkFNRSk7XG4gICAgfSxcbiAgICBoYXNDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsY2xhc3NOQU1FKXsgLy8gc2luY2UgMi4wLjBcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdFtjb250YWluc10oY2xhc3NOQU1FKTtcbiAgICB9LFxuICBcbiAgICAvLyBzZWxlY3Rpb24gbWV0aG9kc1xuICAgIGdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSBmdW5jdGlvbihlbGVtZW50LGNsYXNzTkFNRSkgeyAvLyByZXR1cm5zIEFycmF5XG4gICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChlbGVtZW50W2dldEVsZW1lbnRzQnlDTEFTU05BTUVdKCBjbGFzc05BTUUgKSk7XG4gICAgfSxcbiAgICBxdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHBhcmVudCkge1xuICAgICAgdmFyIGxvb2tVcCA9IHBhcmVudCA/IHBhcmVudCA6IERPQztcbiAgICAgIHJldHVybiB0eXBlb2Ygc2VsZWN0b3IgPT09ICdvYmplY3QnID8gc2VsZWN0b3IgOiBsb29rVXAucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSxcbiAgICBnZXRDbG9zZXN0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNlbGVjdG9yKSB7IC8vZWxlbWVudCBpcyB0aGUgZWxlbWVudCBhbmQgc2VsZWN0b3IgaXMgZm9yIHRoZSBjbG9zZXN0IHBhcmVudCBlbGVtZW50IHRvIGZpbmRcbiAgICAgIC8vIHNvdXJjZSBodHRwOi8vZ29tYWtldGhpbmdzLmNvbS9jbGltYmluZy11cC1hbmQtZG93bi10aGUtZG9tLXRyZWUtd2l0aC12YW5pbGxhLWphdmFzY3JpcHQvXG4gICAgICB2YXIgZmlyc3RDaGFyID0gc2VsZWN0b3IuY2hhckF0KDApLCBzZWxlY3RvclN1YnN0cmluZyA9IHNlbGVjdG9yLnN1YnN0cigxKTtcbiAgICAgIGlmICggZmlyc3RDaGFyID09PSAnLicgKSB7Ly8gSWYgc2VsZWN0b3IgaXMgYSBjbGFzc1xuICAgICAgICBmb3IgKCA7IGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gRE9DOyBlbGVtZW50ID0gZWxlbWVudFtwYXJlbnROb2RlXSApIHsgLy8gR2V0IGNsb3Nlc3QgbWF0Y2hcbiAgICAgICAgICBpZiAoIHF1ZXJ5RWxlbWVudChzZWxlY3RvcixlbGVtZW50W3BhcmVudE5vZGVdKSAhPT0gbnVsbCAmJiBoYXNDbGFzcyhlbGVtZW50LHNlbGVjdG9yU3Vic3RyaW5nKSApIHsgcmV0dXJuIGVsZW1lbnQ7IH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICggZmlyc3RDaGFyID09PSAnIycgKSB7IC8vIElmIHNlbGVjdG9yIGlzIGFuIElEXG4gICAgICAgIGZvciAoIDsgZWxlbWVudCAmJiBlbGVtZW50ICE9PSBET0M7IGVsZW1lbnQgPSBlbGVtZW50W3BhcmVudE5vZGVdICkgeyAvLyBHZXQgY2xvc2VzdCBtYXRjaFxuICAgICAgICAgIGlmICggZWxlbWVudC5pZCA9PT0gc2VsZWN0b3JTdWJzdHJpbmcgKSB7IHJldHVybiBlbGVtZW50OyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICBcbiAgICAvLyBldmVudCBhdHRhY2ggalF1ZXJ5IHN0eWxlIC8gdHJpZ2dlciAgc2luY2UgMS4yLjBcbiAgICBvbiA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZmFsc2U7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgb2ZmID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IGZhbHNlO1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIG9uZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykgeyAvLyBvbmUgc2luY2UgMi4wLjRcbiAgICAgIG9uKGVsZW1lbnQsIGV2ZW50LCBmdW5jdGlvbiBoYW5kbGVyV3JhcHBlcihlKXtcbiAgICAgICAgaGFuZGxlcihlKTtcbiAgICAgICAgb2ZmKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyV3JhcHBlciwgb3B0aW9ucyk7XG4gICAgICB9LCBvcHRpb25zKTtcbiAgICB9LFxuICAgIC8vIGRldGVybWluZSBzdXBwb3J0IGZvciBwYXNzaXZlIGV2ZW50c1xuICAgIHN1cHBvcnRQYXNzaXZlID0gKGZ1bmN0aW9uKCl7XG4gICAgICAvLyBUZXN0IHZpYSBhIGdldHRlciBpbiB0aGUgb3B0aW9ucyBvYmplY3QgdG8gc2VlIGlmIHRoZSBwYXNzaXZlIHByb3BlcnR5IGlzIGFjY2Vzc2VkXG4gICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgb25lKGdsb2JhbE9iamVjdCwgJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICBcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSgpKSxcbiAgICAvLyBldmVudCBvcHRpb25zXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbiAgICBwYXNzaXZlSGFuZGxlciA9IHN1cHBvcnRQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSxcbiAgICAvLyB0cmFuc2l0aW9uc1xuICAgIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGR1cmF0aW9uID0gc3VwcG9ydFRyYW5zaXRpb25zID8gZ2xvYmFsT2JqZWN0W2dldENvbXB1dGVkU3R5bGVdKGVsZW1lbnQpW3RyYW5zaXRpb25EdXJhdGlvbl0gOiAwO1xuICAgICAgZHVyYXRpb24gPSBwYXJzZUZsb2F0KGR1cmF0aW9uKTtcbiAgICAgIGR1cmF0aW9uID0gdHlwZW9mIGR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiAhaXNOYU4oZHVyYXRpb24pID8gZHVyYXRpb24gKiAxMDAwIDogMDtcbiAgICAgIHJldHVybiBkdXJhdGlvbjsgLy8gd2UgdGFrZSBhIHNob3J0IG9mZnNldCB0byBtYWtlIHN1cmUgd2UgZmlyZSBvbiB0aGUgbmV4dCBmcmFtZSBhZnRlciBhbmltYXRpb25cbiAgICB9LFxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oZWxlbWVudCxoYW5kbGVyKXsgLy8gZW11bGF0ZVRyYW5zaXRpb25FbmQgc2luY2UgMi4wLjRcbiAgICAgIHZhciBjYWxsZWQgPSAwLCBkdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgZHVyYXRpb24gPyBvbmUoZWxlbWVudCwgdHJhbnNpdGlvbkVuZEV2ZW50LCBmdW5jdGlvbihlKXsgIWNhbGxlZCAmJiBoYW5kbGVyKGUpLCBjYWxsZWQgPSAxOyB9KVxuICAgICAgICAgICAgICAgOiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAhY2FsbGVkICYmIGhhbmRsZXIoKSwgY2FsbGVkID0gMTsgfSwgMTcpO1xuICAgIH0sXG4gICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjb21wb25lbnROYW1lLCByZWxhdGVkKSB7XG4gICAgICB2YXIgT3JpZ2luYWxDdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudCggZXZlbnROYW1lICsgJy5icy4nICsgY29tcG9uZW50TmFtZSk7XG4gICAgICBPcmlnaW5hbEN1c3RvbUV2ZW50LnJlbGF0ZWRUYXJnZXQgPSByZWxhdGVkO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9yaWdpbmFsQ3VzdG9tRXZlbnQpO1xuICAgIH0sXG4gIFxuICAgIC8vIHRvb2x0aXAgLyBwb3BvdmVyIHN0dWZmXG4gICAgZ2V0U2Nyb2xsID0gZnVuY3Rpb24oKSB7IC8vIGFsc28gQWZmaXggYW5kIFNjcm9sbFNweSB1c2VzIGl0XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5IDogZ2xvYmFsT2JqZWN0LnBhZ2VZT2Zmc2V0IHx8IEhUTUxbc2Nyb2xsVG9wXSxcbiAgICAgICAgeCA6IGdsb2JhbE9iamVjdC5wYWdlWE9mZnNldCB8fCBIVE1MW3Njcm9sbExlZnRdXG4gICAgICB9XG4gICAgfSxcbiAgICBzdHlsZVRpcCA9IGZ1bmN0aW9uKGxpbmssZWxlbWVudCxwb3NpdGlvbixwYXJlbnQpIHsgLy8gYm90aCBwb3BvdmVycyBhbmQgdG9vbHRpcHMgKHRhcmdldCx0b29sdGlwLHBsYWNlbWVudCxlbGVtZW50VG9BcHBlbmRUbylcbiAgICAgIHZhciBlbGVtZW50RGltZW5zaW9ucyA9IHsgdyA6IGVsZW1lbnRbb2Zmc2V0V2lkdGhdLCBoOiBlbGVtZW50W29mZnNldEhlaWdodF0gfSxcbiAgICAgICAgICB3aW5kb3dXaWR0aCA9IChIVE1MW2NsaWVudFdpZHRoXSB8fCBET0NbYm9keV1bY2xpZW50V2lkdGhdKSxcbiAgICAgICAgICB3aW5kb3dIZWlnaHQgPSAoSFRNTFtjbGllbnRIZWlnaHRdIHx8IERPQ1tib2R5XVtjbGllbnRIZWlnaHRdKSxcbiAgICAgICAgICByZWN0ID0gbGlua1tnZXRCb3VuZGluZ0NsaWVudFJlY3RdKCksXG4gICAgICAgICAgc2Nyb2xsID0gcGFyZW50ID09PSBET0NbYm9keV0gPyBnZXRTY3JvbGwoKSA6IHsgeDogcGFyZW50W29mZnNldExlZnRdICsgcGFyZW50W3Njcm9sbExlZnRdLCB5OiBwYXJlbnRbb2Zmc2V0VG9wXSArIHBhcmVudFtzY3JvbGxUb3BdIH0sXG4gICAgICAgICAgbGlua0RpbWVuc2lvbnMgPSB7IHc6IHJlY3RbcmlnaHRdIC0gcmVjdFtsZWZ0XSwgaDogcmVjdFtib3R0b21dIC0gcmVjdFt0b3BdIH0sXG4gICAgICAgICAgaXNQb3BvdmVyID0gaGFzQ2xhc3MoZWxlbWVudCwncG9wb3ZlcicpLFxuICAgICAgICAgIHRvcFBvc2l0aW9uLCBsZWZ0UG9zaXRpb24sXG4gIFxuICAgICAgICAgIGFycm93ID0gcXVlcnlFbGVtZW50KCcuYXJyb3cnLGVsZW1lbnQpLFxuICAgICAgICAgIGFycm93VG9wLCBhcnJvd0xlZnQsIGFycm93V2lkdGgsIGFycm93SGVpZ2h0LFxuICBcbiAgICAgICAgICBoYWxmVG9wRXhjZWVkID0gcmVjdFt0b3BdICsgbGlua0RpbWVuc2lvbnMuaC8yIC0gZWxlbWVudERpbWVuc2lvbnMuaC8yIDwgMCxcbiAgICAgICAgICBoYWxmTGVmdEV4Y2VlZCA9IHJlY3RbbGVmdF0gKyBsaW5rRGltZW5zaW9ucy53LzIgLSBlbGVtZW50RGltZW5zaW9ucy53LzIgPCAwLFxuICAgICAgICAgIGhhbGZSaWdodEV4Y2VlZCA9IHJlY3RbbGVmdF0gKyBlbGVtZW50RGltZW5zaW9ucy53LzIgKyBsaW5rRGltZW5zaW9ucy53LzIgPj0gd2luZG93V2lkdGgsXG4gICAgICAgICAgaGFsZkJvdHRvbUV4Y2VlZCA9IHJlY3RbdG9wXSArIGVsZW1lbnREaW1lbnNpb25zLmgvMiArIGxpbmtEaW1lbnNpb25zLmgvMiA+PSB3aW5kb3dIZWlnaHQsXG4gICAgICAgICAgdG9wRXhjZWVkID0gcmVjdFt0b3BdIC0gZWxlbWVudERpbWVuc2lvbnMuaCA8IDAsXG4gICAgICAgICAgbGVmdEV4Y2VlZCA9IHJlY3RbbGVmdF0gLSBlbGVtZW50RGltZW5zaW9ucy53IDwgMCxcbiAgICAgICAgICBib3R0b21FeGNlZWQgPSByZWN0W3RvcF0gKyBlbGVtZW50RGltZW5zaW9ucy5oICsgbGlua0RpbWVuc2lvbnMuaCA+PSB3aW5kb3dIZWlnaHQsXG4gICAgICAgICAgcmlnaHRFeGNlZWQgPSByZWN0W2xlZnRdICsgZWxlbWVudERpbWVuc2lvbnMudyArIGxpbmtEaW1lbnNpb25zLncgPj0gd2luZG93V2lkdGg7XG4gIFxuICAgICAgLy8gcmVjb21wdXRlIHBvc2l0aW9uXG4gICAgICBwb3NpdGlvbiA9IChwb3NpdGlvbiA9PT0gbGVmdCB8fCBwb3NpdGlvbiA9PT0gcmlnaHQpICYmIGxlZnRFeGNlZWQgJiYgcmlnaHRFeGNlZWQgPyB0b3AgOiBwb3NpdGlvbjsgLy8gZmlyc3QsIHdoZW4gYm90aCBsZWZ0IGFuZCByaWdodCBsaW1pdHMgYXJlIGV4Y2VlZGVkLCB3ZSBmYWxsIGJhY2sgdG8gdG9wfGJvdHRvbVxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gdG9wICYmIHRvcEV4Y2VlZCA/IGJvdHRvbSA6IHBvc2l0aW9uO1xuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gYm90dG9tICYmIGJvdHRvbUV4Y2VlZCA/IHRvcCA6IHBvc2l0aW9uO1xuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gbGVmdCAmJiBsZWZ0RXhjZWVkID8gcmlnaHQgOiBwb3NpdGlvbjtcbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPT09IHJpZ2h0ICYmIHJpZ2h0RXhjZWVkID8gbGVmdCA6IHBvc2l0aW9uO1xuICBcbiAgICAgIC8vIHVwZGF0ZSB0b29sdGlwL3BvcG92ZXIgY2xhc3NcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lW2luZGV4T2ZdKHBvc2l0aW9uKSA9PT0gLTEgJiYgKGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZSh0aXBQb3NpdGlvbnMscG9zaXRpb24pKTtcbiAgXG4gICAgICAvLyB3ZSBjaGVjayB0aGUgY29tcHV0ZWQgd2lkdGggJiBoZWlnaHQgYW5kIHVwZGF0ZSBoZXJlXG4gICAgICBhcnJvd1dpZHRoID0gYXJyb3dbb2Zmc2V0V2lkdGhdOyBhcnJvd0hlaWdodCA9IGFycm93W29mZnNldEhlaWdodF07XG4gIFxuICAgICAgLy8gYXBwbHkgc3R5bGluZyB0byB0b29sdGlwIG9yIHBvcG92ZXJcbiAgICAgIGlmICggcG9zaXRpb24gPT09IGxlZnQgfHwgcG9zaXRpb24gPT09IHJpZ2h0ICkgeyAvLyBzZWNvbmRhcnl8c2lkZSBwb3NpdGlvbnNcbiAgICAgICAgaWYgKCBwb3NpdGlvbiA9PT0gbGVmdCApIHsgLy8gTEVGVFxuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IHJlY3RbbGVmdF0gKyBzY3JvbGwueCAtIGVsZW1lbnREaW1lbnNpb25zLncgLSAoIGlzUG9wb3ZlciA/IGFycm93V2lkdGggOiAwICk7XG4gICAgICAgIH0gZWxzZSB7IC8vIFJJR0hUXG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gcmVjdFtsZWZ0XSArIHNjcm9sbC54ICsgbGlua0RpbWVuc2lvbnMudztcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gYWRqdXN0IHRvcCBhbmQgYXJyb3dcbiAgICAgICAgaWYgKGhhbGZUb3BFeGNlZWQpIHtcbiAgICAgICAgICB0b3BQb3NpdGlvbiA9IHJlY3RbdG9wXSArIHNjcm9sbC55O1xuICAgICAgICAgIGFycm93VG9wID0gbGlua0RpbWVuc2lvbnMuaC8yIC0gYXJyb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChoYWxmQm90dG9tRXhjZWVkKSB7XG4gICAgICAgICAgdG9wUG9zaXRpb24gPSByZWN0W3RvcF0gKyBzY3JvbGwueSAtIGVsZW1lbnREaW1lbnNpb25zLmggKyBsaW5rRGltZW5zaW9ucy5oO1xuICAgICAgICAgIGFycm93VG9wID0gZWxlbWVudERpbWVuc2lvbnMuaCAtIGxpbmtEaW1lbnNpb25zLmgvMiAtIGFycm93V2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9wUG9zaXRpb24gPSByZWN0W3RvcF0gKyBzY3JvbGwueSAtIGVsZW1lbnREaW1lbnNpb25zLmgvMiArIGxpbmtEaW1lbnNpb25zLmgvMjtcbiAgICAgICAgICBhcnJvd1RvcCA9IGVsZW1lbnREaW1lbnNpb25zLmgvMiAtIChpc1BvcG92ZXIgPyBhcnJvd0hlaWdodCowLjkgOiBhcnJvd0hlaWdodC8yKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICggcG9zaXRpb24gPT09IHRvcCB8fCBwb3NpdGlvbiA9PT0gYm90dG9tICkgeyAvLyBwcmltYXJ5fHZlcnRpY2FsIHBvc2l0aW9uc1xuICAgICAgICBpZiAoIHBvc2l0aW9uID09PSB0b3ApIHsgLy8gVE9QXG4gICAgICAgICAgdG9wUG9zaXRpb24gPSAgcmVjdFt0b3BdICsgc2Nyb2xsLnkgLSBlbGVtZW50RGltZW5zaW9ucy5oIC0gKCBpc1BvcG92ZXIgPyBhcnJvd0hlaWdodCA6IDAgKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gQk9UVE9NXG4gICAgICAgICAgdG9wUG9zaXRpb24gPSByZWN0W3RvcF0gKyBzY3JvbGwueSArIGxpbmtEaW1lbnNpb25zLmg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRqdXN0IGxlZnQgfCByaWdodCBhbmQgYWxzbyB0aGUgYXJyb3dcbiAgICAgICAgaWYgKGhhbGZMZWZ0RXhjZWVkKSB7XG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gMDtcbiAgICAgICAgICBhcnJvd0xlZnQgPSByZWN0W2xlZnRdICsgbGlua0RpbWVuc2lvbnMudy8yIC0gYXJyb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChoYWxmUmlnaHRFeGNlZWQpIHtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSB3aW5kb3dXaWR0aCAtIGVsZW1lbnREaW1lbnNpb25zLncqMS4wMTtcbiAgICAgICAgICBhcnJvd0xlZnQgPSBlbGVtZW50RGltZW5zaW9ucy53IC0gKCB3aW5kb3dXaWR0aCAtIHJlY3RbbGVmdF0gKSArIGxpbmtEaW1lbnNpb25zLncvMiAtIGFycm93V2lkdGgvMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSByZWN0W2xlZnRdICsgc2Nyb2xsLnggLSBlbGVtZW50RGltZW5zaW9ucy53LzIgKyBsaW5rRGltZW5zaW9ucy53LzI7XG4gICAgICAgICAgYXJyb3dMZWZ0ID0gZWxlbWVudERpbWVuc2lvbnMudy8yIC0gKCBpc1BvcG92ZXIgPyBhcnJvd1dpZHRoIDogYXJyb3dXaWR0aC8yICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyBhcHBseSBzdHlsZSB0byB0b29sdGlwL3BvcG92ZXIgYW5kIGl0cyBhcnJvd1xuICAgICAgZWxlbWVudFtzdHlsZV1bdG9wXSA9IHRvcFBvc2l0aW9uICsgJ3B4JztcbiAgICAgIGVsZW1lbnRbc3R5bGVdW2xlZnRdID0gbGVmdFBvc2l0aW9uICsgJ3B4JztcbiAgXG4gICAgICBhcnJvd1RvcCAmJiAoYXJyb3dbc3R5bGVdW3RvcF0gPSBhcnJvd1RvcCArICdweCcpO1xuICAgICAgYXJyb3dMZWZ0ICYmIChhcnJvd1tzdHlsZV1bbGVmdF0gPSBhcnJvd0xlZnQgKyAncHgnKTtcbiAgICB9O1xuICBcbiAgQlNOLnZlcnNpb24gPSAnMi4wLjI3JztcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IEFsZXJ0XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gQUxFUlQgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09XG4gIHZhciBBbGVydCA9IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuICAgIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnRcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICBcbiAgICAvLyBiaW5kLCB0YXJnZXQgYWxlcnQsIGR1cmF0aW9uIGFuZCBzdHVmZlxuICAgIHZhciBzZWxmID0gdGhpcywgY29tcG9uZW50ID0gJ2FsZXJ0JyxcbiAgICAgIGFsZXJ0ID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcuJytjb21wb25lbnQpLFxuICAgICAgdHJpZ2dlckhhbmRsZXIgPSBmdW5jdGlvbigpeyBoYXNDbGFzcyhhbGVydCwnZmFkZScpID8gZW11bGF0ZVRyYW5zaXRpb25FbmQoYWxlcnQsdHJhbnNpdGlvbkVuZEhhbmRsZXIpIDogdHJhbnNpdGlvbkVuZEhhbmRsZXIoKTsgfSxcbiAgICAgIC8vIGhhbmRsZXJzXG4gICAgICBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgYWxlcnQgPSBnZXRDbG9zZXN0KGVbdGFyZ2V0XSwnLicrY29tcG9uZW50KTtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudCgnWycrZGF0YURpc21pc3MrJz1cIicrY29tcG9uZW50KydcIl0nLGFsZXJ0KTtcbiAgICAgICAgZWxlbWVudCAmJiBhbGVydCAmJiAoZWxlbWVudCA9PT0gZVt0YXJnZXRdIHx8IGVsZW1lbnRbY29udGFpbnNdKGVbdGFyZ2V0XSkpICYmIHNlbGYuY2xvc2UoKTtcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uRW5kSGFuZGxlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoYWxlcnQsIGNsb3NlZEV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICBvZmYoZWxlbWVudCwgY2xpY2tFdmVudCwgY2xpY2tIYW5kbGVyKTsgLy8gZGV0YWNoIGl0J3MgbGlzdGVuZXJcbiAgICAgICAgYWxlcnRbcGFyZW50Tm9kZV0ucmVtb3ZlQ2hpbGQoYWxlcnQpO1xuICAgICAgfTtcbiAgICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kXG4gICAgdGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCBhbGVydCAmJiBlbGVtZW50ICYmIGhhc0NsYXNzKGFsZXJ0LHNob3dDbGFzcykgKSB7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoYWxlcnQsIGNsb3NlRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGFsZXJ0LHNob3dDbGFzcyk7XG4gICAgICAgIGFsZXJ0ICYmIHRyaWdnZXJIYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdBbGVydCBpbiBlbGVtZW50ICkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICBvbihlbGVtZW50LCBjbGlja0V2ZW50LCBjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgICBlbGVtZW50W3N0cmluZ0FsZXJ0XSA9IHNlbGY7XG4gIH07XG4gIFxuICAvLyBBTEVSVCBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXShbc3RyaW5nQWxlcnQsIEFsZXJ0LCAnWycrZGF0YURpc21pc3MrJz1cImFsZXJ0XCJdJ10pO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IEJ1dHRvblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gQlVUVE9OIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuICB2YXIgQnV0dG9uID0gZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG4gIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnRcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICBcbiAgICAvLyBjb25zdGFudFxuICAgIHZhciB0b2dnbGVkID0gZmFsc2UsIC8vIHRvZ2dsZWQgbWFrZXMgc3VyZSB0byBwcmV2ZW50IHRyaWdnZXJpbmcgdHdpY2UgdGhlIGNoYW5nZS5icy5idXR0b24gZXZlbnRzXG4gIFxuICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgIGNvbXBvbmVudCA9ICdidXR0b24nLFxuICAgICAgICBjaGVja2VkID0gJ2NoZWNrZWQnLFxuICAgICAgICBMQUJFTCA9ICdMQUJFTCcsXG4gICAgICAgIElOUFVUID0gJ0lOUFVUJyxcbiAgXG4gICAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAgIGtleUhhbmRsZXIgPSBmdW5jdGlvbihlKXsgXG4gICAgICAgIHZhciBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcbiAgICAgICAga2V5ID09PSAzMiAmJiBlW3RhcmdldF0gPT09IERPQy5hY3RpdmVFbGVtZW50ICYmIHRvZ2dsZShlKTtcbiAgICAgIH0sXG4gICAgICBwcmV2ZW50U2Nyb2xsID0gZnVuY3Rpb24oZSl7IFxuICAgICAgICB2YXIga2V5ID0gZS53aGljaCB8fCBlLmtleUNvZGU7XG4gICAgICAgIGtleSA9PT0gMzIgJiYgZVtwcmV2ZW50RGVmYXVsdF0oKTtcbiAgICAgIH0sXG4gICAgICB0b2dnbGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBsYWJlbCA9IGVbdGFyZ2V0XS50YWdOYW1lID09PSBMQUJFTCA/IGVbdGFyZ2V0XSA6IGVbdGFyZ2V0XVtwYXJlbnROb2RlXS50YWdOYW1lID09PSBMQUJFTCA/IGVbdGFyZ2V0XVtwYXJlbnROb2RlXSA6IG51bGw7IC8vIHRoZSAuYnRuIGxhYmVsXG4gICAgICAgIFxuICAgICAgICBpZiAoICFsYWJlbCApIHJldHVybjsgLy9yZWFjdCBpZiBhIGxhYmVsIG9yIGl0cyBpbW1lZGlhdGUgY2hpbGQgaXMgY2xpY2tlZFxuICBcbiAgICAgICAgdmFyIGxhYmVscyA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUobGFiZWxbcGFyZW50Tm9kZV0sJ2J0bicpLCAvLyBhbGwgdGhlIGJ1dHRvbiBncm91cCBidXR0b25zXG4gICAgICAgICAgaW5wdXQgPSBsYWJlbFtnZXRFbGVtZW50c0J5VGFnTmFtZV0oSU5QVVQpWzBdO1xuICBcbiAgICAgICAgaWYgKCAhaW5wdXQgKSByZXR1cm47IC8vIHJldHVybiBpZiBubyBpbnB1dCBmb3VuZFxuICBcbiAgICAgICAgLy8gbWFuYWdlIHRoZSBkb20gbWFuaXB1bGF0aW9uXG4gICAgICAgIGlmICggaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94JyApIHsgLy9jaGVja2JveGVzXG4gICAgICAgICAgaWYgKCAhaW5wdXRbY2hlY2tlZF0gKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhsYWJlbCxhY3RpdmUpO1xuICAgICAgICAgICAgaW5wdXRbZ2V0QXR0cmlidXRlXShjaGVja2VkKTtcbiAgICAgICAgICAgIGlucHV0W3NldEF0dHJpYnV0ZV0oY2hlY2tlZCxjaGVja2VkKTtcbiAgICAgICAgICAgIGlucHV0W2NoZWNrZWRdID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MobGFiZWwsYWN0aXZlKTtcbiAgICAgICAgICAgIGlucHV0W2dldEF0dHJpYnV0ZV0oY2hlY2tlZCk7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoY2hlY2tlZCk7XG4gICAgICAgICAgICBpbnB1dFtjaGVja2VkXSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgaWYgKCF0b2dnbGVkKSB7IC8vIHByZXZlbnQgdHJpZ2dlcmluZyB0aGUgZXZlbnQgdHdpY2VcbiAgICAgICAgICAgIHRvZ2dsZWQgPSB0cnVlO1xuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChpbnB1dCwgY2hhbmdlRXZlbnQsIGNvbXBvbmVudCk7IC8vdHJpZ2dlciB0aGUgY2hhbmdlIGZvciB0aGUgaW5wdXRcbiAgICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgY2hhbmdlRXZlbnQsIGNvbXBvbmVudCk7IC8vdHJpZ2dlciB0aGUgY2hhbmdlIGZvciB0aGUgYnRuLWdyb3VwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIGlucHV0LnR5cGUgPT09ICdyYWRpbycgJiYgIXRvZ2dsZWQgKSB7IC8vIHJhZGlvIGJ1dHRvbnNcbiAgICAgICAgICAvLyBkb24ndCB0cmlnZ2VyIGlmIGFscmVhZHkgYWN0aXZlICh0aGUgT1IgY29uZGl0aW9uIGlzIGEgaGFjayB0byBjaGVjayBpZiB0aGUgYnV0dG9ucyB3ZXJlIHNlbGVjdGVkIHdpdGgga2V5IHByZXNzIGFuZCBOT1QgbW91c2UgY2xpY2spXG4gICAgICAgICAgaWYgKCAhaW5wdXRbY2hlY2tlZF0gfHwgKGUuc2NyZWVuWCA9PT0gMCAmJiBlLnNjcmVlblkgPT0gMCkgKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhsYWJlbCxhY3RpdmUpO1xuICAgICAgICAgICAgYWRkQ2xhc3MobGFiZWwsZm9jdXNFdmVudCk7XG4gICAgICAgICAgICBpbnB1dFtzZXRBdHRyaWJ1dGVdKGNoZWNrZWQsY2hlY2tlZCk7XG4gICAgICAgICAgICBpbnB1dFtjaGVja2VkXSA9IHRydWU7XG4gICAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGlucHV0LCBjaGFuZ2VFdmVudCwgY29tcG9uZW50KTsgLy90cmlnZ2VyIHRoZSBjaGFuZ2UgZm9yIHRoZSBpbnB1dFxuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBjaGFuZ2VFdmVudCwgY29tcG9uZW50KTsgLy90cmlnZ2VyIHRoZSBjaGFuZ2UgZm9yIHRoZSBidG4tZ3JvdXBcbiAgXG4gICAgICAgICAgICB0b2dnbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsbCA9IGxhYmVsc1tsZW5ndGhdOyBpPGxsOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIG90aGVyTGFiZWwgPSBsYWJlbHNbaV0sIG90aGVySW5wdXQgPSBvdGhlckxhYmVsW2dldEVsZW1lbnRzQnlUYWdOYW1lXShJTlBVVClbMF07XG4gICAgICAgICAgICAgIGlmICggb3RoZXJMYWJlbCAhPT0gbGFiZWwgJiYgaGFzQ2xhc3Mob3RoZXJMYWJlbCxhY3RpdmUpICkgIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhvdGhlckxhYmVsLGFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgb3RoZXJJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgb3RoZXJJbnB1dFtjaGVja2VkXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwob3RoZXJJbnB1dCwgY2hhbmdlRXZlbnQsIGNvbXBvbmVudCk7IC8vIHRyaWdnZXIgdGhlIGNoYW5nZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyB0b2dnbGVkID0gZmFsc2U7IH0sIDUwICk7XG4gICAgICB9LFxuICAgICAgZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBhZGRDbGFzcyhlW3RhcmdldF1bcGFyZW50Tm9kZV0sZm9jdXNFdmVudCk7XG4gICAgICB9LFxuICAgICAgYmx1ckhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVbdGFyZ2V0XVtwYXJlbnROb2RlXSxmb2N1c0V2ZW50KTtcbiAgICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoIHN0cmluZ0J1dHRvbiBpbiBlbGVtZW50ICkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICBvbiggZWxlbWVudCwgY2xpY2tFdmVudCwgdG9nZ2xlICk7XG4gICAgICBvbiggZWxlbWVudCwga2V5dXBFdmVudCwga2V5SGFuZGxlciApLCBvbiggZWxlbWVudCwga2V5ZG93bkV2ZW50LCBwcmV2ZW50U2Nyb2xsICk7XG4gIFxuICAgICAgdmFyIGFsbEJ0bnMgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsZW1lbnQsICdidG4nKTtcbiAgICAgIGZvciAodmFyIGk9MDsgaTxhbGxCdG5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGFsbEJ0bnNbaV1bZ2V0RWxlbWVudHNCeVRhZ05hbWVdKElOUFVUKVswXTtcbiAgICAgICAgb24oIGlucHV0LCBmb2N1c0V2ZW50LCBmb2N1c0hhbmRsZXIpLCBvbiggaW5wdXQsICdibHVyJywgYmx1ckhhbmRsZXIpO1xuICAgICAgfSAgICBcbiAgICB9XG4gIFxuICAgIC8vIGFjdGl2YXRlIGl0ZW1zIG9uIGxvYWRcbiAgICB2YXIgbGFiZWxzVG9BQ3RpdmF0ZSA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWxlbWVudCwgJ2J0bicpLCBsYmxsID0gbGFiZWxzVG9BQ3RpdmF0ZVtsZW5ndGhdO1xuICAgIGZvciAodmFyIGk9MDsgaTxsYmxsOyBpKyspIHtcbiAgICAgICFoYXNDbGFzcyhsYWJlbHNUb0FDdGl2YXRlW2ldLGFjdGl2ZSkgJiYgcXVlcnlFbGVtZW50KCdpbnB1dDpjaGVja2VkJyxsYWJlbHNUb0FDdGl2YXRlW2ldKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWRkQ2xhc3MobGFiZWxzVG9BQ3RpdmF0ZVtpXSxhY3RpdmUpO1xuICAgIH1cbiAgICBlbGVtZW50W3N0cmluZ0J1dHRvbl0gPSB0aGlzO1xuICB9O1xuICBcbiAgLy8gQlVUVE9OIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ0J1dHRvbiwgQnV0dG9uLCAnWycrZGF0YVRvZ2dsZSsnPVwiYnV0dG9uc1wiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IENhcm91c2VsXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gQ0FST1VTRUwgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09XG4gIHZhciBDYXJvdXNlbCA9IGZ1bmN0aW9uKCBlbGVtZW50LCBvcHRpb25zICkge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudCggZWxlbWVudCApO1xuICBcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcbiAgICAvLyBEQVRBIEFQSVxuICAgIHZhciBpbnRlcnZhbEF0dHJpYnV0ZSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhSW50ZXJ2YWwpLFxuICAgICAgICBpbnRlcnZhbE9wdGlvbiA9IG9wdGlvbnNbaW50ZXJ2YWxdLFxuICAgICAgICBpbnRlcnZhbERhdGEgPSBpbnRlcnZhbEF0dHJpYnV0ZSA9PT0gJ2ZhbHNlJyA/IDAgOiBwYXJzZUludChpbnRlcnZhbEF0dHJpYnV0ZSksICBcbiAgICAgICAgcGF1c2VEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFQYXVzZSkgPT09IGhvdmVyRXZlbnQgfHwgZmFsc2UsXG4gICAgICAgIGtleWJvYXJkRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhS2V5Ym9hcmQpID09PSAndHJ1ZScgfHwgZmFsc2UsXG4gICAgICBcbiAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICBjb21wb25lbnQgPSAnY2Fyb3VzZWwnLFxuICAgICAgICBwYXVzZWQgPSAncGF1c2VkJyxcbiAgICAgICAgZGlyZWN0aW9uID0gJ2RpcmVjdGlvbicsXG4gICAgICAgIGNhcm91c2VsSXRlbSA9ICdjYXJvdXNlbC1pdGVtJyxcbiAgICAgICAgZGF0YVNsaWRlVG8gPSAnZGF0YS1zbGlkZS10byc7IFxuICBcbiAgICB0aGlzW2tleWJvYXJkXSA9IG9wdGlvbnNba2V5Ym9hcmRdID09PSB0cnVlIHx8IGtleWJvYXJkRGF0YTtcbiAgICB0aGlzW3BhdXNlXSA9IChvcHRpb25zW3BhdXNlXSA9PT0gaG92ZXJFdmVudCB8fCBwYXVzZURhdGEpID8gaG92ZXJFdmVudCA6IGZhbHNlOyAvLyBmYWxzZSAvIGhvdmVyXG4gIFxuICAgIHRoaXNbaW50ZXJ2YWxdID0gdHlwZW9mIGludGVydmFsT3B0aW9uID09PSAnbnVtYmVyJyA/IGludGVydmFsT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgOiBpbnRlcnZhbE9wdGlvbiA9PT0gZmFsc2UgfHwgaW50ZXJ2YWxEYXRhID09PSAwIHx8IGludGVydmFsRGF0YSA9PT0gZmFsc2UgPyAwXG4gICAgICAgICAgICAgICAgICAgOiBpc05hTihpbnRlcnZhbERhdGEpID8gNTAwMCAvLyBib290c3RyYXAgY2Fyb3VzZWwgZGVmYXVsdCBpbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgIDogaW50ZXJ2YWxEYXRhO1xuICBcbiAgICAvLyBiaW5kLCBldmVudCB0YXJnZXRzXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBpbmRleCA9IGVsZW1lbnQuaW5kZXggPSAwLCB0aW1lciA9IGVsZW1lbnQudGltZXIgPSAwLCBcbiAgICAgIGlzU2xpZGluZyA9IGZhbHNlLCAvLyBpc1NsaWRpbmcgcHJldmVudHMgY2xpY2sgZXZlbnQgaGFuZGxlcnMgd2hlbiBhbmltYXRpb24gaXMgcnVubmluZ1xuICAgICAgaXNUb3VjaCA9IGZhbHNlLCBzdGFydFhQb3NpdGlvbiA9IG51bGwsIGN1cnJlbnRYUG9zaXRpb24gPSBudWxsLCBlbmRYUG9zaXRpb24gPSBudWxsLCAvLyB0b3VjaCBhbmQgZXZlbnQgY29vcmRpbmF0ZXNcbiAgICAgIHNsaWRlcyA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWxlbWVudCxjYXJvdXNlbEl0ZW0pLCB0b3RhbCA9IHNsaWRlc1tsZW5ndGhdLFxuICAgICAgc2xpZGVEaXJlY3Rpb24gPSB0aGlzW2RpcmVjdGlvbl0gPSBsZWZ0LFxuICAgICAgbGVmdEFycm93ID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbGVtZW50LGNvbXBvbmVudCsnLWNvbnRyb2wtcHJldicpWzBdLCBcbiAgICAgIHJpZ2h0QXJyb3cgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsZW1lbnQsY29tcG9uZW50KyctY29udHJvbC1uZXh0JylbMF0sXG4gICAgICBpbmRpY2F0b3IgPSBxdWVyeUVsZW1lbnQoICcuJytjb21wb25lbnQrJy1pbmRpY2F0b3JzJywgZWxlbWVudCApLFxuICAgICAgaW5kaWNhdG9ycyA9IGluZGljYXRvciAmJiBpbmRpY2F0b3JbZ2V0RWxlbWVudHNCeVRhZ05hbWVdKCBcIkxJXCIgKSB8fCBbXTtcbiAgXG4gICAgLy8gaW52YWxpZGF0ZSB3aGVuIG5vdCBlbm91Z2ggaXRlbXNcbiAgICBpZiAodG90YWwgPCAyKSB7IHJldHVybjsgfVxuICBcbiAgICAvLyBoYW5kbGVyc1xuICAgIHZhciBwYXVzZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICggc2VsZltpbnRlcnZhbF0gIT09ZmFsc2UgJiYgIWhhc0NsYXNzKGVsZW1lbnQscGF1c2VkKSApIHtcbiAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LHBhdXNlZCk7XG4gICAgICAgICAgIWlzU2xpZGluZyAmJiAoIGNsZWFySW50ZXJ2YWwodGltZXIpLCB0aW1lciA9IG51bGwgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc3VtZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCBzZWxmW2ludGVydmFsXSAhPT0gZmFsc2UgJiYgaGFzQ2xhc3MoZWxlbWVudCxwYXVzZWQpICkge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQscGF1c2VkKTtcbiAgICAgICAgICAhaXNTbGlkaW5nICYmICggY2xlYXJJbnRlcnZhbCh0aW1lciksIHRpbWVyID0gbnVsbCApO1xuICAgICAgICAgICFpc1NsaWRpbmcgJiYgc2VsZi5jeWNsZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5kaWNhdG9ySGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZVtwcmV2ZW50RGVmYXVsdF0oKTtcbiAgICAgICAgaWYgKGlzU2xpZGluZykgcmV0dXJuO1xuICBcbiAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZVt0YXJnZXRdOyAvLyBldmVudCB0YXJnZXQgfCB0aGUgY3VycmVudCBhY3RpdmUgaXRlbVxuICBcbiAgICAgICAgaWYgKCBldmVudFRhcmdldCAmJiAhaGFzQ2xhc3MoZXZlbnRUYXJnZXQsYWN0aXZlKSAmJiBldmVudFRhcmdldFtnZXRBdHRyaWJ1dGVdKGRhdGFTbGlkZVRvKSApIHtcbiAgICAgICAgICBpbmRleCA9IHBhcnNlSW50KCBldmVudFRhcmdldFtnZXRBdHRyaWJ1dGVdKGRhdGFTbGlkZVRvKSwgMTAgKTtcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gIFxuICAgICAgICBzZWxmLnNsaWRlVG8oIGluZGV4ICk7IC8vRG8gdGhlIHNsaWRlXG4gICAgICB9LFxuICAgICAgY29udHJvbHNIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZVtwcmV2ZW50RGVmYXVsdF0oKTtcbiAgICAgICAgaWYgKGlzU2xpZGluZykgcmV0dXJuO1xuICBcbiAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgXG4gICAgICAgIGlmICggZXZlbnRUYXJnZXQgPT09IHJpZ2h0QXJyb3cgKSB7XG4gICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnRUYXJnZXQgPT09IGxlZnRBcnJvdyApIHtcbiAgICAgICAgICBpbmRleC0tO1xuICAgICAgICB9XG4gIFxuICAgICAgICBzZWxmLnNsaWRlVG8oIGluZGV4ICk7IC8vRG8gdGhlIHNsaWRlXG4gICAgICB9LFxuICAgICAga2V5SGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChpc1NsaWRpbmcpIHJldHVybjtcbiAgICAgICAgc3dpdGNoIChlLndoaWNoKSB7XG4gICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6IHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnNsaWRlVG8oIGluZGV4ICk7IC8vRG8gdGhlIHNsaWRlXG4gICAgICB9LFxuICAgICAgLy8gdG91Y2ggZXZlbnRzXG4gICAgICB0b2dnbGVUb3VjaEV2ZW50cyA9IGZ1bmN0aW9uKHRvZ2dsZSl7XG4gICAgICAgIHRvZ2dsZSggZWxlbWVudCwgdG91Y2hFdmVudHMubW92ZSwgdG91Y2hNb3ZlSGFuZGxlciwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICAgICAgdG9nZ2xlKCBlbGVtZW50LCB0b3VjaEV2ZW50cy5lbmQsIHRvdWNoRW5kSGFuZGxlciwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICB9LCAgXG4gICAgICB0b3VjaERvd25IYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIGlzVG91Y2ggKSB7IHJldHVybjsgfSBcbiAgICAgICAgICBcbiAgICAgICAgc3RhcnRYUG9zaXRpb24gPSBwYXJzZUludChlLnRvdWNoZXNbMF0ucGFnZVgpO1xuICBcbiAgICAgICAgaWYgKCBlbGVtZW50LmNvbnRhaW5zKGVbdGFyZ2V0XSkgKSB7XG4gICAgICAgICAgaXNUb3VjaCA9IHRydWU7XG4gICAgICAgICAgdG9nZ2xlVG91Y2hFdmVudHMob24pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG91Y2hNb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCAhaXNUb3VjaCApIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyByZXR1cm47IH1cbiAgXG4gICAgICAgIGN1cnJlbnRYUG9zaXRpb24gPSBwYXJzZUludChlLnRvdWNoZXNbMF0ucGFnZVgpO1xuICAgICAgICBcbiAgICAgICAgLy9jYW5jZWwgdG91Y2ggaWYgbW9yZSB0aGFuIG9uZSB0b3VjaGVzIGRldGVjdGVkXG4gICAgICAgIGlmICggZS50eXBlID09PSAndG91Y2htb3ZlJyAmJiBlLnRvdWNoZXNbbGVuZ3RoXSA+IDEgKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvdWNoRW5kSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCAhaXNUb3VjaCB8fCBpc1NsaWRpbmcgKSB7IHJldHVybiB9XG4gICAgICAgIFxuICAgICAgICBlbmRYUG9zaXRpb24gPSBjdXJyZW50WFBvc2l0aW9uIHx8IHBhcnNlSW50KCBlLnRvdWNoZXNbMF0ucGFnZVggKTtcbiAgXG4gICAgICAgIGlmICggaXNUb3VjaCApIHtcbiAgICAgICAgICBpZiAoICghZWxlbWVudC5jb250YWlucyhlW3RhcmdldF0pIHx8ICFlbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkgKSAmJiBNYXRoLmFicyhzdGFydFhQb3NpdGlvbiAtIGVuZFhQb3NpdGlvbikgPCA3NSApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBjdXJyZW50WFBvc2l0aW9uIDwgc3RhcnRYUG9zaXRpb24gKSB7XG4gICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBjdXJyZW50WFBvc2l0aW9uID4gc3RhcnRYUG9zaXRpb24gKSB7XG4gICAgICAgICAgICAgIGluZGV4LS07ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYuc2xpZGVUbyhpbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvZ2dsZVRvdWNoRXZlbnRzKG9mZik7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gIFxuICAgICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgICBpc0VsZW1lbnRJblNjcm9sbFJhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVjdCA9IGVsZW1lbnRbZ2V0Qm91bmRpbmdDbGllbnRSZWN0XSgpLFxuICAgICAgICAgIHZpZXdwb3J0SGVpZ2h0ID0gZ2xvYmFsT2JqZWN0W2lubmVySGVpZ2h0XSB8fCBIVE1MW2NsaWVudEhlaWdodF1cbiAgICAgICAgcmV0dXJuIHJlY3RbdG9wXSA8PSB2aWV3cG9ydEhlaWdodCAmJiByZWN0W2JvdHRvbV0gPj0gMDsgLy8gYm90dG9tICYmIHRvcFxuICAgICAgfSwgICAgXG4gICAgICBzZXRBY3RpdmVQYWdlID0gZnVuY3Rpb24oIHBhZ2VJbmRleCApIHsgLy9pbmRpY2F0b3JzXG4gICAgICAgIGZvciAoIHZhciBpID0gMCwgaWNsID0gaW5kaWNhdG9yc1tsZW5ndGhdOyBpIDwgaWNsOyBpKysgKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoaW5kaWNhdG9yc1tpXSxhY3RpdmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRpY2F0b3JzW3BhZ2VJbmRleF0pIGFkZENsYXNzKGluZGljYXRvcnNbcGFnZUluZGV4XSwgYWN0aXZlKTtcbiAgICAgIH07XG4gIFxuICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHRoaXMuY3ljbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgfVxuICBcbiAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzRWxlbWVudEluU2Nyb2xsUmFuZ2UoKSAmJiAoaW5kZXgrKywgc2VsZi5zbGlkZVRvKCBpbmRleCApICk7XG4gICAgICB9LCB0aGlzW2ludGVydmFsXSk7XG4gICAgfTtcbiAgICB0aGlzLnNsaWRlVG8gPSBmdW5jdGlvbiggbmV4dCApIHtcbiAgICAgIGlmIChpc1NsaWRpbmcpIHJldHVybjsgLy8gd2hlbiBjb250cm9sZWQgdmlhIG1ldGhvZHMsIG1ha2Ugc3VyZSB0byBjaGVjayBhZ2FpbiAgICAgIFxuICAgICAgXG4gICAgICB2YXIgYWN0aXZlSXRlbSA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKSwgLy8gdGhlIGN1cnJlbnQgYWN0aXZlXG4gICAgICAgICAgb3JpZW50YXRpb247XG4gICAgICBcbiAgICAgIC8vIGZpcnN0IHJldHVybiBpZiB3ZSdyZSBvbiB0aGUgc2FtZSBpdGVtICMyMjdcbiAgICAgIGlmICggYWN0aXZlSXRlbSA9PT0gbmV4dCApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgLy8gb3IgZGV0ZXJtaW5lIHNsaWRlRGlyZWN0aW9uXG4gICAgICB9IGVsc2UgaWYgICggKGFjdGl2ZUl0ZW0gPCBuZXh0ICkgfHwgKGFjdGl2ZUl0ZW0gPT09IDAgJiYgbmV4dCA9PT0gdG90YWwgLTEgKSApIHtcbiAgICAgICAgc2xpZGVEaXJlY3Rpb24gPSBzZWxmW2RpcmVjdGlvbl0gPSBsZWZ0OyAvLyBuZXh0XG4gICAgICB9IGVsc2UgaWYgICggKGFjdGl2ZUl0ZW0gPiBuZXh0KSB8fCAoYWN0aXZlSXRlbSA9PT0gdG90YWwgLSAxICYmIG5leHQgPT09IDAgKSApIHtcbiAgICAgICAgc2xpZGVEaXJlY3Rpb24gPSBzZWxmW2RpcmVjdGlvbl0gPSByaWdodDsgLy8gcHJldlxuICAgICAgfVxuICBcbiAgICAgIC8vIGZpbmQgdGhlIHJpZ2h0IG5leHQgaW5kZXggXG4gICAgICBpZiAoIG5leHQgPCAwICkgeyBuZXh0ID0gdG90YWwgLSAxOyB9IFxuICAgICAgZWxzZSBpZiAoIG5leHQgPj0gdG90YWwgKXsgbmV4dCA9IDA7IH1cbiAgXG4gICAgICAvLyB1cGRhdGUgaW5kZXhcbiAgICAgIGluZGV4ID0gbmV4dDtcbiAgXG4gICAgICBvcmllbnRhdGlvbiA9IHNsaWRlRGlyZWN0aW9uID09PSBsZWZ0ID8gJ25leHQnIDogJ3ByZXYnOyAvL2RldGVybWluZSB0eXBlXG4gICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNsaWRlRXZlbnQsIGNvbXBvbmVudCwgc2xpZGVzW25leHRdKTsgLy8gaGVyZSB3ZSBnbyB3aXRoIHRoZSBzbGlkZVxuICBcbiAgICAgIGlzU2xpZGluZyA9IHRydWU7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIHNldEFjdGl2ZVBhZ2UoIG5leHQgKTtcbiAgXG4gICAgICBpZiAoIHN1cHBvcnRUcmFuc2l0aW9ucyAmJiBoYXNDbGFzcyhlbGVtZW50LCdzbGlkZScpICkge1xuICBcbiAgICAgICAgYWRkQ2xhc3Moc2xpZGVzW25leHRdLGNhcm91c2VsSXRlbSArJy0nKyBvcmllbnRhdGlvbik7XG4gICAgICAgIHNsaWRlc1tuZXh0XVtvZmZzZXRXaWR0aF07XG4gICAgICAgIGFkZENsYXNzKHNsaWRlc1tuZXh0XSxjYXJvdXNlbEl0ZW0gKyctJysgc2xpZGVEaXJlY3Rpb24pO1xuICAgICAgICBhZGRDbGFzcyhzbGlkZXNbYWN0aXZlSXRlbV0sY2Fyb3VzZWxJdGVtICsnLScrIHNsaWRlRGlyZWN0aW9uKTtcbiAgXG4gICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHNsaWRlc1tuZXh0XSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHZhciB0aW1lb3V0ID0gZSAmJiBlW3RhcmdldF0gIT09IHNsaWRlc1tuZXh0XSA/IGUuZWxhcHNlZFRpbWUqMTAwMCsxMDAgOiAyMDtcbiAgICAgICAgICBcbiAgICAgICAgICBpc1NsaWRpbmcgJiYgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaXNTbGlkaW5nID0gZmFsc2U7XG4gIFxuICAgICAgICAgICAgYWRkQ2xhc3Moc2xpZGVzW25leHRdLGFjdGl2ZSk7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzbGlkZXNbYWN0aXZlSXRlbV0sYWN0aXZlKTtcbiAgXG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzbGlkZXNbbmV4dF0sY2Fyb3VzZWxJdGVtICsnLScrIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlc1tuZXh0XSxjYXJvdXNlbEl0ZW0gKyctJysgc2xpZGVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGVzW2FjdGl2ZUl0ZW1dLGNhcm91c2VsSXRlbSArJy0nKyBzbGlkZURpcmVjdGlvbik7XG4gIFxuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBzbGlkRXZlbnQsIGNvbXBvbmVudCwgc2xpZGVzW25leHRdKTtcbiAgXG4gICAgICAgICAgICBpZiAoICFET0MuaGlkZGVuICYmIHNlbGZbaW50ZXJ2YWxdICYmICFoYXNDbGFzcyhlbGVtZW50LHBhdXNlZCkgKSB7XG4gICAgICAgICAgICAgIHNlbGYuY3ljbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgfSk7XG4gIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ2xhc3Moc2xpZGVzW25leHRdLGFjdGl2ZSk7XG4gICAgICAgIHNsaWRlc1tuZXh0XVtvZmZzZXRXaWR0aF07XG4gICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlc1thY3RpdmVJdGVtXSxhY3RpdmUpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmICggc2VsZltpbnRlcnZhbF0gJiYgIWhhc0NsYXNzKGVsZW1lbnQscGF1c2VkKSApIHtcbiAgICAgICAgICAgIHNlbGYuY3ljbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBzbGlkRXZlbnQsIGNvbXBvbmVudCwgc2xpZGVzW25leHRdKTtcbiAgICAgICAgfSwgMTAwICk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmdldEFjdGl2ZUluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNsaWRlc1tpbmRleE9mXShnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsZW1lbnQsY2Fyb3VzZWxJdGVtKycgYWN0aXZlJylbMF0pIHx8IDA7XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdDYXJvdXNlbCBpbiBlbGVtZW50ICkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gIFxuICAgICAgaWYgKCBzZWxmW3BhdXNlXSAmJiBzZWxmW2ludGVydmFsXSApIHtcbiAgICAgICAgb24oIGVsZW1lbnQsIG1vdXNlSG92ZXJbMF0sIHBhdXNlSGFuZGxlciApO1xuICAgICAgICBvbiggZWxlbWVudCwgbW91c2VIb3ZlclsxXSwgcmVzdW1lSGFuZGxlciApO1xuICAgICAgICBvbiggZWxlbWVudCwgdG91Y2hFdmVudHMuc3RhcnQsIHBhdXNlSGFuZGxlciwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICAgICAgb24oIGVsZW1lbnQsIHRvdWNoRXZlbnRzLmVuZCwgcmVzdW1lSGFuZGxlciwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIHNsaWRlc1tsZW5ndGhdID4gMSAmJiBvbiggZWxlbWVudCwgdG91Y2hFdmVudHMuc3RhcnQsIHRvdWNoRG93bkhhbmRsZXIsIHBhc3NpdmVIYW5kbGVyICk7XG4gIFxuICAgICAgcmlnaHRBcnJvdyAmJiBvbiggcmlnaHRBcnJvdywgY2xpY2tFdmVudCwgY29udHJvbHNIYW5kbGVyICk7XG4gICAgICBsZWZ0QXJyb3cgJiYgb24oIGxlZnRBcnJvdywgY2xpY2tFdmVudCwgY29udHJvbHNIYW5kbGVyICk7XG4gICAgXG4gICAgICBpbmRpY2F0b3IgJiYgb24oIGluZGljYXRvciwgY2xpY2tFdmVudCwgaW5kaWNhdG9ySGFuZGxlciApO1xuICAgICAgc2VsZltrZXlib2FyZF0gJiYgb24oIGdsb2JhbE9iamVjdCwga2V5ZG93bkV2ZW50LCBrZXlIYW5kbGVyICk7XG4gIFxuICAgIH1cbiAgICBpZiAoc2VsZi5nZXRBY3RpdmVJbmRleCgpPDApIHtcbiAgICAgIHNsaWRlc1tsZW5ndGhdICYmIGFkZENsYXNzKHNsaWRlc1swXSxhY3RpdmUpO1xuICAgICAgaW5kaWNhdG9yc1tsZW5ndGhdICYmIHNldEFjdGl2ZVBhZ2UoMCk7XG4gICAgfVxuICBcbiAgICBpZiAoIHNlbGZbaW50ZXJ2YWxdICl7IHNlbGYuY3ljbGUoKTsgfVxuICAgIGVsZW1lbnRbc3RyaW5nQ2Fyb3VzZWxdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIENBUk9VU0VMIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ0Nhcm91c2VsLCBDYXJvdXNlbCwgJ1snK2RhdGFSaWRlKyc9XCJjYXJvdXNlbFwiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IENvbGxhcHNlXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIENPTExBUFNFIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuICB2YXIgQ29sbGFwc2UgPSBmdW5jdGlvbiggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIHNldCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFxuICAgIC8vIGV2ZW50IHRhcmdldHMgYW5kIGNvbnN0YW50c1xuICAgIHZhciBhY2NvcmRpb24gPSBudWxsLCBjb2xsYXBzZSA9IG51bGwsIHNlbGYgPSB0aGlzLCBcbiAgICAgIGFjY29yZGlvbkRhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oJ2RhdGEtcGFyZW50JyksXG4gICAgICBhY3RpdmVDb2xsYXBzZSwgYWN0aXZlRWxlbWVudCxcbiAgXG4gICAgICAvLyBjb21wb25lbnQgc3RyaW5nc1xuICAgICAgY29tcG9uZW50ID0gJ2NvbGxhcHNlJyxcbiAgICAgIGNvbGxhcHNlZCA9ICdjb2xsYXBzZWQnLFxuICAgICAgaXNBbmltYXRpbmcgPSAnaXNBbmltYXRpbmcnLFxuICBcbiAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgICAgb3BlbkFjdGlvbiA9IGZ1bmN0aW9uKGNvbGxhcHNlRWxlbWVudCx0b2dnbGUpIHtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChjb2xsYXBzZUVsZW1lbnQsIHNob3dFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50W2lzQW5pbWF0aW5nXSA9IHRydWU7XG4gICAgICAgIGFkZENsYXNzKGNvbGxhcHNlRWxlbWVudCxjb2xsYXBzaW5nKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoY29sbGFwc2VFbGVtZW50LGNvbXBvbmVudCk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudFtzdHlsZV1baGVpZ2h0XSA9IGNvbGxhcHNlRWxlbWVudFtzY3JvbGxIZWlnaHRdICsgJ3B4JztcbiAgICAgICAgXG4gICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGNvbGxhcHNlRWxlbWVudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29sbGFwc2VFbGVtZW50W2lzQW5pbWF0aW5nXSA9IGZhbHNlO1xuICAgICAgICAgIGNvbGxhcHNlRWxlbWVudFtzZXRBdHRyaWJ1dGVdKGFyaWFFeHBhbmRlZCwndHJ1ZScpO1xuICAgICAgICAgIHRvZ2dsZVtzZXRBdHRyaWJ1dGVdKGFyaWFFeHBhbmRlZCwndHJ1ZScpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGNvbGxhcHNlRWxlbWVudCxjb2xsYXBzaW5nKTtcbiAgICAgICAgICBhZGRDbGFzcyhjb2xsYXBzZUVsZW1lbnQsIGNvbXBvbmVudCk7XG4gICAgICAgICAgYWRkQ2xhc3MoY29sbGFwc2VFbGVtZW50LHNob3dDbGFzcyk7XG4gICAgICAgICAgY29sbGFwc2VFbGVtZW50W3N0eWxlXVtoZWlnaHRdID0gJyc7XG4gICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChjb2xsYXBzZUVsZW1lbnQsIHNob3duRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNsb3NlQWN0aW9uID0gZnVuY3Rpb24oY29sbGFwc2VFbGVtZW50LHRvZ2dsZSkge1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGNvbGxhcHNlRWxlbWVudCwgaGlkZUV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICBjb2xsYXBzZUVsZW1lbnRbaXNBbmltYXRpbmddID0gdHJ1ZTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50W3N0eWxlXVtoZWlnaHRdID0gY29sbGFwc2VFbGVtZW50W3Njcm9sbEhlaWdodF0gKyAncHgnOyAvLyBzZXQgaGVpZ2h0IGZpcnN0XG4gICAgICAgIHJlbW92ZUNsYXNzKGNvbGxhcHNlRWxlbWVudCxjb21wb25lbnQpO1xuICAgICAgICByZW1vdmVDbGFzcyhjb2xsYXBzZUVsZW1lbnQsc2hvd0NsYXNzKTtcbiAgICAgICAgYWRkQ2xhc3MoY29sbGFwc2VFbGVtZW50LGNvbGxhcHNpbmcpO1xuICAgICAgICBjb2xsYXBzZUVsZW1lbnRbb2Zmc2V0V2lkdGhdOyAvLyBmb3JjZSByZWZsb3cgdG8gZW5hYmxlIHRyYW5zaXRpb25cbiAgICAgICAgY29sbGFwc2VFbGVtZW50W3N0eWxlXVtoZWlnaHRdID0gJzBweCc7XG4gICAgICAgIFxuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChjb2xsYXBzZUVsZW1lbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbGxhcHNlRWxlbWVudFtpc0FuaW1hdGluZ10gPSBmYWxzZTtcbiAgICAgICAgICBjb2xsYXBzZUVsZW1lbnRbc2V0QXR0cmlidXRlXShhcmlhRXhwYW5kZWQsJ2ZhbHNlJyk7XG4gICAgICAgICAgdG9nZ2xlW3NldEF0dHJpYnV0ZV0oYXJpYUV4cGFuZGVkLCdmYWxzZScpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGNvbGxhcHNlRWxlbWVudCxjb2xsYXBzaW5nKTtcbiAgICAgICAgICBhZGRDbGFzcyhjb2xsYXBzZUVsZW1lbnQsY29tcG9uZW50KTtcbiAgICAgICAgICBjb2xsYXBzZUVsZW1lbnRbc3R5bGVdW2hlaWdodF0gPSAnJztcbiAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGNvbGxhcHNlRWxlbWVudCwgaGlkZGVuRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHJlZiA9IGVsZW1lbnQuaHJlZiAmJiBlbGVtZW50W2dldEF0dHJpYnV0ZV0oJ2hyZWYnKSxcbiAgICAgICAgICBwYXJlbnQgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRhcmdldCksXG4gICAgICAgICAgaWQgPSBocmVmIHx8ICggcGFyZW50ICYmIHBhcmVudC5jaGFyQXQoMCkgPT09ICcjJyApICYmIHBhcmVudDtcbiAgICAgICAgcmV0dXJuIGlkICYmIHF1ZXJ5RWxlbWVudChpZCk7XG4gICAgICB9O1xuICAgIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICBlW3ByZXZlbnREZWZhdWx0XSgpO1xuICAgICAgaWYgKCFoYXNDbGFzcyhjb2xsYXBzZSxzaG93Q2xhc3MpKSB7IHNlbGYuc2hvdygpOyB9IFxuICAgICAgZWxzZSB7IHNlbGYuaGlkZSgpOyB9XG4gICAgfTtcbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggY29sbGFwc2VbaXNBbmltYXRpbmddICkgcmV0dXJuOyAgICBcbiAgICAgIGNsb3NlQWN0aW9uKGNvbGxhcHNlLGVsZW1lbnQpO1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCxjb2xsYXBzZWQpO1xuICAgIH07XG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIGFjY29yZGlvbiApIHtcbiAgICAgICAgYWN0aXZlQ29sbGFwc2UgPSBxdWVyeUVsZW1lbnQoJy4nK2NvbXBvbmVudCsnLicrc2hvd0NsYXNzLGFjY29yZGlvbik7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVDb2xsYXBzZSAmJiAocXVlcnlFbGVtZW50KCdbJytkYXRhVGFyZ2V0Kyc9XCIjJythY3RpdmVDb2xsYXBzZS5pZCsnXCJdJyxhY2NvcmRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgfHwgcXVlcnlFbGVtZW50KCdbaHJlZj1cIiMnK2FjdGl2ZUNvbGxhcHNlLmlkKydcIl0nLGFjY29yZGlvbikgKTtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAoICFjb2xsYXBzZVtpc0FuaW1hdGluZ10gfHwgYWN0aXZlQ29sbGFwc2UgJiYgIWFjdGl2ZUNvbGxhcHNlW2lzQW5pbWF0aW5nXSApIHtcbiAgICAgICAgaWYgKCBhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUNvbGxhcHNlICE9PSBjb2xsYXBzZSApIHtcbiAgICAgICAgICBjbG9zZUFjdGlvbihhY3RpdmVDb2xsYXBzZSxhY3RpdmVFbGVtZW50KTsgXG4gICAgICAgICAgYWRkQ2xhc3MoYWN0aXZlRWxlbWVudCxjb2xsYXBzZWQpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5BY3Rpb24oY29sbGFwc2UsZWxlbWVudCk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsY29sbGFwc2VkKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKHN0cmluZ0NvbGxhcHNlIGluIGVsZW1lbnQgKSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgICAgIG9uKGVsZW1lbnQsIGNsaWNrRXZlbnQsIHNlbGYudG9nZ2xlKTtcbiAgICB9XG4gICAgY29sbGFwc2UgPSBnZXRUYXJnZXQoKTtcbiAgICBjb2xsYXBzZVtpc0FuaW1hdGluZ10gPSBmYWxzZTsgIC8vIHdoZW4gdHJ1ZSBpdCB3aWxsIHByZXZlbnQgY2xpY2sgaGFuZGxlcnMgIFxuICAgIGFjY29yZGlvbiA9IHF1ZXJ5RWxlbWVudChvcHRpb25zLnBhcmVudCkgfHwgYWNjb3JkaW9uRGF0YSAmJiBnZXRDbG9zZXN0KGVsZW1lbnQsIGFjY29yZGlvbkRhdGEpO1xuICAgIGVsZW1lbnRbc3RyaW5nQ29sbGFwc2VdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIENPTExBUFNFIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ0NvbGxhcHNlLCBDb2xsYXBzZSwgJ1snK2RhdGFUb2dnbGUrJz1cImNvbGxhcHNlXCJdJyBdICk7XG4gIFxuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgRHJvcGRvd25cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBEUk9QRE9XTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT1cbiAgdmFyIERyb3Bkb3duID0gZnVuY3Rpb24oIGVsZW1lbnQsIG9wdGlvbiApIHtcbiAgICAgIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnRcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICBcbiAgICAvLyBzZXQgb3B0aW9uXG4gICAgdGhpcy5wZXJzaXN0ID0gb3B0aW9uID09PSB0cnVlIHx8IGVsZW1lbnRbZ2V0QXR0cmlidXRlXSgnZGF0YS1wZXJzaXN0JykgPT09ICd0cnVlJyB8fCBmYWxzZTtcbiAgXG4gICAgLy8gY29uc3RhbnRzLCBldmVudCB0YXJnZXRzLCBzdHJpbmdzXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBjaGlsZHJlbiA9ICdjaGlsZHJlbicsXG4gICAgICBwYXJlbnQgPSBlbGVtZW50W3BhcmVudE5vZGVdLFxuICAgICAgY29tcG9uZW50ID0gJ2Ryb3Bkb3duJywgb3BlbiA9ICdvcGVuJyxcbiAgICAgIHJlbGF0ZWRUYXJnZXQgPSBudWxsLFxuICAgICAgbWVudSA9IHF1ZXJ5RWxlbWVudCgnLmRyb3Bkb3duLW1lbnUnLCBwYXJlbnQpLFxuICAgICAgbWVudUl0ZW1zID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBzZXQgPSBtZW51W2NoaWxkcmVuXSwgbmV3U2V0ID0gW107XG4gICAgICAgIGZvciAoIHZhciBpPTA7IGk8c2V0W2xlbmd0aF07IGkrKyApe1xuICAgICAgICAgIHNldFtpXVtjaGlsZHJlbl1bbGVuZ3RoXSAmJiAoc2V0W2ldW2NoaWxkcmVuXVswXS50YWdOYW1lID09PSAnQScgJiYgbmV3U2V0W3B1c2hdKHNldFtpXVtjaGlsZHJlbl1bMF0pKTtcbiAgICAgICAgICBzZXRbaV0udGFnTmFtZSA9PT0gJ0EnICYmIG5ld1NldFtwdXNoXShzZXRbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdTZXQ7XG4gICAgICB9KSgpLFxuICBcbiAgICAgIC8vIHByZXZlbnREZWZhdWx0IG9uIGVtcHR5IGFuY2hvciBsaW5rc1xuICAgICAgcHJldmVudEVtcHR5QW5jaG9yID0gZnVuY3Rpb24oYW5jaG9yKXtcbiAgICAgICAgKGFuY2hvci5ocmVmICYmIGFuY2hvci5ocmVmLnNsaWNlKC0xKSA9PT0gJyMnIHx8IGFuY2hvcltwYXJlbnROb2RlXSAmJiBhbmNob3JbcGFyZW50Tm9kZV0uaHJlZiBcbiAgICAgICAgICAmJiBhbmNob3JbcGFyZW50Tm9kZV0uaHJlZi5zbGljZSgtMSkgPT09ICcjJykgJiYgdGhpc1twcmV2ZW50RGVmYXVsdF0oKTsgICAgXG4gICAgICB9LFxuICBcbiAgICAgIC8vIHRvZ2dsZSBkaXNtaXNzaWJsZSBldmVudHNcbiAgICAgIHRvZ2dsZURpc21pc3MgPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdHlwZSA9IGVsZW1lbnRbb3Blbl0gPyBvbiA6IG9mZjtcbiAgICAgICAgdHlwZShET0MsIGNsaWNrRXZlbnQsIGRpc21pc3NIYW5kbGVyKTsgXG4gICAgICAgIHR5cGUoRE9DLCBrZXlkb3duRXZlbnQsIHByZXZlbnRTY3JvbGwpO1xuICAgICAgICB0eXBlKERPQywga2V5dXBFdmVudCwga2V5SGFuZGxlcik7XG4gICAgICAgIHR5cGUoRE9DLCBmb2N1c0V2ZW50LCBkaXNtaXNzSGFuZGxlciwgdHJ1ZSk7XG4gICAgICB9LFxuICBcbiAgICAgIC8vIGhhbmRsZXJzXG4gICAgICBkaXNtaXNzSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZVt0YXJnZXRdLCBoYXNEYXRhID0gZXZlbnRUYXJnZXQgJiYgKGV2ZW50VGFyZ2V0W2dldEF0dHJpYnV0ZV0oZGF0YVRvZ2dsZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBldmVudFRhcmdldFtwYXJlbnROb2RlXSAmJiBnZXRBdHRyaWJ1dGUgaW4gZXZlbnRUYXJnZXRbcGFyZW50Tm9kZV0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBldmVudFRhcmdldFtwYXJlbnROb2RlXVtnZXRBdHRyaWJ1dGVdKGRhdGFUb2dnbGUpKTtcbiAgICAgICAgaWYgKCBlLnR5cGUgPT09IGZvY3VzRXZlbnQgJiYgKGV2ZW50VGFyZ2V0ID09PSBlbGVtZW50IHx8IGV2ZW50VGFyZ2V0ID09PSBtZW51IHx8IG1lbnVbY29udGFpbnNdKGV2ZW50VGFyZ2V0KSApICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIChldmVudFRhcmdldCA9PT0gbWVudSB8fCBtZW51W2NvbnRhaW5zXShldmVudFRhcmdldCkpICYmIChzZWxmLnBlcnNpc3QgfHwgaGFzRGF0YSkgKSB7IHJldHVybjsgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0ID0gZXZlbnRUYXJnZXQgPT09IGVsZW1lbnQgfHwgZWxlbWVudFtjb250YWluc10oZXZlbnRUYXJnZXQpID8gZWxlbWVudCA6IG51bGw7XG4gICAgICAgICAgaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIHByZXZlbnRFbXB0eUFuY2hvci5jYWxsKGUsZXZlbnRUYXJnZXQpO1xuICAgICAgfSxcbiAgICAgIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldCA9IGVsZW1lbnQ7XG4gICAgICAgIHNob3coKTtcbiAgICAgICAgcHJldmVudEVtcHR5QW5jaG9yLmNhbGwoZSxlW3RhcmdldF0pO1xuICAgICAgfSxcbiAgICAgIHByZXZlbnRTY3JvbGwgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIGtleSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xuICAgICAgICBpZigga2V5ID09PSAzOCB8fCBrZXkgPT09IDQwICkgeyBlW3ByZXZlbnREZWZhdWx0XSgpOyB9XG4gICAgICB9LFxuICAgICAga2V5SGFuZGxlciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIga2V5ID0gZS53aGljaCB8fCBlLmtleUNvZGUsXG4gICAgICAgICAgYWN0aXZlSXRlbSA9IERPQy5hY3RpdmVFbGVtZW50LFxuICAgICAgICAgIGlkeCA9IG1lbnVJdGVtc1tpbmRleE9mXShhY3RpdmVJdGVtKSxcbiAgICAgICAgICBpc1NhbWVFbGVtZW50ID0gYWN0aXZlSXRlbSA9PT0gZWxlbWVudCxcbiAgICAgICAgICBpc0luc2lkZU1lbnUgPSBtZW51W2NvbnRhaW5zXShhY3RpdmVJdGVtKSxcbiAgICAgICAgICBpc01lbnVJdGVtID0gYWN0aXZlSXRlbVtwYXJlbnROb2RlXSA9PT0gbWVudSB8fCBhY3RpdmVJdGVtW3BhcmVudE5vZGVdW3BhcmVudE5vZGVdID09PSBtZW51OyAgICAgICAgICBcbiAgXG4gICAgICAgIGlmICggaXNNZW51SXRlbSApIHsgLy8gbmF2aWdhdGUgdXAgfCBkb3duXG4gICAgICAgICAgaWR4ID0gaXNTYW1lRWxlbWVudCA/IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGtleSA9PT0gMzggPyAoaWR4PjE/aWR4LTE6MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5ID09PSA0MCA/IChpZHg8bWVudUl0ZW1zW2xlbmd0aF0tMT9pZHgrMTppZHgpIDogaWR4O1xuICAgICAgICAgIG1lbnVJdGVtc1tpZHhdICYmIHNldEZvY3VzKG1lbnVJdGVtc1tpZHhdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIChtZW51SXRlbXNbbGVuZ3RoXSAmJiBpc01lbnVJdGVtIC8vIG1lbnUgaGFzIGl0ZW1zXG4gICAgICAgICAgICAgIHx8ICFtZW51SXRlbXNbbGVuZ3RoXSAmJiAoaXNJbnNpZGVNZW51IHx8IGlzU2FtZUVsZW1lbnQpICAvLyBtZW51IG1pZ2h0IGJlIGEgZm9ybVxuICAgICAgICAgICAgICB8fCAhaXNJbnNpZGVNZW51ICkgLy8gb3IgdGhlIGZvY3VzZWQgZWxlbWVudCBpcyBub3QgaW4gdGhlIG1lbnUgYXQgYWxsXG4gICAgICAgICAgICAgICYmIGVsZW1lbnRbb3Blbl0gJiYga2V5ID09PSAyNyAgLy8gbWVudSBtdXN0IGJlIG9wZW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgc2VsZi50b2dnbGUoKTtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgXG4gICAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAgIHNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChwYXJlbnQsIHNob3dFdmVudCwgY29tcG9uZW50LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgYWRkQ2xhc3MobWVudSxzaG93Q2xhc3MpO1xuICAgICAgICBhZGRDbGFzcyhwYXJlbnQsc2hvd0NsYXNzKTtcbiAgICAgICAgZWxlbWVudFtzZXRBdHRyaWJ1dGVdKGFyaWFFeHBhbmRlZCx0cnVlKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChwYXJlbnQsIHNob3duRXZlbnQsIGNvbXBvbmVudCwgcmVsYXRlZFRhcmdldCk7XG4gICAgICAgIGVsZW1lbnRbb3Blbl0gPSB0cnVlO1xuICAgICAgICBvZmYoZWxlbWVudCwgY2xpY2tFdmVudCwgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHNldEZvY3VzKCBtZW51W2dldEVsZW1lbnRzQnlUYWdOYW1lXSgnSU5QVVQnKVswXSB8fCBlbGVtZW50ICk7IC8vIGZvY3VzIHRoZSBmaXJzdCBpbnB1dCBpdGVtIHwgZWxlbWVudFxuICAgICAgICAgIHRvZ2dsZURpc21pc3MoKTtcbiAgICAgICAgfSwxKTtcbiAgICAgIH0sXG4gICAgICBoaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwocGFyZW50LCBoaWRlRXZlbnQsIGNvbXBvbmVudCwgcmVsYXRlZFRhcmdldCk7XG4gICAgICAgIHJlbW92ZUNsYXNzKG1lbnUsc2hvd0NsYXNzKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MocGFyZW50LHNob3dDbGFzcyk7XG4gICAgICAgIGVsZW1lbnRbc2V0QXR0cmlidXRlXShhcmlhRXhwYW5kZWQsZmFsc2UpO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKHBhcmVudCwgaGlkZGVuRXZlbnQsIGNvbXBvbmVudCwgcmVsYXRlZFRhcmdldCk7XG4gICAgICAgIGVsZW1lbnRbb3Blbl0gPSBmYWxzZTtcbiAgICAgICAgdG9nZ2xlRGlzbWlzcygpO1xuICAgICAgICBzZXRGb2N1cyhlbGVtZW50KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBvbihlbGVtZW50LCBjbGlja0V2ZW50LCBjbGlja0hhbmRsZXIpOyB9LDEpO1xuICAgICAgfTtcbiAgXG4gICAgLy8gc2V0IGluaXRpYWwgc3RhdGUgdG8gY2xvc2VkXG4gICAgZWxlbWVudFtvcGVuXSA9IGZhbHNlO1xuICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaGFzQ2xhc3MocGFyZW50LHNob3dDbGFzcykgJiYgZWxlbWVudFtvcGVuXSkgeyBoaWRlKCk7IH0gXG4gICAgICBlbHNlIHsgc2hvdygpOyB9XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdEcm9wZG93biBpbiBlbGVtZW50KSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgICAgICF0YWJpbmRleCBpbiBtZW51ICYmIG1lbnVbc2V0QXR0cmlidXRlXSh0YWJpbmRleCwgJzAnKTsgLy8gRml4IG9uYmx1ciBvbiBDaHJvbWUgfCBTYWZhcmlcbiAgICAgIG9uKGVsZW1lbnQsIGNsaWNrRXZlbnQsIGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICBcbiAgICBlbGVtZW50W3N0cmluZ0Ryb3Bkb3duXSA9IHNlbGY7XG4gIH07XG4gIFxuICAvLyBEUk9QRE9XTiBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggW3N0cmluZ0Ryb3Bkb3duLCBEcm9wZG93biwgJ1snK2RhdGFUb2dnbGUrJz1cImRyb3Bkb3duXCJdJ10gKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBNb2RhbFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIE1PREFMIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09XG4gIHZhciBNb2RhbCA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHsgLy8gZWxlbWVudCBjYW4gYmUgdGhlIG1vZGFsL3RyaWdnZXJpbmcgYnV0dG9uXG4gIFxuICAgIC8vIHRoZSBtb2RhbCAoYm90aCBKYXZhU2NyaXB0IC8gREFUQSBBUEkgaW5pdCkgLyB0cmlnZ2VyaW5nIGJ1dHRvbiBlbGVtZW50IChEQVRBIEFQSSlcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICBcbiAgICAgIC8vIHN0cmluZ3NcbiAgICAgIHZhciBjb21wb25lbnQgPSAnbW9kYWwnLFxuICAgICAgICBzdGF0aWNTdHJpbmcgPSAnc3RhdGljJyxcbiAgICAgICAgbW9kYWxUcmlnZ2VyID0gJ21vZGFsVHJpZ2dlcicsXG4gICAgICAgIHBhZGRpbmdSaWdodCA9ICdwYWRkaW5nUmlnaHQnLFxuICAgICAgICBtb2RhbEJhY2tkcm9wU3RyaW5nID0gJ21vZGFsLWJhY2tkcm9wJyxcbiAgICAgICAgaXNBbmltYXRpbmcgPSAnaXNBbmltYXRpbmcnLFxuICAgICAgICAvLyBkZXRlcm1pbmUgbW9kYWwsIHRyaWdnZXJpbmcgZWxlbWVudFxuICAgICAgICBidG5DaGVjayA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhVGFyZ2V0KXx8ZWxlbWVudFtnZXRBdHRyaWJ1dGVdKCdocmVmJyksXG4gICAgICAgIGNoZWNrTW9kYWwgPSBxdWVyeUVsZW1lbnQoIGJ0bkNoZWNrICksXG4gICAgICAgIG1vZGFsID0gaGFzQ2xhc3MoZWxlbWVudCxjb21wb25lbnQpID8gZWxlbWVudCA6IGNoZWNrTW9kYWw7XG4gIFxuICAgICAgaWYgKCBoYXNDbGFzcyhlbGVtZW50LCBjb21wb25lbnQpICkgeyBlbGVtZW50ID0gbnVsbDsgfSAvLyBtb2RhbCBpcyBub3cgaW5kZXBlbmRlbnQgb2YgaXQncyB0cmlnZ2VyaW5nIGVsZW1lbnRcbiAgXG4gICAgaWYgKCAhbW9kYWwgKSB7IHJldHVybjsgfSAvLyBpbnZhbGlkYXRlXG4gIFxuICAgIC8vIHNldCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFxuICAgIHRoaXNba2V5Ym9hcmRdID0gb3B0aW9uc1trZXlib2FyZF0gPT09IGZhbHNlIHx8IG1vZGFsW2dldEF0dHJpYnV0ZV0oZGF0YUtleWJvYXJkKSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcbiAgICB0aGlzW2JhY2tkcm9wXSA9IG9wdGlvbnNbYmFja2Ryb3BdID09PSBzdGF0aWNTdHJpbmcgfHwgbW9kYWxbZ2V0QXR0cmlidXRlXShkYXRhYmFja2Ryb3ApID09PSBzdGF0aWNTdHJpbmcgPyBzdGF0aWNTdHJpbmcgOiB0cnVlO1xuICAgIHRoaXNbYmFja2Ryb3BdID0gb3B0aW9uc1tiYWNrZHJvcF0gPT09IGZhbHNlIHx8IG1vZGFsW2dldEF0dHJpYnV0ZV0oZGF0YWJhY2tkcm9wKSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdGhpc1tiYWNrZHJvcF07XG4gICAgdGhpc1thbmltYXRpb25dID0gaGFzQ2xhc3MobW9kYWwsICdmYWRlJykgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpc1tjb250ZW50XSAgPSBvcHRpb25zW2NvbnRlbnRdOyAvLyBKYXZhU2NyaXB0IG9ubHlcbiAgXG4gICAgLy8gc2V0IGFuIGluaXRpYWwgc3RhdGUgb2YgdGhlIG1vZGFsXG4gICAgbW9kYWxbaXNBbmltYXRpbmddID0gZmFsc2U7XG4gICAgXG4gICAgLy8gYmluZCwgY29uc3RhbnRzLCBldmVudCB0YXJnZXRzIGFuZCBvdGhlciB2YXJzXG4gICAgdmFyIHNlbGYgPSB0aGlzLCByZWxhdGVkVGFyZ2V0ID0gbnVsbCxcbiAgICAgIGJvZHlJc092ZXJmbG93aW5nLCBzY3JvbGxCYXJXaWR0aCwgb3ZlcmxheSwgb3ZlcmxheURlbGF5LCBtb2RhbFRpbWVyLFxuICBcbiAgICAgIC8vIGFsc28gZmluZCBmaXhlZC10b3AgLyBmaXhlZC1ib3R0b20gaXRlbXNcbiAgICAgIGZpeGVkSXRlbXMgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEhUTUwsZml4ZWRUb3ApLmNvbmNhdChnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEhUTUwsZml4ZWRCb3R0b20pKSxcbiAgXG4gICAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAgIGdldFdpbmRvd1dpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBodG1sUmVjdCA9IEhUTUxbZ2V0Qm91bmRpbmdDbGllbnRSZWN0XSgpO1xuICAgICAgICByZXR1cm4gZ2xvYmFsT2JqZWN0W2lubmVyV2lkdGhdIHx8IChodG1sUmVjdFtyaWdodF0gLSBNYXRoLmFicyhodG1sUmVjdFtsZWZ0XSkpO1xuICAgICAgfSxcbiAgICAgIHNldFNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJvZHlTdHlsZSA9IGdsb2JhbE9iamVjdFtnZXRDb21wdXRlZFN0eWxlXShET0NbYm9keV0pLFxuICAgICAgICAgICAgYm9keVBhZCA9IHBhcnNlSW50KChib2R5U3R5bGVbcGFkZGluZ1JpZ2h0XSksIDEwKSwgaXRlbVBhZDtcbiAgICAgICAgaWYgKGJvZHlJc092ZXJmbG93aW5nKSB7XG4gICAgICAgICAgRE9DW2JvZHldW3N0eWxlXVtwYWRkaW5nUmlnaHRdID0gKGJvZHlQYWQgKyBzY3JvbGxCYXJXaWR0aCkgKyAncHgnO1xuICAgICAgICAgIG1vZGFsW3N0eWxlXVtwYWRkaW5nUmlnaHRdID0gc2Nyb2xsQmFyV2lkdGgrJ3B4JztcbiAgICAgICAgICBpZiAoZml4ZWRJdGVtc1tsZW5ndGhdKXtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZml4ZWRJdGVtc1tsZW5ndGhdOyBpKyspIHtcbiAgICAgICAgICAgICAgaXRlbVBhZCA9IGdsb2JhbE9iamVjdFtnZXRDb21wdXRlZFN0eWxlXShmaXhlZEl0ZW1zW2ldKVtwYWRkaW5nUmlnaHRdO1xuICAgICAgICAgICAgICBmaXhlZEl0ZW1zW2ldW3N0eWxlXVtwYWRkaW5nUmlnaHRdID0gKCBwYXJzZUludChpdGVtUGFkKSArIHNjcm9sbEJhcldpZHRoKSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVzZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIERPQ1tib2R5XVtzdHlsZV1bcGFkZGluZ1JpZ2h0XSA9ICcnO1xuICAgICAgICBtb2RhbFtzdHlsZV1bcGFkZGluZ1JpZ2h0XSA9ICcnO1xuICAgICAgICBpZiAoZml4ZWRJdGVtc1tsZW5ndGhdKXtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpeGVkSXRlbXNbbGVuZ3RoXTsgaSsrKSB7XG4gICAgICAgICAgICBmaXhlZEl0ZW1zW2ldW3N0eWxlXVtwYWRkaW5nUmlnaHRdID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWVhc3VyZVNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHsgLy8gdGh4IHdhbHNoXG4gICAgICAgIHZhciBzY3JvbGxEaXYgPSBET0NbY3JlYXRlRWxlbWVudF0oJ2RpdicpLCB3aWR0aFZhbHVlO1xuICAgICAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gY29tcG9uZW50Kyctc2Nyb2xsYmFyLW1lYXN1cmUnOyAvLyB0aGlzIGlzIGhlcmUgdG8gc3RheVxuICAgICAgICBET0NbYm9keV1bYXBwZW5kQ2hpbGRdKHNjcm9sbERpdik7XG4gICAgICAgIHdpZHRoVmFsdWUgPSBzY3JvbGxEaXZbb2Zmc2V0V2lkdGhdIC0gc2Nyb2xsRGl2W2NsaWVudFdpZHRoXTtcbiAgICAgICAgRE9DW2JvZHldLnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gICAgICAgIHJldHVybiB3aWR0aFZhbHVlO1xuICAgICAgfSxcbiAgICAgIGNoZWNrU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBib2R5SXNPdmVyZmxvd2luZyA9IERPQ1tib2R5XVtjbGllbnRXaWR0aF0gPCBnZXRXaW5kb3dXaWR0aCgpO1xuICAgICAgICBzY3JvbGxCYXJXaWR0aCA9IG1lYXN1cmVTY3JvbGxiYXIoKTtcbiAgICAgIH0sXG4gICAgICBjcmVhdGVPdmVybGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXdPdmVybGF5ID0gRE9DW2NyZWF0ZUVsZW1lbnRdKCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheSA9IHF1ZXJ5RWxlbWVudCgnLicrbW9kYWxCYWNrZHJvcFN0cmluZyk7XG4gIFxuICAgICAgICBpZiAoIG92ZXJsYXkgPT09IG51bGwgKSB7XG4gICAgICAgICAgbmV3T3ZlcmxheVtzZXRBdHRyaWJ1dGVdKCdjbGFzcycsIG1vZGFsQmFja2Ryb3BTdHJpbmcgKyAoc2VsZlthbmltYXRpb25dID8gJyBmYWRlJyA6ICcnKSk7XG4gICAgICAgICAgb3ZlcmxheSA9IG5ld092ZXJsYXk7XG4gICAgICAgICAgRE9DW2JvZHldW2FwcGVuZENoaWxkXShvdmVybGF5KTtcbiAgICAgICAgfVxuICAgICAgICBtb2RhbE92ZXJsYXkgPSAxO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZU92ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgb3ZlcmxheSA9IHF1ZXJ5RWxlbWVudCgnLicrbW9kYWxCYWNrZHJvcFN0cmluZyk7XG4gICAgICAgIGlmICggb3ZlcmxheSAmJiBvdmVybGF5ICE9PSBudWxsICYmIHR5cGVvZiBvdmVybGF5ID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICBtb2RhbE92ZXJsYXkgPSAwO1xuICAgICAgICAgIERPQ1tib2R5XS5yZW1vdmVDaGlsZChvdmVybGF5KTsgb3ZlcmxheSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyB0cmlnZ2Vyc1xuICAgICAgdHJpZ2dlclNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0Rm9jdXMobW9kYWwpO1xuICAgICAgICBtb2RhbFtpc0FuaW1hdGluZ10gPSBmYWxzZTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChtb2RhbCwgc2hvd25FdmVudCwgY29tcG9uZW50LCByZWxhdGVkVGFyZ2V0KTtcbiAgXG4gICAgICAgIG9uKGdsb2JhbE9iamVjdCwgcmVzaXplRXZlbnQsIHNlbGYudXBkYXRlLCBwYXNzaXZlSGFuZGxlcik7XG4gICAgICAgIG9uKG1vZGFsLCBjbGlja0V2ZW50LCBkaXNtaXNzSGFuZGxlcik7XG4gICAgICAgIG9uKERPQywga2V5ZG93bkV2ZW50LCBrZXlIYW5kbGVyKTsgICAgICBcbiAgICAgIH0sXG4gICAgICB0cmlnZ2VySGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbFtzdHlsZV0uZGlzcGxheSA9ICcnO1xuICAgICAgICBlbGVtZW50ICYmIChzZXRGb2N1cyhlbGVtZW50KSk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwobW9kYWwsIGhpZGRlbkV2ZW50LCBjb21wb25lbnQpO1xuICBcbiAgICAgICAgKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgaWYgKCFnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKERPQyxjb21wb25lbnQrJyAnK3Nob3dDbGFzcylbMF0pIHtcbiAgICAgICAgICAgIHJlc2V0U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhET0NbYm9keV0sY29tcG9uZW50Kyctb3BlbicpO1xuICAgICAgICAgICAgb3ZlcmxheSAmJiBoYXNDbGFzcyhvdmVybGF5LCdmYWRlJykgPyAocmVtb3ZlQ2xhc3Mob3ZlcmxheSxzaG93Q2xhc3MpLCBlbXVsYXRlVHJhbnNpdGlvbkVuZChvdmVybGF5LHJlbW92ZU92ZXJsYXkpKVxuICAgICAgICAgICAgOiByZW1vdmVPdmVybGF5KCk7XG4gIFxuICAgICAgICAgICAgb2ZmKGdsb2JhbE9iamVjdCwgcmVzaXplRXZlbnQsIHNlbGYudXBkYXRlLCBwYXNzaXZlSGFuZGxlcik7XG4gICAgICAgICAgICBvZmYobW9kYWwsIGNsaWNrRXZlbnQsIGRpc21pc3NIYW5kbGVyKTtcbiAgICAgICAgICAgIG9mZihET0MsIGtleWRvd25FdmVudCwga2V5SGFuZGxlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KCkpO1xuICAgICAgICBtb2RhbFtpc0FuaW1hdGluZ10gPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICAvLyBoYW5kbGVyc1xuICAgICAgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIG1vZGFsW2lzQW5pbWF0aW5nXSApIHJldHVybjtcbiAgXG4gICAgICAgIHZhciBjbGlja1RhcmdldCA9IGVbdGFyZ2V0XTtcbiAgICAgICAgY2xpY2tUYXJnZXQgPSBjbGlja1RhcmdldFtoYXNBdHRyaWJ1dGVdKGRhdGFUYXJnZXQpIHx8IGNsaWNrVGFyZ2V0W2hhc0F0dHJpYnV0ZV0oJ2hyZWYnKSA/IGNsaWNrVGFyZ2V0IDogY2xpY2tUYXJnZXRbcGFyZW50Tm9kZV07XG4gICAgICAgIGlmICggY2xpY2tUYXJnZXQgPT09IGVsZW1lbnQgJiYgIWhhc0NsYXNzKG1vZGFsLHNob3dDbGFzcykgKSB7XG4gICAgICAgICAgbW9kYWxbbW9kYWxUcmlnZ2VyXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldCA9IGVsZW1lbnQ7XG4gICAgICAgICAgc2VsZi5zaG93KCk7XG4gICAgICAgICAgZVtwcmV2ZW50RGVmYXVsdF0oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGtleUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICggbW9kYWxbaXNBbmltYXRpbmddICkgcmV0dXJuO1xuICBcbiAgICAgICAgaWYgKHNlbGZba2V5Ym9hcmRdICYmIGUud2hpY2ggPT0gMjcgJiYgaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSApIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc21pc3NIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIG1vZGFsW2lzQW5pbWF0aW5nXSApIHJldHVybjtcbiAgICAgICAgdmFyIGNsaWNrVGFyZ2V0ID0gZVt0YXJnZXRdO1xuICBcbiAgICAgICAgaWYgKCBoYXNDbGFzcyhtb2RhbCxzaG93Q2xhc3MpICYmICggY2xpY2tUYXJnZXRbcGFyZW50Tm9kZV1bZ2V0QXR0cmlidXRlXShkYXRhRGlzbWlzcykgPT09IGNvbXBvbmVudFxuICAgICAgICAgICAgfHwgY2xpY2tUYXJnZXRbZ2V0QXR0cmlidXRlXShkYXRhRGlzbWlzcykgPT09IGNvbXBvbmVudFxuICAgICAgICAgICAgfHwgY2xpY2tUYXJnZXQgPT09IG1vZGFsICYmIHNlbGZbYmFja2Ryb3BdICE9PSBzdGF0aWNTdHJpbmcgKSApIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKTsgcmVsYXRlZFRhcmdldCA9IG51bGw7XG4gICAgICAgICAgZVtwcmV2ZW50RGVmYXVsdF0oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICB0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCBoYXNDbGFzcyhtb2RhbCxzaG93Q2xhc3MpICkge3RoaXMuaGlkZSgpO30gZWxzZSB7dGhpcy5zaG93KCk7fVxuICAgIH07XG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIGhhc0NsYXNzKG1vZGFsLHNob3dDbGFzcykgfHwgbW9kYWxbaXNBbmltYXRpbmddICkge3JldHVybn1cbiAgXG4gICAgICBjbGVhclRpbWVvdXQobW9kYWxUaW1lcik7XG4gICAgICBtb2RhbFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBtb2RhbFtpc0FuaW1hdGluZ10gPSB0cnVlO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKG1vZGFsLCBzaG93RXZlbnQsIGNvbXBvbmVudCwgcmVsYXRlZFRhcmdldCk7XG4gIFxuICAgICAgICAvLyB3ZSBlbGVnYW50bHkgaGlkZSBhbnkgb3BlbmVkIG1vZGFsXG4gICAgICAgIHZhciBjdXJyZW50T3BlbiA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoRE9DLGNvbXBvbmVudCsnICcrc2hvd0NsYXNzKVswXTtcbiAgICAgICAgaWYgKGN1cnJlbnRPcGVuICYmIGN1cnJlbnRPcGVuICE9PSBtb2RhbCkge1xuICAgICAgICAgIG1vZGFsVHJpZ2dlciBpbiBjdXJyZW50T3BlbiAmJiBjdXJyZW50T3Blblttb2RhbFRyaWdnZXJdW3N0cmluZ01vZGFsXS5oaWRlKCk7XG4gICAgICAgICAgc3RyaW5nTW9kYWwgaW4gY3VycmVudE9wZW4gJiYgY3VycmVudE9wZW5bc3RyaW5nTW9kYWxdLmhpZGUoKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCBzZWxmW2JhY2tkcm9wXSApIHtcbiAgICAgICAgICAhbW9kYWxPdmVybGF5ICYmICFvdmVybGF5ICYmIGNyZWF0ZU92ZXJsYXkoKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCBvdmVybGF5ICYmICFoYXNDbGFzcyhvdmVybGF5LHNob3dDbGFzcykgKSB7XG4gICAgICAgICAgb3ZlcmxheVtvZmZzZXRXaWR0aF07IC8vIGZvcmNlIHJlZmxvdyB0byBlbmFibGUgdHJhc2l0aW9uXG4gICAgICAgICAgb3ZlcmxheURlbGF5ID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQob3ZlcmxheSk7XG4gICAgICAgICAgYWRkQ2xhc3Mob3ZlcmxheSwgc2hvd0NsYXNzKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kYWxbc3R5bGVdLmRpc3BsYXkgPSAnYmxvY2snO1xuICBcbiAgICAgICAgICBjaGVja1Njcm9sbGJhcigpO1xuICAgICAgICAgIHNldFNjcm9sbGJhcigpO1xuICBcbiAgICAgICAgICBhZGRDbGFzcyhET0NbYm9keV0sY29tcG9uZW50Kyctb3BlbicpO1xuICAgICAgICAgIGFkZENsYXNzKG1vZGFsLHNob3dDbGFzcyk7XG4gICAgICAgICAgbW9kYWxbc2V0QXR0cmlidXRlXShhcmlhSGlkZGVuLCBmYWxzZSk7XG4gIFxuICAgICAgICAgIGhhc0NsYXNzKG1vZGFsLCdmYWRlJykgPyBlbXVsYXRlVHJhbnNpdGlvbkVuZChtb2RhbCwgdHJpZ2dlclNob3cpIDogdHJpZ2dlclNob3coKTtcbiAgICAgICAgfSwgc3VwcG9ydFRyYW5zaXRpb25zICYmIG92ZXJsYXkgJiYgb3ZlcmxheURlbGF5ID8gb3ZlcmxheURlbGF5IDogMSk7XG4gICAgICB9LDEpO1xuICAgIH07XG4gICAgdGhpcy5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIG1vZGFsW2lzQW5pbWF0aW5nXSB8fCAhaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSApIHtyZXR1cm59XG4gIFxuICAgICAgY2xlYXJUaW1lb3V0KG1vZGFsVGltZXIpO1xuICAgICAgbW9kYWxUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgbW9kYWxbaXNBbmltYXRpbmddID0gdHJ1ZTsgICAgXG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwobW9kYWwsIGhpZGVFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgb3ZlcmxheSA9IHF1ZXJ5RWxlbWVudCgnLicrbW9kYWxCYWNrZHJvcFN0cmluZyk7XG4gICAgICAgIG92ZXJsYXlEZWxheSA9IG92ZXJsYXkgJiYgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQob3ZlcmxheSk7XG4gIFxuICAgICAgICByZW1vdmVDbGFzcyhtb2RhbCxzaG93Q2xhc3MpO1xuICAgICAgICBtb2RhbFtzZXRBdHRyaWJ1dGVdKGFyaWFIaWRkZW4sIHRydWUpO1xuICBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIGhhc0NsYXNzKG1vZGFsLCdmYWRlJykgPyBlbXVsYXRlVHJhbnNpdGlvbkVuZChtb2RhbCwgdHJpZ2dlckhpZGUpIDogdHJpZ2dlckhpZGUoKTtcbiAgICAgICAgfSwgc3VwcG9ydFRyYW5zaXRpb25zICYmIG92ZXJsYXkgJiYgb3ZlcmxheURlbGF5ID8gb3ZlcmxheURlbGF5IDogMik7XG4gICAgICB9LDIpXG4gICAgfTtcbiAgICB0aGlzLnNldENvbnRlbnQgPSBmdW5jdGlvbiggY29udGVudCApIHtcbiAgICAgIHF1ZXJ5RWxlbWVudCgnLicrY29tcG9uZW50KyctY29udGVudCcsbW9kYWwpW2lubmVySFRNTF0gPSBjb250ZW50O1xuICAgIH07XG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhtb2RhbCxzaG93Q2xhc3MpKSB7XG4gICAgICAgIGNoZWNrU2Nyb2xsYmFyKCk7XG4gICAgICAgIHNldFNjcm9sbGJhcigpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyBvdmVyIGFuZCBvdmVyXG4gICAgLy8gbW9kYWwgaXMgaW5kZXBlbmRlbnQgb2YgYSB0cmlnZ2VyaW5nIGVsZW1lbnRcbiAgICBpZiAoICEhZWxlbWVudCAmJiAhKHN0cmluZ01vZGFsIGluIGVsZW1lbnQpICkge1xuICAgICAgb24oZWxlbWVudCwgY2xpY2tFdmVudCwgY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKCAhIXNlbGZbY29udGVudF0gKSB7IHNlbGYuc2V0Q29udGVudCggc2VsZltjb250ZW50XSApOyB9XG4gICAgaWYgKGVsZW1lbnQpIHsgZWxlbWVudFtzdHJpbmdNb2RhbF0gPSBzZWxmOyBtb2RhbFttb2RhbFRyaWdnZXJdID0gZWxlbWVudDsgfVxuICAgIGVsc2UgeyBtb2RhbFtzdHJpbmdNb2RhbF0gPSBzZWxmOyB9XG4gIH07XG4gIFxuICAvLyBEQVRBIEFQSVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdNb2RhbCwgTW9kYWwsICdbJytkYXRhVG9nZ2xlKyc9XCJtb2RhbFwiXScgXSApO1xuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgUG9wb3ZlclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIFBPUE9WRVIgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT1cbiAgdmFyIFBvcG92ZXIgPSBmdW5jdGlvbiggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIHNldCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFxuICAgIC8vIERBVEEgQVBJXG4gICAgdmFyIHRyaWdnZXJEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUcmlnZ2VyKSwgLy8gY2xpY2sgLyBob3ZlciAvIGZvY3VzXG4gICAgICAgIGFuaW1hdGlvbkRhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUFuaW1hdGlvbiksIC8vIHRydWUgLyBmYWxzZVxuICAgICAgICBwbGFjZW1lbnREYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFQbGFjZW1lbnQpLFxuICAgICAgICBkaXNtaXNzaWJsZURhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YURpc21pc3NpYmxlKSxcbiAgICAgICAgZGVsYXlEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFEZWxheSksXG4gICAgICAgIGNvbnRhaW5lckRhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUNvbnRhaW5lciksXG4gIFxuICAgICAgICAvLyBpbnRlcm5hbCBzdHJpbmdzXG4gICAgICAgIGNvbXBvbmVudCA9ICdwb3BvdmVyJyxcbiAgICAgICAgdGVtcGxhdGUgPSAndGVtcGxhdGUnLFxuICAgICAgICB0cmlnZ2VyID0gJ3RyaWdnZXInLFxuICAgICAgICBjbGFzc1N0cmluZyA9ICdjbGFzcycsXG4gICAgICAgIGRpdiA9ICdkaXYnLFxuICAgICAgICBmYWRlID0gJ2ZhZGUnLFxuICAgICAgICBkYXRhQ29udGVudCA9ICdkYXRhLWNvbnRlbnQnLFxuICAgICAgICBkaXNtaXNzaWJsZSA9ICdkaXNtaXNzaWJsZScsXG4gICAgICAgIGNsb3NlQnRuID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj7DlzwvYnV0dG9uPicsXG4gIFxuICAgICAgICAvLyBjaGVjayBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudCA9IHF1ZXJ5RWxlbWVudChvcHRpb25zW2NvbnRhaW5lcl0pLFxuICAgICAgICBjb250YWluZXJEYXRhRWxlbWVudCA9IHF1ZXJ5RWxlbWVudChjb250YWluZXJEYXRhKSwgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBtYXliZSB0aGUgZWxlbWVudCBpcyBpbnNpZGUgYSBtb2RhbFxuICAgICAgICBtb2RhbCA9IGdldENsb3Nlc3QoZWxlbWVudCwnLm1vZGFsJyksXG4gICAgICAgIFxuICAgICAgICAvLyBtYXliZSB0aGUgZWxlbWVudCBpcyBpbnNpZGUgYSBmaXhlZCBuYXZiYXJcbiAgICAgICAgbmF2YmFyRml4ZWRUb3AgPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy4nK2ZpeGVkVG9wKSxcbiAgICAgICAgbmF2YmFyRml4ZWRCb3R0b20gPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy4nK2ZpeGVkQm90dG9tKTtcbiAgXG4gICAgLy8gc2V0IGluc3RhbmNlIG9wdGlvbnNcbiAgICB0aGlzW3RlbXBsYXRlXSA9IG9wdGlvbnNbdGVtcGxhdGVdID8gb3B0aW9uc1t0ZW1wbGF0ZV0gOiBudWxsOyAvLyBKYXZhU2NyaXB0IG9ubHlcbiAgICB0aGlzW3RyaWdnZXJdID0gb3B0aW9uc1t0cmlnZ2VyXSA/IG9wdGlvbnNbdHJpZ2dlcl0gOiB0cmlnZ2VyRGF0YSB8fCBob3ZlckV2ZW50O1xuICAgIHRoaXNbYW5pbWF0aW9uXSA9IG9wdGlvbnNbYW5pbWF0aW9uXSAmJiBvcHRpb25zW2FuaW1hdGlvbl0gIT09IGZhZGUgPyBvcHRpb25zW2FuaW1hdGlvbl0gOiBhbmltYXRpb25EYXRhIHx8IGZhZGU7XG4gICAgdGhpc1twbGFjZW1lbnRdID0gb3B0aW9uc1twbGFjZW1lbnRdID8gb3B0aW9uc1twbGFjZW1lbnRdIDogcGxhY2VtZW50RGF0YSB8fCB0b3A7XG4gICAgdGhpc1tkZWxheV0gPSBwYXJzZUludChvcHRpb25zW2RlbGF5XSB8fCBkZWxheURhdGEpIHx8IDIwMDtcbiAgICB0aGlzW2Rpc21pc3NpYmxlXSA9IG9wdGlvbnNbZGlzbWlzc2libGVdIHx8IGRpc21pc3NpYmxlRGF0YSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXNbY29udGFpbmVyXSA9IGNvbnRhaW5lckVsZW1lbnQgPyBjb250YWluZXJFbGVtZW50IFxuICAgICAgICAgICAgICAgICAgICA6IGNvbnRhaW5lckRhdGFFbGVtZW50ID8gY29udGFpbmVyRGF0YUVsZW1lbnQgXG4gICAgICAgICAgICAgICAgICAgIDogbmF2YmFyRml4ZWRUb3AgPyBuYXZiYXJGaXhlZFRvcFxuICAgICAgICAgICAgICAgICAgICA6IG5hdmJhckZpeGVkQm90dG9tID8gbmF2YmFyRml4ZWRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgOiBtb2RhbCA/IG1vZGFsIDogRE9DW2JvZHldO1xuICAgIFxuICAgIC8vIGJpbmQsIGNvbnRlbnRcbiAgICB2YXIgc2VsZiA9IHRoaXMsIFxuICAgICAgICB0aXRsZVN0cmluZyA9IG9wdGlvbnMudGl0bGUgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUaXRsZSkgfHwgbnVsbCxcbiAgICAgICAgY29udGVudFN0cmluZyA9IG9wdGlvbnMuY29udGVudCB8fCBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUNvbnRlbnQpIHx8IG51bGw7XG4gIFxuICAgIGlmICggIWNvbnRlbnRTdHJpbmcgJiYgIXRoaXNbdGVtcGxhdGVdICkgcmV0dXJuOyAvLyBpbnZhbGlkYXRlXG4gIFxuICAgIC8vIGNvbnN0YW50cywgdmFyc1xuICAgIHZhciBwb3BvdmVyID0gbnVsbCwgdGltZXIgPSAwLCBwbGFjZW1lbnRTZXR0aW5nID0gdGhpc1twbGFjZW1lbnRdLFxuICAgICAgXG4gICAgICAvLyBoYW5kbGVyc1xuICAgICAgZGlzbWlzc2libGVIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAocG9wb3ZlciAhPT0gbnVsbCAmJiBlW3RhcmdldF0gPT09IHF1ZXJ5RWxlbWVudCgnLmNsb3NlJyxwb3BvdmVyKSkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICBcbiAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgICAgcmVtb3ZlUG9wb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmW2NvbnRhaW5lcl0ucmVtb3ZlQ2hpbGQocG9wb3Zlcik7XG4gICAgICAgIHRpbWVyID0gbnVsbDsgcG9wb3ZlciA9IG51bGw7IFxuICAgICAgfSxcbiAgICAgIGNyZWF0ZVBvcG92ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGl0bGVTdHJpbmcgPSBvcHRpb25zLnRpdGxlIHx8IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhVGl0bGUpO1xuICAgICAgICBjb250ZW50U3RyaW5nID0gb3B0aW9ucy5jb250ZW50IHx8IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQ29udGVudCk7XG4gICAgICAgIC8vIGZpeGluZyBodHRwczovL2dpdGh1Yi5jb20vdGhlZG5wL2Jvb3RzdHJhcC5uYXRpdmUvaXNzdWVzLzIzM1xuICAgICAgICBjb250ZW50U3RyaW5nID0gISFjb250ZW50U3RyaW5nID8gY29udGVudFN0cmluZy50cmltKCkgOiBudWxsO1xuICBcbiAgICAgICAgcG9wb3ZlciA9IERPQ1tjcmVhdGVFbGVtZW50XShkaXYpO1xuICBcbiAgICAgICAgLy8gcG9wb3ZlciBhcnJvd1xuICAgICAgICB2YXIgcG9wb3ZlckFycm93ID0gRE9DW2NyZWF0ZUVsZW1lbnRdKGRpdik7XG4gICAgICAgIHBvcG92ZXJBcnJvd1tzZXRBdHRyaWJ1dGVdKGNsYXNzU3RyaW5nLCdhcnJvdycpO1xuICAgICAgICBwb3BvdmVyW2FwcGVuZENoaWxkXShwb3BvdmVyQXJyb3cpO1xuICBcbiAgICAgICAgaWYgKCBjb250ZW50U3RyaW5nICE9PSBudWxsICYmIHNlbGZbdGVtcGxhdGVdID09PSBudWxsICkgeyAvL2NyZWF0ZSB0aGUgcG9wb3ZlciBmcm9tIGRhdGEgYXR0cmlidXRlc1xuICBcbiAgICAgICAgICBwb3BvdmVyW3NldEF0dHJpYnV0ZV0oJ3JvbGUnLCd0b29sdGlwJyk7ICAgICBcbiAgXG4gICAgICAgICAgaWYgKHRpdGxlU3RyaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgcG9wb3ZlclRpdGxlID0gRE9DW2NyZWF0ZUVsZW1lbnRdKCdoMycpO1xuICAgICAgICAgICAgcG9wb3ZlclRpdGxlW3NldEF0dHJpYnV0ZV0oY2xhc3NTdHJpbmcsY29tcG9uZW50KyctaGVhZGVyJyk7XG4gIFxuICAgICAgICAgICAgcG9wb3ZlclRpdGxlW2lubmVySFRNTF0gPSBzZWxmW2Rpc21pc3NpYmxlXSA/IHRpdGxlU3RyaW5nICsgY2xvc2VCdG4gOiB0aXRsZVN0cmluZztcbiAgICAgICAgICAgIHBvcG92ZXJbYXBwZW5kQ2hpbGRdKHBvcG92ZXJUaXRsZSk7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAvL3NldCBwb3BvdmVyIGNvbnRlbnRcbiAgICAgICAgICB2YXIgcG9wb3ZlckNvbnRlbnQgPSBET0NbY3JlYXRlRWxlbWVudF0oZGl2KTtcbiAgICAgICAgICBwb3BvdmVyQ29udGVudFtzZXRBdHRyaWJ1dGVdKGNsYXNzU3RyaW5nLGNvbXBvbmVudCsnLWJvZHknKTtcbiAgICAgICAgICBwb3BvdmVyQ29udGVudFtpbm5lckhUTUxdID0gc2VsZltkaXNtaXNzaWJsZV0gJiYgdGl0bGVTdHJpbmcgPT09IG51bGwgPyBjb250ZW50U3RyaW5nICsgY2xvc2VCdG4gOiBjb250ZW50U3RyaW5nO1xuICAgICAgICAgIHBvcG92ZXJbYXBwZW5kQ2hpbGRdKHBvcG92ZXJDb250ZW50KTtcbiAgXG4gICAgICAgIH0gZWxzZSB7ICAvLyBvciBjcmVhdGUgdGhlIHBvcG92ZXIgZnJvbSB0ZW1wbGF0ZVxuICAgICAgICAgIHZhciBwb3BvdmVyVGVtcGxhdGUgPSBET0NbY3JlYXRlRWxlbWVudF0oZGl2KTtcbiAgICAgICAgICBzZWxmW3RlbXBsYXRlXSA9IHNlbGZbdGVtcGxhdGVdLnRyaW0oKTtcbiAgICAgICAgICBwb3BvdmVyVGVtcGxhdGVbaW5uZXJIVE1MXSA9IHNlbGZbdGVtcGxhdGVdO1xuICAgICAgICAgIHBvcG92ZXJbaW5uZXJIVE1MXSA9IHBvcG92ZXJUZW1wbGF0ZS5maXJzdENoaWxkW2lubmVySFRNTF07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vYXBwZW5kIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgc2VsZltjb250YWluZXJdW2FwcGVuZENoaWxkXShwb3BvdmVyKTtcbiAgICAgICAgcG9wb3ZlcltzdHlsZV0uZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHBvcG92ZXJbc2V0QXR0cmlidXRlXShjbGFzc1N0cmluZywgY29tcG9uZW50KyAnIGJzLScgKyBjb21wb25lbnQrJy0nK3BsYWNlbWVudFNldHRpbmcgKyAnICcgKyBzZWxmW2FuaW1hdGlvbl0pO1xuICAgICAgfSxcbiAgICAgIHNob3dQb3BvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAhaGFzQ2xhc3MocG9wb3ZlcixzaG93Q2xhc3MpICYmICggYWRkQ2xhc3MocG9wb3ZlcixzaG93Q2xhc3MpICk7XG4gICAgICB9LFxuICAgICAgdXBkYXRlUG9wb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdHlsZVRpcChlbGVtZW50LCBwb3BvdmVyLCBwbGFjZW1lbnRTZXR0aW5nLCBzZWxmW2NvbnRhaW5lcl0pO1xuICAgICAgfSxcbiAgXG4gICAgICAvLyBldmVudCB0b2dnbGVcbiAgICAgIGRpc21pc3NIYW5kbGVyVG9nZ2xlID0gZnVuY3Rpb24odHlwZSl7XG4gICAgICAgIGlmIChjbGlja0V2ZW50ID09IHNlbGZbdHJpZ2dlcl0gfHwgJ2ZvY3VzJyA9PSBzZWxmW3RyaWdnZXJdKSB7XG4gICAgICAgICAgIXNlbGZbZGlzbWlzc2libGVdICYmIHR5cGUoIGVsZW1lbnQsICdibHVyJywgc2VsZi5oaWRlICk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZltkaXNtaXNzaWJsZV0gJiYgdHlwZSggRE9DLCBjbGlja0V2ZW50LCBkaXNtaXNzaWJsZUhhbmRsZXIgKTsgICAgIFxuICAgICAgICB0eXBlKCBnbG9iYWxPYmplY3QsIHJlc2l6ZUV2ZW50LCBzZWxmLmhpZGUsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgICB9LFxuICBcbiAgICAgIC8vIHRyaWdnZXJzXG4gICAgICBzaG93VHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBkaXNtaXNzSGFuZGxlclRvZ2dsZShvbik7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2hvd25FdmVudCwgY29tcG9uZW50KTtcbiAgICAgIH0sXG4gICAgICBoaWRlVHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBkaXNtaXNzSGFuZGxlclRvZ2dsZShvZmYpO1xuICAgICAgICByZW1vdmVQb3BvdmVyKCk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgaGlkZGVuRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICB9O1xuICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kcyAvIGhhbmRsZXJzXG4gICAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChwb3BvdmVyID09PSBudWxsKSB7IHNlbGYuc2hvdygpOyB9IFxuICAgICAgZWxzZSB7IHNlbGYuaGlkZSgpOyB9XG4gICAgfTtcbiAgICB0aGlzLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocG9wb3ZlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHBsYWNlbWVudFNldHRpbmcgPSBzZWxmW3BsYWNlbWVudF07IC8vIHdlIHJlc2V0IHBsYWNlbWVudCBpbiBhbGwgY2FzZXNcbiAgICAgICAgICBjcmVhdGVQb3BvdmVyKCk7XG4gICAgICAgICAgdXBkYXRlUG9wb3ZlcigpO1xuICAgICAgICAgIHNob3dQb3BvdmVyKCk7XG4gICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBzaG93RXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgICAgISFzZWxmW2FuaW1hdGlvbl0gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZChwb3BvdmVyLCBzaG93VHJpZ2dlcikgOiBzaG93VHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgICB9LCAyMCApO1xuICAgIH07XG4gICAgdGhpcy5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHBvcG92ZXIgJiYgcG9wb3ZlciAhPT0gbnVsbCAmJiBoYXNDbGFzcyhwb3BvdmVyLHNob3dDbGFzcykpIHtcbiAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIGhpZGVFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgICByZW1vdmVDbGFzcyhwb3BvdmVyLHNob3dDbGFzcyk7XG4gICAgICAgICAgISFzZWxmW2FuaW1hdGlvbl0gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZChwb3BvdmVyLCBoaWRlVHJpZ2dlcikgOiBoaWRlVHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgICB9LCBzZWxmW2RlbGF5XSApO1xuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nUG9wb3ZlciBpbiBlbGVtZW50KSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgICAgIGlmIChzZWxmW3RyaWdnZXJdID09PSBob3ZlckV2ZW50KSB7XG4gICAgICAgIG9uKCBlbGVtZW50LCBtb3VzZUhvdmVyWzBdLCBzZWxmLnNob3cgKTtcbiAgICAgICAgaWYgKCFzZWxmW2Rpc21pc3NpYmxlXSkgeyBvbiggZWxlbWVudCwgbW91c2VIb3ZlclsxXSwgc2VsZi5oaWRlICk7IH1cbiAgICAgIH0gZWxzZSBpZiAoY2xpY2tFdmVudCA9PSBzZWxmW3RyaWdnZXJdIHx8ICdmb2N1cycgPT0gc2VsZlt0cmlnZ2VyXSkge1xuICAgICAgICBvbiggZWxlbWVudCwgc2VsZlt0cmlnZ2VyXSwgc2VsZi50b2dnbGUgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudFtzdHJpbmdQb3BvdmVyXSA9IHNlbGY7XG4gIH07XG4gIFxuICAvLyBQT1BPVkVSIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nUG9wb3ZlciwgUG9wb3ZlciwgJ1snK2RhdGFUb2dnbGUrJz1cInBvcG92ZXJcIl0nIF0gKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBTY3JvbGxTcHlcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gU0NST0xMU1BZIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIFNjcm9sbFNweSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudCwgdGhlIGVsZW1lbnQgd2Ugc3B5IG9uXG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTsgXG4gIFxuICAgIC8vIERBVEEgQVBJXG4gICAgdmFyIHRhcmdldERhdGEgPSBxdWVyeUVsZW1lbnQoZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUYXJnZXQpKSxcbiAgICAgICAgb2Zmc2V0RGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXSgnZGF0YS1vZmZzZXQnKTtcbiAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXG4gICAgLy8gaW52YWxpZGF0ZVxuICAgIGlmICggIW9wdGlvbnNbdGFyZ2V0XSAmJiAhdGFyZ2V0RGF0YSApIHsgcmV0dXJuOyB9IFxuICBcbiAgICAvLyBldmVudCB0YXJnZXRzLCBjb25zdGFudHNcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHNweVRhcmdldCA9IG9wdGlvbnNbdGFyZ2V0XSAmJiBxdWVyeUVsZW1lbnQob3B0aW9uc1t0YXJnZXRdKSB8fCB0YXJnZXREYXRhLFxuICAgICAgICBsaW5rcyA9IHNweVRhcmdldCAmJiBzcHlUYXJnZXRbZ2V0RWxlbWVudHNCeVRhZ05hbWVdKCdBJyksXG4gICAgICAgIG9mZnNldCA9IHBhcnNlSW50KG9wdGlvbnNbJ29mZnNldCddIHx8IG9mZnNldERhdGEpIHx8IDEwLCAgICAgIFxuICAgICAgICBpdGVtcyA9IFtdLCB0YXJnZXRJdGVtcyA9IFtdLCBzY3JvbGxPZmZzZXQsXG4gICAgICAgIHNjcm9sbFRhcmdldCA9IGVsZW1lbnRbb2Zmc2V0SGVpZ2h0XSA8IGVsZW1lbnRbc2Nyb2xsSGVpZ2h0XSA/IGVsZW1lbnQgOiBnbG9iYWxPYmplY3QsIC8vIGRldGVybWluZSB3aGljaCBpcyB0aGUgcmVhbCBzY3JvbGxUYXJnZXRcbiAgICAgICAgaXNXaW5kb3cgPSBzY3JvbGxUYXJnZXQgPT09IGdsb2JhbE9iamVjdDsgIFxuICBcbiAgICAvLyBwb3B1bGF0ZSBpdGVtcyBhbmQgdGFyZ2V0c1xuICAgIGZvciAodmFyIGk9MCwgaWw9bGlua3NbbGVuZ3RoXTsgaTxpbDsgaSsrKSB7XG4gICAgICB2YXIgaHJlZiA9IGxpbmtzW2ldW2dldEF0dHJpYnV0ZV0oJ2hyZWYnKSwgXG4gICAgICAgICAgdGFyZ2V0SXRlbSA9IGhyZWYgJiYgaHJlZi5jaGFyQXQoMCkgPT09ICcjJyAmJiBocmVmLnNsaWNlKC0xKSAhPT0gJyMnICYmIHF1ZXJ5RWxlbWVudChocmVmKTtcbiAgICAgIGlmICggISF0YXJnZXRJdGVtICkge1xuICAgICAgICBpdGVtc1twdXNoXShsaW5rc1tpXSk7XG4gICAgICAgIHRhcmdldEl0ZW1zW3B1c2hdKHRhcmdldEl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgdmFyIHVwZGF0ZUl0ZW0gPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2luZGV4XSxcbiAgICAgICAgICB0YXJnZXRJdGVtID0gdGFyZ2V0SXRlbXNbaW5kZXhdLCAvLyB0aGUgbWVudSBpdGVtIHRhcmdldHMgdGhpcyBlbGVtZW50XG4gICAgICAgICAgZHJvcGRvd24gPSBpdGVtW3BhcmVudE5vZGVdW3BhcmVudE5vZGVdLFxuICAgICAgICAgIGRyb3Bkb3duTGluayA9IGhhc0NsYXNzKGRyb3Bkb3duLCdkcm9wZG93bicpICYmIGRyb3Bkb3duW2dldEVsZW1lbnRzQnlUYWdOYW1lXSgnQScpWzBdLFxuICAgICAgICAgIHRhcmdldFJlY3QgPSBpc1dpbmRvdyAmJiB0YXJnZXRJdGVtW2dldEJvdW5kaW5nQ2xpZW50UmVjdF0oKSxcbiAgXG4gICAgICAgICAgaXNBY3RpdmUgPSBoYXNDbGFzcyhpdGVtLGFjdGl2ZSkgfHwgZmFsc2UsXG4gIFxuICAgICAgICAgIHRvcEVkZ2UgPSAoaXNXaW5kb3cgPyB0YXJnZXRSZWN0W3RvcF0gKyBzY3JvbGxPZmZzZXQgOiB0YXJnZXRJdGVtW29mZnNldFRvcF0pIC0gb2Zmc2V0LFxuICAgICAgICAgIGJvdHRvbUVkZ2UgPSBpc1dpbmRvdyA/IHRhcmdldFJlY3RbYm90dG9tXSArIHNjcm9sbE9mZnNldCAtIG9mZnNldCA6IHRhcmdldEl0ZW1zW2luZGV4KzFdID8gdGFyZ2V0SXRlbXNbaW5kZXgrMV1bb2Zmc2V0VG9wXSAtIG9mZnNldCA6IGVsZW1lbnRbc2Nyb2xsSGVpZ2h0XSxcbiAgXG4gICAgICAgICAgaW5zaWRlID0gc2Nyb2xsT2Zmc2V0ID49IHRvcEVkZ2UgJiYgYm90dG9tRWRnZSA+IHNjcm9sbE9mZnNldDtcbiAgXG4gICAgICAgIGlmICggIWlzQWN0aXZlICYmIGluc2lkZSApIHtcbiAgICAgICAgICBpZiAoICFoYXNDbGFzcyhpdGVtLGFjdGl2ZSkgKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhpdGVtLGFjdGl2ZSk7XG4gICAgICAgICAgICBpZiAoZHJvcGRvd25MaW5rICYmICFoYXNDbGFzcyhkcm9wZG93bkxpbmssYWN0aXZlKSApIHtcbiAgICAgICAgICAgICAgYWRkQ2xhc3MoZHJvcGRvd25MaW5rLGFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsICdhY3RpdmF0ZScsICdzY3JvbGxzcHknLCBpdGVtc1tpbmRleF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICggIWluc2lkZSApIHtcbiAgICAgICAgICBpZiAoIGhhc0NsYXNzKGl0ZW0sYWN0aXZlKSApIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sYWN0aXZlKTtcbiAgICAgICAgICAgIGlmIChkcm9wZG93bkxpbmsgJiYgaGFzQ2xhc3MoZHJvcGRvd25MaW5rLGFjdGl2ZSkgJiYgIWdldEVsZW1lbnRzQnlDbGFzc05hbWUoaXRlbVtwYXJlbnROb2RlXSxhY3RpdmUpLmxlbmd0aCAgKSB7XG4gICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGRyb3Bkb3duTGluayxhY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICggIWluc2lkZSAmJiAhaXNBY3RpdmUgfHwgaXNBY3RpdmUgJiYgaW5zaWRlICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZUl0ZW1zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gaXNXaW5kb3cgPyBnZXRTY3JvbGwoKS55IDogZWxlbWVudFtzY3JvbGxUb3BdO1xuICAgICAgICBmb3IgKHZhciBpbmRleD0wLCBpdGw9aXRlbXNbbGVuZ3RoXTsgaW5kZXg8aXRsOyBpbmRleCsrKSB7XG4gICAgICAgICAgdXBkYXRlSXRlbShpbmRleClcbiAgICAgICAgfVxuICAgICAgfTtcbiAgXG4gICAgLy8gcHVibGljIG1ldGhvZFxuICAgIHRoaXMucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHVwZGF0ZUl0ZW1zKCk7XG4gICAgfVxuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKHN0cmluZ1Njcm9sbFNweSBpbiBlbGVtZW50KSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgICAgIG9uKCBzY3JvbGxUYXJnZXQsIHNjcm9sbEV2ZW50LCBzZWxmLnJlZnJlc2gsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgICBvbiggZ2xvYmFsT2JqZWN0LCByZXNpemVFdmVudCwgc2VsZi5yZWZyZXNoLCBwYXNzaXZlSGFuZGxlciApO1xuICAgIH1cbiAgICBzZWxmLnJlZnJlc2goKTtcbiAgICBlbGVtZW50W3N0cmluZ1Njcm9sbFNweV0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gU0NST0xMU1BZIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdTY3JvbGxTcHksIFNjcm9sbFNweSwgJ1snK2RhdGFTcHkrJz1cInNjcm9sbFwiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IFRhYlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBUQUIgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PVxuICB2YXIgVGFiID0gZnVuY3Rpb24oIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnRcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICBcbiAgICAvLyBEQVRBIEFQSVxuICAgIHZhciBoZWlnaHREYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFIZWlnaHQpLFxuICAgICAgXG4gICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgY29tcG9uZW50ID0gJ3RhYicsIGhlaWdodCA9ICdoZWlnaHQnLCBmbG9hdCA9ICdmbG9hdCcsIGlzQW5pbWF0aW5nID0gJ2lzQW5pbWF0aW5nJztcbiAgICAgICAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzW2hlaWdodF0gPSBzdXBwb3J0VHJhbnNpdGlvbnMgPyAob3B0aW9uc1toZWlnaHRdIHx8IGhlaWdodERhdGEgPT09ICd0cnVlJykgOiBmYWxzZTtcbiAgXG4gICAgLy8gYmluZCwgZXZlbnQgdGFyZ2V0c1xuICAgIHZhciBzZWxmID0gdGhpcywgbmV4dCxcbiAgICAgIHRhYnMgPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy5uYXYnKSxcbiAgICAgIHRhYnNDb250ZW50Q29udGFpbmVyID0gZmFsc2UsXG4gICAgICBkcm9wZG93biA9IHRhYnMgJiYgcXVlcnlFbGVtZW50KCcuZHJvcGRvd24tdG9nZ2xlJyx0YWJzKSxcbiAgICAgIGFjdGl2ZVRhYiwgYWN0aXZlQ29udGVudCwgbmV4dENvbnRlbnQsIGNvbnRhaW5lckhlaWdodCwgZXF1YWxDb250ZW50cywgbmV4dEhlaWdodCxcbiAgICAgIFxuICAgICAgLy8gdHJpZ2dlclxuICAgICAgdHJpZ2dlckVuZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRhYnNDb250ZW50Q29udGFpbmVyW3N0eWxlXVtoZWlnaHRdID0gJyc7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRhYnNDb250ZW50Q29udGFpbmVyLGNvbGxhcHNpbmcpO1xuICAgICAgICB0YWJzW2lzQW5pbWF0aW5nXSA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHRyaWdnZXJTaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0YWJzQ29udGVudENvbnRhaW5lcikgeyAvLyBoZWlnaHQgYW5pbWF0aW9uXG4gICAgICAgICAgaWYgKCBlcXVhbENvbnRlbnRzICkge1xuICAgICAgICAgICAgdHJpZ2dlckVuZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IC8vIGVuYWJsZXMgaGVpZ2h0IGFuaW1hdGlvblxuICAgICAgICAgICAgICB0YWJzQ29udGVudENvbnRhaW5lcltzdHlsZV1baGVpZ2h0XSA9IG5leHRIZWlnaHQgKyAncHgnOyAvLyBoZWlnaHQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgIHRhYnNDb250ZW50Q29udGFpbmVyW29mZnNldFdpZHRoXTtcbiAgICAgICAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGFic0NvbnRlbnRDb250YWluZXIsIHRyaWdnZXJFbmQpO1xuICAgICAgICAgICAgfSw1MCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhYnNbaXNBbmltYXRpbmddID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwobmV4dCwgc2hvd25FdmVudCwgY29tcG9uZW50LCBhY3RpdmVUYWIpO1xuICAgICAgfSxcbiAgICAgIHRyaWdnZXJIaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0YWJzQ29udGVudENvbnRhaW5lcikge1xuICAgICAgICAgIGFjdGl2ZUNvbnRlbnRbc3R5bGVdW2Zsb2F0XSA9IGxlZnQ7XG4gICAgICAgICAgbmV4dENvbnRlbnRbc3R5bGVdW2Zsb2F0XSA9IGxlZnQ7ICAgICAgICBcbiAgICAgICAgICBjb250YWluZXJIZWlnaHQgPSBhY3RpdmVDb250ZW50W3Njcm9sbEhlaWdodF07XG4gICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgYWRkQ2xhc3MobmV4dENvbnRlbnQsYWN0aXZlKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChuZXh0LCBzaG93RXZlbnQsIGNvbXBvbmVudCwgYWN0aXZlVGFiKTtcbiAgXG4gICAgICAgIHJlbW92ZUNsYXNzKGFjdGl2ZUNvbnRlbnQsYWN0aXZlKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChhY3RpdmVUYWIsIGhpZGRlbkV2ZW50LCBjb21wb25lbnQsIG5leHQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhYnNDb250ZW50Q29udGFpbmVyKSB7XG4gICAgICAgICAgbmV4dEhlaWdodCA9IG5leHRDb250ZW50W3Njcm9sbEhlaWdodF07XG4gICAgICAgICAgZXF1YWxDb250ZW50cyA9IG5leHRIZWlnaHQgPT09IGNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgICBhZGRDbGFzcyh0YWJzQ29udGVudENvbnRhaW5lcixjb2xsYXBzaW5nKTtcbiAgICAgICAgICB0YWJzQ29udGVudENvbnRhaW5lcltzdHlsZV1baGVpZ2h0XSA9IGNvbnRhaW5lckhlaWdodCArICdweCc7IC8vIGhlaWdodCBhbmltYXRpb25cbiAgICAgICAgICB0YWJzQ29udGVudENvbnRhaW5lcltvZmZzZXRIZWlnaHRdO1xuICAgICAgICAgIGFjdGl2ZUNvbnRlbnRbc3R5bGVdW2Zsb2F0XSA9ICcnO1xuICAgICAgICAgIG5leHRDb250ZW50W3N0eWxlXVtmbG9hdF0gPSAnJztcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCBoYXNDbGFzcyhuZXh0Q29udGVudCwgJ2ZhZGUnKSApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhZGRDbGFzcyhuZXh0Q29udGVudCxzaG93Q2xhc3MpO1xuICAgICAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQobmV4dENvbnRlbnQsdHJpZ2dlclNob3cpO1xuICAgICAgICAgIH0sMjApO1xuICAgICAgICB9IGVsc2UgeyB0cmlnZ2VyU2hvdygpOyB9ICAgICAgICBcbiAgICAgIH07XG4gIFxuICAgIGlmICghdGFicykgcmV0dXJuOyAvLyBpbnZhbGlkYXRlXG4gIFxuICAgIC8vIHNldCBkZWZhdWx0IGFuaW1hdGlvbiBzdGF0ZVxuICAgIHRhYnNbaXNBbmltYXRpbmddID0gZmFsc2U7ICAgIFxuICAgICAgICAgIFxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHZhciBnZXRBY3RpdmVUYWIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFjdGl2ZVRhYnMgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRhYnMsYWN0aXZlKSwgYWN0aXZlVGFiO1xuICAgICAgICBpZiAoIGFjdGl2ZVRhYnNbbGVuZ3RoXSA9PT0gMSAmJiAhaGFzQ2xhc3MoYWN0aXZlVGFic1swXVtwYXJlbnROb2RlXSwnZHJvcGRvd24nKSApIHtcbiAgICAgICAgICBhY3RpdmVUYWIgPSBhY3RpdmVUYWJzWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKCBhY3RpdmVUYWJzW2xlbmd0aF0gPiAxICkge1xuICAgICAgICAgIGFjdGl2ZVRhYiA9IGFjdGl2ZVRhYnNbYWN0aXZlVGFic1tsZW5ndGhdLTFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3RpdmVUYWI7XG4gICAgICB9LFxuICAgICAgZ2V0QWN0aXZlQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcXVlcnlFbGVtZW50KGdldEFjdGl2ZVRhYigpW2dldEF0dHJpYnV0ZV0oJ2hyZWYnKSk7XG4gICAgICB9LFxuICAgICAgLy8gaGFuZGxlciBcbiAgICAgIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZVtwcmV2ZW50RGVmYXVsdF0oKTtcbiAgICAgICAgbmV4dCA9IGVbY3VycmVudFRhcmdldF07XG4gICAgICAgICF0YWJzW2lzQW5pbWF0aW5nXSAmJiAhaGFzQ2xhc3MobmV4dCxhY3RpdmUpICYmIHNlbGYuc2hvdygpO1xuICAgICAgfTtcbiAgXG4gICAgLy8gcHVibGljIG1ldGhvZFxuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uKCkgeyAvLyB0aGUgdGFiIHdlIGNsaWNrZWQgaXMgbm93IHRoZSBuZXh0IHRhYlxuICAgICAgbmV4dCA9IG5leHQgfHwgZWxlbWVudDtcbiAgICAgIG5leHRDb250ZW50ID0gcXVlcnlFbGVtZW50KG5leHRbZ2V0QXR0cmlidXRlXSgnaHJlZicpKTsgLy90aGlzIGlzIHRoZSBhY3R1YWwgb2JqZWN0LCB0aGUgbmV4dCB0YWIgY29udGVudCB0byBhY3RpdmF0ZVxuICAgICAgYWN0aXZlVGFiID0gZ2V0QWN0aXZlVGFiKCk7IFxuICAgICAgYWN0aXZlQ29udGVudCA9IGdldEFjdGl2ZUNvbnRlbnQoKTtcbiAgICAgIFxuICAgICAgdGFic1tpc0FuaW1hdGluZ10gPSB0cnVlO1xuICAgICAgcmVtb3ZlQ2xhc3MoYWN0aXZlVGFiLGFjdGl2ZSk7XG4gICAgICBhY3RpdmVUYWJbc2V0QXR0cmlidXRlXShhcmlhU2VsZWN0ZWQsJ2ZhbHNlJyk7XG4gICAgICBhZGRDbGFzcyhuZXh0LGFjdGl2ZSk7XG4gICAgICBuZXh0W3NldEF0dHJpYnV0ZV0oYXJpYVNlbGVjdGVkLCd0cnVlJyk7ICAgIFxuICBcbiAgICAgIGlmICggZHJvcGRvd24gKSB7XG4gICAgICAgIGlmICggIWhhc0NsYXNzKGVsZW1lbnRbcGFyZW50Tm9kZV0sJ2Ryb3Bkb3duLW1lbnUnKSApIHtcbiAgICAgICAgICBpZiAoaGFzQ2xhc3MoZHJvcGRvd24sYWN0aXZlKSkgcmVtb3ZlQ2xhc3MoZHJvcGRvd24sYWN0aXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWhhc0NsYXNzKGRyb3Bkb3duLGFjdGl2ZSkpIGFkZENsYXNzKGRyb3Bkb3duLGFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChhY3RpdmVUYWIsIGhpZGVFdmVudCwgY29tcG9uZW50LCBuZXh0KTtcbiAgXG4gICAgICBpZiAoaGFzQ2xhc3MoYWN0aXZlQ29udGVudCwgJ2ZhZGUnKSkge1xuICAgICAgICByZW1vdmVDbGFzcyhhY3RpdmVDb250ZW50LHNob3dDbGFzcyk7XG4gICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGFjdGl2ZUNvbnRlbnQsIHRyaWdnZXJIaWRlKTtcbiAgICAgIH0gZWxzZSB7IHRyaWdnZXJIaWRlKCk7IH1cbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKHN0cmluZ1RhYiBpbiBlbGVtZW50KSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgICAgIG9uKGVsZW1lbnQsIGNsaWNrRXZlbnQsIGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICAgIGlmIChzZWxmW2hlaWdodF0pIHsgdGFic0NvbnRlbnRDb250YWluZXIgPSBnZXRBY3RpdmVDb250ZW50KClbcGFyZW50Tm9kZV07IH1cbiAgICBlbGVtZW50W3N0cmluZ1RhYl0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gVEFCIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdUYWIsIFRhYiwgJ1snK2RhdGFUb2dnbGUrJz1cInRhYlwiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IFRvYXN0XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBUT0FTVCBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PVxuICB2YXIgVG9hc3QgPSBmdW5jdGlvbiggZWxlbWVudCxvcHRpb25zICkge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXG4gICAgLy8gREFUQSBBUElcbiAgICB2YXIgYW5pbWF0aW9uRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQW5pbWF0aW9uKSxcbiAgICAgICAgYXV0b2hpZGVEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFBdXRvaGlkZSksXG4gICAgICAgIGRlbGF5RGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhRGVsYXkpLFxuICAgICAgICBcbiAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICBjb21wb25lbnQgPSAndG9hc3QnLFxuICAgICAgICBhdXRvaGlkZSA9ICdhdXRvaGlkZScsXG4gICAgICAgIGFuaW1hdGlvbiA9ICdhbmltYXRpb24nLFxuICAgICAgICBzaG93aW5nID0gJ3Nob3dpbmcnLFxuICAgICAgICBoaWRlID0gJ2hpZGUnLFxuICAgICAgICBmYWRlID0gJ2ZhZGUnO1xuICBcbiAgICAvLyBzZXQgaW5zdGFuY2Ugb3B0aW9uc1xuICAgIHRoaXNbYW5pbWF0aW9uXSA9IG9wdGlvbnNbYW5pbWF0aW9uXSA9PT0gZmFsc2UgfHwgYW5pbWF0aW9uRGF0YSA9PT0gJ2ZhbHNlJyA/IDAgOiAxOyAvLyB0cnVlIGJ5IGRlZmF1bHRcbiAgICB0aGlzW2F1dG9oaWRlXSA9IG9wdGlvbnNbYXV0b2hpZGVdID09PSBmYWxzZSB8fCBhdXRvaGlkZURhdGEgPT09ICdmYWxzZScgPyAwIDogMTsgLy8gdHJ1ZSBieSBkZWZhdWx0XG4gICAgdGhpc1tkZWxheV0gPSBwYXJzZUludChvcHRpb25zW2RlbGF5XSB8fCBkZWxheURhdGEpIHx8IDUwMDsgLy8gNTAwbXMgZGVmYXVsdFxuICBcbiAgICAvLyBiaW5kLHRvYXN0IGFuZCB0aW1lclxuICAgIHZhciBzZWxmID0gdGhpcywgdGltZXIgPSAwLFxuICAgICAgICAvLyBnZXQgdGhlIHRvYXN0IGVsZW1lbnRcbiAgICAgICAgdG9hc3QgPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy50b2FzdCcpO1xuICBcbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAvLyBhbmltYXRpb24gY29tcGxldGVcbiAgICB2YXIgc2hvd0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKCB0b2FzdCwgc2hvd2luZyApO1xuICAgICAgICBhZGRDbGFzcyggdG9hc3QsIHNob3dDbGFzcyApO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKHRvYXN0LCBzaG93bkV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICBpZiAoc2VsZlthdXRvaGlkZV0pIHsgc2VsZi5oaWRlKCk7IH1cbiAgICAgIH0sXG4gICAgICBoaWRlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYWRkQ2xhc3MoIHRvYXN0LCBoaWRlICk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwodG9hc3QsIGhpZGRlbkV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICAgIGNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKCB0b2FzdCxzaG93Q2xhc3MgKTtcbiAgICAgICAgc2VsZlthbmltYXRpb25dID8gZW11bGF0ZVRyYW5zaXRpb25FbmQodG9hc3QsIGhpZGVDb21wbGV0ZSkgOiBoaWRlQ29tcGxldGUoKTtcbiAgICAgIH0sXG4gICAgICBkaXNwb3NlQ29tcGxldGUgPSBmdW5jdGlvbigpe1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpOyB0aW1lciA9IG51bGw7XG4gICAgICAgIGFkZENsYXNzKCB0b2FzdCwgaGlkZSApO1xuICAgICAgICBvZmYoZWxlbWVudCwgY2xpY2tFdmVudCwgc2VsZi5oaWRlKTtcbiAgICAgICAgZWxlbWVudFtzdHJpbmdUb2FzdF0gPSBudWxsO1xuICAgICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdG9hc3QgPSBudWxsO1xuICAgICAgfTtcbiAgXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICB0aGlzLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0b2FzdCkge1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKHRvYXN0LCBzaG93RXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIHNlbGZbYW5pbWF0aW9uXSAmJiBhZGRDbGFzcyggdG9hc3QsZmFkZSApO1xuICAgICAgICByZW1vdmVDbGFzcyggdG9hc3QsaGlkZSApO1xuICAgICAgICBhZGRDbGFzcyggdG9hc3Qsc2hvd2luZyApO1xuICBcbiAgICAgICAgc2VsZlthbmltYXRpb25dID8gZW11bGF0ZVRyYW5zaXRpb25FbmQodG9hc3QsIHNob3dDb21wbGV0ZSkgOiBzaG93Q29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGlkZSA9IGZ1bmN0aW9uKG5vVGltZXIpIHtcbiAgICAgIGlmICh0b2FzdCAmJiBoYXNDbGFzcyh0b2FzdCxzaG93Q2xhc3MpKSB7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwodG9hc3QsIGhpZGVFdmVudCwgY29tcG9uZW50KTtcbiAgXG4gICAgICAgIGlmIChub1RpbWVyKSB7XG4gICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoIGNsb3NlLCBzZWxmW2RlbGF5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCB0b2FzdCAmJiBoYXNDbGFzcyh0b2FzdCxzaG93Q2xhc3MpICkge1xuICAgICAgICByZW1vdmVDbGFzcyggdG9hc3Qsc2hvd0NsYXNzICk7XG4gICAgICAgIHNlbGZbYW5pbWF0aW9uXSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRvYXN0LCBkaXNwb3NlQ29tcGxldGUpIDogZGlzcG9zZUNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdUb2FzdCBpbiBlbGVtZW50KSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgICAgIG9uKGVsZW1lbnQsIGNsaWNrRXZlbnQsIHNlbGYuaGlkZSk7XG4gICAgfVxuICAgIGVsZW1lbnRbc3RyaW5nVG9hc3RdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIFRPQVNUIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ1RvYXN0LCBUb2FzdCwgJ1snK2RhdGFEaXNtaXNzKyc9XCJ0b2FzdFwiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IFRvb2x0aXBcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIFRPT0xUSVAgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT1cbiAgdmFyIFRvb2x0aXAgPSBmdW5jdGlvbiggZWxlbWVudCxvcHRpb25zICkge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXG4gICAgLy8gREFUQSBBUElcbiAgICB2YXIgYW5pbWF0aW9uRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQW5pbWF0aW9uKSxcbiAgICAgICAgcGxhY2VtZW50RGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhUGxhY2VtZW50KSxcbiAgICAgICAgZGVsYXlEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFEZWxheSksXG4gICAgICAgIGNvbnRhaW5lckRhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUNvbnRhaW5lciksXG4gICAgICAgIFxuICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgIGNvbXBvbmVudCA9ICd0b29sdGlwJyxcbiAgICAgICAgY2xhc3NTdHJpbmcgPSAnY2xhc3MnLFxuICAgICAgICB0aXRsZSA9ICd0aXRsZScsXG4gICAgICAgIGZhZGUgPSAnZmFkZScsXG4gICAgICAgIGRpdiA9ICdkaXYnLFxuICBcbiAgICAgICAgLy8gY2hlY2sgY29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQgPSBxdWVyeUVsZW1lbnQob3B0aW9uc1tjb250YWluZXJdKSxcbiAgICAgICAgY29udGFpbmVyRGF0YUVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoY29udGFpbmVyRGF0YSksICAgICAgXG4gIFxuICAgICAgICAvLyBtYXliZSB0aGUgZWxlbWVudCBpcyBpbnNpZGUgYSBtb2RhbFxuICAgICAgICBtb2RhbCA9IGdldENsb3Nlc3QoZWxlbWVudCwnLm1vZGFsJyksXG4gICAgICAgIFxuICAgICAgICAvLyBtYXliZSB0aGUgZWxlbWVudCBpcyBpbnNpZGUgYSBmaXhlZCBuYXZiYXJcbiAgICAgICAgbmF2YmFyRml4ZWRUb3AgPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy4nK2ZpeGVkVG9wKSxcbiAgICAgICAgbmF2YmFyRml4ZWRCb3R0b20gPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy4nK2ZpeGVkQm90dG9tKTtcbiAgXG4gICAgLy8gc2V0IGluc3RhbmNlIG9wdGlvbnNcbiAgICB0aGlzW2FuaW1hdGlvbl0gPSBvcHRpb25zW2FuaW1hdGlvbl0gJiYgb3B0aW9uc1thbmltYXRpb25dICE9PSBmYWRlID8gb3B0aW9uc1thbmltYXRpb25dIDogYW5pbWF0aW9uRGF0YSB8fCBmYWRlO1xuICAgIHRoaXNbcGxhY2VtZW50XSA9IG9wdGlvbnNbcGxhY2VtZW50XSA/IG9wdGlvbnNbcGxhY2VtZW50XSA6IHBsYWNlbWVudERhdGEgfHwgdG9wO1xuICAgIHRoaXNbZGVsYXldID0gcGFyc2VJbnQob3B0aW9uc1tkZWxheV0gfHwgZGVsYXlEYXRhKSB8fCAyMDA7XG4gICAgdGhpc1tjb250YWluZXJdID0gY29udGFpbmVyRWxlbWVudCA/IGNvbnRhaW5lckVsZW1lbnQgXG4gICAgICAgICAgICAgICAgICAgIDogY29udGFpbmVyRGF0YUVsZW1lbnQgPyBjb250YWluZXJEYXRhRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICA6IG5hdmJhckZpeGVkVG9wID8gbmF2YmFyRml4ZWRUb3BcbiAgICAgICAgICAgICAgICAgICAgOiBuYXZiYXJGaXhlZEJvdHRvbSA/IG5hdmJhckZpeGVkQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIDogbW9kYWwgPyBtb2RhbCA6IERPQ1tib2R5XTtcbiAgXG4gICAgLy8gYmluZCwgZXZlbnQgdGFyZ2V0cywgdGl0bGUgYW5kIGNvbnN0YW50c1xuICAgIHZhciBzZWxmID0gdGhpcywgdGltZXIgPSAwLCBwbGFjZW1lbnRTZXR0aW5nID0gdGhpc1twbGFjZW1lbnRdLCB0b29sdGlwID0gbnVsbCxcbiAgICAgICAgdGl0bGVTdHJpbmcgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0odGl0bGUpIHx8IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhVGl0bGUpIHx8IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhT3JpZ2luYWxUaXRsZSk7XG4gIFxuICAgIGlmICggIXRpdGxlU3RyaW5nIHx8IHRpdGxlU3RyaW5nID09IFwiXCIgKSByZXR1cm47IC8vIGludmFsaWRhdGVcbiAgXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgdmFyIHJlbW92ZVRvb2xUaXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZltjb250YWluZXJdLnJlbW92ZUNoaWxkKHRvb2x0aXApO1xuICAgICAgICB0b29sdGlwID0gbnVsbDsgdGltZXIgPSBudWxsO1xuICAgICAgfSxcbiAgICAgIGNyZWF0ZVRvb2xUaXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGl0bGVTdHJpbmcgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0odGl0bGUpIHx8IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhVGl0bGUpIHx8IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhT3JpZ2luYWxUaXRsZSk7IC8vIHJlYWQgdGhlIHRpdGxlIGFnYWluXG4gIFxuICAgICAgICBpZiAoIHRpdGxlU3RyaW5nICYmIHRpdGxlU3RyaW5nICE9PSBcIlwiICkgeyAvLyBpbnZhbGlkYXRlLCBtYXliZSBtYXJrdXAgY2hhbmdlZFxuICAgICAgICAgIHRvb2x0aXAgPSBET0NbY3JlYXRlRWxlbWVudF0oZGl2KTtcbiAgICAgICAgICB0b29sdGlwW3NldEF0dHJpYnV0ZV0oJ3JvbGUnLGNvbXBvbmVudCk7XG4gICAgICAgICAgdG9vbHRpcFtzdHlsZV1bbGVmdF0gPSAnMCc7XG4gICAgICAgICAgdG9vbHRpcFtzdHlsZV1bdG9wXSA9ICcwJzsgICAgICAgIFxuICBcbiAgICAgICAgICAvLyB0b29sdGlwIGFycm93XG4gICAgICAgICAgdmFyIHRvb2x0aXBBcnJvdyA9IERPQ1tjcmVhdGVFbGVtZW50XShkaXYpO1xuICAgICAgICAgIHRvb2x0aXBBcnJvd1tzZXRBdHRyaWJ1dGVdKGNsYXNzU3RyaW5nLCdhcnJvdycpO1xuICAgICAgICAgIHRvb2x0aXBbYXBwZW5kQ2hpbGRdKHRvb2x0aXBBcnJvdyk7XG4gICAgICBcbiAgICAgICAgICB2YXIgdG9vbHRpcElubmVyID0gRE9DW2NyZWF0ZUVsZW1lbnRdKGRpdik7XG4gICAgICAgICAgdG9vbHRpcElubmVyW3NldEF0dHJpYnV0ZV0oY2xhc3NTdHJpbmcsY29tcG9uZW50KyctaW5uZXInKTtcbiAgICAgICAgICB0b29sdGlwW2FwcGVuZENoaWxkXSh0b29sdGlwSW5uZXIpO1xuICAgICAgICAgIHRvb2x0aXBJbm5lcltpbm5lckhUTUxdID0gdGl0bGVTdHJpbmc7XG4gIFxuICAgICAgICAgIHNlbGZbY29udGFpbmVyXVthcHBlbmRDaGlsZF0odG9vbHRpcCk7XG4gICAgICAgICAgdG9vbHRpcFtzZXRBdHRyaWJ1dGVdKGNsYXNzU3RyaW5nLCBjb21wb25lbnQgKyAnIGJzLScgKyBjb21wb25lbnQrJy0nK3BsYWNlbWVudFNldHRpbmcgKyAnICcgKyBzZWxmW2FuaW1hdGlvbl0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdXBkYXRlVG9vbHRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3R5bGVUaXAoZWxlbWVudCwgdG9vbHRpcCwgcGxhY2VtZW50U2V0dGluZywgc2VsZltjb250YWluZXJdKTtcbiAgICAgIH0sXG4gICAgICBzaG93VG9vbHRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIWhhc0NsYXNzKHRvb2x0aXAsc2hvd0NsYXNzKSAmJiAoIGFkZENsYXNzKHRvb2x0aXAsc2hvd0NsYXNzKSApO1xuICAgICAgfSxcbiAgICAgIC8vIHRyaWdnZXJzXG4gICAgICBzaG93VHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBvbiggZ2xvYmFsT2JqZWN0LCByZXNpemVFdmVudCwgc2VsZi5oaWRlLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNob3duRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICB9LFxuICAgICAgaGlkZVRyaWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgb2ZmKCBnbG9iYWxPYmplY3QsIHJlc2l6ZUV2ZW50LCBzZWxmLmhpZGUsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgICAgIHJlbW92ZVRvb2xUaXAoKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBoaWRkZW5FdmVudCwgY29tcG9uZW50KTtcbiAgICAgIH07XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRvb2x0aXAgPT09IG51bGwpIHtcbiAgICAgICAgICBwbGFjZW1lbnRTZXR0aW5nID0gc2VsZltwbGFjZW1lbnRdOyAvLyB3ZSByZXNldCBwbGFjZW1lbnQgaW4gYWxsIGNhc2VzXG4gICAgICAgICAgLy8gaWYoY3JlYXRlVG9vbFRpcCgpID09IGZhbHNlKSByZXR1cm47XG4gICAgICAgICAgaWYoY3JlYXRlVG9vbFRpcCgpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdXBkYXRlVG9vbHRpcCgpO1xuICAgICAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2hvd0V2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICAgICAgISFzZWxmW2FuaW1hdGlvbl0gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0b29sdGlwLCBzaG93VHJpZ2dlcikgOiBzaG93VHJpZ2dlcigpOyAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDIwICk7XG4gICAgfTtcbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodG9vbHRpcCAmJiBoYXNDbGFzcyh0b29sdGlwLHNob3dDbGFzcykpIHtcbiAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIGhpZGVFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgICByZW1vdmVDbGFzcyh0b29sdGlwLHNob3dDbGFzcyk7XG4gICAgICAgICAgISFzZWxmW2FuaW1hdGlvbl0gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0b29sdGlwLCBoaWRlVHJpZ2dlcikgOiBoaWRlVHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgICB9LCBzZWxmW2RlbGF5XSk7XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0b29sdGlwKSB7IHNlbGYuc2hvdygpOyB9IFxuICAgICAgZWxzZSB7IHNlbGYuaGlkZSgpOyB9XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdUb29sdGlwIGluIGVsZW1lbnQpICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgZWxlbWVudFtzZXRBdHRyaWJ1dGVdKGRhdGFPcmlnaW5hbFRpdGxlLHRpdGxlU3RyaW5nKTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRpdGxlKTtcbiAgICAgIG9uKGVsZW1lbnQsIG1vdXNlSG92ZXJbMF0sIHNlbGYuc2hvdyk7XG4gICAgICBvbihlbGVtZW50LCBtb3VzZUhvdmVyWzFdLCBzZWxmLmhpZGUpO1xuICAgIH1cbiAgICBlbGVtZW50W3N0cmluZ1Rvb2x0aXBdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIFRPT0xUSVAgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nVG9vbHRpcCwgVG9vbHRpcCwgJ1snK2RhdGFUb2dnbGUrJz1cInRvb2x0aXBcIl0nIF0gKTtcbiAgXG4gIFxuICBcclxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIHwgSW5pdGlhbGl6ZSBEYXRhIEFQSVxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICB2YXIgaW5pdGlhbGl6ZURhdGFBUEkgPSBmdW5jdGlvbiggY29uc3RydWN0b3IsIGNvbGxlY3Rpb24gKXtcclxuICAgICAgZm9yICh2YXIgaT0wLCBsPWNvbGxlY3Rpb25bbGVuZ3RoXTsgaTxsOyBpKyspIHtcclxuICAgICAgICBuZXcgY29uc3RydWN0b3IoY29sbGVjdGlvbltpXSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbml0Q2FsbGJhY2sgPSBCU04uaW5pdENhbGxiYWNrID0gZnVuY3Rpb24obG9va1VwKXtcclxuICAgICAgbG9va1VwID0gbG9va1VwIHx8IERPQztcclxuICAgICAgZm9yICh2YXIgaT0wLCBsPXN1cHBvcnRzW2xlbmd0aF07IGk8bDsgaSsrKSB7XHJcbiAgICAgICAgaW5pdGlhbGl6ZURhdGFBUEkoIHN1cHBvcnRzW2ldWzFdLCBsb29rVXBbcXVlcnlTZWxlY3RvckFsbF0gKHN1cHBvcnRzW2ldWzJdKSApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gIC8vIGJ1bGsgaW5pdGlhbGl6ZSBhbGwgY29tcG9uZW50c1xyXG4gIERPQ1tib2R5XSA/IGluaXRDYWxsYmFjaygpIDogb24oIERPQywgJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpeyBpbml0Q2FsbGJhY2soKTsgfSApO1xyXG4gIFxuICByZXR1cm4ge1xuICAgIEFsZXJ0OiBBbGVydCxcbiAgICBCdXR0b246IEJ1dHRvbixcbiAgICBDYXJvdXNlbDogQ2Fyb3VzZWwsXG4gICAgQ29sbGFwc2U6IENvbGxhcHNlLFxuICAgIERyb3Bkb3duOiBEcm9wZG93bixcbiAgICBNb2RhbDogTW9kYWwsXG4gICAgUG9wb3ZlcjogUG9wb3ZlcixcbiAgICBTY3JvbGxTcHk6IFNjcm9sbFNweSxcbiAgICBUYWI6IFRhYixcbiAgICBUb2FzdDogVG9hc3QsXG4gICAgVG9vbHRpcDogVG9vbHRpcFxuICB9O1xufSkpO1xuIiwiLy8gZ2V0IHN1Y2Nlc3NmdWwgY29udHJvbCBmcm9tIGZvcm0gYW5kIGFzc2VtYmxlIGludG8gb2JqZWN0XG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNDAxL2ludGVyYWN0L2Zvcm1zLmh0bWwjaC0xNy4xMy4yXG5cbi8vIHR5cGVzIHdoaWNoIGluZGljYXRlIGEgc3VibWl0IGFjdGlvbiBhbmQgYXJlIG5vdCBzdWNjZXNzZnVsIGNvbnRyb2xzXG4vLyB0aGVzZSB3aWxsIGJlIGlnbm9yZWRcbnZhciBrX3Jfc3VibWl0dGVyID0gL14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pO1xuXG4vLyBub2RlIG5hbWVzIHdoaWNoIGNvdWxkIGJlIHN1Y2Nlc3NmdWwgY29udHJvbHNcbnZhciBrX3Jfc3VjY2Vzc19jb250cmxzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO1xuXG4vLyBNYXRjaGVzIGJyYWNrZXQgbm90YXRpb24uXG52YXIgYnJhY2tldHMgPSAvKFxcW1teXFxbXFxdXSpcXF0pL2c7XG5cbi8vIHNlcmlhbGl6ZXMgZm9ybSBmaWVsZHNcbi8vIEBwYXJhbSBmb3JtIE1VU1QgYmUgYW4gSFRNTEZvcm0gZWxlbWVudFxuLy8gQHBhcmFtIG9wdGlvbnMgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdG8gY29uZmlndXJlIHRoZSBzZXJpYWxpemF0aW9uLiBEZWZhdWx0IG91dHB1dFxuLy8gd2l0aCBubyBvcHRpb25zIHNwZWNpZmllZCBpcyBhIHVybCBlbmNvZGVkIHN0cmluZ1xuLy8gICAgLSBoYXNoOiBbdHJ1ZSB8IGZhbHNlXSBDb25maWd1cmUgdGhlIG91dHB1dCB0eXBlLiBJZiB0cnVlLCB0aGUgb3V0cHV0IHdpbGxcbi8vICAgIGJlIGEganMgb2JqZWN0LlxuLy8gICAgLSBzZXJpYWxpemVyOiBbZnVuY3Rpb25dIE9wdGlvbmFsIHNlcmlhbGl6ZXIgZnVuY3Rpb24gdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgb25lLlxuLy8gICAgVGhlIGZ1bmN0aW9uIHRha2VzIDMgYXJndW1lbnRzIChyZXN1bHQsIGtleSwgdmFsdWUpIGFuZCBzaG91bGQgcmV0dXJuIG5ldyByZXN1bHRcbi8vICAgIGhhc2ggYW5kIHVybCBlbmNvZGVkIHN0ciBzZXJpYWxpemVycyBhcmUgcHJvdmlkZWQgd2l0aCB0aGlzIG1vZHVsZVxuLy8gICAgLSBkaXNhYmxlZDogW3RydWUgfCBmYWxzZV0uIElmIHRydWUgc2VyaWFsaXplIGRpc2FibGVkIGZpZWxkcy5cbi8vICAgIC0gZW1wdHk6IFt0cnVlIHwgZmFsc2VdLiBJZiB0cnVlIHNlcmlhbGl6ZSBlbXB0eSBmaWVsZHNcbmZ1bmN0aW9uIHNlcmlhbGl6ZShmb3JtLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IGhhc2g6ICEhb3B0aW9ucyB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChvcHRpb25zLmhhc2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcHRpb25zLmhhc2ggPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSAob3B0aW9ucy5oYXNoKSA/IHt9IDogJyc7XG4gICAgdmFyIHNlcmlhbGl6ZXIgPSBvcHRpb25zLnNlcmlhbGl6ZXIgfHwgKChvcHRpb25zLmhhc2gpID8gaGFzaF9zZXJpYWxpemVyIDogc3RyX3NlcmlhbGl6ZSk7XG5cbiAgICB2YXIgZWxlbWVudHMgPSBmb3JtICYmIGZvcm0uZWxlbWVudHMgPyBmb3JtLmVsZW1lbnRzIDogW107XG5cbiAgICAvL09iamVjdCBzdG9yZSBlYWNoIHJhZGlvIGFuZCBzZXQgaWYgaXQncyBlbXB0eSBvciBub3RcbiAgICB2YXIgcmFkaW9fc3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgZm9yICh2YXIgaT0wIDsgaTxlbGVtZW50cy5sZW5ndGggOyArK2kpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgICAvLyBpbmdvcmUgZGlzYWJsZWQgZmllbGRzXG4gICAgICAgIGlmICgoIW9wdGlvbnMuZGlzYWJsZWQgJiYgZWxlbWVudC5kaXNhYmxlZCkgfHwgIWVsZW1lbnQubmFtZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWdub3JlIGFueWh0aW5nIHRoYXQgaXMgbm90IGNvbnNpZGVyZWQgYSBzdWNjZXNzIGZpZWxkXG4gICAgICAgIGlmICgha19yX3N1Y2Nlc3NfY29udHJscy50ZXN0KGVsZW1lbnQubm9kZU5hbWUpIHx8XG4gICAgICAgICAgICBrX3Jfc3VibWl0dGVyLnRlc3QoZWxlbWVudC50eXBlKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICB2YXIgdmFsID0gZWxlbWVudC52YWx1ZTtcblxuICAgICAgICAvLyB3ZSBjYW4ndCBqdXN0IHVzZSBlbGVtZW50LnZhbHVlIGZvciBjaGVja2JveGVzIGNhdXNlIHNvbWUgYnJvd3NlcnMgbGllIHRvIHVzXG4gICAgICAgIC8vIHRoZXkgc2F5IFwib25cIiBmb3IgdmFsdWUgd2hlbiB0aGUgYm94IGlzbid0IGNoZWNrZWRcbiAgICAgICAgaWYgKChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWxlbWVudC50eXBlID09PSAncmFkaW8nKSAmJiAhZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSB3YW50IGVtcHR5IGVsZW1lbnRzXG4gICAgICAgIGlmIChvcHRpb25zLmVtcHR5KSB7XG4gICAgICAgICAgICAvLyBmb3IgY2hlY2tib3hcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcgJiYgIWVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHZhbCA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmb3IgcmFkaW9cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJhZGlvX3N0b3JlW2VsZW1lbnQubmFtZV0gJiYgIWVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICByYWRpb19zdG9yZVtlbGVtZW50Lm5hbWVdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICByYWRpb19zdG9yZVtlbGVtZW50Lm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIG9wdGlvbnMgZW1wdHkgaXMgdHJ1ZSwgY29udGludWUgb25seSBpZiBpdHMgcmFkaW9cbiAgICAgICAgICAgIGlmICh2YWwgPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQudHlwZSA9PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB2YWx1ZS1sZXNzIGZpZWxkcyBhcmUgaWdub3JlZCB1bmxlc3Mgb3B0aW9ucy5lbXB0eSBpcyB0cnVlXG4gICAgICAgICAgICBpZiAoIXZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbXVsdGkgc2VsZWN0IGJveGVzXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdzZWxlY3QtbXVsdGlwbGUnKSB7XG4gICAgICAgICAgICB2YWwgPSBbXTtcblxuICAgICAgICAgICAgdmFyIHNlbGVjdE9wdGlvbnMgPSBlbGVtZW50Lm9wdGlvbnM7XG4gICAgICAgICAgICB2YXIgaXNTZWxlY3RlZE9wdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGo9MCA7IGo8c2VsZWN0T3B0aW9ucy5sZW5ndGggOyArK2opIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gc2VsZWN0T3B0aW9uc1tqXTtcbiAgICAgICAgICAgICAgICB2YXIgYWxsb3dlZEVtcHR5ID0gb3B0aW9ucy5lbXB0eSAmJiAhb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBoYXNWYWx1ZSA9IChvcHRpb24udmFsdWUgfHwgYWxsb3dlZEVtcHR5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnNlbGVjdGVkICYmIGhhc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWRPcHRpb25zID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB1c2luZyBhIGhhc2ggc2VyaWFsaXplciBiZSBzdXJlIHRvIGFkZCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gY29ycmVjdCBub3RhdGlvbiBmb3IgYW4gYXJyYXkgaW4gdGhlIG11bHRpLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZXh0LiBIZXJlIHRoZSBuYW1lIGF0dHJpYnV0ZSBvbiB0aGUgc2VsZWN0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gbWlnaHQgYmUgbWlzc2luZyB0aGUgdHJhaWxpbmcgYnJhY2tldCBwYWlyLiBCb3RoIG5hbWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIFwiZm9vXCIgYW5kIFwiZm9vW11cIiBzaG91bGQgYmUgYXJyYXlzLlxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5oYXNoICYmIGtleS5zbGljZShrZXkubGVuZ3RoIC0gMikgIT09ICdbXScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNlcmlhbGl6ZXIocmVzdWx0LCBrZXkgKyAnW10nLCBvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc2VyaWFsaXplcihyZXN1bHQsIGtleSwgb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2VyaWFsaXplIGlmIG5vIHNlbGVjdGVkIG9wdGlvbnMgYW5kIG9wdGlvbnMuZW1wdHkgaXMgdHJ1ZVxuICAgICAgICAgICAgaWYgKCFpc1NlbGVjdGVkT3B0aW9ucyAmJiBvcHRpb25zLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc2VyaWFsaXplcihyZXN1bHQsIGtleSwgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IHNlcmlhbGl6ZXIocmVzdWx0LCBrZXksIHZhbCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGFsbCBlbXB0eSByYWRpbyBidXR0b25zIGFuZCBzZXJpYWxpemUgdGhlbSB3aXRoIGtleT1cIlwiXG4gICAgaWYgKG9wdGlvbnMuZW1wdHkpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHJhZGlvX3N0b3JlKSB7XG4gICAgICAgICAgICBpZiAoIXJhZGlvX3N0b3JlW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzZXJpYWxpemVyKHJlc3VsdCwga2V5LCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBwYXJzZV9rZXlzKHN0cmluZykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHByZWZpeCA9IC9eKFteXFxbXFxdXSopLztcbiAgICB2YXIgY2hpbGRyZW4gPSBuZXcgUmVnRXhwKGJyYWNrZXRzKTtcbiAgICB2YXIgbWF0Y2ggPSBwcmVmaXguZXhlYyhzdHJpbmcpO1xuXG4gICAgaWYgKG1hdGNoWzFdKSB7XG4gICAgICAgIGtleXMucHVzaChtYXRjaFsxXSk7XG4gICAgfVxuXG4gICAgd2hpbGUgKChtYXRjaCA9IGNoaWxkcmVuLmV4ZWMoc3RyaW5nKSkgIT09IG51bGwpIHtcbiAgICAgICAga2V5cy5wdXNoKG1hdGNoWzFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gaGFzaF9hc3NpZ24ocmVzdWx0LCBrZXlzLCB2YWx1ZSkge1xuICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB2YXIga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgIHZhciBiZXR3ZWVuID0ga2V5Lm1hdGNoKC9eXFxbKC4rPylcXF0kLyk7XG5cbiAgICBpZiAoa2V5ID09PSAnW10nKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBbXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChoYXNoX2Fzc2lnbihudWxsLCBrZXlzLCB2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhpcyBtaWdodCBiZSB0aGUgcmVzdWx0IG9mIGJhZCBuYW1lIGF0dHJpYnV0ZXMgbGlrZSBcIltdW2Zvb11cIixcbiAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB0aGUgb3JpZ2luYWwgYHJlc3VsdGAgb2JqZWN0IHdpbGwgYWxyZWFkeSBiZVxuICAgICAgICAgICAgLy8gYXNzaWduZWQgdG8gYW4gb2JqZWN0IGxpdGVyYWwuIFJhdGhlciB0aGFuIGNvZXJjZSB0aGUgb2JqZWN0IHRvXG4gICAgICAgICAgICAvLyBhbiBhcnJheSwgb3IgY2F1c2UgYW4gZXhjZXB0aW9uIHRoZSBhdHRyaWJ1dGUgXCJfdmFsdWVzXCIgaXNcbiAgICAgICAgICAgIC8vIGFzc2lnbmVkIGFzIGFuIGFycmF5LlxuICAgICAgICAgICAgcmVzdWx0Ll92YWx1ZXMgPSByZXN1bHQuX3ZhbHVlcyB8fCBbXTtcbiAgICAgICAgICAgIHJlc3VsdC5fdmFsdWVzLnB1c2goaGFzaF9hc3NpZ24obnVsbCwga2V5cywgdmFsdWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gS2V5IGlzIGFuIGF0dHJpYnV0ZSBuYW1lIGFuZCBjYW4gYmUgYXNzaWduZWQgZGlyZWN0bHkuXG4gICAgaWYgKCFiZXR3ZWVuKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gaGFzaF9hc3NpZ24ocmVzdWx0W2tleV0sIGtleXMsIHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBiZXR3ZWVuWzFdO1xuICAgICAgICAvLyArdmFyIGNvbnZlcnRzIHRoZSB2YXJpYWJsZSBpbnRvIGEgbnVtYmVyXG4gICAgICAgIC8vIGJldHRlciB0aGFuIHBhcnNlSW50IGJlY2F1c2UgaXQgZG9lc24ndCB0cnVuY2F0ZSBhd2F5IHRyYWlsaW5nXG4gICAgICAgIC8vIGxldHRlcnMgYW5kIGFjdHVhbGx5IGZhaWxzIGlmIHdob2xlIHRoaW5nIGlzIG5vdCBhIG51bWJlclxuICAgICAgICB2YXIgaW5kZXggPSArc3RyaW5nO1xuXG4gICAgICAgIC8vIElmIHRoZSBjaGFyYWN0ZXJzIGJldHdlZW4gdGhlIGJyYWNrZXRzIGlzIG5vdCBhIG51bWJlciBpdCBpcyBhblxuICAgICAgICAvLyBhdHRyaWJ1dGUgbmFtZSBhbmQgY2FuIGJlIGFzc2lnbmVkIGRpcmVjdGx5LlxuICAgICAgICBpZiAoaXNOYU4oaW5kZXgpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwge307XG4gICAgICAgICAgICByZXN1bHRbc3RyaW5nXSA9IGhhc2hfYXNzaWduKHJlc3VsdFtzdHJpbmddLCBrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgW107XG4gICAgICAgICAgICByZXN1bHRbaW5kZXhdID0gaGFzaF9hc3NpZ24ocmVzdWx0W2luZGV4XSwga2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gT2JqZWN0L2hhc2ggZW5jb2Rpbmcgc2VyaWFsaXplci5cbmZ1bmN0aW9uIGhhc2hfc2VyaWFsaXplcihyZXN1bHQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGtleS5tYXRjaChicmFja2V0cyk7XG5cbiAgICAvLyBIYXMgYnJhY2tldHM/IFVzZSB0aGUgcmVjdXJzaXZlIGFzc2lnbm1lbnQgZnVuY3Rpb24gdG8gd2FsayB0aGUga2V5cyxcbiAgICAvLyBjb25zdHJ1Y3QgYW55IG1pc3Npbmcgb2JqZWN0cyBpbiB0aGUgcmVzdWx0IHRyZWUgYW5kIG1ha2UgdGhlIGFzc2lnbm1lbnRcbiAgICAvLyBhdCB0aGUgZW5kIG9mIHRoZSBjaGFpbi5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICB2YXIga2V5cyA9IHBhcnNlX2tleXMoa2V5KTtcbiAgICAgICAgaGFzaF9hc3NpZ24ocmVzdWx0LCBrZXlzLCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBOb24gYnJhY2tldCBub3RhdGlvbiBjYW4gbWFrZSBhc3NpZ25tZW50cyBkaXJlY3RseS5cbiAgICAgICAgdmFyIGV4aXN0aW5nID0gcmVzdWx0W2tleV07XG5cbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGhhcyBiZWVuIGFzc2lnbmVkIGFscmVhZHkgKGZvciBpbnN0YW5jZSB3aGVuIGEgcmFkaW8gYW5kXG4gICAgICAgIC8vIGEgY2hlY2tib3ggaGF2ZSB0aGUgc2FtZSBuYW1lIGF0dHJpYnV0ZSkgY29udmVydCB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgLy8gaW50byBhbiBhcnJheSBiZWZvcmUgcHVzaGluZyBpbnRvIGl0LlxuICAgICAgICAvL1xuICAgICAgICAvLyBOT1RFOiBJZiB0aGlzIHJlcXVpcmVtZW50IHdlcmUgcmVtb3ZlZCBhbGwgaGFzaCBjcmVhdGlvbiBhbmRcbiAgICAgICAgLy8gYXNzaWdubWVudCBjb3VsZCBnbyB0aHJvdWdoIGBoYXNoX2Fzc2lnbmAuXG4gICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4aXN0aW5nKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gWyBleGlzdGluZyBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyB1cmxmb3JtIGVuY29kaW5nIHNlcmlhbGl6ZXJcbmZ1bmN0aW9uIHN0cl9zZXJpYWxpemUocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgLy8gZW5jb2RlIG5ld2xpbmVzIGFzIFxcclxcbiBjYXVzZSB0aGUgaHRtbCBzcGVjIHNheXMgc29cbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyhcXHIpP1xcbi9nLCAnXFxyXFxuJyk7XG4gICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgLy8gc3BhY2VzIHNob3VsZCBiZSAnKycgcmF0aGVyIHRoYW4gJyUyMCcuXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8lMjAvZywgJysnKTtcbiAgICByZXR1cm4gcmVzdWx0ICsgKHJlc3VsdCA/ICcmJyA6ICcnKSArIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VyaWFsaXplO1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9dHx8c2VsZikuR0xpZ2h0Ym94PWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQoZSl7cmV0dXJuKHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKGUpfWZ1bmN0aW9uIGUodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkodCxlKXtmb3IodmFyIGk9MDtpPGUubGVuZ3RoO2krKyl7dmFyIG49ZVtpXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbi5rZXksbil9fWZ1bmN0aW9uIG4odCxlLG4pe3JldHVybiBlJiZpKHQucHJvdG90eXBlLGUpLG4mJmkodCxuKSx0fWZ1bmN0aW9uIHModCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcih2YXIgZT0wLGk9bmV3IEFycmF5KHQubGVuZ3RoKTtlPHQubGVuZ3RoO2UrKylpW2VdPXRbZV07cmV0dXJuIGl9fSh0KXx8ZnVuY3Rpb24odCl7aWYoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KXx8XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSlyZXR1cm4gQXJyYXkuZnJvbSh0KX0odCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpfSgpfWZ1bmN0aW9uIG8odCl7cmV0dXJuIE1hdGguc3FydCh0LngqdC54K3QueSp0LnkpfWZ1bmN0aW9uIGwodCxlKXt2YXIgaT1mdW5jdGlvbih0LGUpe3ZhciBpPW8odCkqbyhlKTtpZigwPT09aSlyZXR1cm4gMDt2YXIgbj1mdW5jdGlvbih0LGUpe3JldHVybiB0LngqZS54K3QueSplLnl9KHQsZSkvaTtyZXR1cm4gbj4xJiYobj0xKSxNYXRoLmFjb3Mobil9KHQsZSk7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQueCplLnktZS54KnQueX0odCxlKT4wJiYoaSo9LTEpLDE4MCppL01hdGguUEl9dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGkpe2UodGhpcyx0KSx0aGlzLmhhbmRsZXJzPVtdLHRoaXMuZWw9aX1yZXR1cm4gbih0LFt7a2V5OlwiYWRkXCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5oYW5kbGVycy5wdXNoKHQpfX0se2tleTpcImRlbFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3R8fCh0aGlzLmhhbmRsZXJzPVtdKTtmb3IodmFyIGU9dGhpcy5oYW5kbGVycy5sZW5ndGg7ZT49MDtlLS0pdGhpcy5oYW5kbGVyc1tlXT09PXQmJnRoaXMuaGFuZGxlcnMuc3BsaWNlKGUsMSl9fSx7a2V5OlwiZGlzcGF0Y2hcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgdD0wLGU9dGhpcy5oYW5kbGVycy5sZW5ndGg7dDxlO3QrKyl7dmFyIGk9dGhpcy5oYW5kbGVyc1t0XTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiZpLmFwcGx5KHRoaXMuZWwsYXJndW1lbnRzKX19fV0pLHR9KCk7ZnVuY3Rpb24gYSh0LGUpe3ZhciBpPW5ldyByKHQpO3JldHVybiBpLmFkZChlKSxpfXZhciBjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChpLG4pe2UodGhpcyx0KSx0aGlzLmVsZW1lbnQ9XCJzdHJpbmdcIj09dHlwZW9mIGk/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpKTppLHRoaXMuc3RhcnQ9dGhpcy5zdGFydC5iaW5kKHRoaXMpLHRoaXMubW92ZT10aGlzLm1vdmUuYmluZCh0aGlzKSx0aGlzLmVuZD10aGlzLmVuZC5iaW5kKHRoaXMpLHRoaXMuY2FuY2VsPXRoaXMuY2FuY2VsLmJpbmQodGhpcyksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5zdGFydCwhMSksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLm1vdmUsITEpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLmVuZCwhMSksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLHRoaXMuY2FuY2VsLCExKSx0aGlzLnByZVY9e3g6bnVsbCx5Om51bGx9LHRoaXMucGluY2hTdGFydExlbj1udWxsLHRoaXMuem9vbT0xLHRoaXMuaXNEb3VibGVUYXA9ITE7dmFyIHM9ZnVuY3Rpb24oKXt9O3RoaXMucm90YXRlPWEodGhpcy5lbGVtZW50LG4ucm90YXRlfHxzKSx0aGlzLnRvdWNoU3RhcnQ9YSh0aGlzLmVsZW1lbnQsbi50b3VjaFN0YXJ0fHxzKSx0aGlzLm11bHRpcG9pbnRTdGFydD1hKHRoaXMuZWxlbWVudCxuLm11bHRpcG9pbnRTdGFydHx8cyksdGhpcy5tdWx0aXBvaW50RW5kPWEodGhpcy5lbGVtZW50LG4ubXVsdGlwb2ludEVuZHx8cyksdGhpcy5waW5jaD1hKHRoaXMuZWxlbWVudCxuLnBpbmNofHxzKSx0aGlzLnN3aXBlPWEodGhpcy5lbGVtZW50LG4uc3dpcGV8fHMpLHRoaXMudGFwPWEodGhpcy5lbGVtZW50LG4udGFwfHxzKSx0aGlzLmRvdWJsZVRhcD1hKHRoaXMuZWxlbWVudCxuLmRvdWJsZVRhcHx8cyksdGhpcy5sb25nVGFwPWEodGhpcy5lbGVtZW50LG4ubG9uZ1RhcHx8cyksdGhpcy5zaW5nbGVUYXA9YSh0aGlzLmVsZW1lbnQsbi5zaW5nbGVUYXB8fHMpLHRoaXMucHJlc3NNb3ZlPWEodGhpcy5lbGVtZW50LG4ucHJlc3NNb3ZlfHxzKSx0aGlzLnR3b0ZpbmdlclByZXNzTW92ZT1hKHRoaXMuZWxlbWVudCxuLnR3b0ZpbmdlclByZXNzTW92ZXx8cyksdGhpcy50b3VjaE1vdmU9YSh0aGlzLmVsZW1lbnQsbi50b3VjaE1vdmV8fHMpLHRoaXMudG91Y2hFbmQ9YSh0aGlzLmVsZW1lbnQsbi50b3VjaEVuZHx8cyksdGhpcy50b3VjaENhbmNlbD1hKHRoaXMuZWxlbWVudCxuLnRvdWNoQ2FuY2VsfHxzKSx0aGlzLl9jYW5jZWxBbGxIYW5kbGVyPXRoaXMuY2FuY2VsQWxsLmJpbmQodGhpcyksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLl9jYW5jZWxBbGxIYW5kbGVyKSx0aGlzLmRlbHRhPW51bGwsdGhpcy5sYXN0PW51bGwsdGhpcy5ub3c9bnVsbCx0aGlzLnRhcFRpbWVvdXQ9bnVsbCx0aGlzLnNpbmdsZVRhcFRpbWVvdXQ9bnVsbCx0aGlzLmxvbmdUYXBUaW1lb3V0PW51bGwsdGhpcy5zd2lwZVRpbWVvdXQ9bnVsbCx0aGlzLngxPXRoaXMueDI9dGhpcy55MT10aGlzLnkyPW51bGwsdGhpcy5wcmVUYXBQb3NpdGlvbj17eDpudWxsLHk6bnVsbH19cmV0dXJuIG4odCxbe2tleTpcInN0YXJ0XCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYodC50b3VjaGVzKXt0aGlzLm5vdz1EYXRlLm5vdygpLHRoaXMueDE9dC50b3VjaGVzWzBdLnBhZ2VYLHRoaXMueTE9dC50b3VjaGVzWzBdLnBhZ2VZLHRoaXMuZGVsdGE9dGhpcy5ub3ctKHRoaXMubGFzdHx8dGhpcy5ub3cpLHRoaXMudG91Y2hTdGFydC5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCksbnVsbCE9PXRoaXMucHJlVGFwUG9zaXRpb24ueCYmKHRoaXMuaXNEb3VibGVUYXA9dGhpcy5kZWx0YT4wJiZ0aGlzLmRlbHRhPD0yNTAmJk1hdGguYWJzKHRoaXMucHJlVGFwUG9zaXRpb24ueC10aGlzLngxKTwzMCYmTWF0aC5hYnModGhpcy5wcmVUYXBQb3NpdGlvbi55LXRoaXMueTEpPDMwLHRoaXMuaXNEb3VibGVUYXAmJmNsZWFyVGltZW91dCh0aGlzLnNpbmdsZVRhcFRpbWVvdXQpKSx0aGlzLnByZVRhcFBvc2l0aW9uLng9dGhpcy54MSx0aGlzLnByZVRhcFBvc2l0aW9uLnk9dGhpcy55MSx0aGlzLmxhc3Q9dGhpcy5ub3c7dmFyIGU9dGhpcy5wcmVWO2lmKHQudG91Y2hlcy5sZW5ndGg+MSl7dGhpcy5fY2FuY2VsTG9uZ1RhcCgpLHRoaXMuX2NhbmNlbFNpbmdsZVRhcCgpO3ZhciBpPXt4OnQudG91Y2hlc1sxXS5wYWdlWC10aGlzLngxLHk6dC50b3VjaGVzWzFdLnBhZ2VZLXRoaXMueTF9O2UueD1pLngsZS55PWkueSx0aGlzLnBpbmNoU3RhcnRMZW49byhlKSx0aGlzLm11bHRpcG9pbnRTdGFydC5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCl9dGhpcy5fcHJldmVudFRhcD0hMSx0aGlzLmxvbmdUYXBUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLmxvbmdUYXAuZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpLHRoaXMuX3ByZXZlbnRUYXA9ITB9LmJpbmQodGhpcyksNzUwKX19fSx7a2V5OlwibW92ZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKHQudG91Y2hlcyl7dmFyIGU9dGhpcy5wcmVWLGk9dC50b3VjaGVzLmxlbmd0aCxuPXQudG91Y2hlc1swXS5wYWdlWCxzPXQudG91Y2hlc1swXS5wYWdlWTtpZih0aGlzLmlzRG91YmxlVGFwPSExLGk+MSl7dmFyIHI9dC50b3VjaGVzWzFdLnBhZ2VYLGE9dC50b3VjaGVzWzFdLnBhZ2VZLGM9e3g6dC50b3VjaGVzWzFdLnBhZ2VYLW4seTp0LnRvdWNoZXNbMV0ucGFnZVktc307bnVsbCE9PWUueCYmKHRoaXMucGluY2hTdGFydExlbj4wJiYodC56b29tPW8oYykvdGhpcy5waW5jaFN0YXJ0TGVuLHRoaXMucGluY2guZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpKSx0LmFuZ2xlPWwoYyxlKSx0aGlzLnJvdGF0ZS5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCkpLGUueD1jLngsZS55PWMueSxudWxsIT09dGhpcy54MiYmbnVsbCE9PXRoaXMuc3gyPyh0LmRlbHRhWD0obi10aGlzLngyK3ItdGhpcy5zeDIpLzIsdC5kZWx0YVk9KHMtdGhpcy55MithLXRoaXMuc3kyKS8yKToodC5kZWx0YVg9MCx0LmRlbHRhWT0wKSx0aGlzLnR3b0ZpbmdlclByZXNzTW92ZS5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCksdGhpcy5zeDI9cix0aGlzLnN5Mj1hfWVsc2V7aWYobnVsbCE9PXRoaXMueDIpe3QuZGVsdGFYPW4tdGhpcy54Mix0LmRlbHRhWT1zLXRoaXMueTI7dmFyIGg9TWF0aC5hYnModGhpcy54MS10aGlzLngyKSx1PU1hdGguYWJzKHRoaXMueTEtdGhpcy55Mik7KGg+MTB8fHU+MTApJiYodGhpcy5fcHJldmVudFRhcD0hMCl9ZWxzZSB0LmRlbHRhWD0wLHQuZGVsdGFZPTA7dGhpcy5wcmVzc01vdmUuZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpfXRoaXMudG91Y2hNb3ZlLmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KSx0aGlzLl9jYW5jZWxMb25nVGFwKCksdGhpcy54Mj1uLHRoaXMueTI9cyxpPjEmJnQucHJldmVudERlZmF1bHQoKX19fSx7a2V5OlwiZW5kXCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYodC5jaGFuZ2VkVG91Y2hlcyl7dGhpcy5fY2FuY2VsTG9uZ1RhcCgpO3ZhciBlPXRoaXM7dC50b3VjaGVzLmxlbmd0aDwyJiYodGhpcy5tdWx0aXBvaW50RW5kLmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KSx0aGlzLnN4Mj10aGlzLnN5Mj1udWxsKSx0aGlzLngyJiZNYXRoLmFicyh0aGlzLngxLXRoaXMueDIpPjMwfHx0aGlzLnkyJiZNYXRoLmFicyh0aGlzLnkxLXRoaXMueTIpPjMwPyh0LmRpcmVjdGlvbj10aGlzLl9zd2lwZURpcmVjdGlvbih0aGlzLngxLHRoaXMueDIsdGhpcy55MSx0aGlzLnkyKSx0aGlzLnN3aXBlVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5zd2lwZS5kaXNwYXRjaCh0LGUuZWxlbWVudCl9LDApKToodGhpcy50YXBUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLl9wcmV2ZW50VGFwfHxlLnRhcC5kaXNwYXRjaCh0LGUuZWxlbWVudCksZS5pc0RvdWJsZVRhcCYmKGUuZG91YmxlVGFwLmRpc3BhdGNoKHQsZS5lbGVtZW50KSxlLmlzRG91YmxlVGFwPSExKX0sMCksZS5pc0RvdWJsZVRhcHx8KGUuc2luZ2xlVGFwVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5zaW5nbGVUYXAuZGlzcGF0Y2godCxlLmVsZW1lbnQpfSwyNTApKSksdGhpcy50b3VjaEVuZC5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCksdGhpcy5wcmVWLng9MCx0aGlzLnByZVYueT0wLHRoaXMuem9vbT0xLHRoaXMucGluY2hTdGFydExlbj1udWxsLHRoaXMueDE9dGhpcy54Mj10aGlzLnkxPXRoaXMueTI9bnVsbH19fSx7a2V5OlwiY2FuY2VsQWxsXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9wcmV2ZW50VGFwPSEwLGNsZWFyVGltZW91dCh0aGlzLnNpbmdsZVRhcFRpbWVvdXQpLGNsZWFyVGltZW91dCh0aGlzLnRhcFRpbWVvdXQpLGNsZWFyVGltZW91dCh0aGlzLmxvbmdUYXBUaW1lb3V0KSxjbGVhclRpbWVvdXQodGhpcy5zd2lwZVRpbWVvdXQpfX0se2tleTpcImNhbmNlbFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuY2FuY2VsQWxsKCksdGhpcy50b3VjaENhbmNlbC5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCl9fSx7a2V5OlwiX2NhbmNlbExvbmdUYXBcIix2YWx1ZTpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLmxvbmdUYXBUaW1lb3V0KX19LHtrZXk6XCJfY2FuY2VsU2luZ2xlVGFwXCIsdmFsdWU6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5zaW5nbGVUYXBUaW1lb3V0KX19LHtrZXk6XCJfc3dpcGVEaXJlY3Rpb25cIix2YWx1ZTpmdW5jdGlvbih0LGUsaSxuKXtyZXR1cm4gTWF0aC5hYnModC1lKT49TWF0aC5hYnMoaS1uKT90LWU+MD9cIkxlZnRcIjpcIlJpZ2h0XCI6aS1uPjA/XCJVcFwiOlwiRG93blwifX0se2tleTpcIm9uXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt0aGlzW3RdJiZ0aGlzW3RdLmFkZChlKX19LHtrZXk6XCJvZmZcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3RoaXNbdF0mJnRoaXNbdF0uZGVsKGUpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNpbmdsZVRhcFRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLnNpbmdsZVRhcFRpbWVvdXQpLHRoaXMudGFwVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMudGFwVGltZW91dCksdGhpcy5sb25nVGFwVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMubG9uZ1RhcFRpbWVvdXQpLHRoaXMuc3dpcGVUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy5zd2lwZVRpbWVvdXQpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMuc3RhcnQpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy5tb3ZlKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy5lbmQpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIix0aGlzLmNhbmNlbCksdGhpcy5yb3RhdGUuZGVsKCksdGhpcy50b3VjaFN0YXJ0LmRlbCgpLHRoaXMubXVsdGlwb2ludFN0YXJ0LmRlbCgpLHRoaXMubXVsdGlwb2ludEVuZC5kZWwoKSx0aGlzLnBpbmNoLmRlbCgpLHRoaXMuc3dpcGUuZGVsKCksdGhpcy50YXAuZGVsKCksdGhpcy5kb3VibGVUYXAuZGVsKCksdGhpcy5sb25nVGFwLmRlbCgpLHRoaXMuc2luZ2xlVGFwLmRlbCgpLHRoaXMucHJlc3NNb3ZlLmRlbCgpLHRoaXMudHdvRmluZ2VyUHJlc3NNb3ZlLmRlbCgpLHRoaXMudG91Y2hNb3ZlLmRlbCgpLHRoaXMudG91Y2hFbmQuZGVsKCksdGhpcy50b3VjaENhbmNlbC5kZWwoKSx0aGlzLnByZVY9dGhpcy5waW5jaFN0YXJ0TGVuPXRoaXMuem9vbT10aGlzLmlzRG91YmxlVGFwPXRoaXMuZGVsdGE9dGhpcy5sYXN0PXRoaXMubm93PXRoaXMudGFwVGltZW91dD10aGlzLnNpbmdsZVRhcFRpbWVvdXQ9dGhpcy5sb25nVGFwVGltZW91dD10aGlzLnN3aXBlVGltZW91dD10aGlzLngxPXRoaXMueDI9dGhpcy55MT10aGlzLnkyPXRoaXMucHJlVGFwUG9zaXRpb249dGhpcy5yb3RhdGU9dGhpcy50b3VjaFN0YXJ0PXRoaXMubXVsdGlwb2ludFN0YXJ0PXRoaXMubXVsdGlwb2ludEVuZD10aGlzLnBpbmNoPXRoaXMuc3dpcGU9dGhpcy50YXA9dGhpcy5kb3VibGVUYXA9dGhpcy5sb25nVGFwPXRoaXMuc2luZ2xlVGFwPXRoaXMucHJlc3NNb3ZlPXRoaXMudG91Y2hNb3ZlPXRoaXMudG91Y2hFbmQ9dGhpcy50b3VjaENhbmNlbD10aGlzLnR3b0ZpbmdlclByZXNzTW92ZT1udWxsLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5fY2FuY2VsQWxsSGFuZGxlciksbnVsbH19XSksdH0oKSxoPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChpLG4pe3ZhciBzPXRoaXMsbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtpZihlKHRoaXMsdCksdGhpcy5pbWc9aSx0aGlzLnNsaWRlPW4sdGhpcy5vbmNsb3NlPW8sdGhpcy5pbWcuc2V0Wm9vbUV2ZW50cylyZXR1cm4hMTt0aGlzLmFjdGl2ZT0hMSx0aGlzLnpvb21lZEluPSExLHRoaXMuZHJhZ2dpbmc9ITEsdGhpcy5jdXJyZW50WD1udWxsLHRoaXMuY3VycmVudFk9bnVsbCx0aGlzLmluaXRpYWxYPW51bGwsdGhpcy5pbml0aWFsWT1udWxsLHRoaXMueE9mZnNldD0wLHRoaXMueU9mZnNldD0wLHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixmdW5jdGlvbih0KXtyZXR1cm4gcy5kcmFnU3RhcnQodCl9LCExKSx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGZ1bmN0aW9uKHQpe3JldHVybiBzLmRyYWdFbmQodCl9LCExKSx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsZnVuY3Rpb24odCl7cmV0dXJuIHMuZHJhZyh0KX0sITEpLHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKHQpe2lmKCFzLnpvb21lZEluKXJldHVybiBzLnpvb21JbigpO3Muem9vbWVkSW4mJiFzLmRyYWdnaW5nJiZzLnpvb21PdXQoKX0sITEpLHRoaXMuaW1nLnNldFpvb21FdmVudHM9ITB9cmV0dXJuIG4odCxbe2tleTpcInpvb21JblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy53aWRvd1dpZHRoKCk7aWYoISh0aGlzLnpvb21lZElufHx0PD03NjgpKXt2YXIgZT10aGlzLmltZztpZihlLnNldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVcIixlLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpKSxlLnN0eWxlLm1heFdpZHRoPWUubmF0dXJhbFdpZHRoK1wicHhcIixlLnN0eWxlLm1heEhlaWdodD1lLm5hdHVyYWxIZWlnaHQrXCJweFwiLGUubmF0dXJhbFdpZHRoPnQpe3ZhciBpPXQvMi1lLm5hdHVyYWxXaWR0aC8yO3RoaXMuc2V0VHJhbnNsYXRlKHRoaXMuaW1nLnBhcmVudE5vZGUsaSwwKX10aGlzLnNsaWRlLmNsYXNzTGlzdC5hZGQoXCJ6b29tZWRcIiksdGhpcy56b29tZWRJbj0hMH19fSx7a2V5Olwiem9vbU91dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5pbWcucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiXCIpLHRoaXMuaW1nLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsdGhpcy5pbWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZVwiKSksdGhpcy5zbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiem9vbWVkXCIpLHRoaXMuem9vbWVkSW49ITEsdGhpcy5jdXJyZW50WD1udWxsLHRoaXMuY3VycmVudFk9bnVsbCx0aGlzLmluaXRpYWxYPW51bGwsdGhpcy5pbml0aWFsWT1udWxsLHRoaXMueE9mZnNldD0wLHRoaXMueU9mZnNldD0wLHRoaXMub25jbG9zZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vbmNsb3NlJiZ0aGlzLm9uY2xvc2UoKX19LHtrZXk6XCJkcmFnU3RhcnRcIix2YWx1ZTpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksdGhpcy56b29tZWRJbj8oXCJ0b3VjaHN0YXJ0XCI9PT10LnR5cGU/KHRoaXMuaW5pdGlhbFg9dC50b3VjaGVzWzBdLmNsaWVudFgtdGhpcy54T2Zmc2V0LHRoaXMuaW5pdGlhbFk9dC50b3VjaGVzWzBdLmNsaWVudFktdGhpcy55T2Zmc2V0KToodGhpcy5pbml0aWFsWD10LmNsaWVudFgtdGhpcy54T2Zmc2V0LHRoaXMuaW5pdGlhbFk9dC5jbGllbnRZLXRoaXMueU9mZnNldCksdC50YXJnZXQ9PT10aGlzLmltZyYmKHRoaXMuYWN0aXZlPSEwLHRoaXMuaW1nLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKSkpOnRoaXMuYWN0aXZlPSExfX0se2tleTpcImRyYWdFbmRcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3QucHJldmVudERlZmF1bHQoKSx0aGlzLmluaXRpYWxYPXRoaXMuY3VycmVudFgsdGhpcy5pbml0aWFsWT10aGlzLmN1cnJlbnRZLHRoaXMuYWN0aXZlPSExLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmRyYWdnaW5nPSExLGUuaW1nLmlzRHJhZ2dpbmc9ITEsZS5pbWcuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpfSwxMDApfX0se2tleTpcImRyYWdcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLmFjdGl2ZSYmKHQucHJldmVudERlZmF1bHQoKSxcInRvdWNobW92ZVwiPT09dC50eXBlPyh0aGlzLmN1cnJlbnRYPXQudG91Y2hlc1swXS5jbGllbnRYLXRoaXMuaW5pdGlhbFgsdGhpcy5jdXJyZW50WT10LnRvdWNoZXNbMF0uY2xpZW50WS10aGlzLmluaXRpYWxZKToodGhpcy5jdXJyZW50WD10LmNsaWVudFgtdGhpcy5pbml0aWFsWCx0aGlzLmN1cnJlbnRZPXQuY2xpZW50WS10aGlzLmluaXRpYWxZKSx0aGlzLnhPZmZzZXQ9dGhpcy5jdXJyZW50WCx0aGlzLnlPZmZzZXQ9dGhpcy5jdXJyZW50WSx0aGlzLmltZy5pc0RyYWdnaW5nPSEwLHRoaXMuZHJhZ2dpbmc9ITAsdGhpcy5zZXRUcmFuc2xhdGUodGhpcy5pbWcsdGhpcy5jdXJyZW50WCx0aGlzLmN1cnJlbnRZKSl9fSx7a2V5Olwib25Nb3ZlXCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYodGhpcy56b29tZWRJbil7dmFyIGU9dC5jbGllbnRYLXRoaXMuaW1nLm5hdHVyYWxXaWR0aC8yLGk9dC5jbGllbnRZLXRoaXMuaW1nLm5hdHVyYWxIZWlnaHQvMjt0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLmltZyxlLGkpfX19LHtrZXk6XCJzZXRUcmFuc2xhdGVcIix2YWx1ZTpmdW5jdGlvbih0LGUsaSl7dC5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIitlK1wicHgsIFwiK2krXCJweCwgMClcIn19LHtrZXk6XCJ3aWRvd1dpZHRoXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmlubmVyV2lkdGh8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aHx8ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aH19XSksdH0oKSx1PW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGFkKXwoaVBob25lKXwoaVBvZCl8KEFuZHJvaWQpfChQbGF5Qm9vayl8KEJCMTApfChCbGFja0JlcnJ5KXwoT3BlcmEgTWluaSl8KElFTW9iaWxlKXwod2ViT1MpfChNZWVHbykvaSksZD1udWxsIT09dXx8dm9pZCAwIT09ZG9jdW1lbnQuY3JlYXRlVG91Y2h8fFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fFwib25tc2dlc3R1cmVjaGFuZ2VcImluIHdpbmRvd3x8bmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMsZz1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0scD1mdW5jdGlvbigpe3ZhciB0LGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZha2VlbGVtZW50XCIpLGk9e3RyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsT1RyYW5zaXRpb246XCJvVHJhbnNpdGlvbkVuZFwiLE1velRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsV2Via2l0VHJhbnNpdGlvbjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn07Zm9yKHQgaW4gaSlpZih2b2lkIDAhPT1lLnN0eWxlW3RdKXJldHVybiBpW3RdfSgpLHY9ZnVuY3Rpb24oKXt2YXIgdCxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKSxpPXthbmltYXRpb246XCJhbmltYXRpb25lbmRcIixPQW5pbWF0aW9uOlwib0FuaW1hdGlvbkVuZFwiLE1vekFuaW1hdGlvbjpcImFuaW1hdGlvbmVuZFwiLFdlYmtpdEFuaW1hdGlvbjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTtmb3IodCBpbiBpKWlmKHZvaWQgMCE9PWUuc3R5bGVbdF0pcmV0dXJuIGlbdF19KCksZj1EYXRlLm5vdygpLG09e30seT17c2VsZWN0b3I6XCJnbGlnaHRib3hcIixlbGVtZW50czpudWxsLHNraW46XCJjbGVhblwiLGNsb3NlQnV0dG9uOiEwLHN0YXJ0QXQ6bnVsbCxhdXRvcGxheVZpZGVvczohMCxkZXNjUG9zaXRpb246XCJib3R0b21cIix3aWR0aDo5MDAsaGVpZ2h0OjUwNix2aWRlb3NXaWR0aDo5NjAsYmVmb3JlU2xpZGVDaGFuZ2U6bnVsbCxhZnRlclNsaWRlQ2hhbmdlOm51bGwsYmVmb3JlU2xpZGVMb2FkOm51bGwsYWZ0ZXJTbGlkZUxvYWQ6bnVsbCxvbk9wZW46bnVsbCxvbkNsb3NlOm51bGwsbG9vcEF0RW5kOiExLHRvdWNoTmF2aWdhdGlvbjohMCxrZXlib2FyZE5hdmlnYXRpb246ITAsY2xvc2VPbk91dHNpZGVDbGljazohMCxwbHlyOntjc3M6XCJodHRwczovL2Nkbi5wbHlyLmlvLzMuNS42L3BseXIuY3NzXCIsanM6XCJodHRwczovL2Nkbi5wbHlyLmlvLzMuNS42L3BseXIuanNcIixyYXRpbzpcIjE2OjlcIixjb25maWc6e3lvdXR1YmU6e25vQ29va2llOiEwLHJlbDowLHNob3dpbmZvOjAsaXZfbG9hZF9wb2xpY3k6M30sdmltZW86e2J5bGluZTohMSxwb3J0cmFpdDohMSx0aXRsZTohMSx0cmFuc3BhcmVudDohMX19fSxvcGVuRWZmZWN0Olwiem9vbUluXCIsY2xvc2VFZmZlY3Q6XCJ6b29tT3V0XCIsc2xpZGVFZmZlY3Q6XCJzbGlkZVwiLG1vcmVUZXh0OlwiU2VlIG1vcmVcIixtb3JlTGVuZ3RoOjYwLGxpZ2h0Ym94SHRtbDpcIlwiLGNzc0VmZWN0czp7ZmFkZTp7aW46XCJmYWRlSW5cIixvdXQ6XCJmYWRlT3V0XCJ9LHpvb206e2luOlwiem9vbUluXCIsb3V0Olwiem9vbU91dFwifSxzbGlkZTp7aW46XCJzbGlkZUluUmlnaHRcIixvdXQ6XCJzbGlkZU91dExlZnRcIn0sc2xpZGVfYmFjazp7aW46XCJzbGlkZUluTGVmdFwiLG91dDpcInNsaWRlT3V0UmlnaHRcIn19LHN2Zzp7Y2xvc2U6JzxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGc+PGc+PHBhdGggZD1cIk01MDUuOTQzLDYuMDU4Yy04LjA3Ny04LjA3Ny0yMS4xNzItOC4wNzctMjkuMjQ5LDBMNi4wNTgsNDc2LjY5M2MtOC4wNzcsOC4wNzctOC4wNzcsMjEuMTcyLDAsMjkuMjQ5QzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNkM1MTQuMDE5LDI3LjIzLDUxNC4wMTksMTQuMTM1LDUwNS45NDMsNi4wNTh6XCIvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cIk01MDUuOTQyLDQ3Ni42OTRMMzUuMzA2LDYuMDU5Yy04LjA3Ni04LjA3Ny0yMS4xNzItOC4wNzctMjkuMjQ4LDBjLTguMDc3LDguMDc2LTguMDc3LDIxLjE3MSwwLDI5LjI0OGw0NzAuNjM2LDQ3MC42MzZjNC4wMzgsNC4wMzksOS4zMzIsNi4wNTgsMTQuNjI1LDYuMDU4YzUuMjkzLDAsMTAuNTg3LTIuMDE5LDE0LjYyNC02LjA1N0M1MTQuMDE4LDQ5Ny44NjYsNTE0LjAxOCw0ODQuNzcxLDUwNS45NDIsNDc2LjY5NHpcIi8+PC9nPjwvZz48L3N2Zz4nLG5leHQ6JzxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0NzcuMTc1IDQ3Ny4xNzVcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPiA8Zz48cGF0aCBkPVwiTTM2MC43MzEsMjI5LjA3NWwtMjI1LjEtMjI1LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwcy01LjMsMTMuOCwwLDE5LjFsMjE1LjUsMjE1LjVsLTIxNS41LDIxNS41Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0YzMuNCwwLDYuOS0xLjMsOS41LTRsMjI1LjEtMjI1LjFDMzY1LjkzMSwyNDIuODc1LDM2NS45MzEsMjM0LjI3NSwzNjAuNzMxLDIyOS4wNzV6XCIvPjwvZz48L3N2Zz4nLHByZXY6JzxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0NzcuMTc1IDQ3Ny4xNzVcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxnPjxwYXRoIGQ9XCJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjVjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXpcIi8+PC9nPjwvc3ZnPid9fTt5LnNsaWRlSHRtbD0nPGRpdiBjbGFzcz1cImdzbGlkZVwiPlxcbiAgICA8ZGl2IGNsYXNzPVwiZ3NsaWRlLWlubmVyLWNvbnRlbnRcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnaW5uZXItY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdzbGlkZS1tZWRpYVwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnc2xpZGUtZGVzY3JpcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdkZXNjLWlubmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJnc2xpZGUtdGl0bGVcIj48L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdzbGlkZS1kZXNjXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2Pic7ZnVuY3Rpb24gYigpe3ZhciB0PXt9LGU9ITEsaT0wLG49YXJndW1lbnRzLmxlbmd0aDtcIltvYmplY3QgQm9vbGVhbl1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHNbMF0pJiYoZT1hcmd1bWVudHNbMF0saSsrKTtmb3IodmFyIHM9ZnVuY3Rpb24oaSl7Zm9yKHZhciBuIGluIGkpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGksbikmJihlJiZcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlbbl0pP3Rbbl09YighMCx0W25dLGlbbl0pOnRbbl09aVtuXSl9O2k8bjtpKyspe3MoYXJndW1lbnRzW2ldKX1yZXR1cm4gdH15LmxpZ2h0Ym94SHRtbD0nPGRpdiBpZD1cImdsaWdodGJveC1ib2R5XCIgY2xhc3M9XCJnbGlnaHRib3gtY29udGFpbmVyXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJnbG9hZGVyIHZpc2libGVcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cImdvdmVybGF5XCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XCJnY29udGFpbmVyXCI+XFxuICAgIDxkaXYgaWQ9XCJnbGlnaHRib3gtc2xpZGVyXCIgY2xhc3M9XCJnc2xpZGVyXCI+PC9kaXY+XFxuICAgIDxidXR0b24gY2xhc3M9XCJnbmV4dCBnYnRuXCIgdGFiaW5kZXg9XCIwXCI+e25leHRTVkd9PC9idXR0b24+XFxuICAgIDxidXR0b24gY2xhc3M9XCJncHJldiBnYnRuXCIgdGFiaW5kZXg9XCIxXCI+e3ByZXZTVkd9PC9idXR0b24+XFxuICAgIDxidXR0b24gY2xhc3M9XCJnY2xvc2UgZ2J0blwiIHRhYmluZGV4PVwiMlwiPntjbG9zZVNWR308L2J1dHRvbj5cXG48L2Rpdj5cXG48L2Rpdj4nO3ZhciB4PXtpc0Z1bmN0aW9uOmZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9LGlzU3RyaW5nOmZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fSxpc05vZGU6ZnVuY3Rpb24odCl7cmV0dXJuISghdHx8IXQubm9kZVR5cGV8fDEhPXQubm9kZVR5cGUpfSxpc0FycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBBcnJheS5pc0FycmF5KHQpfSxpc0FycmF5TGlrZTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGgmJmlzRmluaXRlKHQubGVuZ3RoKX0saXNPYmplY3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJvYmplY3RcIj09PXQoZSkmJm51bGwhPWUmJiF4LmlzRnVuY3Rpb24oZSkmJiF4LmlzQXJyYXkoZSl9LGlzTmlsOmZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10fSxoYXM6ZnVuY3Rpb24odCxlKXtyZXR1cm4gbnVsbCE9PXQmJmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sc2l6ZTpmdW5jdGlvbih0KXtpZih4LmlzT2JqZWN0KHQpKXtpZih0LmtleXMpcmV0dXJuIHQua2V5cygpLmxlbmd0aDt2YXIgZT0wO2Zvcih2YXIgaSBpbiB0KXguaGFzKHQsaSkmJmUrKztyZXR1cm4gZX1yZXR1cm4gdC5sZW5ndGh9LGlzTnVtYmVyOmZ1bmN0aW9uKHQpe3JldHVybiFpc05hTihwYXJzZUZsb2F0KHQpKSYmaXNGaW5pdGUodCl9fTtmdW5jdGlvbiB3KHQsZSl7aWYoKHguaXNOb2RlKHQpfHx0PT09d2luZG93fHx0PT09ZG9jdW1lbnQpJiYodD1bdF0pLHguaXNBcnJheUxpa2UodCl8fHguaXNPYmplY3QodCl8fCh0PVt0XSksMCE9eC5zaXplKHQpKWlmKHguaXNBcnJheUxpa2UodCkmJiF4LmlzT2JqZWN0KHQpKWZvcih2YXIgaT10Lmxlbmd0aCxuPTA7bjxpJiYhMSE9PWUuY2FsbCh0W25dLHRbbl0sbix0KTtuKyspO2Vsc2UgaWYoeC5pc09iamVjdCh0KSlmb3IodmFyIHMgaW4gdClpZih4Lmhhcyh0LHMpJiYhMT09PWUuY2FsbCh0W3NdLHRbc10scyx0KSlicmVha31mdW5jdGlvbiBTKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwsbj10W2ZdPXRbZl18fFtdLHM9e2FsbDpuLGV2dDpudWxsLGZvdW5kOm51bGx9O3JldHVybiBlJiZpJiZ4LnNpemUobik+MCYmdyhuLGZ1bmN0aW9uKHQsbil7aWYodC5ldmVudE5hbWU9PWUmJnQuZm4udG9TdHJpbmcoKT09aS50b1N0cmluZygpKXJldHVybiBzLmZvdW5kPSEwLHMuZXZ0PW4sITF9KSxzfWZ1bmN0aW9uIFQodCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LGk9ZS5vbkVsZW1lbnQsbj1lLndpdGhDYWxsYmFjayxzPWUuYXZvaWREdXBsaWNhdGUsbz12b2lkIDA9PT1zfHxzLGw9ZS5vbmNlLHI9dm9pZCAwIT09bCYmbCxhPWUudXNlQ2FwdHVyZSxjPXZvaWQgMCE9PWEmJmEsaD1hcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMCx1PWl8fFtdO2Z1bmN0aW9uIGQodCl7eC5pc0Z1bmN0aW9uKG4pJiZuLmNhbGwoaCx0LHRoaXMpLHImJmQuZGVzdHJveSgpfXJldHVybiB4LmlzU3RyaW5nKHUpJiYodT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHUpKSxkLmRlc3Ryb3k9ZnVuY3Rpb24oKXt3KHUsZnVuY3Rpb24oZSl7dmFyIGk9UyhlLHQsZCk7aS5mb3VuZCYmaS5hbGwuc3BsaWNlKGkuZXZ0LDEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsZCxjKX0pfSx3KHUsZnVuY3Rpb24oZSl7dmFyIGk9UyhlLHQsZCk7KGUuYWRkRXZlbnRMaXN0ZW5lciYmbyYmIWkuZm91bmR8fCFvKSYmKGUuYWRkRXZlbnRMaXN0ZW5lcih0LGQsYyksaS5hbGwucHVzaCh7ZXZlbnROYW1lOnQsZm46ZH0pKX0pLGR9ZnVuY3Rpb24gayh0LGUpe3coZS5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2xhc3NMaXN0LmFkZChlKX0pfWZ1bmN0aW9uIEUodCxlKXt3KGUuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUpe3JldHVybiB0LmNsYXNzTGlzdC5yZW1vdmUoZSl9KX1mdW5jdGlvbiBBKHQsZSl7cmV0dXJuIHQuY2xhc3NMaXN0LmNvbnRhaW5zKGUpfWZ1bmN0aW9uIEModCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOlwiXCIsaT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO2lmKCF0fHxcIlwiPT09ZSlyZXR1cm4hMTtpZihcIm5vbmVcIj09ZSlyZXR1cm4geC5pc0Z1bmN0aW9uKGkpJiZpKCksITE7dmFyIG49ZS5zcGxpdChcIiBcIik7dyhuLGZ1bmN0aW9uKGUpe2sodCxcImdcIitlKX0pLFQodix7b25FbGVtZW50OnQsYXZvaWREdXBsaWNhdGU6ITEsb25jZTohMCx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24odCxlKXt3KG4sZnVuY3Rpb24odCl7RShlLFwiZ1wiK3QpfSkseC5pc0Z1bmN0aW9uKGkpJiZpKCl9fSl9ZnVuY3Rpb24gTCh0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihpLmlubmVySFRNTD10O2kuZmlyc3RDaGlsZDspZS5hcHBlbmRDaGlsZChpLmZpcnN0Q2hpbGQpO3JldHVybiBlfWZ1bmN0aW9uIE0odCxlKXtmb3IoO3QhPT1kb2N1bWVudC5ib2R5Oyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YodD10LnBhcmVudEVsZW1lbnQpLm1hdGNoZXM/dC5tYXRjaGVzKGUpOnQubXNNYXRjaGVzU2VsZWN0b3IoZSkpcmV0dXJuIHR9fWZ1bmN0aW9uIE8odCl7dC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIn1mdW5jdGlvbiB6KHQpe3Quc3R5bGUuZGlzcGxheT1cIm5vbmVcIn1mdW5jdGlvbiBxKCl7cmV0dXJue3dpZHRoOndpbmRvdy5pbm5lcldpZHRofHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGh8fGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsaGVpZ2h0OndpbmRvdy5pbm5lckhlaWdodHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodHx8ZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHR9fWZ1bmN0aW9uIE4odCl7aWYoQSh0LnRhcmdldCxcInBseXItLWh0bWw1XCIpKXt2YXIgZT1NKHQudGFyZ2V0LFwiLmdzbGlkZS1tZWRpYVwiKTtcImVudGVyZnVsbHNjcmVlblwiPT10LnR5cGUmJmsoZSxcImZ1bGxzY3JlZW5cIiksXCJleGl0ZnVsbHNjcmVlblwiPT10LnR5cGUmJkUoZSxcImZ1bGxzY3JlZW5cIil9fXZhciBJPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGwsZT1hcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxpPXtocmVmOlwiXCIsdGl0bGU6XCJcIix0eXBlOlwiXCIsZGVzY3JpcHRpb246XCJcIixkZXNjUG9zaXRpb246ZS5kZXNjUG9zaXRpb24sZWZmZWN0OlwiXCIsd2lkdGg6XCJcIixoZWlnaHQ6XCJcIixub2RlOnR9O2lmKHguaXNPYmplY3QodCkmJiF4LmlzTm9kZSh0KSlyZXR1cm4gYihpLHQpO3ZhciBuPVwiXCIscz10LmdldEF0dHJpYnV0ZShcImRhdGEtZ2xpZ2h0Ym94XCIpLG89dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwiYVwiPT09byYmKG49dC5ocmVmKSxcImltZ1wiPT09byYmKG49dC5zcmMpLGkuaHJlZj1uLHcoaSxmdW5jdGlvbihuLHMpe3guaGFzKGUscykmJlwid2lkdGhcIiE9PXMmJihpW3NdPWVbc10pO3ZhciBvPXQuZGF0YXNldFtzXTt4LmlzTmlsKG8pfHwoaVtzXT1vKX0pLGkudHlwZXx8KGkudHlwZT1XKG4pKSx4LmlzTmlsKHMpKXtpZihcImFcIj09byl7dmFyIGw9dC50aXRsZTt4LmlzTmlsKGwpfHxcIlwiPT09bHx8KGkudGl0bGU9bCl9aWYoXCJpbWdcIj09byl7dmFyIHI9dC5hbHQ7eC5pc05pbChyKXx8XCJcIj09PXJ8fChpLnRpdGxlPXIpfXZhciBhPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1kZXNjcmlwdGlvblwiKTt4LmlzTmlsKGEpfHxcIlwiPT09YXx8KGkuZGVzY3JpcHRpb249YSl9ZWxzZXt2YXIgYz1bXTt3KGksZnVuY3Rpb24odCxlKXtjLnB1c2goXCI7XFxcXHM/XCIrZSl9KSxjPWMuam9pbihcIlxcXFxzPzp8XCIpLFwiXCIhPT1zLnRyaW0oKSYmdyhpLGZ1bmN0aW9uKHQsZSl7dmFyIG49cyxvPW5ldyBSZWdFeHAoXCJzP1wiK2UrXCJzPzpzPyguKj8pKFwiK2MrXCJzPzp8JClcIiksbD1uLm1hdGNoKG8pO2lmKGwmJmwubGVuZ3RoJiZsWzFdKXt2YXIgcj1sWzFdLnRyaW0oKS5yZXBsYWNlKC87XFxzKiQvLFwiXCIpO2lbZV09cn19KX1pZihpLmRlc2NyaXB0aW9uJiZcIi5cIj09aS5kZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwxKSYmZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpLmRlc2NyaXB0aW9uKSlpLmRlc2NyaXB0aW9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaS5kZXNjcmlwdGlvbikuaW5uZXJIVE1MO2Vsc2V7dmFyIGg9dC5xdWVyeVNlbGVjdG9yKFwiLmdsaWdodGJveC1kZXNjXCIpO2gmJihpLmRlc2NyaXB0aW9uPWguaW5uZXJIVE1MKX12YXIgdT1cInZpZGVvXCI9PWkudHlwZT9lLnZpZGVvc1dpZHRoOmUud2lkdGgsZD1lLmhlaWdodDtyZXR1cm4gaS53aWR0aD14LmhhcyhpLFwid2lkdGhcIikmJlwiXCIhPT1pLndpZHRoP2kud2lkdGg6dSxpLmhlaWdodD14LmhhcyhpLFwiaGVpZ2h0XCIpJiZcIlwiIT09aS5oZWlnaHQ/aS5oZWlnaHQ6ZCxpfSxEPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsLGk9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtpZihBKGUsXCJsb2FkZWRcIikpcmV0dXJuITE7eC5pc0Z1bmN0aW9uKHRoaXMuc2V0dGluZ3MuYmVmb3JlU2xpZGVMb2FkKSYmdGhpcy5zZXR0aW5ncy5iZWZvcmVTbGlkZUxvYWQoZSxpKTt2YXIgcz1pLnR5cGUsbz1pLmRlc2NQb3NpdGlvbixsPWUucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIikscj1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLXRpdGxlXCIpLGE9ZS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1kZXNjXCIpLGM9ZS5xdWVyeVNlbGVjdG9yKFwiLmdkZXNjLWlubmVyXCIpLGQ9bjtpZih4LmlzRnVuY3Rpb24odGhpcy5zZXR0aW5ncy5hZnRlclNsaWRlTG9hZCkmJihkPWZ1bmN0aW9uKCl7eC5pc0Z1bmN0aW9uKG4pJiZuKCksdC5zZXR0aW5ncy5hZnRlclNsaWRlTG9hZChlLGkpfSksXCJcIj09aS50aXRsZSYmXCJcIj09aS5kZXNjcmlwdGlvbj9jJiZjLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjLnBhcmVudE5vZGUpOihyJiZcIlwiIT09aS50aXRsZT9yLmlubmVySFRNTD1pLnRpdGxlOnIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSxhJiZcIlwiIT09aS5kZXNjcmlwdGlvbj91JiZ0aGlzLnNldHRpbmdzLm1vcmVMZW5ndGg+MD8oaS5zbWFsbERlc2NyaXB0aW9uPUcoaS5kZXNjcmlwdGlvbix0aGlzLnNldHRpbmdzLm1vcmVMZW5ndGgsdGhpcy5zZXR0aW5ncy5tb3JlVGV4dCksYS5pbm5lckhUTUw9aS5zbWFsbERlc2NyaXB0aW9uLFouYXBwbHkodGhpcyxbYSxpXSkpOmEuaW5uZXJIVE1MPWkuZGVzY3JpcHRpb246YS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpLGsobC5wYXJlbnROb2RlLFwiZGVzYy1cIi5jb25jYXQobykpLGsoYy5wYXJlbnROb2RlLFwiZGVzY3JpcHRpb24tXCIuY29uY2F0KG8pKSksayhsLFwiZ3NsaWRlLVwiLmNvbmNhdChzKSksayhlLFwibG9hZGVkXCIpLFwidmlkZW9cIj09PXMpcmV0dXJuIGsobC5wYXJlbnROb2RlLFwiZ3ZpZGVvLWNvbnRhaW5lclwiKSxsLmluc2VydEJlZm9yZShMKCc8ZGl2IGNsYXNzPVwiZ3ZpZGVvLXdyYXBwZXJcIj48L2Rpdj4nKSxsLmZpcnN0Q2hpbGQpLHZvaWQgWC5hcHBseSh0aGlzLFtlLGksZF0pO2lmKFwiZXh0ZXJuYWxcIj09PXMpe3ZhciBnPVkoe3VybDppLmhyZWYsd2lkdGg6aS53aWR0aCxoZWlnaHQ6aS5oZWlnaHQsY2FsbGJhY2s6ZH0pO3JldHVybiBsLnBhcmVudE5vZGUuc3R5bGUubWF4V2lkdGg9XCJcIi5jb25jYXQoaS53aWR0aCxcInB4XCIpLHZvaWQgbC5hcHBlbmRDaGlsZChnKX1pZihcImlubGluZVwiIT09cyl7aWYoXCJpbWFnZVwiPT09cyl7dmFyIHA9bmV3IEltYWdlO3JldHVybiBwLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXshdSYmcC5uYXR1cmFsV2lkdGg+cC5vZmZzZXRXaWR0aCYmKGsocCxcInpvb21hYmxlXCIpLG5ldyBoKHAsZSxmdW5jdGlvbigpe3QucmVzaXplKGUpfSkpLHguaXNGdW5jdGlvbihkKSYmZCgpfSwhMSkscC5zcmM9aS5ocmVmLHZvaWQgbC5pbnNlcnRCZWZvcmUocCxsLmZpcnN0Q2hpbGQpfXguaXNGdW5jdGlvbihkKSYmZCgpfWVsc2UgRi5hcHBseSh0aGlzLFtlLGksZF0pfTtmdW5jdGlvbiBYKHQsZSxpKXt2YXIgbj10aGlzLHM9XCJndmlkZW9cIitlLmluZGV4LG89dC5xdWVyeVNlbGVjdG9yKFwiLmd2aWRlby13cmFwcGVyXCIpO0IodGhpcy5zZXR0aW5ncy5wbHlyLmNzcyk7dmFyIGw9ZS5ocmVmLHI9bG9jYXRpb24ucHJvdG9jb2wucmVwbGFjZShcIjpcIixcIlwiKSxhPVwiXCIsYz1cIlwiLGg9ITE7XCJmaWxlXCI9PXImJihyPVwiaHR0cFwiKSxvLnBhcmVudE5vZGUuc3R5bGUubWF4V2lkdGg9XCJcIi5jb25jYXQoZS53aWR0aCxcInB4XCIpLEIodGhpcy5zZXR0aW5ncy5wbHlyLmpzLFwiUGx5clwiLGZ1bmN0aW9uKCl7aWYobC5tYXRjaCgvdmltZW9cXC5jb21cXC8oWzAtOV0qKS8pKXt2YXIgdD0vdmltZW8uKlxcLyhcXGQrKS9pLmV4ZWMobCk7YT1cInZpbWVvXCIsYz10WzFdfWlmKGwubWF0Y2goLyh5b3V0dWJlXFwuY29tfHlvdXR1YmUtbm9jb29raWVcXC5jb20pXFwvd2F0Y2hcXD92PShbYS16QS1aMC05XFwtX10rKS8pfHxsLm1hdGNoKC95b3V0dVxcLmJlXFwvKFthLXpBLVowLTlcXC1fXSspLyl8fGwubWF0Y2goLyh5b3V0dWJlXFwuY29tfHlvdXR1YmUtbm9jb29raWVcXC5jb20pXFwvZW1iZWRcXC8oW2EtekEtWjAtOVxcLV9dKykvKSl7dmFyIHI9ZnVuY3Rpb24odCl7dmFyIGU9XCJcIjtlPXZvaWQgMCE9PSh0PXQucmVwbGFjZSgvKD58PCkvZ2ksXCJcIikuc3BsaXQoLyh2aVxcL3x2PXxcXC92XFwvfHlvdXR1XFwuYmVcXC98XFwvZW1iZWRcXC8pLykpWzJdPyhlPXRbMl0uc3BsaXQoL1teMC05YS16X1xcLV0vaSkpWzBdOnQ7cmV0dXJuIGV9KGwpO2E9XCJ5b3V0dWJlXCIsYz1yfWlmKG51bGwhPT1sLm1hdGNoKC9cXC4obXA0fG9nZ3x3ZWJtKSQvKSl7YT1cImxvY2FsXCI7dmFyIHU9Jzx2aWRlbyBpZD1cIicrcysnXCIgJzt1Kz0nc3R5bGU9XCJiYWNrZ3JvdW5kOiMwMDA7IG1heC13aWR0aDogJy5jb25jYXQoZS53aWR0aCwncHg7XCIgJyksdSs9J3ByZWxvYWQ9XCJtZXRhZGF0YVwiICcsdSs9J3gtd2Via2l0LWFpcnBsYXk9XCJhbGxvd1wiICcsdSs9J3dlYmtpdC1wbGF5c2lubGluZT1cIlwiICcsdSs9XCJjb250cm9scyBcIix1Kz0nY2xhc3M9XCJndmlkZW8tbG9jYWxcIj4nO3ZhciBkPWwudG9Mb3dlckNhc2UoKS5zcGxpdChcIi5cIikucG9wKCksZz17bXA0OlwiXCIsb2dnOlwiXCIsd2VibTpcIlwifTtmb3IodmFyIHAgaW4gZ1tkXT1sLGcpaWYoZy5oYXNPd25Qcm9wZXJ0eShwKSl7dmFyIHY9Z1twXTtlLmhhc093blByb3BlcnR5KHApJiYodj1lW3BdKSxcIlwiIT09diYmKHUrPSc8c291cmNlIHNyYz1cIicuY29uY2F0KHYsJ1wiIHR5cGU9XCJ2aWRlby8nKS5jb25jYXQocCwnXCI+JykpfWg9TCh1Kz1cIjwvdmlkZW8+XCIpfXZhciBmPWh8fEwoJzxkaXYgaWQ9XCInLmNvbmNhdChzLCdcIiBkYXRhLXBseXItcHJvdmlkZXI9XCInKS5jb25jYXQoYSwnXCIgZGF0YS1wbHlyLWVtYmVkLWlkPVwiJykuY29uY2F0KGMsJ1wiPjwvZGl2PicpKTtrKG8sXCJcIi5jb25jYXQoYSxcIi12aWRlbyBndmlkZW9cIikpLG8uYXBwZW5kQ2hpbGQoZiksby5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIscyk7dmFyIHk9eC5oYXMobi5zZXR0aW5ncy5wbHlyLFwiY29uZmlnXCIpP24uc2V0dGluZ3MucGx5ci5jb25maWc6e30sYj1uZXcgUGx5cihcIiNcIitzLHkpO2Iub24oXCJyZWFkeVwiLGZ1bmN0aW9uKHQpe3ZhciBlPXQuZGV0YWlsLnBseXI7bVtzXT1lLHguaXNGdW5jdGlvbihpKSYmaSgpfSksYi5vbihcImVudGVyZnVsbHNjcmVlblwiLE4pLGIub24oXCJleGl0ZnVsbHNjcmVlblwiLE4pfSl9ZnVuY3Rpb24gWSh0KXt2YXIgZT10LnVybCxpPXQud2lkdGgsbj10LmhlaWdodCxzPXQuYWxsb3csbz10LmNhbGxiYWNrLGw9dC5hcHBlbmRUbyxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIiksYT13aW5kb3cuaW5uZXJXaWR0aHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRofHxkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO3JldHVybiByLmNsYXNzTmFtZT1cInZpbWVvLXZpZGVvIGd2aWRlb1wiLHIuc3JjPWUsbiYmKHIuc3R5bGUuaGVpZ2h0PXUmJmE8NzY3P1wiXCI6XCJcIi5jb25jYXQobixcInB4XCIpKSxpJiYoci5zdHlsZS53aWR0aD1cIlwiLmNvbmNhdChpLFwicHhcIikpLHMmJnIuc2V0QXR0cmlidXRlKFwiYWxsb3dcIixzKSxyLm9ubG9hZD1mdW5jdGlvbigpe2socixcIm5vZGUtcmVhZHlcIikseC5pc0Z1bmN0aW9uKG8pJiZvKCl9LGwmJmwuYXBwZW5kQ2hpbGQocikscn1mdW5jdGlvbiBCKHQsZSxpKXtpZih4LmlzTmlsKHQpKWNvbnNvbGUuZXJyb3IoXCJJbmplY3QgdmlkZW9zIGFwaSBlcnJvclwiKTtlbHNle3ZhciBuO2lmKHguaXNGdW5jdGlvbihlKSYmKGk9ZSxlPSExKSwtMSE9PXQuaW5kZXhPZihcIi5jc3NcIikpe2lmKChuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbaHJlZj1cIicrdCsnXCJdJykpJiZuLmxlbmd0aD4wKXJldHVybiB2b2lkKHguaXNGdW5jdGlvbihpKSYmaSgpKTt2YXIgcz1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sbz1zLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7cmV0dXJuIGwucmVsPVwic3R5bGVzaGVldFwiLGwudHlwZT1cInRleHQvY3NzXCIsbC5ocmVmPXQsbC5tZWRpYT1cImFsbFwiLG8/cy5pbnNlcnRCZWZvcmUobCxvWzBdKTpzLmFwcGVuZENoaWxkKGwpLHZvaWQoeC5pc0Z1bmN0aW9uKGkpJiZpKCkpfWlmKChuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtzcmM9XCInK3QrJ1wiXScpKSYmbi5sZW5ndGg+MCl7aWYoeC5pc0Z1bmN0aW9uKGkpKXtpZih4LmlzU3RyaW5nKGUpKXJldHVybiBQKGZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMCE9PXdpbmRvd1tlXX0sZnVuY3Rpb24oKXtpKCl9KSwhMTtpKCl9fWVsc2V7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIixyLnNyYz10LHIub25sb2FkPWZ1bmN0aW9uKCl7aWYoeC5pc0Z1bmN0aW9uKGkpKXtpZih4LmlzU3RyaW5nKGUpKXJldHVybiBQKGZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMCE9PXdpbmRvd1tlXX0sZnVuY3Rpb24oKXtpKCl9KSwhMTtpKCl9fSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHIpfX19ZnVuY3Rpb24gUCh0LGUsaSxuKXtpZih0KCkpZSgpO2Vsc2V7dmFyIHM7aXx8KGk9MTAwKTt2YXIgbz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3QoKSYmKGNsZWFySW50ZXJ2YWwobykscyYmY2xlYXJUaW1lb3V0KHMpLGUoKSl9LGkpO24mJihzPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtjbGVhckludGVydmFsKG8pfSxuKSl9fWZ1bmN0aW9uIEYodCxlLGkpe3ZhciBuPXRoaXMscz10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLG89ZS5ocmVmLnNwbGl0KFwiI1wiKS5wb3AoKS50cmltKCksbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChvKTtpZighbClyZXR1cm4hMTt2YXIgcj1sLmNsb25lTm9kZSghMCk7ci5zdHlsZS5oZWlnaHQ9eC5pc051bWJlcihlLmhlaWdodCk/XCJcIi5jb25jYXQoZS5oZWlnaHQsXCJweFwiKTplLmhlaWdodCxyLnN0eWxlLm1heFdpZHRoPXguaXNOdW1iZXIoZS53aWR0aCk/XCJcIi5jb25jYXQoZS53aWR0aCxcInB4XCIpOmUud2lkdGgsayhyLFwiZ2lubGluZWQtY29udGVudFwiKSxzLmFwcGVuZENoaWxkKHIpLHRoaXMuZXZlbnRzW1wiaW5saW5lY2xvc2VcIitvXT1UKFwiY2xpY2tcIix7b25FbGVtZW50OnMucXVlcnlTZWxlY3RvckFsbChcIi5ndHJpZ2dlci1jbG9zZVwiKSx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLG4uY2xvc2UoKX19KSx4LmlzRnVuY3Rpb24oaSkmJmkoKX12YXIgVz1mdW5jdGlvbih0KXt2YXIgZT10O2lmKG51bGwhPT0odD10LnRvTG93ZXJDYXNlKCkpLm1hdGNoKC9cXC4oanBlZ3xqcGd8Z2lmfHBuZ3xhcG58d2VicHxzdmcpJC8pKXJldHVyblwiaW1hZ2VcIjtpZih0Lm1hdGNoKC8oeW91dHViZVxcLmNvbXx5b3V0dWJlLW5vY29va2llXFwuY29tKVxcL3dhdGNoXFw/dj0oW2EtekEtWjAtOVxcLV9dKykvKXx8dC5tYXRjaCgveW91dHVcXC5iZVxcLyhbYS16QS1aMC05XFwtX10rKS8pfHx0Lm1hdGNoKC8oeW91dHViZVxcLmNvbXx5b3V0dWJlLW5vY29va2llXFwuY29tKVxcL2VtYmVkXFwvKFthLXpBLVowLTlcXC1fXSspLykpcmV0dXJuXCJ2aWRlb1wiO2lmKHQubWF0Y2goL3ZpbWVvXFwuY29tXFwvKFswLTldKikvKSlyZXR1cm5cInZpZGVvXCI7aWYobnVsbCE9PXQubWF0Y2goL1xcLihtcDR8b2dnfHdlYm0pJC8pKXJldHVyblwidmlkZW9cIjtpZih0LmluZGV4T2YoXCIjXCIpPi0xJiZcIlwiIT09ZS5zcGxpdChcIiNcIikucG9wKCkudHJpbSgpKXJldHVyblwiaW5saW5lXCI7cmV0dXJuIHQuaW5jbHVkZXMoXCJnYWpheD10cnVlXCIpP1wiYWpheFwiOlwiZXh0ZXJuYWxcIn07ZnVuY3Rpb24gXygpe3ZhciB0PXRoaXM7aWYodGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkoXCJrZXlib2FyZFwiKSlyZXR1cm4hMTt0aGlzLmV2ZW50cy5rZXlib2FyZD1UKFwia2V5ZG93blwiLHtvbkVsZW1lbnQ6d2luZG93LHdpdGhDYWxsYmFjazpmdW5jdGlvbihlLGkpe3ZhciBuPShlPWV8fHdpbmRvdy5ldmVudCkua2V5Q29kZTtpZig5PT1uKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYnRuXCIpO2lmKCFvfHxvLmxlbmd0aDw9MClyZXR1cm47dmFyIGw9cyhvKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIEEodCxcImZvY3VzZWRcIil9KTtpZighbC5sZW5ndGgpe3ZhciByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYnRuW3RhYmluZGV4PVwiMFwiXScpO3JldHVybiB2b2lkKHImJihyLmZvY3VzKCksayhyLFwiZm9jdXNlZFwiKSkpfW8uZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gRSh0LFwiZm9jdXNlZFwiKX0pO3ZhciBhPWxbMF0uZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIik7YT1hfHxcIjBcIjt2YXIgYz1wYXJzZUludChhKSsxO2M+by5sZW5ndGgtMSYmKGM9XCIwXCIpO3ZhciBoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYnRuW3RhYmluZGV4PVwiJy5jb25jYXQoYywnXCJdJykpO2gmJihoLmZvY3VzKCksayhoLFwiZm9jdXNlZFwiKSl9Mzk9PW4mJnQubmV4dFNsaWRlKCksMzc9PW4mJnQucHJldlNsaWRlKCksMjc9PW4mJnQuY2xvc2UoKX19KX1mdW5jdGlvbiBqKCl7dmFyIHQ9dGhpcztpZih0aGlzLmV2ZW50cy5oYXNPd25Qcm9wZXJ0eShcInRvdWNoXCIpKXJldHVybiExO3ZhciBlLGksbixzPXEoKSxvPXMud2lkdGgsbD1zLmhlaWdodCxyPSExLGE9bnVsbCxoPW51bGwsdT1udWxsLGQ9ITEsZz0xLHA9MSx2PSExLGY9ITEsbT1udWxsLHk9bnVsbCxiPW51bGwseD1udWxsLHc9MCxTPTAsVD0hMSxDPSExLEw9e30sTT17fSxPPTAsej0wLE49dGhpcyxJPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xpZ2h0Ym94LXNsaWRlclwiKSxEPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ292ZXJsYXlcIiksWD1uZXcgYyhJLHt0b3VjaFN0YXJ0OmZ1bmN0aW9uKHQpe2lmKEEodC50YXJnZXRUb3VjaGVzWzBdLnRhcmdldCxcImdpbm5lci1jb250YWluZXJcIikpcmV0dXJuIHI9ITEsITE7cj0hMCxNPXQudGFyZ2V0VG91Y2hlc1swXSxMLnBhZ2VYPXQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCxMLnBhZ2VZPXQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSxPPXQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLHo9dC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFksYT1OLmFjdGl2ZVNsaWRlLGg9YS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxuPWEucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtaW5saW5lXCIpLHU9bnVsbCxBKGgsXCJnc2xpZGUtaW1hZ2VcIikmJih1PWgucXVlcnlTZWxlY3RvcihcImltZ1wiKSksRShELFwiZ3Jlc2V0XCIpfSx0b3VjaE1vdmU6ZnVuY3Rpb24odCl7aWYociYmKE09dC50YXJnZXRUb3VjaGVzWzBdLCF2JiYhZikpe2lmKG4mJm4ub2Zmc2V0SGVpZ2h0Pmwpe3ZhciBzPUwucGFnZVgtTS5wYWdlWDtpZihNYXRoLmFicyhzKTw9MTMpcmV0dXJuITF9ZD0hMDt2YXIgYSxjPXQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLGc9dC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkscD1PLWMsbT16LWc7aWYoTWF0aC5hYnMocCk+TWF0aC5hYnMobSk/KFQ9ITEsQz0hMCk6KEM9ITEsVD0hMCksZT1NLnBhZ2VYLUwucGFnZVgsdz0xMDAqZS9vLGk9TS5wYWdlWS1MLnBhZ2VZLFM9MTAwKmkvbCxUJiZ1JiYoYT0xLU1hdGguYWJzKGkpL2wsRC5zdHlsZS5vcGFjaXR5PWEpLEMmJihhPTEtTWF0aC5hYnMoZSkvbyxoLnN0eWxlLm9wYWNpdHk9YSksIXUpcmV0dXJuIEgoaCxcInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCh3LFwiJSwgMCwgMClcIikpO0goaCxcInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCh3LFwiJSwgXCIpLmNvbmNhdChTLFwiJSwgMClcIikpfX0sdG91Y2hFbmQ6ZnVuY3Rpb24oKXtpZihyKXtpZihkPSExLGZ8fHYpcmV0dXJuIGI9bSx2b2lkKHg9eSk7dmFyIGU9TWF0aC5hYnMocGFyc2VJbnQoUykpLGk9TWF0aC5hYnMocGFyc2VJbnQodykpO2lmKCEoZT4zNSYmdSkpcmV0dXJuIGU8MzUmJmk8MjU/KGsoRCxcImdyZXNldFwiKSxELnN0eWxlLm9wYWNpdHk9MSxWKGgpKTp2b2lkIDA7dC5jbG9zZSgpfX0sbXVsdGlwb2ludEVuZDpmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2PSExfSw1MCl9LG11bHRpcG9pbnRTdGFydDpmdW5jdGlvbigpe3Y9ITAsZz1wfHwxfSxwaW5jaDpmdW5jdGlvbih0KXtpZighdXx8ZClyZXR1cm4hMTt2PSEwLHUuc2NhbGVYPXUuc2NhbGVZPWcqdC56b29tO3ZhciBlPWcqdC56b29tO2lmKGY9ITAsZTw9MSlyZXR1cm4gZj0hMSxlPTEseD1udWxsLGI9bnVsbCxtPW51bGwseT1udWxsLHZvaWQgdS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiXCIpO2U+NC41JiYoZT00LjUpLHUuc3R5bGUudHJhbnNmb3JtPVwic2NhbGUzZChcIi5jb25jYXQoZSxcIiwgXCIpLmNvbmNhdChlLFwiLCAxKVwiKSxwPWV9LHByZXNzTW92ZTpmdW5jdGlvbih0KXtpZihmJiYhdil7dmFyIGU9TS5wYWdlWC1MLnBhZ2VYLGk9TS5wYWdlWS1MLnBhZ2VZO2ImJihlKz1iKSx4JiYoaSs9eCksbT1lLHk9aTt2YXIgbj1cInRyYW5zbGF0ZTNkKFwiLmNvbmNhdChlLFwicHgsIFwiKS5jb25jYXQoaSxcInB4LCAwKVwiKTtwJiYobis9XCIgc2NhbGUzZChcIi5jb25jYXQocCxcIiwgXCIpLmNvbmNhdChwLFwiLCAxKVwiKSksSCh1LG4pfX0sc3dpcGU6ZnVuY3Rpb24oZSl7aWYoIWYpaWYodil2PSExO2Vsc2V7aWYoXCJMZWZ0XCI9PWUuZGlyZWN0aW9uKXtpZih0LmluZGV4PT10LmVsZW1lbnRzLmxlbmd0aC0xKXJldHVybiBWKGgpO3QubmV4dFNsaWRlKCl9aWYoXCJSaWdodFwiPT1lLmRpcmVjdGlvbil7aWYoMD09dC5pbmRleClyZXR1cm4gVihoKTt0LnByZXZTbGlkZSgpfX19fSk7dGhpcy5ldmVudHMudG91Y2g9WH1mdW5jdGlvbiBIKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcIlwiO2lmKFwiXCI9PWUpcmV0dXJuIHQuc3R5bGUud2Via2l0VHJhbnNmb3JtPVwiXCIsdC5zdHlsZS5Nb3pUcmFuc2Zvcm09XCJcIix0LnN0eWxlLm1zVHJhbnNmb3JtPVwiXCIsdC5zdHlsZS5PVHJhbnNmb3JtPVwiXCIsdC5zdHlsZS50cmFuc2Zvcm09XCJcIiwhMTt0LnN0eWxlLndlYmtpdFRyYW5zZm9ybT1lLHQuc3R5bGUuTW96VHJhbnNmb3JtPWUsdC5zdHlsZS5tc1RyYW5zZm9ybT1lLHQuc3R5bGUuT1RyYW5zZm9ybT1lLHQuc3R5bGUudHJhbnNmb3JtPWV9ZnVuY3Rpb24gVih0KXt2YXIgZT1BKHQsXCJnc2xpZGUtbWVkaWFcIik/dDp0LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLGk9dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1kZXNjcmlwdGlvblwiKTtrKGUsXCJncmVzZXRcIiksSChlLFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIik7VChwLHtvbkVsZW1lbnQ6ZSxvbmNlOiEwLHdpdGhDYWxsYmFjazpmdW5jdGlvbih0LGkpe0UoZSxcImdyZXNldFwiKX19KTtlLnN0eWxlLm9wYWNpdHk9XCJcIixpJiYoaS5zdHlsZS5vcGFjaXR5PVwiXCIpfWZ1bmN0aW9uIEcodCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjUwLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxuPWk7aWYoKHQ9dC50cmltKCkpLmxlbmd0aDw9ZSlyZXR1cm4gdDt2YXIgcz10LnN1YnN0cigwLGUtMSk7cmV0dXJuIG4/cysnLi4uIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkZXNjLW1vcmVcIj4nK2krXCI8L2E+XCI6c31mdW5jdGlvbiBaKHQsZSl7dmFyIGk9dC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtbW9yZVwiKTtpZighaSlyZXR1cm4hMTtUKFwiY2xpY2tcIix7b25FbGVtZW50Omksd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsaSl7dC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBuPWRvY3VtZW50LmJvZHkscz1NKGksXCIuZ3NsaWRlLWRlc2NcIik7aWYoIXMpcmV0dXJuITE7cy5pbm5lckhUTUw9ZS5kZXNjcmlwdGlvbixrKG4sXCJnZGVzYy1vcGVuXCIpO3ZhciBvPVQoXCJjbGlja1wiLHtvbkVsZW1lbnQ6W24sTShzLFwiLmdzbGlkZS1kZXNjcmlwdGlvblwiKV0sd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsaSl7XCJhXCIhPT10LnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiYoRShuLFwiZ2Rlc2Mtb3BlblwiKSxrKG4sXCJnZGVzYy1jbG9zZWRcIikscy5pbm5lckhUTUw9ZS5zbWFsbERlc2NyaXB0aW9uLFoocyxlKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7RShuLFwiZ2Rlc2MtY2xvc2VkXCIpfSw0MDApLG8uZGVzdHJveSgpKX19KX19KX12YXIgUj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoaSl7ZSh0aGlzLHQpLHRoaXMuc2V0dGluZ3M9Yih5LGl8fHt9KSx0aGlzLmVmZmVjdHNDbGFzc2VzPXRoaXMuZ2V0QW5pbWF0aW9uQ2xhc3NlcygpLHRoaXMuc2xpZGVzRGF0YT17fX1yZXR1cm4gbih0LFt7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLmJhc2VFdmVudHM9VChcImNsaWNrXCIse29uRWxlbWVudDpcIi5cIi5jb25jYXQodGhpcy5zZXR0aW5ncy5zZWxlY3Rvciksd2l0aENhbGxiYWNrOmZ1bmN0aW9uKGUsaSl7ZS5wcmV2ZW50RGVmYXVsdCgpLHQub3BlbihpKX19KX19LHtrZXk6XCJvcGVuXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbDtpZih0aGlzLmVsZW1lbnRzPXRoaXMuZ2V0RWxlbWVudHModCksMD09dGhpcy5lbGVtZW50cy5sZW5ndGgpcmV0dXJuITE7dGhpcy5hY3RpdmVTbGlkZT1udWxsLHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXg9bnVsbCx0aGlzLnByZXZBY3RpdmVTbGlkZT1udWxsO3ZhciBlPXRoaXMuc2V0dGluZ3Muc3RhcnRBdDt0JiZ4LmlzTmlsKGUpJiYoZT10aGlzLmVsZW1lbnRzLmluZGV4T2YodCkpPDAmJihlPTApLHguaXNOaWwoZSkmJihlPTApLHRoaXMuYnVpbGQoKSxDKHRoaXMub3ZlcmxheSxcIm5vbmVcIj09dGhpcy5zZXR0aW5ncy5vcGVuRWZmZWN0P1wibm9uZVwiOnRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzLmZhZGUuaW4pO3ZhciBpPWRvY3VtZW50LmJvZHk7aWYoaS5zdHlsZS53aWR0aD1cIlwiLmNvbmNhdChpLm9mZnNldFdpZHRoLFwicHhcIiksayhpLFwiZ2xpZ2h0Ym94LW9wZW5cIiksayhnLFwiZ2xpZ2h0Ym94LW9wZW5cIiksdSYmKGsoZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC1tb2JpbGVcIiksdGhpcy5zZXR0aW5ncy5zbGlkZUVmZmVjdD1cInNsaWRlXCIpLHRoaXMuc2hvd1NsaWRlKGUsITApLDE9PXRoaXMuZWxlbWVudHMubGVuZ3RoPyh6KHRoaXMucHJldkJ1dHRvbikseih0aGlzLm5leHRCdXR0b24pKTooTyh0aGlzLnByZXZCdXR0b24pLE8odGhpcy5uZXh0QnV0dG9uKSksdGhpcy5saWdodGJveE9wZW49ITAseC5pc0Z1bmN0aW9uKHRoaXMuc2V0dGluZ3Mub25PcGVuKSYmdGhpcy5zZXR0aW5ncy5vbk9wZW4oKSx1JiZkJiZ0aGlzLnNldHRpbmdzLnRvdWNoTmF2aWdhdGlvbilyZXR1cm4gai5hcHBseSh0aGlzKSwhMTt0aGlzLnNldHRpbmdzLmtleWJvYXJkTmF2aWdhdGlvbiYmXy5hcHBseSh0aGlzKX19LHtrZXk6XCJzaG93U2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV07Tyh0aGlzLmxvYWRlciksdGhpcy5pbmRleD1wYXJzZUludChlKTt2YXIgbj10aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRcIik7biYmRShuLFwiY3VycmVudFwiKSx0aGlzLnNsaWRlQW5pbWF0ZU91dCgpO3ZhciBzPXRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3NsaWRlXCIpW2VdO2lmKEEocyxcImxvYWRlZFwiKSl0aGlzLnNsaWRlQW5pbWF0ZUluKHMsaSkseih0aGlzLmxvYWRlcik7ZWxzZXtPKHRoaXMubG9hZGVyKTt2YXIgbz1JKHRoaXMuZWxlbWVudHNbZV0sdGhpcy5zZXR0aW5ncyk7by5pbmRleD1lLHRoaXMuc2xpZGVzRGF0YVtlXT1vLEQuYXBwbHkodGhpcyxbcyxvLGZ1bmN0aW9uKCl7eih0LmxvYWRlciksdC5yZXNpemUoKSx0LnNsaWRlQW5pbWF0ZUluKHMsaSl9XSl9dGhpcy5zbGlkZURlc2NyaXB0aW9uPXMucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtZGVzY3JpcHRpb25cIiksdGhpcy5zbGlkZURlc2NyaXB0aW9uQ29udGFpbmVkPXRoaXMuc2xpZGVEZXNjcmlwdGlvbiYmQSh0aGlzLnNsaWRlRGVzY3JpcHRpb24ucGFyZW50Tm9kZSxcImdzbGlkZS1tZWRpYVwiKSx0aGlzLnByZWxvYWRTbGlkZShlKzEpLHRoaXMucHJlbG9hZFNsaWRlKGUtMSksRSh0aGlzLm5leHRCdXR0b24sXCJkaXNhYmxlZFwiKSxFKHRoaXMucHJldkJ1dHRvbixcImRpc2FibGVkXCIpLDA9PT1lP2sodGhpcy5wcmV2QnV0dG9uLFwiZGlzYWJsZWRcIik6ZT09PXRoaXMuZWxlbWVudHMubGVuZ3RoLTEmJiEwIT09dGhpcy5zZXR0aW5ncy5sb29wQXRFbmQmJmsodGhpcy5uZXh0QnV0dG9uLFwiZGlzYWJsZWRcIiksdGhpcy5hY3RpdmVTbGlkZT1zfX0se2tleTpcInByZWxvYWRTbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYodDwwfHx0PnRoaXMuZWxlbWVudHMubGVuZ3RoKXJldHVybiExO2lmKHguaXNOaWwodGhpcy5lbGVtZW50c1t0XSkpcmV0dXJuITE7dmFyIGk9dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbdF07aWYoQShpLFwibG9hZGVkXCIpKXJldHVybiExO3ZhciBuPUkodGhpcy5lbGVtZW50c1t0XSx0aGlzLnNldHRpbmdzKTtuLmluZGV4PXQsdGhpcy5zbGlkZXNEYXRhW3RdPW47dmFyIHM9bi5zb3VyY2V0eXBlO1widmlkZW9cIj09c3x8XCJleHRlcm5hbFwiPT1zP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtELmFwcGx5KGUsW2ksbl0pfSwyMDApOkQuYXBwbHkodGhpcyxbaSxuXSl9fSx7a2V5OlwicHJldlNsaWRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmluZGV4LTE7aWYodDwwKXJldHVybiExO3RoaXMuZ29Ub1NsaWRlKHQpfX0se2tleTpcIm5leHRTbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5pbmRleCsxO2lmKHQ+dGhpcy5lbGVtZW50cy5sZW5ndGgpcmV0dXJuITE7dGhpcy5nb1RvU2xpZGUodCl9fSx7a2V5OlwiZ29Ub1NsaWRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO3Q+LTEmJih0aGlzLnByZXZBY3RpdmVTbGlkZT10aGlzLmFjdGl2ZVNsaWRlLHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXg9dGhpcy5pbmRleCx0PHRoaXMuZWxlbWVudHMubGVuZ3RoP3RoaXMuc2hvd1NsaWRlKHQpOiEwPT09dGhpcy5zZXR0aW5ncy5sb29wQXRFbmQmJih0PTAsdGhpcy5zaG93U2xpZGUodCkpKX19LHtrZXk6XCJzbGlkZUFuaW1hdGVJblwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcyxuPXQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIikscz10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWRlc2NyaXB0aW9uXCIpLG89e2luZGV4OnRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXgsc2xpZGU6dGhpcy5wcmV2QWN0aXZlU2xpZGV9LGw9e2luZGV4OnRoaXMuaW5kZXgsc2xpZGU6dGhpcy5hY3RpdmVTbGlkZX07aWYobi5vZmZzZXRXaWR0aD4wJiZzJiYoeihzKSxzLnN0eWxlLmRpc3BsYXk9XCJcIiksRSh0LHRoaXMuZWZmZWN0c0NsYXNzZXMpLGUpQyh0LHRoaXMuc2V0dGluZ3Mub3BlbkVmZmVjdCxmdW5jdGlvbigpeyF1JiZpLnNldHRpbmdzLmF1dG9wbGF5VmlkZW9zJiZpLnBsYXlTbGlkZVZpZGVvKHQpLHguaXNGdW5jdGlvbihpLnNldHRpbmdzLmFmdGVyU2xpZGVDaGFuZ2UpJiZpLnNldHRpbmdzLmFmdGVyU2xpZGVDaGFuZ2UuYXBwbHkoaSxbbyxsXSl9KTtlbHNle3ZhciByPXRoaXMuc2V0dGluZ3Muc2xpZGVFZmZlY3QsYT1cIm5vbmVcIiE9PXI/dGhpcy5zZXR0aW5ncy5jc3NFZmVjdHNbcl0uaW46cjt0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4PnRoaXMuaW5kZXgmJlwic2xpZGVcIj09dGhpcy5zZXR0aW5ncy5zbGlkZUVmZmVjdCYmKGE9dGhpcy5zZXR0aW5ncy5jc3NFZmVjdHMuc2xpZGVfYmFjay5pbiksQyh0LGEsZnVuY3Rpb24oKXshdSYmaS5zZXR0aW5ncy5hdXRvcGxheVZpZGVvcyYmaS5wbGF5U2xpZGVWaWRlbyh0KSx4LmlzRnVuY3Rpb24oaS5zZXR0aW5ncy5hZnRlclNsaWRlQ2hhbmdlKSYmaS5zZXR0aW5ncy5hZnRlclNsaWRlQ2hhbmdlLmFwcGx5KGksW28sbF0pfSl9c2V0VGltZW91dChmdW5jdGlvbigpe2kucmVzaXplKHQpfSwxMDApLGsodCxcImN1cnJlbnRcIil9fSx7a2V5Olwic2xpZGVBbmltYXRlT3V0XCIsdmFsdWU6ZnVuY3Rpb24oKXtpZighdGhpcy5wcmV2QWN0aXZlU2xpZGUpcmV0dXJuITE7dmFyIHQ9dGhpcy5wcmV2QWN0aXZlU2xpZGU7RSh0LHRoaXMuZWZmZWN0c0NsYXNzZXMpLGsodCxcInByZXZcIik7dmFyIGU9dGhpcy5zZXR0aW5ncy5zbGlkZUVmZmVjdCxpPVwibm9uZVwiIT09ZT90aGlzLnNldHRpbmdzLmNzc0VmZWN0c1tlXS5vdXQ6ZTt0aGlzLnN0b3BTbGlkZVZpZGVvKHQpLHguaXNGdW5jdGlvbih0aGlzLnNldHRpbmdzLmJlZm9yZVNsaWRlQ2hhbmdlKSYmdGhpcy5zZXR0aW5ncy5iZWZvcmVTbGlkZUNoYW5nZS5hcHBseSh0aGlzLFt7aW5kZXg6dGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleCxzbGlkZTp0aGlzLnByZXZBY3RpdmVTbGlkZX0se2luZGV4OnRoaXMuaW5kZXgsc2xpZGU6dGhpcy5hY3RpdmVTbGlkZX1dKSx0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4PnRoaXMuaW5kZXgmJlwic2xpZGVcIj09dGhpcy5zZXR0aW5ncy5zbGlkZUVmZmVjdCYmKGk9dGhpcy5zZXR0aW5ncy5jc3NFZmVjdHMuc2xpZGVfYmFjay5vdXQpLEModCxpLGZ1bmN0aW9uKCl7dmFyIGU9dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxpPXQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtZGVzY3JpcHRpb25cIik7ZS5zdHlsZS50cmFuc2Zvcm09XCJcIixFKGUsXCJncmVzZXRcIiksZS5zdHlsZS5vcGFjaXR5PVwiXCIsaSYmKGkuc3R5bGUub3BhY2l0eT1cIlwiKSxFKHQsXCJwcmV2XCIpfSl9fSx7a2V5Olwic3RvcFNsaWRlVmlkZW9cIix2YWx1ZTpmdW5jdGlvbih0KXt4LmlzTnVtYmVyKHQpJiYodD10aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmdzbGlkZVwiKVt0XSk7dmFyIGU9dD90LnF1ZXJ5U2VsZWN0b3IoXCIuZ3ZpZGVvXCIpOm51bGw7aWYoIWUpcmV0dXJuITE7dmFyIGk9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO2lmKG0mJnguaGFzKG0saSkpe3ZhciBuPW1baV07biYmbi5wbGF5JiZuLnBhdXNlKCl9fX0se2tleTpcInBsYXlTbGlkZVZpZGVvXCIsdmFsdWU6ZnVuY3Rpb24odCl7eC5pc051bWJlcih0KSYmKHQ9dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbdF0pO3ZhciBlPXQucXVlcnlTZWxlY3RvcihcIi5ndmlkZW9cIik7aWYoIWUpcmV0dXJuITE7dmFyIGk9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO2lmKG0mJnguaGFzKG0saSkpe3ZhciBuPW1baV07biYmbi5wbGF5JiZuLnBsYXkoKX19fSx7a2V5Olwic2V0RWxlbWVudHNcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLnNldHRpbmdzLmVsZW1lbnRzPXR9fSx7a2V5OlwiZ2V0RWxlbWVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsO2lmKHRoaXMuZWxlbWVudHM9W10sIXguaXNOaWwodGhpcy5zZXR0aW5ncy5lbGVtZW50cykmJnguaXNBcnJheSh0aGlzLnNldHRpbmdzLmVsZW1lbnRzKSlyZXR1cm4gdGhpcy5zZXR0aW5ncy5lbGVtZW50czt2YXIgZT0hMTtpZihudWxsIT09dCl7dmFyIGk9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdhbGxlcnlcIik7aSYmXCJcIiE9PWkmJihlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWdhbGxlcnk9XCInLmNvbmNhdChpLCdcIl0nKSkpfXJldHVybiAwPT1lJiYoZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiLmNvbmNhdCh0aGlzLnNldHRpbmdzLnNlbGVjdG9yKSkpLGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSl9fSx7a2V5OlwiZ2V0QWN0aXZlU2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmdzbGlkZVwiKVt0aGlzLmluZGV4XX19LHtrZXk6XCJnZXRBY3RpdmVTbGlkZUluZGV4XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbmRleH19LHtrZXk6XCJnZXRBbmltYXRpb25DbGFzc2VzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1bXTtmb3IodmFyIGUgaW4gdGhpcy5zZXR0aW5ncy5jc3NFZmVjdHMpaWYodGhpcy5zZXR0aW5ncy5jc3NFZmVjdHMuaGFzT3duUHJvcGVydHkoZSkpe3ZhciBpPXRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzW2VdO3QucHVzaChcImdcIi5jb25jYXQoaS5pbikpLHQucHVzaChcImdcIi5jb25jYXQoaS5vdXQpKX1yZXR1cm4gdC5qb2luKFwiIFwiKX19LHtrZXk6XCJidWlsZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztpZih0aGlzLmJ1aWx0KXJldHVybiExO3ZhciBlPXguaGFzKHRoaXMuc2V0dGluZ3Muc3ZnLFwibmV4dFwiKT90aGlzLnNldHRpbmdzLnN2Zy5uZXh0OlwiXCIsaT14Lmhhcyh0aGlzLnNldHRpbmdzLnN2ZyxcInByZXZcIik/dGhpcy5zZXR0aW5ncy5zdmcucHJldjpcIlwiLG49eC5oYXModGhpcy5zZXR0aW5ncy5zdmcsXCJjbG9zZVwiKT90aGlzLnNldHRpbmdzLnN2Zy5jbG9zZTpcIlwiLHM9dGhpcy5zZXR0aW5ncy5saWdodGJveEh0bWw7cz1MKHM9KHM9KHM9cy5yZXBsYWNlKC97bmV4dFNWR30vZyxlKSkucmVwbGFjZSgve3ByZXZTVkd9L2csaSkpLnJlcGxhY2UoL3tjbG9zZVNWR30vZyxuKSksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTt2YXIgbz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsaWdodGJveC1ib2R5XCIpO3RoaXMubW9kYWw9bzt2YXIgbD1vLnF1ZXJ5U2VsZWN0b3IoXCIuZ2Nsb3NlXCIpO3RoaXMucHJldkJ1dHRvbj1vLnF1ZXJ5U2VsZWN0b3IoXCIuZ3ByZXZcIiksdGhpcy5uZXh0QnV0dG9uPW8ucXVlcnlTZWxlY3RvcihcIi5nbmV4dFwiKSx0aGlzLm92ZXJsYXk9by5xdWVyeVNlbGVjdG9yKFwiLmdvdmVybGF5XCIpLHRoaXMubG9hZGVyPW8ucXVlcnlTZWxlY3RvcihcIi5nbG9hZGVyXCIpLHRoaXMuc2xpZGVzQ29udGFpbmVyPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xpZ2h0Ym94LXNsaWRlclwiKSx0aGlzLmV2ZW50cz17fSxrKHRoaXMubW9kYWwsXCJnbGlnaHRib3gtXCIrdGhpcy5zZXR0aW5ncy5za2luKSx0aGlzLnNldHRpbmdzLmNsb3NlQnV0dG9uJiZsJiYodGhpcy5ldmVudHMuY2xvc2U9VChcImNsaWNrXCIse29uRWxlbWVudDpsLHdpdGhDYWxsYmFjazpmdW5jdGlvbihlLGkpe2UucHJldmVudERlZmF1bHQoKSx0LmNsb3NlKCl9fSkpLGwmJiF0aGlzLnNldHRpbmdzLmNsb3NlQnV0dG9uJiZsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobCksdGhpcy5uZXh0QnV0dG9uJiYodGhpcy5ldmVudHMubmV4dD1UKFwiY2xpY2tcIix7b25FbGVtZW50OnRoaXMubmV4dEJ1dHRvbix3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24oZSxpKXtlLnByZXZlbnREZWZhdWx0KCksdC5uZXh0U2xpZGUoKX19KSksdGhpcy5wcmV2QnV0dG9uJiYodGhpcy5ldmVudHMucHJldj1UKFwiY2xpY2tcIix7b25FbGVtZW50OnRoaXMucHJldkJ1dHRvbix3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24oZSxpKXtlLnByZXZlbnREZWZhdWx0KCksdC5wcmV2U2xpZGUoKX19KSksdGhpcy5zZXR0aW5ncy5jbG9zZU9uT3V0c2lkZUNsaWNrJiYodGhpcy5ldmVudHMub3V0Q2xvc2U9VChcImNsaWNrXCIse29uRWxlbWVudDpvLHdpdGhDYWxsYmFjazpmdW5jdGlvbihlLGkpe0EoZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC1tb2JpbGVcIil8fE0oZS50YXJnZXQsXCIuZ2lubmVyLWNvbnRhaW5lclwiKXx8TShlLnRhcmdldCxcIi5nYnRuXCIpfHxBKGUudGFyZ2V0LFwiZ25leHRcIil8fEEoZS50YXJnZXQsXCJncHJldlwiKXx8dC5jbG9zZSgpfX0pKSx3KHRoaXMuZWxlbWVudHMsZnVuY3Rpb24oKXt2YXIgZT1MKHQuc2V0dGluZ3Muc2xpZGVIdG1sKTt0LnNsaWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlKX0pLGQmJmsoZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC10b3VjaFwiKSx0aGlzLmV2ZW50cy5yZXNpemU9VChcInJlc2l6ZVwiLHtvbkVsZW1lbnQ6d2luZG93LHdpdGhDYWxsYmFjazpmdW5jdGlvbigpe3QucmVzaXplKCl9fSksdGhpcy5idWlsdD0hMH19LHtrZXk6XCJyZXNpemVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsO2lmKHQ9dHx8dGhpcy5hY3RpdmVTbGlkZSxkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoPVwiXCIsZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aD1cIlwiLmNvbmNhdChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLFwicHhcIiksdCYmIUEodCxcInpvb21lZFwiKSl7dmFyIGU9cSgpLGk9dC5xdWVyeVNlbGVjdG9yKFwiLmd2aWRlby13cmFwcGVyXCIpLG49dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1pbWFnZVwiKSxzPXRoaXMuc2xpZGVEZXNjcmlwdGlvbixvPWUud2lkdGgsbD1lLmhlaWdodDtpZihvPD03Njg/ayhkb2N1bWVudC5ib2R5LFwiZ2xpZ2h0Ym94LW1vYmlsZVwiKTpFKGRvY3VtZW50LmJvZHksXCJnbGlnaHRib3gtbW9iaWxlXCIpLGl8fG4pe3ZhciByPSExO2lmKHMmJihBKHMsXCJkZXNjcmlwdGlvbi1ib3R0b21cIil8fEEocyxcImRlc2NyaXB0aW9uLXRvcFwiKSkmJiFBKHMsXCJnYWJzb2x1dGVcIikmJihyPSEwKSxuKWlmKG88PTc2OCl7dmFyIGE9bi5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO2Euc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIlwiKX1lbHNlIGlmKHIpe3ZhciBjPXMub2Zmc2V0SGVpZ2h0LGg9dGhpcy5zbGlkZXNEYXRhW3RoaXMuaW5kZXhdLndpZHRoO2g9aDw9bz9oK1wicHhcIjpcIjEwMCVcIjt2YXIgdT1uLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7dS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwibWF4LWhlaWdodDogY2FsYygxMDB2aCAtIFwiLmNvbmNhdChjLFwicHgpXCIpKSxzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJtYXgtd2lkdGg6IFwiLmNvbmNhdCh1Lm9mZnNldFdpZHRoLFwicHg7XCIpKX1pZihpKXt2YXIgZD10aGlzLnNldHRpbmdzLnBseXIucmF0aW8uc3BsaXQoXCI6XCIpLGc9dGhpcy5zbGlkZXNEYXRhW3RoaXMuaW5kZXhdLndpZHRoLHA9Zy8ocGFyc2VJbnQoZFswXSkvcGFyc2VJbnQoZFsxXSkpO2lmKHA9TWF0aC5mbG9vcihwKSxyJiYobC09cy5vZmZzZXRIZWlnaHQpLGw8cCYmbz5nKXt2YXIgdj1pLm9mZnNldFdpZHRoLGY9aS5vZmZzZXRIZWlnaHQsbT1sL2YseT17d2lkdGg6diptLGhlaWdodDpmKm19O2kucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwibWF4LXdpZHRoOiBcIi5jb25jYXQoeS53aWR0aCxcInB4XCIpKSxyJiZzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJtYXgtd2lkdGg6IFwiLmNvbmNhdCh5LndpZHRoLFwicHg7XCIpKX1lbHNlIGkucGFyZW50Tm9kZS5zdHlsZS5tYXhXaWR0aD1cIlwiLmNvbmNhdChnLFwicHhcIiksciYmcy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwibWF4LXdpZHRoOiBcIi5jb25jYXQoZyxcInB4O1wiKSl9fX19fSx7a2V5OlwicmVsb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmluaXQoKX19LHtrZXk6XCJjbG9zZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztpZih0aGlzLmNsb3NpbmcpcmV0dXJuITE7dGhpcy5jbG9zaW5nPSEwLHRoaXMuc3RvcFNsaWRlVmlkZW8odGhpcy5hY3RpdmVTbGlkZSksayh0aGlzLm1vZGFsLFwiZ2xpZ2h0Ym94LWNsb3NpbmdcIiksQyh0aGlzLm92ZXJsYXksXCJub25lXCI9PXRoaXMuc2V0dGluZ3Mub3BlbkVmZmVjdD9cIm5vbmVcIjp0aGlzLnNldHRpbmdzLmNzc0VmZWN0cy5mYWRlLm91dCksQyh0aGlzLmFjdGl2ZVNsaWRlLHRoaXMuc2V0dGluZ3MuY2xvc2VFZmZlY3QsZnVuY3Rpb24oKXtpZih0LmFjdGl2ZVNsaWRlPW51bGwsdC5wcmV2QWN0aXZlU2xpZGVJbmRleD1udWxsLHQucHJldkFjdGl2ZVNsaWRlPW51bGwsdC5idWlsdD0hMSx0LmV2ZW50cyl7Zm9yKHZhciBlIGluIHQuZXZlbnRzKXQuZXZlbnRzLmhhc093blByb3BlcnR5KGUpJiZ0LmV2ZW50c1tlXS5kZXN0cm95KCk7dC5ldmVudHM9bnVsbH12YXIgaT1kb2N1bWVudC5ib2R5O0UoZyxcImdsaWdodGJveC1vcGVuXCIpLEUoaSxcImdsaWdodGJveC1vcGVuIHRvdWNoaW5nIGdkZXNjLW9wZW4gZ2xpZ2h0Ym94LXRvdWNoIGdsaWdodGJveC1tb2JpbGVcIiksaS5zdHlsZS53aWR0aD1cIlwiLHQubW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0Lm1vZGFsKSx4LmlzRnVuY3Rpb24odC5zZXR0aW5ncy5vbkNsb3NlKSYmdC5zZXR0aW5ncy5vbkNsb3NlKCksdC5jbG9zaW5nPW51bGx9KX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmNsb3NlKCksdGhpcy5iYXNlRXZlbnRzLmRlc3Ryb3koKX19XSksdH0oKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sZT1uZXcgUih0KTtyZXR1cm4gZS5pbml0KCksZX19KTsiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvLyBNYWluIHNjcmlwdHMgZmlsZVxuaW1wb3J0ICcuL2pzL2luZGV4JztcblxuLy8gTWFpbiBzdHlsZXMgZmlsZVxuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XG5cbi8vIEltYWdlc1xuaW1wb3J0ICcuL21lZGlhL3N5bGl1cy1sb2dvLnBuZyc7XG5cbi8vIEZvbnQgYXdlc29tZSBpY29uc1xuaW1wb3J0ICcuL2pzL2ZvbnRhd2Vzb21lJztcbiIsIi8vIEZvbnRBd2Vzb21lIEljb25zXG4vLyBJbXBvcnQgaWNvbnMgb25lIGJ5IG9uZSB0byByZWR1Y2Ugc2l6ZSBvZiB0aGUgb3V0cHV0XG5pbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTdGFyJztcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0JhZyc7XG5pbXBvcnQgeyBmYUNoZWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2snO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlJztcbmltcG9ydCB7IGZhSW5mb0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUluZm9DaXJjbGUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGV2cm9uVXAnO1xuaW1wb3J0IHsgZmFNYXBNYXJrZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNYXBNYXJrZXJBbHQnO1xuaW1wb3J0IHsgZmFTaHV0dGxlVmFuIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2h1dHRsZVZhbic7XG5pbXBvcnQgeyBmYUNyZWRpdENhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkJztcbmltcG9ydCB7IGZhRmxhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZsYWcnO1xuaW1wb3J0IHsgZmFDY01hc3RlcmNhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NNYXN0ZXJjYXJkJztcbmltcG9ydCB7IGZhQ2NWaXNhIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjVmlzYSc7XG5pbXBvcnQgeyBmYUNjUGF5cGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsJztcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaCc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzJztcbmltcG9ydCB7IGZhUGVuY2lsQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGVuY2lsQWx0JztcbmltcG9ydCB7IGZhU3luY0FsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQnO1xuXG5saWJyYXJ5LmFkZChmYVN0YXIsIGZhU2hvcHBpbmdCYWcsIGZhQ2hlY2ssIGZhRXhjbGFtYXRpb25DaXJjbGUsIGZhSW5mb0NpcmNsZSwgZmFDaGV2cm9uVXAsIGZhTWFwTWFya2VyQWx0LCBmYVNodXR0bGVWYW4sIGZhQ3JlZGl0Q2FyZCwgZmFGbGFnLCBmYUNjTWFzdGVyY2FyZCwgZmFDY1Zpc2EsIGZhQ2NQYXlwYWwsIGZhVGltZXMsIGZhU2VhcmNoLCBmYVBsdXMsIGZhUGVuY2lsQWx0LCBmYVN5bmNBbHQpO1xuZG9tLndhdGNoKCk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnYm9vdHN0cmFwLm5hdGl2ZS9kaXN0L2Jvb3RzdHJhcC1uYXRpdmUtdjQnO1xuXG5pbXBvcnQgU3lsaXVzUmF0aW5nIGZyb20gJy4vc3lsaXVzLXJhdGluZyc7XG5pbXBvcnQgU3lsaXVzVG9nZ2xlIGZyb20gJy4vc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4vc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0JztcbmltcG9ydCBTeWxpdXNBcGlUb2dnbGUgZnJvbSAnLi9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi9zeWxpdXMtYXBpLWxvZ2luJztcbmltcG9ydCBTeWxpdXNWYXJpYW50c1ByaWNlcyBmcm9tICcuL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRJbWFnZXMgZnJvbSAnLi9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuaW1wb3J0IFN5bGl1c1Byb3ZpbmNlRmllbGQgZnJvbSAnLi9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4vc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgU3lsaXVzTG9hZGFibGVGb3JtcyBmcm9tICcuL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5cbi8vIEdsb2JhbCBheGlvcyBzZXR0aW5nc1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0LmFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gTGlnaHRib3hcbiAgY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHsgc2VsZWN0b3I6ICdnbGlnaHRib3gnIH0pO1xuXG4gIC8vIEFkZCB0byBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZm9ybVwiXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzQWRkVG9DYXJ0KGVsKSk7XG5cbiAgLy8gUmVtb3ZlIGZyb20gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1JlbW92ZUZyb21DYXJ0KGVsKSk7XG5cbiAgLy8gUHJvdmluY2UgZmllbGRcbiAgU3lsaXVzUHJvdmluY2VGaWVsZCgpO1xuXG4gIC8vIEFkZHJlc3MgYm9va1xuICBjb25zdCBzeWxpdXNTaGlwcGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtc2hpcHBpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzU2hpcHBpbmdBZGRyZXNzICYmIHN5bGl1c1NoaXBwaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyk7XG4gIH1cbiAgY29uc3Qgc3lsaXVzQmlsbGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtYmlsbGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNCaWxsaW5nQWRkcmVzcyAmJiBzeWxpdXNCaWxsaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c0JpbGxpbmdBZGRyZXNzKTtcbiAgfVxuXG4gIC8vIFZhcmlhbnQgcHJpY2VzXG4gIFN5bGl1c1ZhcmlhbnRzUHJpY2VzKCk7XG5cbiAgLy8gU3RhciByYXRpbmdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmF0aW5nXScpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXcgU3lsaXVzUmF0aW5nKGVsZW0sIHtcbiAgICAgIG9uUmF0ZSh2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3lsaXVzX3Byb2R1Y3RfcmV2aWV3X3JhdGluZ18ke3ZhbHVlIC0gMX1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZSBhbmQgbG9naW4gZnJvbSBjaGVja291dFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpIHtcbiAgICBTeWxpdXNBcGlUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJlbWFpbFwiXScpKTtcbiAgICBTeWxpdXNBcGlMb2dpbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYmlsbGluZyBhZGRyZXNzIG9uIHRoZSBjaGVja291dCBwYWdlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXRvZ2dsZV0nKS5mb3JFYWNoKGVsZW0gPT4gbmV3IFN5bGl1c1RvZ2dsZShlbGVtKSk7XG5cbiAgLy8gUHJvZHVjdCBpbWFnZXMgZm9yIHZhcmlhbnRzXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YXJpYW50LW9wdGlvbnNdLCBbZGF0YS12YXJpYW50LWNvZGVdJykpIHsgbmV3IFN5bGl1c1ZhcmlhbnRJbWFnZXMoKTsgfVxuXG4gIC8vIExvYWRhYmxlIGZvcm1zXG4gIFN5bGl1c0xvYWRhYmxlRm9ybXMoKTtcbn0pO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZGlyZWN0Jyk7XG4gIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgc2VyaWFsaXplKGVsZW1lbnQpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmw7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3IucmVzcG9uc2UuZGF0YSkuZm9yRWFjaCgoWywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgKz0gbWVzc2FnZTtcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkVG9DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IHBhcnNlS2V5ID0gZnVuY3Rpb24gcGFyc2VLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKF9cXHcpL2csIHdvcmRzID0+IHdvcmRzWzFdLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuY29uc3QgU3lsaXVzQWRkcmVzc0Jvb2sgPSBmdW5jdGlvbiBTeWxpdXNBZGRyZXNzQm9vayhlbCkge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gIGNvbnN0IGZpbmRCeU5hbWUgPSBmdW5jdGlvbiBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZSo9JHtwYXJzZUtleShuYW1lKX1dYCk7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBjaG9pY2UgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBjaG9pY2VEYXRhID0ge307XG5cbiAgICAgIFsuLi5jaG9pY2UuYXR0cmlidXRlc10uZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoYXR0ci5uYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcbiAgICAgICAgICBjb25zdCBjYW1lbENhc2VkID0gYXR0ci5uYW1lLnJlcGxhY2UoJ2RhdGEtJywgJycpLnJlcGxhY2UoLy0oW2Etel0pL2csIGcgPT4gZ1sxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBjaG9pY2VEYXRhW2NhbWVsQ2FzZWRdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgcHJvdmluY2VDb2RlLCBwcm92aW5jZU5hbWUgfSA9IGNob2ljZURhdGE7XG4gICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5jbG9zZXN0KCdbZGF0YS1qcy1hZGRyZXNzLWJvb2tdJykucXVlcnlTZWxlY3RvcignLnByb3ZpbmNlLWNvbnRhaW5lcicpO1xuXG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGNob2ljZURhdGEpLmZvckVhY2goKFtwcm9wZXJ0eSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmluZEJ5TmFtZShwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ2NvdW50cnlDb2RlJykgIT09IC0xKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlQ29kZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VDb2RlJyk7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZU5hbWVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICAgICAgICBpZiAoIXByb3ZpbmNlQ29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgaWYgKHByb3ZpbmNlQ29kZUZpZWxkICYmIHByb3ZpbmNlQ29kZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VDb2RlICE9PSAnJyB8fCBwcm92aW5jZUNvZGUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlQ29kZUZpZWxkLnZhbHVlID0gcHJvdmluY2VDb2RlO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3ZpbmNlTmFtZUZpZWxkICYmIHByb3ZpbmNlTmFtZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VOYW1lICE9PSAnJyB8fCBwcm92aW5jZU5hbWUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlTmFtZUZpZWxkLnZhbHVlID0gcHJvdmluY2VOYW1lO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZHJlc3NCb29rO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c0FwaUxvZ2luID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2lnbkluQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gIGNvbnN0IHZhbGlkYXRpb25GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gIGNvbnN0IHVybCA9IHNpZ25JbkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tdXJsJyk7XG4gIGNvbnN0IGVtYWlsRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuTmFtZSA9IGNzcmZUb2tlbkZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ191c2VybmFtZScsIGVtYWlsRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ19wYXNzd29yZCcsIHBhc3N3b3JkRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoW2NzcmZUb2tlbk5hbWVdLCBjc3JmVG9rZW5GaWVsZC52YWx1ZSk7XG5cbiAgICBheGlvcy5wb3N0KHVybCwgcGFyYW1zKVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmlubmVySFRNTCA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaUxvZ2luO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcblxuY29uc3QgU3lsaXVzQXBpVG9nZ2xlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tY2hlY2stZW1haWwtdXJsJyk7XG4gIGNvbnN0IHRvZ2dsZWFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJmb3JtXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRocm90dGxlKChlKSA9PiB7XG4gICAgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgYXhpb3MuZ2V0KHVybCwgeyBwYXJhbXM6IHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTsgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7IH0pO1xuICAgIH1cbiAgfSwgMTUwMCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybXMgPSBmdW5jdGlvbiBTeWxpdXNMb2FkYWJsZUZvcm1zKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0ubG9hZGFibGUnKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0xvYWRhYmxlRm9ybXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgZ2V0UHJvdmluY2VJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHZhbHVlU2VsZWN0b3IpIHtcbiAgY29uc3QgdmFsID0gdmFsdWVTZWxlY3RvciA/IHZhbHVlU2VsZWN0b3IudmFsdWUgOiBudWxsO1xuICByZXR1cm4gIXZhbCB8fCB2YWwgPT0gdW5kZWZpbmVkID8gJycgOiBgdmFsdWU9XCIke3ZhbH1cImA7XG59O1xuXG5cbmNvbnN0IFN5bGl1c1Byb3ZpbmNlRmllbGQgPSBmdW5jdGlvbiBTeWxpdXNQcm92aW5jZUZpZWxkKCkge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWUkPVwiW2NvdW50cnlDb2RlXVwiXScpO1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgY291bnRyeVNlbGVjdC5mb3JFYWNoKChjb3VudHJ5U2VsZWN0SXRlbSkgPT4ge1xuICAgIGNvdW50cnlTZWxlY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJycgfHwgc2VsZWN0LnZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm92aW5jZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsICcnKTtcblxuICAgICAgYXhpb3MuZ2V0KHByb3ZpbmNlQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgeyBwYXJhbXM6IHsgY291bnRyeUNvZGU6IHNlbGVjdC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmNvbnRlbnQuaW5kZXhPZignc2VsZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZVNlbGVjdFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKChcbiAgICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0ID4gb3B0aW9uW3NlbGVjdGVkJD1cInNlbGVjdGVkXCJdJylcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGROYW1lfVwiJHtwcm92aW5jZVNlbGVjdFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGRJZH1cImApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCInLCAnb3B0aW9uIHZhbHVlPVwiXCInKVxuICAgICAgICAgICAgICAucmVwbGFjZShgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gLCBgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUlucHV0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUocHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VJbnB1dEZpZWxkTmFtZX1cIiR7cHJvdmluY2VJbnB1dFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZElkfVwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY291bnRyeVNlbGVjdEl0ZW0udmFsdWUgIT09ICcnKSB7XG4gICAgICBjb3VudHJ5U2VsZWN0SXRlbS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUHJvdmluY2VGaWVsZDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTsgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi96ZXRhbWVkcy10aGVtZS9pbWFnZXMvc3lsaXVzLWxvZ28uYWM0YWMwOTQucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==