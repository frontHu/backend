import Vue from 'vue'
import Router from 'vue-router'
import App from './../App.vue'
import Login from './../page/Login/Login.vue'
import Home from './../page/Home/Home.vue'
import Markdown from './../page/Markdown/Markdown.vue'
import Article from './../page/Article/Article.vue'
import Friend from './../page/Friend/Friend.vue'   

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
      component: Home,
      children: [
        {path: '', component: Markdown},
        {path: 'markdown', component: Markdown},
        {path: 'article/:id', component: Article},
        {path: 'friends', component: Friend}
      ]
    }
  ]
})