import Vue from 'vue'
import Router from 'vue-router'
import communityManagerInfoRouter from '@/pages/communityManagerInfo'
import communityManagerInfoSubmitRouter from '@/pages/communityManagerInfoSubmit'
import addHashTagRouter from '@/pages/addHashTag'
import addTypeRouter from '@/pages/addType'

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
    },
    {
      path: '/addHashTag',
      meta: {
        title: 'addHashTag'
      },
      component: addHashTagRouter
    },
    {
      path: '/addType',
      meta: {
        title: 'addType'
      },
      component: addTypeRouter
    }
  ]
})
export default router
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
