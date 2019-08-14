<template>
    <div class="header">
            <router-link tag="div" class="main" to="/first">
                <img src="https://m.hanfugou.com/Image/icon_u_atte.png?v=1" alt="" style="width:0.7rem;height:0.7rem;">
                <span>商城主页</span>
            </router-link>
            <div class="shopping">
                <img src="https://m.hanfugou.com/Image/icon_u_cart.png?v=1" alt="" style="width:0.7rem;height:0.7rem;">
                <span>购物车</span>
            </div>
            <div class="mine">
                <img src="https://m.hanfugou.com/Image/icon_user_def.png?v=1" alt="" style="width:0.7rem;height:0.7rem;">
                <span>个人中心</span>
            </div>
        </div>
</template>
<script>
export default {
    name:"Header"
}
</script>
<style scoped>
     .header{
        display: flex;
        padding: 0.3rem 0.1rem;
        border-bottom: 1px solid lightgray;
        width: 100%;
        background-color: #fff;
        position: fixed;
        left: 0;
        top: 0;
    }
    .header .main{
        display: flex;
        flex:1;
        justify-content: center;
        align-items: center;
    }
    .header .shopping{
        display: flex;
        flex:1;
        justify-content: center;
        align-items: center;
        border-right: 1px solid gray;
        border-left: 1px solid gray;
    }
    .header .mine{
        display: flex;
        flex:1;
           justify-content: center;
        align-items: center;
    }
    .header .main span,.header .shopping span,.header .mine span{
        margin-left: 0.1rem;
        color:grey;
    }
   
</style>