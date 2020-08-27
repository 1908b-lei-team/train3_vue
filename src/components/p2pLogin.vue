<template>
  <div style="margin-left: 35%;margin-top: 10%">
    <el-form ref="form" :model="member" label-width="80px" >
      <el-form-item label="手机号" style="width: 260px" >
        <el-input v-model="member.userphone" style="width: 260px" ></el-input>
      </el-form-item>
      <el-form-item label="密码" style="width: 260px">
        <el-input type="password" v-model="member.userpwd" style="width: 260px"></el-input>
      </el-form-item>

      <el-form-item style="width: 260px" >
        <el-button  size="medium" type="primary" style="margin-left: 30px" @click="onSubmit">登录</el-button>
        <el-link type="primary" href="/p2pRegister" style="margin-left: 30px">注册</el-link>
      </el-form-item>

      <div>
        <div>
          <img v-on:click="facelogin()" style="margin-left: 160px" title="人脸识别" width="50px" src="@/assets/images/login/renlian.jpg"/>
        </div>
      </div>
      <div>
        <p style="font-size: 12px; text-align: center;margin-right: 615px">其他登录方式</p>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        member: {
          userphone: '',
          userpwd: '',
        }
      }
    },
    methods: {
      facelogin: function () {
        this.$router.push('/face')
      },
      onSubmit() {
        var self = this;
        this.$axios.post("/api/loginApi/userLoginController/userLogin",this.$qs.stringify(this.member)).then(function (res) {
          console.log(res.data)
          if (res.data.code == 1000) {
            //登录成功跳转到展示页面
            alert(res.data.data)
            self.$cookie.set('token',res.data.data)
            self.$router.push("Index")
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
