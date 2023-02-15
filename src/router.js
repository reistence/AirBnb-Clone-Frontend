import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AdvancedSearch from "./pages/AdvancedSearch.vue"
import EstatePage from "./pages/EstatePage.vue"


// import About from "./pages/About.vue";
// import ProjectsList from "./pages/ProjectsList.vue";
// import SingleProject from "./pages/SingleProject.vue";
// import ContactUs from "./pages/ContactUs.vue";
// import NotFound from "./pages/NotFound.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome

        },
        {
            path: "/advancedSearch",
            name: "Advanced Search",
            component: AdvancedSearch

        },
        {
            path: "/about",
            name: "about",
            // component: About
        },
        {
            path: "/contact-us",
            name: "contact-us",
            // component: ContactUs,
        },
        {
            path: "/estates/:slug",
            name: "estate-page",
            component: EstatePage,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "Not-Found",
            // component: NotFound,
        }
    ]
})

export {router};