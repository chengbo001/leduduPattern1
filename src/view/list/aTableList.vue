<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <!-- <a-card>
        <a-upload-dragger :multiple="true">
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">扩展资源</p>
          <p class="ant-upload-hint">点击或拖动文件至此上传资源</p>
        </a-upload-dragger>
      </a-card>
      <div style="height: 10px"></div> -->
      <a-row :gutter="[10, 10]">
        <!-- <a-col :span="24">
          <a-card>
            <G2Pzhu1></G2Pzhu1>
          </a-card>
        </a-col> -->
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
              <!-- <a-form-item :label="'广告特征'">
                <a-input></a-input>
              </a-form-item> -->
              <a-form-item>
                <a-button type="primary" @click="$alert('正在检索中，请稍后')"
                  >检索</a-button
                >
              </a-form-item>
            </a-form>
            <div style="height: 12px"></div>
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
            </p-table>
          </a-card>
        </a-col>
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
                @click="$alert('提交成功')"
              >
                提交
              </a-button>
            </a-form>
          </a-card>
        </a-col> -->
        <a-col :span="6">
          <!-- <a-card>
            切换数据源：
            <a-select value="文件" style="width: 200px">
              <a-select-option value="1">数据库</a-select-option>
              <a-select-option value="2">API</a-select-option>
              <a-select-option value="3">CSV</a-select-option>
              <a-select-option value="3">TXT</a-select-option>
              <a-select-option value="3">JSON</a-select-option>
            </a-select>
          </a-card>
          <div style="height: 10px"></div> -->
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
              <a-spin :indicator="indicator1" />
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
import { defineComponent, h } from "vue";
import Mock from "better-mock";
import point2 from "./chartComponents/point2.vue";
import pie1 from "./chartComponents/pie1.vue";
import gauge2 from "./chartComponents/gauge2.vue";
import interval2 from "./chartComponents/interval2.vue";
import G2Pzhu1 from "./chartComponents/G2Pzhu1.vue";
import { SyncOutlined } from "@ant-design/icons-vue";

let data = Mock.mock({
  "a|9": [
    {
      "key|+1": 1,
      "serial|+1": 10001,
      temp: "@CFIRST",
      name() {
        return "SJ0" + this.key;
      },
      // "name|+1": ["秸秆", "秸秆", "秸秆"],
      "specs|+1": ["传感器01", "传感器02", "传感器03"],
      "grade|+1": ["温度", "压力", "流量"],
      "amount|+1": ["40°C", "38Pa", "76方/s"],
      "worker|+1": ["优", "合格"],
      // time: new Date().toLocaleDateString(),
      time: "@TIME('mm:ss')", //HH
    },
  ],
}).a;

const treeData = Mock.mock({
  "data|6": [
    {
      "index|+1": 1,
      title() {
        return "建筑JZ037" + this.key;
      },
      "key|+1": 1,
      "children|2": [
        {
          title() {
            return "文件夹WJJ028" + this.key;
          },
          "key|+1": 11,
          isLeaf: true,
        },
      ],
    },
  ],
});

export default {
  components: {
    point2,
    pie1,
    gauge2,
    interval2,
    G2Pzhu1,
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
        title: "数据编号", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "传感器",
        dataIndex: "specs",
        key: "specs",
        // slots: { customRender: "specs" },
      },
      {
        title: "类型",
        dataIndex: "grade",
        key: "grade",
        // slots: { customRender: "grade" },
      },
      {
        title: "数值",
        dataIndex: "amount",
        key: "amount",
        // slots: { customRender: "amount" },
      },
      // {
      //   title: "质量",
      //   dataIndex: "worker",
      //   key: "worker",
      //   // slots: { customRender: "worker" },
      // },
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
        label: "自动监测",
        event: function () {
          alert("自动监测成功");
        },
      },
      {
        label: "删除",
        event: function () {
          alert("正在删除中，请稍后");
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
        event: function () {
          alert("即将跳转页面");
        },
      },
      // {
      //   label: "驳回",
      //   event: function (record) {
      //     alert("驳回成功");
      //   },
      // },
      // {
      //   label: "删除",
      //   event: function () {
      //     alert("删除成功");
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

    const indicator1 = h(SyncOutlined, {
      style: {
        fontSize: "30px",
      },
      spin: true,
    });
    /// 声明抛出
    return {
      title,
      pagination: { current: 1, pageSize: 10 }, // 分页配置
      fetch: fetch, // 数据回调
      treeData: treeData.data,
      toolbar: toolbar, // 工具栏
      columns: columns, // 列配置
      operate: operate, // 行操作
      indicator1,
    };
  },
};
</script>
