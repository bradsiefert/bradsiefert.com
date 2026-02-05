<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(`siri-shortcuts-${route.path}`, () => {
  return queryCollection('siriShortcuts').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Shortcut not found' })
}

// Set page title from frontmatter
useHead({
  title: page.value.title
})
</script>

<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-lg-12">
        <div class="breadcrumb gap-xs">
          <NuxtLink to="/">Home</NuxtLink> / 
          <span>Siri Shortcuts</span> / 
          <span>{{ page?.title }}</span>
        </div>

        <article class="pt-3">
          <ContentRenderer v-if="page" :value="page" />
        </article>

        <div class="divider mt-5"></div>
      </div>
    </div>
  </div>
</template>
