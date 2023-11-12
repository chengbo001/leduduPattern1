<template>
  <!-- 密度热力图 -->
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <!-- <div :id="chartContainer" style="height: 600px"></div> -->
        <div>
          <iframe
            src="/html/yanhuacity.html"
            frameborder="0"
            name="iframes"
            id="iframes"
            style="width: 100%; height: 800px"
          ></iframe>
        </div>
      </a-card>
      <div style="height: 10px"></div>
      <a-card>
        <span>注释：使用了百度开放平台地图技术，所以会出现百度地图标签</span>
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
      chartRef.value = null;
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

<style lang="scss" scoped></style>
