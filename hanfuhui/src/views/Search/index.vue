
<template>
<div class="wrap">
    <div  class="title" >
        <div>
             <input type="text">
        </div>
<<<<<<< HEAD
         <button @click="search()">搜索</button>
=======
         <button>搜索</button>
>>>>>>> fb87072751e8c5442cd5b98fa40c1e906f16d2a1
    </div>
        <div class="shoplist">
            <ul>
                <li v-on:click="libt(index)" :class="item.class" v-for="(item,index) in listyle" :key="index">{{item.tp}}</li>
            </ul>

            <div class="listimg">
                <div class="img" v-for="(item,index) in store" :key="index" >
                    <img :src="item.goodsPicture" alt="">
                    <p>{{item.goodsName}}</p>
                    <h3><span>￥</span>{{item.goodsPrice}}</h3>
                </div>
            </div>

         </div>
       </div>
</template>
<script>
   let axios=require("axios");
export default {
    name:"Search",
      data:function(){
        return {
            store:"",
            listyle:[
                {tp:"综合",class:"line"},  //默认选择综合
                 {tp:"最新",class:""},
                  {tp:"种草",class:""},
                   {tp:"价格↑",class:""},
                    {tp:"价格↓",class:""}
            ]
        }
    },
    


     created(){
         let that=this;
         console.log(this.$route.params.storeId)
         axios.get("http://192.168.52.90:8080/hanfugou/InChest?goodsType=qx").then(function(res){
             console.log(res.data)
             that._data.store=res.data;
             console.log(that._data.store)
         })
     },
      methods:{
          libt(index){
            //   console.log(this._data.listyle)
              this._data.listyle.forEach(function(item){
                  item.class=""
              })
              this._data.listyle[index].class="special"
            //   window.scroll=0.5+"rem"

          },
          Search(){
              
          }
      },

}
</script>
<style scoped>
 .wrap{
        background: white;
        overflow: hidden;
    }
    .title{
        position: fixed;
        width: 100%;
        height: 1.3rem;
        background-color: white;
    }
       input{
           position: fixed;
            width: 75%;
            height:0.8rem ;
            font-size: 0.3rem;
            margin: 0.3rem;
            background: #eee;
            border-radius:0.15rem;
            
       }
       button{
            position: fixed;
             right:0.3rem;
             top:0.3rem;
            width: 1rem;
            height: 0.8rem;
            background:#ff4466;
            font-size: 0.3rem;
            color: #eee;
             border-radius:0.15rem;
       }

    .special{
        border-bottom: 3px solid #ff4466 ;
        color: #ff4466;
        font-weight:bold;
    }

     .shoplist>h3{
        padding: 0.2rem;
        font-weight: 100;
        color: #ff6699;
        text-align: center;
    }
    .shoplist ul{
        background: white;
        width: 100%;
        position:fixed;
        top:1.3rem;
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
    }
    .shoplist .listimg  {
        margin-top: 2rem;
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
