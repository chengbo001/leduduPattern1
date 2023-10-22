<template>
  <div id="box-list">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-input-search
        placeholder="找出教育相关的背景图"
        style="width: 400px"
        @search="$alert('正在搜索中，请稍后')"
      />
      <div style="height: 10px"></div>
      <a-row :wrap="true" :gutter="[10, 10]">
        <a-col v-for="item of data" :key="item" :span="6">
          <a-card>
            <a-card hoverable style="width: 240px; margin: 0 auto">
              <template #cover>
                <img
                  alt="example"
                  src="https://hbimg.huabanimg.com/17e13f2b7dd819c01ca655487038de8c6381238e26597-YqsgaI_fw658"
                />
              </template>
              <!-- <a-card-meta :title="item.title">
                <template #description>{{ item.description }}</template>
              </a-card-meta>
              <a href="#" style="display: block; text-align: right">了解更多</a> -->
            </a-card>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
const courseData = Mock.mock({
  "data|12": [
    {
      "key|+1": 1,
      "src|+1": ["../../assets/image/course1.png"],
      "title|+1": [
        "人工智能与机器学习产业应用",
        "大数据技术与生产",
        "网络安全与企业保密管理",
      ],
      "description|1": [
        "学习如何应用这些技术解决实际问题。",
        "学习如何应用这些技术解决实际问题。",
        "学习如何应用这些技术解决实际问题。",
      ],
    },
  ],
});

export default {
  setup() {
    return {
      title: document.title,
      data: courseData.data,
    };
  },
};
</script>
