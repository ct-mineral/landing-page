<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DirectorsView from './SectionViews/DirectorsView.vue'
import ResearchersView from './SectionViews/ResearchersView.vue'
import TechniciansView from './SectionViews/TechniciansView.vue'

const route = useRoute()
const tab = ref('diretores')

onMounted(() => {
  const tabParam = route.query.tab as string
  if (tabParam && ['diretores', 'pesquisadores', 'tecnicos'].includes(tabParam)) {
    tab.value = tabParam
  }
})
</script>

<template>
  <v-container>
    <h2 class="text-h5 font-weight-bold mb-4 text-color">Integrantes</h2>

    <v-tabs v-model="tab" color="teal-darken-3" align-tabs="start" show-arrows center-active>
      <v-tab value="diretores">Diretores</v-tab>
      <v-tab value="pesquisadores">Pesquisadores</v-tab>
      <v-tab value="tecnicos">Equipe Técnica</v-tab>
    </v-tabs>

    <v-divider class="mb-6"></v-divider>

    <v-window v-model="tab">
      <DirectorsView />
      <ResearchersView />
      <TechniciansView />
    </v-window>
  </v-container>
</template>

<style scoped>
.text-color {
  color: #e48020;
}
</style>
