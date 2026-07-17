<script setup lang="ts">
import { computed, ref } from 'vue'
import CardProjectsComponent from '@/components/CardProjectsComponent.vue'

const projects = [
  {
    id: 1,
    name: 'Borborema Recursos Estratégicos',
    description:
      'Desenvolvimento de uma nova rota de processo para o beneficiamento dos minerais portadores de terras raras em argilas iônicas.',
    image: '/images/projects/terras_raras_argilas_ionicas.avif',
    location: 'Jaguaquara, BA',
  },
  {
    id: 2,
    name: 'Kit Máquinas LTDA.',
    description:
      'Projeto executivo de sonda rotativa diamantada (com wire line) modular e portátil.',
    image: '/images/projects/sonda_rotativa.avif',
    location: 'Pedro Leopoldo, MG',
  },
  {
    id: 3,
    name: 'Mineração Tomaz Salustino S/A',
    description:
      'Recuperação de scheelita através da aplicação de novas tecnologias nos resíduos finos provenientes do beneficiamento mineral.',
    image: '/images/projects/recuperacao_scheelita.avif',
    location: 'Currais Novos, RN',
  },
  {
    id: 4,
    name: 'IMC Rare Earths LTD',
    description:
      'Desenvolvimento de rota hidrometalúrgica para produção de carbonato de terras raras.',
    image: '/images/projects/terras_raras_carbonato.avif',
    location: 'São Paulo, SP',
  },
  {
    id: 5,
    name: 'Fortescue do Brasil',
    description: 'Processo inovador de extração e recuperação de elementos terras raras.',
    image: '/images/projects/extracao_terras_raras.avif',
    location: 'Ceará, CE',
  },
  {
    id: 6,
    name: 'REX Soluções para Mineração',
    description:
      'Aperfeiçoamento do controle e de manejo de explosivos por meio dos detonadores T-REX e T-REX Remote.',
    image: '/images/projects/detonadores_trex.avif',
    location: 'Pernambuco, PE',
  },
]

const currentPage = ref(1)
const itemsPerPage = 15

const totalPages = computed(() => {
  return Math.ceil(projects.length / itemsPerPage)
})

const paginatedProjects = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return projects.slice(startIndex, endIndex)
})
</script>

<template>
  <main class="projects-page">
    <section class="projects-hero">
      <div class="page-container hero-grid">
        <div>
          <span class="eyebrow">
            <span class="status-dot" aria-hidden="true"></span>
            Pesquisa, desenvolvimento e inovação
          </span>
          <h1>Projetos que transformam conhecimento em <em>soluções para a indústria.</em></h1>
          <p>
            Parcerias de PD&I voltadas a minerais estratégicos, novos processos e tecnologias para
            tornar a mineração mais eficiente e sustentável.
          </p>
        </div>

        <div class="hero-summary" aria-label="Indicadores dos projetos">
          <div>
            <strong>{{ projects.length }}</strong>
            <span>Projetos apresentados</span>
          </div>
          <div>
            <strong>6</strong>
            <span>Empresas parceiras</span>
          </div>
          <div>
            <strong>PD&I</strong>
            <span>Soluções aplicadas</span>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-content">
      <div class="page-container">
        <div class="section-heading">
          <span class="section-tag">Portfólio de projetos</span>
          <h2>Inovação construída em parceria</h2>
          <p>
            Conheça iniciativas desenvolvidas ou em desenvolvimento pelo Centro de Tecnologia
            Mineral do IFRN em colaboração com empresas do setor.
          </p>
        </div>

        <aside class="confidentiality-note">
          <span aria-hidden="true">i</span>
          <p>
            Por motivos de confidencialidade, alguns detalhes técnicos não podem ser divulgados.
            Parte das imagens utilizadas é meramente ilustrativa e foi gerada com inteligência
            artificial.
          </p>
        </aside>

        <div class="projects-grid">
          <CardProjectsComponent
            v-for="(project, index) in paginatedProjects"
            :key="project.id"
            :project-number="
              String((currentPage - 1) * itemsPerPage + index + 1).padStart(2, '0')
            "
            :name-companie="project.name"
            :description-project="project.description"
            :image-project="project.image"
            :location-companie="project.location"
          />
        </div>

        <div v-if="totalPages > 1" class="pagination">
          <v-pagination
            v-model="currentPage"
            :length="totalPages"
            color="teal-darken-3"
            rounded="circle"
          />
        </div>
      </div>
    </section>

    <section class="projects-cta">
      <div class="page-container cta-content">
        <div>
          <span>Parcerias em PD&I</span>
          <h2>Tem um desafio tecnológico para o setor mineral?</h2>
          <p>
            Nossa equipe pode estruturar um projeto de pesquisa e inovação alinhado às necessidades
            da sua empresa.
          </p>
        </div>
        <RouterLink to="/contato">
          Desenvolver um projeto
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.projects-page {
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

.projects-hero {
  position: relative;
  padding: 88px 0 76px;
  background:
    radial-gradient(circle at 92% 5%, rgba(14, 84, 74, 0.12), transparent 30%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfa 100%);
}

.projects-hero::before {
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

.projects-hero h1 {
  max-width: 820px;
  margin: 0 0 24px;
  font-size: clamp(2.35rem, 4.3vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.06;
}

.projects-hero h1 em {
  display: block;
  color: var(--green);
  font-style: normal;
}

.projects-hero p {
  max-width: 720px;
  margin: 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.hero-summary {
  display: grid;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 20px 50px rgba(20, 58, 51, 0.1);
  backdrop-filter: blur(8px);
}

.hero-summary div {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 18px;
  align-items: center;
  min-height: 88px;
  padding: 16px 24px;
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
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.4;
  text-transform: uppercase;
}

.projects-content {
  padding: 92px 0;
  background: #ffffff;
}

.section-heading {
  max-width: 720px;
  margin-bottom: 34px;
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

.confidentiality-note {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  max-width: 860px;
  margin-bottom: 44px;
  padding: 16px 18px;
  border: 1px solid rgba(230, 81, 0, 0.16);
  border-radius: 5px;
  background: var(--orange-soft);
}

.confidentiality-note > span {
  display: grid;
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  place-items: center;
  background: var(--orange);
  color: #ffffff;
  font-size: 0.76rem;
  font-weight: 800;
}

.confidentiality-note p {
  margin: 1px 0 0;
  color: #744526;
  font-size: 0.8rem;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 42px;
}

.projects-cta {
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

@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .hero-summary {
    max-width: 560px;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .page-container {
    width: min(100% - 32px, 1180px);
  }

  .projects-hero {
    padding: 52px 0;
  }

  .projects-hero::before {
    display: none;
  }

  .projects-hero h1 {
    font-size: 2.25rem;
  }

  .hero-summary div {
    grid-template-columns: 70px 1fr;
    padding: 15px 18px;
  }

  .projects-content {
    padding: 68px 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
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
