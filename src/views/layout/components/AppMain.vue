<template>
  <section class="app-amin">
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  
</style>
