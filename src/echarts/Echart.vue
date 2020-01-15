<template>
  <div>
    <div class="container-header">
      <i class="el-icon-s-marketing pr10"></i>图标数据
    </div>
    <div class="container">
      <div id="chart-A" style="width: 600px;height:400px;"></div>
      <div id="chart-B" style="width: 600px;height:400px;"></div>
      <div id="chart-C" style="width: 600px;height:400px;"></div>
      <div id="chart-D" style="width: 600px;height:400px;"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
// import axios from 'axios'
export default {
  data() {
    return {
      myData1: '',
      myData2: '',
      myData3: '',
      myData4: ''
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
              trigger: 'axis'
              //   axisPointer: {
              //     type: 'shadow' // 默认为直线 可选为 'line' | 'shadow'
              //   }
            },
            legend: {
              // 图例的定位
              //   right: '30',
              //   // 图例标记的图形宽高
              //   itemWidth: 10,
              //   itemHeight: 10,
              //   data: [],
              //   // 文本样式
              //   textStyle: {}
            },
            grid: {
              // 图例的定位
              //   right: '10%'
            },
            xAxis: {
              // 是否显示横坐标
              show: true,
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
              text: '折线图'
            },
            tooltip: {
              // 坐标中间 会出现一条辅助线
              trigger: 'axis',
              axisPointer: {
                type: 'cross', // 默认为直线 可选为 'line'(直线) | 'shadow'(阴影)|'none'无指示器|'cross' 十字准星指示器
                crossStyle: {
                  type: 'dotted' // 默认solid 直线 |dashed  虚线 | dotted 点划线
                }
              }
            },
            legend: {
              // 图例的定位
              //   right: '30',
              //   // 图例标记的图形宽高
              //   itemWidth: 10,
              //   itemHeight: 10,
              //   data: [],
              //   // 文本样式
              //   textStyle: {}
            },
            grid: {
              // 图例的定位
              //   right: '10%'
            },
            xAxis: {
              // 是否显示横坐标
              show: true,
              boundaryGap: false, // 坐标轴两边留白策略
              // boundaryGap: ['20%', '20%'], // 两种形式都可以
              axisPointer: {
                lineStyle: {
                  // type: 'dashed'   // 默认solid 直线 |dashed  虚线 | dotted 点划线
                }
              },
              // 横坐标的值
              data: ['6月份', '7月份', '8月份', '9月份', '10月份', '11月份']
            },
            yAxis: {},
            dataZoom: [], // 图例数据缩放
            series: [
              {
                name: '销量A',
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(255, 158, 68)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(255, 70, 131)'
                    }
                  ])
                },
                // areaStyle: {}, // 数据下面阴影化   // 可以写颜色渐变 0-1的颜色
                stack: 'a', // 设置这个参数后,阴影上部分会显示  下部分是下面的阴影颜色
                smooth: true, // 让折线看起来更加平滑
                type: 'line', // 实心圆 实心矩形 原边框矩形 三角形 四边形 左边定位型 箭头型 无类型
                symbol: 'circle', //  'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                data: [5, 20, 36, 10, 10, 20]
              },
              {
                name: '销量B',
                type: 'line',
                stack: 'a',
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(2,88,332)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(2, 70, 131)'
                    }
                  ])
                },
                smooth: true,
                data: [6, 22, 18, 30, 40, 35]
              }
            ]
          }
        },
        {
          ref: 'chart-C',
          option: {
            type: 'pie',
            title: {
              text: '饼图',
              subtext: '饼图数据'
              // x: 'center'
            },
            tooltip: {
              trigger: 'item',
              // showContent: false,  // 展示不展示item
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            bgColor: '#fbfbfb',
            labels: [
              'T恤',
              '牛仔裤',
              '连衣裙',
              '毛衣',
              '七分裤',
              '短裙',
              '羽绒服'
            ],
            datasets: [
              {
                data: [334, 278, 190, 235, 260, 200, 141]
              }
            ],
            legend: {
              x: '0%', // 控制左右 left right center
              y: '20%', // 控制上下 top bottom
              orient: 'vertical', // 控制排列方向 'horizontal'(横向) | 'vertical'(纵向)
              align: 'left',
              // 数据
              data: [
                'T恤',
                '牛仔裤',
                '连衣裙',
                '毛衣',
                '七分裤',
                '短裙',
                '羽绒服'
              ],
              // 大小样式调整
              itemHeight: 10,
              itemWidth: 20,
              // 样式
              textStyle: {
                color: '#000006',
                fontSize: 10
              }
              // icon: 'none' // circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            },
            series: [
              {
                name: '销量A',
                type: 'pie',
                data: [
                  { name: 'T恤', value: 1212 },
                  { name: '牛仔裤', value: 223 },
                  { name: '连衣裙', value: 919 },
                  { name: '毛衣', value: 112 },
                  { name: '七分裤', value: 323 },
                  { name: '短裙', value: 919 },
                  { name: '羽绒服', value: 119 }
                ],
                center: ['50%', '60%'], // 位置
                radius: '50%' // 大小
              }
            ]
            // media: [
            //   {
            //     option: {
            //       legend: {
            //         right: 'center',
            //         bottom: 0,
            //         orient: 'horizontal'
            //       }
            //     }
            //   }
            // ]
          }
        },
        {
          ref: 'chart-D',
          option: {
            type: 'pie',
            title: {
              text: '环形图',
              subtext: '饼图数据'
              // x: 'center'
            },
            tooltip: {
              trigger: 'item',
              // showContent: false,  // 展示不展示item
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            bgColor: '#fbfbfb',
            labels: [
              'T恤',
              '牛仔裤',
              '连衣裙',
              '毛衣',
              '七分裤',
              '短裙',
              '羽绒服'
            ],
            datasets: [
              {
                data: [334, 278, 190]
              }
            ],
            legend: {
              x: 'center', // 控制左右 left right center
              y: 'bottom', // 控制上下 top bottom
              orient: 'horizontal', // 控制排列方向 'horizontal'(横向) | 'vertical'(纵向)
              align: 'left',
              // 数据
              data: ['Vue', 'React', 'JS'],
              // 大小样式调整
              itemHeight: 10,
              itemWidth: 20,
              // 样式
              textStyle: {
                color: '#000006',
                fontSize: 10
              }
              // icon: 'none' // circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            },
            series: [
              {
                name: '销量A',
                type: 'pie',
                itemStyle: {
                  // borderColor: 'red' // 大圆的边框颜色
                },
                data: [
                  { name: 'Vue', value: 600 },
                  { name: 'React', value: 1200 },
                  { name: 'JS', value: 600 } // 饼型的名字跟数值
                ],
                center: ['50%', '60%'], // 位置
                // radius: '50%' // 大小
                radius: [60, 120] // 数组传的时候 第一个是内半径  第二个是外半径
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
      this.$http.get('http://rap2api.taobao.org/app/mock/242751/movielistinfo').then(response => {
        console.log(response);
      })
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
            this.setChartB(_item, this.myData2)
          }
          if (_item.ref === 'chart-C') {
            this.setChartC(_item, this.myData3)
          }
          if (_item.ref === 'chart-D') {
            this.setChartD(_item, this.myData4)
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
      // _item.option.series.data = xList1
      // _item.option.yAxis.data = yList1
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
      // _item.option.series.data = xList
      // _item.option.yAxis.data = yList
      this.setEchart(_item)
    },
    setChartC(_item, _returnObj) {
      var xList = []
      var yList = []
      _returnObj &&
        _returnObj.map(obj => {
          xList.push(obj.aaa)
          yList.push(obj.bbb)
        })
      // _item.option.series.data = xList
      // _item.option.yAxis.data = yList
      this.setEchart(_item)
    },
    setChartD(_item, _returnObj) {
      var xList = []
      var yList = []
      _returnObj &&
        _returnObj.map(obj => {
          xList.push(obj.aaa)
          yList.push(obj.bbb)
        })
      // _item.option.series.data = xList
      // _item.option.yAxis.data = yList
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
