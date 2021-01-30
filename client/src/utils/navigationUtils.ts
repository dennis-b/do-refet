import { homeRoutes } from "@pages/Home/homeRoutes";
import { appRoutes } from "../App/appRoutes";
import { containsNumber } from "@utils/appUtils";

export const activeRoute = (routeName: string) => window.location.href.indexOf(routeName) > -1

export const allRoutes = [...appRoutes, ...homeRoutes];

export function getActiveRouteName() {
    const [active] = allRoutes.filter((route: any) => {
            let pathname = window.location.pathname;
            const arr: string[] = pathname.split('/');
            const last: any = arr.pop();
            if (containsNumber(last)) {
                pathname = arr.join('/');
            }
            return pathname === route.searchPath || pathname === route.path
        }
    ) || []
    return active;
}
