<template>
  <div>
    <el-menu
      class="navbar"
      mode="horizontal">
      <hamburger class="hamburger-container"></hamburger>
      <breadcrumb></breadcrumb>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item>
              <span style="display: block;">LogOut</span>
            </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: {
    Hamburger,
    Breadcrumb
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .navbar{
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container{
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
    .avatar-container{
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 35px;
      .avatar-wrapper{
        cursor: pointer;
        margin-top: 5px;
        position:relative;
        .user-avatar{
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
      
    }
  }
</style>
