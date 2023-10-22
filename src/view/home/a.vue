<template>
  <div>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col v-for="(item, index) of statisticData" :key="index" :span="6">
          <a-card>
            <a-statistic :title="item.title" :value="item.value" />
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card :title="statisticData[0].title">
            <line1></line1>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card :title="statisticData[1].title">
            <line2></line2>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card :title="statisticData[2].title">
            <yibiao3></yibiao3>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card :title="statisticData[3].title">
            <yibiao2></yibiao2>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
import { message, notification } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";
import line1 from "./charts/line1.vue";
import line2 from "./charts/line2.vue";
import line3 from "./charts/line3.vue";
import line4 from "./charts/line4.vue";
import yibiao1 from "./charts/yibiao1.vue";
import yibiao2 from "./charts/yibiao2.vue";
import yibiao3 from "./charts/yibiao3.vue";

const statisticData = Mock.mock({
  "data|4": [
    {
      "key|+1": 1,
      "title|+1": ["图像量", "分析速度", "分析准确率", "用户满意度"],
      "value|+1": ["1888", "188", "稳定", "90%"],
    },
  ],
}).data;

export default defineComponent({
  name: "aHome",
  components: {
    PlusOutlined,
    line1,
    line2,
    line3,
    line4,
    yibiao1,
    yibiao2,
    yibiao3,
  },
  setup() {
    return {
      title: document.title,
      statisticData,
    };
  },
});
</script>

<style scoped lang="less">
.card {
  margin-bottom: 24px;
}
</style>
