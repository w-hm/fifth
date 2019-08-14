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
                        <div  class="content" v-for="product of productList" :key="product.id" @click="btn">
                            <img :src="product.imgUrl" alt style="width:2rem;height:2rem;" />
                            <span class="nowPrice">{{product.protagonist}}</span>
                            <span class="oldPrice">{{product.dm_name}}</span>
                        </div>                    
                        <div class="content">
                            <img src="https://m.hanfugou.com/Image/ban_more.png" alt="">              
                        </div>
                    </div>               
            </div>
           
              <div class="box_shadow" v-if="today">
                <span @click="close" class="close">x</span>
                <span class="nosale">不卖不卖，走走走开！ </span>         
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
        today:false,
        productList:[
              {id:"1",name:"鸣人",protagonist:"鸣人",dm_name:"火影忍者",imgUrl:"http://img3.imgtn.bdimg.com/it/u=1426008625,3802203540&fm=26&gp=0.jpg"},
              {id:"2",name:"黑崎一护",protagonist:"黑崎一护",dm_name:"死神",imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2269529828,311475713&fm=26&gp=0.jpg"},
              {id:"3",name:"坂田银时",protagonist:"坂田银时",dm_name:"银魂",imgUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2565732405,1492164659&fm=26&gp=0.jpg"},
              {id:"4",name:"路飞",protagonist:"路飞",dm_name:"海贼王",imgUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2542806300,628329809&fm=26&gp=0.jpg"},
              {id:"5",name:"卡卡罗特",protagonist:"卡卡罗特",dm_name:"七龙珠",imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3606346792,3983223685&fm=26&gp=0.jpg"},             
              {id:"6",name:"索隆",protagonist:"索隆",dm_name:"海贼王",imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1968732288,1624112053&fm=26&gp=0.jpg"},
              {id:"7",name:"佐助",protagonist:"佐助",dm_name:"火影忍者",imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4109989097,2022844139&fm=26&gp=0.jpg"},
              
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
  
  },
  methods: {

      btn(){
        this.today=true
      },
      close(){
        this.today=false
      },

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
  .today .box_shadow{  
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.4rem;    
    box-shadow: 3px 3px 7px grey;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    position: fixed;
    left:0;
    top: 0;
  }
  .today .box_shadow .close{
    position: absolute;
    right: 15px;
    top: 0;   
  }
  .today .box_shadow .nosale{
      width: 5rem;
      height: 3rem;
      background-color: #ff4466;
      display: flex;
      justify-content: center;
      align-items: center;
  }

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
  
   text-decoration: line-through;
  color: grey;
}
.pic .content .oldPrice {
  color: red;
}

.today .more {
  font-size: 0.26rem;
  color: grey;
}
.today .more span {
  margin-right: 0.2rem;
}
</style>