<template>
  <section class="about-hero">
    <div class="page-container hero-grid">
      <div>
        <span class="eyebrow">
          <span class="status-dot" aria-hidden="true"></span>
          Polo de Inovação do IFRN
        </span>
        <h1>Tecnologia mineral que conecta <em>ciência e indústria.</em></h1>
        <p class="hero-lead">
          O Centro de Tecnologia Mineral é referência nacional em pesquisa aplicada,
          desenvolvimento tecnológico, inovação e serviços especializados para o setor mineral.
        </p>

        <div class="hero-highlights">
          <div>
            <strong>2022</strong>
            <span>Credenciamento EMBRAPII</span>
          </div>
          <div>
            <strong>PD&I</strong>
            <span>Pesquisa aplicada à indústria</span>
          </div>
          <div>
            <strong>Seridó</strong>
            <span>Currais Novos / RN</span>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <img
          src="/images/structure/ct-mineral.avif"
          alt="Estrutura do Centro de Tecnologia Mineral"
          fetchpriority="high"
        />
        <div class="image-label">
          <span>Unidade EMBRAPII</span>
          <strong>Tecnologias em Mineração</strong>
        </div>
      </div>
    </div>

    <div class="page-container overview">
      <div class="overview-title">
        <span class="section-tag">Quem somos</span>
        <h2>Inovação para os desafios da mineração brasileira</h2>
      </div>
      <div class="prose">
        <p>
          Localizado em Currais Novos/RN, no Seridó Potiguar, o Centro atua no fortalecimento da
          cadeia produtiva mineral brasileira, com foco em minerais estratégicos, geometalurgia,
          beneficiamento mineral e tecnologias inovadoras aplicadas à mineração.
        </p>
        <p>
          Em 2022, por meio da Chamada Pública nº 01/2022 da Empresa Brasileira de Pesquisa e
          Inovação Industrial (Embrapii), o CT Mineral tornou-se oficialmente uma Unidade Embrapii
          na área de Tecnologias em Mineração. Simultaneamente, junto ao Ministério da Educação
          (MEC), passou a integrar a Rede Nacional de Polos de Inovação dos Institutos Federais,
          consolidando-se como Polo de Inovação do IFRN.
        </p>
        <p>
          Com o credenciamento, o Centro passou a receber recursos para projetos de Pesquisa,
          Desenvolvimento e Inovação em parceria com empresas industriais. O processo foi
          realizado em parceria entre a Embrapii e o MEC, por meio da Secretaria de Educação
          Profissional e Tecnológica (Setec), responsável pelo aporte destinado à execução do
          Plano de Ação aprovado para o Centro.
        </p>
      </div>
    </div>

    <div class="page-container expertise" aria-label="Áreas de atuação do Polo de Inovação">
      <span>Prospecção e exploração mineral</span>
      <span>Geometalurgia e caracterização</span>
      <span>Recuperação e otimização de concentrados</span>
      <span>Processos hidrometalúrgicos</span>
      <span>Bioprocessamento e bio-hidrometalurgia</span>
      <span>Minerais estratégicos e do futuro</span>
    </div>
  </section>
</template>

<style scoped>
.about-hero {
  padding: 88px 0 72px;
  background:
    radial-gradient(circle at 92% 5%, rgba(14, 84, 74, 0.12), transparent 30%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfa 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.95fr);
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

h1 {
  max-width: 690px;
  margin: 0 0 24px;
  font-size: clamp(2.35rem, 4.3vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.06;
}

h1 em {
  display: block;
  color: var(--green);
  font-style: normal;
}

.hero-lead {
  max-width: 650px;
  margin: 0 0 36px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.hero-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 24px 34px;
}

.hero-highlights div {
  max-width: 150px;
}

.hero-highlights strong,
.hero-highlights span {
  display: block;
}

.hero-highlights strong {
  margin-bottom: 4px;
  font-size: 1.35rem;
}

.hero-highlights span {
  color: #788581;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.35;
  text-transform: uppercase;
}

.hero-image {
  position: relative;
  overflow: hidden;
  min-height: 470px;
  border: 1px solid rgba(14, 84, 74, 0.15);
  border-radius: 8px;
  background: var(--green-soft);
  box-shadow: 0 28px 70px rgba(20, 58, 51, 0.15);
}

.hero-image::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 48%, rgba(8, 41, 35, 0.82));
  content: '';
}

.hero-image img {
  width: 100%;
  height: 470px;
  object-fit: cover;
}

.image-label {
  position: absolute;
  right: 26px;
  bottom: 24px;
  left: 26px;
  z-index: 1;
  color: #ffffff;
}

.image-label span,
.image-label strong {
  display: block;
}

.image-label span {
  margin-bottom: 4px;
  color: #ffb17f;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.image-label strong {
  font-size: 1.15rem;
}

.overview {
  display: grid;
  grid-template-columns: minmax(280px, 0.72fr) 1.28fr;
  gap: 80px;
  margin-top: 88px;
  padding-top: 68px;
  border-top: 1px solid var(--line);
}

.overview-title h2 {
  margin: 0;
  font-size: clamp(1.85rem, 3vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.2;
}

.expertise {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 38px;
}

.expertise span {
  padding: 10px 15px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: #ffffff;
  color: var(--green);
  font-size: 0.78rem;
  font-weight: 700;
}

@media (max-width: 960px) {
  .hero-grid,
  .overview {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero-image {
    max-width: 680px;
  }

  .overview {
    gap: 28px;
  }
}

@media (max-width: 600px) {
  .about-hero {
    padding: 52px 0;
  }

  h1 {
    font-size: 2.25rem;
  }

  .hero-image,
  .hero-image img {
    height: 360px;
    min-height: 360px;
  }

  .overview {
    margin-top: 62px;
    padding-top: 52px;
  }
}
</style>
