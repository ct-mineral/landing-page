<script setup lang="ts"></script>

<template>
  <section class="cta-section">
    <div class="page-container cta-content">
      <div>
        <span class="section-tag section-tag-light">Fale com nossa equipe</span>
        <h2>Encontre a solução técnica para a sua operação.</h2>
        <p>
          Conte o seu desafio e receba orientação sobre os ensaios e serviços mais adequados
          para o seu projeto.
        </p>
      </div>
      <RouterLink class="button button-light" to="/contato">
        Ir para contato
        <span aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 72px 0;
  background:
    linear-gradient(100deg, rgba(255, 255, 255, 0.04), transparent 45%),
    var(--green);
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

.cta-content h2 {
  max-width: 640px;
  margin: 0 0 14px;
  font-size: clamp(1.9rem, 3.2vw, 2.65rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.cta-content p {
  max-width: 680px;
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 1rem;
  line-height: 1.7;
}

.section-tag-light {
  color: #ffb17f;
}

.button-light {
  flex: 0 0 auto;
  background: #ffffff;
  color: var(--green);
}

.button-light:hover {
  background: var(--orange-soft);
}

@media (max-width: 600px) {
  .cta-content {
    align-items: flex-start;
    flex-direction: column;
    gap: 28px;
  }

  .button-light {
    width: 100%;
  }
}
</style>
