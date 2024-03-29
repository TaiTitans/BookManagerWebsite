import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import router from './router'; // import Vue Router
import App from './App.vue';

const app = createApp(App);
app.use(router); // use Vue Router
app.use(PrimeVue);
app.mount('#app');
