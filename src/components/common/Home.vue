<template>
  <div class="wrapper">
    <Header />
    <Aside />
    <div class="content-box" :class="{'collapse-content':collapse}">
      <Content />
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content">Up</el-backtop>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Header'
import Aside from './Aside'
import Content from './Content'
import bus from './bus'
export default {
  components: {
    Header,
    Aside,
    Content
  },
  data() {
    return {
      collapse: false
    }
  },
  created() {
    bus.$on('collapse-content', HeadertoAside => {
      this.collapse = HeadertoAside
    })
  }
}
</script>
