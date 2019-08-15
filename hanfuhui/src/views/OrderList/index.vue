<template>
<div class="wrap">
        <div class="change">
             <router-link v-if="true" tag="div" to="/address" class="add_address" >
                <img src="https://m.hanfugou.com/Image/btn_edit_red.png?v=1" alt="" style="width:0.47rem;height:0.47rem;">
                <span>添加收货地址</span>
            </router-link>
             <router-link v-else tag="div" to="" class="address_con" >
                <div class="left">
                    <div class="people">
                        <span>收件人：问问</span>
                        <span class="tel">电话：12365467483</span>      
                    </div>
                    <div class="post_add">
                        收件地址：俄违 法为 罚恶风为
                    </div>
                </div>
                
                <span class="right">></span>
            </router-link>
        </div>
       
        <div class="stripe">
            <img src="https://m.hanfugou.com/Image/bor_address.png?v=1" alt="" style="height:0.17rem;">
            <img src="https://m.hanfugou.com/Image/bor_address.png?v=1" alt="" style="height:0.17rem;">
            <img src="https://m.hanfugou.com/Image/bor_address.png?v=1" alt="" style="height:0.17rem;">
            <img src="https://m.hanfugou.com/Image/bor_address.png?v=1" alt="" style="height:0.17rem;">
            <img src="https://m.hanfugou.com/Image/bor_address.png?v=1" alt="" style="height:0.17rem;">
        </div>
        <div class="main">
            <span class="title">流烟昔泠</span>
            <div class="product">
                <img src="http://pic.hanfugou.com/web/2019/6/13/18/f25c90f13de942a5ba7c9e7f8b35e7c5.jpg_150x150.jpg" alt="" style="width:2rem;height:1.8rem;">
                <div class="pro_detail">
                    <span class="desc">【流烟昔泠-暮星】春夏传统汉服女装星象云纹刺绣齐胸襦裙套装</span>
                    <span class="style">暮星套装 9月10号发货,L</span>
                    <div class="pre_num">
                        <span class="price">¥ 398.00</span>
                        <span class="num">x1</span>
                    </div>
                </div>
            </div>
            <div class="post">
                <span class="po_name">运费</span>
                <span class="po_price">+0.00</span>
            </div>
            <div class="total">
                <span class="total_name">小计：</span>
                <span class="total_price">¥ 398.00</span>
            </div>
        </div>

        <div class="tabbar">
            <div class="pay">
                实付款：<span> ¥</span> 
            </div>
            <router-link  tag="div" to="/payment" class="commit">
                提交订单
            </router-link>
        </div>

</div>
</template>
<script>
export default {
    name:"OrderList"
}
</script>
<style scoped>
    .wrap .add_address{
        display: flex;
        width: 100%;
        height:1.6rem;
        background-color: #fff;    
        justify-content: center;
        align-items: center;    
    }
    .wrap .add_address span{
        color: #ff4466;
        padding-left:0.15rem;
        font-size: 0.33rem;
    }
     .wrap .address_con{
        display: flex;
        width: 100%;
        height:1.6rem;
        background-color: #fff;    
        justify-content: space-between;
        align-items: center;  
        padding:0 0.2rem;  
    }
    .wrap .address_con .right{
        color:grey;
    }
    .wrap .address_con .left .people{
        width: 100%;
        display: flex;
    }
    .wrap .address_con .left .post_add{
        padding-top:0.1rem;
        color: grey;
    }   
    .wrap .address_con .left .people .tel{
        padding-left: 2rem;
    }
    .stripe{
        padding: 0.1rem 0;
        display: flex;
    }
    .main{
        
        display: flex;
        background-color: #fff;
        flex-direction: column;
    }
    .main .title{
        width: 100%;
        padding:0.3rem 0.2rem;
    }
    .main .product{
        display: flex;;
        padding: 0 0.2rem ;
        border-bottom: 1px solid lightgrey;
    }
    .main .product img{
        padding-right: 0.2rem;
    }
    .product .pro_detail{
        display: flex;
        flex-direction:column; 
        width: 5rem;;
    }
    .main .product .pro_detail .desc{            
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
    }
    .main .product .pro_detail .style{
        color:grey;
        padding:0.2rem 0.1rem;
    }
    .main .product .pro_detail .pre_num{
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.1rem;
    }
    .main .product .pro_detail .pre_num .price{
        color: #ff4466;
        font-size: 0.35rem;
    }

    .main .post{
        padding:0.4rem 0.2rem;
        border-bottom: 1px solid lightgrey;
        display: flex;
        justify-content: space-between;
    }
    .main .post .po_name{
        color: grey;
    }
     .main .post .po_price{
        color: #ff4466;
    }
    .main .total{
        display: flex;
        justify-content: flex-end;
        padding:0.4rem 0.2rem;
        align-items: center;
    }
    .main .total .total_name{
        color: grey;
    }
     .main .total .total_price{
        color: #ff4466;
        font-size: 0.35rem;
    }

    .wrap  .tabbar{
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        box-shadow: 0 -1px 20px lightgrey;
    }
    .wrap  .tabbar .pay{
        display: flex;
        flex:1;
        padding: 0.4rem;
    }
    .wrap  .tabbar .pay span{
        color: #ff4466;
    }
    .wrap  .tabbar .commit{
        width: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: #ff4466;
    }
</style>