<script lang="ts" setup>
import { mdiFilePdfBox } from '@mdi/js'
import { computed } from 'vue'

const props = defineProps({
  nameService: String,
  machine: String,
  descriptionService: String,
  imageService: String,
  pdfService: String,
})

const hasImage = computed(() => !!props.imageService && props.imageService !== '#')
const hasPdf = computed(() => !!props.pdfService && props.pdfService !== '#')
</script>

<template>
  <v-card variant="outlined" class="pa-4 mb-4 border-sm rounded-lg">
    <div class="d-flex flex-no-wrap flex-column flex-sm-row">
      <v-avatar
        v-if="hasImage"
        size="180"
        rounded="0"
        color="grey-lighten-1"
        class="ma-3"
        :image="imageService"
        :alt="nameService"
      />

      <div>
        <v-card-title class="text-teal-darken-3 font-weight-bold text-wrap">
          {{ nameService }}
        </v-card-title>

        <v-card-subtitle class="text-subtitle-2 text-wrap mt-n2">
          {{ machine }}
        </v-card-subtitle>

        <v-card-text class="text-body-1 text-justify card-title">
          {{ descriptionService }}
        </v-card-text>

        <div v-if="hasPdf" class="px-4 pb-4">
          <v-btn
            :href="pdfService"
            target="_blank"
            rel="noopener noreferrer"
            min-height="48"
            height="auto"
            class="text-none border-sm"
            variant="outlined"
            color="red-darken-2"
            :prepend-icon="mdiFilePdfBox"
          >
            <span class="text-wrap">Abrir PDF</span>
          </v-btn>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.card-title {
  min-height: 56px;
}
</style>
