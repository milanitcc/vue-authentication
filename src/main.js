import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://gabbyblog.herokuapp.com/';


const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
