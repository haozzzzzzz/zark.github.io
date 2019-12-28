<template>
  <div>
    <div class="container-header">
      <i class="el-icon-s-promotion pr10"></i>富文本编辑器
    </div>
    <div class="container">
      <div class="plugins-tips">
        Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
        访问地址：
        <a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
      </div>
      <quill-editor
        ref="myTextEditor"
        v-model="content"
        :options="editorOption"
        style="height:200px; margin-bottom:20px"
      ></quill-editor>
      <el-button class="editor-btn" type="primary" @click="submit" style="mairin-top:20px">提交</el-button>
    </div>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: '',
      editorOption: {
        placeholder: 'Hello World'
      }
    }
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      console.log({ editor, html, text })
      this.content = html
    },
    submit() {
      console.log(this.content)
      this.$message.success('提交成功！')
    }
  },
}
</script>
<style lang="less" scoped>
.editor-btn{
  margin-top: 70px;
}
.plugins-tips {
    padding: 20px 10px;
    margin-bottom: 20px;
}
</style>
