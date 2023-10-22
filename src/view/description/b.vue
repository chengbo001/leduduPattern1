<template>
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="设置基站的发射功率、接收灵敏度、天线增益等参数。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-input-search placeholder="请输入" style="width: 400px" />
      <div style="height: 10px"></div>
      <a-row :gutter="[10, 10]">
        <a-col :span="24">
          <a-card v-for="(item, index) of data" :key="index">
            <a-descriptions
              :title="item.field1.key + ' ' + item.field1.value"
              :column="5"
              bordered
            >
              <!-- <template #extra>
                <a-space>
                  <a-button type="primary">编辑</a-button>
                  <a-button>删除</a-button>
                </a-space>
              </template> -->
              <a-descriptions-item :label="item.field2.key" :span="2">
                <!-- {{ item.field1.value }} -->
                <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }}
              </a-descriptions-item>
              <a-descriptions-item :label="item.field3.key" :span="3">
                <!-- <a-badge status="processing" :text="item.field2.value" /> -->
                <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }}
              </a-descriptions-item>
              <a-descriptions-item :label="item.field4.key" :span="2">
                <!-- {{ item.field3.value }} -->
                <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }}
              </a-descriptions-item>
              <a-descriptions-item :label="item.field5.key" :span="3">
                <!-- {{ item.field4.value }} -->
                <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }}
              </a-descriptions-item>
              <a-descriptions-item :label="item.field6.key" :span="3">
                <!-- {{ item.field5.value }} -->
                <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }}
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item
                v-for="item of ['名称', '描述', '目标', '方法', '预期成果']"
                :key="item"
                :label="item"
              >
                <a-input />
              </a-form-item>
              <a-button type="primary" style="display: block; margin: 0 auto">
                提交
              </a-button>
            </a-form>
          </a-card>
        </a-col> -->
        <a-col :span="24">
          <a-card>
            <div style="display: flex; justify-content: space-around">
              <a-button type="primary">确定</a-button>
              <a-button>重置</a-button>
            </div>
            <div style="height: 10px"></div>
            <div style="display: flex">
              <p style="width: 100px">调整原因：</p>
              <a-textarea></a-textarea>
            </div>
          </a-card>
        </a-col>
        <!-- <a-col :span="24">
          <a-card>
            <div style="display: flex; justify-content: space-around">
              <a-button>下一个</a-button>
            </div>
          </a-card>
        </a-col> -->
      </a-row>
      <!-- <div style="height: 10px"></div>
      <a-pagination :current="1" :total="50" show-less-items /> -->
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
import {
  SettingOutlined,
  TrademarkCircleOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";

const data = Mock.mock({
  data: [
    {
      field1: {
        "serail|+1": 1,
        "key|1": ["基站", "基站", "基站", "基站"],
        value: function () {
          return "JZ072" + this.serail;
        },
      },
      field2: {
        "key|1": "发射功率",
        "value|+1": ["科技提升产能", "科技提升管理水平", "科技提升自动化水平"],
      },
      field3: {
        "key|1": "接收灵敏度",
        "value|+1": ["产能提升5%", "管理水平提升5%", "自动化水平提升5%"],
      },
      field4: {
        "key|1": "天线增益",
        "value|+1": [
          "使用新材料新工艺",
          "使用新的管理模式管理平台",
          "引入新设备新产业链",
        ],
      },
      field5: {
        "key|1": "发射频率",
        "value|+1": ["达到预定的数值", "达到预定的数值", "达到预定的数值"],
      },
      field6: {
        "key|1": "发射间隔",
        value:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
      },
    },
  ],
}).data;

const switchData = Mock.mock({
  "data|5": [
    {
      "label|+1": [
        "第一个目标",
        "第二个目标",
        "第三个目标",
        "第四个目标",
        "第五个目标",
      ],
      value: true,
    },
  ],
}).data;

export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const title = document.title;
    const inpuValue = ref(5);
    return {
      title,
      data,
      switchData,
      inpuValue,
    };
  },
});
</script>
