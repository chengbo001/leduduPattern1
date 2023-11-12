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
          <a-card v-for="(item, index) of data" :key="index">
            <a-descriptions
              :title="item.field1.key + ' ' + item.field1.value"
              :column="6"
              bordered
            >
              <!-- <template #extra>
                <a-space>
                  <a-button type="primary">编辑</a-button>
                  <a-button>删除</a-button>
                </a-space>
              </template> -->
              <template v-for="(item2, index2) of descList">
                <a-descriptions-item
                  :key="index2"
                  :label="item[item2].key"
                  v-if="item[item2].show"
                  :span="3"
                >
                  <a-badge
                    :color="badgeColor[index2]"
                    :text="item[item2].value"
                  />
                </a-descriptions-item>
              </template>
            </a-descriptions>
          </a-card>
        </a-col>
        <a-col :span="24">
          <a-card>
            <div style="display: flex; justify-content: space-around">
              <a-button
                type="primary"
                @click="$alert('您已确认，将跳转到支付页面')"
                >确定</a-button
              >
              <a-button @click="$alert('已联系工作人员，请稍后')"
                >提出疑问</a-button
              >
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
        "key|+1": ["分析结果"],
        value: function () {
          return "JG0" + this.serail;
        },
        show: true,
      },
      field2: {
        "key|1": "早搏数量",
        "value|+1": ["3"],
        show: true,
      },
      field3: {
        "key|1": "早搏形态",
        "value|+1": ["单形性早搏"],
        show: true,
      },
      field4: {
        "key|1": "早搏频率",
        "value|+1": ["5"],
        show: true,
      },
      field5: {
        "key|1": "早搏分布",
        "value|+1": ["心脏左上方"],
        show: true,
      },
      field6: {
        "key|1": "持续时间",
        "value|+1": ["500ms"],
        show: true,
      },
      field7: {
        "key|1": "诱发因素",
        "value|+1": ["劳累"],
        show: true,
      },
      field8: {
        "key|1": "发展趋势",
        "value|+1": ["有严重趋势"],
        show: true,
      },
      field9: {
        "key|1": "总成本",
        "value|+1": ["11.5"],
        show: false,
      },
      field10: {
        "key|1": "诊断能力",
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

/**
 * 循环遍历 a-descriptions-item 时使用
 */
const descList = Object.keys(data[0]).slice(1);

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
      descList,
      badgeColor,
    };
  },
});
</script>
