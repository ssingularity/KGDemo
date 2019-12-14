<template>
  <div class="main">
    <el-row>
      <el-col span="22" offset="1">
        <el-card shadow="hover" header="合约管理">
          <el-table :data="contractList">
            <el-table-column prop="contract_id" label="合约ID" align="center" width="100px"/>
            <el-table-column prop="name" label="合约名" align="center"/>
            <el-table-column prop="date" label="上传日期" align="center"/>
            <el-table-column  label="参与方" align="center">
              <template slot-scope="scope">
                <el-tag v-for="participant in scope.row.participants" :key="participant.name" style="margin: 5px">
                  {{participant.name}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" align="center">
              <template slot-scope="scope">
                <el-button @click="$router.push('/contract/' + scope.row.contract_id)" size="small">
                  查看
                </el-button>
                <el-button size="small">
                  编辑
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination style="margin-top: 20px" background layout="prev, pager, next" :total="1"/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Contract",
    data: function () {
      return {
        contractList: [
          {
            date: '2019-10-31 10:01:22',
            name: '钢材采购合同',
            contract_id: "ZJGG-TJ-2017-GZ-HT-001",
            participants: [
              {
                name: "中建钢构天津有限公司",
                location: "天津西青区王稳庄镇高端金属制品工业区盛达五支路18号"
              },
              {
                name: "云链电子供应链管理（深圳）有限公司",
                location: "广东省深圳市福田区梅林街道梅林路与凯丰路交汇处理想时代大厦"
              }
            ],
          },
          {
            date: '2019-10-31 10:02:31',
            name: '融资合同',
            contract_id: "TXKJ-SH-2017-BJ-TOBB-002",
            participants: [
              {
                name: "中建钢构天津有限公司",
                location: "天津西青区王稳庄镇高端金属制品工业区盛达五支路18号"
              },
              {
                name: "云链电子供应链管理（深圳）有限公司",
                location: "广东省深圳市福田区梅林街道梅林路与凯丰路交汇处理想时代大厦"
              },
            ],
          }],
      }
    }
  }
</script>

<style scoped>

</style>
