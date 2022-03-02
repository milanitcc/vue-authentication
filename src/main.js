import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = '';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


const app = createApp(App);
app.use(router);

app.mount('#app');
