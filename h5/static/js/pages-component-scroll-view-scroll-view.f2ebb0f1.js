(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-scroll-view-scroll-view"],{"0df2":function(t,i,e){"use strict";var l;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return l}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("page-head",{attrs:{title:"scroll-view,区域滚动视图"}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Vertical Scroll"),e("v-uni-text",[t._v("\\n纵向滚动")])],1),e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltoupper:function(i){arguments[0]=i=t.$handleEvent(i),t.upper.apply(void 0,arguments)},scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.lower.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"scroll-view-item uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),e("v-uni-view",{staticClass:"scroll-view-item uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),e("v-uni-view",{staticClass:"scroll-view-item uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),e("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop.apply(void 0,arguments)}}},[t._v("点击这里返回顶部")]),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Horizontal Scroll"),e("v-uni-text",[t._v("\\n横向滚动")])],1),e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"120"},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1)],1)],1)},o=[]},"393b":function(t,i,e){"use strict";e.r(i);var l=e("0df2"),n=e("df58");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("60ba");var s,c=e("f0c5"),r=Object(c["a"])(n["default"],l["b"],l["c"],!1,null,"f1d0d3b8",null,!1,l["a"],s);i["default"]=r.exports},"5d99":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l={data:function(){return{scrollTop:0,old:{scrollTop:0}}},methods:{upper:function(t){console.log(t)},lower:function(t){console.log(t)},scroll:function(t){console.log(t),this.old.scrollTop=t.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),uni.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})}}};i.default=l},"60ba":function(t,i,e){"use strict";var l=e("ea05"),n=e.n(l);n.a},a87a:function(t,i,e){var l=e("24fb");i=l(!1),i.push([t.i,".scroll-Y[data-v-f1d0d3b8]{height:%?300?%}.scroll-view_H[data-v-f1d0d3b8]{white-space:nowrap;width:100%}.scroll-view-item[data-v-f1d0d3b8]{height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}.scroll-view-item_H[data-v-f1d0d3b8]{display:inline-block;width:100%;height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}",""]),t.exports=i},df58:function(t,i,e){"use strict";e.r(i);var l=e("5d99"),n=e.n(l);for(var o in l)"default"!==o&&function(t){e.d(i,t,(function(){return l[t]}))}(o);i["default"]=n.a},ea05:function(t,i,e){var l=e("a87a");"string"===typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);var n=e("4f06").default;n("8eaec32e",l,!0,{sourceMap:!1,shadowMode:!1})}}]);