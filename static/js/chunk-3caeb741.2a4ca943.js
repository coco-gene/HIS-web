(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3caeb741"],{"0e8f":function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o})),i.d(e,"e",(function(){return l}));var a=i("b775");function n(t){return Object(a["a"])({url:"/dept/select",method:"post",params:{pageSize:t.limit,pageNum:t.page},data:t})}function r(){return Object(a["a"])({url:"/dept/selectAll",method:"get"})}function s(t){return Object(a["a"])({url:"/dept/create",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/dept/delete",method:"post",params:{ids:t}})}function l(t){return Object(a["a"])({url:"/dept/update/"+t.id,method:"post",data:t})}},"50fc":function(t,e,i){"use strict";i.d(e,"g",(function(){return n})),i.d(e,"e",(function(){return r})),i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"i",(function(){return l})),i.d(e,"h",(function(){return d})),i.d(e,"f",(function(){return c})),i.d(e,"b",(function(){return u})),i.d(e,"d",(function(){return m})),i.d(e,"j",(function(){return p}));i("a450");var a=i("b775");function n(t){return Object(a["a"])({url:"/registerRank/select",method:"post",params:{code:t.code,name:t.name,price:t.price,seqNo:t.seqNo,status:t.status,pageSize:t.limit,pageNum:t.page}})}function r(){return Object(a["a"])({url:"/registerRank/selectAll",method:"get"})}function s(t){return Object(a["a"])({url:"/registerRank/create",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/registerRank/delete",method:"post",params:{ids:t}})}function l(t){return Object(a["a"])({url:"/registerRank/update/"+t.id,method:"post",data:t})}function d(t){return Object(a["a"])({url:"/settleCat/select",method:"post",params:{id:t.id,name:t.name,pageSize:t.limit,pageNum:t.page}})}function c(){return Object(a["a"])({url:"/settleCat/selectAll",method:"get"})}function u(t){return Object(a["a"])({url:"/settleCat/create",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/settleCat/delete",method:"post",params:{ids:t}})}function p(t){return Object(a["a"])({url:"/settleCat/update/"+t.id,method:"post",data:t})}},"9c62":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("aside",[i("span",{staticStyle:{"font-family":"'微软雅黑'","font-size":"14px"}},[t._v("门诊挂号")]),t._v(" "),i("el-input",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"filter-item",staticStyle:{width:"200px","margin-left":"30px"},attrs:{size:"mini",placeholder:"发票号"},model:{value:t.dmsRegistrationParam.invoiceNo,callback:function(e){t.$set(t.dmsRegistrationParam,"invoiceNo",e)},expression:"dmsRegistrationParam.invoiceNo"}}),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],attrs:{size:"mini"}},[t._v("更新发票号")]),t._v(" "),i("el-input",{directives:[{name:"show",rawName:"v-show",value:t.dialogFormVisible||t.refundVisible,expression:"dialogFormVisible||refundVisible"}],staticClass:"filter-item",staticStyle:{width:"200px","margin-left":"30px"},attrs:{size:"mini",placeholder:"发票号"},model:{value:t.invoiceNo,callback:function(e){t.invoiceNo=e},expression:"invoiceNo"}}),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.dialogFormVisible,expression:"dialogFormVisible"}],attrs:{size:"mini"}},[t._v("更新发票号")]),t._v(" "),i("el-button",{staticStyle:{float:"right","margin-left":"20px"},attrs:{type:"text",size:"medium"},on:{click:t.reprint}},[i("i",{staticClass:"el-icon-circle-plus"}),t._v("重打")]),t._v(" "),i("el-button",{staticStyle:{float:"right","margin-left":"20px"},attrs:{type:"text",size:"medium"},on:{click:t.selectPatientByIdNo}},[i("i",{staticClass:"el-icon-upload"}),t._v("读卡")]),t._v(" "),i("el-button",{staticStyle:{float:"right","margin-left":"20px"},attrs:{type:"text",size:"medium"},on:{click:t.guahao}},[i("i",{staticClass:"el-icon-circle-plus"}),t._v("挂号")])],1),t._v(" "),i("div",[i("transition",{attrs:{name:".el-fade-in-linear"}},[t.isshow?i("el-form",{staticClass:"demo-form-inline",staticStyle:{padding:"0 0 0 100px","border-style":"solid","border-width":"0px 0px 1px 0px","border-color":"#C0C0C0"},attrs:{"label-position":"left",model:t.dmsRegistrationParam,"label-width":"68px",inline:!0}},[i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"身份证号"}},[i("el-input",{attrs:{placeholder:"身份证号"},model:{value:t.dmsRegistrationParam.identificationNo,callback:function(e){t.$set(t.dmsRegistrationParam,"identificationNo",e)},expression:"dmsRegistrationParam.identificationNo"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{inline:!0,label:"姓名"}},[i("el-input",{attrs:{placeholder:"姓名"},model:{value:t.dmsRegistrationParam.name,callback:function(e){t.$set(t.dmsRegistrationParam,"name",e)},expression:"dmsRegistrationParam.name"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"出生日期"}},[i("el-date-picker",{staticStyle:{width:"180px"},attrs:{align:"right",type:"date",placeholder:"选择日期"},on:{change:t.chooseRegister},model:{value:t.dmsRegistrationParam.dateOfBirth,callback:function(e){t.$set(t.dmsRegistrationParam,"dateOfBirth",e)},expression:"dmsRegistrationParam.dateOfBirth"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"性别"}},[i("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"性别"},model:{value:t.dmsRegistrationParam.gender,callback:function(e){t.$set(t.dmsRegistrationParam,"gender",e)},expression:"dmsRegistrationParam.gender"}},t._l([{label:"男",value:0},{label:"女",value:1}],(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"家庭住址"}},[i("el-input",{attrs:{placeholder:"家庭住址"},model:{value:t.dmsRegistrationParam.homeAddress,callback:function(e){t.$set(t.dmsRegistrationParam,"homeAddress",e)},expression:"dmsRegistrationParam.homeAddress"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"联系方式"}},[i("el-input",{attrs:{placeholder:"联系方式"},model:{value:t.dmsRegistrationParam.phoneNo,callback:function(e){t.$set(t.dmsRegistrationParam,"phoneNo",e)},expression:"dmsRegistrationParam.phoneNo"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"挂号科室"}},[i("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"挂号科室",filterable:""},on:{change:t.chooseRegister},model:{value:t.dmsRegistrationParam.deptId,callback:function(e){t.$set(t.dmsRegistrationParam,"deptId",e)},expression:"dmsRegistrationParam.deptId"}},t._l(t.alldept,(function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"挂号级别"}},[i("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"挂号级别",filterable:""},on:{change:t.chooseRegister},model:{value:t.dmsRegistrationParam.RegisterRnak,callback:function(e){t.$set(t.dmsRegistrationParam,"RegisterRnak",e)},expression:"dmsRegistrationParam.RegisterRnak"}},t._l(t.RegisterRank,(function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"挂号日期"}},[i("el-date-picker",{staticStyle:{width:"180px"},attrs:{align:"right",type:"date",placeholder:"选择日期"},on:{change:t.chooseRegister},model:{value:t.dmsRegistrationParam.attendanceDate,callback:function(e){t.$set(t.dmsRegistrationParam,"attendanceDate",e)},expression:"dmsRegistrationParam.attendanceDate"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"午别"}},[i("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"默认",disabled:t.regdisabled},on:{change:t.choosenoon},model:{value:t.dmsRegistrationParam.noon,callback:function(e){t.$set(t.dmsRegistrationParam,"noon",e)},expression:"dmsRegistrationParam.noon"}},[i("el-option",{attrs:{label:"上午",value:"0"}}),t._v(" "),i("el-option",{attrs:{label:"下午",value:"1"}})],1)],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"看诊医生"}},[i("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"默认",disabled:t.regdisabled2},model:{value:t.dmsRegistrationParam.skdId,callback:function(e){t.$set(t.dmsRegistrationParam,"skdId",e)},expression:"dmsRegistrationParam.skdId"}},t._l(t.doctList,(function(t){return i("el-option",{key:t.skdId,attrs:{label:t.name,value:t.skdId}})})),1)],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"应收金额"}},[i("el-input",{staticStyle:{width:"180px",color:"black"},attrs:{placeholder:"应收金额",disabled:""},model:{value:t.dmsRegistrationParam.amount,callback:function(e){t.$set(t.dmsRegistrationParam,"amount",e)},expression:"dmsRegistrationParam.amount"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"支付方式"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择支付方式"},model:{value:t.dmsRegistrationParam.settlementCatId,callback:function(e){t.$set(t.dmsRegistrationParam,"settlementCatId",e)},expression:"dmsRegistrationParam.settlementCatId"}},t._l(t.paytype,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),i("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"病历本"}},[i("el-radio",{attrs:{label:"1"},on:{change:t.changeradio1},model:{value:t.dmsRegistrationParam.needBook,callback:function(e){t.$set(t.dmsRegistrationParam,"needBook",e)},expression:"dmsRegistrationParam.needBook"}},[t._v("是")]),t._v(" "),i("el-radio",{attrs:{label:"0"},on:{change:t.changeradio2},model:{value:t.dmsRegistrationParam.needBook,callback:function(e){t.$set(t.dmsRegistrationParam,"needBook",e)},expression:"dmsRegistrationParam.needBook"}},[t._v("否")])],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-left":"940px"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.createRegistration}},[t._v("挂号&打印发票")])],1)],1):t._e()],1)],1),t._v(" "),t.dialogFormVisible||t.isshow||t.refundVisible?t._e():i("div",[i("el-button",{staticStyle:{"margin-left":"20px","font-family":"'微软雅黑'","font-size":"14px",color:"black"},attrs:{disabled:""}},[t._v("挂号信息列表")]),t._v(" "),i("el-input",{staticStyle:{"margin-left":"20px",width:"180px"},attrs:{placeholder:"病历号/姓名"},model:{value:t.queryRegister.medicalRecordNo,callback:function(e){t.$set(t.queryRegister,"medicalRecordNo",e)},expression:"queryRegister.medicalRecordNo"}}),t._v(" "),i("el-button",{on:{click:t.listRegisteredPatient}},[i("svg-icon",{attrs:{"icon-class":"search"}})],1),t._v(" "),i("el-button",{staticStyle:{float:"right","margin-right":"30px"},attrs:{type:"text",size:"medium"},on:{click:t.refresh}},[i("i",{staticClass:"el-icon-refresh"}),t._v("刷新")]),t._v(" "),i("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{border:"",data:t.RegisterList.filter((function(e){return!t.queryRegister.medicalRecordNo||e.patientName.toLowerCase().includes(t.queryRegister.medicalRecordNo.toLowerCase())||e.medicalRecordNo.toLowerCase().includes(t.queryRegister.medicalRecordNo.toLowerCase())})),"highlight-current-row":"",height:"400"}},[i("el-table-column",{attrs:{fixed:"left",label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"==e.row.registrationStatus?i("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(i){return t.tuihao(e.row)}}},[t._v("退号")]):t._e(),t._v(" "),"1"==e.row.registrationStatus?i("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(i){return t.supprint(e.row)}}},[t._v("补打")]):t._e(),t._v(" "),"2"==e.row.registrationStatus?i("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(i){return t.handlepay(e.row)}}},[t._v("缴费")]):t._e(),t._v(" "),"2"==e.row.registrationStatus?i("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(i){return t.refundRegistrationCharge(e.row)}}},[t._v("退费")]):t._e(),t._v(" "),"0"==e.row.registrationStatus?i("el-button",{attrs:{plain:"",size:"mini"}},[t._v("退号")]):t._e(),t._v(" "),"4"==e.row.registrationStatus?i("el-button",{attrs:{plain:"",size:"mini",disabled:""}},[t._v("无")]):t._e(),t._v(" "),"3"==e.row.registrationStatus?i("el-button",{attrs:{plain:"",size:"mini",disabled:""}},[t._v("无")]):t._e()]}}],null,!1,1560876178)}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"状态",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.registrationStatus?i("el-tag",{attrs:{type:"primary"}},[t._v("未看诊")]):t._e(),t._v(" "),4===e.row.registrationStatus?i("el-tag",{attrs:{type:"danger"}},[t._v("已退号")]):t._e(),t._v(" "),2===e.row.registrationStatus?i("el-tag",{attrs:{type:"warning"}},[t._v("待收费")]):t._e(),t._v(" "),3===e.row.registrationStatus?i("el-tag",{attrs:{type:"success"}},[t._v("诊毕")]):t._e()]}}],null,!1,1251872305)}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"病历号",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.medicalRecordNo))])]}}],null,!1,1894085601)}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.patientName))])]}}],null,!1,1034669202)}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"性别",width:"70px"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.patientGender?i("span",[t._v("男")]):t._e(),t._v(" "),1===e.row.patientGender?i("span",[t._v("女")]):t._e()]}}],null,!1,708896341)}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"出生日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.patientDateOfBirth))])]}}],null,!1,3037926605)}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"看诊日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.attendanceDate))])]}}],null,!1,591156021)}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"看诊科目"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.deptName))])]}}],null,!1,742497572)})],1)],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogFormVisible&&!t.refundVisible,expression:"dialogFormVisible&&!refundVisible"}],staticStyle:{"text-align":"center"}},[i("el-form",{attrs:{model:t.onepatient,"label-width":"80px","label-position":"left",inline:!0}},[i("el-form-item",{attrs:{label:"病历号",prop:"id","label-width":"60px"}},[i("el-tag",{staticStyle:{width:"200px"},attrs:{type:"info",size:"large",placeholder:"病历号"}},[t._v(t._s(t.onepatient.medicalRecordNo))])],1),t._v(" "),i("el-form-item",{attrs:{label:"患者姓名",prop:"name","label-width":"70px"}},[i("el-tag",{staticStyle:{width:"140px"},attrs:{type:"info",size:"large",placeholder:"病历号"}},[t._v(t._s(t.onepatient.patientName))])],1),t._v(" "),i("el-form-item",{attrs:{label:"看诊日期",prop:"birth","label-width":"70px"}},[i("el-tag",{staticStyle:{width:"140px"},attrs:{type:"info",size:"large",placeholder:"病历号"}},[t._v(t._s(t.onepatient.attendanceDate))])],1)],1),t._v(" "),i("el-table",{attrs:{stripe:"",border:"",data:t.paylist},on:{"selection-change":t.handlechange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"项目名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"总金额(元)",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.amount))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"开立时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.createTime))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"项目类型",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.type?i("el-tag",[t._v("检查")]):t._e(),t._v(" "),2===e.row.type?i("el-tag",[t._v("检验")]):t._e(),t._v(" "),3===e.row.type?i("el-tag",[t._v("处置")]):t._e(),t._v(" "),4===e.row.type?i("el-tag",[t._v("草药处方")]):t._e(),t._v(" "),5===e.row.type?i("el-tag",[t._v("成药处方")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"状态",width:"200"}},[i("el-tag",{attrs:{type:"primary"}},[t._v("未缴费")])],1)],1),t._v(" "),i("p"),t._v(" "),i("span",{staticStyle:{"font-family":"'微软雅黑'"}},[t._v("应付: ")]),t._v(" "),i("el-tag",{attrs:{size:"large",type:"info"}},[t._v(t._s(t.totalamount))]),t._v(" "),i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择支付方式"},model:{value:t.settlementCatId,callback:function(e){t.settlementCatId=e},expression:"settlementCatId"}},t._l(t.paytype,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),i("p"),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.charge}},[t._v("缴费")]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.refundVisible,expression:"refundVisible"}],staticStyle:{"text-align":"center"}},[i("el-form",{attrs:{model:t.onepatient,"label-width":"80px","label-position":"left",inline:!0}},[i("el-form-item",{attrs:{label:"病历号",prop:"id","label-width":"60px"}},[i("el-tag",{staticStyle:{width:"200px"},attrs:{type:"info",size:"large",placeholder:"病历号"}},[t._v(t._s(t.onepatient.medicalRecordNo))])],1),t._v(" "),i("el-form-item",{attrs:{label:"患者姓名",prop:"name","label-width":"70px"}},[i("el-tag",{staticStyle:{width:"140px"},attrs:{type:"info",size:"large",placeholder:"病历号"}},[t._v(t._s(t.onepatient.patientName))])],1),t._v(" "),i("el-form-item",{attrs:{label:"看诊日期",prop:"birth","label-width":"70px"}},[i("el-tag",{staticStyle:{width:"140px"},attrs:{type:"info",size:"large",placeholder:"病历号"}},[t._v(t._s(t.onepatient.attendanceDate))])],1)],1),t._v(" "),i("el-table",{attrs:{stripe:"",border:"",data:t.paylist},on:{"selection-change":t.handlechange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"发票号",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.invoiceIdfNo)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"项目名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"总金额(元)",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.amount))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"开立时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.createTime))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"项目类型",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.type?i("el-tag",[t._v("检查")]):t._e(),t._v(" "),2===e.row.type?i("el-tag",[t._v("检验")]):t._e(),t._v(" "),3===e.row.type?i("el-tag",[t._v("处置")]):t._e(),t._v(" "),4===e.row.type?i("el-tag",[t._v("草药处方")]):t._e(),t._v(" "),5===e.row.type?i("el-tag",[t._v("成药处方")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"状态",width:"200"}},[i("el-tag",{attrs:{type:"success"}},[t._v("可退费")])],1)],1),t._v(" "),i("p"),t._v(" "),i("span",{staticStyle:{"font-family":"'微软雅黑'"}},[t._v("应退费: ")]),t._v(" "),i("el-tag",{attrs:{size:"large",type:"info"}},[t._v(t._s(t.totalamount))]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.refundmoney}},[t._v("退费")]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:function(e){t.refundVisible=!1}}},[t._v("取消")])],1),t._v(" "),i("el-dialog",{attrs:{title:"退号",visible:t.refundregistVisible,width:"400px"},on:{"update:visible":function(e){t.refundregistVisible=e}}},[i("el-form",{attrs:{model:t.refundregist}},[i("el-form-item",{attrs:{label:"发票号","label-width":"100px"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:""},model:{value:t.invoiceNo,callback:function(e){t.invoiceNo=e},expression:"invoiceNo"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"冲红发票号","label-width":"100px"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:""},model:{value:t.redinvoiceNo,callback:function(e){t.redinvoiceNo=e},expression:"redinvoiceNo"}})],1),t._v(" "),i("el-form-item",[i("el-button",{staticStyle:{float:"right","margin-left":"10px"},attrs:{type:"danger"},on:{click:function(e){t.refundregistVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.comfirmtuihao}},[t._v("退号")])],1)],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"重打",visible:t.reprintregistVisible,width:"400px"},on:{"update:visible":function(e){t.reprintregistVisible=e}}},[i("el-form",[i("el-form-item",{attrs:{label:"新发票号","label-width":"100px"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:""},model:{value:t.re1,callback:function(e){t.re1=e},expression:"re1"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"原发票号","label-width":"100px"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:""},model:{value:t.re2,callback:function(e){t.re2=e},expression:"re2"}})],1),t._v(" "),i("el-form-item",[i("el-button",{staticStyle:{float:"right","margin-left":"10px"},attrs:{type:"danger"},on:{click:function(e){t.reprintregistVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.reprint2}},[t._v("重打发票")])],1)],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"补打",visible:t.suppregistVisible,width:"400px"},on:{"update:visible":function(e){t.suppregistVisible=e}}},[i("el-form",{attrs:{model:t.refundregist}},[i("el-form-item",{attrs:{label:"新发票号","label-width":"100px"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:""},model:{value:t.re2,callback:function(e){t.re2=e},expression:"re2"}})],1),t._v(" "),i("el-form-item",[i("el-button",{staticStyle:{float:"right","margin-left":"10px"},attrs:{type:"danger"},on:{click:function(e){t.suppregistVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.supprint2}},[t._v("退号")])],1)],1)],1)],1)},n=[],r=(i("1bc7"),i("a450"),i("b775"));function s(t){return Object(r["a"])({url:"/fee/listRegisteredPatient",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/registration/createRegistration",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/staff/listDocBySkd",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/fee/refundRegistrationCharge",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/fee/listChargeByRegistrationId",method:"get",params:{registrationId:t}})}function u(t){return Object(r["a"])({url:"/fee/listRefundByRegistrationId",method:"get",params:{registrationId:t}})}function m(t){return Object(r["a"])({url:"/fee/charge",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/fee/refundCharge",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/invoice/reprintInvoice",method:"post",params:{newInvoiceNo:t.newInvoiceNo,oldInvoiceNo:t.oldInvoiceNo}})}function g(t){return Object(r["a"])({url:"/invoice/supplementPrintInvoice",method:"post",params:{newInvoiceNo:t.newInvoiceNo,oldInvoiceNo:t.oldInvoiceNo}})}var h=i("0e8f"),v=i("d0de"),b=i("50fc"),_=i("ed08"),y=(i("6266"),{id:"",name:"",male:"",birth:"",card:"",fapiao:"",type:"",type2:"",data1:"",data2:"",isdone:"",isget:"",status:"",money:"",kemu:""}),R={data:function(){return{re1:"",re2:"",suppregistVisible:!1,reprintregistVisible:!1,isbin:0,redinvoiceNo:"",refundregistVisible:!1,refundregist:{},refundVisible:!1,settlementCatId:"",invoiceNo:"",refs:[],paymoney:0,totalamount:0,paylist:[],doctList:[],regdisabled:!0,regdisabled2:!0,alldept:[],dmsRegistrationParam:{attendanceDate:"",deptId:"",noon:"",amount:0,skdId:"",needBook:"",name:"",dateOfBirth:"",age:"",homeAddress:"",gender:"",phoneNo:"",identificationNo:""},RegisterList:[],RegisterRnak:[],itemtype:["检查检验","处方","处置"],payT:"",paytype:[{value:"1",label:"现金"},{value:"2",label:"银行卡"},{value:"3",label:"医保"},{value:"4",label:"信用卡"},{value:"5",label:"支付宝"},{value:"6",label:"微信"},{value:"7",label:"其他"}],onepatient:Object.assign({},y),radio:1,dialogFormVisible:!1,isshow:!1,list:[],refundRegisterId:"",queryRegister:{medicalRecordNo:null,queryDate:null,pageSize:1e3,pageNum:1},total:0}},created:function(){this.listRegisteredPatient(),this.getAllDep(),this.getAllReg()},methods:{supprint:function(t){this.suppregistVisible=!0,this.re1=t.registrationId,this.re2=""},supprint2:function(){var t=this,e={};e.newInvoiceNo=this.re2,e.registrationId=this.re1,g(e).then((function(e){t.$notify({title:"成功",message:"补打发票成功",type:"success",duration:2e3})}))},reprint2:function(){var t=this,e={};e.newInvoiceNo=this.re2,e.oldInvoiceNo=this.re1,f(e).then((function(e){t.$notify({title:"成功",message:"重打发票成功",type:"success",duration:2e3})}))},reprint:function(){this.re1="",this.re2="",this.reprintregistVisible=!0},changeradio1:function(){0===this.isbin&&(this.dmsRegistrationParam.amount+=1,this.isbin=1)},changeradio2:function(){1===this.isbin&&(this.dmsRegistrationParam.amount-=1,this.isbin=0)},refresh:function(){this.listRegisteredPatient()},selectPatientByIdNo:function(){var t=this;this.isshow=!0,this.$prompt("身份证号","读卡(获取用户身份证号)",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(e){var i=e.value;Object(v["c"])(i).then((function(e){t.dmsRegistrationParam.name=e.data.name,t.dmsRegistrationParam.dateOfBirth=e.data.dateOfBirth,t.dmsRegistrationParam.age=e.data.age,t.dmsRegistrationParam.homeAddress=e.data.homeAddress,t.dmsRegistrationParam.gender=e.data.gender,t.dmsRegistrationParam.phoneNo=e.data.phoneNo,t.dmsRegistrationParam.identificationNo=i,console.log(t.dmsRegistrationParam),t.$message({type:"success",message:"成功读取患者: "+t.dmsRegistrationParam.name})}))}))},comfirmtuihao:function(){var t=this,e={};e.oldInvoiceNo=this.invoiceNo,e.redInvoiceNo=this.redinvoiceNo,e.registrationId=this.refundRegisterId,e.operatorId=this.$store.getters.id,d(e).then((function(e){t.$notify({title:"成功",message:e.message,type:"success",duration:2e3}),t.refundregistVisible=!1,t.listRegisteredPatient()}))},tuihao:function(t){this.refundregistVisible=!0,this.refundRegisterId=t.registrationId},refundmoney:function(){var t=this;if(""!==this.invoiceNo&&void 0!==this.invoiceNo){var e=1,i="";this.refs.forEach((function(a){a.settlementCatId=1,a.chargeItemId=a.id,""===i||a.invoiceIdfNo===i?a.invoiceNo=a.invoiceIdfNo:e=0,0!==e?(a.newInvoiceNo=t.invoiceNo+1,a.redInvoiceNo=t.invoiceNo,a.operatorId=t.$store.getters.id,a.refundAmount=a.amount):t.$notify({title:"警告",message:"不能同时退不同发票号的项目！",type:"warning",duration:2e3})})),p(this.refs).then((function(e){t.$notify({title:"成功",message:"退费成功",type:"success",duration:2e3}),t.refundVisible=!1,t.listRegisteredPatient()})),this.refundregistVisible=!1,this.listRegisteredPatient()}else this.$notify({title:"警告",message:"发票号不能为空！",type:"warning",duration:2e3})},charge:function(){var t=this;if(""!==this.invoiceNo&&void 0!==this.invoiceNo&&""!==this.settlementCatId&&void 0!==this.settlementCatId){var e=this.refs;e.forEach((function(e){e.chargeItemId=e.id,e.invoiceNo=t.invoiceNo,e.opratorId=t.$store.getters.id,e.settlementCatId=t.settlementCatId})),m(e).then((function(e){t.$notify({title:"成功",message:"缴费成功",type:"success",duration:2e3}),t.dialogFormVisible=!1,t.listRegisteredPatient()}))}else this.$notify({title:"信息不完整",message:"请填写发票号或选择缴费类型！",type:"danger",duration:2e3})},handlechange:function(t){var e=this;this.refs=t,this.totalamount=0,this.refs.forEach((function(t){e.totalamount+=t.amount})),this.totalamount=this.totalamount.toFixed(2)},refundRegistrationCharge:function(t){var e=this;this.onepatient=Object(_["c"])(t),u(t.registrationId).then((function(t){e.paylist=t.data,e.paylist.forEach((function(t){null!==t.createTime&&(t.createTime=Object(_["f"])(t.createTime))})),e.refundVisible=!0}))},createRegistration:function(){var t=this;""!==this.dmsRegistrationParam.invoiceNo&&void 0!==this.dmsRegistrationParam.invoiceNo?""!==this.dmsRegistrationParam.settlementCatId&&void 0!==this.dmsRegistrationParam.settlementCatId?(this.dmsRegistrationParam.attendanceDate=Object(_["f"])(this.dmsRegistrationParam.attendanceDate).substr(0,10),this.dmsRegistrationParam.dateOfBirth=Object(_["f"])(this.dmsRegistrationParam.dateOfBirth).substr(0,10),this.dmsRegistrationParam.opratorId=this.$store.getters.id,o(this.dmsRegistrationParam).then((function(e){t.$notify({title:"成功",message:"挂号成功",type:"success",duration:2e3}),t.isshow=!1,t.listRegisteredPatient(),t.dmsRegistrationParam={}}))):this.$notify({title:"信息不完整",message:"请选择支付方式！",type:"warning",duration:2e3}):this.$notify({title:"信息不完整",message:"请输入发票号！",type:"warning",duration:2e3})},choosenoon:function(t){""!==t&&this.listDocBySkd()},listDocBySkd:function(){var t=this,e={};e.date=Object(_["f"])(this.dmsRegistrationParam.attendanceDate).substr(0,10),e.deptId=this.dmsRegistrationParam.deptId,e.noon=this.dmsRegistrationParam.noon,e.registrationRankId=this.dmsRegistrationParam.RegisterRnak,l(e).then((function(e){t.doctList=e.data,t.regdisabled2=!1}))},chooseRegister:function(t){var e=this;1===this.dmsRegistrationParam.RegisterRnak&&""!==this.dmsRegistrationParam.attendanceDate&&""!==this.dmsRegistrationParam.deptId?(this.regdisabled=!1,this.regdisabled2=!1):(this.regdisabled=!0,this.dmsRegistrationParam.noon="",this.dmsRegistrationParam.skdId=""),this.RegisterRank.forEach((function(t){t.id===e.dmsRegistrationParam.RegisterRnak&&(e.dmsRegistrationParam.amount=t.price,e.dmsRegistrationParam.needBook&&(e.dmsRegistrationParam.amount+=1))}))},getAllReg:function(){var t=this;Object(b["e"])().then((function(e){t.RegisterRank=e.data}))},getAllDep:function(){var t=this;Object(h["c"])().then((function(e){t.alldept=e.data}))},listRegisteredPatient:function(){var t=this;s(this.queryRegister).then((function(e){t.RegisterList=e.data.list,t.RegisterList.forEach((function(t){t.patientDateOfBirth=t.patientDateOfBirth.substr(0,10),t.attendanceDate=t.attendanceDate.substr(0,10)})),console.log(t.RegisterList),t.total=e.data.total}))},guahao:function(){this.isshow=!this.isshow},handlepay:function(t){var e=this;this.onepatient=Object(_["c"])(t),console.log(this.onepatient),c(t.registrationId).then((function(t){e.paylist=t.data,e.paylist.forEach((function(t){null!==t.createTime&&(t.createTime=Object(_["f"])(t.createTime))}))})),this.dialogFormVisible=!0}}},w=R,x=(i("c53a"),i("cba8")),k=Object(x["a"])(w,a,n,!1,null,null,null);e["default"]=k.exports},c53a:function(t,e,i){"use strict";i("f0da")},d0de:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return r})),i.d(e,"d",(function(){return s})),i.d(e,"c",(function(){return o}));var a=i("b775");function n(t){return Object(a["a"])({url:"/diagnosisPatient/refreshPatient",method:"post",params:{staffId:t}})}function r(t,e){return Object(a["a"])({url:"/diagnosisPatient/bindPatient",method:"get",params:{registrationId:t,staffId:e}})}function s(t){return Object(a["a"])({url:"/diagnosisPatient/startDiagnosis",method:"get",params:{registrationId:t}})}function o(t){return Object(a["a"])({url:"/diagnosisPatient/selectPatientByIdNo",method:"post",params:{identificationNo:t}})}},f0da:function(t,e,i){}}]);