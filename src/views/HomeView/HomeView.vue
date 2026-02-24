<script setup lang="ts">
  import { ref, defineAsyncComponent } from 'vue';
  import WelcomeView from './SectionViews/WelcomeView.vue';
  const MembersView = defineAsyncComponent(() => import('./SectionViews/MembersView.vue'));
  const ServicesView = defineAsyncComponent(() => import('./SectionViews/ServicesView.vue'));
  const LocationView = defineAsyncComponent(() => import('./SectionViews/LocationView.vue'));
  const CompaniesView = defineAsyncComponent(() => import('./SectionViews/CompaniesView.vue'));

  const showMembers = ref(false)
  const showServices = ref(false)
  const showLocation = ref(false)
  const showCompanies = ref(false)

  function onIntersectMembers(isIntersecting: boolean) {
    if (isIntersecting) {
      showMembers.value = true
    }
  }

  function onIntersectServices(isIntersecting: boolean) {
    if (isIntersecting) {
      showServices.value = true
    }
  }

  function onIntersectLocation(isIntersecting: boolean) {
    if (isIntersecting) {
      showLocation.value = true
    }
  }

  function onIntersectCompanies(isIntersecting: boolean) {
    if (isIntersecting) {
      showCompanies.value = true
    }
  }
</script>

<template>
  <section class="section welcome">
    <WelcomeView />
  </section>

  <section class="section members" v-intersect="onIntersectMembers">
    <MembersView v-if="showMembers" />
  </section>

  <section class="section services" v-intersect="onIntersectServices">
    <ServicesView v-if="showServices" />
  </section>

  <section class="section location" v-intersect="onIntersectLocation">
    <LocationView v-if="showLocation" />
  </section>

  <section class="section companies" v-intersect="onIntersectCompanies">
    <CompaniesView v-if="showCompanies" />
  </section>
</template>

<style scoped>
.section {
  width: 100%;
}

.welcome {
  min-height: calc(100vh - 384px);
}

.members {
  min-height: 600px;
}

.services {
  min-height: 700px;
}

.location {
  min-height: 500px;
}

.companies {
  min-height: 200px;
}
</style>
