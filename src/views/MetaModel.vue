<template>
  <div class="main">
    <el-row>
      <el-col span="22" offset="1">
        <el-card shadow="hover" header="元模型查询">
          <el-row>
            <el-col span="12">
              <el-card shadow="hover" style="margin-right: 5px">
                <el-select v-model="leftSelected" placeholder="请选择元模型" style="width: 100%" @change="onSelected($refs.leftChart, $event)">
                  <el-option label="2019-10-30 12:22:10" value="old"></el-option>
                  <el-option label="最新版本" value="new"></el-option>
                </el-select>
                <div ref="leftChart" style="height: 400px; width: 100%"/>
              </el-card>
            </el-col>
            <el-col span="12">
              <el-card shadow="hover" style="margin-left: 5px">
                <el-select v-model="rightSelected" placeholder="请选择元模型" style="width: 100%" @change="onSelected($refs.rightChart, $event)">
                  <el-option label="2019-10-30 12:22:10" value="old"></el-option>
                  <el-option label="最新版本" value="new"></el-option>
                </el-select>
                <div ref="rightChart" style="height: 400px; width: 100%"/>
              </el-card>
            </el-col>
          </el-row>
          <transition name="el-fade-in-linear">
            <el-card ref="table" style="margin-top: 10px" v-show="show">
              <el-table :data="tableData">
                <el-table-column prop="date" label="时间" align="center"/>
                <el-table-column prop="desc" label="演化描述" align="center"/>
                <el-table-column prop="origin" label="数据来源" align="center"/>
              </el-table>
            </el-card>
          </transition>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echartUtil from '../util/EchartUtil'
  import oldData from '../data/OldData'
  import newData from '../data/NewData'

  export default {
    name: "MetaModel",
    computed: {
      show: function () {
        return this.leftSelected !== '' && this.rightSelected !== ''
      }
    },
    data: function () {
      return {
        leftSelected: '',
        rightSelected: '',
        tableData: [{
          date: '2019-10-31 10:01:22',
          desc: '实体"企业"新增属性：industry',
          origin: '天眼查'
        }, {
          date: '2019-10-31 10:01:22',
          desc: '实体"企业"新增属性：alias',
          origin: '天眼查'
        }, {
          date: '2019-10-31 10:01:22',
          desc: '实体"企业"新增属性：businessScope',
          origin: '天眼查，启信宝'
        }, {
          date: '2019-10-31 10:01:22',
          desc: '实体"企业"新增属性：actualCapital',
          origin: '天眼查'
        }]
      }
    },
    methods: {
      onSelected: function (ref, value) {
        switch (value) {
          case 'old':
            echartUtil.initEchart(ref, oldData);
            break;
          case 'new':
            echartUtil.initEchart(ref, newData);
            break;
        }
      }
    }
  }
</script>

<style scoped>

</style>
