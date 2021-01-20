import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";

import {UserPage} from "@pages/User";
import {DashboardPage} from "@pages/Home/pages/Dashboard/DashboardPage";


export const homeRoutes = [
    {
        path: "/home/dashboard",
        name: "Dashboard",
        component: DashboardPage,
        icon: Person
    },
    {
        path: "/user",
        name: "User",
        component: UserPage,
        icon: Person
    },
    {
        path: "/settings",
        name: "Settings",
        component: UserPage,
        icon: Notifications
    },

];
