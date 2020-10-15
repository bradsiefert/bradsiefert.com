<template>
  <Layout>
    <div class="container wide-contain">
      <div class="row">
        <div class="col-lg-12">

          <h1>Design Portfolio</h1>
          <p>Some of my design and front-end development work I'm proud to show off.</p>
          
          <h2 class="h3 mt-32">Case Study</h2>
          <g-link to="/casestudies/highbeam-design-system">
            <g-image 
              class="img-fluid rounded-lg mb-16" 
              src="@/assets/images/highbeam-case-study.jpg"
              style="border: 1px solid #eeeeee;"
              quality="100"
            />
          </g-link>
          
          <!-- <g-link to="/casestudies/ux-methodology">
            <g-image 
              class="img-fluid rounded-lg" 
              src="@/assets/images/highbeam-case-study.jpg"
              style="border: 1px solid #eeeeee;"
              quality="100"
            />
          </g-link> -->
          
          <div class="row g-16 mt-4 mb-32">
            <h2 class="h3 mt-32 mb-0">Select UI/UX Work</h2>
            <div class="col-md-6 col-xl-4" v-for="entry in $page.allPortfolio.edges" :key="entry.node.id">
              <g-link class="portfolio" :to="entry.node.path">
                <g-image 
                  class="img-fluid rounded-lg" 
                  :src="entry.node.cover_image" 
                  :alt="entry.node.title"
                  quality="88"
                />
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