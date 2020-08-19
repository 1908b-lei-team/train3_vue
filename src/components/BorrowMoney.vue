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
          <span style="margin-left: 10px">{{ scope.row.userId }}</span>
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
        width="230">
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
            scope.row.signGiveStatus
            .replace("YES_THE_MONEY","已完成")
            .replace("BREAK_A_LOAN","借款中")
            .replace("FIRST_TRIAL","初审")
            .replace("RECHECK","复审")
            .replace("WAIT_MONEY","待放款")
            .replace("LOADING_MONEY","还款中")
            .replace("FAILURE","流标")
            .replace("NO_CHECK","不通过")
            }}</font></span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <a v-if="scope.row.signGiveStatus=='BREAK_A_LOAN'"
                     size="mini"
                     type="success"
                    ><font style="color: blue;width: 50%">━━━━━━</font></a>
          <el-button v-if="scope.row.signGiveStatus=='WAIT_MONEY'"
                     size="mini"
                     type="success"
                     @click="withdrawDeposit(scope.$index, scope.row)">提现</el-button>

              <a  href="" v-if="scope.row.signGiveStatus=='LOADING_MONEY'"
                         size="mini"
                         type="success"
              >账单 (0/9)</a>

          <a href="" v-if="scope.row.signGiveStatus=='YES_THE_MONEY'"
                     size="mini"
                     type="success"
                    >账单 (0/9)</a>
          <a v-if="scope.row.signGiveStatus=='FAILURE'"
             size="mini"
             type="success"
            ><font style="color: blue;width: 50%">━━━━━━</font></a>

          <a v-if="scope.row.signGiveStatus=='NO_CHECK'"
             size="mini"
             type="success"
          ><font style="color: blue;width: 50%">━━━━━━</font></a>

          <a v-if="scope.row.signGiveStatus=='FIRST_TRIAL'"
             size="mini"
             type="success"
          ><font style="color: blue;width: 50%">━━━━━━</font></a>

          <a v-if="scope.row.signGiveStatus=='RECHECK'"
             size="mini"
             type="success"
          ><font style="color: blue;width: 50%">━━━━━━</font></a>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'BorrowMoney',
    data() {
      return {
        tableData: []
      }
    },
    created(){
      this.queryList();
    },
    methods: {
      withdrawDeposit(){
        var self = this;
            self.$router.push("/Withdraw")
      },
      queryList() {
        var self = this;
        this.$axios.post("/api/controlController/queryList").then(function(res){
          if(res.data.code==200){
            self.tableData = res.data.data;
          }
        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },

    }
  }
</script>

<style scoped>

</style>
