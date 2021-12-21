<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <h1 class="navbar-brand">
      <g-link to="/">
        Brad Siefert
      </g-link>
    </h1>

    <button 
      class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" 
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
      @click="showNav = !showNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" id="navbar" :class="{ 'show': showNav } ">
      <ul class="navbar-nav">
        <li class="nav-item">
          <g-link class="nav-link" rel="noopener" to="/portfolio">Design Portfolio</g-link>
        </li>
        <li class="nav-item">
          <g-link class="nav-link" rel="noopener" to="https://photos.bradsiefert.com">Photography</g-link>
        </li>
        <li class="nav-item">
          <g-link class="nav-link" rel="noopener" to="/siri-shortcuts">Siri Shortcuts</g-link>
        </li>
        <li class="nav-item">
          <g-link class="nav-link" rel="noopener" to="/downloads">Downloads</g-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" @click="showAboutDrop = !showAboutDrop">
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" :class="{ 'show': showAboutDrop } ">
            <g-link class="dropdown-item" rel="noopener" to="/about">Bio</g-link>
            <g-link class="dropdown-item" rel="noopener" to="/stuff-i-use">Stuff I Use</g-link>
            <g-link class="dropdown-item" rel="noopener" to="/contact">Contact Me</g-link>
          </ul>
        </li>
        <li class="nav-item">
          <g-link class="nav-link" rel="noopener" to="/blog">Blog</g-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    showNav: false, // This is to make the navbar open/close on mobile.
    showAboutDrop: false
  })
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

// Navbar
.navbar, .search-bar .form-control, .search-bar-results {
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  box-shadow: 0 0 32px 0 rgba(0,0,0,0.08);
  color: $black;
  border-radius: 0;
}

h1.navbar-brand  {
  font-family: "Tiempos Text";
  font-weight: 700;
  font-size: 1.25rem;
  padding: 4px 0 8px;
  margin: 0;
  width: 100%;
}

.navbar-brand a {
  color: $black;
}

.navbar .navbar-nav .nav-link {
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1rem;
}

.navbar-collapse {
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  .navbar {
    position: fixed;
    top: 64px;
    left: 0;
    min-width: 192px;
    min-height: 256px;
    padding: 2rem;
    display: block;
    flex-direction: column;
    border-radius: 0 12px 12px 0;
    z-index: 100;
  }

  .navbar .navbar-nav {
    flex-direction: column;
  }

  #navbar > ul.navbar-nav > li:last-of-type > a.nav-link {
    padding: 0;
  }

  .navbar-brand {
    font-size: 1.25rem;
    line-height: 1.2;
    padding-bottom: .5rem;
    margin-right: 4px;
    padding-top: 8px;
    white-space: normal;
  }

  .navbar-collapse {
    margin-top: 0;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .navbar {
    min-width: 176px;
    padding: 2rem 1.5rem;
  }
}

@media (min-width: 1023px) and (max-width: 1025px) {
  .navbar {
    min-width: 160px;
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 1023px) {
  h1.navbar-brand {
    width: auto;
    font-size: 1.75rem;
    margin: 6px 0 0;
    padding: 0;
  }
  
  .navbar {
    padding: 24px 16px 24px 24px;
    margin-bottom: 2rem;
    min-height: 96px;
  }
  
  .navbar-brand {
    font-size: 1.75rem;
    padding-top: 14px;
  }
  
  .navbar .navbar-nav .nav-link, 
  .navbar .navbar-nav .dropdown-item {
    padding: 0.5rem 0;
    font-size: 1.125rem;
  }
}

.navbar .navbar-nav .nav-link,
.navbar .navbar-nav .dropdown-item {
  padding: 0 0 2px;
  text-align: left;
  min-width: 0;
}

.navbar .navbar-nav .dropdown-menu a.dropdown-item {
  color: $black;
}

.navbar .navbar-nav .dropdown-menu a.dropdown-item:hover {
  color: $primary;
}

.dropdown-toggle::after {
  margin-left: .125em;
  vertical-align: .125em;
}

.navbar-expand-lg .navbar-nav .dropdown-menu {
  position: static;
  left: 0;
  top: 0;
  padding: 0;
  background-color: transparent;
  white-space: normal;
  min-width: 0 !important;
  border: none;
}

.navbar-expand-lg .navbar-nav .dropdown-menu .dropdown-item {
 padding: 0.125rem 0 0 0.75rem;
 background-color: transparent; 
 white-space: normal;
 min-width: none;
 font-weight: inherit;
}

.navbar .badge {
  font-size: $font-size-000;
}
</style>
