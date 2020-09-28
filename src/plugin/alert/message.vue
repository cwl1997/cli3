<template>
  <transition name="cmessage">
    <div class="container" v-show="isShow">
      <div class="messageTitle">{{ title }}</div>
      <div class="messageDetails">{{ details }}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "cmessage",
  data: function() {
    return {
      title: "弹出标题",
      details: "内容",
      isShow: false
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 240px;
  background: #49494a;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .messageTitle {
    color: #fff;
    font-size: 18px;
  }
  .messageDetails {
    width: 200px;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }
}
.cmessage-enter-active,
.cmessage-leave-active {
  transition: opacity 0.5s;
}
.cmessage-enter, .cmessage-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
