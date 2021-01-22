import { atom } from "recoil";

export interface ProjectModel {
    name: string
    description: string
    irr: string
}

export const projectsState = atom<ProjectModel[]>({
    key: "projects",
    default: [],
});
