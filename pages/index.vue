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
          Hi, 👋🏻 &nbsp;I’m Brad and I’m a Design Technologist from Chicago, IL.
        </h1>

        <div class="display-1">
          I love <a target="_new" rel="noopener" href="https://designsystemsrepo.com/">Design Systems</a> & the <a target="_new" rel="noopener" href="https://jamstack.org/">Jamstack</a>.<br />
          I’m a <a target="_new" rel="noopener" href="https://shortcuts.directory/">Siri Shortcuts enthusiast</a>.<br />
          I average <a target="_new" rel="noopener" href="https://photos.bradsiefert.com">25K photos</a> taken annually.<br />
        </div>

        <div class="text-center my-6">
          <NuxtLink
            to="/portfolio"
            class="btn btn-outline-dark rounded-pill mb-3 me-md-3">
            View Design Work &nbsp;🎨
          </NuxtLink>
          <a
            target="_new"
            rel="noopener"
            href="https://photos.bradsiefert.com"
            class="btn btn-outline-dark rounded-pill mb-3"
            title="Link to checkout my photography work"
          >
            See Photo Projects &nbsp;📸
          </a>
        </div>

        <hr class="mb-2">
        <div class="row">
          <div class="col">
            <h2 class="h3 font-size-500 mb-5">Currently</h2>
            <div class="row">
              <div class="col-md-4">
                <a target="_new" href="https://www.nielsen.com/" title="Link to Nielsen" rel="nofollow">
                  <img
                    class="img-fluid mb-3 logo"
                    style="max-width: 160px;"
                    src="~/assets/images/nielsen-logo-light.png"
                    alt="Logo for Nielsen">
                </a>
              </div>
              <div class="col-md-8">
                <h2>Lead Designer, Design Systems @ Nielsen</h2>
                <p class="mb-4">
                  I lead the creation, organization, and implementation of the UI elements for Nielsen's Global Design System. My work includes designing, writing, engineering, customer service, and education. I help craft UI, user flows, and documentation that serve our design and development teams. The system is fueling Nielsen One, a next generation suite of applications from Nielsen.
                </p>

                <p class="mb-0">
                  <NuxtLink
                    to="/case-studies/nielsen-global-design-system"
                    class="btn btn-sm btn-outline-dark rounded-pill mb-3 me-md-3">
                    Read my Nielsen Case Study &nbsp;🎨
                  </NuxtLink>
                </p>

                <p class="mb-4">
                  <a
                    target="_new"
                    href="https://nielsendesignsystem.com"
                    class="btn btn-sm btn-outline-dark rounded-pill mb-3 me-md-3">
                    Check out Nielsen's Global Design System &nbsp;➡️
                  </a>
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

                <p class="mb-4">
                  <a
                    target="_new"
                    href="https://openarmsministry.org"
                    class="btn btn-sm btn-outline-dark rounded-pill mb-3 me-md-3"
                    rel="nofollow"
                  >
                    Check out Open Arms &nbsp;➡️
                  </a>
                </p>
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

                <div class="row mt-3">
                  <div class="col-sm-4 text-center text-sm-start">
                    <img
                      class="img-fluid mb-4"
                      src="~/assets/images/earlybird-logo-dark.svg"
                      alt="Logo for ColorJar">
                  </div>
                  <div class="col-sm-4 text-center text-sm-end">
                    <img
                      class="img-fluid mb-4"
                      src="~/assets/images/colorjar.svg"
                      alt="Logo for ColorJar">
                  </div>
                  <div class="col-sm-4 text-center text-sm-end">
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
</script>