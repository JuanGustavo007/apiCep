import { createApp } from "vue";
import App from "./App.vue";
import Maska from "maska";

const app = createApp(App);

app.mount("#app");

app.use(Maska);
