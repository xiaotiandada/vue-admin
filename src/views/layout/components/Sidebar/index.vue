<template>
  <scroll-bar>
    <el-menu mode="vertical" unique-opened background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import ScrollBar from '@/components/ScrollBar/index'
import SidebarItem from './SidebarItem'
export default {
  components: {
    ScrollBar,
    SidebarItem
  },
  data() {
    return {

    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  
</style>
