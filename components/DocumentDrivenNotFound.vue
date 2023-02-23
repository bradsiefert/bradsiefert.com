<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col">
        <div class="breadcrumb">
          <div class="breadcrumb-item"><a title="Link back to home" href="/">Home</a></div>
          <div class="breadcrumb-item">404 Page</div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <img
          class="img-fluid mb-3"
          width="320"
          src="@/assets/images/clueless-my-bad.gif"
          alt="Gif from the movie Clueless of Cher saying My bad!"
        />
        <h1>Sorry, Page Not Found 😭</h1>
        <p>
          I'm sorry about this. If you'd let me know about this on <a target="_blank" href="https://mas.to/@bradsiefert">Mastodon</a>, I'd appreciate it.
        </p>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    documentDriven: false
  }),
  useHead({
    title: '404 Error!'
  })
</script>