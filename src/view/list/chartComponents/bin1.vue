<template>
  <!-- 两个柱子重叠 -->
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
        .rect()
        .data({
          type: "fetch",
          value: "https://assets.antv.antgroup.com/g2/athletes.json",
        })
        .encode("x", "weight")
        .encode("color", "sex")
        .transform({ type: "binX", y: "count" })
        .transform({ type: "stackY", orderBy: "series" })
        .style("inset", 0.5);

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
