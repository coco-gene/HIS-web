(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-node-info-get-node-info"],{"28f8":function(t,e,n){"use strict";n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"createSelectorQuery",top:0,left:"0px",info:[]}},onReady:function(){this.getNodeInfo()},methods:{setPosition:function(){this.left=Math.random()*uni.upx2px(320)+"px",this.top=Math.random()*uni.upx2px(320)+"px",this.getNodeInfo()},getNodeInfo:function(){var t=this;uni.createSelectorQuery().select(".target").boundingClientRect().exec((function(e){var n=e[0];if(n){var i=[];for(var a in n)"id"!==a&&"dataset"!==a&&i.push({key:a,val:n[a]});t.info=i}}))}}};e.default=i},"68b4":function(t,e,n){"use strict";n.r(e);var i=n("faa3"),a=n("a000");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("96d0");var f,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"39f233ef",null,!1,i["a"],f);e["default"]=c.exports},"96d0":function(t,e,n){"use strict";var i=n("f2d9"),a=n.n(i);a.a},a000:function(t,e,n){"use strict";n.r(e);var i=n("28f8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e6ad:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".movable[data-v-39f233ef]{display:flex;justify-content:center}.block[data-v-39f233ef]{height:%?400?%;width:%?400?%;background-color:#fff;border:1px solid #ccc;position:relative;margin:0 auto;margin-bottom:%?30?%}uni-movable-area[data-v-39f233ef]{height:%?400?%;width:%?400?%;position:relative}.target[data-v-39f233ef]{height:%?80?%;width:%?80?%;line-height:%?80?%;text-align:center;color:#fff;background-color:#4cd964;font-size:%?28?%;position:absolute}.info[data-v-39f233ef]{display:flex;flex-direction:column;justify-content:center;align-items:center}.b[data-v-39f233ef]{font-weight:700;width:%?150?%;display:inline-block}.span[data-v-39f233ef]{width:%?100?%;display:inline-block}",""]),t.exports=e},f2d9:function(t,e,n){var i=n("e6ad");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8b1c6cf4",i,!0,{sourceMap:!1,shadowMode:!1})},faa3:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"movable block"},[n("v-uni-movable-area",[n("v-uni-movable-view",{staticClass:"target",attrs:{direction:"all"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.getNodeInfo.apply(void 0,arguments)}}},[t._v("Drag")])],1)],1),n("v-uni-view",{staticClass:"movable"},[n("v-uni-view",{staticClass:"info"},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i},[n("v-uni-text",{staticClass:"b"},[t._v(t._s(e.key))]),n("v-uni-text",{staticClass:"span"},[t._v(t._s(e.val))])],1)})),1)],1)],1)],1)},o=[]}}]);