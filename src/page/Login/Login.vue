<template>
  <div class="login">
    <div class="login-box">
      <h3>博客后台管理系统</h3>
      <input 
        v-model="username" @input="inputHandle($event,'username')" 
        type="text" 
        class="username"
        placeholder="admin"
      >
      <input 
        v-model.number="password" 
        type="text"
        class="password"
        placeholder="password"
      >
      <span>{{password}}</span>
      <button 
        class="login-btn"
        @click="handleLogin"
      >Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      console.log('tag', '')
    },
    inputHandle(e, type) {
      this[type] = e.target.value
    },
    handleKey(e) {
      console.log(e.keyCode)
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: #324157;
  background: url('./../../assets/bg-01-denglu.png') no-repeat center center;
  .login-box {
    width: 380px;
    height: 240px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -120px 0 0 -190px;
    padding: 0 40px 40px;
    h3 {
      color: #324157;
      text-align: center;
    }
    .username,
    .password {
      margin-bottom: 1rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #bfcbd9;
      box-sizing: border-box;
      color: #1f2d3d;
      display: block;
      font-size: inherit;
      height: 36px;
      line-height: 1;
      outline: 0;
      padding: 3px 10px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
    }
    .login-btn {
      width: 100%;
      height: 36px;
      border-radius: 4px;
      background-color: #4db3ff;
      color: #fff;
      border: none;
      outline: none;
    }
  }
}
</style>

