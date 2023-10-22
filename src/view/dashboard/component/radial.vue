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
      const createData = Mock.mock({
        "value|5": [
          {
            "key|+1": 1,
            name: function () {
              return "" + this.key;
            },
            "star|500-5000": 0,
          },
        ],
      });
      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });
      chart.coordinate({ type: "radial", endAngle: Math.PI });

      chart
        .interval()
        .data({
          // Data is collected by the end of 2022.11.09
          value: createData.value,
          transform: [{ type: "sortBy", fields: [["star", true]] }],
        })
        .encode("x", "name")
        .encode("y", "star")
        .scale("y", { type: "sqrt" })
        .encode("color", "name")
        .encode("size", 40)
        .style("radius", 20)
        // .label({
        //   text: "star",
        //   position: "outside",
        //   autoRotate: true,
        //   rotateToAlignArc: true,
        //   dx: 4,
        // })
        .axis("x", { title: false })
        .axis("y", false)
        .animate("enter", { type: "waveIn", duration: 1000 });

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
