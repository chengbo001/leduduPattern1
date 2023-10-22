<template>
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="系统需要能够从图像中提取出有意义的特征，如边缘、轮廓、纹理等，以便进行进一步的分析。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-input-search
        placeholder="请输入"
        style="width: 400px"
        @search="$alert('正在搜索中，请稍后')"
      />
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
                  <a-button type="primary">编辑</a-button>
                  <a-button>删除</a-button>
                </a-space>
              </template> -->
              <a-descriptions-item
                :label="item.field2.key"
                v-if="item.field2.show"
                :span="2"
              >
                {{ item.field2.value }}
                <!-- <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }} -->
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field3.key"
                v-if="item.field3.show"
                :span="3"
              >
                <a-badge status="processing" :text="item.field2.value" />
                <!-- <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }} -->
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field4.key"
                v-if="item.field4.show"
                :span="2"
              >
                {{ item.field3.value }}
                <!-- <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }} -->
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field5.key"
                v-if="item.field5.show"
                :span="3"
              >
                {{ item.field4.value }}
                <!-- <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }} -->
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field6.key"
                v-if="item.field6.show"
                :span="3"
              >
                {{ item.field5.value }}
                <!-- <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }} -->
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item v-for="item of formLabel" :key="item" :label="item">
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
  "data|5": [
    {
      field1: {
        "serail|+1": 1,
        "key|1": ["", ""],
        value: function () {
          return "TXSP072" + this.serail;
        },
      },
      field2: {
        "key|1": "边缘",
        "value|+1": ["景色边缘", "建筑边缘", "街道边缘"],
        show: true,
      },
      field3: {
        "key|1": "轮廓",
        "value|+1": ["身型轮廓", "圆形轮廓", "动物轮廓"],
        show: true,
      },
      field4: {
        "key|1": "纹理",
        "value|+1": ["绿色纹理", "彩色纹理", "灰白纹理"],
        show: true,
      },
      field5: {
        "key|1": "发射频率",
        "value|+1": ["达到预定的数值", "达到预定的数值", "达到预定的数值"],
        show: false,
      },
      field6: {
        "key|1": "发射间隔",
        value:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
        show: false,
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
    const formLabel = Object.keys(data[0])
      .filter((item) => {
        return data[0][item].serail == undefined && data[0][item].show == true;
      })
      .map((item) => data[0][item].key)
      .concat(["名称"]);

    return {
      title,
      data,
      switchData,
      inpuValue,
      formLabel,
    };
  },
});
</script>
<style lang="scss" scoped>
.card {
  margin-bottom: 10px;
}
</style>
