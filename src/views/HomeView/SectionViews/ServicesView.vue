<script setup lang="ts">
  import TitleSectionComponent from '@/components/TitleSectionComponent.vue';
  import CardSectionComponent from '@/components/CardSectionComponent.vue';

  const informationsCards = [
    { id: 1, title: 'Administração de Amostras', description: 'lorem impsum', image: 'images/diretores.png', link: '/servicos/administracao-de-amostras' },
    { id: 2, title: 'Análises', description: 'lorem impsum', image: 'images/diretores.png', link: '/servicos/analises' },
    { id: 3, title: 'Preparação de Amostras', description: 'lorem impsum', image: 'images/diretores.png', link: '/servicos/preparacao-de-amostras' },
    { id: 4, title: 'Testes Físicos', description: 'lorem impsum', image: 'images/diretores.png', link: '/servicos/testes-fisicos' },
  ]
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="d-flex flex-column ga-2">
        <TitleSectionComponent icon-props="mdi-briefcase" title-props="Nossos serviços" subtitle-props="Alguns dos serviços que ofertamos no nosso Polo de Inovação"/>
        <hr>
      </v-col>
      <v-col cols="12">
        <v-slide-group>
          <v-slide-group-item>
            <v-container v-for="i in informationsCards" :key="i.id" fluid>
              <div class="d-flex justify-center ga-5 ga-md-12 px-0">
                <CardSectionComponent
                  :title-props="i.title"
                  :description-props="i.description"
                  :image-props="i.image"
                  :link-props="i.link"
                />
              </div>
            </v-container>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
