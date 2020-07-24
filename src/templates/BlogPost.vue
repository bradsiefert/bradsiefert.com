<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <div class="post-header">
        <h1
          class="page-title text-3xl md:text-center md:text-5xl lg:text-6xl"
          v-html="$page.blog.title"
        ></h1>
        <div class="text-sm md:text-base text-gray-600 flex justify-center">
          <time :datetime="$page.blog.datetime">{{ $page.blog.humanTime }}</time>
          <p class="category">
            Posted in
            <g-link :to="$page.blog.category.path">{{ $page.blog.category.title }}</g-link>
          </p>
        </div>
        <figure class="">
          <g-image :src="$page.blog.cover_image" />
          <figcaption
            class="text-center text-sm italic text-gray-600 mt-4"
          >{{ $page.blog.image_caption }}</figcaption>
        </figure>
      </div>

      <div class="content post md:px-16">

        <p v-html="$page.blog.excerpt"></p>

        <div v-html="$page.blog.content"></div>

        <!-- <ul class="flex pt-8 border-t border-gray-100">
          <li class="mr-2" v-for="tag in $page.blog.tags" :key="tag.id">
            <g-link
              :to="tag.path"
              class="inline-block border border-pink-300 px-4 py-2 text-pink-500 text-xs font-semibold rounded hover:text-white hover:bg-pink-500 hover:border-pink-500"

            >{{ tag.title}}</g-link>
          </li>
        </ul> -->
      </div>


    </section>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
    blog(id: $id) {
      title
      path
      content
      category {
        title
      }
      timeToRead
      cover_image(width:780)
      humanTime : date(format:"Do MMMM YYYY")
      datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      tags {
        id
        title
        path
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blog.title
    };
  }
};
</script>
