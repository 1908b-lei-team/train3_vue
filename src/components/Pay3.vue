<template>
  <el-form ref="form" :model="member" label-width="150px" >
    <el-form-item label="客户名称" style="width: 260px">
      <el-input v-model="member.name" style="width: 260px" ></el-input>
    </el-form-item>
    <el-form-item label="银行卡号" style="width: 260px" >
      <el-input v-model="member.banknumber" style="width: 260px" ></el-input>
    </el-form-item>
    <el-form-item label="银行预留手机号" style="width: 350px">
      <el-input v-model="member.phone" style="width: 260px" ></el-input>
    </el-form-item>

    <el-form-item label="充值金额" style="width: 230px">
     1000
    </el-form-item>

    <el-form-item label="交易密码" style="width: 260px">
      <el-input v-model="member.dealpassword" style="width: 260px" ></el-input>
    </el-form-item>
    <el-form-item style="width: 260px" >
      <el-button type="primary" @click="submit">确认提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "Pay3",
      data(){
          return{
            member:{
              name:"",
              banknumber:"",
              phone:"",
              dealpassword:"",
            },
          }
      }
    }
</script>

<style scoped>

</style>
