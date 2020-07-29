<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col-lg-12 portfolio-post">

          <div class="breadcrumb">
            <div class="breadcrumb-item">
              <g-link title="Link back to home" to="/">Home</g-link>
            </div>
            <div class="breadcrumb-item">
              <g-link title="Link back to Blog posts" to="/portfolio">
                {{ $metaInfo.postTitle }}
              </g-link>
            </div>
            <div class="breadcrumb-item">
              {{ this.$page.portfolio.title }}
            </div>
          </div>

          <article>
            <h4>Design Portfolio Piece:</h4>
            <h2 v-html="$page.portfolio.title"></h2>

            <div v-html="$page.portfolio.content"></div>
            <div class="divider"></div>
          </article>
        </div>

      </div>
    </div>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
  portfolio(id: $id) {
      title
      path
      content
      cover_image
      humanTime : date(format:"Do MMMM YYYY")
      datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `Design Portfolio / ${this.$page.portfolio.title}`,
      postTitle: 'Design Portfolio',
      meta: [
        { property: "og:type", content: 'article' },
        { property: "og:title", content: this.$page.portfolio.title },
        { property: "og:url", content: `${this.$page.metadata.siteUrl}${this.$page.portfolio.path}` },
        { property: "og:image", content: `${this.$page.metadata.siteUrl}${this.$page.portfolio.cover_image.src || ""}` },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.portfolio.title },
        { name: "twitter:site", content: "@bksiefert" },
        { name: "twitter:creator", content: "@bksiefert" },
        { name: "twitter:image", content: `${this.$page.metadata.siteUrl}${this.$page.portfolio.cover_image.src || ""}` }
      ]
    };
  }
};
</script>
