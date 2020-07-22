<template>
  <div class="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div class="container">
          <div class="navbar-brand">
            <g-link class="nav-link" to="/">{{ $static.metadata.siteName }}</g-link>
          </div>

          <button 
            class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
            @click="showNav = !showNav" 
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse justify-content-stretch" id="navbar" :class="{ 'show': showNav } ">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <g-link class="nav-link" to="/portfolio">Design Portfolio</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/siri-shortcuts">Siri Shortcuts</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/about">About</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/blog">Blog</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/contact">Contact</g-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    <transition name="fade" appear>
      <main>
        <div class="container">
          <div class="row">
            <div class="col">
              <slot/>
            </div>
          </div>
        </div>
      </main>
    </transition>
    
    <footer class="bg-light py-2 mt-4 text-center">
      &copy; {{ new Date().getFullYear() }} {{ $static.metadata.siteName }}
    </footer>
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
export default {
  data: () => ({
    showNav: false, // This is to make the navbar open/close on mobile.
  })
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