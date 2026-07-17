<script setup lang="ts">
const partners = ['IFRN', 'EMBRAPII', 'IBRAM', 'UFRN', 'UFERSA', 'UERN', 'FUNCERN', 'FAPERN']
</script>

<template>
  <section class="network-section">
    <div class="page-container network-content">
      <div>
        <span class="section-tag">Rede institucional</span>
        <h2>Conhecimento construído em parceria</h2>
      </div>
      <div class="partners" aria-label="Instituições parceiras">
        <span v-for="partner in partners" :key="partner">{{ partner }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.network-section {
  padding: 54px 0;
  border-top: 1px solid var(--line);
  background: var(--orange-soft);
}

.network-content {
  display: grid;
  grid-template-columns: minmax(260px, 0.75fr) 1.25fr;
  gap: 70px;
  align-items: center;
}

.network-content h2 {
  margin: 0;
  font-size: clamp(1.65rem, 2.6vw, 2.15rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.partners {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.partners span {
  padding: 10px 16px;
  border: 1px solid rgba(230, 81, 0, 0.18);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.65);
  color: #773611;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

@media (max-width: 960px) {
  .network-content {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
