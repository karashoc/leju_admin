(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0daf26"],{"6e89":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"addressManage"},[o("el-card",{staticClass:"card"},[o("div",{attrs:{slot:"header"},slot:"header"},[o("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addAddress}},[e._v("新增")])],1),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,border:""}},[o("el-table-column",{attrs:{label:"#",type:"index",fixed:"left"}}),o("el-table-column",{attrs:{prop:"addressName",label:"地址名称"}}),o("el-table-column",{attrs:{prop:"coverImg",label:"默认发货地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-switch",{on:{change:function(o){return e.switchSendStatus(t.row.id)}},model:{value:t.row.sendStatus,callback:function(o){e.$set(t.row,"sendStatus",o)},expression:"scope.row.sendStatus"}})]}}])}),o("el-table-column",{attrs:{prop:"name",label:"收货人姓名"}}),o("el-table-column",{attrs:{prop:"phone",label:"收货人电话"}}),o("el-table-column",{attrs:{prop:"completeAddress",label:"收货人地址"}}),o("el-table-column",{attrs:{prop:"receiveStatus",label:"默认收货地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-switch",{on:{change:function(o){return e.switchReceiveStatus(t.row.id)}},model:{value:t.row.receiveStatus,callback:function(o){e.$set(t.row,"receiveStatus",o)},expression:"scope.row.receiveStatus"}})]}}])}),o("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),o("el-table-column",{attrs:{prop:"editorType",label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.editAddress(t.row)}}},[e._v("编辑")]),o("el-button",{staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(o){return e.deleteAddress(t.row.id)}}},[e._v("删除")])]}}])})],1)],1),o("el-dialog",{attrs:{title:"地址详情",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.reset}},[o("el-form",{attrs:{model:e.form}},[o("el-form-item",{attrs:{label:"发货地址","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.addressName,callback:function(t){e.$set(e.form,"addressName",t)},expression:"form.addressName"}})],1),o("el-form-item",{attrs:{label:"发货人姓名","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"发货人手机号","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),o("el-form-item",{attrs:{label:"邮政编码","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.postCode,callback:function(t){e.$set(e.form,"postCode",t)},expression:"form.postCode"}})],1),o("el-form-item",{attrs:{label:"收货地址","label-width":e.formLabelWidth}},[o("el-cascader",{attrs:{size:"large",options:e.options},on:{change:e.handleChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1),o("el-form-item",{attrs:{label:"详细地址","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.detailAddress,callback:function(t){e.$set(e.form,"detailAddress",t)},expression:"form.detailAddress"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1)],1)},i=[],a=(o("4c1e"),o("fee8"),o("1926"),o("89a8"),o("1a91"),o("b775"));function n(){return Object(a["a"])({url:"/lejuAdmin/companyAddress/addressList"})}function l(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/setSendOne",method:"post",data:e})}function r(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/setReceiveOne",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/".concat(e),method:"delete"})}function c(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/save",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/update",method:"post",data:e})}var m=o("2e3f"),f={name:"LejuAdminIndex",data:function(){return{list:[],dialogFormVisible:!1,formLabelWidth:"120px",options:m["regionData"],selectedOptions:[],form:{addressName:"",city:"",cityCode:"",createTime:"",detailAddress:"",id:"",modifyTime:"",name:"",phone:"",postCode:"",province:"",receiveStatus:0,region:"",sendStatus:0}}},created:function(){this.init()},mounted:function(){},methods:{editAddress:function(e){console.log(e),this.dialogFormVisible=!0,this.selectedOptions=e.cityCode.split(","),this.form=e},reset:function(){this.selectedOptions=[],this.form={addressName:"",city:"",cityCode:"",createTime:"",detailAddress:"",id:"",modifyTime:"",name:"",phone:"",postCode:"",province:"",receiveStatus:0,region:"",sendStatus:0}},confirm:function(){var e=this;if(this.form.id)return this.form.cityCode=this.selectedOptions.join(","),this.form.sendStatus=this.form.sendStatus?1:0,this.form.receiveStatus=this.form.receiveStatus?1:0,void u(this.form).then((function(t){console.log(t),e.$message({message:"修改地址成功",type:"success"}),e.dialogFormVisible=!1,e.init()}));c(this.form).then((function(t){console.log(t),e.$message({message:"新增地址成功",type:"success"}),e.dialogFormVisible=!1,e.init()}))},handleChange:function(e){console.log(e,m["CodeToText"][e[0]]),this.form.province=m["CodeToText"][e[0]],this.form.city=m["CodeToText"][e[1]],this.form.region=m["CodeToText"][e[2]],this.form.cityCode=e.join(",")},addAddress:function(){this.dialogFormVisible=!0},deleteAddress:function(e){var t=this;d(e).then((function(e){console.log(e),t.init()}))},switchReceiveStatus:function(e){var t=this;r({id:e}).then((function(e){console.log(e),t.$message({message:"修改状态成功",type:"success"}),t.init()}))},switchSendStatus:function(e){var t=this;l({id:e}).then((function(e){console.log(e),t.$message({message:"修改状态成功",type:"success"}),t.init()}))},init:function(){var e=this;n().then((function(t){console.log(t),t.data.items.forEach((function(e){e.completeAddress=e.province+" "+e.city+" "+e.region+" "+e.detailAddress,e.sendStatus=!!e.sendStatus,e.receiveStatus=!!e.receiveStatus})),e.list=t.data.items}))}}},p=f,h=o("cba8"),b=Object(h["a"])(p,s,i,!1,null,"9320b8fe",null);t["default"]=b.exports}}]);