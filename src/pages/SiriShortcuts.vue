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

          <h1>Siri Shortcuts</h1>
          <p class="lead">
            Shortcuts have become my favorite development platform. Shortcuts are small programs that you can run on your 
            iOS devices to accomplish a variety of tasks. I’m especially proud of making these and I hope you find 
            them useful. For a full list of all of my public shortcuts, the button below links to a database with links 
            to all of them.
          </p>
          
          <p class="lead">
            If you've never ran a shortcut before I wrote <g-link to="/blog/running-untrusted-siri-shortcuts/">a blog post on </g-link> 
            on how to run your first shortcut.
          </p>

          <div class="row">
            <div class="col-lg-6 col-xl-4">
              <a class="btn btn-primary btn-block mb-32" href="/siri-shortcuts-public/">
                View All My Public Shortcuts
              </a>
            </div>
          </div>
          
          <div class="row g-16">
            <div class="col-lg-6 col-xl-4" v-for="entry in $page.allSiriShortcuts.edges" :key="entry.node.id">
              <g-link :to="entry.node.path">
                <div class="box shortcuts mb-0">
                  <div class="d-flex flex-column" style="height: 208px;">
                    <div class="blog-time">{{ entry.node.humanTime }}</div>
                    <div class="mt-auto"><h3 class="mb-0">{{ entry.node.title }}</h3></div>
                  </div>
                </div>
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
      title: 'Siri Shortcuts',
      postTitle: 'Siri Shortcuts'
    };
  }
};
</script>

<page-query>
  query {
    allSiriShortcuts {  
      edges {
        node {
          title
          path
          humanTime : date(format:"YYYY/MM/DD")
          datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        }
      }
    }
  }
</page-query>

