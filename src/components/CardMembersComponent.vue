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
      <v-avatar size="180" class="ma-3 rounded-lg" :image="imageMember" :alt="nameMember" />

      <div>
        <v-card-title class="text-teal-darken-3 font-weight-bold text-wrap">
          {{ nameMember }}
        </v-card-title>

        <v-card-subtitle class="text-subtitle-2 mt-n2">
          {{ positionMember }}
        </v-card-subtitle>

        <v-card-text class="text-body-1 text-justify card-title">
          {{ descriptionMember }}
        </v-card-text>

        <v-divider class="mx-4 mb-4"></v-divider>

        <v-card-actions class="px-4">
          <v-btn
            icon="mdi-linkedin"
            class="text-orange-darken-3 mr-2"
            :href="linkedinMember"
            target="_blank"
          />
          <v-btn icon :href="lattesMember" target="_blank" rounded="circle">
            <v-icon>
              <img src="/images/logos/lattes.svg" alt="Lattes" width="18" height="24" />
            </v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.card-title {
  min-height: 56px;
}
</style>
