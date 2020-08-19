import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import BorrowMoney from '@/components/BorrowMoney'
import p2p_llk from '@/components/p2p_llk'
import RealName from '@/components/RealName'
import Withdraw from '@/components/Withdraw'
import VentureCapital from '@/components/VentureCapital'
import Graph from '@/components/Graph'

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
      path: '/Test',
      name: 'Test',
      component: Test
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
    { path: '/Graph',
      name: 'Graph',
      component: Graph,
    }
  ]
})
