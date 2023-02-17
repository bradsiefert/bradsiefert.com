<script setup>
  import { IconDribbble, IconInstagram, IconGithub, IconLinkedin, IconMastodon, IconMedium } from '@iconify-prerendered/vue-bi';
</script>

<template>
  <footer class="footer">
    <div class="container skinny-contain">
      <div class="row">

        <div class="col-md-8 col-lg-7">
          <h4 class="h5">Navigation</h4>
          <ul class="list-inline footer-nav">
            <li class="list-inline-item">
              <NuxtLink rel="noopener" to="/portfolio">Portfolio</NuxtLink>
            </li>
            <!--<li class="list-inline-item">
              <NuxtLink rel="noopener" to="/siri-shortcuts">Siri Shortcuts</NuxtLink>
            </li>-->
            <li class="list-inline-item">
              <NuxtLink rel="noopener" to="/downloads">Downloads</NuxtLink>
            </li>
            <li class="list-inline-item">
              <NuxtLink rel="noopener" to="/blog">Blog</NuxtLink>
            </li>
            <li class="list-inline-item">
              <NuxtLink rel="noopener" to="/about">About</NuxtLink>
            </li>
            <li class="list-inline-item">
              <NuxtLink rel="noopener" to="/contact">Contact</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-md-4 col-lg-5">
          <h4 class="h5">Social</h4>
          <ul class="list-inline footer-social mb-md-2">
            <li class="list-inline-item">
              <NuxtLink
                target="_blank"
                rel="noopener"
                title="Link to Brad's Github"
                href="https://github.com/bradsiefert"
              ><IconGithub /></NuxtLink>
            </li>
            <li class="list-inline-item">
              <NuxtLink
                target="_blank"
                rel="noopener"
                title="Link to Brad's Dribbble"
                href="https://dribbble.com/bksiefert"
              ><IconDribbble /></NuxtLink>
            </li>
            <li class="list-inline-item">
              <NuxtLink
                target="_blank"
                rel="noopener"
                title="Link to Brad's Instagram"
                href="https://www.instagram.com/bradsiefert/"
              ><IconInstagram /></NuxtLink>
            </li>
            <li class="list-inline-item">
              <NuxtLink
                target="_blank"
                rel="noopener"
                title="Link to Brad's LinkedIn"
                href="https://www.linkedin.com/in/bradsiefert/"
              ><IconLinkedin /></NuxtLink>
            </li>
            <li class="list-inline-item">
              <NuxtLink
                target="_blank"
                rel="me"
                title="Link to Brad's Mastodon"
                href="https://mas.to/@bradsiefert"
              ><IconMastodon /></NuxtLink>
            </li>
            <!--<li class="list-inline-item">
              <NuxtLink
                target="_blank"
                rel="noopener"
                title="Link to Brad's Product Hunt"
                href="https://www.producthunt.com/@dim7chord"
              >&nbsp;</NuxtLink>
            </li>-->
            <li class="list-inline-item">
              <NuxtLink
                target="_blank"
                rel="noopener"
                title="Link to Brad's Medium"
                href="https://medium.com/@bradsiefert"
              ><IconMedium /></NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <h4 class="h5">Credits</h4>
          <p class="mb-1">
            Forever grateful to <NuxtLink target="_blank" rel="noopener" title="Link to Frank's twitter" href="https://twitter.com/omgfrank">Fkorf</NuxtLink>
            & <NuxtLink target="_blank" rel="noopener" title="Link to Kris Kroski's website" href="https://kro.ski">Kroski</NuxtLink>.
            Powered by <NuxtLink target="_blank" rel="noopener" title="Link to Nuxt 3" href="https://nuxt.com">Nuxt 3</NuxtLink>,
            <NuxtLink target="_blank" rel="noopener" title="Link to Bootstrap" href="https://getbootstrap.com">Bootstrap</NuxtLink>,
            <NuxtLink target="_blank" rel="noopener" title="Link to Netlify" href="https://netlify.com">Netlify</NuxtLink>.
          </p>

          <p class="mb-0">
            <NuxtLink rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="vertical-align: top; margin-top: 2px; margin-right: 2px;" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></NuxtLink> Creative Commons Attribution-NonCommercial-ShareAlike 4.0 license
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  @import "@/assets/scss/variables.scss";

  /* ---------- Footer --------- */
  footer {
    background-color: $white;
    margin-top: 128px;
    min-height: 192px;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    font-size: .875rem;
    letter-spacing: 0;
    line-height: 1.4;
    border-top: 1px solid $gray-300;
  }

  footer h4,
  footer .h5 {
    margin-bottom: .25rem;
    font-weight: bold;
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