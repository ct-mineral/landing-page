<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import CardMembersComponent from '@/components/CardMembersComponent.vue';

  const researchers = [
    {
      id: 1,
      name: 'João Batista Monteiro',
      position: 'Pesquisador Acadêmico',
      description:
        'Graduado em Engenharia de Minas pela Universidade Federal de Campina Grande (1987). Mestre em Engenharia de Minas pela Universidade Federal da Paraíba (1997) e Doutor em Engenharia de Processos pela Universidade Federal de Campina Grande (2014). Possui especialização em Gemologia pela Universidade Federal de Ouro Preto. Na mineração, possui ampla experiência em Lavra e Tratamento de Minérios.',
      image: '/images/members/researchers/joao-batista.avif',
      linkedin: '#',
      lattes: 'http://lattes.cnpq.br/6091659346152153'
    },
    {
      id: 2,
      name: 'Lígia Mara Gonzaga',
      position: 'Pesquisadora Acadêmica',
      description:
        'Engenheira de Minas (UFCG), Mestre em Engenharia Metalúrgica e de Materiais (UFRJ) e Doutora em Engenharia de Processos (UFCG), com especialização em Gestão Pública (IFRN). Professora do IFRN – Campus Parelhas. Atuou como Diretora Executiva do CT Mineral do IFRN e coordenadora da Unidade Embrapii CRTM/IFRN. Pesquisadora do PDTI no CETEM/RJ, com foco em P&D no beneficiamento mineral. Experiência em separação magnética, flotação e operações aplicadas a minerais de nióbio, fosfato, ferro e carvão.',
      image: '/images/members/researchers/ligia.avif',
      linkedin: 'https://www.linkedin.com/in/ligia-mara-gonzaga-2bb876218/',
      lattes: 'http://lattes.cnpq.br/9723940595359046'
    },
    {
      id: 3,
      name: 'Julio Cesar Pontes',
      position: 'Pesquisador Acadêmico',
      description:
        'Engenheiro de Minas, Doutor em Recursos Naturais e Mestre em Lavra de Minas, com especializações em Geologia de Jazida e Segurança do Trabalho. Professor de Perfuração e Desmonte de Rocha e Planejamento Ambiental e de Minas no IFRN. Experiência em chefia, condução e responsabilidade técnica de projetos de mineração para empresas privadas. Atuação em lavra a céu aberto, desmonte de rocha com explosivos, lavra e estudos de impactos (Licenciamento Ambiental, EIA/RIMA, RCA). Experiência em segurança do trabalho e como instrutor de curso de blaster em todo o país.',
      image: '/images/members/researchers/julio-cesar.avif',
      linkedin: '#',
      lattes: 'http://lattes.cnpq.br/4572073364963892'
    },
    {
      id: 4,
      name: 'Alexandre Magno Rocha da Rocha',
      position: 'Pesquisador Acadêmico',
      description:
        'Possui graduação em Geologia pela Universidade Federal do Rio Grande do Norte (1986) e mestrado em Geociências pela Universidade Federal do Rio Grande do Norte (1999). Professor DE/40 Horas do IFRN (Instituto Federal de Educação e Tecnologia do RN) com 26 anos de ensino. Professor do curso Técnico de Geologia para as disciplinas Prospecção e Pesquisa Mineral e Geoprocessamento e professor de nivel Superior do Curso de Gestão Ambiental na disciplina SIG.',
      image: '/images/members/researchers/alexandre-magno.avif',
      linkedin: '#',
      lattes: 'http://lattes.cnpq.br/9734494077523570'
    },
    {
      id: 5,
      name: 'Cleonilson Mafra Barbosa',
      position: 'Pesquisador Acadêmico',
      description:
        'Graduado em Química (UFRN), especialista em Docência no Ensino Superior (UnP), Mestre e Doutor em Ciências e Engenharia de Materiais (UFRN). Realizou doutorado sanduíche nos EUA (PSDE/CAPES) na Case Western Reserve University e pós-doutorado em Química Inorgânica na UNICAMP (FINEP). Atuou como docente em instituições públicas e privadas e como laboratorista no IINN-ELS. Professor permanente de Processos Químicos no IFRN (Campus Natal Central) desde 2010, em Dedicação Exclusiva. Pesquisador em tratamento de minérios e hidrometalurgia, com atuação no CTI Renato Archer e no Instituto de Química da UNICAMP (CINE/FAPESP).',
      image: '/images/members/researchers/mafra.avif',
      linkedin: 'https://www.linkedin.com/in/cleonilson-mafra-b6bb22bb/',
      lattes: 'http://lattes.cnpq.br/3946223809924016'
    },
    {
      id: 6,
      name: 'Defsson Douglas de Araújo Ferreira',
      position: 'Pesquisador Acadêmico',
      description:
        'Doutor em Engenharia de Processos (2024), Mestre em Exploração Mineral (2022), graduado em Engenharia de Minas e especialista em Legislação Mineral e Ambiental. Professor de Magistério Superior na UFCG (Engenharia de Minas) e ex-professor substituto no IFRN (2022–2024) e efetivo no IFBA (2024–2025). Foi servidor do IFPB (2017–2024), responsável pelos Laboratórios de Beneficiamento Mineral. Técnico em Mineração pelo IFPB (2016). Experiência no DNPM/PB (2016–2017) e no CETEM/RJ (2021), em fiscalização, outorga, caracterização tecnológica e usina piloto de processamento mineral.',
      image: '/images/members/researchers/defsson.avif',
      linkedin: 'https://www.linkedin.com/in/defsson-douglas-aa608b129/',
      lattes: 'http://lattes.cnpq.br/9154863126644403'
    },
    {
      id: 7,
      name: 'Rita de Cassia Pedrosa Santos',
      position: 'Pesquisadora Acadêmica',
      description:
        'Doutora em Tecnologia Mineral pela UFMG, Mestre em Engenharia de Minas pela UFOP, graduada em Administração e Engenharia de Minas. Professora da UFOP e consultora na área de mineração, com atuação em treinamentos pela ABM. Atua em ensino, pesquisa e extensão nas áreas de lavra subterrânea, ventilação em minas, condicionamento das minas, tecnologia mineral, lítio, patrimônio histórico e inclusão social. Participa de comitês técnicos e científicos e coordenou o IV Simpósio de Ventilação em Minas Subterrânea da Ibero-América (2024). Coordena projetos financiados pela FAPEMIG e participa da RedeAPL Mineral, com experiência em mineração desde 1996.',
      image: '/images/members/researchers/rita-pedrosa.avif',
      linkedin: 'https://www.linkedin.com/in/rita-pedrosa-38880625/',
      lattes: 'http://lattes.cnpq.br/7409927901278863'
    },
    {
      id: 8,
      name: 'Belarmino Barbosa Lira',
      position: 'Pesquisador Acadêmico',
      description:
        'Graduado em Engenharia de Minas pela UFPE, Mestre em Engenharia Metalúrgica e de Minas pela UFMG e Doutor em Processamento Mineral pela The University of Queensland. Atualmente é professor titular da Universidade Federal da Paraíba. Tem experiência na área de Engenharia de Minas, com ênfase em Tratamento de Minérios. Atua principalmente em cominuição, classificação e processamento de minerais industriais.',
      image: '/images/members/researchers/belarmino-barbosa.avif',
      linkedin: '',
      lattes: 'http://lattes.cnpq.br/6149451328203213'
    },
    {
      id: 9,
      name: 'Mauro Fróes Meyer',
      position: 'Pesquisador Acadêmico',
      description:
        'Pesquisador e Professor Titular do IFRN/CNAT nos cursos de Mineração, Geologia e Segurança do Trabalho, além de coordenador do Laboratório de Tecnologia Mineral e Materiais (LT2M). Mestre em Engenharia Mineral (UFOP), especialista em Engenharia de Segurança do Trabalho e graduado em Engenharia de Minas (UFOP). Atua nos grupos de pesquisa NEPM e NESST/CNPq, além da CISSP e Brigada de Incêndio do IFRN/CNAT. Experiência em lavra a céu aberto, tratamento de minérios, caracterização de minerais, meio ambiente, segurança do trabalho e uso de explosivos. Participa do Projeto de Recuperação de Rejeitos da Mina Brejuí, em Currais Novos/RN, como pesquisador e coordenador do projeto.',
      image: '/images/members/researchers/mauro.avif',
      linkedin: '',
      lattes: 'http://lattes.cnpq.br/2040770138072645'
    },
  ]

  const currentPage = ref(1)
  const itemsPerPage = 5

  const totalPages = computed(() => {
    return Math.ceil(researchers.length / itemsPerPage)
  })

  const paginatedResearchers = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return researchers.slice(startIndex, endIndex)
  })
</script>

<template>
  <v-window-item value="pesquisadores">
    <v-row>
      <v-col v-for="researcher in paginatedResearchers" :key="researcher.id" cols="12">
        <CardMembersComponent
          :nameMember="researcher.name"
          :positionMember="researcher.position"
          :descriptionMember="researcher.description"
          :imageMember="researcher.image"
          :linkedinMember="researcher.linkedin"
          :lattesMember="researcher.lattes"
        />
      </v-col>
      <v-col cols="12" class="d-flex justify-center mt-4">
        <v-pagination v-model="currentPage" :length="totalPages" rounded="circle" />
      </v-col>
    </v-row>
  </v-window-item>
</template>
