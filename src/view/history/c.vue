<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card title="">
        <a-input-search
          placeholder="请输入"
          style="width: 400px"
          @search="$alert('正在搜索，请稍后')"
        />
        <div style="height: 10px"></div>
        <a-table
          :columns="columns"
          :dataSource="data"
          :pagination="false"
          :loading="memberLoading"
        >
          <!-- <template #field3="{}">
            <rise-outlined />
          </template> -->
          <template #operation="{}">
            <span>
              <a @click="$alert('已分享')">分享</a>
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

export default defineComponent({
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
          title: "设备",
          dataIndex: "field1",
          key: "field1",
          slots: { customRender: "field1" },
        },
        {
          title: "压力",
          dataIndex: "field2",
          key: "field2",
          slots: { customRender: "field2" },
        },
        {
          title: "流量",
          dataIndex: "field3",
          key: "field3",
          slots: { customRender: "field3" },
        },
        {
          title: "工作时间",
          dataIndex: "field4",
          key: "field4",
          slots: { customRender: "field4" },
        },
        {
          title: "操作",
          key: "action",
          width: "20%",
          slots: { customRender: "operation" },
        },
      ],
      data: Mock.mock({
        "data|9": [
          {
            "id|+1": 1,
            name: function () {
              return "JL0" + this.id;
            },
            "field1|+1": ["设备SB01", "设备SB02"],
            "field2|+1": ["50", "48"],
            "field3|+1": ["30", "28"],
            "field4|+1": ["3h", "2h"],
            field5() {
              return "2023/11/" + (30 - this.id);
            },
          },
        ],
      }).data,
      // ["","","","",]
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
