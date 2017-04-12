import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import DataManager from '../pages/dataManager'
import Analysis from '../pages/analysis'
import AddProject from '../pages/addProject'
import PolicyNotice from '../pages/policeNotice'
import SystemManager from '../pages/systemManager'
import Header from '../components/header/header'
import Login from '../components/login/login'
import Register from '../components/register/register'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      components: {
        header: Header,
        home: Home
      }
    },
    {
      path: '/dataManager',
      components: {
        header: Header,
        dataManager: DataManager
      }
    },
    {
      path: '/analysis',
      components: {
        header: Header,
        analysis: Analysis
      }
    },
    {
      path: '/addProject',
      components: {
        header: Header,
        addProject: AddProject
      }
    },
    {
      path: '/policyNotice',
      components: {
        header: Header,
        policyNotice: PolicyNotice
      }
    },
    {
      path: '/systemManager',
      components: {
        header: Header,
        systemManager: SystemManager
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

