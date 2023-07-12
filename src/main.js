import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

// FontSource 
import "@fontsource/roboto"
import "@fontsource/roboto/100.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900.css"

// Fontawesome 
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebookF, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faMagnifyingGlass, faCircle as fasCircle} from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faFacebookF, faTwitter, faYoutube,faInstagram, faCartShopping, faMagnifyingGlass, fasCircle, farCircle )

createApp(App)
.component('FontAwesomeIcon', FontAwesomeIcon)
.mount('#app')
