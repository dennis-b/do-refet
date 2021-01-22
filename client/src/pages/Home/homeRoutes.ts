import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";

import {UserPage} from "@pages/User";
import { DashboardPage } from "@pages/Home/pages/Dashboard/DashboardPage";
import { AddProjectPage } from "@pages/Home/pages/AddProject/AddProjectPage";


export const homeRoutes = [
    {
        path: "/home/dashboard",
        name: "Dashboard",
        component: DashboardPage,
        icon: Person
    },
    {
        path: "/home/project/add",
        name: "Add Project",
        component: AddProjectPage,
        icon: Person
    },
    {
        path: "/home/project/edit",
        name: "Edit Project",
        component: AddProjectPage,
        icon: Notifications
    },

];
