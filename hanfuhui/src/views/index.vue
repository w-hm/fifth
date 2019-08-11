<template>
    <div>
        <div class="header">
            <router-link to="/search" class="btn" tag="div"> 
                <img src="https://m.hanfugou.com/Image/icon_search_gray.png" alt="" style="width:16px;height:16px;  "/>
                <div class="content">搜索萌物、商家</div>
            </router-link>
        </div>

        <div class="classify">
            <ul class="classify_ul">     
                <div>                  
                    <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>齐胸</span>
                </div>    
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_beizi.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>褙子</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_jiaoling.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>交领襦裙</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_duijing.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>对襟襦裙</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_aoqun.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>袄裙</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_zhoubian.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>配饰周边</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_hanyuansu.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>汉元素</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_more.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>全部分类</span>
                </div>                                 
            </ul>
        </div>

        <div class="nav_list">
            <router-link class="brand" tag="div" to="/brand">
                <img src="https://m.hanfugou.com/Image/nav_shop.png" alt="" style="width:43px;height:40px;"/>
                <span>品牌馆</span>
            </router-link>
            <router-link class="two_hand" tag="div" to="/twohand">
                <img src="https://m.hanfugou.com/Image/nav_fleas.png" alt="" style="width:43px;height:40px;"/>
                <span>二手铺</span>
            </router-link>
        </div>

        <div class="footer">
            <router-link class="shopping" tag="div" to="/shoppingcart">
                <img src="https://m.hanfugou.com/Image/icon_u_cart.png?v=1" alt="" style="width:32px;height:32px;"/>
                <span>购物车</span>
            </router-link>
            <router-link class="mine" tag="div" to="/mine">
                 <img src="https://m.hanfugou.com/Image/icon_user_def.png?v=1" alt="" style="width:32px;height:32px;"/>
                <span>个人中心</span>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"index"
}
</script>
<style scoped>
    .footer{
        display: flex;
        position: fixed;
        left: 0;
        bottom:0;
        color: grey;
        width: 100%;
        height: 60px;
        border-top:1px solid lightgray;                                                                                                                                                                                                                                                                                                                                                                                                              
        padding: 10px 0;
        
    }
    .footer img{
        margin-right: 5px;
    }
    .shopping{
        flex: 1;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right:1px solid lightgray;
    }
    .mine{
        flex: 1;
         padding: 10px 0;
         display: flex;
        justify-content: center;
        align-items: center;
    }


    .header{
        width: 100%;
        height: 60px;
        padding: 10px 20px;   
        border-bottom:1px solid lightgrey;    
    }
    .btn{
        width: 100%;
        height: 100%;
        background-color:#f4f4f4;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: grey;
    }
    .header img{
        margin-right: 8px;
    }


    .classify{
        border-bottom:1px solid lightgray;
        padding-bottom:15px; 
    }
    .classify_ul{
        display: flex;
        flex-wrap: wrap;
    }
    .classify_ul div{
        width: 25%;
        height: 90px;
        display: flex;
        flex-direction: column;    
        justify-content: space-between; 
        align-items: center;    
        color:grey;
        margin-top: 20px;
    }
   

    .nav_list{
        padding:10px 0;
        display: flex;
        border-bottom:1px solid #f8f8f8;
    }
    .nav_list span{
        margin-left: 8px;
        color:grey;
    }
    .nav_list .brand{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        padding:10px 0;
        border-right:1px solid lightgrey;
    }
    .nav_list .two_hand{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        padding:10px 0;
    }

</style>

