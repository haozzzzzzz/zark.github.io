<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in leveList" :key="item.path" :to="{path:item.path}">
        <!-- {{item.meta.title}} -->
        <template v-if="item.children">
          <el-breadcrumb-item
            v-for="itemChild in item.children"
            :key="itemChild.path"
            :to="{ path:itemChild.path}"
          >{{itemChild.meta.title}}</el-breadcrumb-item>
        </template>
        <template v-else>
          <el-breadcrumb-item :key="item.path" :to="{path:item.path}">{{item.meta.title}}</el-breadcrumb-item>
        </template>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leveList: []
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      this.leveList = matched
      // console.log(this.leveList)
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  }
}
</script>
