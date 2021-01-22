import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import { DashboardPage } from "@pages/Home/pages/DashboardPage";
import { AddProjectPage } from "@pages/Home/pages/AddProjectPage";
import { ProjectsPage } from "@pages/Home/pages/ProjectsPage";


export const homeRoutes = [
    {
        path: "/home/dashboard",
        name: "Dashboard",
        component: DashboardPage,
        icon: Person
    },
    {
        path: "/home/projects",
        name: "Projects",
        component: ProjectsPage,
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
