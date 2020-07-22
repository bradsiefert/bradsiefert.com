<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <div class="post-header mb-12 md:mb-20">
        <h1
          class="page-title text-3xl md:text-center md:text-5xl lg:text-6xl"
          v-html="$page.portfolio.title"
        ></h1>
        <div class="text-sm md:text-base text-gray-600 flex justify-center">
          <p class="author">Brad</p>
          <p class="px-2">—</p>
          <time :datetime="$page.portfolio.datetime">{{ $page.portfolio.humanTime }}</time>
          <p class="px-2">—</p>
        </div>
        <figure class="mt-10 md:mt-20">
          <g-image :alt="$page.portfolio.image_caption" :src="$page.portfolio.image" />
          <figcaption
            class="text-center text-sm italic text-gray-600 mt-4"
          >{{ $page.portfolio.image_caption }}</figcaption>
        </figure>
      </div>

      <div class="content post md:px-16">

        <!-- <p v-html="$page.portfolio.excerpt"></p> -->

        <div v-html="$page.portfolio.content"></div>
      </div>

      
    </section>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
  portfolio(id: $id) {
      title
      path
      image(width:1200)
      image_caption
      excerpt
      content
      humanTime : created(format:"Do MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.portfolio.title
    };
  }
};
</script>
