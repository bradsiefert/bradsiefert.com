<template>
  <div class="container wide-contain">
    <div class="row">
      <div class="col-12">
      <div class="breadcrumb gap-xs">
        <NuxtLink to="/">Home</NuxtLink> / About
        </div>
      </div>

      <h1>About</h1>
      <div class="col-xl-8 col-lg-7">
        <article class="lead">
          <p>
            Hi, I’m Brad. I’m a Product Designer and Design Technologist experienced in designing web apps, mobile apps, and design systems. I’m fluent in both Figma and code. I love working with both designers and engineers to bridge the gap between design intent and production reality.  
          </p>
          <p>
            I value elegance, clarity, and efficiency in my designs. Lately, I’ve focused on building design systems that make products more robust, consistent, and accessible. People describe my work as meticulous and hyper-organized but approachable and collaborative. I name all my layers and auto all the layouts.
          </p>
          <p>
            Photography is a huge part of my life. Each year I take around 25K photos, exploring everything from portraits and street photography to landscapes and long exposures. I love yoga, the Enneagram, Chelsea Football Club, the Chicago Bears, instant film cameras, and logging films in Letterboxd. I live in Chicago’s East Garfield Park neighborhood with my daughter and our dog Coco.
          </p>
        </article>

        <div class="jobs mb-2xl">
          <div class="d-sm-flex flex-sm-row justify-content-between align-items-center mb-sm">
            <div class="fs-lg-semibold my-sm">Previously:</div>
            <img
              style="max-width: 88px;"
              class="my-sm mx-xs"
              src="~/assets/images/govos-logo-light.svg"
              alt="Logo for GovOS">
            <img
              style="max-width: 108px;"
              class="my-sm mx-xs"
              src="~/assets/images/nielsen-logo-light.svg"
              alt="Logo for Nielsen">
            <img
              style="max-width: 136px;"
              class="my-sm mx-xs"
              src="~/assets/images/earlybird-logo-dark.svg"
              alt="Logo for Earlybird">
            <img
              style="max-width: 80px;"
              class="my-sm mx-xs d-none d-sm-block"
              src="~/assets/images/dose.svg"
              alt="Logo for Dose aka Spartz">
          </div>
          <a target="_blank" class="btn btn-outline-dark" href="files/Brad-Siefert-Resume.pdf">
              Download Resume &nbsp;↘
            </a>
        </div>
      </div>

      <div class="col-xl-4 col-lg-5">
        <img class="img-fluid" src="@/assets/images/photo-bradsiefert-in-puertorico.jpg" alt="Photo of Brad Siefert" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  documentDriven: false
})
useHead({
  title: 'About'
})
</script>