import Chart from './components/Chart.svelte';
import App from './App.svelte';


function setup() {
    const app = new App({ target: document.getElementById('chart-scroller') });
};

setup();