<script lang="ts" setup>
import { ref } from 'vue'

const showVideo = ref(false)

const playVideo = () => {
  showVideo.value = true
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="video-container d-flex justify-center align-center" @click="playVideo">
          <template v-if="!showVideo">
            <img
              src="/images/logos/logo_ctm.svg"
              alt="Vídeo institucional"
              class="thumb w-50 h-50"
            />
            <div class="play-button">▶</div>
          </template>

          <iframe
            v-else
            src="https://www.youtube-nocookie.com/embed/Wit4LgJ7uy8?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  cursor: pointer;
}

.video-container iframe,
.video-container .thumb {
  width: 100%;
  height: 100%;
  border: 0;
}

.play-button {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: white;
  background: rgba(0, 0, 0, 0.4);
}
</style>
