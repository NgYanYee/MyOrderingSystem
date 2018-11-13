import Vue from 'vue'
import Router from 'vue-router'
import orderMenu from '@/components/orderMenu'
import orderDetail from '@/components/orderDetail'
// import moreFunction

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'orderMenu',
      component: orderMenu
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail
    }
  ]
})
