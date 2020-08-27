<template>
  <div class="box">
    <div id="chart"></div>
  </div>
</template>

<script>
// import china from "./china.js";
import "echarts/map/js/province/hubei.js";
// import hubei from "./hubei.js";
// require("./echarts-auto-tooltip")

export default {
  name: "hubei",
  data() {
    return {
      option: {
        backgroundColor: "#404a59",
        title: {
          show: true,
          text: "主标题",
          subtext: "点击跳转",
          sublink: "http://www.baidu.com",
          left: "center"
        },
        tooltip: {
          show: true,
          padding: 10,
          alwaysShowContent: true, // 是否永远显示tooltip
          enterable: true,
          transitionDuration: 1.5, // 移动动画时间，单位s
          trigger: "item",
          textStyle: {
            color: "#fff"
          },
          formatter: "{b} </br> {c}",
          extraCssText:
            "width:300px; height:150px; background:#333; color:#999; border-radius:15px;"
        },
        //地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
        //要显示散点图，必须填写这个配置
        geo: {
          show: true,
          roam: false, //是否允许鼠标滚动放大，缩小
          map: "湖北",
          label: {
            //图形上的文本标签，可用于说明图形的一些数据信息
            show: false, //是否显示文本
            color: "#fff" //文本颜色
          },
          itemStyle: {
            //地图区域的多边形 图形样式。 默认样试。
            areaColor: "#323c48", //地图区域的颜色。
            borderColor: "#111" //边框线
          },
          emphasis: {
            //高亮状态下的多边形和标签样式。
            label: {
              //文本
              show: false,
              color: "#ADA"
            },
            itemStyle: {
              //区域
              areaColor: "#F60"
            }
          },
          data: [
            { name: "十堰市", value: 222 },
            { name: "神农架林区", value: 222 },
            {
              name: "恩施土家族苗族自治州",
              value: 222
            },
            { name: "宜昌市", value: 222 },
            { name: "襄阳市", value: 222 },
            { name: "荆门市", value: 222 },
            { name: "荆州市", value: 222 },
            { name: "潜江市", value: 222 },
            { name: "天门市", value: 222 },
            { name: "仙桃市", value: 222 },
            { name: "随州市", value: 222 },
            { name: "孝感市", value: 222 },
            { name: "咸宁市", value: 222 },
            { name: "武汉市", value: 222 },
            { name: "黄冈市", value: 222 },
            { name: "黄石市", value: 222 }
          ]
        },
        //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        visualMap: {
          min: 0, //最小值
          max: 600, //最大值
          show: false,
          calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
          inRange: {
            color: ["#ccc", "yellow", "#fff"] //颜色
          },
          textStyle: {
            color: "#fff"
          }
        }
        // series: [
        //   {
        //     type: "effectScatter", //特效散点图
        //     silent: true,// 图形是否触发鼠标事件
        //     coordinateSystem: "geo", //该系列使用的坐标系
        //     data: [
        //       //数据
        //       { name: "宜昌", value: [111.290843, 30.702636, 150]},
        //       { name: "孝感市	", value: [113.926655, 30.926423, 200] },
        //       { name: "十堰市	", value: [110.787916, 32.646907, 100] },
        //       { name: "荆门市	", value: [112.204251, 31.03542, 150] },
        //       { name: "仙桃市	", value: [113.453974, 30.364953, 150] },
        //       { name:"武汉", value: [114.31, 30.52,200]},
        //       { name:"黄石", value: [115.09, 30.2,200]},
        //       { name:"襄樊	", value: [112.14,30.02	,50]},
        //       // { name:"武汉", value: [114.31,30.52,200]},
        //       // { name:"武汉", value: [114.31,30.52,200]},
        //       // { name:"武汉", value: [114.31,30.52,200]},

        //     ],
        //     label: {
        //       normal: {
        //         formatter: "{b}",
        //         position: "right",
        //         show: true
        //       }
        //     },
        //     //标记的大小,可以设置数组或者函数返回值的形式
        //     symbolSize: function(val) {
        //       return val[2] / 25;
        //     },
        //     rippleEffect: {
        //       //涟漪特效相关配置。
        //       brushType: "fill" // 波纹绘制方式 stroke, fill
        //     },
        //     hoverAnimation: true //鼠标移入放大圆
        //   }
        // ]
      }
    };
  },
  mounted() {
    this.mYChart();
  },
  methods: {
    mYChart() {
      var mapChart = this.$echarts.init(document.getElementById("chart"));
      mapChart.setOption(this.option);
      //添加点击事件
      mapChart.on("click", function(params) {
        console.log(params);
      });
      // 自动轮播
      // tools.loopShowTooltip(mapChart, this.option, {loopSeries: true});
    }
  }
};
</script>

<style scoped>
.box {
  margin-top: 30px;
}
#chart {
  width: 1000px;
  height: 620px;
}
</style>
