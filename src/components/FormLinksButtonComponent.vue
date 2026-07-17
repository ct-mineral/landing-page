<script setup lang="ts">
import { mdiArrowTopRight, mdiLink } from '@mdi/js'

defineProps<{
  label?: string
  description?: string
  link?: string
}>()
</script>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="form-link">
    <span class="form-icon">
      <v-icon :icon="mdiLink" size="22" />
    </span>
    <span class="form-copy">
      <small>{{ label }}</small>
      <strong>{{ description }}</strong>
      <span>Abrir formulário de inscrição</span>
    </span>
    <v-icon class="external-icon" :icon="mdiArrowTopRight" size="22" />
  </a>
</template>

<style scoped>
.form-link {
  display: grid;
  grid-template-columns: 52px 1fr 28px;
  gap: 18px;
  align-items: center;
  min-height: 128px;
  padding: 24px;
  border: 1px solid var(--line, #dce5e2);
  border-radius: 7px;
  background: #ffffff;
  color: var(--ink, #1d2927);
  text-decoration: none;
  box-shadow: 0 12px 35px rgba(25, 64, 57, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.form-link:hover {
  border-color: rgba(14, 84, 74, 0.34);
  box-shadow: 0 18px 42px rgba(25, 64, 57, 0.11);
  transform: translateY(-2px);
}

.form-icon {
  display: grid;
  width: 52px;
  height: 52px;
  border-radius: 5px;
  place-items: center;
  background: var(--green-soft, #eaf4f2);
  color: var(--green, #0e544a);
}

.form-copy,
.form-copy small,
.form-copy strong,
.form-copy span {
  display: block;
}

.form-copy small {
  margin-bottom: 5px;
  color: var(--orange, #e65100);
  font-size: 0.67rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.form-copy strong {
  margin-bottom: 6px;
  font-size: 0.95rem;
  line-height: 1.4;
}

.form-copy span {
  color: var(--muted, #5f6d6a);
  font-size: 0.75rem;
}

.external-icon {
  color: var(--green, #0e544a);
  transition: transform 0.2s ease;
}

.form-link:hover .external-icon {
  transform: translate(2px, -2px);
}

@media (max-width: 520px) {
  .form-link {
    grid-template-columns: 44px 1fr 22px;
    gap: 12px;
    padding: 19px 17px;
  }

  .form-icon {
    width: 44px;
    height: 44px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .form-link,
  .external-icon {
    transition: none;
  }
}
</style>
