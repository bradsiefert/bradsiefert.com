<script setup lang="ts">
// Fetch portfolio items using Content v3 queryCollection API
const { data: portfolioItems } = await useAsyncData('portfolio-list', () => {
  return queryCollection('portfolio')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
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
          <div class="col-6 col-lg-4 col-xl-4" v-for="portfolio in portfolioItems" :key="portfolio.path">
            <NuxtLink class="portfolio" :to="portfolio.path">
              <img class="img-fluid rounded"
                :src="portfolio.head?.image"
                :alt="portfolio.title"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>