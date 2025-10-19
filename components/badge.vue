<template>
  <div class="badge" :class="`badge-${variant}`">
    {{ label }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  variant?: 'neutral' | 'primary' | 'highlight'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'neutral'
})
</script>

<style>
.badge {
  border-radius: var(--border-radius-xs);
  padding: var(--spacing-2xs) var(--spacing-xs);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-families-default);
  font-size: var(--font-size-2xs);
  font-weight: var(--font-weights-semibold);
  line-height: var(--line-heights-2xs);
  color: var(--color-neutral-darkest);
  letter-spacing: var(--letter-spacing-2xs);
  white-space: nowrap;
}

.badge-neutral {
  background-color: var(--color-neutral-200-alpha);
}

.badge-primary {
  background-color: var(--color-primary-200);
}

.badge-highlight {
  background-color: var(--color-highlight-200);
}

body[dark-mode] {
  .badge {
    background-color: var(--color-neutral-800);
    color: var(--color-neutral-lightest);
  }

  .badge-neutral {
    background-color: var(--color-neutral-800);
    color: var(--color-neutral-lightest);
  }

  .badge-text {
    color: var(--color-neutral-200);
  }

  .badge-neutral {
    background-color: var(--color-neutral-800);
  }

  .badge-primary {
    color: var(--color-primary-200);
    background-color: var(--color-primary-800);
  }

  .badge-highlight {
    color: var(--color-highlight-100);
    background-color: var(--color-highlight-800);
  }
}
</style>