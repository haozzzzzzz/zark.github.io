
<template>
  <div>
    <div class="container-header">
      <i class="el-icon-s-data pr10"></i> tab选项卡
    </div>
    <div class="container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 绑定label的值  用字符串 模板字符串拼接 -->
        <el-tab-pane :label="`未读消息(${tabData.length})`" name="first">
          <el-table :data="tabData" :show-header="false">
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button
                  size="small"
                  type="success"
                  @click="handleRead(scope.$index)"
                  >标为已读</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="primary" @click="AllHandleRead"
              >全部标为已读</el-button
            >
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`已读消息(${Read.length})`" name="second">
          <el-table :data="Read" :show-header="false">
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.$index)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="danger" @click="AllHandleDelete"
              >删除全部</el-button
            >
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
          <el-table :data="recycle" :show-header="false">
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button
                  size="small"
                  type="danger"
                  @click="handleReduction(scope.$index)"
                  >还原</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="danger" @click="EmptyDelete">清空回收站</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div>{{ value }}</div>
    <div>
      <el-input v-model="inputVal" @input="ddddd"> </el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputVal: '',
      activeName: 'first',
      value: '',
      tabData: [
        {
          date: '2018-04-19 20:00:00',
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        },
        {
          date: '2018-04-19 21:00:00',
          title: '今晚12点整发大红包，先到先得',
        },
      ],
      Read: [
        {
          date: '2018-04-19 20:00:00',
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        },
      ],
      recycle: [
        {
          date: '2018-04-19 20:00:00',
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        },
      ],
    }
  },
  created() {
    this.$nextTick(() => {
      console.log(11111)
      this.animation(1000)
    })
  },
  methods: {
    ddddd(e) {
      var reg = new RegExp('^(\\d|[1-9]\\d|100)$')
      if (!reg.test(e)) {
        var currentNum = e.replace(/[^1-9]/ig, '').substring(0, 3);
        // var Num = currentNum.substring(0, 2);
        // currentNum * 1 > 100 ? Num : currentNum;
        this.inputVal = currentNum
      } else {
        this.inputVal = e
      }
    },
    animation(value) {
      console.log('进来了 ---')
      let number = value
      let step = 5
      let now = 0
      let paly = () => {
        now += step
        if (now > number) {
          now = number
          return (this.value = now)
        }
        this.value = now
        window.requestAnimationFrame(paly)
      }
      window.requestAnimationFrame(paly)
    },
    // el-tab-pane 点击事件
    handleClick(tab, event) {
      console.log(tab, event)
    },
    // 未读消息 标记成已读
    handleRead(index) {
      const item = this.tabData.splice(index, 1)
      // 从原数组中 第index截取一项 出来赋值给item  [{}]这种格式
      this.Read = item.concat(this.Read) // [{},{}]
    },
    // 已读消息删除去回收站
    handleDelete(index) {
      const item = this.Read.splice(index, 1)
      this.recycle = item.concat(this.recycle)
    },
    // 从回收站还原消息
    handleReduction(index) {
      let item = this.recycle.splice(index, 1)
      this.Read = item.concat(this.Read)
    },
    AllHandleRead() {
      // 把原数组从第0项 截取到最后一项
      let items = this.tabData.splice(0, this.tabData.length)
      this.Read = items.concat(this.Read)
    },
    AllHandleDelete() {
      let items = this.Read.splice(0, this.Read.length)
      this.recycle = items.concat(this.recycle)
    },
    EmptyDelete() {
      // 清空回收站
      this.recycle.splice(0, this.recycle.length)
    },
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      const that = this
      if (newVal === '/tabs') {
        that.animation(1000)
      }
    },
  },
}
</script>

<style lang="less" scoped>
.handle-row {
  margin-top: 10px;
}
</style>
