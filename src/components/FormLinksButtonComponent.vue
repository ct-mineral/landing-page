<script setup lang="ts">
import { mdiLink } from '@mdi/js'

defineProps({
  description: String,
  link: String
})
</script>

<template>
  <div class="d-flex flex-column ga-4">
    <v-btn
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      min-height="52"
      height="auto"
      class="pa-4 justify-start text-none border-sm bg-teal-lighten-5"
      variant="outlined"
      color="teal-darken-3"
      :prepend-icon="mdiLink"
    >
      <span class="text-start text-wrap">{{ description }}</span>
    </v-btn>
  </div>
</template>

<style scoped></style>
