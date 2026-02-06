import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  },
  {
    path: '/consultar',
    name: 'consultar',
    component: () => import('../views/ConsultarTodosView.vue'),
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }

  },
  {
    path: '/consultarId',
    name: 'consultarId',
    component: () => import('../views/ConsultarPorIdView.vue'),
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: () => import('../views/GuardarView.vue'),
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/borrar',
    name: 'borrar',
    component: () => import('../views/BorrarView.vue'),
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: () => import('../views/ActualizarView.vue'),
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/actualizarParcial',
    name: 'actualizarParcial',
    component: () => import('../views/ActualizarParcialView.vue'),
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/login',
    //nombre para redirigir a esta ruta
    name: 'login',
    component: LoginView,
  }




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// Configuracion del Guardian
router.beforeEach((to, from, next) => {
  if (to.meta.requiereAutorizacion) {
    //le envio a una pagina de login
    const estaAutenticado = localStorage.getItem("estaAutenticado");
    const token = localStorage.getItem("token");
    if (!estaAutenticado) {
      console.log("Redirigiendo a login");
      next({ name: 'login' })
    }else{
      next();
    }

  } else {
    //le dejo pasar sin validaciones
    console.log("Pase libre");
    next();

  }
})

export default router
