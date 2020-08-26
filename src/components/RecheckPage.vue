<template>
  <!--sunrj复审页面-->
    <div>
      <div>
        <el-divider content-position="left">标编号+标名称</el-divider>
        <el-row :gutter="20">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="span-font-no1">{{checkInfo.annualRate}}</span><br><span class="span-font-no2">年利率</span></div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple">
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
            <span class="span-font-no2">期限</span>





          </div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple"><span class="span-font-no1">{{checkInfo.borrowMoney}}</span><br><span class="span-font-no2">借款金额</span></div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple"><span class="span-font-no1">{{checkInfo.atMost}}</span><br><span class="span-font-no2">可投</span></div></el-col>
        </el-row>
        <br/>
        <el-row :gutter="20">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="span-font-no2" >借款人：</span><span class="span-info-1">{{checkInfo.username}}</span></div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">还款方式：
          </span>
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
          <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">起投金额：</span><span class="span-info-1">{{checkInfo.borrowMoney}}</span></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><div  style="width: 200px"><span class="span-font-no2" >发布时间：</span><span class="span-info-1">{{checkInfo.startTime}}</span></div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">项目状态：</span><span class="span-info-1">{{checkInfo.status}}</span></div></el-col>
        </el-row>
      </div>
      <div>
        <font style="color: red">
          <el-divider content-position="left">项目详情</el-divider></font>
        <div style="margin-left: 30px">
          <el-divider content-position="left">借款人信息</el-divider>
          <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-purple"><span class="span-font-no2" >真实姓名：</span><span class="span-info-1">{{checkInfo.username}}</span></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">年龄：</span><span class="span-info-1">{{checkInfo.userage}}</span></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">学历：</span>

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
            <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">性别：</span>
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
            <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">婚姻：</span>

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
            <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2" >
              工作年限：</span>
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
            <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">
              房产：</span>

              <span style="margin-left: 10px" v-if="checkInfo.userhouse=='TOTAL_PAY_HOME'">
                  全款买房
                </span>
              <span style="margin-left: 10px" v-if="checkInfo.userhouse=='LOANS_PAY_HOME'">
                  贷款买房
                </span>



            </div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">
              车产：</span>
              <span style="margin-left: 10px" v-if="checkInfo.uservehicle=='TOTAL_PAY_CAR'">
                  全款买车
                </span>
              <span style="margin-left: 10px" v-if="checkInfo.uservehicle=='LOANS_PAY_CAR'">
                  贷款买车
                </span>

            </div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">
              年收入：</span>
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
            <el-col :span="3"><div class="grid-content bg-purple"><span class="span-font-no2">资产估值：</span><span class="span-info-1">{{checkInfo.userproperty}}</span></div></el-col>
          </el-row>

          <el-divider content-position="left">借款说明</el-divider>

          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"><span class="span-font-no2" >{{checkInfo.borrowExplain}}</span></div></el-col>
          </el-row>
        </div>
      </div>

      <div>
          <el-divider content-position="left">审批记录</el-divider>
        <div style="margin-left: 30px">
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"><span class="span-font-no2" >初审：</span><span class="span-info-1">审核人-飞狐教育，同意(改进为当前登录的用户)</span></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"><span class="span-font-no2">审批时间：</span><span class="span-info-1">{{checkInfo.reviewTime}}</span></div></el-col>
          </el-row>
        </div>
      </div>

      <div>
        <el-divider content-position="left">收费方式</el-divider>
       <table style="margin-left: 80px ;text-align: left">
         <tr>
           <td class="span-font-bold">提前还款违约金</td>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <td  class="span-info-1">提前还款违约金，按剩余本金<input style="width: 15px;height: 10px;" v-model="checkInfo.aheadPostMoney"/>%收取</td>
         </tr>
         <p></p>
         <tr>
           <td class="span-font-bold" rowspan="2">逾期还款违约金</td>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <td  class="span-info-1">违约金，按逾期账单金额<input style="width: 15px;height: 10px;"  v-model="checkInfo.loadPostMoney"/>%收取</td>
         </tr>
         <tr>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <td  class="span-info-1" >逾期罚息，按逾期账单金额<input style="width: 15px;height: 10px;"  v-model="checkInfo.interest"/>%收取(月利率)</td>
         </tr>

         <p></p>
         <tr>
           <td class="span-font-bold" rowspan="3">借款存续期手续费</td>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <td  class="span-info-1">
             <el-radio  v-model="checkInfo.serviceCharge"  :lable="serviceCharge3">按照剩余本金</el-radio><input style="width: 15px;height: 10px;" v-model="serviceCharge3"/>%收取(月利率),计息期初收取
           </td>
         </tr>
         <tr>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>
           <el-radio v-model="checkInfo.serviceCharge" :lable="serviceCharge1">按照剩余本金</el-radio><input style="width: 15px;height: 10px;" v-model="serviceCharge1"/>%收取(月利率),计息期末收取</td>
         </tr>
         <tr>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>
           <el-radio v-model="checkInfo.serviceCharge" :lable="serviceCharge2">按照剩余本金</el-radio><input style="width: 15px;height: 10px;" v-model="serviceCharge2"/>%收取</td>
         </tr>
       </table>
      </div>

      <div>
        <el-divider content-position="left">筹款时间</el-divider>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <input type="text" style="width: 50px;height: 30px" v-model="checkInfo.borrDays"/>天
            </div>
          </el-col>
        </el-row>
      </div>

      <div>
        <el-divider content-position="left">风控建议</el-divider>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-rate
                v-model="value"
                show-text>
              </el-rate>
            </div>
          </el-col>
        </el-row>

        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="checkInfo.suggest"
          maxlength="90"
          :rows="5"
        ></el-input>
        <span class="span-font-no2">20-300字的综合建议，例如：借款人信用良好，收入稳定，无不良爱好；三好青年，具备偿还能力</span>
        <br/>

        <el-row :gutter="20">
          <el-col :span="2">
            <div class="grid-content bg-purple">
              发售时间：
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">
              <el-date-picker
                v-model="checkInfo.startTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-col>
        </el-row>

      </div>

      <div>
        <el-divider content-position="left">借款合同</el-divider>
        <div style="margin-left: 30px">
          <el-row :gutter="20">
            <template>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <el-radio  v-model="checkInfo.contract" :label="LOAN_CONTRACT" value="LOAN_CONTRACT" ></el-radio>
                <!--<span class="span-info-1">借款合同</span>-->
              </div>
            </el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
              <el-radio  v-model="checkInfo.contract"  :label="FOUR_PARTY_LOAN_CONTRACT" value="FOUR_PARTY_LOAN_CONTRACT"></el-radio>
              <!--<span class="span-info-1">四方借款合同</span>-->
            </div>
            </el-col>
            </template>
          </el-row>
        </div>
      </div>

      <div>
        <el-divider content-position="left">审批情况</el-divider>
        <div style="margin-left: 30px">
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <el-button type="primary" plain @click="agreeButt('CHECH_PASS')">同意</el-button>
              </div>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple">
              <el-button type="info" plain @click="agreeButt('FIRST_TRIAL')">拒绝</el-button>
            </div>
            </el-col>
          </el-row>
        </div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "FirstTrial",

        data(){
          return {
            id:1,
            value: null,
            text: '',
            textarea1: '',
            dataVal:'',
            checkInfo:{
              reviewTime:'',
              status:''
            },

            serviceCharge1:'0',
            serviceCharge3:'0',
            serviceCharge2:'0',
            LOAN_CONTRACT:'借款合同',
            FOUR_PARTY_LOAN_CONTRACT:'四方借款合同'

           /* control:{
              aheadPostMoney:'',
              loadPostMoney:'',
              serviceCharge:'',
              borrDays:'',
              suggest:'',
              contract:'',
              startTime:'',
              status:'',
            }*/
          }
        },
      created(){
        //点击复审按钮，将当前风控信息ID传过来
        this.id = this.$route.query.id;
        this.queryCheckInfo()

      },
      methods:{
          queryCheckInfo(){
            var self = this
            this.$axios.post('/capitalApi/control/queryCheckInfo',this.$qs.stringify({"id":this.id})).then(function (response) {

              // console.log(response.data.data)
              if (response.data.code==1000) {

                self.checkInfo = response.data.data;
               // self.checkInfo.reviewTime = new Date();
                self.checkInfo.status = '复审';
                console.log(self.checkInfo)
              }
              else{
                alert("查询失败")
              }
            })
          },
        agreeButt(status){
          var self = this
          var control = {
            id:this.id,
            aheadPostMoney:this.checkInfo.aheadPostMoney,
            loadPostMoney:this.checkInfo.loadPostMoney,
            serviceCharge:this.checkInfo.serviceCharge,
            borrDays:this.checkInfo.borrDays,
            suggest:this.checkInfo.suggest,
            contract:this.checkInfo.contract,
            startTime:this.checkInfo.startTime,
            status:status,
          }
          this.$axios.post('/capitalApi/control/updateControl',this.$qs.stringify(control)).then(function (response) {

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
