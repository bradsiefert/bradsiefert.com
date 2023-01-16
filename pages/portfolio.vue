<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {
  path: '/blog', limit: 5, sort: { date: -1 }
}
</script>

<template>
  <div>
    <div class="container wide-contain">
      <div class="row">
        <div class="col-lg-12">

          <h1>Design Portfolio</h1>
          <p>Some of my design and front-end development work I'm proud to show off.</p>

          <ContentList :query="query" v-slot="{ list }">
            <div v-for="blog in list" :key="blog._path">
              <NuxtLink :to="blog._path"><h2>{{ blog.title }}</h2></NuxtLink>
              <p>{{ blog.description }}</p>
              <figure>
                <img class="img-fluid" :src="blog.cover_image"/>
              </figure>
            </div>
          </ContentList>

          <!--<h2 class="h3 mt-5">Case Studies</h2>-->
          <!--<NuxtLink to="/case-studies/highbeam-design-system">
            <img
              class="img-fluid rounded mb-3"
              src="@/assets/portfolio/case-study-highbeam.jpg"
              style="border: 1px solid #eeeeee;"
              quality="100"
            />
          </NuxtLink>

          <NuxtLink to="/case-studies/ux-methodology">
            <img
              class="img-fluid rounded"
              src="@/assets/portfolio/case-study-ux-methodology.jpg"
              style="border: 1px solid #eeeeee;"
              quality="100"
            />
          </NuxtLink>-->

          <!--<div class="row g-2 mt-4 mb-5">
            <h2 class="h3 mt-5 mb-0">Select UI/UX Work</h2>
            <div class="col-md-6 col-xl-4" v-for="entry in $page.allPortfolio.edges" :key="entry.node.id">
              <NuxtLink class="portfolio" :to="entry.node.path">
                <img
                  class="img-fluid rounded"
                  :src="entry.node.cover_image"
                  :alt="entry.node.title"
                  quality="88"
                />
              </NuxtLink>
            </div>
          </div>-->

        </div>
      </div>
    </div>
  </div>
</template>

