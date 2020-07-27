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
                  <g-link title="Link back to Siri Shortcuts posts" to="/siri-shortcuts/">
                    {{ $metaInfo.postTitle }}
                  </g-link>
                </div>
                <div class="breadcrumb-item">
                  {{ this.$page.siriShortcuts.title }}
                </div>
              </div>
            </div>
          </div>

          <article>
            <ul class="list-inline">
              <li class="list-inline-item blog-time">
                <time :datetime="$page.siriShortcuts.datetime">{{ $page.siriShortcuts.humanTime }}</time>
              </li>
            </ul>

            <h1 v-html="$page.siriShortcuts.title"></h1>
            <div v-html="$page.siriShortcuts.content"></div>
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
    siriShortcuts(id: $id) {
      title
      path
      date (format: "D. MMMM YYYY")
      timeToRead
      content
      humanTime : date(format:"Do MMMM YYYY")
      datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.siriShortcuts.title,
      postTitle: 'Siri Shortcuts'
    };
  }
};
</script>
