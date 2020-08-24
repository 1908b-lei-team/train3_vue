<template>
  <div>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item >
    账户余额 ￥ {{form.generalassets}}
      <el-button  size="mini"  @click="gotopay()" type="warning">充值</el-button>
    </el-form-item>
    <el-form-item >
      <div>满标进度</div>
    <div style="float: right;width: 1750px;margin-top: -25px"><el-progress :percentage="50" :format="format" style="width: 150px"></el-progress></div>
    </el-form-item>

    <el-form-item >
     最多可投 ￥50000
    </el-form-item>

    <el-form-item label="出借金额">
      <el-input type="form.paymoney" style="width:260px"></el-input>
    </el-form-item>
    <el-form-item label="交易密码">
      <el-input type="form.dealpassword" style="width:260px"></el-input>
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
          pay: {
            dealpassword: "",
            loanamount: "",
            id: "",
            userid: '',
            id: "",
            form: {
              dealpassword: "",
              generalassets: "",
              paymoney: "",
            }
          }
        }
      },

      created(){
        //查询账户余额
        this.pay.id=  this.$route.query.id
        this.querygeneralassets()
        this.id=  this.$route.query.id
        alert(this.id)
       this.querygeneralassets();
      },
      methods: {
        //立即购买
        onSubmit() {

          var self = this;
          this.$axios.post("api/hslApi/pay/onSubmit",this.$qs.stringify(this.pay)).then(function(res){
            if(res.data.code==200) {
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
          alert(this.pay.id)
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
              if (res.data.code == 200) {
                self.generalassets = res.data.data;
              }
            })
        },
      }
    }
</script>

<style scoped>

</style>
