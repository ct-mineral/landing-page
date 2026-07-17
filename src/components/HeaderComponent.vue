<script setup lang="ts">
import { ref } from 'vue'
import { mdiArrowTopRight, mdiClose, mdiMenu, mdiMenuDown, mdiMenuUp } from '@mdi/js'

const servicosMenu = ref(false)
const mobileMenu = ref(false)

const servicos = [
  { id: 1, name: 'Cominuição de Amostras', link: '/servicos/cominuicao-de-amostras' },
  { id: 2, name: 'Preparação de Amostras', link: '/servicos/preparacao-de-amostras' },
  { id: 3, name: 'Classificação e Concentração Mineral', link: '/servicos/classificacao-e-concentracao-mineral' },
  { id: 4, name: 'Análise Mineral', link: '/servicos/analise-mineral' },
]

function closeMenus() {
  mobileMenu.value = false
  servicosMenu.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="institutional-bar">
      <div class="header-container institutional-content">
        <span>Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte</span>
        <a
          href="https://portal.ifrn.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir Portal IFRN em uma nova aba"
        >
          Portal IFRN
          <v-icon :icon="mdiArrowTopRight" size="15" />
        </a>
      </div>
    </div>

    <div class="brand-bar">
      <div class="header-container brand-content">
        <RouterLink class="brand" to="/" aria-label="Ir para a página inicial">
          <img src="/images/logos/logo_ctm.svg" alt="" width="52" height="52" />
          <span class="brand-copy">
            <small>Polo de Inovação do IFRN</small>
            <strong>CT Mineral</strong>
            <span>Centro de Tecnologia Mineral · Currais Novos/RN</span>
          </span>
        </RouterLink>

        <div class="brand-actions">
          <RouterLink class="contact-button" to="/contato">Fale conosco</RouterLink>
          <button
            class="mobile-toggle"
            type="button"
            :aria-expanded="mobileMenu"
            aria-controls="main-navigation"
            :aria-label="mobileMenu ? 'Fechar menu' : 'Abrir menu'"
            @click="mobileMenu = !mobileMenu"
          >
            <v-icon :icon="mobileMenu ? mdiClose : mdiMenu" size="25" />
          </button>
        </div>
      </div>
    </div>

    <div class="navigation-bar">
      <div class="header-container">
        <nav
          id="main-navigation"
          v-show="!$vuetify.display.smAndDown || mobileMenu"
          aria-label="Navegação principal"
        >
          <ul class="navigation-list">
            <li>
              <RouterLink to="/" @click="closeMenus">Início</RouterLink>
            </li>
            <li>
              <RouterLink to="/sobre" @click="closeMenus">Sobre</RouterLink>
            </li>
            <li>
              <RouterLink to="/integrantes" @click="closeMenus">Integrantes</RouterLink>
            </li>
            <li class="services-menu">
              <button
                type="button"
                :aria-expanded="servicosMenu"
                aria-controls="services-navigation"
                @click="servicosMenu = !servicosMenu"
              >
                Serviços
                <v-icon :icon="servicosMenu ? mdiMenuUp : mdiMenuDown" size="18" />
              </button>

              <v-expand-transition>
                <ul
                  id="services-navigation"
                  v-show="servicosMenu"
                  class="services-dropdown"
                  aria-label="Serviços"
                >
                  <li v-for="servico in servicos" :key="servico.id">
                    <RouterLink :to="servico.link" @click="closeMenus">
                      {{ servico.name }}
                    </RouterLink>
                  </li>
                </ul>
              </v-expand-transition>
            </li>
            <li>
              <RouterLink to="/projetos" @click="closeMenus">Projetos</RouterLink>
            </li>
            <li>
              <a
                href="https://portal.ifrn.edu.br/institucional/polo-de-inovacao-currais-novos/noticias/"
                target="_blank"
                rel="noopener noreferrer"
                @click="closeMenus"
              >
                Notícias
              </a>
            </li>
            <li>
              <RouterLink to="/oportunidades" @click="closeMenus">Oportunidades</RouterLink>
            </li>
            <li class="mobile-contact">
              <RouterLink to="/contato" @click="closeMenus">Contato</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  border-top: 4px solid #e65100;
  color: #1d2927;
}

.header-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.institutional-bar {
  background: #0e544a;
  color: #ffffff;
}

.institutional-content {
  display: flex;
  min-height: 38px;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
}

.institutional-content > span {
  font-size: 0.7rem;
  letter-spacing: 0.015em;
}

.institutional-content a {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.7rem;
  font-weight: 700;
  text-decoration: none;
}

.institutional-content a:hover {
  color: #ffffff;
}

.brand-bar {
  border-bottom: 1px solid #dce5e2;
  background: #ffffff;
}

.brand-content {
  display: flex;
  min-height: 104px;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  min-width: 0;
  gap: 15px;
  align-items: center;
  color: inherit;
  text-decoration: none;
}

.brand img {
  flex: 0 0 auto;
  object-fit: contain;
}

.brand-copy,
.brand-copy small,
.brand-copy strong,
.brand-copy > span {
  display: block;
}

.brand-copy small {
  margin-bottom: 2px;
  color: #e65100;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.brand-copy strong {
  color: #0e544a;
  font-size: 1.4rem;
  letter-spacing: -0.025em;
  line-height: 1.15;
  text-transform: uppercase;
}

.brand-copy > span {
  margin-top: 3px;
  color: #5f6d6a;
  font-size: 0.7rem;
}

.brand-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.contact-button {
  display: inline-flex;
  min-height: 43px;
  padding: 0 18px;
  border-radius: 4px;
  align-items: center;
  background: #e65100;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 800;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.contact-button:hover {
  background: #c74800;
  transform: translateY(-1px);
}

.mobile-toggle {
  display: none;
  width: 43px;
  height: 43px;
  border: 1px solid #dce5e2;
  border-radius: 4px;
  place-items: center;
  background: #ffffff;
  color: #0e544a;
  cursor: pointer;
}

.navigation-bar {
  border-bottom: 1px solid #dce5e2;
  background: #ffffff;
  box-shadow: 0 7px 22px rgba(20, 58, 51, 0.05);
}

.navigation-list,
.services-dropdown {
  margin: 0;
  padding: 0;
  list-style: none;
}

.navigation-list {
  display: flex;
  align-items: stretch;
}

.navigation-list > li {
  position: relative;
}

.navigation-list > li > a,
.navigation-list > li > button {
  display: inline-flex;
  min-height: 56px;
  padding: 0 18px;
  border: 0;
  border-bottom: 3px solid transparent;
  gap: 5px;
  align-items: center;
  background: transparent;
  color: #33413e;
  cursor: pointer;
  font-size: 0.77rem;
  font-weight: 750;
  letter-spacing: 0.015em;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease;
}

.navigation-list > li:first-child > a {
  padding-left: 0;
}

.navigation-list > li > a:hover,
.navigation-list > li > button:hover,
.navigation-list > li > a.router-link-active {
  border-bottom-color: #e65100;
  color: #0e544a;
}

.services-dropdown {
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  z-index: 10;
  overflow: hidden;
  width: 310px;
  border: 1px solid #dce5e2;
  border-top: 3px solid #e65100;
  border-radius: 0 0 6px 6px;
  background: #ffffff;
  box-shadow: 0 18px 42px rgba(20, 58, 51, 0.14);
}

.services-dropdown a {
  display: block;
  padding: 14px 18px;
  border-bottom: 1px solid #edf2f0;
  color: #33413e;
  font-size: 0.77rem;
  font-weight: 650;
  line-height: 1.4;
  text-decoration: none;
}

.services-dropdown li:last-child a {
  border-bottom: 0;
}

.services-dropdown a:hover,
.services-dropdown a.router-link-active {
  background: #eaf4f2;
  color: #0e544a;
}

.mobile-contact {
  display: none;
}

@media (max-width: 959px) {
  .header-container {
    width: min(100% - 32px, 1180px);
  }

  .institutional-content {
    min-height: 34px;
  }

  .institutional-content > span {
    overflow: hidden;
    max-width: 70%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .brand-content {
    min-height: 86px;
  }

  .brand img {
    width: 44px;
    height: 44px;
  }

  .brand-copy strong {
    font-size: 1.18rem;
  }

  .brand-copy > span {
    display: none;
  }

  .contact-button {
    display: none;
  }

  .mobile-toggle {
    display: grid;
  }

  .navigation-bar {
    box-shadow: 0 10px 24px rgba(20, 58, 51, 0.08);
  }

  .navigation-list {
    padding: 8px 0 16px;
    flex-direction: column;
  }

  .navigation-list > li > a,
  .navigation-list > li > button {
    width: 100%;
    min-height: 48px;
    padding: 0 4px;
    border-bottom: 0;
    justify-content: space-between;
    font-size: 0.82rem;
  }

  .navigation-list > li:first-child > a {
    padding-left: 4px;
  }

  .navigation-list > li > a:hover,
  .navigation-list > li > button:hover,
  .navigation-list > li > a.router-link-active {
    background: #eaf4f2;
    color: #0e544a;
  }

  .services-dropdown {
    position: static;
    width: 100%;
    margin: 0 0 8px;
    border: 0;
    border-left: 3px solid #e65100;
    border-radius: 0;
    box-shadow: none;
  }

  .services-dropdown a {
    padding: 12px 16px;
    background: #f6f9f8;
  }

  .mobile-contact {
    display: block;
  }
}

@media (max-width: 480px) {
  .institutional-content > span {
    display: none;
  }

  .institutional-content {
    justify-content: flex-end;
  }

  .brand-copy small {
    font-size: 0.58rem;
  }

  .brand-copy strong {
    font-size: 1.05rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-button,
  .navigation-list > li > a,
  .navigation-list > li > button {
    transition: none;
  }
}
</style>
