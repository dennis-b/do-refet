import { projectsState } from "@pages/Home/pages/Project/state/atoms";
import { selector } from "recoil";

const filteredProjectsState = selector({
    key: 'filteredProjectsState',
    get: ({ get }) => {
        const list = get(projectsState);
        return list
    },
});
