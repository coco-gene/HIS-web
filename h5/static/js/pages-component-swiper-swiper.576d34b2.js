(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-swiper-swiper"],{"06aa":function(t,i,a){"use strict";var n=a("e40a"),e=a.n(n);e.a},1889:function(t,i,a){"use strict";a.r(i);var n=a("d6f3"),e=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);i["default"]=e.a},a2b1:function(t,i,a){"use strict";a.r(i);var n=a("b1c3"),e=a("1889");for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);a("06aa");var u,o=a("f0c5"),r=Object(o["a"])(e["default"],n["b"],n["c"],!1,null,"9a4b0032",null,!1,n["a"],u);i["default"]=r.exports},b1c3:function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("page-head",{attrs:{title:"swiper,可滑动视图"}}),a("v-uni-view",{staticClass:"uni-margin-wrap"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},[a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[t._v("A")])],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-green"},[t._v("B")])],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-blue"},[t._v("C")])],1)],1)],1),a("v-uni-view",{staticClass:"swiper-list"},[a("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",{staticClass:"uni-list-cell-db"},[t._v("指示点")]),a("v-uni-switch",{attrs:{checked:t.indicatorDots},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.changeIndicatorDots.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",{staticClass:"uni-list-cell-db"},[t._v("自动播放")]),a("v-uni-switch",{attrs:{checked:t.autoplay},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.changeAutoplay.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-text",[t._v("幻灯片切换时长(ms)")]),a("v-uni-text",{staticClass:"info"},[t._v(t._s(t.duration))])],1),a("v-uni-slider",{attrs:{value:t.duration,min:"500",max:"2000"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.durationChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-text",[t._v("自动播放间隔时长(ms)")]),a("v-uni-text",{staticClass:"info"},[t._v(t._s(t.interval))])],1),a("v-uni-slider",{attrs:{value:t.interval,min:"2000",max:"10000"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.intervalChange.apply(void 0,arguments)}}})],1)],1)},s=[]},cd50:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,".uni-margin-wrap[data-v-9a4b0032]{width:%?690?%;margin:0 %?30?%}.swiper[data-v-9a4b0032]{height:%?300?%}.swiper-item[data-v-9a4b0032]{display:block;height:%?300?%;line-height:%?300?%;text-align:center}.swiper-list[data-v-9a4b0032]{margin-top:%?40?%;margin-bottom:0}.uni-common-mt[data-v-9a4b0032]{margin-top:%?60?%;position:relative}.info[data-v-9a4b0032]{position:absolute;right:%?20?%}",""]),t.exports=i},d6f3:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}}};i.default=n},e40a:function(t,i,a){var n=a("cd50");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("43185847",n,!0,{sourceMap:!1,shadowMode:!1})}}]);