<template>
       <div class="today">
                <div class="title">
                    <div class="time">
                        <img src="https://m.hanfugou.com/Image/icon_seckill_title.png" style="width:1.5rem;height:0.45rem;" />
                        <span class="countDown">{{time}}</span>
                    </div>
                    <div class="more">
                        <span>查看更多</span>                        
                        <img src="https://m.hanfugou.com/Image/icon_more.png" style="width:0.3rem;height:0.3rem;" />
                    </div>
                </div>

            <div class="pic" ref="picWrap" >        
                    <div class="box" >
                        <router-link tag="div" class="content" v-for="product of productList" :key="product.id" :to="{name:'details',query:{goodsId:product.id}}">
                            <img :src="product.imgUrl" alt style="width:2rem;height:2rem;" />
                            <span class="nowPrice">¥ {{product.nowPrice.toFixed(2)}}</span>
                            <span class="oldPrice">¥ {{product.oldPrice.toFixed(2)}}</span>
                        </router-link>                    
                        <div class="content">
                            <img src="https://m.hanfugou.com/Image/ban_more.png" alt="">              
                        </div>
                    </div>               
            </div>
        </div>
</template>
<script>
import BScroll from "better-scroll";
import axios from "axios"
export default {
    name:"Today",
    data() {
    return {
        time:"",
        flag:false,
        productList:[
              {id:"1",name:"簪子",nowPrice:219,oldPrice:249,imgUrl:"https://pic.hanfugou.com/web/2019/7/31/16/926b424e8bec46b4862884d8da8731f0.jpg_200x200.jpg"},
              {id:"2",name:"簪子",nowPrice:219,oldPrice:249,imgUrl:"https://pic.hanfugou.com/web/2019/7/29/19/9cb5246aa38647b58c577d82e838a2a0.jpg_200x200.jpg"},
              {id:"3",name:"簪子",nowPrice:219,oldPrice:249,imgUrl:"https://pic.hanfugou.com/web/2019/7/31/16/926b424e8bec46b4862884d8da8731f0.jpg_200x200.jpg"},
              {id:"4",name:"簪子",nowPrice:219,oldPrice:249,imgUrl:"https://pic.hanfugou.com/web/2019/7/31/16/926b424e8bec46b4862884d8da8731f0.jpg_200x200.jpg"},
              {id:"5",name:"簪子",nowPrice:219,oldPrice:249,imgUrl:"https://pic.hanfugou.com/web/2019/7/31/16/926b424e8bec46b4862884d8da8731f0.jpg_200x200.jpg"},
              {id:"6",name:"簪子",nowPrice:219,oldPrice:249,imgUrl:"https://pic.hanfugou.com/web/2019/7/31/16/926b424e8bec46b4862884d8da8731f0.jpg_200x200.jpg"},
              {id:"7",name:"簪子",nowPrice:219,oldPrice:249,imgUrl:"https://pic.hanfugou.com/web/2019/7/31/16/926b424e8bec46b4862884d8da8731f0.jpg_200x200.jpg"},
              {id:"8",name:"簪子",nowPrice:219,oldPrice:249,imgUrl:"https://pic.hanfugou.com/web/2019/7/31/16/926b424e8bec46b4862884d8da8731f0.jpg_200x200.jpg"},
              {id:"9",name:"簪子",nowPrice:219,oldPrice:249,imgUrl:"https://pic.hanfugou.com/web/2019/7/31/16/926b424e8bec46b4862884d8da8731f0.jpg_200x200.jpg"},
              {id:"10",name:"簪子",nowPrice:219,oldPrice:249,imgUrl:"https://pic.hanfugou.com/web/2019/7/31/16/926b424e8bec46b4862884d8da8731f0.jpg_200x200.jpg"},
            ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.personScroll();
    });

    let time=setInterval(()=>{
        if(this.flag==true){
            clearInterval(time)
        }
        this.countDown()
    },500)
    

    // axios.get("/api/getproducts").then((res)=>{
    //     // console.log(res)
    //     this.products=res.data.products
    // })

  
  },
  methods: {

      countDown(){
          const endtime=new Date("2019-8-17")
        //   console.log(endtime)
        const nowtime=new Date();
        let leftTime=parseInt((endtime.getTime()-nowtime.getTime())/1000)
        // console.log(leftTime)
        let day=parseInt(leftTime/(24*60*60))
        let hours=this.formate(parseInt(leftTime/(60*60)%24))
        let minute=this.formate(parseInt(leftTime/60%60))
        let second=this.formate(parseInt(leftTime%60))
        if(leftTime<=0){
            this.flag=true
        }
        this.time=`${day}天${hours}时${minute}分${second}秒 后项目结束`
        
      },
      
      formate(time){
          if(time>=10){
                return time
          }else{
              return `0${time}`
          }
          
      },

    personScroll() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.picWrap, {
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

.title {
  width: 100%;
  margin-top: 0.3rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
}

.today .time {
  display: flex;
  font-size: 0.22rem;
  justify-content: center;
  align-items: center;
}
.today .more{
  display: flex;
}
.today .time span {
  color: white;
  margin-left: 0.2rem;
  padding: 0.1rem 0.15rem;
  border-radius: 10px;
  background-color: #ff4466;
}

.pic {
  display: flex;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.pic .box {
  display: flex;
  padding:0.2rem 0.3rem; 
  height: 3.5rem;
  width: 24.5rem;;
}
 
.pic .content {
  width: 30%;
  background-color: #fff;
  padding-right: 0.2rem;
  display: flex;
  flex-direction: column;
}
.pic .content img{
    border-radius: 10px;
}
.pic .content span {
  display: flex;
  justify-content: center;
  align-items: center;
    padding-top: 0.1rem;
}
.pic .content .nowPrice {
  color: red;
}
.pic .content .oldPrice {
  text-decoration: line-through;
  color: grey;
}

.today .more {
  font-size: 0.26rem;
  color: grey;
}
.today .more span {
  margin-right: 0.2rem;
}
</style>