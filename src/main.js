//Project begin 24/05/2024 

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faMap, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faMap, faPaperPlane)

loadFonts()

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(vuetify)
  .mount('#app')
