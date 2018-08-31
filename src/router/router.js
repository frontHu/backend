import Vue from 'vue'
import Router from 'vue-router'
import App from './../App.vue'
import Login from './../page/Login/Login.vue'
import Home from './../page/Home/Home.vue' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      component: App,
      children: [
        {path: '', component: Login}
      ]
    },
    {
      path: '/home',
      component: Home
    }
  ]
})