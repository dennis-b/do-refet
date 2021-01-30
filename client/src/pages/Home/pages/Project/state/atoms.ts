import { atom } from "recoil";

export interface ProjectModel {
    name: string
    description: string
    irr: number
    id: string
    currency: string
    type: string
    startDate: string
    endDate: string
    equity: number
}

export const projectsState = atom<ProjectModel[]>({
    key: "projects",
    default: [],
});

export const projectSelectedState = atom<ProjectModel | {}>({
    key: "projectSelected",
    default: {},
});

export const projectSelectedStatsState = atom<any>({
    key: "projectSelectedStats",
    default: {},
});
