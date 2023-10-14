<template>
  <div id="table-dome">
    <page-header
      :title="title"
      describe="对个体遵循运动处方进行训练的效果进行评估，以便调整运动处方，确保其始终符合个体的需求和身体状况。"
    ></page-header>
    <page-layout>
      <a-row :gutter="10">
        <a-col :span="6">
          <a-directory-tree
            multiple
            :tree-data="treeData"
            :expandedKeys="[1]"
            :selectedKeys="[11]"
          ></a-directory-tree>
        </a-col>
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
              :value="obj"
              :columns="columns"
              :toolbar="toolbar"
              :operate="operate"
              :pagination="pagination"
            >
              <!-- 继承至 a-table 的默认插槽 -->
              <template #name="{ record }">
                {{ record.name }}
              </template>
              <template #specs="{}">
                <a-select style="width: 100%" placeholder="可选择">
                  <a-select-option value="jack">效果较好</a-select-option>
                  <a-select-option value="lucy">效果一般</a-select-option>
                  <a-select-option value="lucy">效果不好</a-select-option>
                  <a-select-option value="lucy">非常不好</a-select-option>
                </a-select>
              </template>
              <template #grade="{}">
                <a-input></a-input>
              </template>
            </p-table>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item label="商品名称：">
                <a-input />
              </a-form-item>
              <a-form-item label="工具：">
                <a-checkbox-group
                  :options="['优惠券', '秒杀', '限时折扣']"
                ></a-checkbox-group>
              </a-form-item>
              <a-button type="primary" style="display: block; margin: 0 auto">
                确定
              </a-button>
            </a-form>
          </a-card>
        </a-col> -->
      </a-row>
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
      "key|+1": 1,
      "serial|+1": 10000,
      name() {
        return "ZBSP050" + this.key + "商品";
      },
      "specs|1": "",
      "grade|1": "",
      "amount|1": ["是", "否"],
      worker: function () {
        return "套题" + this.key;
      },
      time: new Date().toLocaleDateString(),
    },
    // [
    //   "员工信息管理系统",
    //   "绩效管理系统",
    //   "员工成长系统",
    //   "公司发展系统",
    // ]
    // ["已连接", "未连接"]["高", "中", "低"]["已使用", "未使用"]["是", "否"]
  ],
});
data = createData.a;

const treeData = Mock.mock({
  "data|6": [
    {
      "index|+1": 1,
      title() {
        return "监测小组" + this.key;
      },
      "key|+1": 1,
      "children|2": [
        {
          // title() {
          //   return "数据表SJB028" + this.key;
          // },
          title: "@CNAME",
          "key|+1": 11,
          isLeaf: true,
        },
      ],
    },
  ],
});

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
        title: "运动处方编号", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "效果",
        dataIndex: "specs",
        key: "specs",
        slots: { customRender: "specs" },
      },
      {
        title: "描述",
        dataIndex: "grade",
        key: "grade",
        slots: { customRender: "grade" },
      },
      // { title: "限时折扣", dataIndex: "amount", key: "amount" },
      // { title: "题目", dataIndex: "worker", key: "worker" },
      // { title: "操作时间", dataIndex: "time", key: "time" },
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
        label: "提交",
        event: function (record) {
          alert("查看详情:" + JSON.stringify(record));
        },
      },
      // {
      //   label: "删除",
      //   event: function (record) {
      //     alert("修改事件:" + JSON.stringify(record));
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
      treeData: treeData.data,
    };
  },
};
</script>
