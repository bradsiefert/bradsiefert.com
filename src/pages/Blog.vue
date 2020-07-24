<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1 class="page-title text-3xl md:text-center md:text-5xl lg:mb-24 lg:text-6xl">Blog</h1>
      <div class="px-2">
        <div class="posts flex flex-wrap">
          <div
            class="w-full mb-2 px-2"
            v-for="entry in $page.allBlog.edges"
            :key="entry.node.id"
          >
            <article class="article-card bg-white overflow-hidden rounded-lg shadow-lg flex-1">
              <g-link
                class="featured-image-link block relative overflow-hidden"
                :to="entry.node.path"
              >
                <figure>
                  <g-image class="block loaded" :src="entry.node.cover_image" />
                </figure>
              </g-link>
              <div class="p-8">
                <h2 class="text-2xl mb-6">
                  <g-link
                    class="block"
                    :to="entry.node.path"
                  >{{ entry.node.title }}</g-link>
                </h2>
                <div class="text-sm text-gray-600 md:flex mb-4">
                  <time :datetime="entry.node.datetime">{{ entry.node.humanTime }}</time>
                  <p><strong>Category: </strong>{{ entry.node.category.title }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Blog"
  }
};
</script>

<page-query>
  query {
    allBlog {  
      edges {
        node {
          title
          path
          cover_image(width:512)
          humanTime : date(format:"Do MMMM YYYY")
          datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
          category {
            title
          }
        }
      }
    }
  }
</page-query>

