<template>
  <el-card class="box-card">
    <div v-for="o in item" :key="o" class="text item">
      {{'企业动态 :' + o }}
    </div>
  </el-card>
</template>

<script>
    export default {
        name: "p2p_llk_font",
      data(){
          return{
            item:[
              "华谊兄弟霸王条款",
              "爱奇艺在美遭调查",
              "桥水基金重仓阿里",
              "王兴退出三快在线",
              "美团第二季度营收247亿，净利润22亿元"
            ]
          }
      }
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 300px;
    height: 200px;
  }
</style>
