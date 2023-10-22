<template>
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="根据缺陷的类型、大小和位置进行分类。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="10">
        <a-col :span="6">
          <a-directory-tree
            multiple
            :tree-data="treeData"
            :expandedKeys="[1]"
            :selectedKeys="[1]"
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
            <div style="height: 10px"></div>
            <p-table
              :fetch="fetch"
              :columns="columns"
              :toolbar="toolbar"
              :operate="operate"
              :pagination="pagination"
              :rowSelection="{}"
            >
              <!-- 继承至 a-table 的默认插槽 -->
              <template #name="{ record }">
                {{ record.name }}
              </template>
              <!-- <template #specs="{}">
                <a-select style="width: 100%" placeholder="可选择">
                  <a-select-option value="jack">顺丰快递</a-select-option>
                  <a-select-option value="lucy">圆通快递</a-select-option>
                  <a-select-option value="lucy">HLL货运</a-select-option>
                  <a-select-option value="lucy">SR货运</a-select-option>
                </a-select>
              </template> -->
            </p-table>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <rose1></rose1>
          </a-card>
        </a-col> -->
        <!-- <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item
                v-for="item of columns
                  .filter((item) => item.id != 1)
                  .map((item) => item.title)"
                :key="item"
                :label="item"
              >
                <a-input />
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
import jinzita1 from "./chartComponents/jinzita1.vue";
import rose1 from "./chartComponents/rose1.vue";
let data = Mock.mock({
  "a|9": [
    {
      "key|+1": 1,
      "serial|+1": 10000,
      "name|+1": function () {
        return "焊缝HF050" + this.key;
      },
      // "name|100-500": 1,
      "specs|1": "气孔",
      "grade|20-60": 1,
      "amount|1": ["边部", "中部"],
      "worker|1": "@PHONE",
      time: new Date().toLocaleDateString(),
    },
    // ["已连接", "未连接"] ["已发", "未发"] ["高效", "普通", "低效"]
    // ["平衡", "不平衡"] ["高风险", "低风险", "无风险"] ["正常", "异常"]
    // () {
    //   return "118.136.12.34" + this.key;
    // }
  ],
}).a;

const treeData = Mock.mock({
  "data|6": [
    {
      "index|+1": 1,
      title() {
        return "分类" + this.key;
      },
      "key|+1": 1,
      // "children|2": [
      //   {
      //     title() {
      //       return "数据表SJB028" + this.key;
      //     },
      //     title: "@CNAME",
      //     "key|+1": 11,
      //     isLeaf: true,
      //   },
      // ],
    },
  ],
});

export default {
  components: {
    jinzita1,
    rose1,
  },
  setup() {
    const title = document.title;

    /// 字段
    const columns = [
      {
        id: 1,
        title: "序列",
        dataIndex: "serial",
        key: "serial",
      },
      {
        title: "焊缝编号", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "缺陷类型",
        dataIndex: "specs",
        key: "specs",
        // slots: { customRender: "specs" },
      },
      { title: "缺陷大小", dataIndex: "grade", key: "grade" },
      { title: "缺陷位置", dataIndex: "amount", key: "amount" },
      // { title: "电话", dataIndex: "worker", key: "worker" },
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
        label: "查看",
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
      treeData: treeData.data,
    };
  },
};
</script>
