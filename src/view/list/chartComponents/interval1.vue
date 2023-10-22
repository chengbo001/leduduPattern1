<template>
  <!-- 柱状图 -->
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
       *  A recreation of this demo: https://observablehq.com/@d3/stacked-normalized-horizontal-bar
       */
      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });

      chart.coordinate({ transform: [{ type: "transpose" }] });

      chart
        .interval()
        .data({
          type: "fetch",
          value:
            "https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv",
          format: "csv",
        })
        .transform({ type: "stackY" })
        .transform({ type: "sortX", by: "y", reverse: true })
        .transform({ type: "normalizeY" })
        .encode("x", "state")
        .encode("y", "population")
        .encode("color", "age")
        .axis("y", { labelFormatter: ".0%" })
        .tooltip({ channel: "y0", valueFormatter: ".0%" });

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
