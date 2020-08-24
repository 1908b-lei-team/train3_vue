<template>
    <div>
      <el-container>
        <el-header class="headerStyle">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="0" style="margin-left: 150px"><img src="../assets/images/54b3fd75a3400aa8249db0301ce14ce.png" height="57"/></el-menu-item>
            <el-menu-item index="1" style="margin-left: 600px">首页</el-menu-item>
            <el-menu-item index="2">我要出借</el-menu-item>
            <el-menu-item index="3">我要借款</el-menu-item>
            <el-menu-item index="4">我要还款</el-menu-item>
            <el-menu-item index="5">注册/登录</el-menu-item>
            <el-link type="info"@click="logout" style="float: right; margin-right: 20px; ">注销</el-link>
          </el-menu>
        </el-header>
        <el-container>

          <el-main style="float: left">

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
        activeIndex2: '1',
      };
    },
    created:function(){
      this.handleSelect(1);
    },
    methods: {
      logout(){
        if(confirm("确定注销吗?")){
          this.$axios.post("http://localhost:8085/user/logout.do").then(function(res){
          })
        }
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if(key==2){
          this.$router.push('/product');
        }else if(key==3){
          this.$router.push('/category');
        }else if(key==4){
          this.$router.push('/log');
        } else if(key==5){
          this.$router.push('/p2pLogin');
        }else if(key==1){
          this.$router.push('/index');
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
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 70px;
  }

  .el-main {
    background-color: #E9EEF3;
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


</style>
