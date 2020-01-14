# vue-study-
- axios封装(两种请求方式)  api配置  
- git推拉 操作教程 
- 配置eslint配置化 请查看.eslintrc.js 
- 代码格式化 请查看 .prettierrc
- 本地代理  解决跨域
- 打包设置本地相对路径
- vuex仓库的使用
- 高亮格式化代码
- MockJs写假数据,返回获取Json数据 查看mock
http://mockjs.com/examples.html#Name mock用法文档
- Vuex 使用(存取 看后面详情介绍) 
- 使用RAP2 模拟请求假数据 详情在echarts里面有介绍 
``` javascript
http://rap2.taobao.org/repository/editor?id=242751&mod=354006&itf=1447271
```

## Project setup

### Git推拉使用(git操作)

1.使用git去clone目标远程仓库 git clone '地址'

2.git branch 查看当前所有的分支

3.在本地创建并切换分支  git checkout -b dev  创建并切换到dev分支上

4.讲分支更新到远程仓库  git push origin dev  把本地dev分支推送到远程分支上

5.git branch --set-upstream-to=origin/dev  //  使用git pull 在远程dev上开发  拉取  
`// 这个设置好了 可以直接使用git pull git push 在dev上拉取推送消息`

6.git push(第一次要用-u 以后不需要) origin master 把当前master分支推送到远程库

7.git merge dev 在当前分支上合并dev分支

8.`git reflog` 查看历史版本号

9.git reset --hard 版本号 实现版本回退

30.本地代码与远程分支做关联 `git remote add origin git@'XXX仓库地址'`


### 配置eslint配置化  请查看.eslintrc.js

### 代码格式化 请查看 .prettierrc

### 设置本地代理 看 vue.config.js 里面有相对路径打包 本地代理解决跨域

### 封装axios 统一管理API请求

### vueX的使用

#### state

### Echarts使用 在echarts里面 有介绍

### 富文本 使用vue-quill-editor插件  引入样式文件即可

### 上传 用的是elm的上传组件 裁剪上传用的是VueCropper插件 但是没样式  需要自己写样式  待解决 !!!

### 自定义图标 需要写一个过滤  实现筛选功能 详情见自定义图标组件

1.直接使用this.$store.state获取到值

2.可以利用`vuex`提供的`mapState`辅助函数将state映射到计算属性中去

```javascript
import { mapState } from 'vuex'
// 在组件 引入 辅助函数 在计算属性中映射使用
export default {
   computed: mapState({
     count: state => state.count
   })
}
```
#### Mutations

1.直接使用this.$store.commit('mutationName')获取到同步方法

2.可以利用`vuex`提供的`mapMutations`辅助函数,将mapMutations映射到methods中去

```javascript
import {mapMutations} from 'vuex'
export default {
  methods: mapMutations([
    'mutationName'
  ]
```
#### Actions

1.直接使用this.$store.dispatch(actionName)直接出发函数  异步

2.可以利用`vuex`提供的`mapActions`辅助函数,将mapActions映射到methods中去

```javascript
import {mapActions} from 'vuex'
export default {
  methods: mapActions([
    'actionName',
  ])
}
```
#### Getters

1.直接使用this.$store.getters.valueName 对派生出来的状态进行访问

2.可以利用`vuex`提供的`mapGetters`辅助函数,将mapGetters映射到本地计算属性中去

```javascript
//在vuex store中
const getters = {
  strLength: state => state.aString.length
// 组件中 计算属性中
import {mapGetters} from 'vuex'
export default {
  computed: ... mapGetters(['strLength'])
}
```
### 高亮格式化代码
```javascript
  <pre v-highlightjs>
    <code>
      {{item}}
      <!-- {{JSON.parse(item.xxx)}} -->
    </code>
  </pre>
```
1.安装 v-highlightjs 并在main.js引入

2.Vue.use(v-highlightjs)

3.引入css放入公共文件,main中引入 使用

`<pre v-highlightjs>` `<code calss='xxx'> `html代码 `<code>``<pre>`即可使用

### vuex 使用 
- 1. 在全局使用store,调用的时候 
```javascript 
this.$store.commit('方法名',参数)      <===== 存值
例:this.$store.commit('getName', this.Name)
mutations 里面记得要 return
localStorage.setItem('key', state.name)
=>(调用store里面的mutations的方法,并用localStorage来存值,防止页面刷新,从store数据丢失的问题)
```
- 2. 在页面取值
``` javascript 
this.$store.getters.方法名        <====== 取值
例:this.$store.getters.getNameByGetters
getters 里面记得要 return
localStorage.getItem('key')
```



