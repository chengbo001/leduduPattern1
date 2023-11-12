<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
      <div style="height: 10px"></div>
      <a-card>
        <a-form class="ant-advanced-search-form" :label-col="{ span: 8 }">
          <a-row :gutter="24">
            <template v-for="item in labelList" :key="item.key">
              <a-col v-show="expand || item.key <= 6" :span="8">
                <a-form-item :label="item.label">
                  <a-input placeholder="请输入"></a-input>
                </a-form-item>
              </a-col>
            </template>
          </a-row>
          <a-row>
            <a-col :span="24" style="text-align: right">
              <a-button type="primary" html-type="submit">搜索</a-button>
              <a-button style="margin: 0 8px">重置</a-button>
              <a style="font-size: 12px" @click="expand = !expand">
                <template v-if="expand">
                  <UpOutlined />
                </template>
                <template v-else>
                  <DownOutlined />
                </template>
                收展
              </a>
            </a-col>
          </a-row>
        </a-form>
      </a-card>
      <div style="height: 10px"></div>
      <a-card>
        <a-table
          :columns="columns"
          :dataSource="tableData"
          :pagination="true"
          :loading="false"
        >
          <template #operation="{}">
            <span>
              <a @click="$alert('即将跳转页面')">查看</a>
            </span>
          </template>
        </a-table>
      </a-card>
    </page-layout>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import { DownOutlined, UpOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";

// table
const columns = [
  {
    title: "序列",
    dataIndex: "id",
    key: "id",
    // width: "10%",
  },
  {
    title: "咨询人",
    dataIndex: "name",
    key: "name",
    // slots: { customRender: "name" },
  },
  {
    title: "咨询主题",
    dataIndex: "field1",
    key: "field1",
    // slots: { customRender: "field1" },
  },
  {
    title: "咨询内容",
    dataIndex: "field2",
    key: "field2",
    slots: { customRender: "field2" },
  },
  {
    title: "时间",
    dataIndex: "field3",
    key: "field3",
    slots: { customRender: "field3" },
  },
  {
    title: "操作",
    key: "action",
    slots: { customRender: "operation" },
  },
];
const tableData = Mock.mock({
  "data|8": [
    {
      "id|+1": 101,
      "name|+1": "@CNAME",
      "field1|+1": ["软件咨询", "硬件咨询"],
      "field2|+1": [
        "关于软件开发、编程、数据库、软件开发工具等",
        "关于计算机硬件、服务器、网络设备、物联网设备等",
      ],
      "field3|+1": ["2023/11/09", "2023/11/08"],
    },
  ],
}).data;
const labelList = Mock.mock({
  "data|10": [
    {
      "key|+1": 0,
      "label|+1": [
        "时间范围",
        "数据类型",
        "关键词",
        "状态",
        "优先级",
        "来源",
        "处理人",
        "标签",
        "数据范围",
        "高级筛选",
      ],
    },
  ],
}).data;

export default defineComponent({
  components: {
    DownOutlined,
    UpOutlined,
  },
  setup() {
    const expand = ref(true);

    return {
      title: document.title,
      labelList,
      columns,
      tableData,
      expand,
    };
  },
});
</script>
<style scoped>
#components-form-demo-advanced-search .ant-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
[data-theme="dark"] .ant-advanced-search-form {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid #434343;
  padding: 24px;
  border-radius: 2px;
}
[data-theme="dark"] #components-form-demo-advanced-search .search-result-list {
  border: 1px dashed #434343;
  background: rgba(255, 255, 255, 0.04);
}
</style>
