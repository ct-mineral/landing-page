<script lang="ts" setup>
import CardServicesComponent from '@/components/CardServicesComponent.vue'

const services = [
  { id: 1, imagem: '#', nome: 'Fluorescência de Raios-X (FRX)', descricao: 'O Centro de Tecnologia Mineral oferece análise químicas por fluorescência de raios-X. O método determina qualitativamente e quantitativamente elementos majoritários de rochas e seus elementos traço.' },
  { id: 2, imagem: '#', nome: 'Difração de Raios-X (DRX)', descricao: 'As análises de difração de raios-X entregam resultados acerca das fases cristalinas constituintes das rochas e materiais industriais, seus conteúdos amorfos, além de suas características estruturais e o tamanho dos cristais. Aplicada à mineração, a técnica permite caracterizar a mineralogia completa do minério explorado. Este conhecimento possibilita maior precisão na tomada de decisões, durante a fase de pesquisa mineral, bem como em todos os processos metalúrgicos, em escala piloto e industrial.' },
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-2 text-color">Análises</h2>
      </v-col>
      <v-col cols="12" v-for="service in services" :key="service.id">
        <CardServicesComponent :name-service="service.nome" :description-service="service.descricao" :image-service="service.imagem" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.text-color {
  color: #E48020;
}
</style>
