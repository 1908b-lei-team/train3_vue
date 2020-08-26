<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        label="编号"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="项目"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.projectName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="借款人"
        width="110">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.loanName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="借款金额"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ "￥"+scope.row.borrowMoney }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="年利率"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.annualRate+"%" }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="期限"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.deadline
            .replace("3_STAGE","3期")
            .replace("3_STAGE","3期")
            .replace("6_STAGE","6期")
            .replace("9_STAGE","9期")
            .replace("12_STAGE","12期")
            }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="放款时间"
        width="160">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.startTime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="筹款进度"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.rateSchedule+"%" }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="状态"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">
            <font style="color: blue;size: 1px">{{
            scope.row.status
            }}</font></span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a v-if="scope.row.status=='借款中'"
                     size="mini"
                     type="success"
                    ><font style="color: blue;width: 50%">━━━━━━</font></a>
          <el-button v-if="scope.row.status=='待放款'"
                     size="mini"
                     type="success"
                     @click="withdrawDeposit(scope.$index,scope.row)">提现</el-button>

              <el-button v-if="scope.row.status=='还款中'"
                         size="mini"
                         type="success"
                  @click="bill(scope.$index,scope.row)">账单</el-button>

          <el-button  v-if="scope.row.status=='已完成'"
                     size="mini"
                     type="success"
             @click="bill(scope.$index,scope.row)">账单</el-button>
          <a v-if="scope.row.status=='流标'"
             size="mini"
             type="success"
            ><font style="color: blue;width: 50%">━━━━━━</font></a>

          <a v-if="scope.row.status=='初审未通过'"
             size="mini"
             type="success"
          ><font style="color: blue;width: 50%">━━━━━━</font></a>

          <a v-if="scope.row.status=='复审未通过'"
             size="mini"
             type="success"
          ><font style="color: blue;width: 50%">━━━━━━</font></a>

          <a v-if="scope.row.status=='初审中'"
             size="mini"
             type="success"
          ><font style="color: blue;width: 50%">━━━━━━</font></a>

          <a v-if="scope.row.status=='复审中'"
             size="mini"
             type="success"
          ><font style="color: blue;width: 50%">━━━━━━</font></a>
        </template>
      </el-table-column>
    </el-table>

    <div v-show="aaaaa">
      <el-table
        :data="gridData"
        style="width: 100%"
        :show-header="hiddenTableHeader">
        <el-table-column
          label="账单编号"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.number }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="期数"
          width="110">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.deadline }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="应还本金"
          width="110">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ "￥"+scope.row.prinAndInterest }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="本金"
          width="110">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ "￥"+scope.row.prin }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="利息"
          width="110">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ "￥"+scope.row.interest }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="到期时间"
          width="110">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.expireTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="还款时间"
          width="110">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.trueTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="110">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.status.replace("HAS_ALSO","已还").replace("TO_BE_PAID","待还") }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BorrowMoney',
    components: {},

    data() {
      return {
        tableData: [],
        gridData:[],
        hiddenTableHeader:false,
        aaaaa:false
      }
    },
    created(){
      this.queryList();
    },
    methods: {
      bill(index,row){
        console.log(row.userId)
        var self = this;
        self.hiddenTableHeader=true
        self.queryBillList();
        self.aaaaa=true;
      },
      withdrawDeposit(index,row){
        console.log(row.id)
      this.$router.push({path:"/Withdraw",query:{'orderNo':row.id}});
      },
      queryList() {
        var self = this;
        this.$axios.post("/api/borrowMoneyApi/controlController/queryList").then(function(res){
          if(res.data.code==1000){
            self.tableData = res.data.data.list;
          }else {

          }
        })
      },
      queryBillList() {
        var self = this;
        this.$axios.post("/api/borrowMoneyApi/billController/queryBillList").then(function(res){
          if(res.data.code==1000){
            self.gridData = res.data.data;
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
