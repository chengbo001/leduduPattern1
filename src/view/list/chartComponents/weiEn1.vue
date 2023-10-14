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
      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });

      chart
        .path()
        .data({
          type: "inline",
          value: [
            { sets: ["A"], size: 15, label: "A" },
            { sets: ["B"], size: 12, label: "B" },
            { sets: ["C"], size: 10, label: "C" },
            { sets: ["A", "B"], size: 2, label: "A&B" },
            { sets: ["A", "C"], size: 2, label: "A&C" },
            { sets: ["B", "C"], size: 1, label: "B&C" },
            { sets: ["A", "B", "C"], size: 1 },
          ],
          transform: [
            {
              type: "venn",
            },
          ],
        })
        .encode("d", "path")
        .encode("color", "key")
        .encode("shape", "hollow")
        .label({
          position: "inside",
          text: (d) => d.label || "",
          fill: "#000",
        })
        .style("opacity", 0.6)
        .style("lineWidth", 8)
        .tooltip(false);

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
