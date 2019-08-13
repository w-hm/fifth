<template>
     <div class="footer">
            <router-link class="shopping" tag="div" to="/shoppingcart">
                    <img
                    src="https://m.hanfugou.com/Image/icon_u_cart.png?v=1"
                    alt
                    style="width:0.7rem;height:0.7rem;"
                    />
                    <span>购物车</span>
            </router-link>
            <router-link class="mine" tag="div" to="/mine">
                    <img
                    src="https://m.hanfugou.com/Image/icon_user_def.png?v=1"
                    alt
                    style="width:0.7rem;height:0.7rem;"
                    />
                    <span>个人中心</span>
            </router-link>     
        </div>
</template>
<script>
export default {
    name:"TabBar"
}
</script>
<style scoped>
    .footer {
  display: flex;
  color: grey;
  width: 100%;
  height: 1.1rem;
  border-top: 1px solid lightgray;
  padding: 0.1rem 0;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
}

.footer img {
  margin-right: 0.1rem;
}
.shopping {
  flex: 1;
  padding: 0.1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid lightgray;
}
.mine {
  flex: 1;
  padding: 0.1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>