<script lang="ts">
    // import * as Plot from "@observablehq/plot";
    import { defaultLegendConfig, defaultPapaConfig } from '../../shared/constants';
    import { ExpandedLFP, ParsedLFP } from '../type-expansions';
    import Papa, { ParseConfig } from 'papaparse';
    import { paths} from '../consts';
    import {parseFemaleDataParticipation, generateChartOptions } from '../shared-functions';
    import { onMount } from 'svelte';
    import Plot from './Plot.svelte';

    let innerWindowHeight: number = 0;
    let expandedData: ExpandedLFP[] = [];
    export let activeStep: number = -1;
    $:chartHeight = innerWindowHeight / 2 ;
    $:chartTop = (innerWindowHeight - chartHeight) / 2;
    $: chartOptions = generateChartOptions(expandedData, true, activeStep + 1);
    $: {
        console.log('active step in chart', activeStep);
    }

export const papaConfig: ParseConfig<ParsedLFP> = {
    ...defaultPapaConfig,
    beforeFirstChunk: (chunk) => {
        const returnedChunk = chunk.split('\r\n').slice(4);
        return returnedChunk.join('\r\n');
    }
} as ParseConfig<ParsedLFP>;
    let LfpLineChart: HTMLElement;
    let chart;
    let filtering = false;
onMount(async() => {
    const femaleParticipationResponse = await fetch(paths["female-participation"]);
    if (femaleParticipationResponse.ok) {
        const csv = await femaleParticipationResponse.text();
        const femaleParticipationData = Papa.parse<ParsedLFP>(csv, papaConfig);
        expandedData = parseFemaleDataParticipation(femaleParticipationData.data)
        console.log('expanded', expandedData);
        // chart = Plot.plot(chartOptions);
        // LfpLineChart.insertAdjacentElement('afterbegin', Plot.plot(chartOptions));
    }
});

</script>
<style>

#chart-1 {
    position: sticky;
    height: 300px;
    left: 0;
    bottom: auto;
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
</style>
<svelte:window bind:innerHeight={innerWindowHeight} />
<!-- Language: svelte -->

<div id="chart-1" bind:this={LfpLineChart} style:top={`${chartTop}px`} style:height={`${chartHeight}px`}>

    <h1 style:position="sticky">Active Step: {activeStep}</h1>
    <Plot options={chartOptions} />
</div>