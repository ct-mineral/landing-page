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
    <h5 class="text-h6 text-md-h5 font-weight-bold">{{ titleProps }}</h5>
  </div>
  <span class="text-subtitle-2 text-md-subtitle-1">{{ subtitleProps }}</span>
</template>

<style scoped></style>
