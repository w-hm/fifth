import Vue from 'vue'
import Router from 'vue-router'
import First from "./First"
import Search from "./Search"
import Brand from "./Brand"
import Twohand from "./Twohand"
import Mine from "./Mine"
import Shoppingcart from "./Shoppingcart"
import store from "./store"
import list from "./list"
import detail from "./detail"
import Details from "./Details"



Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  
  routes: [
    store,
    list,
    detail,
    First,
    Search,
    Brand,
    Twohand,
    Shoppingcart,
    Mine,
    Details,

    
    {
      path:"*",
      redirect:"first"
    }
  ]
})
