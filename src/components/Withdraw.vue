<template>
  <div style="margin-left: 35%;margin-top: 10%">
    <el-form ref="form" :model="withdraw" label-width="100px" >
      <el-form-item label="当前可用余额" style="width: 260px">
       {{this.tableData2.userBalance}}
      </el-form-item>
      <el-form-item label="提现银行卡" style="width: 260px" >
        {{this.tableData2.creditCardNumbers}}
      </el-form-item>
      <el-form-item label="提现金额" style="width: 260px">
        <el-input v-model="withdraw.withdrawMoney" style="width: 260px" ></el-input>
      </el-form-item>
      <el-form-item label="提现方式" style="width: 260px">
        <el-radio v-model="withdraw.name" labe  l="1">备选项</el-radio>
      </el-form-item>
      <el-form-item label="交易密码" style="width: 260px">
        <el-input type="password" v-model="withdraw.password" style="width: 260px" ></el-input>
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
            tableData2:{
              creditCardNumbers:'',
              userBalance:'',
              userId:''
            },
            withdraw:{
              withdrawMoney:'',
              name:'',
              password:''
            }
          }
      },
      created(){
        this.queryInfo2();
      },
      methods:{

        tixian(){
          var self = this;
          this.$axios.post("/api/accountApi/account/addLoan",this.$qs.stringify({'tableData2':this.tableData2.userId,'password':this.withdraw.password,"withdrawMoney":this.withdraw.withdrawMoney})).then(function (res) {
            if (res.data.code == 1000) {
              self.tableData2 = res.data.data;
            }else {
              alert(res.data.data)
            }
          })
        },
        queryInfo2(){
          var self = this;
          this.$axios.post("/api/accountApi/account/queryInfo2").then(function (res) {
            if (res.data.code == 1000) {
              self.tableData2 = res.data.data;
            }else {
              alert(res.data.data)
            }
          })
        },
      }
    }
</script>

<style scoped>

</style>
