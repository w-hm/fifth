<template>
      <div class="nav_list">
            <router-link class="brand" tag="div" to="/brand">
                <img
                src="https://m.hanfugou.com/Image/nav_shop.png"
                alt
                style="width:0.65rem;height:0.6rem;"
                />
                <span>品牌馆</span>
            </router-link>
            <router-link class="two_hand" tag="div" to="/twohand">
                <img
                src="https://m.hanfugou.com/Image/nav_fleas.png"
                alt
                style="width:0.65rem;height:0.6rem;"
                />
                <span>二手铺</span>
            </router-link>
        </div>
</template>
<script>
export default {
    name:"Navlist"
}
</script>
<style scoped>
    
.nav_list {
  padding: 0.25rem 0;
  display: flex;
  border-bottom: 1px solid #f8f8f8;
  background-color: white;
}
.nav_list span {
  margin-left: 0.2rem;
  color: grey;
}
.nav_list .brand {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0;
  border-right: 1px solid lightgrey;
}
.nav_list .two_hand {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0;
}
</style>