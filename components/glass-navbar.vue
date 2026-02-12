<script setup>
  import { PhBriefcase, PhImages, PhTextAlignLeft, PhUserCircle, PhGameController } from "@phosphor-icons/vue";
</script>

<template>
  <div class="glass-outer">
    <div class="glass-inner">
      <div class="glass-filter"></div>
      <div class="glass-overlay"></div>
      <div class="glass-specular"></div>
      <nav class="navbar-glass d-flex justify-content-between glass-content">
        <NuxtLink to="/" class="name glass-content__link d-flex align-items-center">
          <span class="title">Brad Siefert</span>
        </NuxtLink>
        <ul class="d-flex gap-3xs list-unstyled mb-0 align-items-center">
          <li class="nav-link">
            <NuxtLink to="/portfolio" class="glass-content__link d-flex align-items-center gap-2xs">
              <PhBriefcase :size="24" /> Portfolio
            </NuxtLink>
          </li>
          <!-- <li class="nav-link">
            <NuxtLink to="https://playground.bradsiefert.com" target="_blank" class="glass-content__link d-flex align-items-center gap-2xs">
              <PhGameController :size="24" /> Playground ↗
            </NuxtLink>
          </li> -->
          <li class="nav-link">
            <NuxtLink href="https://photos.bradsiefert.com" target="_blank" class="glass-content__link d-flex align-items-center gap-2xs">
              <PhImages :size="24" /> Photos ↗
            </NuxtLink>
          </li>
          <li class="nav-link">
            <NuxtLink to="/blog" class="glass-content__link d-flex align-items-center gap-2xs">
              <PhTextAlignLeft :size="24" /> Blog
            </NuxtLink>
          </li>
          <li class="nav-link">
            <NuxtLink to="/about" class="glass-content__link d-flex align-items-center gap-2xs">
              <PhUserCircle :size="24" /> About
            </NuxtLink>
          </li>
          <li>
            <darkmode />
          </li>
        </ul>
      </nav>
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <filter id="lensFilter" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feComponentTransfer in="SourceAlpha" result="alpha">
            <feFuncA type="identity" />
          </feComponentTransfer>
          <feGaussianBlur in="alpha" stdDeviation="50" result="blur" />
          <feDisplacementMap in="SourceGraphic" in2="blur" scale="50" xChannelSelector="A" yChannelSelector="A" />
        </filter>
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* Glass */
.glass-outer {
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  min-width: 768px;
  min-height: 56px;
  margin: 0 auto;
  padding: 0;
}

.glass-inner {
  background: transparent;
  box-shadow: 0 0 24px 0 rgba(0,0,0,0.16);
  border: 1px solid var(--color-neutral-400-alpha);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
  border-radius: 12px;
  padding: 0;
}

.glass-filter,
.glass-overlay,
.glass-specular {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 0;
}

.glass-filter {
  z-index: 0;
  backdrop-filter: blur(4px);
  filter: url(#lensFilter) saturate(111%) brightness(1.08);
}

.glass-overlay {
  z-index: 1;
  background: rgba(255, 255, 255, 0.48);
}

.glass-specular {
  z-index: 2;
  border: 1px solid var(--color-neutral-300-alpha);
  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.8),
    inset 0 0 5px rgba(255, 255, 255, 0.8);
}

.glass-content {
  position: relative;
  z-index: 3;
  padding: 0;
}

/* Navigation */
.navbar-glass {
  padding: 8px 16px;
  border-radius: 12px;
}

.navbar-glass a, 
.navbar-glass .btn {
  padding: 8px;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  font-size: var(--font-size-lg);
  letter-spacing: -0.1px; 
  line-height: var(--line-heights-lg);
  font-weight: var(--font-weights-regular);
}

.navbar-glass a:hover,
.navbar-glass .btn:hover,
.navbar-glass .btn:active {
  background-color: var(--color-neutral-200-alpha);
  border-radius: 6px;
  transition: background-color 400ms ease-in-out;
}

.navbar-glass .title {
  font-family: var(--font-family-serif);
  font-weight: var(--font-weights-extrabold);
  letter-spacing: var(--letter-spacing-md);
  line-height: var(--line-heights-md);
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .glass-outer {
    top: 24px;
  }

  .navbar-glass, .glass-outer, .glass-inner {
    width: 100%;
    min-width: 0;
    font-size: 16px !important;
    line-height: 24px !important;
  }

  .navbar-glass .title {
    font-size: 16px !important;
    line-height: 24px !important;
  }

  .navbar-glass .nav-link svg {
    display: none;
  }

  .navbar-glass a, 
  .navbar-glass .btn {
    padding: 6px;
    font-size: 115% !important;
  }
}

@media (max-width: 512px) {
  .navbar-glass {
    padding: 8px 12px;
  }

  .navbar-glass, .glass-outer, .glass-inner {
    font-size: 16px !important;
    line-height: 24px !important;
  }

  .navbar-glass {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .navbar-glass .nav-link svg {
    display: block;
  }

  .navbar-glass svg {
    height: 20px;
    width: 20px;
  }

  .navbar-glass a, 
  .navbar-glass .btn {
    padding: 4px;
  }

  @media (max-width: 512px) {
    .navbar-glass .nav-link svg {
      display: none;
    }

    .navbar-glass ul {
      gap: 12px !important;
    }
  }
}
</style>