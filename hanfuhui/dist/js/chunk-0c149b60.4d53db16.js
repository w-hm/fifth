(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c149b60"],{"67cf":function(t,s){const e={1:{name:"heleo",dfsaf:"fsafd",imgUrl:"http://www.baidu.com/lgo"}};t.exports={getStoreDetail(t){return new Promise(function(s,o){s(e[t])})}}},"68c1":function(t,s,e){},e036:function(t,s,e){"use strict";var o=e("68c1"),a=e.n(o);a.a},ed89:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"shoplist"},[e("ul",t._l(t.listyle,function(s,o){return e("li",{key:o,class:s.class,on:{click:function(s){return t.libt(o)}}},[t._v(t._s(s.tp))])}),0),e("div",{staticClass:"listimg"},t._l(t.store,function(s,o){return e("div",{key:o,staticClass:"img",on:{click:function(e){return t.godetail(s)}}},[e("img",{attrs:{src:s.goodsPicture,alt:""}}),e("p",[t._v(t._s(s.goodsName))]),e("h3",[e("span",[t._v("￥")]),t._v(t._s(s.goodsPrice))])])}),0)])])},a=[];e("67cf");let l=e("bc3a");var i={name:"store",data:function(){return{store:"",listyle:[{tp:"综合",class:"line",px:"zc",api:"Collect"},{tp:"最新",class:"",px:"zx",api:"ByTime"},{tp:"种草",class:"",px:"zc",api:"Collect"},{tp:"升价",class:"",px:"jgsx",api:"PriceUp"},{tp:"降价",class:"",px:"jgjx",api:"PriceDown"}]}},created(){console.log(this.$route.query);let t=this.$route.query.goodsType,s=this;l.get("/hanfugou/InChest?goodsType="+t).then(function(t){console.log(t.data),s._data.store=t.data,console.log(s._data.store)})},methods:{godetail(t){console.log(t.goodsId),this.$router.push({path:"/details?goodsId="+t.goodsId})},libt(t){this._data.listyle.forEach(function(t){t.class=""}),this._data.listyle[t].class="line";let s=this.$route.query.goodsType,e=this._data.listyle[t].px,o=this._data.listyle[t].api;console.log(e);let a=this;l.get("/hanfugou/"+o+"?goodsType="+s+"&showType="+e).then(function(t){console.log(a._data.store),a._data.store=t.data,console.log(t.data)})}}},n=i,c=(e("e036"),e("2877")),r=Object(c["a"])(n,o,a,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-0c149b60.4d53db16.js.map