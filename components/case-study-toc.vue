<script setup>
import { PhCaretUp, PhCaretDown } from '@phosphor-icons/vue'

const tocItems = ref([])
const activeId = ref('')
const linksVisible = ref(true)
let observer = null

function slugify(text) {
  if (!text || typeof text !== 'string') return ''
  return text
    .toString()
    .toLowerCase()
    .replace(/\p{Emoji}/gu, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function buildToc() {
  if (typeof document === 'undefined') return

  const main = document.querySelector('main')
  if (!main) return

  const headings = main.querySelectorAll('h2')
  const items = [{ text: 'Overview', href: '#overview', id: 'overview' }]
  const slugCounts = {}

  headings.forEach((el) => {
    const text = el.textContent?.trim() || ''
    let slug = el.id || slugify(text)

    if (!slug) return

    if (slugCounts[slug] !== undefined) {
      slugCounts[slug]++
      slug = `${slug}-${slugCounts[slug]}`
    } else {
      slugCounts[slug] = 0
    }

    if (!el.id) {
      el.id = slug
    }
    el.classList.add('toc-scroll-target')

    items.push({ text, href: `#${slug}`, id: slug })
  })

  tocItems.value = items
}

function setupObserver() {
  if (typeof document === 'undefined') return

  const links = document.querySelectorAll('.case-study-toc a[href^="#"]')
  if (!links.length) return

  const headings = tocItems.value
    .map((item) => document.getElementById(item.id))
    .filter(Boolean)

  if (!headings.length) return

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting)
      if (visible.length === 0) return

      const sorted = visible.sort(
        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
      )
      const topmost = sorted[0]
      activeId.value = topmost.target.id
    },
    {
      rootMargin: '-100px 0px 0px 0px',
      threshold: 0.01
    }
  )

  headings.forEach((h) => observer.observe(h))
}

onMounted(() => {
  nextTick(() => {
    buildToc()
    nextTick(setupObserver)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <aside class="case-study-toc" aria-label="Table of Contents">
    <div class="glass-outer">
      <div class="glass-inner">
        <div class="glass-filter" />
        <div class="glass-overlay" />
        <div class="glass-specular" />
        <nav class="toc-content">
          <div class="toc-header">
            <div class="toc-label">Table of Contents</div>
            <button
              type="button"
              class="toc-toggle"
              :aria-expanded="linksVisible"
              :aria-label="linksVisible ? 'Collapse table of contents' : 'Expand table of contents'"
              @click="linksVisible = !linksVisible"
            >
              <PhCaretUp v-if="linksVisible" :size="18" />
              <PhCaretDown v-else :size="18" />
            </button>
          </div>
          <ul v-show="linksVisible" v-if="tocItems.length" class="toc-list list-unstyled mb-0">
            <li v-for="item in tocItems" :key="item.id" class="toc-item">
              <a
                :href="item.href"
                class="toc-link"
                :class="{ 'toc-link-active': activeId === item.id }"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.case-study-toc {
  display: none;
}

@media (min-width: 1440px) {
  .case-study-toc {
    display: block;
    animation: toc-fade-in 400ms ease-in;
  }
}

@keyframes toc-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1 !important;
  }
}

.toc-content {
  position: relative;
  z-index: 3;
  padding: 12px 12px;
  border-radius: 12px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  min-width: 192px;
}

.toc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toc-label {
  font-size: var(--font-size-md);
  letter-spacing: var(--letter-spacing-md);
  line-height: var(--line-heights-md);
  font-weight: var(--font-weights-bold);
  margin-bottom: 0;
}

.toc-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  color: inherit;
  transition: background-color 400ms ease-in-out;
}

.toc-toggle:hover {
  background-color: var(--color-neutral-200-alpha);
}

.toc-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.toc-link {
  display: block;
  padding: 4px 8px;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  font-size: var(--font-size-sm);
  letter-spacing: var(--letter-spacing-sm);
  line-height: var(--line-heights-sm);
  font-weight: var(--font-weights-regular);
  color: inherit;
  transition: background-color 400ms ease-in-out;
}

.toc-link:hover,
.toc-link.toc-link-active {
  background-color: var(--color-neutral-200-alpha);
}
</style>
