<script lang="ts" setup>
  defineProps({
    nameService: String,
    descriptionService: String,
    imageService: String,
  })
</script>

<template>
  <v-card variant="outlined" class="pa-4 mb-4 border-sm rounded-lg">
    <div class="d-flex flex-no-wrap flex-column flex-sm-row">
      <v-avatar size="180" rounded="0" color="grey-lighten-1" class="ma-3" :image="imageService" :alt="nameService" />

      <div>
        <v-card-title class="text-teal-darken-3 font-weight-bold">
          {{ nameService }}
        </v-card-title>

        <v-card-text class="text-body-1 text-justify">
          {{ descriptionService }}
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.color-button {
  color: #E48020;
}
</style>
