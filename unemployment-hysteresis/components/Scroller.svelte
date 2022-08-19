<script lang="ts">

import scrollama, { CallbackResponse, ProgressCallbackResponse, ScrollamaInstance, } from 'scrollama';
import { onMount } from 'svelte';

let scroller = scrollama();
export let stepSelector = '.step';
export let debug = false;
export let steps: string[];
export let activeStep = 0;
let scrollContainer;
let innerWindowHeight: number = 0;

function handleResize() {
    console.log($$slots.fixed);
}
function handleStepEnter(response: CallbackResponse) {
    const { element, direction, index } = response;
    activeStep = index;
    // element.classList.add('is-active');

    // add color to current step only
    // step.classed("is-active", function (d, i) {
    //     return i === index;
    // });
    // let newOptions;
    // if (index % 2) {
    //     filtering = false;
    // } else {
    //     filtering = true;
    // }
    // newOptions = generateChartOptions();
    // const LfpLineChart = Plot.plot(newOptions);
    // document.getElementById('chart-1')?.querySelector('.chart')?.remove()
    // const tempDiv = document.createElement('div');
    // tempDiv.className = 'chart';
    // document.getElementById('chart-1')?.insertAdjacentElement('afterbegin', tempDiv)
    // document.getElementById('chart-1')?.querySelector('.chart')?.insertAdjacentElement('afterbegin', LfpLineChart);
    // if (filtering) {
    //     document.getElementById('chart-1')?.querySelector('.chart')?.append(LfpLineChart.legend('color', {
    //         ...defaultLegendConfig,
    //         color: {
    //             domain: selectedCountryCodes,
    //         }
    //     }));
    // }

    console.log("step enter", arguments);
}
function handleStepExit(response:CallbackResponse) {
    const {element } = response;
    element.classList.remove('active');
}
function handleStepProgress(response:ProgressCallbackResponse){
    const {element, index, progress, } = response;
    console.log('step progress', progress);
    element.style.opacity = `${progress}`;
}


function setupScroller(scroller: ScrollamaInstance) {
    // 1. call a resize on load to update width/height/position of elements
    handleResize();

    // 2. setup the scrollama instance
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
            step: stepSelector,
            // container: scrollContainer,
            offset: 0.75, // set the trigger to be 1/2 way down screen
            progress: true,
            threshold: 2,
            debug, // display the trigger offset for testing
        })
        .onStepEnter(handleStepEnter)
        .onStepProgress(handleStepProgress)
        .onStepExit(handleStepExit)
}
onMount(() => {
    setupScroller(scroller);
})

</script>
<style>
.scroller {
    position: relative;
    /* overflow: scroll; */
}

.scroller :global([slot="fixed"]) {
    position: sticky;
    top: 0;
    left: 0;
    bottom: auto;
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

.step {
    opacity: 0;
    padding: 1rem;
}

.step {
    position: relative;
    z-index: 2;
    /* margin: 25% 0; */
}
.text-content {
    position: relative;
}
</style>
<svelte:window on:resize={handleResize} bind:innerHeight={innerWindowHeight} />
<div class="scroller" bind:this={scrollContainer}>
    <slot name="fixed"></slot>
    {#if steps}
    {#each steps as step, i}
        <p class="step" class:active={activeStep === i} style:margin-bottom={i < steps.length - 1 ?`${innerWindowHeight * 0.85}px` : 0}>
            {step}
        </p>
    {/each}
    {/if}
</div>