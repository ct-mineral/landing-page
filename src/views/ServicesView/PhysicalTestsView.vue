<script setup lang="ts">
import { computed, ref } from 'vue'
import CardServicesComponent from '@/components/CardServicesComponent.vue'
import ServicesPageLayoutComponent from '@/components/ServicesPageLayoutComponent.vue'

interface Service {
  id: number
  imagem: string
  nome: string
  machine: string
  descricao: string
}

const services: Service[] = [
  {
    id: 1,
    imagem: '/images/services/machines/micro-mgs.avif',
    nome: 'MGS: Multi Gravity Separator',
    machine: 'Gravity Mining',
    descricao:
      'O Micro MGS é uma versão miniaturizada de um método de produção comprovado. Assim como os modelos maiores da Família Gravity Mining, o Micro Separador de Gravidade Múltipla (Micro MGS) funciona com um princípio parecido com o de uma mesa vibratória para separar e melhorar materiais muito finos. A sutil força centrífuga do MGS simula gravidade aumentada, prendendo os materiais mais pesados na parede do tambor, enquanto os rejeitos mais leves são agitados pelo movimento de vibração e levados embora pela lavagem.',
  },
  {
    id: 2,
    imagem: '/images/services/machines/separador-magnetico.avif',
    nome: 'Separador magnético de tambor',
    machine: 'INBRAS',
    descricao:
      'É um equipamento destinado à separação e concentração de minerais com diferentes propriedades magnéticas. Seu funcionamento consiste na passagem do material próximo a um tambor que gera um campo magnético, promovendo a atração das partículas com características magnéticas e sua separação das partículas não magnéticas. Dessa forma, o separador magnético de tambor possibilita a classificação e concentração de diferentes minerais, sendo aplicável a estudos e processos de beneficiamento mineral que necessitam da separação de materiais de acordo com seu comportamento magnético.',
  },
  {
    id: 3,
    imagem: '/images/services/machines/humphreys.avif',
    nome: 'Espiral de Humphreys',
    machine: 'Walkabout',
    descricao:
      'É um equipamento destinado à concentração gravítica de minerais, utilizando principalmente as diferenças de densidade entre as partículas presentes na amostra. A polpa, composta por água e minério, é alimentada pela parte superior da espiral e percorre seu trajeto em movimento descendente, promovendo a segregação das partículas conforme suas características físicas. Durante esse processo, os minerais de maior densidade tendem a se concentrar em uma determinada região da espiral, enquanto os minerais mais leves são direcionados para outra, possibilitando a obtenção de diferentes frações ou produtos. Dessa forma, a espiral concentradora Humphreys é aplicada em estudos e processos de beneficiamento mineral que buscam avaliar a concentração e a recuperação de minerais de interesse.',
  },
  {
    id: 4,
    imagem: '/images/services/machines/mesa-oscilatoria.avif',
    nome: 'Mesa oscilatória',
    machine: 'INBRAS',
    descricao:
      'É um equipamento destinado à concentração gravítica de minerais, utilizando uma superfície inclinada equipada com riffles e submetida a movimento oscilatório. Seu funcionamento combina a diferença de densidade das partículas, o fluxo de água, a ação oscilatória e a granulometria do material para promover a separação dos minerais. Durante o processo, as partículas de maior densidade tendem a permanecer em regiões específicas da mesa, enquanto as partículas mais leves são transportadas pelo fluxo de água, permitindo a obtenção de diferentes frações concentradas. A mesa concentradora oscilatória é amplamente utilizada em estudos e processos de beneficiamento de minerais de interesse econômico, como minerais pesados, tungstênio e estanho.',
  },
  {
    id: 5,
    imagem: '/images/services/machines/mini-planta-flot.avif',
    nome: 'Mini planta de flotação',
    machine: 'ERIEZ',
    descricao:
      'É um equipamento destinado à separação e concentração de minerais por flotação, utilizando uma combinação de água, reagentes químicos, agitação e introdução de ar. Durante o processo, determinados minerais apresentam maior afinidade com as bolhas de ar, aderindo-se a elas e sendo conduzidos até a superfície da polpa, enquanto os demais permanecem no meio e são direcionados para outra fração. Dessa forma, o processo possibilita a obtenção de concentrado e rejeito, sendo amplamente utilizado no beneficiamento de minérios cujos componentes não podem ser separados de maneira eficiente apenas por métodos baseados em diferenças de densidade ou propriedades magnéticas.',
  },
  {
    id: 6,
    imagem: '/images/services/machines/flotacao-bancada.avif',
    nome: 'Célula de flotação de bancada',
    machine: 'CDC',
    descricao:
      'As Células de Flotação de Bancada CDC são equipamentos laboratoriais destinados à realização de ensaios descontínuos de flotação em pequena escala, com capacidade de 1 a 10 litros e cubas em inox ou acrílico. O sistema possui rotor/estator com rotação ajustável, raspadores automáticos e recursos de atrição e agitação, permitindo diferentes condições experimentais. Sua estrutura robusta e estável, aliada ao sistema pneumático para elevação do conjunto, painel de controle com inversor de frequência, display de rotação e dispositivos de segurança, proporciona praticidade, precisão e versatilidade para estudos de flotação e testes em plantas experimentais no setor mineral.',
  },
  {
    id: 7,
    imagem: '/images/services/machines/agitador-peneiras.avif',
    nome: 'Agitadores de peneiras',
    machine: 'LUCADEMA',
    descricao:
      'É um equipamento laboratorial destinado à realização de peneiramento e classificação granulométrica de amostras minerais, permitindo determinar a distribuição das partículas de acordo com seus diferentes tamanhos. O processo possibilita separar o material em distintas faixas granulométricas, fornecendo informações sobre a quantidade de partículas presente em cada intervalo de tamanho. Dessa forma, os equipamentos são utilizados na caracterização física de amostras e em estudos de beneficiamento mineral, contribuindo para a avaliação do comportamento granulométrico e para a definição de etapas adequadas de processamento.',
  },
  {
    id: 8,
    imagem: '/images/services/machines/separador-eletro.avif',
    nome: 'Separador eletrostático',
    machine: 'INBRAS',
    descricao:
      'É um equipamento destinado à separação e concentração de materiais com base principalmente nas diferenças de suas propriedades elétricas, especialmente entre partículas condutoras e não condutoras. Durante o processo, a amostra é alimentada no sistema e submetida à ação de um campo elétrico de alta tensão, fazendo com que as partículas apresentem comportamentos distintos de acordo com suas características elétricas. Essa diferença permite direcionar os materiais para diferentes recipientes de coleta, promovendo sua separação. O equipamento pode ser aplicado à separação e concentração de minerais, remoção de contaminantes, separação de metais de materiais não metálicos.',
  },
  {
    id: 9,
    imagem: '/images/services/machines/jigue.avif',
    nome: 'Jigue',
    machine: 'INBRAS',
    descricao:
      'É um equipamento destinado à concentração gravítica de minerais, realizando a separação de partículas principalmente com base nas diferenças de densidade. Seu funcionamento utiliza água ou ar para promover movimentos alternados de expansão e compactação do leito de partículas, fazendo com que os minerais de maior densidade se concentrem nas regiões inferiores, enquanto os materiais mais leves permanecem nas camadas superiores e podem ser direcionados como rejeito. O processo também pode contribuir para a remoção de lama, óxidos, materiais finos e impurezas ou películas presentes na superfície dos minerais, especialmente quando associado a etapas de atrição, que promovem o contato entre as partículas e auxiliam no desprendimento desses materiais.',
  },
  {
    id: 10,
    imagem: '/images/services/machines/hidrociclone.avif',
    nome: 'Hidrociclone',
    machine: 'CDC',
    descricao:
      'O Conjunto de Hidrociclonagem Portátil CDC é um sistema compacto destinado à realização de ensaios e simulações laboratoriais de classificação e separação de partículas por meio de hidrociclones. O conjunto é composto por hidrociclone, bomba de polpa, caixa de bomba com agitador integrado, tubulações e válvulas, permitindo operação em circuito fechado, com retorno do overflow e do underflow à caixa de bomba. O controle da vazão e da pressão de alimentação é realizado por válvulas e tubulação de by-pass, enquanto o manômetro permite o acompanhamento da pressão de operação. O sistema possui estrutura robusta montada sobre roletes, facilitando sua movimentação, e pode ser configurado com hidrociclones de diferentes diâmetros e materiais, sendo adequado ao processamento de polpas abrasivas. Dessa forma, o equipamento oferece versatilidade para estudos de hidrociclonagem, testes de classificação granulométrica e atividades experimentais em laboratórios e ambientes educacionais.',
  },
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
    title="Classificação e Concentração Mineral"
    description="Ensaios e processos para avaliar propriedades dos materiais, classificar partículas e apoiar a definição de rotas de concentração mineral."
    :service-count="services.length"
  >
    <div ref="listRef" class="physical-tests-list">
      <CardServicesComponent
        v-for="(service, index) in paginatedServices"
        :key="service.id"
        :index-service="String((currentPage - 1) * itemsPerPage + index + 1).padStart(2, '0')"
        :name-service="service.nome"
        :machine="service.machine"
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
.physical-tests-list {
  display: grid;
  gap: 20px;
}
</style>
