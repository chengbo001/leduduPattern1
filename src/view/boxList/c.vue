<template>
  <div id="box-list">
    <page-layout>
      <page-header
        :title="title"
        describe="定期生成学习报告，展示学习进度、成就和需要改进的地方，帮助明确学习目标。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-row :wrap="true" :gutter="[10, 10]">
        <a-col v-for="item of data" :key="item" :span="6">
          <a-card :title="item.title">
            <div>
              <a-space direction="vertical">
                <span>{{ item.field1 }}</span>
                <span>{{ item.field2 }}</span>
                <span>{{ item.field3 }}</span>
                <span>{{ item.field4 }}</span>
              </a-space>
            </div>
            <div style="text-align: right">
              <a-space>
                <a-button type="primary" size="small" shape="circle">
                  <download-outlined />
                </a-button>
                <a-button size="small" shape="circle">
                  <delete-outlined />
                </a-button>
              </a-space>
            </div>
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
      title() {
        return 13 - this.key + "月学习报告";
      },
      field1: "学习进度正常",
      field2: "小有成就",
      field3: "仍需要努力",
      field4: "争取超过60%的用户",
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
