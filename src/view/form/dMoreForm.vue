<template>
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="可以选择将转换后的3D文件保存为不同格式，如STL、OBJ、3MF等，并设置文件的保存路径和名称。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" title="设置" :bordered="false">
        <a-form class="form" :scrollToFirstError="true">
          <a-row :gutter="16">
            <a-col
              v-for="(item, index) of labelData"
              :key="index"
              :lg="6"
              :md="12"
              :sm="24"
            >
              <a-form-item :label="item">
                <a-input placeholder="请输入" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-form-item>
            <div style="text-align: center">
              <a-button htmlType="submit" type="primary">提交</a-button>
            </div>
          </a-form-item>
        </a-form>
      </a-card>

      <!-- table -->
      <a-card title="历史记录">
        <a-table
          :columns="columns"
          :dataSource="data"
          :pagination="false"
          :loading="memberLoading"
        >
          <template #operation="{}">
            <span>
              <a>应用</a>
              <a-divider type="vertical" />
              <a>编辑</a>
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
    const labelData = ["设置名称", "格式", "保存路径", "文件名称"];
    const state = reactive({
      loading: false,
      memberLoading: false,
      // table
      columns: [
        {
          title: "设置名称",
          dataIndex: "name",
          key: "name",
          width: "20%",
          slots: { customRender: "name" },
        },
        {
          title: "格式",
          dataIndex: "field1",
          key: "field1",
          width: "20%",
          slots: { customRender: "field1" },
        },
        {
          title: "保存路径",
          dataIndex: "field2",
          key: "field2",
          width: "20%",
          slots: { customRender: "field2" },
        },
        {
          title: "文件名称",
          dataIndex: "field3",
          key: "field3",
          width: "15%",
          slots: { customRender: "field3" },
        },
        // {
        //   title: "培训进度",
        //   dataIndex: "field4",
        //   key: "field4",
        //   width: "15%",
        //   slots: { customRender: "field4" },
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
            "key|+1": 1,
            name() {
              return "设置SZ075" + this.key;
            },
            "field1|+1": ["STL", "OBJ", "3MF"],
            "field2|+1": ["/c/user/a", "/c/user/b", "/c/user/c"],
            "field3|1": ["登陆月球", "名画", "玛丽莲梦露"],
            "field4|20-90": 1,
          },
        ],
      }).data,
      //["职员", "主管", "经理", "总监"]["销售部", "设计部", "财务部", "人力部", "产品部"]
      errors: [],
    });

    return {
      title: document.title,
      labelData,
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
