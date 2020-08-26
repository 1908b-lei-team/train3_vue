<template>
  <div>

    <table style="width: auto ; height: auto" border="0px" cellspacing="0">
      <tr>
        <td>风控</td>
        <td>状态</td>
        <td>描述</td>
        <td>操作</td>
      </tr>

      <tr v-if="this.tableData2.virtualBankId">
        <td>开户</td>
        <td>已开户</td>
        <td>您的银行开户账户为:{{this.tableData2.virtualBankId}}</td>
        <td> </td>
      </tr>

      <tr v-else-if="this.tableData2.virtualBankId">
        <td>开户</td>
        <td>未开户</td>
        <td>您的银行开户账户为:-----------</td>
        <td>去开户</td>
      </tr>



      <tr  v-if="this.tableData.userId">
        <td rowspan="3">实名认证</td>
        <td rowspan="3">已认证</td>
        <td>您的真实姓名:{{this.tableData.realName}}</td>
        <td rowspan="3"> </td>
      </tr>

      <tr  v-else-if="this.tableData.userId">
        <td rowspan="3">实名认证</td>
        <td rowspan="3">未认证</td>
        <td>您的真实姓名:-----------</td>
        <td rowspan="3">
          <a @click="aaaaa($router.push('/RealName'))">去实名</a>
        </td>
      </tr>

      <tr>
        <td>您的身份证号码:{{this.tableData.idNumber}}</td>
      </tr>
      <tr>
        <td>平台不会泄露您的身份信息</td>
      </tr>



      <tr v-if="this.tableData2.bankPhone">
        <td rowspan="2">个人手机绑定</td>
        <td rowspan="2">已绑定</td>
        <td>当前绑定手机号码为:{{this.tableData2.bankPhone}}</td>
        <td rowspan="2"> </td>
      </tr>

      <tr v-else-if="this.tableData2.bankPhone">
        <td rowspan="2">个人手机绑定</td>
        <td rowspan="2">未绑定</td>
        <td>当前绑定手机号码为:-------</td>
        <td rowspan="2"> </td>
      </tr>
      <tr>
        <td>方便用户以后寻回密码以及接受平台发送的重要信息</td>
      </tr>


      <tr v-if="this.tableData2.creditCardNumbers">
        <td>银行卡绑定</td>
        <td>已绑定</td>
        <td>绑定银行卡不仅可以便于充值以及提现,也可以作为账号持有者的有力证明。</td>
        <td> </td>
      </tr>

      <tr v-else-if="this.tableData2.creditCardNumbers">
        <td>银行卡绑定</td>
        <td>未绑定</td>
        <td>绑定银行卡不仅可以便于充值以及提现,也可以作为账号持有者的有力证明。</td>
        <td> </td>
      </tr>


    </table>


  </div>
</template>

<script>
  export default {
    name: "SecurityCenter",
    data() {
      return{
        tableData:null,
        tableData2:null,
      }

    },
    created() {
      this.queryInfo();
      this.queryInfo2();
    },
    methods:{
      queryInfo(){
        var self = this;
        this.$axios.post("/api/accountApi/attestation/queryInfo").then(function (res) {
          if (res.data.code == 1000) {
                self.tableData = res.data.data;
                //alert(self.tableData.realName)
          }else {
            alert(res.data.data)
          }
        })
      },
      queryInfo2(){
        var self = this;
        this.$axios.post("/api/accountApi/account/queryInfo2").then(function (res) {
          if (res.data.code == 1000) {
                self.tableData2 = res.data.data;
              //  self.phone = res.data.data.bankPhone;
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
