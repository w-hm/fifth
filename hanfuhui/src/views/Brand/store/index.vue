<template>
    <div class="wrap">
        <div class="inp">
            
           <span></span>店内收搜
        </div>
        <div class="store">
            <img :src="store.storeIcon" alt="">
            <h3>{{store.storeName}}</h3>
            <p>{{store.storeAddress}}{{store.storeFocusNumber}}已关注</p>
            <!-- <div v-for="(item,index) in 3" :key="index">{{item}}{{index}}</div> -->
        </div>
        <div class="solid"></div>
        <div class="shoplist">
            <h3>全部商品</h3>
            <ul>
                <li v-on:click="libt(index)" :class="item.class" v-for="(item,index) in listyle" :key="index">{{item.tp}}</li>
            </ul>
            <div class="listimg">
                <div class="img" v-for="(item,index) in store.showGoods" :key="index" v-on:click="godetail(item)" >
                    <img :src="item.goodsPicture" alt="">
                    <p>{{item.goodsName}}</p>
                    <h3><span>￥</span>{{item.goodsPrice}}<i>种草数:{{item.goodsCollect}}</i></h3>
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
                {tp:"综合",class:"line",px:'Zc'},
                 {tp:"最新",class:"",px:"Time"},
                  {tp:"种草",class:"",px:"Zc"},
                   {tp:"升价",class:"",px:"Price"},
                    {tp:"降价",class:"",px:"DescPrice"}
            ]
        }
    },
     created(){
         let that=this
         axios.get("http://192.168.52.94:8080/hanfugou/showStore?sid="+this.$route.params.storeId).then(function(res){
             console.log(res.data)
            
             that._data.store=res.data[0]
            //  console.log(that._data.store)
         })
        //  console.log(this.$route.params)
     },
      methods:{
          godetail(item){
              console.log(item.goodsID)
              this.$router.push({path:'/detail',query:{goodsid:item.goodsID}});
          },
          libt(index){

            //   console.log(this._data.listyle)
              this._data.listyle.forEach(function(item){
                  item.class=""
              })
              this._data.listyle[index].class="line"
            //   window.scroll=0.5+"rem"
              let that=this
              let px=this._data.listyle[index].px
         axios.get("http://192.168.52.94:8080/hanfugou/"+px+"ShowStore?sid="+this.$route.params.storeId).then(function(res){
             console.log(res.data)
            
             that._data.store=res.data[0];
            //  console.log(that._data.store)
         })

          }
      },
     mounted() {


        //  service.getStoreDetail(this.$route.params.storeId).then((res) => {
        //     console.log(res.data)
        //  }).catch((err) => {
        //      console.log(err)
        //  })
     }
    
}
</script>
<style store>
    .wrap{
        background: white;
        overflow: hidden;
    }
    .inp{
        text-align: center;
        background:#f4f4f4;
        width: 7.1rem;
        height: 0.8rem;
        margin: 0.2rem 0.2rem;
        line-height: 0.8rem;
            color: #999999;
    }
    .store{
        text-align: center;
        /* margin-bottom: 0.2rem; */
        /* height: 2rem; */
    }
    .solid{
        margin-top: 1rem;
        border-top: 0.16rem solid #f4f4f4;
    }
    .store img{
        display: inline;
        border: 1px solid black;
        width: 1rem;
        height: 1rem;
    }
    .store h3{
        font-weight: normal;
    }
    .store p{
        color: #999999
    }
    .shoplist{
        /* margin-top: 0.2rem; */
        /* padding-top: 0.2rem; */
    }
    
    .shoplist>h3{
        padding: 0.2rem;
        font-weight: 100;
        color: #ff6699;
        text-align: center;
    }
    .shoplist ul{
        display: flex;
        justify-content: space-around;
    }
    .shoplist ul li{
        padding:0 0.3rem ;
        padding-bottom: 0.1rem;
        
        
        list-style: none;
    }
    .line{
        border-bottom: 4px solid#ff6699;
    }
    .shoplist .listimg  {
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
         padding: 0.2rem;
        color: #ff6699;
    }
    .shoplist .img h3 i{
        float: right;
        font-size: 0.25rem;
         color: #999999;
         padding-top: 0.1rem;
         padding-right:0.5rem ;
    }
    .shoplist .img p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /* line-height: 1;     */
        /* max-height: 25px; */
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        padding-bottom: 0.05rem;

    }
    .shoplist .img img{
        width: 3.7rem;
        height: 4rem;
        /* float: left; */
    }
</style>