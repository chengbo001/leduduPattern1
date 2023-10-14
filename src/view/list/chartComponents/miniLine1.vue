<template>
  <div :id="chartContainer" style="width: 100%; height: 520px"></div>
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
      const data = [
        264, 417, 438, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
        546, 340, 539, 643, 626, 792,
      ];

      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });
      chart.title({
        title: "设备量",
      });
      chart.data(data);

      chart
        .line()
        .encode("x", (d) => d)
        .encode("y", (_, idx) => idx)
        .encode("shape", "smooth")
        .animate("enter", { type: "fadeIn" })
        .label({
          selector: "last",
          text: (d) => d,
          textAlign: "right",
          textBaseline: "bottom",
          dx: -10,
          dy: -10,
          connector: true,
          fontSize: 10,
        })
        .axis(false);

      chart.interaction("tooltip", {
        render: (e, { title, items }) => items[0].value,
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
