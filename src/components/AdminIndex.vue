<template>
  <div>
  <el-container>
    <el-header class="headStyle">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"

        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item>P2P管理员页面</el-menu-item>
        <div style="position: absolute;top: 10px;right: 30px">
          <el-link type="info" @click="exitLogin">退出</el-link>
        </div>
      </el-menu>
    </el-header>

    <el-container>
      <el-aside width="200px">

        <el-col :span="24">
          <el-menu
            @select="handleSelect"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">用户信息</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">风控信息</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">理财项目</span>
            </el-menu-item>

          </el-menu>
        </el-col>

      </el-aside>
      <div id="mainId">
        <el-main> <router-view></router-view></el-main>
      </div>
    </el-container>

  </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        /*设置哪一个被选中*/
        activeIndex: '1'
      };
    },
    created () {
      this.$router.push("/UserInfoPage")
    },
    methods: {
    /*  logoutCookie(){
        var self = this;
        this.$axios.post('/productUserApi/user/logoutCookie.do').then(function (response) {
          self.$router.push("/")
        })
      },
      logoutSession(){
        var self = this;
        this.$axios.post('/productUserApi/user/logoutSession.do').then(function (response) {
          self.$router.push("/")
        })
      },*/
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
        if(key == 1){
          this.$router.push("/UserInfoPage")
        }
        if(key == 2){
          this.$router.push("/VentureCapital")
        }
        if(key == 3){
          this.$router.push("/PneumaticControlPage")
        }

      },
      exitLogin(){

      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .headStyle{
    padding: 0;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 70px;
  }

  .el-main {
    padding: 0px;
    color: #333;
    text-align: center;
    line-height: 70px;
  }

  body > .el-container {
    margin-bottom: 30px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .headerStyle{
    padding: 0px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 300px;
    height: 300px;
  }
</style>
