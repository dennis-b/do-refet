import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import { DashboardPage } from "@pages/Home/pages/Dashboard/DashboardPage";
import { ProjectAddPage } from "@pages/Home/pages/Project/ProjectAddPage";
import { ProjectsPage } from "@pages/Home/pages/Project/ProjectsPage";
import { ProjectDetailsPage } from "@pages/Home/pages/Project/ProjectDetailsPage";


export const homeRoutes = [
    {
        path: "/home/dashboard",
        name: "Dashboard",
        component: DashboardPage,
        displayOnSideBar: true,
        icon: Person
    },
    {
        path: "/home/projects",
        name: "Projects",
        component: ProjectsPage,
        displayOnSideBar: true,
        icon: Person
    },
    {
        path: "/home/projects/add",
        name: "Add Project",
        component: ProjectAddPage,
        displayOnSideBar: false,
        icon: Person
    },
    {
        path: "/home/projects/edit",
        name: "Edit Project",
        component: ProjectAddPage,
        displayOnSideBar: false,
        icon: Notifications
    },
    {
        path: "/home/projects/details/:id",
        searchPath: "/home/projects/details",
        name: "Project Details",
        displayOnSideBar: false,
        component: ProjectDetailsPage,
        icon: Notifications
    },

];
