<template>
    <div class="hotsale" >
        <div class="title">
            <img src="https://m.hanfugou.com/Image/bor_title_1_left.png" alt="">
            <span>本周热卖</span>
            <img src="https://m.hanfugou.com/Image/bor_title_1_right.png" alt="">
        </div>
        
        <div class="pic_wrap" >
            <router-link class="pic" tag="div" :to="{name:'details',query:{goodsId:hot.goodsID}}" v-for="hot of hotList" :key="hot.goodsID" >
                <img :src="hot.goodsPicture" alt="" style="width:2.2rem;height:2.2rem;">
                <span class="decs">{{hot.goodsName}}</span>
                <span class="price">¥{{hot.goodsPrice.toFixed(2)}}</span>
            </router-link>
        </div>                    
             
          
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Hotsale",
    data(){
        return {
            hotList:[]
        }
    },
    mounted(){
        axios.get("/hanfugou/BzrmGoods").then((res)=>{
            console.log(res)
            this.hotList=res.data
        })
    // console.log(this.hotList)
       
    }
}
</script>
<style scoped>
    .hotsale{
        margin-top: 0.4rem;
        background-color: #fff;
    }
    .hotsale .title{ 
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.45rem 0;
    }
    .hotsale .title span{
        color: grey;
        padding: 0 0.8rem;
    }

    .hotsale .pic{
        display: flex;
        flex-direction: column;       
        width: 2.2rem;
        padding-bottom: 0.3rem;
    }
    .hotsale .pic span{
        margin-top: 0.15rem;   
        padding-left: 0.12rem;  
    }
    .hotsale .pic .decs{
            color: grey;
            font-size: 0.25rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            
    }
    .hotsale .pic .price{
        color:red;
    }
    .pic_wrap{
       
        flex-wrap: wrap;
        padding:0 0.3rem;
        display: flex;
        justify-content: space-between;
        
    }
</style>