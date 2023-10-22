<template>
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Column } from "@antv/g2plot";

import data from "./json/G2Pzhu1.json";

export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      const column = new Column(chartContainer, {
        data,
        xField: "city",
        yField: "value",
        seriesField: "type",
        isGroup: "true",
        columnStyle: {
          radius: [20, 20, 0, 0],
        },
      });

      column.render();
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
