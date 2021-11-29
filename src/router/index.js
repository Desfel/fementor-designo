import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import WebDesign from '@/views/WebDesign'
import GraphicDesign from "@/views/GraphicDesign"
import AppDesign from "@/views/AppDesign"
import { isNil } from 'lodash'
import store from '@/store'
import About from "@/views/About";
import Locations from "@/views/Locations";

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/graphic-design',
      name: 'graphicdesign',
      component: GraphicDesign,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/app-design',
      name: 'appdesign',
      component: AppDesign,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/web-design',
      name: 'webdesign',
      component: WebDesign,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations,
      meta: {
        authNotRequired: true
      }
    },
    { path: '*', redirect: '/home' }
  ],
  scrollBehavior () {
    return { behavior: 'smooth', x: 0, y: 0 }
  }
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
