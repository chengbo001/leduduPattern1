<template>
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Area } from "@antv/g2plot";

export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      const data = [
        {
          timePeriod: "1",
          value: 100,
        },
        {
          timePeriod: "2",
          value: 100.08,
        },
        {
          timePeriod: "3",
          value: 100.17,
        },
        {
          timePeriod: "4",
          value: 100.26,
        },
        {
          timePeriod: "5",
          value: 100.34,
        },
        {
          timePeriod: "6",
          value: 100.41,
        },
        {
          timePeriod: "7",
          value: 100.52,
        },
        {
          timePeriod: "8",
          value: 100.67,
        },
        {
          timePeriod: "9",
          value: 100.84,
        },
        {
          timePeriod: "10",
          value: 200.07,
        },
        {
          timePeriod: "11",
          value: 200.39,
        },
        {
          timePeriod: "12",
          value: 200.71,
        },
      ];

      const area = new Area(chartContainer, {
        data,
        xField: "timePeriod",
        yField: "value",
        xAxis: {
          range: [0, 1],
        },
      });
      area.render();
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
