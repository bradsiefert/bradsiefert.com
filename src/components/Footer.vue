<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <h5>Quick Bio</h5>
          <p>
            I'm a Chicago based UI/UX designer and photographer experienced in web, mobile & print.
          </p>

          <p>I'm not currently accepting freelance work, but you can contact the Sales team at
            <a target="_blank" rel="noopener" title="Link to Earlybird Software" href="https://earlybird.co">Earlybird</a> 
            if you're interested in working with me on a project.
          </p>
        </div>

        <div class="offset-lg-1 col-lg mb-16">
          <h5>Social</h5>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Dribbble" 
                href="https://dribbble.com/bksiefert"
              >
                <g-image src="~/assets/images/icon-dribbble.svg" alt="Icon for Dribbble" />
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Github" 
                href="https://github.com/bradsiefert"
              >
                <g-image src="~/assets/images/icon-github.svg" alt="Icon for Github" />
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's LinkedIn" 
                href="https://www.linkedin.com/in/bradsiefert/"
              >
                <g-image src="~/assets/images/icon-linkedin.svg" alt="Icon for LinkedIn" />
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Twitter" 
                href="https://twitter.com/bksiefert"
              >
                <g-image src="~/assets/images/icon-twitter.svg" alt="Icon for Twitter" />
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Instagram" 
                href="https://www.instagram.com/bradsiefert/"
              >
                <g-image src="~/assets/images/icon-instagram.svg" alt="Icon for Instagram" />
              </a>
            </li>
            <li class="list-inline-item">
              <a 
                target="_blank"
                rel="noopener" 
                title="Link to Brad's Letterboxd" 
                href="https://letterboxd.com/bradsiefert/"
              >
                <g-image src="~/assets/images/icon-letterboxd.svg" alt="Icon for Letterboxd" />
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg text-right-then-left">
          <h5>Credits</h5>
          <p>
            Forever grateful to <a target="_blank" rel="noopener" title="Link to Gridsome" href="http://fkorf.com">Fkorf</a>
            & <a target="_blank" rel="noopener" title="Link to Gridsome" href="http://kro.ski">Kroski</a><br>
            Powered by <a target="_blank" rel="noopener" title="Link to Gridsome" href="https://gridsome.org">Gridsome</a>, 
            <a target="_blank" rel="noopener" title="Link to Bootstrap" href="https://getbootstrap.com">Bootstrap</a>,
            <a target="_blank" rel="noopener" title="Link to Netlify" href="https://getbootstrap.com">Netlify</a>.
          </p>

          <p>
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
