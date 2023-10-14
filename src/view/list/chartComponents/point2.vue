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
        .point()
        .data({
          type: "fetch",
          value:
            "https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json",
          transform: [
            // 指定转换，可以多个
            { type: "rename", GDP: "PXHD", LifeExpectancy: "Expectancy" },
          ],
        })
        .encode("x", "PXHD")
        .encode("y", "Expectancy")
        .encode("size", "Population")
        .encode("color", "continent")
        .encode("shape", "point")
        .scale("size", { type: "log", range: [4, 20] })
        .style("fillOpacity", 0.3)
        .style("lineWidth", 1)
        .legend("size", false);

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
