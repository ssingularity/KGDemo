<template>
  <div class="main">
    <el-row>
      <el-col span="22" offset="1">
        <el-card shadow="hover" header="知识图谱应用">
          <el-row>
            <el-col span="18">
              <el-card>
                <el-row >
                  <el-col span='10'>
                    <el-input v-model="companyName" placeholder="请输入公司名">
                      <template slot="prepend">
                        公司名
                      </template>
                    </el-input>
                  </el-col>
                  <el-col span='10' offset="1">
                    <el-input v-model="depth" placeholder="请输入查询深度">
                      <template slot="prepend">
                        查询深度
                      </template>
                    </el-input>
                    <el-tooltip  effect="dark" content="默认查询深度为2" placement="top" style="position: absolute; top: -10px;">
                      <i class="el-icon-question"/>
                    </el-tooltip>
                  </el-col>
                  <el-col span='2' offset="1">
                    <el-button plain @click="dialogVisible=true">查询</el-button>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col span="5" offset="1">
              <el-card>
                <el-row>
                  <el-col span="8">
                    <el-button type="primary" icon="el-icon-refresh" circle @click="refresh"/>
                  </el-col>
                  <el-col span="16">
                    <div style="text-align: left;">更新时间:</div>
                    <div style="color: deepskyblue">{{refreshTime}}</div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
          <el-card style="margin-top: 10px" header="贸易金融知识图谱">
            <div ref="kgImplChart" style="width: 100%; height: 500px"/>
          </el-card>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="云链电子供应链管理有限公司(虚拟)" :visible.sync="dialogVisible" width="30%">
      <el-form>
        <el-form-item label="融合实体" label-width="80px">
          <el-card>
            <div>
              <el-tag>云链电子供应链管理（深圳）有限公司</el-tag>
            </div>
            <div>
              <el-tag>云链电子供应链管理有限公司</el-tag>
            </div>
          </el-card>
        </el-form-item>
        <el-form-item label="相似度" label-width="80px">
            <el-tag type="success">0.75</el-tag>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import echartUtil from '../util/EchartUtil'
  import KGImplFirstData from "../data/KGImplFirstData";
  import KGImplSecondData from "../data/KGImplSecondData";

  export default {
    name: "KGImpl",
    data: function () {
      return {
        dialogVisible: false,
        companyName: '',
        depth: '',
        refreshTime: '2019-11-05 11:26',
      }
    },
    mounted() {
      echartUtil.initEchart(this.$refs.kgImplChart, KGImplFirstData);
    },
    methods: {
      refresh: function () {
        this.refreshTime = '2019-12-14 18:19';
        echartUtil.initEchart(this.$refs.kgImplChart, KGImplSecondData);
      }
    }
  }
</script>

<style scoped>

</style>
