<template>
  <div>
    <header>
      <Navbar />
    </header>
    
    <main>
      <div class="container skinny-contain landing-hero">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mb-16">
              <g-image 
                src="~/assets/images/avatar.jpg" 
                style="width: 64px;" 
                class="rounded-circle"
                alt="Avatar for Brad Siefert">
              </g-image>
            </div>

            <h1 class="display-1">
              Hi, I’m Brad and I’m a UI/UX Designer from Chicago.<br /><br />

              I love code and #nocode.<br />
              I’m a Siri Shortcuts enthusiast.<br /> 
              Each year I take around 50k+ photos.<br />
            </h1>

            <div class="text-center">
              <g-link to="/portfolio/" class="btn btn-outline-dark rounded-pill mb-16 mr-sm-16">
                Design Work
              </g-link>
              <a 
                target="_blank" rel="noopener" 
                href="https://bradleysiefert.com" 
                class="btn btn-outline-dark rounded-pill mb-16"
                title="Link to checkout my photography work" 
              >
                Photo Work
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>

    <!-- <div class="resume-earlybird">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <a 
              target="_blank" 
              rel="noopener"
              href="https://earlybird.co"
              title="Link to learn more about Earlybird Software" 
            >
              <g-image class="mb-32" src="~/assets/images/logo-earlybird.svg" alt="Logo for Earlybird Software" />
            </a>
            <div class="display-2 mb-32">
              For the past <span id="dateDisplay">{{ moment([2013, 8, 17]).fromNow(true) }}</span> I’ve been the 
              Product Designer at Earlybird
            </div>
            <div class="display-3 mb-32">
              We develop elegant custom data solutions for companies to help them make sense of their data. I’ve been 
              able to design web and mobile app front-ends, create data reporting dashboards, and help provide branding 
              ideation for startups and medium sized companies.
            </div>
            <a 
              class="btn btn-highlight btn-lg" 
              target="_blank" 
              rel="noopener"
              href="https://earlybird.co"
              title="Link Earlybird Software's website" 
            >
              Learn more about Earlybird
            </a>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="resume-spartz">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <g-image class="mb-16" style="width: 104px;" src="~/assets/images/logo-spartz.png" alt="Spartz Media Logo" />
            <div class="display-3 mb-32">
              Previously, I was a designer at Spartz Media (now 
              <a rel="noopener" target="_blank" title="Link to the Dose website" href="https://dose.com/">Dose</a>) 
              where we created  viral content websites and apps. I helped create logos, web design and helped out with 
              front-end development for their suite of meme websites.
            </div>
          </div>
        </div>
      </div>
    </div> -->


    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import moment from 'moment';

export default {
  components: {
    Navbar, Footer
  },
  data: () => ({
    showNav: false, // This is to make the navbar open/close on mobile.
  }),
  metaInfo() {
    return {
      title: 'Home',
      meta: [
        { property: "og:type", content: 'article' },
        { property: "og:title", content: "Brad Siefert / Designer & Photographer" },
        { property: "og:description", content: "Personal design portfolio and blog of Chicago based UI/UX Designer Brad Siefert." },
        { property: "og:url", content: "https://brad.si/efert" },
        { property: "og:image", content: "https://www.brad.si/efert/assets/static/src/assets/images/sharing.jpg" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Brad Siefert / Designer & Photographer" },
        { name: "twitter:description", content: "Personal design portfolio and blog of Chicago based UI/UX Designer Brad Siefert." },
        { name: "twitter:site", content: "@bksiefert" },
        { name: "twitter:creator", content: "@bksiefert" },
        { name: "twitter:image", content: "https://www.brad.si/efert/assets/static/src/assets/images/sharing.jpg" }
      ]
    };
  },
}
</script>