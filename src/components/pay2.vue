<template>
  <div>
  <el-form ref="pay" :model="pay" label-width="80px">
    <el-form-item >
    账户余额 ￥ {{this.generalassets}}
      <el-button  size="mini"  @click="gotopay()" type="warning">充值</el-button>
    </el-form-item>
    <el-form-item >
      <div>满标进度</div>
    <div style="float: right;width: 1750px;margin-top: -25px"><el-progress :percentage="50" :format="format" style="width: 150px"></el-progress></div>
    </el-form-item>

    <el-form-item >
     最多可投 ￥500000
    </el-form-item>

    <el-form-item label="出借金额">
      <el-input v-model="pay.loanamount" style="width:260px"></el-input>
    </el-form-item>
    <el-form-item label="交易密码">
      <el-input v-model="pay.dealpassword" style="width:260px"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即购买</el-button>

    </el-form-item>
  </el-form>
  </div>
</template>

<script>
    export default {
        name: "pay2",
      data() {
        return {

          generalassets:"",
          pay: {
            dealpassword:"",
            loanamount:"",

          }
        }
      },

      created(){
        //查询账户余额
        this.id=  this.$route.query.id
       this.querygeneralassets()
      },
      methods: {

          //查询账户余额
        querygeneralassets(){
          var self = this;
          this.$axios.post("api/hslApi/pay/querygeneralassets",this.$qs.stringify({"id":this.id})).then(function(res){
            if(res.data.code==200){
              self.generalassets=res.data.data
            }
          })
        },

        onSubmit() {
          var self = this;
          this.$axios.post("api/hslApi/pay/onSubmit",this.$qs.stringify({"pay":this.pay},{"id":this.id})).then(function(res){
            if(res.data.code==200){
            }
          })

        },
        format(percentage) {
          return percentage === 100 ? '满' : `${percentage}%`;
        },
        gotopay(id){
          var self =this;
          self.$router.push({
            path: "/Pay",
            query:{
              id: id,
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
