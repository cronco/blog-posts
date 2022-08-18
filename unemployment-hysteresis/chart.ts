import * as Plot from "@observablehq/plot";
import { utcFormat, select } from 'd3';
import deepmerge from 'deepmerge';
import { html } from 'htl';
import Papa from 'papaparse';
import scrollama, { CallbackResponse, ScrollamaInstance } from "scrollama";
import { colors, defaultChartConfig, defaultLegendConfig, defaultPapaConfig } from '../shared/constants';

const paths = {
    'female-participation': '/unemployment-hysteresis/API_SL.TLF.CACT.FE.NE.ZS_DS2_en_csv_v2_4354779/API_SL.TLF.CACT.FE.NE.ZS_DS2_en_csv_v2_4354779.csv'
};
const papaConfig = {
    ...defaultPapaConfig,
    beforeFirstChunk: (chunk) => {
        const returnedChunk = chunk.split('\r\n').slice(4);
        return returnedChunk.join('\r\n');
    }
}
interface ParsedLFP {
    "Country Code": string;
    "Country Name": string;
    "Indicator Name": string;
    "Indicator Code": string;
    number: number;
}

interface ExpandedLFP {
    "Country Code": string;
    "Country Name": string;
    "Indicator Name": string;
    "date": Date;
    lfp: number;
}
const selectedCountryCodes = [
    'ROU', //Romania,
    'FRA', //France
    'DEU', //Germany
    'POL', //Poland
    'HUN', // Hungary
    'GBR', // United Kingdom
]

const parseFemaleDataParticipation = (data: ParsedLFP[]) => {
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

async function setup() {
    const femaleParticipationResponse = await fetch(paths["female-participation"]);
    if (femaleParticipationResponse.ok) {
        const femaleParticipationData = Papa.parse(await femaleParticipationResponse.text(), papaConfig);
        console.log(femaleParticipationData);
        var filtering = false;
        const expanded = parseFemaleDataParticipation(femaleParticipationData.data)
        //.filter(d => (selectedCountryCodes.includes(d["Country Code"])))
        console.log('expandd', expanded);
        const chartOptions = {
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
                label: expanded ? expanded[0]["Indicator Name"] : "lfp",
                tickFormat: d => `${d} %`
            },
            style: {

            },
            caption: html`Figure 1. This chart has a <i>fancy</i> caption.`,
            marks: [
                Plot.line(expanded, {
                    x: "date",
                    y: "lfp",
                    sort: (a, b) => a["date"] - b["date"],
                    stroke: filtering ? "Country Code" : "#eee",
                    filter: filtering && (d => selectedCountryCodes.includes(d["Country Code"]))
                }),
                Plot.dot(expanded, {
                    x: "date",
                    y: "lfp",
                    sort: (a, b) => a["date"] - b["date"],
                    stroke: filtering ? "Country Code" : "#eee",
                    filter: filtering && (d => selectedCountryCodes.includes(d["Country Code"]))
                })
            ]
        };
        console.log('opts', chartOptions);
        const LfpLineChart = Plot.plot(chartOptions);
        document.getElementById('chart-1')?.querySelector('.chart')?.append(LfpLineChart);
        if (filtering) {
            document.getElementById('chart-1')?.querySelector('.chart')?.append(LfpLineChart.legend('color', defaultLegendConfig));
        }

        var container = select('#container');
        var graphic = container.select('#chart-1');
        var chart = graphic.select('.chart');
        var text = container.select('#text-container');
        var step = text.selectAll('.step');
        const scroller = scrollama();
        function handleStepEnter(response: CallbackResponse) {
            const { element, direction, index } = response;
            // add color to current step only
            step.classed("is-active", function (d, i) {
                return i === index;
            });
            let newOptions;
            if (index % 2) {
                filtering = false;
            } else {
                filtering = true;
            }
            newOptions = generateChartOptions();
            const LfpLineChart = Plot.plot(newOptions);
            document.getElementById('chart-1')?.querySelector('.chart')?.remove()
            const tempDiv = document.createElement('div');
            tempDiv.className = 'chart';
            document.getElementById('chart-1')?.insertAdjacentElement('afterbegin', tempDiv)
            document.getElementById('chart-1')?.querySelector('.chart')?.insertAdjacentElement('afterbegin', LfpLineChart);
            if (filtering) {
                document.getElementById('chart-1')?.querySelector('.chart')?.append(LfpLineChart.legend('color', {
                    ...defaultLegendConfig,
                    color: {
                        domain: selectedCountryCodes,
                    }
                }));
            }

            console.log("step enter", arguments);
        }

        function generateChartOptions() {

            const chartOptions = {
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
                    label: expanded ? expanded[0]["Indicator Name"] : "lfp",
                    tickFormat: d => `${d} %`
                },
                style: {

                },
                color: {
                    ...defaultChartConfig.color,
                    domain: selectedCountryCodes,
                },
                caption: html`Figure 1. This chart has a <i>fancy</i> caption.`,
                marks: [
                    Plot.line(expanded, {
                        x: "date",
                        y: "lfp",
                        // sort: (a, b) => a["date"] - b["date"],
                        stroke: "#eee",
                        filter: (d => !selectedCountryCodes.includes(d["Country Code"])),
                    }),
                    Plot.line(expanded, {
                        x: "date",
                        y: "lfp",
                        // sort: (a, b) => a["date"] - b["date"],
                        stroke: filtering ? "Country Code" : "#eee",
                        filter: filtering ? (d => selectedCountryCodes.includes(d["Country Code"])) : null,
                    }),
                    Plot.dot(expanded, {
                        x: "date",
                        y: "lfp",
                        stroke: filtering ? "Country Code" : "#eee",
                        filter: filtering && (d => selectedCountryCodes.includes(d["Country Code"]))
                    })
                ]
            };
            return chartOptions;
        }

        function setupScroller(scroller: ScrollamaInstance) {
            // 1. call a resize on load to update width/height/position of elements
            handleResize();

            // 2. setup the scrollama instance
            // 3. bind scrollama event handlers (this can be chained like below)
            scroller
                .setup({
                    step: '#text-container .step', // the step elements
                    offset: 0.5, // set the trigger to be 1/2 way down screen
                    debug: true, // display the trigger offset for testing
                })
                .onStepEnter(handleStepEnter)

            // setup resize event
            window.addEventListener('resize', handleResize);

        }
        setupScroller(scroller);
    }
};
console.log(colors);
console.log(Papa);

setup();