<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-space>
        <a-input-search
          placeholder="请输入"
          style="width: 400px"
          @search="$alert('正在搜索中，请稍后')"
        />
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
              <a-descriptions-item
                :label="item.field2.key"
                v-if="item.field2.show"
                :span="2"
              >
                {{ item.field2.value }}
                <a-space style="margin-left: 30px">
                  <a-button size="small" @click="$alert('已采购')"
                    >采购</a-button
                  >
                  <a-button size="small" @click="$alert('已联系')"
                    >联系</a-button
                  >
                </a-space>
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field3.key"
                v-if="item.field3.show"
                :span="3"
              >
                <a-badge status="processing" :text="item.field3.value" />
                <a-space style="margin-left: 30px">
                  <a-button size="small" @click="$alert('已采购')"
                    >采购</a-button
                  >
                  <a-button size="small" @click="$alert('已联系')"
                    >联系</a-button
                  >
                </a-space>
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field4.key"
                v-if="item.field4.show"
                :span="2"
              >
                {{ item.field4.value }}
                <!-- TODO 数据中给模版动态渲染 badge颜色绑定数据 -->
                <a-space style="margin-left: 30px">
                  <a-button size="small" @click="$alert('已采购')"
                    >采购</a-button
                  >
                  <a-button size="small" @click="$alert('已联系')"
                    >联系</a-button
                  >
                </a-space>
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field5.key"
                v-if="item.field5.show"
                :span="3"
              >
                {{ item.field5.value }}
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field6.key"
                v-if="item.field6.show"
                :span="3"
              >
                {{ item.field6.value }}
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item
                v-for="item of formLabel"
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
        "key|1": ["供应商", "供应商", "供应商"],
        value: function () {
          return "GYS072" + this.serail;
        },
      },
      field2: {
        "key|1": "商品SP01",
        "value|+1": ["20", "30", "35"],
        show: true,
      },
      field3: {
        "key|1": "商品SP02",
        "value|+1": ["10", "13", "15"],
        show: true,
      },
      field4: {
        "key|1": "商品SP03",
        "value|+1": ["30", "20", "15"],
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

const formLabel = ["名称"].concat(
  Object.keys(data[0])
    .filter((item) => {
      return data[0][item].serail == undefined && data[0][item].show == true;
    })
    .map((item) => data[0][item].key)
);

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
