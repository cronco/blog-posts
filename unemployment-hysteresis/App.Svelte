<script lang="ts">
    import Chart from './components/Chart.svelte';
    import Scroller from './components/Scroller.svelte';
    import {fade} from "svelte/transition";

    export let activeStep = -1;
    let steps = [` în România rata de participare a forței de muncă între femei a fost într-un
            declin continuu de la începutul anilor '90, cu un salt foarte pronunțat între 2001 și
            2003.
    `, `și așa mai departe`, `în România rata de participare a forței de muncă între femei a fost într-un
            declin continuu de la începutul anilor '90, cu un salt foarte pronunțat între 2001 și 2003.`,
            `în alte țări situația stă mult mai bine`];
</script>


<Scroller bind:activeStep steps={steps}>
    <Chart slot="fixed" activeStep={activeStep} />
</Scroller>