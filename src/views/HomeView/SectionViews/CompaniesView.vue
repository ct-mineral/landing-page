<script setup lang="ts">
const institutionalPartners = [
  'IFRN',
  'EMBRAPII',
  'IBRAM',
  'UFRN',
  'UFERSA',
  'UERN',
  'FUNCERN',
  'FAPERN',
]

const companies = [
  { nome: 'Borborema', logo: '/images/logos/empresas/borborema.svg' },
  { nome: 'Fortescue', logo: '/images/logos/empresas/fortescue.svg' },
  { nome: 'IMC Rare', logo: '/images/logos/empresas/imc_rare.svg' },
  { nome: 'KIT Máquinas', logo: '/images/logos/empresas/kit_maquinas.svg' },
  { nome: 'REX', logo: '/images/logos/empresas/rex.svg' },
]
</script>

<template>
  <section class="companies-section">
    <div class="page-container">
      <div class="section-heading">
        <span class="section-tag">Empresas parceiras</span>
        <h2>Quem confia no nosso trabalho</h2>
        <p>
          Organizações que desenvolveram projetos e soluções tecnológicas junto ao CT Mineral.
        </p>
      </div>

      <div class="companies-grid" aria-label="Logos das empresas parceiras">
        <article v-for="company in companies" :key="company.nome" class="company-card">
          <img
            :src="company.logo"
            :alt="`Logo da empresa ${company.nome}`"
            loading="lazy"
            decoding="async"
          />
        </article>
      </div>

      <div class="network-block">
        <div>
          <span class="section-tag">Rede institucional</span>
          <h3>Conhecimento construído em parceria</h3>
        </div>
        <div class="partners" aria-label="Instituições parceiras">
          <span v-for="partner in institutionalPartners" :key="partner">{{ partner }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.companies-section {
  padding: 92px 0;
  border-top: 1px solid var(--line);
  background: #ffffff;
}

.companies-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
  margin-bottom: 56px;
}

.company-card {
  display: grid;
  min-height: 130px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 7px;
  place-items: center;
  background: var(--surface);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.company-card:hover {
  border-color: rgba(14, 84, 74, 0.3);
  box-shadow: 0 16px 40px rgba(25, 64, 57, 0.1);
  transform: translateY(-2px);
}

.company-card img {
  max-width: 160px;
  max-height: 64px;
  width: 100%;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.65);
  transition:
    filter 0.25s ease,
    transform 0.25s ease;
}

.company-card:hover img {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.04);
}

.network-block {
  display: grid;
  grid-template-columns: minmax(260px, 0.75fr) 1.25fr;
  gap: 60px;
  align-items: center;
  padding: 34px;
  border: 1px solid rgba(230, 81, 0, 0.16);
  border-radius: 7px;
  background: var(--orange-soft);
}

.network-block h3 {
  margin: 0;
  font-size: clamp(1.4rem, 2.4vw, 1.9rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
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
  .companies-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .network-block {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 600px) {
  .companies-section {
    padding: 68px 0;
  }

  .companies-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .company-card {
    min-height: 110px;
    padding: 18px;
  }

  .network-block {
    padding: 24px 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .company-card,
  .company-card img {
    transition: none;
  }
}
</style>
