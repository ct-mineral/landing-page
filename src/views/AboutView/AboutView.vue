<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import PoloView from './SectionViews/PoloView.vue'

const VideoView = defineAsyncComponent(() => import('./SectionViews/VideoView.vue'))
const HistoryView = defineAsyncComponent(() => import('./SectionViews/HistoryView.vue'))
const StructureView = defineAsyncComponent(() => import('./SectionViews/StructureView.vue'))
const InfrastructureView = defineAsyncComponent(
  () => import('./SectionViews/InfrastructureView.vue'),
)
const PerformanceView = defineAsyncComponent(() => import('./SectionViews/PerformanceView.vue'))

const visibleSections = ref(new Set<string>())

function showSection(section: string, isIntersecting: boolean) {
  if (isIntersecting) visibleSections.value.add(section)
}

const onIntersectVideo = (isIntersecting: boolean) => showSection('video', isIntersecting)
const onIntersectHistory = (isIntersecting: boolean) => showSection('history', isIntersecting)
const onIntersectStructure = (isIntersecting: boolean) => showSection('structure', isIntersecting)
const onIntersectInfrastructure = (isIntersecting: boolean) =>
  showSection('infrastructure', isIntersecting)
const onIntersectPerformance = (isIntersecting: boolean) =>
  showSection('performance', isIntersecting)
</script>

<template>
  <main class="about-page">
    <PoloView />

    <div v-intersect="onIntersectVideo" class="section-slot">
      <VideoView v-if="visibleSections.has('video')" />
    </div>

    <div v-intersect="onIntersectHistory" class="section-slot">
      <HistoryView v-if="visibleSections.has('history')" />
    </div>

    <div v-intersect="onIntersectStructure" class="section-slot">
      <StructureView v-if="visibleSections.has('structure')" />
    </div>

    <div v-intersect="onIntersectInfrastructure" class="section-slot">
      <InfrastructureView v-if="visibleSections.has('infrastructure')" />
    </div>

    <div v-intersect="onIntersectPerformance" class="section-slot">
      <PerformanceView v-if="visibleSections.has('performance')" />
    </div>
  </main>
</template>

<style scoped>
.about-page {
  --green: #0e544a;
  --green-hover: #107465;
  --green-soft: #eaf4f2;
  --orange: #e65100;
  --orange-soft: #fff3eb;
  --ink: #1d2927;
  --muted: #5f6d6a;
  --line: #dce5e2;
  --surface: #f6f9f8;
  color: var(--ink);
  overflow: hidden;
}

.section-slot {
  width: 100%;
  min-height: 120px;
}

.about-page :deep(.page-container) {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.about-page :deep(.content-section) {
  padding: 92px 0;
  background: #ffffff;
}

.about-page :deep(.section-tag) {
  display: block;
  margin-bottom: 12px;
  color: var(--orange);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about-page :deep(.section-heading) {
  max-width: 720px;
  margin-bottom: 48px;
}

.about-page :deep(.section-heading h2) {
  margin: 0 0 14px;
  font-size: clamp(1.9rem, 3.2vw, 2.65rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.about-page :deep(.section-heading p) {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
}

.about-page :deep(.prose p) {
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 0.98rem;
  line-height: 1.8;
}

.about-page :deep(.prose p:last-child) {
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .about-page :deep(.page-container) {
    width: min(100% - 32px, 1180px);
  }

  .about-page :deep(.content-section) {
    padding: 68px 0;
  }
}
</style>
