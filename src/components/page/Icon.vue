<template>
  <div>
    <div class="container-header">
      <i class="el-icon-menu pr10"></i>自定义图标
    </div>
    <div class="container">
      <h2>图标</h2>
      <div class="search-box">
        <el-input
          class="search"
          size="large"
          v-model="keyword"
          clearable
          placeholder="请输入图标名称"
          width="300px"
        ></el-input>
        <ul>
          <li class="icon-li" v-for="(item,index) in obj" :key="index">
            <div class="icon-li-content">
              <i :class="`el-icon-lx-${item}`"></i>
              <span>{{item}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: '',
      iconList: [
        'attentionforbid',
        'attentionforbidfill',
        'attention',
        'attentionfill',
        'tag',
        'tagfill',
        'people',
        'peoplefill',
        'notice',
        'noticefill',
        'mobile',
        'mobilefill',
        'voice',
        'voicefill',
        'unlock',
        'lock',
        'home',
        'homefill',
        'delete',
        'deletefill',
        'notification',
        'notificationfill',
        'notificationforbidfill',
        'like',
        'likefill',
        'comment',
        'commentfill',
        'camera',
        'camerafill',
        'warn',
        'warnfill',
        'time',
        'timefill',
        'location',
        'locationfill',
        'favor',
        'favorfill',
        'skin',
        'skinfill',
        'news',
        'newsfill',
        'record',
        'recordfill',
        'emoji',
        'emojifill',
        'message',
        'messagefill',
        'goods',
        'goodsfill',
        'crown',
        'crownfill',
        'move',
        'add',
        'hot',
        'hotfill',
        'service',
        'servicefill',
        'present',
        'presentfill',
        'pic',
        'picfill',
        'rank',
        'rankfill',
        'male',
        'female',
        'down',
        'top',
        'recharge',
        'rechargefill',
        'forward',
        'forwardfill',
        'info',
        'infofill',
        'redpacket',
        'redpacket_fill',
        'roundadd',
        'roundaddfill',
        'friendadd',
        'friendaddfill',
        'cart',
        'cartfill',
        'more',
        'moreandroid',
        'back',
        'right',
        'shop',
        'shopfill',
        'question',
        'questionfill',
        'roundclose',
        'roundclosefill',
        'roundcheck',
        'roundcheckfill',
        'global',
        'mail',
        'punch',
        'exit',
        'upload',
        'read',
        'file',
        'link',
        'full',
        'group',
        'friend',
        'profile',
        'addressbook',
        'calendar',
        'text',
        'copy',
        'share',
        'wifi',
        'vipcard',
        'weibo',
        'remind',
        'refresh',
        'filter',
        'settings',
        'scan',
        'qrcode',
        'cascades',
        'apps',
        'sort',
        'searchlist',
        'search',
        'edit'
      ]
    }
  },
  computed: {
    obj() {
      // 计算属性监听   先过来图标数组 如果item满足 包括this.keyword 就返回给this.iconList数组
      return this.iconList.filter(item => {
        return item.indexOf(this.keyword) !== -1
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search-box {
  text-align: center;
  margin-top: 10px;
}
.search {
  width: 300px;
}
.icon-li {
  display: inline-block;
  padding: 10px;
  width: 120px;
  height: 120px;
}
.icon-li-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.icon-li-content i {
  font-size: 36px;
  color: #606266;
}
.icon-li-content span {
  margin-top: 10px;
  color: #787878;
}
</style>
