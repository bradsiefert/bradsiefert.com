<template>
  <div>
    <header>
      <Navbar />
    </header>
  
    <main>
      <SearchBar />
      
      <div class="container skinny-contain">
        <div class="row landing-hero">
          <div class="col-sm-12">
            <div class="text-center mb-5">
              <g-image 
                src="~/assets/images/avatar.jpg" 
                style="width: 128px;" 
                class="rounded-circle"
                alt="Avatar for Brad Siefert">
              </g-image>
            </div>
  
            <h1 class="display-1">
              Hi, 👋🏻 &nbsp;I’m Brad and I’m a UI/UX Designer from Chicago, IL.<br /><br />
  
              I love <a target="_new" rel="noopener" href="https://jamstack.org/">front-end development</a>.<br />
              I’m a <a target="_new" rel="noopener" href="https://shortcuts.directory/">Siri Shortcuts enthusiast</a>.<br /> 
              Each year I take around <a target="_new" rel="noopener" href="https://photos.bradsiefert.com">50k+ photos</a>.<br />
            </h1>
  
            <div class="text-center my-6">
              <g-link 
                target="_new"
                to="/portfolio/" 
                class="btn btn-outline-dark rounded-pill mb-3 me-md-3">
                View Design Work &nbsp;🎨
              </g-link>
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
  
            <hr class="mb-5">
            <div class="row">
              <div class="col">
                <h2 class="h3 font-size-500 mb-5">Currently</h2>
                <div class="row">
                  <div class="col-md-4">
                    <a href="https://earlybird.co" title="Link to Earlybird Software" rel="nofollow">
                      <g-image
                        class="img-fluid mb-3"
                        src="~/assets/images/earlybird-logo.svg" 
                        alt="Logo for Earlybird Software">
                      </g-image>
                    </a>
                  </div>
                  <div class="col-md-8">
                    <h2>UI/UX Designer @ Earlybird Software</h2>
                    <p class="mb-7">
                      Since 2013, I've been the UI/UX Designer at Earlybird, a cloud computing agency focused on building smarter business operations. I've helped design and build web and mobile apps that support internal processes and customer dashboards. I create the flows, designs, and develop the web front-ends for our products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <hr class="mb-5">
            <div class="row">
              <div class="col">
                <h2 class="h3 font-size-500 mb-5">Volunteering</h2>
                <div class="row">
                  <div class="col-md-4">
                    <a href="https://openarmsministry.org" title="Link to Open Arms Ministry" rel="nofollow">
                      <g-image
                        class="img-fluid mb-3"
                        src="~/assets/images/oam-logo.svg" 
                        alt="Logo for Open Arms Ministry">
                      </g-image>
                    </a>
                  </div>
                  <div class="col-md-8">
                    <h2>Board Member @ Open Arms Ministry</h2>
                    <p class="mb-7">
                      Since 2018, I've been on the board of a homelessness non-profit, Open Arms, focused on improving our internal systems and IT. It's been a great opportunity to learn how to blend code and no-code solutions to create more effective operations. I'm honored to have been given the responsibility to help support the community with my technical skills and gifts. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <hr class="mb-5">
            <div class="row jobs">
              <div class="col">
                <div class="row">
                  <div class="col-md-4">
                    <h2 class="h3 font-size-500 mb-5">Previously</h2>
                  </div>
                  <div class="col-md-8">
  
                    <div class="row">
                      <div class="col-4 text-start">
                        <g-image
                          class="img-fluid mb-4"
                          src="~/assets/images/colorjar.svg" 
                          alt="Logo for ColorJar">
                        </g-image>
                      </div>
                      <div class="col-4 text-center">
                        <g-image
                          class="img-fluid mb-4"
                          src="~/assets/images/dose.svg" 
                          alt="Logo for Dose aka Spartz">
                        </g-image>
                      </div>
                      <div class="col-4 text-end">
                        <g-image
                          class="img-fluid mb-4"
                          style="width: 80px;"
                          src="~/assets/images/forbes.png" 
                          alt="Logo for Forbes">
                        </g-image>
                      </div>
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </main>
  
    <Footer />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar, Footer, SearchBar
  },
  data: () => ({
    showNav: false, // This is to make the navbar open/close on mobile.
  }),
  metaInfo() {
    return {
      title: 'UI/UX Designer',
      meta: [
        { property: "og:type", content: 'article' },
        { property: "og:title", content: "Brad Siefert / Designer & Photographer" },
        { property: "og:description", content: "Personal design portfolio and blog of Chicago based UI/UX Designer Brad Siefert." },
        { property: "og:url", content: "https://brad.si/efert" },
        { property: "og:image", content: "https://bradsiefert.com/files/sharing.jpg" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Brad Siefert / Designer & Photographer" },
        { name: "twitter:description", content: "Personal design portfolio and blog of Chicago based UI/UX Designer Brad Siefert." },
        { name: "twitter:site", content: "@bksiefert" },
        { name: "twitter:creator", content: "@bksiefert" },
        { name: "twitter:image", content: "https://bradsiefert.com/files/sharing.jpg" }
      ]
    };
  },
}
</script>

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