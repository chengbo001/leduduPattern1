<template>
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Chart } from "@antv/g2";
import { schemeTableau10 } from "d3-scale-chromatic";

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
        .forceGraph()
        .data({
          type: "fetch",
          value: "https://assets.antv.antgroup.com/g2/miserable.json",
        })
        .scale("color", { range: schemeTableau10 });

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
