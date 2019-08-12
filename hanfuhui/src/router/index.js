import Vue from 'vue'
import Router from 'vue-router'
import First from "./First"
import Search from "./Search"
import Brand from "./Brand"
import Twohand from "./Twohand"
import Mine from "./Mine"
import Shoppingcart from "./Shoppingcart"
import store from "./store"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    store,
    First,
    Search,
    Brand,
    Twohand,
    Shoppingcart,
    Mine
  ]
})
