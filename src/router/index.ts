import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView/HomeView.vue'),
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
      path: '/servicos/administracao-de-amostras',
      name: 'sample-administration',
      component: () => import('@/views/ServicesView/SampleAdministrationView.vue'),
    },
    {
      path: '/servicos/analises',
      name: 'analyses',
      component: () => import('@/views/ServicesView/AnalysesView.vue'),
    },
    {
      path: '/servicos/preparacao-de-amostras',
      name: 'sample-preparation',
      component: () => import('@/views/ServicesView/SamplePreparationView.vue'),
    },
    {
      path: '/servicos/testes-fisicos',
      name: 'physical-tests',
      component: () => import('@/views/ServicesView/PhysicalTestsView.vue'),
    },
    {
      path: '/projetos',
      name: 'projects',
      component: () => import('@/views/ProjectsView/ProjectsView.vue'),
    },
  ],
})

export default router
