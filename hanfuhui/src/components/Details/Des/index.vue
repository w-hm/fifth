<template>
<div>
     <div class="desc" v-for="details of detailList" :key="details.goodsID">
            <span class="sp_desc">商品描述</span>
                <span class="content">
                      {{details.goodsDescribe}}
                </span>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
        name:"Des",
        data(){
            return {
                detailList:[]
            }
    },
      mounted(){
        //   console.log(this.$route.query.id)
        axios.get("/hanfugou/goodsBuy?goodsId="+this.$route.query.goodsId).then((res)=>{
            console.log(res)
            this.detailList=res.data
        })
    } 
}
</script>
<style scoped>
.desc{
    background-color: #fff;
    display: flex;
    flex-direction: column;
}
.desc .sp_desc{
    padding: 0.3rem;
    color: grey;
}
.desc .content{
    padding: 0 0.3rem 0.3rem;
}
</style>