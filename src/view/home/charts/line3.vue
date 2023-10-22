<template>
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Line } from "@antv/g2plot";

export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      const data = [
        { time: "1", value: 3 },
        { time: "2", value: 4 },
        { time: "3", value: 3.5 },
        { time: "4", value: 5 },
        { time: "5", value: 4.9 },
        { time: "6", value: 6 },
        { time: "7", value: 7 },
        { time: "8", value: 9 },
        { time: "9", value: 13 },
        { time: "9", value: 8 },
      ];
      const linePlot = new Line(chartContainer, {
        data,
        xField: "time",
        yField: "value",
        stepType: "vh",
      });

      linePlot.render();
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
