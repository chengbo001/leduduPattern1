<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="10">
        <!-- <a-col :span="24">
          <a-card>
            <G2Pline1></G2Pline1>
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
                <a-button type="primary" @click="$alert('正在检索中，请稍后')"
                  >检索</a-button
                >
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
              <template #specs="{ record }">
                <a-tag color="orange">{{ record.specs }}</a-tag>
              </template>
              <!-- <template #grade="{}">
                <a-select style="width: 200px" placeholder="可选择">
                  <a-select-option :value="1">荷载规范HZGF0341</a-select-option>
                  <a-select-option :value="2">荷载规范HZGF0342</a-select-option>
                  <a-select-option :value="3">荷载规范HZGF0343</a-select-option>
                </a-select>
              </template> -->
            </p-table>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <point-1></point-1>
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
              <a-radio-group
                option-type="button"
                :options="['佩戴', '未佩戴']"
              />
              <a-button type="primary" style="display: block; margin: 0 auto">
                提交
              </a-button>
            </a-form>
          </a-card>
        </a-col> -->

        <a-col :span="6">
          <!-- <a-card>
            切换荷载规范：
            <a-select style="width: 200px" value="荷载规范HZGF0341">
              <a-select-option :value="1">荷载规范HZGF0341</a-select-option>
              <a-select-option :value="2">荷载规范HZGF0342</a-select-option>
              <a-select-option :value="3">荷载规范HZGF0343</a-select-option>
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
              <a-spin size="large" />
              <!-- <a-spin :indicator="indicator1" /> -->
              <span style="line-height: 60px">正在清洗中···</span>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import { h } from "vue";
import { SyncOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";
import point1 from "./chartComponents/point1.vue";
import miniline1 from "./chartComponents/miniLine1.vue";
import interval3 from "./chartComponents/interval3.vue";
import liquid1 from "./chartComponents/liquid1.vue";
import bin1 from "./chartComponents/bin1.vue";
import G2Pline1 from "./chartComponents/G2Pline1.vue";
let data = Mock.mock({
  "a|9": [
    {
      "key|+1": 1,
      "serial|+1": 10001,
      "name|+1": function () {
        return "SJ0390" + this.key;
      },
      // "name|+1": ["带鱼", "三文鱼", "金枪鱼"],
      // name: "@CNAME",
      "specs|1": ["未处理", "未处理"],
      "grade|1": [
        "项目可行性很高",
        "项目技术可行性不高，市场潜力不大，建议再仔细研究下",
      ],
      "amount|1": "@CNAME",
      "worker|1": ["正常", "异常"],
      time: new Date().toLocaleDateString(),
    },
    // ["正常", "异常"] ["平稳", "过快", "过慢"] ["正常", "较低", "较高"]
  ],
}).a;

const treeData = Mock.mock({
  "data|6": [
    {
      "index|+1": 1,
      title() {
        return "硬盘YP038" + this.key;
      },
      "key|+1": 1,
      "children|2": [
        {
          title() {
            return "文件夹WJJ028" + this.key;
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
    point1,
    miniline1,
    interval3,
    liquid1,
    bin1,
    G2Pline1,
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
        // slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "数据状态",
        dataIndex: "specs",
        key: "specs",
        slots: { customRender: "specs" },
      },
      // {
      //   title: "评审建议",
      //   dataIndex: "grade",
      //   key: "grade",
      //   // slots: { customRender: "grade" },
      // },
      // { title: "负责人", dataIndex: "amount", key: "amount" },
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
        label: "清洗",
        event: function () {
          alert("开始进行清洗");
        },
      },
      {
        label: "归一化",
        event: function () {
          alert("开始进行归一化");
        },
      },
      {
        label: "特征选择",
        event: function () {
          alert("开始进行特征选择");
        },
      },
      {
        label: "缺失值处理",
        event: function () {
          alert("开始进行缺失值处理");
        },
      },
      {
        label: "整合",
        event: function () {
          alert("开始整合");
        },
      },
      {
        label: "压缩",
        event: function () {
          alert("开始压缩");
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
        event: function () {
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
      toolbar: toolbar, // 工具栏
      columns: columns, // 列配置
      operate: operate, // 行操作
      treeData: treeData.data,
      indicator1,
    };
  },
};
</script>
