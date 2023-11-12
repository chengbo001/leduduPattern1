<template>
  <div id="box-list">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-input-search
        placeholder="请输入"
        style="width: 400px"
        @search="$alert('正在搜索中，请稍后')"
      />
      <div style="height: 10px"></div>
      <a-row :wrap="true" :gutter="[10, 10]">
        <a-col v-for="item of data" :key="item" :span="6">
          <a-card>
            <a-card hoverable style="width: 240px; margin: 0 auto">
              <template #cover>
                <a-image
                  alt="example"
                  src="https://hbimg.huabanimg.com/17e13f2b7dd819c01ca655487038de8c6381238e26597-YqsgaI_fw658"
                />
              </template>
              <a-card-meta :title="item.title">
                <template #description>{{ item.description }}</template>
              </a-card-meta>
              <div style="text-align: right; margin-top: 10px">
                <a @click="$alert('即将跳转页面')"> 了解更多 </a>
                <a @click="$alert('报名成功')"> 学习 </a>
              </div>
            </a-card>
          </a-card>
        </a-col>
      </a-row>
      <div style="height: 10px"></div>
      <a-pagination :current="1" :total="50" show-less-items />
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
const courseData = Mock.mock({
  "data|8": [
    {
      "key|+1": 1,
      "src|+1": ["../../assets/image/course1.png"],
      "title|+1": ["如何缓解疲劳", "疲劳作业危害", "经验分享"],
      "description|1": [
        "应用这些知识解决作业疲劳问题。",
        "应用这些知识解决作业疲劳问题。",
        "应用这些知识解决作业疲劳问题。",
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
