import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/matricula',
    name: 'matricula',
    component: () => import('../views/AboutComponentView.vue')
  },
  {
    path:'/consultar',
    name: 'consultar',
    component: () => import('../views/ConsultarTodosView.vue')
  },
  {
    path: '/consultarId',
    name: 'consultarId',
    component: () => import('../views/ConsultarPorIdView.vue')
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: () => import('../views/GuardarView.vue')
  },
  {
    path: '/borrar',
    name: 'borrar',
    component: () => import('../views/BorrarView.vue')
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: () => import('../views/ActualizarView.vue')
  },
  {
    path: '/actualizarParcial',
    name: 'actualizarParcial',
    component: () => import('../views/ActualizarParcialView.vue')
  }

  

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
