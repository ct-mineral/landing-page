<script lang="ts" setup>
import CardServicesComponent from '@/components/CardServicesComponent.vue'

const services = [
  { id: 1, imagem: '/images/services/frx.avif', nome: 'Fluorescência de Raios-X (FRX)', machine: 'ARL QUANT\'X EDXRF da Thermo Scientific', descricao: 'É uma ferramenta analítica versátil e econômica, projetada para quantificar elementos principais, secundários e traços em uma ampla variedade de amostras, incluindo sólidos em massa, grânulos, pós soltos ou compactados, pastilhas fundidas, filmes finos, pastas e líquidos. Com capacidade para analisar elementos desde o flúor F) até o amerício Am, o instrumento oferece desempenho superior tanto para elementos leves quanto pesados, garantindo rapidez e flexibilidade em um formato compacto de bancada. Além disso, o ARL QUANT\'X minimiza a necessidade de preparação de amostras, tornando-o ideal para laboratórios centrais e contratados que buscam eficiência e precisão em suas análises elementares.' },
  { id: 2, imagem: '/images/services/drx.avif', nome: 'Difração de Raios-X (DRX)', machine: 'Difratômetro de Raios X de Bancada Aeris– Malvern Panalytical', descricao: 'O Aeris é um difratômetro de raios X de bancada, projetado para oferecer análises rápidas, precisas e confiáveis em um formato compacto. Ideal para identificação de fases cristalinas e análise qualitativa, atende diversas aplicações nos setores de mineração, cimento, cerâmica e pesquisa. Com desempenho comparável a equipamentos de grande porte, possui interface intuitiva e recursos automatizados otimizam o fluxo de trabalho no laboratório. O Aeris analisa uma variedade de amostras, incluindo pós, sólidos compactos e pastilhas. É certificado como equipamento de proteção total, garantindo segurança em sua operação. É uma solução versátil, moderna e eficiente para análises por difração de raios-x.' },
  { id: 3, imagem: '/images/services/icp.webp', nome: 'Espectrometria de Emissão Óptica com Plasma Acoplado Indutivamente (ICP-OES)', machine: 'Emissão Óptica com Plasma da Agilent 5800', descricao: 'O ICPOES Agilent 5800 é um espectrômetro multielementar de alta performance, confiável e automatizado, ideal para análises em geologia, mineração, meio ambiente e indústria. Opera com plasma de argônio a temperaturas superiores a 8.000 °C, permitindo atomização eficiente dos elementos. Possui ampla faixa espectral, analisando desde elementos leves como lítio até pesados como urânio. Utiliza digestão ácida para matrizes simples e fusão alcalina para materiais refratários. Aceita amostras de rochas, solos, águas, rejeitos e resíduos. Oferece resultados rápidos, precisos e com correção automática de interferências. Ideal para determinação de elementos maiores, menores, traços e terras raras. Pode ser customizado conforme os elementos de interesse.' },
  { id: 4, imagem: '/images/services/absocao.webp', nome: 'Absorção Atômica (AAS)', machine: 'Espectrômetro de Absorção Atômica SavantAA – GBC', descricao: 'O SavantAA é um espectrômetro de absorção atômica da GBC, projetado para realizar análises químicas precisas e confiáveis na determinação de elementos metálicos em diferentes tipos de amostras. Amplamente utilizado nos setores de mineração, meio ambiente, metalurgia e pesquisa, o equipamento oferece alta sensibilidade e excelente desempenho analítico. Com operação automatizada e interface intuitiva, o SavantAA otimiza a rotina laboratorial, proporcionando rapidez nas análises e maior controle de qualidade dos resultados. O equipamento permite a determinação de diversos elementos em soluções líquidas, utilizando técnicas de chama e forno de grafite, conforme a necessidade analítica. Seu sistema robusto e de fácil operação garante estabilidade, segurança e confiabilidade nos processos, tornando o SavantAA uma solução versátil, moderna e eficiente para análises por absorção atômica.' },
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-2 text-orange-darken-3">Análise Mineral</h2>
      </v-col>
      <v-col cols="12" v-for="service in services" :key="service.id">
        <CardServicesComponent :name-service="service.nome" :machine="service.machine" :description-service="service.descricao" :image-service="service.imagem" />
      </v-col>
    </v-row>
  </v-container>
</template>
