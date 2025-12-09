<script setup lang="ts">
import { ref } from 'vue'

const integrantesMenu = ref(false)
const servicosMenu = ref(false)
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
        <li class="links pa-0">
          <a href="#" class="d-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1">Início</a>
        </li>
        <li class="links pa-0">
          <a href="#" class="d-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1">Sobre</a>
        </li>
        <li class="links pa-0">
          <v-menu v-model="integrantesMenu" offset-y>
            <template v-slot:activator="{ props }">
              <a
                v-bind="props"
                class="d-flex align-center w-100 h-100 py-2 px-5 text-body-2 text-md-body-1"
              >
                Integrantes
                <span class="arrow px-2">⌄</span>
              </a>
            </template>
            <v-list class="menu-dropdown">
              <v-list-item @click="integrantesMenu = false">
                <a href="#" class="dropdown-link">Pesquisadores</a>
              </v-list-item>
              <v-list-item @click="integrantesMenu = false">
                <a href="#" class="dropdown-link">Diretores</a>
              </v-list-item>
              <v-list-item @click="integrantesMenu = false">
                <a href="#" class="dropdown-link">Bolsistas</a>
              </v-list-item>
              <v-list-item @click="integrantesMenu = false">
                <a href="#" class="dropdown-link">Técnicos</a>
              </v-list-item>
            </v-list>
          </v-menu>
        </li>
        <li class="links pa-0">
          <v-menu v-model="servicosMenu" offset-y>
            <template v-slot:activator="{ props }">
              <a
                v-bind="props"
                class="d-flex align-center w-100 h-100 py-2 px-5 text-body-2 text-md-body-1"
              >
                Nossos serviços
                <span class="arrow px-2">⌄</span>
              </a>
            </template>
            <v-list class="menu-dropdown">
              <v-list-item @click="servicosMenu = false">
                <a href="#" class="dropdown-link">Serviço 1</a>
              </v-list-item>
              <v-list-item @click="servicosMenu = false">
                <a href="#" class="dropdown-link">Serviço 2</a>
              </v-list-item>
              <v-list-item @click="servicosMenu = false">
                <a href="#" class="dropdown-link">Serviço 3</a>
              </v-list-item>
            </v-list>
          </v-menu>
        </li>
        <li class="links pa-0">
          <a href="#" class="d-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1">Projetos</a>
        </li>
        <li class="links pa-0">
          <a href="#" class="d-block w-100 h-100 py-2 px-5 text-body-2 text-md-body-1">Notícias</a>
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
