<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import CardMembersComponent from '@/components/CardMembersComponent.vue';

  const directors = [
    {
      id: 1,
      name: 'Luiz Fernando Dias Filho',
      position: 'Diretor Geral',
      description:
        'Doutorando em Geologia pela Universidade de Coimbra e Mestre em Engenharia Mineral pela UFPE. Graduado em Tecnologia em Materiais e Técnico em Geologia e Mineração pelo IFRN. Atuou na Vale, MHAG Mineração, Votorantim Cimentos, Mining Ventures Brasil e Petrobrás, em áreas de mineração, beneficiamento, prospecção mineral e exploração de petróleo. Experiência em perfuração, desmonte, transporte, planejamento de mina e produção de calcário. Atualmente é professor do IFRN – Campus Parelhas, no curso Técnico em Mineração.',
      image: '/images/members/directors/luiz-fernando.avif',
      linkedin: 'https://www.linkedin.com/in/luiz-fernando-dias-filho-8a7258153/',
      lattes: 'http://lattes.cnpq.br/4709606462330109'
    },
    {
      id: 2,
      name: 'Elias Nunes Filho',
      position: 'Diretor de Planejamento e Negócios',
      description:
        'Técnico em Mineração e graduado em Gestão Ambiental pelo IFRN, com experiência em pesquisa mineral no setor privado em projeto de exploração de ouro em Pernambuco. Servidor do IFRN desde 2015 como Técnico Laboratorista em Tecnologia Mineral. Atuou em cargos de gestão, incluindo coordenação de extensão, pesquisa, inovação e laboratórios. Representa o IFRN no Comitê Temático da Rede Brasileira de APL de Base Mineral. Atualmente é Diretor de Planejamento e Negócios do CT Mineral – Polo de Inovação do IFRN.',
      image: '/images/members/directors/elias.avif',
      linkedin: 'https://www.linkedin.com/in/elias-nunes/',
      lattes: 'http://lattes.cnpq.br/2948896778001838'
    },
    {
      id: 3,
      name: 'Arivonaldo Bezerra da Silva',
      position: 'Coordenador de Laboratório de Inovação e Gestor de Projetos',
      description:
        'Mestre em Química pela UFRN, especialista em Ciência de Dados e IA, Gestão por Processos e Projetos e Ensino de Matemática. Graduado em Licenciatura em Química e Matemática pela UFRN e Técnico em Alimentos pelo IFRN. Experiência como professor de Química, Física e Matemática entre 2004 e 2013 e tutor do curso de Química EaD da UFRN em 2016. Servidor efetivo do IFRN desde 2013, atualmente Coordenador de Laboratórios de Inovação e responsável técnico dos laboratórios do CT Mineral. Atua em análise de dados, aprendizado de máquinas aplicados a dados químicos e análises químicas de alimentos e minerais.',
      image: '/images/members/directors/arivonaldo.avif',
      linkedin: 'https://www.linkedin.com/in/arivonaldo-bezerra-da-silva-2848a5150/',
      lattes: 'http://lattes.cnpq.br/8652856826234500'
    },
    {
      id: 4,
      name: 'Ana Katia de Andrade Cortez',
      position: 'Coordenadora Administrativa',
      description:
        'Possui graduação em Ciências Contábeis pela Universidade Federal do Rio Grande do Norte (1986–1990) e especialização em Educação Profissional e Tecnológica pelo Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (2006–2007). Servidora pública com mais de 30 anos de atuação, acumulou ampla experiência em gestão e administração pública, tendo exercido cargos de direção administrativa e coordenação na área de gestão de contratos no instituto, contribuindo para o fortalecimento dos processos administrativos e da gestão institucional da unidade.',
      image: '/images/members/directors/ana-katia.avif',
      linkedin: '',
      lattes: 'http://lattes.cnpq.br/3986390368760022'
    },
  ]

  const currentPage = ref(1)
  const itemsPerPage = 5

  const totalPages = computed(() => {
    return Math.ceil(directors.length / itemsPerPage)
  })

  const paginatedDirectors = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return directors.slice(startIndex, endIndex)
  })
</script>

<template>
  <v-window-item value="diretores">
    <v-row>
      <v-col v-for="director in paginatedDirectors" :key="director.id" cols="12">
        <CardMembersComponent
          :nameMember="director.name"
          :positionMember="director.position"
          :descriptionMember="director.description"
          :imageMember="director.image"
          :linkedinMember="director.linkedin"
          :lattesMember="director.lattes"
        />
      </v-col>
      <v-col cols="12" class="d-flex justify-center mt-4">
        <v-pagination v-model="currentPage" :length="totalPages" rounded="circle" />
      </v-col>
    </v-row>
  </v-window-item>
</template>
