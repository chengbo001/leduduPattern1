<template>
  <div id="box-list">
    <page-layout>
      <page-header
        :title="title"
        describe="培训资源库，便于学员自主学习。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-row :wrap="true" :gutter="[10, 10]">
        <a-col v-for="item of data" :key="item" :span="6">
          <a-card>
            <a-card hoverable style="width: 240px; margin: 0 auto">
              <template #cover>
                <img alt="example" src="../../assets/image/course1.png" />
              </template>
              <a-card-meta :title="item.title">
                <template #description>{{ item.description }}</template>
              </a-card-meta>
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
      "title|+1": ["电池维修", "电池保养", "电池日常检查"],
      "description|1": [
        "电池维修与保养小技巧",
        "电池维修与保养必学必会",
        "电池维修与保养高手养成",
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
