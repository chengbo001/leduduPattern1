<template>
  <div id="table-dome">
    <page-header :title="title" describe=""></page-header>
    <page-layout>
      <a-row :gutter="10">
        <!-- <a-col :span="6">
          <a-directory-tree
            multiple
            :tree-data="treeData"
            :expandedKeys="[1]"
            :selectedKeys="[11]"
          ></a-directory-tree>
        </a-col> -->
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
                <a-button type="primary" @click="$alert('正在搜索中，请稍后')">
                  检索
                </a-button>
              </a-form-item>
            </a-form>
            <div style="height: 10px"></div>
            <p-table
              :fetch="fetch"
              :value="obj"
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
        <a-col :span="6">
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
              <a-button
                type="primary"
                style="display: block; margin: 0 auto"
                @click="$alert('提交成功')"
              >
                确定
              </a-button>
            </a-form>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
let data = [];
const createData = Mock.mock({
  "a|9": [
    {
      "key|+1": 1,
      "serial|+1": 10001,
      // name() {
      //   return "商品SP046" + this.key;
      // },
      "name|+1": ["税务", "发票"],
      "specs|+1": ["1000", "2000"],
      "grade|+1": ["@CNAME", "@CNAME"],
      "amount|+1": ["优", "良"],
      "worker|1": ["是", "否"],
      time: new Date().toLocaleDateString(),
    },

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
    //应收账款余额、账龄、逾期天数
    /// 字段
    const columns = [
      {
        id: 1,
        title: "序列",
        dataIndex: "serial",
        key: "serial",
      },
      {
        title: "名称", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "金额",
        dataIndex: "specs",
        key: "specs",
        // slots: { customRender: "specs" },
      },
      {
        title: "负责人",
        dataIndex: "grade",
        key: "grade",
        // slots: { customRender: "grade" },
      },
      // { title: "品质", dataIndex: "amount", key: "amount" },
      // { title: "诊断", dataIndex: "worker", key: "worker" },
      { title: "时间", dataIndex: "time", key: "time" },
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
        label: "批量分享",
        event: function (keys) {
          alert("开始批量分享");
        },
      },
      {
        label: "删除",
        event: function (keys) {
          alert("批量删除");
        },
      },
      {
        label: "更多操作",
        event: function (keys) {},
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
        label: "分享",
        event: function (record) {
          alert("分享成功");
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
