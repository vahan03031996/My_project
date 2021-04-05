import Vue from 'vue'
import Router from 'vue-router'
import auth_routes from '@/components/Auth/auth_routes'
import Profile from '@/components/User/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    ...auth_routes,
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
  ]
})
