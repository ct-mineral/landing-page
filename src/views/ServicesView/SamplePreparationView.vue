<script lang="ts" setup>
import CardServicesComponent from '@/components/CardServicesComponent.vue'

const services = [
  { id: 1, imagem: '#', nome: 'Secagem', descricao: 'Amostras úmidas ou de polpa são secadas em estufas, sob condições de temperatura específicas, ou ao sol. Amostras com presença de vegetação e matérias orgânica são incineradas em fornos tipo mufla.' },
  { id: 2, imagem: '#', nome: 'Britagem e Moagem', descricao: 'Os laboratórios do Centro de Tecnologia Mineral oferecem os serviços de britagem e moagem de minérios, em operações unitárias, os quais permitem realizar simulações de processos industriais. A quantidade de amostras a serem processadas e a granulometria média dos produtos variam de acordo com as necessidades do contratante.' },
  { id: 3, imagem: '#', nome: 'Quarteamento', descricao: 'Quarteamento é o processo de divisão de amostras minerais em duas alíquotas, representativas da amostra total. Uma das partes segue para ser analisada, enquanto a outra é armazenada como amostra reserva para futuras caracterizações, análises e/ou certificações. Este processopermite a execução de análises variadas com maior eficiência.' },
  { id: 4, imagem: '#', nome: 'Pulverização', descricao: 'O Centro de Tecnologia Mineral oferece o serviço de pulverização de alíquotas representativas de amostras minerais, como um estágio essencial para garantir resultados mais confiáveis em diversos tipos de análises químicas. O objetivo do processo é diminuir a granulometria de amostras, evitando contaminações, em tamanho adequado para análises químicas, mineralógicas e macroestruturais (geralmente: < 75µm/- 200 #). Os valores variam de acordo com o volume de amostras, os instrumentos utilizados e a granulometria desejada.' },
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-2 text-orange-darken-3">Preparação de Amostras</h2>
        <p class="text-subtitle-2 text-md-subtitle-1 text-justify">A preparação de amostras envolve processos de redução de tamanho de partículas para a execução de confiáveis análises químicas.</p>
        <p class="text-subtitle-2 text-md-subtitle-1 text-justify">A qualidade da amostragem, homogeneização e quarteamento é essencial para a preparação de alíquotas representativas da amostra total. Britagem, moagem e pulverização são os serviços disponíveis. As especificações da execução e dos produtos de cada um dependerá dos diferentes tipos de amostra e minerais.</p>
      </v-col>
      <v-col cols="12" v-for="service in services" :key="service.id">
        <CardServicesComponent :name-service="service.nome" :description-service="service.descricao" :image-service="service.imagem" />
      </v-col>
    </v-row>
  </v-container>
</template>
