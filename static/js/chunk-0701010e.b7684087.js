(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0701010e"],{"035a":function(t,e,r){"use strict";r.d(e,"e",(function(){return i})),r.d(e,"c",(function(){return l})),r.d(e,"a",(function(){return n})),r.d(e,"f",(function(){return d})),r.d(e,"b",(function(){return o})),r.d(e,"d",(function(){return s})),r.d(e,"g",(function(){return c}));var a=r("b775");function i(t){return Object(a["a"])({url:"/dailySettlement/queryRecentEndDatetime",method:"get",params:{cashierId:t}})}function l(t){return Object(a["a"])({url:"/invoice/queryInvoiceInfo",method:"get",params:t})}function n(t){return Object(a["a"])({url:"/dailySettlement/dailySettle",method:"get",params:t})}function d(t){return Object(a["a"])({url:"/dailySettlement/querySettleDetailById",method:"get",params:{id:t}})}function o(t){return Object(a["a"])({url:"/dailySettlement/listDailySettleListRecord",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/invoice/queryInvoiceInfoBySettleId",method:"get",params:{settleRecordId:t}})}function c(t){return Object(a["a"])({url:"/dailySettlement/verifySettle",method:"get",params:t})}},1726:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-container",[r("el-header",{staticStyle:{padding:"0 0 0 0"}},[r("aside",{staticStyle:{margin:"0 0 0 0"}},[r("el-button",{staticStyle:{color:"black"},attrs:{disabled:""}},[t._v("门诊日结")])],1),t._v(" "),r("div",{staticStyle:{"margin-left":"30px","margin-top":"15px"}},[r("el-form",{attrs:{inline:""}},[r("el-form-item",{attrs:{label:"起始日期"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期"},model:{value:t.starttime,callback:function(e){t.starttime=e},expression:"starttime"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"截止日期"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"截止日期"},model:{value:t.endtime,callback:function(e){t.endtime=e},expression:"endtime"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.listDailySettleListRecord}},[t._v("查询")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.print}},[t._v("打印")])],1)],1)],1)]),t._v(" "),r("el-container",{staticStyle:{"margin-top":"58px","border-style":"dotted","border-width":"1px 0px 0px 0px","border-color":"#C0C0C0"}},[r("el-aside",{staticStyle:{"border-style":"dotted","border-width":"0px 1px 0px 0px","border-color":"#C0C0C0",background:"white"},attrs:{width:"25%"}},[r("el-tabs",{attrs:{value:"first"}},[r("el-tab-pane",{attrs:{label:"日结信息列表",name:"first"}},[r("el-table",{staticStyle:{"margin-top":"-15px"},attrs:{data:t.reportList,"highlight-current-row":""},on:{"row-click":t.selectreport}},[r("el-table-column",{attrs:{label:"收款员",prop:"operatorName"}}),t._v(" "),r("el-table-column",{attrs:{label:"创建时间",width:"150px",prop:"createDatetme"}}),t._v(" "),r("el-table-column",{attrs:{label:"日结状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.verifyStatus?r("el-tag",{attrs:{type:"success"}},[t._v("已核对")]):t._e(),t._v(" "),1!==e.row.verifyStatus?r("el-tag",{attrs:{type:"warning"}},[t._v("未核对")]):t._e()]}}])})],1)],1)],1)],1),t._v(" "),r("el-main",{staticStyle:{"padding-top":"0"}},[r("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{staticStyle:{"text-align":"center"},attrs:{label:"日结单",name:"first"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.printtable,expression:"printtable"}],staticStyle:{width:"1000px","text-align":"center"},attrs:{id:"table"}},[r("span",[t._v("当归云医院门诊收费日结单")]),t._v(" "),r("table",{staticStyle:{border:"#DEDEDE",padding:"1px"},attrs:{cellpadding:"5",border:"1",cellspacing:"0"}},[r("tr",[r("td",{staticStyle:{width:"200px"}},[t._v("日结时间范围")]),t._v(" "),r("td",{attrs:{colspan:"8"}},[t._v(t._s(t.reportdetail.startDatetime)+"-"+t._s(t.reportdetail.endDatetime))])]),t._v(" "),r("tr",[r("td",[t._v("报账人编号")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.cashierId))]),t._v(" "),r("td",[t._v("收款人编号")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.cashierId))]),t._v(" "),r("td",[t._v("制表时间")]),t._v(" "),r("td",{attrs:{colspan:"4"}},[t._v(t._s(t.reportdetail.createDatetime))])]),t._v(" "),r("tr",[r("td",[t._v("常规发票号")]),t._v(" "),r("td",{attrs:{colspan:"6"}},[t._v(t._s(t.reportdetail.startEndInvoiceIdStr))]),t._v(" "),r("td",{attrs:{colspan:"2"}},[t._v("共计"+t._s(t.reportdetail.invoiceNum)+"张")])]),t._v(" "),r("tr",[r("td",[t._v("冲红发票号")]),t._v(" "),r("td",{attrs:{colspan:"6"}},[t._v(t._s(t.reportdetail.rushInvoiceIdListStr))]),t._v(" "),r("td",{attrs:{colspan:"2"}},[t._v("共计"+t._s(t.reportdetail.rushInvoiceNum)+"张")])]),t._v(" "),r("tr",[r("td",[t._v("重打发票号")]),t._v(" "),r("td",{attrs:{colspan:"6"}},[t._v(t._s(t.reportdetail.reprintInvoiceIdListStr))]),t._v(" "),r("td",{attrs:{colspan:"2"}},[t._v("共计"+t._s(t.reportdetail.reprintInvoiceNum)+"张")])]),t._v(" "),r("tr",[r("td",{staticStyle:{width:"20%"}},[t._v("金额统计")]),t._v(" "),r("td",{staticStyle:{width:"10%"}},[t._v("检查金额")]),t._v(" "),r("td",{staticStyle:{width:"10%"}},[t._v(t._s(t.reportdetail.checkAmount))]),t._v(" "),r("td",{staticStyle:{width:"10%"}},[t._v("检验金额")]),t._v(" "),r("td",{staticStyle:{width:"10%"}},[t._v(t._s(t.reportdetail.testAmount))]),t._v(" "),r("td",{staticStyle:{width:"10%"}},[t._v("挂号金额")]),t._v(" "),r("td",{staticStyle:{width:"10%"}},[t._v(t._s(t.reportdetail.registrationAmount))]),t._v(" "),r("td",{staticStyle:{width:"10%"}}),t._v(" "),r("td",{staticStyle:{width:"10%"}})]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("成药金额")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.medicineAmount))]),t._v(" "),r("td",[t._v("草药金额")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.herbalAmount))]),t._v(" "),r("td",[t._v("处置金额")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.dispositionAmount))]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("缴费方式")]),t._v(" "),r("td",[t._v("医保金额")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.insuranceAmount))]),t._v(" "),r("td",[t._v("银行卡金额")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.bankCardAmount))]),t._v(" "),r("td",[t._v("支付宝金额")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.alipayAmount))]),t._v(" "),r("td",[t._v("微信金额")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.wechatAmount))])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("信用卡金额")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.creditCardAmount))]),t._v(" "),r("td",[t._v("其他金额")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.otherAmount))]),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("总金额")]),t._v(" "),r("td",[t._v(t._s(t.reportdetail.amount))]),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td")])])])]),t._v(" "),r("el-tab-pane",{attrs:{label:"发票信息",name:"second"}},[r("el-table",{attrs:{data:t.InvoiceInfoList,stripe:""}},[r("el-table-column",{attrs:{label:"发票号",prop:"invoiceNo"}}),t._v(" "),r("el-table-column",{attrs:{label:"发票金额",prop:"amount"}}),t._v(" "),r("el-table-column",{attrs:{label:"发票时间",width:"160px",prop:"createTime"}}),t._v(" "),r("el-table-column",{attrs:{label:"账单号",prop:"billId"}}),t._v(" "),r("el-table-column",{attrs:{label:"冻结状态",prop:"freezeStatus"}}),t._v(" "),r("el-table-column",{attrs:{label:"支付类型",prop:"settlementCatName"}}),t._v(" "),r("el-table-column",{attrs:{label:"收费员id",prop:"operatorId"}})],1)],1)],1)],1)],1)],1)],1)},i=[],l=(r("1bc7"),r("035a")),n=r("ed08"),d={data:function(){return{printtable:!1,reportdetail:{},InvoiceInfoList:[],reportList:[],starttime:"",endtime:"",activeName:"first",test:[{id:111,name:222},{id:111,name:222},{id:111,name:222},{id:111,name:222}]}},methods:{print:function(t){var e=document.getElementById("table"),r=e.innerHTML,a=document.body.innerHTML;return document.body.innerHTML=r,window.print(),window.location.reload(),document.body.innerHTML=a,!1},listDailySettleListRecord:function(){var t=this,e={};e.cashierId=this.$store.getters.id,e.startDatetime=Object(n["f"])(this.starttime),e.endDatetime=Object(n["f"])(this.endtime),Object(l["b"])(e).then((function(e){t.reportList=e.data,t.reportList.forEach((function(t){t.createDatetme=Object(n["f"])(t.createDatetme)}))}))},selectreport:function(t){var e=this;this.printtable=!0,Object(l["f"])(t.settleRecordId).then((function(t){e.reportdetail=t.data,e.reportdetail.startDatetime=Object(n["f"])(e.reportdetail.startDatetime),e.reportdetail.endDatetime=Object(n["f"])(e.reportdetail.endDatetime),e.reportdetail.createDatetime=Object(n["f"])(e.reportdetail.createDatetime)})),Object(l["d"])(t.settleRecordId).then((function(t){e.InvoiceInfoList=t.data,e.InvoiceInfoList.forEach((function(t){t.createTime=Object(n["f"])(t.createTime)}))}))}}},o=d,s=r("cba8"),c=Object(s["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports}}]);