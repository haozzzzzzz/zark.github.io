<template>
  <div class="loginBG">
    <div class="loginBox">
      <h1 class="myTitle">专属后台管理系统</h1>
      <el-form :label-position="top" label-suffix=":" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="formLabelAlign.userName" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.passWord" clearable type="password"></el-input>
        </el-form-item>
      </el-form>
      <div class="myBtns">
        <el-button type="success" size="medium" @click="login">确认</el-button>
        <el-button type="info" size="mini" @click="reset">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
        userName: 'admin',
        passWord: '123456'
      },
      top: 'right',
      Name: ''
    }
  },
  methods: {
    login() {
      this.$http
        .get('/user/userInfo')
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            this.Name = res.data.Cname
            this.$store.commit('getName', this.Name)
            this.$router.push('/')
          } else {
            this.$message.error(res.message)
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    reset() {
      this.formLabelAlign = {
        userName: '',
        passWord: ''
      }
      this.login()
    }
  }
}
</script>
<style lang='less' scoped>
.myTitle {
  color: burlywood;
  text-align: center;
  margin-bottom: 10px;
}
.loginBG{
    width: 100%;
    height: 100%;
    background: url('../../assets/images/login-bg.jpg') no-repeat;
    background-size:cover;
}
.loginBox{
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%,-50%);
    width: 30%;
    min-width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    .myBtns{
        display: flex;
        justify-content: space-around;
    }
}
</style>
