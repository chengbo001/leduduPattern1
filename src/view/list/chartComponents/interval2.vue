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
       * A recreation of this demo: https://observablehq.com/@d3/horizontal-bar-chart
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
            "https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv",
          format: "csv",
        })
        .transform({ type: "sortX", reverse: true })
        .encode("x", "letter")
        .encode("y", "frequency")
        .axis("y", { labelFormatter: ".0%" })
        .label({
          text: "frequency",
          formatter: ".1%",
          textAnchor: (d) => (+d.frequency > 0.008 ? "right" : "start"),
          fill: (d) => (+d.frequency > 0.008 ? "#fff" : "#000"),
          dx: (d) => (+d.frequency > 0.008 ? -5 : 5),
        });

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
