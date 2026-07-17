<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="page-container hero-grid">
      <div class="hero-content">
        <span class="eyebrow">
          <span class="status-dot"></span>
          Unidade EMBRAPII em Tecnologias em Mineração
        </span>

        <h1>
          Sua amostra mineral, transformada em
          <em>dado técnico validado.</em>
        </h1>

        <p class="hero-lead">
          O CT Mineral do IFRN caracteriza, beneficia e testa minérios em escala
          laboratorial e piloto — do ensaio de bancada ao resultado que sustenta
          decisões de investimento.
        </p>

        <div class="hero-actions">
          <RouterLink class="button button-primary" to="/contato">
            Solicitar uma visita
            <span aria-hidden="true">→</span>
          </RouterLink>
          <a class="button button-secondary" href="/sobre">Conhecer o CT Mineral</a>
        </div>

        <div class="hero-stats" aria-label="Números do CT Mineral">
          <div>
            <strong>800 m²</strong>
            <span>de estrutura laboratorial</span>
          </div>
          <div>
            <strong>5+ anos</strong>
            <span>de operação contínua</span>
          </div>
          <div>
            <strong>3</strong>
            <span>ambientes especializados</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="image-frame">
          <img
            src="/images/structure/ct-mineral.avif"
            alt="Estrutura do Centro de Tecnologia Mineral do IFRN"
            fetchpriority="high"
          />
          <div class="image-caption">
            <span>CT MINERAL · IFRN</span>
            <strong>Currais Novos / RN</strong>
          </div>
        </div>
        <div class="visual-badge">
          <strong>1º</strong>
          <span>Polo EMBRAPII em mineração do Brasil</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 88px 0 72px;
  background:
    radial-gradient(circle at 92% 5%, rgba(14, 84, 74, 0.12), transparent 30%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfa 100%);
}

.hero::before {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(14, 84, 74, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.28;
  content: '';
  pointer-events: none;
  mask-image: linear-gradient(to right, black, transparent 52%);
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.92fr);
  gap: 72px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  gap: 9px;
  align-items: center;
  margin-bottom: 24px;
  padding: 7px 12px;
  border: 1px solid rgba(14, 84, 74, 0.24);
  border-radius: 4px;
  background: var(--green-soft);
  color: var(--green);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.055em;
  text-transform: uppercase;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 4px rgba(14, 84, 74, 0.1);
}

.hero h1 {
  max-width: 690px;
  margin: 0 0 24px;
  font-size: clamp(2.35rem, 4.3vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.06;
}

.hero h1 em {
  display: block;
  color: var(--green);
  font-style: normal;
}

.hero-lead {
  max-width: 650px;
  margin: 0 0 32px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 42px;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 22px 34px;
}

.hero-stats div {
  max-width: 145px;
}

.hero-stats strong,
.hero-stats span {
  display: block;
}

.hero-stats strong {
  margin-bottom: 3px;
  color: var(--ink);
  font-size: 1.45rem;
  line-height: 1.2;
}

.hero-stats span {
  color: #788581;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.35;
  text-transform: uppercase;
}

.hero-visual {
  position: relative;
}

.image-frame {
  position: relative;
  overflow: hidden;
  min-height: 480px;
  border: 1px solid rgba(14, 84, 74, 0.15);
  border-radius: 8px;
  background: var(--green-soft);
  box-shadow: 0 28px 70px rgba(20, 58, 51, 0.15);
}

.image-frame::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(8, 41, 35, 0.78) 100%);
  content: '';
}

.image-frame img {
  width: 100%;
  height: 480px;
  object-fit: cover;
}

.image-caption {
  position: absolute;
  z-index: 1;
  right: 24px;
  bottom: 22px;
  left: 24px;
  color: #ffffff;
}

.image-caption span,
.image-caption strong {
  display: block;
}

.image-caption span {
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.image-caption strong {
  font-size: 1.15rem;
}

.visual-badge {
  position: absolute;
  right: -24px;
  bottom: 42px;
  z-index: 2;
  display: flex;
  gap: 12px;
  align-items: center;
  max-width: 235px;
  padding: 16px 18px;
  border-radius: 5px;
  background: var(--orange);
  color: #ffffff;
  box-shadow: 0 14px 30px rgba(139, 59, 15, 0.24);
}

.visual-badge strong {
  font-size: 1.8rem;
  line-height: 1;
}

.visual-badge span {
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.35;
  text-transform: uppercase;
}

@media (max-width: 960px) {
  .hero {
    padding-top: 68px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .hero-visual {
    max-width: 680px;
  }

  .visual-badge {
    right: 20px;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 52px 0;
  }

  .hero::before {
    display: none;
  }

  .hero h1 {
    font-size: 2.25rem;
  }

  .eyebrow {
    align-items: flex-start;
    line-height: 1.4;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions .button {
    width: 100%;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .image-frame,
  .image-frame img {
    height: 360px;
    min-height: 360px;
  }

  .visual-badge {
    right: 12px;
    bottom: 22px;
    max-width: 215px;
  }
}
</style>
