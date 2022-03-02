import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/api/v1';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');
