<template>
  <scroll-bar>
    <el-menu mode="vertical" unique-opened :default-active="$route.path" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
      <!-- <button @click="con">1</button> -->
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
  },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  },
  methods: {
    con() {
      console.log(this.$router.options.routes)
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  
</style>
