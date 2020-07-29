<template>
  <Layout>


    <div class="container skinny-contain">
      <div class="row">
        <div class="col-lg-12 blog-post">

          <div class="breadcrumb">
            <div class="breadcrumb-item">
              <g-link title="Link back to home" to="/">Home</g-link>
            </div>
            <div class="breadcrumb-item">
              <g-link title="Link back to Blog posts" to="/blog">
                {{ $metaInfo.postTitle }}
              </g-link>
            </div>
            <div class="breadcrumb-item">
              {{ this.$page.blog.title }}
            </div>
          </div>

          <article>
            <ul class="list-inline">
              <li class="list-inline-item blog-time">
                <time :datetime="$page.blog.datetime">{{ $page.blog.humanTime }}</time>
              </li>
              <li class="list-inline-item blog-time pl-16">
                {{ $page.blog.timeToRead }} min read
              </li>
            </ul>

            <h1 v-html="$page.blog.title"></h1>
            <div v-html="$page.blog.content"></div>
          </article>

          <div class="divider mt-32"></div>
          <!-- <div class="divider"></div> -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    blog(id: $id) {
      title
      path
      content
      description
      cover_image
      timeToRead
      humanTime : date(format:"YYYY MMMM Do")
    }
    metadata {
      siteUrl
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `Blog / ${this.$page.blog.title}`,
      postTitle: 'Blog',
      meta: [
        { property: "og:type", content: 'article' },
        { property: "og:title", content: this.$page.blog.title },
        { property: "og:description", content: this.$page.blog.description },
        { property: "og:url", content: this.$page.blog.path },
        { property: "og:image", content: `${this.$page.metadata.siteUrl}${this.$page.blog.cover_image.src || ""}` },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.blog.title },
        { name: "twitter:description", content: this.$page.blog.description },
        { name: "twitter:site", content: "@bksiefert" },
        { name: "twitter:creator", content: "@bksiefert" },
        { name: "twitter:image", content: `${this.$page.metadata.siteUrl}${this.$page.blog.cover_image.src || ""}` }
      ]
    };
  },
};
</script>
