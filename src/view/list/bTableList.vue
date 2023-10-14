<template>
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="利用计算机视觉和深度学习技术，对人体姿态进行实时识别和分析，以了解个体的运动模式、动作技巧和发力方式等方面的信息。"
      ></page-header>
    </page-layout>
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
              <!-- <a-form-item label="商品特征">
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="广告特征">
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="检索技术">
                <a-select style="width: 150px">
                  <a-select-option value="1">{{
                    "基本向量检索"
                  }}</a-select-option>
                  <a-select-option value="1">{{
                    "基于距离的向量检索"
                  }}</a-select-option>
                  <a-select-option value="1">{{
                    "基于网络的向量检索"
                  }}</a-select-option>
                </a-select>
              </a-form-item> -->
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
        <!-- <a-col :span="6">
          <a-card>
            <point-1></point-1>
          </a-card>
        </a-col> -->
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
import point1 from "./chartComponents/point1.vue";
import miniline1 from "./chartComponents/miniLine1.vue";
import interval3 from "./chartComponents/interval3.vue";
import liquid1 from "./chartComponents/liquid1.vue";
let data = [];
const createData = Mock.mock({
  "a|9": [
    {
      "key|+1": 1,
      "serial|+1": 10000,
      name() {
        return "测试CS032" + this.key;
      },
      "specs|1": ["跑步", "跳远", "举重"],
      "grade|1": ["抬头", "挺胸", "平衡"],
      "amount|1": ["臀部发力", "核心发力", "脚下发力"],
      "worker|1": ["正常", "异常"],
      time: new Date().toLocaleDateString(),
    },
    // ["正常", "异常"] ["平稳", "过快", "过慢"] ["正常", "较低", "较高"]
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
  components: {
    point1,
    miniline1,
    interval3,
    liquid1,
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
        title: "测试编号", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "运动模式",
        dataIndex: "specs",
        key: "specs",
      },
      { title: "动作技巧", dataIndex: "grade", key: "grade" },
      { title: "发力方式", dataIndex: "amount", key: "amount" },
      // { title: "状态", dataIndex: "worker", key: "worker" },
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
        label: "批量采集",
        event: function (keys) {
          alert("新增操作:" + JSON.stringify(keys));
        },
      },
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
        label: "传送",
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
      treeData: treeData.data,
    };
  },
};
</script>
