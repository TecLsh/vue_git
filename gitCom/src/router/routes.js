import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import DataManager from '../pages/dataManager'
import Analysis from '../pages/analysis'
import AddProject from '../pages/addProject'
import PolicyNotice from '../pages/policeNotice'
import SystemManager from '../pages/systemManager'
import Login from '../components/login/login'
import Register from '../components/register/register'
import Iview from 'iview'

Vue.use(Iview)
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/dataManager',
      component: DataManager
    },
    {
      path: '/analysis',
      component: Analysis
    },
    {
      path: '/addProject',
      component: AddProject
    },
    {
      path: '/policyNotice',
      component: PolicyNotice
    },
    {
      path: '/systemManager',
      component: SystemManager
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})

