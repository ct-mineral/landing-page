<script setup lang="ts">
import CardServicesComponent from '@/components/CardServicesComponent.vue'
import ServicesPageLayoutComponent from '@/components/ServicesPageLayoutComponent.vue'

const services = [
  { id: 1, imagem: '#', nome: 'Perda ao Fogo', descricao: 'Os ensaios de perda ao fogo apresentam, de modo quantitativo e qualitativo, a quantidade de compostos voláteis (água molecular, dióxido de carbono, etc) presentes na amostra de rocha.' },
]
</script>

<template>
  <ServicesPageLayoutComponent
    title="Classificação e Concentração Mineral"
    description="Ensaios e processos para avaliar propriedades dos materiais, classificar partículas e apoiar a definição de rotas de concentração mineral."
    :service-count="services.length"
  >
    <CardServicesComponent
      v-for="(service, index) in services"
      :key="service.id"
      :index-service="String(index + 1).padStart(2, '0')"
      :name-service="service.nome"
      :description-service="service.descricao"
      :image-service="service.imagem"
    />
  </ServicesPageLayoutComponent>
</template>
