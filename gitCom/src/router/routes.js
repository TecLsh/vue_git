import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import foodLife from '../pages/foodLife'
import foodDetail from '../pages/food-detail'
import sportHealth from '../pages/sportHealth'
import sportDetail from '../pages/sport-detail'
import studyUp from '../pages/studyUp'
import studyDetail from '../pages/study-detail'
import hobbyInterest from '../pages/hobbyInterest'
import hobbyDetail from '../pages/hobby-detail'
import systemManager from '../pages/systemManager'
import Login from '../components/login/login'
import Register from '../components/register/register'
import Success from '../components/success/success'
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
      path: '/foodLife',
      component: foodLife
    },
    {
      path: '/foodLife/foodDetail',
      component: foodDetail
    },
    {
      path: '/sportHealth',
      component: sportHealth
    },
    {
      path: '/sportHealth/sportDetail',
      component: sportDetail
    },
    {
      path: '/studyUp',
      component: studyUp
    },
    {
      path: '/studyUp/studyDetail',
      component: studyDetail
    },
    {
      path: '/hobbyInterest',
      component: hobbyInterest
    },
    {
      path: '/hobbyInterest/hobbyDetail',
      component: hobbyDetail
    },
    {
      path: '/systemManager',
      component: systemManager
    },
    {
      path: '/systemManager/success',
      component: Success
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

