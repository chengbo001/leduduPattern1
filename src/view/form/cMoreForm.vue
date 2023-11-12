<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
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
              <a-button
                htmlType="submit"
                type="primary"
                @click="$alert('保存成功')"
                >提交</a-button
              >
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
              <!-- <a>联动通讯</a>
              <a-divider type="vertical" /> -->
              <a @click="$alert('编辑成功')">编辑</a>
              <a-divider type="vertical" />
              <a-popconfirm
                title="是否要删除此行？"
                @confirm="$alert('已删除')"
              >
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
    const labelData = ["序列", "名称", "内容", "打分标准"];
    const state = reactive({
      loading: false,
      memberLoading: false,
      // table
      columns: [
        {
          title: "序列",
          dataIndex: "name",
          key: "name",
          slots: { customRender: "name" },
        },
        {
          title: "名称",
          dataIndex: "field1",
          key: "field1",
          slots: { customRender: "field1" },
        },
        {
          title: "内容",
          dataIndex: "field2",
          key: "field2",
          slots: { customRender: "field2" },
        },
        {
          title: "打分标准",
          dataIndex: "field3",
          key: "field3",
          slots: { customRender: "field3" },
        },
        // {
        //   title: "培训进度",
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
              // return "药物YW0" + this.key;
              return this.key;
            },
            // "name|+1": ["8:00", "12:00"],
            "field1|+1": ["整理", "整顿", "清扫", "清洁", "素养", "安全"],
            "field2|+1": [
              "检查实验室内的物品是否摆放整齐，有无乱堆乱放现象。",
              "检查实验室内的设备和物品是否摆放在合适的位置，标识是否清晰，方便取用。",
              "检查实验室内的环境卫生情况，包括地面、桌面、仪器设备表面等，确保干净整洁。",
              "检查实验室内的安全设施和设备是否正常运行，是否符合安全标准。",
              "检查实验室内的员工是否具有良好的安全习惯，是否遵守实验室安全规章制度。",
              "检查实验室内的安全隐患，包括防火、防爆、防毒、防辐射等，确保实验室安全。",
            ],
            "field3|1": ["满分5，最低1", "满分5，最低1"],
            "field4|20-90": 1,
          },
          // ["展示按钮", "关闭按钮"]
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
