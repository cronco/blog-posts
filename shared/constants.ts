import { ParseRemoteConfig } from 'papaparse';

interface MarkOption {

}

interface PlotStyleOptions {
    [key: string]: string | number;
}

interface PlotOptions {
    style: PlotStyleOptions;
    className?: string;
    ariaLabel: string;
    ariaDescription: string;
    facet: object;
    marks: MarkOption[];
    marginLeft: number | string;
    marginRight: number | string;
    marginBottom: number | string;
    marginTop: number | string;
    color: object;
}

export const colors = [
    '#32ADC4',
    '#8D6A9F',
    '#F8EA4F',
    '#F45D52',
    '#98E378'
];

export const defaultPapaConfig: Partial<ParseRemoteConfig> = {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
};

export const defaultChartConfig: Partial<PlotOptions> = {
    marginLeft: 50,
    marginRight: 30,
    marginBottom: 50,
    color: {
        range: colors,
    },
    style: {
        fontSize: '12px',
    },
};

export const defaultLegendConfig = {
    style: {
        fontFamily: "Segoe UI",
        fontWeight: "bold",
    }
}
