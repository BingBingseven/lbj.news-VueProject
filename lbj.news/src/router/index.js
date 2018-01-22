import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import Select from '@/components/options/select'
import Onlive from '@/components/options/onlive'
import News from '@/components/options/news'

Vue.use(Router)

const router=new Router({
  linkActiveClass: 'active',
  hashbang:true,
  history: true,
  routes: [
    {
      path: '/',
      component: News
    },{
      path: '/select',
      component: Select
    },{
      path: '/onlive',
      component: Onlive
    },{
      path: '/news',
      component: News
    }
  ]
})

export default router