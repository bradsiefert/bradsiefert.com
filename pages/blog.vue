<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const queryBlog: QueryBuilderParams = {
  path: '/blog', sort: { date: -1 }
}
definePageMeta({
  documentDriven: false
})
useHead({
  title: 'Blog'
})
</script>

<template>
  <div class="container skinny-contain">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <ul class="list-inline float-end small fw-bold mt-2">
          <li class="list-inline-item"><a href="/blog/feed.xml">RSS Feed</a></li>
        </ul>

        <h1>Blog</h1>
        <p>A blog about design, development, productivity, and other things I can't stop thinking about.</p>

        <ContentList :query="queryBlog" v-slot="{ list }">
          <div class="box" v-for="blog in list" :key="blog._path">
            <figure>
              <NuxtLink :to="blog._path">
                <img class="img-fluid" :src="blog.head.image"/>
              </NuxtLink>
            </figure>
            <p class="blog-details">
              <time :datetime="blog.date">{{ blog.date }}</time>
            </p>
            <NuxtLink :to="blog._path">
              <h2 class="h1">{{ blog.title }}</h2>
            </NuxtLink>
            <p>{{ blog.description }}</p>
            <NuxtLink class="btn btn-outline-dark" :to="blog._path">
              Read Post &nbsp;➡️
            </NuxtLink>
          </div>
        </ContentList>

      </div>
    </div>
  </div>
</template>