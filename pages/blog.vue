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
  <div class="container slim-contain">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="breadcrumb gap-xs">
          <NuxtLink to="/">Home</NuxtLink> / <span>Blog</span>
        </div>

        <h1>Blog</h1>
        <p class="mb-2xl">An occasional blog about things I can't stop thinking about.</p>

        <ContentList :query="queryBlog" v-slot="{ list }">
          <div class="blog d-flex flex-column gap-sm" v-for="blog in list" :key="blog._path">
            <figure>
              <NuxtLink :to="blog._path">
                <img class="img-fluid" :alt="blog.alt" :src="blog.head.image"/>
              </NuxtLink>
            </figure>
            <span class="fs-sm-regular"><time :datetime="blog.date">{{ blog.date }}</time></span>
            <NuxtLink :to="blog._path">
              <h2 class="h1 mb-0">{{ blog.title }}</h2>
            </NuxtLink>
            <p class="fs-md-regular mb-0">{{ blog.description }}</p>
            <hr class="divider mb-2xl">
          </div>
        </ContentList>

      </div>
    </div>
  </div>
</template>