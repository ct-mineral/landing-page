<script lang="ts" setup>
  defineProps({
    nameMember: String,
    positionMember: String,
    descriptionMember: String,
    imageMember: String,
    linkedinMember: String,
    lattesMember: String,
  })
</script>

<template>
  <v-card variant="outlined" class="pa-4 mb-4 border-sm rounded-lg">
    <div class="d-flex flex-no-wrap flex-column flex-sm-row">
      <v-avatar size="180" rounded="0" color="grey-lighten-1" class="ma-3" :image="imageMember"/>

      <div>
        <v-card-title class="text-teal-darken-3 font-weight-bold">
          {{ nameMember }}
        </v-card-title>

        <v-card-subtitle class="text-subtitle-2 mt-n2">
          {{ positionMember }}
        </v-card-subtitle>

        <v-card-text class="text-body-1">
          {{ descriptionMember }}
        </v-card-text>

        <v-divider class="mx-4 mb-4"></v-divider>

        <v-card-actions class="px-4">
          <v-btn icon="mdi-linkedin" class="color-button mr-2" :to="linkedinMember"/>
          <v-btn icon="mdi-circle" class="color-button" :to="lattesMember"></v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.color-button {
  color: #E48020;
}
</style>
