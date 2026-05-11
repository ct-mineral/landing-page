<script lang="ts" setup>
import CardServicesComponent from '@/components/CardServicesComponent.vue'

const services = [
  { id: 1, imagem: '#', nome: 'Perda ao Fogo', descricao: 'Os ensaios de perda ao fogo apresentam, de modo quantitativo e qualitativo, a quantidade de compostos voláteis (água molecular, dióxido de carbono, etc) presentes na amostra de rocha.' },
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-2 text-orange-darken-3">Testes Físicos</h2>
      </v-col>
      <v-col cols="12" v-for="service in services" :key="service.id">
        <CardServicesComponent :name-service="service.nome" :description-service="service.descricao" :image-service="service.imagem" />
      </v-col>
    </v-row>
  </v-container>
</template>
