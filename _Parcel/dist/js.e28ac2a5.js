parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"8fP4":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=function(){function e(e,o){this.name=e,this.age=o}return e.prototype.sayName=function(){console.log("Hello, my name is "+this.name)},e.prototype.sayAge=function(){console.log("I'am "+this.age+" year's old")},e}();exports.default=e;
},{}],"VtDm":[function(require,module,exports) {
module.exports={button:"_button_1ijrv_1",button_green:"_button_green_1ijrv_12",button_green__rounded:"_button_green__rounded_1ijrv_14",button_normal:"_button_normal_1ijrv_16",button_normal__rounded:"_button_normal__rounded_1ijrv_18",button_red:"_button_red_1ijrv_8",button_red__rounded:"_button_red__rounded_1ijrv_10"};
},{}],"Rgmk":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r=e(require("./person"));require("../css/index.sass"),console.log("hello worlddddd"),function(){var e=function(e){return document.querySelector(e)};setInterval(function(){e("body").style.background="pink"},5e3),setInterval(function(){e("body").style.background="purple"},5e3);var t=new r.default("Brahim",41);t.sayName(),t.sayAge()}();
},{"./person":"8fP4","../css/index.sass":"VtDm"}]},{},["Rgmk"], null)
//# sourceMappingURL=/js.e28ac2a5.map