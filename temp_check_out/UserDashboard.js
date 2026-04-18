(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // frontend/node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "frontend/node_modules/lodash/isObject.js"(exports, module) {
      function isObject2(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject2;
    }
  });

  // frontend/node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "frontend/node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // frontend/node_modules/lodash/_root.js
  var require_root = __commonJS({
    "frontend/node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // frontend/node_modules/lodash/now.js
  var require_now = __commonJS({
    "frontend/node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // frontend/node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "frontend/node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // frontend/node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "frontend/node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // frontend/node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "frontend/node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // frontend/node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "frontend/node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // frontend/node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "frontend/node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // frontend/node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "frontend/node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // frontend/node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "frontend/node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // frontend/node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "frontend/node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // frontend/node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "frontend/node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject2 = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject2(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject2(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // frontend/node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "frontend/node_modules/lodash/debounce.js"(exports, module) {
      var isObject2 = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce2;
    }
  });

  // frontend/src/pages/UserDashboard.jsx
  var import_react14 = __require("react");

  // frontend/src/components/UserDashboardNavbar.jsx
  var import_react = __toESM(__require("react"), 1);
  var import_lucide_react = __require("lucide-react");
  var import_react_router_dom = __require("react-router-dom");

  // frontend/node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // frontend/node_modules/axios/lib/utils.js
  var { toString } = Object.prototype;
  var { getPrototypeOf } = Object;
  var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  var isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
  var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = (() => {
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value)) return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
    if (setImmediateSupported) {
      return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks) => {
      _global.addEventListener("message", ({ source, data }) => {
        if (source === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      }, false);
      return (cb) => {
        callbacks.push(cb);
        _global.postMessage(token, "*");
      };
    })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
  })(
    typeof setImmediate === "function",
    isFunction(_global.postMessage)
  );
  var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap
  };

  // frontend/node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status ? response.status : null;
    }
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
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
        config: utils_default.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // frontend/node_modules/axios/lib/helpers/null.js
  var null_default = null;

  // frontend/node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null) return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // frontend/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype2.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // frontend/node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    if (utils_default.isFunction(options)) {
      options = {
        serialize: options
      };
    }
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // frontend/node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager = class {
    constructor() {
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
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils_default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // frontend/node_modules/axios/lib/defaults/transitional.js
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // frontend/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // frontend/node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // frontend/node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // frontend/node_modules/axios/lib/platform/browser/index.js
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // frontend/node_modules/axios/lib/platform/common/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
    navigator: () => _navigator,
    origin: () => origin
  });
  var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
  var _navigator = typeof navigator === "object" && navigator || void 0;
  var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
  var hasStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  var origin = hasBrowserEnv && window.location.href || "http://localhost";

  // frontend/node_modules/axios/lib/platform/index.js
  var platform_default = {
    ...utils_exports,
    ...browser_default
  };

  // frontend/node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  // frontend/node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      if (name === "__proto__") return true;
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // frontend/node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform_default.classes.FormData,
      Blob: platform_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  var defaults_default = defaults;

  // frontend/node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // frontend/node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = /* @__PURE__ */ Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value)) return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else if (utils_default.isHeaders(header)) {
        for (const [key, value] of header.entries()) {
          setHeader(value, key, rewrite);
        }
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // frontend/node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // frontend/node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // frontend/node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // frontend/node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  // frontend/node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // frontend/node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // frontend/node_modules/axios/lib/helpers/throttle.js
  function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1e3 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now()) => {
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(null, args);
    };
    const throttled = (...args) => {
      const now = Date.now();
      const passed = now - timestamp;
      if (passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };
    const flush = () => lastArgs && invoke(lastArgs);
    return [throttled, flush];
  }
  var throttle_default = throttle;

  // frontend/node_modules/axios/lib/helpers/progressEventReducer.js
  var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return throttle_default((e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e,
        lengthComputable: total != null,
        [isDownloadStream ? "download" : "upload"]: true
      };
      listener(data);
    }, freq);
  };
  var progressEventDecorator = (total, throttled) => {
    const lengthComputable = total != null;
    return [(loaded) => throttled[0]({
      lengthComputable,
      total,
      loaded
    }), throttled[1]];
  };
  var asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));

  // frontend/node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
    url = new URL(url, platform_default.origin);
    return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
  })(
    new URL(platform_default.origin),
    platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)
  ) : () => true;

  // frontend/node_modules/axios/lib/helpers/cookies.js
  var cookies_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure) {
        const cookie = [name + "=" + encodeURIComponent(value)];
        utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        utils_default.isString(path) && cookie.push("path=" + path);
        utils_default.isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
      },
      read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );

  // frontend/node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // frontend/node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // frontend/node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !isAbsoluteURL(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // frontend/node_modules/axios/lib/core/mergeConfig.js
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, prop, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, prop, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, prop, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  // frontend/node_modules/axios/lib/helpers/resolveConfig.js
  var resolveConfig_default = (config) => {
    const newConfig = mergeConfig({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = AxiosHeaders_default.from(headers);
    newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
    if (auth) {
      headers.set(
        "Authorization",
        "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
      );
    }
    let contentType;
    if (utils_default.isFormData(data)) {
      if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
        headers.setContentType(void 0);
      } else if ((contentType = headers.getContentType()) !== false) {
        const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
        headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
      }
    }
    if (platform_default.hasStandardBrowserEnv) {
      withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
        const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }
    return newConfig;
  };

  // frontend/node_modules/axios/lib/adapters/xhr.js
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig_default(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload;
      function done() {
        flushUpload && flushUpload();
        flushDownload && flushDownload();
        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
        _config.signal && _config.signal.removeEventListener("abort", onCanceled);
      }
      let request = new XMLHttpRequest();
      request.open(_config.method.toUpperCase(), _config.url, true);
      request.timeout = _config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = _config.transitional || transitional_default;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = _config.responseType;
      }
      if (onDownloadProgress) {
        [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
        request.addEventListener("progress", downloadThrottled);
      }
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
        request.upload.addEventListener("progress", uploadThrottled);
        request.upload.addEventListener("loadend", flushUpload);
      }
      if (_config.cancelToken || _config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(_config.url);
      if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };

  // frontend/node_modules/axios/lib/helpers/composeSignals.js
  var composeSignals = (signals, timeout) => {
    const { length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
      let controller = new AbortController();
      let aborted;
      const onabort = function(reason) {
        if (!aborted) {
          aborted = true;
          unsubscribe();
          const err = reason instanceof Error ? reason : this.reason;
          controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
        }
      };
      let timer = timeout && setTimeout(() => {
        timer = null;
        onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
      }, timeout);
      const unsubscribe = () => {
        if (signals) {
          timer && clearTimeout(timer);
          timer = null;
          signals.forEach((signal2) => {
            signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
          });
          signals = null;
        }
      };
      signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
      const { signal } = controller;
      signal.unsubscribe = () => utils_default.asap(unsubscribe);
      return signal;
    }
  };
  var composeSignals_default = composeSignals;

  // frontend/node_modules/axios/lib/helpers/trackStream.js
  var streamChunk = function* (chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
      yield chunk;
      return;
    }
    let pos = 0;
    let end;
    while (pos < len) {
      end = pos + chunkSize;
      yield chunk.slice(pos, end);
      pos = end;
    }
  };
  var readBytes = async function* (iterable, chunkSize) {
    for await (const chunk of readStream(iterable)) {
      yield* streamChunk(chunk, chunkSize);
    }
  };
  var readStream = async function* (stream) {
    if (stream[Symbol.asyncIterator]) {
      yield* stream;
      return;
    }
    const reader = stream.getReader();
    try {
      for (; ; ) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        yield value;
      }
    } finally {
      await reader.cancel();
    }
  };
  var trackStream = (stream, chunkSize, onProgress, onFinish) => {
    const iterator = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e) => {
      if (!done) {
        done = true;
        onFinish && onFinish(e);
      }
    };
    return new ReadableStream({
      async pull(controller) {
        try {
          const { done: done2, value } = await iterator.next();
          if (done2) {
            _onFinish();
            controller.close();
            return;
          }
          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = bytes += len;
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator.return();
      }
    }, {
      highWaterMark: 2
    });
  };

  // frontend/node_modules/axios/lib/adapters/fetch.js
  var isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
  var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
  var encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
  var test = (fn, ...args) => {
    try {
      return !!fn(...args);
    } catch (e) {
      return false;
    }
  };
  var supportsRequestStream = isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const hasContentType = new Request(platform_default.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
  });
  var DEFAULT_CHUNK_SIZE = 64 * 1024;
  var supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
  var resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && ((res) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
      !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
        throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
      });
    });
  })(new Response());
  var getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils_default.isBlob(body)) {
      return body.size;
    }
    if (utils_default.isSpecCompliantForm(body)) {
      const _request = new Request(platform_default.origin, {
        method: "POST",
        body
      });
      return (await _request.arrayBuffer()).byteLength;
    }
    if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils_default.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils_default.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  var resolveBodyLength = async (headers, body) => {
    const length = utils_default.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  var fetch_default = isFetchSupported && (async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions
    } = resolveConfig_default(config);
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
    let request;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
        let _request = new Request(url, {
          method: "POST",
          body: data,
          duplex: "half"
        });
        let contentTypeHeader;
        if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );
          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
        }
      }
      if (!utils_default.isString(withCredentials)) {
        withCredentials = withCredentials ? "include" : "omit";
      }
      const isCredentialsSupported = "credentials" in Request.prototype;
      request = new Request(url, {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : void 0
      });
      let response = await fetch(request);
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];
        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders_default.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();
      if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError_default.from(err, err && err.code, config, request);
    }
  });

  // frontend/node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default,
    fetch: fetch_default
  };
  utils_default.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  var renderReason = (reason) => `- ${reason}`;
  var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
  var adapters_default = {
    getAdapter: (adapters) => {
      adapters = utils_default.isArray(adapters) ? adapters : [adapters];
      const { length } = adapters;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError_default(`Unknown adapter '${id}'`);
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError_default(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  // frontend/node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // frontend/node_modules/axios/lib/env/data.js
  var VERSION = "1.8.4";

  // frontend/node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  validators.spelling = function spelling(correctSpelling) {
    return (value, opt) => {
      console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
      return true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // frontend/node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(configOrUrl, config) {
      try {
        return await this._request(configOrUrl, config);
      } catch (err) {
        if (err instanceof Error) {
          let dummy = {};
          Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
          const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
          try {
            if (!err.stack) {
              err.stack = stack;
            } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
              err.stack += "\n" + stack;
            }
          } catch (e) {
          }
        }
        throw err;
      }
    }
    _request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional: transitional2, paramsSerializer, headers } = config;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(paramsSerializer, {
            encode: validators2.function,
            serialize: validators2.function
          }, true);
        }
      }
      if (config.allowAbsoluteUrls !== void 0) {
      } else if (this.defaults.allowAbsoluteUrls !== void 0) {
        config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
      } else {
        config.allowAbsoluteUrls = true;
      }
      validator_default.assertOptions(config, {
        baseUrl: validators2.spelling("baseURL"),
        withXsrfToken: validators2.spelling("withXSRFToken")
      }, true);
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils_default.merge(
        headers.common,
        headers[config.method]
      );
      headers && utils_default.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // frontend/node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken = class _CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners) return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    toAbortSignal() {
      const controller = new AbortController();
      const abort = (err) => {
        controller.abort(err);
      };
      this.subscribe(abort);
      controller.signal.unsubscribe = () => this.unsubscribe(abort);
      return controller.signal;
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new _CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // frontend/node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // frontend/node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // frontend/node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode_default = HttpStatusCode;

  // frontend/node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters_default.getAdapter;
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // frontend/node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION2,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    getAdapter,
    mergeConfig: mergeConfig2
  } = axios_default;

  // frontend/src/components/UserDashboardNavbar.jsx
  var import_meta = {};
  var UserDashboardNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
    const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
    const navigate = (0, import_react_router_dom.useNavigate)();
    (0, import_react.useEffect)(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleLogout = async () => {
      try {
        const response = await axios_default.post(
          `${import_meta.env.VITE_BASE_URL}/user/logout`,
          {},
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        if (response.status === 200) {
          navigate("/login-signup/customer", { state: { fromLogout: true } });
        } else {
          console.error("Logout failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };
    return /* @__PURE__ */ import_react.default.createElement(
      "nav",
      {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50" : "bg-white/80 backdrop-blur-md shadow-lg"}`
      },
      /* @__PURE__ */ import_react.default.createElement("div", { className: "container mx-auto px-6 py-4 flex justify-between items-center" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "relative group" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300 animate-pulse" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "relative text-3xl font-extrabold tracking-wide" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg animate-glow" }, "MealSphere")), /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "hidden md:flex items-center space-x-6" }, /* @__PURE__ */ import_react.default.createElement(NavButton, { icon: import_lucide_react.Home, href: "/" }, "Home"), /* @__PURE__ */ import_react.default.createElement(NavButton, { icon: import_lucide_react.User, href: "/user-dashboard" }, "Dashboard"), /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          onClick: handleLogout,
          className: "group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        },
        /* @__PURE__ */ import_react.default.createElement("span", { className: "relative z-10 flex items-center gap-2" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.LogOut, { size: 18, className: "group-hover:rotate-12 transition-transform duration-300" }), "Logout"),
        /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
      )), /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          className: "md:hidden p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 relative",
          onClick: () => setIsMenuOpen(!isMenuOpen)
        },
        /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Menu, { size: 24, className: `transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}` }),
        isMenuOpen && /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute inset-0 bg-amber-500/20 rounded-full animate-ping" })
      )),
      /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          className: `md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-out ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`
        },
        /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/50" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col p-6 space-y-4" }, /* @__PURE__ */ import_react.default.createElement(MobileNavLink, { icon: import_lucide_react.Home, href: "#home", onClick: () => setIsMenuOpen(false) }, "Home"), /* @__PURE__ */ import_react.default.createElement(MobileNavLink, { icon: import_lucide_react.User, href: "/user-dashboard", onClick: () => setIsMenuOpen(false) }, "Dashboard"), /* @__PURE__ */ import_react.default.createElement(
          "button",
          {
            onClick: () => {
              handleLogout();
              setIsMenuOpen(false);
            },
            className: "w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          },
          /* @__PURE__ */ import_react.default.createElement(import_lucide_react.LogOut, { size: 18 }),
          "Logout"
        )))
      )
    );
  };
  var NavButton = ({ icon: Icon, href, children }) => /* @__PURE__ */ import_react.default.createElement(
    "a",
    {
      href,
      className: "relative text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 group flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-amber-50"
    },
    /* @__PURE__ */ import_react.default.createElement(Icon, { size: 18, className: "group-hover:scale-110 transition-transform duration-300" }),
    children,
    /* @__PURE__ */ import_react.default.createElement("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" })
  );
  var MobileNavLink = ({ icon: Icon, href, children, onClick }) => /* @__PURE__ */ import_react.default.createElement(
    "a",
    {
      href,
      onClick,
      className: "text-gray-700 hover:text-amber-600 font-medium py-3 px-4 rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:translate-x-2 flex items-center gap-3"
    },
    /* @__PURE__ */ import_react.default.createElement(Icon, { size: 18 }),
    children
  );
  var UserDashboardNavbar_default = UserDashboardNavbar;

  // frontend/src/pages/UserDashboard.jsx
  var import_lucide_react3 = __require("lucide-react");
  var import_debounce = __toESM(require_debounce(), 1);

  // frontend/node_modules/react-toastify/dist/index.mjs
  var import_react2 = __require("react");
  var import_react3 = __toESM(__require("react"), 1);
  var import_react4 = __require("react");
  var import_react5 = __toESM(__require("react"), 1);
  var import_react6 = __toESM(__require("react"), 1);

  // frontend/node_modules/clsx/dist/clsx.mjs
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var clsx_default = clsx;

  // frontend/node_modules/react-toastify/dist/index.mjs
  var import_react7 = __toESM(__require("react"), 1);
  var import_react8 = __require("react");
  var import_react9 = __require("react");
  var import_react10 = __require("react");
  var import_react11 = __toESM(__require("react"), 1);
  var import_react12 = __toESM(__require("react"), 1);
  function Mt(t) {
    if (!t || typeof document == "undefined") return;
    let o = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
    e.type = "text/css", o.firstChild ? o.insertBefore(e, o.firstChild) : o.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
  }
  Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
  var L = (t) => typeof t == "number" && !isNaN(t);
  var N = (t) => typeof t == "string";
  var P = (t) => typeof t == "function";
  var mt = (t) => N(t) || L(t);
  var B = (t) => N(t) || P(t) ? t : null;
  var pt = (t, o) => t === false || L(t) && t > 0 ? t : o;
  var z = (t) => (0, import_react2.isValidElement)(t) || N(t) || P(t) || L(t);
  function Z(t, o, e = 300) {
    let { scrollHeight: r2, style: s } = t;
    requestAnimationFrame(() => {
      s.minHeight = "initial", s.height = r2 + "px", s.transition = `all ${e}ms`, requestAnimationFrame(() => {
        s.height = "0", s.padding = "0", s.margin = "0", setTimeout(o, e);
      });
    });
  }
  function $({ enter: t, exit: o, appendPosition: e = false, collapse: r2 = true, collapseDuration: s = 300 }) {
    return function({ children: a, position: d, preventExitTransition: c, done: T, nodeRef: g, isIn: v, playToast: x }) {
      let C = e ? `${t}--${d}` : t, S = e ? `${o}--${d}` : o, E = (0, import_react3.useRef)(0);
      return (0, import_react3.useLayoutEffect)(() => {
        let f = g.current, p = C.split(" "), b = (n) => {
          n.target === g.current && (x(), f.removeEventListener("animationend", b), f.removeEventListener("animationcancel", b), E.current === 0 && n.type !== "animationcancel" && f.classList.remove(...p));
        };
        (() => {
          f.classList.add(...p), f.addEventListener("animationend", b), f.addEventListener("animationcancel", b);
        })();
      }, []), (0, import_react3.useEffect)(() => {
        let f = g.current, p = () => {
          f.removeEventListener("animationend", p), r2 ? Z(f, T, s) : T();
        };
        v || (c ? p() : (() => {
          E.current = 1, f.className += ` ${S}`, f.addEventListener("animationend", p);
        })());
      }, [v]), import_react3.default.createElement(import_react3.default.Fragment, null, a);
    };
  }
  function J(t, o) {
    return { content: tt(t.content, t.props), containerId: t.props.containerId, id: t.props.toastId, theme: t.props.theme, type: t.props.type, data: t.props.data || {}, isLoading: t.props.isLoading, icon: t.props.icon, reason: t.removalReason, status: o };
  }
  function tt(t, o, e = false) {
    return (0, import_react4.isValidElement)(t) && !N(t.type) ? (0, import_react4.cloneElement)(t, { closeToast: o.closeToast, toastProps: o, data: o.data, isPaused: e }) : P(t) ? t({ closeToast: o.closeToast, toastProps: o, data: o.data, isPaused: e }) : t;
  }
  function yt({ closeToast: t, theme: o, ariaLabel: e = "close" }) {
    return import_react5.default.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o}`, type: "button", onClick: (r2) => {
      r2.stopPropagation(), t(true);
    }, "aria-label": e }, import_react5.default.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, import_react5.default.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
  }
  function gt({ delay: t, isRunning: o, closeToast: e, type: r2 = "default", hide: s, className: l, controlledProgress: a, progress: d, rtl: c, isIn: T, theme: g }) {
    let v = s || a && d === 0, x = { animationDuration: `${t}ms`, animationPlayState: o ? "running" : "paused" };
    a && (x.transform = `scaleX(${d})`);
    let C = clsx_default("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g}`, `Toastify__progress-bar--${r2}`, { ["Toastify__progress-bar--rtl"]: c }), S = P(l) ? l({ rtl: c, type: r2, defaultClassName: C }) : clsx_default(C, l), E = { [a && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && d < 1 ? null : () => {
      T && e();
    } };
    return import_react6.default.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": v }, import_react6.default.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r2}` }), import_react6.default.createElement("div", { role: "progressbar", "aria-hidden": v ? "true" : "false", "aria-label": "notification timer", className: S, style: x, ...E }));
  }
  var Xt = 1;
  var at = () => `${Xt++}`;
  function _t(t, o, e) {
    let r2 = 1, s = 0, l = [], a = [], d = o, c = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), g = (i) => (T.add(i), () => T.delete(i)), v = () => {
      a = Array.from(c.values()), T.forEach((i) => i());
    }, x = ({ containerId: i, toastId: n, updateId: u }) => {
      let h = i ? i !== t : t !== 1, m = c.has(n) && u == null;
      return h || m;
    }, C = (i, n) => {
      c.forEach((u) => {
        var h;
        (n == null || n === u.props.toastId) && ((h = u.toggle) == null || h.call(u, i));
      });
    }, S = (i) => {
      var n, u;
      (u = (n = i.props) == null ? void 0 : n.onClose) == null || u.call(n, i.removalReason), i.isActive = false;
    }, E = (i) => {
      if (i == null) c.forEach(S);
      else {
        let n = c.get(i);
        n && S(n);
      }
      v();
    }, f = () => {
      s -= l.length, l = [];
    }, p = (i) => {
      var m, _;
      let { toastId: n, updateId: u } = i.props, h = u == null;
      i.staleId && c.delete(i.staleId), i.isActive = true, c.set(n, i), v(), e(J(i, h ? "added" : "updated")), h && ((_ = (m = i.props).onOpen) == null || _.call(m));
    };
    return { id: t, props: d, observe: g, toggle: C, removeToast: E, toasts: c, clearQueue: f, buildToast: (i, n) => {
      if (x(n)) return;
      let { toastId: u, updateId: h, data: m, staleId: _, delay: k } = n, M = h == null;
      M && s++;
      let A = { ...d, style: d.toastStyle, key: r2++, ...Object.fromEntries(Object.entries(n).filter(([D, Y]) => Y != null)), toastId: u, updateId: h, data: m, isIn: false, className: B(n.className || d.toastClassName), progressClassName: B(n.progressClassName || d.progressClassName), autoClose: n.isLoading ? false : pt(n.autoClose, d.autoClose), closeToast(D) {
        c.get(u).removalReason = D, E(u);
      }, deleteToast() {
        let D = c.get(u);
        if (D != null) {
          if (e(J(D, "removed")), c.delete(u), s--, s < 0 && (s = 0), l.length > 0) {
            p(l.shift());
            return;
          }
          v();
        }
      } };
      A.closeButton = d.closeButton, n.closeButton === false || z(n.closeButton) ? A.closeButton = n.closeButton : n.closeButton === true && (A.closeButton = z(d.closeButton) ? d.closeButton : true);
      let R = { content: i, props: A, staleId: _ };
      d.limit && d.limit > 0 && s > d.limit && M ? l.push(R) : L(k) ? setTimeout(() => {
        p(R);
      }, k) : p(R);
    }, setProps(i) {
      d = i;
    }, setToggle: (i, n) => {
      let u = c.get(i);
      u && (u.toggle = n);
    }, isToastActive: (i) => {
      var n;
      return (n = c.get(i)) == null ? void 0 : n.isActive;
    }, getSnapshot: () => a };
  }
  var I = /* @__PURE__ */ new Map();
  var F = [];
  var st = /* @__PURE__ */ new Set();
  var Vt = (t) => st.forEach((o) => o(t));
  var bt = () => I.size > 0;
  function Qt() {
    F.forEach((t) => nt(t.content, t.options)), F = [];
  }
  var vt = (t, { containerId: o }) => {
    var e;
    return (e = I.get(o || 1)) == null ? void 0 : e.toasts.get(t);
  };
  function X(t, o) {
    var r2;
    if (o) return !!((r2 = I.get(o)) != null && r2.isToastActive(t));
    let e = false;
    return I.forEach((s) => {
      s.isToastActive(t) && (e = true);
    }), e;
  }
  function ht(t) {
    if (!bt()) {
      F = F.filter((o) => t != null && o.options.toastId !== t);
      return;
    }
    if (t == null || mt(t)) I.forEach((o) => {
      o.removeToast(t);
    });
    else if (t && ("containerId" in t || "id" in t)) {
      let o = I.get(t.containerId);
      o ? o.removeToast(t.id) : I.forEach((e) => {
        e.removeToast(t.id);
      });
    }
  }
  var Ct = (t = {}) => {
    I.forEach((o) => {
      o.props.limit && (!t.containerId || o.id === t.containerId) && o.clearQueue();
    });
  };
  function nt(t, o) {
    z(t) && (bt() || F.push({ content: t, options: o }), I.forEach((e) => {
      e.buildToast(t, o);
    }));
  }
  function xt(t) {
    var o;
    (o = I.get(t.containerId || 1)) == null || o.setToggle(t.id, t.fn);
  }
  function rt(t, o) {
    I.forEach((e) => {
      (o == null || !(o != null && o.containerId) || (o == null ? void 0 : o.containerId) === e.id) && e.toggle(t, o == null ? void 0 : o.id);
    });
  }
  function Et(t) {
    let o = t.containerId || 1;
    return { subscribe(e) {
      let r2 = _t(o, t, Vt);
      I.set(o, r2);
      let s = r2.observe(e);
      return Qt(), () => {
        s(), I.delete(o);
      };
    }, setProps(e) {
      var r2;
      (r2 = I.get(o)) == null || r2.setProps(e);
    }, getSnapshot() {
      var e;
      return (e = I.get(o)) == null ? void 0 : e.getSnapshot();
    } };
  }
  function Pt(t) {
    return st.add(t), () => {
      st.delete(t);
    };
  }
  function Wt(t) {
    return t && (N(t.toastId) || L(t.toastId)) ? t.toastId : at();
  }
  function U(t, o) {
    return nt(t, o), o.toastId;
  }
  function V(t, o) {
    return { ...o, type: o && o.type || t, toastId: Wt(o) };
  }
  function Q(t) {
    return (o, e) => U(o, V(t, e));
  }
  function y(t, o) {
    return U(t, V("default", o));
  }
  y.loading = (t, o) => U(t, V("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...o }));
  function Gt(t, { pending: o, error: e, success: r2 }, s) {
    let l;
    o && (l = N(o) ? y.loading(o, s) : y.loading(o.render, { ...s, ...o }));
    let a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, d = (T, g, v) => {
      if (g == null) {
        y.dismiss(l);
        return;
      }
      let x = { type: T, ...a, ...s, data: v }, C = N(g) ? { render: g } : g;
      return l ? y.update(l, { ...x, ...C }) : y(C.render, { ...x, ...C }), v;
    }, c = P(t) ? t() : t;
    return c.then((T) => d("success", r2, T)).catch((T) => d("error", e, T)), c;
  }
  y.promise = Gt;
  y.success = Q("success");
  y.info = Q("info");
  y.error = Q("error");
  y.warning = Q("warning");
  y.warn = y.warning;
  y.dark = (t, o) => U(t, V("default", { theme: "dark", ...o }));
  function qt(t) {
    ht(t);
  }
  y.dismiss = qt;
  y.clearWaitingQueue = Ct;
  y.isActive = X;
  y.update = (t, o = {}) => {
    let e = vt(t, o);
    if (e) {
      let { props: r2, content: s } = e, l = { delay: 100, ...r2, ...o, toastId: o.toastId || t, updateId: at() };
      l.toastId !== t && (l.staleId = t);
      let a = l.render || s;
      delete l.render, U(a, l);
    }
  };
  y.done = (t) => {
    y.update(t, { progress: 1 });
  };
  y.onChange = Pt;
  y.play = (t) => rt(true, t);
  y.pause = (t) => rt(false, t);
  function It(t) {
    var a;
    let { subscribe: o, getSnapshot: e, setProps: r2 } = (0, import_react8.useRef)(Et(t)).current;
    r2(t);
    let s = (a = (0, import_react8.useSyncExternalStore)(o, e, e)) == null ? void 0 : a.slice();
    function l(d) {
      if (!s) return [];
      let c = /* @__PURE__ */ new Map();
      return t.newestOnTop && s.reverse(), s.forEach((T) => {
        let { position: g } = T.props;
        c.has(g) || c.set(g, []), c.get(g).push(T);
      }), Array.from(c, (T) => d(T[0], T[1]));
    }
    return { getToastToRender: l, isToastActive: X, count: s == null ? void 0 : s.length };
  }
  function At(t) {
    let [o, e] = (0, import_react9.useState)(false), [r2, s] = (0, import_react9.useState)(false), l = (0, import_react9.useRef)(null), a = (0, import_react9.useRef)({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, didMove: false }).current, { autoClose: d, pauseOnHover: c, closeToast: T, onClick: g, closeOnClick: v } = t;
    xt({ id: t.toastId, containerId: t.containerId, fn: e }), (0, import_react9.useEffect)(() => {
      if (t.pauseOnFocusLoss) return x(), () => {
        C();
      };
    }, [t.pauseOnFocusLoss]);
    function x() {
      document.hasFocus() || p(), window.addEventListener("focus", f), window.addEventListener("blur", p);
    }
    function C() {
      window.removeEventListener("focus", f), window.removeEventListener("blur", p);
    }
    function S(m) {
      if (t.draggable === true || t.draggable === m.pointerType) {
        b();
        let _ = l.current;
        a.canCloseOnClick = true, a.canDrag = true, _.style.transition = "none", t.draggableDirection === "x" ? (a.start = m.clientX, a.removalDistance = _.offsetWidth * (t.draggablePercent / 100)) : (a.start = m.clientY, a.removalDistance = _.offsetHeight * (t.draggablePercent === 80 ? t.draggablePercent * 1.5 : t.draggablePercent) / 100);
      }
    }
    function E(m) {
      let { top: _, bottom: k, left: M, right: A } = l.current.getBoundingClientRect();
      m.nativeEvent.type !== "touchend" && t.pauseOnHover && m.clientX >= M && m.clientX <= A && m.clientY >= _ && m.clientY <= k ? p() : f();
    }
    function f() {
      e(true);
    }
    function p() {
      e(false);
    }
    function b() {
      a.didMove = false, document.addEventListener("pointermove", n), document.addEventListener("pointerup", u);
    }
    function i() {
      document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", u);
    }
    function n(m) {
      let _ = l.current;
      if (a.canDrag && _) {
        a.didMove = true, o && p(), t.draggableDirection === "x" ? a.delta = m.clientX - a.start : a.delta = m.clientY - a.start, a.start !== m.clientX && (a.canCloseOnClick = false);
        let k = t.draggableDirection === "x" ? `${a.delta}px, var(--y)` : `0, calc(${a.delta}px + var(--y))`;
        _.style.transform = `translate3d(${k},0)`, _.style.opacity = `${1 - Math.abs(a.delta / a.removalDistance)}`;
      }
    }
    function u() {
      i();
      let m = l.current;
      if (a.canDrag && a.didMove && m) {
        if (a.canDrag = false, Math.abs(a.delta) > a.removalDistance) {
          s(true), t.closeToast(true), t.collapseAll();
          return;
        }
        m.style.transition = "transform 0.2s, opacity 0.2s", m.style.removeProperty("transform"), m.style.removeProperty("opacity");
      }
    }
    let h = { onPointerDown: S, onPointerUp: E };
    return d && c && (h.onMouseEnter = p, t.stacked || (h.onMouseLeave = f)), v && (h.onClick = (m) => {
      g && g(m), a.canCloseOnClick && T(true);
    }), { playToast: f, pauseToast: p, isRunning: o, preventExitTransition: r2, toastRef: l, eventHandlers: h };
  }
  var Ot = typeof window != "undefined" ? import_react10.useLayoutEffect : import_react10.useEffect;
  var G = ({ theme: t, type: o, isLoading: e, ...r2 }) => import_react12.default.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${o})`, ...r2 });
  function ao(t) {
    return import_react12.default.createElement(G, { ...t }, import_react12.default.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
  }
  function so(t) {
    return import_react12.default.createElement(G, { ...t }, import_react12.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
  }
  function no(t) {
    return import_react12.default.createElement(G, { ...t }, import_react12.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
  }
  function ro(t) {
    return import_react12.default.createElement(G, { ...t }, import_react12.default.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
  }
  function io() {
    return import_react12.default.createElement("div", { className: "Toastify__spinner" });
  }
  var W = { info: so, warning: ao, success: no, error: ro, spinner: io };
  var lo = (t) => t in W;
  function Nt({ theme: t, type: o, isLoading: e, icon: r2 }) {
    let s = null, l = { theme: t, type: o };
    return r2 === false || (P(r2) ? s = r2({ ...l, isLoading: e }) : (0, import_react12.isValidElement)(r2) ? s = (0, import_react12.cloneElement)(r2, l) : e ? s = W.spinner() : lo(o) && (s = W[o](l))), s;
  }
  var wt = (t) => {
    let { isRunning: o, preventExitTransition: e, toastRef: r2, eventHandlers: s, playToast: l } = At(t), { closeButton: a, children: d, autoClose: c, onClick: T, type: g, hideProgressBar: v, closeToast: x, transition: C, position: S, className: E, style: f, progressClassName: p, updateId: b, role: i, progress: n, rtl: u, toastId: h, deleteToast: m, isIn: _, isLoading: k, closeOnClick: M, theme: A, ariaLabel: R } = t, D = clsx_default("Toastify__toast", `Toastify__toast-theme--${A}`, `Toastify__toast--${g}`, { ["Toastify__toast--rtl"]: u }, { ["Toastify__toast--close-on-click"]: M }), Y = P(E) ? E({ rtl: u, position: S, type: g, defaultClassName: D }) : clsx_default(D, E), ft = Nt(t), dt = !!n || !c, j = { closeToast: x, type: g, theme: A }, H = null;
    return a === false || (P(a) ? H = a(j) : (0, import_react11.isValidElement)(a) ? H = (0, import_react11.cloneElement)(a, j) : H = yt(j)), import_react11.default.createElement(C, { isIn: _, done: m, position: S, preventExitTransition: e, nodeRef: r2, playToast: l }, import_react11.default.createElement("div", { id: h, tabIndex: 0, onClick: T, "data-in": _, className: Y, ...s, style: f, ref: r2, ..._ && { role: i, "aria-label": R } }, ft != null && import_react11.default.createElement("div", { className: clsx_default("Toastify__toast-icon", { ["Toastify--animate-icon Toastify__zoom-enter"]: !k }) }, ft), tt(d, t, !o), H, !t.customProgressBar && import_react11.default.createElement(gt, { ...b && !dt ? { key: `p-${b}` } : {}, rtl: u, theme: A, delay: c, isRunning: o, isIn: _, closeToast: x, hide: v, type: g, className: p, controlledProgress: dt, progress: n || 0 })));
  };
  var K = (t, o = false) => ({ enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: o });
  var lt = $(K("bounce", true));
  var mo = $(K("slide", true));
  var po = $(K("zoom"));
  var uo = $(K("flip"));
  var _o = { position: "top-right", transition: lt, autoClose: 5e3, closeButton: true, pauseOnHover: true, pauseOnFocusLoss: true, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light", "aria-label": "Notifications Alt+T", hotKeys: (t) => t.altKey && t.code === "KeyT" };
  function Lt(t) {
    let o = { ..._o, ...t }, e = t.stacked, [r2, s] = (0, import_react7.useState)(true), l = (0, import_react7.useRef)(null), { getToastToRender: a, isToastActive: d, count: c } = It(o), { className: T, style: g, rtl: v, containerId: x, hotKeys: C } = o;
    function S(f) {
      let p = clsx_default("Toastify__toast-container", `Toastify__toast-container--${f}`, { ["Toastify__toast-container--rtl"]: v });
      return P(T) ? T({ position: f, rtl: v, defaultClassName: p }) : clsx_default(p, B(T));
    }
    function E() {
      e && (s(true), y.play());
    }
    return Ot(() => {
      var f;
      if (e) {
        let p = l.current.querySelectorAll('[data-in="true"]'), b = 12, i = (f = o.position) == null ? void 0 : f.includes("top"), n = 0, u = 0;
        Array.from(p).reverse().forEach((h, m) => {
          let _ = h;
          _.classList.add("Toastify__toast--stacked"), m > 0 && (_.dataset.collapsed = `${r2}`), _.dataset.pos || (_.dataset.pos = i ? "top" : "bot");
          let k = n * (r2 ? 0.2 : 1) + (r2 ? 0 : b * m);
          _.style.setProperty("--y", `${i ? k : k * -1}px`), _.style.setProperty("--g", `${b}`), _.style.setProperty("--s", `${1 - (r2 ? u : 0)}`), n += _.offsetHeight, u += 0.025;
        });
      }
    }, [r2, c, e]), (0, import_react7.useEffect)(() => {
      function f(p) {
        var i;
        let b = l.current;
        C(p) && ((i = b.querySelector('[tabIndex="0"]')) == null || i.focus(), s(false), y.pause()), p.key === "Escape" && (document.activeElement === b || b != null && b.contains(document.activeElement)) && (s(true), y.play());
      }
      return document.addEventListener("keydown", f), () => {
        document.removeEventListener("keydown", f);
      };
    }, [C]), import_react7.default.createElement("section", { ref: l, className: "Toastify", id: x, onMouseEnter: () => {
      e && (s(false), y.pause());
    }, onMouseLeave: E, "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text", "aria-label": o["aria-label"] }, a((f, p) => {
      let b = p.length ? { ...g } : { ...g, pointerEvents: "none" };
      return import_react7.default.createElement("div", { tabIndex: -1, className: S(f), "data-stacked": e, style: b, key: `c-${f}` }, p.map(({ content: i, props: n }) => import_react7.default.createElement(wt, { ...n, stacked: e, collapseAll: E, isIn: d(n.toastId, n.containerId), key: `t-${n.key}` }, i)));
    }));
  }

  // frontend/src/components/MessCard.jsx
  var import_lucide_react2 = __require("lucide-react");
  var import_react13 = __require("react");
  var import_meta2 = {};
  var MessCard = ({ mess, onMonthlyBooking, onDailyReservation, isReservationAllowed, reservedMesses }) => {
    const { name, menu, address, _id, image } = mess;
    const [isHovered, setIsHovered] = (0, import_react13.useState)(false);
    const dayDishes = menu?.dayMeal?.dishes || [];
    const nightDishes = menu?.nightMeal?.dishes || [];
    const hasSpots = true;
    const reservedForDay = reservedMesses.some(
      (res) => res.messId === _id && res.mealType === "day"
    );
    const reservedForNight = reservedMesses.some(
      (res) => res.messId === _id && res.mealType === "night"
    );
    const baseURL = import_meta2.env.VITE_BASE_URL || "http://localhost:3000";
    const imageURL = image?.startsWith("/uploads") ? `${baseURL}${image}` : image || "https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/MealSphere/messDefaultImage.png";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `card group relative overflow-hidden transition-all duration-500 ${isHovered ? "scale-105 shadow-2xl" : ""}`,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false)
      },
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
      /* @__PURE__ */ React.createElement("div", { className: "relative overflow-hidden rounded-t-xl" }, /* @__PURE__ */ React.createElement(
        "img",
        {
          src: imageURL,
          alt: name,
          className: "w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        }
      ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 animate-fadeIn" }, /* @__PURE__ */ React.createElement(import_lucide_react2.Star, { className: "w-4 h-4 text-yellow-500 fill-current" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-semibold" }, "4.5"))),
      /* @__PURE__ */ React.createElement("div", { className: "p-6 relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300" }, name), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 text-sm" }, /* @__PURE__ */ React.createElement(import_lucide_react2.MapPin, { className: "w-4 h-4 mr-1" }), /* @__PURE__ */ React.createElement("span", { className: "truncate" }, address || "No address available"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse" }), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold text-yellow-800" }, "Lunch")), dayDishes.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, dayDishes.slice(0, 2).map((dish, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, dish.name), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-green-600" }, "\u20B9", dish.price))), dayDishes.length > 2 && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "+", dayDishes.length - 2, " more items")) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No lunch available")), /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse" }), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold text-blue-800" }, "Dinner")), nightDishes.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, nightDishes.slice(0, 2).map((dish, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, dish.name), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-green-600" }, "\u20B9", dish.price))), nightDishes.length > 2 && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "+", nightDishes.length - 2, " more items")) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No dinner available"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onMonthlyBooking(name),
          className: `w-full btn-primary flex items-center justify-center gap-2 ${!hasSpots ? "opacity-50 cursor-not-allowed" : ""}`,
          disabled: !hasSpots
        },
        /* @__PURE__ */ React.createElement(import_lucide_react2.Calendar, { className: "w-4 h-4" }),
        "Enroll Monthly"
      ), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, reservedForDay ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600" }, "Lunch Reserved \u2713") : /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onDailyReservation(mess._id, "day"),
          className: `btn-success text-sm flex items-center justify-center gap-1 ${!hasSpots || !isReservationAllowed.day ? "opacity-50 cursor-not-allowed" : ""}`,
          disabled: !hasSpots || !isReservationAllowed.day
        },
        /* @__PURE__ */ React.createElement(import_lucide_react2.Utensils, { className: "w-3 h-3" }),
        "Reserve Lunch"
      ), reservedForNight ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600" }, "Dinner Reserved \u2713") : /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onDailyReservation(mess._id, "night"),
          className: `bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm flex items-center justify-center gap-1 ${!hasSpots || !isReservationAllowed.night ? "opacity-50 cursor-not-allowed" : ""}`,
          disabled: !hasSpots || !isReservationAllowed.night
        },
        /* @__PURE__ */ React.createElement(import_lucide_react2.Utensils, { className: "w-3 h-3" }),
        "Reserve Dinner"
      ))))
    );
  };
  var MessCard_default = MessCard;

  // frontend/src/pages/UserDashboard.jsx
  var import_meta3 = {};
  var getCurrentISTDate = () => {
    const now = /* @__PURE__ */ new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 6e4;
    return new Date(new Date(utc + 5.5 * 60 * 60 * 1e3));
  };
  var isBookingOpenForMeal = (mealType) => {
    const currentIST = getCurrentISTDate();
    const hour = currentIST.getHours();
    if (mealType === "day") return hour < 11;
    if (mealType === "night") return hour < 19;
    return false;
  };
  var getBookingClosedMessage = (mealType) => mealType === "day" ? "Booking closed for lunch. Lunch bookings close at 11:00 AM IST." : "Booking closed for dinner. Dinner bookings close at 7:00 PM IST.";
  function UserDashboard() {
    const [searchQuery, setSearchQuery] = (0, import_react14.useState)("");
    const [sortOption, setSortOption] = (0, import_react14.useState)("Price ascending");
    const [messData, setMessData] = (0, import_react14.useState)([]);
    const [reservedMesses, setReservedMesses] = (0, import_react14.useState)([]);
    const [enrolledMess, setEnrolledMess] = (0, import_react14.useState)(null);
    const [loading, setLoading] = (0, import_react14.useState)(true);
    const [error, setError] = (0, import_react14.useState)("");
    const [enrollmentError, setEnrollmentError] = (0, import_react14.useState)("");
    const [location, setLocation] = (0, import_react14.useState)({ lat: null, lng: null });
    const [isReservationAllowed, setIsReservationAllowed] = (0, import_react14.useState)({
      day: true,
      night: true
    });
    const [showAllMesses, setShowAllMesses] = (0, import_react14.useState)(false);
    const [ledgerDays, setLedgerDays] = (0, import_react14.useState)(30);
    const [mealLedger, setMealLedger] = (0, import_react14.useState)([]);
    const [ledgerSummary, setLedgerSummary] = (0, import_react14.useState)({
      totalMeals: 0,
      totalSpend: 0,
      averageMealCost: 0
    });
    const [monthlyInsights, setMonthlyInsights] = (0, import_react14.useState)({
      month: "",
      mostEatenDish: null,
      averageMealCost: 0
    });
    const [ledgerLoading, setLedgerLoading] = (0, import_react14.useState)(false);
    const debouncedSetSearchQuery = (0, import_react14.useMemo)(
      () => (0, import_debounce.default)((value) => setSearchQuery(value), 300),
      []
    );
    (0, import_react14.useEffect)(() => {
      return () => debouncedSetSearchQuery.cancel();
    }, [debouncedSetSearchQuery]);
    const checkReservationTime = () => {
      setIsReservationAllowed({
        day: isBookingOpenForMeal("day"),
        night: isBookingOpenForMeal("night")
      });
    };
    const fetchMesses = async (lat = null, lng = null, fetchAll = false) => {
      try {
        setLoading(true);
        setError("");
        let response;
        if (fetchAll || !lat || !lng) {
          console.log("Fetching all messes");
          response = await axios_default.get(`${import_meta3.env.VITE_BASE_URL}/mess/get-all-mess`, {
            withCredentials: true
          });
        } else {
          console.log(`Fetching nearby messes for lat: ${lat}, lng: ${lng}`);
          response = await axios_default.get(
            `${import_meta3.env.VITE_BASE_URL}/mess/get-mess-by-latlong?lat=${lat}&lng=${lng}`,
            { withCredentials: true }
          );
        }
        console.log("API response:", response.data);
        setMessData(response.data.messes || []);
      } catch (err) {
        console.error("Fetch messes error:", err);
        setError(err.response?.data?.message || "Failed to fetch messes.");
      } finally {
        setLoading(false);
      }
    };
    const fetchReservations = async () => {
      try {
        const response = await axios_default.get(
          `${import_meta3.env.VITE_BASE_URL}/user/reservations/today`,
          { withCredentials: true }
        );
        console.log("Today's reservations:", response.data);
        setReservedMesses(response.data.reservations || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch reservations.");
      }
    };
    const fetchEnrolledMess = async () => {
      try {
        const response = await axios_default.get(
          `${import_meta3.env.VITE_BASE_URL}/mess/get-enrolled-mess`,
          { withCredentials: true }
        );
        setEnrolledMess(response.data.userMess);
      } catch (err) {
        setEnrollmentError(err.response?.data?.message || "Failed to fetch enrolled mess.");
        if (err.response?.data?.message === "Request Not accepted yet" && err.response?.data?.userMess) {
          setEnrolledMess(err.response.data.userMess);
        }
      }
    };
    const fetchMealLedger = async (days = ledgerDays) => {
      try {
        setLedgerLoading(true);
        const response = await axios_default.get(
          `${import_meta3.env.VITE_BASE_URL}/user/meal-ledger?days=${days}`,
          { withCredentials: true }
        );
        setMealLedger(response.data.entries || []);
        setLedgerSummary(response.data.summary || { totalMeals: 0, totalSpend: 0, averageMealCost: 0 });
        setMonthlyInsights(
          response.data.monthlyInsights || { month: "", mostEatenDish: null, averageMealCost: 0 }
        );
      } catch (err) {
        console.error("Failed to fetch meal ledger:", err);
      } finally {
        setLedgerLoading(false);
      }
    };
    (0, import_react14.useEffect)(() => {
      checkReservationTime();
      const interval = setInterval(checkReservationTime, 6e4);
      setLoading(true);
      if (navigator.geolocation) {
        console.log("Requesting geolocation...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Geolocation success: lat=${latitude}, lng=${longitude}`);
            setLocation({ lat: latitude, lng: longitude });
            setShowAllMesses(false);
            fetchMesses(latitude, longitude, false);
            fetchReservations();
            fetchEnrolledMess();
            fetchMealLedger(ledgerDays);
          },
          (err) => {
            console.error("Geolocation error:", err);
            setError("Unable to get your location. Showing all messes instead.");
            setShowAllMesses(true);
            fetchMesses(null, null, true);
            fetchReservations();
            fetchEnrolledMess();
            fetchMealLedger(ledgerDays);
          },
          { timeout: 1e4 }
        );
      } else {
        console.error("Geolocation not supported");
        setError("Geolocation is not supported. Showing all messes instead.");
        setShowAllMesses(true);
        fetchMesses(null, null, true);
        fetchReservations();
        fetchEnrolledMess();
        fetchMealLedger(ledgerDays);
      }
      return () => clearInterval(interval);
    }, []);
    (0, import_react14.useEffect)(() => {
      fetchMealLedger(ledgerDays);
    }, [ledgerDays]);
    const handleToggleMessView = () => {
      setShowAllMesses((prev) => {
        const newShowAllMesses = !prev;
        console.log(`Toggling to ${newShowAllMesses ? "all messes" : "nearby messes"}`);
        if (newShowAllMesses) {
          fetchMesses(null, null, true);
        } else {
          console.log("Checking location for nearby messes...");
          if (location.lat && location.lng) {
            console.log(`Using current location: lat=${location.lat}, lng=${location.lng}`);
            fetchMesses(location.lat, location.lng, false);
          } else {
            console.log("Retrying geolocation for nearby messes...");
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                console.log(`Geolocation retry success: lat=${latitude}, lng=${longitude}`);
                setLocation({ lat: latitude, lng: longitude });
                fetchMesses(latitude, longitude, false);
              },
              (err) => {
                console.error("Geolocation retry error:", err);
                setError("Unable to get your location. Showing all messes instead.");
                setShowAllMesses(true);
                fetchMesses(null, null, true);
              },
              { timeout: 5e3 }
            );
          }
        }
        return newShowAllMesses;
      });
    };
    const handleCancelReservation = async (reservationId, messName, mealType) => {
      const now = /* @__PURE__ */ new Date();
      if (window.confirm(`Are you sure you want to cancel your ${mealType === "day" ? "lunch" : "dinner"} reservation at ${messName}?`)) {
        try {
          await axios_default.delete(
            `${import_meta3.env.VITE_BASE_URL}/user/reservations/cancel/${reservationId}`,
            { withCredentials: true }
          );
          y.success(`Reservation at ${messName} cancelled successfully!`);
          fetchReservations();
          fetchMealLedger(ledgerDays);
        } catch (err) {
          y.error(err.response?.data?.message || "Failed to cancel reservation.");
        }
      }
    };
    const handleMonthlyBooking = async (messName) => {
      const selectedMess = messData.find((mess) => mess.name === messName);
      try {
        const response = await axios_default.post(
          `${import_meta3.env.VITE_BASE_URL}/mess/${selectedMess._id}/join`,
          {},
          { withCredentials: true }
        );
        if (response.status === 200) {
          y.info(
            `To join ${messName}, please visit the mess owner at their location (${response.data.enrollment.messId.address}) and pay monthly charge.`
          );
          fetchEnrolledMess();
        }
      } catch (err) {
        if (err.response?.status === 400) {
          y.warn("Already registered for a mess!");
        } else if (err.response?.status === 500) {
          y.info("Enrolled! Please wait for the mess owner to accept your request.");
          fetchEnrolledMess();
        } else {
          y.error("Server error");
        }
      }
    };
    const handleDailyReservation = async (messId, mealType) => {
      const selectedMess = messData.find((mess) => mess._id === messId);
      if (!isBookingOpenForMeal(mealType)) {
        y.error(getBookingClosedMessage(mealType));
        return;
      }
      if (window.confirm(
        `Are you sure you want to reserve a ${mealType === "day" ? "lunch" : "dinner"} meal for today at ${selectedMess.name}? You can pay when you go to eat.`
      )) {
        try {
          const response = await axios_default.post(
            `${import_meta3.env.VITE_BASE_URL}/user/reserve`,
            { messId, mealType },
            { withCredentials: true }
          );
          y.success(response.data.message || `Reservation confirmed for ${mealType === "day" ? "lunch" : "dinner"} at ${selectedMess.name}! Please visit ${selectedMess.name} to eat and pay.`);
          fetchReservations();
          fetchMealLedger(ledgerDays);
        } catch (err) {
          y.error(err.response?.data?.message || `Failed to reserve ${mealType === "day" ? "lunch" : "dinner"} meal.`);
        }
      }
    };
    const handleEnrolledMessReservation = async (messId, mealType) => {
      console.log(`Handling reservation for enrolled mess: ${messId}, mealType: ${mealType}`);
      const messName = enrolledMess.messId?.name || "Unknown Mess";
      if (!isBookingOpenForMeal(mealType)) {
        y.error(getBookingClosedMessage(mealType));
        return;
      }
      if (window.confirm(
        `Are you sure you want to attend ${mealType === "day" ? "lunch" : "dinner"} at ${messName} today? You can pay when you go to eat.`
      )) {
        try {
          const endpoint = `${import_meta3.env.VITE_BASE_URL}/mess/attend/${messId}/${mealType}`;
          const response = await axios_default.post(endpoint, {}, { withCredentials: true });
          y.success(response.data.message || `Attendance confirmed for ${mealType === "day" ? "lunch" : "dinner"} at ${messName}! Please visit ${messName} to eat and pay.`);
          fetchReservations();
          fetchMealLedger(ledgerDays);
        } catch (err) {
          y.error(err.response?.data?.message || `Failed to reserve ${mealType === "day" ? "lunch" : "dinner"} meal.`);
        }
      }
    };
    const sortedMessOptions = (0, import_react14.useMemo)(() => {
      return [...messData].sort((a, b) => {
        const priceA = parseInt(a.price?.replace(/[^0-9]/g, "") || 0);
        const priceB = parseInt(b.price?.replace(/[^0-9]/g, "") || 0);
        return sortOption === "Price ascending" ? priceA - priceB : priceB - priceA;
      });
    }, [messData, sortOption]);
    const filteredMessOptions = (0, import_react14.useMemo)(() => {
      const normalizedQuery = searchQuery.trim().toLowerCase();
      if (!normalizedQuery) {
        return sortedMessOptions.filter((mess) => mess._id !== enrolledMess?.messId?._id);
      }
      const matchesSearchQuery = (mess) => {
        const messName = (mess.name || "").toLowerCase();
        const dayDishNames = mess?.menu?.dayMeal?.dishes || [];
        const nightDishNames = mess?.menu?.nightMeal?.dishes || [];
        const dishText = [...dayDishNames, ...nightDishNames].map((dish) => [dish?.name, ...dish?.items || []].filter(Boolean).join(" ")).join(" ").toLowerCase();
        return messName.includes(normalizedQuery) || dishText.includes(normalizedQuery);
      };
      return sortedMessOptions.filter(
        (mess) => mess._id !== enrolledMess?.messId?._id && matchesSearchQuery(mess)
      );
    }, [sortedMessOptions, searchQuery, enrolledMess]);
    const hasDayReservation = reservedMesses.some((res) => res.mealType === "day");
    const hasNightReservation = reservedMesses.some((res) => res.mealType === "night");
    const enrolledMessDayReservation = reservedMesses.some(
      (res) => res.messId === enrolledMess?.messId?._id && res.mealType === "day"
    );
    const enrolledMessNightReservation = reservedMesses.some(
      (res) => res.messId === enrolledMess?.messId?._id && res.mealType === "night"
    );
    const formatCurrency = (value) => `\u20B9${Number(value || 0).toFixed(2)}`;
    const formatMealType = (mealType) => mealType === "day" ? "Lunch" : "Dinner";
    const getStatusClasses = (status, type) => {
      if (type === "reservation") {
        return status === "cancelled" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700";
      }
      if (status === "attended") return "bg-green-100 text-green-700";
      if (status === "cancelled") return "bg-red-100 text-red-700";
      return "bg-slate-100 text-slate-700";
    };
    const getAttendanceLabel = (entry) => {
      if (entry.attendanceStatus === "not_marked" || entry.attendanceStatus === "not_applicable") {
        return "Not marked";
      }
      return entry.attendanceStatus;
    };
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col" }, /* @__PURE__ */ React.createElement(UserDashboardNavbar_default, null), /* @__PURE__ */ React.createElement(Lt, { position: "top-right", autoClose: 3e3, hideProgressBar: false, newestOnTop: true, closeOnClick: true, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true }), /* @__PURE__ */ React.createElement("div", { className: "flex flex-1 flex-col mt-20 p-4 sm:p-6" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4 sm:mb-6 animate-slideIn" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-xl p-4 flex items-center gap-3" }, /* @__PURE__ */ React.createElement(import_lucide_react3.Clock, { className: "w-5 h-5 text-amber-600" }), /* @__PURE__ */ React.createElement("div", { className: "text-amber-800 text-sm sm:text-base" }, /* @__PURE__ */ React.createElement("span", { className: "font-semibold" }, "Reservation Times:"), /* @__PURE__ */ React.createElement("span", { className: "ml-2 block sm:inline" }, "Lunch before 11 AM \u2022 Dinner before 7 PM")))), /* @__PURE__ */ React.createElement("div", { className: "mb-6 sm:mb-8 animate-fadeIn" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl sm:text-3xl font-bold text-gradient mb-4 sm:mb-6 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(import_lucide_react3.Star, { className: "w-8 h-8 text-yellow-500" }), "Your Enrolled Mess"), loading ? /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "spinner mx-auto mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "Loading enrolled mess...")) : enrollmentError === "Request Not accepted yet" && enrolledMess ? /* @__PURE__ */ React.createElement("div", { className: "card p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold" }, /* @__PURE__ */ React.createElement(import_lucide_react3.Hourglass, { className: "w-8 h-8" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-gray-800 mb-1" }, enrolledMess.messId?.name || "Pending Mess"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 mb-2 flex items-center gap-1" }, /* @__PURE__ */ React.createElement(import_lucide_react3.MapPin, { className: "w-4 h-4" }), enrolledMess.messId?.address || "No address available"), /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800" }, "Enrollment Pending")))) : enrollmentError ? /* @__PURE__ */ React.createElement("div", { className: "card p-6 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4" }, "\u{1F3E0}"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-lg" }, enrollmentError === "User is not enrolled in any mess" ? "You are not enrolled in any mess yet." : enrollmentError)) : enrolledMess ? /* @__PURE__ */ React.createElement("div", { className: "card p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold" }, enrolledMess.messId.name?.charAt(0) || "M"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-gray-800 mb-1" }, enrolledMess.messId.name || "Unknown Mess"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 mb-2 flex items-center gap-1" }, /* @__PURE__ */ React.createElement(import_lucide_react3.MapPin, { className: "w-4 h-4" }), enrolledMess.messId.address || "No address available"), /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800" }, "Monthly Member"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse" }), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold text-yellow-800" }, "Lunch")), enrolledMess.messId?.menu?.dayMeal?.dishes?.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, enrolledMess.messId.menu.dayMeal.dishes.slice(0, 2).map((dish, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, dish.name), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-green-600" }, "\u20B9", dish.price))), enrolledMess.messId.menu.dayMeal.dishes.length > 2 && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "+", enrolledMess.messId.menu.dayMeal.dishes.length - 2, " more items")) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No lunch available")), /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse" }), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold text-blue-800" }, "Dinner")), enrolledMess.messId?.menu?.nightMeal?.dishes?.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, enrolledMess.messId.menu.nightMeal.dishes.slice(0, 2).map((dish, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, dish.name), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-green-600" }, "\u20B9", dish.price))), enrolledMess.messId.menu.nightMeal.dishes.length > 2 && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "+", enrolledMess.messId.menu.nightMeal.dishes.length - 2, " more items")) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No dinner available"))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, enrolledMessDayReservation ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600" }, "Lunch Reserved \u2713") : /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => handleEnrolledMessReservation(enrolledMess.messId._id, "day"),
        className: `btn-success text-sm flex items-center justify-center gap-1 ${!isReservationAllowed.day ? "opacity-50 cursor-not-allowed" : ""}`,
        disabled: !isReservationAllowed.day
      },
      /* @__PURE__ */ React.createElement(import_lucide_react3.Utensils, { className: "w-3 h-3" }),
      "Attend Lunch"
    ), enrolledMessNightReservation ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600" }, "Dinner Reserved \u2713") : /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => handleEnrolledMessReservation(enrolledMess.messId._id, "night"),
        className: `bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm flex items-center justify-center gap-1 ${!isReservationAllowed.night ? "opacity-50 cursor-not-allowed" : ""}`,
        disabled: !isReservationAllowed.night
      },
      /* @__PURE__ */ React.createElement(import_lucide_react3.Utensils, { className: "w-3 h-3" }),
      "Attend Dinner"
    ))) : null), /* @__PURE__ */ React.createElement("div", { className: "mb-8 animate-fadeIn animate-delay-200" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl font-bold text-gradient mb-6 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(import_lucide_react3.Calendar, { className: "w-8 h-8 text-blue-500" }), "Today's Reservations"), loading ? /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "spinner mx-auto mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "Loading reservations...")) : reservedMesses.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, reservedMesses.map((reservation, index) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: index,
        className: "card p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 animate-scaleIn",
        style: { animationDelay: `${index * 100}ms` }
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 mb-4" }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `w-w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${reservation.mealType === "day" ? "bg-gradient-to-r from-yellow-500 to-orange-500" : "bg-gradient-to-r from-blue-500 to-indigo-500"}`
        },
        /* @__PURE__ */ React.createElement(import_lucide_react3.Utensils, { className: "w-6 h-6" })
      ), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-gray-800" }, reservation.messName || "Unknown Mess"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600" }, reservation.mealType === "day" ? "Lunch" : "Dinner"))),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => handleCancelReservation(reservation.reservationId, reservation.messName, reservation.mealType),
          className: `w-full btn-danger text-sm`
        },
        "Cancel Reservation"
      )
    ))) : /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4 animate-bounce" }, "\u{1F4C5}"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-lg" }, "No reservations for today."))), /* @__PURE__ */ React.createElement("div", { className: "mb-8 animate-fadeIn animate-delay-300" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl font-bold text-gradient flex items-center gap-2" }, /* @__PURE__ */ React.createElement(import_lucide_react3.BookOpen, { className: "w-8 h-8 text-indigo-600" }), "Personal Meal Ledger"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, [7, 30, 90].map((days) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: days,
        onClick: () => setLedgerDays(days),
        className: `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${ledgerDays === days ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg" : "bg-white text-slate-700 border border-slate-200 hover:border-indigo-300"}`
      },
      "Last ",
      days,
      " days"
    )))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "card p-5 bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-emerald-700 font-semibold" }, "Total Spend (", ledgerDays, " days)"), /* @__PURE__ */ React.createElement(import_lucide_react3.IndianRupee, { className: "w-5 h-5 text-emerald-700" })), /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold text-emerald-900" }, formatCurrency(ledgerSummary.totalSpend)), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-emerald-700 mt-1" }, "Across ", ledgerSummary.totalMeals, " meal entries")), /* @__PURE__ */ React.createElement("div", { className: "card p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-blue-700 font-semibold" }, "Monthly Most Eaten Dish"), /* @__PURE__ */ React.createElement(import_lucide_react3.BarChart3, { className: "w-5 h-5 text-blue-700" })), /* @__PURE__ */ React.createElement("p", { className: "text-xl font-bold text-blue-900 truncate" }, monthlyInsights.mostEatenDish || "No data yet"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-blue-700 mt-1" }, monthlyInsights.month || "Current month")), /* @__PURE__ */ React.createElement("div", { className: "card p-5 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-amber-700 font-semibold" }, "Monthly Avg Meal Cost"), /* @__PURE__ */ React.createElement(import_lucide_react3.IndianRupee, { className: "w-5 h-5 text-amber-700" })), /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold text-amber-900" }, formatCurrency(monthlyInsights.averageMealCost)), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-amber-700 mt-1" }, "Average for ", monthlyInsights.month || "this month"))), /* @__PURE__ */ React.createElement("div", { className: "card overflow-hidden" }, ledgerLoading ? /* @__PURE__ */ React.createElement("div", { className: "p-8 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "spinner mx-auto mb-3" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "Loading ledger...")) : mealLedger.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "p-8 text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "No meal history found for the selected range.")) : /* @__PURE__ */ React.createElement("div", { className: "max-h-[320px] overflow-auto" }, /* @__PURE__ */ React.createElement("table", { className: "min-w-full text-sm" }, /* @__PURE__ */ React.createElement("thead", { className: "sticky top-0 bg-slate-50 text-slate-700 uppercase text-xs tracking-wide" }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Date"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Mess"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Meal"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Dish"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Price"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Reservation"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Attendance"))), /* @__PURE__ */ React.createElement("tbody", null, mealLedger.map((entry) => /* @__PURE__ */ React.createElement("tr", { key: entry.id, className: "border-t border-slate-100 hover:bg-slate-50" }, /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3 text-slate-700" }, new Date(entry.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3 font-medium text-slate-800" }, entry.messName), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3 text-slate-700" }, formatMealType(entry.mealType)), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3 text-slate-700" }, entry.dishNames?.length > 0 ? entry.dishNames.join(", ") : "Not available"), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3 font-semibold text-slate-800" }, formatCurrency(entry.totalPrice)), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3" }, /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(entry.reservationStatus, "reservation")}` }, entry.reservationStatus)), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3" }, /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(entry.attendanceStatus, "attendance")}` }, getAttendanceLabel(entry)))))))))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-center mb-8 gap-4 animate-slideIn animate-delay-300" }, /* @__PURE__ */ React.createElement("div", { className: "relative w-full md:w-1/2" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "Search mess options...",
        onChange: (e) => debouncedSetSearchQuery(e.target.value),
        className: "w-full p-4 pl-12 bg-white/80 backdrop-blur-sm border-2 border-transparent rounded-full shadow-lg focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" }, "\u{1F50D}")), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, ["Price ascending", "Price descending"].map((option) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: option,
        className: `px-6 py-3 rounded-full font-medium transition-all duration-300 ${sortOption === option ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" : "bg-white/80 text-gray-700 hover:bg-white shadow-md hover:shadow-lg"}`,
        onClick: () => setSortOption(option)
      },
      option === "Price ascending" ? "Price \u2191" : "Price \u2193"
    )), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `px-6 py-3 rounded-full font-medium transition-all duration-300 ${showAllMesses ? "bg-white/80 text-gray-700 hover:bg-white shadow-md hover:shadow-lg" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"}`,
        onClick: handleToggleMessView
      },
      showAllMesses ? "Show Nearby Messes" : "Show All Messes"
    ))), loading && /* @__PURE__ */ React.createElement("div", { className: "text-center p-12" }, /* @__PURE__ */ React.createElement("div", { className: "spinner mx-auto mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-lg" }, "Loading mess options...")), error && /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center bg-red-50 border-red-200" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4" }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("p", { className: "text-red-600 text-lg" }, error), error.includes("location") && /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "mt-4 px-6 py-3 bg-blue-500 text-white rounded-full",
        onClick: () => {
          setError("");
          setLoading(true);
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ lat: latitude, lng: longitude });
              setShowAllMesses(false);
              fetchMesses(latitude, longitude, false);
            },
            (err) => {
              console.error("Geolocation retry error:", err);
              setError("Unable to get your location. Showing all messes instead.");
              setShowAllMesses(true);
              fetchMesses(null, null, true);
            },
            { timeout: 5e3 }
          );
        }
      },
      "Retry Location"
    )), !loading && !error && /* @__PURE__ */ React.createElement("div", { className: "animate-fadeIn animate-delay-500" }, (hasDayReservation || hasNightReservation) && /* @__PURE__ */ React.createElement("div", { className: "mb-6 p-4 bg-green-100 border border-green-200 rounded-xl" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-green-800" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }), /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, hasDayReservation && hasNightReservation ? "You have reservations for both lunch and dinner today!" : hasDayReservation ? "You have a lunch reservation today!" : "You have a dinner reservation today!"))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" }, filteredMessOptions.length > 0 ? filteredMessOptions.map((mess, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "animate-scaleIn", style: { animationDelay: `${index * 100}ms` } }, /* @__PURE__ */ React.createElement(
      MessCard_default,
      {
        mess,
        onMonthlyBooking: handleMonthlyBooking,
        onDailyReservation: handleDailyReservation,
        isReservationAllowed,
        reservedMesses
      }
    ))) : /* @__PURE__ */ React.createElement("div", { className: "col-span-full card p-12 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4 animate-bounce" }, "\u{1F50D}"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-xl" }, searchQuery.trim() ? "No results found." : showAllMesses ? "No messes found." : "No messes found near your location. Try showing all messes."))))));
  }
  var UserDashboard_default = UserDashboard;
})();
