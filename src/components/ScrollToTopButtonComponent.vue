<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { mdiChevronUp } from '@mdi/js'

const showButton = ref(false)
const scrollThreshold = 250

const handleScroll = () => {
  showButton.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <v-btn
    v-if="showButton"
    :icon="mdiChevronUp"
    color="teal-darken-3"
    elevation="6"
    class="scroll-to-top position-fixed"
    aria-label="Voltar ao topo"
    @click="scrollToTop"
  />
</template>

<style scoped>
.scroll-to-top {
  right: 24px;
  bottom: 24px;
  z-index: 1000;
}
</style>
