<template>
    <div>
    <div class="pay">
            <span>支付</span>
            <div class="pay_style">
                <div class="wx">
                    <span class="iconfont icon-weixin"></span>
                    <span>微信支付</span>
                </div>
                <div class="zfb">
                    <span class="iconfont icon-zhifubao"></span>
                    <span>支付宝</span>
                </div>
                <div class="hb">
                    <span class="iconfont icon-huabei"></span>
                    <span>花呗</span>
                </div>
            </div>
        </div>

        <div class="select" onclick="selected">
            <span>选择 颜色 尺码</span>
            <span class="you">></span>
        </div>

        <div class="user" v-for="details of detailList" :key="details.storeId">
            <div class="title">
                <div class="user_name">
                    <img :src="details.storeIcon" alt="" style="width:1rem;height:1rem;" >
                    <span>{{details.storeName}}</span>
                </div>
                <div class="shop">
                    <div class="six">
                        <span>{{details.storeGoodsTotal}}</span>
                        <span class="sp">商品</span>
                    </div>
                    <div class="fans">
                        <span>{{details.storeFocusNumber}}</span>
                        <span class="fs">粉丝</span>
                    </div>
                </div>
            </div>
            <div class="con">
                    <div class="attent">
                        <img src="https://m.hanfugou.com/Image/icon_followshop.png?v=1" alt="" style="width:0.4rem;height:0.4rem;">
                        <span>关注店铺</span>
                    </div>
                    <div class="entry">
                        <img src="https://m.hanfugou.com/Image/icon_entershop.png?v=1" alt="" style="width:0.4rem;height:0.4rem;">
                        <span>进入店铺</span>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
        name:"Pay",
      data(){
        return {
            detailList:[]
        }
    },
      mounted(){
        //   console.log(this.$route.query.id)
        axios.get("http://192.168.52.93:8090/hanfugou/goodsBuy?goodsId="+this.$route.query.goodsId).then((res)=>{
            console.log(res)
            this.detailList=res.data
        })
    } 
}
</script>
<style scoped>
.user{
    display: flex;
    flex-direction: column;
    padding: 0 0.3rem 0.2rem;
    background-color: #fff;
}
.user .title{
    display: flex;
    padding: 0.3rem 0;
    justify-content: space-between;
}
.user .title .user_name img{
    border-radius:10px;
    margin-right: 0.2rem;
}
.user .title .user_name{
    display: flex;
    justify-content: center;
    align-items: center;
    color:pink;
}
.user .title .shop{
    display: flex;
}
.user .title .shop .fs,.user .title .shop .sp{
    color:grey;
}
.user .title .shop .six,.user .title .shop .fans{
    display: flex;
    flex-direction: column;
    padding: 0 0.3rem;
    margin: 0.1rem 0;
    justify-content: center;
    align-items: center;
}
.user .title .shop .six{
   border-right: 1px solid lightgrey;
}
.user .con{
    display: flex;
    justify-content: space-around;
    padding:0.4rem 0;
}
.user .con .attent,.user .con .entry{
   border:1px solid lightgrey;
   width: 2.7rem;
   height:0.8rem;
   border-radius: 50px;
   color: grey;
   display: flex;
   justify-content: center;
   align-items: center;
}
.user .con .attent img,.user .con .entry img{
    margin-right: 0.2rem;
}


    .select{
        display: flex;
        margin:0.2rem 0;
        background-color: #fff;
        justify-content: space-between;
        padding: 0.3rem;
    }
    .select .you{
        color:lightgrey;
    }


   .pay{
       display: flex;
       margin: 0.2rem 0 0;
       background-color: #fff;
       padding: 0.3rem 0 0.3rem 0.3rem ;
       justify-content: space-between;
   }
.pay_style{
    display: flex;

}
.pay_style .iconfont{
    font-size: 0.45rem;
    padding-right: 0.05rem;
}
.pay_style .wx,.pay_style .zfb,.pay_style .hb{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.2rem;
}
.pay_style .wx .iconfont{
    color:#36b34d;
}
.pay_style .zfb .iconfont{
    color:#00aaef;
}
.pay_style .hb .iconfont{
    color:#00aaef;
}
</style>