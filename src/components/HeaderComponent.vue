<script setup lang="ts">
import { ref } from 'vue'

const servicosMenu = ref(false)

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

  <div class="nav-bar d-flex justify-center align-center">
    <nav>
      <ul class="d-flex flex-column flex-md-row align-center pa-0 ma-0">
        <li class="pa-0">
          <router-link to="/" class="d-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1"
            >Início</router-link
          >
        </li>
        <li class="pa-0">
          <router-link to="/sobre" class="d-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1"
            >Sobre</router-link
          >
        </li>
        <li class="pa-0">
          <router-link to="/integrantes" class="d-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1"
            >Integrantes</router-link
          >
        </li>
        <li class="pa-0">
          <v-menu v-model="servicosMenu" offset-y>
            <template v-slot:activator="{ props }">
              <a
                v-bind="props"
                class="d-flex align-center w-100 h-100 py-2 px-5 text-body-2 text-md-body-1"
              >
                Nossos serviços
                <v-icon icon="mdi-menu-down" />
              </a>
            </template>
            <v-list class="menu-dropdown pa-0 rounded-0">
              <v-list-item v-for="servico in servicos" :key="servico.id" @click="servicosMenu = false" class="pa-0">
                <router-link :to="servico.link" class="dropdown-link d-flex px-3 py-2">{{ servico.name }}</router-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </li>
        <li class="pa-0">
          <router-link to="/projetos" class="d-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1"
            >Projetos</router-link
          >
        </li>
        <li class="pa-0">
          <a href="https://portal.ifrn.edu.br/institucional/polo-de-inovacao-currais-novos/noticias/" class="d-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1" target="_blank" rel="noopener noreferrer ">Notícias</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.polo {
  background-color: #e48020;
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
