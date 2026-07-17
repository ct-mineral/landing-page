<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps<{
  title: string
  description: string
  serviceCount: number
}>()

const route = useRoute()

const categories = [
  {
    label: 'Cominuição',
    path: '/servicos/cominuicao-de-amostras',
  },
  {
    label: 'Preparação',
    path: '/servicos/preparacao-de-amostras',
  },
  {
    label: 'Análise mineral',
    path: '/servicos/analise-mineral',
  },
  {
    label: 'Classificação e concentração',
    path: '/servicos/classificacao-e-concentracao-mineral',
  },
]
</script>

<template>
  <main class="services-page">
    <section class="services-hero">
      <div class="page-container hero-grid">
        <div>
          <span class="eyebrow">
            <span class="status-dot" aria-hidden="true"></span>
            Serviços tecnológicos
          </span>
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>

        <div class="hero-summary">
          <strong>{{ String(serviceCount).padStart(2, '0') }}</strong>
          <span>Serviços nesta categoria</span>
          <small>Estrutura laboratorial e equipe técnica especializada</small>
        </div>
      </div>
    </section>

    <nav class="categories-nav" aria-label="Categorias de serviços">
      <div class="page-container categories-list">
        <RouterLink
          v-for="category in categories"
          :key="category.path"
          :to="category.path"
          :class="{ active: route.path === category.path }"
          :aria-current="route.path === category.path ? 'page' : undefined"
        >
          {{ category.label }}
        </RouterLink>
      </div>
    </nav>

    <section class="services-content">
      <div class="page-container">
        <div class="section-heading">
          <span class="section-tag">Capacidade técnica</span>
          <h2>Conheça os serviços disponíveis</h2>
          <p>
            Soluções executadas conforme as características de cada material e os objetivos do
            projeto.
          </p>
        </div>

        <div class="services-list">
          <slot />
        </div>
      </div>
    </section>

    <section class="service-cta">
      <div class="page-container cta-content">
        <div>
          <span>Precisa de orientação técnica?</span>
          <h2>Encontre o serviço adequado para a sua amostra.</h2>
          <p>
            Nossa equipe pode ajudar a definir o escopo, a preparação e os ensaios necessários para
            o seu projeto.
          </p>
        </div>
        <RouterLink to="/contato">
          Falar com nossa equipe
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.services-page {
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

.services-hero {
  position: relative;
  padding: 86px 0 72px;
  background:
    radial-gradient(circle at 92% 5%, rgba(14, 84, 74, 0.12), transparent 30%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfa 100%);
}

.services-hero::before {
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
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
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

.services-hero h1 {
  max-width: 800px;
  margin: 0 0 22px;
  font-size: clamp(2.35rem, 4.3vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.06;
}

.services-hero p {
  max-width: 720px;
  margin: 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.hero-summary {
  padding: 27px 28px;
  border: 1px solid var(--line);
  border-top: 4px solid var(--orange);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 20px 50px rgba(20, 58, 51, 0.1);
  backdrop-filter: blur(8px);
}

.hero-summary strong,
.hero-summary span,
.hero-summary small {
  display: block;
}

.hero-summary strong {
  margin-bottom: 7px;
  color: var(--green);
  font-size: 2.25rem;
  line-height: 1;
}

.hero-summary span {
  margin-bottom: 12px;
  color: var(--ink);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero-summary small {
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.5;
}

.categories-nav {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: #ffffff;
}

.categories-list {
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
}

.categories-list a {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  min-height: 62px;
  padding: 0 22px;
  border-bottom: 3px solid transparent;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.035em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
}

.categories-list a:first-child {
  padding-left: 0;
}

.categories-list a:hover,
.categories-list a.active {
  border-bottom-color: var(--orange);
  color: var(--green);
}

.services-content {
  padding: 88px 0 92px;
  background: #ffffff;
}

.section-heading {
  max-width: 720px;
  margin-bottom: 46px;
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

.services-list {
  display: grid;
  gap: 20px;
}

.service-cta {
  padding: 72px 0;
  background: var(--green);
  color: #ffffff;
}

.cta-content {
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: space-between;
}

.cta-content > div {
  max-width: 720px;
}

.cta-content > div > span {
  display: block;
  margin-bottom: 10px;
  color: #ffb17f;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cta-content h2 {
  margin: 0 0 14px;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1.18;
}

.cta-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.7;
}

.cta-content > a {
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 5px;
  background: #ffffff;
  color: var(--green);
  font-size: 0.88rem;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.cta-content > a:hover {
  transform: translateY(-2px);
}

@media (max-width: 850px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .hero-summary {
    max-width: 420px;
  }
}

@media (max-width: 600px) {
  .page-container {
    width: min(100% - 32px, 1180px);
  }

  .services-hero {
    padding: 52px 0;
  }

  .services-hero::before {
    display: none;
  }

  .services-hero h1 {
    font-size: 2.25rem;
  }

  .categories-list a {
    padding: 0 16px;
  }

  .services-content {
    padding: 68px 0;
  }

  .cta-content {
    align-items: flex-start;
    flex-direction: column;
    gap: 28px;
  }

  .cta-content > a {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .categories-list a,
  .cta-content > a {
    transition: none;
  }
}
</style>
