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
      const data = [
        { x: "1", y: [1, 9, 16, 22, 24] },
        { x: "2", y: [1, 5, 8, 12, 16] },
        { x: "3", y: [1, 8, 12, 19, 26] },
        { x: "4", y: [2, 8, 12, 21, 28] },
        { x: "5", y: [1, 8, 14, 18, 24] },
        { x: "6", y: [3, 10, 17, 28, 30] },
        { x: "7", y: [1, 7, 10, 17, 22] },
        { x: "8", y: [1, 6, 8, 13, 16] },
      ];

      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });
      chart
        .box()
        .data(data)
        .encode("x", "x")
        .encode("y", "y")
        .encode("color", "x")
        .scale("x", { paddingInner: 0.6, paddingOuter: 0.3 })
        .scale("y", { zero: true })
        .legend(false)
        .style("stroke", "black")
        .tooltip([
          { name: "min", channel: "y" },
          { name: "q1", channel: "y1" },
          { name: "q2", channel: "y2" },
          { name: "q3", channel: "y3" },
          { name: "max", channel: "y4" },
        ]);

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
