<template>
 <!-- <div>
    <div style="margin-bottom: 50px">当前可用余额:<font size="3" color="red">1000</font></div>
   <div style="margin-bottom: 50px">充值金额：<el-input v-model="input" placeholder="最少充值10" style="width: 300px"></el-input></div>
    <div> <el-button type="success" round   @click="gotop()">充值</el-button></div>
  </div>-->


  <div style="margin-left: 35%;margin-top: 10%">
    <el-form ref="form" :model="member" label-width="100px" >
      <el-form-item label="当前可用余额" style="width: 260px">
        <font style="color: red" size="3">1000</font>
      </el-form-item>

      <el-form-item label="充值金额" style="width: 260px">
        <el-input v-model="member.aaa" placeholder="最少充值10" style="width: 260px" ></el-input>
      </el-form-item>
      <el-form-item style="width: 260px" >
        <el-button type="success" round   @click="gotop()">充值</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
    export default {
        name: "Pay",
        data() {
         return {
           balance:{},
           member:{
             aaa: ''
           },

        }
      },
      created(){
       this.querybalance();
      },
      methods: {
        querybalance(){
          var self =this;

          this.$axios.post("api/hslApi/pay/querybalance").then(function (res) {
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
