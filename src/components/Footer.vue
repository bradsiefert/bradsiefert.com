<template>
  <footer>
    <div class="container skinny-contain">
      <div class="row">

        <div class="col-md-7 col-lg-8">
          <h5>Navigation</h5>
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

        <div class="col-md-5 col-lg-4">
          <h5>Social</h5>
          <ul class="list-inline footer-social mb-4">
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
                title="Link to Brad's Letterboxd" 
                href=""
              >
                <font-awesome :icon="['fab', 'product-hunt']"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Letterboxd" 
                href=""
              >
                <font-awesome :icon="['fab', 'medium']"/>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <h5>Credits</h5>
          <p class="mb-0">
            Forever grateful to <a target="_blank" rel="noopener" title="Link to Gridsome" href="http://fkorf.com">Fkorf</a>
            & <a target="_blank" rel="noopener" title="Link to Gridsome" href="http://kro.ski">Kroski</a>
            Powered by <a target="_blank" rel="noopener" title="Link to Gridsome" href="https://gridsome.org">Gridsome</a>, 
            <a target="_blank" rel="noopener" title="Link to Bootstrap" href="https://getbootstrap.com">Bootstrap</a>,
            <a target="_blank" rel="noopener" title="Link to Netlify" href="https://getbootstrap.com">Netlify</a>.
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
