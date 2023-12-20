import { createApp } from 'vue'
import './assets/styles/general.scss'
import App from './App.vue'

createApp(App).mount('#app')

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown)