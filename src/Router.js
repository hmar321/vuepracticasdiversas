import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/Home.vue";
import CollatzComponent from "./components/Collatz.vue";

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/collatz", component: CollatzComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;