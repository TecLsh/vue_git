import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import firstPage from '../pages/firstPage'
// import secondPage from '../pages/secondPage'
// import indexPage from '../pages/indexPage'
// import Frame from '../frame/subroute'
// import oneLove from '../pages/oneLove'
// import twoLove from '../pages/twoLove'
// import threeLove from '../pages/threeLove'

import Header from '../components/header/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        Hello: Hello,
        Header: Header
      }
    }
    // },
    // {
    //   path: '/first',
    //   name: 'first',
    //   component: firstPage
    // },
    // {
    //   path: '/second',
    //   name: 'second',
    //   component: secondPage
    // },
    // {
    //   path: '/three',
    //   name: 'three',
    //   component: indexPage
    // },
    // {
    //   path: '/four',
    //   name: 'four',
    //   component: Frame,
    //   children: [
    //     {path: 'one', component: oneLove},
    //     {path: 'two', component: twoLove},
    //     {path: '/', component: threeLove}
    //   ]
    // }
  ]
})

