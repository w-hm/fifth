(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f392ada8"],{"3a8f":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.addressReceivePeople,expression:"addressReceivePeople"}],ref:"addressReceivePeople",attrs:{type:"text",placeholder:"收件人"},domProps:{value:e.addressReceivePeople},on:{input:function(s){s.target.composing||(e.addressReceivePeople=s.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addressTel,expression:"addressTel"}],ref:"addressTel",attrs:{type:"number",placeholder:"联系电话"},domProps:{value:e.addressTel},on:{input:function(s){s.target.composing||(e.addressTel=s.target.value)}}}),t("select",{ref:"province",staticClass:"province"},[t("option",{attrs:{value:""}},[e._v("请选择")]),t("option",{attrs:{value:""}},[e._v(e._s(e.province))])]),t("select",{ref:"city",staticClass:"city"},[t("option",{attrs:{value:""}},[e._v("请选择市")]),t("option",{attrs:{value:""}},[e._v(e._s(e.city))])]),t("select",{ref:"county",staticClass:"county"},[t("option",{attrs:{value:""}},[e._v("请选择县/区")]),t("option",{attrs:{value:""}},[e._v(e._s(e.county))])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addressDetail,expression:"addressDetail"}],ref:"addressDetail",attrs:{type:"text",placeholder:"详细地址"},domProps:{value:e.addressDetail},on:{input:function(s){s.target.composing||(e.addressDetail=s.target.value)}}}),t("div",{staticClass:"set",on:{click:e.change}},[t("img",{staticStyle:{width:"0.4rem",height:"0.4rem"},attrs:{src:e.def_address?e.url2:e.url1,alt:""}}),t("span",[e._v("设为默认地址")])]),t("div",{staticClass:"save",on:{click:e.saveAddress}},[t("img",{staticStyle:{width:"0.5rem",height:"0.4rem"},attrs:{src:"https://m.hanfugou.com/Image/icon_right_white.png?v=1",alt:""}}),t("span",[e._v("保存更改")])]),e.box?t("div",{staticClass:"box"},[e._v("\n      请填写完整信息哟～\n  ")]):e._e()])},r=[],i=t("bc3a"),d=t.n(i),o={name:"Address",data(){return{box:!1,def_address:!1,url1:"https://m.hanfugou.com/Image/check_no.png?v=1",url2:"https://m.hanfugou.com/Image/check_yes.png?v=1",addressReceivePeople:"",addressTel:"",addressDetail:"",province:"湖北省",city:"武汉市",county:"江夏区"}},mounted(){},methods:{change(){this.def_address=!this.def_address},saveAddress(){let e={userId:this.addressReceivePeople,Tel:this.addressTel,province:this.province,city:this.city,county:this.county,address:this.addressDetail};d.a.post("/hanfugou/addressInsert?userId="+sessionStorage.userid+"&addressReceivePeople="+this.addressReceivePeople+"&addressTel="+this.addressTel+"&addressXxaddress="+this.province+this.city+this.county+this.addressDetail,{}).then(s=>{console.log(s),sessionStorage.setItem("all_address",JSON.stringify(e))}),setTimeout(()=>{this.$refs.addressReceivePeople.value&&this.$refs.addressTel.value&&""!==this.$refs.addressDetail.value?this.$router.push({path:"/orderList"}):(this.box=!0,setTimeout(()=>{this.box=!1},1e3))},1e3)}}},l=o,n=(t("cb2b"),t("2877")),c=Object(n["a"])(l,a,r,!1,null,"42b14675",null);s["default"]=c.exports},"756f":function(e,s,t){},cb2b:function(e,s,t){"use strict";var a=t("756f"),r=t.n(a);r.a}}]);
//# sourceMappingURL=chunk-f392ada8.8950fc51.js.map