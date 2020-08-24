<template>
 <!-- <div>
    <div style="margin-bottom: 50px">当前可用余额:<font size="3" color="red">1000</font></div>
   <div style="margin-bottom: 50px">充值金额：<el-input v-model="input" placeholder="最少充值10" style="width: 300px"></el-input></div>
    <div> <el-button type="success" round   @click="gotop()">充值</el-button></div>
  </div>-->


  <div style="margin-left: 35%;margin-top: 10%">


    <el-form ref="pay" :model="pay" label-width="100px" >
      <el-form-item label="当前可用余额" style="width: 260px">
        <font style="color: red" size="3">￥ {{this.balance}}</font>
      </el-form-item>

      <el-form-item label="充值金额" style="width: 260px">
        <el-input v-model="pay.paymoney" placeholder="最少充值10" style="width: 260px" ></el-input>
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
           balance:"",
           pay:{
             paymoney: '',
             id:"",
           },

        }
      },
      created(){
        this.pay.id=  this.$route.query.id;
        this.pay.paymoney=  this.$route.query.paymoney;
       this.querybalance();
      },
      methods: {
        querybalance(){
          var self = this;
          this.$axios.post("api/hslApi/pay/querybalance",this.$qs.stringify({"id":this.pay.id})).then(function(res){
            if(res.data.code==200) {
              self.balance = res.data.data
              var self = this;

              this.$axios.post("hslApi/pay/querybalance").then(function (res) {
                if (res.data.code == 200) {
                  //alert(res.data.data)
                  self.balance = res.data.data;
                }
              })
            }
        },


        //去充值
        gotop()
          {
            var self = this;
            self.$router.push({
              path: "/Pay3",
              query: {
                id: self.pay.id,
                paymoney: self.pay.paymoney,

              }
            })
          }
        },
      }
    }
</script>

<style scoped>

</style>
