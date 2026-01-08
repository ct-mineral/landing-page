<script lang="ts" setup>
  import CardMembersComponent from '@/components/CardMembersComponent.vue';

  const directors = [
    {
      id: 1,
      name: 'Diretores',
      position: 'Cargo do Diretor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique mi nec leo elementum laoreet. Aenean condimentum libero dui, id feugiat elit euismod eget.',
      image: 'https://via.placeholder.com/180',
      linkedin: '#',
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
