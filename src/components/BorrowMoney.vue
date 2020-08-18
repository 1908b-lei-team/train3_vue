<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        label="编号"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="项目"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.projectName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="借款人"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.userId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="借款金额"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ "￥"+scope.row.borrowMoney }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="年利率"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.annualRate+"%" }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="期限"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.deadline }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="放款时间"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.startTime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="筹款进度"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.rateSchedule+"%" }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="状态"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.signGiveStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">

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
