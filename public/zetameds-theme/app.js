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

__webpack_require__(/*! ./img/zetameds-white-logo.png */ "./themes/ZetaMeds/assets/img/zetameds-white-logo.png");

__webpack_require__(/*! ./img/headerflag.jpg */ "./themes/ZetaMeds/assets/img/headerflag.jpg");

/***/ }),

/***/ "./themes/ZetaMeds/assets/img/headerflag.jpg":
/*!***************************************************!*\
  !*** ./themes/ZetaMeds/assets/img/headerflag.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/zetameds-theme/images/headerflag.cfecdfe4.jpg";

/***/ }),

/***/ "./themes/ZetaMeds/assets/img/zetameds-white-logo.png":
/*!************************************************************!*\
  !*** ./themes/ZetaMeds/assets/img/zetameds-white-logo.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/zetameds-theme/images/zetameds-white-logo.f9fd3e95.png";

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

/***/ "./themes/ZetaMeds/assets/scss/index.scss":
/*!************************************************!*\
  !*** ./themes/ZetaMeds/assets/scss/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC5uYXRpdmUvZGlzdC9ib290c3RyYXAtbmF0aXZlLXY0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtLXNlcmlhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2xpZ2h0Ym94L2Rpc3QvanMvZ2xpZ2h0Ym94Lm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLnRocm90dGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2ltZy9oZWFkZXJmbGFnLmpwZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2ltZy96ZXRhbWVkcy13aGl0ZS1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9aZXRhTWVkcy9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9aZXRhTWVkcy9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL1pldGFNZWRzL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9aZXRhTWVkcy9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwicG9zdCIsImFjY2VwdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdsaWdodGJveCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInN5bGl1c1NoaXBwaW5nQWRkcmVzcyIsInF1ZXJ5U2VsZWN0b3IiLCJzeWxpdXNCaWxsaW5nQWRkcmVzcyIsImVsZW0iLCJTeWxpdXNSYXRpbmciLCJvblJhdGUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJTeWxpdXNUb2dnbGUiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwiU3lsaXVzQWRkVG9DYXJ0IiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJlIiwicmVxdWVzdCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyb3IiLCJyZW1vdmUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiaW5uZXJIVE1MIiwicGFyc2VLZXkiLCJrZXkiLCJyZXBsYWNlIiwid29yZHMiLCJ0b1VwcGVyQ2FzZSIsIlN5bGl1c0FkZHJlc3NCb29rIiwic2VsZWN0IiwiZmluZEJ5TmFtZSIsIm5hbWUiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiaXRlbSIsImNob2ljZSIsImN1cnJlbnRUYXJnZXQiLCJjaG9pY2VEYXRhIiwiYXR0cmlidXRlcyIsImF0dHIiLCJzdGFydHNXaXRoIiwiY2FtZWxDYXNlZCIsImciLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJwcm92aW5jZUNvbnRhaW5lciIsImNsb3Nlc3QiLCJpbnB1dCIsInByb3BlcnR5IiwiZmllbGQiLCJpbmRleE9mIiwiZGlzcGF0Y2hFdmVudCIsImV4aXN0cyIsInNldEludGVydmFsIiwicHJvdmluY2VDb2RlRmllbGQiLCJwcm92aW5jZU5hbWVGaWVsZCIsImhhc0F0dHJpYnV0ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJTeWxpdXNBcGlMb2dpbiIsInNpZ25JbkJ1dHRvbiIsInZhbGlkYXRpb25GaWVsZCIsImVtYWlsRmllbGQiLCJwYXNzd29yZEZpZWxkIiwiY3NyZlRva2VuRmllbGQiLCJjc3JmVG9rZW5OYW1lIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicmVsb2FkIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJ0YXJnZXQiLCJnZXQiLCJlbWFpbCIsIlN5bGl1c0xvYWRhYmxlRm9ybXMiLCJvdmVybGF5IiwiZm9ybSIsImFwcGVuZENoaWxkIiwiZ2V0UHJvdmluY2VJbnB1dFZhbHVlIiwidmFsdWVTZWxlY3RvciIsInZhbCIsIlN5bGl1c1Byb3ZpbmNlRmllbGQiLCJjb3VudHJ5U2VsZWN0IiwiY291bnRyeVNlbGVjdEl0ZW0iLCJldmVudCIsIm5leHRFbGVtZW50U2libGluZyIsInByb3ZpbmNlU2VsZWN0RmllbGROYW1lIiwicHJvdmluY2VJbnB1dEZpZWxkTmFtZSIsInByb3ZpbmNlU2VsZWN0RmllbGRJZCIsInByb3ZpbmNlSW5wdXRGaWVsZElkIiwic2V0QXR0cmlidXRlIiwiY291bnRyeUNvZGUiLCJjb250ZW50IiwicmVtb3ZlQXR0cmlidXRlIiwicHJvdmluY2VTZWxlY3RWYWx1ZSIsInByb3ZpbmNlSW5wdXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwic2V0dGluZ3MiLCJyYXRpbmdNYXgiLCJOdW1iZXIiLCJkYXRhc2V0IiwianNSYXRpbmdNYXgiLCJyYXRpbmdBdmVyYWdlIiwianNSYXRpbmdBdmVyYWdlIiwidmlld09ubHkiLCJqc1JhdGluZ1ZpZXdvbmx5IiwiYnRuT25FbGVtZW50IiwiYnRuT2ZmRWxlbWVudCIsInJlbmRlciIsInJlbmRlckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsImpzUmF0aW5nVmFsdWUiLCJjaGFuZ2VJbnB1dFZhbHVlIiwiYmluZCIsIlN5bGl1c1JlbW92ZUZyb21DYXJ0IiwiY3NyZlRva2VuIiwiZGVsZXRlIiwiX2NzcmZfdG9rZW4iLCJ0cmlnZ2VyIiwidG9nZ2xlIiwidG9nZ2xlRWxlbWVudCIsImpzVG9nZ2xlIiwic3R5bGUiLCJkaXNwbGF5IiwibWFpbkltYWdlTGluayIsIm1haW5JbWFnZSIsImRlZmF1bHRJbWFnZUxpbmsiLCJkZWZhdWx0SW1hZ2VTcmMiLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImltZyIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3RiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFC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R0FwQkQ7QUFxQkQsQ0F0QkQ7O0FBd0JBLE1BQU11RCwyQkFBMkIsR0FBRyxTQUFTQSwyQkFBVCxHQUF1QztBQUN6RXRLLFVBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsZ0RBQTFCLEVBQTRFQyxPQUE1RSxDQUFxRmdELElBQUQsSUFBVTtBQUM1RkEsUUFBSSxDQUFDcEQsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBaUNzQixDQUFELElBQU87QUFDckMsWUFBTThJLEtBQUssR0FBR2hILElBQUksQ0FBQ1ksT0FBTCxDQUFhLElBQWIsRUFBbUJ6RCxhQUFuQixDQUFpQyxpQ0FBakMsRUFBb0VpQyxTQUFsRjtBQUNBekMsY0FBUSxDQUFDUSxhQUFULENBQXVCLHlCQUF2QixFQUFrRGlDLFNBQWxELEdBQThENEgsS0FBOUQ7QUFDRCxLQUhEO0FBSUQsR0FMRDtBQU1ELENBUEQ7O0FBU0EsTUFBTUUsb0JBQW9CLEdBQUcsTUFBTTtBQUNqQyxRQUFNQyxxQkFBcUIsR0FBR3hLLFFBQVEsQ0FBQ3lLLGNBQVQsQ0FBd0IseUJBQXhCLEtBQXNELElBQXBGO0FBQ0EsUUFBTUMscUJBQXFCLEdBQUcxSyxRQUFRLENBQUN5SyxjQUFULENBQXdCLHlCQUF4QixLQUFzRCxJQUFwRjs7QUFFQSxNQUFJRCxxQkFBSixFQUEyQjtBQUN6Qk4sOEJBQTBCO0FBQzNCLEdBRkQsTUFFTyxJQUFJUSxxQkFBSixFQUEyQjtBQUNoQ0osK0JBQTJCO0FBQzVCO0FBQ0YsQ0FURDs7a0JBV2VDLG9COzs7Ozs7Ozs7OztBQ3ZEZix1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi96ZXRhbWVkcy10aGVtZS9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90aGVtZXMvWmV0YU1lZHMvYXNzZXRzL2FwcC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpIDogJ2dldCc7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB1dGlscy5mb3JFYWNoKFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFtcbiAgICAnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLFxuICAgICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JywgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLFxuICAgICdzb2NrZXRQYXRoJ1xuICBdLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICAvLyBPbmx5IE5vZGUuSlMgaGFzIGEgcHJvY2VzcyB2YXJpYWJsZSB0aGF0IGlzIG9mIFtbQ2xhc3NdXSBwcm9jZXNzXG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiLy8gTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHYyLjAuMjcgfCDCqSBkbnBfdGhlbWUgfCBNSVQtTGljZW5zZVxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQgc3VwcG9ydDpcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gQ29tbW9uSlMtbGlrZTpcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgIHZhciBic24gPSBmYWN0b3J5KCk7XG4gICAgcm9vdC5BbGVydCA9IGJzbi5BbGVydDtcbiAgICByb290LkJ1dHRvbiA9IGJzbi5CdXR0b247XG4gICAgcm9vdC5DYXJvdXNlbCA9IGJzbi5DYXJvdXNlbDtcbiAgICByb290LkNvbGxhcHNlID0gYnNuLkNvbGxhcHNlO1xuICAgIHJvb3QuRHJvcGRvd24gPSBic24uRHJvcGRvd247XG4gICAgcm9vdC5Nb2RhbCA9IGJzbi5Nb2RhbDtcbiAgICByb290LlBvcG92ZXIgPSBic24uUG9wb3ZlcjtcbiAgICByb290LlNjcm9sbFNweSA9IGJzbi5TY3JvbGxTcHk7XG4gICAgcm9vdC5UYWIgPSBic24uVGFiO1xuICAgIHJvb3QuVG9hc3QgPSBic24uVG9hc3Q7XG4gICAgcm9vdC5Ub29sdGlwID0gYnNuLlRvb2x0aXA7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgSW50ZXJuYWwgVXRpbGl0eSBGdW5jdGlvbnNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFwidXNlIHN0cmljdFwiO1xuICBcbiAgLy8gZ2xvYmFsc1xuICB2YXIgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0aGlzfHx3aW5kb3csXG4gICAgRE9DID0gZG9jdW1lbnQsIEhUTUwgPSBET0MuZG9jdW1lbnRFbGVtZW50LCBib2R5ID0gJ2JvZHknLCAvLyBhbGxvdyB0aGUgbGlicmFyeSB0byBiZSB1c2VkIGluIDxoZWFkPlxuICBcbiAgICAvLyBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIEdsb2JhbCBPYmplY3RcbiAgICBCU04gPSBnbG9iYWxPYmplY3QuQlNOID0ge30sXG4gICAgc3VwcG9ydHMgPSBCU04uc3VwcG9ydHMgPSBbXSxcbiAgXG4gICAgLy8gZnVuY3Rpb24gdG9nZ2xlIGF0dHJpYnV0ZXNcbiAgICBkYXRhVG9nZ2xlICAgID0gJ2RhdGEtdG9nZ2xlJyxcbiAgICBkYXRhRGlzbWlzcyAgID0gJ2RhdGEtZGlzbWlzcycsXG4gICAgZGF0YVNweSAgICAgICA9ICdkYXRhLXNweScsXG4gICAgZGF0YVJpZGUgICAgICA9ICdkYXRhLXJpZGUnLFxuICBcbiAgICAvLyBjb21wb25lbnRzXG4gICAgc3RyaW5nQWxlcnQgICAgID0gJ0FsZXJ0JyxcbiAgICBzdHJpbmdCdXR0b24gICAgPSAnQnV0dG9uJyxcbiAgICBzdHJpbmdDYXJvdXNlbCAgPSAnQ2Fyb3VzZWwnLFxuICAgIHN0cmluZ0NvbGxhcHNlICA9ICdDb2xsYXBzZScsXG4gICAgc3RyaW5nRHJvcGRvd24gID0gJ0Ryb3Bkb3duJyxcbiAgICBzdHJpbmdNb2RhbCAgICAgPSAnTW9kYWwnLFxuICAgIHN0cmluZ1BvcG92ZXIgICA9ICdQb3BvdmVyJyxcbiAgICBzdHJpbmdTY3JvbGxTcHkgPSAnU2Nyb2xsU3B5JyxcbiAgICBzdHJpbmdUYWIgICAgICAgPSAnVGFiJyxcbiAgICBzdHJpbmdUb29sdGlwICAgPSAnVG9vbHRpcCcsXG4gICAgc3RyaW5nVG9hc3QgICAgID0gJ1RvYXN0JyxcbiAgXG4gICAgLy8gb3B0aW9ucyBEQVRBIEFQSVxuICAgIGRhdGFBdXRvaGlkZSAgICAgID0gJ2RhdGEtYXV0b2hpZGUnLFxuICAgIGRhdGFiYWNrZHJvcCAgICAgID0gJ2RhdGEtYmFja2Ryb3AnLFxuICAgIGRhdGFLZXlib2FyZCAgICAgID0gJ2RhdGEta2V5Ym9hcmQnLFxuICAgIGRhdGFUYXJnZXQgICAgICAgID0gJ2RhdGEtdGFyZ2V0JyxcbiAgICBkYXRhSW50ZXJ2YWwgICAgICA9ICdkYXRhLWludGVydmFsJyxcbiAgICBkYXRhSGVpZ2h0ICAgICAgICA9ICdkYXRhLWhlaWdodCcsXG4gICAgZGF0YVBhdXNlICAgICAgICAgPSAnZGF0YS1wYXVzZScsXG4gICAgZGF0YVRpdGxlICAgICAgICAgPSAnZGF0YS10aXRsZScsXG4gICAgZGF0YU9yaWdpbmFsVGl0bGUgPSAnZGF0YS1vcmlnaW5hbC10aXRsZScsXG4gICAgZGF0YURpc21pc3NpYmxlICAgPSAnZGF0YS1kaXNtaXNzaWJsZScsXG4gICAgZGF0YVRyaWdnZXIgICAgICAgPSAnZGF0YS10cmlnZ2VyJyxcbiAgICBkYXRhQW5pbWF0aW9uICAgICA9ICdkYXRhLWFuaW1hdGlvbicsXG4gICAgZGF0YUNvbnRhaW5lciAgICAgPSAnZGF0YS1jb250YWluZXInLFxuICAgIGRhdGFQbGFjZW1lbnQgICAgID0gJ2RhdGEtcGxhY2VtZW50JyxcbiAgICBkYXRhRGVsYXkgICAgICAgICA9ICdkYXRhLWRlbGF5JyxcbiAgXG4gICAgLy8gb3B0aW9uIGtleXNcbiAgICBiYWNrZHJvcCA9ICdiYWNrZHJvcCcsIGtleWJvYXJkID0gJ2tleWJvYXJkJywgZGVsYXkgPSAnZGVsYXknLFxuICAgIGNvbnRlbnQgPSAnY29udGVudCcsIHRhcmdldCA9ICd0YXJnZXQnLCBjdXJyZW50VGFyZ2V0ID0gJ2N1cnJlbnRUYXJnZXQnLFxuICAgIGludGVydmFsID0gJ2ludGVydmFsJywgcGF1c2UgPSAncGF1c2UnLCBhbmltYXRpb24gPSAnYW5pbWF0aW9uJyxcbiAgICBwbGFjZW1lbnQgPSAncGxhY2VtZW50JywgY29udGFpbmVyID0gJ2NvbnRhaW5lcicsXG4gIFxuICAgIC8vIGJveCBtb2RlbFxuICAgIG9mZnNldFRvcCAgICA9ICdvZmZzZXRUb3AnLCAgICAgIG9mZnNldEJvdHRvbSAgID0gJ29mZnNldEJvdHRvbScsXG4gICAgb2Zmc2V0TGVmdCAgID0gJ29mZnNldExlZnQnLFxuICAgIHNjcm9sbFRvcCAgICA9ICdzY3JvbGxUb3AnLCAgICAgIHNjcm9sbExlZnQgICAgID0gJ3Njcm9sbExlZnQnLFxuICAgIGNsaWVudFdpZHRoICA9ICdjbGllbnRXaWR0aCcsICAgIGNsaWVudEhlaWdodCAgID0gJ2NsaWVudEhlaWdodCcsXG4gICAgb2Zmc2V0V2lkdGggID0gJ29mZnNldFdpZHRoJywgICAgb2Zmc2V0SGVpZ2h0ICAgPSAnb2Zmc2V0SGVpZ2h0JyxcbiAgICBpbm5lcldpZHRoICAgPSAnaW5uZXJXaWR0aCcsICAgICBpbm5lckhlaWdodCAgICA9ICdpbm5lckhlaWdodCcsXG4gICAgc2Nyb2xsSGVpZ2h0ID0gJ3Njcm9sbEhlaWdodCcsICAgc2Nyb2xsV2lkdGggICAgPSAnc2Nyb2xsV2lkdGgnLFxuICAgIGhlaWdodCAgICAgICAgID0gJ2hlaWdodCcsXG4gIFxuICAgIC8vIGFyaWFcbiAgICBhcmlhRXhwYW5kZWQgPSAnYXJpYS1leHBhbmRlZCcsXG4gICAgYXJpYUhpZGRlbiAgID0gJ2FyaWEtaGlkZGVuJyxcbiAgICBhcmlhU2VsZWN0ZWQgPSAnYXJpYS1zZWxlY3RlZCcsXG4gIFxuICAgIC8vIGV2ZW50IG5hbWVzXG4gICAgY2xpY2tFdmVudCAgICA9ICdjbGljaycsXG4gICAgZm9jdXNFdmVudCAgICA9ICdmb2N1cycsXG4gICAgaG92ZXJFdmVudCAgICA9ICdob3ZlcicsXG4gICAga2V5ZG93bkV2ZW50ICA9ICdrZXlkb3duJyxcbiAgICBrZXl1cEV2ZW50ICAgID0gJ2tleXVwJyxcbiAgICByZXNpemVFdmVudCAgID0gJ3Jlc2l6ZScsIC8vIHBhc3NpdmVcbiAgICBzY3JvbGxFdmVudCAgID0gJ3Njcm9sbCcsIC8vIHBhc3NpdmVcbiAgICBtb3VzZUhvdmVyID0gKCdvbm1vdXNlbGVhdmUnIGluIERPQykgPyBbICdtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnXSA6IFsgJ21vdXNlb3ZlcicsICdtb3VzZW91dCcgXSxcbiAgICAvLyB0b3VjaCBzaW5jZSAyLjAuMjZcbiAgICB0b3VjaEV2ZW50cyA9IHsgc3RhcnQ6ICd0b3VjaHN0YXJ0JywgZW5kOiAndG91Y2hlbmQnLCBtb3ZlOid0b3VjaG1vdmUnIH0sIC8vIHBhc3NpdmVcbiAgICAvLyBvcmlnaW5hbEV2ZW50c1xuICAgIHNob3dFdmVudCAgICAgPSAnc2hvdycsXG4gICAgc2hvd25FdmVudCAgICA9ICdzaG93bicsXG4gICAgaGlkZUV2ZW50ICAgICA9ICdoaWRlJyxcbiAgICBoaWRkZW5FdmVudCAgID0gJ2hpZGRlbicsXG4gICAgY2xvc2VFdmVudCAgICA9ICdjbG9zZScsXG4gICAgY2xvc2VkRXZlbnQgICA9ICdjbG9zZWQnLFxuICAgIHNsaWRFdmVudCAgICAgPSAnc2xpZCcsXG4gICAgc2xpZGVFdmVudCAgICA9ICdzbGlkZScsXG4gICAgY2hhbmdlRXZlbnQgICA9ICdjaGFuZ2UnLFxuICBcbiAgICAvLyBvdGhlclxuICAgIGdldEF0dHJpYnV0ZSAgICAgICAgICAgPSAnZ2V0QXR0cmlidXRlJyxcbiAgICBzZXRBdHRyaWJ1dGUgICAgICAgICAgID0gJ3NldEF0dHJpYnV0ZScsXG4gICAgaGFzQXR0cmlidXRlICAgICAgICAgICA9ICdoYXNBdHRyaWJ1dGUnLFxuICAgIGNyZWF0ZUVsZW1lbnQgICAgICAgICAgPSAnY3JlYXRlRWxlbWVudCcsXG4gICAgYXBwZW5kQ2hpbGQgICAgICAgICAgICA9ICdhcHBlbmRDaGlsZCcsXG4gICAgaW5uZXJIVE1MICAgICAgICAgICAgICA9ICdpbm5lckhUTUwnLFxuICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lICAgPSAnZ2V0RWxlbWVudHNCeVRhZ05hbWUnLFxuICAgIHByZXZlbnREZWZhdWx0ICAgICAgICAgPSAncHJldmVudERlZmF1bHQnLFxuICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdCAgPSAnZ2V0Qm91bmRpbmdDbGllbnRSZWN0JyxcbiAgICBxdWVyeVNlbGVjdG9yQWxsICAgICAgID0gJ3F1ZXJ5U2VsZWN0b3JBbGwnLFxuICAgIGdldEVsZW1lbnRzQnlDTEFTU05BTUUgPSAnZ2V0RWxlbWVudHNCeUNsYXNzTmFtZScsXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZSAgICAgICA9ICdnZXRDb21wdXRlZFN0eWxlJywgIFxuICBcbiAgICBpbmRleE9mICAgICAgPSAnaW5kZXhPZicsXG4gICAgcGFyZW50Tm9kZSAgID0gJ3BhcmVudE5vZGUnLFxuICAgIGxlbmd0aCAgICAgICA9ICdsZW5ndGgnLFxuICAgIHRvTG93ZXJDYXNlICA9ICd0b0xvd2VyQ2FzZScsXG4gICAgVHJhbnNpdGlvbiAgID0gJ1RyYW5zaXRpb24nLFxuICAgIER1cmF0aW9uICAgICA9ICdEdXJhdGlvbicsXG4gICAgV2Via2l0ICAgICAgID0gJ1dlYmtpdCcsXG4gICAgc3R5bGUgICAgICAgID0gJ3N0eWxlJyxcbiAgICBwdXNoICAgICAgICAgPSAncHVzaCcsXG4gICAgdGFiaW5kZXggICAgID0gJ3RhYmluZGV4JyxcbiAgICBjb250YWlucyAgICAgPSAnY29udGFpbnMnLFxuICBcbiAgICBhY3RpdmUgICAgID0gJ2FjdGl2ZScsXG4gICAgc2hvd0NsYXNzICA9ICdzaG93JyxcbiAgICBjb2xsYXBzaW5nID0gJ2NvbGxhcHNpbmcnLFxuICAgIGRpc2FibGVkICAgPSAnZGlzYWJsZWQnLFxuICAgIGxvYWRpbmcgICAgPSAnbG9hZGluZycsXG4gICAgbGVmdCAgICAgICA9ICdsZWZ0JyxcbiAgICByaWdodCAgICAgID0gJ3JpZ2h0JyxcbiAgICB0b3AgICAgICAgID0gJ3RvcCcsXG4gICAgYm90dG9tICAgICA9ICdib3R0b20nLFxuICBcbiAgICAvLyB0b29sdGlwIC8gcG9wb3ZlclxuICAgIHRpcFBvc2l0aW9ucyA9IC9cXGIodG9wfGJvdHRvbXxsZWZ0fHJpZ2h0KSsvLFxuICBcbiAgICAvLyBtb2RhbFxuICAgIG1vZGFsT3ZlcmxheSA9IDAsXG4gICAgZml4ZWRUb3AgPSAnZml4ZWQtdG9wJyxcbiAgICBmaXhlZEJvdHRvbSA9ICdmaXhlZC1ib3R0b20nLFxuICBcbiAgICAvLyB0cmFuc2l0aW9uRW5kIHNpbmNlIDIuMC40XG4gICAgc3VwcG9ydFRyYW5zaXRpb25zID0gV2Via2l0K1RyYW5zaXRpb24gaW4gSFRNTFtzdHlsZV0gfHwgVHJhbnNpdGlvblt0b0xvd2VyQ2FzZV0oKSBpbiBIVE1MW3N0eWxlXSxcbiAgICB0cmFuc2l0aW9uRW5kRXZlbnQgPSBXZWJraXQrVHJhbnNpdGlvbiBpbiBIVE1MW3N0eWxlXSA/IFdlYmtpdFt0b0xvd2VyQ2FzZV0oKStUcmFuc2l0aW9uKydFbmQnIDogVHJhbnNpdGlvblt0b0xvd2VyQ2FzZV0oKSsnZW5kJyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBXZWJraXQrRHVyYXRpb24gaW4gSFRNTFtzdHlsZV0gPyBXZWJraXRbdG9Mb3dlckNhc2VdKCkrVHJhbnNpdGlvbitEdXJhdGlvbiA6IFRyYW5zaXRpb25bdG9Mb3dlckNhc2VdKCkrRHVyYXRpb24sXG4gIFxuICAgIC8vIHNldCBuZXcgZm9jdXMgZWxlbWVudCBzaW5jZSAyLjAuM1xuICAgIHNldEZvY3VzID0gZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICBlbGVtZW50LmZvY3VzID8gZWxlbWVudC5mb2N1cygpIDogZWxlbWVudC5zZXRBY3RpdmUoKTtcbiAgICB9LFxuICBcbiAgICAvLyBjbGFzcyBtYW5pcHVsYXRpb24sIHNpbmNlIDIuMC4wIHJlcXVpcmVzIHBvbHlmaWxsLmpzXG4gICAgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LGNsYXNzTkFNRSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTkFNRSk7XG4gICAgfSxcbiAgICByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsY2xhc3NOQU1FKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOQU1FKTtcbiAgICB9LFxuICAgIGhhc0NsYXNzID0gZnVuY3Rpb24oZWxlbWVudCxjbGFzc05BTUUpeyAvLyBzaW5jZSAyLjAuMFxuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0W2NvbnRhaW5zXShjbGFzc05BTUUpO1xuICAgIH0sXG4gIFxuICAgIC8vIHNlbGVjdGlvbiBtZXRob2RzXG4gICAgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IGZ1bmN0aW9uKGVsZW1lbnQsY2xhc3NOQU1FKSB7IC8vIHJldHVybnMgQXJyYXlcbiAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGVsZW1lbnRbZ2V0RWxlbWVudHNCeUNMQVNTTkFNRV0oIGNsYXNzTkFNRSApKTtcbiAgICB9LFxuICAgIHF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcGFyZW50KSB7XG4gICAgICB2YXIgbG9va1VwID0gcGFyZW50ID8gcGFyZW50IDogRE9DO1xuICAgICAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gJ29iamVjdCcgPyBzZWxlY3RvciA6IGxvb2tVcC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9LFxuICAgIGdldENsb3Nlc3QgPSBmdW5jdGlvbiAoZWxlbWVudCwgc2VsZWN0b3IpIHsgLy9lbGVtZW50IGlzIHRoZSBlbGVtZW50IGFuZCBzZWxlY3RvciBpcyBmb3IgdGhlIGNsb3Nlc3QgcGFyZW50IGVsZW1lbnQgdG8gZmluZFxuICAgICAgLy8gc291cmNlIGh0dHA6Ly9nb21ha2V0aGluZ3MuY29tL2NsaW1iaW5nLXVwLWFuZC1kb3duLXRoZS1kb20tdHJlZS13aXRoLXZhbmlsbGEtamF2YXNjcmlwdC9cbiAgICAgIHZhciBmaXJzdENoYXIgPSBzZWxlY3Rvci5jaGFyQXQoMCksIHNlbGVjdG9yU3Vic3RyaW5nID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xuICAgICAgaWYgKCBmaXJzdENoYXIgPT09ICcuJyApIHsvLyBJZiBzZWxlY3RvciBpcyBhIGNsYXNzXG4gICAgICAgIGZvciAoIDsgZWxlbWVudCAmJiBlbGVtZW50ICE9PSBET0M7IGVsZW1lbnQgPSBlbGVtZW50W3BhcmVudE5vZGVdICkgeyAvLyBHZXQgY2xvc2VzdCBtYXRjaFxuICAgICAgICAgIGlmICggcXVlcnlFbGVtZW50KHNlbGVjdG9yLGVsZW1lbnRbcGFyZW50Tm9kZV0pICE9PSBudWxsICYmIGhhc0NsYXNzKGVsZW1lbnQsc2VsZWN0b3JTdWJzdHJpbmcpICkgeyByZXR1cm4gZWxlbWVudDsgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCBmaXJzdENoYXIgPT09ICcjJyApIHsgLy8gSWYgc2VsZWN0b3IgaXMgYW4gSURcbiAgICAgICAgZm9yICggOyBlbGVtZW50ICYmIGVsZW1lbnQgIT09IERPQzsgZWxlbWVudCA9IGVsZW1lbnRbcGFyZW50Tm9kZV0gKSB7IC8vIEdldCBjbG9zZXN0IG1hdGNoXG4gICAgICAgICAgaWYgKCBlbGVtZW50LmlkID09PSBzZWxlY3RvclN1YnN0cmluZyApIHsgcmV0dXJuIGVsZW1lbnQ7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIFxuICAgIC8vIGV2ZW50IGF0dGFjaCBqUXVlcnkgc3R5bGUgLyB0cmlnZ2VyICBzaW5jZSAxLjIuMFxuICAgIG9uID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCBmYWxzZTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSxcbiAgICBvZmYgPSBmdW5jdGlvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZmFsc2U7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgb25lID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7IC8vIG9uZSBzaW5jZSAyLjAuNFxuICAgICAgb24oZWxlbWVudCwgZXZlbnQsIGZ1bmN0aW9uIGhhbmRsZXJXcmFwcGVyKGUpe1xuICAgICAgICBoYW5kbGVyKGUpO1xuICAgICAgICBvZmYoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXJXcmFwcGVyLCBvcHRpb25zKTtcbiAgICAgIH0sIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgLy8gZGV0ZXJtaW5lIHN1cHBvcnQgZm9yIHBhc3NpdmUgZXZlbnRzXG4gICAgc3VwcG9ydFBhc3NpdmUgPSAoZnVuY3Rpb24oKXtcbiAgICAgIC8vIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWUgaWYgdGhlIHBhc3NpdmUgcHJvcGVydHkgaXMgYWNjZXNzZWRcbiAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBvbmUoZ2xvYmFsT2JqZWN0LCAndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gIFxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KCkpLFxuICAgIC8vIGV2ZW50IG9wdGlvbnNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZCNmZWF0dXJlLWRldGVjdGlvblxuICAgIHBhc3NpdmVIYW5kbGVyID0gc3VwcG9ydFBhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlLFxuICAgIC8vIHRyYW5zaXRpb25zXG4gICAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgZHVyYXRpb24gPSBzdXBwb3J0VHJhbnNpdGlvbnMgPyBnbG9iYWxPYmplY3RbZ2V0Q29tcHV0ZWRTdHlsZV0oZWxlbWVudClbdHJhbnNpdGlvbkR1cmF0aW9uXSA6IDA7XG4gICAgICBkdXJhdGlvbiA9IHBhcnNlRmxvYXQoZHVyYXRpb24pO1xuICAgICAgZHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gPT09ICdudW1iZXInICYmICFpc05hTihkdXJhdGlvbikgPyBkdXJhdGlvbiAqIDEwMDAgOiAwO1xuICAgICAgcmV0dXJuIGR1cmF0aW9uOyAvLyB3ZSB0YWtlIGEgc2hvcnQgb2Zmc2V0IHRvIG1ha2Ugc3VyZSB3ZSBmaXJlIG9uIHRoZSBuZXh0IGZyYW1lIGFmdGVyIGFuaW1hdGlvblxuICAgIH0sXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbihlbGVtZW50LGhhbmRsZXIpeyAvLyBlbXVsYXRlVHJhbnNpdGlvbkVuZCBzaW5jZSAyLjAuNFxuICAgICAgdmFyIGNhbGxlZCA9IDAsIGR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBkdXJhdGlvbiA/IG9uZShlbGVtZW50LCB0cmFuc2l0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uKGUpeyAhY2FsbGVkICYmIGhhbmRsZXIoZSksIGNhbGxlZCA9IDE7IH0pXG4gICAgICAgICAgICAgICA6IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICFjYWxsZWQgJiYgaGFuZGxlcigpLCBjYWxsZWQgPSAxOyB9LCAxNyk7XG4gICAgfSxcbiAgICBib290c3RyYXBDdXN0b21FdmVudCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNvbXBvbmVudE5hbWUsIHJlbGF0ZWQpIHtcbiAgICAgIHZhciBPcmlnaW5hbEN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCBldmVudE5hbWUgKyAnLmJzLicgKyBjb21wb25lbnROYW1lKTtcbiAgICAgIE9yaWdpbmFsQ3VzdG9tRXZlbnQucmVsYXRlZFRhcmdldCA9IHJlbGF0ZWQ7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT3JpZ2luYWxDdXN0b21FdmVudCk7XG4gICAgfSxcbiAgXG4gICAgLy8gdG9vbHRpcCAvIHBvcG92ZXIgc3R1ZmZcbiAgICBnZXRTY3JvbGwgPSBmdW5jdGlvbigpIHsgLy8gYWxzbyBBZmZpeCBhbmQgU2Nyb2xsU3B5IHVzZXMgaXRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHkgOiBnbG9iYWxPYmplY3QucGFnZVlPZmZzZXQgfHwgSFRNTFtzY3JvbGxUb3BdLFxuICAgICAgICB4IDogZ2xvYmFsT2JqZWN0LnBhZ2VYT2Zmc2V0IHx8IEhUTUxbc2Nyb2xsTGVmdF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHN0eWxlVGlwID0gZnVuY3Rpb24obGluayxlbGVtZW50LHBvc2l0aW9uLHBhcmVudCkgeyAvLyBib3RoIHBvcG92ZXJzIGFuZCB0b29sdGlwcyAodGFyZ2V0LHRvb2x0aXAscGxhY2VtZW50LGVsZW1lbnRUb0FwcGVuZFRvKVxuICAgICAgdmFyIGVsZW1lbnREaW1lbnNpb25zID0geyB3IDogZWxlbWVudFtvZmZzZXRXaWR0aF0sIGg6IGVsZW1lbnRbb2Zmc2V0SGVpZ2h0XSB9LFxuICAgICAgICAgIHdpbmRvd1dpZHRoID0gKEhUTUxbY2xpZW50V2lkdGhdIHx8IERPQ1tib2R5XVtjbGllbnRXaWR0aF0pLFxuICAgICAgICAgIHdpbmRvd0hlaWdodCA9IChIVE1MW2NsaWVudEhlaWdodF0gfHwgRE9DW2JvZHldW2NsaWVudEhlaWdodF0pLFxuICAgICAgICAgIHJlY3QgPSBsaW5rW2dldEJvdW5kaW5nQ2xpZW50UmVjdF0oKSxcbiAgICAgICAgICBzY3JvbGwgPSBwYXJlbnQgPT09IERPQ1tib2R5XSA/IGdldFNjcm9sbCgpIDogeyB4OiBwYXJlbnRbb2Zmc2V0TGVmdF0gKyBwYXJlbnRbc2Nyb2xsTGVmdF0sIHk6IHBhcmVudFtvZmZzZXRUb3BdICsgcGFyZW50W3Njcm9sbFRvcF0gfSxcbiAgICAgICAgICBsaW5rRGltZW5zaW9ucyA9IHsgdzogcmVjdFtyaWdodF0gLSByZWN0W2xlZnRdLCBoOiByZWN0W2JvdHRvbV0gLSByZWN0W3RvcF0gfSxcbiAgICAgICAgICBpc1BvcG92ZXIgPSBoYXNDbGFzcyhlbGVtZW50LCdwb3BvdmVyJyksXG4gICAgICAgICAgdG9wUG9zaXRpb24sIGxlZnRQb3NpdGlvbixcbiAgXG4gICAgICAgICAgYXJyb3cgPSBxdWVyeUVsZW1lbnQoJy5hcnJvdycsZWxlbWVudCksXG4gICAgICAgICAgYXJyb3dUb3AsIGFycm93TGVmdCwgYXJyb3dXaWR0aCwgYXJyb3dIZWlnaHQsXG4gIFxuICAgICAgICAgIGhhbGZUb3BFeGNlZWQgPSByZWN0W3RvcF0gKyBsaW5rRGltZW5zaW9ucy5oLzIgLSBlbGVtZW50RGltZW5zaW9ucy5oLzIgPCAwLFxuICAgICAgICAgIGhhbGZMZWZ0RXhjZWVkID0gcmVjdFtsZWZ0XSArIGxpbmtEaW1lbnNpb25zLncvMiAtIGVsZW1lbnREaW1lbnNpb25zLncvMiA8IDAsXG4gICAgICAgICAgaGFsZlJpZ2h0RXhjZWVkID0gcmVjdFtsZWZ0XSArIGVsZW1lbnREaW1lbnNpb25zLncvMiArIGxpbmtEaW1lbnNpb25zLncvMiA+PSB3aW5kb3dXaWR0aCxcbiAgICAgICAgICBoYWxmQm90dG9tRXhjZWVkID0gcmVjdFt0b3BdICsgZWxlbWVudERpbWVuc2lvbnMuaC8yICsgbGlua0RpbWVuc2lvbnMuaC8yID49IHdpbmRvd0hlaWdodCxcbiAgICAgICAgICB0b3BFeGNlZWQgPSByZWN0W3RvcF0gLSBlbGVtZW50RGltZW5zaW9ucy5oIDwgMCxcbiAgICAgICAgICBsZWZ0RXhjZWVkID0gcmVjdFtsZWZ0XSAtIGVsZW1lbnREaW1lbnNpb25zLncgPCAwLFxuICAgICAgICAgIGJvdHRvbUV4Y2VlZCA9IHJlY3RbdG9wXSArIGVsZW1lbnREaW1lbnNpb25zLmggKyBsaW5rRGltZW5zaW9ucy5oID49IHdpbmRvd0hlaWdodCxcbiAgICAgICAgICByaWdodEV4Y2VlZCA9IHJlY3RbbGVmdF0gKyBlbGVtZW50RGltZW5zaW9ucy53ICsgbGlua0RpbWVuc2lvbnMudyA+PSB3aW5kb3dXaWR0aDtcbiAgXG4gICAgICAvLyByZWNvbXB1dGUgcG9zaXRpb25cbiAgICAgIHBvc2l0aW9uID0gKHBvc2l0aW9uID09PSBsZWZ0IHx8IHBvc2l0aW9uID09PSByaWdodCkgJiYgbGVmdEV4Y2VlZCAmJiByaWdodEV4Y2VlZCA/IHRvcCA6IHBvc2l0aW9uOyAvLyBmaXJzdCwgd2hlbiBib3RoIGxlZnQgYW5kIHJpZ2h0IGxpbWl0cyBhcmUgZXhjZWVkZWQsIHdlIGZhbGwgYmFjayB0byB0b3B8Ym90dG9tXG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID09PSB0b3AgJiYgdG9wRXhjZWVkID8gYm90dG9tIDogcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID09PSBib3R0b20gJiYgYm90dG9tRXhjZWVkID8gdG9wIDogcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID09PSBsZWZ0ICYmIGxlZnRFeGNlZWQgPyByaWdodCA6IHBvc2l0aW9uO1xuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gcmlnaHQgJiYgcmlnaHRFeGNlZWQgPyBsZWZ0IDogcG9zaXRpb247XG4gIFxuICAgICAgLy8gdXBkYXRlIHRvb2x0aXAvcG9wb3ZlciBjbGFzc1xuICAgICAgZWxlbWVudC5jbGFzc05hbWVbaW5kZXhPZl0ocG9zaXRpb24pID09PSAtMSAmJiAoZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHRpcFBvc2l0aW9ucyxwb3NpdGlvbikpO1xuICBcbiAgICAgIC8vIHdlIGNoZWNrIHRoZSBjb21wdXRlZCB3aWR0aCAmIGhlaWdodCBhbmQgdXBkYXRlIGhlcmVcbiAgICAgIGFycm93V2lkdGggPSBhcnJvd1tvZmZzZXRXaWR0aF07IGFycm93SGVpZ2h0ID0gYXJyb3dbb2Zmc2V0SGVpZ2h0XTtcbiAgXG4gICAgICAvLyBhcHBseSBzdHlsaW5nIHRvIHRvb2x0aXAgb3IgcG9wb3ZlclxuICAgICAgaWYgKCBwb3NpdGlvbiA9PT0gbGVmdCB8fCBwb3NpdGlvbiA9PT0gcmlnaHQgKSB7IC8vIHNlY29uZGFyeXxzaWRlIHBvc2l0aW9uc1xuICAgICAgICBpZiAoIHBvc2l0aW9uID09PSBsZWZ0ICkgeyAvLyBMRUZUXG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gcmVjdFtsZWZ0XSArIHNjcm9sbC54IC0gZWxlbWVudERpbWVuc2lvbnMudyAtICggaXNQb3BvdmVyID8gYXJyb3dXaWR0aCA6IDAgKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gUklHSFRcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSByZWN0W2xlZnRdICsgc2Nyb2xsLnggKyBsaW5rRGltZW5zaW9ucy53O1xuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBhZGp1c3QgdG9wIGFuZCBhcnJvd1xuICAgICAgICBpZiAoaGFsZlRvcEV4Y2VlZCkge1xuICAgICAgICAgIHRvcFBvc2l0aW9uID0gcmVjdFt0b3BdICsgc2Nyb2xsLnk7XG4gICAgICAgICAgYXJyb3dUb3AgPSBsaW5rRGltZW5zaW9ucy5oLzIgLSBhcnJvd1dpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbGZCb3R0b21FeGNlZWQpIHtcbiAgICAgICAgICB0b3BQb3NpdGlvbiA9IHJlY3RbdG9wXSArIHNjcm9sbC55IC0gZWxlbWVudERpbWVuc2lvbnMuaCArIGxpbmtEaW1lbnNpb25zLmg7XG4gICAgICAgICAgYXJyb3dUb3AgPSBlbGVtZW50RGltZW5zaW9ucy5oIC0gbGlua0RpbWVuc2lvbnMuaC8yIC0gYXJyb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3BQb3NpdGlvbiA9IHJlY3RbdG9wXSArIHNjcm9sbC55IC0gZWxlbWVudERpbWVuc2lvbnMuaC8yICsgbGlua0RpbWVuc2lvbnMuaC8yO1xuICAgICAgICAgIGFycm93VG9wID0gZWxlbWVudERpbWVuc2lvbnMuaC8yIC0gKGlzUG9wb3ZlciA/IGFycm93SGVpZ2h0KjAuOSA6IGFycm93SGVpZ2h0LzIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCBwb3NpdGlvbiA9PT0gdG9wIHx8IHBvc2l0aW9uID09PSBib3R0b20gKSB7IC8vIHByaW1hcnl8dmVydGljYWwgcG9zaXRpb25zXG4gICAgICAgIGlmICggcG9zaXRpb24gPT09IHRvcCkgeyAvLyBUT1BcbiAgICAgICAgICB0b3BQb3NpdGlvbiA9ICByZWN0W3RvcF0gKyBzY3JvbGwueSAtIGVsZW1lbnREaW1lbnNpb25zLmggLSAoIGlzUG9wb3ZlciA/IGFycm93SGVpZ2h0IDogMCApO1xuICAgICAgICB9IGVsc2UgeyAvLyBCT1RUT01cbiAgICAgICAgICB0b3BQb3NpdGlvbiA9IHJlY3RbdG9wXSArIHNjcm9sbC55ICsgbGlua0RpbWVuc2lvbnMuaDtcbiAgICAgICAgfVxuICAgICAgICAvLyBhZGp1c3QgbGVmdCB8IHJpZ2h0IGFuZCBhbHNvIHRoZSBhcnJvd1xuICAgICAgICBpZiAoaGFsZkxlZnRFeGNlZWQpIHtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSAwO1xuICAgICAgICAgIGFycm93TGVmdCA9IHJlY3RbbGVmdF0gKyBsaW5rRGltZW5zaW9ucy53LzIgLSBhcnJvd1dpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbGZSaWdodEV4Y2VlZCkge1xuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IHdpbmRvd1dpZHRoIC0gZWxlbWVudERpbWVuc2lvbnMudyoxLjAxO1xuICAgICAgICAgIGFycm93TGVmdCA9IGVsZW1lbnREaW1lbnNpb25zLncgLSAoIHdpbmRvd1dpZHRoIC0gcmVjdFtsZWZ0XSApICsgbGlua0RpbWVuc2lvbnMudy8yIC0gYXJyb3dXaWR0aC8yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IHJlY3RbbGVmdF0gKyBzY3JvbGwueCAtIGVsZW1lbnREaW1lbnNpb25zLncvMiArIGxpbmtEaW1lbnNpb25zLncvMjtcbiAgICAgICAgICBhcnJvd0xlZnQgPSBlbGVtZW50RGltZW5zaW9ucy53LzIgLSAoIGlzUG9wb3ZlciA/IGFycm93V2lkdGggOiBhcnJvd1dpZHRoLzIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIGFwcGx5IHN0eWxlIHRvIHRvb2x0aXAvcG9wb3ZlciBhbmQgaXRzIGFycm93XG4gICAgICBlbGVtZW50W3N0eWxlXVt0b3BdID0gdG9wUG9zaXRpb24gKyAncHgnO1xuICAgICAgZWxlbWVudFtzdHlsZV1bbGVmdF0gPSBsZWZ0UG9zaXRpb24gKyAncHgnO1xuICBcbiAgICAgIGFycm93VG9wICYmIChhcnJvd1tzdHlsZV1bdG9wXSA9IGFycm93VG9wICsgJ3B4Jyk7XG4gICAgICBhcnJvd0xlZnQgJiYgKGFycm93W3N0eWxlXVtsZWZ0XSA9IGFycm93TGVmdCArICdweCcpO1xuICAgIH07XG4gIFxuICBCU04udmVyc2lvbiA9ICcyLjAuMjcnO1xuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgQWxlcnRcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBBTEVSVCBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT1cbiAgdmFyIEFsZXJ0ID0gZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG4gICAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIGJpbmQsIHRhcmdldCBhbGVydCwgZHVyYXRpb24gYW5kIHN0dWZmXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBjb21wb25lbnQgPSAnYWxlcnQnLFxuICAgICAgYWxlcnQgPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy4nK2NvbXBvbmVudCksXG4gICAgICB0cmlnZ2VySGFuZGxlciA9IGZ1bmN0aW9uKCl7IGhhc0NsYXNzKGFsZXJ0LCdmYWRlJykgPyBlbXVsYXRlVHJhbnNpdGlvbkVuZChhbGVydCx0cmFuc2l0aW9uRW5kSGFuZGxlcikgOiB0cmFuc2l0aW9uRW5kSGFuZGxlcigpOyB9LFxuICAgICAgLy8gaGFuZGxlcnNcbiAgICAgIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICBhbGVydCA9IGdldENsb3Nlc3QoZVt0YXJnZXRdLCcuJytjb21wb25lbnQpO1xuICAgICAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KCdbJytkYXRhRGlzbWlzcysnPVwiJytjb21wb25lbnQrJ1wiXScsYWxlcnQpO1xuICAgICAgICBlbGVtZW50ICYmIGFsZXJ0ICYmIChlbGVtZW50ID09PSBlW3RhcmdldF0gfHwgZWxlbWVudFtjb250YWluc10oZVt0YXJnZXRdKSkgJiYgc2VsZi5jbG9zZSgpO1xuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25FbmRIYW5kbGVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChhbGVydCwgY2xvc2VkRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIG9mZihlbGVtZW50LCBjbGlja0V2ZW50LCBjbGlja0hhbmRsZXIpOyAvLyBkZXRhY2ggaXQncyBsaXN0ZW5lclxuICAgICAgICBhbGVydFtwYXJlbnROb2RlXS5yZW1vdmVDaGlsZChhbGVydCk7XG4gICAgICB9O1xuICAgIFxuICAgIC8vIHB1YmxpYyBtZXRob2RcbiAgICB0aGlzLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIGFsZXJ0ICYmIGVsZW1lbnQgJiYgaGFzQ2xhc3MoYWxlcnQsc2hvd0NsYXNzKSApIHtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChhbGVydCwgY2xvc2VFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoYWxlcnQsc2hvd0NsYXNzKTtcbiAgICAgICAgYWxlcnQgJiYgdHJpZ2dlckhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKHN0cmluZ0FsZXJ0IGluIGVsZW1lbnQgKSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgICAgIG9uKGVsZW1lbnQsIGNsaWNrRXZlbnQsIGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICAgIGVsZW1lbnRbc3RyaW5nQWxlcnRdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIEFMRVJUIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKFtzdHJpbmdBbGVydCwgQWxlcnQsICdbJytkYXRhRGlzbWlzcysnPVwiYWxlcnRcIl0nXSk7XG4gIFxuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgQnV0dG9uXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBCVVRUT04gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09XG4gIHZhciBCdXR0b24gPSBmdW5jdGlvbiggZWxlbWVudCApIHtcbiAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIGNvbnN0YW50XG4gICAgdmFyIHRvZ2dsZWQgPSBmYWxzZSwgLy8gdG9nZ2xlZCBtYWtlcyBzdXJlIHRvIHByZXZlbnQgdHJpZ2dlcmluZyB0d2ljZSB0aGUgY2hhbmdlLmJzLmJ1dHRvbiBldmVudHNcbiAgXG4gICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgY29tcG9uZW50ID0gJ2J1dHRvbicsXG4gICAgICAgIGNoZWNrZWQgPSAnY2hlY2tlZCcsXG4gICAgICAgIExBQkVMID0gJ0xBQkVMJyxcbiAgICAgICAgSU5QVVQgPSAnSU5QVVQnLFxuICBcbiAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgICAga2V5SGFuZGxlciA9IGZ1bmN0aW9uKGUpeyBcbiAgICAgICAgdmFyIGtleSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xuICAgICAgICBrZXkgPT09IDMyICYmIGVbdGFyZ2V0XSA9PT0gRE9DLmFjdGl2ZUVsZW1lbnQgJiYgdG9nZ2xlKGUpO1xuICAgICAgfSxcbiAgICAgIHByZXZlbnRTY3JvbGwgPSBmdW5jdGlvbihlKXsgXG4gICAgICAgIHZhciBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcbiAgICAgICAga2V5ID09PSAzMiAmJiBlW3ByZXZlbnREZWZhdWx0XSgpO1xuICAgICAgfSxcbiAgICAgIHRvZ2dsZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gZVt0YXJnZXRdLnRhZ05hbWUgPT09IExBQkVMID8gZVt0YXJnZXRdIDogZVt0YXJnZXRdW3BhcmVudE5vZGVdLnRhZ05hbWUgPT09IExBQkVMID8gZVt0YXJnZXRdW3BhcmVudE5vZGVdIDogbnVsbDsgLy8gdGhlIC5idG4gbGFiZWxcbiAgICAgICAgXG4gICAgICAgIGlmICggIWxhYmVsICkgcmV0dXJuOyAvL3JlYWN0IGlmIGEgbGFiZWwgb3IgaXRzIGltbWVkaWF0ZSBjaGlsZCBpcyBjbGlja2VkXG4gIFxuICAgICAgICB2YXIgbGFiZWxzID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYWJlbFtwYXJlbnROb2RlXSwnYnRuJyksIC8vIGFsbCB0aGUgYnV0dG9uIGdyb3VwIGJ1dHRvbnNcbiAgICAgICAgICBpbnB1dCA9IGxhYmVsW2dldEVsZW1lbnRzQnlUYWdOYW1lXShJTlBVVClbMF07XG4gIFxuICAgICAgICBpZiAoICFpbnB1dCApIHJldHVybjsgLy8gcmV0dXJuIGlmIG5vIGlucHV0IGZvdW5kXG4gIFxuICAgICAgICAvLyBtYW5hZ2UgdGhlIGRvbSBtYW5pcHVsYXRpb25cbiAgICAgICAgaWYgKCBpbnB1dC50eXBlID09PSAnY2hlY2tib3gnICkgeyAvL2NoZWNrYm94ZXNcbiAgICAgICAgICBpZiAoICFpbnB1dFtjaGVja2VkXSApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGxhYmVsLGFjdGl2ZSk7XG4gICAgICAgICAgICBpbnB1dFtnZXRBdHRyaWJ1dGVdKGNoZWNrZWQpO1xuICAgICAgICAgICAgaW5wdXRbc2V0QXR0cmlidXRlXShjaGVja2VkLGNoZWNrZWQpO1xuICAgICAgICAgICAgaW5wdXRbY2hlY2tlZF0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhsYWJlbCxhY3RpdmUpO1xuICAgICAgICAgICAgaW5wdXRbZ2V0QXR0cmlidXRlXShjaGVja2VkKTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZShjaGVja2VkKTtcbiAgICAgICAgICAgIGlucHV0W2NoZWNrZWRdID0gZmFsc2U7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBpZiAoIXRvZ2dsZWQpIHsgLy8gcHJldmVudCB0cmlnZ2VyaW5nIHRoZSBldmVudCB0d2ljZVxuICAgICAgICAgICAgdG9nZ2xlZCA9IHRydWU7XG4gICAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGlucHV0LCBjaGFuZ2VFdmVudCwgY29tcG9uZW50KTsgLy90cmlnZ2VyIHRoZSBjaGFuZ2UgZm9yIHRoZSBpbnB1dFxuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBjaGFuZ2VFdmVudCwgY29tcG9uZW50KTsgLy90cmlnZ2VyIHRoZSBjaGFuZ2UgZm9yIHRoZSBidG4tZ3JvdXBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmICggaW5wdXQudHlwZSA9PT0gJ3JhZGlvJyAmJiAhdG9nZ2xlZCApIHsgLy8gcmFkaW8gYnV0dG9uc1xuICAgICAgICAgIC8vIGRvbid0IHRyaWdnZXIgaWYgYWxyZWFkeSBhY3RpdmUgKHRoZSBPUiBjb25kaXRpb24gaXMgYSBoYWNrIHRvIGNoZWNrIGlmIHRoZSBidXR0b25zIHdlcmUgc2VsZWN0ZWQgd2l0aCBrZXkgcHJlc3MgYW5kIE5PVCBtb3VzZSBjbGljaylcbiAgICAgICAgICBpZiAoICFpbnB1dFtjaGVja2VkXSB8fCAoZS5zY3JlZW5YID09PSAwICYmIGUuc2NyZWVuWSA9PSAwKSApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGxhYmVsLGFjdGl2ZSk7XG4gICAgICAgICAgICBhZGRDbGFzcyhsYWJlbCxmb2N1c0V2ZW50KTtcbiAgICAgICAgICAgIGlucHV0W3NldEF0dHJpYnV0ZV0oY2hlY2tlZCxjaGVja2VkKTtcbiAgICAgICAgICAgIGlucHV0W2NoZWNrZWRdID0gdHJ1ZTtcbiAgICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoaW5wdXQsIGNoYW5nZUV2ZW50LCBjb21wb25lbnQpOyAvL3RyaWdnZXIgdGhlIGNoYW5nZSBmb3IgdGhlIGlucHV0XG4gICAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIGNoYW5nZUV2ZW50LCBjb21wb25lbnQpOyAvL3RyaWdnZXIgdGhlIGNoYW5nZSBmb3IgdGhlIGJ0bi1ncm91cFxuICBcbiAgICAgICAgICAgIHRvZ2dsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxsID0gbGFiZWxzW2xlbmd0aF07IGk8bGw7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgb3RoZXJMYWJlbCA9IGxhYmVsc1tpXSwgb3RoZXJJbnB1dCA9IG90aGVyTGFiZWxbZ2V0RWxlbWVudHNCeVRhZ05hbWVdKElOUFVUKVswXTtcbiAgICAgICAgICAgICAgaWYgKCBvdGhlckxhYmVsICE9PSBsYWJlbCAmJiBoYXNDbGFzcyhvdGhlckxhYmVsLGFjdGl2ZSkgKSAge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKG90aGVyTGFiZWwsYWN0aXZlKTtcbiAgICAgICAgICAgICAgICBvdGhlcklucHV0LnJlbW92ZUF0dHJpYnV0ZShjaGVja2VkKTtcbiAgICAgICAgICAgICAgICBvdGhlcklucHV0W2NoZWNrZWRdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChvdGhlcklucHV0LCBjaGFuZ2VFdmVudCwgY29tcG9uZW50KTsgLy8gdHJpZ2dlciB0aGUgY2hhbmdlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IHRvZ2dsZWQgPSBmYWxzZTsgfSwgNTAgKTtcbiAgICAgIH0sXG4gICAgICBmb2N1c0hhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGFkZENsYXNzKGVbdGFyZ2V0XVtwYXJlbnROb2RlXSxmb2N1c0V2ZW50KTtcbiAgICAgIH0sXG4gICAgICBibHVySGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZVt0YXJnZXRdW3BhcmVudE5vZGVdLGZvY3VzRXZlbnQpO1xuICAgICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggISggc3RyaW5nQnV0dG9uIGluIGVsZW1lbnQgKSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgICAgIG9uKCBlbGVtZW50LCBjbGlja0V2ZW50LCB0b2dnbGUgKTtcbiAgICAgIG9uKCBlbGVtZW50LCBrZXl1cEV2ZW50LCBrZXlIYW5kbGVyICksIG9uKCBlbGVtZW50LCBrZXlkb3duRXZlbnQsIHByZXZlbnRTY3JvbGwgKTtcbiAgXG4gICAgICB2YXIgYWxsQnRucyA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWxlbWVudCwgJ2J0bicpO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPGFsbEJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGlucHV0ID0gYWxsQnRuc1tpXVtnZXRFbGVtZW50c0J5VGFnTmFtZV0oSU5QVVQpWzBdO1xuICAgICAgICBvbiggaW5wdXQsIGZvY3VzRXZlbnQsIGZvY3VzSGFuZGxlciksIG9uKCBpbnB1dCwgJ2JsdXInLCBibHVySGFuZGxlcik7XG4gICAgICB9ICAgIFxuICAgIH1cbiAgXG4gICAgLy8gYWN0aXZhdGUgaXRlbXMgb24gbG9hZFxuICAgIHZhciBsYWJlbHNUb0FDdGl2YXRlID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbGVtZW50LCAnYnRuJyksIGxibGwgPSBsYWJlbHNUb0FDdGl2YXRlW2xlbmd0aF07XG4gICAgZm9yICh2YXIgaT0wOyBpPGxibGw7IGkrKykge1xuICAgICAgIWhhc0NsYXNzKGxhYmVsc1RvQUN0aXZhdGVbaV0sYWN0aXZlKSAmJiBxdWVyeUVsZW1lbnQoJ2lucHV0OmNoZWNrZWQnLGxhYmVsc1RvQUN0aXZhdGVbaV0pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBhZGRDbGFzcyhsYWJlbHNUb0FDdGl2YXRlW2ldLGFjdGl2ZSk7XG4gICAgfVxuICAgIGVsZW1lbnRbc3RyaW5nQnV0dG9uXSA9IHRoaXM7XG4gIH07XG4gIFxuICAvLyBCVVRUT04gREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nQnV0dG9uLCBCdXR0b24sICdbJytkYXRhVG9nZ2xlKyc9XCJidXR0b25zXCJdJyBdICk7XG4gIFxuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgQ2Fyb3VzZWxcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBDQVJPVVNFTCBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT1cbiAgdmFyIENhcm91c2VsID0gZnVuY3Rpb24oIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnRcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG4gIFxuICAgIC8vIHNldCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFxuICAgIC8vIERBVEEgQVBJXG4gICAgdmFyIGludGVydmFsQXR0cmlidXRlID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFJbnRlcnZhbCksXG4gICAgICAgIGludGVydmFsT3B0aW9uID0gb3B0aW9uc1tpbnRlcnZhbF0sXG4gICAgICAgIGludGVydmFsRGF0YSA9IGludGVydmFsQXR0cmlidXRlID09PSAnZmFsc2UnID8gMCA6IHBhcnNlSW50KGludGVydmFsQXR0cmlidXRlKSwgIFxuICAgICAgICBwYXVzZURhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVBhdXNlKSA9PT0gaG92ZXJFdmVudCB8fCBmYWxzZSxcbiAgICAgICAga2V5Ym9hcmREYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFLZXlib2FyZCkgPT09ICd0cnVlJyB8fCBmYWxzZSxcbiAgICAgIFxuICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgIGNvbXBvbmVudCA9ICdjYXJvdXNlbCcsXG4gICAgICAgIHBhdXNlZCA9ICdwYXVzZWQnLFxuICAgICAgICBkaXJlY3Rpb24gPSAnZGlyZWN0aW9uJyxcbiAgICAgICAgY2Fyb3VzZWxJdGVtID0gJ2Nhcm91c2VsLWl0ZW0nLFxuICAgICAgICBkYXRhU2xpZGVUbyA9ICdkYXRhLXNsaWRlLXRvJzsgXG4gIFxuICAgIHRoaXNba2V5Ym9hcmRdID0gb3B0aW9uc1trZXlib2FyZF0gPT09IHRydWUgfHwga2V5Ym9hcmREYXRhO1xuICAgIHRoaXNbcGF1c2VdID0gKG9wdGlvbnNbcGF1c2VdID09PSBob3ZlckV2ZW50IHx8IHBhdXNlRGF0YSkgPyBob3ZlckV2ZW50IDogZmFsc2U7IC8vIGZhbHNlIC8gaG92ZXJcbiAgXG4gICAgdGhpc1tpbnRlcnZhbF0gPSB0eXBlb2YgaW50ZXJ2YWxPcHRpb24gPT09ICdudW1iZXInID8gaW50ZXJ2YWxPcHRpb25cbiAgICAgICAgICAgICAgICAgICA6IGludGVydmFsT3B0aW9uID09PSBmYWxzZSB8fCBpbnRlcnZhbERhdGEgPT09IDAgfHwgaW50ZXJ2YWxEYXRhID09PSBmYWxzZSA/IDBcbiAgICAgICAgICAgICAgICAgICA6IGlzTmFOKGludGVydmFsRGF0YSkgPyA1MDAwIC8vIGJvb3RzdHJhcCBjYXJvdXNlbCBkZWZhdWx0IGludGVydmFsXG4gICAgICAgICAgICAgICAgICAgOiBpbnRlcnZhbERhdGE7XG4gIFxuICAgIC8vIGJpbmQsIGV2ZW50IHRhcmdldHNcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGluZGV4ID0gZWxlbWVudC5pbmRleCA9IDAsIHRpbWVyID0gZWxlbWVudC50aW1lciA9IDAsIFxuICAgICAgaXNTbGlkaW5nID0gZmFsc2UsIC8vIGlzU2xpZGluZyBwcmV2ZW50cyBjbGljayBldmVudCBoYW5kbGVycyB3aGVuIGFuaW1hdGlvbiBpcyBydW5uaW5nXG4gICAgICBpc1RvdWNoID0gZmFsc2UsIHN0YXJ0WFBvc2l0aW9uID0gbnVsbCwgY3VycmVudFhQb3NpdGlvbiA9IG51bGwsIGVuZFhQb3NpdGlvbiA9IG51bGwsIC8vIHRvdWNoIGFuZCBldmVudCBjb29yZGluYXRlc1xuICAgICAgc2xpZGVzID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbGVtZW50LGNhcm91c2VsSXRlbSksIHRvdGFsID0gc2xpZGVzW2xlbmd0aF0sXG4gICAgICBzbGlkZURpcmVjdGlvbiA9IHRoaXNbZGlyZWN0aW9uXSA9IGxlZnQsXG4gICAgICBsZWZ0QXJyb3cgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsZW1lbnQsY29tcG9uZW50KyctY29udHJvbC1wcmV2JylbMF0sIFxuICAgICAgcmlnaHRBcnJvdyA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWxlbWVudCxjb21wb25lbnQrJy1jb250cm9sLW5leHQnKVswXSxcbiAgICAgIGluZGljYXRvciA9IHF1ZXJ5RWxlbWVudCggJy4nK2NvbXBvbmVudCsnLWluZGljYXRvcnMnLCBlbGVtZW50ICksXG4gICAgICBpbmRpY2F0b3JzID0gaW5kaWNhdG9yICYmIGluZGljYXRvcltnZXRFbGVtZW50c0J5VGFnTmFtZV0oIFwiTElcIiApIHx8IFtdO1xuICBcbiAgICAvLyBpbnZhbGlkYXRlIHdoZW4gbm90IGVub3VnaCBpdGVtc1xuICAgIGlmICh0b3RhbCA8IDIpIHsgcmV0dXJuOyB9XG4gIFxuICAgIC8vIGhhbmRsZXJzXG4gICAgdmFyIHBhdXNlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCBzZWxmW2ludGVydmFsXSAhPT1mYWxzZSAmJiAhaGFzQ2xhc3MoZWxlbWVudCxwYXVzZWQpICkge1xuICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQscGF1c2VkKTtcbiAgICAgICAgICAhaXNTbGlkaW5nICYmICggY2xlYXJJbnRlcnZhbCh0aW1lciksIHRpbWVyID0gbnVsbCApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVzdW1lSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIHNlbGZbaW50ZXJ2YWxdICE9PSBmYWxzZSAmJiBoYXNDbGFzcyhlbGVtZW50LHBhdXNlZCkgKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCxwYXVzZWQpO1xuICAgICAgICAgICFpc1NsaWRpbmcgJiYgKCBjbGVhckludGVydmFsKHRpbWVyKSwgdGltZXIgPSBudWxsICk7XG4gICAgICAgICAgIWlzU2xpZGluZyAmJiBzZWxmLmN5Y2xlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbmRpY2F0b3JIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlW3ByZXZlbnREZWZhdWx0XSgpO1xuICAgICAgICBpZiAoaXNTbGlkaW5nKSByZXR1cm47XG4gIFxuICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBlW3RhcmdldF07IC8vIGV2ZW50IHRhcmdldCB8IHRoZSBjdXJyZW50IGFjdGl2ZSBpdGVtXG4gIFxuICAgICAgICBpZiAoIGV2ZW50VGFyZ2V0ICYmICFoYXNDbGFzcyhldmVudFRhcmdldCxhY3RpdmUpICYmIGV2ZW50VGFyZ2V0W2dldEF0dHJpYnV0ZV0oZGF0YVNsaWRlVG8pICkge1xuICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoIGV2ZW50VGFyZ2V0W2dldEF0dHJpYnV0ZV0oZGF0YVNsaWRlVG8pLCAxMCApO1xuICAgICAgICB9IGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgXG4gICAgICAgIHNlbGYuc2xpZGVUbyggaW5kZXggKTsgLy9EbyB0aGUgc2xpZGVcbiAgICAgIH0sXG4gICAgICBjb250cm9sc0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlW3ByZXZlbnREZWZhdWx0XSgpO1xuICAgICAgICBpZiAoaXNTbGlkaW5nKSByZXR1cm47XG4gIFxuICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICBcbiAgICAgICAgaWYgKCBldmVudFRhcmdldCA9PT0gcmlnaHRBcnJvdyApIHtcbiAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9IGVsc2UgaWYgKCBldmVudFRhcmdldCA9PT0gbGVmdEFycm93ICkge1xuICAgICAgICAgIGluZGV4LS07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHNlbGYuc2xpZGVUbyggaW5kZXggKTsgLy9EbyB0aGUgc2xpZGVcbiAgICAgIH0sXG4gICAgICBrZXlIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGlzU2xpZGluZykgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuc2xpZGVUbyggaW5kZXggKTsgLy9EbyB0aGUgc2xpZGVcbiAgICAgIH0sXG4gICAgICAvLyB0b3VjaCBldmVudHNcbiAgICAgIHRvZ2dsZVRvdWNoRXZlbnRzID0gZnVuY3Rpb24odG9nZ2xlKXtcbiAgICAgICAgdG9nZ2xlKCBlbGVtZW50LCB0b3VjaEV2ZW50cy5tb3ZlLCB0b3VjaE1vdmVIYW5kbGVyLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgICB0b2dnbGUoIGVsZW1lbnQsIHRvdWNoRXZlbnRzLmVuZCwgdG91Y2hFbmRIYW5kbGVyLCBwYXNzaXZlSGFuZGxlciApO1xuICAgIH0sICBcbiAgICAgIHRvdWNoRG93bkhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICggaXNUb3VjaCApIHsgcmV0dXJuOyB9IFxuICAgICAgICAgIFxuICAgICAgICBzdGFydFhQb3NpdGlvbiA9IHBhcnNlSW50KGUudG91Y2hlc1swXS5wYWdlWCk7XG4gIFxuICAgICAgICBpZiAoIGVsZW1lbnQuY29udGFpbnMoZVt0YXJnZXRdKSApIHtcbiAgICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcbiAgICAgICAgICB0b2dnbGVUb3VjaEV2ZW50cyhvbik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b3VjaE1vdmVIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoICFpc1RvdWNoICkgeyBlLnByZXZlbnREZWZhdWx0KCk7IHJldHVybjsgfVxuICBcbiAgICAgICAgY3VycmVudFhQb3NpdGlvbiA9IHBhcnNlSW50KGUudG91Y2hlc1swXS5wYWdlWCk7XG4gICAgICAgIFxuICAgICAgICAvL2NhbmNlbCB0b3VjaCBpZiBtb3JlIHRoYW4gb25lIHRvdWNoZXMgZGV0ZWN0ZWRcbiAgICAgICAgaWYgKCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICYmIGUudG91Y2hlc1tsZW5ndGhdID4gMSApIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG91Y2hFbmRIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoICFpc1RvdWNoIHx8IGlzU2xpZGluZyApIHsgcmV0dXJuIH1cbiAgICAgICAgXG4gICAgICAgIGVuZFhQb3NpdGlvbiA9IGN1cnJlbnRYUG9zaXRpb24gfHwgcGFyc2VJbnQoIGUudG91Y2hlc1swXS5wYWdlWCApO1xuICBcbiAgICAgICAgaWYgKCBpc1RvdWNoICkge1xuICAgICAgICAgIGlmICggKCFlbGVtZW50LmNvbnRhaW5zKGVbdGFyZ2V0XSkgfHwgIWVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSApICYmIE1hdGguYWJzKHN0YXJ0WFBvc2l0aW9uIC0gZW5kWFBvc2l0aW9uKSA8IDc1ICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGN1cnJlbnRYUG9zaXRpb24gPCBzdGFydFhQb3NpdGlvbiApIHtcbiAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGN1cnJlbnRYUG9zaXRpb24gPiBzdGFydFhQb3NpdGlvbiApIHtcbiAgICAgICAgICAgICAgaW5kZXgtLTsgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNUb3VjaCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5zbGlkZVRvKGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9nZ2xlVG91Y2hFdmVudHMob2ZmKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgXG4gICAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAgIGlzRWxlbWVudEluU2Nyb2xsUmFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZWN0ID0gZWxlbWVudFtnZXRCb3VuZGluZ0NsaWVudFJlY3RdKCksXG4gICAgICAgICAgdmlld3BvcnRIZWlnaHQgPSBnbG9iYWxPYmplY3RbaW5uZXJIZWlnaHRdIHx8IEhUTUxbY2xpZW50SGVpZ2h0XVxuICAgICAgICByZXR1cm4gcmVjdFt0b3BdIDw9IHZpZXdwb3J0SGVpZ2h0ICYmIHJlY3RbYm90dG9tXSA+PSAwOyAvLyBib3R0b20gJiYgdG9wXG4gICAgICB9LCAgICBcbiAgICAgIHNldEFjdGl2ZVBhZ2UgPSBmdW5jdGlvbiggcGFnZUluZGV4ICkgeyAvL2luZGljYXRvcnNcbiAgICAgICAgZm9yICggdmFyIGkgPSAwLCBpY2wgPSBpbmRpY2F0b3JzW2xlbmd0aF07IGkgPCBpY2w7IGkrKyApIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyhpbmRpY2F0b3JzW2ldLGFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGljYXRvcnNbcGFnZUluZGV4XSkgYWRkQ2xhc3MoaW5kaWNhdG9yc1twYWdlSW5kZXhdLCBhY3RpdmUpO1xuICAgICAgfTtcbiAgXG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgdGhpcy5jeWNsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICB9XG4gIFxuICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgaXNFbGVtZW50SW5TY3JvbGxSYW5nZSgpICYmIChpbmRleCsrLCBzZWxmLnNsaWRlVG8oIGluZGV4ICkgKTtcbiAgICAgIH0sIHRoaXNbaW50ZXJ2YWxdKTtcbiAgICB9O1xuICAgIHRoaXMuc2xpZGVUbyA9IGZ1bmN0aW9uKCBuZXh0ICkge1xuICAgICAgaWYgKGlzU2xpZGluZykgcmV0dXJuOyAvLyB3aGVuIGNvbnRyb2xlZCB2aWEgbWV0aG9kcywgbWFrZSBzdXJlIHRvIGNoZWNrIGFnYWluICAgICAgXG4gICAgICBcbiAgICAgIHZhciBhY3RpdmVJdGVtID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpLCAvLyB0aGUgY3VycmVudCBhY3RpdmVcbiAgICAgICAgICBvcmllbnRhdGlvbjtcbiAgICAgIFxuICAgICAgLy8gZmlyc3QgcmV0dXJuIGlmIHdlJ3JlIG9uIHRoZSBzYW1lIGl0ZW0gIzIyN1xuICAgICAgaWYgKCBhY3RpdmVJdGVtID09PSBuZXh0ICkge1xuICAgICAgICByZXR1cm47XG4gICAgICAvLyBvciBkZXRlcm1pbmUgc2xpZGVEaXJlY3Rpb25cbiAgICAgIH0gZWxzZSBpZiAgKCAoYWN0aXZlSXRlbSA8IG5leHQgKSB8fCAoYWN0aXZlSXRlbSA9PT0gMCAmJiBuZXh0ID09PSB0b3RhbCAtMSApICkge1xuICAgICAgICBzbGlkZURpcmVjdGlvbiA9IHNlbGZbZGlyZWN0aW9uXSA9IGxlZnQ7IC8vIG5leHRcbiAgICAgIH0gZWxzZSBpZiAgKCAoYWN0aXZlSXRlbSA+IG5leHQpIHx8IChhY3RpdmVJdGVtID09PSB0b3RhbCAtIDEgJiYgbmV4dCA9PT0gMCApICkge1xuICAgICAgICBzbGlkZURpcmVjdGlvbiA9IHNlbGZbZGlyZWN0aW9uXSA9IHJpZ2h0OyAvLyBwcmV2XG4gICAgICB9XG4gIFxuICAgICAgLy8gZmluZCB0aGUgcmlnaHQgbmV4dCBpbmRleCBcbiAgICAgIGlmICggbmV4dCA8IDAgKSB7IG5leHQgPSB0b3RhbCAtIDE7IH0gXG4gICAgICBlbHNlIGlmICggbmV4dCA+PSB0b3RhbCApeyBuZXh0ID0gMDsgfVxuICBcbiAgICAgIC8vIHVwZGF0ZSBpbmRleFxuICAgICAgaW5kZXggPSBuZXh0O1xuICBcbiAgICAgIG9yaWVudGF0aW9uID0gc2xpZGVEaXJlY3Rpb24gPT09IGxlZnQgPyAnbmV4dCcgOiAncHJldic7IC8vZGV0ZXJtaW5lIHR5cGVcbiAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2xpZGVFdmVudCwgY29tcG9uZW50LCBzbGlkZXNbbmV4dF0pOyAvLyBoZXJlIHdlIGdvIHdpdGggdGhlIHNsaWRlXG4gIFxuICAgICAgaXNTbGlkaW5nID0gdHJ1ZTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgc2V0QWN0aXZlUGFnZSggbmV4dCApO1xuICBcbiAgICAgIGlmICggc3VwcG9ydFRyYW5zaXRpb25zICYmIGhhc0NsYXNzKGVsZW1lbnQsJ3NsaWRlJykgKSB7XG4gIFxuICAgICAgICBhZGRDbGFzcyhzbGlkZXNbbmV4dF0sY2Fyb3VzZWxJdGVtICsnLScrIG9yaWVudGF0aW9uKTtcbiAgICAgICAgc2xpZGVzW25leHRdW29mZnNldFdpZHRoXTtcbiAgICAgICAgYWRkQ2xhc3Moc2xpZGVzW25leHRdLGNhcm91c2VsSXRlbSArJy0nKyBzbGlkZURpcmVjdGlvbik7XG4gICAgICAgIGFkZENsYXNzKHNsaWRlc1thY3RpdmVJdGVtXSxjYXJvdXNlbEl0ZW0gKyctJysgc2xpZGVEaXJlY3Rpb24pO1xuICBcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoc2xpZGVzW25leHRdLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgdmFyIHRpbWVvdXQgPSBlICYmIGVbdGFyZ2V0XSAhPT0gc2xpZGVzW25leHRdID8gZS5lbGFwc2VkVGltZSoxMDAwKzEwMCA6IDIwO1xuICAgICAgICAgIFxuICAgICAgICAgIGlzU2xpZGluZyAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpc1NsaWRpbmcgPSBmYWxzZTtcbiAgXG4gICAgICAgICAgICBhZGRDbGFzcyhzbGlkZXNbbmV4dF0sYWN0aXZlKTtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlc1thY3RpdmVJdGVtXSxhY3RpdmUpO1xuICBcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlc1tuZXh0XSxjYXJvdXNlbEl0ZW0gKyctJysgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGVzW25leHRdLGNhcm91c2VsSXRlbSArJy0nKyBzbGlkZURpcmVjdGlvbik7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzbGlkZXNbYWN0aXZlSXRlbV0sY2Fyb3VzZWxJdGVtICsnLScrIHNsaWRlRGlyZWN0aW9uKTtcbiAgXG4gICAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNsaWRFdmVudCwgY29tcG9uZW50LCBzbGlkZXNbbmV4dF0pO1xuICBcbiAgICAgICAgICAgIGlmICggIURPQy5oaWRkZW4gJiYgc2VsZltpbnRlcnZhbF0gJiYgIWhhc0NsYXNzKGVsZW1lbnQscGF1c2VkKSApIHtcbiAgICAgICAgICAgICAgc2VsZi5jeWNsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICB9KTtcbiAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGFzcyhzbGlkZXNbbmV4dF0sYWN0aXZlKTtcbiAgICAgICAgc2xpZGVzW25leHRdW29mZnNldFdpZHRoXTtcbiAgICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGVzW2FjdGl2ZUl0ZW1dLGFjdGl2ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKCBzZWxmW2ludGVydmFsXSAmJiAhaGFzQ2xhc3MoZWxlbWVudCxwYXVzZWQpICkge1xuICAgICAgICAgICAgc2VsZi5jeWNsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNsaWRFdmVudCwgY29tcG9uZW50LCBzbGlkZXNbbmV4dF0pO1xuICAgICAgICB9LCAxMDAgKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZ2V0QWN0aXZlSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2xpZGVzW2luZGV4T2ZdKGdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWxlbWVudCxjYXJvdXNlbEl0ZW0rJyBhY3RpdmUnKVswXSkgfHwgMDtcbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKHN0cmluZ0Nhcm91c2VsIGluIGVsZW1lbnQgKSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgXG4gICAgICBpZiAoIHNlbGZbcGF1c2VdICYmIHNlbGZbaW50ZXJ2YWxdICkge1xuICAgICAgICBvbiggZWxlbWVudCwgbW91c2VIb3ZlclswXSwgcGF1c2VIYW5kbGVyICk7XG4gICAgICAgIG9uKCBlbGVtZW50LCBtb3VzZUhvdmVyWzFdLCByZXN1bWVIYW5kbGVyICk7XG4gICAgICAgIG9uKCBlbGVtZW50LCB0b3VjaEV2ZW50cy5zdGFydCwgcGF1c2VIYW5kbGVyLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgICBvbiggZWxlbWVudCwgdG91Y2hFdmVudHMuZW5kLCByZXN1bWVIYW5kbGVyLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgfVxuICAgIFxuICAgICAgc2xpZGVzW2xlbmd0aF0gPiAxICYmIG9uKCBlbGVtZW50LCB0b3VjaEV2ZW50cy5zdGFydCwgdG91Y2hEb3duSGFuZGxlciwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgXG4gICAgICByaWdodEFycm93ICYmIG9uKCByaWdodEFycm93LCBjbGlja0V2ZW50LCBjb250cm9sc0hhbmRsZXIgKTtcbiAgICAgIGxlZnRBcnJvdyAmJiBvbiggbGVmdEFycm93LCBjbGlja0V2ZW50LCBjb250cm9sc0hhbmRsZXIgKTtcbiAgICBcbiAgICAgIGluZGljYXRvciAmJiBvbiggaW5kaWNhdG9yLCBjbGlja0V2ZW50LCBpbmRpY2F0b3JIYW5kbGVyICk7XG4gICAgICBzZWxmW2tleWJvYXJkXSAmJiBvbiggZ2xvYmFsT2JqZWN0LCBrZXlkb3duRXZlbnQsIGtleUhhbmRsZXIgKTtcbiAgXG4gICAgfVxuICAgIGlmIChzZWxmLmdldEFjdGl2ZUluZGV4KCk8MCkge1xuICAgICAgc2xpZGVzW2xlbmd0aF0gJiYgYWRkQ2xhc3Moc2xpZGVzWzBdLGFjdGl2ZSk7XG4gICAgICBpbmRpY2F0b3JzW2xlbmd0aF0gJiYgc2V0QWN0aXZlUGFnZSgwKTtcbiAgICB9XG4gIFxuICAgIGlmICggc2VsZltpbnRlcnZhbF0gKXsgc2VsZi5jeWNsZSgpOyB9XG4gICAgZWxlbWVudFtzdHJpbmdDYXJvdXNlbF0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gQ0FST1VTRUwgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nQ2Fyb3VzZWwsIENhcm91c2VsLCAnWycrZGF0YVJpZGUrJz1cImNhcm91c2VsXCJdJyBdICk7XG4gIFxuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgQ29sbGFwc2VcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gQ09MTEFQU0UgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09XG4gIHZhciBDb2xsYXBzZSA9IGZ1bmN0aW9uKCBlbGVtZW50LCBvcHRpb25zICkge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXG4gICAgLy8gZXZlbnQgdGFyZ2V0cyBhbmQgY29uc3RhbnRzXG4gICAgdmFyIGFjY29yZGlvbiA9IG51bGwsIGNvbGxhcHNlID0gbnVsbCwgc2VsZiA9IHRoaXMsIFxuICAgICAgYWNjb3JkaW9uRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXSgnZGF0YS1wYXJlbnQnKSxcbiAgICAgIGFjdGl2ZUNvbGxhcHNlLCBhY3RpdmVFbGVtZW50LFxuICBcbiAgICAgIC8vIGNvbXBvbmVudCBzdHJpbmdzXG4gICAgICBjb21wb25lbnQgPSAnY29sbGFwc2UnLFxuICAgICAgY29sbGFwc2VkID0gJ2NvbGxhcHNlZCcsXG4gICAgICBpc0FuaW1hdGluZyA9ICdpc0FuaW1hdGluZycsXG4gIFxuICAgICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgICBvcGVuQWN0aW9uID0gZnVuY3Rpb24oY29sbGFwc2VFbGVtZW50LHRvZ2dsZSkge1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGNvbGxhcHNlRWxlbWVudCwgc2hvd0V2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICBjb2xsYXBzZUVsZW1lbnRbaXNBbmltYXRpbmddID0gdHJ1ZTtcbiAgICAgICAgYWRkQ2xhc3MoY29sbGFwc2VFbGVtZW50LGNvbGxhcHNpbmcpO1xuICAgICAgICByZW1vdmVDbGFzcyhjb2xsYXBzZUVsZW1lbnQsY29tcG9uZW50KTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50W3N0eWxlXVtoZWlnaHRdID0gY29sbGFwc2VFbGVtZW50W3Njcm9sbEhlaWdodF0gKyAncHgnO1xuICAgICAgICBcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoY29sbGFwc2VFbGVtZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb2xsYXBzZUVsZW1lbnRbaXNBbmltYXRpbmddID0gZmFsc2U7XG4gICAgICAgICAgY29sbGFwc2VFbGVtZW50W3NldEF0dHJpYnV0ZV0oYXJpYUV4cGFuZGVkLCd0cnVlJyk7XG4gICAgICAgICAgdG9nZ2xlW3NldEF0dHJpYnV0ZV0oYXJpYUV4cGFuZGVkLCd0cnVlJyk7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoY29sbGFwc2VFbGVtZW50LGNvbGxhcHNpbmcpO1xuICAgICAgICAgIGFkZENsYXNzKGNvbGxhcHNlRWxlbWVudCwgY29tcG9uZW50KTtcbiAgICAgICAgICBhZGRDbGFzcyhjb2xsYXBzZUVsZW1lbnQsc2hvd0NsYXNzKTtcbiAgICAgICAgICBjb2xsYXBzZUVsZW1lbnRbc3R5bGVdW2hlaWdodF0gPSAnJztcbiAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGNvbGxhcHNlRWxlbWVudCwgc2hvd25FdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY2xvc2VBY3Rpb24gPSBmdW5jdGlvbihjb2xsYXBzZUVsZW1lbnQsdG9nZ2xlKSB7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoY29sbGFwc2VFbGVtZW50LCBoaWRlRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudFtpc0FuaW1hdGluZ10gPSB0cnVlO1xuICAgICAgICBjb2xsYXBzZUVsZW1lbnRbc3R5bGVdW2hlaWdodF0gPSBjb2xsYXBzZUVsZW1lbnRbc2Nyb2xsSGVpZ2h0XSArICdweCc7IC8vIHNldCBoZWlnaHQgZmlyc3RcbiAgICAgICAgcmVtb3ZlQ2xhc3MoY29sbGFwc2VFbGVtZW50LGNvbXBvbmVudCk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGNvbGxhcHNlRWxlbWVudCxzaG93Q2xhc3MpO1xuICAgICAgICBhZGRDbGFzcyhjb2xsYXBzZUVsZW1lbnQsY29sbGFwc2luZyk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudFtvZmZzZXRXaWR0aF07IC8vIGZvcmNlIHJlZmxvdyB0byBlbmFibGUgdHJhbnNpdGlvblxuICAgICAgICBjb2xsYXBzZUVsZW1lbnRbc3R5bGVdW2hlaWdodF0gPSAnMHB4JztcbiAgICAgICAgXG4gICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGNvbGxhcHNlRWxlbWVudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29sbGFwc2VFbGVtZW50W2lzQW5pbWF0aW5nXSA9IGZhbHNlO1xuICAgICAgICAgIGNvbGxhcHNlRWxlbWVudFtzZXRBdHRyaWJ1dGVdKGFyaWFFeHBhbmRlZCwnZmFsc2UnKTtcbiAgICAgICAgICB0b2dnbGVbc2V0QXR0cmlidXRlXShhcmlhRXhwYW5kZWQsJ2ZhbHNlJyk7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoY29sbGFwc2VFbGVtZW50LGNvbGxhcHNpbmcpO1xuICAgICAgICAgIGFkZENsYXNzKGNvbGxhcHNlRWxlbWVudCxjb21wb25lbnQpO1xuICAgICAgICAgIGNvbGxhcHNlRWxlbWVudFtzdHlsZV1baGVpZ2h0XSA9ICcnO1xuICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoY29sbGFwc2VFbGVtZW50LCBoaWRkZW5FdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBocmVmID0gZWxlbWVudC5ocmVmICYmIGVsZW1lbnRbZ2V0QXR0cmlidXRlXSgnaHJlZicpLFxuICAgICAgICAgIHBhcmVudCA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhVGFyZ2V0KSxcbiAgICAgICAgICBpZCA9IGhyZWYgfHwgKCBwYXJlbnQgJiYgcGFyZW50LmNoYXJBdCgwKSA9PT0gJyMnICkgJiYgcGFyZW50O1xuICAgICAgICByZXR1cm4gaWQgJiYgcXVlcnlFbGVtZW50KGlkKTtcbiAgICAgIH07XG4gICAgXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICB0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGVbcHJldmVudERlZmF1bHRdKCk7XG4gICAgICBpZiAoIWhhc0NsYXNzKGNvbGxhcHNlLHNob3dDbGFzcykpIHsgc2VsZi5zaG93KCk7IH0gXG4gICAgICBlbHNlIHsgc2VsZi5oaWRlKCk7IH1cbiAgICB9O1xuICAgIHRoaXMuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCBjb2xsYXBzZVtpc0FuaW1hdGluZ10gKSByZXR1cm47ICAgIFxuICAgICAgY2xvc2VBY3Rpb24oY29sbGFwc2UsZWxlbWVudCk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LGNvbGxhcHNlZCk7XG4gICAgfTtcbiAgICB0aGlzLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggYWNjb3JkaW9uICkge1xuICAgICAgICBhY3RpdmVDb2xsYXBzZSA9IHF1ZXJ5RWxlbWVudCgnLicrY29tcG9uZW50KycuJytzaG93Q2xhc3MsYWNjb3JkaW9uKTtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUNvbGxhcHNlICYmIChxdWVyeUVsZW1lbnQoJ1snK2RhdGFUYXJnZXQrJz1cIiMnK2FjdGl2ZUNvbGxhcHNlLmlkKydcIl0nLGFjY29yZGlvbilcbiAgICAgICAgICAgICAgICAgICAgICB8fCBxdWVyeUVsZW1lbnQoJ1tocmVmPVwiIycrYWN0aXZlQ29sbGFwc2UuaWQrJ1wiXScsYWNjb3JkaW9uKSApO1xuICAgICAgfVxuICBcbiAgICAgIGlmICggIWNvbGxhcHNlW2lzQW5pbWF0aW5nXSB8fCBhY3RpdmVDb2xsYXBzZSAmJiAhYWN0aXZlQ29sbGFwc2VbaXNBbmltYXRpbmddICkge1xuICAgICAgICBpZiAoIGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlQ29sbGFwc2UgIT09IGNvbGxhcHNlICkge1xuICAgICAgICAgIGNsb3NlQWN0aW9uKGFjdGl2ZUNvbGxhcHNlLGFjdGl2ZUVsZW1lbnQpOyBcbiAgICAgICAgICBhZGRDbGFzcyhhY3RpdmVFbGVtZW50LGNvbGxhcHNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbkFjdGlvbihjb2xsYXBzZSxlbGVtZW50KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCxjb2xsYXBzZWQpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nQ29sbGFwc2UgaW4gZWxlbWVudCApICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgb24oZWxlbWVudCwgY2xpY2tFdmVudCwgc2VsZi50b2dnbGUpO1xuICAgIH1cbiAgICBjb2xsYXBzZSA9IGdldFRhcmdldCgpO1xuICAgIGNvbGxhcHNlW2lzQW5pbWF0aW5nXSA9IGZhbHNlOyAgLy8gd2hlbiB0cnVlIGl0IHdpbGwgcHJldmVudCBjbGljayBoYW5kbGVycyAgXG4gICAgYWNjb3JkaW9uID0gcXVlcnlFbGVtZW50KG9wdGlvbnMucGFyZW50KSB8fCBhY2NvcmRpb25EYXRhICYmIGdldENsb3Nlc3QoZWxlbWVudCwgYWNjb3JkaW9uRGF0YSk7XG4gICAgZWxlbWVudFtzdHJpbmdDb2xsYXBzZV0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gQ09MTEFQU0UgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nQ29sbGFwc2UsIENvbGxhcHNlLCAnWycrZGF0YVRvZ2dsZSsnPVwiY29sbGFwc2VcIl0nIF0gKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBEcm9wZG93blxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIERST1BET1dOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuICB2YXIgRHJvcGRvd24gPSBmdW5jdGlvbiggZWxlbWVudCwgb3B0aW9uICkge1xuICAgICAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIHNldCBvcHRpb25cbiAgICB0aGlzLnBlcnNpc3QgPSBvcHRpb24gPT09IHRydWUgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKCdkYXRhLXBlcnNpc3QnKSA9PT0gJ3RydWUnIHx8IGZhbHNlO1xuICBcbiAgICAvLyBjb25zdGFudHMsIGV2ZW50IHRhcmdldHMsIHN0cmluZ3NcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGNoaWxkcmVuID0gJ2NoaWxkcmVuJyxcbiAgICAgIHBhcmVudCA9IGVsZW1lbnRbcGFyZW50Tm9kZV0sXG4gICAgICBjb21wb25lbnQgPSAnZHJvcGRvd24nLCBvcGVuID0gJ29wZW4nLFxuICAgICAgcmVsYXRlZFRhcmdldCA9IG51bGwsXG4gICAgICBtZW51ID0gcXVlcnlFbGVtZW50KCcuZHJvcGRvd24tbWVudScsIHBhcmVudCksXG4gICAgICBtZW51SXRlbXMgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHNldCA9IG1lbnVbY2hpbGRyZW5dLCBuZXdTZXQgPSBbXTtcbiAgICAgICAgZm9yICggdmFyIGk9MDsgaTxzZXRbbGVuZ3RoXTsgaSsrICl7XG4gICAgICAgICAgc2V0W2ldW2NoaWxkcmVuXVtsZW5ndGhdICYmIChzZXRbaV1bY2hpbGRyZW5dWzBdLnRhZ05hbWUgPT09ICdBJyAmJiBuZXdTZXRbcHVzaF0oc2V0W2ldW2NoaWxkcmVuXVswXSkpO1xuICAgICAgICAgIHNldFtpXS50YWdOYW1lID09PSAnQScgJiYgbmV3U2V0W3B1c2hdKHNldFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1NldDtcbiAgICAgIH0pKCksXG4gIFxuICAgICAgLy8gcHJldmVudERlZmF1bHQgb24gZW1wdHkgYW5jaG9yIGxpbmtzXG4gICAgICBwcmV2ZW50RW1wdHlBbmNob3IgPSBmdW5jdGlvbihhbmNob3Ipe1xuICAgICAgICAoYW5jaG9yLmhyZWYgJiYgYW5jaG9yLmhyZWYuc2xpY2UoLTEpID09PSAnIycgfHwgYW5jaG9yW3BhcmVudE5vZGVdICYmIGFuY2hvcltwYXJlbnROb2RlXS5ocmVmIFxuICAgICAgICAgICYmIGFuY2hvcltwYXJlbnROb2RlXS5ocmVmLnNsaWNlKC0xKSA9PT0gJyMnKSAmJiB0aGlzW3ByZXZlbnREZWZhdWx0XSgpOyAgICBcbiAgICAgIH0sXG4gIFxuICAgICAgLy8gdG9nZ2xlIGRpc21pc3NpYmxlIGV2ZW50c1xuICAgICAgdG9nZ2xlRGlzbWlzcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0eXBlID0gZWxlbWVudFtvcGVuXSA/IG9uIDogb2ZmO1xuICAgICAgICB0eXBlKERPQywgY2xpY2tFdmVudCwgZGlzbWlzc0hhbmRsZXIpOyBcbiAgICAgICAgdHlwZShET0MsIGtleWRvd25FdmVudCwgcHJldmVudFNjcm9sbCk7XG4gICAgICAgIHR5cGUoRE9DLCBrZXl1cEV2ZW50LCBrZXlIYW5kbGVyKTtcbiAgICAgICAgdHlwZShET0MsIGZvY3VzRXZlbnQsIGRpc21pc3NIYW5kbGVyLCB0cnVlKTtcbiAgICAgIH0sXG4gIFxuICAgICAgLy8gaGFuZGxlcnNcbiAgICAgIGRpc21pc3NIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBlW3RhcmdldF0sIGhhc0RhdGEgPSBldmVudFRhcmdldCAmJiAoZXZlbnRUYXJnZXRbZ2V0QXR0cmlidXRlXShkYXRhVG9nZ2xlKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50VGFyZ2V0W3BhcmVudE5vZGVdICYmIGdldEF0dHJpYnV0ZSBpbiBldmVudFRhcmdldFtwYXJlbnROb2RlXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGV2ZW50VGFyZ2V0W3BhcmVudE5vZGVdW2dldEF0dHJpYnV0ZV0oZGF0YVRvZ2dsZSkpO1xuICAgICAgICBpZiAoIGUudHlwZSA9PT0gZm9jdXNFdmVudCAmJiAoZXZlbnRUYXJnZXQgPT09IGVsZW1lbnQgfHwgZXZlbnRUYXJnZXQgPT09IG1lbnUgfHwgbWVudVtjb250YWluc10oZXZlbnRUYXJnZXQpICkgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICggKGV2ZW50VGFyZ2V0ID09PSBtZW51IHx8IG1lbnVbY29udGFpbnNdKGV2ZW50VGFyZ2V0KSkgJiYgKHNlbGYucGVyc2lzdCB8fCBoYXNEYXRhKSApIHsgcmV0dXJuOyB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQgPSBldmVudFRhcmdldCA9PT0gZWxlbWVudCB8fCBlbGVtZW50W2NvbnRhaW5zXShldmVudFRhcmdldCkgPyBlbGVtZW50IDogbnVsbDtcbiAgICAgICAgICBoaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmVudEVtcHR5QW5jaG9yLmNhbGwoZSxldmVudFRhcmdldCk7XG4gICAgICB9LFxuICAgICAgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICByZWxhdGVkVGFyZ2V0ID0gZWxlbWVudDtcbiAgICAgICAgc2hvdygpO1xuICAgICAgICBwcmV2ZW50RW1wdHlBbmNob3IuY2FsbChlLGVbdGFyZ2V0XSk7XG4gICAgICB9LFxuICAgICAgcHJldmVudFNjcm9sbCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIga2V5ID0gZS53aGljaCB8fCBlLmtleUNvZGU7XG4gICAgICAgIGlmKCBrZXkgPT09IDM4IHx8IGtleSA9PT0gNDAgKSB7IGVbcHJldmVudERlZmF1bHRdKCk7IH1cbiAgICAgIH0sXG4gICAgICBrZXlIYW5kbGVyID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZSxcbiAgICAgICAgICBhY3RpdmVJdGVtID0gRE9DLmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgaWR4ID0gbWVudUl0ZW1zW2luZGV4T2ZdKGFjdGl2ZUl0ZW0pLFxuICAgICAgICAgIGlzU2FtZUVsZW1lbnQgPSBhY3RpdmVJdGVtID09PSBlbGVtZW50LFxuICAgICAgICAgIGlzSW5zaWRlTWVudSA9IG1lbnVbY29udGFpbnNdKGFjdGl2ZUl0ZW0pLFxuICAgICAgICAgIGlzTWVudUl0ZW0gPSBhY3RpdmVJdGVtW3BhcmVudE5vZGVdID09PSBtZW51IHx8IGFjdGl2ZUl0ZW1bcGFyZW50Tm9kZV1bcGFyZW50Tm9kZV0gPT09IG1lbnU7ICAgICAgICAgIFxuICBcbiAgICAgICAgaWYgKCBpc01lbnVJdGVtICkgeyAvLyBuYXZpZ2F0ZSB1cCB8IGRvd25cbiAgICAgICAgICBpZHggPSBpc1NhbWVFbGVtZW50ID8gMCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5ID09PSAzOCA/IChpZHg+MT9pZHgtMTowKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBrZXkgPT09IDQwID8gKGlkeDxtZW51SXRlbXNbbGVuZ3RoXS0xP2lkeCsxOmlkeCkgOiBpZHg7XG4gICAgICAgICAgbWVudUl0ZW1zW2lkeF0gJiYgc2V0Rm9jdXMobWVudUl0ZW1zW2lkeF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICggKG1lbnVJdGVtc1tsZW5ndGhdICYmIGlzTWVudUl0ZW0gLy8gbWVudSBoYXMgaXRlbXNcbiAgICAgICAgICAgICAgfHwgIW1lbnVJdGVtc1tsZW5ndGhdICYmIChpc0luc2lkZU1lbnUgfHwgaXNTYW1lRWxlbWVudCkgIC8vIG1lbnUgbWlnaHQgYmUgYSBmb3JtXG4gICAgICAgICAgICAgIHx8ICFpc0luc2lkZU1lbnUgKSAvLyBvciB0aGUgZm9jdXNlZCBlbGVtZW50IGlzIG5vdCBpbiB0aGUgbWVudSBhdCBhbGxcbiAgICAgICAgICAgICAgJiYgZWxlbWVudFtvcGVuXSAmJiBrZXkgPT09IDI3ICAvLyBtZW51IG11c3QgYmUgb3BlblxuICAgICAgICApIHtcbiAgICAgICAgICBzZWxmLnRvZ2dsZSgpO1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICBcbiAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgICAgc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKHBhcmVudCwgc2hvd0V2ZW50LCBjb21wb25lbnQsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICBhZGRDbGFzcyhtZW51LHNob3dDbGFzcyk7XG4gICAgICAgIGFkZENsYXNzKHBhcmVudCxzaG93Q2xhc3MpO1xuICAgICAgICBlbGVtZW50W3NldEF0dHJpYnV0ZV0oYXJpYUV4cGFuZGVkLHRydWUpO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKHBhcmVudCwgc2hvd25FdmVudCwgY29tcG9uZW50LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgZWxlbWVudFtvcGVuXSA9IHRydWU7XG4gICAgICAgIG9mZihlbGVtZW50LCBjbGlja0V2ZW50LCBjbGlja0hhbmRsZXIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgc2V0Rm9jdXMoIG1lbnVbZ2V0RWxlbWVudHNCeVRhZ05hbWVdKCdJTlBVVCcpWzBdIHx8IGVsZW1lbnQgKTsgLy8gZm9jdXMgdGhlIGZpcnN0IGlucHV0IGl0ZW0gfCBlbGVtZW50XG4gICAgICAgICAgdG9nZ2xlRGlzbWlzcygpO1xuICAgICAgICB9LDEpO1xuICAgICAgfSxcbiAgICAgIGhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChwYXJlbnQsIGhpZGVFdmVudCwgY29tcG9uZW50LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MobWVudSxzaG93Q2xhc3MpO1xuICAgICAgICByZW1vdmVDbGFzcyhwYXJlbnQsc2hvd0NsYXNzKTtcbiAgICAgICAgZWxlbWVudFtzZXRBdHRyaWJ1dGVdKGFyaWFFeHBhbmRlZCxmYWxzZSk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwocGFyZW50LCBoaWRkZW5FdmVudCwgY29tcG9uZW50LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgZWxlbWVudFtvcGVuXSA9IGZhbHNlO1xuICAgICAgICB0b2dnbGVEaXNtaXNzKCk7XG4gICAgICAgIHNldEZvY3VzKGVsZW1lbnQpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IG9uKGVsZW1lbnQsIGNsaWNrRXZlbnQsIGNsaWNrSGFuZGxlcik7IH0sMSk7XG4gICAgICB9O1xuICBcbiAgICAvLyBzZXQgaW5pdGlhbCBzdGF0ZSB0byBjbG9zZWRcbiAgICBlbGVtZW50W29wZW5dID0gZmFsc2U7XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhwYXJlbnQsc2hvd0NsYXNzKSAmJiBlbGVtZW50W29wZW5dKSB7IGhpZGUoKTsgfSBcbiAgICAgIGVsc2UgeyBzaG93KCk7IH1cbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKHN0cmluZ0Ryb3Bkb3duIGluIGVsZW1lbnQpICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgIXRhYmluZGV4IGluIG1lbnUgJiYgbWVudVtzZXRBdHRyaWJ1dGVdKHRhYmluZGV4LCAnMCcpOyAvLyBGaXggb25ibHVyIG9uIENocm9tZSB8IFNhZmFyaVxuICAgICAgb24oZWxlbWVudCwgY2xpY2tFdmVudCwgY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIFxuICAgIGVsZW1lbnRbc3RyaW5nRHJvcGRvd25dID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIERST1BET1dOIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbc3RyaW5nRHJvcGRvd24sIERyb3Bkb3duLCAnWycrZGF0YVRvZ2dsZSsnPVwiZHJvcGRvd25cIl0nXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IE1vZGFsXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gTU9EQUwgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT1cbiAgdmFyIE1vZGFsID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykgeyAvLyBlbGVtZW50IGNhbiBiZSB0aGUgbW9kYWwvdHJpZ2dlcmluZyBidXR0b25cbiAgXG4gICAgLy8gdGhlIG1vZGFsIChib3RoIEphdmFTY3JpcHQgLyBEQVRBIEFQSSBpbml0KSAvIHRyaWdnZXJpbmcgYnV0dG9uIGVsZW1lbnQgKERBVEEgQVBJKVxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgICAgLy8gc3RyaW5nc1xuICAgICAgdmFyIGNvbXBvbmVudCA9ICdtb2RhbCcsXG4gICAgICAgIHN0YXRpY1N0cmluZyA9ICdzdGF0aWMnLFxuICAgICAgICBtb2RhbFRyaWdnZXIgPSAnbW9kYWxUcmlnZ2VyJyxcbiAgICAgICAgcGFkZGluZ1JpZ2h0ID0gJ3BhZGRpbmdSaWdodCcsXG4gICAgICAgIG1vZGFsQmFja2Ryb3BTdHJpbmcgPSAnbW9kYWwtYmFja2Ryb3AnLFxuICAgICAgICBpc0FuaW1hdGluZyA9ICdpc0FuaW1hdGluZycsXG4gICAgICAgIC8vIGRldGVybWluZSBtb2RhbCwgdHJpZ2dlcmluZyBlbGVtZW50XG4gICAgICAgIGJ0bkNoZWNrID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUYXJnZXQpfHxlbGVtZW50W2dldEF0dHJpYnV0ZV0oJ2hyZWYnKSxcbiAgICAgICAgY2hlY2tNb2RhbCA9IHF1ZXJ5RWxlbWVudCggYnRuQ2hlY2sgKSxcbiAgICAgICAgbW9kYWwgPSBoYXNDbGFzcyhlbGVtZW50LGNvbXBvbmVudCkgPyBlbGVtZW50IDogY2hlY2tNb2RhbDtcbiAgXG4gICAgICBpZiAoIGhhc0NsYXNzKGVsZW1lbnQsIGNvbXBvbmVudCkgKSB7IGVsZW1lbnQgPSBudWxsOyB9IC8vIG1vZGFsIGlzIG5vdyBpbmRlcGVuZGVudCBvZiBpdCdzIHRyaWdnZXJpbmcgZWxlbWVudFxuICBcbiAgICBpZiAoICFtb2RhbCApIHsgcmV0dXJuOyB9IC8vIGludmFsaWRhdGVcbiAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXG4gICAgdGhpc1trZXlib2FyZF0gPSBvcHRpb25zW2tleWJvYXJkXSA9PT0gZmFsc2UgfHwgbW9kYWxbZ2V0QXR0cmlidXRlXShkYXRhS2V5Ym9hcmQpID09PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlO1xuICAgIHRoaXNbYmFja2Ryb3BdID0gb3B0aW9uc1tiYWNrZHJvcF0gPT09IHN0YXRpY1N0cmluZyB8fCBtb2RhbFtnZXRBdHRyaWJ1dGVdKGRhdGFiYWNrZHJvcCkgPT09IHN0YXRpY1N0cmluZyA/IHN0YXRpY1N0cmluZyA6IHRydWU7XG4gICAgdGhpc1tiYWNrZHJvcF0gPSBvcHRpb25zW2JhY2tkcm9wXSA9PT0gZmFsc2UgfHwgbW9kYWxbZ2V0QXR0cmlidXRlXShkYXRhYmFja2Ryb3ApID09PSAnZmFsc2UnID8gZmFsc2UgOiB0aGlzW2JhY2tkcm9wXTtcbiAgICB0aGlzW2FuaW1hdGlvbl0gPSBoYXNDbGFzcyhtb2RhbCwgJ2ZhZGUnKSA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzW2NvbnRlbnRdICA9IG9wdGlvbnNbY29udGVudF07IC8vIEphdmFTY3JpcHQgb25seVxuICBcbiAgICAvLyBzZXQgYW4gaW5pdGlhbCBzdGF0ZSBvZiB0aGUgbW9kYWxcbiAgICBtb2RhbFtpc0FuaW1hdGluZ10gPSBmYWxzZTtcbiAgICBcbiAgICAvLyBiaW5kLCBjb25zdGFudHMsIGV2ZW50IHRhcmdldHMgYW5kIG90aGVyIHZhcnNcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHJlbGF0ZWRUYXJnZXQgPSBudWxsLFxuICAgICAgYm9keUlzT3ZlcmZsb3dpbmcsIHNjcm9sbEJhcldpZHRoLCBvdmVybGF5LCBvdmVybGF5RGVsYXksIG1vZGFsVGltZXIsXG4gIFxuICAgICAgLy8gYWxzbyBmaW5kIGZpeGVkLXRvcCAvIGZpeGVkLWJvdHRvbSBpdGVtc1xuICAgICAgZml4ZWRJdGVtcyA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoSFRNTCxmaXhlZFRvcCkuY29uY2F0KGdldEVsZW1lbnRzQnlDbGFzc05hbWUoSFRNTCxmaXhlZEJvdHRvbSkpLFxuICBcbiAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgICAgZ2V0V2luZG93V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWxSZWN0ID0gSFRNTFtnZXRCb3VuZGluZ0NsaWVudFJlY3RdKCk7XG4gICAgICAgIHJldHVybiBnbG9iYWxPYmplY3RbaW5uZXJXaWR0aF0gfHwgKGh0bWxSZWN0W3JpZ2h0XSAtIE1hdGguYWJzKGh0bWxSZWN0W2xlZnRdKSk7XG4gICAgICB9LFxuICAgICAgc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYm9keVN0eWxlID0gZ2xvYmFsT2JqZWN0W2dldENvbXB1dGVkU3R5bGVdKERPQ1tib2R5XSksXG4gICAgICAgICAgICBib2R5UGFkID0gcGFyc2VJbnQoKGJvZHlTdHlsZVtwYWRkaW5nUmlnaHRdKSwgMTApLCBpdGVtUGFkO1xuICAgICAgICBpZiAoYm9keUlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICBET0NbYm9keV1bc3R5bGVdW3BhZGRpbmdSaWdodF0gPSAoYm9keVBhZCArIHNjcm9sbEJhcldpZHRoKSArICdweCc7XG4gICAgICAgICAgbW9kYWxbc3R5bGVdW3BhZGRpbmdSaWdodF0gPSBzY3JvbGxCYXJXaWR0aCsncHgnO1xuICAgICAgICAgIGlmIChmaXhlZEl0ZW1zW2xlbmd0aF0pe1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaXhlZEl0ZW1zW2xlbmd0aF07IGkrKykge1xuICAgICAgICAgICAgICBpdGVtUGFkID0gZ2xvYmFsT2JqZWN0W2dldENvbXB1dGVkU3R5bGVdKGZpeGVkSXRlbXNbaV0pW3BhZGRpbmdSaWdodF07XG4gICAgICAgICAgICAgIGZpeGVkSXRlbXNbaV1bc3R5bGVdW3BhZGRpbmdSaWdodF0gPSAoIHBhcnNlSW50KGl0ZW1QYWQpICsgc2Nyb2xsQmFyV2lkdGgpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZXNldFNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRE9DW2JvZHldW3N0eWxlXVtwYWRkaW5nUmlnaHRdID0gJyc7XG4gICAgICAgIG1vZGFsW3N0eWxlXVtwYWRkaW5nUmlnaHRdID0gJyc7XG4gICAgICAgIGlmIChmaXhlZEl0ZW1zW2xlbmd0aF0pe1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZml4ZWRJdGVtc1tsZW5ndGhdOyBpKyspIHtcbiAgICAgICAgICAgIGZpeGVkSXRlbXNbaV1bc3R5bGVdW3BhZGRpbmdSaWdodF0gPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtZWFzdXJlU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkgeyAvLyB0aHggd2Fsc2hcbiAgICAgICAgdmFyIHNjcm9sbERpdiA9IERPQ1tjcmVhdGVFbGVtZW50XSgnZGl2JyksIHdpZHRoVmFsdWU7XG4gICAgICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBjb21wb25lbnQrJy1zY3JvbGxiYXItbWVhc3VyZSc7IC8vIHRoaXMgaXMgaGVyZSB0byBzdGF5XG4gICAgICAgIERPQ1tib2R5XVthcHBlbmRDaGlsZF0oc2Nyb2xsRGl2KTtcbiAgICAgICAgd2lkdGhWYWx1ZSA9IHNjcm9sbERpdltvZmZzZXRXaWR0aF0gLSBzY3JvbGxEaXZbY2xpZW50V2lkdGhdO1xuICAgICAgICBET0NbYm9keV0ucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICAgICAgcmV0dXJuIHdpZHRoVmFsdWU7XG4gICAgICB9LFxuICAgICAgY2hlY2tTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJvZHlJc092ZXJmbG93aW5nID0gRE9DW2JvZHldW2NsaWVudFdpZHRoXSA8IGdldFdpbmRvd1dpZHRoKCk7XG4gICAgICAgIHNjcm9sbEJhcldpZHRoID0gbWVhc3VyZVNjcm9sbGJhcigpO1xuICAgICAgfSxcbiAgICAgIGNyZWF0ZU92ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5ld092ZXJsYXkgPSBET0NbY3JlYXRlRWxlbWVudF0oJ2RpdicpO1xuICAgICAgICBvdmVybGF5ID0gcXVlcnlFbGVtZW50KCcuJyttb2RhbEJhY2tkcm9wU3RyaW5nKTtcbiAgXG4gICAgICAgIGlmICggb3ZlcmxheSA9PT0gbnVsbCApIHtcbiAgICAgICAgICBuZXdPdmVybGF5W3NldEF0dHJpYnV0ZV0oJ2NsYXNzJywgbW9kYWxCYWNrZHJvcFN0cmluZyArIChzZWxmW2FuaW1hdGlvbl0gPyAnIGZhZGUnIDogJycpKTtcbiAgICAgICAgICBvdmVybGF5ID0gbmV3T3ZlcmxheTtcbiAgICAgICAgICBET0NbYm9keV1bYXBwZW5kQ2hpbGRdKG92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgICAgIG1vZGFsT3ZlcmxheSA9IDE7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBvdmVybGF5ID0gcXVlcnlFbGVtZW50KCcuJyttb2RhbEJhY2tkcm9wU3RyaW5nKTtcbiAgICAgICAgaWYgKCBvdmVybGF5ICYmIG92ZXJsYXkgIT09IG51bGwgJiYgdHlwZW9mIG92ZXJsYXkgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgIG1vZGFsT3ZlcmxheSA9IDA7XG4gICAgICAgICAgRE9DW2JvZHldLnJlbW92ZUNoaWxkKG92ZXJsYXkpOyBvdmVybGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHRyaWdnZXJzXG4gICAgICB0cmlnZ2VyU2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRGb2N1cyhtb2RhbCk7XG4gICAgICAgIG1vZGFsW2lzQW5pbWF0aW5nXSA9IGZhbHNlO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKG1vZGFsLCBzaG93bkV2ZW50LCBjb21wb25lbnQsIHJlbGF0ZWRUYXJnZXQpO1xuICBcbiAgICAgICAgb24oZ2xvYmFsT2JqZWN0LCByZXNpemVFdmVudCwgc2VsZi51cGRhdGUsIHBhc3NpdmVIYW5kbGVyKTtcbiAgICAgICAgb24obW9kYWwsIGNsaWNrRXZlbnQsIGRpc21pc3NIYW5kbGVyKTtcbiAgICAgICAgb24oRE9DLCBrZXlkb3duRXZlbnQsIGtleUhhbmRsZXIpOyAgICAgIFxuICAgICAgfSxcbiAgICAgIHRyaWdnZXJIaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsW3N0eWxlXS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIGVsZW1lbnQgJiYgKHNldEZvY3VzKGVsZW1lbnQpKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChtb2RhbCwgaGlkZGVuRXZlbnQsIGNvbXBvbmVudCk7XG4gIFxuICAgICAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgICBpZiAoIWdldEVsZW1lbnRzQnlDbGFzc05hbWUoRE9DLGNvbXBvbmVudCsnICcrc2hvd0NsYXNzKVswXSkge1xuICAgICAgICAgICAgcmVzZXRTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKERPQ1tib2R5XSxjb21wb25lbnQrJy1vcGVuJyk7XG4gICAgICAgICAgICBvdmVybGF5ICYmIGhhc0NsYXNzKG92ZXJsYXksJ2ZhZGUnKSA/IChyZW1vdmVDbGFzcyhvdmVybGF5LHNob3dDbGFzcyksIGVtdWxhdGVUcmFuc2l0aW9uRW5kKG92ZXJsYXkscmVtb3ZlT3ZlcmxheSkpXG4gICAgICAgICAgICA6IHJlbW92ZU92ZXJsYXkoKTtcbiAgXG4gICAgICAgICAgICBvZmYoZ2xvYmFsT2JqZWN0LCByZXNpemVFdmVudCwgc2VsZi51cGRhdGUsIHBhc3NpdmVIYW5kbGVyKTtcbiAgICAgICAgICAgIG9mZihtb2RhbCwgY2xpY2tFdmVudCwgZGlzbWlzc0hhbmRsZXIpO1xuICAgICAgICAgICAgb2ZmKERPQywga2V5ZG93bkV2ZW50LCBrZXlIYW5kbGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0oKSk7XG4gICAgICAgIG1vZGFsW2lzQW5pbWF0aW5nXSA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIC8vIGhhbmRsZXJzXG4gICAgICBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICggbW9kYWxbaXNBbmltYXRpbmddICkgcmV0dXJuO1xuICBcbiAgICAgICAgdmFyIGNsaWNrVGFyZ2V0ID0gZVt0YXJnZXRdO1xuICAgICAgICBjbGlja1RhcmdldCA9IGNsaWNrVGFyZ2V0W2hhc0F0dHJpYnV0ZV0oZGF0YVRhcmdldCkgfHwgY2xpY2tUYXJnZXRbaGFzQXR0cmlidXRlXSgnaHJlZicpID8gY2xpY2tUYXJnZXQgOiBjbGlja1RhcmdldFtwYXJlbnROb2RlXTtcbiAgICAgICAgaWYgKCBjbGlja1RhcmdldCA9PT0gZWxlbWVudCAmJiAhaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSApIHtcbiAgICAgICAgICBtb2RhbFttb2RhbFRyaWdnZXJdID0gZWxlbWVudDtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0ID0gZWxlbWVudDtcbiAgICAgICAgICBzZWxmLnNob3coKTtcbiAgICAgICAgICBlW3ByZXZlbnREZWZhdWx0XSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAga2V5SGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCBtb2RhbFtpc0FuaW1hdGluZ10gKSByZXR1cm47XG4gIFxuICAgICAgICBpZiAoc2VsZltrZXlib2FyZF0gJiYgZS53aGljaCA9PSAyNyAmJiBoYXNDbGFzcyhtb2RhbCxzaG93Q2xhc3MpICkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzbWlzc0hhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICggbW9kYWxbaXNBbmltYXRpbmddICkgcmV0dXJuO1xuICAgICAgICB2YXIgY2xpY2tUYXJnZXQgPSBlW3RhcmdldF07XG4gIFxuICAgICAgICBpZiAoIGhhc0NsYXNzKG1vZGFsLHNob3dDbGFzcykgJiYgKCBjbGlja1RhcmdldFtwYXJlbnROb2RlXVtnZXRBdHRyaWJ1dGVdKGRhdGFEaXNtaXNzKSA9PT0gY29tcG9uZW50XG4gICAgICAgICAgICB8fCBjbGlja1RhcmdldFtnZXRBdHRyaWJ1dGVdKGRhdGFEaXNtaXNzKSA9PT0gY29tcG9uZW50XG4gICAgICAgICAgICB8fCBjbGlja1RhcmdldCA9PT0gbW9kYWwgJiYgc2VsZltiYWNrZHJvcF0gIT09IHN0YXRpY1N0cmluZyApICkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpOyByZWxhdGVkVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICBlW3ByZXZlbnREZWZhdWx0XSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIGhhc0NsYXNzKG1vZGFsLHNob3dDbGFzcykgKSB7dGhpcy5oaWRlKCk7fSBlbHNlIHt0aGlzLnNob3coKTt9XG4gICAgfTtcbiAgICB0aGlzLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSB8fCBtb2RhbFtpc0FuaW1hdGluZ10gKSB7cmV0dXJufVxuICBcbiAgICAgIGNsZWFyVGltZW91dChtb2RhbFRpbWVyKTtcbiAgICAgIG1vZGFsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIG1vZGFsW2lzQW5pbWF0aW5nXSA9IHRydWU7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwobW9kYWwsIHNob3dFdmVudCwgY29tcG9uZW50LCByZWxhdGVkVGFyZ2V0KTtcbiAgXG4gICAgICAgIC8vIHdlIGVsZWdhbnRseSBoaWRlIGFueSBvcGVuZWQgbW9kYWxcbiAgICAgICAgdmFyIGN1cnJlbnRPcGVuID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShET0MsY29tcG9uZW50KycgJytzaG93Q2xhc3MpWzBdO1xuICAgICAgICBpZiAoY3VycmVudE9wZW4gJiYgY3VycmVudE9wZW4gIT09IG1vZGFsKSB7XG4gICAgICAgICAgbW9kYWxUcmlnZ2VyIGluIGN1cnJlbnRPcGVuICYmIGN1cnJlbnRPcGVuW21vZGFsVHJpZ2dlcl1bc3RyaW5nTW9kYWxdLmhpZGUoKTtcbiAgICAgICAgICBzdHJpbmdNb2RhbCBpbiBjdXJyZW50T3BlbiAmJiBjdXJyZW50T3BlbltzdHJpbmdNb2RhbF0uaGlkZSgpO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIHNlbGZbYmFja2Ryb3BdICkge1xuICAgICAgICAgICFtb2RhbE92ZXJsYXkgJiYgIW92ZXJsYXkgJiYgY3JlYXRlT3ZlcmxheSgpO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIG92ZXJsYXkgJiYgIWhhc0NsYXNzKG92ZXJsYXksc2hvd0NsYXNzKSApIHtcbiAgICAgICAgICBvdmVybGF5W29mZnNldFdpZHRoXTsgLy8gZm9yY2UgcmVmbG93IHRvIGVuYWJsZSB0cmFzaXRpb25cbiAgICAgICAgICBvdmVybGF5RGVsYXkgPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChvdmVybGF5KTtcbiAgICAgICAgICBhZGRDbGFzcyhvdmVybGF5LCBzaG93Q2xhc3MpO1xuICAgICAgICB9XG4gIFxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2RhbFtzdHlsZV0uZGlzcGxheSA9ICdibG9jayc7XG4gIFxuICAgICAgICAgIGNoZWNrU2Nyb2xsYmFyKCk7XG4gICAgICAgICAgc2V0U2Nyb2xsYmFyKCk7XG4gIFxuICAgICAgICAgIGFkZENsYXNzKERPQ1tib2R5XSxjb21wb25lbnQrJy1vcGVuJyk7XG4gICAgICAgICAgYWRkQ2xhc3MobW9kYWwsc2hvd0NsYXNzKTtcbiAgICAgICAgICBtb2RhbFtzZXRBdHRyaWJ1dGVdKGFyaWFIaWRkZW4sIGZhbHNlKTtcbiAgXG4gICAgICAgICAgaGFzQ2xhc3MobW9kYWwsJ2ZhZGUnKSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKG1vZGFsLCB0cmlnZ2VyU2hvdykgOiB0cmlnZ2VyU2hvdygpO1xuICAgICAgICB9LCBzdXBwb3J0VHJhbnNpdGlvbnMgJiYgb3ZlcmxheSAmJiBvdmVybGF5RGVsYXkgPyBvdmVybGF5RGVsYXkgOiAxKTtcbiAgICAgIH0sMSk7XG4gICAgfTtcbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggbW9kYWxbaXNBbmltYXRpbmddIHx8ICFoYXNDbGFzcyhtb2RhbCxzaG93Q2xhc3MpICkge3JldHVybn1cbiAgXG4gICAgICBjbGVhclRpbWVvdXQobW9kYWxUaW1lcik7XG4gICAgICBtb2RhbFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBtb2RhbFtpc0FuaW1hdGluZ10gPSB0cnVlOyAgICBcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChtb2RhbCwgaGlkZUV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICBvdmVybGF5ID0gcXVlcnlFbGVtZW50KCcuJyttb2RhbEJhY2tkcm9wU3RyaW5nKTtcbiAgICAgICAgb3ZlcmxheURlbGF5ID0gb3ZlcmxheSAmJiBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChvdmVybGF5KTtcbiAgXG4gICAgICAgIHJlbW92ZUNsYXNzKG1vZGFsLHNob3dDbGFzcyk7XG4gICAgICAgIG1vZGFsW3NldEF0dHJpYnV0ZV0oYXJpYUhpZGRlbiwgdHJ1ZSk7XG4gIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgaGFzQ2xhc3MobW9kYWwsJ2ZhZGUnKSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKG1vZGFsLCB0cmlnZ2VySGlkZSkgOiB0cmlnZ2VySGlkZSgpO1xuICAgICAgICB9LCBzdXBwb3J0VHJhbnNpdGlvbnMgJiYgb3ZlcmxheSAmJiBvdmVybGF5RGVsYXkgPyBvdmVybGF5RGVsYXkgOiAyKTtcbiAgICAgIH0sMilcbiAgICB9O1xuICAgIHRoaXMuc2V0Q29udGVudCA9IGZ1bmN0aW9uKCBjb250ZW50ICkge1xuICAgICAgcXVlcnlFbGVtZW50KCcuJytjb21wb25lbnQrJy1jb250ZW50Jyxtb2RhbClbaW5uZXJIVE1MXSA9IGNvbnRlbnQ7XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGhhc0NsYXNzKG1vZGFsLHNob3dDbGFzcykpIHtcbiAgICAgICAgY2hlY2tTY3JvbGxiYXIoKTtcbiAgICAgICAgc2V0U2Nyb2xsYmFyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIG92ZXIgYW5kIG92ZXJcbiAgICAvLyBtb2RhbCBpcyBpbmRlcGVuZGVudCBvZiBhIHRyaWdnZXJpbmcgZWxlbWVudFxuICAgIGlmICggISFlbGVtZW50ICYmICEoc3RyaW5nTW9kYWwgaW4gZWxlbWVudCkgKSB7XG4gICAgICBvbihlbGVtZW50LCBjbGlja0V2ZW50LCBjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAoICEhc2VsZltjb250ZW50XSApIHsgc2VsZi5zZXRDb250ZW50KCBzZWxmW2NvbnRlbnRdICk7IH1cbiAgICBpZiAoZWxlbWVudCkgeyBlbGVtZW50W3N0cmluZ01vZGFsXSA9IHNlbGY7IG1vZGFsW21vZGFsVHJpZ2dlcl0gPSBlbGVtZW50OyB9XG4gICAgZWxzZSB7IG1vZGFsW3N0cmluZ01vZGFsXSA9IHNlbGY7IH1cbiAgfTtcbiAgXG4gIC8vIERBVEEgQVBJXG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ01vZGFsLCBNb2RhbCwgJ1snK2RhdGFUb2dnbGUrJz1cIm1vZGFsXCJdJyBdICk7XG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBQb3BvdmVyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gUE9QT1ZFUiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PVxuICB2YXIgUG9wb3ZlciA9IGZ1bmN0aW9uKCBlbGVtZW50LCBvcHRpb25zICkge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXG4gICAgLy8gREFUQSBBUElcbiAgICB2YXIgdHJpZ2dlckRhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRyaWdnZXIpLCAvLyBjbGljayAvIGhvdmVyIC8gZm9jdXNcbiAgICAgICAgYW5pbWF0aW9uRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQW5pbWF0aW9uKSwgLy8gdHJ1ZSAvIGZhbHNlXG4gICAgICAgIHBsYWNlbWVudERhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVBsYWNlbWVudCksXG4gICAgICAgIGRpc21pc3NpYmxlRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhRGlzbWlzc2libGUpLFxuICAgICAgICBkZWxheURhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YURlbGF5KSxcbiAgICAgICAgY29udGFpbmVyRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQ29udGFpbmVyKSxcbiAgXG4gICAgICAgIC8vIGludGVybmFsIHN0cmluZ3NcbiAgICAgICAgY29tcG9uZW50ID0gJ3BvcG92ZXInLFxuICAgICAgICB0ZW1wbGF0ZSA9ICd0ZW1wbGF0ZScsXG4gICAgICAgIHRyaWdnZXIgPSAndHJpZ2dlcicsXG4gICAgICAgIGNsYXNzU3RyaW5nID0gJ2NsYXNzJyxcbiAgICAgICAgZGl2ID0gJ2RpdicsXG4gICAgICAgIGZhZGUgPSAnZmFkZScsXG4gICAgICAgIGRhdGFDb250ZW50ID0gJ2RhdGEtY29udGVudCcsXG4gICAgICAgIGRpc21pc3NpYmxlID0gJ2Rpc21pc3NpYmxlJyxcbiAgICAgICAgY2xvc2VCdG4gPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiPsOXPC9idXR0b24+JyxcbiAgXG4gICAgICAgIC8vIGNoZWNrIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJFbGVtZW50ID0gcXVlcnlFbGVtZW50KG9wdGlvbnNbY29udGFpbmVyXSksXG4gICAgICAgIGNvbnRhaW5lckRhdGFFbGVtZW50ID0gcXVlcnlFbGVtZW50KGNvbnRhaW5lckRhdGEpLCAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIG1heWJlIHRoZSBlbGVtZW50IGlzIGluc2lkZSBhIG1vZGFsXG4gICAgICAgIG1vZGFsID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcubW9kYWwnKSxcbiAgICAgICAgXG4gICAgICAgIC8vIG1heWJlIHRoZSBlbGVtZW50IGlzIGluc2lkZSBhIGZpeGVkIG5hdmJhclxuICAgICAgICBuYXZiYXJGaXhlZFRvcCA9IGdldENsb3Nlc3QoZWxlbWVudCwnLicrZml4ZWRUb3ApLFxuICAgICAgICBuYXZiYXJGaXhlZEJvdHRvbSA9IGdldENsb3Nlc3QoZWxlbWVudCwnLicrZml4ZWRCb3R0b20pO1xuICBcbiAgICAvLyBzZXQgaW5zdGFuY2Ugb3B0aW9uc1xuICAgIHRoaXNbdGVtcGxhdGVdID0gb3B0aW9uc1t0ZW1wbGF0ZV0gPyBvcHRpb25zW3RlbXBsYXRlXSA6IG51bGw7IC8vIEphdmFTY3JpcHQgb25seVxuICAgIHRoaXNbdHJpZ2dlcl0gPSBvcHRpb25zW3RyaWdnZXJdID8gb3B0aW9uc1t0cmlnZ2VyXSA6IHRyaWdnZXJEYXRhIHx8IGhvdmVyRXZlbnQ7XG4gICAgdGhpc1thbmltYXRpb25dID0gb3B0aW9uc1thbmltYXRpb25dICYmIG9wdGlvbnNbYW5pbWF0aW9uXSAhPT0gZmFkZSA/IG9wdGlvbnNbYW5pbWF0aW9uXSA6IGFuaW1hdGlvbkRhdGEgfHwgZmFkZTtcbiAgICB0aGlzW3BsYWNlbWVudF0gPSBvcHRpb25zW3BsYWNlbWVudF0gPyBvcHRpb25zW3BsYWNlbWVudF0gOiBwbGFjZW1lbnREYXRhIHx8IHRvcDtcbiAgICB0aGlzW2RlbGF5XSA9IHBhcnNlSW50KG9wdGlvbnNbZGVsYXldIHx8IGRlbGF5RGF0YSkgfHwgMjAwO1xuICAgIHRoaXNbZGlzbWlzc2libGVdID0gb3B0aW9uc1tkaXNtaXNzaWJsZV0gfHwgZGlzbWlzc2libGVEYXRhID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpc1tjb250YWluZXJdID0gY29udGFpbmVyRWxlbWVudCA/IGNvbnRhaW5lckVsZW1lbnQgXG4gICAgICAgICAgICAgICAgICAgIDogY29udGFpbmVyRGF0YUVsZW1lbnQgPyBjb250YWluZXJEYXRhRWxlbWVudCBcbiAgICAgICAgICAgICAgICAgICAgOiBuYXZiYXJGaXhlZFRvcCA/IG5hdmJhckZpeGVkVG9wXG4gICAgICAgICAgICAgICAgICAgIDogbmF2YmFyRml4ZWRCb3R0b20gPyBuYXZiYXJGaXhlZEJvdHRvbVxuICAgICAgICAgICAgICAgICAgICA6IG1vZGFsID8gbW9kYWwgOiBET0NbYm9keV07XG4gICAgXG4gICAgLy8gYmluZCwgY29udGVudFxuICAgIHZhciBzZWxmID0gdGhpcywgXG4gICAgICAgIHRpdGxlU3RyaW5nID0gb3B0aW9ucy50aXRsZSB8fCBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRpdGxlKSB8fCBudWxsLFxuICAgICAgICBjb250ZW50U3RyaW5nID0gb3B0aW9ucy5jb250ZW50IHx8IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQ29udGVudCkgfHwgbnVsbDtcbiAgXG4gICAgaWYgKCAhY29udGVudFN0cmluZyAmJiAhdGhpc1t0ZW1wbGF0ZV0gKSByZXR1cm47IC8vIGludmFsaWRhdGVcbiAgXG4gICAgLy8gY29uc3RhbnRzLCB2YXJzXG4gICAgdmFyIHBvcG92ZXIgPSBudWxsLCB0aW1lciA9IDAsIHBsYWNlbWVudFNldHRpbmcgPSB0aGlzW3BsYWNlbWVudF0sXG4gICAgICBcbiAgICAgIC8vIGhhbmRsZXJzXG4gICAgICBkaXNtaXNzaWJsZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChwb3BvdmVyICE9PSBudWxsICYmIGVbdGFyZ2V0XSA9PT0gcXVlcnlFbGVtZW50KCcuY2xvc2UnLHBvcG92ZXIpKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gIFxuICAgICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgICByZW1vdmVQb3BvdmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGZbY29udGFpbmVyXS5yZW1vdmVDaGlsZChwb3BvdmVyKTtcbiAgICAgICAgdGltZXIgPSBudWxsOyBwb3BvdmVyID0gbnVsbDsgXG4gICAgICB9LFxuICAgICAgY3JlYXRlUG9wb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aXRsZVN0cmluZyA9IG9wdGlvbnMudGl0bGUgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUaXRsZSk7XG4gICAgICAgIGNvbnRlbnRTdHJpbmcgPSBvcHRpb25zLmNvbnRlbnQgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFDb250ZW50KTtcbiAgICAgICAgLy8gZml4aW5nIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVkbnAvYm9vdHN0cmFwLm5hdGl2ZS9pc3N1ZXMvMjMzXG4gICAgICAgIGNvbnRlbnRTdHJpbmcgPSAhIWNvbnRlbnRTdHJpbmcgPyBjb250ZW50U3RyaW5nLnRyaW0oKSA6IG51bGw7XG4gIFxuICAgICAgICBwb3BvdmVyID0gRE9DW2NyZWF0ZUVsZW1lbnRdKGRpdik7XG4gIFxuICAgICAgICAvLyBwb3BvdmVyIGFycm93XG4gICAgICAgIHZhciBwb3BvdmVyQXJyb3cgPSBET0NbY3JlYXRlRWxlbWVudF0oZGl2KTtcbiAgICAgICAgcG9wb3ZlckFycm93W3NldEF0dHJpYnV0ZV0oY2xhc3NTdHJpbmcsJ2Fycm93Jyk7XG4gICAgICAgIHBvcG92ZXJbYXBwZW5kQ2hpbGRdKHBvcG92ZXJBcnJvdyk7XG4gIFxuICAgICAgICBpZiAoIGNvbnRlbnRTdHJpbmcgIT09IG51bGwgJiYgc2VsZlt0ZW1wbGF0ZV0gPT09IG51bGwgKSB7IC8vY3JlYXRlIHRoZSBwb3BvdmVyIGZyb20gZGF0YSBhdHRyaWJ1dGVzXG4gIFxuICAgICAgICAgIHBvcG92ZXJbc2V0QXR0cmlidXRlXSgncm9sZScsJ3Rvb2x0aXAnKTsgICAgIFxuICBcbiAgICAgICAgICBpZiAodGl0bGVTdHJpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBwb3BvdmVyVGl0bGUgPSBET0NbY3JlYXRlRWxlbWVudF0oJ2gzJyk7XG4gICAgICAgICAgICBwb3BvdmVyVGl0bGVbc2V0QXR0cmlidXRlXShjbGFzc1N0cmluZyxjb21wb25lbnQrJy1oZWFkZXInKTtcbiAgXG4gICAgICAgICAgICBwb3BvdmVyVGl0bGVbaW5uZXJIVE1MXSA9IHNlbGZbZGlzbWlzc2libGVdID8gdGl0bGVTdHJpbmcgKyBjbG9zZUJ0biA6IHRpdGxlU3RyaW5nO1xuICAgICAgICAgICAgcG9wb3ZlclthcHBlbmRDaGlsZF0ocG9wb3ZlclRpdGxlKTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIC8vc2V0IHBvcG92ZXIgY29udGVudFxuICAgICAgICAgIHZhciBwb3BvdmVyQ29udGVudCA9IERPQ1tjcmVhdGVFbGVtZW50XShkaXYpO1xuICAgICAgICAgIHBvcG92ZXJDb250ZW50W3NldEF0dHJpYnV0ZV0oY2xhc3NTdHJpbmcsY29tcG9uZW50KyctYm9keScpO1xuICAgICAgICAgIHBvcG92ZXJDb250ZW50W2lubmVySFRNTF0gPSBzZWxmW2Rpc21pc3NpYmxlXSAmJiB0aXRsZVN0cmluZyA9PT0gbnVsbCA/IGNvbnRlbnRTdHJpbmcgKyBjbG9zZUJ0biA6IGNvbnRlbnRTdHJpbmc7XG4gICAgICAgICAgcG9wb3ZlclthcHBlbmRDaGlsZF0ocG9wb3ZlckNvbnRlbnQpO1xuICBcbiAgICAgICAgfSBlbHNlIHsgIC8vIG9yIGNyZWF0ZSB0aGUgcG9wb3ZlciBmcm9tIHRlbXBsYXRlXG4gICAgICAgICAgdmFyIHBvcG92ZXJUZW1wbGF0ZSA9IERPQ1tjcmVhdGVFbGVtZW50XShkaXYpO1xuICAgICAgICAgIHNlbGZbdGVtcGxhdGVdID0gc2VsZlt0ZW1wbGF0ZV0udHJpbSgpO1xuICAgICAgICAgIHBvcG92ZXJUZW1wbGF0ZVtpbm5lckhUTUxdID0gc2VsZlt0ZW1wbGF0ZV07XG4gICAgICAgICAgcG9wb3Zlcltpbm5lckhUTUxdID0gcG9wb3ZlclRlbXBsYXRlLmZpcnN0Q2hpbGRbaW5uZXJIVE1MXTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy9hcHBlbmQgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICBzZWxmW2NvbnRhaW5lcl1bYXBwZW5kQ2hpbGRdKHBvcG92ZXIpO1xuICAgICAgICBwb3BvdmVyW3N0eWxlXS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgcG9wb3ZlcltzZXRBdHRyaWJ1dGVdKGNsYXNzU3RyaW5nLCBjb21wb25lbnQrICcgYnMtJyArIGNvbXBvbmVudCsnLScrcGxhY2VtZW50U2V0dGluZyArICcgJyArIHNlbGZbYW5pbWF0aW9uXSk7XG4gICAgICB9LFxuICAgICAgc2hvd1BvcG92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICFoYXNDbGFzcyhwb3BvdmVyLHNob3dDbGFzcykgJiYgKCBhZGRDbGFzcyhwb3BvdmVyLHNob3dDbGFzcykgKTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGVQb3BvdmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN0eWxlVGlwKGVsZW1lbnQsIHBvcG92ZXIsIHBsYWNlbWVudFNldHRpbmcsIHNlbGZbY29udGFpbmVyXSk7XG4gICAgICB9LFxuICBcbiAgICAgIC8vIGV2ZW50IHRvZ2dsZVxuICAgICAgZGlzbWlzc0hhbmRsZXJUb2dnbGUgPSBmdW5jdGlvbih0eXBlKXtcbiAgICAgICAgaWYgKGNsaWNrRXZlbnQgPT0gc2VsZlt0cmlnZ2VyXSB8fCAnZm9jdXMnID09IHNlbGZbdHJpZ2dlcl0pIHtcbiAgICAgICAgICAhc2VsZltkaXNtaXNzaWJsZV0gJiYgdHlwZSggZWxlbWVudCwgJ2JsdXInLCBzZWxmLmhpZGUgKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmW2Rpc21pc3NpYmxlXSAmJiB0eXBlKCBET0MsIGNsaWNrRXZlbnQsIGRpc21pc3NpYmxlSGFuZGxlciApOyAgICAgXG4gICAgICAgIHR5cGUoIGdsb2JhbE9iamVjdCwgcmVzaXplRXZlbnQsIHNlbGYuaGlkZSwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICAgIH0sXG4gIFxuICAgICAgLy8gdHJpZ2dlcnNcbiAgICAgIHNob3dUcmlnZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGRpc21pc3NIYW5kbGVyVG9nZ2xlKG9uKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBzaG93bkV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICAgIGhpZGVUcmlnZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGRpc21pc3NIYW5kbGVyVG9nZ2xlKG9mZik7XG4gICAgICAgIHJlbW92ZVBvcG92ZXIoKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBoaWRkZW5FdmVudCwgY29tcG9uZW50KTtcbiAgICAgIH07XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzIC8gaGFuZGxlcnNcbiAgICB0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHBvcG92ZXIgPT09IG51bGwpIHsgc2VsZi5zaG93KCk7IH0gXG4gICAgICBlbHNlIHsgc2VsZi5oaWRlKCk7IH1cbiAgICB9O1xuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChwb3BvdmVyID09PSBudWxsKSB7XG4gICAgICAgICAgcGxhY2VtZW50U2V0dGluZyA9IHNlbGZbcGxhY2VtZW50XTsgLy8gd2UgcmVzZXQgcGxhY2VtZW50IGluIGFsbCBjYXNlc1xuICAgICAgICAgIGNyZWF0ZVBvcG92ZXIoKTtcbiAgICAgICAgICB1cGRhdGVQb3BvdmVyKCk7XG4gICAgICAgICAgc2hvd1BvcG92ZXIoKTtcbiAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNob3dFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgICAhIXNlbGZbYW5pbWF0aW9uXSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKHBvcG92ZXIsIHNob3dUcmlnZ2VyKSA6IHNob3dUcmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwICk7XG4gICAgfTtcbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocG9wb3ZlciAmJiBwb3BvdmVyICE9PSBudWxsICYmIGhhc0NsYXNzKHBvcG92ZXIsc2hvd0NsYXNzKSkge1xuICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgaGlkZUV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHBvcG92ZXIsc2hvd0NsYXNzKTtcbiAgICAgICAgICAhIXNlbGZbYW5pbWF0aW9uXSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKHBvcG92ZXIsIGhpZGVUcmlnZ2VyKSA6IGhpZGVUcmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHNlbGZbZGVsYXldICk7XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdQb3BvdmVyIGluIGVsZW1lbnQpICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgaWYgKHNlbGZbdHJpZ2dlcl0gPT09IGhvdmVyRXZlbnQpIHtcbiAgICAgICAgb24oIGVsZW1lbnQsIG1vdXNlSG92ZXJbMF0sIHNlbGYuc2hvdyApO1xuICAgICAgICBpZiAoIXNlbGZbZGlzbWlzc2libGVdKSB7IG9uKCBlbGVtZW50LCBtb3VzZUhvdmVyWzFdLCBzZWxmLmhpZGUgKTsgfVxuICAgICAgfSBlbHNlIGlmIChjbGlja0V2ZW50ID09IHNlbGZbdHJpZ2dlcl0gfHwgJ2ZvY3VzJyA9PSBzZWxmW3RyaWdnZXJdKSB7XG4gICAgICAgIG9uKCBlbGVtZW50LCBzZWxmW3RyaWdnZXJdLCBzZWxmLnRvZ2dsZSApO1xuICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50W3N0cmluZ1BvcG92ZXJdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIFBPUE9WRVIgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdQb3BvdmVyLCBQb3BvdmVyLCAnWycrZGF0YVRvZ2dsZSsnPVwicG9wb3ZlclwiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IFNjcm9sbFNweVxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBTQ1JPTExTUFkgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PVxuICB2YXIgU2Nyb2xsU3B5ID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50LCB0aGUgZWxlbWVudCB3ZSBzcHkgb25cbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpOyBcbiAgXG4gICAgLy8gREFUQSBBUElcbiAgICB2YXIgdGFyZ2V0RGF0YSA9IHF1ZXJ5RWxlbWVudChlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRhcmdldCkpLFxuICAgICAgICBvZmZzZXREYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKCdkYXRhLW9mZnNldCcpO1xuICBcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcbiAgICAvLyBpbnZhbGlkYXRlXG4gICAgaWYgKCAhb3B0aW9uc1t0YXJnZXRdICYmICF0YXJnZXREYXRhICkgeyByZXR1cm47IH0gXG4gIFxuICAgIC8vIGV2ZW50IHRhcmdldHMsIGNvbnN0YW50c1xuICAgIHZhciBzZWxmID0gdGhpcywgc3B5VGFyZ2V0ID0gb3B0aW9uc1t0YXJnZXRdICYmIHF1ZXJ5RWxlbWVudChvcHRpb25zW3RhcmdldF0pIHx8IHRhcmdldERhdGEsXG4gICAgICAgIGxpbmtzID0gc3B5VGFyZ2V0ICYmIHNweVRhcmdldFtnZXRFbGVtZW50c0J5VGFnTmFtZV0oJ0EnKSxcbiAgICAgICAgb2Zmc2V0ID0gcGFyc2VJbnQob3B0aW9uc1snb2Zmc2V0J10gfHwgb2Zmc2V0RGF0YSkgfHwgMTAsICAgICAgXG4gICAgICAgIGl0ZW1zID0gW10sIHRhcmdldEl0ZW1zID0gW10sIHNjcm9sbE9mZnNldCxcbiAgICAgICAgc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudFtvZmZzZXRIZWlnaHRdIDwgZWxlbWVudFtzY3JvbGxIZWlnaHRdID8gZWxlbWVudCA6IGdsb2JhbE9iamVjdCwgLy8gZGV0ZXJtaW5lIHdoaWNoIGlzIHRoZSByZWFsIHNjcm9sbFRhcmdldFxuICAgICAgICBpc1dpbmRvdyA9IHNjcm9sbFRhcmdldCA9PT0gZ2xvYmFsT2JqZWN0OyAgXG4gIFxuICAgIC8vIHBvcHVsYXRlIGl0ZW1zIGFuZCB0YXJnZXRzXG4gICAgZm9yICh2YXIgaT0wLCBpbD1saW5rc1tsZW5ndGhdOyBpPGlsOyBpKyspIHtcbiAgICAgIHZhciBocmVmID0gbGlua3NbaV1bZ2V0QXR0cmlidXRlXSgnaHJlZicpLCBcbiAgICAgICAgICB0YXJnZXRJdGVtID0gaHJlZiAmJiBocmVmLmNoYXJBdCgwKSA9PT0gJyMnICYmIGhyZWYuc2xpY2UoLTEpICE9PSAnIycgJiYgcXVlcnlFbGVtZW50KGhyZWYpO1xuICAgICAgaWYgKCAhIXRhcmdldEl0ZW0gKSB7XG4gICAgICAgIGl0ZW1zW3B1c2hdKGxpbmtzW2ldKTtcbiAgICAgICAgdGFyZ2V0SXRlbXNbcHVzaF0odGFyZ2V0SXRlbSk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICB2YXIgdXBkYXRlSXRlbSA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHZhciBpdGVtID0gaXRlbXNbaW5kZXhdLFxuICAgICAgICAgIHRhcmdldEl0ZW0gPSB0YXJnZXRJdGVtc1tpbmRleF0sIC8vIHRoZSBtZW51IGl0ZW0gdGFyZ2V0cyB0aGlzIGVsZW1lbnRcbiAgICAgICAgICBkcm9wZG93biA9IGl0ZW1bcGFyZW50Tm9kZV1bcGFyZW50Tm9kZV0sXG4gICAgICAgICAgZHJvcGRvd25MaW5rID0gaGFzQ2xhc3MoZHJvcGRvd24sJ2Ryb3Bkb3duJykgJiYgZHJvcGRvd25bZ2V0RWxlbWVudHNCeVRhZ05hbWVdKCdBJylbMF0sXG4gICAgICAgICAgdGFyZ2V0UmVjdCA9IGlzV2luZG93ICYmIHRhcmdldEl0ZW1bZ2V0Qm91bmRpbmdDbGllbnRSZWN0XSgpLFxuICBcbiAgICAgICAgICBpc0FjdGl2ZSA9IGhhc0NsYXNzKGl0ZW0sYWN0aXZlKSB8fCBmYWxzZSxcbiAgXG4gICAgICAgICAgdG9wRWRnZSA9IChpc1dpbmRvdyA/IHRhcmdldFJlY3RbdG9wXSArIHNjcm9sbE9mZnNldCA6IHRhcmdldEl0ZW1bb2Zmc2V0VG9wXSkgLSBvZmZzZXQsXG4gICAgICAgICAgYm90dG9tRWRnZSA9IGlzV2luZG93ID8gdGFyZ2V0UmVjdFtib3R0b21dICsgc2Nyb2xsT2Zmc2V0IC0gb2Zmc2V0IDogdGFyZ2V0SXRlbXNbaW5kZXgrMV0gPyB0YXJnZXRJdGVtc1tpbmRleCsxXVtvZmZzZXRUb3BdIC0gb2Zmc2V0IDogZWxlbWVudFtzY3JvbGxIZWlnaHRdLFxuICBcbiAgICAgICAgICBpbnNpZGUgPSBzY3JvbGxPZmZzZXQgPj0gdG9wRWRnZSAmJiBib3R0b21FZGdlID4gc2Nyb2xsT2Zmc2V0O1xuICBcbiAgICAgICAgaWYgKCAhaXNBY3RpdmUgJiYgaW5zaWRlICkge1xuICAgICAgICAgIGlmICggIWhhc0NsYXNzKGl0ZW0sYWN0aXZlKSApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGl0ZW0sYWN0aXZlKTtcbiAgICAgICAgICAgIGlmIChkcm9wZG93bkxpbmsgJiYgIWhhc0NsYXNzKGRyb3Bkb3duTGluayxhY3RpdmUpICkge1xuICAgICAgICAgICAgICBhZGRDbGFzcyhkcm9wZG93bkxpbmssYWN0aXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgJ2FjdGl2YXRlJywgJ3Njcm9sbHNweScsIGl0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCAhaW5zaWRlICkge1xuICAgICAgICAgIGlmICggaGFzQ2xhc3MoaXRlbSxhY3RpdmUpICkge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSxhY3RpdmUpO1xuICAgICAgICAgICAgaWYgKGRyb3Bkb3duTGluayAmJiBoYXNDbGFzcyhkcm9wZG93bkxpbmssYWN0aXZlKSAmJiAhZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpdGVtW3BhcmVudE5vZGVdLGFjdGl2ZSkubGVuZ3RoICApIHtcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZHJvcGRvd25MaW5rLGFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCAhaW5zaWRlICYmICFpc0FjdGl2ZSB8fCBpc0FjdGl2ZSAmJiBpbnNpZGUgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdXBkYXRlSXRlbXMgPSBmdW5jdGlvbigpe1xuICAgICAgICBzY3JvbGxPZmZzZXQgPSBpc1dpbmRvdyA/IGdldFNjcm9sbCgpLnkgOiBlbGVtZW50W3Njcm9sbFRvcF07XG4gICAgICAgIGZvciAodmFyIGluZGV4PTAsIGl0bD1pdGVtc1tsZW5ndGhdOyBpbmRleDxpdGw7IGluZGV4KyspIHtcbiAgICAgICAgICB1cGRhdGVJdGVtKGluZGV4KVxuICAgICAgICB9XG4gICAgICB9O1xuICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kXG4gICAgdGhpcy5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlSXRlbXMoKTtcbiAgICB9XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nU2Nyb2xsU3B5IGluIGVsZW1lbnQpICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgb24oIHNjcm9sbFRhcmdldCwgc2Nyb2xsRXZlbnQsIHNlbGYucmVmcmVzaCwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICAgIG9uKCBnbG9iYWxPYmplY3QsIHJlc2l6ZUV2ZW50LCBzZWxmLnJlZnJlc2gsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgfVxuICAgIHNlbGYucmVmcmVzaCgpO1xuICAgIGVsZW1lbnRbc3RyaW5nU2Nyb2xsU3B5XSA9IHNlbGY7XG4gIH07XG4gIFxuICAvLyBTQ1JPTExTUFkgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ1Njcm9sbFNweSwgU2Nyb2xsU3B5LCAnWycrZGF0YVNweSsnPVwic2Nyb2xsXCJdJyBdICk7XG4gIFxuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgVGFiXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIFRBQiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09XG4gIHZhciBUYWIgPSBmdW5jdGlvbiggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIERBVEEgQVBJXG4gICAgdmFyIGhlaWdodERhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUhlaWdodCksXG4gICAgICBcbiAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICBjb21wb25lbnQgPSAndGFiJywgaGVpZ2h0ID0gJ2hlaWdodCcsIGZsb2F0ID0gJ2Zsb2F0JywgaXNBbmltYXRpbmcgPSAnaXNBbmltYXRpbmcnO1xuICAgICAgICBcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXNbaGVpZ2h0XSA9IHN1cHBvcnRUcmFuc2l0aW9ucyA/IChvcHRpb25zW2hlaWdodF0gfHwgaGVpZ2h0RGF0YSA9PT0gJ3RydWUnKSA6IGZhbHNlO1xuICBcbiAgICAvLyBiaW5kLCBldmVudCB0YXJnZXRzXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBuZXh0LFxuICAgICAgdGFicyA9IGdldENsb3Nlc3QoZWxlbWVudCwnLm5hdicpLFxuICAgICAgdGFic0NvbnRlbnRDb250YWluZXIgPSBmYWxzZSxcbiAgICAgIGRyb3Bkb3duID0gdGFicyAmJiBxdWVyeUVsZW1lbnQoJy5kcm9wZG93bi10b2dnbGUnLHRhYnMpLFxuICAgICAgYWN0aXZlVGFiLCBhY3RpdmVDb250ZW50LCBuZXh0Q29udGVudCwgY29udGFpbmVySGVpZ2h0LCBlcXVhbENvbnRlbnRzLCBuZXh0SGVpZ2h0LFxuICAgICAgXG4gICAgICAvLyB0cmlnZ2VyXG4gICAgICB0cmlnZ2VyRW5kID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGFic0NvbnRlbnRDb250YWluZXJbc3R5bGVdW2hlaWdodF0gPSAnJztcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGFic0NvbnRlbnRDb250YWluZXIsY29sbGFwc2luZyk7XG4gICAgICAgIHRhYnNbaXNBbmltYXRpbmddID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgdHJpZ2dlclNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRhYnNDb250ZW50Q29udGFpbmVyKSB7IC8vIGhlaWdodCBhbmltYXRpb25cbiAgICAgICAgICBpZiAoIGVxdWFsQ29udGVudHMgKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRW5kKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgLy8gZW5hYmxlcyBoZWlnaHQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgIHRhYnNDb250ZW50Q29udGFpbmVyW3N0eWxlXVtoZWlnaHRdID0gbmV4dEhlaWdodCArICdweCc7IC8vIGhlaWdodCBhbmltYXRpb25cbiAgICAgICAgICAgICAgdGFic0NvbnRlbnRDb250YWluZXJbb2Zmc2V0V2lkdGhdO1xuICAgICAgICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0YWJzQ29udGVudENvbnRhaW5lciwgdHJpZ2dlckVuZCk7XG4gICAgICAgICAgICB9LDUwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFic1tpc0FuaW1hdGluZ10gPSBmYWxzZTsgXG4gICAgICAgIH1cbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChuZXh0LCBzaG93bkV2ZW50LCBjb21wb25lbnQsIGFjdGl2ZVRhYik7XG4gICAgICB9LFxuICAgICAgdHJpZ2dlckhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRhYnNDb250ZW50Q29udGFpbmVyKSB7XG4gICAgICAgICAgYWN0aXZlQ29udGVudFtzdHlsZV1bZmxvYXRdID0gbGVmdDtcbiAgICAgICAgICBuZXh0Q29udGVudFtzdHlsZV1bZmxvYXRdID0gbGVmdDsgICAgICAgIFxuICAgICAgICAgIGNvbnRhaW5lckhlaWdodCA9IGFjdGl2ZUNvbnRlbnRbc2Nyb2xsSGVpZ2h0XTtcbiAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICBhZGRDbGFzcyhuZXh0Q29udGVudCxhY3RpdmUpO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKG5leHQsIHNob3dFdmVudCwgY29tcG9uZW50LCBhY3RpdmVUYWIpO1xuICBcbiAgICAgICAgcmVtb3ZlQ2xhc3MoYWN0aXZlQ29udGVudCxhY3RpdmUpO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGFjdGl2ZVRhYiwgaGlkZGVuRXZlbnQsIGNvbXBvbmVudCwgbmV4dCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGFic0NvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgICBuZXh0SGVpZ2h0ID0gbmV4dENvbnRlbnRbc2Nyb2xsSGVpZ2h0XTtcbiAgICAgICAgICBlcXVhbENvbnRlbnRzID0gbmV4dEhlaWdodCA9PT0gY29udGFpbmVySGVpZ2h0O1xuICAgICAgICAgIGFkZENsYXNzKHRhYnNDb250ZW50Q29udGFpbmVyLGNvbGxhcHNpbmcpO1xuICAgICAgICAgIHRhYnNDb250ZW50Q29udGFpbmVyW3N0eWxlXVtoZWlnaHRdID0gY29udGFpbmVySGVpZ2h0ICsgJ3B4JzsgLy8gaGVpZ2h0IGFuaW1hdGlvblxuICAgICAgICAgIHRhYnNDb250ZW50Q29udGFpbmVyW29mZnNldEhlaWdodF07XG4gICAgICAgICAgYWN0aXZlQ29udGVudFtzdHlsZV1bZmxvYXRdID0gJyc7XG4gICAgICAgICAgbmV4dENvbnRlbnRbc3R5bGVdW2Zsb2F0XSA9ICcnO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIGhhc0NsYXNzKG5leHRDb250ZW50LCAnZmFkZScpICkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFkZENsYXNzKG5leHRDb250ZW50LHNob3dDbGFzcyk7XG4gICAgICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChuZXh0Q29udGVudCx0cmlnZ2VyU2hvdyk7XG4gICAgICAgICAgfSwyMCk7XG4gICAgICAgIH0gZWxzZSB7IHRyaWdnZXJTaG93KCk7IH0gICAgICAgIFxuICAgICAgfTtcbiAgXG4gICAgaWYgKCF0YWJzKSByZXR1cm47IC8vIGludmFsaWRhdGVcbiAgXG4gICAgLy8gc2V0IGRlZmF1bHQgYW5pbWF0aW9uIHN0YXRlXG4gICAgdGFic1tpc0FuaW1hdGluZ10gPSBmYWxzZTsgICAgXG4gICAgICAgICAgXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgdmFyIGdldEFjdGl2ZVRhYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWN0aXZlVGFicyA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUodGFicyxhY3RpdmUpLCBhY3RpdmVUYWI7XG4gICAgICAgIGlmICggYWN0aXZlVGFic1tsZW5ndGhdID09PSAxICYmICFoYXNDbGFzcyhhY3RpdmVUYWJzWzBdW3BhcmVudE5vZGVdLCdkcm9wZG93bicpICkge1xuICAgICAgICAgIGFjdGl2ZVRhYiA9IGFjdGl2ZVRhYnNbMF07XG4gICAgICAgIH0gZWxzZSBpZiAoIGFjdGl2ZVRhYnNbbGVuZ3RoXSA+IDEgKSB7XG4gICAgICAgICAgYWN0aXZlVGFiID0gYWN0aXZlVGFic1thY3RpdmVUYWJzW2xlbmd0aF0tMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVRhYjtcbiAgICAgIH0sXG4gICAgICBnZXRBY3RpdmVDb250ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBxdWVyeUVsZW1lbnQoZ2V0QWN0aXZlVGFiKClbZ2V0QXR0cmlidXRlXSgnaHJlZicpKTtcbiAgICAgIH0sXG4gICAgICAvLyBoYW5kbGVyIFxuICAgICAgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlW3ByZXZlbnREZWZhdWx0XSgpO1xuICAgICAgICBuZXh0ID0gZVtjdXJyZW50VGFyZ2V0XTtcbiAgICAgICAgIXRhYnNbaXNBbmltYXRpbmddICYmICFoYXNDbGFzcyhuZXh0LGFjdGl2ZSkgJiYgc2VsZi5zaG93KCk7XG4gICAgICB9O1xuICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kXG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24oKSB7IC8vIHRoZSB0YWIgd2UgY2xpY2tlZCBpcyBub3cgdGhlIG5leHQgdGFiXG4gICAgICBuZXh0ID0gbmV4dCB8fCBlbGVtZW50O1xuICAgICAgbmV4dENvbnRlbnQgPSBxdWVyeUVsZW1lbnQobmV4dFtnZXRBdHRyaWJ1dGVdKCdocmVmJykpOyAvL3RoaXMgaXMgdGhlIGFjdHVhbCBvYmplY3QsIHRoZSBuZXh0IHRhYiBjb250ZW50IHRvIGFjdGl2YXRlXG4gICAgICBhY3RpdmVUYWIgPSBnZXRBY3RpdmVUYWIoKTsgXG4gICAgICBhY3RpdmVDb250ZW50ID0gZ2V0QWN0aXZlQ29udGVudCgpO1xuICAgICAgXG4gICAgICB0YWJzW2lzQW5pbWF0aW5nXSA9IHRydWU7XG4gICAgICByZW1vdmVDbGFzcyhhY3RpdmVUYWIsYWN0aXZlKTtcbiAgICAgIGFjdGl2ZVRhYltzZXRBdHRyaWJ1dGVdKGFyaWFTZWxlY3RlZCwnZmFsc2UnKTtcbiAgICAgIGFkZENsYXNzKG5leHQsYWN0aXZlKTtcbiAgICAgIG5leHRbc2V0QXR0cmlidXRlXShhcmlhU2VsZWN0ZWQsJ3RydWUnKTsgICAgXG4gIFxuICAgICAgaWYgKCBkcm9wZG93biApIHtcbiAgICAgICAgaWYgKCAhaGFzQ2xhc3MoZWxlbWVudFtwYXJlbnROb2RlXSwnZHJvcGRvd24tbWVudScpICkge1xuICAgICAgICAgIGlmIChoYXNDbGFzcyhkcm9wZG93bixhY3RpdmUpKSByZW1vdmVDbGFzcyhkcm9wZG93bixhY3RpdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghaGFzQ2xhc3MoZHJvcGRvd24sYWN0aXZlKSkgYWRkQ2xhc3MoZHJvcGRvd24sYWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGFjdGl2ZVRhYiwgaGlkZUV2ZW50LCBjb21wb25lbnQsIG5leHQpO1xuICBcbiAgICAgIGlmIChoYXNDbGFzcyhhY3RpdmVDb250ZW50LCAnZmFkZScpKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGFjdGl2ZUNvbnRlbnQsc2hvd0NsYXNzKTtcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoYWN0aXZlQ29udGVudCwgdHJpZ2dlckhpZGUpO1xuICAgICAgfSBlbHNlIHsgdHJpZ2dlckhpZGUoKTsgfVxuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nVGFiIGluIGVsZW1lbnQpICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgb24oZWxlbWVudCwgY2xpY2tFdmVudCwgY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKHNlbGZbaGVpZ2h0XSkgeyB0YWJzQ29udGVudENvbnRhaW5lciA9IGdldEFjdGl2ZUNvbnRlbnQoKVtwYXJlbnROb2RlXTsgfVxuICAgIGVsZW1lbnRbc3RyaW5nVGFiXSA9IHNlbGY7XG4gIH07XG4gIFxuICAvLyBUQUIgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ1RhYiwgVGFiLCAnWycrZGF0YVRvZ2dsZSsnPVwidGFiXCJdJyBdICk7XG4gIFxuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgVG9hc3RcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIFRPQVNUIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09XG4gIHZhciBUb2FzdCA9IGZ1bmN0aW9uKCBlbGVtZW50LG9wdGlvbnMgKSB7XG4gIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnRcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICBcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcbiAgICAvLyBEQVRBIEFQSVxuICAgIHZhciBhbmltYXRpb25EYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFBbmltYXRpb24pLFxuICAgICAgICBhdXRvaGlkZURhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUF1dG9oaWRlKSxcbiAgICAgICAgZGVsYXlEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFEZWxheSksXG4gICAgICAgIFxuICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgIGNvbXBvbmVudCA9ICd0b2FzdCcsXG4gICAgICAgIGF1dG9oaWRlID0gJ2F1dG9oaWRlJyxcbiAgICAgICAgYW5pbWF0aW9uID0gJ2FuaW1hdGlvbicsXG4gICAgICAgIHNob3dpbmcgPSAnc2hvd2luZycsXG4gICAgICAgIGhpZGUgPSAnaGlkZScsXG4gICAgICAgIGZhZGUgPSAnZmFkZSc7XG4gIFxuICAgIC8vIHNldCBpbnN0YW5jZSBvcHRpb25zXG4gICAgdGhpc1thbmltYXRpb25dID0gb3B0aW9uc1thbmltYXRpb25dID09PSBmYWxzZSB8fCBhbmltYXRpb25EYXRhID09PSAnZmFsc2UnID8gMCA6IDE7IC8vIHRydWUgYnkgZGVmYXVsdFxuICAgIHRoaXNbYXV0b2hpZGVdID0gb3B0aW9uc1thdXRvaGlkZV0gPT09IGZhbHNlIHx8IGF1dG9oaWRlRGF0YSA9PT0gJ2ZhbHNlJyA/IDAgOiAxOyAvLyB0cnVlIGJ5IGRlZmF1bHRcbiAgICB0aGlzW2RlbGF5XSA9IHBhcnNlSW50KG9wdGlvbnNbZGVsYXldIHx8IGRlbGF5RGF0YSkgfHwgNTAwOyAvLyA1MDBtcyBkZWZhdWx0XG4gIFxuICAgIC8vIGJpbmQsdG9hc3QgYW5kIHRpbWVyXG4gICAgdmFyIHNlbGYgPSB0aGlzLCB0aW1lciA9IDAsXG4gICAgICAgIC8vIGdldCB0aGUgdG9hc3QgZWxlbWVudFxuICAgICAgICB0b2FzdCA9IGdldENsb3Nlc3QoZWxlbWVudCwnLnRvYXN0Jyk7XG4gIFxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIC8vIGFuaW1hdGlvbiBjb21wbGV0ZVxuICAgIHZhciBzaG93Q29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoIHRvYXN0LCBzaG93aW5nICk7XG4gICAgICAgIGFkZENsYXNzKCB0b2FzdCwgc2hvd0NsYXNzICk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwodG9hc3QsIHNob3duRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIGlmIChzZWxmW2F1dG9oaWRlXSkgeyBzZWxmLmhpZGUoKTsgfVxuICAgICAgfSxcbiAgICAgIGhpZGVDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhZGRDbGFzcyggdG9hc3QsIGhpZGUgKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbCh0b2FzdCwgaGlkZGVuRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICB9LFxuICAgICAgY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoIHRvYXN0LHNob3dDbGFzcyApO1xuICAgICAgICBzZWxmW2FuaW1hdGlvbl0gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0b2FzdCwgaGlkZUNvbXBsZXRlKSA6IGhpZGVDb21wbGV0ZSgpO1xuICAgICAgfSxcbiAgICAgIGRpc3Bvc2VDb21wbGV0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7IHRpbWVyID0gbnVsbDtcbiAgICAgICAgYWRkQ2xhc3MoIHRvYXN0LCBoaWRlICk7XG4gICAgICAgIG9mZihlbGVtZW50LCBjbGlja0V2ZW50LCBzZWxmLmhpZGUpO1xuICAgICAgICBlbGVtZW50W3N0cmluZ1RvYXN0XSA9IG51bGw7XG4gICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0b2FzdCA9IG51bGw7XG4gICAgICB9O1xuICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRvYXN0KSB7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwodG9hc3QsIHNob3dFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgc2VsZlthbmltYXRpb25dICYmIGFkZENsYXNzKCB0b2FzdCxmYWRlICk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCB0b2FzdCxoaWRlICk7XG4gICAgICAgIGFkZENsYXNzKCB0b2FzdCxzaG93aW5nICk7XG4gIFxuICAgICAgICBzZWxmW2FuaW1hdGlvbl0gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0b2FzdCwgc2hvd0NvbXBsZXRlKSA6IHNob3dDb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oaWRlID0gZnVuY3Rpb24obm9UaW1lcikge1xuICAgICAgaWYgKHRvYXN0ICYmIGhhc0NsYXNzKHRvYXN0LHNob3dDbGFzcykpIHtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbCh0b2FzdCwgaGlkZUV2ZW50LCBjb21wb25lbnQpO1xuICBcbiAgICAgICAgaWYgKG5vVGltZXIpIHtcbiAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCggY2xvc2UsIHNlbGZbZGVsYXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIHRvYXN0ICYmIGhhc0NsYXNzKHRvYXN0LHNob3dDbGFzcykgKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKCB0b2FzdCxzaG93Q2xhc3MgKTtcbiAgICAgICAgc2VsZlthbmltYXRpb25dID8gZW11bGF0ZVRyYW5zaXRpb25FbmQodG9hc3QsIGRpc3Bvc2VDb21wbGV0ZSkgOiBkaXNwb3NlQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKHN0cmluZ1RvYXN0IGluIGVsZW1lbnQpICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgb24oZWxlbWVudCwgY2xpY2tFdmVudCwgc2VsZi5oaWRlKTtcbiAgICB9XG4gICAgZWxlbWVudFtzdHJpbmdUb2FzdF0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gVE9BU1QgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nVG9hc3QsIFRvYXN0LCAnWycrZGF0YURpc21pc3MrJz1cInRvYXN0XCJdJyBdICk7XG4gIFxuICBcbiAgLyogTmF0aXZlIEphdmFzY3JpcHQgZm9yIEJvb3RzdHJhcCA0IHwgVG9vbHRpcFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gVE9PTFRJUCBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PVxuICB2YXIgVG9vbHRpcCA9IGZ1bmN0aW9uKCBlbGVtZW50LG9wdGlvbnMgKSB7XG4gIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnRcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICBcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcbiAgICAvLyBEQVRBIEFQSVxuICAgIHZhciBhbmltYXRpb25EYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFBbmltYXRpb24pLFxuICAgICAgICBwbGFjZW1lbnREYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFQbGFjZW1lbnQpLFxuICAgICAgICBkZWxheURhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YURlbGF5KSxcbiAgICAgICAgY29udGFpbmVyRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQ29udGFpbmVyKSxcbiAgICAgICAgXG4gICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgY29tcG9uZW50ID0gJ3Rvb2x0aXAnLFxuICAgICAgICBjbGFzc1N0cmluZyA9ICdjbGFzcycsXG4gICAgICAgIHRpdGxlID0gJ3RpdGxlJyxcbiAgICAgICAgZmFkZSA9ICdmYWRlJyxcbiAgICAgICAgZGl2ID0gJ2RpdicsXG4gIFxuICAgICAgICAvLyBjaGVjayBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudCA9IHF1ZXJ5RWxlbWVudChvcHRpb25zW2NvbnRhaW5lcl0pLFxuICAgICAgICBjb250YWluZXJEYXRhRWxlbWVudCA9IHF1ZXJ5RWxlbWVudChjb250YWluZXJEYXRhKSwgICAgICBcbiAgXG4gICAgICAgIC8vIG1heWJlIHRoZSBlbGVtZW50IGlzIGluc2lkZSBhIG1vZGFsXG4gICAgICAgIG1vZGFsID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcubW9kYWwnKSxcbiAgICAgICAgXG4gICAgICAgIC8vIG1heWJlIHRoZSBlbGVtZW50IGlzIGluc2lkZSBhIGZpeGVkIG5hdmJhclxuICAgICAgICBuYXZiYXJGaXhlZFRvcCA9IGdldENsb3Nlc3QoZWxlbWVudCwnLicrZml4ZWRUb3ApLFxuICAgICAgICBuYXZiYXJGaXhlZEJvdHRvbSA9IGdldENsb3Nlc3QoZWxlbWVudCwnLicrZml4ZWRCb3R0b20pO1xuICBcbiAgICAvLyBzZXQgaW5zdGFuY2Ugb3B0aW9uc1xuICAgIHRoaXNbYW5pbWF0aW9uXSA9IG9wdGlvbnNbYW5pbWF0aW9uXSAmJiBvcHRpb25zW2FuaW1hdGlvbl0gIT09IGZhZGUgPyBvcHRpb25zW2FuaW1hdGlvbl0gOiBhbmltYXRpb25EYXRhIHx8IGZhZGU7XG4gICAgdGhpc1twbGFjZW1lbnRdID0gb3B0aW9uc1twbGFjZW1lbnRdID8gb3B0aW9uc1twbGFjZW1lbnRdIDogcGxhY2VtZW50RGF0YSB8fCB0b3A7XG4gICAgdGhpc1tkZWxheV0gPSBwYXJzZUludChvcHRpb25zW2RlbGF5XSB8fCBkZWxheURhdGEpIHx8IDIwMDtcbiAgICB0aGlzW2NvbnRhaW5lcl0gPSBjb250YWluZXJFbGVtZW50ID8gY29udGFpbmVyRWxlbWVudCBcbiAgICAgICAgICAgICAgICAgICAgOiBjb250YWluZXJEYXRhRWxlbWVudCA/IGNvbnRhaW5lckRhdGFFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIDogbmF2YmFyRml4ZWRUb3AgPyBuYXZiYXJGaXhlZFRvcFxuICAgICAgICAgICAgICAgICAgICA6IG5hdmJhckZpeGVkQm90dG9tID8gbmF2YmFyRml4ZWRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgOiBtb2RhbCA/IG1vZGFsIDogRE9DW2JvZHldO1xuICBcbiAgICAvLyBiaW5kLCBldmVudCB0YXJnZXRzLCB0aXRsZSBhbmQgY29uc3RhbnRzXG4gICAgdmFyIHNlbGYgPSB0aGlzLCB0aW1lciA9IDAsIHBsYWNlbWVudFNldHRpbmcgPSB0aGlzW3BsYWNlbWVudF0sIHRvb2x0aXAgPSBudWxsLFxuICAgICAgICB0aXRsZVN0cmluZyA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXSh0aXRsZSkgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUaXRsZSkgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFPcmlnaW5hbFRpdGxlKTtcbiAgXG4gICAgaWYgKCAhdGl0bGVTdHJpbmcgfHwgdGl0bGVTdHJpbmcgPT0gXCJcIiApIHJldHVybjsgLy8gaW52YWxpZGF0ZVxuICBcbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICB2YXIgcmVtb3ZlVG9vbFRpcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmW2NvbnRhaW5lcl0ucmVtb3ZlQ2hpbGQodG9vbHRpcCk7XG4gICAgICAgIHRvb2x0aXAgPSBudWxsOyB0aW1lciA9IG51bGw7XG4gICAgICB9LFxuICAgICAgY3JlYXRlVG9vbFRpcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aXRsZVN0cmluZyA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXSh0aXRsZSkgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUaXRsZSkgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFPcmlnaW5hbFRpdGxlKTsgLy8gcmVhZCB0aGUgdGl0bGUgYWdhaW5cbiAgXG4gICAgICAgIGlmICggdGl0bGVTdHJpbmcgJiYgdGl0bGVTdHJpbmcgIT09IFwiXCIgKSB7IC8vIGludmFsaWRhdGUsIG1heWJlIG1hcmt1cCBjaGFuZ2VkXG4gICAgICAgICAgdG9vbHRpcCA9IERPQ1tjcmVhdGVFbGVtZW50XShkaXYpO1xuICAgICAgICAgIHRvb2x0aXBbc2V0QXR0cmlidXRlXSgncm9sZScsY29tcG9uZW50KTtcbiAgICAgICAgICB0b29sdGlwW3N0eWxlXVtsZWZ0XSA9ICcwJztcbiAgICAgICAgICB0b29sdGlwW3N0eWxlXVt0b3BdID0gJzAnOyAgICAgICAgXG4gIFxuICAgICAgICAgIC8vIHRvb2x0aXAgYXJyb3dcbiAgICAgICAgICB2YXIgdG9vbHRpcEFycm93ID0gRE9DW2NyZWF0ZUVsZW1lbnRdKGRpdik7XG4gICAgICAgICAgdG9vbHRpcEFycm93W3NldEF0dHJpYnV0ZV0oY2xhc3NTdHJpbmcsJ2Fycm93Jyk7XG4gICAgICAgICAgdG9vbHRpcFthcHBlbmRDaGlsZF0odG9vbHRpcEFycm93KTtcbiAgICAgIFxuICAgICAgICAgIHZhciB0b29sdGlwSW5uZXIgPSBET0NbY3JlYXRlRWxlbWVudF0oZGl2KTtcbiAgICAgICAgICB0b29sdGlwSW5uZXJbc2V0QXR0cmlidXRlXShjbGFzc1N0cmluZyxjb21wb25lbnQrJy1pbm5lcicpO1xuICAgICAgICAgIHRvb2x0aXBbYXBwZW5kQ2hpbGRdKHRvb2x0aXBJbm5lcik7XG4gICAgICAgICAgdG9vbHRpcElubmVyW2lubmVySFRNTF0gPSB0aXRsZVN0cmluZztcbiAgXG4gICAgICAgICAgc2VsZltjb250YWluZXJdW2FwcGVuZENoaWxkXSh0b29sdGlwKTtcbiAgICAgICAgICB0b29sdGlwW3NldEF0dHJpYnV0ZV0oY2xhc3NTdHJpbmcsIGNvbXBvbmVudCArICcgYnMtJyArIGNvbXBvbmVudCsnLScrcGxhY2VtZW50U2V0dGluZyArICcgJyArIHNlbGZbYW5pbWF0aW9uXSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGVUb29sdGlwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdHlsZVRpcChlbGVtZW50LCB0b29sdGlwLCBwbGFjZW1lbnRTZXR0aW5nLCBzZWxmW2NvbnRhaW5lcl0pO1xuICAgICAgfSxcbiAgICAgIHNob3dUb29sdGlwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAhaGFzQ2xhc3ModG9vbHRpcCxzaG93Q2xhc3MpICYmICggYWRkQ2xhc3ModG9vbHRpcCxzaG93Q2xhc3MpICk7XG4gICAgICB9LFxuICAgICAgLy8gdHJpZ2dlcnNcbiAgICAgIHNob3dUcmlnZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG9uKCBnbG9iYWxPYmplY3QsIHJlc2l6ZUV2ZW50LCBzZWxmLmhpZGUsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2hvd25FdmVudCwgY29tcG9uZW50KTtcbiAgICAgIH0sXG4gICAgICBoaWRlVHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBvZmYoIGdsb2JhbE9iamVjdCwgcmVzaXplRXZlbnQsIHNlbGYuaGlkZSwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICAgICAgcmVtb3ZlVG9vbFRpcCgpO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIGhpZGRlbkV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgfTtcbiAgXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICB0aGlzLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodG9vbHRpcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHBsYWNlbWVudFNldHRpbmcgPSBzZWxmW3BsYWNlbWVudF07IC8vIHdlIHJlc2V0IHBsYWNlbWVudCBpbiBhbGwgY2FzZXNcbiAgICAgICAgICAvLyBpZihjcmVhdGVUb29sVGlwKCkgPT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgICBpZihjcmVhdGVUb29sVGlwKCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB1cGRhdGVUb29sdGlwKCk7XG4gICAgICAgICAgICBzaG93VG9vbHRpcCgpO1xuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBzaG93RXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgICAgICAhIXNlbGZbYW5pbWF0aW9uXSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRvb2x0aXAsIHNob3dUcmlnZ2VyKSA6IHNob3dUcmlnZ2VyKCk7ICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMjAgKTtcbiAgICB9O1xuICAgIHRoaXMuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0b29sdGlwICYmIGhhc0NsYXNzKHRvb2x0aXAsc2hvd0NsYXNzKSkge1xuICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgaGlkZUV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRvb2x0aXAsc2hvd0NsYXNzKTtcbiAgICAgICAgICAhIXNlbGZbYW5pbWF0aW9uXSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRvb2x0aXAsIGhpZGVUcmlnZ2VyKSA6IGhpZGVUcmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHNlbGZbZGVsYXldKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRvb2x0aXApIHsgc2VsZi5zaG93KCk7IH0gXG4gICAgICBlbHNlIHsgc2VsZi5oaWRlKCk7IH1cbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKHN0cmluZ1Rvb2x0aXAgaW4gZWxlbWVudCkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICBlbGVtZW50W3NldEF0dHJpYnV0ZV0oZGF0YU9yaWdpbmFsVGl0bGUsdGl0bGVTdHJpbmcpO1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGl0bGUpO1xuICAgICAgb24oZWxlbWVudCwgbW91c2VIb3ZlclswXSwgc2VsZi5zaG93KTtcbiAgICAgIG9uKGVsZW1lbnQsIG1vdXNlSG92ZXJbMV0sIHNlbGYuaGlkZSk7XG4gICAgfVxuICAgIGVsZW1lbnRbc3RyaW5nVG9vbHRpcF0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gVE9PTFRJUCBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdUb29sdGlwLCBUb29sdGlwLCAnWycrZGF0YVRvZ2dsZSsnPVwidG9vbHRpcFwiXScgXSApO1xuICBcbiAgXG4gIFxyXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgfCBJbml0aWFsaXplIERhdGEgQVBJXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIHZhciBpbml0aWFsaXplRGF0YUFQSSA9IGZ1bmN0aW9uKCBjb25zdHJ1Y3RvciwgY29sbGVjdGlvbiApe1xyXG4gICAgICBmb3IgKHZhciBpPTAsIGw9Y29sbGVjdGlvbltsZW5ndGhdOyBpPGw7IGkrKykge1xyXG4gICAgICAgIG5ldyBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uW2ldKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRDYWxsYmFjayA9IEJTTi5pbml0Q2FsbGJhY2sgPSBmdW5jdGlvbihsb29rVXApe1xyXG4gICAgICBsb29rVXAgPSBsb29rVXAgfHwgRE9DO1xyXG4gICAgICBmb3IgKHZhciBpPTAsIGw9c3VwcG9ydHNbbGVuZ3RoXTsgaTxsOyBpKyspIHtcclxuICAgICAgICBpbml0aWFsaXplRGF0YUFQSSggc3VwcG9ydHNbaV1bMV0sIGxvb2tVcFtxdWVyeVNlbGVjdG9yQWxsXSAoc3VwcG9ydHNbaV1bMl0pICk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgLy8gYnVsayBpbml0aWFsaXplIGFsbCBjb21wb25lbnRzXHJcbiAgRE9DW2JvZHldID8gaW5pdENhbGxiYWNrKCkgOiBvbiggRE9DLCAnRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7IGluaXRDYWxsYmFjaygpOyB9ICk7XHJcbiAgXG4gIHJldHVybiB7XG4gICAgQWxlcnQ6IEFsZXJ0LFxuICAgIEJ1dHRvbjogQnV0dG9uLFxuICAgIENhcm91c2VsOiBDYXJvdXNlbCxcbiAgICBDb2xsYXBzZTogQ29sbGFwc2UsXG4gICAgRHJvcGRvd246IERyb3Bkb3duLFxuICAgIE1vZGFsOiBNb2RhbCxcbiAgICBQb3BvdmVyOiBQb3BvdmVyLFxuICAgIFNjcm9sbFNweTogU2Nyb2xsU3B5LFxuICAgIFRhYjogVGFiLFxuICAgIFRvYXN0OiBUb2FzdCxcbiAgICBUb29sdGlwOiBUb29sdGlwXG4gIH07XG59KSk7XG4iLCIvLyBnZXQgc3VjY2Vzc2Z1bCBjb250cm9sIGZyb20gZm9ybSBhbmQgYXNzZW1ibGUgaW50byBvYmplY3Rcbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw0MDEvaW50ZXJhY3QvZm9ybXMuaHRtbCNoLTE3LjEzLjJcblxuLy8gdHlwZXMgd2hpY2ggaW5kaWNhdGUgYSBzdWJtaXQgYWN0aW9uIGFuZCBhcmUgbm90IHN1Y2Nlc3NmdWwgY29udHJvbHNcbi8vIHRoZXNlIHdpbGwgYmUgaWdub3JlZFxudmFyIGtfcl9zdWJtaXR0ZXIgPSAvXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2k7XG5cbi8vIG5vZGUgbmFtZXMgd2hpY2ggY291bGQgYmUgc3VjY2Vzc2Z1bCBjb250cm9sc1xudmFyIGtfcl9zdWNjZXNzX2NvbnRybHMgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7XG5cbi8vIE1hdGNoZXMgYnJhY2tldCBub3RhdGlvbi5cbnZhciBicmFja2V0cyA9IC8oXFxbW15cXFtcXF1dKlxcXSkvZztcblxuLy8gc2VyaWFsaXplcyBmb3JtIGZpZWxkc1xuLy8gQHBhcmFtIGZvcm0gTVVTVCBiZSBhbiBIVE1MRm9ybSBlbGVtZW50XG4vLyBAcGFyYW0gb3B0aW9ucyBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0byBjb25maWd1cmUgdGhlIHNlcmlhbGl6YXRpb24uIERlZmF1bHQgb3V0cHV0XG4vLyB3aXRoIG5vIG9wdGlvbnMgc3BlY2lmaWVkIGlzIGEgdXJsIGVuY29kZWQgc3RyaW5nXG4vLyAgICAtIGhhc2g6IFt0cnVlIHwgZmFsc2VdIENvbmZpZ3VyZSB0aGUgb3V0cHV0IHR5cGUuIElmIHRydWUsIHRoZSBvdXRwdXQgd2lsbFxuLy8gICAgYmUgYSBqcyBvYmplY3QuXG4vLyAgICAtIHNlcmlhbGl6ZXI6IFtmdW5jdGlvbl0gT3B0aW9uYWwgc2VyaWFsaXplciBmdW5jdGlvbiB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBvbmUuXG4vLyAgICBUaGUgZnVuY3Rpb24gdGFrZXMgMyBhcmd1bWVudHMgKHJlc3VsdCwga2V5LCB2YWx1ZSkgYW5kIHNob3VsZCByZXR1cm4gbmV3IHJlc3VsdFxuLy8gICAgaGFzaCBhbmQgdXJsIGVuY29kZWQgc3RyIHNlcmlhbGl6ZXJzIGFyZSBwcm92aWRlZCB3aXRoIHRoaXMgbW9kdWxlXG4vLyAgICAtIGRpc2FibGVkOiBbdHJ1ZSB8IGZhbHNlXS4gSWYgdHJ1ZSBzZXJpYWxpemUgZGlzYWJsZWQgZmllbGRzLlxuLy8gICAgLSBlbXB0eTogW3RydWUgfCBmYWxzZV0uIElmIHRydWUgc2VyaWFsaXplIGVtcHR5IGZpZWxkc1xuZnVuY3Rpb24gc2VyaWFsaXplKGZvcm0sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgaGFzaDogISFvcHRpb25zIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wdGlvbnMuaGFzaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbnMuaGFzaCA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IChvcHRpb25zLmhhc2gpID8ge30gOiAnJztcbiAgICB2YXIgc2VyaWFsaXplciA9IG9wdGlvbnMuc2VyaWFsaXplciB8fCAoKG9wdGlvbnMuaGFzaCkgPyBoYXNoX3NlcmlhbGl6ZXIgOiBzdHJfc2VyaWFsaXplKTtcblxuICAgIHZhciBlbGVtZW50cyA9IGZvcm0gJiYgZm9ybS5lbGVtZW50cyA/IGZvcm0uZWxlbWVudHMgOiBbXTtcblxuICAgIC8vT2JqZWN0IHN0b3JlIGVhY2ggcmFkaW8gYW5kIHNldCBpZiBpdCdzIGVtcHR5IG9yIG5vdFxuICAgIHZhciByYWRpb19zdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICBmb3IgKHZhciBpPTAgOyBpPGVsZW1lbnRzLmxlbmd0aCA7ICsraSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICAgIC8vIGluZ29yZSBkaXNhYmxlZCBmaWVsZHNcbiAgICAgICAgaWYgKCghb3B0aW9ucy5kaXNhYmxlZCAmJiBlbGVtZW50LmRpc2FibGVkKSB8fCAhZWxlbWVudC5uYW1lKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZ25vcmUgYW55aHRpbmcgdGhhdCBpcyBub3QgY29uc2lkZXJlZCBhIHN1Y2Nlc3MgZmllbGRcbiAgICAgICAgaWYgKCFrX3Jfc3VjY2Vzc19jb250cmxzLnRlc3QoZWxlbWVudC5ub2RlTmFtZSkgfHxcbiAgICAgICAgICAgIGtfcl9zdWJtaXR0ZXIudGVzdChlbGVtZW50LnR5cGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXkgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgIHZhciB2YWwgPSBlbGVtZW50LnZhbHVlO1xuXG4gICAgICAgIC8vIHdlIGNhbid0IGp1c3QgdXNlIGVsZW1lbnQudmFsdWUgZm9yIGNoZWNrYm94ZXMgY2F1c2Ugc29tZSBicm93c2VycyBsaWUgdG8gdXNcbiAgICAgICAgLy8gdGhleSBzYXkgXCJvblwiIGZvciB2YWx1ZSB3aGVuIHRoZSBib3ggaXNuJ3QgY2hlY2tlZFxuICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpICYmICFlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIHdhbnQgZW1wdHkgZWxlbWVudHNcbiAgICAgICAgaWYgKG9wdGlvbnMuZW1wdHkpIHtcbiAgICAgICAgICAgIC8vIGZvciBjaGVja2JveFxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94JyAmJiAhZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZvciByYWRpb1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIGlmICghcmFkaW9fc3RvcmVbZWxlbWVudC5uYW1lXSAmJiAhZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhZGlvX3N0b3JlW2VsZW1lbnQubmFtZV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhZGlvX3N0b3JlW2VsZW1lbnQubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgb3B0aW9ucyBlbXB0eSBpcyB0cnVlLCBjb250aW51ZSBvbmx5IGlmIGl0cyByYWRpb1xuICAgICAgICAgICAgaWYgKHZhbCA9PSB1bmRlZmluZWQgJiYgZWxlbWVudC50eXBlID09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHZhbHVlLWxlc3MgZmllbGRzIGFyZSBpZ25vcmVkIHVubGVzcyBvcHRpb25zLmVtcHR5IGlzIHRydWVcbiAgICAgICAgICAgIGlmICghdmFsKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtdWx0aSBzZWxlY3QgYm94ZXNcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3NlbGVjdC1tdWx0aXBsZScpIHtcbiAgICAgICAgICAgIHZhbCA9IFtdO1xuXG4gICAgICAgICAgICB2YXIgc2VsZWN0T3B0aW9ucyA9IGVsZW1lbnQub3B0aW9ucztcbiAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkT3B0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaj0wIDsgajxzZWxlY3RPcHRpb25zLmxlbmd0aCA7ICsraikge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBzZWxlY3RPcHRpb25zW2pdO1xuICAgICAgICAgICAgICAgIHZhciBhbGxvd2VkRW1wdHkgPSBvcHRpb25zLmVtcHR5ICYmICFvcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1ZhbHVlID0gKG9wdGlvbi52YWx1ZSB8fCBhbGxvd2VkRW1wdHkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgJiYgaGFzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZE9wdGlvbnMgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHVzaW5nIGEgaGFzaCBzZXJpYWxpemVyIGJlIHN1cmUgdG8gYWRkIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IG5vdGF0aW9uIGZvciBhbiBhcnJheSBpbiB0aGUgbXVsdGktc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRleHQuIEhlcmUgdGhlIG5hbWUgYXR0cmlidXRlIG9uIHRoZSBzZWxlY3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAvLyBtaWdodCBiZSBtaXNzaW5nIHRoZSB0cmFpbGluZyBicmFja2V0IHBhaXIuIEJvdGggbmFtZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJmb29cIiBhbmQgXCJmb29bXVwiIHNob3VsZCBiZSBhcnJheXMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmhhc2ggJiYga2V5LnNsaWNlKGtleS5sZW5ndGggLSAyKSAhPT0gJ1tdJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc2VyaWFsaXplcihyZXN1bHQsIGtleSArICdbXScsIG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzZXJpYWxpemVyKHJlc3VsdCwga2V5LCBvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXJpYWxpemUgaWYgbm8gc2VsZWN0ZWQgb3B0aW9ucyBhbmQgb3B0aW9ucy5lbXB0eSBpcyB0cnVlXG4gICAgICAgICAgICBpZiAoIWlzU2VsZWN0ZWRPcHRpb25zICYmIG9wdGlvbnMuZW1wdHkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzZXJpYWxpemVyKHJlc3VsdCwga2V5LCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gc2VyaWFsaXplcihyZXN1bHQsIGtleSwgdmFsKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgYWxsIGVtcHR5IHJhZGlvIGJ1dHRvbnMgYW5kIHNlcmlhbGl6ZSB0aGVtIHdpdGgga2V5PVwiXCJcbiAgICBpZiAob3B0aW9ucy5lbXB0eSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcmFkaW9fc3RvcmUpIHtcbiAgICAgICAgICAgIGlmICghcmFkaW9fc3RvcmVba2V5XSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNlcmlhbGl6ZXIocmVzdWx0LCBrZXksICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlX2tleXMoc3RyaW5nKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcHJlZml4ID0gL14oW15cXFtcXF1dKikvO1xuICAgIHZhciBjaGlsZHJlbiA9IG5ldyBSZWdFeHAoYnJhY2tldHMpO1xuICAgIHZhciBtYXRjaCA9IHByZWZpeC5leGVjKHN0cmluZyk7XG5cbiAgICBpZiAobWF0Y2hbMV0pIHtcbiAgICAgICAga2V5cy5wdXNoKG1hdGNoWzFdKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoKG1hdGNoID0gY2hpbGRyZW4uZXhlYyhzdHJpbmcpKSAhPT0gbnVsbCkge1xuICAgICAgICBrZXlzLnB1c2gobWF0Y2hbMV0pO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBoYXNoX2Fzc2lnbihyZXN1bHQsIGtleXMsIHZhbHVlKSB7XG4gICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgdmFyIGJldHdlZW4gPSBrZXkubWF0Y2goL15cXFsoLis/KVxcXSQvKTtcblxuICAgIGlmIChrZXkgPT09ICdbXScpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IFtdO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGhhc2hfYXNzaWduKG51bGwsIGtleXMsIHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIG1pZ2h0IGJlIHRoZSByZXN1bHQgb2YgYmFkIG5hbWUgYXR0cmlidXRlcyBsaWtlIFwiW11bZm9vXVwiLFxuICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHRoZSBvcmlnaW5hbCBgcmVzdWx0YCBvYmplY3Qgd2lsbCBhbHJlYWR5IGJlXG4gICAgICAgICAgICAvLyBhc3NpZ25lZCB0byBhbiBvYmplY3QgbGl0ZXJhbC4gUmF0aGVyIHRoYW4gY29lcmNlIHRoZSBvYmplY3QgdG9cbiAgICAgICAgICAgIC8vIGFuIGFycmF5LCBvciBjYXVzZSBhbiBleGNlcHRpb24gdGhlIGF0dHJpYnV0ZSBcIl92YWx1ZXNcIiBpc1xuICAgICAgICAgICAgLy8gYXNzaWduZWQgYXMgYW4gYXJyYXkuXG4gICAgICAgICAgICByZXN1bHQuX3ZhbHVlcyA9IHJlc3VsdC5fdmFsdWVzIHx8IFtdO1xuICAgICAgICAgICAgcmVzdWx0Ll92YWx1ZXMucHVzaChoYXNoX2Fzc2lnbihudWxsLCBrZXlzLCB2YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBLZXkgaXMgYW4gYXR0cmlidXRlIG5hbWUgYW5kIGNhbiBiZSBhc3NpZ25lZCBkaXJlY3RseS5cbiAgICBpZiAoIWJldHdlZW4pIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBoYXNoX2Fzc2lnbihyZXN1bHRba2V5XSwga2V5cywgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHN0cmluZyA9IGJldHdlZW5bMV07XG4gICAgICAgIC8vICt2YXIgY29udmVydHMgdGhlIHZhcmlhYmxlIGludG8gYSBudW1iZXJcbiAgICAgICAgLy8gYmV0dGVyIHRoYW4gcGFyc2VJbnQgYmVjYXVzZSBpdCBkb2Vzbid0IHRydW5jYXRlIGF3YXkgdHJhaWxpbmdcbiAgICAgICAgLy8gbGV0dGVycyBhbmQgYWN0dWFsbHkgZmFpbHMgaWYgd2hvbGUgdGhpbmcgaXMgbm90IGEgbnVtYmVyXG4gICAgICAgIHZhciBpbmRleCA9ICtzdHJpbmc7XG5cbiAgICAgICAgLy8gSWYgdGhlIGNoYXJhY3RlcnMgYmV0d2VlbiB0aGUgYnJhY2tldHMgaXMgbm90IGEgbnVtYmVyIGl0IGlzIGFuXG4gICAgICAgIC8vIGF0dHJpYnV0ZSBuYW1lIGFuZCBjYW4gYmUgYXNzaWduZWQgZGlyZWN0bHkuXG4gICAgICAgIGlmIChpc05hTihpbmRleCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCB7fTtcbiAgICAgICAgICAgIHJlc3VsdFtzdHJpbmddID0gaGFzaF9hc3NpZ24ocmVzdWx0W3N0cmluZ10sIGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBbXTtcbiAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBoYXNoX2Fzc2lnbihyZXN1bHRbaW5kZXhdLCBrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBPYmplY3QvaGFzaCBlbmNvZGluZyBzZXJpYWxpemVyLlxuZnVuY3Rpb24gaGFzaF9zZXJpYWxpemVyKHJlc3VsdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBtYXRjaGVzID0ga2V5Lm1hdGNoKGJyYWNrZXRzKTtcblxuICAgIC8vIEhhcyBicmFja2V0cz8gVXNlIHRoZSByZWN1cnNpdmUgYXNzaWdubWVudCBmdW5jdGlvbiB0byB3YWxrIHRoZSBrZXlzLFxuICAgIC8vIGNvbnN0cnVjdCBhbnkgbWlzc2luZyBvYmplY3RzIGluIHRoZSByZXN1bHQgdHJlZSBhbmQgbWFrZSB0aGUgYXNzaWdubWVudFxuICAgIC8vIGF0IHRoZSBlbmQgb2YgdGhlIGNoYWluLlxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHZhciBrZXlzID0gcGFyc2Vfa2V5cyhrZXkpO1xuICAgICAgICBoYXNoX2Fzc2lnbihyZXN1bHQsIGtleXMsIHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIE5vbiBicmFja2V0IG5vdGF0aW9uIGNhbiBtYWtlIGFzc2lnbm1lbnRzIGRpcmVjdGx5LlxuICAgICAgICB2YXIgZXhpc3RpbmcgPSByZXN1bHRba2V5XTtcblxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaGFzIGJlZW4gYXNzaWduZWQgYWxyZWFkeSAoZm9yIGluc3RhbmNlIHdoZW4gYSByYWRpbyBhbmRcbiAgICAgICAgLy8gYSBjaGVja2JveCBoYXZlIHRoZSBzYW1lIG5hbWUgYXR0cmlidXRlKSBjb252ZXJ0IHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgICAvLyBpbnRvIGFuIGFycmF5IGJlZm9yZSBwdXNoaW5nIGludG8gaXQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIE5PVEU6IElmIHRoaXMgcmVxdWlyZW1lbnQgd2VyZSByZW1vdmVkIGFsbCBoYXNoIGNyZWF0aW9uIGFuZFxuICAgICAgICAvLyBhc3NpZ25tZW50IGNvdWxkIGdvIHRocm91Z2ggYGhhc2hfYXNzaWduYC5cbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhpc3RpbmcpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBbIGV4aXN0aW5nIF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHVybGZvcm0gZW5jb2Rpbmcgc2VyaWFsaXplclxuZnVuY3Rpb24gc3RyX3NlcmlhbGl6ZShyZXN1bHQsIGtleSwgdmFsdWUpIHtcbiAgICAvLyBlbmNvZGUgbmV3bGluZXMgYXMgXFxyXFxuIGNhdXNlIHRoZSBodG1sIHNwZWMgc2F5cyBzb1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvKFxccik/XFxuL2csICdcXHJcXG4nKTtcbiAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICAvLyBzcGFjZXMgc2hvdWxkIGJlICcrJyByYXRoZXIgdGhhbiAnJTIwJy5cbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xuICAgIHJldHVybiByZXN1bHQgKyAocmVzdWx0ID8gJyYnIDogJycpICsgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemU7XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD10fHxzZWxmKS5HTGlnaHRib3g9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChlKXtyZXR1cm4odD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkoZSl9ZnVuY3Rpb24gZSh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gaSh0LGUpe2Zvcih2YXIgaT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgbj1lW2ldO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLmtleSxuKX19ZnVuY3Rpb24gbih0LGUsbil7cmV0dXJuIGUmJmkodC5wcm90b3R5cGUsZSksbiYmaSh0LG4pLHR9ZnVuY3Rpb24gcyh0KXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHZhciBlPTAsaT1uZXcgQXJyYXkodC5sZW5ndGgpO2U8dC5sZW5ndGg7ZSsrKWlbZV09dFtlXTtyZXR1cm4gaX19KHQpfHxmdW5jdGlvbih0KXtpZihTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiBBcnJheS5mcm9tKHQpfSh0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIil9KCl9ZnVuY3Rpb24gbyh0KXtyZXR1cm4gTWF0aC5zcXJ0KHQueCp0LngrdC55KnQueSl9ZnVuY3Rpb24gbCh0LGUpe3ZhciBpPWZ1bmN0aW9uKHQsZSl7dmFyIGk9byh0KSpvKGUpO2lmKDA9PT1pKXJldHVybiAwO3ZhciBuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQueCplLngrdC55KmUueX0odCxlKS9pO3JldHVybiBuPjEmJihuPTEpLE1hdGguYWNvcyhuKX0odCxlKTtyZXR1cm4gZnVuY3Rpb24odCxlKXtyZXR1cm4gdC54KmUueS1lLngqdC55fSh0LGUpPjAmJihpKj0tMSksMTgwKmkvTWF0aC5QSX12YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoaSl7ZSh0aGlzLHQpLHRoaXMuaGFuZGxlcnM9W10sdGhpcy5lbD1pfXJldHVybiBuKHQsW3trZXk6XCJhZGRcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLmhhbmRsZXJzLnB1c2godCl9fSx7a2V5OlwiZGVsXCIsdmFsdWU6ZnVuY3Rpb24odCl7dHx8KHRoaXMuaGFuZGxlcnM9W10pO2Zvcih2YXIgZT10aGlzLmhhbmRsZXJzLmxlbmd0aDtlPj0wO2UtLSl0aGlzLmhhbmRsZXJzW2VdPT09dCYmdGhpcy5oYW5kbGVycy5zcGxpY2UoZSwxKX19LHtrZXk6XCJkaXNwYXRjaFwiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PTAsZT10aGlzLmhhbmRsZXJzLmxlbmd0aDt0PGU7dCsrKXt2YXIgaT10aGlzLmhhbmRsZXJzW3RdO1wiZnVuY3Rpb25cIj09dHlwZW9mIGkmJmkuYXBwbHkodGhpcy5lbCxhcmd1bWVudHMpfX19XSksdH0oKTtmdW5jdGlvbiBhKHQsZSl7dmFyIGk9bmV3IHIodCk7cmV0dXJuIGkuYWRkKGUpLGl9dmFyIGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGksbil7ZSh0aGlzLHQpLHRoaXMuZWxlbWVudD1cInN0cmluZ1wiPT10eXBlb2YgaT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGkpOmksdGhpcy5zdGFydD10aGlzLnN0YXJ0LmJpbmQodGhpcyksdGhpcy5tb3ZlPXRoaXMubW92ZS5iaW5kKHRoaXMpLHRoaXMuZW5kPXRoaXMuZW5kLmJpbmQodGhpcyksdGhpcy5jYW5jZWw9dGhpcy5jYW5jZWwuYmluZCh0aGlzKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnN0YXJ0LCExKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMubW92ZSwhMSksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMuZW5kLCExKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsdGhpcy5jYW5jZWwsITEpLHRoaXMucHJlVj17eDpudWxsLHk6bnVsbH0sdGhpcy5waW5jaFN0YXJ0TGVuPW51bGwsdGhpcy56b29tPTEsdGhpcy5pc0RvdWJsZVRhcD0hMTt2YXIgcz1mdW5jdGlvbigpe307dGhpcy5yb3RhdGU9YSh0aGlzLmVsZW1lbnQsbi5yb3RhdGV8fHMpLHRoaXMudG91Y2hTdGFydD1hKHRoaXMuZWxlbWVudCxuLnRvdWNoU3RhcnR8fHMpLHRoaXMubXVsdGlwb2ludFN0YXJ0PWEodGhpcy5lbGVtZW50LG4ubXVsdGlwb2ludFN0YXJ0fHxzKSx0aGlzLm11bHRpcG9pbnRFbmQ9YSh0aGlzLmVsZW1lbnQsbi5tdWx0aXBvaW50RW5kfHxzKSx0aGlzLnBpbmNoPWEodGhpcy5lbGVtZW50LG4ucGluY2h8fHMpLHRoaXMuc3dpcGU9YSh0aGlzLmVsZW1lbnQsbi5zd2lwZXx8cyksdGhpcy50YXA9YSh0aGlzLmVsZW1lbnQsbi50YXB8fHMpLHRoaXMuZG91YmxlVGFwPWEodGhpcy5lbGVtZW50LG4uZG91YmxlVGFwfHxzKSx0aGlzLmxvbmdUYXA9YSh0aGlzLmVsZW1lbnQsbi5sb25nVGFwfHxzKSx0aGlzLnNpbmdsZVRhcD1hKHRoaXMuZWxlbWVudCxuLnNpbmdsZVRhcHx8cyksdGhpcy5wcmVzc01vdmU9YSh0aGlzLmVsZW1lbnQsbi5wcmVzc01vdmV8fHMpLHRoaXMudHdvRmluZ2VyUHJlc3NNb3ZlPWEodGhpcy5lbGVtZW50LG4udHdvRmluZ2VyUHJlc3NNb3ZlfHxzKSx0aGlzLnRvdWNoTW92ZT1hKHRoaXMuZWxlbWVudCxuLnRvdWNoTW92ZXx8cyksdGhpcy50b3VjaEVuZD1hKHRoaXMuZWxlbWVudCxuLnRvdWNoRW5kfHxzKSx0aGlzLnRvdWNoQ2FuY2VsPWEodGhpcy5lbGVtZW50LG4udG91Y2hDYW5jZWx8fHMpLHRoaXMuX2NhbmNlbEFsbEhhbmRsZXI9dGhpcy5jYW5jZWxBbGwuYmluZCh0aGlzKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMuX2NhbmNlbEFsbEhhbmRsZXIpLHRoaXMuZGVsdGE9bnVsbCx0aGlzLmxhc3Q9bnVsbCx0aGlzLm5vdz1udWxsLHRoaXMudGFwVGltZW91dD1udWxsLHRoaXMuc2luZ2xlVGFwVGltZW91dD1udWxsLHRoaXMubG9uZ1RhcFRpbWVvdXQ9bnVsbCx0aGlzLnN3aXBlVGltZW91dD1udWxsLHRoaXMueDE9dGhpcy54Mj10aGlzLnkxPXRoaXMueTI9bnVsbCx0aGlzLnByZVRhcFBvc2l0aW9uPXt4Om51bGwseTpudWxsfX1yZXR1cm4gbih0LFt7a2V5Olwic3RhcnRcIix2YWx1ZTpmdW5jdGlvbih0KXtpZih0LnRvdWNoZXMpe3RoaXMubm93PURhdGUubm93KCksdGhpcy54MT10LnRvdWNoZXNbMF0ucGFnZVgsdGhpcy55MT10LnRvdWNoZXNbMF0ucGFnZVksdGhpcy5kZWx0YT10aGlzLm5vdy0odGhpcy5sYXN0fHx0aGlzLm5vdyksdGhpcy50b3VjaFN0YXJ0LmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KSxudWxsIT09dGhpcy5wcmVUYXBQb3NpdGlvbi54JiYodGhpcy5pc0RvdWJsZVRhcD10aGlzLmRlbHRhPjAmJnRoaXMuZGVsdGE8PTI1MCYmTWF0aC5hYnModGhpcy5wcmVUYXBQb3NpdGlvbi54LXRoaXMueDEpPDMwJiZNYXRoLmFicyh0aGlzLnByZVRhcFBvc2l0aW9uLnktdGhpcy55MSk8MzAsdGhpcy5pc0RvdWJsZVRhcCYmY2xlYXJUaW1lb3V0KHRoaXMuc2luZ2xlVGFwVGltZW91dCkpLHRoaXMucHJlVGFwUG9zaXRpb24ueD10aGlzLngxLHRoaXMucHJlVGFwUG9zaXRpb24ueT10aGlzLnkxLHRoaXMubGFzdD10aGlzLm5vdzt2YXIgZT10aGlzLnByZVY7aWYodC50b3VjaGVzLmxlbmd0aD4xKXt0aGlzLl9jYW5jZWxMb25nVGFwKCksdGhpcy5fY2FuY2VsU2luZ2xlVGFwKCk7dmFyIGk9e3g6dC50b3VjaGVzWzFdLnBhZ2VYLXRoaXMueDEseTp0LnRvdWNoZXNbMV0ucGFnZVktdGhpcy55MX07ZS54PWkueCxlLnk9aS55LHRoaXMucGluY2hTdGFydExlbj1vKGUpLHRoaXMubXVsdGlwb2ludFN0YXJ0LmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KX10aGlzLl9wcmV2ZW50VGFwPSExLHRoaXMubG9uZ1RhcFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMubG9uZ1RhcC5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCksdGhpcy5fcHJldmVudFRhcD0hMH0uYmluZCh0aGlzKSw3NTApfX19LHtrZXk6XCJtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYodC50b3VjaGVzKXt2YXIgZT10aGlzLnByZVYsaT10LnRvdWNoZXMubGVuZ3RoLG49dC50b3VjaGVzWzBdLnBhZ2VYLHM9dC50b3VjaGVzWzBdLnBhZ2VZO2lmKHRoaXMuaXNEb3VibGVUYXA9ITEsaT4xKXt2YXIgcj10LnRvdWNoZXNbMV0ucGFnZVgsYT10LnRvdWNoZXNbMV0ucGFnZVksYz17eDp0LnRvdWNoZXNbMV0ucGFnZVgtbix5OnQudG91Y2hlc1sxXS5wYWdlWS1zfTtudWxsIT09ZS54JiYodGhpcy5waW5jaFN0YXJ0TGVuPjAmJih0Lnpvb209byhjKS90aGlzLnBpbmNoU3RhcnRMZW4sdGhpcy5waW5jaC5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCkpLHQuYW5nbGU9bChjLGUpLHRoaXMucm90YXRlLmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KSksZS54PWMueCxlLnk9Yy55LG51bGwhPT10aGlzLngyJiZudWxsIT09dGhpcy5zeDI/KHQuZGVsdGFYPShuLXRoaXMueDIrci10aGlzLnN4MikvMix0LmRlbHRhWT0ocy10aGlzLnkyK2EtdGhpcy5zeTIpLzIpOih0LmRlbHRhWD0wLHQuZGVsdGFZPTApLHRoaXMudHdvRmluZ2VyUHJlc3NNb3ZlLmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KSx0aGlzLnN4Mj1yLHRoaXMuc3kyPWF9ZWxzZXtpZihudWxsIT09dGhpcy54Mil7dC5kZWx0YVg9bi10aGlzLngyLHQuZGVsdGFZPXMtdGhpcy55Mjt2YXIgaD1NYXRoLmFicyh0aGlzLngxLXRoaXMueDIpLHU9TWF0aC5hYnModGhpcy55MS10aGlzLnkyKTsoaD4xMHx8dT4xMCkmJih0aGlzLl9wcmV2ZW50VGFwPSEwKX1lbHNlIHQuZGVsdGFYPTAsdC5kZWx0YVk9MDt0aGlzLnByZXNzTW92ZS5kaXNwYXRjaCh0LHRoaXMuZWxlbWVudCl9dGhpcy50b3VjaE1vdmUuZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpLHRoaXMuX2NhbmNlbExvbmdUYXAoKSx0aGlzLngyPW4sdGhpcy55Mj1zLGk+MSYmdC5wcmV2ZW50RGVmYXVsdCgpfX19LHtrZXk6XCJlbmRcIix2YWx1ZTpmdW5jdGlvbih0KXtpZih0LmNoYW5nZWRUb3VjaGVzKXt0aGlzLl9jYW5jZWxMb25nVGFwKCk7dmFyIGU9dGhpczt0LnRvdWNoZXMubGVuZ3RoPDImJih0aGlzLm11bHRpcG9pbnRFbmQuZGlzcGF0Y2godCx0aGlzLmVsZW1lbnQpLHRoaXMuc3gyPXRoaXMuc3kyPW51bGwpLHRoaXMueDImJk1hdGguYWJzKHRoaXMueDEtdGhpcy54Mik+MzB8fHRoaXMueTImJk1hdGguYWJzKHRoaXMueTEtdGhpcy55Mik+MzA/KHQuZGlyZWN0aW9uPXRoaXMuX3N3aXBlRGlyZWN0aW9uKHRoaXMueDEsdGhpcy54Mix0aGlzLnkxLHRoaXMueTIpLHRoaXMuc3dpcGVUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnN3aXBlLmRpc3BhdGNoKHQsZS5lbGVtZW50KX0sMCkpOih0aGlzLnRhcFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2UuX3ByZXZlbnRUYXB8fGUudGFwLmRpc3BhdGNoKHQsZS5lbGVtZW50KSxlLmlzRG91YmxlVGFwJiYoZS5kb3VibGVUYXAuZGlzcGF0Y2godCxlLmVsZW1lbnQpLGUuaXNEb3VibGVUYXA9ITEpfSwwKSxlLmlzRG91YmxlVGFwfHwoZS5zaW5nbGVUYXBUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnNpbmdsZVRhcC5kaXNwYXRjaCh0LGUuZWxlbWVudCl9LDI1MCkpKSx0aGlzLnRvdWNoRW5kLmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KSx0aGlzLnByZVYueD0wLHRoaXMucHJlVi55PTAsdGhpcy56b29tPTEsdGhpcy5waW5jaFN0YXJ0TGVuPW51bGwsdGhpcy54MT10aGlzLngyPXRoaXMueTE9dGhpcy55Mj1udWxsfX19LHtrZXk6XCJjYW5jZWxBbGxcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX3ByZXZlbnRUYXA9ITAsY2xlYXJUaW1lb3V0KHRoaXMuc2luZ2xlVGFwVGltZW91dCksY2xlYXJUaW1lb3V0KHRoaXMudGFwVGltZW91dCksY2xlYXJUaW1lb3V0KHRoaXMubG9uZ1RhcFRpbWVvdXQpLGNsZWFyVGltZW91dCh0aGlzLnN3aXBlVGltZW91dCl9fSx7a2V5OlwiY2FuY2VsXCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5jYW5jZWxBbGwoKSx0aGlzLnRvdWNoQ2FuY2VsLmRpc3BhdGNoKHQsdGhpcy5lbGVtZW50KX19LHtrZXk6XCJfY2FuY2VsTG9uZ1RhcFwiLHZhbHVlOmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMubG9uZ1RhcFRpbWVvdXQpfX0se2tleTpcIl9jYW5jZWxTaW5nbGVUYXBcIix2YWx1ZTpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnNpbmdsZVRhcFRpbWVvdXQpfX0se2tleTpcIl9zd2lwZURpcmVjdGlvblwiLHZhbHVlOmZ1bmN0aW9uKHQsZSxpLG4pe3JldHVybiBNYXRoLmFicyh0LWUpPj1NYXRoLmFicyhpLW4pP3QtZT4wP1wiTGVmdFwiOlwiUmlnaHRcIjppLW4+MD9cIlVwXCI6XCJEb3duXCJ9fSx7a2V5Olwib25cIix2YWx1ZTpmdW5jdGlvbih0LGUpe3RoaXNbdF0mJnRoaXNbdF0uYWRkKGUpfX0se2tleTpcIm9mZlwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dGhpc1t0XSYmdGhpc1t0XS5kZWwoZSl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2luZ2xlVGFwVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMuc2luZ2xlVGFwVGltZW91dCksdGhpcy50YXBUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy50YXBUaW1lb3V0KSx0aGlzLmxvbmdUYXBUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy5sb25nVGFwVGltZW91dCksdGhpcy5zd2lwZVRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLnN3aXBlVGltZW91dCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5zdGFydCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLm1vdmUpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLmVuZCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLHRoaXMuY2FuY2VsKSx0aGlzLnJvdGF0ZS5kZWwoKSx0aGlzLnRvdWNoU3RhcnQuZGVsKCksdGhpcy5tdWx0aXBvaW50U3RhcnQuZGVsKCksdGhpcy5tdWx0aXBvaW50RW5kLmRlbCgpLHRoaXMucGluY2guZGVsKCksdGhpcy5zd2lwZS5kZWwoKSx0aGlzLnRhcC5kZWwoKSx0aGlzLmRvdWJsZVRhcC5kZWwoKSx0aGlzLmxvbmdUYXAuZGVsKCksdGhpcy5zaW5nbGVUYXAuZGVsKCksdGhpcy5wcmVzc01vdmUuZGVsKCksdGhpcy50d29GaW5nZXJQcmVzc01vdmUuZGVsKCksdGhpcy50b3VjaE1vdmUuZGVsKCksdGhpcy50b3VjaEVuZC5kZWwoKSx0aGlzLnRvdWNoQ2FuY2VsLmRlbCgpLHRoaXMucHJlVj10aGlzLnBpbmNoU3RhcnRMZW49dGhpcy56b29tPXRoaXMuaXNEb3VibGVUYXA9dGhpcy5kZWx0YT10aGlzLmxhc3Q9dGhpcy5ub3c9dGhpcy50YXBUaW1lb3V0PXRoaXMuc2luZ2xlVGFwVGltZW91dD10aGlzLmxvbmdUYXBUaW1lb3V0PXRoaXMuc3dpcGVUaW1lb3V0PXRoaXMueDE9dGhpcy54Mj10aGlzLnkxPXRoaXMueTI9dGhpcy5wcmVUYXBQb3NpdGlvbj10aGlzLnJvdGF0ZT10aGlzLnRvdWNoU3RhcnQ9dGhpcy5tdWx0aXBvaW50U3RhcnQ9dGhpcy5tdWx0aXBvaW50RW5kPXRoaXMucGluY2g9dGhpcy5zd2lwZT10aGlzLnRhcD10aGlzLmRvdWJsZVRhcD10aGlzLmxvbmdUYXA9dGhpcy5zaW5nbGVUYXA9dGhpcy5wcmVzc01vdmU9dGhpcy50b3VjaE1vdmU9dGhpcy50b3VjaEVuZD10aGlzLnRvdWNoQ2FuY2VsPXRoaXMudHdvRmluZ2VyUHJlc3NNb3ZlPW51bGwsd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLl9jYW5jZWxBbGxIYW5kbGVyKSxudWxsfX1dKSx0fSgpLGg9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGksbil7dmFyIHM9dGhpcyxvPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO2lmKGUodGhpcyx0KSx0aGlzLmltZz1pLHRoaXMuc2xpZGU9bix0aGlzLm9uY2xvc2U9byx0aGlzLmltZy5zZXRab29tRXZlbnRzKXJldHVybiExO3RoaXMuYWN0aXZlPSExLHRoaXMuem9vbWVkSW49ITEsdGhpcy5kcmFnZ2luZz0hMSx0aGlzLmN1cnJlbnRYPW51bGwsdGhpcy5jdXJyZW50WT1udWxsLHRoaXMuaW5pdGlhbFg9bnVsbCx0aGlzLmluaXRpYWxZPW51bGwsdGhpcy54T2Zmc2V0PTAsdGhpcy55T2Zmc2V0PTAsdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKHQpe3JldHVybiBzLmRyYWdTdGFydCh0KX0sITEpLHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsZnVuY3Rpb24odCl7cmV0dXJuIHMuZHJhZ0VuZCh0KX0sITEpLHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixmdW5jdGlvbih0KXtyZXR1cm4gcy5kcmFnKHQpfSwhMSksdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24odCl7aWYoIXMuem9vbWVkSW4pcmV0dXJuIHMuem9vbUluKCk7cy56b29tZWRJbiYmIXMuZHJhZ2dpbmcmJnMuem9vbU91dCgpfSwhMSksdGhpcy5pbWcuc2V0Wm9vbUV2ZW50cz0hMH1yZXR1cm4gbih0LFt7a2V5Olwiem9vbUluXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLndpZG93V2lkdGgoKTtpZighKHRoaXMuem9vbWVkSW58fHQ8PTc2OCkpe3ZhciBlPXRoaXMuaW1nO2lmKGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZVwiLGUuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikpLGUuc3R5bGUubWF4V2lkdGg9ZS5uYXR1cmFsV2lkdGgrXCJweFwiLGUuc3R5bGUubWF4SGVpZ2h0PWUubmF0dXJhbEhlaWdodCtcInB4XCIsZS5uYXR1cmFsV2lkdGg+dCl7dmFyIGk9dC8yLWUubmF0dXJhbFdpZHRoLzI7dGhpcy5zZXRUcmFuc2xhdGUodGhpcy5pbWcucGFyZW50Tm9kZSxpLDApfXRoaXMuc2xpZGUuY2xhc3NMaXN0LmFkZChcInpvb21lZFwiKSx0aGlzLnpvb21lZEluPSEwfX19LHtrZXk6XCJ6b29tT3V0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmltZy5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJcIiksdGhpcy5pbWcuc2V0QXR0cmlidXRlKFwic3R5bGVcIix0aGlzLmltZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlXCIpKSx0aGlzLnNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJ6b29tZWRcIiksdGhpcy56b29tZWRJbj0hMSx0aGlzLmN1cnJlbnRYPW51bGwsdGhpcy5jdXJyZW50WT1udWxsLHRoaXMuaW5pdGlhbFg9bnVsbCx0aGlzLmluaXRpYWxZPW51bGwsdGhpcy54T2Zmc2V0PTAsdGhpcy55T2Zmc2V0PTAsdGhpcy5vbmNsb3NlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9uY2xvc2UmJnRoaXMub25jbG9zZSgpfX0se2tleTpcImRyYWdTdGFydFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSx0aGlzLnpvb21lZEluPyhcInRvdWNoc3RhcnRcIj09PXQudHlwZT8odGhpcy5pbml0aWFsWD10LnRvdWNoZXNbMF0uY2xpZW50WC10aGlzLnhPZmZzZXQsdGhpcy5pbml0aWFsWT10LnRvdWNoZXNbMF0uY2xpZW50WS10aGlzLnlPZmZzZXQpOih0aGlzLmluaXRpYWxYPXQuY2xpZW50WC10aGlzLnhPZmZzZXQsdGhpcy5pbml0aWFsWT10LmNsaWVudFktdGhpcy55T2Zmc2V0KSx0LnRhcmdldD09PXRoaXMuaW1nJiYodGhpcy5hY3RpdmU9ITAsdGhpcy5pbWcuY2xhc3NMaXN0LmFkZChcImRyYWdnaW5nXCIpKSk6dGhpcy5hY3RpdmU9ITF9fSx7a2V5OlwiZHJhZ0VuZFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7dC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuaW5pdGlhbFg9dGhpcy5jdXJyZW50WCx0aGlzLmluaXRpYWxZPXRoaXMuY3VycmVudFksdGhpcy5hY3RpdmU9ITEsc2V0VGltZW91dChmdW5jdGlvbigpe2UuZHJhZ2dpbmc9ITEsZS5pbWcuaXNEcmFnZ2luZz0hMSxlLmltZy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIil9LDEwMCl9fSx7a2V5OlwiZHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuYWN0aXZlJiYodC5wcmV2ZW50RGVmYXVsdCgpLFwidG91Y2htb3ZlXCI9PT10LnR5cGU/KHRoaXMuY3VycmVudFg9dC50b3VjaGVzWzBdLmNsaWVudFgtdGhpcy5pbml0aWFsWCx0aGlzLmN1cnJlbnRZPXQudG91Y2hlc1swXS5jbGllbnRZLXRoaXMuaW5pdGlhbFkpOih0aGlzLmN1cnJlbnRYPXQuY2xpZW50WC10aGlzLmluaXRpYWxYLHRoaXMuY3VycmVudFk9dC5jbGllbnRZLXRoaXMuaW5pdGlhbFkpLHRoaXMueE9mZnNldD10aGlzLmN1cnJlbnRYLHRoaXMueU9mZnNldD10aGlzLmN1cnJlbnRZLHRoaXMuaW1nLmlzRHJhZ2dpbmc9ITAsdGhpcy5kcmFnZ2luZz0hMCx0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLmltZyx0aGlzLmN1cnJlbnRYLHRoaXMuY3VycmVudFkpKX19LHtrZXk6XCJvbk1vdmVcIix2YWx1ZTpmdW5jdGlvbih0KXtpZih0aGlzLnpvb21lZEluKXt2YXIgZT10LmNsaWVudFgtdGhpcy5pbWcubmF0dXJhbFdpZHRoLzIsaT10LmNsaWVudFktdGhpcy5pbWcubmF0dXJhbEhlaWdodC8yO3RoaXMuc2V0VHJhbnNsYXRlKHRoaXMuaW1nLGUsaSl9fX0se2tleTpcInNldFRyYW5zbGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSxpKXt0LnN0eWxlLnRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK2UrXCJweCwgXCIraStcInB4LCAwKVwifX0se2tleTpcIndpZG93V2lkdGhcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB3aW5kb3cuaW5uZXJXaWR0aHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRofHxkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRofX1dKSx0fSgpLHU9bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWQpfChpUGhvbmUpfChpUG9kKXwoQW5kcm9pZCl8KFBsYXlCb29rKXwoQkIxMCl8KEJsYWNrQmVycnkpfChPcGVyYSBNaW5pKXwoSUVNb2JpbGUpfCh3ZWJPUyl8KE1lZUdvKS9pKSxkPW51bGwhPT11fHx2b2lkIDAhPT1kb2N1bWVudC5jcmVhdGVUb3VjaHx8XCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8XCJvbm1zZ2VzdHVyZWNoYW5nZVwiaW4gd2luZG93fHxuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyxnPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXSxwPWZ1bmN0aW9uKCl7dmFyIHQsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmFrZWVsZW1lbnRcIiksaT17dHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIixPVHJhbnNpdGlvbjpcIm9UcmFuc2l0aW9uRW5kXCIsTW96VHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIixXZWJraXRUcmFuc2l0aW9uOlwid2Via2l0VHJhbnNpdGlvbkVuZFwifTtmb3IodCBpbiBpKWlmKHZvaWQgMCE9PWUuc3R5bGVbdF0pcmV0dXJuIGlbdF19KCksdj1mdW5jdGlvbigpe3ZhciB0LGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZha2VlbGVtZW50XCIpLGk9e2FuaW1hdGlvbjpcImFuaW1hdGlvbmVuZFwiLE9BbmltYXRpb246XCJvQW5pbWF0aW9uRW5kXCIsTW96QW5pbWF0aW9uOlwiYW5pbWF0aW9uZW5kXCIsV2Via2l0QW5pbWF0aW9uOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2Zvcih0IGluIGkpaWYodm9pZCAwIT09ZS5zdHlsZVt0XSlyZXR1cm4gaVt0XX0oKSxmPURhdGUubm93KCksbT17fSx5PXtzZWxlY3RvcjpcImdsaWdodGJveFwiLGVsZW1lbnRzOm51bGwsc2tpbjpcImNsZWFuXCIsY2xvc2VCdXR0b246ITAsc3RhcnRBdDpudWxsLGF1dG9wbGF5VmlkZW9zOiEwLGRlc2NQb3NpdGlvbjpcImJvdHRvbVwiLHdpZHRoOjkwMCxoZWlnaHQ6NTA2LHZpZGVvc1dpZHRoOjk2MCxiZWZvcmVTbGlkZUNoYW5nZTpudWxsLGFmdGVyU2xpZGVDaGFuZ2U6bnVsbCxiZWZvcmVTbGlkZUxvYWQ6bnVsbCxhZnRlclNsaWRlTG9hZDpudWxsLG9uT3BlbjpudWxsLG9uQ2xvc2U6bnVsbCxsb29wQXRFbmQ6ITEsdG91Y2hOYXZpZ2F0aW9uOiEwLGtleWJvYXJkTmF2aWdhdGlvbjohMCxjbG9zZU9uT3V0c2lkZUNsaWNrOiEwLHBseXI6e2NzczpcImh0dHBzOi8vY2RuLnBseXIuaW8vMy41LjYvcGx5ci5jc3NcIixqczpcImh0dHBzOi8vY2RuLnBseXIuaW8vMy41LjYvcGx5ci5qc1wiLHJhdGlvOlwiMTY6OVwiLGNvbmZpZzp7eW91dHViZTp7bm9Db29raWU6ITAscmVsOjAsc2hvd2luZm86MCxpdl9sb2FkX3BvbGljeTozfSx2aW1lbzp7YnlsaW5lOiExLHBvcnRyYWl0OiExLHRpdGxlOiExLHRyYW5zcGFyZW50OiExfX19LG9wZW5FZmZlY3Q6XCJ6b29tSW5cIixjbG9zZUVmZmVjdDpcInpvb21PdXRcIixzbGlkZUVmZmVjdDpcInNsaWRlXCIsbW9yZVRleHQ6XCJTZWUgbW9yZVwiLG1vcmVMZW5ndGg6NjAsbGlnaHRib3hIdG1sOlwiXCIsY3NzRWZlY3RzOntmYWRlOntpbjpcImZhZGVJblwiLG91dDpcImZhZGVPdXRcIn0sem9vbTp7aW46XCJ6b29tSW5cIixvdXQ6XCJ6b29tT3V0XCJ9LHNsaWRlOntpbjpcInNsaWRlSW5SaWdodFwiLG91dDpcInNsaWRlT3V0TGVmdFwifSxzbGlkZV9iYWNrOntpbjpcInNsaWRlSW5MZWZ0XCIsb3V0Olwic2xpZGVPdXRSaWdodFwifX0sc3ZnOntjbG9zZTonPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48Zz48cGF0aCBkPVwiTTUwNS45NDMsNi4wNThjLTguMDc3LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDksMEw2LjA1OCw0NzYuNjkzYy04LjA3Nyw4LjA3Ny04LjA3NywyMS4xNzIsMCwyOS4yNDlDMTAuMDk2LDUwOS45ODIsMTUuMzksNTEyLDIwLjY4Myw1MTJjNS4yOTMsMCwxMC41ODYtMi4wMTksMTQuNjI1LTYuMDU5TDUwNS45NDMsMzUuMzA2QzUxNC4wMTksMjcuMjMsNTE0LjAxOSwxNC4xMzUsNTA1Ljk0Myw2LjA1OHpcIi8+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVwiTTUwNS45NDIsNDc2LjY5NEwzNS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNmM0LjAzOCw0LjAzOSw5LjMzMiw2LjA1OCwxNC42MjUsNi4wNThjNS4yOTMsMCwxMC41ODctMi4wMTksMTQuNjI0LTYuMDU3QzUxNC4wMTgsNDk3Ljg2Niw1MTQuMDE4LDQ4NC43NzEsNTA1Ljk0Miw0NzYuNjk0elwiLz48L2c+PC9nPjwvc3ZnPicsbmV4dDonPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDQ3Ny4xNzUgNDc3LjE3NVwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+IDxnPjxwYXRoIGQ9XCJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjVjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXpcIi8+PC9nPjwvc3ZnPicscHJldjonPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDQ3Ny4xNzUgNDc3LjE3NVwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGc+PHBhdGggZD1cIk0xNDUuMTg4LDIzOC41NzVsMjE1LjUtMjE1LjVjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFzLTEzLjgtNS4zLTE5LjEsMGwtMjI1LjEsMjI1LjFjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xbDIyNS4xLDIyNWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFMMTQ1LjE4OCwyMzguNTc1elwiLz48L2c+PC9zdmc+J319O3kuc2xpZGVIdG1sPSc8ZGl2IGNsYXNzPVwiZ3NsaWRlXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJnc2xpZGUtaW5uZXItY29udGVudFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImdpbm5lci1jb250YWluZXJcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3NsaWRlLW1lZGlhXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdzbGlkZS1kZXNjcmlwdGlvblwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2Rlc2MtaW5uZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImdzbGlkZS10aXRsZVwiPjwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3NsaWRlLWRlc2NcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+JztmdW5jdGlvbiBiKCl7dmFyIHQ9e30sZT0hMSxpPTAsbj1hcmd1bWVudHMubGVuZ3RoO1wiW29iamVjdCBCb29sZWFuXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50c1swXSkmJihlPWFyZ3VtZW50c1swXSxpKyspO2Zvcih2YXIgcz1mdW5jdGlvbihpKXtmb3IodmFyIG4gaW4gaSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaSxuKSYmKGUmJlwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaVtuXSk/dFtuXT1iKCEwLHRbbl0saVtuXSk6dFtuXT1pW25dKX07aTxuO2krKyl7cyhhcmd1bWVudHNbaV0pfXJldHVybiB0fXkubGlnaHRib3hIdG1sPSc8ZGl2IGlkPVwiZ2xpZ2h0Ym94LWJvZHlcIiBjbGFzcz1cImdsaWdodGJveC1jb250YWluZXJcIj5cXG4gICAgPGRpdiBjbGFzcz1cImdsb2FkZXIgdmlzaWJsZVwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiZ292ZXJsYXlcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cImdjb250YWluZXJcIj5cXG4gICAgPGRpdiBpZD1cImdsaWdodGJveC1zbGlkZXJcIiBjbGFzcz1cImdzbGlkZXJcIj48L2Rpdj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cImduZXh0IGdidG5cIiB0YWJpbmRleD1cIjBcIj57bmV4dFNWR308L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cImdwcmV2IGdidG5cIiB0YWJpbmRleD1cIjFcIj57cHJldlNWR308L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cImdjbG9zZSBnYnRuXCIgdGFiaW5kZXg9XCIyXCI+e2Nsb3NlU1ZHfTwvYnV0dG9uPlxcbjwvZGl2PlxcbjwvZGl2Pic7dmFyIHg9e2lzRnVuY3Rpb246ZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH0saXNTdHJpbmc6ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR9LGlzTm9kZTpmdW5jdGlvbih0KXtyZXR1cm4hKCF0fHwhdC5ub2RlVHlwZXx8MSE9dC5ub2RlVHlwZSl9LGlzQXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCl9LGlzQXJyYXlMaWtlOmZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aCYmaXNGaW5pdGUodC5sZW5ndGgpfSxpc09iamVjdDpmdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT09dChlKSYmbnVsbCE9ZSYmIXguaXNGdW5jdGlvbihlKSYmIXguaXNBcnJheShlKX0saXNOaWw6ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXR9LGhhczpmdW5jdGlvbih0LGUpe3JldHVybiBudWxsIT09dCYmaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxzaXplOmZ1bmN0aW9uKHQpe2lmKHguaXNPYmplY3QodCkpe2lmKHQua2V5cylyZXR1cm4gdC5rZXlzKCkubGVuZ3RoO3ZhciBlPTA7Zm9yKHZhciBpIGluIHQpeC5oYXModCxpKSYmZSsrO3JldHVybiBlfXJldHVybiB0Lmxlbmd0aH0saXNOdW1iZXI6ZnVuY3Rpb24odCl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQodCkpJiZpc0Zpbml0ZSh0KX19O2Z1bmN0aW9uIHcodCxlKXtpZigoeC5pc05vZGUodCl8fHQ9PT13aW5kb3d8fHQ9PT1kb2N1bWVudCkmJih0PVt0XSkseC5pc0FycmF5TGlrZSh0KXx8eC5pc09iamVjdCh0KXx8KHQ9W3RdKSwwIT14LnNpemUodCkpaWYoeC5pc0FycmF5TGlrZSh0KSYmIXguaXNPYmplY3QodCkpZm9yKHZhciBpPXQubGVuZ3RoLG49MDtuPGkmJiExIT09ZS5jYWxsKHRbbl0sdFtuXSxuLHQpO24rKyk7ZWxzZSBpZih4LmlzT2JqZWN0KHQpKWZvcih2YXIgcyBpbiB0KWlmKHguaGFzKHQscykmJiExPT09ZS5jYWxsKHRbc10sdFtzXSxzLHQpKWJyZWFrfWZ1bmN0aW9uIFModCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm51bGwsaT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbCxuPXRbZl09dFtmXXx8W10scz17YWxsOm4sZXZ0Om51bGwsZm91bmQ6bnVsbH07cmV0dXJuIGUmJmkmJnguc2l6ZShuKT4wJiZ3KG4sZnVuY3Rpb24odCxuKXtpZih0LmV2ZW50TmFtZT09ZSYmdC5mbi50b1N0cmluZygpPT1pLnRvU3RyaW5nKCkpcmV0dXJuIHMuZm91bmQ9ITAscy5ldnQ9biwhMX0pLHN9ZnVuY3Rpb24gVCh0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30saT1lLm9uRWxlbWVudCxuPWUud2l0aENhbGxiYWNrLHM9ZS5hdm9pZER1cGxpY2F0ZSxvPXZvaWQgMD09PXN8fHMsbD1lLm9uY2Uscj12b2lkIDAhPT1sJiZsLGE9ZS51c2VDYXB0dXJlLGM9dm9pZCAwIT09YSYmYSxoPWFyZ3VtZW50cy5sZW5ndGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwLHU9aXx8W107ZnVuY3Rpb24gZCh0KXt4LmlzRnVuY3Rpb24obikmJm4uY2FsbChoLHQsdGhpcyksciYmZC5kZXN0cm95KCl9cmV0dXJuIHguaXNTdHJpbmcodSkmJih1PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodSkpLGQuZGVzdHJveT1mdW5jdGlvbigpe3codSxmdW5jdGlvbihlKXt2YXIgaT1TKGUsdCxkKTtpLmZvdW5kJiZpLmFsbC5zcGxpY2UoaS5ldnQsMSksZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxkLGMpfSl9LHcodSxmdW5jdGlvbihlKXt2YXIgaT1TKGUsdCxkKTsoZS5hZGRFdmVudExpc3RlbmVyJiZvJiYhaS5mb3VuZHx8IW8pJiYoZS5hZGRFdmVudExpc3RlbmVyKHQsZCxjKSxpLmFsbC5wdXNoKHtldmVudE5hbWU6dCxmbjpkfSkpfSksZH1mdW5jdGlvbiBrKHQsZSl7dyhlLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlKXtyZXR1cm4gdC5jbGFzc0xpc3QuYWRkKGUpfSl9ZnVuY3Rpb24gRSh0LGUpe3coZS5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2xhc3NMaXN0LnJlbW92ZShlKX0pfWZ1bmN0aW9uIEEodCxlKXtyZXR1cm4gdC5jbGFzc0xpc3QuY29udGFpbnMoZSl9ZnVuY3Rpb24gQyh0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06XCJcIixpPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl07aWYoIXR8fFwiXCI9PT1lKXJldHVybiExO2lmKFwibm9uZVwiPT1lKXJldHVybiB4LmlzRnVuY3Rpb24oaSkmJmkoKSwhMTt2YXIgbj1lLnNwbGl0KFwiIFwiKTt3KG4sZnVuY3Rpb24oZSl7ayh0LFwiZ1wiK2UpfSksVCh2LHtvbkVsZW1lbnQ6dCxhdm9pZER1cGxpY2F0ZTohMSxvbmNlOiEwLHdpdGhDYWxsYmFjazpmdW5jdGlvbih0LGUpe3cobixmdW5jdGlvbih0KXtFKGUsXCJnXCIrdCl9KSx4LmlzRnVuY3Rpb24oaSkmJmkoKX19KX1mdW5jdGlvbiBMKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKGkuaW5uZXJIVE1MPXQ7aS5maXJzdENoaWxkOyllLmFwcGVuZENoaWxkKGkuZmlyc3RDaGlsZCk7cmV0dXJuIGV9ZnVuY3Rpb24gTSh0LGUpe2Zvcig7dCE9PWRvY3VtZW50LmJvZHk7KXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZih0PXQucGFyZW50RWxlbWVudCkubWF0Y2hlcz90Lm1hdGNoZXMoZSk6dC5tc01hdGNoZXNTZWxlY3RvcihlKSlyZXR1cm4gdH19ZnVuY3Rpb24gTyh0KXt0LnN0eWxlLmRpc3BsYXk9XCJibG9ja1wifWZ1bmN0aW9uIHoodCl7dC5zdHlsZS5kaXNwbGF5PVwibm9uZVwifWZ1bmN0aW9uIHEoKXtyZXR1cm57d2lkdGg6d2luZG93LmlubmVyV2lkdGh8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aHx8ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxoZWlnaHQ6d2luZG93LmlubmVySGVpZ2h0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0fHxkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodH19ZnVuY3Rpb24gTih0KXtpZihBKHQudGFyZ2V0LFwicGx5ci0taHRtbDVcIikpe3ZhciBlPU0odC50YXJnZXQsXCIuZ3NsaWRlLW1lZGlhXCIpO1wiZW50ZXJmdWxsc2NyZWVuXCI9PXQudHlwZSYmayhlLFwiZnVsbHNjcmVlblwiKSxcImV4aXRmdWxsc2NyZWVuXCI9PXQudHlwZSYmRShlLFwiZnVsbHNjcmVlblwiKX19dmFyIEk9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbCxlPWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLGk9e2hyZWY6XCJcIix0aXRsZTpcIlwiLHR5cGU6XCJcIixkZXNjcmlwdGlvbjpcIlwiLGRlc2NQb3NpdGlvbjplLmRlc2NQb3NpdGlvbixlZmZlY3Q6XCJcIix3aWR0aDpcIlwiLGhlaWdodDpcIlwiLG5vZGU6dH07aWYoeC5pc09iamVjdCh0KSYmIXguaXNOb2RlKHQpKXJldHVybiBiKGksdCk7dmFyIG49XCJcIixzPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1nbGlnaHRib3hcIiksbz10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYoXCJhXCI9PT1vJiYobj10LmhyZWYpLFwiaW1nXCI9PT1vJiYobj10LnNyYyksaS5ocmVmPW4sdyhpLGZ1bmN0aW9uKG4scyl7eC5oYXMoZSxzKSYmXCJ3aWR0aFwiIT09cyYmKGlbc109ZVtzXSk7dmFyIG89dC5kYXRhc2V0W3NdO3guaXNOaWwobyl8fChpW3NdPW8pfSksaS50eXBlfHwoaS50eXBlPVcobikpLHguaXNOaWwocykpe2lmKFwiYVwiPT1vKXt2YXIgbD10LnRpdGxlO3guaXNOaWwobCl8fFwiXCI9PT1sfHwoaS50aXRsZT1sKX1pZihcImltZ1wiPT1vKXt2YXIgcj10LmFsdDt4LmlzTmlsKHIpfHxcIlwiPT09cnx8KGkudGl0bGU9cil9dmFyIGE9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlc2NyaXB0aW9uXCIpO3guaXNOaWwoYSl8fFwiXCI9PT1hfHwoaS5kZXNjcmlwdGlvbj1hKX1lbHNle3ZhciBjPVtdO3coaSxmdW5jdGlvbih0LGUpe2MucHVzaChcIjtcXFxccz9cIitlKX0pLGM9Yy5qb2luKFwiXFxcXHM/OnxcIiksXCJcIiE9PXMudHJpbSgpJiZ3KGksZnVuY3Rpb24odCxlKXt2YXIgbj1zLG89bmV3IFJlZ0V4cChcInM/XCIrZStcInM/OnM/KC4qPykoXCIrYytcInM/OnwkKVwiKSxsPW4ubWF0Y2gobyk7aWYobCYmbC5sZW5ndGgmJmxbMV0pe3ZhciByPWxbMV0udHJpbSgpLnJlcGxhY2UoLztcXHMqJC8sXCJcIik7aVtlXT1yfX0pfWlmKGkuZGVzY3JpcHRpb24mJlwiLlwiPT1pLmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLDEpJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGkuZGVzY3JpcHRpb24pKWkuZGVzY3JpcHRpb249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpLmRlc2NyaXB0aW9uKS5pbm5lckhUTUw7ZWxzZXt2YXIgaD10LnF1ZXJ5U2VsZWN0b3IoXCIuZ2xpZ2h0Ym94LWRlc2NcIik7aCYmKGkuZGVzY3JpcHRpb249aC5pbm5lckhUTUwpfXZhciB1PVwidmlkZW9cIj09aS50eXBlP2UudmlkZW9zV2lkdGg6ZS53aWR0aCxkPWUuaGVpZ2h0O3JldHVybiBpLndpZHRoPXguaGFzKGksXCJ3aWR0aFwiKSYmXCJcIiE9PWkud2lkdGg/aS53aWR0aDp1LGkuaGVpZ2h0PXguaGFzKGksXCJoZWlnaHRcIikmJlwiXCIhPT1pLmhlaWdodD9pLmhlaWdodDpkLGl9LEQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGwsaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO2lmKEEoZSxcImxvYWRlZFwiKSlyZXR1cm4hMTt4LmlzRnVuY3Rpb24odGhpcy5zZXR0aW5ncy5iZWZvcmVTbGlkZUxvYWQpJiZ0aGlzLnNldHRpbmdzLmJlZm9yZVNsaWRlTG9hZChlLGkpO3ZhciBzPWkudHlwZSxvPWkuZGVzY1Bvc2l0aW9uLGw9ZS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxyPWUucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtdGl0bGVcIiksYT1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWRlc2NcIiksYz1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ2Rlc2MtaW5uZXJcIiksZD1uO2lmKHguaXNGdW5jdGlvbih0aGlzLnNldHRpbmdzLmFmdGVyU2xpZGVMb2FkKSYmKGQ9ZnVuY3Rpb24oKXt4LmlzRnVuY3Rpb24obikmJm4oKSx0LnNldHRpbmdzLmFmdGVyU2xpZGVMb2FkKGUsaSl9KSxcIlwiPT1pLnRpdGxlJiZcIlwiPT1pLmRlc2NyaXB0aW9uP2MmJmMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMucGFyZW50Tm9kZSk6KHImJlwiXCIhPT1pLnRpdGxlP3IuaW5uZXJIVE1MPWkudGl0bGU6ci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpLGEmJlwiXCIhPT1pLmRlc2NyaXB0aW9uP3UmJnRoaXMuc2V0dGluZ3MubW9yZUxlbmd0aD4wPyhpLnNtYWxsRGVzY3JpcHRpb249RyhpLmRlc2NyaXB0aW9uLHRoaXMuc2V0dGluZ3MubW9yZUxlbmd0aCx0aGlzLnNldHRpbmdzLm1vcmVUZXh0KSxhLmlubmVySFRNTD1pLnNtYWxsRGVzY3JpcHRpb24sWi5hcHBseSh0aGlzLFthLGldKSk6YS5pbm5lckhUTUw9aS5kZXNjcmlwdGlvbjphLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSksayhsLnBhcmVudE5vZGUsXCJkZXNjLVwiLmNvbmNhdChvKSksayhjLnBhcmVudE5vZGUsXCJkZXNjcmlwdGlvbi1cIi5jb25jYXQobykpKSxrKGwsXCJnc2xpZGUtXCIuY29uY2F0KHMpKSxrKGUsXCJsb2FkZWRcIiksXCJ2aWRlb1wiPT09cylyZXR1cm4gayhsLnBhcmVudE5vZGUsXCJndmlkZW8tY29udGFpbmVyXCIpLGwuaW5zZXJ0QmVmb3JlKEwoJzxkaXYgY2xhc3M9XCJndmlkZW8td3JhcHBlclwiPjwvZGl2PicpLGwuZmlyc3RDaGlsZCksdm9pZCBYLmFwcGx5KHRoaXMsW2UsaSxkXSk7aWYoXCJleHRlcm5hbFwiPT09cyl7dmFyIGc9WSh7dXJsOmkuaHJlZix3aWR0aDppLndpZHRoLGhlaWdodDppLmhlaWdodCxjYWxsYmFjazpkfSk7cmV0dXJuIGwucGFyZW50Tm9kZS5zdHlsZS5tYXhXaWR0aD1cIlwiLmNvbmNhdChpLndpZHRoLFwicHhcIiksdm9pZCBsLmFwcGVuZENoaWxkKGcpfWlmKFwiaW5saW5lXCIhPT1zKXtpZihcImltYWdlXCI9PT1zKXt2YXIgcD1uZXcgSW1hZ2U7cmV0dXJuIHAuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpeyF1JiZwLm5hdHVyYWxXaWR0aD5wLm9mZnNldFdpZHRoJiYoayhwLFwiem9vbWFibGVcIiksbmV3IGgocCxlLGZ1bmN0aW9uKCl7dC5yZXNpemUoZSl9KSkseC5pc0Z1bmN0aW9uKGQpJiZkKCl9LCExKSxwLnNyYz1pLmhyZWYsdm9pZCBsLmluc2VydEJlZm9yZShwLGwuZmlyc3RDaGlsZCl9eC5pc0Z1bmN0aW9uKGQpJiZkKCl9ZWxzZSBGLmFwcGx5KHRoaXMsW2UsaSxkXSl9O2Z1bmN0aW9uIFgodCxlLGkpe3ZhciBuPXRoaXMscz1cImd2aWRlb1wiK2UuaW5kZXgsbz10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3ZpZGVvLXdyYXBwZXJcIik7Qih0aGlzLnNldHRpbmdzLnBseXIuY3NzKTt2YXIgbD1lLmhyZWYscj1sb2NhdGlvbi5wcm90b2NvbC5yZXBsYWNlKFwiOlwiLFwiXCIpLGE9XCJcIixjPVwiXCIsaD0hMTtcImZpbGVcIj09ciYmKHI9XCJodHRwXCIpLG8ucGFyZW50Tm9kZS5zdHlsZS5tYXhXaWR0aD1cIlwiLmNvbmNhdChlLndpZHRoLFwicHhcIiksQih0aGlzLnNldHRpbmdzLnBseXIuanMsXCJQbHlyXCIsZnVuY3Rpb24oKXtpZihsLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhbMC05XSopLykpe3ZhciB0PS92aW1lby4qXFwvKFxcZCspL2kuZXhlYyhsKTthPVwidmltZW9cIixjPXRbMV19aWYobC5tYXRjaCgvKHlvdXR1YmVcXC5jb218eW91dHViZS1ub2Nvb2tpZVxcLmNvbSlcXC93YXRjaFxcP3Y9KFthLXpBLVowLTlcXC1fXSspLyl8fGwubWF0Y2goL3lvdXR1XFwuYmVcXC8oW2EtekEtWjAtOVxcLV9dKykvKXx8bC5tYXRjaCgvKHlvdXR1YmVcXC5jb218eW91dHViZS1ub2Nvb2tpZVxcLmNvbSlcXC9lbWJlZFxcLyhbYS16QS1aMC05XFwtX10rKS8pKXt2YXIgcj1mdW5jdGlvbih0KXt2YXIgZT1cIlwiO2U9dm9pZCAwIT09KHQ9dC5yZXBsYWNlKC8oPnw8KS9naSxcIlwiKS5zcGxpdCgvKHZpXFwvfHY9fFxcL3ZcXC98eW91dHVcXC5iZVxcL3xcXC9lbWJlZFxcLykvKSlbMl0/KGU9dFsyXS5zcGxpdCgvW14wLTlhLXpfXFwtXS9pKSlbMF06dDtyZXR1cm4gZX0obCk7YT1cInlvdXR1YmVcIixjPXJ9aWYobnVsbCE9PWwubWF0Y2goL1xcLihtcDR8b2dnfHdlYm0pJC8pKXthPVwibG9jYWxcIjt2YXIgdT0nPHZpZGVvIGlkPVwiJytzKydcIiAnO3UrPSdzdHlsZT1cImJhY2tncm91bmQ6IzAwMDsgbWF4LXdpZHRoOiAnLmNvbmNhdChlLndpZHRoLCdweDtcIiAnKSx1Kz0ncHJlbG9hZD1cIm1ldGFkYXRhXCIgJyx1Kz0neC13ZWJraXQtYWlycGxheT1cImFsbG93XCIgJyx1Kz0nd2Via2l0LXBsYXlzaW5saW5lPVwiXCIgJyx1Kz1cImNvbnRyb2xzIFwiLHUrPSdjbGFzcz1cImd2aWRlby1sb2NhbFwiPic7dmFyIGQ9bC50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiLlwiKS5wb3AoKSxnPXttcDQ6XCJcIixvZ2c6XCJcIix3ZWJtOlwiXCJ9O2Zvcih2YXIgcCBpbiBnW2RdPWwsZylpZihnLmhhc093blByb3BlcnR5KHApKXt2YXIgdj1nW3BdO2UuaGFzT3duUHJvcGVydHkocCkmJih2PWVbcF0pLFwiXCIhPT12JiYodSs9Jzxzb3VyY2Ugc3JjPVwiJy5jb25jYXQodiwnXCIgdHlwZT1cInZpZGVvLycpLmNvbmNhdChwLCdcIj4nKSl9aD1MKHUrPVwiPC92aWRlbz5cIil9dmFyIGY9aHx8TCgnPGRpdiBpZD1cIicuY29uY2F0KHMsJ1wiIGRhdGEtcGx5ci1wcm92aWRlcj1cIicpLmNvbmNhdChhLCdcIiBkYXRhLXBseXItZW1iZWQtaWQ9XCInKS5jb25jYXQoYywnXCI+PC9kaXY+JykpO2sobyxcIlwiLmNvbmNhdChhLFwiLXZpZGVvIGd2aWRlb1wiKSksby5hcHBlbmRDaGlsZChmKSxvLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIixzKTt2YXIgeT14LmhhcyhuLnNldHRpbmdzLnBseXIsXCJjb25maWdcIik/bi5zZXR0aW5ncy5wbHlyLmNvbmZpZzp7fSxiPW5ldyBQbHlyKFwiI1wiK3MseSk7Yi5vbihcInJlYWR5XCIsZnVuY3Rpb24odCl7dmFyIGU9dC5kZXRhaWwucGx5cjttW3NdPWUseC5pc0Z1bmN0aW9uKGkpJiZpKCl9KSxiLm9uKFwiZW50ZXJmdWxsc2NyZWVuXCIsTiksYi5vbihcImV4aXRmdWxsc2NyZWVuXCIsTil9KX1mdW5jdGlvbiBZKHQpe3ZhciBlPXQudXJsLGk9dC53aWR0aCxuPXQuaGVpZ2h0LHM9dC5hbGxvdyxvPXQuY2FsbGJhY2ssbD10LmFwcGVuZFRvLHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKSxhPXdpbmRvdy5pbm5lcldpZHRofHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGh8fGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7cmV0dXJuIHIuY2xhc3NOYW1lPVwidmltZW8tdmlkZW8gZ3ZpZGVvXCIsci5zcmM9ZSxuJiYoci5zdHlsZS5oZWlnaHQ9dSYmYTw3Njc/XCJcIjpcIlwiLmNvbmNhdChuLFwicHhcIikpLGkmJihyLnN0eWxlLndpZHRoPVwiXCIuY29uY2F0KGksXCJweFwiKSkscyYmci5zZXRBdHRyaWJ1dGUoXCJhbGxvd1wiLHMpLHIub25sb2FkPWZ1bmN0aW9uKCl7ayhyLFwibm9kZS1yZWFkeVwiKSx4LmlzRnVuY3Rpb24obykmJm8oKX0sbCYmbC5hcHBlbmRDaGlsZChyKSxyfWZ1bmN0aW9uIEIodCxlLGkpe2lmKHguaXNOaWwodCkpY29uc29sZS5lcnJvcihcIkluamVjdCB2aWRlb3MgYXBpIGVycm9yXCIpO2Vsc2V7dmFyIG47aWYoeC5pc0Z1bmN0aW9uKGUpJiYoaT1lLGU9ITEpLC0xIT09dC5pbmRleE9mKFwiLmNzc1wiKSl7aWYoKG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tocmVmPVwiJyt0KydcIl0nKSkmJm4ubGVuZ3RoPjApcmV0dXJuIHZvaWQoeC5pc0Z1bmN0aW9uKGkpJiZpKCkpO3ZhciBzPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSxvPXMucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyksbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtyZXR1cm4gbC5yZWw9XCJzdHlsZXNoZWV0XCIsbC50eXBlPVwidGV4dC9jc3NcIixsLmhyZWY9dCxsLm1lZGlhPVwiYWxsXCIsbz9zLmluc2VydEJlZm9yZShsLG9bMF0pOnMuYXBwZW5kQ2hpbGQobCksdm9pZCh4LmlzRnVuY3Rpb24oaSkmJmkoKSl9aWYoKG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W3NyYz1cIicrdCsnXCJdJykpJiZuLmxlbmd0aD4wKXtpZih4LmlzRnVuY3Rpb24oaSkpe2lmKHguaXNTdHJpbmcoZSkpcmV0dXJuIFAoZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09d2luZG93W2VdfSxmdW5jdGlvbigpe2koKX0pLCExO2koKX19ZWxzZXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3IudHlwZT1cInRleHQvamF2YXNjcmlwdFwiLHIuc3JjPXQsci5vbmxvYWQ9ZnVuY3Rpb24oKXtpZih4LmlzRnVuY3Rpb24oaSkpe2lmKHguaXNTdHJpbmcoZSkpcmV0dXJuIFAoZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09d2luZG93W2VdfSxmdW5jdGlvbigpe2koKX0pLCExO2koKX19LGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocil9fX1mdW5jdGlvbiBQKHQsZSxpLG4pe2lmKHQoKSllKCk7ZWxzZXt2YXIgcztpfHwoaT0xMDApO3ZhciBvPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dCgpJiYoY2xlYXJJbnRlcnZhbChvKSxzJiZjbGVhclRpbWVvdXQocyksZSgpKX0saSk7biYmKHM9c2V0VGltZW91dChmdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwobyl9LG4pKX19ZnVuY3Rpb24gRih0LGUsaSl7dmFyIG49dGhpcyxzPXQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIiksbz1lLmhyZWYuc3BsaXQoXCIjXCIpLnBvcCgpLnRyaW0oKSxsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG8pO2lmKCFsKXJldHVybiExO3ZhciByPWwuY2xvbmVOb2RlKCEwKTtyLnN0eWxlLmhlaWdodD14LmlzTnVtYmVyKGUuaGVpZ2h0KT9cIlwiLmNvbmNhdChlLmhlaWdodCxcInB4XCIpOmUuaGVpZ2h0LHIuc3R5bGUubWF4V2lkdGg9eC5pc051bWJlcihlLndpZHRoKT9cIlwiLmNvbmNhdChlLndpZHRoLFwicHhcIik6ZS53aWR0aCxrKHIsXCJnaW5saW5lZC1jb250ZW50XCIpLHMuYXBwZW5kQ2hpbGQociksdGhpcy5ldmVudHNbXCJpbmxpbmVjbG9zZVwiK29dPVQoXCJjbGlja1wiLHtvbkVsZW1lbnQ6cy5xdWVyeVNlbGVjdG9yQWxsKFwiLmd0cmlnZ2VyLWNsb3NlXCIpLHdpdGhDYWxsYmFjazpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksbi5jbG9zZSgpfX0pLHguaXNGdW5jdGlvbihpKSYmaSgpfXZhciBXPWZ1bmN0aW9uKHQpe3ZhciBlPXQ7aWYobnVsbCE9PSh0PXQudG9Mb3dlckNhc2UoKSkubWF0Y2goL1xcLihqcGVnfGpwZ3xnaWZ8cG5nfGFwbnx3ZWJwfHN2ZykkLykpcmV0dXJuXCJpbWFnZVwiO2lmKHQubWF0Y2goLyh5b3V0dWJlXFwuY29tfHlvdXR1YmUtbm9jb29raWVcXC5jb20pXFwvd2F0Y2hcXD92PShbYS16QS1aMC05XFwtX10rKS8pfHx0Lm1hdGNoKC95b3V0dVxcLmJlXFwvKFthLXpBLVowLTlcXC1fXSspLyl8fHQubWF0Y2goLyh5b3V0dWJlXFwuY29tfHlvdXR1YmUtbm9jb29raWVcXC5jb20pXFwvZW1iZWRcXC8oW2EtekEtWjAtOVxcLV9dKykvKSlyZXR1cm5cInZpZGVvXCI7aWYodC5tYXRjaCgvdmltZW9cXC5jb21cXC8oWzAtOV0qKS8pKXJldHVyblwidmlkZW9cIjtpZihudWxsIT09dC5tYXRjaCgvXFwuKG1wNHxvZ2d8d2VibSkkLykpcmV0dXJuXCJ2aWRlb1wiO2lmKHQuaW5kZXhPZihcIiNcIik+LTEmJlwiXCIhPT1lLnNwbGl0KFwiI1wiKS5wb3AoKS50cmltKCkpcmV0dXJuXCJpbmxpbmVcIjtyZXR1cm4gdC5pbmNsdWRlcyhcImdhamF4PXRydWVcIik/XCJhamF4XCI6XCJleHRlcm5hbFwifTtmdW5jdGlvbiBfKCl7dmFyIHQ9dGhpcztpZih0aGlzLmV2ZW50cy5oYXNPd25Qcm9wZXJ0eShcImtleWJvYXJkXCIpKXJldHVybiExO3RoaXMuZXZlbnRzLmtleWJvYXJkPVQoXCJrZXlkb3duXCIse29uRWxlbWVudDp3aW5kb3csd2l0aENhbGxiYWNrOmZ1bmN0aW9uKGUsaSl7dmFyIG49KGU9ZXx8d2luZG93LmV2ZW50KS5rZXlDb2RlO2lmKDk9PW4pe2UucHJldmVudERlZmF1bHQoKTt2YXIgbz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdidG5cIik7aWYoIW98fG8ubGVuZ3RoPD0wKXJldHVybjt2YXIgbD1zKG8pLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gQSh0LFwiZm9jdXNlZFwiKX0pO2lmKCFsLmxlbmd0aCl7dmFyIHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdidG5bdGFiaW5kZXg9XCIwXCJdJyk7cmV0dXJuIHZvaWQociYmKHIuZm9jdXMoKSxrKHIsXCJmb2N1c2VkXCIpKSl9by5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBFKHQsXCJmb2N1c2VkXCIpfSk7dmFyIGE9bFswXS5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTthPWF8fFwiMFwiO3ZhciBjPXBhcnNlSW50KGEpKzE7Yz5vLmxlbmd0aC0xJiYoYz1cIjBcIik7dmFyIGg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdidG5bdGFiaW5kZXg9XCInLmNvbmNhdChjLCdcIl0nKSk7aCYmKGguZm9jdXMoKSxrKGgsXCJmb2N1c2VkXCIpKX0zOT09biYmdC5uZXh0U2xpZGUoKSwzNz09biYmdC5wcmV2U2xpZGUoKSwyNz09biYmdC5jbG9zZSgpfX0pfWZ1bmN0aW9uIGooKXt2YXIgdD10aGlzO2lmKHRoaXMuZXZlbnRzLmhhc093blByb3BlcnR5KFwidG91Y2hcIikpcmV0dXJuITE7dmFyIGUsaSxuLHM9cSgpLG89cy53aWR0aCxsPXMuaGVpZ2h0LHI9ITEsYT1udWxsLGg9bnVsbCx1PW51bGwsZD0hMSxnPTEscD0xLHY9ITEsZj0hMSxtPW51bGwseT1udWxsLGI9bnVsbCx4PW51bGwsdz0wLFM9MCxUPSExLEM9ITEsTD17fSxNPXt9LE89MCx6PTAsTj10aGlzLEk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbGlnaHRib3gtc2xpZGVyXCIpLEQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb3ZlcmxheVwiKSxYPW5ldyBjKEkse3RvdWNoU3RhcnQ6ZnVuY3Rpb24odCl7aWYoQSh0LnRhcmdldFRvdWNoZXNbMF0udGFyZ2V0LFwiZ2lubmVyLWNvbnRhaW5lclwiKSlyZXR1cm4gcj0hMSwhMTtyPSEwLE09dC50YXJnZXRUb3VjaGVzWzBdLEwucGFnZVg9dC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLEwucGFnZVk9dC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZLE89dC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsej10LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSxhPU4uYWN0aXZlU2xpZGUsaD1hLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLG49YS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1pbmxpbmVcIiksdT1udWxsLEEoaCxcImdzbGlkZS1pbWFnZVwiKSYmKHU9aC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpKSxFKEQsXCJncmVzZXRcIil9LHRvdWNoTW92ZTpmdW5jdGlvbih0KXtpZihyJiYoTT10LnRhcmdldFRvdWNoZXNbMF0sIXYmJiFmKSl7aWYobiYmbi5vZmZzZXRIZWlnaHQ+bCl7dmFyIHM9TC5wYWdlWC1NLnBhZ2VYO2lmKE1hdGguYWJzKHMpPD0xMylyZXR1cm4hMX1kPSEwO3ZhciBhLGM9dC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsZz10LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSxwPU8tYyxtPXotZztpZihNYXRoLmFicyhwKT5NYXRoLmFicyhtKT8oVD0hMSxDPSEwKTooQz0hMSxUPSEwKSxlPU0ucGFnZVgtTC5wYWdlWCx3PTEwMCplL28saT1NLnBhZ2VZLUwucGFnZVksUz0xMDAqaS9sLFQmJnUmJihhPTEtTWF0aC5hYnMoaSkvbCxELnN0eWxlLm9wYWNpdHk9YSksQyYmKGE9MS1NYXRoLmFicyhlKS9vLGguc3R5bGUub3BhY2l0eT1hKSwhdSlyZXR1cm4gSChoLFwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHcsXCIlLCAwLCAwKVwiKSk7SChoLFwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHcsXCIlLCBcIikuY29uY2F0KFMsXCIlLCAwKVwiKSl9fSx0b3VjaEVuZDpmdW5jdGlvbigpe2lmKHIpe2lmKGQ9ITEsZnx8dilyZXR1cm4gYj1tLHZvaWQoeD15KTt2YXIgZT1NYXRoLmFicyhwYXJzZUludChTKSksaT1NYXRoLmFicyhwYXJzZUludCh3KSk7aWYoIShlPjM1JiZ1KSlyZXR1cm4gZTwzNSYmaTwyNT8oayhELFwiZ3Jlc2V0XCIpLEQuc3R5bGUub3BhY2l0eT0xLFYoaCkpOnZvaWQgMDt0LmNsb3NlKCl9fSxtdWx0aXBvaW50RW5kOmZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe3Y9ITF9LDUwKX0sbXVsdGlwb2ludFN0YXJ0OmZ1bmN0aW9uKCl7dj0hMCxnPXB8fDF9LHBpbmNoOmZ1bmN0aW9uKHQpe2lmKCF1fHxkKXJldHVybiExO3Y9ITAsdS5zY2FsZVg9dS5zY2FsZVk9Zyp0Lnpvb207dmFyIGU9Zyp0Lnpvb207aWYoZj0hMCxlPD0xKXJldHVybiBmPSExLGU9MSx4PW51bGwsYj1udWxsLG09bnVsbCx5PW51bGwsdm9pZCB1LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJcIik7ZT40LjUmJihlPTQuNSksdS5zdHlsZS50cmFuc2Zvcm09XCJzY2FsZTNkKFwiLmNvbmNhdChlLFwiLCBcIikuY29uY2F0KGUsXCIsIDEpXCIpLHA9ZX0scHJlc3NNb3ZlOmZ1bmN0aW9uKHQpe2lmKGYmJiF2KXt2YXIgZT1NLnBhZ2VYLUwucGFnZVgsaT1NLnBhZ2VZLUwucGFnZVk7YiYmKGUrPWIpLHgmJihpKz14KSxtPWUseT1pO3ZhciBuPVwidHJhbnNsYXRlM2QoXCIuY29uY2F0KGUsXCJweCwgXCIpLmNvbmNhdChpLFwicHgsIDApXCIpO3AmJihuKz1cIiBzY2FsZTNkKFwiLmNvbmNhdChwLFwiLCBcIikuY29uY2F0KHAsXCIsIDEpXCIpKSxIKHUsbil9fSxzd2lwZTpmdW5jdGlvbihlKXtpZighZilpZih2KXY9ITE7ZWxzZXtpZihcIkxlZnRcIj09ZS5kaXJlY3Rpb24pe2lmKHQuaW5kZXg9PXQuZWxlbWVudHMubGVuZ3RoLTEpcmV0dXJuIFYoaCk7dC5uZXh0U2xpZGUoKX1pZihcIlJpZ2h0XCI9PWUuZGlyZWN0aW9uKXtpZigwPT10LmluZGV4KXJldHVybiBWKGgpO3QucHJldlNsaWRlKCl9fX19KTt0aGlzLmV2ZW50cy50b3VjaD1YfWZ1bmN0aW9uIEgodCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOlwiXCI7aWYoXCJcIj09ZSlyZXR1cm4gdC5zdHlsZS53ZWJraXRUcmFuc2Zvcm09XCJcIix0LnN0eWxlLk1velRyYW5zZm9ybT1cIlwiLHQuc3R5bGUubXNUcmFuc2Zvcm09XCJcIix0LnN0eWxlLk9UcmFuc2Zvcm09XCJcIix0LnN0eWxlLnRyYW5zZm9ybT1cIlwiLCExO3Quc3R5bGUud2Via2l0VHJhbnNmb3JtPWUsdC5zdHlsZS5Nb3pUcmFuc2Zvcm09ZSx0LnN0eWxlLm1zVHJhbnNmb3JtPWUsdC5zdHlsZS5PVHJhbnNmb3JtPWUsdC5zdHlsZS50cmFuc2Zvcm09ZX1mdW5jdGlvbiBWKHQpe3ZhciBlPUEodCxcImdzbGlkZS1tZWRpYVwiKT90OnQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIiksaT10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWRlc2NyaXB0aW9uXCIpO2soZSxcImdyZXNldFwiKSxIKGUsXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiKTtUKHAse29uRWxlbWVudDplLG9uY2U6ITAsd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsaSl7RShlLFwiZ3Jlc2V0XCIpfX0pO2Uuc3R5bGUub3BhY2l0eT1cIlwiLGkmJihpLnN0eWxlLm9wYWNpdHk9XCJcIil9ZnVuY3Rpb24gRyh0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06NTAsaT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdLG49aTtpZigodD10LnRyaW0oKSkubGVuZ3RoPD1lKXJldHVybiB0O3ZhciBzPXQuc3Vic3RyKDAsZS0xKTtyZXR1cm4gbj9zKycuLi4gPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRlc2MtbW9yZVwiPicraStcIjwvYT5cIjpzfWZ1bmN0aW9uIFoodCxlKXt2YXIgaT10LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy1tb3JlXCIpO2lmKCFpKXJldHVybiExO1QoXCJjbGlja1wiLHtvbkVsZW1lbnQ6aSx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24odCxpKXt0LnByZXZlbnREZWZhdWx0KCk7dmFyIG49ZG9jdW1lbnQuYm9keSxzPU0oaSxcIi5nc2xpZGUtZGVzY1wiKTtpZighcylyZXR1cm4hMTtzLmlubmVySFRNTD1lLmRlc2NyaXB0aW9uLGsobixcImdkZXNjLW9wZW5cIik7dmFyIG89VChcImNsaWNrXCIse29uRWxlbWVudDpbbixNKHMsXCIuZ3NsaWRlLWRlc2NyaXB0aW9uXCIpXSx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24odCxpKXtcImFcIiE9PXQudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJihFKG4sXCJnZGVzYy1vcGVuXCIpLGsobixcImdkZXNjLWNsb3NlZFwiKSxzLmlubmVySFRNTD1lLnNtYWxsRGVzY3JpcHRpb24sWihzLGUpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtFKG4sXCJnZGVzYy1jbG9zZWRcIil9LDQwMCksby5kZXN0cm95KCkpfX0pfX0pfXZhciBSPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChpKXtlKHRoaXMsdCksdGhpcy5zZXR0aW5ncz1iKHksaXx8e30pLHRoaXMuZWZmZWN0c0NsYXNzZXM9dGhpcy5nZXRBbmltYXRpb25DbGFzc2VzKCksdGhpcy5zbGlkZXNEYXRhPXt9fXJldHVybiBuKHQsW3trZXk6XCJpbml0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuYmFzZUV2ZW50cz1UKFwiY2xpY2tcIix7b25FbGVtZW50OlwiLlwiLmNvbmNhdCh0aGlzLnNldHRpbmdzLnNlbGVjdG9yKSx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24oZSxpKXtlLnByZXZlbnREZWZhdWx0KCksdC5vcGVuKGkpfX0pfX0se2tleTpcIm9wZW5cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsO2lmKHRoaXMuZWxlbWVudHM9dGhpcy5nZXRFbGVtZW50cyh0KSwwPT10aGlzLmVsZW1lbnRzLmxlbmd0aClyZXR1cm4hMTt0aGlzLmFjdGl2ZVNsaWRlPW51bGwsdGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleD1udWxsLHRoaXMucHJldkFjdGl2ZVNsaWRlPW51bGw7dmFyIGU9dGhpcy5zZXR0aW5ncy5zdGFydEF0O3QmJnguaXNOaWwoZSkmJihlPXRoaXMuZWxlbWVudHMuaW5kZXhPZih0KSk8MCYmKGU9MCkseC5pc05pbChlKSYmKGU9MCksdGhpcy5idWlsZCgpLEModGhpcy5vdmVybGF5LFwibm9uZVwiPT10aGlzLnNldHRpbmdzLm9wZW5FZmZlY3Q/XCJub25lXCI6dGhpcy5zZXR0aW5ncy5jc3NFZmVjdHMuZmFkZS5pbik7dmFyIGk9ZG9jdW1lbnQuYm9keTtpZihpLnN0eWxlLndpZHRoPVwiXCIuY29uY2F0KGkub2Zmc2V0V2lkdGgsXCJweFwiKSxrKGksXCJnbGlnaHRib3gtb3BlblwiKSxrKGcsXCJnbGlnaHRib3gtb3BlblwiKSx1JiYoayhkb2N1bWVudC5ib2R5LFwiZ2xpZ2h0Ym94LW1vYmlsZVwiKSx0aGlzLnNldHRpbmdzLnNsaWRlRWZmZWN0PVwic2xpZGVcIiksdGhpcy5zaG93U2xpZGUoZSwhMCksMT09dGhpcy5lbGVtZW50cy5sZW5ndGg/KHoodGhpcy5wcmV2QnV0dG9uKSx6KHRoaXMubmV4dEJ1dHRvbikpOihPKHRoaXMucHJldkJ1dHRvbiksTyh0aGlzLm5leHRCdXR0b24pKSx0aGlzLmxpZ2h0Ym94T3Blbj0hMCx4LmlzRnVuY3Rpb24odGhpcy5zZXR0aW5ncy5vbk9wZW4pJiZ0aGlzLnNldHRpbmdzLm9uT3BlbigpLHUmJmQmJnRoaXMuc2V0dGluZ3MudG91Y2hOYXZpZ2F0aW9uKXJldHVybiBqLmFwcGx5KHRoaXMpLCExO3RoaXMuc2V0dGluZ3Mua2V5Ym9hcmROYXZpZ2F0aW9uJiZfLmFwcGx5KHRoaXMpfX0se2tleTpcInNob3dTbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTowLGk9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTtPKHRoaXMubG9hZGVyKSx0aGlzLmluZGV4PXBhcnNlSW50KGUpO3ZhciBuPXRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudFwiKTtuJiZFKG4sXCJjdXJyZW50XCIpLHRoaXMuc2xpZGVBbmltYXRlT3V0KCk7dmFyIHM9dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbZV07aWYoQShzLFwibG9hZGVkXCIpKXRoaXMuc2xpZGVBbmltYXRlSW4ocyxpKSx6KHRoaXMubG9hZGVyKTtlbHNle08odGhpcy5sb2FkZXIpO3ZhciBvPUkodGhpcy5lbGVtZW50c1tlXSx0aGlzLnNldHRpbmdzKTtvLmluZGV4PWUsdGhpcy5zbGlkZXNEYXRhW2VdPW8sRC5hcHBseSh0aGlzLFtzLG8sZnVuY3Rpb24oKXt6KHQubG9hZGVyKSx0LnJlc2l6ZSgpLHQuc2xpZGVBbmltYXRlSW4ocyxpKX1dKX10aGlzLnNsaWRlRGVzY3JpcHRpb249cy5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1kZXNjcmlwdGlvblwiKSx0aGlzLnNsaWRlRGVzY3JpcHRpb25Db250YWluZWQ9dGhpcy5zbGlkZURlc2NyaXB0aW9uJiZBKHRoaXMuc2xpZGVEZXNjcmlwdGlvbi5wYXJlbnROb2RlLFwiZ3NsaWRlLW1lZGlhXCIpLHRoaXMucHJlbG9hZFNsaWRlKGUrMSksdGhpcy5wcmVsb2FkU2xpZGUoZS0xKSxFKHRoaXMubmV4dEJ1dHRvbixcImRpc2FibGVkXCIpLEUodGhpcy5wcmV2QnV0dG9uLFwiZGlzYWJsZWRcIiksMD09PWU/ayh0aGlzLnByZXZCdXR0b24sXCJkaXNhYmxlZFwiKTplPT09dGhpcy5lbGVtZW50cy5sZW5ndGgtMSYmITAhPT10aGlzLnNldHRpbmdzLmxvb3BBdEVuZCYmayh0aGlzLm5leHRCdXR0b24sXCJkaXNhYmxlZFwiKSx0aGlzLmFjdGl2ZVNsaWRlPXN9fSx7a2V5OlwicHJlbG9hZFNsaWRlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZih0PDB8fHQ+dGhpcy5lbGVtZW50cy5sZW5ndGgpcmV0dXJuITE7aWYoeC5pc05pbCh0aGlzLmVsZW1lbnRzW3RdKSlyZXR1cm4hMTt2YXIgaT10aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmdzbGlkZVwiKVt0XTtpZihBKGksXCJsb2FkZWRcIikpcmV0dXJuITE7dmFyIG49SSh0aGlzLmVsZW1lbnRzW3RdLHRoaXMuc2V0dGluZ3MpO24uaW5kZXg9dCx0aGlzLnNsaWRlc0RhdGFbdF09bjt2YXIgcz1uLnNvdXJjZXR5cGU7XCJ2aWRlb1wiPT1zfHxcImV4dGVybmFsXCI9PXM/c2V0VGltZW91dChmdW5jdGlvbigpe0QuYXBwbHkoZSxbaSxuXSl9LDIwMCk6RC5hcHBseSh0aGlzLFtpLG5dKX19LHtrZXk6XCJwcmV2U2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuaW5kZXgtMTtpZih0PDApcmV0dXJuITE7dGhpcy5nb1RvU2xpZGUodCl9fSx7a2V5OlwibmV4dFNsaWRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmluZGV4KzE7aWYodD50aGlzLmVsZW1lbnRzLmxlbmd0aClyZXR1cm4hMTt0aGlzLmdvVG9TbGlkZSh0KX19LHtrZXk6XCJnb1RvU2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07dD4tMSYmKHRoaXMucHJldkFjdGl2ZVNsaWRlPXRoaXMuYWN0aXZlU2xpZGUsdGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleD10aGlzLmluZGV4LHQ8dGhpcy5lbGVtZW50cy5sZW5ndGg/dGhpcy5zaG93U2xpZGUodCk6ITA9PT10aGlzLnNldHRpbmdzLmxvb3BBdEVuZCYmKHQ9MCx0aGlzLnNob3dTbGlkZSh0KSkpfX0se2tleTpcInNsaWRlQW5pbWF0ZUluXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLG49dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxzPXQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtZGVzY3JpcHRpb25cIiksbz17aW5kZXg6dGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleCxzbGlkZTp0aGlzLnByZXZBY3RpdmVTbGlkZX0sbD17aW5kZXg6dGhpcy5pbmRleCxzbGlkZTp0aGlzLmFjdGl2ZVNsaWRlfTtpZihuLm9mZnNldFdpZHRoPjAmJnMmJih6KHMpLHMuc3R5bGUuZGlzcGxheT1cIlwiKSxFKHQsdGhpcy5lZmZlY3RzQ2xhc3NlcyksZSlDKHQsdGhpcy5zZXR0aW5ncy5vcGVuRWZmZWN0LGZ1bmN0aW9uKCl7IXUmJmkuc2V0dGluZ3MuYXV0b3BsYXlWaWRlb3MmJmkucGxheVNsaWRlVmlkZW8odCkseC5pc0Z1bmN0aW9uKGkuc2V0dGluZ3MuYWZ0ZXJTbGlkZUNoYW5nZSkmJmkuc2V0dGluZ3MuYWZ0ZXJTbGlkZUNoYW5nZS5hcHBseShpLFtvLGxdKX0pO2Vsc2V7dmFyIHI9dGhpcy5zZXR0aW5ncy5zbGlkZUVmZmVjdCxhPVwibm9uZVwiIT09cj90aGlzLnNldHRpbmdzLmNzc0VmZWN0c1tyXS5pbjpyO3RoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXg+dGhpcy5pbmRleCYmXCJzbGlkZVwiPT10aGlzLnNldHRpbmdzLnNsaWRlRWZmZWN0JiYoYT10aGlzLnNldHRpbmdzLmNzc0VmZWN0cy5zbGlkZV9iYWNrLmluKSxDKHQsYSxmdW5jdGlvbigpeyF1JiZpLnNldHRpbmdzLmF1dG9wbGF5VmlkZW9zJiZpLnBsYXlTbGlkZVZpZGVvKHQpLHguaXNGdW5jdGlvbihpLnNldHRpbmdzLmFmdGVyU2xpZGVDaGFuZ2UpJiZpLnNldHRpbmdzLmFmdGVyU2xpZGVDaGFuZ2UuYXBwbHkoaSxbbyxsXSl9KX1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXNpemUodCl9LDEwMCksayh0LFwiY3VycmVudFwiKX19LHtrZXk6XCJzbGlkZUFuaW1hdGVPdXRcIix2YWx1ZTpmdW5jdGlvbigpe2lmKCF0aGlzLnByZXZBY3RpdmVTbGlkZSlyZXR1cm4hMTt2YXIgdD10aGlzLnByZXZBY3RpdmVTbGlkZTtFKHQsdGhpcy5lZmZlY3RzQ2xhc3Nlcyksayh0LFwicHJldlwiKTt2YXIgZT10aGlzLnNldHRpbmdzLnNsaWRlRWZmZWN0LGk9XCJub25lXCIhPT1lP3RoaXMuc2V0dGluZ3MuY3NzRWZlY3RzW2VdLm91dDplO3RoaXMuc3RvcFNsaWRlVmlkZW8odCkseC5pc0Z1bmN0aW9uKHRoaXMuc2V0dGluZ3MuYmVmb3JlU2xpZGVDaGFuZ2UpJiZ0aGlzLnNldHRpbmdzLmJlZm9yZVNsaWRlQ2hhbmdlLmFwcGx5KHRoaXMsW3tpbmRleDp0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4LHNsaWRlOnRoaXMucHJldkFjdGl2ZVNsaWRlfSx7aW5kZXg6dGhpcy5pbmRleCxzbGlkZTp0aGlzLmFjdGl2ZVNsaWRlfV0pLHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXg+dGhpcy5pbmRleCYmXCJzbGlkZVwiPT10aGlzLnNldHRpbmdzLnNsaWRlRWZmZWN0JiYoaT10aGlzLnNldHRpbmdzLmNzc0VmZWN0cy5zbGlkZV9iYWNrLm91dCksQyh0LGksZnVuY3Rpb24oKXt2YXIgZT10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLGk9dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1kZXNjcmlwdGlvblwiKTtlLnN0eWxlLnRyYW5zZm9ybT1cIlwiLEUoZSxcImdyZXNldFwiKSxlLnN0eWxlLm9wYWNpdHk9XCJcIixpJiYoaS5zdHlsZS5vcGFjaXR5PVwiXCIpLEUodCxcInByZXZcIil9KX19LHtrZXk6XCJzdG9wU2xpZGVWaWRlb1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3guaXNOdW1iZXIodCkmJih0PXRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3NsaWRlXCIpW3RdKTt2YXIgZT10P3QucXVlcnlTZWxlY3RvcihcIi5ndmlkZW9cIik6bnVsbDtpZighZSlyZXR1cm4hMTt2YXIgaT1lLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7aWYobSYmeC5oYXMobSxpKSl7dmFyIG49bVtpXTtuJiZuLnBsYXkmJm4ucGF1c2UoKX19fSx7a2V5OlwicGxheVNsaWRlVmlkZW9cIix2YWx1ZTpmdW5jdGlvbih0KXt4LmlzTnVtYmVyKHQpJiYodD10aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmdzbGlkZVwiKVt0XSk7dmFyIGU9dC5xdWVyeVNlbGVjdG9yKFwiLmd2aWRlb1wiKTtpZighZSlyZXR1cm4hMTt2YXIgaT1lLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7aWYobSYmeC5oYXMobSxpKSl7dmFyIG49bVtpXTtuJiZuLnBsYXkmJm4ucGxheSgpfX19LHtrZXk6XCJzZXRFbGVtZW50c1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuc2V0dGluZ3MuZWxlbWVudHM9dH19LHtrZXk6XCJnZXRFbGVtZW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGw7aWYodGhpcy5lbGVtZW50cz1bXSwheC5pc05pbCh0aGlzLnNldHRpbmdzLmVsZW1lbnRzKSYmeC5pc0FycmF5KHRoaXMuc2V0dGluZ3MuZWxlbWVudHMpKXJldHVybiB0aGlzLnNldHRpbmdzLmVsZW1lbnRzO3ZhciBlPSExO2lmKG51bGwhPT10KXt2YXIgaT10LmdldEF0dHJpYnV0ZShcImRhdGEtZ2FsbGVyeVwiKTtpJiZcIlwiIT09aSYmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZ2FsbGVyeT1cIicuY29uY2F0KGksJ1wiXScpKSl9cmV0dXJuIDA9PWUmJihlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIuY29uY2F0KHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpKSksZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKX19LHtrZXk6XCJnZXRBY3RpdmVTbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3NsaWRlXCIpW3RoaXMuaW5kZXhdfX0se2tleTpcImdldEFjdGl2ZVNsaWRlSW5kZXhcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluZGV4fX0se2tleTpcImdldEFuaW1hdGlvbkNsYXNzZXNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PVtdO2Zvcih2YXIgZSBpbiB0aGlzLnNldHRpbmdzLmNzc0VmZWN0cylpZih0aGlzLnNldHRpbmdzLmNzc0VmZWN0cy5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIGk9dGhpcy5zZXR0aW5ncy5jc3NFZmVjdHNbZV07dC5wdXNoKFwiZ1wiLmNvbmNhdChpLmluKSksdC5wdXNoKFwiZ1wiLmNvbmNhdChpLm91dCkpfXJldHVybiB0LmpvaW4oXCIgXCIpfX0se2tleTpcImJ1aWxkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO2lmKHRoaXMuYnVpbHQpcmV0dXJuITE7dmFyIGU9eC5oYXModGhpcy5zZXR0aW5ncy5zdmcsXCJuZXh0XCIpP3RoaXMuc2V0dGluZ3Muc3ZnLm5leHQ6XCJcIixpPXguaGFzKHRoaXMuc2V0dGluZ3Muc3ZnLFwicHJldlwiKT90aGlzLnNldHRpbmdzLnN2Zy5wcmV2OlwiXCIsbj14Lmhhcyh0aGlzLnNldHRpbmdzLnN2ZyxcImNsb3NlXCIpP3RoaXMuc2V0dGluZ3Muc3ZnLmNsb3NlOlwiXCIscz10aGlzLnNldHRpbmdzLmxpZ2h0Ym94SHRtbDtzPUwocz0ocz0ocz1zLnJlcGxhY2UoL3tuZXh0U1ZHfS9nLGUpKS5yZXBsYWNlKC97cHJldlNWR30vZyxpKSkucmVwbGFjZSgve2Nsb3NlU1ZHfS9nLG4pKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO3ZhciBvPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xpZ2h0Ym94LWJvZHlcIik7dGhpcy5tb2RhbD1vO3ZhciBsPW8ucXVlcnlTZWxlY3RvcihcIi5nY2xvc2VcIik7dGhpcy5wcmV2QnV0dG9uPW8ucXVlcnlTZWxlY3RvcihcIi5ncHJldlwiKSx0aGlzLm5leHRCdXR0b249by5xdWVyeVNlbGVjdG9yKFwiLmduZXh0XCIpLHRoaXMub3ZlcmxheT1vLnF1ZXJ5U2VsZWN0b3IoXCIuZ292ZXJsYXlcIiksdGhpcy5sb2FkZXI9by5xdWVyeVNlbGVjdG9yKFwiLmdsb2FkZXJcIiksdGhpcy5zbGlkZXNDb250YWluZXI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbGlnaHRib3gtc2xpZGVyXCIpLHRoaXMuZXZlbnRzPXt9LGsodGhpcy5tb2RhbCxcImdsaWdodGJveC1cIit0aGlzLnNldHRpbmdzLnNraW4pLHRoaXMuc2V0dGluZ3MuY2xvc2VCdXR0b24mJmwmJih0aGlzLmV2ZW50cy5jbG9zZT1UKFwiY2xpY2tcIix7b25FbGVtZW50Omwsd2l0aENhbGxiYWNrOmZ1bmN0aW9uKGUsaSl7ZS5wcmV2ZW50RGVmYXVsdCgpLHQuY2xvc2UoKX19KSksbCYmIXRoaXMuc2V0dGluZ3MuY2xvc2VCdXR0b24mJmwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsKSx0aGlzLm5leHRCdXR0b24mJih0aGlzLmV2ZW50cy5uZXh0PVQoXCJjbGlja1wiLHtvbkVsZW1lbnQ6dGhpcy5uZXh0QnV0dG9uLHdpdGhDYWxsYmFjazpmdW5jdGlvbihlLGkpe2UucHJldmVudERlZmF1bHQoKSx0Lm5leHRTbGlkZSgpfX0pKSx0aGlzLnByZXZCdXR0b24mJih0aGlzLmV2ZW50cy5wcmV2PVQoXCJjbGlja1wiLHtvbkVsZW1lbnQ6dGhpcy5wcmV2QnV0dG9uLHdpdGhDYWxsYmFjazpmdW5jdGlvbihlLGkpe2UucHJldmVudERlZmF1bHQoKSx0LnByZXZTbGlkZSgpfX0pKSx0aGlzLnNldHRpbmdzLmNsb3NlT25PdXRzaWRlQ2xpY2smJih0aGlzLmV2ZW50cy5vdXRDbG9zZT1UKFwiY2xpY2tcIix7b25FbGVtZW50Om8sd2l0aENhbGxiYWNrOmZ1bmN0aW9uKGUsaSl7QShkb2N1bWVudC5ib2R5LFwiZ2xpZ2h0Ym94LW1vYmlsZVwiKXx8TShlLnRhcmdldCxcIi5naW5uZXItY29udGFpbmVyXCIpfHxNKGUudGFyZ2V0LFwiLmdidG5cIil8fEEoZS50YXJnZXQsXCJnbmV4dFwiKXx8QShlLnRhcmdldCxcImdwcmV2XCIpfHx0LmNsb3NlKCl9fSkpLHcodGhpcy5lbGVtZW50cyxmdW5jdGlvbigpe3ZhciBlPUwodC5zZXR0aW5ncy5zbGlkZUh0bWwpO3Quc2xpZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpfSksZCYmayhkb2N1bWVudC5ib2R5LFwiZ2xpZ2h0Ym94LXRvdWNoXCIpLHRoaXMuZXZlbnRzLnJlc2l6ZT1UKFwicmVzaXplXCIse29uRWxlbWVudDp3aW5kb3csd2l0aENhbGxiYWNrOmZ1bmN0aW9uKCl7dC5yZXNpemUoKX19KSx0aGlzLmJ1aWx0PSEwfX0se2tleTpcInJlc2l6ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGw7aWYodD10fHx0aGlzLmFjdGl2ZVNsaWRlLGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGg9XCJcIixkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoPVwiXCIuY29uY2F0KGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgsXCJweFwiKSx0JiYhQSh0LFwiem9vbWVkXCIpKXt2YXIgZT1xKCksaT10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3ZpZGVvLXdyYXBwZXJcIiksbj10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWltYWdlXCIpLHM9dGhpcy5zbGlkZURlc2NyaXB0aW9uLG89ZS53aWR0aCxsPWUuaGVpZ2h0O2lmKG88PTc2OD9rKGRvY3VtZW50LmJvZHksXCJnbGlnaHRib3gtbW9iaWxlXCIpOkUoZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC1tb2JpbGVcIiksaXx8bil7dmFyIHI9ITE7aWYocyYmKEEocyxcImRlc2NyaXB0aW9uLWJvdHRvbVwiKXx8QShzLFwiZGVzY3JpcHRpb24tdG9wXCIpKSYmIUEocyxcImdhYnNvbHV0ZVwiKSYmKHI9ITApLG4paWYobzw9NzY4KXt2YXIgYT1uLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7YS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiXCIpfWVsc2UgaWYocil7dmFyIGM9cy5vZmZzZXRIZWlnaHQsaD10aGlzLnNsaWRlc0RhdGFbdGhpcy5pbmRleF0ud2lkdGg7aD1oPD1vP2grXCJweFwiOlwiMTAwJVwiO3ZhciB1PW4ucXVlcnlTZWxlY3RvcihcImltZ1wiKTt1LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gXCIuY29uY2F0KGMsXCJweClcIikpLHMuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIm1heC13aWR0aDogXCIuY29uY2F0KHUub2Zmc2V0V2lkdGgsXCJweDtcIikpfWlmKGkpe3ZhciBkPXRoaXMuc2V0dGluZ3MucGx5ci5yYXRpby5zcGxpdChcIjpcIiksZz10aGlzLnNsaWRlc0RhdGFbdGhpcy5pbmRleF0ud2lkdGgscD1nLyhwYXJzZUludChkWzBdKS9wYXJzZUludChkWzFdKSk7aWYocD1NYXRoLmZsb29yKHApLHImJihsLT1zLm9mZnNldEhlaWdodCksbDxwJiZvPmcpe3ZhciB2PWkub2Zmc2V0V2lkdGgsZj1pLm9mZnNldEhlaWdodCxtPWwvZix5PXt3aWR0aDp2Km0saGVpZ2h0OmYqbX07aS5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJtYXgtd2lkdGg6IFwiLmNvbmNhdCh5LndpZHRoLFwicHhcIikpLHImJnMuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIm1heC13aWR0aDogXCIuY29uY2F0KHkud2lkdGgsXCJweDtcIikpfWVsc2UgaS5wYXJlbnROb2RlLnN0eWxlLm1heFdpZHRoPVwiXCIuY29uY2F0KGcsXCJweFwiKSxyJiZzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJtYXgtd2lkdGg6IFwiLmNvbmNhdChnLFwicHg7XCIpKX19fX19LHtrZXk6XCJyZWxvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaW5pdCgpfX0se2tleTpcImNsb3NlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO2lmKHRoaXMuY2xvc2luZylyZXR1cm4hMTt0aGlzLmNsb3Npbmc9ITAsdGhpcy5zdG9wU2xpZGVWaWRlbyh0aGlzLmFjdGl2ZVNsaWRlKSxrKHRoaXMubW9kYWwsXCJnbGlnaHRib3gtY2xvc2luZ1wiKSxDKHRoaXMub3ZlcmxheSxcIm5vbmVcIj09dGhpcy5zZXR0aW5ncy5vcGVuRWZmZWN0P1wibm9uZVwiOnRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzLmZhZGUub3V0KSxDKHRoaXMuYWN0aXZlU2xpZGUsdGhpcy5zZXR0aW5ncy5jbG9zZUVmZmVjdCxmdW5jdGlvbigpe2lmKHQuYWN0aXZlU2xpZGU9bnVsbCx0LnByZXZBY3RpdmVTbGlkZUluZGV4PW51bGwsdC5wcmV2QWN0aXZlU2xpZGU9bnVsbCx0LmJ1aWx0PSExLHQuZXZlbnRzKXtmb3IodmFyIGUgaW4gdC5ldmVudHMpdC5ldmVudHMuaGFzT3duUHJvcGVydHkoZSkmJnQuZXZlbnRzW2VdLmRlc3Ryb3koKTt0LmV2ZW50cz1udWxsfXZhciBpPWRvY3VtZW50LmJvZHk7RShnLFwiZ2xpZ2h0Ym94LW9wZW5cIiksRShpLFwiZ2xpZ2h0Ym94LW9wZW4gdG91Y2hpbmcgZ2Rlc2Mtb3BlbiBnbGlnaHRib3gtdG91Y2ggZ2xpZ2h0Ym94LW1vYmlsZVwiKSxpLnN0eWxlLndpZHRoPVwiXCIsdC5tb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQubW9kYWwpLHguaXNGdW5jdGlvbih0LnNldHRpbmdzLm9uQ2xvc2UpJiZ0LnNldHRpbmdzLm9uQ2xvc2UoKSx0LmNsb3Npbmc9bnVsbH0pfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuY2xvc2UoKSx0aGlzLmJhc2VFdmVudHMuZGVzdHJveSgpfX1dKSx0fSgpO3JldHVybiBmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSxlPW5ldyBSKHQpO3JldHVybiBlLmluaXQoKSxlfX0pOyIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvLyBNYWluIHNjcmlwdHMgZmlsZVxuaW1wb3J0ICcuL2pzL2luZGV4JztcblxuLy8gTWFpbiBzdHlsZXMgZmlsZVxuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XG5cbi8vIEltYWdlc1xuaW1wb3J0ICcuL2ltZy96ZXRhbWVkcy13aGl0ZS1sb2dvLnBuZyc7XG5pbXBvcnQgJy4vaW1nL2hlYWRlcmZsYWcuanBnJztcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvemV0YW1lZHMtdGhlbWUvaW1hZ2VzL2hlYWRlcmZsYWcuY2ZlY2RmZTQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi96ZXRhbWVkcy10aGVtZS9pbWFnZXMvemV0YW1lZHMtd2hpdGUtbG9nby5mOWZkM2U5NS5wbmdcIjsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnYm9vdHN0cmFwLm5hdGl2ZS9kaXN0L2Jvb3RzdHJhcC1uYXRpdmUtdjQnO1xuXG5pbXBvcnQgU3lsaXVzUmF0aW5nIGZyb20gJy4vc3lsaXVzLXJhdGluZyc7XG5pbXBvcnQgU3lsaXVzVG9nZ2xlIGZyb20gJy4vc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4vc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0JztcbmltcG9ydCBTeWxpdXNBcGlUb2dnbGUgZnJvbSAnLi9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi9zeWxpdXMtYXBpLWxvZ2luJztcbmltcG9ydCBTeWxpdXNWYXJpYW50c1ByaWNlcyBmcm9tICcuL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRJbWFnZXMgZnJvbSAnLi9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuaW1wb3J0IFN5bGl1c1Byb3ZpbmNlRmllbGQgZnJvbSAnLi9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4vc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgU3lsaXVzTG9hZGFibGVGb3JtcyBmcm9tICcuL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5cbi8vIEdsb2JhbCBheGlvcyBzZXR0aW5nc1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0LmFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gTGlnaHRib3hcbiAgY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHsgc2VsZWN0b3I6ICdnbGlnaHRib3gnIH0pO1xuXG4gIC8vIEFkZCB0byBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZm9ybVwiXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzQWRkVG9DYXJ0KGVsKSk7XG5cbiAgLy8gUmVtb3ZlIGZyb20gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1JlbW92ZUZyb21DYXJ0KGVsKSk7XG5cbiAgLy8gUHJvdmluY2UgZmllbGRcbiAgU3lsaXVzUHJvdmluY2VGaWVsZCgpO1xuXG4gIC8vIEFkZHJlc3MgYm9va1xuICBjb25zdCBzeWxpdXNTaGlwcGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtc2hpcHBpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzU2hpcHBpbmdBZGRyZXNzICYmIHN5bGl1c1NoaXBwaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyk7XG4gIH1cbiAgY29uc3Qgc3lsaXVzQmlsbGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtYmlsbGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNCaWxsaW5nQWRkcmVzcyAmJiBzeWxpdXNCaWxsaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c0JpbGxpbmdBZGRyZXNzKTtcbiAgfVxuXG4gIC8vIFZhcmlhbnQgcHJpY2VzXG4gIFN5bGl1c1ZhcmlhbnRzUHJpY2VzKCk7XG5cbiAgLy8gU3RhciByYXRpbmdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmF0aW5nXScpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXcgU3lsaXVzUmF0aW5nKGVsZW0sIHtcbiAgICAgIG9uUmF0ZSh2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3lsaXVzX3Byb2R1Y3RfcmV2aWV3X3JhdGluZ18ke3ZhbHVlIC0gMX1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZSBhbmQgbG9naW4gZnJvbSBjaGVja291dFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpIHtcbiAgICBTeWxpdXNBcGlUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJlbWFpbFwiXScpKTtcbiAgICBTeWxpdXNBcGlMb2dpbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYmlsbGluZyBhZGRyZXNzIG9uIHRoZSBjaGVja291dCBwYWdlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXRvZ2dsZV0nKS5mb3JFYWNoKGVsZW0gPT4gbmV3IFN5bGl1c1RvZ2dsZShlbGVtKSk7XG5cbiAgLy8gUHJvZHVjdCBpbWFnZXMgZm9yIHZhcmlhbnRzXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YXJpYW50LW9wdGlvbnNdLCBbZGF0YS12YXJpYW50LWNvZGVdJykpIHsgbmV3IFN5bGl1c1ZhcmlhbnRJbWFnZXMoKTsgfVxuXG4gIC8vIExvYWRhYmxlIGZvcm1zXG4gIFN5bGl1c0xvYWRhYmxlRm9ybXMoKTtcbn0pO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZGlyZWN0Jyk7XG4gIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgc2VyaWFsaXplKGVsZW1lbnQpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmw7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3IucmVzcG9uc2UuZGF0YSkuZm9yRWFjaCgoWywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgKz0gbWVzc2FnZTtcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkVG9DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IHBhcnNlS2V5ID0gZnVuY3Rpb24gcGFyc2VLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKF9cXHcpL2csIHdvcmRzID0+IHdvcmRzWzFdLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuY29uc3QgU3lsaXVzQWRkcmVzc0Jvb2sgPSBmdW5jdGlvbiBTeWxpdXNBZGRyZXNzQm9vayhlbCkge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gIGNvbnN0IGZpbmRCeU5hbWUgPSBmdW5jdGlvbiBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZSo9JHtwYXJzZUtleShuYW1lKX1dYCk7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBjaG9pY2UgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBjaG9pY2VEYXRhID0ge307XG5cbiAgICAgIFsuLi5jaG9pY2UuYXR0cmlidXRlc10uZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoYXR0ci5uYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcbiAgICAgICAgICBjb25zdCBjYW1lbENhc2VkID0gYXR0ci5uYW1lLnJlcGxhY2UoJ2RhdGEtJywgJycpLnJlcGxhY2UoLy0oW2Etel0pL2csIGcgPT4gZ1sxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBjaG9pY2VEYXRhW2NhbWVsQ2FzZWRdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgcHJvdmluY2VDb2RlLCBwcm92aW5jZU5hbWUgfSA9IGNob2ljZURhdGE7XG4gICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5jbG9zZXN0KCdbZGF0YS1qcy1hZGRyZXNzLWJvb2tdJykucXVlcnlTZWxlY3RvcignLnByb3ZpbmNlLWNvbnRhaW5lcicpO1xuXG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGNob2ljZURhdGEpLmZvckVhY2goKFtwcm9wZXJ0eSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmluZEJ5TmFtZShwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ2NvdW50cnlDb2RlJykgIT09IC0xKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlQ29kZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VDb2RlJyk7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZU5hbWVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICAgICAgICBpZiAoIXByb3ZpbmNlQ29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgaWYgKHByb3ZpbmNlQ29kZUZpZWxkICYmIHByb3ZpbmNlQ29kZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VDb2RlICE9PSAnJyB8fCBwcm92aW5jZUNvZGUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlQ29kZUZpZWxkLnZhbHVlID0gcHJvdmluY2VDb2RlO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3ZpbmNlTmFtZUZpZWxkICYmIHByb3ZpbmNlTmFtZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VOYW1lICE9PSAnJyB8fCBwcm92aW5jZU5hbWUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlTmFtZUZpZWxkLnZhbHVlID0gcHJvdmluY2VOYW1lO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZHJlc3NCb29rO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c0FwaUxvZ2luID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2lnbkluQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gIGNvbnN0IHZhbGlkYXRpb25GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gIGNvbnN0IHVybCA9IHNpZ25JbkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tdXJsJyk7XG4gIGNvbnN0IGVtYWlsRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuTmFtZSA9IGNzcmZUb2tlbkZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ191c2VybmFtZScsIGVtYWlsRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ19wYXNzd29yZCcsIHBhc3N3b3JkRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoW2NzcmZUb2tlbk5hbWVdLCBjc3JmVG9rZW5GaWVsZC52YWx1ZSk7XG5cbiAgICBheGlvcy5wb3N0KHVybCwgcGFyYW1zKVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmlubmVySFRNTCA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaUxvZ2luO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcblxuY29uc3QgU3lsaXVzQXBpVG9nZ2xlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tY2hlY2stZW1haWwtdXJsJyk7XG4gIGNvbnN0IHRvZ2dsZWFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJmb3JtXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRocm90dGxlKChlKSA9PiB7XG4gICAgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgYXhpb3MuZ2V0KHVybCwgeyBwYXJhbXM6IHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTsgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7IH0pO1xuICAgIH1cbiAgfSwgMTUwMCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybXMgPSBmdW5jdGlvbiBTeWxpdXNMb2FkYWJsZUZvcm1zKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0ubG9hZGFibGUnKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0xvYWRhYmxlRm9ybXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgZ2V0UHJvdmluY2VJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHZhbHVlU2VsZWN0b3IpIHtcbiAgY29uc3QgdmFsID0gdmFsdWVTZWxlY3RvciA/IHZhbHVlU2VsZWN0b3IudmFsdWUgOiBudWxsO1xuICByZXR1cm4gIXZhbCB8fCB2YWwgPT0gdW5kZWZpbmVkID8gJycgOiBgdmFsdWU9XCIke3ZhbH1cImA7XG59O1xuXG5cbmNvbnN0IFN5bGl1c1Byb3ZpbmNlRmllbGQgPSBmdW5jdGlvbiBTeWxpdXNQcm92aW5jZUZpZWxkKCkge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWUkPVwiW2NvdW50cnlDb2RlXVwiXScpO1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgY291bnRyeVNlbGVjdC5mb3JFYWNoKChjb3VudHJ5U2VsZWN0SXRlbSkgPT4ge1xuICAgIGNvdW50cnlTZWxlY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJycgfHwgc2VsZWN0LnZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm92aW5jZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsICcnKTtcblxuICAgICAgYXhpb3MuZ2V0KHByb3ZpbmNlQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgeyBwYXJhbXM6IHsgY291bnRyeUNvZGU6IHNlbGVjdC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmNvbnRlbnQuaW5kZXhPZignc2VsZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZVNlbGVjdFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKChcbiAgICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0ID4gb3B0aW9uW3NlbGVjdGVkJD1cInNlbGVjdGVkXCJdJylcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGROYW1lfVwiJHtwcm92aW5jZVNlbGVjdFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGRJZH1cImApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCInLCAnb3B0aW9uIHZhbHVlPVwiXCInKVxuICAgICAgICAgICAgICAucmVwbGFjZShgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gLCBgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUlucHV0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUocHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VJbnB1dEZpZWxkTmFtZX1cIiR7cHJvdmluY2VJbnB1dFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZElkfVwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY291bnRyeVNlbGVjdEl0ZW0udmFsdWUgIT09ICcnKSB7XG4gICAgICBjb3VudHJ5U2VsZWN0SXRlbS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUHJvdmluY2VGaWVsZDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTsgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==