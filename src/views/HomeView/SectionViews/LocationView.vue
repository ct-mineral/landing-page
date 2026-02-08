<script setup lang="ts">
import TitleSectionComponent from '@/components/TitleSectionComponent.vue'

import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted } from 'vue'

let map: leaflet.Map

const myIcon = leaflet.icon({
  iconUrl: 'images/logo.png',
  iconSize: [43, 40],
  iconAnchor: [15, 20],
})

const latitude = -6.251312399481678
const longitude = -36.53463290015861

onMounted(() => {
  map = leaflet.map('map').setView([latitude, longitude], 17)
  leaflet.marker([latitude, longitude], { icon: myIcon }).addTo(map).bindPopup('Centro de Tecnologia Mineral').openPopup()

  leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)
})

</script>
<template>
  <div class="location-container">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex flex-column ga-2 text-white">
          <TitleSectionComponent
            icon-props="mdi-map-marker"
            title-props="Localização"
            subtitle-props="Veja onde estamos localizados"
          />
          <hr class="text-white"/>
        </v-col>
        <v-col cols="12">
          <v-container fluid>
            <div id="map" class="rounded-lg"></div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.location-container {
  background: linear-gradient(135deg, rgba(14, 84, 74, 1) 0%, rgba(13, 141, 123, 1) 75%);
}

#map {
  height: 400px;
  width: 100%;
}
</style>
