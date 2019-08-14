<template>
<div >
    <div class="comment" v-for="details of detailList" :key="details.commentGoodsId">
        <span class="sp_comment">商品评论（{{details.commentNum}}）</span>
        <div class="user">
            <img src="https://pic.hanfugou.com/web/2018/12/23/21/af944065e8b1453f8b9d7cf7355ecb43.jpeg_50x50.jpg" alt="">
            <span>zxl11111</span>                   
        </div>
        <div class="content">
            {{details.commentContent}}
        </div>
        <div class="style" v-for="style of styleList" :key="style.goodsStoreID">
            <span>2019-08-13</span>
            <span>{{style.goodsType}}</span>
            <span>{{style.goodsStyle}}</span>
            <span>{{style.goodsSize}}</span>
        </div>
        <div class="look">
            <span class="look_com">查看全部评论</span>
        </div>
    </div>
    
</div>
</template>
<script>
import axios from "axios"
export default {
        name:"Comment",
        data(){
        return {
            detailList:[],
            styleList:[]
        }
    },
      mounted(){
        //   console.log(this.$route.query.id)
        axios.get("http://192.168.52.93:8090/hanfugou/goodsBuy?goodsId="+this.$route.query.goodsId).then((res)=>{
            console.log()
            this.detailList=res.data[0].comments
            this.styleList=res.data
        })
    } 
}
</script>
<style scoped>

.comment {
    margin: 0.2rem 0;
    background-color: #fff;
    padding: 0.3rem;
    display: flex;
    flex-direction: column;
}
.comment .sp_comment{
    color: grey;
    margin-bottom: 0.2rem;
}
.comment .user{
    display: flex;
    padding-bottom: 0.2rem;
    color: grey;
}
.comment .user img{
    margin-right: 0.2rem;
    border-radius: 50%;
}
.comment .style{
    padding: 0.2rem 0;
    font-size: 0.25rem;
    color: grey;
}
.comment .style span{
    padding-right: 0.3rem;
}
.comment .look{
    display: flex;
    justify-content: center;
    align-items: center;
}
.comment .look span{ 
    border:1px solid grey;
    margin:0.3rem 0;
    width: 3rem;
    height: 0.8rem;
    border-radius: 50px;
    font-size: 0.27rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>