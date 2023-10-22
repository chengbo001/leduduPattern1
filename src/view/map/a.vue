<template>
  <!-- 密度热力图 -->
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="直观地展示盐碱地的空间分布和变化情况。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <div :id="chartContainer" style="height: 600px"></div>
      </a-card>
      <div style="height: 10px"></div>
      <!-- <a-card>
        <a-form>
          <a-form-item label="输入地址">
            <a-input placeholder="对拟建风电场的风资源进行评估"></a-input>
          </a-form-item>
          <a-form-item label="评估结果">
            <a-space>
              <a-tag>风速：快</a-tag>
              <a-tag>风向：稳定</a-tag>
              <a-tag>湍流强度：强</a-tag>
            </a-space>
          </a-form-item>
        </a-form>
      </a-card> -->
      <a-card>
        <span>注释：绿色到红色，盐碱程度逐渐加重。</span>
      </a-card>
    </page-layout>
  </div>
</template>

<script>
import { Chart } from "@antv/g2";
import { onMounted, ref, onUnmounted } from "vue";
import Mock from "better-mock";
export default {
  setup() {
    const chartContainer = Mock.mock("@GUID");
    const chartRef = ref(null);

    onMounted(() => {
      const chart = new Chart({
        container: chartContainer,
        autoFit: true,
        padding: 0,
      });

      chart.axis(false);

      chart
        .image()
        .style(
          "src",
          "https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png"
        )
        .style("x", "50%")
        .style("y", "50%")
        .style("width", "100%")
        .style("height", "100%")
        .tooltip(false);

      chart
        .heatmap()
        .data({
          type: "fetch",
          value: "https://assets.antv.antgroup.com/g2/heatmap.json",
        })
        .encode("x", "g")
        .encode("y", "l")
        .encode("color", "tmp")
        .style("opacity", 0)
        .tooltip(false);

      chart.render();

      chartRef.value = chart;
    });
    onUnmounted(() => {
      chartRef.value && chartRef.value.destroy();
    });

    return {
      title: document.title,
      chartContainer,
    };
  },
};
</script>

<style></style>
