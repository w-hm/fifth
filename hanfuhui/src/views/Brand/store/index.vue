<template>
    <div class="wrap">
        <div class="inp">
           <span></span>店内收搜
        </div>
        <div class="store">
            <img src="https://pic.hanfugou.com/web/2019/2/26/22/833248872fcf419c9e7f4a8b1160cc51.jpeg_200x200.jpg" alt="">
            <h3>池夏</h3>
            <p>已关注</p>
            <!-- <div v-for="(item,index) in 3" :key="index">{{item}}{{index}}</div> -->
        </div>
    </div>
</template>
<script>
import service from '../../../service/service'
export default {
    name:"store",
    data:function(){
        return {

        }
    },
     created(){
         console.log(this.$route.params)
     },
     mounted() {
         service.getStoreDetail(this.$route.params.storeId).then((res) => {
            console.log(res.data)
         }).catch((err) => {
             console.log(err)
         })
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
        /* height: 2rem; */
    }
    .store img{
        border: 1px solid black
    }
    .store h3{
        font-weight: normal;
    }
    .store p{
        color: #999999
    }
</style>