<template>
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="展示用户的购买记录。用于给用户做多样化推荐。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card title="购买记录">
        <a-input-search placeholder="请输入" style="width: 400px" />
        <div style="height: 10px"></div>
        <a-table
          :columns="columns"
          :dataSource="data"
          :pagination="false"
          :loading="memberLoading"
        >
          <template #operation="{}">
            <span>
              <a>再次购买</a>
              <a-divider type="vertical" />
              <a-popconfirm title="是否要删除此行？">
                <a>删除</a>
              </a-popconfirm>
            </span>
          </template>
        </a-table>
        <!-- <a-button
          style="width: 100%; margin-top: 16px; margin-bottom: 24px"
          type="dashed"
          @click="newMember"
        >
          <template #icon>
            <PlusOutlined />
          </template>
          新增成员
        </a-button> -->
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
          title: "标题",
          dataIndex: "name",
          key: "name",
          slots: { customRender: "name" },
        },
        {
          title: "时间",
          dataIndex: "field1",
          key: "field1",
          slots: { customRender: "field1" },
        },
        // {
        //   title: "地点",
        //   dataIndex: "field2",
        //   key: "field2",
        //   width: "20%",
        //   slots: { customRender: "field2" },
        // },
        // {
        //   title: "联系人",
        //   dataIndex: "field3",
        //   key: "field3",
        //   width: "20%",
        //   slots: { customRender: "field3" },
        // },
        {
          title: "操作",
          key: "action",
          width: "20%",
          slots: { customRender: "operation" },
        },
      ],
      data: Mock.mock({
        "data|6": [
          {
            "name|+1": [
              "购买精准检索JZJS025次结果",
              "购买精准检索JZJS026次结果",
            ],
            "field1|+1": "@DATE",
            "field2|+1": "上海市长宁区",
            field3: "@CNAME",
          },
        ],
      }).data,
      // [
      //   "供应商GYS034",
      //   "供应商GYS035",
      //   "供应商GYS036",
      //   "供应商GYS037",
      // ]
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
