<template>
  <div>
    <div class="container" @mouseenter="enter" @mouseleave="leave">test</div>
    <div class="drop_item" v-show="showitem">
      <div>item</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  data() {
    return {
      disabled: false,
      showitem: false
    };
  },
  created() {},
  methods: {
    enter() {
      console.log(3132);
      this.showitem = true;
    },
    leave() {
      this.showitem = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100px;
  height: 35px;
  //   background: #f00;
  border: 1px solid #0099cc;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #0099cc;
    border: 1px solid #fff;
    color: #fff;
  }
}
</style>
