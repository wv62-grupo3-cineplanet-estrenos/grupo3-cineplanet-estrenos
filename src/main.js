import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
//PrimeVue
import PrimeVue from "primevue/config";

// Add theme for app
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

//prime icons
import 'primeicons/primeicons.css';

//PrimeFlex
import 'primeflex/primeflex.css';

//Services  From PrimeVue
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

//Router
import router from "./router/index.js";
import Button from "primevue/button";
import Card from "primevue/card";
import SelectButton from "primevue/selectbutton";
import Sidebar from "primevue/sidebar";
import Toolbar from "primevue/toolbar";
import Calendar from "primevue/calendar";
import Tag from "primevue/tag";
import InputText from "primevue/inputtext";


const app = createApp(App);

app.use(PrimeVue, { ripple: true })
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-toolbar', Toolbar)
    .component('pv-calendar', Calendar)
    .component('pv-tag', Tag)
    .component('pv-input-text', InputText)

    .use(router);

app.mount('#app');