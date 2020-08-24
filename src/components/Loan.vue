<template>
  <div>
    <div style="margin-left: 35%;margin-top: 10%">
      <el-form :model="loan"  ref="ruleForm" class="demo-ruleForm" label-width="auto" size="mini">

        <el-form-item label="项目名称"  style="width:240px">
          <el-input v-model="loan.projectName" placeholder="请输入项目名称" style="width:240px"></el-input>
        </el-form-item>

        <el-form-item label="借款说明"  style="width:240px">
          <el-input  type="textarea" v-model="loan.borrowExplain" autocomplete="off" placeholder="请输入借款说明" style="width: 240px"></el-input>
        </el-form-item>

        <el-form-item label="借款人"  style="width:240px">
          <el-input v-model="loan.loanName" placeholder="请输入借款人" style="width: 240px"></el-input>
        </el-form-item>

        <el-form-item label="借款金额"  style="width:240px">
          <el-input v-model="loan.borrowMoney" placeholder="请输入借款金额" style="width: 240px"></el-input>
        </el-form-item>

        <el-form-item label="年利率"  style="width:240px">
          <el-input v-model="loan.annualRate" style="width: 240px"></el-input>
        </el-form-item>

        <el-form-item style="width:240px">
          <el-button type="primary" @click="submitForm()">确认贷款</el-button>

          <el-link :underline="false" type="primary" class="el-icon-service" size="mini" > <font style="font-size: 10px">联系客服</font></el-link>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Loan",
      data(){
          return{
            loan:{
              projectName:'',
              borrowExplain:'',
              loanName:'',
              borrowMoney:'',
              annualRate:'',
            }
          }
      },
      methods:{
        submitForm() {
          var self = this;
          this.$axios.post("/api/borrowMoneyApi/controlController/addLoan",this.$qs.stringify(this.loan)).then(function (res) {
            if (res.data.code == 200) {
              self.$router.push("/BorrowMoney")
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
