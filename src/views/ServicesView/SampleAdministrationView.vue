<script setup lang="ts">
import CardServicesComponent from '@/components/CardServicesComponent.vue'
import ServicesPageLayoutComponent from '@/components/ServicesPageLayoutComponent.vue'

const services = [
  { id: 1, imagem: '#', nome: 'Amostragem', descricao: 'O CT Mineral auxiliará empresas de mineração de pequeno e médio porte na execução de uma correta amostragem das matérias-primas, úmidas ou secas, a serem analisadas nos processos subsequentes. O centro disponibilizará um método de amostragem a ser seguido de acordo com o material e as necessidades do contratante.' },
  { id: 2, imagem: '#', nome: 'Pesagem e Amostragem', descricao: 'Amostras são divididas em alíquotas, que são pesadas e têm suas massas informadas em relatórios de pesagem. Após, as amostras não utilizadas nas análises são estocadas, sem custos, por até 30 dias nas dependências do CT Mineral.' },
]
</script>

<template>
  <ServicesPageLayoutComponent
    title="Cominuição de Amostras"
    description="Amostragem, pesagem e controle de materiais minerais com procedimentos definidos conforme as características de cada projeto."
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
