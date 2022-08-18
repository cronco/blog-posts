/******/ (function(modules) {
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/ /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
        };
        /******/ /******/ // Execute the module function
        /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/ /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/ /******/ // Return the exports of the module
        /******/ return module.exports;
    /******/ }
    /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/ /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/ /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    /******/ };
    /******/ /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        /******/ Object.defineProperty(exports, "__esModule", {
            value: true
        });
    /******/ };
    /******/ /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function(value, mode) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        /******/ if (mode & 2 && typeof value != "string") for(var key in value)__webpack_require__.d(ns, key, (function(key) {
            return value[key];
        }).bind(null, key));
        /******/ return ns;
    /******/ };
    /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function(module) {
        /******/ var getter = module && module.__esModule ? /******/ function getDefault() {
            return module["default"];
        } : /******/ function getModuleExports() {
            return module;
        };
        /******/ __webpack_require__.d(getter, "a", getter);
        /******/ return getter;
    /******/ };
    /******/ /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/ /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "";
    /******/ /******/ /******/ // Load entry module and return exports
    /******/ return __webpack_require__(__webpack_require__.s = 259);
/******/ })([
    /* 0 */ /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() {
            return __extends;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() {
            return __assign;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() {
            return __rest;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() {
            return __decorate;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() {
            return __param;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() {
            return __metadata;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() {
            return __awaiter;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() {
            return __generator;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() {
            return __createBinding;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() {
            return __exportStar;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() {
            return __values;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() {
            return __read;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() {
            return __spread;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() {
            return __spreadArrays;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() {
            return __await;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() {
            return __asyncGenerator;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() {
            return __asyncDelegator;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() {
            return __asyncValues;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() {
            return __makeTemplateObject;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() {
            return __importStar;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() {
            return __importDefault;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() {
            return __classPrivateFieldGet;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() {
            return __classPrivateFieldSet;
        });
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
            };
            return extendStatics(d, b);
        };
        function __extends(d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for(var s, i = 1, n = arguments.length; i < n; i++){
                    s = arguments[i];
                    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __rest(s, e) {
            var t = {};
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function") {
                for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
        }
        function __decorate(decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }
        function __param(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        }
        function __metadata(metadataKey, metadataValue) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
        }
        function __awaiter(thisArg, _arguments, P, generator) {
            function adopt(value) {
                return value instanceof P ? value : new P(function(resolve) {
                    resolve(value);
                });
            }
            return new (P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        }
        function __generator(thisArg, body) {
            var _ = {
                label: 0,
                sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            }, f, y, t, g;
            return g = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
            }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                return this;
            }), g;
            function verb(n) {
                return function(v) {
                    return step([
                        n,
                        v
                    ]);
                };
            }
            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while(_)try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [
                        op[0] & 2,
                        t.value
                    ];
                    switch(op[0]){
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return {
                                value: op[1],
                                done: false
                            };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [
                                0
                            ];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [
                        6,
                        e
                    ];
                    y = 0;
                } finally{
                    f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: true
                };
            }
        }
        function __createBinding(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
        }
        function __exportStar(m, exports) {
            for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        function __values(o) {
            var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
            if (m) return m.call(o);
            if (o && typeof o.length === "number") return {
                next: function() {
                    if (o && i >= o.length) o = void 0;
                    return {
                        value: o && o[i++],
                        done: !o
                    };
                }
            };
            throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function __read(o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o), r, ar = [], e;
            try {
                while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
            } catch (error) {
                e = {
                    error: error
                };
            } finally{
                try {
                    if (r && !r.done && (m = i["return"])) m.call(i);
                } finally{
                    if (e) throw e.error;
                }
            }
            return ar;
        }
        function __spread() {
            for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
            return ar;
        }
        function __spreadArrays() {
            for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
            for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
            return r;
        }
        function __await(v) {
            return this instanceof __await ? (this.v = v, this) : new __await(v);
        }
        function __asyncGenerator(thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var g = generator.apply(thisArg, _arguments || []), i, q = [];
            return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                return this;
            }, i;
            function verb(n) {
                if (g[n]) i[n] = function(v) {
                    return new Promise(function(a, b) {
                        q.push([
                            n,
                            v,
                            a,
                            b
                        ]) > 1 || resume(n, v);
                    });
                };
            }
            function resume(n, v) {
                try {
                    step(g[n](v));
                } catch (e) {
                    settle(q[0][3], e);
                }
            }
            function step(r) {
                r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
            }
            function fulfill(value) {
                resume("next", value);
            }
            function reject(value) {
                resume("throw", value);
            }
            function settle(f, v) {
                if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
            }
        }
        function __asyncDelegator(o) {
            var i, p;
            return i = {}, verb("next"), verb("throw", function(e) {
                throw e;
            }), verb("return"), i[Symbol.iterator] = function() {
                return this;
            }, i;
            function verb(n, f) {
                i[n] = o[n] ? function(v) {
                    return (p = !p) ? {
                        value: __await(o[n](v)),
                        done: n === "return"
                    } : f ? f(v) : v;
                } : f;
            }
        }
        function __asyncValues(o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var m = o[Symbol.asyncIterator], i;
            return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                return this;
            }, i);
            function verb(n) {
                i[n] = o[n] && function(v) {
                    return new Promise(function(resolve, reject) {
                        v = o[n](v), settle(resolve, reject, v.done, v.value);
                    });
                };
            }
            function settle(resolve, reject, d, v) {
                Promise.resolve(v).then(function(v) {
                    resolve({
                        value: v,
                        done: d
                    });
                }, reject);
            }
        }
        function __makeTemplateObject(cooked, raw) {
            if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
                value: raw
            });
            else cooked.raw = raw;
            return cooked;
        }
        function __importStar(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) {
                for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result.default = mod;
            return result;
        }
        function __importDefault(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        }
        function __classPrivateFieldGet(receiver, privateMap) {
            if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
            return privateMap.get(receiver);
        }
        function __classPrivateFieldSet(receiver, privateMap, value) {
            if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
            privateMap.set(receiver, value);
            return value;
        }
    /***/ },
    /* 1 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(36);
    /***/ },
    ,
    /* 3 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.FIND_PREV = exports.FIND_NEXT = exports.FIND_START = exports.URLS_PASTE = exports.URLS_YANK = exports.ZOOM_NEUTRAL = exports.ZOOM_OUT = exports.ZOOM_IN = exports.TAB_TOGGLE_READER = exports.TAB_DUPLICATE = exports.TAB_TOGGLE_PINNED = exports.TAB_UNPIN = exports.TAB_PIN = exports.TAB_RELOAD = exports.TAB_PREV_SEL = exports.TAB_LAST = exports.TAB_FIRST = exports.TAB_NEXT = exports.TAB_PREV = exports.TAB_REOPEN = exports.TAB_CLOSE_RIGHT = exports.TAB_CLOSE_FORCE = exports.TAB_CLOSE = exports.PAGE_HOME = exports.PAGE_SOURCE = exports.FOCUS_INPUT = exports.NAVIGATE_ROOT = exports.NAVIGATE_PARENT = exports.NAVIGATE_LINK_NEXT = exports.NAVIGATE_LINK_PREV = exports.NAVIGATE_HISTORY_NEXT = exports.NAVIGATE_HISTORY_PREV = exports.FOLLOW_START = exports.SCROLL_END = exports.SCROLL_HOME = exports.SCROLL_BOTTOM = exports.SCROLL_TOP = exports.SCROLL_PAGES = exports.SCROLL_HORIZONALLY = exports.SCROLL_VERTICALLY = exports.COMMAND_SHOW_ADDBOOKMARK = exports.COMMAND_SHOW_BUFFER = exports.COMMAND_SHOW_WINOPEN = exports.COMMAND_SHOW_TABOPEN = exports.COMMAND_SHOW_OPEN = exports.COMMAND_SHOW = exports.ADDON_TOGGLE_ENABLED = exports.ADDON_DISABLE = exports.ADDON_ENABLE = exports.CANCEL = void 0;
        exports.isNRepeatable = exports.valueOf = exports.INTERNAL_OPEN_URL = exports.REPEAT_LAST = exports.MARK_JUMP_PREFIX = exports.MARK_SET_PREFIX = void 0;
        exports.CANCEL = "cancel";
        exports.ADDON_ENABLE = "addon.enable";
        exports.ADDON_DISABLE = "addon.disable";
        exports.ADDON_TOGGLE_ENABLED = "addon.toggle.enabled";
        exports.COMMAND_SHOW = "command.show";
        exports.COMMAND_SHOW_OPEN = "command.show.open";
        exports.COMMAND_SHOW_TABOPEN = "command.show.tabopen";
        exports.COMMAND_SHOW_WINOPEN = "command.show.winopen";
        exports.COMMAND_SHOW_BUFFER = "command.show.buffer";
        exports.COMMAND_SHOW_ADDBOOKMARK = "command.show.addbookmark";
        exports.SCROLL_VERTICALLY = "scroll.vertically";
        exports.SCROLL_HORIZONALLY = "scroll.horizonally";
        exports.SCROLL_PAGES = "scroll.pages";
        exports.SCROLL_TOP = "scroll.top";
        exports.SCROLL_BOTTOM = "scroll.bottom";
        exports.SCROLL_HOME = "scroll.home";
        exports.SCROLL_END = "scroll.end";
        exports.FOLLOW_START = "follow.start";
        exports.NAVIGATE_HISTORY_PREV = "navigate.history.prev";
        exports.NAVIGATE_HISTORY_NEXT = "navigate.history.next";
        exports.NAVIGATE_LINK_PREV = "navigate.link.prev";
        exports.NAVIGATE_LINK_NEXT = "navigate.link.next";
        exports.NAVIGATE_PARENT = "navigate.parent";
        exports.NAVIGATE_ROOT = "navigate.root";
        exports.FOCUS_INPUT = "focus.input";
        exports.PAGE_SOURCE = "page.source";
        exports.PAGE_HOME = "page.home";
        exports.TAB_CLOSE = "tabs.close";
        exports.TAB_CLOSE_FORCE = "tabs.close.force";
        exports.TAB_CLOSE_RIGHT = "tabs.close.right";
        exports.TAB_REOPEN = "tabs.reopen";
        exports.TAB_PREV = "tabs.prev";
        exports.TAB_NEXT = "tabs.next";
        exports.TAB_FIRST = "tabs.first";
        exports.TAB_LAST = "tabs.last";
        exports.TAB_PREV_SEL = "tabs.prevsel";
        exports.TAB_RELOAD = "tabs.reload";
        exports.TAB_PIN = "tabs.pin";
        exports.TAB_UNPIN = "tabs.unpin";
        exports.TAB_TOGGLE_PINNED = "tabs.pin.toggle";
        exports.TAB_DUPLICATE = "tabs.duplicate";
        exports.TAB_TOGGLE_READER = "tabs.reader.toggle";
        exports.ZOOM_IN = "zoom.in";
        exports.ZOOM_OUT = "zoom.out";
        exports.ZOOM_NEUTRAL = "zoom.neutral";
        exports.URLS_YANK = "urls.yank";
        exports.URLS_PASTE = "urls.paste";
        exports.FIND_START = "find.start";
        exports.FIND_NEXT = "find.next";
        exports.FIND_PREV = "find.prev";
        exports.MARK_SET_PREFIX = "mark.set.prefix";
        exports.MARK_JUMP_PREFIX = "mark.jump.prefix";
        exports.REPEAT_LAST = "repeat.last";
        exports.INTERNAL_OPEN_URL = "internal.open.url";
        const assertOptionalBoolean = (obj, name)=>{
            if (Object.prototype.hasOwnProperty.call(obj, name) && typeof obj[name] !== "boolean") throw new TypeError(`Not a boolean parameter: '${name} (${typeof obj[name]})'`);
        };
        const assertOptionalString = (obj, name, values)=>{
            if (Object.prototype.hasOwnProperty.call(obj, name)) {
                const value = obj[name];
                if (typeof value !== "string") throw new TypeError(`Not a string parameter: '${name}' (${typeof value})`);
                if (values && values.length && values.indexOf(value) === -1) throw new TypeError(`Invalid parameter for '${name}': '${value}'`);
            }
        };
        const assertRequiredNumber = (obj, name)=>{
            if (!Object.prototype.hasOwnProperty.call(obj, name) || typeof obj[name] !== "number") throw new TypeError(`Missing number parameter: '${name}`);
        };
        const assertRequiredString = (obj, name)=>{
            if (!Object.prototype.hasOwnProperty.call(obj, name) || typeof obj[name] !== "string") throw new TypeError(`Missing string parameter: '${name}`);
        };
        const valueOf = (o)=>{
            if (!Object.prototype.hasOwnProperty.call(o, "type")) throw new TypeError(`Missing 'type' field`);
            switch(o.type){
                case exports.COMMAND_SHOW_OPEN:
                case exports.COMMAND_SHOW_TABOPEN:
                case exports.COMMAND_SHOW_WINOPEN:
                case exports.COMMAND_SHOW_ADDBOOKMARK:
                    assertOptionalBoolean(o, "alter");
                    return {
                        type: o.type,
                        alter: Boolean(o.alter)
                    };
                case exports.SCROLL_VERTICALLY:
                case exports.SCROLL_HORIZONALLY:
                case exports.SCROLL_PAGES:
                    assertRequiredNumber(o, "count");
                    return {
                        type: o.type,
                        count: Number(o.count)
                    };
                case exports.FOLLOW_START:
                    assertOptionalBoolean(o, "newTab");
                    assertOptionalBoolean(o, "background");
                    return {
                        type: exports.FOLLOW_START,
                        newTab: Boolean(typeof o.newTab === "undefined" ? false : o.newTab),
                        background: Boolean(typeof o.background === "undefined" ? true : o.background)
                    };
                case exports.PAGE_HOME:
                    assertOptionalBoolean(o, "newTab");
                    return {
                        type: exports.PAGE_HOME,
                        newTab: Boolean(typeof o.newTab === "undefined" ? false : o.newTab)
                    };
                case exports.TAB_CLOSE:
                    assertOptionalString(o, "select", [
                        "left",
                        "right"
                    ]);
                    return {
                        type: exports.TAB_CLOSE,
                        select: typeof o.select === "undefined" ? "right" : o.select
                    };
                case exports.TAB_RELOAD:
                    assertOptionalBoolean(o, "cache");
                    return {
                        type: exports.TAB_RELOAD,
                        cache: Boolean(typeof o.cache === "undefined" ? false : o.cache)
                    };
                case exports.URLS_PASTE:
                    assertOptionalBoolean(o, "newTab");
                    return {
                        type: exports.URLS_PASTE,
                        newTab: Boolean(typeof o.newTab === "undefined" ? false : o.newTab)
                    };
                case exports.INTERNAL_OPEN_URL:
                    assertOptionalBoolean(o, "newTab");
                    assertOptionalBoolean(o, "newWindow");
                    assertOptionalBoolean(o, "background");
                    assertRequiredString(o, "url");
                    return {
                        type: exports.INTERNAL_OPEN_URL,
                        url: o.url,
                        newTab: Boolean(typeof o.newTab === "undefined" ? false : o.newTab),
                        newWindow: Boolean(typeof o.newWindow === "undefined" ? false : o.newWindow),
                        background: Boolean(typeof o.background === "undefined" ? true : o.background)
                    };
                case exports.CANCEL:
                case exports.ADDON_ENABLE:
                case exports.ADDON_DISABLE:
                case exports.ADDON_TOGGLE_ENABLED:
                case exports.COMMAND_SHOW:
                case exports.COMMAND_SHOW_BUFFER:
                case exports.SCROLL_TOP:
                case exports.SCROLL_BOTTOM:
                case exports.SCROLL_HOME:
                case exports.SCROLL_END:
                case exports.NAVIGATE_HISTORY_PREV:
                case exports.NAVIGATE_HISTORY_NEXT:
                case exports.NAVIGATE_LINK_PREV:
                case exports.NAVIGATE_LINK_NEXT:
                case exports.NAVIGATE_PARENT:
                case exports.NAVIGATE_ROOT:
                case exports.FOCUS_INPUT:
                case exports.PAGE_SOURCE:
                case exports.TAB_CLOSE_FORCE:
                case exports.TAB_CLOSE_RIGHT:
                case exports.TAB_REOPEN:
                case exports.TAB_PREV:
                case exports.TAB_NEXT:
                case exports.TAB_FIRST:
                case exports.TAB_LAST:
                case exports.TAB_PREV_SEL:
                case exports.TAB_PIN:
                case exports.TAB_UNPIN:
                case exports.TAB_TOGGLE_PINNED:
                case exports.TAB_DUPLICATE:
                case exports.TAB_TOGGLE_READER:
                case exports.ZOOM_IN:
                case exports.ZOOM_OUT:
                case exports.ZOOM_NEUTRAL:
                case exports.URLS_YANK:
                case exports.FIND_START:
                case exports.FIND_NEXT:
                case exports.FIND_PREV:
                case exports.MARK_SET_PREFIX:
                case exports.MARK_JUMP_PREFIX:
                case exports.REPEAT_LAST:
                    return {
                        type: o.type
                    };
            }
            throw new TypeError("Unknown operation type: " + o.type);
        };
        exports.valueOf = valueOf;
        const isNRepeatable = (type)=>{
            switch(type){
                case exports.SCROLL_VERTICALLY:
                case exports.SCROLL_HORIZONALLY:
                case exports.SCROLL_PAGES:
                case exports.NAVIGATE_HISTORY_PREV:
                case exports.NAVIGATE_HISTORY_NEXT:
                case exports.NAVIGATE_PARENT:
                case exports.TAB_CLOSE:
                case exports.TAB_CLOSE_FORCE:
                case exports.TAB_CLOSE_RIGHT:
                case exports.TAB_REOPEN:
                case exports.TAB_PREV:
                case exports.TAB_NEXT:
                case exports.TAB_DUPLICATE:
                case exports.ZOOM_IN:
                case exports.ZOOM_OUT:
                case exports.URLS_PASTE:
                case exports.FIND_NEXT:
                case exports.FIND_PREV:
                case exports.REPEAT_LAST:
                    return true;
            }
            return false;
        };
        exports.isNRepeatable = isNRepeatable;
    /***/ },
    /* 4 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.valueOf = exports.NAVIGATE_LINK_PREV = exports.NAVIGATE_LINK_NEXT = exports.NAVIGATE_HISTORY_PREV = exports.NAVIGATE_HISTORY_NEXT = exports.CONSOLE_FRAME_MESSAGE = exports.SETTINGS_QUERY = exports.SETTINGS_CHANGED = exports.OPEN_URL = exports.ADDON_TOGGLE_ENABLED = exports.ADDON_ENABLED_RESPONSE = exports.ADDON_ENABLED_QUERY = exports.FIND_CLEAR_SELECTION = exports.FIND_PREV = exports.FIND_NEXT = exports.TAB_SCROLL_TO = exports.MARK_JUMP_GLOBAL = exports.MARK_SET_GLOBAL = exports.FOLLOW_KEY_PRESS = exports.FOLLOW_ACTIVATE = exports.FOLLOW_REMOVE_HINTS = exports.FOLLOW_SHOW_HINTS = exports.FOLLOW_CREATE_HINTS = exports.FOLLOW_RESPONSE_COUNT_TARGETS = exports.FOLLOW_REQUEST_COUNT_TARGETS = exports.FOLLOW_START = exports.CONSOLE_RESIZE = exports.CONSOLE_GET_PROPERTIES = exports.CONSOLE_REQUEST_TABS = exports.CONSOLE_REQUEST_HISTORY = exports.CONSOLE_REQUEST_BOOKMARKS = exports.CONSOLE_REQUEST_SEARCH_ENGINES_MESSAGE = exports.CONSOLE_GET_COMPLETION_TYPES = exports.CONSOLE_HIDE = exports.CONSOLE_SHOW_FIND = exports.CONSOLE_SHOW_INFO = exports.CONSOLE_SHOW_ERROR = exports.CONSOLE_SHOW_COMMAND = exports.CONSOLE_ENTER_FIND = exports.CONSOLE_ENTER_COMMAND = exports.CONSOLE_UNFOCUS = exports.BACKGROUND_OPERATION = void 0;
        exports.BACKGROUND_OPERATION = "background.operation";
        exports.CONSOLE_UNFOCUS = "console.unfocus";
        exports.CONSOLE_ENTER_COMMAND = "console.enter.command";
        exports.CONSOLE_ENTER_FIND = "console.enter.find";
        exports.CONSOLE_SHOW_COMMAND = "console.show.command";
        exports.CONSOLE_SHOW_ERROR = "console.show.error";
        exports.CONSOLE_SHOW_INFO = "console.show.info";
        exports.CONSOLE_SHOW_FIND = "console.show.find";
        exports.CONSOLE_HIDE = "console.hide";
        exports.CONSOLE_GET_COMPLETION_TYPES = "console.get.completion.types";
        exports.CONSOLE_REQUEST_SEARCH_ENGINES_MESSAGE = "console.qresut.searchEngines";
        exports.CONSOLE_REQUEST_BOOKMARKS = "console.request.bookmarks";
        exports.CONSOLE_REQUEST_HISTORY = "console.request.history";
        exports.CONSOLE_REQUEST_TABS = "console.request.tabs";
        exports.CONSOLE_GET_PROPERTIES = "console.get.properties";
        exports.CONSOLE_RESIZE = "console.resize";
        exports.FOLLOW_START = "follow.start";
        exports.FOLLOW_REQUEST_COUNT_TARGETS = "follow.request.count.targets";
        exports.FOLLOW_RESPONSE_COUNT_TARGETS = "follow.response.count.targets";
        exports.FOLLOW_CREATE_HINTS = "follow.create.hints";
        exports.FOLLOW_SHOW_HINTS = "follow.update.hints";
        exports.FOLLOW_REMOVE_HINTS = "follow.remove.hints";
        exports.FOLLOW_ACTIVATE = "follow.activate";
        exports.FOLLOW_KEY_PRESS = "follow.key.press";
        exports.MARK_SET_GLOBAL = "mark.set.global";
        exports.MARK_JUMP_GLOBAL = "mark.jump.global";
        exports.TAB_SCROLL_TO = "tab.scroll.to";
        exports.FIND_NEXT = "find.next";
        exports.FIND_PREV = "find.prev";
        exports.FIND_CLEAR_SELECTION = "find.clear.selection";
        exports.ADDON_ENABLED_QUERY = "addon.enabled.query";
        exports.ADDON_ENABLED_RESPONSE = "addon.enabled.response";
        exports.ADDON_TOGGLE_ENABLED = "addon.toggle.enabled";
        exports.OPEN_URL = "open.url";
        exports.SETTINGS_CHANGED = "settings.changed";
        exports.SETTINGS_QUERY = "settings.query";
        exports.CONSOLE_FRAME_MESSAGE = "console.frame.message";
        exports.NAVIGATE_HISTORY_NEXT = "navigate.history.next";
        exports.NAVIGATE_HISTORY_PREV = "navigate.history.prev";
        exports.NAVIGATE_LINK_NEXT = "navigate.link.next";
        exports.NAVIGATE_LINK_PREV = "navigate.link.prev";
        const valueOf = (o)=>{
            switch(o.type){
                case exports.CONSOLE_UNFOCUS:
                case exports.CONSOLE_ENTER_COMMAND:
                case exports.CONSOLE_ENTER_FIND:
                case exports.CONSOLE_SHOW_COMMAND:
                case exports.CONSOLE_SHOW_ERROR:
                case exports.CONSOLE_SHOW_INFO:
                case exports.CONSOLE_SHOW_FIND:
                case exports.CONSOLE_HIDE:
                case exports.FOLLOW_START:
                case exports.FOLLOW_REQUEST_COUNT_TARGETS:
                case exports.FOLLOW_RESPONSE_COUNT_TARGETS:
                case exports.FOLLOW_CREATE_HINTS:
                case exports.FOLLOW_SHOW_HINTS:
                case exports.FOLLOW_REMOVE_HINTS:
                case exports.FOLLOW_ACTIVATE:
                case exports.FOLLOW_KEY_PRESS:
                case exports.MARK_SET_GLOBAL:
                case exports.MARK_JUMP_GLOBAL:
                case exports.TAB_SCROLL_TO:
                case exports.FIND_NEXT:
                case exports.FIND_PREV:
                case exports.FIND_CLEAR_SELECTION:
                case exports.ADDON_ENABLED_QUERY:
                case exports.ADDON_ENABLED_RESPONSE:
                case exports.ADDON_TOGGLE_ENABLED:
                case exports.OPEN_URL:
                case exports.SETTINGS_CHANGED:
                case exports.SETTINGS_QUERY:
                case exports.CONSOLE_FRAME_MESSAGE:
                case exports.CONSOLE_RESIZE:
                case exports.NAVIGATE_HISTORY_NEXT:
                case exports.NAVIGATE_HISTORY_PREV:
                case exports.NAVIGATE_LINK_NEXT:
                case exports.NAVIGATE_LINK_PREV:
                    return o;
            }
            throw new Error("unknown message type: " + o.type);
        };
        exports.valueOf = valueOf;
    /***/ },
    /* 5 */ /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function(process) {
            __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() {
                return Ue;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() {
                return le;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() {
                return ue;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() {
                return ye;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() {
                return Le;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() {
                return ze;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() {
                return Ge;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() {
                return Ze;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() {
                return $e;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() {
                return Ae;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() {
                return N;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() {
                return We;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() {
                return Xe;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() {
                return C;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() {
                return Je;
            });
            /* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
            /* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
            /* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
            /* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
            /* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
            /* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
            /* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
            function v() {
                return (v = Object.assign || function(e) {
                    for(var t = 1; t < arguments.length; t++){
                        var n = arguments[t];
                        for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
            }
            var g = function(e, t) {
                for(var n = [
                    e[0]
                ], r = 0, o = t.length; r < o; r += 1)n.push(t[r], e[r + 1]);
                return n;
            }, S = function(t) {
                return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t);
            }, w = Object.freeze([]), E = Object.freeze({});
            function b(e) {
                return "function" == typeof e;
            }
            function _(e) {
                return e.displayName || e.name || "Component";
            }
            function N(e) {
                return e && "string" == typeof e.styledComponentId;
            }
            var A = "undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", C = "5.3.0", I = "undefined" != typeof window && "HTMLElement" in window, P = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : false), O = {}, R = {};
            function D() {
                for(var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1)t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
                return t.forEach(function(t) {
                    e = e.replace(/%[a-z]/, t);
                }), e;
            }
            function j(e) {
                for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r];
                throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
            }
            var T = function() {
                function e(e) {
                    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
                }
                var t = e.prototype;
                return t.indexOfGroup = function(e) {
                    for(var t = 0, n = 0; n < e; n++)t += this.groupSizes[n];
                    return t;
                }, t.insertRules = function(e, t) {
                    if (e >= this.groupSizes.length) {
                        for(var n = this.groupSizes, r = n.length, o = r; e >= o;)(o <<= 1) < 0 && j(16, "" + e);
                        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
                        for(var i = r; i < o; i++)this.groupSizes[i] = 0;
                    }
                    for(var s = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++)this.tag.insertRule(s, t[a]) && (this.groupSizes[e]++, s++);
                }, t.clearGroup = function(e) {
                    if (e < this.length) {
                        var t = this.groupSizes[e], n = this.indexOfGroup(e), r = n + t;
                        this.groupSizes[e] = 0;
                        for(var o = n; o < r; o++)this.tag.deleteRule(n);
                    }
                }, t.getGroup = function(e) {
                    var t = "";
                    if (e >= this.length || 0 === this.groupSizes[e]) return t;
                    for(var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, i = r; i < o; i++)t += this.tag.getRule(i) + "/*!sc*/\n";
                    return t;
                }, e;
            }(), k = new Map, x = new Map, V = 1, B = function(e) {
                if (k.has(e)) return k.get(e);
                for(; x.has(V);)V++;
                var t = V++;
                return k.set(e, t), x.set(t, e), t;
            }, M = function(e) {
                return x.get(e);
            }, z = function(e, t) {
                k.set(e, t), x.set(t, e);
            }, L = "style[" + A + '][data-styled-version="5.3.0"]', G = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), F = function(e, t, n) {
                for(var r, o = n.split(","), i = 0, s = o.length; i < s; i++)(r = o[i]) && e.registerName(t, r);
            }, Y = function(e, t) {
                for(var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, i = n.length; o < i; o++){
                    var s = n[o].trim();
                    if (s) {
                        var a = s.match(G);
                        if (a) {
                            var c = 0 | parseInt(a[1], 10), u = a[2];
                            0 !== c && (z(u, c), F(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
                        } else r.push(s);
                    }
                }
            }, q = function() {
                return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null;
            }, H = function(e) {
                var t = document.head, n = e || t, r = document.createElement("style"), o = function(e) {
                    for(var t = e.childNodes, n = t.length; n >= 0; n--){
                        var r = t[n];
                        if (r && 1 === r.nodeType && r.hasAttribute(A)) return r;
                    }
                }(n), i = void 0 !== o ? o.nextSibling : null;
                r.setAttribute(A, "active"), r.setAttribute("data-styled-version", "5.3.0");
                var s = q();
                return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
            }, $ = function() {
                function e(e) {
                    var t = this.element = H(e);
                    t.appendChild(document.createTextNode("")), this.sheet = function(e) {
                        if (e.sheet) return e.sheet;
                        for(var t = document.styleSheets, n = 0, r = t.length; n < r; n++){
                            var o = t[n];
                            if (o.ownerNode === e) return o;
                        }
                        j(17);
                    }(t), this.length = 0;
                }
                var t = e.prototype;
                return t.insertRule = function(e, t) {
                    try {
                        return this.sheet.insertRule(t, e), this.length++, !0;
                    } catch (e1) {
                        return !1;
                    }
                }, t.deleteRule = function(e) {
                    this.sheet.deleteRule(e), this.length--;
                }, t.getRule = function(e) {
                    var t = this.sheet.cssRules[e];
                    return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
                }, e;
            }(), W = function() {
                function e(e) {
                    var t = this.element = H(e);
                    this.nodes = t.childNodes, this.length = 0;
                }
                var t = e.prototype;
                return t.insertRule = function(e, t) {
                    if (e <= this.length && e >= 0) {
                        var n = document.createTextNode(t), r = this.nodes[e];
                        return this.element.insertBefore(n, r || null), this.length++, !0;
                    }
                    return !1;
                }, t.deleteRule = function(e) {
                    this.element.removeChild(this.nodes[e]), this.length--;
                }, t.getRule = function(e) {
                    return e < this.length ? this.nodes[e].textContent : "";
                }, e;
            }(), U = function() {
                function e(e) {
                    this.rules = [], this.length = 0;
                }
                var t = e.prototype;
                return t.insertRule = function(e, t) {
                    return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
                }, t.deleteRule = function(e) {
                    this.rules.splice(e, 1), this.length--;
                }, t.getRule = function(e) {
                    return e < this.length ? this.rules[e] : "";
                }, e;
            }(), J = I, X = {
                isServer: !I,
                useCSSOMInjection: !P
            }, Z = function() {
                function e(e, t, n) {
                    void 0 === e && (e = E), void 0 === t && (t = {}), this.options = v({}, X, {}, e), this.gs = t, this.names = new Map(n), !this.options.isServer && I && J && (J = !1, function(e) {
                        for(var t = document.querySelectorAll(L), n = 0, r = t.length; n < r; n++){
                            var o = t[n];
                            o && "active" !== o.getAttribute(A) && (Y(e, o), o.parentNode && o.parentNode.removeChild(o));
                        }
                    }(this));
                }
                e.registerId = function(e) {
                    return B(e);
                };
                var t = e.prototype;
                return t.reconstructWithOptions = function(t, n) {
                    return void 0 === n && (n = !0), new e(v({}, this.options, {}, t), this.gs, n && this.names || void 0);
                }, t.allocateGSInstance = function(e) {
                    return this.gs[e] = (this.gs[e] || 0) + 1;
                }, t.getTag = function() {
                    var e, t, n, r, o;
                    return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new U(o) : r ? new $(o) : new W(o), new T(e)));
                }, t.hasNameForId = function(e, t) {
                    return this.names.has(e) && this.names.get(e).has(t);
                }, t.registerName = function(e, t) {
                    if (B(e), this.names.has(e)) this.names.get(e).add(t);
                    else {
                        var n = new Set;
                        n.add(t), this.names.set(e, n);
                    }
                }, t.insertRules = function(e, t, n) {
                    this.registerName(e, t), this.getTag().insertRules(B(e), n);
                }, t.clearNames = function(e) {
                    this.names.has(e) && this.names.get(e).clear();
                }, t.clearRules = function(e) {
                    this.getTag().clearGroup(B(e)), this.clearNames(e);
                }, t.clearTag = function() {
                    this.tag = void 0;
                }, t.toString = function() {
                    return function(e) {
                        for(var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++){
                            var i = M(o);
                            if (void 0 !== i) {
                                var s = e.names.get(i), a = t.getGroup(o);
                                if (void 0 !== s && 0 !== a.length) {
                                    var c = A + ".g" + o + '[id="' + i + '"]', u = "";
                                    void 0 !== s && s.forEach(function(e) {
                                        e.length > 0 && (u += e + ",");
                                    }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
                                }
                            }
                        }
                        return r;
                    }(this);
                }, e;
            }(), K = /(a)(d)/gi, Q = function(e) {
                return String.fromCharCode(e + (e > 25 ? 39 : 97));
            };
            function ee(e) {
                var t, n = "";
                for(t = Math.abs(e); t > 52; t = t / 52 | 0)n = Q(t % 52) + n;
                return (Q(t % 52) + n).replace(K, "$1-$2");
            }
            var te = function(e, t) {
                for(var n = t.length; n;)e = 33 * e ^ t.charCodeAt(--n);
                return e;
            }, ne = function(e) {
                return te(5381, e);
            };
            function re(e) {
                for(var t = 0; t < e.length; t += 1){
                    var n = e[t];
                    if (b(n) && !N(n)) return !1;
                }
                return !0;
            }
            var oe = ne("5.3.0"), ie = function() {
                function e(e, t, n) {
                    this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && re(e), this.componentId = t, this.baseHash = te(oe, t), this.baseStyle = n, Z.registerId(t);
                }
                return e.prototype.generateAndInjectStyles = function(e, t, n) {
                    var r = this.componentId, o = [];
                    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
                        if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
                        else {
                            var i = Ne(this.rules, e, t, n).join(""), s = ee(te(this.baseHash, i.length) >>> 0);
                            if (!t.hasNameForId(r, s)) {
                                var a = n(i, "." + s, void 0, r);
                                t.insertRules(r, s, a);
                            }
                            o.push(s), this.staticRulesId = s;
                        }
                    } else {
                        for(var c = this.rules.length, u = te(this.baseHash, n.hash), l = "", d = 0; d < c; d++){
                            var h = this.rules[d];
                            if ("string" == typeof h) l += h;
                            else if (h) {
                                var p = Ne(h, e, t, n), f = Array.isArray(p) ? p.join("") : p;
                                u = te(u, f + d), l += f;
                            }
                        }
                        if (l) {
                            var m = ee(u >>> 0);
                            if (!t.hasNameForId(r, m)) {
                                var y = n(l, "." + m, void 0, r);
                                t.insertRules(r, m, y);
                            }
                            o.push(m);
                        }
                    }
                    return o.join(" ");
                }, e;
            }(), se = /^\s*\/\/.*$/gm, ae = [
                ":",
                "[",
                ".",
                "#"
            ];
            function ce(e) {
                var t, n, r, o, i = void 0 === e ? E : e, s = i.options, a = void 0 === s ? E : s, c = i.plugins, u = void 0 === c ? w : c, l = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](a), d = [], h = function(e) {
                    function t(t) {
                        if (t) try {
                            e(t + "}");
                        } catch (e1) {}
                    }
                    return function(n, r, o, i, s, a, c, u, l, d) {
                        switch(n){
                            case 1:
                                if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                                break;
                            case 2:
                                if (0 === u) return r + "/*|*/";
                                break;
                            case 3:
                                switch(u){
                                    case 102:
                                    case 112:
                                        return e(o[0] + r), "";
                                    default:
                                        return r + (0 === d ? "/*|*/" : "");
                                }
                            case -2:
                                r.split("/*|*/}").forEach(t);
                        }
                    };
                }(function(e) {
                    d.push(e);
                }), f = function(e, r, i) {
                    return 0 === r && -1 !== ae.indexOf(i[n.length]) || i.match(o) ? e : "." + t;
                };
                function m(e, i, s, a) {
                    void 0 === a && (a = "&");
                    var c = e.replace(se, ""), u = i && s ? s + " " + i + " { " + c + " }" : c;
                    return t = a, n = i, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(s || !i ? "" : i, u);
                }
                return l.use([].concat(u, [
                    function(e, t, o) {
                        2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
                    },
                    h,
                    function(e) {
                        if (-2 === e) {
                            var t = d;
                            return d = [], t;
                        }
                    }
                ])), m.hash = u.length ? u.reduce(function(e, t) {
                    return t.name || j(15), te(e, t.name);
                }, 5381).toString() : "", m;
            }
            var ue = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(), le = ue.Consumer, de = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(), he = (de.Consumer, new Z), pe = ce();
            function fe() {
                return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ue) || he;
            }
            function me() {
                return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(de) || pe;
            }
            function ye(e) {
                var t = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins), n = t[0], i = t[1], c = fe(), u = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function() {
                    var t = c;
                    return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
                        target: e.target
                    }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                        useCSSOMInjection: !1
                    })), t;
                }, [
                    e.disableCSSOMInjection,
                    e.sheet,
                    e.target
                ]), l = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function() {
                    return ce({
                        options: {
                            prefix: !e.disableVendorPrefixes
                        },
                        plugins: n
                    });
                }, [
                    e.disableVendorPrefixes,
                    n
                ]);
                return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function() {
                    shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n, e.stylisPlugins) || i(e.stylisPlugins);
                }, [
                    e.stylisPlugins
                ]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ue.Provider, {
                    value: u
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(de.Provider, {
                    value: l
                }, e.children));
            }
            var ve = function() {
                function e(e, t) {
                    var n = this;
                    this.inject = function(e, t) {
                        void 0 === t && (t = pe);
                        var r = n.name + t.hash;
                        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
                    }, this.toString = function() {
                        return j(12, String(n.name));
                    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
                }
                return e.prototype.getName = function(e) {
                    return void 0 === e && (e = pe), this.name + e.hash;
                }, e;
            }(), ge = /([A-Z])/, Se = /([A-Z])/g, we = /^ms-/, Ee = function(e) {
                return "-" + e.toLowerCase();
            };
            function be(e) {
                return ge.test(e) ? e.replace(Se, Ee).replace(we, "-ms-") : e;
            }
            var _e = function(e) {
                return null == e || !1 === e || "" === e;
            };
            function Ne(e, n, r, o) {
                if (Array.isArray(e)) {
                    for(var i, s = [], a = 0, c = e.length; a < c; a += 1)"" !== (i = Ne(e[a], n, r, o)) && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
                    return s;
                }
                if (_e(e)) return "";
                if (N(e)) return "." + e.styledComponentId;
                if (b(e)) {
                    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
                    var u = e(n);
                    return Ne(u, n, r, o);
                }
                var l;
                return e instanceof ve ? r ? (e.inject(r, o), e.getName(o)) : e : S(e) ? function e(t, n) {
                    var r, o, i = [];
                    for(var s in t)t.hasOwnProperty(s) && !_e(t[s]) && (S(t[s]) ? i.push.apply(i, e(t[s], s)) : b(t[s]) ? i.push(be(s) + ":", t[s], ";") : i.push(be(s) + ": " + (r = s, null == (o = t[s]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"] ? String(o).trim() : o + "px") + ";"));
                    return n ? [
                        n + " {"
                    ].concat(i, [
                        "}"
                    ]) : i;
                }(e) : e.toString();
            }
            function Ae(e) {
                for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r];
                return b(e) || S(e) ? Ne(g(w, [
                    e
                ].concat(n))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ne(g(e, n));
            }
            var Ce = /invalid hook call/i, Ie = new Set, Pe = function(e, t) {
                var n;
            }, Oe = function(e, t, n) {
                return void 0 === n && (n = E), e.theme !== n.theme && e.theme || t || n.theme;
            }, Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, De = /(^-|-$)/g;
            function je(e) {
                return e.replace(Re, "-").replace(De, "");
            }
            var Te = function(e) {
                return ee(ne(e) >>> 0);
            };
            function ke(e) {
                return "string" == typeof e && true;
            }
            var xe = function(e) {
                return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
            }, Ve = function(e) {
                return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
            };
            function Be(e, t, n) {
                var r = e[n];
                xe(t) && xe(r) ? Me(r, t) : e[n] = t;
            }
            function Me(e) {
                for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r];
                for(var o = 0, i = n; o < i.length; o++){
                    var s = i[o];
                    if (xe(s)) for(var a in s)Ve(a) && Be(e, s[a], a);
                }
                return e;
            }
            var ze = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(), Le = ze.Consumer;
            function Ge(e) {
                var t = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze), n = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function() {
                    return function(e, t) {
                        if (!e) return j(14);
                        if (b(e)) {
                            var n = e(t);
                            return n;
                        }
                        return Array.isArray(e) || "object" != typeof e ? j(8) : t ? v({}, t, {}, e) : e;
                    }(e.theme, t);
                }, [
                    e.theme,
                    t
                ]);
                return e.children ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ze.Provider, {
                    value: n
                }, e.children) : null;
            }
            var Fe = {};
            function Ye(e, t, n) {
                var o = N(e), s = !ke(e), a = t.attrs, c = void 0 === a ? w : a, d = t.componentId, h = void 0 === d ? function(e, t) {
                    var n = "string" != typeof e ? "sc" : je(e);
                    Fe[n] = (Fe[n] || 0) + 1;
                    var r = n + "-" + Te("5.3.0" + n + Fe[n]);
                    return t ? t + "-" + r : r;
                }(t.displayName, t.parentComponentId) : d, p = t.displayName, f = void 0 === p ? function(e) {
                    return ke(e) ? "styled." + e : "Styled(" + _(e) + ")";
                }(e) : p, g = t.displayName && t.componentId ? je(t.displayName) + "-" + t.componentId : t.componentId || h, S = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c, A = t.shouldForwardProp;
                o && e.shouldForwardProp && (A = t.shouldForwardProp ? function(n, r, o) {
                    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
                } : e.shouldForwardProp);
                var C, I = new ie(n, g, o ? e.componentStyle : void 0), P = I.isStatic && 0 === c.length, O = function(e, t) {
                    return function(e, t, n, r) {
                        var o = e.attrs, s = e.componentStyle, a = e.defaultProps, c = e.foldedComponentIds, d = e.shouldForwardProp, h = e.styledComponentId, p = e.target;
                        var f = function(e, t, n) {
                            void 0 === e && (e = E);
                            var r = v({}, t, {
                                theme: e
                            }), o = {};
                            return n.forEach(function(e) {
                                var t, n, i, s = e;
                                for(t in b(s) && (s = s(r)), s)r[t] = o[t] = "className" === t ? (n = o[t], i = s[t], n && i ? n + " " + i : n || i) : s[t];
                            }), [
                                r,
                                o
                            ];
                        }(Oe(t, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze), a) || E, t, o), y = f[0], g = f[1], S = function(e, t, n, r) {
                            var o = fe(), i = me(), s = t ? e.generateAndInjectStyles(E, o, i) : e.generateAndInjectStyles(n, o, i);
                            return s;
                        }(s, r, y, void 0), w = n, _ = g.$as || t.$as || g.as || t.as || p, N = ke(_), A = g !== t ? v({}, t, {}, g) : t, C = {};
                        for(var I in A)"$" !== I[0] && "as" !== I && ("forwardedAs" === I ? C.as = A[I] : (d ? d(I, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _) : !N || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(I)) && (C[I] = A[I]));
                        return t.style && g.style !== t.style && (C.style = v({}, t.style, {}, g.style)), C.className = Array.prototype.concat(c, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "), C.ref = w, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_, C);
                    }(C, e, t, P);
                };
                return O.displayName = f, (C = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(O)).attrs = S, C.componentStyle = I, C.displayName = f, C.shouldForwardProp = A, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : w, C.styledComponentId = g, C.target = o ? e.target : e, C.withComponent = function(e) {
                    var r = t.componentId, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {}, i = Object.keys(e);
                        for(r = 0; r < i.length; r++)n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o;
                    }(t, [
                        "componentId"
                    ]), i = r && r + "-" + (ke(e) ? e : je(_(e)));
                    return Ye(e, v({}, o, {
                        attrs: S,
                        componentId: i
                    }), n);
                }, Object.defineProperty(C, "defaultProps", {
                    get: function() {
                        return this._foldedDefaultProps;
                    },
                    set: function(t) {
                        this._foldedDefaultProps = o ? Me({}, e.defaultProps, t) : t;
                    }
                }), C.toString = function() {
                    return "." + C.styledComponentId;
                }, s && hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C, e, {
                    attrs: !0,
                    componentStyle: !0,
                    displayName: !0,
                    foldedComponentIds: !0,
                    shouldForwardProp: !0,
                    styledComponentId: !0,
                    target: !0,
                    withComponent: !0
                }), C;
            }
            var qe = function(e) {
                return function e(t, r, o) {
                    if (void 0 === o && (o = E), !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r)) return j(1, String(r));
                    var i = function() {
                        return t(r, o, Ae.apply(void 0, arguments));
                    };
                    return i.withConfig = function(n) {
                        return e(t, r, v({}, o, {}, n));
                    }, i.attrs = function(n) {
                        return e(t, r, v({}, o, {
                            attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
                        }));
                    }, i;
                }(Ye, e);
            };
            [
                "a",
                "abbr",
                "address",
                "area",
                "article",
                "aside",
                "audio",
                "b",
                "base",
                "bdi",
                "bdo",
                "big",
                "blockquote",
                "body",
                "br",
                "button",
                "canvas",
                "caption",
                "cite",
                "code",
                "col",
                "colgroup",
                "data",
                "datalist",
                "dd",
                "del",
                "details",
                "dfn",
                "dialog",
                "div",
                "dl",
                "dt",
                "em",
                "embed",
                "fieldset",
                "figcaption",
                "figure",
                "footer",
                "form",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "head",
                "header",
                "hgroup",
                "hr",
                "html",
                "i",
                "iframe",
                "img",
                "input",
                "ins",
                "kbd",
                "keygen",
                "label",
                "legend",
                "li",
                "link",
                "main",
                "map",
                "mark",
                "marquee",
                "menu",
                "menuitem",
                "meta",
                "meter",
                "nav",
                "noscript",
                "object",
                "ol",
                "optgroup",
                "option",
                "output",
                "p",
                "param",
                "picture",
                "pre",
                "progress",
                "q",
                "rp",
                "rt",
                "ruby",
                "s",
                "samp",
                "script",
                "section",
                "select",
                "small",
                "source",
                "span",
                "strong",
                "style",
                "sub",
                "summary",
                "sup",
                "table",
                "tbody",
                "td",
                "textarea",
                "tfoot",
                "th",
                "thead",
                "time",
                "title",
                "tr",
                "track",
                "u",
                "ul",
                "var",
                "video",
                "wbr",
                "circle",
                "clipPath",
                "defs",
                "ellipse",
                "foreignObject",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "stop",
                "svg",
                "text",
                "textPath",
                "tspan"
            ].forEach(function(e) {
                qe[e] = qe(e);
            });
            var He = function() {
                function e(e, t) {
                    this.rules = e, this.componentId = t, this.isStatic = re(e), Z.registerId(this.componentId + 1);
                }
                var t = e.prototype;
                return t.createStyles = function(e, t, n, r) {
                    var o = r(Ne(this.rules, t, n, r).join(""), ""), i = this.componentId + e;
                    n.insertRules(i, i, o);
                }, t.removeStyles = function(e, t) {
                    t.clearRules(this.componentId + e);
                }, t.renderStyles = function(e, t, n, r) {
                    e > 2 && Z.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
                }, e;
            }();
            function $e(e) {
                for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)n[o - 1] = arguments[o];
                var s = Ae.apply(void 0, [
                    e
                ].concat(n)), a = "sc-global-" + Te(JSON.stringify(s)), u = new He(s, a);
                function l(e) {
                    var t = fe(), n = me(), o = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze), l = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;
                    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function() {
                        return h(l, e, t, o, n), function() {
                            return u.removeStyles(l, t);
                        };
                    }, [
                        l,
                        e,
                        t,
                        o,
                        n
                    ]), null;
                }
                function h(e, t, n, r, o) {
                    if (u.isStatic) u.renderStyles(e, O, n, o);
                    else {
                        var i = v({}, t, {
                            theme: Oe(t, r, l.defaultProps)
                        });
                        u.renderStyles(e, i, n, o);
                    }
                }
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(l);
            }
            function We(e) {
                for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r];
                var o = Ae.apply(void 0, [
                    e
                ].concat(n)).join(""), i = Te(o);
                return new ve(i, o);
            }
            var Ue = function() {
                function e() {
                    var e = this;
                    this._emitSheetCSS = function() {
                        var t = e.instance.toString(), n = q();
                        return "<style " + [
                            n && 'nonce="' + n + '"',
                            A + '="true"',
                            'data-styled-version="5.3.0"'
                        ].filter(Boolean).join(" ") + ">" + t + "</style>";
                    }, this.getStyleTags = function() {
                        return e.sealed ? j(2) : e._emitSheetCSS();
                    }, this.getStyleElement = function() {
                        var t;
                        if (e.sealed) return j(2);
                        var n = ((t = {})[A] = "", t["data-styled-version"] = "5.3.0", t.dangerouslySetInnerHTML = {
                            __html: e.instance.toString()
                        }, t), o = q();
                        return o && (n.nonce = o), [
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", v({}, n, {
                                key: "sc-0-0"
                            }))
                        ];
                    }, this.seal = function() {
                        e.sealed = !0;
                    }, this.instance = new Z({
                        isServer: !0
                    }), this.sealed = !1;
                }
                var t = e.prototype;
                return t.collectStyles = function(e) {
                    return this.sealed ? j(2) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ye, {
                        sheet: this.instance
                    }, e);
                }, t.interleaveWithNodeStream = function(e) {
                    return j(3);
                }, e;
            }(), Je = function(e) {
                var t = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function(t, n) {
                    var o = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze), s = e.defaultProps, a = Oe(t, o, s);
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e, v({}, t, {
                        theme: a,
                        ref: n
                    }));
                });
                return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t, e), t.displayName = "WithTheme(" + _(e) + ")", t;
            }, Xe = function() {
                return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze);
            }, Ze = {
                StyleSheet: Z,
                masterSheet: he
            };
            __webpack_exports__["default"] = qe;
        //# sourceMappingURL=styled-components.browser.esm.js.map
        /* WEBPACK VAR INJECTION */ }).call(this, __webpack_require__(16));
    /***/ },
    /* 6 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const ColorScheme_1 = tslib_1.__importDefault(__webpack_require__(11));
        const defs = [
            {
                name: "hintchars",
                defaultValue: "abcdefghijklmnopqrstuvwxyz",
                type: "string"
            },
            {
                name: "smoothscroll",
                defaultValue: false,
                type: "boolean"
            },
            {
                name: "complete",
                defaultValue: "sbh",
                type: "string"
            },
            {
                name: "colorscheme",
                defaultValue: ColorScheme_1.default.System,
                type: "string"
            }, 
        ];
        const defaultValues = {
            hintchars: "abcdefghijklmnopqrstuvwxyz",
            smoothscroll: false,
            complete: "sbh",
            colorscheme: ColorScheme_1.default.System
        };
        class Properties {
            constructor({ hintchars , smoothscroll , complete , colorscheme ,  } = {}){
                this.hintchars = hintchars || defaultValues.hintchars;
                this.smoothscroll = smoothscroll || defaultValues.smoothscroll;
                this.complete = complete || defaultValues.complete;
                this.colorscheme = colorscheme || defaultValues.colorscheme;
            }
            static fromJSON(json) {
                return new Properties(json);
            }
            static types() {
                return {
                    hintchars: "string",
                    smoothscroll: "boolean",
                    complete: "string",
                    colorscheme: "string"
                };
            }
            static def(name) {
                return defs.find((p)=>p.name === name);
            }
            static defs() {
                return defs;
            }
            toJSON() {
                return {
                    hintchars: this.hintchars,
                    smoothscroll: this.smoothscroll,
                    complete: this.complete,
                    colorscheme: this.colorscheme
                };
            }
        }
        exports.default = Properties;
    /***/ },
    /* 7 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.BlacklistItem = void 0;
        const tslib_1 = __webpack_require__(0);
        const Key_1 = tslib_1.__importDefault(__webpack_require__(13));
        const regexFromWildcard = (pattern)=>{
            const regexStr = "^" + pattern.replace(/\*/g, ".*") + "$";
            return new RegExp(regexStr);
        };
        class BlacklistItem {
            constructor(pattern, partial, keys){
                this.pattern = pattern;
                this.regex = regexFromWildcard(pattern);
                this.partial = partial;
                this.keys = keys;
                this.keyEntities = this.keys.map(Key_1.default.fromMapKey);
            }
            static fromJSON(json) {
                return typeof json === "string" ? new BlacklistItem(json, false, []) : new BlacklistItem(json.url, true, json.keys);
            }
            toJSON() {
                if (!this.partial) return this.pattern;
                return {
                    url: this.pattern,
                    keys: this.keys
                };
            }
            matches(url) {
                return this.pattern.includes("/") ? this.regex.test(url.host + url.pathname) : this.regex.test(url.host);
            }
            includeKey(url, key) {
                if (!this.matches(url) || !this.partial) return false;
                return this.keyEntities.some((k)=>k.equals(key));
            }
        }
        exports.BlacklistItem = BlacklistItem;
        class Blacklist {
            constructor(items){
                this.items = items;
            }
            static fromJSON(json) {
                const items = json.map((o)=>BlacklistItem.fromJSON(o));
                return new Blacklist(items);
            }
            toJSON() {
                return this.items.map((item)=>item.toJSON());
            }
            includesEntireBlacklist(url) {
                return this.items.some((item)=>!item.partial && item.matches(url));
            }
            includeKey(url, key) {
                return this.items.some((item)=>item.includeKey(url, key));
            }
        }
        exports.default = Blacklist;
    /***/ },
    /* 8 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(40);
    /***/ },
    /* 9 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const operations = tslib_1.__importStar(__webpack_require__(3));
        class Keymaps {
            constructor(data){
                this.data = data;
            }
            static fromJSON(json) {
                const entries = {};
                for (const key of Object.keys(json))entries[key] = operations.valueOf(json[key]);
                return new Keymaps(entries);
            }
            combine(other) {
                return new Keymaps(Object.assign(Object.assign({}, this.data), other.data));
            }
            toJSON() {
                return this.data;
            }
            entries() {
                return Object.entries(this.data);
            }
        }
        exports.default = Keymaps;
    /***/ },
    /* 10 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.DefaultSetting = exports.DefaultSettingJSONText = void 0;
        const tslib_1 = __webpack_require__(0);
        const Keymaps_1 = tslib_1.__importDefault(__webpack_require__(9));
        const Search_1 = tslib_1.__importDefault(__webpack_require__(14));
        const Properties_1 = tslib_1.__importDefault(__webpack_require__(6));
        const Blacklist_1 = tslib_1.__importDefault(__webpack_require__(7));
        const validate_1 = tslib_1.__importDefault(__webpack_require__(17));
        class Settings {
            constructor({ keymaps , search , properties , blacklist ,  }){
                this.keymaps = keymaps;
                this.search = search;
                this.properties = properties;
                this.blacklist = blacklist;
            }
            static fromJSON(json) {
                const valid = validate_1.default(json);
                if (!valid) {
                    const message = validate_1.default.errors.map((err)=>{
                        return `'${err.dataPath}' ${err.message}`;
                    }).join("; ");
                    throw new TypeError(message);
                }
                const obj = json;
                const settings = Object.assign({}, exports.DefaultSetting);
                if (obj.keymaps) settings.keymaps = Keymaps_1.default.fromJSON(obj.keymaps);
                if (obj.search) settings.search = Search_1.default.fromJSON(obj.search);
                if (obj.properties) settings.properties = Properties_1.default.fromJSON(obj.properties);
                if (obj.blacklist) settings.blacklist = Blacklist_1.default.fromJSON(obj.blacklist);
                return new Settings(settings);
            }
            toJSON() {
                return {
                    keymaps: this.keymaps.toJSON(),
                    search: this.search.toJSON(),
                    properties: this.properties.toJSON(),
                    blacklist: this.blacklist.toJSON()
                };
            }
        }
        exports.default = Settings;
        exports.DefaultSettingJSONText = `{
  "keymaps": {
    "0": { "type": "scroll.home" },
    ":": { "type": "command.show" },
    "o": { "type": "command.show.open", "alter": false },
    "O": { "type": "command.show.open", "alter": true },
    "t": { "type": "command.show.tabopen", "alter": false },
    "T": { "type": "command.show.tabopen", "alter": true },
    "w": { "type": "command.show.winopen", "alter": false },
    "W": { "type": "command.show.winopen", "alter": true },
    "b": { "type": "command.show.buffer" },
    "a": { "type": "command.show.addbookmark", "alter": true },
    "k": { "type": "scroll.vertically", "count": -1 },
    "j": { "type": "scroll.vertically", "count": 1 },
    "h": { "type": "scroll.horizonally", "count": -1 },
    "l": { "type": "scroll.horizonally", "count": 1 },
    "<C-U>": { "type": "scroll.pages", "count": -0.5 },
    "<C-D>": { "type": "scroll.pages", "count": 0.5 },
    "<C-B>": { "type": "scroll.pages", "count": -1 },
    "<C-F>": { "type": "scroll.pages", "count": 1 },
    "gg": { "type": "scroll.top" },
    "G": { "type": "scroll.bottom" },
    "$": { "type": "scroll.end" },
    "d": { "type": "tabs.close" },
    "D": { "type": "tabs.close", "select": "left" },
    "x$": { "type": "tabs.close.right" },
    "!d": { "type": "tabs.close.force" },
    "u": { "type": "tabs.reopen" },
    "K": { "type": "tabs.prev" },
    "J": { "type": "tabs.next" },
    "gT": { "type": "tabs.prev" },
    "gt": { "type": "tabs.next" },
    "g0": { "type": "tabs.first" },
    "g$": { "type": "tabs.last" },
    "<C-6>": { "type": "tabs.prevsel" },
    "r": { "type": "tabs.reload", "cache": false },
    "R": { "type": "tabs.reload", "cache": true },
    "zp": { "type": "tabs.pin.toggle" },
    "zd": { "type": "tabs.duplicate" },
    "zi": { "type": "zoom.in" },
    "zo": { "type": "zoom.out" },
    "zz": { "type": "zoom.neutral" },
    "f": { "type": "follow.start", "newTab": false },
    "F": { "type": "follow.start", "newTab": true, "background": false },
    "m": { "type": "mark.set.prefix" },
    "'": { "type": "mark.jump.prefix" },
    "H": { "type": "navigate.history.prev" },
    "L": { "type": "navigate.history.next" },
    "[[": { "type": "navigate.link.prev" },
    "]]": { "type": "navigate.link.next" },
    "gu": { "type": "navigate.parent" },
    "gU": { "type": "navigate.root" },
    "gi": { "type": "focus.input" },
    "gf": { "type": "page.source" },
    "gh": { "type": "page.home" },
    "gH": { "type": "page.home", "newTab": true },
    "gr": { "type": "tabs.reader.toggle" },
    "y": { "type": "urls.yank" },
    "p": { "type": "urls.paste", "newTab": false },
    "P": { "type": "urls.paste", "newTab": true },
    "/": { "type": "find.start" },
    "n": { "type": "find.next" },
    "N": { "type": "find.prev" },
    ".": { "type": "repeat.last" },
    "<S-Esc>": { "type": "addon.toggle.enabled" }
  },
  "search": {
    "default": "google",
    "engines": {
      "google": "https://google.com/search?q={}",
      "yahoo": "https://search.yahoo.com/search?p={}",
      "bing": "https://www.bing.com/search?q={}",
      "duckduckgo": "https://duckduckgo.com/?q={}",
      "twitter": "https://twitter.com/search?q={}",
      "wikipedia": "https://en.wikipedia.org/w/index.php?search={}"
    }
  },
  "properties": {
    "hintchars": "abcdefghijklmnopqrstuvwxyz",
    "smoothscroll": false,
    "complete": "sbh",
    "colorscheme": "system"
  },
  "blacklist": [
  ]
}`;
        exports.DefaultSetting = Settings.fromJSON(JSON.parse(exports.DefaultSettingJSONText));
    /***/ },
    /* 11 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var ColorScheme;
        (function(ColorScheme) {
            ColorScheme["System"] = "system";
            ColorScheme["Light"] = "light";
            ColorScheme["Dark"] = "dark";
        })(ColorScheme || (ColorScheme = {}));
        exports.default = ColorScheme;
    /***/ },
    /* 12 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        var reactIs = __webpack_require__(8);
        /**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
            childContextTypes: true,
            contextType: true,
            contextTypes: true,
            defaultProps: true,
            displayName: true,
            getDefaultProps: true,
            getDerivedStateFromError: true,
            getDerivedStateFromProps: true,
            mixins: true,
            propTypes: true,
            type: true
        };
        var KNOWN_STATICS = {
            name: true,
            length: true,
            prototype: true,
            caller: true,
            callee: true,
            arguments: true,
            arity: true
        };
        var FORWARD_REF_STATICS = {
            "$$typeof": true,
            render: true,
            defaultProps: true,
            displayName: true,
            propTypes: true
        };
        var MEMO_STATICS = {
            "$$typeof": true,
            compare: true,
            defaultProps: true,
            displayName: true,
            propTypes: true,
            type: true
        };
        var TYPE_STATICS = {};
        TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
        TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
        function getStatics(component) {
            // React v16.11 and below
            if (reactIs.isMemo(component)) return MEMO_STATICS;
             // React v16.12 and above
            return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
        }
        var defineProperty = Object.defineProperty;
        var getOwnPropertyNames = Object.getOwnPropertyNames;
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var getPrototypeOf = Object.getPrototypeOf;
        var objectPrototype = Object.prototype;
        function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
            if (typeof sourceComponent !== "string") {
                // don't hoist over string (html) components
                if (objectPrototype) {
                    var inheritedComponent = getPrototypeOf(sourceComponent);
                    if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
                var keys = getOwnPropertyNames(sourceComponent);
                if (getOwnPropertySymbols) keys = keys.concat(getOwnPropertySymbols(sourceComponent));
                var targetStatics = getStatics(targetComponent);
                var sourceStatics = getStatics(sourceComponent);
                for(var i = 0; i < keys.length; ++i){
                    var key = keys[i];
                    if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                        try {
                            // Avoid failures from read-only properties
                            defineProperty(targetComponent, key, descriptor);
                        } catch (e) {}
                    }
                }
            }
            return targetComponent;
        }
        module.exports = hoistNonReactStatics;
    /***/ },
    /* 13 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const digits = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ];
        class Key {
            constructor({ key , shift =false , ctrl =false , alt =false , meta =false ,  }){
                this.key = key;
                this.shift = shift;
                this.ctrl = ctrl;
                this.alt = alt;
                this.meta = meta;
            }
            static fromMapKey(str) {
                if (str.startsWith("<") && str.endsWith(">")) {
                    const inner = str.slice(1, -1);
                    const shift = inner.includes("S-");
                    let base = inner.slice(inner.lastIndexOf("-") + 1);
                    if (shift && base.length === 1) base = base.toUpperCase();
                    else if (!shift && base.length === 1) base = base.toLowerCase();
                    return new Key({
                        key: base,
                        shift: shift,
                        ctrl: inner.includes("C-"),
                        alt: inner.includes("A-"),
                        meta: inner.includes("M-")
                    });
                }
                return new Key({
                    key: str,
                    shift: str.toLowerCase() !== str,
                    ctrl: false,
                    alt: false,
                    meta: false
                });
            }
            isDigit() {
                return digits.includes(this.key) && !this.ctrl && !this.alt && !this.meta;
            }
            equals(key) {
                return this.key === key.key && this.ctrl === key.ctrl && this.meta === key.meta && this.alt === key.alt && this.shift === key.shift;
            }
        }
        exports.default = Key;
    /***/ },
    /* 14 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        class Search {
            constructor(defaultEngine, engines){
                this.defaultEngine = defaultEngine;
                this.engines = engines;
            }
            static fromJSON(json) {
                for (const [name, url] of Object.entries(json.engines)){
                    if (!/^[a-zA-Z0-9]+$/.test(name)) throw new TypeError("Search engine's name must be [a-zA-Z0-9]+");
                    const matches = url.match(/{}/g);
                    if (matches === null) throw new TypeError(`No {}-placeholders in URL of "${name}"`);
                    else if (matches.length > 1) throw new TypeError(`Multiple {}-placeholders in URL of "${name}"`);
                }
                if (!Object.keys(json.engines).includes(json.default)) throw new TypeError(`Default engine "${json.default}" not found`);
                return new Search(json.default, json.engines);
            }
            toJSON() {
                return {
                    default: this.defaultEngine,
                    engines: this.engines
                };
            }
        }
        exports.default = Search;
    /***/ },
    ,
    /* 16 */ /***/ function(module, exports) {
        // shim for using process in browser
        var process = module.exports = {};
        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        (function() {
            try {
                if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
                else cachedSetTimeout = defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
                else cachedClearTimeout = defaultClearTimeout;
            } catch (e1) {
                cachedClearTimeout = defaultClearTimeout;
            }
        })();
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
            return setTimeout(fun, 0);
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e1) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
            return clearTimeout(marker);
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e1) {
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
            if (!draining || !currentQueue) return;
            draining = false;
            if (currentQueue.length) queue = currentQueue.concat(queue);
            else queueIndex = -1;
            if (queue.length) drainQueue();
        }
        function drainQueue() {
            if (draining) return;
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while(len){
                currentQueue = queue;
                queue = [];
                while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
        }
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) runTimeout(drainQueue);
        };
        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        };
        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ""; // empty string to avoid regexp issues
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
        process.listeners = function(name) {
            return [];
        };
        process.binding = function(name) {
            throw new Error("process.binding is not supported");
        };
        process.cwd = function() {
            return "/";
        };
        process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        };
        process.umask = function() {
            return 0;
        };
    /***/ },
    /* 17 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        var equal = __webpack_require__(18);
        var validate = function() {
            var pattern0 = new RegExp(".*");
            var refVal = [];
            return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
                "use strict";
                var vErrors = null;
                var errors = 0;
                if (data && typeof data === "object" && !Array.isArray(data)) {
                    var errs__0 = errors;
                    var valid1 = true;
                    for(var key0 in data){
                        var isAdditional0 = !(key0 == "keymaps" || key0 == "search" || key0 == "properties" || key0 == "blacklist");
                        if (isAdditional0) {
                            valid1 = false;
                            validate.errors = [
                                {
                                    keyword: "additionalProperties",
                                    dataPath: (dataPath || "") + "",
                                    schemaPath: "#/additionalProperties",
                                    params: {
                                        additionalProperty: "" + key0 + ""
                                    },
                                    message: "should NOT have additional properties"
                                }
                            ];
                            return false;
                        }
                    }
                    if (valid1) {
                        var data1 = data.keymaps;
                        if (data1 === undefined) valid1 = true;
                        else {
                            var errs_1 = errors;
                            if (data1 && typeof data1 === "object" && !Array.isArray(data1)) {
                                var errs__1 = errors;
                                var valid2 = true;
                                for(var key1 in data1)if (pattern0.test(key1)) {
                                    var data2 = data1[key1];
                                    var errs_2 = errors;
                                    if (data2 && typeof data2 === "object" && !Array.isArray(data2)) {
                                        var errs__2 = errors;
                                        var valid3 = true;
                                        if (data2.type === undefined) {
                                            valid3 = false;
                                            validate.errors = [
                                                {
                                                    keyword: "required",
                                                    dataPath: (dataPath || "") + ".keymaps['" + key1 + "']",
                                                    schemaPath: "#/properties/keymaps/patternProperties/.*/required",
                                                    params: {
                                                        missingProperty: "type"
                                                    },
                                                    message: "should have required property 'type'"
                                                }
                                            ];
                                            return false;
                                        } else {
                                            var errs_3 = errors;
                                            if (typeof data2.type !== "string") {
                                                validate.errors = [
                                                    {
                                                        keyword: "type",
                                                        dataPath: (dataPath || "") + ".keymaps['" + key1 + "'].type",
                                                        schemaPath: "#/properties/keymaps/patternProperties/.*/properties/type/type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "should be string"
                                                    }
                                                ];
                                                return false;
                                            }
                                            var valid3 = errors === errs_3;
                                        }
                                    } else {
                                        validate.errors = [
                                            {
                                                keyword: "type",
                                                dataPath: (dataPath || "") + ".keymaps['" + key1 + "']",
                                                schemaPath: "#/properties/keymaps/patternProperties/.*/type",
                                                params: {
                                                    type: "object"
                                                },
                                                message: "should be object"
                                            }
                                        ];
                                        return false;
                                    }
                                    var valid2 = errors === errs_2;
                                    if (!valid2) break;
                                } else valid2 = true;
                            } else {
                                validate.errors = [
                                    {
                                        keyword: "type",
                                        dataPath: (dataPath || "") + ".keymaps",
                                        schemaPath: "#/properties/keymaps/type",
                                        params: {
                                            type: "object"
                                        },
                                        message: "should be object"
                                    }
                                ];
                                return false;
                            }
                            var valid1 = errors === errs_1;
                        }
                        if (valid1) {
                            var data1 = data.search;
                            if (data1 === undefined) valid1 = true;
                            else {
                                var errs_1 = errors;
                                if (data1 && typeof data1 === "object" && !Array.isArray(data1)) {
                                    var errs__1 = errors;
                                    var valid2 = true;
                                    if (data1.default === undefined) {
                                        valid2 = false;
                                        validate.errors = [
                                            {
                                                keyword: "required",
                                                dataPath: (dataPath || "") + ".search",
                                                schemaPath: "#/properties/search/required",
                                                params: {
                                                    missingProperty: "default"
                                                },
                                                message: "should have required property 'default'"
                                            }
                                        ];
                                        return false;
                                    } else {
                                        var errs_2 = errors;
                                        if (typeof data1.default !== "string") {
                                            validate.errors = [
                                                {
                                                    keyword: "type",
                                                    dataPath: (dataPath || "") + ".search.default",
                                                    schemaPath: "#/properties/search/properties/default/type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "should be string"
                                                }
                                            ];
                                            return false;
                                        }
                                        var valid2 = errors === errs_2;
                                    }
                                    if (valid2) {
                                        var data2 = data1.engines;
                                        if (data2 === undefined) {
                                            valid2 = false;
                                            validate.errors = [
                                                {
                                                    keyword: "required",
                                                    dataPath: (dataPath || "") + ".search",
                                                    schemaPath: "#/properties/search/required",
                                                    params: {
                                                        missingProperty: "engines"
                                                    },
                                                    message: "should have required property 'engines'"
                                                }
                                            ];
                                            return false;
                                        } else {
                                            var errs_2 = errors;
                                            if (data2 && typeof data2 === "object" && !Array.isArray(data2)) {
                                                var errs__2 = errors;
                                                var valid3 = true;
                                                for(var key2 in data2)if (pattern0.test(key2)) {
                                                    var errs_3 = errors;
                                                    if (typeof data2[key2] !== "string") {
                                                        validate.errors = [
                                                            {
                                                                keyword: "type",
                                                                dataPath: (dataPath || "") + ".search.engines['" + key2 + "']",
                                                                schemaPath: "#/properties/search/properties/engines/patternProperties/.*/type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "should be string"
                                                            }
                                                        ];
                                                        return false;
                                                    }
                                                    var valid3 = errors === errs_3;
                                                    if (!valid3) break;
                                                } else valid3 = true;
                                            } else {
                                                validate.errors = [
                                                    {
                                                        keyword: "type",
                                                        dataPath: (dataPath || "") + ".search.engines",
                                                        schemaPath: "#/properties/search/properties/engines/type",
                                                        params: {
                                                            type: "object"
                                                        },
                                                        message: "should be object"
                                                    }
                                                ];
                                                return false;
                                            }
                                            var valid2 = errors === errs_2;
                                        }
                                    }
                                } else {
                                    validate.errors = [
                                        {
                                            keyword: "type",
                                            dataPath: (dataPath || "") + ".search",
                                            schemaPath: "#/properties/search/type",
                                            params: {
                                                type: "object"
                                            },
                                            message: "should be object"
                                        }
                                    ];
                                    return false;
                                }
                                var valid1 = errors === errs_1;
                            }
                            if (valid1) {
                                var data1 = data.properties;
                                if (data1 === undefined) valid1 = true;
                                else {
                                    var errs_1 = errors;
                                    if (data1 && typeof data1 === "object" && !Array.isArray(data1)) {
                                        var errs__1 = errors;
                                        var valid2 = true;
                                        if (data1.hintchars === undefined) valid2 = true;
                                        else {
                                            var errs_2 = errors;
                                            if (typeof data1.hintchars !== "string") {
                                                validate.errors = [
                                                    {
                                                        keyword: "type",
                                                        dataPath: (dataPath || "") + ".properties.hintchars",
                                                        schemaPath: "#/properties/properties/properties/hintchars/type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "should be string"
                                                    }
                                                ];
                                                return false;
                                            }
                                            var valid2 = errors === errs_2;
                                        }
                                        if (valid2) {
                                            if (data1.smoothscroll === undefined) valid2 = true;
                                            else {
                                                var errs_2 = errors;
                                                if (typeof data1.smoothscroll !== "boolean") {
                                                    validate.errors = [
                                                        {
                                                            keyword: "type",
                                                            dataPath: (dataPath || "") + ".properties.smoothscroll",
                                                            schemaPath: "#/properties/properties/properties/smoothscroll/type",
                                                            params: {
                                                                type: "boolean"
                                                            },
                                                            message: "should be boolean"
                                                        }
                                                    ];
                                                    return false;
                                                }
                                                var valid2 = errors === errs_2;
                                            }
                                            if (valid2) {
                                                if (data1.complete === undefined) valid2 = true;
                                                else {
                                                    var errs_2 = errors;
                                                    if (typeof data1.complete !== "string") {
                                                        validate.errors = [
                                                            {
                                                                keyword: "type",
                                                                dataPath: (dataPath || "") + ".properties.complete",
                                                                schemaPath: "#/properties/properties/properties/complete/type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "should be string"
                                                            }
                                                        ];
                                                        return false;
                                                    }
                                                    var valid2 = errors === errs_2;
                                                }
                                                if (valid2) {
                                                    var data2 = data1.colorscheme;
                                                    if (data2 === undefined) valid2 = true;
                                                    else {
                                                        var errs_2 = errors;
                                                        if (typeof data2 !== "string") {
                                                            validate.errors = [
                                                                {
                                                                    keyword: "type",
                                                                    dataPath: (dataPath || "") + ".properties.colorscheme",
                                                                    schemaPath: "#/properties/properties/properties/colorscheme/type",
                                                                    params: {
                                                                        type: "string"
                                                                    },
                                                                    message: "should be string"
                                                                }
                                                            ];
                                                            return false;
                                                        }
                                                        var schema2 = validate.schema.properties.properties.properties.colorscheme.enum;
                                                        var valid2;
                                                        valid2 = false;
                                                        for(var i2 = 0; i2 < schema2.length; i2++)if (equal(data2, schema2[i2])) {
                                                            valid2 = true;
                                                            break;
                                                        }
                                                        if (!valid2) {
                                                            validate.errors = [
                                                                {
                                                                    keyword: "enum",
                                                                    dataPath: (dataPath || "") + ".properties.colorscheme",
                                                                    schemaPath: "#/properties/properties/properties/colorscheme/enum",
                                                                    params: {
                                                                        allowedValues: schema2
                                                                    },
                                                                    message: "should be equal to one of the allowed values"
                                                                }
                                                            ];
                                                            return false;
                                                        }
                                                        var valid2 = errors === errs_2;
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        validate.errors = [
                                            {
                                                keyword: "type",
                                                dataPath: (dataPath || "") + ".properties",
                                                schemaPath: "#/properties/properties/type",
                                                params: {
                                                    type: "object"
                                                },
                                                message: "should be object"
                                            }
                                        ];
                                        return false;
                                    }
                                    var valid1 = errors === errs_1;
                                }
                                if (valid1) {
                                    var data1 = data.blacklist;
                                    if (data1 === undefined) valid1 = true;
                                    else {
                                        var errs_1 = errors;
                                        if (Array.isArray(data1)) {
                                            var errs__1 = errors;
                                            var valid1;
                                            for(var i1 = 0; i1 < data1.length; i1++){
                                                var data2 = data1[i1];
                                                var errs_2 = errors;
                                                var errs__2 = errors;
                                                var valid2 = false;
                                                var errs_3 = errors;
                                                if (typeof data2 !== "string") {
                                                    var err = {
                                                        keyword: "type",
                                                        dataPath: (dataPath || "") + ".blacklist[" + i1 + "]",
                                                        schemaPath: "#/properties/blacklist/items/anyOf/0/type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "should be string"
                                                    };
                                                    if (vErrors === null) vErrors = [
                                                        err
                                                    ];
                                                    else vErrors.push(err);
                                                    errors++;
                                                }
                                                var valid3 = errors === errs_3;
                                                valid2 = valid2 || valid3;
                                                if (!valid2) {
                                                    var errs_3 = errors;
                                                    if (data2 && typeof data2 === "object" && !Array.isArray(data2)) {
                                                        var errs__3 = errors;
                                                        var valid4 = true;
                                                        if (data2.url === undefined) {
                                                            valid4 = false;
                                                            var err = {
                                                                keyword: "required",
                                                                dataPath: (dataPath || "") + ".blacklist[" + i1 + "]",
                                                                schemaPath: "#/properties/blacklist/items/anyOf/1/required",
                                                                params: {
                                                                    missingProperty: "url"
                                                                },
                                                                message: "should have required property 'url'"
                                                            };
                                                            if (vErrors === null) vErrors = [
                                                                err
                                                            ];
                                                            else vErrors.push(err);
                                                            errors++;
                                                        } else {
                                                            var errs_4 = errors;
                                                            if (typeof data2.url !== "string") {
                                                                var err = {
                                                                    keyword: "type",
                                                                    dataPath: (dataPath || "") + ".blacklist[" + i1 + "].url",
                                                                    schemaPath: "#/properties/blacklist/items/anyOf/1/properties/url/type",
                                                                    params: {
                                                                        type: "string"
                                                                    },
                                                                    message: "should be string"
                                                                };
                                                                if (vErrors === null) vErrors = [
                                                                    err
                                                                ];
                                                                else vErrors.push(err);
                                                                errors++;
                                                            }
                                                            var valid4 = errors === errs_4;
                                                        }
                                                        if (valid4) {
                                                            var data3 = data2.keys;
                                                            if (data3 === undefined) {
                                                                valid4 = false;
                                                                var err = {
                                                                    keyword: "required",
                                                                    dataPath: (dataPath || "") + ".blacklist[" + i1 + "]",
                                                                    schemaPath: "#/properties/blacklist/items/anyOf/1/required",
                                                                    params: {
                                                                        missingProperty: "keys"
                                                                    },
                                                                    message: "should have required property 'keys'"
                                                                };
                                                                if (vErrors === null) vErrors = [
                                                                    err
                                                                ];
                                                                else vErrors.push(err);
                                                                errors++;
                                                            } else {
                                                                var errs_4 = errors;
                                                                if (Array.isArray(data3)) {
                                                                    var errs__4 = errors;
                                                                    var valid4;
                                                                    for(var i4 = 0; i4 < data3.length; i4++){
                                                                        var errs_5 = errors;
                                                                        if (typeof data3[i4] !== "string") {
                                                                            var err = {
                                                                                keyword: "type",
                                                                                dataPath: (dataPath || "") + ".blacklist[" + i1 + "].keys[" + i4 + "]",
                                                                                schemaPath: "#/properties/blacklist/items/anyOf/1/properties/keys/items/type",
                                                                                params: {
                                                                                    type: "string"
                                                                                },
                                                                                message: "should be string"
                                                                            };
                                                                            if (vErrors === null) vErrors = [
                                                                                err
                                                                            ];
                                                                            else vErrors.push(err);
                                                                            errors++;
                                                                        }
                                                                        var valid5 = errors === errs_5;
                                                                        if (!valid5) break;
                                                                    }
                                                                } else {
                                                                    var err = {
                                                                        keyword: "type",
                                                                        dataPath: (dataPath || "") + ".blacklist[" + i1 + "].keys",
                                                                        schemaPath: "#/properties/blacklist/items/anyOf/1/properties/keys/type",
                                                                        params: {
                                                                            type: "array"
                                                                        },
                                                                        message: "should be array"
                                                                    };
                                                                    if (vErrors === null) vErrors = [
                                                                        err
                                                                    ];
                                                                    else vErrors.push(err);
                                                                    errors++;
                                                                }
                                                                var valid4 = errors === errs_4;
                                                            }
                                                        }
                                                    } else {
                                                        var err = {
                                                            keyword: "type",
                                                            dataPath: (dataPath || "") + ".blacklist[" + i1 + "]",
                                                            schemaPath: "#/properties/blacklist/items/anyOf/1/type",
                                                            params: {
                                                                type: "object"
                                                            },
                                                            message: "should be object"
                                                        };
                                                        if (vErrors === null) vErrors = [
                                                            err
                                                        ];
                                                        else vErrors.push(err);
                                                        errors++;
                                                    }
                                                    var valid3 = errors === errs_3;
                                                    valid2 = valid2 || valid3;
                                                }
                                                if (!valid2) {
                                                    var err = {
                                                        keyword: "anyOf",
                                                        dataPath: (dataPath || "") + ".blacklist[" + i1 + "]",
                                                        schemaPath: "#/properties/blacklist/items/anyOf",
                                                        params: {},
                                                        message: "should match some schema in anyOf"
                                                    };
                                                    if (vErrors === null) vErrors = [
                                                        err
                                                    ];
                                                    else vErrors.push(err);
                                                    errors++;
                                                    validate.errors = vErrors;
                                                    return false;
                                                } else {
                                                    errors = errs__2;
                                                    if (vErrors !== null) {
                                                        if (errs__2) vErrors.length = errs__2;
                                                        else vErrors = null;
                                                    }
                                                }
                                                var valid2 = errors === errs_2;
                                                if (!valid2) break;
                                            }
                                        } else {
                                            validate.errors = [
                                                {
                                                    keyword: "type",
                                                    dataPath: (dataPath || "") + ".blacklist",
                                                    schemaPath: "#/properties/blacklist/type",
                                                    params: {
                                                        type: "array"
                                                    },
                                                    message: "should be array"
                                                }
                                            ];
                                            return false;
                                        }
                                        var valid1 = errors === errs_1;
                                    }
                                }
                            }
                        }
                    }
                } else {
                    validate.errors = [
                        {
                            keyword: "type",
                            dataPath: (dataPath || "") + "",
                            schemaPath: "#/type",
                            params: {
                                type: "object"
                            },
                            message: "should be object"
                        }
                    ];
                    return false;
                }
                validate.errors = vErrors;
                return errors === 0;
            };
        }();
        validate.schema = {
            "type": "object",
            "properties": {
                "keymaps": {
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "type": "object",
                            "properties": {
                                "type": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "type"
                            ]
                        }
                    }
                },
                "search": {
                    "type": "object",
                    "properties": {
                        "default": {
                            "type": "string"
                        },
                        "engines": {
                            "type": "object",
                            "patternProperties": {
                                ".*": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "required": [
                        "default",
                        "engines"
                    ]
                },
                "properties": {
                    "type": "object",
                    "properties": {
                        "hintchars": {
                            "type": "string"
                        },
                        "smoothscroll": {
                            "type": "boolean"
                        },
                        "complete": {
                            "type": "string"
                        },
                        "colorscheme": {
                            "type": "string",
                            "enum": [
                                "system",
                                "light",
                                "dark"
                            ]
                        }
                    }
                },
                "blacklist": {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {
                                "type": "string"
                            },
                            {
                                "type": "object",
                                "properties": {
                                    "url": {
                                        "type": "string"
                                    },
                                    "keys": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "required": [
                                    "url",
                                    "keys"
                                ]
                            }
                        ]
                    }
                }
            },
            "additionalProperties": false
        };
        validate.errors = null;
        module.exports = validate;
    /***/ },
    /* 18 */ /***/ function(module, exports, __webpack_require__) {
        // do NOT remove this file - it would break pre-compiled schemas
        // https://github.com/ajv-validator/ajv/issues/889
        module.exports = __webpack_require__(19);
    /***/ },
    /* 19 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        // do not edit .js files directly - edit src/index.jst
        module.exports = function equal(a, b) {
            if (a === b) return true;
            if (a && b && typeof a == "object" && typeof b == "object") {
                if (a.constructor !== b.constructor) return false;
                var length, i, keys;
                if (Array.isArray(a)) {
                    length = a.length;
                    if (length != b.length) return false;
                    for(i = length; (i--) !== 0;)if (!equal(a[i], b[i])) return false;
                    return true;
                }
                if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
                if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
                if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
                keys = Object.keys(a);
                length = keys.length;
                if (length !== Object.keys(b).length) return false;
                for(i = length; (i--) !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
                for(i = length; (i--) !== 0;){
                    var key = keys[i];
                    if (!equal(a[key], b[key])) return false;
                }
                return true;
            }
            // true if both NaN, false otherwise
            return a !== a && b !== b;
        };
    /***/ },
    ,
    /* 21 */ /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        // CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
        function memoize(fn) {
            var cache = {};
            return function(arg) {
                if (cache[arg] === undefined) cache[arg] = fn(arg);
                return cache[arg];
            };
        }
        /* harmony default export */ var memoize_browser_esm = memoize;
        // CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
        var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
        var index = memoize_browser_esm(function(prop) {
            return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
        });
        /* harmony default export */ var is_prop_valid_browser_esm = __webpack_exports__["a"] = index;
    /***/ },
    ,
    ,
    ,
    /* 25 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;
        function toObject(val) {
            if (val === null || val === undefined) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(val);
        }
        function shouldUseNative() {
            try {
                if (!Object.assign) return false;
                // Detect buggy property enumeration order in older V8 versions.
                // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
                test1[5] = "de";
                if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test2 = {};
                for(var i = 0; i < 10; i++)test2["_" + String.fromCharCode(i)] = i;
                var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                });
                if (order2.join("") !== "0123456789") return false;
                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test3 = {};
                "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                    test3[letter] = letter;
                });
                if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
                return true;
            } catch (err) {
                // We don't expect any of the above to throw, but better to be safe.
                return false;
            }
        }
        module.exports = shouldUseNative() ? Object.assign : function(target, source) {
            var from;
            var to = toObject(target);
            var symbols;
            for(var s = 1; s < arguments.length; s++){
                from = Object(arguments[s]);
                for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
                }
            }
            return to;
        };
    /***/ },
    /* 26 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        function checkDCE() {
            /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
            try {
                // Verify that the code above has been dead code eliminated (DCE'd).
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
            } catch (err) {
                // DevTools shouldn't crash React, no matter what.
                // We should still report in case we break this code.
                console.error(err);
            }
        }
        // DCE check should happen before ReactDOM bundle executes so that
        // DevTools can report bad minification during injection.
        checkDCE();
        module.exports = __webpack_require__(37);
    /***/ },
    /* 27 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const styled_components_1 = tslib_1.__importDefault(__webpack_require__(5));
        const styled = styled_components_1.default;
        exports.default = styled;
    /***/ },
    /* 28 */ /***/ function(module, exports) {
        //
        module.exports = function shallowEqual(objA, objB, compare, compareContext) {
            var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
            if (ret !== void 0) return !!ret;
            if (objA === objB) return true;
            if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) return false;
            var keysA = Object.keys(objA);
            var keysB = Object.keys(objB);
            if (keysA.length !== keysB.length) return false;
            var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
            // Test for A's keys different from B.
            for(var idx = 0; idx < keysA.length; idx++){
                var key = keysA[idx];
                if (!bHasOwnProperty(key)) return false;
                var valueA = objA[key];
                var valueB = objB[key];
                ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
                if (ret === false || ret === void 0 && valueA !== valueB) return false;
            }
            return true;
        };
    /***/ },
    /* 29 */ /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function stylis_min(W) {
            function M(d, c, e, h, a) {
                for(var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = "", p = "", F = "", G = "", C; l < B;){
                    g = e.charCodeAt(l);
                    l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
                    if (0 === b + n + v + m) {
                        if (l === J && (0 < r && (f = f.replace(N, "")), 0 < f.trim().length)) {
                            switch(g){
                                case 32:
                                case 9:
                                case 59:
                                case 13:
                                case 10:
                                    break;
                                default:
                                    f += e.charAt(l);
                            }
                            g = 59;
                        }
                        switch(g){
                            case 123:
                                f = f.trim();
                                q = f.charCodeAt(0);
                                k = 1;
                                for(t = ++l; l < B;){
                                    switch(g = e.charCodeAt(l)){
                                        case 123:
                                            k++;
                                            break;
                                        case 125:
                                            k--;
                                            break;
                                        case 47:
                                            switch(g = e.charCodeAt(l + 1)){
                                                case 42:
                                                case 47:
                                                    a: {
                                                        for(u = l + 1; u < J; ++u)switch(e.charCodeAt(u)){
                                                            case 47:
                                                                if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                                                    l = u + 1;
                                                                    break a;
                                                                }
                                                                break;
                                                            case 10:
                                                                if (47 === g) {
                                                                    l = u + 1;
                                                                    break a;
                                                                }
                                                        }
                                                        l = u;
                                                    }
                                            }
                                            break;
                                        case 91:
                                            g++;
                                        case 40:
                                            g++;
                                        case 34:
                                        case 39:
                                            for(; (l++) < J && e.charCodeAt(l) !== g;);
                                    }
                                    if (0 === k) break;
                                    l++;
                                }
                                k = e.substring(t, l);
                                0 === q && (q = (f = f.replace(ca, "").trim()).charCodeAt(0));
                                switch(q){
                                    case 64:
                                        0 < r && (f = f.replace(N, ""));
                                        g = f.charCodeAt(1);
                                        switch(g){
                                            case 100:
                                            case 109:
                                            case 115:
                                            case 45:
                                                r = c;
                                                break;
                                            default:
                                                r = O;
                                        }
                                        k = M(c, r, k, g, a + 1);
                                        t = k.length;
                                        0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(""), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ""));
                                        if (0 < t) switch(g){
                                            case 115:
                                                f = f.replace(da, ea);
                                            case 100:
                                            case 109:
                                            case 45:
                                                k = f + "{" + k + "}";
                                                break;
                                            case 107:
                                                f = f.replace(fa, "$1 $2");
                                                k = f + "{" + k + "}";
                                                k = 1 === w || 2 === w && L("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
                                                break;
                                            default:
                                                k = f + k, 112 === h && (k = (p += k, ""));
                                        }
                                        else k = "";
                                        break;
                                    default:
                                        k = M(c, X(c, f, I), k, h, a + 1);
                                }
                                F += k;
                                k = I = r = u = q = 0;
                                f = "";
                                g = e.charCodeAt(++l);
                                break;
                            case 125:
                            case 59:
                                f = (0 < r ? f.replace(N, "") : f).trim();
                                if (1 < (t = f.length)) switch(0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(" ", ":")).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = "\0\0"), q = f.charCodeAt(0), g = f.charCodeAt(1), q){
                                    case 0:
                                        break;
                                    case 64:
                                        if (105 === g || 99 === g) {
                                            G += f + e.charAt(l);
                                            break;
                                        }
                                    default:
                                        58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                                }
                                I = r = u = q = 0;
                                f = "";
                                g = e.charCodeAt(++l);
                        }
                    }
                    switch(g){
                        case 13:
                        case 10:
                            47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += "\0");
                            0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
                            z = 1;
                            D++;
                            break;
                        case 59:
                        case 125:
                            if (0 === b + n + v + m) {
                                z++;
                                break;
                            }
                        default:
                            z++;
                            y = e.charAt(l);
                            switch(g){
                                case 9:
                                case 32:
                                    if (0 === n + m + b) switch(x){
                                        case 44:
                                        case 58:
                                        case 9:
                                        case 32:
                                            y = "";
                                            break;
                                        default:
                                            32 !== g && (y = " ");
                                    }
                                    break;
                                case 0:
                                    y = "\\0";
                                    break;
                                case 12:
                                    y = "\\f";
                                    break;
                                case 11:
                                    y = "\\v";
                                    break;
                                case 38:
                                    0 === n + b + m && (r = I = 1, y = "\f" + y);
                                    break;
                                case 108:
                                    if (0 === n + b + m + E && 0 < u) switch(l - u){
                                        case 2:
                                            112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                                        case 8:
                                            111 === K && (E = K);
                                    }
                                    break;
                                case 58:
                                    0 === n + b + m && (u = l);
                                    break;
                                case 44:
                                    0 === b + v + n + m && (r = 1, y += "\r");
                                    break;
                                case 34:
                                case 39:
                                    0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                                    break;
                                case 91:
                                    0 === n + b + v && m++;
                                    break;
                                case 93:
                                    0 === n + b + v && m--;
                                    break;
                                case 41:
                                    0 === n + b + m && v--;
                                    break;
                                case 40:
                                    if (0 === n + b + m) {
                                        if (0 === q) switch(2 * x + 3 * K){
                                            case 533:
                                                break;
                                            default:
                                                q = 1;
                                        }
                                        v++;
                                    }
                                    break;
                                case 64:
                                    0 === b + v + n + m + u + k && (k = 1);
                                    break;
                                case 42:
                                case 47:
                                    if (!(0 < n + m + v)) switch(b){
                                        case 0:
                                            switch(2 * g + 3 * e.charCodeAt(l + 1)){
                                                case 235:
                                                    b = 47;
                                                    break;
                                                case 220:
                                                    t = l, b = 42;
                                            }
                                            break;
                                        case 42:
                                            47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = "", b = 0);
                                    }
                            }
                            0 === b && (f += y);
                    }
                    K = x;
                    x = g;
                    l++;
                }
                t = p.length;
                if (0 < t) {
                    r = c;
                    if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
                    p = r.join(",") + "{" + p + "}";
                    if (0 !== w * E) {
                        2 !== w || L(p, 2) || (E = 0);
                        switch(E){
                            case 111:
                                p = p.replace(ha, ":-moz-$1") + p;
                                break;
                            case 112:
                                p = p.replace(Q, "::-webkit-input-$1") + p.replace(Q, "::-moz-$1") + p.replace(Q, ":-ms-input-$1") + p;
                        }
                        E = 0;
                    }
                }
                return G + p + F;
            }
            function X(d, c, e) {
                var h = c.trim().split(ia);
                c = h;
                var a = h.length, m = d.length;
                switch(m){
                    case 0:
                    case 1:
                        var b = 0;
                        for(d = 0 === m ? "" : d[0] + " "; b < a; ++b)c[b] = Z(d, c[b], e).trim();
                        break;
                    default:
                        var v = b = 0;
                        for(c = []; b < a; ++b)for(var n = 0; n < m; ++n)c[v++] = Z(d[n] + " ", h[b], e).trim();
                }
                return c;
            }
            function Z(d, c, e) {
                var h = c.charCodeAt(0);
                33 > h && (h = (c = c.trim()).charCodeAt(0));
                switch(h){
                    case 38:
                        return c.replace(F, "$1" + d.trim());
                    case 58:
                        return d.trim() + c.replace(F, "$1" + d.trim());
                    default:
                        if (0 < 1 * e && 0 < c.indexOf("\f")) return c.replace(F, (58 === d.charCodeAt(0) ? "" : "$1") + d.trim());
                }
                return d + c;
            }
            function P(d, c, e, h) {
                var a = d + ";", m = 2 * c + 3 * e + 4 * h;
                if (944 === m) {
                    d = a.indexOf(":", 9) + 1;
                    var b = a.substring(d, a.length - 1).trim();
                    b = a.substring(0, d).trim() + b + ";";
                    return 1 === w || 2 === w && L(b, 1) ? "-webkit-" + b + b : b;
                }
                if (0 === w || 2 === w && !L(a, 1)) return a;
                switch(m){
                    case 1015:
                        return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
                    case 951:
                        return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
                    case 963:
                        return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
                    case 1009:
                        if (100 !== a.charCodeAt(4)) break;
                    case 969:
                    case 942:
                        return "-webkit-" + a + a;
                    case 978:
                        return "-webkit-" + a + "-moz-" + a + a;
                    case 1019:
                    case 983:
                        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
                    case 883:
                        if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                        if (0 < a.indexOf("image-set(", 11)) return a.replace(ja, "$1-webkit-$2") + a;
                        break;
                    case 932:
                        if (45 === a.charCodeAt(4)) switch(a.charCodeAt(5)){
                            case 103:
                                return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                            case 115:
                                return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                            case 98:
                                return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
                        }
                        return "-webkit-" + a + "-ms-" + a + a;
                    case 964:
                        return "-webkit-" + a + "-ms-flex-" + a + a;
                    case 1023:
                        if (99 !== a.charCodeAt(8)) break;
                        b = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
                        return "-webkit-box-pack" + b + "-webkit-" + a + "-ms-flex-pack" + b + a;
                    case 1005:
                        return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;
                    case 1e3:
                        b = a.substring(13).trim();
                        c = b.indexOf("-") + 1;
                        switch(b.charCodeAt(0) + b.charCodeAt(c)){
                            case 226:
                                b = a.replace(G, "tb");
                                break;
                            case 232:
                                b = a.replace(G, "tb-rl");
                                break;
                            case 220:
                                b = a.replace(G, "lr");
                                break;
                            default:
                                return a;
                        }
                        return "-webkit-" + a + "-ms-" + b + a;
                    case 1017:
                        if (-1 === a.indexOf("sticky", 9)) break;
                    case 975:
                        c = (a = d).length - 10;
                        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim();
                        switch(m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)){
                            case 203:
                                if (111 > b.charCodeAt(8)) break;
                            case 115:
                                a = a.replace(b, "-webkit-" + b) + ";" + a;
                                break;
                            case 207:
                            case 102:
                                a = a.replace(b, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a.replace(b, "-webkit-" + b) + ";" + a.replace(b, "-ms-" + b + "box") + ";" + a;
                        }
                        return a + ";";
                    case 938:
                        if (45 === a.charCodeAt(5)) switch(a.charCodeAt(6)){
                            case 105:
                                return b = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a;
                            case 115:
                                return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;
                            default:
                                return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
                        }
                        break;
                    case 973:
                    case 989:
                        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
                    case 931:
                    case 953:
                        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0) ? P(d.replace("stretch", "fill-available"), c, e, h).replace(":fill-available", ":stretch") : a.replace(b, "-webkit-" + b) + a.replace(b, "-moz-" + b.replace("fill-", "")) + a;
                        break;
                    case 962:
                        if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
                }
                return a;
            }
            function L(d, c) {
                var e = d.indexOf(1 === c ? ":" : "{"), h = d.substring(0, 3 !== c ? e : 10);
                e = d.substring(e + 1, d.length - 1);
                return R(2 !== c ? h : h.replace(na, "$1"), e, c);
            }
            function ea(d, c) {
                var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
                return e !== c + ";" ? e.replace(oa, " or ($1)").substring(4) : "(" + c + ")";
            }
            function H(d, c, e, h, a, m, b, v, n, q) {
                for(var g = 0, x = c, w; g < A; ++g)switch(w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)){
                    case void 0:
                    case !1:
                    case !0:
                    case null:
                        break;
                    default:
                        x = w;
                }
                if (x !== c) return x;
            }
            function T(d) {
                switch(d){
                    case void 0:
                    case null:
                        A = S.length = 0;
                        break;
                    default:
                        if ("function" === typeof d) S[A++] = d;
                        else if ("object" === typeof d) for(var c = 0, e = d.length; c < e; ++c)T(d[c]);
                        else Y = !!d | 0;
                }
                return T;
            }
            function U(d) {
                d = d.prefix;
                void 0 !== d && (R = null, d ? "function" !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
                return U;
            }
            function B(d, c) {
                var e = d;
                33 > e.charCodeAt(0) && (e = e.trim());
                V = e;
                e = [
                    V
                ];
                if (0 < A) {
                    var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
                    void 0 !== h && "string" === typeof h && (c = h);
                }
                var a = M(O, e, c, 0, 0);
                0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
                V = "";
                E = 0;
                z = D = 1;
                return a;
            }
            var ca = /^\0+/g, N = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q = /::(place)/g, ha = /:(read-only)/g, G = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z = 1, D = 1, E = 0, w = 1, O = [], S = [], A = 0, R = null, Y = 0, V = "";
            B.use = T;
            B.set = U;
            void 0 !== W && U(W);
            return B;
        }
        /* harmony default export */ __webpack_exports__["a"] = stylis_min;
    /***/ },
    /* 30 */ /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var unitlessKeys = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            // SVG-related properties
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        };
        /* harmony default export */ __webpack_exports__["a"] = unitlessKeys;
    /***/ },
    ,
    ,
    /* 33 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.useExecFind = exports.useExecCommand = exports.getInitialInputValue = exports.useErrorMessage = exports.useInfoMessage = exports.useFindMode = exports.useCommandMode = exports.useHide = void 0;
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const actions = tslib_1.__importStar(__webpack_require__(55));
        const contexts_1 = __webpack_require__(56);
        const messages = tslib_1.__importStar(__webpack_require__(4));
        const useHide = ()=>{
            const dispatch = react_1.default.useContext(contexts_1.AppDispatchContext);
            const hide = react_1.default.useCallback(()=>{
                window.top.postMessage(JSON.stringify({
                    type: messages.CONSOLE_UNFOCUS
                }), "*");
                dispatch(actions.hide());
            }, [
                dispatch
            ]);
            return hide;
        };
        exports.useHide = useHide;
        const useCommandMode = ()=>{
            const state = react_1.default.useContext(contexts_1.AppStateContext);
            const dispatch = react_1.default.useContext(contexts_1.AppDispatchContext);
            const show = react_1.default.useCallback((initialInputValue)=>{
                dispatch(actions.showCommand(initialInputValue));
            }, [
                dispatch
            ]);
            return {
                visible: state.mode === "command",
                initialInputValue: state.consoleText,
                show
            };
        };
        exports.useCommandMode = useCommandMode;
        const useFindMode = ()=>{
            const state = react_1.default.useContext(contexts_1.AppStateContext);
            const dispatch = react_1.default.useContext(contexts_1.AppDispatchContext);
            const show = react_1.default.useCallback(()=>{
                dispatch(actions.showFind());
            }, [
                dispatch
            ]);
            return {
                visible: state.mode === "find",
                show
            };
        };
        exports.useFindMode = useFindMode;
        const useInfoMessage = ()=>{
            const state = react_1.default.useContext(contexts_1.AppStateContext);
            const dispatch = react_1.default.useContext(contexts_1.AppDispatchContext);
            const show = react_1.default.useCallback((message)=>{
                dispatch(actions.showInfo(message));
            }, [
                dispatch
            ]);
            return {
                visible: state.mode === "info",
                message: state.mode === "info" ? state.messageText : "",
                show
            };
        };
        exports.useInfoMessage = useInfoMessage;
        const useErrorMessage = ()=>{
            const state = react_1.default.useContext(contexts_1.AppStateContext);
            const dispatch = react_1.default.useContext(contexts_1.AppDispatchContext);
            const show = react_1.default.useCallback((message)=>{
                dispatch(actions.showError(message));
            }, [
                dispatch
            ]);
            return {
                visible: state.mode === "error",
                message: state.mode === "error" ? state.messageText : "",
                show
            };
        };
        exports.useErrorMessage = useErrorMessage;
        const getInitialInputValue = ()=>{
            const state = react_1.default.useContext(contexts_1.AppStateContext);
            return state.consoleText;
        };
        exports.getInitialInputValue = getInitialInputValue;
        const useExecCommand = ()=>{
            const execCommand = react_1.default.useCallback((text)=>{
                browser.runtime.sendMessage({
                    type: messages.CONSOLE_ENTER_COMMAND,
                    text
                });
            }, []);
            return execCommand;
        };
        exports.useExecCommand = useExecCommand;
        const useExecFind = ()=>{
            const execFind = react_1.default.useCallback((text)=>{
                browser.runtime.sendMessage({
                    type: messages.CONSOLE_ENTER_FIND,
                    keyword: text
                });
            }, []);
            return execFind;
        };
        exports.useExecFind = useExecFind;
    /***/ },
    ,
    ,
    /* 36 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l = __webpack_require__(25), n = 60103, p = 60106;
        exports.Fragment = 60107;
        exports.StrictMode = 60108;
        exports.Profiler = 60114;
        var q = 60109, r = 60110, t = 60112;
        exports.Suspense = 60113;
        var u = 60115, v = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
            var w = Symbol.for;
            n = w("react.element");
            p = w("react.portal");
            exports.Fragment = w("react.fragment");
            exports.StrictMode = w("react.strict_mode");
            exports.Profiler = w("react.profiler");
            q = w("react.provider");
            r = w("react.context");
            t = w("react.forward_ref");
            exports.Suspense = w("react.suspense");
            u = w("react.memo");
            v = w("react.lazy");
        }
        var x = "function" === typeof Symbol && Symbol.iterator;
        function y(a) {
            if (null === a || "object" !== typeof a) return null;
            a = x && a[x] || a["@@iterator"];
            return "function" === typeof a ? a : null;
        }
        function z(a) {
            for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
            return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var A = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, B = {};
        function C(a, b, c) {
            this.props = a;
            this.context = b;
            this.refs = B;
            this.updater = c || A;
        }
        C.prototype.isReactComponent = {};
        C.prototype.setState = function(a, b) {
            if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
            this.updater.enqueueSetState(this, a, b, "setState");
        };
        C.prototype.forceUpdate = function(a) {
            this.updater.enqueueForceUpdate(this, a, "forceUpdate");
        };
        function D() {}
        D.prototype = C.prototype;
        function E(a, b, c) {
            this.props = a;
            this.context = b;
            this.refs = B;
            this.updater = c || A;
        }
        var F = E.prototype = new D;
        F.constructor = E;
        l(F, C.prototype);
        F.isPureReactComponent = !0;
        var G = {
            current: null
        }, H = Object.prototype.hasOwnProperty, I = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function J(a, b, c) {
            var e, d = {}, k = null, h = null;
            if (null != b) for(e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
            var g = arguments.length - 2;
            if (1 === g) d.children = c;
            else if (1 < g) {
                for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
                d.children = f;
            }
            if (a && a.defaultProps) for(e in g = a.defaultProps, g)void 0 === d[e] && (d[e] = g[e]);
            return {
                $$typeof: n,
                type: a,
                key: k,
                ref: h,
                props: d,
                _owner: G.current
            };
        }
        function K(a, b) {
            return {
                $$typeof: n,
                type: a.type,
                key: b,
                ref: a.ref,
                props: a.props,
                _owner: a._owner
            };
        }
        function L(a) {
            return "object" === typeof a && null !== a && a.$$typeof === n;
        }
        function escape(a) {
            var b = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + a.replace(/[=:]/g, function(a) {
                return b[a];
            });
        }
        var M = /\/+/g;
        function N(a, b) {
            return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
        }
        function O(a, b, c, e, d) {
            var k = typeof a;
            if ("undefined" === k || "boolean" === k) a = null;
            var h = !1;
            if (null === a) h = !0;
            else switch(k){
                case "string":
                case "number":
                    h = !0;
                    break;
                case "object":
                    switch(a.$$typeof){
                        case n:
                        case p:
                            h = !0;
                    }
            }
            if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a) {
                return a;
            })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
            h = 0;
            e = "" === e ? "." : e + ":";
            if (Array.isArray(a)) for(var g = 0; g < a.length; g++){
                k = a[g];
                var f = e + N(k, g);
                h += O(k, b, c, f, d);
            }
            else if (f = y(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
            else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
            return h;
        }
        function P(a, b, c) {
            if (null == a) return a;
            var e = [], d = 0;
            O(a, e, "", "", function(a) {
                return b.call(c, a, d++);
            });
            return e;
        }
        function Q(a) {
            if (-1 === a._status) {
                var b = a._result;
                b = b();
                a._status = 0;
                a._result = b;
                b.then(function(b) {
                    0 === a._status && (b = b.default, a._status = 1, a._result = b);
                }, function(b) {
                    0 === a._status && (a._status = 2, a._result = b);
                });
            }
            if (1 === a._status) return a._result;
            throw a._result;
        }
        var R = {
            current: null
        };
        function S() {
            var a = R.current;
            if (null === a) throw Error(z(321));
            return a;
        }
        var T = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: {
                transition: 0
            },
            ReactCurrentOwner: G,
            IsSomeRendererActing: {
                current: !1
            },
            assign: l
        };
        exports.Children = {
            map: P,
            forEach: function(a, b, c) {
                P(a, function() {
                    b.apply(this, arguments);
                }, c);
            },
            count: function(a) {
                var b = 0;
                P(a, function() {
                    b++;
                });
                return b;
            },
            toArray: function(a) {
                return P(a, function(a) {
                    return a;
                }) || [];
            },
            only: function(a) {
                if (!L(a)) throw Error(z(143));
                return a;
            }
        };
        exports.Component = C;
        exports.PureComponent = E;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
        exports.cloneElement = function(a, b, c) {
            if (null === a || void 0 === a) throw Error(z(267, a));
            var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
            if (null != b) {
                void 0 !== b.ref && (k = b.ref, h = G.current);
                void 0 !== b.key && (d = "" + b.key);
                if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                for(f in b)H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
            }
            var f = arguments.length - 2;
            if (1 === f) e.children = c;
            else if (1 < f) {
                g = Array(f);
                for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
                e.children = g;
            }
            return {
                $$typeof: n,
                type: a.type,
                key: d,
                ref: k,
                props: e,
                _owner: h
            };
        };
        exports.createContext = function(a, b) {
            void 0 === b && (b = null);
            a = {
                $$typeof: r,
                _calculateChangedBits: b,
                _currentValue: a,
                _currentValue2: a,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            };
            a.Provider = {
                $$typeof: q,
                _context: a
            };
            return a.Consumer = a;
        };
        exports.createElement = J;
        exports.createFactory = function(a) {
            var b = J.bind(null, a);
            b.type = a;
            return b;
        };
        exports.createRef = function() {
            return {
                current: null
            };
        };
        exports.forwardRef = function(a) {
            return {
                $$typeof: t,
                render: a
            };
        };
        exports.isValidElement = L;
        exports.lazy = function(a) {
            return {
                $$typeof: v,
                _payload: {
                    _status: -1,
                    _result: a
                },
                _init: Q
            };
        };
        exports.memo = function(a, b) {
            return {
                $$typeof: u,
                type: a,
                compare: void 0 === b ? null : b
            };
        };
        exports.useCallback = function(a, b) {
            return S().useCallback(a, b);
        };
        exports.useContext = function(a, b) {
            return S().useContext(a, b);
        };
        exports.useDebugValue = function() {};
        exports.useEffect = function(a, b) {
            return S().useEffect(a, b);
        };
        exports.useImperativeHandle = function(a, b, c) {
            return S().useImperativeHandle(a, b, c);
        };
        exports.useLayoutEffect = function(a, b) {
            return S().useLayoutEffect(a, b);
        };
        exports.useMemo = function(a, b) {
            return S().useMemo(a, b);
        };
        exports.useReducer = function(a, b, c) {
            return S().useReducer(a, b, c);
        };
        exports.useRef = function(a) {
            return S().useRef(a);
        };
        exports.useState = function(a) {
            return S().useState(a);
        };
        exports.version = "17.0.2";
    /***/ },
    /* 37 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/ var aa = __webpack_require__(1), m = __webpack_require__(25), r = __webpack_require__(38);
        function y(a) {
            for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
            return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        if (!aa) throw Error(y(227));
        var ba = new Set, ca = {};
        function da(a, b) {
            ea(a, b);
            ea(a + "Capture", b);
        }
        function ea(a, b) {
            ca[a] = b;
            for(a = 0; a < b.length; a++)ba.add(b[a]);
        }
        var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
        function la(a) {
            if (ia.call(ka, a)) return !0;
            if (ia.call(ja, a)) return !1;
            if (ha.test(a)) return ka[a] = !0;
            ja[a] = !0;
            return !1;
        }
        function ma(a, b, c, d) {
            if (null !== c && 0 === c.type) return !1;
            switch(typeof b){
                case "function":
                case "symbol":
                    return !0;
                case "boolean":
                    if (d) return !1;
                    if (null !== c) return !c.acceptsBooleans;
                    a = a.toLowerCase().slice(0, 5);
                    return "data-" !== a && "aria-" !== a;
                default:
                    return !1;
            }
        }
        function na(a, b, c, d) {
            if (null === b || "undefined" === typeof b || ma(a, b, c, d)) return !0;
            if (d) return !1;
            if (null !== c) switch(c.type){
                case 3:
                    return !b;
                case 4:
                    return !1 === b;
                case 5:
                    return isNaN(b);
                case 6:
                    return isNaN(b) || 1 > b;
            }
            return !1;
        }
        function B(a, b, c, d, e, f, g) {
            this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
            this.attributeName = d;
            this.attributeNamespace = e;
            this.mustUseProperty = c;
            this.propertyName = a;
            this.type = b;
            this.sanitizeURL = f;
            this.removeEmptyString = g;
        }
        var D = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
            D[a] = new B(a, 0, !1, a, null, !1, !1);
        });
        [
            [
                "acceptCharset",
                "accept-charset"
            ],
            [
                "className",
                "class"
            ],
            [
                "htmlFor",
                "for"
            ],
            [
                "httpEquiv",
                "http-equiv"
            ]
        ].forEach(function(a) {
            var b = a[0];
            D[b] = new B(b, 1, !1, a[1], null, !1, !1);
        });
        [
            "contentEditable",
            "draggable",
            "spellCheck",
            "value"
        ].forEach(function(a) {
            D[a] = new B(a, 2, !1, a.toLowerCase(), null, !1, !1);
        });
        [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha"
        ].forEach(function(a) {
            D[a] = new B(a, 2, !1, a, null, !1, !1);
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
            D[a] = new B(a, 3, !1, a.toLowerCase(), null, !1, !1);
        });
        [
            "checked",
            "multiple",
            "muted",
            "selected"
        ].forEach(function(a) {
            D[a] = new B(a, 3, !0, a, null, !1, !1);
        });
        [
            "capture",
            "download"
        ].forEach(function(a) {
            D[a] = new B(a, 4, !1, a, null, !1, !1);
        });
        [
            "cols",
            "rows",
            "size",
            "span"
        ].forEach(function(a) {
            D[a] = new B(a, 6, !1, a, null, !1, !1);
        });
        [
            "rowSpan",
            "start"
        ].forEach(function(a) {
            D[a] = new B(a, 5, !1, a.toLowerCase(), null, !1, !1);
        });
        var oa = /[\-:]([a-z])/g;
        function pa(a) {
            return a[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
            var b = a.replace(oa, pa);
            D[b] = new B(b, 1, !1, a, null, !1, !1);
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
            var b = a.replace(oa, pa);
            D[b] = new B(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
        });
        [
            "xml:base",
            "xml:lang",
            "xml:space"
        ].forEach(function(a) {
            var b = a.replace(oa, pa);
            D[b] = new B(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
        });
        [
            "tabIndex",
            "crossOrigin"
        ].forEach(function(a) {
            D[a] = new B(a, 1, !1, a.toLowerCase(), null, !1, !1);
        });
        D.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
        [
            "src",
            "href",
            "action",
            "formAction"
        ].forEach(function(a) {
            D[a] = new B(a, 1, !1, a.toLowerCase(), null, !0, !0);
        });
        function qa(a, b, c, d) {
            var e = D.hasOwnProperty(b) ? D[b] : null;
            var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
            f || (na(b, c, e, d) && (c = null), d || null === e ? la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
        }
        var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
            var E = Symbol.for;
            sa = E("react.element");
            ta = E("react.portal");
            ua = E("react.fragment");
            wa = E("react.strict_mode");
            xa = E("react.profiler");
            ya = E("react.provider");
            za = E("react.context");
            Aa = E("react.forward_ref");
            Ba = E("react.suspense");
            Ca = E("react.suspense_list");
            Da = E("react.memo");
            Ea = E("react.lazy");
            Fa = E("react.block");
            E("react.scope");
            Ga = E("react.opaque.id");
            Ha = E("react.debug_trace_mode");
            Ia = E("react.offscreen");
            Ja = E("react.legacy_hidden");
        }
        var Ka = "function" === typeof Symbol && Symbol.iterator;
        function La(a) {
            if (null === a || "object" !== typeof a) return null;
            a = Ka && a[Ka] || a["@@iterator"];
            return "function" === typeof a ? a : null;
        }
        var Ma;
        function Na(a) {
            if (void 0 === Ma) try {
                throw Error();
            } catch (c) {
                var b = c.stack.trim().match(/\n( *(at )?)/);
                Ma = b && b[1] || "";
            }
            return "\n" + Ma + a;
        }
        var Oa = !1;
        function Pa(a, b) {
            if (!a || Oa) return "";
            Oa = !0;
            var c = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (b) {
                    if (b = function() {
                        throw Error();
                    }, Object.defineProperty(b.prototype, "props", {
                        set: function() {
                            throw Error();
                        }
                    }), "object" === typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(b, []);
                        } catch (k) {
                            var d = k;
                        }
                        Reflect.construct(a, [], b);
                    } else {
                        try {
                            b.call();
                        } catch (k1) {
                            d = k1;
                        }
                        a.call(b.prototype);
                    }
                } else {
                    try {
                        throw Error();
                    } catch (k2) {
                        d = k2;
                    }
                    a();
                }
            } catch (k3) {
                if (k3 && d && "string" === typeof k3.stack) {
                    for(var e = k3.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];)h--;
                    for(; 1 <= g && 0 <= h; g--, h--)if (e[g] !== f[h]) {
                        if (1 !== g || 1 !== h) {
                            do if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at ");
                            while (1 <= g && 0 <= h);
                        }
                        break;
                    }
                }
            } finally{
                Oa = !1, Error.prepareStackTrace = c;
            }
            return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
        }
        function Qa(a) {
            switch(a.tag){
                case 5:
                    return Na(a.type);
                case 16:
                    return Na("Lazy");
                case 13:
                    return Na("Suspense");
                case 19:
                    return Na("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return a = Pa(a.type, !1), a;
                case 11:
                    return a = Pa(a.type.render, !1), a;
                case 22:
                    return a = Pa(a.type._render, !1), a;
                case 1:
                    return a = Pa(a.type, !0), a;
                default:
                    return "";
            }
        }
        function Ra(a) {
            if (null == a) return null;
            if ("function" === typeof a) return a.displayName || a.name || null;
            if ("string" === typeof a) return a;
            switch(a){
                case ua:
                    return "Fragment";
                case ta:
                    return "Portal";
                case xa:
                    return "Profiler";
                case wa:
                    return "StrictMode";
                case Ba:
                    return "Suspense";
                case Ca:
                    return "SuspenseList";
            }
            if ("object" === typeof a) switch(a.$$typeof){
                case za:
                    return (a.displayName || "Context") + ".Consumer";
                case ya:
                    return (a._context.displayName || "Context") + ".Provider";
                case Aa:
                    var b = a.render;
                    b = b.displayName || b.name || "";
                    return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
                case Da:
                    return Ra(a.type);
                case Fa:
                    return Ra(a._render);
                case Ea:
                    b = a._payload;
                    a = a._init;
                    try {
                        return Ra(a(b));
                    } catch (c) {}
            }
            return null;
        }
        function Sa(a) {
            switch(typeof a){
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined":
                    return a;
                default:
                    return "";
            }
        }
        function Ta(a) {
            var b = a.type;
            return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
        }
        function Ua(a) {
            var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
            if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
                var e = c.get, f = c.set;
                Object.defineProperty(a, b, {
                    configurable: !0,
                    get: function() {
                        return e.call(this);
                    },
                    set: function(a) {
                        d = "" + a;
                        f.call(this, a);
                    }
                });
                Object.defineProperty(a, b, {
                    enumerable: c.enumerable
                });
                return {
                    getValue: function() {
                        return d;
                    },
                    setValue: function(a) {
                        d = "" + a;
                    },
                    stopTracking: function() {
                        a._valueTracker = null;
                        delete a[b];
                    }
                };
            }
        }
        function Va(a) {
            a._valueTracker || (a._valueTracker = Ua(a));
        }
        function Wa(a) {
            if (!a) return !1;
            var b = a._valueTracker;
            if (!b) return !0;
            var c = b.getValue();
            var d = "";
            a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
            a = d;
            return a !== c ? (b.setValue(a), !0) : !1;
        }
        function Xa(a) {
            a = a || ("undefined" !== typeof document ? document : void 0);
            if ("undefined" === typeof a) return null;
            try {
                return a.activeElement || a.body;
            } catch (b) {
                return a.body;
            }
        }
        function Ya(a, b) {
            var c = b.checked;
            return m({}, b, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: null != c ? c : a._wrapperState.initialChecked
            });
        }
        function Za(a, b) {
            var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
            c = Sa(null != b.value ? b.value : c);
            a._wrapperState = {
                initialChecked: d,
                initialValue: c,
                controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
            };
        }
        function $a(a, b) {
            b = b.checked;
            null != b && qa(a, "checked", b, !1);
        }
        function ab(a, b) {
            $a(a, b);
            var c = Sa(b.value), d = b.type;
            if (null != c) {
                if ("number" === d) {
                    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
                } else a.value !== "" + c && (a.value = "" + c);
            } else if ("submit" === d || "reset" === d) {
                a.removeAttribute("value");
                return;
            }
            b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
            null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
        }
        function cb(a, b, c) {
            if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
                var d = b.type;
                if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
                b = "" + a._wrapperState.initialValue;
                c || b === a.value || (a.value = b);
                a.defaultValue = b;
            }
            c = a.name;
            "" !== c && (a.name = "");
            a.defaultChecked = !!a._wrapperState.initialChecked;
            "" !== c && (a.name = c);
        }
        function bb(a, b, c) {
            if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
        }
        function db(a) {
            var b = "";
            aa.Children.forEach(a, function(a) {
                null != a && (b += a);
            });
            return b;
        }
        function eb(a, b) {
            a = m({
                children: void 0
            }, b);
            if (b = db(b.children)) a.children = b;
            return a;
        }
        function fb(a, b, c, d) {
            a = a.options;
            if (b) {
                b = {};
                for(var e = 0; e < c.length; e++)b["$" + c[e]] = !0;
                for(c = 0; c < a.length; c++)e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
            } else {
                c = "" + Sa(c);
                b = null;
                for(e = 0; e < a.length; e++){
                    if (a[e].value === c) {
                        a[e].selected = !0;
                        d && (a[e].defaultSelected = !0);
                        return;
                    }
                    null !== b || a[e].disabled || (b = a[e]);
                }
                null !== b && (b.selected = !0);
            }
        }
        function gb(a, b) {
            if (null != b.dangerouslySetInnerHTML) throw Error(y(91));
            return m({}, b, {
                value: void 0,
                defaultValue: void 0,
                children: "" + a._wrapperState.initialValue
            });
        }
        function hb(a, b) {
            var c = b.value;
            if (null == c) {
                c = b.children;
                b = b.defaultValue;
                if (null != c) {
                    if (null != b) throw Error(y(92));
                    if (Array.isArray(c)) {
                        if (!(1 >= c.length)) throw Error(y(93));
                        c = c[0];
                    }
                    b = c;
                }
                null == b && (b = "");
                c = b;
            }
            a._wrapperState = {
                initialValue: Sa(c)
            };
        }
        function ib(a, b) {
            var c = Sa(b.value), d = Sa(b.defaultValue);
            null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
            null != d && (a.defaultValue = "" + d);
        }
        function jb(a) {
            var b = a.textContent;
            b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
        }
        var kb = {
            html: "http://www.w3.org/1999/xhtml",
            mathml: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg"
        };
        function lb(a) {
            switch(a){
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml";
            }
        }
        function mb(a, b) {
            return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
        }
        var nb, ob = function(a) {
            return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
                MSApp.execUnsafeLocalFunction(function() {
                    return a(b, c, d, e);
                });
            } : a;
        }(function(a, b) {
            if (a.namespaceURI !== kb.svg || "innerHTML" in a) a.innerHTML = b;
            else {
                nb = nb || document.createElement("div");
                nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
                for(b = nb.firstChild; a.firstChild;)a.removeChild(a.firstChild);
                for(; b.firstChild;)a.appendChild(b.firstChild);
            }
        });
        function pb(a, b) {
            if (b) {
                var c = a.firstChild;
                if (c && c === a.lastChild && 3 === c.nodeType) {
                    c.nodeValue = b;
                    return;
                }
            }
            a.textContent = b;
        }
        var qb = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        }, rb = [
            "Webkit",
            "ms",
            "Moz",
            "O"
        ];
        Object.keys(qb).forEach(function(a) {
            rb.forEach(function(b) {
                b = b + a.charAt(0).toUpperCase() + a.substring(1);
                qb[b] = qb[a];
            });
        });
        function sb(a, b, c) {
            return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
        }
        function tb(a, b) {
            a = a.style;
            for(var c in b)if (b.hasOwnProperty(c)) {
                var d = 0 === c.indexOf("--"), e = sb(c, b[c], d);
                "float" === c && (c = "cssFloat");
                d ? a.setProperty(c, e) : a[c] = e;
            }
        }
        var ub = m({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        });
        function vb(a, b) {
            if (b) {
                if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(y(137, a));
                if (null != b.dangerouslySetInnerHTML) {
                    if (null != b.children) throw Error(y(60));
                    if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(y(61));
                }
                if (null != b.style && "object" !== typeof b.style) throw Error(y(62));
            }
        }
        function wb(a, b) {
            if (-1 === a.indexOf("-")) return "string" === typeof b.is;
            switch(a){
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        function xb(a) {
            a = a.target || a.srcElement || window;
            a.correspondingUseElement && (a = a.correspondingUseElement);
            return 3 === a.nodeType ? a.parentNode : a;
        }
        var yb = null, zb = null, Ab = null;
        function Bb(a) {
            if (a = Cb(a)) {
                if ("function" !== typeof yb) throw Error(y(280));
                var b = a.stateNode;
                b && (b = Db(b), yb(a.stateNode, a.type, b));
            }
        }
        function Eb(a) {
            zb ? Ab ? Ab.push(a) : Ab = [
                a
            ] : zb = a;
        }
        function Fb() {
            if (zb) {
                var a = zb, b = Ab;
                Ab = zb = null;
                Bb(a);
                if (b) for(a = 0; a < b.length; a++)Bb(b[a]);
            }
        }
        function Gb(a, b) {
            return a(b);
        }
        function Hb(a, b, c, d, e) {
            return a(b, c, d, e);
        }
        function Ib() {}
        var Jb = Gb, Kb = !1, Lb = !1;
        function Mb() {
            if (null !== zb || null !== Ab) Ib(), Fb();
        }
        function Nb(a, b, c) {
            if (Lb) return a(b, c);
            Lb = !0;
            try {
                return Jb(a, b, c);
            } finally{
                Lb = !1, Mb();
            }
        }
        function Ob(a, b) {
            var c = a.stateNode;
            if (null === c) return null;
            var d = Db(c);
            if (null === d) return null;
            c = d[b];
            a: switch(b){
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
                    a = !d;
                    break a;
                default:
                    a = !1;
            }
            if (a) return null;
            if (c && "function" !== typeof c) throw Error(y(231, b, typeof c));
            return c;
        }
        var Pb = !1;
        if (fa) try {
            var Qb = {};
            Object.defineProperty(Qb, "passive", {
                get: function() {
                    Pb = !0;
                }
            });
            window.addEventListener("test", Qb, Qb);
            window.removeEventListener("test", Qb, Qb);
        } catch (a) {
            Pb = !1;
        }
        function Rb(a, b, c, d, e, f, g, h, k) {
            var l = Array.prototype.slice.call(arguments, 3);
            try {
                b.apply(c, l);
            } catch (n) {
                this.onError(n);
            }
        }
        var Sb = !1, Tb = null, Ub = !1, Vb = null, Wb = {
            onError: function(a) {
                Sb = !0;
                Tb = a;
            }
        };
        function Xb(a, b, c, d, e, f, g, h, k) {
            Sb = !1;
            Tb = null;
            Rb.apply(Wb, arguments);
        }
        function Yb(a, b, c, d, e, f, g, h, k) {
            Xb.apply(this, arguments);
            if (Sb) {
                if (Sb) {
                    var l = Tb;
                    Sb = !1;
                    Tb = null;
                } else throw Error(y(198));
                Ub || (Ub = !0, Vb = l);
            }
        }
        function Zb(a) {
            var b = a, c = a;
            if (a.alternate) for(; b.return;)b = b.return;
            else {
                a = b;
                do b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return;
                while (a);
            }
            return 3 === b.tag ? c : null;
        }
        function $b(a) {
            if (13 === a.tag) {
                var b = a.memoizedState;
                null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
                if (null !== b) return b.dehydrated;
            }
            return null;
        }
        function ac(a) {
            if (Zb(a) !== a) throw Error(y(188));
        }
        function bc(a) {
            var b = a.alternate;
            if (!b) {
                b = Zb(a);
                if (null === b) throw Error(y(188));
                return b !== a ? null : a;
            }
            for(var c = a, d = b;;){
                var e = c.return;
                if (null === e) break;
                var f = e.alternate;
                if (null === f) {
                    d = e.return;
                    if (null !== d) {
                        c = d;
                        continue;
                    }
                    break;
                }
                if (e.child === f.child) {
                    for(f = e.child; f;){
                        if (f === c) return ac(e), a;
                        if (f === d) return ac(e), b;
                        f = f.sibling;
                    }
                    throw Error(y(188));
                }
                if (c.return !== d.return) c = e, d = f;
                else {
                    for(var g = !1, h = e.child; h;){
                        if (h === c) {
                            g = !0;
                            c = e;
                            d = f;
                            break;
                        }
                        if (h === d) {
                            g = !0;
                            d = e;
                            c = f;
                            break;
                        }
                        h = h.sibling;
                    }
                    if (!g) {
                        for(h = f.child; h;){
                            if (h === c) {
                                g = !0;
                                c = f;
                                d = e;
                                break;
                            }
                            if (h === d) {
                                g = !0;
                                d = f;
                                c = e;
                                break;
                            }
                            h = h.sibling;
                        }
                        if (!g) throw Error(y(189));
                    }
                }
                if (c.alternate !== d) throw Error(y(190));
            }
            if (3 !== c.tag) throw Error(y(188));
            return c.stateNode.current === c ? a : b;
        }
        function cc(a) {
            a = bc(a);
            if (!a) return null;
            for(var b = a;;){
                if (5 === b.tag || 6 === b.tag) return b;
                if (b.child) b.child.return = b, b = b.child;
                else {
                    if (b === a) break;
                    for(; !b.sibling;){
                        if (!b.return || b.return === a) return null;
                        b = b.return;
                    }
                    b.sibling.return = b.return;
                    b = b.sibling;
                }
            }
            return null;
        }
        function dc(a, b) {
            for(var c = a.alternate; null !== b;){
                if (b === a || b === c) return !0;
                b = b.return;
            }
            return !1;
        }
        var ec, fc, gc, hc, ic = !1, jc = [], kc = null, lc = null, mc = null, nc = new Map, oc = new Map, pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function rc(a, b, c, d, e) {
            return {
                blockedOn: a,
                domEventName: b,
                eventSystemFlags: c | 16,
                nativeEvent: e,
                targetContainers: [
                    d
                ]
            };
        }
        function sc(a, b) {
            switch(a){
                case "focusin":
                case "focusout":
                    kc = null;
                    break;
                case "dragenter":
                case "dragleave":
                    lc = null;
                    break;
                case "mouseover":
                case "mouseout":
                    mc = null;
                    break;
                case "pointerover":
                case "pointerout":
                    nc.delete(b.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    oc.delete(b.pointerId);
            }
        }
        function tc(a, b, c, d, e, f) {
            if (null === a || a.nativeEvent !== f) return a = rc(b, c, d, e, f), null !== b && (b = Cb(b), null !== b && fc(b)), a;
            a.eventSystemFlags |= d;
            b = a.targetContainers;
            null !== e && -1 === b.indexOf(e) && b.push(e);
            return a;
        }
        function uc(a, b, c, d, e) {
            switch(b){
                case "focusin":
                    return kc = tc(kc, a, b, c, d, e), !0;
                case "dragenter":
                    return lc = tc(lc, a, b, c, d, e), !0;
                case "mouseover":
                    return mc = tc(mc, a, b, c, d, e), !0;
                case "pointerover":
                    var f = e.pointerId;
                    nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
                    return !0;
                case "gotpointercapture":
                    return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), !0;
            }
            return !1;
        }
        function vc(a) {
            var b = wc(a.target);
            if (null !== b) {
                var c = Zb(b);
                if (null !== c) {
                    if (b = c.tag, 13 === b) {
                        if (b = $b(c), null !== b) {
                            a.blockedOn = b;
                            hc(a.lanePriority, function() {
                                r.unstable_runWithPriority(a.priority, function() {
                                    gc(c);
                                });
                            });
                            return;
                        }
                    } else if (3 === b && c.stateNode.hydrate) {
                        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            a.blockedOn = null;
        }
        function xc(a) {
            if (null !== a.blockedOn) return !1;
            for(var b = a.targetContainers; 0 < b.length;){
                var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
                if (null !== c) return b = Cb(c), null !== b && fc(b), a.blockedOn = c, !1;
                b.shift();
            }
            return !0;
        }
        function zc(a, b, c) {
            xc(a) && c.delete(b);
        }
        function Ac() {
            for(ic = !1; 0 < jc.length;){
                var a = jc[0];
                if (null !== a.blockedOn) {
                    a = Cb(a.blockedOn);
                    null !== a && ec(a);
                    break;
                }
                for(var b = a.targetContainers; 0 < b.length;){
                    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
                    if (null !== c) {
                        a.blockedOn = c;
                        break;
                    }
                    b.shift();
                }
                null === a.blockedOn && jc.shift();
            }
            null !== kc && xc(kc) && (kc = null);
            null !== lc && xc(lc) && (lc = null);
            null !== mc && xc(mc) && (mc = null);
            nc.forEach(zc);
            oc.forEach(zc);
        }
        function Bc(a, b) {
            a.blockedOn === b && (a.blockedOn = null, ic || (ic = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
        }
        function Cc(a) {
            function b(b) {
                return Bc(b, a);
            }
            if (0 < jc.length) {
                Bc(jc[0], a);
                for(var c = 1; c < jc.length; c++){
                    var d = jc[c];
                    d.blockedOn === a && (d.blockedOn = null);
                }
            }
            null !== kc && Bc(kc, a);
            null !== lc && Bc(lc, a);
            null !== mc && Bc(mc, a);
            nc.forEach(b);
            oc.forEach(b);
            for(c = 0; c < pc.length; c++)d = pc[c], d.blockedOn === a && (d.blockedOn = null);
            for(; 0 < pc.length && (c = pc[0], null === c.blockedOn);)vc(c), null === c.blockedOn && pc.shift();
        }
        function Dc(a, b) {
            var c = {};
            c[a.toLowerCase()] = b.toLowerCase();
            c["Webkit" + a] = "webkit" + b;
            c["Moz" + a] = "moz" + b;
            return c;
        }
        var Ec = {
            animationend: Dc("Animation", "AnimationEnd"),
            animationiteration: Dc("Animation", "AnimationIteration"),
            animationstart: Dc("Animation", "AnimationStart"),
            transitionend: Dc("Transition", "TransitionEnd")
        }, Fc = {}, Gc = {};
        fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
        function Hc(a) {
            if (Fc[a]) return Fc[a];
            if (!Ec[a]) return a;
            var b = Ec[a], c;
            for(c in b)if (b.hasOwnProperty(c) && c in Gc) return Fc[a] = b[c];
            return a;
        }
        var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = new Map, Nc = new Map, Oc = [
            "abort",
            "abort",
            Ic,
            "animationEnd",
            Jc,
            "animationIteration",
            Kc,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Lc,
            "transitionEnd",
            "waiting",
            "waiting"
        ];
        function Pc(a, b) {
            for(var c = 0; c < a.length; c += 2){
                var d = a[c], e = a[c + 1];
                e = "on" + (e[0].toUpperCase() + e.slice(1));
                Nc.set(d, b);
                Mc.set(d, e);
                da(e, [
                    d
                ]);
            }
        }
        var Qc = r.unstable_now;
        Qc();
        var F = 8;
        function Rc(a) {
            if (0 !== (1 & a)) return F = 15, 1;
            if (0 !== (2 & a)) return F = 14, 2;
            if (0 !== (4 & a)) return F = 13, 4;
            var b = 24 & a;
            if (0 !== b) return F = 12, b;
            if (0 !== (a & 32)) return F = 11, 32;
            b = 192 & a;
            if (0 !== b) return F = 10, b;
            if (0 !== (a & 256)) return F = 9, 256;
            b = 3584 & a;
            if (0 !== b) return F = 8, b;
            if (0 !== (a & 4096)) return F = 7, 4096;
            b = 4186112 & a;
            if (0 !== b) return F = 6, b;
            b = 62914560 & a;
            if (0 !== b) return F = 5, b;
            if (a & 67108864) return F = 4, 67108864;
            if (0 !== (a & 134217728)) return F = 3, 134217728;
            b = 805306368 & a;
            if (0 !== b) return F = 2, b;
            if (0 !== (1073741824 & a)) return F = 1, 1073741824;
            F = 8;
            return a;
        }
        function Sc(a) {
            switch(a){
                case 99:
                    return 15;
                case 98:
                    return 10;
                case 97:
                case 96:
                    return 8;
                case 95:
                    return 2;
                default:
                    return 0;
            }
        }
        function Tc(a) {
            switch(a){
                case 15:
                case 14:
                    return 99;
                case 13:
                case 12:
                case 11:
                case 10:
                    return 98;
                case 9:
                case 8:
                case 7:
                case 6:
                case 4:
                case 5:
                    return 97;
                case 3:
                case 2:
                case 1:
                    return 95;
                case 0:
                    return 90;
                default:
                    throw Error(y(358, a));
            }
        }
        function Uc(a, b) {
            var c = a.pendingLanes;
            if (0 === c) return F = 0;
            var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
            if (0 !== f) d = f, e = F = 15;
            else if (f = c & 134217727, 0 !== f) {
                var k = f & ~g;
                0 !== k ? (d = Rc(k), e = F) : (h &= f, 0 !== h && (d = Rc(h), e = F));
            } else f = c & ~g, 0 !== f ? (d = Rc(f), e = F) : 0 !== h && (d = Rc(h), e = F);
            if (0 === d) return 0;
            d = 31 - Vc(d);
            d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
            if (0 !== b && b !== d && 0 === (b & g)) {
                Rc(b);
                if (e <= F) return b;
                F = e;
            }
            b = a.entangledLanes;
            if (0 !== b) for(a = a.entanglements, b &= d; 0 < b;)c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
            return d;
        }
        function Wc(a) {
            a = a.pendingLanes & -1073741825;
            return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
        }
        function Xc(a, b) {
            switch(a){
                case 15:
                    return 1;
                case 14:
                    return 2;
                case 12:
                    return a = Yc(24 & ~b), 0 === a ? Xc(10, b) : a;
                case 10:
                    return a = Yc(192 & ~b), 0 === a ? Xc(8, b) : a;
                case 8:
                    return a = Yc(3584 & ~b), 0 === a && (a = Yc(4186112 & ~b), 0 === a && (a = 512)), a;
                case 2:
                    return b = Yc(805306368 & ~b), 0 === b && (b = 268435456), b;
            }
            throw Error(y(358, a));
        }
        function Yc(a) {
            return a & -a;
        }
        function Zc(a) {
            for(var b = [], c = 0; 31 > c; c++)b.push(a);
            return b;
        }
        function $c(a, b, c) {
            a.pendingLanes |= b;
            var d = b - 1;
            a.suspendedLanes &= d;
            a.pingedLanes &= d;
            a = a.eventTimes;
            b = 31 - Vc(b);
            a[b] = c;
        }
        var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
        function ad(a) {
            return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
        }
        var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = !0;
        function gd(a, b, c, d) {
            Kb || Ib();
            var e = hd, f = Kb;
            Kb = !0;
            try {
                Hb(e, a, b, c, d);
            } finally{
                (Kb = f) || Mb();
            }
        }
        function id(a, b, c, d) {
            ed(dd, hd.bind(null, a, b, c, d));
        }
        function hd(a, b, c, d) {
            if (fd) {
                var e;
                if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a)) a = rc(null, a, b, c, d), jc.push(a);
                else {
                    var f = yc(a, b, c, d);
                    if (null === f) e && sc(a, d);
                    else {
                        if (e) {
                            if (-1 < qc.indexOf(a)) {
                                a = rc(f, a, b, c, d);
                                jc.push(a);
                                return;
                            }
                            if (uc(f, a, b, c, d)) return;
                            sc(a, d);
                        }
                        jd(a, b, d, null, c);
                    }
                }
            }
        }
        function yc(a, b, c, d) {
            var e = xb(d);
            e = wc(e);
            if (null !== e) {
                var f = Zb(e);
                if (null === f) e = null;
                else {
                    var g = f.tag;
                    if (13 === g) {
                        e = $b(f);
                        if (null !== e) return e;
                        e = null;
                    } else if (3 === g) {
                        if (f.stateNode.hydrate) return 3 === f.tag ? f.stateNode.containerInfo : null;
                        e = null;
                    } else f !== e && (e = null);
                }
            }
            jd(a, b, d, e, c);
            return null;
        }
        var kd = null, ld = null, md = null;
        function nd() {
            if (md) return md;
            var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
            for(a = 0; a < c && b[a] === e[a]; a++);
            var g = c - a;
            for(d = 1; d <= g && b[c - d] === e[f - d]; d++);
            return md = e.slice(a, 1 < d ? 1 - d : void 0);
        }
        function od(a) {
            var b = a.keyCode;
            "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
            10 === a && (a = 13);
            return 32 <= a || 13 === a ? a : 0;
        }
        function pd() {
            return !0;
        }
        function qd() {
            return !1;
        }
        function rd(a) {
            function b(b, d, e, f, g) {
                this._reactName = b;
                this._targetInst = e;
                this.type = d;
                this.nativeEvent = f;
                this.target = g;
                this.currentTarget = null;
                for(var c in a)a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
                this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
                this.isPropagationStopped = qd;
                return this;
            }
            m(b.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var a = this.nativeEvent;
                    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
                },
                stopPropagation: function() {
                    var a = this.nativeEvent;
                    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
                },
                persist: function() {},
                isPersistent: pd
            });
            return b;
        }
        var sd = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(a) {
                return a.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, td = rd(sd), ud = m({}, sd, {
            view: 0,
            detail: 0
        }), vd = rd(ud), wd, xd, yd, Ad = m({}, ud, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: zd,
            button: 0,
            buttons: 0,
            relatedTarget: function(a) {
                return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
            },
            movementX: function(a) {
                if ("movementX" in a) return a.movementX;
                a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
                return wd;
            },
            movementY: function(a) {
                return "movementY" in a ? a.movementY : xd;
            }
        }), Bd = rd(Ad), Cd = m({}, Ad, {
            dataTransfer: 0
        }), Dd = rd(Cd), Ed = m({}, ud, {
            relatedTarget: 0
        }), Fd = rd(Ed), Gd = m({}, sd, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Hd = rd(Gd), Id = m({}, sd, {
            clipboardData: function(a) {
                return "clipboardData" in a ? a.clipboardData : window.clipboardData;
            }
        }), Jd = rd(Id), Kd = m({}, sd, {
            data: 0
        }), Ld = rd(Kd), Md = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, Nd = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, Od = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function Pd(a) {
            var b = this.nativeEvent;
            return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
        }
        function zd() {
            return Pd;
        }
        var Qd = m({}, ud, {
            key: function(a) {
                if (a.key) {
                    var b = Md[a.key] || a.key;
                    if ("Unidentified" !== b) return b;
                }
                return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: zd,
            charCode: function(a) {
                return "keypress" === a.type ? od(a) : 0;
            },
            keyCode: function(a) {
                return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
            },
            which: function(a) {
                return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
            }
        }), Rd = rd(Qd), Sd = m({}, Ad, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), Td = rd(Sd), Ud = m({}, ud, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: zd
        }), Vd = rd(Ud), Wd = m({}, sd, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Xd = rd(Wd), Yd = m({}, Ad, {
            deltaX: function(a) {
                return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
            },
            deltaY: function(a) {
                return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), Zd = rd(Yd), $d = [
            9,
            13,
            27,
            32
        ], ae = fa && "CompositionEvent" in window, be = null;
        fa && "documentMode" in document && (be = document.documentMode);
        var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
        function ge(a, b) {
            switch(a){
                case "keyup":
                    return -1 !== $d.indexOf(b.keyCode);
                case "keydown":
                    return 229 !== b.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function he(a) {
            a = a.detail;
            return "object" === typeof a && "data" in a ? a.data : null;
        }
        var ie = !1;
        function je(a, b) {
            switch(a){
                case "compositionend":
                    return he(b);
                case "keypress":
                    if (32 !== b.which) return null;
                    fe = !0;
                    return ee;
                case "textInput":
                    return a = b.data, a === ee && fe ? null : a;
                default:
                    return null;
            }
        }
        function ke(a, b) {
            if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
            switch(a){
                case "paste":
                    return null;
                case "keypress":
                    if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                        if (b.char && 1 < b.char.length) return b.char;
                        if (b.which) return String.fromCharCode(b.which);
                    }
                    return null;
                case "compositionend":
                    return de && "ko" !== b.locale ? null : b.data;
                default:
                    return null;
            }
        }
        var le = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function me(a) {
            var b = a && a.nodeName && a.nodeName.toLowerCase();
            return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
        }
        function ne(a, b, c, d) {
            Eb(d);
            b = oe(b, "onChange");
            0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
                event: c,
                listeners: b
            }));
        }
        var pe = null, qe = null;
        function re(a) {
            se(a, 0);
        }
        function te(a) {
            var b = ue(a);
            if (Wa(b)) return a;
        }
        function ve(a, b) {
            if ("change" === a) return b;
        }
        var we = !1;
        if (fa) {
            var xe;
            if (fa) {
                var ye = "oninput" in document;
                if (!ye) {
                    var ze = document.createElement("div");
                    ze.setAttribute("oninput", "return;");
                    ye = "function" === typeof ze.oninput;
                }
                xe = ye;
            } else xe = !1;
            we = xe && (!document.documentMode || 9 < document.documentMode);
        }
        function Ae() {
            pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
        }
        function Be(a) {
            if ("value" === a.propertyName && te(qe)) {
                var b = [];
                ne(b, qe, a, xb(a));
                a = re;
                if (Kb) a(b);
                else {
                    Kb = !0;
                    try {
                        Gb(a, b);
                    } finally{
                        Kb = !1, Mb();
                    }
                }
            }
        }
        function Ce(a, b, c) {
            "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
        }
        function De(a) {
            if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
        }
        function Ee(a, b) {
            if ("click" === a) return te(b);
        }
        function Fe(a, b) {
            if ("input" === a || "change" === a) return te(b);
        }
        function Ge(a, b) {
            return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
        }
        var He = "function" === typeof Object.is ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
        function Je(a, b) {
            if (He(a, b)) return !0;
            if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
            var c = Object.keys(a), d = Object.keys(b);
            if (c.length !== d.length) return !1;
            for(d = 0; d < c.length; d++)if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]])) return !1;
            return !0;
        }
        function Ke(a) {
            for(; a && a.firstChild;)a = a.firstChild;
            return a;
        }
        function Le(a, b) {
            var c = Ke(a);
            a = 0;
            for(var d; c;){
                if (3 === c.nodeType) {
                    d = a + c.textContent.length;
                    if (a <= b && d >= b) return {
                        node: c,
                        offset: b - a
                    };
                    a = d;
                }
                a: {
                    for(; c;){
                        if (c.nextSibling) {
                            c = c.nextSibling;
                            break a;
                        }
                        c = c.parentNode;
                    }
                    c = void 0;
                }
                c = Ke(c);
            }
        }
        function Me(a, b) {
            return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
        }
        function Ne() {
            for(var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;){
                try {
                    var c = "string" === typeof b.contentWindow.location.href;
                } catch (d) {
                    c = !1;
                }
                if (c) a = b.contentWindow;
                else break;
                b = Xa(a.document);
            }
            return b;
        }
        function Oe(a) {
            var b = a && a.nodeName && a.nodeName.toLowerCase();
            return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
        }
        var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
        function Ue(a, b, c) {
            var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
            Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {
                start: d.selectionStart,
                end: d.selectionEnd
            } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
                anchorNode: d.anchorNode,
                anchorOffset: d.anchorOffset,
                focusNode: d.focusNode,
                focusOffset: d.focusOffset
            }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
                event: b,
                listeners: d
            }), b.target = Qe)));
        }
        Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
        Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
        Pc(Oc, 2);
        for(var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)Nc.set(Ve[We], 0);
        ea("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]);
        ea("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]);
        ea("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]);
        ea("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]);
        da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        da("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]);
        da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
        function Ze(a, b, c) {
            var d = a.type || "unknown-event";
            a.currentTarget = c;
            Yb(d, b, void 0, a);
            a.currentTarget = null;
        }
        function se(a, b) {
            b = 0 !== (b & 4);
            for(var c = 0; c < a.length; c++){
                var d = a[c], e = d.event;
                d = d.listeners;
                a: {
                    var f = void 0;
                    if (b) for(var g = d.length - 1; 0 <= g; g--){
                        var h = d[g], k = h.instance, l = h.currentTarget;
                        h = h.listener;
                        if (k !== f && e.isPropagationStopped()) break a;
                        Ze(e, h, l);
                        f = k;
                    }
                    else for(g = 0; g < d.length; g++){
                        h = d[g];
                        k = h.instance;
                        l = h.currentTarget;
                        h = h.listener;
                        if (k !== f && e.isPropagationStopped()) break a;
                        Ze(e, h, l);
                        f = k;
                    }
                }
            }
            if (Ub) throw a = Vb, Ub = !1, Vb = null, a;
        }
        function G(a, b) {
            var c = $e(b), d = a + "__bubble";
            c.has(d) || (af(b, a, 2, !1), c.add(d));
        }
        var bf = "_reactListening" + Math.random().toString(36).slice(2);
        function cf(a) {
            a[bf] || (a[bf] = !0, ba.forEach(function(b) {
                Ye.has(b) || df(b, !1, a, null);
                df(b, !0, a, null);
            }));
        }
        function df(a, b, c, d) {
            var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, f = c;
            "selectionchange" === a && 9 !== c.nodeType && (f = c.ownerDocument);
            if (null !== d && !b && Ye.has(a)) {
                if ("scroll" !== a) return;
                e |= 2;
                f = d;
            }
            var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
            g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
        }
        function af(a, b, c, d) {
            var e = Nc.get(b);
            switch(void 0 === e ? 2 : e){
                case 0:
                    e = gd;
                    break;
                case 1:
                    e = id;
                    break;
                default:
                    e = hd;
            }
            c = e.bind(null, b, c, a);
            e = void 0;
            !Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
            d ? void 0 !== e ? a.addEventListener(b, c, {
                capture: !0,
                passive: e
            }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
                passive: e
            }) : a.addEventListener(b, c, !1);
        }
        function jd(a, b, c, d, e) {
            var f = d;
            if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for(;;){
                if (null === d) return;
                var g = d.tag;
                if (3 === g || 4 === g) {
                    var h = d.stateNode.containerInfo;
                    if (h === e || 8 === h.nodeType && h.parentNode === e) break;
                    if (4 === g) for(g = d.return; null !== g;){
                        var k = g.tag;
                        if (3 === k || 4 === k) {
                            if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                        }
                        g = g.return;
                    }
                    for(; null !== h;){
                        g = wc(h);
                        if (null === g) return;
                        k = g.tag;
                        if (5 === k || 6 === k) {
                            d = f = g;
                            continue a;
                        }
                        h = h.parentNode;
                    }
                }
                d = d.return;
            }
            Nb(function() {
                var d = f, e = xb(c), g = [];
                a: {
                    var h = Mc.get(a);
                    if (void 0 !== h) {
                        var k = td, x = a;
                        switch(a){
                            case "keypress":
                                if (0 === od(c)) break a;
                            case "keydown":
                            case "keyup":
                                k = Rd;
                                break;
                            case "focusin":
                                x = "focus";
                                k = Fd;
                                break;
                            case "focusout":
                                x = "blur";
                                k = Fd;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                k = Fd;
                                break;
                            case "click":
                                if (2 === c.button) break a;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                k = Bd;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                k = Dd;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                k = Vd;
                                break;
                            case Ic:
                            case Jc:
                            case Kc:
                                k = Hd;
                                break;
                            case Lc:
                                k = Xd;
                                break;
                            case "scroll":
                                k = vd;
                                break;
                            case "wheel":
                                k = Zd;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                k = Jd;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                k = Td;
                        }
                        var w = 0 !== (b & 4), z = !w && "scroll" === a, u = w ? null !== h ? h + "Capture" : null : h;
                        w = [];
                        for(var t = d, q; null !== t;){
                            q = t;
                            var v = q.stateNode;
                            5 === q.tag && null !== v && (q = v, null !== u && (v = Ob(t, u), null != v && w.push(ef(t, v, q))));
                            if (z) break;
                            t = t.return;
                        }
                        0 < w.length && (h = new k(h, x, null, c, e), g.push({
                            event: h,
                            listeners: w
                        }));
                    }
                }
                if (0 === (b & 7)) {
                    a: {
                        h = "mouseover" === a || "pointerover" === a;
                        k = "mouseout" === a || "pointerout" === a;
                        if (h && 0 === (b & 16) && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff])) break a;
                        if (k || h) {
                            h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                            if (k) {
                                if (x = c.relatedTarget || c.toElement, k = d, x = x ? wc(x) : null, null !== x && (z = Zb(x), x !== z || 5 !== x.tag && 6 !== x.tag)) x = null;
                            } else k = null, x = d;
                            if (k !== x) {
                                w = Bd;
                                v = "onMouseLeave";
                                u = "onMouseEnter";
                                t = "mouse";
                                if ("pointerout" === a || "pointerover" === a) w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
                                z = null == k ? h : ue(k);
                                q = null == x ? h : ue(x);
                                h = new w(v, t + "leave", k, c, e);
                                h.target = z;
                                h.relatedTarget = q;
                                v = null;
                                wc(e) === d && (w = new w(u, t + "enter", x, c, e), w.target = q, w.relatedTarget = z, v = w);
                                z = v;
                                if (k && x) b: {
                                    w = k;
                                    u = x;
                                    t = 0;
                                    for(q = w; q; q = gf(q))t++;
                                    q = 0;
                                    for(v = u; v; v = gf(v))q++;
                                    for(; 0 < t - q;)w = gf(w), t--;
                                    for(; 0 < q - t;)u = gf(u), q--;
                                    for(; t--;){
                                        if (w === u || null !== u && w === u.alternate) break b;
                                        w = gf(w);
                                        u = gf(u);
                                    }
                                    w = null;
                                }
                                else w = null;
                                null !== k && hf(g, h, k, w, !1);
                                null !== x && null !== z && hf(g, z, x, w, !0);
                            }
                        }
                    }
                    a: {
                        h = d ? ue(d) : window;
                        k = h.nodeName && h.nodeName.toLowerCase();
                        if ("select" === k || "input" === k && "file" === h.type) var J = ve;
                        else if (me(h)) {
                            if (we) J = Fe;
                            else {
                                J = De;
                                var K = Ce;
                            }
                        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (J = Ee);
                        if (J && (J = J(a, d))) {
                            ne(g, J, c, e);
                            break a;
                        }
                        K && K(a, h, d);
                        "focusout" === a && (K = h._wrapperState) && K.controlled && "number" === h.type && bb(h, "number", h.value);
                    }
                    K = d ? ue(d) : window;
                    switch(a){
                        case "focusin":
                            if (me(K) || "true" === K.contentEditable) Qe = K, Re = d, Se = null;
                            break;
                        case "focusout":
                            Se = Re = Qe = null;
                            break;
                        case "mousedown":
                            Te = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            Te = !1;
                            Ue(g, c, e);
                            break;
                        case "selectionchange":
                            if (Pe) break;
                        case "keydown":
                        case "keyup":
                            Ue(g, c, e);
                    }
                    var Q;
                    if (ae) b: {
                        switch(a){
                            case "compositionstart":
                                var L = "onCompositionStart";
                                break b;
                            case "compositionend":
                                L = "onCompositionEnd";
                                break b;
                            case "compositionupdate":
                                L = "onCompositionUpdate";
                                break b;
                        }
                        L = void 0;
                    }
                    else ie ? ge(a, c) && (L = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L = "onCompositionStart");
                    L && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== L ? "onCompositionEnd" === L && ie && (Q = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), K = oe(d, L), 0 < K.length && (L = new Ld(L, a, null, c, e), g.push({
                        event: L,
                        listeners: K
                    }), Q ? L.data = Q : (Q = he(c), null !== Q && (L.data = Q))));
                    if (Q = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
                        event: e,
                        listeners: d
                    }), e.data = Q);
                }
                se(g, b);
            });
        }
        function ef(a, b, c) {
            return {
                instance: a,
                listener: b,
                currentTarget: c
            };
        }
        function oe(a, b) {
            for(var c = b + "Capture", d = []; null !== a;){
                var e = a, f = e.stateNode;
                5 === e.tag && null !== f && (e = f, f = Ob(a, c), null != f && d.unshift(ef(a, f, e)), f = Ob(a, b), null != f && d.push(ef(a, f, e)));
                a = a.return;
            }
            return d;
        }
        function gf(a) {
            if (null === a) return null;
            do a = a.return;
            while (a && 5 !== a.tag);
            return a ? a : null;
        }
        function hf(a, b, c, d, e) {
            for(var f = b._reactName, g = []; null !== c && c !== d;){
                var h = c, k = h.alternate, l = h.stateNode;
                if (null !== k && k === d) break;
                5 === h.tag && null !== l && (h = l, e ? (k = Ob(c, f), null != k && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), null != k && g.push(ef(c, k, h))));
                c = c.return;
            }
            0 !== g.length && a.push({
                event: b,
                listeners: g
            });
        }
        function jf() {}
        var kf = null, lf = null;
        function mf(a, b) {
            switch(a){
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!b.autoFocus;
            }
            return !1;
        }
        function nf(a, b) {
            return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
        }
        var of = "function" === typeof setTimeout ? setTimeout : void 0, pf = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function qf(a) {
            1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
        }
        function rf(a) {
            for(; null != a; a = a.nextSibling){
                var b = a.nodeType;
                if (1 === b || 3 === b) break;
            }
            return a;
        }
        function sf(a) {
            a = a.previousSibling;
            for(var b = 0; a;){
                if (8 === a.nodeType) {
                    var c = a.data;
                    if ("$" === c || "$!" === c || "$?" === c) {
                        if (0 === b) return a;
                        b--;
                    } else "/$" === c && b++;
                }
                a = a.previousSibling;
            }
            return null;
        }
        var tf = 0;
        function uf(a) {
            return {
                $$typeof: Ga,
                toString: a,
                valueOf: a
            };
        }
        var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
        function wc(a) {
            var b = a[wf];
            if (b) return b;
            for(var c = a.parentNode; c;){
                if (b = c[ff] || c[wf]) {
                    c = b.alternate;
                    if (null !== b.child || null !== c && null !== c.child) for(a = sf(a); null !== a;){
                        if (c = a[wf]) return c;
                        a = sf(a);
                    }
                    return b;
                }
                a = c;
                c = a.parentNode;
            }
            return null;
        }
        function Cb(a) {
            a = a[wf] || a[ff];
            return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
        }
        function ue(a) {
            if (5 === a.tag || 6 === a.tag) return a.stateNode;
            throw Error(y(33));
        }
        function Db(a) {
            return a[xf] || null;
        }
        function $e(a) {
            var b = a[yf];
            void 0 === b && (b = a[yf] = new Set);
            return b;
        }
        var zf = [], Af = -1;
        function Bf(a) {
            return {
                current: a
            };
        }
        function H(a) {
            0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
        }
        function I(a, b) {
            Af++;
            zf[Af] = a.current;
            a.current = b;
        }
        var Cf = {}, M = Bf(Cf), N = Bf(!1), Df = Cf;
        function Ef(a, b) {
            var c = a.type.contextTypes;
            if (!c) return Cf;
            var d = a.stateNode;
            if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
            var e = {}, f;
            for(f in c)e[f] = b[f];
            d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
            return e;
        }
        function Ff(a) {
            a = a.childContextTypes;
            return null !== a && void 0 !== a;
        }
        function Gf() {
            H(N);
            H(M);
        }
        function Hf(a, b, c) {
            if (M.current !== Cf) throw Error(y(168));
            I(M, b);
            I(N, c);
        }
        function If(a, b, c) {
            var d = a.stateNode;
            a = b.childContextTypes;
            if ("function" !== typeof d.getChildContext) return c;
            d = d.getChildContext();
            for(var e in d)if (!(e in a)) throw Error(y(108, Ra(b) || "Unknown", e));
            return m({}, c, d);
        }
        function Jf(a) {
            a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
            Df = M.current;
            I(M, a);
            I(N, N.current);
            return !0;
        }
        function Kf(a, b, c) {
            var d = a.stateNode;
            if (!d) throw Error(y(169));
            c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
            I(N, c);
        }
        var Lf = null, Mf = null, Nf = r.unstable_runWithPriority, Of = r.unstable_scheduleCallback, Pf = r.unstable_cancelCallback, Qf = r.unstable_shouldYield, Rf = r.unstable_requestPaint, Sf = r.unstable_now, Tf = r.unstable_getCurrentPriorityLevel, Uf = r.unstable_ImmediatePriority, Vf = r.unstable_UserBlockingPriority, Wf = r.unstable_NormalPriority, Xf = r.unstable_LowPriority, Yf = r.unstable_IdlePriority, Zf = {}, $f = void 0 !== Rf ? Rf : function() {}, ag = null, bg = null, cg = !1, dg = Sf(), O = 1E4 > dg ? Sf : function() {
            return Sf() - dg;
        };
        function eg() {
            switch(Tf()){
                case Uf:
                    return 99;
                case Vf:
                    return 98;
                case Wf:
                    return 97;
                case Xf:
                    return 96;
                case Yf:
                    return 95;
                default:
                    throw Error(y(332));
            }
        }
        function fg(a) {
            switch(a){
                case 99:
                    return Uf;
                case 98:
                    return Vf;
                case 97:
                    return Wf;
                case 96:
                    return Xf;
                case 95:
                    return Yf;
                default:
                    throw Error(y(332));
            }
        }
        function gg(a, b) {
            a = fg(a);
            return Nf(a, b);
        }
        function hg(a, b, c) {
            a = fg(a);
            return Of(a, b, c);
        }
        function ig() {
            if (null !== bg) {
                var a = bg;
                bg = null;
                Pf(a);
            }
            jg();
        }
        function jg() {
            if (!cg && null !== ag) {
                cg = !0;
                var a = 0;
                try {
                    var b = ag;
                    gg(99, function() {
                        for(; a < b.length; a++){
                            var c = b[a];
                            do c = c(!0);
                            while (null !== c);
                        }
                    });
                    ag = null;
                } catch (c) {
                    throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
                } finally{
                    cg = !1;
                }
            }
        }
        var kg = ra.ReactCurrentBatchConfig;
        function lg(a, b) {
            if (a && a.defaultProps) {
                b = m({}, b);
                a = a.defaultProps;
                for(var c in a)void 0 === b[c] && (b[c] = a[c]);
                return b;
            }
            return b;
        }
        var mg = Bf(null), ng = null, og = null, pg = null;
        function qg() {
            pg = og = ng = null;
        }
        function rg(a) {
            var b = mg.current;
            H(mg);
            a.type._context._currentValue = b;
        }
        function sg(a, b) {
            for(; null !== a;){
                var c = a.alternate;
                if ((a.childLanes & b) === b) {
                    if (null === c || (c.childLanes & b) === b) break;
                    else c.childLanes |= b;
                } else a.childLanes |= b, null !== c && (c.childLanes |= b);
                a = a.return;
            }
        }
        function tg(a, b) {
            ng = a;
            pg = og = null;
            a = a.dependencies;
            null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (ug = !0), a.firstContext = null);
        }
        function vg(a, b) {
            if (pg !== a && !1 !== b && 0 !== b) {
                if ("number" !== typeof b || 1073741823 === b) pg = a, b = 1073741823;
                b = {
                    context: a,
                    observedBits: b,
                    next: null
                };
                if (null === og) {
                    if (null === ng) throw Error(y(308));
                    og = b;
                    ng.dependencies = {
                        lanes: 0,
                        firstContext: b,
                        responders: null
                    };
                } else og = og.next = b;
            }
            return a._currentValue;
        }
        var wg = !1;
        function xg(a) {
            a.updateQueue = {
                baseState: a.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null
                },
                effects: null
            };
        }
        function yg(a, b) {
            a = a.updateQueue;
            b.updateQueue === a && (b.updateQueue = {
                baseState: a.baseState,
                firstBaseUpdate: a.firstBaseUpdate,
                lastBaseUpdate: a.lastBaseUpdate,
                shared: a.shared,
                effects: a.effects
            });
        }
        function zg(a, b) {
            return {
                eventTime: a,
                lane: b,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function Ag(a, b) {
            a = a.updateQueue;
            if (null !== a) {
                a = a.shared;
                var c = a.pending;
                null === c ? b.next = b : (b.next = c.next, c.next = b);
                a.pending = b;
            }
        }
        function Bg(a, b) {
            var c = a.updateQueue, d = a.alternate;
            if (null !== d && (d = d.updateQueue, c === d)) {
                var e = null, f = null;
                c = c.firstBaseUpdate;
                if (null !== c) {
                    do {
                        var g = {
                            eventTime: c.eventTime,
                            lane: c.lane,
                            tag: c.tag,
                            payload: c.payload,
                            callback: c.callback,
                            next: null
                        };
                        null === f ? e = f = g : f = f.next = g;
                        c = c.next;
                    }while (null !== c);
                    null === f ? e = f = b : f = f.next = b;
                } else e = f = b;
                c = {
                    baseState: d.baseState,
                    firstBaseUpdate: e,
                    lastBaseUpdate: f,
                    shared: d.shared,
                    effects: d.effects
                };
                a.updateQueue = c;
                return;
            }
            a = c.lastBaseUpdate;
            null === a ? c.firstBaseUpdate = b : a.next = b;
            c.lastBaseUpdate = b;
        }
        function Cg(a, b, c, d) {
            var e = a.updateQueue;
            wg = !1;
            var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
            if (null !== h) {
                e.shared.pending = null;
                var k = h, l = k.next;
                k.next = null;
                null === g ? f = l : g.next = l;
                g = k;
                var n = a.alternate;
                if (null !== n) {
                    n = n.updateQueue;
                    var A = n.lastBaseUpdate;
                    A !== g && (null === A ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
                }
            }
            if (null !== f) {
                A = e.baseState;
                g = 0;
                n = l = k = null;
                do {
                    h = f.lane;
                    var p = f.eventTime;
                    if ((d & h) === h) {
                        null !== n && (n = n.next = {
                            eventTime: p,
                            lane: 0,
                            tag: f.tag,
                            payload: f.payload,
                            callback: f.callback,
                            next: null
                        });
                        a: {
                            var C = a, x = f;
                            h = b;
                            p = c;
                            switch(x.tag){
                                case 1:
                                    C = x.payload;
                                    if ("function" === typeof C) {
                                        A = C.call(p, A, h);
                                        break a;
                                    }
                                    A = C;
                                    break a;
                                case 3:
                                    C.flags = C.flags & -4097 | 64;
                                case 0:
                                    C = x.payload;
                                    h = "function" === typeof C ? C.call(p, A, h) : C;
                                    if (null === h || void 0 === h) break a;
                                    A = m({}, A, h);
                                    break a;
                                case 2:
                                    wg = !0;
                            }
                        }
                        null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [
                            f
                        ] : h.push(f));
                    } else p = {
                        eventTime: p,
                        lane: h,
                        tag: f.tag,
                        payload: f.payload,
                        callback: f.callback,
                        next: null
                    }, null === n ? (l = n = p, k = A) : n = n.next = p, g |= h;
                    f = f.next;
                    if (null === f) {
                        if (h = e.shared.pending, null === h) break;
                        else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
                    }
                }while (1);
                null === n && (k = A);
                e.baseState = k;
                e.firstBaseUpdate = l;
                e.lastBaseUpdate = n;
                Dg |= g;
                a.lanes = g;
                a.memoizedState = A;
            }
        }
        function Eg(a, b, c) {
            a = b.effects;
            b.effects = null;
            if (null !== a) for(b = 0; b < a.length; b++){
                var d = a[b], e = d.callback;
                if (null !== e) {
                    d.callback = null;
                    d = c;
                    if ("function" !== typeof e) throw Error(y(191, e));
                    e.call(d);
                }
            }
        }
        var Fg = (new aa.Component).refs;
        function Gg(a, b, c, d) {
            b = a.memoizedState;
            c = c(d, b);
            c = null === c || void 0 === c ? b : m({}, b, c);
            a.memoizedState = c;
            0 === a.lanes && (a.updateQueue.baseState = c);
        }
        var Kg = {
            isMounted: function(a) {
                return (a = a._reactInternals) ? Zb(a) === a : !1;
            },
            enqueueSetState: function(a, b, c) {
                a = a._reactInternals;
                var d = Hg(), e = Ig(a), f = zg(d, e);
                f.payload = b;
                void 0 !== c && null !== c && (f.callback = c);
                Ag(a, f);
                Jg(a, e, d);
            },
            enqueueReplaceState: function(a, b, c) {
                a = a._reactInternals;
                var d = Hg(), e = Ig(a), f = zg(d, e);
                f.tag = 1;
                f.payload = b;
                void 0 !== c && null !== c && (f.callback = c);
                Ag(a, f);
                Jg(a, e, d);
            },
            enqueueForceUpdate: function(a, b) {
                a = a._reactInternals;
                var c = Hg(), d = Ig(a), e = zg(c, d);
                e.tag = 2;
                void 0 !== b && null !== b && (e.callback = b);
                Ag(a, e);
                Jg(a, d, c);
            }
        };
        function Lg(a, b, c, d, e, f, g) {
            a = a.stateNode;
            return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : !0;
        }
        function Mg(a, b, c) {
            var d = !1, e = Cf;
            var f = b.contextType;
            "object" === typeof f && null !== f ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf);
            b = new b(c, f);
            a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
            b.updater = Kg;
            a.stateNode = b;
            b._reactInternals = a;
            d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
            return b;
        }
        function Ng(a, b, c, d) {
            a = b.state;
            "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
            "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
            b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
        }
        function Og(a, b, c, d) {
            var e = a.stateNode;
            e.props = c;
            e.state = a.memoizedState;
            e.refs = Fg;
            xg(a);
            var f = b.contextType;
            "object" === typeof f && null !== f ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
            Cg(a, c, e, d);
            e.state = a.memoizedState;
            f = b.getDerivedStateFromProps;
            "function" === typeof f && (Gg(a, b, f, c), e.state = a.memoizedState);
            "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
            "function" === typeof e.componentDidMount && (a.flags |= 4);
        }
        var Pg = Array.isArray;
        function Qg(a, b, c) {
            a = c.ref;
            if (null !== a && "function" !== typeof a && "object" !== typeof a) {
                if (c._owner) {
                    c = c._owner;
                    if (c) {
                        if (1 !== c.tag) throw Error(y(309));
                        var d = c.stateNode;
                    }
                    if (!d) throw Error(y(147, a));
                    var e = "" + a;
                    if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
                    b = function(a) {
                        var b = d.refs;
                        b === Fg && (b = d.refs = {});
                        null === a ? delete b[e] : b[e] = a;
                    };
                    b._stringRef = e;
                    return b;
                }
                if ("string" !== typeof a) throw Error(y(284));
                if (!c._owner) throw Error(y(290, a));
            }
            return a;
        }
        function Rg(a, b) {
            if ("textarea" !== a.type) throw Error(y(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
        }
        function Sg(a) {
            function b(b, c) {
                if (a) {
                    var d = b.lastEffect;
                    null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
                    c.nextEffect = null;
                    c.flags = 8;
                }
            }
            function c(c, d) {
                if (!a) return null;
                for(; null !== d;)b(c, d), d = d.sibling;
                return null;
            }
            function d(a, b) {
                for(a = new Map; null !== b;)null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
                return a;
            }
            function e(a, b) {
                a = Tg(a, b);
                a.index = 0;
                a.sibling = null;
                return a;
            }
            function f(b, c, d) {
                b.index = d;
                if (!a) return c;
                d = b.alternate;
                if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
                b.flags = 2;
                return c;
            }
            function g(b) {
                a && null === b.alternate && (b.flags = 2);
                return b;
            }
            function h(a, b, c, d) {
                if (null === b || 6 !== b.tag) return b = Ug(c, a.mode, d), b.return = a, b;
                b = e(b, c);
                b.return = a;
                return b;
            }
            function k(a, b, c, d) {
                if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Qg(a, b, c), d.return = a, d;
                d = Vg(c.type, c.key, c.props, null, a.mode, d);
                d.ref = Qg(a, b, c);
                d.return = a;
                return d;
            }
            function l(a, b, c, d) {
                if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Wg(c, a.mode, d), b.return = a, b;
                b = e(b, c.children || []);
                b.return = a;
                return b;
            }
            function n(a, b, c, d, f) {
                if (null === b || 7 !== b.tag) return b = Xg(c, a.mode, d, f), b.return = a, b;
                b = e(b, c);
                b.return = a;
                return b;
            }
            function A(a, b, c) {
                if ("string" === typeof b || "number" === typeof b) return b = Ug("" + b, a.mode, c), b.return = a, b;
                if ("object" === typeof b && null !== b) {
                    switch(b.$$typeof){
                        case sa:
                            return c = Vg(b.type, b.key, b.props, null, a.mode, c), c.ref = Qg(a, null, b), c.return = a, c;
                        case ta:
                            return b = Wg(b, a.mode, c), b.return = a, b;
                    }
                    if (Pg(b) || La(b)) return b = Xg(b, a.mode, c, null), b.return = a, b;
                    Rg(a, b);
                }
                return null;
            }
            function p(a, b, c, d) {
                var e = null !== b ? b.key : null;
                if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
                if ("object" === typeof c && null !== c) {
                    switch(c.$$typeof){
                        case sa:
                            return c.key === e ? c.type === ua ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;
                        case ta:
                            return c.key === e ? l(a, b, c, d) : null;
                    }
                    if (Pg(c) || La(c)) return null !== e ? null : n(a, b, c, d, null);
                    Rg(a, c);
                }
                return null;
            }
            function C(a, b, c, d, e) {
                if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
                if ("object" === typeof d && null !== d) {
                    switch(d.$$typeof){
                        case sa:
                            return a = a.get(null === d.key ? c : d.key) || null, d.type === ua ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);
                        case ta:
                            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
                    }
                    if (Pg(d) || La(d)) return a = a.get(c) || null, n(b, a, d, e, null);
                    Rg(b, d);
                }
                return null;
            }
            function x(e, g, h, k) {
                for(var l = null, t = null, u = g, z = g = 0, q = null; null !== u && z < h.length; z++){
                    u.index > z ? (q = u, u = null) : q = u.sibling;
                    var n = p(e, u, h[z], k);
                    if (null === n) {
                        null === u && (u = q);
                        break;
                    }
                    a && u && null === n.alternate && b(e, u);
                    g = f(n, g, z);
                    null === t ? l = n : t.sibling = n;
                    t = n;
                    u = q;
                }
                if (z === h.length) return c(e, u), l;
                if (null === u) {
                    for(; z < h.length; z++)u = A(e, h[z], k), null !== u && (g = f(u, g, z), null === t ? l = u : t.sibling = u, t = u);
                    return l;
                }
                for(u = d(e, u); z < h.length; z++)q = C(u, e, z, h[z], k), null !== q && (a && null !== q.alternate && u.delete(null === q.key ? z : q.key), g = f(q, g, z), null === t ? l = q : t.sibling = q, t = q);
                a && u.forEach(function(a) {
                    return b(e, a);
                });
                return l;
            }
            function w(e, g, h, k) {
                var l = La(h);
                if ("function" !== typeof l) throw Error(y(150));
                h = l.call(h);
                if (null == h) throw Error(y(151));
                for(var t = l = null, u = g, z = g = 0, q = null, n = h.next(); null !== u && !n.done; z++, n = h.next()){
                    u.index > z ? (q = u, u = null) : q = u.sibling;
                    var w = p(e, u, n.value, k);
                    if (null === w) {
                        null === u && (u = q);
                        break;
                    }
                    a && u && null === w.alternate && b(e, u);
                    g = f(w, g, z);
                    null === t ? l = w : t.sibling = w;
                    t = w;
                    u = q;
                }
                if (n.done) return c(e, u), l;
                if (null === u) {
                    for(; !n.done; z++, n = h.next())n = A(e, n.value, k), null !== n && (g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);
                    return l;
                }
                for(u = d(e, u); !n.done; z++, n = h.next())n = C(u, e, z, n.value, k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? z : n.key), g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);
                a && u.forEach(function(a) {
                    return b(e, a);
                });
                return l;
            }
            return function(a, d, f, h) {
                var k = "object" === typeof f && null !== f && f.type === ua && null === f.key;
                k && (f = f.props.children);
                var l = "object" === typeof f && null !== f;
                if (l) switch(f.$$typeof){
                    case sa:
                        a: {
                            l = f.key;
                            for(k = d; null !== k;){
                                if (k.key === l) {
                                    switch(k.tag){
                                        case 7:
                                            if (f.type === ua) {
                                                c(a, k.sibling);
                                                d = e(k, f.props.children);
                                                d.return = a;
                                                a = d;
                                                break a;
                                            }
                                            break;
                                        default:
                                            if (k.elementType === f.type) {
                                                c(a, k.sibling);
                                                d = e(k, f.props);
                                                d.ref = Qg(a, k, f);
                                                d.return = a;
                                                a = d;
                                                break a;
                                            }
                                    }
                                    c(a, k);
                                    break;
                                } else b(a, k);
                                k = k.sibling;
                            }
                            f.type === ua ? (d = Xg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Vg(f.type, f.key, f.props, null, a.mode, h), h.ref = Qg(a, d, f), h.return = a, a = h);
                        }
                        return g(a);
                    case ta:
                        a: {
                            for(k = f.key; null !== d;){
                                if (d.key === k) {
                                    if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                        c(a, d.sibling);
                                        d = e(d, f.children || []);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    } else {
                                        c(a, d);
                                        break;
                                    }
                                } else b(a, d);
                                d = d.sibling;
                            }
                            d = Wg(f, a.mode, h);
                            d.return = a;
                            a = d;
                        }
                        return g(a);
                }
                if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Ug(f, a.mode, h), d.return = a, a = d), g(a);
                if (Pg(f)) return x(a, d, f, h);
                if (La(f)) return w(a, d, f, h);
                l && Rg(a, f);
                if ("undefined" === typeof f && !k) switch(a.tag){
                    case 1:
                    case 22:
                    case 0:
                    case 11:
                    case 15:
                        throw Error(y(152, Ra(a.type) || "Component"));
                }
                return c(a, d);
            };
        }
        var Yg = Sg(!0), Zg = Sg(!1), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
        function dh(a) {
            if (a === $g) throw Error(y(174));
            return a;
        }
        function eh(a, b) {
            I(ch, b);
            I(bh, a);
            I(ah, $g);
            a = b.nodeType;
            switch(a){
                case 9:
                case 11:
                    b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
                    break;
                default:
                    a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
            }
            H(ah);
            I(ah, b);
        }
        function fh() {
            H(ah);
            H(bh);
            H(ch);
        }
        function gh(a) {
            dh(ch.current);
            var b = dh(ah.current);
            var c = mb(b, a.type);
            b !== c && (I(bh, a), I(ah, c));
        }
        function hh(a) {
            bh.current === a && (H(ah), H(bh));
        }
        var P = Bf(0);
        function ih(a) {
            for(var b = a; null !== b;){
                if (13 === b.tag) {
                    var c = b.memoizedState;
                    if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
                } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
                    if (0 !== (b.flags & 64)) return b;
                } else if (null !== b.child) {
                    b.child.return = b;
                    b = b.child;
                    continue;
                }
                if (b === a) break;
                for(; null === b.sibling;){
                    if (null === b.return || b.return === a) return null;
                    b = b.return;
                }
                b.sibling.return = b.return;
                b = b.sibling;
            }
            return null;
        }
        var jh = null, kh = null, lh = !1;
        function mh(a, b) {
            var c = nh(5, null, null, 0);
            c.elementType = "DELETED";
            c.type = "DELETED";
            c.stateNode = b;
            c.return = a;
            c.flags = 8;
            null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
        }
        function oh(a, b) {
            switch(a.tag){
                case 5:
                    var c = a.type;
                    b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
                    return null !== b ? (a.stateNode = b, !0) : !1;
                case 6:
                    return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;
                case 13:
                    return !1;
                default:
                    return !1;
            }
        }
        function ph(a) {
            if (lh) {
                var b = kh;
                if (b) {
                    var c = b;
                    if (!oh(a, b)) {
                        b = rf(c.nextSibling);
                        if (!b || !oh(a, b)) {
                            a.flags = a.flags & -1025 | 2;
                            lh = !1;
                            jh = a;
                            return;
                        }
                        mh(jh, c);
                    }
                    jh = a;
                    kh = rf(b.firstChild);
                } else a.flags = a.flags & -1025 | 2, lh = !1, jh = a;
            }
        }
        function qh(a) {
            for(a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;)a = a.return;
            jh = a;
        }
        function rh(a) {
            if (a !== jh) return !1;
            if (!lh) return qh(a), lh = !0, !1;
            var b = a.type;
            if (5 !== a.tag || "head" !== b && "body" !== b && !nf(b, a.memoizedProps)) for(b = kh; b;)mh(a, b), b = rf(b.nextSibling);
            qh(a);
            if (13 === a.tag) {
                a = a.memoizedState;
                a = null !== a ? a.dehydrated : null;
                if (!a) throw Error(y(317));
                a: {
                    a = a.nextSibling;
                    for(b = 0; a;){
                        if (8 === a.nodeType) {
                            var c = a.data;
                            if ("/$" === c) {
                                if (0 === b) {
                                    kh = rf(a.nextSibling);
                                    break a;
                                }
                                b--;
                            } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                        }
                        a = a.nextSibling;
                    }
                    kh = null;
                }
            } else kh = jh ? rf(a.stateNode.nextSibling) : null;
            return !0;
        }
        function sh() {
            kh = jh = null;
            lh = !1;
        }
        var th = [];
        function uh() {
            for(var a = 0; a < th.length; a++)th[a]._workInProgressVersionPrimary = null;
            th.length = 0;
        }
        var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = !1, zh = !1;
        function Ah() {
            throw Error(y(321));
        }
        function Bh(a, b) {
            if (null === b) return !1;
            for(var c = 0; c < b.length && c < a.length; c++)if (!He(a[c], b[c])) return !1;
            return !0;
        }
        function Ch(a, b, c, d, e, f) {
            xh = f;
            R = b;
            b.memoizedState = null;
            b.updateQueue = null;
            b.lanes = 0;
            vh.current = null === a || null === a.memoizedState ? Dh : Eh;
            a = c(d, e);
            if (zh) {
                f = 0;
                do {
                    zh = !1;
                    if (!(25 > f)) throw Error(y(301));
                    f += 1;
                    T = S = null;
                    b.updateQueue = null;
                    vh.current = Fh;
                    a = c(d, e);
                }while (zh);
            }
            vh.current = Gh;
            b = null !== S && null !== S.next;
            xh = 0;
            T = S = R = null;
            yh = !1;
            if (b) throw Error(y(300));
            return a;
        }
        function Hh() {
            var a = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            null === T ? R.memoizedState = T = a : T = T.next = a;
            return T;
        }
        function Ih() {
            if (null === S) {
                var a = R.alternate;
                a = null !== a ? a.memoizedState : null;
            } else a = S.next;
            var b = null === T ? R.memoizedState : T.next;
            if (null !== b) T = b, S = a;
            else {
                if (null === a) throw Error(y(310));
                S = a;
                a = {
                    memoizedState: S.memoizedState,
                    baseState: S.baseState,
                    baseQueue: S.baseQueue,
                    queue: S.queue,
                    next: null
                };
                null === T ? R.memoizedState = T = a : T = T.next = a;
            }
            return T;
        }
        function Jh(a, b) {
            return "function" === typeof b ? b(a) : b;
        }
        function Kh(a) {
            var b = Ih(), c = b.queue;
            if (null === c) throw Error(y(311));
            c.lastRenderedReducer = a;
            var d = S, e = d.baseQueue, f = c.pending;
            if (null !== f) {
                if (null !== e) {
                    var g = e.next;
                    e.next = f.next;
                    f.next = g;
                }
                d.baseQueue = e = f;
                c.pending = null;
            }
            if (null !== e) {
                e = e.next;
                d = d.baseState;
                var h = g = f = null, k = e;
                do {
                    var l = k.lane;
                    if ((xh & l) === l) null !== h && (h = h.next = {
                        lane: 0,
                        action: k.action,
                        eagerReducer: k.eagerReducer,
                        eagerState: k.eagerState,
                        next: null
                    }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
                    else {
                        var n = {
                            lane: l,
                            action: k.action,
                            eagerReducer: k.eagerReducer,
                            eagerState: k.eagerState,
                            next: null
                        };
                        null === h ? (g = h = n, f = d) : h = h.next = n;
                        R.lanes |= l;
                        Dg |= l;
                    }
                    k = k.next;
                }while (null !== k && k !== e);
                null === h ? f = d : h.next = g;
                He(d, b.memoizedState) || (ug = !0);
                b.memoizedState = d;
                b.baseState = f;
                b.baseQueue = h;
                c.lastRenderedState = d;
            }
            return [
                b.memoizedState,
                c.dispatch
            ];
        }
        function Lh(a) {
            var b = Ih(), c = b.queue;
            if (null === c) throw Error(y(311));
            c.lastRenderedReducer = a;
            var d = c.dispatch, e = c.pending, f = b.memoizedState;
            if (null !== e) {
                c.pending = null;
                var g = e = e.next;
                do f = a(f, g.action), g = g.next;
                while (g !== e);
                He(f, b.memoizedState) || (ug = !0);
                b.memoizedState = f;
                null === b.baseQueue && (b.baseState = f);
                c.lastRenderedState = f;
            }
            return [
                f,
                d
            ];
        }
        function Mh(a, b, c) {
            var d = b._getVersion;
            d = d(b._source);
            var e = b._workInProgressVersionPrimary;
            if (null !== e) a = e === d;
            else if (a = a.mutableReadLanes, a = (xh & a) === a) b._workInProgressVersionPrimary = d, th.push(b);
            if (a) return c(b._source);
            th.push(b);
            throw Error(y(350));
        }
        function Nh(a, b, c, d) {
            var e = U;
            if (null === e) throw Error(y(349));
            var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
                return Mh(e, b, c);
            }), l = k[1], n = k[0];
            k = T;
            var A = a.memoizedState, p = A.refs, C = p.getSnapshot, x = A.source;
            A = A.subscribe;
            var w = R;
            a.memoizedState = {
                refs: p,
                source: b,
                subscribe: d
            };
            h.useEffect(function() {
                p.getSnapshot = c;
                p.setSnapshot = l;
                var a = f(b._source);
                if (!He(g, a)) {
                    a = c(b._source);
                    He(n, a) || (l(a), a = Ig(w), e.mutableReadLanes |= a & e.pendingLanes);
                    a = e.mutableReadLanes;
                    e.entangledLanes |= a;
                    for(var d = e.entanglements, h = a; 0 < h;){
                        var k = 31 - Vc(h), v = 1 << k;
                        d[k] |= a;
                        h &= ~v;
                    }
                }
            }, [
                c,
                b,
                d
            ]);
            h.useEffect(function() {
                return d(b._source, function() {
                    var a = p.getSnapshot, c = p.setSnapshot;
                    try {
                        c(a(b._source));
                        var d = Ig(w);
                        e.mutableReadLanes |= d & e.pendingLanes;
                    } catch (q) {
                        c(function() {
                            throw q;
                        });
                    }
                });
            }, [
                b,
                d
            ]);
            He(C, c) && He(x, b) && He(A, d) || (a = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Jh,
                lastRenderedState: n
            }, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
            return n;
        }
        function Ph(a, b, c) {
            var d = Ih();
            return Nh(d, a, b, c);
        }
        function Qh(a) {
            var b = Hh();
            "function" === typeof a && (a = a());
            b.memoizedState = b.baseState = a;
            a = b.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Jh,
                lastRenderedState: a
            };
            a = a.dispatch = Oh.bind(null, R, a);
            return [
                b.memoizedState,
                a
            ];
        }
        function Rh(a, b, c, d) {
            a = {
                tag: a,
                create: b,
                destroy: c,
                deps: d,
                next: null
            };
            b = R.updateQueue;
            null === b ? (b = {
                lastEffect: null
            }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
            return a;
        }
        function Sh(a) {
            var b = Hh();
            a = {
                current: a
            };
            return b.memoizedState = a;
        }
        function Th() {
            return Ih().memoizedState;
        }
        function Uh(a, b, c, d) {
            var e = Hh();
            R.flags |= a;
            e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
        }
        function Vh(a, b, c, d) {
            var e = Ih();
            d = void 0 === d ? null : d;
            var f = void 0;
            if (null !== S) {
                var g = S.memoizedState;
                f = g.destroy;
                if (null !== d && Bh(d, g.deps)) {
                    Rh(b, c, f, d);
                    return;
                }
            }
            R.flags |= a;
            e.memoizedState = Rh(1 | b, c, f, d);
        }
        function Wh(a, b) {
            return Uh(516, 4, a, b);
        }
        function Xh(a, b) {
            return Vh(516, 4, a, b);
        }
        function Yh(a, b) {
            return Vh(4, 2, a, b);
        }
        function Zh(a, b) {
            if ("function" === typeof b) return a = a(), b(a), function() {
                b(null);
            };
            if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
                b.current = null;
            };
        }
        function $h(a, b, c) {
            c = null !== c && void 0 !== c ? c.concat([
                a
            ]) : null;
            return Vh(4, 2, Zh.bind(null, b, a), c);
        }
        function ai() {}
        function bi(a, b) {
            var c = Ih();
            b = void 0 === b ? null : b;
            var d = c.memoizedState;
            if (null !== d && null !== b && Bh(b, d[1])) return d[0];
            c.memoizedState = [
                a,
                b
            ];
            return a;
        }
        function ci(a, b) {
            var c = Ih();
            b = void 0 === b ? null : b;
            var d = c.memoizedState;
            if (null !== d && null !== b && Bh(b, d[1])) return d[0];
            a = a();
            c.memoizedState = [
                a,
                b
            ];
            return a;
        }
        function di(a, b) {
            var c = eg();
            gg(98 > c ? 98 : c, function() {
                a(!0);
            });
            gg(97 < c ? 97 : c, function() {
                var c = wh.transition;
                wh.transition = 1;
                try {
                    a(!1), b();
                } finally{
                    wh.transition = c;
                }
            });
        }
        function Oh(a, b, c) {
            var d = Hg(), e = Ig(a), f = {
                lane: e,
                action: c,
                eagerReducer: null,
                eagerState: null,
                next: null
            }, g = b.pending;
            null === g ? f.next = f : (f.next = g.next, g.next = f);
            b.pending = f;
            g = a.alternate;
            if (a === R || null !== g && g === R) zh = yh = !0;
            else {
                if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
                    var h = b.lastRenderedState, k = g(h, c);
                    f.eagerReducer = g;
                    f.eagerState = k;
                    if (He(k, h)) return;
                } catch (l) {} finally{}
                Jg(a, e, d);
            }
        }
        var Gh = {
            readContext: vg,
            useCallback: Ah,
            useContext: Ah,
            useEffect: Ah,
            useImperativeHandle: Ah,
            useLayoutEffect: Ah,
            useMemo: Ah,
            useReducer: Ah,
            useRef: Ah,
            useState: Ah,
            useDebugValue: Ah,
            useDeferredValue: Ah,
            useTransition: Ah,
            useMutableSource: Ah,
            useOpaqueIdentifier: Ah,
            unstable_isNewReconciler: !1
        }, Dh = {
            readContext: vg,
            useCallback: function(a, b) {
                Hh().memoizedState = [
                    a,
                    void 0 === b ? null : b
                ];
                return a;
            },
            useContext: vg,
            useEffect: Wh,
            useImperativeHandle: function(a, b, c) {
                c = null !== c && void 0 !== c ? c.concat([
                    a
                ]) : null;
                return Uh(4, 2, Zh.bind(null, b, a), c);
            },
            useLayoutEffect: function(a, b) {
                return Uh(4, 2, a, b);
            },
            useMemo: function(a, b) {
                var c = Hh();
                b = void 0 === b ? null : b;
                a = a();
                c.memoizedState = [
                    a,
                    b
                ];
                return a;
            },
            useReducer: function(a, b, c) {
                var d = Hh();
                b = void 0 !== c ? c(b) : b;
                d.memoizedState = d.baseState = b;
                a = d.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: a,
                    lastRenderedState: b
                };
                a = a.dispatch = Oh.bind(null, R, a);
                return [
                    d.memoizedState,
                    a
                ];
            },
            useRef: Sh,
            useState: Qh,
            useDebugValue: ai,
            useDeferredValue: function(a) {
                var b = Qh(a), c = b[0], d = b[1];
                Wh(function() {
                    var b = wh.transition;
                    wh.transition = 1;
                    try {
                        d(a);
                    } finally{
                        wh.transition = b;
                    }
                }, [
                    a
                ]);
                return c;
            },
            useTransition: function() {
                var a = Qh(!1), b = a[0];
                a = di.bind(null, a[1]);
                Sh(a);
                return [
                    a,
                    b
                ];
            },
            useMutableSource: function(a, b, c) {
                var d = Hh();
                d.memoizedState = {
                    refs: {
                        getSnapshot: b,
                        setSnapshot: null
                    },
                    source: a,
                    subscribe: c
                };
                return Nh(d, a, b, c);
            },
            useOpaqueIdentifier: function() {
                if (lh) {
                    var a = !1, b = uf(function() {
                        a || (a = !0, c("r:" + (tf++).toString(36)));
                        throw Error(y(355));
                    }), c = Qh(b)[1];
                    0 === (R.mode & 2) && (R.flags |= 516, Rh(5, function() {
                        c("r:" + (tf++).toString(36));
                    }, void 0, null));
                    return b;
                }
                b = "r:" + (tf++).toString(36);
                Qh(b);
                return b;
            },
            unstable_isNewReconciler: !1
        }, Eh = {
            readContext: vg,
            useCallback: bi,
            useContext: vg,
            useEffect: Xh,
            useImperativeHandle: $h,
            useLayoutEffect: Yh,
            useMemo: ci,
            useReducer: Kh,
            useRef: Th,
            useState: function() {
                return Kh(Jh);
            },
            useDebugValue: ai,
            useDeferredValue: function(a) {
                var b = Kh(Jh), c = b[0], d = b[1];
                Xh(function() {
                    var b = wh.transition;
                    wh.transition = 1;
                    try {
                        d(a);
                    } finally{
                        wh.transition = b;
                    }
                }, [
                    a
                ]);
                return c;
            },
            useTransition: function() {
                var a = Kh(Jh)[0];
                return [
                    Th().current,
                    a
                ];
            },
            useMutableSource: Ph,
            useOpaqueIdentifier: function() {
                return Kh(Jh)[0];
            },
            unstable_isNewReconciler: !1
        }, Fh = {
            readContext: vg,
            useCallback: bi,
            useContext: vg,
            useEffect: Xh,
            useImperativeHandle: $h,
            useLayoutEffect: Yh,
            useMemo: ci,
            useReducer: Lh,
            useRef: Th,
            useState: function() {
                return Lh(Jh);
            },
            useDebugValue: ai,
            useDeferredValue: function(a) {
                var b = Lh(Jh), c = b[0], d = b[1];
                Xh(function() {
                    var b = wh.transition;
                    wh.transition = 1;
                    try {
                        d(a);
                    } finally{
                        wh.transition = b;
                    }
                }, [
                    a
                ]);
                return c;
            },
            useTransition: function() {
                var a = Lh(Jh)[0];
                return [
                    Th().current,
                    a
                ];
            },
            useMutableSource: Ph,
            useOpaqueIdentifier: function() {
                return Lh(Jh)[0];
            },
            unstable_isNewReconciler: !1
        }, ei = ra.ReactCurrentOwner, ug = !1;
        function fi(a, b, c, d) {
            b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
        }
        function gi(a, b, c, d, e) {
            c = c.render;
            var f = b.ref;
            tg(b, e);
            d = Ch(a, b, c, d, f, e);
            if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
            b.flags |= 1;
            fi(a, b, d, e);
            return b.child;
        }
        function ii(a, b, c, d, e, f) {
            if (null === a) {
                var g = c.type;
                if ("function" === typeof g && !ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
                a = Vg(c.type, null, d, b, b.mode, f);
                a.ref = b.ref;
                a.return = b;
                return b.child = a;
            }
            g = a.child;
            if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Je, c(e, d) && a.ref === b.ref)) return hi(a, b, f);
            b.flags |= 1;
            a = Tg(g, d);
            a.ref = b.ref;
            a.return = b;
            return b.child = a;
        }
        function ki(a, b, c, d, e, f) {
            if (null !== a && Je(a.memoizedProps, d) && a.ref === b.ref) {
                if (ug = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (ug = !0);
                else return b.lanes = a.lanes, hi(a, b, f);
            }
            return li(a, b, c, d, f);
        }
        function mi(a, b, c) {
            var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
            if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
                if (0 === (b.mode & 4)) b.memoizedState = {
                    baseLanes: 0
                }, ni(b, c);
                else if (0 !== (c & 1073741824)) b.memoizedState = {
                    baseLanes: 0
                }, ni(b, null !== f ? f.baseLanes : c);
                else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
                    baseLanes: a
                }, ni(b, a), null;
            } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
            fi(a, b, e, c);
            return b.child;
        }
        function oi(a, b) {
            var c = b.ref;
            if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
        }
        function li(a, b, c, d, e) {
            var f = Ff(c) ? Df : M.current;
            f = Ef(b, f);
            tg(b, e);
            c = Ch(a, b, c, d, f, e);
            if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
            b.flags |= 1;
            fi(a, b, c, e);
            return b.child;
        }
        function pi(a, b, c, d, e) {
            if (Ff(c)) {
                var f = !0;
                Jf(b);
            } else f = !1;
            tg(b, e);
            if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = !0;
            else if (null === a) {
                var g = b.stateNode, h = b.memoizedProps;
                g.props = h;
                var k = g.context, l = c.contextType;
                "object" === typeof l && null !== l ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
                var n = c.getDerivedStateFromProps, A = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
                A || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Ng(b, g, d, l);
                wg = !1;
                var p = b.memoizedState;
                g.state = p;
                Cg(b, d, g, e);
                k = b.memoizedState;
                h !== d || p !== k || N.current || wg ? ("function" === typeof n && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
            } else {
                g = b.stateNode;
                yg(a, b);
                h = b.memoizedProps;
                l = b.type === b.elementType ? h : lg(b.type, h);
                g.props = l;
                A = b.pendingProps;
                p = g.context;
                k = c.contextType;
                "object" === typeof k && null !== k ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
                var C = c.getDerivedStateFromProps;
                (n = "function" === typeof C || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A || p !== k) && Ng(b, g, d, k);
                wg = !1;
                p = b.memoizedState;
                g.state = p;
                Cg(b, d, g, e);
                var x = b.memoizedState;
                h !== A || p !== x || N.current || wg ? ("function" === typeof C && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
            }
            return qi(a, b, c, d, f, e);
        }
        function qi(a, b, c, d, e, f) {
            oi(a, b);
            var g = 0 !== (b.flags & 64);
            if (!d && !g) return e && Kf(b, c, !1), hi(a, b, f);
            d = b.stateNode;
            ei.current = b;
            var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
            b.flags |= 1;
            null !== a && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
            b.memoizedState = d.state;
            e && Kf(b, c, !0);
            return b.child;
        }
        function ri(a) {
            var b = a.stateNode;
            b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, !1);
            eh(a, b.containerInfo);
        }
        var si = {
            dehydrated: null,
            retryLane: 0
        };
        function ti(a, b, c) {
            var d = b.pendingProps, e = P.current, f = !1, g;
            (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
            g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
            I(P, e & 1);
            if (null === a) {
                void 0 !== d.fallback && ph(b);
                a = d.children;
                e = d.fallback;
                if (f) return a = ui(b, a, e, c), b.child.memoizedState = {
                    baseLanes: c
                }, b.memoizedState = si, a;
                if ("number" === typeof d.unstable_expectedLoadTime) return a = ui(b, a, e, c), b.child.memoizedState = {
                    baseLanes: c
                }, b.memoizedState = si, b.lanes = 33554432, a;
                c = vi({
                    mode: "visible",
                    children: a
                }, b.mode, c, null);
                c.return = b;
                return b.child = c;
            }
            if (null !== a.memoizedState) {
                if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
                    baseLanes: c
                } : {
                    baseLanes: e.baseLanes | c
                }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
                c = xi(a, b, d.children, c);
                b.memoizedState = null;
                return c;
            }
            if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
                baseLanes: c
            } : {
                baseLanes: e.baseLanes | c
            }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
            c = xi(a, b, d.children, c);
            b.memoizedState = null;
            return c;
        }
        function ui(a, b, c, d) {
            var e = a.mode, f = a.child;
            b = {
                mode: "hidden",
                children: b
            };
            0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
            c = Xg(c, e, d, null);
            f.return = a;
            c.return = a;
            f.sibling = c;
            a.child = f;
            return c;
        }
        function xi(a, b, c, d) {
            var e = a.child;
            a = e.sibling;
            c = Tg(e, {
                mode: "visible",
                children: c
            });
            0 === (b.mode & 2) && (c.lanes = d);
            c.return = b;
            c.sibling = null;
            null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
            return b.child = c;
        }
        function wi(a, b, c, d, e) {
            var f = b.mode, g = a.child;
            a = g.sibling;
            var h = {
                mode: "hidden",
                children: c
            };
            0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
            null !== a ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
            d.return = b;
            c.return = b;
            c.sibling = d;
            b.child = c;
            return d;
        }
        function yi(a, b) {
            a.lanes |= b;
            var c = a.alternate;
            null !== c && (c.lanes |= b);
            sg(a.return, b);
        }
        function zi(a, b, c, d, e, f) {
            var g = a.memoizedState;
            null === g ? a.memoizedState = {
                isBackwards: b,
                rendering: null,
                renderingStartTime: 0,
                last: d,
                tail: c,
                tailMode: e,
                lastEffect: f
            } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
        }
        function Ai(a, b, c) {
            var d = b.pendingProps, e = d.revealOrder, f = d.tail;
            fi(a, b, d.children, c);
            d = P.current;
            if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;
            else {
                if (null !== a && 0 !== (a.flags & 64)) a: for(a = b.child; null !== a;){
                    if (13 === a.tag) null !== a.memoizedState && yi(a, c);
                    else if (19 === a.tag) yi(a, c);
                    else if (null !== a.child) {
                        a.child.return = a;
                        a = a.child;
                        continue;
                    }
                    if (a === b) break a;
                    for(; null === a.sibling;){
                        if (null === a.return || a.return === b) break a;
                        a = a.return;
                    }
                    a.sibling.return = a.return;
                    a = a.sibling;
                }
                d &= 1;
            }
            I(P, d);
            if (0 === (b.mode & 2)) b.memoizedState = null;
            else switch(e){
                case "forwards":
                    c = b.child;
                    for(e = null; null !== c;)a = c.alternate, null !== a && null === ih(a) && (e = c), c = c.sibling;
                    c = e;
                    null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
                    zi(b, !1, e, c, f, b.lastEffect);
                    break;
                case "backwards":
                    c = null;
                    e = b.child;
                    for(b.child = null; null !== e;){
                        a = e.alternate;
                        if (null !== a && null === ih(a)) {
                            b.child = e;
                            break;
                        }
                        a = e.sibling;
                        e.sibling = c;
                        c = e;
                        e = a;
                    }
                    zi(b, !0, c, null, f, b.lastEffect);
                    break;
                case "together":
                    zi(b, !1, null, null, void 0, b.lastEffect);
                    break;
                default:
                    b.memoizedState = null;
            }
            return b.child;
        }
        function hi(a, b, c) {
            null !== a && (b.dependencies = a.dependencies);
            Dg |= b.lanes;
            if (0 !== (c & b.childLanes)) {
                if (null !== a && b.child !== a.child) throw Error(y(153));
                if (null !== b.child) {
                    a = b.child;
                    c = Tg(a, a.pendingProps);
                    b.child = c;
                    for(c.return = b; null !== a.sibling;)a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
                    c.sibling = null;
                }
                return b.child;
            }
            return null;
        }
        var Bi, Ci, Di, Ei;
        Bi = function(a, b) {
            for(var c = b.child; null !== c;){
                if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
                else if (4 !== c.tag && null !== c.child) {
                    c.child.return = c;
                    c = c.child;
                    continue;
                }
                if (c === b) break;
                for(; null === c.sibling;){
                    if (null === c.return || c.return === b) return;
                    c = c.return;
                }
                c.sibling.return = c.return;
                c = c.sibling;
            }
        };
        Ci = function() {};
        Di = function(a, b, c, d) {
            var e = a.memoizedProps;
            if (e !== d) {
                a = b.stateNode;
                dh(ah.current);
                var f = null;
                switch(c){
                    case "input":
                        e = Ya(a, e);
                        d = Ya(a, d);
                        f = [];
                        break;
                    case "option":
                        e = eb(a, e);
                        d = eb(a, d);
                        f = [];
                        break;
                    case "select":
                        e = m({}, e, {
                            value: void 0
                        });
                        d = m({}, d, {
                            value: void 0
                        });
                        f = [];
                        break;
                    case "textarea":
                        e = gb(a, e);
                        d = gb(a, d);
                        f = [];
                        break;
                    default:
                        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = jf);
                }
                vb(c, d);
                var g;
                c = null;
                for(l in e)if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) {
                    if ("style" === l) {
                        var h = e[l];
                        for(g in h)h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
                    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
                }
                for(l in d){
                    var k = d[l];
                    h = null != e ? e[l] : void 0;
                    if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) {
                        if ("style" === l) {
                            if (h) {
                                for(g in h)!h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                                for(g in k)k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                            } else c || (f || (f = []), f.push(l, c)), c = k;
                        } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ca.hasOwnProperty(l) ? (null != k && "onScroll" === l && G("scroll", a), f || h === k || (f = [])) : "object" === typeof k && null !== k && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
                    }
                }
                c && (f = f || []).push("style", c);
                var l = f;
                if (b.updateQueue = l) b.flags |= 4;
            }
        };
        Ei = function(a, b, c, d) {
            c !== d && (b.flags |= 4);
        };
        function Fi(a, b) {
            if (!lh) switch(a.tailMode){
                case "hidden":
                    b = a.tail;
                    for(var c = null; null !== b;)null !== b.alternate && (c = b), b = b.sibling;
                    null === c ? a.tail = null : c.sibling = null;
                    break;
                case "collapsed":
                    c = a.tail;
                    for(var d = null; null !== c;)null !== c.alternate && (d = c), c = c.sibling;
                    null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
            }
        }
        function Gi(a, b, c) {
            var d = b.pendingProps;
            switch(b.tag){
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return null;
                case 1:
                    return Ff(b.type) && Gf(), null;
                case 3:
                    fh();
                    H(N);
                    H(M);
                    uh();
                    d = b.stateNode;
                    d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
                    if (null === a || null === a.child) rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
                    Ci(b);
                    return null;
                case 5:
                    hh(b);
                    var e = dh(ch.current);
                    c = b.type;
                    if (null !== a && null != b.stateNode) Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
                    else {
                        if (!d) {
                            if (null === b.stateNode) throw Error(y(166));
                            return null;
                        }
                        a = dh(ah.current);
                        if (rh(b)) {
                            d = b.stateNode;
                            c = b.type;
                            var f = b.memoizedProps;
                            d[wf] = b;
                            d[xf] = f;
                            switch(c){
                                case "dialog":
                                    G("cancel", d);
                                    G("close", d);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    G("load", d);
                                    break;
                                case "video":
                                case "audio":
                                    for(a = 0; a < Xe.length; a++)G(Xe[a], d);
                                    break;
                                case "source":
                                    G("error", d);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    G("error", d);
                                    G("load", d);
                                    break;
                                case "details":
                                    G("toggle", d);
                                    break;
                                case "input":
                                    Za(d, f);
                                    G("invalid", d);
                                    break;
                                case "select":
                                    d._wrapperState = {
                                        wasMultiple: !!f.multiple
                                    };
                                    G("invalid", d);
                                    break;
                                case "textarea":
                                    hb(d, f), G("invalid", d);
                            }
                            vb(c, f);
                            a = null;
                            for(var g in f)f.hasOwnProperty(g) && (e = f[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = [
                                "children",
                                e
                            ]) : "number" === typeof e && d.textContent !== "" + e && (a = [
                                "children",
                                "" + e
                            ]) : ca.hasOwnProperty(g) && null != e && "onScroll" === g && G("scroll", d));
                            switch(c){
                                case "input":
                                    Va(d);
                                    cb(d, f, !0);
                                    break;
                                case "textarea":
                                    Va(d);
                                    jb(d);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    "function" === typeof f.onClick && (d.onclick = jf);
                            }
                            d = a;
                            b.updateQueue = d;
                            null !== d && (b.flags |= 4);
                        } else {
                            g = 9 === e.nodeType ? e : e.ownerDocument;
                            a === kb.html && (a = lb(c));
                            a === kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                                is: d.is
                            }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                            a[wf] = b;
                            a[xf] = d;
                            Bi(a, b, !1, !1);
                            b.stateNode = a;
                            g = wb(c, d);
                            switch(c){
                                case "dialog":
                                    G("cancel", a);
                                    G("close", a);
                                    e = d;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    G("load", a);
                                    e = d;
                                    break;
                                case "video":
                                case "audio":
                                    for(e = 0; e < Xe.length; e++)G(Xe[e], a);
                                    e = d;
                                    break;
                                case "source":
                                    G("error", a);
                                    e = d;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    G("error", a);
                                    G("load", a);
                                    e = d;
                                    break;
                                case "details":
                                    G("toggle", a);
                                    e = d;
                                    break;
                                case "input":
                                    Za(a, d);
                                    e = Ya(a, d);
                                    G("invalid", a);
                                    break;
                                case "option":
                                    e = eb(a, d);
                                    break;
                                case "select":
                                    a._wrapperState = {
                                        wasMultiple: !!d.multiple
                                    };
                                    e = m({}, d, {
                                        value: void 0
                                    });
                                    G("invalid", a);
                                    break;
                                case "textarea":
                                    hb(a, d);
                                    e = gb(a, d);
                                    G("invalid", a);
                                    break;
                                default:
                                    e = d;
                            }
                            vb(c, e);
                            var h = e;
                            for(f in h)if (h.hasOwnProperty(f)) {
                                var k = h[f];
                                "style" === f ? tb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && ob(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && pb(a, k) : "number" === typeof k && pb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ca.hasOwnProperty(f) ? null != k && "onScroll" === f && G("scroll", a) : null != k && qa(a, f, k, g));
                            }
                            switch(c){
                                case "input":
                                    Va(a);
                                    cb(a, d, !1);
                                    break;
                                case "textarea":
                                    Va(a);
                                    jb(a);
                                    break;
                                case "option":
                                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                                    break;
                                case "select":
                                    a.multiple = !!d.multiple;
                                    f = d.value;
                                    null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                                    break;
                                default:
                                    "function" === typeof e.onClick && (a.onclick = jf);
                            }
                            mf(c, d) && (b.flags |= 4);
                        }
                        null !== b.ref && (b.flags |= 128);
                    }
                    return null;
                case 6:
                    if (a && null != b.stateNode) Ei(a, b, a.memoizedProps, d);
                    else {
                        if ("string" !== typeof d && null === b.stateNode) throw Error(y(166));
                        c = dh(ch.current);
                        dh(ah.current);
                        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
                    }
                    return null;
                case 13:
                    H(P);
                    d = b.memoizedState;
                    if (0 !== (b.flags & 64)) return b.lanes = c, b;
                    d = null !== d;
                    c = !1;
                    null === a ? void 0 !== b.memoizedProps.fallback && rh(b) : c = null !== a.memoizedState;
                    if (d && !c && 0 !== (b.mode & 2)) {
                        if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P.current & 1)) 0 === V && (V = 3);
                        else {
                            if (0 === V || 3 === V) V = 4;
                            null === U || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U, W);
                        }
                    }
                    if (d || c) b.flags |= 4;
                    return null;
                case 4:
                    return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;
                case 10:
                    return rg(b), null;
                case 17:
                    return Ff(b.type) && Gf(), null;
                case 19:
                    H(P);
                    d = b.memoizedState;
                    if (null === d) return null;
                    f = 0 !== (b.flags & 64);
                    g = d.rendering;
                    if (null === g) {
                        if (f) Fi(d, !1);
                        else {
                            if (0 !== V || null !== a && 0 !== (a.flags & 64)) for(a = b.child; null !== a;){
                                g = ih(a);
                                if (null !== g) {
                                    b.flags |= 64;
                                    Fi(d, !1);
                                    f = g.updateQueue;
                                    null !== f && (b.updateQueue = f, b.flags |= 4);
                                    null === d.lastEffect && (b.firstEffect = null);
                                    b.lastEffect = d.lastEffect;
                                    d = c;
                                    for(c = b.child; null !== c;)f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                        lanes: a.lanes,
                                        firstContext: a.firstContext
                                    }), c = c.sibling;
                                    I(P, P.current & 1 | 2);
                                    return b.child;
                                }
                                a = a.sibling;
                            }
                            null !== d.tail && O() > Ji && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
                        }
                    } else {
                        if (!f) {
                            if (a = ih(g), null !== a) {
                                if (b.flags |= 64, f = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Fi(d, !0), null === d.tail && "hidden" === d.tailMode && !g.alternate && !lh) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
                            } else 2 * O() - d.renderingStartTime > Ji && 1073741824 !== c && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
                        }
                        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
                    }
                    return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
                case 23:
                case 24:
                    return Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
            }
            throw Error(y(156, b.tag));
        }
        function Li(a) {
            switch(a.tag){
                case 1:
                    Ff(a.type) && Gf();
                    var b = a.flags;
                    return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
                case 3:
                    fh();
                    H(N);
                    H(M);
                    uh();
                    b = a.flags;
                    if (0 !== (b & 64)) throw Error(y(285));
                    a.flags = b & -4097 | 64;
                    return a;
                case 5:
                    return hh(a), null;
                case 13:
                    return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
                case 19:
                    return H(P), null;
                case 4:
                    return fh(), null;
                case 10:
                    return rg(a), null;
                case 23:
                case 24:
                    return Ki(), null;
                default:
                    return null;
            }
        }
        function Mi(a, b) {
            try {
                var c = "", d = b;
                do c += Qa(d), d = d.return;
                while (d);
                var e = c;
            } catch (f) {
                e = "\nError generating stack: " + f.message + "\n" + f.stack;
            }
            return {
                value: a,
                source: b,
                stack: e
            };
        }
        function Ni(a, b) {
            try {
                console.error(b.value);
            } catch (c) {
                setTimeout(function() {
                    throw c;
                });
            }
        }
        var Oi = "function" === typeof WeakMap ? WeakMap : Map;
        function Pi(a, b, c) {
            c = zg(-1, c);
            c.tag = 3;
            c.payload = {
                element: null
            };
            var d = b.value;
            c.callback = function() {
                Qi || (Qi = !0, Ri = d);
                Ni(a, b);
            };
            return c;
        }
        function Si(a, b, c) {
            c = zg(-1, c);
            c.tag = 3;
            var d = a.type.getDerivedStateFromError;
            if ("function" === typeof d) {
                var e = b.value;
                c.payload = function() {
                    Ni(a, b);
                    return d(e);
                };
            }
            var f = a.stateNode;
            null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
                "function" !== typeof d && (null === Ti ? Ti = new Set([
                    this
                ]) : Ti.add(this), Ni(a, b));
                var c = b.stack;
                this.componentDidCatch(b.value, {
                    componentStack: null !== c ? c : ""
                });
            });
            return c;
        }
        var Ui = "function" === typeof WeakSet ? WeakSet : Set;
        function Vi(a) {
            var b = a.ref;
            if (null !== b) {
                if ("function" === typeof b) try {
                    b(null);
                } catch (c) {
                    Wi(a, c);
                }
                else b.current = null;
            }
        }
        function Xi(a, b) {
            switch(b.tag){
                case 0:
                case 11:
                case 15:
                case 22:
                    return;
                case 1:
                    if (b.flags & 256 && null !== a) {
                        var c = a.memoizedProps, d = a.memoizedState;
                        a = b.stateNode;
                        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
                        a.__reactInternalSnapshotBeforeUpdate = b;
                    }
                    return;
                case 3:
                    b.flags & 256 && qf(b.stateNode.containerInfo);
                    return;
                case 5:
                case 6:
                case 4:
                case 17:
                    return;
            }
            throw Error(y(163));
        }
        function Yi(a, b, c) {
            switch(c.tag){
                case 0:
                case 11:
                case 15:
                case 22:
                    b = c.updateQueue;
                    b = null !== b ? b.lastEffect : null;
                    if (null !== b) {
                        a = b = b.next;
                        do {
                            if (3 === (a.tag & 3)) {
                                var d = a.create;
                                a.destroy = d();
                            }
                            a = a.next;
                        }while (a !== b);
                    }
                    b = c.updateQueue;
                    b = null !== b ? b.lastEffect : null;
                    if (null !== b) {
                        a = b = b.next;
                        do {
                            var e = a;
                            d = e.next;
                            e = e.tag;
                            0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
                            a = d;
                        }while (a !== b);
                    }
                    return;
                case 1:
                    a = c.stateNode;
                    c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
                    b = c.updateQueue;
                    null !== b && Eg(c, b, a);
                    return;
                case 3:
                    b = c.updateQueue;
                    if (null !== b) {
                        a = null;
                        if (null !== c.child) switch(c.child.tag){
                            case 5:
                                a = c.child.stateNode;
                                break;
                            case 1:
                                a = c.child.stateNode;
                        }
                        Eg(c, b, a);
                    }
                    return;
                case 5:
                    a = c.stateNode;
                    null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
                    return;
                case 6:
                    return;
                case 4:
                    return;
                case 12:
                    return;
                case 13:
                    null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Cc(c))));
                    return;
                case 19:
                case 17:
                case 20:
                case 21:
                case 23:
                case 24:
                    return;
            }
            throw Error(y(163));
        }
        function aj(a, b) {
            for(var c = a;;){
                if (5 === c.tag) {
                    var d = c.stateNode;
                    if (b) d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none";
                    else {
                        d = c.stateNode;
                        var e = c.memoizedProps.style;
                        e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
                        d.style.display = sb("display", e);
                    }
                } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps;
                else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
                    c.child.return = c;
                    c = c.child;
                    continue;
                }
                if (c === a) break;
                for(; null === c.sibling;){
                    if (null === c.return || c.return === a) return;
                    c = c.return;
                }
                c.sibling.return = c.return;
                c = c.sibling;
            }
        }
        function bj(a, b) {
            if (Mf && "function" === typeof Mf.onCommitFiberUnmount) try {
                Mf.onCommitFiberUnmount(Lf, b);
            } catch (f) {}
            switch(b.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    a = b.updateQueue;
                    if (null !== a && (a = a.lastEffect, null !== a)) {
                        var c = a = a.next;
                        do {
                            var d = c, e = d.destroy;
                            d = d.tag;
                            if (void 0 !== e) {
                                if (0 !== (d & 4)) Zi(b, c);
                                else {
                                    d = b;
                                    try {
                                        e();
                                    } catch (f1) {
                                        Wi(d, f1);
                                    }
                                }
                            }
                            c = c.next;
                        }while (c !== a);
                    }
                    break;
                case 1:
                    Vi(b);
                    a = b.stateNode;
                    if ("function" === typeof a.componentWillUnmount) try {
                        a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
                    } catch (f2) {
                        Wi(b, f2);
                    }
                    break;
                case 5:
                    Vi(b);
                    break;
                case 4:
                    cj(a, b);
            }
        }
        function dj(a) {
            a.alternate = null;
            a.child = null;
            a.dependencies = null;
            a.firstEffect = null;
            a.lastEffect = null;
            a.memoizedProps = null;
            a.memoizedState = null;
            a.pendingProps = null;
            a.return = null;
            a.updateQueue = null;
        }
        function ej(a) {
            return 5 === a.tag || 3 === a.tag || 4 === a.tag;
        }
        function fj(a) {
            a: {
                for(var b = a.return; null !== b;){
                    if (ej(b)) break a;
                    b = b.return;
                }
                throw Error(y(160));
            }
            var c = b;
            b = c.stateNode;
            switch(c.tag){
                case 5:
                    var d = !1;
                    break;
                case 3:
                    b = b.containerInfo;
                    d = !0;
                    break;
                case 4:
                    b = b.containerInfo;
                    d = !0;
                    break;
                default:
                    throw Error(y(161));
            }
            c.flags & 16 && (pb(b, ""), c.flags &= -17);
            a: b: for(c = a;;){
                for(; null === c.sibling;){
                    if (null === c.return || ej(c.return)) {
                        c = null;
                        break a;
                    }
                    c = c.return;
                }
                c.sibling.return = c.return;
                for(c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;){
                    if (c.flags & 2) continue b;
                    if (null === c.child || 4 === c.tag) continue b;
                    else c.child.return = c, c = c.child;
                }
                if (!(c.flags & 2)) {
                    c = c.stateNode;
                    break a;
                }
            }
            d ? gj(a, c, b) : hj(a, c, b);
        }
        function gj(a, b, c) {
            var d = a.tag, e = 5 === d || 6 === d;
            if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = jf));
            else if (4 !== d && (a = a.child, null !== a)) for(gj(a, b, c), a = a.sibling; null !== a;)gj(a, b, c), a = a.sibling;
        }
        function hj(a, b, c) {
            var d = a.tag, e = 5 === d || 6 === d;
            if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
            else if (4 !== d && (a = a.child, null !== a)) for(hj(a, b, c), a = a.sibling; null !== a;)hj(a, b, c), a = a.sibling;
        }
        function cj(a, b) {
            for(var c = b, d = !1, e, f;;){
                if (!d) {
                    d = c.return;
                    a: for(;;){
                        if (null === d) throw Error(y(160));
                        e = d.stateNode;
                        switch(d.tag){
                            case 5:
                                f = !1;
                                break a;
                            case 3:
                                e = e.containerInfo;
                                f = !0;
                                break a;
                            case 4:
                                e = e.containerInfo;
                                f = !0;
                                break a;
                        }
                        d = d.return;
                    }
                    d = !0;
                }
                if (5 === c.tag || 6 === c.tag) {
                    a: for(var g = a, h = c, k = h;;)if (bj(g, k), null !== k.child && 4 !== k.tag) k.child.return = k, k = k.child;
                    else {
                        if (k === h) break a;
                        for(; null === k.sibling;){
                            if (null === k.return || k.return === h) break a;
                            k = k.return;
                        }
                        k.sibling.return = k.return;
                        k = k.sibling;
                    }
                    f ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
                } else if (4 === c.tag) {
                    if (null !== c.child) {
                        e = c.stateNode.containerInfo;
                        f = !0;
                        c.child.return = c;
                        c = c.child;
                        continue;
                    }
                } else if (bj(a, c), null !== c.child) {
                    c.child.return = c;
                    c = c.child;
                    continue;
                }
                if (c === b) break;
                for(; null === c.sibling;){
                    if (null === c.return || c.return === b) return;
                    c = c.return;
                    4 === c.tag && (d = !1);
                }
                c.sibling.return = c.return;
                c = c.sibling;
            }
        }
        function ij(a, b) {
            switch(b.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    var c = b.updateQueue;
                    c = null !== c ? c.lastEffect : null;
                    if (null !== c) {
                        var d = c = c.next;
                        do 3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next;
                        while (d !== c);
                    }
                    return;
                case 1:
                    return;
                case 5:
                    c = b.stateNode;
                    if (null != c) {
                        d = b.memoizedProps;
                        var e = null !== a ? a.memoizedProps : d;
                        a = b.type;
                        var f = b.updateQueue;
                        b.updateQueue = null;
                        if (null !== f) {
                            c[xf] = d;
                            "input" === a && "radio" === d.type && null != d.name && $a(c, d);
                            wb(a, e);
                            b = wb(a, d);
                            for(e = 0; e < f.length; e += 2){
                                var g = f[e], h = f[e + 1];
                                "style" === g ? tb(c, h) : "dangerouslySetInnerHTML" === g ? ob(c, h) : "children" === g ? pb(c, h) : qa(c, g, h, b);
                            }
                            switch(a){
                                case "input":
                                    ab(c, d);
                                    break;
                                case "textarea":
                                    ib(c, d);
                                    break;
                                case "select":
                                    a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? fb(c, !!d.multiple, f, !1) : a !== !!d.multiple && (null != d.defaultValue ? fb(c, !!d.multiple, d.defaultValue, !0) : fb(c, !!d.multiple, d.multiple ? [] : "", !1));
                            }
                        }
                    }
                    return;
                case 6:
                    if (null === b.stateNode) throw Error(y(162));
                    b.stateNode.nodeValue = b.memoizedProps;
                    return;
                case 3:
                    c = b.stateNode;
                    c.hydrate && (c.hydrate = !1, Cc(c.containerInfo));
                    return;
                case 12:
                    return;
                case 13:
                    null !== b.memoizedState && (jj = O(), aj(b.child, !0));
                    kj(b);
                    return;
                case 19:
                    kj(b);
                    return;
                case 17:
                    return;
                case 23:
                case 24:
                    aj(b, null !== b.memoizedState);
                    return;
            }
            throw Error(y(163));
        }
        function kj(a) {
            var b = a.updateQueue;
            if (null !== b) {
                a.updateQueue = null;
                var c = a.stateNode;
                null === c && (c = a.stateNode = new Ui);
                b.forEach(function(b) {
                    var d = lj.bind(null, a, b);
                    c.has(b) || (c.add(b), b.then(d, d));
                });
            }
        }
        function mj(a, b) {
            return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
        }
        var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
        function wj() {
            Ji = O() + 500;
        }
        var Z = null, Qi = !1, Ri = null, Ti = null, xj = !1, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = !1;
        function Hg() {
            return 0 !== (X & 48) ? O() : -1 !== Fj ? Fj : Fj = O();
        }
        function Ig(a) {
            a = a.mode;
            if (0 === (a & 2)) return 1;
            if (0 === (a & 4)) return 99 === eg() ? 1 : 2;
            0 === Gj && (Gj = tj);
            if (0 !== kg.transition) {
                0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
                a = Gj;
                var b = 4186112 & ~Hj;
                b &= -b;
                0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
                return b;
            }
            a = eg();
            0 !== (X & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
            return a;
        }
        function Jg(a, b, c) {
            if (50 < Dj) throw Dj = 0, Ej = null, Error(y(185));
            a = Kj(a, b);
            if (null === a) return null;
            $c(a, b, c);
            a === U && (Hi |= b, 4 === V && Ii(a, W));
            var d = eg();
            1 === b ? 0 !== (X & 8) && 0 === (X & 48) ? Lj(a) : (Mj(a, c), 0 === X && (wj(), ig())) : (0 === (X & 4) || 98 !== d && 99 !== d || (null === Cj ? Cj = new Set([
                a
            ]) : Cj.add(a)), Mj(a, c));
            vj = a;
        }
        function Kj(a, b) {
            a.lanes |= b;
            var c = a.alternate;
            null !== c && (c.lanes |= b);
            c = a;
            for(a = a.return; null !== a;)a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
            return 3 === c.tag ? c.stateNode : null;
        }
        function Mj(a, b) {
            for(var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;){
                var h = 31 - Vc(g), k = 1 << h, l = f[h];
                if (-1 === l) {
                    if (0 === (k & d) || 0 !== (k & e)) {
                        l = b;
                        Rc(k);
                        var n = F;
                        f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
                    }
                } else l <= b && (a.expiredLanes |= k);
                g &= ~k;
            }
            d = Uc(a, a === U ? W : 0);
            b = F;
            if (0 === d) null !== c && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
            else {
                if (null !== c) {
                    if (a.callbackPriority === b) return;
                    c !== Zf && Pf(c);
                }
                15 === b ? (c = Lj.bind(null, a), null === ag ? (ag = [
                    c
                ], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : 14 === b ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
                a.callbackPriority = b;
                a.callbackNode = c;
            }
        }
        function Nj(a) {
            Fj = -1;
            Hj = Gj = 0;
            if (0 !== (X & 48)) throw Error(y(327));
            var b = a.callbackNode;
            if (Oj() && a.callbackNode !== b) return null;
            var c = Uc(a, a === U ? W : 0);
            if (0 === c) return null;
            var d = c;
            var e = X;
            X |= 16;
            var f = Pj();
            if (U !== a || W !== d) wj(), Qj(a, d);
            for(;;)try {
                Rj();
                break;
            } catch (h) {
                Sj(a, h);
            }
            qg();
            oj.current = f;
            X = e;
            null !== Y ? d = 0 : (U = null, W = 0, d = V);
            if (0 !== (tj & Hi)) Qj(a, 0);
            else if (0 !== d) {
                2 === d && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), c = Wc(a), 0 !== c && (d = Tj(a, c)));
                if (1 === d) throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
                a.finishedWork = a.current.alternate;
                a.finishedLanes = c;
                switch(d){
                    case 0:
                    case 1:
                        throw Error(y(345));
                    case 2:
                        Uj(a);
                        break;
                    case 3:
                        Ii(a, c);
                        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
                            if (0 !== Uc(a, 0)) break;
                            e = a.suspendedLanes;
                            if ((e & c) !== c) {
                                Hg();
                                a.pingedLanes |= a.suspendedLanes & e;
                                break;
                            }
                            a.timeoutHandle = of(Uj.bind(null, a), d);
                            break;
                        }
                        Uj(a);
                        break;
                    case 4:
                        Ii(a, c);
                        if ((c & 4186112) === c) break;
                        d = a.eventTimes;
                        for(e = -1; 0 < c;){
                            var g = 31 - Vc(c);
                            f = 1 << g;
                            g = d[g];
                            g > e && (e = g);
                            c &= ~f;
                        }
                        c = e;
                        c = O() - c;
                        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
                        if (10 < c) {
                            a.timeoutHandle = of(Uj.bind(null, a), c);
                            break;
                        }
                        Uj(a);
                        break;
                    case 5:
                        Uj(a);
                        break;
                    default:
                        throw Error(y(329));
                }
            }
            Mj(a, O());
            return a.callbackNode === b ? Nj.bind(null, a) : null;
        }
        function Ii(a, b) {
            b &= ~uj;
            b &= ~Hi;
            a.suspendedLanes |= b;
            a.pingedLanes &= ~b;
            for(a = a.expirationTimes; 0 < b;){
                var c = 31 - Vc(b), d = 1 << c;
                a[c] = -1;
                b &= ~d;
            }
        }
        function Lj(a) {
            if (0 !== (X & 48)) throw Error(y(327));
            Oj();
            if (a === U && 0 !== (a.expiredLanes & W)) {
                var b = W;
                var c = Tj(a, b);
                0 !== (tj & Hi) && (b = Uc(a, b), c = Tj(a, b));
            } else b = Uc(a, 0), c = Tj(a, b);
            0 !== a.tag && 2 === c && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), b = Wc(a), 0 !== b && (c = Tj(a, b)));
            if (1 === c) throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
            a.finishedWork = a.current.alternate;
            a.finishedLanes = b;
            Uj(a);
            Mj(a, O());
            return null;
        }
        function Vj() {
            if (null !== Cj) {
                var a = Cj;
                Cj = null;
                a.forEach(function(a) {
                    a.expiredLanes |= 24 & a.pendingLanes;
                    Mj(a, O());
                });
            }
            ig();
        }
        function Wj(a, b) {
            var c = X;
            X |= 1;
            try {
                return a(b);
            } finally{
                X = c, 0 === X && (wj(), ig());
            }
        }
        function Xj(a, b) {
            var c = X;
            X &= -2;
            X |= 8;
            try {
                return a(b);
            } finally{
                X = c, 0 === X && (wj(), ig());
            }
        }
        function ni(a, b) {
            I(rj, qj);
            qj |= b;
            tj |= b;
        }
        function Ki() {
            qj = rj.current;
            H(rj);
        }
        function Qj(a, b) {
            a.finishedWork = null;
            a.finishedLanes = 0;
            var c = a.timeoutHandle;
            -1 !== c && (a.timeoutHandle = -1, pf(c));
            if (null !== Y) for(c = Y.return; null !== c;){
                var d = c;
                switch(d.tag){
                    case 1:
                        d = d.type.childContextTypes;
                        null !== d && void 0 !== d && Gf();
                        break;
                    case 3:
                        fh();
                        H(N);
                        H(M);
                        uh();
                        break;
                    case 5:
                        hh(d);
                        break;
                    case 4:
                        fh();
                        break;
                    case 13:
                        H(P);
                        break;
                    case 19:
                        H(P);
                        break;
                    case 10:
                        rg(d);
                        break;
                    case 23:
                    case 24:
                        Ki();
                }
                c = c.return;
            }
            U = a;
            Y = Tg(a.current, null);
            W = qj = tj = b;
            V = 0;
            sj = null;
            uj = Hi = Dg = 0;
        }
        function Sj(a, b) {
            do {
                var c = Y;
                try {
                    qg();
                    vh.current = Gh;
                    if (yh) {
                        for(var d = R.memoizedState; null !== d;){
                            var e = d.queue;
                            null !== e && (e.pending = null);
                            d = d.next;
                        }
                        yh = !1;
                    }
                    xh = 0;
                    T = S = R = null;
                    zh = !1;
                    pj.current = null;
                    if (null === c || null === c.return) {
                        V = 1;
                        sj = b;
                        Y = null;
                        break;
                    }
                    a: {
                        var f = a, g = c.return, h = c, k = b;
                        b = W;
                        h.flags |= 2048;
                        h.firstEffect = h.lastEffect = null;
                        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                            var l = k;
                            if (0 === (h.mode & 2)) {
                                var n = h.alternate;
                                n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
                            }
                            var A = 0 !== (P.current & 1), p = g;
                            do {
                                var C;
                                if (C = 13 === p.tag) {
                                    var x = p.memoizedState;
                                    if (null !== x) C = null !== x.dehydrated ? !0 : !1;
                                    else {
                                        var w = p.memoizedProps;
                                        C = void 0 === w.fallback ? !1 : !0 !== w.unstable_avoidThisFallback ? !0 : A ? !1 : !0;
                                    }
                                }
                                if (C) {
                                    var z = p.updateQueue;
                                    if (null === z) {
                                        var u = new Set;
                                        u.add(l);
                                        p.updateQueue = u;
                                    } else z.add(l);
                                    if (0 === (p.mode & 2)) {
                                        p.flags |= 64;
                                        h.flags |= 16384;
                                        h.flags &= -2981;
                                        if (1 === h.tag) {
                                            if (null === h.alternate) h.tag = 17;
                                            else {
                                                var t = zg(-1, 1);
                                                t.tag = 2;
                                                Ag(h, t);
                                            }
                                        }
                                        h.lanes |= 1;
                                        break a;
                                    }
                                    k = void 0;
                                    h = b;
                                    var q = f.pingCache;
                                    null === q ? (q = f.pingCache = new Oi, k = new Set, q.set(l, k)) : (k = q.get(l), void 0 === k && (k = new Set, q.set(l, k)));
                                    if (!k.has(h)) {
                                        k.add(h);
                                        var v = Yj.bind(null, f, l, h);
                                        l.then(v, v);
                                    }
                                    p.flags |= 4096;
                                    p.lanes = b;
                                    break a;
                                }
                                p = p.return;
                            }while (null !== p);
                            k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
                        }
                        5 !== V && (V = 2);
                        k = Mi(k, h);
                        p = g;
                        do {
                            switch(p.tag){
                                case 3:
                                    f = k;
                                    p.flags |= 4096;
                                    b &= -b;
                                    p.lanes |= b;
                                    var J = Pi(p, f, b);
                                    Bg(p, J);
                                    break a;
                                case 1:
                                    f = k;
                                    var K = p.type, Q = p.stateNode;
                                    if (0 === (p.flags & 64) && ("function" === typeof K.getDerivedStateFromError || null !== Q && "function" === typeof Q.componentDidCatch && (null === Ti || !Ti.has(Q)))) {
                                        p.flags |= 4096;
                                        b &= -b;
                                        p.lanes |= b;
                                        var L = Si(p, f, b);
                                        Bg(p, L);
                                        break a;
                                    }
                            }
                            p = p.return;
                        }while (null !== p);
                    }
                    Zj(c);
                } catch (va) {
                    b = va;
                    Y === c && null !== c && (Y = c = c.return);
                    continue;
                }
                break;
            }while (1);
        }
        function Pj() {
            var a = oj.current;
            oj.current = Gh;
            return null === a ? Gh : a;
        }
        function Tj(a, b) {
            var c = X;
            X |= 16;
            var d = Pj();
            U === a && W === b || Qj(a, b);
            for(;;)try {
                ak();
                break;
            } catch (e) {
                Sj(a, e);
            }
            qg();
            X = c;
            oj.current = d;
            if (null !== Y) throw Error(y(261));
            U = null;
            W = 0;
            return V;
        }
        function ak() {
            for(; null !== Y;)bk(Y);
        }
        function Rj() {
            for(; null !== Y && !Qf();)bk(Y);
        }
        function bk(a) {
            var b = ck(a.alternate, a, qj);
            a.memoizedProps = a.pendingProps;
            null === b ? Zj(a) : Y = b;
            pj.current = null;
        }
        function Zj(a) {
            var b = a;
            do {
                var c = b.alternate;
                a = b.return;
                if (0 === (b.flags & 2048)) {
                    c = Gi(c, b, qj);
                    if (null !== c) {
                        Y = c;
                        return;
                    }
                    c = b;
                    if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (qj & 1073741824) || 0 === (c.mode & 4)) {
                        for(var d = 0, e = c.child; null !== e;)d |= e.lanes | e.childLanes, e = e.sibling;
                        c.childLanes = d;
                    }
                    null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
                } else {
                    c = Li(b);
                    if (null !== c) {
                        c.flags &= 2047;
                        Y = c;
                        return;
                    }
                    null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
                }
                b = b.sibling;
                if (null !== b) {
                    Y = b;
                    return;
                }
                Y = b = a;
            }while (null !== b);
            0 === V && (V = 5);
        }
        function Uj(a) {
            var b = eg();
            gg(99, dk.bind(null, a, b));
            return null;
        }
        function dk(a, b) {
            do Oj();
            while (null !== yj);
            if (0 !== (X & 48)) throw Error(y(327));
            var c = a.finishedWork;
            if (null === c) return null;
            a.finishedWork = null;
            a.finishedLanes = 0;
            if (c === a.current) throw Error(y(177));
            a.callbackNode = null;
            var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
            a.pendingLanes = e;
            a.suspendedLanes = 0;
            a.pingedLanes = 0;
            a.expiredLanes &= e;
            a.mutableReadLanes &= e;
            a.entangledLanes &= e;
            e = a.entanglements;
            for(var g = a.eventTimes, h = a.expirationTimes; 0 < f;){
                var k = 31 - Vc(f), l = 1 << k;
                e[k] = 0;
                g[k] = -1;
                h[k] = -1;
                f &= ~l;
            }
            null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj.delete(a);
            a === U && (Y = U = null, W = 0);
            1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
            if (null !== d) {
                e = X;
                X |= 32;
                pj.current = null;
                kf = fd;
                g = Ne();
                if (Oe(g)) {
                    if ("selectionStart" in g) h = {
                        start: g.selectionStart,
                        end: g.selectionEnd
                    };
                    else a: if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && 0 !== l.rangeCount) {
                        h = l.anchorNode;
                        f = l.anchorOffset;
                        k = l.focusNode;
                        l = l.focusOffset;
                        try {
                            h.nodeType, k.nodeType;
                        } catch (va) {
                            h = null;
                            break a;
                        }
                        var n = 0, A = -1, p = -1, C = 0, x = 0, w = g, z = null;
                        b: for(;;){
                            for(var u;;){
                                w !== h || 0 !== f && 3 !== w.nodeType || (A = n + f);
                                w !== k || 0 !== l && 3 !== w.nodeType || (p = n + l);
                                3 === w.nodeType && (n += w.nodeValue.length);
                                if (null === (u = w.firstChild)) break;
                                z = w;
                                w = u;
                            }
                            for(;;){
                                if (w === g) break b;
                                z === h && ++C === f && (A = n);
                                z === k && ++x === l && (p = n);
                                if (null !== (u = w.nextSibling)) break;
                                w = z;
                                z = w.parentNode;
                            }
                            w = u;
                        }
                        h = -1 === A || -1 === p ? null : {
                            start: A,
                            end: p
                        };
                    } else h = null;
                    h = h || {
                        start: 0,
                        end: 0
                    };
                } else h = null;
                lf = {
                    focusedElem: g,
                    selectionRange: h
                };
                fd = !1;
                Ij = null;
                Jj = !1;
                Z = d;
                do try {
                    ek();
                } catch (va1) {
                    if (null === Z) throw Error(y(330));
                    Wi(Z, va1);
                    Z = Z.nextEffect;
                }
                while (null !== Z);
                Ij = null;
                Z = d;
                do try {
                    for(g = a; null !== Z;){
                        var t = Z.flags;
                        t & 16 && pb(Z.stateNode, "");
                        if (t & 128) {
                            var q = Z.alternate;
                            if (null !== q) {
                                var v = q.ref;
                                null !== v && ("function" === typeof v ? v(null) : v.current = null);
                            }
                        }
                        switch(t & 1038){
                            case 2:
                                fj(Z);
                                Z.flags &= -3;
                                break;
                            case 6:
                                fj(Z);
                                Z.flags &= -3;
                                ij(Z.alternate, Z);
                                break;
                            case 1024:
                                Z.flags &= -1025;
                                break;
                            case 1028:
                                Z.flags &= -1025;
                                ij(Z.alternate, Z);
                                break;
                            case 4:
                                ij(Z.alternate, Z);
                                break;
                            case 8:
                                h = Z;
                                cj(g, h);
                                var J = h.alternate;
                                dj(h);
                                null !== J && dj(J);
                        }
                        Z = Z.nextEffect;
                    }
                } catch (va2) {
                    if (null === Z) throw Error(y(330));
                    Wi(Z, va2);
                    Z = Z.nextEffect;
                }
                while (null !== Z);
                v = lf;
                q = Ne();
                t = v.focusedElem;
                g = v.selectionRange;
                if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
                    null !== g && Oe(t) && (q = g.start, v = g.end, void 0 === v && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = void 0 === g.end ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (1 !== v.rangeCount || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
                    q = [];
                    for(v = t; v = v.parentNode;)1 === v.nodeType && q.push({
                        element: v,
                        left: v.scrollLeft,
                        top: v.scrollTop
                    });
                    "function" === typeof t.focus && t.focus();
                    for(t = 0; t < q.length; t++)v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
                }
                fd = !!kf;
                lf = kf = null;
                a.current = c;
                Z = d;
                do try {
                    for(t = a; null !== Z;){
                        var K = Z.flags;
                        K & 36 && Yi(t, Z.alternate, Z);
                        if (K & 128) {
                            q = void 0;
                            var Q = Z.ref;
                            if (null !== Q) {
                                var L = Z.stateNode;
                                switch(Z.tag){
                                    case 5:
                                        q = L;
                                        break;
                                    default:
                                        q = L;
                                }
                                "function" === typeof Q ? Q(q) : Q.current = q;
                            }
                        }
                        Z = Z.nextEffect;
                    }
                } catch (va3) {
                    if (null === Z) throw Error(y(330));
                    Wi(Z, va3);
                    Z = Z.nextEffect;
                }
                while (null !== Z);
                Z = null;
                $f();
                X = e;
            } else a.current = c;
            if (xj) xj = !1, yj = a, zj = b;
            else for(Z = d; null !== Z;)b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
            d = a.pendingLanes;
            0 === d && (Ti = null);
            1 === d ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
            c = c.stateNode;
            if (Mf && "function" === typeof Mf.onCommitFiberRoot) try {
                Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
            } catch (va4) {}
            Mj(a, O());
            if (Qi) throw Qi = !1, a = Ri, Ri = null, a;
            if (0 !== (X & 8)) return null;
            ig();
            return null;
        }
        function ek() {
            for(; null !== Z;){
                var a = Z.alternate;
                Jj || null === Ij || (0 !== (Z.flags & 8) ? dc(Z, Ij) && (Jj = !0) : 13 === Z.tag && mj(a, Z) && dc(Z, Ij) && (Jj = !0));
                var b = Z.flags;
                0 !== (b & 256) && Xi(a, Z);
                0 === (b & 512) || xj || (xj = !0, hg(97, function() {
                    Oj();
                    return null;
                }));
                Z = Z.nextEffect;
            }
        }
        function Oj() {
            if (90 !== zj) {
                var a = 97 < zj ? 97 : zj;
                zj = 90;
                return gg(a, fk);
            }
            return !1;
        }
        function $i(a, b) {
            Aj.push(b, a);
            xj || (xj = !0, hg(97, function() {
                Oj();
                return null;
            }));
        }
        function Zi(a, b) {
            Bj.push(b, a);
            xj || (xj = !0, hg(97, function() {
                Oj();
                return null;
            }));
        }
        function fk() {
            if (null === yj) return !1;
            var a = yj;
            yj = null;
            if (0 !== (X & 48)) throw Error(y(331));
            var b = X;
            X |= 32;
            var c = Bj;
            Bj = [];
            for(var d = 0; d < c.length; d += 2){
                var e = c[d], f = c[d + 1], g = e.destroy;
                e.destroy = void 0;
                if ("function" === typeof g) try {
                    g();
                } catch (k) {
                    if (null === f) throw Error(y(330));
                    Wi(f, k);
                }
            }
            c = Aj;
            Aj = [];
            for(d = 0; d < c.length; d += 2){
                e = c[d];
                f = c[d + 1];
                try {
                    var h = e.create;
                    e.destroy = h();
                } catch (k1) {
                    if (null === f) throw Error(y(330));
                    Wi(f, k1);
                }
            }
            for(h = a.current.firstEffect; null !== h;)a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
            X = b;
            ig();
            return !0;
        }
        function gk(a, b, c) {
            b = Mi(c, b);
            b = Pi(a, b, 1);
            Ag(a, b);
            b = Hg();
            a = Kj(a, 1);
            null !== a && ($c(a, 1, b), Mj(a, b));
        }
        function Wi(a, b) {
            if (3 === a.tag) gk(a, a, b);
            else for(var c = a.return; null !== c;){
                if (3 === c.tag) {
                    gk(c, a, b);
                    break;
                } else if (1 === c.tag) {
                    var d = c.stateNode;
                    if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) {
                        a = Mi(b, a);
                        var e = Si(c, a, 1);
                        Ag(c, e);
                        e = Hg();
                        c = Kj(c, 1);
                        if (null !== c) $c(c, 1, e), Mj(c, e);
                        else if ("function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) try {
                            d.componentDidCatch(b, a);
                        } catch (f) {}
                        break;
                    }
                }
                c = c.return;
            }
        }
        function Yj(a, b, c) {
            var d = a.pingCache;
            null !== d && d.delete(b);
            b = Hg();
            a.pingedLanes |= a.suspendedLanes & c;
            U === a && (W & c) === c && (4 === V || 3 === V && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
            Mj(a, b);
        }
        function lj(a, b) {
            var c = a.stateNode;
            null !== c && c.delete(b);
            b = 0;
            0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b = Yc(62914560 & ~Gj), 0 === b && (b = 4194304)));
            c = Hg();
            a = Kj(a, b);
            null !== a && ($c(a, b, c), Mj(a, c));
        }
        var ck;
        ck = function(a, b, c) {
            var d = b.lanes;
            if (null !== a) {
                if (a.memoizedProps !== b.pendingProps || N.current) ug = !0;
                else if (0 !== (c & d)) ug = 0 !== (a.flags & 16384) ? !0 : !1;
                else {
                    ug = !1;
                    switch(b.tag){
                        case 3:
                            ri(b);
                            sh();
                            break;
                        case 5:
                            gh(b);
                            break;
                        case 1:
                            Ff(b.type) && Jf(b);
                            break;
                        case 4:
                            eh(b, b.stateNode.containerInfo);
                            break;
                        case 10:
                            d = b.memoizedProps.value;
                            var e = b.type._context;
                            I(mg, e._currentValue);
                            e._currentValue = d;
                            break;
                        case 13:
                            if (null !== b.memoizedState) {
                                if (0 !== (c & b.child.childLanes)) return ti(a, b, c);
                                I(P, P.current & 1);
                                b = hi(a, b, c);
                                return null !== b ? b.sibling : null;
                            }
                            I(P, P.current & 1);
                            break;
                        case 19:
                            d = 0 !== (c & b.childLanes);
                            if (0 !== (a.flags & 64)) {
                                if (d) return Ai(a, b, c);
                                b.flags |= 64;
                            }
                            e = b.memoizedState;
                            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
                            I(P, P.current);
                            if (d) break;
                            else return null;
                        case 23:
                        case 24:
                            return b.lanes = 0, mi(a, b, c);
                    }
                    return hi(a, b, c);
                }
            } else ug = !1;
            b.lanes = 0;
            switch(b.tag){
                case 2:
                    d = b.type;
                    null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
                    a = b.pendingProps;
                    e = Ef(b, M.current);
                    tg(b, c);
                    e = Ch(null, b, d, a, e, c);
                    b.flags |= 1;
                    if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
                        b.tag = 1;
                        b.memoizedState = null;
                        b.updateQueue = null;
                        if (Ff(d)) {
                            var f = !0;
                            Jf(b);
                        } else f = !1;
                        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
                        xg(b);
                        var g = d.getDerivedStateFromProps;
                        "function" === typeof g && Gg(b, d, g, a);
                        e.updater = Kg;
                        b.stateNode = e;
                        e._reactInternals = b;
                        Og(b, d, a, c);
                        b = qi(null, b, d, !0, f, c);
                    } else b.tag = 0, fi(null, b, e, c), b = b.child;
                    return b;
                case 16:
                    e = b.elementType;
                    a: {
                        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
                        a = b.pendingProps;
                        f = e._init;
                        e = f(e._payload);
                        b.type = e;
                        f = b.tag = hk(e);
                        a = lg(e, a);
                        switch(f){
                            case 0:
                                b = li(null, b, e, a, c);
                                break a;
                            case 1:
                                b = pi(null, b, e, a, c);
                                break a;
                            case 11:
                                b = gi(null, b, e, a, c);
                                break a;
                            case 14:
                                b = ii(null, b, e, lg(e.type, a), d, c);
                                break a;
                        }
                        throw Error(y(306, e, ""));
                    }
                    return b;
                case 0:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
                case 1:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
                case 3:
                    ri(b);
                    d = b.updateQueue;
                    if (null === a || null === d) throw Error(y(282));
                    d = b.pendingProps;
                    e = b.memoizedState;
                    e = null !== e ? e.element : null;
                    yg(a, b);
                    Cg(b, d, null, c);
                    d = b.memoizedState.element;
                    if (d === e) sh(), b = hi(a, b, c);
                    else {
                        e = b.stateNode;
                        if (f = e.hydrate) kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = !0;
                        if (f) {
                            a = e.mutableSourceEagerHydrationData;
                            if (null != a) for(e = 0; e < a.length; e += 2)f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
                            c = Zg(b, null, d, c);
                            for(b.child = c; c;)c.flags = c.flags & -3 | 1024, c = c.sibling;
                        } else fi(a, b, d, c), sh();
                        b = b.child;
                    }
                    return b;
                case 5:
                    return gh(b), null === a && ph(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : null !== f && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
                case 6:
                    return null === a && ph(b), null;
                case 13:
                    return ti(a, b, c);
                case 4:
                    return eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
                case 11:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
                case 7:
                    return fi(a, b, b.pendingProps, c), b.child;
                case 8:
                    return fi(a, b, b.pendingProps.children, c), b.child;
                case 12:
                    return fi(a, b, b.pendingProps.children, c), b.child;
                case 10:
                    a: {
                        d = b.type._context;
                        e = b.pendingProps;
                        g = b.memoizedProps;
                        f = e.value;
                        var h = b.type._context;
                        I(mg, h._currentValue);
                        h._currentValue = f;
                        if (null !== g) {
                            if (h = g.value, f = He(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
                                if (g.children === e.children && !N.current) {
                                    b = hi(a, b, c);
                                    break a;
                                }
                            } else for(h = b.child, null !== h && (h.return = b); null !== h;){
                                var k = h.dependencies;
                                if (null !== k) {
                                    g = h.child;
                                    for(var l = k.firstContext; null !== l;){
                                        if (l.context === d && 0 !== (l.observedBits & f)) {
                                            1 === h.tag && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                                            h.lanes |= c;
                                            l = h.alternate;
                                            null !== l && (l.lanes |= c);
                                            sg(h.return, c);
                                            k.lanes |= c;
                                            break;
                                        }
                                        l = l.next;
                                    }
                                } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
                                if (null !== g) g.return = h;
                                else for(g = h; null !== g;){
                                    if (g === b) {
                                        g = null;
                                        break;
                                    }
                                    h = g.sibling;
                                    if (null !== h) {
                                        h.return = g.return;
                                        g = h;
                                        break;
                                    }
                                    g = g.return;
                                }
                                h = g;
                            }
                        }
                        fi(a, b, e.children, c);
                        b = b.child;
                    }
                    return b;
                case 9:
                    return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
                case 14:
                    return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
                case 15:
                    return ki(a, b, b.type, b.pendingProps, d, c);
                case 17:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = !0, Jf(b)) : a = !1, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, !0, a, c);
                case 19:
                    return Ai(a, b, c);
                case 23:
                    return mi(a, b, c);
                case 24:
                    return mi(a, b, c);
            }
            throw Error(y(156, b.tag));
        };
        function ik(a, b, c, d) {
            this.tag = a;
            this.key = c;
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
            this.index = 0;
            this.ref = null;
            this.pendingProps = b;
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
            this.mode = d;
            this.flags = 0;
            this.lastEffect = this.firstEffect = this.nextEffect = null;
            this.childLanes = this.lanes = 0;
            this.alternate = null;
        }
        function nh(a, b, c, d) {
            return new ik(a, b, c, d);
        }
        function ji(a) {
            a = a.prototype;
            return !(!a || !a.isReactComponent);
        }
        function hk(a) {
            if ("function" === typeof a) return ji(a) ? 1 : 0;
            if (void 0 !== a && null !== a) {
                a = a.$$typeof;
                if (a === Aa) return 11;
                if (a === Da) return 14;
            }
            return 2;
        }
        function Tg(a, b) {
            var c = a.alternate;
            null === c ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
            c.childLanes = a.childLanes;
            c.lanes = a.lanes;
            c.child = a.child;
            c.memoizedProps = a.memoizedProps;
            c.memoizedState = a.memoizedState;
            c.updateQueue = a.updateQueue;
            b = a.dependencies;
            c.dependencies = null === b ? null : {
                lanes: b.lanes,
                firstContext: b.firstContext
            };
            c.sibling = a.sibling;
            c.index = a.index;
            c.ref = a.ref;
            return c;
        }
        function Vg(a, b, c, d, e, f) {
            var g = 2;
            d = a;
            if ("function" === typeof a) ji(a) && (g = 1);
            else if ("string" === typeof a) g = 5;
            else a: switch(a){
                case ua:
                    return Xg(c.children, e, f, b);
                case Ha:
                    g = 8;
                    e |= 16;
                    break;
                case wa:
                    g = 8;
                    e |= 1;
                    break;
                case xa:
                    return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
                case Ba:
                    return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
                case Ca:
                    return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
                case Ia:
                    return vi(c, e, f, b);
                case Ja:
                    return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
                default:
                    if ("object" === typeof a && null !== a) switch(a.$$typeof){
                        case ya:
                            g = 10;
                            break a;
                        case za:
                            g = 9;
                            break a;
                        case Aa:
                            g = 11;
                            break a;
                        case Da:
                            g = 14;
                            break a;
                        case Ea:
                            g = 16;
                            d = null;
                            break a;
                        case Fa:
                            g = 22;
                            break a;
                    }
                    throw Error(y(130, null == a ? a : typeof a, ""));
            }
            b = nh(g, c, b, e);
            b.elementType = a;
            b.type = d;
            b.lanes = f;
            return b;
        }
        function Xg(a, b, c, d) {
            a = nh(7, a, d, b);
            a.lanes = c;
            return a;
        }
        function vi(a, b, c, d) {
            a = nh(23, a, d, b);
            a.elementType = Ia;
            a.lanes = c;
            return a;
        }
        function Ug(a, b, c) {
            a = nh(6, a, null, b);
            a.lanes = c;
            return a;
        }
        function Wg(a, b, c) {
            b = nh(4, null !== a.children ? a.children : [], a.key, b);
            b.lanes = c;
            b.stateNode = {
                containerInfo: a.containerInfo,
                pendingChildren: null,
                implementation: a.implementation
            };
            return b;
        }
        function jk(a, b, c) {
            this.tag = b;
            this.containerInfo = a;
            this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
            this.timeoutHandle = -1;
            this.pendingContext = this.context = null;
            this.hydrate = c;
            this.callbackNode = null;
            this.callbackPriority = 0;
            this.eventTimes = Zc(0);
            this.expirationTimes = Zc(-1);
            this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
            this.entanglements = Zc(0);
            this.mutableSourceEagerHydrationData = null;
        }
        function kk(a, b, c) {
            var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: ta,
                key: null == d ? null : "" + d,
                children: a,
                containerInfo: b,
                implementation: c
            };
        }
        function lk(a, b, c, d) {
            var e = b.current, f = Hg(), g = Ig(e);
            a: if (c) {
                c = c._reactInternals;
                b: {
                    if (Zb(c) !== c || 1 !== c.tag) throw Error(y(170));
                    var h = c;
                    do {
                        switch(h.tag){
                            case 3:
                                h = h.stateNode.context;
                                break b;
                            case 1:
                                if (Ff(h.type)) {
                                    h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break b;
                                }
                        }
                        h = h.return;
                    }while (null !== h);
                    throw Error(y(171));
                }
                if (1 === c.tag) {
                    var k = c.type;
                    if (Ff(k)) {
                        c = If(c, k, h);
                        break a;
                    }
                }
                c = h;
            } else c = Cf;
            null === b.context ? b.context = c : b.pendingContext = c;
            b = zg(f, g);
            b.payload = {
                element: a
            };
            d = void 0 === d ? null : d;
            null !== d && (b.callback = d);
            Ag(e, b);
            Jg(e, g, f);
            return g;
        }
        function mk(a) {
            a = a.current;
            if (!a.child) return null;
            switch(a.child.tag){
                case 5:
                    return a.child.stateNode;
                default:
                    return a.child.stateNode;
            }
        }
        function nk(a, b) {
            a = a.memoizedState;
            if (null !== a && null !== a.dehydrated) {
                var c = a.retryLane;
                a.retryLane = 0 !== c && c < b ? c : b;
            }
        }
        function ok(a, b) {
            nk(a, b);
            (a = a.alternate) && nk(a, b);
        }
        function pk() {
            return null;
        }
        function qk(a, b, c) {
            var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
            c = new jk(a, b, null != c && !0 === c.hydrate);
            b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
            c.current = b;
            b.stateNode = c;
            xg(b);
            a[ff] = c.current;
            cf(8 === a.nodeType ? a.parentNode : a);
            if (d) for(a = 0; a < d.length; a++){
                b = d[a];
                var e = b._getVersion;
                e = e(b._source);
                null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [
                    b,
                    e
                ] : c.mutableSourceEagerHydrationData.push(b, e);
            }
            this._internalRoot = c;
        }
        qk.prototype.render = function(a) {
            lk(a, this._internalRoot, null, null);
        };
        qk.prototype.unmount = function() {
            var a = this._internalRoot, b = a.containerInfo;
            lk(null, a, null, function() {
                b[ff] = null;
            });
        };
        function rk(a) {
            return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
        }
        function sk(a, b) {
            b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
            if (!b) for(var c; c = a.lastChild;)a.removeChild(c);
            return new qk(a, 0, b ? {
                hydrate: !0
            } : void 0);
        }
        function tk(a, b, c, d, e) {
            var f = c._reactRootContainer;
            if (f) {
                var g = f._internalRoot;
                if ("function" === typeof e) {
                    var h = e;
                    e = function() {
                        var a = mk(g);
                        h.call(a);
                    };
                }
                lk(b, g, a, e);
            } else {
                f = c._reactRootContainer = sk(c, d);
                g = f._internalRoot;
                if ("function" === typeof e) {
                    var k = e;
                    e = function() {
                        var a = mk(g);
                        k.call(a);
                    };
                }
                Xj(function() {
                    lk(b, g, a, e);
                });
            }
            return mk(g);
        }
        ec = function(a) {
            if (13 === a.tag) {
                var b = Hg();
                Jg(a, 4, b);
                ok(a, 4);
            }
        };
        fc = function(a) {
            if (13 === a.tag) {
                var b = Hg();
                Jg(a, 67108864, b);
                ok(a, 67108864);
            }
        };
        gc = function(a) {
            if (13 === a.tag) {
                var b = Hg(), c = Ig(a);
                Jg(a, c, b);
                ok(a, c);
            }
        };
        hc = function(a, b) {
            return b();
        };
        yb = function(a, b, c) {
            switch(b){
                case "input":
                    ab(a, c);
                    b = c.name;
                    if ("radio" === c.type && null != b) {
                        for(c = a; c.parentNode;)c = c.parentNode;
                        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                        for(b = 0; b < c.length; b++){
                            var d = c[b];
                            if (d !== a && d.form === a.form) {
                                var e = Db(d);
                                if (!e) throw Error(y(90));
                                Wa(d);
                                ab(d, e);
                            }
                        }
                    }
                    break;
                case "textarea":
                    ib(a, c);
                    break;
                case "select":
                    b = c.value, null != b && fb(a, !!c.multiple, b, !1);
            }
        };
        Gb = Wj;
        Hb = function(a, b, c, d, e) {
            var f = X;
            X |= 4;
            try {
                return gg(98, a.bind(null, b, c, d, e));
            } finally{
                X = f, 0 === X && (wj(), ig());
            }
        };
        Ib = function() {
            0 === (X & 49) && (Vj(), Oj());
        };
        Jb = function(a, b) {
            var c = X;
            X |= 2;
            try {
                return a(b);
            } finally{
                X = c, 0 === X && (wj(), ig());
            }
        };
        function uk(a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!rk(b)) throw Error(y(200));
            return kk(a, b, null, c);
        }
        var vk = {
            Events: [
                Cb,
                ue,
                Db,
                Eb,
                Fb,
                Oj,
                {
                    current: !1
                }
            ]
        }, wk = {
            findFiberByHostInstance: wc,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom"
        };
        var xk = {
            bundleType: wk.bundleType,
            version: wk.version,
            rendererPackageName: wk.rendererPackageName,
            rendererConfig: wk.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: ra.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(a) {
                a = cc(a);
                return null === a ? null : a.stateNode;
            },
            findFiberByHostInstance: wk.findFiberByHostInstance || pk,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!yk.isDisabled && yk.supportsFiber) try {
                Lf = yk.inject(xk), Mf = yk;
            } catch (a1) {}
        }
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
        exports.createPortal = uk;
        exports.findDOMNode = function(a) {
            if (null == a) return null;
            if (1 === a.nodeType) return a;
            var b = a._reactInternals;
            if (void 0 === b) {
                if ("function" === typeof a.render) throw Error(y(188));
                throw Error(y(268, Object.keys(a)));
            }
            a = cc(b);
            a = null === a ? null : a.stateNode;
            return a;
        };
        exports.flushSync = function(a, b) {
            var c = X;
            if (0 !== (c & 48)) return a(b);
            X |= 1;
            try {
                if (a) return gg(99, a.bind(null, b));
            } finally{
                X = c, ig();
            }
        };
        exports.hydrate = function(a, b, c) {
            if (!rk(b)) throw Error(y(200));
            return tk(null, a, b, !0, c);
        };
        exports.render = function(a, b, c) {
            if (!rk(b)) throw Error(y(200));
            return tk(null, a, b, !1, c);
        };
        exports.unmountComponentAtNode = function(a) {
            if (!rk(a)) throw Error(y(40));
            return a._reactRootContainer ? (Xj(function() {
                tk(null, null, a, !1, function() {
                    a._reactRootContainer = null;
                    a[ff] = null;
                });
            }), !0) : !1;
        };
        exports.unstable_batchedUpdates = Wj;
        exports.unstable_createPortal = function(a, b) {
            return uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
        };
        exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
            if (!rk(c)) throw Error(y(200));
            if (null == a || void 0 === a._reactInternals) throw Error(y(38));
            return tk(a, b, c, !1, d);
        };
        exports.version = "17.0.2";
    /***/ },
    /* 38 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(39);
    /***/ },
    /* 39 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f, g, h, k;
        if ("object" === typeof performance && "function" === typeof performance.now) {
            var l = performance;
            exports.unstable_now = function() {
                return l.now();
            };
        } else {
            var p = Date, q = p.now();
            exports.unstable_now = function() {
                return p.now() - q;
            };
        }
        if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
            var t = null, u = null, w = function() {
                if (null !== t) try {
                    var a = exports.unstable_now();
                    t(!0, a);
                    t = null;
                } catch (b) {
                    throw setTimeout(w, 0), b;
                }
            };
            f = function(a) {
                null !== t ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
            };
            g = function(a, b) {
                u = setTimeout(a, b);
            };
            h = function() {
                clearTimeout(u);
            };
            exports.unstable_shouldYield = function() {
                return !1;
            };
            k = exports.unstable_forceFrameRate = function() {};
        } else {
            var x = window.setTimeout, y = window.clearTimeout;
            if ("undefined" !== typeof console) {
                var z = window.cancelAnimationFrame;
                "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
                "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
            }
            var A = !1, B = null, C = -1, D = 5, E = 0;
            exports.unstable_shouldYield = function() {
                return exports.unstable_now() >= E;
            };
            k = function() {};
            exports.unstable_forceFrameRate = function(a) {
                0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1E3 / a) : 5;
            };
            var F = new MessageChannel, G = F.port2;
            F.port1.onmessage = function() {
                if (null !== B) {
                    var a = exports.unstable_now();
                    E = a + D;
                    try {
                        B(!0, a) ? G.postMessage(null) : (A = !1, B = null);
                    } catch (b) {
                        throw G.postMessage(null), b;
                    }
                } else A = !1;
            };
            f = function(a) {
                B = a;
                A || (A = !0, G.postMessage(null));
            };
            g = function(a, b) {
                C = x(function() {
                    a(exports.unstable_now());
                }, b);
            };
            h = function() {
                y(C);
                C = -1;
            };
        }
        function H(a, b) {
            var c = a.length;
            a.push(b);
            a: for(;;){
                var d = c - 1 >>> 1, e = a[d];
                if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;
                else break a;
            }
        }
        function J(a) {
            a = a[0];
            return void 0 === a ? null : a;
        }
        function K(a) {
            var b = a[0];
            if (void 0 !== b) {
                var c = a.pop();
                if (c !== b) {
                    a[0] = c;
                    a: for(var d = 0, e = a.length; d < e;){
                        var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
                        if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
                        else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;
                        else break a;
                    }
                }
                return b;
            }
            return null;
        }
        function I(a, b) {
            var c = a.sortIndex - b.sortIndex;
            return 0 !== c ? c : a.id - b.id;
        }
        var L = [], M = [], N = 1, O = null, P = 3, Q = !1, R = !1, S = !1;
        function T(a) {
            for(var b = J(M); null !== b;){
                if (null === b.callback) K(M);
                else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);
                else break;
                b = J(M);
            }
        }
        function U(a) {
            S = !1;
            T(a);
            if (!R) {
                if (null !== J(L)) R = !0, f(V);
                else {
                    var b = J(M);
                    null !== b && g(U, b.startTime - a);
                }
            }
        }
        function V(a, b) {
            R = !1;
            S && (S = !1, h());
            Q = !0;
            var c = P;
            try {
                T(b);
                for(O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield());){
                    var d = O.callback;
                    if ("function" === typeof d) {
                        O.callback = null;
                        P = O.priorityLevel;
                        var e = d(O.expirationTime <= b);
                        b = exports.unstable_now();
                        "function" === typeof e ? O.callback = e : O === J(L) && K(L);
                        T(b);
                    } else K(L);
                    O = J(L);
                }
                if (null !== O) var m = !0;
                else {
                    var n = J(M);
                    null !== n && g(U, n.startTime - b);
                    m = !1;
                }
                return m;
            } finally{
                O = null, P = c, Q = !1;
            }
        }
        var W = k;
        exports.unstable_IdlePriority = 5;
        exports.unstable_ImmediatePriority = 1;
        exports.unstable_LowPriority = 4;
        exports.unstable_NormalPriority = 3;
        exports.unstable_Profiling = null;
        exports.unstable_UserBlockingPriority = 2;
        exports.unstable_cancelCallback = function(a) {
            a.callback = null;
        };
        exports.unstable_continueExecution = function() {
            R || Q || (R = !0, f(V));
        };
        exports.unstable_getCurrentPriorityLevel = function() {
            return P;
        };
        exports.unstable_getFirstCallbackNode = function() {
            return J(L);
        };
        exports.unstable_next = function(a) {
            switch(P){
                case 1:
                case 2:
                case 3:
                    var b = 3;
                    break;
                default:
                    b = P;
            }
            var c = P;
            P = b;
            try {
                return a();
            } finally{
                P = c;
            }
        };
        exports.unstable_pauseExecution = function() {};
        exports.unstable_requestPaint = W;
        exports.unstable_runWithPriority = function(a, b) {
            switch(a){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    a = 3;
            }
            var c = P;
            P = a;
            try {
                return b();
            } finally{
                P = c;
            }
        };
        exports.unstable_scheduleCallback = function(a, b, c) {
            var d = exports.unstable_now();
            "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
            switch(a){
                case 1:
                    var e = -1;
                    break;
                case 2:
                    e = 250;
                    break;
                case 5:
                    e = 1073741823;
                    break;
                case 4:
                    e = 1E4;
                    break;
                default:
                    e = 5E3;
            }
            e = c + e;
            a = {
                id: N++,
                callback: b,
                priorityLevel: a,
                startTime: c,
                expirationTime: e,
                sortIndex: -1
            };
            c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = !0, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = !0, f(V)));
            return a;
        };
        exports.unstable_wrapCallback = function(a) {
            var b = P;
            return function() {
                var c = P;
                P = b;
                try {
                    return a.apply(this, arguments);
                } finally{
                    P = c;
                }
            };
        };
    /***/ },
    /* 40 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
        function z(a) {
            if ("object" === typeof a && null !== a) {
                var u = a.$$typeof;
                switch(u){
                    case c:
                        switch(a = a.type, a){
                            case l:
                            case m:
                            case e:
                            case g:
                            case f:
                            case p:
                                return a;
                            default:
                                switch(a = a && a.$$typeof, a){
                                    case k:
                                    case n:
                                    case t:
                                    case r:
                                    case h:
                                        return a;
                                    default:
                                        return u;
                                }
                        }
                    case d:
                        return u;
                }
            }
        }
        function A(a) {
            return z(a) === m;
        }
        exports.AsyncMode = l;
        exports.ConcurrentMode = m;
        exports.ContextConsumer = k;
        exports.ContextProvider = h;
        exports.Element = c;
        exports.ForwardRef = n;
        exports.Fragment = e;
        exports.Lazy = t;
        exports.Memo = r;
        exports.Portal = d;
        exports.Profiler = g;
        exports.StrictMode = f;
        exports.Suspense = p;
        exports.isAsyncMode = function(a) {
            return A(a) || z(a) === l;
        };
        exports.isConcurrentMode = A;
        exports.isContextConsumer = function(a) {
            return z(a) === k;
        };
        exports.isContextProvider = function(a) {
            return z(a) === h;
        };
        exports.isElement = function(a) {
            return "object" === typeof a && null !== a && a.$$typeof === c;
        };
        exports.isForwardRef = function(a) {
            return z(a) === n;
        };
        exports.isFragment = function(a) {
            return z(a) === e;
        };
        exports.isLazy = function(a) {
            return z(a) === t;
        };
        exports.isMemo = function(a) {
            return z(a) === r;
        };
        exports.isPortal = function(a) {
            return z(a) === d;
        };
        exports.isProfiler = function(a) {
            return z(a) === g;
        };
        exports.isStrictMode = function(a) {
            return z(a) === f;
        };
        exports.isSuspense = function(a) {
            return z(a) === p;
        };
        exports.isValidElementType = function(a) {
            return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
        };
        exports.typeOf = z;
    /***/ },
    ,
    ,
    /* 43 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var CompletionType;
        (function(CompletionType) {
            CompletionType[CompletionType["SearchEngines"] = 0] = "SearchEngines";
            CompletionType[CompletionType["History"] = 1] = "History";
            CompletionType[CompletionType["Bookmarks"] = 2] = "Bookmarks";
        })(CompletionType || (CompletionType = {}));
        exports.default = CompletionType;
    /***/ },
    /* 44 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var TabFlag;
        (function(TabFlag) {
            TabFlag["CurrentTab"] = "%";
            TabFlag["LastTab"] = "#";
            TabFlag["None"] = "";
        })(TabFlag || (TabFlag = {}));
        exports.default = TabFlag;
    /***/ },
    /* 45 */ /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
        // Imports
        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
        // Module
        ___CSS_LOADER_EXPORT___.push([
            module.i,
            "html, body, * {\n  margin: 0;\n  padding: 0;\n\n  font-style: normal;\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 16px;\n}\n\ninput {\n  font-style: normal;\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 16px;\n}\n\nbody {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.vimvixen-console {\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n}\n",
            "",
            {
                "version": 3,
                "sources": [
                    "webpack://./src/console/index.css"
                ],
                "names": [],
                "mappings": "AAAA;EACE,SAAS;EACT,UAAU;;EAEV,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,SAAS;EACT,UAAU;AACZ",
                "sourcesContent": [
                    "html, body, * {\n  margin: 0;\n  padding: 0;\n\n  font-style: normal;\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 16px;\n}\n\ninput {\n  font-style: normal;\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 16px;\n}\n\nbody {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.vimvixen-console {\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n}\n"
                ],
                "sourceRoot": ""
            }
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["a"] = ___CSS_LOADER_EXPORT___;
    /***/ },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 53 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const styled_1 = tslib_1.__importDefault(__webpack_require__(27));
        const Container = styled_1.default.div`
  background-color: ${({ theme  })=>theme.commandBackground};
  color: ${({ theme  })=>theme.commandForeground};
  display: flex;
`;
        const Prompt = styled_1.default.i`
  font-style: normal;
`;
        const InputInner = styled_1.default.input`
  border: none;
  flex-grow: 1;
  background-color: ${({ theme  })=>theme.commandBackground};
  color: ${({ theme  })=>theme.commandForeground};
`;
        const Input = (props)=>{
            const input = react_1.default.useRef(null);
            react_1.default.useEffect(()=>{
                var _a;
                (_a = input === null || input === void 0 ? void 0 : input.current) === null || _a === void 0 || _a.focus();
            }, []);
            return react_1.default.createElement(Container, null, react_1.default.createElement(Prompt, null, props.prompt), react_1.default.createElement(InputInner, {
                ref: input,
                onBlur: props.onBlur,
                onKeyDown: props.onKeyDown,
                onChange: props.onChange,
                value: props.value
            }));
        };
        exports.default = Input;
    /***/ },
    /* 54 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const ConsoleFrameClient_1 = tslib_1.__importDefault(__webpack_require__(262));
        const useAutoResize = ()=>{
            const [prevWidth, setPrevWidth] = react_1.default.useState(-1);
            const [prevHeight, setPrevHeight] = react_1.default.useState(-1);
            const consoleFrameClient = react_1.default.useMemo(()=>{
                return new ConsoleFrameClient_1.default();
            }, []);
            react_1.default.useLayoutEffect(()=>{
                const { scrollWidth: width , scrollHeight: height  } = document.getElementById("vimvixen-console");
                consoleFrameClient.resize(width, height);
                if (width === prevWidth && height === prevHeight) return;
                setPrevWidth(width);
                setPrevHeight(height);
            });
        };
        exports.default = useAutoResize;
    /***/ },
    /* 55 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.hideCommand = exports.showInfo = exports.showError = exports.showFind = exports.showCommand = exports.hide = exports.HIDE = exports.SHOW_FIND = exports.HIDE_COMMAND = exports.SHOW_INFO = exports.SHOW_ERROR = exports.SHOW_COMMAND = void 0;
        exports.SHOW_COMMAND = "show.command";
        exports.SHOW_ERROR = "show.error";
        exports.SHOW_INFO = "show.info";
        exports.HIDE_COMMAND = "hide.command";
        exports.SHOW_FIND = "show.find";
        exports.HIDE = "hide";
        const hide = ()=>{
            return {
                type: exports.HIDE
            };
        };
        exports.hide = hide;
        const showCommand = (text)=>{
            return {
                type: exports.SHOW_COMMAND,
                text
            };
        };
        exports.showCommand = showCommand;
        const showFind = ()=>{
            return {
                type: exports.SHOW_FIND
            };
        };
        exports.showFind = showFind;
        const showError = (text)=>{
            return {
                type: exports.SHOW_ERROR,
                text: text
            };
        };
        exports.showError = showError;
        const showInfo = (text)=>{
            return {
                type: exports.SHOW_INFO,
                text: text
            };
        };
        exports.showInfo = showInfo;
        const hideCommand = ()=>{
            return {
                type: exports.HIDE_COMMAND
            };
        };
        exports.hideCommand = hideCommand;
    /***/ },
    /* 56 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.AppDispatchContext = exports.AppStateContext = void 0;
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const recuer_1 = __webpack_require__(57);
        exports.AppStateContext = react_1.default.createContext(recuer_1.defaultState);
        exports.AppDispatchContext = react_1.default.createContext(()=>{});
    /***/ },
    /* 57 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.defaultState = void 0;
        const actions_1 = __webpack_require__(55);
        exports.defaultState = {
            mode: "",
            messageText: "",
            consoleText: ""
        };
        function reducer(state = exports.defaultState, action) {
            switch(action.type){
                case actions_1.HIDE:
                    return Object.assign(Object.assign({}, state), {
                        mode: ""
                    });
                case actions_1.SHOW_COMMAND:
                    return Object.assign(Object.assign({}, state), {
                        mode: "command",
                        consoleText: action.text
                    });
                case actions_1.SHOW_FIND:
                    return Object.assign(Object.assign({}, state), {
                        mode: "find",
                        consoleText: ""
                    });
                case actions_1.SHOW_ERROR:
                    return Object.assign(Object.assign({}, state), {
                        mode: "error",
                        messageText: action.text
                    });
                case actions_1.SHOW_INFO:
                    return Object.assign(Object.assign({}, state), {
                        mode: "info",
                        messageText: action.text
                    });
                case actions_1.HIDE_COMMAND:
                    return Object.assign(Object.assign({}, state), {
                        mode: state.mode === "command" || state.mode === "find" ? "" : state.mode
                    });
                default:
                    return state;
            }
        }
        exports.default = reducer;
    /***/ },
    /* 58 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.selectPrev = exports.selectNext = exports.setCompletions = exports.setCompletionSource = exports.initCompletion = exports.COMPLETION_PREV = exports.COMPLETION_NEXT = exports.SET_COMPLETIONS = exports.SET_COMPLETION_SOURCE = exports.INIT_COMPLETIONS = void 0;
        exports.INIT_COMPLETIONS = "reset.completions";
        exports.SET_COMPLETION_SOURCE = "set.completion.source";
        exports.SET_COMPLETIONS = "set.completions";
        exports.COMPLETION_NEXT = "completion.next";
        exports.COMPLETION_PREV = "completion.prev";
        const initCompletion = (completionTypes)=>{
            return {
                type: exports.INIT_COMPLETIONS,
                completionTypes
            };
        };
        exports.initCompletion = initCompletion;
        const setCompletionSource = (query)=>{
            return {
                type: exports.SET_COMPLETION_SOURCE,
                completionSource: query
            };
        };
        exports.setCompletionSource = setCompletionSource;
        const setCompletions = (completions)=>{
            return {
                type: exports.SET_COMPLETIONS,
                completions
            };
        };
        exports.setCompletions = setCompletions;
        const selectNext = ()=>{
            return {
                type: exports.COMPLETION_NEXT
            };
        };
        exports.selectNext = selectNext;
        const selectPrev = ()=>{
            return {
                type: exports.COMPLETION_PREV
            };
        };
        exports.selectPrev = selectPrev;
    /***/ },
    /* 59 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Command = void 0;
        var Command;
        (function(Command) {
            Command["Open"] = "open";
            Command["TabOpen"] = "tabopen";
            Command["WindowOpen"] = "winopen";
            Command["Buffer"] = "buffer";
            Command["BufferDelete"] = "bdelete";
            Command["BufferDeleteForce"] = "bdelete!";
            Command["BuffersDelete"] = "bdeletes";
            Command["BuffersDeleteForce"] = "bdeletes!";
            Command["AddBookmark"] = "addbookmark";
            Command["Quit"] = "quit";
            Command["QuitAll"] = "quitall";
            Command["Set"] = "set";
            Command["Help"] = "help";
        })(Command = exports.Command || (exports.Command = {}));
    /***/ },
    /* 60 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.CompletionDispatchContext = exports.CompletionStateContext = void 0;
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const reducer_1 = __webpack_require__(61);
        exports.CompletionStateContext = react_1.default.createContext(reducer_1.defaultState);
        exports.CompletionDispatchContext = react_1.default.createContext(()=>{});
    /***/ },
    /* 61 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.defaultState = void 0;
        const actions_1 = __webpack_require__(58);
        exports.defaultState = {
            completionTypes: undefined,
            completionSource: "",
            completions: [],
            select: -1
        };
        const nextSelection = (state)=>{
            const length = state.completions.map((g)=>g.items.length).reduce((x, y)=>x + y, 0);
            if (length === 0) return -1;
            if (state.select < 0) return 0;
            if (state.select + 1 < length) return state.select + 1;
            return -1;
        };
        const prevSelection = (state)=>{
            if (state.completions.length === 0) return -1;
            const length = state.completions.map((g)=>g.items.length).reduce((x, y)=>x + y);
            if (state.select < 0) return length - 1;
            return state.select - 1;
        };
        function reducer(state = exports.defaultState, action) {
            switch(action.type){
                case actions_1.INIT_COMPLETIONS:
                    return Object.assign(Object.assign({}, state), {
                        completionTypes: action.completionTypes,
                        completions: [],
                        select: -1
                    });
                case actions_1.SET_COMPLETION_SOURCE:
                    return Object.assign(Object.assign({}, state), {
                        completionSource: action.completionSource,
                        select: -1
                    });
                case actions_1.SET_COMPLETIONS:
                    return Object.assign(Object.assign({}, state), {
                        completions: action.completions
                    });
                case actions_1.COMPLETION_NEXT:
                    {
                        const select = nextSelection(state);
                        return Object.assign(Object.assign({}, state), {
                            select: select
                        });
                    }
                case actions_1.COMPLETION_PREV:
                    {
                        const select1 = prevSelection(state);
                        return Object.assign(Object.assign({}, state), {
                            select: select1
                        });
                    }
                default:
                    return state;
            }
        }
        exports.default = reducer;
    /***/ },
    /* 62 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.UnknownCommandError = void 0;
        const Command_1 = __webpack_require__(59);
        class UnknownCommandError extends Error {
            constructor(value){
                super(`unknown command '${value}'`);
            }
        }
        exports.UnknownCommandError = UnknownCommandError;
        class CommandParser {
            parse(value) {
                switch(value){
                    case "o":
                    case "open":
                        return Command_1.Command.Open;
                    case "t":
                    case "tabopen":
                        return Command_1.Command.TabOpen;
                    case "w":
                    case "winopen":
                        return Command_1.Command.WindowOpen;
                    case "b":
                    case "buffer":
                        return Command_1.Command.Buffer;
                    case "bd":
                    case "bdel":
                    case "bdelete":
                        return Command_1.Command.BufferDelete;
                    case "bd!":
                    case "bdel!":
                    case "bdelete!":
                        return Command_1.Command.BufferDeleteForce;
                    case "bdeletes":
                        return Command_1.Command.BuffersDelete;
                    case "bdeletes!":
                        return Command_1.Command.BuffersDeleteForce;
                    case "addbookmark":
                        return Command_1.Command.AddBookmark;
                    case "q":
                    case "quit":
                        return Command_1.Command.Quit;
                    case "qa":
                    case "quitall":
                        return Command_1.Command.QuitAll;
                    case "set":
                        return Command_1.Command.Set;
                    case "h":
                    case "help":
                        return Command_1.Command.Help;
                }
                throw new UnknownCommandError(value);
            }
        }
        exports.default = CommandParser;
    /***/ },
    /* 63 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ColorSchemeUpdateContext = exports.ColorSchemeContext = void 0;
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const ColorScheme_1 = tslib_1.__importDefault(__webpack_require__(11));
        exports.ColorSchemeContext = react_1.default.createContext(ColorScheme_1.default.System);
        exports.ColorSchemeUpdateContext = react_1.default.createContext(()=>{});
    /***/ },
    ,
    /* 65 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        var isOldIE = function isOldIE() {
            var memo;
            return function memorize() {
                if (typeof memo === "undefined") // Test for IE <= 9 as proposed by Browserhacks
                // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                // Tests for existence of standard globals is to allow style-loader
                // to operate correctly into non-standard environments
                // @see https://github.com/webpack-contrib/style-loader/issues/177
                memo = Boolean(window && document && document.all && !window.atob);
                return memo;
            };
        }();
        var getTarget = function getTarget() {
            var memo = {};
            return function memorize(target) {
                if (typeof memo[target] === "undefined") {
                    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself
                    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
                        // This will throw an exception if access to iframe is blocked
                        // due to cross-origin restrictions
                        styleTarget = styleTarget.contentDocument.head;
                    } catch (e) {
                        // istanbul ignore next
                        styleTarget = null;
                    }
                    memo[target] = styleTarget;
                }
                return memo[target];
            };
        }();
        var stylesInDom = [];
        function getIndexByIdentifier(identifier) {
            var result = -1;
            for(var i = 0; i < stylesInDom.length; i++)if (stylesInDom[i].identifier === identifier) {
                result = i;
                break;
            }
            return result;
        }
        function modulesToDom(list, options) {
            var idCountMap = {};
            var identifiers = [];
            for(var i = 0; i < list.length; i++){
                var item = list[i];
                var id = options.base ? item[0] + options.base : item[0];
                var count = idCountMap[id] || 0;
                var identifier = "".concat(id, " ").concat(count);
                idCountMap[id] = count + 1;
                var index = getIndexByIdentifier(identifier);
                var obj = {
                    css: item[1],
                    media: item[2],
                    sourceMap: item[3]
                };
                if (index !== -1) {
                    stylesInDom[index].references++;
                    stylesInDom[index].updater(obj);
                } else stylesInDom.push({
                    identifier: identifier,
                    updater: addStyle(obj, options),
                    references: 1
                });
                identifiers.push(identifier);
            }
            return identifiers;
        }
        function insertStyleElement(options) {
            var style = document.createElement("style");
            var attributes = options.attributes || {};
            if (typeof attributes.nonce === "undefined") {
                var nonce = __webpack_require__.nc;
                if (nonce) attributes.nonce = nonce;
            }
            Object.keys(attributes).forEach(function(key) {
                style.setAttribute(key, attributes[key]);
            });
            if (typeof options.insert === "function") options.insert(style);
            else {
                var target = getTarget(options.insert || "head");
                if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                target.appendChild(style);
            }
            return style;
        }
        function removeStyleElement(style) {
            // istanbul ignore if
            if (style.parentNode === null) return false;
            style.parentNode.removeChild(style);
        }
        /* istanbul ignore next  */ var replaceText = function replaceText() {
            var textStore = [];
            return function replace(index, replacement) {
                textStore[index] = replacement;
                return textStore.filter(Boolean).join("\n");
            };
        }();
        function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? "" : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE
            /* istanbul ignore if  */ if (style.styleSheet) style.styleSheet.cssText = replaceText(index, css);
            else {
                var cssNode = document.createTextNode(css);
                var childNodes = style.childNodes;
                if (childNodes[index]) style.removeChild(childNodes[index]);
                if (childNodes.length) style.insertBefore(cssNode, childNodes[index]);
                else style.appendChild(cssNode);
            }
        }
        function applyToTag(style, options, obj) {
            var css = obj.css;
            var media = obj.media;
            var sourceMap = obj.sourceMap;
            if (media) style.setAttribute("media", media);
            else style.removeAttribute("media");
            if (sourceMap && typeof btoa !== "undefined") css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
             // For old IE
            /* istanbul ignore if  */ if (style.styleSheet) style.styleSheet.cssText = css;
            else {
                while(style.firstChild)style.removeChild(style.firstChild);
                style.appendChild(document.createTextNode(css));
            }
        }
        var singleton = null;
        var singletonCounter = 0;
        function addStyle(obj, options) {
            var style;
            var update;
            var remove;
            if (options.singleton) {
                var styleIndex = singletonCounter++;
                style = singleton || (singleton = insertStyleElement(options));
                update = applyToSingletonTag.bind(null, style, styleIndex, false);
                remove = applyToSingletonTag.bind(null, style, styleIndex, true);
            } else {
                style = insertStyleElement(options);
                update = applyToTag.bind(null, style, options);
                remove = function remove() {
                    removeStyleElement(style);
                };
            }
            update(obj);
            return function updateStyle(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                    update(obj = newObj);
                } else remove();
            };
        }
        module.exports = function(list, options) {
            options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();
            list = list || [];
            var lastIdentifiers = modulesToDom(list, options);
            return function update(newList) {
                newList = newList || [];
                if (Object.prototype.toString.call(newList) !== "[object Array]") return;
                for(var i = 0; i < lastIdentifiers.length; i++){
                    var identifier = lastIdentifiers[i];
                    var index = getIndexByIdentifier(identifier);
                    stylesInDom[index].references--;
                }
                var newLastIdentifiers = modulesToDom(newList, options);
                for(var _i = 0; _i < lastIdentifiers.length; _i++){
                    var _identifier = lastIdentifiers[_i];
                    var _index = getIndexByIdentifier(_identifier);
                    if (stylesInDom[_index].references === 0) {
                        stylesInDom[_index].updater();
                        stylesInDom.splice(_index, 1);
                    }
                }
                lastIdentifiers = newLastIdentifiers;
            };
        };
    /***/ },
    /* 66 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
            return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
            var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        module.exports = function cssWithMappingToString(item) {
            var _item = _slicedToArray(item, 4), content = _item[1], cssMapping = _item[3];
            if (typeof btoa === "function") {
                // eslint-disable-next-line no-undef
                var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
                var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
                var sourceMapping = "/*# ".concat(data, " */");
                var sourceURLs = cssMapping.sources.map(function(source) {
                    return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
                });
                return [
                    content
                ].concat(sourceURLs).concat([
                    sourceMapping
                ]).join("\n");
            }
            return [
                content
            ].join("\n");
        };
    /***/ },
    /* 67 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/ // css base code, injected by the css-loader
        // eslint-disable-next-line func-names
        module.exports = function(cssWithMappingToString) {
            var list = []; // return the list of modules as css string
            list.toString = function toString() {
                return this.map(function(item) {
                    var content = cssWithMappingToString(item);
                    if (item[2]) return "@media ".concat(item[2], " {").concat(content, "}");
                    return content;
                }).join("");
            }; // import a list of modules into the list
            // eslint-disable-next-line func-names
            list.i = function(modules, mediaQuery, dedupe) {
                if (typeof modules === "string") // eslint-disable-next-line no-param-reassign
                modules = [
                    [
                        null,
                        modules,
                        ""
                    ]
                ];
                var alreadyImportedModules = {};
                if (dedupe) for(var i = 0; i < this.length; i++){
                    // eslint-disable-next-line prefer-destructuring
                    var id = this[i][0];
                    if (id != null) alreadyImportedModules[id] = true;
                }
                for(var _i = 0; _i < modules.length; _i++){
                    var item = [].concat(modules[_i]);
                    if (dedupe && alreadyImportedModules[item[0]]) continue;
                    if (mediaQuery) {
                        if (!item[2]) item[2] = mediaQuery;
                        else item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                    }
                    list.push(item);
                }
            };
            return list;
        };
    /***/ },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 259 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const messages = tslib_1.__importStar(__webpack_require__(4));
        const Console_1 = tslib_1.__importDefault(__webpack_require__(260));
        __webpack_require__(275);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const react_dom_1 = tslib_1.__importDefault(__webpack_require__(26));
        const providers_1 = tslib_1.__importDefault(__webpack_require__(276));
        const provider_1 = __webpack_require__(278);
        const hooks_1 = __webpack_require__(33);
        const RootComponent = ()=>{
            const hide = hooks_1.useHide();
            const { show: showCommand  } = hooks_1.useCommandMode();
            const { show: showFind  } = hooks_1.useFindMode();
            const { show: showError  } = hooks_1.useErrorMessage();
            const { show: showInfo  } = hooks_1.useInfoMessage();
            react_1.default.useEffect(()=>{
                const onMessage = async (message)=>{
                    const msg = messages.valueOf(message);
                    switch(msg.type){
                        case messages.CONSOLE_SHOW_COMMAND:
                            showCommand(msg.command);
                            break;
                        case messages.CONSOLE_SHOW_FIND:
                            showFind();
                            break;
                        case messages.CONSOLE_SHOW_ERROR:
                            showError(msg.text);
                            break;
                        case messages.CONSOLE_SHOW_INFO:
                            showInfo(msg.text);
                            break;
                        case messages.CONSOLE_HIDE:
                            hide();
                            break;
                    }
                };
                browser.runtime.onMessage.addListener(onMessage);
                const port = browser.runtime.connect(undefined, {
                    name: "vimvixen-console"
                });
                port.onMessage.addListener(onMessage);
            }, []);
            return react_1.default.createElement(Console_1.default, null);
        };
        const App = ()=>react_1.default.createElement(provider_1.AppProvider, null, react_1.default.createElement(providers_1.default, null, react_1.default.createElement(RootComponent, null)));
        window.addEventListener("DOMContentLoaded", ()=>{
            const wrapper = document.getElementById("vimvixen-console");
            react_dom_1.default.render(react_1.default.createElement(App, null), wrapper);
        });
    /***/ },
    /* 260 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const FindPrompt_1 = tslib_1.__importDefault(__webpack_require__(261));
        const CommandPrompt_1 = tslib_1.__importDefault(__webpack_require__(263));
        const InfoMessage_1 = tslib_1.__importDefault(__webpack_require__(271));
        const ErrorMessage_1 = tslib_1.__importDefault(__webpack_require__(272));
        const hooks_1 = __webpack_require__(273);
        const hooks_2 = __webpack_require__(33);
        const Console = ()=>{
            const refreshColorScheme = hooks_1.useColorSchemeRefresh();
            const { visible: visibleCommand , initialInputValue  } = hooks_2.useCommandMode();
            const { visible: visibleFind  } = hooks_2.useFindMode();
            const { visible: visibleInfo , message: infoMessage  } = hooks_2.useInfoMessage();
            const { visible: visibleError , message: errorMessage  } = hooks_2.useErrorMessage();
            react_1.default.useEffect(()=>{
                if (visibleCommand || visibleFind || visibleInfo || visibleError) refreshColorScheme();
            }, [
                visibleCommand,
                visibleFind,
                visibleInfo,
                visibleError
            ]);
            if (visibleCommand) return react_1.default.createElement(CommandPrompt_1.default, {
                initialInputValue: initialInputValue
            });
            else if (visibleFind) return react_1.default.createElement(FindPrompt_1.default, null);
            else if (visibleInfo) return react_1.default.createElement(InfoMessage_1.default, null, infoMessage);
            else if (visibleError) return react_1.default.createElement(ErrorMessage_1.default, null, errorMessage);
            return null;
        };
        exports.default = Console;
    /***/ },
    /* 261 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const Input_1 = tslib_1.__importDefault(__webpack_require__(53));
        const styled_components_1 = tslib_1.__importDefault(__webpack_require__(5));
        const useAutoResize_1 = tslib_1.__importDefault(__webpack_require__(54));
        const hooks_1 = __webpack_require__(33);
        const ConsoleWrapper = styled_components_1.default.div`
  border-top: 1px solid gray;
`;
        const FindPrompt = ()=>{
            const [inputValue, setInputValue] = react_1.default.useState("");
            const hide = hooks_1.useHide();
            const execFind = hooks_1.useExecFind();
            const onBlur = ()=>{
                hide();
            };
            useAutoResize_1.default();
            const doEnter = (e)=>{
                e.stopPropagation();
                e.preventDefault();
                const value = e.target.value;
                execFind(value === "" ? undefined : value);
                hide();
            };
            const onKeyDown = (e)=>{
                switch(e.key){
                    case "Escape":
                        hide();
                        break;
                    case "Enter":
                        doEnter(e);
                        break;
                }
            };
            const onChange = (e)=>{
                setInputValue(e.target.value);
            };
            return react_1.default.createElement(ConsoleWrapper, null, react_1.default.createElement(Input_1.default, {
                prompt: "/",
                onBlur: onBlur,
                onKeyDown: onKeyDown,
                onChange: onChange,
                value: inputValue
            }));
        };
        exports.default = FindPrompt;
    /***/ },
    /* 262 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const messages = tslib_1.__importStar(__webpack_require__(4));
        class ConsoleFrameClient {
            async resize(width, height) {
                await browser.runtime.sendMessage({
                    type: messages.CONSOLE_RESIZE,
                    width,
                    height
                });
            }
        }
        exports.default = ConsoleFrameClient;
    /***/ },
    /* 263 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const Completion_1 = tslib_1.__importDefault(__webpack_require__(264));
        const Input_1 = tslib_1.__importDefault(__webpack_require__(53));
        const styled_components_1 = tslib_1.__importDefault(__webpack_require__(5));
        const hooks_1 = __webpack_require__(267);
        const useAutoResize_1 = tslib_1.__importDefault(__webpack_require__(54));
        const provider_1 = __webpack_require__(270);
        const hooks_2 = __webpack_require__(33);
        const COMPLETION_MAX_ITEMS = 33;
        const ConsoleWrapper = styled_components_1.default.div`
  border-top: 1px solid gray;
`;
        const CommandPromptInner = ({ initialInputValue  })=>{
            const hide = hooks_2.useHide();
            const [inputValue, setInputValue] = react_1.default.useState(initialInputValue);
            const { completions , updateCompletions  } = hooks_1.useCompletions();
            const { select , currentValue , selectNext , selectPrev  } = hooks_1.useSelectCompletion();
            const execCommand = hooks_2.useExecCommand();
            useAutoResize_1.default();
            const onBlur = ()=>{
                hide();
            };
            const isCancelKey = react_1.default.useCallback((e)=>e.key === "Escape" || e.ctrlKey && e.key === "[" || e.ctrlKey && e.key === "c", []);
            const isNextKey = react_1.default.useCallback((e)=>!e.shiftKey && e.key === "Tab" || e.ctrlKey && e.key === "n", []);
            const isPrevKey = react_1.default.useCallback((e)=>e.shiftKey && e.key === "Tab" || e.ctrlKey && e.key === "p", []);
            const isEnterKey = react_1.default.useCallback((e)=>e.key === "Enter" || e.ctrlKey && e.key === "m", []);
            const onKeyDown = (e)=>{
                if (isCancelKey(e)) hide();
                else if (isEnterKey(e)) {
                    const value = e.target.value;
                    execCommand(value);
                    hide();
                } else if (isNextKey(e)) selectNext();
                else if (isPrevKey(e)) selectPrev();
                else return;
                e.stopPropagation();
                e.preventDefault();
            };
            const onChange = (e)=>{
                const text = e.target.value;
                setInputValue(text);
            };
            react_1.default.useEffect(()=>{
                updateCompletions(inputValue);
            }, [
                inputValue
            ]);
            return react_1.default.createElement(ConsoleWrapper, null, react_1.default.createElement(Completion_1.default, {
                size: COMPLETION_MAX_ITEMS,
                completions: completions,
                select: select
            }), react_1.default.createElement(Input_1.default, {
                prompt: ":",
                onBlur: onBlur,
                onKeyDown: onKeyDown,
                onChange: onChange,
                value: select == -1 ? inputValue : currentValue
            }));
        };
        const CommandPrompt = ({ initialInputValue  })=>react_1.default.createElement(provider_1.CompletionProvider, {
                initialInputValue: initialInputValue
            }, react_1.default.createElement(CommandPromptInner, {
                initialInputValue: initialInputValue
            }));
        exports.default = CommandPrompt;
    /***/ },
    /* 264 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const CompletionItem_1 = tslib_1.__importDefault(__webpack_require__(265));
        const CompletionTitle_1 = tslib_1.__importDefault(__webpack_require__(266));
        const Completion = ({ select , size , completions  })=>{
            const [viewOffset, setViewOffset] = react_1.default.useState(0);
            const [prevSelect, setPrevSelect] = react_1.default.useState(-1);
            react_1.default.useEffect(()=>{
                if (select === prevSelect) return;
                const viewSelect = (()=>{
                    let index = 0;
                    for(let i = 0; i < completions.length; ++i){
                        ++index;
                        const g = completions[i];
                        if (select + i + 1 < index + g.items.length) return select + i + 1;
                        index += g.items.length;
                    }
                    return -1;
                })();
                const nextViewOffset = (()=>{
                    if (prevSelect < select) return Math.max(viewOffset, viewSelect - size + 1);
                    else if (prevSelect > select) return Math.min(viewOffset, viewSelect);
                    return 0;
                })();
                setPrevSelect(select);
                setViewOffset(nextViewOffset);
            }, [
                select
            ]);
            let itemIndex = 0;
            let viewIndex = 0;
            const groups = [];
            completions.forEach((group, groupIndex)=>{
                const items = [];
                const title = react_1.default.createElement(CompletionTitle_1.default, {
                    id: `title-${groupIndex}`,
                    key: `group-${groupIndex}`,
                    shown: viewOffset <= viewIndex && viewIndex < viewOffset + size,
                    title: group.name
                });
                ++viewIndex;
                for (const item of group.items){
                    items.push(react_1.default.createElement(CompletionItem_1.default, {
                        shown: viewOffset <= viewIndex && viewIndex < viewOffset + size,
                        key: `item-${itemIndex}`,
                        icon: item.icon,
                        caption: item.caption,
                        url: item.url,
                        highlight: itemIndex === select,
                        "aria-selected": itemIndex === select,
                        role: "menuitem"
                    }));
                    ++viewIndex;
                    ++itemIndex;
                }
                groups.push(react_1.default.createElement("div", {
                    key: `group-${groupIndex}`,
                    role: "group",
                    "aria-describedby": `title-${groupIndex}`
                }, title, react_1.default.createElement("ul", null, items)));
            });
            return react_1.default.createElement("div", {
                role: "menu"
            }, groups);
        };
        exports.default = Completion;
    /***/ },
    /* 265 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const styled_1 = tslib_1.__importDefault(__webpack_require__(27));
        const Container = styled_1.default.li`
  background-image: ${({ icon  })=>"url(" + icon + ")"};
  background-color: ${({ highlight , theme  })=>highlight ? theme.completionSelectedBackground : theme.completionItemBackground};
  color: ${({ highlight , theme  })=>highlight ? theme.completionSelectedForeground : theme.completionItemForeground};
  display: ${({ shown  })=>shown ? "display" : "none"};
  padding-left: 1.8rem;
  background-position: 0 center;
  background-size: contain;
  background-repeat: no-repeat;
  white-space: pre;
`;
        const Caption = styled_1.default.span`
  display: inline-block;
  width: 40%;
  text-overflow: ellipsis;
  overflow: hidden;
`;
        const Description = styled_1.default.span`
  display: inline-block;
  color: ${({ theme  })=>theme.completionItemDescriptionForeground};
  width: 60%;
  text-overflow: ellipsis;
  overflow: hidden;
`;
        const CompletionItem = (props)=>react_1.default.createElement(Container, Object.assign({
                icon: props.icon || "",
                "aria-labelledby": `completion-item-${props.caption}`
            }, props), react_1.default.createElement(Caption, {
                id: `completion-item-${props.caption}`
            }, props.caption), react_1.default.createElement(Description, null, props.url));
        exports.default = CompletionItem;
    /***/ },
    /* 266 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const styled_1 = tslib_1.__importDefault(__webpack_require__(27));
        const Li = styled_1.default.li`
  display: ${({ shown  })=>shown ? "display" : "none"};
  background-color: ${({ theme  })=>theme.completionTitleBackground};
  color: ${({ theme  })=>theme.completionTitleForeground};
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
        const CompletionTitle = (props)=>react_1.default.createElement(Li, Object.assign({}, props), props.title);
        exports.default = CompletionTitle;
    /***/ },
    /* 267 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.useSelectCompletion = exports.useCompletions = exports.getPropertyCompletions = exports.getTabCompletions = void 0;
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const actions = tslib_1.__importStar(__webpack_require__(58));
        const Command_1 = __webpack_require__(59);
        const TabFlag_1 = tslib_1.__importDefault(__webpack_require__(44));
        const context_1 = __webpack_require__(60);
        const CompletionClient_1 = tslib_1.__importDefault(__webpack_require__(268));
        const CommandLineParser_1 = tslib_1.__importStar(__webpack_require__(269));
        const CommandParser_1 = __webpack_require__(62);
        const CompletionType_1 = tslib_1.__importDefault(__webpack_require__(43));
        const commandDocs = {
            [Command_1.Command.Set]: "Set a value of the property",
            [Command_1.Command.Open]: "Open a URL or search by keywords in current tab",
            [Command_1.Command.TabOpen]: "Open a URL or search by keywords in new tab",
            [Command_1.Command.WindowOpen]: "Open a URL or search by keywords in new window",
            [Command_1.Command.Buffer]: "Select tabs by matched keywords",
            [Command_1.Command.BufferDelete]: "Close a certain tab matched by keywords",
            [Command_1.Command.BuffersDelete]: "Close all tabs matched by keywords",
            [Command_1.Command.Quit]: "Close the current tab",
            [Command_1.Command.QuitAll]: "Close all tabs",
            [Command_1.Command.AddBookmark]: "Add current page to bookmarks",
            [Command_1.Command.Help]: "Open Vim Vixen help in new tab"
        };
        const propertyDocs = {
            hintchars: "hint characters on follow mode",
            smoothscroll: "smooth scroll",
            complete: "which are completed at the open page",
            colorscheme: "color scheme of the console"
        };
        const completionClient = new CompletionClient_1.default();
        const useDelayedCallback = (callback, timeout)=>{
            const [timer, setTimer] = react_1.default.useState();
            const [enabled, setEnabled] = react_1.default.useState(false);
            const enableDelay = react_1.default.useCallback(()=>{
                setEnabled(true);
            }, [
                setEnabled
            ]);
            const delayedCallback = react_1.default.useCallback((arg1, arg2)=>{
                if (enabled) {
                    if (typeof timer !== "undefined") clearTimeout(timer);
                    const id = setTimeout(()=>{
                        callback(arg1, arg2);
                        clearTimeout(timer);
                        setTimer(undefined);
                    }, timeout);
                    setTimer(id);
                } else callback(arg1, arg2);
            }, [
                enabled,
                timer
            ]);
            return {
                enableDelay,
                delayedCallback
            };
        };
        const getCommandCompletions = async (query)=>{
            const items = Object.entries(commandDocs).filter(([name])=>name.startsWith(query)).map(([name, doc])=>({
                    caption: name,
                    content: name,
                    url: doc
                }));
            return [
                {
                    name: "Console Command",
                    items
                }, 
            ];
        };
        const getOpenCompletions = async (command, query, completionTypes)=>{
            const completions = [];
            for (const type of completionTypes)switch(type){
                case CompletionType_1.default.SearchEngines:
                    {
                        const items = await completionClient.requestSearchEngines(query);
                        if (items.length === 0) break;
                        completions.push({
                            name: "Search Engines",
                            items: items.map((key)=>({
                                    caption: key.title,
                                    content: command + " " + key.title
                                }))
                        });
                        break;
                    }
                case CompletionType_1.default.History:
                    {
                        const items1 = await completionClient.requestHistory(query);
                        if (items1.length === 0) break;
                        completions.push({
                            name: "History",
                            items: items1.map((item)=>({
                                    caption: item.title,
                                    content: command + " " + item.url,
                                    url: item.url
                                }))
                        });
                        break;
                    }
                case CompletionType_1.default.Bookmarks:
                    {
                        const items2 = await completionClient.requestBookmarks(query);
                        if (items2.length === 0) break;
                        completions.push({
                            name: "Bookmarks",
                            items: items2.map((item)=>({
                                    caption: item.title,
                                    content: command + " " + item.url,
                                    url: item.url
                                }))
                        });
                        break;
                    }
            }
            return completions;
        };
        const getTabCompletions = async (command, query, excludePinned)=>{
            const items = await completionClient.requestTabs(query, excludePinned);
            if (items.length === 0) return [];
            return [
                {
                    name: "Buffers",
                    items: items.map((item)=>({
                            content: command + " " + item.url,
                            caption: `${item.index}: ${item.flag != TabFlag_1.default.None ? item.flag : " "} ${item.title}`,
                            url: item.url,
                            icon: item.faviconUrl
                        }))
                }, 
            ];
        };
        exports.getTabCompletions = getTabCompletions;
        const getPropertyCompletions = async (command, query)=>{
            const properties = await completionClient.getProperties();
            const items = properties.map((item)=>{
                const desc = propertyDocs[item.name] || "";
                if (item.type === "boolean") return [
                    {
                        caption: item.name,
                        content: command + " " + item.name,
                        url: "Enable " + desc
                    },
                    {
                        caption: "no" + item.name,
                        content: command + " no" + item.name,
                        url: "Disable " + desc
                    }, 
                ];
                else return [
                    {
                        caption: item.name,
                        content: command + " " + item.name,
                        url: "Set " + desc
                    }, 
                ];
            }).reduce((acc, val)=>acc.concat(val), []).filter((item)=>item.caption.startsWith(query));
            return [
                {
                    name: "Properties",
                    items
                }
            ];
        };
        exports.getPropertyCompletions = getPropertyCompletions;
        const useCompletions = ()=>{
            const state = react_1.default.useContext(context_1.CompletionStateContext);
            const dispatch = react_1.default.useContext(context_1.CompletionDispatchContext);
            const commandLineParser = react_1.default.useMemo(()=>new CommandLineParser_1.default(), []);
            const updateCompletions = react_1.default.useCallback((source)=>{
                dispatch(actions.setCompletionSource(source));
            }, []);
            const initCompletion = react_1.default.useCallback((source)=>{
                completionClient.getCompletionTypes().then((completionTypes)=>{
                    dispatch(actions.initCompletion(completionTypes));
                    dispatch(actions.setCompletionSource(source));
                });
            }, []);
            const { delayedCallback: queryCompletions , enableDelay  } = useDelayedCallback(react_1.default.useCallback((text, completionTypes)=>{
                const phase = commandLineParser.inputPhase(text);
                if (phase === CommandLineParser_1.InputPhase.OnCommand) getCommandCompletions(text).then((completions)=>dispatch(actions.setCompletions(completions)));
                else {
                    let cmd = null;
                    try {
                        cmd = commandLineParser.parse(text);
                    } catch (e) {
                        if (e instanceof CommandParser_1.UnknownCommandError) return;
                    }
                    switch(cmd === null || cmd === void 0 ? void 0 : cmd.command){
                        case Command_1.Command.Open:
                        case Command_1.Command.TabOpen:
                        case Command_1.Command.WindowOpen:
                            if (!completionTypes) {
                                initCompletion(text);
                                return;
                            }
                            getOpenCompletions(cmd.command, cmd.args, completionTypes).then((completions)=>dispatch(actions.setCompletions(completions)));
                            break;
                        case Command_1.Command.Buffer:
                            exports.getTabCompletions(cmd.command, cmd.args, false).then((completions)=>dispatch(actions.setCompletions(completions)));
                            break;
                        case Command_1.Command.BufferDelete:
                        case Command_1.Command.BuffersDelete:
                            exports.getTabCompletions(cmd.command, cmd.args, true).then((completions)=>dispatch(actions.setCompletions(completions)));
                            break;
                        case Command_1.Command.BufferDeleteForce:
                        case Command_1.Command.BuffersDeleteForce:
                            exports.getTabCompletions(cmd.command, cmd.args, false).then((completions)=>dispatch(actions.setCompletions(completions)));
                            break;
                        case Command_1.Command.Set:
                            exports.getPropertyCompletions(cmd.command, cmd.args).then((completions)=>dispatch(actions.setCompletions(completions)));
                            break;
                    }
                    enableDelay();
                }
            }, [
                dispatch
            ]), 100);
            react_1.default.useEffect(()=>{
                queryCompletions(state.completionSource, state.completionTypes);
            }, [
                state.completionSource,
                state.completionTypes
            ]);
            return {
                completions: state.completions,
                updateCompletions,
                initCompletion
            };
        };
        exports.useCompletions = useCompletions;
        const useSelectCompletion = ()=>{
            const state = react_1.default.useContext(context_1.CompletionStateContext);
            const dispatch = react_1.default.useContext(context_1.CompletionDispatchContext);
            const next = react_1.default.useCallback(()=>dispatch(actions.selectNext()), [
                dispatch
            ]);
            const prev = react_1.default.useCallback(()=>dispatch(actions.selectPrev()), [
                dispatch
            ]);
            const currentValue = react_1.default.useMemo(()=>{
                var _a;
                if (state.select < 0) return state.completionSource;
                const items = state.completions.map((g)=>g.items).flat();
                return ((_a = items[state.select]) === null || _a === void 0 ? void 0 : _a.content) || "";
            }, [
                state.completionSource,
                state.select
            ]);
            return {
                select: state.select,
                currentValue,
                selectNext: next,
                selectPrev: prev
            };
        };
        exports.useSelectCompletion = useSelectCompletion;
    /***/ },
    /* 268 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const messages = tslib_1.__importStar(__webpack_require__(4));
        class CompletionClient {
            async getCompletionTypes() {
                const resp = await browser.runtime.sendMessage({
                    type: messages.CONSOLE_GET_COMPLETION_TYPES
                });
                return resp;
            }
            async requestSearchEngines(query) {
                const resp = await browser.runtime.sendMessage({
                    type: messages.CONSOLE_REQUEST_SEARCH_ENGINES_MESSAGE,
                    query
                });
                return resp;
            }
            async requestBookmarks(query) {
                const resp = await browser.runtime.sendMessage({
                    type: messages.CONSOLE_REQUEST_BOOKMARKS,
                    query
                });
                return resp;
            }
            async requestHistory(query) {
                const resp = await browser.runtime.sendMessage({
                    type: messages.CONSOLE_REQUEST_HISTORY,
                    query
                });
                return resp;
            }
            async requestTabs(query, excludePinned) {
                const resp = await browser.runtime.sendMessage({
                    type: messages.CONSOLE_REQUEST_TABS,
                    query,
                    excludePinned
                });
                return resp;
            }
            async getProperties() {
                const resp = await browser.runtime.sendMessage({
                    type: messages.CONSOLE_GET_PROPERTIES
                });
                return resp;
            }
        }
        exports.default = CompletionClient;
    /***/ },
    /* 269 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.InputPhase = void 0;
        const tslib_1 = __webpack_require__(0);
        const CommandParser_1 = tslib_1.__importDefault(__webpack_require__(62));
        var InputPhase;
        (function(InputPhase) {
            InputPhase[InputPhase["OnCommand"] = 0] = "OnCommand";
            InputPhase[InputPhase["OnArgs"] = 1] = "OnArgs";
        })(InputPhase = exports.InputPhase || (exports.InputPhase = {}));
        class CommandLineParser {
            constructor(){
                this.commandParser = new CommandParser_1.default();
            }
            inputPhase(line) {
                line = line.trimLeft();
                if (line.length == 0) return InputPhase.OnCommand;
                const command = line.split(/\s+/, 1)[0];
                if (line.length == command.length) return InputPhase.OnCommand;
                return InputPhase.OnArgs;
            }
            parse(line) {
                const trimLeft = line.trimLeft();
                const command = trimLeft.split(/\s+/, 1)[0];
                const args = trimLeft.slice(command.length).trimLeft();
                return {
                    command: this.commandParser.parse(command),
                    args: args
                };
            }
        }
        exports.default = CommandLineParser;
    /***/ },
    /* 270 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.CompletionProvider = void 0;
        const tslib_1 = __webpack_require__(0);
        const reducer_1 = tslib_1.__importStar(__webpack_require__(61));
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const context_1 = __webpack_require__(60);
        const CompletionProvider = ({ initialInputValue , children ,  })=>{
            const initialState = Object.assign(Object.assign({}, reducer_1.defaultState), {
                completionSource: initialInputValue
            });
            const [state, dispatch] = react_1.default.useReducer(reducer_1.default, initialState);
            return react_1.default.createElement(context_1.CompletionStateContext.Provider, {
                value: state
            }, react_1.default.createElement(context_1.CompletionDispatchContext.Provider, {
                value: dispatch
            }, children));
        };
        exports.CompletionProvider = CompletionProvider;
    /***/ },
    /* 271 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const styled_1 = tslib_1.__importDefault(__webpack_require__(27));
        const Wrapper = styled_1.default.p`
  border-top: 1px solid gray;
  background-color: ${({ theme  })=>theme.consoleInfoBackground};
  color: ${({ theme  })=>theme.consoleInfoForeground};
  font-weight: normal;
`;
        const InfoMessage = ({ children  })=>{
            return react_1.default.createElement(Wrapper, {
                role: "status"
            }, children);
        };
        exports.default = InfoMessage;
    /***/ },
    /* 272 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const styled_1 = tslib_1.__importDefault(__webpack_require__(27));
        const Wrapper = styled_1.default.p`
  border-top: 1px solid gray;
  background-color: ${({ theme  })=>theme.consoleErrorBackground};
  color: ${({ theme  })=>theme.consoleErrorForeground};
  font-weight: bold;
`;
        const ErrorMessage = ({ children  })=>{
            return react_1.default.createElement(Wrapper, {
                role: "alert"
            }, children);
        };
        exports.default = ErrorMessage;
    /***/ },
    /* 273 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.useColorSchemeRefresh = void 0;
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const contexts_1 = __webpack_require__(63);
        const SettingClient_1 = tslib_1.__importDefault(__webpack_require__(274));
        const useColorSchemeRefresh = ()=>{
            const update = react_1.default.useContext(contexts_1.ColorSchemeUpdateContext);
            const settingClient = new SettingClient_1.default();
            const refresh = react_1.default.useCallback(()=>{
                settingClient.getColorScheme().then((newScheme)=>{
                    update(newScheme);
                });
            }, []);
            return refresh;
        };
        exports.useColorSchemeRefresh = useColorSchemeRefresh;
    /***/ },
    /* 274 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const tslib_1 = __webpack_require__(0);
        const Settings_1 = tslib_1.__importDefault(__webpack_require__(10));
        const messages = tslib_1.__importStar(__webpack_require__(4));
        class SettingClient {
            async getColorScheme() {
                const json = await browser.runtime.sendMessage({
                    type: messages.SETTINGS_QUERY
                });
                const settings = Settings_1.default.fromJSON(json);
                return settings.properties.colorscheme;
            }
        }
        exports.default = SettingClient;
    /***/ },
    /* 275 */ /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
        var options = {};
        options.insert = "head";
        options.singleton = false;
        var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);
        /* harmony default export */ __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {};
    /***/ },
    /* 276 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ColorSchemeProvider = void 0;
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const ColorScheme_1 = tslib_1.__importDefault(__webpack_require__(11));
        const theme_1 = __webpack_require__(277);
        const contexts_1 = __webpack_require__(63);
        const styled_components_1 = __webpack_require__(5);
        const ColorSchemeProvider = ({ children  })=>{
            const [colorscheme, setColorScheme] = react_1.default.useState(ColorScheme_1.default.System);
            const theme = react_1.default.useMemo(()=>{
                if (colorscheme === ColorScheme_1.default.System) {
                    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return theme_1.DarkTheme;
                } else if (colorscheme === ColorScheme_1.default.Dark) return theme_1.DarkTheme;
                return theme_1.LightTheme;
            }, [
                colorscheme
            ]);
            return react_1.default.createElement(contexts_1.ColorSchemeContext.Provider, {
                value: colorscheme
            }, react_1.default.createElement(contexts_1.ColorSchemeUpdateContext.Provider, {
                value: setColorScheme
            }, react_1.default.createElement(styled_components_1.ThemeProvider, {
                theme: theme
            }, children)));
        };
        exports.ColorSchemeProvider = ColorSchemeProvider;
        exports.default = exports.ColorSchemeProvider;
    /***/ },
    /* 277 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.DarkTheme = exports.LightTheme = void 0;
        exports.LightTheme = {
            completionTitleBackground: "lightgray",
            completionTitleForeground: "#000000",
            completionItemBackground: "#ffffff",
            completionItemForeground: "#000000",
            completionItemDescriptionForeground: "#008000",
            completionSelectedBackground: "#ffff00",
            completionSelectedForeground: "#000000",
            commandBackground: "#ffffff",
            commandForeground: "#000000",
            consoleErrorBackground: "#ff0000",
            consoleErrorForeground: "#ffffff",
            consoleInfoBackground: "#ffffff",
            consoleInfoForeground: "#018786"
        };
        exports.DarkTheme = {
            completionTitleBackground: "#052027",
            completionTitleForeground: "white",
            completionItemBackground: "#2f474f",
            completionItemForeground: "white",
            completionItemDescriptionForeground: "#86fab0",
            completionSelectedBackground: "#eeff41",
            completionSelectedForeground: "#000000",
            commandBackground: "#052027",
            commandForeground: "white",
            consoleErrorBackground: "red",
            consoleErrorForeground: "white",
            consoleInfoBackground: "#052027",
            consoleInfoForeground: "#ffffff"
        };
    /***/ },
    /* 278 */ /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.AppProvider = void 0;
        const tslib_1 = __webpack_require__(0);
        const react_1 = tslib_1.__importDefault(__webpack_require__(1));
        const recuer_1 = tslib_1.__importStar(__webpack_require__(57));
        const contexts_1 = __webpack_require__(56);
        const AppProvider = ({ children  })=>{
            const [state, dispatch] = react_1.default.useReducer(recuer_1.default, recuer_1.defaultState);
            return react_1.default.createElement(contexts_1.AppStateContext.Provider, {
                value: state
            }, react_1.default.createElement(contexts_1.AppDispatchContext.Provider, {
                value: dispatch
            }, children));
        };
        exports.AppProvider = AppProvider;
    /***/ }
]);

//# sourceMappingURL=console.e567c3c5.js.map
