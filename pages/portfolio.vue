<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const queryPortfolio: QueryBuilderParams = {
  path: '/portfolio', sort: { date: -1 }
}
const queryCaseStudy: QueryBuilderParams = {
  path: '/case-studies', limit: 4, sort: { date: -1 }
}
definePageMeta({
  documentDriven: false
})
useHead({
  title: 'Design Portfolio'
})
</script>

<template>
  <div>
    <div class="container wide-contain">
      <div class="row">
        <div class="col-lg-12">

          <h1>Design Portfolio</h1>
          <p>Some design and development work I'm proud to show.</p>

          <h2 class="h4 mt-5 mb-5 text-uppercase">Case Studies</h2>
          <ContentList :query="queryCaseStudy" v-slot="{ list }">
            <div class="case-study" v-for="casestudies in list" :key="casestudies._path">
              <NuxtLink :to="casestudies._path">
                <h3 class="font-size-600 mt-3">{{ casestudies.title }}</h3>
              </NuxtLink>
              <figure>
                <NuxtLink :to="casestudies._path">
                  <img
                    class="img-fluid rounded"
                    :src="casestudies.cover_image"
                  />
                </NuxtLink>
              </figure>
            </div>
          </ContentList>

          <div class="row g-2 mt-4 mb-5">
            <h2 class="h4 mt-5 text-uppercase">Select UI/UX Work</h2>
            <ContentList :query="queryPortfolio" v-slot="{ list }">
              <div class="col-md-6 col-lg-4 col-xl-3" v-for="portfolio in list" :key="portfolio._path">
                <NuxtLink class="portfolio" :to="portfolio._path">
                  <img class="img-fluid rounded"
                    :src="portfolio.cover_image"
                    :alt="portfolio.title"
                  />
                </NuxtLink>
              </div>
            </ContentList>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>