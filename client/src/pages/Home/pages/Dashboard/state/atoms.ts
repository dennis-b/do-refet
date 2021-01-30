import { atom } from "recoil";

export interface Stats {
    currentValue: number
    valueGraph: any[]
    investedValueGraph?: any[]
}

export const dashboardState = atom<Stats>({
    key: "dashboardStats",
    default: { currentValue: 0, valueGraph: [], investedValueGraph: [] },
});
