<script lang="ts">
    import * as Plot from "@observablehq/plot";
    import { defaultLegendConfig, defaultPapaConfig } from './../shared/constants';
    import { ParsedLFP } from './type-expansions';
    import Papa, { ParseConfig } from 'papaparse';

    import { paths} from './consts';
    import {parseFemaleDataParticipation, generateChartOptions } from './shared-functions';
    import { onMount } from 'svelte';

export const papaConfig: ParseConfig<ParsedLFP> = {
    ...defaultPapaConfig,
    beforeFirstChunk: (chunk) => {
        const returnedChunk = chunk.split('\r\n').slice(4);
        return returnedChunk.join('\r\n');
    }
} as ParseConfig<ParsedLFP>;
    let LfpLineChart:HTMLElement;
onMount(async() => {

    const femaleParticipationResponse = await fetch(paths["female-participation"]);
    if (femaleParticipationResponse.ok) {
        const csv = await femaleParticipationResponse.text();
        const femaleParticipationData = Papa.parse<ParsedLFP>(csv, papaConfig);
        console.log(femaleParticipationData);
        const expandedData = parseFemaleDataParticipation(femaleParticipationData.data)
        let filtering = false;
        console.log('expanded', expandedData);
        const chartOptions = generateChartOptions(expandedData, filtering);
        LfpLineChart.insertAdjacentElement('afterbegin', Plot.plot(chartOptions));
        // chartContainer.append(LfpLineChart);
        // if (window.ChartStateDump.filtering) {
        //     chartContainer.append(LfpLineChart.legend('color', defaultLegendConfig));
        // }
    }
});


</script>

<!-- Language: svelte -->
<div class="chart" bind:this={LfpLineChart}>
    foo
</div>