<script setup lang="ts">
  defineProps({
    titleProps: String,
    imageProps: String,
    descriptionProps: String,
  })
</script>

<template>
  <v-card max-width="350" width="350" class="bg-transparent" elevation="0">
    <v-img :src="imageProps" cover rounded/>
    <v-card-title class="text-h6 text-md-h5 text-wrap font-weight-bold px-0 py-3">{{ titleProps }}</v-card-title>
    <v-card-subtitle class="text-subtitle-2 text-wrap px-0 py-2">{{ descriptionProps }}</v-card-subtitle>
    <v-card-actions class="pa-0">
      <v-btn text class="text-white button text-subtitle-1">Saiba mais</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
  .button {
    background-color: #E48020;
  }
</style>
