import { ReactNode } from "react";

export type WithChildren<T = {}> = T & { children?: ReactNode };

export enum ProjectType {
    Construction = "Construction",
    ValueAdd = "ValueAdd",
    ConstructionFund = "ConstructionFund"
}

export interface GraphTimeLineDataIfc {
    date: string
    value: number
}
