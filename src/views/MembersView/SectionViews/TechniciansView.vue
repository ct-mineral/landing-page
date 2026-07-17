<script lang="ts" setup>
  import { ref, computed } from 'vue'
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

  const currentPage = ref(1)
  const itemsPerPage = 5

  const totalPages = computed(() => {
    return Math.ceil(technicians.length / itemsPerPage)
  })

  const paginatedTechnicians = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return technicians.slice(startIndex, endIndex)
  })
</script>

<template>
  <v-window-item value="tecnicos">
    <v-row>
      <v-col v-for="technician in paginatedTechnicians" :key="technician.id" cols="12">
        <CardMembersComponent
          :nameMember="technician.name"
          :positionMember="technician.position"
          :descriptionMember="technician.description"
          :imageMember="technician.image"
          :linkedinMember="technician.linkedin"
          :lattesMember="technician.lattes"
        />
      </v-col>
      <v-col v-if="totalPages > 1" cols="12" class="d-flex justify-center mt-4">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          color="teal-darken-3"
          rounded="circle"
        />
      </v-col>
    </v-row>
  </v-window-item>
</template>
