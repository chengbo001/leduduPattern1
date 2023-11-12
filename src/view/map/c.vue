<template>
  <!-- 密度热力图 -->
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <div>
          <!-- <iframe
            src="/html/carguiji.html"
            frameborder="0"
            name="iframes"
            id="iframes"
            style="width: 100%; height: 500px"
          ></iframe> -->
        </div>
        <span>注释：使用了百度地图开放平台技术，所以会出现百度地图标签</span>
      </a-card>
      <div style="height: 10px"></div>
      <a-row :gutter="[10, 10]">
        <a-col :span="12">
          <a-card title="车流量">
            <zhu1></zhu1>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="拥堵情况">
            <yibiao3></yibiao3>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
  </div>
</template>

<script>
import { onMounted, ref, onUnmounted } from "vue";
import Mock from "better-mock";
import zhu1 from "@/view/home/charts/zhu1.vue";
import yibiao3 from "@/view/home/charts/yibiao3.vue";
export default {
  components: {
    zhu1,
    yibiao3,
  },
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
