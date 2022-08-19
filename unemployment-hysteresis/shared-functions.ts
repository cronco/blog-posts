import { utcFormat } from 'd3';
import { CallbackResponse } from 'scrollama';
import { html } from 'htl';
import * as Plot from "@observablehq/plot";
import { defaultChartConfig, defaultLegendConfig } from '../shared/constants';
import { Mark, MarkOptions, PlotOptions } from '../shared/types';
import { ExpandedLFP, ParsedLFP, selectedCountryCodes } from './type-expansions';

export const parseFemaleDataParticipation = (data: ParsedLFP[]) => {
    const fixedProps = [
        "Country Code",
        "Country Name",
        "Indicator Code",
        "Indicator Name",
    ]
    return data.flatMap(row => {
        const keys = Object.keys(row);
        const years = keys.filter(_ => !fixedProps.includes(_))
        const expandedYears: ExpandedLFP[] = years.map(year => ({
            "Country Code": row["Country Code"],
            "Country Name": row["Country Name"],
            "Indicator Name": row["Indicator Name"],
            "date": new Date(`${year}-01-01`),
            "lfp": parseFloat(row[year])
        }));
        return expandedYears;
    });
}

function handleResize() {

}

function handleStepEnter(response: CallbackResponse) {
    let { data, filtering, steps } = window.ChartStateDump;
    const { element, direction, index } = response;
    // add color to current step only
    steps.classed("is-active", function (d, i) {
        return i === index;
    });
    let newOptions;
    if (index % 2) {
        filtering = false;
    } else {
        filtering = true;
    }
    console.log(window.ChartStateDump.filtering)
    newOptions = generateChartOptions(data, filtering);
    const LfpLineChart = Plot.plot(newOptions);
    document.getElementById('chart-1')?.querySelector('figure')?.remove();
    document.getElementById('chart-1')?.insertAdjacentElement('afterbegin', LfpLineChart);
    if (filtering) {
        document.getElementById('chart-1')?.append(LfpLineChart.legend('color', {
            ...defaultLegendConfig,
            color: {
                domain: selectedCountryCodes,
            }
        }));
    }

    console.log("step enter", arguments);
}

export function generateChartOptions(data: ExpandedLFP[], filtering: boolean, activeStep: number = 0) {
    const chartOptions: Partial<PlotOptions> = {
        ...defaultChartConfig,
        x: {
            tickRotate: -45,
            ticks: 20,
            tickFormat: utcFormat("%Y"),
            grid: true,
        },
        y: {
            nice: true,
            ticks: 10,
            tickPadding: 10,
            bar: true,
            grid: true,
            label: data.length ? data[0]["Indicator Name"] : "lfp",
            tickFormat: d => `${d} %`
        },
        style: {
            ...defaultChartConfig.style,
        },
        color: {
            ...defaultChartConfig.color,
            domain: selectedCountryCodes,
        },
        caption: html`Figure 1. Labour force participation for women across different nations, 1989 - 2021. Data Source: <a href="https://data.worldbank.org/indicator/SL.TLF.CACT.FE.NE.ZS">International Labor Organisation ILOSTAT Database via World Bank </a>`,
        marks: [
            Plot.line(data, {
                x: "date",
                y: "lfp",
                stroke: "#eee",
            } as MarkOptions),
            Plot.line(data, {
                x: "date",
                y: "lfp",
                stroke: "Country Code",
                filter: filtering ? (d => selectedCountryCodes.slice(0, activeStep).includes(d["Country Code"])) : null,
            } as MarkOptions),
            Plot.dot(data, {
                x: "date",
                y: "lfp",
                stroke: filtering ? "Country Code" : "#eee",
                filter: activeStep && (d => selectedCountryCodes.slice(0, activeStep).includes(d["Country Code"]))
            } as MarkOptions)
        ]
    };
    return chartOptions;
}