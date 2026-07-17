<script setup lang="ts">
import FormLinksButtonComponent from '@/components/FormLinksButtonComponent.vue'

const profiles = [
  {
    number: '01',
    title: 'Estudantes',
    description:
      'Vivencie projetos de pesquisa aplicada, desenvolva competências técnicas e aproxime sua formação dos desafios reais da indústria.',
    tags: ['Estágios', 'Bolsas', 'Projetos'],
  },
  {
    number: '02',
    title: 'Pesquisadores',
    description:
      'Colabore com uma equipe multidisciplinar em iniciativas de PD&I voltadas a tecnologias e processos para o setor mineral.',
    tags: ['Pesquisa', 'Inovação', 'Cooperação'],
  },
  {
    number: '03',
    title: 'Profissionais e empresas',
    description:
      'Conecte conhecimento, experiência e demandas do setor produtivo ao ecossistema de inovação do Polo do IFRN.',
    tags: ['Parcerias', 'Projetos', 'Indústria'],
  },
]
</script>

<template>
  <main class="opportunities-page">
    <section class="opportunities-hero">
      <div class="page-container hero-grid">
        <div>
          <span class="eyebrow">
            <span class="status-dot" aria-hidden="true"></span>
            Faça parte do Polo de Inovação
          </span>
          <h1>Talento e conhecimento para construir <em>o futuro da mineração.</em></h1>
          <p>
            O CT Mineral busca estudantes, pesquisadores e profissionais interessados em participar
            de projetos de Pesquisa, Desenvolvimento e Inovação.
          </p>
        </div>

        <div class="hero-summary" aria-label="Tipos de oportunidades">
          <span>Estágios</span>
          <span>Bolsas</span>
          <span>Pesquisa</span>
          <span>Projetos</span>
          <span>Parcerias</span>
          <span>Empregos</span>
        </div>
      </div>
    </section>

    <section class="profiles-section">
      <div class="page-container">
        <div class="section-heading">
          <span class="section-tag">Quem pode participar</span>
          <h2>Encontre seu lugar em nosso ecossistema de inovação</h2>
          <p>
            Participe de experiências práticas, contribua para o avanço da ciência e desenvolva suas
            competências em um ambiente colaborativo.
          </p>
        </div>

        <div class="profiles-grid">
          <article v-for="profile in profiles" :key="profile.number" class="profile-card">
            <span class="profile-number">{{ profile.number }}</span>
            <h3>{{ profile.title }}</h3>
            <p>{{ profile.description }}</p>
            <div class="profile-tags">
              <span v-for="tag in profile.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="registration-section">
      <div class="page-container registration-grid">
        <div>
          <span class="section-tag">Cadastre seu interesse</span>
          <h2>Comece sua jornada com o CT Mineral</h2>
          <p>
            Preencha o formulário correspondente ao seu perfil. Seus dados ficarão disponíveis para
            futuras oportunidades compatíveis com sua formação e área de atuação.
          </p>

          <div class="registration-note">
            <span aria-hidden="true">i</span>
            <p>
              O cadastro não garante seleção imediata. Acompanhe também nossos canais de comunicação
              para conhecer novos processos e chamadas.
            </p>
          </div>
        </div>

        <div class="forms-list">
          <FormLinksButtonComponent
            label="Para estudantes"
            description="Formulário de Inscrição para Estudantes"
            link="https://docs.google.com/forms/d/e/1FAIpQLScRmPkwwVnBwjBhJaHQmtwvvzri80OhM1kLwk4iIbSj0jugsw/viewform"
          />
          <FormLinksButtonComponent
            label="Para pesquisadores"
            description="Formulário de Inscrição para Pesquisadores"
            link="https://docs.google.com/forms/d/e/1FAIpQLSflb5Wu7NIxwqe98fPBfOACsFsxBhVFmemRQbAIQ1YWyKIL1A/viewform"
          />
        </div>
      </div>
    </section>

    <section class="opportunities-cta">
      <div class="page-container cta-content">
        <div>
          <span>Outras formas de colaboração</span>
          <h2>Quer desenvolver uma parceria com o Polo de Inovação?</h2>
          <p>
            Fale com nossa equipe para apresentar uma proposta, projeto ou oportunidade de
            cooperação.
          </p>
        </div>
        <RouterLink to="/contato">
          Entrar em contato
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.opportunities-page {
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

.opportunities-hero {
  position: relative;
  padding: 88px 0 76px;
  background:
    radial-gradient(circle at 92% 5%, rgba(14, 84, 74, 0.12), transparent 30%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfa 100%);
}

.opportunities-hero::before {
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
  align-items: center;
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

.opportunities-hero h1 {
  max-width: 820px;
  margin: 0 0 24px;
  font-size: clamp(2.35rem, 4.3vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.06;
}

.opportunities-hero h1 em {
  display: block;
  color: var(--green);
  font-style: normal;
}

.opportunities-hero p {
  max-width: 700px;
  margin: 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.hero-summary {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--line);
  box-shadow: 0 20px 50px rgba(20, 58, 51, 0.1);
  gap: 1px;
}

.hero-summary span {
  display: grid;
  min-height: 78px;
  padding: 14px;
  place-items: center;
  background: rgba(255, 255, 255, 0.9);
  color: var(--green);
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
}

.profiles-section {
  padding: 92px 0;
  background: #ffffff;
}

.section-heading {
  max-width: 720px;
  margin-bottom: 48px;
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

.section-heading h2,
.registration-grid h2 {
  margin: 0 0 14px;
  font-size: clamp(1.9rem, 3.2vw, 2.65rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.section-heading p,
.registration-grid > div > p {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
}

.profiles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--line);
  gap: 1px;
}

.profile-card {
  display: flex;
  min-height: 300px;
  padding: 30px 28px;
  flex-direction: column;
  background: #ffffff;
}

.profile-number {
  margin-bottom: 26px;
  color: var(--orange);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.profile-card h3 {
  margin: 0 0 12px;
  font-size: 1.15rem;
}

.profile-card > p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.7;
}

.profile-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: auto;
  padding-top: 24px;
}

.profile-tags span {
  padding: 6px 9px;
  border-radius: 3px;
  background: var(--green-soft);
  color: var(--green);
  font-size: 0.66rem;
  font-weight: 800;
  text-transform: uppercase;
}

.registration-section {
  padding: 92px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}

.registration-grid {
  display: grid;
  grid-template-columns: minmax(300px, 0.8fr) 1.2fr;
  gap: 80px;
  align-items: start;
}

.registration-note {
  display: flex;
  gap: 12px;
  margin-top: 30px;
  padding: 15px 16px;
  border: 1px solid rgba(230, 81, 0, 0.15);
  border-radius: 5px;
  background: var(--orange-soft);
}

.registration-note > span {
  display: grid;
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  place-items: center;
  background: var(--orange);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 800;
}

.registration-note p {
  margin: 0;
  color: #744526;
  font-size: 0.76rem;
  line-height: 1.55;
}

.forms-list {
  display: grid;
  gap: 16px;
}

.opportunities-cta {
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

@media (max-width: 900px) {
  .hero-grid,
  .registration-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .hero-summary {
    max-width: 560px;
  }

  .profiles-grid {
    grid-template-columns: 1fr;
  }

  .profile-card {
    min-height: auto;
  }
}

@media (max-width: 600px) {
  .page-container {
    width: min(100% - 32px, 1180px);
  }

  .opportunities-hero {
    padding: 52px 0;
  }

  .opportunities-hero::before {
    display: none;
  }

  .opportunities-hero h1 {
    font-size: 2.25rem;
  }

  .profiles-section,
  .registration-section {
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
  .cta-content > a {
    transition: none;
  }
}
</style>
