import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// 引入elm样式
import './assets/css/global.less'
// 引入图标样式
import './assets/css/icon.css'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局指令
import './components/common/v-dialogDrag'
// 引入高亮js
import VuehighlightJS from 'vue-highlightjs'
// 引入高亮css
import './assets/css/atom-one-dark.css'
// 引入axios请求方式
// import axios from 'axios'
import VueCropper from 'vue-cropperjs'
Vue.use(VueCropper)
// 挂载axios到Vue 原型上
// Vue.prototype.$http = axios
Vue.use(ElementUI)
// 全局定义element尺寸大小
Vue.prototype.$ELEMENT = {
  size: 'small',
  zIndex: 3000
}
Vue.use(VuehighlightJS)
// 引入mockjs发起请求假数据
require('./mock/index')
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 设置网页的标题
  document.title = `${to.meta.title} | 后台`
  // 每次退出会清空localStorage的用户名,如果没有用户名 说明没有登陆过,让他跳转登陆页  有的话放行  一般用token做判断
  let role = localStorage.getItem('key')
  if (!role && to.path !== '/login') {
    next('/login')
  } else {
    next();
  }
  // 这个是存储token 用户名信息的 下面这个操作cookie的
  // 1.npm install vue-cookies --save
  // 2.引入 并全局挂载  注意使用这里的this  箭头函数改变this指向
  // 3.设置cookie  this.$cookies.set(keyName, time) 获取cookie this.$cookies.get(keyName)
  // 3.1 删除cookie this.$cookies.remove(keyName)  查看所有cookie名称 数组 this.$cookies.isKey(keyName)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
