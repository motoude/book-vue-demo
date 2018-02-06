import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import book from '@/pages/book'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/book',
      name: 'book',
      component: book
    }
  ]
})
