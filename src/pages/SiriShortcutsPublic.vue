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

          <h1>Public Shortcuts List</h1>
          <p class="lead">
            This is a list of all of my public shortcuts in an <a href="https://airtable.com">Airtable</a> database. 
            I’m especially proud of many of these and I hope you will find them useful. To add the Shortcut, tap the 
            Download/Share Link on your iOS device and it will add it to your Shortcuts app. Most of the shortcuts 
            require you to be running iOS 13.
          </p>

          <iframe 
            class="airtable-embed" 
            src="https://airtable.com/embed/shrP7grl8NCrWWybU?backgroundColor=purple" 
            frameborder="0" 
            onmousewheel="" 
            width="100%" 
            height="560" 
            style="background: transparent;"
          >
          </iframe>
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
          humanTime : date(format:"Do MMMM YYYY")
          datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        }
      }
    }
  }
</page-query>

