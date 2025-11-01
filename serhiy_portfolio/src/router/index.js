import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue"
import EducationPage from "@/views/EducationPage.vue"
import ProfessionPage from "@/views/ProfessionPage.vue"
import CertificatesPage from "@/views/CertificatesPage.vue"

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
    {
        path: "/Certificates",
        name: "CertificatesPage",
        component: CertificatesPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior() {
        return { top: 0 };
    },
    routes
});

export default router

