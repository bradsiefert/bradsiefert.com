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
      title: this.$page.portfolio.title, 
      postTitle: 'Design Portfolio',
      meta: [
        {
          property: 'og:title',
          content: this.$page.portfolio.title
        },
        {
          name: "twitter:card",
          content: this.$page.portfolio.cover_image ? "summary_large_image" : "summary",
        },
        {
          name: "twitter:creator",
          content: "@bksiefert"
        },
        {
          property: "og:image",
          content: this.$page.portfolio.cover_image || ""
        }
      ]
    };
  }
};
</script>
