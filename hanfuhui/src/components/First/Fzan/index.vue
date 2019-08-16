<template>
    
     <div class="fazan">
             <img src="https://pic.hanfugou.com/web/2019/8/9/11/65672f483ec54733bfdea19136aaef2a.png_min.jpg" alt="">          
            <div class="fazan_products" ref="fzan"> 
                <div class="fazan_scroll" >              
                    <router-link tag="div" :to="{name:'details',query:{goodsId:fzan.goodsID}}" class="fazan_con" v-for="fzan of fazanList" :key="fzan.goodsID">
                        <img :src="fzan.goodsPicture" alt="" style="height:2rem;">
                        <span>¥{{fzan.goodsPrice.toFixed(2)}}</span>
                    </router-link> 
                      <div class="fazan_con">
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
    name:"Fzan",
    data(){
        return{
            fazanList:[]
        }
    },
     mounted(){
           this.$nextTick(() => {
                this.personScroll();
        });
    axios.get("/hanfugou/CMFZ").then((res)=>{
        console.log(res)
        this.fazanList=res.data
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
.fazan_products{
    overflow: hidden;
}
    .fazan{
    background-color: #fff;
    margin-top:0.3rem; 
    padding:0.25rem;
    width: 100%;
}
.fazan_scroll{
    display:flex;
    width: 15.5rem;
    padding-top:0.1rem;
}
.fazan_con{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 2rem;
    margin-right: 0.2rem;
}
.fazan_con img{
    border-radius: 10px;
}
.fazan_con span{
    display: flex;
    justify-content: center;
    padding: 0.1rem;
    color: red;
}
</style>