import Vue from 'vue'
import Router from 'vue-router'
import BorrowMoney from '@/components/BorrowMoney'
import RealName from '@/components/RealName'
import Account from '@/components/Account'
import SecurityCenter from '@/components/SecurityCenter'
import Withdraw from '@/components/Withdraw'
import VentureCapital from '@/components/VentureCapital'
import Pay from '@/components/Pay'
import Pay1 from '@/components/Pay1'
import Pay2 from '@/components/Pay2'
import Pay3 from '@/components/Pay3'
import Graph from '@/components/patterning/Graph'
import p2pLogin from '@/components/p2pLogin'
import p2p_llk_video from '@/components/p2p_llk/p2p_llk_video'
import Histogram from '@/components/patterning/Histogram'
import Face from '@/components/Face'
import Loan from '@/components/Loan'
import Index from '@/components/Index'
import p2pRegister from '@/components/p2pRegister'
import FirstTrial from '@/components/FirstTrial'
import RecheckPage from '@/components/RecheckPage'
import UserInfoPage from '@/components/UserInfoPage'
import PneumaticControlPage from '@/components/PneumaticControlPage'
import AdminIndex from '@/components/AdminIndex'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/Face',
      name: 'Face',
      component: Face,
    },
    {
      path: '/p2pLogin',
      name: 'p2pLogin',
      component: p2pLogin,
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/',
          name: 'p2p_llk_video',
          component: p2p_llk_video
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
          path: '/BorrowMoney',
          name: 'BorrowMoney',
          component: BorrowMoney,
        },
        {
          path: '/Withdraw',
          name: 'Withdraw',
          component: Withdraw
        },
        { path: '/Pay',
          name: 'Pay',
          component: Pay,
        },
        { path: '/Pay1',
          name: 'Pay1',
          component: Pay1,
        },
        { path: '/Pay2',
          name: 'Pay2',
          component: Pay2,
        }
        ,
        { path: '/Pay3',
          name: 'Pay3',
          component: Pay3,
        },
        {
          path: '/Histogram',
          name: 'Histogram',
          component: Histogram,
        },
        {
          path: '/Loan',
          name: 'Loan',
          component: Loan,
        }
      ]
    },
    {
      path: '/p2pRegister',
      name: 'p2pRegister',
      component: p2pRegister,
    },
    {
      path: '/AdminIndex',
      name: 'AdminIndex',
      component: AdminIndex,
      children:[
        {
          path: '/UserInfoPage',
          name: 'UserInfoPage',
          component: UserInfoPage,
        },
        {
          path: '/FirstTrial',
          name: 'FirstTrial',
          component: FirstTrial,
        },
        {
          path: '/RecheckPage',
          name: 'RecheckPage',
          component: RecheckPage,
        },

        {
          path: '/PneumaticControlPage',
          name: 'PneumaticControlPage',
          component: PneumaticControlPage,
        },
        {
          path: '/SecurityCenter',
          name: 'SecurityCenter',
          component: SecurityCenter
        }
      ]
    },
    {
      path: '/p2pRegister',
      name: 'p2pRegister',
      component: p2pRegister,
      children:[
        {
          path: '/VentureCapital',
          name: 'VentureCapital',
          component: VentureCapital,
        },
      ]
    },
    {
      path: '/Graph',
      name: 'Graph',
      component: Graph,
    }
  ]
})
