<template>
  <!--sunrj初审页面-->
<div style="text-align:center ">

  <el-form ref="order" :model="checkInfo">
  <div>
    <el-divider content-position="left">标编号+标名称</el-divider>
    <el-row :gutter="50">
      <el-col :span="4"><div class="grid-content bg-purple"><span class="span-font-no1">{{checkInfo.annualRate}}</span>
        <br><span class="span-font-no2">年利率</span></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">
          <span style="margin-left: 10px"  class="span-font-no1" v-if="checkInfo.deadline=='3_STAGE'">
                  3期
                </span>
        <span style="margin-left: 10px"  class="span-font-no1" v-if="checkInfo.deadline=='6_STAGE'">
                  6期
                </span>
        <span style="margin-left: 10px"  class="span-font-no1" v-if="checkInfo.deadline=='9_STAGE'">
                  9期
                </span>

        <span style="margin-left: 10px"  class="span-font-no1" v-if="checkInfo.deadline=='12_STAGE'">
                  12期
                </span>
        <br>

        <span class="span-font-no2">期限</span></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"><span class="span-font-no1">{{checkInfo.borrowMoney}}</span><br><span class="span-font-no2">借款金额</span></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no1">{{checkInfo.atMost}}</span><br><span class="span-font-no2">可投</span></div></el-col>
    </el-row>
    <!--<br/>-->
    <el-row :gutter="50">
      <el-col :span="4"><div class="grid-content bg-purple"><span class="span-font-no2" >借款人：</span><span class="span-info-1">{{checkInfo.username}}</span></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"><span class="span-font-no2">还款方式：</span>
        <span style="margin-left: 10px" v-if="checkInfo.repaymentType=='AVERAGE_CAPITAL_PLUS_INTEREST'">
                  等额本息
                </span>
        <span style="margin-left: 10px" v-if="checkInfo.repaymentType=='AVERAGE_CAPITAL'">
                  等额本金
                </span>
        <span style="margin-left: 10px" v-if="checkInfo.repaymentType=='RATE_AFTER_THE_FIRST'">
                  先息后本
                </span>
        <span style="margin-left: 10px" v-if="checkInfo.repaymentType=='DUE_TO_PAY_OFF'">
                  到期还清
                </span>

      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"><span class="span-font-no2">起投金额：</span><span class="span-info-1">{{checkInfo.borrowMoney}}</span></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div  style="width: 200px"><span class="span-font-no2" >发布时间：</span><span class="span-info-1">{{checkInfo.startTime}}</span></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"><span class="span-font-no2">项目状态：</span><span class="span-info-1">{{checkInfo.status}}</span></div></el-col>
    </el-row>
  </div>

  <div>
    <font>
      <el-divider content-position="center">项目详情</el-divider></font>
    <div style="margin-left: 30px">
      <el-divider content-position="left">借款人信息</el-divider>
      <el-row :gutter="30">
        <el-col :span="6"><div class="grid-content bg-purple"><span class="span-font-no2" >真实姓名：</span><span class="span-info-1">{{checkInfo.username}}</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"><span class="span-font-no2">年龄：</span><span class="span-info-1">{{checkInfo.userage}}</span></div></el-col>
        <el-col :span="5"><div class="grid-content bg-purple"><span class="span-font-no2">学历：</span>
          <span style="margin-left: 10px" v-if="checkInfo.usereducation=='PRIMARY'">
                  小学
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.usereducation=='JUNIOR'">
                  初中
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.usereducation=='SENIOR'">
                  高中
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.usereducation=='COLLEGE'">
                  大专
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.usereducation=='UNDERGRADUATE'">
                  本科
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.usereducation=='GRADUATE'">
                  研究生及以上
                </span>


        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-purple"><span class="span-font-no2">性别：</span>
          <span style="margin-left: 10px" v-if="checkInfo.usersex=='MAN'">
                  男
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.usersex=='WOMAN'">
                  女
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.usersex=='SECRET'">
                  保密
                </span>



        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-purple"><span class="span-font-no2">婚姻：</span>

          <span style="margin-left: 10px" v-if="checkInfo.usermarriage=='MARRIED'">
                  已婚
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.usermarriage=='NOT_MARRIED'">
                未婚
              </span>
        </div></el-col>
      </el-row>
      <el-divider content-position="left">资产情况</el-divider>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"><span class="span-font-no2" >工作年限：</span>

          <span style="margin-left: 10px" v-if="checkInfo.userworktime=='ONE_TO_THREE_YEAR'">
                  1~3年
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.userworktime=='THREE_TO_FIVE_YEAR'">
                  3-5年
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.userworktime=='FIVE_TO_EIGHT_YEAR'">
                  5~8年
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.userworktime=='MORE_EIGHT_YEAR'">
                  8年以上
                </span>

        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><span class="span-font-no2">
          房产：</span>

          <span style="margin-left: 10px" v-if="checkInfo.userhouse=='TOTAL_PAY_HOME'">
                  全款买房
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.userhouse=='LOANS_PAY_HOME'">
                  贷款买房
                </span>


        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><span class="span-font-no2">车产：</span>

          <span style="margin-left: 10px" v-if="checkInfo.uservehicle=='TOTAL_PAY_CAR'">
                  全款买车
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.uservehicle=='LOANS_PAY_CAR'">
                  贷款买车
                </span>

        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><span class="span-font-no2">年收入：</span>


          <span style="margin-left: 10px" v-if="checkInfo.userincome=='ONE_TO_FIVE_THOUSAND'">
                  1~5万
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.userincome=='FIVE_TO_TEN_THOUSAND'">
                  5~10万
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.userincome=='TEN_TO_TWENTY_THOUSAND'">
                  10~20万
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.userincome=='TWENTY_TO_THIRTY_THOUSAND'">
                  20~30万
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.userincome=='THIRTY_TO_FIFTY_THOUSAND'">
                  30~50万
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.userincome=='FIFTY_TO_HUNDRED_THOUSAND'">
                  50~100万
                </span>
          <span style="margin-left: 10px" v-if="checkInfo.userincome=='MORE_ONE_HUNDRED_THOUSAND'">
                  100万以上
                </span>


        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><span class="span-font-no2">资产估值：</span><span class="span-info-1">{{checkInfo.userproperty}}</span></div></el-col>
      </el-row>

      <el-divider content-position="left">借款说明</el-divider>

      <el-row :gutter="20">
        <el-col :span="10"><div class="grid-content bg-purple"><span class="span-font-no2" >{{checkInfo.borrowExplain}}</span></div></el-col>
      </el-row>
    </div>
  </div>

  <div>
    <el-divider content-position="left">审批记录</el-divider>
    <div style="margin-left: 30px">
      <el-row :gutter="20">
        <el-col :span="16"><div class="grid-content bg-purple"><span class="span-font-no2" >初审：</span><span class="span-info-1">审核人-飞狐教育，同意(改进为当前登录的用户)</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"><span class="span-font-no2">审批时间：</span><span class="span-info-1">{{checkInfo.reviewTime}}</span></div></el-col>
      </el-row>
    </div>
  </div>

  <div>
    <el-divider content-position="left">审批情况</el-divider>
    <div style="margin-left: 30px">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="primary" plain @click="agreeButt('RECHECK')">同意</el-button>
          </div>
        </el-col>
        <el-col :span="1"><div class="grid-content bg-purple">
          <el-button type="info" plain  @click="agreeButt('NO_CHECK')">拒绝</el-button>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
  </el-form>
</div>
</template>

<script>
    export default {
      name: "RecheckPage",
      data(){
        return {
          number:'',
          checkInfo:{},
          value: null,
          text: '',
          textarea1: '',
          dataVal:''
        }
      },
      created(){
        this.number = this.$route.query.number;
        this.queryCheckInfo();

      },

      methods:{
        queryCheckInfo(){
            var self = this
           //alert(this.number)
            this.$axios.post('/api/capitalApi/control/queryCheckInfo',this.$qs.stringify({"number":this.number})).then(function (response) {

              // console.log(response.data.data)
              if (response.data.code==1000) {
                self.checkInfo = response.data.data;
                console.log(self.checkInfo)
                //self.checkInfo.reviewTime = new Date();
                self.checkInfo.status = '初审';
              }
              else{
                alert("查询失败")
              }
            })
          },
        agreeButt(status){

          var self = this
          this.$axios.post('/api/capitalApi/control/updateCheckStatu',this.$qs.stringify({"status":status,"number":this.checkInfo.number})).then(function (response) {
            // console.log(response.data.data)
            if (response.data.code==1000) {
              //跳转到展示页面
              self.$router.push("/VentureCapital")
            }
            else{
              alert("查询失败")
            }
          })

        }



      }

    }
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
  .span-info-1 {
    color: #06040d;
    font-size: 13px
  }
  .span-font-no2 {
    color: gray;
    font-size: 13px
  }
  .span-font-no1 {
    color: red;
    font-size: 25px
  }
  .span-font-bold {
    font-size: 15px;
    font-weight:bold
  }
</style>
