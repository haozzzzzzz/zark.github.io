<template>
  <div>
    <div class="container-header">
      <i class="el-icon-s-promotion pr10"></i>拖拽列表
    </div>
    <div class="container">
      <div class="dragBox">
        <div class="DragBoxItem">
          <div class="item-title">todo</div>
          <draggable v-model="todo" @remove="removeHandle" :options="dragOptions">
            <transition-group tag="div" id="todo" class="item-ul">
              <div v-for="item in todo" class="drag-list" :key="item.id">{{item.content}}</div>
            </transition-group>
          </draggable>
        </div>
        <div class="DragBoxItem">
          <div class="item-title">doing</div>
          <draggable v-model="doing" @remove="removeHandle" :options="dragOptions">
            <transition-group tag="div" id="doing" class="item-ul">
              <div v-for="item in doing" class="drag-list" :key="item.id">{{item.content}}</div>
            </transition-group>
          </draggable>
        </div>
        <div class="DragBoxItem">
          <div class="item-title">done</div>
          <draggable v-model="done" @remove="removeHandle" :options="dragOptions">
            <transition-group tag="div" id="done" class="item-ul">
              <div v-for="item in done" class="drag-list" :key="item.id">{{item.content}}</div>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data() {
    return {
      dragOptions: {
        animation: 120,
        scroll: true,
        group: 'sortlist',
        ghostClass: 'ghost-style' // 这个可以不加
      },
      todo: [
        {
          id: 1,
          content: '开发图表组件'
        },
        {
          id: 2,
          content: '开发拖拽组件'
        },
        {
          id: 3,
          content: '开发权限测试组件'
        }
      ],
      doing: [
        {
          id: 1,
          content: '开发登录注册页面'
        },
        {
          id: 2,
          content: '开发头部组件'
        },
        {
          id: 3,
          content: '开发表格相关组件'
        },
        {
          id: 4,
          content: '开发表单相关组件'
        }
      ],
      done: [
        {
          id: 1,
          content: '初始化项目，生成工程目录，完成相关配置'
        },
        {
          id: 2,
          content: '开发项目整体框架'
        }
      ]
    }
  },
  methods: {
    removeHandle(event) {
      console.log(event)
      this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `)
    }
  }
}
</script>
<style lang="less" scoped>
.dragBox {
  display: flex;
  user-select: none;
  .DragBoxItem {
    flex: 1;
    min-width: 300px;
    max-width: 330px;
    height: 500px;
    margin-right: 20px;
    border-radius: 5px;
    background-color: #eff1f5;
    border: 1px solid #e1e4e8;
    .item-title {
      padding: 8px 8px 8px 12px;
      font-size: 14px;
      line-height: 1.5;
      color: #24292e;
      font-weight: 600;
    }
  }
}
.item-ul {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  .drag-list {
    padding: 5px 10px;
    border: 1px solid skyblue;
    margin-bottom: 10px;
    font-size: 15px;
  }
}
.ghost-style {
  display: block;
  color: transparent;
  border-style: dashed;
}
</style>
