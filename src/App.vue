<template>
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      var torouter = sessionStorage.getItem("torouter");
      var fromrouter = sessionStorage.getItem("fromrouter");
      // console.log(to);
      // console.log(from);
      if (torouter == from.fullPath && fromrouter == to.fullPath) {
        console.log("回退");
      } else {
        console.log("前进");
      }
      sessionStorage.setItem("torouter", to.fullPath);
      sessionStorage.setItem("fromrouter", from.fullPath);
    }
  }
};
</script>
<style lang="scss">
::-webkit-scrollbar {
  //全局修改滚动条
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 5px;
  background: #fff;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(64, 158, 255, 0.5);
}
</style>
