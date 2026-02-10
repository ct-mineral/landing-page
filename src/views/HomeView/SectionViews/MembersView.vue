<script setup lang="ts">
import CardSectionComponent from '@/components/CardSectionComponent.vue'
import TitleSectionComponent from '@/components/TitleSectionComponent.vue'

const informationsCards = [
  {
    id: 1,
    title: 'Diretores(as)',
    description: 'lorem impsum',
    image: '/images/diretores.avif',
    link: '/integrantes?tab=diretores',
  },
  {
    id: 2,
    title: 'Pesquisadores(as)',
    description: 'lorem impsum',
    image: '/images/diretores.avif',
    link: '/integrantes?tab=pesquisadores',
  },
  {
    id: 3,
    title: 'Equipe Técnica',
    description: 'lorem impsum',
    image: '/images/diretores.avif',
    link: '/integrantes?tab=tecnicos',
  },
]
</script>

<template>
  <div class="members-container">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex flex-column ga-2 text-white">
          <TitleSectionComponent
            icon-props="mdi-menu-right"
            title-props="Integrantes"
            subtitle-props="Descubra quem compõe o CT Mineral e leva a inovação até você"
          />
          <hr class="text-white" />
        </v-col>

        <v-col cols="12">
          <v-slide-group>
            <v-slide-group-item>
              <v-container v-for="i in informationsCards" :key="i.id">
                <div class="d-flex justify-center ga-5 ga-md-12 px-0">
                  <CardSectionComponent
                    class="text-white"
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
  </div>
</template>

<style scoped>
.members-container {
  background: linear-gradient(135deg, rgba(14, 84, 74, 1) 0%, rgba(13, 141, 123, 1) 75%);
}
</style>
