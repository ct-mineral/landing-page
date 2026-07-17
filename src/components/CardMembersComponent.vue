<script lang="ts" setup>
import { computed } from 'vue'
import { mdiLinkedin } from '@mdi/js'

const props = defineProps<{
  nameMember?: string
  positionMember?: string
  descriptionMember?: string
  imageMember?: string
  linkedinMember?: string
  lattesMember?: string
}>()

const showLinkedin = computed(() => {
  const linkedin = props.linkedinMember
  return !!linkedin && linkedin.trim() !== '' && linkedin !== '#'
})

const showLattes = computed(() => {
  const lattes = props.lattesMember
  return !!lattes && lattes.trim() !== '' && lattes !== '#'
})
</script>

<template>
  <article class="member-card">
    <div class="member-photo">
      <img :src="imageMember" :alt="nameMember" loading="lazy" decoding="async" />
    </div>

    <div class="member-content">
      <div>
        <span class="member-position">{{ positionMember }}</span>
        <h3>{{ nameMember }}</h3>
        <p>{{ descriptionMember }}</p>
      </div>

      <div v-if="showLinkedin || showLattes" class="member-links">
        <a
          v-if="showLinkedin"
          :href="linkedinMember"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir perfil no LinkedIn"
        >
          <v-icon :icon="mdiLinkedin" size="20" />
          LinkedIn
        </a>
        <a
          v-if="showLattes"
          :href="lattesMember"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir currículo Lattes"
        >
          <img src="/images/logos/lattes.svg" alt="" width="16" height="20" />
          Currículo Lattes
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.member-card {
  display: grid;
  grid-template-columns: 230px 1fr;
  overflow: hidden;
  margin-bottom: 22px;
  border: 1px solid var(--line, #dce5e2);
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0 12px 35px rgba(25, 64, 57, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.member-card:hover {
  border-color: rgba(14, 84, 74, 0.3);
  box-shadow: 0 20px 45px rgba(25, 64, 57, 0.1);
  transform: translateY(-2px);
}

.member-photo {
  min-height: 280px;
  background: var(--green-soft, #eaf4f2);
}

.member-photo img {
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
  object-position: top center;
}

.member-content {
  display: flex;
  min-width: 0;
  padding: 30px 34px 24px;
  flex-direction: column;
  justify-content: space-between;
}

.member-position {
  display: block;
  margin-bottom: 8px;
  color: var(--orange, #e65100);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.member-content h3 {
  margin: 0 0 14px;
  color: var(--ink, #1d2927);
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  letter-spacing: -0.015em;
  line-height: 1.25;
}

.member-content p {
  margin: 0;
  color: var(--muted, #5f6d6a);
  font-size: 0.9rem;
  line-height: 1.72;
}

.member-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid var(--line, #dce5e2);
}

.member-links a {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 38px;
  padding: 0 13px;
  border: 1px solid var(--line, #dce5e2);
  border-radius: 4px;
  color: var(--green, #0e544a);
  font-size: 0.76rem;
  font-weight: 800;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.member-links a:hover {
  border-color: var(--green, #0e544a);
  background: var(--green-soft, #eaf4f2);
}

@media (max-width: 700px) {
  .member-card {
    grid-template-columns: 1fr;
  }

  .member-photo {
    height: 360px;
    min-height: 0;
  }

  .member-photo img {
    min-height: 0;
  }

  .member-content {
    padding: 26px 24px 22px;
  }
}

@media (max-width: 420px) {
  .member-photo {
    height: 300px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .member-card,
  .member-links a {
    transition: none;
  }
}
</style>
