import Vue from 'vue'
import Router from 'vue-router'

import {common} from '@common/router'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main
    },
	...common.routes
  ]
})
