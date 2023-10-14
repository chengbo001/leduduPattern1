<template>
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="录音和回放功能，记录自己的学习过程，展示学习成果。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" titleN="搜索历史" :bordered="false">
        <a-input-search placeholder="请输入" style="width: 400px" />
        <div style="height: 10px"></div>
        <a-table
          :columns="columns"
          :dataSource="data"
          :pagination="false"
          :loading="memberLoading"
        >
          <template #name="{ record }">
            <a-space>
              <double-left-outlined />
              <pause-outlined v-if="record.id == 100" />
              <caret-right-outlined v-else />
              <double-right-outlined />
            </a-space>
          </template>
          <template #field1="{ text }">
            <a-rate :value="text"></a-rate>
          </template>
          <template #operation="{}">
            <span>
              <a>进入</a>
              <a-divider type="vertical" />
              <a-popconfirm title="是否要删除此行？">
                <a>删除</a>
              </a-popconfirm>
            </span>
          </template>
        </a-table>
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

export default defineComponent({
  name: "advancedForm",
  components: {
    PlusOutlined,
  },
  setup() {
    const state = reactive({
      loading: false,
      memberLoading: false,
      // table
      columns: [
        {
          title: "序列",
          dataIndex: "id",
          key: "id",
          // width: "10%",
        },
        {
          title: "播放操作",
          dataIndex: "name",
          key: "name",
          slots: { customRender: "name" },
        },
        {
          title: "评分",
          dataIndex: "field1",
          key: "field1",
          slots: { customRender: "field1" },
        },
        {
          title: "时间",
          dataIndex: "field2",
          key: "field2",
          slots: { customRender: "field2" },
        },
        // {
        //   title: "联系人",
        //   dataIndex: "field3",
        //   key: "field3",
        //   slots: { customRender: "field3" },
        // },
        {
          title: "操作",
          key: "action",
          slots: { customRender: "operation" },
        },
      ],
      data: Mock.mock({
        "data|6": [
          {
            "id|+1": 100,
            "name|+1": "",
            "field1|4-5": 1,
            "field2|+1": "@DATE",
            field3: "@CNAME",
          },
          // ["供应商GYS036", "供应商GYS037"]
        ],
      }).data,
      errors: [],
    });

    return {
      title: document.title,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped lang="less">
.card {
  margin-bottom: 24px;
}
</style>
