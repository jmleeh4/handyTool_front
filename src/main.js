import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
//import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Registration from './components/account/Registration'
import { VDatePickerTitle } from 'vuetify/lib/components/VDatePicker/VDatePickerTitle';


import { mdi, aliases } from 'vuetify/lib/iconsets/mdi'
import { fa } from "vuetify/lib/iconsets/fa";

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";


const vuetify = createVuetify({
    icons : {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
            fa,
        },
    },
    components : {
        VDatePickerTitle
    },
    directives,

})
const app = createApp(App);
/*axios 전역변수로 등록*/
app.config.globalProperties.axios = axios;
/*vuetify 적용*/
app.use(vuetify)
/*router 전역 사용*/
app.use(router)

app.component('Registration', {Registration})
/*Mount*/
app.mount('#app')
