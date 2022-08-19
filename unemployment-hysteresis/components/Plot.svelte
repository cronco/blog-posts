<script>
    import * as Plot from "@observablehq/plot";

    export let options;
    let that;
    export let G= [];
    let c;
function usePlot(node) {

        node.appendChild(myplot());
}

    function myplot() {
        const plot = Plot.plot(options);
        const { render } = plot;
        plot.render = function (I, scales, channels, dimensions) {
    c = { scales, dimensions };

    that = this;

    console.log(g, c, channels);
    const g = render.apply(this, arguments);
    G.push(g);

    return g;
  };
        return plot;
    }
</script>


{#key options}
    <div use:usePlot {...$$restProps}></div>
{/key}