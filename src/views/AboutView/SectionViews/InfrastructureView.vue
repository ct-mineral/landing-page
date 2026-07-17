<script setup lang="ts">
const structures = [
  {
    number: '01',
    area: '800 m²',
    title: 'Prédio Principal',
    description:
      'Administração, espaços para empresas parceiras, salas técnicas e laboratórios de hidrometalurgia, flotação e análises minerais.',
  },
  {
    number: '02',
    area: '300 m²',
    title: 'Centro de Gemologia e Lapidação',
    description:
      'Caracterização gemológica, lapidação mineral, capacitação técnica e agregação de valor a minerais e gemas.',
  },
  {
    number: '03',
    area: '500 m²',
    title: 'Galpão de Processamento Mineral',
    description:
      'Britagem, moagem, classificação, concentração mineral e áreas para projetos e ensaios em escala piloto.',
  },
]
</script>

<template>
  <section class="content-section infrastructure-section">
    <div class="page-container">
      <div class="section-heading">
        <span class="section-tag">Infraestrutura</span>
        <h2>Estruturas integradas para pesquisa e processamento</h2>
        <p>
          Ambientes especializados que permitem acompanhar projetos desde a caracterização até a
          validação em escala piloto.
        </p>
      </div>

      <div class="structures-grid">
        <article v-for="structure in structures" :key="structure.number" class="structure-card">
          <div class="card-topline">
            <span>{{ structure.number }}</span>
            <strong>{{ structure.area }}</strong>
          </div>
          <h3>{{ structure.title }}</h3>
          <p>{{ structure.description }}</p>
        </article>
      </div>

      <div class="equipment-panel">
        <div>
          <span class="section-tag">Capacidade tecnológica</span>
          <h3>Equipamentos para os desafios da mineração moderna</h3>
        </div>
        <div class="prose">
          <p>
          Entre os principais equipamentos instalados no CT Mineral destacam-se sistemas de britagem
          e moagem, peneiramento granulométrico, hidrociclonagem, equipamentos de concentração
          mineral, Mini Planta Piloto de Flotação (MPP), granulômetro a laser, espectrômetro de
          fluorescência de raios X (EDXRF), além de outras tecnologias voltadas à caracterização e
          ao beneficiamento mineral.
        </p>
          <p>
          A infraestrutura instalada permite ao Centro atender demandas industriais, desenvolver
          soluções tecnológicas inovadoras e executar projetos de PD&I voltados aos minerais
          estratégicos e aos desafios da mineração moderna, consolidando o CT Mineral como uma das
          principais estruturas tecnológicas de mineração da região Nordeste.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.structures-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--line);
  gap: 1px;
}

.structure-card {
  min-height: 285px;
  padding: 30px 28px;
  background: #ffffff;
}

.card-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
}

.card-topline span {
  color: var(--orange);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.card-topline strong {
  padding: 6px 9px;
  border-radius: 3px;
  background: var(--green-soft);
  color: var(--green);
  font-size: 0.74rem;
}

.structure-card h3 {
  margin: 0 0 12px;
  font-size: 1.08rem;
  line-height: 1.35;
}

.structure-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.65;
}

.equipment-panel {
  display: grid;
  grid-template-columns: minmax(280px, 0.75fr) 1.25fr;
  gap: 70px;
  margin-top: 24px;
  padding: 42px;
  border-radius: 7px;
  background: var(--green-soft);
}

.equipment-panel h3 {
  margin: 0;
  font-size: clamp(1.45rem, 2.4vw, 2rem);
  line-height: 1.25;
}

@media (max-width: 960px) {
  .structures-grid {
    grid-template-columns: 1fr;
  }

  .structure-card {
    min-height: auto;
  }

  .equipment-panel {
    grid-template-columns: 1fr;
    gap: 26px;
  }
}

@media (max-width: 600px) {
  .equipment-panel {
    padding: 28px 24px;
  }
}
</style>
