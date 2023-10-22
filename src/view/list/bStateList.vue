<template>
  <!-- 表格 + 预警处理统计 用于实时监控等情况 -->
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card style="text-align: center">
        <a-result title="出现风险，请及时查看" style="padding: 0"> </a-result>
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
            <div style="height: 10px"></div>
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
              <template #grade="{ record }">
                <a-tag color="red">{{ record.grade }}</a-tag>
              </template>
            </p-table>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <gauge1></gauge1>
          </a-card>
        </a-col> -->
        <a-col :span="6">
          <a-card>
            <div
              style="
                display: flex;
                flex-direction: column;
                text-align: center;
                justify-content: center;
                height: 400px;
              "
            >
              <a-spin size="large" />
              <span style="line-height: 60px">持续分析中···</span>
            </div>
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
let data = Mock.mock({
  "a|9": [
    {
      "key|+1": 1,
      "serial|+1": 10000,
      name() {
        return "风险FX0" + this.key;
      },
      "specs|+1": ["节日人流拥挤", "大风大雨天气", "地区火警"],
      "grade|1": ["警告", "危险"],
      "amount|1": "@CNAME",
      "worker|1": "@CNAME",
      time: new Date().toLocaleDateString(),
      // ["正常", "异常"]
    },
  ],
}).a;

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
        title: "风险编号", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "事件类型",
        dataIndex: "specs",
        key: "specs",
      },
      {
        title: "风险等级",
        dataIndex: "grade",
        key: "grade",
        slots: { customRender: "grade" },
      },
      // { title: "安保人员", dataIndex: "amount", key: "amount" },
      // { title: "负责人", dataIndex: "worker", key: "worker" },
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
        label: "发布预警",
        event: function (record) {
          alert("查看详情:" + JSON.stringify(record));
        },
      },
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
