<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1 class="page-title text-3xl md:text-center md:text-5xl mb-16 lg:mb-24 lg:text-6xl">
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
                  <g-image
                    class="block loaded"
                    :alt="entry.node.image_caption"
                    :src="entry.node.image"
                  />
                </figure>
              </g-link>
              <div class="p-8">
                <h1 class="text-2xl mb-6">
                  <g-link
                    class="block text-purple-900 hover:text-pink-500"
                    :to="entry.node.path"
                  >{{ entry.node.title }}</g-link> -->
                  <h5>Time to read: {{ entry.node.timeToRead }}</h5>
                </h1>
                <div class="text-sm text-gray-600 md:flex mb-4">
                  <p class="hidden md:block px-2">—</p>
                  <time :datetime="entry.node.datetime">{{ entry.node.humanTime }}</time>
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
          timeToRead
          image(width:780)
          humanTime : created(format:"Do MMMM YYYY")
          datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        }
      }
    }
  }
</page-query>

