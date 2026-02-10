<script lang="ts" setup>
  import CardMembersComponent from '@/components/CardMembersComponent.vue';

  const directors = [
    {
      id: 1,
      name: 'Elias Nunes',
      position: 'Diretor de Planejamento e Negócios',
      description:
        'Diretor responsável pelo planejamento estratégico e desenvolvimento de novos negócios na empresa. Com vasta experiência no setor, lidera iniciativas que impulsionam o crescimento sustentável e a inovação.',
      image: '/images/members/directors/elias.avif',
      linkedin: 'https://www.linkedin.com/in/elias-nunes/',
      lattes: '#'
    }
  ]
</script>

<template>
  <v-window-item value="diretores">
    <v-row>
      <v-col v-for="director in directors" :key="director.id" cols="12">
        <CardMembersComponent
          :nameMember="director.name"
          :positionMember="director.position"
          :descriptionMember="director.description"
          :imageMember="director.image"
          :linkedinMember="director.linkedin"
          :lattesMember="director.lattes"
        />
      </v-col>
    </v-row>
  </v-window-item>
</template>

<style scoped></style>
