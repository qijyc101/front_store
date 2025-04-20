import { createApp } from 'vue';
import App from 'src/App.vue';
import Router from 'src/router'
import 'src/style.css'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(Router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount('#app');
