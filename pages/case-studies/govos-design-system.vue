<template>
  <article>
    <div class="container skinny-contain portfolio-post">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb gap-xs">
            <NuxtLink to="/">Home</NuxtLink> / 
            <NuxtLink to="/portfolio">Portfolio</NuxtLink> / 
            <span>GovOS Design System</span>
          </div>

          <div class="pt-md">
            <h1>GovOS Design System</h1>
            <p>In 2021, I joined GovOS as the company's first in-house designer. They'd pieced design together for years through contractors and had no centralized visual design or design system. I was tasked to build a complete design system from scratch. I build foundations like color scale and typescale, 30+ components, and managed building the system in React.</p>

            <p class="mt-xl">
              <a href="https://kofile.github.io/design-system/?path=/docs/getting-started-installation--docs" rel="nofollow" target="_new" class="btn btn-primary btn-lg btn-govos-primary mb-xs">Storybook Documentation ↗</a>
              <a href="https://www.npmjs.com/package/@kofile/gds-foundations" rel="nofollow" target="_new" class="btn btn-primary btn-lg btn-govos-neutral mb-xs">Design Tokens @ NPM ↗</a>
            </p>
            <hr>
          </div>
        </div>
      </div>
    </div>

    <div class="case-study govos">
      <div class="container wide-contain">
        <img class="govos-components img-fluid mt-xl" src="@/assets/images/govos-design-system-casestudy-light.png" alt="GovOS Design System UI Components"/>
        <figcaption class="mt-md mb-none">Example GovOS Design System components</figcaption>

        <img class="govos-patterns img-fluid mt-xl" src="@/assets/images/govos-design-system-casestudy-design-patterns-light.webp" alt="GovOS Design System UI Components"/>
        <figcaption class="mt-md mb-none">Example GovOS Design System Patterns</figcaption>
      </div>
    </div> 

    <div class="container skinny-contain portfolio-post">
      <div class="row"> 
        <div class="col-lg-12">
          <h2 class="mt-3xl">Problem & Needs</h2>
          <p>GovOS delivers critical government services like records management, public records search, state and county tax payment, and short-term rental tax payment to hundreds of jurisdictions. It's products lacked any visual consistency, shared zero components or code, and federal/state web accessibility requirements had been ignored for many years. In my time at GovOS, I changed all of these things. <strong>During my tenure, I created a scalable design system that became the foundation for GovOS products and beyond.</strong></p>
          
          <p>The lack of a cohesive visual design and a design system created significant inefficiencies for both designers and engineers. There weren't any shared UI components or platform level code. Every new product or feature was effectively starting from scratch, which led to duplicated effort and inconsistent patterns. Designers had no shared library to work from, so visual styles varied widely between applications. Because front-ends were so brittle, developers rarely made visual updates. They didn't have any design assets to go off so when they made changes they hard-coded colors, spacing, and typography and never addressed the overall design debt resulting in fragmented user interfaces.</p>
          
          <p>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-legacy-applications.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-legacy-applications.webp" alt="Screenshots of various GovOS products before the design system I created">
              </a>
            </span>
            <figcaption>Various GovOS products pre-design system</figcaption>
          </p>

          <p>The absence of a design system limited the ability to expand products with new features, slowing down development, and creating more and more technical debt. It even effected our sales team because our products were so disconnected from each other it was difficult to say our applications were a real suite of products.</p>

          <hr>

          <h2>Visual Design Rules</h2>
          <p>Whenever I start a design, I am always on the lookout for how the visual design rules dictate to look and feel. Choosing a bold color palette or an extremely minimalist aesthetic looks great in Figma, but our users needed something more dependable and straightforward in the real world. When I began building the GovOS design system, I wanted the visual language to reflect <strong>clarity, trust, and accessibility.</strong> The audience for these products isn't creative professionals used to subtle visual nuance. It's users are citizens paying taxes, requesting records, and managing essential services. Every element needs to be <strong>obvious, direct, and legible.</strong></p>

          <p>A few of these choices became guiding lights for the system:</p>
          <ul>
            <li><strong>A basic and bright palette.</strong> My color palette isn't flashy, but it's reliable. I anchored it around my <code>color-blue-600</code> color for primary actions and chose neutrals that pair perfectly. The goal was to feel solid and professional and honestly at times, middle of the road. I never wanted it to feel overly branded or distracting.</li>
            <li><strong>A single typeface.</strong> .....</li>
            <li><strong>Almost no shadows.</strong> Instead of trendy shadows or heavy visual depth, I leaned into a flatter aesthetic. Cards and surfaces are defined with a light border (<code>color-neutral-300</code> in light mode) and were always set on <code>color-neutral-100</code> to have a subtle but clear contrast from the background. I wanted our UI to feel like a sheet of paper on a desk. This created a clean separation without any visual noise.</li>
            <li><strong>High contrast.</strong> Accessibility was non-negotiable. Rather than meeting minimum contrast requirements, we pushed far beyond them. Subtle text styles or nearly indistinguishable shades were avoided. Our users needed clear differences in states, hierarchy, and affordances, so everything was designed for maximum clarity</li>
          </ul>
          <p>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-color-palette.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-color-palette.webp" alt="">
              </a>
            </span>
          </p>
          <p>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-typography-fontfamily.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-typography-fontfamily.webp" alt="">
              </a>
            </span>
          </p>
          <p>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-typography-fontweight.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-typography-fontweight.webp" alt="">
              </a>
            </span>
          </p>
          <p>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-colors-inverted.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-colors-inverted.webp" alt="">
              </a>
            </span>
          </p>
          <p>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-colors-darkmode.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-colors-darkmode.webp" alt="">
              </a>
            </span>
            <!-- <figcaption>GovOS' Tax and Licensing product for states and counties built with the new design system</figcaption> -->
          </p>
          <hr>

          <h2>Documenting for Design & Development</h2>

          <hr>

          <h2>In Practice</h2>
          <p>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-apps-cdor.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-apps-cdor.webp" alt="">
              </a>
            </span>
            <figcaption>GovOS's Tax and Licensing product for states and counties built with the new design system</figcaption>
          </p>
          <p>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-apps-search.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-apps-search.webp" alt="">
              </a>
            </span>
            <figcaption>GovOS's Record Search product using the new design system</figcaption>
          </p>
          <p>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-apps-platform.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-apps-platform.webp" alt="">
              </a>
            </span>
            <figcaption>Example of GovOS platform components</figcaption>
          </p>

          <div class="divider mt-5"></div>
        </div>
      </div>
    </div>
  </article>
</template>