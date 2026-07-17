<script setup lang="ts">
const processSteps = [
  {
    number: '1',
    title: 'Definição da demanda',
    description: 'Nossa equipe entende o objetivo, o material e os resultados esperados.',
  },
  {
    number: '2',
    title: 'Preparação',
    description: 'A amostra é recebida e preparada conforme os requisitos de cada ensaio.',
  },
  {
    number: '3',
    title: 'Ensaios técnicos',
    description: 'Os testes são executados em laboratório ou em nossa planta piloto.',
  },
  {
    number: '4',
    title: 'Resultado validado',
    description: 'Você recebe os resultados e a orientação técnica para a próxima decisão.',
  },
]
</script>

<template>
  <section class="section process-section">
    <div class="page-container">
      <div class="section-heading">
        <span class="section-tag">Como funciona</span>
        <h2>Da demanda ao resultado técnico</h2>
        <p>Um fluxo direto para transformar desafios da indústria em respostas confiáveis.</p>
      </div>

      <ol class="process-list">
        <li v-for="step in processSteps" :key="step.number" class="process-step">
          <span class="step-number">{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.process-section {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}

.process-list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
}

.process-list::before {
  position: absolute;
  top: 22px;
  right: 10%;
  left: 5%;
  height: 1px;
  background: #b9cac5;
  content: '';
}

.process-step {
  position: relative;
  z-index: 1;
  padding-right: 30px;
}

.step-number {
  display: grid;
  width: 44px;
  height: 44px;
  margin-bottom: 22px;
  border: 2px solid var(--green);
  border-radius: 50%;
  place-items: center;
  background: var(--surface);
  color: var(--green);
  font-size: 0.82rem;
  font-weight: 800;
}

.process-step h3 {
  margin: 0 0 11px;
  font-size: 1.08rem;
  line-height: 1.35;
}

.process-step p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.65;
}

@media (max-width: 960px) {
  .process-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px 20px;
  }

  .process-list::before {
    display: none;
  }
}

@media (max-width: 600px) {
  .process-list {
    grid-template-columns: 1fr;
  }

  .process-step {
    padding-right: 0;
  }
}
</style>
