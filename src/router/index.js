import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from '@/pages/home'
import Page1Router from '@/pages/page1'
import Page2Router from '@/pages/page2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component:HomeRouter
    },{
      path: '/page1',
      component: Page1Router
    },
    {
      path: '/page2',
      component: Page2Router
    }

  ]
})
