<template>
    <div class="app-wrapper">
      <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
          <navbar></navbar>
          <app-main></app-main>
        </div>
    </div>
</template>

<script>
import Navbar from '@/views/layout/components/Navbar'
import Sidebar from '@/views/layout/components/Sidebar/index'
import AppMain from '@/views/layout/components/AppMain'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>


<style rel="stylesheet/less" lang="less" scoped>
@import '../../styles/mixin.less';
.app-wrapper{
  .clearfix();
  position: relative;
  height: 100%;
  width: 100%;
}
</style>