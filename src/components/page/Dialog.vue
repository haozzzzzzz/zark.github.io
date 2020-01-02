<template>
  <div>
    <div class="container-header">
      <i class="el-icon-s-promotion pr10"></i>拖拽弹框
    </div>
    <div class="container">
      <el-dialog title="提示" v-dialogDrag :visible.sync="centerDialogVisible"  width="30%" center>
        <span>听说是可以移动的提示框哦o~</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-button @click="showDialog">点我</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
    }
  },
  methods: {
    showDialog() {
      this.centerDialogVisible = true
    }
  }
}
</script>
