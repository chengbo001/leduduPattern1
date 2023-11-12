<template>
  <!-- 优 -->
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
      const ticks = [0, 1 / 3, 2 / 3, 1];
      const color = ["#F4664A", "#FAAD14", "#30BF78"];

      const gauge = new Gauge(chartContainer, {
        percent: 0,
        range: {
          ticks: [0, 1],
          color: ["l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78"],
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
          title: {
            formatter: ({ percent }) => {
              if (percent < ticks[1]) {
                return "差";
              }
              if (percent < ticks[2]) {
                return "中";
              }
              return "优";
            },
            style: ({ percent }) => {
              return {
                fontSize: "36px",
                lineHeight: 1,
                color:
                  percent < ticks[1]
                    ? color[0]
                    : percent < ticks[2]
                    ? color[1]
                    : color[2],
              };
            },
          },
          content: {
            offsetY: 36,
            style: {
              fontSize: "24px",
              color: "#4B535E",
            },
            formatter: () => "",
          },
        },
      });

      gauge.render();
      let data = 1.5;
      const interval = setInterval(() => {
        if (data >= 1.85) {
          clearInterval(interval);
        }
        data += 0.005;
        gauge.changeData(data > 1 ? data - 1 : data);
      }, 100);
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
