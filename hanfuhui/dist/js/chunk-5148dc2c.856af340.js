(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5148dc2c"],{"3c04":function(t,s,i){},d401:function(t,s,i){"use strict";var a=i("3c04"),o=i.n(a);o.a},ee77:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrap"},[i("ul",{staticClass:"titleul"},t._l(t.titlelist,function(s,a){return i("li",{key:a,class:s.flag,on:{click:function(i){return t.libt(s,a)}}},[t._v(t._s(s.title))])}),0),i("div",{staticClass:"Brandmain"},t._l(t.mainlist,function(s){return i("div",{key:s.id,staticClass:"store"},[i("div",{staticClass:"storename",on:{click:function(i){return t.gostore(s)}}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:s.storeIcon,alt:""}})]),i("div",{staticClass:"name"},[i("div",[t._v(t._s(s.storeName))]),i("p",[t._v("商品"),i("span",[t._v(t._s(s.storeGoodsTolal))]),t._v("粉丝"),i("span",[t._v(t._s(s.storeFocusNumber))])])]),i("div",{staticClass:"right"},[t._v("\n                    关注\n                ")])]),i("div",{staticClass:"storegoods"},t._l(s.goods,function(s,a){return i("div",{key:a,on:{click:function(i){return t.godetail(s)}}},[i("div",{staticClass:"img"},[i("img",{attrs:{alt:"",src:s.goodsPicture}}),i("p",[t._v(t._s(s.goodsName))]),i("div",[t._v("￥"+t._s(s.goodsPrice))])])])}),0)])}),0)])},o=[];const e=i("bc3a");var l={name:"Brand",data:function(){return{titlelist:[{title:"热门店铺",flag:"special",ty:"rmdp"},{title:"最新入驻",flag:!1,ty:"zxrz"},{title:"白菜商家",flag:!1,ty:"bcsj"},{title:"中档消费",flag:!1,ty:"zdxf"},{title:"高档定制",flag:!1,ty:"gddz"}],flag:!1,liclass:"",mainlist:[]}},methods:{godetail(t){console.log(t.goodsID),this.$router.push({path:"/details",query:{goodsId:t.goodsID}})},libt(t,s){this.titlelist.forEach(t=>{t.flag=" "}),this.titlelist[s].flag="special",console.log(t.ty);var i=this;e.get("/hanfugou/HotStore?storeType="+t.ty).then(function(t){console.log(t.data),console.log(i._data.mainlist),i._data.mainlist=t.data})},gostore(t){console.log(t),this.$router.push({path:`store/${t.storeId}`})}},created:function(){var t=this;e.get("/hanfugou/HotStore?storeType=rmdp").then(function(s){console.log(t._data.mainlist),t._data.mainlist=s.data})}},n=l,c=(i("d401"),i("2877")),r=Object(c["a"])(n,a,o,!1,null,"dac47900",null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-5148dc2c.856af340.js.map