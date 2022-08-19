import { Line } from "@observablehq/plot";
export interface MarkOptions {
    x: string | ((d: any) => any);
    y: string | ((d: any) => any);
    stroke?: string;
    filter?: (d: any) => boolean;
}

export interface PlotStyleOptions {
    [key: string]: string | number;
}

export interface PlotAxisOptions {
    tickRotate: number;
    ticks: number;
    tickFormat: (d: any) => string;
    nice: boolean;
    tickPadding: number;
    grid: boolean;
    label: string;
    bar: boolean;
}

export type Mark = (data: any, options: MarkOptions) => Line;

export interface PlotOptions {
    style: PlotStyleOptions;
    className?: string;
    ariaLabel: string;
    ariaDescription: string;
    facet: object;
    marks: Mark[];
    marginLeft: number | string;
    marginRight: number | string;
    marginBottom: number | string;
    marginTop: number | string;
    color: object;
    x: PlotAxisOptions;
    y: PlotAxisOptions;
}