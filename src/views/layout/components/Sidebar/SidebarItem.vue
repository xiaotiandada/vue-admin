<template>
  <div class="menu-wrapper">
    <template>
      <router-link>
        <el-menu-item>
          <!-- <svg-icon></svg-icon> -->
          <span>span</span>
        </el-menu-item>
      </router-link>

      <el-submenu>
        <template>
          <!-- <svg-icon></svg-icon> -->
          <span>span1</span>
        </template>

        <template>
          <!-- <sidebar-item></sidebar-item> -->

          <router-link>
            <el-menu-item>
              <!-- <svg-icon></svg-icon> -->
              <span>span2</span>
            </el-menu-item>
          </router-link>

        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    data() {
      return {
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
