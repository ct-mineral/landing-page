<script setup lang="ts">
  import CardSectionComponent from '@/components/CardSectionComponent.vue';
  import TitleSectionComponent from '@/components/TitleSectionComponent.vue';
  import diretoresPng from '@/assets/images/diretores.png';

  const informationsCards = [
    { id: 1, title: 'Diretores(as)', description: 'lorem impsum', image: diretoresPng },
    { id: 2, title: 'Pesquisadores(as)', description: 'lorem impsum', image: diretoresPng },
    { id: 3, title: 'Equipe Técnica', description: 'lorem impsum', image: diretoresPng },
  ]
</script>

<template>
  <v-container fluid class="members-container">
    <v-row>
      <v-col cols="12" class="d-flex flex-column ga-2 text-white">
        <TitleSectionComponent icon-props="mdi-menu-right" title-props="Integrantes" subtitle-props="Descubra quem compõe o CT Mineral e leva a inovação até você"/>
        <hr class="text-white">
      </v-col>

      <v-col cols="12">
        <v-slide-group>
          <v-slide-group-item>
            <v-container class="d-flex justify-center ga-5 ga-md-12 px-0" fluid>
              <div v-for="i in informationsCards" :key="i.id">
                <CardSectionComponent
                  class="text-white"
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

<style scoped>
.members-container {
  background: linear-gradient(135deg, rgba(14, 84, 74, 1) 0%, rgba(13, 141, 123, 1) 75%);
}
</style>
