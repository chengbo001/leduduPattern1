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
      chart.title({
        title: "散点分析",
      });
      chart
        .point()
        .data({
          type: "fetch",
          value:
            "https://gw.alipayobjects.com/os/basement_prod/6b4aa721-b039-49b9-99d8-540b3f87d339.json",
          transform: [
            {
              type: "rename",
              height: "x",
              weight: "y",
            },
            {
              type: "map",
              callback: (datum, idx) => {
                return {
                  x: datum.x,
                  y: datum.y,
                  gender: datum.gender == "male" ? "提升" : "无效果",
                };
              },
            },
          ],
        })
        .encode("x", "x")
        .encode("y", "y")
        .encode("color", "gender");

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
