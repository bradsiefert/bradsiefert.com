<template>
  <div class="container skinny-contain portfolio-post">
    <div class="row">
      <div class="col-lg-12">
        <div class="breadcrumb gap-xs">
          <NuxtLink to="/">Home</NuxtLink> / 
          <NuxtLink to="/portfolio">Portfolio</NuxtLink> / 
          <span>{{ pageTitle }}</span>
        </div>

        <article class="pt-3">
          <slot />
        </article>

        <div class="divider mt-5"></div>
      </div>
    </div>
  </div>
  <!--The only difference between these single layout files is the breadcrumbs because I couldn't figure out how to create a single file and then dynamically link back to the content type I wanted to. I also couldn't figure out how to display content from the markdown file inside of this layout page outside of the slot.-->
</template>

<script setup>
// Use Nuxt Content v3 queryCollection API to get the title
const route = useRoute()

// Get the current document using the route path
const { data: document, error } = await useAsyncData(`portfolio-layout-${route.path}`, () => {
  return queryCollection('portfolio').path(route.path).first()
})

// Extract title from document frontmatter with error handling
const pageTitle = computed(() => {
  if (error.value) {
    return 'Portfolio Post'
  }
  return document.value?.title || 'Portfolio Post'
})
</script>
