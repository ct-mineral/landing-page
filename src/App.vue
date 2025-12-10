<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import HomeView from './views/HomeView/HomeView.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <v-app>
    <HomeView />
  </v-app>
  <FooterComponent />
</template>

<style scoped></style>
