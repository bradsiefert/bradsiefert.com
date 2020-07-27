<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col-lg-12 blog-post">

          <div class="row">
            <div class="col">
              <div class="breadcrumb">
                <div class="breadcrumb-item">
                  <g-link title="Link back to home" to="/">Home</g-link>
                </div>
                <div class="breadcrumb-item">
                  <g-link title="Link back to Blog posts" to="/">
                    {{ $metaInfo.postTitle }}
                  </g-link>
                </div>
                <div class="breadcrumb-item">
                  {{ this.$page.blog.title }}
                </div>
              </div>
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
      content
      timeToRead
      cover_image(width:960)
      humanTime : date(format:"YYYY MMMM Do")
      datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blog.title,
      postTitle: 'Blog'
    };
  }
};
</script>
