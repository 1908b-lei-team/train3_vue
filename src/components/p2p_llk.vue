<template>
  <div  style="width: 500px;height: 100px">
  <el-calendar>
    <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
    <template
      slot="dateCell"
      slot-scope="{date, data}">
      <p> <!--这里原本有动态绑定的class，去掉-->
        {{ data.day.split('-').slice(1).join('-') }}<br /> {{dealMyDate(data.day)}}
      </p>
    </template>
  </el-calendar>
  </div>
</template>

<script>
    export default {
        name: "p2p_llk",
    data() {
      return {
        resDate: [
          {"date":"2020-8-18","content":"放假"},
          {"date":"2019-12-26","content":"去交电费"},
          {"date":"2019-11-26","content":"去学习vue"}
        ]
      }
    },
    methods:{
      dealMyDate(v) {
        console.log(v)
        let len = this.resDate.length
        let res = ""
        for(let i=0; i<len; i++){
          if(this.resDate[i].date == v) {
            res = this.resDate[i].content
            break
          }
        }
        return res
      }
    }
    }
</script>

<style scoped>

</style>
