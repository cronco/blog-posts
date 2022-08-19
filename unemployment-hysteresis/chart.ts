import Chart from './Chart.svelte';


function setup() {
    const app = new Chart({ target: document.getElementById('chart-1') });
};

setup();