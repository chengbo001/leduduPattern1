<template>
  <div id="home">
    <page-layout>
      <page-header
        :title="title"
        describe="对直播间的运营数据进行多维度分析"
      ></page-header>
      <div style="height: 10px"></div>
      <a-row :gutter="[10, 10]">
        <!-- 自定义图表 -->
        <!-- <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card>
            <line-and-interval></line-and-interval>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card>
            <radial></radial>
          </a-card>
        </a-col> -->
        <!-- <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card>
            <pie></pie>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card>
            <line-group></line-group>
          </a-card>
        </a-col> -->
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card title="观众行为">
            <point></point>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card title="不同时间段数据变化">
            <box></box>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card title="成本与效果">
            <gauge-2></gauge-2>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card title="满意度">
            <gauge-1></gauge-1>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import { Chart } from "@antv/g2";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue";
import { onMounted, ref, onUnmounted } from "vue";
import { useStore } from "vuex";
import Mock from "better-mock";
import lineAndInterval from "./component/lineAndInterval.vue";
import radial from "./component/radial.vue";
import pie from "./component/pie.vue";
import lineGroup from "./component/lineGroup.vue";
import box from "./component/box.vue";
import point from "./component/point.vue";
import gauge1 from "./component/gauge1.vue";
import gauge2 from "./component/gauge2.vue";

export default {
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined,
    lineAndInterval,
    radial,
    pie,
    lineGroup,
    box,
    point,
    gauge1,
    gauge2,
  },
  data() {
    return {
      title: document.title,
    };
  },
  // setup() {
  //   const chartContainer = Mock.mock("@GUID");
  //   const chartRef = ref(null);

  //   onMounted(() => {
  //     const a = Mock.mock({
  //       "b|9": [
  //         {
  //           "num|+1": 2015,
  //           year: function () {
  //             return this.num + "年";
  //           },
  //           "sales|40-140": 0,
  //         },
  //       ],
  //     });
  //     const datass = a.b;

  //     const chart = new Chart({
  //       container: chartContainer,
  //       autoFit: true,
  //     });

  //     chart
  //       .interval()
  //       .data(datass)
  //       .encode("x", "year")
  //       .encode("y", "sales")
  //       .axis("y", { labelFormatter: "10" });

  //     chart.render();

  //     chartRef.value = chart;
  //   });
  //   onUnmounted(() => {
  //     chartRef.value && chartRef.value.destroy();
  //   });

  //   const createData = Mock.mock({
  //     "a|7": [
  //       {
  //         "key|+1": 1,
  //         name: "@CNAME",
  //         "amount|1000-20000": 0,
  //       },
  //     ],
  //   });

  //   const columns1 = [
  //     { title: "编号", dataIndex: "key", key: "key" },
  //     { title: "名称", dataIndex: "name", key: "name" },
  //     { title: "数量", dataIndex: "amount", key: "amount" },
  //     { title: "备注", dataIndex: "notes", key: "notes" },
  //   ];

  //   const datas = Mock.mock({
  //     "a|4": [
  //       {
  //         "key|+1": 1,
  //         name: function () {
  //           return "医疗设备" + this.key;
  //         },
  //         "amount|10000-20000": 0,
  //         "ratio|1-30": 0,
  //         notes: "",
  //       },
  //     ],
  //   });

  //   const columns2 = [
  //     { title: "编号", dataIndex: "key", key: "key" },
  //     { title: "名称", dataIndex: "name", key: "name" },
  //     { title: "比例", dataIndex: "ratio", key: "ratio" },
  //     { title: "备注", dataIndex: "notes", key: "notes" },
  //   ];

  //   return {
  //     chartContainer,
  //     columns1,
  //     datas1: datas.a,
  //     columns2,
  //     datas2: datas.a,
  //     rankData: createData.a,
  //   };
  // },
};
</script>
<style lang="less" scoped>
.ant-divider-horizontal {
  margin-bottom: 10px !important;
}
.card-left {
  display: inline;
}
.card-right {
  float: right;
}
</style>
