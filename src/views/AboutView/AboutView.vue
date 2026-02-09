<script lang="ts" setup>
  import PoloView from './SectionViews/PoloView.vue';
  import VideoView from './SectionViews/VideoView.vue';
  import HistoryView from './SectionViews/HistoryView.vue';
  import StructureView from './SectionViews/StructureView.vue';
</script>

<template>
  <section class="section polo">
    <PoloView />
  </section>
  <section class="section video">
    <VideoView />
  </section>
  <section class="section history">
    <HistoryView />
  </section>
  <section class="section structure">
    <StructureView />
  </section>
</template>

<style scoped>
.section {
  width: 100%;
}

.polo {
  min-height: calc(100vh - 256px);
}

.video {
  min-height: 600px;
}

.history {
  min-height: 700px;
}

.structure {
  min-height: 500px;
}
</style>
