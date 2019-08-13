import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'


Vue.config.productionTip = false

import "./styles/index.scss";  // 处理 vue.config.js 

import MintUI from "mint-ui";
Vue.use(MintUI)   // 全局使用 

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
