<template>
  <section class="content-section location-section">
    <div class="page-container location-grid">
      <div class="location-visual">
        <img
            src="/images/structure/ct-mineral.avif"
            alt="Centro de Tecnologia Mineral"
          loading="lazy"
          />
        <div class="location-badge">
          <strong>14.194,87 m²</strong>
          <span>de área total em Currais Novos</span>
        </div>
      </div>

      <div>
        <div class="section-heading">
          <span class="section-tag">Localização estratégica</span>
          <h2>No coração da mineração potiguar</h2>
          <p>
            Uma unidade conectada à vocação mineral do Seridó e aos principais corredores
            logísticos da região.
          </p>
        </div>

        <div class="prose">
          <p>
            O Centro de Tecnologia Mineral do IFRN possui aproximadamente 1.600 m² de área
            construída dedicados à pesquisa aplicada, inovação tecnológica, serviços especializados
            e apoio à indústria mineral.
          </p>
          <p>
            Embora inserido na área do Campus Currais Novos do IFRN, possui funcionamento
            administrativo próprio e está vinculado diretamente à Reitoria, atuando como unidade
            estratégica de Pesquisa, Desenvolvimento e Inovação.
          </p>
          <p>
          Estrategicamente localizado em Currais Novos/RN, município reconhecido oficialmente como a
          “Capital da Mineração do Rio Grande do Norte”, o CT Mineral está inserido no coração do
          Seridó Potiguar, região historicamente marcada pela forte tradição na extração e
          beneficiamento mineral, especialmente de scheelita, ouro e outros minerais de relevância
          econômica para o país.
        </p>
          <p>
          Sua localização privilegiada, próxima à BR-226 e integrada logisticamente ao Porto de
          Natal, proporciona rápido acesso às empresas mineradoras do Rio Grande do Norte, Paraíba,
          Ceará e demais regiões do Brasil, reduzindo custos operacionais e aproximando a indústria
          mineral de uma infraestrutura tecnológica avançada para pesquisa, inovação e prestação de
          serviços especializados.
        </p>
          <p>
          Além de fortalecer os Arranjos Produtivos Locais (APLs) de base mineral, o Centro
          desempenha um papel estratégico no desenvolvimento sustentável da mineração no semiárido
          brasileiro, contribuindo para a modernização tecnológica do setor mineral e para a geração
          de soluções inovadoras voltadas aos minerais estratégicos e minerais portadores do futuro.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location-section {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}

.location-grid {
  display: grid;
  grid-template-columns: minmax(360px, 0.9fr) 1.1fr;
  gap: 76px;
  align-items: center;
}

.location-visual {
  position: relative;
}

.location-visual > img {
  width: 100%;
  min-height: 560px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 24px 60px rgba(20, 58, 51, 0.14);
}

.location-badge {
  position: absolute;
  right: -24px;
  bottom: 34px;
  max-width: 220px;
  padding: 18px 20px;
  border-radius: 5px;
  background: var(--orange);
  color: #ffffff;
  box-shadow: 0 14px 30px rgba(139, 59, 15, 0.24);
}

.location-badge strong,
.location-badge span {
  display: block;
}

.location-badge strong {
  margin-bottom: 4px;
  font-size: 1.25rem;
}

.location-badge span {
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.4;
  text-transform: uppercase;
}

@media (max-width: 960px) {
  .location-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .location-visual {
    max-width: 680px;
  }

  .location-visual > img {
    min-height: 430px;
  }

  .location-badge {
    right: 18px;
  }
}

@media (max-width: 600px) {
  .location-visual > img {
    min-height: 350px;
  }

  .location-badge {
    right: 12px;
    bottom: 20px;
  }
}
</style>
