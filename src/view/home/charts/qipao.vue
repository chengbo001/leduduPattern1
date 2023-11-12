<template>
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Scatter } from "@antv/g2plot";
import data from "./json/qipao.json";
export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      const scatterPlot = new Scatter(chartContainer, {
        appendPadding: 30,
        data,
        xField: "x",
        yField: "y",
        colorField: "genre",
        color: [
          "r(0.4, 0.3, 0.7) 0:rgba(255,255,255,0.5) 1:#5B8FF9",
          "r(0.4, 0.4, 0.7) 0:rgba(255,255,255,0.5) 1:#61DDAA",
        ],
        sizeField: "size",
        size: [5, 20],
        shape: "circle",
        yAxis: {
          nice: true,
          line: {
            style: {
              stroke: "#eee",
            },
          },
        },
        xAxis: {
          grid: {
            line: {
              style: {
                stroke: "#eee",
              },
            },
          },
          line: {
            style: {
              stroke: "#eee",
            },
          },
        },
      });
      scatterPlot.render();
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
