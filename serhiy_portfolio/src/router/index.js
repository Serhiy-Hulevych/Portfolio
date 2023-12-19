import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue"
import EducationPage from "@/views/EducationPage.vue"
import ProfessionPage from "@/views/ProfessionPage.vue"

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/Education",
        name: "EducationPage",
        component: EducationPage,
    },
    {
        path: "/Profession",
        name: "ProfessionPage",
        component: ProfessionPage,
    },
]

const router = createRouter({
    mode: "history",
    base: process.env.BASE_URL,
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router

