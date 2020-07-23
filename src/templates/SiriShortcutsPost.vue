<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <div class="post-header mb-12 md:mb-20">
        <h1
          class="page-title text-3xl md:text-center md:text-5xl lg:text-6xl"
          v-html="$page.siriShortcuts.title"
        ></h1>
        <div class="text-sm md:text-base text-gray-600 flex justify-center">
          <time :datetime="$page.siriShortcuts.datetime">{{ $page.siriShortcuts.humanTime }}</time>
        </div>
        <figure class="mt-10 md:mt-20">
          <g-image :alt="$page.siriShortcuts.image_caption" :src="$page.siriShortcuts.image" />
          <figcaption
            class="text-center text-sm italic text-gray-600 mt-4"
          >{{ $page.siriShortcuts.image_caption }}</figcaption>
        </figure>
      </div>

      <div class="content post md:px-16">
        <!-- <p v-html="$page.siriShortcuts.excerpt"></p> -->
        <div v-html="$page.siriShortcuts.content"></div>
      </div>

    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    siriShortcuts(id: $id) {
      title
      path
      image(width:768)
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
      title: this.$page.siriShortcuts.title
    };
  }
};
</script>
