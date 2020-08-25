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
            <el-menu-item index="0" style="margin-left: 80px"><img src="../assets/images/54b3fd75a3400aa8249db0301ce14ce.png" height="57"/></el-menu-item>
            <el-menu-item index="1" style="margin-left: 600px">首页</el-menu-item>
            <el-menu-item index="2">我要出借</el-menu-item>
            <el-menu-item index="3">我要借款</el-menu-item>
            <el-menu-item index="4">我要还款</el-menu-item>
            <el-menu-item index="5">注册/登录</el-menu-item>
            <el-menu-item index="6" @click="drawer = true">我的账户</el-menu-item>
            <el-link type="info"@click="logout" style="float: right; margin-right: 20px; ">注销</el-link>
          </el-menu>
        </el-header>
        <el-container style="height: 690px">

          <el-main style="float: left">

            <div style="float: left;margin-left: 103px">
              <p2p_llk_video></p2p_llk_video>
            </div>

            <div style="float: right">
              <p2p_llk_calendar></p2p_llk_calendar>
            </div>

            <div style="float:right">
              <p2p_llk_font></p2p_llk_font>
            </div>

          </el-main>
        </el-container>
      </el-container>
      <div>
        <el-radio-group v-model="direction" v-show="showRentPrise">
          <el-radio label="ltr">从左往右开</el-radio>
          <el-radio label="rtl">从右往左开</el-radio>
          <el-radio label="ttb">从上往下开</el-radio>
          <el-radio label="btt">从下往上开</el-radio>
        </el-radio-group>

        <el-drawer
          title="个人账户展示页面"
          :visible.sync="drawer"
          :direction="direction"
          :before-close="handleClose">
          <p>
            <span class="el-icon-s-finance">
              &nbsp<a href="">我的存款账户</a>
            </span>
          </p>
          <p>
            <span class="el-icon-wallet">
              &nbsp<a href="">我的还款卡</a>
            </span>
          </p>
          <p>
            <span class="el-icon-user-solid">
              &nbsp<a href="">我的合同</a>
            </span>
          </p>
          <p>
            <span class="el-icon-user-solid">
              &nbsp<a @click="aaaaa($router.push('/SecurityCenter'))">个人信息管理</a>
            </span>
          </p>
        </el-drawer>
      </div>
    </div>
</template>

<script>
  import p2p_llk_video from '@/components/p2p_llk/p2p_llk_video'
  import p2p_llk_calendar from '@/components/p2p_llk/p2p_llk_calendar'
  export default {
    components:{p2p_llk_video,p2p_llk_calendar},
    name: "Index",
    data() {
      return {
        activeIndex2: '1',
        drawer: false,
        direction: 'ltr',
        showRentPrise:false,
        item:[
          "华谊兄弟霸王条款",
          "爱奇艺在美遭调查",
          "桥水基金重仓阿里",
          "王兴退出三快在线",
          "美团第二季度营收247亿，净利润22亿元"
        ]
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
    background:url("../assets/b9034dce678bd10b97212608ec6d1f92.jpg");
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
