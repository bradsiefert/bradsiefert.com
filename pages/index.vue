<template>
  <div class="container skinny-contain">
    <div class="row landing-hero">
      <div class="col-sm-12">
        <div class="text-center mb-5">
          <img
            src="~/assets/images/avatar.jpg"
            style="width: 128px;"
            class="rounded-circle"
            alt="Avatar for Brad Siefert">
        </div>

        <h1 class="display-1 mb-6">
          Hi, 👋🏻 &nbsp;I’m Brad and I’m a <a target="_new" rel="noopener" href="https://indeed.design/article/what-is-a-design-technologist">Design Technologist</a> from Chicago, IL.
        </h1>

        <div class="display-1">
          I build <a target="_new" rel="noopener" href="https://designsystemsrepo.com/">design systems</a>, love elegant <a target="_new" rel="noopener" href="https://www.makingsoftware.com/">UI design</a>,
          advocate for <a target="_new" rel="noopener" href="https://www.w3.org/WAI/">accessibility</a>, and <a target="_new" rel="noopener" href="https://github.com/bradsiefert">code</a> as much as I can. I take around ~25K photos annually. 
        </div>

        <div class="text-center my-6">
          <NuxtLink
            to="/portfolio"
            class="btn btn-primary rounded-pill mb-3 me-md-3">
            See Design Work &nbsp;🎨
          </NuxtLink>
          <a
            target="_new"
            rel="noopener"
            href="https://photos.bradsiefert.com"
            class="btn btn-outline-dark rounded-pill mb-3"
            title="Link to checkout my photography work">
            See Photo Projects &nbsp;📸
          </a>
        </div>

        <hr class="mb-2">
        <div class="row">
          <div class="col">
            <h2 class="h3 font-size-500 mb-5">Currently</h2>
            <div class="row">
              <div class="col-md-4">
                <a target="_new" href="https://govos.com/" title="Link to GovOS" rel="nofollow">
                  <img
                    class="logo-govos img-fluid mb-3"
                    style="max-width: 144px;"
                    src="~/assets/images/govos-logo-light.svg"
                    alt="Logo for GovOS">
                </a>
              </div>
              <div class="col-md-8">
                <h2>Lead Designer, Design Systems @ GovOS</h2>
                <p class="mb-4">
                  I lead the creation, organization, and implementation of the GovOS Design System. My work includes designing, writing, engineering, and collaborating with designers. I craft components, user flows, and documentation that serve our design and development teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr class="mb-2">
        <div class="row">
          <div class="col">
            <h2 class="h3 font-size-500 mb-5">Volunteering</h2>
            <div class="row">
              <div class="col-md-4">
                <a target="_new" href="https://openarmsministry.org" title="Link to Open Arms Ministry" rel="nofollow">
                  <img
                    class="img-fluid mb-3 oam"
                    src="~/assets/images/oam-logo.svg"
                    alt="Logo for Open Arms Ministry">
                </a>
              </div>
              <div class="col-md-8">
                <h2>Board Member @ Open Arms Ministry</h2>
                <p class="mb-4">
                  Since 2018, I've been on the board of a homelessness non-profit, Open Arms, focused on improving our internal systems and IT. It's been a great opportunity to learn how to blend code and no-code solutions to create more effective operations. I'm honored to have been given the responsibility to help support the community with my technical skills and gifts.
                </p>

                <!--<p class="mb-4">
                  <a
                    target="_new"
                    href="https://openarmsministry.org"
                    class="btn btn-sm btn-outline-dark rounded-pill mb-3 me-md-3"
                    rel="nofollow"
                  >
                    Check out Open Arms &nbsp;➡️
                  </a>
                </p>-->
              </div>
            </div>
          </div>
        </div>

        <hr class="mb-2">
        <div class="row jobs">
          <div class="col">
            <div class="row">
              <div class="col-md-4">
                <h3 class="h3 font-size-500 mb-5">Previously</h3>
              </div>
              <div class="col-md-8">
                <div class="d-sm-flex justify-content-between text-center mt-3">
                  <div>
                    <img
                      class="img-fluid mt-1 mb-4"
                      src="~/assets/images/nielsen-logo-light.svg"
                      alt="Logo for Nielsen">
                  </div>
                  <div>
                    <img
                      class="img-fluid mb-4"
                      src="~/assets/images/earlybird-logo-dark.svg"
                      alt="Logo for Earlybird">
                  </div>
                  <div>
                    <img
                      class="img-fluid mb-4"
                      src="~/assets/images/dose.svg"
                      alt="Logo for Dose aka Spartz">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/variables.scss";

// Landing Page
.landing-hero {
  font-family: "Tiempos Text";
}

.landing-hero p {
  font-family: "Benton Sans";
  font-weight: normal;
}

.landing-hero h2 {
  font-size: 1.25rem;
  letter-spacing: 0;
}

.landing-hero .btn {
  min-width: 12rem;
}

@media (max-width: 1024px) {
  .landing-hero {
    margin-top: 2rem;
  }

  .landing-hero .btn {
    width: 100%;
  }
}

@media (max-width: 512px) {
  .landing-hero .display-1 {
    font-size: 1.8rem;
  }
}
</style>

<script setup lang="ts">
definePageMeta({
  documentDriven: false
})
useHead({
  title: 'UX Designer & Photographer'
})
</script>