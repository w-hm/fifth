<template>
<div class="wrap">
        <div class="change">
             <router-link v-if="shows" tag="div" to="/address" class="add_address" >
                <img src="https://m.hanfugou.com/Image/btn_edit_red.png?v=1" alt="" style="width:0.47rem;height:0.47rem;">
                <span>添加收货地址</span>
            </router-link>
             <router-link v-else tag="div" to="" class="address_con" >
                <div class="left">
                    <div class="people">
                        <span>收件人：{{all_address.userId}}</span>
                        <span class="tel">电话：{{all_address.Tel}}</span>       
                    </div>
                    <div class="post_add">
                        收件地址：{{all_address.province}}  {{all_address.city}}  {{all_address.county}} {{all_address.address}}
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
            <span class="title">{{product_info.storeName}}</span>
            <div class="product">
                <img :src="product_info.goodsPicture" alt="" style="width:2rem;height:1.8rem;">
                <div class="pro_detail">
                    <span class="desc">{{product_info.goodsName}}</span>
                    <span class="style">{{product_info.goodsStyle}}  {{product_info.goodsSize}}</span>
                    <div class="pre_num">
                        <span class="price">¥ {{product_info.goodsPrice}}</span>
                        <span class="num">x{{product_info.orderBuyNumber}}</span>
                    </div>
                </div>
            </div>
            <div class="post">
                <span class="po_name">运费</span>
                <span class="po_price">+0.00</span>
            </div>
            <div class="total">
                <span class="total_name">小计：</span>
                <span class="total_price">¥ {{product_info.goodsPrice}}</span>
            </div>
        </div>

        <div class="tabbar">
            <div class="pay">
                实付款：<span> {{product_info.goodsPrice}}¥</span> 
            </div>
            <div  @click="commit" class="commit">
                提交订单
            </div>
        </div>
        <div class="box" v-if="boxs">
            请填写收货地址，听见了没有！
        </div>
</div>
</template>
<script>
import axios from "axios"
export default {
    name:"OrderList",
    

    data(){
        return{
            all_address:[],
            product_info:[],
            shows:true,
            boxs:false,
        }
    },
    
    created(){
       
    },
    mounted(){        
        
    //    console.log(this.all_address)
        axios.get("/hanfugou/orderQueryAllByUserIdAndGoodsId?userId="+sessionStorage.userid+"&goodsId="+this.$route.query.goodsId).then((res)=>{
            this.product_info=res.data[0]
            // console.log(this.product_info)
        })  
        // console.log(this.all_address)
       if(sessionStorage.all_address){
        //    console.log(sessionStorage.all_address)
           this.shows=false
         this.all_address=JSON.parse(sessionStorage.all_address)
       } 
    },
    methods:{
        
        commit(){
            
            if(this.shows){
                this.boxs=true
                // console.log(!this.boxs)
                console.log(this.boxs)
                setTimeout(()=>{
                    this.boxs=false
                },1000)
            }else{
                this.$router.push({path:"/payment"})
            }
        },
        
    }

}
</script>
<style scoped>
.wrap{
    position: relative;
}
.wrap .box{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5rem;
    height: 3rem;
    margin-left: -2.5rem;
    margin-top: 1.5rem;
    background: rgba(0,0,0,0.4);
    color: #fff;
    font-size: 0.35rem;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
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
        width: 6.8rem;
        display: flex;
        justify-content: space-between;
        
    }
    .wrap .address_con .left .post_add{
        padding-top:0.1rem;
        color: grey;
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