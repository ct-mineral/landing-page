<script setup lang="ts"></script>

<template>
  <v-container fluid class="container-footer">
    <v-row class="d-flex align-center py-4">
      <v-col cols="12" md="auto" class="d-flex flex-column align-center ga-8 px-md-8">
        <v-img src="images/logo_branco.png" class="w-25 w-md-50" alt="CT Mineral Logo" />
        <div class="d-flex flex-column align-center align-md-start ga-3 w-100">
          <span class="text-h6 text-white font-weight-bold">Nos siga:</span>
          <div class="d-flex align-center ga-8 ga-md-4">
            <v-btn icon="mdi-instagram" class="btn-color" density="comfortable"/>
            <v-btn icon="mdi-facebook" class="btn-color" density="comfortable" />
            <v-btn icon="mdi-linkedin" class="btn-color" density="comfortable"/>
          </div>
        </div>
      </v-col>

      <v-divider vertical class="divider d-none d-md-flex"/>

      <!-- Coluna: Informações -->
      <v-col cols="12" md class="d-flex flex-column mt-4 mt-md-0 px-8">
        <!-- Título + linha -->
        <div class="d-flex flex-column mb-4">
          <span class="text-subtitle-1 text-md-h6 text-white font-weight-bold mb-2">MAPA DO SITE</span>
          <v-divider class="divider" />
        </div>
        <!-- Links e Contatos -->
        <v-row no-gutters class="d-flex flex-column flex-md-row  justify-space-between">
          <!-- Links -->
          <v-col cols="12" md="auto" class="d-flex flex-column flex-md-row ga-6 ga-md-12">
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
          <v-col cols="12" md="auto" class="d-flex flex-column ga-6 ga-md-8 mt-6 mt-md-0">
            <!-- E-mail -->
            <div class="d-flex flex-column ga-4">
              <span class="text-subtitle-2 text-white font-weight-bold">E-mail:</span>
              <a href="#" class="text-body-2 text-white">ctmineral@email.com</a>
            </div>
            <!-- Telefone -->
            <div class="d-flex flex-column ga-4">
              <span class="text-subtitle-2 text-white font-weight-bold">Telefone:</span>
              <a href="#" class="text-body-2 text-white">+55 (84) 9 9999-9999</a>
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

.btn-color {
  color: #E48020;
}

.divider {
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
