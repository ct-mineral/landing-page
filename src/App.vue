<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
// import HomeView from './views/HomeView/HomeView.vue'
import AboutView from './views/AboutView/AboutView.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <v-app>
    <!-- <HomeView /> -->
    <AboutView />
  </v-app>
  <FooterComponent />
</template>

<style scoped></style>
