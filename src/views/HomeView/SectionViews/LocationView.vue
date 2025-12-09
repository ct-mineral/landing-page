<script setup lang="ts">
import TitleSectionComponent from '@/components/TitleSectionComponent.vue'

const iframeUrl = `https://maps.google.com/maps?q=${-6.2528602},${-36.5366794}&hl=pt-BR&z=15&output=embed`
</script>
<template>
  <v-container class="location-container" fluid>
    <v-row>
      <v-col cols="12" class="d-flex flex-column ga-2 text-white">
        <TitleSectionComponent
          icon-props="mdi-map-marker"
          title-props="Localização"
          subtitle-props="Veja onde estamos localizados"
        />
        <hr />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
        <div class="map-wrapper">
          <iframe
            :src="iframeUrl"
            width="100%"
            height="450"
            style="border: 0; border-radius: 8px"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Mapa de localização do IFRN Polo de Inovação"
          ></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.location-container {
  background: linear-gradient(135deg, rgba(14, 84, 74, 1) 0%, rgba(13, 141, 123, 1) 75%);
}
</style>
