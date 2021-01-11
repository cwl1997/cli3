<template>
  <div class="container">
    <div class="item-container">
      <div class="item">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3588451679,1808386251&fm=26&gp=0.jpg"
          alt=""
          class="img-size"
        />
        <el-link
          target="_blank"
          style="color:#fff;margin-top:10px;"
          href="https://www.python.org/downloads/windows/"
          :underline="false"
          >python下载地址</el-link
        >
      </div>
      <div class="item" style="margin-left:100px;">
        <img src="@/assets/github.png" alt="" class="img-size" />
        <el-link
          target="_blank"
          style="color:#fff;margin-top:10px;"
          href="https://github.com/cwl1997/python"
          :underline="false"
          >github</el-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/bg.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .item-container {
    width: 60vw;
    height: 40vh;
    // border: 1px solid #000;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .img-size {
        width: 140px;
        height: 140px;
      }
    }
  }
}
</style>
