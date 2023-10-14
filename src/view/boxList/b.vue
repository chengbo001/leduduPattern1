<template>
  <div id="box-list">
    <page-layout>
      <page-header
        :title="title"
        describe="管理系统内的算法。支持自定义，可扩展。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <a-upload-dragger :multiple="true">
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">点击或拖动文件至此上传资源</p>
          <p class="ant-upload-hint">支持单个多个文件上传</p>
        </a-upload-dragger>
      </a-card>
      <div style="height: 10px"></div>
      <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-card :title="item.title">
              <div>说明：{{ item.desc }}</div>
              <br />
              <a-rate :value="item.rate" />
              <br />
              <br />
              <a-space>
                <a-button type="primary">启动</a-button>
                <a-button type="dashed">停止</a-button>
                <a-button danger>删除</a-button>
              </a-space>
            </a-card>
          </a-list-item>
        </template>
      </a-list>
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
      "title|+1": ["姿态识别算法", "生物力学分析算法", "运动处方生成算法"],
      "desc|+1": [
        "利用计算机视觉和深度学习技术，对人体姿态进行识别和分析",
        "基于人体解剖学和生物力学原理，对人体姿态进行分析",
        "结合姿态识别和生物力学分析的结果，为个体提供针对性的运动处方",
      ],
      "rate|3-5": 1,
    },
    // "@CNAME"
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
