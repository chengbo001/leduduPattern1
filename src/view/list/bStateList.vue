<template>
  <!-- 表格 + 预警处理统计 用于实时监控等情况 -->
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card style="text-align: center">
        <a-result
          status="warning"
          title="出现报警，请及时处理"
          style="padding: 0"
        ></a-result>
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
                <a-button type="primary" @click="$alert('正在搜索中，请稍后')"
                  >检索</a-button
                >
              </a-form-item>
            </a-form>
            <div style="height: 10px"></div>
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
              <template #grade="{ record }">
                <a-tag :color="record.tagColor">{{ record.grade }}</a-tag>
              </template>
            </p-table>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <gauge1></gauge1>
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
              <!-- https://img.zcool.cn/community/0122725dd9eecda8012053c0703e88.gif -->
              <!-- https://hbimg.b0.upaiyun.com/b30c5aee9f89f250d85e34f8c94094586922ef5a1b834-ZuEz0q_fw658 -->
              <a-image
                :preview="false"
                style="width: 200px; height: 200px"
                src="https://img.zcool.cn/community/0175fc571585e96ac72513431a304b.gif"
              />
              <span style="line-height: 60px">持续监控中···</span>
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
import point2 from "./chartComponents/point2.vue";
import pie1 from "./chartComponents/pie1.vue";
import gauge1 from "./chartComponents/gauge1.vue";
let data = Mock.mock({
  "a|8": [
    {
      "key|+1": 1,
      "serial|+1": 10001,
      name() {
        return "报警BJ0" + this.key;
      },
      "specs|+1": ["产品有瑕疵", "产品质量不合格"],
      "grade|+1": ["警告", "危险"],
      "tagColor|+1": ["orange", "red"],
      "amount|+1": ["调整作业任务", "安排休息"],
      "worker|1": "@CNAME",
      time: new Date().toLocaleDateString(),
      // ["正常", "异常"]
    },
  ],
}).a;

export default {
  components: {
    point2,
    pie1,
    gauge1,
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
        title: "编号", //列头显示文字
        dataIndex: "name", //列数据在数据项中对应的路径
        key: "name",
        slots: { customRender: "name" }, //对应数据项的属性名
      },
      {
        title: "内容",
        dataIndex: "specs",
        key: "specs",
      },
      {
        title: "风险等级",
        dataIndex: "grade",
        key: "grade",
        slots: { customRender: "grade" },
      },
      // { title: "操作建议", dataIndex: "amount", key: "amount" },
      // { title: "负责人", dataIndex: "worker", key: "worker" },
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
        label: "已发送通知",
        event: function (record) {
          alert("已发送通知");
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
    };
  },
};
</script>
