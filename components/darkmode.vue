<template>
  <button 
    @click="handleClick" 
    aria-label="Toggle Darkmode" 
    class="btn d-flex gap-2xs justify-content-center" 
    title="Toggle Darkmode"
  >
    <slot :dark="isDarkMode" />
    
    <!-- Dark Mode State -->
    <template v-if="!isDarkMode">
      <PhMoon :size="24" />
      <span class="d-none d-md-block">Dark Mode</span>
    </template>
    
    <!-- Light Mode State -->
    <template v-else>
      <PhSun :size="24" />
      <span class="d-none d-md-block">Light Mode</span>
    </template>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { PhMoon, PhSun } from "@phosphor-icons/vue"

const LIGHTS_OUT = 'dark-mode'

// Expose the constant for other components to use
defineExpose({ LIGHTS_OUT })

const isDarkMode = ref(false)

// Optimized: Single function to handle all dark mode logic
const toggleDarkMode = (forceValue = null) => {
  const shouldBeDark = forceValue ?? !document.body.hasAttribute(LIGHTS_OUT)
  
  // Update DOM
  document.body.toggleAttribute(LIGHTS_OUT, shouldBeDark)
  
  // Update reactive state
  isDarkMode.value = shouldBeDark
  
  // Save to storage
  localStorage.setItem(LIGHTS_OUT, shouldBeDark.toString())
  
  return shouldBeDark
}

// Optimized: Simplified initialization
onMounted(() => {
  if (!process.client) return
  
  // Check storage first, then system preference
  const stored = localStorage.getItem(LIGHTS_OUT)
  const shouldBeDark = stored !== null 
    ? stored === 'true'
    : window.matchMedia('(prefers-color-scheme: dark)').matches
  
  toggleDarkMode(shouldBeDark)
})

// Optimized: Simplified click handler
const handleClick = () => toggleDarkMode()
</script>

<style>
@media (min-width: 768px) {
  .navbar-glass .btn {
    min-width: 128px;
  }
}

@media (max-width: 768px) {
  .navbar-glass .btn {
    font-size: 16px !important;
    line-height: 24px !important;
  }
}

@media (max-width: 480px) {
  .navbar-glass svg {
    height: 20px;
    width: 20px;
  }
}
</style>