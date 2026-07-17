<script setup lang="ts">
const activities = [
  'Serviços tecnológicos',
  'Ensaios laboratoriais',
  'Consultorias técnicas',
  'Rotas tecnológicas',
  'Capacitação profissional',
  'Apoio à inovação industrial',
  'Formação de especialistas',
]
</script>

<template>
  <section class="impact-section">
    <div class="page-container">
      <div class="impact-grid">
        <div>
          <span class="section-tag">Atuação e impacto</span>
          <h2>Ciência, tecnologia e indústria trabalhando juntas</h2>
        </div>

        <div class="impact-copy">
          <p>
          O CT Mineral atua diretamente no desenvolvimento de soluções tecnológicas para a indústria
          mineral de todo o País, promovendo inovação, sustentabilidade e aumento da competitividade
          do setor.
        </p>
          <p>
          Nos últimos anos, o IFRN, por meio do CT Mineral, consolidou-se como uma importante
          instituição de pesquisa aplicada na área mineral, alinhada às diretrizes estratégicas do
          Plano Nacional de Mineração 2030 (PNM 2030) e às políticas públicas voltadas ao
          desenvolvimento sustentável da mineração brasileira.
        </p>
          <p>
          Com foco em minerais estratégicos, minerais críticos e tecnologias inovadoras para o setor
          mineral, o Centro segue fortalecendo sua missão de conectar ciência, tecnologia e
          indústria, contribuindo para o desenvolvimento econômico e tecnológico do país.
          </p>
        </div>
      </div>

      <div class="activities" aria-label="Áreas de atuação do CT Mineral">
        <span v-for="activity in activities" :key="activity">
          <i aria-hidden="true">✓</i>
          {{ activity }}
        </span>
      </div>

      <div class="contact-cta">
        <div>
          <span class="cta-tag">Desenvolva seu projeto conosco</span>
          <h3>Transforme um desafio da sua operação em uma solução tecnológica.</h3>
        </div>
        <RouterLink to="/contato">
          Falar com nossa equipe
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.impact-section {
  padding: 92px 0;
  background: var(--green);
  color: #ffffff;
}

.impact-grid {
  display: grid;
  grid-template-columns: minmax(300px, 0.8fr) 1.2fr;
  gap: 80px;
}

.impact-grid .section-tag {
  color: #ffb17f;
}

.impact-grid h2 {
  margin: 0;
  font-size: clamp(1.9rem, 3.2vw, 2.65rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.impact-copy p {
  margin: 0 0 18px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.98rem;
  line-height: 1.8;
}

.impact-copy p:last-child {
  margin-bottom: 0;
}

.activities {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 54px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 7px;
  overflow: hidden;
}

.activities > span {
  display: flex;
  gap: 10px;
  align-items: center;
  min-height: 76px;
  padding: 15px 18px;
  border-right: 1px solid rgba(255, 255, 255, 0.14);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.8rem;
  font-weight: 700;
}

.activities i {
  display: grid;
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  place-items: center;
  background: rgba(255, 255, 255, 0.12);
  color: #ffb17f;
  font-size: 0.7rem;
  font-style: normal;
}

.contact-cta {
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
  margin-top: 54px;
  padding-top: 48px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.cta-tag {
  display: block;
  margin-bottom: 9px;
  color: #ffb17f;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-cta h3 {
  max-width: 700px;
  margin: 0;
  font-size: clamp(1.35rem, 2.5vw, 2rem);
  line-height: 1.25;
}

.contact-cta a {
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  align-items: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 5px;
  background: #ffffff;
  color: var(--green);
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.contact-cta a:hover {
  transform: translateY(-2px);
}

@media (max-width: 960px) {
  .impact-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .activities {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .impact-section {
    padding: 68px 0;
  }

  .activities {
    grid-template-columns: 1fr;
  }

  .contact-cta {
    align-items: flex-start;
    flex-direction: column;
    gap: 28px;
  }

  .contact-cta a {
    width: 100%;
    justify-content: center;
  }
}
</style>
