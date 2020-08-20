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
        <el-button  size="medium" type="primary" @click="onSubmit">登录</el-button>
        <el-link type="primary" href="/p2pRegister">注册</el-link>
      </el-form-item>
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
      onSubmit() {
        var self = this;
        this.$axios.post("/api/userLoginControlle/userLogin",this.$qs.stringify(this.member)).then(function (res) {
          if (res.data.code == 200) {
            //登录成功跳转到展示页面
            self.$cookie.set('token',res.data.data)
            console.log(res.data.data)
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
