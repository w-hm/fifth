
<template>
<div class="wrap">
    <div >
        <div>
             <input type="text">
        </div>
         <button>搜索</button>
    </div>
        <ul class="title_ul">
           <li v-for="(item,index) in titlelist" :key="index" v-on:click="libt(item,index)" :class="item.flag">{{item.title}}</li>
        </ul>

         <div class="storegoods">
                   <div v-for="(goods,index) in item.goods" :key="index">
                       <div class="img">
                           <img  alt="" :src="goods.goodsPicture">
                           <p>{{goods.goodsName}}</p>
                           <div>￥{{goods.goodsPrice}}</div>
                       </div>
                   </div>     
               </div>
       </div>
</template>
<script>
export default {
    name:"Search",
    // data:function(){
    //       return{
    //             titlelist:[
    //                 {title:"综合",flag:special,ty:"zh"},
    //                 {title:"最新",flag:flase,ty:"zx"},
    //                 {title:"种草",flag:flase,ty:"zc"},
    //                 {title:"价格↓",flag:flase,ty:"xj"},
    //                 {title:"价格↑",flag:false,ty:"ss"}          
    //             ],
    //             flag:false,
    //             mainlist=[],
    //       }
    // },
    
    // methods:{
        
    // }

}
</script>
<style scoped>
       input{
            width: 70%;
            height:0.6rem ;
            font-size: 0.3rem;
            margin: 0.3rem;
            float: left;
            background: #eee;
       }
       button{
            width: 1rem;
            height: 0.6rem;
            background:#ff4466;
            font-size: 0.3rem;
             margin: 0.3rem;
            float: left;
       }

       .title_ul{
        display: flex;
        justify-content: space-around;
        color: #555555;
        background:white;
        box-shadow: 0px 0px 5px grey;
    }
    .title_ul li{
        list-style: none;
        padding: 0.20rem 0.1rem;
    }
    .special{
        border-bottom: 2px solid red;
    }
</style>

//  https://pic.hanfugou.com/web/2019/5/14/19/1e533dc8bbad474eb1205a15a9e31297.jpg_300x300.jpg