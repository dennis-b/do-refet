import { projectsState } from "@pages/Home/state/atoms";
import { selector } from "recoil";

const filteredProjectsState = selector({
    key: 'filteredProjectsState',
    get: ({ get }) => {
        const list = get(projectsState);
        return list
    },
});
