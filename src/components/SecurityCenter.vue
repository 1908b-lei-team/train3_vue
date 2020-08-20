<template>
  <div>

    <table style="width: auto" border="1px" cellspacing="0">
      <tr>
        <td>风控</td>
        <td>状态</td>
        <td>描述</td>
        <td>操作</td>
      </tr>

      <tr>
        <td>开户</td>
        <td>未开户</td>
        <td>您的银行开户账户为:6622***********</td>
        <td>
          去开户
        </td>
      </tr>


      <tr>
        <td rowspan="3">实名认证</td>

        <td rowspan="3" v-if="this.tableData.userId = null">未认证</td>
        <td rowspan="3" v-else-if="this.tableData.userId = !null">已认证</td>

        <td>您的真实姓名:{{this.tableData.realName}}</td>

        <td rowspan="3" v-if="this.tableData.userId = null">去认证</td>
        <td rowspan="3" v-else-if="this.tableData.userId = !null"> </td>
      </tr>

      <tr>
        <td>您的身份证号码:{{this.tableData.idNumber}}</td>
      </tr>
      <tr>
        <td>平台不会泄露您的身份信息</td>
      </tr>


      <tr>
        <td rowspan="2">个人手机绑定</td>
        <td rowspan="2">已绑定</td>
        <td>
          当前绑定手机号码为:1213213213
        </td>
        <td rowspan="2">去绑定</td>
      </tr>
      <tr>
        <td>方便用户以后寻回密码以及接受平台发送的重要信息</td>
      </tr>


      <tr>
        <td>银行卡绑定</td>
        <td>1</td>
        <td>绑定银行卡不仅可以便于充值以及提现,也可以作为账号持有者的有力证明。</td>
        <td>1</td>
      </tr>
    </table>


  </div>
</template>

<script>
  export default {
    name: "SecurityCenter",
    data() {
      return{
        tableData:null
      }

    },
    created() {
      this.queryInfo();
     // this.queryInfo2();
    },
    methods:{
      queryInfo(){
        var self = this;
        this.$axios.post("/api/accountApi/attestation/queryInfo").then(function (res) {
          if (res.data.code == 200) {
                self.tableData = res.data.data;
                //alert(self.tableData.realName)
          }else {
            alert(res.data.data)
          }
        })
      },
      queryInfo2(){
        var self = this;
        this.$axios.post("/api/accountApi/attestation/queryInfo2").then(function (res) {
          if (res.data.code == 200) {
                self.tableData = res.data.data;
                //alert(self.tableData.realName)
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
