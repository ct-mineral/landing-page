<script lang="ts" setup>
import { ref, computed } from 'vue'
import CardProjectsComponent from '@/components/CardProjectsComponent.vue'

const projects = [
  {
    id: 1,
    name: 'Brazilian Rare Earths & Borborema',
    description: 'Desenvolvimento de uma nova rota de processo para o beneficiamento dos minerais portadores de terras raras em argilas iônicas.',
    image: './images/projects/terras_raras_argilas_ionicas.png',
    location: 'Currais Novos, RN',
  },
  {
    id: 2,
    name: 'Kit Máquinas LTDA.',
    description: 'Projeto executivo de sonda rotativa diamantada (com wire line) modular e portátil.',
    image: './images/projects/sonda_rotativa.png',
    location: 'Pedro Leopoldo, MG',
  },
  {
    id: 3,
    name: 'Mineração Tomaz Salustino S/A',
    description: 'Recuperação de scheelita através da aplicação de novas tecnologias nos resíduos finos provenientes do beneficiamento mineral.',
    image: './images/projects/recuperacao_scheelita.png',
    location: 'Currais Novos, RN',
  },
  {
    id: 4,
    name: 'IMC Rare Earths LTD',
    description: 'Desenvolvimento de rota hidrometalúrgica para produção de carbonato de terras raras.',
    image: './images/projects/terras_raras_carbonato.png',
    location: 'São Paulo, SP',
  },
  {
    id: 5,
    name: 'FMG & Fortescue',
    description: 'Processo inovador de extração e recuperação de elementos terras raras.',
    image: './images/projects/extracao_terras_raras.png',
    location: 'Ceará, CE',
  },
  {
    id: 6,
    name: 'REX Soluções para Mineração',
    description: 'Aperfeiçoamento do controle e de manejo de explosivos por meio dos detonadores T-REX e T-REX Remote.',
    image: './images/projects/detonadores_trex.png',
    location: 'Pernambuco, PE',
  },
]

const currentPage = ref(1)
const itemsPerPage = 15

const totalPages = computed(() => {
  return Math.ceil(projects.length / itemsPerPage)
})

const paginatedProjects = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return projects.slice(startIndex, endIndex)
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-2 text-color">Projetos</h2>
        <p class="text-subtitle-2 text-md-subtitle-1 text-justify">
          Abaixo, apresentamos todos os projetos em andamento ou já concluídos pelo
          <strong>Centro de Tecnologia Mineral do IFRN</strong>. Os projetos estão listados sem nenhuma ordem particular, e, por motivos de confidencialidade e sigilo, maiores detalhes sobre cada projeto não podem ser disponibilizados ao público. Algumas imagens que ilustram os projetos são meramente ilustrativas, e foram geradas usando a inteligência artificial ChatGPT 4.0.
        </p>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="d-flex justify-center"
        v-for="project in paginatedProjects"
        :key="project.id"
      >
        <CardProjectsComponent
          :nameCompanie="project.name"
          :descriptionProject="project.description"
          :imageProject="project.image"
          :locationCompanie="project.location"
        />
      </v-col>
      <v-col cols="12" class="d-flex justify-center mt-4">
        <v-pagination v-model="currentPage" :length="totalPages" rounded="circle" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.text-color {
  color: #e48020;
}
</style>
