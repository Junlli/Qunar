import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home.vue'
import City from './pages/city/City.vue'
import Detail from './pages/detail/Detail.vue'
import Search from './pages/search/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
