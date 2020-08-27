<template>
  <div>
  <el-form ref="pay" :model="pay" label-width="80px">
    <el-form-item >
    可用余额 ￥ {{this.balance}}
      <el-button  size="mini"  @click="gotopay()" type="warning">充值</el-button>
    </el-form-item>
    <el-form-item >
      <div style="margin-left: -125px">满标进度</div>
    <div style="float: right;width: 930px;margin-top: -25px"><el-progress :percentage="50" :format="format" style="width: 150px"></el-progress></div>
    </el-form-item>

    <el-form-item >
    <div style="margin-left: -125px">最多可投</div>
      <div style="float: right;width: 1800px;margin-top: -40px"><font color="red" size="3">￥50000</font></div>
    </el-form-item>

    <el-form-item style="margin-left: 890px" label="出借金额">
      <el-input v-model="pay.loanamount" style="width:260px;margin-left: -650px"></el-input>
    </el-form-item>
    <el-form-item style="margin-left: 890px" label="交易密码">
      <el-input v-model="pay.dealpassword" style="width:260px;margin-left: -650px"></el-input>
    </el-form-item>

    <el-form-item>

      <template slot-scope="scope">
        <el-button  size="mini"  @click="onSubmit()" type="warning">立即购买</el-button>

      </template>

    </el-form-item>
  </el-form>
  </div>
</template>

<script>
    export default {
        name: "pay2",
      data() {
        return {
          generalassets: "",
          balance: "",
          pay: {
            dealpassword: "",
            loanamount: "",
            id: "",
            userid: '',
          }
        }
      },

      created(){
        //查询账户余额
        this.pay.id=  this.$route.query.id
        this.querygeneralassets()

        //alert(this.pay.id)

      },
      methods: {
        //立即购买
        onSubmit() {

          var self = this;
          this.$axios.post("api/hslApi/pay/onSubmit",this.$qs.stringify(this.pay)).then(function(res){
            if(res.data.code==1000) {
              self.$router.push({
                path: "/pay1",
                query: {
                  id: self.pay.id,
                }
              })
            }
          })
          console.log('submit!');
        },
        format(percentage) {
          return percentage === 100 ? '满' : `${percentage}%`;
        },
        gotopay(){
          //alert(this.pay.id)
          var self =this;
          self.$router.push({
            path: "/Pay",
            query:{
              id:  self.pay.id,

            }
          })
        },
        //查询账户余额
        querygeneralassets(){
          var self = this;
          this.$axios.post("api/hslApi/pay/querygeneralassets",this.$qs.stringify({"id":this.pay.id})).then(function(res) {
              if (res.data.code == 1000) {
                console.log(res.data)
                //self.generalassets = res.data.data;
                self.balance = res.data.data;
              }
            })
        },
      }
    }
</script>

<style scoped>

</style>
