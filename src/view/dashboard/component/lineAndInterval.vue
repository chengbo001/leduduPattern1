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
      const { data } = Mock.mock({
        "data|12": [
          {
            "Month|+1": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            "Evaporation|50-100": 0,
            "Precipitation|5-100": 0,
            "Temperature|50-100": 0,
          },
        ],
      });

      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });

      chart.data(data);
      chart.title({
        title: "多维多轴混合统计",
      });

      chart
        .line()
        .encode("x", "Month")
        .encode("y", "Temperature")
        .encode("color", "#EE6666")
        .encode("shape", "smooth")
        .scale("y", { independent: true })
        .axis("y", {
          title: "维度1",
          grid: null,
          titleFill: "#EE6666",
        });

      chart
        .interval()
        .encode("x", "Month")
        .encode("y", "Evaporation")
        .encode("color", "#5470C6")
        .scale("y", { independent: true, domainMax: 200 })
        .style("fillOpacity", 0.8)
        .axis("y", {
          position: "right",
          title: "维度2",
          titleFill: "#5470C6",
        });

      chart
        .line()
        .encode("x", "Month")
        .encode("y", "Precipitation")
        .encode("color", "#91CC75")
        .scale("y", { independent: true })
        .style("lineWidth", 2)
        .style("lineDash", [2, 2])
        .axis("y", {
          position: "right",
          title: "维度3",
          grid: null,
          titleFill: "#91CC75",
        });

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
