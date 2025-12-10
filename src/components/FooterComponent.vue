<script setup lang="ts">
import logobranco from '@/assets/images/logo_branco.png'
</script>

<template>
  <v-container fluid class="container-footer pa-10">
    <v-row class="d-flex align-center">
      <v-col cols="12" md="auto" class="d-flex flex-column align-center">
        <v-img :src="logobranco" width="150" height="179" class="mb-8" alt="CT Mineral Logo" />
        <div class="d-flex flex-column align-stretch w-100">
          <span class="text-h6 text-white font-weight-bold mb-6">Nos siga:</span>
          <div class="d-flex align-center ga-4">
            <v-avatar size="50" color="white">
              <v-icon color="#E48020" size="25">mdi-instagram</v-icon>
            </v-avatar>
            <v-avatar size="50" color="white">
              <v-icon color="#E48020" size="25">mdi-facebook</v-icon>
            </v-avatar>
            <v-avatar size="50" color="white">
              <v-icon color="#E48020" size="25">mdi-linkedin</v-icon>
            </v-avatar>
          </div>
        </div>
      </v-col>

      <v-divider vertical class="mx-8 my-0 footer-divider d-none d-md-flex" />

      <!-- Coluna: Informações -->
      <v-col cols="12" md class="d-flex flex-column mt-8 mt-md-0">
        <!-- Título + linha -->
        <div class="d-flex flex-column mb-8">
          <span class="text-h6 text-white font-weight-bold mb-4">MAPA DO SITE</span>
          <v-divider class="divider-white" />
        </div>
        <!-- Links e Contatos -->
        <v-row no-gutters class="d-flex flex-column flex-md-row ga-8 justify-space-between">
          <!-- Links -->
          <v-col cols="12" md="auto" class="d-flex flex-column flex-md-row ga-8">
            <!-- IFRN -->
            <div class="d-flex flex-column ga-4">
              <span class="text-subtitle-2 text-white font-weight-bold">IFRN</span>
              <a href="#" class="text-body-2 text-white">Site</a>
            </div>
            <!-- CT Mineral -->
            <div class="d-flex flex-column ga-4">
              <span class="text-subtitle-2 text-white font-weight-bold">CT Mineral</span>
              <a href="#" class="text-body-2 text-white">Sobre</a>
              <a href="#" class="text-body-2 text-white">Integrantes</a>
              <a href="#" class="text-body-2 text-white">Notícias</a>
              <a href="#" class="text-body-2 text-white">Projetos</a>
            </div>
          </v-col>
          <!-- Contatos -->
          <v-col cols="12" md="auto" class="d-flex flex-column ga-6 pr-10">
            <!-- E-mail -->
            <div class="d-flex flex-column ga-2">
              <span class="text-subtitle-2 text-white font-weight-bold">E-mail:</span>
              <span class="text-body-2 text-white">ctmineral@email.com</span>
            </div>
            <!-- Telefone -->
            <div class="d-flex flex-column ga-2">
              <span class="text-subtitle-2 text-white font-weight-bold">Telefone:</span>
              <span class="text-body-2 text-white">+55 (84) 9 9999-9999</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.container-footer {
  background: #e48020;
}

.footer-divider {
  height: 300px;
  border-color: white;
  opacity: 1;
}

.divider-white {
  border-color: white;
  opacity: 1;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
