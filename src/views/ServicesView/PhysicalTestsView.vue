<script setup lang="ts">
import ServicesPageLayoutComponent from '@/components/ServicesPageLayoutComponent.vue'

interface Service {
  id: number
  imagem: string
  nome: string
  descricao: string
}

const services: Service[] = []
</script>

<template>
  <ServicesPageLayoutComponent
    title="Classificação e Concentração Mineral"
    description="Ensaios e processos para avaliar propriedades dos materiais, classificar partículas e apoiar a definição de rotas de concentração mineral."
    :service-count="services.length"
  >
    <div>
      <span class="empty-pill">Em breve</span>
      <p class="coming-soon-message">
        Estamos preparando os serviços desta categoria. Logo eles estarão disponíveis aqui.
      </p>
    </div>
  </ServicesPageLayoutComponent>
</template>

<style scoped>
.coming-soon-message {
  margin: 0;
  max-width: 760px;
  padding: clamp(1.2rem, 2vw, 1.8rem) 0;
  color: #5f6d6a;
  font-size: 1.08rem;
  line-height: 1.7;
  text-align: left;
}

.empty-pill {
  display: inline-flex;
  padding: 0.42rem 0.8rem;
  border-radius: 999px;
  background: rgba(14, 84, 74, 0.09);
  color: #0e544a;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
