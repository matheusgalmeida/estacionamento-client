import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/condutor',
    name: 'condutor',
    component: () => import('../views/CondutorForm.vue')
  },
  {
    path: '/modelo',
    name: 'modelo',
    component: () => import('../views/ModeloForm.vue')
  },
  {
    path: '/marca',
    name: 'marca',
    component: () => import('../views/MarcaForm.vue')
  },
  {
    path: '/veiculo',
    name: 'veiculo',
    component: () => import('../views/VeiculoForm.vue')
  },
  {
    path: '/condutor/listar',
    name: 'condutorlsitar',
    component: () => import('../views/CondutorLista.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
