<template>
    <div class="wrap">
       <ul class="titleul">
           <li v-for="(item,index) in titlelist" :key="index" v-on:click="libt(item,index)"
            :class="item.flag">{{item.title}}</li>
       </ul>
       <div class="Brandmain">
           <div class="store" v-for="item in mainlist" :key="item.id">
               <div class="storename" v-on:click="gostore(item)">
                   <div class="img" >
                       <img :src="item.storeIcon" alt="">
                   </div>
                   <div class="name">
                       <div>{{item.storeName}}</div>
                       <p>商品<span>{{item.storeGoodsTolal}}</span>粉丝<span>{{item.storeFocusNumber}}</span></p>
                   </div>
                    <div class="right">
                        关注
                    </div>
               </div>
               <div class="storegoods">
                   <div v-for="(goods,index) in item.goods" :key="index" v-on:click="godetail(goods)">
                       <div class="img">
                           <img  alt="" :src="goods.goodsPicture">
                           <p>{{goods.goodsName}}</p>
                           <div>￥{{goods.goodsPrice}}</div>  
                       </div>
                   </div>     
               </div>
           </div>
       </div>
    </div>
</template>
<script>
const axios=require("axios");
export default {
    name:"Brand",
    data:function(){
        return {
        titlelist:[
                  {title:"热门店铺",flag:"special",ty:"rmdp"},
                   {title:"最新入驻", flag:false,ty:"zxrz"},
                   {title:"白菜商家",flag:false,ty:"bcsj"},
                   {title:"中档消费",flag:false,ty:"zdxf"},
                   {title:"高档定制",flag:false,ty:"gddz"}
                   ],
                   
        flag:false,
        liclass:"",
        mainlist:[]
           

        }
        
    },
    methods:{
        godetail(item){
              console.log(item.goodsID)
              this.$router.push({path:'/detail',query:{goodsid:item.goodsID}});
          },
        libt(item,index){
            this.titlelist.forEach(item => {
                item.flag=" " 
            });
            this.titlelist[index].flag="special"
            console.log(item.ty)
             var that=this;
        axios.get("http://192.168.52.94:8080/hanfugou/HotStore?storeType="+item.ty).then(function(res){
            console.log(res.data)
            console.log(that._data.mainlist)
            that._data.mainlist=res.data //更新
        })


        },
        gostore(item){
            console.log(item)
            this.$router.push({path: `store/${item.storeId}`})
            // console.log(11111)
        },
    },

    created:function(){
        // console.log(this._data.mainlist)
        var that=this;
        axios.get("http://192.168.52.94:8080/hanfugou/HotStore?storeType="+"rmdp").then(function(res){

        
            console.log(that._data.mainlist)
            that._data.mainlist=res.data
        })
        // this._data.mainlist=""
        // this.data.mainlist=[]
    }
}
</script>
<style scoped>
    .wrap{
        background:#f4f4f4;
    }
    .titleul{
        display: flex;
        justify-content: space-around;
        color: #555555;
        /* font-size: 0.14rem; */
        /* margin-bottom: 0.2rem; */
        background:white;
        box-shadow: 0px 0px 5px grey;
    }
    .titleul li{
        list-style: none;
        padding: 0.20rem 0.1rem;
    }
    .special{
        border-bottom: 2px solid red;
    }
    .Brandmain{
        background: #f4f4f4;
        overflow: hidden;
    }
    .Brandmain .store{
        padding:0 0.2rem;
        margin-top: 0.2rem;
        background: white;
    }
    .storename{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.10rem;
    }
    .storename .img{
        width: 1rem;
        height: 1rem;
        border: 1px solid red 
    }
    .storename .img img{
        width: 100%;
        height: 100%;
    }
    .storename .name{
        flex: 1;
        text-align: left;
        padding-left: 0.2rem;
    }
    .storename .name p{
        padding-top: 0.12rem;
        font-size: 0.16rem;
        color:  #bcbcbc
    }
    .storename .name p span{
        padding-left: 0.1rem;
        padding-right: 0.3rem;
    }
    .storename .right{
        color: red;
        width: 0.60rem;
        height: 0.50rem;
    }
    .storegoods{
        display: flex;
        justify-content: space-between;
    }
    .storegoods .img{
        width: 2.3rem;
        
    }
    .storegoods .img p{
        /* width: 2.3rem; */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 25px;    
        max-height: 25px;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
                
    }
    .storegoods .img>div{
        padding-top: 0.2rem;
        padding-bottom: 0.3rem;
        color: red
    }
    .storegoods .img img{
        width: 100%;
        height:2.3rem;
    }
</style>