<script setup lang="ts">
const laboratories = [
  {
    tag: 'LABCOM',
    title: 'Laboratório de Cominuição Mineral',
    description:
      'Estrutura dedicada à britagem, moagem e preparação do minério para diferentes rotas de ensaio.',
  },
  {
    tag: 'LABAM',
    title: 'Laboratório de Análises Minerais',
    description:
      'Caracterização mineral e de materiais por análises físicas, químicas e microestruturais.',
  },
  {
    tag: 'PLANTA PILOTO',
    title: 'Processamento mineral',
    description:
      'Simulação operacional para validar fluxogramas e reduzir riscos antes da implantação industrial.',
  },
]
</script>

<template>
  <section class="section">
    <div class="page-container">
      <div class="section-heading">
        <span class="section-tag">Infraestrutura</span>
        <h2>Laboratórios e planta piloto integrados</h2>
        <p>
          Estrutura própria dividida por especialidade para acompanhar diferentes etapas do
          processamento mineral.
        </p>
      </div>

      <div class="labs-grid">
        <article v-for="laboratory in laboratories" :key="laboratory.tag" class="lab-card">
          <span>{{ laboratory.tag }}</span>
          <h3>{{ laboratory.title }}</h3>
          <p>{{ laboratory.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.labs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.lab-card {
  min-height: 215px;
  padding: 28px;
  border: 1px solid var(--line);
  border-top: 4px solid var(--green);
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0 12px 35px rgba(25, 64, 57, 0.06);
}

.lab-card > span {
  display: block;
  margin-bottom: 22px;
  color: var(--green);
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.lab-card h3 {
  margin: 0 0 11px;
  font-size: 1.08rem;
  line-height: 1.35;
}

.lab-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.65;
}

@media (max-width: 960px) {
  .labs-grid {
    grid-template-columns: 1fr;
  }

  .lab-card {
    min-height: auto;
  }
}
</style>
