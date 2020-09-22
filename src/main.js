import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss";
import "@/styles/appbox.scss";
import "font-awesome/scss/font-awesome.scss";
import Antd from "ant-design-vue";
import axios from "axios";
import "ant-design-vue/dist/antd.css";
//数组方法
import func from "@/common/arr.js";
//加密
import md5 from "js-md5";
Vue.prototype.$md5 = md5;

// echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// const Base64 = require("js-base64").Base64;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(func);
Vue.use(Antd);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    sessionStorage.removeItem("user");
  }
  var user = sessionStorage.getItem("user");
  if (!user && to.path !== "/login") {
    next({
      path: "/login"
    });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
