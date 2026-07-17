<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  nameService?: string
  machine?: string
  descriptionService?: string
  imageService?: string
  indexService?: string
}>()

const hasImage = computed(() => !!props.imageService && props.imageService !== '#')
</script>

<template>
  <article class="service-detail-card" :class="{ 'has-image': hasImage }">
    <div v-if="hasImage" class="service-image">
      <img :src="imageService" :alt="nameService" loading="lazy" decoding="async" />
    </div>

    <div class="service-content">
      <div class="service-heading">
        <span class="service-number">{{ indexService }}</span>
        <div>
          <h3>{{ nameService }}</h3>
          <span v-if="machine" class="machine">{{ machine }}</span>
        </div>
      </div>

      <p>{{ descriptionService }}</p>
    </div>
  </article>
</template>

<style scoped>
.service-detail-card {
  position: relative;
  display: grid;
  overflow: hidden;
  border: 1px solid var(--line, #dce5e2);
  border-left: 4px solid var(--green, #0e544a);
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0 12px 35px rgba(25, 64, 57, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.service-detail-card.has-image {
  grid-template-columns: minmax(250px, 0.72fr) 1.28fr;
  border-left-width: 1px;
}

.service-detail-card:hover {
  border-color: rgba(14, 84, 74, 0.32);
  box-shadow: 0 20px 45px rgba(25, 64, 57, 0.1);
  transform: translateY(-2px);
}

.service-image {
  min-height: 330px;
  background: var(--green-soft, #eaf4f2);
}

.service-image img {
  width: 100%;
  height: 100%;
  min-height: 330px;
  object-fit: cover;
}

.service-content {
  padding: 32px 34px;
}

.service-heading {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 18px;
  align-items: start;
  margin-bottom: 22px;
}

.service-number {
  padding-top: 4px;
  color: var(--orange, #e65100);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.service-content h3 {
  margin: 0;
  color: var(--ink, #1d2927);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  letter-spacing: -0.015em;
  line-height: 1.3;
}

.machine {
  display: block;
  margin-top: 7px;
  color: var(--green, #0e544a);
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.5;
}

.service-content > p {
  margin: 0 0 0 60px;
  color: var(--muted, #5f6d6a);
  font-size: 0.92rem;
  line-height: 1.78;
}

@media (max-width: 800px) {
  .service-detail-card.has-image {
    grid-template-columns: 1fr;
  }

  .service-image {
    height: 330px;
    min-height: 0;
  }

  .service-image img {
    min-height: 0;
  }
}

@media (max-width: 600px) {
  .service-content {
    padding: 26px 22px;
  }

  .service-heading {
    grid-template-columns: 34px 1fr;
    gap: 10px;
  }

  .service-content > p {
    margin-left: 44px;
  }
}

@media (max-width: 420px) {
  .service-heading {
    grid-template-columns: 1fr;
  }

  .service-content > p {
    margin-left: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-detail-card {
    transition: none;
  }
}
</style>
