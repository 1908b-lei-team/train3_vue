import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BorrowMoney from '@/components/BorrowMoney'
import p2p_llk_calendar from '@/components/p2p_llk/p2p_llk_calendar'
import RealName from '@/components/RealName'
import Account from '@/components/Account'
import Withdraw from '@/components/Withdraw'
import VentureCapital from '@/components/VentureCapital'
import Register from '@/components/Register'
import Graph from '@/components/Graph'
import p2pLogin from '@/components/p2pLogin'
import p2p_llk_video from '@/components/p2p_llk/p2p_llk_video'
import p2p_llk_index from '@/components/p2p_llk/p2p_llk_index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/p2p_llk_calendar',
      name: 'p2p_llk_calendar',
      component: p2p_llk_calendar
    },
    {
      path: '/RealName',
      name: 'RealName',
      component: RealName
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
    {
      path: '/p2p_llk_video',
      name: 'p2p_llk_video',
      component: p2p_llk_video
    },
    {
      path: '/BorrowMoney',
      name: 'BorrowMoney',
      component: BorrowMoney,
    },
    {
      path: '/Withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    { path: '/VentureCapital',
      name: 'VentureCapital',
      component: VentureCapital,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/p2pLogin',
      name: 'p2pLogin',
      component: p2pLogin,
    },
    { path: '/Graph',
      name: 'Graph',
      component: Graph,
    },
    {
      path: '/p2p_llk_index',
      name: 'p2p_llk_index',
      component: p2p_llk_index
    },
  ]
})
