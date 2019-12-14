<template>
  <div class="main">
    <el-row>
      <el-col span="22" offset="1">
        <el-card>
          <el-page-header @back="$router.push('/contract')" content="钢材采购合同数据源信息"/>
        </el-card>
        <el-card shadow="hover" style="margin-top: 10px">
          <el-card shadow="hover" header="贸易合约源数据">
            <div ref="interDataChart" style="height: 500px; width: 100%"/>
          </el-card>
          <el-divider/>
          <el-card shadow="hover" header="外部数据源融合">
            <div ref="outerDataChart" style="height: 800px; width: 100%"/>
          </el-card>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import interData from '../data/InterData'
  import outerData from '../data/OuterData'
  import echartUtil from '../util/EchartUtil'

  export default {
    name: "ContractInstance",
    mounted() {
      echartUtil.initEchart(this.$refs.interDataChart, interData);
      echartUtil.initEchart(this.$refs.outerDataChart, outerData);
    },
  }
</script>

<style scoped>

</style>
