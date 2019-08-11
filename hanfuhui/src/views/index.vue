<template>
    <div class="wrap">
        <div class="header">
            <router-link to="/search" class="btn" tag="div"> 
                <img src="https://m.hanfugou.com/Image/icon_search_gray.png" alt="" style="width:0.3rem;height:0.3rem;  "/>
                <div class="content">搜索萌物、商家</div>
            </router-link>
        </div>

        <div class="classify">
            <ul class="classify_ul">     
                <div>                  
                    <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt="" style="width:0.6rem;height:0.6rem;">
                    <span>齐胸</span>
                </div>    
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_beizi.png?v=3" alt="" style="width:0.6rem;height:0.6rem;">
                    <span>褙子</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_jiaoling.png?v=3" alt="" style="width:0.6rem;height:0.6rem;">
                    <span>交领襦裙</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_duijing.png?v=3" alt="" style="width:0.6rem;height:0.6rem;">
                    <span>对襟襦裙</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_aoqun.png?v=3" alt="" style="width:0.6rem;height:0.6rem;">
                    <span>袄裙</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_zhoubian.png?v=3" alt="" style="width:0.6rem;height:0.6rem;">
                    <span>配饰周边</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_hanyuansu.png?v=3" alt="" style="width:0.6rem;height:0.6rem;">
                    <span>汉元素</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_more.png?v=3" alt="" style="width:0.6rem;height:0.6rem;">
                    <span>全部分类</span>
                </div>                                 
            </ul>
        </div>

        <div class="nav_list">
            <router-link class="brand" tag="div" to="/brand">
                <img src="https://m.hanfugou.com/Image/nav_shop.png" alt="" style="width:0.43rem;height:0.4rem;"/>
                <span>品牌馆</span>
            </router-link>
            <router-link class="two_hand" tag="div" to="/twohand">
                <img src="https://m.hanfugou.com/Image/nav_fleas.png" alt="" style="width:0.43rem;height:0.4rem;"/>
                <span>二手铺</span>
            </router-link>
        </div>

        <div class="today">
            <div class="title">
                <div class="time">
                    <img src="https://m.hanfugou.com/Image/icon_seckill_title.png" alt="" style="width:0.7rem;height:0.22rem;" />
                    <span class="countDown">
                        0天00时31分45秒 后开始
                    </span>
                </div>
                <div class="more">
                    <span>查看更多</span>
                    <img src="https://m.hanfugou.com/Image/icon_more.png" alt="" style="width:16px;height:16px;"/>
                </div>
            </div>
            <div class="pic"></div>
        </div>

        <div class="footer">
            <router-link class="shopping" tag="div" to="/shoppingcart">
                <img src="https://m.hanfugou.com/Image/icon_u_cart.png?v=1" alt="" style="width:0.32rem;height:0.32rem;"/>
                <span>购物车</span>
            </router-link>
            <router-link class="mine" tag="div" to="/mine">
                 <img src="https://m.hanfugou.com/Image/icon_user_def.png?v=1" alt="" style="width:0.32rem;height:0.32rem;"/>
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
<style lang="css" scoped>
   
    .title{
        width:100%;
        margin-top:0.15rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 0.15rem;
    }   
    .today .time{
        display: flex;
        font-size: 0.12rem;  
        justify-content: center;
        align-items: center;
    }
    .today .more{  
        font-size: 0.14rem;
         color: grey;
    }
    .today .more span{
        margin-right: 0.05rem;
    }



    .footer{
        display: flex;
        position: fixed;
        left: 0;
        bottom:0;
        color: grey;
        width: 100%;
        height: 0.6rem;
        border-top:1px solid lightgray;                                                                                                                                                                                                                                                                                                                                                                                                        
        padding: 0.1rem 0;
        background-color: white;
    }
    .footer img{
        margin-right: 0.05rem;
    }
    .shopping{
        flex: 1;
        padding: 0.1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right:1px solid lightgray;
    }
    .mine{
        flex: 1;
         padding: 0.1rem 0;
         display: flex;
        justify-content: center;
        align-items: center;
    }


    .header{
        width: 100%;
        height: 1.2rem;
        padding: 0.2rem 0.2rem;   
        border-bottom:1px solid lightgrey;  
        background-color: white;  
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
        margin-right: 0.13rem;
    }


    .classify{
        border-bottom:1px solid lightgray;
        padding-bottom:0.15rem; 
        background-color: white;
    }
    .classify_ul{
        display: flex;
        flex-wrap: wrap;
    }
    .classify_ul div{
        width: 25%;
        height: 0.9rem;
        display: flex;
        flex-direction: column;    
        justify-content: space-between; 
        align-items: center;    
        color:grey;
        margin-top: 0.2rem;
    }
   

    .nav_list{
        padding:0.1rem 0;
        display: flex;
        border-bottom:1px solid #f8f8f8;
        background-color: white;
    }
    .nav_list span{
        margin-left: 0.08rem;
        color:grey;
    }
    .nav_list .brand{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        padding:0.1rem 0;
        border-right:1px solid lightgrey;
    }
    .nav_list .two_hand{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        padding:0.1rem 0;
    }

</style>

