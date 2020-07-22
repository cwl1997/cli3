import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import '@/styles/appbox.scss'
import 'font-awesome/scss/font-awesome.scss'
import axios from 'axios'
//数组方法
import func from '@/common/arr.js'


Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(func)
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    sessionStorage.removeItem('user');
  }
  var user = sessionStorage.getItem('user');
  if(!user && to.path !== '/login'){
    next({
      path: '/login'
    })
  }else{
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
