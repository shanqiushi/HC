import Vue from 'vue'
import Router from 'vue-router'
import mhome from '@/components/mhome'
Vue.use(Router)
const home = (resolve) => require(['../components/home.vue'],resolve) //登录
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/m',
      name: 'mhome',
      component: mhome
    }
  ]
})
