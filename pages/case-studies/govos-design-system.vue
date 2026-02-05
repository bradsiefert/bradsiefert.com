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
            <div class="my-sm fs-lg-semibold text-uppercase">Case Study</div>
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
        <figure>
          <img class="govos-components img-fluid mt-xl" src="@/assets/images/govos-design-system-casestudy-light.webp" alt="GovOS Design System UI Components"/>
          <figcaption class="mt-md mb-none">Example GovOS Design System components</figcaption>
        </figure>

        <figure>
          <img class="govos-patterns img-fluid mt-xl" src="@/assets/images/govos-design-system-casestudy-design-patterns-light.webp" alt="GovOS Design System UI Components"/>
          <figcaption class="mt-md mb-none">Example GovOS Design System Patterns</figcaption>
        </figure>
      </div>
    </div> 

    <div class="container skinny-contain portfolio-post">
      <div class="row"> 
        <div class="col-lg-12">
          <h2 class="mt-3xl">Problem & Needs</h2>
          <p>GovOS delivers critical government services like records management, public records search, state and county tax payment, and short-term rental tax payment to hundreds of jurisdictions. It's products lacked any visual consistency, shared zero components or code, and federal/state web accessibility requirements had been ignored for many years. In my time at GovOS, I changed all of these things. <strong>During my tenure, I created a scalable design system that became the foundation for GovOS products and beyond.</strong></p>
          
          <p>The lack of a cohesive visual design and a design system created significant inefficiencies for both designers and engineers. There weren't any shared UI components or platform level code. Every new product or feature was effectively starting from scratch, which led to duplicated effort and inconsistent patterns. Designers had no shared library to work from, so visual styles varied widely between applications. Because front-ends were so brittle, developers rarely made visual updates. They didn't have any design assets to go off so when they made changes they hard-coded colors, spacing, and typography and never addressed the overall design debt resulting in fragmented user interfaces.</p>
          
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-legacy-applications.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-legacy-applications.webp" alt="Screenshots of various GovOS products before the design system I created">
              </a>
            </span>
            <figcaption>Various GovOS products pre-design system</figcaption>
          </figure>

          <p>The absence of a design system limited the ability to expand products with new features, slowing down development, and creating more and more technical debt. It even effected our sales team because our products were so disconnected from each other it was difficult to say our applications were a real suite of products.</p>

          <hr>

          <h2>Visual Design Principles</h2>
          <p>Whenever I start a design, I am always on the lookout for how the visual design rules dictate to look and feel. Choosing a bold color palette or an extremely minimalist aesthetic looks great in Figma, but our users needed something more dependable and straightforward in the real world. When I began building the GovOS design system, I wanted the visual language to reflect <strong>clarity, trust, and accessibility.</strong> The audience for these products isn't creative professionals used to subtle visual nuance. It's users are citizens paying taxes, requesting records, and managing essential services. Every element needs to be <strong>obvious, direct, and legible.</strong></p>

          <p>These choices became guiding lights for the system:</p>
          <ul>
            <li class="mb-lg"><strong>A basic and bright palette.</strong> My color palette isn't flashy, but it's reliable and predictable. I anchored it around my <code>color-blue-600</code> color for primary actions and chose neutrals that pair perfectly. The goal was to feel solid and professional and honestly at times, middle of the road. I never wanted it to feel overly branded or distracting. I often preached to hat our colors must follow the color roles <code>(primary, danger, warning, success, & highlight)</code> we setup to ensure consistency.</li>
            <li class="mb-lg"><strong>A single typeface and a large type scale.</strong> I feel strongly that all typography should be tied to a type scale via design tokens. This ensures consistent line heights, letter spacing, and makes visual rhythm easier to achieve. The list of great UI typefaces is not very long and for this system I chose Source Sans 3 because it's previous use in federal web applications, clean aesthetic, and variable font weight to allow me to create a nice contrast between the three font weights.</li>
            <li class="mb-lg"><strong>Clean borders and almost no shadows.</strong> Instead of trendy shadows or heavy visual depth, I leaned into a very flat aesthetic. Cards and surfaces are defined with a light border (<code>color-neutral-300</code> in light mode) and were always set on <code>color-neutral-100</code> to have a subtle but clear contrast from the background. I wanted our UI to feel like a sheet of paper on a desk. This created a clean separation without any visual noise.</li>
            <li class="mb-2xl"><strong>High contrast and accessibile.</strong> GovOS's previous used overly subtle color opacities for their color palette. At times, they were almost indistinguishable from each other causing usability and accessibility issues. Accessibility had not been taken seriously in the past, but for me, it was non-negotiable. Rather than barely meeting minimum contrast requirements for text, I setup the system to well exceed them. Subtle text styles, tints, or shades were avoided. Our users needed clear differences in states, hierarchy, and affordances, so everything was designed for maximum clarity.</li>
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
          </p>
          <hr>

          <!-- <h2>Documenting for Design & Development</h2>
          <p>I spend a huge amount of timing writing and creating design documentation for the system. I want the system to be incredibly easy to understand for both designers and developers. I think documentation is the differentiator between a system that is used and a system that is ignored. I occasionally contributed to the development documentation, but I wrote and created all of the design documentation and assets in Figma.</p>
            
          <p>Content writing seems like such a straightforward task, but anyone who has tried it knows will tell you it's actually incredibly difficult. It requires a deep understanding of design principles and engineering best practices and the ability to write in a way that is both precise and concise. It also requires a lot of time and effort to get right.</p>
          <hr> -->

          <h2>In Practice</h2>
          <p>Once the system foundations were solid and core components were created, the next step was collaborating with other UX designers to create mockups and user flows. Designers used the system to create a redesigned tax portal for State of Colorado and Alaska, updated our public search portal, and created platform components to be shared across all applications.</p>
          
          <p>Collaborating with other designers is important to me and comes naturally for me. Especially during the design process for the tax portal redesigns, I collaborated closely with designers to adapt components to their needs and participated in design critiques and reviews to make sure they knew my intentions when designing the components and patterns. It was the first stress test for using the system in such a large scale and on such a short timeline. It performed extremely well and allowed me to focus on the larger goals of maturing the system while still maintaining consistency across the product suite.</p>
          
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-apps-cdor.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-apps-cdor.webp" alt="">
              </a>
            </span>
            <figcaption>GovOS's Tax and Licensing product for states and counties built with the new design system</figcaption>
          </figure>
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-apps-search.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-apps-search.webp" alt="">
              </a>
            </span>
            <figcaption>GovOS's Record Search product using the new design system</figcaption>
          </figure>
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-apps-platform.webp" class="lightbox-trigger">
                <img src="/portfolio/case-study-govos-apps-platform.webp" alt="">
              </a>
            </span>
            <figcaption>Example of GovOS platform components</figcaption>
          </figure>

          <div class="divider mt-5"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
useHead({
  title: 'Case Study / GovOS Design System'
})
</script>