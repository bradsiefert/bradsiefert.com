<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <main>
      <DarkModeOnly />
      
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
    siteName,
    siteUrl
  }
}
</static-query>

<script>
// import SearchBar from '@/components/SearchBar.vue'
import DarkModeOnly from '@/components/DarkModeOnly.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar, Footer, DarkModeOnly
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