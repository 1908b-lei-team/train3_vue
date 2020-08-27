<template>
  <el-form ref="form" :model="pay" label-width="150px" >
    <el-form-item label="客户名称" style="width: 260px">
      <!--<el-input v-model="pay.name" style="width: 260px" ></el-input>-->
      {{this.userName}}
    </el-form-item>
    <el-form-item label="银行卡号" style="width: 260px" >
      <!--<el-input v-model="pay.banknumber" style="width: 260px" ></el-input>-->
      {{this.creditCardNumbers}}
    </el-form-item>
    <el-form-item label="银行预留手机号" style="width: 350px">
      <!--<el-input v-model="pay.phone" style="width: 260px" ></el-input>-->
      {{this.bankPhone}}
    </el-form-item>

    <el-form-item label="充值金额" style="width: 230px">
     {{pay.paymoney}}
    </el-form-item>

    <el-form-item label="交易密码" style="width: 260px">
      <el-input v-model="pay.dealpassword" style="width: 260px" ></el-input>
    </el-form-item>
    <el-form-item style="width: 260px" >
      <el-button type="primary" @click="commith()">确认提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "Pay3",
      data(){
          return{
            creditCardNumbers:"",
            bankPhone:"",
            userName:"",
            pay:{
              name:"",
              banknumber:"",
              phone:"",
              dealpassword:"",
              paymoney:"",
              id:"",
            },
          }
      },
      created(){
        this.pay.id=  this.$route.query.id
        this.pay.paymoney=  this.$route.query.paymoney
        this.queryAccount();
        console.log(this.pay)
      },
      methods: {
        queryAccount(){
          var self = this;
          this.$axios.post("api/hslApi/pay/queryAccount").then(function(res) {
            if (res.data.code == 1000) {
              self.creditCardNumbers = res.data.data.creditCardNumbers;
              self.bankPhone = res.data.data.bankPhone;
              self.userName = res.data.data.userName;
            }else{
              alert(res.data.data)
            }
          })
        },
        commith(){
          var self = this;
          this.$axios.post("api/hslApi/pay/commith",this.$qs.stringify(this.pay)).then(function(res) {
            if (res.data.code == 1000) {

              self.generalassets = res.data.data;
              self.$router.push({
                path: "/pay2",
                query: {
                  id: self.pay.id,
                  generalassets: self.generalassets,

                }
              })
            }else{
              alert(res.data.data)
            }
          })
        }
      }
      }
</script>

<style scoped>

</style>
