<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" title="对接" :bordered="false">
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
              <a-button
                htmlType="submit"
                type="primary"
                @click="$alert('提交成功')"
                >确定</a-button
              >
            </div>
          </a-form-item>
        </a-form>
      </a-card>

      <!-- table -->
      <a-card title="记录">
        <a-table
          :columns="columns"
          :dataSource="data"
          :pagination="false"
          :loading="memberLoading"
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
    const labelData = ["系统名称", "接口", "授权验证码"];
    const state = reactive({
      loading: false,
      memberLoading: false,
      // table
      columns: [
        {
          title: "系统名称",
          dataIndex: "name",
          key: "name",
          slots: { customRender: "name" },
        },
        {
          title: "接口地址",
          dataIndex: "field1",
          key: "field1",
          slots: { customRender: "field1" },
        },
        {
          title: "授权",
          dataIndex: "field2",
          key: "field2",
          slots: { customRender: "field2" },
        },
        // {
        //   title: "盐分",
        //   dataIndex: "field3",
        //   key: "field3",
        //   slots: { customRender: "field3" },
        // },
        // {
        //   title: "PH值",
        //   dataIndex: "field4",
        //   key: "field4",
        //   slots: { customRender: "field4" },
        // },
        // {
        //   title: "温度",
        //   dataIndex: "field5",
        //   key: "field5",
        //   slots: { customRender: "field5" },
        // },
        // {
        //   title: "降雨量",
        //   dataIndex: "field6",
        //   key: "field6",
        //   slots: { customRender: "field6" },
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
            "name|+1": function () {
              return "系统XTQ047" + this.key;
            },
            // "name|+1": ["技术", "人才", "资金", "政策"],
            "field1|+1": ["jdk.com/api/", "weui.com/api/"],
            "field2|1": ["已授权", "已授权", "已授权"],
            "field3|1": ["监测", "未监测"],
            "field4|1": ["监测", "未监测"],
            "field5|1": ["监测", "未监测"],
            "field6|1": ["监测", "未监测"],
          },
          // "@PHONE" "@CNAME" "上海市长宁区" ["800*600", "400*400", "400*320"] ["高", "中", "低"]
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
  margin-bottom: 10px;
}
</style>
