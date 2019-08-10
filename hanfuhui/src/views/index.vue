<template>
    <div>
        <div class="header">
            <div class="btn">
                <div class="icon"></div>
                <div class="content">搜索萌物、商家</div>
            </div>
        </div>

        <div class="classify">
            <ul class="classify_ul">     
                <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>齐胸</span>
                </div>    
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>褙衣</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>交领襦裙</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>对襟襦裙</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>袄裙</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>配饰周边</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>汉元素</span>
                </div>  
                 <div>
                    <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt="" style="width:60px;height:60px;">
                    <span>全部分类</span>
                </div>                                 
            </ul>
        </div>

        <div class="nav_list">
            <div class="logo">品牌馆</div>
            <div class="two_hand">二手铺</div>
        </div>

        <div class="footer">
            <div class="shopping">购物车</div>
            <div class="mine">个人中心</div>
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


    .classify{
        border-bottom:1px solid lightgray;
        padding: 20px;
    }
    .classify_ul{
        display: flex;
        flex-wrap: wrap;
    }
    .classify_ul li{
        width: 25%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        color:grey;
    }

    .nav_list{
        padding:10px 0;
        display: flex;
        border-bottom:1px solid #f8f8f8;
    }
    .nav_list .logo{
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

