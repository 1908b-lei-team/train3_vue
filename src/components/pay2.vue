<template>
  <div>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item >
    账户余额 ￥ 10000
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
      <el-input type="password" style="width:260px"></el-input>
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
          form: {
            dealpassword:"",
          }
        }
      },
      methods: {
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
              id:self.id
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
