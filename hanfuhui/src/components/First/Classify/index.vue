<template>
    <div class="classify">
            <ul class="classify_ul">
                <div v-for="classify of classifyList" :key="classify.id">
                <img :src="classify.imgUrl" alt style="width:1rem;height:1rem;"/>
                <span>{{classify.name}}</span>
                </div>
            </ul>
        </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Classify",
      data() {
    return {
        classifyList:[]
    };
  },
  mounted() {
    axios.get("/api/getclassify").then((res)=>{
        // console.log(res)
        this.classifyList=res.data.classify
    })
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