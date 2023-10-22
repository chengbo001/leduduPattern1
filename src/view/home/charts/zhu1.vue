<template>
  <div :id="chartContainer" style="width: 100%; height: 320px"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Column } from "@antv/g2plot";

export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");

    const chartRef = ref(null);
    onMounted(() => {
      const data = [
        {
          type: "1",
          sales: 38,
        },
        {
          type: "2",
          sales: 52,
        },
        {
          type: "3",
          sales: 61,
        },
        {
          type: "4",
          sales: 70,
        },
        {
          type: "5",
          sales: 48,
        },
        {
          type: "6",
          sales: 38,
        },
        {
          type: "7",
          sales: 38,
        },
        {
          type: "8",
          sales: 38,
        },
      ];

      const columnPlot = new Column(chartContainer, {
        data,
        xField: "type",
        yField: "sales",
        label: {
          // 可手动配置 label 数据标签位置
          position: "middle", // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: "#FFFFFF",
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: "类别",
          },
          sales: {
            alias: "销售额",
          },
        },
      });

      columnPlot.render();
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
