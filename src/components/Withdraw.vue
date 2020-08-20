<template>
  <div style="margin-left: 35%;margin-top: 10%">
    <el-form ref="form" :model="withdraw" label-width="100px" >
      <el-form-item label="当前可用余额" style="width: 260px">
        1000
      </el-form-item>
      <el-form-item label="提现银行卡" style="width: 260px" >
        **************6622
      </el-form-item>
      <el-form-item label="提现金额" style="width: 260px">
        <el-input v-model="withdraw.name" style="width: 260px" ></el-input>
      </el-form-item>
      <el-form-item label="提现方式" style="width: 260px">
        <el-radio v-model="withdraw.name" label="1">备选项</el-radio>
      </el-form-item>
      <el-form-item label="交易密码" style="width: 260px">
        <el-input v-model="withdraw.name" style="width: 260px" ></el-input>
      </el-form-item>
      <el-form-item style="width: 260px" >
        <el-button type="primary" @click="tixian()">提现</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "Withdraw",
      data(){
          return{
            withdraw:{
              name:'',
              password:''
            }
          }
      },
      methods:{
        tixian(){

        }
      }
    }
</script>

<style scoped>

</style>
