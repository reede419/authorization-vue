import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import UserProfile from '../views/UserProfile.vue'
import PageNotFound from '../views/PageNotFound.vue'


import middlewarePipeline from '../middleware/middlewarePipeline'
import guest from '../middleware/guest'
import auth from '../middleware/auth'



Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'home',  component: Home, meta: {middleware: [auth]} },
  { path: '/login',  name: 'Login',  component: Login, meta: {middleware: [guest]} },
  { path: '/user_profile',  name: 'UserProfile',  component: UserProfile, meta: {middleware: [auth]} },
  { path: "*", component: PageNotFound },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware
  const context = {
      to,
      from,
      next,
      store
  }

  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
