<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
      <div style="height: 10px"></div>
      <!-- 管理系统用户和权限，如添加用户、分配角色等。为不同角色的人员分配不同的权限，确保数据安全和操作合规。 -->
      <a-row :gutter="[10, 10]">
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
              <template #worker="{ record }">
                <a-tag :color="record.tagColor">{{ record.worker }}</a-tag>
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
                @click="$alert('已提交')"
              >
                提交
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
  "a|10": [
    {
      "key|+1": 0,
      "serial|+1": 10001,
      name: "@CNAME",
      "age|20-60": 0,
      phone: "@PHONE",
      "grade|1": ["高", "中", "低"],
      "worker|+1": ["管理者", "操作", "查看"],
      "tagColor|+1": ["green", "cyan", "blue"],
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
        id: 1,
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
      {
        title: "权限",
        dataIndex: "worker",
        key: "worker",
        slots: { customRender: "worker" },
      },
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
        label: "新增",
        event: function (keys) {
          alert("请在右边表单中填写");
        },
      },
      {
        label: "删除",
        event: function (keys) {
          alert("已删除");
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
        label: "查看",
        event: function (record) {
          alert("即将跳转页面");
        },
      },
      {
        label: "修改",
        event: function (record) {
          alert("修改完成，已保存");
        },
      },
      {
        label: "删除",
        event: function (record) {
          alert("已删除");
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
