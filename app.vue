<template>
  <header>
    <navbar />
  </header>

  <darkmodeonly />
  <main>
    <NuxtPage/>
  </main>

  <footie />
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `Brad Siefert / ${titleChunk}`: 'Brad Siefert / UX Designer & Photographer';
    }
  }),
  useServerSeoMeta({
    description: 'Design portfolio and personal blog of Chicago-based Design Technologist and photographer, Brad Siefert.',
    ogTitle: 'Brad Siefert / UX Designer & Photographer',
    ogDescription: 'Design portfolio and personal blog of Chicago-based Design Technologist and photographer, Brad Siefert.',
    ogImage: 'https://bradsiefert.com/sharing.jpg',
    twitterCard: 'summary_large_image'
  })
</script>