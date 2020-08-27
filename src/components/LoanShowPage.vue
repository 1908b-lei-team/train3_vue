<template>
  <!--sunrj风投展示页面-->
  <div>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="编号"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="项目"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.projectName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="借款人"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.userId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="借款金额"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.borrowMoney }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="年利率"
        width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.annualRate }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="期限"
        width="130">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.deadline }}</span>期

        </template>
      </el-table-column>


      <el-table-column
        label="审核状态"
        width="120">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.signGiveStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <p v-if="scope.row.status=='FIRST_TRIAL'">
            <el-button
              size="mini"
              @click="firstTrial(scope.row.number)" ><i class="el-icon-edit"></i>初审</el-button>
          </p>
          <p v-if="scope.row.status=='CHECH_PASS'">
            ——
          </p>
          <p v-if="scope.row.status=='NO_CHECK'">
            ——
          </p>
          <p v-if="scope.row.status=='RECHECK'">
            <el-button
              size="mini"
              @click="recheck(scope.row.number)" ><i class="el-icon-edit"></i>复审</el-button></p>

        </template>
      </el-table-column>
    </el-table>

    <!--分页-->

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page=pageParam.currentPage
      background
      :page-size=pageParam.pagesize
      layout="prev, pager, next"
      :total=pageParam.total>
    </el-pagination>




  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        pageParam: {
          total: 0,//默认数据总数
          pagesize: 10,//每页的数据条数
          currentPage: 1,//默认开始页面
        },
      }
    },
    created() {
      this.queryList();
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      //查询+分页
      queryList() {
        // alert("aaa")
        var self = this
      /*  var paramFenYe = {
          currentPage: this.pageParam.currentPage,
          pagesize: this.pageParam.pagesize,
        }*/
        this.$axios.post('/api/hslApi/pay/queryList').then(function (response) {
          console.log(response.data.data)
          if (response.data.code == 1000) {
            self.pageParam.total = response.data.data.count;
            self.tableData = response.data.data;
            //  console.log(self.total)
          }
          else {
            alert("查询失败")
          }
        })
      },
      /*点击翻页时，获取当前页，插件自带*/
      handleCurrentChange(val) {
        // console.log('当前页=====');
        //  console.log(val);
        this.pageParam.currentPage = val;
        this.queryList();
      },
      firstTrial(number) {
        //alert(number)

        // alert(id)
        // this.$router.push("/FirstTrial")
        this.$router.push(
          {
            path:"/FirstTrial",
            query:{
              number:number,
            }
          }
        );
      },
      recheck(number) {
        //  alert(id)
        //this.$router.push("/RecheckPage")
        this.$router.push(
          {
            path:"/RecheckPage",
            query:{
              number:number,
            }
          }
        );
      }
    }
  }
</script>

<style scoped>

</style>
