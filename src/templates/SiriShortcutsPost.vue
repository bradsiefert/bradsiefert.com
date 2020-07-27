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
              <g-link title="Link back to Siri Shortcuts posts" to="/siri-shortcuts/">
                {{ $metaInfo.postTitle }}
              </g-link>
            </div>
            <div class="breadcrumb-item">
              {{ this.$page.siriShortcuts.title }}
            </div>
          </div>

          <article>
            <ul class="list-inline">
              <li class="list-inline-item blog-time">
                <time>{{ $page.siriShortcuts.humanTime }}</time>
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
      timeToRead
      content
      humanTime : date(format:"Do MMMM YYYY")
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
