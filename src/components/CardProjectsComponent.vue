<script lang="ts" setup>
  defineProps({
    nameCompanie: String,
    descriptionProject: String,
    imageProject: String,
    locationCompanie: String,
  })
</script>

<template>
  <v-card class="pa-4 rounded-lg">
    <div>
      <v-img
        :src="imageProject"
        :alt="nameCompanie"
        height="200"
        class="rounded-lg"
        cover
        loading="lazy"
        decoding="async"
      />

      <div>
        <v-card-text class="text-body-1 text-wrap">
          {{ descriptionProject }}
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title class="d-flex align-center ga-2 text-teal-darken-3 font-weight-bold text-body-1 text-wrap">
          <v-icon icon="mdi-home-city" size="x-small"/>
          {{ nameCompanie }}
        </v-card-title>

        <v-card-subtitle class="d-flex align-center ga-2 text-body-1 text-color">
          <v-icon icon="mdi-map-marker" size="x-small"/>
          {{ locationCompanie }}
        </v-card-subtitle>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.color-button {
  color: #E48020;
}
</style>
