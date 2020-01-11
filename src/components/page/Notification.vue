<template>
  <div>
    <div class="container-header">
      <i class="el-icon-s-promotion pr10"></i>弹窗提示
    </div>
    <div class="container">
      <template>
        <el-button plain @click="open1">可自动关闭</el-button>
        <el-button plain @click="open2">不会自动关闭</el-button>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    open1() {
      const h = this.$createElement
      this.$notify({
        title: '提示消息哦!',
        message: h(
          'i',
          { style: 'color: teal' },
          '欸,这是一段可以自动消失的提示本文哦~'
        )
      })
    },
    open2() {
      this.$notify({
        title: '警告',
        message: '这是一条不会自动关闭的消息!',
        duration: 0
      })
    }
  }
}
</script>
