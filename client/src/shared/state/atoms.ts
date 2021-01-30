import { atom } from "recoil";
import { homeRoutes } from "@pages/Home/homeRoutes";

const [defRoute] = homeRoutes;

export interface Route {
    name: string
    searchPath?: string
    path: string
}

export const navigationState = atom<Route>({
    key: "navigation",
    default: defRoute,
});
