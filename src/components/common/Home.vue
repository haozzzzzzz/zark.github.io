<template>
  <div class="wrapper">
    <Header />
    <Aside />
    <div class="content-box" :class="{'collapse-content':collapse}">
      <Content />
      <div class="content">
        <router-view></router-view>
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
