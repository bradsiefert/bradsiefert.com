<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row justify-content-center">
        <div class="col-lg-12">

          <div class="row">
            <div class="col">
              <div class="breadcrumb">
                <div class="breadcrumb-item"><a title="Link back to home" href="/">Home</a></div>
                <div class="breadcrumb-item">{{ $metaInfo.title }}</div>
              </div>
            </div>
          </div>

          <div class="float-right">
            <small><strong><a href="https://www.brad.si/efert/category/blog/feed/">RSS Feed</a></strong></small>
          </div>
          <h1>Blog</h1>
          <p>A blog about design, photography, productivity, and other things I can't stop thinking about.</p>

          <div v-for="entry in $page.allBlog.edges" :key="entry.node.id">
            <div class="box">
              <div class="posts flex flex-wrap">
                <article>
                  <g-link :to="entry.node.path">
                    <figure>
                      <g-image class="img-fluid" :src="entry.node.cover_image" :alt="entry.node.title"/>
                    </figure>
                  </g-link>

                  <p class="blog-time mt-16">
                    <time :datetime="entry.node.datetime">{{ entry.node.humanTime }}</time>
                  </p>

                  <g-link :to="entry.node.path">
                    <h2>{{ entry.node.title }}</h2>
                  </g-link>

                  <p>{{ entry.node.description }}</p>

                  <g-link class="btn btn-primary btn-sm" :to="entry.node.path">
                    Read Post
                  </g-link>

                </article>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Blog"
    };
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
          description
          cover_image(width:960)
          humanTime : date(format:"YYYY/MM/DD")
          datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        }
      }
    }
  }
</page-query>

