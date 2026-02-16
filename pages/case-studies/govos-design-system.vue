<template>
  <article>
    <div class="container skinny-contain portfolio-post" id="overview">
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
            <p>In 2021, I joined GovOS as the company's first in-house designer. For years they'd pieced design together through contractors and had no visual design ethos or design system. I was tasked to build a complete design system from scratch. I created foundations like the color scale and type scale, made 30+ components, and managed building the system in React.</p>

            <p class="lead">I chose to work in govtech because I believe goverments should provide excellent services to its citizens. Building this system was an opportunity to improve how millions of people interact with essential public services.</p>

            <p class="mt-xl">
              <a href="https://kofile.github.io/design-system/?path=/docs/getting-started-installation--docs" rel="nofollow" target="_new" class="btn btn-primary btn-lg btn-govos-primary mb-xs">Storybook Documentation ↗</a>
              <a href="https://www.npmjs.com/package/@kofile/gds-foundations" rel="nofollow" target="_new" class="btn btn-primary btn-lg btn-govos-neutral mb-xs">Design Tokens @ NPM ↗</a>
            </p>
            <hr class="mb-3xl">
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
          <p>GovOS delivers critical government services like tax payments, business licensing, records management, public records search, short-term rental payments, and more to hundreds of jurisdictions. Before I joined, it's products lacked any visual consistency, shared zero components or code, and federal/state web accessibility requirements had been ignored for years. In my time at GovOS, I changed all of these things. <strong>During my tenure, I created a scalable design system that became the foundation for GovOS products and beyond.</strong></p>
          
          <p>The lack of a cohesive visual design and a design system created significant inefficiencies for both designers and engineers. There weren't any shared UI components or platform level code. Every new product or feature was effectively starting from scratch, which led to duplicated effort and inconsistent patterns. Designers had no shared library to work from, so visual styles varied widely between applications.</p> 
          
          <p>Because front-ends were so brittle, developers rarely made updates. They didn't have design assets to go off so when they made changes they hard-coded colors, spacing, and typography and never addressed the design debt, resulting in fragmented user interfaces.</p>
          
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-legacy-applications.webp" aria-label="View full size: Various GovOS products pre-design system">
                <img src="/portfolio/case-study-govos-legacy-applications.webp" alt="Screenshots of various GovOS products before the design system I created">
              </a>
            </span>
            <figcaption class="mt-0">Various GovOS products pre-design system</figcaption>
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
          <figure>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-color-palette.webp" aria-label="View full size: GovOS color scale and color roles">
                <img src="/portfolio/case-study-govos-color-palette.webp" alt="GovOS color scale and color roles">
              </a>
            </span>
            <figcaption class="mt-0">GovOS's color scale and color roles</figcaption>
          </figure>
          <figure>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-typography-fontfamily.webp" aria-label="View full size: GovOS typography font family, Source Sans 3 in three weights">
                <img src="/portfolio/case-study-govos-typography-fontfamily.webp" alt="GovOS typography font family, Source Sans 3 in three weights">
              </a>
            </span>
            <figcaption class="mt-0">GovOS's typography font family, Source Sans 3 in three weights, 480, 600, and 720</figcaption>
          </figure>
          <figure>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-typography-fontweight.webp" aria-label="View full size: GovOS typography scale, 12 steps">
                <img src="/portfolio/case-study-govos-typography-fontweight.webp" alt="GovOS typography scale, 12 steps from 3xs to 6xl">
              </a>
            </span>
            <figcaption class="mt-0">GovOS's typography scale, 12 steps from 3xs to 6xl</figcaption>
          </figure>
          <figure>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-colors-inverted.webp" aria-label="View full size: GovOS primary color inverted for light and dark mode">
                <img src="/portfolio/case-study-govos-colors-inverted.webp" alt="GovOS primary color inverted to show light and dark mode support">
              </a>
            </span>
            <figcaption class="mt-0">GovOS's primary color inverted to show light/dark mode support</figcaption>
          </figure>
          <figure>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-colors-darkmode.webp" aria-label="View full size: GovOS components in light and dark mode">
                <img src="/portfolio/case-study-govos-colors-darkmode.webp" alt="GovOS components contrasted in light and dark mode">
              </a>
            </span>
            <figcaption class="mt-0">GovOS's components contrasted in light and dark mode</figcaption>
          </figure>
          <hr>

          <h2>Platform 🤝 Product</h2>
          <p>Building a great design system has to include decisions that shape and serve products. It can't just be a toolkit of UI elements. Every component and pattern I create is meant to serve and align products and the business as a whole. <strong>The system is built to serve design, engineering, and product.</strong></p>
            
          <p>Product alignment is extremely hard to accomplish. It requires auditing, alignment, vision, and buy-in. It's rare that product folks have the time to do this kind of work. They are often required to take a very myopic view that only includes their product. I think design systems are powerful tools for aligning platform-level patterns and my favorite example from my time at GovOS is global navigation.</p>
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-product-navigation-annotations.webp" aria-label="View full size: Global navigation with annotations">
                <img src="/portfolio/case-study-govos-product-navigation-annotations.webp" alt="Screenshot of a global navigation with annotations labeling important sections like platform nativation and application title.">
              </a>
            </span>
            <figcaption class="mt-0">Aligning and documenting the global navigation component with appropriate sections for future product needs.</figcaption>
          </figure>
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-product-navigation-sidenav.webp" aria-label="View full size: Sidebar navigation component">
                <img src="/portfolio/case-study-govos-product-navigation-sidenav.webp" alt="Screenshot of a global navigation header and sidebar navigation with an example flyover panel with links.">
              </a>
            </span>
            <figcaption class="mt-0">Building the sidebar navigation component was vital because half our products needed multiple levels of navigation.</figcaption>
          </figure>
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-product-navigation-colormodes.webp" aria-label="View full size: Global navigation in light and dark mode">
                <img src="/portfolio/case-study-govos-product-navigation-colormodes.webp" alt="Screenshot of two global navigation headers, one in light mode, one in dark mode.">
              </a>
            </span>
            <figcaption class="mt-0">I build the global navigation component in light and dark mode to align with future product goals of accessibility and theming.</figcaption>
          </figure>
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-product-navigation-mobile.webp" aria-label="View full size: Mobile navigation component">
                <img src="/portfolio/case-study-govos-product-navigation-mobile.webp" alt="Screenshot of how our global navigation component works on mobile screens.">
              </a>
            </span>
            <figcaption class="mt-0">A major issue product teams wanted was a unified mobile navigation for global navigation. I design this to scale to all our products.</figcaption>
          </figure>
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-product-navigation-beforeafter.webp" aria-label="View full size: Pre and post-design system header comparison">
                <img src="/portfolio/case-study-govos-product-navigation-beforeafter.webp" alt="Screenshot of a global navigation before and after examples of headers pre and post-design system. The post-design system ones look better.">
              </a>
            </span>
            <figcaption class="mt-0">Pre-design system headers vs design system global navigation components build for each product</figcaption>
          </figure>
          <hr>

          <h2>Documentation for All</h2>
          <p>Documentation is the differentiator between a system that is used and a system that is ignored. I spend a huge amount of time writing and creating design documentation for the system. Above all, I want the system to be easy to use and understand for both designers and developers. Writing plain written and clear documentation and creating assets to explain the documentation, makes that a reality.</p>
            
          <p>Content writing seems like such a straightforward task, but anyone who has tried it will tell you it's incredibly difficult. It requires a deep understanding of design principles and engineering best practices and the ability to write in a way that is both precise and concise. I never considered a component or pattern done until the design and development documentation was written. Without great docs, there's no chance it'll be used right.</p>
          <figure>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-docs-dialog.webp" aria-label="View full size: Dialog component documentation">
                <img src="/portfolio/case-study-govos-docs-dialog.webp" alt="Documentation of the Dialog component">
              </a>
            </span>
            <figcaption class="mt-0">Documentation of the Dialog component. Every component has docs written for designers, developers, PMs, and LLMs.</figcaption>
          </figure>
          <figure>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-docs-emptystate.webp" aria-label="View full size: Empty state documentation">
                <img src="/portfolio/case-study-govos-docs-emptystate.webp" alt="Documentation including user flows, interaction states, and usage guidance">
              </a>
            </span>
            <figcaption class="mt-0">Documentation isn't just words, it's user flows, interaction states, and usages guidance.</figcaption>
          </figure>
          <figure>
            <span class="wide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-docs-menu.webp" aria-label="View full size: Menu component documentation">
                <img src="/portfolio/case-study-govos-docs-menu.webp" alt="Menu component documentation with variants">
              </a>
            </span>
            <figcaption class="mt-0">When creating docs I highlight variants to designers and developers to make sure they are aware of all component options.</figcaption>
          </figure>
          <hr>
          
          <h2>In Practice</h2>
          <p>Once the system foundations were solid and core components were created, the next step was collaborating with other UX designers to create mockups and user flows. Designers used the system to create a redesigned tax portal for State of Colorado and Alaska, updated our public search portal, and created platform components to be shared across all applications.</p>
          
          <p>Collaborating with other designers is important to me and comes naturally for me. Especially during the design process for the tax portal redesigns, I collaborated closely with designers to adapt components to their needs and participated in design critiques and reviews to make sure they knew my intentions when designing the components and patterns. It was the first stress test for using the system in such a large scale and on such a short timeline. It performed extremely well and allowed me to focus on the larger goals of maturing the system while still maintaining consistency across the product suite.</p>
          
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-apps-cdor.webp" aria-label="View full size: GovOS Tax and Licensing product">
                <img src="/portfolio/case-study-govos-apps-cdor.webp" alt="Screenshot of two pages in a state tax portal web application.">
              </a>
            </span>
            <figcaption class="mt-0">GovOS's Tax and Licensing product for states and counties built with the new design system</figcaption>
          </figure>
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-apps-search.webp" aria-label="View full size: GovOS Record Search product">
                <img src="/portfolio/case-study-govos-apps-search.webp" alt="Screenshot of two pages in a official records search web application.">
              </a>
            </span>
            <figcaption class="mt-0">GovOS's Record Search product using the new design system</figcaption>
          </figure>
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-govos-apps-platform.webp" aria-label="View full size: GovOS platform components">
                <img src="/portfolio/case-study-govos-apps-platform.webp" alt="Screenshot of two pages in platform components in a web application.">
              </a>
            </span>
            <figcaption class="mt-0">Example of GovOS platform components</figcaption>
          </figure>

          <div class="divider mt-5"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
definePageMeta({ layout: 'case-study' })
useHead({
  title: 'Case Study / GovOS Design System'
})
</script>