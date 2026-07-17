<script setup lang="ts">
const credentials = [
  { title: 'Unidade EMBRAPII', text: 'credenciada em Tecnologias em Mineração' },
  { title: 'Associado IBRAM', text: 'Instituto Brasileiro de Mineração' },
  { title: 'Rede de pesquisa', text: 'UFRN · UFERSA · UERN · FUNCERN' },
  { title: 'No coração do Seridó', text: 'Currais Novos, Rio Grande do Norte' },
]
</script>

<template>
  <section class="credentials" aria-label="Credenciais institucionais">
    <div class="page-container credentials-grid">
      <div v-for="credential in credentials" :key="credential.title" class="credential">
        <span class="credential-mark" aria-hidden="true"></span>
        <p><strong>{{ credential.title }}</strong> {{ credential.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.credentials {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: #ffffff;
}

.credentials-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.credential {
  display: flex;
  gap: 11px;
  align-items: flex-start;
  padding: 25px 22px;
  border-right: 1px solid var(--line);
}

.credential:first-child {
  padding-left: 0;
}

.credential:last-child {
  border-right: 0;
}

.credential-mark {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  margin-top: 6px;
  border-radius: 2px;
  background: var(--orange);
}

.credential p {
  margin: 0;
  color: var(--muted);
  font-size: 0.76rem;
  line-height: 1.55;
}

.credential strong {
  color: var(--ink);
}

@media (max-width: 960px) {
  .credentials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .credential:nth-child(2) {
    border-right: 0;
  }

  .credential:nth-child(-n + 2) {
    border-bottom: 1px solid var(--line);
  }

  .credential:first-child,
  .credential:nth-child(3) {
    padding-left: 22px;
  }
}

@media (max-width: 600px) {
  .credentials-grid {
    grid-template-columns: 1fr;
  }

  .credential {
    padding-left: 0;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .credential:first-child,
  .credential:nth-child(3) {
    padding-left: 0;
  }

  .credential:last-child {
    border-bottom: 0;
  }
}
</style>
