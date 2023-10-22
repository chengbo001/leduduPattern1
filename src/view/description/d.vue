<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-space>
        <a-input-search placeholder="请输入" style="width: 400px" />
        <!-- <a-button>开始校验</a-button> -->
      </a-space>
      <div style="height: 10px"></div>
      <a-row :gutter="[10, 10]">
        <a-col :span="24">
          <a-card class="card" v-for="(item, index) of data" :key="index">
            <a-descriptions
              :title="item.field1.key + ' ' + item.field1.value"
              :column="5"
              bordered
            >
              <!-- <template #extra>
                <a-space>
                  <a-button type="primary">修改</a-button>
                  <a-button>取消</a-button>
                </a-space>
              </template> -->
              <a-descriptions-item :label="item.field2.key" :span="2">
                {{ item.field2.value }}
                <a-space style="margin-left: 30px">
                  <a-button size="small">增加</a-button>
                  <a-button size="small">调拨</a-button>
                </a-space>
              </a-descriptions-item>
              <a-descriptions-item :label="item.field3.key" :span="3">
                <a-badge status="processing" :text="item.field3.value" />
                <a-space style="margin-left: 30px">
                  <a-button size="small">增加</a-button>
                  <a-button size="small">调拨</a-button>
                </a-space>
              </a-descriptions-item>
              <a-descriptions-item :label="item.field4.key" :span="2">
                {{ item.field4.value }}
                <a-space style="margin-left: 30px">
                  <a-button size="small">增加</a-button>
                  <a-button size="small">调拨</a-button>
                </a-space>
              </a-descriptions-item>
              <!-- <a-descriptions-item :label="item.field5.key" :span="3">
                {{ item.field5.value }}
              </a-descriptions-item>
              <a-descriptions-item :label="item.field6.key" :span="3">
                {{ item.field6.value }}
              </a-descriptions-item> -->
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
        <!-- <a-col :span="24">
          <a-card>
            <div style="display: flex; justify-content: space-around">
              <a-button type="primary">自动调整</a-button>
              <a-button>重置</a-button>
            </div>
            <div style="height: 40px"></div>
            <div style="text-align: center">
              根据网络覆盖和容量需求，现已自动调整<a>基站JZ0359</a>、<a>基站JZ0360</a>、<a>基站JZ0358</a>、<a>基站JZ0357</a>参数，请查看确认
            </div>
          </a-card>
        </a-col> -->
        <!-- <a-col :span="24">
          <a-card>
            <div style="display: flex; justify-content: space-around">
              <a-button>下一个</a-button>
            </div>
          </a-card>
        </a-col> -->
      </a-row>
      <div style="height: 10px"></div>
      <a-pagination :current="1" :total="50" show-less-items />
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
  "data|3": [
    {
      field1: {
        "serail|+1": 1,
        "key|1": ["分区", "分区", "分区", "分区"],
        value: function () {
          return "FQ072" + this.serail;
        },
      },
      field2: {
        "key|1": "人员",
        "value|+1": ["20员", "20员", "20员"],
      },
      field3: {
        "key|1": "物资",
        "value|+1": ["10吨", "10吨", "10吨"],
      },
      field4: {
        "key|1": "设备",
        "value|+1": ["30台", "30台", "30台"],
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
<style lang="scss" scoped>
.card {
  margin-bottom: 10px;
}
</style>
