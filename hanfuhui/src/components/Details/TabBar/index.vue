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
                  <div class="glass" @click="change">
                    <img :src="glass?url2:url1" alt="" style="width:0.4rem;height:0.4rem;">
                    <span>种草</span>
                </div>
            </div>

            <div class="join_shop" @click="addShopping">
                加入购物车
            </div>

            <div @click="immediate" class="pay">
                立即剁手
            </div>
        <div class="success" v-if="shows">
            {{success}}
        </div>
       
     </div>
</template>
<script>
import axios from "axios"
export default {
    name:"TabBar",

    data(){
        return {
            cancel:false,
            code:"",
            shows:false,
            success:"",
            storeId:"",
            glass:false,
            url1:"https://m.hanfugou.com/Image/icon_save_no.png?v=1",
            url2:"https://m.hanfugou.com/Image/icon_save_yes.png?v=1"
        }
    },
    mounted(){
        // console.log(this.$route)
         axios.get("hanfugou/goodsBuy?goodsId="+this.$route.query.goodsId).then((res)=>{
            // console.log(res.data[0].storeId)
            this.storeId=res.data[0].storeId
        })
      
    },
    methods:{
        addShopping(){          
            if(sessionStorage.token){
                axios.post("http://192.168.52.94:8080/hanfugou/insertShopping?shoppingId="+this.$route.query.goodsId+"&shoppingUserId="+sessionStorage.userid+"&shoppingNum=1",{}).then((res)=>{     
                        this.code=res.data
                })
                setTimeout(()=>{
                    if(this.code==="yes"){
                        this.shows=true
                        this.success="添加成功"
                        setTimeout(()=>{
                            this.shows=false
                        },1000)
                    }else{
                        this.shows=true
                        this.success="添加失败"
                          setTimeout(()=>{
                            this.shows=false
                        },1000)
                    }
                },500)
                 
            }else{
                this.$router.push({path:"/mine"})
            }
           
        },
        
        immediate(){
            // console.log(this.storeId)
            if(sessionStorage.token){
                this.$router.push({path:"/orderList",query:{goodsId:this.$route.query.goodsId}})
                axios.post("/hanfugou/orderInsert?userId="+sessionStorage.userid+"&goodsId="+this.$route.query.goodsId+"&storeId="+this.storeId+"&addressId=1&buyNumber=1",{}).then((res)=>{
                    console.log(res)
                })

            }else{
                this.$router.push({path:"/mine"})
            }
        },
       
        change(){
            if(sessionStorage.token){
                this.glass=!this.glass
            }else{

            }

        }
    }
}
</script>
<style scoped>
    .success{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 50%;
        top:50%;
        margin-left: -1rem;
        margin-top: -0.6rem;
        border:1px solid black;
        border-radius: 10px;
        color: white;
        width: 2rem;
        height: 1.1rem;;
        background:rgba(0, 0, 0, 0.6) ;       
      }



     .footer{
        display: flex;
        border-top: 1px solid lightgray;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
  
    
    
    .footer{
         box-shadow: 0 -1px 20px lightgrey;
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