<script setup lang="ts">
import { mdiHomeCity, mdiMapMarker } from '@mdi/js'

defineProps<{
  projectNumber?: string
  nameCompanie?: string
  descriptionProject?: string
  imageProject?: string
  locationCompanie?: string
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-image">
      <img
        :src="imageProject"
        :alt="`Imagem ilustrativa do projeto ${nameCompanie}`"
        loading="lazy"
        decoding="async"
      />
      <span class="project-number">Projeto {{ projectNumber }}</span>
    </div>

    <div class="project-content">
      <p>{{ descriptionProject }}</p>

      <div class="project-meta">
        <div>
          <v-icon :icon="mdiHomeCity" size="x-small" />
          <span>
            <small>Empresa parceira</small>
            <strong>{{ nameCompanie }}</strong>
          </span>
        </div>
        <div>
          <v-icon :icon="mdiMapMarker" size="x-small" />
          <span>
            <small>Localização</small>
            <strong>{{ locationCompanie }}</strong>
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  overflow: hidden;
  min-height: 100%;
  border: 1px solid var(--line, #dce5e2);
  border-radius: 7px;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 12px 35px rgba(25, 64, 57, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.project-card:hover {
  border-color: rgba(14, 84, 74, 0.3);
  box-shadow: 0 20px 45px rgba(25, 64, 57, 0.11);
  transform: translateY(-3px);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 220px;
  background: var(--green-soft, #eaf4f2);
}

.project-image::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(8, 41, 35, 0.45));
  content: '';
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.035);
}

.project-number {
  position: absolute;
  right: 16px;
  bottom: 15px;
  z-index: 1;
  padding: 6px 9px;
  border-radius: 3px;
  background: var(--orange, #e65100);
  color: #ffffff;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.project-content {
  display: flex;
  padding: 26px 24px 22px;
  flex: 1;
  flex-direction: column;
}

.project-content > p {
  margin: 0 0 26px;
  color: var(--ink, #1d2927);
  font-size: 0.93rem;
  font-weight: 600;
  line-height: 1.65;
}

.project-meta {
  display: grid;
  gap: 13px;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--line, #dce5e2);
}

.project-meta > div {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 8px;
  align-items: start;
  color: var(--green, #0e544a);
}

.project-meta span,
.project-meta small,
.project-meta strong {
  display: block;
}

.project-meta small {
  margin-bottom: 2px;
  color: var(--muted, #5f6d6a);
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.project-meta strong {
  color: var(--ink, #1d2927);
  font-size: 0.78rem;
  line-height: 1.4;
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-image img {
    transition: none;
  }
}
</style>
