import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@icon-park/vue-next/styles/index.css'

import print from 'vue3-print-nb'
import 'md-editor-v3/lib/style.css';

import '../src/assets/css/public.css'
import '../src/assets/css/Editor.css'

const app = createApp(App)
app.use(store)
    .use(router)
    .use(ElementPlus)
    .use(print)
    .mount('#app')
