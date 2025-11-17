<template>
  <footer class="footer">
    <div class="container skinny-contain">
      <div class="row">
        <div class="d-flex flex-xl-row flex-column justify-content-between mb-2xs">
          <div class="d-flex flex-column">
            <div class="h5">Sitemap</div>
            <ul class="list-unstyled d-flex flex-wrap gap-sm fs-sm-regular">
              <li><NuxtLink rel="noopener" to="/">Home</NuxtLink></li>
              <li><NuxtLink rel="noopener" to="/about">About</NuxtLink></li>
              <li><NuxtLink rel="noopener" to="/portfolio">Portfolio</NuxtLink></li>
              <li><NuxtLink rel="noopener" to="/">GovOS Case Study</NuxtLink></li>
              <li><NuxtLink rel="noopener" to="/case-studies/nielsen-global-design-system">Nielsen Case Study</NuxtLink></li>
              <li><a target="_new" rel="noopener" href="https://photos.bradsiefert.com">Photos ↗</a></li>
              <li><NuxtLink rel="noopener" to="/blog">Blog</NuxtLink></li>
            </ul>
          </div>

          <div class="d-flex flex-column">
            <div class="h5">Elsewhere</div>
            <ul class="list-unstyled d-flex flex-wrap gap-sm fs-sm-regular justify-content-start">
              <li>
              <NuxtLink
                target="_blank"
                rel="noopener"
                title="Link to Brad's Github"
                href="https://github.com/bradsiefert">
                  GitHub ↗
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  target="_blank"
                  rel="noopener"
                  title="Link to Brad's Dribbble"
                  href="https://dribbble.com/bksiefert">
                  Dribbble ↗
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  target="_blank"
                  rel="noopener"
                  title="Link to Brad's LinkedIn"
                  href="https://www.linkedin.com/in/bradsiefert/">
                  LinkedIn ↗
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="h5">Credits</div>
        <p class="mb-1">
          Forever grateful to <NuxtLink target="_blank" rel="noopener" title="Link to Frank's website" href="https://fkorf.com">Fkorf</NuxtLink> & <NuxtLink target="_blank" rel="noopener" title="Link to Kris Kroski's website" href="https://kro.ski">Kroski</NuxtLink> for teaching me to code. Site is typeset in Source Sans 3 and Source Sans 4 by Paul D. Hunt. Powered by <NuxtLink target="_blank" rel="noopener" title="Link to Nuxt 3" href="https://nuxt.com">Nuxt 3</NuxtLink>,
          <NuxtLink target="_blank" rel="noopener" title="Link to Bootstrap" href="https://getbootstrap.com">Bootstrap</NuxtLink>, <NuxtLink target="_blank" rel="noopener" title="Link to Netlify" href="https://netlify.com">Netlify</NuxtLink>. Licensed under <NuxtLink rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"> Creative Commons CC BY-NC-SA 4.0</NuxtLink>.
        </p>
      </div>

    </div>
  </footer>
</template>

<style lang="scss">
  /* ---------- Footer --------- */
  footer {
    margin-top: 64px;
    min-height: 192px;
    padding: 32px 1rem 48px;
    background-color: var(--color-neutral-100);
    border-top: 1px solid var(--color-neutral-300);
    font-size: var(--font-size-md);
    line-height: var(--line-heights-md);
    letter-spacing: var(--letter-spacing-md);
  }

  .footer a {
    color: var(--color-neutral-darkest);
    text-decoration: underline;
  }

  footer .h5 {
    font-family: var(--font-family-serif);
    font-weight: var(--font-weights-extrabold);
    font-size: var(--font-size-2xs);
    line-height: var(--line-heights-2xs);
    letter-spacing: var(--letter-spacing-2xs);
    margin-bottom: var(--spacing-2xs);
  }
</style>