<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="navbar-brand">
        <g-link to="/"><img src="images/logo.svg" alt="Logo for Brad Siefert"></g-link>
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
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    showNav: false, // This is to make the navbar open/close on mobile.
  })
}
</script>
