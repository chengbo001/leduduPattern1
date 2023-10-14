<template>
  <div id="table-dome">
    <page-header
      :title="title"
      describe="表格展示系统内所有人员的详细信息"
    ></page-header>
    <page-layout>
      <a-card>
        <p-table
          :fetch="fetch"
          :columns="columns"
          :toolbar="toolbar"
          :operate="operate"
          :pagination="pagination"
        >
          <!-- 继承至 a-table 的默认插槽 -->
          <template #name="{ record }">
            {{ record.name }}
          </template>
        </p-table>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
let data = [];
const createData = Mock.mock({
  "a|10": [
    {
      "key|+1": 0,
      "serial|+1": 10000,
      name: "@CNAME",
      "age|20-60": 0,
      phone: "@PHONE",
      "grade|1": ["高", "中", "低"],
      worker: "@CNAME",
      time: new Date().toLocaleDateString(),
    },
  ],
});
data = createData.a;

export default {
  setup() {
    const title = document.title;

    /// 字段
    const columns = [
      {
        title: "编号",
        dataIndex: "serial",
        key: "serial",
      },
      {
        title: "姓名", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age",
      },
      { title: "电话", dataIndex: "phone", key: "phone" },
      { title: "等级", dataIndex: "grade", key: "grade" },
      { title: "操作员", dataIndex: "worker", key: "worker" },
      { title: "操作时间", dataIndex: "time", key: "time" },
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
        label: "查看",
        event: function (record) {
          alert("查看详情:" + JSON.stringify(record));
        },
      },
      {
        label: "修改",
        event: function (record) {
          alert("修改事件:" + JSON.stringify(record));
        },
      },
      {
        label: "删除",
        event: function (record) {
          alert("删除事件:" + JSON.stringify(record));
        },
      },
      {
        label: "更多",
        children: [
          {
            label: "导出",
            event: function (record) {
              alert("导出");
            },
          },
          {
            label: "下载",
            event: function (record) {
              alert("下载");
            },
          },
        ],
      },
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
