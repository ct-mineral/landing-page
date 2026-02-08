<script lang="ts" setup>
import { ref, computed } from 'vue'
import CardProjectsComponent from '@/components/CardProjectsComponent.vue'

const projects = [
  {
    id: 1,
    name: 'IFRN',
    description: 'Projeto de pesquisa sobre minerais metálicos',
    image: './images/diretores.png',
    location: 'Natal, RN',
  },
  {
    id: 2,
    name: 'IFRN',
    description: 'Projeto de pesquisa sobre minerais metálicos',
    image: './images/diretores.png',
    location: 'Natal, RN',
  },
  {
    id: 3,
    name: 'IFRN',
    description: 'Projeto de pesquisa sobre minerais metálicos',
    image: './images/diretores.png',
    location: 'Natal, RN',
  },
  {
    id: 4,
    name: 'IFRN',
    description: 'Projeto de pesquisa sobre minerais metálicos',
    image: './images/diretores.png',
    location: 'Natal, RN',
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
          <strong>Centro de Tecnologia Mineral do IFRN</strong>. Os projetos estão listados sem
          nenhuma ordem particular, e, por motivos de confidencialidade e sigilo, maiores detalhes
          sobre cada projeto não podem ser disponibilizados ao público. As imagens que ilustram os
          projetos são meramente ilustrativas, e foram geradas usando a inteligência artificial
          ChatGPT 4.0.
        </p>
      </v-col>
      <v-col
        cols="12"
        md="3"
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
