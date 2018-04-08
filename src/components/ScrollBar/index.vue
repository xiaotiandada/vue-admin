<template>
                            <!-- wheel onwheel 阻止鼠标滚动 -->
  <div class="scroll-container" @wheel.prevent="handleScroll">
    <div class="scroll-wrapper">
        <slot>empty</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scrollBar',
    data() {
      return {
  
      }
    },
    methods: {
      handleScroll(e) {
        const eventDelta = e.wheelDelta || -e.daltaY * 3 // 120 -120 上下滚动
        console.log(eventDelta)
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
@import '../../styles/variables.less';
  .scroll-container{
      position: relative;
      width: 100%;
      height: 100%;
      background-color: @menuBg;
      .scroll-wrapper{
          position: absolute;
          width: 100% !important;
      }
  }
</style>
