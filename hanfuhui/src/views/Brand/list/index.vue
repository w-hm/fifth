<template>
    <div class="wrap">
        <div class="shoplist">
            <ul>
                <li v-on:click="libt(index)" :class="item.class" v-for="(item,index) in listyle" :key="index">{{item.tp}}</li>
            </ul>
            <div class="listimg">
                <div class="img" v-for="(item,index) in store" :key="index" v-on:click="godetail(item)">
                    <img :src="item.goodsPicture" alt="">
                    <p>{{item.goodsName}}</p>
                    <h3><span>￥</span>{{item.goodsPrice}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import service from '../../../service/service'
let axios=require("axios")
export default {
    name:"store",
    data:function(){
        return {
            store:"",
            listyle:[
               {tp:"综合",class:"line",px:'zc',api:"Collect"},
                 {tp:"最新",class:"",px:"zx",api:"ByTime"},
                  {tp:"种草",class:"",px:"zc",api:'Collect'},
                   {tp:"升价",class:"",px:"jgsx",api:'PriceUp'},
                    {tp:"降价",class:"",px:"jgjx",api:"PriceDown"}
            ]
        }
    },
    


     created(){

        // console.log(this.$route.param)

         console.log(this.$route.query)
         let id=this.$route.query.goodsType


         let that=this
         axios.get("http://192.168.52.90:8080/hanfugou/InChest?goodsType="+id).then(function(res){
             console.log(res.data)
             that._data.store=res.data
             console.log(that._data.store)
         })
     },
      methods:{
          godetail(item){
              console.log(item.goodsId)
              this.$router.push({path:'/details?goodsId='+item.goodsId});
          },
          libt(index){

            //   console.log(this._data.listyle)
              this._data.listyle.forEach(function(item){
                  item.class=""
              })
              this._data.listyle[index].class="line"
            //   window.scroll=0.5+"rem"
                

         let id=this.$route.query.goodsType
        let px=this._data.listyle[index].px
        let api=this._data.listyle[index].api
        console.log(px)
         let that=this
         axios.get("http://192.168.52.90:8080/hanfugou/"+api+"?goodsType="+id+"&showType="+px).then(function(res){
            //  console.log(res.data)
            console.log(that._data.store)
             that._data.store=res.data
             console.log(res.data)
            //  console.log(that._data.store)
         })
          }
      },
   
    
}
</script>
<style sc>
    .wrap{
        background: white;
        overflow: hidden;
    }
    
   
    
    .shoplist>h3{
        padding: 0.2rem;
        /* padding-top: 0; */
        font-weight: 100;
        color: #ff6699;
        text-align: center;
    }
    .shoplist>ul{
        /* position: static; */
        background: white;
        width: 100%;
        /* position:fixed; */
        top:0;
        display: flex;
        justify-content: space-around;
    }
    .shoplist ul li{
        padding:0.2rem 0.3rem ;
        padding-bottom: 0.1rem;
        
        
        list-style: none;
    }
    .line{
        border-bottom: 4px solid#ff6699;
        color: #ff6699;
        
    }
    .shoplist .listimg  {
        /* margin-top: 0rem; */
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .shoplist .img{
        padding-top: 0.05rem;
        width: 3.7rem;
       
    }
    .shoplist .img h3{
         font-weight: 100;
        color: #ff6699;
    }
    .shoplist .img p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /* line-height: 1;     */
        /* max-height: 25px; */
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        padding-bottom: 0.08rem;

    }
    .shoplist .img img{
        width: 3.7rem;
        height: 4rem;
        /* float: left; */
    }
</style>