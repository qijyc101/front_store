import { createApp } from 'vue';
import App from 'src/App.vue';
import Router from 'src/router';
import 'src/style.css';

const app = createApp(App);
app.use(Router);
app.mount('#app');
