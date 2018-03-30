import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Account from '@/components/Account/Account'
import Search from '@/components/Search/Search'
import Setting from '@/components/Setting/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
