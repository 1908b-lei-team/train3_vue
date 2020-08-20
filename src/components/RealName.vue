<template>
    <div>
      <el-form :model="attestation" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="真实姓名" prop="realName" >
          <el-input v-model="attestation.realName" placeholder="请输入真实姓名"></el-input>
        </el-form-item>

        <el-form-item label="身份证号码" prop="idNumber" >
          <el-input v-model="attestation.idNumber" autocomplete="off" placeholder="请输入身份证号码" ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
          name: "RealName",
      data() {
        /*
          var checkName = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入真实姓名'));
            } else {
              if (this.attestation.realName !== '') {
                var self = this;
                this.$axios.post("http://localhost:8085/attestation/checkRealName",this.$qs.stringify({"realName":this.attestation.realName})).then(function (res) {
                  if (res.data.code == 200) {
                    callback();
                  }else {
                    callback(new Error(''));
                  }
                })
              }
            }
         };
        */

        var checkIdNumber = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入身份证号'));
          } else {
            if (this.attestation.idNumber !== '') {
              var self = this;
                this.$axios.post("http://localhost:8085/attestation/checkIdNumber",this.$qs.stringify({"idNumber":this.attestation.idNumber})).then(function (res) {
                if (res.data.code == 200) {
                  callback();
                }else {
                  callback(new Error('此身份证已绑定其他用户'));
                }
              })
            }
          }
        };

        return {
          attestation: {
            realName: '',
            idNumber: '',
          },

          rules: {
            realName: [
              { required: true, message: '请输入真实姓名', trigger: 'blur' }
            ],
            idNumber: [
              { validator: checkIdNumber, trigger: 'blur' }
            ]
          }


        }
      },
      methods: {
        submitForm(formName) {

          this.$refs[formName].validate((valid) => {
            if (valid) {
              var self = this;
              this.$axios.post("http://localhost:8085/attestation/realNameAuthentication",this.$qs.stringify(this.attestation)).then(function (res) {
                if (res.data.code == 200) {
                  self.$router.push("/account")
                }else {
                  alert(res.data.data)
                }
              })
            } else {
              console.log('error submit!!');
              alert(valid)
              return false;
            }
          });
          ;

        },


      }


    }
</script>

<style scoped>

</style>
