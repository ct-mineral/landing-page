<script setup lang="ts">
import {
  mdiAccountGroupOutline,
  mdiFlashOutline,
  mdiFlaskOutline,
  mdiShieldOutline,
  mdiTrophyOutline,
} from '@mdi/js'

const advantages = [
  {
    icon: mdiFlashOutline,
    title: 'Agilidade na contratação',
    description: 'Sem editais, negociação direta e processos simplificados',
  },
  {
    icon: mdiShieldOutline,
    title: 'Risco tecnológico compartilhado',
    description: 'EMBRAPII financia 32,5% do projeto',
  },
  {
    icon: mdiTrophyOutline,
    title: 'Expertise comprovada',
    description: '1º Polo EMBRAPII em mineração do Brasil',
  },
  {
    icon: mdiFlaskOutline,
    title: 'Infraestrutura de ponta',
    description: 'Laboratórios e planta piloto em 1.600 m²',
  },
  {
    icon: mdiAccountGroupOutline,
    title: 'Parcerias estratégicas',
    description: 'Projetos com Borborema, Fortescue, IMC Rare e outras',
  },
]
</script>

<template>
  <section class="section advantages-section">
    <div class="page-container">
      <div class="section-heading">
        <span class="section-tag">Vantagens</span>
        <h2>Por que inovar com a Unidade EMBRAPII?</h2>
        <p>
          Contratação direta, risco compartilhado e estrutura especializada para transformar
          desafios da mineração em projetos de pesquisa e inovação.
        </p>
      </div>

      <div class="advantages-grid">
        <article v-for="advantage in advantages" :key="advantage.title" class="advantage-card">
          <span class="advantage-icon" aria-hidden="true">
            <v-icon :icon="advantage.icon" size="22" />
          </span>
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages-section {
  background: var(--surface);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.advantage-card {
  grid-column: span 2;
  min-height: 215px;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0 12px 35px rgba(25, 64, 57, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.advantage-card:nth-child(4) {
  grid-column: 2 / span 2;
}

.advantage-card:nth-child(5) {
  grid-column: 4 / span 2;
}

.advantage-card:hover {
  border-color: rgba(14, 84, 74, 0.3);
  box-shadow: 0 16px 40px rgba(25, 64, 57, 0.1);
  transform: translateY(-2px);
}

.advantage-icon {
  display: grid;
  width: 44px;
  height: 44px;
  margin-bottom: 22px;
  border: 2px solid var(--green);
  border-radius: 6px;
  place-items: center;
  color: var(--green);
}

.advantage-card h3 {
  margin: 0 0 11px;
  font-size: 1.08rem;
  line-height: 1.35;
}

.advantage-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.65;
}

@media (max-width: 960px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .advantage-card,
  .advantage-card:nth-child(4),
  .advantage-card:nth-child(5) {
    grid-column: auto;
    min-height: auto;
  }
}

@media (max-width: 600px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .advantage-card {
    transition: none;
  }
}
</style>
