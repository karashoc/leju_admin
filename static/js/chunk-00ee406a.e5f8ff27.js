(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00ee406a"],{"348a":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return l})),a.d(e,"e",(function(){return i})),a.d(e,"d",(function(){return o}));a("b3d9");var r=a("b775");function s(t,e,a){return Object(r["a"])({url:"/lejuAdmin/orderReturn/findReturnApply/".concat(t,"/").concat(e),method:"post",data:a})}function n(t){return Object(r["a"])({url:"/lejuAdmin/orderReturn/".concat(t)})}function l(t,e){return Object(r["a"])({url:"/lejuAdmin/orderReturn/agreeApply/".concat(t),method:"post",data:e})}function i(t,e){return Object(r["a"])({url:"/lejuAdmin/orderReturn/rejectApply/".concat(t),method:"post",data:e})}function o(t,e){return Object(r["a"])({url:"/lejuAdmin/orderReturn/receiveProduct/".concat(t),method:"post",data:e})}},"9ad3":function(t,e,a){"use strict";a("c3a4")},c3a4:function(t,e,a){},f834:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"returnDetail"},[a("el-card",{staticClass:"card",attrs:{shadow:"never","body-style":{padding:"20px"}}},[0==t.returnInfo.status||1==t.returnInfo.status||2==t.returnInfo.status||3==t.returnInfo.status?a("div",[a("div",{staticClass:"table-main"},[a("div",{staticClass:"block-title"},[t._v(" 订单信息: "),0==t.returnInfo.status?a("el-tag",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger",size:"small",effect:"dark"}},[t._v("待处理")]):t._e(),1==t.returnInfo.status?a("el-tag",{staticStyle:{"margin-left":"10px"},attrs:{type:"warning",size:"small",effect:"dark"}},[t._v("退货中")]):t._e(),2==t.returnInfo.status?a("el-tag",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",effect:"light"}},[t._v("已完成")]):t._e(),3==t.returnInfo.status?a("el-tag",{staticStyle:{"margin-left":"10px"},attrs:{type:"info",size:"small",effect:"light"}},[t._v("已拒绝")]):t._e()],1),a("div",{staticClass:"block-content"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{staticClass:"item",attrs:{span:9,offset:0}},[t._v(" 订单编号: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.orderSn))]),a("span",[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"}},[t._v("查看订单详情")])],1)]),a("el-col",{staticClass:"item",attrs:{span:5,offset:0}},[t._v(" 退单人姓名: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.returnName))])]),a("el-col",{staticClass:"item",attrs:{span:5,offset:0}},[t._v(" 退单理由: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.reason))])]),a("el-col",{staticClass:"item",attrs:{span:5,offset:0}},[t._v(" 退单描述: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.description))])])],1),a("el-row",[a("el-col",{staticClass:"item",attrs:{span:9,offset:0}},[t._v(" 申请时间: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.createTime))])])],1),a("el-row",[a("el-col",{staticClass:"item",staticStyle:{display:"flex","align-items":"start"},attrs:{span:9,offset:0}},[a("span",[t._v("退单图片:")]),t._l(t.imgList,(function(e,r){return a("el-image",{key:r,staticStyle:{width:"100px",height:"100px","margin-left":"20px"},attrs:{src:e,fit:t.fit,"preview-src-list":t.imgList}})}))],2)],1)],1)]),a("el-divider"),a("div",{staticClass:"table-main"},[a("div",{staticClass:"block-title"},[t._v(" 退货商品: ")]),a("div",{staticClass:"block-content"},[t.productList?a("el-table",{attrs:{data:t.productList,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"productPic",label:"商品图片",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.productPic,alt:""}})]}}],null,!1,3107021084)}),a("el-table-column",{attrs:{label:"商品描述",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.productName))]),a("p",[t._v("品牌: "+t._s(e.row.productBrand))])]}}],null,!1,2236613044)}),a("el-table-column",{attrs:{prop:"productRealPrice",label:"商品价格","min-width":"150",align:"center"}}),a("el-table-column",{attrs:{label:"商品属性",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("filterSku")(e.row.productAttr))+" ")]}}],null,!1,4001339409)}),a("el-table-column",{attrs:{prop:"productCount",label:"商品数量",width:"80",align:"center"}}),a("el-table-column",{attrs:{prop:"returnAmount",label:"总计",width:"100",align:"center",fixed:"right"}})],1):t._e()],1)]),a("el-divider"),a("div",{staticClass:"table-main"},[a("div",{staticClass:"block-title"},[t._v(" 用户信息: ")]),a("div",{staticClass:"block-content"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[t._v(" 联系人: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.returnName))])]),a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[t._v(" 联系电话: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.returnPhone))])])],1)],1)]),a("el-divider"),a("div",{staticClass:"table-main"},[a("div",{staticClass:"block-title"},[t._v(" 费用信息: ")]),a("div",{staticClass:"block-content"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[t._v(" 退单金额: "),a("span",{staticClass:"val red"},[t._v(t._s(t.returnInfo.returnAmount))])]),a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[t._v(" 运费金额: "),a("span",{staticClass:"val red"},[t._v("0")])])],1),0==t.returnInfo.status?a("el-form",{ref:"returnParams",attrs:{model:t.returnParams,rules:t.rules,"label-width":"80px",inline:!1,size:"normal"}},[a("el-row",{attrs:{gutter:20,type:"flex",justify:"start"}},[a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[a("el-form-item",{attrs:{label:"退款金额:"}},[a("el-input-number",{attrs:{size:"mini",min:0},on:{change:t.handleChange},model:{value:t.returnParams.returnAmount,callback:function(e){t.$set(t.returnParams,"returnAmount",e)},expression:"returnParams.returnAmount"}})],1)],1),a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[a("el-form-item",{attrs:{label:"处理人:","label-width":"60px",prop:"handleMan"}},[a("el-input",{attrs:{size:"mini",placeholder:"处理人"},model:{value:t.returnParams.handleMan,callback:function(e){t.$set(t.returnParams,"handleMan",e)},expression:"returnParams.handleMan"}})],1)],1),a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[a("el-form-item",{attrs:{label:"处理备注:",prop:"handleNote"}},[a("el-input",{attrs:{size:"mini",placeholder:"处理备注"},model:{value:t.returnParams.handleNote,callback:function(e){t.$set(t.returnParams,"handleNote",e)},expression:"returnParams.handleNote"}})],1)],1)],1)],1):t._e()],1)]),a("el-divider"),a("div",{staticClass:"table-main"},[a("div",{staticClass:"block-title"},[t._v(" 处理结果: ")]),a("div",{staticClass:"block-content"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[t._v(" 处理人: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.handleMan))])]),a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[t._v(" 处理备注: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.handleNote))])]),a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[t._v(" 处理时间: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.handleTime))])])],1),1==t.returnInfo.status?a("el-form",{ref:"returnParams",attrs:{model:t.returnParams,rules:t.rules,"label-width":"80px",inline:!1,size:"normal"}},[a("el-row",{attrs:{gutter:20,type:"flex",justify:"start"}},[a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[a("el-form-item",{attrs:{label:"收货人:","label-width":"60px",prop:"receiveMan"}},[a("el-input",{attrs:{size:"mini",placeholder:"收货人"},model:{value:t.receiveParams.receiveMan,callback:function(e){t.$set(t.receiveParams,"receiveMan",e)},expression:"receiveParams.receiveMan"}})],1)],1),a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[a("el-form-item",{attrs:{label:"收货备注:",prop:"receiveNote"}},[a("el-input",{attrs:{size:"mini",placeholder:"收货备注"},model:{value:t.receiveParams.receiveNote,callback:function(e){t.$set(t.receiveParams,"receiveNote",e)},expression:"receiveParams.receiveNote"}})],1)],1)],1)],1):t._e()],1)]),a("el-divider"),2==t.returnInfo.status?a("div",{staticClass:"table-main"},[a("div",{staticClass:"block-title"},[t._v(" 收货信息: ")]),a("div",{staticClass:"block-content"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[t._v(" 退单收货人: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.receiveMan))])]),a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[t._v(" 退单收货备注: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.receiveNote))])]),a("el-col",{staticClass:"item",attrs:{span:6,offset:0}},[t._v(" 退单收货时间: "),a("span",{staticClass:"val"},[t._v(t._s(t.returnInfo.receiveTime))])])],1)],1)]):t._e(),a("div",{staticClass:"btnBox"},[0==t.returnInfo.status?a("el-button",{staticStyle:{width:"150px"},attrs:{type:"primary",size:"small"},on:{click:t.agreeReturn}},[t._v("同意退款")]):t._e(),0==t.returnInfo.status?a("el-button",{staticStyle:{width:"150px"},attrs:{type:"default",size:"small"},on:{click:t.refuseReturn}},[t._v("拒绝退款")]):t._e(),1==t.returnInfo.status?a("el-button",{staticStyle:{width:"150px"},attrs:{type:"primary",size:"small"},on:{click:t.confirmReceive}},[t._v("确认收货")]):t._e()],1)],1):t._e()])],1)},s=[],n=(a("89a8"),a("4c1e"),a("fee8"),a("348a")),l={filters:{filterSku:function(t){if("string"===typeof t){var e=JSON.parse(t);return e.reduce((function(t,e){return t+e.key+":"+e.value+"   "}),"")}return t.reduce((function(t,e){return t+e.key+":"+e.value+"   "}),"")}},data:function(){return{returnInfo:{},productList:[],imgList:[],returnParams:{id:this.$route.query.orderId,returnAmount:0,handleMan:"",handleNote:""},receiveParams:{id:this.$route.query.orderId,receiveMan:"",receiveNote:""},rules:{handleMan:[{required:!0,message:"请填写处理人",trigger:"blur"}],handleNote:[{required:!0,message:"请填写处理备注",trigger:"blur"}],receiveMan:[{required:!0,message:"请填写收货人",trigger:"blur"}],receiveNote:[{required:!0,message:"请填写收货备注",trigger:"blur"}]}}},created:function(){this.init()},mounted:function(){},methods:{confirmReceive:function(){var t=this;this.$refs.sendOutData.validate((function(e){e?Object(n["d"])(t.$route.query.orderId,t.receiveParams).then((function(t){console.log(t)})):t.$message.warning("请填写必要信息")}))},agreeReturn:function(){var t=this;this.$refs.sendOutData.validate((function(e){e?Object(n["a"])(t.$route.query.orderId,t.returnParams).then((function(t){console.log(t)})):t.$message.warning("请填写必要信息")}))},refuseReturn:function(){var t=this;this.$refs.sendOutData.validate((function(e){e?Object(n["e"])(t.$route.query.orderId,t.returnParams).then((function(t){console.log(t)})):t.$message.warning("请填写必要信息")}))},init:function(){var t=this;Object(n["c"])(this.$route.query.orderId).then((function(e){console.log(e),t.returnInfo=e.data.orderReturnApply;var a={productPic:t.returnInfo.productPic,productName:t.returnInfo.productName,productAttr:t.returnInfo.productAttr,productCount:t.returnInfo.productCount,productBrand:t.returnInfo.productBrand,productRealPrice:t.returnInfo.productRealPrice,returnAmount:t.returnInfo.returnAmount};t.productList.push(a),t.imgList=t.returnInfo.proofPics.split(",")}))}}},i=l,o=(a("9ad3"),a("cba8")),c=Object(o["a"])(i,r,s,!1,null,"78688de7",null);e["default"]=c.exports}}]);