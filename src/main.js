import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// 引入elm样式
import './assets/css/global.less'
import 'element-ui/lib/theme-chalk/index.css'
// 引入axios请求方式
import axios from 'axios'
// 挂载axios到Vue 原型上
Vue.prototype.$http = axios
Vue.use(ElementUI)
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
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
