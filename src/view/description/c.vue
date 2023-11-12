<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
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
                <a-badge :color="badgeColor[0]" :text="item.field2.value" />
                <!-- <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }} -->
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field3.key"
                v-if="item.field3.show"
                :span="3"
              >
                <a-badge :color="badgeColor[1]" :text="item.field3.value" />
                <!-- <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }} -->
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field4.key"
                v-if="item.field4.show"
                :span="2"
              >
                <a-badge :color="badgeColor[2]" :text="item.field4.value" />
                <!-- <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }} -->
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field5.key"
                v-if="item.field5.show"
                :span="3"
              >
                <a-badge :color="badgeColor[3]" :text="item.field5.value" />
                <!-- <a-input-number v-model:value="inpuValue"></a-input-number>
                当前值：{{ inpuValue }} -->
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field6.key"
                v-if="item.field6.show"
                :span="3"
              >
                <a-badge :color="badgeColor[4]" :text="item.field6.value" />
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
//催收方式、催收日期、催收结果
const data = Mock.mock({
  "data|3": [
    {
      field1: {
        "serail|+1": 1,
        "key|+1": ["药物", "药物", "药物"],
        value: function () {
          return "YW0" + this.serail;
        },
      },
      field2: {
        "key|1": "生产信息",
        "value|+1": ["xx药厂", "xx药厂"],
        show: true,
      },
      field3: {
        "key|1": "流通信息",
        "value|+1": ["xx医药", "xx医药", "xx医药"],
        show: true,
      },
      field4: {
        "key|1": "质量信息",
        "value|+1": ["合格", "合格", "合格"],
        show: true,
      },
      field5: {
        "key|1": "状态",
        "value|+1": ["正常", "正常"],
        show: false,
      },
      field6: {
        "key|1": "时间",
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

const badgeColor = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "volcano",
  "gold",
  "lime",
];

export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const title = document.title;
    const inpuValue = ref(5);
    const formLabel = ["名称"].concat(
      Object.keys(data[0])
        .filter((item) => {
          return (
            data[0][item].serail == undefined && data[0][item].show == true
          );
        })
        .map((item) => data[0][item].key)
    );

    return {
      title,
      data,
      switchData,
      inpuValue,
      formLabel,
      badgeColor,
    };
  },
});
</script>
<style lang="scss" scoped>
.card {
  margin-bottom: 10px;
}
</style>
