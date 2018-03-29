import Vue from 'vue'
import Router from 'vue-router'
import communityManagerInfoRouter from '@/pages/communityManagerInfo'
import communityManagerInfoSubmitRouter from '@/pages/communityManagerInfoSubmit'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: communityManagerInfoRouter
    },
    {
      path: '/communityManagerInfoSubmitRouter',
      component: communityManagerInfoSubmitRouter
    }

  ]
})
