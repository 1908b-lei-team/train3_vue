<template>
  <el-container>
    <el-header style="background-color: #C0C4CC">
      <span class="el-icon-s-home" style="margin-top: 20px"></span>&nbsp;&nbsp;&nbsp;
      <span class="el-icon-s-grid">&nbsp;&nbsp;我的门户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span class="el-icon-menu"></span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="el-icon-date"></span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="el-icon-user-solid">一般用户</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="el-icon-message-solid"></span>
      <div style="width: 300px;float: right;margin-right: 800px;margin-top: 12px">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" size="mini">
          <el-select v-model="select" slot="prepend" placeholder="热搜">
            <el-option label="国际金价时隔9年再创历史新高" value="1"></el-option>
            <el-option label="央行紧急通知 调查线上联合消费贷款" value="2"></el-option>
            <el-option label="A股微涨 北向资金连续4日净卖出" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>
    <el-container>
      <el-aside width="1000px"  style="background-color: #409EFF">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "p2p_llk_index",
      data() {
        return {
          input1: '',
          input2: '',
          input3: '',
          select: ''
        }
      }
    }

</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
