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
      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });
      chart.title({ title: "成本与效果监测" });

      chart
        .gauge()
        .data({
          value: {
            target: 159,
            total: 400,
            name: "score",
            thresholds: [100, 200, 400],
          },
        })
        .scale("color", {
          range: ["#F4664A", "#FAAD14", "green"],
        })
        .style(
          "textContent",
          (target, total) => `${target} - ${(target / total) * 100}%`
        )
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
