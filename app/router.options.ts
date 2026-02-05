import type { RouterConfig } from '@nuxt/schema'

// REVIEW (page transition / scroll): Workaround for suspected Nuxt/Vue Router bug where scrollBehavior
// runs while the old page is still active (causing flash) or the new page paints at inherited scroll.
// We defer scroll-to-top until pathname matches the new route, and use __nuxt_restoring_scroll for
// back/forward. Re-evaluate when upgrading Nuxt—this may be fixed upstream.
export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      if (typeof window !== 'undefined') (window as unknown as { __nuxt_restoring_scroll?: boolean }).__nuxt_restoring_scroll = true
      return savedPosition
    }
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    // Resolve scroll as soon as the new route is active so we don't paint the new page at the old scroll position.
    const transitionMs = 200
    const maxWaitMs = 600
    return new Promise<{ top: number }>((resolve) => {
      const targetPath = to.path
      const resolveScroll = () => resolve({ top: 0 })
      setTimeout(() => {
        const start = Date.now()
        const check = () => {
          if (typeof window !== 'undefined' && window.location.pathname === targetPath) {
            requestAnimationFrame(resolveScroll)
            return
          }
          if (Date.now() - start > maxWaitMs) {
            resolveScroll()
            return
          }
          requestAnimationFrame(check)
        }
        requestAnimationFrame(check)
      }, transitionMs)
    })
  },
} satisfies RouterConfig
