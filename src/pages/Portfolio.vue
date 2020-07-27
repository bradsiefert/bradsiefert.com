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
            Some of my design and front-end work that I'm proud to show off.
          </p>

          <div class="row no-gutters mb-32">
            <div class="col-sm-4" v-for="entry in $page.allPortfolio.edges" :key="entry.node.id">
              <g-link :to="entry.node.path">
                <g-image class="img-fluid" :src="entry.node.cover_image" :alt="entry.node.title"/>
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

