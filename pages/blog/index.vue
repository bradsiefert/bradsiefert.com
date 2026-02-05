<script setup lang="ts">
// Fetch blog posts using Content v3 queryCollection API
const { data: blogPosts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
})

useHead({
  title: 'Blog'
})

// Function to map tags to badge variants
const getVariantForTag = (tag: string): 'neutral' | 'primary' | 'highlight' => {
  switch (tag) {
    case 'Update':
      return 'highlight'
    case 'Side Project':
      return 'primary'
    case 'Download':
    case 'Article':
    case 'AI':
    default:
      return 'neutral'
  }
}
</script>

<template>
  <div class="container wide-contain">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="breadcrumb gap-xs">
          <NuxtLink to="/">Home</NuxtLink> / <span>Blog</span>
        </div>

        <h1>Blog</h1>
        <p class="fs-lg-regular mb-xl">An occasional blog showcasing things I've made or ideas I can't stop thinking about.</p>
        <div class="divider mb-0"></div>

        <div class="blog-card" v-for="blog in blogPosts" :key="blog.path">
          <template v-if="blog.head?.image">
            <NuxtLink :to="blog.path">
              <img 
                class="blog-image" 
                :alt="blog.alt" 
                :src="blog.head.image"
              />
            </NuxtLink>
          </template>
          <div class="blog-content">
            <div class="blog-meta">
              <div class="blog-badges">
                <Badge 
                  v-for="tag in blog.tags" 
                  :key="tag" 
                  :label="tag"
                  :variant="getVariantForTag(tag)"
                />
              </div>
              <time 
                class="blog-date" 
                :datetime="blog.date"
              >
                {{ blog.date }}
              </time>
            </div>
            <NuxtLink :to="blog.path" class="text-decoration-none">
              <h2 class="blog-title">
                {{ blog.title }}
              </h2>
            </NuxtLink>
            
            <p class="blog-description">
              {{ blog.description }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>