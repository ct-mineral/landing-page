<script setup lang="ts">
defineProps({
  titleProps: String,
  imageProps: String,
  descriptionProps: String,
  linkProps: String,
})
</script>

<template>
  <v-card max-width="350" width="350" class="bg-transparent" elevation="0">
    <v-img
      :src="imageProps"
      :alt="titleProps"
      cover
      rounded
      height="300"
      loading="lazy"
      decoding="async"
    />
    <v-card-title class="text-h6 text-wrap font-weight-bold px-0 py-2">{{
      titleProps
    }}</v-card-title>
    <v-card-title class="text-subtitle-2 text-wrap px-0">{{
      descriptionProps
    }}</v-card-title>
    <v-card-actions class="pa-0">
      <v-btn text class="text-white button text-subtitle-1" :to="linkProps">Saiba mais</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.button {
  background-color: #e48020;
}
</style>
