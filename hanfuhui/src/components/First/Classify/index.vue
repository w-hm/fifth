<template>
    <div class="classify">
            <ul class="classify_ul">
                <router-link tag="div" v-for="classify of classifyList" :key="classify.goodsid" :to="{name:'list',query:{goodsType:classify.sx}}">
                  <img :src="classify.imgUrl" alt style="width:1rem;height:1rem;"/>
                  <span>{{classify.name}}</span>
                </router-link>            
            </ul>
        </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Classify",
      data() {
        return {
            classifyList:[
                      {goodsid:"1",sx:"qx",name:"齐胸",imgUrl:"https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3"},
                      {goodsid:"2",sx:"bz",name:"褙子",imgUrl:"https://m.hanfugou.com/Image/icon_type_beizi.png?v=3"},
                      {goodsid:"3",sx:"jlrq",name:"交领襦裙",imgUrl:"https://m.hanfugou.com/Image/icon_type_jiaoling.png?v=3"},
                      {goodsid:"4",sx:"djrq",name:"对襟襦裙",imgUrl:"https://m.hanfugou.com/Image/icon_type_duijing.png?v=3"},
                      {goodsid:"5",sx:"aq",name:"袄裙",imgUrl:"https://m.hanfugou.com/Image/icon_type_aoqun.png?v=3"},
                      {goodsid:"6",sx:"pszb",name:"配饰周边",imgUrl:"https://m.hanfugou.com/Image/icon_type_zhoubian.png?v=3"},
                      {goodsid:"7",sx:"hys",name:"汉元素",imgUrl:"https://m.hanfugou.com/Image/icon_type_hanyuansu.png?v=3"},
                      {goodsid:"8",sx:"all",name:"全部分类",imgUrl:"https://m.hanfugou.com/Image/icon_type_more.png?v=3"},
                  ]
        };     
  },
    mounted(){
           
        }
 
}
</script>
<style scoped>
    .classify {
  border-bottom: 1px solid lightgray;
  padding-bottom: 0.4rem;
  background-color: white;
}
.classify_ul {
  display: flex;
  flex-wrap: wrap;
}
.classify_ul div {
  width: 25%;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: grey;
  margin-top: 0.4rem;
}
</style>