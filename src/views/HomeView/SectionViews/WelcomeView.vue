<script setup lang="ts">
import { ref } from 'vue'

interface SlideItem {
  title: string
  color: string
}

const slides = ref<SlideItem[]>([
  { title: 'Dashboard', color: 'blue darken-2' },
  { title: 'Usuários', color: 'green darken-2' },
  { title: 'Relatórios', color: 'purple darken-2' },
])
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <div class="d-flex flex-column">
          <img
            src="/images/logos/logo_ctm.svg"
            alt="CT Mineral Logo"
            class="mb-2"
            width="45"
            height="45"
            decoding="async"
          />

          <div class="d-flex flex-column ga-2">
            <h1 class="text-body-1 text-md-h6">Bem-vindos ao</h1>
            <h2 class="text-h4 text-md-h3 font-weight-bold">CT Mineral</h2>
            <h3 class="text-body-1 text-md-h6">
              Centro de Referência em Tecnologia Mineral do IFRN
            </h3>
            <p class="text-caption text-md-body-2">
              Somos uma Unidade EMBRAPII credenciada para atuar na área de Tecnologias em Mineração, com foco nas áreas de Exploração Mineral especializada em Minerais Portadores do Futuro e Soluções Tecnológicas Inovadoras em Geometalurgia.
            </p>
          </div>

          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-btn
                v-bind="props"
                :class="isHovering ? 'bg-teal-darken-3' : 'bg-orange-darken-3'"
                class="text-caption text-md-subtitle-1 text-white mt-4 w-75"
                to="/sobre"
                large
                rounded
              >
                Conheça mais sobre o CT Mineral
              </v-btn>
            </template>
          </v-hover>

          <div class="d-flex ga-12 align-center mt-6">
            <a href="https://www.ifrn.edu.br" target="_blank" rel="noopener">
              <img
                src="/images/logos/empresas/logo_ifrn.svg"
                alt="IFRN"
                class="responsive-logo"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a href="https://www.embrapii.org.br" target="_blank" rel="noopener">
              <img
                src="/images/logos/empresas/embrapii.svg"
                alt="EMBRAPII"
                class="responsive-logo"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </v-col>

      <!-- Imagens -->
      <v-col cols="12" md="6" class="d-none d-md-flex justify-center align-center">
        <v-carousel height="400" show-arrows="hover" cycle hide-delimiters class="rounded-lg">
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="slide.color" height="100%">
              <div class="d-flex fill-height justify-center align-center">
                <div class="text-h2">{{ slide.title }} Slide</div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.responsive-logo {
  height: 50px;
}

@media (max-width: 960px) {
  .responsive-logo {
    height: 40px;
  }
}
</style>
