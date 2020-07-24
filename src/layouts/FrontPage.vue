<template>
  <div>
    <header>
      <div class="landing-hero">
        <Navbar />

        <div class="container">
          <div class="row">
            <div class="col-lg-12 mt-96 mb-160">
              <h1 class="display-1">
                Hi, I'm Brad, I’m a UX/UI <span class="landing-badge">designer <div class="badge bg-primary">My Day Job
                </div></span> and <span class="landing-badge">photographer <div class="badge bg-success">
                  My Passion</div></span> based in Chicago, IL
              </h1>
              <a href="https://www.brad.si/efert/portfolio/" class="btn btn-outline btn-primary btn-lg mb-16 mr-md-16">
                Design Work
              </a>
              <a target="_blank" href="https://bradleysiefert.com" class="btn btn-outline btn-success btn-lg mb-16">
                Photo Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="resume-earlybird">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <a target="_blank" href="https://earlybird.co">
              <img class="mb-32" src="images/logo-earlybird.svg" alt="Logo for Earlybird Software">
            </a>
            <div class="display-2 mb-32">
              For the past <span id="dateDisplay"></span> I’ve been the Product Designer at Earlybird
            </div>
            <div class="display-3 mb-32">
              We develop elegant custom data solutions for companies to help them make sense of their data. I’ve been able
              to design web and mobile app front-ends, create data reporting dashboards, and help provide branding ideation
              for startups and medium sized companies.
            </div>
            <a class="btn btn-highlight btn-lg" target="_blank" href="https://earlybird.co">Learn More</a>
          </div>
        </div>
      </div>
    </div>

    <div class="resume-spartz">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <img class="mb-16" style="width: 104px;" src="images/logo-spartz.png" alt="Spartz Media Logo">
            <div class="display-3 mb-32">
              Previously, I was a designer at Spartz Media (now <a target="_blank" href="https://dose.com/">Dose</a>) where
              we created  viral content websites and apps. I helped create logos, web design and helped out with front-end
              development for their suite of meme websites.
            </div>
          </div>
        </div>
      </div>
    </div>

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

export default {
  components: {
    Navbar, Footer
  },
  data: () => ({
    showNav: false, // This is to make the navbar open/close on mobile.
  })
}
</script>