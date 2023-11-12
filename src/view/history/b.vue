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
        <a-button @click="visible = true">创建</a-button>
        <div style="height: 10px"></div>
        <a-table
          :columns="columns"
          :dataSource="data"
          :pagination="false"
          :loading="memberLoading"
        >
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
    <a-modal v-model:visible="visible" title="新增" @ok="$alert('提交已保存')">
      <a-form>
        <a-form>
          <a-form-item
            v-for="item of columns.map((item) => item.title)"
            :key="item"
            :label="item"
          >
            <a-input />
          </a-form-item>
        </a-form>
      </a-form>
    </a-modal>
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
          title: "时间",
          dataIndex: "field1",
          key: "field1",
          slots: { customRender: "field1" },
        },
        {
          title: "设备",
          dataIndex: "field2",
          key: "field2",
          slots: { customRender: "field2" },
        },
        {
          title: "人员",
          dataIndex: "field3",
          key: "field3",
          slots: { customRender: "field3" },
        },
        {
          title: "内容",
          dataIndex: "field4",
          key: "field4",
          slots: { customRender: "field4" },
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
            "name|+1": ["维护WH038", "维护WH039"],
            "field1|+1": ["2023/10/23", "2023/10/24"],
            "field2|+1": ["设备SB01", "设备SB02"],
            "field3|+1": "@CNAME",
            "field4|+1": ["备件更换", "例行检修"],
          },
        ],
      }).data,
      // ["","","","",]
      errors: [],
      visible: false,
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
