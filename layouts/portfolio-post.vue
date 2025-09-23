<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-lg-12 portfolio-post">
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
// Use Nuxt Content's document-driven approach to get the title
// This works with document-driven pages without interfering with content rendering
const route = useRoute()

// Get the current document using the route path
const { data: document } = await useAsyncData('current-document', () => {
  return queryContent(route.path).findOne()
})

// Extract title from document frontmatter
const pageTitle = computed(() => {
  return document.value?.title || 'Portfolio Post'
})
</script>
