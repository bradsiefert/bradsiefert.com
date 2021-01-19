// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/scss/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'
import FrontPage from '~/layouts/FrontPage.vue'
import StuffIUse from '~/layouts/StuffIUse.vue'
import VueFuse from 'vue-fuse'

// Adding FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faDribbble, faInstagram, faLinkedin, faProductHunt, faMedium } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = true;
library.add(faGithub, faTwitter, faDribbble, faInstagram, faLinkedin, faProductHunt, faMedium)

export default function (Vue, { router, head, isClient }) {
  Vue.use(VueFuse)
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Import FontAwesome
  Vue.component('font-awesome', FontAwesomeIcon)
}
