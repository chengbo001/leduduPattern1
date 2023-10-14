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
        { action: "鼓励奖", pv: 50000 },
        { action: "三等奖", pv: 35000 },
        { action: "二等奖", pv: 25000 },
        { action: "一等奖", pv: 15000 },
        { action: "特别奖", pv: 8000 },
      ];

      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });

      chart.coordinate({
        transform: [{ type: "transpose" }],
      });

      chart.data({
        type: "inline",
        value: data,
        transform: [
          {
            type: "custom",
            callback: (data) =>
              data.map((d) => ({ ...d, rate: d.pv / data[0].pv })),
          },
        ],
      });

      chart
        .interval()
        .encode("x", "action")
        .encode("y", "pv")
        .encode("color", "action")
        .encode("shape", "pyramid")
        .transform({ type: "symmetryY" })
        .scale("x", { padding: 0 })
        .animate("enter", { type: "fadeIn" })
        // .label({
        //   text: (d) => `${d.action} ${d.pv}`,
        //   textAlign: "left",
        // })
        // .label({
        //   text: (d) => `${(d.rate * 100).toFixed(1)}%`,
        //   position: "inside",
        //   transform: [{ type: "contrastReverse" }],
        // })
        // .legend("color", { position: "bottom" })
        .axis(false);

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
