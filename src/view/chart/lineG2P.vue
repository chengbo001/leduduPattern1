<template>
  <div :id="chartContainer" style="width: 100%; height: 520px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { DualAxes } from "@antv/g2plot";

export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      const uvBillData = [
        { time: "03", value: 350, type: "A" },
        { time: "04", value: 900, type: "A" },
        { time: "05", value: 300, type: "A" },
        { time: "06", value: 450, type: "A" },
        { time: "07", value: 470, type: "A" },
        { time: "03", value: 220, type: "B" },
        { time: "04", value: 300, type: "B" },
        { time: "05", value: 250, type: "B" },
        { time: "06", value: 220, type: "B" },
        { time: "07", value: 362, type: "B" },
      ];

      const transformData = [
        { time: "03", C: 220 },
        { time: "04", C: 380 },
        { time: "05", C: 400 },
        { time: "06", C: 600 },
        { time: "07", C: 800 },
      ];

      const dualAxes = new DualAxes(chartContainer, {
        data: [uvBillData, transformData],
        xField: "time",
        yField: ["value", "C"],
        geometryOptions: [
          {
            geometry: "column",
            isStack: true,
            seriesField: "type",
          },
          {
            geometry: "line",
          },
        ],
      });
      dualAxes.render();

      //TODO 有落下的，给加上。
      chartRef.value = dualAxes;
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
