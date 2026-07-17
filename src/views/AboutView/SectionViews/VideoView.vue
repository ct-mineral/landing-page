<script lang="ts" setup>
import { ref } from 'vue'

const showVideo = ref(false)

const playVideo = () => {
  showVideo.value = true
}
</script>

<template>
  <section class="video-section">
    <div class="page-container video-grid">
      <div class="video-copy">
        <span class="section-tag">Conheça o CT Mineral</span>
        <h2>Pesquisa aplicada que transforma o setor mineral</h2>
        <p>
          Veja como nossa equipe, infraestrutura e parcerias aproximam conhecimento científico das
          necessidades reais da indústria.
        </p>
      </div>

      <button
        class="video-container"
        type="button"
        aria-label="Reproduzir vídeo institucional do CT Mineral"
        @click="playVideo"
      >
          <template v-if="!showVideo">
            <img
              src="/images/logos/logo_ctm.svg"
              alt="Vídeo institucional"
            class="thumb"
            />
          <span class="play-button" aria-hidden="true">▶</span>
          <span class="video-label">Assistir ao vídeo institucional</span>
          </template>

          <iframe
            v-else
            src="https://www.youtube-nocookie.com/embed/Wit4LgJ7uy8?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
      </button>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  padding: 86px 0;
  background: var(--green);
  color: #ffffff;
}

.video-grid {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(440px, 1.28fr);
  gap: 72px;
  align-items: center;
}

.video-copy .section-tag {
  color: #ffb17f;
}

.video-copy h2 {
  margin: 0 0 18px;
  font-size: clamp(1.9rem, 3.2vw, 2.65rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.video-copy p {
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 1rem;
  line-height: 1.7;
}

.video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  aspect-ratio: 16 / 9;
  background: #f6f9f8;
  cursor: pointer;
  box-shadow: 0 24px 55px rgba(5, 30, 26, 0.28);
}

.video-container iframe,
.video-container .thumb {
  width: 100%;
  height: 100%;
  border: 0;
}

.thumb {
  padding: 18%;
  object-fit: contain;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  place-items: center;
  background: var(--orange);
  color: #ffffff;
  font-size: 1.3rem;
  box-shadow: 0 12px 30px rgba(98, 40, 9, 0.3);
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease;
}

.video-container:hover .play-button {
  transform: translate(-50%, -50%) scale(1.08);
}

.video-label {
  position: absolute;
  right: 18px;
  bottom: 16px;
  left: 18px;
  color: var(--green);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

@media (max-width: 850px) {
  .video-grid {
    grid-template-columns: 1fr;
    gap: 38px;
  }
}

@media (max-width: 600px) {
  .video-section {
    padding: 68px 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .play-button {
    transition: none;
  }
}
</style>
