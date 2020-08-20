<template>
  <div>
  <div style="margin-left: 35%;margin-top: 10%">
    <el-form :model="account" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="auto" size="mini">

      <el-form-item label="客户名称" prop="userName" style="width:240px">
        <el-input v-model="account.userName" placeholder="请输入客户名称" style="width:240px"></el-input>
      </el-form-item>

      <el-form-item label="身份证号码" prop="idNumber" style="width:240px">
        <el-input v-model="account.idNumber" autocomplete="off" placeholder="请输入身份证号码" style="width: 240px"></el-input>
      </el-form-item>

      <el-form-item label="银行卡号" prop="creditCardNumbers" style="width:240px">
        <el-input v-model="account.creditCardNumbers" placeholder="请输入客户名称" style="width: 240px"></el-input>
      </el-form-item>

      <el-form-item label="账户类型" prop="accountType" style="width:240px">
        <el-select v-model="account.accountType" placeholder="请选择账户类型">
          <el-option label="投资人" value="INVESTOR"></el-option>
          <el-option label="借款人" value="BORROWER"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="手机" prop="bankPhone" style="width:240px">
        <el-input v-model="account.bankPhone" placeholder="请输入客户名称" style="width: 240px"></el-input>
      </el-form-item>

      <el-form-item label="交易密码" prop="confirmPassword" style="width:240px">
        <el-input type="password" v-model="account.confirmPassword" autocomplete="off" placeholder="请输入交易密码" style="width: 240px"></el-input>
      </el-form-item>

      <el-form-item label="确认交易密码" prop="checkPass" style="width:240px">
        <el-input type="password" v-model="account.checkPass" autocomplete="off" placeholder="请确认交易密码" style="width: 240px"></el-input>
      </el-form-item>

      <el-form-item style="width:240px">
        <el-button type="primary" @click="submitForm('ruleForm')">开户</el-button>
      </el-form-item>

    </el-form>
  </div>
  </div>
</template>

<script>
    export default {
      name: "",
      data(){

        var checkUserName = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入客户名称'));
          } else {
            if (this.account.userName !== '') {
              var self = this;
              this.$axios.post("/api/accountApi/account/checkUserName",this.$qs.stringify({"userName":this.account.userName})).then(function (res) {
                if (res.data.code == 200) {
                  callback();
                }else {
                  callback(new Error('用户已存在'));
                }
              })
            }
          }
        };


        var checkIdNumber = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入身份证号码'));
          } else {
            if (this.account.idNumber !== '') {
              var self = this;
              this.$axios.post("/api/accountApi/account/checkIdNumber",this.$qs.stringify({"userName":this.account.idNumber})).then(function (res) {
                if (res.data.code == 200) {
                  callback();
                }else {
                  callback(new Error('此身份证已绑定其他账户'));
                }
              })
            }
          }
        };

        var checkCreditCardNumbers = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入银行卡号'));
          } else {
            if (this.account.creditCardNumbers !== '') {
              var self = this;
              this.$axios.post("/api/accountApi/account/checkCreditCardNumbers",this.$qs.stringify({"checkCreditCardNumbers":this.account.creditCardNumbers})).then(function (res) {
                if (res.data.code == 200) {
                  callback();
                }else {
                  callback(new Error('此银行卡已绑定其他账户'));
                }
              })
            }
          }
        };

        var checkBankPhone = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入手机号'));
          } else {
            if (this.account.bankPhone !== '') {
              var self = this;
              this.$axios.post("/api/accountApi/account/checkBankPhone",this.$qs.stringify({"bankPhone":this.account.bankPhone})).then(function (res) {
                if (res.data.code == 200) {
                  callback();
                }else {
                  callback(new Error('此号码已绑定其他账户'));
                }
              })
            }
          }
        };

        var checkConfirmPassword = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.account.confirmPassword !== '') {

            }
            callback();
          }
        };


        var checkCheckPass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.account.confirmPassword) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };


        return {
          account: {
            userName: '',
            idNumber: '',
            creditCardNumbers: '',
            bankPhone: '',
            confirmPassword: '',
            checkPass: '',
            accountType:''
          },
          rules: {
            userName: [
              { validator: checkUserName, trigger: 'blur' }
            ],
            idNumber: [
              { validator: checkIdNumber, trigger: 'blur' }
            ],
            creditCardNumbers: [
              { validator: checkCreditCardNumbers, trigger: 'blur' }
            ],
            bankPhone: [
              { validator: checkBankPhone, trigger: 'blur' }
            ],
            confirmPassword: [
              { validator: checkConfirmPassword, trigger: 'blur' }
            ],
            checkPass: [
              { validator: checkCheckPass, trigger: 'blur' }
            ],
            accountType:[
              { required: true, message: '请选择账户类型', trigger: 'change' }
            ],

          }

        }
      },
      methods: {

        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              var self = this;
              this.$axios.post("/api/accountApi/account/addAccount",this.$qs.stringify(this.account)).then(function (res) {
                if (res.data.code == 200) {
                  self.$router.push("/")
                }else {
                  alert(res.data.data)
                }
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });

        },

      }
    }
</script>

<style scoped>

</style>
