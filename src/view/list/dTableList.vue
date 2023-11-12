<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="10">
        <!-- <a-col :span="6">
          <a-directory-tree
            multiple
            :tree-data="treeData"
            :expandedKeys="[]"
            :selectedKeys="[1]"
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
                <a-button type="primary" @click="$alert('正在搜索，请稍等')">
                  检索
                </a-button>
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
              <template #amount="{ record }">
                <a-space>
                  {{ record.amount }}
                  <!-- <eye-two-tone @click="$alert('即将跳转页面')" /> -->
                </a-space>
              </template>
              <template #grade="{ record }">
                <a-space>
                  <!-- {{ record.grade }} -->
                  <!-- <eye-two-tone @click="$alert('即将跳转页面')" /> -->
                  <rise-outlined />
                </a-space>
              </template>
              <!-- <template #amount="{}">
                <a-select style="width: 200px" placeholder="请选择任务">
                  <a-select-option value="1">任务RW032</a-select-option>
                  <a-select-option value="2">任务RW033</a-select-option>
                  <a-select-option value="3">任务RW034</a-select-option>
                </a-select>
              </template> -->
            </p-table>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <interval-3></interval-3>
          </a-card>
        </a-col> -->
        <!-- <a-col :span="6">
          <a-card>
            <a-form :label-col="{ span: 8 }">
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
                @click="$alert('已保存')"
              >
                确定
              </a-button>
            </a-form>
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
              <!-- <a-spin size="large" /> -->
              <a-image
                :preview="false"
                src="https://hbimg.b0.upaiyun.com/b30c5aee9f89f250d85e34f8c94094586922ef5a1b834-ZuEz0q_fw658"
              />
              <span style="line-height: 60px">持续监测中···</span>
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
import bin1 from "./chartComponents/bin1.vue";
import interval1 from "./chartComponents/interval1.vue";
import interval2 from "./chartComponents/interval2.vue";
import interval3 from "./chartComponents/interval3.vue";
let data = Mock.mock({
  "a|9": [
    {
      "key|+1": 1,
      "serial|+1": 10001,
      // "name|+1": function () {
      //   return "10" + this.key + "位";
      // },
      "name|+1": ["水", "电", "煤", "气"],
      "specs|+1": ["35", "54"],
      "grade|+1": ["18个月", "20个月"],
      "amount|+1": ["90%", "94%"],
      "worker|1": ["记录JL01", "记录JL02"],
      // "time|+1": ["2023/11/01", "2023/10/30"],
      // time: "@TIME('HH:mm:ss')",
      time() {
        return "2023/11/" + this.key;
      },
    },
    // ["优", "良", "劣", "差"]
  ],
}).a;

const treeData = Mock.mock({
  "data|6": [
    {
      "index|+1": 1,
      title() {
        return "分组0" + this.key;
      },
      "key|+1": 1,
      "children|2": [
        {
          title() {
            return "建筑JZ028" + this.key;
          },
          // title: "@CNAME",
          "key|+1": 11,
          isLeaf: true,
        },
      ],
    },
  ],
});

export default {
  components: {
    bin1,
    interval1,
    interval2,
    interval3,
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
        title: "名称", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "消耗量",
        dataIndex: "specs",
        key: "specs",
      },
      {
        title: "趋势",
        dataIndex: "grade",
        key: "grade",
        slots: { customRender: "grade" },
      },
      {
        title: "效率",
        dataIndex: "amount",
        key: "amount",
        slots: { customRender: "amount" },
      },
      // {
      //   title: "诊疗记录",
      //   dataIndex: "worker",
      //   key: "worker",
      //   slots: { customRender: "amount" },
      // },
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
          alert("新增成功");
        },
      },
      {
        label: "删除",
        event: function (keys) {
          alert("删除成功");
        },
      },
      {
        label: "更多操作",
        event: function () {},
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
          alert("即将跳转页面");
        },
      },
      // {
      //   label: "修改",
      //   event: function (record) {
      //     alert("修改已保存");
      //   },
      // },
      {
        label: "删除",
        event: function (record) {
          alert("已删除");
        },
      },
      // {
      //   label: "更多",
      //   event: function (record) {},
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
