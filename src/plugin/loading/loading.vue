<template>
  <transition name="showLoading">
    <div class="container" v-show="isShow">
      <div class="loading">
        <img class="img_size" src="@/assets/loading.png" alt="" />
      </div>
      <p class="title">{{ titledata }}</p>
    </div>
  </transition>
</template>
<script>
export default {
  name: "loading",
  data: function() {
    return {
      titledata: "正在加载...",
      isShow: false
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .loading {
    width: 100px;
    height: 100px;
    // border-radius: 50%;
    // border: 5px solid #fff;
    // margin: 20px auto;
    // border-right-color: #409eff;
    animation: loading 2s linear infinite;

    .img_size {
      width: 100px;
      height: 100px;
    }
  }
  .title {
    text-align: center;
    font-size: 16px;
    color: #fff;
  }
}
.showLoading-enter-active,
.showLoading-leave-active {
  transition: opacity 0.5s;
}
.showLoading-enter, .showLoading-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
