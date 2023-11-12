<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <G2Pline1></G2Pline1>
      </a-card>
      <div style="height: 10px"></div>

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
            <!-- <a-space>
              <double-left-outlined />
              <pause-outlined v-if="record.id == 100" />
              <caret-right-outlined v-else />
              <double-right-outlined />
            </a-space> -->
          </template>
          <template #field1="{ text }">
            <!-- <a-rate :value="text"></a-rate> -->
          </template>
          <template #operation="{}">
            <span>
              <a @click="$alert('即将跳转页面')">查看</a>
              <a-divider type="vertical" />
              <a-popconfirm
                title="是否要删除此行？"
                @confirm="$alert('删除成功')"
              >
                <a>删除</a>
              </a-popconfirm>
            </span>
          </template>
        </a-table>
        <div style="height: 10px"></div>
        <a-pagination :current="1" :total="50" show-less-items />
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
import G2Pline1 from "@/view/list/chartComponents/G2Pline1.vue";

export default defineComponent({
  components: {
    PlusOutlined,
    G2Pline1,
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
          title: "年龄",
          dataIndex: "name",
          key: "name",
          // slots: { customRender: "name" },
        },
        {
          title: "作业环境",
          dataIndex: "field1",
          key: "field1",
          // slots: { customRender: "field1" },
        },
        {
          title: "作业时间",
          dataIndex: "field2",
          key: "field2",
          slots: { customRender: "field2" },
        },
        {
          title: "疲劳值",
          dataIndex: "field3",
          key: "field3",
          slots: { customRender: "field3" },
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
            "id|+1": 101,
            "name|+1": ["30", "40"],
            "field1|+1": ["高空作业", "危险化学品操作"],
            "field2|+1": ["7h", "8h", "6h"],
            "field3|+1": ["500", "700", "600"],
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
