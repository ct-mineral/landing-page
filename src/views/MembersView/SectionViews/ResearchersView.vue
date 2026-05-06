<script lang="ts" setup>
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
      image: '#',
      linkedin: 'https://www.linkedin.com/in/cleonilson-mafra-b6bb22bb/',
      lattes: 'http://lattes.cnpq.br/3946223809924016'
    },
    {
      id: 6,
      name: 'Defsson Douglas de Araújo Ferreira',
      position: 'Pesquisador Acadêmico',
      description:
        'Doutor em Engenharia de Processos (2024), Mestre em Exploração Mineral (2022), graduado em Engenharia de Minas e especialista em Legislação Mineral e Ambiental. Professor de Magistério Superior na UFCG (Engenharia de Minas) e ex-professor substituto no IFRN (2022–2024) e efetivo no IFBA (2024–2025). Foi servidor do IFPB (2017–2024), responsável pelos Laboratórios de Beneficiamento Mineral. Técnico em Mineração pelo IFPB (2016). Experiência no DNPM/PB (2016–2017) e no CETEM/RJ (2021), em fiscalização, outorga, caracterização tecnológica e usina piloto de processamento mineral.',
      image: '#',
      linkedin: 'https://www.linkedin.com/in/defsson-douglas-aa608b129/',
      lattes: 'http://lattes.cnpq.br/9154863126644403'
    },
  ]
</script>

<template>
  <v-window-item value="pesquisadores">
    <v-row>
      <v-col v-for="researcher in researchers" :key="researcher.id" cols="12">
        <CardMembersComponent
          :nameMember="researcher.name"
          :positionMember="researcher.position"
          :descriptionMember="researcher.description"
          :imageMember="researcher.image"
          :linkedinMember="researcher.linkedin"
          :lattesMember="researcher.lattes"
        />
      </v-col>
    </v-row>
  </v-window-item>
</template>
