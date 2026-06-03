import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'about',
      component: () => import('@/views/AboutView/AboutView.vue'),
    },
    {
      path: '/integrantes',
      name: 'members',
      component: () => import('@/views/MembersView/MembersView.vue'),
    },
    {
      path: '/servicos/cominuicao-de-amostras',
      name: 'sample-administration',
      component: () => import('@/views/ServicesView/SampleAdministrationView.vue'),
    },
    {
      path: '/servicos/analise-mineral',
      name: 'mineral-analyses',
      component: () => import('@/views/ServicesView/AnalysesView.vue'),
    },
    {
      path: '/servicos/preparacao-de-amostras',
      name: 'sample-preparation',
      component: () => import('@/views/ServicesView/SamplePreparationView.vue'),
    },
    {
      path: '/servicos/classificacao-e-concentracao-mineral',
      name: 'classification-and-concentration',
      component: () => import('@/views/ServicesView/PhysicalTestsView.vue'),
    },
    {
      path: '/projetos',
      name: 'projects',
      component: () => import('@/views/ProjectsView/ProjectsView.vue'),
    },
    {
      path: '/oportunidades',
      name: 'opportunities',
      component: () => import('@/views/OpportunitiesView/OpportunitiesView.vue'),
    }
  ],
})

export default router
