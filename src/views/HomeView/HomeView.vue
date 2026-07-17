<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import WelcomeView from './SectionViews/WelcomeView.vue'

const CredentialsView = defineAsyncComponent(() => import('./SectionViews/CredentialsView.vue'))
const ServicesView = defineAsyncComponent(() => import('./SectionViews/ServicesView.vue'))
const ProcessView = defineAsyncComponent(() => import('./SectionViews/ProcessView.vue'))
const LaboratoriesView = defineAsyncComponent(() => import('./SectionViews/LaboratoriesView.vue'))
const CompaniesView = defineAsyncComponent(() => import('./SectionViews/CompaniesView.vue'))
const ContactCtaView = defineAsyncComponent(() => import('./SectionViews/ContactCtaView.vue'))

const showCredentials = ref(false)
const showServices = ref(false)
const showProcess = ref(false)
const showLaboratories = ref(false)
const showCompanies = ref(false)
const showContactCta = ref(false)

function onIntersectCredentials(isIntersecting: boolean) {
  if (isIntersecting) showCredentials.value = true
}

function onIntersectServices(isIntersecting: boolean) {
  if (isIntersecting) showServices.value = true
}

function onIntersectProcess(isIntersecting: boolean) {
  if (isIntersecting) showProcess.value = true
}

function onIntersectLaboratories(isIntersecting: boolean) {
  if (isIntersecting) showLaboratories.value = true
}

function onIntersectCompanies(isIntersecting: boolean) {
  if (isIntersecting) showCompanies.value = true
}

function onIntersectContactCta(isIntersecting: boolean) {
  if (isIntersecting) showContactCta.value = true
}
</script>

<template>
  <main class="home-page">
    <section>
      <WelcomeView />
    </section>

    <section v-intersect="onIntersectCredentials">
      <CredentialsView v-if="showCredentials" />
    </section>

    <section v-intersect="onIntersectServices">
      <ServicesView v-if="showServices" />
    </section>

    <section v-intersect="onIntersectProcess">
      <ProcessView v-if="showProcess" />
    </section>

    <section v-intersect="onIntersectLaboratories">
      <LaboratoriesView v-if="showLaboratories" />
    </section>

    <section v-intersect="onIntersectCompanies">
      <CompaniesView v-if="showCompanies" />
    </section>

    <section v-intersect="onIntersectContactCta">
      <ContactCtaView v-if="showContactCta" />
    </section>
  </main>
</template>

<style scoped>
.home-page {
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

.home-page > section {
  width: 100%;
  min-height: 120px;
}

.home-page :deep(.page-container) {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.home-page :deep(.section) {
  padding: 92px 0;
  background: #ffffff;
}

.home-page :deep(.section-heading) {
  max-width: 720px;
  margin-bottom: 48px;
}

.home-page :deep(.section-tag) {
  display: block;
  margin-bottom: 12px;
  color: var(--orange);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-page :deep(.section-heading h2) {
  margin: 0 0 14px;
  font-size: clamp(1.9rem, 3.2vw, 2.65rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.home-page :deep(.section-heading p) {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
}

.home-page :deep(.button) {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 0.93rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.home-page :deep(.button:hover) {
  transform: translateY(-2px);
}

.home-page :deep(.button-primary) {
  background: var(--green);
  color: #ffffff;
}

.home-page :deep(.button-primary:hover) {
  background: var(--green-hover);
}

.home-page :deep(.button-secondary) {
  border-color: #b9c8c4;
  background: #ffffff;
  color: var(--ink);
}

.home-page :deep(.button-secondary:hover) {
  border-color: var(--green);
  color: var(--green);
}

@media (max-width: 600px) {
  .home-page :deep(.page-container) {
    width: min(100% - 32px, 1180px);
  }

  .home-page :deep(.section) {
    padding: 68px 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-page :deep(.button) {
    transition: none;
  }
}
</style>
