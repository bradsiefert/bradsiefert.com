<template>
  <Layout>
    <div class="container wide-contain">
      <div class="row">
        <div class="col-lg-12">

          <h1>Design Portfolio</h1>
          <p>
            Some of my design and front-end development work I'm proud to show off.
          </p>

          <div class="row g-16 mt-16 mb-32">
            <div class="col-md-6 col-xl-4" v-for="entry in $page.allPortfolio.edges" :key="entry.node.id">
              <g-link class="portfolio" :to="entry.node.path">
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
      title: 'Design Portfolio'
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