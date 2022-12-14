import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faAngleDown)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
