<script setup lang="ts">
import {
  mdiAccountOutline,
  mdiArrowTopRight,
  mdiHandshakeOutline,
  mdiLockOutline,
  mdiShieldCheckOutline,
} from '@mdi/js'

const formUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScA-G-YaeocBhKJI9IFVBQqbZG6RKYvt6kYS_MzZSaob-sQAQ/viewform'

const principles = [
  {
    icon: mdiLockOutline,
    title: 'Confidencialidade',
    description:
      'Todas as informações serão tratadas com sigilo e utilizadas exclusivamente para análise e apuração da situação relatada.',
  },
  {
    icon: mdiAccountOutline,
    title: 'Anonimato',
    description: 'Você não precisa se identificar. Se preferir, pode permanecer anônimo (a).',
  },
  {
    icon: mdiShieldCheckOutline,
    title: 'Não retaliação',
    description: 'A empresa não admite retaliação contra pessoas que realizem denúncias de boa-fé.',
  },
  {
    icon: mdiHandshakeOutline,
    title: 'Boa-fé',
    description:
      'Utilize este canal de forma responsável. Denúncias falsas podem gerar consequências.',
  },
]
</script>

<template>
  <section class="section whistleblowing-section" aria-labelledby="whistleblowing-title">
    <div class="page-container whistleblowing-layout">
      <div>
        <div class="section-heading">
          <span class="section-tag">Canal de denúncias</span>
          <h2 id="whistleblowing-title">
            Um espaço seguro para relatar o que não deveria acontecer
          </h2>
          <p>
            Este é um espaço seguro e confidencial para relatar situações inadequadas ocorridas no
            ambiente de trabalho do CT Mineral.
          </p>
        </div>

        <ul class="principles">
          <li v-for="principle in principles" :key="principle.title">
            <span class="principle-icon" aria-hidden="true">
              <v-icon :icon="principle.icon" size="22" />
            </span>
            <div>
              <h3>{{ principle.title }}</h3>
              <p>{{ principle.description }}</p>
            </div>
          </li>
        </ul>
      </div>

      <aside class="report-panel">
        <span>Faça sua denúncia</span>
        <h3>Relate com segurança, de forma anônima se preferir.</h3>
        <p>
          O formulário é externo e pode ser preenchido sem identificação. As respostas são usadas
          apenas para análise e apuração.
        </p>
        <a class="button button-light" :href="formUrl" target="_blank" rel="noopener noreferrer">
          Acessar o formulário
          <v-icon :icon="mdiArrowTopRight" size="18" />
        </a>
        <p class="closing">
          Sua colaboração contribui para um ambiente de trabalho mais seguro, ético e respeitoso.
        </p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.whistleblowing-section {
  border-top: 1px solid var(--line);
  background: var(--surface);
}

.whistleblowing-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.75fr);
  gap: 48px;
  align-items: start;
}

.whistleblowing-section .section-heading {
  margin-bottom: 32px;
}

.principles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.principles li {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 14px;
  align-items: start;
  min-height: 100%;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: #ffffff;
}

.principle-icon {
  display: grid;
  width: 44px;
  height: 44px;
  border-radius: 5px;
  place-items: center;
  background: var(--green-soft);
  color: var(--green);
}

.principles h3 {
  margin: 2px 0 8px;
  font-size: 0.98rem;
  line-height: 1.3;
}

.principles p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.65;
}

.report-panel {
  padding: 32px 28px;
  border-radius: 8px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), transparent 42%), var(--green);
  color: #ffffff;
}

.report-panel > span {
  display: block;
  margin-bottom: 12px;
  color: #ffb17f;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.report-panel h3 {
  margin: 0 0 14px;
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.report-panel > p {
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.88rem;
  line-height: 1.65;
}

.report-panel .button {
  width: 100%;
  margin-top: 24px;
}

.button-light {
  background: #ffffff;
  color: var(--green);
}

.button-light:hover {
  background: var(--orange-soft);
}

.report-panel .closing {
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.82rem;
}

@media (max-width: 960px) {
  .whistleblowing-layout,
  .principles {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .principles li {
    grid-template-columns: 40px 1fr;
    padding: 16px;
  }

  .report-panel .button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .button-light {
    transition: none;
  }
}
</style>
