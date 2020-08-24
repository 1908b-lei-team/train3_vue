<template>
  <el-form ref="form" :model="pay" label-width="150px" >
    <el-form-item label="客户名称" style="width: 260px">
      <!--<el-input v-model="pay.name" style="width: 260px" ></el-input>-->
      惠三磊
    </el-form-item>
    <el-form-item label="银行卡号" style="width: 260px" >
      <!--<el-input v-model="pay.banknumber" style="width: 260px" ></el-input>-->
      *******
    </el-form-item>
    <el-form-item label="银行预留手机号" style="width: 350px">
      <el-input v-model="pay.phone" style="width: 260px" ></el-input>
    </el-form-item>

    <el-form-item label="充值金额" style="width: 230px">
     {{this.paymoney}}
    </el-form-item>

    <el-form-item label="交易密码" style="width: 260px">
      <el-input v-model="pay.dealpassword" style="width: 260px" ></el-input>
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
            paymoney:"",
            pay:{
              name:"",
              banknumber:"",
              phone:"",
              dealpassword:"",
              id:"",
            },
          }
      },
      created(){
        this.pay.id=  this.$route.query.id
        this.paymoney=  this.$route.query.paymoney
      },
      methods: {


        submit(){

        }
      }
      }
</script>

<style scoped>

</style>
