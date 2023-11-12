<template>
  <!-- 蓝方块折线图 -->
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Scatter, G2 } from "@antv/g2plot";
import data from "./json/sandian.json";

export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      G2.registerShape("point", "custom-shape", {
        draw(cfg, group) {
          const cx = cfg.x;
          const cy = cfg.y;
          const radius = cfg.size || 5;
          const polygon = group.addShape("path", {
            attrs: {
              path: [
                ["M", cx - radius, cy - radius],
                ["L", cx + radius, cy - radius],
                ["L", cx, cy + radius],
                ["Z"],
              ],
              ...cfg.defaultStyle,
              ...cfg.style,
            },
          });
          return polygon;
        },
      });

      const scatterPlot = new Scatter(chartContainer, {
        appendPadding: 30,
        data,
        xField: "xG conceded",
        yField: "Shot conceded",
        shape: "custom-shape",
        pointStyle: {
          lineWidth: 2,
        },
        size: 6,
        yAxis: {
          nice: true,
          line: {
            style: {
              stroke: "#aaa",
            },
          },
        },
        tooltip: {
          showMarkers: false,
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
              stroke: "#aaa",
            },
          },
        },
        label: {},
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
