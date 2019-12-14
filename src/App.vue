<template>
  <div id="app">
    <el-menu
            style="opacity: 0.9"
            class="el-menu-demo"
            mode="horizontal"
            :router="isRouter"
            background-color="#58A5F5"
            text-color="#fff"
            active-text-color="#FFEFBA">
      <el-submenu index="/">
        <template slot="title">元数据管理</template>
        <el-menu-item index="/contract">
          合约管理
        </el-menu-item>
        <el-menu-item index="/data-source">
          外部数据源管理
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/meta-model">
        元模型查询
      </el-menu-item>
      <el-menu-item index="/kg-impl">
        知识图谱应用
      </el-menu-item>
    </el-menu>
    <transition name="el-fade-in-linear" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      isRouter: true
    }
  },
  components: {}
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
