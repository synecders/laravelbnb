import VueRouter from "vue-router";

import Bookables from "./bookables/Bookables";
import Example2 from "./components/Example2";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home",
    },
    {
        path: "/second",
        component: Example2,
        name: "second",
    },
];

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
});

export default router;