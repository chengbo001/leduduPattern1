<template>
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Line } from "@antv/g2plot";

import data from "./json/G2Pline1.json";

export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      const line = new Line(chartContainer, {
        data,
        padding: "auto",
        xField: "Date",
        yField: "scales",
        xAxis: false,
      });

      line.render();

      chartRef.value = line;
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
