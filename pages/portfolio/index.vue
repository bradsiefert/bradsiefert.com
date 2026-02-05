<script setup lang="ts">
useHead({
  title: 'Design Portfolio'
})
</script>

<template>
  <div>
    <div class="container wide-contain mb-3xl">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb gap-xs">
            <NuxtLink to="/">Home</NuxtLink> / Portfolio
          </div>

          <h1 class="mb-xs">Design Portfolio</h1>
          <p class="fs-xl-regular">Select work in product design, design systems, and front-end craft.</p>
        </div>
      </div>
    </div>

    <portfolio />
  </div>
</template>