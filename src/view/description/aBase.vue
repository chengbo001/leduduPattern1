<template>
  <div id="table-dome">
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
      <a-row :gutter="[10, 10]">
        <a-col v-for="(item, index) of data" :key="index" :span="12">
          <a-card>
            <a-descriptions
              :title="item.title + ' ' + item.bianhao"
              :column="5"
            >
              <template #extra>
                <a-space>
                  <!-- <a-button type="primary" @click="$alert('编辑成功已保存')" size="small">
                    编辑
                  </a-button> -->
                  <a-button @click="$alert('删除成功')" size="small">
                    删除
                  </a-button>
                </a-space>
              </template>
              <a-descriptions-item :label="item.field1.key" :span="5">
                <span style="display: block; text-indent: 60px">
                  {{ item.field1.value }}
                </span>
              </a-descriptions-item>
              <!-- <a-descriptions-item :label="item.field2.key" :span="3">
                <a-badge status="processing" :text="item.field2.value" />
              </a-descriptions-item>
              <a-descriptions-item :label="item.field3.key" :span="2">
                {{ item.field3.value }}
              </a-descriptions-item>
              <a-descriptions-item :label="item.field4.key" :span="3">
                {{ item.field4.value }}
              </a-descriptions-item>
              <a-descriptions-item :label="item.field5.key" :span="3">
                {{ item.field5.value }}
              </a-descriptions-item> -->
            </a-descriptions>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item v-for="item of formLabel" :key="item" :label="item">
                <a-input />
              </a-form-item>
              <a-button type="primary" style="display: block; margin: 0 auto">
                提交
              </a-button>
            </a-form>
          </a-card>
        </a-col> -->
      </a-row>
      <div style="height: 10px"></div>
      <a-pagination :current="1" :total="50" show-less-items />
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
import { SettingOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";

const data = Mock.mock({
  "data|10": [
    {
      "key|+1": 1,
      "title|1": ["搜索历史", "搜索历史"],
      bianhao() {
        return "SSLS072" + this.key;
      },
      field1: {
        "key|+1": "",
        "value|+1": ["搜索了可以用于教育类的PPT背景图"],
      },
      field2: {
        "key|+1": "水能",
        "value|+1": ["目标：节能5%。实际：节能6%"],
      },
      field3: {
        "key|+1": "天然气",
        "value|+1": ["目标：节能5%。实际：节能6%"],
      },
      field4: {
        "key|+1": "其他",
        "value|+1": ["目标：节能5%。实际：节能6%"],
      },
      field5: {
        "key|+1": "时间",
        value:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
      },
    },
  ],
}).data;
// TODO 待处理
const formLabel = Object.keys(data[0])
  .filter((item) => data[0][item]?.key)
  .map((item) => data[0][item]?.key);
export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const title = document.title;
    return {
      title,
      data,
      formLabel,
    };
  },
});
</script>
