<script setup lang="ts">
import {
  mdiArrowTopRight,
  mdiEmailOutline,
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
  mdiMapMarkerOutline,
  mdiPhoneOutline,
} from '@mdi/js'

const currentYear = new Date().getFullYear()

const services = [
  { name: 'Cominuição de Amostras', link: '/servicos/cominuicao-de-amostras' },
  { name: 'Preparação de Amostras', link: '/servicos/preparacao-de-amostras' },
  { name: 'Análise Mineral', link: '/servicos/analise-mineral' },
  {
    name: 'Classificação e Concentração',
    link: '/servicos/classificacao-e-concentracao-mineral',
  },
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-container footer-grid">
        <div class="footer-brand">
          <RouterLink to="/" class="footer-logo" aria-label="Ir para a página inicial">
            <img
              src="/images/logos/logo_ctm_branco.svg"
              width="58"
              height="58"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <span>
              <small>Polo de Inovação do IFRN</small>
              <strong>CT Mineral</strong>
            </span>
          </RouterLink>

          <p>
            Centro de referência em pesquisa aplicada, desenvolvimento tecnológico e inovação para
            o setor mineral brasileiro.
          </p>

          <div class="social-links" aria-label="Redes sociais do CT Mineral">
            <a
              href="https://www.instagram.com/ctmineral.ifrn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <v-icon :icon="mdiInstagram" size="20" />
            </a>
            <a
              href="https://www.facebook.com/people/Polo-de-Inova%C3%A7%C3%A3o-do-IFRN/100069147612114/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <v-icon :icon="mdiFacebook" size="20" />
            </a>
            <a
              href="https://www.linkedin.com/company/polodeinovacaoifrn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <v-icon :icon="mdiLinkedin" size="20" />
            </a>
          </div>
        </div>

        <nav class="footer-column" aria-label="Navegação do rodapé">
          <h2>Navegação</h2>
          <ul>
            <li><RouterLink to="/sobre">Sobre o CT Mineral</RouterLink></li>
            <li><RouterLink to="/integrantes">Nossa equipe</RouterLink></li>
            <li><RouterLink to="/projetos">Projetos</RouterLink></li>
            <li><RouterLink to="/oportunidades">Oportunidades</RouterLink></li>
            <li>
              <a
                href="https://portal.ifrn.edu.br/institucional/polo-de-inovacao-currais-novos/noticias/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notícias
                <v-icon :icon="mdiArrowTopRight" size="14" />
              </a>
            </li>
          </ul>
        </nav>

        <nav class="footer-column services-column" aria-label="Serviços">
          <h2>Serviços</h2>
          <ul>
            <li v-for="service in services" :key="service.link">
              <RouterLink :to="service.link">{{ service.name }}</RouterLink>
            </li>
          </ul>
        </nav>

        <div class="footer-column contact-column">
          <h2>Contato</h2>
          <ul>
            <li>
              <v-icon :icon="mdiEmailOutline" size="19" />
              <a href="mailto:ctmineral@ifrn.edu.br">ctmineral@ifrn.edu.br</a>
            </li>
            <li>
              <v-icon :icon="mdiPhoneOutline" size="19" />
              <a href="https://wa.me/558440054117" target="_blank" rel="noopener noreferrer">
                +55 (84) 4005-4117
              </a>
            </li>
            <li>
              <v-icon :icon="mdiMapMarkerOutline" size="19" />
              <span>Currais Novos, Rio Grande do Norte</span>
            </li>
          </ul>

          <RouterLink class="contact-link" to="/contato">
            Fale com nossa equipe
            <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-container bottom-content">
        <span>
          &copy; {{ currentYear }} Centro de Tecnologia Mineral. Todos os direitos reservados.
        </span>
        <div>
          <a href="https://portal.ifrn.edu.br/" target="_blank" rel="noopener noreferrer">
            Portal IFRN
          </a>
          <span>Desenvolvido por Jardson Alan Vieira da Silva</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 4px solid #e65100;
  color: #ffffff;
}

.footer-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.footer-main {
  padding: 68px 0 62px;
  background:
    radial-gradient(circle at 8% 12%, rgba(255, 255, 255, 0.05), transparent 24%),
    #0e544a;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.72fr 1fr 1.12fr;
  gap: 54px;
}

.footer-logo {
  display: inline-flex;
  gap: 14px;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
}

.footer-logo img {
  flex: 0 0 auto;
  object-fit: contain;
}

.footer-logo span,
.footer-logo small,
.footer-logo strong {
  display: block;
}

.footer-logo small {
  margin-bottom: 3px;
  color: #ffb17f;
  font-size: 0.63rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-logo strong {
  font-size: 1.28rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.footer-brand > p {
  max-width: 330px;
  margin: 24px 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.82rem;
  line-height: 1.7;
}

.social-links {
  display: flex;
  gap: 9px;
}

.social-links a {
  display: grid;
  width: 39px;
  height: 39px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  place-items: center;
  color: #ffffff;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.social-links a:hover {
  border-color: #ffb17f;
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.footer-column h2 {
  margin: 7px 0 22px;
  color: #ffffff;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-column h2::after {
  display: block;
  width: 28px;
  height: 3px;
  margin-top: 10px;
  background: #e65100;
  content: '';
}

.footer-column ul {
  display: grid;
  gap: 13px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-column a,
.footer-column li > span {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.76rem;
  line-height: 1.5;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-column a:hover {
  color: #ffffff;
}

.footer-column li > a {
  display: inline-flex;
  gap: 5px;
  align-items: center;
}

.contact-column li {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 9px;
  align-items: start;
  color: #ffb17f;
}

.contact-link {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  margin-top: 24px;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(255, 177, 127, 0.5);
  color: #ffffff !important;
  font-weight: 800;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: #093e36;
}

.bottom-content {
  display: flex;
  min-height: 66px;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.68rem;
}

.bottom-content > div {
  display: flex;
  gap: 22px;
  align-items: center;
}

.bottom-content a {
  color: rgba(255, 255, 255, 0.78);
  font-weight: 700;
  text-decoration: none;
}

.bottom-content a:hover {
  color: #ffffff;
}

@media (max-width: 1000px) {
  .footer-grid {
    grid-template-columns: 1.2fr 0.8fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
    padding-bottom: 36px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  }
}

@media (max-width: 700px) {
  .footer-container {
    width: min(100% - 32px, 1180px);
  }

  .footer-main {
    padding: 54px 0 48px;
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 42px 30px;
  }

  .footer-brand,
  .contact-column {
    grid-column: 1 / -1;
  }

  .contact-column {
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .bottom-content {
    min-height: auto;
    padding: 20px 0;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .bottom-content > div {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }
}

@media (max-width: 440px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-brand,
  .contact-column {
    grid-column: auto;
  }

  .services-column {
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }
}

@media (prefers-reduced-motion: reduce) {
  .social-links a,
  .footer-column a {
    transition: none;
  }
}
</style>
