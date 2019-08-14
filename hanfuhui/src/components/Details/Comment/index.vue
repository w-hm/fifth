<template>
    <div class="comment">
        <span class="sp_comment">商品评论（191）</span>
        <div class="user">
            <img src="https://pic.hanfugou.com/web/2018/12/23/21/af944065e8b1453f8b9d7cf7355ecb43.jpeg_50x50.jpg" alt="">
            <span>zxl11111</span>                   
        </div>
        <div class="content">
            阿里斯顿购房首付汉服说的反倒是厚积薄发稻盛和夫吧私
        </div>
        <div class="style">
            <span>2019-08-13</span>
            <span>上襦【红】</span>
            <span>齐胸襦裙【黑】</span>
            <span>付款后30天发货</span>,
            <span>L</span>
        </div>
        <div class="look">
            <span class="look_com">查看全部评论</span>
        </div>
    </div>
</template>
<script>
export default {
        name:"Comment"
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
    padding-right: 0.1rem;
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