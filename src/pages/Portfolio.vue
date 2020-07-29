<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <div class="row">
            <div class="col">
              <div class="breadcrumb">
                <div class="breadcrumb-item">
                  <g-link title="Link back to home" to="/">Home</g-link>
                </div>
                <div class="breadcrumb-item">
                  {{ $metaInfo.postTitle }}
                </div>
              </div>
            </div>
          </div>

          <h1>Design Portfolio</h1>
          <p class="lead">
            Some of my design and front-end development work I'm proud to show off.
          </p>

          <div class="row g-16 mb-32">
            <div class="col-md-4" v-for="entry in $page.allPortfolio.edges" :key="entry.node.id">
              <g-link :to="entry.node.path">
                <g-image class="img-fluid rounded-lg" :src="entry.node.cover_image" :alt="entry.node.title"/>
              </g-link>
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
      title: 'Design Portfolio',
      postTitle: 'Design Portfolio'
    };
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
          cover_image
        }
      }
    }
  }
</page-query>