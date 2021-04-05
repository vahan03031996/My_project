import login from './login'
import Register from './Register'

export default [
  {
    path: '/login',
    name: 'login',
    component: login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

]
