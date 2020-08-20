<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="projectName"
      label="项目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="借款人"
      width="180">
    </el-table-column>
    <el-table-column
      prop="borrowMoney"
      label="借款金额">
    </el-table-column>
    <el-table-column
      prop="annualRate"
      label="年利率">
    </el-table-column>
    <el-table-column
      prop="deadline"
      label="期限">
    </el-table-column>
    <el-table-column
      prop="loan_time"
      label="发起时间">
    </el-table-column>
    <el-table-column
      prop="joinThe"
      label="加入次数">
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button  size="mini"  @click="cart(scope.row.id)" type="warning">立即购买</el-button>

      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "pay1",
      data() {
        return {
          tableData:[],
          id:"",
        }
      },
      created(){
        this.queryList();
        this.id=this.$route.query.id;
      },
      methods: {
        queryList(){
          var self =this;
          this.$axios.post("api/hslApi/pay/queryList").then(function (res) {
            if (res.data.code == 200) {
              //alert(res.data.data)
              self.tableData =  res.data.data;
            }
          })
        },

      //立即购买
        cart(id){
          alert(id)
          this.$router.push({
            path:'/Pay2',
            query:{

              id: id,
            }
          })
        }

      }
    }
</script>

<style scoped>

</style>
