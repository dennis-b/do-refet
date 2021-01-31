import { HomePage } from "@pages/Home";
import { LoginPage } from "@pages/Auth/LoginPage";

export const appRoutes = [
    {
        path: "/home",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
    },

];
