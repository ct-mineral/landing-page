<script setup lang="ts">
import { mdiHomeCity } from '@mdi/js'
import TitleSectionComponent from '@/components/TitleSectionComponent.vue'

const empresas = [
  { nome: 'Borborema', logo: '/images/logos/empresas/borborema.svg', width: '200px' },
  { nome: 'EMBRAPII', logo: '/images/logos/empresas/embrapii.svg', width: '200px' },
  { nome: 'Fortescue', logo: '/images/logos/empresas/fortescue.svg', width: '200px' },
  { nome: 'IFRN', logo: '/images/logos/empresas/logo_ifrn.svg', width: '200px' },
  { nome: 'IMC Rare', logo: '/images/logos/empresas/imc_rare.svg', width: '200px' },
  { nome: 'KIT Máquinas', logo: '/images/logos/empresas/kit_maquinas.svg', width: '200px' },
  { nome: 'REX', logo: '/images/logos/empresas/rex.svg', width: '80px' },
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex flex-column ga-2">
        <TitleSectionComponent
          :icon-props="mdiHomeCity"
          title-props="Empresas contratantes"
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
            :max-width="empresa.width"
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
