<template>
  <div>
    <!--sunrj理财项目展示页面-->
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
    label="手机号码"
    width="130">
    <template slot-scope="scope">
      <span style="margin-left: 10px">{{ scope.row.userId }}</span>
    </template>
    </el-table-column>

    <el-table-column
      label="本息合计"
      width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.total }}</span>
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
      label="利息金额"
      width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.interest }}</span>
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
        <span style="margin-left: 10px" v-if="scope.row.deadline=='3_STAGE'">
          3期
        </span>
        <span style="margin-left: 10px;" v-if="scope.row.deadline=='6_STAGE'" >
           6期
        </span>
        <span style="margin-left: 10px;" v-if="scope.row.deadline=='9_STAGE'" >
          9期
        </span>
        <span style="margin-left: 10px;" v-if="scope.row.deadline=='12_STAGE'" >
          12期
        </span>
      </template>
    </el-table-column>

    <el-table-column
      label="筹款进度"
      width="80">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.fundraisingProgress }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="发售时间"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.startTime }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="放款状态"
      width="120">
      <template slot-scope="scope">

        <span style="margin-left: 10px" v-if="scope.row.signGiveStatus=='BREAK_A_LOAN'">
          借款中
        </span>
        <span style="margin-left: 10px;" v-if="scope.row.signGiveStatus=='WAIT_MONEY'" >
          待放款
        </span>
        <span style="margin-left: 10px;" v-if="scope.row.signGiveStatus=='LOADING_MONEY'" >
          还款中
        </span>
        <span style="margin-left: 10px;" v-if="scope.row.signGiveStatus=='YES_THE_MONEY'" >
          已完成
        </span>
        <span style="margin-left: 10px;" v-if="scope.row.signGiveStatus=='FAILURE'" >
          流标
        </span>


      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
        name: "PneumaticControlPage",
      data(){
          return{
            tableData:[],
            pageParam:{
              total:0,//默认数据总数
              pagesize:10,//每页的数据条数
              currentPage:1,//默认开始页面
            },
        }
      },
      created(){
          this.queryList();
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        //查询+分页
        queryList(){
         // alert("aaa")
          var self = this
          var paramFenYe = {
            currentPage:this.pageParam.currentPage,
            pagesize:this.pageParam.pagesize,
          }
          this.$axios.post('/api/capitalApi/control/queryListPage',this.$qs.stringify(paramFenYe)).then(function (response) {
            //console.log(response.data.data)
            if (response.data.code==1000) {
              self.pageParam.total = response.data.data.count;
              self.tableData = response.data.data.list;
            //  console.log(self.total)
            }
            else{
              alert("查询失败")
            }
          })
        },
        /*点击翻页时，获取当前页，插件自带*/
        handleCurrentChange(val) {
         // console.log('当前页=====');
        //  console.log(val);
          this.pageParam.currentPage = val;
          this. queryList();
        }

      }
    }
</script>

<style scoped>

</style>
