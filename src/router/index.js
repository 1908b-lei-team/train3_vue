import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BorrowMoney from '@/components/BorrowMoney'
import p2p_llk from '@/components/p2p_llk'
import RealName from '@/components/RealName'
import Account from '@/components/Account'
import Withdraw from '@/components/Withdraw'
import VentureCapital from '@/components/VentureCapital'

import Register from '@/components/Register'

import Login from '@/components/Login1'

import Graph from '@/components/Graph'

import p2p_llk_video from '@/components/p2p_llk_video'

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
      path: '/p2p_llk',
      name: 'p2p_llk',
      component: p2p_llk
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
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    { path: '/Graph',
      name: 'Graph',
      component: Graph,
    }
  ]
})
