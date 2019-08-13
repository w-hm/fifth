
<template>
    <div class="wrap">
       <div class="title">
           <ul>
               <li><span><img src="https://m.hanfugou.com/Image/icon_u_atte.png?v=1" alt=""></span> 商城首页</li>
               <li><span><img src="https://m.hanfugou.com/Image/icon_u_cart.png?v=1" alt=""></span> 购物车</li>
               <li><span><img src="https://m.hanfugou.com/Image/icon_user_def.png?v=1" alt=""></span> 个人中心</li>
           </ul>
           <div class="img">
               <img src="https://pic.hanfugou.com/web/2019/7/31/16/926b424e8bec46b4862884d8da8731f0.jpg_700x700.jpg" alt="">
           </div>
           <div class="detail">
               <p>风雪初晴手工古风复原款发钗汉服配饰宫廷发簪珍珠头饰长相思簪子</p>
              <h3><i>￥</i>24.0-39.9</h3>
              <ul>
                  <li>邮费: ￥10.00</li>
                  <li>库存 13</li>
                  <li>78 人种草</li>
              </ul>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:"detail"
}
</script>
<style detail>
    .title{
        

    }
    .title>ul{
        display: flex;
        
    }
    .title>ul>li{
        list-style: none;
        text-align: center;
        flex:1;
        margin: 0.2rem 0;
        color: #555555
    }
    .title>ul>li:nth-child(2){
        border-left: 2px solid #dcdcdc;
        border-right: 2px solid #dcdcdc;
    }
    .title>ul>li img{
        vertical-align: middle
        /* display: inline; */
    }
    .img{
        width: 100%;
    }
    .img img{
        width: 100%;
    }
    .detail{

    }
    .detail p{
        padding: 0.2rem;
        color: #555555;
    }
    .detail h3{
        padding-left: 0.2rem;
        padding-bottom: 0.3rem;
        font-size: 0.4rem;
        color: #ff4466
    }
    .detail ul{
        display: flex;
    }
    .detail ul li{
        list-style: none;
        flex: 1;
        text-align: center;
        color: #555555;
    }
</style>