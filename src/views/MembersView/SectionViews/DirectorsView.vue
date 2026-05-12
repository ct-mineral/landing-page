<script lang="ts" setup>
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
  ]
</script>

<template>
  <v-window-item value="diretores">
    <v-row>
      <v-col v-for="director in directors" :key="director.id" cols="12">
        <CardMembersComponent
          :nameMember="director.name"
          :positionMember="director.position"
          :descriptionMember="director.description"
          :imageMember="director.image"
          :linkedinMember="director.linkedin"
          :lattesMember="director.lattes"
        />
      </v-col>
    </v-row>
  </v-window-item>
</template>
