<template>
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="系统中注册的设备列表，包括设备名称、类型、状态等信息。管理物联网设备，设备监控、设备控制。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" title="注册" :bordered="false">
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
                <a-space>
                  <a-input placeholder="请输入" />
                  <a-button size="small" v-if="item == '授权验证码'">
                    发送
                  </a-button>
                </a-space>
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
      <a-card title="设备列表">
        <a-table
          :columns="columns"
          :dataSource="data"
          :pagination="false"
          :loading="memberLoading"
        >
          <template #operation="{}">
            <span>
              <a>监控</a>
              <a-divider type="vertical" />
              <a>控制</a>
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
    const labelData = ["设备名称", "类型", "状态"];
    const state = reactive({
      loading: false,
      memberLoading: false,
      // table
      columns: [
        {
          title: "设备名称",
          dataIndex: "name",
          key: "name",
          slots: { customRender: "name" },
        },
        {
          title: "类型",
          dataIndex: "field1",
          key: "field1",
          slots: { customRender: "field1" },
        },
        {
          title: "状态",
          dataIndex: "field2",
          key: "field2",
          slots: { customRender: "field2" },
        },
        // {
        //   title: "自动调整亮度",
        //   dataIndex: "field3",
        //   key: "field3",
        //   slots: { customRender: "field3" },
        // },
        // {
        //   title: "自动调整对比度",
        //   dataIndex: "field4",
        //   key: "field4",
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
              return "设备SB056" + this.key;
            },
            "field1|+1": ["家电", "工具", "家居"],
            "field2|+1": ["正常运行"],
            "field3|1": ["开启自动", "关闭自动"],
            "field4|1": ["开启自动", "关闭自动"],
          },
        ],
      }).data,
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
