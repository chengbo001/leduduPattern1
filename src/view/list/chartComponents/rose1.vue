<template>
  <div :id="chartContainer" style="width: 100%; height: 420px"></div>
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
      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
      });

      chart.coordinate({ type: "polar", outerRadius: 0.85 });

      chart
        .interval()
        .transform({ type: "groupX", y: "sum" })
        .data({
          type: "fetch",
          value:
            "https://gw.alipayobjects.com/os/bmw-prod/87b2ff47-2a33-4509-869c-dae4cdd81163.csv",
        })
        .encode("x", "year")
        .encode("color", "year")
        .encode("y", "people")
        .scale("y", { type: "sqrt" })
        .scale("x", { padding: 0 })
        .axis(false)
        // .label({
        //   text: 'people',
        //   position: 'outside',
        //   formatter: '~s',
        //   transform: [{ type: 'overlapDodgeY' }],
        // })
        .legend({
          color: { length: 400, layout: { justifyContent: "center" } },
        })
        .animate("enter", { type: "waveIn" })
        .tooltip({ channel: "y", valueFormatter: "~s" });

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
