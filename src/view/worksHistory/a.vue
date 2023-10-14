<template>
  <div>
    <page-layout>
      <page-header :title="title" describe="展示以往转换的作品"></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card">
        <a-row>
          <a-col :span="8">
            <video
              class="ad-img"
              loop=""
              autoplay=""
              muted=""
              playsinline=""
              preload="auto"
              src="https://resd.oss-accelerate.aliyuncs.com/png3d/a1.mp4"
            ></video>
            <div>时间：2023/10/12</div>
          </a-col>
          <a-col :span="8">
            <video
              class="ad-img"
              loop=""
              autoplay=""
              muted=""
              playsinline=""
              preload="auto"
              src="https://resd.oss-accelerate.aliyuncs.com/png3d/a2.mp4"
            ></video>
            <div>时间：2023/10/11</div>
          </a-col>
          <a-col :span="8">
            <video
              class="ad-img"
              loop=""
              autoplay=""
              muted=""
              playsinline=""
              preload="auto"
              src="https://resd.oss-accelerate.aliyuncs.com/png3d/a3.mp4"
            ></video>
            <div>时间：2023/10/10</div>
          </a-col>
        </a-row>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  nextTick,
  reactive,
  ref,
  toRefs,
} from "vue";
import { message, notification } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";

export default defineComponent({
  name: "advancedForm",
  components: {
    PlusOutlined,
  },
  setup() {
    return {
      title: document.title,
    };
  },
});
</script>

<style scoped lang="less">
.card {
  margin-bottom: 10px;
}
.demo-loadmore-list {
  min-height: 350px;
}
.ad-img {
  width: 80%;
  border: 1px solid #9e9e9e;
  padding: 8px;
  box-shadow: 5px 5px 5px 0px #9e9e9e;
  border-radius: 3px;
}
</style>
