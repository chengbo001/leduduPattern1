<template>
  <div id="home">
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <a-card> </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <a-card> </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <a-card> </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <a-card> </a-card>
        </a-col>
        <!-- <a-col :xs="12" :sm="6" :md="6" :lg="3" :xl="3">
          <quick color="rgb(105, 192, 255)" icon="BuildFilled" title="用户">
          </quick>
        </a-col>
        <a-col :xs="12" :sm="6" :md="6" :lg="3" :xl="3">
          <quick color="rgb(149, 222, 100)" icon="CloudFilled" title="首页">
          </quick>
        </a-col>
        <a-col :xs="12" :sm="6" :md="6" :lg="3" :xl="3">
          <quick
            color="rgb(255, 156, 110)"
            icon="CustomerServiceFilled"
            title="访问"
          >
          </quick>
        </a-col>
        <a-col :xs="12" :sm="6" :md="6" :lg="3" :xl="3">
          <quick color="rgb(179, 127, 235)" icon="MailFilled" title="邮件">
          </quick>
        </a-col>
        <a-col :xs="12" :sm="6" :md="6" :lg="3" :xl="3">
          <quick
            color="rgb(255, 214, 102)"
            icon="NotificationFilled"
            title="消息"
          >
          </quick>
        </a-col>
        <a-col :xs="12" :sm="6" :md="6" :lg="3" :xl="3">
          <quick color="rgb(92, 219, 211)" icon="SignalFilled" title="统计">
          </quick>
        </a-col>
        <a-col :xs="12" :sm="6" :md="6" :lg="3" :xl="3">
          <quick color="rgb(255, 133, 192)" icon="TrophyFilled" title="排名">
          </quick>
        </a-col>
        <a-col :xs="12" :sm="6" :md="6" :lg="3" :xl="3">
          <quick color="rgb(255, 192, 105)" icon="BellFilled" title="通知">
          </quick>
        </a-col> -->
        <!-- 图表区域开始 -->
        <a-col :span="24">
          <a-card> </a-card>
        </a-col>
        <!-- 两个排行开始 -->
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card> </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card> </a-card>
        </a-col>
      </a-row>
      <line-and-interval></line-and-interval>
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

export default {
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined,
    lineAndInterval,
  },
  setup() {
    const chartRef = ref(null);

    onMounted(() => {
      const a = Mock.mock({
        "b|9": [
          {
            "num|+1": 2015,
            year: function () {
              return this.num + "年";
            },
            "sales|40-140": 0,
          },
        ],
      });
      const datass = a.b;

      const chart = new Chart({
        container: "aContainer",
        autoFit: true,
      });

      chart
        .interval()
        .data(datass)
        .encode("x", "year")
        .encode("y", "sales")
        .axis("y", { labelFormatter: "10" });

      chart.render();

      chartRef.value = chart;
    });
    onUnmounted(() => {
      chartRef.value && chartRef.value.destroy();
    });

    const createData = Mock.mock({
      "a|7": [
        {
          "key|+1": 1,
          name: "@CNAME",
          "amount|1000-20000": 0,
        },
      ],
    });

    const columns1 = [
      { title: "编号", dataIndex: "key", key: "key" },
      { title: "名称", dataIndex: "name", key: "name" },
      { title: "数量", dataIndex: "amount", key: "amount" },
      { title: "备注", dataIndex: "notes", key: "notes" },
    ];

    const datas = Mock.mock({
      "a|4": [
        {
          "key|+1": 1,
          name: function () {
            return "医疗设备" + this.key;
          },
          "amount|10000-20000": 0,
          "ratio|1-30": 0,
          notes: "",
        },
      ],
    });

    const columns2 = [
      { title: "编号", dataIndex: "key", key: "key" },
      { title: "名称", dataIndex: "name", key: "name" },
      { title: "比例", dataIndex: "ratio", key: "ratio" },
      { title: "备注", dataIndex: "notes", key: "notes" },
    ];

    return {
      columns1,
      datas1: datas.a,
      columns2,
      datas2: datas.a,
      rankData: createData.a,
    };
  },
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
