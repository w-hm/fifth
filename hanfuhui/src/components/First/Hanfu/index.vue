<template>
    
     <div class="hanfu">
             <img src="https://pic.hanfugou.com/web/2019/7/25/15/aa615cfa36ed44f5a00252a8bbb926dc.png_min.jpg" alt="">          
            <div class="hanfu_products" ref="fzan"> 
                <div class="hanfu_scroll" >              
                    <router-link tag="div" :to="{name:'details',query:{goodsId:han.goodsID}}" class="hanfu_con" v-for="han of hanfuList" :key="han.goodsID">
                        <img :src="han.goodsPicture" alt="" style="height:2rem;">
                        <span>¥{{han.goodsPrice.toFixed(2)}}</span>
                    </router-link> 
                      <div class="hanfu_con">
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
    name:"hanfu",
    data(){
        return{
            hanfuList:[]
        }
    },
     mounted(){
           this.$nextTick(() => {
                this.personScroll();
        });
    axios.get("/hanfugou/CLGHF").then((res)=>{
        // console.log(res)
        this.hanfuList=res.data
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
.hanfu_products{
    overflow: hidden;
}
 .hanfu{
    background-color: #fff;
    padding:0 0.25rem 0.25rem;
    width: 100%;
}
.hanfu_scroll{
    display:flex;
    width: 15.5rem;
    padding-top:0.1rem;
}
.hanfu_con{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 2rem;
    margin-right: 0.2rem;
}
.hanfu_con img{
    border-radius: 10px;
}
.hanfu_con span{
    display: flex;
    justify-content: center;
    padding: 0.1rem;
    color: red;
}
</style>