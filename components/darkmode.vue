<template>
  <button 
    @click="handleClick" 
    aria-label="Toggle Darkmode" 
    class="btn d-flex align-items-center gap-2xs" 
    title="Toggle Darkmode"
  >
    <slot :dark="isDarkMode" />
    
    <!-- Dark Mode State -->
    <template v-if="!isDarkMode">
      <PhMoon :size="24" />
      <span class="d-none d-sm-block">Dark Mode</span>
    </template>
    
    <!-- Light Mode State -->
    <template v-else>
      <PhSun :size="24" />
      <span class="d-none d-sm-block">Light Mode</span>
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