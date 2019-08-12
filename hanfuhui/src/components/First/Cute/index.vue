<template>
    <div class="cute">
        <div class="title">
            <img src="https://m.hanfugou.com/Image/bor_title_2.png" alt="">
            <span>精选萌物</span>
            <img src="https://m.hanfugou.com/Image/bor_title_2.png" alt="">
        </div>
        <div class="pic_wrap">
            <div class="pic" v-for="cute of cuteList" :key="cute.id">
                <div class="main">
                    <img :src="cute.imgUrl" alt="" style="width:3.7rem;height:3.7rem;">
                    <span>{{cute.desc}}</span>
                </div>
               <div class="address">
                   <span>{{cute.name}}</span>
                   <span>{{cute.address}}</span>
               </div>
               <div class="price_wrap">
                   ¥ <span class="price">{{cute.price}}</span>
                   <span class="glass">{{cute.count}}</span>
               </div>
            </div>      
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Cute",
    data(){
        return {
            cuteList:[]
        }
    },
    mounted(){
        axios.get("/api/getcute").then((res)=>{
            console.log(res)
            this.cuteList=res.data.cute
        })
    }
}
</script>
<style scoped>
    .cute .title{
        padding: 0.4rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: grey;
    }
    .cute .title span{
        padding:0 0.5rem;
    }
    .cute .pic_wrap{
        width:100%;
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
    }
    .cute .pic_wrap .pic{
        background-color: #fff;
        width:3.7rem;
    }
    .cute .pic_wrap .main{
        display: flex;
        flex-direction: column;
    }
    .cute .pic_wrap .main span{
        padding: 0.2rem 0.2rem;
        font-size: 0.27rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
   .pic_wrap .address{
       display: flex;
       justify-content: space-between;
       padding: 0 0.2rem;
       color: grey;
       font-size: 0.25rem;
   }
   .pic_wrap .price_wrap{
       padding: 0.2rem;
       color:red;
   }
   .pic_wrap .price_wrap .price{
       color: red;
       font-size: 0.4rem;
   }
   .pic_wrap .price_wrap .glass{
       color:grey;
       margin-left: 0.3rem;
       font-size:0.22rem;
   }
</style>