<template>
  <div class="container">
    <h4>{{ count }}</h4>
    <h4>{{ todos }}</h4>
    <!-- <loading></loading> -->
    <button @click="open">展示</button>
    <button @click="close">关闭</button>
    <button @click="alert">弹出框</button>
    <!-- <cmessage></cmessage> -->
  </div>
</template>

<script>
// import Loading from "@/components/loading/loading";
// import cmessage from "@/plugin/alert/message.vue";
export default {
  components: {
    // Loading
    // cmessage
  },
  data() {
    return {
      disabled: false
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    todos: function() {
      return this.$store.getters.doneTodos;
    }
  },
  methods: {
    open() {
      this.$showLoading();
    },
    close() {
      this.$closeLoading();
    },
    alert() {
      this.$cmessage({
        title: "调用测试",
        details: "拉拉拉啊啦啦啦啊啦啦啦啦啦啦"
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
