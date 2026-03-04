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
            <p>Colorado's existing tax system served hundreds of thousands of businesses but was difficult to navigate, visually inconsistent, and scored shockingly low on accessibility compliance. My design system served as a new visual foundation for building a modern, accessible user interface. I contributed to the research, created components, and designed the core user flows and interfaces for the tax filing and payment processes.</p>

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
          <img class="cdor-screens img-fluid mt-xl" src="/portfolio/case-study-cdor-cover-light.webp" alt="Screenshots of the Colorado State Tax Portal"/>
          <figcaption class="mt-md mb-none">Mockups of various core screens from the tax filing and payment flows</figcaption>
        </figure>
      </div>
    </div> 

    <div class="container skinny-contain portfolio-post">
      <div class="row"> 
        <div class="col-lg-12">
          <h2 class="mt-3xl">The Big Problem</h2>
          <p>A long time client to GovOS, The State of Colorado, had grown extremely frustrated with its aging Sales and Use Tax payment portal. It served hundreds of thousands of businesses who have locations or employees in Colorado and it was time for major improvements. The legacy experience was difficult to navigate, visually inconsistent, and frustrating for users trying to complete common but essential tasks like filing taxes and managing business licenses.</p>

          <p>The issue was a big enough deal that in 2023 Colorado passed <a href="https://leg.colorado.gov/bills/hb23-1017" rel="nofollow" target="_new">House Bill 23-1017</a>, the Electronic Sales & Use Tax Simplification System bill to allocate $5.4 million to fix the portal's issues. This bill was both an opportunity and a challenge. It made sure resources were available to create a new application, but it was also clear that if the job wasn't done well, the state would be pursuing other vendors. The application was built and delivered before my tenure, but when I reflected on the bill, it was humbling for a government to allocate millions of dollars to ensure you improve your application to do what it should already do well.</p>

          <p>Maybe the worst part was, the current application scored extremely low on accessibility checkers in violation of both federal and state laws. That opened up the state to potential litigation from the public. Given all of this, it became clear to the state that it needed a modern and accessible web application that would dramatically improve usability.</p> 

          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-cdor-legacy-suts.webp" aria-label="View full size: Various screenshots of the previous version Colorado State Tax Portal">
                <img class="mt-lg" src="/portfolio/case-study-cdor-legacy-suts.webp" alt="Various screenshots of the previous version Colorado State Tax Portal">
              </a>
            </span>
            <figcaption class="mt-0">Various screenshots of the previous version Colorado State Tax Portal</figcaption>
          </figure>
          <hr>

          <h2>Design & Systems Approach</h2>
          <p>When this opportunity came up the design system was still in its infancy. We had core foundations like our color scale, typography scale, iconography, and a handful of core components (button, menu, basic table, etc.) developed in code, but the system was far from mature. I had been hired in part to build the design system and get as far as I could before designs and code needed to be delivered. I pushed as hard as I could and I was very glad that I did. Those components and foundations would be the core that the application was developed on. Anything not fully ready would be custom built using Radix primitives and refactored later. This was not ideal, but it was far better than having no design system at all and choosing something off the shelf.</p>

          <p>Before starting to design the new application, we began by understanding the core users and their needs and outcomes. It had been decades since this had been examined, so there were many things to learn, integrate, and update. We began by interviewing users onsite. This provided many important insights that made their way into designing flows and building the interface to fit what they needed.</p>

          <p>Mapping the core filing workflows was the most important part of the whole application. Users had two major ways of filing: stepping through a workflow in the application or by uploading a spreadsheet. Nearly all tax professionals uploaded spreadsheets, and nearly all of the business users stepped through the workflow. It was a clear delineation between common user and power user that helped determine how to appropriately bifurcate the flows and interfaces.</p>
          
          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-cdor-designsystem1.webp" aria-label="View full size: Visual breakdown of the design system components that make up the tax filing wizard">
                <img class="mt-lg" src="/portfolio/case-study-cdor-designsystem1.webp" alt="Visual breakdown of the design system components that make up the tax filing wizard">
              </a>
            </span>
            <figcaption class="mt-0">Visual breakdown of the design system components that make up the tax filing wizard</figcaption>
          </figure>

          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-cdor-designsystem2.webp" aria-label="View full size: Documentation showing how the wizard component works on smaller screen sizes">
                <img class="mt-lg" src="/portfolio/case-study-cdor-designsystem2.webp" alt="Documentation showing how the wizard component works on smaller screen sizes">
              </a>
            </span>
            <figcaption class="mt-0">Documentation showing how the wizard component works on smaller screen sizes</figcaption>
          </figure>
          <hr>
          
          <h2>Product Collaboration</h2>
          <p>During this process we worked closely with the State of Colorado's stakeholders and subject matter experts to translate regulatory requirements into user flows. We didn't design screens in isolation. We built workflows and a wizard with clear progress indicators, form patterns, predictable validation, and confirmations that reduced uncertainty. Prototypes were shared frequently with the state to align on interpretation of tax rules and to catch gaps before development began.</p>

          <p>As flows stabilized, I worked to ensure that recurring interaction patterns were absorbed back into the design system. Complex form components, validation states, error messaging, alerts, and layout structures were standardized so teams weren't solving the same problems repeatedly. This helped the system and the product mature together. The system allowed us to move quickly without sacrificing long-term coherence, and it was used in a way that fit the tax portal uniquely. We embedded accessibility, hierarchy, and validation logic directly into components and reduced the overall cognitive load for users.</p>

          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-cdor-ui1.webp" aria-label="View full size: Components and copywriting for account registration and setup">
                <img class="mt-lg" src="/portfolio/case-study-cdor-ui1.webp" alt="Components and copywriting for account registration and setup">
              </a>
            </span>
            <figcaption class="mt-0">Components and copywriting for account registration and setup</figcaption>
          </figure>

          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-cdor-ui2.webp" aria-label="View full size: Example designs for showing tax burden, adding locations, and inputing unit income">
                <img class="mt-lg" src="/portfolio/case-study-cdor-ui2.webp" alt="Example designs for showing tax burden, adding locations, and inputing unit income">
              </a>
            </span>
            <figcaption class="mt-0">Example designs for showing tax burden, adding locations, and inputing unit income</figcaption>
          </figure>

          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-cdor-ui3.webp" aria-label="View full size: When designing application components, I made sure to include all possible states. Empty, filled, error, etc">
                <img class="mt-lg" src="/portfolio/case-study-cdor-ui3.webp" alt="When designing application components, I made sure to include all possible states. Empty, filled, error, etc">
              </a>
            </span>
            <figcaption class="mt-0">When designing application components, I made sure to include all possible states. Empty, filled, error, etc</figcaption>
          </figure>

          <figure>
            <span class="ultrawide-img">
              <a target="_blank" rel="nofollow" href="/portfolio/case-study-cdor-ui4.webp" aria-label="View full size: Mockup of various screens for notifications and previewing final totals for tax filing">
                <img class="mt-lg" src="/portfolio/case-study-cdor-ui4.webp" alt="Mockup of various screens for notifications and previewing final totals for tax filing">
              </a>
            </span>
            <figcaption class="mt-0">Mockup of various screens for notifications and previewing final totals for tax filing</figcaption>
          </figure>
          <hr>

          <h2>Impact & Learnings</h2>


          <div class="divider mt-5"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
definePageMeta({ layout: 'case-study' })
useHead({
  title: 'Case Study / Colorado State Tax Portal'
})
</script>