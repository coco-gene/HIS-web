(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-clipboard-clipboard"],{"0d17":function(t,n,a){"use strict";var i;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return i}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-title"},[t._v("请输入剪贴板内容")]),a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入剪贴板内容",value:t.data},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.dataChange.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setClipboard.apply(void 0,arguments)}}},[t._v("存储数据")]),a("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getClipboard.apply(void 0,arguments)}}},[t._v("读取数据")])],1)],1)],1)},u=[]},"17dd":function(t,n,a){"use strict";a.r(n);var i=a("0d17"),e=a("fd34");for(var u in e)"default"!==u&&function(t){a.d(n,t,(function(){return e[t]}))}(u);var o,l=a("f0c5"),c=Object(l["a"])(e["default"],i["b"],i["c"],!1,null,"f43ba522",null,!1,i["a"],o);n["default"]=c.exports},"7e6e":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"get/setClipboardData",data:""}},methods:{dataChange:function(t){this.data=t.target.value},getClipboard:function(){uni.getClipboardData({success:function(t){console.log(t.data);var n=t.data?"剪贴板内容为:"+t.data:"剪贴板暂无内容";uni.showModal({content:n,title:"读取剪贴板",showCancel:!1})},fail:function(){uni.showModal({content:"读取剪贴板失败!",showCancel:!1})}})},setClipboard:function(){var t=this.data;0===t.length?uni.showModal({title:"设置剪贴板失败",content:"内容不能为空",showCancel:!1}):uni.setClipboardData({data:t,success:function(){},fail:function(){}})}}};n.default=i},fd34:function(t,n,a){"use strict";a.r(n);var i=a("7e6e"),e=a.n(i);for(var u in i)"default"!==u&&function(t){a.d(n,t,(function(){return i[t]}))}(u);n["default"]=e.a}}]);