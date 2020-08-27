<template>
    <div>
      <el-container>
        <!--头部-->
        <el-header class="headerStyle">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="0" style="margin-left: 80px"><img src="../assets/images/54b3fd75a3400aa8249db0301ce14ce.png" height="57"/></el-menu-item>
            <el-menu-item index="1" style="margin-left: 490px">首页</el-menu-item>
            <el-menu-item index="2">我要出借</el-menu-item>
            <el-menu-item index="7">出借记录</el-menu-item>
            <el-menu-item index="3">我的借款</el-menu-item>
            <el-menu-item index="4">我要借款</el-menu-item>
            <el-menu-item index="5">我要还款</el-menu-item>
            <el-menu-item index="6">注册/登录</el-menu-item>
            <el-link type="info"@click="logout" style="float: right; margin-right: 20px; ">注销</el-link>
          </el-menu>
        </el-header>

        <el-container style="height: 690px">
          <!--左边-->
          <el-aside width="286px">
            <el-col :span="24" style="height: 100%">
              <el-menu
                style="height: 100%"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                :default-openeds="openeds"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>个人信息管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1"> <i class="el-icon-s-finance"></i>我的存款账户</el-menu-item>
                    <el-menu-item index="1-2"> <i class="el-icon-wallet"></i>我的还款卡</el-menu-item>
                    <el-menu-item index="1-3"> <i class="el-icon-coordinate"></i>我的合同</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-aside>

          <!--中间-->
          <el-main>
            <router-view></router-view>
          </el-main>

        </el-container>
      </el-container>
    </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        openeds:['1'],
        activeIndex2: '1',
        direction: 'ltr',
      };
    },
    created:function(){
      this.handleSelect(1);
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      logout(){
        if(confirm("确定注销吗?")){
          this.$axios.post("http://localhost:8085/user/logout.do").then(function(res){
          })
        }
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if(key==2){
          this.$router.push('/pay1');
        }else if(key==3){
          this.$router.push('/BorrowMoney');
        }else if(key==4){
          this.$router.push('/Loan');
        } else if(key==5){
          this.$router.push('/log');
        }else if(key==6){
          this.$router.push('/p2pLogin');
        }else if(key==1){
          this.$router.push('/index');
        }else if(key==7){
          this.$router.push('/LoanShowPage');
        }
        else if (key="1-1") {
          this.$router.push('/SecurityCenter');
        }
      },
    }
  }
  </script>
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    line-height: 70px;
  }

  .el-main {
    padding: 0px;
    color: #333;
    position: relative;
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
  .el-menu--horizontal>.el-menu-item{
    margin-right: 20px;
  }
</style>
