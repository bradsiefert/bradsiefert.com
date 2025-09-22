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
          <div class="breadcrumb gap-xs">
            <NuxtLink to="/">Home</NuxtLink> / Portfolio
          </div>

          <h1 class="mb-xs">Design Portfolio</h1>
          <p class="fs-md-regular">Selected work in product design, design systems, and front-end craft.</p>

          <ContentList :query="queryCaseStudy" v-slot="{ list }">
            <div class="case-study" v-for="casestudies in list" :key="casestudies._path">
              <!-- <NuxtLink :to="casestudies._path">
                <h3 class="font-size-600 mt-3">{{ casestudies.title }}</h3>
              </NuxtLink> -->
              <figure>
                <NuxtLink :to="casestudies._path">
                  <img
                    class="img-fluid rounded"
                    :src="casestudies.head.image"
                    :alt="`Image of UI elements from `+casestudies.title"
                  />
                </NuxtLink>
              </figure>
            </div>
          </ContentList>

          <div class="row g-2 mt-4 mb-5">
            <ContentList :query="queryPortfolio" v-slot="{ list }">
              <div class="col-6 col-lg-4 col-xl-4" v-for="portfolio in list" :key="portfolio._path">
                <NuxtLink class="portfolio" :to="portfolio._path">
                  <img class="img-fluid rounded"
                    :src="portfolio.head.image"
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