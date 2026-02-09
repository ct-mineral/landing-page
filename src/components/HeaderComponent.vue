<script setup lang="ts">
import { ref } from 'vue'

const servicosMenu = ref(false)
const mobileMenu = ref(false)

const servicos = [
  { id: 1, name: 'Administração de Amostras', link: '/servicos/administracao-de-amostras' },
  { id: 2, name: 'Análises', link: '/servicos/analises' },
  { id: 3, name: 'Preparação de Amostras', link: '/servicos/preparacao-de-amostras' },
  { id: 4, name: 'Testes Físicos', link: '/servicos/testes-fisicos' },
]
</script>

<template>
  <div class="d-flex flex-column px-5 py-3 polo">
    <span class="text-white text-body-2 text-md-body-1 font-weight-regular mb-2">
      Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte
    </span>
    <span class="text-white text-h6 text-md-h5 font-weight-bold"> Polo de Inovação do IFRN </span>
  </div>

  <v-btn
    v-show="$vuetify.display.smAndDown"
    @click="mobileMenu = !mobileMenu"
    :icon="mobileMenu ? 'mdi-close' : 'mdi-menu'"
    class="nav-bar text-white w-100"
    flat
    rounded="0"
  />

  <div class="nav-bar d-flex justify-center align-center">
    <nav v-show="!$vuetify.display.smAndDown || mobileMenu" class="w-100 w-md-auto">
      <ul class="d-flex flex-column flex-md-row w-100 w-md-auto align-center pa-0 ma-0">
        <li class="pa-2 pa-md-0 w-100 w-md-auto">
          <router-link to="/" class="d-flex justify-center d-md-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1" @click="mobileMenu = false"
            >Início</router-link
          >
        </li>
        <li class="pa-2 pa-md-0 w-100 w-md-auto">
          <router-link to="/sobre" class="d-flex justify-center d-md-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1" @click="mobileMenu = false"
            >Sobre</router-link
          >
        </li>
        <li class="pa-2 pa-md-0 w-100 w-md-auto">
          <router-link to="/integrantes" class="d-flex justify-center d-md-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1" @click="mobileMenu = false"
            >Integrantes</router-link
          >
        </li>
        <li class="pa-2 pa-md-0 w-100 w-md-auto">
          <v-menu v-model="servicosMenu" offset-y activator="parent" location-strategy="connected" transition="scroll-y-transition">
            <template v-slot:activator="{ props }">
              <a
                v-bind="props"
                class="d-flex justify-center align-center d-md-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1"
              >
                Nossos serviços
                <v-icon icon="mdi-menu-down" />
              </a>
            </template>
            <v-list class="pa-0 rounded-0">
              <v-list-item v-for="servico in servicos" :key="servico.id" @click="servicosMenu = false" class="pa-0">
                <router-link :to="servico.link" class="dropdown-link d-flex px-3 py-2" @click="mobileMenu = false">{{ servico.name }}</router-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </li>
        <li class="pa-2 pa-md-0 w-100 w-md-auto">
          <router-link to="/projetos" class="d-flex justify-center d-md-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1" @click="mobileMenu = false"
            >Projetos</router-link
          >
        </li>
        <li class="pa-2 pa-md-0 w-100 w-md-auto">
          <a href="https://portal.ifrn.edu.br/institucional/polo-de-inovacao-currais-novos/noticias/" class="d-flex justify-center d-md-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1" target="_blank" rel="noopener noreferrer" @click="mobileMenu = false">Notícias</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.polo {
  background-color: #e48020;
  min-height: 72px;
}

.nav-bar {
  background-color: #0e544a;
}

li,
a {
  list-style: none;
  text-decoration: none;
  color: white;
}

li:hover {
  background-color: #107465;
  transition: 0.3s ease;
}

.dropdown-link {
  color: #0e544a;
  text-decoration: none;
}
</style>
