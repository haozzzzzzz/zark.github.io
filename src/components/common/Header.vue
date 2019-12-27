<template>
  <div class="header">
    <div class="collapse-icon" @click="collapseChage">
      <i class="el-icon-s-unfold" v-if="collapse"></i>
      <i class="el-icon-s-fold" v-else></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <!-- 使用flex布局 在右侧信息都水平 垂直分布 -->
      <div class="userInfoIcon">
        <!-- 全屏显示 -->
        <div class="fullScreen" @click="handlefullScreen">
          <el-tooltip :content="fullscreen?'取消全屏':'全屏'">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 用户头像 -->
        <div class="user-avatar">
          <img src="../../assets/images/avatar.jpg" alt />
        </div>
        <!-- 操作用户名 用户退出操作  -->
        <el-dropdown class="UserInfos">
          <span class="el-dropdown-link">
            {{userName}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="resetpwd">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import bus from './bus'
export default {
  data() {
    return {
      collapse: true,
      fullscreen: false,
      userName: ''
    }
  },
  methods: {
    // 展开关闭侧边栏
    collapseChage() {
      this.collapse = !this.collapse
      // 使用bus 来实现组件通讯传值
      bus.$emit('collapse', this.collapse)
    },
    // 退出操作
    logout() {
      localStorage.removeItem('key')
      this.$router.push('/login')
    },
    // 重置密码
    resetpwd() {
      this.$message.warning('不允许修改密码,哈哈哈~')
    },
    // 全屏展示  考虑兼容
    handlefullScreen() {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  },
  // 用户登入时,获取到用户的姓名,存到localStorage, 这里是获取用户名
  created() {
    this.userName = localStorage.getItem('key')
  }
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: 60px;
  background-color: darkslategrey;
  line-height: 60px;
  .collapse-icon {
    float: left;
    padding: 0 20px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }
  .logo {
    float: left;
    font-size: 20px;
    color: #fff;
  }
  .header-right {
    float: right;
    margin-right: 20px;
    .fullScreen {
      font-size: 20px;
      color: #fff;
      padding-right: 20px;
    }
    .userInfoIcon {
      display: flex;
      height: 60px;
      align-items: center;
      .user-avatar {
        padding-right: 20px;
        img {
          display: block;
          width: 35px;
          height: 35px;
          border-radius: 50%;
        }
      }
      .UserInfos {
        float: right;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
