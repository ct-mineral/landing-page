<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import DirectorsView from './SectionViews/DirectorsView.vue'
import ResearchersView from './SectionViews/ResearchersView.vue'
import TechniciansView from './SectionViews/TechniciansView.vue'

const route = useRoute()
const tab = ref('diretores')

onMounted(() => {
  const tabParam = route.query.tab as string
  if (tabParam && ['diretores', 'pesquisadores', 'tecnicos'].includes(tabParam)) {
    tab.value = tabParam
  }
})
</script>

<template>
  <main class="members-page">
    <section class="members-hero">
      <div class="page-container hero-grid">
        <div>
          <span class="eyebrow">
            <span class="status-dot" aria-hidden="true"></span>
            Pessoas que fazem o CT Mineral
          </span>
          <h1>Conhecimento técnico que transforma <em>desafios em inovação.</em></h1>
          <p>
            Uma equipe multidisciplinar formada por gestores e pesquisadores que conecta ciência,
            tecnologia e indústria para desenvolver o setor mineral.
          </p>
        </div>

        <div class="hero-summary" aria-label="Composição da equipe">
          <div>
            <strong>4</strong>
            <span>Profissionais na gestão</span>
          </div>
          <div>
            <strong>10</strong>
            <span>Pesquisadores acadêmicos</span>
          </div>
          <div>
            <strong>PD&I</strong>
            <span>Atuação multidisciplinar</span>
          </div>
        </div>
      </div>
    </section>

    <section class="members-content">
      <div class="page-container">
        <div class="section-heading">
          <span class="section-tag">Nossa equipe</span>
          <h2>Conheça quem impulsiona o Polo de Inovação</h2>
          <p>
            Selecione uma área para conhecer a trajetória e as especialidades dos nossos
            integrantes.
          </p>
        </div>

        <div class="tabs-shell">
          <v-tabs
            v-model="tab"
            class="members-tabs"
            color="teal-darken-3"
            align-tabs="start"
            show-arrows
          >
            <v-tab value="diretores">Gestão</v-tab>
            <v-tab value="pesquisadores">Pesquisadores</v-tab>
          </v-tabs>
        </div>

        <v-window v-model="tab" class="members-window">
          <DirectorsView />
          <ResearchersView />
          <TechniciansView />
        </v-window>
      </div>
    </section>
  </main>
</template>

<style scoped>
.members-page {
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

.page-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.members-hero {
  position: relative;
  padding: 88px 0 76px;
  background:
    radial-gradient(circle at 92% 5%, rgba(14, 84, 74, 0.12), transparent 30%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfa 100%);
}

.members-hero::before {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(14, 84, 74, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.28;
  content: '';
  pointer-events: none;
  mask-image: linear-gradient(to right, black, transparent 55%);
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  gap: 76px;
  align-items: end;
}

.eyebrow {
  display: inline-flex;
  gap: 9px;
  align-items: center;
  margin-bottom: 24px;
  padding: 7px 12px;
  border: 1px solid rgba(14, 84, 74, 0.24);
  border-radius: 4px;
  background: var(--green-soft);
  color: var(--green);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.055em;
  text-transform: uppercase;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 4px rgba(14, 84, 74, 0.1);
}

.members-hero h1 {
  max-width: 760px;
  margin: 0 0 24px;
  font-size: clamp(2.35rem, 4.3vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.06;
}

.members-hero h1 em {
  display: block;
  color: var(--green);
  font-style: normal;
}

.members-hero p {
  max-width: 690px;
  margin: 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.hero-summary {
  display: grid;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: 0 20px 50px rgba(20, 58, 51, 0.1);
  backdrop-filter: blur(8px);
}

.hero-summary div {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 18px;
  align-items: center;
  min-height: 92px;
  padding: 18px 24px;
  border-bottom: 1px solid var(--line);
}

.hero-summary div:last-child {
  border-bottom: 0;
}

.hero-summary strong {
  color: var(--orange);
  font-size: 1.55rem;
}

.hero-summary span {
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.4;
  text-transform: uppercase;
}

.members-content {
  padding: 92px 0;
  background: #ffffff;
}

.section-heading {
  max-width: 720px;
  margin-bottom: 44px;
}

.section-tag {
  display: block;
  margin-bottom: 12px;
  color: var(--orange);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-heading h2 {
  margin: 0 0 14px;
  font-size: clamp(1.9rem, 3.2vw, 2.65rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.section-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
}

.tabs-shell {
  margin-bottom: 38px;
  border-bottom: 1px solid var(--line);
}

.members-tabs :deep(.v-tab) {
  min-width: auto;
  padding: 0 22px;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.members-tabs :deep(.v-tab--selected) {
  color: var(--green);
}

.members-window {
  overflow: visible;
}

@media (max-width: 850px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .hero-summary {
    max-width: 560px;
  }
}

@media (max-width: 600px) {
  .page-container {
    width: min(100% - 32px, 1180px);
  }

  .members-hero {
    padding: 52px 0;
  }

  .members-hero::before {
    display: none;
  }

  .members-hero h1 {
    font-size: 2.25rem;
  }

  .members-content {
    padding: 68px 0;
  }

  .hero-summary div {
    grid-template-columns: 70px 1fr;
    padding: 16px 18px;
  }

  .members-tabs :deep(.v-tab) {
    padding: 0 15px;
  }
}
</style>
