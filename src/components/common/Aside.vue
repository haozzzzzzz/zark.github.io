<template>
  <div class="aside">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      class="sidebar-el-menu"
      :collapse="collapse"
      active-text-color="#ffd04b"
      :default-active="onRoutes"
      @open="handleOpen"
      @close="handleClose"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <template v-for="itemC1 in item.subs">
              <el-submenu v-if="itemC1.subs" :index="itemC1.index" :key="itemC1.index">
                <template slot="title">{{ itemC1.title }}</template>
                <el-menu-item
                  v-for="(itemC2,i) in itemC1.subs"
                  :key="i"
                  :index="itemC2.index"
                >{{ itemC2.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="itemC1.index" :key="itemC1.index">{{itemC1.title}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import bus from './bus'
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-house',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-edit-outline',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-s-data',
          index: 'tabs',
          title: 'tab选项卡'
        },
         {
          icon: 'el-icon-s-promotion',
          index: 'highlight',
          title: '高亮代码'
        },
        {
          icon: 'el-icon-s-grid',
          index: '3',
          title: '表单相关',
          subs: [
            {
              index: '',
              title: '三级菜单',
              subs: [
                {
                  index: 'editor',
                  title: '富文本编辑器'
                },
              ]
            },
            {
              index: 'upload',
              title: '文件上传'
            }
          ]
        },
        {
          icon: 'el-icon-menu',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'el-icon-s-marketing',
          index: 'echarts',
          title: 'schart图表'
        },
        {
          icon: 'el-icon-pie-chart',
          index: '6',
          title: '拖拽组件',
          subs: [
            {
              index: 'drag',
              title: '拖拽列表'
            },
            {
              index: 'dialog',
              title: '拖拽弹框'
            }
          ]
        },
        {
          icon: 'el-icon-folder-delete',
          index: 'i18n',
          title: '国际化功能'
        },
        {
          icon: 'el-icon-pie-chart',
          index: '/donate',
          title: '支持作者'
        }
      ]
    }
  },
  computed: {
      onRoutes() {
          return this.$route.path.replace('/', '');
      }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created() {
    // 接收header传过来的信息 赋值给collapse
    bus.$on('collapse', HeadertoAside => {
      this.collapse = HeadertoAside
      // 把值传到Home组件 动态改变宽度
      bus.$emit('collapse-content', HeadertoAside)
    })
  }
}
</script>

<style lang="less" scoped>
.aside {
  display: block;
  position: absolute;
  left: 0;
  bottom: 1px;
  overflow-y: scroll;
//   top: 60px;
  height: calc(100% - 60px);
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 200px;
    height: calc(100%);
  }
}
.aside::-webkit-scrollbar {
  width: 0;
}
.aside > ul {
    height: 100%;
}
</style>
