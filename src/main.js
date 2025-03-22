import { createApp } from 'vue';
import App from './App.vue';
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import router from './router'; // Import your router

import './assets/main.css'; // Import Tailwind CSS file

const app = createApp(App);

app.use(router); // Use the router instance
app.use(VueTailwindDatepicker); 
app.mount('#app');
