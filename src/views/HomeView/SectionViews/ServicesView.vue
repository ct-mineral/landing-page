<script setup lang="ts">
  import TitleSectionComponent from '@/components/TitleSectionComponent.vue';
  import CardSectionComponent from '@/components/CardSectionComponent.vue';

  const informationsCards = [
    { id: 1, title: 'Administração de Amostras', description: 'lorem impsum', image: 'images/diretores.png' },
    { id: 2, title: 'Análises', description: 'lorem impsum', image: 'images/diretores.png' },
    { id: 3, title: 'Preparação de Amostras', description: 'lorem impsum', image: 'images/diretores.png' },
    { id: 4, title: 'Testes Físicos', description: 'lorem impsum', image: 'images/diretores.png' },
    { id: 5, title: 'Serviços Metalúrgicos', description: 'lorem impsum', image: 'images/diretores.png' },
    { id: 6, title: 'Serviços no Local', description: 'lorem impsum', image: 'images/diretores.png' },
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
            <v-container class="d-flex justify-center ga-5 ga-md-12 px-0" fluid>
              <div v-for="i in informationsCards" :key="i.id">
                <CardSectionComponent
                  :title-props="i.title"
                  :description-props="i.description"
                  :image-props="i.image"
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
