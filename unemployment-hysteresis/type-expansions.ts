import { BaseType, Selection } from 'd3';

export { }
declare global {
    interface Window {
        ChartStateDump: {
            filtering: boolean;
            data: ExpandedLFP[];
            steps: Selection<BaseType, unknown, BaseType, any>;
        };
    }
}

export interface ParsedLFP {
    "Country Code": string;
    "Country Name": string;
    "Indicator Name": string;
    "Indicator Code": string;
    number: number;
}

export interface ExpandedLFP {
    "Country Code": string;
    "Country Name": string;
    "Indicator Name": string;
    "date": Date;
    lfp: number;
}
export const selectedCountryCodes = [
    'ROU', //Romania,
    'FRA', //France
    'DEU', //Germany
    'POL', //Poland
    'HUN', // Hungary
    'GBR', // United Kingdom
]