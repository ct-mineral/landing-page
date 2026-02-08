<script setup lang="ts">
import TitleSectionComponent from '@/components/TitleSectionComponent.vue'

import { onBeforeUnmount, onMounted, ref } from 'vue'

const mapContainer = ref<HTMLDivElement | null>(null)
const isMapReady = ref(false)
let map: import('leaflet').Map | null = null
let observer: IntersectionObserver | null = null

const latitude = -6.251312399481678
const longitude = -36.53463290015861

const loadMap = async () => {
  if (!mapContainer.value || map) return

  const [{ default: leaflet }] = await Promise.all([
    import('leaflet'),
    import('leaflet/dist/leaflet.css'),
  ])

  const myIcon = leaflet.icon({
    iconUrl: 'images/logo.png',
    iconSize: [43, 40],
    iconAnchor: [15, 20],
  })

  map = leaflet.map(mapContainer.value).setView([latitude, longitude], 17)
  leaflet
    .marker([latitude, longitude], { icon: myIcon })
    .addTo(map)
    .bindPopup('Centro de Tecnologia Mineral')
    .openPopup()

  leaflet
    .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map)

  isMapReady.value = true
}

onMounted(() => {
  if (!mapContainer.value) return

  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer?.disconnect()
        observer = null
        loadMap()
      }
    },
    { rootMargin: '200px 0px' },
  )

  observer.observe(mapContainer.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
  if (map) {
    map.remove()
    map = null
  }
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
          <hr class="text-white" />
        </v-col>
        <v-col cols="12">
          <v-container fluid>
            <div ref="mapContainer" class="map rounded-lg">
              <div v-if="!isMapReady" class="map-placeholder">Carregando mapa...</div>
            </div>
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

.map {
  height: 400px;
  width: 100%;
}

.map-placeholder {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 0.95rem;
}
</style>
