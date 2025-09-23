<script setup>
  import { PhSwatches, PhImages, PhTextAlignLeft, PhUserCircle } from "@phosphor-icons/vue";
</script>

<template>
  <nav class="navbar d-flex justify-content-between align-items-center">
    <NuxtLink to="/" class="name d-flex align-items-center">
      <span class="title">Brad Siefert</span>
    </NuxtLink>
    <ul class="d-flex gap-3xs list-unstyled mb-0 align-items-center">
      <li class="nav-link">
        <NuxtLink to="/portfolio" class="d-flex align-items-center gap-2xs">
          <PhSwatches :size="24" /> Portfolio
        </NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink href="https://photos.bradsiefert.com" target="_blank" class="d-flex align-items-center gap-2xs">
          <PhImages :size="24" /> Photos ↗
        </NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink to="/blog" class="d-flex align-items-center gap-2xs">
          <PhTextAlignLeft :size="24" /> Blog
        </NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink to="/about" class="d-flex align-items-center gap-2xs">
          <PhUserCircle :size="24" /> About
        </NuxtLink>
      </li>
      <li>
        <darkmode />
      </li>
    </ul>
  </nav>
</template>

<style>
header {
  min-height: 128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.navbar {
  padding: 8px 16px;
  border-radius: 12px;
  box-shadow: 0 0 32px 0 rgba(0,0,0,0.12);
  border: 1px solid var(--color-neutral-300-alpha);
  background-color: var(--color-neutral-lightest);
  min-width: 768px;
  min-height: 56px;
  margin: 0 auto;
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.navbar .btn {
  font-size: var(--font-size-md);
  letter-spacing: var(--letter-spacing-md); 
  line-height: var(--line-heights-md);
  font-weight: var(--font-weights-regular);
  transition: background-color 0.3s ease;
  border: none;
  padding: 8px;
}

.navbar a, 
.navbar .btn {
  padding: 8px;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.navbar a:hover,
.navbar .btn:hover,
.navbar .btn:active {
  background-color: var(--color-neutral-200-alpha);
  border-radius: 6px;
}

.navbar .title {
  font-family: var(--font-family-serif);
  font-weight: var(--font-weights-extrabold);
  letter-spacing: var(--letter-spacing-md);
  line-height: var(--line-heights-md);
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .navbar {
    min-width: 100%;
    font-size: 16px !important;
    line-height: 24px !important;
    padding: 4px 8px;
  }

  .navbar .title {
    font-size: 16px !important;
    line-height: 24px !important;
  }

  .navbar .nav-link svg {
    display: none;
  }

  .navbar a, 
  .navbar .btn {
    padding: 6px;
  }
}

@media (max-width: 440px) {
  .navbar {
    font-size: 14px !important;
    line-height: 24px !important;
    padding: 4px 8px;
  }

  .navbar svg {
    height: 16px;
    width: 16px;
  }

  .navbar a, 
  .navbar .btn {
    padding: 4px;
  }
}
</style>