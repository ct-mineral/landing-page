<script setup lang="ts">
import { computed, ref } from 'vue'
import CardServicesComponent from '@/components/CardServicesComponent.vue'
import ServicesPageLayoutComponent from '@/components/ServicesPageLayoutComponent.vue'

interface Service {
  id: number
  imagem: string
  nome: string
  descricao: string
}

const services: Service[] = [
  { id: 1, imagem: '#', nome: 'Secagem', descricao: 'Amostras úmidas ou de polpa são secadas em estufas, sob condições de temperatura específicas, ou ao sol. Amostras com presença de vegetação e matérias orgânica são incineradas em fornos tipo mufla.' },
  { id: 2, imagem: '#', nome: 'Britagem', descricao: 'Os laboratórios do Centro de Tecnologia Mineral oferecem os serviços de britagem, em operações unitárias, os quais permitem realizar simulações de processos industriais. A quantidade de amostras a serem processadas e a granulometria média dos produtos variam de acordo com as necessidades do contratante.' },
  { id: 3, imagem: '#', nome: 'Pulverização', descricao: 'O Centro de Tecnologia Mineral oferece o serviço de pulverização de alíquotas representativas de amostras minerais, como um estágio essencial para garantir resultados mais confiáveis em diversos tipos de análises químicas. O objetivo do processo é diminuir a granulometria de amostras, evitando contaminações, em tamanho adequado para análises químicas, mineralógicas e macroestruturais (geralmente: < 75µm/- 200 #). Os valores variam de acordo com o volume de amostras, os instrumentos utilizados e a granulometria desejada.' },
  { id: 4, imagem: '#', nome: 'Homogeneização e Quarteamento', descricao: 'Quarteamento é o processo de divisão de amostras minerais em duas alíquotas, representativas da amostra total. Uma das partes segue para ser analisada, enquanto a outra é armazenada como amostra reserva para futuras caracterizações, análises e/ou certificações. Este processopermite a execução de análises variadas com maior eficiência.' },
  { id: 5, imagem: '#', nome: 'Perda ao Fogo', descricao: 'Os ensaios de perda ao fogo apresentam, de modo quantitativo e qualitativo, a quantidade de compostos voláteis (água molecular, dióxido de carbono, etc) presentes na amostra de rocha.' },
]

const currentPage = ref(1)
const itemsPerPage = 5
const listRef = ref<HTMLElement | null>(null)

const totalPages = computed(() => Math.ceil(services.length / itemsPerPage))

const paginatedServices = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  return services.slice(startIndex, startIndex + itemsPerPage)
})

const onPageChange = () => {
  listRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <ServicesPageLayoutComponent
    title="Preparação de Amostras"
    description="Processos de secagem, redução granulométrica, homogeneização e quarteamento para gerar alíquotas representativas e análises confiáveis."
    :service-count="services.length"
  >
    <div ref="listRef" class="services-paginated-list">
      <CardServicesComponent
        v-for="(service, index) in paginatedServices"
        :key="service.id"
        :index-service="String((currentPage - 1) * itemsPerPage + index + 1).padStart(2, '0')"
        :name-service="service.nome"
        :description-service="service.descricao"
        :image-service="service.imagem"
      />

      <div v-if="totalPages > 1" class="d-flex justify-center mt-4">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          :total-visible="totalPages"
          color="teal-darken-3"
          rounded="circle"
          @update:model-value="onPageChange"
        />
      </div>
    </div>
  </ServicesPageLayoutComponent>
</template>

<style scoped>
.services-paginated-list {
  display: grid;
  gap: 20px;
}
</style>
