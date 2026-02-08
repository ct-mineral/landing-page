<script setup lang="ts">
  import { ref } from 'vue'

  interface SlideItem {
    title: string
    color: string
  }

  const slides = ref<SlideItem[]>([
    { title: "Dashboard", color: "blue darken-2" },
    { title: "Usuários", color: "green darken-2" },
    { title: "Relatórios", color: "purple darken-2" }
  ])
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <div class="d-flex flex-column">
          <img
            src="/images/logo.png"
            alt="CT Mineral Logo"
            class="mb-2 logo"
            width="80"
            height="80"
            decoding="async"
            fetchpriority="high"
          />

          <div class="d-flex flex-column ga-2">
            <h1 class="text-body-1 text-md-h6">Bem-vindos ao</h1>
            <h2 class="text-h4 text-md-h3 font-weight-bold">CT Mineral</h2>
            <h3 class="text-body-1 text-md-h6">Centro de Referência em Tecnologia Mineral do IFRN</h3>
            <p class="text-caption text-md-body-2">
              Lorem ipsum dolor sit amet. Aut eaque mollitia et earum vero qui maiores voluptas et
              quisquam facilis. Aut facere dolores sit suscipit reprehenderit sit asperiores ipsa qui
              similique ducimus aut sapiente aliquid. Sit expedita quod est quas soluta et nihil
              facilis aut fuga ullam et quia laudantium.
            </p>
          </div>

          <v-btn class="text-caption text-md-subtitle-1 text-white mt-4 button-about w-75" to="/sobre" large rounded>
            Conheça mais sobre o CT Mineral
          </v-btn>

          <img
            class="mt-2 parceiras"
            src="/images/main-images.svg"
            alt="Empresas parceiras"
            loading="lazy"
            decoding="async"
          />
        </div>
      </v-col>

      <!-- Imagens -->
      <v-col cols="12" md="6" class="d-none d-md-flex justify-center align-center">
        <v-carousel
          height="400"
          show-arrows="hover"
          cycle
          hide-delimiters
          class="rounded-lg"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="slide.color"
              height="100%"
            >
              <div class="d-flex fill-height justify-center align-center">
                <div class="text-h2">
                  {{ slide.title }} Slide
                </div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.logo {
  width: 80px;
}

.button-about {
  background-color: #E48020;
}

.button-about:hover {
  background-color: #0E544A;
  transition: 0.3s ease;
}

.parceiras {
  width: 80%;
}
</style>
