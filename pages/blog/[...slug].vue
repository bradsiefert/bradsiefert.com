<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(`blog-${route.path}`, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Blog post not found' })
}

// Set page title from frontmatter
useHead({
  title: page.value.title
})

// Apply layout from frontmatter (default to 'blog-post')
const layout = computed(() => page.value?.layout || 'blog-post')
</script>

<template>
  <NuxtLayout :name="layout">
    <ContentRenderer v-if="page" :value="page" />
  </NuxtLayout>
</template>
