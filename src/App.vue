<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ScrollToTopButtonComponent from './components/ScrollToTopButtonComponent.vue'
</script>

<template>
  <v-app>
    <HeaderComponent />

    <v-main class="main-layout">
      <RouterView />
    </v-main>

    <ScrollToTopButtonComponent />

    <FooterComponent />
  </v-app>
</template>

<style scoped>
.main-layout {
  min-height: calc(100vh - 140px - 320px);
}
</style>
