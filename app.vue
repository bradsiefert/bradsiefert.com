<template>
  <header>
    <glass-navbar />
  </header>

  <main>
    <NuxtPage/>
  </main>

  <footie />
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `Brad Siefert / ${titleChunk}`: 'Brad Siefert / Product Designer & Design Technologist';
    }
  }),
  useServerSeoMeta({
    description: 'Design portfolio and personal blog of Chicago-based Design Technologist and photographer, Brad Siefert.',
    ogTitle: 'Brad Siefert / Product Designer & Design Technologist',
    ogDescription: 'Design portfolio and personal blog of Chicago-based Design Technologist and photographer, Brad Siefert.',
    ogImage: 'https://bradsiefert.com/sharing.jpg',
    twitterCard: 'summary_large_image'
  })
</script>