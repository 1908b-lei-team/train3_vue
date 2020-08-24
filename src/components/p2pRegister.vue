<template>
  <div style="margin-left: 35%;margin-top: 5%">
    <el-form :model="member" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="手机号" prop="userphone" style="width: 260px">
        <el-input v-model="member.userphone" placeholder="请输入手机号" style="width: 260px"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="userpwd" style="width: 260px">
        <el-input type="password" v-model="member.userpwd" autocomplete="off" placeholder="请输入密码" style="width: 260px"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass" style="width: 260px">
        <el-input type="password" v-model="member.checkPass" autocomplete="off" placeholder="请确认密码" style="width: 260px"></el-input>
      </el-form-item>

      <el-form-item label="性别" style="width: 360px">
        <el-radio v-model="member.usersex" label="1">男</el-radio>
        <el-radio v-model="member.usersex" label="2">女</el-radio>
        <el-radio v-model="member.usersex" label="3">保密</el-radio>
      </el-form-item>

      <el-form-item label="年龄" style="width: 260px">
        <el-input v-model="member.userage" placeholder="请输入年龄" style="width: 260px"></el-input>
      </el-form-item>

      <el-form-item label="学历" style="width: 260px">
        <el-select v-model="member.usereducation" placeholder="请选择" style="width: 260px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="婚姻状态" style="width: 360px">
        <el-radio v-model="member.usermarriage" label="1">已婚</el-radio>
        <el-radio v-model="member.usermarriage" label="2">未婚</el-radio>
      </el-form-item>

      <el-form-item label="工作年限" style="width: 260px">
        <el-select v-model="member.userworktime" placeholder="请选择" style="width: 260px">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="房产" style="width: 460px">
        <el-radio v-model="member.userhouse" label="1">全款买房</el-radio>
        <el-radio v-model="member.userhouse" label="2">货款买房</el-radio>
        <el-radio v-model="member.userhouse" label="3">租房</el-radio>
        <el-radio v-model="member.userhouse" label="4">无</el-radio>
      </el-form-item>

      <el-form-item label="年收入"style="width: 260px">
        <el-select v-model="member.userincome" placeholder="请选择" style="width: 260px">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="资产估值" style="width: 260px">
        <el-input v-model="member.userproperty" placeholder="请输入资产估值" style="width: 260px"></el-input>
      </el-form-item>

      <el-form-item label="婚姻状态" style="width: 390px">
        <el-radio v-model="member.uservehicle" label="1">全款买车</el-radio>
        <el-radio v-model="member.uservehicle" label="2">货款买车</el-radio>
        <el-radio v-model="member.uservehicle" label="3">无</el-radio>
      </el-form-item>

      <el-form-item style="width: 260px">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'register',
    data() {
      var checkPhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          if (this.member.userphone !== '') {
            //验证账号是否存在
            var self = this;
            this.$axios.post("/api/loginApi/userLoginControlle/queryByUserPhone",this.$qs.stringify({"userPhone":this.member.userphone})).then(function (res) {
              if (res.data.code == 200) {
                callback();
              }else {
                callback(new Error('手机号已存在'));
              }
            })
          }
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.member.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.member.userpwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {

        member: {
          userpwd: '',
          checkPass: '',
          userphone:'',
          usereducation:'',
          uservehicle:'',
          usermarriage:'',
          userproperty:'',
          userage:'',
          userworktime:'',
          userhouse:'',
          userincome:'',
          code:'',
          usersex:'',
        },

        options: [{
          value: '小学',
          label: '小学'
        }, {
          value: '初中',
          label: '初中'
        }, {
          value: '高中',
          label: '高中'
        }, {
          value: '专科',
          label: '专科'
        }, {
          value: '本科',
          label: '本科'
        }, {
          value: '研究生及以上',
          label: '研究生及以上'
        }],

        //工作年限
        options1: [{
          value: '1~3年',
          label: '1~3年'
        }, {
          value: '3~5年',
          label: '3~5年'
        }, {
          value: '5~8年',
          label: '5~8年'
        }, {
          value: '8年以上',
          label: '8年以上'
        }],

        //年收入
        options2: [{
          value: '1~5万',
          label: '1~5万'
        }, {
          value: '5~10万',
          label: '5~10万'
        }, {
          value: '10~20万',
          label: '10~20万'
        }, {
          value: '20~30万',
          label: '20~30万'
        }, {
          value: '30~50万',
          label: '30~50万'
        }, {
          value: '50万~100万',
          label: '50万~100万'
        },{
          value: '100万以上',
          label: '100万以上'
        }],

        rules: {
          userpwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          userphone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var self = this;
            console.log(self.member)
            this.$axios.post("/api/loginApi/userLoginControlle/register",this.$qs.stringify(this.member)).then(function (res) {
              if (res.data.code == 200) {
                self.$router.push("")
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
