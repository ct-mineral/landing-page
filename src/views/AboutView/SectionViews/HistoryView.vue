<template>
  <section class="content-section history-section">
    <div class="page-container">
      <div class="section-heading">
        <span class="section-tag">Nossa história</span>
        <h2>Uma visão que se tornou referência em tecnologia mineral</h2>
        <p>
          Da idealização em 2008 à inauguração em 2019, uma trajetória construída por pessoas,
          instituições e compromisso com o desenvolvimento regional.
        </p>
      </div>

      <div class="history-grid">
        <figure class="founder-card">
          <div class="founder-image">
            <img
              src="/images/members/directors/jose-yvan.avif"
              alt="José Yvan Pereira Leite, professor e pesquisador"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>Idealizador do CT Mineral</span>
            <strong>José Yvan Pereira Leite</strong>
            <small>Professor, engenheiro de minas e pesquisador</small>
          </figcaption>
        </figure>

        <div class="prose history-copy">
          <p>
          A idealização do Centro de Tecnologia Mineral teve início em 2008, a partir da visão
          estratégica do engenheiro de minas, professor e pesquisador José Yvan Pereira Leite, então
          Pró-Reitor de Pesquisa e Inovação do IFRN.
        </p>
          <p>
          José Yvan identificou a necessidade de criação de um centro tecnológico especializado em
          mineração no Rio Grande do Norte, capaz de atender às demandas da indústria mineral
          regional, apoiar micro, pequenas e médias empresas e impulsionar o desenvolvimento dos
          Arranjos Produtivos Locais (APLs) de base mineral do estado.
        </p>
          <p>
          Sua proposta buscava criar uma estrutura voltada à pesquisa aplicada, inovação
          tecnológica, prestação de serviços especializados e formação de mão de obra qualificada
          para o setor mineral brasileiro.
        </p>
          <p>
          A partir dessa iniciativa, foi construída uma ampla articulação institucional envolvendo o
          IFRN, a Universidade Federal do Rio Grande do Norte (UFRN), a Universidade Federal Rural
          do Semiárido (Ufersa), a Universidade do Estado do Rio Grande do Norte (Uern), a Fundação
          de Apoio ao IFRN (Funcern), a Fundação de Apoio à Pesquisa do Estado do Rio Grande do
          Norte (Fapern) e a Fundação Gorceix, vinculada à Universidade Federal de Ouro Preto
          (UFOP).
        </p>
        </div>
      </div>

      <div class="timeline">
        <article>
          <span>2008</span>
          <div>
            <h3>Idealização</h3>
            <p>
              Nasce a proposta de um centro especializado para aproximar pesquisa aplicada e setor
              mineral.
            </p>
          </div>
        </article>
        <article>
          <span>2012</span>
          <div>
            <h3>Início da construção</h3>
            <p>
          Em 2012, o IFRN por meio do Governo do estado iniciou oficialmente o projeto de construção
          do CT Mineral com recursos da Financiadora de Estudos e Projetos (Finep), visando
          implantar um ambiente tecnológico moderno voltado ao desenvolvimento de Pesquisa,
          Desenvolvimento e Inovação (PD&I), prestação de serviços tecnológicos e apoio à indústria
          mineral.
            </p>
          </div>
        </article>
        <article>
          <span>2019</span>
          <div>
            <h3>Inauguração oficial</h3>
            <p>
          Após melhorias estruturais e consolidação de sua infraestrutura laboratorial, o Centro foi
          oficialmente inaugurado em 02 de setembro de 2019. Em homenagem ao seu idealizador,
          falecido em 10 de junho daquele mesmo ano, o prédio recebeu o nome de “José Yvan Pereira
          Leite”.
            </p>
          </div>
        </article>
        <article class="timeline-current">
          <span>Hoje</span>
          <div>
            <h3>Legado em movimento</h3>
            <p>
          Hoje, o CT Mineral representa a concretização do legado deixado por José Yvan: um ambiente
          de inovação tecnológica, integração entre academia e indústria e desenvolvimento regional
          sustentável por meio da mineração.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history-grid {
  display: grid;
  grid-template-columns: minmax(280px, 0.68fr) 1.32fr;
  gap: 70px;
  align-items: start;
}

.founder-card {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--surface);
  box-shadow: 0 18px 45px rgba(25, 64, 57, 0.08);
}

.founder-image {
  overflow: hidden;
  height: 360px;
  background: var(--green-soft);
}

.founder-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.founder-card figcaption {
  padding: 22px 24px;
}

.founder-card span,
.founder-card strong,
.founder-card small {
  display: block;
}

.founder-card span {
  margin-bottom: 6px;
  color: var(--orange);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.founder-card strong {
  margin-bottom: 4px;
  font-size: 1.05rem;
}

.founder-card small {
  color: var(--muted);
  line-height: 1.45;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 68px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--line);
  gap: 1px;
  overflow: hidden;
}

.timeline article {
  min-height: 245px;
  padding: 26px 24px;
  background: #ffffff;
}

.timeline article > span {
  display: block;
  margin-bottom: 30px;
  color: var(--orange);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.timeline h3 {
  margin: 0 0 10px;
  font-size: 1rem;
}

.timeline p {
  margin: 0;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.65;
}

.timeline .timeline-current {
  background: var(--green-soft);
}

@media (max-width: 960px) {
  .history-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .founder-card {
    max-width: 430px;
  }

  .timeline {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .timeline {
    grid-template-columns: 1fr;
  }

  .timeline article {
    min-height: auto;
  }
}
</style>
