/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FullScreen = __webpack_require__(4);

var _FullScreen2 = _interopRequireDefault(_FullScreen);

var _Tab = __webpack_require__(5);

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*这是自动写入的文件，不用配置*/
exports.default = { FullScreen: _FullScreen2.default, Tab: _Tab2.default };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--0-1!../../node_modules/sass-loader/lib/loader.js??ref--0-2!./main.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--0-1!../../node_modules/sass-loader/lib/loader.js??ref--0-2!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*auto create*/
var $ = __webpack_require__(0);

var options = void 0;
var FullScreen = {
    init: init
};

function init(param) {
    options = $.extend({
        title: 'Hello DeluxSlide',
        subTitle: 'This is FirstApp'
    }, param);

    console.log(options);
}

exports.default = FullScreen;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _core = __webpack_require__(6);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*auto create*/


var $ = __webpack_require__(0);

var Tab = function (_Core) {
    _inherits(Tab, _Core);

    function Tab(options) {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, options));
    }

    _createClass(Tab, [{
        key: 'initFn',
        value: function initFn() {
            _get(Tab.prototype.__proto__ || Object.getPrototypeOf(Tab.prototype), 'initFn', this).call(this);
            if (this.Amt) {
                this.initEvent();
            } else {
                throw 'Please Check You \'amt\' tag';
            }
        }
    }, {
        key: 'initEvent',
        value: function initEvent() {
            var _this2 = this;

            // let t_h = this.Hook.tabHook;
            // let _hook = document.getElementById(t_h).querySelectorAll('li');
            // var _ = this;
            // [..._hook].forEach((val, index) => {
            //     val.addEventListener('click', _.onclick, false)
            // });
            var trigger = this.tab_title;
            this.initSet();
            $(document).on('click', trigger, function (e) {
                var $this = $(e.currentTarget);
                var index = $this.index();
                _this2.selector($this, index);
            });
        }
    }, {
        key: 'initSet',
        value: function initSet() {
            var trigger = this.tab_title;
            var content = this.tab_content;
            //li
            $(trigger).removeClass('active');
            $(trigger).eq(0).addClass('active');
            //content
            $(content).hide();
            $(content).eq(0).show();
        }
    }, {
        key: 'selector',
        value: function selector(dom, index) {
            var trigger = this.tab_title;
            $(trigger).removeClass('active');
            dom.addClass('active');
            this.selectDom(index);
        }
    }, {
        key: 'selectDom',
        value: function selectDom(index) {
            var content = this.tab_content;
            $(content).hide();
            $(content).eq(index).show();
        }
    }, {
        key: 'tab_title',
        get: function get() {
            return this.Hook.tabHook + '>li';
        }
    }, {
        key: 'tab_content',
        get: function get() {
            return this.Hook.contentHook + '>div';
        }
    }]);

    return Tab;
}(_core2.default);

exports.default = Tab;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Father
 */

var Core = function () {
    function Core(options) {
        _classCallCheck(this, Core);

        this.options = options;
        this.Amt = false;
        this.initFn();
    }

    _createClass(Core, [{
        key: "initFn",
        value: function initFn() {
            this.checkAmt();
        }
    }, {
        key: "initEvent",
        value: function initEvent() {
            return true;
        }
    }, {
        key: "checkAmt",
        value: function checkAmt() {
            var hasTagAmt = this.getDom.hasAttribute('amt');
            if (hasTagAmt) {
                this.Amt = true;
            }
        }
    }, {
        key: "getDom",
        get: function get() {
            var dom = document.getElementById(this.options.mainHook);
            return dom;
        }
    }, {
        key: "Hook",
        get: function get() {
            return {
                "mainHook": this.options.mainHook,
                "tabHook": this.options.tabHook,
                "contentHook": this.options.contentHook
            };
        }
    }]);

    return Core;
}();

exports.default = Core;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\ndl,\ndt,\ndd,\nul,\nli {\n  list-style: none; }\n\n.setFlex {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  -webkit-justigy-content: flex-start; }\n\n.active {\n  background: blueviolet;\n  color: #fff; }\n\nheader {\n  position: relative;\n  background: #459AE9; }\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  background: #459AE9; }\n\n@media (min-width: 768px) {\n  html {\n    font-size: 12px; }\n  .container {\n    width: 750px; } }\n\n@media (min-width: 1000px) {\n  html {\n    font-size: 14px; }\n  .container {\n    width: 900px; } }\n\n@media (min-width: 1200px) {\n  html {\n    font-size: 16px; }\n  .container {\n    width: 1100px; } }\n\n.navTitle {\n  line-height: 2rem;\n  padding: 10px;\n  color: #fff;\n  font-size: 1.5rem; }\n\n.topPicShow {\n  background-image: url(\"https://img.alicdn.com/imgextra/i4/786678272/TB2G_dJdutTMeFjSZFOXXaTiVXa_!!786678272.jpg\");\n  height: 37.5rem;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  filter: blur(1px); }\n\n.tabSwitch {\n  position: relative; }\n\n.tab_head {\n  position: relative; }\n\n.tab_head li {\n  display: block;\n  flex: 1;\n  padding: 5px 10px;\n  border: 1px solid #ccc; }\n", "", {"version":3,"sources":["/Users/chenfangzhong/Hunter/Galaxy/src/assets/common.scss","/Users/chenfangzhong/Hunter/Galaxy/src/assets/intro.scss","/Users/chenfangzhong/Hunter/Galaxy/src/assets/tab.scss"],"names":[],"mappings":"AAAA;EACI,UAAS;EACT,WAAU,EACb;;AAED;;;;;EAKI,iBAAgB,EACnB;;AAGD;EACI,cAAa;EACb,sBAAqB;EACrB,oBAAmB;EACnB,4BAA2B;EAC3B,oCACJ,EAAE;;AAEF;EACI,uBAAsB;EACtB,YAAW,EACd;;ACzBD;EACI,mBAAkB;EAClB,oBDWW,ECVd;;AAED;EACI,kBAAiB;EACjB,mBAAkB;EAClB,oBDKW,ECJd;;AAED;EACI;IACI,gBAAe,EAClB;EACD;IACI,aAAY,EACf,EAAA;;AAGL;EACI;IACI,gBAAe,EAClB;EACD;IACI,aAAY,EACf,EAAA;;AAGL;EACI;IACI,gBAAe,EAClB;EACD;IACI,cAAa,EAChB,EAAA;;AAGL;EACI,kBAAiB;EACjB,cAAa;EACb,YAAW;EACX,kBAAiB,EACpB;;AAED;EACI,kHAAiH;EACjH,gBAAe;EACf,6BAA4B;EAC5B,sBAAqB;EACrB,kBAAiB,EACpB;;ACnDD;EACI,mBAAkB,EACrB;;AAED;EACI,mBAAkB,EACrB;;AAED;EACI,eAAc;EACd,QAAO;EACP,kBAAiB;EACjB,uBAAsB,EACzB","file":"main.scss","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\ndl,\ndt,\ndd,\nul,\nli {\n    list-style: none;\n}\n\n$theme :#459AE9;\n.setFlex {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    -webkit-justigy-content: flex-start\n}\n\n.active {\n    background: blueviolet;\n    color: #fff;\n}","header {\n    position: relative;\n    background: $theme;\n}\n\n.container {\n    margin-left: auto;\n    margin-right: auto;\n    background: $theme;\n}\n\n@media(min-width:768px) {\n    html {\n        font-size: 12px;\n    }\n    .container {\n        width: 750px;\n    }\n}\n\n@media(min-width:1000px) {\n    html {\n        font-size: 14px;\n    }\n    .container {\n        width: 900px;\n    }\n}\n\n@media (min-width:1200px) {\n    html {\n        font-size: 16px;\n    }\n    .container {\n        width: 1100px;\n    }\n}\n\n.navTitle {\n    line-height: 2rem;\n    padding: 10px;\n    color: #fff;\n    font-size: 1.5rem;\n}\n\n.topPicShow {\n    background-image: url('https://img.alicdn.com/imgextra/i4/786678272/TB2G_dJdutTMeFjSZFOXXaTiVXa_!!786678272.jpg');\n    height: 37.5rem;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    filter: blur(1px);\n}",".tabSwitch {\n    position: relative;\n}\n\n.tab_head {\n    position: relative;\n}\n\n.tab_head li {\n    display: block;\n    flex: 1;\n    padding: 5px 10px;\n    border: 1px solid #ccc;\n}"],"sourceRoot":""}]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(2);

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.DS = _component2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ })
/******/ ]);