<script lang="ts" setup>
import CardServicesComponent from '@/components/CardServicesComponent.vue'

const services = [
  { id: 1, imagem: '#', nome: 'Amostragem', descricao: 'O CT Mineral auxiliará empresas de mineração de pequeno e médio porte na execução de uma correta amostragem das matérias-primas, úmidas ou secas, a serem analisadas nos processos subsequentes. O centro disponibilizará um método de amostragem a ser seguido de acordo com o material e as necessidades do contratante.' },
  { id: 2, imagem: '#', nome: 'Pesagem e Amostragem', descricao: 'Amostras são divididas em alíquotas, que são pesadas e têm suas massas informadas em relatórios de pesagem. Após, as amostras não utilizadas nas análises são estocadas, sem custos, por até 30 dias nas dependências do CT Mineral.' },
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-2 text-orange-darken-3">Administração de Amostras</h2>
      </v-col>
      <v-col cols="12" v-for="service in services" :key="service.id">
        <CardServicesComponent :name-service="service.nome" :description-service="service.descricao" :image-service="service.imagem" />
      </v-col>
    </v-row>
  </v-container>
</template>
