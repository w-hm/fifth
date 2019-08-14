<template>
      <div class="content">
            <div class="pic_wrap">
                <div class="pic">
                    <img src="https://pic.hanfugou.com/web/2019/6/13/17/9fa69e74a1194ef485721b04b885902b.jpg_700x700.jpg" alt="" style="width:100%;">
                </div>
            </div>
            <div class="title">
                【呦呦鹿鸣】 (韩十一）原创设计传统汉服 烫金 齐胸襦裙齐腰襦裙
            </div>
            <div class="price">
                ¥<span>79.0-99.0</span>
            </div>
            
            <div class="desc">
                <span class="yf">邮费：包邮</span>
                <span class="kc">库存 25574</span>
                <span class="glass">9004 人已种草</span>
            </div>
            <div class="post">
                <div class="shang">
                        <div class="fh">
                            <span class="iconfont icon-duihao"></span>
                            <span>45天内发货</span>
                        </div>
                         <div class="zp">
                            <span class="iconfont icon-duihao"></span>
                            <span>正品保证</span>
                        </div>
                </div>
                <div class="xia">
                    <span class="iconfont icon-duihao"></span>
                    <span>不支持七天无理由退货</span>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name:"Content"
}
</script>
<style scoped>
    .content{
       display: flex;
       flex:1;
       flex-direction: column;
       background-color: #fff;
       height: 100%;
   }
   .content .title{
       color: grey;
       padding:0.2rem 0.3rem;
   }
   .content .price{
       color:red;
       padding: 0 0.3rem 0.2rem;
   }
   .content .price span{
       font-size: 0.45rem;
   }
   .content .desc{
       color: grey;
       margin: 0 0.3rem;
        display: flex;
        justify-content: space-between;
       font-size: 0.28rem;
       border-bottom: 1px solid lightgrey;
   }
   .content .desc span{
       padding-bottom:0.2rem; 
   }
   .content .post .iconfont{
       font-size: 0.35rem;
       padding-right: 0.1rem;
   }
   .content .post  .shang{
       display: flex;
       padding:0.3rem;
   }
   .content .post  .shang .fh{
       padding-right: 0.6rem;
       
   }
   .content .post  .shang  .iconfont{
       color:#ff4466;
   }
   .content .post  .xia  {
       color:grey;
       padding: 0 0.3rem 0.3rem;
   }
</style>