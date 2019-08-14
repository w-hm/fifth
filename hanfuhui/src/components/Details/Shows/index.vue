<template>
     <div class="pro_shows">
                <span>商品展示</span>
                <div class="pic">
                <img src="https://pic.hanfugou.com/web/2019/5/12/12/460bba81ec9544aebb6bdf566d4df7a4.jpg_700xshop.jpg" alt="">
                <img src="https://pic.hanfugou.com/web/2019/5/12/12/e7f5c644014541368cc61cde602ffb78.jpg_700xshop.jpg" alt="">
                <img src="https://pic.hanfugou.com/web/2019/5/12/12/3986dbc421594d9e815154e18271735f.jpg_700xshop.jpg" alt="">
                <img src="https://pic.hanfugou.com/web/2019/5/12/12/1e3547dbc5f74ca8b1f55aea72f22c10.jpg_700xshop.jpg" alt="">
                </div>
        </div>
</template>
<script>
export default {
        name:"Shows"
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