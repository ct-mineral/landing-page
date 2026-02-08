<script setup lang="ts">
import TitleSectionComponent from '@/components/TitleSectionComponent.vue'

const empresas = [
  { nome: 'IFRN', logo: '/images/logo_campus_cn.png' },
  { nome: 'IFRN', logo: '/images/logo_campus_cn.png' },
  { nome: 'IFRN', logo: '/images/logo_campus_cn.png' },
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex flex-column ga-2">
        <TitleSectionComponent
          icon-props="mdi-home-city"
          title-props="Empresas Contratantes"
          subtitle-props="Algumas das empresas que confiam no nosso trabalho"
        />
        <hr />
      </v-col>

      <v-col v-for="(empresa, index) in empresas" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-card class="logo-card d-flex align-center justify-center rounded-lg" height="120">
          <v-img
            :src="empresa.logo"
            :alt="empresa.nome"
            contain
            max-width="80%"
            class="logo-img"
            loading="lazy"
            decoding="async"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.logo-img {
  filter: grayscale(100%) opacity(0.6);
  transition: all 0.4s ease-in-out;
}

.logo-card:hover {
  cursor: pointer;
}

.logo-card:hover .logo-img {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.05);
}
</style>
