<script setup lang="ts">
  defineProps({
    iconProps: String,
    titleProps: String,
    subtitleProps: String,
  })
</script>

<template>
  <div class="d-flex align-center ga-3">
    <v-icon :icon="iconProps" />
    <span class="text-h6 text-md-h5 font-weight-bold">{{ titleProps }}</span>
  </div>
  <span class="text-subtitle-2 text-md-subtitle-1">{{ subtitleProps }}</span>
  <hr class="text-white">
</template>

<style scoped></style>
