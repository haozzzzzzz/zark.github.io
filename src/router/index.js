import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {// 访问登录页   //获取登录权限后 让他跳转到 /
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '../components/common/Login.vue')
    },
    { // 重定向 如果访问/ 就重定向到/dashboard
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
      children: [{
          path: '/dashboard',
          name: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
          meta: {
            title: '系统首页'
          }
        },
        {
          path: '/table',
          name: 'table',
          component: () => import(/* webpackChunkName: "tabs" */ '../components/page/table.vue'),
          meta: {
            title: '基础表格'
          }
        },
        {
          path: '/tabs',
          name: 'tabs',
          component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
          meta: {
            title: 'tab选项卡'
          }
        },
        {
          path: '/icon',
          name: 'icon',
          component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
          meta: {
            title: '图标列'
          }
        },
        {
          path: '/highlight',
          name: 'highlight',
          component: () => import(/* webpackChunkName: "icon" */ '../components/page/highlight.vue'),
          meta: {
            title: '高亮代码'
          }
        },
        {
          path: '/form',
          name: 'form',
          component: () => import(/* webpackChunkName: "form" */ '../components/page/From.vue'),
          meta: {
            title: '表单相关'
          },
          children: [{
            path: '/sanjicaidan',
            name: 'sanjicaidan',
            component: () => import(/* webpackChunkName: "sanjicaidan" */ '../components/page/sanjicaidan.vue'),
            meta: {
              title: '三级菜单'
            },
            children: [{

              path: '/editor',
              name: 'editor',
              component: () => import(/* webpackChunkName: "editor" */ '../components/page/editor.vue'),
              meta: {
                title: '富文本编辑器'

              }
            }]
          }]
        }
      ]
    },
  ]
})
