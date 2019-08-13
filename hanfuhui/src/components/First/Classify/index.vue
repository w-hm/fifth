<template>
    <div class="classify">
            <ul class="classify_ul">
                <router-link tag="div" to="" >
                  <img src="https://m.hanfugou.com/Image/icon_type_qixiong.png?v=3" alt style="width:1rem;height:1rem;"/>
                  <span>齐胸</span>
                </router-link>    
                   <router-link tag="div" to="" >
                  <img src="https://m.hanfugou.com/Image/icon_type_beizi.png?v=3" alt style="width:1rem;height:1rem;"/>
                  <span>褙子</span>
                </router-link>  
                   <router-link tag="div" to="" >
                  <img src="https://m.hanfugou.com/Image/icon_type_jiaoling.png?v=3" alt style="width:1rem;height:1rem;"/>
                  <span>交领襦裙</span>
                </router-link>  
                   <router-link tag="div" to="" >
                  <img src="https://m.hanfugou.com/Image/icon_type_duijing.png?v=3" alt style="width:1rem;height:1rem;"/>
                  <span>对襟襦裙</span>
                </router-link>  
                   <router-link tag="div" to="" >
                  <img src="https://m.hanfugou.com/Image/icon_type_aoqun.png?v=3" alt style="width:1rem;height:1rem;"/>
                  <span>袄裙</span>
                </router-link>  
                   <router-link tag="div" to="" >
                  <img src="https://m.hanfugou.com/Image/icon_type_zhoubian.png?v=3" alt style="width:1rem;height:1rem;"/>
                  <span>配饰周边</span>
                </router-link>  
                   <router-link tag="div" to="" >
                  <img src="https://m.hanfugou.com/Image/icon_type_hanyuansu.png?v=3" alt style="width:1rem;height:1rem;"/>
                  <span>汉元素</span>
                </router-link>  
                   <router-link tag="div" to="" >
                  <img src="https://m.hanfugou.com/Image/icon_type_more.png?v=3" alt style="width:1rem;height:1rem;"/>
                  <span>全部分类</span>
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
 
        };
  },
 
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