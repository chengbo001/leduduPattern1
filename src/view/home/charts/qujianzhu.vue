<template>
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Column } from "@antv/g2plot";

export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      const data = [
        { type: "1", values: [76, 100] },
        { type: "2", values: [56, 108] },
        { type: "3", values: [38, 129] },
        { type: "4", values: [58, 155] },
        { type: "5", values: [45, 120] },
        { type: "6", values: [23, 99] },
        { type: "7", values: [18, 56] },
        { type: "8", values: [18, 34] },
      ];

      const barPlot = new Column(chartContainer, {
        data,
        xField: "type",
        yField: "values",
        isRange: true,
        label: {
          position: "middle",
          layout: [{ type: "adjust-color" }],
        },
      });

      barPlot.render();

      chartRef.value = barPlot;
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
