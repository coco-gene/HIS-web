(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-city-dropdown-nav-city-dropdown"],{"2f10":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"mpvue-picker"},[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title"},[e._v("说明 :")]),n("v-uni-view",{staticClass:"uni-helllo-text"},[n("v-uni-view",[e._v("在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听城市选择按钮的点击事件。")])],1)],1),n("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:e.themeColor,mode:e.mode,deepLength:e.deepLength,pickerValueDefault:e.pickerValueDefault,pickerValueArray:e.pickerValueArray},on:{onConfirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},onCancel:function(t){arguments[0]=t=e.$handleEvent(t),e.onCancel.apply(void 0,arguments)}}})],1)},r=[]},"7b6b":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("c8ab")),r=i(n("2471")),o={components:{mpvuePicker:a.default},data:function(){return{title:"nav-city-dropdown",pickerSingleArray:[{label:"中国",value:1},{label:"俄罗斯",value:2},{label:"美国",value:3},{label:"日本",value:4}],themeColor:"#007AFF",mode:"",deepLength:1,pickerValueDefault:[0],pickerValueArray:[]}},onReady:function(){this.setStyle(0,"北京市")},methods:{onCancel:function(e){console.log(e)},showSinglePicker:function(){this.pickerValueArray=r.default,this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},onConfirm:function(e){console.log(e.label),this.setStyle(0,e.label)},setStyle:function(e,t){var n=getCurrentPages();n[n.length-1];t.length>3&&(t=t.substr(0,3)+"..."),document.getElementsByClassName("uni-btn-icon")[1].innerText=t}},onBackPress:function(){if(this.$refs.mpvuePicker.showPicker)return this.$refs.mpvuePicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvuePicker.showPicker&&this.$refs.mpvuePicker.pickerCancel()},onNavigationBarButtonTap:function(e){0===e.index&&this.showSinglePicker()}};t.default=o},cd10:function(e,t,n){"use strict";n.r(t);var i=n("2f10"),a=n("e777");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var o,u=n("f0c5"),l=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"67134f0c",null,!1,i["a"],o);t["default"]=l.exports},e777:function(e,t,n){"use strict";n.r(t);var i=n("7b6b"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a}}]);