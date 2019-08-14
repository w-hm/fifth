<template>
    
     <div class="chuan">
             <img src="https://pic.hanfugou.com/web/2019/8/3/1/0350d0715ba44443abad59bc23a2c77a.png_min.jpg" alt="">          
            <div class="chuan_products" ref="fzan"> 
                <div class="chuan_scroll" >              
                    <router-link tag="div" :to="{name:'details',query:{goodsId:chuan.goodsID}}" class="chuan_con" v-for="chuan of chuanList" :key="chuan.goodsID">
                        <img :src="chuan.goodsPicture" alt="" style="height:2rem;">
                        <span>¥{{chuan.goodsPrice.toFixed(2)}}</span>
                    </router-link> 
                      <div class="chuan_con">
                            <img src="https://m.hanfugou.com/Image/ban_more.png" alt="">              
                        </div>
                </div>  
            </div>
     </div> 
                                    
</template>
<script>
import BScroll from "better-scroll"
import axios from "axios"
export default {
    name:"Chuan",
    data(){
        return{
            chuanList:[]
        }
    },
     mounted(){
           this.$nextTick(() => {
                this.personScroll();
        });
    axios.get("http://192.168.52.94:8080/hanfugou/CXBCD").then((res)=>{
        console.log(res)
        this.chuanList=res.data
    })
        
    },
    methods:{
          personScroll() {
            this.$nextTick(() => {
                if (!this.scroll) {
                  this.scroll = new BScroll(this.$refs.fzan, {
                    startX: 0,
                    click: true,
                    scrollX: true,
                    scrollY: false,
                    eventPassthrough: "vertical"
                  });
                }else{
                    this.scroll.refresh()
                }
            });
        }
    }
}
</script>
<style scoped>
.chuan_products{
    overflow: hidden;
}
 .chuan{
    background-color: #fff;
    padding:0 0.25rem 0.25rem;
    width: 100%;
}
.chuan_scroll{
    display:flex;
    width: 15.5rem;
    padding-top:0.1rem;
}
.chuan_con{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 2rem;
    margin-right: 0.2rem;
}
.chuan_con img{
    border-radius: 10px;
}
.chuan_con span{
    display: flex;
    justify-content: center;
    padding: 0.1rem;
    color: red;
}
</style>