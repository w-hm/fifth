import Vue from 'vue'
import Router from 'vue-router'
import First from "./First"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    First
  ]
})
