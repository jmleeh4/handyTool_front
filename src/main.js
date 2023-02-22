import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import { mdi, aliases } from 'vuetify/lib/iconsets/mdi'
import { fa } from "vuetify/lib/iconsets/fa";

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";


const vuetify = createVuetify({
    icons : {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
            fa,
        },
    },
    components,
    directives,

})

createApp(App).use(vuetify).use(router).mount('#app')
