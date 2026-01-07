<script lang="ts" setup></script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/Wit4LgJ7uy8?si=Q1SVtEkjNeAQSs4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .video-container {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.video-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
