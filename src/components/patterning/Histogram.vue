<template>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div style="width: 600px;height:400px;"/>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
    export default {
        name: "Histogram",
      data() {
        return {
          // 指定图表的配置项和数据
          option: {
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data: ['男', '女']
            },
            xAxis: {
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            },
            yAxis: {},
            series: [{
              name: '男',
              type: 'bar',
              stack: 'vistors',
              barWidth: '60%',
              data: [20, 20, 36, 10, 10, 20]
            },
              {
                name: '女',
                type: 'bar',
                stack: 'vistors',
                barWidth: '60%',
                data: [10, 30, 20, 5, 5, 10]
              }]
          }
        }
      },
      mounted() {
        this.$nextTick(() => {
          this.initChart()
        })
      },
      methods: {
        initChart() { // 通过 echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图
          this.chart = echarts.init(this.$el, 'macarons')
          // 使用刚指定的配置项和数据显示图表。
          this.chart.setOption(this.option)
        }
      }
    }
</script>

<style scoped>

</style>
