import Vue from 'vue'
import VueRouter from 'vue-router'
import UserDetails from './components/Root/UserDetails'
import Users from './components/Root/Users'

/* import ErrorPage from './components/ErrorPage' */

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/userDetails/:id',
      name: 'userDetails',
      component: UserDetails
    }
  ]
})
