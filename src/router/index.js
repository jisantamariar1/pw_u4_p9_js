import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


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
  }




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// Configuracion del Guardian
router.beforeEach((to, from, next)=>{
  if(to.meta.requiereAutorizacion){
    //le envio a una pagina de login
    console.log("Redirigiendo a login");
  }else{
    //le dejo pasar sin validaciones
    console.log("Pase libre");
    next();

  }
})

export default router
