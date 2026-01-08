<script lang="ts" setup>
  import CardMembersComponent from '@/components/CardMembersComponent.vue';

  const researchers = [
    {
      id: 1,
      name: 'Pesquisadores',
      position: 'Cargo do Pesquisador',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique mi nec leo elementum laoreet. Aenean condimentum libero dui, id feugiat elit euismod eget.',
      image: 'https://via.placeholder.com/180',
      linkedin: '#',
      lattes: '#'
    }
  ]
</script>

<template>
  <v-window-item value="pesquisadores">
    <v-row>
      <v-col v-for="researcher in researchers" :key="researcher.id" cols="12">
        <CardMembersComponent
          :nameMember="researcher.name"
          :positionMember="researcher.position"
          :descriptionMember="researcher.description"
          :imageMember="researcher.image"
          :linkedinMember="researcher.linkedin"
          :lattesMember="researcher.lattes"
        />
      </v-col>
    </v-row>
  </v-window-item>
</template>

<style scoped></style>
