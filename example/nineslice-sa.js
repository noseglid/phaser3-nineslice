!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NineSlice=e():t.NineSlice=e()}(window,function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),o=function(t){var e=t;if("number"==typeof e.sourceLayout.width){var r=e.sourceLayout,i=r.width,o=r.height;e.sourceLayout={topLeft:{width:i,height:o}}}var n=e.sourceLayout;n.topRight=n.topRight||n.topLeft,n.bottomRight=n.bottomRight||n.topLeft,n.bottomLeft=n.bottomLeft||n.topLeft;var a=Math.max(n.topLeft.height,n.topRight.height),s=Math.max(n.topRight.width,n.bottomRight.width),h=Math.max(n.bottomLeft.height,n.bottomRight.height),u=Math.max(n.topLeft.width,n.bottomLeft.width);if(e.safeOffsets||(e.safeOffsets={top:a,right:s,bottom:h,left:u}),void 0===e.minSizing||!1!==e.minSizing){var l=e.safeOffsets;e.minSizing={width:l?Math.max(l.left+l.right,u+s):u+s,height:l?Math.max(l.top+l.bottom,a+h):a+h}}else e.minSizing=!1;return e},n=function(t){return{tl:{x:t.topLeft.width,y:t.topLeft.height},tr:{x:t.topRight.width,y:t.topRight.height},bl:{x:t.bottomLeft.width,y:t.bottomLeft.height},br:{x:t.bottomRight.width,y:t.bottomRight.height}}},a="__BASE",s="__MISSING",h=e.EVENTS={UPDATE_SAFE_BOUNDS:"updatesafebounds"},u=function(t){function e(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,0,0,32,32));n.initFrames=n.initFrames.bind(n),n.getUsableBounds=n.getUsableBounds.bind(n),n.drawFrames=n.drawFrames.bind(n),n.resize=n.resize.bind(n),n.updateSafeBounds=n.updateSafeBounds.bind(n),n.enableDebugDraw=n.enableDebugDraw.bind(n),n.events=new Phaser.Events.EventEmitter,n.sliceConfig=o(r),n._safeBounds=new Phaser.Geom.Rectangle;var h=n.sliceConfig,u=h.sourceKey,l=h.sourceFrame;if(n.sourceTex=t.sys.textures.get(n.sliceConfig.sourceKey),!u)throw new Error("NineSlice requires a texture sourceKey to be specified.");if(!n.sourceTex||n.sourceTex.key===s)throw new Error("Expected source image "+u+" not found.");var f=l||a;n.sourceFrame=n.sourceTex.get(f),n.initFrames(),n._initalized=!0;var c=i.x,d=i.y,y=i.width,b=i.height;return n.setPosition(c||0,d||0),n.resize(y||n.sourceFrame.width,b||n.sourceFrame.height),n.updateSafeBounds(),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.GameObjects.RenderTexture),i(e,[{key:"updateSafeBounds",value:function(){if(this._initalized){var t=this.sliceConfig.safeOffsets,e=t.top,r=t.right,i=t.bottom,o=t.left,n=this.x+o,a=this.y+e,s=this.width-(o+r),u=this.height-(e+i),l=this._safeBounds,f=l.x,c=l.y,d=l.width,y=l.height;n===f&&a===c&&s===d&&u===y||(this._safeBounds.setTo(this.x+o,this.y+e,this.width-(o+r),this.height-(e+i)),this.events.emit(h.UPDATE_SAFE_BOUNDS,this,this._safeBounds)),this._g&&(this._g.lineStyle(1,65280),this._g.strokeRectShape(this._safeBounds))}}},{key:"resize",value:function(t,r){var i=(this.sliceConfig||{}).minSizing,o=i?Math.max(i.height,r):r,n=i?Math.max(i.width,t):t;if(o>r||n>t){var a="Attempted to set NineSlice size less than minimum ("+t+"x"+r+").";console.error(a)}(function t(e,r,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var n=Object.getPrototypeOf(e);return null===n?void 0:t(n,r,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"resize",this).call(this,n,o),this._initalized&&(this._g&&this._g.clear(),this.drawFrames(),this.updateSafeBounds())}},{key:"initFrames",value:function(){var t=this.sourceTex,e=this.sourceFrame.width,r=this.sourceFrame.height,i=this.sourceFrame.x,o=this.sourceFrame.y,a=function(e,r,n,a,s){t.has(e)||t.add(e,0,i+r,o+n,a,s)},s=n(this.sliceConfig.sourceLayout);a("topLeft",0,0,s.tl.x,s.tl.y),a("topRight",e-s.tr.x,0,s.tr.x,s.tr.y),a("bottomRight",e-s.br.x,r-s.br.y,s.br.x,s.br.y),a("bottomLeft",0,r-s.bl.y,s.bl.x,s.bl.y),a("topMiddle",s.tl.x,0,e-(s.tl.x+s.tr.x),Math.max(s.tl.y,s.tr.y)),a("bottomMiddle",s.bl.x,r-Math.max(s.bl.y,s.br.y),e-(s.bl.x+s.br.x),Math.max(s.bl.y,s.br.y)),a("leftMiddle",0,s.tl.y,Math.max(s.tl.x,s.bl.x),r-(s.tl.y+s.bl.y)),a("rightMiddle",e-Math.max(s.tr.x,s.br.x),s.tr.y,Math.max(s.tr.x,s.br.x),r-s.tr.y-s.br.y);var h=Math.min(s.tl.x,s.bl.x),u=Math.min(s.tl.y,s.tr.y);a("center",h,u,e-h-Math.min(s.tr.x,s.br.x),r-u-Math.min(s.br.y,s.bl.y))}},{key:"getUsableBounds",value:function(){return this._initalized?this._safeBounds:null}},{key:"drawFrames",value:function(){var t=this;if(this._initalized){this._g&&this._g.lineStyle(1,16711680);var e=n(this.sliceConfig.sourceLayout),r=this.sourceTex.frames,i=function(e,r,i,o,n){if(o>0&&n>0){t._g&&t._g.strokeRect(t.x+r,t.y+i,o,n),t.save(),t.translate(r,i);var a=o/e.width,s=n/e.height;t.scale(a,s),t.draw(t.sourceTex,e,0,0),t.restore()}},o=Math.min(e.tl.x,e.bl.x),a=Math.min(e.tr.x,e.br.x),s=Math.min(e.tl.y,e.tr.y),h=Math.min(e.bl.y,e.br.y);this.clear(),i(r.center,o,s,this.width-o-a,this.height-s-h),i(r.topMiddle,e.tl.x,0,this.width-e.tl.x-e.tr.x,r.topMiddle.height),i(r.bottomMiddle,e.bl.x,this.height-r.bottomMiddle.height,this.width-e.bl.x-e.br.x,r.bottomMiddle.height),i(r.leftMiddle,0,e.tl.y,r.leftMiddle.width,this.height-e.tl.y-e.bl.y),i(r.rightMiddle,this.width-e.tr.x,e.tr.y,r.rightMiddle.width,this.height-e.tr.y-e.br.y),i(r.topLeft,0,0,e.tl.x,e.tl.y),i(r.topRight,this.width-e.tr.x,0,e.tr.x,e.tr.y),i(r.bottomRight,this.width-e.br.x,this.height-e.br.y,e.br.x,e.br.y),i(r.bottomLeft,0,this.height-e.bl.y,e.bl.x,e.bl.y)}}},{key:"enableDebugDraw",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._g&&this._g.clear(),this._g=t?this.scene.add.graphics(this.x,this.y):null,this.drawFrames(),this.updateSafeBounds()}},{key:"y",get:function(){return this._y},set:function(t){this._y!==t&&(this._g&&(this._g.clear(),this.drawFrames()),this._y=t,this.updateSafeBounds())}},{key:"x",get:function(){return this._x},set:function(t){this._x!==t&&(this._g&&(this._g.clear(),this.drawFrames()),this._x=t,this.updateSafeBounds())}}]),e}();e.default=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){switch(t.length){case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];case 4:return t}throw new Error("Received ${arr.length} offset values, expected 1 to 4.")}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],i=!0,o=!1,n=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);i=!0);}catch(t){o=!0,n=t}finally{try{!i&&s.return&&s.return()}finally{if(o)throw n}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),a=h(r(0)),s=h(r(1));function h(t){return t&&t.__esModule?t:{default:t}}var u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return t.registerGameObject("nineslice",r.addNineSlice,r.makeNineSlice),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.Plugins.BasePlugin),n(e,[{key:"addNineSlice",value:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var i=l(this.scene,e);return this.displayList.add(i),i}},{key:"makeNineSlice",value:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return l(this.scene,e)}}]),e}();e.default=u;var l=function(t,e){if(2===e.length)return new a.default(t,e[0],e[1]);if(e.length<6)throw new Error("Expected at least 6 arguments to NineSlice creator, received "+e.length+".");e.length>7&&console.error("Expected less than 7 arguments for NineSlice creation, received "+e.length+".");var r=o(e,6),n=r[0],h=r[1],u=r[2],l=r[3],f=r[4],c=r[5],d={},y={x:n,y:h,width:u,height:l};if("string"==typeof f)d.sourceKey=f;else{var b=f.key,g=f.frame;d.sourceKey=b,"string"!=typeof g&&"number"!=typeof g||(d.sourceFrame=f.frame)}if("number"==typeof c)d.sourceLayout={width:c,height:c};else if(Array.isArray(c)){var p=(0,s.default)(c),m=o(p,4),x=m[0],v=m[1],w=m[2],_=m[3];d.sourceLayout={topLeft:{width:_,height:x},topRight:{width:v,height:x},bottomRight:{width:v,height:w},bottomLeft:{width:_,height:w}}}else d.sourceLayout=c;if(e.length>6)if("number"==typeof e[6]){var S=e[6];d.safeOffsets={top:S,right:S,bottom:S,left:S}}else{if(!Array.isArray(e[6]))throw new Error("Expected argument number or array for argument 7, got "+i(e[6])+".");var M=(0,s.default)(e[6]),O=o(M,4),E=O[0],L=O[1],P=O[2],j=O[3];d.safeOffsets={top:E,right:L,bottom:P,left:j}}return new a.default(t,d,y)},f={key:"NineSlice",plugin:u,start:!0};u.DefaultCfg=f},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Plugin=e.NineSlice=e.EVENTS=void 0;var i=r(0),o=a(i),n=a(r(2));function a(t){return t&&t.__esModule?t:{default:t}}e.EVENTS=i.EVENTS,e.NineSlice=o.default,e.Plugin=n.default},function(t,e,r){t.exports=r(3)}])});