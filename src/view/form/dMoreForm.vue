<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" title="新增" :bordered="false">
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
                @click="$alert('成功发布')"
                >发布</a-button
              >
            </div>
          </a-form-item>
        </a-form>
      </a-card>

      <!-- table -->
      <a-card title="展示">
        <a-table
          :columns="columns"
          :dataSource="data"
          :pagination="false"
          :loading="memberLoading"
          :rowSelection="{}"
        >
          <template #operation="{}">
            <span>
              <a @click="$alert('发送成功')">发送</a>
              <a-divider type="vertical" />
              <a @click="$alert('已编辑成功，正在保存')">编辑</a>
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
    const labelData = ["名称", "内容", "地点", "时间"];
    const state = reactive({
      loading: false,
      memberLoading: false,
      // table
      columns: [
        {
          title: "名称",
          dataIndex: "name",
          key: "name",
          slots: { customRender: "name" },
        },
        {
          title: "内容",
          dataIndex: "field1",
          key: "field1",
          slots: { customRender: "field1" },
        },
        {
          title: "地点",
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
            // name() {
            //   return "设置SZ075" + this.key;
            // },
            "name|+1": ["节能宣传", "推广节能技术"],
            "field1|+1": ["讲师讲授相关内容", "讲师讲授相关内容"],
            "field2|+1": ["405教室", "406教室"],
            "field3|1": ["10/20", "10/20"],
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
