import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'
import DetailsRestaurant from '@/components/restaurants/DetailsRestaurant'
import CreateRestaurant from '@/components/restaurants/CreateRestaurant'
import EditRestaurant from '@/components/restaurants/EditRestaurant'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     {
       path: '/',
       name: 'home',
       component: Home
     },
     {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/restaurant/create',
      name: 'createRestaurant',
      component: CreateRestaurant
    },
    {
      path: '/restaurants/:id',
      name: 'detailsRestaurant',
      component: DetailsRestaurant
    },
    {
      path: '/restaurants/:id/edit',
      name: 'editRestaurant',
      component: EditRestaurant
    },
  ]
})

