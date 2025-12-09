<script setup lang="ts">
  import CardSectionComponent from '@/components/CardSectionComponent.vue';
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
        <div class="d-flex align-center ga-3">
          <v-icon icon="mdi-menu-right"/>
          <span class="text-h6 text-md-h5 font-weight-bold">Integrantes</span>
        </div>
        <span class="text-subtitle-2 text-md-subtitle-1">Descubra quem compõe o CT Mineral e leva a inovação até você</span>
        <hr class="text-white">
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

<style scoped>
.members-container {
  background: linear-gradient(135deg, rgba(14, 84, 74, 1) 0%, rgba(13, 141, 123, 1) 75%);
}
</style>
