<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row>
        <a-col
          :span="24"
          v-for="item of ['教务处', '后勤处', '学生处']"
          :key="item"
        >
          <a-card :title="`向${item}发信息`" class="card">
            <a-transfer
              v-model:target-keys="targetKeys"
              :data-source="mockData"
              :one-way="true"
              :operations="['发送', 'to left']"
              :titles="['', '']"
              :render="(item) => item.title"
              @change="handleChange"
              @selectChange="handleSelectChange"
              @scroll="handleScroll"
              :list-style="{
                width: '48%',
                height: '300px',
              }"
              :showSelectAll="false"
            />
            <div style="height: 10px"></div>
            <a-button @click="showModal = true">添加消息</a-button>
          </a-card>
        </a-col>
      </a-row>
      <a-modal
        v-model:visible="showModal"
        title="请填写"
        @ok="$alert('已保存')"
      >
        <a-form>
          <a-form-item label="标题">
            <a-input></a-input>
          </a-form-item>
          <a-form-item label="内容">
            <a-input></a-input>
          </a-form-item>
        </a-form>
      </a-modal>
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
import Mock from "better-mock";

const mockData = [];
for (let i = 0; i < 5; i++) {
  mockData.push({
    key: i.toString(),
    title: `低碳环保会议通知`,
    description: `description of content${i + 1}`,
  });
}
const oriTargetKeys = mockData
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);
export default defineComponent({
  data() {
    const targetKeys = ref(oriTargetKeys);
    const handleChange = (nextTargetKeys, direction, moveKeys) => {
      console.log("targetKeys: ", nextTargetKeys);
      console.log("direction: ", direction);
      console.log("moveKeys: ", moveKeys);
    };
    const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
      console.log("sourceSelectedKeys: ", sourceSelectedKeys);
      console.log("targetSelectedKeys: ", targetSelectedKeys);
    };
    const handleScroll = (direction, e) => {
      console.log("direction:", direction);
      console.log("target:", e.target);
    };

    const showModal = ref(false);

    return {
      title: document.title,
      mockData,
      targetKeys,
      handleChange,
      handleSelectChange,
      handleScroll,
      showModal,
    };
  },
});
</script>

<style lang="less">
.card {
  margin-bottom: 10px;
}
.transfer .ant-transfer-list {
  width: 48%;
  height: 200px;
  flex: none;
}
</style>
