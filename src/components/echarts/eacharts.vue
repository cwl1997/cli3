<template>
  <div>
    <div>{{ choosevalue }}</div>
    <div id="myChart" :style="{ width: '500px', height: '500px' }"></div>
  </div>
</template>

<script>
export default {
  name: "echarts1",
  data() {
    return {
      choosevalue: ""
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let vm = this;
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
      //添加点击事件
      myChart.on("click", function(params) {
        // console.log(params)
        vm.choosevalue = params.name + params.data;
        vm.$emit("receive", params);
      });
    }
    // test(event){
    //     console.log(event)
    // }
  }
};
</script>

<style lang="scss" scoped></style>
