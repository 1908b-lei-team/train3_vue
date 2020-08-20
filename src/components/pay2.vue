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
          id:"",
          form: {
            dealpassword:"",
            generalassets:"",
            paymoney:"",
          }
        }
      },

      created(){
        //查询账户余额
        this.id=  this.$route.query.id
        alert(this.id)
       this.querygeneralassets();
      },
      methods: {

          //查询账户余额
        querygeneralassets(){
          var self = this;
          this.$axios.post("payApi/pay/querygeneralassets").then(function(res){
            if(res.data.code==200){
              self.generalassets=res.data.data;
            }
          })
        },

        onSubmit() {
          console.log('submit!');
        },
        format(percentage) {
          return percentage === 100 ? '满' : `${percentage}%`;
        },
        gotopay(){
          var self =this;
          self.$router.push({
            path: "/Pay",
            query:{

            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
