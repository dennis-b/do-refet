import {atom} from "recoil";

export interface ProjectModel {
    name: string
    desc: string
    rri: string
}

export const projectsState = atom<ProjectModel[]>({
    key: "projects",
    default: [],
});