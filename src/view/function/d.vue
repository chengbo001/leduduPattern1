<template>
  <div>
    <!-- 部署AI模型、高速收卡 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" :bordered="false">
        <a-steps :current="1">
          <a-step>
            <!-- <span slot="title">Finished</span> -->
            <template #title>选择数据</template>
            <template #description>
              <span>已选择数据SJ01</span>
            </template>
          </a-step>
          <a-step
            title="正在测试，请稍后"
            sub-title=""
            description="数据传输中"
          />
          <a-step title="完成" description="结果在下方显示" />
        </a-steps>
      </a-card>
      <a-card class="card" title="列表" :bordered="false">
        <a-table
          :columns="columns"
          :dataSource="data"
          :pagination="false"
          :loading="memberLoading"
          :rowSelection="{}"
        >
          <template #operation="{}">
            <span>
              <a @click="$alert('分享成功')">分享</a>
              <!-- <a-divider type="vertical" /> -->
              <!-- <a>编辑</a>
              <a-divider type="vertical" />
              <a-popconfirm title="是否要删除此行？">
                <a>删除</a>
              </a-popconfirm> -->
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
          title: "编号",
          dataIndex: "name",
          key: "name",
          slots: { customRender: "name" },
        },
        {
          title: "用时",
          dataIndex: "field1",
          key: "field1",
          slots: { customRender: "field1" },
        },
        {
          title: "延迟",
          dataIndex: "field2",
          key: "field2",
          slots: { customRender: "field2" },
        },
        {
          title: "操作",
          key: "action",
          slots: { customRender: "operation" },
        },
      ],
      data: Mock.mock({
        "data|9": [
          {
            "key|+1": 1,
            "name|+1": function () {
              return "数据线SJX0" + this.key;
            },
            // "name|+1": ["技术", "人才", "资金", "政策"],
            "field1|+1": ["7s", "8s"],
            "field2|+1": ["11ms", "12ms"],
          },
          // ["高", "中", "低"]
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
  margin-bottom: 10px;
}
.ad-img {
  width: 80%;
  // border: 1px solid #9e9e9e;
  // padding: 8px;
  box-shadow: 5px 5px 5px 0px #9e9e9e;
  border-radius: 3px;
}
</style>
