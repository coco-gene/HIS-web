(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-notice-bar-notice-bar"],{"02d4":function(e,t,n){"use strict";n.r(t);var i=n("34a6"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"1ae4":function(e,t,n){"use strict";var i=n("75f5"),o=n.n(i);o.a},2370:function(e,t,n){"use strict";n.r(t);var i=n("4967"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"34a6":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("aef7")),a={components:{uniNoticeBar:o.default},data:function(){return{}},created:function(){},methods:{getMore:function(){uni.showToast({title:"点击查看更多",icon:"none"})}}};t.default=a},"40e0":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniIcon:n("539c").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("v-uni-view",{staticClass:"uni-noticebar",style:{backgroundColor:e.backgroundColor,color:e.color},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.showClose?n("v-uni-view",{staticClass:"uni-noticebar__close"},[n("uni-icon",{attrs:{type:"closefill",size:"12"}})],1):e._e(),n("v-uni-view",{staticClass:"uni-noticebar__content",class:{"uni-noticebar--flex":e.scrollable||e.single||e.moreText}},[e.showIcon?n("v-uni-view",{staticClass:"uni-noticebar__content-icon",style:{backgroundColor:e.backgroundColor,color:e.color}},[n("uni-icon",{attrs:{color:e.color,type:"sound",size:"14"}})],1):e._e(),n("v-uni-view",{staticClass:"uni-noticebar__content-text",class:{"uni-noticebar--scrollable":e.scrollable,"uni-noticebar--single":!e.scrollable&&(e.single||e.moreText)}},[n("v-uni-view",{staticClass:"uni-noticebar__content-inner",style:{animation:e.animation,"-webkit-animation":e.animation},attrs:{id:e.elId}},[e._v(e._s(e.text))])],1),e.showGetMore?n("v-uni-view",{staticClass:"uni-noticebar__content-more",style:{width:e.moreText?"180upx":"20px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickMore.apply(void 0,arguments)}}},[e.moreText?n("v-uni-view",{staticClass:"uni-noticebar__content-more-text"},[e._v(e._s(e.moreText))]):e._e(),n("uni-icon",{attrs:{type:"arrowright",size:"14"}})],1):e._e()],1)],1):e._e()},a=[]},4967:function(e,t,n){"use strict";var i=n("4ea4");n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("539c")),a={name:"UniNoticeBar",components:{uniIcon:o.default},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},single:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},showGetMore:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1}},data:function(){var e=this.__call_hook?"uni_notice_bar":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:e,show:!0,animation:""}},watch:{text:function(e,t){var n=this;this.$nextTick((function(){setTimeout(n.setAnimation,200)}))}},mounted:function(){this.setAnimation()},methods:{clickMore:function(){this.$emit("getmore")},onClick:function(e){var t=e.touches?e.touches[0]?e.touches[0].clientX:e.changedTouches[0].clientX:e.detail.clientX;uni.upx2px(48)+12>t&&this.showClose&&(this.show=!1,this.$emit("close")),this.$emit("click")},setAnimation:function(){var e=this;this.scrollable&&uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(t){e.animation="notice ".concat(t[0].width/e.speed,"s linear infinite both")}))}}};t.default=a},"75f5":function(e,t,n){var i=n("e1d9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("1bbf81d8",i,!0,{sourceMap:!1,shadowMode:!1})},"978c":function(e,t,n){"use strict";var i=n("c5ee"),o=n.n(i);o.a},aef7:function(e,t,n){"use strict";n.r(t);var i=n("40e0"),o=n("2370");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("978c");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"7bdefe50",null,!1,i["a"],r);t["default"]=l.exports},c5ee:function(e,t,n){var i=n("fc46");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("4c36261a",i,!0,{sourceMap:!1,shadowMode:!1})},d7e4:function(e,t,n){"use strict";n.r(t);var i=n("e734"),o=n("02d4");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("1ae4");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"58e89b18",null,!1,i["a"],r);t["default"]=l.exports},e1d9:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-58e89b18]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#fff}uni-view[data-v-58e89b18]{font-size:%?28?%;line-height:inherit}.example[data-v-58e89b18]{padding:0 %?30?% %?30?%}.example-title[data-v-58e89b18]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-58e89b18]{margin:%?40?% 0}.example-body[data-v-58e89b18]{padding:0 %?40?%}body.?%PAGE?%[data-v-58e89b18]{background-color:#fff}",""]),e.exports=t},e734:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniNoticeBar:n("aef7").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"example-title"},[e._v("基本用法")]),n("uni-notice-bar",{attrs:{single:!0,text:"[单行] uni-app 1.6发布，开发一次、7端覆盖！"}}),n("uni-notice-bar",{attrs:{text:"[多行] uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}}),n("v-uni-view",{staticClass:"example-title"},[e._v("加图标")]),n("uni-notice-bar",{attrs:{single:!0,"show-icon":!0,text:"uni-app行业峰会频频亮相，开发者反响热烈!"}}),n("uni-notice-bar",{attrs:{"show-icon":!0,text:"8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。"}}),n("v-uni-view",{staticClass:"example-title"},[e._v("查看更多")]),n("uni-notice-bar",{attrs:{"show-get-more":!0,single:!0,text:"年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"},on:{getmore:function(t){arguments[0]=t=e.$handleEvent(t),e.getMore.apply(void 0,arguments)}}}),n("uni-notice-bar",{attrs:{"show-get-more":!0,"show-icon":!0,single:!0,"more-text":"查看更多",text:"年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"},on:{getmore:function(t){arguments[0]=t=e.$handleEvent(t),e.getMore.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"example-title"},[e._v("修改颜色")]),n("uni-notice-bar",{attrs:{single:!0,"more-text":"查看更多",color:"red","background-color":"#eee",text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}}),n("uni-notice-bar",{attrs:{"show-icon":!0,color:"blue",text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}}),n("v-uni-view",{staticClass:"example-title"},[e._v("关闭按钮")]),n("uni-notice-bar",{attrs:{"show-close":!0,single:!0,text:"HBuilderX 1.0正式发布！uni-app实现里程碑突破！"}}),n("uni-notice-bar",{attrs:{"show-close":!0,"show-icon":!0,"more-text":"查看更多",text:"HBuilderX 1.0正式发布！uni-app实现里程碑突破！"}}),n("uni-notice-bar",{attrs:{"show-close":!0,"show-icon":!0,text:"uni-app 1.6发布，开发一次、7端覆盖！"}}),n("uni-notice-bar",{attrs:{"show-close":!0,"show-icon":!0,single:!0,text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}})],1)},a=[]},fc46:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-noticebar[data-v-7bdefe50]{padding:%?12?% %?24?%;font-size:%?24?%;line-height:1.5;margin-bottom:%?20?%;display:flex;flex-direction:row;justify-content:center;align-items:center;justify-content:left}.uni-noticebar__close[data-v-7bdefe50]{color:#999;margin-right:%?24?%;display:flex;flex-direction:row;justify-content:center;align-items:center}.uni-noticebar__content[data-v-7bdefe50]{flex:1;overflow:hidden}.uni-noticebar__content.uni-noticebar--flex[data-v-7bdefe50]{flex:1;display:flex;flex-direction:row}.uni-noticebar__content-icon[data-v-7bdefe50]{display:inline-block;z-index:1;padding-right:%?12?%}.uni-noticebar__content-more[data-v-7bdefe50]{width:%?180?%;display:flex;flex-direction:row;justify-content:center;align-items:center;justify-content:flex-end;word-break:keep-all;margin-left:%?10?%;color:#999}.uni-noticebar__content-more-text[data-v-7bdefe50]{font-size:%?24?%;white-space:nowrap}.uni-noticebar__content-text[data-v-7bdefe50]{word-break:break-all;line-height:1.5;display:inline}.uni-noticebar__content-text.uni-noticebar--single[data-v-7bdefe50]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.uni-noticebar__content-text.uni-noticebar--scrollable[data-v-7bdefe50]{flex:1;display:block;overflow:hidden}.uni-noticebar__content-text.uni-noticebar--scrollable .uni-noticebar__content-inner[data-v-7bdefe50]{padding-left:100%;white-space:nowrap;display:inline-block;-webkit-transform:translateZ(0);transform:translateZ(0)}.uni-noticebar__content-inner[data-v-7bdefe50]{font-size:%?24?%;display:inline}@-webkit-keyframes notice-data-v-7bdefe50{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-7bdefe50{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}",""]),e.exports=t}}]);