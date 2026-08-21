<template>
  <section class="content-section history-section">
    <div class="page-container">
      <div class="section-heading">
        <span class="section-tag">Nossa história</span>
        <h2>O engenheiro-educador que deu origem ao CT Mineral</h2>
        <p>
          Nascido em Natal em 1962, José Yvan Pereira Leite dedicou 26 anos ao IFRN e tornou-se
          patrono do Centro de Tecnologia Mineral em 2019.
        </p>
      </div>

      <div class="history-grid">
        <figure class="founder-card">
          <div class="founder-image">
            <img
              src="/images/members/directors/jose-yvan.avif"
              alt="José Yvan Pereira Leite, engenheiro de minas, professor e pesquisador do IFRN"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>Idealizador e patrono do CT Mineral</span>
            <strong>José Yvan Pereira Leite</strong>
            <small>Engenheiro de minas, professor e pesquisador do IFRN (1962–2019)</small>
          </figcaption>
        </figure>

        <div class="prose history-copy">
          <p>
            José Yvan Pereira Leite nasceu em Natal/RN, em 1962, e formou-se em Engenharia de Minas
            pela Universidade Federal da Paraíba (UFPB) em 1987. Entre 1988 e 1990, iniciou a
            carreira na Escola de Mineração Gilberto Mestrinho, da Empresa Paranapanema, em
            Manaus/AM, como formador de técnicos em mineração e chefe do Laboratório de Tratamento
            de Minérios.
          </p>
          <p>
            Em 1990, retornou ao Rio Grande do Norte para cursar o mestrado em Engenharia Química
            na Universidade Federal do Rio Grande do Norte (UFRN), concluído em 1992. No ano
            seguinte, ingressou no Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande
            do Norte (IFRN) como professor de tecnologia mineral do Curso Técnico de Mineração.
            Durante 26 anos, atuou em caracterização tecnológica, concentração e separação mineral e
            processamento mineral com ênfase ambiental.
          </p>
          <p>
            Engenheiro-educador, foi Pró-Reitor de Pesquisa e Inovação do IFRN e editor da revista
            científica Holos de 2009 a 2019, período em que ampliou a indexação e a visibilidade do
            periódico. No Laboratório de Tecnologia Mineral, desenvolveu pesquisa aplicada — entre
            elas o projeto de extração de contaminantes do quartzo de alta pureza, cujo equipamento
            de separação mineral foi premiado na SECITEX 2017. Em 2008, já como pró-reitor, propôs
            um centro especializado para atender a indústria mineral do estado, apoiar micro,
            pequenas e médias empresas e fortalecer os Arranjos Produtivos Locais (APLs) de base
            mineral.
          </p>
          <p>
            A proposta reuniu o IFRN, a UFRN, a Universidade Federal Rural do Semiárido (Ufersa), a
            Universidade do Estado do Rio Grande do Norte (Uern), a Fundação de Apoio ao IFRN
            (Funcern), a Fundação de Apoio à Pesquisa do Estado do Rio Grande do Norte (Fapern) e a
            Fundação Gorceix, vinculada à Universidade Federal de Ouro Preto (UFOP), em uma
            estrutura de pesquisa aplicada, inovação, serviços tecnológicos e formação. José Yvan
            faleceu em 10 de junho de 2019. Em 2 de setembro daquele ano, o CT Mineral foi
            inaugurado e o prédio recebeu seu nome. Ainda em 2019, foi homenageado no Encontro
            Nacional de Tratamento de Minérios e Metalurgia Extrativa (ENTMME) e nomeado paraninfo
            in memoriam da turma do Curso Técnico de Mineração do IFRN.
          </p>
        </div>
      </div>

      <div class="timeline">
        <article>
          <span>2008</span>
          <div>
            <h3>Idealização</h3>
            <p>
              José Yvan, então Pró-Reitor de Pesquisa e Inovação do IFRN, propõe um centro
              especializado para aproximar pesquisa aplicada e setor mineral.
            </p>
          </div>
        </article>
        <article>
          <span>2012</span>
          <div>
            <h3>Início da construção</h3>
            <p>
              O IFRN, com o Governo do Estado e recursos da Finep, inicia a obra do CT Mineral
              voltada a PD&amp;I, serviços tecnológicos e apoio à indústria mineral.
            </p>
          </div>
        </article>
        <article>
          <span>2019</span>
          <div>
            <h3>Inauguração e patrono</h3>
            <p>
              Em 2 de setembro, o Centro é inaugurado. O prédio recebe o nome de José Yvan Pereira
              Leite, falecido em 10 de junho daquele ano.
            </p>
          </div>
        </article>
        <article class="timeline-current">
          <span>Hoje</span>
          <div>
            <h3>Legado em movimento</h3>
            <p>
              O CT Mineral concretiza o legado de José Yvan: inovação tecnológica, integração entre
              academia e indústria e desenvolvimento regional sustentável.
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
