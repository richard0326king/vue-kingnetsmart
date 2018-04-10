import Vue from 'vue'
import Router from 'vue-router'
import communityManagerInfoRouter from '@/pages/communityManagerInfo'
import communityManagerInfoSubmitRouter from '@/pages/communityManagerInfoSubmit'
import addHashTagRouter from '@/pages/addHashTag'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/communityManagerInfo',
      meta: {
        title: 'communityManagerInfo'
      },
      component: communityManagerInfoRouter
    },
    {
      path: '/communityManagerInfoSubmitRouter',
      meta: {
        title: 'communityManagerInfoSubmit'
      },
      component: communityManagerInfoSubmitRouter
    },
    {
      path: '/',
      meta: {
        title: 'addHashTag'
      },
      component: addHashTagRouter
    }
  ]
})
export default router
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
