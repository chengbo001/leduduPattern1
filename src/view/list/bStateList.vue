<template>
  <!-- 表格 + 预警处理统计 用于实时监控等情况 -->
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="利用机器学习算法，预测设备可能出现的问题，从而提前采取维护措施，减少停机时间和生产损失。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card style="text-align: center">
        <a-result title="预测将出现问题，请及时查看" style="padding: 0">
        </a-result>
      </a-card>
      <div style="height: 10px"></div>
      <a-row :gutter="10">
        <a-col :span="18">
          <a-card>
            <a-form layout="inline">
              <a-form-item
                v-for="item of 3"
                :key="item"
                :label="columns[item].title"
              >
                <a-input></a-input>
              </a-form-item>
              <a-form-item>
                <a-button type="primary">检索</a-button>
              </a-form-item>
            </a-form>
            <p-table
              :fetch="fetch"
              :columns="columns"
              :toolbar="[]"
              :operate="operate"
              :pagination="pagination"
            >
              <!-- 继承至 a-table 的默认插槽 -->
              <template #name="{ record }">
                {{ record.name }}
              </template>
            </p-table>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <gauge1></gauge1>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
import point2 from "./chartComponents/point2.vue";
import pie1 from "./chartComponents/pie1.vue";
import gauge1 from "./chartComponents/gauge1.vue";
let data = [];
const createData = Mock.mock({
  "a|9": [
    {
      "key|+1": 1,
      "serial|+1": 10000,
      name() {
        return "设备SCSB0" + this.key;
      },
      specs() {
        return "模型JQMX0" + this.key;
      },
      "grade|1": ["是", "否"],
      "amount|1": ["正常", "异常"],
      "worker|1": "@CNAME",
      time: new Date().toLocaleDateString(),
    },
  ],
});
data = createData.a;

export default {
  components: {
    point2,
    pie1,
    gauge1,
  },
  setup() {
    const title = document.title;

    /// 字段
    const columns = [
      {
        title: "序列",
        dataIndex: "serial",
        key: "serial",
      },
      {
        title: "设备名称", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "机器学习模型",
        dataIndex: "specs",
        key: "specs",
      },
      { title: "是否将出现问题", dataIndex: "grade", key: "grade" },
      { title: "当前状态", dataIndex: "amount", key: "amount" },
      { title: "负责人", dataIndex: "worker", key: "worker" },
      // { title: "时间", dataIndex: "time", key: "time" },
    ];

    /// 数据来源 [模拟]
    const fetch = async (param) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            total: 100,
            data: data,
          });
        }, 900);
      });
    };

    /// 工具栏
    const toolbar = [
      {
        label: "新增",
        event: function (keys) {
          alert("新增操作:" + JSON.stringify(keys));
        },
      },
      {
        label: "删除",
        event: function (keys) {
          alert("批量删除:" + JSON.stringify(keys));
        },
      },
      {
        label: "更多操作",
        children: [
          {
            label: "批量导入",
            event(keys) {
              alert("批量导入");
            },
          },
          {
            label: "批量导出",
            event(keys) {
              alert("批量导出");
            },
          },
        ],
      },
    ];

    /// 行操作
    const operate = [
      {
        label: "推送",
        event: function (record) {
          alert(":" + JSON.stringify(record));
        },
      },
      //   label: "清洗",
      //   event: function (record) {
      //     alert(":" + JSON.stringify(record));
      //   },
      // },
      // {
      //   label: "归一化",
      //   event: function (record) {
      //     alert(":" + JSON.stringify(record));
      //   },
      // },
      // {
      //   label: "自动",
      //   event: function (record) {
      //     alert(":" + JSON.stringify(record));
      //   },
      // },
      // {
      //   label: "查看",
      //   event: function (record) {
      //     alert("查看详情:" + JSON.stringify(record));
      //   },
      // },
      // {
      //   label: "修改",
      //   event: function (record) {
      //     alert("修改事件:" + JSON.stringify(record));
      //   },
      // },
      // {
      //   label: "删除",
      //   event: function (record) {
      //     alert("删除事件:" + JSON.stringify(record));
      //   },
      // },
      // {
      //   label: "更多",
      //   children: [
      //     {
      //       label: "导出",
      //       event: function (record) {
      //         alert("导出");
      //       },
      //     },
      //     {
      //       label: "下载",
      //       event: function (record) {
      //         alert("下载");
      //       },
      //     },
      //   ],
      // },
    ];

    /// 声明抛出
    return {
      title,
      pagination: { current: 1, pageSize: 10 }, // 分页配置
      fetch: fetch, // 数据回调
      toolbar: toolbar, // 工具栏
      columns: columns, // 列配置
      operate: operate, // 行操作
    };
  },
};
</script>
