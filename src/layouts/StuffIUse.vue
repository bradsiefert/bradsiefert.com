<template>
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <SearchBar />
      
      <transition name="fade" appear>
        <div class="container skinny-contain">
          <div class="row">
            <div class="col">
              <h1>Stuff I Use</h1>
              <p class="">I spend a lot of time thinking about this junk. I figure I might as well tell y'all about it.</p>
              <p class="font-size-100 font-monospace text-uppercase">Last Update: 2021-01-17</p>
              
              <hr class="my-5">
              <slot/>
            </div>
          </div>
        </div>
      </transition>
    </main>

    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteUrl
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar.vue'
import SearchBar from '@/components/SearchBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar, Footer, SearchBar
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