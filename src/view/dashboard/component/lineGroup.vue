<template>
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
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
       * A recreation of this demo: https://vega.github.io/vega-lite/examples/line_overlay.html
       */

      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });
      chart
        .line()
        .data({
          type: "fetch",
          value:
            "https://gw.alipayobjects.com/os/bmw-prod/cb99c4ab-e0a3-4c76-9586-fe7fa2ff1a8c.csv",
        })
        .transform({ type: "groupX", y: "mean" })
        .encode("x", (d) => new Date(d.date).getFullYear() + 13)
        .encode("y", (d) => d.price)
        .encode("color", "symbol")
        // .label({
        //   text: "price",
        //   transform: [{ type: "overlapDodgeY" }],
        //   fontSize: 10,
        // })
        .tooltip({ channel: "y", valueFormatter: ".1f" });

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
