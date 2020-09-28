import loading from "./loading.vue";
// import Vue from "vue";
export default {
  /**
        注意点:如果要将一个组件封装成一个组件,那么必须提供一个install方法
        那么必须在install方法中注册当前的这个组件
     */
  install: function(Vue, options) {
    // Vue.component(loading.name, loading);
    console.log(options);
    //1.根据我们的组件生成一个构造函数
    let LoadingContructor = Vue.extend(loading);
    //2根据构造函数创建实例对象
    let LoadingInstance = new LoadingContructor();
    //3.随便创建一个元素
    let oDiv = document.createElement("div");
    //4.将创建好的标签添加到界面上
    document.body.appendChild(oDiv);
    //5.将创建好的实例对象挂载到创建好的元素上
    LoadingInstance.$mount(oDiv);
    // console.log(options);
    //添加初始化值
    if (options && options.title !== null && options.title !== undefined) {
      LoadingInstance.titledata = options.title;
    }
    //添加全局方法
    Vue.showLoading = function() {
      LoadingInstance.isShow = true;
    };
    Vue.closeLoading = function() {
      LoadingInstance.isShow = false;
    };
    //添加实例方法
    Vue.prototype.$showLoading = function(value) {
      console.log(value);
      if (value && value !== null && value !== undefined) {
        LoadingInstance.titledata = value;
      }
      LoadingInstance.isShow = true;
    };
    Vue.prototype.$closeLoading = function() {
      LoadingInstance.isShow = false;
    };
    // console.log(LoadingInstance.title);
  }
};
