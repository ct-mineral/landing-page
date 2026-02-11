<script setup lang="ts">
  import WelcomeView from './SectionViews/WelcomeView.vue';
  import MembersView from './SectionViews/MembersView.vue';
  import ServicesView from './SectionViews/ServicesView.vue';
  import LocationView from './SectionViews/LocationView.vue';
  import CompaniesView from './SectionViews/CompaniesView.vue';
</script>

<template>
  <section class="section welcome">
    <WelcomeView />
  </section>

  <section class="section members">
    <MembersView />
  </section>

  <section class="section services">
    <ServicesView />
  </section>

  <section class="section location">
    <LocationView />
  </section>

  <section class="section companies">
    <CompaniesView />
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
