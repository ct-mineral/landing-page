<script setup lang="ts">
const services = [
  {
    number: '01',
    title: 'Cominuição de amostras',
    description:
      'Britagem e moagem em escala de bancada para preparar o minério para as próximas etapas de análise.',
    link: '/servicos/cominuicao-de-amostras',
  },
  {
    number: '02',
    title: 'Preparação de amostras',
    description:
      'Recebimento, secagem, homogeneização e quarteamento com rastreabilidade e controle de qualidade.',
    link: '/servicos/preparacao-de-amostras',
  },
  {
    number: '03',
    title: 'Análise mineral',
    description:
      'Caracterização físico-química, granulométrica, estrutural e microestrutural de materiais minerais.',
    link: '/servicos/analise-mineral',
  },
  {
    number: '04',
    title: 'Classificação granulométrica',
    description:
      'Determinação da distribuição do tamanho de partículas por peneiramento a seco ou via úmida.',
    link: '/servicos/classificacao-e-concentracao-mineral',
  },
  {
    number: '05',
    title: 'Concentração mineral',
    description:
      'Ensaios de separação magnética, eletrostática, gravítica e flotação para rotas de beneficiamento.',
    link: '/servicos/classificacao-e-concentracao-mineral',
  },
  {
    number: '06',
    title: 'Testes físicos e planta piloto',
    description:
      'Validação de processos em escala laboratorial e piloto antes do investimento industrial.',
    link: '/servicos/classificacao-e-concentracao-mineral',
  },
]
</script>

<template>
  <section id="servicos" class="section">
    <div class="page-container">
      <div class="section-heading">
        <span class="section-tag">O que oferecemos</span>
        <h2>Serviços tecnológicos para toda a cadeia mineral</h2>
        <p>
          Da amostra bruta à validação de uma rota de beneficiamento, entregamos suporte
          técnico para pesquisa, desenvolvimento e inovação.
        </p>
      </div>

      <div class="services-grid">
        <RouterLink
          v-for="service in services"
          :key="service.number"
          :to="service.link"
          class="service-card"
        >
          <span class="card-number">{{ service.number }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <span class="card-link">Ver detalhes <span aria-hidden="true">→</span></span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--line);
  gap: 1px;
}

.service-card {
  display: flex;
  min-height: 280px;
  padding: 30px 28px;
  flex-direction: column;
  background: #ffffff;
  color: var(--ink);
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.service-card:hover {
  z-index: 1;
  background: var(--green-soft);
}

.card-number {
  margin-bottom: 24px;
  color: var(--orange);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.service-card h3 {
  margin: 0 0 11px;
  font-size: 1.08rem;
  line-height: 1.35;
}

.service-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.65;
}

.card-link {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: auto;
  padding-top: 20px;
  color: var(--green);
  font-size: 0.8rem;
  font-weight: 800;
}

@media (max-width: 960px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    min-height: 255px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card {
    transition: none;
  }
}
</style>
