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
      const datass = Mock.mock({
        "b|9": [
          {
            "num|+1": 2015,
            year: function () {
              return this.num + "年";
            },
            "sales|40-140": 0,
          },
        ],
      }).b;

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

    const rankData = Mock.mock({
      "a|7": [
        {
          "key|+1": 1,
          name: "@CNAME",
          "amount|1000-20000": 0,
        },
      ],
    }).a;

    return {
      chartContainer,
      rankData,
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
