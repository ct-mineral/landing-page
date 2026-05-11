<script lang="ts" setup>
  import PoloView from './SectionViews/PoloView.vue';
  import VideoView from './SectionViews/VideoView.vue';
  import HistoryView from './SectionViews/HistoryView.vue';
  import StructureView from './SectionViews/StructureView.vue';
</script>

<template>
  <section>
    <PoloView />
  </section>
  <section>
    <VideoView />
  </section>
  <section>
    <HistoryView />
  </section>
  <section>
    <StructureView />
  </section>
</template>

<style scoped>
section {
  width: 100%;
  min-height: 120px;
}
</style>
