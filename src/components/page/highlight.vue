<template>
  <div>
    <div class="container-header">
      <i class="el-icon-s-promotion pr10"></i>高亮代码
    </div>
    <div class="container">
      <p v-for="item in datalist" :key="item.id">
         <pre v-highlightjs>
             <code>
                  {{item}}
             </code>
         </pre>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [
        { id: 1, name: '张三1', age: 151 },
        { id: 2, name: '张三2', age: 152 },
        { id: 3, name: '张三3', age: 153 },
        { id: 4, name: '张三4', age: 154 }
      ]
    }
  }
}
</script>
