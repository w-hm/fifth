<template>
     <div class="header">
            <router-link to="/search" class="btn" tag="div">
                <img
                src="https://m.hanfugou.com/Image/icon_search_gray.png"
                alt
                style="width:0.3rem;height:0.3rem;  "
                />
                <div class="content">搜索萌物、商家</div>
            </router-link>
        </div>
</template>
<script>
export default {
    name:"Header"
}
</script>
<style scoped>
    .header {
  width: 100%;
  height: 1.2rem;
  padding: 0.2rem 0.2rem;
  border-bottom: 1px solid lightgrey;
  background-color: white;
}
.btn {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
}
.header img {
  margin-right: 0.13rem;
}
</style>