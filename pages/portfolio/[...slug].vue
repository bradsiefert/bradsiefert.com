<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(`portfolio-${route.path}`, () => {
  return queryCollection('portfolio').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Portfolio item not found' })
}

// Set page title from frontmatter
useHead({
  title: page.value.title
})

// Apply layout from frontmatter (default to 'portfolio-post')
const layout = computed(() => (page.value?.layout || 'portfolio-post') as 'portfolio-post')
</script>

<template>
  <NuxtLayout :name="layout">
    <ContentRenderer v-if="page" :value="page" />
  </NuxtLayout>
</template>
