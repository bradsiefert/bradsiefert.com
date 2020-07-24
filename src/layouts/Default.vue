<template>
  <div>
    <header>
      <Navbar />

      <!-- <div class="landing-hero">

        <div class="container">
          <div class="row">
            <div class="col-lg-12 mt-96 mb-160">
              <h1 class="display-1">
                Hi, I'm Brad, I’m a UX/UI <span class="landing-badge">designer <div class="badge badge-primary">My Day Job
                </div></span> and <span class="landing-badge">photographer <div class="badge badge-success">
                  My Passion</div></span> based in Chicago, IL
              </h1>
              <a href="https://www.brad.si/efert/portfolio/" class="btn btn-outline btn-primary btn-lg mb-16 mr-lg-2">
                Design Work
              </a>
              <a target="_blank" href="https://bradleysiefert.com" class="btn btn-outline btn-success btn-lg mb-16">
                Photo Work
              </a>
            </div>
          </div>
        </div>
      </div> -->
    </header>


    <main>
      <transition name="fade" appear>
        <slot/>
      </transition>
    </main>

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
  }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>