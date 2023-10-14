<template>
  <div :id="chartContainer" style="width: 100%; height: 520px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Chart } from "@antv/g2";

export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      /**
       * A recreation of this demo: https://nivo.rocks/pie/
       */
      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });

      chart.coordinate({ type: "theta", innerRadius: 0.25, outerRadius: 0.8 });

      chart
        .interval()
        .data([
          { id: "c", value: 52 },
          { id: "sass", value: 22 },
          { id: "php", value: 32 },
          { id: "elixir", value: 56 },
          { id: "rust", value: 5 },
        ])
        .transform({ type: "stackY" })
        .encode("y", "value")
        .encode("color", "id")
        .scale("color", {
          range: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb"],
        })
        .label({
          text: "value",
          fontWeight: "bold",
          offset: 14,
        })
        // .label({
        //   text: "id",
        //   position: "spider",
        //   connectorDistance: 0,
        //   fontWeight: "bold",
        //   textBaseline: "bottom",
        //   textAlign: (d) => (["c", "sass"].includes(d.id) ? "end" : "start"),
        //   dy: -4,
        // })
        .style("radius", 4)
        .style("stroke", "#fff")
        .style("lineWidth", 2)
        .animate("enter", { type: "waveIn" })
        .legend(false);

      chart.render();
    });
    onUnmounted(() => {
      chartRef.value && chartRef.value.destroy();
    });
    return {
      chartContainer,
    };
  },
};
</script>

<style lang="scss"></style>
