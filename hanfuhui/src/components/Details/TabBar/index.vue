<template>
     <div class="footer">
            <div class="three">
                <div class="sq">
                    <img src="https://m.hanfugou.com/Image/icon_im.png?v=1" alt="" style="width:0.5rem;height:0.4rem;">
                    <span>私敲</span>
                </div>
                  <div class="dp">
                    <img src="https://m.hanfugou.com/Image/icon_shop.png?v=1" alt="" style="width:0.5rem;height:0.4rem;">
                    <span>店铺</span>
                </div>
                  <div class="glass">
                    <img src="https://m.hanfugou.com/Image/icon_save_no.png?v=1" alt="" style="width:0.4rem;height:0.4rem;">
                    <span>种草</span>
                </div>
            </div>

            <div class="join_shop" @click="addShopping">
                加入购物车
            </div>

            <div class="pay">
                立即剁手
            </div>

        </div>
</template>
<script>
export default {
    name:"TabBar",

    data(){
        return {

        }
    },
    mounted(){
        console.log(this.$route.query)
    },
    methods:{
        addShopping(){
          
        }
    }
}
</script>
<style scoped>
     .footer{
        display: flex;
        border-top: 1px solid lightgray;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .footer .three{
         display: flex;
        flex:2;
        padding: 0.2rem 0.3rem;
        justify-content: space-between;
    }
    .footer .three span{
        padding-top: 0.1rem;
    }
    .footer .three .sq,.footer .three .dp,.footer .three .glass{

        margin-left: 0.1rem;
        display: flex;
        flex-direction: column;
        color: grey;
        justify-content: center;
        align-items: center;
    }
     .footer .join_shop, .footer .pay{
        display: flex;
        flex:1;
        padding: 0.2rem;
        background-color: pink;
        color: white;
        justify-content: center;
        align-items: center;
    }
    .footer .pay{
       background-color:#ff4466;
    }
 
</style>