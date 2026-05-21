<script lang="ts" setup>
import FormLinksButtonComponent from '@/components/FormLinksButtonComponent.vue'
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-2 text-orange-darken-3">Oportunidades</h2>
        <p class="text-body-1">
          O Polo de Inovação do IFRN está constantemente em busca de estudantes e profissionais talentosos para integrar projetos de Pesquisa, Desenvolvimento e Inovação (PD&I) desenvolvidos pelo CT Mineral.
        </p>
        <p class="text-body-1">
          Se você é estudante do IFRN, em qualquer nível de ensino, ou profissional do setor produtivo em áreas relacionadas às atividades do CT Mineral, esta é a oportunidade de participar de experiências práticas, contribuir para o avanço da ciência e tecnologia e desenvolver suas competências profissionais em um ambiente inovador e colaborativo.
        </p>
        <p class="text-body-1">
          Aqui, você poderá atuar em projetos voltados à pesquisa aplicada, inovação tecnológica e desenvolvimento de soluções para demandas reais da indústria e da sociedade.
        </p>
        <p class="text-body-1">
          Acompanhe esta seção e nossas redes de comunicação para ficar por dentro das oportunidades de estágio, bolsas, empregos, projetos e parcerias disponíveis no ecossistema de inovação do Polo de Inovação do IFRN.
        </p>
        <div class="d-flex flex-column ga-4 mt-4">
          <h5 class="text-h6 font-weight-bold text-orange-darken-3">Formulários</h5>
          <FormLinksButtonComponent
            description="Formulário de Inscrição para Estudantes"
            link="https://docs.google.com/forms/d/e/1FAIpQLScRmPkwwVnBwjBhJaHQmtwvvzri80OhM1kLwk4iIbSj0jugsw/viewform"
          />
          <FormLinksButtonComponent
            description="Formulário de Inscrição para Pesquisadores"
            link="https://docs.google.com/forms/d/e/1FAIpQLSflb5Wu7NIxwqe98fPBfOACsFsxBhVFmemRQbAIQ1YWyKIL1A/viewform"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
p {
  text-align: justify;
  padding: 8px 0;
}
</style>
