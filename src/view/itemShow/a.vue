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
        <a-button @click="visible = true">创建</a-button>
        <div style="height: 10px"></div>
        <a-row :gutter="[10, 10]">
          <a-col v-for="item of 2" :key="item" :span="12">
            <a-list size="large" bordered :data-source="data">
              <template #renderItem="{ item }">
                <a-list-item>
                  {{ item.title + ": " + item.value }}
                  <template #extra>
                    <a-space>
                      <!-- <setting-outlined @click="$alert('设置成功')" /> -->
                      <!-- <file-pdf-outlined @click="$alert('导出PDF成功')" /> -->
                      <!-- <camera-outlined @click="$alert('导出图片成功')" /> -->
                      <!-- <video-camera-outlined @click="$alert('导出视频成功')" /> -->
                      <!-- <bars-outlined @click="$alert('即将跳转页面')" /> -->
                      <!-- <delete-outlined @click="$alert('删除成功')" /> -->
                      <a @click="$alert('自动备份中')">自动备份中</a>
                      <a @click="$alert('恢复中')">恢复</a>
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
    <a-modal v-model:visible="visible" title="新增" @ok="$alert('提交已保存')">
      <a-form>
        <a-form>
          <a-form-item v-for="item of formLabel" :key="item" :label="item">
            <a-input />
          </a-form-item>
        </a-form>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
import { message, notification } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";

const data = Mock.mock({
  "data|12": [
    {
      "key|+1": 1,
      title() {
        return "关键数据GJSJ0" + this.key;
      },
      "value|+1": ["", ""],
    },
  ],
}).data;

const formLabel = ["名称", "位置"];

export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    const visible = ref(false);
    return {
      title: document.title,
      data,
      visible,
      formLabel,
    };
  },
});
</script>

<style scoped lang="less">
.card {
  margin-bottom: 24px;
}
</style>
