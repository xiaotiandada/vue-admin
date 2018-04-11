<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name</div>
    <div class="dashboard-text">roles</div>
  </div>
</template>

<script>
  export default {
    naem: 'dashboard',
    data() {
      return {
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
