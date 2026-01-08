<script lang="ts" setup>
  import CardMembersComponent from '@/components/CardMembersComponent.vue';

  const technicians = [
    {
      id: 1,
      name: 'Técnicos',
      position: 'Cargo do Técnico',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique mi nec leo elementum laoreet. Aenean condimentum libero dui, id feugiat elit euismod eget.',
      image: 'https://via.placeholder.com/180',
      linkedin: '#',
      lattes: '#'
    }
  ]
</script>

<template>
  <v-window-item value="tecnicos">
    <v-row>
      <v-col v-for="technician in technicians" :key="technician.id" cols="12">
        <CardMembersComponent
          :nameMember="technician.name"
          :positionMember="technician.position"
          :descriptionMember="technician.description"
          :imageMember="technician.image"
          :linkedinMember="technician.linkedin"
          :lattesMember="technician.lattes"
        />
      </v-col>
    </v-row>
  </v-window-item>
</template>

<style scoped></style>
