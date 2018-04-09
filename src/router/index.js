import Vue from 'vue'
import Router from 'vue-router'
import communityManagerInfoRouter from '@/pages/communityManagerInfo'
import communityManagerInfoSubmitRouter from '@/pages/communityManagerInfoSubmit'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
export default router
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
