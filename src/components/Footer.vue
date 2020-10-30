<template>
  <footer class="footer">
    <div class="container skinny-contain">
      <div class="row">

        <div class="col-md-8 col-lg-7">
          <h4 class="h5">Navigation</h4>
          <ul class="list-inline footer-nav">
            <li class="list-inline-item">
              <g-link rel="noopener" to="/portfolio">Design Portfolio</g-link>
            </li>
            <li class="list-inline-item">
              <g-link rel="noopener" to="/siri-shortcuts">Siri Shortcuts</g-link>
            </li>
            <li class="list-inline-item">
              <g-link rel="noopener" to="/blog">Blog</g-link>
            </li>
            <li class="list-inline-item">
              <g-link rel="noopener" to="/about">About</g-link>
            </li>
            <li class="list-inline-item">
              <g-link rel="noopener" to="/contact">Contact</g-link>
            </li>
          </ul>
        </div>

        <div class="col-md-4 col-lg-5">
          <h4 class="h5">Social</h4>
          <ul class="list-inline footer-social mb-md-4">
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Dribbble" 
                href="https://dribbble.com/bksiefert"
              >
                <font-awesome :icon="['fab', 'dribbble']"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Instagram" 
                href="https://www.instagram.com/bradsiefert/"
              >
                <font-awesome :icon="['fab', 'instagram']"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Github" 
                href="https://github.com/bradsiefert"
              >
                <font-awesome :icon="['fab', 'github']"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's LinkedIn" 
                href="https://www.linkedin.com/in/bradsiefert/"
              >
                <font-awesome :icon="['fab', 'linkedin']"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Twitter" 
                href="https://twitter.com/bksiefert"
              >
                <font-awesome :icon="['fab', 'twitter']"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Product Hunt" 
                href="https://www.producthunt.com/@dim7chord"
              >
                <font-awesome :icon="['fab', 'product-hunt']"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Medium" 
                href="https://medium.com/@bradsiefert"
              >
                <font-awesome :icon="['fab', 'medium']"/>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <h4 class="h5">Credits</h4>
          <p class="mb-0">
            Forever grateful to <a target="_blank" rel="noopener" title="Link to Frank's twitter" href="https://twitter.com/omgfrank">Fkorf</a>
            & <a target="_blank" rel="noopener" title="Link to Kris Kroski's website" href="http://kro.ski">Kroski</a>
            Powered by <a target="_blank" rel="noopener" title="Link to Gridsome" href="https://gridsome.org">Gridsome</a>, 
            <a target="_blank" rel="noopener" title="Link to Bootstrap" href="https://getbootstrap.com">Bootstrap</a>,
            <a target="_blank" rel="noopener" title="Link to Netlify" href="https://netlify.com">Netlify</a>.
            Images & thoughts &copy; {{ new Date().getFullYear() }} Brad Siefert.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  @import "@/assets/scss/variables.scss";

  /* ---------- Footer --------- */
  footer {
    margin-top: 128px;
    min-height: 160px;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    font-size: .875rem;
    letter-spacing: 0;
    line-height: 1.4;
    border-top: 1px solid $gray-200;
  }

  footer h4,
  footer .h5 {
    margin-bottom: .25rem;
  }

  .footer-nav a,
  .footer-social a {
    color: $black;
  }

  .footer-social {
    font-size: 1.5rem;
  }

  .footer-nav .list-inline-item:not(:last-child) {
    margin-right: .75rem;
    margin-bottom: .75rem;
  }

  .footer-social .list-inline-item:not(:last-child) {
    margin-right: .33rem;
  }
</style>