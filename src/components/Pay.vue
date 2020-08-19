<template>
  <div>
    <div style="margin-bottom: 50px">当前可用余额:<font size="3" color="red">1000</font></div>
   <div style="margin-bottom: 50px">充值金额：<el-input v-model="input" placeholder="最少充值10" style="width: 300px"></el-input></div>
    <div> <el-button type="success" round   @click="gotop()">充值</el-button></div>
  </div>
</template>

<script>
    export default {
        name: "Pay",
        data() {
         return {
           balance:{

           },
           input: ''
        }
      },
      created(){
       this.querybalance();
      },
      methods: {
        querybalance(){
          var self =this;

          this.$axios.post("payApi/pay/querybalance").then(function (res) {
            if (res.data.code == 200) {
              //alert(res.data.data)
              self.balance =  res.data.data;
            }
          })
        },
      }
    }
</script>

<style scoped>

</style>
