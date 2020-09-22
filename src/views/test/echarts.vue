<template>
  <div>
    <!-- <echarts1 @click="test" @receive="getdata" /> -->
    <a-button type="primary">
      Primary
    </a-button>
    <!-- <earth></earth> -->
    <!-- <hubei></hubei> -->
    <div></div>
  </div>
</template>

<script>
// import echarts1 from "@/components/echarts/eacharts";
// import earth from "@/components/echarts/earth";
// import hubei from "@/components/echarts/hubei";
export default {
  components: {
    // echarts1
    // earth,
    // hubei
  },
  data() {
    return {
      disabled: false
    };
  },

  created() {},
  methods: {
    test(event, instance, echarts) {
      console.log(event, instance, echarts);
    },
    getdata(v) {
      console.log(v);
    }
  }
};
</script>

<style lang="scss" scoped></style>
