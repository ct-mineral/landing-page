<script setup lang="ts">
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
    iconUrl: '/images/logos/logo_ctm.svg',
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
  <section class="section location-section">
    <div class="page-container">
      <div class="section-heading">
        <span class="section-tag">Localização</span>
        <h2>Veja onde estamos</h2>
        <p>O CT Mineral fica em Currais Novos/RN, no coração do Seridó Potiguar.</p>
      </div>

      <div ref="mapContainer" class="map">
        <div v-if="!isMapReady" class="map-placeholder">Carregando mapa...</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location-section {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}

.map {
  overflow: hidden;
  height: 420px;
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0 12px 35px rgba(25, 64, 57, 0.06);
}

.map-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 600px) {
  .map {
    height: 320px;
  }
}
</style>
