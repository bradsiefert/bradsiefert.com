<template>
  <article>
    <div class="container skinny-contain portfolio-post" id="overview">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb gap-xs">
            <NuxtLink to="/">Home</NuxtLink> / 
            <NuxtLink to="/portfolio">Portfolio</NuxtLink> / 
            <span>Colorado State Tax Portal</span>
          </div>
          <div class="pt-md">
            <div class="my-sm fs-lg-semibold text-uppercase">Case Study</div>
            <h1>Colorado State Tax Portal</h1>
            <p>In 2021, I joined GovOS as the company's first in-house designer. For years they'd pieced design together through contractors and had no visual design ethos or design system. I was tasked to build a complete design system from scratch. I created foundations like the color scale and type scale, made 30+ components, and managed building the system in React.</p>

            <p class="mt-xl">
              <a href="https://suts.blt.govos.com/login" rel="nofollow" target="_new" class="btn btn-primary btn-lg btn-govos-primary mb-xs">Colorado State Tax Portal Login ↗</a>
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
          <hr>

          <h2>Visual Design Principles</h2>
          <p>Because front-ends were so brittle, developers rarely made updates. They didn't have design assets to go off so when they made changes they hard-coded colors, spacing, and typography and never addressed the design debt, resulting in fragmented user interfaces.</p>

          <p>Whenever I start a design, I am always on the lookout for how the visual design rules dictate to look and feel. Choosing a bold color palette or an extremely minimalist aesthetic looks great in Figma, but our users needed something more dependable and straightforward in the real world. When I began building the GovOS design system, I wanted the visual language to reflect <strong>clarity, trust, and accessibility.</strong> The audience for these products isn't creative professionals used to subtle visual nuance. It's users are citizens paying taxes, requesting records, and managing essential services. Every element needs to be <strong>obvious, direct, and legible.</strong></p>
          <hr>

          <h2>Platform 🤝 Product</h2>
          <p>Building a great design system has to include decisions that shape and serve products. It can't just be a toolkit of UI elements. Every component and pattern I create is meant to serve and align products and the business as a whole. <strong>The system is built to serve design, engineering, and product.</strong></p>
            
          <p>Product alignment is extremely hard to accomplish. It requires auditing, alignment, vision, and buy-in. It's rare that product folks have the time to do this kind of work. They are often required to take a very myopic view that only includes their product. I think design systems are powerful tools for aligning platform-level patterns and my favorite example from my time at GovOS is global navigation.</p>
          <hr>

          <h2>Documentation for All</h2>
          <p>Documentation is the differentiator between a system that is used and a system that is ignored. I spend a huge amount of time writing and creating design documentation for the system. Above all, I want the system to be easy to use and understand for both designers and developers. Writing plain written and clear documentation and creating assets to explain the documentation, makes that a reality.</p>
            
          <p>Content writing seems like such a straightforward task, but anyone who has tried it will tell you it's incredibly difficult. It requires a deep understanding of design principles and engineering best practices and the ability to write in a way that is both precise and concise. I never considered a component or pattern done until the design and development documentation was written. Without great docs, there's no chance it'll be used right.</p>
          <hr>
          
          <h2>In Practice</h2>
          <p>Once the system foundations were solid and core components were created, the next step was collaborating with other UX designers to create mockups and user flows. Designers used the system to create a redesigned tax portal for State of Colorado and Alaska, updated our public search portal, and created platform components to be shared across all applications.</p>
          
          <p>Collaborating with other designers is important to me and comes naturally for me. Especially during the design process for the tax portal redesigns, I collaborated closely with designers to adapt components to their needs and participated in design critiques and reviews to make sure they knew my intentions when designing the components and patterns. It was the first stress test for using the system in such a large scale and on such a short timeline. It performed extremely well and allowed me to focus on the larger goals of maturing the system while still maintaining consistency across the product suite.</p>

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