import { ProjectModel, projectSelectedState, projectSelectedStatsState } from "@pages/Home/pages/Project/state/atoms";
import { selector } from "recoil";
import { GraphTimeLineDataIfc } from "@shared/models";


export interface ProjectWithStatsModel extends ProjectModel {
    valueGraph: GraphTimeLineDataIfc[]
    currentValue: number
}

export const projectSelectedWithStatsState = selector({
    key: 'projectSelectedWithStatsState',
    get: ({ get }) => {
        const stats = get(projectSelectedStatsState);
        const selected = get(projectSelectedState);
        return { ...stats, ...selected }
    },
});
