<template>
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Gauge } from "@antv/g2plot";

export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      const gauge = new Gauge(chartContainer, {
        percent: 0.75,
        radius: 0.75,
        range: {
          color: "#30BF78",
          width: 12,
        },
        indicator: {
          pointer: {
            style: {
              stroke: "#D0D0D0",
            },
          },
          pin: {
            style: {
              stroke: "#D0D0D0",
            },
          },
        },
        statistic: {
          content: {
            formatter: ({ percent }) => `${(percent * 100).toFixed(0)}`,
          },
          style: {
            fontSize: 60,
          },
        },
        gaugeStyle: {
          lineCap: "round",
        },
      });

      gauge.render();
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
