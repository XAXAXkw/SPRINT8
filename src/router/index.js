import Vue from 'vue'
import VueRouter from 'vue-router'
import SplashPage from '../components/SplashPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: SplashPage
  },
  {
    path: '/statedata',
    name: 'statedata',

    component: () => import('../components/StateData.vue')
  },
  {
    path: '/shipscatalogue/:id',
    name: 'shipscatalogue',

    component: () => import('../components/ShipsCatalogue.vue')
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/shipcard',
    name: 'shipcard',

    component: () => import('../components/ShipCard.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../components/LogIn.vue')
  }
  ,
  {
    path: '/register',
    name: 'register',

    component: () => import('../components/RegisterUser.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
