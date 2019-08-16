<template>
<div>
     <div class="pro_shows" >
                <span>商品展示</span>
                <div class="pic" v-for="details of detailList" :key="details.goodsID">
                     <img :src="details.goodsShow" alt="">
                </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
        name:"Shows",
          data(){
            return {
                detailList:[]
            }
    },
      mounted(){
        //   console.log(this.$route.query.goodsId)
        axios.get("/hanfugou/goodsBuy?goodsId="+this.$route.query.goodsId).then((res)=>{
            console.log(res)
            this.detailList=res.data
        })
    } 
}
</script>
<style scoped>
.pro_shows{
        margin-top:0.2rem;       
        background-color: #fff;
        color: grey;
        display: flex;
        flex-direction: column;
    }
    .pro_shows span{
        padding: 0.3rem;
    }
    .pro_shows img{
        width: 100%;
    }
</style>