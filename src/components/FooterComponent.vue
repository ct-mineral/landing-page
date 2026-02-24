<script setup lang="ts">
import { mdiLinkedin, mdiFacebook, mdiInstagram } from '@mdi/js'

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="bg-orange-darken-3">
    <v-container>
      <v-row class="d-flex align-center py-4">
        <v-col cols="12" md="auto" class="d-flex flex-column align-center ga-8 px-md-8">
          <v-img
            src="/images/logos/logo_ctm_branco.svg"
            width="60"
            height="60"
            alt="CT Mineral Logo"
            loading="lazy"
            decoding="async"
          />
          <div class="d-flex flex-column align-center align-md-start ga-3 w-100">
            <span class="text-h6 text-white font-weight-bold">Nos siga:</span>
            <div class="d-flex align-center ga-8 ga-md-4">
              <v-btn
                :icon="mdiInstagram"
                class="text-orange-darken-3"
                density="comfortable"
                href="https://www.instagram.com/ctmineral.ifrn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              />
              <v-btn
                :icon="mdiFacebook"
                class="text-orange-darken-3"
                density="comfortable"
                href="#"
                aria-label="Facebook"
              />
              <v-btn
                :icon="mdiLinkedin"
                class="text-orange-darken-3"
                density="comfortable"
                href="#"
                aria-label="LinkedIn"
              />
            </div>
          </div>
        </v-col>

        <v-divider vertical class="divider d-none d-md-flex" />

        <!-- Coluna: Informações -->
        <v-col cols="12" md class="d-flex flex-column mt-4 mt-md-0 px-8">
          <!-- Título + linha -->
          <div class="d-flex flex-column mb-4">
            <span class="text-subtitle-1 text-md-h6 text-white font-weight-bold mb-2"
              >MAPA DO SITE</span
            >
            <v-divider class="divider" />
          </div>
          <!-- Links e Contatos -->
          <v-row no-gutters class="d-flex flex-column flex-md-row justify-space-between">
            <!-- Links -->
            <v-col cols="12" md="auto" class="d-flex flex-column flex-md-row ga-6 ga-md-12">
              <!-- IFRN -->
              <div class="d-flex flex-column ga-2">
                <span class="text-body-2 text-white font-weight-bold">IFRN</span>
                <a
                  href="https://portal.ifrn.edu.br/"
                  class="text-body-2 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Site</a
                >
              </div>
              <!-- CT Mineral -->
              <div class="d-flex flex-column ga-2">
                <span class="text-body-2 text-white font-weight-bold">CT MINERAL</span>
                <router-link to="/sobre" class="text-body-2 text-white">Sobre</router-link>
                <router-link to="/integrantes" class="text-body-2 text-white"
                  >Integrantes</router-link
                >
                <a
                  href="https://portal.ifrn.edu.br/institucional/polo-de-inovacao-currais-novos/noticias/"
                  class="text-body-2 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Notícias</a
                >
                <router-link to="/projetos" class="text-body-2 text-white">Projetos</router-link>
              </div>
            </v-col>
            <!-- Contatos -->
            <v-col cols="12" md="auto" class="d-flex flex-column ga-6 ga-md-8 mt-6 mt-md-0">
              <!-- E-mail -->
              <div class="d-flex flex-column ga-2">
                <span class="text-body-2 text-white font-weight-bold">E-MAIL:</span>
                <a href="#" class="text-body-2 text-white">ctmineral@email.com</a>
              </div>
              <!-- Telefone -->
              <div class="d-flex flex-column ga-2">
                <span class="text-body-2 text-white font-weight-bold">TELEFONE:</span>
                <a href="#" class="text-body-2 text-white">+55 (84) 9 9999-9999</a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-container fluid class="bg-teal-darken-3">
    <v-row>
      <v-col cols="12" class="d-flex flex-column text-center py-2">
        <hr class="text-white h-50 border-none">
        <span class="text-caption text-white">&copy; {{ currentYear }} Centro de Tecnologia Mineral. Todos os direitos reservados.</span>
        <span class="text-caption text-white">Feito por Jardson Alan Vieira da Silva</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.divider {
  border-color: white;
  opacity: 1;
}

a {
  text-decoration: none;
}
</style>
