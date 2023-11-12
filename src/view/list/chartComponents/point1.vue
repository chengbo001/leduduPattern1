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
       * A recreation of this demo: https://observablehq.com/@d3/scatterplot-with-shapes
       */
      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });

      chart
        .point()
        .data({
          type: "fetch",
          value:
            "https://gw.alipayobjects.com/os/bmw-prod/bd73a175-4417-4749-8b88-bc04d955e899.csv",
        })
        .encode("x", "x")
        .encode("y", "y")
        .encode("shape", "category")
        .encode("color", "category")
        .encode("size", 5)
        .scale("shape", { range: ["point", "plus", "diamond"] })
        .legend("color", { itemLabelText: "" });

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
