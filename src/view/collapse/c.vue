<template>
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="可以增强特定方向的语音信号，同时削弱其他方向的声音，从而提高所需语音的清晰度。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="10">
        <a-col :span="24">
          <a-collapse
            v-model:activeKey="activeKey"
            :expand-icon-position="expandIconPosition"
          >
            <a-collapse-panel
              v-for="(item, index) of data"
              :key="index"
              :header="item.header + ' ' + item.serial"
            >
              <a-form layout="inline">
                <a-form-item
                  v-for="(item, index) of switchData"
                  :key="index"
                  :label="item.label"
                >
                  <a-switch
                    v-model:checked="item.value"
                    size="small"
                  ></a-switch>
                </a-form-item>
              </a-form>
              <template #extra
                ><setting-outlined @click="handleClick"
              /></template>
            </a-collapse-panel>
          </a-collapse>
          <!-- <br />
          <span>Expand Icon Position:</span>
          <a-select v-model:value="expandIconPosition">
            <a-select-option value="left">left</a-select-option>
            <a-select-option value="right">right</a-select-option>
          </a-select> -->
        </a-col>
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
import { SettingOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";
const data = Mock.mock({
  "data|9": [
    {
      "key|+1": 1,
      "header|+1": ["电话会议", "在线课程", "语音识别"],
      "serial|1": function () {
        return "YYSB034" + this.key;
      },
      "text|+1": ["实时对话中已经消除不必要的声音反射。"],
    },
  ],
}).data;

const switchData = Mock.mock({
  "data|4": [
    {
      "key|+1": 1,
      "label|+1": ["上方", "下方", "左方", "右方"],
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
    const activeKey = ref(["0"]);
    const expandIconPosition = ref("right");
    const handleClick = (event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    };

    watch(activeKey, (val) => {});
    return {
      title,
      data,
      switchData,
      activeKey,
      expandIconPosition,
      handleClick,
    };
  },
});
</script>
