<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const queryPortfolio: QueryBuilderParams = {
  path: '/portfolio', sort: [{ date: -1 }]
}
definePageMeta({
  documentDriven: false
})
useHead({
  title: 'Design Portfolio'
})
</script>

<template>
  <div class="case-study govos">
    <div class="container wide-contain">
      <h2 class="mb-lg lh-xs"><span class="fs-xl-regular">Case Study /</span> <span class="fs-xl-bold">GovOS Design System</span></h2>
      <NuxtLink to="/case-studies/govos-design-system">
        <img class="govos-components img-fluid" src="@/assets/images/govos-design-system-casestudy-light.webp" alt="GovOS Design System UI Components"/>
      </NuxtLink>
    </div>
  </div>

  <div class="case-study nielsen">
    <div class="container wide-contain">
      <h2 class="mb-lg lh-xs"><span class="fs-xl-regular">Case Study /</span> <span class="fs-xl-bold">Nielsen Global Design System</span></h2>
      <NuxtLink to="/case-studies/nielsen-global-design-system">
        <img class="img-fluid" src="@/assets/images/nielsen-design-system-casestudy-light.webp" alt="Nielsen Global Design System UI Components"/>
      </NuxtLink>
    </div>
  </div>

  <div class="container wide-contain">
    <div class="row">
      <div class="col-lg-12">
        <div class="row g-2 mt-4 mb-5">
          <h2 class="fs-xl-semibold">Select UI/UX Work</h2>
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
</template>