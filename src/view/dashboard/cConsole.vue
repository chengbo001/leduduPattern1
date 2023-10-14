<template>
  <div id="home">
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <a-card>
            <p-count
              startVal="5500"
              :endVal="Math.floor(Math.random() * 1000) + 6000"
              decimals="2"
              speed="300"
            />
            <a-progress
              :show-info="false"
              style="margin-top: 16px"
              :percent="30"
              size="small"
            />
            <a-divider />
            <div class="card-left">目标量</div>
            <div class="card-right">
              {{ Math.floor(Math.random() * 10) + 60 }} 万
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <a-card>
            <p-count
              startVal="4500"
              :endVal="Math.floor(Math.random() * 1000) + 5000"
              decimals="2"
              speed="300"
            />
            <a-progress
              style="margin-top: 16px"
              :percent="50"
              size="small"
              status="active"
              :show-info="false"
            />
            <a-divider />
            <div class="card-left">完成量</div>
            <div class="card-right">
              {{ Math.floor(Math.random() * 10) + 30 }} 万
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <a-card>
            <p-count
              startVal="6500"
              :endVal="Math.floor(Math.random() * 1000) + 7000"
              decimals="2"
              speed="300"
            />
            <a-progress
              :show-info="false"
              style="margin-top: 16px"
              :percent="30"
              size="small"
            />
            <a-divider />
            <div class="card-left">完成率</div>
            <div class="card-right">
              {{ Math.floor(Math.random() * 100) }} %
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <a-card>
            <p-count
              startVal="0"
              :endVal="Math.floor(Math.random() * 100)"
              decimals="2"
              speed="300"
            />
            <a-progress
              style="margin-top: 16px"
              :percent="50"
              size="small"
              status="active"
              :show-info="false"
            />
            <a-divider />
            <div class="card-left">工作人员</div>
            <div class="card-right">
              {{ Math.floor(Math.random() * 100) }} 人
            </div>
          </a-card>
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
          <a-card>
            <a-tabs>
              <a-tab-pane key="1" tab="对比">
                <a-row>
                  <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                    <div
                      :id="chartContainer"
                      style="width: 100%; height: 100%"
                    ></div>
                  </a-col>
                  <a-col
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="{ span: 7, offset: 1 }"
                    :xl="{ span: 7, offset: 1 }"
                  >
                    <a-row
                      style="margin: 22px"
                      v-for="item of rankData"
                      :key="item.key"
                    >
                      <a-col span="2"
                        ><div>{{ item.key }}</div></a-col
                      >
                      <a-col span="18">{{ item.name }}</a-col>
                      <a-col span="4">{{ item.amount }}</a-col>
                    </a-row>
                  </a-col>
                </a-row>
              </a-tab-pane>
              <a-tab-pane key="2" tab="排行" force-render> </a-tab-pane>
            </a-tabs>
          </a-card>
        </a-col>
        <!-- 两个排行开始 -->
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card title="热门类">
            <a-row :gutter="10">
              <a-col :span="12">
                <a-card>
                  <a-statistic
                    title="种类"
                    :value="Math.floor(Math.random() * 10) + 10"
                    :precision="2"
                    suffix="%"
                    :value-style="{ color: '#3f8600' }"
                    style="margin-right: 50px"
                  >
                    <template v-slot:prefix>
                      <arrow-up-outlined />
                    </template>
                  </a-statistic>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card>
                  <a-statistic
                    title="不良率"
                    :value="Math.floor(Math.random() * 10) + 10"
                    :precision="2"
                    suffix="%"
                    class="demo-class"
                    :value-style="{ color: '#cf1322' }"
                  >
                    <template v-slot:prefix>
                      <arrow-down-outlined />
                    </template>
                  </a-statistic>
                </a-card>
              </a-col>
              <a-col span="24">
                <a-table
                  :columns="columns1"
                  :data-source="datas1"
                  style="margin-top: 10px"
                />
              </a-col>
            </a-row>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card title="各类占比">
            <a-row :gutter="10">
              <a-col :span="12">
                <a-card>
                  <a-statistic
                    title="优化"
                    :value="Math.floor(Math.random() * 10) + 10"
                    :precision="2"
                    suffix="%"
                    :value-style="{ color: '#3f8600' }"
                    style="margin-right: 50px"
                  >
                    <template v-slot:prefix>
                      <arrow-up-outlined />
                    </template>
                  </a-statistic>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card>
                  <a-statistic
                    title="问题"
                    :value="Math.floor(Math.random() * 10) + 10"
                    :precision="2"
                    suffix="%"
                    class="demo-class"
                    :value-style="{ color: '#cf1322' }"
                  >
                    <template v-slot:prefix>
                      <arrow-down-outlined />
                    </template>
                  </a-statistic>
                </a-card>
              </a-col>
              <a-col span="24">
                <a-table
                  :columns="columns2"
                  :data-source="datas2"
                  style="margin-top: 10px"
                />
              </a-col>
            </a-row>
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

export default {
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined,
  },
  setup() {
    const chartContainer = Mock.mock("@GUID");
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
        container: chartContainer,
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
      chartContainer,
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
