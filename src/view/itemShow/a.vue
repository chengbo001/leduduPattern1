<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
      <div style="height: 10px"></div>
      <a-card>
        <a-input-search
          placeholder="请输入"
          style="width: 400px"
          @search="$alert('正在搜索中，请稍后')"
        />
        <div style="height: 10px"></div>
        <a-row :gutter="[10, 10]">
          <a-col v-for="item of 2" :key="item" :span="12">
            <a-list size="large" bordered :data-source="data">
              <template #renderItem="{ item }">
                <a-list-item>
                  {{ item.title + ": " + item.value }}
                  <template #extra>
                    <a-space>
                      <setting-outlined @click="$alert('设置成功')" />
                      <camera-outlined />
                    </a-space>
                  </template>
                </a-list-item>
              </template>
              <template #header> </template>
              <template #footer> </template>
            </a-list>
          </a-col>
        </a-row>
        <div style="height: 10px"></div>
        <a-pagination :current="1" :total="50" show-less-items />
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

const data = Mock.mock({
  "data|16": [
    {
      "key|+1": 1,
      title() {
        return "TXSP048" + this.key;
      },
      "value|+1": ["图像中有人在奔跑", "视频中有车辆在行驶"],
    },
  ],
}).data;

export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    return {
      title: document.title,
      data,
    };
  },
});
</script>

<style scoped lang="less">
.card {
  margin-bottom: 24px;
}
</style>
