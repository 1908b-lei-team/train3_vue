<template>
  <div>
    <div style="float: left">
      <div id="main" style="width: 700px;height: 300px;"></div>
    </div>

    <div style="float: left;width: 500px;height: 300px;">
    <div style="float: left;width: 300px;">
      累计注册会员 <font>24</font>人
    </div>
      <div style="float: left">
        放款项目数量 <font>46</font>个
      </div>
    </div>

    <div style="float: left;margin-top: 100px">
      <div id="myCharts" ref="myCharts"  :style="{width: '700px', height: '300px'}"></div>
    </div>

    <div style="float: left">
      <histogram></histogram>
    </div>
  </div>
</template>

<script>
  import Histogram from './Histogram'
  import echarts from 'echarts'
    export default {
      components:{Histogram},
        name: "Graph",
      data () {
        return {
          charts: '',
          opinion:['男','女','老','少'],
          opinionData:[
            {value:335, name:'男'},
            {value:250, name:'女'},
            {value:200, name:'老'},
            {value:310, name:'少'},
          ]
        }
      },
      mounted(){
        this.$nextTick(function() {
          this.drawPie('main')
        })
        const  myCharts = this.$echarts.init(this.$refs.myCharts);
     let options = {
          tooltip: {   //鼠标悬浮框的提示文字
            trigger: 'axis'
          },
          legend: {
            data:['最高气温','最低气温']
          },
          xAxis : [{  //x轴坐标数据
            type : 'category',
            boundaryGap : false,
            data : ['2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','00:00']
          }],

          yAxis : [{   //y轴坐标数据
            type: 'value',
            scale: true,
            name: '(单位：人)',
            min: 0,
            boundaryGap: [0, '100%'],
            axisLabel : {
              formatter: '{value} '
            }
          }],
          series: [  //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
            {
              name:"新增理财会员:",
              type: "line",  //pie->饼状图  line->折线图  bar->柱状图
              data:[11, 11, 15, 13, 12, 13, 10, 20,14,16],
            },
            {
              name:"新增注册会员：",
              type: "line",  //pie->饼状图  line->折线图  bar->柱状图
              data:[1, 2, 2, 5, 3, 2, 0, 1,3,7],
            }
          ]}

       myCharts.setOption(options );
      },
      methods: {
        drawPie(id){
          this.charts = echarts.init(document.getElementById(id))
          this.charts.setOption({
            tooltip: {
              trigger: 'item',
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data:this.opinion
            },
            series: [
              {
                name:'性别',
                type:'pie',
                radius:['50%','70%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '100',
                      fontWeight: 'blod'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data:this.opinionData
              }
            ]
          })
        }
      }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
