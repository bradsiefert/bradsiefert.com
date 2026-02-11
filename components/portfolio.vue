<script setup lang="ts">
// Fetch portfolio items using Content v3 queryCollection API
const { data: portfolioItems } = await useAsyncData('portfolio-list', () => {
  return queryCollection('portfolio')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
})
import { PhLink } from "@phosphor-icons/vue";
</script>

<template>
  <div class="case-study govos">
    <div class="container wide-contain">
      <h2 class="mb-lg lh-xs">
        <span class="fs-xl-regular">Case Study / </span>
        <NuxtLink to="/case-studies/govos-design-system" class="text-decoration-none">
          <span class="fs-xl-bold">GovOS Design System</span>
          <PhLink :size="16" weight="bold" class="ms-1" />
        </NuxtLink>
      </h2>
      <NuxtLink to="/case-studies/govos-design-system">
        <img class="govos-components img-fluid" src="@/assets/images/govos-design-system-casestudy-light.webp" alt="GovOS Design System UI Components"/>
      </NuxtLink>
    </div>
  </div>

  <!-- <div class="case-study neutral">
    <div class="container wide-contain">
      <h2 class="mb-lg lh-xs">
        <span class="fs-xl-regular">Case Study / </span>
        <span class="fs-xl-bold">Colorado's State Tax Portal</span>
        <PhLink :size="16" weight="bold" class="ms-1" />
      </h2>
      <NuxtLink to="/case-studies/govos-design-system">
        <img class="govos-components img-fluid" style="opacity: 0.1;" src="@/assets/images/govos-design-system-casestudy-light.webp" alt="GovOS Design System UI Components"/>
      </NuxtLink>
    </div>
  </div> -->

  <div class="case-study nielsen">
    <div class="container wide-contain">
      <h2 class="mb-lg lh-xs">
        <span class="fs-xl-regular">Case Study / </span>
        <NuxtLink to="/case-studies/nielsen-global-design-system" class="text-decoration-none">
          <span class="fs-xl-bold">Nielsen Global Design System</span>
          <PhLink :size="16" weight="bold" class="ms-1" />
        </NuxtLink>
      </h2>
      <NuxtLink to="/case-studies/nielsen-global-design-system">
        <img class="img-fluid" src="@/assets/images/nielsen-design-system-casestudy-light.webp" alt="Nielsen Global Design System UI Components"/>
      </NuxtLink>
    </div>
  </div>

  <!-- <div class="case-study neutral">
    <div class="container wide-contain">
      <h2 class="mb-lg lh-xs">
        <span class="fs-xl-regular">Case Study / </span>
        <span class="fs-xl-bold">Nielsen One</span>
        <PhLink :size="16" weight="bold" class="ms-1" />
      </h2>
      <NuxtLink to="/case-studies/govos-design-system">
        <img class="govos-components img-fluid" style="opacity: 0.1;" src="@/assets/images/govos-design-system-casestudy-light.webp" alt="GovOS Design System UI Components"/>
      </NuxtLink>
    </div>
  </div> -->

  <div class="container wide-contain">
    <div class="row">
      <div class="col-lg-12">
        <div class="row g-2 mt-4 mb-5">
          <h2 class="fs-2xl-semibold mb-0">Side Projects</h2>
          <p class="fs-lg-regular mt-2xs mb-sm">I'm always making things. These are some of my favorites.</p>
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