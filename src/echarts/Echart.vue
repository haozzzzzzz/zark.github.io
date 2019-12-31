<template>
  <div>
    <div class="container-header">
      <i class="el-icon-s-marketing pr10"></i>图标数据
    </div>
    <div class="container">
      <div id="chart-A" style="width: 600px;height:400px;"></div>
      <div id="chart-B" style="width: 600px;height:400px;"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      myData1: '',
      myData2: ''
    }
  },
  computed: {
    chartObjList: function() {
      var returnList = [
        {
          ref: 'chart-A',
          option: {
            // 左上侧 的标题
            title: {
              text: '柱状图'
            },
            tooltip: {
              // 坐标中间 会出现一条辅助线
              trigger: 'axis',
              axisPointer: {
                type: 'shadow' // 默认为直线 可选为 'line' | 'shadow'
              }
            },
            legend: {
              // 图例的定位
              right: '30',
              // 图例标记的图形宽高
              itemWidth: 10,
              itemHeight: 10,
              data: [],
              // 文本样式
              textStyle: {}
            },
            grid: {
              // 图例的定位
              right: '10%'
            },
            xAxis: {
              // 横坐标的值
              data: ['衬衫A', '羊毛衫A', '雪纺衫A', '裤子A', '高跟鞋A', '袜子A']
            },
            yAxis: {},
            dataZoom: [],
            series: [
              {
                name: '销量A',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              }
            ]
          }
        },
        {
          ref: 'chart-B',
          option: {
            title: {
              text: 'ECharts 入门示例B'
            },
            tooltip: { text: 'ECharts 入门示例B' },
            legend: {},
            grid: {},
            xAxis: {
              data: ['衬衫B', '羊毛衫B', '雪纺衫B', '裤子B', '高跟鞋B', '袜子B']
            },
            yAxis: {},
            dataZoom: [],
            series: [
              {
                name: '销量B',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              }
            ]
          }
        }
      ]
      return returnList
    }
  },
  methods: {
    getDateA() {
      this.$http.get('/user/userInfo').then(res => {
        this.myData1 = res.data.data
      })
      this.setting()
    },
    getDateB() {
      this.$http.get('/user/userInfo').then(res => {
        this.myData2 = res.data.data
      })
      this.setting()
    },
    setting() {
      let vm = this
      setTimeout(() => {
        vm.chartObjList.map(_item => {
          console.log(_item)
          if (_item.ref === 'chart-A') {
            this.setChartA(_item, this.myData1)
          }
          if (_item.ref === 'chart-B') {
            this.setChartA(_item, this.myData2)
          }
        })
      })
    },
    setChartA(_item, _returnObj) {
      var xList1 = []
      var yList1 = []
      _returnObj &&
        _returnObj.map(obj => {
          xList1.push(obj.aaa)
          yList1.push(obj.bbb)
        })
      _item.option.series.data = xList1
      _item.option.yAxis.data = yList1
      this.setEchart(_item)
    },
    setChartB(_item, _returnObj) {
      var xList = []
      var yList = []
      _returnObj &&
        _returnObj.map(obj => {
          xList.push(obj.aaa)
          yList.push(obj.bbb)
        })
      _item.option.series.data = xList
      _item.option.yAxis.data = yList
      this.setEchart(_item)
    },
    setEchart(_item) {
      if (!_item.ref || !document.getElementById(_item.ref)) {
        return
      }
      let myChart = echarts.init(document.getElementById(_item.ref))
      console.log(_item, _item.option)
      myChart.setOption(_item.option)
    }
  },
  created() {
    this.getDateA()
  }
}
</script>
<style lang="less" scoped>
.schart-box {
  display: inline-block;
  margin: 20px;
}
.schart {
  width: 600px;
  height: 400px;
}
.content-title {
  clear: both;
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}
</style>
