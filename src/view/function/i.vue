<template>
  <div>
    <!-- 电梯紧急呼叫。上下布局 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" :bordered="false">
        <div style="text-align: center">
          <a-space direction="vertical">
            <span style="font-size: 20px">持续发送数据中～</span>
          </a-space>
        </div>
      </a-card>
      <a-card class="card" title="列表" :bordered="true">
        <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-card :title="item.title" hoverable>
                <a-space direction="vertical">
                  <span>{{ item.desc }}</span>
                  <!-- <a-checkbox-group :value="'可选择'" :options="['可选择']" /> -->
                </a-space>
              </a-card>
            </a-list-item>
          </template>
        </a-list>
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
        return "数据线SJX0" + this.key;
      },
      // "title|+1": ["A栋B座2号楼电梯", "A栋B座3号楼电梯"],
      "desc|+1": ["稳定性良好", "稳定性良好"],
    },
  ],
}).data;

export default defineComponent({
  name: "advancedForm",
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
  margin-bottom: 10px;
}
.ad-img {
  width: 80%;
  // border: 1px solid #9e9e9e;
  // padding: 8px;
  box-shadow: 5px 5px 5px 0px #9e9e9e;
  border-radius: 3px;
}
</style>
