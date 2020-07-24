<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1 class="page-title text-3xl md:text-center md:text-5xl lg:text-6xl">
        Design Portfolio
      </h1>
      <div class="px-2">
        <div class="posts flex flex-wrap -mx-2">
          <div
            class="w-full md:w-1/3 mb-8 px-2"
            v-for="entry in $page.allPortfolio.edges"
            :key="entry.node.id"
          >
            <article class="article-card bg-white overflow-hidden rounded-lg shadow-lg flex-1">
              <g-link
                class="featured-image-link block relative overflow-hidden"
                :to="entry.node.path"
              >

                <figure>
                  <!-- <g-image
                    class="img-fluid"
                    :alt="entry.node.title"
                    :src="entry.node.cover_image"
                  /> -->
                </figure>
              </g-link>
              <div class="p-8">
                <h1 class="text-2xl mb-6">
                  <g-link
                    class="block text-purple-900 hover:text-pink-500"
                    :to="entry.node.path"
                  >{{ entry.node.title }}</g-link>
                </h1>
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
    title: "Portfolio"
  }
};
</script>

<page-query>
  query {
    allPortfolio {  
      edges {
        node {
          title
          path
          cover_image(width:768)
        }
      }
    }
  }
</page-query>

