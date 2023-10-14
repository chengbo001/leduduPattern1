<template>
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="口语练习材料，包括日常生活、商务、旅游等场景。用户可以根据自己的需求进行选择和练习。并且支持自定义扩展。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <a-upload-dragger :multiple="true">
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">扩展资源</p>
          <p class="ant-upload-hint">点击或拖动文件至此上传资源</p>
        </a-upload-dragger>
      </a-card>
      <div style="height: 10px"></div>
      <a-row :gutter="10">
        <!-- <a-col :span="6">
          <a-directory-tree 
            multiple 
            :tree-data="treeData" 
            :expandedKeys="[1]"
            :selectedKeys="[11]"></a-directory-tree>
        </a-col> -->
        <a-col :span="24">
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
                <a-button type="primary">检索</a-button>
              </a-form-item>
            </a-form>
            <div style="height: 12px"></div>
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
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item label="监测人">
                <a-input />
              </a-form-item>
              <a-form-item label="加速度计">
                <a-radio-group
                  option-type="button"
                  :options="['佩戴', '未佩戴']"
                />
              </a-form-item>
              <a-form-item label="陀螺仪">
                <a-radio-group
                  option-type="button"
                  :options="['佩戴', '未佩戴']"
                />
              </a-form-item>
              <a-form-item label="心率检测仪">
                <a-radio-group
                  option-type="button"
                  :options="['佩戴', '未佩戴']"
                />
              </a-form-item>
              <a-button type="primary" style="display: block; margin: 0 auto">
                提交
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
import point2 from "./chartComponents/point2.vue";
import pie1 from "./chartComponents/pie1.vue";
import gauge2 from "./chartComponents/gauge2.vue";
import interval2 from "./chartComponents/interval2.vue";
let data = [];
const createData = Mock.mock({
  "a|9": [
    {
      "key|+1": 1,
      "serial|+1": 10000,
      // name() {
      //   return "商品ZBSP030" + this.key;
      // },
      "name|+1": ["日常生活", "商务", "旅游", "英式", "美式"],
      "specs|1000-4000": 1,
      "grade|1": ["高级", "中级", "初级"],
      "amount|100-500": 1,
      "worker|1": "车间CJ03",
      time: new Date().toLocaleDateString(),
    },
    // ["增加", "降低"] ["启动", "关闭"] ["经济", "好用"]
  ],
});
data = createData.a;

const treeData = Mock.mock({
  "data|6": [
    {
      "index|+1": 1,
      title() {
        return "数据库SJK037" + this.key;
      },
      "key|+1": 1,
      "children|2": [
        {
          title() {
            return "数据表SJB028" + this.key;
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
        title: "场景", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "词汇量",
        dataIndex: "specs",
        key: "specs",
      },
      { title: "等级", dataIndex: "grade", key: "grade" },
      { title: "使用人数", dataIndex: "amount", key: "amount" },
      // { title: "上课地点", dataIndex: "worker", key: "worker" },
      { title: "加入时间", dataIndex: "time", key: "time" },
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
        label: "使用",
        event: function (record) {
          alert(":" + JSON.stringify(record));
        },
      },
      {
        label: "取消",
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
      treeData: treeData.data,
      toolbar: toolbar, // 工具栏
      columns: columns, // 列配置
      operate: operate, // 行操作
    };
  },
};
</script>
