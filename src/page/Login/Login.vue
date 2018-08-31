<template>
  <div class="login">
    <div class="login-box">
      <input v-model="username" @input="inputHandle($event,'username')" type="text" class="username">
      <input v-model="password" @input="inputHandle($event,'password')" type="text" class="password">
      <button class="login-btn" @click="handleLogin">Login</button>
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
      console.log(111)
    },
    inputHandle(e, type) {
      this[type] = e.target.value
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: #324157;
  .login-box {
    width: 380px;
    height: 240px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -120px 0 0 -190px;
    padding: 40px;
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

