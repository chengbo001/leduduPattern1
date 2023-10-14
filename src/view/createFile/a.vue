<template>
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="利用最先进的人工智能 AI 将 2D 图片变为 3D。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <a-upload-dragger :multiple="true">
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">点击或拖动文件至此上传2D图片</p>
          <p class="ant-upload-hint">支持单个多个文件上传</p>
        </a-upload-dragger>
      </a-card>
      <div style="height: 10px"></div>
      <a-card class="card" title="效果展示" :bordered="false">
        <div style="height: 10px"></div>
        <a-row>
          <a-col :span="10" style="text-align: center">
            <img
              class="ad-img"
              src="https://resd.oss-accelerate.aliyuncs.com/png3d/a1.jpg"
            />
          </a-col>
          <a-col :span="4">
            <div
              style="
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <right-circle-outlined style="font-size: 50px" />
            </div>
          </a-col>
          <a-col :span="10" style="text-align: center">
            <video
              class="ad-img"
              loop=""
              autoplay=""
              muted=""
              playsinline=""
              preload="auto"
              src="https://resd.oss-accelerate.aliyuncs.com/png3d/a1.mp4"
            ></video>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <div style="height: 100px; line-height: 100px">
              <a-space>
                <span>功能：</span>
                <a-tag color="pink">转换类型</a-tag>
                <a-tag color="red">切换分辨率</a-tag>
                <a-tag color="orange">切换精度</a-tag>
                <a-tag color="green">识别前景已开</a-tag>
                <a-tag color="cyan">识别背景已开</a-tag>
                <a-tag color="blue">亮度自动</a-tag>
                <a-tag color="purple">对比度自动</a-tag>
                <a-tag color="pink">图像向上</a-tag>
                <a-tag color="red">图像向右</a-tag>
                <a-tag color="orange">图像向下</a-tag>
                <a-tag color="green">图像向左</a-tag>
                <a-tag color="cyan">右转90˚</a-tag>
                <a-tag color="blue">保存至/C/User/a</a-tag>
                <a-button type="primary">保存</a-button>
              </a-space>
            </div>
          </a-col>
        </a-row>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
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
  margin-bottom: 24px;
}
.ad-img {
  width: 80%;
  border: 1px solid #9e9e9e;
  padding: 8px;
  box-shadow: 5px 5px 5px 0px #9e9e9e;
  border-radius: 3px;
}
</style>
