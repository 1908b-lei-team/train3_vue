<template>
  <div>
    <!--sunrj所有用户信息展示，管理员才可以看到-->
  <el-table
    :data="openAnAccountList"
    style="width: 100%">
    <el-table-column
      label="编号"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.number }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="真实姓名"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.userName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="手机号码"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.bankPhone }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="最近登陆时间"
      width="280">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.latelyLoginTime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="登录次数"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.loginCount }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="开户状态"
      width="180">
      <template slot-scope="scope">

        <span style="margin-left: 10px" v-if="scope.row.accountOpeningStatus==1">
          已开户
        </span>
        <span style="margin-left: 10px;color: red" v-else-if="scope.row.accountOpeningStatus==2" >
          未开户
        </span>
        <span style="margin-left: 10px;color: red" v-else >
          未知
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="锁定状态"
      width="180">
      <template slot-scope="scope">

        <span style="margin-left: 10px" v-if="scope.row.creditCardNumbers==1">
          未锁定
        </span>
        <span style="margin-left: 10px;color: red" v-else-if="scope.row.creditCardNumbers==2" >
          已锁定
        </span>
        <span style="margin-left: 10px;color: red" v-else >
          未知
        </span>
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
        name: "UserInfoPage",
      data(){
          return{
            openAnAccountList:[],
            pageParam:{
              total:0,//默认数据总数
              pagesize:3,//每页的数据条数
              currentPage:1,//默认开始页面
            },
          }
      },
      created(){

          this.queryList();
      },
      methods:{
          queryList(){
            var self = this
            var paramFenYe = {
              currentPage:this.pageParam.currentPage,
              pagesize:this.pageParam.pagesize,
            }
            this.$axios.post('/capitalApi/openAnAccount/queryListPage',this.$qs.stringify(paramFenYe)).then(function (response) {

             // console.log(response.data.data)
              if (response.data.code==1000) {
                self.pageParam.total = response.data.data.count;
                self.openAnAccountList = response.data.data.list;

           //     console.log(self.total)
              }
              else{
                alert("查询失败")
              }
            })
          },
        /*点击翻页时，获取当前页，插件自带*/
        handleCurrentChange(val) {
       //   console.log('当前页=====');
        //  console.log(val);
          this.pageParam.currentPage = val;
          this. queryList();
        }


      }
    }
</script>

<style scoped>

</style>
