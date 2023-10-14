<template>
  <!-- 表格 + 预警处理统计 用于实时监控等情况 -->
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="通过物联网设备、传感器和摄像头实时监测生产过程、设备状态和环境参数，以便及时发现问题并采取行动。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card style="text-align: center">
        <a-row>
          <a-col :span="8">
            <a-statistic
              title="异常"
              :value="Math.floor(Math.random() * 10) + 20"
              style="margin-right: 50px"
            >
            </a-statistic>
          </a-col>
          <a-col :span="8">
            <a-statistic
              title="未处理"
              :value="Math.floor(Math.random() * 10)"
              class="demo-class"
            >
              <template #suffix>
                <span> / 100</span>
              </template>
            </a-statistic>
          </a-col>
          <a-col :span="8">
            <a-statistic
              title="已处理"
              :value="Math.floor(Math.random() * 200)"
              class="demo-class"
            >
            </a-statistic>
          </a-col>
        </a-row>
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
            <pie1></pie1>
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
let data = [];
const createData = Mock.mock({
  "a|9": [
    {
      "key|+1": 1,
      "serial|+1": 10000,
      name() {
        return "生产过程SCGC0" + this.key;
      },
      specs() {
        return "传感器CGQ0" + this.key;
      },
      grade() {
        return "摄像头SXT0" + this.key;
      },
      "amount|1": ["正常", "异常"],
      "worker|1": ["正常", "异常"],
      time: new Date().toLocaleDateString(),
    },
  ],
});
data = createData.a;

export default {
  components: {
    point2,
    pie1,
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
        title: "生产过程名称", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "传感器编号",
        dataIndex: "specs",
        key: "specs",
      },
      { title: "摄像头编号", dataIndex: "grade", key: "grade" },
      { title: "设备状态", dataIndex: "amount", key: "amount" },
      { title: "环境参数", dataIndex: "worker", key: "worker" },
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
