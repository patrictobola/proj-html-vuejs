import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

// Fontawesome 
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebookF, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFacebookF, faTwitter, faYoutube,faInstagram, faCartShopping, faMagnifyingGlass )

createApp(App)
.component('FontAwesomeIcon', FontAwesomeIcon)
.mount('#app')
