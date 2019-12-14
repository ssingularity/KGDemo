<template>
  <div class="main">
    <el-row>
      <el-col span="22" offset="1">
        <el-card shadow="hover" header="外部数据源管理">
          <el-card>
            <el-row>
              <el-col span="9">
                <el-input placeholder="数据源地址" type="text">
                  <template slot="prepend">
                    URI
                  </template>
                </el-input>
              </el-col>
              <el-col span="11" offset="1">
                <el-input placeholder="数据源描述" type="text"/>
              </el-col>
              <el-col span="2" offset="1">
                <el-button>添加</el-button>
              </el-col>
            </el-row>
          </el-card>
          <el-card style="margin-top: 10px">
            <el-table :data="outerDataSource">
              <el-table-column prop="date" label="添加日期" align="center"/>
              <el-table-column prop="desc" align="center" label="数据源描述"/>
              <el-table-column prop="ip" label="地址" align="center"/>
              <el-table-column prop="amount1" label="提供数据量" align="center"/>
              <el-table-column prop="amount2" label="采纳数据量" align="center"/>
              <el-table-column prop="accuracy" label="准确率" align="center"/>
              <el-table-column fixed="right" label="操作" align="center" width="150px">
                <template>
                  <el-button size="small">
                    编辑
                  </el-button>
                  <el-button size="small" type="danger">
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "DataSource",
    data: function () {
      return {
        outerDataSource: [{
          date: '2019-10-28',
          desc: '国家企业信用信息公示系统',
          ip: '127.0.0.1:8081',
          amount1: 132,
          amount2: 130,
          accuracy: 0.985
        }, {
          date: '2019-10-28',
          desc: '天眼查',
          ip: '127.0.0.1:8082',
          amount1: 1062,
          amount2: 753,
          accuracy: 0.709
        }, {
          date: '2019-10-28',
          desc: '启信宝',
          ip: '127.0.0.1:8083',
          amount1: 754,
          amount2: 355,
          accuracy: 0.471
        }]
      }
    }
  }
</script>

<style scoped>

</style>
